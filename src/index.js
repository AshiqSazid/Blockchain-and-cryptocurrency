const displayattendence = async (attendence, contract) => {
  attendence = await contract.methods.sayHello().call();
  $("h2").html(attendence);
};

const updateattendence = (attendence, contract, accounts) => {
  let input;
  $("#input").on("change", (e) => {
    input = e.target.value;
  });
  $("#form").on("submit", async (e) => {
    e.preventDefault();
    await contract.methods
      .updateattendence(input)
      .send({ from: accounts[0], gas: 40000 });
    displayattendence(attendence, contract);
  });
};

async function attendenceApp() {
  const web3 = await getWeb3();
  const accounts = await web3.eth.getAccounts();
  const contract = await getContract(web3);
  let attendence;

  displayattendence(attendence, contract);
  updateattendence(attendence, contract, accounts);
}

attendenceApp();
