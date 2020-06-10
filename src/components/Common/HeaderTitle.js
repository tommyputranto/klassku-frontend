import React, { Component } from 'react';
import styles from './common.module.css';

class HeaderTitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className={styles.center}>
                <h1>{this.props.title}</h1>
            </header>
        );
    }
}

export default HeaderTitle;
