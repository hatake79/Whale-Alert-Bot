function sendAlert(data) {
  console.log("🐋 Whale Activity Detected");
  console.log("Wallet:", data.wallet);
  console.log("Balance:", data.balance.toString());
}

module.exports = { sendAlert };
