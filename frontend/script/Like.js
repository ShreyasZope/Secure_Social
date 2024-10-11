import ethers from 'ethers';
      import ImageLikesABI from './ImageLikesABI.json';

      const connectToMetaMask = async () => {
  // Check if MetaMask is installed
  if (!window.ethereum) {
    throw new Error("MetaMask not installed");
  }

  // Request MetaMask connection
  const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
  await web3Provider.send("eth_requestAccounts", []);

  // Get the user's address (signer)
  const signer = web3Provider.getSigner();

  // Initialize the contract instance with signer
  const imageLikesContract = new ethers.Contract(contractAddress, ImageLikesABI, signer);

  return { signer, imageLikesContract };
};
      window.addEventListener('load', () => {
        const likeButton = document.getElementById('like-button');
        likeButton.addEventListener('click', async () => {
          try {
            const {imageLikesContract } = await connectToMetaMask();
            const imageId = 1; // You can set this dynamically if needed
            const response = await fetch('http://localhost:8080/api/images/like', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ imageId: imageId,imageLikesContract: imageLikesContract }), // Send imageId in the request body
            });

            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Image liked successfully:', data);
          } catch (error) {
            console.error('Error liking image:', error);
          }
        });
      });