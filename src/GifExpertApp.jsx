import React, { useState } from 'react'

//componets
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {

  // const categories = ["one push", "dragon ball", "samuerai X"];
  const [categories, setCategories] = useState(["one push man"]);

  // const handleAdd = () =>{
  //   setCategories( [...categories, "kimetsu no yaiba"]);
  // }

  return (
    <>
      <h2>GifExpert</h2>
      <AddCategory setCategories={setCategories}/>
      <hr />

    {/* <button onClick={handleAdd}>Add</button> */}
      <ol>
        {
          categories.map((item) => 
             <GifGrid key={item} category={item} />
          )
        }
      </ol>
    </>
  )
}

export default GifExpertApp