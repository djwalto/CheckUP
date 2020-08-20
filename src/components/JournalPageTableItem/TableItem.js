// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import mapStoreToProps from '../../redux/mapStoreToProps';
// import { useTransition, animate } from 'react-spring';
// import { animated } from 'react-spring/renderprops-universal';
// import TableRow from "./JournalPageTableItem";




// function springContainer(props) {
//     // Basic functional component structure for React with default state
//     // value setup. When making a new component be sure to replace the
//     // component name TemplateFunction with the name for the new component.
//     const tableContainer = ({ props }) => {
//         // Using hooks we're creating local state for a "heading" variable with
//         // a default value of 'Functional Component'
//         const transition = useTransition(this.props.store.formReducer, item => item.id, {

//             from: { opacity: 0, marginLeft: -100, marginRight: 100 },
//             enter: { opacity: 1, marginLeft: 0, marginRight: 0 }

//         });

//         return (
//             <>
//                 {
//                     transition.map(({ item, key, props }) => (
//                         <animated.div key={key} style={props} className="tableBody">
//                             <TableRow item={item}></TableRow>
//                         </animated.div>
//                     ))

//                 })
//             </>
//         );

//     }


//     export default connect(mapStoreToProps)(SpringContainer);
