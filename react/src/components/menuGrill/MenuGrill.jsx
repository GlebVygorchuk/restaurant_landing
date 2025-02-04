import MenuChapterHeader from "../MenuChapterHeader"
import SectionTitle from "../../assets/sectionTitle/SectionTitle"
import MenuItem from "../menuItem/MenuItem"
import bedra from "../../assets/grillMenuPics/bedra 1.png"
import ovoshgril from "../../assets/grillMenuPics/ovoshgril 1.png"
import losos from "../../assets/grillMenuPics/losos 2.png"

export default function MenuGrill() {
    return (
        <>
        <MenuChapterHeader />
        <section className="menu-chapter grill">
            <div className="menu-chapter__title">
                <p className="time">Great combinations of meat, vegetable and fish dishes</p>
                <p className="title-name">Grill menu</p>
                <p className="warning">If you have any allergies or intolerances to any foods, please let us know</p>
            </div>

            <SectionTitle name={'Hot'} />

            <ul className="menu-list">
                <MenuItem 
                image={bedra} 
                title={'Chicken thighs in honey marinade'}
                desc={'Tender chicken thighs marinated in honey, soy sauce and garlic, grilled until golden brown. Served with fresh cabbage and carrot salad.'}
                price={'230₽'} />

                <MenuItem 
                image={ovoshgril} 
                title={'Vegetable kebab'}
                desc={'Assorted fresh vegetables (peppers, zucchini, eggplant and mushrooms), marinated in olive oil and herbs, grilled. Served with mint yogurt sauce.'}
                price={'230₽'} />

                <MenuItem 
                image={losos} 
                title={'Grilled salmon with lemon sauce'}
                desc={'Salmon fillet, grilled to a light crust, served with lemon sauce and a side dish of boiled rice and green vegetables.'}
                price={'230₽'} />
            </ul>
        </section>
        </>
    )
}