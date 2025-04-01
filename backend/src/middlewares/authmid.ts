import jwt from "jsonwebtoken";

interface AuthRequest extends Request {
  user?: any; // Attach user info to request
}

export const authenticateUser = (req: any, res: any, next: any) => {
  const authHeader = req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Extract the token after "Bearer "
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decoded; // Attach user info to request
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};
