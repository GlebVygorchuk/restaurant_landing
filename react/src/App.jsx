import SectionHome from "./components/sectionHome/SectionHome"
import SectionAboutUs from "./components/sectionAboutUs/SectionAboutUs"
import SectionMenu from "./components/sectionMenu/SectionMenu"
import SectionInterior from "./components/sectionInterior/SectionInterior"
import SectionContacts from "./components/sectionContacts/SectionContacts"
import MenuBreakfast from "./components/menuBreakfast/MenuBreakfast"
import MenuDinner from "./components/menuDinner/MenuDinner"
import MenuBar from "./components/menuBar/MenuBar"
import MenuChildren from "./components/menuChildren/MenuChildren"
import MenuGrill from "./components/menuGrill/MenuGrill"
import { AppContext } from "./AppContext"
import { useContext } from "react"
import { useState, useEffect } from "react"

function App() {
  const [visibleSections, setVisibleSections] = useState([])
  const {menuChapter, toHome, setMenuChapter, setToHome} = useContext(AppContext)

  useEffect(() => {
    setToHome(false)
    toHome ? setMenuChapter('') : null
  }, [toHome])

  useEffect(() => {
    let timeout

    const handleScroll = () => {
      clearTimeout(timeout)

      timeout = setTimeout(() => {
        const sections = document.querySelectorAll('.section')
        const visible = [...visibleSections]
      
        sections.forEach(section => {
          const rect = section.getBoundingClientRect()
          if (rect.top >= -200 && rect.top < window.innerHeight - 200) {
            if (!visible.includes(section.className)) {
              visible.push(section.className)
            }
          }
        })

        setVisibleSections(visible)
      }, 100)
    }

    window.addEventListener('DOMContentLoaded', handleScroll)
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [visibleSections])

  return (
    <>
    {menuChapter === '' ?
    <>
    <SectionHome id={'home'} className={'section homepage'}/>
    <SectionAboutUs id={'aboutUs'} className={`section about-us${visibleSections.includes('section about-us') ? ' visible' : ""}`}/>
    <SectionMenu id={'menu'} className={`section menu${visibleSections.includes('section menu') ? ' visible' : ""}`}/>
    <SectionInterior id={'interior'} className={`section interior${visibleSections.includes('section interior') ? ' visible' : ""}`}/>
    <SectionContacts id={'contacts'} className={`section contacts${visibleSections.includes('section contacts') ? ' visible' : ""}`}/>

    <a href="#home" className={window.scrollY > 700 ? "to-home visible" : "to-home"}>
      <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5V19M12 5L6 11M12 5L18 11" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
    </> 
    : null}

    {menuChapter === 'menu-breakfast' ? <MenuBreakfast /> : null}

    {menuChapter === 'menu-dinner' ? <MenuDinner/> : null}

    {menuChapter === 'menu-bar' ? <MenuBar /> : null}

    {menuChapter === 'menu-children' ? <MenuChildren /> : null}

    {menuChapter === 'menu-grill' ? <MenuGrill/> : null}
  
    </>
  )
}

export default App
