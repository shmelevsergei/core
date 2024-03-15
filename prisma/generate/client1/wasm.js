
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.10.2
 * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
 */
Prisma.prismaVersion = {
  client: "5.10.2",
  engine: "5a9203d0590c951969e85a7d07215503f4672eb9"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.GA_ANKETA_ADDRScalarFieldEnum = {
  AAD_ABA_ID: 'AAD_ABA_ID',
  AAD_SHIROTA: 'AAD_SHIROTA',
  AAD_DOLGOTA: 'AAD_DOLGOTA',
  AAD_OBLAST: 'AAD_OBLAST',
  AAD_GOROD: 'AAD_GOROD',
  AAD_ADDR: 'AAD_ADDR',
  AAD_POSTCODE: 'AAD_POSTCODE'
};

exports.Prisma.GA_ANKETA_BASEScalarFieldEnum = {
  ABA_WSU_ID: 'ABA_WSU_ID',
  ABA_STO_NAME: 'ABA_STO_NAME',
  ABA_STO_ID1: 'ABA_STO_ID1',
  ABA_REMZONA_QTY: 'ABA_REMZONA_QTY',
  ABA_ENABLED: 'ABA_ENABLED',
  ABA_PHONE: 'ABA_PHONE',
  ABA_INN: 'ABA_INN',
  ABA_DATETIME_CREATED: 'ABA_DATETIME_CREATED',
  ABA_DATETIME_UPDATED: 'ABA_DATETIME_UPDATED',
  ABA_ID: 'ABA_ID',
  ABA_DATETIME: 'ABA_DATETIME',
  ABA_STO_ID2: 'ABA_STO_ID2',
  ABA_STO_NAME_FIND: 'ABA_STO_NAME_FIND',
  ABA_DESC: 'ABA_DESC'
};

exports.Prisma.GA_ANKETA_DOGOVORScalarFieldEnum = {
  ADO_ABA_ID: 'ADO_ABA_ID',
  ADO_NAME1: 'ADO_NAME1',
  ADO_NAME2: 'ADO_NAME2',
  ADO_NAME3: 'ADO_NAME3',
  ADO_PHONE: 'ADO_PHONE',
  ADO_EMAIL: 'ADO_EMAIL',
  ADO_DATETIME: 'ADO_DATETIME',
  ADO_STATUS: 'ADO_STATUS'
};

exports.Prisma.GA_ANKETA_OBOROTScalarFieldEnum = {
  ABO_ABA_ID: 'ABO_ABA_ID',
  ABO_DATETIME: 'ABO_DATETIME',
  ABO_OBOROT_ALL: 'ABO_OBOROT_ALL',
  ABO_OBOROT_BRANDS_MONTH: 'ABO_OBOROT_BRANDS_MONTH',
  ABO_OBOROT_AE: 'ABO_OBOROT_AE',
  ABO_OBOROT_ROSSKO: 'ABO_OBOROT_ROSSKO',
  ABO_OBOROT_ARKONA: 'ABO_OBOROT_ARKONA',
  ABO_OBOROT_AUTORUS: 'ABO_OBOROT_AUTORUS',
  ABO_SCORES_MONTH_PLAN: 'ABO_SCORES_MONTH_PLAN',
  ABO_SCORES_MONTH_FAKT: 'ABO_SCORES_MONTH_FAKT',
  ABO_COUNT_ROSSKO: 'ABO_COUNT_ROSSKO',
  ABO_COUNT_AE: 'ABO_COUNT_AE',
  ABO_COUNT_ARKONA: 'ABO_COUNT_ARKONA',
  ABO_COUNT_AUTORUS: 'ABO_COUNT_AUTORUS',
  ABO_OBOROT_BRANDS: 'ABO_OBOROT_BRANDS',
  ABO_OBOROT_BRAND_LOOK1: 'ABO_OBOROT_BRAND_LOOK1',
  ABO_SCORES: 'ABO_SCORES',
  ABO_OBOROT_BRAND_LOOK2: 'ABO_OBOROT_BRAND_LOOK2',
  ABO_OBOROT_BRAND_LOOK2_ROSSKO: 'ABO_OBOROT_BRAND_LOOK2_ROSSKO',
  ABO_OBOROT_BRAND_LOOK2_AE: 'ABO_OBOROT_BRAND_LOOK2_AE',
  ABO_OBOROT_BRAND_LOOK2_ARKONA: 'ABO_OBOROT_BRAND_LOOK2_ARKONA',
  ABO_OBOROT_BRAND_LOOK2_AUTORUS: 'ABO_OBOROT_BRAND_LOOK2_AUTORUS',
  ABO_OBOROT_BRANDS_MONTH_ROSSKO: 'ABO_OBOROT_BRANDS_MONTH_ROSSKO',
  ABO_OBOROT_BRANDS_MONTH_AE: 'ABO_OBOROT_BRANDS_MONTH_AE',
  ABO_OBOROT_BRANDS_MONTH_ARKONA: 'ABO_OBOROT_BRANDS_MONTH_ARKONA',
  ABO_OBOROT_BRANDS_MONTH_AUTORUS: 'ABO_OBOROT_BRANDS_MONTH_AUTORUS',
  ABO_OBOROT_BRAND1: 'ABO_OBOROT_BRAND1',
  ABO_OBOROT_BRAND2: 'ABO_OBOROT_BRAND2',
  ABO_OBOROT_BRAND3: 'ABO_OBOROT_BRAND3',
  ABO_OBOROT_BRAND4: 'ABO_OBOROT_BRAND4',
  ABO_OBOROT_BRAND5: 'ABO_OBOROT_BRAND5',
  ABO_OBOROT_BRAND6: 'ABO_OBOROT_BRAND6',
  ABO_OBOROT_NEXT: 'ABO_OBOROT_NEXT',
  ABO_SCORES_MONTH_PLAN_NEXT: 'ABO_SCORES_MONTH_PLAN_NEXT',
  ABO_ABA_REMZONA_QTY: 'ABO_ABA_REMZONA_QTY',
  ABO_OBOROT_PARTRA: 'ABO_OBOROT_PARTRA',
  ABO_SCORES_PARTRA: 'ABO_SCORES_PARTRA'
};

exports.Prisma.GA_ANKETA_BRANDScalarFieldEnum = {
  ABR_ABA_ID: 'ABR_ABA_ID',
  ABR_STATUS: 'ABR_STATUS',
  ABR_DATETIME: 'ABR_DATETIME',
  ABR_HALF_STATUS: 'ABR_HALF_STATUS',
  ABR_VYVESKA_STATUS: 'ABR_VYVESKA_STATUS',
  ABR_KOROB_STATUS: 'ABR_KOROB_STATUS'
};

exports.Prisma.GA_ANKETA_SCORESScalarFieldEnum = {
  ANS_WSU_ID: 'ANS_WSU_ID',
  ANS_SCORES: 'ANS_SCORES',
  ANS_DATETIME: 'ANS_DATETIME',
  ANS_ISSHOW: 'ANS_ISSHOW'
};

exports.Prisma.GA_ANKETA_SCORES_HISTORYScalarFieldEnum = {
  ASH_WSU_ID: 'ASH_WSU_ID',
  ASH_SCORES: 'ASH_SCORES',
  ASH_DATETIME: 'ASH_DATETIME',
  ASH_DESC: 'ASH_DESC',
  ASH_TYPE: 'ASH_TYPE',
  ASH_SCORES_OLD: 'ASH_SCORES_OLD',
  ASH_EVENT_STATUS: 'ASH_EVENT_STATUS',
  ASH_DATETIME_UPDATE: 'ASH_DATETIME_UPDATE',
  ASH_IZO_ID: 'ASH_IZO_ID'
};

exports.Prisma.GA_ANKETA_SOREVNOVANIEScalarFieldEnum = {
  ASR_YEAR: 'ASR_YEAR',
  ASR_MONTH: 'ASR_MONTH',
  ASR_WSU_ID: 'ASR_WSU_ID',
  ASR_LOGIN: 'ASR_LOGIN',
  ASR_FIO: 'ASR_FIO',
  ASR_SCORE: 'ASR_SCORE',
  ASR_DOLJNOST: 'ASR_DOLJNOST',
  ASR_RUKOVODITEL: 'ASR_RUKOVODITEL'
};

exports.Prisma.GA_WS_USERSScalarFieldEnum = {
  WSU_ID: 'WSU_ID',
  WSU_WSO_ID: 'WSU_WSO_ID',
  WSU_EMAIL: 'WSU_EMAIL',
  WSU_NAME: 'WSU_NAME',
  WSU_FULL_NAME: 'WSU_FULL_NAME',
  WSU_PHONE: 'WSU_PHONE',
  WSU_ADDRESS: 'WSU_ADDRESS',
  WSU_PASSWD: 'WSU_PASSWD',
  WSU_ID_IN_DS: 'WSU_ID_IN_DS',
  WSU_INN: 'WSU_INN',
  WSU_PRICE_TYPE: 'WSU_PRICE_TYPE',
  WSU_GRP_ID: 'WSU_GRP_ID',
  WSU_WS_ID: 'WSU_WS_ID',
  WSU_MOBILE: 'WSU_MOBILE',
  WSU_SHOW_SUP_ALIAS: 'WSU_SHOW_SUP_ALIAS',
  WSU_IS_ZS: 'WSU_IS_ZS',
  WSU_PASSWD_ENC: 'WSU_PASSWD_ENC',
  WSU_LOGIN_ENC: 'WSU_LOGIN_ENC',
  WSU_DATETIME_LAST_LOGIN: 'WSU_DATETIME_LAST_LOGIN',
  WSU_START_PAGE: 'WSU_START_PAGE',
  WSU_SALT: 'WSU_SALT',
  WSU_TEMP_TICKET: 'WSU_TEMP_TICKET',
  WSU_TEMP_TICKET_DATETIME: 'WSU_TEMP_TICKET_DATETIME',
  WSU_DATETIME_CREATE: 'WSU_DATETIME_CREATE'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  GA_ANKETA_ADDR: 'GA_ANKETA_ADDR',
  GA_ANKETA_BASE: 'GA_ANKETA_BASE',
  GA_ANKETA_DOGOVOR: 'GA_ANKETA_DOGOVOR',
  GA_ANKETA_OBOROT: 'GA_ANKETA_OBOROT',
  GA_ANKETA_BRAND: 'GA_ANKETA_BRAND',
  GA_ANKETA_SCORES: 'GA_ANKETA_SCORES',
  GA_ANKETA_SCORES_HISTORY: 'GA_ANKETA_SCORES_HISTORY',
  GA_ANKETA_SOREVNOVANIE: 'GA_ANKETA_SOREVNOVANIE',
  GA_WS_USERS: 'GA_WS_USERS'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
