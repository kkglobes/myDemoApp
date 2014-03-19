
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

/* GET About Us. */
exports.about = function(req, res){
  res.render('about', { title: 'About Us' });
};