import React, { Component } from 'react';
import HeaderTitle from '../../Common/HeaderTitle.js';
import Select from 'react-select';
import { filterStatusData } from '../../../data/dataList';
import styles from '../../Common/common.module.css';
const SchoolsData = [
    {
        npsn: '20257280',
        schoolName: 'SD Cahaya Singapore Montessori',
        district: 'Sukmajaya',
        city: 'Depok',
        status: 'S00-Belum mendatangi sekolah (default)'
    },
    {
        npsn: '20228733',
        schoolName: 'SD GANESA SATRIA',
        district: 'Sukmajaya',
        city: 'Depok',
        status: 'S03-Sekolah menolak ikut pelatihan'
    }
];
class OrderPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fiter: filterStatusData,
        };

    }




    render() {
        const {
            fiter
        } = this.state;

        const {
            handleOrderBack
        } = this.props;

        return (
            <div className={styles.container}>
                <HeaderTitle title="Informasi Status Perekrutan Sekolah" />
                <form>
                    <div className={styles.half_left_50}>
                        <form>
                            <form className={styles.form_50}>
                                <label htmlFor="npsn">NPSN</label>
                                <input
                                    id="npsn"
                                    type="text"
                                    value="3"
                                    readonly
                                />
                                <label htmlFor="schoolName">Nama Sekolah</label>
                                <input
                                    id="schoolName"
                                    type="text"
                                    value="gfg3"
                                    readonly
                                />
                            </form>
                        </form>
                    </div>
                    <div className={styles.half_left_50}>
                        <form className={styles.form_50}>
                            <input
                                type="button"
                                onClick={handleOrderBack}
                                value="Back"
                                className={styles.button_form_grid_normal}
                            />
                            <input
                                type="button"
                                onClick={handleOrderBack}
                                value="Add Order"
                                className={styles.button_form_grid_normal}
                            />
                        </form>
                    </div>
                </form>
                <table className="striped-table">
                                <thead>
                                    <tr>
                                        <th>Order No.</th>
                                        <th>Total User Guru</th>
                                        <th>Total User Murid</th>
                                        <th>Status Order</th>
                                        <th>Status</th>
                                        <th>Actions</th>
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
                                                <td>{school.status} </td>
                                                <td>
                                                    <button
                                                        // onClick={() => handleUpdateClick()}
                                                        className="button muted-button">
                                                        Update
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


        );
    }
}

export default OrderPage;
