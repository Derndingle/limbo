// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import "../openzeppelin/IERC20.sol";

abstract contract FlashGovernanceArbiterLike {
  function assertGovernanceApproved(
    address sender,
    address target,
    bool emergency
  ) public virtual;

  function enforceToleranceInt(int256 v1, int256 v2) public view virtual;

  function enforceTolerance(uint256 v1, uint256 v2) public view virtual;

  function burnFlashGovernanceAsset(
    address targetContract,
    address user,
    address asset,
    uint256 amount
  ) public virtual;

  function setEnforcement(bool enforce) public virtual;

  function setGoverned(address[] calldata governables, bool[] calldata isGoverned) external virtual;

  function configureFlashGovernance(
    address asset,
    uint256 amount,
    uint256 unlockTime,
    bool assetBurnable
  ) public virtual;

  function flashGovernanceConfig()
    public
    view
    virtual
    returns (
      uint256 amount,
      uint256 unlockTime,
      IERC20 asset,
      bool assetBurnable
    );
}
