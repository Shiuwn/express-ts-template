import { Request, Response } from 'express'

export const hello = (req: Request, res: Response) => {
  res.json({
    name: 'hello'
  })
}