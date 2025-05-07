import { API_ENDPOINTS, API_CONFIG } from '../config/api';

export const api = {
  // Auth endpoints
  signup: async (userData: any) => {
    const response = await fetch(API_ENDPOINTS.SIGNUP, {
      ...API_CONFIG,
      method: 'POST',
      body: JSON.stringify(userData),
    });
    return response.json();
  },

  login: async (credentials: any) => {
    const response = await fetch(API_ENDPOINTS.LOGIN, {
      ...API_CONFIG,
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    return response.json();
  },

  // User endpoints
  getUsers: async () => {
    const response = await fetch(API_ENDPOINTS.USERS, {
      ...API_CONFIG,
      method: 'GET',
    });
    return response.json();
  },

  getUserProfile: async () => {
    const response = await fetch(API_ENDPOINTS.USER_PROFILE, {
      ...API_CONFIG,
      method: 'GET',
    });
    return response.json();
  },

  // Move endpoints
  getMoves: async () => {
    const response = await fetch(API_ENDPOINTS.MOVES, {
      ...API_CONFIG,
      method: 'GET',
    });
    return response.json();
  },

  getMoveDetails: async (id: string) => {
    const response = await fetch(API_ENDPOINTS.MOVE_DETAILS(id), {
      ...API_CONFIG,
      method: 'GET',
    });
    return response.json();
  },

  // Health check
  checkHealth: async () => {
    const response = await fetch(API_ENDPOINTS.HEALTH, {
      ...API_CONFIG,
      method: 'GET',
    });
    return response.json();
  },
}; 