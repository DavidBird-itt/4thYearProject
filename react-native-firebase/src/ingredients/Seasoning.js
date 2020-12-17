import React from "react";

const Seasoning = () => {
    const items = [
        {
            id = 1,
            name = "Salt",
            inBasket = false
        },
        {
            id = 2,
            name = "Pepper",
            inBasket = false
        },
        {
            id = 3,
            name = "Ginger",
            inBasket = false
        },
        {
            id = 4,
            name = "Mustard Powder",
            inBasket = false
        },
        {
            id = 5,
            name = "Wasabi",
            inBasket = false
        },
        {
            id = 6,
            name = "Soya Sauce",
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

export default Seasoning;