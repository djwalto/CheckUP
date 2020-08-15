import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import mapStoreToProps from '../../redux/mapStoreToProps';


class JournalPageTableItem extends Component {

    render() {
        const formArray = this.props.store.formReducer.map((item, index) => {
            return (
                <TableRow key={index} className="journalTableItemRow">
                    <TableCell className="journalTableItemCell">Date</TableCell>
                    <TableCell className="journalTableItemCell">{item.feeling}</TableCell>
                    <TableCell className="journalTableItemCell">{item.symptom}</TableCell>
                    <TableCell className="journalTableItemCell">Edit</TableCell>
                    <TableCell className="journalTableItemCell" align="right">Delete</TableCell>
                </TableRow>

            )
        })
        return (
            <div>
                {formArray}
            </div>
        );
    }
}
export default connect(mapStoreToProps)(JournalPageTableItem);
