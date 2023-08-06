const hre = require("hardhat");

async function main() {
  const mockToken = await hre.ethers.deployContract("MyToken", []);
  await mockToken.waitForDeployment();
  console.log("Mock token deployed at :", mockToken.target);
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});
