import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { WalletUIProvider } from "@algoscan/use-wallet-ui"
import './App.css'

// Options: https://github.com/TxnLab/use-wallet/blob/main/src/constants/constants.ts#L3
 //  KMD = "kmd",
 //  PERA = "pera",
 //  MYALGO = "myalgo",
 //  ALGOSIGNER = "algosigner",
 //  DEFLY = "defly",
 //  EXODUS = "exodus",
 //  WALLETCONNECT = "walletconnect",
 //  MNEMONIC = "mnemonic",
//const allowedWallets = ["kmd", "pera", "myalgo", "algosigner", "defly", "exodus", "walletconnect", "mnemonic"];
const allowedWallets = ["kmd", "myalgo", "algosigner", "mnemonic", "pera"];

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WalletUIProvider providers={allowedWallets}>
      <App />
    </WalletUIProvider>
  </React.StrictMode>
)
