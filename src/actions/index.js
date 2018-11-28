//entry point for our actions module
import { entriesRef } from "../config/firebase";
import { FETCH_ENTRIES } from "./types";

export const addEntry = newEntry => async dispatch => {
  entriesRef.push().set(newEntry);
};

export const deleteEntry = deleteEntryId => async dispatch => {
  entriesRef.child(deleteEntryId).remove();
};

export const fetchEntries = () => async dispatch => {
  entriesRef.on("value", snapshot => {
    dispatch({
      type: FETCH_ENTRIES,
      payload: snapshot.val()
    });
  });
};