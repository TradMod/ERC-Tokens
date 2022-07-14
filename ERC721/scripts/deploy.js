const { ethers } = require("hardhat");

async function main() {
  const NST = await ethers.getContractFactory("ERC721NST")
  const deployedNST = await NST.deploy();
  console.log(`Contract Address: ${deployedNST.address}`);
  //Contract Address: 0x243E0c6cd634d96D64dC65eb47E24EA53cEcc6F7 Alhumdulilah
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });