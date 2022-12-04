// 1. Declaração de variável global para armazenar a instância web3
let TuringContract;

// 2. Configuração do endereço do contrato e ABI
const TuringContract_Address = "0xdED19A29B0aDacb3eaD57245E0F802FcB894A01b";
const TuringContract_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "endVoting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "saTurings",
				"type": "uint256"
			}
		],
		"name": "issueToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "nickname",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "Turings",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lastVote",
		"outputs": [
			{
				"components": [
					{
						"components": [
							{
								"internalType": "address",
								"name": "addr",
								"type": "address"
							},
							{
								"internalType": "string",
								"name": "name",
								"type": "string"
							},
							{
								"internalType": "bool",
								"name": "valid",
								"type": "bool"
							}
						],
						"internalType": "struct User",
						"name": "receiver",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "addr",
								"type": "address"
							},
							{
								"internalType": "string",
								"name": "name",
								"type": "string"
							},
							{
								"internalType": "bool",
								"name": "valid",
								"type": "bool"
							}
						],
						"internalType": "struct User",
						"name": "sender",
						"type": "tuple"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"internalType": "struct VoteTransaction",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "whoItIs",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "addr",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "valid",
						"type": "bool"
					}
				],
				"internalType": "struct User",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
var users = {};
users["0xD07318971e2C15b4f8d3d28A0AEF8F16B9D8EAb6"] = "Andre";
users["0x127B963B9918261Ef713cB7950c4AD16d4Fe18c6"] = "Antonio";
users["0x5d84D451296908aFA110e6B37b64B1605658283f"] = "Ratonilo";
users["0x500E357176eE9D56c336e0DC090717a5B1119cC2"] = "eduardo";
users["0x5217A9963846a4fD62d35BB7d58eAB2dF9D9CBb8"] = "Enzo";
users["0xFED450e1300CEe0f69b1F01FA85140646E596567"] = "Fernando";
users["0xFec23E4c9540bfA6BBE39c4728652F2def99bc1e"] = "Juliana";
users["0x6701D0C23d51231E676698446E55F4936F5d99dF"] = "Altoe";
users["0x8321730F4D59c01f5739f1684ABa85f8262f8980"] = "Salgado";
users["0x4A35eFD10c4b467508C35f8C309Ebc34ae1e129a"] = "Regata";
users["0xDD551702Dc580B7fDa2ddB7a1Ca63d29E8CDCf33"] = "Luis";
users["0x01fe9DdD4916019beC6268724189B2EED8C2D49a"] = "Nicolas";
users["0x726150C568f3C7f1BB3C47fd1A224a5C3F706BB1"] = "Rauta";
users["0xCAFE34A88dCac60a48e64107A44D3d8651448cd9"] = "Silva";
users["0xDfb0B8b7530a6444c73bFAda4A2ee3e482dCB1E3"] = "Sophie";
users["0xBeb89bd95dD9624dEd83b12dB782EAE30805ef97"] = "Thiago";
users["0xEe4768Af8caEeB042Da5205fcd66fdEBa0F3FD4f"] = "Brito";
users["0x89e66f9b31DAd708b4c5B78EF9097b1cf429c8ee"] = "ulopesu";
users["0x48cd1D1478eBD643dba50FB3e99030BE4F84d468"] = "Vinicius";
users["0xFADAf046e6Acd9E276940C728f6B3Ac1A043054c"] = "Bonella";
users["0xDcC5b1FdB2985D9662e74eFDbB41cAC5eb8C883A"] = "Dudu";

const teacher_address = "0xA5095296F7fF9Bdb01c22e3E0aC974C8963378ad"
const issueTokenCard = document.querySelector("#issueToken");
const issueTokenReceiver = document.querySelector("#issueToken-receiver-adress");
const issueTokenAmount = document.querySelector("#issueToken-amount");
const issueTokenButton = document.querySelector("#issueToken-button");

const voteCard = document.querySelector("#vote");
const voteReceiver = document.querySelector("#vote-receiver-name");
const voteAmount = document.querySelector("#vote-amount");
const voteButton = document.querySelector("#vote-button");

const endVotingCard = document.querySelector("#endVoting");
const endVotingButton = document.querySelector("#endVoting-button");

var actualUser;

if(localStorage.getItem("transaction_history") === null){
	localStorage.setItem("transaction_history", JSON.stringify([]));
}
const hist = JSON.parse(localStorage.getItem("transaction_history"));
const history = document.querySelector("#history");
for(elem_aux in hist){
	history.insertAdjacentHTML('afterbegin', `<li class=\"event\" data-date=\"${hist[elem_aux]["time"]}\"><h4 style=\"display:table-cell;\">Vote</h4><em class=\"to\">${hist[elem_aux]["sender"]} (+0.2) &rarr; ${hist[elem_aux]["receiver"]} (+${hist[elem_aux]["amount"]/(10**18)})</em></li>`);
}
var lastReceiver;
var lastSender;
var lastAmount;
/* 6. Function to get pet details */
const getLastVote = async() => {
    /* 6.1 Get pet details from smart contract */
    const vote = await TuringContract.lastVote();

    /* 6.3 Pet is an array of 3 strings [petName, petOwner, petAge] */
    lastReceiver = vote[0][1];
	lastSender = vote[1][1];
	lastAmount = Number(vote[2]._hex);
};

setInterval(updateHistory, 1000);

