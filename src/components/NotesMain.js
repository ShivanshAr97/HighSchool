import React from 'react'
import { useState } from 'react';
// import Class10Eng from './Class10Eng';
// import Class10Math from './Class10Math';
// import Class10Science from './Class10Science';
// import Class11Eng from './Class11Eng';
// import Class11Math from './Class11Math';
// import Class11Phy from './Class11Phy';
// import Class11Chem from './Class11Chem';
// import Class12Eng from './Class12Eng';
// import Class12Phy from './Class12Phy';
// import Class12Math from './Class12Math';
// import Class12Chem from './Class12Chem';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';

const NotesMain = () => {
    const productList = [{
        id: 1,
        class: 10,
        subject: "English",
        likes: 20,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/1268x768/?office"
    },
    {
        id: 2,
        class: 10,
        subject: "Math",
        likes: 2,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/768x180/?work"
    },
    {
        id: 3,
        class: 10,
        subject: "Science",
        likes: 20,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/768x180/?intern"
    },
    {
        id: 4,
        class: 11,
        subject: "English",
        likes: 20,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/768x180/?english"
    },
    {
        id: 5,
        class: 11,
        subject: "Math",
        likes: 20,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/768x180/?maths"
    },
    {
        id: 6,
        class: 11,
        subject: "Phy",
        likes: 20,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/768x180/?physics"
    },
    {
        id: 7,
        class: 11,
        subject: "Chem",
        likes: 20,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/768x180/?chemistry"
    },
    {
        id: 8,
        class: 12,
        subject: "English",
        likes: 20,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/768x180/?office"
    },
    {
        id: 9,
        class: 12,
        subject: "Math",
        likes: 20,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/768x180/?addition"
    },
    {
        id: 10,
        class: 12,
        subject: "Phy",
        likes: 20,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/768x180/?space"
    },
    {
        id: 11,
        class: 12,
        subject: "Chem",
        likes: 20,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/768x180/?atoms"
    },
    // <First />,
    // <Second />,
    // <Third />,
    // <Fourth />

    ];

    const [products, setProducts] = useState(productList);
    const [searchVal, setSearchVal] = useState("");
    function handleSearchClick() {
        if (searchVal === "") { setProducts(productList); return; }
        
        const filterBySearch = productList.filter((item) => {
            if (item.subject.toLowerCase().toString() .includes (searchVal.toLowerCase())) { return item; }
        })
        setProducts(filterBySearch);
    }

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
                        <div className='' key={product.id}>
                            <div className='flex mx-auto w-[50%] border my-4'>
                                <div>
                                    <img className='w-[24rem] mx-auto' src={product.img} alt="" />
                                    <h1>{product.subject}: {product.class}</h1>
                                    <span>{product.likes}</span>
                                    <p>{product.desc}</p>
                                </div>
                            </div>

                        </div>
                    )
                })
                }

            </div>
        </div>
    );
}


export default NotesMain
