import SectionTitle from "../../assets/sectionTitle/SectionTitle"

export default function SectionInterior({className, id}) {
    return (
        <section id={id} className={className}>
            <SectionTitle name={'Интерьер'} /> 

            <div className="pictures">
                <div className="pictures__section">
                    <img src="./src/assets/interiorPics/fusion2.png" alt="" />
                    <img src="./src/assets/interiorPics/sirovarnya 1.png" alt="" />
                    <img src="./src/assets/interiorPics/kinovecher.png" alt="" />
                    <img src="./src/assets/interiorPics/dinner 1.png" alt="" />
                </div>
                <div className="pictures__section">
                    <img src="./src/assets/interiorPics/pasta 1.png" alt="" />
                    <img src="./src/assets/interiorPics/restik 1.png" alt="" />
                    <img src="./src/assets/interiorPics/dinnerfamily 1.png" alt="" />
                </div>
                <div className="pictures__section">
                    <img src="./src/assets/interiorPics/egs 1.png" alt="" />
                    <img src="./src/assets/interiorPics/window 1.png" alt="" />
                    <img src="./src/assets/interiorPics/windowrest 1.png" alt="" />
                    <img src="./src/assets/interiorPics/kino 1.png" alt="" />
                </div>
            </div>
        </section>
    )
}