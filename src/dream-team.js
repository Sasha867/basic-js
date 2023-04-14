const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (members instanceof Array) {
    let arr = members.filter((el) => typeof el === "string");
    arr = arr.map((el) => el.trim().toUpperCase()).sort();
    console.log(arr);
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i][0]);
    }
    console.log(result.join("").toLocaleUpperCase());
    return result.join("").toLocaleUpperCase();
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam,
};
