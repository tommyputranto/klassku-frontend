import React, { Component } from 'react';
import HeaderTitle from '../../Common/HeaderTitle.js';
import Select from 'react-select';
import { filterStatusData } from '../../../data/dataList';
import styles from '../../Common/common.module.css';
const names1 = ['James', 'Paul', 'John', 'George', 'Ringo'];

class UpdatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fiter: filterStatusData,
            names: names1
        };

    }

    handleFilterChange(value) {
        let {
            names
        } = this.state;
        switch (value.value) {
            case "S01":
                names = ['John', 'Georges'];

                break;

            default:
                names = ['James', 'Paul', 'John', 'George', 'Ringo', 'Ringo'];
                break;
        }
        this.setState({ names: names});
    }


    render() {
        const {
            fiter,
            names
        } = this.state;
        
        const { 
            handleUpdateDone 
        } = this.props;

        let test = names.map(name => {
            return (
                <div>
                    <label htmlFor={name}>{name}</label>
                    <input
                        id={name}
                        type="text"
                        value="3"
                        readonly
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
                        <form>
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
