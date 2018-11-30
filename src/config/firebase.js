import * as firebase from "firebase";

import { config } from "../config/keys";
firebase.initializeApp(config);

const databaseRef = firebase.database().ref();
export const entriesRef = databaseRef.child("entries");