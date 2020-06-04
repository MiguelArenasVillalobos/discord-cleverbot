const Discord = require('discord.js');
const client = new Discord.Client();
const cleverbot = require("cleverbot-free");

const _token = '';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const _context = [];

client.on('message', message => {
  
  if(message.channel.type === 'text') {
    return;
  }

  if(message.author.bot) {
    return;
  }

  if(message.author.id === client.user.id) {
    return;
  }

  _context.push(message.content);
  console.log(`${message.author.tag}: ${message.content}`)

  cleverbot(message.content, _context).then(response => {

    _context.push(response);
    message.reply(response);

    console.log(`Cleverbot: ${response}`);
  }).catch(err => console.log(err));

});

client.login(_token);