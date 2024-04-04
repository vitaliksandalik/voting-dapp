require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()
require('@nomicfoundation/hardhat-ignition')
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // Specify the default network for deployments. Change as needed for different projects or environments.
  defaultNetwork: 'sepolia',
  networks: {
    hardhat: {},
    // Configuration for the Sepolia test network. Add other networks as required by your project.
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.SEPOLIA_ALCHEMY_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  solidity: {
    version: '0.8.19',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: './contracts',
    cache: './cache',
    artifacts: './artifacts',
  },
  mocha: {
    timeout: 40000,
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
}
