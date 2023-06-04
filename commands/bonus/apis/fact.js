module.exports = {
    name: "fact",
    info: {
      description: "Gives you random fact everytime you run the command",
    },
    code: `$getObjectProperty[fact]
    $createObject[$jsonRequest[https://api.popcat.xyz/fact]]
    $cooldown[2s;slow down, don't spam the command]
    `
  }
  // First of all, we use $jsonRequest with $createObject to avoid making the code run slower.
  // We then return the data from popcat api's fact endpoint property "fact" using $getObjectProperty which then returns random facts!
  // Finally, we include $cooldown for two seconds to avoid spamming the command.