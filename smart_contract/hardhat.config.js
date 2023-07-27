//https://eth-goerli.g.alchemy.com/v2/GmicoWwRAsbSdqFHCPy3Rx2aX2NhPT3G

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity:'0.8.0',
  networks:{
    goerli:{
      url:'https:eth-goerli.g.alchemy.com/v2/GmicoWwRAsbSdqFHCPy3Rx2aX2NhPT3G',
      accounts:['6346cb93a38d8c300bfa5b32b443caab5d1a682b6304937530fa6a31293839a1']
    },
  },
};