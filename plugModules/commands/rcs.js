const { isNil } = require("lodash");

module.exports = function Command(bot) {
  bot.plugCommands.register({
    names: ["rcs", "rcslink"],
    minimumPermission: 0,
    cooldownType: "perUse",
    cooldownDuration: 300,
    parameters: "[@username]",
    description: "Links the third-party enhancement extension/script, RCS.",
    async execute(rawData, { args }, lang) { // eslint-disable-line no-unused-vars
      const username = args.join(" ").substr(1);
      const users = bot.plug.getUsers();
      const user = users.filter(u => u.username.toLowerCase() === username.toLowerCase())[0] ||
				users.filter(u => u.username.toLowerCase().trim() === username.toLowerCase().trim())[0];

      let mention = "";

      if (!isNil(user)) {
        mention = `@${user}`;
      }

      this.reply(lang.rcs, { mention }, 6e4);
      return true;
    },
  });
};