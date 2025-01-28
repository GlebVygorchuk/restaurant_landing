import SectionTitle from "../../assets/sectionTitle/SectionTitle"

export default function SectionContacts({className, id}) {
    return (
        <section id={id} className={className}>
            <SectionTitle 
            name={
                <>
                Контактная <br /> информация
                </>
            }/>

            <div className="content">
                <div className="content_info">
                    <p>Проспект Ленина 69, Челябинск</p>
                    <p>8 999 585 56 74</p>
                    <br />
                    <p>Мы открыты ежедневно</p>
                    <p>пн-чт с 11.00 до 23.00</p>
                    <p>пт с 10.00 до 01.00</p>
                    <p>сб с 10.00 до 01.00</p>
                    <p>вс с 11.00 до 22.00</p>
                    <br />
                    <p>Вкусные блюда и киношедевры <br />ждут вас!</p>
                </div>
                <iframe style={{border: "none", borderRadius: "40px", boxShadow: "0px 0px 20px #cacaca"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d958.3634313422261!2d61.388626266971826!3d55.15903617732097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c592b131f3bf6b%3A0x17807db860ac7312!2z0KfQk9Cf0KMsINCk0LDQutGD0LvRjNGC0LXRgiDQuNC90L7RgdGC0YDQsNC90L3Ri9GFINGP0LfRi9C60L7Qsg!5e0!3m2!1sru!2sru!4v1738063081007!5m2!1sru!2sru" width="548" height="304" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}