/*coded by muhammed&hisham
youtube https://youtube.com/c/ICHUTECH
https://youtube.com/channel/UCpGa88rhUFYj-6-LBqBbWKw
https://youtube.com/channel/UCeYZqtAtdYq8VwSIkW34JMA
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command*\n*command  ENTHEKILUM EZHUTH NENBA"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'aveng ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/logoaveng?apikey=Upe1Fp1lDAtX0ioPYLEPsSoX51i&text1=TAURUS&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by TAURUS' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'aveng ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/logoaveng?apikey=Upe1Fp1lDAtX0ioPYLEPsSoX51i&text1=TAURUS&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })


        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by TAURUS' })

    }));
    
}
