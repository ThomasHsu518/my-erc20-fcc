import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import 'hardhat-deploy'


const config: HardhatUserConfig = {
    solidity: '0.8.9',
    namedAccounts: {
        deployer: 0,
    },
}

export default config
