import { deployments, ethers, getNamedAccounts, network } from 'hardhat'
import { assert, expect } from 'chai'
import { ThomasToken } from '../../typechain-types'

describe('ThomasToken Uint Test', async function () {
    // let someGlobalVariable
    let thomasToken: ThomasToken
    let deployer: string
    beforeEach(async function () {
        deployer = (await getNamedAccounts()).deployer

        await deployments.fixture(['mocks', 'thomasToken'])
        thomasToken = await ethers.getContract('ThomasToken')
    })
    describe('constructor', async () => {
        it('initialized', async function () {
            // const expectedValue = 0
            // const raffleState = await raffle.getRaffleState()
            // assert.equal(raffleState, expectedValue)
            const myTokenCount = await thomasToken.balanceOf(deployer)
            expect(myTokenCount.toString()).to.equal(
                ethers.utils.parseEther('50')
            )
        })
    })
})
