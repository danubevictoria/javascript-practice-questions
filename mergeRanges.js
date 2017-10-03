// Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.
// To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as objects ↴ with integer properties startTime and endTime. These integers represent the number of 30-minute blocks past 9:00am.
//
// For example:
//
//   {startTime: 2, endTime: 3} // meeting from 10:00 – 10:30 am
// {startTime: 6, endTime: 9} // meeting from 12:00 – 1:30 pm
//
// Write a function mergeRanges() that takes an array of meeting time ranges and returns an array of condensed ranges.
//
// For example, given:
//
//   [
//     {startTime: 0,  endTime: 1},
//     {startTime: 3,  endTime: 5},
//     {startTime: 4,  endTime: 8},
//     {startTime: 10, endTime: 12},
//     {startTime: 9,  endTime: 10},
// ]
//
// your function would return:
//
//   [
//     {startTime: 0, endTime: 1},
//     {startTime: 3, endTime: 8},
//     {startTime: 9, endTime: 12},
// ]
//
// Do not assume the meetings are in order. The meeting times are coming from multiple teams.
//
// Write a solution that's efficient even when we can't put a nice upper bound on the numbers representing our time ranges. Here we've simplified our times down to the number of 30-minute slots past 9:00 am. But we want the function to work even for very large numbers, like Unix timestamps. In any case, the spirit of the challenge is to merge meetings where startTime and endTime don't have an upper bound.

function mergeRanges(timeRanges) {
  if(!timeRanges || timeRanges.length == 0) {
    throw new Error('No time ranges were passed in');
  }
  if (timeRanges.length == 1) {
    return timeRanges;
  }

  let condensedRanges = [];
  let condensedRange = {};

  // Getting the condensed start times
  for (let i = 0; i < timeRanges.length; i++) {
    let start = timeRanges[i].startTime;
  }

}

function overlappingRange(range1, range2) {
  if (!range1 || !range2) {
    throw new Error ('No ranges passed in');
  }
  let overlap = {};

  if(range1.startTime > range2.startTime) {
    overlap.startTime = range2.startTime;
  } else {
    overlap.startTime = range1.startTime;
  }
  if (range2.endTime < range1.startTime) {
    overlap.endTime = range1.endTime;
  } else {
    overlap.endTime = range2.endTime;
  }
}
