import { useState } from "react";
import { toast } from 'react-toastify';
import './SearchBar.css';
import { FiSearch } from "react-icons/fi";


export const Searchbar =({onSubmit})=> {
const [searchName, setSearchName] = useState('');


   const handleNameChange = event => {
    setSearchName(event.currentTarget.value.toLowerCase());
    };

   const handleSubmit = evt => {
        evt.preventDefault();
        if (searchName.trim() === '') {
            return toast.error("Sorry,there is no images, please enter something!", {
               icon: false,
               position: "top-right",
      });
}
       onSubmit(searchName);
        setSearchName('');
    }

        return (
<header className="Searchbar">
  <form className="SearchForm" onSubmit={handleSubmit}>
              <button type="submit" className="SearchForm-button">
               < FiSearch size="20" color="darkblue"/>
      <span className="SearchForm-button-label">Search</span>
    </button>
    <input
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={searchName}
      onChange={handleNameChange}
                        
    />
  </form>
</header>
        )
    }




