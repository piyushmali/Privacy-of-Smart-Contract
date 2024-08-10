from web3 import Web3
import pytest


@pytest.fixture
def web3():
    return Web3(Web3.HTTPProvider("http://127.0.0.1:8545"))


def test_set_and_claim_reward(web3):
    contract = web3.eth.contract(address="0xYourContractAddress", abi="your_abi")
    owner = web3.eth.accounts[0]
    user = web3.eth.accounts[1]

    tx = contract.functions.setReward(user, Web3.toWei(1, "ether")).transact(
        {"from": owner}
    )
    web3.eth.wait_for_transaction_receipt(tx)

    tx = contract.functions.claimReward().transact({"from": user})
    web3.eth.wait_for_transaction_receipt(tx)

    balance = web3.eth.get_balance(user)
    assert balance == Web3.toWei(1, "ether")
