const dotenv = require('dotenv')
dotenv.config();

const logger = require('./logger')

logger.info('Log info informaton')
logger.warn('Log warn informaton')
logger.debug('Log debug informaton')