const getWeb3 = () => {
  return new Promise((resolve, reject) => {
    window.addEventListener("load", async () => {
        try {
          const web3 = new Web3("HTTP://192.168.0.104:7545");
          resolve(web3);
        } catch (error) {
          reject(error);
        }
    });
  });
};

const getContract = async (web3) => {
  const data = await $.getJSON("./contracts/attendence.json");
  const netId = await web3.eth.net.getId();
  const deployedNetwork = data.networks[netId];
  const attendence = new web3.eth.Contract(
    data.abi,
    deployedNetwork && deployedNetwork.address
  );
  return attendence;
};
