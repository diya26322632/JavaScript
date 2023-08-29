#  gh

This project demonstrates a basic implementation of minting and tracking Non-Fungible Tokens (NFTs) using JavaScript.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/nft-minting-project.git`
2. Navigate to the project directory: `cd nft-minting-project`

## Usage

1. Open the `index.html` file in your browser.
2. Open the browser's developer console to view logs.
3. The `mintNFT` function can be used to mint new NFTs.
4. The `listNFTs` function displays the metadata of all minted NFTs.
5. The `getTotalSupply` function returns the total number of minted NFTs.

## Example

```javascript
// Mint some NFTs
mintNFT("Diya", "Blue", "Hoodie", "Gold Chain");
mintNFT("Sakshi", "White", "Shirt", "Gold Chain");
mintNFT("Priya", "Grey", "Top", "Gold Chain");
mintNFT("Hello", "Black", "Hoodie", "Gold Chain");

// List all minted NFTs and get the total supply
listNFTs();
getTotalSupply();



