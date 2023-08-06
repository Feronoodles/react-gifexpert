
import {useState} from 'react';
export const AddCategory = ({onNewCategory}) => {
    const [ inputValue, setInputValue] = useState('One punch');

    const onInputChange = (event)=>{
       
        setInputValue(event.target.value);
    };
    const OnSubmit = (event)=>{
        event.preventDefault();

        if(inputValue.trim().length <= 1) return;
        //setCategories(categories =>[inputValue,...categories]);
        setInputValue('');
        onNewCategory(inputValue.trim())
        
    };
  return (
    <form onSubmit={OnSubmit}>
        <input type="text" 
            placeholder = "Buscar Gifs"
            value = {inputValue}
            onChange={onInputChange}
         />
    </form>
    
  )
}

 //default AddCategory
