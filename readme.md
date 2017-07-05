# Open SEO API

This project contains the API used by [open-seo.org](https://www.open-seo.org)

This project was developed to learn more about Lambda functions, specifically using Claudia to deployment.  Knowing it was a small project I've included all code in a single app.js file,
for larger projects I would recommend creating a more robust structure.

## Getting Started

To run the API local you can run:

~~~~ npm run local ~~~~

This will spin up a local express server at http://localhost:3030

### Prerequisites

* AWS account with access to IAM and Lambda
* AWS Command Line Interface (CLI)
* Node.js 6
* NPM
* Claudia installed global (npm install claudia -g)

## Deployment


 * run npm install to grab the dependencies
 * run npm run generate-proxy to create a simple proxy API for the express app
 * run npm run deploy to send everything up to AWS Lambda

The third step will print out a URL you can use to access the express app.

Run npm run update to send the new version up to AWS. No need to generate the proxy again

### Installing

 * Clone git repo
 * npm install
 * npm run local

## Built With

* NodeJS
* AWS Lambda
* AWS API Gateway
* Claudia

## Contributing

I appreciate your help and input.  This has been a fun side-project to work on and I'm glad to receive help or feedback.

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method before making a change.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **James Luterek** - *Initial work* - [Website](https://www.jamesluterek.com)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License

## Acknowledgments

* Inspired by Websharper/C# tool - https://github.com/TahaHachana/OpenSEO (No Longer Maintained)