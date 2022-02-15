const app = require('../app.js');
const { conn } = require('../services/db.js');

conn.sync({ force: false }).then(() => {
  app.listen(process.env.PORT || 3001, async () => {
    console.log('Server listening at 3001');
  });
});