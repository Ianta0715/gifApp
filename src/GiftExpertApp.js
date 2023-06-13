import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GiftExpertApp = () => {
    const [categories, setcategories] = useState(['One Punch Man']);
    
    //handleAdd//
  //  const handleAdd = () => {
    //    setcategories((e) =>[...e,'HunterXHunter'])
    //};
    
    //Codigo jsx//
  return (
    <div className='GifExpertApp'>
          <h2>GifExpertApp</h2>
          <AddCategory setcategories={setcategories} />
          <hr />
        
          <ol>
        {
          categories.map((category) => (
            <GifGrid
              key={category}
              category={category} />   
          ))
        }
          </ol>
    </div>
  )
}
export default GiftExpertApp;
