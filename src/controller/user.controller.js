import fs from 'fs'
import path from 'path'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const userFilePath = path.join(__dirname, '../database/users.json')

export const findUsersController = () => {
    const users = JSON.parse(fs.readFileSync(userFilePath, 'utf8'))
    return users
}

export const getUserController = (id) => {
    const users = JSON.parse(fs.readFileSync(userFilePath, 'utf8'))
    const user = users.find(user => user.id === id)
    return user
}

export const createUserController = (data) => {
    console.log("DATA ==> ", data);
    let users = JSON.parse(fs.readFileSync(userFilePath, 'utf8'))
    const userCreated = {
        id: users[users.length -1].id + 1,
        name: data.name
    }
    users.push(userCreated)
    const newListUsers = [...users]
    fs.writeFileSync(userFilePath, JSON.stringify(newListUsers))
    return userCreated 
}

export const deleteUserController = (id) => {

    let users = JSON.parse(fs.readFileSync(userFilePath, 'utf8'))
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
          users.splice(i, 1);
          break;
        }
    }
    fs.writeFileSync(userFilePath, JSON.stringify(users))    
return ("El usuario ",id," ha sido eliminado") 

}
export const updateUserController = (id,data) => {
    console.log("DATA ==> ", data)
    let users = JSON.parse(fs.readFileSync(userFilePath, 'utf8'))
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
          users[i].name=(data.name);
          break;
        }
    }
    fs.writeFileSync(userFilePath, JSON.stringify(users))    
    return ("El usuario ",id," ha sido actualizado") 
}