import { Application, Router, Request, Response, NextFunction } from 'express';
import register from '@react-ssr/express/register';

type Wrapper = (router: Router) => void;

export const applyMiddleware = (
  middlewareWrappers: Wrapper[],
  router: Router,
) => {
  for (const wrapper of middlewareWrappers) {
    wrapper(router);
  }
};

type Handler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void> | void;

type Route = {
  path: string;
  method: string;
  handler: Handler | Handler[];
};

export const applyReactSSR = async (router: Application) => {
  await register(router);
}

export const applyRoutes = (routes: Route[], router: Router) => {
  for (const route of routes) {
    const { method, path, handler } = route;
    (router as any)[method](path, handler);
  }
};
