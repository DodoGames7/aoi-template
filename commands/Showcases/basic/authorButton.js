module.exports = [{
    name: "authorButton",
    info: {
        description: "Shows an example of a Author Button"
      },
    code: `
    $title[Author Button]
    $description[Press the Button!]
    $color[Random]
    $addButton[1;Example;primary;customID_$authorID;false]`
    // We start off by creating embeds with functions like $title, $description, including $color!
    // We then create a button using the function $addButton!
    /* After that, we add customID_$authorID on $addButton customid, where "customID" represents the customID and "$authorID" the author of the message which will be able to usage the command. */
    }, {
      type: "interaction",
      prototype: "button",
      code:`
    $interactionReply[;{newEmbed:{title:Author Button}{description:First Page.}{color:Random}}]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {options:{ephemeral:true}}
    {extraOptions:{interaction:true}}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==customID;]`
    }]
    // We use $interactionReply to reply to the button "Example" with it's custom id aka "customID"!
    // We then add the first $onlyIf with $advancedTextSplit including $interactionData to get the button's custom id name
    // We then add the second $onlyif with the same functions, this time to make sure that only who can use the button is the person who executed the command as well.