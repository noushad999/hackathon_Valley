import axios from "axios"

// Create an axios instance with default config
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
})

// Add a request interceptor to add the auth token to requests
api.interceptors.request.use(
  (config) => {
    // Get the token from localStorage
    const token = localStorage.getItem("token")

    // If token exists, add it to the request headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Add a response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config

    // If the error is 401 and we haven't already tried to refresh the token
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        // Try to refresh the token
        const refreshToken = localStorage.getItem("refreshToken")
        if (!refreshToken) {
          throw new Error("No refresh token available")
        }

        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/token/refresh/`, {
          refresh: refreshToken,
        })

        // If successful, update the tokens
        const { access } = response.data
        localStorage.setItem("token", access)

        // Update the original request with the new token
        originalRequest.headers.Authorization = `Bearer ${access}`

        // Retry the original request
        return api(originalRequest)
      } catch (refreshError) {
        // If refresh fails, clear tokens and redirect to login
        localStorage.removeItem("token")
        localStorage.removeItem("refreshToken")
        window.location.href = "/login"
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  },
)

export default api
