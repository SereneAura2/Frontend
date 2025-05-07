const isDevelopment = import.meta.env.MODE === 'development';

export const API_URL = isDevelopment
  ? import.meta.env.VITE_API_URL_DEV
  : import.meta.env.VITE_API_URL_PROD;

export const API_ENDPOINTS = {
  // Auth endpoints
  SIGNUP: `${API_URL}/api/auth/signup`,
  LOGIN: `${API_URL}/api/auth/login`,
  
  // User endpoints
  USERS: `${API_URL}/api/users`,
  USER_PROFILE: `${API_URL}/api/users/profile`,
  
  // Move endpoints
  MOVES: `${API_URL}/api/moves`,
  MOVE_DETAILS: (id: string) => `${API_URL}/api/moves/${id}`,
  
  // Health check
  HEALTH: `${API_URL}/api/health`,
};

// API request configuration
export const API_CONFIG = {
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include' as const,
}; 