import { Request, Response } from 'express';

export default [
  {
    path: '/',
    method: 'get',
    handler: [
      (req: Request, res: Response) => {
        const user = { name: 'World' };
        console.log('TypeScript + Node = ❤')
        res.render('index',{ user })
      },
    ],
  }
];
