import { NextFunction, Request, Response } from "express";

export const logger = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Request");

  console.log("Method - ", req.method);
  console.log("Endpoint - ", req.originalUrl);

  next();
};
