import React, { createContext, useContext, useState, ReactNode } from "react";

interface LoadingContextType {
  loading: boolean;
  setLoading: (value: boolean) => void;
}

const defaultLoadingContext = {
  loading: false,
  setLoading: (value: boolean) => {},
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    console.warn("useLoading used without LoadingPropvider");
    return defaultLoadingContext;
  }
  return context;
};

export const LoadingProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
