import MenuChapterHeader from "../MenuChapterHeader"
import SectionTitle from "../../assets/sectionTitle/SectionTitle"
import MenuItem from "../menuItem/MenuItem"
import pizza from "../../assets/childrenMenuPics/pizza 1.png"
import macarons from "../../assets/childrenMenuPics/makaroni 1.png"
import nuggets from "../../assets/childrenMenuPics/nagetsi 1.png"
import sticks from "../../assets/childrenMenuPics/palkiizribi 1.png"

export default function MenuChildren() {
    return (
        <>
        <MenuChapterHeader />
        <section className="menu-chapter children">
            <div className="menu-chapter__title">
                <p className="time">For little guests</p>
                <p className="title-name">Children's menu</p>
                <p className="warning">If you have any allergies or intolerances to any foods, please let us know</p>
            </div>

            <SectionTitle name={'Hot'} />

            <ul className="menu-list">
                <MenuItem 
                image={pizza} 
                title={'Mini-pizza with chicken and vegetables'}
                desc={'Tender dough covered with tomato sauce and melted cheese, with pieces of chicken fillet, sweet peppers and olives. Served with a light salad of fresh vegetables.'}
                price={'230₽'} />

                <MenuItem 
                image={macarons} 
                title={'Macaroni cheese and broccoli'}
                desc={'Delicious pasta baked with melted cheese and fresh broccoli. This dish is not only tasty, but also healthy! Served with light sour cream.'}
                price={'230₽'} />

                <MenuItem 
                image={nuggets} 
                title={'Chicken nuggets with mashed potatoes'}
                desc={'Crispy chicken nuggets, fried until golden brown, served with creamy mashed potatoes and homemade sauce. Ideal for little gourmets!'}
                price={'230₽'} />

                <MenuItem 
                image={sticks} 
                title={'Fish fingers with rice and vegetables'}
                desc={'Homemade fish sticks made from white fish fillets, fried in breading, served with boiled rice and stewed seasonal vegetables. An easy and nutritious dish for children.'}
                price={'230₽'} />
            </ul>
        </section>
        </>
    )
}