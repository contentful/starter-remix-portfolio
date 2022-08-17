const spaceImport = require('contentful-import')
const inquirer = require('inquirer');
const fs = require("fs")
const path = require("path")

const questions = [
  {
    type: 'input',
    name: 'spaceId',
    message: 'Enter you Contentful Space ID',
    validate(value) {
      if(!value.length >0) {
        return 'Must enter a Space ID'
      }
      return true
    }
  },
  {
    type: 'input',
    name: 'contentDeliveryApiKey',
    message: 'Enter you Content Delivery API Key',
    validate(value) {
      if(!value.length >0) {
        return 'Must enter Content Delivery API Key'
      }
      return true
    }
  },
  {
    type: 'input',
    name: 'contentManagementToken',
    message: 'Enter you Content Management Token',
    validate(value) {
      if(!value.length >0) {
        return 'Must enter Content Management Token'
      }
      return true
    }
  }
]

inquirer.prompt(questions)
.then((answers) =>{
  const {spaceId, contentDeliveryApiKey, contentManagementToken} = answers
  console.log('Importing the content model into your Space')
  spaceImport({
    contentFile: './contentful/export.json',
    spaceId: spaceId,
    managementToken: contentManagementToken
  })
  .then(() => console.log('The content model is set up!'))
  .catch(e=> console.log(e))
  console.log('Creating .env file...')
  const file = path.join(__dirname, "..", ".env")
  const fileContents = [
    `# All environment variables will be sourced`,
    `# and made available.`,
    `# Do NOT commit this file to source control`,
    `CONTENTFUL_SPACE_ID='${spaceId}'`,
    `CONTENTFUL_ACCESS_TOKEN='${contentDeliveryApiKey}'`,
  ]
  .filter(Boolean)
  .join('\n')
  fs.writeFileSync(file,fileContents, "utf-8")
  console.log(".env file created")
  console.log(answers)
})
.catch(e => console.log(e))