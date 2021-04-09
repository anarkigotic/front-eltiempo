import React,{ createContext, useState } from "react";

export const DataContext = createContext();

  const dataNews = []

export const DataProvider = ({children}) => {

    

    const [datanews, setNews] = useState(dataNews)


    return (
       <DataContext.Provider value={ {
        datanews,
           setNews
       } }>
           {children}
       </DataContext.Provider>
    )
}
