// license badges
const badges = {
  "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "Apache": "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "Mozilla": "[![License: Mozilla](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  "Unlicense": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
};

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.about}

  ## Badges 
  ${badges[data.license]}

  ## Table of Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Test](#test)
  * [License](#license)
  * [Questions](#questions)

  ## Installation
  ${data.install}
  
  ## Usage
  Run the following command in the command line and answer the questions ${data.usage}

  ## Contributions
  [GitHub: ${data.contributing}](https://github.com/${data.contributing})
  
  ## Test
  ${data.tests}

  ## License
  Licensed under the ${data.license} license

  ## Questions
  You can email me at ${data.email} if you have any questions!
`;
}

module.exports = generateMarkdown;
