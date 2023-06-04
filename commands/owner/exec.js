module.exports = {
    name: "execute",
    aliases: "exec",
    info: {
      description: "Allows running terminal commands in discord",
      example: "[prefix]exec node -v",
      note: "This command can only be used by bot owners"
    },
    code: `
    \`\`\`js
    $exec[$message]
    \`\`\`
    $onlyIf[$message!=;Send me an terminal command to be executed.]
    $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
  
    `
  }
  // First of all, we add the command eval with the name "execute" including a alias "exec" which executes the command as well.
  // After that, we use $onlyIf with $checkContains to restrict dev commands to bot owners using $clientOwnerIDs!
  // We then use another $onlyIf to avoid executing nothing which asks the bot owner to give a terminal command to execute.
  // Finally, we then use $exec with $message to eval codes from the user's command argument!