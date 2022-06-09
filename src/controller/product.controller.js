import fs from 'fs'
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));
const userFilePath = path.join(__dirname, '../database/products.json')

export const findProducts = () => {
    const products = JSON.parse(fs.readFileSync(userFilePath, 'utf8'))
    return products
}

export const findProduct = (id) => {
    const products = JSON.parse(fs.readFileSync(userFilePath, 'utf8'))
    const product = products.find(product => product.id === id)
    return product
}

