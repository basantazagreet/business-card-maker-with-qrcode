import React from 'react'


const dummyOnChange = () => {

};

const FormElement = ({ID, Label, Value}) => {
  return (
    <label htmlFor="">
        <strong>{Label}</strong>
        <input type="text" name={ID}  onChange={dummyOnChange} value={Value}/>
    </label>
  )
}

export default FormElement