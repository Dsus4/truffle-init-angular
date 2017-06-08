let abi={
  "contract_name": "MetaCoin",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "getBalanceInEth",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "receiver",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "sendCoin",
      "outputs": [
        {
          "name": "sufficient",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "getBalance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    }
  ],
  "unlinked_binary": "0x6060604052341561000c57fe5b5b600160a060020a033216600090815260208190526040902061271090555b5b6102308061003b6000396000f300606060405263ffffffff60e060020a6000350416637bd703e8811461003757806390b98a1114610065578063f8b2cb4f14610098575bfe5b341561003f57fe5b610053600160a060020a03600435166100c6565b60408051918252519081900360200190f35b341561006d57fe5b610084600160a060020a036004351660243561014d565b604080519115158252519081900360200190f35b34156100a057fe5b610053600160a060020a03600435166101e5565b60408051918252519081900360200190f35b600073__ConvertLib____________________________6396e4ee3d6100eb846101e5565b60026000604051602001526040518363ffffffff1660e060020a028152600401808381526020018281526020019250505060206040518083038186803b151561013057fe5b6102c65a03f4151561013e57fe5b5050604051519150505b919050565b600160a060020a03331660009081526020819052604081205482901015610176575060006101df565b600160a060020a0333811660008181526020818152604080832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35060015b92915050565b600160a060020a0381166000908152602081905260409020545b9190505600a165627a7a723058200e83e4d1d97cb53de1421a4d8cfed553c696fb0301e76fea1ea9b74a1a28b11c0029",
  "networks": {
    "1496859519481": {
      "events": {
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "_to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        }
      },
      "links": {
        "ConvertLib": "0xb24fd9f4393f05114b96606e4de9d6df92b8beb8"
      },
      "address": "0x96ab027f1d9e0e17e64715f08ca4336f0bc5d7b6",
      "updated_at": 1496860885668
    }
  },
  "schema_version": "0.0.5",
  "updated_at": 1496860885668
}; export default abi;