/**
*
*
*
*/


var Astrology = function(){

    this.months = []
    this.starSigns = [];
    this.starSignsDescriptions = [];

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

Astrology.prototype.getStarSignsDescriptions = function(){

    var descriptions = [
        {
            zodiacName:"aries",
            zodiacNumber:1,
            element:"fire",
            symbol:"The Ram",
            description: "Aries are fire signs and those born under this element are regarded in astrology as adventurous, active and outgoing. It won't matter where you go or how remote or unusual it is - from the Outback to the Antarctic - you can be sure that an Aries has been there before you (or at the very least you will meet one along the way!) Aries is a uniquely naive sign. Although they are independent, outgoing and assertive they are also surprisingly trusting, often innocently walking into the lion's den at times. No matter what upheaval, challenge or triumph they confront - an Aries has a wonderful ability to bounce back. Their faith in life and the future remains untouched by hardship. Their gift is that they are always children at heart and the world is always a magical place for them. Many famous sports people are born under this sign. Aries is regarded as the most physical sign and because of its Mar's rulership; it is also one of the most highly charged masculine energy signs in astrology. No wonder women born under Aries are forceful, dynamic and aggressive, and as a result these Aries women frequently find themselves with dilemmas surrounding their romantic relationships. For them, a man has to be a 'real man' to deal with an Aries woman, otherwise she intimidates him. And conversely for the Aries male, a woman has to be a real woman to deal with him, because he is looking for many balancing component traits (his true feminine side) in his partner. She has to run the gamut in his support system, from the Aries man's best friend, true companion, through to his muse, and yet she must never ever answer him back! Therefore Aries can be a confusing sign because there is a complex combination of very strong masculine and feminine expressions all combined together. Because of the male energy surrounding it, when a woman is born under Aries, it creates some of the most interesting women in the world, women who are adventurous, independent and have competitive natures. It also tends to make them very forthright"
            + "But whether male or female, Aries people are 'doers' rather than 'talkers'. They are the impulsive, act first, ask questions or have doubts later, sign of the zodiac. That's why their lives are often filled with many dramas and sometimes even accidents! Their ability to live life close to the edge provides them with a wealth of 'real experience' to call upon. When an Aries person talks about something or somewhere they've usually done it or been there, rather than simply read about it in a book. Being active people Aries can't adapt to any kind of restriction, particularly possessive relationships. They often travel to escape any feelings of being stuck or possessed. Aries people love challenges. In fact, if everything is running smoothly, they are quite capable of going out and doing something (sometimes quite foolish) to rock the boat. Aries love to race in where angels fear to tread."
        },

        {
            zodiacName:"taurus",
            zodiacNumber:2,
            element:"earth",
            symbol:"The Bull",
            description: "Underneath their cool, calm and collected exterior, Taureans differ greatly from all the other signs of the zodiac. Taureans manage to discreetly stay apart from the crowd, even though they have a well-earned reputation for being socialisers. They will let others get close, but only so close as they want them. Some claim that trying to get your point across to a Taurean, should they not want to hear you, is rather similar to talking to the trees � they simply won't budge. And, there is no such thing as an open-book Taurean. Their feelings, fears and desires often run far deeper than anyone around them would guess. Like the butterfly that chooses to remain hidden in its cocoon until it is ready and prepared to emerge, so the true Taurean spirit remains hidden behind a veneer of day-to-day activities. That's why Taureans are sometimes regarded as snobby, withdrawn, boring, or even sulky. The truth is, when Taureans manage to operate very adequately on their own form of automatic pilot, they can switch off from the world around them very efficiently. And when they do switch off, they are actually gathering in their inner reserves to deal with the outside pressures. This sign is also very closely connected to 'feeling good'. Most Taureans like their creature comforts and hate change because it takes them out of their automatic pilot condition of separating themselves from the world around them. Because they hate to be put in jeopardy of any kind, this is the sign that strives to create tomorrow in advance, rather than leave it to fate. In love, Taureans are regarded as extremely sensual beings. An earth sign, they deal well with the personal, physical senses and consequently all the pleasures associated with what they can see, touch, smell and taste, add up to a special delight to them. Often nature and pet lovers, Taureans are closely associated with all things off the earth and nature."
        }

    ];

    return descriptions;
};

Astrology.prototype.fetchStarSignDescription = function(starSignNameOrNumber){
    var returnDescription = "";
    var descriptions = this.starSignsDescriptions;

    if(typeof starSignNameOrNumber === "number"){
        console.log("Fetching desc with number");
        //A number lets fetch the description through a zodiacNumber check
        for(var i = 0, length = descriptions.length; i < length; i++){
            if(descriptions[i].zodiacNumber === starSignNameOrNumber){
                returnDescription = descriptions[i].description;
            }
        }
    } else {
        console.log("Fetching desc with string");
        //We have a string we are checking against lets do this ;)
        for(var i = 0, length = descriptions.length; i < length; i++){
            if(descriptions[i].zodiacName === starSignNameOrNumber){
                returnDescription = descriptions[i].description;
            }
        }
    }
    return returnDescription;
};

Astrology.prototype.init = function(){

    this.months = this.getAllMonths();
    this.starSigns = this.getAllStarSigns();
    this.starSignsDescriptions = this.getStarSignsDescriptions();

    this.currentSearch = {
        date:0,
        monthNumber:'',
        zodiacName:'',
        zodiacNumber:0
    };

    console.log('Astrology Object initiated');
};

/*
var astrology = new Astrology();

astrology.addCurrentDate(23);
astrology.addCurrentMonth("March");


console.log('Your sign is ' + astrology.fetchStarSign());

var sign = astrology.fetchStarSign();

console.log('The sign we are trying with is ' + sign);

console.log('Description: ' + astrology.fetchStarSignDescription(sign));
*/
