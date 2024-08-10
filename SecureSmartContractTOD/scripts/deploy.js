async function main() {
    const SecureContract = await ethers.getContractFactory("SecureContract");
    const secureContract = await SecureContract.deploy();
    await secureContract.deployed();
    console.log("SecureContract deployed to:", secureContract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
