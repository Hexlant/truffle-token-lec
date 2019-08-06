const mytoken = artifacts.require("mytoken");

module.exports = function(deployer) {
  deployer.deploy(mytoken);
};
