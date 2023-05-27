import React from 'react'
import { useState } from 'react';
import Class10 from './Class10';

const NotesMain = () => {
    const productList = [<Class10 />
        , "black pant"
        , "golden shoes"
        , "dark pant"
        , "pink shirt"
        , "yellow pant"];

    const [products, setProducts] = useState(productList);
    const [searchVal, setSearchVal] = useState("");
    function handleSearchClick() {
        if (searchVal === "") { setProducts(productList); return; }
        const filterBySearch = productList.filter((item) => {
            if (item.toLowerCase()
                .includes(searchVal.toLowerCase())) { return item; }
        })
        setProducts(filterBySearch);
    }
    const mystyle = {
        marginLeft: "600px",
        marginTop: "20px",
        fontWeight: "700"
    };

    return (
        <div>
            <div>
                <input onChange={e => setSearchVal(e.target.value)} placeholder='jgip' className='border'>
                </input>
                <p onClick={handleSearchClick}>S</p>
            </div>
            <div>

                {products.map((product) => {
                    return (
                        <div>{product}</div>
                    )
                })
                }

            </div>
        </div>
    );
}


export default NotesMain
