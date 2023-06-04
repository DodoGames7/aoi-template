module.exports = {
    name: "eval",
    aliases: "e",
    info: {
      description: "Allows you to eval a aoi code to test",
      example: "[prefix]eval $packageVersion",
      note: "This command can only be used by bot owners"
    },
    code: `$eval[$message]
    $onlyIf[$message!=;You need to evaluate something.]
    $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
    `
  }
  // First of all, we add the command eval with the name "eval" including a alias "e" which executes the command as well.
  // After that, we use $onlyIf with $checkContains to restrict dev commands to bot owners using $clientOwnerIDs!
  // We then use another $onlyIf to avoid evaling nothing which asks the bot owner to give a code to execute.
  // Finally, we then use $eval with $message to eval codes from the user's command argument!