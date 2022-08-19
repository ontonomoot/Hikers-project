const authLoginApi = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

authLoginApi.post('/auth', async (req, res) => {
  res.json({ session: req.session.user });
});

authLoginApi.post('/login', async (req, res) => {
  const { email, password } = req.body.form;
  const findUserInDB = await User.findOne({ raw: true, where: { email } });

  if (findUserInDB && (await bcrypt.compare(password, findUserInDB.password))) {
    req.session.user = findUserInDB;
    res.json({ auth: true, session: findUserInDB });
  } else {
    res.json({ auth: false });
  }
});

authLoginApi.post('/registration', async (req, res) => {
  const {
    login, email, password, password2,
  } = req.body.form;
  if (password.length > 7) {
    if (password === password2) {
      const findUserInDB = await User.findOne({ raw: true, where: { email } });

      if (findUserInDB) {
        res.json({ registration: false, registrationAuth: true, registrationLength: true });
        // .status(403)
      } else {
        const newUser = await User.create({
          user_name: login,
          admin: false,
          email,
          password: await bcrypt.hash(password, 10),
          image: 'https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png',
        });
        req.session.user = newUser;
        res.json({ registration: true, registrationAuth: true, registrationLength: true });
      }
    } else {
      res.json({ registrationAuth: false, registrationLength: true });
    }
  } else {
    res.json({ registrationLength: false });
  }
});

authLoginApi.post('/logout', (req, res) => {
  req.session.destroy();
  res
    .clearCookie('user_sid')
    .json({ logout: true });
});

module.exports = authLoginApi;
