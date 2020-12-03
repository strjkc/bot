const Discord = require('discord.js');
const config = require('./config.js')
const client = new Discord.Client();
const timestamps = [
    [
        '8:50',
        '9:50',
        '10:50',
        '11:50',
        '12:20',
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
        '7:03',
        '7:05',
        '7:07',
        '7:09',
        '7:11',
        '7:12',
        '7:15',

    ],
    [
        '7:04',
        '7:06',
        '7:08',
        '7:10',
        '7:12',
        '7:14',
        '7:16',
    ]
]

client.on('ready', () => {
  console.log('I am ready!');
});
client.on('message', message => {
    if (message.content.toLocaleLowerCase().includes('djilas'))
        message.channel.send('lopov')
    let id;
    console.log('M content', message.content)
    if (message.content.includes('!startat')){
        const r = message.content.substring(9)
        id = setInterval(() =>{
            let time = new Date().toLocaleTimeString().substring(0,4)
            if (time === r){
                clearInterval(id)
                setInterval( () => {
                    let time2 = new Date().toLocaleTimeString()
                    if (time2.substring(0,4) === '8:00' && time2.includes('AM'))
                        message.send('Dobro jutro :)')
                    else if (time2.substring(0,4) === '4:00' && time2.includes('PM'))
                        message.send('Poz :)')
                    else if (testSpamps[0].includes(time2.substring(0,4)))
                        message.channel.send('PAUYA <3 @everyone')
                    else if (testSpamps[1].includes(time2.substring(0,4)))
                        message.channel.send('GOTOVA PAUYA :( @everyone')
                }, 60000)
            }
        },1000)        
    } else if (message.content === '!terminate')
        clearInterval(id)

})


// Log our bot in using the token from https://discord.com/developers/applications
client.login(config.token);