const fs = require("fs/promises");

// Function to write markdown file

const saveMarkDown = (str) => {
  var date = Date(Date.now());
  now = date.toString();
  const fileName = "markDown_" + now + ".md";
  console.log(Date)
  return new Promise(function (resolve, reject) {
    fs.writeFile(fileName, str)
      .then(function () {
        resolve(fileName);
      })
      .catch(console.log);
  });
};

module.exports = saveMarkDown;
