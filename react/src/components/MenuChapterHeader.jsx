import { useState, useContext } from "react"
import { AppContext } from "../AppContext"

export default function MenuChapterHeader() {
    const {toHome, setToHome} = useContext(AppContext)

    function goHome() {
        setToHome(true)
        window.scrollTo({top: 0, behavior: 'instant'})
    }

    function backToMenuSelection() {
        setToHome(true)

        setTimeout(() => {
            const menu = document.getElementById('menu')
            menu.scrollIntoView()
        }, 100)
    }

    return (
        <header className="chapter-header">
            <p onClick={goHome} className="chapter-header_btn">Return to homepage</p>
            <p onClick={backToMenuSelection} className="chapter-header_btn">Select menu type</p>
        </header>
    )
}