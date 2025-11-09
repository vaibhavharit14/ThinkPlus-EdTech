import React, { createContext, useContext, useState, useMemo } from "react";

// Create context
const AppContext = createContext({
  user: null,
  setUser: () => {},
  theme: "light",
  toggleTheme: () => {},
});

// Provider component
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));

  // Memoize context value to prevent unnecessary re-renders
  const value = useMemo(() => ({ user, setUser, theme, toggleTheme }), [user, theme]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook
export const useAppContext = () => useContext(AppContext);