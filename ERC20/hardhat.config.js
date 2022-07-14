require("@nomicfoundation/hardhat-toolbox");


module.exports = {
  solidity: "0.8.9",

  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_API_KEY,
      accounts: [process.env.RINKEBY_PRIVATE_KEY],
      // chainId: 4,
    }
  }
};
