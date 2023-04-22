// @ts-nocheck 

import algosdk from "algosdk";
import { useState, useEffect } from "react";
import { clients } from "beaker-ts";
import { Todo } from "./todo_client";

import { AppBar, Box, Toolbar, Button } from "@mui/material";

import { useWalletUI, WalletUI } from '@algoscan/use-wallet-ui/dist/index.js'

// If you just need a placeholder signer
const PlaceHolderSigner: algosdk.TransactionSigner = (
  _txnGroup: algosdk.Transaction[],
  _indexesToSign: number[],
): Promise<Uint8Array[]> => {
  return Promise.resolve([]);
};

// AnonClient can still allow reads for an app but no transactions
// can be signed
const AnonClient = (client: algosdk.Algodv2, appId: number): Todo => {
  return new Todo({
    // @ts-ignore
    client: client,
    signer: PlaceHolderSigner,
    sender: "",
    appId: appId,
  });
};


export default function App() {


  const [appId, setAppId] = useState<number>(190964618);
  

  // Setup config for client/network.
  const [apiProvider, setApiProvider] = useState(clients.APIProvider.AlgoNode);
  const [network, setNetwork] = useState(clients.Network.TestNet);
  // Init our algod client
  const algodClient = clients.getAlgodClient(apiProvider, network);

  const [modalStatus, setmodalStatus] = useState(false);
  const [editModalStatus, setEditModalStatus] = useState(false);
  
  const [todos, setTodos] = useState([]);
  const [note, setNote] = useState<string>("")
  const [newNote, setNewNote] = useState<string>("")
  const [currentId, setCurrentId] = useState<bigint>(0n)


  // Set up user wallet from session
  const { activeAccount, signer } = useWalletUI();

  // Init our app client
  const [appClient, setAppClient] = useState<Todo>(
    AnonClient(algodClient, appId)
  );

  // If the account info, client, or app id change
  // update our app client
  async function _get_task_notes() {
    const todos = await get_task_notes()
    setTodos(todos)
  }

  useEffect(() => {
    // Bad way to track connected status but...
    if (activeAccount === null && appClient.sender !== "") {
      setAppClient(AnonClient(algodClient, appId));
      return
    } 

    if (
      activeAccount && activeAccount.address != appClient.sender
    ) {
      setAppClient(
        new Todo({
          client: algodClient,
          signer: signer,
          sender: activeAccount.address,
          appId: appId,
        })
      );
    }
    _get_task_notes()
  }, [activeAccount]);
  

  async function handleSubmit(): Promise<void>{
    await createTask(note)
    setmodalStatus(false)
  }

  async function handleEditSubmit(id): Promise<void>{
    await updateTask(id, newNote)
    setEditModalStatus(false)
  }

  async function updateTask(id: bigint, task_note: string) {

    await appClient.update_task({ _task_id: BigInt(id), _new_task_note: task_note}, {
      boxes: [{
        appIndex: appId,
        name: algosdk.bigIntToBytes(Number(id), 8)
      }]
    });
    _get_task_notes()

  }

  async function createTask(task_note: string) {

    let txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      from: activeAccount?.address || "",
      suggestedParams: await algodClient.getTransactionParams().do(),
      to: algosdk.getApplicationAddress(appId),
      amount: BigInt(2000)
    })

    // Get length of box
    let length = 0;
    for(let _boxName in await appClient.getApplicationBoxNames()) {
      length++
    }

    const boxName = length;
    await appClient.create_task({ _txn: txn, _task_note: task_note}, {
      boxes: [{
        appIndex: appId,
        name: algosdk.bigIntToBytes(Number(boxName), 8)
      }]
    });
    _get_task_notes()

  }

  async function get_task_notes() {

    const task_notes = [];
    for(let boxName in await appClient.getApplicationBoxNames()) {
        const idx = algosdk.bigIntToBytes(Number(boxName), 8);
        const result = await appClient.getApplicationBox(idx)
        
        const resultCodec = algosdk.ABIType.from('(address,string,bool,uint64)')
        const val = resultCodec.decode(result)
        let note = {
          _id: boxName,
          owner: val[0],
          note: val[1],
          is_completed: val[2],
          date: Number(val[3]),
        }
        task_notes.push(note)
      }
    return task_notes;

  }
    
  
  async function toggleModal() {
    if(modalStatus) {
      return setmodalStatus(false)
    }

    setmodalStatus(true)
  
  }

  const modal = 
  <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      
      <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex ">
          <form className="space-y-6" action="#">
              <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Note: </label>
                  <input type="text" name="note" id="note" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Task Note" required onChange={(e) => {setNote(e.target.value)}}/>
              </div>

              <button type="button" onClick={() => {
                setmodalStatus(!modalStatus)
              }} className="w-full text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-modal-hide="authentication-modal">
                Close
              </button>

              <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e) => {
                  e.preventDefault()
                  handleSubmit()
              }}>Submit</button>
          </form>
      </div>
  </div>

  const editModal = <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      
  <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex ">
      <form className="space-y-6" action="#">
          <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Note: </label>
              <input type="text" name="note" id="note" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="New Task Note" required onChange={(e) => {setNewNote(e.target.value)}}/>
          </div>

          <button type="button" onClick={() => {
            editModalStatus == false? setEditModalStatus(true) : setEditModalStatus(false)
          }} className="w-full text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-modal-hide="authentication-modal">
            Close
          </button>

          <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e) => {
              e.preventDefault()
              handleEditSubmit(currentId)
          }}>Submit</button>
      </form>
  </div>
</div>

  // The app ui
  return (
    <div className="App">
      <AppBar position="static" color='secondary'>
        <Toolbar variant="regular">
        <h2>A-TODO</h2>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <WalletUI openState={false} primary='gray' textColor='#FF0000' />
          </Box>
        </Toolbar>
      </AppBar>
      <br/>

      <div className="m-10 p-10 bg-gray-200">
        <h2 className="mb-5">
          A PLACE TO ADD AND EXPLORE TODOS. WHAT ARE YOU WAITING FOR!
          LETS TODO
        </h2>
        <Button variant="outlined" onClick={toggleModal}>ADD A TODO</Button>
      </div>
      
      {modalStatus ? <>{modal}</> : ""}
      {editModalStatus ? <>{editModal}</> : ""}

      <h2 className="mx-60 font-bold mb-5 underline">TODOS</h2>
      <div className=" bg-black text-white">
      <div className="mx-60 py-10">
      { !!todos && todos.map((el, index) => (
        <div className="flex justify-between mb-5">
        <div><span className="mr-5">{index + 1}</span><span>{el.note}</span></div>
        <span className="ml-5">
          <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-white text-sm font-medium rounded-md"
          onClick={() => {
           setEditModalStatus(!editModalStatus)
            setCurrentId(el._id as unknown as bigint)
            }}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
	        </svg>
          Edit Todo
          </button>
        </span>
        </div>
      ))}
      </div>
      </div>

    </div>
  )
}
 
     
      
