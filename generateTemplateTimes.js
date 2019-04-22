/**
 * A simple way of generating the json file to upload to firestore. 
 * It creates a template file that you then need to fill in.
 * You also need to delete the times included that aren't used.
 * 
 * I run this and pipe its contents into a json file.
 * e.g. node times.js > times.json
 */
for (let hour = 7; hour < 17; hour++) {
    for (let minute = 0; minute < 60; minute += 5) {
        let hourString = `${hour}`;
        let minuteString = `${minute}`;
        if (hour < 10) {
            hourString = `0${hour}`;
        }
        if (minute < 10) {
            minuteString = `0${minute}`
        }
        let time = `${hourString}:${minuteString}`;
        let output = 
        `{
            "start": "",
            "end": "",
            "days": "",
            "time": "${time}"
        },
        `;
        console.log(output);
    }
}