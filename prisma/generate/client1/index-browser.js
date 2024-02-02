
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.7.1
 * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
 */
Prisma.prismaVersion = {
  client: "5.7.1",
  engine: "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
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
  AAD_ADDR: 'AAD_ADDR'
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
  ABA_STO_NAME_FIND: 'ABA_STO_NAME_FIND'
};

exports.Prisma.GA_ANKETA_BILETSScalarFieldEnum = {
  BIL_INN: 'BIL_INN',
  BIL_LOGIN: 'BIL_LOGIN',
  BIL_N1: 'BIL_N1',
  BIL_N2: 'BIL_N2',
  BIL_N3: 'BIL_N3',
  BIL_N4: 'BIL_N4',
  BIL_N5: 'BIL_N5',
  BIL_N6: 'BIL_N6',
  BIL_N7: 'BIL_N7',
  BIL_WSU_ID: 'BIL_WSU_ID',
  BIL_N8: 'BIL_N8',
  BIL_ABA_ID: 'BIL_ABA_ID',
  BIL_DATETIME: 'BIL_DATETIME'
};

exports.Prisma.GA_ANKETA_BRAND_IMGScalarFieldEnum = {
  ABI_ABA_ID: 'ABI_ABA_ID',
  ABI_NUM: 'ABI_NUM',
  ABI_NAME: 'ABI_NAME',
  ABI_PATH: 'ABI_PATH'
};

exports.Prisma.GA_ANKETA_DIRScalarFieldEnum = {
  AIR_ABA_ID: 'AIR_ABA_ID',
  AIR_NAME1: 'AIR_NAME1',
  AIR_NAME2: 'AIR_NAME2',
  AIR_NAME3: 'AIR_NAME3',
  AIR_PHONE: 'AIR_PHONE',
  AIR_EMAIL: 'AIR_EMAIL'
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
  ABO_ABA_REMZONA_QTY: 'ABO_ABA_REMZONA_QTY'
};

