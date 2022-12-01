import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';
import MedicalFacility from './Section/MedicalFacility';
import OutStandingDoctor from './Section/OutStandingDoctor';
import HandBook from './Section/HandBook';
import About from './Section/About';
import HomeFooter from './HomeFooter';


import './HomePage.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Redirect } from 'react-router';
import { path } from '../../utils';

class HomePage extends Component {

    render() {

        const { userInfo } = this.props;

        if (userInfo?.auth === 0) {
            return <Redirect to={path.SYSTEM} />
        }
        let settings = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
        };



        return (
            <div>
                <HomeHeader />
                {<Specialty settings={settings} />}
                <MedicalFacility settings={settings} />
                {<OutStandingDoctor settings={settings} />}

                <About />
                {<HandBook settings={settings} />}
                <HomeFooter />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user?.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
