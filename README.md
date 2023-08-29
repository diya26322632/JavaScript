# NFT Minting Project
This project demonstrates a simple implementation of minting and tracking Non-Fungible Tokens (NFTs) using JavaScript.

## Table of Contents
Introduction

Getting Started

Usage

Functions

Example

Contributing

License

## Introduction
This project showcases a basic implementation of minting NFTs and managing their metadata. The code includes functions to create NFT objects, list their metadata, and count the total number of minted NFTs.

## Getting Started
To get started with this project, follow these steps:

Clone the repository: git clone https://github.com/your-username/nft-minting-project.git
Navigate to the project directory: cd nft-minting-project
## Usage
Open the index.html file in your browser.
Open the browser's developer console to view logs.
The mintNFT function is used to mint new NFTs with metadata.
The listNFTs function displays the metadata of all minted NFTs.
The getTotalSupply function returns the total number of minted NFTs.
## Functions
### mintNFT(_name, _shirtcolour, _shirttype, _bling)
This function mints a new NFT with the provided metadata and stores it in the collection of NFTs.

### listNFTs()
This function lists the metadata of all minted NFTs in the collection.

### getTotalSupply()
This function returns the total number of minted NFTs.

## Example
javascript

// Mint some NFTs
mintNFT("Diya", "Blue", "Hoodie", "Gold Chain");
mintNFT("Sakshi", "White", "Shirt", "Gold Chain");
mintNFT("Priya", "Grey", "Top", "Gold Chain");
mintNFT("Hello", "Black", "Hoodie", "Gold Chain");

// List all minted NFTs and get the total supply
listNFTs();
getTotalSupply();
## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to create an issue or submit a pull request.

## License
This project is licensed under the MIT License.
