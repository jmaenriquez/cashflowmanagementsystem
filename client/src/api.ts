const BASE_URL = 'https://localhost:3000/api';


//---------------------- Account Group Routing ---------------------------

async function createAccGroup (account:{
        accname: string;       
        description: string;
    }) {
     {
        const res = await fetch(`${BASE_URL}/accounts`, {
            method: 'POST',
            headers: { 'Content Type': 'application/json' },
            body: JSON.stringify(account),
        });
        return res.json();
    }
}

async function getAccGroup(){
    const res = await fetch(`${BASE_URL}/accounts`);
    return res.json();
}

async function updateAccGroup(id: Number, account:{
    accname: string;
    decription: string;
}){
    const res = await fetch(`${BASE_URL}/accounts/${id}`,{
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(account)
    });
    return res.json()

}

async function deleteAccGroup(id: Number){
    const res = await fetch(`${BASE_URL}/accounts/${id}`, {
        method: 'DELETE',
    });
    res.json();
}

//------------------------- End of routing ------------------------------


//---------------------- Cashflow Rec Routing ---------------------------

async function addRecord(record:{
    date: Date
    description: string;
    accType: 'Debit' | 'Credit';
    accGroup: number;
    amount: number;
}){
    const res = await fetch(`${BASE_URL}/cashflow`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(record),
    });
    return res.json();

}

async function getRecord(){
    const res = await fetch(`${BASE_URL}/cashflow`);
    return res.json();
}

async function updateRecord (id:Number, record:{
    date: Date
    description: string;
    accType: 'Debit' | 'Credit';
    accGroup: number;
    amount: number;
}){
    const res = await fetch(`${BASE_URL}/cashflow/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record)
    });

    return res.json();
}

async function deleteRecord(id:Number){
    const res = await fetch(`${BASE_URL}/cashflow/${id}`, {
        method: 'DELETE',
    });
    return res.json();
}


//------------------------- End of routing ------------------------------

export default { createAccGroup, getAccGroup, updateAccGroup, deleteAccGroup, addRecord, getRecord, updateRecord, deleteRecord };