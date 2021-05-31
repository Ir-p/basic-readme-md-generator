function generateMarkDown(info) {
 
  const markDown = `[https://img.shields.io/badge/license-${info.license}-9cf]
  # ${info.title}
 
  ## Description
  
  ${info.description}


  ## Table of Contents
  
  * [Installation](#Installation)

  * [Usage](#Usage)

  * [Questions](#Questions)


  ## Installation

  ${info.installation}

  ## Usage

  ${info.usage}


  ##Questions
  If you have any questions, please email at ${info.email}.

  Please follow me on Github ${info.github}.
  `;
  return markDown;
}

module.exports = generateMarkDown;

