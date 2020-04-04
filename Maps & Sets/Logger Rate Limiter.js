/**
 * Initialize your data structure here.
 */
var Logger = function() {
    this.loggerMap = {};
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity. 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    
    if(!this.loggerMap[message]) {
       this.loggerMap[message] = timestamp;
       return true;
    } else {
        printedInLast10 = (timestamp - this.loggerMap[message]) < 10;
        
        if (printedInLast10) {
           return false;
        } else {
           this.loggerMap[message] = timestamp;
           return true;
        }
    }
};