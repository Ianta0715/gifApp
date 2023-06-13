import React from 'react'

export const GifGridItem = ({id,url,title}) => {
    console.log({id,url,title})
  return (
    <div className='card animate__animated animate__fadeInLeft'>
      <h4>{title}</h4>
      <img src={url} alt={title} />
      
      </div>
  )
}
