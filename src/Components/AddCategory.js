import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({setcategories}) => {
  const [inputValue, setinputValue] = useState('')
  //handleChangeInput//
    const handleChangeInput = (e) => {
        setinputValue(e.target.value);
    }  
    //handleSubmit//
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setcategories((e) => [inputValue,...e ])
            setinputValue('')
        } else {
            console.error('El texto no puede quedar vacio')
        }
       
    }
    return (
        <form className='AddCategory'
              onSubmit={handleSubmit}>
          <input
                type='text'
                value={inputValue}
                onChange={handleChangeInput}/>
    </form>
  )
}
AddCategory.prototype = {
    setcategories : PropTypes.func.isRequired
}
