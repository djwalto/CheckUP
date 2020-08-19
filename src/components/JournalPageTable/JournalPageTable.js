// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// //import JournalPageTableItem from '../JournalPageTableItem/JournalPageTableItem';

// import mapStoreToProps from '../../redux/mapStoreToProps';
// import JournalPageTableItem from '../JournalPageTableItem/JournalPageTableItem';
// import '../JournalPageTable/JournalPageTable.css';


// class JournalPageTable extends Component {
//     state = {
//         user_id: this.props.store.user.id,
//         date: this.setDate(),
//         feeling: '',
//         symptoms: '',
//     };



//     componentDidMount() {

//         console.log(this.props.store.user.username);
//         this.props.dispatch({ type: 'GET_FORM' });
//     }



//     onInputChange = (input) => (event) => {
//         this.setState({
//             [input]: (event.target.value),
//         }, () => { console.log(this.state) });
//     };

//     setDate() {
//         let date = new Date();
//         let day = date.getDate();
//         let month = date.getMonth() + 1;
//         let year = date.getFullYear();
//         if (month < 10) month = "0" + month;
//         if (day < 10) day = "0" + day;
//         let today = month + "-" + day + "-" + year;
//         return today;

//     }
//     onClick = (event) => {



//         this.setDate();
//         // if (this.state.feeling === '' || this.state.symptoms === '') {
//         //     alert('You forgot to answer!');
//         //     return;
//         // }
//         // this.addToState();
//         console.log(this.state);
//         this.props.dispatch({
//             type: 'POST_FORM',
//             payload: this.state
//         }
//         );
//         this.props.history.push('/editjournal');
//     };




//     render() {
//         return (
//             //     <>
//             //         <>
//             //             <div className="journalFormDiv">
//             //                 <CssBaseline />


//             //                 <div className="userWelcome">
//             //                     <Avatar className="userAvatar">
//             //                         <PersonIcon />
//             //                     </Avatar>
//             //                     <div className="journalGreeting"><h1>{this.props.store.user.username}</h1></div>


//             //                 </div>
//             //                 <Card className="journalFormCard">
//             //                     <Container className="journalFormContainer" component="main" maxWidth="xs">
//             //                         <CssBaseline />
//             //                         <div className="journalFormPaper">


//             //                             <br></br>
//             //                             <br></br>
//             //                             <Avatar className="journalFormAvatar">
//             //                                 <BookIcon />
//             //                             </Avatar>
//             //                             <Typography component="h1" variant="h5">
//             //                                 Health Journal
//             //           </Typography>
//             //                             <form className="journalForm" noValidate>
//             //                                 <TextField

//             //                                     margin="normal"
//             //                                     required
//             //                                     fullWidth

//             //                                     label="How did you feel today?"


//             //                                     autoFocus
//             //                                     type="text"
//             //                                     name="feelings"
//             //                                     required
//             //                                     variant="outlined"
//             //                                     onChange={this.onInputChange('feeling')}
//             //                                 />
//             //                                 <TextField

//             //                                     margin="normal"
//             //                                     required
//             //                                     fullWidth

//             //                                     label="Did you have any symptoms today?"

//             //                                     variant="outlined"
//             //                                     autoFocus
//             //                                     type="text"
//             //                                     name="symptoms"
//             //                                     required

//             //                                     onChange={this.onInputChange('symptoms')}
//             //                                 />

//             //                                 <center>
//             //                                     <Button
//             //                                         type="submit"

//             //                                         variant="contained"
//             //                                         color="primary"
//             //                                         className="logbutton"
//             //                                         variant="contained"
//             //                                         color="primary"
//             //                                         type="submit"
//             //                                         value="Log In"
//             //                                         onClick={this.onClick}
//             //                                     >


//             //                                         Submit
//             //           </Button>
//             //                                 </center>

//             //                             </form>
//             //                         </div>
//             //                     </Container>
//             //                 </Card>

//             //             </div >
//             //         </>
//             <JournalPageTableItem />

//         )
//     }
// }



// export default connect(mapStoreToProps)(JournalPageTable);
