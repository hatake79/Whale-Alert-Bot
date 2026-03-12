const provider = require("./provider");

async function detectWhale(wallet) {
  const balance = await provider.getBalance(wallet);

  return {
    wallet,
    balance
  };
}

module.exports = { detectWhale };
