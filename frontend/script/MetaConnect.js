// import { ethers } from "../imports/ethers.js-main/dist/ethers.min.js";


window.addEventListener('DOMContentLoaded', () => {
    const connectButton = document.getElementById('connect-button');
    let signer; // Store the signer globally
    if(connectButton){
      connectButton.addEventListener('click', async () => {
        await getLikeCount()
      });
      async function getLikeCount() {
        try {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          // 1. Get necessary data (e.g., function arguments)
          const imageId = 1; // Replace with dynamic value
          // 2. Create contract instance (assuming you have the ABI and address)
          const LikesCountContract = new ethers.Contract(
            "0x30BD62f7CbBFE3e675691757C8f0873f5f885Cc9", // Your contract address
            [
              {
                  "inputs": [],
                  "stateMutability": "nonpayable",
                  "type": "constructor"
              },
              {
                  "anonymous": false,
                  "inputs": [
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "imageId",
                          "type": "uint256"
                      },
                      {
                          "indexed": false,
                          "internalType": "uint256",
                          "name": "newLikeCount",
                          "type": "uint256"
                      }
                  ],
                  "name": "ImageLiked",
                  "type": "event"
              },
              {
                  "inputs": [
                      {
                          "internalType": "uint256",
                          "name": "_imageId",
                          "type": "uint256"
                      }
                  ],
                  "name": "getLikeCount",
                  "outputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "stateMutability": "view",
                  "type": "function"
              },
              {
                  "inputs": [
                      {
                          "internalType": "address",
                          "name": "",
                          "type": "address"
                      },
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "name": "hasLiked",
                  "outputs": [
                      {
                          "internalType": "bool",
                          "name": "",
                          "type": "bool"
                      }
                  ],
                  "stateMutability": "view",
                  "type": "function"
              },
              {
                  "inputs": [
                      {
                          "internalType": "uint256",
                          "name": "",
                          "type": "uint256"
                      }
                  ],
                  "name": "images",
                  "outputs": [
                      {
                          "internalType": "string",
                          "name": "name",
                          "type": "string"
                      },
                      {
                          "internalType": "uint256",
                          "name": "likeCount",
                          "type": "uint256"
                      }
                  ],
                  "stateMutability": "view",
                  "type": "function"
              },
              {
                  "inputs": [
                      {
                          "internalType": "uint256",
                          "name": "_imageId",
                          "type": "uint256"
                      }
                  ],
                  "name": "likeImage",
                  "outputs": [],
                  "stateMutability": "nonpayable",
                  "type": "function"
              }
          ], // Your contract ABI
          provider// Use the provider from MetaMask
          );
          const Lc = await LikesCountContract.getLikeCount(imageId);
          
          const likeCountElement = document.getElementById('like-count');
          likeCountElement.textContent = `    ${Lc.toString()}`;
      
          console.log('Likes:', Lc.toString());
    
          // 5. Optional: Update UI or send data to backend
        } catch (error) {
          console.error('Error sending transaction:', error);
        }
      }
  
    }
    connectButton.addEventListener('click', async () => {
      try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner(); // Get the signer
  
        console.log('Connected Account:', account);
  
        // Now you can call transaction functions
        const transactionButton = document.getElementById('like-button'); // Assuming you have a button for this
        if (transactionButton) {
          transactionButton.addEventListener('click', async () => {
            await sendTransaction();
            await getLikeCount()
          });
        }
  
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    });
    
    async function getLikeCount() {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        // 1. Get necessary data (e.g., function arguments)
        const imageId = 1; // Replace with dynamic value
        // 2. Create contract instance (assuming you have the ABI and address)
        const LikesCountContract = new ethers.Contract(
          "0x30BD62f7CbBFE3e675691757C8f0873f5f885Cc9", // Your contract address
          [
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "imageId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "newLikeCount",
                        "type": "uint256"
                    }
                ],
                "name": "ImageLiked",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_imageId",
                        "type": "uint256"
                    }
                ],
                "name": "getLikeCount",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "hasLiked",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "images",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "likeCount",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_imageId",
                        "type": "uint256"
                    }
                ],
                "name": "likeImage",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ], // Your contract ABI
        provider// Use the provider from MetaMask
        );
        const Lc = await LikesCountContract.getLikeCount(imageId);
        
        const likeCountElement = document.getElementById('like-count');
        likeCountElement.textContent = `    ${Lc.toString()}`;
    
        console.log('Likes:', Lc.toString());
  
        // 5. Optional: Update UI or send data to backend
      } catch (error) {
        console.error('Error sending transaction:', error);
      }
    }

    async function sendTransaction() {
      try {
        // 1. Get necessary data (e.g., function arguments)
        const imageId = 1; // Replace with dynamic value
        // 2. Create contract instance (assuming you have the ABI and address)
        const imageLikesContract = new ethers.Contract(
          "0x30BD62f7CbBFE3e675691757C8f0873f5f885Cc9", // Your contract address
          [
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "imageId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "newLikeCount",
                        "type": "uint256"
                    }
                ],
                "name": "ImageLiked",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_imageId",
                        "type": "uint256"
                    }
                ],
                "name": "getLikeCount",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "hasLiked",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "images",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "likeCount",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_imageId",
                        "type": "uint256"
                    }
                ],
                "name": "likeImage",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ], // Your contract ABI
          signer // Use the signer from MetaMask
        );
  
        // 3. Call the transaction function
        const tx = await imageLikesContract.likeImage(imageId, { gasLimit: 1000000 }); // Replace with your function name and arguments
        // 4. Wait for transaction confirmation
        await tx.wait();
        console.log('Transaction successful:', tx.hash);
  
        // 5. Optional: Update UI or send data to backend
      } catch (error) {
        console.error('You have liked the image once');
      }
    }
  });
  