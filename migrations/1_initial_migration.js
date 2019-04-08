var Migration = artifacts.require("./Migrations.sol")
var Standard = artifacts.require("./StandardRegistry.sol");
var Oraclize = artifacts.require("./OraclizeAPI.sol");

module.exports = function(deployer) {
  deployer.deploy(Migration)
};
