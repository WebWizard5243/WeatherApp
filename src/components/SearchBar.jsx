import React,{ useState } from 'react'

function SearchBar(props) {
  const [input, setInput] = useState('');
  function handleChange(event){
    const name = event.target.value
    setInput(name);
  }
  return (
    <div>
      <input className='search-bar' type="text"  name="input" onChange={handleChange}  value={input} placeholder='Enter City.....' 
      onKeyDown = {
        event => {
         if(event.key === 'Enter'){
          props.search(input);
          console.log(input);
          setInput('');
         }
        }
      }/>
    </div>
  )
}

export default SearchBar;