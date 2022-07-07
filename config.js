/* Copyright (C) 2022 Anonymous
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
ANONY HIRUWA
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    BOT: '🔐 ᴀɴᴏɴʏᴍᴏᴜꜱ ʙᴏᴛ 🔐',
    OWNER: process.env.OWNER_NAME === undefined ? 'Hiruwa' : process.env.OWNER_NAME,
    OWNERNUM: process.env.OWNER_NUMBER === undefined ? '94771039631' : process.env.OWNER_NUMBER,
    BRANCH: 'main',
    DEVELOPER: 'HIRUWA',
    AUTHOR: '👿 ʜɪʀᴜᴡᴀ 👿',
    GIT: 'https://githu',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
};
 
