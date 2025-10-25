
import './App.css'
import Blogs from './components/blogs/blogs'
import Nav from './components/navbar/Nav'

function App() {
  
  return (
    <>
      <Nav></Nav>
      

      <div className="main-conteinar flex text-center">
        <div className="left-conteinar w-[70%]">
          <Blogs></Blogs>
        </div>
        <div className="right-conteinar w-[30%]">
          <h1>Reading Time: 0</h1>
          <h1>Bukmarked Count: 0</h1>
        </div>
      </div>
      
    </>
  )
}

export default App
