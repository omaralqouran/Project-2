/**
 *   @author Al-Qouran (omaralqouran48@gmail.com)
 *   @version 0.0.1
 *   @summary Project 2 Insurance company code || created: 09.27.2016
 *   @todo
 * Created by root on 9/27/2016.
 */
"use strict";
const PROMPT = require('readline-sync');
const CURRENT_YEAR = 2016;
const BASE_PRICE = 100;
const FAULTACCIDENTS = 50;

let continueResponse;
let lastName, firstName, birthMonth;
let birthDay, birthYear, policyNumber, premiumDueDate, accidentNumbers;

function main() {
    process.stdout.write('\x1Bc');
    if (continueResponse == null) {
        setContinueResponse();
    }
    if (ContinueResponse === 1) {
        setPolicyNumber();
        set



        setContinueResponse();
        return main();
    }
    printGoodbye;
}
function setContinueResponse() {
    if (continueResponse) {
        continueResponse = Number(PROMPT.question('\nDo you wish to continue? [0=no, 1=yes]: '));
    } else {
        continueResponse = 1;
    }
}
function setPolicyNumber() {
    policyNumber = Math.floor(Math.random() *16) +3);
}
function setFirstName() {
    firstName = PROMPT.question('\nWhat is your first name: ');
}
function setLastName() {
    lastName = PROMPT.question('\nWhat is your last name: ');


}
function setBirthDay() {
    birthDay = Number(PROMPT.question('\nPlease enter the day in which you were born?: '));
}
function setBirthMonth() {
    birthMonth = Number(PROMPT.question('\nWhat is the month were you born in?: '));
}
function setBirthYear() {
    birthYear = Number(PROMPT.question('\nWhat is your birth year?: '))
}


