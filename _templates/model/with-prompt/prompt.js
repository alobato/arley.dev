// see types of prompts:
// https://github.com/SBoudrias/Inquirer.js#prompt-types
const promptArgs = require('../../promptArgsUtil')

const questions = [
  {
    type: 'input',
    name: 'message',
    message: "What's your message?"
  },
  {
    type: "select",
    name: "route",
    message: "Select parent route",
    choices: ['.', './routes/route1', 'etc...', 'this is specific to my app']
  },
  {
    type: 'confirm',
    name: 'shouldValidateForm',
    message: 'Do you need to validate the form?',
  }
]

// module.exports = {
//   prompt: promptArgs(questions)
// }

// module.exports = {
//   params: ({ args }) => {
//     return { moreConvenientName: args.foobamboozle }
//   }
// }
