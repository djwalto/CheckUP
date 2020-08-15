import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from "@material-ui/core/Table";
import Button from "@material-ui/core/Button";
//import JournalPageTableItem from '../JournalPageTableItem/JournalPageTableItem';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Title from "@material-ui/icons/Title";
import JournalPageTableItem from '../JournalPageTableItem/JournalPageTableItem';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from "@material-ui/core/Card";
import './JournalPageTable.css';

class JournalPageTable extends Component {


    componentDidMount() {
        this.props.dispatch({ type: 'GET_FORM' });
    }


    render() {
        return (
            <div>
                <div className="tableDiv">
                    <Card className="tableCard">
                        <Container className="tableContainer" component="main" maxWidth="xs">
                            <CssBaseline />
                            <div className="tablePaper">


                                <Typography component="h1" variant="h5">
                                    Health Journal
                  </Typography>
                                <Table size="large">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Date</TableCell>
                                            <TableCell>How Are You Feeling?</TableCell>
                                            <TableCell>What Symptoms Are You Experiencing?</TableCell>
                                            <TableCell>Edit</TableCell>
                                            <TableCell align="right">Delete</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <JournalPageTableItem />
                                    </TableBody>
                                </Table>
                            </div>
                        </Container>
                    </Card>
                </div>
            </div>
        )
    }
}


export default connect(mapStoreToProps)(JournalPageTable);
