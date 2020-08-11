import { init as initCache } from './cache';
import dotenv from "dotenv"
dotenv.config()

const initDependencies = async () => {
  //Todo: Disable Redis cache for now
  //await initCache();
};

const config = {
  app: {
    port : parseInt(process.env.APP_PORT ?? "3000"),
  },
  facebook: {
    api_version : process.env.API_VERSION,
    server_url : process.env.SERVER_URL,
    verify_token : process.env.FB_WEBHOOK_VERIFY_TOKEN,
    app_secret : process.env.APP_SECRET,
    page_access_token : process.env.PAGE_ACCESS_TOKEN
  }
};

export { initDependencies, config };
