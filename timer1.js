// SIMPLE TIMER CHALLENGE
// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments


// Fetch input from command line arguments, as an array
// Remove the first 2 elements (node and file paths)
// Compare & sort numbers into ascending order
const ascending = (a, b) => a - b;
const beepTimes = process.argv.slice(2).sort(ascending);

beepTimes.forEach(time => {
  // Check input is a positive number
  if (time >= 0) {
    let timeout = time * 1000; // convert to ms
    setTimeout(() => {
      process.stdout.write('\x07'); // system sound (beep/ding)
      process.stdout.write("Beep\n"); // in case sound doesn't work
    }, timeout);
  }
});