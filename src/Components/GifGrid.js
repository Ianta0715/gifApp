import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//import { getGifts } from '../helpers/GetGifs'

export const GifGrid = ({ category }) => {
  //useState//
  const { data,loading } = useFetchGifs(category);
  
  return (
    <>
      <h3>{category}</h3>

      <div className='card-grid'>

        {loading && <p className='animate__animated animate__rotateIn animate__repeat-3 3'>loading..</p>}
      
        {
          data.map((img) => (
            <GifGridItem
              key={img.id}
              {...img} />
          ) )
        }
    
      
    
      </div>
    </>
  )
}
