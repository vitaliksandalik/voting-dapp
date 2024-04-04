# Setup Guide for Hardhat Project

This guide will help you set up my Hardhat project, which involves compiling and deploying a smart contract to EVM chains.

## Prerequisites

Before you start, ensure you have the following prerequisites installed on your system:

- **Node.js**: Necessary to run the Hardhat framework. Download from the [official website](https://nodejs.org/).
- **npm**: Comes with Node.js and manages dependencies.

## Setting Up

After cloning the repository, navigate to the server directory of your project. Install the required dependencies by running:

```bash
npm install
```

## Important Files to Notice

### `arguments.js`:

Contains the constructor arguments for your smart contract. Modify the candidate names and voting duration as needed.

```javascript
// Exporting constructor arguments for the smart contract:
module.exports = [
  ['Vitalii', 'George', 'Misha', 'Alex'], // Candidate names
  525600, // Voting duration in minutes, in this case 1 year
]
```

### `contracts/Voting.sol`:

The Solidity contract file. Ensure it's properly written and tested before deploying on the Mainnet. Do not use mine for real apps.

### `hardhat.config.js`:

Configures the Hardhat environment, including network settings and compiler options.

```javascript
require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()
require('@nomicfoundation/hardhat-ignition')

module.exports = {
  // Specify the default network for deployments.
  // Change as needed for different projects or environments.
  defaultNetwork: 'sepolia',
  networks: {
    hardhat: {},
    // Configuration for the Sepolia test network.
    // Add other networks as required by your project.
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
```

### `.env.example`:

Contains template environment variables. Rename this file to `.env` and fill in the values with your private key, Alchemy API key for Sepolia, and Etherscan API key.

## Compiling the Contract

Before deployment, you need to compile your contract to check for any errors and to generate the ABI and bytecode. Run:

```bash
npx hardhat compile
```

## Deploying the Contract

To deploy your contract, run the following command in the server folder, ensuring you're targeting the correct network (e.g., Sepolia). If redeploying, first delete the `deployments` folder.

```bash
npx hardhat ignition deploy ignition/modules/Voting.js --network sepolia
```

## Support

If you encounter any issues or have questions, feel free to open an issue in the repository or message me! I have multiple socials in my profile 🔗.