function updateHistory() {
	getLastVote();
	const hist = JSON.parse(localStorage.getItem("transaction_history"));
	const currentLast = hist.at(-1);
	console.log(lastSender, currentLast)
	if((currentLast === undefined || lastReceiver !== currentLast["receiver"] || lastSender !== currentLast["sender"]) && lastSender !== undefined && lastSender !== ""){
		const actual_time = new Date()
		const elem = {"sender":lastSender, "receiver":lastReceiver, "amount":lastAmount, "time":`${actual_time.getHours()}:${actual_time.getMinutes()} ${actual_time.getDay()}/${actual_time.getMonth()}/${actual_time.getFullYear()}`};
		hist.push(elem);
		localStorage.setItem("transaction_history", JSON.stringify(hist));
		history.insertAdjacentHTML('afterbegin', `<li class=\"event\" data-date=\"${elem["time"]}\"><h4 style=\"display:table-cell;\">Vote</h4><em class=\"to\">${elem["sender"]} (+0.2) &rarr; ${elem["receiver"]} (+${elem["amount"]/(10**18)})</em></li>`);
	}
}

/* 3. Prompt user to sign in to MetaMask */
const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");
provider.send("eth_requestAccounts", []).then(() => {
    provider.listAccounts().then((accounts) => {
        const signer = provider.getSigner(accounts[0]);
		actualUser = users[signer._address];

		if(signer._address != teacher_address){
			issueTokenCard.style = "box-shadow: 0 0 0 200px rgba(0, 0, 0, 0.301) inset;";
			issueTokenButton.style.visibility = "hidden";
			issueTokenReceiver.disabled = true;
			issueTokenAmount.disabled = true;

			endVotingCard.style = "box-shadow: 0 0 0 200px rgba(0, 0, 0, 0.301) inset;";
			endVotingButton.style.visibility = "hidden";
		}
		else if (signer._address in users){
			voteCard.style = "box-shadow: 0 0 0 200px rgba(0, 0, 0, 0.301) inset;";
			voteButton.style.visibility = "hidden";
			voteReceiver.disabled = true;
			voteAmount.disabled = true;
		}
		else{
			issueTokenCard.style = "box-shadow: 0 0 0 200px rgba(0, 0, 0, 0.301) inset;";
			issueTokenButton.style.visibility = "hidden";
			issueTokenReceiver.disabled = true;
			issueTokenAmount.disabled = true;

			endVotingCard.style = "box-shadow: 0 0 0 200px rgba(0, 0, 0, 0.301) inset;";
			endVotingButton.style.visibility = "hidden";

			voteCard.style = "box-shadow: 0 0 0 200px rgba(0, 0, 0, 0.301) inset;";
			voteButton.style.visibility = "hidden";
			voteReceiver.disabled = true;
			voteAmount.disabled = true;
		}
        /* 3.1 Create instance of pet smart contract */
        TuringContract = new ethers.Contract(
            TuringContract_Address,
            TuringContract_ABI,
            signer
        );
    });
});

/* 5. Function to set pet details */
const vote = async() => {

    /* 5.1 Get inputs from pet form */
    const voteReceiver = document.querySelector("#vote-receiver-name");
	const voteAmount = document.querySelector("#vote-amount");
    // 5.2 Getting values from the inputs
    receiver = voteReceiver.value;
    amount = (voteAmount.value*10**18).toString();

	const ret = TuringContract.vote(receiver, amount)
	.then(() => {
		/* 5.4 Reset form */
		voteReceiver.value = "";
		voteAmount.value = "";
	})
	.catch((err) => {
		alert("Error in vote: " + err.message);
	});
    /* 5.3 Set pet details in smart contract */
};

voteButton.addEventListener("click", vote);


const issueToken = async() => {

    /* 5.1 Get inputs from pet form */
    const issueTokenReceiver = document.querySelector("#issueToken-receiver-adress");
	const issueTokenAmount = document.querySelector("#issueToken-amount");
    // 5.2 Getting values from the inputs
    receiver = issueTokenReceiver.value;
    amount = (issueTokenAmount.value*10**18).toString();

	TuringContract.issueToken(receiver, amount)
	.then(() => {
		/* 5.4 Reset form */
		issueTokenReceiver.value = "";
		issueTokenAmount.value = "";

		/* 5.5 Get pet details from smart contract */
		const actual_time = new Date()
		const info = {"type":"IssueToken", "sender":"Roberta", "receiver":receiver, "amount":amount, "time":`${actual_time.getHours()}:${actual_time.getMinutes()} ${actual_time.getUTCDay()}/${actual_time.getUTCMonth()}/${actual_time.getUTCFullYear()}`};
		hist.push(info);
		localStorage.setItem("transaction_history", JSON.stringify(hist));
		updateHistory("IssueToken", info);
	})
	.catch((err) => {
		alert("Error in vote: " + err.message);
	});

    /* 5.3 Set pet details in smart contract */
};

issueTokenButton.addEventListener("click", issueToken);

const endVoting = async() => {
	TuringContract.endVoting()
	.then(() => {
		/* 5.5 Get pet details from smart contract */
		const actual_time = new Date()
		const info = {"type":"endVoting", "sender":"Roberta", "time":`${actual_time.getHours()}:${actual_time.getMinutes()} ${actual_time.getDay()}/${actual_time.getMonth()}/${actual_time.getFullYear()}`};
		hist.push(info);
		localStorage.setItem("transaction_history", JSON.stringify(hist));
		updateHistory("endVoting", info);
	})
	.catch((err) => {
		alert("Error in vote: " + err.message);
	});
}
endVotingButton.addEventListener("click", endVoting);

/* 7. Function to show the pet form on click of button */
showPetFormBtn.addEventListener("click", () => {
    petSection.style.display = "none";
    petFormSection.style.display = "block";
    setPetButton.value = "Submit";
});

/* 8. Function to refresh pet details */
refreshBtn.addEventListener("click", (e) => {
    e.target.innerText = "Refreshing...";
    getCurrentPet().then(() => {
        e.target.innerText = "Refreshed";
        setTimeout(() => {
            e.target.innerText = "Refresh";
        }, 2000);
    });
});