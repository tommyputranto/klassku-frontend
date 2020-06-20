import React, { Component } from 'react';
import HeaderTitle from '../../Common/HeaderTitle.js';
import Select from 'react-select';
import { filterStatusData } from '../../../data/dataList';
import { SUB_STATUS } from '../../../data/dataList';

import styles from '../../Common/common.module.css';

class UpdatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fiter: filterStatusData,
            substatus: []
        };

    }

    handleFilterChange(value) {
        let {
            substatus
        } = this.state;
        switch (value.value) {
            case "S0":
                substatus = [];
                break;
            case "S1":
                substatus = []
                break;
            case "S2b":
                substatus = ["f1"]
                break;
            case "S2a":
                substatus = ["f1", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11"]
                break
            case "S3b":
                substatus = ["f1", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11"]
                break
            case "S3a":
                substatus = ["f1", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12", "f13", "f14", "f15", "f16", "f17"]
                break
            case "S4":
                substatus = ["f1", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12", "f13", "f14", "f15", "f16", "f17", "f18", "f19","f20","f21","f22","f23","f24","f25"]
                break
            case "S5b":
                substatus = ["f1", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12", "f13", "f14", "f15", "f16", "f17", "f18", "f19","f20","f21","f22","f23","f24","f25", "f26"]
                break
            case "S5a":
                substatus = ["f1", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12", "f13", "f14", "f15", "f16", "f17", "f18", "f19","f20","f21","f22","f23","f24","f25", "f27", "f28", "f29", "f30"]
                break
            case "S6":
                substatus = ["f1", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12", "f13", "f14", "f15", "f16", "f17", "f18", "f19","f20","f21","f22","f23","f24","f25", "f27", "f28", "f29", "f30"]
                break
            case "S7":
                substatus = ["f1", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12", "f13", "f14", "f15", "f16", "f17", "f18", "f19","f20","f21","f22","f23","f24","f25", "f27", "f28", "f29", "f30"]
                break
            case "S8":
                substatus = ["f1", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12", "f13", "f14", "f15", "f16", "f17", "f18", "f19","f20","f21","f22","f23","f24","f25", "f27", "f28", "f29", "f30"]
                break
            case "S9":
                substatus = ["f1", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12", "f13", "f14", "f15", "f16", "f17", "f18", "f19","f20","f21","f22","f23","f24","f25", "f27", "f28", "f29", "f30"]
                break
            case "S10":
                substatus = ["f1", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12", "f13", "f14", "f15", "f16", "f17", "f18", "f19","f20","f21","f22","f23","f24","f25", "f27", "f28", "f29", "f30"]
                break
            default:
                substatus = [];
                break;
        }


        for (let i = 0; i < substatus.length; i++) {
            let status = SUB_STATUS.filter(function (data) {
                return data.key === substatus[i]
            }).map(function (data) {
                if (data.key === substatus[i]) {
                    return data.value;
                }
                return "";
            });
            substatus[i] = status
        }
        this.setState({ substatus: substatus });
    }



    render() {
        const {
            fiter,
            substatus
        } = this.state;

        const {
            handleUpdateDone
        } = this.props;

        let test = substatus.map(st => {
            return (
                <div className={styles.form_50_2}>
                    <label htmlFor={st}>{st}</label>
                    <input
                        id={st}
                        type="text"
                    />
                </div>
            )
        });

        return (
            <div className={styles.container}>
                <HeaderTitle title="Informasi Status Perekrutan Sekolah" />
                <div className={styles.half_left_50}>
                    <form>
                        <form className={styles.form}>
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
                            <label htmlFor="district">Kecamatan</label>
                            <input
                                id="district"
                                type="text"
                                value="3"
                                readonly
                            />
                            <label htmlFor="address">Alamat</label>
                            <input
                                id="address"
                                type="text"
                                value="3"
                                readonly
                            />
                            <input
                                type="button"
                                onClick={handleUpdateDone}
                                value="Update"
                                className={styles.button_form}
                            />


                        </form>
                        <form >
                            {test}
                        </form>
                    </form>


                </div>
                <div className={styles.half_right}>
                    <Select
                        onChange={value => this.handleFilterChange(value)}
                        placeholder='Filter status'
                        className={styles.select}
                        isSearchable={false}
                        defaultValue={fiter[0]}
                        options={fiter} />
                </div>
            </div>
        );
    }
}

export default UpdatePage;
