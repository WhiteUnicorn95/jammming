import React, {useCallback, useState} from 'react';
import styles from './SearchBar.module.css';

var client_id = process.env.REACT_APP_CLIENT_ID;
var client_secret = process.env.REACT_APP_CLIENT_SECRET;

function SearchBar({onSearch}) {
    const [term, setTerm] = useState("");

    const handleTermChange = useCallback((event) => {
        setTerm(event.target.value);
     }, []);

    const handleClick = useCallback(() => {
        console.log('searching for', term);
        onSearch(term);
      }, [onSearch, term]);
    ;

    return <div className={styles.maindiv}>
    <input className={styles.searchInput} type='text' onChange={handleTermChange}></input>
    <button className={styles.searchButton} onClick={handleClick}>Search</button>
    </div>;
};

export default SearchBar;