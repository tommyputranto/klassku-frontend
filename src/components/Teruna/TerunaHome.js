import React, { Component } from 'react';
import HeaderTitle from '../Common/HeaderTitle.js';
import Search from '../Common/Search.js';
import styles from '../Common/common.module.css';

class TerunaHome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HeaderTitle title="Teruna Home" />
                <div className={styles.half}>
                    <Search />
                </div>
            </div>
        );
    }
}

export default TerunaHome;
