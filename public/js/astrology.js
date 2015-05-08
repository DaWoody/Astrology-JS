/**
*
*    --------------------------------------------------------------------------
*    ## Astrology - A javascript class for sharing astrological information ##
*    ------------------------------------------------------------------------
*
*       Author: Johan Wedfelt
*       =====================
*       Project Repo: https://github.org/DaWoody/Astrology-JS
*       ============
*       Version 0.1
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
    this.init(connectionObject);
};

Astrology.prototype.xhrAndLoadJsonToDataArray = function(url, variable){

    var _that = this,
        xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                var response = xhr.response;
                _that.starSignsData[variable] = response[variable];
            }
        }
    };
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send();
};

Astrology.prototype.addCurrentMonth = function(monthNumberOrMonthName){

    var monthNumber = 0;

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
                console.log('Did not enter a valid month as a string');
        }
    }

    this.currentSearch.monthNumber = monthNumber;
};

Astrology.prototype.addCurrentDate = function(date){

    if(typeof date === "string"){
        try {
            var dateNumber = parseInt(date, 10);
            this.currentSearch.date = dateNumber;
        } catch(e){
            console.log('We threw and error the date we tried to set is NOT a string that could be parsed into a number');
            console.log(e);
        }
    }
    //FIX AND ADD STUFF HERE
    this.currentSearch.date = date;
};


Astrology.prototype.showStoredDataArray = function(){
    var storedArray = this.starSignsData;

    for(var i = 0; i<storedArray.length; i++){
        console.log('We had an object to print: ');
        console.log(storedArray[i]);
    }
};

Astrology.prototype.fetchStarSign = function(){

    var monthNumber = this.currentSearch.monthNumber,
        date = this.currentSearch.date,
        twoSignsArray = [],
        starSign = '',
        zodiacNumber = 0,
        starSigns = this.starSignsData.signs;

    for(var i = 0, length = starSigns.length; i < length; i++){
        //  First lets compare the months, will always just be two possible months that can
        //  be passed in to the two arrays

        if(monthNumber === starSigns[i].start.monthNumber || monthNumber === starSigns[i].end.monthNumber){
            //If the months end or start in the specific month number we have a go and should
            //save the date in our temporary array awesomeness ;)
            twoSignsArray.push(starSigns[i]);
        }
    }

    //Ok now lets check the two different signs
    for(var j = 0, length = twoSignsArray.length; j < length; j++){
        //First lets see if the month is in the start or in the end

        if(twoSignsArray[j].start.monthNumber === monthNumber){
            if(date > twoSignsArray[j].start.date){
                starSign = twoSignsArray[j].zodiacName;
                zodiacNumber = twoSignsArray[j].zodiacNumber;
            }
        }

        else if(twoSignsArray[j].end.monthNumber === monthNumber){
            if(date <= twoSignsArray[j].end.date){
                starSign = twoSignsArray[j].zodiacName;
                zodiacNumber = twoSignsArray[j].zodiacNumber;
            }
        }
    }
    return starSign;
};

Astrology.prototype.fetchStarSignDescription = function(){
    var starSign = this.fetchStarSign(),
        returnDescription = "",
        descriptions = this.starSignsData.descriptions;

    if(typeof starSign === "number"){
        //A number lets fetch the description through a zodiacNumber check
        for(var i = 0, length = descriptions.length; i < length; i++){
            if(descriptions[i].zodiacNumber === starSign){
                returnDescription = descriptions[i].description;
            }
        }
    } else {
        //We have a string we are checking against lets do this ;)
        for(var i = 0, length = descriptions.length; i < length; i++){
            if(descriptions[i].zodiacName === starSign){
                returnDescription = descriptions[i].description;
            }
        }
    }
    return returnDescription;
};

Astrology.prototype.sendToConsole = function(message){

    var consoleMessage =  "=================================" + "\n";
        consoleMessage += "# Astrology" + "\n";
        consoleMessage += "# Version: " + this.classData.version + " \n";
        consoleMessage += "# Message: " + message + " \n";
        consoleMessage += "=================================" + "\n";
    console.log(consoleMessage);
};

Astrology.prototype.initConnectionObject = function(connectionObject){

    var dateDataUrl = '/js/astrology_data/astrology_signs_dates.json',
        descriptionDataUrl =  '/js/astrology_data/astrology_signs_descriptions.json',
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

    var connectionObjectModified = this.initConnectionObject(connectionObject);

    this.connectionObject = {
        dateDataUrl: connectionObjectModified.dateDataUrl,
        descriptionDataUrl: connectionObjectModified.descriptionDataUrl
    };

    this.classData = {
        version:'0.1'
    };

    this.starSignsData = {
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

    this.sendToConsole('Object instantiated');
    this.sendToConsole('Connection dateData url: ' +  this.connectionObject.dateDataUrl);
    this.sendToConsole('Connection descriptionData url: ' +  this.connectionObject.descriptionDataUrl);
};
