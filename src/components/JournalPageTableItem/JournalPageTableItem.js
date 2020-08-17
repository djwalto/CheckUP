import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
//import JournalPageTableItem from '../JournalPageTableItem/JournalPageTableItem';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Title from "@material-ui/icons/Title";
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from "@material-ui/core/Card";
import Table from "@material-ui/core/Table";
import mapStoreToProps from '../../redux/mapStoreToProps';
import './JournalPageTableItem.css';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';

class JournalPageTableItem extends Component {

    deleteEntry = (event) => (index) => {
        console.log(index);
    }

    render() {



        const formArray = this.props.store.formReducer.map((item, index) => {
            return (
                <TableBody>
                    <TableRow className="journalTableItemRow" key={index} className="journalTableItemRow">
                        <TableCell className="journalTableItemCell">Date</TableCell>
                        <TableCell className="journalTableItemCell">{item.feeling}</TableCell>
                        <TableCell className="journalTableItemCell">{item.symptom}</TableCell>
                        <TableCell className="journalTableItemCell">Edit</TableCell>
                        <TableCell className="journalTableItemCell" align="right"><DeleteForeverTwoToneIcon onClick={this.deleteEntry(item, index)} /></TableCell>
                    </TableRow>
                </TableBody>
            )
        })
        return (

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

        )
    }
}

export default connect(mapStoreToProps)(JournalPageTableItem);
