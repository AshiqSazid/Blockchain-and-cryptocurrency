const eth_lock = artifacts.require("eth_lock");

module.exports = function (deployer) {
  deployer.deploy(eth_lock);
};
