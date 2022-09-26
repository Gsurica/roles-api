import { NextFunction, Request, Response } from 'express';
import { AppError } from '@shared/errors/AppError';
import { Secret, verify } from 'jsonwebtoken';
import auth from 'src/config/auth';

type JwtPayloadProps = {
  sub: string;
};

export const isAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const authHeader = request.headers.authorization;
  if (!authHeader) throw new AppError('Failed to verify access token!', 401);
  const token = authHeader.replace('Bearer ', '');
  try {
    const decodedToken = verify(token, auth.jwt.secret as Secret);
    const { sub } = decodedToken as JwtPayloadProps;
    request.user = { id: sub };
  } catch {
    throw new AppError('Invalid authentication token', 401);
  }
  return next();
};
