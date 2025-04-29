// lib/royaltyConstants.js
//
// PaymentSplitter address + minimal ABI
// -------------------------------------

export const SUBINAC_SPLIT_ADDR =
  "0xa1dBe1f5890ADa402d71aFa39900Bf38CD25bA34"; // Polygon

// Minimal ABI — only the bits we actually call
export const SPLIT_ABI = [
  // Pull-native-funds function
  {
    inputs: [{ name: "account", type: "address" }],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  // Optional helper: how much can this account pull?
  {
    inputs: [{ name: "account", type: "address" }],
    name: "releasable",
    outputs: [{ type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
];
