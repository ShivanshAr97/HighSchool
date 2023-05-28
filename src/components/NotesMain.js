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
        desc: "Students who aim to score high marks in CBSE Class 10 board exam must pay attention to the English subject. Scoring marks in a language subject such as English requires excellent knowledge of grammar and vocabulary. Students should be able to comprehend the passage or poem and should be able to express their thoughts through a piece of writing.",
        img: "https://source.unsplash.com/random/?school",
        linkk: "/eng10"
    },
    {
        id: 2,
        classs: "10th Class",
        subject: "Mathematics",
        likes: 78,
        contributor: "Akshay",
        desc: "CBSE Class 10 Maths Notes is the best study material for a student who wishes to pursue a career in engineering and other related fields. Most of the concepts in CBSE Class 10 Maths are important as several higher-level concepts are derived from the concepts that are introduced in Class 11.",
        img: "https://source.unsplash.com/random/?study",
        linkk: "/math10"
    },
    {
        id: 3,
        classs: "10th Class",
        subject: "Science",
        likes: 98,
        contributor: "Vaibhav",
        desc: "CBSE Science Notes for Class 10 is a crucial study material for students. It is important for every student to study effectively and score good marks in the CBSE Class 10 board exam.",
        img: "https://source.unsplash.com/random/?college",
        linkk: "/eng10"
    },
    {
        id: 4,
        classs: "11th Class",
        subject: "English",
        likes: 120,
        contributor: "Arsh",
        desc: "CBSE Class 11 English is the basis for gaining a strong hold over the CBSE Class 12 English syllabus. Prose and poetry given in the Class 11 textbooks – Hornbill and Snapshots are much more complex than the ones given in the previous classes. These chapters need thorough study and close reading for good comprehension and critical analysis of the themes presented in them.",
        img: "https://source.unsplash.com/random/?english",
        linkk: "/eng10"
    },
    {
        id: 5,
        classs: "11th Class",
        subject: "Mathematics",
        likes: 234,
        contributor: "Vidhushi",
        desc: "CBSE Class 11 Maths Notes helps students in their revision. It is necessary for students to plan their revision well in advance so that they don’t miss out on the concepts important from the examination point of view. Besides, for Math students, it is difficult for them to score well in the subject by simply reading and memorizing the concepts.",
        img: "https://source.unsplash.com/random/?Mathematics",
        linkk: "/math10"
    },
    {
        id: 6,
        classs: "11th Class",
        subject: "Physics",
        likes: 54,
        contributor: "Bala",
        desc: "CBSE Class 11 Physics notes reduce the pressure students face when they have to appear for exams. Besides, when exams are just around the corner, completing the final revision can prove to be of tremendous help to students. While revision is not just about reading notes, it should be a holistic process where students cover all the necessary concepts that will help them prepare well and attempt all the questions in the examinations with ease.",
        img: "https://source.unsplash.com/random/?Physics",
        linkk: "/eng10"
    },
    {
        id: 7,
        classs: "11th Class",
        subject: "Chemistry",
        likes: 91,
        contributor: "Pranav",
        desc: "CBSE Notes for Class 11 Chemistry is crucial for students preparing for their Class 11 Chemistry exam. If the basic concepts of Chemistry are not clear, students may find themselves unable to comprehend more complex topics.",
        img: "https://source.unsplash.com/random/?chemistry",
        linkk: "/eng10"
    },
    {
        id: 8,
        classs: "12th Class",
        subject: "English",
        likes: 112,
        contributor: "Anuj",
        desc: "CBSE Class 12 Notes are an essential requirement to ace the CBSE Class 12 Board Exams. Students can go through the notes and summaries of the chapters given in CBSE Class 12 English textbooks for an easy understanding of concepts.",
        img: "https://source.unsplash.com/random/?prepare",
        linkk: "/eng10"
    },
    {
        id: 9,
        classs: "12th Class",
        subject: "Mathematics",
        likes: 298,
        contributor: "Anupama",
        desc: "CBSE Class 12 Maths Notes helps students to easily score high marks with strong conceptual Maths knowledge. The Maths subject also requires daily practice. Topics like calculus, vectors, 3D, etc., are important for the exam.",
        img: "https://source.unsplash.com/random/?addition",
        linkk: "/math10"
    },
    {
        id: 10,
        classs: "12th Class",
        subject: "Physics",
        likes: 143,
        contributor: "Anushree",
        desc: "CBSE Class 12 Physics Notes is one of the most crucial study materials for a student who wishes to pursue a career in engineering and other related fields. Most of the concepts in CBSE Class 12 Physics are important as several higher-level concepts are derived from the concepts that are introduced in CBSE Class 12. ",
        img: "https://source.unsplash.com/random/?cosmos",
        linkk: "/eng10"
    },
    {
        id: 11,
        classs: "12th Class",
        subject: "Chemistry",
        likes: 89,
        contributor: "Tina",
        desc: "CBSE Class 12 Chemistry Notes for all chapters are available here. Students can go through these notes to prepare well for the exam. These notes are created by a subject expert after thorough research and are written in simple language for students’ easy understanding.",
        img: "https://source.unsplash.com/random/?atoms",
        linkk: "/eng10"
    },
    {
        id: 12,
        classs: "First Year",
        subject: "All Subjects",
        likes: 232,
        contributor: "Mamta",
        desc: "When you are short on time and want to clear your sessionals or end-sem exams with awesome marks, you want all your syllabus organised and structured at one place, which is here for the first and second semester.",
        img: "https://source.unsplash.com/random/?student",
        linkk: "/first"
    },
    {
        id: 13,
        classs: "Second Year",
        subject: "All Subjects",
        likes: 156,
        contributor: "Vishnu",
        desc: "When you are short on time and want to clear your sessionals or end-sem exams with awesome marks, you want all your syllabus organised and structured at one place, which is here for the third and fourth semester",
        img: "https://source.unsplash.com/random/?coding",
        linkk: "/second"
    },
    {
        id: 14,
        classs: "Third Year",
        subject: "All Subjects",
        likes: 187,
        contributor: "Dhruv",
        desc: "When you are short on time and want to clear your sessionals or end-sem exams with awesome marks, you want all your syllabus organised and structured at one place, which is here for the fifth and sixth semester",
        img: "https://source.unsplash.com/random/?mechanics",
        linkk: "/third"
    },
    {
        id: 15,
        classs: "Fourth Year",
        subject: "All Subjects",
        likes: 221,
        contributor: "Aditya",
        desc: "When you are short on time and want to clear your sessionals or end-sem exams with awesome marks, you want all your syllabus organised and structured at one place, which is here for the seventh and eighth semester",
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
