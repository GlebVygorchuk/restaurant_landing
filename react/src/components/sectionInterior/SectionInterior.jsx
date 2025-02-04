import SectionTitle from "../../assets/sectionTitle/SectionTitle"
import interiorFusion from "../../assets/interiorPics/fusion2.png"
import interiorCheeseria from "../../assets/interiorPics/sirovarnya 1.png"
import interiorCinemaEvening from "../../assets/interiorPics/kinovecher.png"
import interiorDinner from "../../assets/interiorPics/dinner 1.png"
import interiorPasta from "../../assets/interiorPics/pasta 1.png"
import interiorRestaurant from "../../assets/interiorPics/restik 1.png"
import interiorFamilyDinner from "../../assets/interiorPics/dinnerfamily 1.png"
import interiorEggs from "../../assets/interiorPics/egs 1.png"
import interiorWindow from "../../assets/interiorPics/window 1.png"
import interiorWindowRest from "../../assets/interiorPics/windowrest 1.png"
import interiorCinema from "../../assets/interiorPics/kino 1.png"

export default function SectionInterior({className, id}) {
    return (
        <section id={id} className={className}>
            <SectionTitle name={'Interior'} /> 

            <div className="pictures">
                <div className="pictures__section">
                    <img src={interiorFusion} alt="" />
                    <img src={interiorCheeseria} alt="" />
                    <img src={interiorCinemaEvening} alt="" />
                    <img src={interiorDinner} alt="" />
                </div>
                <div className="pictures__section">
                    <img src={interiorPasta} alt="" />
                    <img src={interiorRestaurant} alt="" />
                    <img src={interiorFamilyDinner} alt="" />
                </div>
                <div className="pictures__section">
                    <img src={interiorEggs} alt="" />
                    <img src={interiorWindow} alt="" />
                    <img src={interiorWindowRest} alt="" />
                    <img src={interiorCinema} alt="" />
                </div>
            </div>
        </section>
    )
}