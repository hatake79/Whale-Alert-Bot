const logger = require("../utils/logger");
const { detectWhale } = require("../src/whaleDetector");
const { sendTelegramAlert } = require("../alerts/telegramAlert");

const wallets = [
  "0x000000000000000000000000000000000000dead"
];

async function run() {

  logger.info("Starting Whale Alert Bot");

  for (const wallet of wallets) {

    const result = await detectWhale(wallet);

    logger.info(`Whale detected: ${wallet}`);

    await sendTelegramAlert(result);
  }

}

run();
