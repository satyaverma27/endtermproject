import {createLogger,transports,format} from 'winston'

const buy_a_swagLogger=createLogger({
    transports:[
        new transports.File({
            filename:'buy_a_swag.log',
            level:'info',
            format: format.combine(format.timestamp(),format.json())
        }),
        new transports.File({
            filename:'buy_a_swag.log',
            levell:'error',
            format: format.combine(format.timestamp(),format.json())
        })
    ]
})


export{
    buy_a_swagLogger
}