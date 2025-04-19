import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://assignment-todolist-api.vercel.app/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;

// 공통 axios 인스턴스 설정
