const attendence = artifacts.require("attendence");
module.exports = function (deployer) {
      deployer.deploy(attendence);
};