module.exports = {
    name: "update",
    info: {
        description: "Restarts the entire commands of the bot",
        note: "This command can only be used by bot owners"
      },
    code: `Successfully updated all commands.
    $addButton[1;Total: $commandsCount;2;uselesscustomid;true]
    $updateCommands
    $onlyIf[$checkContains[$clientOwnerIDs[,];$authorID]==true;]
    `
    }
  // First of all, we add the command update with the name "update".
  // After that, we use $onlyIf with $checkContains to restrict dev commands to bot owners using $clientOwnerIDs!
  // We then use $updateCommands which updates all of the commands you have to the latest change you made in the commands!
  // Finally, we create a button using the function $addButton which shows total amount of your commands the bot has!
    