import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ethers } from "ethers";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  try {
    const sdk = ThirdwebSDK.fromPrivateKey(
      process.env.PRIVATE_KEY,
      "polygon",
      {
        secretKey: process.env.THIRDWEB_SECRET_KEY,
      }
    );

    const contract = await sdk.getContract(
      "0xa1dBe1f5890ADa402d71aFa39900Bf38CD25bA34"
    );

    const transaction = await contract.call("distribute", []);

    return res.status(200).json({ success: true, transaction });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
