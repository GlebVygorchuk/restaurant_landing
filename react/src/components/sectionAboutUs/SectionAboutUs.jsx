import SectionTitle from "../../assets/sectionTitle/SectionTitle"
import breakfastImg from "../../assets/breakfast.png"
import playgroundImg from "../../assets/playground.png"
import filmsImg from "../../assets/films.png"
import fusionImg from "../../assets/fusion.png"

export default function SectionAboutUs({className, id}) {
    return (
        <section id={id} className={className}>
            <SectionTitle name={'Что такое Tomade'} />

            <ul className="features">
                <li className="features__item">
                    <div className="features__item_desc">
                        <p style={{fontWeight: '500'}}>Завтраки</p>
                        <p className="features__item_explain">Ежедневно<br /> до 15.00</p>
                    </div>
                    <img src={breakfastImg} alt="" />
                </li>
                <li className="features__item">
                    <div className="features__item_desc">
                        <p style={{fontWeight: '500'}}>Детская комната с няней</p>
                        <p className="features__item_explain">Чтобы всем было<br /> уютно и спокойно</p>
                    </div>
                    <img src={playgroundImg} alt="" />
                </li>
                <li className="features__item">
                    <div className="features__item_desc">
                        <p style={{fontWeight: '500'}}>Киновечера</p>
                        <p className="features__item_explain">Даже дома не такая<br /> магическая атмосфера</p>
                    </div>
                    <img src={filmsImg} alt="" />
                </li>
                <li className="features__item">
                    <div className="features__item_desc">
                        <p style={{fontWeight: '500'}}>Фьюжн меню</p>
                        <p className="features__item_explain">Авторская кухня, где<br /> каждое блюдо уникально</p>
                    </div>
                    <img src={fusionImg} alt="" />
                </li>
            </ul>
        </section>
    )
}

