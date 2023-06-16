I let my private key in the .env because it's a dev wallet

# Setup : 

git clone
npm i
node app.js

# request : 

http://localhost:3000/send

{
	"amount":"10"
}

# smart contract : 

if you want to instanciate the smart contract on remix to verify : 

// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract tst{
    event Pay(uint indexed amount);

    function pay()external payable{
        require(msg.value > 1, 'no ether sent');
        emit Pay(msg.value);
    }

    function getBalance()external view returns(uint){
        return address(this).balance;
    }

    function withdraw()external{
        payable(msg.sender).transfer(address(this).balance);
    }
}

it's on mumbai and the address in the .env