/* GET homepage */
const homeList = (req, res) => {
  res.render('index', { title: 'Home' });
};

/* GET location info page */
const locationInfo = (req, res) => {
  res.render('index', { title: 'Location info' });
};

/* GET add review page */
const addReview = (req, res) => {
  res.render('index', { title: 'Add review' });
};

module.exports = {
  homeList,
  locationInfo,
  addReview
};