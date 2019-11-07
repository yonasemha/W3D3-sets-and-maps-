"use strict";


/**
 * An Employee class
 */
class Employee {
    /**
     * Constructor for Employee
     * @param {String} firstName a firstname
     * @param {String} lastName a lastname
     */
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._salaryRecord = new Map();
    }

    /**
     * Adds the arguments to the salary record
     * @param {String} dateStr a string representing a date 
     * @param {Number} amount the amount paid
     * @returns {undefined}
     */

    addEntry(dateStr, amount) {

        return this._salaryRecord.set(dateStr, amount);

    }


    /**
     * Retrieves a String that describes how much 
     * this Employee was paid on that date
     * @param {String} date a date string
     * @returns {String} text describing how much was paid
     */
    printPaymentAmount(date) {
        return 'Jim Jones was paid ' + this._salaryRecord.get(date) + ' on ' + date;
    }

    /**
     * Returns a String desribing the average amount paid
     * @returns {String} describes average amount for this Employee
     */
    printAveragePaycheck() {
        let sum = 0;
        let average;
        for (let key of this._salaryRecord.values()) {
            sum += key;
            average = sum / this._salaryRecord.size;
        }
        return 'Average paycheck for Jim Jones was ' + average;
    }
}