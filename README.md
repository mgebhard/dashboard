Simmons Hall Dashboard
=========
# Introduction
This project is a redesign of the simmonsdash project. The goal is to
create an expandable and easy to deploy dashboard for the Simmons Hall
ground floor monitors.

# Requirments
* pywapi

# Applications
## Events
The events app provides the MIT events schedule for the day requested. The MIT RSS feed is parsed and is available at /events. The parsed feed is returned as an array of JSON objects. Each JSON object has a title, description, and time. 

## Nextbus
For information on the Nextbus api visit http://www.nextbus.com/xmlFeedDocs/NextBusXMLFeed.pdf. The Nextbus code evolved from the code used for Dormbase. 

The next 3 shuttles can be accessed from /nextbus. It will return a json object with title, next, second, and third.

## News
The news app provides news from BBC. The feed is parsed and returns an array of JSON objects. Each JSON object has a title and summary. The news can be accessed from /news.

## Weather
Condition codes: http://developer.yahoo.com/weather/#codes

The weather app using the pywapi library and uses Yahoo as its data source. The app can be accessed from /weather and returns a JSON object with current, today, and tomorrow attributes. 'current' has current temp, description, and code. 'today' and 'tomorrow' have high, low, and description. Units are degrees Fahrenheit. 