//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "༒MrHãçI{ërLørd༒" //ur yt chanel name
global.socialm = "GitHub: MrHackerLordz" //ur github or insta name
global.location = "precised Location" //ur location

//new
global.botname = '༒MrHãçI{ërLørd Botz༒' //ur bot name
global.ownernumber = '2348184059232' //ur owner number
global.ownername = '༒MrHãçI{ërLørd༒' //ur owner name
global.websitex = "https://youtu.be/@humblesmart951"
global.wagc = "https://chat.whatsapp.com/Br36qv7KCGK7xQyw252jNA"
global.themeemoji = '🧑‍💻'
global.wm = "Lordz Bot Inc."
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD11' //script link
global.packname = "Sticker By"
global.author = "༒MrHãçI{ërLørd༒\n\n+916909137213"
global.creator = "2348184059232@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["2348184059232"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = true //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic0.jpg')
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic0.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic1.jpg") //ur error pic

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
