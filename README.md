# aoi-template
A template with my own stuff to get started on aoi. Contains example commands and some systems like prefix including bonus commands for fun.

# What does this template include?
* A example prefix system
* Author button (and select menu) showcase
* Bunch of dev commands
* Additional bonus commands for fun

We highly recommend checking codes that starts with `//` as they gives you information on how each Command works.

Example of `//` codes:
```js
// This is a comment that tells you a information about a command code on how it works.
```

# Why
Some people don't understand on how to create certain stuff in aoi.js, so i thought about making a little aoi template that aims to help people with that. I hope this templates helps some people as i worked on using my previous experience with aoi in v6 with systems i created though.

# config.json
We recommend checking config.json to modify some settings for the template bot.
### Options
```js
{
    "prefix": "!",
    "suppressAllErrors": false,
    "errorMessage": "Something has occurred."
}
```
* **prefix**: the prefix to be used in the template bot
* **suppressAllErrors**: prevents all errors from appearing (`true` to enable, `false` to disable)
* **errorMessage**: custom error message to use if `suppressAllErrors` was set to `true`