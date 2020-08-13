import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';
import Table from "@material-ui/core/Table";
import Button from "@material-ui/core/Button";


// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const JournalTablePageItem = (props) => (
    <div>
        <Table >
            <thead>
                <tr>
                    <th>Feelings for today</th>
                    <th>Symptoms for today</th>
                    <th>Edit</th>
                    <th>Delete</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.store.formReducer.feeling} </td>
                    <td>{props.store.formReducer.symptoms}</td>
                    <td>
                        <Button >
                            Edit
                </Button></td>
                    <td>
                        <Button >
                            Delete
                </Button></td>
                </tr>
            </tbody>
        </Table>
    </div>
);




// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(JournalTablePageItem);
