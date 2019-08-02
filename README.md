# FEMA-Damage-Assessment-API-Python
---
Web App tool built for FEMA damage assessment team using Python and Google and Zillow APIs



### FEMA Assessment Mobile App v0.2.0
---
When agents are on the field, access the web app in order to input the data for damage assessment of the residential parcels.  Other issues like connectivity will present a challenge to data collection.  To address this, we designed a mobile app that agents will be able to use in the field that will have the same functionality as the web app.  Currently the app is in the development phase but the basic functionality can be demonstrated in a demo version.  

First, the user will be able to upload a picture to our web app API and return results pre-disaster and post-disaster.  They can choose either a photo from the phone's storage or take a picture right in the app.  Regardless of which option they choose, the photo will be stored in the app to upload later if connectivity is an issue.  Once uploaded, they user will be able to fill out a form for the criterias FEMA audits before securing restoration funds.  

The current version of the app is set up to call the web app API hosted on a server and return the mentioned results.  All of the outputs and the user inputs will be pushed to the SQL database hosted on Heroku.  Possible future additions include:

- Expanding the form portion of the app to collect more detailed data for stronger predictions.
- Including the damages cost estimate after submitting form responses.
- Embedded map functionality that can notify the user of road closures and for navigation.
- Including satellite imagery of the disaster area.
- Safety and Hazard alerts.