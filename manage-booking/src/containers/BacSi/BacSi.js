// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { push } from "connected-react-router";
// import * as actions from "../../store/actions";
// import TableItem from "./TableItem";
// import './BacSi.scss'
// import { Link } from 'react-router-dom';


// const userData = React.useState



// class BacSi extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           newsList: [
//             {
//               id: "1",
//               title: "The Highs and Lows of Life as a Black Editor in Chief",
//               content: "ct1"
//             },
//             {
//               id: "2",
//               title: "The Real Reason Apple Wants You to Use Its Sign-in Service",
//               content: "ct2"
//             },
//             {
//               id: "3",
//               title: "Men Need To Think More About Fertility",
//               content: "ct3"
//             },
//             {
//               id: "4",
//               title: "Reactive Streams and Kotlin Flows",
//               content: "ct4"
//             },
//             {
//               id: "5",
//               title: "The Incredible Creative Power of the Index Card",
//               content: "ct5"
//             },
//             {
//               id: "6",
//               title: "The Man Who Helped the Beatles Admit It’s Getting Better",
//               content: "ct6"
//             },
//             {
//               id: "7",
//               title: "Facebook Can Resolve Its Issues — How Will We Resolve Ours?",
//               content: "ct7"
//             },
//             {
//               id: "8",
//               title: "The Personal Newsletter Fad Needs to End",
//               content: "ct8"
//             },
//             {
//               id: "9",
//               title: "How Do You Know You Have a Good Idea?",
//               content: "ct9"
//             },
//             {
//               id: "10",
//               title: "Ronaldo & Messi",
//               content: "ct10"
//             }
//           ],
//           currentPage: 1,
//           newsPerPage: 3
//         };
//       }
//       chosePage = (event) => {
//         this.setState({
//           currentPage: Number(event.target.id)
//         });
//       };
//     render() {

//         const { newsList, currentPage, newsPerPage } = this.state;
//     const indexOfLastNews = currentPage * newsPerPage;
//     const indexOfFirstNews = indexOfLastNews - newsPerPage;
//     const currentTodos = newsList.slice(indexOfFirstNews, indexOfLastNews);
//     const renderTodos = currentTodos.map((todo, index) => {
//       return (
//         <TableItem
//           stt={index + 1 + (currentPage - 1) * newsPerPage}
//           key={index}
//           data={todo}
//         />
//       );
//     });
//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(newsList.length / newsPerPage); i++) {
//       pageNumbers.push(i);
//     }
//     return (
//       <div className="App">
//         <table className="table">
//           <tbody>{renderTodos}</tbody>
//         </table>
//         <div className="pagination-custom">
//           <ul id="page-numbers">
//             {pageNumbers.map((number) => {
//               if (this.state.currentPage === number) {
//                 return (
//                   <li key={number} id={number} className="active">
//                     {number}
//                   </li>
//                 );
//               } else {
//                 return (
//                   <li key={number} id={number} onClick={this.chosePage}>
//                     {number}
//                   </li>
//                 );
//               }
//             })}
//           </ul>
//         </div>
//       </div>
//     );
//   }

// }




// const mapStateToProps = state => {
//     return {
//         language: state.app.language
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         navigate: (path) => dispatch(push(path)),

//         // userLoginFail: () => dispatch(actions.adminLoginFail()),
//         userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(BacSi);
import "./BacSi.scss";
import React, { Component } from "react";
import TableItem from "./TableItem";

import { Link } from 'react-router-dom';
class BacSi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsList: [
                {
                    id: "1",
                    title: "Phó giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng",
                    content: "ct1"
                },
                {
                    id: "2",
                    title: "Bác Sĩ chuyên khoa II Trần Minh Khuyên",
                    content: "ct2"
                },
                {
                    id: "3",
                    title: "Bác sĩ chuyên Khoa I Phí Thị Nga",
                    content: "ct3"
                },
                {
                    id: "4",
                    title: "Giáo sư, Tiến sĩ Hà Văn Quyết",
                    content: "ct4"
                },
                {
                    id: "5",
                    title: "Tiến sĩ, Bác sĩ Vũ Thái Hà",
                    content: "ct5"
                },
                {
                    id: "6",
                    title: "Bác sĩ chuyên khoa II Huỳnh Thanh Hương",
                    content: "ct6"
                },
                {
                    id: "7",
                    title: "Phó giáo sư, Tiến sĩ Phạm Hồng Thái",
                    content: "ct7"
                },
                {
                    id: "8",
                    title: "The Personal Newsletter Fad Needs to End",
                    content: "ct8"
                },
                {
                    id: "9",
                    title: "Bác sĩ chuyên khoa II Đinh Thị Loan",
                    content: "ct9"
                },
                {
                    id: "10",
                    title: "Tiến sĩ, Bác sĩ Trần Minh Tiến",
                    content: "ct10"
                }
            ],
            currentPage: 1,
            newsPerPage: 3
        };
    }

    chosePage = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    };

    render() {
        const { newsList, currentPage, newsPerPage } = this.state;
        const indexOfLastNews = currentPage * newsPerPage;
        const indexOfFirstNews = indexOfLastNews - newsPerPage;
        const currentTodos = newsList.slice(indexOfFirstNews, indexOfLastNews);
        const renderTodos = currentTodos.map((todo, index) => {
            return (
                <TableItem
                    stt={index + 1 + (currentPage - 1) * newsPerPage}
                    key={index}
                    data={todo}
                />
            );
        });
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(newsList.length / newsPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <div className="doctor">
                <div className='header-csyt'>
                    <Link className="btn-logout" to="/home">
                        <i className="fas fa-sign-out-alt" ></i>

                    </Link>
                    <h2> Bác sĩ</h2>

                </div>

                <div className="App">

                    <table className="table">
                        <tbody>{renderTodos}</tbody>
                    </table>
                    <div className="pagination-custom">
                        <ul id="page-numbers">
                            {pageNumbers.map((number) => {
                                if (this.state.currentPage === number) {
                                    return (
                                        <li key={number} id={number} className="active">
                                            {number}
                                        </li>
                                    );
                                } else {
                                    return (
                                        <li key={number} id={number} onClick={this.chosePage}>
                                            {number}
                                        </li>
                                    );
                                }
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default BacSi;
