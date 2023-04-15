import algosdk from "algosdk";
import * as bkr from "beaker-ts";
export class Task {
    owner: string = "";
    task_note: string = "";
    is_completed: boolean = false;
    time: bigint = BigInt(0);
    static codec: algosdk.ABIType = algosdk.ABIType.from("(address,string,bool,uint64)");
    static fields: string[] = ["owner", "task_note", "is_completed", "time"];
    static decodeResult(val: algosdk.ABIValue | undefined): Task {
        return bkr.decodeNamedTuple(val, Task.fields) as Task;
    }
    static decodeBytes(val: Uint8Array): Task {
        return bkr.decodeNamedTuple(Task.codec.decode(val), Task.fields) as Task;
    }
}
export class Todo extends bkr.ApplicationClient {
    desc: string = "";
    override appSchema: bkr.Schema = { declared: { task_id: { type: bkr.AVMType.uint64, key: "task_id", desc: "", static: false } }, reserved: {} };
    override acctSchema: bkr.Schema = { declared: {}, reserved: {} };
    override approvalProgram: string = "I3ByYWdtYSB2ZXJzaW9uIDgKaW50Y2Jsb2NrIDAgMSA0MyAzMiAyNzIKYnl0ZWNibG9jayAweCAweDc0NjE3MzZiNWY2OTY0IDB4MDAKdHhuIE51bUFwcEFyZ3MKaW50Y18wIC8vIDAKPT0KYm56IG1haW5fbDEyCnR4bmEgQXBwbGljYXRpb25BcmdzIDAKcHVzaGJ5dGVzIDB4YTQwNzE1Y2YgLy8gImNyZWF0ZV90YXNrKHBheSxzdHJpbmcpdm9pZCIKPT0KYm56IG1haW5fbDExCnR4bmEgQXBwbGljYXRpb25BcmdzIDAKcHVzaGJ5dGVzIDB4OWI5M2ZhZGMgLy8gInVwZGF0ZV90YXNrKHVpbnQ2NCxzdHJpbmcpdm9pZCIKPT0KYm56IG1haW5fbDEwCnR4bmEgQXBwbGljYXRpb25BcmdzIDAKcHVzaGJ5dGVzIDB4NmI5YjhiNWUgLy8gInVwZGF0ZV9jb21wbGV0ZWRfc3RhdHVzKHVpbnQ2NCl2b2lkIgo9PQpibnogbWFpbl9sOQp0eG5hIEFwcGxpY2F0aW9uQXJncyAwCnB1c2hieXRlcyAweGY0YWIwMWQ1IC8vICJkZWxldGVfdGFzayh1aW50NjQpdm9pZCIKPT0KYm56IG1haW5fbDgKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMApwdXNoYnl0ZXMgMHhiYTgxNDlmZSAvLyAiZ2V0X3Rhc2sodWludDY0KShhZGRyZXNzLHN0cmluZyxib29sLHVpbnQ2NCkiCj09CmJueiBtYWluX2w3CmVycgptYWluX2w3Ogp0eG4gT25Db21wbGV0aW9uCmludGNfMCAvLyBOb09wCj09CnR4biBBcHBsaWNhdGlvbklECmludGNfMCAvLyAwCiE9CiYmCmFzc2VydAp0eG5hIEFwcGxpY2F0aW9uQXJncyAxCmJ0b2kKY2FsbHN1YiBnZXR0YXNrXzQKc3RvcmUgNApwdXNoYnl0ZXMgMHgxNTFmN2M3NSAvLyAweDE1MWY3Yzc1CmxvYWQgNApjb25jYXQKbG9nCmludGNfMSAvLyAxCnJldHVybgptYWluX2w4Ogp0eG4gT25Db21wbGV0aW9uCmludGNfMCAvLyBOb09wCj09CnR4biBBcHBsaWNhdGlvbklECmludGNfMCAvLyAwCiE9CiYmCmFzc2VydAp0eG5hIEFwcGxpY2F0aW9uQXJncyAxCmJ0b2kKY2FsbHN1YiBkZWxldGV0YXNrXzMKaW50Y18xIC8vIDEKcmV0dXJuCm1haW5fbDk6CnR4biBPbkNvbXBsZXRpb24KaW50Y18wIC8vIE5vT3AKPT0KdHhuIEFwcGxpY2F0aW9uSUQKaW50Y18wIC8vIDAKIT0KJiYKYXNzZXJ0CnR4bmEgQXBwbGljYXRpb25BcmdzIDEKYnRvaQpjYWxsc3ViIHVwZGF0ZWNvbXBsZXRlZHN0YXR1c18yCmludGNfMSAvLyAxCnJldHVybgptYWluX2wxMDoKdHhuIE9uQ29tcGxldGlvbgppbnRjXzAgLy8gTm9PcAo9PQp0eG4gQXBwbGljYXRpb25JRAppbnRjXzAgLy8gMAohPQomJgphc3NlcnQKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQpidG9pCnN0b3JlIDIKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgpzdG9yZSAzCmxvYWQgMgpsb2FkIDMKY2FsbHN1YiB1cGRhdGV0YXNrXzEKaW50Y18xIC8vIDEKcmV0dXJuCm1haW5fbDExOgp0eG4gT25Db21wbGV0aW9uCmludGNfMCAvLyBOb09wCj09CnR4biBBcHBsaWNhdGlvbklECmludGNfMCAvLyAwCiE9CiYmCmFzc2VydAp0eG5hIEFwcGxpY2F0aW9uQXJncyAxCnN0b3JlIDEKdHhuIEdyb3VwSW5kZXgKaW50Y18xIC8vIDEKLQpzdG9yZSAwCmxvYWQgMApndHhucyBUeXBlRW51bQppbnRjXzEgLy8gcGF5Cj09CmFzc2VydApsb2FkIDAKbG9hZCAxCmNhbGxzdWIgY3JlYXRldGFza18wCmludGNfMSAvLyAxCnJldHVybgptYWluX2wxMjoKdHhuIE9uQ29tcGxldGlvbgppbnRjXzAgLy8gTm9PcAo9PQpibnogbWFpbl9sMTQKZXJyCm1haW5fbDE0Ogp0eG4gQXBwbGljYXRpb25JRAppbnRjXzAgLy8gMAo9PQphc3NlcnQKaW50Y18xIC8vIDEKcmV0dXJuCgovLyBjcmVhdGVfdGFzawpjcmVhdGV0YXNrXzA6CnByb3RvIDIgMApieXRlY18wIC8vICIiCmR1cAppbnRjXzAgLy8gMApkdXAKYnl0ZWNfMCAvLyAiIgppbnRjXzAgLy8gMApkdXAKYnl0ZWNfMCAvLyAiIgpkdXAKZnJhbWVfZGlnIC0yCmd0eG5zIEFtb3VudApwdXNoaW50IDIwMDAgLy8gMjAwMAo+PQphc3NlcnQKZnJhbWVfZGlnIC0yCmd0eG5zIFJlY2VpdmVyCmdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCj09CmFzc2VydApmcmFtZV9kaWcgLTIKZ3R4bnMgU2VuZGVyCnR4biBTZW5kZXIKPT0KYXNzZXJ0CmZyYW1lX2RpZyAtMQpleHRyYWN0IDIgMApieXRlY18wIC8vICIiCiE9CmFzc2VydAp0eG4gU2VuZGVyCmZyYW1lX2J1cnkgMApmcmFtZV9kaWcgMApsZW4KaW50Y18zIC8vIDMyCj09CmFzc2VydApmcmFtZV9kaWcgLTEKZXh0cmFjdCAyIDAKZnJhbWVfYnVyeSAxCmZyYW1lX2RpZyAxCmxlbgppdG9iCmV4dHJhY3QgNiAwCmZyYW1lX2RpZyAxCmNvbmNhdApmcmFtZV9idXJ5IDEKaW50Y18wIC8vIDAKIQohCmZyYW1lX2J1cnkgMgpnbG9iYWwgTGF0ZXN0VGltZXN0YW1wCmZyYW1lX2J1cnkgMwpmcmFtZV9kaWcgMApmcmFtZV9kaWcgMQpmcmFtZV9idXJ5IDgKZnJhbWVfZGlnIDgKZnJhbWVfYnVyeSA3CmludGNfMiAvLyA0MwpmcmFtZV9idXJ5IDUKZnJhbWVfZGlnIDUKaXRvYgpleHRyYWN0IDYgMApjb25jYXQKYnl0ZWNfMiAvLyAweDAwCmludGNfMCAvLyAwCmZyYW1lX2RpZyAyCnNldGJpdApjb25jYXQKZnJhbWVfZGlnIDMKaXRvYgpjb25jYXQKZnJhbWVfZGlnIDcKY29uY2F0CmZyYW1lX2J1cnkgNApieXRlY18xIC8vICJ0YXNrX2lkIgphcHBfZ2xvYmFsX2dldAppdG9iCmJveF9kZWwKcG9wCmJ5dGVjXzEgLy8gInRhc2tfaWQiCmFwcF9nbG9iYWxfZ2V0Cml0b2IKZnJhbWVfZGlnIDQKYm94X3B1dApieXRlY18xIC8vICJ0YXNrX2lkIgpieXRlY18xIC8vICJ0YXNrX2lkIgphcHBfZ2xvYmFsX2dldAppbnRjXzEgLy8gMQorCmFwcF9nbG9iYWxfcHV0CnJldHN1YgoKLy8gdXBkYXRlX3Rhc2sKdXBkYXRldGFza18xOgpwcm90byAyIDAKYnl0ZWNfMCAvLyAiIgpkdXBuIDIKaW50Y18wIC8vIDAKZHVwbiAzCmJ5dGVjXzAgLy8gIiIKZHVwCmZyYW1lX2RpZyAtMgppdG9iCmJveF9nZXQKc3RvcmUgNgpzdG9yZSA1CmxvYWQgNgphc3NlcnQKbG9hZCA1CmZyYW1lX2J1cnkgMApmcmFtZV9kaWcgMApleHRyYWN0IDAgMzIKZnJhbWVfYnVyeSAxCnR4biBTZW5kZXIKZnJhbWVfZGlnIDEKPT0KYXNzZXJ0CmZyYW1lX2RpZyAtMQpleHRyYWN0IDIgMApieXRlY18wIC8vICIiCiE9CmFzc2VydApmcmFtZV9kaWcgLTEKZXh0cmFjdCAyIDAKZnJhbWVfYnVyeSAyCmZyYW1lX2RpZyAyCmxlbgppdG9iCmV4dHJhY3QgNiAwCmZyYW1lX2RpZyAyCmNvbmNhdApmcmFtZV9idXJ5IDIKZnJhbWVfZGlnIDAKaW50YyA0IC8vIDI3MgpnZXRiaXQKZnJhbWVfYnVyeSAzCmZyYW1lX2RpZyAwCnB1c2hpbnQgMzUgLy8gMzUKZXh0cmFjdF91aW50NjQKZnJhbWVfYnVyeSA0CmZyYW1lX2RpZyAxCmZyYW1lX2RpZyAyCmZyYW1lX2J1cnkgOApmcmFtZV9kaWcgOApmcmFtZV9idXJ5IDcKaW50Y18yIC8vIDQzCmZyYW1lX2J1cnkgNQpmcmFtZV9kaWcgNQppdG9iCmV4dHJhY3QgNiAwCmNvbmNhdApieXRlY18yIC8vIDB4MDAKaW50Y18wIC8vIDAKZnJhbWVfZGlnIDMKc2V0Yml0CmNvbmNhdApmcmFtZV9kaWcgNAppdG9iCmNvbmNhdApmcmFtZV9kaWcgNwpjb25jYXQKZnJhbWVfYnVyeSAwCmZyYW1lX2RpZyAtMgppdG9iCmJveF9kZWwKcG9wCmZyYW1lX2RpZyAtMgppdG9iCmZyYW1lX2RpZyAwCmJveF9wdXQKcmV0c3ViCgovLyB1cGRhdGVfY29tcGxldGVkX3N0YXR1cwp1cGRhdGVjb21wbGV0ZWRzdGF0dXNfMjoKcHJvdG8gMSAwCmJ5dGVjXzAgLy8gIiIKZHVwCmludGNfMCAvLyAwCmJ5dGVjXzAgLy8gIiIKaW50Y18wIC8vIDAKZHVwbiAyCmJ5dGVjXzAgLy8gIiIKZHVwCmZyYW1lX2RpZyAtMQppdG9iCmJveF9nZXQKc3RvcmUgOApzdG9yZSA3CmxvYWQgOAphc3NlcnQKbG9hZCA3CmZyYW1lX2J1cnkgMApmcmFtZV9kaWcgMApleHRyYWN0IDAgMzIKZnJhbWVfYnVyeSAxCnR4biBTZW5kZXIKZnJhbWVfZGlnIDEKPT0KYXNzZXJ0CmZyYW1lX2RpZyAwCmludGMgNCAvLyAyNzIKZ2V0Yml0CmZyYW1lX2J1cnkgMgpmcmFtZV9kaWcgMgppbnRjXzAgLy8gMAo9PQpibnogdXBkYXRlY29tcGxldGVkc3RhdHVzXzJfbDIKaW50Y18wIC8vIDAKIQohCmZyYW1lX2J1cnkgMgpiIHVwZGF0ZWNvbXBsZXRlZHN0YXR1c18yX2wzCnVwZGF0ZWNvbXBsZXRlZHN0YXR1c18yX2wyOgppbnRjXzEgLy8gMQohCiEKZnJhbWVfYnVyeSAyCnVwZGF0ZWNvbXBsZXRlZHN0YXR1c18yX2wzOgpmcmFtZV9kaWcgMApmcmFtZV9kaWcgMAppbnRjXzMgLy8gMzIKZXh0cmFjdF91aW50MTYKZGlnIDEKbGVuCnN1YnN0cmluZzMKZnJhbWVfYnVyeSAzCmZyYW1lX2RpZyAwCnB1c2hpbnQgMzUgLy8gMzUKZXh0cmFjdF91aW50NjQKZnJhbWVfYnVyeSA0CmZyYW1lX2RpZyAxCmZyYW1lX2RpZyAzCmZyYW1lX2J1cnkgOApmcmFtZV9kaWcgOApmcmFtZV9idXJ5IDcKaW50Y18yIC8vIDQzCmZyYW1lX2J1cnkgNQpmcmFtZV9kaWcgNQppdG9iCmV4dHJhY3QgNiAwCmNvbmNhdApieXRlY18yIC8vIDB4MDAKaW50Y18wIC8vIDAKZnJhbWVfZGlnIDIKc2V0Yml0CmNvbmNhdApmcmFtZV9kaWcgNAppdG9iCmNvbmNhdApmcmFtZV9kaWcgNwpjb25jYXQKZnJhbWVfYnVyeSAwCmZyYW1lX2RpZyAtMQppdG9iCmJveF9kZWwKcG9wCmZyYW1lX2RpZyAtMQppdG9iCmZyYW1lX2RpZyAwCmJveF9wdXQKcmV0c3ViCgovLyBkZWxldGVfdGFzawpkZWxldGV0YXNrXzM6CnByb3RvIDEgMApieXRlY18wIC8vICIiCmR1cApmcmFtZV9kaWcgLTEKaXRvYgpib3hfZ2V0CnN0b3JlIDEwCnN0b3JlIDkKbG9hZCAxMAphc3NlcnQKbG9hZCA5CmZyYW1lX2J1cnkgMApmcmFtZV9kaWcgMApleHRyYWN0IDAgMzIKZnJhbWVfYnVyeSAxCnR4biBTZW5kZXIKZnJhbWVfZGlnIDEKPT0KYXNzZXJ0CmZyYW1lX2RpZyAtMQppdG9iCmJveF9kZWwKcG9wCnJldHN1YgoKLy8gZ2V0X3Rhc2sKZ2V0dGFza180Ogpwcm90byAxIDEKYnl0ZWNfMCAvLyAiIgpmcmFtZV9kaWcgLTEKaXRvYgpib3hfZ2V0CnN0b3JlIDEyCnN0b3JlIDExCmxvYWQgMTIKYXNzZXJ0CmxvYWQgMTEKZnJhbWVfYnVyeSAwCnJldHN1Yg==";
    override clearProgram: string = "I3ByYWdtYSB2ZXJzaW9uIDgKcHVzaGludCAwIC8vIDAKcmV0dXJu";
    override methods: algosdk.ABIMethod[] = [
        new algosdk.ABIMethod({ name: "create_task", desc: "", args: [{ type: "pay", name: "_txn", desc: "" }, { type: "string", name: "_task_note", desc: "" }], returns: { type: "void", desc: "" } }),
        new algosdk.ABIMethod({ name: "update_task", desc: "", args: [{ type: "uint64", name: "_task_id", desc: "" }, { type: "string", name: "_new_task_note", desc: "" }], returns: { type: "void", desc: "" } }),
        new algosdk.ABIMethod({ name: "update_completed_status", desc: "", args: [{ type: "uint64", name: "_task_id", desc: "" }], returns: { type: "void", desc: "" } }),
        new algosdk.ABIMethod({ name: "delete_task", desc: "", args: [{ type: "uint64", name: "_task_id", desc: "" }], returns: { type: "void", desc: "" } }),
        new algosdk.ABIMethod({ name: "get_task", desc: "", args: [{ type: "uint64", name: "_task_id", desc: "" }], returns: { type: "(address,string,bool,uint64)", desc: "" } })
    ];
    async create_task(args: {
        _txn: algosdk.TransactionWithSigner | algosdk.Transaction;
        _task_note: string;
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<void>> {
        const result = await this.execute(await this.compose.create_task({ _txn: args._txn, _task_note: args._task_note }, txnParams));
        return new bkr.ABIResult<void>(result);
    }
    async update_task(args: {
        _task_id: bigint;
        _new_task_note: string;
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<void>> {
        const result = await this.execute(await this.compose.update_task({ _task_id: args._task_id, _new_task_note: args._new_task_note }, txnParams));
        return new bkr.ABIResult<void>(result);
    }
    async update_completed_status(args: {
        _task_id: bigint;
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<void>> {
        const result = await this.execute(await this.compose.update_completed_status({ _task_id: args._task_id }, txnParams));
        return new bkr.ABIResult<void>(result);
    }
    async delete_task(args: {
        _task_id: bigint;
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<void>> {
        const result = await this.execute(await this.compose.delete_task({ _task_id: args._task_id }, txnParams));
        return new bkr.ABIResult<void>(result);
    }
    async get_task(args: {
        _task_id: bigint;
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<[
        string,
        string,
        boolean,
        bigint
    ]>> {
        const result = await this.execute(await this.compose.get_task({ _task_id: args._task_id }, txnParams));
        return new bkr.ABIResult<[
            string,
            string,
            boolean,
            bigint
        ]>(result, result.returnValue as [
            string,
            string,
            boolean,
            bigint
        ]);
    }
    compose = {
        create_task: async (args: {
            _txn: algosdk.TransactionWithSigner | algosdk.Transaction;
            _task_note: string;
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "create_task"), { _txn: args._txn, _task_note: args._task_note }, txnParams, atc);
        },
        update_task: async (args: {
            _task_id: bigint;
            _new_task_note: string;
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "update_task"), { _task_id: args._task_id, _new_task_note: args._new_task_note }, txnParams, atc);
        },
        update_completed_status: async (args: {
            _task_id: bigint;
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "update_completed_status"), { _task_id: args._task_id }, txnParams, atc);
        },
        delete_task: async (args: {
            _task_id: bigint;
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "delete_task"), { _task_id: args._task_id }, txnParams, atc);
        },
        get_task: async (args: {
            _task_id: bigint;
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "get_task"), { _task_id: args._task_id }, txnParams, atc);
        }
    };
}
