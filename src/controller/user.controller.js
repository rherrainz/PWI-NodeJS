import fs from 'fs'
import path from 'path'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const userFilePath = path.join(__dirname, '../database/users.json')

export const findUsersController = (req, res) => {
    const users = JSON.parse(fs.readFileSync(userFilePath, 'utf8'))
    console.log("users", users)
    return users
}