import { NextFunction, Request, Response } from "express"
import AuthChecker from "./utils/auth-checker"

export default function authMidlleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authheader = req.headers["authorization"]
  
    const bearerToken = authheader?.replace("Bearer ", "")
  
    const verifiedToken = 
  } catch (error) {
    console.error("Something Went Wrong in AuthMiddleware:",error)
  }
}
