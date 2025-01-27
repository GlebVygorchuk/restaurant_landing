import SectionTitle from "../../assets/sectionTitle/SectionTitle"

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
                    <img src="./src/assets/breakfastjpg.jpg" alt="" />
                </li>
                <li className="features__item">
                    <div className="features__item_desc">
                        <p style={{fontWeight: '500'}}>Детская комната с няней</p>
                        <p className="features__item_explain">Чтобы всем было<br /> уютно и спокойно</p>
                    </div>
                    <img src="./src/assets/playground.png" alt="" />
                </li>
                <li className="features__item">
                    <div className="features__item_desc">
                        <p style={{fontWeight: '500'}}>Киновечера</p>
                        <p className="features__item_explain">Даже дома не такая<br /> магическая атмосфера</p>
                    </div>
                    <img src="./src/assets/films.png" alt="" />
                </li>
                <li className="features__item">
                    <div className="features__item_desc">
                        <p style={{fontWeight: '500'}}>Фьюжн меню</p>
                        <p className="features__item_explain">Авторская кухня, где<br /> каждое блюдо уникально</p>
                    </div>
                    <img src="./src/assets/fusion.png" alt="" />
                </li>
            </ul>
        </section>
    )
}

