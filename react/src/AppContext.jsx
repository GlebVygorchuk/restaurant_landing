import { createContext, useState } from "react";

export const AppContext = createContext()

export default function AppProvider({children}) {
    const [menuChapter, setMenuChapter] = useState('')
    const [toHome, setToHome] = useState(false)

    return (
        <AppContext.Provider value={{menuChapter, toHome, setMenuChapter, setToHome}}>
            {children}
        </AppContext.Provider>
    )
}

