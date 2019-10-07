// Now i can run hygen route new --name randomThing and name question will not be asked. or if I leave off the --name, the name question will be asked. hygen route new

module.exports = questions => ({ prompter, args }) => {
  const providedArgs = questions.reduce((selectedArgs, question) => {
    if (args[question.name]) selectedArgs[question.name] = args[question.name]
    return selectedArgs
  }, {})

  return prompter
    .prompt(questions.filter(({ name }) => !providedArgs[name]))
    .then(answers => ({ ...answers, ...providedArgs }))
}
