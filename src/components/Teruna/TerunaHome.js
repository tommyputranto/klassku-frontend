import React, { Component } from 'react';
import HeaderTitle from '../Common/HeaderTitle.js';
import Search from '../Common/Search.js';
import styles from '../Common/common.module.css';
import SchoolTable from './SchoolTable.js';
import { SCHOOLS_DUMMY } from '../../data/dataList';
import Select from 'react-select';
import { filterStatusData } from '../../data/dataList';


class TerunaHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schoolsData: SCHOOLS_DUMMY,
            options: filterStatusData
        };
    }

    render() {
        const {
            schoolsData,
            options
        } = this.state;

        return (
            <div>
                <HeaderTitle title="Teruna Home" />
                <div className={styles.half_left}>
                    <Search />
                </div>
                <div className={styles.half_right}>
                    <Select
                        isClearable={true}
                        placeholder='Filter status'
                        className={styles.select}
                        isSearchable={false}
                        options={options} />
                </div>


                <SchoolTable
                    SchoolsData={schoolsData}
                />
            </div>
        );
    }
}

export default TerunaHome;
