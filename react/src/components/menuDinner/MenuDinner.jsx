import MenuChapterHeader from "../MenuChapterHeader"
import SectionTitle from "../../assets/sectionTitle/SectionTitle"
import MenuItem from "../menuItem/MenuItem"
import greek from "../../assets/mainMenuPics/grecheskiy 1.png"
import caesar from "../../assets/mainMenuPics/cezar 1.png"
import avocado from "../../assets/mainMenuPics/avocado 1.png"
import vegetable from "../../assets/mainMenuPics/vegetable 1.png"
import carbonara from "../../assets/mainMenuPics/lazania 1.png"
import penne from "../../assets/mainMenuPics/penne 1.png"
import rizotto from "../../assets/mainMenuPics/rizotto 1.png"
import lasagna from "../../assets/mainMenuPics/lazaniameat 1.png"
import ribay from "../../assets/mainMenuPics/ribay 1.png"
import teriyaki from "../../assets/mainMenuPics/teriayki 1.png"
import duck from "../../assets/mainMenuPics/duck 1.png"
import sheep from "../../assets/mainMenuPics/baran 1.png"
import losos from "../../assets/mainMenuPics/losos 1.png"
import skumbria from "../../assets/mainMenuPics/skumbria 1.png"
import tiramisu from "../../assets/mainMenuPics/tiramisu 1.png"
import fondan from "../../assets/mainMenuPics/fondan 1.png" 

export default function MenuDinner() {
    return (
        <>
        <MenuChapterHeader />
        <section className="menu-chapter dinner">
           <div className="menu-chapter__title">
                <p className="time">from 14-00</p>
                <p className="title-name">Main menu</p>
                <p className="warning">If you have any allergies or intolerances to any foods, please let us know</p>
            </div>

            <SectionTitle name={'Salads'}/>

            <ul className="menu-list">
                <MenuItem 
                image={greek} 
                title={'Greek salad'}
                desc={'A refreshing mix of ripe tomatoes, cucumbers, red onions, sweet peppers and olives, generously seasoned with olive oil and lemon juice. Diced feta finishes the dish, giving the salad a rich Mediterranean flavor.'}
                price={'400₽'} />

                <MenuItem 
                image={caesar} 
                title={'Caesar with chicken'}
                desc={'Tender pieces of chicken, fried until golden brown, served on fresh romaine leaves. The salad is dressed with classic Caesar dressing, sprinkled with grated Parmesan and crispy croutons.'}
                price={'430₽'} />

                <MenuItem 
                image={avocado} 
                title={'Tuna and avocado salad'}
                desc={'Juicy tuna in its own juice, tender avocado, fresh spinach and arugula, dressed with a light lemon sauce. This salad is not only delicious, but also rich in omega-3 fatty acids, making it an excellent choice for a healthy diet.'}
                price={'440₽'} />

                <MenuItem 
                image={vegetable} 
                title={'Baked vegetable salad with goat cheese'}
                desc={'Assorted baked vegetables (eggplant, zucchini, peppers) served on a bed of arugula and spinach. The dish is complemented with soft goat cheese and balsamic sauce, creating a harmony of flavors and aromas.'}
                price={'460₽'} />
            </ul>

            <SectionTitle name={'Pastas and risotto'}/>

            <ul className="menu-list">
            <MenuItem 
                image={carbonara} 
                title={'Pasta Carbonara'}
                desc={'Traditional Italian pasta with a creamy sauce made from eggs, Parmesan and black pepper. Crispy pieces of pancetta are added to give the dish a rich flavor. Served with grated Parmesan and freshly ground pepper.'}
                price={'510₽'} />

                <MenuItem 
                image={penne} 
                title={'Penne with chicken in creamy sauce'}
                desc={'Al dente penne, sauteed chicken breast and fresh spinach, all in a smooth creamy sauce with garlic and parmesan. The dish is decorated with fresh herbs and served with crispy croutons.'}
                price={'490₽'} />

                <MenuItem 
                image={rizotto} 
                title={'Risotto with mushrooms and truffle oil'}
                desc={'Creamy risotto cooked in broth with the addition of fresh wild mushrooms. Finished with a drizzle of truffle oil, adding an exquisite aroma to the dish. Served with grated Parmesan and herbs.'}
                price={'560₽'} />

                <MenuItem 
                image={lasagna} 
                title={'Lasagne with meat sauce and bechamel'}
                desc={'Layers of homemade pasta soaked in rich meaty Bolognese sauce and delicate bechamel sauce. Baked until golden brown and served hot, sprinkled with fresh herbs and grated cheese.'}
                price={'570₽'} />
            </ul>

            <SectionTitle name={'Meat and poultry'}/>

            <ul className="menu-list">
            <MenuItem 
                image={ribay} 
                title={'Ribeye steak with herbs'}
                desc={'Juicy ribeye steak cooked to your desired doneness with aromatic herbs and spices. Served with mashed potatoes and seasonal grilled vegetables. Garnished with fresh herbs and red wine sauce.'}
                price={'760₽'} />

                <MenuItem 
                image={teriyaki} 
                title={'Chicken fillet with teriyaki sauce'}
                desc={'Tender chicken breasts marinated in teriyaki sauce and fried until golden brown. Served with basmati rice and fresh vegetables, garnished with sesame seeds and green onions.'}
                price={'570₽'} />

                <MenuItem 
                image={duck} 
                title={'Duck with orange sauce'}
                desc={'Roasted duck with a crispy crust, served with aromatic orange sauce that perfectly complements the taste of the meat. As a side dish - potato wedges and fresh vegetable salad.'}
                price={'650₽'} />

                <MenuItem 
                image={sheep} 
                title={'Lamb with mint sauce'}
                desc={'Layers of homemade pasta soaked in rich meaty Bolognese sauce and delicate bechamel sauce. Baked until golden brown and served hot, sprinkled with fresh herbs and grated cheese.'}
                price={'670₽'} />
            </ul>

            <SectionTitle name={'Fish'}/>

            <ul className="menu-list">
            <MenuItem 
                image={losos} 
                title={'Grilled salmon with lemon sauce'}
                desc={'Juicy salmon fillet, grilled until golden brown, served with a light lemon sauce, fresh herbs and a side of steamed vegetables. The perfect combination of taste and nutrition.'}
                price={'810₽'} />

                <MenuItem 
                image={skumbria} 
                title={'Mackerel in spicy sauce'}
                desc={'Mackerel fillet cooked in a spicy sauce of tomatoes, garlic and spices, served with basmati rice and herbs. This dish will delight lovers of rich flavors and aromas.'}
                price={'850₽'} />
            </ul>

            <SectionTitle name={'Desserts'} />

            <ul className="menu-list">
            <MenuItem 
                image={tiramisu} 
                title={'Tiramisu classic'}
                desc={'A delicate Italian dessert made with layers of coffee-soaked savoiardi sponge, mascarpone cream and light whipped buttercream. Served with cocoa sprinkles and chocolate chips.'}
                price={'420₽'} />

                <MenuItem 
                image={fondan} 
                title={'Chocolate fondant'}
                desc={'Smooth chocolate pie with a runny center, served hot with vanilla ice cream and fresh berries. The perfect combination of hot and cold for true chocolate lovers.'}
                price={'370₽'} />
            </ul>
        </section>
        </>
    )
}