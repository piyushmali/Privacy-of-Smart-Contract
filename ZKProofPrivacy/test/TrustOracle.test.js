const { expect } = require("chai");

describe("TrustOracle", function () {
  it("Should aggregate data trust scores", async function () {
    const [owner] = await ethers.getSigners();
    const TrustOracle = await ethers.getContractFactory("TrustOracle");
    const trustOracle = await TrustOracle.deploy();

    const zkProof = ethers.utils.formatBytes32String("valid zkProof"); // Example zk proof
    const dataHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("example data"));

    await trustOracle.addOracle(owner.address);
    const trustScore = await trustOracle.aggregateData(dataHash, [zkProof]);
    expect(trustScore).to.equal(1);
  });
});