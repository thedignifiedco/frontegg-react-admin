import { AuthProvider } from "react-admin";
import { ContextHolder } from "@frontegg/react";

// Define the UserIdentity type
interface UserIdentity {
    id: string;
    fullName: string;
    avatar?: string;
  }

const authProvider: AuthProvider = {
  login: async () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/account/login`; // or call the login method from your App component if available
    return Promise.resolve();
  },

  logout: async () => {
    // Clears tokens to log out the user
    ContextHolder.setAccessToken(null);
    localStorage.removeItem("token");
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/account/logout?post_logout_redirect_uri=${window.location}`; // Redirect to a post-logout page or homepage
  },

  checkAuth: async () => {
    const isAuthenticated = ContextHolder.getAccessToken() !== null;
    return isAuthenticated ? Promise.resolve() : Promise.reject();
  },

  checkError: (error) => {
    if (error.status === 401) {
      return Promise.reject();
    }
    return Promise.resolve();
  },

  getIdentity: async (): Promise<UserIdentity> => {
    const user = ContextHolder.getUser();
    if (user) {
      return Promise.resolve({
        id: user.id,
        fullName: user.name,
        avatar: user.profilePictureUrl || undefined, // Ensure avatar is string or undefined, not null
      });
    }
    return Promise.reject();
  },

  getPermissions: async () => {
    const user = ContextHolder.getUser();
    if (user && user.permissions) {
      return Promise.resolve(user.permissions);
    }
    return Promise.reject();
  },
};

export default authProvider;
