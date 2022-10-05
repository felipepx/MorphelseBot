require('dotenv').config();
const {Client, Intents} = require('discord.js');

const client = new Client({
    Intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILDS,
    ],
});

client.on('ready', () =>)