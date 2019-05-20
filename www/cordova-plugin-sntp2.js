module.exports = {
    setServer : function(sntpServer, timeout) {
        cordova.exec(null, null, "cordova-plugin-sntp2", "setServer", [sntpServer, timeout]);
    },
    getTime : function(success, error) {
        cordova.exec(success, error, "cordova-plugin-sntp2", "getTime", []);
    },
    getClockOffset : function(success, error) {
        cordova.exec(success, error, "cordova-plugin-sntp2", "getClockOffset", []);
    }
}