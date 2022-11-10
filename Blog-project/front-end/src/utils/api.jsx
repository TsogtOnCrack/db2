import axios from "axios";
// const MONGODB_URL = "https://ss-39zj38ruk-tsogtoncrack.vercel.app/"
const MONGODB_URL = "https://ss-bjkdgoxwv-tsogtoncrack.vercel.app"


export const api = axios.create({
    baseURL: MONGODB_URL,
  });