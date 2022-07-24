import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'

const deployThomas: DeployFunction = async function (
    hre: HardhatRuntimeEnvironment
) {
    const { deployments, getNamedAccounts, network, ethers } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    log(deployer)
    await deploy('ThomasToken', {
        from: deployer,
        args: [ethers.utils.parseEther('50')],
        log: true,
    })
}
export default deployThomas
deployThomas.tags = ['all', 'thomasToken']
