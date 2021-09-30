$(document).ready(function () {
    web3 = new Web3(ethereum);
    console.log("Connection Object: ",web3)

    
 const contractAddress = "0xB19e449b6A63118EeF136524ABb53366819Efaa4";
 const contractAbi=[
    {
    "inputs": [],
    "name": "getMessage",
    "outputs": [
    {
    "internalType": "string",
    "name": "",
    "type": "string"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    }
   ]
   const account = "0x402764ED441Bc4A50528F076fcB2C9B1b4c6ff97";

   const privateKey="2419c676b29fbf8872d5f46006cd9bd2b55fd1bee7628d8bd35413d838c753d0"

   myContract = new web3.eth.Contract(contractAbi, contractAddress);

   const tx = {
 
    from: "0x402764ED441Bc4A50528F076fcB2C9B1b4c6ff97", 
    // target address, this could be a smart contract address
    to: "0xB19e449b6A63118EeF136524ABb53366819Efaa4", 
    data: myContract.methods.getMessage().encodeABI() 
  };

  const signPromise = web3.eth.accounts.signTransaction(tx, privateKey);

  signPromise.then((signedTx) => { 
    const sentTx = web3.eth.sendSignedTransaction(signedTx.raw || signedTx.rawTransaction);  
  
    sentTx.on("receipt", receipt => {
     console.log(receipt);
    });
  });

})