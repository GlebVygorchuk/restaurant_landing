import MenuChapterHeader from "../MenuChapterHeader"
import SectionTitle from "../../assets/sectionTitle/SectionTitle"
import MenuItem from "../menuItem/MenuItem"
import sencha from "../../assets/barPics/sencha 1.png"
import ulun from "../../assets/barPics/ulun 1.png"
import assam from "../../assets/barPics/assam 1.png"
import melisa from "../../assets/barPics/melisa 1.png"
import mix from "../../assets/barPics/mix 1.png"
import apple from "../../assets/barPics/apple 2.png"
import mango from "../../assets/barPics/mango 1.png"
import green from "../../assets/barPics/green 1.png"
import yagoda from "../../assets/barPics/yagoda 1.png"
import paradise from "../../assets/barPics/paradise 1.png"

export default function MenuBar() {
    return (
        <>
        <MenuChapterHeader />
        <section className="menu-chapter bar">

            <div className="menu-chapter__title">
                <p className="title-name">Bar drink list</p>
                <p className="warning">If you have any allergies or intolerances to any foods, please let us know</p>
            </div>

            <SectionTitle name={'Tea'} />

            <ul className="menu-list">
                <MenuItem 
                image={sencha} 
                title={'Green tea Sencha'}
                desc={'Japanese green tea with a bright, fresh taste and a slightly sweet aftertaste. Made from young leaves, it has a high concentration of antioxidants and is ideal for a morning wake-up or a relaxing evening.'}
                price={'230₽'} />

                <MenuItem 
                image={ulun} 
                title={'Oolong tea "Tiger eye"'}
                desc={'Semi-fermented tea with a rich aroma and soft, floral taste. Its unique processing technology gives it a characteristic sweetness and slight tartness, making it an ideal choice for lovers of complex flavors.'}
                price={'230₽'} />

                <MenuItem 
                image={assam} 
                title={'Black tea "Assam"'}
                desc={'Classic Indian black tea with a rich, strong taste and bright, raspberry aroma. Great served with milk or lemon and is also an excellent choice for morning tea.'}
                price={'230₽'} />

                <MenuItem 
                image={melisa} 
                title={'Herbal tea "Melissa and mint"'}
                desc={'A refreshing herbal tea based on lemon balm and mint that has a calming and relaxing effect. Ideal for evening relaxation, helps relieve stress and improve your mood.'}
                price={'230₽'} />
            </ul>

            <SectionTitle name={'Fresh Juices'} />

            <ul className="menu-list">
                <MenuItem 
                image={mix} 
                title={'Citrus mix'}
                desc={'Refreshing fresh juice made from oranges, grapefruits and lemons. This drink combines bright sourness and sweetness, filling you with energy and vitamins. Ideal for a morning boost or as a refreshing drink throughout the day.'}
                price={'300₽'} />

                <MenuItem 
                image={apple} 
                title={'Apple-carrot fresh juice'}
                desc={'Delicate and sweet fresh juice made from fresh apples and carrots. This nutritious drink is rich in beta-carotene and vitamins, ideal for maintaining healthy skin and overall tone. An excellent choice for lovers of natural and healthy juices.'}
                price={'300₽'} />

                <MenuItem 
                image={mango} 
                title={'Tropical pineapple-mango'}
                desc={'Exotic fresh juice with a rich taste, made from ripe pineapple and mango. This sunny drink will transport you to tropical beaches, refreshing and delighting with its sweet taste. Great for summer days and holidays.'}
                price={'300₽'} />
            </ul>

            <SectionTitle name={'Smoothies'} />

            <ul className="menu-list">
                <MenuItem 
                image={green} 
                title={'Green detox'}
                desc={'A refreshing smoothie made with spinach, kiwi and banana. This drink is rich in fiber and antioxidants, helping to cleanse the body and energize it. Ideal to start the day or as a light snack throughout the day.'}
                price={'300₽'} />

                <MenuItem 
                image={yagoda} 
                title={'Berry Delight'}
                desc={'A rich smoothie made from fresh berries - strawberries, blueberries and raspberries, mixed with yogurt and honey. This sweet and aromatic drink not only pleasantly quenches thirst, but also saturates it with vitamins and minerals. An excellent choice for lovers of berry flavors!'}
                price={'300₽'} />

                <MenuItem 
                image={paradise} 
                title={'Tropical paradise'}
                desc={'Exotic smoothie with pineapple, mango and coconut milk. This creamy drink will transport you to the tropical islands with its sweet taste and aroma. Ideal for hot days and those dreaming of a summer vacation.'}
                price={'300₽'} />
            </ul>
        </section>
        </>
    )
}