/**
 * A simple way of generating the json file to upload to firestore. 
 * It creates a template file that you then need to fill in.
 * You also need to delete the times included that aren't used.
 * 
 * I run this and pipe its contents into a json file.
 * e.g. node generateTemplateTimes.js > times.json
 */

// the object which is essentially the json file
 let jsonFile = {
    all_times: []
}

// we will use military time so we don't have to deal with 'am' or 'pm' and the shuttle only runs until 17:00 (aka 05:00pm)
for (let hour = 7; hour < 17; hour++) {
    for (let minute = 0; minute < 60; minute += 5) {
        let hourString = `${hour}`;
        let minuteString = `${minute}`;

        // if the hour or minute is less than ten, tack on a leading zero for the time (e.g. 07:05 instead of 7:5)
        if (hour < 10) {
            hourString = `0${hour}`;
        }
        if (minute < 10) {
            minuteString = `0${minute}`
        }
        let time = `${hourString}:${minuteString}`;
        let shuttleTime = {
            start: '',
            end: '',
            days: '',
            time: time
        };

        // put the new time onto the array of times
        jsonFile.all_times.push(shuttleTime);
    }
}

console.log(JSON.stringify(jsonFile))