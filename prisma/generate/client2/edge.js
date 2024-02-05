
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
 * Prisma Client JS version: 5.9.1
 * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
 */
Prisma.prismaVersion = {
  client: "5.9.1",
  engine: "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5"
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

exports.Prisma.QuestionnaireScalarFieldEnum = {
  id: 'id',
  distributor: 'distributor',
  status: 'status'
};

exports.Prisma.DistributorEmployeeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  surname: 'surname',
  lastname: 'lastname',
  phone: 'phone',
  email: 'email',
  questionnaireId: 'questionnaireId'
};

exports.Prisma.DataStoScalarFieldEnum = {
  id: 'id',
  name: 'name',
  city: 'city',
  area: 'area',
  address: 'address',
  code_client_avtoevro: 'code_client_avtoevro',
  code_client_avtorus: 'code_client_avtorus',
  code_client_rossko: 'code_client_rossko',
  questionnaireId: 'questionnaireId'
};

exports.Prisma.IInnScalarFieldEnum = {
  id: 'id',
  inn: 'inn',
  questionnaireId: 'questionnaireId'
};

exports.Prisma.ManagerScalarFieldEnum = {
  id: 'id',
  name: 'name',
  surname: 'surname',
  lastname: 'lastname',
  phone: 'phone',
  emaie: 'emaie',
  questionnaireId: 'questionnaireId'
};

exports.Prisma.SignatoryManagerScalarFieldEnum = {
  id: 'id',
  name: 'name',
  surname: 'surname',
  lastname: 'lastname',
  phone: 'phone',
  emaie: 'emaie',
  questionnaireId: 'questionnaireId'
};

exports.Prisma.LiftsScalarFieldEnum = {
  id: 'id',
  twoPostLiftScissors: 'twoPostLiftScissors',
  fourPostLift: 'fourPostLift',
  fourPostLiftTraverse: 'fourPostLiftTraverse',
  pits: 'pits',
  pitsEquippedTraverse: 'pitsEquippedTraverse',
  postElectronicDiagnostic: 'postElectronicDiagnostic',
  postAdditionalEquipment: 'postAdditionalEquipment',
  questionnaireId: 'questionnaireId'
};

exports.Prisma.ConfirmDataScalarFieldEnum = {
  id: 'id',
  loginOne: 'loginOne',
  loginTwo: 'loginTwo',
  lifts: 'lifts',
  questionnaireId: 'questionnaireId'
};

