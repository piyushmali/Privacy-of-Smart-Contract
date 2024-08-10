// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SecureContract {
    address public owner;
    mapping(address => uint256) public rewards;

    constructor() {
        owner = msg.sender;
    }

    function setReward(address user, uint256 amount) public {
        require(msg.sender == owner, "Only owner can set reward");
        rewards[user] = amount;
    }

    function claimReward() public {
        uint256 reward = rewards[msg.sender];
        require(reward > 0, "No reward available");
        rewards[msg.sender] = 0;
        payable(msg.sender).transfer(reward);
    }

    function safeTransaction(address user, uint256 amount) public {
        require(msg.sender == owner, "Only owner can initiate");
        uint256 currentBalance = address(this).balance;
        require(currentBalance >= amount, "Insufficient balance");

        emit TransactionInitiated(user, amount);

        (bool success, ) = user.call{value: amount}("");
        require(success, "Transfer failed");
    }

    event TransactionInitiated(address indexed user, uint256 amount);
}
