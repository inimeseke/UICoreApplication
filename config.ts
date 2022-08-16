export const PORT = 3000;

const isProduction = (process.env.NODE_ENV == "production");

const ENV_LIVE_PREFIX = "";
const ENV_DEV_PREFIX = "dev_";

export const ENV_PREFIX = ENV_LIVE_PREFIX

export const USE_PASSWORD_FOR_ACCESS = !isProduction;















