// hooks/use-auth.ts
"use client"

import { useState, useEffect, createContext, useContext } from "react"
import { useRouter } from "next/navigation"
import { authService } from "@/utils/auth"

export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  login: async () => {},
  logout: () => {},
});

// ✅ Toggle this to enable or disable dev-mode bypass
const DEV_MODE = true;

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (DEV_MODE) {
      // Mock user object
      const mockUser: User = {
        id: "dev-001",
        name: "Dev Admin",
        email: "admin@dev.local",
        role: "admin",
        avatar: "/avatars/user1.png",
      };
      setUser(mockUser);
      setLoading(false);
      return;
    }

    // Check real auth state on mount
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const user = authService.login(email, password);
      if (!user) throw new Error("Invalid credentials");

      setUser(user);

      // Redirect based on role
      if (user.role === "admin") {
        router.push("/dashboard");
      } else if (user.role === "driver") {
        router.push("/driver");
      } else {
        router.push("/rides");
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);