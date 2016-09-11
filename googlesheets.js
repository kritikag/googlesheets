
var GoogleSpreadsheet = require('google-spreadsheet')
var async = require('async')

// spreadsheet key is the long id in the sheets URL
var doc = new GoogleSpreadsheet('1_nG9VP2xnJMeYpq05xsmx0jexPws4rN1ZO-SNO826xQ')
async.series([
  function setAuth(step) {
    // see notes below for authentication instructions!
    var creds = require('./helloworld-client.json');
    // OR, if you cannot save the file locally (like on heroku)
    var creds_json = {
      client_email: 'helloworld-141204@appspot.gserviceaccount.com',
      private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDlyj+NDNBbzeog\nUQyrRrWHbnuznEFy9AYcmoPcNR3uHD+CrtluzS3AhT0l98dir4SrJS+E/ftLk/Zv\n8DKr+Gy3lIlyZyWV9Yp4CDI8aysoGCrEd9rqh8Pz4GziCVFrJjEgPGXirD9konfr\nwHmXS9tJpzdjLVQaMusPNEmWwl3LG16EiWwyYMhY7cUrlimw2ewALCdWGe4RPQpM\nLadYAZZuBgEPiFb73H9h+vT/M9/cs/gZ1BsWSDVqmfdpiJX487wcoo3kZRZlO95d\nSnIRnM0rCT5sDayFJ4X9qdd9Uo0c3Kf+tlM9jbo+N0FEPrE4o+WI+COdARLnnQzq\n3bXaJseHAgMBAAECggEBALXaNisRPf+5WRUUL1uIzPaOKBV/johDuGaAnePyoWok\nLtrkNy0p8ZBPoZHfoopl7y9mcVHlki9AvKHfzKouIxOx2IiSOruPo3LUwbTw9yl2\n3rm3RKegpCHntSO5ThbnFa+2PMeDm3Ov5AnNvCxRGw0R6ZJyeAF31HCm56oIziOC\nWIgFQ0ZVzhfIvM9/06Ks3BNufWD5Pbz51P7xVf0y2qO5dWQxo/7YsEjZe2W/eC53\n15fx0qRuSSec5eu8b3F2T8mko+JqYau1gex4egNsTs6pq9X5ITjHEI5ZsgyxERN9\nSLwFDs+gMVPkEm/rGNXJ4GztOxqr0ovwTDeemxq6QlECgYEA87Vtc2/A/RmaT8wF\nVHqCShIQ6VGT1XPwwHjOtgg71fRAF0gIt9ZzzwzrgxCHQE+fFuARVtTH9Rl52fJR\nch6g5DCNbf6k4wO0BUNI1LSKS+4cMNx0K129/+q79J5dv+G6N4O0PY3ZRCEWkjQo\nKu7dOIdKvRS3ibVSbP2ARRm5LBkCgYEA8WEdK3BkUHgW78R2S/31ChIvW2EGN+/B\nEltzpiZwqa8OOTMSOL0hQshN/xKv7j6L5gyOTNXts6T9rLyWa+6hjgwD/9fwWE+V\nN1zG7fPNjeJGptjHgYydxf8ilG7JnSDD5W4VAn9GIS+5YQL7BeLwLj+339PTlPR1\n2jw8igWUBJ8CgYEA4ir5DCwmGbzs7CkWuTOIPl1NvHmsjGcwgi6bB2vUu9YUtIZx\nMMqgZwJCfjuUiSZbKct/y+lkOB4QaybqVtH91kcIuY+cTeFd65Rpvpxdy+GJ3/53\nANfaP+oDzBw8PJqrSmG7n3RIsWVToRMuQ8mxG4jS326edfoEKImJxJb+teECgYAn\ni6KMyFgW+uW/GG/NGWk44ivSC75KEcSO7l6vHOMeWai55E0a8JlvaIOmw3gBT0v6\nP5pcqjvMT76juy3ltu3O6NcK5mThAwDOVivdNjE6CpVKpn9hERmUI62VpeTwEjsl\n7ngQtatWqovzgdqAZ2K0IQpN6FVktPxN6cp9TlamvwKBgGkyc3m8smIcDXV2wlVw\njzamzpeqhyCqQY1I61p7hro0+6RAosR11YzttuvpokC77uWH13jDuifyyQaN9f9h\nMtSradCElVgETq0D/OHgsz0qmRnHPn6pfpulFki8CQwHpbpWWo9nP+iKEVLkbYwR\nm5epE0kQH6hw1za0MGiu23rv\n-----END PRIVATE KEY-----\n',
    }

    doc.useServiceAccountAuth(creds, step);
  },
  function getInfoAndWorksheets(step) {
    doc.getInfo(function(err, info) {
      console.log('Loaded doc: '+info.title+' by '+info.author.email);
      sheet = info.worksheets[0];
      console.log('sheet 1: '+sheet.title+' '+sheet.rowCount+'x'+sheet.colCount);
      step();
    });
  }
]);
