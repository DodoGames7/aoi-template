module.exports = [{
    name: "prefix",
    info: {
        description: "Returns current prefix including changing it",
        note: "If no new prefix has been specified, then it will only show the current prefix in the server you're in",
        limits: "you can only set an prefix that isn't longer than 5 characters"
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
  },{
      name: "prefix-reset",
      aliases: "reset-prefix",
      code: ` $setGuildVar[prefix;]
  The prefix has been successfully resetted. <3
  $cooldown[2s;slow down, don't spam the command]
  $onlyIf[$getGuildVar[prefix]!=$getGuildVar[originalprefix];cannot reset when the prefix is default]
  $onlyPerms[manageguild;You need to have \`ManageServer\` perm.]`
  }]