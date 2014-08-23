SuperLytics
===========
Super analytics built using javascript (jQuery) for front end event tracking and processing of events with Ruby

CLIENT JS Features
------------------
* [WIP] Session tracking
	* When a new user visits, create a new cookie to track the session and track events by user
	* Cookie must be cleared on site exit or browser close
	* DATA SENT: Unique ID/Hash (generated and stored as a cookie), browser information (primarily resolution for scroll pattern simulation)
* [WIP] Page funnel tracking
	* Track how a session funnels through the site by sending data of pages visited and origin sources
	* DATA SENT: session, origin, destination
* [DONE] Session timer
	* Creates a generic timer in seconds to track when an event may have occured in relation to the visit
* [WIP] Click Event tracking
	* captured on trigger and submitted via ajax to backend
	* DATA SENT: Clicked DOM, Time, Session
* [WIP] Scroll pattern tracking
	* captures document position (via scroll top) and time to get a relationship of what the user was viewing and their scroll patterns on a site
	* DATA SENT: Scroll position, current time, session
* [WIP] Mouse position tracking
	* Capture where the mouse is hovering throughout the page to see what people may be looking at
	* DATA SENT: Mouse position, current time, session

SERVER RAILS Features
---------------------
* Analysis of data to provide heatmap of popular areas on site
* Simulation of a given visit to see how a person may have visited a site
* Aggregation of data for average visit stayed

NICE TO HAVES
-------------
* JS generation to generate script based on required tracking features
* Authentication to restrict authorized websites
