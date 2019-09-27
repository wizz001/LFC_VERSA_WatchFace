import clock from "clock";
import clock from "clock"; // needed to have a clock! (see line 33)
import document from "document"; // needed for I have no idea what! If you don't put this nothing works!!!
import { preferences } from "user-settings"; // needed to get the user preference 12h or 24h (see line 38)
import { zeroPad, } from "../common/utils"; // import user function zeroPad (see lines 43, 45, 46)
import { HeartRateSensor } from "heart-rate"; // import HR reading from sensor (seel line 18)
import { battery } from "power"; // import battery level (see line26)
import userActivity from "user-activity"; //adjusted types (matching the stats that you upload to fitbit.com, as opposed to local types)
import * as tools from './tools.js';

// Update the clock every minute
clock.granularity = "seconds"; //clock is refreshing every sec. It is possible to select minutes as well

// Get a handle on the <text> elements specified in the index.gui file
const timeHandle = document.getElementById("timeLabel"); 
const batteryHandle = document.getElementById("batteryLabel");
const stepsHandle = document.getElementById("stepsLabel");
const caloriesHandle = document.getElementById("caloriesLabel");
const heartrateHandle = document.getElementById("heartrateLabel");
const date = document.getElementById("date");

// The following block read the heart rate from your watch
const hrm = new HeartRateSensor();

hrm.onreading = function() {
  heartrateHandle.text = `${hrm.heartRate}`; // the measured HR is being sent to the heartrateHandle set at line 16
}
hrm.start();


// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  const now = evt.date; // get the actual instant
  let hours = now.getHours(); // separate the actual hours from the instant "now"
  let mins = now.getMinutes(); // separate the actual minute from the instant "now"
  let currentDate = evt.date;
	let hours = currentDate.getHours();
  if (preferences.clockDisplay === "12h") { // check from your wach settings if you use 12h or 24h visualization

   
    // 12h format
    hours = hours % 12 || 12; 
  } else {
    // 24h format
    hours = zeroPad(hours); // when you use 24h in case hours are in one digit then I put a zero in front. i.e. 3 am -> 03
  }
  
  date.text = `${tools.dayOfWeek(currentDate.getDay())} ${currentDate.getDate()} ${tools.monthOfTheYear(currentDate.getMonth())}`;

  let minsZeroed = zeroPad(mins); // one digit mins get a zero in front
  timeHandle.text = `${hours}:${minsZeroed}`; // time in format hh:mm:ss is assigned in the timeHandle defined at line 13
  
  // Activity Values: adjusted type
  let stepsValue = (userActivity.today.adjusted["steps"] || 0); // steps value measured from fitbit is assigned to the variable stepsValue
  let stepsString = stepsValue; // I concatenate a the stepsValue (line above) with th string ' steps' and assign to a new variable
  stepsHandle.text = stepsString; // the string stepsString is being sent to the stepsHandle set at line 15
  
   // Activity Values: adjusted type
  let caloriesValue = (userActivity.today.adjusted["calories"] || 0); // steps value measured from fitbit is assigned to the variable stepsValue
  let caloriesString = caloriesValue; // I concatenate a the stepsValue (line above) with th string ' steps' and assign to a new variable
  caloriesHandle.text = caloriesString; // the string stepsString is being sent to the stepsHandle set at line 15
 
  // Battery Measurement
  let batteryValue = battery.chargeLevel; // measure the battery level and send it to the variable batteryValue
  
  // Assignment value battery
  batteryHandle.text = batteryValue +'%' // the string including the batteryValue is being sent to the batteryHandle set at line 14
   }

 