import React from 'react';

const Blog = ({blog}) => {
    console.log(blog);
    
    return (
        <div>
        <div className="shadow-sm my-5">
  <figure>
    <img
      src={blog.cover}
      alt="blog" />
  </figure>
  <div className="p-5">
    <h2 className="card-title">
      {blog.title}
    </h2>
    <div className='flex gap-3 items-center my-2'>
        <div ><img className='w-15 h-15 rounded-4xl'  src={blog.author_img} alt="" /></div>
        <h1 className='text-3xl'>{blog.author}</h1>
    </div>
    <p className='text-gray-500 text-left'>{blog.description}</p>
    <div className="card-actions justify-end">
      <button className='btn btn-xs'>Bukmark</button>
      <button className='btn btn-xs'>Read in time</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default Blog;