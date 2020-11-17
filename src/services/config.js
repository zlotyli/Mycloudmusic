const devBaseURL = "http://127.0.0.1:4000";
// 老师的为123.207.32.32:9001端口
const proBaseURL = "http://127.0.0.1:4000";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 5000;
