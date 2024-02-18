
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
 * Prisma Client JS version: 5.9.1
 * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
 */
Prisma.prismaVersion = {
  client: "5.9.1",
  engine: "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5"
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
