module.exports = (express)=>{
  const router = express.Router({mergeParams: true});
  router.post('/login', function(req, res, next) {
    console.log('test');
    res.send('hello world');
  });
  router.post('/register', function(req, res, next) {
    console.log('test');
    res.send('hello world');
  });
  return router;
}