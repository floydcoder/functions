
"use strict"
function _one() {
let your_name="Marco Stevanella";
let number_of_courses=6;
let program="T177";
let part_time_job=true;
let job;
if(part_time_job){ // applying condition on weather I have a job or not
    job="have";
}
else{
    job="don't have";
}
    console.log("My name is "+your_name+" I'm in the "+program+" program. I'm currently taking "+number_of_courses+" courses. I "+job+" a part time job."); // output to console

}
function _two(cents) {
    const quarter = 25; // coins are to be constant values, as their value will not change while execution.
    const dime = 10;
    const nickels = 5;
    const penny = 1;
    let numQuarters=0; // variables that will indicate the amount of each coin have to be initialize for better computing;
    let numDimes=0;
    let numNickels=0;
    let numPennies=0;
    let startingCents=cents; // I thought to create a variable that contains the initial value in cents, so that it can be changed during execution.
    while (startingCents > 0) { // I would say I have approached this logic, as it would in a real life scenario. Better, how my brain operates when it has to give change.
        if (Math.floor(startingCents / quarter) > 0 ) { // I want to know, if I can give some quarters. Math.floor takes the integer part, which is the amount of quarters I can give.
            numQuarters = Math.floor(startingCents /quarter); // Condition is true, calculates the number of quarters ro be given.
            startingCents -= (numQuarters * quarter); // the left over cents to be calculated.
        } else if (Math.floor(startingCents / dime) > 0 ) { // same logic is applied. For the rest. I would say, I filter the cents until the least possible coin.
            numDimes = (Math.floor(startingCents / dime));
            startingCents -= (numDimes * dime);
        } else if (Math.floor(startingCents / nickels) > 0 ) {
            numNickels = (Math.floor(startingCents / nickels));
            startingCents -= (numNickels * nickels);
        } else if (Math.floor(startingCents / penny) > 0 ) {
            numPennies = (Math.floor(startingCents / penny));
            startingCents -= (numPennies * penny);
        }
    }
    console.log( cents+" cents in minimal change is: " + numQuarters + " quarters, " + numDimes + " dimes, " + numNickels + " nickels, " + numPennies + " and pennies."); // desired output.
}
function _three(miles, kilometers) {
    const miToKm=1.609344;
    const kmToMi=0.6214;
    let kmConverted=(miles*miToKm).toFixed(2); //  km conversion occurs rounding the decimal rounded to the hundredths.
    let miConverted=(kilometers*kmToMi).toFixed(2); // mi conversion occurs rounding the decimal rounded to the hundredths.
    console.log(miles+" miles = "+kmConverted+" Kilometers, "+kilometers+" kilometers = "+miConverted+" miles."); // desired Output.
}
function _four(array) {
    array.sort((a,b)=> a-b); // given the array, we have sorted it in ascending order ( default ). 'a' defines the first element, b the second element.
                            // => creates a function expression that subtract b from a and sort the array by swapping the elements.
    array.join(", "); // elements have to be separated by ,
    const min=array[0]; // since we know the ascending sort have been fulfilled, the element 0 has the lowest value
    const max=array[array.length-1]; // if so, the last element in the array has the greatest value.
    console.log("The minimum number in the array is: "+min+" And the maximum value is: "+max); // desired output
}

function _five(string, a_char) {
    let tempString=string;
    let tempChar=a_char;
    let occurrences=0;
    for(let i=0;i<tempString.length;i++){
        if(a_char.charCodeAt(0)>=65 && a_char.charCodeAt(0)<=90){ // sees if a cap letter is presents in the string
            if(tempString[i]===a_char){
                occurrences++;
              }
        }
        else if(a_char.charCodeAt(0)>=97 && a_char.charCodeAt(0)<=122){ // sees if small cap letter is present in the string
            if(tempString[i]===a_char){
                occurrences++;
            }
        }
    }
    console.log("The word "+tempString+" has "+occurrences+" of the character "+tempChar);
}

