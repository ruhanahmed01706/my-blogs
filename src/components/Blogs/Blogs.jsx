import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs,setblogs] = useState([])

    useEffect(()=> {
        fetch("Blogs.json")
        .then(res=> res.json())
        .then(data=>setblogs(data))

    },[])
    // console.log(blogs);
    
    return (
        <div>
            <h2 className='text-3xl'>Total Blogs:{blogs.length}</h2>
            <div className="all-blogs grid  lg:grid-cols-2 gap-3 w-[90%] mx-auto">
                {
                    blogs.map((blog)=> <Blog blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;