# Astrology
### *An open source javascript project to simply getting general astrological information within web-applications*
<img src="http://www.star-esseenia.org/assets/images/Person-Centered-Astrology.jpg" width="200" height="auto">

## Version Information
***

* v0.3
* Updated the addDate() and addMonth() methods to be a bit more robust with the input provided, should now be more flexible
towards inputs. addDate() should be able to take any number string and convert it to a number between 1-31 or at least put the default value to 31 if
the user input was not correct. The addMonth() method similiary tries to parse the month value passed in from the user,
now it will be able to parse between the numbers 1-12 and the names of the months, january, february etc.

* v0.2
* Default json data source altered to just be one file. Implementation on how to get data for description and generally the signs
are still remaining in this version, making it easier to have different api endpoints for fetching the resources.

* v0.1
* Class loads external json data at class initiation
* some public methods are accessible, for instance by saving the month and date you can get information about your zodiac sign, with a description of your traits



## Description
***
This project is aimed to be an open source project to design a simple javascript class that could be used to generate general astrological information to individuals
based on birth date information and such. The idea is that the class could be instantiated and used in a general web-project and then accessed through a set of different public methods
that add data, do calculations and present information back to the user. Currently the class is meant to load some general information data about the different zodiac signs
from a json resource. The default settings is to load the data from a json-files to get the specific date information for each zodiac signs aswell as a more detailed description about
what a specific zodiac sign entails. The source for the json data could be altered through providing a ```connectionObject``` to the constructor method as explained below.

## How to use the Astrology class
***

Within the web-pages/applications you would like to use the class, you should include the script, within the ```<head>..</head>``` section or preferably within the last section
of the ```<body>..</body>``` section, such as for instance

```html
...
<script src="../js/astrology.js"></script>
</body>
</html>
```

Then within an actual javascript file, (could be within a jquery statement aswell), the class should be instantiated
with an optional ```connectionObject``` parameter being passed to the constructor like:

```javascript

var astrology = new Astrology();
```

or..


```javascript

var connectionObject = {
     dateDataUrl: url_to_where_to_fetch_the_date_data,
     descriptionDataUrl: url_to_where_to_fetch_the_description_data
 }

var astrology = new Astrology(connectionObject);
```

When interacting with the class there are two methods that saves the date ```addDate(dateNumber)``` that takes in a number between 1-31
and ```addMonth(monthName)``` which takes in a string with a valid month-name such as for example *january*,
*february* etc...

```javascript

astrology.addDate(dateNumber);

astrology.addMonth(monthName);

```

To actually get the zodiac sign  or the zodiac sign description from an astrology object,
the methods ```fetchZodiacSign``` and ```fetchZodiacSignDescription``` both fetches different strings that could be used
within the DOM-structure or as the user see fit. The ```fetchZodiacSignDescription``` method returns a description and
the ```fetchZodiacSign``` returns the zodiac name, both in the format of a string. They are called upon such as:

```
astrology.fetchZodiacSign();
astrology.fetchZodiacSignDescription();
```


