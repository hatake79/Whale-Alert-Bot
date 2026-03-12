const { detectWhale } = require("../src/whaleDetector");
const { sendAlert } = require("../alerts/consoleAlert");

const wallets = [
  "0x000000000000000000000000000000000000dead"
];

async function run() {
  for (const wallet of wallets) {
    const result = await detectWhale(wallet);
    sendAlert(result);
  }
}

run();
