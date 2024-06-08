/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { PayableOverrides } from "../common";
import type { Voting, VotingInterface } from "../Voting";

const _abi = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "candidateID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "party",
        type: "string",
      },
    ],
    name: "CandidateAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "candidateID",
        type: "uint256",
      },
    ],
    name: "Voted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
    ],
    name: "VotingEnded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "durationMinutes",
        type: "uint256",
      },
    ],
    name: "VotingStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "candidateID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "party",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "voteCount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "percent",
        type: "uint256",
      },
    ],
    name: "WinnerDeclared",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "party",
        type: "string",
      },
    ],
    name: "addCandidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "candidates",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "party",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "voteCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "candidatesCount",
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
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "candidateID",
        type: "uint256",
      },
    ],
    name: "getCandidate",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "party",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "voteCount",
            type: "uint256",
          },
        ],
        internalType: "struct Voting.Candidate",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "durationMinutes",
        type: "uint256",
      },
    ],
    name: "startVoting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalVotes",
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
        name: "voter",
        type: "address",
      },
    ],
    name: "verifyVoter",
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
    inputs: [
      {
        internalType: "uint256",
        name: "candidateID",
        type: "uint256",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "votingEndTime",
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
    name: "votingStartTime",
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
    name: "votingStarted",
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
] as const;

const _bytecode =
  "0x60806040526000600760006101000a81548160ff021916908315150217905550600060085533600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611e34806100746000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80632d35a8a2116100715780632d35a8a21461017b5780633477ee2e1461019957806335b8e820146101cc5780633d2f5bda146101fc57806383d948b714610218578063c3403ddf14610236576100b4565b80630121b93f146100b957806309bd0950146100d55780630d15fd77146101055780631ea736e0146101235780632019a6081461014157806326541b561461015f575b600080fd5b6100d360048036038101906100ce9190610ec3565b610240565b005b6100ef60048036038101906100ea9190610f4e565b61048d565b6040516100fc9190610f96565b60405180910390f35b61010d6104d9565b60405161011a9190610fc0565b60405180910390f35b61012b6104df565b6040516101389190610fc0565b60405180910390f35b6101496104e5565b6040516101569190610fc0565b60405180910390f35b61017960048036038101906101749190611121565b6104eb565b005b61018361072b565b6040516101909190610fc0565b60405180910390f35b6101b360048036038101906101ae9190610ec3565b610731565b6040516101c39493929190611218565b60405180910390f35b6101e660048036038101906101e19190610ec3565b610871565b6040516101f3919061132e565b60405180910390f35b61021660048036038101906102119190610ec3565b610a26565b005b610220610bd4565b60405161022d9190610f96565b60405180910390f35b61023e610be7565b005b600760009054906101000a900460ff1661028f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102869061139c565b60405180910390fd5b60055442101580156102a357506006544211155b6102e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d99061142e565b60405180910390fd5b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610364576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035b9061149a565b60405180910390fd5b60008111801561037657506003548111155b6103b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ac90611506565b60405180910390fd5b80600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600080828152602001908152602001600020600301600081548092919061041f90611555565b91905055506008600081548092919061043790611555565b91905055503373ffffffffffffffffffffffffffffffffffffffff167f4d99b957a2bc29a30ebd96a7be8e68fe50a3c701db28a91436490b7d53870ca4826040516104829190610fc0565b60405180910390a250565b600080600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414159050919050565b60085481565b60065481565b60055481565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461057b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105729061160f565b60405180910390fd5b60016000838360405160200161059292919061166b565b60405160208183030381529060405280519060200120815260200190815260200160002060009054906101000a900460ff1615610604576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105fb90611701565b60405180910390fd5b6003600081548092919061061790611555565b91905055506040518060800160405280600354815260200183815260200182815260200160008152506000806003548152602001908152602001600020600082015181600001556020820151816001019081610673919061192d565b506040820151816002019081610689919061192d565b5060608201518160030155905050600180600084846040516020016106af92919061166b565b60405160208183030381529060405280519060200120815260200190815260200160002060006101000a81548160ff0219169083151502179055507fe64f834082661dd9ed89427b87edb6270fd6dad17198b0938f0edd058914c87f600354838360405161071f939291906119ff565b60405180910390a15050565b60035481565b600060205280600052604060002060009150905080600001549080600101805461075a90611750565b80601f016020809104026020016040519081016040528092919081815260200182805461078690611750565b80156107d35780601f106107a8576101008083540402835291602001916107d3565b820191906000526020600020905b8154815290600101906020018083116107b657829003601f168201915b5050505050908060020180546107e890611750565b80601f016020809104026020016040519081016040528092919081815260200182805461081490611750565b80156108615780601f1061083657610100808354040283529160200191610861565b820191906000526020600020905b81548152906001019060200180831161084457829003601f168201915b5050505050908060030154905084565b610879610e51565b60008211801561088b57506003548211155b6108ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c190611506565b60405180910390fd5b6000808381526020019081526020016000206040518060800160405290816000820154815260200160018201805461090190611750565b80601f016020809104026020016040519081016040528092919081815260200182805461092d90611750565b801561097a5780601f1061094f5761010080835404028352916020019161097a565b820191906000526020600020905b81548152906001019060200180831161095d57829003601f168201915b5050505050815260200160028201805461099390611750565b80601f01602080910402602001604051908101604052809291908181526020018280546109bf90611750565b8015610a0c5780601f106109e157610100808354040283529160200191610a0c565b820191906000526020600020905b8154815290600101906020018083116109ef57829003601f168201915b505050505081526020016003820154815250509050919050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ab6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aad9061160f565b60405180910390fd5b60026003541015610afc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610af390611ab6565b60405180910390fd5b600760009054906101000a900460ff1615610b4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b4390611b22565b60405180910390fd5b42600581905550603c81610b609190611b42565b600554610b6d9190611b84565b6006819055506001600760006101000a81548160ff02191690831515021790555060006008819055507ff8c022056754dbacca05aff710dc315a2fa7699ae9309fda403cd1e55c11d40f60055482604051610bc9929190611bb8565b60405180910390a150565b600760009054906101000a900460ff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c77576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6e9061160f565b60405180910390fd5b600760009054906101000a900460ff16610cc6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cbd90611c2d565b60405180910390fd5b6000600760006101000a81548160ff0219169083151502179055507f81eb7415440ff8e6c8e92606fd3b0e5e6a5c99ea90cdb63b41aec54e897312b342604051610d109190610fc0565b60405180910390a1610d20610d22565b565b600060085411610d67576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d5e90611c99565b60405180910390fd5b6000806000600190505b6003548111610dc65782600080838152602001908152602001600020600301541115610db3576000808281526020019081526020016000206003015492508091505b8080610dbe90611555565b915050610d71565b506000600854606484610dd99190611b42565b610de39190611ce8565b90507ffb96fcc4bd6e5bdcb24979935d03b84cd46a949764a19d318a52431c2a3d0e06826000808581526020019081526020016000206001016000808681526020019081526020016000206002018685604051610e44959493929190611d9d565b60405180910390a1505050565b6040518060800160405280600081526020016060815260200160608152602001600081525090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b610ea081610e8d565b8114610eab57600080fd5b50565b600081359050610ebd81610e97565b92915050565b600060208284031215610ed957610ed8610e83565b5b6000610ee784828501610eae565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610f1b82610ef0565b9050919050565b610f2b81610f10565b8114610f3657600080fd5b50565b600081359050610f4881610f22565b92915050565b600060208284031215610f6457610f63610e83565b5b6000610f7284828501610f39565b91505092915050565b60008115159050919050565b610f9081610f7b565b82525050565b6000602082019050610fab6000830184610f87565b92915050565b610fba81610e8d565b82525050565b6000602082019050610fd56000830184610fb1565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61102e82610fe5565b810181811067ffffffffffffffff8211171561104d5761104c610ff6565b5b80604052505050565b6000611060610e79565b905061106c8282611025565b919050565b600067ffffffffffffffff82111561108c5761108b610ff6565b5b61109582610fe5565b9050602081019050919050565b82818337600083830152505050565b60006110c46110bf84611071565b611056565b9050828152602081018484840111156110e0576110df610fe0565b5b6110eb8482856110a2565b509392505050565b600082601f83011261110857611107610fdb565b5b81356111188482602086016110b1565b91505092915050565b6000806040838503121561113857611137610e83565b5b600083013567ffffffffffffffff81111561115657611155610e88565b5b611162858286016110f3565b925050602083013567ffffffffffffffff81111561118357611182610e88565b5b61118f858286016110f3565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b60005b838110156111d35780820151818401526020810190506111b8565b60008484015250505050565b60006111ea82611199565b6111f481856111a4565b93506112048185602086016111b5565b61120d81610fe5565b840191505092915050565b600060808201905061122d6000830187610fb1565b818103602083015261123f81866111df565b9050818103604083015261125381856111df565b90506112626060830184610fb1565b95945050505050565b61127481610e8d565b82525050565b600082825260208201905092915050565b600061129682611199565b6112a0818561127a565b93506112b08185602086016111b5565b6112b981610fe5565b840191505092915050565b60006080830160008301516112dc600086018261126b565b50602083015184820360208601526112f4828261128b565b9150506040830151848203604086015261130e828261128b565b9150506060830151611323606086018261126b565b508091505092915050565b6000602082019050818103600083015261134881846112c4565b905092915050565b7f566f74696e67206e6f7420737461727465642079657400000000000000000000600082015250565b60006113866016836111a4565b915061139182611350565b602082019050919050565b600060208201905081810360008301526113b581611379565b9050919050565b7f566f74696e6720706572696f642068617320656e646564206f72206e6f74207360008201527f7461727465640000000000000000000000000000000000000000000000000000602082015250565b60006114186026836111a4565b9150611423826113bc565b604082019050919050565b600060208201905081810360008301526114478161140b565b9050919050565b7f416c726561647920766f74656400000000000000000000000000000000000000600082015250565b6000611484600d836111a4565b915061148f8261144e565b602082019050919050565b600060208201905081810360008301526114b381611477565b9050919050565b7f496e76616c69642063616e646964617465204944000000000000000000000000600082015250565b60006114f06014836111a4565b91506114fb826114ba565b602082019050919050565b6000602082019050818103600083015261151f816114e3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061156082610e8d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361159257611591611526565b5b600182019050919050565b7f4f6e6c792061646d696e2063616e20706572666f726d2074686973206163746960008201527f6f6e000000000000000000000000000000000000000000000000000000000000602082015250565b60006115f96022836111a4565b91506116048261159d565b604082019050919050565b60006020820190508181036000830152611628816115ec565b9050919050565b600081905092915050565b600061164582611199565b61164f818561162f565b935061165f8185602086016111b5565b80840191505092915050565b6000611677828561163a565b9150611683828461163a565b91508190509392505050565b7f43616e6469646174652077697468207468652073616d65206e616d6520616e6460008201527f20706172747920616c7265616479206578697374730000000000000000000000602082015250565b60006116eb6035836111a4565b91506116f68261168f565b604082019050919050565b6000602082019050818103600083015261171a816116de565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061176857607f821691505b60208210810361177b5761177a611721565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026117e37fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826117a6565b6117ed86836117a6565b95508019841693508086168417925050509392505050565b6000819050919050565b600061182a61182561182084610e8d565b611805565b610e8d565b9050919050565b6000819050919050565b6118448361180f565b61185861185082611831565b8484546117b3565b825550505050565b600090565b61186d611860565b61187881848461183b565b505050565b5b8181101561189c57611891600082611865565b60018101905061187e565b5050565b601f8211156118e1576118b281611781565b6118bb84611796565b810160208510156118ca578190505b6118de6118d685611796565b83018261187d565b50505b505050565b600082821c905092915050565b6000611904600019846008026118e6565b1980831691505092915050565b600061191d83836118f3565b9150826002028217905092915050565b61193682611199565b67ffffffffffffffff81111561194f5761194e610ff6565b5b6119598254611750565b6119648282856118a0565b600060209050601f8311600181146119975760008415611985578287015190505b61198f8582611911565b8655506119f7565b601f1984166119a586611781565b60005b828110156119cd578489015182556001820191506020850194506020810190506119a8565b868310156119ea57848901516119e6601f8916826118f3565b8355505b6001600288020188555050505b505050505050565b6000606082019050611a146000830186610fb1565b8181036020830152611a2681856111df565b90508181036040830152611a3a81846111df565b9050949350505050565b7f4e656564206174206c656173742074776f2063616e6469646174657320746f2060008201527f737461727420766f74696e670000000000000000000000000000000000000000602082015250565b6000611aa0602c836111a4565b9150611aab82611a44565b604082019050919050565b60006020820190508181036000830152611acf81611a93565b9050919050565b7f566f74696e672068617320616c72656164792073746172746564000000000000600082015250565b6000611b0c601a836111a4565b9150611b1782611ad6565b602082019050919050565b60006020820190508181036000830152611b3b81611aff565b9050919050565b6000611b4d82610e8d565b9150611b5883610e8d565b9250828202611b6681610e8d565b91508282048414831517611b7d57611b7c611526565b5b5092915050565b6000611b8f82610e8d565b9150611b9a83610e8d565b9250828201905080821115611bb257611bb1611526565b5b92915050565b6000604082019050611bcd6000830185610fb1565b611bda6020830184610fb1565b9392505050565b7f566f74696e6720686173206e6f74206265656e20737461727465642079657400600082015250565b6000611c17601f836111a4565b9150611c2282611be1565b602082019050919050565b60006020820190508181036000830152611c4681611c0a565b9050919050565b7f4e6f20766f7465732068617665206265656e2063617374000000000000000000600082015250565b6000611c836017836111a4565b9150611c8e82611c4d565b602082019050919050565b60006020820190508181036000830152611cb281611c76565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611cf382610e8d565b9150611cfe83610e8d565b925082611d0e57611d0d611cb9565b5b828204905092915050565b60008154611d2681611750565b611d3081866111a4565b94506001821660008114611d4b5760018114611d6157611d94565b60ff198316865281151560200286019350611d94565b611d6a85611781565b60005b83811015611d8c57815481890152600182019150602081019050611d6d565b808801955050505b50505092915050565b600060a082019050611db26000830188610fb1565b8181036020830152611dc48187611d19565b90508181036040830152611dd88186611d19565b9050611de76060830185610fb1565b611df46080830184610fb1565b969550505050505056fea2646970667358221220de9c7e0d26deec91893ec35af6c29ffb1ff2fa634f2180af4b2a409991b477de64736f6c63430008180033";

type VotingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VotingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Voting__factory extends ContractFactory {
  constructor(...args: VotingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: PayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Voting & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Voting__factory {
    return super.connect(runner) as Voting__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VotingInterface {
    return new Interface(_abi) as VotingInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Voting {
    return new Contract(address, _abi, runner) as unknown as Voting;
  }
}