exports.Prisma.GA_ANKETA_OBOROT_BRANDSScalarFieldEnum = {
  AOB_ABA_ID: 'AOB_ABA_ID',
  AOB_DATETIME: 'AOB_DATETIME',
  AOB_ALL_24189: 'AOB_ALL_24189',
  AOB_50011_24189: 'AOB_50011_24189',
  AOB_50012_24189: 'AOB_50012_24189',
  AOB_50013_24189: 'AOB_50013_24189',
  AOB_50014_24189: 'AOB_50014_24189',
  AOB_ALL_10566: 'AOB_ALL_10566',
  AOB_50011_10566: 'AOB_50011_10566',
  AOB_50012_10566: 'AOB_50012_10566',
  AOB_50013_10566: 'AOB_50013_10566',
  AOB_50014_10566: 'AOB_50014_10566',
  AOB_ALL_20079: 'AOB_ALL_20079',
  AOB_50011_20079: 'AOB_50011_20079',
  AOB_50012_20079: 'AOB_50012_20079',
  AOB_50013_20079: 'AOB_50013_20079',
  AOB_50014_20079: 'AOB_50014_20079',
  AOB_ALL_7251: 'AOB_ALL_7251',
  AOB_50011_7251: 'AOB_50011_7251',
  AOB_50012_7251: 'AOB_50012_7251',
  AOB_50013_7251: 'AOB_50013_7251',
  AOB_50014_7251: 'AOB_50014_7251',
  AOB_ALL_24191: 'AOB_ALL_24191',
  AOB_50011_24191: 'AOB_50011_24191',
  AOB_50012_24191: 'AOB_50012_24191',
  AOB_50013_24191: 'AOB_50013_24191',
  AOB_50014_24191: 'AOB_50014_24191',
  AOB_ALL_193: 'AOB_ALL_193',
  AOB_50011_193: 'AOB_50011_193',
  AOB_50012_193: 'AOB_50012_193',
  AOB_50013_193: 'AOB_50013_193',
  AOB_50014_193: 'AOB_50014_193',
  AOB_ALL_7610: 'AOB_ALL_7610',
  AOB_50011_7610: 'AOB_50011_7610',
  AOB_50012_7610: 'AOB_50012_7610',
  AOB_50013_7610: 'AOB_50013_7610',
  AOB_50014_7610: 'AOB_50014_7610',
  AOB_ALL_10180: 'AOB_ALL_10180',
  AOB_50011_10180: 'AOB_50011_10180',
  AOB_50012_10180: 'AOB_50012_10180',
  AOB_50013_10180: 'AOB_50013_10180',
  AOB_50014_10180: 'AOB_50014_10180',
  AOB_ALL_177: 'AOB_ALL_177',
  AOB_50011_177: 'AOB_50011_177',
  AOB_50012_177: 'AOB_50012_177',
  AOB_50013_177: 'AOB_50013_177',
  AOB_50014_177: 'AOB_50014_177',
  AOB_ALL_10223: 'AOB_ALL_10223',
  AOB_50011_10223: 'AOB_50011_10223',
  AOB_50012_10223: 'AOB_50012_10223',
  AOB_50013_10223: 'AOB_50013_10223',
  AOB_50014_10223: 'AOB_50014_10223',
  AOB_ALL_7230: 'AOB_ALL_7230',
  AOB_50011_7230: 'AOB_50011_7230',
  AOB_50012_7230: 'AOB_50012_7230',
  AOB_50013_7230: 'AOB_50013_7230',
  AOB_50014_7230: 'AOB_50014_7230',
  AOB_ALL_1359: 'AOB_ALL_1359',
  AOB_50011_1359: 'AOB_50011_1359',
  AOB_50012_1359: 'AOB_50012_1359',
  AOB_50013_1359: 'AOB_50013_1359',
  AOB_50014_1359: 'AOB_50014_1359',
  AOB_ALL_110: 'AOB_ALL_110',
  AOB_50011_110: 'AOB_50011_110',
  AOB_50012_110: 'AOB_50012_110',
  AOB_50013_110: 'AOB_50013_110',
  AOB_50014_110: 'AOB_50014_110',
  AOB_ALL_20182: 'AOB_ALL_20182',
  AOB_50011_20182: 'AOB_50011_20182',
  AOB_50012_20182: 'AOB_50012_20182',
  AOB_50013_20182: 'AOB_50013_20182',
  AOB_50014_20182: 'AOB_50014_20182',
  AOB_ALL_20203: 'AOB_ALL_20203',
  AOB_50011_20203: 'AOB_50011_20203',
  AOB_50012_20203: 'AOB_50012_20203',
  AOB_50013_20203: 'AOB_50013_20203',
  AOB_50014_20203: 'AOB_50014_20203',
  AOB_ALL_24155: 'AOB_ALL_24155',
  AOB_50011_24155: 'AOB_50011_24155',
  AOB_50012_24155: 'AOB_50012_24155',
  AOB_50013_24155: 'AOB_50013_24155',
  AOB_50014_24155: 'AOB_50014_24155',
  AOB_ALL_24198: 'AOB_ALL_24198',
  AOB_50011_24198: 'AOB_50011_24198',
  AOB_50012_24198: 'AOB_50012_24198',
  AOB_50013_24198: 'AOB_50013_24198',
  AOB_50014_24198: 'AOB_50014_24198',
  AOB_ALL_135: 'AOB_ALL_135',
  AOB_50011_135: 'AOB_50011_135',
  AOB_50012_135: 'AOB_50012_135',
  AOB_50013_135: 'AOB_50013_135',
  AOB_50014_135: 'AOB_50014_135',
  AOB_ALL_24196: 'AOB_ALL_24196',
  AOB_50011_24196: 'AOB_50011_24196',
  AOB_50012_24196: 'AOB_50012_24196',
  AOB_50013_24196: 'AOB_50013_24196',
  AOB_50014_24196: 'AOB_50014_24196',
  AOB_ALL_24197: 'AOB_ALL_24197',
  AOB_50011_24197: 'AOB_50011_24197',
  AOB_50012_24197: 'AOB_50012_24197',
  AOB_50013_24197: 'AOB_50013_24197',
  AOB_50014_24197: 'AOB_50014_24197',
  AOB_ALL_21: 'AOB_ALL_21',
  AOB_50011_21: 'AOB_50011_21',
  AOB_50012_21: 'AOB_50012_21',
  AOB_50013_21: 'AOB_50013_21',
  AOB_50014_21: 'AOB_50014_21'
};

