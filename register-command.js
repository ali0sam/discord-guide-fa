const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
// ezafe kardn [dotenv] be file
require("dotenv").config();

// daryaft data ha az file [.env]
let clientID = process.env.CLIENT_ID
let token = process.env.TOKEN
let guildID = process.env.GUILD_ID



const commands = [{
  name: 'ping',
  description: 'in command dar javab mige [Pong!] :)'
}]; 

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
  try {
    console.log('dar hal ezafe kardn (/) command');

    await rest.put(
      Routes.applicationGuildCommands(clientID, guildID),
      { body: commands },
    );
      // for global register 
      // await rest.put(Routes.applicationCommands(CLIENT_ID),{ body: commands },);

    console.log('(/) command be server ezafe shod!');
  } catch (error) {
    console.error(error);
  }
})();
