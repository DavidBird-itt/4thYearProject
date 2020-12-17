import React from "react";

const Oils = () => {
    const items = [
        {
            id = 1,
            name = "Olive oil",
            inBasket = false
        },
        {
            id = 2,
            name = "Vegatable oil",
            inBasket = false
        },
        {
            id = 3,
            name = "Conola oil",
            inBasket = false
        },
        {
            id = 4,
            name = "Coconut oil",
            inBasket = false
        },
        {
            id = 5,
            name = "Peanut oil",
            inBasket = false,
        },
        {
            id = 6,
            name = "Sunflower oil",
            inBasket = false
        }
    ]

    const listItems = items.map((el) => {
        <div key={el.id}>{`${el.name}`}
            <button className="button" onClick={() => addToBasket(el)}>{el.Name}</button>
        </div>
    })


    return (
        <div>{listItems}</div>
    )
}

export default Oils;