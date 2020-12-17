import "./stylesSelection.css";
import React, { useEffect, useState } from 'react';


const Selection = () => {

    const [basket, setBasket] = [useState];

    const items = [
        {
            id: 1,
            name: "Chicken"
        }
    ]

    const addToBasket = (el) => {
        setBasket([...baseket, el])
    }

    const listMeat = items.map((el) => {
        <div key={el.id}>{`${el.name}`}
            <button className="button" onClick={() => addToBasket(el)}>{el.Name}</button>
        </div>
    })

    return (
        <div className= "Selection">
            {listMeat}
        </div>
    )
}
export default Selection;