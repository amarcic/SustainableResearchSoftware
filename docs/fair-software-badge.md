## The fair-software badge

Website: <https://fair-software.eu/> 

Five recommendations for FAIR software:

1. Use a publicly accessible repository with version control
2. Add a license
3. Register your code in a community registry
4. Enable citation of the software
5. Use a software quality checklist

### Using the badge in a GitHub repository

<https://github.com/fair-software/howfairis-github-action>

The badge can be implemented in any GitHub repository. There are only a few additions to be made:

1. create a file in the repository at .github/workflows/fair-software.yml and add the content listed in <https://github.com/fair-software/howfairis-github-action#assess-compliance-with-fair-softwareeu>

On the next push to your repository the fair-software.eu recommendations will be tested against information in your GitHub repository and the badge will be generated as output of the job. You can then add the badge to your README file:

2. add the badge definition to your README.md file. It can look like this, but the actual result is available in the output of the GitHub action: [![fair-software.eu]([https://img.shields.io/badge/fair--software.eu-● ● ○ ○ ○-orange)](https://img.shields.io/badge/fair--software.eu-%E2%97%8F%20%20%E2%97%8F%20%20%E2%97%8B%20%20%E2%97%8B%20%20%E2%97%8B-orange))

### Alternative: Local application

<https://github.com/fair-software/howfairis>