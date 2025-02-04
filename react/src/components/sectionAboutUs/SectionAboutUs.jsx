import SectionTitle from "../../assets/sectionTitle/SectionTitle"
import breakfastImg from "../../assets/breakfast.png"
import playgroundImg from "../../assets/playground.png"
import filmsImg from "../../assets/films.png"
import fusionImg from "../../assets/fusion.png"

export default function SectionAboutUs({className, id}) {
    return (
        <section id={id} className={className}>
            <SectionTitle name={'What is Tomade?'} />

            <ul className="features">
                <li className="features__item">
                    <div className="features__item_desc">
                        <p style={{fontWeight: '500'}}>Breakfasts</p>
                        <p className="features__item_explain">Daily<br /> to 15.00</p>
                    </div>
                    <img src={breakfastImg} alt="" />
                </li>
                <li className="features__item">
                    <div className="features__item_desc">
                        <p style={{fontWeight: '500'}}>Children's room with nanny</p>
                        <p className="features__item_explain">So that everyone feels<br /> comfortable and calm</p>
                    </div>
                    <img src={playgroundImg} alt="" />
                </li>
                <li className="features__item">
                    <div className="features__item_desc">
                        <p style={{fontWeight: '500'}}>Movie nights</p>
                        <p className="features__item_explain">Even at home the atmosphere<br /> is not so magical</p>
                    </div>
                    <img src={filmsImg} alt="" />
                </li>
                <li className="features__item">
                    <div className="features__item_desc">
                        <p style={{fontWeight: '500'}}>Fusion menu</p>
                        <p className="features__item_explain">Signature cuisine, where<br /> each dish is unique</p>
                    </div>
                    <img src={fusionImg} alt="" />
                </li>
            </ul>
        </section>
    )
}

