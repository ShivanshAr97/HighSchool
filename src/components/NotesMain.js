import React from 'react'
import { useState } from 'react';
import { AiOutlineLike, AiOutlineSearch } from 'react-icons/ai';
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
// import First from './First';
// import Second from './Second';
// import Third from './Third';
// import Fourth from './Fourth';

const NotesMain = () => {
    const productList = [{
        id: 1,
        classs: "10th Class",
        subject: "English",
        likes: 168,
        contributor:"Sanya",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?school"
    },
    {
        id: 2,
        classs: "10th Class",
        subject: "Mathematics",
        likes: 78,
        contributor:"Akshay",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?study"
    },
    {
        id: 3,
        classs: "10th Class",
        subject: "Science",
        likes: 98,
        contributor:"Vaibhav",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?college"
    },
    {
        id: 4,
        classs: "11th Class",
        subject: "English",
        likes: 120,
        contributor:"Arsh",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?english"
    },
    {
        id: 5,
        classs: "11th Class",
        subject: "Mathematics",
        likes: 234,
        contributor:"Vidhushi",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?Mathematics"
    },
    {
        id: 6,
        classs: "11th Class",
        subject: "Physics",
        likes: 54,
        contributor:"Bala",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?Physics"
    },
    {
        id: 7,
        classs: "11th Class",
        subject: "Chemistry",
        likes: 91,
        contributor:"Pranav",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?chemistry"
    },
    {
        id: 8,
        classs: "12th Class",
        subject: "English",
        likes: 112,
        contributor:"Anuj",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?prepare"
    },
    {
        id: 9,
        classs: "12th Class",
        subject: "Mathematics",
        likes: 298,
        contributor:"Anupama",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?addition"
    },
    {
        id: "10th Class",
        classs: "12th Class",
        subject: "Physics",
        likes: 143,
        contributor:"Anushree",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?cosmos"
    },
    {
        id: "11th Class",
        classs: "12th Class",
        subject: "Chemistry",
        likes: 89,
        contributor:"Tina",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?atoms"
    },
    {
        id: "12th Class",
        classs: "First Year",
        subject: "All Subjects",
        likes: 232,
        contributor:"Mamta",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?student"
    },
    {
        id: 13,
        classs: "Second Year",
        subject: "All Subjects",
        likes: 156,
        contributor:"Vishnu",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?coding"
    },
    {
        id: 14,
        classs: "Third Year",
        subject: "All Subjects",
        likes: 187,
        contributor:"Dhruv",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?mechanics"
    },
    {
        id: 15,
        classs: "Fourth Year",
        subject: "All Subjects",
        likes: 221,
        contributor:"Aditya",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?programming"
    }
    ];

    const [products, setProducts] = useState(productList);
    const [searchVal, setSearchVal] = useState("");
    function handleSearchClick() {
        if (searchVal === "") { setProducts(productList); return; }

        const filterBySearch = productList.filter((item) => {
            if ((item.subject.toLowerCase().toString().includes(searchVal.toLowerCase())) || (item.classs.toString().includes(searchVal.toString()))) { return item; }
        })
        setProducts(filterBySearch);
    }

    return (
        <div>
            <div className='flex mx-auto items-center justify-center my-4'>
                <input className="rounded-lg border-r-0 border h-10 px-2 w-[45%] outline-none" onChange={e => setSearchVal(e.target.value)} placeholder='jgip' >
                </input>
                <p className='border border-l-0 p-2.5 rounded-lg cursor-pointer text-white bg-blue-500' onClick={handleSearchClick}><AiOutlineSearch/></p>
            </div>
            <div>
                {products.map((product) => {
                    return (
                        <div className='' key={product.id}>
                            <div className='flex mx-auto w-[50%] border my-4 mb-8'>
                                <div className='mx-4 py-2'>
                                    <img className='w-[16rem] h-[16rem] object-cover rounded-lg mx-auto' src={product.img} alt="" />
                                    <h1 className='mt-4 mb-2 text-3xl font-medium'>{product.subject} for {product.classs}</h1>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center'>
                                            {/* <AiFillLike /> */}
                                            <AiOutlineLike/>
                                            <span>{product.likes}</span>
                                        </div>
                                        <div>
                                            Contributed by: {product.contributor}
                                        </div>
                                    </div>
                                    <p className='text-sm mt-2'>{product.desc}</p>
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
