'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')

function createToken(user){
    const payload= {
        sub: user.id,
        iat: moment().unix(), 
        exp: moment().add(14, 'days').unix()

    }

    return jwt.encode(payload, config.SECRET_TOKEN)

}

function decodeToken(token){
    const decoded = new Promise((resolve, reject)=>{
        try{
            const payload = jwt.decode(token, config.SECRET_TOKEN)

            if(payload.exp <= moment().unix()){
                reject({
                    status: 401,
                    message: 'Token a expirado'
                }) 
            }
            resolve(payload.sub)
        }catch(err){
            reject({
                status: 500,
                message: "Token invalido"
            })

        }
    })
    
    return decoded
}

module.exports = {
    createToken,
    decodeToken
}