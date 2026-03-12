function parseTransaction(tx) {
  return {
    hash: tx.hash,
    from: tx.from,
    to: tx.to,
    value: tx.value
  };
}

module.exports = { parseTransaction };
