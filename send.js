const {Web3} = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

const abi = require('./tst.json'); 
const pay = async(amount) => {
  const provider = new HDWalletProvider(process.env.PRIVATE_KEY, process.env.QUICKNODE);
  const web3 = new Web3(provider);
const accounts = await web3.eth.getAccounts();
  const contractAddress = process.env.CONTRACT_ADDRESS;


  const contract = new web3.eth.Contract(abi, contractAddress);

  const trx = await contract.methods.pay().send({from:accounts[0],gas:450000,value:amount});
  console.log(trx);
}

module.exports = pay;
