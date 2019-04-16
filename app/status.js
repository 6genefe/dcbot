const Discord = require("discord.js");
const bot = new Discord.Client();
const moment = require('moment');
const chalk = require('chalk');
const client = new Discord.Client();
require('moment-duration-format');
const { GOOGLE_API_KEY } = require('./anahtarlar.json');
const YouTube = require('simple-youtube-api');
const queue = new Map();  
const youtube = new YouTube(GOOGLE_API_KEY);
const ytdl = require('ytdl-core');

let prefix = "d!";//botun ön eki 
let owner = "330397938578751488";// sizin id'niz


bot.on("ready", guild => {
    bot.user.setActivity('test aşamasında', { type: 'PLAYING'  })
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + bot.channels.size + ` adet kanala, ` + bot.guilds.size + ` adet sunucuya ve ` + bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
    console.log("Bağlandım!")
});


const ayarlar = require('./ayarlar.json');
