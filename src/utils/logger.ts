import winston from 'winston'

enum LEVEL {
  ERROR = 0,
  WARN,
  INFO,
  HTTP,
  DEBUG,
}
const levels = {
  error: LEVEL.ERROR,
  warn: LEVEL.WARN,
  info: LEVEL.INFO,
  http: LEVEL.HTTP,
  debug: LEVEL.DEBUG,
}

const level = () => {
  const isDevelopment =
    (process.env.NODE_ENV || 'development') === 'development'
  return isDevelopment ? 'debug' : 'warn'
}
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'blue',
  debug: 'white',
}

winston.addColors(colors)

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
)

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    level: 'error',
    filename: './logs/error.log',
    format: winston.format.combine(
      winston.format.printf(
        (info) => `${info.timestamp} ${info.level}: ${info.message}`
      )
    ),
  }),
]

const Logger = winston.createLogger({
  level: level(),
  levels,
  transports,
  format,
})

export default Logger
