require("@nomicfoundation/hardhat-toolbox");

const RINKEBY_PRIVATE_KEY = "7e4c6e10ded287fbb8e1cf2405349fe99a0ed4d3e8db497a8e8ddd7dfb55ffa2";
const ALCHEMY_API_KEY = "https://eth-rinkeby.alchemyapi.io/v2/81O6ilUAV9748Tr3_2oR4WNSSnXQKc2J";

module.exports = {
  solidity: "0.8.9",

  networks: {
    rinkeby: {
      url: ALCHEMY_API_KEY,
      accounts: [RINKEBY_PRIVATE_KEY],
      // chainId: 4,
    }
  }
};
