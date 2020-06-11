import React, { Component } from 'react';
import HeaderTitle from '../../Common/HeaderTitle.js';
import Search from '../../Common/Search.js';
import styles from '../../Common/common.module.css';
import SchoolTable from './SchoolTable.js';
import { SCHOOLS_DUMMY } from '../../../data/dataList';
import Select from 'react-select';
import { filterStatusData } from '../../../data/dataList';
import UpdatePage from '../Update/UpdatePage.js';

class TerunaHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schoolsData: SCHOOLS_DUMMY,
            options: filterStatusData,
            updateClicked: false,
        };
        this.handleUpdateClick = this.handleUpdateClick.bind(this);
        this.handleUpdateDone = this.handleUpdateDone.bind(this);


    }

    handleUpdateClick() {
        this.setState({ updateClicked: true });
    }

    handleUpdateDone() {
        this.setState({ updateClicked: false });
    }

    render() {
        const {
            schoolsData,
            options,
            updateClicked
        } = this.state;
        let showPage = (
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
                    handleUpdateClick={this.handleUpdateClick}
                />
            </div>
        );
        if (updateClicked) {
            showPage = <UpdatePage
                handleUpdateDone={this.handleUpdateDone}
            />
        }
        return (
            <div>
                {showPage}
            </div>
        );
    }
}

export default TerunaHome;
