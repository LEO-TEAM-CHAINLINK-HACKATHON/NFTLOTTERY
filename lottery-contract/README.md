# Smart Contract for NFT Raffle
This folder store src code for smart contract of the NFT Raffle, written in Solidity and Brownie Python framework.

# Build
## Compile
For simple build:

```
brownie compile
```

## Deploy to testnet
To deploy to Rinkeby (or other testnet) for testing:
```
brownie run deploy_NFTcontract.py --network rinkeby
```

You must have supplied a valid Infura/Alchemy ID that point to the corresponding testnet in an ```.env``` file:

```
export WEB3_INFURA_PROJECT_ID=977898bc023f43e1b4426be89622f157
```