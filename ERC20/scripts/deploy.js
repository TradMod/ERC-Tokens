async function main() {
  const [deployer] = await ethers.getSigners();

  const ERC20ABDEE = await ethers.getContractFactory("ERC20ABDEE");
  const ABDEE = await ERC20ABDEE.deploy();
  console.log(`Token Address: ${ABDEE.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
