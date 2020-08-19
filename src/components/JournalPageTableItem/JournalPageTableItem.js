import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from "@material-ui/core/Card";
import Table from "@material-ui/core/Table";
import mapStoreToProps from '../../redux/mapStoreToProps';
import './JournalPageTableItem.css';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import CreateIcon from '@material-ui/icons/Create';
import JournalPageForm from '../JournalPageForm/JournalPageForm';
import AppFooter from '../NewLandingPage/modules/views/AppFooter';
import swal from 'sweetalert';



class JournalPageTableItem extends Component {

    state = {
        id: '',
        date: this.setDate(),
        feeling: '',
        symptoms: '',
        medication: '',
        contact: '',
    };

    getId = (rowid) => {
        console.log(rowid);
    }

    editJournal = (rowid) => (event) => {
        console.log(rowid);
        this.props.history.push({
            pathname: `/editjournal/${rowid}`,
            state: { data: rowid }
        });
    }


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
        console.log(id);
        this.props.dispatch({
            type: 'DELETE_FORM',
            payload: { id },
        });
    }

    onInputChange = (input) => (event) => {
        this.setState({
            [input]: (event.target.value),
        }, () => { console.log(this.state) });
    };

    setDate() {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;
        let today = month + "-" + day + "-" + year;
        return today;
    }

    render() {
        const formArray = this.props.store.formReducer.map((item, i) => {
            return (
                <TableBody>
                    <TableRow className="journalTableItemRow" className="journalTableItemRow">
                        <TableCell className="journalTableItemCell">{item.date}</TableCell>
                        <TableCell className="journalTableItemCell" rowFeeling={item.feeling}>{item.feeling}</TableCell>
                        <TableCell className="journalTableItemCell" rowSymptom={item.symptom}>{item.symptom}</TableCell>
                        <TableCell className="journalTableItemCell" rowMedication={item.medication}>{item.medication}</TableCell>
                        <TableCell className="journalTableItemCell" rowContact={item.contact}>{item.contact}</TableCell>
                        <TableCell className="journalTableItemCell"><CreateIcon className="tableEditIcon" rowid={item.id} onClick={this.editJournal(item.id)} ></CreateIcon></TableCell>
                        <TableCell className="journalTableItemCell" align="right"><DeleteForeverTwoToneIcon className="tableDeleteIcon" id={item.id} onClick={this.deleteEntry(item.id)} /></TableCell>

                    </TableRow>
                </TableBody>
            )
        })
        return (
            <>
                <JournalPageForm />
                <div className="tableDiv">

                    <Card className="tableCard">
                        <Container className="tableContainer" component="main" maxWidth="xs">
                            <CssBaseline />
                            <div className="tablePaper">

                                <Table size="large">
                                    <TableHead>
                                        <TableRow className="tableRow">
                                            <TableCell className="titleCell">Date</TableCell>
                                            <TableCell className="titleCell">Overall Feeling</TableCell>
                                            <TableCell className="titleCell">Symptoms Experienced</TableCell>
                                            <TableCell className="titleCell">Medications</TableCell>
                                            <TableCell className="titleCell">Contact With Anyone Diagnosed with COVID</TableCell>
                                            <TableCell className="titleCell">Edit</TableCell>
                                            <TableCell className="titleCell" align="right">DELETE</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    {formArray}
                                </Table>
                            </div>
                        </Container>
                    </Card>
                    <AppFooter />
                </div>
            </>
        )
    }
}

export default connect(mapStoreToProps)(JournalPageTableItem);
