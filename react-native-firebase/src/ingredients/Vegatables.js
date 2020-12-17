import React from "react";

const Vegatables = () => {
    const items = [
        {
            id = 1,
            name = "Carrots",
            inBasket = false
        },
        {
            id = 2,
            name = "Onion",
            inBasket = false
        },
        {
            id = 3,
            name = "Pepper",
            inBasket = false
        },
        {
            id = 4,
            name = "Broccolli",
            inBasket = false
        },
        {
            id = 5,
            name = "Cabbage",
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

export default Vegatables;