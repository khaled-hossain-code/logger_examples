const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;

exports.logger = createLogger({
  format: combine(
    label({ label: 'app log' }),
    timestamp(),
    prettyPrint()
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: 'combined.log',
    })
  ]
});
