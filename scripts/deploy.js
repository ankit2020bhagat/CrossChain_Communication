const hre = require("hardhat");

async function main() {
  const contract = await hre.ethers.deployContract("SourceGreeter", []);
  await contract.waitForDeployment();
  console.log("Contract Deplyed at: ", contract.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
