import axios from "axios"

const axiosInstance = axios.create({ baseURL: import.meta.env.VITE_SERVER_URL })

axiosInstance.interceptors.request.use((config) => {
  const store = window.localStorage.getItem("rest24/me")
  if (store) {
    const parsedStore = JSON.parse(store)
    if (parsedStore && parsedStore.state?.token) {
      config.headers.Authorization = `Bearer ${parsedStore.state?.token}`
    }
  }

  return config
})

axiosInstance.interceptors.response.use((response) => response)

export default axiosInstance