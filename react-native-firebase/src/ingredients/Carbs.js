import React from "react";

const Carbs = () => {
    const items = [
        {
            id = 1,
            name = "Rice",
            inBasket = false
        },
        {
            id = 2,
            name = "Potatos",
            inBasket = false
        },
        {
            id = 3,
            name = "Pasta",
            inBasket = false
        },
        {
            id = 4,
            name = "Chips",
            inBasket = false
        },
        {
            id = 5,
            name = "Noodles",
            inBasket = false
        },
        {
            id = 6,
            name = "Bread",
            inBasket = false
        },
        {
            id = 7,
            name = "Tortillas",
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

export default Carbs;