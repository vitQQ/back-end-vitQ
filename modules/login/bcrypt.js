const bcrypt = require("bcrypt");
const saltRounds = 5;

function hash(password) {
    const hash = bcrypt.hashSync(password, saltRounds);
    return hash
}

function compare(passwordBody, hashpass) {
    const unhash = bcrypt.compareSync(passwordBody, hashpass);
    return unhash
}


module.exports = {
  hash,
  compare
};