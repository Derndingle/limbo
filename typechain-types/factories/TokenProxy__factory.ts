/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TokenProxy, TokenProxyInterface } from "../TokenProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "_baseToken",
        type: "address",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "redeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
        name: "recipient",
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
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001f3938038062001f398339818101604052810190620000379190620001ed565b80806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050826001908051906020019062000091929190620000b4565b508160029080519060200190620000aa929190620000b4565b5050505062000433565b828054620000c2906200033e565b90600052602060002090601f016020900481019282620000e6576000855562000132565b82601f106200010157805160ff191683800117855562000132565b8280016001018555821562000132579182015b828111156200013157825182559160200191906001019062000114565b5b50905062000141919062000145565b5090565b5b808211156200016057600081600090555060010162000146565b5090565b60006200017b62000175846200029e565b62000275565b9050828152602081018484840111156200019457600080fd5b620001a184828562000308565b509392505050565b600081519050620001ba8162000419565b92915050565b600082601f830112620001d257600080fd5b8151620001e484826020860162000164565b91505092915050565b6000806000606084860312156200020357600080fd5b600084015167ffffffffffffffff8111156200021e57600080fd5b6200022c86828701620001c0565b935050602084015167ffffffffffffffff8111156200024a57600080fd5b6200025886828701620001c0565b92505060406200026b86828701620001a9565b9150509250925092565b60006200028162000294565b90506200028f828262000374565b919050565b6000604051905090565b600067ffffffffffffffff821115620002bc57620002bb620003d9565b5b620002c78262000408565b9050602081019050919050565b6000620002e182620002e8565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b83811015620003285780820151818401526020810190506200030b565b8381111562000338576000848401525b50505050565b600060028204905060018216806200035757607f821691505b602082108114156200036e576200036d620003aa565b5b50919050565b6200037f8262000408565b810181811067ffffffffffffffff82111715620003a157620003a0620003d9565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6200042481620002d4565b81146200043057600080fd5b50565b611af680620004436000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063395093511161008c57806395d89b411161006657806395d89b411461024e578063a457c2d71461026c578063a9059cbb1461029c578063dd62ed3e146102cc576100cf565b806339509351146101be57806340c10f19146101ee57806370a082311461021e576100cf565b806306fdde03146100d4578063095ea7b3146100f257806318160ddd146101225780631e9a69501461014057806323b872dd14610170578063313ce567146101a0575b600080fd5b6100dc6102fc565b6040516100e99190611424565b60405180910390f35b61010c60048036038101906101079190611171565b61038a565b6040516101199190611409565b60405180910390f35b61012a6103a1565b6040516101379190611586565b60405180910390f35b61015a60048036038101906101559190611171565b6103ab565b6040516101679190611586565b60405180910390f35b61018a60048036038101906101859190611122565b61046e565b6040516101979190611409565b60405180910390f35b6101a8610561565b6040516101b591906115a1565b60405180910390f35b6101d860048036038101906101d39190611171565b61056a565b6040516101e59190611409565b60405180910390f35b61020860048036038101906102039190611171565b610608565b6040516102159190611586565b60405180910390f35b610238600480360381019061023391906110bd565b6106ce565b6040516102459190611586565b60405180910390f35b610256610717565b6040516102639190611424565b60405180910390f35b61028660048036038101906102819190611171565b6107a5565b6040516102939190611409565b60405180910390f35b6102b660048036038101906102b19190611171565b61088b565b6040516102c39190611409565b60405180910390f35b6102e660048036038101906102e191906110e6565b6108a2565b6040516102f39190611586565b60405180910390f35b60018054610309906116ea565b80601f0160208091040260200160405190810160405280929190818152602001828054610335906116ea565b80156103825780601f1061035757610100808354040283529160200191610382565b820191906000526020600020905b81548152906001019060200180831161036557829003601f168201915b505050505081565b6000610397338484610929565b6001905092915050565b6000600554905090565b60006103b73383610af4565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84846040518363ffffffff1660e01b81526004016104129291906113e0565b602060405180830381600087803b15801561042c57600080fd5b505af1158015610440573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061046491906111ad565b5081905092915050565b600061047b848484610cbe565b6000600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561053f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610536906114c6565b60405180910390fd5b61055585338584610550919061162e565b610929565b60019150509392505050565b60006012905090565b60006105fe338484600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546105f991906115d8565b610929565b6001905092915050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401610668939291906113a9565b602060405180830381600087803b15801561068257600080fd5b505af1158015610696573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ba91906111ad565b506106c58383610f35565b81905092915050565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60028054610724906116ea565b80601f0160208091040260200160405190810160405280929190818152602001828054610750906116ea565b801561079d5780601f106107725761010080835404028352916020019161079d565b820191906000526020600020905b81548152906001019060200180831161078057829003601f168201915b505050505081565b600080600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561086a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086190611546565b60405180910390fd5b6108803385858461087b919061162e565b610929565b600191505092915050565b6000610898338484610cbe565b6001905092915050565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610999576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099090611526565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a09576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0090611486565b60405180910390fd5b80600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610ae79190611586565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b64576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5b906114e6565b60405180910390fd5b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610beb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610be290611466565b60405180910390fd5b8181610bf7919061162e565b600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160056000828254610c4c919061162e565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610cb19190611586565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610d2e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2590611506565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d9e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d9590611446565b60405180910390fd5b6000600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610e25576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1c906114a6565b60405180910390fd5b8181610e31919061162e565b600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ec391906115d8565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610f279190611586565b60405180910390a350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610fa5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f9c90611566565b60405180910390fd5b8060056000828254610fb791906115d8565b9250508190555080600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461100d91906115d8565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516110729190611586565b60405180910390a35050565b60008135905061108d81611a7b565b92915050565b6000815190506110a281611a92565b92915050565b6000813590506110b781611aa9565b92915050565b6000602082840312156110cf57600080fd5b60006110dd8482850161107e565b91505092915050565b600080604083850312156110f957600080fd5b60006111078582860161107e565b92505060206111188582860161107e565b9150509250929050565b60008060006060848603121561113757600080fd5b60006111458682870161107e565b93505060206111568682870161107e565b9250506040611167868287016110a8565b9150509250925092565b6000806040838503121561118457600080fd5b60006111928582860161107e565b92505060206111a3858286016110a8565b9150509250929050565b6000602082840312156111bf57600080fd5b60006111cd84828501611093565b91505092915050565b6111df81611662565b82525050565b6111ee81611674565b82525050565b60006111ff826115bc565b61120981856115c7565b93506112198185602086016116b7565b6112228161177a565b840191505092915050565b600061123a6023836115c7565b91506112458261178b565b604082019050919050565b600061125d6022836115c7565b9150611268826117da565b604082019050919050565b60006112806022836115c7565b915061128b82611829565b604082019050919050565b60006112a36026836115c7565b91506112ae82611878565b604082019050919050565b60006112c66028836115c7565b91506112d1826118c7565b604082019050919050565b60006112e96021836115c7565b91506112f482611916565b604082019050919050565b600061130c6025836115c7565b915061131782611965565b604082019050919050565b600061132f6024836115c7565b915061133a826119b4565b604082019050919050565b60006113526025836115c7565b915061135d82611a03565b604082019050919050565b6000611375601f836115c7565b915061138082611a52565b602082019050919050565b611394816116a0565b82525050565b6113a3816116aa565b82525050565b60006060820190506113be60008301866111d6565b6113cb60208301856111d6565b6113d8604083018461138b565b949350505050565b60006040820190506113f560008301856111d6565b611402602083018461138b565b9392505050565b600060208201905061141e60008301846111e5565b92915050565b6000602082019050818103600083015261143e81846111f4565b905092915050565b6000602082019050818103600083015261145f8161122d565b9050919050565b6000602082019050818103600083015261147f81611250565b9050919050565b6000602082019050818103600083015261149f81611273565b9050919050565b600060208201905081810360008301526114bf81611296565b9050919050565b600060208201905081810360008301526114df816112b9565b9050919050565b600060208201905081810360008301526114ff816112dc565b9050919050565b6000602082019050818103600083015261151f816112ff565b9050919050565b6000602082019050818103600083015261153f81611322565b9050919050565b6000602082019050818103600083015261155f81611345565b9050919050565b6000602082019050818103600083015261157f81611368565b9050919050565b600060208201905061159b600083018461138b565b92915050565b60006020820190506115b6600083018461139a565b92915050565b600081519050919050565b600082825260208201905092915050565b60006115e3826116a0565b91506115ee836116a0565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156116235761162261171c565b5b828201905092915050565b6000611639826116a0565b9150611644836116a0565b9250828210156116575761165661171c565b5b828203905092915050565b600061166d82611680565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156116d55780820151818401526020810190506116ba565b838111156116e4576000848401525b50505050565b6000600282049050600182168061170257607f821691505b602082108114156117165761171561174b565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b611a8481611662565b8114611a8f57600080fd5b50565b611a9b81611674565b8114611aa657600080fd5b50565b611ab2816116a0565b8114611abd57600080fd5b5056fea2646970667358221220c1a8d52ff625ce6056fd26617dcab193fdb663cbcdcf16b9f14db112897da72064736f6c63430008040033";

export class TokenProxy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _name: string,
    _symbol: string,
    _baseToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TokenProxy> {
    return super.deploy(
      _name,
      _symbol,
      _baseToken,
      overrides || {}
    ) as Promise<TokenProxy>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _baseToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _baseToken,
      overrides || {}
    );
  }
  attach(address: string): TokenProxy {
    return super.attach(address) as TokenProxy;
  }
  connect(signer: Signer): TokenProxy__factory {
    return super.connect(signer) as TokenProxy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenProxyInterface {
    return new utils.Interface(_abi) as TokenProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenProxy {
    return new Contract(address, _abi, signerOrProvider) as TokenProxy;
  }
}