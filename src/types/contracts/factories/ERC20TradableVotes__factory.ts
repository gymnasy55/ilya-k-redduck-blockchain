/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC20TradableVotes,
  ERC20TradableVotesInterface,
} from "../ERC20TradableVotes";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "price_",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "capitalShareRate_",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Buy",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "LiquidityChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "Sell",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "decision",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "power",
        type: "uint256",
      },
    ],
    name: "Vote",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "acceptPower",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "declinePower",
        type: "uint256",
      },
    ],
    name: "VotingEnd",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "suggestedPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "duration",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "votingNumber",
        type: "uint256",
      },
    ],
    name: "VotingStart",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptPower",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "addLiquidity",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "buy",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "capitalShareRate",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "divider",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "endVoting",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "whale",
        type: "address",
      },
    ],
    name: "isWhale",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastVotingNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rejectPower",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "release",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "sell",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "suggestedPrice_",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "duration",
        type: "uint64",
      },
    ],
    name: "startVoting",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "suggestedPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "decision",
        type: "bool",
      },
    ],
    name: "vote",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "votingDuration",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "votingStartedTime",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162001ddb38038062001ddb833981016040819052620000349162000241565b6005805460ff191660ff85161790558351859085908590859084908490849083908390839060039060009062000072906004906020870190620000b7565b505083516200008791906020860190620000b7565b5050505050505081600a6200009d9190620003ef565b60805260085550505060ff1660a052506200044492505050565b828054620000c59062000407565b90600052602060002090601f016020900481019282620000e9576000855562000134565b82601f106200010457805160ff191683800117855562000134565b8280016001018555821562000134579182015b828111156200013457825182559160200191906001019062000117565b506200014292915062000146565b5090565b5b8082111562000142576000815560010162000147565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200018557600080fd5b81516001600160401b0380821115620001a257620001a26200015d565b604051601f8301601f19908116603f01168101908282118183101715620001cd57620001cd6200015d565b81604052838152602092508683858801011115620001ea57600080fd5b600091505b838210156200020e5785820183015181830184015290820190620001ef565b83821115620002205760008385830101525b9695505050505050565b805160ff811681146200023c57600080fd5b919050565b600080600080600060a086880312156200025a57600080fd5b85516001600160401b03808211156200027257600080fd5b6200028089838a0162000173565b965060208801519150808211156200029757600080fd5b50620002a68882890162000173565b945050620002b7604087016200022a565b925060608601519150620002ce608087016200022a565b90509295509295909350565b634e487b7160e01b600052601160045260246000fd5b600181815b8085111562000331578160001904821115620003155762000315620002da565b808516156200032357918102915b93841c9390800290620002f5565b509250929050565b6000826200034a57506001620003e9565b816200035957506000620003e9565b81600181146200037257600281146200037d576200039d565b6001915050620003e9565b60ff841115620003915762000391620002da565b50506001821b620003e9565b5060208310610133831016604e8410600b8410161715620003c2575081810a620003e9565b620003ce8383620002f0565b8060001904821115620003e557620003e5620002da565b0290505b92915050565b60006200040060ff84168362000339565b9392505050565b600181811c908216806200041c57607f821691505b602082108114156200043e57634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05161194e6200048d600039600081816103bc0152610aed01526000818161030d01528181610b5701528181610bac01528181610cd80152610ea9015261194e6000f3fe6080604052600436106101a05760003560e01c806370a08231116100ec578063c2cc1e0d1161008a578063dd62ed3e11610064578063dd62ed3e146104a1578063e4849b32146104e7578063e7352bf414610507578063f4f65b531461051c57600080fd5b8063c2cc1e0d14610452578063c3403ddf14610467578063c711df231461047c57600080fd5b806395d89b41116100c657806395d89b4114610400578063a035b1fe14610415578063a6f2ae3a1461042a578063a9059cbb1461043257600080fd5b806370a082311461037757806385e8f7c2146103ad5780638ef1e259146103e057600080fd5b80631cfe599b11610159578063378efa3711610133578063378efa37146102fb5780634b9f5c981461032f57806351c6590a1461034f57806361429a831461036257600080fd5b80631cfe599b146102a057806323b872dd146102b5578063313ce567146102d557600080fd5b806306fdde03146101ac578063095ea7b3146101d7578063132002fc1461020757806318160ddd1461023957806319165587146102585780631a6865021461027857600080fd5b366101a757005b600080fd5b3480156101b857600080fd5b506101c161053c565b6040516101ce91906115a4565b60405180910390f35b3480156101e357600080fd5b506101f76101f2366004611615565b6105ce565b60405190151581526020016101ce565b34801561021357600080fd5b506009546001600160401b03165b6040516001600160401b0390911681526020016101ce565b34801561024557600080fd5b506002545b6040519081526020016101ce565b34801561026457600080fd5b506101f761027336600461163f565b6105e4565b34801561028457600080fd5b50600654600754604080519283526020830191909152016101ce565b3480156102ac57600080fd5b50600c5461024a565b3480156102c157600080fd5b506101f76102d036600461165a565b610790565b3480156102e157600080fd5b5060055460ff165b60405160ff90911681526020016101ce565b34801561030757600080fd5b5061024a7f000000000000000000000000000000000000000000000000000000000000000081565b34801561033b57600080fd5b506101f761034a366004611696565b610827565b6101f761035d3660046116b8565b610a81565b34801561036e57600080fd5b50600d5461024a565b34801561038357600080fd5b5061024a61039236600461163f565b6001600160a01b031660009081526020819052604090205490565b3480156103b957600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006102e9565b3480156103ec57600080fd5b506101f76103fb36600461163f565b610ae6565b34801561040c57600080fd5b506101c1610b44565b34801561042157600080fd5b5061024a610b53565b6101f7610b88565b34801561043e57600080fd5b506101f761044d366004611615565b610cc7565b34801561045e57600080fd5b5061024a610cd4565b34801561047357600080fd5b506101f7610d04565b34801561048857600080fd5b50600954600160401b90046001600160401b0316610221565b3480156104ad57600080fd5b5061024a6104bc3660046116d1565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b3480156104f357600080fd5b506101f76105023660046116b8565b610e84565b34801561051357600080fd5b50600b5461024a565b34801561052857600080fd5b506101f7610537366004611704565b611051565b60606003805461054b90611740565b80601f016020809104026020016040519081016040528092919081815260200182805461057790611740565b80156105c45780601f10610599576101008083540402835291602001916105c4565b820191906000526020600020905b8154815290600101906020018083116105a757829003601f168201915b5050505050905090565b60006105db33848461125e565b50600192915050565b60006001600160a01b0382166106415760405162461bcd60e51b815260206004820152601960248201527f726563697069656e74206973207a65726f20616464726573730000000000000060448201526064015b60405180910390fd5b600654309060009061065490833161178b565b9050600060075461067a846001600160a01b031660009081526020819052604090205490565b610684919061178b565b905060008211806106955750600081115b6106d75760405162461bcd60e51b81526020600482015260136024820152723737ba3434b733903a37903a3930b739b332b960691b6044820152606401610638565b80156106e8576106e8838683611363565b8115610785576000856001600160a01b03168360405160006040518083038185875af1925050503d806000811461073b576040519150601f19603f3d011682016040523d82523d6000602084013e610740565b606091505b50509050806107835760405162461bcd60e51b815260206004820152600f60248201526e1d1c985b9cd9995c8819985a5b1959608a1b6044820152606401610638565b505b506001949350505050565b6001600160a01b038084166000908152600160209081526040808320938616835292905290812054828110156108085760405162461bcd60e51b815260206004820152601a60248201527f7472616e73666572206578636565647320616c6c6f77616e63650000000000006044820152606401610638565b61081c8585610817868561178b565b61125e565b610785858585611363565b60003361083381610ae6565b61086d5760405162461bcd60e51b815260206004820152600b60248201526a6e6f742061207768616c6560a81b6044820152606401610638565b6009544290600160401b90046001600160401b03161580159061089a57506009546001600160401b031615155b6108e65760405162461bcd60e51b815260206004820152601b60248201527f766f74696e6720686173206e6f74206265656e207374617274656400000000006044820152606401610638565b600954610906906001600160401b0380821691600160401b9004166117a2565b6001600160401b0316816001600160401b031611156109565760405162461bcd60e51b815260206004820152600c60248201526b1d9bdd1a5b99c8195b99195960a21b6044820152606401610638565b600d546000908152600e602090815260408083203380855292529091205460ff16156109b45760405162461bcd60e51b815260206004820152600d60248201526c185b1c9958591e481d9bdd1959609a1b6044820152606401610638565b6001600160a01b03811660009081526020819052604090205485156109f05780600b60008282546109e591906117cd565b90915550610a089050565b80600c6000828254610a0291906117cd565b90915550505b600d546000908152600e602090815260408083206001600160a01b03861680855290835292819020805460ff19166001179055805189151581529182018490527fbb10b0d62403bfcc084246a7819a2316a1a73e041a5eb41661478dcae1b5151a910160405180910390a2600194505050505b50919050565b60003480610aa15760405162461bcd60e51b8152600401610638906117e5565b60008311610ac15760405162461bcd60e51b81526004016106389061181c565b610ad18184611512611512611525565b610adc333085610790565b5060019392505050565b6000610b137f00000000000000000000000000000000000000000000000000000000000000006064611869565b60ff16600254610b23919061188b565b6001600160a01b038316600090815260208190526040902054101592915050565b60606004805461054b90611740565b60007f0000000000000000000000000000000000000000000000000000000000000000600854610b83919061189f565b905090565b60003480610ba85760405162461bcd60e51b8152600401610638906117e5565b60007f0000000000000000000000000000000000000000000000000000000000000000610bd3610b53565b610bdd919061188b565b610be7908361188b565b905060008111610c095760405162461bcd60e51b81526004016106389061181c565b600081600754610c1991906118be565b13610c5d5760405162461bcd60e51b81526020600482015260146024820152736e6f7420656e6f756768206c697175696469747960601b6044820152606401610638565b610c6d8282611512611598611525565b33610c79308284611363565b60408051838152602081018590526001600160a01b038316917f1cbc5ab135991bd2b6a4b034a04aa2aa086dac1371cb9b16b8b5e2ed6b036bed910160405180910390a26001935050505090565b60006105db338484611363565b60007f0000000000000000000000000000000000000000000000000000000000000000600a54610b83919061189f565b6009546000904290600160401b90046001600160401b031615801590610d3457506009546001600160401b031615155b610d805760405162461bcd60e51b815260206004820152601b60248201527f766f74696e6720686173206e6f74206265656e207374617274656400000000006044820152606401610638565b600954610da0906001600160401b0380821691600160401b9004166117a2565b6001600160401b0316816001600160401b031611610df85760405162461bcd60e51b8152602060048201526015602482015274766f74696e6720697320696e2070726f677265737360581b6044820152606401610638565b600854600a54600b54600c5460408051948552602085019390935291830152606082015233907f9fcc6e47c56abdbb6c84a4b6c12a2530a893764f91abc8ace0d3039db4657b059060800160405180910390a2600c54600b541115610e5e57600a546008555b50506000600a819055600980546001600160801b0319169055600b819055600c55600190565b6000808211610ea55760405162461bcd60e51b81526004016106389061181c565b60007f0000000000000000000000000000000000000000000000000000000000000000610ed0610b53565b610eda908561189f565b610ee4919061188b565b905060008111610f065760405162461bcd60e51b8152600401610638906117e5565b600081600654610f1691906118be565b13610f5a5760405162461bcd60e51b81526020600482015260146024820152736e6f7420656e6f756768206c697175696469747960601b6044820152606401610638565b610f6a8184611598611512611525565b6040513390600090829084908381818185875af1925050503d8060008114610fae576040519150601f19603f3d011682016040523d82523d6000602084013e610fb3565b606091505b5050905080610ff65760405162461bcd60e51b815260206004820152600f60248201526e1d1c985b9cd9995c8819985a5b1959608a1b6044820152606401610638565b611001823087610790565b5060408051848152602081018790526001600160a01b038416917fed7a144fad14804d5c249145e3e0e2b63a9eb455b76aee5bc92d711e9bba3e4a910160405180910390a2506001949350505050565b60003361105d81610ae6565b6110975760405162461bcd60e51b815260206004820152600b60248201526a6e6f742061207768616c6560a81b6044820152606401610638565b600954600160401b90046001600160401b03161580156110c057506009546001600160401b0316155b61110c5760405162461bcd60e51b815260206004820152601a60248201527f766f74696e672068617320616c726561647920737461727465640000000000006044820152606401610638565b6000841161115c5760405162461bcd60e51b815260206004820152601f60248201527f7375676765737465645072696365206d75737420626520706f736974697665006044820152606401610638565b6000836001600160401b0316116111b55760405162461bcd60e51b815260206004820152601960248201527f6475726174696f6e206d75737420626520706f736974697665000000000000006044820152606401610638565b838342600980546001600160801b031916600160401b6001600160401b039384160267ffffffffffffffff19161792909116919091179055600a55600d8054906000611200836118fd565b9091555050600d54604080518681526001600160401b03861660208201529081019190915233907ffb062d8560d586dfedb0803a4ef6cf9a3b57a32ae7ac0f68a473fa1877545d919060600160405180910390a25060019392505050565b6001600160a01b0383166112ac5760405162461bcd60e51b81526020600482015260156024820152746f776e6572206973207a65726f206164647265737360581b6044820152606401610638565b6001600160a01b0382166113025760405162461bcd60e51b815260206004820152601760248201527f7370656e646572206973207a65726f20616464726573730000000000000000006044820152606401610638565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166113b95760405162461bcd60e51b815260206004820152601a60248201527f7472616e736665722066726f6d207a65726f20616464726573730000000000006044820152606401610638565b6001600160a01b03821661140f5760405162461bcd60e51b815260206004820152601860248201527f7472616e7366657220746f207a65726f206164647265737300000000000000006044820152606401610638565b6001600160a01b038316600090815260208190526040902054818110156114785760405162461bcd60e51b815260206004820152601f60248201527f7472616e7366657220616d6f756e7420657863656564732062616c616e6365006044820152606401610638565b611482828261178b565b6001600160a01b0380861660009081526020819052604080822093909355908516815290812080548492906114b89084906117cd565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161150491815260200190565b60405180910390a350505050565b600061151e82846117cd565b9392505050565b611535600654858463ffffffff16565b600655600754611549908463ffffffff8416565b600781905560065460405133927f1b175f1f323705c599a7bebc2915765ab0d8de5f922b0b68d08dd1dbe2d97fc49261158a92918252602082015260400190565b60405180910390a250505050565b600061151e828461178b565b600060208083528351808285015260005b818110156115d1578581018301518582016040015282016115b5565b818111156115e3576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461161057600080fd5b919050565b6000806040838503121561162857600080fd5b611631836115f9565b946020939093013593505050565b60006020828403121561165157600080fd5b61151e826115f9565b60008060006060848603121561166f57600080fd5b611678846115f9565b9250611686602085016115f9565b9150604084013590509250925092565b6000602082840312156116a857600080fd5b8135801515811461151e57600080fd5b6000602082840312156116ca57600080fd5b5035919050565b600080604083850312156116e457600080fd5b6116ed836115f9565b91506116fb602084016115f9565b90509250929050565b6000806040838503121561171757600080fd5b8235915060208301356001600160401b038116811461173557600080fd5b809150509250929050565b600181811c9082168061175457607f821691505b60208210811415610a7b57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008282101561179d5761179d611775565b500390565b60006001600160401b038083168185168083038211156117c4576117c4611775565b01949350505050565b600082198211156117e0576117e0611775565b500190565b60208082526017908201527f616d6f756e74206d75737420626520706f736974697665000000000000000000604082015260600190565b6020808252601c908201527f746f6b656e416d6f756e74206d75737420626520706f73697469766500000000604082015260600190565b634e487b7160e01b600052601260045260246000fd5b600060ff83168061187c5761187c611853565b8060ff84160491505092915050565b60008261189a5761189a611853565b500490565b60008160001904831182151516156118b9576118b9611775565b500290565b60008083128015600160ff1b8501841216156118dc576118dc611775565b6001600160ff1b03840183138116156118f7576118f7611775565b50500390565b600060001982141561191157611911611775565b506001019056fea2646970667358221220798d1f04858f63a6d931298157b2d4f94fa90b083c530b7270d11078b038aed664736f6c63430008090033";

type ERC20TradableVotesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20TradableVotesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20TradableVotes__factory extends ContractFactory {
  constructor(...args: ERC20TradableVotesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: string,
    symbol_: string,
    decimals_: BigNumberish,
    price_: BigNumberish,
    capitalShareRate_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20TradableVotes> {
    return super.deploy(
      name_,
      symbol_,
      decimals_,
      price_,
      capitalShareRate_,
      overrides || {}
    ) as Promise<ERC20TradableVotes>;
  }
  override getDeployTransaction(
    name_: string,
    symbol_: string,
    decimals_: BigNumberish,
    price_: BigNumberish,
    capitalShareRate_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      decimals_,
      price_,
      capitalShareRate_,
      overrides || {}
    );
  }
  override attach(address: string): ERC20TradableVotes {
    return super.attach(address) as ERC20TradableVotes;
  }
  override connect(signer: Signer): ERC20TradableVotes__factory {
    return super.connect(signer) as ERC20TradableVotes__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20TradableVotesInterface {
    return new utils.Interface(_abi) as ERC20TradableVotesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20TradableVotes {
    return new Contract(address, _abi, signerOrProvider) as ERC20TradableVotes;
  }
}
