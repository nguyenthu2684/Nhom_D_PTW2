import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService';
// import { LANGUAGES } from '../../../utils';
import * as actions from '../../../store/actions';
class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr:[],
            roleArr: [],
            positionArr:[],
        }
    }
    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();

        // try {
        //    let res = await getAllCodeService('gender');
        //    if(res && res.errCode ===0){
        //     this.setState({
        //         genderArr: res.data
        //     })
        //    }
        //    console.log("check res",res);
        // }catch(e) {

        // }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {


        if(prevProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr: this.props.genderRedux

            })
        }

        if(prevProps.roleRedux !== this.props.roleRedux) {
            this.setState({
                roleArr: this.props.roleRedux

            })
        }

        if(prevProps.positionRedux !== this.props.positionRedux) {
            this.setState({
                positionArr: this.props.positionRedux

            })
        }
    }

    render() {
        
        let genders = this.props.genderArr;
        let roles = this.props.roleArr;
        let language =this.props.language;
        let isGetGender = this.props.isLoadingGender;
        


       console.log('NQK check state compoment',this.state);
        return (
    
            <div className='user-redux-container'>
                <div className='title'>
                    Learn redux Quang Khoa
                </div> 

                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'><FormattedMessage id='manage-user.add'/></div>
                                            
                            <div className='col-3'>
                                <label><FormattedMessage id='manage-user.email'/> </label>
                                <input className='form-control' type='email'/>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id='manage-user.password'/></label>
                                <input className='form-control' type='password'/>
                            </div>

                            <div className='col-3'>
                                <label><FormattedMessage id='manage-user.first-name'/></label>
                                <input className='form-control' type='text'/>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id='manage-user.last-name'/></label>
                                <input className='form-control' type='text'/>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id='manage-user.phone-number'/></label>
                                <input className='form-control' type='text'/>
                            </div>
                            <div className='col-9'>
                                <label><FormattedMessage id='manage-user.address'/></label>
                                <input className='form-control' type='text'/>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id='manage-user.gender'/></label>
                               <select className='form-control'>
                                {genders && genders.length >0 &&
                                genders.map((item,index)=> {
                                    return(
                                        <option key={index}>{item.valueEn}</option>
                                    )

                                })
                                }

                                    
                               </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id='manage-user.position'/></label>
                               <select className='form-control'>
                                    <option selected>Choose</option>
                                    <option>...</option>
                               </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id='manage-user.role'/></label>
                               <select className='form-control'>
                                    {roles && roles.length >0 && roles.map((item,index)=>{
                                        console.log('Item',item);
                                        return(
                                            <option key={index}>{item.valueVi}</option>
                                        )
                                    })}
                                
                               </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id='manage-user.image'/></label>
                                <input className='form-control' type='text'/>
                               
                            </div>
                            <div className='col-12'>
                                <button className='btn btn-primary'><FormattedMessage id='manage-user.save'/></button>

                            </div>


                        </div>

                    </div>
                    
                </div>

            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        genderRedux: state.admin.genders,
        roleRedux : state.admin.roles,
        positionRedux : state.admin.positions,
        genderRedux: state.admin.isLoadingGender
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: ()=> dispatch(actions.fetchGenderStart()),
        getPositionStart: ()=> dispatch(actions.fetchPositionStart()),
        getRoleStart: ()=> dispatch(actions.fetchRoleStart())


       // processLogout: () => dispatch(actions.processLogout()),
       // changeLanguageAppRedux: (language)=>dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
