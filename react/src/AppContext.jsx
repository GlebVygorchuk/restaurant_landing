import { createContext, useState } from "react";

export const AppContext = createContext()

export default function AppProvider({children}) {
    const [menuChapter, setMenuChapter] = useState('')

    return (
        <AppContext.Provider value={{menuChapter, setMenuChapter}}>
            {children}
        </AppContext.Provider>
    )
}

