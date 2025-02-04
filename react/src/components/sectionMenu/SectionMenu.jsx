import SectionTitle from "../../assets/sectionTitle/SectionTitle"
import breakfastBtn from "../../assets/menuButtons/ZAVTRAH.png"
import dinnerBtn from "../../assets/menuButtons/DINNER 1.png"
import barBtn from "../../assets/menuButtons/BAR 1.png"
import chidlrenBtn from "../../assets/menuButtons/DETIEDA 1.png"
import grillBtn from "../../assets/menuButtons/GRILL 1.png"
import { AppContext } from "../../AppContext"
import { useContext } from "react"

export default function SectionMenu({className, id}) {
    const {menuChapter, setMenuChapter} = useContext(AppContext)

    function goToMenu(chapter) {
        setMenuChapter(chapter)
        window.scrollTo({top: 0, behavior: 'instant'})
    }

    return (
        <section id={id} className={className}>
            <SectionTitle name={'Menu'}/>

            <div className="chapters">
                <div className="chapters__header">
                    <div onClick={() => goToMenu('menu-breakfast')} className="chapters__item">
                       <img src={breakfastBtn} alt="" />
                       <p>Breakfasts</p>
                    </div>
                   <div onClick={() => goToMenu('menu-dinner')} className="chapters__item">
                       <img src={dinnerBtn} alt="" />
                       <p>Main</p>
                   </div>
                   <div onClick={() => goToMenu('menu-bar')} className="chapters__item">
                       <img src={barBtn} alt="" />
                       <p>Bar</p>
                   </div>
                </div>
                
                <div className="chapters__footer">
                   <div onClick={() => goToMenu('menu-children')} className="chapters__item">
                       <img src={chidlrenBtn} alt="" />
                       <p>Children's</p>
                   </div>
                   <div onClick={() => goToMenu('menu-grill')} className="chapters__item">
                       <img src={grillBtn} alt="" />
                       <p>Grill menu</p>
                   </div>
                </div>
            </div>
        </section>
    )
}