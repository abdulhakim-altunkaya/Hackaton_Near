const hre = require("hardhat");

async function main() {

  const Foundation = await hre.ethers.getContractFactory("Foundation");
  const foundation = await Foundation.deploy();
  await foundation.deployed();
  console.log(`Foundation Contract is deployed to ${foundation.address}`);

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
