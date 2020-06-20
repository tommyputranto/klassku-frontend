import React, { Component } from 'react';
import HeaderTitle from '../../Common/HeaderTitle.js';
import Search from '../../Common/Search.js';
import styles from '../../Common/common.module.css';
import SchoolTable from './SchoolTable.js';
// import { SCHOOLS_DUMMY } from '../../../data/dataList';
import Select from 'react-select';
import { filterStatusData } from '../../../data/dataList';
import UpdatePage from '../Update/UpdatePage.js';
import OrderPage from '../Order/OrderPage.js';

import Swal from 'sweetalert2';
import axios from 'axios';
import { URL } from '../../../data/helper';

class TerunaHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schoolsData: [],
            options: filterStatusData,
            updateClicked: false,
            orderClicked: false,
        };

        this.props = {
            id: ""
        }

        this.handleUpdateClick = this.handleUpdateClick.bind(this);
        this.handleUpdateDone = this.handleUpdateDone.bind(this);
        this.handleOrderBack = this.handleOrderBack.bind(this);
        this.handleOrderClick = this.handleOrderClick.bind(this);


    }

    handleUpdateClick(data) {
        this.setState({ updateClicked: true, schoolsData: data });
    }

    handleUpdateDone(npsn, status_sell) {
        this.updateData(npsn, status_sell)
        this.getData()
        this.setState({ updateClicked: false });
    }

    handleOrderClick() {
        this.setState({ orderClicked: true });
    }

    handleOrderBack() {
        this.setState({ orderClicked: false });
    }

    componentDidMount() {
        this.getData()
    }

    updateData(npsn, status_sell) {

        const options = {
            url: URL + 'update/' + npsn,
            method: 'POST',
            data: {
                status_sell: status_sell
            }
        };


        axios(options)
            .then(
                this.getData()
            ).catch((error) => {

            });
    }

    getData() {
        const {
            id
        } = this.props;
        const options = {
            url: URL + 'home/' + id,
            method: 'GET'

        };

        axios(options)
            .then(parseJson => parseJson.data.data.map(data => ({
                    npsn: `${data.npsn}`,
                    schoolName: `${data.school_name}`,
                    district: `${data.district}`,
                    city: `${data.city}`,
                    status: `${data.status_sell}`,
                    address: `${data.address}`
                }
            ))
            ).then(data => {
                this.setState({ schoolsData: data })
            }).catch((error) => {

            });
    }

    render() {

        const {
            schoolsData,
            options,
            updateClicked,
            orderClicked
        } = this.state;
       
        let showPage = (
            <div className={styles.center}>
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
                    handleOrderClick={this.handleOrderClick}
                />
            </div>
        );
        if (updateClicked) {
            showPage = <UpdatePage
                handleUpdateDone={this.handleUpdateDone}
                data={schoolsData}
            />
        }


        if (orderClicked) {
            showPage = <OrderPage
                handleOrderBack={this.handleOrderBack}
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
