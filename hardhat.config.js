require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

const projectid = process.env.INFURA_PROJECT_ID
const privatekey = process.env.DIPLOYER_SIGNER_PRIVATE_KEY

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${projectid}` ,
      accounts: [privatekey],
    },
  },
};
