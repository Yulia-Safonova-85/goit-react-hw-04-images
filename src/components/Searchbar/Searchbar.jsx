import { Component } from "react";
import { toast } from 'react-toastify';
import './SearchBar.css';
import { FiSearch } from "react-icons/fi";


export class Searchbar extends Component {
    state = {
    searchName: '',
    }
    
    handleNameChange = event => {
        this.setState({ searchName: event.currentTarget.value.toLowerCase() });
    }

    handleSubmit = evt => {
        evt.preventDefault();
        if (this.state.searchName.trim() === '') {
            return toast.error("Sorry,there is no images, please try again!", {
               icon: false,
               position: "top-right",
      });
        
}
        this.props.onSubmit(this.state.searchName);
        this.setState({ searchName: '' });
    }

    render() {
        return (
<header className="Searchbar">
  <form className="SearchForm" onSubmit={this.handleSubmit}>
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
      value={this.state.searchName}
      onChange={this.handleNameChange}
                        
    />
  </form>
</header>
        )
    }
}