exports.Prisma.GA_ANKETA_OBOROT_BRANDS2ScalarFieldEnum = {
  AOB_ABA_ID: 'AOB_ABA_ID',
  AOB_DATETIME: 'AOB_DATETIME',
  AOB_ALL_7438: 'AOB_ALL_7438',
  AOB_50011_7438: 'AOB_50011_7438',
  AOB_50012_7438: 'AOB_50012_7438',
  AOB_50013_7438: 'AOB_50013_7438',
  AOB_50014_7438: 'AOB_50014_7438',
  AOB_ALL_7801: 'AOB_ALL_7801',
  AOB_50011_7801: 'AOB_50011_7801',
  AOB_50012_7801: 'AOB_50012_7801',
  AOB_50013_7801: 'AOB_50013_7801',
  AOB_50014_7801: 'AOB_50014_7801',
  AOB_ALL_7763: 'AOB_ALL_7763',
  AOB_50011_7763: 'AOB_50011_7763',
  AOB_50012_7763: 'AOB_50012_7763',
  AOB_50013_7763: 'AOB_50013_7763',
  AOB_50014_7763: 'AOB_50014_7763',
  AOB_ALL_265: 'AOB_ALL_265',
  AOB_50011_265: 'AOB_50011_265',
  AOB_50012_265: 'AOB_50012_265',
  AOB_50013_265: 'AOB_50013_265',
  AOB_50014_265: 'AOB_50014_265',
  AOB_ALL_24158: 'AOB_ALL_24158',
  AOB_50011_24158: 'AOB_50011_24158',
  AOB_50012_24158: 'AOB_50012_24158',
  AOB_50013_24158: 'AOB_50013_24158',
  AOB_50014_24158: 'AOB_50014_24158',
  AOB_ALL_7219: 'AOB_ALL_7219',
  AOB_50011_7219: 'AOB_50011_7219',
  AOB_50012_7219: 'AOB_50012_7219',
  AOB_50013_7219: 'AOB_50013_7219',
  AOB_50014_7219: 'AOB_50014_7219'
};

