const fs = require("fs/promises");

// Function to write markdown file

const saveMarkDown = (str) => {
  const fileName = "markDown_" + Date.now() + ".md";

  return new Promise(function (resolve, reject) {
    fs.writeFile(fileName, str)
      .then(function () {
        resolve(fileName);
      })
      .catch(console.log);
  });
};

module.exports = saveMarkDown;
