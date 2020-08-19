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



class JournalPageTableItem extends Component {

    state = {
        id: '',
        date: this.setDate(),
        feeling: '',
        symptoms: '',
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
                        <TableCell className="journalTableItemCell">{item.feeling}</TableCell>
                        <TableCell className="journalTableItemCell">{item.symptom}</TableCell>
                        <TableCell className="journalTableItemCell"><CreateIcon rowid={item.id} onClick={this.editJournal(item.id)} ></CreateIcon></TableCell>
                        <TableCell className="journalTableItemCell" align="right"><DeleteForeverTwoToneIcon id={item.id} onClick={this.deleteEntry(item.id)} /></TableCell>

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
                                <Typography component="h1" variant="h5">
                                    Health Journal
                                </Typography>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Date</TableCell>
                                            <TableCell>How Are You Feeling?</TableCell>
                                            <TableCell>What Symptoms Are You Experiencing?</TableCell>
                                            <TableCell>Edit</TableCell>
                                            <TableCell align="right">DELETE</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    {formArray}
                                </Table>
                            </div>
                        </Container>
                    </Card>
                </div>
            </>
        )
    }
}

export default connect(mapStoreToProps)(JournalPageTableItem);
