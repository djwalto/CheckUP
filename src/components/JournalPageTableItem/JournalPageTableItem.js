import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Table from "@material-ui/core/Table";
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import CreateIcon from '@material-ui/icons/Create';
import swal from 'sweetalert';

// CUSTOM COMPONENTS
import JournalPageForm from '../JournalPageForm/JournalPageForm';
import AppFooter from '../NewLandingPage/modules/views/AppFooter';
import './JournalPageTableItem.css';

// component listing journal entries on table 
// with ability to edit and delete
class JournalPageTableItem extends Component {
    state = {
        id: '',
        date: this.setDate(),
        feeling: '',
        symptoms: '',
        medication: '',
        contact: '',
    };// end state

    // sends id and index to EditJournalPage component 
    editJournal = (rowid, index) => (event) => {
        this.props.history.push({
            pathname: `/editjournal/${rowid}`,
            state: {
                data: rowid
            }
        });
    };// end editJournal

    // uses alert to confirm entry delete
    // dispatches to saga for delete with id as payload
    deleteEntry = (id) => (event) => {
        swal({
            title: "Are you sure you want to delete entry?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Entry has been deleted", {
                        icon: "success",
                    });
                } else {
                    swal("Entry saved");
                }
            });
        this.props.dispatch({
            type: 'DELETE_FORM',
            payload: { id },
        });
    };//end deleteEntry

    // captures change on each input
    onInputChange = (input) => (event) => {
        this.setState({
            [input]: (event.target.value),
        }, () => { console.log(this.state) });
    };//end onInputChange

    // sets todays date as entry date on health journal
    setDate() {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;
        let today = month + "-" + day + "-" + year;
        return today;
    }// end setDate

    render() {
        const formArray = this.props.store.formReducer.map((item, index) => {
            return (
                <TableBody className="tableBody">
                    <TableRow className="journalTableItemRow" className="journalTableItemRow">
                        <TableCell className="journalTableItemCell">{item.date}</TableCell>
                        <TableCell className="journalTableItemCell" rowFeeling={item.feeling}>{item.feeling}</TableCell>
                        <TableCell className="journalTableItemCell" rowSymptom={item.symptom}>{item.symptom}</TableCell>
                        <TableCell className="journalTableItemCell" rowMedication={item.medication}>{item.medication}</TableCell>
                        <TableCell className="journalTableItemCell" rowContact={item.contact}>{item.contact}</TableCell>
                        <TableCell className="journalTableItemCell"><CreateIcon className="tableEditIcon" rowIndex={index} rowid={item.id} onClick={this.editJournal(item.id, index)} ></CreateIcon></TableCell>
                        <TableCell className="journalTableItemCell" align="right"><DeleteForeverTwoToneIcon className="tableDeleteIcon" id={item.id} onClick={this.deleteEntry(item.id)} /></TableCell>
                    </TableRow>
                </TableBody>
            )
        })
        return (
            <>
                <div className="journalMainDiv">
                    <JournalPageForm />
                    <div className="tableDiv">
                        <Container className="tableContainer" component="main" maxWidth="xl">
                            <CssBaseline />
                            <Table className="mainTable" size="large">
                                <TableHead className="headerMain">
                                    <TableRow className="tableRow">
                                        <TableCell className="titleCell" align="left">Date</TableCell>
                                        <TableCell className="titleCell" align="center" >Overall Feeling</TableCell>
                                        <TableCell className="titleCell" align="center">Symptoms Experienced</TableCell>
                                        <TableCell className="titleCell" align="center">Medications</TableCell>
                                        <TableCell className="titleCell" align="center">Contact With Anyone Diagnosed with COVID</TableCell>
                                        <TableCell className="titleCell" align="center">Edit</TableCell>
                                        <TableCell className="titleCell" align="right">Delete</TableCell>
                                    </TableRow>
                                </TableHead>
                                {formArray}
                            </Table>
                        </Container>
                        <AppFooter />
                    </div>
                </div>
            </>
        )
    }
};// end JournalPageTableItem

export default connect(mapStoreToProps)(JournalPageTableItem);
