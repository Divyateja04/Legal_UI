import { createContext, useState } from "react";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [extractedText, setExtractedText] = useState("");

  return (
    <DataContext.Provider value={{ extractedText, setExtractedText }}>
      {children}
    </DataContext.Provider>
  );
}
