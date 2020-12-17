import React from "react";

const Meats = () => {
    const items = [
        {
            id = 1,
            name = "Chicken",
            inBasket = false
        },
        {
            id = 2,
            name = "Beef",
            inBasket = false
        },
        {
            id = 3,
            name = "Pork",
            inBasket = false
        },
        {
            id = 4,
            name = "Sausage",
            inBasket = false
        },
        {
            id = 5,
            name = "Steak",
            inBasket = false
        },
        {
            id = 6,
            name = "Bacon",
            inBasket = false
        },
        {
            id = 7,
            name = "Vension",
            inBasket = false
        },
        {
            id = 8,
            name = "Lamb",
            inBasket = false
        },
        {
            id = 9,
            name = "Chorizo",
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

export default Meats;