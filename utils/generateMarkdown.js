function printList(list) {
  let listText = "";
  for (let item of list) {
    listText += `* ${item}\n`;
  }
  return listText;
}

function getDeployLink(res) {
  if (res.isDeployed) {
    return `
<a href="https://${res.username}.github.io/${res.reponame}/">
  View Deployment
</a>
  ·
    `;
  } else {
    return "";
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  [![Contributors][contributors-shield]][contributors-url]
  [![Forks][forks-shield]][forks-url]
  [![Stargazers][stars-shield]][stars-url]
  [![Issues][issues-shield]][issues-url]
  [![MIT License][license-shield]][license-url]
  [![LinkedIn][linkedin-shield]][linkedin-url]
  
  <br />
  <p align="center">
  <h3 align="center">${data.title}</h3>
  <p align="center">
  ${data.description}
  <br />
  <br />
  ${getDeployLink(data)}
  <a href="https://github.com/${data.username}/${data.reponame}">
    View code
  </a>
  ·
  <a href="https://github.com/${data.username}/${data.reponame}/issues">
    Report Bug
  </a>
  </p>
  </p>
  
  
  
  <!-- TABLE OF CONTENTS -->
  ## Table of Contents
  
  * [About the Project](#about-the-project)
    * [Built With](#built-with)
  * [Contributing](#contributing)
  * [License](#license)
  * [Contact](#contact)
  
  
  
  ## About The Project
  ${data.screenshot ? `![Project screenshot][product-screenshot]` : ``}
  
  ${data.description}
  
  Built as an assignment for the University of Washington Full Stack Coding Bootcamp. 
  
  
  ### Built With
  
  ${printList(data.tech)}
  
  
  <!-- CONTRIBUTING -->
  ## Contributing
  
  Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
  
  1. Fork the Project
  2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
  3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
  4. Push to the Branch (\`git push origin feature/AmazingFeature\`)
  5. Open a Pull Request
  
  
  
  <!-- LICENSE -->
  ## License
  
  Distributed under the MIT License. See \`LICENSE\` for more information.
  
  
  
  <!-- CONTACT -->
  ## Contact
  
  ${data.name} - [LinkedIn][linkedin-url] - ${data.email}
  
  Project Link: [https://github.com/${data.username}/${
    data.reponame
  }](https://github.com/${data.username}/${data.reponame})
  
  
  <!-- MARKDOWN LINKS & IMAGES -->
  <!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
  [contributors-shield]: https://img.shields.io/github/contributors/${
    data.username
  }/${data.reponame}.svg?style=flat-square
  [contributors-url]: https://github.com/${data.username}/${
    data.reponame
  }/graphs/contributors
  [forks-shield]: https://img.shields.io/github/forks/${data.username}/${
    data.reponame
  }.svg?style=flat-square
  [forks-url]: https://github.com/${data.username}/${
    data.reponame
  }/network/members
  [stars-shield]: https://img.shields.io/github/stars/${data.username}/${
    data.reponame
  }.svg?style=flat-square
  [stars-url]: https://github.com/${data.username}/${data.reponame}/stargazers
  [issues-shield]: https://img.shields.io/github/issues/${data.username}/${
    data.reponame
  }.svg?style=flat-square
  [issues-url]: https://github.com/${data.username}/${data.reponame}/issues
  [license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
  [license-url]: https://tldrlegal.com/license/mit-license
  [linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
  [linkedin-url]: https://linkedin.com/in/${data.linkedin}
  [product-screenshot]: images/screenshot.png
    `;
}

module.exports = generateMarkdown;
