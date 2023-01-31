// 1. Declaração de variável global para armazenar a instância web3
let TuringContract;

// 2. Configuração do endereço do contrato e ABI
const TuringContract_Address = "0xBea1386461D4c54B7aC3289be71f77a75fc9780E";
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
		"name": "lastVoted",
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
	},
	{
		"inputs": [],
		"name": "voteEnded",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
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
var users_addr = {};
users_addr["0xD07318971e2C15b4f8d3d28A0AEF8F16B9D8EAb6"] = "Andre";
users_addr["0x127B963B9918261Ef713cB7950c4AD16d4Fe18c6"] = "Antonio";
users_addr["0x5d84D451296908aFA110e6B37b64B1605658283f"] = "Ratonilo";
users_addr["0x500E357176eE9D56c336e0DC090717a5B1119cC2"] = "eduardo";
users_addr["0x5217A9963846a4fD62d35BB7d58eAB2dF9D9CBb8"] = "Enzo";
users_addr["0xFED450e1300CEe0f69b1F01FA85140646E596567"] = "Fernando";
users_addr["0xFec23E4c9540bfA6BBE39c4728652F2def99bc1e"] = "Juliana";
users_addr["0x6701D0C23d51231E676698446E55F4936F5d99dF"] = "Altoe";
users_addr["0x8321730F4D59c01f5739f1684ABa85f8262f8980"] = "Salgado";
users_addr["0x4A35eFD10c4b467508C35f8C309Ebc34ae1e129a"] = "Regata";
users_addr["0xDD551702Dc580B7fDa2ddB7a1Ca63d29E8CDCf33"] = "Luis";
users_addr["0x01fe9DdD4916019beC6268724189B2EED8C2D49a"] = "Nicolas";
users_addr["0x726150C568f3C7f1BB3C47fd1A224a5C3F706BB1"] = "Rauta";
users_addr["0xCAFE34A88dCac60a48e64107A44D3d8651448cd9"] = "Silva";
users_addr["0xDfb0B8b7530a6444c73bFAda4A2ee3e482dCB1E3"] = "Sophie";
users_addr["0xBeb89bd95dD9624dEd83b12dB782EAE30805ef97"] = "Thiago";
users_addr["0xEe4768Af8caEeB042Da5205fcd66fdEBa0F3FD4f"] = "Brito";
users_addr["0x89e66f9b31DAd708b4c5B78EF9097b1cf429c8ee"] = "ulopesu";
users_addr["0x48cd1D1478eBD643dba50FB3e99030BE4F84d468"] = "Vinicius";
users_addr["0xFADAf046e6Acd9E276940C728f6B3Ac1A043054c"] = "Bonella";

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
var actualUserAddress;

if (localStorage.getItem("transaction_history") === null) {
    localStorage.setItem("transaction_history", JSON.stringify([]));
}
const hist = JSON.parse(localStorage.getItem("transaction_history"));
const history = document.querySelector("#history");
for (elem_aux in hist) {
    history.insertAdjacentHTML('afterbegin', `<li class=\"event\" data-date=\"${hist[elem_aux]["time"]}\"><h4 style=\"display:table-cell;\">Vote</h4><em class=\"to\">${hist[elem_aux]["sender"]} (+0.2) &rarr; ${hist[elem_aux]["receiver"]} (+${hist[elem_aux]["amount"]/(10**18)})</em></li>`);
}
var lastReceiver;
var lastSender;
var lastAmount;
/* 6. Function to get pet details */
const getLastVote = async() => {
    /* 6.1 Get pet details from smart contract */
    const vote = await TuringContract.lastVoted();
    /* 6.3 Pet is an array of 3 strings [petName, petOwner, petAge] */
    lastReceiver = vote[0][1];
    lastSender = vote[1][1];
    lastAmount = Number(vote[2]._hex);
};

setInterval(updateHistory, 1000);

function updateHistory() {
    getLastVote();
    const hist = JSON.parse(localStorage.getItem("transaction_history"));
    currentLast = hist.at(-1);
    if ((currentLast === undefined || lastReceiver !== currentLast["receiver"] || lastSender !== currentLast["sender"]) && lastSender !== undefined && lastSender !== "") {
        const actual_time = new Date()
        const elem = { "sender": lastSender, "receiver": lastReceiver, "amount": lastAmount, "time": `${actual_time.getHours()}:${actual_time.getMinutes()} ${actual_time.getDay()}/${actual_time.getMonth()}/${actual_time.getFullYear()}` };
        hist.push(elem);
        localStorage.setItem("transaction_history", JSON.stringify(hist));
        history.insertAdjacentHTML('afterbegin', `<li class=\"event\" data-date=\"${elem["time"]}\"><h4 style=\"display:table-cell;\">Vote</h4><em class=\"to\">${elem["sender"]} (+0.2) &rarr; ${elem["receiver"]} (+${elem["amount"]/(10**18)})</em></li>`);
        updateChart();
    }
}

function initialize_data() {
    var data = {};
    for (var d in users_addr) {
        data[d] = 0;
    }
    return data;
}
var data = initialize_data();
const getData = async(addr) => {
    try {
        const amount = await TuringContract.balanceOf(addr);
        data[addr] = Number(amount._hex) / (10 ** 18);
    } catch (e) {}
};
setInterval(updateData, 1000);

function updateData() {
    for (var d in users_addr) {
        getData(d);
    }
    getNewData();
};
var isEndedVote = false;
const EndedVote = async() => {
    try {
        const voting = await TuringContract.voteEnded();
        isEndedVote = voting;
    } catch (e) {}
}

function endedVoting() {
    EndedVote();
    if (isEndedVote) {
        voteCard.style = "box-shadow: 0 0 0 200px rgba(255, 0, 0, 0.5) inset;";
        voteButton.style.visibility = "hidden";
        voteReceiver.disabled = true;
        voteAmount.disabled = true;
    }
    else{
        if (actualUserAddress != teacher_address && (actualUserAddress in users_addr)) {
            issueTokenCard.style = "box-shadow: 0 0 0 200px rgba(0, 0, 0, 0.301) inset;";
            issueTokenButton.style.visibility = "hidden";
            issueTokenReceiver.disabled = true;
            issueTokenAmount.disabled = true;

            voteCard.style = "visible";
            voteButton.style.visibility = "visible";
            voteReceiver.disabled = false;
            voteAmount.disabled = false;

            endVotingCard.style = "box-shadow: 0 0 0 200px rgba(0, 0, 0, 0.301) inset;";
            endVotingButton.style.visibility = "hidden";
        } else if (actualUserAddress == teacher_address) {
            voteCard.style = "box-shadow: 0 0 0 200px rgba(0, 0, 0, 0.301) inset;";
            voteButton.style.visibility = "hidden";
            voteReceiver.disabled = true;
            voteAmount.disabled = true;
        } else {
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
    }
}
setInterval(endedVoting, 1000)
    /* 3. Prompt user to sign in to MetaMask */
const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");
provider.send("eth_requestAccounts", []).then(() => {
    provider.listAccounts().then((accounts) => {
        const signer = provider.getSigner(accounts[0]);
        actualUser = users_addr[signer._address];
        actualUserAddress = signer._address

        if (signer._address != teacher_address && (signer._address in users_addr)) {
            issueTokenCard.style = "box-shadow: 0 0 0 200px rgba(0, 0, 0, 0.301) inset;";
            issueTokenButton.style.visibility = "hidden";
            issueTokenReceiver.disabled = true;
            issueTokenAmount.disabled = true;

            endVotingCard.style = "box-shadow: 0 0 0 200px rgba(0, 0, 0, 0.301) inset;";
            endVotingButton.style.visibility = "hidden";
        } else if (signer._address == teacher_address) {
            voteCard.style = "box-shadow: 0 0 0 200px rgba(0, 0, 0, 0.301) inset;";
            voteButton.style.visibility = "hidden";
            voteReceiver.disabled = true;
            voteAmount.disabled = true;
        } else {
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
    amount = (voteAmount.value * 10 ** 18).toString();

    TuringContract.vote(receiver, amount)
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
    amount = (issueTokenAmount.value * 10 ** 18).toString();

    TuringContract.issueToken(receiver, amount)
        .then(() => {
            /* 5.4 Reset form */
            issueTokenReceiver.value = "";
            issueTokenAmount.value = "";
        })
        .catch((err) => {
            alert("Error in issueToken: " + err.message);
        });

    /* 5.3 Set pet details in smart contract */
};

issueTokenButton.addEventListener("click", issueToken);

const endVoting = async() => {
    TuringContract.endVoting()
        .then(() => {
            console.log("Acabou");
            voteCard.style = "box-shadow: 0 0 0 200px rgba(0, 0, 0, 0.301) inset;";
            voteButton.style.visibility = "hidden";
            voteReceiver.disabled = true;
            voteAmount.disabled = true;
        })
        .catch((err) => {
            alert("Error in endVoting: " + err.message);
        });
}
endVotingButton.addEventListener("click", endVoting);

var users;
var timerId;
var updateInterval = 1000;

function ascending(a, b) { return a.amount > b.amount ? 1 : a.amount == b.amount ? a.name > b.name : -1; }

function descending(a, b) { return a.amount < b.amount ? 1 : a.amount == b.amount ? a.name < b.name : -1; }

function reposition() {
    var height = $("#users .user").height() + 5;
    var y = height;
    for (var i = 0; i < users.length; i++) {
        users[i].$item.css("top", y + "px");
        y += height;
    }
}

function updateRanks(users) {
    for (var i = 0; i < users.length; i++) {
        users[i].$item.find(".rank").text(i + 1);
    }
}

function updateBoard() {
    users.sort(descending);
    updateRanks(users);
    reposition();
}

function getNewAmount(name) {
    for (d in users_addr) {
        if (users_addr[d] == name)
            return data[d];
    }
}

function getNewData() {
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        user.amount = getNewAmount(user.name);
        user.$item.find(".votes").text(user.amount);
    }
    users.sort(descending);
    updateRanks(users);
    reposition();
}

function resetBoard(result) {
    var $list = $("#users");
    $list.find(".user").remove();
    if (timerId !== undefined) {
        clearInterval(timerId);
    }
    users = [];
    for (d in result) {
        users.push({
            name: users_addr[d],
            amount: result[d],
        })
    }
    users.sort(descending);
    for (var i = 0; i < users.length; i++) {
        var $item = $(
            "<tr class='user'>" +
            "<td class='rank'>" + (i + 1) + "</th>" +
            "<td class='name'>" + users[i].name + "</td>" +
            "<td class='votes'>" + users[i].amount + "</td>" +
            "</tr>"
        );
        users[i].$item = $item;
        $list.append($item);
    }
    reposition();

}
resetBoard(JSON.parse(JSON.stringify(data)));

function getTime() {
    var date = new Date();
    return `${date.getHours()}:${date.getMinutes()} ${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
}
var stringToColour = function(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
}

function getTuringHistory() {
    var t_hist = [];
    var isChanged = false;
    if (localStorage.getItem("turing_history") === null) {
        for (var i = 0; i < users.length; i++) {
            t_hist.push({
                data: [users[i].amount],
                label: users[i].name,
                borderColor: stringToColour(users[i].name),
                fill: false
            })
        }
        localStorage.setItem("time_history", JSON.stringify([getTime()]))
        localStorage.setItem("turing_history", JSON.stringify(t_hist));
        isChanged = true;
    } else {
        t_hist = JSON.parse(localStorage.getItem("turing_history"));
        time = JSON.parse(localStorage.getItem("time_history"));
        for (var i = 0; i < t_hist.length; i++) {
            var newValue = getNewAmount(t_hist[i]["label"])
            if (newValue > t_hist[i]["data"].at(-1)) {
                isChanged = true;
            }
            if (newValue >= t_hist[i]["data"].at(-1)) {
                t_hist[i]["data"].push(newValue)
            }
        }
        if (isChanged) {
            time.push(getTime())
            localStorage.setItem("time_history", JSON.stringify(time));
            localStorage.setItem("turing_history", JSON.stringify(t_hist));
        }
    }
    return isChanged;
}
var chart = new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
        labels: JSON.parse(localStorage.getItem("time_history")),
        datasets: JSON.parse(localStorage.getItem("turing_history")),
    },
    options: {
        title: {
            display: true,
            text: 'World population per region (in millions)'
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

function addData(chart, label, datasets) {
    chart.data.labels.push(label);
    chart.data.datasets = datasets
    chart.update();
}

function updateChart() {
    var isChanged = getTuringHistory();
    if (isChanged) {
        var t_hist = JSON.parse(localStorage.getItem("turing_history"));
        addData(chart, getTime(), t_hist)
    }
}
setInterval(updateChart, 1000);