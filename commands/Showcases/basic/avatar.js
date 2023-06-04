module.exports = {
    name: "avatar",
    aliases: ["av","userav"],
    info: {
        description: "Returns your avatar or someone's avatar if mentioned a user",
        note: "mentioning user is not required",
        example: "[prefix]av < @user (optional) >",
      },
    code: `$title[$username[$mentioned[1;true]]'s Avatar]
    $image[$userAvatar[$mentioned[1;true]]
    $addButton[1;Download;5;$nonEscape[$userAvatar[$mentioned[1;true]]];false]
    $cooldown[2s;slow down, don't spam the command]
    `
  }
  // First of all, we start by creating embeds using the function $title and $image!
  // We're using $nonEscape inside $userAvatar to avoid escaping characters of the avatar link.
  // We then modify $mentioned to include "true" in the second ";" of the function to return author id if no one has been mentioned.
  // We then use type 5 on $addButton as a button type which is an button link to tell aoi that it's an button link!