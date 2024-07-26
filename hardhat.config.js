require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: `https://rpc.sepolia.org`,
      accounts: [`0x${affe3e2d3f7819b5755bac5e66d95c85541fd04625601fb6d004146892a1ba80}`],
    },
  },
};
