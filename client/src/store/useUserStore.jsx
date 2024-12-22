import { create } from "zustand"; // Use named import for `create`
import {jwtDecode} from "jwt-decode";

const useUserStore = create((set) => ({
    username: "",
    userId: "",
    profilePicture: "",
    setUserFromToken: (token) => {
        if (token) {
            const decodedToken = jwtDecode(token);
            set({
                username: decodedToken.username,
                userId: decodedToken.userId,
                profilePicture: decodedToken.image || "",
            });
        }
    },
    clearUser: () => set({ username: "", userId: "", profilePicture: "" }),
}));

// Initialize user data when app loads
const token = localStorage.getItem("token");
if (token) {
    useUserStore.getState().setUserFromToken(token);
}

export default useUserStore;