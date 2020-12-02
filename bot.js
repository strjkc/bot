const Discord = require('discord.js');
const config = require('./config.js')
const client = new Discord.Client();
const timestamps = [
    '9:50:00 AM',
    '10:00:00 AM',
    '10:50:00 AM',
    '11:00:00 AM',
    '11:50:00 AM',
    '12:00:00 AM',
    '12:50:00 AM',
    '01:30:00 PM',
    '02:20:00 PM',
    '02:30:00 PM',
    '03:20:00 PM',
    '02:30:00 PM',
    '04:20:00 PM',
    '05:00:00 PM',
]
const testStamps = [
    [
        '7:50',
        '7:52',
        '7:54',
        '7:56',
        '7:58',
        '7:60',
        '7:62',

    ],
    [
        '7:51',
        '7:53',
        '7:55',
        '7:57',
        '7:59',
        '7:61',
        '7:63',
    ]
]
client.on('ready', () => {
  console.log('I am ready!');
});

let Message = '!startat 9:10'
let messageToSend = 'Default message'
client.on('message', message => {
    console.log(message.content)
    if (message.content.includes('!startat')){
        console.log('starting outer fun')
        const r = message.content.substring(9)
        const id = setInterval(() =>{
            let time = new Date().toLocaleTimeString().substring(0,4)
            console.log(r,)
            if (time === r){
                clearInterval(id)
                console.log('interval cleared')
                setInterval( () => {
                    console.log('inner starting')
                    let time = new Date().toLocaleTimeString()
                    console.log(time)
                    console.log(testStamps[0].includes(time))
                    if (time.substring(0,4) === '9:00' && time.includes('AM'))
                        message.send('Dobro jutro :)')
                    else if (time.substring(0,4) === '5:00' && time.includes('PM'))
                        message.send('Dobro jutro :)')
                    else if (testStamps[0].includes(time.substring(0,4)))
                        message.channel.send('PAUYA <3 @everyone')
                    else if (testStamps[1].includes(time.substring(0,4)))
                        message.channel.send('GOTOVA PAUYA :( @everyone')
                }, 60000)
            }
        },1000)
        console.log('running')
        
    }

})


// Log our bot in using the token from https://discord.com/developers/applications
client.login(config.token);