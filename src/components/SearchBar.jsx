import React, {useCallback, useState} from 'react';
import styles from './SearchBar.module.css';

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