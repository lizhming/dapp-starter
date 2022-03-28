module.exports = {
  env: {
    RPC_URL_1: 'https://mainnet.infura.io/v3/' + process.env.INFURA_ID, // Ethereum Mainnet
    RPC_URL_4: 'https://rinkeby.infura.io/v3/' + process.env.INFURA_ID, // Ropsten Testnet
    RPC_URL_56: 'https://bscrpc.com', // BSC Mainnet
    RPC_URL_100: 'https://rpc.gnosischain.com', // Gnosis Chain (formerly xDai)
    RPC_URL_137: 'https://polygon-rpc.com', // Polygon Mainnet
    RPC_URL_42161: 'https://arbitrum.public-rpc.com', // Arbitrum One
  }
}
