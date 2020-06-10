import React, { Component } from 'react';
import styles from './common.module.css';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userEnteredSearch: null
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

    }

    handleInputChange(key, e) {
        this.setState({ [key]: e.target.value });
    }

    handleSearch() {
        const {
            userEnteredSearch
        } = this.state;
        console.log(userEnteredSearch);

    }

    render() {
        return (
            <form className={styles.rtl}>
                <h4 htmlFor="text">Pencarian</h4>
                <input
                    type="text"
                    id="search"
                    placeholder="masukan kata kunci"
                    onChange={e => this.handleInputChange('userEnteredSearch', e)}
                />
                <input
                    type="button"
                    onClick={this.handleSearch}
                    value="Cari"
                    className={styles.search_btn}
                />
            </form>
        );
    }
}

export default Search;
