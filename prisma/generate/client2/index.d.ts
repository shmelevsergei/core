
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Questionnaire
 * 
 */
export type Questionnaire = $Result.DefaultSelection<Prisma.$QuestionnairePayload>
/**
 * Model DistributorEmployee
 * 
 */
export type DistributorEmployee = $Result.DefaultSelection<Prisma.$DistributorEmployeePayload>
/**
 * Model DataSto
 * 
 */
export type DataSto = $Result.DefaultSelection<Prisma.$DataStoPayload>
/**
 * Model IInn
 * 
 */
export type IInn = $Result.DefaultSelection<Prisma.$IInnPayload>
/**
 * Model Manager
 * 
 */
export type Manager = $Result.DefaultSelection<Prisma.$ManagerPayload>
/**
 * Model SignatoryManager
 * 
 */
export type SignatoryManager = $Result.DefaultSelection<Prisma.$SignatoryManagerPayload>
/**
 * Model Lifts
 * 
 */
export type Lifts = $Result.DefaultSelection<Prisma.$LiftsPayload>
/**
 * Model ConfirmData
 * 
 */
export type ConfirmData = $Result.DefaultSelection<Prisma.$ConfirmDataPayload>
/**
 * Model Images
 * 
 */
export type Images = $Result.DefaultSelection<Prisma.$ImagesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  draft: 'draft',
  accepted: 'accepted',
  rejected: 'rejected',
  sent: 'sent'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Questionnaires
 * const questionnaires = await prisma.questionnaire.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Questionnaires
   * const questionnaires = await prisma.questionnaire.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.questionnaire`: Exposes CRUD operations for the **Questionnaire** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questionnaires
    * const questionnaires = await prisma.questionnaire.findMany()
    * ```
    */
  get questionnaire(): Prisma.QuestionnaireDelegate<ExtArgs>;

  /**
   * `prisma.distributorEmployee`: Exposes CRUD operations for the **DistributorEmployee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DistributorEmployees
    * const distributorEmployees = await prisma.distributorEmployee.findMany()
    * ```
    */
  get distributorEmployee(): Prisma.DistributorEmployeeDelegate<ExtArgs>;

  /**
   * `prisma.dataSto`: Exposes CRUD operations for the **DataSto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataStos
    * const dataStos = await prisma.dataSto.findMany()
    * ```
    */
  get dataSto(): Prisma.DataStoDelegate<ExtArgs>;

  /**
   * `prisma.iInn`: Exposes CRUD operations for the **IInn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IInns
    * const iInns = await prisma.iInn.findMany()
    * ```
    */
  get iInn(): Prisma.IInnDelegate<ExtArgs>;

  /**
   * `prisma.manager`: Exposes CRUD operations for the **Manager** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Managers
    * const managers = await prisma.manager.findMany()
    * ```
    */
  get manager(): Prisma.ManagerDelegate<ExtArgs>;

  /**
   * `prisma.signatoryManager`: Exposes CRUD operations for the **SignatoryManager** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SignatoryManagers
    * const signatoryManagers = await prisma.signatoryManager.findMany()
    * ```
    */
  get signatoryManager(): Prisma.SignatoryManagerDelegate<ExtArgs>;

  /**
   * `prisma.lifts`: Exposes CRUD operations for the **Lifts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lifts
    * const lifts = await prisma.lifts.findMany()
    * ```
    */
  get lifts(): Prisma.LiftsDelegate<ExtArgs>;

  /**
   * `prisma.confirmData`: Exposes CRUD operations for the **ConfirmData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConfirmData
    * const confirmData = await prisma.confirmData.findMany()
    * ```
    */
  get confirmData(): Prisma.ConfirmDataDelegate<ExtArgs>;

  /**
   * `prisma.images`: Exposes CRUD operations for the **Images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.images.findMany()
    * ```
    */
  get images(): Prisma.ImagesDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.9.1
   * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'questionnaire' | 'distributorEmployee' | 'dataSto' | 'iInn' | 'manager' | 'signatoryManager' | 'lifts' | 'confirmData' | 'images'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Questionnaire: {
        payload: Prisma.$QuestionnairePayload<ExtArgs>
        fields: Prisma.QuestionnaireFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionnaireFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestionnairePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionnaireFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestionnairePayload>
          }
          findFirst: {
            args: Prisma.QuestionnaireFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestionnairePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionnaireFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestionnairePayload>
          }
          findMany: {
            args: Prisma.QuestionnaireFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestionnairePayload>[]
          }
          create: {
            args: Prisma.QuestionnaireCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestionnairePayload>
          }
          createMany: {
            args: Prisma.QuestionnaireCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.QuestionnaireDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestionnairePayload>
          }
          update: {
            args: Prisma.QuestionnaireUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestionnairePayload>
          }
          deleteMany: {
            args: Prisma.QuestionnaireDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionnaireUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.QuestionnaireUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QuestionnairePayload>
          }
          aggregate: {
            args: Prisma.QuestionnaireAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateQuestionnaire>
          }
          groupBy: {
            args: Prisma.QuestionnaireGroupByArgs<ExtArgs>,
            result: $Utils.Optional<QuestionnaireGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionnaireCountArgs<ExtArgs>,
            result: $Utils.Optional<QuestionnaireCountAggregateOutputType> | number
          }
        }
      }
      DistributorEmployee: {
        payload: Prisma.$DistributorEmployeePayload<ExtArgs>
        fields: Prisma.DistributorEmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DistributorEmployeeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DistributorEmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DistributorEmployeeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DistributorEmployeePayload>
          }
          findFirst: {
            args: Prisma.DistributorEmployeeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DistributorEmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DistributorEmployeeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DistributorEmployeePayload>
          }
          findMany: {
            args: Prisma.DistributorEmployeeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DistributorEmployeePayload>[]
          }
          create: {
            args: Prisma.DistributorEmployeeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DistributorEmployeePayload>
          }
          createMany: {
            args: Prisma.DistributorEmployeeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DistributorEmployeeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DistributorEmployeePayload>
          }
          update: {
            args: Prisma.DistributorEmployeeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DistributorEmployeePayload>
          }
          deleteMany: {
            args: Prisma.DistributorEmployeeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DistributorEmployeeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DistributorEmployeeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DistributorEmployeePayload>
          }
          aggregate: {
            args: Prisma.DistributorEmployeeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDistributorEmployee>
          }
          groupBy: {
            args: Prisma.DistributorEmployeeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DistributorEmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DistributorEmployeeCountArgs<ExtArgs>,
            result: $Utils.Optional<DistributorEmployeeCountAggregateOutputType> | number
          }
        }
      }
      DataSto: {
        payload: Prisma.$DataStoPayload<ExtArgs>
        fields: Prisma.DataStoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataStoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DataStoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataStoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DataStoPayload>
          }
          findFirst: {
            args: Prisma.DataStoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DataStoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataStoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DataStoPayload>
          }
          findMany: {
            args: Prisma.DataStoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DataStoPayload>[]
          }
          create: {
            args: Prisma.DataStoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DataStoPayload>
          }
          createMany: {
            args: Prisma.DataStoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DataStoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DataStoPayload>
          }
          update: {
            args: Prisma.DataStoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DataStoPayload>
          }
          deleteMany: {
            args: Prisma.DataStoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DataStoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DataStoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DataStoPayload>
          }
          aggregate: {
            args: Prisma.DataStoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDataSto>
          }
          groupBy: {
            args: Prisma.DataStoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DataStoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataStoCountArgs<ExtArgs>,
            result: $Utils.Optional<DataStoCountAggregateOutputType> | number
          }
        }
      }
      IInn: {
        payload: Prisma.$IInnPayload<ExtArgs>
        fields: Prisma.IInnFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IInnFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IInnPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IInnFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IInnPayload>
          }
          findFirst: {
            args: Prisma.IInnFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IInnPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IInnFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IInnPayload>
          }
          findMany: {
            args: Prisma.IInnFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IInnPayload>[]
          }
          create: {
            args: Prisma.IInnCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IInnPayload>
          }
          createMany: {
            args: Prisma.IInnCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.IInnDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IInnPayload>
          }
          update: {
            args: Prisma.IInnUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IInnPayload>
          }
          deleteMany: {
            args: Prisma.IInnDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.IInnUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.IInnUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IInnPayload>
          }
          aggregate: {
            args: Prisma.IInnAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIInn>
          }
          groupBy: {
            args: Prisma.IInnGroupByArgs<ExtArgs>,
            result: $Utils.Optional<IInnGroupByOutputType>[]
          }
          count: {
            args: Prisma.IInnCountArgs<ExtArgs>,
            result: $Utils.Optional<IInnCountAggregateOutputType> | number
          }
        }
      }
      Manager: {
        payload: Prisma.$ManagerPayload<ExtArgs>
        fields: Prisma.ManagerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManagerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManagerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          findFirst: {
            args: Prisma.ManagerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManagerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          findMany: {
            args: Prisma.ManagerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>[]
          }
          create: {
            args: Prisma.ManagerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          createMany: {
            args: Prisma.ManagerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ManagerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          update: {
            args: Prisma.ManagerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          deleteMany: {
            args: Prisma.ManagerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ManagerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ManagerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManagerPayload>
          }
          aggregate: {
            args: Prisma.ManagerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateManager>
          }
          groupBy: {
            args: Prisma.ManagerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ManagerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManagerCountArgs<ExtArgs>,
            result: $Utils.Optional<ManagerCountAggregateOutputType> | number
          }
        }
      }
      SignatoryManager: {
        payload: Prisma.$SignatoryManagerPayload<ExtArgs>
        fields: Prisma.SignatoryManagerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SignatoryManagerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SignatoryManagerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SignatoryManagerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SignatoryManagerPayload>
          }
          findFirst: {
            args: Prisma.SignatoryManagerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SignatoryManagerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SignatoryManagerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SignatoryManagerPayload>
          }
          findMany: {
            args: Prisma.SignatoryManagerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SignatoryManagerPayload>[]
          }
          create: {
            args: Prisma.SignatoryManagerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SignatoryManagerPayload>
          }
          createMany: {
            args: Prisma.SignatoryManagerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SignatoryManagerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SignatoryManagerPayload>
          }
          update: {
            args: Prisma.SignatoryManagerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SignatoryManagerPayload>
          }
          deleteMany: {
            args: Prisma.SignatoryManagerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SignatoryManagerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SignatoryManagerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SignatoryManagerPayload>
          }
          aggregate: {
            args: Prisma.SignatoryManagerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSignatoryManager>
          }
          groupBy: {
            args: Prisma.SignatoryManagerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SignatoryManagerGroupByOutputType>[]
          }
          count: {
            args: Prisma.SignatoryManagerCountArgs<ExtArgs>,
            result: $Utils.Optional<SignatoryManagerCountAggregateOutputType> | number
          }
        }
      }
      Lifts: {
        payload: Prisma.$LiftsPayload<ExtArgs>
        fields: Prisma.LiftsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LiftsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LiftsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LiftsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LiftsPayload>
          }
          findFirst: {
            args: Prisma.LiftsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LiftsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LiftsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LiftsPayload>
          }
          findMany: {
            args: Prisma.LiftsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LiftsPayload>[]
          }
          create: {
            args: Prisma.LiftsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LiftsPayload>
          }
          createMany: {
            args: Prisma.LiftsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LiftsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LiftsPayload>
          }
          update: {
            args: Prisma.LiftsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LiftsPayload>
          }
          deleteMany: {
            args: Prisma.LiftsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LiftsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LiftsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LiftsPayload>
          }
          aggregate: {
            args: Prisma.LiftsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLifts>
          }
          groupBy: {
            args: Prisma.LiftsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LiftsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LiftsCountArgs<ExtArgs>,
            result: $Utils.Optional<LiftsCountAggregateOutputType> | number
          }
        }
      }
      ConfirmData: {
        payload: Prisma.$ConfirmDataPayload<ExtArgs>
        fields: Prisma.ConfirmDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfirmDataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConfirmDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfirmDataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConfirmDataPayload>
          }
          findFirst: {
            args: Prisma.ConfirmDataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConfirmDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfirmDataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConfirmDataPayload>
          }
          findMany: {
            args: Prisma.ConfirmDataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConfirmDataPayload>[]
          }
          create: {
            args: Prisma.ConfirmDataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConfirmDataPayload>
          }
          createMany: {
            args: Prisma.ConfirmDataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ConfirmDataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConfirmDataPayload>
          }
          update: {
            args: Prisma.ConfirmDataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConfirmDataPayload>
          }
          deleteMany: {
            args: Prisma.ConfirmDataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ConfirmDataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ConfirmDataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConfirmDataPayload>
          }
          aggregate: {
            args: Prisma.ConfirmDataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateConfirmData>
          }
          groupBy: {
            args: Prisma.ConfirmDataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ConfirmDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfirmDataCountArgs<ExtArgs>,
            result: $Utils.Optional<ConfirmDataCountAggregateOutputType> | number
          }
        }
      }
      Images: {
        payload: Prisma.$ImagesPayload<ExtArgs>
        fields: Prisma.ImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImagesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImagesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          findFirst: {
            args: Prisma.ImagesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImagesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          findMany: {
            args: Prisma.ImagesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>[]
          }
          create: {
            args: Prisma.ImagesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          createMany: {
            args: Prisma.ImagesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ImagesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          update: {
            args: Prisma.ImagesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          deleteMany: {
            args: Prisma.ImagesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ImagesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ImagesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          aggregate: {
            args: Prisma.ImagesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateImages>
          }
          groupBy: {
            args: Prisma.ImagesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImagesCountArgs<ExtArgs>,
            result: $Utils.Optional<ImagesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type QuestionnaireCountOutputType
   */

  export type QuestionnaireCountOutputType = {
    inns: number
    images: number
  }

  export type QuestionnaireCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inns?: boolean | QuestionnaireCountOutputTypeCountInnsArgs
    images?: boolean | QuestionnaireCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes

  /**
   * QuestionnaireCountOutputType without action
   */
  export type QuestionnaireCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionnaireCountOutputType
     */
    select?: QuestionnaireCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * QuestionnaireCountOutputType without action
   */
  export type QuestionnaireCountOutputTypeCountInnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IInnWhereInput
  }


  /**
   * QuestionnaireCountOutputType without action
   */
  export type QuestionnaireCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagesWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Questionnaire
   */

  export type AggregateQuestionnaire = {
    _count: QuestionnaireCountAggregateOutputType | null
    _avg: QuestionnaireAvgAggregateOutputType | null
    _sum: QuestionnaireSumAggregateOutputType | null
    _min: QuestionnaireMinAggregateOutputType | null
    _max: QuestionnaireMaxAggregateOutputType | null
  }

  export type QuestionnaireAvgAggregateOutputType = {
    id: number | null
  }

  export type QuestionnaireSumAggregateOutputType = {
    id: number | null
  }

  export type QuestionnaireMinAggregateOutputType = {
    id: number | null
    distributor: string | null
    status: $Enums.Status | null
    comment: string | null
    created_date: Date | null
    updated_date: Date | null
  }

  export type QuestionnaireMaxAggregateOutputType = {
    id: number | null
    distributor: string | null
    status: $Enums.Status | null
    comment: string | null
    created_date: Date | null
    updated_date: Date | null
  }

  export type QuestionnaireCountAggregateOutputType = {
    id: number
    distributor: number
    status: number
    comment: number
    created_date: number
    updated_date: number
    _all: number
  }


  export type QuestionnaireAvgAggregateInputType = {
    id?: true
  }

  export type QuestionnaireSumAggregateInputType = {
    id?: true
  }

  export type QuestionnaireMinAggregateInputType = {
    id?: true
    distributor?: true
    status?: true
    comment?: true
    created_date?: true
    updated_date?: true
  }

  export type QuestionnaireMaxAggregateInputType = {
    id?: true
    distributor?: true
    status?: true
    comment?: true
    created_date?: true
    updated_date?: true
  }

  export type QuestionnaireCountAggregateInputType = {
    id?: true
    distributor?: true
    status?: true
    comment?: true
    created_date?: true
    updated_date?: true
    _all?: true
  }

  export type QuestionnaireAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questionnaire to aggregate.
     */
    where?: QuestionnaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questionnaires to fetch.
     */
    orderBy?: QuestionnaireOrderByWithRelationInput | QuestionnaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionnaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questionnaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questionnaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questionnaires
    **/
    _count?: true | QuestionnaireCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionnaireAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionnaireSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionnaireMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionnaireMaxAggregateInputType
  }

  export type GetQuestionnaireAggregateType<T extends QuestionnaireAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionnaire]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionnaire[P]>
      : GetScalarType<T[P], AggregateQuestionnaire[P]>
  }




  export type QuestionnaireGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionnaireWhereInput
    orderBy?: QuestionnaireOrderByWithAggregationInput | QuestionnaireOrderByWithAggregationInput[]
    by: QuestionnaireScalarFieldEnum[] | QuestionnaireScalarFieldEnum
    having?: QuestionnaireScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionnaireCountAggregateInputType | true
    _avg?: QuestionnaireAvgAggregateInputType
    _sum?: QuestionnaireSumAggregateInputType
    _min?: QuestionnaireMinAggregateInputType
    _max?: QuestionnaireMaxAggregateInputType
  }

  export type QuestionnaireGroupByOutputType = {
    id: number
    distributor: string
    status: $Enums.Status
    comment: string | null
    created_date: Date
    updated_date: Date
    _count: QuestionnaireCountAggregateOutputType | null
    _avg: QuestionnaireAvgAggregateOutputType | null
    _sum: QuestionnaireSumAggregateOutputType | null
    _min: QuestionnaireMinAggregateOutputType | null
    _max: QuestionnaireMaxAggregateOutputType | null
  }

  type GetQuestionnaireGroupByPayload<T extends QuestionnaireGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionnaireGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionnaireGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionnaireGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionnaireGroupByOutputType[P]>
        }
      >
    >


  export type QuestionnaireSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    distributor?: boolean
    status?: boolean
    comment?: boolean
    created_date?: boolean
    updated_date?: boolean
    distributor_employee?: boolean | Questionnaire$distributor_employeeArgs<ExtArgs>
    data_sto?: boolean | Questionnaire$data_stoArgs<ExtArgs>
    inns?: boolean | Questionnaire$innsArgs<ExtArgs>
    images?: boolean | Questionnaire$imagesArgs<ExtArgs>
    lifts?: boolean | Questionnaire$liftsArgs<ExtArgs>
    manager?: boolean | Questionnaire$managerArgs<ExtArgs>
    signatoryManager?: boolean | Questionnaire$signatoryManagerArgs<ExtArgs>
    confirmData?: boolean | Questionnaire$confirmDataArgs<ExtArgs>
    _count?: boolean | QuestionnaireCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionnaire"]>

  export type QuestionnaireSelectScalar = {
    id?: boolean
    distributor?: boolean
    status?: boolean
    comment?: boolean
    created_date?: boolean
    updated_date?: boolean
  }

  export type QuestionnaireInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distributor_employee?: boolean | Questionnaire$distributor_employeeArgs<ExtArgs>
    data_sto?: boolean | Questionnaire$data_stoArgs<ExtArgs>
    inns?: boolean | Questionnaire$innsArgs<ExtArgs>
    images?: boolean | Questionnaire$imagesArgs<ExtArgs>
    lifts?: boolean | Questionnaire$liftsArgs<ExtArgs>
    manager?: boolean | Questionnaire$managerArgs<ExtArgs>
    signatoryManager?: boolean | Questionnaire$signatoryManagerArgs<ExtArgs>
    confirmData?: boolean | Questionnaire$confirmDataArgs<ExtArgs>
    _count?: boolean | QuestionnaireCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $QuestionnairePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Questionnaire"
    objects: {
      distributor_employee: Prisma.$DistributorEmployeePayload<ExtArgs> | null
      data_sto: Prisma.$DataStoPayload<ExtArgs> | null
      inns: Prisma.$IInnPayload<ExtArgs>[]
      images: Prisma.$ImagesPayload<ExtArgs>[]
      lifts: Prisma.$LiftsPayload<ExtArgs> | null
      manager: Prisma.$ManagerPayload<ExtArgs> | null
      signatoryManager: Prisma.$SignatoryManagerPayload<ExtArgs> | null
      confirmData: Prisma.$ConfirmDataPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      distributor: string
      status: $Enums.Status
      comment: string | null
      created_date: Date
      updated_date: Date
    }, ExtArgs["result"]["questionnaire"]>
    composites: {}
  }


  type QuestionnaireGetPayload<S extends boolean | null | undefined | QuestionnaireDefaultArgs> = $Result.GetResult<Prisma.$QuestionnairePayload, S>

  type QuestionnaireCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuestionnaireFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuestionnaireCountAggregateInputType | true
    }

  export interface QuestionnaireDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Questionnaire'], meta: { name: 'Questionnaire' } }
    /**
     * Find zero or one Questionnaire that matches the filter.
     * @param {QuestionnaireFindUniqueArgs} args - Arguments to find a Questionnaire
     * @example
     * // Get one Questionnaire
     * const questionnaire = await prisma.questionnaire.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuestionnaireFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, QuestionnaireFindUniqueArgs<ExtArgs>>
    ): Prisma__QuestionnaireClient<$Result.GetResult<Prisma.$QuestionnairePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Questionnaire that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {QuestionnaireFindUniqueOrThrowArgs} args - Arguments to find a Questionnaire
     * @example
     * // Get one Questionnaire
     * const questionnaire = await prisma.questionnaire.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QuestionnaireFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestionnaireFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__QuestionnaireClient<$Result.GetResult<Prisma.$QuestionnairePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Questionnaire that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionnaireFindFirstArgs} args - Arguments to find a Questionnaire
     * @example
     * // Get one Questionnaire
     * const questionnaire = await prisma.questionnaire.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuestionnaireFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestionnaireFindFirstArgs<ExtArgs>>
    ): Prisma__QuestionnaireClient<$Result.GetResult<Prisma.$QuestionnairePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Questionnaire that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionnaireFindFirstOrThrowArgs} args - Arguments to find a Questionnaire
     * @example
     * // Get one Questionnaire
     * const questionnaire = await prisma.questionnaire.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QuestionnaireFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestionnaireFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__QuestionnaireClient<$Result.GetResult<Prisma.$QuestionnairePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Questionnaires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionnaireFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questionnaires
     * const questionnaires = await prisma.questionnaire.findMany()
     * 
     * // Get first 10 Questionnaires
     * const questionnaires = await prisma.questionnaire.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionnaireWithIdOnly = await prisma.questionnaire.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuestionnaireFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestionnaireFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionnairePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Questionnaire.
     * @param {QuestionnaireCreateArgs} args - Arguments to create a Questionnaire.
     * @example
     * // Create one Questionnaire
     * const Questionnaire = await prisma.questionnaire.create({
     *   data: {
     *     // ... data to create a Questionnaire
     *   }
     * })
     * 
    **/
    create<T extends QuestionnaireCreateArgs<ExtArgs>>(
      args: SelectSubset<T, QuestionnaireCreateArgs<ExtArgs>>
    ): Prisma__QuestionnaireClient<$Result.GetResult<Prisma.$QuestionnairePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Questionnaires.
     *     @param {QuestionnaireCreateManyArgs} args - Arguments to create many Questionnaires.
     *     @example
     *     // Create many Questionnaires
     *     const questionnaire = await prisma.questionnaire.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QuestionnaireCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestionnaireCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Questionnaire.
     * @param {QuestionnaireDeleteArgs} args - Arguments to delete one Questionnaire.
     * @example
     * // Delete one Questionnaire
     * const Questionnaire = await prisma.questionnaire.delete({
     *   where: {
     *     // ... filter to delete one Questionnaire
     *   }
     * })
     * 
    **/
    delete<T extends QuestionnaireDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, QuestionnaireDeleteArgs<ExtArgs>>
    ): Prisma__QuestionnaireClient<$Result.GetResult<Prisma.$QuestionnairePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Questionnaire.
     * @param {QuestionnaireUpdateArgs} args - Arguments to update one Questionnaire.
     * @example
     * // Update one Questionnaire
     * const questionnaire = await prisma.questionnaire.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuestionnaireUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, QuestionnaireUpdateArgs<ExtArgs>>
    ): Prisma__QuestionnaireClient<$Result.GetResult<Prisma.$QuestionnairePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Questionnaires.
     * @param {QuestionnaireDeleteManyArgs} args - Arguments to filter Questionnaires to delete.
     * @example
     * // Delete a few Questionnaires
     * const { count } = await prisma.questionnaire.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuestionnaireDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QuestionnaireDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questionnaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionnaireUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questionnaires
     * const questionnaire = await prisma.questionnaire.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuestionnaireUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, QuestionnaireUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Questionnaire.
     * @param {QuestionnaireUpsertArgs} args - Arguments to update or create a Questionnaire.
     * @example
     * // Update or create a Questionnaire
     * const questionnaire = await prisma.questionnaire.upsert({
     *   create: {
     *     // ... data to create a Questionnaire
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Questionnaire we want to update
     *   }
     * })
    **/
    upsert<T extends QuestionnaireUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, QuestionnaireUpsertArgs<ExtArgs>>
    ): Prisma__QuestionnaireClient<$Result.GetResult<Prisma.$QuestionnairePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Questionnaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionnaireCountArgs} args - Arguments to filter Questionnaires to count.
     * @example
     * // Count the number of Questionnaires
     * const count = await prisma.questionnaire.count({
     *   where: {
     *     // ... the filter for the Questionnaires we want to count
     *   }
     * })
    **/
    count<T extends QuestionnaireCountArgs>(
      args?: Subset<T, QuestionnaireCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionnaireCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Questionnaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionnaireAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionnaireAggregateArgs>(args: Subset<T, QuestionnaireAggregateArgs>): Prisma.PrismaPromise<GetQuestionnaireAggregateType<T>>

    /**
     * Group by Questionnaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionnaireGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionnaireGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionnaireGroupByArgs['orderBy'] }
        : { orderBy?: QuestionnaireGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionnaireGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionnaireGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Questionnaire model
   */
  readonly fields: QuestionnaireFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Questionnaire.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionnaireClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    distributor_employee<T extends Questionnaire$distributor_employeeArgs<ExtArgs> = {}>(args?: Subset<T, Questionnaire$distributor_employeeArgs<ExtArgs>>): Prisma__DistributorEmployeeClient<$Result.GetResult<Prisma.$DistributorEmployeePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    data_sto<T extends Questionnaire$data_stoArgs<ExtArgs> = {}>(args?: Subset<T, Questionnaire$data_stoArgs<ExtArgs>>): Prisma__DataStoClient<$Result.GetResult<Prisma.$DataStoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    inns<T extends Questionnaire$innsArgs<ExtArgs> = {}>(args?: Subset<T, Questionnaire$innsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IInnPayload<ExtArgs>, T, 'findMany'> | Null>;

    images<T extends Questionnaire$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Questionnaire$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, 'findMany'> | Null>;

    lifts<T extends Questionnaire$liftsArgs<ExtArgs> = {}>(args?: Subset<T, Questionnaire$liftsArgs<ExtArgs>>): Prisma__LiftsClient<$Result.GetResult<Prisma.$LiftsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    manager<T extends Questionnaire$managerArgs<ExtArgs> = {}>(args?: Subset<T, Questionnaire$managerArgs<ExtArgs>>): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    signatoryManager<T extends Questionnaire$signatoryManagerArgs<ExtArgs> = {}>(args?: Subset<T, Questionnaire$signatoryManagerArgs<ExtArgs>>): Prisma__SignatoryManagerClient<$Result.GetResult<Prisma.$SignatoryManagerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    confirmData<T extends Questionnaire$confirmDataArgs<ExtArgs> = {}>(args?: Subset<T, Questionnaire$confirmDataArgs<ExtArgs>>): Prisma__ConfirmDataClient<$Result.GetResult<Prisma.$ConfirmDataPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Questionnaire model
   */ 
  interface QuestionnaireFieldRefs {
    readonly id: FieldRef<"Questionnaire", 'Int'>
    readonly distributor: FieldRef<"Questionnaire", 'String'>
    readonly status: FieldRef<"Questionnaire", 'Status'>
    readonly comment: FieldRef<"Questionnaire", 'String'>
    readonly created_date: FieldRef<"Questionnaire", 'DateTime'>
    readonly updated_date: FieldRef<"Questionnaire", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Questionnaire findUnique
   */
  export type QuestionnaireFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questionnaire
     */
    select?: QuestionnaireSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionnaireInclude<ExtArgs> | null
    /**
     * Filter, which Questionnaire to fetch.
     */
    where: QuestionnaireWhereUniqueInput
  }


  /**
   * Questionnaire findUniqueOrThrow
   */
  export type QuestionnaireFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questionnaire
     */
    select?: QuestionnaireSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionnaireInclude<ExtArgs> | null
    /**
     * Filter, which Questionnaire to fetch.
     */
    where: QuestionnaireWhereUniqueInput
  }


  /**
   * Questionnaire findFirst
   */
  export type QuestionnaireFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questionnaire
     */
    select?: QuestionnaireSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionnaireInclude<ExtArgs> | null
    /**
     * Filter, which Questionnaire to fetch.
     */
    where?: QuestionnaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questionnaires to fetch.
     */
    orderBy?: QuestionnaireOrderByWithRelationInput | QuestionnaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questionnaires.
     */
    cursor?: QuestionnaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questionnaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questionnaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questionnaires.
     */
    distinct?: QuestionnaireScalarFieldEnum | QuestionnaireScalarFieldEnum[]
  }


  /**
   * Questionnaire findFirstOrThrow
   */
  export type QuestionnaireFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questionnaire
     */
    select?: QuestionnaireSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionnaireInclude<ExtArgs> | null
    /**
     * Filter, which Questionnaire to fetch.
     */
    where?: QuestionnaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questionnaires to fetch.
     */
    orderBy?: QuestionnaireOrderByWithRelationInput | QuestionnaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questionnaires.
     */
    cursor?: QuestionnaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questionnaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questionnaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questionnaires.
     */
    distinct?: QuestionnaireScalarFieldEnum | QuestionnaireScalarFieldEnum[]
  }


  /**
   * Questionnaire findMany
   */
  export type QuestionnaireFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questionnaire
     */
    select?: QuestionnaireSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionnaireInclude<ExtArgs> | null
    /**
     * Filter, which Questionnaires to fetch.
     */
    where?: QuestionnaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questionnaires to fetch.
     */
    orderBy?: QuestionnaireOrderByWithRelationInput | QuestionnaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questionnaires.
     */
    cursor?: QuestionnaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questionnaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questionnaires.
     */
    skip?: number
    distinct?: QuestionnaireScalarFieldEnum | QuestionnaireScalarFieldEnum[]
  }


  /**
   * Questionnaire create
   */
  export type QuestionnaireCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questionnaire
     */
    select?: QuestionnaireSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionnaireInclude<ExtArgs> | null
    /**
     * The data needed to create a Questionnaire.
     */
    data: XOR<QuestionnaireCreateInput, QuestionnaireUncheckedCreateInput>
  }


  /**
   * Questionnaire createMany
   */
  export type QuestionnaireCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questionnaires.
     */
    data: QuestionnaireCreateManyInput | QuestionnaireCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Questionnaire update
   */
  export type QuestionnaireUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questionnaire
     */
    select?: QuestionnaireSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionnaireInclude<ExtArgs> | null
    /**
     * The data needed to update a Questionnaire.
     */
    data: XOR<QuestionnaireUpdateInput, QuestionnaireUncheckedUpdateInput>
    /**
     * Choose, which Questionnaire to update.
     */
    where: QuestionnaireWhereUniqueInput
  }


  /**
   * Questionnaire updateMany
   */
  export type QuestionnaireUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questionnaires.
     */
    data: XOR<QuestionnaireUpdateManyMutationInput, QuestionnaireUncheckedUpdateManyInput>
    /**
     * Filter which Questionnaires to update
     */
    where?: QuestionnaireWhereInput
  }


  /**
   * Questionnaire upsert
   */
  export type QuestionnaireUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questionnaire
     */
    select?: QuestionnaireSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionnaireInclude<ExtArgs> | null
    /**
     * The filter to search for the Questionnaire to update in case it exists.
     */
    where: QuestionnaireWhereUniqueInput
    /**
     * In case the Questionnaire found by the `where` argument doesn't exist, create a new Questionnaire with this data.
     */
    create: XOR<QuestionnaireCreateInput, QuestionnaireUncheckedCreateInput>
    /**
     * In case the Questionnaire was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionnaireUpdateInput, QuestionnaireUncheckedUpdateInput>
  }


  /**
   * Questionnaire delete
   */
  export type QuestionnaireDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questionnaire
     */
    select?: QuestionnaireSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionnaireInclude<ExtArgs> | null
    /**
     * Filter which Questionnaire to delete.
     */
    where: QuestionnaireWhereUniqueInput
  }


  /**
   * Questionnaire deleteMany
   */
  export type QuestionnaireDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questionnaires to delete
     */
    where?: QuestionnaireWhereInput
  }


  /**
   * Questionnaire.distributor_employee
   */
  export type Questionnaire$distributor_employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorEmployee
     */
    select?: DistributorEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistributorEmployeeInclude<ExtArgs> | null
    where?: DistributorEmployeeWhereInput
  }


  /**
   * Questionnaire.data_sto
   */
  export type Questionnaire$data_stoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSto
     */
    select?: DataStoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataStoInclude<ExtArgs> | null
    where?: DataStoWhereInput
  }


  /**
   * Questionnaire.inns
   */
  export type Questionnaire$innsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IInn
     */
    select?: IInnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IInnInclude<ExtArgs> | null
    where?: IInnWhereInput
    orderBy?: IInnOrderByWithRelationInput | IInnOrderByWithRelationInput[]
    cursor?: IInnWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IInnScalarFieldEnum | IInnScalarFieldEnum[]
  }


  /**
   * Questionnaire.images
   */
  export type Questionnaire$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagesInclude<ExtArgs> | null
    where?: ImagesWhereInput
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    cursor?: ImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }


  /**
   * Questionnaire.lifts
   */
  export type Questionnaire$liftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifts
     */
    select?: LiftsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LiftsInclude<ExtArgs> | null
    where?: LiftsWhereInput
  }


  /**
   * Questionnaire.manager
   */
  export type Questionnaire$managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagerInclude<ExtArgs> | null
    where?: ManagerWhereInput
  }


  /**
   * Questionnaire.signatoryManager
   */
  export type Questionnaire$signatoryManagerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignatoryManager
     */
    select?: SignatoryManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SignatoryManagerInclude<ExtArgs> | null
    where?: SignatoryManagerWhereInput
  }


  /**
   * Questionnaire.confirmData
   */
  export type Questionnaire$confirmDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmData
     */
    select?: ConfirmDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConfirmDataInclude<ExtArgs> | null
    where?: ConfirmDataWhereInput
  }


  /**
   * Questionnaire without action
   */
  export type QuestionnaireDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Questionnaire
     */
    select?: QuestionnaireSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionnaireInclude<ExtArgs> | null
  }



  /**
   * Model DistributorEmployee
   */

  export type AggregateDistributorEmployee = {
    _count: DistributorEmployeeCountAggregateOutputType | null
    _avg: DistributorEmployeeAvgAggregateOutputType | null
    _sum: DistributorEmployeeSumAggregateOutputType | null
    _min: DistributorEmployeeMinAggregateOutputType | null
    _max: DistributorEmployeeMaxAggregateOutputType | null
  }

  export type DistributorEmployeeAvgAggregateOutputType = {
    id: number | null
    questionnaireId: number | null
  }

  export type DistributorEmployeeSumAggregateOutputType = {
    id: number | null
    questionnaireId: number | null
  }

  export type DistributorEmployeeMinAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    lastname: string | null
    phone: string | null
    email: string | null
    questionnaireId: number | null
  }

  export type DistributorEmployeeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    lastname: string | null
    phone: string | null
    email: string | null
    questionnaireId: number | null
  }

  export type DistributorEmployeeCountAggregateOutputType = {
    id: number
    name: number
    surname: number
    lastname: number
    phone: number
    email: number
    questionnaireId: number
    _all: number
  }


  export type DistributorEmployeeAvgAggregateInputType = {
    id?: true
    questionnaireId?: true
  }

  export type DistributorEmployeeSumAggregateInputType = {
    id?: true
    questionnaireId?: true
  }

  export type DistributorEmployeeMinAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    lastname?: true
    phone?: true
    email?: true
    questionnaireId?: true
  }

  export type DistributorEmployeeMaxAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    lastname?: true
    phone?: true
    email?: true
    questionnaireId?: true
  }

  export type DistributorEmployeeCountAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    lastname?: true
    phone?: true
    email?: true
    questionnaireId?: true
    _all?: true
  }

  export type DistributorEmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DistributorEmployee to aggregate.
     */
    where?: DistributorEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistributorEmployees to fetch.
     */
    orderBy?: DistributorEmployeeOrderByWithRelationInput | DistributorEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DistributorEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistributorEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistributorEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DistributorEmployees
    **/
    _count?: true | DistributorEmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DistributorEmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DistributorEmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistributorEmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistributorEmployeeMaxAggregateInputType
  }

  export type GetDistributorEmployeeAggregateType<T extends DistributorEmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateDistributorEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistributorEmployee[P]>
      : GetScalarType<T[P], AggregateDistributorEmployee[P]>
  }




  export type DistributorEmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistributorEmployeeWhereInput
    orderBy?: DistributorEmployeeOrderByWithAggregationInput | DistributorEmployeeOrderByWithAggregationInput[]
    by: DistributorEmployeeScalarFieldEnum[] | DistributorEmployeeScalarFieldEnum
    having?: DistributorEmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistributorEmployeeCountAggregateInputType | true
    _avg?: DistributorEmployeeAvgAggregateInputType
    _sum?: DistributorEmployeeSumAggregateInputType
    _min?: DistributorEmployeeMinAggregateInputType
    _max?: DistributorEmployeeMaxAggregateInputType
  }

  export type DistributorEmployeeGroupByOutputType = {
    id: number
    name: string
    surname: string
    lastname: string
    phone: string
    email: string
    questionnaireId: number
    _count: DistributorEmployeeCountAggregateOutputType | null
    _avg: DistributorEmployeeAvgAggregateOutputType | null
    _sum: DistributorEmployeeSumAggregateOutputType | null
    _min: DistributorEmployeeMinAggregateOutputType | null
    _max: DistributorEmployeeMaxAggregateOutputType | null
  }

  type GetDistributorEmployeeGroupByPayload<T extends DistributorEmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DistributorEmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistributorEmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistributorEmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], DistributorEmployeeGroupByOutputType[P]>
        }
      >
    >


  export type DistributorEmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    lastname?: boolean
    phone?: boolean
    email?: boolean
    questionnaireId?: boolean
    questionnaire?: boolean | QuestionnaireDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distributorEmployee"]>

  export type DistributorEmployeeSelectScalar = {
    id?: boolean
    name?: boolean
    surname?: boolean
    lastname?: boolean
    phone?: boolean
    email?: boolean
    questionnaireId?: boolean
  }

  export type DistributorEmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questionnaire?: boolean | QuestionnaireDefaultArgs<ExtArgs>
  }


  export type $DistributorEmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DistributorEmployee"
    objects: {
      questionnaire: Prisma.$QuestionnairePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      surname: string
      lastname: string
      phone: string
      email: string
      questionnaireId: number
    }, ExtArgs["result"]["distributorEmployee"]>
    composites: {}
  }


  type DistributorEmployeeGetPayload<S extends boolean | null | undefined | DistributorEmployeeDefaultArgs> = $Result.GetResult<Prisma.$DistributorEmployeePayload, S>

  type DistributorEmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DistributorEmployeeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DistributorEmployeeCountAggregateInputType | true
    }

  export interface DistributorEmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DistributorEmployee'], meta: { name: 'DistributorEmployee' } }
    /**
     * Find zero or one DistributorEmployee that matches the filter.
     * @param {DistributorEmployeeFindUniqueArgs} args - Arguments to find a DistributorEmployee
     * @example
     * // Get one DistributorEmployee
     * const distributorEmployee = await prisma.distributorEmployee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DistributorEmployeeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DistributorEmployeeFindUniqueArgs<ExtArgs>>
    ): Prisma__DistributorEmployeeClient<$Result.GetResult<Prisma.$DistributorEmployeePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DistributorEmployee that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DistributorEmployeeFindUniqueOrThrowArgs} args - Arguments to find a DistributorEmployee
     * @example
     * // Get one DistributorEmployee
     * const distributorEmployee = await prisma.distributorEmployee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DistributorEmployeeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DistributorEmployeeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DistributorEmployeeClient<$Result.GetResult<Prisma.$DistributorEmployeePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DistributorEmployee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorEmployeeFindFirstArgs} args - Arguments to find a DistributorEmployee
     * @example
     * // Get one DistributorEmployee
     * const distributorEmployee = await prisma.distributorEmployee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DistributorEmployeeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DistributorEmployeeFindFirstArgs<ExtArgs>>
    ): Prisma__DistributorEmployeeClient<$Result.GetResult<Prisma.$DistributorEmployeePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DistributorEmployee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorEmployeeFindFirstOrThrowArgs} args - Arguments to find a DistributorEmployee
     * @example
     * // Get one DistributorEmployee
     * const distributorEmployee = await prisma.distributorEmployee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DistributorEmployeeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DistributorEmployeeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DistributorEmployeeClient<$Result.GetResult<Prisma.$DistributorEmployeePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DistributorEmployees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorEmployeeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DistributorEmployees
     * const distributorEmployees = await prisma.distributorEmployee.findMany()
     * 
     * // Get first 10 DistributorEmployees
     * const distributorEmployees = await prisma.distributorEmployee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const distributorEmployeeWithIdOnly = await prisma.distributorEmployee.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DistributorEmployeeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DistributorEmployeeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorEmployeePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DistributorEmployee.
     * @param {DistributorEmployeeCreateArgs} args - Arguments to create a DistributorEmployee.
     * @example
     * // Create one DistributorEmployee
     * const DistributorEmployee = await prisma.distributorEmployee.create({
     *   data: {
     *     // ... data to create a DistributorEmployee
     *   }
     * })
     * 
    **/
    create<T extends DistributorEmployeeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DistributorEmployeeCreateArgs<ExtArgs>>
    ): Prisma__DistributorEmployeeClient<$Result.GetResult<Prisma.$DistributorEmployeePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DistributorEmployees.
     *     @param {DistributorEmployeeCreateManyArgs} args - Arguments to create many DistributorEmployees.
     *     @example
     *     // Create many DistributorEmployees
     *     const distributorEmployee = await prisma.distributorEmployee.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DistributorEmployeeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DistributorEmployeeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DistributorEmployee.
     * @param {DistributorEmployeeDeleteArgs} args - Arguments to delete one DistributorEmployee.
     * @example
     * // Delete one DistributorEmployee
     * const DistributorEmployee = await prisma.distributorEmployee.delete({
     *   where: {
     *     // ... filter to delete one DistributorEmployee
     *   }
     * })
     * 
    **/
    delete<T extends DistributorEmployeeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DistributorEmployeeDeleteArgs<ExtArgs>>
    ): Prisma__DistributorEmployeeClient<$Result.GetResult<Prisma.$DistributorEmployeePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DistributorEmployee.
     * @param {DistributorEmployeeUpdateArgs} args - Arguments to update one DistributorEmployee.
     * @example
     * // Update one DistributorEmployee
     * const distributorEmployee = await prisma.distributorEmployee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DistributorEmployeeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DistributorEmployeeUpdateArgs<ExtArgs>>
    ): Prisma__DistributorEmployeeClient<$Result.GetResult<Prisma.$DistributorEmployeePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DistributorEmployees.
     * @param {DistributorEmployeeDeleteManyArgs} args - Arguments to filter DistributorEmployees to delete.
     * @example
     * // Delete a few DistributorEmployees
     * const { count } = await prisma.distributorEmployee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DistributorEmployeeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DistributorEmployeeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DistributorEmployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorEmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DistributorEmployees
     * const distributorEmployee = await prisma.distributorEmployee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DistributorEmployeeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DistributorEmployeeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DistributorEmployee.
     * @param {DistributorEmployeeUpsertArgs} args - Arguments to update or create a DistributorEmployee.
     * @example
     * // Update or create a DistributorEmployee
     * const distributorEmployee = await prisma.distributorEmployee.upsert({
     *   create: {
     *     // ... data to create a DistributorEmployee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DistributorEmployee we want to update
     *   }
     * })
    **/
    upsert<T extends DistributorEmployeeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DistributorEmployeeUpsertArgs<ExtArgs>>
    ): Prisma__DistributorEmployeeClient<$Result.GetResult<Prisma.$DistributorEmployeePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DistributorEmployees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorEmployeeCountArgs} args - Arguments to filter DistributorEmployees to count.
     * @example
     * // Count the number of DistributorEmployees
     * const count = await prisma.distributorEmployee.count({
     *   where: {
     *     // ... the filter for the DistributorEmployees we want to count
     *   }
     * })
    **/
    count<T extends DistributorEmployeeCountArgs>(
      args?: Subset<T, DistributorEmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistributorEmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DistributorEmployee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorEmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DistributorEmployeeAggregateArgs>(args: Subset<T, DistributorEmployeeAggregateArgs>): Prisma.PrismaPromise<GetDistributorEmployeeAggregateType<T>>

    /**
     * Group by DistributorEmployee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorEmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DistributorEmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DistributorEmployeeGroupByArgs['orderBy'] }
        : { orderBy?: DistributorEmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DistributorEmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistributorEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DistributorEmployee model
   */
  readonly fields: DistributorEmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DistributorEmployee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DistributorEmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    questionnaire<T extends QuestionnaireDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionnaireDefaultArgs<ExtArgs>>): Prisma__QuestionnaireClient<$Result.GetResult<Prisma.$QuestionnairePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DistributorEmployee model
   */ 
  interface DistributorEmployeeFieldRefs {
    readonly id: FieldRef<"DistributorEmployee", 'Int'>
    readonly name: FieldRef<"DistributorEmployee", 'String'>
    readonly surname: FieldRef<"DistributorEmployee", 'String'>
    readonly lastname: FieldRef<"DistributorEmployee", 'String'>
    readonly phone: FieldRef<"DistributorEmployee", 'String'>
    readonly email: FieldRef<"DistributorEmployee", 'String'>
    readonly questionnaireId: FieldRef<"DistributorEmployee", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * DistributorEmployee findUnique
   */
  export type DistributorEmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorEmployee
     */
    select?: DistributorEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistributorEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which DistributorEmployee to fetch.
     */
    where: DistributorEmployeeWhereUniqueInput
  }


  /**
   * DistributorEmployee findUniqueOrThrow
   */
  export type DistributorEmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorEmployee
     */
    select?: DistributorEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistributorEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which DistributorEmployee to fetch.
     */
    where: DistributorEmployeeWhereUniqueInput
  }


  /**
   * DistributorEmployee findFirst
   */
  export type DistributorEmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorEmployee
     */
    select?: DistributorEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistributorEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which DistributorEmployee to fetch.
     */
    where?: DistributorEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistributorEmployees to fetch.
     */
    orderBy?: DistributorEmployeeOrderByWithRelationInput | DistributorEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DistributorEmployees.
     */
    cursor?: DistributorEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistributorEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistributorEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DistributorEmployees.
     */
    distinct?: DistributorEmployeeScalarFieldEnum | DistributorEmployeeScalarFieldEnum[]
  }


  /**
   * DistributorEmployee findFirstOrThrow
   */
  export type DistributorEmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorEmployee
     */
    select?: DistributorEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistributorEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which DistributorEmployee to fetch.
     */
    where?: DistributorEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistributorEmployees to fetch.
     */
    orderBy?: DistributorEmployeeOrderByWithRelationInput | DistributorEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DistributorEmployees.
     */
    cursor?: DistributorEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistributorEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistributorEmployees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DistributorEmployees.
     */
    distinct?: DistributorEmployeeScalarFieldEnum | DistributorEmployeeScalarFieldEnum[]
  }


  /**
   * DistributorEmployee findMany
   */
  export type DistributorEmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorEmployee
     */
    select?: DistributorEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistributorEmployeeInclude<ExtArgs> | null
    /**
     * Filter, which DistributorEmployees to fetch.
     */
    where?: DistributorEmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DistributorEmployees to fetch.
     */
    orderBy?: DistributorEmployeeOrderByWithRelationInput | DistributorEmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DistributorEmployees.
     */
    cursor?: DistributorEmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DistributorEmployees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DistributorEmployees.
     */
    skip?: number
    distinct?: DistributorEmployeeScalarFieldEnum | DistributorEmployeeScalarFieldEnum[]
  }


  /**
   * DistributorEmployee create
   */
  export type DistributorEmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorEmployee
     */
    select?: DistributorEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistributorEmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a DistributorEmployee.
     */
    data: XOR<DistributorEmployeeCreateInput, DistributorEmployeeUncheckedCreateInput>
  }


  /**
   * DistributorEmployee createMany
   */
  export type DistributorEmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DistributorEmployees.
     */
    data: DistributorEmployeeCreateManyInput | DistributorEmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DistributorEmployee update
   */
  export type DistributorEmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorEmployee
     */
    select?: DistributorEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistributorEmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a DistributorEmployee.
     */
    data: XOR<DistributorEmployeeUpdateInput, DistributorEmployeeUncheckedUpdateInput>
    /**
     * Choose, which DistributorEmployee to update.
     */
    where: DistributorEmployeeWhereUniqueInput
  }


  /**
   * DistributorEmployee updateMany
   */
  export type DistributorEmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DistributorEmployees.
     */
    data: XOR<DistributorEmployeeUpdateManyMutationInput, DistributorEmployeeUncheckedUpdateManyInput>
    /**
     * Filter which DistributorEmployees to update
     */
    where?: DistributorEmployeeWhereInput
  }


  /**
   * DistributorEmployee upsert
   */
  export type DistributorEmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorEmployee
     */
    select?: DistributorEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistributorEmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the DistributorEmployee to update in case it exists.
     */
    where: DistributorEmployeeWhereUniqueInput
    /**
     * In case the DistributorEmployee found by the `where` argument doesn't exist, create a new DistributorEmployee with this data.
     */
    create: XOR<DistributorEmployeeCreateInput, DistributorEmployeeUncheckedCreateInput>
    /**
     * In case the DistributorEmployee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DistributorEmployeeUpdateInput, DistributorEmployeeUncheckedUpdateInput>
  }


  /**
   * DistributorEmployee delete
   */
  export type DistributorEmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorEmployee
     */
    select?: DistributorEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistributorEmployeeInclude<ExtArgs> | null
    /**
     * Filter which DistributorEmployee to delete.
     */
    where: DistributorEmployeeWhereUniqueInput
  }


  /**
   * DistributorEmployee deleteMany
   */
  export type DistributorEmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DistributorEmployees to delete
     */
    where?: DistributorEmployeeWhereInput
  }


  /**
   * DistributorEmployee without action
   */
  export type DistributorEmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorEmployee
     */
    select?: DistributorEmployeeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DistributorEmployeeInclude<ExtArgs> | null
  }



  /**
   * Model DataSto
   */

  export type AggregateDataSto = {
    _count: DataStoCountAggregateOutputType | null
    _avg: DataStoAvgAggregateOutputType | null
    _sum: DataStoSumAggregateOutputType | null
    _min: DataStoMinAggregateOutputType | null
    _max: DataStoMaxAggregateOutputType | null
  }

  export type DataStoAvgAggregateOutputType = {
    id: number | null
    questionnaireId: number | null
  }

  export type DataStoSumAggregateOutputType = {
    id: number | null
    questionnaireId: number | null
  }

  export type DataStoMinAggregateOutputType = {
    id: number | null
    name: string | null
    city: string | null
    area: string | null
    address: string | null
    code_client_avtoevro: string | null
    code_client_avtorus: string | null
    code_client_rossko: string | null
    questionnaireId: number | null
  }

  export type DataStoMaxAggregateOutputType = {
    id: number | null
    name: string | null
    city: string | null
    area: string | null
    address: string | null
    code_client_avtoevro: string | null
    code_client_avtorus: string | null
    code_client_rossko: string | null
    questionnaireId: number | null
  }

  export type DataStoCountAggregateOutputType = {
    id: number
    name: number
    city: number
    area: number
    address: number
    code_client_avtoevro: number
    code_client_avtorus: number
    code_client_rossko: number
    questionnaireId: number
    _all: number
  }


  export type DataStoAvgAggregateInputType = {
    id?: true
    questionnaireId?: true
  }

  export type DataStoSumAggregateInputType = {
    id?: true
    questionnaireId?: true
  }

  export type DataStoMinAggregateInputType = {
    id?: true
    name?: true
    city?: true
    area?: true
    address?: true
    code_client_avtoevro?: true
    code_client_avtorus?: true
    code_client_rossko?: true
    questionnaireId?: true
  }

  export type DataStoMaxAggregateInputType = {
    id?: true
    name?: true
    city?: true
    area?: true
    address?: true
    code_client_avtoevro?: true
    code_client_avtorus?: true
    code_client_rossko?: true
    questionnaireId?: true
  }

  export type DataStoCountAggregateInputType = {
    id?: true
    name?: true
    city?: true
    area?: true
    address?: true
    code_client_avtoevro?: true
    code_client_avtorus?: true
    code_client_rossko?: true
    questionnaireId?: true
    _all?: true
  }

  export type DataStoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataSto to aggregate.
     */
    where?: DataStoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataStos to fetch.
     */
    orderBy?: DataStoOrderByWithRelationInput | DataStoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataStoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataStos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataStos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataStos
    **/
    _count?: true | DataStoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataStoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataStoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataStoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataStoMaxAggregateInputType
  }

  export type GetDataStoAggregateType<T extends DataStoAggregateArgs> = {
        [P in keyof T & keyof AggregateDataSto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataSto[P]>
      : GetScalarType<T[P], AggregateDataSto[P]>
  }




  export type DataStoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataStoWhereInput
    orderBy?: DataStoOrderByWithAggregationInput | DataStoOrderByWithAggregationInput[]
    by: DataStoScalarFieldEnum[] | DataStoScalarFieldEnum
    having?: DataStoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataStoCountAggregateInputType | true
    _avg?: DataStoAvgAggregateInputType
    _sum?: DataStoSumAggregateInputType
    _min?: DataStoMinAggregateInputType
    _max?: DataStoMaxAggregateInputType
  }

  export type DataStoGroupByOutputType = {
    id: number
    name: string
    city: string
    area: string
    address: string
    code_client_avtoevro: string
    code_client_avtorus: string
    code_client_rossko: string
    questionnaireId: number
    _count: DataStoCountAggregateOutputType | null
    _avg: DataStoAvgAggregateOutputType | null
    _sum: DataStoSumAggregateOutputType | null
    _min: DataStoMinAggregateOutputType | null
    _max: DataStoMaxAggregateOutputType | null
  }

  type GetDataStoGroupByPayload<T extends DataStoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataStoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataStoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataStoGroupByOutputType[P]>
            : GetScalarType<T[P], DataStoGroupByOutputType[P]>
        }
      >
    >


  export type DataStoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    area?: boolean
    address?: boolean
    code_client_avtoevro?: boolean
    code_client_avtorus?: boolean
    code_client_rossko?: boolean
    questionnaireId?: boolean
    questionnaire?: boolean | QuestionnaireDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataSto"]>

  export type DataStoSelectScalar = {
    id?: boolean
    name?: boolean
    city?: boolean
    area?: boolean
    address?: boolean
    code_client_avtoevro?: boolean
    code_client_avtorus?: boolean
    code_client_rossko?: boolean
    questionnaireId?: boolean
  }

  export type DataStoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questionnaire?: boolean | QuestionnaireDefaultArgs<ExtArgs>
  }


  export type $DataStoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataSto"
    objects: {
      questionnaire: Prisma.$QuestionnairePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      city: string
      area: string
      address: string
      code_client_avtoevro: string
      code_client_avtorus: string
      code_client_rossko: string
      questionnaireId: number
    }, ExtArgs["result"]["dataSto"]>
    composites: {}
  }


  type DataStoGetPayload<S extends boolean | null | undefined | DataStoDefaultArgs> = $Result.GetResult<Prisma.$DataStoPayload, S>

  type DataStoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DataStoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DataStoCountAggregateInputType | true
    }

  export interface DataStoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataSto'], meta: { name: 'DataSto' } }
    /**
     * Find zero or one DataSto that matches the filter.
     * @param {DataStoFindUniqueArgs} args - Arguments to find a DataSto
     * @example
     * // Get one DataSto
     * const dataSto = await prisma.dataSto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DataStoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DataStoFindUniqueArgs<ExtArgs>>
    ): Prisma__DataStoClient<$Result.GetResult<Prisma.$DataStoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DataSto that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DataStoFindUniqueOrThrowArgs} args - Arguments to find a DataSto
     * @example
     * // Get one DataSto
     * const dataSto = await prisma.dataSto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DataStoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DataStoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DataStoClient<$Result.GetResult<Prisma.$DataStoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DataSto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataStoFindFirstArgs} args - Arguments to find a DataSto
     * @example
     * // Get one DataSto
     * const dataSto = await prisma.dataSto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DataStoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DataStoFindFirstArgs<ExtArgs>>
    ): Prisma__DataStoClient<$Result.GetResult<Prisma.$DataStoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DataSto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataStoFindFirstOrThrowArgs} args - Arguments to find a DataSto
     * @example
     * // Get one DataSto
     * const dataSto = await prisma.dataSto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DataStoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DataStoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DataStoClient<$Result.GetResult<Prisma.$DataStoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DataStos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataStoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataStos
     * const dataStos = await prisma.dataSto.findMany()
     * 
     * // Get first 10 DataStos
     * const dataStos = await prisma.dataSto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataStoWithIdOnly = await prisma.dataSto.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DataStoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DataStoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataStoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DataSto.
     * @param {DataStoCreateArgs} args - Arguments to create a DataSto.
     * @example
     * // Create one DataSto
     * const DataSto = await prisma.dataSto.create({
     *   data: {
     *     // ... data to create a DataSto
     *   }
     * })
     * 
    **/
    create<T extends DataStoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DataStoCreateArgs<ExtArgs>>
    ): Prisma__DataStoClient<$Result.GetResult<Prisma.$DataStoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DataStos.
     *     @param {DataStoCreateManyArgs} args - Arguments to create many DataStos.
     *     @example
     *     // Create many DataStos
     *     const dataSto = await prisma.dataSto.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DataStoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DataStoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DataSto.
     * @param {DataStoDeleteArgs} args - Arguments to delete one DataSto.
     * @example
     * // Delete one DataSto
     * const DataSto = await prisma.dataSto.delete({
     *   where: {
     *     // ... filter to delete one DataSto
     *   }
     * })
     * 
    **/
    delete<T extends DataStoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DataStoDeleteArgs<ExtArgs>>
    ): Prisma__DataStoClient<$Result.GetResult<Prisma.$DataStoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DataSto.
     * @param {DataStoUpdateArgs} args - Arguments to update one DataSto.
     * @example
     * // Update one DataSto
     * const dataSto = await prisma.dataSto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DataStoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DataStoUpdateArgs<ExtArgs>>
    ): Prisma__DataStoClient<$Result.GetResult<Prisma.$DataStoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DataStos.
     * @param {DataStoDeleteManyArgs} args - Arguments to filter DataStos to delete.
     * @example
     * // Delete a few DataStos
     * const { count } = await prisma.dataSto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DataStoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DataStoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataStos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataStoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataStos
     * const dataSto = await prisma.dataSto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DataStoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DataStoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DataSto.
     * @param {DataStoUpsertArgs} args - Arguments to update or create a DataSto.
     * @example
     * // Update or create a DataSto
     * const dataSto = await prisma.dataSto.upsert({
     *   create: {
     *     // ... data to create a DataSto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataSto we want to update
     *   }
     * })
    **/
    upsert<T extends DataStoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DataStoUpsertArgs<ExtArgs>>
    ): Prisma__DataStoClient<$Result.GetResult<Prisma.$DataStoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DataStos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataStoCountArgs} args - Arguments to filter DataStos to count.
     * @example
     * // Count the number of DataStos
     * const count = await prisma.dataSto.count({
     *   where: {
     *     // ... the filter for the DataStos we want to count
     *   }
     * })
    **/
    count<T extends DataStoCountArgs>(
      args?: Subset<T, DataStoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataStoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataSto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataStoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DataStoAggregateArgs>(args: Subset<T, DataStoAggregateArgs>): Prisma.PrismaPromise<GetDataStoAggregateType<T>>

    /**
     * Group by DataSto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataStoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DataStoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataStoGroupByArgs['orderBy'] }
        : { orderBy?: DataStoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DataStoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataStoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataSto model
   */
  readonly fields: DataStoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataSto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataStoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    questionnaire<T extends QuestionnaireDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionnaireDefaultArgs<ExtArgs>>): Prisma__QuestionnaireClient<$Result.GetResult<Prisma.$QuestionnairePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DataSto model
   */ 
  interface DataStoFieldRefs {
    readonly id: FieldRef<"DataSto", 'Int'>
    readonly name: FieldRef<"DataSto", 'String'>
    readonly city: FieldRef<"DataSto", 'String'>
    readonly area: FieldRef<"DataSto", 'String'>
    readonly address: FieldRef<"DataSto", 'String'>
    readonly code_client_avtoevro: FieldRef<"DataSto", 'String'>
    readonly code_client_avtorus: FieldRef<"DataSto", 'String'>
    readonly code_client_rossko: FieldRef<"DataSto", 'String'>
    readonly questionnaireId: FieldRef<"DataSto", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * DataSto findUnique
   */
  export type DataStoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSto
     */
    select?: DataStoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataStoInclude<ExtArgs> | null
    /**
     * Filter, which DataSto to fetch.
     */
    where: DataStoWhereUniqueInput
  }


  /**
   * DataSto findUniqueOrThrow
   */
  export type DataStoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSto
     */
    select?: DataStoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataStoInclude<ExtArgs> | null
    /**
     * Filter, which DataSto to fetch.
     */
    where: DataStoWhereUniqueInput
  }


  /**
   * DataSto findFirst
   */
  export type DataStoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSto
     */
    select?: DataStoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataStoInclude<ExtArgs> | null
    /**
     * Filter, which DataSto to fetch.
     */
    where?: DataStoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataStos to fetch.
     */
    orderBy?: DataStoOrderByWithRelationInput | DataStoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataStos.
     */
    cursor?: DataStoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataStos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataStos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataStos.
     */
    distinct?: DataStoScalarFieldEnum | DataStoScalarFieldEnum[]
  }


  /**
   * DataSto findFirstOrThrow
   */
  export type DataStoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSto
     */
    select?: DataStoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataStoInclude<ExtArgs> | null
    /**
     * Filter, which DataSto to fetch.
     */
    where?: DataStoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataStos to fetch.
     */
    orderBy?: DataStoOrderByWithRelationInput | DataStoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataStos.
     */
    cursor?: DataStoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataStos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataStos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataStos.
     */
    distinct?: DataStoScalarFieldEnum | DataStoScalarFieldEnum[]
  }


  /**
   * DataSto findMany
   */
  export type DataStoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSto
     */
    select?: DataStoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataStoInclude<ExtArgs> | null
    /**
     * Filter, which DataStos to fetch.
     */
    where?: DataStoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataStos to fetch.
     */
    orderBy?: DataStoOrderByWithRelationInput | DataStoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataStos.
     */
    cursor?: DataStoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataStos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataStos.
     */
    skip?: number
    distinct?: DataStoScalarFieldEnum | DataStoScalarFieldEnum[]
  }


  /**
   * DataSto create
   */
  export type DataStoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSto
     */
    select?: DataStoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataStoInclude<ExtArgs> | null
    /**
     * The data needed to create a DataSto.
     */
    data: XOR<DataStoCreateInput, DataStoUncheckedCreateInput>
  }


  /**
   * DataSto createMany
   */
  export type DataStoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataStos.
     */
    data: DataStoCreateManyInput | DataStoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DataSto update
   */
  export type DataStoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSto
     */
    select?: DataStoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataStoInclude<ExtArgs> | null
    /**
     * The data needed to update a DataSto.
     */
    data: XOR<DataStoUpdateInput, DataStoUncheckedUpdateInput>
    /**
     * Choose, which DataSto to update.
     */
    where: DataStoWhereUniqueInput
  }


  /**
   * DataSto updateMany
   */
  export type DataStoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataStos.
     */
    data: XOR<DataStoUpdateManyMutationInput, DataStoUncheckedUpdateManyInput>
    /**
     * Filter which DataStos to update
     */
    where?: DataStoWhereInput
  }


  /**
   * DataSto upsert
   */
  export type DataStoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSto
     */
    select?: DataStoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataStoInclude<ExtArgs> | null
    /**
     * The filter to search for the DataSto to update in case it exists.
     */
    where: DataStoWhereUniqueInput
    /**
     * In case the DataSto found by the `where` argument doesn't exist, create a new DataSto with this data.
     */
    create: XOR<DataStoCreateInput, DataStoUncheckedCreateInput>
    /**
     * In case the DataSto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataStoUpdateInput, DataStoUncheckedUpdateInput>
  }


  /**
   * DataSto delete
   */
  export type DataStoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSto
     */
    select?: DataStoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataStoInclude<ExtArgs> | null
    /**
     * Filter which DataSto to delete.
     */
    where: DataStoWhereUniqueInput
  }


  /**
   * DataSto deleteMany
   */
  export type DataStoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataStos to delete
     */
    where?: DataStoWhereInput
  }


  /**
   * DataSto without action
   */
  export type DataStoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSto
     */
    select?: DataStoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataStoInclude<ExtArgs> | null
  }



  /**
   * Model IInn
   */

  export type AggregateIInn = {
    _count: IInnCountAggregateOutputType | null
    _avg: IInnAvgAggregateOutputType | null
    _sum: IInnSumAggregateOutputType | null
    _min: IInnMinAggregateOutputType | null
    _max: IInnMaxAggregateOutputType | null
  }

  export type IInnAvgAggregateOutputType = {
    id: number | null
    questionnaireId: number | null
  }

  export type IInnSumAggregateOutputType = {
    id: number | null
    questionnaireId: number | null
  }

  export type IInnMinAggregateOutputType = {
    id: number | null
    inn: string | null
    questionnaireId: number | null
  }

  export type IInnMaxAggregateOutputType = {
    id: number | null
    inn: string | null
    questionnaireId: number | null
  }

  export type IInnCountAggregateOutputType = {
    id: number
    inn: number
    questionnaireId: number
    _all: number
  }


  export type IInnAvgAggregateInputType = {
    id?: true
    questionnaireId?: true
  }

  export type IInnSumAggregateInputType = {
    id?: true
    questionnaireId?: true
  }

  export type IInnMinAggregateInputType = {
    id?: true
    inn?: true
    questionnaireId?: true
  }

  export type IInnMaxAggregateInputType = {
    id?: true
    inn?: true
    questionnaireId?: true
  }

  export type IInnCountAggregateInputType = {
    id?: true
    inn?: true
    questionnaireId?: true
    _all?: true
  }

  export type IInnAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IInn to aggregate.
     */
    where?: IInnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IInns to fetch.
     */
    orderBy?: IInnOrderByWithRelationInput | IInnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IInnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IInns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IInns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IInns
    **/
    _count?: true | IInnCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IInnAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IInnSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IInnMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IInnMaxAggregateInputType
  }

  export type GetIInnAggregateType<T extends IInnAggregateArgs> = {
        [P in keyof T & keyof AggregateIInn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIInn[P]>
      : GetScalarType<T[P], AggregateIInn[P]>
  }




  export type IInnGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IInnWhereInput
    orderBy?: IInnOrderByWithAggregationInput | IInnOrderByWithAggregationInput[]
    by: IInnScalarFieldEnum[] | IInnScalarFieldEnum
    having?: IInnScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IInnCountAggregateInputType | true
    _avg?: IInnAvgAggregateInputType
    _sum?: IInnSumAggregateInputType
    _min?: IInnMinAggregateInputType
    _max?: IInnMaxAggregateInputType
  }

  export type IInnGroupByOutputType = {
    id: number
    inn: string
    questionnaireId: number
    _count: IInnCountAggregateOutputType | null
    _avg: IInnAvgAggregateOutputType | null
    _sum: IInnSumAggregateOutputType | null
    _min: IInnMinAggregateOutputType | null
    _max: IInnMaxAggregateOutputType | null
  }

  type GetIInnGroupByPayload<T extends IInnGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IInnGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IInnGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IInnGroupByOutputType[P]>
            : GetScalarType<T[P], IInnGroupByOutputType[P]>
        }
      >
    >


  export type IInnSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inn?: boolean
    questionnaireId?: boolean
    questionnaire?: boolean | QuestionnaireDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["iInn"]>

  export type IInnSelectScalar = {
    id?: boolean
    inn?: boolean
    questionnaireId?: boolean
  }

  export type IInnInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questionnaire?: boolean | QuestionnaireDefaultArgs<ExtArgs>
  }


  export type $IInnPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IInn"
    objects: {
      questionnaire: Prisma.$QuestionnairePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      inn: string
      questionnaireId: number
    }, ExtArgs["result"]["iInn"]>
    composites: {}
  }


  type IInnGetPayload<S extends boolean | null | undefined | IInnDefaultArgs> = $Result.GetResult<Prisma.$IInnPayload, S>

  type IInnCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IInnFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IInnCountAggregateInputType | true
    }

  export interface IInnDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IInn'], meta: { name: 'IInn' } }
    /**
     * Find zero or one IInn that matches the filter.
     * @param {IInnFindUniqueArgs} args - Arguments to find a IInn
     * @example
     * // Get one IInn
     * const iInn = await prisma.iInn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends IInnFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, IInnFindUniqueArgs<ExtArgs>>
    ): Prisma__IInnClient<$Result.GetResult<Prisma.$IInnPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one IInn that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {IInnFindUniqueOrThrowArgs} args - Arguments to find a IInn
     * @example
     * // Get one IInn
     * const iInn = await prisma.iInn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends IInnFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IInnFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__IInnClient<$Result.GetResult<Prisma.$IInnPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first IInn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IInnFindFirstArgs} args - Arguments to find a IInn
     * @example
     * // Get one IInn
     * const iInn = await prisma.iInn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends IInnFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, IInnFindFirstArgs<ExtArgs>>
    ): Prisma__IInnClient<$Result.GetResult<Prisma.$IInnPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first IInn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IInnFindFirstOrThrowArgs} args - Arguments to find a IInn
     * @example
     * // Get one IInn
     * const iInn = await prisma.iInn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends IInnFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IInnFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__IInnClient<$Result.GetResult<Prisma.$IInnPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more IInns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IInnFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IInns
     * const iInns = await prisma.iInn.findMany()
     * 
     * // Get first 10 IInns
     * const iInns = await prisma.iInn.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const iInnWithIdOnly = await prisma.iInn.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends IInnFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IInnFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IInnPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a IInn.
     * @param {IInnCreateArgs} args - Arguments to create a IInn.
     * @example
     * // Create one IInn
     * const IInn = await prisma.iInn.create({
     *   data: {
     *     // ... data to create a IInn
     *   }
     * })
     * 
    **/
    create<T extends IInnCreateArgs<ExtArgs>>(
      args: SelectSubset<T, IInnCreateArgs<ExtArgs>>
    ): Prisma__IInnClient<$Result.GetResult<Prisma.$IInnPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many IInns.
     *     @param {IInnCreateManyArgs} args - Arguments to create many IInns.
     *     @example
     *     // Create many IInns
     *     const iInn = await prisma.iInn.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends IInnCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IInnCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IInn.
     * @param {IInnDeleteArgs} args - Arguments to delete one IInn.
     * @example
     * // Delete one IInn
     * const IInn = await prisma.iInn.delete({
     *   where: {
     *     // ... filter to delete one IInn
     *   }
     * })
     * 
    **/
    delete<T extends IInnDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, IInnDeleteArgs<ExtArgs>>
    ): Prisma__IInnClient<$Result.GetResult<Prisma.$IInnPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one IInn.
     * @param {IInnUpdateArgs} args - Arguments to update one IInn.
     * @example
     * // Update one IInn
     * const iInn = await prisma.iInn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends IInnUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, IInnUpdateArgs<ExtArgs>>
    ): Prisma__IInnClient<$Result.GetResult<Prisma.$IInnPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more IInns.
     * @param {IInnDeleteManyArgs} args - Arguments to filter IInns to delete.
     * @example
     * // Delete a few IInns
     * const { count } = await prisma.iInn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends IInnDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IInnDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IInns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IInnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IInns
     * const iInn = await prisma.iInn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends IInnUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, IInnUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IInn.
     * @param {IInnUpsertArgs} args - Arguments to update or create a IInn.
     * @example
     * // Update or create a IInn
     * const iInn = await prisma.iInn.upsert({
     *   create: {
     *     // ... data to create a IInn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IInn we want to update
     *   }
     * })
    **/
    upsert<T extends IInnUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, IInnUpsertArgs<ExtArgs>>
    ): Prisma__IInnClient<$Result.GetResult<Prisma.$IInnPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of IInns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IInnCountArgs} args - Arguments to filter IInns to count.
     * @example
     * // Count the number of IInns
     * const count = await prisma.iInn.count({
     *   where: {
     *     // ... the filter for the IInns we want to count
     *   }
     * })
    **/
    count<T extends IInnCountArgs>(
      args?: Subset<T, IInnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IInnCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IInn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IInnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IInnAggregateArgs>(args: Subset<T, IInnAggregateArgs>): Prisma.PrismaPromise<GetIInnAggregateType<T>>

    /**
     * Group by IInn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IInnGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IInnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IInnGroupByArgs['orderBy'] }
        : { orderBy?: IInnGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IInnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIInnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IInn model
   */
  readonly fields: IInnFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IInn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IInnClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    questionnaire<T extends QuestionnaireDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionnaireDefaultArgs<ExtArgs>>): Prisma__QuestionnaireClient<$Result.GetResult<Prisma.$QuestionnairePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the IInn model
   */ 
  interface IInnFieldRefs {
    readonly id: FieldRef<"IInn", 'Int'>
    readonly inn: FieldRef<"IInn", 'String'>
    readonly questionnaireId: FieldRef<"IInn", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * IInn findUnique
   */
  export type IInnFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IInn
     */
    select?: IInnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IInnInclude<ExtArgs> | null
    /**
     * Filter, which IInn to fetch.
     */
    where: IInnWhereUniqueInput
  }


  /**
   * IInn findUniqueOrThrow
   */
  export type IInnFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IInn
     */
    select?: IInnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IInnInclude<ExtArgs> | null
    /**
     * Filter, which IInn to fetch.
     */
    where: IInnWhereUniqueInput
  }


  /**
   * IInn findFirst
   */
  export type IInnFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IInn
     */
    select?: IInnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IInnInclude<ExtArgs> | null
    /**
     * Filter, which IInn to fetch.
     */
    where?: IInnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IInns to fetch.
     */
    orderBy?: IInnOrderByWithRelationInput | IInnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IInns.
     */
    cursor?: IInnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IInns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IInns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IInns.
     */
    distinct?: IInnScalarFieldEnum | IInnScalarFieldEnum[]
  }


  /**
   * IInn findFirstOrThrow
   */
  export type IInnFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IInn
     */
    select?: IInnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IInnInclude<ExtArgs> | null
    /**
     * Filter, which IInn to fetch.
     */
    where?: IInnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IInns to fetch.
     */
    orderBy?: IInnOrderByWithRelationInput | IInnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IInns.
     */
    cursor?: IInnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IInns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IInns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IInns.
     */
    distinct?: IInnScalarFieldEnum | IInnScalarFieldEnum[]
  }


  /**
   * IInn findMany
   */
  export type IInnFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IInn
     */
    select?: IInnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IInnInclude<ExtArgs> | null
    /**
     * Filter, which IInns to fetch.
     */
    where?: IInnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IInns to fetch.
     */
    orderBy?: IInnOrderByWithRelationInput | IInnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IInns.
     */
    cursor?: IInnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IInns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IInns.
     */
    skip?: number
    distinct?: IInnScalarFieldEnum | IInnScalarFieldEnum[]
  }


  /**
   * IInn create
   */
  export type IInnCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IInn
     */
    select?: IInnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IInnInclude<ExtArgs> | null
    /**
     * The data needed to create a IInn.
     */
    data: XOR<IInnCreateInput, IInnUncheckedCreateInput>
  }


  /**
   * IInn createMany
   */
  export type IInnCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IInns.
     */
    data: IInnCreateManyInput | IInnCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * IInn update
   */
  export type IInnUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IInn
     */
    select?: IInnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IInnInclude<ExtArgs> | null
    /**
     * The data needed to update a IInn.
     */
    data: XOR<IInnUpdateInput, IInnUncheckedUpdateInput>
    /**
     * Choose, which IInn to update.
     */
    where: IInnWhereUniqueInput
  }


  /**
   * IInn updateMany
   */
  export type IInnUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IInns.
     */
    data: XOR<IInnUpdateManyMutationInput, IInnUncheckedUpdateManyInput>
    /**
     * Filter which IInns to update
     */
    where?: IInnWhereInput
  }


  /**
   * IInn upsert
   */
  export type IInnUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IInn
     */
    select?: IInnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IInnInclude<ExtArgs> | null
    /**
     * The filter to search for the IInn to update in case it exists.
     */
    where: IInnWhereUniqueInput
    /**
     * In case the IInn found by the `where` argument doesn't exist, create a new IInn with this data.
     */
    create: XOR<IInnCreateInput, IInnUncheckedCreateInput>
    /**
     * In case the IInn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IInnUpdateInput, IInnUncheckedUpdateInput>
  }


  /**
   * IInn delete
   */
  export type IInnDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IInn
     */
    select?: IInnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IInnInclude<ExtArgs> | null
    /**
     * Filter which IInn to delete.
     */
    where: IInnWhereUniqueInput
  }


  /**
   * IInn deleteMany
   */
  export type IInnDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IInns to delete
     */
    where?: IInnWhereInput
  }


  /**
   * IInn without action
   */
  export type IInnDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IInn
     */
    select?: IInnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IInnInclude<ExtArgs> | null
  }



  /**
   * Model Manager
   */

  export type AggregateManager = {
    _count: ManagerCountAggregateOutputType | null
    _avg: ManagerAvgAggregateOutputType | null
    _sum: ManagerSumAggregateOutputType | null
    _min: ManagerMinAggregateOutputType | null
    _max: ManagerMaxAggregateOutputType | null
  }

  export type ManagerAvgAggregateOutputType = {
    id: number | null
    questionnaireId: number | null
  }

  export type ManagerSumAggregateOutputType = {
    id: number | null
    questionnaireId: number | null
  }

  export type ManagerMinAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    lastname: string | null
    phone: string | null
    email: string | null
    questionnaireId: number | null
  }

  export type ManagerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    lastname: string | null
    phone: string | null
    email: string | null
    questionnaireId: number | null
  }

  export type ManagerCountAggregateOutputType = {
    id: number
    name: number
    surname: number
    lastname: number
    phone: number
    email: number
    questionnaireId: number
    _all: number
  }


  export type ManagerAvgAggregateInputType = {
    id?: true
    questionnaireId?: true
  }

  export type ManagerSumAggregateInputType = {
    id?: true
    questionnaireId?: true
  }

  export type ManagerMinAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    lastname?: true
    phone?: true
    email?: true
    questionnaireId?: true
  }

  export type ManagerMaxAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    lastname?: true
    phone?: true
    email?: true
    questionnaireId?: true
  }

  export type ManagerCountAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    lastname?: true
    phone?: true
    email?: true
    questionnaireId?: true
    _all?: true
  }

  export type ManagerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Manager to aggregate.
     */
    where?: ManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managers to fetch.
     */
    orderBy?: ManagerOrderByWithRelationInput | ManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Managers
    **/
    _count?: true | ManagerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ManagerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ManagerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManagerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManagerMaxAggregateInputType
  }

  export type GetManagerAggregateType<T extends ManagerAggregateArgs> = {
        [P in keyof T & keyof AggregateManager]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManager[P]>
      : GetScalarType<T[P], AggregateManager[P]>
  }




  export type ManagerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManagerWhereInput
    orderBy?: ManagerOrderByWithAggregationInput | ManagerOrderByWithAggregationInput[]
    by: ManagerScalarFieldEnum[] | ManagerScalarFieldEnum
    having?: ManagerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManagerCountAggregateInputType | true
    _avg?: ManagerAvgAggregateInputType
    _sum?: ManagerSumAggregateInputType
    _min?: ManagerMinAggregateInputType
    _max?: ManagerMaxAggregateInputType
  }

  export type ManagerGroupByOutputType = {
    id: number
    name: string
    surname: string
    lastname: string
    phone: string
    email: string
    questionnaireId: number
    _count: ManagerCountAggregateOutputType | null
    _avg: ManagerAvgAggregateOutputType | null
    _sum: ManagerSumAggregateOutputType | null
    _min: ManagerMinAggregateOutputType | null
    _max: ManagerMaxAggregateOutputType | null
  }

  type GetManagerGroupByPayload<T extends ManagerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManagerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManagerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManagerGroupByOutputType[P]>
            : GetScalarType<T[P], ManagerGroupByOutputType[P]>
        }
      >
    >


  export type ManagerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    lastname?: boolean
    phone?: boolean
    email?: boolean
    questionnaireId?: boolean
    questionnaire?: boolean | QuestionnaireDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["manager"]>

  export type ManagerSelectScalar = {
    id?: boolean
    name?: boolean
    surname?: boolean
    lastname?: boolean
    phone?: boolean
    email?: boolean
    questionnaireId?: boolean
  }

  export type ManagerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questionnaire?: boolean | QuestionnaireDefaultArgs<ExtArgs>
  }


  export type $ManagerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Manager"
    objects: {
      questionnaire: Prisma.$QuestionnairePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      surname: string
      lastname: string
      phone: string
      email: string
      questionnaireId: number
    }, ExtArgs["result"]["manager"]>
    composites: {}
  }


  type ManagerGetPayload<S extends boolean | null | undefined | ManagerDefaultArgs> = $Result.GetResult<Prisma.$ManagerPayload, S>

  type ManagerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ManagerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ManagerCountAggregateInputType | true
    }

  export interface ManagerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Manager'], meta: { name: 'Manager' } }
    /**
     * Find zero or one Manager that matches the filter.
     * @param {ManagerFindUniqueArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ManagerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ManagerFindUniqueArgs<ExtArgs>>
    ): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Manager that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ManagerFindUniqueOrThrowArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ManagerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ManagerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Manager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerFindFirstArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ManagerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ManagerFindFirstArgs<ExtArgs>>
    ): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Manager that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerFindFirstOrThrowArgs} args - Arguments to find a Manager
     * @example
     * // Get one Manager
     * const manager = await prisma.manager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ManagerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ManagerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Managers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Managers
     * const managers = await prisma.manager.findMany()
     * 
     * // Get first 10 Managers
     * const managers = await prisma.manager.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const managerWithIdOnly = await prisma.manager.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ManagerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ManagerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Manager.
     * @param {ManagerCreateArgs} args - Arguments to create a Manager.
     * @example
     * // Create one Manager
     * const Manager = await prisma.manager.create({
     *   data: {
     *     // ... data to create a Manager
     *   }
     * })
     * 
    **/
    create<T extends ManagerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ManagerCreateArgs<ExtArgs>>
    ): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Managers.
     *     @param {ManagerCreateManyArgs} args - Arguments to create many Managers.
     *     @example
     *     // Create many Managers
     *     const manager = await prisma.manager.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ManagerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ManagerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Manager.
     * @param {ManagerDeleteArgs} args - Arguments to delete one Manager.
     * @example
     * // Delete one Manager
     * const Manager = await prisma.manager.delete({
     *   where: {
     *     // ... filter to delete one Manager
     *   }
     * })
     * 
    **/
    delete<T extends ManagerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ManagerDeleteArgs<ExtArgs>>
    ): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Manager.
     * @param {ManagerUpdateArgs} args - Arguments to update one Manager.
     * @example
     * // Update one Manager
     * const manager = await prisma.manager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ManagerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ManagerUpdateArgs<ExtArgs>>
    ): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Managers.
     * @param {ManagerDeleteManyArgs} args - Arguments to filter Managers to delete.
     * @example
     * // Delete a few Managers
     * const { count } = await prisma.manager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ManagerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ManagerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Managers
     * const manager = await prisma.manager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ManagerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ManagerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Manager.
     * @param {ManagerUpsertArgs} args - Arguments to update or create a Manager.
     * @example
     * // Update or create a Manager
     * const manager = await prisma.manager.upsert({
     *   create: {
     *     // ... data to create a Manager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Manager we want to update
     *   }
     * })
    **/
    upsert<T extends ManagerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ManagerUpsertArgs<ExtArgs>>
    ): Prisma__ManagerClient<$Result.GetResult<Prisma.$ManagerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerCountArgs} args - Arguments to filter Managers to count.
     * @example
     * // Count the number of Managers
     * const count = await prisma.manager.count({
     *   where: {
     *     // ... the filter for the Managers we want to count
     *   }
     * })
    **/
    count<T extends ManagerCountArgs>(
      args?: Subset<T, ManagerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManagerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ManagerAggregateArgs>(args: Subset<T, ManagerAggregateArgs>): Prisma.PrismaPromise<GetManagerAggregateType<T>>

    /**
     * Group by Manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ManagerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManagerGroupByArgs['orderBy'] }
        : { orderBy?: ManagerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ManagerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManagerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Manager model
   */
  readonly fields: ManagerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Manager.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManagerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    questionnaire<T extends QuestionnaireDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionnaireDefaultArgs<ExtArgs>>): Prisma__QuestionnaireClient<$Result.GetResult<Prisma.$QuestionnairePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Manager model
   */ 
  interface ManagerFieldRefs {
    readonly id: FieldRef<"Manager", 'Int'>
    readonly name: FieldRef<"Manager", 'String'>
    readonly surname: FieldRef<"Manager", 'String'>
    readonly lastname: FieldRef<"Manager", 'String'>
    readonly phone: FieldRef<"Manager", 'String'>
    readonly email: FieldRef<"Manager", 'String'>
    readonly questionnaireId: FieldRef<"Manager", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Manager findUnique
   */
  export type ManagerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Manager to fetch.
     */
    where: ManagerWhereUniqueInput
  }


  /**
   * Manager findUniqueOrThrow
   */
  export type ManagerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Manager to fetch.
     */
    where: ManagerWhereUniqueInput
  }


  /**
   * Manager findFirst
   */
  export type ManagerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Manager to fetch.
     */
    where?: ManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managers to fetch.
     */
    orderBy?: ManagerOrderByWithRelationInput | ManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Managers.
     */
    cursor?: ManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Managers.
     */
    distinct?: ManagerScalarFieldEnum | ManagerScalarFieldEnum[]
  }


  /**
   * Manager findFirstOrThrow
   */
  export type ManagerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Manager to fetch.
     */
    where?: ManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managers to fetch.
     */
    orderBy?: ManagerOrderByWithRelationInput | ManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Managers.
     */
    cursor?: ManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Managers.
     */
    distinct?: ManagerScalarFieldEnum | ManagerScalarFieldEnum[]
  }


  /**
   * Manager findMany
   */
  export type ManagerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter, which Managers to fetch.
     */
    where?: ManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managers to fetch.
     */
    orderBy?: ManagerOrderByWithRelationInput | ManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Managers.
     */
    cursor?: ManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managers.
     */
    skip?: number
    distinct?: ManagerScalarFieldEnum | ManagerScalarFieldEnum[]
  }


  /**
   * Manager create
   */
  export type ManagerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * The data needed to create a Manager.
     */
    data: XOR<ManagerCreateInput, ManagerUncheckedCreateInput>
  }


  /**
   * Manager createMany
   */
  export type ManagerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Managers.
     */
    data: ManagerCreateManyInput | ManagerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Manager update
   */
  export type ManagerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * The data needed to update a Manager.
     */
    data: XOR<ManagerUpdateInput, ManagerUncheckedUpdateInput>
    /**
     * Choose, which Manager to update.
     */
    where: ManagerWhereUniqueInput
  }


  /**
   * Manager updateMany
   */
  export type ManagerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Managers.
     */
    data: XOR<ManagerUpdateManyMutationInput, ManagerUncheckedUpdateManyInput>
    /**
     * Filter which Managers to update
     */
    where?: ManagerWhereInput
  }


  /**
   * Manager upsert
   */
  export type ManagerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * The filter to search for the Manager to update in case it exists.
     */
    where: ManagerWhereUniqueInput
    /**
     * In case the Manager found by the `where` argument doesn't exist, create a new Manager with this data.
     */
    create: XOR<ManagerCreateInput, ManagerUncheckedCreateInput>
    /**
     * In case the Manager was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManagerUpdateInput, ManagerUncheckedUpdateInput>
  }


  /**
   * Manager delete
   */
  export type ManagerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagerInclude<ExtArgs> | null
    /**
     * Filter which Manager to delete.
     */
    where: ManagerWhereUniqueInput
  }


  /**
   * Manager deleteMany
   */
  export type ManagerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Managers to delete
     */
    where?: ManagerWhereInput
  }


  /**
   * Manager without action
   */
  export type ManagerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manager
     */
    select?: ManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagerInclude<ExtArgs> | null
  }



  /**
   * Model SignatoryManager
   */

  export type AggregateSignatoryManager = {
    _count: SignatoryManagerCountAggregateOutputType | null
    _avg: SignatoryManagerAvgAggregateOutputType | null
    _sum: SignatoryManagerSumAggregateOutputType | null
    _min: SignatoryManagerMinAggregateOutputType | null
    _max: SignatoryManagerMaxAggregateOutputType | null
  }

  export type SignatoryManagerAvgAggregateOutputType = {
    id: number | null
    questionnaireId: number | null
  }

  export type SignatoryManagerSumAggregateOutputType = {
    id: number | null
    questionnaireId: number | null
  }

  export type SignatoryManagerMinAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    lastname: string | null
    phone: string | null
    email: string | null
    questionnaireId: number | null
  }

  export type SignatoryManagerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    lastname: string | null
    phone: string | null
    email: string | null
    questionnaireId: number | null
  }

  export type SignatoryManagerCountAggregateOutputType = {
    id: number
    name: number
    surname: number
    lastname: number
    phone: number
    email: number
    questionnaireId: number
    _all: number
  }


  export type SignatoryManagerAvgAggregateInputType = {
    id?: true
    questionnaireId?: true
  }

  export type SignatoryManagerSumAggregateInputType = {
    id?: true
    questionnaireId?: true
  }

  export type SignatoryManagerMinAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    lastname?: true
    phone?: true
    email?: true
    questionnaireId?: true
  }

  export type SignatoryManagerMaxAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    lastname?: true
    phone?: true
    email?: true
    questionnaireId?: true
  }

  export type SignatoryManagerCountAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    lastname?: true
    phone?: true
    email?: true
    questionnaireId?: true
    _all?: true
  }

  export type SignatoryManagerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SignatoryManager to aggregate.
     */
    where?: SignatoryManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SignatoryManagers to fetch.
     */
    orderBy?: SignatoryManagerOrderByWithRelationInput | SignatoryManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SignatoryManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SignatoryManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SignatoryManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SignatoryManagers
    **/
    _count?: true | SignatoryManagerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SignatoryManagerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SignatoryManagerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SignatoryManagerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SignatoryManagerMaxAggregateInputType
  }

  export type GetSignatoryManagerAggregateType<T extends SignatoryManagerAggregateArgs> = {
        [P in keyof T & keyof AggregateSignatoryManager]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSignatoryManager[P]>
      : GetScalarType<T[P], AggregateSignatoryManager[P]>
  }




  export type SignatoryManagerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignatoryManagerWhereInput
    orderBy?: SignatoryManagerOrderByWithAggregationInput | SignatoryManagerOrderByWithAggregationInput[]
    by: SignatoryManagerScalarFieldEnum[] | SignatoryManagerScalarFieldEnum
    having?: SignatoryManagerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SignatoryManagerCountAggregateInputType | true
    _avg?: SignatoryManagerAvgAggregateInputType
    _sum?: SignatoryManagerSumAggregateInputType
    _min?: SignatoryManagerMinAggregateInputType
    _max?: SignatoryManagerMaxAggregateInputType
  }

  export type SignatoryManagerGroupByOutputType = {
    id: number
    name: string
    surname: string
    lastname: string
    phone: string
    email: string
    questionnaireId: number
    _count: SignatoryManagerCountAggregateOutputType | null
    _avg: SignatoryManagerAvgAggregateOutputType | null
    _sum: SignatoryManagerSumAggregateOutputType | null
    _min: SignatoryManagerMinAggregateOutputType | null
    _max: SignatoryManagerMaxAggregateOutputType | null
  }

  type GetSignatoryManagerGroupByPayload<T extends SignatoryManagerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SignatoryManagerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SignatoryManagerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SignatoryManagerGroupByOutputType[P]>
            : GetScalarType<T[P], SignatoryManagerGroupByOutputType[P]>
        }
      >
    >


  export type SignatoryManagerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    lastname?: boolean
    phone?: boolean
    email?: boolean
    questionnaireId?: boolean
    questionnaire?: boolean | QuestionnaireDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signatoryManager"]>

  export type SignatoryManagerSelectScalar = {
    id?: boolean
    name?: boolean
    surname?: boolean
    lastname?: boolean
    phone?: boolean
    email?: boolean
    questionnaireId?: boolean
  }

  export type SignatoryManagerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questionnaire?: boolean | QuestionnaireDefaultArgs<ExtArgs>
  }


  export type $SignatoryManagerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SignatoryManager"
    objects: {
      questionnaire: Prisma.$QuestionnairePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      surname: string
      lastname: string
      phone: string
      email: string
      questionnaireId: number
    }, ExtArgs["result"]["signatoryManager"]>
    composites: {}
  }


  type SignatoryManagerGetPayload<S extends boolean | null | undefined | SignatoryManagerDefaultArgs> = $Result.GetResult<Prisma.$SignatoryManagerPayload, S>

  type SignatoryManagerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SignatoryManagerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SignatoryManagerCountAggregateInputType | true
    }

  export interface SignatoryManagerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SignatoryManager'], meta: { name: 'SignatoryManager' } }
    /**
     * Find zero or one SignatoryManager that matches the filter.
     * @param {SignatoryManagerFindUniqueArgs} args - Arguments to find a SignatoryManager
     * @example
     * // Get one SignatoryManager
     * const signatoryManager = await prisma.signatoryManager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SignatoryManagerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SignatoryManagerFindUniqueArgs<ExtArgs>>
    ): Prisma__SignatoryManagerClient<$Result.GetResult<Prisma.$SignatoryManagerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SignatoryManager that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SignatoryManagerFindUniqueOrThrowArgs} args - Arguments to find a SignatoryManager
     * @example
     * // Get one SignatoryManager
     * const signatoryManager = await prisma.signatoryManager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SignatoryManagerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SignatoryManagerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SignatoryManagerClient<$Result.GetResult<Prisma.$SignatoryManagerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SignatoryManager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignatoryManagerFindFirstArgs} args - Arguments to find a SignatoryManager
     * @example
     * // Get one SignatoryManager
     * const signatoryManager = await prisma.signatoryManager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SignatoryManagerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SignatoryManagerFindFirstArgs<ExtArgs>>
    ): Prisma__SignatoryManagerClient<$Result.GetResult<Prisma.$SignatoryManagerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SignatoryManager that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignatoryManagerFindFirstOrThrowArgs} args - Arguments to find a SignatoryManager
     * @example
     * // Get one SignatoryManager
     * const signatoryManager = await prisma.signatoryManager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SignatoryManagerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SignatoryManagerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SignatoryManagerClient<$Result.GetResult<Prisma.$SignatoryManagerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SignatoryManagers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignatoryManagerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SignatoryManagers
     * const signatoryManagers = await prisma.signatoryManager.findMany()
     * 
     * // Get first 10 SignatoryManagers
     * const signatoryManagers = await prisma.signatoryManager.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const signatoryManagerWithIdOnly = await prisma.signatoryManager.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SignatoryManagerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SignatoryManagerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignatoryManagerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SignatoryManager.
     * @param {SignatoryManagerCreateArgs} args - Arguments to create a SignatoryManager.
     * @example
     * // Create one SignatoryManager
     * const SignatoryManager = await prisma.signatoryManager.create({
     *   data: {
     *     // ... data to create a SignatoryManager
     *   }
     * })
     * 
    **/
    create<T extends SignatoryManagerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SignatoryManagerCreateArgs<ExtArgs>>
    ): Prisma__SignatoryManagerClient<$Result.GetResult<Prisma.$SignatoryManagerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SignatoryManagers.
     *     @param {SignatoryManagerCreateManyArgs} args - Arguments to create many SignatoryManagers.
     *     @example
     *     // Create many SignatoryManagers
     *     const signatoryManager = await prisma.signatoryManager.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SignatoryManagerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SignatoryManagerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SignatoryManager.
     * @param {SignatoryManagerDeleteArgs} args - Arguments to delete one SignatoryManager.
     * @example
     * // Delete one SignatoryManager
     * const SignatoryManager = await prisma.signatoryManager.delete({
     *   where: {
     *     // ... filter to delete one SignatoryManager
     *   }
     * })
     * 
    **/
    delete<T extends SignatoryManagerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SignatoryManagerDeleteArgs<ExtArgs>>
    ): Prisma__SignatoryManagerClient<$Result.GetResult<Prisma.$SignatoryManagerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SignatoryManager.
     * @param {SignatoryManagerUpdateArgs} args - Arguments to update one SignatoryManager.
     * @example
     * // Update one SignatoryManager
     * const signatoryManager = await prisma.signatoryManager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SignatoryManagerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SignatoryManagerUpdateArgs<ExtArgs>>
    ): Prisma__SignatoryManagerClient<$Result.GetResult<Prisma.$SignatoryManagerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SignatoryManagers.
     * @param {SignatoryManagerDeleteManyArgs} args - Arguments to filter SignatoryManagers to delete.
     * @example
     * // Delete a few SignatoryManagers
     * const { count } = await prisma.signatoryManager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SignatoryManagerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SignatoryManagerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SignatoryManagers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignatoryManagerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SignatoryManagers
     * const signatoryManager = await prisma.signatoryManager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SignatoryManagerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SignatoryManagerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SignatoryManager.
     * @param {SignatoryManagerUpsertArgs} args - Arguments to update or create a SignatoryManager.
     * @example
     * // Update or create a SignatoryManager
     * const signatoryManager = await prisma.signatoryManager.upsert({
     *   create: {
     *     // ... data to create a SignatoryManager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SignatoryManager we want to update
     *   }
     * })
    **/
    upsert<T extends SignatoryManagerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SignatoryManagerUpsertArgs<ExtArgs>>
    ): Prisma__SignatoryManagerClient<$Result.GetResult<Prisma.$SignatoryManagerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SignatoryManagers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignatoryManagerCountArgs} args - Arguments to filter SignatoryManagers to count.
     * @example
     * // Count the number of SignatoryManagers
     * const count = await prisma.signatoryManager.count({
     *   where: {
     *     // ... the filter for the SignatoryManagers we want to count
     *   }
     * })
    **/
    count<T extends SignatoryManagerCountArgs>(
      args?: Subset<T, SignatoryManagerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SignatoryManagerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SignatoryManager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignatoryManagerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SignatoryManagerAggregateArgs>(args: Subset<T, SignatoryManagerAggregateArgs>): Prisma.PrismaPromise<GetSignatoryManagerAggregateType<T>>

    /**
     * Group by SignatoryManager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignatoryManagerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SignatoryManagerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SignatoryManagerGroupByArgs['orderBy'] }
        : { orderBy?: SignatoryManagerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SignatoryManagerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSignatoryManagerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SignatoryManager model
   */
  readonly fields: SignatoryManagerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SignatoryManager.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SignatoryManagerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    questionnaire<T extends QuestionnaireDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionnaireDefaultArgs<ExtArgs>>): Prisma__QuestionnaireClient<$Result.GetResult<Prisma.$QuestionnairePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SignatoryManager model
   */ 
  interface SignatoryManagerFieldRefs {
    readonly id: FieldRef<"SignatoryManager", 'Int'>
    readonly name: FieldRef<"SignatoryManager", 'String'>
    readonly surname: FieldRef<"SignatoryManager", 'String'>
    readonly lastname: FieldRef<"SignatoryManager", 'String'>
    readonly phone: FieldRef<"SignatoryManager", 'String'>
    readonly email: FieldRef<"SignatoryManager", 'String'>
    readonly questionnaireId: FieldRef<"SignatoryManager", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * SignatoryManager findUnique
   */
  export type SignatoryManagerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignatoryManager
     */
    select?: SignatoryManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SignatoryManagerInclude<ExtArgs> | null
    /**
     * Filter, which SignatoryManager to fetch.
     */
    where: SignatoryManagerWhereUniqueInput
  }


  /**
   * SignatoryManager findUniqueOrThrow
   */
  export type SignatoryManagerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignatoryManager
     */
    select?: SignatoryManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SignatoryManagerInclude<ExtArgs> | null
    /**
     * Filter, which SignatoryManager to fetch.
     */
    where: SignatoryManagerWhereUniqueInput
  }


  /**
   * SignatoryManager findFirst
   */
  export type SignatoryManagerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignatoryManager
     */
    select?: SignatoryManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SignatoryManagerInclude<ExtArgs> | null
    /**
     * Filter, which SignatoryManager to fetch.
     */
    where?: SignatoryManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SignatoryManagers to fetch.
     */
    orderBy?: SignatoryManagerOrderByWithRelationInput | SignatoryManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SignatoryManagers.
     */
    cursor?: SignatoryManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SignatoryManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SignatoryManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SignatoryManagers.
     */
    distinct?: SignatoryManagerScalarFieldEnum | SignatoryManagerScalarFieldEnum[]
  }


  /**
   * SignatoryManager findFirstOrThrow
   */
  export type SignatoryManagerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignatoryManager
     */
    select?: SignatoryManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SignatoryManagerInclude<ExtArgs> | null
    /**
     * Filter, which SignatoryManager to fetch.
     */
    where?: SignatoryManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SignatoryManagers to fetch.
     */
    orderBy?: SignatoryManagerOrderByWithRelationInput | SignatoryManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SignatoryManagers.
     */
    cursor?: SignatoryManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SignatoryManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SignatoryManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SignatoryManagers.
     */
    distinct?: SignatoryManagerScalarFieldEnum | SignatoryManagerScalarFieldEnum[]
  }


  /**
   * SignatoryManager findMany
   */
  export type SignatoryManagerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignatoryManager
     */
    select?: SignatoryManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SignatoryManagerInclude<ExtArgs> | null
    /**
     * Filter, which SignatoryManagers to fetch.
     */
    where?: SignatoryManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SignatoryManagers to fetch.
     */
    orderBy?: SignatoryManagerOrderByWithRelationInput | SignatoryManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SignatoryManagers.
     */
    cursor?: SignatoryManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SignatoryManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SignatoryManagers.
     */
    skip?: number
    distinct?: SignatoryManagerScalarFieldEnum | SignatoryManagerScalarFieldEnum[]
  }


  /**
   * SignatoryManager create
   */
  export type SignatoryManagerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignatoryManager
     */
    select?: SignatoryManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SignatoryManagerInclude<ExtArgs> | null
    /**
     * The data needed to create a SignatoryManager.
     */
    data: XOR<SignatoryManagerCreateInput, SignatoryManagerUncheckedCreateInput>
  }


  /**
   * SignatoryManager createMany
   */
  export type SignatoryManagerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SignatoryManagers.
     */
    data: SignatoryManagerCreateManyInput | SignatoryManagerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * SignatoryManager update
   */
  export type SignatoryManagerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignatoryManager
     */
    select?: SignatoryManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SignatoryManagerInclude<ExtArgs> | null
    /**
     * The data needed to update a SignatoryManager.
     */
    data: XOR<SignatoryManagerUpdateInput, SignatoryManagerUncheckedUpdateInput>
    /**
     * Choose, which SignatoryManager to update.
     */
    where: SignatoryManagerWhereUniqueInput
  }


  /**
   * SignatoryManager updateMany
   */
  export type SignatoryManagerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SignatoryManagers.
     */
    data: XOR<SignatoryManagerUpdateManyMutationInput, SignatoryManagerUncheckedUpdateManyInput>
    /**
     * Filter which SignatoryManagers to update
     */
    where?: SignatoryManagerWhereInput
  }


  /**
   * SignatoryManager upsert
   */
  export type SignatoryManagerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignatoryManager
     */
    select?: SignatoryManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SignatoryManagerInclude<ExtArgs> | null
    /**
     * The filter to search for the SignatoryManager to update in case it exists.
     */
    where: SignatoryManagerWhereUniqueInput
    /**
     * In case the SignatoryManager found by the `where` argument doesn't exist, create a new SignatoryManager with this data.
     */
    create: XOR<SignatoryManagerCreateInput, SignatoryManagerUncheckedCreateInput>
    /**
     * In case the SignatoryManager was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SignatoryManagerUpdateInput, SignatoryManagerUncheckedUpdateInput>
  }


  /**
   * SignatoryManager delete
   */
  export type SignatoryManagerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignatoryManager
     */
    select?: SignatoryManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SignatoryManagerInclude<ExtArgs> | null
    /**
     * Filter which SignatoryManager to delete.
     */
    where: SignatoryManagerWhereUniqueInput
  }


  /**
   * SignatoryManager deleteMany
   */
  export type SignatoryManagerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SignatoryManagers to delete
     */
    where?: SignatoryManagerWhereInput
  }


  /**
   * SignatoryManager without action
   */
  export type SignatoryManagerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignatoryManager
     */
    select?: SignatoryManagerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SignatoryManagerInclude<ExtArgs> | null
  }



  /**
   * Model Lifts
   */

  export type AggregateLifts = {
    _count: LiftsCountAggregateOutputType | null
    _avg: LiftsAvgAggregateOutputType | null
    _sum: LiftsSumAggregateOutputType | null
    _min: LiftsMinAggregateOutputType | null
    _max: LiftsMaxAggregateOutputType | null
  }

  export type LiftsAvgAggregateOutputType = {
    id: number | null
    twoPostLiftScissors: number | null
    fourPostLift: number | null
    fourPostLiftTraverse: number | null
    pits: number | null
    pitsEquippedTraverse: number | null
    postElectronicDiagnostic: number | null
    postAdditionalEquipment: number | null
    questionnaireId: number | null
  }

  export type LiftsSumAggregateOutputType = {
    id: number | null
    twoPostLiftScissors: number | null
    fourPostLift: number | null
    fourPostLiftTraverse: number | null
    pits: number | null
    pitsEquippedTraverse: number | null
    postElectronicDiagnostic: number | null
    postAdditionalEquipment: number | null
    questionnaireId: number | null
  }

  export type LiftsMinAggregateOutputType = {
    id: number | null
    twoPostLiftScissors: number | null
    fourPostLift: number | null
    fourPostLiftTraverse: number | null
    pits: number | null
    pitsEquippedTraverse: number | null
    postElectronicDiagnostic: number | null
    postAdditionalEquipment: number | null
    questionnaireId: number | null
  }

  export type LiftsMaxAggregateOutputType = {
    id: number | null
    twoPostLiftScissors: number | null
    fourPostLift: number | null
    fourPostLiftTraverse: number | null
    pits: number | null
    pitsEquippedTraverse: number | null
    postElectronicDiagnostic: number | null
    postAdditionalEquipment: number | null
    questionnaireId: number | null
  }

  export type LiftsCountAggregateOutputType = {
    id: number
    twoPostLiftScissors: number
    fourPostLift: number
    fourPostLiftTraverse: number
    pits: number
    pitsEquippedTraverse: number
    postElectronicDiagnostic: number
    postAdditionalEquipment: number
    questionnaireId: number
    _all: number
  }


  export type LiftsAvgAggregateInputType = {
    id?: true
    twoPostLiftScissors?: true
    fourPostLift?: true
    fourPostLiftTraverse?: true
    pits?: true
    pitsEquippedTraverse?: true
    postElectronicDiagnostic?: true
    postAdditionalEquipment?: true
    questionnaireId?: true
  }

  export type LiftsSumAggregateInputType = {
    id?: true
    twoPostLiftScissors?: true
    fourPostLift?: true
    fourPostLiftTraverse?: true
    pits?: true
    pitsEquippedTraverse?: true
    postElectronicDiagnostic?: true
    postAdditionalEquipment?: true
    questionnaireId?: true
  }

  export type LiftsMinAggregateInputType = {
    id?: true
    twoPostLiftScissors?: true
    fourPostLift?: true
    fourPostLiftTraverse?: true
    pits?: true
    pitsEquippedTraverse?: true
    postElectronicDiagnostic?: true
    postAdditionalEquipment?: true
    questionnaireId?: true
  }

  export type LiftsMaxAggregateInputType = {
    id?: true
    twoPostLiftScissors?: true
    fourPostLift?: true
    fourPostLiftTraverse?: true
    pits?: true
    pitsEquippedTraverse?: true
    postElectronicDiagnostic?: true
    postAdditionalEquipment?: true
    questionnaireId?: true
  }

  export type LiftsCountAggregateInputType = {
    id?: true
    twoPostLiftScissors?: true
    fourPostLift?: true
    fourPostLiftTraverse?: true
    pits?: true
    pitsEquippedTraverse?: true
    postElectronicDiagnostic?: true
    postAdditionalEquipment?: true
    questionnaireId?: true
    _all?: true
  }

  export type LiftsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lifts to aggregate.
     */
    where?: LiftsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lifts to fetch.
     */
    orderBy?: LiftsOrderByWithRelationInput | LiftsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LiftsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lifts
    **/
    _count?: true | LiftsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LiftsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LiftsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LiftsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LiftsMaxAggregateInputType
  }

  export type GetLiftsAggregateType<T extends LiftsAggregateArgs> = {
        [P in keyof T & keyof AggregateLifts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLifts[P]>
      : GetScalarType<T[P], AggregateLifts[P]>
  }




  export type LiftsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LiftsWhereInput
    orderBy?: LiftsOrderByWithAggregationInput | LiftsOrderByWithAggregationInput[]
    by: LiftsScalarFieldEnum[] | LiftsScalarFieldEnum
    having?: LiftsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LiftsCountAggregateInputType | true
    _avg?: LiftsAvgAggregateInputType
    _sum?: LiftsSumAggregateInputType
    _min?: LiftsMinAggregateInputType
    _max?: LiftsMaxAggregateInputType
  }

  export type LiftsGroupByOutputType = {
    id: number
    twoPostLiftScissors: number
    fourPostLift: number
    fourPostLiftTraverse: number
    pits: number
    pitsEquippedTraverse: number
    postElectronicDiagnostic: number
    postAdditionalEquipment: number
    questionnaireId: number
    _count: LiftsCountAggregateOutputType | null
    _avg: LiftsAvgAggregateOutputType | null
    _sum: LiftsSumAggregateOutputType | null
    _min: LiftsMinAggregateOutputType | null
    _max: LiftsMaxAggregateOutputType | null
  }

  type GetLiftsGroupByPayload<T extends LiftsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LiftsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LiftsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LiftsGroupByOutputType[P]>
            : GetScalarType<T[P], LiftsGroupByOutputType[P]>
        }
      >
    >


  export type LiftsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    twoPostLiftScissors?: boolean
    fourPostLift?: boolean
    fourPostLiftTraverse?: boolean
    pits?: boolean
    pitsEquippedTraverse?: boolean
    postElectronicDiagnostic?: boolean
    postAdditionalEquipment?: boolean
    questionnaireId?: boolean
    questionnaire?: boolean | QuestionnaireDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lifts"]>

  export type LiftsSelectScalar = {
    id?: boolean
    twoPostLiftScissors?: boolean
    fourPostLift?: boolean
    fourPostLiftTraverse?: boolean
    pits?: boolean
    pitsEquippedTraverse?: boolean
    postElectronicDiagnostic?: boolean
    postAdditionalEquipment?: boolean
    questionnaireId?: boolean
  }

  export type LiftsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questionnaire?: boolean | QuestionnaireDefaultArgs<ExtArgs>
  }


  export type $LiftsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lifts"
    objects: {
      questionnaire: Prisma.$QuestionnairePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      twoPostLiftScissors: number
      fourPostLift: number
      fourPostLiftTraverse: number
      pits: number
      pitsEquippedTraverse: number
      postElectronicDiagnostic: number
      postAdditionalEquipment: number
      questionnaireId: number
    }, ExtArgs["result"]["lifts"]>
    composites: {}
  }


  type LiftsGetPayload<S extends boolean | null | undefined | LiftsDefaultArgs> = $Result.GetResult<Prisma.$LiftsPayload, S>

  type LiftsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LiftsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LiftsCountAggregateInputType | true
    }

  export interface LiftsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lifts'], meta: { name: 'Lifts' } }
    /**
     * Find zero or one Lifts that matches the filter.
     * @param {LiftsFindUniqueArgs} args - Arguments to find a Lifts
     * @example
     * // Get one Lifts
     * const lifts = await prisma.lifts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LiftsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LiftsFindUniqueArgs<ExtArgs>>
    ): Prisma__LiftsClient<$Result.GetResult<Prisma.$LiftsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Lifts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LiftsFindUniqueOrThrowArgs} args - Arguments to find a Lifts
     * @example
     * // Get one Lifts
     * const lifts = await prisma.lifts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LiftsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LiftsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LiftsClient<$Result.GetResult<Prisma.$LiftsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Lifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiftsFindFirstArgs} args - Arguments to find a Lifts
     * @example
     * // Get one Lifts
     * const lifts = await prisma.lifts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LiftsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LiftsFindFirstArgs<ExtArgs>>
    ): Prisma__LiftsClient<$Result.GetResult<Prisma.$LiftsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Lifts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiftsFindFirstOrThrowArgs} args - Arguments to find a Lifts
     * @example
     * // Get one Lifts
     * const lifts = await prisma.lifts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LiftsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LiftsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LiftsClient<$Result.GetResult<Prisma.$LiftsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Lifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiftsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lifts
     * const lifts = await prisma.lifts.findMany()
     * 
     * // Get first 10 Lifts
     * const lifts = await prisma.lifts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const liftsWithIdOnly = await prisma.lifts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LiftsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LiftsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiftsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Lifts.
     * @param {LiftsCreateArgs} args - Arguments to create a Lifts.
     * @example
     * // Create one Lifts
     * const Lifts = await prisma.lifts.create({
     *   data: {
     *     // ... data to create a Lifts
     *   }
     * })
     * 
    **/
    create<T extends LiftsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LiftsCreateArgs<ExtArgs>>
    ): Prisma__LiftsClient<$Result.GetResult<Prisma.$LiftsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Lifts.
     *     @param {LiftsCreateManyArgs} args - Arguments to create many Lifts.
     *     @example
     *     // Create many Lifts
     *     const lifts = await prisma.lifts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LiftsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LiftsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lifts.
     * @param {LiftsDeleteArgs} args - Arguments to delete one Lifts.
     * @example
     * // Delete one Lifts
     * const Lifts = await prisma.lifts.delete({
     *   where: {
     *     // ... filter to delete one Lifts
     *   }
     * })
     * 
    **/
    delete<T extends LiftsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LiftsDeleteArgs<ExtArgs>>
    ): Prisma__LiftsClient<$Result.GetResult<Prisma.$LiftsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Lifts.
     * @param {LiftsUpdateArgs} args - Arguments to update one Lifts.
     * @example
     * // Update one Lifts
     * const lifts = await prisma.lifts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LiftsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LiftsUpdateArgs<ExtArgs>>
    ): Prisma__LiftsClient<$Result.GetResult<Prisma.$LiftsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Lifts.
     * @param {LiftsDeleteManyArgs} args - Arguments to filter Lifts to delete.
     * @example
     * // Delete a few Lifts
     * const { count } = await prisma.lifts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LiftsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LiftsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiftsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lifts
     * const lifts = await prisma.lifts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LiftsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LiftsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lifts.
     * @param {LiftsUpsertArgs} args - Arguments to update or create a Lifts.
     * @example
     * // Update or create a Lifts
     * const lifts = await prisma.lifts.upsert({
     *   create: {
     *     // ... data to create a Lifts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lifts we want to update
     *   }
     * })
    **/
    upsert<T extends LiftsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LiftsUpsertArgs<ExtArgs>>
    ): Prisma__LiftsClient<$Result.GetResult<Prisma.$LiftsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Lifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiftsCountArgs} args - Arguments to filter Lifts to count.
     * @example
     * // Count the number of Lifts
     * const count = await prisma.lifts.count({
     *   where: {
     *     // ... the filter for the Lifts we want to count
     *   }
     * })
    **/
    count<T extends LiftsCountArgs>(
      args?: Subset<T, LiftsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LiftsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiftsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LiftsAggregateArgs>(args: Subset<T, LiftsAggregateArgs>): Prisma.PrismaPromise<GetLiftsAggregateType<T>>

    /**
     * Group by Lifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiftsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LiftsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LiftsGroupByArgs['orderBy'] }
        : { orderBy?: LiftsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LiftsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLiftsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lifts model
   */
  readonly fields: LiftsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lifts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LiftsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    questionnaire<T extends QuestionnaireDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionnaireDefaultArgs<ExtArgs>>): Prisma__QuestionnaireClient<$Result.GetResult<Prisma.$QuestionnairePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Lifts model
   */ 
  interface LiftsFieldRefs {
    readonly id: FieldRef<"Lifts", 'Int'>
    readonly twoPostLiftScissors: FieldRef<"Lifts", 'Int'>
    readonly fourPostLift: FieldRef<"Lifts", 'Int'>
    readonly fourPostLiftTraverse: FieldRef<"Lifts", 'Int'>
    readonly pits: FieldRef<"Lifts", 'Int'>
    readonly pitsEquippedTraverse: FieldRef<"Lifts", 'Int'>
    readonly postElectronicDiagnostic: FieldRef<"Lifts", 'Int'>
    readonly postAdditionalEquipment: FieldRef<"Lifts", 'Int'>
    readonly questionnaireId: FieldRef<"Lifts", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Lifts findUnique
   */
  export type LiftsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifts
     */
    select?: LiftsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LiftsInclude<ExtArgs> | null
    /**
     * Filter, which Lifts to fetch.
     */
    where: LiftsWhereUniqueInput
  }


  /**
   * Lifts findUniqueOrThrow
   */
  export type LiftsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifts
     */
    select?: LiftsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LiftsInclude<ExtArgs> | null
    /**
     * Filter, which Lifts to fetch.
     */
    where: LiftsWhereUniqueInput
  }


  /**
   * Lifts findFirst
   */
  export type LiftsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifts
     */
    select?: LiftsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LiftsInclude<ExtArgs> | null
    /**
     * Filter, which Lifts to fetch.
     */
    where?: LiftsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lifts to fetch.
     */
    orderBy?: LiftsOrderByWithRelationInput | LiftsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lifts.
     */
    cursor?: LiftsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lifts.
     */
    distinct?: LiftsScalarFieldEnum | LiftsScalarFieldEnum[]
  }


  /**
   * Lifts findFirstOrThrow
   */
  export type LiftsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifts
     */
    select?: LiftsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LiftsInclude<ExtArgs> | null
    /**
     * Filter, which Lifts to fetch.
     */
    where?: LiftsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lifts to fetch.
     */
    orderBy?: LiftsOrderByWithRelationInput | LiftsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lifts.
     */
    cursor?: LiftsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lifts.
     */
    distinct?: LiftsScalarFieldEnum | LiftsScalarFieldEnum[]
  }


  /**
   * Lifts findMany
   */
  export type LiftsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifts
     */
    select?: LiftsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LiftsInclude<ExtArgs> | null
    /**
     * Filter, which Lifts to fetch.
     */
    where?: LiftsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lifts to fetch.
     */
    orderBy?: LiftsOrderByWithRelationInput | LiftsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lifts.
     */
    cursor?: LiftsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lifts.
     */
    skip?: number
    distinct?: LiftsScalarFieldEnum | LiftsScalarFieldEnum[]
  }


  /**
   * Lifts create
   */
  export type LiftsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifts
     */
    select?: LiftsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LiftsInclude<ExtArgs> | null
    /**
     * The data needed to create a Lifts.
     */
    data: XOR<LiftsCreateInput, LiftsUncheckedCreateInput>
  }


  /**
   * Lifts createMany
   */
  export type LiftsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lifts.
     */
    data: LiftsCreateManyInput | LiftsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Lifts update
   */
  export type LiftsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifts
     */
    select?: LiftsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LiftsInclude<ExtArgs> | null
    /**
     * The data needed to update a Lifts.
     */
    data: XOR<LiftsUpdateInput, LiftsUncheckedUpdateInput>
    /**
     * Choose, which Lifts to update.
     */
    where: LiftsWhereUniqueInput
  }


  /**
   * Lifts updateMany
   */
  export type LiftsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lifts.
     */
    data: XOR<LiftsUpdateManyMutationInput, LiftsUncheckedUpdateManyInput>
    /**
     * Filter which Lifts to update
     */
    where?: LiftsWhereInput
  }


  /**
   * Lifts upsert
   */
  export type LiftsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifts
     */
    select?: LiftsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LiftsInclude<ExtArgs> | null
    /**
     * The filter to search for the Lifts to update in case it exists.
     */
    where: LiftsWhereUniqueInput
    /**
     * In case the Lifts found by the `where` argument doesn't exist, create a new Lifts with this data.
     */
    create: XOR<LiftsCreateInput, LiftsUncheckedCreateInput>
    /**
     * In case the Lifts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LiftsUpdateInput, LiftsUncheckedUpdateInput>
  }


  /**
   * Lifts delete
   */
  export type LiftsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifts
     */
    select?: LiftsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LiftsInclude<ExtArgs> | null
    /**
     * Filter which Lifts to delete.
     */
    where: LiftsWhereUniqueInput
  }


  /**
   * Lifts deleteMany
   */
  export type LiftsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lifts to delete
     */
    where?: LiftsWhereInput
  }


  /**
   * Lifts without action
   */
  export type LiftsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lifts
     */
    select?: LiftsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LiftsInclude<ExtArgs> | null
  }



  /**
   * Model ConfirmData
   */

  export type AggregateConfirmData = {
    _count: ConfirmDataCountAggregateOutputType | null
    _avg: ConfirmDataAvgAggregateOutputType | null
    _sum: ConfirmDataSumAggregateOutputType | null
    _min: ConfirmDataMinAggregateOutputType | null
    _max: ConfirmDataMaxAggregateOutputType | null
  }

  export type ConfirmDataAvgAggregateOutputType = {
    id: number | null
    lifts: number | null
    questionnaireId: number | null
  }

  export type ConfirmDataSumAggregateOutputType = {
    id: number | null
    lifts: number | null
    questionnaireId: number | null
  }

  export type ConfirmDataMinAggregateOutputType = {
    id: number | null
    loginOne: string | null
    loginTwo: string | null
    lifts: number | null
    questionnaireId: number | null
  }

  export type ConfirmDataMaxAggregateOutputType = {
    id: number | null
    loginOne: string | null
    loginTwo: string | null
    lifts: number | null
    questionnaireId: number | null
  }

  export type ConfirmDataCountAggregateOutputType = {
    id: number
    loginOne: number
    loginTwo: number
    lifts: number
    questionnaireId: number
    _all: number
  }


  export type ConfirmDataAvgAggregateInputType = {
    id?: true
    lifts?: true
    questionnaireId?: true
  }

  export type ConfirmDataSumAggregateInputType = {
    id?: true
    lifts?: true
    questionnaireId?: true
  }

  export type ConfirmDataMinAggregateInputType = {
    id?: true
    loginOne?: true
    loginTwo?: true
    lifts?: true
    questionnaireId?: true
  }

  export type ConfirmDataMaxAggregateInputType = {
    id?: true
    loginOne?: true
    loginTwo?: true
    lifts?: true
    questionnaireId?: true
  }

  export type ConfirmDataCountAggregateInputType = {
    id?: true
    loginOne?: true
    loginTwo?: true
    lifts?: true
    questionnaireId?: true
    _all?: true
  }

  export type ConfirmDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConfirmData to aggregate.
     */
    where?: ConfirmDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfirmData to fetch.
     */
    orderBy?: ConfirmDataOrderByWithRelationInput | ConfirmDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfirmDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfirmData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfirmData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConfirmData
    **/
    _count?: true | ConfirmDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConfirmDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConfirmDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfirmDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfirmDataMaxAggregateInputType
  }

  export type GetConfirmDataAggregateType<T extends ConfirmDataAggregateArgs> = {
        [P in keyof T & keyof AggregateConfirmData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfirmData[P]>
      : GetScalarType<T[P], AggregateConfirmData[P]>
  }




  export type ConfirmDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfirmDataWhereInput
    orderBy?: ConfirmDataOrderByWithAggregationInput | ConfirmDataOrderByWithAggregationInput[]
    by: ConfirmDataScalarFieldEnum[] | ConfirmDataScalarFieldEnum
    having?: ConfirmDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfirmDataCountAggregateInputType | true
    _avg?: ConfirmDataAvgAggregateInputType
    _sum?: ConfirmDataSumAggregateInputType
    _min?: ConfirmDataMinAggregateInputType
    _max?: ConfirmDataMaxAggregateInputType
  }

  export type ConfirmDataGroupByOutputType = {
    id: number
    loginOne: string
    loginTwo: string
    lifts: number
    questionnaireId: number
    _count: ConfirmDataCountAggregateOutputType | null
    _avg: ConfirmDataAvgAggregateOutputType | null
    _sum: ConfirmDataSumAggregateOutputType | null
    _min: ConfirmDataMinAggregateOutputType | null
    _max: ConfirmDataMaxAggregateOutputType | null
  }

  type GetConfirmDataGroupByPayload<T extends ConfirmDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfirmDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfirmDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfirmDataGroupByOutputType[P]>
            : GetScalarType<T[P], ConfirmDataGroupByOutputType[P]>
        }
      >
    >


  export type ConfirmDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    loginOne?: boolean
    loginTwo?: boolean
    lifts?: boolean
    questionnaireId?: boolean
    questionnaire?: boolean | QuestionnaireDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["confirmData"]>

  export type ConfirmDataSelectScalar = {
    id?: boolean
    loginOne?: boolean
    loginTwo?: boolean
    lifts?: boolean
    questionnaireId?: boolean
  }

  export type ConfirmDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questionnaire?: boolean | QuestionnaireDefaultArgs<ExtArgs>
  }


  export type $ConfirmDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConfirmData"
    objects: {
      questionnaire: Prisma.$QuestionnairePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      loginOne: string
      loginTwo: string
      lifts: number
      questionnaireId: number
    }, ExtArgs["result"]["confirmData"]>
    composites: {}
  }


  type ConfirmDataGetPayload<S extends boolean | null | undefined | ConfirmDataDefaultArgs> = $Result.GetResult<Prisma.$ConfirmDataPayload, S>

  type ConfirmDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ConfirmDataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ConfirmDataCountAggregateInputType | true
    }

  export interface ConfirmDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConfirmData'], meta: { name: 'ConfirmData' } }
    /**
     * Find zero or one ConfirmData that matches the filter.
     * @param {ConfirmDataFindUniqueArgs} args - Arguments to find a ConfirmData
     * @example
     * // Get one ConfirmData
     * const confirmData = await prisma.confirmData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ConfirmDataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ConfirmDataFindUniqueArgs<ExtArgs>>
    ): Prisma__ConfirmDataClient<$Result.GetResult<Prisma.$ConfirmDataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ConfirmData that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ConfirmDataFindUniqueOrThrowArgs} args - Arguments to find a ConfirmData
     * @example
     * // Get one ConfirmData
     * const confirmData = await prisma.confirmData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ConfirmDataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConfirmDataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ConfirmDataClient<$Result.GetResult<Prisma.$ConfirmDataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ConfirmData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmDataFindFirstArgs} args - Arguments to find a ConfirmData
     * @example
     * // Get one ConfirmData
     * const confirmData = await prisma.confirmData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ConfirmDataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ConfirmDataFindFirstArgs<ExtArgs>>
    ): Prisma__ConfirmDataClient<$Result.GetResult<Prisma.$ConfirmDataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ConfirmData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmDataFindFirstOrThrowArgs} args - Arguments to find a ConfirmData
     * @example
     * // Get one ConfirmData
     * const confirmData = await prisma.confirmData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ConfirmDataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConfirmDataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ConfirmDataClient<$Result.GetResult<Prisma.$ConfirmDataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ConfirmData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmDataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConfirmData
     * const confirmData = await prisma.confirmData.findMany()
     * 
     * // Get first 10 ConfirmData
     * const confirmData = await prisma.confirmData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const confirmDataWithIdOnly = await prisma.confirmData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ConfirmDataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConfirmDataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfirmDataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ConfirmData.
     * @param {ConfirmDataCreateArgs} args - Arguments to create a ConfirmData.
     * @example
     * // Create one ConfirmData
     * const ConfirmData = await prisma.confirmData.create({
     *   data: {
     *     // ... data to create a ConfirmData
     *   }
     * })
     * 
    **/
    create<T extends ConfirmDataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ConfirmDataCreateArgs<ExtArgs>>
    ): Prisma__ConfirmDataClient<$Result.GetResult<Prisma.$ConfirmDataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ConfirmData.
     *     @param {ConfirmDataCreateManyArgs} args - Arguments to create many ConfirmData.
     *     @example
     *     // Create many ConfirmData
     *     const confirmData = await prisma.confirmData.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ConfirmDataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConfirmDataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ConfirmData.
     * @param {ConfirmDataDeleteArgs} args - Arguments to delete one ConfirmData.
     * @example
     * // Delete one ConfirmData
     * const ConfirmData = await prisma.confirmData.delete({
     *   where: {
     *     // ... filter to delete one ConfirmData
     *   }
     * })
     * 
    **/
    delete<T extends ConfirmDataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ConfirmDataDeleteArgs<ExtArgs>>
    ): Prisma__ConfirmDataClient<$Result.GetResult<Prisma.$ConfirmDataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ConfirmData.
     * @param {ConfirmDataUpdateArgs} args - Arguments to update one ConfirmData.
     * @example
     * // Update one ConfirmData
     * const confirmData = await prisma.confirmData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ConfirmDataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ConfirmDataUpdateArgs<ExtArgs>>
    ): Prisma__ConfirmDataClient<$Result.GetResult<Prisma.$ConfirmDataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ConfirmData.
     * @param {ConfirmDataDeleteManyArgs} args - Arguments to filter ConfirmData to delete.
     * @example
     * // Delete a few ConfirmData
     * const { count } = await prisma.confirmData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ConfirmDataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConfirmDataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConfirmData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConfirmData
     * const confirmData = await prisma.confirmData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ConfirmDataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ConfirmDataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ConfirmData.
     * @param {ConfirmDataUpsertArgs} args - Arguments to update or create a ConfirmData.
     * @example
     * // Update or create a ConfirmData
     * const confirmData = await prisma.confirmData.upsert({
     *   create: {
     *     // ... data to create a ConfirmData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConfirmData we want to update
     *   }
     * })
    **/
    upsert<T extends ConfirmDataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ConfirmDataUpsertArgs<ExtArgs>>
    ): Prisma__ConfirmDataClient<$Result.GetResult<Prisma.$ConfirmDataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ConfirmData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmDataCountArgs} args - Arguments to filter ConfirmData to count.
     * @example
     * // Count the number of ConfirmData
     * const count = await prisma.confirmData.count({
     *   where: {
     *     // ... the filter for the ConfirmData we want to count
     *   }
     * })
    **/
    count<T extends ConfirmDataCountArgs>(
      args?: Subset<T, ConfirmDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfirmDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConfirmData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConfirmDataAggregateArgs>(args: Subset<T, ConfirmDataAggregateArgs>): Prisma.PrismaPromise<GetConfirmDataAggregateType<T>>

    /**
     * Group by ConfirmData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConfirmDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfirmDataGroupByArgs['orderBy'] }
        : { orderBy?: ConfirmDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConfirmDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfirmDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConfirmData model
   */
  readonly fields: ConfirmDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConfirmData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfirmDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    questionnaire<T extends QuestionnaireDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionnaireDefaultArgs<ExtArgs>>): Prisma__QuestionnaireClient<$Result.GetResult<Prisma.$QuestionnairePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ConfirmData model
   */ 
  interface ConfirmDataFieldRefs {
    readonly id: FieldRef<"ConfirmData", 'Int'>
    readonly loginOne: FieldRef<"ConfirmData", 'String'>
    readonly loginTwo: FieldRef<"ConfirmData", 'String'>
    readonly lifts: FieldRef<"ConfirmData", 'Int'>
    readonly questionnaireId: FieldRef<"ConfirmData", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ConfirmData findUnique
   */
  export type ConfirmDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmData
     */
    select?: ConfirmDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConfirmDataInclude<ExtArgs> | null
    /**
     * Filter, which ConfirmData to fetch.
     */
    where: ConfirmDataWhereUniqueInput
  }


  /**
   * ConfirmData findUniqueOrThrow
   */
  export type ConfirmDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmData
     */
    select?: ConfirmDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConfirmDataInclude<ExtArgs> | null
    /**
     * Filter, which ConfirmData to fetch.
     */
    where: ConfirmDataWhereUniqueInput
  }


  /**
   * ConfirmData findFirst
   */
  export type ConfirmDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmData
     */
    select?: ConfirmDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConfirmDataInclude<ExtArgs> | null
    /**
     * Filter, which ConfirmData to fetch.
     */
    where?: ConfirmDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfirmData to fetch.
     */
    orderBy?: ConfirmDataOrderByWithRelationInput | ConfirmDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConfirmData.
     */
    cursor?: ConfirmDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfirmData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfirmData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConfirmData.
     */
    distinct?: ConfirmDataScalarFieldEnum | ConfirmDataScalarFieldEnum[]
  }


  /**
   * ConfirmData findFirstOrThrow
   */
  export type ConfirmDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmData
     */
    select?: ConfirmDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConfirmDataInclude<ExtArgs> | null
    /**
     * Filter, which ConfirmData to fetch.
     */
    where?: ConfirmDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfirmData to fetch.
     */
    orderBy?: ConfirmDataOrderByWithRelationInput | ConfirmDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConfirmData.
     */
    cursor?: ConfirmDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfirmData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfirmData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConfirmData.
     */
    distinct?: ConfirmDataScalarFieldEnum | ConfirmDataScalarFieldEnum[]
  }


  /**
   * ConfirmData findMany
   */
  export type ConfirmDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmData
     */
    select?: ConfirmDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConfirmDataInclude<ExtArgs> | null
    /**
     * Filter, which ConfirmData to fetch.
     */
    where?: ConfirmDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfirmData to fetch.
     */
    orderBy?: ConfirmDataOrderByWithRelationInput | ConfirmDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConfirmData.
     */
    cursor?: ConfirmDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfirmData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfirmData.
     */
    skip?: number
    distinct?: ConfirmDataScalarFieldEnum | ConfirmDataScalarFieldEnum[]
  }


  /**
   * ConfirmData create
   */
  export type ConfirmDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmData
     */
    select?: ConfirmDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConfirmDataInclude<ExtArgs> | null
    /**
     * The data needed to create a ConfirmData.
     */
    data: XOR<ConfirmDataCreateInput, ConfirmDataUncheckedCreateInput>
  }


  /**
   * ConfirmData createMany
   */
  export type ConfirmDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConfirmData.
     */
    data: ConfirmDataCreateManyInput | ConfirmDataCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ConfirmData update
   */
  export type ConfirmDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmData
     */
    select?: ConfirmDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConfirmDataInclude<ExtArgs> | null
    /**
     * The data needed to update a ConfirmData.
     */
    data: XOR<ConfirmDataUpdateInput, ConfirmDataUncheckedUpdateInput>
    /**
     * Choose, which ConfirmData to update.
     */
    where: ConfirmDataWhereUniqueInput
  }


  /**
   * ConfirmData updateMany
   */
  export type ConfirmDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConfirmData.
     */
    data: XOR<ConfirmDataUpdateManyMutationInput, ConfirmDataUncheckedUpdateManyInput>
    /**
     * Filter which ConfirmData to update
     */
    where?: ConfirmDataWhereInput
  }


  /**
   * ConfirmData upsert
   */
  export type ConfirmDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmData
     */
    select?: ConfirmDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConfirmDataInclude<ExtArgs> | null
    /**
     * The filter to search for the ConfirmData to update in case it exists.
     */
    where: ConfirmDataWhereUniqueInput
    /**
     * In case the ConfirmData found by the `where` argument doesn't exist, create a new ConfirmData with this data.
     */
    create: XOR<ConfirmDataCreateInput, ConfirmDataUncheckedCreateInput>
    /**
     * In case the ConfirmData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfirmDataUpdateInput, ConfirmDataUncheckedUpdateInput>
  }


  /**
   * ConfirmData delete
   */
  export type ConfirmDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmData
     */
    select?: ConfirmDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConfirmDataInclude<ExtArgs> | null
    /**
     * Filter which ConfirmData to delete.
     */
    where: ConfirmDataWhereUniqueInput
  }


  /**
   * ConfirmData deleteMany
   */
  export type ConfirmDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConfirmData to delete
     */
    where?: ConfirmDataWhereInput
  }


  /**
   * ConfirmData without action
   */
  export type ConfirmDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmData
     */
    select?: ConfirmDataSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConfirmDataInclude<ExtArgs> | null
  }



  /**
   * Model Images
   */

  export type AggregateImages = {
    _count: ImagesCountAggregateOutputType | null
    _avg: ImagesAvgAggregateOutputType | null
    _sum: ImagesSumAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  export type ImagesAvgAggregateOutputType = {
    id: number | null
    questionnaireId: number | null
  }

  export type ImagesSumAggregateOutputType = {
    id: number | null
    questionnaireId: number | null
  }

  export type ImagesMinAggregateOutputType = {
    id: number | null
    path: string | null
    description: string | null
    questionnaireId: number | null
  }

  export type ImagesMaxAggregateOutputType = {
    id: number | null
    path: string | null
    description: string | null
    questionnaireId: number | null
  }

  export type ImagesCountAggregateOutputType = {
    id: number
    path: number
    description: number
    questionnaireId: number
    _all: number
  }


  export type ImagesAvgAggregateInputType = {
    id?: true
    questionnaireId?: true
  }

  export type ImagesSumAggregateInputType = {
    id?: true
    questionnaireId?: true
  }

  export type ImagesMinAggregateInputType = {
    id?: true
    path?: true
    description?: true
    questionnaireId?: true
  }

  export type ImagesMaxAggregateInputType = {
    id?: true
    path?: true
    description?: true
    questionnaireId?: true
  }

  export type ImagesCountAggregateInputType = {
    id?: true
    path?: true
    description?: true
    questionnaireId?: true
    _all?: true
  }

  export type ImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to aggregate.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagesMaxAggregateInputType
  }

  export type GetImagesAggregateType<T extends ImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImages[P]>
      : GetScalarType<T[P], AggregateImages[P]>
  }




  export type ImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagesWhereInput
    orderBy?: ImagesOrderByWithAggregationInput | ImagesOrderByWithAggregationInput[]
    by: ImagesScalarFieldEnum[] | ImagesScalarFieldEnum
    having?: ImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagesCountAggregateInputType | true
    _avg?: ImagesAvgAggregateInputType
    _sum?: ImagesSumAggregateInputType
    _min?: ImagesMinAggregateInputType
    _max?: ImagesMaxAggregateInputType
  }

  export type ImagesGroupByOutputType = {
    id: number
    path: string
    description: string
    questionnaireId: number
    _count: ImagesCountAggregateOutputType | null
    _avg: ImagesAvgAggregateOutputType | null
    _sum: ImagesSumAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  type GetImagesGroupByPayload<T extends ImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagesGroupByOutputType[P]>
            : GetScalarType<T[P], ImagesGroupByOutputType[P]>
        }
      >
    >


  export type ImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    description?: boolean
    questionnaireId?: boolean
    Questionnaire?: boolean | QuestionnaireDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>

  export type ImagesSelectScalar = {
    id?: boolean
    path?: boolean
    description?: boolean
    questionnaireId?: boolean
  }

  export type ImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Questionnaire?: boolean | QuestionnaireDefaultArgs<ExtArgs>
  }


  export type $ImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Images"
    objects: {
      Questionnaire: Prisma.$QuestionnairePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      path: string
      description: string
      questionnaireId: number
    }, ExtArgs["result"]["images"]>
    composites: {}
  }


  type ImagesGetPayload<S extends boolean | null | undefined | ImagesDefaultArgs> = $Result.GetResult<Prisma.$ImagesPayload, S>

  type ImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ImagesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ImagesCountAggregateInputType | true
    }

  export interface ImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Images'], meta: { name: 'Images' } }
    /**
     * Find zero or one Images that matches the filter.
     * @param {ImagesFindUniqueArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImagesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ImagesFindUniqueArgs<ExtArgs>>
    ): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Images that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ImagesFindUniqueOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ImagesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImagesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindFirstArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImagesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ImagesFindFirstArgs<ExtArgs>>
    ): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindFirstOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ImagesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImagesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.images.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imagesWithIdOnly = await prisma.images.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ImagesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImagesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Images.
     * @param {ImagesCreateArgs} args - Arguments to create a Images.
     * @example
     * // Create one Images
     * const Images = await prisma.images.create({
     *   data: {
     *     // ... data to create a Images
     *   }
     * })
     * 
    **/
    create<T extends ImagesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ImagesCreateArgs<ExtArgs>>
    ): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Images.
     *     @param {ImagesCreateManyArgs} args - Arguments to create many Images.
     *     @example
     *     // Create many Images
     *     const images = await prisma.images.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImagesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImagesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Images.
     * @param {ImagesDeleteArgs} args - Arguments to delete one Images.
     * @example
     * // Delete one Images
     * const Images = await prisma.images.delete({
     *   where: {
     *     // ... filter to delete one Images
     *   }
     * })
     * 
    **/
    delete<T extends ImagesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ImagesDeleteArgs<ExtArgs>>
    ): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Images.
     * @param {ImagesUpdateArgs} args - Arguments to update one Images.
     * @example
     * // Update one Images
     * const images = await prisma.images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImagesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ImagesUpdateArgs<ExtArgs>>
    ): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Images.
     * @param {ImagesDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImagesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImagesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const images = await prisma.images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImagesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ImagesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Images.
     * @param {ImagesUpsertArgs} args - Arguments to update or create a Images.
     * @example
     * // Update or create a Images
     * const images = await prisma.images.upsert({
     *   create: {
     *     // ... data to create a Images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Images we want to update
     *   }
     * })
    **/
    upsert<T extends ImagesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ImagesUpsertArgs<ExtArgs>>
    ): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.images.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImagesCountArgs>(
      args?: Subset<T, ImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImagesAggregateArgs>(args: Subset<T, ImagesAggregateArgs>): Prisma.PrismaPromise<GetImagesAggregateType<T>>

    /**
     * Group by Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImagesGroupByArgs['orderBy'] }
        : { orderBy?: ImagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Images model
   */
  readonly fields: ImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Questionnaire<T extends QuestionnaireDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionnaireDefaultArgs<ExtArgs>>): Prisma__QuestionnaireClient<$Result.GetResult<Prisma.$QuestionnairePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Images model
   */ 
  interface ImagesFieldRefs {
    readonly id: FieldRef<"Images", 'Int'>
    readonly path: FieldRef<"Images", 'String'>
    readonly description: FieldRef<"Images", 'String'>
    readonly questionnaireId: FieldRef<"Images", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Images findUnique
   */
  export type ImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where: ImagesWhereUniqueInput
  }


  /**
   * Images findUniqueOrThrow
   */
  export type ImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where: ImagesWhereUniqueInput
  }


  /**
   * Images findFirst
   */
  export type ImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }


  /**
   * Images findFirstOrThrow
   */
  export type ImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }


  /**
   * Images findMany
   */
  export type ImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }


  /**
   * Images create
   */
  export type ImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Images.
     */
    data: XOR<ImagesCreateInput, ImagesUncheckedCreateInput>
  }


  /**
   * Images createMany
   */
  export type ImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImagesCreateManyInput | ImagesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Images update
   */
  export type ImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Images.
     */
    data: XOR<ImagesUpdateInput, ImagesUncheckedUpdateInput>
    /**
     * Choose, which Images to update.
     */
    where: ImagesWhereUniqueInput
  }


  /**
   * Images updateMany
   */
  export type ImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImagesUpdateManyMutationInput, ImagesUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImagesWhereInput
  }


  /**
   * Images upsert
   */
  export type ImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Images to update in case it exists.
     */
    where: ImagesWhereUniqueInput
    /**
     * In case the Images found by the `where` argument doesn't exist, create a new Images with this data.
     */
    create: XOR<ImagesCreateInput, ImagesUncheckedCreateInput>
    /**
     * In case the Images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImagesUpdateInput, ImagesUncheckedUpdateInput>
  }


  /**
   * Images delete
   */
  export type ImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter which Images to delete.
     */
    where: ImagesWhereUniqueInput
  }


  /**
   * Images deleteMany
   */
  export type ImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImagesWhereInput
  }


  /**
   * Images without action
   */
  export type ImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImagesInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const QuestionnaireScalarFieldEnum: {
    id: 'id',
    distributor: 'distributor',
    status: 'status',
    comment: 'comment',
    created_date: 'created_date',
    updated_date: 'updated_date'
  };

  export type QuestionnaireScalarFieldEnum = (typeof QuestionnaireScalarFieldEnum)[keyof typeof QuestionnaireScalarFieldEnum]


  export const DistributorEmployeeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    surname: 'surname',
    lastname: 'lastname',
    phone: 'phone',
    email: 'email',
    questionnaireId: 'questionnaireId'
  };

  export type DistributorEmployeeScalarFieldEnum = (typeof DistributorEmployeeScalarFieldEnum)[keyof typeof DistributorEmployeeScalarFieldEnum]


  export const DataStoScalarFieldEnum: {
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

  export type DataStoScalarFieldEnum = (typeof DataStoScalarFieldEnum)[keyof typeof DataStoScalarFieldEnum]


  export const IInnScalarFieldEnum: {
    id: 'id',
    inn: 'inn',
    questionnaireId: 'questionnaireId'
  };

  export type IInnScalarFieldEnum = (typeof IInnScalarFieldEnum)[keyof typeof IInnScalarFieldEnum]


  export const ManagerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    surname: 'surname',
    lastname: 'lastname',
    phone: 'phone',
    email: 'email',
    questionnaireId: 'questionnaireId'
  };

  export type ManagerScalarFieldEnum = (typeof ManagerScalarFieldEnum)[keyof typeof ManagerScalarFieldEnum]


  export const SignatoryManagerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    surname: 'surname',
    lastname: 'lastname',
    phone: 'phone',
    email: 'email',
    questionnaireId: 'questionnaireId'
  };

  export type SignatoryManagerScalarFieldEnum = (typeof SignatoryManagerScalarFieldEnum)[keyof typeof SignatoryManagerScalarFieldEnum]


  export const LiftsScalarFieldEnum: {
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

  export type LiftsScalarFieldEnum = (typeof LiftsScalarFieldEnum)[keyof typeof LiftsScalarFieldEnum]


  export const ConfirmDataScalarFieldEnum: {
    id: 'id',
    loginOne: 'loginOne',
    loginTwo: 'loginTwo',
    lifts: 'lifts',
    questionnaireId: 'questionnaireId'
  };

  export type ConfirmDataScalarFieldEnum = (typeof ConfirmDataScalarFieldEnum)[keyof typeof ConfirmDataScalarFieldEnum]


  export const ImagesScalarFieldEnum: {
    id: 'id',
    path: 'path',
    description: 'description',
    questionnaireId: 'questionnaireId'
  };

  export type ImagesScalarFieldEnum = (typeof ImagesScalarFieldEnum)[keyof typeof ImagesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type QuestionnaireWhereInput = {
    AND?: QuestionnaireWhereInput | QuestionnaireWhereInput[]
    OR?: QuestionnaireWhereInput[]
    NOT?: QuestionnaireWhereInput | QuestionnaireWhereInput[]
    id?: IntFilter<"Questionnaire"> | number
    distributor?: StringFilter<"Questionnaire"> | string
    status?: EnumStatusFilter<"Questionnaire"> | $Enums.Status
    comment?: StringNullableFilter<"Questionnaire"> | string | null
    created_date?: DateTimeFilter<"Questionnaire"> | Date | string
    updated_date?: DateTimeFilter<"Questionnaire"> | Date | string
    distributor_employee?: XOR<DistributorEmployeeNullableRelationFilter, DistributorEmployeeWhereInput> | null
    data_sto?: XOR<DataStoNullableRelationFilter, DataStoWhereInput> | null
    inns?: IInnListRelationFilter
    images?: ImagesListRelationFilter
    lifts?: XOR<LiftsNullableRelationFilter, LiftsWhereInput> | null
    manager?: XOR<ManagerNullableRelationFilter, ManagerWhereInput> | null
    signatoryManager?: XOR<SignatoryManagerNullableRelationFilter, SignatoryManagerWhereInput> | null
    confirmData?: XOR<ConfirmDataNullableRelationFilter, ConfirmDataWhereInput> | null
  }

  export type QuestionnaireOrderByWithRelationInput = {
    id?: SortOrder
    distributor?: SortOrder
    status?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_date?: SortOrder
    updated_date?: SortOrder
    distributor_employee?: DistributorEmployeeOrderByWithRelationInput
    data_sto?: DataStoOrderByWithRelationInput
    inns?: IInnOrderByRelationAggregateInput
    images?: ImagesOrderByRelationAggregateInput
    lifts?: LiftsOrderByWithRelationInput
    manager?: ManagerOrderByWithRelationInput
    signatoryManager?: SignatoryManagerOrderByWithRelationInput
    confirmData?: ConfirmDataOrderByWithRelationInput
  }

  export type QuestionnaireWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuestionnaireWhereInput | QuestionnaireWhereInput[]
    OR?: QuestionnaireWhereInput[]
    NOT?: QuestionnaireWhereInput | QuestionnaireWhereInput[]
    distributor?: StringFilter<"Questionnaire"> | string
    status?: EnumStatusFilter<"Questionnaire"> | $Enums.Status
    comment?: StringNullableFilter<"Questionnaire"> | string | null
    created_date?: DateTimeFilter<"Questionnaire"> | Date | string
    updated_date?: DateTimeFilter<"Questionnaire"> | Date | string
    distributor_employee?: XOR<DistributorEmployeeNullableRelationFilter, DistributorEmployeeWhereInput> | null
    data_sto?: XOR<DataStoNullableRelationFilter, DataStoWhereInput> | null
    inns?: IInnListRelationFilter
    images?: ImagesListRelationFilter
    lifts?: XOR<LiftsNullableRelationFilter, LiftsWhereInput> | null
    manager?: XOR<ManagerNullableRelationFilter, ManagerWhereInput> | null
    signatoryManager?: XOR<SignatoryManagerNullableRelationFilter, SignatoryManagerWhereInput> | null
    confirmData?: XOR<ConfirmDataNullableRelationFilter, ConfirmDataWhereInput> | null
  }, "id">

  export type QuestionnaireOrderByWithAggregationInput = {
    id?: SortOrder
    distributor?: SortOrder
    status?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_date?: SortOrder
    updated_date?: SortOrder
    _count?: QuestionnaireCountOrderByAggregateInput
    _avg?: QuestionnaireAvgOrderByAggregateInput
    _max?: QuestionnaireMaxOrderByAggregateInput
    _min?: QuestionnaireMinOrderByAggregateInput
    _sum?: QuestionnaireSumOrderByAggregateInput
  }

  export type QuestionnaireScalarWhereWithAggregatesInput = {
    AND?: QuestionnaireScalarWhereWithAggregatesInput | QuestionnaireScalarWhereWithAggregatesInput[]
    OR?: QuestionnaireScalarWhereWithAggregatesInput[]
    NOT?: QuestionnaireScalarWhereWithAggregatesInput | QuestionnaireScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Questionnaire"> | number
    distributor?: StringWithAggregatesFilter<"Questionnaire"> | string
    status?: EnumStatusWithAggregatesFilter<"Questionnaire"> | $Enums.Status
    comment?: StringNullableWithAggregatesFilter<"Questionnaire"> | string | null
    created_date?: DateTimeWithAggregatesFilter<"Questionnaire"> | Date | string
    updated_date?: DateTimeWithAggregatesFilter<"Questionnaire"> | Date | string
  }

  export type DistributorEmployeeWhereInput = {
    AND?: DistributorEmployeeWhereInput | DistributorEmployeeWhereInput[]
    OR?: DistributorEmployeeWhereInput[]
    NOT?: DistributorEmployeeWhereInput | DistributorEmployeeWhereInput[]
    id?: IntFilter<"DistributorEmployee"> | number
    name?: StringFilter<"DistributorEmployee"> | string
    surname?: StringFilter<"DistributorEmployee"> | string
    lastname?: StringFilter<"DistributorEmployee"> | string
    phone?: StringFilter<"DistributorEmployee"> | string
    email?: StringFilter<"DistributorEmployee"> | string
    questionnaireId?: IntFilter<"DistributorEmployee"> | number
    questionnaire?: XOR<QuestionnaireRelationFilter, QuestionnaireWhereInput>
  }

  export type DistributorEmployeeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    lastname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    questionnaireId?: SortOrder
    questionnaire?: QuestionnaireOrderByWithRelationInput
  }

  export type DistributorEmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    questionnaireId?: number
    AND?: DistributorEmployeeWhereInput | DistributorEmployeeWhereInput[]
    OR?: DistributorEmployeeWhereInput[]
    NOT?: DistributorEmployeeWhereInput | DistributorEmployeeWhereInput[]
    name?: StringFilter<"DistributorEmployee"> | string
    surname?: StringFilter<"DistributorEmployee"> | string
    lastname?: StringFilter<"DistributorEmployee"> | string
    phone?: StringFilter<"DistributorEmployee"> | string
    email?: StringFilter<"DistributorEmployee"> | string
    questionnaire?: XOR<QuestionnaireRelationFilter, QuestionnaireWhereInput>
  }, "id" | "questionnaireId">

  export type DistributorEmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    lastname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    questionnaireId?: SortOrder
    _count?: DistributorEmployeeCountOrderByAggregateInput
    _avg?: DistributorEmployeeAvgOrderByAggregateInput
    _max?: DistributorEmployeeMaxOrderByAggregateInput
    _min?: DistributorEmployeeMinOrderByAggregateInput
    _sum?: DistributorEmployeeSumOrderByAggregateInput
  }

  export type DistributorEmployeeScalarWhereWithAggregatesInput = {
    AND?: DistributorEmployeeScalarWhereWithAggregatesInput | DistributorEmployeeScalarWhereWithAggregatesInput[]
    OR?: DistributorEmployeeScalarWhereWithAggregatesInput[]
    NOT?: DistributorEmployeeScalarWhereWithAggregatesInput | DistributorEmployeeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DistributorEmployee"> | number
    name?: StringWithAggregatesFilter<"DistributorEmployee"> | string
    surname?: StringWithAggregatesFilter<"DistributorEmployee"> | string
    lastname?: StringWithAggregatesFilter<"DistributorEmployee"> | string
    phone?: StringWithAggregatesFilter<"DistributorEmployee"> | string
    email?: StringWithAggregatesFilter<"DistributorEmployee"> | string
    questionnaireId?: IntWithAggregatesFilter<"DistributorEmployee"> | number
  }

  export type DataStoWhereInput = {
    AND?: DataStoWhereInput | DataStoWhereInput[]
    OR?: DataStoWhereInput[]
    NOT?: DataStoWhereInput | DataStoWhereInput[]
    id?: IntFilter<"DataSto"> | number
    name?: StringFilter<"DataSto"> | string
    city?: StringFilter<"DataSto"> | string
    area?: StringFilter<"DataSto"> | string
    address?: StringFilter<"DataSto"> | string
    code_client_avtoevro?: StringFilter<"DataSto"> | string
    code_client_avtorus?: StringFilter<"DataSto"> | string
    code_client_rossko?: StringFilter<"DataSto"> | string
    questionnaireId?: IntFilter<"DataSto"> | number
    questionnaire?: XOR<QuestionnaireRelationFilter, QuestionnaireWhereInput>
  }

  export type DataStoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    area?: SortOrder
    address?: SortOrder
    code_client_avtoevro?: SortOrder
    code_client_avtorus?: SortOrder
    code_client_rossko?: SortOrder
    questionnaireId?: SortOrder
    questionnaire?: QuestionnaireOrderByWithRelationInput
  }

  export type DataStoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    questionnaireId?: number
    AND?: DataStoWhereInput | DataStoWhereInput[]
    OR?: DataStoWhereInput[]
    NOT?: DataStoWhereInput | DataStoWhereInput[]
    name?: StringFilter<"DataSto"> | string
    city?: StringFilter<"DataSto"> | string
    area?: StringFilter<"DataSto"> | string
    address?: StringFilter<"DataSto"> | string
    code_client_avtoevro?: StringFilter<"DataSto"> | string
    code_client_avtorus?: StringFilter<"DataSto"> | string
    code_client_rossko?: StringFilter<"DataSto"> | string
    questionnaire?: XOR<QuestionnaireRelationFilter, QuestionnaireWhereInput>
  }, "id" | "questionnaireId">

  export type DataStoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    area?: SortOrder
    address?: SortOrder
    code_client_avtoevro?: SortOrder
    code_client_avtorus?: SortOrder
    code_client_rossko?: SortOrder
    questionnaireId?: SortOrder
    _count?: DataStoCountOrderByAggregateInput
    _avg?: DataStoAvgOrderByAggregateInput
    _max?: DataStoMaxOrderByAggregateInput
    _min?: DataStoMinOrderByAggregateInput
    _sum?: DataStoSumOrderByAggregateInput
  }

  export type DataStoScalarWhereWithAggregatesInput = {
    AND?: DataStoScalarWhereWithAggregatesInput | DataStoScalarWhereWithAggregatesInput[]
    OR?: DataStoScalarWhereWithAggregatesInput[]
    NOT?: DataStoScalarWhereWithAggregatesInput | DataStoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DataSto"> | number
    name?: StringWithAggregatesFilter<"DataSto"> | string
    city?: StringWithAggregatesFilter<"DataSto"> | string
    area?: StringWithAggregatesFilter<"DataSto"> | string
    address?: StringWithAggregatesFilter<"DataSto"> | string
    code_client_avtoevro?: StringWithAggregatesFilter<"DataSto"> | string
    code_client_avtorus?: StringWithAggregatesFilter<"DataSto"> | string
    code_client_rossko?: StringWithAggregatesFilter<"DataSto"> | string
    questionnaireId?: IntWithAggregatesFilter<"DataSto"> | number
  }

  export type IInnWhereInput = {
    AND?: IInnWhereInput | IInnWhereInput[]
    OR?: IInnWhereInput[]
    NOT?: IInnWhereInput | IInnWhereInput[]
    id?: IntFilter<"IInn"> | number
    inn?: StringFilter<"IInn"> | string
    questionnaireId?: IntFilter<"IInn"> | number
    questionnaire?: XOR<QuestionnaireRelationFilter, QuestionnaireWhereInput>
  }

  export type IInnOrderByWithRelationInput = {
    id?: SortOrder
    inn?: SortOrder
    questionnaireId?: SortOrder
    questionnaire?: QuestionnaireOrderByWithRelationInput
  }

  export type IInnWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IInnWhereInput | IInnWhereInput[]
    OR?: IInnWhereInput[]
    NOT?: IInnWhereInput | IInnWhereInput[]
    inn?: StringFilter<"IInn"> | string
    questionnaireId?: IntFilter<"IInn"> | number
    questionnaire?: XOR<QuestionnaireRelationFilter, QuestionnaireWhereInput>
  }, "id">

  export type IInnOrderByWithAggregationInput = {
    id?: SortOrder
    inn?: SortOrder
    questionnaireId?: SortOrder
    _count?: IInnCountOrderByAggregateInput
    _avg?: IInnAvgOrderByAggregateInput
    _max?: IInnMaxOrderByAggregateInput
    _min?: IInnMinOrderByAggregateInput
    _sum?: IInnSumOrderByAggregateInput
  }

  export type IInnScalarWhereWithAggregatesInput = {
    AND?: IInnScalarWhereWithAggregatesInput | IInnScalarWhereWithAggregatesInput[]
    OR?: IInnScalarWhereWithAggregatesInput[]
    NOT?: IInnScalarWhereWithAggregatesInput | IInnScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IInn"> | number
    inn?: StringWithAggregatesFilter<"IInn"> | string
    questionnaireId?: IntWithAggregatesFilter<"IInn"> | number
  }

  export type ManagerWhereInput = {
    AND?: ManagerWhereInput | ManagerWhereInput[]
    OR?: ManagerWhereInput[]
    NOT?: ManagerWhereInput | ManagerWhereInput[]
    id?: IntFilter<"Manager"> | number
    name?: StringFilter<"Manager"> | string
    surname?: StringFilter<"Manager"> | string
    lastname?: StringFilter<"Manager"> | string
    phone?: StringFilter<"Manager"> | string
    email?: StringFilter<"Manager"> | string
    questionnaireId?: IntFilter<"Manager"> | number
    questionnaire?: XOR<QuestionnaireRelationFilter, QuestionnaireWhereInput>
  }

  export type ManagerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    lastname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    questionnaireId?: SortOrder
    questionnaire?: QuestionnaireOrderByWithRelationInput
  }

  export type ManagerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    questionnaireId?: number
    AND?: ManagerWhereInput | ManagerWhereInput[]
    OR?: ManagerWhereInput[]
    NOT?: ManagerWhereInput | ManagerWhereInput[]
    name?: StringFilter<"Manager"> | string
    surname?: StringFilter<"Manager"> | string
    lastname?: StringFilter<"Manager"> | string
    phone?: StringFilter<"Manager"> | string
    email?: StringFilter<"Manager"> | string
    questionnaire?: XOR<QuestionnaireRelationFilter, QuestionnaireWhereInput>
  }, "id" | "questionnaireId">

  export type ManagerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    lastname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    questionnaireId?: SortOrder
    _count?: ManagerCountOrderByAggregateInput
    _avg?: ManagerAvgOrderByAggregateInput
    _max?: ManagerMaxOrderByAggregateInput
    _min?: ManagerMinOrderByAggregateInput
    _sum?: ManagerSumOrderByAggregateInput
  }

  export type ManagerScalarWhereWithAggregatesInput = {
    AND?: ManagerScalarWhereWithAggregatesInput | ManagerScalarWhereWithAggregatesInput[]
    OR?: ManagerScalarWhereWithAggregatesInput[]
    NOT?: ManagerScalarWhereWithAggregatesInput | ManagerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Manager"> | number
    name?: StringWithAggregatesFilter<"Manager"> | string
    surname?: StringWithAggregatesFilter<"Manager"> | string
    lastname?: StringWithAggregatesFilter<"Manager"> | string
    phone?: StringWithAggregatesFilter<"Manager"> | string
    email?: StringWithAggregatesFilter<"Manager"> | string
    questionnaireId?: IntWithAggregatesFilter<"Manager"> | number
  }

  export type SignatoryManagerWhereInput = {
    AND?: SignatoryManagerWhereInput | SignatoryManagerWhereInput[]
    OR?: SignatoryManagerWhereInput[]
    NOT?: SignatoryManagerWhereInput | SignatoryManagerWhereInput[]
    id?: IntFilter<"SignatoryManager"> | number
    name?: StringFilter<"SignatoryManager"> | string
    surname?: StringFilter<"SignatoryManager"> | string
    lastname?: StringFilter<"SignatoryManager"> | string
    phone?: StringFilter<"SignatoryManager"> | string
    email?: StringFilter<"SignatoryManager"> | string
    questionnaireId?: IntFilter<"SignatoryManager"> | number
    questionnaire?: XOR<QuestionnaireRelationFilter, QuestionnaireWhereInput>
  }

  export type SignatoryManagerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    lastname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    questionnaireId?: SortOrder
    questionnaire?: QuestionnaireOrderByWithRelationInput
  }

  export type SignatoryManagerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    questionnaireId?: number
    AND?: SignatoryManagerWhereInput | SignatoryManagerWhereInput[]
    OR?: SignatoryManagerWhereInput[]
    NOT?: SignatoryManagerWhereInput | SignatoryManagerWhereInput[]
    name?: StringFilter<"SignatoryManager"> | string
    surname?: StringFilter<"SignatoryManager"> | string
    lastname?: StringFilter<"SignatoryManager"> | string
    phone?: StringFilter<"SignatoryManager"> | string
    email?: StringFilter<"SignatoryManager"> | string
    questionnaire?: XOR<QuestionnaireRelationFilter, QuestionnaireWhereInput>
  }, "id" | "questionnaireId">

  export type SignatoryManagerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    lastname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    questionnaireId?: SortOrder
    _count?: SignatoryManagerCountOrderByAggregateInput
    _avg?: SignatoryManagerAvgOrderByAggregateInput
    _max?: SignatoryManagerMaxOrderByAggregateInput
    _min?: SignatoryManagerMinOrderByAggregateInput
    _sum?: SignatoryManagerSumOrderByAggregateInput
  }

  export type SignatoryManagerScalarWhereWithAggregatesInput = {
    AND?: SignatoryManagerScalarWhereWithAggregatesInput | SignatoryManagerScalarWhereWithAggregatesInput[]
    OR?: SignatoryManagerScalarWhereWithAggregatesInput[]
    NOT?: SignatoryManagerScalarWhereWithAggregatesInput | SignatoryManagerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SignatoryManager"> | number
    name?: StringWithAggregatesFilter<"SignatoryManager"> | string
    surname?: StringWithAggregatesFilter<"SignatoryManager"> | string
    lastname?: StringWithAggregatesFilter<"SignatoryManager"> | string
    phone?: StringWithAggregatesFilter<"SignatoryManager"> | string
    email?: StringWithAggregatesFilter<"SignatoryManager"> | string
    questionnaireId?: IntWithAggregatesFilter<"SignatoryManager"> | number
  }

  export type LiftsWhereInput = {
    AND?: LiftsWhereInput | LiftsWhereInput[]
    OR?: LiftsWhereInput[]
    NOT?: LiftsWhereInput | LiftsWhereInput[]
    id?: IntFilter<"Lifts"> | number
    twoPostLiftScissors?: IntFilter<"Lifts"> | number
    fourPostLift?: IntFilter<"Lifts"> | number
    fourPostLiftTraverse?: IntFilter<"Lifts"> | number
    pits?: IntFilter<"Lifts"> | number
    pitsEquippedTraverse?: IntFilter<"Lifts"> | number
    postElectronicDiagnostic?: IntFilter<"Lifts"> | number
    postAdditionalEquipment?: IntFilter<"Lifts"> | number
    questionnaireId?: IntFilter<"Lifts"> | number
    questionnaire?: XOR<QuestionnaireRelationFilter, QuestionnaireWhereInput>
  }

  export type LiftsOrderByWithRelationInput = {
    id?: SortOrder
    twoPostLiftScissors?: SortOrder
    fourPostLift?: SortOrder
    fourPostLiftTraverse?: SortOrder
    pits?: SortOrder
    pitsEquippedTraverse?: SortOrder
    postElectronicDiagnostic?: SortOrder
    postAdditionalEquipment?: SortOrder
    questionnaireId?: SortOrder
    questionnaire?: QuestionnaireOrderByWithRelationInput
  }

  export type LiftsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    questionnaireId?: number
    AND?: LiftsWhereInput | LiftsWhereInput[]
    OR?: LiftsWhereInput[]
    NOT?: LiftsWhereInput | LiftsWhereInput[]
    twoPostLiftScissors?: IntFilter<"Lifts"> | number
    fourPostLift?: IntFilter<"Lifts"> | number
    fourPostLiftTraverse?: IntFilter<"Lifts"> | number
    pits?: IntFilter<"Lifts"> | number
    pitsEquippedTraverse?: IntFilter<"Lifts"> | number
    postElectronicDiagnostic?: IntFilter<"Lifts"> | number
    postAdditionalEquipment?: IntFilter<"Lifts"> | number
    questionnaire?: XOR<QuestionnaireRelationFilter, QuestionnaireWhereInput>
  }, "id" | "questionnaireId">

  export type LiftsOrderByWithAggregationInput = {
    id?: SortOrder
    twoPostLiftScissors?: SortOrder
    fourPostLift?: SortOrder
    fourPostLiftTraverse?: SortOrder
    pits?: SortOrder
    pitsEquippedTraverse?: SortOrder
    postElectronicDiagnostic?: SortOrder
    postAdditionalEquipment?: SortOrder
    questionnaireId?: SortOrder
    _count?: LiftsCountOrderByAggregateInput
    _avg?: LiftsAvgOrderByAggregateInput
    _max?: LiftsMaxOrderByAggregateInput
    _min?: LiftsMinOrderByAggregateInput
    _sum?: LiftsSumOrderByAggregateInput
  }

  export type LiftsScalarWhereWithAggregatesInput = {
    AND?: LiftsScalarWhereWithAggregatesInput | LiftsScalarWhereWithAggregatesInput[]
    OR?: LiftsScalarWhereWithAggregatesInput[]
    NOT?: LiftsScalarWhereWithAggregatesInput | LiftsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lifts"> | number
    twoPostLiftScissors?: IntWithAggregatesFilter<"Lifts"> | number
    fourPostLift?: IntWithAggregatesFilter<"Lifts"> | number
    fourPostLiftTraverse?: IntWithAggregatesFilter<"Lifts"> | number
    pits?: IntWithAggregatesFilter<"Lifts"> | number
    pitsEquippedTraverse?: IntWithAggregatesFilter<"Lifts"> | number
    postElectronicDiagnostic?: IntWithAggregatesFilter<"Lifts"> | number
    postAdditionalEquipment?: IntWithAggregatesFilter<"Lifts"> | number
    questionnaireId?: IntWithAggregatesFilter<"Lifts"> | number
  }

  export type ConfirmDataWhereInput = {
    AND?: ConfirmDataWhereInput | ConfirmDataWhereInput[]
    OR?: ConfirmDataWhereInput[]
    NOT?: ConfirmDataWhereInput | ConfirmDataWhereInput[]
    id?: IntFilter<"ConfirmData"> | number
    loginOne?: StringFilter<"ConfirmData"> | string
    loginTwo?: StringFilter<"ConfirmData"> | string
    lifts?: IntFilter<"ConfirmData"> | number
    questionnaireId?: IntFilter<"ConfirmData"> | number
    questionnaire?: XOR<QuestionnaireRelationFilter, QuestionnaireWhereInput>
  }

  export type ConfirmDataOrderByWithRelationInput = {
    id?: SortOrder
    loginOne?: SortOrder
    loginTwo?: SortOrder
    lifts?: SortOrder
    questionnaireId?: SortOrder
    questionnaire?: QuestionnaireOrderByWithRelationInput
  }

  export type ConfirmDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    questionnaireId?: number
    AND?: ConfirmDataWhereInput | ConfirmDataWhereInput[]
    OR?: ConfirmDataWhereInput[]
    NOT?: ConfirmDataWhereInput | ConfirmDataWhereInput[]
    loginOne?: StringFilter<"ConfirmData"> | string
    loginTwo?: StringFilter<"ConfirmData"> | string
    lifts?: IntFilter<"ConfirmData"> | number
    questionnaire?: XOR<QuestionnaireRelationFilter, QuestionnaireWhereInput>
  }, "id" | "questionnaireId">

  export type ConfirmDataOrderByWithAggregationInput = {
    id?: SortOrder
    loginOne?: SortOrder
    loginTwo?: SortOrder
    lifts?: SortOrder
    questionnaireId?: SortOrder
    _count?: ConfirmDataCountOrderByAggregateInput
    _avg?: ConfirmDataAvgOrderByAggregateInput
    _max?: ConfirmDataMaxOrderByAggregateInput
    _min?: ConfirmDataMinOrderByAggregateInput
    _sum?: ConfirmDataSumOrderByAggregateInput
  }

  export type ConfirmDataScalarWhereWithAggregatesInput = {
    AND?: ConfirmDataScalarWhereWithAggregatesInput | ConfirmDataScalarWhereWithAggregatesInput[]
    OR?: ConfirmDataScalarWhereWithAggregatesInput[]
    NOT?: ConfirmDataScalarWhereWithAggregatesInput | ConfirmDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ConfirmData"> | number
    loginOne?: StringWithAggregatesFilter<"ConfirmData"> | string
    loginTwo?: StringWithAggregatesFilter<"ConfirmData"> | string
    lifts?: IntWithAggregatesFilter<"ConfirmData"> | number
    questionnaireId?: IntWithAggregatesFilter<"ConfirmData"> | number
  }

  export type ImagesWhereInput = {
    AND?: ImagesWhereInput | ImagesWhereInput[]
    OR?: ImagesWhereInput[]
    NOT?: ImagesWhereInput | ImagesWhereInput[]
    id?: IntFilter<"Images"> | number
    path?: StringFilter<"Images"> | string
    description?: StringFilter<"Images"> | string
    questionnaireId?: IntFilter<"Images"> | number
    Questionnaire?: XOR<QuestionnaireRelationFilter, QuestionnaireWhereInput>
  }

  export type ImagesOrderByWithRelationInput = {
    id?: SortOrder
    path?: SortOrder
    description?: SortOrder
    questionnaireId?: SortOrder
    Questionnaire?: QuestionnaireOrderByWithRelationInput
  }

  export type ImagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    questionnaireId?: number
    AND?: ImagesWhereInput | ImagesWhereInput[]
    OR?: ImagesWhereInput[]
    NOT?: ImagesWhereInput | ImagesWhereInput[]
    path?: StringFilter<"Images"> | string
    description?: StringFilter<"Images"> | string
    Questionnaire?: XOR<QuestionnaireRelationFilter, QuestionnaireWhereInput>
  }, "id" | "questionnaireId">

  export type ImagesOrderByWithAggregationInput = {
    id?: SortOrder
    path?: SortOrder
    description?: SortOrder
    questionnaireId?: SortOrder
    _count?: ImagesCountOrderByAggregateInput
    _avg?: ImagesAvgOrderByAggregateInput
    _max?: ImagesMaxOrderByAggregateInput
    _min?: ImagesMinOrderByAggregateInput
    _sum?: ImagesSumOrderByAggregateInput
  }

  export type ImagesScalarWhereWithAggregatesInput = {
    AND?: ImagesScalarWhereWithAggregatesInput | ImagesScalarWhereWithAggregatesInput[]
    OR?: ImagesScalarWhereWithAggregatesInput[]
    NOT?: ImagesScalarWhereWithAggregatesInput | ImagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Images"> | number
    path?: StringWithAggregatesFilter<"Images"> | string
    description?: StringWithAggregatesFilter<"Images"> | string
    questionnaireId?: IntWithAggregatesFilter<"Images"> | number
  }

  export type QuestionnaireCreateInput = {
    distributor: string
    status: $Enums.Status
    comment?: string | null
    created_date: Date | string
    updated_date: Date | string
    distributor_employee?: DistributorEmployeeCreateNestedOneWithoutQuestionnaireInput
    data_sto?: DataStoCreateNestedOneWithoutQuestionnaireInput
    inns?: IInnCreateNestedManyWithoutQuestionnaireInput
    images?: ImagesCreateNestedManyWithoutQuestionnaireInput
    lifts?: LiftsCreateNestedOneWithoutQuestionnaireInput
    manager?: ManagerCreateNestedOneWithoutQuestionnaireInput
    signatoryManager?: SignatoryManagerCreateNestedOneWithoutQuestionnaireInput
    confirmData?: ConfirmDataCreateNestedOneWithoutQuestionnaireInput
  }

  export type QuestionnaireUncheckedCreateInput = {
    id?: number
    distributor: string
    status: $Enums.Status
    comment?: string | null
    created_date: Date | string
    updated_date: Date | string
    distributor_employee?: DistributorEmployeeUncheckedCreateNestedOneWithoutQuestionnaireInput
    data_sto?: DataStoUncheckedCreateNestedOneWithoutQuestionnaireInput
    inns?: IInnUncheckedCreateNestedManyWithoutQuestionnaireInput
    images?: ImagesUncheckedCreateNestedManyWithoutQuestionnaireInput
    lifts?: LiftsUncheckedCreateNestedOneWithoutQuestionnaireInput
    manager?: ManagerUncheckedCreateNestedOneWithoutQuestionnaireInput
    signatoryManager?: SignatoryManagerUncheckedCreateNestedOneWithoutQuestionnaireInput
    confirmData?: ConfirmDataUncheckedCreateNestedOneWithoutQuestionnaireInput
  }

  export type QuestionnaireUpdateInput = {
    distributor?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    distributor_employee?: DistributorEmployeeUpdateOneWithoutQuestionnaireNestedInput
    data_sto?: DataStoUpdateOneWithoutQuestionnaireNestedInput
    inns?: IInnUpdateManyWithoutQuestionnaireNestedInput
    images?: ImagesUpdateManyWithoutQuestionnaireNestedInput
    lifts?: LiftsUpdateOneWithoutQuestionnaireNestedInput
    manager?: ManagerUpdateOneWithoutQuestionnaireNestedInput
    signatoryManager?: SignatoryManagerUpdateOneWithoutQuestionnaireNestedInput
    confirmData?: ConfirmDataUpdateOneWithoutQuestionnaireNestedInput
  }

  export type QuestionnaireUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    distributor?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    distributor_employee?: DistributorEmployeeUncheckedUpdateOneWithoutQuestionnaireNestedInput
    data_sto?: DataStoUncheckedUpdateOneWithoutQuestionnaireNestedInput
    inns?: IInnUncheckedUpdateManyWithoutQuestionnaireNestedInput
    images?: ImagesUncheckedUpdateManyWithoutQuestionnaireNestedInput
    lifts?: LiftsUncheckedUpdateOneWithoutQuestionnaireNestedInput
    manager?: ManagerUncheckedUpdateOneWithoutQuestionnaireNestedInput
    signatoryManager?: SignatoryManagerUncheckedUpdateOneWithoutQuestionnaireNestedInput
    confirmData?: ConfirmDataUncheckedUpdateOneWithoutQuestionnaireNestedInput
  }

  export type QuestionnaireCreateManyInput = {
    id?: number
    distributor: string
    status: $Enums.Status
    comment?: string | null
    created_date: Date | string
    updated_date: Date | string
  }

  export type QuestionnaireUpdateManyMutationInput = {
    distributor?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionnaireUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    distributor?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistributorEmployeeCreateInput = {
    name: string
    surname: string
    lastname: string
    phone: string
    email: string
    questionnaire: QuestionnaireCreateNestedOneWithoutDistributor_employeeInput
  }

  export type DistributorEmployeeUncheckedCreateInput = {
    id?: number
    name: string
    surname: string
    lastname: string
    phone: string
    email: string
    questionnaireId: number
  }

  export type DistributorEmployeeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    questionnaire?: QuestionnaireUpdateOneRequiredWithoutDistributor_employeeNestedInput
  }

  export type DistributorEmployeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    questionnaireId?: IntFieldUpdateOperationsInput | number
  }

  export type DistributorEmployeeCreateManyInput = {
    id?: number
    name: string
    surname: string
    lastname: string
    phone: string
    email: string
    questionnaireId: number
  }

  export type DistributorEmployeeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type DistributorEmployeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    questionnaireId?: IntFieldUpdateOperationsInput | number
  }

  export type DataStoCreateInput = {
    name: string
    city: string
    area: string
    address: string
    code_client_avtoevro: string
    code_client_avtorus: string
    code_client_rossko: string
    questionnaire: QuestionnaireCreateNestedOneWithoutData_stoInput
  }

  export type DataStoUncheckedCreateInput = {
    id?: number
    name: string
    city: string
    area: string
    address: string
    code_client_avtoevro: string
    code_client_avtorus: string
    code_client_rossko: string
    questionnaireId: number
  }

  export type DataStoUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    code_client_avtoevro?: StringFieldUpdateOperationsInput | string
    code_client_avtorus?: StringFieldUpdateOperationsInput | string
    code_client_rossko?: StringFieldUpdateOperationsInput | string
    questionnaire?: QuestionnaireUpdateOneRequiredWithoutData_stoNestedInput
  }

  export type DataStoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    code_client_avtoevro?: StringFieldUpdateOperationsInput | string
    code_client_avtorus?: StringFieldUpdateOperationsInput | string
    code_client_rossko?: StringFieldUpdateOperationsInput | string
    questionnaireId?: IntFieldUpdateOperationsInput | number
  }

  export type DataStoCreateManyInput = {
    id?: number
    name: string
    city: string
    area: string
    address: string
    code_client_avtoevro: string
    code_client_avtorus: string
    code_client_rossko: string
    questionnaireId: number
  }

  export type DataStoUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    code_client_avtoevro?: StringFieldUpdateOperationsInput | string
    code_client_avtorus?: StringFieldUpdateOperationsInput | string
    code_client_rossko?: StringFieldUpdateOperationsInput | string
  }

  export type DataStoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    code_client_avtoevro?: StringFieldUpdateOperationsInput | string
    code_client_avtorus?: StringFieldUpdateOperationsInput | string
    code_client_rossko?: StringFieldUpdateOperationsInput | string
    questionnaireId?: IntFieldUpdateOperationsInput | number
  }

  export type IInnCreateInput = {
    inn: string
    questionnaire: QuestionnaireCreateNestedOneWithoutInnsInput
  }

  export type IInnUncheckedCreateInput = {
    id?: number
    inn: string
    questionnaireId: number
  }

  export type IInnUpdateInput = {
    inn?: StringFieldUpdateOperationsInput | string
    questionnaire?: QuestionnaireUpdateOneRequiredWithoutInnsNestedInput
  }

  export type IInnUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    inn?: StringFieldUpdateOperationsInput | string
    questionnaireId?: IntFieldUpdateOperationsInput | number
  }

  export type IInnCreateManyInput = {
    id?: number
    inn: string
    questionnaireId: number
  }

  export type IInnUpdateManyMutationInput = {
    inn?: StringFieldUpdateOperationsInput | string
  }

  export type IInnUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    inn?: StringFieldUpdateOperationsInput | string
    questionnaireId?: IntFieldUpdateOperationsInput | number
  }

  export type ManagerCreateInput = {
    name: string
    surname: string
    lastname: string
    phone: string
    email: string
    questionnaire: QuestionnaireCreateNestedOneWithoutManagerInput
  }

  export type ManagerUncheckedCreateInput = {
    id?: number
    name: string
    surname: string
    lastname: string
    phone: string
    email: string
    questionnaireId: number
  }

  export type ManagerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    questionnaire?: QuestionnaireUpdateOneRequiredWithoutManagerNestedInput
  }

  export type ManagerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    questionnaireId?: IntFieldUpdateOperationsInput | number
  }

  export type ManagerCreateManyInput = {
    id?: number
    name: string
    surname: string
    lastname: string
    phone: string
    email: string
    questionnaireId: number
  }

  export type ManagerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ManagerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    questionnaireId?: IntFieldUpdateOperationsInput | number
  }

  export type SignatoryManagerCreateInput = {
    name: string
    surname: string
    lastname: string
    phone: string
    email: string
    questionnaire: QuestionnaireCreateNestedOneWithoutSignatoryManagerInput
  }

  export type SignatoryManagerUncheckedCreateInput = {
    id?: number
    name: string
    surname: string
    lastname: string
    phone: string
    email: string
    questionnaireId: number
  }

  export type SignatoryManagerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    questionnaire?: QuestionnaireUpdateOneRequiredWithoutSignatoryManagerNestedInput
  }

  export type SignatoryManagerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    questionnaireId?: IntFieldUpdateOperationsInput | number
  }

  export type SignatoryManagerCreateManyInput = {
    id?: number
    name: string
    surname: string
    lastname: string
    phone: string
    email: string
    questionnaireId: number
  }

  export type SignatoryManagerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type SignatoryManagerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    questionnaireId?: IntFieldUpdateOperationsInput | number
  }

  export type LiftsCreateInput = {
    twoPostLiftScissors: number
    fourPostLift: number
    fourPostLiftTraverse: number
    pits: number
    pitsEquippedTraverse: number
    postElectronicDiagnostic: number
    postAdditionalEquipment: number
    questionnaire: QuestionnaireCreateNestedOneWithoutLiftsInput
  }

  export type LiftsUncheckedCreateInput = {
    id?: number
    twoPostLiftScissors: number
    fourPostLift: number
    fourPostLiftTraverse: number
    pits: number
    pitsEquippedTraverse: number
    postElectronicDiagnostic: number
    postAdditionalEquipment: number
    questionnaireId: number
  }

  export type LiftsUpdateInput = {
    twoPostLiftScissors?: IntFieldUpdateOperationsInput | number
    fourPostLift?: IntFieldUpdateOperationsInput | number
    fourPostLiftTraverse?: IntFieldUpdateOperationsInput | number
    pits?: IntFieldUpdateOperationsInput | number
    pitsEquippedTraverse?: IntFieldUpdateOperationsInput | number
    postElectronicDiagnostic?: IntFieldUpdateOperationsInput | number
    postAdditionalEquipment?: IntFieldUpdateOperationsInput | number
    questionnaire?: QuestionnaireUpdateOneRequiredWithoutLiftsNestedInput
  }

  export type LiftsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    twoPostLiftScissors?: IntFieldUpdateOperationsInput | number
    fourPostLift?: IntFieldUpdateOperationsInput | number
    fourPostLiftTraverse?: IntFieldUpdateOperationsInput | number
    pits?: IntFieldUpdateOperationsInput | number
    pitsEquippedTraverse?: IntFieldUpdateOperationsInput | number
    postElectronicDiagnostic?: IntFieldUpdateOperationsInput | number
    postAdditionalEquipment?: IntFieldUpdateOperationsInput | number
    questionnaireId?: IntFieldUpdateOperationsInput | number
  }

  export type LiftsCreateManyInput = {
    id?: number
    twoPostLiftScissors: number
    fourPostLift: number
    fourPostLiftTraverse: number
    pits: number
    pitsEquippedTraverse: number
    postElectronicDiagnostic: number
    postAdditionalEquipment: number
    questionnaireId: number
  }

  export type LiftsUpdateManyMutationInput = {
    twoPostLiftScissors?: IntFieldUpdateOperationsInput | number
    fourPostLift?: IntFieldUpdateOperationsInput | number
    fourPostLiftTraverse?: IntFieldUpdateOperationsInput | number
    pits?: IntFieldUpdateOperationsInput | number
    pitsEquippedTraverse?: IntFieldUpdateOperationsInput | number
    postElectronicDiagnostic?: IntFieldUpdateOperationsInput | number
    postAdditionalEquipment?: IntFieldUpdateOperationsInput | number
  }

  export type LiftsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    twoPostLiftScissors?: IntFieldUpdateOperationsInput | number
    fourPostLift?: IntFieldUpdateOperationsInput | number
    fourPostLiftTraverse?: IntFieldUpdateOperationsInput | number
    pits?: IntFieldUpdateOperationsInput | number
    pitsEquippedTraverse?: IntFieldUpdateOperationsInput | number
    postElectronicDiagnostic?: IntFieldUpdateOperationsInput | number
    postAdditionalEquipment?: IntFieldUpdateOperationsInput | number
    questionnaireId?: IntFieldUpdateOperationsInput | number
  }

  export type ConfirmDataCreateInput = {
    loginOne: string
    loginTwo: string
    lifts: number
    questionnaire: QuestionnaireCreateNestedOneWithoutConfirmDataInput
  }

  export type ConfirmDataUncheckedCreateInput = {
    id?: number
    loginOne: string
    loginTwo: string
    lifts: number
    questionnaireId: number
  }

  export type ConfirmDataUpdateInput = {
    loginOne?: StringFieldUpdateOperationsInput | string
    loginTwo?: StringFieldUpdateOperationsInput | string
    lifts?: IntFieldUpdateOperationsInput | number
    questionnaire?: QuestionnaireUpdateOneRequiredWithoutConfirmDataNestedInput
  }

  export type ConfirmDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    loginOne?: StringFieldUpdateOperationsInput | string
    loginTwo?: StringFieldUpdateOperationsInput | string
    lifts?: IntFieldUpdateOperationsInput | number
    questionnaireId?: IntFieldUpdateOperationsInput | number
  }

  export type ConfirmDataCreateManyInput = {
    id?: number
    loginOne: string
    loginTwo: string
    lifts: number
    questionnaireId: number
  }

  export type ConfirmDataUpdateManyMutationInput = {
    loginOne?: StringFieldUpdateOperationsInput | string
    loginTwo?: StringFieldUpdateOperationsInput | string
    lifts?: IntFieldUpdateOperationsInput | number
  }

  export type ConfirmDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    loginOne?: StringFieldUpdateOperationsInput | string
    loginTwo?: StringFieldUpdateOperationsInput | string
    lifts?: IntFieldUpdateOperationsInput | number
    questionnaireId?: IntFieldUpdateOperationsInput | number
  }

  export type ImagesCreateInput = {
    path: string
    description: string
    Questionnaire: QuestionnaireCreateNestedOneWithoutImagesInput
  }

  export type ImagesUncheckedCreateInput = {
    id?: number
    path: string
    description: string
    questionnaireId: number
  }

  export type ImagesUpdateInput = {
    path?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    Questionnaire?: QuestionnaireUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    questionnaireId?: IntFieldUpdateOperationsInput | number
  }

  export type ImagesCreateManyInput = {
    id?: number
    path: string
    description: string
    questionnaireId: number
  }

  export type ImagesUpdateManyMutationInput = {
    path?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ImagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    questionnaireId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DistributorEmployeeNullableRelationFilter = {
    is?: DistributorEmployeeWhereInput | null
    isNot?: DistributorEmployeeWhereInput | null
  }

  export type DataStoNullableRelationFilter = {
    is?: DataStoWhereInput | null
    isNot?: DataStoWhereInput | null
  }

  export type IInnListRelationFilter = {
    every?: IInnWhereInput
    some?: IInnWhereInput
    none?: IInnWhereInput
  }

  export type ImagesListRelationFilter = {
    every?: ImagesWhereInput
    some?: ImagesWhereInput
    none?: ImagesWhereInput
  }

  export type LiftsNullableRelationFilter = {
    is?: LiftsWhereInput | null
    isNot?: LiftsWhereInput | null
  }

  export type ManagerNullableRelationFilter = {
    is?: ManagerWhereInput | null
    isNot?: ManagerWhereInput | null
  }

  export type SignatoryManagerNullableRelationFilter = {
    is?: SignatoryManagerWhereInput | null
    isNot?: SignatoryManagerWhereInput | null
  }

  export type ConfirmDataNullableRelationFilter = {
    is?: ConfirmDataWhereInput | null
    isNot?: ConfirmDataWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type IInnOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionnaireCountOrderByAggregateInput = {
    id?: SortOrder
    distributor?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrder
  }

  export type QuestionnaireAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QuestionnaireMaxOrderByAggregateInput = {
    id?: SortOrder
    distributor?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrder
  }

  export type QuestionnaireMinOrderByAggregateInput = {
    id?: SortOrder
    distributor?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrder
  }

  export type QuestionnaireSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type QuestionnaireRelationFilter = {
    is?: QuestionnaireWhereInput
    isNot?: QuestionnaireWhereInput
  }

  export type DistributorEmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    lastname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    questionnaireId?: SortOrder
  }

  export type DistributorEmployeeAvgOrderByAggregateInput = {
    id?: SortOrder
    questionnaireId?: SortOrder
  }

  export type DistributorEmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    lastname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    questionnaireId?: SortOrder
  }

  export type DistributorEmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    lastname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    questionnaireId?: SortOrder
  }

  export type DistributorEmployeeSumOrderByAggregateInput = {
    id?: SortOrder
    questionnaireId?: SortOrder
  }

  export type DataStoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    area?: SortOrder
    address?: SortOrder
    code_client_avtoevro?: SortOrder
    code_client_avtorus?: SortOrder
    code_client_rossko?: SortOrder
    questionnaireId?: SortOrder
  }

  export type DataStoAvgOrderByAggregateInput = {
    id?: SortOrder
    questionnaireId?: SortOrder
  }

  export type DataStoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    area?: SortOrder
    address?: SortOrder
    code_client_avtoevro?: SortOrder
    code_client_avtorus?: SortOrder
    code_client_rossko?: SortOrder
    questionnaireId?: SortOrder
  }

  export type DataStoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    area?: SortOrder
    address?: SortOrder
    code_client_avtoevro?: SortOrder
    code_client_avtorus?: SortOrder
    code_client_rossko?: SortOrder
    questionnaireId?: SortOrder
  }

  export type DataStoSumOrderByAggregateInput = {
    id?: SortOrder
    questionnaireId?: SortOrder
  }

  export type IInnCountOrderByAggregateInput = {
    id?: SortOrder
    inn?: SortOrder
    questionnaireId?: SortOrder
  }

  export type IInnAvgOrderByAggregateInput = {
    id?: SortOrder
    questionnaireId?: SortOrder
  }

  export type IInnMaxOrderByAggregateInput = {
    id?: SortOrder
    inn?: SortOrder
    questionnaireId?: SortOrder
  }

  export type IInnMinOrderByAggregateInput = {
    id?: SortOrder
    inn?: SortOrder
    questionnaireId?: SortOrder
  }

  export type IInnSumOrderByAggregateInput = {
    id?: SortOrder
    questionnaireId?: SortOrder
  }

  export type ManagerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    lastname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    questionnaireId?: SortOrder
  }

  export type ManagerAvgOrderByAggregateInput = {
    id?: SortOrder
    questionnaireId?: SortOrder
  }

  export type ManagerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    lastname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    questionnaireId?: SortOrder
  }

  export type ManagerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    lastname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    questionnaireId?: SortOrder
  }

  export type ManagerSumOrderByAggregateInput = {
    id?: SortOrder
    questionnaireId?: SortOrder
  }

  export type SignatoryManagerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    lastname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    questionnaireId?: SortOrder
  }

  export type SignatoryManagerAvgOrderByAggregateInput = {
    id?: SortOrder
    questionnaireId?: SortOrder
  }

  export type SignatoryManagerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    lastname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    questionnaireId?: SortOrder
  }

  export type SignatoryManagerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    lastname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    questionnaireId?: SortOrder
  }

  export type SignatoryManagerSumOrderByAggregateInput = {
    id?: SortOrder
    questionnaireId?: SortOrder
  }

  export type LiftsCountOrderByAggregateInput = {
    id?: SortOrder
    twoPostLiftScissors?: SortOrder
    fourPostLift?: SortOrder
    fourPostLiftTraverse?: SortOrder
    pits?: SortOrder
    pitsEquippedTraverse?: SortOrder
    postElectronicDiagnostic?: SortOrder
    postAdditionalEquipment?: SortOrder
    questionnaireId?: SortOrder
  }

  export type LiftsAvgOrderByAggregateInput = {
    id?: SortOrder
    twoPostLiftScissors?: SortOrder
    fourPostLift?: SortOrder
    fourPostLiftTraverse?: SortOrder
    pits?: SortOrder
    pitsEquippedTraverse?: SortOrder
    postElectronicDiagnostic?: SortOrder
    postAdditionalEquipment?: SortOrder
    questionnaireId?: SortOrder
  }

  export type LiftsMaxOrderByAggregateInput = {
    id?: SortOrder
    twoPostLiftScissors?: SortOrder
    fourPostLift?: SortOrder
    fourPostLiftTraverse?: SortOrder
    pits?: SortOrder
    pitsEquippedTraverse?: SortOrder
    postElectronicDiagnostic?: SortOrder
    postAdditionalEquipment?: SortOrder
    questionnaireId?: SortOrder
  }

  export type LiftsMinOrderByAggregateInput = {
    id?: SortOrder
    twoPostLiftScissors?: SortOrder
    fourPostLift?: SortOrder
    fourPostLiftTraverse?: SortOrder
    pits?: SortOrder
    pitsEquippedTraverse?: SortOrder
    postElectronicDiagnostic?: SortOrder
    postAdditionalEquipment?: SortOrder
    questionnaireId?: SortOrder
  }

  export type LiftsSumOrderByAggregateInput = {
    id?: SortOrder
    twoPostLiftScissors?: SortOrder
    fourPostLift?: SortOrder
    fourPostLiftTraverse?: SortOrder
    pits?: SortOrder
    pitsEquippedTraverse?: SortOrder
    postElectronicDiagnostic?: SortOrder
    postAdditionalEquipment?: SortOrder
    questionnaireId?: SortOrder
  }

  export type ConfirmDataCountOrderByAggregateInput = {
    id?: SortOrder
    loginOne?: SortOrder
    loginTwo?: SortOrder
    lifts?: SortOrder
    questionnaireId?: SortOrder
  }

  export type ConfirmDataAvgOrderByAggregateInput = {
    id?: SortOrder
    lifts?: SortOrder
    questionnaireId?: SortOrder
  }

  export type ConfirmDataMaxOrderByAggregateInput = {
    id?: SortOrder
    loginOne?: SortOrder
    loginTwo?: SortOrder
    lifts?: SortOrder
    questionnaireId?: SortOrder
  }

  export type ConfirmDataMinOrderByAggregateInput = {
    id?: SortOrder
    loginOne?: SortOrder
    loginTwo?: SortOrder
    lifts?: SortOrder
    questionnaireId?: SortOrder
  }

  export type ConfirmDataSumOrderByAggregateInput = {
    id?: SortOrder
    lifts?: SortOrder
    questionnaireId?: SortOrder
  }

  export type ImagesCountOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    description?: SortOrder
    questionnaireId?: SortOrder
  }

  export type ImagesAvgOrderByAggregateInput = {
    id?: SortOrder
    questionnaireId?: SortOrder
  }

  export type ImagesMaxOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    description?: SortOrder
    questionnaireId?: SortOrder
  }

  export type ImagesMinOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    description?: SortOrder
    questionnaireId?: SortOrder
  }

  export type ImagesSumOrderByAggregateInput = {
    id?: SortOrder
    questionnaireId?: SortOrder
  }

  export type DistributorEmployeeCreateNestedOneWithoutQuestionnaireInput = {
    create?: XOR<DistributorEmployeeCreateWithoutQuestionnaireInput, DistributorEmployeeUncheckedCreateWithoutQuestionnaireInput>
    connectOrCreate?: DistributorEmployeeCreateOrConnectWithoutQuestionnaireInput
    connect?: DistributorEmployeeWhereUniqueInput
  }

  export type DataStoCreateNestedOneWithoutQuestionnaireInput = {
    create?: XOR<DataStoCreateWithoutQuestionnaireInput, DataStoUncheckedCreateWithoutQuestionnaireInput>
    connectOrCreate?: DataStoCreateOrConnectWithoutQuestionnaireInput
    connect?: DataStoWhereUniqueInput
  }

  export type IInnCreateNestedManyWithoutQuestionnaireInput = {
    create?: XOR<IInnCreateWithoutQuestionnaireInput, IInnUncheckedCreateWithoutQuestionnaireInput> | IInnCreateWithoutQuestionnaireInput[] | IInnUncheckedCreateWithoutQuestionnaireInput[]
    connectOrCreate?: IInnCreateOrConnectWithoutQuestionnaireInput | IInnCreateOrConnectWithoutQuestionnaireInput[]
    createMany?: IInnCreateManyQuestionnaireInputEnvelope
    connect?: IInnWhereUniqueInput | IInnWhereUniqueInput[]
  }

  export type ImagesCreateNestedManyWithoutQuestionnaireInput = {
    create?: XOR<ImagesCreateWithoutQuestionnaireInput, ImagesUncheckedCreateWithoutQuestionnaireInput> | ImagesCreateWithoutQuestionnaireInput[] | ImagesUncheckedCreateWithoutQuestionnaireInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutQuestionnaireInput | ImagesCreateOrConnectWithoutQuestionnaireInput[]
    createMany?: ImagesCreateManyQuestionnaireInputEnvelope
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
  }

  export type LiftsCreateNestedOneWithoutQuestionnaireInput = {
    create?: XOR<LiftsCreateWithoutQuestionnaireInput, LiftsUncheckedCreateWithoutQuestionnaireInput>
    connectOrCreate?: LiftsCreateOrConnectWithoutQuestionnaireInput
    connect?: LiftsWhereUniqueInput
  }

  export type ManagerCreateNestedOneWithoutQuestionnaireInput = {
    create?: XOR<ManagerCreateWithoutQuestionnaireInput, ManagerUncheckedCreateWithoutQuestionnaireInput>
    connectOrCreate?: ManagerCreateOrConnectWithoutQuestionnaireInput
    connect?: ManagerWhereUniqueInput
  }

  export type SignatoryManagerCreateNestedOneWithoutQuestionnaireInput = {
    create?: XOR<SignatoryManagerCreateWithoutQuestionnaireInput, SignatoryManagerUncheckedCreateWithoutQuestionnaireInput>
    connectOrCreate?: SignatoryManagerCreateOrConnectWithoutQuestionnaireInput
    connect?: SignatoryManagerWhereUniqueInput
  }

  export type ConfirmDataCreateNestedOneWithoutQuestionnaireInput = {
    create?: XOR<ConfirmDataCreateWithoutQuestionnaireInput, ConfirmDataUncheckedCreateWithoutQuestionnaireInput>
    connectOrCreate?: ConfirmDataCreateOrConnectWithoutQuestionnaireInput
    connect?: ConfirmDataWhereUniqueInput
  }

  export type DistributorEmployeeUncheckedCreateNestedOneWithoutQuestionnaireInput = {
    create?: XOR<DistributorEmployeeCreateWithoutQuestionnaireInput, DistributorEmployeeUncheckedCreateWithoutQuestionnaireInput>
    connectOrCreate?: DistributorEmployeeCreateOrConnectWithoutQuestionnaireInput
    connect?: DistributorEmployeeWhereUniqueInput
  }

  export type DataStoUncheckedCreateNestedOneWithoutQuestionnaireInput = {
    create?: XOR<DataStoCreateWithoutQuestionnaireInput, DataStoUncheckedCreateWithoutQuestionnaireInput>
    connectOrCreate?: DataStoCreateOrConnectWithoutQuestionnaireInput
    connect?: DataStoWhereUniqueInput
  }

  export type IInnUncheckedCreateNestedManyWithoutQuestionnaireInput = {
    create?: XOR<IInnCreateWithoutQuestionnaireInput, IInnUncheckedCreateWithoutQuestionnaireInput> | IInnCreateWithoutQuestionnaireInput[] | IInnUncheckedCreateWithoutQuestionnaireInput[]
    connectOrCreate?: IInnCreateOrConnectWithoutQuestionnaireInput | IInnCreateOrConnectWithoutQuestionnaireInput[]
    createMany?: IInnCreateManyQuestionnaireInputEnvelope
    connect?: IInnWhereUniqueInput | IInnWhereUniqueInput[]
  }

  export type ImagesUncheckedCreateNestedManyWithoutQuestionnaireInput = {
    create?: XOR<ImagesCreateWithoutQuestionnaireInput, ImagesUncheckedCreateWithoutQuestionnaireInput> | ImagesCreateWithoutQuestionnaireInput[] | ImagesUncheckedCreateWithoutQuestionnaireInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutQuestionnaireInput | ImagesCreateOrConnectWithoutQuestionnaireInput[]
    createMany?: ImagesCreateManyQuestionnaireInputEnvelope
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
  }

  export type LiftsUncheckedCreateNestedOneWithoutQuestionnaireInput = {
    create?: XOR<LiftsCreateWithoutQuestionnaireInput, LiftsUncheckedCreateWithoutQuestionnaireInput>
    connectOrCreate?: LiftsCreateOrConnectWithoutQuestionnaireInput
    connect?: LiftsWhereUniqueInput
  }

  export type ManagerUncheckedCreateNestedOneWithoutQuestionnaireInput = {
    create?: XOR<ManagerCreateWithoutQuestionnaireInput, ManagerUncheckedCreateWithoutQuestionnaireInput>
    connectOrCreate?: ManagerCreateOrConnectWithoutQuestionnaireInput
    connect?: ManagerWhereUniqueInput
  }

  export type SignatoryManagerUncheckedCreateNestedOneWithoutQuestionnaireInput = {
    create?: XOR<SignatoryManagerCreateWithoutQuestionnaireInput, SignatoryManagerUncheckedCreateWithoutQuestionnaireInput>
    connectOrCreate?: SignatoryManagerCreateOrConnectWithoutQuestionnaireInput
    connect?: SignatoryManagerWhereUniqueInput
  }

  export type ConfirmDataUncheckedCreateNestedOneWithoutQuestionnaireInput = {
    create?: XOR<ConfirmDataCreateWithoutQuestionnaireInput, ConfirmDataUncheckedCreateWithoutQuestionnaireInput>
    connectOrCreate?: ConfirmDataCreateOrConnectWithoutQuestionnaireInput
    connect?: ConfirmDataWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DistributorEmployeeUpdateOneWithoutQuestionnaireNestedInput = {
    create?: XOR<DistributorEmployeeCreateWithoutQuestionnaireInput, DistributorEmployeeUncheckedCreateWithoutQuestionnaireInput>
    connectOrCreate?: DistributorEmployeeCreateOrConnectWithoutQuestionnaireInput
    upsert?: DistributorEmployeeUpsertWithoutQuestionnaireInput
    disconnect?: DistributorEmployeeWhereInput | boolean
    delete?: DistributorEmployeeWhereInput | boolean
    connect?: DistributorEmployeeWhereUniqueInput
    update?: XOR<XOR<DistributorEmployeeUpdateToOneWithWhereWithoutQuestionnaireInput, DistributorEmployeeUpdateWithoutQuestionnaireInput>, DistributorEmployeeUncheckedUpdateWithoutQuestionnaireInput>
  }

  export type DataStoUpdateOneWithoutQuestionnaireNestedInput = {
    create?: XOR<DataStoCreateWithoutQuestionnaireInput, DataStoUncheckedCreateWithoutQuestionnaireInput>
    connectOrCreate?: DataStoCreateOrConnectWithoutQuestionnaireInput
    upsert?: DataStoUpsertWithoutQuestionnaireInput
    disconnect?: DataStoWhereInput | boolean
    delete?: DataStoWhereInput | boolean
    connect?: DataStoWhereUniqueInput
    update?: XOR<XOR<DataStoUpdateToOneWithWhereWithoutQuestionnaireInput, DataStoUpdateWithoutQuestionnaireInput>, DataStoUncheckedUpdateWithoutQuestionnaireInput>
  }

  export type IInnUpdateManyWithoutQuestionnaireNestedInput = {
    create?: XOR<IInnCreateWithoutQuestionnaireInput, IInnUncheckedCreateWithoutQuestionnaireInput> | IInnCreateWithoutQuestionnaireInput[] | IInnUncheckedCreateWithoutQuestionnaireInput[]
    connectOrCreate?: IInnCreateOrConnectWithoutQuestionnaireInput | IInnCreateOrConnectWithoutQuestionnaireInput[]
    upsert?: IInnUpsertWithWhereUniqueWithoutQuestionnaireInput | IInnUpsertWithWhereUniqueWithoutQuestionnaireInput[]
    createMany?: IInnCreateManyQuestionnaireInputEnvelope
    set?: IInnWhereUniqueInput | IInnWhereUniqueInput[]
    disconnect?: IInnWhereUniqueInput | IInnWhereUniqueInput[]
    delete?: IInnWhereUniqueInput | IInnWhereUniqueInput[]
    connect?: IInnWhereUniqueInput | IInnWhereUniqueInput[]
    update?: IInnUpdateWithWhereUniqueWithoutQuestionnaireInput | IInnUpdateWithWhereUniqueWithoutQuestionnaireInput[]
    updateMany?: IInnUpdateManyWithWhereWithoutQuestionnaireInput | IInnUpdateManyWithWhereWithoutQuestionnaireInput[]
    deleteMany?: IInnScalarWhereInput | IInnScalarWhereInput[]
  }

  export type ImagesUpdateManyWithoutQuestionnaireNestedInput = {
    create?: XOR<ImagesCreateWithoutQuestionnaireInput, ImagesUncheckedCreateWithoutQuestionnaireInput> | ImagesCreateWithoutQuestionnaireInput[] | ImagesUncheckedCreateWithoutQuestionnaireInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutQuestionnaireInput | ImagesCreateOrConnectWithoutQuestionnaireInput[]
    upsert?: ImagesUpsertWithWhereUniqueWithoutQuestionnaireInput | ImagesUpsertWithWhereUniqueWithoutQuestionnaireInput[]
    createMany?: ImagesCreateManyQuestionnaireInputEnvelope
    set?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    disconnect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    delete?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    update?: ImagesUpdateWithWhereUniqueWithoutQuestionnaireInput | ImagesUpdateWithWhereUniqueWithoutQuestionnaireInput[]
    updateMany?: ImagesUpdateManyWithWhereWithoutQuestionnaireInput | ImagesUpdateManyWithWhereWithoutQuestionnaireInput[]
    deleteMany?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
  }

  export type LiftsUpdateOneWithoutQuestionnaireNestedInput = {
    create?: XOR<LiftsCreateWithoutQuestionnaireInput, LiftsUncheckedCreateWithoutQuestionnaireInput>
    connectOrCreate?: LiftsCreateOrConnectWithoutQuestionnaireInput
    upsert?: LiftsUpsertWithoutQuestionnaireInput
    disconnect?: LiftsWhereInput | boolean
    delete?: LiftsWhereInput | boolean
    connect?: LiftsWhereUniqueInput
    update?: XOR<XOR<LiftsUpdateToOneWithWhereWithoutQuestionnaireInput, LiftsUpdateWithoutQuestionnaireInput>, LiftsUncheckedUpdateWithoutQuestionnaireInput>
  }

  export type ManagerUpdateOneWithoutQuestionnaireNestedInput = {
    create?: XOR<ManagerCreateWithoutQuestionnaireInput, ManagerUncheckedCreateWithoutQuestionnaireInput>
    connectOrCreate?: ManagerCreateOrConnectWithoutQuestionnaireInput
    upsert?: ManagerUpsertWithoutQuestionnaireInput
    disconnect?: ManagerWhereInput | boolean
    delete?: ManagerWhereInput | boolean
    connect?: ManagerWhereUniqueInput
    update?: XOR<XOR<ManagerUpdateToOneWithWhereWithoutQuestionnaireInput, ManagerUpdateWithoutQuestionnaireInput>, ManagerUncheckedUpdateWithoutQuestionnaireInput>
  }

  export type SignatoryManagerUpdateOneWithoutQuestionnaireNestedInput = {
    create?: XOR<SignatoryManagerCreateWithoutQuestionnaireInput, SignatoryManagerUncheckedCreateWithoutQuestionnaireInput>
    connectOrCreate?: SignatoryManagerCreateOrConnectWithoutQuestionnaireInput
    upsert?: SignatoryManagerUpsertWithoutQuestionnaireInput
    disconnect?: SignatoryManagerWhereInput | boolean
    delete?: SignatoryManagerWhereInput | boolean
    connect?: SignatoryManagerWhereUniqueInput
    update?: XOR<XOR<SignatoryManagerUpdateToOneWithWhereWithoutQuestionnaireInput, SignatoryManagerUpdateWithoutQuestionnaireInput>, SignatoryManagerUncheckedUpdateWithoutQuestionnaireInput>
  }

  export type ConfirmDataUpdateOneWithoutQuestionnaireNestedInput = {
    create?: XOR<ConfirmDataCreateWithoutQuestionnaireInput, ConfirmDataUncheckedCreateWithoutQuestionnaireInput>
    connectOrCreate?: ConfirmDataCreateOrConnectWithoutQuestionnaireInput
    upsert?: ConfirmDataUpsertWithoutQuestionnaireInput
    disconnect?: ConfirmDataWhereInput | boolean
    delete?: ConfirmDataWhereInput | boolean
    connect?: ConfirmDataWhereUniqueInput
    update?: XOR<XOR<ConfirmDataUpdateToOneWithWhereWithoutQuestionnaireInput, ConfirmDataUpdateWithoutQuestionnaireInput>, ConfirmDataUncheckedUpdateWithoutQuestionnaireInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DistributorEmployeeUncheckedUpdateOneWithoutQuestionnaireNestedInput = {
    create?: XOR<DistributorEmployeeCreateWithoutQuestionnaireInput, DistributorEmployeeUncheckedCreateWithoutQuestionnaireInput>
    connectOrCreate?: DistributorEmployeeCreateOrConnectWithoutQuestionnaireInput
    upsert?: DistributorEmployeeUpsertWithoutQuestionnaireInput
    disconnect?: DistributorEmployeeWhereInput | boolean
    delete?: DistributorEmployeeWhereInput | boolean
    connect?: DistributorEmployeeWhereUniqueInput
    update?: XOR<XOR<DistributorEmployeeUpdateToOneWithWhereWithoutQuestionnaireInput, DistributorEmployeeUpdateWithoutQuestionnaireInput>, DistributorEmployeeUncheckedUpdateWithoutQuestionnaireInput>
  }

  export type DataStoUncheckedUpdateOneWithoutQuestionnaireNestedInput = {
    create?: XOR<DataStoCreateWithoutQuestionnaireInput, DataStoUncheckedCreateWithoutQuestionnaireInput>
    connectOrCreate?: DataStoCreateOrConnectWithoutQuestionnaireInput
    upsert?: DataStoUpsertWithoutQuestionnaireInput
    disconnect?: DataStoWhereInput | boolean
    delete?: DataStoWhereInput | boolean
    connect?: DataStoWhereUniqueInput
    update?: XOR<XOR<DataStoUpdateToOneWithWhereWithoutQuestionnaireInput, DataStoUpdateWithoutQuestionnaireInput>, DataStoUncheckedUpdateWithoutQuestionnaireInput>
  }

  export type IInnUncheckedUpdateManyWithoutQuestionnaireNestedInput = {
    create?: XOR<IInnCreateWithoutQuestionnaireInput, IInnUncheckedCreateWithoutQuestionnaireInput> | IInnCreateWithoutQuestionnaireInput[] | IInnUncheckedCreateWithoutQuestionnaireInput[]
    connectOrCreate?: IInnCreateOrConnectWithoutQuestionnaireInput | IInnCreateOrConnectWithoutQuestionnaireInput[]
    upsert?: IInnUpsertWithWhereUniqueWithoutQuestionnaireInput | IInnUpsertWithWhereUniqueWithoutQuestionnaireInput[]
    createMany?: IInnCreateManyQuestionnaireInputEnvelope
    set?: IInnWhereUniqueInput | IInnWhereUniqueInput[]
    disconnect?: IInnWhereUniqueInput | IInnWhereUniqueInput[]
    delete?: IInnWhereUniqueInput | IInnWhereUniqueInput[]
    connect?: IInnWhereUniqueInput | IInnWhereUniqueInput[]
    update?: IInnUpdateWithWhereUniqueWithoutQuestionnaireInput | IInnUpdateWithWhereUniqueWithoutQuestionnaireInput[]
    updateMany?: IInnUpdateManyWithWhereWithoutQuestionnaireInput | IInnUpdateManyWithWhereWithoutQuestionnaireInput[]
    deleteMany?: IInnScalarWhereInput | IInnScalarWhereInput[]
  }

  export type ImagesUncheckedUpdateManyWithoutQuestionnaireNestedInput = {
    create?: XOR<ImagesCreateWithoutQuestionnaireInput, ImagesUncheckedCreateWithoutQuestionnaireInput> | ImagesCreateWithoutQuestionnaireInput[] | ImagesUncheckedCreateWithoutQuestionnaireInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutQuestionnaireInput | ImagesCreateOrConnectWithoutQuestionnaireInput[]
    upsert?: ImagesUpsertWithWhereUniqueWithoutQuestionnaireInput | ImagesUpsertWithWhereUniqueWithoutQuestionnaireInput[]
    createMany?: ImagesCreateManyQuestionnaireInputEnvelope
    set?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    disconnect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    delete?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    update?: ImagesUpdateWithWhereUniqueWithoutQuestionnaireInput | ImagesUpdateWithWhereUniqueWithoutQuestionnaireInput[]
    updateMany?: ImagesUpdateManyWithWhereWithoutQuestionnaireInput | ImagesUpdateManyWithWhereWithoutQuestionnaireInput[]
    deleteMany?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
  }

  export type LiftsUncheckedUpdateOneWithoutQuestionnaireNestedInput = {
    create?: XOR<LiftsCreateWithoutQuestionnaireInput, LiftsUncheckedCreateWithoutQuestionnaireInput>
    connectOrCreate?: LiftsCreateOrConnectWithoutQuestionnaireInput
    upsert?: LiftsUpsertWithoutQuestionnaireInput
    disconnect?: LiftsWhereInput | boolean
    delete?: LiftsWhereInput | boolean
    connect?: LiftsWhereUniqueInput
    update?: XOR<XOR<LiftsUpdateToOneWithWhereWithoutQuestionnaireInput, LiftsUpdateWithoutQuestionnaireInput>, LiftsUncheckedUpdateWithoutQuestionnaireInput>
  }

  export type ManagerUncheckedUpdateOneWithoutQuestionnaireNestedInput = {
    create?: XOR<ManagerCreateWithoutQuestionnaireInput, ManagerUncheckedCreateWithoutQuestionnaireInput>
    connectOrCreate?: ManagerCreateOrConnectWithoutQuestionnaireInput
    upsert?: ManagerUpsertWithoutQuestionnaireInput
    disconnect?: ManagerWhereInput | boolean
    delete?: ManagerWhereInput | boolean
    connect?: ManagerWhereUniqueInput
    update?: XOR<XOR<ManagerUpdateToOneWithWhereWithoutQuestionnaireInput, ManagerUpdateWithoutQuestionnaireInput>, ManagerUncheckedUpdateWithoutQuestionnaireInput>
  }

  export type SignatoryManagerUncheckedUpdateOneWithoutQuestionnaireNestedInput = {
    create?: XOR<SignatoryManagerCreateWithoutQuestionnaireInput, SignatoryManagerUncheckedCreateWithoutQuestionnaireInput>
    connectOrCreate?: SignatoryManagerCreateOrConnectWithoutQuestionnaireInput
    upsert?: SignatoryManagerUpsertWithoutQuestionnaireInput
    disconnect?: SignatoryManagerWhereInput | boolean
    delete?: SignatoryManagerWhereInput | boolean
    connect?: SignatoryManagerWhereUniqueInput
    update?: XOR<XOR<SignatoryManagerUpdateToOneWithWhereWithoutQuestionnaireInput, SignatoryManagerUpdateWithoutQuestionnaireInput>, SignatoryManagerUncheckedUpdateWithoutQuestionnaireInput>
  }

  export type ConfirmDataUncheckedUpdateOneWithoutQuestionnaireNestedInput = {
    create?: XOR<ConfirmDataCreateWithoutQuestionnaireInput, ConfirmDataUncheckedCreateWithoutQuestionnaireInput>
    connectOrCreate?: ConfirmDataCreateOrConnectWithoutQuestionnaireInput
    upsert?: ConfirmDataUpsertWithoutQuestionnaireInput
    disconnect?: ConfirmDataWhereInput | boolean
    delete?: ConfirmDataWhereInput | boolean
    connect?: ConfirmDataWhereUniqueInput
    update?: XOR<XOR<ConfirmDataUpdateToOneWithWhereWithoutQuestionnaireInput, ConfirmDataUpdateWithoutQuestionnaireInput>, ConfirmDataUncheckedUpdateWithoutQuestionnaireInput>
  }

  export type QuestionnaireCreateNestedOneWithoutDistributor_employeeInput = {
    create?: XOR<QuestionnaireCreateWithoutDistributor_employeeInput, QuestionnaireUncheckedCreateWithoutDistributor_employeeInput>
    connectOrCreate?: QuestionnaireCreateOrConnectWithoutDistributor_employeeInput
    connect?: QuestionnaireWhereUniqueInput
  }

  export type QuestionnaireUpdateOneRequiredWithoutDistributor_employeeNestedInput = {
    create?: XOR<QuestionnaireCreateWithoutDistributor_employeeInput, QuestionnaireUncheckedCreateWithoutDistributor_employeeInput>
    connectOrCreate?: QuestionnaireCreateOrConnectWithoutDistributor_employeeInput
    upsert?: QuestionnaireUpsertWithoutDistributor_employeeInput
    connect?: QuestionnaireWhereUniqueInput
    update?: XOR<XOR<QuestionnaireUpdateToOneWithWhereWithoutDistributor_employeeInput, QuestionnaireUpdateWithoutDistributor_employeeInput>, QuestionnaireUncheckedUpdateWithoutDistributor_employeeInput>
  }

  export type QuestionnaireCreateNestedOneWithoutData_stoInput = {
    create?: XOR<QuestionnaireCreateWithoutData_stoInput, QuestionnaireUncheckedCreateWithoutData_stoInput>
    connectOrCreate?: QuestionnaireCreateOrConnectWithoutData_stoInput
    connect?: QuestionnaireWhereUniqueInput
  }

  export type QuestionnaireUpdateOneRequiredWithoutData_stoNestedInput = {
    create?: XOR<QuestionnaireCreateWithoutData_stoInput, QuestionnaireUncheckedCreateWithoutData_stoInput>
    connectOrCreate?: QuestionnaireCreateOrConnectWithoutData_stoInput
    upsert?: QuestionnaireUpsertWithoutData_stoInput
    connect?: QuestionnaireWhereUniqueInput
    update?: XOR<XOR<QuestionnaireUpdateToOneWithWhereWithoutData_stoInput, QuestionnaireUpdateWithoutData_stoInput>, QuestionnaireUncheckedUpdateWithoutData_stoInput>
  }

  export type QuestionnaireCreateNestedOneWithoutInnsInput = {
    create?: XOR<QuestionnaireCreateWithoutInnsInput, QuestionnaireUncheckedCreateWithoutInnsInput>
    connectOrCreate?: QuestionnaireCreateOrConnectWithoutInnsInput
    connect?: QuestionnaireWhereUniqueInput
  }

  export type QuestionnaireUpdateOneRequiredWithoutInnsNestedInput = {
    create?: XOR<QuestionnaireCreateWithoutInnsInput, QuestionnaireUncheckedCreateWithoutInnsInput>
    connectOrCreate?: QuestionnaireCreateOrConnectWithoutInnsInput
    upsert?: QuestionnaireUpsertWithoutInnsInput
    connect?: QuestionnaireWhereUniqueInput
    update?: XOR<XOR<QuestionnaireUpdateToOneWithWhereWithoutInnsInput, QuestionnaireUpdateWithoutInnsInput>, QuestionnaireUncheckedUpdateWithoutInnsInput>
  }

  export type QuestionnaireCreateNestedOneWithoutManagerInput = {
    create?: XOR<QuestionnaireCreateWithoutManagerInput, QuestionnaireUncheckedCreateWithoutManagerInput>
    connectOrCreate?: QuestionnaireCreateOrConnectWithoutManagerInput
    connect?: QuestionnaireWhereUniqueInput
  }

  export type QuestionnaireUpdateOneRequiredWithoutManagerNestedInput = {
    create?: XOR<QuestionnaireCreateWithoutManagerInput, QuestionnaireUncheckedCreateWithoutManagerInput>
    connectOrCreate?: QuestionnaireCreateOrConnectWithoutManagerInput
    upsert?: QuestionnaireUpsertWithoutManagerInput
    connect?: QuestionnaireWhereUniqueInput
    update?: XOR<XOR<QuestionnaireUpdateToOneWithWhereWithoutManagerInput, QuestionnaireUpdateWithoutManagerInput>, QuestionnaireUncheckedUpdateWithoutManagerInput>
  }

  export type QuestionnaireCreateNestedOneWithoutSignatoryManagerInput = {
    create?: XOR<QuestionnaireCreateWithoutSignatoryManagerInput, QuestionnaireUncheckedCreateWithoutSignatoryManagerInput>
    connectOrCreate?: QuestionnaireCreateOrConnectWithoutSignatoryManagerInput
    connect?: QuestionnaireWhereUniqueInput
  }

  export type QuestionnaireUpdateOneRequiredWithoutSignatoryManagerNestedInput = {
    create?: XOR<QuestionnaireCreateWithoutSignatoryManagerInput, QuestionnaireUncheckedCreateWithoutSignatoryManagerInput>
    connectOrCreate?: QuestionnaireCreateOrConnectWithoutSignatoryManagerInput
    upsert?: QuestionnaireUpsertWithoutSignatoryManagerInput
    connect?: QuestionnaireWhereUniqueInput
    update?: XOR<XOR<QuestionnaireUpdateToOneWithWhereWithoutSignatoryManagerInput, QuestionnaireUpdateWithoutSignatoryManagerInput>, QuestionnaireUncheckedUpdateWithoutSignatoryManagerInput>
  }

  export type QuestionnaireCreateNestedOneWithoutLiftsInput = {
    create?: XOR<QuestionnaireCreateWithoutLiftsInput, QuestionnaireUncheckedCreateWithoutLiftsInput>
    connectOrCreate?: QuestionnaireCreateOrConnectWithoutLiftsInput
    connect?: QuestionnaireWhereUniqueInput
  }

  export type QuestionnaireUpdateOneRequiredWithoutLiftsNestedInput = {
    create?: XOR<QuestionnaireCreateWithoutLiftsInput, QuestionnaireUncheckedCreateWithoutLiftsInput>
    connectOrCreate?: QuestionnaireCreateOrConnectWithoutLiftsInput
    upsert?: QuestionnaireUpsertWithoutLiftsInput
    connect?: QuestionnaireWhereUniqueInput
    update?: XOR<XOR<QuestionnaireUpdateToOneWithWhereWithoutLiftsInput, QuestionnaireUpdateWithoutLiftsInput>, QuestionnaireUncheckedUpdateWithoutLiftsInput>
  }

  export type QuestionnaireCreateNestedOneWithoutConfirmDataInput = {
    create?: XOR<QuestionnaireCreateWithoutConfirmDataInput, QuestionnaireUncheckedCreateWithoutConfirmDataInput>
    connectOrCreate?: QuestionnaireCreateOrConnectWithoutConfirmDataInput
    connect?: QuestionnaireWhereUniqueInput
  }

  export type QuestionnaireUpdateOneRequiredWithoutConfirmDataNestedInput = {
    create?: XOR<QuestionnaireCreateWithoutConfirmDataInput, QuestionnaireUncheckedCreateWithoutConfirmDataInput>
    connectOrCreate?: QuestionnaireCreateOrConnectWithoutConfirmDataInput
    upsert?: QuestionnaireUpsertWithoutConfirmDataInput
    connect?: QuestionnaireWhereUniqueInput
    update?: XOR<XOR<QuestionnaireUpdateToOneWithWhereWithoutConfirmDataInput, QuestionnaireUpdateWithoutConfirmDataInput>, QuestionnaireUncheckedUpdateWithoutConfirmDataInput>
  }

  export type QuestionnaireCreateNestedOneWithoutImagesInput = {
    create?: XOR<QuestionnaireCreateWithoutImagesInput, QuestionnaireUncheckedCreateWithoutImagesInput>
    connectOrCreate?: QuestionnaireCreateOrConnectWithoutImagesInput
    connect?: QuestionnaireWhereUniqueInput
  }

  export type QuestionnaireUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<QuestionnaireCreateWithoutImagesInput, QuestionnaireUncheckedCreateWithoutImagesInput>
    connectOrCreate?: QuestionnaireCreateOrConnectWithoutImagesInput
    upsert?: QuestionnaireUpsertWithoutImagesInput
    connect?: QuestionnaireWhereUniqueInput
    update?: XOR<XOR<QuestionnaireUpdateToOneWithWhereWithoutImagesInput, QuestionnaireUpdateWithoutImagesInput>, QuestionnaireUncheckedUpdateWithoutImagesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DistributorEmployeeCreateWithoutQuestionnaireInput = {
    name: string
    surname: string
    lastname: string
    phone: string
    email: string
  }

  export type DistributorEmployeeUncheckedCreateWithoutQuestionnaireInput = {
    id?: number
    name: string
    surname: string
    lastname: string
    phone: string
    email: string
  }

  export type DistributorEmployeeCreateOrConnectWithoutQuestionnaireInput = {
    where: DistributorEmployeeWhereUniqueInput
    create: XOR<DistributorEmployeeCreateWithoutQuestionnaireInput, DistributorEmployeeUncheckedCreateWithoutQuestionnaireInput>
  }

  export type DataStoCreateWithoutQuestionnaireInput = {
    name: string
    city: string
    area: string
    address: string
    code_client_avtoevro: string
    code_client_avtorus: string
    code_client_rossko: string
  }

  export type DataStoUncheckedCreateWithoutQuestionnaireInput = {
    id?: number
    name: string
    city: string
    area: string
    address: string
    code_client_avtoevro: string
    code_client_avtorus: string
    code_client_rossko: string
  }

  export type DataStoCreateOrConnectWithoutQuestionnaireInput = {
    where: DataStoWhereUniqueInput
    create: XOR<DataStoCreateWithoutQuestionnaireInput, DataStoUncheckedCreateWithoutQuestionnaireInput>
  }

  export type IInnCreateWithoutQuestionnaireInput = {
    inn: string
  }

  export type IInnUncheckedCreateWithoutQuestionnaireInput = {
    id?: number
    inn: string
  }

  export type IInnCreateOrConnectWithoutQuestionnaireInput = {
    where: IInnWhereUniqueInput
    create: XOR<IInnCreateWithoutQuestionnaireInput, IInnUncheckedCreateWithoutQuestionnaireInput>
  }

  export type IInnCreateManyQuestionnaireInputEnvelope = {
    data: IInnCreateManyQuestionnaireInput | IInnCreateManyQuestionnaireInput[]
    skipDuplicates?: boolean
  }

  export type ImagesCreateWithoutQuestionnaireInput = {
    path: string
    description: string
  }

  export type ImagesUncheckedCreateWithoutQuestionnaireInput = {
    id?: number
    path: string
    description: string
  }

  export type ImagesCreateOrConnectWithoutQuestionnaireInput = {
    where: ImagesWhereUniqueInput
    create: XOR<ImagesCreateWithoutQuestionnaireInput, ImagesUncheckedCreateWithoutQuestionnaireInput>
  }

  export type ImagesCreateManyQuestionnaireInputEnvelope = {
    data: ImagesCreateManyQuestionnaireInput | ImagesCreateManyQuestionnaireInput[]
    skipDuplicates?: boolean
  }

  export type LiftsCreateWithoutQuestionnaireInput = {
    twoPostLiftScissors: number
    fourPostLift: number
    fourPostLiftTraverse: number
    pits: number
    pitsEquippedTraverse: number
    postElectronicDiagnostic: number
    postAdditionalEquipment: number
  }

  export type LiftsUncheckedCreateWithoutQuestionnaireInput = {
    id?: number
    twoPostLiftScissors: number
    fourPostLift: number
    fourPostLiftTraverse: number
    pits: number
    pitsEquippedTraverse: number
    postElectronicDiagnostic: number
    postAdditionalEquipment: number
  }

  export type LiftsCreateOrConnectWithoutQuestionnaireInput = {
    where: LiftsWhereUniqueInput
    create: XOR<LiftsCreateWithoutQuestionnaireInput, LiftsUncheckedCreateWithoutQuestionnaireInput>
  }

  export type ManagerCreateWithoutQuestionnaireInput = {
    name: string
    surname: string
    lastname: string
    phone: string
    email: string
  }

  export type ManagerUncheckedCreateWithoutQuestionnaireInput = {
    id?: number
    name: string
    surname: string
    lastname: string
    phone: string
    email: string
  }

  export type ManagerCreateOrConnectWithoutQuestionnaireInput = {
    where: ManagerWhereUniqueInput
    create: XOR<ManagerCreateWithoutQuestionnaireInput, ManagerUncheckedCreateWithoutQuestionnaireInput>
  }

  export type SignatoryManagerCreateWithoutQuestionnaireInput = {
    name: string
    surname: string
    lastname: string
    phone: string
    email: string
  }

  export type SignatoryManagerUncheckedCreateWithoutQuestionnaireInput = {
    id?: number
    name: string
    surname: string
    lastname: string
    phone: string
    email: string
  }

  export type SignatoryManagerCreateOrConnectWithoutQuestionnaireInput = {
    where: SignatoryManagerWhereUniqueInput
    create: XOR<SignatoryManagerCreateWithoutQuestionnaireInput, SignatoryManagerUncheckedCreateWithoutQuestionnaireInput>
  }

  export type ConfirmDataCreateWithoutQuestionnaireInput = {
    loginOne: string
    loginTwo: string
    lifts: number
  }

  export type ConfirmDataUncheckedCreateWithoutQuestionnaireInput = {
    id?: number
    loginOne: string
    loginTwo: string
    lifts: number
  }

  export type ConfirmDataCreateOrConnectWithoutQuestionnaireInput = {
    where: ConfirmDataWhereUniqueInput
    create: XOR<ConfirmDataCreateWithoutQuestionnaireInput, ConfirmDataUncheckedCreateWithoutQuestionnaireInput>
  }

  export type DistributorEmployeeUpsertWithoutQuestionnaireInput = {
    update: XOR<DistributorEmployeeUpdateWithoutQuestionnaireInput, DistributorEmployeeUncheckedUpdateWithoutQuestionnaireInput>
    create: XOR<DistributorEmployeeCreateWithoutQuestionnaireInput, DistributorEmployeeUncheckedCreateWithoutQuestionnaireInput>
    where?: DistributorEmployeeWhereInput
  }

  export type DistributorEmployeeUpdateToOneWithWhereWithoutQuestionnaireInput = {
    where?: DistributorEmployeeWhereInput
    data: XOR<DistributorEmployeeUpdateWithoutQuestionnaireInput, DistributorEmployeeUncheckedUpdateWithoutQuestionnaireInput>
  }

  export type DistributorEmployeeUpdateWithoutQuestionnaireInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type DistributorEmployeeUncheckedUpdateWithoutQuestionnaireInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type DataStoUpsertWithoutQuestionnaireInput = {
    update: XOR<DataStoUpdateWithoutQuestionnaireInput, DataStoUncheckedUpdateWithoutQuestionnaireInput>
    create: XOR<DataStoCreateWithoutQuestionnaireInput, DataStoUncheckedCreateWithoutQuestionnaireInput>
    where?: DataStoWhereInput
  }

  export type DataStoUpdateToOneWithWhereWithoutQuestionnaireInput = {
    where?: DataStoWhereInput
    data: XOR<DataStoUpdateWithoutQuestionnaireInput, DataStoUncheckedUpdateWithoutQuestionnaireInput>
  }

  export type DataStoUpdateWithoutQuestionnaireInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    code_client_avtoevro?: StringFieldUpdateOperationsInput | string
    code_client_avtorus?: StringFieldUpdateOperationsInput | string
    code_client_rossko?: StringFieldUpdateOperationsInput | string
  }

  export type DataStoUncheckedUpdateWithoutQuestionnaireInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    code_client_avtoevro?: StringFieldUpdateOperationsInput | string
    code_client_avtorus?: StringFieldUpdateOperationsInput | string
    code_client_rossko?: StringFieldUpdateOperationsInput | string
  }

  export type IInnUpsertWithWhereUniqueWithoutQuestionnaireInput = {
    where: IInnWhereUniqueInput
    update: XOR<IInnUpdateWithoutQuestionnaireInput, IInnUncheckedUpdateWithoutQuestionnaireInput>
    create: XOR<IInnCreateWithoutQuestionnaireInput, IInnUncheckedCreateWithoutQuestionnaireInput>
  }

  export type IInnUpdateWithWhereUniqueWithoutQuestionnaireInput = {
    where: IInnWhereUniqueInput
    data: XOR<IInnUpdateWithoutQuestionnaireInput, IInnUncheckedUpdateWithoutQuestionnaireInput>
  }

  export type IInnUpdateManyWithWhereWithoutQuestionnaireInput = {
    where: IInnScalarWhereInput
    data: XOR<IInnUpdateManyMutationInput, IInnUncheckedUpdateManyWithoutQuestionnaireInput>
  }

  export type IInnScalarWhereInput = {
    AND?: IInnScalarWhereInput | IInnScalarWhereInput[]
    OR?: IInnScalarWhereInput[]
    NOT?: IInnScalarWhereInput | IInnScalarWhereInput[]
    id?: IntFilter<"IInn"> | number
    inn?: StringFilter<"IInn"> | string
    questionnaireId?: IntFilter<"IInn"> | number
  }

  export type ImagesUpsertWithWhereUniqueWithoutQuestionnaireInput = {
    where: ImagesWhereUniqueInput
    update: XOR<ImagesUpdateWithoutQuestionnaireInput, ImagesUncheckedUpdateWithoutQuestionnaireInput>
    create: XOR<ImagesCreateWithoutQuestionnaireInput, ImagesUncheckedCreateWithoutQuestionnaireInput>
  }

  export type ImagesUpdateWithWhereUniqueWithoutQuestionnaireInput = {
    where: ImagesWhereUniqueInput
    data: XOR<ImagesUpdateWithoutQuestionnaireInput, ImagesUncheckedUpdateWithoutQuestionnaireInput>
  }

  export type ImagesUpdateManyWithWhereWithoutQuestionnaireInput = {
    where: ImagesScalarWhereInput
    data: XOR<ImagesUpdateManyMutationInput, ImagesUncheckedUpdateManyWithoutQuestionnaireInput>
  }

  export type ImagesScalarWhereInput = {
    AND?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
    OR?: ImagesScalarWhereInput[]
    NOT?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
    id?: IntFilter<"Images"> | number
    path?: StringFilter<"Images"> | string
    description?: StringFilter<"Images"> | string
    questionnaireId?: IntFilter<"Images"> | number
  }

  export type LiftsUpsertWithoutQuestionnaireInput = {
    update: XOR<LiftsUpdateWithoutQuestionnaireInput, LiftsUncheckedUpdateWithoutQuestionnaireInput>
    create: XOR<LiftsCreateWithoutQuestionnaireInput, LiftsUncheckedCreateWithoutQuestionnaireInput>
    where?: LiftsWhereInput
  }

  export type LiftsUpdateToOneWithWhereWithoutQuestionnaireInput = {
    where?: LiftsWhereInput
    data: XOR<LiftsUpdateWithoutQuestionnaireInput, LiftsUncheckedUpdateWithoutQuestionnaireInput>
  }

  export type LiftsUpdateWithoutQuestionnaireInput = {
    twoPostLiftScissors?: IntFieldUpdateOperationsInput | number
    fourPostLift?: IntFieldUpdateOperationsInput | number
    fourPostLiftTraverse?: IntFieldUpdateOperationsInput | number
    pits?: IntFieldUpdateOperationsInput | number
    pitsEquippedTraverse?: IntFieldUpdateOperationsInput | number
    postElectronicDiagnostic?: IntFieldUpdateOperationsInput | number
    postAdditionalEquipment?: IntFieldUpdateOperationsInput | number
  }

  export type LiftsUncheckedUpdateWithoutQuestionnaireInput = {
    id?: IntFieldUpdateOperationsInput | number
    twoPostLiftScissors?: IntFieldUpdateOperationsInput | number
    fourPostLift?: IntFieldUpdateOperationsInput | number
    fourPostLiftTraverse?: IntFieldUpdateOperationsInput | number
    pits?: IntFieldUpdateOperationsInput | number
    pitsEquippedTraverse?: IntFieldUpdateOperationsInput | number
    postElectronicDiagnostic?: IntFieldUpdateOperationsInput | number
    postAdditionalEquipment?: IntFieldUpdateOperationsInput | number
  }

  export type ManagerUpsertWithoutQuestionnaireInput = {
    update: XOR<ManagerUpdateWithoutQuestionnaireInput, ManagerUncheckedUpdateWithoutQuestionnaireInput>
    create: XOR<ManagerCreateWithoutQuestionnaireInput, ManagerUncheckedCreateWithoutQuestionnaireInput>
    where?: ManagerWhereInput
  }

  export type ManagerUpdateToOneWithWhereWithoutQuestionnaireInput = {
    where?: ManagerWhereInput
    data: XOR<ManagerUpdateWithoutQuestionnaireInput, ManagerUncheckedUpdateWithoutQuestionnaireInput>
  }

  export type ManagerUpdateWithoutQuestionnaireInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ManagerUncheckedUpdateWithoutQuestionnaireInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type SignatoryManagerUpsertWithoutQuestionnaireInput = {
    update: XOR<SignatoryManagerUpdateWithoutQuestionnaireInput, SignatoryManagerUncheckedUpdateWithoutQuestionnaireInput>
    create: XOR<SignatoryManagerCreateWithoutQuestionnaireInput, SignatoryManagerUncheckedCreateWithoutQuestionnaireInput>
    where?: SignatoryManagerWhereInput
  }

  export type SignatoryManagerUpdateToOneWithWhereWithoutQuestionnaireInput = {
    where?: SignatoryManagerWhereInput
    data: XOR<SignatoryManagerUpdateWithoutQuestionnaireInput, SignatoryManagerUncheckedUpdateWithoutQuestionnaireInput>
  }

  export type SignatoryManagerUpdateWithoutQuestionnaireInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type SignatoryManagerUncheckedUpdateWithoutQuestionnaireInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ConfirmDataUpsertWithoutQuestionnaireInput = {
    update: XOR<ConfirmDataUpdateWithoutQuestionnaireInput, ConfirmDataUncheckedUpdateWithoutQuestionnaireInput>
    create: XOR<ConfirmDataCreateWithoutQuestionnaireInput, ConfirmDataUncheckedCreateWithoutQuestionnaireInput>
    where?: ConfirmDataWhereInput
  }

  export type ConfirmDataUpdateToOneWithWhereWithoutQuestionnaireInput = {
    where?: ConfirmDataWhereInput
    data: XOR<ConfirmDataUpdateWithoutQuestionnaireInput, ConfirmDataUncheckedUpdateWithoutQuestionnaireInput>
  }

  export type ConfirmDataUpdateWithoutQuestionnaireInput = {
    loginOne?: StringFieldUpdateOperationsInput | string
    loginTwo?: StringFieldUpdateOperationsInput | string
    lifts?: IntFieldUpdateOperationsInput | number
  }

  export type ConfirmDataUncheckedUpdateWithoutQuestionnaireInput = {
    id?: IntFieldUpdateOperationsInput | number
    loginOne?: StringFieldUpdateOperationsInput | string
    loginTwo?: StringFieldUpdateOperationsInput | string
    lifts?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionnaireCreateWithoutDistributor_employeeInput = {
    distributor: string
    status: $Enums.Status
    comment?: string | null
    created_date: Date | string
    updated_date: Date | string
    data_sto?: DataStoCreateNestedOneWithoutQuestionnaireInput
    inns?: IInnCreateNestedManyWithoutQuestionnaireInput
    images?: ImagesCreateNestedManyWithoutQuestionnaireInput
    lifts?: LiftsCreateNestedOneWithoutQuestionnaireInput
    manager?: ManagerCreateNestedOneWithoutQuestionnaireInput
    signatoryManager?: SignatoryManagerCreateNestedOneWithoutQuestionnaireInput
    confirmData?: ConfirmDataCreateNestedOneWithoutQuestionnaireInput
  }

  export type QuestionnaireUncheckedCreateWithoutDistributor_employeeInput = {
    id?: number
    distributor: string
    status: $Enums.Status
    comment?: string | null
    created_date: Date | string
    updated_date: Date | string
    data_sto?: DataStoUncheckedCreateNestedOneWithoutQuestionnaireInput
    inns?: IInnUncheckedCreateNestedManyWithoutQuestionnaireInput
    images?: ImagesUncheckedCreateNestedManyWithoutQuestionnaireInput
    lifts?: LiftsUncheckedCreateNestedOneWithoutQuestionnaireInput
    manager?: ManagerUncheckedCreateNestedOneWithoutQuestionnaireInput
    signatoryManager?: SignatoryManagerUncheckedCreateNestedOneWithoutQuestionnaireInput
    confirmData?: ConfirmDataUncheckedCreateNestedOneWithoutQuestionnaireInput
  }

  export type QuestionnaireCreateOrConnectWithoutDistributor_employeeInput = {
    where: QuestionnaireWhereUniqueInput
    create: XOR<QuestionnaireCreateWithoutDistributor_employeeInput, QuestionnaireUncheckedCreateWithoutDistributor_employeeInput>
  }

  export type QuestionnaireUpsertWithoutDistributor_employeeInput = {
    update: XOR<QuestionnaireUpdateWithoutDistributor_employeeInput, QuestionnaireUncheckedUpdateWithoutDistributor_employeeInput>
    create: XOR<QuestionnaireCreateWithoutDistributor_employeeInput, QuestionnaireUncheckedCreateWithoutDistributor_employeeInput>
    where?: QuestionnaireWhereInput
  }

  export type QuestionnaireUpdateToOneWithWhereWithoutDistributor_employeeInput = {
    where?: QuestionnaireWhereInput
    data: XOR<QuestionnaireUpdateWithoutDistributor_employeeInput, QuestionnaireUncheckedUpdateWithoutDistributor_employeeInput>
  }

  export type QuestionnaireUpdateWithoutDistributor_employeeInput = {
    distributor?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    data_sto?: DataStoUpdateOneWithoutQuestionnaireNestedInput
    inns?: IInnUpdateManyWithoutQuestionnaireNestedInput
    images?: ImagesUpdateManyWithoutQuestionnaireNestedInput
    lifts?: LiftsUpdateOneWithoutQuestionnaireNestedInput
    manager?: ManagerUpdateOneWithoutQuestionnaireNestedInput
    signatoryManager?: SignatoryManagerUpdateOneWithoutQuestionnaireNestedInput
    confirmData?: ConfirmDataUpdateOneWithoutQuestionnaireNestedInput
  }

  export type QuestionnaireUncheckedUpdateWithoutDistributor_employeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    distributor?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    data_sto?: DataStoUncheckedUpdateOneWithoutQuestionnaireNestedInput
    inns?: IInnUncheckedUpdateManyWithoutQuestionnaireNestedInput
    images?: ImagesUncheckedUpdateManyWithoutQuestionnaireNestedInput
    lifts?: LiftsUncheckedUpdateOneWithoutQuestionnaireNestedInput
    manager?: ManagerUncheckedUpdateOneWithoutQuestionnaireNestedInput
    signatoryManager?: SignatoryManagerUncheckedUpdateOneWithoutQuestionnaireNestedInput
    confirmData?: ConfirmDataUncheckedUpdateOneWithoutQuestionnaireNestedInput
  }

  export type QuestionnaireCreateWithoutData_stoInput = {
    distributor: string
    status: $Enums.Status
    comment?: string | null
    created_date: Date | string
    updated_date: Date | string
    distributor_employee?: DistributorEmployeeCreateNestedOneWithoutQuestionnaireInput
    inns?: IInnCreateNestedManyWithoutQuestionnaireInput
    images?: ImagesCreateNestedManyWithoutQuestionnaireInput
    lifts?: LiftsCreateNestedOneWithoutQuestionnaireInput
    manager?: ManagerCreateNestedOneWithoutQuestionnaireInput
    signatoryManager?: SignatoryManagerCreateNestedOneWithoutQuestionnaireInput
    confirmData?: ConfirmDataCreateNestedOneWithoutQuestionnaireInput
  }

  export type QuestionnaireUncheckedCreateWithoutData_stoInput = {
    id?: number
    distributor: string
    status: $Enums.Status
    comment?: string | null
    created_date: Date | string
    updated_date: Date | string
    distributor_employee?: DistributorEmployeeUncheckedCreateNestedOneWithoutQuestionnaireInput
    inns?: IInnUncheckedCreateNestedManyWithoutQuestionnaireInput
    images?: ImagesUncheckedCreateNestedManyWithoutQuestionnaireInput
    lifts?: LiftsUncheckedCreateNestedOneWithoutQuestionnaireInput
    manager?: ManagerUncheckedCreateNestedOneWithoutQuestionnaireInput
    signatoryManager?: SignatoryManagerUncheckedCreateNestedOneWithoutQuestionnaireInput
    confirmData?: ConfirmDataUncheckedCreateNestedOneWithoutQuestionnaireInput
  }

  export type QuestionnaireCreateOrConnectWithoutData_stoInput = {
    where: QuestionnaireWhereUniqueInput
    create: XOR<QuestionnaireCreateWithoutData_stoInput, QuestionnaireUncheckedCreateWithoutData_stoInput>
  }

  export type QuestionnaireUpsertWithoutData_stoInput = {
    update: XOR<QuestionnaireUpdateWithoutData_stoInput, QuestionnaireUncheckedUpdateWithoutData_stoInput>
    create: XOR<QuestionnaireCreateWithoutData_stoInput, QuestionnaireUncheckedCreateWithoutData_stoInput>
    where?: QuestionnaireWhereInput
  }

  export type QuestionnaireUpdateToOneWithWhereWithoutData_stoInput = {
    where?: QuestionnaireWhereInput
    data: XOR<QuestionnaireUpdateWithoutData_stoInput, QuestionnaireUncheckedUpdateWithoutData_stoInput>
  }

  export type QuestionnaireUpdateWithoutData_stoInput = {
    distributor?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    distributor_employee?: DistributorEmployeeUpdateOneWithoutQuestionnaireNestedInput
    inns?: IInnUpdateManyWithoutQuestionnaireNestedInput
    images?: ImagesUpdateManyWithoutQuestionnaireNestedInput
    lifts?: LiftsUpdateOneWithoutQuestionnaireNestedInput
    manager?: ManagerUpdateOneWithoutQuestionnaireNestedInput
    signatoryManager?: SignatoryManagerUpdateOneWithoutQuestionnaireNestedInput
    confirmData?: ConfirmDataUpdateOneWithoutQuestionnaireNestedInput
  }

  export type QuestionnaireUncheckedUpdateWithoutData_stoInput = {
    id?: IntFieldUpdateOperationsInput | number
    distributor?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    distributor_employee?: DistributorEmployeeUncheckedUpdateOneWithoutQuestionnaireNestedInput
    inns?: IInnUncheckedUpdateManyWithoutQuestionnaireNestedInput
    images?: ImagesUncheckedUpdateManyWithoutQuestionnaireNestedInput
    lifts?: LiftsUncheckedUpdateOneWithoutQuestionnaireNestedInput
    manager?: ManagerUncheckedUpdateOneWithoutQuestionnaireNestedInput
    signatoryManager?: SignatoryManagerUncheckedUpdateOneWithoutQuestionnaireNestedInput
    confirmData?: ConfirmDataUncheckedUpdateOneWithoutQuestionnaireNestedInput
  }

  export type QuestionnaireCreateWithoutInnsInput = {
    distributor: string
    status: $Enums.Status
    comment?: string | null
    created_date: Date | string
    updated_date: Date | string
    distributor_employee?: DistributorEmployeeCreateNestedOneWithoutQuestionnaireInput
    data_sto?: DataStoCreateNestedOneWithoutQuestionnaireInput
    images?: ImagesCreateNestedManyWithoutQuestionnaireInput
    lifts?: LiftsCreateNestedOneWithoutQuestionnaireInput
    manager?: ManagerCreateNestedOneWithoutQuestionnaireInput
    signatoryManager?: SignatoryManagerCreateNestedOneWithoutQuestionnaireInput
    confirmData?: ConfirmDataCreateNestedOneWithoutQuestionnaireInput
  }

  export type QuestionnaireUncheckedCreateWithoutInnsInput = {
    id?: number
    distributor: string
    status: $Enums.Status
    comment?: string | null
    created_date: Date | string
    updated_date: Date | string
    distributor_employee?: DistributorEmployeeUncheckedCreateNestedOneWithoutQuestionnaireInput
    data_sto?: DataStoUncheckedCreateNestedOneWithoutQuestionnaireInput
    images?: ImagesUncheckedCreateNestedManyWithoutQuestionnaireInput
    lifts?: LiftsUncheckedCreateNestedOneWithoutQuestionnaireInput
    manager?: ManagerUncheckedCreateNestedOneWithoutQuestionnaireInput
    signatoryManager?: SignatoryManagerUncheckedCreateNestedOneWithoutQuestionnaireInput
    confirmData?: ConfirmDataUncheckedCreateNestedOneWithoutQuestionnaireInput
  }

  export type QuestionnaireCreateOrConnectWithoutInnsInput = {
    where: QuestionnaireWhereUniqueInput
    create: XOR<QuestionnaireCreateWithoutInnsInput, QuestionnaireUncheckedCreateWithoutInnsInput>
  }

  export type QuestionnaireUpsertWithoutInnsInput = {
    update: XOR<QuestionnaireUpdateWithoutInnsInput, QuestionnaireUncheckedUpdateWithoutInnsInput>
    create: XOR<QuestionnaireCreateWithoutInnsInput, QuestionnaireUncheckedCreateWithoutInnsInput>
    where?: QuestionnaireWhereInput
  }

  export type QuestionnaireUpdateToOneWithWhereWithoutInnsInput = {
    where?: QuestionnaireWhereInput
    data: XOR<QuestionnaireUpdateWithoutInnsInput, QuestionnaireUncheckedUpdateWithoutInnsInput>
  }

  export type QuestionnaireUpdateWithoutInnsInput = {
    distributor?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    distributor_employee?: DistributorEmployeeUpdateOneWithoutQuestionnaireNestedInput
    data_sto?: DataStoUpdateOneWithoutQuestionnaireNestedInput
    images?: ImagesUpdateManyWithoutQuestionnaireNestedInput
    lifts?: LiftsUpdateOneWithoutQuestionnaireNestedInput
    manager?: ManagerUpdateOneWithoutQuestionnaireNestedInput
    signatoryManager?: SignatoryManagerUpdateOneWithoutQuestionnaireNestedInput
    confirmData?: ConfirmDataUpdateOneWithoutQuestionnaireNestedInput
  }

  export type QuestionnaireUncheckedUpdateWithoutInnsInput = {
    id?: IntFieldUpdateOperationsInput | number
    distributor?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    distributor_employee?: DistributorEmployeeUncheckedUpdateOneWithoutQuestionnaireNestedInput
    data_sto?: DataStoUncheckedUpdateOneWithoutQuestionnaireNestedInput
    images?: ImagesUncheckedUpdateManyWithoutQuestionnaireNestedInput
    lifts?: LiftsUncheckedUpdateOneWithoutQuestionnaireNestedInput
    manager?: ManagerUncheckedUpdateOneWithoutQuestionnaireNestedInput
    signatoryManager?: SignatoryManagerUncheckedUpdateOneWithoutQuestionnaireNestedInput
    confirmData?: ConfirmDataUncheckedUpdateOneWithoutQuestionnaireNestedInput
  }

  export type QuestionnaireCreateWithoutManagerInput = {
    distributor: string
    status: $Enums.Status
    comment?: string | null
    created_date: Date | string
    updated_date: Date | string
    distributor_employee?: DistributorEmployeeCreateNestedOneWithoutQuestionnaireInput
    data_sto?: DataStoCreateNestedOneWithoutQuestionnaireInput
    inns?: IInnCreateNestedManyWithoutQuestionnaireInput
    images?: ImagesCreateNestedManyWithoutQuestionnaireInput
    lifts?: LiftsCreateNestedOneWithoutQuestionnaireInput
    signatoryManager?: SignatoryManagerCreateNestedOneWithoutQuestionnaireInput
    confirmData?: ConfirmDataCreateNestedOneWithoutQuestionnaireInput
  }

  export type QuestionnaireUncheckedCreateWithoutManagerInput = {
    id?: number
    distributor: string
    status: $Enums.Status
    comment?: string | null
    created_date: Date | string
    updated_date: Date | string
    distributor_employee?: DistributorEmployeeUncheckedCreateNestedOneWithoutQuestionnaireInput
    data_sto?: DataStoUncheckedCreateNestedOneWithoutQuestionnaireInput
    inns?: IInnUncheckedCreateNestedManyWithoutQuestionnaireInput
    images?: ImagesUncheckedCreateNestedManyWithoutQuestionnaireInput
    lifts?: LiftsUncheckedCreateNestedOneWithoutQuestionnaireInput
    signatoryManager?: SignatoryManagerUncheckedCreateNestedOneWithoutQuestionnaireInput
    confirmData?: ConfirmDataUncheckedCreateNestedOneWithoutQuestionnaireInput
  }

  export type QuestionnaireCreateOrConnectWithoutManagerInput = {
    where: QuestionnaireWhereUniqueInput
    create: XOR<QuestionnaireCreateWithoutManagerInput, QuestionnaireUncheckedCreateWithoutManagerInput>
  }

  export type QuestionnaireUpsertWithoutManagerInput = {
    update: XOR<QuestionnaireUpdateWithoutManagerInput, QuestionnaireUncheckedUpdateWithoutManagerInput>
    create: XOR<QuestionnaireCreateWithoutManagerInput, QuestionnaireUncheckedCreateWithoutManagerInput>
    where?: QuestionnaireWhereInput
  }

  export type QuestionnaireUpdateToOneWithWhereWithoutManagerInput = {
    where?: QuestionnaireWhereInput
    data: XOR<QuestionnaireUpdateWithoutManagerInput, QuestionnaireUncheckedUpdateWithoutManagerInput>
  }

  export type QuestionnaireUpdateWithoutManagerInput = {
    distributor?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    distributor_employee?: DistributorEmployeeUpdateOneWithoutQuestionnaireNestedInput
    data_sto?: DataStoUpdateOneWithoutQuestionnaireNestedInput
    inns?: IInnUpdateManyWithoutQuestionnaireNestedInput
    images?: ImagesUpdateManyWithoutQuestionnaireNestedInput
    lifts?: LiftsUpdateOneWithoutQuestionnaireNestedInput
    signatoryManager?: SignatoryManagerUpdateOneWithoutQuestionnaireNestedInput
    confirmData?: ConfirmDataUpdateOneWithoutQuestionnaireNestedInput
  }

  export type QuestionnaireUncheckedUpdateWithoutManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    distributor?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    distributor_employee?: DistributorEmployeeUncheckedUpdateOneWithoutQuestionnaireNestedInput
    data_sto?: DataStoUncheckedUpdateOneWithoutQuestionnaireNestedInput
    inns?: IInnUncheckedUpdateManyWithoutQuestionnaireNestedInput
    images?: ImagesUncheckedUpdateManyWithoutQuestionnaireNestedInput
    lifts?: LiftsUncheckedUpdateOneWithoutQuestionnaireNestedInput
    signatoryManager?: SignatoryManagerUncheckedUpdateOneWithoutQuestionnaireNestedInput
    confirmData?: ConfirmDataUncheckedUpdateOneWithoutQuestionnaireNestedInput
  }

  export type QuestionnaireCreateWithoutSignatoryManagerInput = {
    distributor: string
    status: $Enums.Status
    comment?: string | null
    created_date: Date | string
    updated_date: Date | string
    distributor_employee?: DistributorEmployeeCreateNestedOneWithoutQuestionnaireInput
    data_sto?: DataStoCreateNestedOneWithoutQuestionnaireInput
    inns?: IInnCreateNestedManyWithoutQuestionnaireInput
    images?: ImagesCreateNestedManyWithoutQuestionnaireInput
    lifts?: LiftsCreateNestedOneWithoutQuestionnaireInput
    manager?: ManagerCreateNestedOneWithoutQuestionnaireInput
    confirmData?: ConfirmDataCreateNestedOneWithoutQuestionnaireInput
  }

  export type QuestionnaireUncheckedCreateWithoutSignatoryManagerInput = {
    id?: number
    distributor: string
    status: $Enums.Status
    comment?: string | null
    created_date: Date | string
    updated_date: Date | string
    distributor_employee?: DistributorEmployeeUncheckedCreateNestedOneWithoutQuestionnaireInput
    data_sto?: DataStoUncheckedCreateNestedOneWithoutQuestionnaireInput
    inns?: IInnUncheckedCreateNestedManyWithoutQuestionnaireInput
    images?: ImagesUncheckedCreateNestedManyWithoutQuestionnaireInput
    lifts?: LiftsUncheckedCreateNestedOneWithoutQuestionnaireInput
    manager?: ManagerUncheckedCreateNestedOneWithoutQuestionnaireInput
    confirmData?: ConfirmDataUncheckedCreateNestedOneWithoutQuestionnaireInput
  }

  export type QuestionnaireCreateOrConnectWithoutSignatoryManagerInput = {
    where: QuestionnaireWhereUniqueInput
    create: XOR<QuestionnaireCreateWithoutSignatoryManagerInput, QuestionnaireUncheckedCreateWithoutSignatoryManagerInput>
  }

  export type QuestionnaireUpsertWithoutSignatoryManagerInput = {
    update: XOR<QuestionnaireUpdateWithoutSignatoryManagerInput, QuestionnaireUncheckedUpdateWithoutSignatoryManagerInput>
    create: XOR<QuestionnaireCreateWithoutSignatoryManagerInput, QuestionnaireUncheckedCreateWithoutSignatoryManagerInput>
    where?: QuestionnaireWhereInput
  }

  export type QuestionnaireUpdateToOneWithWhereWithoutSignatoryManagerInput = {
    where?: QuestionnaireWhereInput
    data: XOR<QuestionnaireUpdateWithoutSignatoryManagerInput, QuestionnaireUncheckedUpdateWithoutSignatoryManagerInput>
  }

  export type QuestionnaireUpdateWithoutSignatoryManagerInput = {
    distributor?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    distributor_employee?: DistributorEmployeeUpdateOneWithoutQuestionnaireNestedInput
    data_sto?: DataStoUpdateOneWithoutQuestionnaireNestedInput
    inns?: IInnUpdateManyWithoutQuestionnaireNestedInput
    images?: ImagesUpdateManyWithoutQuestionnaireNestedInput
    lifts?: LiftsUpdateOneWithoutQuestionnaireNestedInput
    manager?: ManagerUpdateOneWithoutQuestionnaireNestedInput
    confirmData?: ConfirmDataUpdateOneWithoutQuestionnaireNestedInput
  }

  export type QuestionnaireUncheckedUpdateWithoutSignatoryManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    distributor?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    distributor_employee?: DistributorEmployeeUncheckedUpdateOneWithoutQuestionnaireNestedInput
    data_sto?: DataStoUncheckedUpdateOneWithoutQuestionnaireNestedInput
    inns?: IInnUncheckedUpdateManyWithoutQuestionnaireNestedInput
    images?: ImagesUncheckedUpdateManyWithoutQuestionnaireNestedInput
    lifts?: LiftsUncheckedUpdateOneWithoutQuestionnaireNestedInput
    manager?: ManagerUncheckedUpdateOneWithoutQuestionnaireNestedInput
    confirmData?: ConfirmDataUncheckedUpdateOneWithoutQuestionnaireNestedInput
  }

  export type QuestionnaireCreateWithoutLiftsInput = {
    distributor: string
    status: $Enums.Status
    comment?: string | null
    created_date: Date | string
    updated_date: Date | string
    distributor_employee?: DistributorEmployeeCreateNestedOneWithoutQuestionnaireInput
    data_sto?: DataStoCreateNestedOneWithoutQuestionnaireInput
    inns?: IInnCreateNestedManyWithoutQuestionnaireInput
    images?: ImagesCreateNestedManyWithoutQuestionnaireInput
    manager?: ManagerCreateNestedOneWithoutQuestionnaireInput
    signatoryManager?: SignatoryManagerCreateNestedOneWithoutQuestionnaireInput
    confirmData?: ConfirmDataCreateNestedOneWithoutQuestionnaireInput
  }

  export type QuestionnaireUncheckedCreateWithoutLiftsInput = {
    id?: number
    distributor: string
    status: $Enums.Status
    comment?: string | null
    created_date: Date | string
    updated_date: Date | string
    distributor_employee?: DistributorEmployeeUncheckedCreateNestedOneWithoutQuestionnaireInput
    data_sto?: DataStoUncheckedCreateNestedOneWithoutQuestionnaireInput
    inns?: IInnUncheckedCreateNestedManyWithoutQuestionnaireInput
    images?: ImagesUncheckedCreateNestedManyWithoutQuestionnaireInput
    manager?: ManagerUncheckedCreateNestedOneWithoutQuestionnaireInput
    signatoryManager?: SignatoryManagerUncheckedCreateNestedOneWithoutQuestionnaireInput
    confirmData?: ConfirmDataUncheckedCreateNestedOneWithoutQuestionnaireInput
  }

  export type QuestionnaireCreateOrConnectWithoutLiftsInput = {
    where: QuestionnaireWhereUniqueInput
    create: XOR<QuestionnaireCreateWithoutLiftsInput, QuestionnaireUncheckedCreateWithoutLiftsInput>
  }

  export type QuestionnaireUpsertWithoutLiftsInput = {
    update: XOR<QuestionnaireUpdateWithoutLiftsInput, QuestionnaireUncheckedUpdateWithoutLiftsInput>
    create: XOR<QuestionnaireCreateWithoutLiftsInput, QuestionnaireUncheckedCreateWithoutLiftsInput>
    where?: QuestionnaireWhereInput
  }

  export type QuestionnaireUpdateToOneWithWhereWithoutLiftsInput = {
    where?: QuestionnaireWhereInput
    data: XOR<QuestionnaireUpdateWithoutLiftsInput, QuestionnaireUncheckedUpdateWithoutLiftsInput>
  }

  export type QuestionnaireUpdateWithoutLiftsInput = {
    distributor?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    distributor_employee?: DistributorEmployeeUpdateOneWithoutQuestionnaireNestedInput
    data_sto?: DataStoUpdateOneWithoutQuestionnaireNestedInput
    inns?: IInnUpdateManyWithoutQuestionnaireNestedInput
    images?: ImagesUpdateManyWithoutQuestionnaireNestedInput
    manager?: ManagerUpdateOneWithoutQuestionnaireNestedInput
    signatoryManager?: SignatoryManagerUpdateOneWithoutQuestionnaireNestedInput
    confirmData?: ConfirmDataUpdateOneWithoutQuestionnaireNestedInput
  }

  export type QuestionnaireUncheckedUpdateWithoutLiftsInput = {
    id?: IntFieldUpdateOperationsInput | number
    distributor?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    distributor_employee?: DistributorEmployeeUncheckedUpdateOneWithoutQuestionnaireNestedInput
    data_sto?: DataStoUncheckedUpdateOneWithoutQuestionnaireNestedInput
    inns?: IInnUncheckedUpdateManyWithoutQuestionnaireNestedInput
    images?: ImagesUncheckedUpdateManyWithoutQuestionnaireNestedInput
    manager?: ManagerUncheckedUpdateOneWithoutQuestionnaireNestedInput
    signatoryManager?: SignatoryManagerUncheckedUpdateOneWithoutQuestionnaireNestedInput
    confirmData?: ConfirmDataUncheckedUpdateOneWithoutQuestionnaireNestedInput
  }

  export type QuestionnaireCreateWithoutConfirmDataInput = {
    distributor: string
    status: $Enums.Status
    comment?: string | null
    created_date: Date | string
    updated_date: Date | string
    distributor_employee?: DistributorEmployeeCreateNestedOneWithoutQuestionnaireInput
    data_sto?: DataStoCreateNestedOneWithoutQuestionnaireInput
    inns?: IInnCreateNestedManyWithoutQuestionnaireInput
    images?: ImagesCreateNestedManyWithoutQuestionnaireInput
    lifts?: LiftsCreateNestedOneWithoutQuestionnaireInput
    manager?: ManagerCreateNestedOneWithoutQuestionnaireInput
    signatoryManager?: SignatoryManagerCreateNestedOneWithoutQuestionnaireInput
  }

  export type QuestionnaireUncheckedCreateWithoutConfirmDataInput = {
    id?: number
    distributor: string
    status: $Enums.Status
    comment?: string | null
    created_date: Date | string
    updated_date: Date | string
    distributor_employee?: DistributorEmployeeUncheckedCreateNestedOneWithoutQuestionnaireInput
    data_sto?: DataStoUncheckedCreateNestedOneWithoutQuestionnaireInput
    inns?: IInnUncheckedCreateNestedManyWithoutQuestionnaireInput
    images?: ImagesUncheckedCreateNestedManyWithoutQuestionnaireInput
    lifts?: LiftsUncheckedCreateNestedOneWithoutQuestionnaireInput
    manager?: ManagerUncheckedCreateNestedOneWithoutQuestionnaireInput
    signatoryManager?: SignatoryManagerUncheckedCreateNestedOneWithoutQuestionnaireInput
  }

  export type QuestionnaireCreateOrConnectWithoutConfirmDataInput = {
    where: QuestionnaireWhereUniqueInput
    create: XOR<QuestionnaireCreateWithoutConfirmDataInput, QuestionnaireUncheckedCreateWithoutConfirmDataInput>
  }

  export type QuestionnaireUpsertWithoutConfirmDataInput = {
    update: XOR<QuestionnaireUpdateWithoutConfirmDataInput, QuestionnaireUncheckedUpdateWithoutConfirmDataInput>
    create: XOR<QuestionnaireCreateWithoutConfirmDataInput, QuestionnaireUncheckedCreateWithoutConfirmDataInput>
    where?: QuestionnaireWhereInput
  }

  export type QuestionnaireUpdateToOneWithWhereWithoutConfirmDataInput = {
    where?: QuestionnaireWhereInput
    data: XOR<QuestionnaireUpdateWithoutConfirmDataInput, QuestionnaireUncheckedUpdateWithoutConfirmDataInput>
  }

  export type QuestionnaireUpdateWithoutConfirmDataInput = {
    distributor?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    distributor_employee?: DistributorEmployeeUpdateOneWithoutQuestionnaireNestedInput
    data_sto?: DataStoUpdateOneWithoutQuestionnaireNestedInput
    inns?: IInnUpdateManyWithoutQuestionnaireNestedInput
    images?: ImagesUpdateManyWithoutQuestionnaireNestedInput
    lifts?: LiftsUpdateOneWithoutQuestionnaireNestedInput
    manager?: ManagerUpdateOneWithoutQuestionnaireNestedInput
    signatoryManager?: SignatoryManagerUpdateOneWithoutQuestionnaireNestedInput
  }

  export type QuestionnaireUncheckedUpdateWithoutConfirmDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    distributor?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    distributor_employee?: DistributorEmployeeUncheckedUpdateOneWithoutQuestionnaireNestedInput
    data_sto?: DataStoUncheckedUpdateOneWithoutQuestionnaireNestedInput
    inns?: IInnUncheckedUpdateManyWithoutQuestionnaireNestedInput
    images?: ImagesUncheckedUpdateManyWithoutQuestionnaireNestedInput
    lifts?: LiftsUncheckedUpdateOneWithoutQuestionnaireNestedInput
    manager?: ManagerUncheckedUpdateOneWithoutQuestionnaireNestedInput
    signatoryManager?: SignatoryManagerUncheckedUpdateOneWithoutQuestionnaireNestedInput
  }

  export type QuestionnaireCreateWithoutImagesInput = {
    distributor: string
    status: $Enums.Status
    comment?: string | null
    created_date: Date | string
    updated_date: Date | string
    distributor_employee?: DistributorEmployeeCreateNestedOneWithoutQuestionnaireInput
    data_sto?: DataStoCreateNestedOneWithoutQuestionnaireInput
    inns?: IInnCreateNestedManyWithoutQuestionnaireInput
    lifts?: LiftsCreateNestedOneWithoutQuestionnaireInput
    manager?: ManagerCreateNestedOneWithoutQuestionnaireInput
    signatoryManager?: SignatoryManagerCreateNestedOneWithoutQuestionnaireInput
    confirmData?: ConfirmDataCreateNestedOneWithoutQuestionnaireInput
  }

  export type QuestionnaireUncheckedCreateWithoutImagesInput = {
    id?: number
    distributor: string
    status: $Enums.Status
    comment?: string | null
    created_date: Date | string
    updated_date: Date | string
    distributor_employee?: DistributorEmployeeUncheckedCreateNestedOneWithoutQuestionnaireInput
    data_sto?: DataStoUncheckedCreateNestedOneWithoutQuestionnaireInput
    inns?: IInnUncheckedCreateNestedManyWithoutQuestionnaireInput
    lifts?: LiftsUncheckedCreateNestedOneWithoutQuestionnaireInput
    manager?: ManagerUncheckedCreateNestedOneWithoutQuestionnaireInput
    signatoryManager?: SignatoryManagerUncheckedCreateNestedOneWithoutQuestionnaireInput
    confirmData?: ConfirmDataUncheckedCreateNestedOneWithoutQuestionnaireInput
  }

  export type QuestionnaireCreateOrConnectWithoutImagesInput = {
    where: QuestionnaireWhereUniqueInput
    create: XOR<QuestionnaireCreateWithoutImagesInput, QuestionnaireUncheckedCreateWithoutImagesInput>
  }

  export type QuestionnaireUpsertWithoutImagesInput = {
    update: XOR<QuestionnaireUpdateWithoutImagesInput, QuestionnaireUncheckedUpdateWithoutImagesInput>
    create: XOR<QuestionnaireCreateWithoutImagesInput, QuestionnaireUncheckedCreateWithoutImagesInput>
    where?: QuestionnaireWhereInput
  }

  export type QuestionnaireUpdateToOneWithWhereWithoutImagesInput = {
    where?: QuestionnaireWhereInput
    data: XOR<QuestionnaireUpdateWithoutImagesInput, QuestionnaireUncheckedUpdateWithoutImagesInput>
  }

  export type QuestionnaireUpdateWithoutImagesInput = {
    distributor?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    distributor_employee?: DistributorEmployeeUpdateOneWithoutQuestionnaireNestedInput
    data_sto?: DataStoUpdateOneWithoutQuestionnaireNestedInput
    inns?: IInnUpdateManyWithoutQuestionnaireNestedInput
    lifts?: LiftsUpdateOneWithoutQuestionnaireNestedInput
    manager?: ManagerUpdateOneWithoutQuestionnaireNestedInput
    signatoryManager?: SignatoryManagerUpdateOneWithoutQuestionnaireNestedInput
    confirmData?: ConfirmDataUpdateOneWithoutQuestionnaireNestedInput
  }

  export type QuestionnaireUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    distributor?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_date?: DateTimeFieldUpdateOperationsInput | Date | string
    distributor_employee?: DistributorEmployeeUncheckedUpdateOneWithoutQuestionnaireNestedInput
    data_sto?: DataStoUncheckedUpdateOneWithoutQuestionnaireNestedInput
    inns?: IInnUncheckedUpdateManyWithoutQuestionnaireNestedInput
    lifts?: LiftsUncheckedUpdateOneWithoutQuestionnaireNestedInput
    manager?: ManagerUncheckedUpdateOneWithoutQuestionnaireNestedInput
    signatoryManager?: SignatoryManagerUncheckedUpdateOneWithoutQuestionnaireNestedInput
    confirmData?: ConfirmDataUncheckedUpdateOneWithoutQuestionnaireNestedInput
  }

  export type IInnCreateManyQuestionnaireInput = {
    id?: number
    inn: string
  }

  export type ImagesCreateManyQuestionnaireInput = {
    id?: number
    path: string
    description: string
  }

  export type IInnUpdateWithoutQuestionnaireInput = {
    inn?: StringFieldUpdateOperationsInput | string
  }

  export type IInnUncheckedUpdateWithoutQuestionnaireInput = {
    id?: IntFieldUpdateOperationsInput | number
    inn?: StringFieldUpdateOperationsInput | string
  }

  export type IInnUncheckedUpdateManyWithoutQuestionnaireInput = {
    id?: IntFieldUpdateOperationsInput | number
    inn?: StringFieldUpdateOperationsInput | string
  }

  export type ImagesUpdateWithoutQuestionnaireInput = {
    path?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ImagesUncheckedUpdateWithoutQuestionnaireInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ImagesUncheckedUpdateManyWithoutQuestionnaireInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use QuestionnaireCountOutputTypeDefaultArgs instead
     */
    export type QuestionnaireCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestionnaireCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestionnaireDefaultArgs instead
     */
    export type QuestionnaireArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestionnaireDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DistributorEmployeeDefaultArgs instead
     */
    export type DistributorEmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DistributorEmployeeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DataStoDefaultArgs instead
     */
    export type DataStoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DataStoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IInnDefaultArgs instead
     */
    export type IInnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IInnDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ManagerDefaultArgs instead
     */
    export type ManagerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ManagerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SignatoryManagerDefaultArgs instead
     */
    export type SignatoryManagerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SignatoryManagerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LiftsDefaultArgs instead
     */
    export type LiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LiftsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConfirmDataDefaultArgs instead
     */
    export type ConfirmDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConfirmDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ImagesDefaultArgs instead
     */
    export type ImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ImagesDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}