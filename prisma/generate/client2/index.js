Object.defineProperty(exports, '__esModule', { value: true })

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
} = require('./runtime/library')

const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.7.1
 * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
 */
Prisma.prismaVersion = {
    client: '5.7.1',
    engine: '0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5',
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError
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
    AnyNull: objectEnumValues.classes.AnyNull,
}

const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
})

exports.Prisma.AnketaScalarFieldEnum = {
    id: 'id',
    data: 'data',
}

exports.Prisma.SortOrder = {
    asc: 'asc',
    desc: 'desc',
}

exports.Prisma.QueryMode = {
    default: 'default',
    insensitive: 'insensitive',
}

exports.Prisma.ModelName = {
    Anketa: 'Anketa',
}
/**
 * Create the Client
 */
const config = {
    generator: {
        name: 'client',
        provider: {
            fromEnvVar: null,
            value: 'prisma-client-js',
        },
        output: {
            value: 'D:\\GlobalProjects\\LKGROUPAUTO\\core\\prisma\\generate\\client2',
            fromEnvVar: null,
        },
        config: {
            engineType: 'library',
        },
        binaryTargets: [
            {
                fromEnvVar: null,
                value: 'windows',
                native: true,
            },
        ],
        previewFeatures: [],
        isCustomOutput: true,
    },
    relativeEnvPaths: {
        rootEnvPath: '../../../.env',
        schemaEnvPath: '../../../.env',
    },
    relativePath: '../..',
    clientVersion: '5.7.1',
    engineVersion: '0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5',
    datasourceNames: ['db'],
    activeProvider: 'postgresql',
    postinstall: false,
    inlineDatasources: {
        db: {
            url: {
                fromEnvVar: 'DATABASE_URL_PORTAL',
                value: null,
            },
        },
    },
    inlineSchema:
        'Z2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiDQogIG91dHB1dCAgID0gIi4vZ2VuZXJhdGUvY2xpZW50MiINCn0NCg0KZGF0YXNvdXJjZSBkYiB7DQogIHByb3ZpZGVyID0gInBvc3RncmVzcWwiDQogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkxfUE9SVEFMIikNCn0NCg0KbW9kZWwgQW5rZXRhIHsNCiAgaWQgICBJbnQgICAgQHVuaXF1ZSBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIGRhdGEgU3RyaW5nDQp9DQo=',
    inlineSchemaHash:
        'df7ab28f0f03e208642f0c60b18763b236c9d223a0f25136a5c1d142f7f642c3',
    noEngine: false,
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
    const alternativePaths = ['prisma/generate/client2', 'generate/client2']

    const alternativePath =
        alternativePaths.find((altPath) => {
            return fs.existsSync(
                path.join(process.cwd(), altPath, 'schema.prisma')
            )
        }) ?? alternativePaths[0]

    config.dirname = path.join(process.cwd(), alternativePath)
    config.isBundled = true
}

config.runtimeDataModel = JSON.parse(
    '{"models":{"Anketa":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"data","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}'
)
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath:
        config.relativeEnvPaths.rootEnvPath &&
        path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath:
        config.relativeEnvPaths.schemaEnvPath &&
        path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath),
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, 'query_engine-windows.dll.node')
path.join(
    process.cwd(),
    'prisma/generate/client2/query_engine-windows.dll.node'
)
// file annotations for bundling tools to include these files
path.join(__dirname, 'schema.prisma')
path.join(process.cwd(), 'prisma/generate/client2/schema.prisma')