exports.Prisma.GA_ANKETA_OBOROT_COUNTSScalarFieldEnum = {
  AOC_ABA_ID: 'AOC_ABA_ID',
  AOC_DATETIME: 'AOC_DATETIME',
  AOC_ALL_24189: 'AOC_ALL_24189',
  AOC_50011_24189: 'AOC_50011_24189',
  AOC_50012_24189: 'AOC_50012_24189',
  AOC_50013_24189: 'AOC_50013_24189',
  AOC_50014_24189: 'AOC_50014_24189',
  AOC_ALL_10566: 'AOC_ALL_10566',
  AOC_50011_10566: 'AOC_50011_10566',
  AOC_50012_10566: 'AOC_50012_10566',
  AOC_50013_10566: 'AOC_50013_10566',
  AOC_50014_10566: 'AOC_50014_10566',
  AOC_ALL_20079: 'AOC_ALL_20079',
  AOC_50011_20079: 'AOC_50011_20079',
  AOC_50012_20079: 'AOC_50012_20079',
  AOC_50013_20079: 'AOC_50013_20079',
  AOC_50014_20079: 'AOC_50014_20079',
  AOC_ALL_7251: 'AOC_ALL_7251',
  AOC_50011_7251: 'AOC_50011_7251',
  AOC_50012_7251: 'AOC_50012_7251',
  AOC_50013_7251: 'AOC_50013_7251',
  AOC_50014_7251: 'AOC_50014_7251',
  AOC_ALL_24191: 'AOC_ALL_24191',
  AOC_50011_24191: 'AOC_50011_24191',
  AOC_50012_24191: 'AOC_50012_24191',
  AOC_50013_24191: 'AOC_50013_24191',
  AOC_50014_24191: 'AOC_50014_24191',
  AOC_ALL_193: 'AOC_ALL_193',
  AOC_50011_193: 'AOC_50011_193',
  AOC_50012_193: 'AOC_50012_193',
  AOC_50013_193: 'AOC_50013_193',
  AOC_50014_193: 'AOC_50014_193',
  AOC_ALL_7610: 'AOC_ALL_7610',
  AOC_50011_7610: 'AOC_50011_7610',
  AOC_50012_7610: 'AOC_50012_7610',
  AOC_50013_7610: 'AOC_50013_7610',
  AOC_50014_7610: 'AOC_50014_7610',
  AOC_ALL_10180: 'AOC_ALL_10180',
  AOC_50011_10180: 'AOC_50011_10180',
  AOC_50012_10180: 'AOC_50012_10180',
  AOC_50013_10180: 'AOC_50013_10180',
  AOC_50014_10180: 'AOC_50014_10180',
  AOC_ALL_177: 'AOC_ALL_177',
  AOC_50011_177: 'AOC_50011_177',
  AOC_50012_177: 'AOC_50012_177',
  AOC_50013_177: 'AOC_50013_177',
  AOC_50014_177: 'AOC_50014_177',
  AOC_ALL_10223: 'AOC_ALL_10223',
  AOC_50011_10223: 'AOC_50011_10223',
  AOC_50012_10223: 'AOC_50012_10223',
  AOC_50013_10223: 'AOC_50013_10223',
  AOC_50014_10223: 'AOC_50014_10223',
  AOC_ALL_7230: 'AOC_ALL_7230',
  AOC_50011_7230: 'AOC_50011_7230',
  AOC_50012_7230: 'AOC_50012_7230',
  AOC_50013_7230: 'AOC_50013_7230',
  AOC_50014_7230: 'AOC_50014_7230',
  AOC_ALL_1359: 'AOC_ALL_1359',
  AOC_50011_1359: 'AOC_50011_1359',
  AOC_50012_1359: 'AOC_50012_1359',
  AOC_50013_1359: 'AOC_50013_1359',
  AOC_50014_1359: 'AOC_50014_1359',
  AOC_ALL_110: 'AOC_ALL_110',
  AOC_50011_110: 'AOC_50011_110',
  AOC_50012_110: 'AOC_50012_110',
  AOC_50013_110: 'AOC_50013_110',
  AOC_50014_110: 'AOC_50014_110',
  AOC_ALL_20182: 'AOC_ALL_20182',
  AOC_50011_20182: 'AOC_50011_20182',
  AOC_50012_20182: 'AOC_50012_20182',
  AOC_50013_20182: 'AOC_50013_20182',
  AOC_50014_20182: 'AOC_50014_20182',
  AOC_ALL_20203: 'AOC_ALL_20203',
  AOC_50011_20203: 'AOC_50011_20203',
  AOC_50012_20203: 'AOC_50012_20203',
  AOC_50013_20203: 'AOC_50013_20203',
  AOC_50014_20203: 'AOC_50014_20203',
  AOC_ALL_24155: 'AOC_ALL_24155',
  AOC_50011_24155: 'AOC_50011_24155',
  AOC_50012_24155: 'AOC_50012_24155',
  AOC_50013_24155: 'AOC_50013_24155',
  AOC_50014_24155: 'AOC_50014_24155',
  AOC_ALL_24198: 'AOC_ALL_24198',
  AOC_50011_24198: 'AOC_50011_24198',
  AOC_50012_24198: 'AOC_50012_24198',
  AOC_50013_24198: 'AOC_50013_24198',
  AOC_50014_24198: 'AOC_50014_24198',
  AOC_ALL_135: 'AOC_ALL_135',
  AOC_50011_135: 'AOC_50011_135',
  AOC_50012_135: 'AOC_50012_135',
  AOC_50013_135: 'AOC_50013_135',
  AOC_50014_135: 'AOC_50014_135',
  AOC_ALL_24196: 'AOC_ALL_24196',
  AOC_50011_24196: 'AOC_50011_24196',
  AOC_50012_24196: 'AOC_50012_24196',
  AOC_50013_24196: 'AOC_50013_24196',
  AOC_50014_24196: 'AOC_50014_24196',
  AOC_ALL_24197: 'AOC_ALL_24197',
  AOC_50011_24197: 'AOC_50011_24197',
  AOC_50012_24197: 'AOC_50012_24197',
  AOC_50013_24197: 'AOC_50013_24197',
  AOC_50014_24197: 'AOC_50014_24197',
  AOC_ALL_21: 'AOC_ALL_21',
  AOC_50011_21: 'AOC_50011_21',
  AOC_50012_21: 'AOC_50012_21',
  AOC_50013_21: 'AOC_50013_21',
  AOC_50014_21: 'AOC_50014_21'
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

exports.Prisma.GA_SUP_50012_SELLOUTScalarFieldEnum = {
  SPR_SPH_ID: 'SPR_SPH_ID',
  SPR_INN: 'SPR_INN',
  SPR_CLIENT: 'SPR_CLIENT',
  SPR_GROUPTYPE: 'SPR_GROUPTYPE',
  SPR_ARTICLE: 'SPR_ARTICLE',
  SPR_BRAND: 'SPR_BRAND',
  SPR_INFO: 'SPR_INFO',
  SPR_QTY: 'SPR_QTY',
  SPR_PRICE: 'SPR_PRICE',
  SPR_SUMMA: 'SPR_SUMMA',
  SPR_ART_ID: 'SPR_ART_ID',
  SPR_DATETIME: 'SPR_DATETIME',
  SPR_ADDR: 'SPR_ADDR',
  SPR_CLIENT_CODE: 'SPR_CLIENT_CODE',
  SPR_CLIENT_ID: 'SPR_CLIENT_ID',
  SPR_CLIENT_CODE2: 'SPR_CLIENT_CODE2',
  SPR_ADDR_ENC: 'SPR_ADDR_ENC'
};

exports.Prisma.GA_SUP_50013_SELLOUTScalarFieldEnum = {
  SPR_SPH_ID: 'SPR_SPH_ID',
  SPR_INN: 'SPR_INN',
  SPR_CLIENT: 'SPR_CLIENT',
  SPR_GROUPTYPE: 'SPR_GROUPTYPE',
  SPR_ARTICLE: 'SPR_ARTICLE',
  SPR_BRAND: 'SPR_BRAND',
  SPR_INFO: 'SPR_INFO',
  SPR_QTY: 'SPR_QTY',
  SPR_PRICE: 'SPR_PRICE',
  SPR_SUMMA: 'SPR_SUMMA',
  SPR_ART_ID: 'SPR_ART_ID',
  SPR_DATETIME: 'SPR_DATETIME',
  SPR_ADDR: 'SPR_ADDR',
  SPR_CLIENT_CODE: 'SPR_CLIENT_CODE',
  SPR_CLIENT_ID: 'SPR_CLIENT_ID',
  SPR_CLIENT_CODE2: 'SPR_CLIENT_CODE2',
  SPR_ADDR_ENC: 'SPR_ADDR_ENC'
};

exports.Prisma.GA_SUP_50014_SELLOUTScalarFieldEnum = {
  SPR_SPH_ID: 'SPR_SPH_ID',
  SPR_INN: 'SPR_INN',
  SPR_CLIENT: 'SPR_CLIENT',
  SPR_GROUPTYPE: 'SPR_GROUPTYPE',
  SPR_ARTICLE: 'SPR_ARTICLE',
  SPR_BRAND: 'SPR_BRAND',
  SPR_INFO: 'SPR_INFO',
  SPR_QTY: 'SPR_QTY',
  SPR_PRICE: 'SPR_PRICE',
  SPR_SUMMA: 'SPR_SUMMA',
  SPR_ART_ID: 'SPR_ART_ID',
  SPR_DATETIME: 'SPR_DATETIME',
  SPR_ADDR: 'SPR_ADDR',
  SPR_CLIENT_CODE: 'SPR_CLIENT_CODE',
  SPR_CLIENT_ID: 'SPR_CLIENT_ID',
  SPR_CLIENT_CODE2: 'SPR_CLIENT_CODE2',
  SPR_ADDR_ENC: 'SPR_ADDR_ENC'
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
  GA_ANKETA_BILETS: 'GA_ANKETA_BILETS',
  GA_ANKETA_BRAND_IMG: 'GA_ANKETA_BRAND_IMG',
  GA_ANKETA_DIR: 'GA_ANKETA_DIR',
  GA_ANKETA_DOGOVOR: 'GA_ANKETA_DOGOVOR',
  GA_ANKETA_OBOROT: 'GA_ANKETA_OBOROT',
  GA_ANKETA_OBOROT_BRANDS: 'GA_ANKETA_OBOROT_BRANDS',
  GA_ANKETA_OBOROT_BRANDS2: 'GA_ANKETA_OBOROT_BRANDS2',
  GA_ANKETA_OBOROT_COUNTS: 'GA_ANKETA_OBOROT_COUNTS',
  GA_ANKETA_SCORES: 'GA_ANKETA_SCORES',
  GA_ANKETA_SCORES_HISTORY: 'GA_ANKETA_SCORES_HISTORY',
  GA_ANKETA_SOREVNOVANIE: 'GA_ANKETA_SOREVNOVANIE',
  GA_SUP_50012_SELLOUT: 'GA_SUP_50012_SELLOUT',
  GA_SUP_50013_SELLOUT: 'GA_SUP_50013_SELLOUT',
  GA_SUP_50014_SELLOUT: 'GA_SUP_50014_SELLOUT'
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
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
