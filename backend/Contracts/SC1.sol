// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ImageLikes {
    // Struct to store the image's name and like count
    struct Image {
        string name;
        uint256 likeCount;
    }

    // Array to store 3 images with their names and like counts
    Image[3] public images;

    // Mapping to track if a user has liked a specific image (user address -> imageId -> bool)
    mapping(address => bool[3]) public hasLiked;

    // Event emitted when an image is liked
    event ImageLiked(uint256 imageId, uint256 newLikeCount);

    constructor() {
        // Initialize the 3 images
        images[0] = Image("Photo1", 0);
        images[1] = Image("Photo2", 0);
        images[2] = Image("Photo3", 0);
    }

    // Function to like an image
    function likeImage(uint256 _imageId) public {
        require(_imageId < 3, "Invalid image ID"); // Ensure the image ID is within bounds
        require(!hasLiked[msg.sender][_imageId], "You have already liked this image");

        // Increment the like count for the image
        images[_imageId].likeCount++;
        
        // Mark that the user has liked this image
        hasLiked[msg.sender][_imageId] = true;

        // Emit the event for the like action
        emit ImageLiked(_imageId, images[_imageId].likeCount);
    }

    // Function to get the like count of a specific image
    function getLikeCount(uint256 _imageId) public view returns (uint256) {
        require(_imageId < 3, "Invalid image ID");
        return images[_imageId].likeCount;
}
}