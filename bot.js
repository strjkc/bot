const Discord = require('discord.js');
const config = require('./config.js')
const client = new Discord.Client();
const timestamps = [
    [
        '8:50',
        '9:50',
        '10:50',
        '11:50',
        '1:20',
        '2:20',
        '3:20',

    ],
    [
        '9:00',
        '10:00',
        '11:00',
        '12:30',
        '1:30',
        '2:30',
        '3:30'
    ]
]

const testSpamps = [
    [
        '7:45',
        '7:47',
        '7:49',
        '7:51',
        '7:53',
        '7:55',
        '7:57',

    ],
    [
        '7:47',
        '7:48',
        '7:50',
        '7:52',
        '7:54',
        '7:56',
        '7:58',
    ]
]

client.on('ready', () => {
  console.log('I am ready!');
});
client.on('message', message => {
    if (message.content.toLocaleLowerCase().includes('djilas'))
        message.channel.send('lopov')
    else if (message.content.toLocaleLowerCase().includes('jutro'))
        message.channel.send('Pocinje jos jedan dan u paklu :)')
    else if (message.content.toLocaleLowerCase().includes('poz '))
        message.channel.send('caos bagro')
    else if (message.content.toLocaleLowerCase().includes('strahinja'))
        message.channel.send('straja == your absolute overlord')
    else if (message.content.toLocaleLowerCase().includes('deda'))
        message.channel.send('gradjanin drugog reda')    
})


client.login(config.token);