import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };
    const handleChange = (event) => {
        setTerm(event.target.value);
    };
    return (
        <div class="p-3 mb-2 bg-info-subtle text-info-emphasis">
            <form onSubmit={handleFormSubmit}>
                <label class="text-primary">Enter Search Term</label>
                <input class="form-control" value={term} onChange={handleChange} />
            </form>
            <button class="btn btn-outline-primary btn-sm" onClick={handleFormSubmit}>Search</button>
        </div>
    );
}


export default SearchBar;