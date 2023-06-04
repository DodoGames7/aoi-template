module.exports = {
    name: "invite",
    info: {
        description: "Shows you an embed with an button to invite your bot"
      },
    code: `$title[Invite]
    $description[you can invite me by clicking on the button below]
    $addButton[1;Invite link;5;$nonEscape[$getClientInvite[sendmessages;viewchannel]];false]`
}
// First of all, we start by creating embeds using the function $title and $description!
// We're using $nonEscape inside $getClientInvite to avoid escaping characters of the bot's invite link.
// We create a button using the function $addButton!
// We then use type 5 on $addButton as a button type which is an button link to tell aoi that it's an button link!