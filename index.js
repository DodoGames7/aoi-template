const { AoiClient, LoadCommands, Util } = require("aoi.js");
const config = require("./config.json");
const bot = new AoiClient({
    token: process.env.token,
    prefix: "$getGuildVar[prefix]",
    intents: ["Guilds", "GuildMessages", "MessageContent"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        },
    },
    suppressAllErrors: config.suppressAllErrors,
    errorMessage: config.errorMessage
});
// handlers
const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./commands/") //you can change this to any directory you want
// setting up variables handler
bot.variables(require('./handler/variables.js'));

// enable aoi.parser for ephemeral messages
const { parse, createAst } = require('aoi.parser');
const {
    parseExtraOptions
} = require('aoi.parser/components');
 
Util.parsers.ErrorHandler = parse;
 
Util.parsers.OptionsParser = (data) => {
    return createAst(data).children.map(parseExtraOptions);
}
 