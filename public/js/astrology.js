/**
*
*    --------------------------------------------------------------------------
*    ## Astrology - A javascript class for sharing astrological information ##
*    ------------------------------------------------------------------------
*
*       Author: Johan Wedfelt
*       =====================
*       Project Repo: https://github.com/DaWoody/Astrology-JS.git
*       ============
*       Version 0.4
*       ============
*       License Url: http://opensource.org/licenses/GPL-3.0
*       ============
*       Description:
*       ============
*       A javascript class that initiates by loading some Astrological data to the instantiated class
*       then there are a number of public methods available to do searches on birthdate etc to get
*       astrological information back to be printed or used within a DOM structure on a web-page
*
*
*/


var Astrology = function(connectionObject){
    //On class initiation
    this.init(connectionObject);
};

Astrology.prototype.xhrAndLoadJsonToDataArray = function(url, variable){
    //XHR request help method for loading the data

    var _that = this,
        xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                var response = xhr.response;
                _that.zodiacSignsData[variable] = response[variable];
            }
        }
    };
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send();
};

Astrology.prototype.addMonth = function(monthNumberOrMonthName){
    //Add the month name or number

    var monthNumber = 0,
        parsedNumber;

    if(typeof monthNumberOrMonthName === "number"){
        monthNumber = monthNumberOrMonthName;
    }
    else if(typeof  monthNumberOrMonthName === "string"){

        var monthNameLowerCase = monthNumberOrMonthName.toLowerCase();

        switch(monthNameLowerCase){
            case "january":
                monthNumber = 1;
                break;

            case "february":
                monthNumber = 2;
                break;

            case "march":
                monthNumber = 3;
                break;

            case "april":
                monthNumber = 4;
                break;

            case "may":
                monthNumber = 5;
                break;

            case "june":
                monthNumber = 6;
                break;

            case "july":
                monthNumber = 7;
                break;

            case "august":
                monthNumber = 8;
                break;

            case "september":
                monthNumber = 9;
                break;

            case "october":
                monthNumber = 10;
                break;

            case "november":
                monthNumber = 11;
                break;

            case "december":
                monthNumber = 12;
                break;

            default:
                parsedNumber = parseInt(monthNumberOrMonthName, 10);
                if(parsedNumber !== NaN){
                    if(parsedNumber > 0 && parsedNumber <= 12){
                        monthNumber = parsedNumber;
                    }
                    else{
                        this.sendToConsole('Did not enter a valid month value. Valid values include the name of month or its corresponding number');
                    }
                }
                else {
                    this.sendToConsole('Did not enter a valid month value. Valid values include the name of month or its corresponding number');
                }
        }
    }
    this.currentSearch.monthNumber = monthNumber;
};

Astrology.prototype.addDay = function(date){
    // Add the day of the month as a number between 1-31

    if(typeof date === "string"){
        try {
            var dateNumber = parseInt(date, 10);

            //Lets control so the date is within the range 1-31
            if(dateNumber > 0 && dateNumber <= 31){
                this.currentSearch.date = dateNumber;
            } else {
                dateNumber = 31;
                this.sendToConsole('Error must provide a valid day of the month which means a number between 1-31. Now date is set to the last in the month (31)');
            }
        } catch(e){
            this.sendErrorMessageToConsole('We threw and error the date we tried to set is NOT a string that could be parsed into a number', e);
        }
    }
    this.currentSearch.date = dateNumber;
};

Astrology.prototype.addFullDateString = function(dateString){
    // Lets just parse out the month and the day from the full date string and then use the methods
    // we already have created so we can reuse the code we already have, awesomeness ;)

    var dateStringArray = dateString.split('-');
    if(dateStringArray.length === 3 && dateStringArray[0].length === 4) {
        //Lets try parsing the month and day, if they are strings lets proceed adding the date as a current date
        if(typeof dateStringArray[1] === 'string' && typeof dateStringArray[2] === 'string'){
            this.addMonth(dateStringArray[1]);
            this.addDay(dateStringArray[2]);
        } else {
            this.sendToConsole('Wrong date format sent to the addFullDateString method, needs to be a string with the format YYYY-MM-DD')
        }
    } else{
        this.sendToConsole('Wrong date format sent to the addFullDateString method, needs to be a string with the format YYYY-MM-DD')
    }
};

