require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  defaultNetwork: "localhost",
  solidity: {
    compilers: [
      {
        version: "0.8.17",
      },
    ],
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  networks: {
    bsc_testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
    },
    polygon_testnet: {
      url: "https://rpc-mumbai.maticvigil.com",
      chainId: 80001,
      gasPrice: 20000000000,
      allowUnlimitedContractSize:true
    },
    localhost: {
      url: "http://localhost:8545",
      timeout: 150000,
      allowUnlimitedContractSize:true,
      gas: 9992000000,
      blockGasLimit: 0x1fffffffffffff,    
    },
    mainnet: {
      url: "https://matic-mainnet-full-rpc.bwarelabs.com",
      chainId: 137,
    },
    hardhat: {      
      timeout: 150000,
      allowUnlimitedContractSize:true,
      gas: 9992000000,
      blockGasLimit: 0x1fffffffffffff,    
      forking: {
        url: "https://bsc-dataseed1.binance.org/",
      }
    },
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_API_KEY,
  },
  mocha: {
    timeout: 50000
  }
};