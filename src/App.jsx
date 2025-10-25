
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/blogs'
import Nav from './components/navbar/Nav'

function App() {
  const [bukmarked,setBukmarked] = useState([]);
  const [countMark,setCountMark] = useState(0)

  const handleBukmarked = (blog) => {
    setBukmarked([...bukmarked,blog])
 
  }

  const handleMarkAsRead = (time,id)=>{
    const newMark = countMark + time;
    setCountMark(newMark)
    removeBukmark(id)
  }

  const removeBukmark =(id)=>{
    // console.log(id);
    const remaingBukmark = bukmarked.filter((mark) => mark.id!==id);
    setBukmarked(remaingBukmark)
    
  }
  
  return (
    <>
      <Nav></Nav>
      

      <div className="main-conteinar flex text-center">
        <div className="left-conteinar w-[70%]">
          <Blogs handleBukmarked={handleBukmarked} handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>
        <div className="right-conteinar w-[30%] ">
          <h1 className='text-xl ' >Reading Time: {countMark}</h1>
          <h1 className='text-xl '>Bukmarked Count: {bukmarked.length}</h1>
          {
            bukmarked.map((marked) => <p className='bg-blue-400 text-black my-2 p-[2px] rounded-s-sm'>{marked.title}</p>)
          }
        </div>
      </div>
      
    </>
  )
}

export default App
