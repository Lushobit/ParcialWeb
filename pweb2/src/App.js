import React, { useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Characters from './components/Characters';
import Pagination from "./components/Pagination";





function App() {

  const [loadingProducts, setLoadingProducts] = useState(false);
  const [characters, setcharacters] =useState([]);



  const initialurl = `https://randomuser.me/api/?page=2&results=10&seed=abc`;

  
  const fetCharacters = (url) =>{
    
    setLoadingProducts(true);
    fetch(url)
    .then(response => response.json())
    .then(data => setcharacters(data.results))
    .catch(error => console.log(error))
    setLoadingProducts(false);
  };

  useEffect(() => {
   
    fetCharacters(initialurl);
    
  },[])


  return (
    <>
    <Navbar brand="Usuarios" />
    <div className="container">
      <Pagination />
      <nav>
            <ul className='pagination justify-content-center'>
                <li className='page-item'>
                    <button className='page-link'  >Previous</button>
                    </li>
                <li className='page-item'>
                    <button className='page-link'>Next</button>
                    </li>
            </ul>
        </nav>
    <Characters characters={characters} />
    </div>
    </>
  );
}



export default App;
 