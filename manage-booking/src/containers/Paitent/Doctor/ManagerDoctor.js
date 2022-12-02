import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ManagerDoctor.scss';
import axios from 'axios';






class ManagerDoctor extends Component {
    constructor(props){
        super(props);
        this.state= {
            managerData: [],
        };

    }
    async componentDidMount(){
        let res = await axios .get('api/specialist/getAll')
        this.setState({
            managerData: res,
        });
        console.log('check data',res)
        
    }


    render() {
        
        return (
            <div>Hello</div>
        
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

export default connect(mapStateToProps, mapDispatchToProps)(ManagerDoctor);
