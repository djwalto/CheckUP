import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace 
// the component name TemplateClass with the name for the new 
// component.


class JournalModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Modal
                    {...this.props.store}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit Your Entry
                            
        </Modal.Title>
        
      Edit your journal
      </Modal.Header>
      <Modal.Body>
                            <div className="container">
                                To add Form fields ......
</div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={this.props.store.onHide}>Close</Button>
                        </Modal.Footer>
    </Modal>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(JournalModal);
