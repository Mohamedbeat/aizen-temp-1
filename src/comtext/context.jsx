import React, { createContext, useState } from 'react'

export const InfosContext = createContext({})

export function InfosContextProvider({children}) {
    const [Infos, setInfos] =useState(null)
    const [cat4, setCat4] = useState([]);

  return (
    <InfosContext.Provider value={{Infos, setInfos,cat4, setCat4}} > 
            {children}
        </InfosContext.Provider>
  )
}
