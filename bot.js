const Discord = require('discord.js');
const config = require('./config.js')
const client = new Discord.Client();
const timestamps = [
    [
        '9:50',
        '10:50',
        '11:50',
        '12:50',
        '2:20',
        '3:20',
        '4:20',

    ],
    [
        '10:00',
        '11:00',
        '12:00',
        '1:30',
        '2:30',
        '3:30',
        '4:30'
    ]
]

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
    console.log(message.content)
    if (message.content.includes('!startat')){
        console.log('Starting')
        const r = message.content.substring(9)
        const id = setInterval(() =>{
            let time = new Date().toLocaleTimeString().substring(0,4)
            if (time === r){
                clearInterval(id)
                setInterval( () => {
                    let time = new Date().toLocaleTimeString()
                    console.log(time)
                    console.log(timestamps[0].includes(time))
                    if (time.substring(0,4) === '9:00' && time.includes('AM'))
                        message.send('Dobro jutro :)')
                    else if (time.substring(0,4) === '5:00' && time.includes('PM'))
                        message.send('Poz :)')
                    else if (timestamps[0].includes(time.substring(0,4)))
                        message.channel.send('PAUYA <3 @everyone')
                    else if (timestamps[1].includes(time.substring(0,4)))
                        message.channel.send('GOTOVA PAUYA :( @everyone')
                }, 60000)
            }
        },1000)        
    }

})


// Log our bot in using the token from https://discord.com/developers/applications
client.login(config.token);