function _six(grade) {
    let letterGrade="";
    let verdict="";
if(grade<50){ // given a range of integer, thus condition will return a letter
    letterGrade= "F";
}
else if(grade>=50 && grade<=52){
    letterGrade= "D-";
}
else if(grade>52 && grade<=55){
    letterGrade= "D";
}
else if(grade>55 && grade<=59){
    letterGrade= "D+";
}
else if(grade>59 && grade<=62){
    letterGrade= "C-";
}
else if(grade>62 && grade<=65){
    letterGrade= "C";
}
else if(grade>65 && grade<=69){
    letterGrade= "C+";
}
else if(grade>69 && grade<=72){
    letterGrade= "B-";
}
else if(grade>72 && grade<=75){
    letterGrade= "B";
}
else if(grade>75 && grade<=79){
    letterGrade= "B+";
}
else if(grade>79 && grade<=84){
    letterGrade= "A-";
}
else if(grade>84 && grade<=89){
    letterGrade= "A";
}
else if(grade>89 && grade<=100){
    letterGrade= "A+";
}

switch (letterGrade){ // I know the switch case might have been omitted, and I could have just implemented it the above if reducing the length of the ode
                        // but for the sake of this assigment, I wanted to practice my skills with the case switch.
    case "A+":
        verdict="Congratulations, you passed the course. Your final grade is: "+grade+" = "+letterGrade;
        break;
    case "A":
        verdict="Congratulations, you passed the course. Your final grade is: "+grade+" = "+letterGrade;
        break;
    case "A-":
        verdict="Congratulations, you passed the course. Your final grade is: "+grade+" = "+letterGrade;
        break;
    case "B+":
        verdict="Congratulations, you passed the course. Your final grade is: "+grade+" = "+letterGrade;
        break;
    case "B":
        verdict="Congratulations, you passed the course. Your final grade is: "+grade+" = "+letterGrade;
        break;
    case "B-":
        verdict="Congratulations, you passed the course. Your final grade is: "+grade+" = "+letterGrade;
        break;
    case "C+":
        verdict="Congratulations, you passed the course. Your final grade is: "+grade+" = "+letterGrade;
        break;
    case "C":
        verdict="Congratulations, you passed the course. Your final grade is: "+grade+" = "+letterGrade;
        break;
    case "C-":
        verdict="Congratulations, you passed the course. Your final grade is: "+grade+" = "+letterGrade;
        break;
    case "D+":
        verdict="Congratulations, you passed the course. Your final grade is: "+grade+" = "+letterGrade;
        break;
    case "D":
        verdict="Congratulations, you passed the course. Your final grade is: "+grade+" = "+letterGrade;
        break;
    case "D-":
        verdict="Congratulations, you passed the course. Your final grade is: "+grade+" = "+letterGrade;
        break;
    case "F":
        verdict="Unfortunately, you did not meet the minimum requirements to pass the course. Your final grade is: "+grade+" = "+letterGrade;
        break;
}
    console.log(verdict); // desired output

}

function _seven(array) {
let sortedArray=[];
let lengthArray=array.length-1;
while(lengthArray>=0){
    sortedArray+=array[lengthArray]; // a reversed array
    sortedArray+=", ";
    lengthArray--;
}
console.log(sortedArray);
}

function _eight() {
let fullDateInfo=new Date(); // created a new date according to the browser time and date
let day=fullDateInfo.getDate(); // gets the day
let month=fullDateInfo.getMonth()+1; // gets the month
let year=fullDateInfo.getFullYear(); // gets the year
let todayDate=month+"/"+day+"/"+year; // the date that will displayed in the output
const endSchool="04/23/2021"; // the end date that will be displayed in the output
const feb=28; // moth for feb
const march=31; // month for march
const april=23; // remaining days for april
let remainingDays;
    if(feb-day>=0 && month===2){ // if we are still in feb we calculate the remaining date
        remainingDays=(feb-day)+march+april;
    }
    else if(march-day>=0 && month===3){ // same for march
        remainingDays=(march-day)+april;
    }
    else if(april-day>=0 && month===4){ // same for april
        remainingDays=(april-day)+1;
    }
    else{
        remainingDays="College is Done... for this year :D"; //  0 days, college is done
    }
console.log("Current date = "+todayDate+", last day of school = "+endSchool+". The days left until the end of school = "+remainingDays);
}

function _nine(word) {
let a=0;
let e=0;
let ii=0;
let o=0;
let u=0;
let y=0;
    for(let i=0;i<word.length;i++){
        if (word[i].toLowerCase()==="a"){
            a+=1;
        }
        else if (word[i].toLowerCase()==="e"){
            e+=1;
        }
        else if (word[i].toLowerCase()==="i"){
            ii+=1;
        }
        else if (word[i].toLowerCase()==="o"){
            o+=1;
        }
        else if (word[i].toLowerCase()==="u"){
            u+=1;
        }
        else if (word[i].toLowerCase()==="y"){
            y+=1;
        }
}
console.log("Vowel count: A= "+a+", E= "+e+", I="+ii+", O="+o+", U="+u+", Y="+y);
}

function _ten(my_string) {
   let tempArray=my_string.split(""); // from string to array
   let alphaSorted=tempArray.sort(); // sort the array by its unicode value A-Z = 65 to 90 a-z= 97 to 122 so that it can be alphabetically
   let output="";
   for(let i=0; i<=alphaSorted.length-1;i++){
       output+=alphaSorted[i]; // gets the element of the array, set them in a string
   }
   console.log("The string converted in alphabetical order is: "+output); // desire output.
}
