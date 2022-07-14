// SPDX-License-Identifier: MIT
pragma solidity ^0.8.5;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ERC721NST is ERC721 {
    constructor() ERC721("Non-Spongeable-Token", "NST") {
        _mint(msg.sender, 1);
        _mint(msg.sender, 2);
        _mint(msg.sender, 3);
        _mint(msg.sender, 4);
        _mint(msg.sender, 5);
    }
}
