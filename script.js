// 1. Declaração de variável global para armazenar a instância web3
let TuringContract;

// 2. Configuração do endereço do contrato e ABI
const TuringContract_Address = "0xb970AeA11459d69C7a4D9fdDC1f373560c454534";
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
if(localStorage.getItem("transaction_history") === null){
	localStorage.setItem("transaction_history", JSON.stringify([]));
}
const hist = JSON.parse(localStorage.getItem("transaction_history"));
const history = document.querySelector("#history");

function updateHistory(type, elem){
	if(elem !== null)
		history.insertAdjacentHTML('afterbegin', `<li class=\"event\" data-date=\"${elem["time"]}\"><h4 style=\"display:table-cell;\">${type}</h4><em class=\"to\">${elem["sender"]} (+0.2) &rarr; ${elem["receiver"]} (+${elem["amount"]/(10**18)})</em></li>`);
	else{
		for(elem_aux in hist){
			history.insertAdjacentHTML('afterbegin', `<li class=\"event\" data-date=\"${hist[elem_aux]["time"]}\"><h4 style=\"display:table-cell;\">${hist[elem_aux]["type"]}</h4><em class=\"to\">${hist[elem_aux]["sender"]} (+0.2) &rarr; ${hist[elem_aux]["receiver"]} (+${hist[elem_aux]["amount"]/(10**18)})</em></li>`);
		}
	}
}
updateHistory("",null);

/* 3. Prompt user to sign in to MetaMask */
const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");
provider.send("eth_requestAccounts", []).then(() => {
    provider.listAccounts().then((accounts) => {
        const signer = provider.getSigner(accounts[0]);

		if(signer._address != teacher_address){
			issueTokenCard.style = "box-shadow: 0 0 0 200px rgba(0, 0, 0, 0.301) inset;";
			issueTokenButton.style.visibility = "hidden";
			issueTokenReceiver.disabled = true;
			issueTokenAmount.disabled = true;

			endVotingCard.style = "box-shadow: 0 0 0 200px rgba(0, 0, 0, 0.301) inset;";
			endVotingButton.style.visibility = "hidden";

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
	
	console.log(amount)
	const user = await TuringContract.whoItIs();

	TuringContract.vote(receiver, amount)
	.then(() => {
		/* 5.4 Reset form */
		voteReceiver.value = "";
		voteAmount.value = "";

		/* 5.5 Get pet details from smart contract */
		const actual_time = new Date()
		const info = {"type":"Vote", "sender":user[1], "receiver":receiver, "amount":amount, "time":`${actual_time.getHours()}:${actual_time.getMinutes()} ${actual_time.getDay()}/${actual_time.getMonth()}/${actual_time.getFullYear()}`};
		hist.push(info);
		localStorage.setItem("transaction_history", JSON.stringify(hist));
		updateHistory("Vote", info);
	})
	.catch((err) => {
		alert("Error in vote: " + err.message);
	});
    /* 5.3 Set pet details in smart contract */
};

voteButton.addEventListener("click", vote);

/* 6. Function to get pet details */
const getCurrentPet = async() => {
    setPetButton.value = "Getting Pet...";

    /* 6.1 Get pet details from smart contract */
    const pet = await PetContract.getPet();

    /* 6.2 Display the pet details section 
    and
    Hide the pet form in the DOM */
    petSection.style.display = "block";
    petFormSection.style.display = "none";

    /* 6.3 Pet is an array of 3 strings [petName, petOwner, petAge] */
    const petName = pet[1];
    const petOwner = pet[2];
    const petAge = pet[0];

    /* 6.4 Display pet details in DOM */
    document.querySelector(".pet-detail-name").innerText = petName;
    document.querySelector(".pet-detail-owner").innerText = petOwner;
    document.querySelector(".pet-detail-age").innerText = petAge;
};

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