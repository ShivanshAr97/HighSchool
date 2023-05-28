import React from 'react'
import { useState } from 'react';
import { AiFillLike, AiOutlineLike, AiOutlineSearch } from 'react-icons/ai';
import { useAuth0 } from "@auth0/auth0-react";
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const NotesMain = () => {
    const productList = [{
        id: 1,
        classs: "10th Class",
        subject: "English",
        likes: 168,
        contributor: "Sanya",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?school",
        linkk: "/eng10"
    },
    {
        id: 2,
        classs: "10th Class",
        subject: "Mathematics",
        likes: 78,
        contributor: "Akshay",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?study",
        linkk: "/math10"
    },
    {
        id: 3,
        classs: "10th Class",
        subject: "Science",
        likes: 98,
        contributor: "Vaibhav",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?college",
        linkk: "/eng10"
    },
    {
        id: 4,
        classs: "11th Class",
        subject: "English",
        likes: 120,
        contributor: "Arsh",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?english",
        linkk: "/eng10"
    },
    {
        id: 5,
        classs: "11th Class",
        subject: "Mathematics",
        likes: 234,
        contributor: "Vidhushi",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?Mathematics",
        linkk: "/math10"
    },
    {
        id: 6,
        classs: "11th Class",
        subject: "Physics",
        likes: 54,
        contributor: "Bala",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?Physics",
        linkk: "/eng10"
    },
    {
        id: 7,
        classs: "11th Class",
        subject: "Chemistry",
        likes: 91,
        contributor: "Pranav",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?chemistry",
        linkk: "/eng10"
    },
    {
        id: 8,
        classs: "12th Class",
        subject: "English",
        likes: 112,
        contributor: "Anuj",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?prepare",
        linkk: "/eng10"
    },
    {
        id: 9,
        classs: "12th Class",
        subject: "Mathematics",
        likes: 298,
        contributor: "Anupama",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?addition",
        linkk: "/math10"
    },
    {
        id: 10,
        classs: "12th Class",
        subject: "Physics",
        likes: 143,
        contributor: "Anushree",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?cosmos",
        linkk: "/eng10"
    },
    {
        id: 11,
        classs: "12th Class",
        subject: "Chemistry",
        likes: 89,
        contributor: "Tina",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?atoms",
        linkk: "/eng10"
    },
    {
        id: 12,
        classs: "First Year",
        subject: "All Subjects",
        likes: 232,
        contributor: "Mamta",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?student",
        linkk: "/first"
    },
    {
        id: 13,
        classs: "Second Year",
        subject: "All Subjects",
        likes: 156,
        contributor: "Vishnu",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?coding",
        linkk: "/second"
    },
    {
        id: 14,
        classs: "Third Year",
        subject: "All Subjects",
        likes: 187,
        contributor: "Dhruv",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?mechanics",
        linkk: "/third"
    },
    {
        id: 15,
        classs: "Fourth Year",
        subject: "All Subjects",
        likes: 221,
        contributor: "Aditya",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id error quae architecto, impedit incidunt recusandae vitae rerum porro eveniet atque.",
        img: "https://source.unsplash.com/random/?programming",
        linkk: "/fourth"
    }
    ];
    const { isAuthenticated } = useAuth0();
    const [products, setProducts] = useState(productList);
    const [thumb, setThumb] = useState(<AiOutlineLike />)
    const [like, setLike] = useState(products[0].likes)
    const [searchVal, setSearchVal] = useState("");

    const authClicked = () => {
        setLike(like + 1)
        setThumb(<AiFillLike />)
    }
    const notAuthClicked = () => {
        alert("Login First")
    }
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
                <input className="rounded-lg border-r-0 border h-10 px-2 w-[45%] outline-none" onChange={e => setSearchVal(e.target.value)} placeholder='Search using subject or class' >
                </input>
                <p className='border border-l-0 p-2.5 rounded-lg cursor-pointer text-white bg-blue-500' onClick={handleSearchClick}><AiOutlineSearch /></p>
                {isAuthenticated ?
                    <span className='text-blue-500 cursor-pointer mx-1'><Link to='/post'><AiOutlinePlusCircle size="18px" /></Link></span>
                    :
                    <span className='text-blue-500 cursor-pointer'></span>}
            </div>
            <div>
                {products.map((product) => {
                    return (
                        <div className='' key={product.id}>
                            <div className='flex mx-auto w-[50%] border my-4 mb-8'>
                                <div className='mx-4 py-2'>
                                    <Link to="/eng10"><img className='w-[16rem] h-[16rem] object-cover rounded-lg mx-auto' src={product.img} alt="" />
                                    </Link>
                                    <h1 className='mt-4 mb-2 text-3xl font-medium'>{product.subject} for {product.classs}</h1>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center cursor-pointe z-30'>

                                            {isAuthenticated ? (
                                                <>
                                                    <button onClick={authClicked}>{thumb}</button>
                                                    <span>{like}</span>
                                                </>
                                            ) : <>
                                                <button onClick={notAuthClicked}><AiOutlineLike /></button>
                                                <span>{product.likes}</span>
                                            </>}

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
