// 1. Declaração de variável global para armazenar a instância web3
let TuringContract;

// 2. Configuração do endereço do contrato e ABI
const TuringContract_Address = "0x7559A10215D90732D6B5ac153Ad039E76e9CcDe2";
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
	}
];

/* 3. Prompt user to sign in to MetaMask */
const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");
provider.send("eth_requestAccounts", []).then(() => {
    provider.listAccounts().then((accounts) => {
        const signer = provider.getSigner(accounts[0]);

        console.log(signer._address);

        /* 3.1 Create instance of pet smart contract */
        TuringContract = new ethers.Contract(
            TuringContract_Address,
            TuringContract_ABI,
            signer
        );
    });
});

// 4. Creating variables for reusable dom elements
const petFormSection = document.querySelector(".pet-form-section");
const showPetFormBtn = document.querySelector(".show-pet-form-btn");
const petSection = document.querySelector(".pet-detail-section");
const setPetButton = document.querySelector("#set-new-pet");
const refreshBtn = document.querySelector(".refresh-pet-details-btn");

/* 5. Function to set pet details */
const setNewPet = () => {
    // update button value
    setPetButton.value = "Setting Pet...";

    /* 5.1 Get inputs from pet form */
    const petNameInput = document.querySelector("#pet-name");
    const petOwnerInput = document.querySelector("#pet-owner");
    const petAgeInput = document.querySelector("#pet-age");

    // 5.2 Getting values from the inputs
    petName = petNameInput.value;
    petOwner = petOwnerInput.value;
    petAge = petAgeInput.value;

    /* 5.3 Set pet details in smart contract */
    PetContract.setPet(petName, petOwner, petAge)
        .then(() => {
            // update button value
            setPetButton.value = "Pet Set...";

            /* 5.4 Reset form */
            petNameInput.value = "";
            petOwnerInput.value = "";
            petAgeInput.value = "";

            // update button value
            setPetButton.value = "Set Pet";

            /* 5.5 Get pet details from smart contract */
            getCurrentPet();
        })
        .catch((err) => {
            // If error occurs, display error message
            setPetButton.value = "Set Pet";
            alert("Error setting pet details" + err.message);
        });
};

/* Function to set pet details on click of button */
setPetButton.addEventListener("click", setNewPet);

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