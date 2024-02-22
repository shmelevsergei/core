
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
  GA_WS_USERS: 'GA_WS_USERS'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\shmel\\Desktop\\LKGROUPAUTO\\core\\prisma\\generate\\client1",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.10.2",
  "engineVersion": "5a9203d0590c951969e85a7d07215503f4672eb9",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL_WEBSHOP",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"./generate/client1\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL_WEBSHOP\")\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel GA_ANKETA_ADDR {\n  AAD_ABA_ID  BigInt @id\n  AAD_SHIROTA String\n  AAD_DOLGOTA String\n  AAD_OBLAST  String\n  AAD_GOROD   String\n  AAD_ADDR    String\n\n  @@index([AAD_ABA_ID])\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not  handled by Prisma Client.\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel GA_ANKETA_BASE {\n  ABA_WSU_ID           BigInt   @default(0)\n  ABA_STO_NAME         String\n  ABA_STO_ID1          String\n  ABA_REMZONA_QTY      Int      @default(0) @db.SmallInt\n  ABA_ENABLED          Boolean  @default(false)\n  ABA_PHONE            String\n  ABA_INN              String\n  ABA_DATETIME_CREATED DateTime @db.Timestamp(6)\n  ABA_DATETIME_UPDATED DateTime @db.Timestamp(6)\n  ABA_ID               BigInt   @id\n  ABA_DATETIME         DateTime @db.Timestamp(6)\n  ABA_STO_ID2          String\n  ABA_STO_NAME_FIND    String?\n  ABA_DESC             String?\n\n  @@index([ABA_WSU_ID], map: \"GA_ANKETA_BASE_ABA_ID_idx\")\n  @@index([ABA_WSU_ID], map: \"GA_ANKETA_BASE_WSU_ID_idx\")\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel GA_ANKETA_BILETS {\n  BIL_INN      String?\n  BIL_LOGIN    String?\n  BIL_N1       String?\n  BIL_N2       String?\n  BIL_N3       String?\n  BIL_N4       String?\n  BIL_N5       String?\n  BIL_N6       String?\n  BIL_N7       String?\n  BIL_WSU_ID   BigInt?\n  BIL_N8       String?\n  BIL_ABA_ID   BigInt?\n  BIL_DATETIME DateTime? @db.Timestamp(6)\n\n  @@index([BIL_ABA_ID])\n  @@index([BIL_N1])\n  @@index([BIL_N2])\n  @@index([BIL_N3])\n  @@index([BIL_N4])\n  @@index([BIL_N5])\n  @@index([BIL_N6])\n  @@index([BIL_N7])\n  @@index([BIL_INN], map: \"GA_BILETS_BIL_INN_idx\")\n  @@index([BIL_LOGIN], map: \"GA_BILETS_BIL_LOGIN_idx\")\n  @@index([BIL_WSU_ID], map: \"GA_BILETS_BIL_WSU_ID_idx\")\n  @@ignore\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel GA_ANKETA_BRAND_IMG {\n  ABI_ABA_ID BigInt?\n  ABI_NUM    Int?    @db.SmallInt\n  ABI_NAME   String?\n  ABI_PATH   String?\n\n  @@index([ABI_ABA_ID])\n  @@ignore\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel GA_ANKETA_DIR {\n  AIR_ABA_ID BigInt?\n  AIR_NAME1  String?\n  AIR_NAME2  String?\n  AIR_NAME3  String?\n  AIR_PHONE  String?\n  AIR_EMAIL  String?\n\n  @@index([AIR_ABA_ID])\n  @@ignore\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel GA_ANKETA_DOGOVOR {\n  ADO_ABA_ID   BigInt   @id\n  ADO_NAME1    String\n  ADO_NAME2    String\n  ADO_NAME3    String\n  ADO_PHONE    String\n  ADO_EMAIL    String\n  ADO_DATETIME DateTime @db.Timestamp(6)\n  ADO_STATUS   Boolean\n\n  @@index([ADO_ABA_ID])\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel GA_ANKETA_OBOROT {\n  ABO_ABA_ID                      BigInt   @id\n  ABO_DATETIME                    DateTime @db.Timestamp(6)\n  ABO_OBOROT_ALL                  Float    @db.Real\n  ABO_OBOROT_BRANDS_MONTH         Float    @db.Real\n  ABO_OBOROT_AE                   Float    @db.Real\n  ABO_OBOROT_ROSSKO               Float    @db.Real\n  ABO_OBOROT_ARKONA               Float    @db.Real\n  ABO_OBOROT_AUTORUS              Float    @db.Real\n  ABO_SCORES_MONTH_PLAN           Float    @db.Real\n  ABO_SCORES_MONTH_FAKT           Float    @db.Real\n  ABO_COUNT_ROSSKO                Int\n  ABO_COUNT_AE                    Int\n  ABO_COUNT_ARKONA                Int\n  ABO_COUNT_AUTORUS               Int\n  ABO_OBOROT_BRANDS               Float    @db.Real\n  ABO_OBOROT_BRAND_LOOK1          Float    @db.Real\n  ABO_SCORES                      Float    @db.Real\n  ABO_OBOROT_BRAND_LOOK2          Float    @db.Real\n  ABO_OBOROT_BRAND_LOOK2_ROSSKO   Float    @db.Real\n  ABO_OBOROT_BRAND_LOOK2_AE       Float    @db.Real\n  ABO_OBOROT_BRAND_LOOK2_ARKONA   Float    @db.Real\n  ABO_OBOROT_BRAND_LOOK2_AUTORUS  Float    @db.Real\n  ABO_OBOROT_BRANDS_MONTH_ROSSKO  Float    @db.Real\n  ABO_OBOROT_BRANDS_MONTH_AE      Float    @db.Real\n  ABO_OBOROT_BRANDS_MONTH_ARKONA  Float    @db.Real\n  ABO_OBOROT_BRANDS_MONTH_AUTORUS Float    @db.Real\n  ABO_OBOROT_BRAND1               Float    @default(0) @db.Real\n  ABO_OBOROT_BRAND2               Float    @default(0) @db.Real\n  ABO_OBOROT_BRAND3               Float    @default(0) @db.Real\n  ABO_OBOROT_BRAND4               Float    @default(0) @db.Real\n  ABO_OBOROT_BRAND5               Float    @default(0) @db.Real\n  ABO_OBOROT_BRAND6               Float    @default(0) @db.Real\n  ABO_OBOROT_NEXT                 Float    @default(0) @db.Real\n  ABO_SCORES_MONTH_PLAN_NEXT      Float    @default(0) @db.Real\n  ABO_ABA_REMZONA_QTY             Int      @db.SmallInt\n  ABO_OBOROT_PARTRA               Float    @default(0) @db.Real\n  ABO_SCORES_PARTRA               Float    @default(0) @db.Real\n\n  @@index([ABO_ABA_ID, ABO_DATETIME], map: \"GA_ANKETA_OBOROT_ABO_ABA_ID_ABA_DATETIME_idx\")\n  @@index([ABO_ABA_ID])\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel GA_ANKETA_OBOROT_BRANDS {\n  AOB_ABA_ID      BigInt?\n  AOB_DATETIME    DateTime? @db.Timestamp(6)\n  AOB_ALL_24189   Float?    @default(0) @db.Real\n  AOB_50011_24189 Float?    @default(0) @db.Real\n  AOB_50012_24189 Float?    @default(0) @db.Real\n  AOB_50013_24189 Float?    @default(0) @db.Real\n  AOB_50014_24189 Float?    @default(0) @db.Real\n  AOB_ALL_10566   Float?    @default(0) @db.Real\n  AOB_50011_10566 Float?    @default(0) @db.Real\n  AOB_50012_10566 Float?    @default(0) @db.Real\n  AOB_50013_10566 Float?    @default(0) @db.Real\n  AOB_50014_10566 Float?    @default(0) @db.Real\n  AOB_ALL_20079   Float?    @default(0) @db.Real\n  AOB_50011_20079 Float?    @default(0) @db.Real\n  AOB_50012_20079 Float?    @default(0) @db.Real\n  AOB_50013_20079 Float?    @default(0) @db.Real\n  AOB_50014_20079 Float?    @default(0) @db.Real\n  AOB_ALL_7251    Float?    @default(0) @db.Real\n  AOB_50011_7251  Float?    @default(0) @db.Real\n  AOB_50012_7251  Float?    @default(0) @db.Real\n  AOB_50013_7251  Float?    @default(0) @db.Real\n  AOB_50014_7251  Float?    @default(0) @db.Real\n  AOB_ALL_24191   Float?    @default(0) @db.Real\n  AOB_50011_24191 Float?    @default(0) @db.Real\n  AOB_50012_24191 Float?    @default(0) @db.Real\n  AOB_50013_24191 Float?    @default(0) @db.Real\n  AOB_50014_24191 Float?    @default(0) @db.Real\n  AOB_ALL_193     Float?    @default(0) @db.Real\n  AOB_50011_193   Float?    @default(0) @db.Real\n  AOB_50012_193   Float?    @default(0) @db.Real\n  AOB_50013_193   Float?    @default(0) @db.Real\n  AOB_50014_193   Float?    @default(0) @db.Real\n  AOB_ALL_7610    Float?    @default(0) @db.Real\n  AOB_50011_7610  Float?    @default(0) @db.Real\n  AOB_50012_7610  Float?    @default(0) @db.Real\n  AOB_50013_7610  Float?    @default(0) @db.Real\n  AOB_50014_7610  Float?    @default(0) @db.Real\n  AOB_ALL_10180   Float?    @default(0) @db.Real\n  AOB_50011_10180 Float?    @default(0) @db.Real\n  AOB_50012_10180 Float?    @default(0) @db.Real\n  AOB_50013_10180 Float?    @default(0) @db.Real\n  AOB_50014_10180 Float?    @default(0) @db.Real\n  AOB_ALL_177     Float?    @default(0) @db.Real\n  AOB_50011_177   Float?    @default(0) @db.Real\n  AOB_50012_177   Float?    @default(0) @db.Real\n  AOB_50013_177   Float?    @default(0) @db.Real\n  AOB_50014_177   Float?    @default(0) @db.Real\n  AOB_ALL_10223   Float?    @default(0) @db.Real\n  AOB_50011_10223 Float?    @default(0) @db.Real\n  AOB_50012_10223 Float?    @default(0) @db.Real\n  AOB_50013_10223 Float?    @default(0) @db.Real\n  AOB_50014_10223 Float?    @default(0) @db.Real\n  AOB_ALL_7230    Float?    @default(0) @db.Real\n  AOB_50011_7230  Float?    @default(0) @db.Real\n  AOB_50012_7230  Float?    @default(0) @db.Real\n  AOB_50013_7230  Float?    @default(0) @db.Real\n  AOB_50014_7230  Float?    @default(0) @db.Real\n  AOB_ALL_1359    Float?    @default(0) @db.Real\n  AOB_50011_1359  Float?    @default(0) @db.Real\n  AOB_50012_1359  Float?    @default(0) @db.Real\n  AOB_50013_1359  Float?    @default(0) @db.Real\n  AOB_50014_1359  Float?    @default(0) @db.Real\n  AOB_ALL_110     Float?    @default(0) @db.Real\n  AOB_50011_110   Float?    @default(0) @db.Real\n  AOB_50012_110   Float?    @default(0) @db.Real\n  AOB_50013_110   Float?    @default(0) @db.Real\n  AOB_50014_110   Float?    @default(0) @db.Real\n  AOB_ALL_20182   Float?    @default(0) @db.Real\n  AOB_50011_20182 Float?    @default(0) @db.Real\n  AOB_50012_20182 Float?    @default(0) @db.Real\n  AOB_50013_20182 Float?    @default(0) @db.Real\n  AOB_50014_20182 Float?    @default(0) @db.Real\n  AOB_ALL_20203   Float?    @default(0) @db.Real\n  AOB_50011_20203 Float?    @default(0) @db.Real\n  AOB_50012_20203 Float?    @default(0) @db.Real\n  AOB_50013_20203 Float?    @default(0) @db.Real\n  AOB_50014_20203 Float?    @default(0) @db.Real\n  AOB_ALL_24155   Float?    @default(0) @db.Real\n  AOB_50011_24155 Float?    @default(0) @db.Real\n  AOB_50012_24155 Float?    @default(0) @db.Real\n  AOB_50013_24155 Float?    @default(0) @db.Real\n  AOB_50014_24155 Float?    @default(0) @db.Real\n  AOB_ALL_24198   Float?    @default(0) @db.Real\n  AOB_50011_24198 Float?    @default(0) @db.Real\n  AOB_50012_24198 Float?    @default(0) @db.Real\n  AOB_50013_24198 Float?    @default(0) @db.Real\n  AOB_50014_24198 Float?    @default(0) @db.Real\n  AOB_ALL_135     Float?    @default(0) @db.Real\n  AOB_50011_135   Float?    @default(0) @db.Real\n  AOB_50012_135   Float?    @default(0) @db.Real\n  AOB_50013_135   Float?    @default(0) @db.Real\n  AOB_50014_135   Float?    @default(0) @db.Real\n  AOB_ALL_24196   Float?    @default(0) @db.Real\n  AOB_50011_24196 Float?    @default(0) @db.Real\n  AOB_50012_24196 Float?    @default(0) @db.Real\n  AOB_50013_24196 Float?    @default(0) @db.Real\n  AOB_50014_24196 Float?    @default(0) @db.Real\n  AOB_ALL_24197   Float?    @default(0) @db.Real\n  AOB_50011_24197 Float?    @default(0) @db.Real\n  AOB_50012_24197 Float?    @default(0) @db.Real\n  AOB_50013_24197 Float?    @default(0) @db.Real\n  AOB_50014_24197 Float?    @default(0) @db.Real\n  AOB_ALL_21      Float?    @default(0) @db.Real\n  AOB_50011_21    Float?    @default(0) @db.Real\n  AOB_50012_21    Float?    @default(0) @db.Real\n  AOB_50013_21    Float?    @default(0) @db.Real\n  AOB_50014_21    Float?    @default(0) @db.Real\n\n  @@index([AOB_ABA_ID])\n  @@ignore\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel GA_ANKETA_OBOROT_BRANDS2 {\n  AOB_ABA_ID      BigInt?\n  AOB_DATETIME    DateTime? @db.Timestamp(6)\n  AOB_ALL_7438    Float?    @default(0) @db.Real\n  AOB_50011_7438  Float?    @default(0) @db.Real\n  AOB_50012_7438  Float?    @default(0) @db.Real\n  AOB_50013_7438  Float?    @default(0) @db.Real\n  AOB_50014_7438  Float?    @default(0) @db.Real\n  AOB_ALL_7801    Float?    @default(0) @db.Real\n  AOB_50011_7801  Float?    @default(0) @db.Real\n  AOB_50012_7801  Float?    @default(0) @db.Real\n  AOB_50013_7801  Float?    @default(0) @db.Real\n  AOB_50014_7801  Float?    @default(0) @db.Real\n  AOB_ALL_7763    Float?    @default(0) @db.Real\n  AOB_50011_7763  Float?    @default(0) @db.Real\n  AOB_50012_7763  Float?    @default(0) @db.Real\n  AOB_50013_7763  Float?    @default(0) @db.Real\n  AOB_50014_7763  Float?    @default(0) @db.Real\n  AOB_ALL_265     Float?    @default(0) @db.Real\n  AOB_50011_265   Float?    @default(0) @db.Real\n  AOB_50012_265   Float?    @default(0) @db.Real\n  AOB_50013_265   Float?    @default(0) @db.Real\n  AOB_50014_265   Float?    @default(0) @db.Real\n  AOB_ALL_24158   Float?    @default(0) @db.Real\n  AOB_50011_24158 Float?    @default(0) @db.Real\n  AOB_50012_24158 Float?    @default(0) @db.Real\n  AOB_50013_24158 Float?    @default(0) @db.Real\n  AOB_50014_24158 Float?    @default(0) @db.Real\n  AOB_ALL_7219    Float?    @default(0) @db.Real\n  AOB_50011_7219  Float?    @default(0) @db.Real\n  AOB_50012_7219  Float?    @default(0) @db.Real\n  AOB_50013_7219  Float?    @default(0) @db.Real\n  AOB_50014_7219  Float?    @default(0) @db.Real\n\n  @@ignore\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel GA_ANKETA_OBOROT_COUNTS {\n  AOC_ABA_ID      BigInt?\n  AOC_DATETIME    DateTime? @db.Timestamp(6)\n  AOC_ALL_24189   Int?      @default(0)\n  AOC_50011_24189 Int?      @default(0)\n  AOC_50012_24189 Int?      @default(0)\n  AOC_50013_24189 Int?      @default(0)\n  AOC_50014_24189 Int?      @default(0)\n  AOC_ALL_10566   Int?      @default(0)\n  AOC_50011_10566 Int?      @default(0)\n  AOC_50012_10566 Int?      @default(0)\n  AOC_50013_10566 Int?      @default(0)\n  AOC_50014_10566 Int?      @default(0)\n  AOC_ALL_20079   Int?      @default(0)\n  AOC_50011_20079 Int?      @default(0)\n  AOC_50012_20079 Int?      @default(0)\n  AOC_50013_20079 Int?      @default(0)\n  AOC_50014_20079 Int?      @default(0)\n  AOC_ALL_7251    Int?      @default(0)\n  AOC_50011_7251  Int?      @default(0)\n  AOC_50012_7251  Int?      @default(0)\n  AOC_50013_7251  Int?      @default(0)\n  AOC_50014_7251  Int?      @default(0)\n  AOC_ALL_24191   Int?      @default(0)\n  AOC_50011_24191 Int?      @default(0)\n  AOC_50012_24191 Int?      @default(0)\n  AOC_50013_24191 Int?      @default(0)\n  AOC_50014_24191 Int?      @default(0)\n  AOC_ALL_193     Int?      @default(0)\n  AOC_50011_193   Int?      @default(0)\n  AOC_50012_193   Int?      @default(0)\n  AOC_50013_193   Int?      @default(0)\n  AOC_50014_193   Int?      @default(0)\n  AOC_ALL_7610    Int?      @default(0)\n  AOC_50011_7610  Int?      @default(0)\n  AOC_50012_7610  Int?      @default(0)\n  AOC_50013_7610  Int?      @default(0)\n  AOC_50014_7610  Int?      @default(0)\n  AOC_ALL_10180   Int?      @default(0)\n  AOC_50011_10180 Int?      @default(0)\n  AOC_50012_10180 Int?      @default(0)\n  AOC_50013_10180 Int?      @default(0)\n  AOC_50014_10180 Int?      @default(0)\n  AOC_ALL_177     Int?      @default(0)\n  AOC_50011_177   Int?      @default(0)\n  AOC_50012_177   Int?      @default(0)\n  AOC_50013_177   Int?      @default(0)\n  AOC_50014_177   Int?      @default(0)\n  AOC_ALL_10223   Int?      @default(0)\n  AOC_50011_10223 Int?      @default(0)\n  AOC_50012_10223 Int?      @default(0)\n  AOC_50013_10223 Int?      @default(0)\n  AOC_50014_10223 Int?      @default(0)\n  AOC_ALL_7230    Int?      @default(0)\n  AOC_50011_7230  Int?      @default(0)\n  AOC_50012_7230  Int?      @default(0)\n  AOC_50013_7230  Int?      @default(0)\n  AOC_50014_7230  Int?      @default(0)\n  AOC_ALL_1359    Int?      @default(0)\n  AOC_50011_1359  Int?      @default(0)\n  AOC_50012_1359  Int?      @default(0)\n  AOC_50013_1359  Int?      @default(0)\n  AOC_50014_1359  Int?      @default(0)\n  AOC_ALL_110     Int?      @default(0)\n  AOC_50011_110   Int?      @default(0)\n  AOC_50012_110   Int?      @default(0)\n  AOC_50013_110   Int?      @default(0)\n  AOC_50014_110   Int?      @default(0)\n  AOC_ALL_20182   Int?      @default(0)\n  AOC_50011_20182 Int?      @default(0)\n  AOC_50012_20182 Int?      @default(0)\n  AOC_50013_20182 Int?      @default(0)\n  AOC_50014_20182 Int?      @default(0)\n  AOC_ALL_20203   Int?      @default(0)\n  AOC_50011_20203 Int?      @default(0)\n  AOC_50012_20203 Int?      @default(0)\n  AOC_50013_20203 Int?      @default(0)\n  AOC_50014_20203 Int?      @default(0)\n  AOC_ALL_24155   Int?      @default(0)\n  AOC_50011_24155 Int?      @default(0)\n  AOC_50012_24155 Int?      @default(0)\n  AOC_50013_24155 Int?      @default(0)\n  AOC_50014_24155 Int?      @default(0)\n  AOC_ALL_24198   Int?      @default(0)\n  AOC_50011_24198 Int?      @default(0)\n  AOC_50012_24198 Int?      @default(0)\n  AOC_50013_24198 Int?      @default(0)\n  AOC_50014_24198 Int?      @default(0)\n  AOC_ALL_135     Int?      @default(0)\n  AOC_50011_135   Int?      @default(0)\n  AOC_50012_135   Int?      @default(0)\n  AOC_50013_135   Int?      @default(0)\n  AOC_50014_135   Int?      @default(0)\n  AOC_ALL_24196   Int?      @default(0)\n  AOC_50011_24196 Int?      @default(0)\n  AOC_50012_24196 Int?      @default(0)\n  AOC_50013_24196 Int?      @default(0)\n  AOC_50014_24196 Int?      @default(0)\n  AOC_ALL_24197   Int?      @default(0)\n  AOC_50011_24197 Int?      @default(0)\n  AOC_50012_24197 Int?      @default(0)\n  AOC_50013_24197 Int?      @default(0)\n  AOC_50014_24197 Int?      @default(0)\n  AOC_ALL_21      Int?      @default(0)\n  AOC_50011_21    Int?      @default(0)\n  AOC_50012_21    Int?      @default(0)\n  AOC_50013_21    Int?      @default(0)\n  AOC_50014_21    Int?      @default(0)\n\n  @@index([AOC_ABA_ID])\n  @@ignore\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel GA_ANKETA_OBOROT_COUNTS2 {\n  AOC_ABA_ID      BigInt?\n  AOC_DATETIME    DateTime? @db.Timestamp(6)\n  AOC_ALL_7438    Int?      @default(0)\n  AOC_50011_7438  Int?      @default(0)\n  AOC_50012_7438  Int?      @default(0)\n  AOC_50013_7438  Int?      @default(0)\n  AOC_50014_7438  Int?      @default(0)\n  AOC_ALL_7801    Int?      @default(0)\n  AOC_50011_7801  Int?      @default(0)\n  AOC_50012_7801  Int?      @default(0)\n  AOC_50013_7801  Int?      @default(0)\n  AOC_50014_7801  Int?      @default(0)\n  AOC_ALL_7763    Int?      @default(0)\n  AOC_50011_7763  Int?      @default(0)\n  AOC_50012_7763  Int?      @default(0)\n  AOC_50013_7763  Int?      @default(0)\n  AOC_50014_7763  Int?      @default(0)\n  AOC_ALL_265     Int?      @default(0)\n  AOC_50011_265   Int?      @default(0)\n  AOC_50012_265   Int?      @default(0)\n  AOC_50013_265   Int?      @default(0)\n  AOC_50014_265   Int?      @default(0)\n  AOC_ALL_24158   Int?      @default(0)\n  AOC_50011_24158 Int?      @default(0)\n  AOC_50012_24158 Int?      @default(0)\n  AOC_50013_24158 Int?      @default(0)\n  AOC_50014_24158 Int?      @default(0)\n  AOC_ALL_7219    Int?      @default(0)\n  AOC_50011_7219  Int?      @default(0)\n  AOC_50012_7219  Int?      @default(0)\n  AOC_50013_7219  Int?      @default(0)\n  AOC_50014_7219  Int?      @default(0)\n\n  @@ignore\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel GA_SUP_50012_SELLOUT {\n  SPR_SPH_ID       Int?\n  SPR_INN          String?\n  SPR_CLIENT       String?\n  SPR_GROUPTYPE    String?\n  SPR_ARTICLE      String?\n  SPR_BRAND        String?\n  SPR_INFO         String?\n  SPR_QTY          Float?    @default(0) @db.Real\n  SPR_PRICE        Float?    @default(0) @db.Real\n  SPR_SUMMA        Float?    @default(0) @db.Real\n  SPR_ART_ID       Int?\n  SPR_DATETIME     DateTime? @db.Timestamp(6)\n  SPR_ADDR         String?\n  SPR_CLIENT_CODE  String?\n  SPR_CLIENT_ID    String?\n  SPR_CLIENT_CODE2 String?\n  SPR_ADDR_ENC     String?\n\n  @@index([SPR_ADDR_ENC])\n  @@index([SPR_BRAND, SPR_ARTICLE])\n  @@index([SPR_CLIENT_ID, SPR_DATETIME, SPR_ADDR_ENC], map: \"GA_SUP_50012_SELLOUT_SPR_CLIENT_ID_SPR_DATETIME_SPR_ADDR_ENC_id\")\n  @@index([SPR_CLIENT_ID, SPR_DATETIME])\n  @@index([SPR_CLIENT_ID])\n  @@index([SPR_DATETIME])\n  @@index([SPR_SPH_ID, SPR_ADDR])\n  @@index([SPR_SPH_ID])\n  @@ignore\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel GA_SUP_50013_SELLOUT {\n  SPR_SPH_ID       Int?\n  SPR_INN          String?\n  SPR_CLIENT       String?\n  SPR_GROUPTYPE    String?\n  SPR_ARTICLE      String?\n  SPR_BRAND        String?\n  SPR_INFO         String?\n  SPR_QTY          Float?    @default(0) @db.Real\n  SPR_PRICE        Float?    @default(0) @db.Real\n  SPR_SUMMA        Float?    @default(0) @db.Real\n  SPR_ART_ID       Int?\n  SPR_DATETIME     DateTime? @db.Timestamp(6)\n  SPR_ADDR         String?\n  SPR_CLIENT_CODE  String?\n  SPR_CLIENT_ID    String?\n  SPR_CLIENT_CODE2 String?\n  SPR_ADDR_ENC     String?\n\n  @@index([SPR_ADDR_ENC])\n  @@index([SPR_BRAND, SPR_ARTICLE])\n  @@index([SPR_CLIENT_CODE])\n  @@index([SPR_CLIENT_ID, SPR_DATETIME, SPR_ADDR_ENC], map: \"GA_SUP_50013_SELLOUT_SPR_CLIENT_ID_SPR_DATETIME_SPR_ADDR_ENC_id\")\n  @@index([SPR_CLIENT_ID, SPR_DATETIME])\n  @@index([SPR_CLIENT_ID])\n  @@index([SPR_DATETIME])\n  @@index([SPR_SPH_ID])\n  @@ignore\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel GA_SUP_50014_SELLOUT {\n  SPR_SPH_ID       Int?\n  SPR_INN          String?\n  SPR_CLIENT       String?\n  SPR_GROUPTYPE    String?\n  SPR_ARTICLE      String?\n  SPR_BRAND        String?\n  SPR_INFO         String?\n  SPR_QTY          Float?    @default(0) @db.Real\n  SPR_PRICE        Float?    @default(0) @db.Real\n  SPR_SUMMA        Float?    @default(0) @db.Real\n  SPR_ART_ID       Int?\n  SPR_DATETIME     DateTime? @db.Timestamp(6)\n  SPR_ADDR         String?\n  SPR_CLIENT_CODE  String?\n  SPR_CLIENT_ID    String?\n  SPR_CLIENT_CODE2 String?\n  SPR_ADDR_ENC     String?\n\n  @@index([SPR_ADDR_ENC])\n  @@index([SPR_BRAND, SPR_ARTICLE])\n  @@index([SPR_CLIENT_CODE])\n  @@index([SPR_CLIENT_ID, SPR_DATETIME, SPR_ADDR_ENC], map: \"GA_SUP_50014_SELLOUT_SPR_CLIENT_ID_SPR_DATETIME_SPR_ADDR_ENC_id\")\n  @@index([SPR_CLIENT_ID, SPR_DATETIME])\n  @@index([SPR_CLIENT_ID])\n  @@index([SPR_DATETIME])\n  @@index([SPR_SPH_ID])\n  @@ignore\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel GA_ANKETA_INN {\n  AIN_ABA_ID BigInt?\n  AIN_NUM    Int?    @db.SmallInt\n  AIN_INN    String?\n\n  @@ignore\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel GA_ANKETA_RULES {\n  ANR_ABA_ID BigInt?\n  ANR_RULES  String?\n  ANR_SUP_ID Int?\n\n  @@ignore\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel GA_WS_USERS {\n  WSU_ID                   BigInt    @id\n  WSU_WSO_ID               Int?\n  WSU_EMAIL                String?\n  WSU_NAME                 String?\n  WSU_FULL_NAME            String?\n  WSU_PHONE                String?\n  WSU_ADDRESS              String?\n  WSU_PASSWD               String?\n  WSU_ID_IN_DS             Int?\n  WSU_INN                  String?\n  WSU_PRICE_TYPE           Int?      @default(0) @db.SmallInt\n  WSU_GRP_ID               Int?      @default(0)\n  WSU_WS_ID                Int?      @default(0)\n  WSU_MOBILE               String?\n  WSU_SHOW_SUP_ALIAS       Boolean?  @default(false)\n  WSU_IS_ZS                Boolean?  @default(false)\n  WSU_PASSWD_ENC           String?\n  WSU_LOGIN_ENC            String?\n  WSU_DATETIME_LAST_LOGIN  DateTime? @db.Timestamp(6)\n  WSU_START_PAGE           String?\n  WSU_SALT                 String?\n  WSU_TEMP_TICKET          String?\n  WSU_TEMP_TICKET_DATETIME DateTime? @db.Timestamp(6)\n  WSU_DATETIME_CREATE      DateTime? @db.Timestamp(6)\n\n  @@index([WSU_ID])\n  @@index([WSU_NAME])\n}\n",
  "inlineSchemaHash": "78175040fdfbdb87b951da7505767ba8df7f9f9b303daabf8dbeb4c5e12c5b6b",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"GA_ANKETA_ADDR\":{\"dbName\":null,\"fields\":[{\"name\":\"AAD_ABA_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AAD_SHIROTA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AAD_DOLGOTA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AAD_OBLAST\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AAD_GOROD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AAD_ADDR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"GA_ANKETA_BASE\":{\"dbName\":null,\"fields\":[{\"name\":\"ABA_WSU_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABA_STO_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABA_STO_ID1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABA_REMZONA_QTY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABA_ENABLED\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABA_PHONE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABA_INN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABA_DATETIME_CREATED\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABA_DATETIME_UPDATED\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABA_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABA_DATETIME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABA_STO_ID2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABA_STO_NAME_FIND\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABA_DESC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying table does not contain a valid unique identifier and can therefore currently not  handled by Prisma Client.\\\\nThe underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"GA_ANKETA_DOGOVOR\":{\"dbName\":null,\"fields\":[{\"name\":\"ADO_ABA_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ADO_NAME1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ADO_NAME2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ADO_NAME3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ADO_PHONE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ADO_EMAIL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ADO_DATETIME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ADO_STATUS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"GA_ANKETA_OBOROT\":{\"dbName\":null,\"fields\":[{\"name\":\"ABO_ABA_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_DATETIME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_OBOROT_ALL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_OBOROT_BRANDS_MONTH\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_OBOROT_AE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_OBOROT_ROSSKO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_OBOROT_ARKONA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_OBOROT_AUTORUS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_SCORES_MONTH_PLAN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_SCORES_MONTH_FAKT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_COUNT_ROSSKO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_COUNT_AE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_COUNT_ARKONA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_COUNT_AUTORUS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_OBOROT_BRANDS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_OBOROT_BRAND_LOOK1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_SCORES\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_OBOROT_BRAND_LOOK2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_OBOROT_BRAND_LOOK2_ROSSKO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_OBOROT_BRAND_LOOK2_AE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_OBOROT_BRAND_LOOK2_ARKONA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_OBOROT_BRAND_LOOK2_AUTORUS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_OBOROT_BRANDS_MONTH_ROSSKO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_OBOROT_BRANDS_MONTH_AE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_OBOROT_BRANDS_MONTH_ARKONA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_OBOROT_BRANDS_MONTH_AUTORUS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_OBOROT_BRAND1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_OBOROT_BRAND2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_OBOROT_BRAND3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_OBOROT_BRAND4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_OBOROT_BRAND5\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_OBOROT_BRAND6\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_OBOROT_NEXT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_SCORES_MONTH_PLAN_NEXT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_ABA_REMZONA_QTY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_OBOROT_PARTRA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ABO_SCORES_PARTRA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"},\"GA_WS_USERS\":{\"dbName\":null,\"fields\":[{\"name\":\"WSU_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WSU_WSO_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WSU_EMAIL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WSU_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WSU_FULL_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WSU_PHONE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WSU_ADDRESS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WSU_PASSWD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WSU_ID_IN_DS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WSU_INN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WSU_PRICE_TYPE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WSU_GRP_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WSU_WS_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WSU_MOBILE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WSU_SHOW_SUP_ALIAS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WSU_IS_ZS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WSU_PASSWD_ENC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WSU_LOGIN_ENC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WSU_DATETIME_LAST_LOGIN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WSU_START_PAGE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WSU_SALT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WSU_TEMP_TICKET\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WSU_TEMP_TICKET_DATETIME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"WSU_DATETIME_CREATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\"}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL_WEBSHOP: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL_WEBSHOP'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL_WEBSHOP || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

