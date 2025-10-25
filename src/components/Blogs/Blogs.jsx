import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs,setblogs] = useState([])

    useEffect(()=> {
        fetch("Blogs.json")
        .then(res=> res.json())
        .then(data=>setblogs(data))

    },[])
    console.log(blogs);
    
    return (
        <div>
            <h1>hi</h1>
        </div>
    );
};

export default Blogs;