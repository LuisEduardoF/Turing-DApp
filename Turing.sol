// SPDX-License-Identifier: GPL-3.0 
 
pragma solidity ^0.8.0; 
 
import "@openzeppelin/contracts/token/ERC20/ERC20.sol"; 
struct User{ 
    address addr; 
    string name; 
    bool valid; 
} 
struct VoteSystem{ 
    mapping(address => User) addr; 
    mapping(string => User) usr; 
    mapping(string => mapping(string => bool)) voted; 
    bool voting; 
} 
contract Turing is ERC20{ 
    User Andre = User({name:"Andre", addr:0xD07318971e2C15b4f8d3d28A0AEF8F16B9D8EAb6, valid:true}); 
    User Antonio = User({name:"Antonio", addr:0x127B963B9918261Ef713cB7950c4AD16d4Fe18c6, valid:true}); 
    User Ratonilo = User({name:"Ratonilo", addr:0x5d84D451296908aFA110e6B37b64B1605658283f, valid:true}); 
    User eduardo = User({name:"eduardo", addr:0x500E357176eE9D56c336e0DC090717a5B1119cC2, valid:true}); 
    User Enzo = User({name:"Enzo", addr:0x5217A9963846a4fD62d35BB7d58eAB2dF9D9CBb8, valid:true}); 
    User Fernando = User({name:"Fernando", addr:0xFED450e1300CEe0f69b1F01FA85140646E596567, valid:true}); 
    User Juliana = User({name:"Juliana", addr:0xFec23E4c9540bfA6BBE39c4728652F2def99bc1e, valid:true}); 
    User Altoe = User({name:"Altoe", addr:0x6701D0C23d51231E676698446E55F4936F5d99dF, valid:true}); 
    User Salgado = User({name:"Salgado", addr:0x8321730F4D59c01f5739f1684ABa85f8262f8980, valid:true}); 
    User Regata = User({name:"Regata", addr:0x4A35eFD10c4b467508C35f8C309Ebc34ae1e129a, valid:true}); 
    User Luis = User({name:"Luis", addr:0xDD551702Dc580B7fDa2ddB7a1Ca63d29E8CDCf33, valid:true}); 
    User Nicolas = User({name:"Nicolas", addr:0x01fe9DdD4916019beC6268724189B2EED8C2D49a, valid:true}); 
    User Rauta = User({name:"Rauta", addr:0x726150C568f3C7f1BB3C47fd1A224a5C3F706BB1, valid:true}); 
    User Silva = User({name:"Silva", addr:0xCAFE34A88dCac60a48e64107A44D3d8651448cd9, valid:true}); 
    User Sophie = User({name:"Sophie", addr:0xDfb0B8b7530a6444c73bFAda4A2ee3e482dCB1E3, valid:true}); 
    User Thiago = User({name:"Thiago", addr:0xBeb89bd95dD9624dEd83b12dB782EAE30805ef97, valid:true}); 
    User Brito = User({name:"Brito", addr:0xEe4768Af8caEeB042Da5205fcd66fdEBa0F3FD4f, valid:true}); 
    User ulopesu = User({name:"ulopesu", addr:0x89e66f9b31DAd708b4c5B78EF9097b1cf429c8ee, valid:true}); 
    User Vinicius = User({name:"Vinicius", addr:0x48cd1D1478eBD643dba50FB3e99030BE4F84d468, valid:true}); 
    User Bonella = User({name:"Bonella", addr:0xFADAf046e6Acd9E276940C728f6B3Ac1A043054c, valid:true}); 
 
    User Roberta = User({name:"Roberta", addr:0xA5095296F7fF9Bdb01c22e3E0aC974C8963378ad, valid:true}); 
     
    User test1 = User({name:"A1", addr:0x5B38Da6a701c568545dCfcB03FcB875f56beddC4, valid:true}); 
    User test2 = User({name:"A2", addr:0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2, valid:true}); 
 
    VoteSystem sys; 
    constructor() ERC20("Turing", "TUR"){ 
        sys.usr["Andre"] = Andre; 
        sys.usr["Antonio"] = Antonio; 
        sys.usr["Ratonilo"] = Ratonilo; 
        sys.usr["eduardo"] = eduardo; 
        sys.usr["Enzo"] = Enzo; 
        sys.usr["Fernando"] = Fernando; 
        sys.usr["Juliana"] = Juliana; 
        sys.usr["Altoe"] = Altoe; 
        sys.usr["Salgado"] = Salgado; 
        sys.usr["Regata"] = Regata; 
        sys.usr["Luis"] = Luis; 
        sys.usr["Nicolas"] = Nicolas; 
        sys.usr["Rauta"] = Rauta; 
        sys.usr["Silva"] = Silva; 
        sys.usr["Sophie"] = Sophie; 
        sys.usr["Thiago"] = Thiago; 
        sys.usr["Brito"] = Brito; 
        sys.usr["ulopesu"] = ulopesu; 
        sys.usr["Vinicius"] = Vinicius; 
        sys.usr["Bonella"] = Bonella; 
 
        sys.addr[0xD07318971e2C15b4f8d3d28A0AEF8F16B9D8EAb6] = Andre; 
        sys.addr[0x127B963B9918261Ef713cB7950c4AD16d4Fe18c6] = Antonio; 
        sys.addr[0x5d84D451296908aFA110e6B37b64B1605658283f] = Ratonilo; 
        sys.addr[0x500E357176eE9D56c336e0DC090717a5B1119cC2] = eduardo; 
        sys.addr[0x5217A9963846a4fD62d35BB7d58eAB2dF9D9CBb8] = Enzo; 
        sys.addr[0xFED450e1300CEe0f69b1F01FA85140646E596567] = Fernando; 
        sys.addr[0xFec23E4c9540bfA6BBE39c4728652F2def99bc1e] = Juliana;

sys.addr[0x6701D0C23d51231E676698446E55F4936F5d99dF] = Altoe; 
        sys.addr[0x8321730F4D59c01f5739f1684ABa85f8262f8980] = Salgado; 
        sys.addr[0x4A35eFD10c4b467508C35f8C309Ebc34ae1e129a] = Regata; 
        sys.addr[0xDD551702Dc580B7fDa2ddB7a1Ca63d29E8CDCf33] = Luis; 
        sys.addr[0x01fe9DdD4916019beC6268724189B2EED8C2D49a] = Nicolas; 
        sys.addr[0x726150C568f3C7f1BB3C47fd1A224a5C3F706BB1] = Rauta; 
        sys.addr[0xCAFE34A88dCac60a48e64107A44D3d8651448cd9] = Silva; 
        sys.addr[0xDfb0B8b7530a6444c73bFAda4A2ee3e482dCB1E3] = Sophie; 
        sys.addr[0xBeb89bd95dD9624dEd83b12dB782EAE30805ef97] = Thiago; 
        sys.addr[0xEe4768Af8caEeB042Da5205fcd66fdEBa0F3FD4f] = Brito; 
        sys.addr[0x89e66f9b31DAd708b4c5B78EF9097b1cf429c8ee] = ulopesu; 
        sys.addr[0x48cd1D1478eBD643dba50FB3e99030BE4F84d468] = Vinicius; 
        sys.addr[0xFADAf046e6Acd9E276940C728f6B3Ac1A043054c] = Bonella; 
 
        sys.voting = true; 
        sys.usr["A1"] = test1; 
        sys.usr["A2"] = test2; 
 
        sys.addr[0x5B38Da6a701c568545dCfcB03FcB875f56beddC4] = test1; 
        sys.addr[0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2] = test2; 
    } 
    modifier RobertaOnly() { 
        require(msg.sender == Roberta.addr, "Unauthorized - Roberta Only"); 
        _; 
    } 
 
    modifier isAuthorizedUser() { 
        require(sys.addr[msg.sender].valid == true, "Unauthorized - Authorized Users Acess"); 
        _; 
    } 
 
    modifier LimitTuring(uint256 Turings) { 
        require((Turings > 0) && (Turings <= 2), "Input Error - Value not accepted"); 
        _; 
    } 
 
    modifier VoteOthers(string memory nickname) { 
        require(sys.addr[msg.sender].addr != sys.usr[nickname].addr, "Input Error - Can't vote yourself"); 
        _; 
    } 
 
    modifier VoteOnlyOnce(string memory nickname) { 
        require(sys.voted[sys.addr[msg.sender].name][sys.usr[nickname].name] == false, "Input Error - Already voted by you"); 
        _; 
    } 
 
    modifier isEndedVote() { 
        require(sys.voting == true, "Unexpected Error - Roberta ended vote"); 
        _; 
    } 
     
    /* 
    function issueToken( addr do receptor , quantidade de  saTurings) 
        * saTuring é a menor unidade de turing (10^-18) 
        * Esse método poderá ser executado por apenas 1 usuário... a professora (0xA5095296F7fF9Bdb01c22e3E0aC974C8963378ad) !!  
        * Ele criará a quantidade especificada de Turings na carteira do receptor ) 
    */ 
    function issueToken(address receiver, uint256 saTurings) public RobertaOnly{ 
        _mint(receiver, saTurings*10**18); 
    } 
 
    /* 
    function vote(codinome, quantidade de saTurings) 
        * Esse método pode ser executado por qualquer usuário autorizado, mas um mesmo usuário só pode votar uma vez em um codinome). Além disso o próprio usuário não pode votar em si mesmo. A quantidade de turings não pode ser maior do que 2 (neste caso 2*10^18 saTurings) 
        * Aqui haverá minting da quantidade de saTurings especificada, para o Addr associado ao codinome) 
        * Além disso, a pessoa que vota também ganha 0,2 Turing 
    */ 
    function vote(string memory nickname, uint256 Turings) public isAuthorizedUser VoteOthers(nickname) LimitTuring(Turings) VoteOnlyOnce(nickname) isEndedVote{ 
        _mint(sys.usr[nickname].addr, Turings*10**18); 
        _mint(sys.addr[msg.sender].addr, 2*10**17); 
        sys.voted[sys.addr[msg.sender].name][sys.usr[nickname].name] = true; 
    } 
 
    /* 
    function endVoting() 
        * Este método poderá ser executado apenas pela professora. Após sua execução finaliza-se a votação (isto é, se alguém executar "vote()" nada deve acontecer). 
    */ 
    function endVoting() public RobertaOnly{ 
        sys.voting = false; 
    } 
 
    function check() public returns(bool){ 
        return sys.addr[msg.sender].valid; 
    } 
}
