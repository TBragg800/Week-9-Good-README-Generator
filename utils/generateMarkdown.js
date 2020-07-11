// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-brightgreen.svg)]

## Table of Contents
  [Description] (#description)
  [Installation] (#installation)
  [Usage] (#usage)
  [License] (#license)
  [Contributing] (#contributing)
  [Tests] (#tests)
  [Questions] (#questions)
  
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
