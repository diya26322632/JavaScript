/*
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_shirtcolour,_shirttype,_bling) {
     const NFT = {
         "name":_name,
         "shirtcolour":_shirtcolour,
         "shirttype":_shirttype,
         "bling":_bling
     }
     NFTs.push(NFT);
     console.log("Minted:" +_name);
}
function listNFTs () {
  for (let i = 0 ; i < NFTs.length ; i++ ){
    console.log("\nID : \t\t" + (i+1));
    console.log("Name: \t\t" + NFTs[i].name);
    console.log("shirtcolour: \t" + NFTs[i].shirtcolour);
    console.log("shirttype: \t" + NFTs[i].shirttype);
    console.log("bling: \t\t" + NFTs[i].bling);
  }
}
function getTotalSupply () {
  console.log ("\n" + NFTs.length);
}
mintNFT("Diya" , "Blue" , "Hoodie" , "Gold Chain");
mintNFT("Sakshi" , "White" , "shirt" , "Gold Chain");
mintNFT("Priya" , "Grey" , "Top" , "Gold Chain");
mintNFT("Hello" , "Black" , "Hoodie" , "Gold Chain");
listNFTs();
getTotalSupply();
