function connectToMetMask() {
    ethereum.enable().then(result => {
        console.log("Account: ",result);
    })
}

$(document).ready(function () {
    web3 = new Web3(ethereum);
    console.log("Connection Object: ",web3)


 const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";
const contractAbi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "certificateDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "courseName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "candidateName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "grade",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "date",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_certificateID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_courseName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_candidateName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_grade",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_date",
				"type": "string"
			}
		],
		"name": "newCertificate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

myContract = new web3.eth.Contract(contractAbi, contractAddress);
})





