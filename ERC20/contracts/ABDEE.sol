// SPDX-License-Identifier: MIT
pragma solidity ^0.8.5;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20ABDEE is ERC20 {
    constructor() ERC20("ABDul Rehman", "ABDEE") {
        _mint(msg.sender, 55555 * (10**18));
    }
}
