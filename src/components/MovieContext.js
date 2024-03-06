import { createContext, useContext, useState } from "react";

const MovieContext = createContext();

export const useMovie = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDownloaded, setDownloaded] = useState(false);
  
  

  const isNotLoading = () => {
    setIsLoading(false);
   
  
  };

  const downloaded = () => {
    setDownloaded(true);
  }

  return (
    <MovieContext.Provider value={{ isLoading, isDownloaded, isNotLoading, downloaded}}>
      {children}
    </MovieContext.Provider>
  );
};
