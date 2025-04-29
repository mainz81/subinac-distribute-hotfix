// lib/royaltyConstants.js

export const SUBINAC_SPLIT_ADDR =
  "0xa1dBe1f5890ADa402d71aFa39900Bf38CD25ba34"; // <-- real split contract

export const SPLIT_ABI = [
  // --- just the pieces we need ---
  {
    inputs: [],
    name: "distribute",          // adjust if the method is `release` etc.
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
