// // //entry point for our actions module
// // // import { entriesRef } from "./firebase";
// // import { FETCH_ENTRIES } from "./types";
// // import database from '../database';

// import * as types from './types'
// // import types from './types';
// import database from '../database';



// export const getPreviousEntries = () => dispatch => {

//     database.collection('entries').get().then((snapshot)=> {
//         const previousEntries = [];
//         snapshot.docs.forEach(doc => {
//             const entry = doc.data();
//             entry.id = doc.id;
//             previousEntries.push(entry);
//         });
//         dispatch({
//             type: types.PREVIOUS_ENTRIES,
//             payload: previousEntries
//         })
//     });
// }