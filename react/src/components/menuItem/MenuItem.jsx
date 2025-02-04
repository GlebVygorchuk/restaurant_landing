export default function MenuItem({image, title, desc, price}) {
    return (
        <li className="menu-item">
            <img src={image} alt="" />
            <div className="menu-item__text">
                <p className="menu-item__title">{title}</p>
                <div className="menu-item__info">
                    <p className="menu-item__description">{desc}</p>
                    <p className="menu-item__price">{price}</p>
                </div>
            </div>
        </li>
    )
}