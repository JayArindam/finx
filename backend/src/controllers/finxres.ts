import { finxSamp } from "../utils/finxsamp";

export const finxres = async (req: any, res: any) => {
  try {
    const { message } = req.body; // Extract `message` from request body

    if (!message) {
      return res.status(400).json({ msg: "Message is required" });
    }

    const result = await finxSamp(message); // Call finxSamp with message

    res.json({ msg: "FinxSamp executed", result });
  } catch (error) {
    console.error("Error in finxres:", error);
    res.status(500).json({ msg: "Server error" });
  }
};