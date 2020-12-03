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
                    else if (timestamps[0].includes(time2.substring(0,4)))
                        message.channel.send('PAUYA <3 @everyone')
                    else if (timestamps[1].includes(time2.substring(0,4)))
                        message.channel.send('GOTOVA PAUYA :( @everyone')
                }, 60000)
            }
        },1000)        
    } else if (message.content === '!terminate')
        clearInterval(id)

})


client.login(config.token);