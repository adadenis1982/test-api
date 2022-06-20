// промежуточная фунция переадресации с главной страницы на необходимую
const home = (req, res, next) => {
  if (req.path === '/') {
    res.redirect('/issues');
  }
  next();
};

module.exports = home;
