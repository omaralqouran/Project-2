/** @author Al-Qouran (omaralqouran48@gmail.com)
 *   @version 0.0.1
 *   @summary Project 2 Insurance company code || created: 09.27.2016
 *   @todo
 */
"use strict";
const PROMPT = require('readline-sync');
const CURRENT_YEAR = 2016;

let continueResponse;
let lastName, firstName, birthMonth;
let birthDay, birthYear, policyNumber,totalAccidents, premiumDueDay, premiumDueMonth, premiumDueYear, customerAge, accidentNumbers,totalCost;

function main() {
    process.stdout.write('\x1Bc');
    if (continueResponse == null) {
        setContinueResponse();
    }
    if (continueResponse === 1) {
        setFirstName();
        setLastName();
        setPolicyNumber();
        setBirthDay();
        setBirthMonth();
        setBirthYear();
        setTotalAccidents();
        calculateCustomerAge();
        setPremiumDueDay();
        setPremiumDueMonth();
        setPremiumDueYear();
        calculateTotalCost();
        printTotalCost();
        setContinueResponse();
        return main();
    }
    printGoodbye();
}
main();

function setContinueResponse() {
    if (continueResponse) {
        continueResponse = Number(PROMPT.question('\nDo you wish to continue? [0=no, 1=yes]: '));
    } else {
        continueResponse = 1;
    }
}
function setFirstName() {
    firstName = PROMPT.question('\nWhat is your first name: ');
}
function setLastName() {
    lastName = PROMPT.question('\nWhat is your last name: ');
}
function setBirthDay() {
    birthDay = Number(PROMPT.question('\nPlease enter the day in which you were born? In the format of a number 1-31: '));
}
function setBirthMonth() {
    birthMonth = Number(PROMPT.question('\nWhat is the month were you born in? Please enter in the format of a number: '));
}
function setBirthYear() {
    birthYear = Number(PROMPT.question('\nWhat is your birth year?: '));
}
function setPolicyNumber() {
    policyNumber = Math.floor((Math.random() * 1000) + 1);
}
function setTotalAccidents() {
    totalAccidents = Number(PROMPT.question('\nHow many accidents have you been that were at-fault? '));
}
function calculateCustomerAge() {
    customerAge = (CURRENT_YEAR - birthYear);
}
function setPremiumDueDay() {
    (premiumDueDay = birthDay);
}
function setPremiumDueMonth() {
    (premiumDueMonth = birthMonth);
}
function setPremiumDueYear() {
    premiumDueYear = (CURRENT_YEAR + 1)
}
function calculateTotalCost() {
    const YOUNG_FEE = 20,
        MIDDLE_FEE = 10,
        ELDERLY_FEE = 30,
        BASE_PRICE = 100,
        FAULT_ACCIDENTS = 50;
    if (customerAge > 15 && customerAge < 30){
        totalCost = YOUNG_FEE + BASE_PRICE + FAULT_ACCIDENTS * totalAccidents;
    }
    else if (customerAge >= 30 && customerAge < 45) {
        totalCost = MIDDLE_FEE + BASE_PRICE + FAULT_ACCIDENTS * totalAccidents;
    }
    else if (customerAge >= 45 && customerAge < 60) {
        totalCost = ELDERLY_FEE + BASE_PRICE + FAULT_ACCIDENTS * totalAccidents;
    }
    else {
        totalCost = BASE_PRICE + FAULT_ACCIDENTS * totalAccidents;
    }
}
function printTotalCost(){
    process.stdout.write('\x1Bc');
    console.log(firstName + ' ' + lastName +  ' has a policy number of ' + policyNumber +' and your insurance bill will be $' + totalCost);
}
function printGoodbye() {
    process.stdout.write('\x1Bc');
    console.log(`\nWe thank you for your service.`);
}

