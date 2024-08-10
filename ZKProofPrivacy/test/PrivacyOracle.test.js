const { expect } = require("chai");

describe("PrivacyOracle", function () {
  it("Should verify data with valid zkProof", async function () {
    const [owner] = await ethers.getSigners();
    const PrivacyOracle = await ethers.getContractFactory("PrivacyOracle");
    const privacyOracle = await PrivacyOracle.deploy();

    const zkProof = ethers.utils.formatBytes32String("valid zkProof"); // Example zk proof
    const dataHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("example data"));

    expect(await privacyOracle.verifyData(dataHash, zkProof)).to.be.true;
    expect(await privacyOracle.isDataVerified(dataHash)).to.be.true;
  });
});