exports.Prisma.ImagesScalarFieldEnum = {
  id: 'id',
  path: 'path',
  description: 'description',
  questionnaireId: 'questionnaireId'
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
exports.Status = exports.$Enums.Status = {
  draft: 'draft',
  accepted: 'accepted',
  rejected: 'rejected',
  sent: 'sent'
};

exports.Prisma.ModelName = {
  Questionnaire: 'Questionnaire',
  DistributorEmployee: 'DistributorEmployee',
  DataSto: 'DataSto',
  IInn: 'IInn',
  Manager: 'Manager',
  SignatoryManager: 'SignatoryManager',
  Lifts: 'Lifts',
  ConfirmData: 'ConfirmData',
  Images: 'Images'
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
      "value": "C:\\Users\\shmel\\OneDrive\\Рабочий стол\\GlobalProjects\\LKGROUPAUTO\\core\\prisma\\generate\\client2",
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
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.9.1",
  "engineVersion": "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL_PORTAL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiDQogIG91dHB1dCAgID0gIi4vZ2VuZXJhdGUvY2xpZW50MiINCn0NCg0KZGF0YXNvdXJjZSBkYiB7DQogIHByb3ZpZGVyID0gInBvc3RncmVzcWwiDQogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkxfUE9SVEFMIikNCn0NCg0KbW9kZWwgUXVlc3Rpb25uYWlyZSB7DQogIGlkICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGRpc3RyaWJ1dG9yICAgICAgICAgIFN0cmluZw0KICBkaXN0cmlidXRvcl9lbXBsb3llZSBEaXN0cmlidXRvckVtcGxveWVlPw0KICBkYXRhX3N0byAgICAgICAgICAgICBEYXRhU3RvPw0KICBpbm5zICAgICAgICAgICAgICAgICBJSW5uW10NCiAgaW1hZ2VzICAgICAgICAgICAgICAgSW1hZ2VzW10NCiAgbGlmdHMgICAgICAgICAgICAgICAgTGlmdHM/DQogIG1hbmFnZXIgICAgICAgICAgICAgIE1hbmFnZXI/DQogIHNpZ25hdG9yeU1hbmFnZXIgICAgIFNpZ25hdG9yeU1hbmFnZXI/DQogIGNvbmZpcm1EYXRhICAgICAgICAgIENvbmZpcm1EYXRhPw0KDQogIHN0YXR1cyBTdGF0dXMNCn0NCg0KZW51bSBTdGF0dXMgew0KICBkcmFmdA0KICBhY2NlcHRlZA0KICByZWplY3RlZA0KICBzZW50DQp9DQoNCm1vZGVsIERpc3RyaWJ1dG9yRW1wbG95ZWUgew0KICBpZCAgICAgICAgICAgICAgSW50ICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBuYW1lICAgICAgICAgICAgU3RyaW5nDQogIHN1cm5hbWUgICAgICAgICBTdHJpbmcNCiAgbGFzdG5hbWUgICAgICAgIFN0cmluZw0KICBwaG9uZSAgICAgICAgICAgU3RyaW5nDQogIGVtYWlsICAgICAgICAgICBTdHJpbmcNCiAgcXVlc3Rpb25uYWlyZSAgIFF1ZXN0aW9ubmFpcmUgQHJlbGF0aW9uKGZpZWxkczogW3F1ZXN0aW9ubmFpcmVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIHF1ZXN0aW9ubmFpcmVJZCBJbnQgICAgICAgICAgIEB1bmlxdWUNCn0NCg0KbW9kZWwgRGF0YVN0byB7DQogIGlkICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbmFtZSAgICAgICAgICAgICAgICAgU3RyaW5nDQogIGNpdHkgICAgICAgICAgICAgICAgIFN0cmluZw0KICBhcmVhICAgICAgICAgICAgICAgICBTdHJpbmcNCiAgYWRkcmVzcyAgICAgICAgICAgICAgU3RyaW5nDQogIGNvZGVfY2xpZW50X2F2dG9ldnJvIFN0cmluZw0KICBjb2RlX2NsaWVudF9hdnRvcnVzICBTdHJpbmcNCiAgY29kZV9jbGllbnRfcm9zc2tvICAgU3RyaW5nDQogIHF1ZXN0aW9ubmFpcmUgICAgICAgIFF1ZXN0aW9ubmFpcmUgQHJlbGF0aW9uKGZpZWxkczogW3F1ZXN0aW9ubmFpcmVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIHF1ZXN0aW9ubmFpcmVJZCAgICAgIEludCAgICAgICAgICAgQHVuaXF1ZQ0KfQ0KDQptb2RlbCBJSW5uIHsNCiAgaWQgICAgICAgICAgICAgIEludCAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgaW5uICAgICAgICAgICAgIFN0cmluZw0KICBxdWVzdGlvbm5haXJlICAgUXVlc3Rpb25uYWlyZSBAcmVsYXRpb24oZmllbGRzOiBbcXVlc3Rpb25uYWlyZUlkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgcXVlc3Rpb25uYWlyZUlkIEludA0KfQ0KDQptb2RlbCBNYW5hZ2VyIHsNCiAgaWQgICAgICAgSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIG5hbWUgICAgIFN0cmluZw0KICBzdXJuYW1lICBTdHJpbmcNCiAgbGFzdG5hbWUgU3RyaW5nDQogIHBob25lICAgIFN0cmluZw0KICBlbWFpZSAgICBTdHJpbmcNCg0KICBxdWVzdGlvbm5haXJlICAgUXVlc3Rpb25uYWlyZSBAcmVsYXRpb24oZmllbGRzOiBbcXVlc3Rpb25uYWlyZUlkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgcXVlc3Rpb25uYWlyZUlkIEludCAgICAgICAgICAgQHVuaXF1ZQ0KfQ0KDQptb2RlbCBTaWduYXRvcnlNYW5hZ2VyIHsNCiAgaWQgICAgICAgSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIG5hbWUgICAgIFN0cmluZw0KICBzdXJuYW1lICBTdHJpbmcNCiAgbGFzdG5hbWUgU3RyaW5nDQogIHBob25lICAgIFN0cmluZw0KICBlbWFpZSAgICBTdHJpbmcNCg0KICBxdWVzdGlvbm5haXJlICAgUXVlc3Rpb25uYWlyZSBAcmVsYXRpb24oZmllbGRzOiBbcXVlc3Rpb25uYWlyZUlkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgcXVlc3Rpb25uYWlyZUlkIEludCAgICAgICAgICAgQHVuaXF1ZQ0KfQ0KDQptb2RlbCBMaWZ0cyB7DQogIGlkICAgICAgICAgICAgICAgICAgICAgICBJbnQgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgdHdvUG9zdExpZnRTY2lzc29ycyAgICAgIEludA0KICBmb3VyUG9zdExpZnQgICAgICAgICAgICAgSW50DQogIGZvdXJQb3N0TGlmdFRyYXZlcnNlICAgICBJbnQNCiAgcGl0cyAgICAgICAgICAgICAgICAgICAgIEludA0KICBwaXRzRXF1aXBwZWRUcmF2ZXJzZSAgICAgSW50DQogIHBvc3RFbGVjdHJvbmljRGlhZ25vc3RpYyBJbnQNCiAgcG9zdEFkZGl0aW9uYWxFcXVpcG1lbnQgIEludA0KDQogIHF1ZXN0aW9ubmFpcmUgICBRdWVzdGlvbm5haXJlIEByZWxhdGlvbihmaWVsZHM6IFtxdWVzdGlvbm5haXJlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICBxdWVzdGlvbm5haXJlSWQgSW50ICAgICAgICAgICBAdW5pcXVlDQp9DQoNCm1vZGVsIENvbmZpcm1EYXRhIHsNCiAgaWQgICAgICAgSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGxvZ2luT25lIFN0cmluZw0KICBsb2dpblR3byBTdHJpbmcNCiAgbGlmdHMgICAgSW50DQoNCiAgcXVlc3Rpb25uYWlyZSAgIFF1ZXN0aW9ubmFpcmUgQHJlbGF0aW9uKGZpZWxkczogW3F1ZXN0aW9ubmFpcmVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIHF1ZXN0aW9ubmFpcmVJZCBJbnQgICAgICAgICAgIEB1bmlxdWUNCn0NCg0KbW9kZWwgSW1hZ2VzIHsNCiAgaWQgICAgICAgICAgICAgIEludCAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIHBhdGggICAgICAgICAgICBTdHJpbmcNCiAgZGVzY3JpcHRpb24gICAgIFN0cmluZw0KICBRdWVzdGlvbm5haXJlICAgUXVlc3Rpb25uYWlyZT8gQHJlbGF0aW9uKGZpZWxkczogW3F1ZXN0aW9ubmFpcmVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIHF1ZXN0aW9ubmFpcmVJZCBJbnQ/DQp9DQo=",
  "inlineSchemaHash": "8b326d49c4a2882b756cf8868acdec63cf0e5ab683011aa2456113cef92269c6",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Questionnaire\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"distributor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"distributor_employee\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DistributorEmployee\",\"relationName\":\"DistributorEmployeeToQuestionnaire\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_sto\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DataSto\",\"relationName\":\"DataStoToQuestionnaire\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inns\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"IInn\",\"relationName\":\"IInnToQuestionnaire\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"images\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Images\",\"relationName\":\"ImagesToQuestionnaire\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lifts\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Lifts\",\"relationName\":\"LiftsToQuestionnaire\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manager\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Manager\",\"relationName\":\"ManagerToQuestionnaire\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"signatoryManager\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SignatoryManager\",\"relationName\":\"QuestionnaireToSignatoryManager\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"confirmData\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ConfirmData\",\"relationName\":\"ConfirmDataToQuestionnaire\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Status\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DistributorEmployee\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"surname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaire\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Questionnaire\",\"relationName\":\"DistributorEmployeeToQuestionnaire\",\"relationFromFields\":[\"questionnaireId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaireId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DataSto\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"area\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code_client_avtoevro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code_client_avtorus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code_client_rossko\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaire\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Questionnaire\",\"relationName\":\"DataStoToQuestionnaire\",\"relationFromFields\":[\"questionnaireId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaireId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"IInn\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaire\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Questionnaire\",\"relationName\":\"IInnToQuestionnaire\",\"relationFromFields\":[\"questionnaireId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaireId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Manager\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"surname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emaie\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaire\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Questionnaire\",\"relationName\":\"ManagerToQuestionnaire\",\"relationFromFields\":[\"questionnaireId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaireId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SignatoryManager\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"surname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emaie\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaire\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Questionnaire\",\"relationName\":\"QuestionnaireToSignatoryManager\",\"relationFromFields\":[\"questionnaireId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaireId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Lifts\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"twoPostLiftScissors\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fourPostLift\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fourPostLiftTraverse\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pits\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pitsEquippedTraverse\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postElectronicDiagnostic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postAdditionalEquipment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaire\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Questionnaire\",\"relationName\":\"LiftsToQuestionnaire\",\"relationFromFields\":[\"questionnaireId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaireId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ConfirmData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginOne\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginTwo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lifts\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaire\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Questionnaire\",\"relationName\":\"ConfirmDataToQuestionnaire\",\"relationFromFields\":[\"questionnaireId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaireId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Images\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Questionnaire\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Questionnaire\",\"relationName\":\"ImagesToQuestionnaire\",\"relationFromFields\":[\"questionnaireId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaireId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Status\":{\"values\":[{\"name\":\"draft\",\"dbName\":null},{\"name\":\"accepted\",\"dbName\":null},{\"name\":\"rejected\",\"dbName\":null},{\"name\":\"sent\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL_PORTAL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL_PORTAL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL_PORTAL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

