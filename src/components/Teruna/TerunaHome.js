import React, { Component } from 'react';
import HeaderTitle from '../Common/HeaderTitle.js';
import Search from '../Common/Search.js';
import styles from '../Common/common.module.css';
import SchoolTable from './SchoolTable.js';
import { SCHOOLS_DUMMY } from '../../data/schoolsDummy';

class TerunaHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schoolsData: SCHOOLS_DUMMY
          };
      
    }

    render() {
        const {
            schoolsData
          } = this.state;
      
        return (
            <div>
                <HeaderTitle title="Teruna Home" />
                <div className={styles.half}>
                    <Search />
                </div>
                <SchoolTable
                    SchoolsData={schoolsData}
                />
            </div>
        );
    }
}

export default TerunaHome;
