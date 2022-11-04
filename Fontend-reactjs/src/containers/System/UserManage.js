import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
class UserManage extends Component {

    state = {
       

    }

    componentDidMount() {

    }
   


    render() {
        return (
            <div className='manager-doctor'>
                    <ul className='list-doctor'>List Doctor
                        <li className='item-doctor'>Ngo Quang Khoa1</li>
                    </ul>


            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
