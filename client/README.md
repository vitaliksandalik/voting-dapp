# Client Setup Guide for React App

To set up and run this React application, you will need the following installed on your system:

- **Node.js**: The runtime environment required to run the React app. Download and install it from [Node.js official website](https://nodejs.org/).

- **npm**: Comes bundled with Node.js and is used for managing dependencies.

## Setting Up

After cloning the repository and navigating into the client directory, you'll need to install the necessary dependencies. Run the following command in your terminal:

```bash
npm install
```

## Important Files to Notice

### `client.js`:

This file initializes the connection to the blockchain network and specifies the smart contract you're interacting with. Ensure you import the correct network where your contract is deployed.

```javascript
import { createPublicClient, http } from 'viem'
import { sepolia } from 'viem/chains' // Import the network you've deployed the contract on

export const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(),
})
```

### `constants.js`:

After deploying your `Voting.sol` smart contract, replace the placeholder in this file with your actual contract address.

```javascript
// After deploying Voting.sol, replace the placeholder below with the actual contract address.
const contractAddress = '0xe7Dfc6924f8670fd94aF7953F47AA49eB2a73471'
```

To deploy your contract, use the following command, ensuring you're targeting the correct network (e.g., Sepolia). This should be called from the server folder:

```bash
npx hardhat ignition deploy ignition/modules/Voting.js --network sepolia
```

## Running the Application

To start the React application, run the following command in your terminal:

```bash
npm run dev
```

This will launch the application on a local development server. Open your web browser and navigate to the URL provided in the terminal output to view the app.

## Support

If you encounter any issues or have questions, feel free to open an issue in the repository or message me! I have multiple socials in my profile 🔗.
