import express from 'express';

const app = express();
app.use(express.static('public'));

import router from './routes/index.mjs';

app.use('/', router);

// listen for requests :)
const listener = app.listen(process.env.PORT || 8081, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
