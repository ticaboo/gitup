var
  express = require('express'),
  debug = require('debug')('gitup'),
  config = require('./common/config'),
  path = require('path'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  app = express();

// integrations
//broken on master!:
//webhook = require('./integrations/gitup-webhook')(config);
//twitter = require('./integrations/gitup-twitter')(config);

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));






/* delivery, example:
{
"action": "labeled",
"issue": {
"url": "https://api.github.com/repos/octocat/Hello-World/issues/1347",
"number": 1347,
...
},
"repository" : {
"id": 1296269,
"full_name": "octocat/Hello-World",
"owner": {
"login": "octocat",
"id": 1,
...
},
...
},
"sender": {
"login": "octocat",
"id": 1,
...
}
}
*/
app.post('/github/delivery', function (req, res) {
  // just for debugging webhooks ...
  console.loq('github webhook fired.');

  webhook.process(req, function (error, data) {

  });
});


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {}
  });
});






app.listen(app.get('port'), function () {
});
