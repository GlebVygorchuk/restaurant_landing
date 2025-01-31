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

    console.log(menuChapter)

    return (
        <section id={id} className={className}>
            <SectionTitle name={'Меню'}/>

            <div className="chapters">
                <div className="chapters__header">
                    <div onClick={() => setMenuChapter('menu-breakfast')} className="chapters__item">
                       <img src={breakfastBtn} alt="" />
                       <p>Завтраки</p>
                    </div>
                   <div onClick={() => setMenuChapter('menu-dinner')} className="chapters__item">
                       <img src={dinnerBtn} alt="" />
                       <p>Основное</p>
                   </div>
                   <div onClick={() => setMenuChapter('menu-bar')} className="chapters__item">
                       <img src={barBtn} alt="" />
                       <p>Барное</p>
                   </div>
                </div>
                
                <div className="chapters__footer">
                   <div onClick={() => setMenuChapter('menu-children')} className="chapters__item">
                       <img src={chidlrenBtn} alt="" />
                       <p>Детское</p>
                   </div>
                   <div onClick={() => setMenuChapter('menu-grill')} className="chapters__item">
                       <img src={grillBtn} alt="" />
                       <p>Гриль меню</p>
                   </div>
                </div>
            </div>
        </section>
    )
}