var express = require('express');
var router = express.Router();
const APIRequest=require("../middleware/APIRequests");

// Get home page
router.get('/', function(req, res, next) {

    const url = 'https://elections-cpl.api.hscc.bdpa.org/v1/info'
    const token = process.env.BEARER_TOKEN;

    // pass url and token in RestApiGet and pull info from response
    APIRequest.getWithBearerToken(url, token)
    .then(data => {
        if (process.env.CONSOLE_DEBUG=="true"){
             console.log("REST CALL ", data);
        }
        
        if (data.success){
            // SUBJECT TO CHANGE
            var electionInfo=data.info;
            var upcomingElections= data.info.upcomingElections;
            var openElections=data.info.openElections;
            var closedElections=data.info.closedElections;
        } //closes if staement

        
        else{
            res.render('error', {title: 'Stats call failed',
            message: data.error,
            });
        }
    }) // data then component
    .catch(error => console.error(error));
  res.render('index', { title: 'Express' });
});
module.exports = router;