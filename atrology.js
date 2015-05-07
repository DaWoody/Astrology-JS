/**
*
*
*
*/


var Astrology = function(){

    this.months = []
    this.starSigns = [];

    this.init();
};


Astrology.prototype.getAllMonths = function(){
    var months =
                [
                    {

                        monthName:'january',
                        monthNumber:1,
                        endDate:31
                    },

                    {
                        monthName:'february',
                        monthNumber:2,
                        endDate:28
                    },

                    {
                        monthName:'march',
                        monthNumber:3,
                        endDate:31
                    },

                    {
                        monthName:'april',
                        monthNumber:4,
                        endDate:31
                    },

                    {
                        monthName:'may',
                        monthNumber:5,
                        endDate:31
                    },

                    {
                        monthName:'june',
                        monthNumber:6,
                        endDate:31
                    },

                    {

                        monthName:'july',
                        monthNumber:7,
                        endDate:31
                    },

                    {
                        monthName:'august',
                        monthNumber:8,
                        endDate:31
                    },

                    {
                        monthName:'september',
                        monthNumber:9,
                        endDate:31
                    },

                    {
                        monthName:'october',
                        monthNumber:10,
                        endDate:31
                    },

                    {
                        monthName:'november',
                        monthNumber:11,
                        endDate:31
                    },

                    {
                        monthName:'december',
                        monthNumber:12,
                        endDate:31
                    }
                ];

    return months;
};


Astrology.prototype.getAllStarSigns = function(){
    var starSigns =
                [
                    {
                        zodiacNumber:1,
                        zodiacName:'aries',
                        start: {
                            date: 21,
                            monthNumber: 3,
                            monthName:'march'
                        },
                        end: {
                            date: 19,
                            monthNumber: 4,
                            monthName:'april'
                        }
                    },

                    {
                        zodiacNumber:2,
                        zodiacName:'taurus',
                        start: {
                            date: 20,
                            monthNumber: 4,
                            monthName:'april'
                        },
                        end: {
                            date: 20,
                            monthNumber: 5,
                            monthName:'may'
                        }
                    },

                    {
                        zodiacNumber:3,
                        zodiacName:'gemini',
                        start: {
                            date: 21,
                            monthNumber: 5,
                            monthName:'may'
                        },
                        end: {
                            date: 20,
                            monthNumber: 6,
                            monthName:'june'
                        }
                    },

                    {
                        zodiacNumber:4,
                        zodiacName:'cancer',
                        start: {
                            date: 21,
                            monthNumber: 6,
                            monthName:'june'
                        },
                        end: {
                            date: 22,
                            monthNumber: 7,
                            monthName:'july'
                        }
                    },

                    {
                        zodiacNumber:5,
                        zodiacName:'leo',
                        start: {
                            date: 23,
                            monthNumber: 7,
                            monthName:'july'
                        },
                        end: {
                            date: 22,
                            monthNumber: 8,
                            monthName:'august'
                        }
                    },

                    {
                        zodiacNumber:6,
                        zodiacName:'virgo',
                        start: {
                            date: 23,
                            monthNumber: 8,
                            monthName:'august'
                        },
                        end: {
                            date: 22,
                            monthNumber: 9,
                            monthName:'september'
                        }
                    },

                    {
                        zodiacNumber:7,
                        zodiacName:'libra',
                        start: {
                            date: 23,
                            monthNumber: 9,
                            monthName:'september'
                        },
                        end: {
                            date: 22,
                            monthNumber: 10,
                            monthName:'october'
                        }
                    },

                    {
                        zodiacNumber:8,
                        zodiacName:'scorpio',
                        start: {
                            date: 23,
                            monthNumber: 10,
                            monthName:'october'
                        },
                        end: {
                            date: 21,
                            monthNumber: 11,
                            monthName:'november'
                        }
                    },

                    {
                        zodiacNumber:9,
                        zodiacName:'sagittarius',
                        start: {
                            date: 22,
                            monthNumber: 11,
                            monthName:'november'
                        },
                        end: {
                            date: 21,
                            monthNumber: 12,
                            monthName:'december'
                        }
                    },

                    {
                        zodiacNumber:10,
                        zodiacName:'capricorn',
                        start: {
                            date: 22,
                            monthNumber: 12,
                            monthName:'december'
                        },
                        end: {
                            date: 19,
                            monthNumber: 1,
                            monthName:'january'
                        }
                    },

                    {
                        zodiacNumber:11,
                        zodiacName:'aquarius',
                        start: {
                            date: 20,
                            monthNumber: 1,
                            monthName:'january'
                        },
                        end: {
                            date: 18,
                            monthNumber: 2,
                            monthName:'february'
                        }
                    },

                    {
                        zodiacNumber:12,
                        zodiacName:'pisces',
                        start: {
                            date: 19,
                            monthNumber: 2,
                            monthName:'february'
                        },
                        end: {
                            date: 20,
                            monthNumber: 3,
                            monthName:'march'
                        }
                    }
                ];

    return starSigns;
};


Astrology.prototype.loadDate = function(dateString){
  /*
  * Make a method to parse the date string and figure out what kind of date has been  sent to the javascript object.
   */
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
            parseInt(date, 10);
        } catch(e){

        }
    }
    this.currentSearch.date = date;
};

Astrology.prototype.fetchStarSign = function(){

    var monthNumber = this.currentSearch.monthNumber;
    var date = this.currentSearch.date;

    var twoSignsArray = [];
    var starSign = '';
    var zodiacNumber = 0;


    var starSigns = this.starSigns;

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

Astrology.prototype.init = function(){

    this.months = this.getAllMonths();
    this.starSigns = this.getAllStarSigns();

    this.currentSearch = {
        date:0,
        monthNumber:'',
        zodiacSign:'',
        zodiacNumber:0
    };

    console.log('Astrology Object initiated');
};

var astrology = new Astrology();

astrology.addCurrentDate(23);
astrology.addCurrentMonth("january");


console.log('Your sign is ' + astrology.fetchStarSign());

