import SectionTitle from "../../assets/sectionTitle/SectionTitle"
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
                       <img src="./src/assets/menuButtons/ZAVTRAH.png" alt="" />
                       <p>Завтраки</p>
                    </div>
                   <div onClick={() => setMenuChapter('menu-dinner')} className="chapters__item">
                       <img src="./src/assets/menuButtons/DINNER 1.png" alt="" />
                       <p>Основное</p>
                   </div>
                   <div onClick={() => setMenuChapter('menu-bar')} className="chapters__item">
                       <img src="./src/assets/menuButtons/BAR 1.png" alt="" />
                       <p>Барное</p>
                   </div>
                </div>
                
                <div className="chapters__footer">
                   <div onClick={() => setMenuChapter('menu-children')} className="chapters__item">
                       <img src="./src/assets/menuButtons/DETIEDA 1.png" alt="" />
                       <p>Детское</p>
                   </div>
                   <div onClick={() => setMenuChapter('menu-grill')} className="chapters__item">
                       <img src="./src/assets/menuButtons/GRILL 1.png" alt="" />
                       <p>Гриль-меню</p>
                   </div>
                </div>
            </div>
        </section>
    )
}