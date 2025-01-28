import SectionHome from "./components/sectionHome/SectionHome"
import SectionAboutUs from "./components/sectionAboutUs/SectionAboutUs"
import SectionJointProject from "./components/sectionJointProject/SectionJointProject"
import SectionMenu from "./components/sectionMenu/SectionMenu"
import SectionInterior from "./components/sectionInterior/SectionInterior"
import SectionContacts from "./components/sectionContacts/SectionContacts"
import { useState, useEffect } from "react"

function App() {
  const [visibleSections, setVisibleSections] = useState([])

  useEffect(() => {
    let timeout

    const handleScroll = () => {
      clearTimeout(timeout)

      timeout = setTimeout(() => {
        const sections = document.querySelectorAll('.section')
        const visible = [...visibleSections]
      
        sections.forEach(section => {
          const rect = section.getBoundingClientRect()
          if (rect.top >= -300 && rect.top < window.innerHeight - 200) {
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
    <SectionHome id={'home'} className={'section homepage'}/>
    <SectionAboutUs id={'aboutUs'} className={`section about-us${visibleSections.includes('section about-us') ? ' visible' : ""}`}/>
    <SectionJointProject id={'jointProject'} className={`section joint-project${visibleSections.includes('section joint-project') ? ' visible' : ""}`}/>
    <SectionMenu id={'menu'} className={`section menu${visibleSections.includes('section menu') ? ' visible' : ""}`}/>
    <SectionInterior id={'interior'} className={`section interior${visibleSections.includes('section interior') ? ' visible' : ""}`}/>
    <SectionContacts id={'contacts'} className={`section contacts${visibleSections.includes('section contacts') ? ' visible' : ""}`}/>

    <a href="#home" className={window.scrollY > 800 ? "to-home visible" : "to-home"}>
      <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5V19M12 5L6 11M12 5L18 11" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
    </>
  )
}

export default App
