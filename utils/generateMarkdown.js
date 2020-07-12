// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

##  Repository: 
${data.repository}

[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-brightgreen.svg)]

## Table of Contents
  [Description](#Description)

  [Installation](#Installation)

  [Usage](#Usage)

  [License](#License)

  [Contributing](#Contributing)

  [Tests](#Tests)

  [Questions](#Questions)
  
## Description
  ${data.description}

## Installation
  ${data.install}

## Usage
  ${data.usage}

## License
  ${data.license}

## Contributing
  ${data.contribute}

## Tests
  ${data.tests}

## Questions
  ${data.questions}
  Email: ${data.email}
  Github: [${data.github}] (http://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
