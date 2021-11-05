const spinner = "|/-\|/-\|";
let spin = "   \r";




//  for (const char of sentence) {
   
//    setTimeout(() => {
//     process.stdout.write(char);
//   }, counter) 
//   counter += 50;
 
 let counter = 100;
 for(const char of spinner) {
  
  setTimeout(() => {
    process.stdout.write(char + spin);
  }, counter += 200);

 }
  
 
//  //process.stdout.write('hello from spinner1.js... \rheyyy\n');
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\   '); 
// }, 700);
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\   '); 
// }, 1400);

// setTimeout(() => {
//   process.stdout.write('\r|\   '); 
// }, 1600);

