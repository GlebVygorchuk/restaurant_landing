import SectionTitle from "../../assets/sectionTitle/SectionTitle"
import MenuChapterHeader from "../MenuChapterHeader"
import MenuItem from "../menuItem/MenuItem"
import berries from "../../assets/breakfastPics/yagodi 1.png"
import rice from "../../assets/breakfastPics/ris kasha 1.png"
import grechka from "../../assets/breakfastPics/grechka 1.png"
import apple from "../../assets/breakfastPics/apple 1.png"

export default function MenuBreakfast() {
    return (
        <>
        <MenuChapterHeader />

        <section className="menu-chapter breakfast">
            <div className="menu-chapter__title">
                <p className="time">from 9-00 to 15-00</p>
                <p className="title-name">Breakfasts</p>
                <p className="warning">If you have any allergies or intolerances to any foods, please let us know</p>
            </div>

            <SectionTitle name={'Porridge'}/>

            <ul className="menu-list">
            <MenuItem 
            image={berries} 
            title={'Oatmeal with berries and honey'}
            desc={'Tender oatmeal cooked with milk, with the addition of fresh berries (raspberries, blueberries, strawberries) and a generous spoon of natural honey. Served with nuts and cinnamon for extra flavor.'}
            price={'360₽'} />

            <MenuItem 
            image={rice}
            title={'Rice porridge with coconut milk and mango'}
            desc={'Creamy rice porridge cooked in coconut milk, with pieces of ripe mango and sprinkled with coconut flakes. An ideal choice for lovers of tropical flavors.'}
            price={'400₽'} />

            <MenuItem 
            image={grechka}
            title={'Buckwheat porridge with mushrooms and herbs'}
            desc={'Nutritious buckwheat porridge cooked with fried champignons and fresh herbs (dill, parsley). Serve with a splash of olive oil to enhance the flavor.'}
            price={'340₽'} />

            <MenuItem 
            image={apple}
            title={'Quinoa porridge with apples and cinnamon'}
            desc={'Light and healthy quinoa porridge with the addition of baked apples and a pinch of cinnamon. Serve with walnuts and yogurt for a harmonious combination.'}
            price={'340₽'} />
            </ul>
        </section>
        </>
    )
}

