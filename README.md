# Astrology
### *An open source javascript project to simply getting general astrological information within web-applications*
[![npm version](https://img.shields.io/npm/v/astrology-js.svg?style=flat-square)](https://www.npmjs.com/package/astrology-js)  ![Download](https://img.shields.io/npm/dm/astrology-js.svg?style=flat-square)

<img src="http://www.star-esseenia.org/assets/images/Person-Centered-Astrology.jpg" width="200" height="auto">

## Version Information
***
Check out the [version information page](https://github.com/DaWoody/Astrology-JS/wiki/Version-Information) for more information.

## License
***
This software is distributed as Open Source software following the [GNU General Public License, version 3 (GPL-3.0)](http://opensource.org/licenses/GPL-3.0)

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

When interacting with the class there are three methods that saves the date needed to find out the zodiac sign. First there is the method ```addDay(dayNumber)``` that takes in a number between 1-31
as a valid day number in a month, and then there is ```addMonth(monthNameOrMonthNumber)``` which takes in a string with a valid month-name such as for example *january*,
*february* etc... **or** a valid month-number string ranging from 1-12, such as *1*, *12* or *01*, *07* for instance. Then there is also a method
called ```addFullDateString(dateString)``` which takes in a date string in the format YYYY-MM-DD. This is naturally supported as the output from the native html5-method  ```<input type="date">```
, which in turn is supported by most modern browsers, except Internet Explorer. [Read more here](http://www.w3schools.com/htmL/html_form_input_types.asp).


```javascript

astrology.addDay(dayNumber);

astrology.addMonth(monthNameOrMonthNumber);

astrology.addFullDateString(dateString)

```

To actually get the zodiac sign  or the zodiac sign description from an astrology object,
the methods ```fetchZodiacSign``` and ```fetchZodiacSignDescription``` both fetches different strings that could be used
within the DOM-structure or as the user see fit. The ```fetchZodiacSignDescription``` method returns a description and
the ```fetchZodiacSign``` returns the zodiac name, both in the format of a string. They are called upon such as:

```
astrology.fetchZodiacSign();
astrology.fetchZodiacSignDescription();
```
To get a more hands on example on how to implement the class and use it within an actual web-application check out the [Html implementation code example](https://github.com/DaWoody/Astrology-JS/wiki/Html-implementation-code-example)

