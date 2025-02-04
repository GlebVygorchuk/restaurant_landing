import SectionTitle from "../../assets/sectionTitle/SectionTitle"

export default function SectionContacts({className, id}) {
    return (
        <section id={id} className={className}>
            <SectionTitle name={'Contacts'}/>

            <div className="content">
                <div className="content_info">
                    <p>Lenin Avenue, 69, Chelyabinsk</p>
                    <p>8 999 585 56 74</p>
                    <br />
                    <p>We are open daily</p>
                    <p>MON-THU FROM 11.00 TO 23.00</p>
                    <p>FRI FROM 10.00 TO 01.00</p>
                    <p>SAT FROM 10.00 TO 01.00</p>
                    <p>SUN FROM 11.00 TO 22.00</p>
                    <br />
                    <p>Delicious dishes and film <br /> masterpieces await you!</p>
                </div>
                <iframe style={{border: "none", borderRadius: "40px", boxShadow: "0px 0px 20px #cacaca"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1355.3109715709427!2d61.387884933182804!3d55.15961265789654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c5ed0b6191f387%3A0x9ed37620e3e6759f!2z0K7QttC90L4t0KPRgNCw0LvRjNGB0LrQuNC5INCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQs9GD0LzQsNC90LjRgtCw0YDQvdC-LdC_0LXQtNCw0LPQvtCz0LjRh9C10YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgg!5e0!3m2!1sru!2sru!4v1738150318060!5m2!1sru!2sru" width="548" height="304" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}