Astrology.prototype.fetchZodiacSign = function(){
    //Fetches the zodiac sign from the data that has been loaded into the class object
    //and the data provided by the user

    var monthNumber = this.currentSearch.monthNumber,
        date = this.currentSearch.date,
        twoSignsArray = [],
        zodiacSign = '',
        zodiacNumber = 0,
        zodiacSigns = this.zodiacSignsData.signs;

    for(var i = 0, length = zodiacSigns.length; i < length; i++){
        //  First lets compare the months, will always just be two possible months that can
        //  be passed in to the two arrays

        if(monthNumber === zodiacSigns[i].start.monthNumber || monthNumber === zodiacSigns[i].end.monthNumber){
            //If the months end or start in the specific month number we have a go and should
            //save the date in our temporary array awesomeness ;)
            twoSignsArray.push(zodiacSigns[i]);
        }
    }

    //Ok now lets check the two different signs
    for(var j = 0, length = twoSignsArray.length; j < length; j++){
        //First lets see if the month is in the start or in the end

        if(twoSignsArray[j].start.monthNumber === monthNumber){
            if(date > twoSignsArray[j].start.date){
                zodiacSign = twoSignsArray[j].zodiacName;
                zodiacNumber = twoSignsArray[j].zodiacNumber;
            }
        }

        else if(twoSignsArray[j].end.monthNumber === monthNumber){
            if(date <= twoSignsArray[j].end.date){
                zodiacSign = twoSignsArray[j].zodiacName;
                zodiacNumber = twoSignsArray[j].zodiacNumber;
            }
        }
    }
    return zodiacSign;
};

Astrology.prototype.fetchZodiacSignDescription = function(){
    //Fetches the zodiac sign description
    var zodiacSign = this.fetchZodiacSign(),
        returnDescription = "",
        descriptions = this.zodiacSignsData.descriptions;

    if(typeof zodiacSign === "number"){
        //A number lets fetch the description through a zodiacNumber check
        for(var i = 0, length = descriptions.length; i < length; i++){
            if(descriptions[i].zodiacNumber === zodiacSign){
                returnDescription = descriptions[i].description;
            }
        }
    } else {
        //We have a string we are checking against lets do this ;)
        for(var i = 0, length = descriptions.length; i < length; i++){
            if(descriptions[i].zodiacName === zodiacSign){
                returnDescription = descriptions[i].description;
            }
        }
    }
    return returnDescription;
};

Astrology.prototype.sendToConsole = function(message){
    //Helper message method

    var consoleMessage =  "=================================" + "\n";
        consoleMessage += "# Astrology" + "\n";
        consoleMessage += "# Version: " + this.classData.version + " \n";
        consoleMessage += "# Message: " + message + " \n";
        consoleMessage += "=================================" + "\n";
    console.log(consoleMessage);
};

Astrology.prototype.sendErrorMessageToConsole = function(message, error){
    //Helper message method

    var consoleMessage =  "=================================" + "\n";
        consoleMessage += "# Astrology" + "\n";
        consoleMessage += "# Version: " + this.classData.version + " \n";
        consoleMessage += "# Error: " + message + " \n";
        consoleMessage += "=================================" + "\n";
    console.log(consoleMessage);
    console.log(error);
};

Astrology.prototype.initConnectionObject = function(connectionObject){
    //Lets initiate the connectionObject

    var dateDataUrl = '/js/astrology_data/astrology_data.json',
        descriptionDataUrl =  '/js/astrology_data/astrology_data.json',
        returnObject;

        returnObject = {
            dateDataUrl: dateDataUrl,
            descriptionDataUrl: descriptionDataUrl
        };

    try{
        if(connectionObject === undefined){
            //Lets do nothing since we have already defined the paths to where to
        }
        else {
            returnObject.dateDataUrl = connectionObject.dateDataUrl || dateDataUrl;
            returnObject.descriptionDataUrl = connectionObject.descriptionDataUrl || descriptionDataUrl;
        }
    } catch(e){
        //Do nothing since we already have the object instantiated with default values
    }
    return returnObject;
}

Astrology.prototype.init = function(connectionObject){
    //The init function, does the work and sets up the rest of the instantiated class object

    //Setup the connectionObject
    var connectionObjectModified = this.initConnectionObject(connectionObject);

    //Declare some objects and variables used within the instantiated class
    this.connectionObject = {
        dateDataUrl: connectionObjectModified.dateDataUrl,
        descriptionDataUrl: connectionObjectModified.descriptionDataUrl
    };

    this.classData = {
        version:'0.4'
    };

    this.zodiacSignsData = {
        signs: [],
        descriptions: []
    };

    this.currentSearch = {
        date:0,
        monthNumber:'',
        zodiacName:'',
        zodiacNumber:0
    };

    //Load the data
    this.xhrAndLoadJsonToDataArray(this.connectionObject.descriptionDataUrl, 'descriptions');
    this.xhrAndLoadJsonToDataArray(this.connectionObject.dateDataUrl, 'signs');

    //Print an instantiation message to the console
    this.sendToConsole('Object instantiated with dateData url ' +  this.connectionObject.dateDataUrl + ' and descriptionData url: ' +  this.connectionObject.descriptionDataUrl);
};
