const viewsRouter = require('../routers/views');
const coursesRouter = require('../routers/courses');

const siteRouter = require('../routers/site');
const meRouter = require('../routers/me');






function router(app) {
  app.use('/site',siteRouter);
  app.use('/site1',viewsRouter);
  app.use('/me',meRouter);


  app.use('/courses',coursesRouter);



}

module.exports = router  