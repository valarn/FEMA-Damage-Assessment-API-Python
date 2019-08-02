# FEMA-Damage-Assessment-API-Python
---
Web App tool built for FEMA damage assessment team using Python and Google and Zillow APIs



### FEMA Assessment Mobile App v0.2.0
---
When agents are in the field, access to a laptop to access the web app in order to input the data for the assessment.  Other issues like connectivity will present a challenge to data collection.  To address this, we designed a mobile app that agents will be able to use in the field that will have the same functionality as the webapp.  Currently the app is in the development phase but the basic functionality can be demonstrated in a demo version.  

First, the user will be able to upload a picture to our webapp API and return the same results such as the before and after picture and the address information.  They can choose either a photo from the phone's storage or take a picture right in the app.  Regardless of which option they choose, the photo will be stored in the app to upload later if connectivity is an issue.  Once uploaded, they user will be able to fill out a form to assess the damage that will be uploaded to a database for later use in the predictive model.  

The current version of the app is set up to call the webapp API once it is hosted on a server and return the aforementioned results.  The next step will be to set up the connection to the SQL database.  Possible future additions include:

- Expanding the form portion of the app to collect more detailed data for stronger predictions.
- Including the damages cost estimate after submitting form responses.
- Embedded map functionality that can notify the user of road closures and for navigation.
- Including satellite imagery of the disaster area.
- Safety and Hazard alerts.