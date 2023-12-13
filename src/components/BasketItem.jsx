export default function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        decQuantity = Function.prototype,
        incQuantity = Function.prototype,
    } = props;

    return (
        <li className="collection-item ">
            {name}{" "}
            <i className="material-icons basket-quantity" onClick={() => decQuantity(id)}>
                remove
            </i>{" "}
            {quantity}{" "}
            <i className="material-icons basket-quantity" onClick={() => incQuantity(id)}>
                add
            </i>{" "}
            = {price * quantity} RUB
            <span className="secondary-content" onClick={() => removeFromBasket(id)}>
                <i className="material-icons basket-delete">close</i>
            </span>
        </li>
    );
}