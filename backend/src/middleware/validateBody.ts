import { Request, Response, NextFunction } from 'express';
import { ZodType } from 'zod';

export function validateBody(schema: ZodType) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({ error: result.error.issues[0]?.message ?? 'Invalid request body' });
      return;
    }

    req.body = result.data;
    next();
  };
}
