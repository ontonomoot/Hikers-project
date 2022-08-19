const authLoginApi = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

authLoginApi.route('/login')
  .post(async (req, res) => {
    const { email, password } = req.body.form;

    const findUserInDB = await User.findOne({ raw: true, where: { email } });

    console.log(findUserInDB);
    if (findUserInDB && (await bcrypt.compare(password, findUserInDB.password))) {
      req.session.user = findUserInDB;
      res.json({ auth: true });
    } else {
      res.json({ auth: false });
    }
  });

module.exports = authLoginApi;
