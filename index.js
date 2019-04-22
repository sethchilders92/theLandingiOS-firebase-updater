/**
 * A simple function that takes a json file and makes it a document in cloud firestore. 
 * 
 * Generate the template json file by running 'node generateTemplateTimes.js > times.json'
 * and then modify the template accordingly. 
 * 
 * After the file is updated and correct, you can run this file by 
 * running 'npm start' and the times generated will be put into cloud firestore
 */
const admin = require('firebase-admin');
const times = require('./times.json');
let serviceAccount = require('./auth.json');

/**********
 * Below is the 'firestoreDocumentName' constant variable. What you set this variable to will be the name
 * of the document in firebase, as seen here: 
 * https://console.firebase.google.com/project/thelanding-211901/database/firestore/data~2Flocations~2Fall_times
 * 
 * Suggestion: The app looks for a document titled 'all_times'. Because of this, when you switch
 * semesters it is best to:
 * 1. First, write the current semester's times that are still in 'times.json' to a new document in
 * firestore with the title of the semester they were used for (e.g. 'winter_2019_times'). So, name 
 * the document accordingly and run the program to create the document. 
 * 2. After the old semester's times are saved in a separate document in firestore, you should
 * then name the document 'all_times' and run the program with the new, updated 'times.json' that you create.
 * 
 * This process allows us to keep the old semester schedules if needed, and it helps keep the code in the app functional
 * by keeping the current semester times in the 'all_times' document.
 */

// what you name the schedule here is what the name of the document in firebase will appear as
 const firestoreDocumentName = 'spring_2019_times';

// initialize the database using the auth file
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// get the contents of the database
let db = admin.firestore();

// make a reference to a specific collection and document
let docRef = db.collection('locations').doc(firestoreDocumentName);

// set the data
docRef.set(times)

// log the data you set so you can see it in the console
console.log(times)
