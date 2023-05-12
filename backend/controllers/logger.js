import {createLogger,transports,format} from 'winston'

const orderLogger=createLogger({
    transports:[
        new transports.File({
            filename:'order.log',
            level:'info',
            format: format.combine(format.timestamp(),format.json())
        }),
        new transports.File({
            filename:'error.log',
            levell:'error',
            format: format.combine(format.timestamp(),format.json())
        })
    ]
})

const productLogger=createLogger({
    transports:[
        new transports.File({
            filename:'product.log',
            level:'info',
            format: format.combine(format.timestamp(),format.json())
        }),
        new transports.File({
            filename:'error.log',
            levell:'error',
            format: format.combine(format.timestamp(),format.json())
        })
    ]
})

const userLogger=createLogger({
    transports:[
        new transports.File({
            filename:'user.log',
            level:'info',
            format: format.combine(format.timestamp(),format.json())
        }),
        new transports.File({
            filename:'error.log',
            levell:'error',
            format: format.combine(format.timestamp(),format.json())
        })
    ]
})

export{
    orderLogger,
    userLogger,
    productLogger
}
