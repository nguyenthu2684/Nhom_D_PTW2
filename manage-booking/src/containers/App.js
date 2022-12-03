import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux'
import { ToastContainer } from 'react-toastify';
import DetailDoctor from './Paitent/Doctor/DetailDoctor';
import Csyt from './CoSoYTe/Csyt';


import { userIsAuthenticated, userIsNotAuthenticated } from '../hoc/authentication';

import { path } from '../utils'

import Home from '../routes/Home';
// import Login from '../routes/Login';
import Login from './Auth/Login';

import Header from './Header/Header';
import System from '../routes/System';

import { CustomToastCloseButton } from '../components/CustomToast';
import Homepage from './Homepage/HomePage.js';

import CustomScrollbars from '../components/CustomScrollbars';
import SendMail from './Auth/SendMail';
import ChangePassWord from './Auth/ChangePassWord';
import CosoYTe from './CoSoYTe/Csyt';
import PageNotFound from './Auth/PageNotFound';
import BacSi from './BacSi/BacSi';


class App extends Component {


    handlePersistorState = () => {
        const { persistor } = this.props;
        let { bootstrapped } = persistor.getState();
        if (bootstrapped) {
            if (this.props.onBeforeLift) {
                Promise.resolve(this.props.onBeforeLift())
                    .then(() => this.setState({ bootstrapped: true }))
                    .catch(() => this.setState({ bootstrapped: true }));
            } else {
                this.setState({ bootstrapped: true });
            }
        }
    };

    componentDidMount() {
        this.handlePersistorState();
    }

    render() {
        return (
            <Fragment>
                <Router history={history}>
                    <div className="main-container">
                        {this.props.isLoggedIn && <Header />}

                        <div className="coCustomScrollbarsntent-container">
                            <CustomScrollbars style={{ width: '100%', height: '100vh' }}>
                                <Switch>
                                    <Route path={path.HOME} exact component={() => <Redirect to={path.HOMEPAGE} />} />
                                    <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
                                    <Route path={path.SYSTEM} component={userIsAuthenticated(System)} />
                                    <Route path={path.HOMEPAGE} component={Homepage} />
                                    <Route path='/detailDoctor' component={DetailDoctor} />
                                    <Route path='/sendMail' component={SendMail} />
                                    <Route path='/changePass' component={ChangePassWord} />
                                    <Route path='/csyt' component={CosoYTe} />
                                    <Route path='/bs' component={BacSi} />
                                    <Route path='/*' component={PageNotFound} />
                                </Switch>
                            </CustomScrollbars>
                        </div>

                        <ToastContainer
                            className="toast-container" toastClassName="toast-item" bodyClassName="toast-item-body"
                            autoClose={false} hideProgressBar={true} pauseOnHover={false}
                            pauseOnFocusLoss={true} closeOnClick={false} draggable={false}
                            closeButton={<CustomToastCloseButton />}
                        />
                    </div>
                </Router>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        started: state.app.started,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);