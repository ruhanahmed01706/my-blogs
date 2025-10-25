import React from 'react';

const Blog = ({blog,handleBukmarked,handleMarkAsRead}) => {
    // console.log(blog);
    
    return (
        <div>
        <div className="shadow-sm my-5">
  <figure>
    <img
      src={blog.cover}
      alt="blog" />
  </figure>
  <div className="p-1 md:p-5">
    <h2 className="text-left font-bold">
      {blog.title}
    </h2>
    <div className='flex gap-1 md:gap-3 items-center my-2'>
        <div ><img className='w-15 h-15 rounded-full'  src={blog.author_img} alt="" /></div>
        <h1 className='text-xl md:text-3xl'>{blog.author}</h1>
    </div>
    <p className='text-gray-500 text-left'>{blog.description}</p>
    <div className="card-actions justify-end">
      <button className='btn btn-xs' onClick={()=>handleBukmarked(blog)}>Bukmark</button>
      <button className='btn btn-xs' onClick={()=>handleMarkAsRead(blog.reading_time, blog.id)}>Mark As Read</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default Blog;