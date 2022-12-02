import React, { Component } from 'react';
import { connect } from 'react-redux';
import './InfoDoctor.scss';
import axios from 'axios';
import LikeAndShare from '../SocailPlugin/LikeAndShare';






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
        let currentURL = process.env.REACT_APP_IS_LOCALHOST == true ?
        "https://main--booking-doctor.netlify.app/": window.location.href;
        
        return (
            <div className='like-share-plugin'>
                <LikeAndShare
                dataHref= {currentURL}
                />
            </div>
            
            // <div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="" data-layout="standard" data-action="like" data-size="small" data-share="true"></div>
        
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
