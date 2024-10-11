// controllers/imageController.js

const { ethers } = require('ethers');
const ImageLikesABI = require('../../ImageLikesABI.json');
require('dotenv').config();

// Existing provider for read-only operations
const provider = new ethers.JsonRpcProvider(process.env.ETH_NODE_URL);
const signer = provider.getSigner();
const contractAddress = "0x336c649077e8a8d86ad5eb31a5e50dba308c4162";
const imageLikesContract = new ethers.Contract(contractAddress, ImageLikesABI, signer);

// Function to connect to MetaMask
// const connectToMetaMask = async () => {
//   // Check if MetaMask is installed
//   if (!window.ethereum) {
//     throw new Error("MetaMask not installed");
//   }

//   // Request MetaMask connection
//   const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
//   await web3Provider.send("eth_requestAccounts", []);

//   // Get the user's address (signer)
//   const signer = web3Provider.getSigner();

//   // Initialize the contract instance with signer
//   const imageLikesContract = new ethers.Contract(contractAddress, ImageLikesABI, signer);

//   return { signer, imageLikesContract };
// };

// Function to like an image on the blockchain
const likeImage = async (req, res) => {
  try {
    // // Connect to MetaMask
    // const { signer, imageLikesContract } = req.body;

    // // Get image ID from request
    // const { imageId } = req.body; 

    // Send the transaction to like an image
    const tx = await imageLikesContract.likeImage(imageId, { gasLimit: 1000000 });

    // Wait for the transaction to be mined
    await tx.wait();

    // Respond with the transaction hash
    res.json({ success: true, transactionHash: tx.hash });
  } catch (error) {
    console.error("Error liking image:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

// Function to get the like count for a specific image
const getLikeCount = async (req, res) => {
  try {
    // Use existing provider for read-only operation
    const imageLikesContract = new ethers.Contract(contractAddress, ImageLikesABI, provider);

    // Get image ID from request
    const { imageId } = req.params;

    // Call the smart contract function
    const likeCount = await imageLikesContract.getLikeCount(imageId);

    // Ensure the like count is not null or undefined
    if (likeCount === null || likeCount === undefined) {
      throw new Error("No data returned from contract");
    }

    // Respond with the like count
    res.json({ success: true, likeCount: likeCount.toString() });
  } catch (error) {
    console.error("Error getting like count:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { likeImage, getLikeCount };
