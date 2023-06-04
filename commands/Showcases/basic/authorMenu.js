module.exports = [{
    name: "authorMenu",
    info: {
        description: "Shows an example of a Author SelectMenu"
      },
    code: `
    $title[Author SelectMenu]
    $description[Select one of the options from the menu!]
    $color[Random]
    $addSelectMenu[1;customID_$authorID;a example placeholder;1;1;false;Option 1:some description:value1:false;Option 2:some description here as well:value2:false]`
    // We start off by creating embeds with functions like $title, $description, including $color!
    // We then create a select menu with two options using the function $addSelectMenu!
    /* We added customID_$authorID, where "customID" represents the customID and "$authorID" the author of the message which will be able to usage the command. */
    },{
      type: "interaction",
      prototype: "selectMenu",
      code:`
    $interactionReply[;{newEmbed:{title:Author SelectMenu}{description:First Option.}{color:Random}}]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {options:{ephemeral:true}}
    {extraOptions:{interaction:true}}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==customID;]
    $onlyIf[$interactionData[values[0]]==value1;]`
    // We use $interactionReply to reply to the button "Example" with it's custom id aka "customID"!
    // We add the first $onlyif to return the select menu option's custom id which in this case is "value1"!
    // We also add the second $onlyIf with $advancedTextSplit including $interactionData to get the select menu's custom id name.
    // We then add the third $onlyif with the same functions, this time to make sure that only who can use the menu is the person who executed the command as well.
    },{
        type: "interaction",
        prototype: "selectMenu",
        code:`
      $interactionReply[;{newEmbed:{title:Author SelectMenu}{description:Second Option.}{color:Random}}]
      
      $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {options:{ephemeral:true}}
      {extraOptions:{interaction:true}}]
      $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==customID;]
      $onlyIf[$interactionData[values[0]]==value2;]
      `
    // This needs no explanation as it's the same process of the previous interaction command above!
      }]