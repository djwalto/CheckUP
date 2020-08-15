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


                <JournalPageTableItem />

            </div>
        )
    }
}


export default connect(mapStoreToProps)(JournalPageTable);
