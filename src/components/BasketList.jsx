import BasketItem from "./BasketItem";

export default function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        decQuantity = Function.prototype,
        incQuantity = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Basket</li>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.id}
                        {...item}
                        removeFromBasket={removeFromBasket}
                        decQuantity={decQuantity}
                        incQuantity={incQuantity}
                    />
                ))
            ) : (
                <li className="collection-item ">Basket empty</li>
            )}
            <li className="collection-item active">Total Cost: {totalPrice} RUB</li>
            <i className="material-icons basket-close" onClick={handleBasketShow}>
                close
            </i>
        </ul>
    );
}
