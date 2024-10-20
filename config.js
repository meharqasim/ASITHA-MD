const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=H3h3RBYT#Otx52wMmQyCkV3F4JSGD990tgVkZsoFdUAmgZgwQL2w",
MONGODB: process.env.MONGODB || "mongodb+srv://ponnapkaya1:CUfG1C4P0RUfFsSk@cluster0.7qsf0.mongodb.net/",//
};
