// src/context/HeaderContext.jsx
import { createContext, useContext, useState } from "react";

const HeaderContext = createContext();

// Custom hook for consuming the context
export function useHeader() {
  return useContext(HeaderContext);
}

// Provider component that manages the shared state
export function HeaderProvider({ children }) {
  const [title, setTitle] = useState("Welcome");
  const [description, setDescription] = useState("");

  const value = { title, setTitle, description, setDescription };

  return (
    <HeaderContext.Provider value={value}>
      {children}
    </HeaderContext.Provider>
  );
}
