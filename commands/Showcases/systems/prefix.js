module.exports = [{
    name: "prefix",
    info: {
        description: "Returns current prefix including changing it",
        note: "If no new prefix has been specified, then it will only show the current prefix in the server you're in",
        limits: "you can only set an prefix that isn't longer than 5 characters",
        permission: "Changing prefix can only be done by people with manage server permission"
      },
    code: `
    $setGuildVar[prefix;$message]
    Changed prefix from \`$get[oldprefix]\` to \`$get[newprefix]\`.
    $onlyIf[$getGuildVar[prefix]!=$message; this prefix is already in use]
    $cooldown[2s;slow down, don't spam the command]
    $onlyIf[$charCount[$message]<=5;prefix can't be longer than 5 characters]
    $let[newprefix;$message]
    $let[oldprefix;$getGuildVar[prefix]]
    $onlyPerms[manageguild;You need to have \`ManageServer\` perm.]
    $onlyIf[$message!=;Prefix: \`$getGuildVar[prefix]\` 
Usage to change prefix: \`$getGuildVar[prefix]prefix < new prefix here> \`]
    `
    // We use $onlyPerms to limit the command to people with manage server permission.
    // We then add a $onlyIf to prevent changing the prefix to nothing which then makes the bot show the current prefix in the server the command is ran in.
    // We add two $let which allows us to get the old prefix and the new one set by the user from prefix command!
    // After that, we include another $onlyIf that prevents prefix from being longer than 5 characters!
    // We add two $get to return the old prefix and the new one from $let function using the same name such as "oldprefix".
    // Finally, we set the new prefix the user has entered using $setGuildVar function.
  },{
      name: "prefix-reset",
      aliases: "reset-prefix",
      info: {
        description: "Resets the current prefix if changed previously",
        limits: "The prefix can only be reset if it's not the default one",
        permission: "Resetting prefix can only be done by people with manage server permission"
      },
      code: ` $setGuildVar[prefix;]
  The prefix has been successfully resetted. <3
  $cooldown[2s;slow down, don't spam the command]
  $onlyIf[$getGuildVar[prefix]!=$getGuildVar[originalprefix];cannot reset when the prefix is default]
  $onlyPerms[manageguild;You need to have \`ManageServer\` perm.]`
  // We use $onlyPerms to limit the command to people with manage server permission just like the previous command.
  // We then add a $onlyIf to prevent resetting the prefix if it's the default prefix.
  // We then use $setGuildVar and leaving the value blank which resets the current prefix to the default one.
  // Finally, we obviously add a message to tell the user that the prefix has been resetted.
  }]