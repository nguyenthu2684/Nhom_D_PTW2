import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';





class HomeFooter extends Component {

    render() {
        
        return (
            <div className='home-footer'>
                <p>&copy; 2020 Ngo Quang Khoa</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
