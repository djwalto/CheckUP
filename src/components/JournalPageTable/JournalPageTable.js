import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from "@material-ui/core/Table";
import Button from "@material-ui/core/Button";
//import JournalPageTableItem from '../JournalPageTableItem/JournalPageTableItem';


class JournalPageTable extends Component {


    componentDidMount() {
        this.props.dispatch({ type: 'GET_FORM' });
    }


    render() {
        const formArray = this.props.store.formReducer.map((item, index) => {
            return (
                <div>
                    <li
                        key={index}>{item.feeling} {item.symptom}</li>




                </div>
            );
        });

        return (
            <div>
                <h1>Home Page!</h1>
                <div>{formArray}</div>
            </div>
        );
    }
}

const mapStoreToProps = (store) => ({ store });


export default connect(mapStoreToProps)(JournalPageTable);
