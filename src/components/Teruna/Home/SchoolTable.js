import React, { Component } from 'react';
import styles from '../../Common/common.module.css';


class SchoolTable extends Component {
    render() {
        // const { employeesData, handleEditClick, handleDelete } = this.props;
        const { SchoolsData, handleUpdateClick, handleOrderClick } = this.props;

        for (let i = 0; i < SchoolsData.length; i++) {
            SchoolsData[i].id = i + 1;
        }

        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: null
        });

        return (
            <div className={styles.center}>
                <div className="contain-table">
                    <table className="striped-table">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>NPSN</th>
                                <th>Nama Sekolah</th>
                                <th>Kecamatan</th>
                                <th>Kota</th>
                                <th>Status</th>
                                <th colSpan={2} className="text-center">
                                    Actions
                    </th>
                            </tr>
                        </thead>
                        <tbody>
                            {SchoolsData.length > 0 ? (
                                SchoolsData.map((school, i) => (
                                    <tr key={school.id}>
                                        <td>{i + 1}</td>
                                        <td>{school.npsn}</td>
                                        <td>{school.schoolName}</td>
                                        <td>{school.district}</td>
                                        <td>{school.city}</td>
                                        <td>{school.status} </td>
                                        <td className="text-right">
                                            <button
                                                onClick={() => handleUpdateClick()}
                                                className="button muted-button">
                                                Update
                                        </button>
                                        </td>
                                        <td className="text-left">
                                            <button
                                                onClick={() => handleOrderClick()}
                                                className="button muted-button">
                                                Order
                                        </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                    <tr>
                                        <td colSpan={7}>No Data</td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default SchoolTable;
