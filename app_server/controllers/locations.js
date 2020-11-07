/* GET homepage */
const homeList = (req, res) => {
  res.render('locations-list', { title: 'Home' });
};

/* GET location info page */
const locationInfo = (req, res) => {
  res.render('location-info', { title: 'Location info' });
};

/* GET add review page */
const addReview = (req, res) => {
  res.render('location-review-form', { title: 'Add review' });
};

module.exports = {
  homeList,
  locationInfo,
  addReview
};