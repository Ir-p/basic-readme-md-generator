function generateMarkDown(info) {
 
  const markDown = `
  # ${info.title}
  

  ![license](https://img.shields.io/static/v1?label=license&message=${info.license}&color=blue)
  
  ## Description
  
  ${info.description}


  ## Table of Contents
  
  * [Installation](#installation)

  * [Usage](#usage)
  
  * [Questions](#questions)


  ## Installation

  ${info.installation}

  ## Usage

  ${info.usage}


  ## Questions

  If you have any questions, please email at ${info.email}.

  Please follow me on Github ${info.github}.
  `;
  return markDown;
}

module.exports = generateMarkDown;

