import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "admin123";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("nova-user");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("nova-user", JSON.stringify(user));
    } else {
      localStorage.removeItem("nova-user");
    }
  }, [user]);

  const login = (email, password) => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const adminUser = {
        email: ADMIN_EMAIL,
        name: "Admin",
        isAdmin: true,
      };
      setUser(adminUser);
      return { success: true, user: adminUser };
    }

    const users = JSON.parse(localStorage.getItem("nova-users") || "[]");
    const found = users.find(
      (u) => u.email === email && u.password === password
    );
    if (found) {
      const userData = {
        email: found.email,
        name: found.name,
        isAdmin: false,
      };
      setUser(userData);
      return { success: true, user: userData };
    }
    return { success: false, error: "Invalid email or password" };
  };

  const signup = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem("nova-users") || "[]");
    if (users.find((u) => u.email === email)) {
      return { success: false, error: "Email already registered" };
    }
    users.push({ name, email, password });
    localStorage.setItem("nova-users", JSON.stringify(users));
    const userData = { email, name, isAdmin: false };
    setUser(userData);
    return { success: true, user: userData };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
