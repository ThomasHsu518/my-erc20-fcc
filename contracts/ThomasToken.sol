// SPDX-License-Identifier: MIT
// 1. Pragma
pragma solidity ^0.8.0;

// 2. Imports
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

// 3. Error Code
// error FundMe__NotOwner();

// 4. Interfaces

// 5. Libraries

// 6. Contracts

/**@title Solidity Contract
 * @author ThomasHsu
 * @notice This contract is for creating a xxx contract
 * @dev This implements price feeds as our library
 */
contract ThomasToken is ERC20 {
    // Type Declarations
    // using PriceConverter for uint256;
    // State variables
    // Events
    // Modifiers
    // Functions Order:
    //-// constructor
    constructor(uint256 initialSupply) ERC20('Thomas', 'TT') {
        _mint(msg.sender, initialSupply);
    }
    //-// receive
    //-// fallback
    /** @notice Gets the amount that an address has funded
     *  @param fundingAddress the address of the funder
     *  @return the amount funded
     */
    //-// external
    //-// public
    //-// internal
    //-// private
    //-// view / pure
}
