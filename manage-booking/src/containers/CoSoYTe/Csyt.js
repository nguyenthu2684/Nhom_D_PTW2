import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './csyt.scss';


import { Link } from 'react-router-dom';


const userData = React.useState



class CosoYTe extends Component {
    state = {
        filter: "",
        data: [
            {
                name: "Bệnh viện hữu nghị Việt Đức",
                address: "Thành Phố Hồ Chí Minh",


            },
            {
                name: "Bệnh viện chợ rẫy",
                address: "Thành Phố Hồ Chí Minh",

            },
            {
                name: "Bệnh viện đại học y dược",
                address: "Quảng Ngãi",

            },
            {
                name: "Bệnh viện ung bướu Hưng Việt",
                address: "Đà Nẵng",

            }, {
                name: "Phòng Khám đa khoa Sài Gòn",
                address: "Thành Phố Hồ Chí Minh",

            },
            {
                name: "Bệnh viện đa khoa Hồng Phát",
                address: "Đồng Nai",

            },
            {
                name: "Bệnh viện Nam học và Hiếm muộn Hà Nội",
                address: "Hà Nội",

            },
            {
                name: "Bệnh viện K",
                address: "Phan Chu Trinh",

            },
            {
                name: "Phòng Khám Ngọc Yến",
                address: "Quảng Ngãi",

            },
            {
                name: "Phòng Khám răng",
                address: "Nha Trang",

            }
        ]
    };

    handleChange = event => {
        this.setState({ filter: event.target.value });
    };

    render() {
        const { filter, data } = this.state;
        const lowercasedFilter = filter.toLowerCase();
        const filteredData = data.filter(item => {
            return Object.keys(item).some(key =>
                item[key].toLowerCase().includes(lowercasedFilter)
            );
        });
        return (
            <div className='container'>


                <div className='find'>
                    <div className='header-csyt'>
                        <Link className="btn-logout" to="/home">
                            <i className="fas fa-sign-out-alt" ></i>
                           
                        </Link>
                        <h2> Bệnh viện, phòng khám</h2>

                    </div>



                    <div>
                        <input className='input-find' value={filter} onChange={this.handleChange} />
                        {filteredData.map(item => (
                            <div key={item.name}>
                                <div className='text-find'>
                                    {item.name} - {item.address}
                                </div>
                            </div>
                        ))}
                    </div>


                </div>

            </div>

        )
    }
}




const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),

        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CosoYTe);
