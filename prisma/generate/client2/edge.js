
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
  status: 'status',
  comment: 'comment',
  created_date: 'created_date',
  updated_date: 'updated_date'
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
  email: 'email',
  questionnaireId: 'questionnaireId'
};

exports.Prisma.SignatoryManagerScalarFieldEnum = {
  id: 'id',
  name: 'name',
  surname: 'surname',
  lastname: 'lastname',
  phone: 'phone',
  email: 'email',
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

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  password: 'password',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
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

exports.Role = exports.$Enums.Role = {
  sto: 'sto',
  distributor: 'distributor',
  admin: 'admin'
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
  Images: 'Images',
  User: 'User'
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
      "value": "D:\\GlobalProjects\\LKGROUPAUTO\\core\\prisma\\generate\\client2",
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
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiDQogIG91dHB1dCAgID0gIi4vZ2VuZXJhdGUvY2xpZW50MiINCn0NCg0KZGF0YXNvdXJjZSBkYiB7DQogIHByb3ZpZGVyID0gInBvc3RncmVzcWwiDQogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkxfUE9SVEFMIikNCn0NCm1vZGVsIFF1ZXN0aW9ubmFpcmUgew0KICBpZCAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBkaXN0cmlidXRvciAgICAgICAgICBTdHJpbmcNCiAgZGlzdHJpYnV0b3JfZW1wbG95ZWUgRGlzdHJpYnV0b3JFbXBsb3llZT8NCiAgZGF0YV9zdG8gICAgICAgICAgICAgRGF0YVN0bz8NCiAgaW5ucyAgICAgICAgICAgICAgICAgSUlubltdDQogIGltYWdlcyAgICAgICAgICAgICAgIEltYWdlc1tdDQogIGxpZnRzICAgICAgICAgICAgICAgIExpZnRzPw0KICBtYW5hZ2VyICAgICAgICAgICAgICBNYW5hZ2VyPw0KICBzaWduYXRvcnlNYW5hZ2VyICAgICBTaWduYXRvcnlNYW5hZ2VyPw0KICBjb25maXJtRGF0YSAgICAgICAgICBDb25maXJtRGF0YT8NCiAgc3RhdHVzICAgICAgICAgICAgICAgU3RhdHVzDQogIGNvbW1lbnQgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgIEBkYi5UZXh0DQogIGNyZWF0ZWRfZGF0ZSAgICAgICAgIERhdGVUaW1lDQogIHVwZGF0ZWRfZGF0ZSAgICAgICAgIERhdGVUaW1lDQp9DQoNCmVudW0gU3RhdHVzIHsNCiAgZHJhZnQNCiAgYWNjZXB0ZWQNCiAgcmVqZWN0ZWQNCiAgc2VudA0KfQ0KDQptb2RlbCBEaXN0cmlidXRvckVtcGxveWVlIHsNCiAgaWQgICAgICAgICAgICAgIEludCAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgbmFtZSAgICAgICAgICAgIFN0cmluZw0KICBzdXJuYW1lICAgICAgICAgU3RyaW5nDQogIGxhc3RuYW1lICAgICAgICBTdHJpbmcNCiAgcGhvbmUgICAgICAgICAgIFN0cmluZw0KICBlbWFpbCAgICAgICAgICAgU3RyaW5nDQogIHF1ZXN0aW9ubmFpcmUgICBRdWVzdGlvbm5haXJlIEByZWxhdGlvbihmaWVsZHM6IFtxdWVzdGlvbm5haXJlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICBxdWVzdGlvbm5haXJlSWQgSW50ICAgICAgICAgICBAdW5pcXVlDQp9DQoNCm1vZGVsIERhdGFTdG8gew0KICBpZCAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIG5hbWUgICAgICAgICAgICAgICAgIFN0cmluZw0KICBjaXR5ICAgICAgICAgICAgICAgICBTdHJpbmcNCiAgYXJlYSAgICAgICAgICAgICAgICAgU3RyaW5nDQogIGFkZHJlc3MgICAgICAgICAgICAgIFN0cmluZw0KICBjb2RlX2NsaWVudF9hdnRvZXZybyBTdHJpbmcNCiAgY29kZV9jbGllbnRfYXZ0b3J1cyAgU3RyaW5nDQogIGNvZGVfY2xpZW50X3Jvc3NrbyAgIFN0cmluZw0KICBxdWVzdGlvbm5haXJlICAgICAgICBRdWVzdGlvbm5haXJlIEByZWxhdGlvbihmaWVsZHM6IFtxdWVzdGlvbm5haXJlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICBxdWVzdGlvbm5haXJlSWQgICAgICBJbnQgICAgICAgICAgIEB1bmlxdWUNCn0NCg0KbW9kZWwgSUlubiB7DQogIGlkICAgICAgICAgICAgICBJbnQgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGlubiAgICAgICAgICAgICBTdHJpbmcNCiAgcXVlc3Rpb25uYWlyZSAgIFF1ZXN0aW9ubmFpcmUgQHJlbGF0aW9uKGZpZWxkczogW3F1ZXN0aW9ubmFpcmVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIHF1ZXN0aW9ubmFpcmVJZCBJbnQNCn0NCg0KbW9kZWwgTWFuYWdlciB7DQogIGlkICAgICAgIEludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBuYW1lICAgICBTdHJpbmcNCiAgc3VybmFtZSAgU3RyaW5nDQogIGxhc3RuYW1lIFN0cmluZw0KICBwaG9uZSAgICBTdHJpbmcNCiAgZW1haWwgICAgU3RyaW5nDQoNCiAgcXVlc3Rpb25uYWlyZSAgIFF1ZXN0aW9ubmFpcmUgQHJlbGF0aW9uKGZpZWxkczogW3F1ZXN0aW9ubmFpcmVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIHF1ZXN0aW9ubmFpcmVJZCBJbnQgICAgICAgICAgIEB1bmlxdWUNCn0NCg0KbW9kZWwgU2lnbmF0b3J5TWFuYWdlciB7DQogIGlkICAgICAgIEludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBuYW1lICAgICBTdHJpbmcNCiAgc3VybmFtZSAgU3RyaW5nDQogIGxhc3RuYW1lIFN0cmluZw0KICBwaG9uZSAgICBTdHJpbmcNCiAgZW1haWwgICAgU3RyaW5nDQoNCiAgcXVlc3Rpb25uYWlyZSAgIFF1ZXN0aW9ubmFpcmUgQHJlbGF0aW9uKGZpZWxkczogW3F1ZXN0aW9ubmFpcmVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIHF1ZXN0aW9ubmFpcmVJZCBJbnQgICAgICAgICAgIEB1bmlxdWUNCn0NCg0KbW9kZWwgTGlmdHMgew0KICBpZCAgICAgICAgICAgICAgICAgICAgICAgSW50IEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIHR3b1Bvc3RMaWZ0U2Npc3NvcnMgICAgICBJbnQNCiAgZm91clBvc3RMaWZ0ICAgICAgICAgICAgIEludA0KICBmb3VyUG9zdExpZnRUcmF2ZXJzZSAgICAgSW50DQogIHBpdHMgICAgICAgICAgICAgICAgICAgICBJbnQNCiAgcGl0c0VxdWlwcGVkVHJhdmVyc2UgICAgIEludA0KICBwb3N0RWxlY3Ryb25pY0RpYWdub3N0aWMgSW50DQogIHBvc3RBZGRpdGlvbmFsRXF1aXBtZW50ICBJbnQNCg0KICBxdWVzdGlvbm5haXJlICAgUXVlc3Rpb25uYWlyZSBAcmVsYXRpb24oZmllbGRzOiBbcXVlc3Rpb25uYWlyZUlkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgcXVlc3Rpb25uYWlyZUlkIEludCAgICAgICAgICAgQHVuaXF1ZQ0KfQ0KDQptb2RlbCBDb25maXJtRGF0YSB7DQogIGlkICAgICAgIEludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBsb2dpbk9uZSBTdHJpbmcNCiAgbG9naW5Ud28gU3RyaW5nDQogIGxpZnRzICAgIEludA0KDQogIHF1ZXN0aW9ubmFpcmUgICBRdWVzdGlvbm5haXJlIEByZWxhdGlvbihmaWVsZHM6IFtxdWVzdGlvbm5haXJlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICBxdWVzdGlvbm5haXJlSWQgSW50ICAgICAgICAgICBAdW5pcXVlDQp9DQoNCm1vZGVsIEltYWdlcyB7DQogIGlkICAgICAgICAgICAgICBJbnQgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIHBhdGggICAgICAgICAgICBTdHJpbmcNCiAgZGVzY3JpcHRpb24gICAgIFN0cmluZw0KICBRdWVzdGlvbm5haXJlICAgUXVlc3Rpb25uYWlyZSBAcmVsYXRpb24oZmllbGRzOiBbcXVlc3Rpb25uYWlyZUlkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgcXVlc3Rpb25uYWlyZUlkIEludA0KfQ0KbW9kZWwgVXNlciB7DQogIGlkICAgICAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICBuYW1lICAgICAgU3RyaW5nDQogIHBhc3N3b3JkICBTdHJpbmcNCiAgcm9sZSAgICAgIFJvbGUgICAgIEBkZWZhdWx0KHN0bykNCiAgY3JlYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQ0KICB1cGRhdGVkQXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpDQp9DQoNCmVudW0gUm9sZSB7DQogIHN0bw0KICBkaXN0cmlidXRvcg0KICBhZG1pbg0KfQ0K",
  "inlineSchemaHash": "d17a66611ab12c70ef47ebe0ce3246d7e315c304e1ae59afb1ae1b610a33464a",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Questionnaire\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"distributor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"distributor_employee\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DistributorEmployee\",\"relationName\":\"DistributorEmployeeToQuestionnaire\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data_sto\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DataSto\",\"relationName\":\"DataStoToQuestionnaire\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inns\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"IInn\",\"relationName\":\"IInnToQuestionnaire\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"images\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Images\",\"relationName\":\"ImagesToQuestionnaire\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lifts\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Lifts\",\"relationName\":\"LiftsToQuestionnaire\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manager\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Manager\",\"relationName\":\"ManagerToQuestionnaire\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"signatoryManager\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SignatoryManager\",\"relationName\":\"QuestionnaireToSignatoryManager\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"confirmData\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ConfirmData\",\"relationName\":\"ConfirmDataToQuestionnaire\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Status\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DistributorEmployee\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"surname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaire\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Questionnaire\",\"relationName\":\"DistributorEmployeeToQuestionnaire\",\"relationFromFields\":[\"questionnaireId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaireId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DataSto\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"area\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code_client_avtoevro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code_client_avtorus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code_client_rossko\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaire\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Questionnaire\",\"relationName\":\"DataStoToQuestionnaire\",\"relationFromFields\":[\"questionnaireId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaireId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"IInn\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaire\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Questionnaire\",\"relationName\":\"IInnToQuestionnaire\",\"relationFromFields\":[\"questionnaireId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaireId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Manager\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"surname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaire\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Questionnaire\",\"relationName\":\"ManagerToQuestionnaire\",\"relationFromFields\":[\"questionnaireId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaireId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SignatoryManager\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"surname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaire\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Questionnaire\",\"relationName\":\"QuestionnaireToSignatoryManager\",\"relationFromFields\":[\"questionnaireId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaireId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Lifts\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"twoPostLiftScissors\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fourPostLift\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fourPostLiftTraverse\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pits\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pitsEquippedTraverse\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postElectronicDiagnostic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postAdditionalEquipment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaire\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Questionnaire\",\"relationName\":\"LiftsToQuestionnaire\",\"relationFromFields\":[\"questionnaireId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaireId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ConfirmData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginOne\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loginTwo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lifts\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaire\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Questionnaire\",\"relationName\":\"ConfirmDataToQuestionnaire\",\"relationFromFields\":[\"questionnaireId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaireId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Images\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Questionnaire\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Questionnaire\",\"relationName\":\"ImagesToQuestionnaire\",\"relationFromFields\":[\"questionnaireId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionnaireId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Role\",\"default\":\"sto\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Status\":{\"values\":[{\"name\":\"draft\",\"dbName\":null},{\"name\":\"accepted\",\"dbName\":null},{\"name\":\"rejected\",\"dbName\":null},{\"name\":\"sent\",\"dbName\":null}],\"dbName\":null},\"Role\":{\"values\":[{\"name\":\"sto\",\"dbName\":null},{\"name\":\"distributor\",\"dbName\":null},{\"name\":\"admin\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
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

