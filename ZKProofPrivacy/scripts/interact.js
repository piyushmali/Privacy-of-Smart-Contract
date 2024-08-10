async function main() {
    const privacyOracleAddress = "0xPrivacyOracleAddress";
    const trustOracleAddress = "0xTrustOracleAddress";
  
    const PrivacyOracle = await ethers.getContractAt("PrivacyOracle", privacyOracleAddress);
    const TrustOracle = await ethers.getContractAt("TrustOracle", trustOracleAddress);
  
    const zkProof = ethers.utils.formatBytes32String("valid zkProof"); // Example zk proof
    const dataHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("example data"));
  
    // Verify data using PrivacyOracle
    const isVerified = await PrivacyOracle.verifyData(dataHash, zkProof);
    console.log("Data verified:", isVerified);
  
    // Add oracle and aggregate data using TrustOracle
    const [signer] = await ethers.getSigners();
    await TrustOracle.addOracle(signer.address);
    const trustScore = await TrustOracle.aggregateData(dataHash, [zkProof]);
    console.log("Trust score:", trustScore);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });