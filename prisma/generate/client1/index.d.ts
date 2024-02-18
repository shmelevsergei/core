
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
 * Model GA_ANKETA_ADDR
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type GA_ANKETA_ADDR = $Result.DefaultSelection<Prisma.$GA_ANKETA_ADDRPayload>
/**
 * Model GA_ANKETA_BASE
 * The underlying table does not contain a valid unique identifier and can therefore currently not  handled by Prisma Client.
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type GA_ANKETA_BASE = $Result.DefaultSelection<Prisma.$GA_ANKETA_BASEPayload>
/**
 * Model GA_ANKETA_DOGOVOR
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type GA_ANKETA_DOGOVOR = $Result.DefaultSelection<Prisma.$GA_ANKETA_DOGOVORPayload>
/**
 * Model GA_ANKETA_OBOROT
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type GA_ANKETA_OBOROT = $Result.DefaultSelection<Prisma.$GA_ANKETA_OBOROTPayload>
/**
 * Model GA_WS_USERS
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type GA_WS_USERS = $Result.DefaultSelection<Prisma.$GA_WS_USERSPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more GA_ANKETA_ADDRS
 * const gA_ANKETA_ADDRS = await prisma.gA_ANKETA_ADDR.findMany()
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
   * // Fetch zero or more GA_ANKETA_ADDRS
   * const gA_ANKETA_ADDRS = await prisma.gA_ANKETA_ADDR.findMany()
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
   * `prisma.gA_ANKETA_ADDR`: Exposes CRUD operations for the **GA_ANKETA_ADDR** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GA_ANKETA_ADDRS
    * const gA_ANKETA_ADDRS = await prisma.gA_ANKETA_ADDR.findMany()
    * ```
    */
  get gA_ANKETA_ADDR(): Prisma.GA_ANKETA_ADDRDelegate<ExtArgs>;

  /**
   * `prisma.gA_ANKETA_BASE`: Exposes CRUD operations for the **GA_ANKETA_BASE** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GA_ANKETA_BASES
    * const gA_ANKETA_BASES = await prisma.gA_ANKETA_BASE.findMany()
    * ```
    */
  get gA_ANKETA_BASE(): Prisma.GA_ANKETA_BASEDelegate<ExtArgs>;

  /**
   * `prisma.gA_ANKETA_DOGOVOR`: Exposes CRUD operations for the **GA_ANKETA_DOGOVOR** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GA_ANKETA_DOGOVORS
    * const gA_ANKETA_DOGOVORS = await prisma.gA_ANKETA_DOGOVOR.findMany()
    * ```
    */
  get gA_ANKETA_DOGOVOR(): Prisma.GA_ANKETA_DOGOVORDelegate<ExtArgs>;

  /**
   * `prisma.gA_ANKETA_OBOROT`: Exposes CRUD operations for the **GA_ANKETA_OBOROT** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GA_ANKETA_OBOROTS
    * const gA_ANKETA_OBOROTS = await prisma.gA_ANKETA_OBOROT.findMany()
    * ```
    */
  get gA_ANKETA_OBOROT(): Prisma.GA_ANKETA_OBOROTDelegate<ExtArgs>;

  /**
   * `prisma.gA_WS_USERS`: Exposes CRUD operations for the **GA_WS_USERS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GA_WS_USERS
    * const gA_WS_USERS = await prisma.gA_WS_USERS.findMany()
    * ```
    */
  get gA_WS_USERS(): Prisma.GA_WS_USERSDelegate<ExtArgs>;
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
    GA_ANKETA_ADDR: 'GA_ANKETA_ADDR',
    GA_ANKETA_BASE: 'GA_ANKETA_BASE',
    GA_ANKETA_DOGOVOR: 'GA_ANKETA_DOGOVOR',
    GA_ANKETA_OBOROT: 'GA_ANKETA_OBOROT',
    GA_WS_USERS: 'GA_WS_USERS'
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
      modelProps: 'gA_ANKETA_ADDR' | 'gA_ANKETA_BASE' | 'gA_ANKETA_DOGOVOR' | 'gA_ANKETA_OBOROT' | 'gA_WS_USERS'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      GA_ANKETA_ADDR: {
        payload: Prisma.$GA_ANKETA_ADDRPayload<ExtArgs>
        fields: Prisma.GA_ANKETA_ADDRFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GA_ANKETA_ADDRFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_ADDRPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GA_ANKETA_ADDRFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_ADDRPayload>
          }
          findFirst: {
            args: Prisma.GA_ANKETA_ADDRFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_ADDRPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GA_ANKETA_ADDRFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_ADDRPayload>
          }
          findMany: {
            args: Prisma.GA_ANKETA_ADDRFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_ADDRPayload>[]
          }
          create: {
            args: Prisma.GA_ANKETA_ADDRCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_ADDRPayload>
          }
          createMany: {
            args: Prisma.GA_ANKETA_ADDRCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GA_ANKETA_ADDRDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_ADDRPayload>
          }
          update: {
            args: Prisma.GA_ANKETA_ADDRUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_ADDRPayload>
          }
          deleteMany: {
            args: Prisma.GA_ANKETA_ADDRDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GA_ANKETA_ADDRUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GA_ANKETA_ADDRUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_ADDRPayload>
          }
          aggregate: {
            args: Prisma.GA_ANKETA_ADDRAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGA_ANKETA_ADDR>
          }
          groupBy: {
            args: Prisma.GA_ANKETA_ADDRGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GA_ANKETA_ADDRGroupByOutputType>[]
          }
          count: {
            args: Prisma.GA_ANKETA_ADDRCountArgs<ExtArgs>,
            result: $Utils.Optional<GA_ANKETA_ADDRCountAggregateOutputType> | number
          }
        }
      }
      GA_ANKETA_BASE: {
        payload: Prisma.$GA_ANKETA_BASEPayload<ExtArgs>
        fields: Prisma.GA_ANKETA_BASEFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GA_ANKETA_BASEFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_BASEPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GA_ANKETA_BASEFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_BASEPayload>
          }
          findFirst: {
            args: Prisma.GA_ANKETA_BASEFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_BASEPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GA_ANKETA_BASEFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_BASEPayload>
          }
          findMany: {
            args: Prisma.GA_ANKETA_BASEFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_BASEPayload>[]
          }
          create: {
            args: Prisma.GA_ANKETA_BASECreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_BASEPayload>
          }
          createMany: {
            args: Prisma.GA_ANKETA_BASECreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GA_ANKETA_BASEDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_BASEPayload>
          }
          update: {
            args: Prisma.GA_ANKETA_BASEUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_BASEPayload>
          }
          deleteMany: {
            args: Prisma.GA_ANKETA_BASEDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GA_ANKETA_BASEUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GA_ANKETA_BASEUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_BASEPayload>
          }
          aggregate: {
            args: Prisma.GA_ANKETA_BASEAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGA_ANKETA_BASE>
          }
          groupBy: {
            args: Prisma.GA_ANKETA_BASEGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GA_ANKETA_BASEGroupByOutputType>[]
          }
          count: {
            args: Prisma.GA_ANKETA_BASECountArgs<ExtArgs>,
            result: $Utils.Optional<GA_ANKETA_BASECountAggregateOutputType> | number
          }
        }
      }
      GA_ANKETA_DOGOVOR: {
        payload: Prisma.$GA_ANKETA_DOGOVORPayload<ExtArgs>
        fields: Prisma.GA_ANKETA_DOGOVORFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GA_ANKETA_DOGOVORFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_DOGOVORPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GA_ANKETA_DOGOVORFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_DOGOVORPayload>
          }
          findFirst: {
            args: Prisma.GA_ANKETA_DOGOVORFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_DOGOVORPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GA_ANKETA_DOGOVORFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_DOGOVORPayload>
          }
          findMany: {
            args: Prisma.GA_ANKETA_DOGOVORFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_DOGOVORPayload>[]
          }
          create: {
            args: Prisma.GA_ANKETA_DOGOVORCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_DOGOVORPayload>
          }
          createMany: {
            args: Prisma.GA_ANKETA_DOGOVORCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GA_ANKETA_DOGOVORDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_DOGOVORPayload>
          }
          update: {
            args: Prisma.GA_ANKETA_DOGOVORUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_DOGOVORPayload>
          }
          deleteMany: {
            args: Prisma.GA_ANKETA_DOGOVORDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GA_ANKETA_DOGOVORUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GA_ANKETA_DOGOVORUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_DOGOVORPayload>
          }
          aggregate: {
            args: Prisma.GA_ANKETA_DOGOVORAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGA_ANKETA_DOGOVOR>
          }
          groupBy: {
            args: Prisma.GA_ANKETA_DOGOVORGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GA_ANKETA_DOGOVORGroupByOutputType>[]
          }
          count: {
            args: Prisma.GA_ANKETA_DOGOVORCountArgs<ExtArgs>,
            result: $Utils.Optional<GA_ANKETA_DOGOVORCountAggregateOutputType> | number
          }
        }
      }
      GA_ANKETA_OBOROT: {
        payload: Prisma.$GA_ANKETA_OBOROTPayload<ExtArgs>
        fields: Prisma.GA_ANKETA_OBOROTFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GA_ANKETA_OBOROTFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_OBOROTPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GA_ANKETA_OBOROTFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_OBOROTPayload>
          }
          findFirst: {
            args: Prisma.GA_ANKETA_OBOROTFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_OBOROTPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GA_ANKETA_OBOROTFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_OBOROTPayload>
          }
          findMany: {
            args: Prisma.GA_ANKETA_OBOROTFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_OBOROTPayload>[]
          }
          create: {
            args: Prisma.GA_ANKETA_OBOROTCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_OBOROTPayload>
          }
          createMany: {
            args: Prisma.GA_ANKETA_OBOROTCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GA_ANKETA_OBOROTDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_OBOROTPayload>
          }
          update: {
            args: Prisma.GA_ANKETA_OBOROTUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_OBOROTPayload>
          }
          deleteMany: {
            args: Prisma.GA_ANKETA_OBOROTDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GA_ANKETA_OBOROTUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GA_ANKETA_OBOROTUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_OBOROTPayload>
          }
          aggregate: {
            args: Prisma.GA_ANKETA_OBOROTAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGA_ANKETA_OBOROT>
          }
          groupBy: {
            args: Prisma.GA_ANKETA_OBOROTGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GA_ANKETA_OBOROTGroupByOutputType>[]
          }
          count: {
            args: Prisma.GA_ANKETA_OBOROTCountArgs<ExtArgs>,
            result: $Utils.Optional<GA_ANKETA_OBOROTCountAggregateOutputType> | number
          }
        }
      }
      GA_WS_USERS: {
        payload: Prisma.$GA_WS_USERSPayload<ExtArgs>
        fields: Prisma.GA_WS_USERSFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GA_WS_USERSFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_WS_USERSPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GA_WS_USERSFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_WS_USERSPayload>
          }
          findFirst: {
            args: Prisma.GA_WS_USERSFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_WS_USERSPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GA_WS_USERSFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_WS_USERSPayload>
          }
          findMany: {
            args: Prisma.GA_WS_USERSFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_WS_USERSPayload>[]
          }
          create: {
            args: Prisma.GA_WS_USERSCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_WS_USERSPayload>
          }
          createMany: {
            args: Prisma.GA_WS_USERSCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GA_WS_USERSDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_WS_USERSPayload>
          }
          update: {
            args: Prisma.GA_WS_USERSUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_WS_USERSPayload>
          }
          deleteMany: {
            args: Prisma.GA_WS_USERSDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GA_WS_USERSUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GA_WS_USERSUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_WS_USERSPayload>
          }
          aggregate: {
            args: Prisma.GA_WS_USERSAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGA_WS_USERS>
          }
          groupBy: {
            args: Prisma.GA_WS_USERSGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GA_WS_USERSGroupByOutputType>[]
          }
          count: {
            args: Prisma.GA_WS_USERSCountArgs<ExtArgs>,
            result: $Utils.Optional<GA_WS_USERSCountAggregateOutputType> | number
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
   * Models
   */

  /**
   * Model GA_ANKETA_ADDR
   */

  export type AggregateGA_ANKETA_ADDR = {
    _count: GA_ANKETA_ADDRCountAggregateOutputType | null
    _avg: GA_ANKETA_ADDRAvgAggregateOutputType | null
    _sum: GA_ANKETA_ADDRSumAggregateOutputType | null
    _min: GA_ANKETA_ADDRMinAggregateOutputType | null
    _max: GA_ANKETA_ADDRMaxAggregateOutputType | null
  }

  export type GA_ANKETA_ADDRAvgAggregateOutputType = {
    AAD_ABA_ID: number | null
  }

  export type GA_ANKETA_ADDRSumAggregateOutputType = {
    AAD_ABA_ID: bigint | null
  }

  export type GA_ANKETA_ADDRMinAggregateOutputType = {
    AAD_ABA_ID: bigint | null
    AAD_SHIROTA: string | null
    AAD_DOLGOTA: string | null
    AAD_OBLAST: string | null
    AAD_GOROD: string | null
    AAD_ADDR: string | null
  }

  export type GA_ANKETA_ADDRMaxAggregateOutputType = {
    AAD_ABA_ID: bigint | null
    AAD_SHIROTA: string | null
    AAD_DOLGOTA: string | null
    AAD_OBLAST: string | null
    AAD_GOROD: string | null
    AAD_ADDR: string | null
  }

  export type GA_ANKETA_ADDRCountAggregateOutputType = {
    AAD_ABA_ID: number
    AAD_SHIROTA: number
    AAD_DOLGOTA: number
    AAD_OBLAST: number
    AAD_GOROD: number
    AAD_ADDR: number
    _all: number
  }


  export type GA_ANKETA_ADDRAvgAggregateInputType = {
    AAD_ABA_ID?: true
  }

  export type GA_ANKETA_ADDRSumAggregateInputType = {
    AAD_ABA_ID?: true
  }

  export type GA_ANKETA_ADDRMinAggregateInputType = {
    AAD_ABA_ID?: true
    AAD_SHIROTA?: true
    AAD_DOLGOTA?: true
    AAD_OBLAST?: true
    AAD_GOROD?: true
    AAD_ADDR?: true
  }

  export type GA_ANKETA_ADDRMaxAggregateInputType = {
    AAD_ABA_ID?: true
    AAD_SHIROTA?: true
    AAD_DOLGOTA?: true
    AAD_OBLAST?: true
    AAD_GOROD?: true
    AAD_ADDR?: true
  }

  export type GA_ANKETA_ADDRCountAggregateInputType = {
    AAD_ABA_ID?: true
    AAD_SHIROTA?: true
    AAD_DOLGOTA?: true
    AAD_OBLAST?: true
    AAD_GOROD?: true
    AAD_ADDR?: true
    _all?: true
  }

  export type GA_ANKETA_ADDRAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GA_ANKETA_ADDR to aggregate.
     */
    where?: GA_ANKETA_ADDRWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_ADDRS to fetch.
     */
    orderBy?: GA_ANKETA_ADDROrderByWithRelationInput | GA_ANKETA_ADDROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GA_ANKETA_ADDRWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_ADDRS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_ADDRS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GA_ANKETA_ADDRS
    **/
    _count?: true | GA_ANKETA_ADDRCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GA_ANKETA_ADDRAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GA_ANKETA_ADDRSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GA_ANKETA_ADDRMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GA_ANKETA_ADDRMaxAggregateInputType
  }

  export type GetGA_ANKETA_ADDRAggregateType<T extends GA_ANKETA_ADDRAggregateArgs> = {
        [P in keyof T & keyof AggregateGA_ANKETA_ADDR]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGA_ANKETA_ADDR[P]>
      : GetScalarType<T[P], AggregateGA_ANKETA_ADDR[P]>
  }




  export type GA_ANKETA_ADDRGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GA_ANKETA_ADDRWhereInput
    orderBy?: GA_ANKETA_ADDROrderByWithAggregationInput | GA_ANKETA_ADDROrderByWithAggregationInput[]
    by: GA_ANKETA_ADDRScalarFieldEnum[] | GA_ANKETA_ADDRScalarFieldEnum
    having?: GA_ANKETA_ADDRScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GA_ANKETA_ADDRCountAggregateInputType | true
    _avg?: GA_ANKETA_ADDRAvgAggregateInputType
    _sum?: GA_ANKETA_ADDRSumAggregateInputType
    _min?: GA_ANKETA_ADDRMinAggregateInputType
    _max?: GA_ANKETA_ADDRMaxAggregateInputType
  }

  export type GA_ANKETA_ADDRGroupByOutputType = {
    AAD_ABA_ID: bigint
    AAD_SHIROTA: string
    AAD_DOLGOTA: string
    AAD_OBLAST: string
    AAD_GOROD: string
    AAD_ADDR: string
    _count: GA_ANKETA_ADDRCountAggregateOutputType | null
    _avg: GA_ANKETA_ADDRAvgAggregateOutputType | null
    _sum: GA_ANKETA_ADDRSumAggregateOutputType | null
    _min: GA_ANKETA_ADDRMinAggregateOutputType | null
    _max: GA_ANKETA_ADDRMaxAggregateOutputType | null
  }

  type GetGA_ANKETA_ADDRGroupByPayload<T extends GA_ANKETA_ADDRGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GA_ANKETA_ADDRGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GA_ANKETA_ADDRGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GA_ANKETA_ADDRGroupByOutputType[P]>
            : GetScalarType<T[P], GA_ANKETA_ADDRGroupByOutputType[P]>
        }
      >
    >


  export type GA_ANKETA_ADDRSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    AAD_ABA_ID?: boolean
    AAD_SHIROTA?: boolean
    AAD_DOLGOTA?: boolean
    AAD_OBLAST?: boolean
    AAD_GOROD?: boolean
    AAD_ADDR?: boolean
  }, ExtArgs["result"]["gA_ANKETA_ADDR"]>

  export type GA_ANKETA_ADDRSelectScalar = {
    AAD_ABA_ID?: boolean
    AAD_SHIROTA?: boolean
    AAD_DOLGOTA?: boolean
    AAD_OBLAST?: boolean
    AAD_GOROD?: boolean
    AAD_ADDR?: boolean
  }


  export type $GA_ANKETA_ADDRPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GA_ANKETA_ADDR"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      AAD_ABA_ID: bigint
      AAD_SHIROTA: string
      AAD_DOLGOTA: string
      AAD_OBLAST: string
      AAD_GOROD: string
      AAD_ADDR: string
    }, ExtArgs["result"]["gA_ANKETA_ADDR"]>
    composites: {}
  }


  type GA_ANKETA_ADDRGetPayload<S extends boolean | null | undefined | GA_ANKETA_ADDRDefaultArgs> = $Result.GetResult<Prisma.$GA_ANKETA_ADDRPayload, S>

  type GA_ANKETA_ADDRCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GA_ANKETA_ADDRFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GA_ANKETA_ADDRCountAggregateInputType | true
    }

  export interface GA_ANKETA_ADDRDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GA_ANKETA_ADDR'], meta: { name: 'GA_ANKETA_ADDR' } }
    /**
     * Find zero or one GA_ANKETA_ADDR that matches the filter.
     * @param {GA_ANKETA_ADDRFindUniqueArgs} args - Arguments to find a GA_ANKETA_ADDR
     * @example
     * // Get one GA_ANKETA_ADDR
     * const gA_ANKETA_ADDR = await prisma.gA_ANKETA_ADDR.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GA_ANKETA_ADDRFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_ADDRFindUniqueArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_ADDRClient<$Result.GetResult<Prisma.$GA_ANKETA_ADDRPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GA_ANKETA_ADDR that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GA_ANKETA_ADDRFindUniqueOrThrowArgs} args - Arguments to find a GA_ANKETA_ADDR
     * @example
     * // Get one GA_ANKETA_ADDR
     * const gA_ANKETA_ADDR = await prisma.gA_ANKETA_ADDR.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GA_ANKETA_ADDRFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_ADDRFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_ADDRClient<$Result.GetResult<Prisma.$GA_ANKETA_ADDRPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GA_ANKETA_ADDR that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_ADDRFindFirstArgs} args - Arguments to find a GA_ANKETA_ADDR
     * @example
     * // Get one GA_ANKETA_ADDR
     * const gA_ANKETA_ADDR = await prisma.gA_ANKETA_ADDR.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GA_ANKETA_ADDRFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_ADDRFindFirstArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_ADDRClient<$Result.GetResult<Prisma.$GA_ANKETA_ADDRPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GA_ANKETA_ADDR that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_ADDRFindFirstOrThrowArgs} args - Arguments to find a GA_ANKETA_ADDR
     * @example
     * // Get one GA_ANKETA_ADDR
     * const gA_ANKETA_ADDR = await prisma.gA_ANKETA_ADDR.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GA_ANKETA_ADDRFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_ADDRFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_ADDRClient<$Result.GetResult<Prisma.$GA_ANKETA_ADDRPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GA_ANKETA_ADDRS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_ADDRFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GA_ANKETA_ADDRS
     * const gA_ANKETA_ADDRS = await prisma.gA_ANKETA_ADDR.findMany()
     * 
     * // Get first 10 GA_ANKETA_ADDRS
     * const gA_ANKETA_ADDRS = await prisma.gA_ANKETA_ADDR.findMany({ take: 10 })
     * 
     * // Only select the `AAD_ABA_ID`
     * const gA_ANKETA_ADDRWithAAD_ABA_IDOnly = await prisma.gA_ANKETA_ADDR.findMany({ select: { AAD_ABA_ID: true } })
     * 
    **/
    findMany<T extends GA_ANKETA_ADDRFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_ADDRFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GA_ANKETA_ADDRPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GA_ANKETA_ADDR.
     * @param {GA_ANKETA_ADDRCreateArgs} args - Arguments to create a GA_ANKETA_ADDR.
     * @example
     * // Create one GA_ANKETA_ADDR
     * const GA_ANKETA_ADDR = await prisma.gA_ANKETA_ADDR.create({
     *   data: {
     *     // ... data to create a GA_ANKETA_ADDR
     *   }
     * })
     * 
    **/
    create<T extends GA_ANKETA_ADDRCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_ADDRCreateArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_ADDRClient<$Result.GetResult<Prisma.$GA_ANKETA_ADDRPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GA_ANKETA_ADDRS.
     *     @param {GA_ANKETA_ADDRCreateManyArgs} args - Arguments to create many GA_ANKETA_ADDRS.
     *     @example
     *     // Create many GA_ANKETA_ADDRS
     *     const gA_ANKETA_ADDR = await prisma.gA_ANKETA_ADDR.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GA_ANKETA_ADDRCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_ADDRCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GA_ANKETA_ADDR.
     * @param {GA_ANKETA_ADDRDeleteArgs} args - Arguments to delete one GA_ANKETA_ADDR.
     * @example
     * // Delete one GA_ANKETA_ADDR
     * const GA_ANKETA_ADDR = await prisma.gA_ANKETA_ADDR.delete({
     *   where: {
     *     // ... filter to delete one GA_ANKETA_ADDR
     *   }
     * })
     * 
    **/
    delete<T extends GA_ANKETA_ADDRDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_ADDRDeleteArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_ADDRClient<$Result.GetResult<Prisma.$GA_ANKETA_ADDRPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GA_ANKETA_ADDR.
     * @param {GA_ANKETA_ADDRUpdateArgs} args - Arguments to update one GA_ANKETA_ADDR.
     * @example
     * // Update one GA_ANKETA_ADDR
     * const gA_ANKETA_ADDR = await prisma.gA_ANKETA_ADDR.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GA_ANKETA_ADDRUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_ADDRUpdateArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_ADDRClient<$Result.GetResult<Prisma.$GA_ANKETA_ADDRPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GA_ANKETA_ADDRS.
     * @param {GA_ANKETA_ADDRDeleteManyArgs} args - Arguments to filter GA_ANKETA_ADDRS to delete.
     * @example
     * // Delete a few GA_ANKETA_ADDRS
     * const { count } = await prisma.gA_ANKETA_ADDR.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GA_ANKETA_ADDRDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_ADDRDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GA_ANKETA_ADDRS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_ADDRUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GA_ANKETA_ADDRS
     * const gA_ANKETA_ADDR = await prisma.gA_ANKETA_ADDR.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GA_ANKETA_ADDRUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_ADDRUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GA_ANKETA_ADDR.
     * @param {GA_ANKETA_ADDRUpsertArgs} args - Arguments to update or create a GA_ANKETA_ADDR.
     * @example
     * // Update or create a GA_ANKETA_ADDR
     * const gA_ANKETA_ADDR = await prisma.gA_ANKETA_ADDR.upsert({
     *   create: {
     *     // ... data to create a GA_ANKETA_ADDR
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GA_ANKETA_ADDR we want to update
     *   }
     * })
    **/
    upsert<T extends GA_ANKETA_ADDRUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_ADDRUpsertArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_ADDRClient<$Result.GetResult<Prisma.$GA_ANKETA_ADDRPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of GA_ANKETA_ADDRS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_ADDRCountArgs} args - Arguments to filter GA_ANKETA_ADDRS to count.
     * @example
     * // Count the number of GA_ANKETA_ADDRS
     * const count = await prisma.gA_ANKETA_ADDR.count({
     *   where: {
     *     // ... the filter for the GA_ANKETA_ADDRS we want to count
     *   }
     * })
    **/
    count<T extends GA_ANKETA_ADDRCountArgs>(
      args?: Subset<T, GA_ANKETA_ADDRCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GA_ANKETA_ADDRCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GA_ANKETA_ADDR.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_ADDRAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GA_ANKETA_ADDRAggregateArgs>(args: Subset<T, GA_ANKETA_ADDRAggregateArgs>): Prisma.PrismaPromise<GetGA_ANKETA_ADDRAggregateType<T>>

    /**
     * Group by GA_ANKETA_ADDR.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_ADDRGroupByArgs} args - Group by arguments.
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
      T extends GA_ANKETA_ADDRGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GA_ANKETA_ADDRGroupByArgs['orderBy'] }
        : { orderBy?: GA_ANKETA_ADDRGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GA_ANKETA_ADDRGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGA_ANKETA_ADDRGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GA_ANKETA_ADDR model
   */
  readonly fields: GA_ANKETA_ADDRFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GA_ANKETA_ADDR.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GA_ANKETA_ADDRClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


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
   * Fields of the GA_ANKETA_ADDR model
   */ 
  interface GA_ANKETA_ADDRFieldRefs {
    readonly AAD_ABA_ID: FieldRef<"GA_ANKETA_ADDR", 'BigInt'>
    readonly AAD_SHIROTA: FieldRef<"GA_ANKETA_ADDR", 'String'>
    readonly AAD_DOLGOTA: FieldRef<"GA_ANKETA_ADDR", 'String'>
    readonly AAD_OBLAST: FieldRef<"GA_ANKETA_ADDR", 'String'>
    readonly AAD_GOROD: FieldRef<"GA_ANKETA_ADDR", 'String'>
    readonly AAD_ADDR: FieldRef<"GA_ANKETA_ADDR", 'String'>
  }
    

  // Custom InputTypes

  /**
   * GA_ANKETA_ADDR findUnique
   */
  export type GA_ANKETA_ADDRFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_ADDR
     */
    select?: GA_ANKETA_ADDRSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_ADDR to fetch.
     */
    where: GA_ANKETA_ADDRWhereUniqueInput
  }


  /**
   * GA_ANKETA_ADDR findUniqueOrThrow
   */
  export type GA_ANKETA_ADDRFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_ADDR
     */
    select?: GA_ANKETA_ADDRSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_ADDR to fetch.
     */
    where: GA_ANKETA_ADDRWhereUniqueInput
  }


  /**
   * GA_ANKETA_ADDR findFirst
   */
  export type GA_ANKETA_ADDRFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_ADDR
     */
    select?: GA_ANKETA_ADDRSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_ADDR to fetch.
     */
    where?: GA_ANKETA_ADDRWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_ADDRS to fetch.
     */
    orderBy?: GA_ANKETA_ADDROrderByWithRelationInput | GA_ANKETA_ADDROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GA_ANKETA_ADDRS.
     */
    cursor?: GA_ANKETA_ADDRWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_ADDRS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_ADDRS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GA_ANKETA_ADDRS.
     */
    distinct?: GA_ANKETA_ADDRScalarFieldEnum | GA_ANKETA_ADDRScalarFieldEnum[]
  }


  /**
   * GA_ANKETA_ADDR findFirstOrThrow
   */
  export type GA_ANKETA_ADDRFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_ADDR
     */
    select?: GA_ANKETA_ADDRSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_ADDR to fetch.
     */
    where?: GA_ANKETA_ADDRWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_ADDRS to fetch.
     */
    orderBy?: GA_ANKETA_ADDROrderByWithRelationInput | GA_ANKETA_ADDROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GA_ANKETA_ADDRS.
     */
    cursor?: GA_ANKETA_ADDRWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_ADDRS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_ADDRS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GA_ANKETA_ADDRS.
     */
    distinct?: GA_ANKETA_ADDRScalarFieldEnum | GA_ANKETA_ADDRScalarFieldEnum[]
  }


  /**
   * GA_ANKETA_ADDR findMany
   */
  export type GA_ANKETA_ADDRFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_ADDR
     */
    select?: GA_ANKETA_ADDRSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_ADDRS to fetch.
     */
    where?: GA_ANKETA_ADDRWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_ADDRS to fetch.
     */
    orderBy?: GA_ANKETA_ADDROrderByWithRelationInput | GA_ANKETA_ADDROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GA_ANKETA_ADDRS.
     */
    cursor?: GA_ANKETA_ADDRWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_ADDRS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_ADDRS.
     */
    skip?: number
    distinct?: GA_ANKETA_ADDRScalarFieldEnum | GA_ANKETA_ADDRScalarFieldEnum[]
  }


  /**
   * GA_ANKETA_ADDR create
   */
  export type GA_ANKETA_ADDRCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_ADDR
     */
    select?: GA_ANKETA_ADDRSelect<ExtArgs> | null
    /**
     * The data needed to create a GA_ANKETA_ADDR.
     */
    data: XOR<GA_ANKETA_ADDRCreateInput, GA_ANKETA_ADDRUncheckedCreateInput>
  }


  /**
   * GA_ANKETA_ADDR createMany
   */
  export type GA_ANKETA_ADDRCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GA_ANKETA_ADDRS.
     */
    data: GA_ANKETA_ADDRCreateManyInput | GA_ANKETA_ADDRCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * GA_ANKETA_ADDR update
   */
  export type GA_ANKETA_ADDRUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_ADDR
     */
    select?: GA_ANKETA_ADDRSelect<ExtArgs> | null
    /**
     * The data needed to update a GA_ANKETA_ADDR.
     */
    data: XOR<GA_ANKETA_ADDRUpdateInput, GA_ANKETA_ADDRUncheckedUpdateInput>
    /**
     * Choose, which GA_ANKETA_ADDR to update.
     */
    where: GA_ANKETA_ADDRWhereUniqueInput
  }


  /**
   * GA_ANKETA_ADDR updateMany
   */
  export type GA_ANKETA_ADDRUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GA_ANKETA_ADDRS.
     */
    data: XOR<GA_ANKETA_ADDRUpdateManyMutationInput, GA_ANKETA_ADDRUncheckedUpdateManyInput>
    /**
     * Filter which GA_ANKETA_ADDRS to update
     */
    where?: GA_ANKETA_ADDRWhereInput
  }


  /**
   * GA_ANKETA_ADDR upsert
   */
  export type GA_ANKETA_ADDRUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_ADDR
     */
    select?: GA_ANKETA_ADDRSelect<ExtArgs> | null
    /**
     * The filter to search for the GA_ANKETA_ADDR to update in case it exists.
     */
    where: GA_ANKETA_ADDRWhereUniqueInput
    /**
     * In case the GA_ANKETA_ADDR found by the `where` argument doesn't exist, create a new GA_ANKETA_ADDR with this data.
     */
    create: XOR<GA_ANKETA_ADDRCreateInput, GA_ANKETA_ADDRUncheckedCreateInput>
    /**
     * In case the GA_ANKETA_ADDR was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GA_ANKETA_ADDRUpdateInput, GA_ANKETA_ADDRUncheckedUpdateInput>
  }


  /**
   * GA_ANKETA_ADDR delete
   */
  export type GA_ANKETA_ADDRDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_ADDR
     */
    select?: GA_ANKETA_ADDRSelect<ExtArgs> | null
    /**
     * Filter which GA_ANKETA_ADDR to delete.
     */
    where: GA_ANKETA_ADDRWhereUniqueInput
  }


  /**
   * GA_ANKETA_ADDR deleteMany
   */
  export type GA_ANKETA_ADDRDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GA_ANKETA_ADDRS to delete
     */
    where?: GA_ANKETA_ADDRWhereInput
  }


  /**
   * GA_ANKETA_ADDR without action
   */
  export type GA_ANKETA_ADDRDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_ADDR
     */
    select?: GA_ANKETA_ADDRSelect<ExtArgs> | null
  }



  /**
   * Model GA_ANKETA_BASE
   */

  export type AggregateGA_ANKETA_BASE = {
    _count: GA_ANKETA_BASECountAggregateOutputType | null
    _avg: GA_ANKETA_BASEAvgAggregateOutputType | null
    _sum: GA_ANKETA_BASESumAggregateOutputType | null
    _min: GA_ANKETA_BASEMinAggregateOutputType | null
    _max: GA_ANKETA_BASEMaxAggregateOutputType | null
  }

  export type GA_ANKETA_BASEAvgAggregateOutputType = {
    ABA_WSU_ID: number | null
    ABA_REMZONA_QTY: number | null
    ABA_ID: number | null
  }

  export type GA_ANKETA_BASESumAggregateOutputType = {
    ABA_WSU_ID: bigint | null
    ABA_REMZONA_QTY: number | null
    ABA_ID: bigint | null
  }

  export type GA_ANKETA_BASEMinAggregateOutputType = {
    ABA_WSU_ID: bigint | null
    ABA_STO_NAME: string | null
    ABA_STO_ID1: string | null
    ABA_REMZONA_QTY: number | null
    ABA_ENABLED: boolean | null
    ABA_PHONE: string | null
    ABA_INN: string | null
    ABA_DATETIME_CREATED: Date | null
    ABA_DATETIME_UPDATED: Date | null
    ABA_ID: bigint | null
    ABA_DATETIME: Date | null
    ABA_STO_ID2: string | null
    ABA_STO_NAME_FIND: string | null
    ABA_DESC: string | null
  }

  export type GA_ANKETA_BASEMaxAggregateOutputType = {
    ABA_WSU_ID: bigint | null
    ABA_STO_NAME: string | null
    ABA_STO_ID1: string | null
    ABA_REMZONA_QTY: number | null
    ABA_ENABLED: boolean | null
    ABA_PHONE: string | null
    ABA_INN: string | null
    ABA_DATETIME_CREATED: Date | null
    ABA_DATETIME_UPDATED: Date | null
    ABA_ID: bigint | null
    ABA_DATETIME: Date | null
    ABA_STO_ID2: string | null
    ABA_STO_NAME_FIND: string | null
    ABA_DESC: string | null
  }

  export type GA_ANKETA_BASECountAggregateOutputType = {
    ABA_WSU_ID: number
    ABA_STO_NAME: number
    ABA_STO_ID1: number
    ABA_REMZONA_QTY: number
    ABA_ENABLED: number
    ABA_PHONE: number
    ABA_INN: number
    ABA_DATETIME_CREATED: number
    ABA_DATETIME_UPDATED: number
    ABA_ID: number
    ABA_DATETIME: number
    ABA_STO_ID2: number
    ABA_STO_NAME_FIND: number
    ABA_DESC: number
    _all: number
  }


  export type GA_ANKETA_BASEAvgAggregateInputType = {
    ABA_WSU_ID?: true
    ABA_REMZONA_QTY?: true
    ABA_ID?: true
  }

  export type GA_ANKETA_BASESumAggregateInputType = {
    ABA_WSU_ID?: true
    ABA_REMZONA_QTY?: true
    ABA_ID?: true
  }

  export type GA_ANKETA_BASEMinAggregateInputType = {
    ABA_WSU_ID?: true
    ABA_STO_NAME?: true
    ABA_STO_ID1?: true
    ABA_REMZONA_QTY?: true
    ABA_ENABLED?: true
    ABA_PHONE?: true
    ABA_INN?: true
    ABA_DATETIME_CREATED?: true
    ABA_DATETIME_UPDATED?: true
    ABA_ID?: true
    ABA_DATETIME?: true
    ABA_STO_ID2?: true
    ABA_STO_NAME_FIND?: true
    ABA_DESC?: true
  }

  export type GA_ANKETA_BASEMaxAggregateInputType = {
    ABA_WSU_ID?: true
    ABA_STO_NAME?: true
    ABA_STO_ID1?: true
    ABA_REMZONA_QTY?: true
    ABA_ENABLED?: true
    ABA_PHONE?: true
    ABA_INN?: true
    ABA_DATETIME_CREATED?: true
    ABA_DATETIME_UPDATED?: true
    ABA_ID?: true
    ABA_DATETIME?: true
    ABA_STO_ID2?: true
    ABA_STO_NAME_FIND?: true
    ABA_DESC?: true
  }

  export type GA_ANKETA_BASECountAggregateInputType = {
    ABA_WSU_ID?: true
    ABA_STO_NAME?: true
    ABA_STO_ID1?: true
    ABA_REMZONA_QTY?: true
    ABA_ENABLED?: true
    ABA_PHONE?: true
    ABA_INN?: true
    ABA_DATETIME_CREATED?: true
    ABA_DATETIME_UPDATED?: true
    ABA_ID?: true
    ABA_DATETIME?: true
    ABA_STO_ID2?: true
    ABA_STO_NAME_FIND?: true
    ABA_DESC?: true
    _all?: true
  }

  export type GA_ANKETA_BASEAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GA_ANKETA_BASE to aggregate.
     */
    where?: GA_ANKETA_BASEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_BASES to fetch.
     */
    orderBy?: GA_ANKETA_BASEOrderByWithRelationInput | GA_ANKETA_BASEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GA_ANKETA_BASEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_BASES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_BASES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GA_ANKETA_BASES
    **/
    _count?: true | GA_ANKETA_BASECountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GA_ANKETA_BASEAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GA_ANKETA_BASESumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GA_ANKETA_BASEMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GA_ANKETA_BASEMaxAggregateInputType
  }

  export type GetGA_ANKETA_BASEAggregateType<T extends GA_ANKETA_BASEAggregateArgs> = {
        [P in keyof T & keyof AggregateGA_ANKETA_BASE]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGA_ANKETA_BASE[P]>
      : GetScalarType<T[P], AggregateGA_ANKETA_BASE[P]>
  }




  export type GA_ANKETA_BASEGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GA_ANKETA_BASEWhereInput
    orderBy?: GA_ANKETA_BASEOrderByWithAggregationInput | GA_ANKETA_BASEOrderByWithAggregationInput[]
    by: GA_ANKETA_BASEScalarFieldEnum[] | GA_ANKETA_BASEScalarFieldEnum
    having?: GA_ANKETA_BASEScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GA_ANKETA_BASECountAggregateInputType | true
    _avg?: GA_ANKETA_BASEAvgAggregateInputType
    _sum?: GA_ANKETA_BASESumAggregateInputType
    _min?: GA_ANKETA_BASEMinAggregateInputType
    _max?: GA_ANKETA_BASEMaxAggregateInputType
  }

  export type GA_ANKETA_BASEGroupByOutputType = {
    ABA_WSU_ID: bigint
    ABA_STO_NAME: string
    ABA_STO_ID1: string
    ABA_REMZONA_QTY: number
    ABA_ENABLED: boolean
    ABA_PHONE: string
    ABA_INN: string
    ABA_DATETIME_CREATED: Date
    ABA_DATETIME_UPDATED: Date
    ABA_ID: bigint
    ABA_DATETIME: Date
    ABA_STO_ID2: string
    ABA_STO_NAME_FIND: string | null
    ABA_DESC: string | null
    _count: GA_ANKETA_BASECountAggregateOutputType | null
    _avg: GA_ANKETA_BASEAvgAggregateOutputType | null
    _sum: GA_ANKETA_BASESumAggregateOutputType | null
    _min: GA_ANKETA_BASEMinAggregateOutputType | null
    _max: GA_ANKETA_BASEMaxAggregateOutputType | null
  }

  type GetGA_ANKETA_BASEGroupByPayload<T extends GA_ANKETA_BASEGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GA_ANKETA_BASEGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GA_ANKETA_BASEGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GA_ANKETA_BASEGroupByOutputType[P]>
            : GetScalarType<T[P], GA_ANKETA_BASEGroupByOutputType[P]>
        }
      >
    >


  export type GA_ANKETA_BASESelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ABA_WSU_ID?: boolean
    ABA_STO_NAME?: boolean
    ABA_STO_ID1?: boolean
    ABA_REMZONA_QTY?: boolean
    ABA_ENABLED?: boolean
    ABA_PHONE?: boolean
    ABA_INN?: boolean
    ABA_DATETIME_CREATED?: boolean
    ABA_DATETIME_UPDATED?: boolean
    ABA_ID?: boolean
    ABA_DATETIME?: boolean
    ABA_STO_ID2?: boolean
    ABA_STO_NAME_FIND?: boolean
    ABA_DESC?: boolean
  }, ExtArgs["result"]["gA_ANKETA_BASE"]>

  export type GA_ANKETA_BASESelectScalar = {
    ABA_WSU_ID?: boolean
    ABA_STO_NAME?: boolean
    ABA_STO_ID1?: boolean
    ABA_REMZONA_QTY?: boolean
    ABA_ENABLED?: boolean
    ABA_PHONE?: boolean
    ABA_INN?: boolean
    ABA_DATETIME_CREATED?: boolean
    ABA_DATETIME_UPDATED?: boolean
    ABA_ID?: boolean
    ABA_DATETIME?: boolean
    ABA_STO_ID2?: boolean
    ABA_STO_NAME_FIND?: boolean
    ABA_DESC?: boolean
  }


  export type $GA_ANKETA_BASEPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GA_ANKETA_BASE"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ABA_WSU_ID: bigint
      ABA_STO_NAME: string
      ABA_STO_ID1: string
      ABA_REMZONA_QTY: number
      ABA_ENABLED: boolean
      ABA_PHONE: string
      ABA_INN: string
      ABA_DATETIME_CREATED: Date
      ABA_DATETIME_UPDATED: Date
      ABA_ID: bigint
      ABA_DATETIME: Date
      ABA_STO_ID2: string
      ABA_STO_NAME_FIND: string | null
      ABA_DESC: string | null
    }, ExtArgs["result"]["gA_ANKETA_BASE"]>
    composites: {}
  }


  type GA_ANKETA_BASEGetPayload<S extends boolean | null | undefined | GA_ANKETA_BASEDefaultArgs> = $Result.GetResult<Prisma.$GA_ANKETA_BASEPayload, S>

  type GA_ANKETA_BASECountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GA_ANKETA_BASEFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GA_ANKETA_BASECountAggregateInputType | true
    }

  export interface GA_ANKETA_BASEDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GA_ANKETA_BASE'], meta: { name: 'GA_ANKETA_BASE' } }
    /**
     * Find zero or one GA_ANKETA_BASE that matches the filter.
     * @param {GA_ANKETA_BASEFindUniqueArgs} args - Arguments to find a GA_ANKETA_BASE
     * @example
     * // Get one GA_ANKETA_BASE
     * const gA_ANKETA_BASE = await prisma.gA_ANKETA_BASE.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GA_ANKETA_BASEFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_BASEFindUniqueArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_BASEClient<$Result.GetResult<Prisma.$GA_ANKETA_BASEPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GA_ANKETA_BASE that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GA_ANKETA_BASEFindUniqueOrThrowArgs} args - Arguments to find a GA_ANKETA_BASE
     * @example
     * // Get one GA_ANKETA_BASE
     * const gA_ANKETA_BASE = await prisma.gA_ANKETA_BASE.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GA_ANKETA_BASEFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_BASEFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_BASEClient<$Result.GetResult<Prisma.$GA_ANKETA_BASEPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GA_ANKETA_BASE that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_BASEFindFirstArgs} args - Arguments to find a GA_ANKETA_BASE
     * @example
     * // Get one GA_ANKETA_BASE
     * const gA_ANKETA_BASE = await prisma.gA_ANKETA_BASE.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GA_ANKETA_BASEFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_BASEFindFirstArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_BASEClient<$Result.GetResult<Prisma.$GA_ANKETA_BASEPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GA_ANKETA_BASE that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_BASEFindFirstOrThrowArgs} args - Arguments to find a GA_ANKETA_BASE
     * @example
     * // Get one GA_ANKETA_BASE
     * const gA_ANKETA_BASE = await prisma.gA_ANKETA_BASE.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GA_ANKETA_BASEFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_BASEFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_BASEClient<$Result.GetResult<Prisma.$GA_ANKETA_BASEPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GA_ANKETA_BASES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_BASEFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GA_ANKETA_BASES
     * const gA_ANKETA_BASES = await prisma.gA_ANKETA_BASE.findMany()
     * 
     * // Get first 10 GA_ANKETA_BASES
     * const gA_ANKETA_BASES = await prisma.gA_ANKETA_BASE.findMany({ take: 10 })
     * 
     * // Only select the `ABA_WSU_ID`
     * const gA_ANKETA_BASEWithABA_WSU_IDOnly = await prisma.gA_ANKETA_BASE.findMany({ select: { ABA_WSU_ID: true } })
     * 
    **/
    findMany<T extends GA_ANKETA_BASEFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_BASEFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GA_ANKETA_BASEPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GA_ANKETA_BASE.
     * @param {GA_ANKETA_BASECreateArgs} args - Arguments to create a GA_ANKETA_BASE.
     * @example
     * // Create one GA_ANKETA_BASE
     * const GA_ANKETA_BASE = await prisma.gA_ANKETA_BASE.create({
     *   data: {
     *     // ... data to create a GA_ANKETA_BASE
     *   }
     * })
     * 
    **/
    create<T extends GA_ANKETA_BASECreateArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_BASECreateArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_BASEClient<$Result.GetResult<Prisma.$GA_ANKETA_BASEPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GA_ANKETA_BASES.
     *     @param {GA_ANKETA_BASECreateManyArgs} args - Arguments to create many GA_ANKETA_BASES.
     *     @example
     *     // Create many GA_ANKETA_BASES
     *     const gA_ANKETA_BASE = await prisma.gA_ANKETA_BASE.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GA_ANKETA_BASECreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_BASECreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GA_ANKETA_BASE.
     * @param {GA_ANKETA_BASEDeleteArgs} args - Arguments to delete one GA_ANKETA_BASE.
     * @example
     * // Delete one GA_ANKETA_BASE
     * const GA_ANKETA_BASE = await prisma.gA_ANKETA_BASE.delete({
     *   where: {
     *     // ... filter to delete one GA_ANKETA_BASE
     *   }
     * })
     * 
    **/
    delete<T extends GA_ANKETA_BASEDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_BASEDeleteArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_BASEClient<$Result.GetResult<Prisma.$GA_ANKETA_BASEPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GA_ANKETA_BASE.
     * @param {GA_ANKETA_BASEUpdateArgs} args - Arguments to update one GA_ANKETA_BASE.
     * @example
     * // Update one GA_ANKETA_BASE
     * const gA_ANKETA_BASE = await prisma.gA_ANKETA_BASE.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GA_ANKETA_BASEUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_BASEUpdateArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_BASEClient<$Result.GetResult<Prisma.$GA_ANKETA_BASEPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GA_ANKETA_BASES.
     * @param {GA_ANKETA_BASEDeleteManyArgs} args - Arguments to filter GA_ANKETA_BASES to delete.
     * @example
     * // Delete a few GA_ANKETA_BASES
     * const { count } = await prisma.gA_ANKETA_BASE.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GA_ANKETA_BASEDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_BASEDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GA_ANKETA_BASES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_BASEUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GA_ANKETA_BASES
     * const gA_ANKETA_BASE = await prisma.gA_ANKETA_BASE.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GA_ANKETA_BASEUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_BASEUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GA_ANKETA_BASE.
     * @param {GA_ANKETA_BASEUpsertArgs} args - Arguments to update or create a GA_ANKETA_BASE.
     * @example
     * // Update or create a GA_ANKETA_BASE
     * const gA_ANKETA_BASE = await prisma.gA_ANKETA_BASE.upsert({
     *   create: {
     *     // ... data to create a GA_ANKETA_BASE
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GA_ANKETA_BASE we want to update
     *   }
     * })
    **/
    upsert<T extends GA_ANKETA_BASEUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_BASEUpsertArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_BASEClient<$Result.GetResult<Prisma.$GA_ANKETA_BASEPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of GA_ANKETA_BASES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_BASECountArgs} args - Arguments to filter GA_ANKETA_BASES to count.
     * @example
     * // Count the number of GA_ANKETA_BASES
     * const count = await prisma.gA_ANKETA_BASE.count({
     *   where: {
     *     // ... the filter for the GA_ANKETA_BASES we want to count
     *   }
     * })
    **/
    count<T extends GA_ANKETA_BASECountArgs>(
      args?: Subset<T, GA_ANKETA_BASECountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GA_ANKETA_BASECountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GA_ANKETA_BASE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_BASEAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GA_ANKETA_BASEAggregateArgs>(args: Subset<T, GA_ANKETA_BASEAggregateArgs>): Prisma.PrismaPromise<GetGA_ANKETA_BASEAggregateType<T>>

    /**
     * Group by GA_ANKETA_BASE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_BASEGroupByArgs} args - Group by arguments.
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
      T extends GA_ANKETA_BASEGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GA_ANKETA_BASEGroupByArgs['orderBy'] }
        : { orderBy?: GA_ANKETA_BASEGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GA_ANKETA_BASEGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGA_ANKETA_BASEGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GA_ANKETA_BASE model
   */
  readonly fields: GA_ANKETA_BASEFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GA_ANKETA_BASE.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GA_ANKETA_BASEClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


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
   * Fields of the GA_ANKETA_BASE model
   */ 
  interface GA_ANKETA_BASEFieldRefs {
    readonly ABA_WSU_ID: FieldRef<"GA_ANKETA_BASE", 'BigInt'>
    readonly ABA_STO_NAME: FieldRef<"GA_ANKETA_BASE", 'String'>
    readonly ABA_STO_ID1: FieldRef<"GA_ANKETA_BASE", 'String'>
    readonly ABA_REMZONA_QTY: FieldRef<"GA_ANKETA_BASE", 'Int'>
    readonly ABA_ENABLED: FieldRef<"GA_ANKETA_BASE", 'Boolean'>
    readonly ABA_PHONE: FieldRef<"GA_ANKETA_BASE", 'String'>
    readonly ABA_INN: FieldRef<"GA_ANKETA_BASE", 'String'>
    readonly ABA_DATETIME_CREATED: FieldRef<"GA_ANKETA_BASE", 'DateTime'>
    readonly ABA_DATETIME_UPDATED: FieldRef<"GA_ANKETA_BASE", 'DateTime'>
    readonly ABA_ID: FieldRef<"GA_ANKETA_BASE", 'BigInt'>
    readonly ABA_DATETIME: FieldRef<"GA_ANKETA_BASE", 'DateTime'>
    readonly ABA_STO_ID2: FieldRef<"GA_ANKETA_BASE", 'String'>
    readonly ABA_STO_NAME_FIND: FieldRef<"GA_ANKETA_BASE", 'String'>
    readonly ABA_DESC: FieldRef<"GA_ANKETA_BASE", 'String'>
  }
    

  // Custom InputTypes

  /**
   * GA_ANKETA_BASE findUnique
   */
  export type GA_ANKETA_BASEFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_BASE
     */
    select?: GA_ANKETA_BASESelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_BASE to fetch.
     */
    where: GA_ANKETA_BASEWhereUniqueInput
  }


  /**
   * GA_ANKETA_BASE findUniqueOrThrow
   */
  export type GA_ANKETA_BASEFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_BASE
     */
    select?: GA_ANKETA_BASESelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_BASE to fetch.
     */
    where: GA_ANKETA_BASEWhereUniqueInput
  }


  /**
   * GA_ANKETA_BASE findFirst
   */
  export type GA_ANKETA_BASEFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_BASE
     */
    select?: GA_ANKETA_BASESelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_BASE to fetch.
     */
    where?: GA_ANKETA_BASEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_BASES to fetch.
     */
    orderBy?: GA_ANKETA_BASEOrderByWithRelationInput | GA_ANKETA_BASEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GA_ANKETA_BASES.
     */
    cursor?: GA_ANKETA_BASEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_BASES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_BASES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GA_ANKETA_BASES.
     */
    distinct?: GA_ANKETA_BASEScalarFieldEnum | GA_ANKETA_BASEScalarFieldEnum[]
  }


  /**
   * GA_ANKETA_BASE findFirstOrThrow
   */
  export type GA_ANKETA_BASEFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_BASE
     */
    select?: GA_ANKETA_BASESelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_BASE to fetch.
     */
    where?: GA_ANKETA_BASEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_BASES to fetch.
     */
    orderBy?: GA_ANKETA_BASEOrderByWithRelationInput | GA_ANKETA_BASEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GA_ANKETA_BASES.
     */
    cursor?: GA_ANKETA_BASEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_BASES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_BASES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GA_ANKETA_BASES.
     */
    distinct?: GA_ANKETA_BASEScalarFieldEnum | GA_ANKETA_BASEScalarFieldEnum[]
  }


  /**
   * GA_ANKETA_BASE findMany
   */
  export type GA_ANKETA_BASEFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_BASE
     */
    select?: GA_ANKETA_BASESelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_BASES to fetch.
     */
    where?: GA_ANKETA_BASEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_BASES to fetch.
     */
    orderBy?: GA_ANKETA_BASEOrderByWithRelationInput | GA_ANKETA_BASEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GA_ANKETA_BASES.
     */
    cursor?: GA_ANKETA_BASEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_BASES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_BASES.
     */
    skip?: number
    distinct?: GA_ANKETA_BASEScalarFieldEnum | GA_ANKETA_BASEScalarFieldEnum[]
  }


  /**
   * GA_ANKETA_BASE create
   */
  export type GA_ANKETA_BASECreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_BASE
     */
    select?: GA_ANKETA_BASESelect<ExtArgs> | null
    /**
     * The data needed to create a GA_ANKETA_BASE.
     */
    data: XOR<GA_ANKETA_BASECreateInput, GA_ANKETA_BASEUncheckedCreateInput>
  }


  /**
   * GA_ANKETA_BASE createMany
   */
  export type GA_ANKETA_BASECreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GA_ANKETA_BASES.
     */
    data: GA_ANKETA_BASECreateManyInput | GA_ANKETA_BASECreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * GA_ANKETA_BASE update
   */
  export type GA_ANKETA_BASEUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_BASE
     */
    select?: GA_ANKETA_BASESelect<ExtArgs> | null
    /**
     * The data needed to update a GA_ANKETA_BASE.
     */
    data: XOR<GA_ANKETA_BASEUpdateInput, GA_ANKETA_BASEUncheckedUpdateInput>
    /**
     * Choose, which GA_ANKETA_BASE to update.
     */
    where: GA_ANKETA_BASEWhereUniqueInput
  }


  /**
   * GA_ANKETA_BASE updateMany
   */
  export type GA_ANKETA_BASEUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GA_ANKETA_BASES.
     */
    data: XOR<GA_ANKETA_BASEUpdateManyMutationInput, GA_ANKETA_BASEUncheckedUpdateManyInput>
    /**
     * Filter which GA_ANKETA_BASES to update
     */
    where?: GA_ANKETA_BASEWhereInput
  }


  /**
   * GA_ANKETA_BASE upsert
   */
  export type GA_ANKETA_BASEUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_BASE
     */
    select?: GA_ANKETA_BASESelect<ExtArgs> | null
    /**
     * The filter to search for the GA_ANKETA_BASE to update in case it exists.
     */
    where: GA_ANKETA_BASEWhereUniqueInput
    /**
     * In case the GA_ANKETA_BASE found by the `where` argument doesn't exist, create a new GA_ANKETA_BASE with this data.
     */
    create: XOR<GA_ANKETA_BASECreateInput, GA_ANKETA_BASEUncheckedCreateInput>
    /**
     * In case the GA_ANKETA_BASE was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GA_ANKETA_BASEUpdateInput, GA_ANKETA_BASEUncheckedUpdateInput>
  }


  /**
   * GA_ANKETA_BASE delete
   */
  export type GA_ANKETA_BASEDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_BASE
     */
    select?: GA_ANKETA_BASESelect<ExtArgs> | null
    /**
     * Filter which GA_ANKETA_BASE to delete.
     */
    where: GA_ANKETA_BASEWhereUniqueInput
  }


  /**
   * GA_ANKETA_BASE deleteMany
   */
  export type GA_ANKETA_BASEDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GA_ANKETA_BASES to delete
     */
    where?: GA_ANKETA_BASEWhereInput
  }


  /**
   * GA_ANKETA_BASE without action
   */
  export type GA_ANKETA_BASEDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_BASE
     */
    select?: GA_ANKETA_BASESelect<ExtArgs> | null
  }



  /**
   * Model GA_ANKETA_DOGOVOR
   */

  export type AggregateGA_ANKETA_DOGOVOR = {
    _count: GA_ANKETA_DOGOVORCountAggregateOutputType | null
    _avg: GA_ANKETA_DOGOVORAvgAggregateOutputType | null
    _sum: GA_ANKETA_DOGOVORSumAggregateOutputType | null
    _min: GA_ANKETA_DOGOVORMinAggregateOutputType | null
    _max: GA_ANKETA_DOGOVORMaxAggregateOutputType | null
  }

  export type GA_ANKETA_DOGOVORAvgAggregateOutputType = {
    ADO_ABA_ID: number | null
  }

  export type GA_ANKETA_DOGOVORSumAggregateOutputType = {
    ADO_ABA_ID: bigint | null
  }

  export type GA_ANKETA_DOGOVORMinAggregateOutputType = {
    ADO_ABA_ID: bigint | null
    ADO_NAME1: string | null
    ADO_NAME2: string | null
    ADO_NAME3: string | null
    ADO_PHONE: string | null
    ADO_EMAIL: string | null
    ADO_DATETIME: Date | null
    ADO_STATUS: boolean | null
  }

  export type GA_ANKETA_DOGOVORMaxAggregateOutputType = {
    ADO_ABA_ID: bigint | null
    ADO_NAME1: string | null
    ADO_NAME2: string | null
    ADO_NAME3: string | null
    ADO_PHONE: string | null
    ADO_EMAIL: string | null
    ADO_DATETIME: Date | null
    ADO_STATUS: boolean | null
  }

  export type GA_ANKETA_DOGOVORCountAggregateOutputType = {
    ADO_ABA_ID: number
    ADO_NAME1: number
    ADO_NAME2: number
    ADO_NAME3: number
    ADO_PHONE: number
    ADO_EMAIL: number
    ADO_DATETIME: number
    ADO_STATUS: number
    _all: number
  }


  export type GA_ANKETA_DOGOVORAvgAggregateInputType = {
    ADO_ABA_ID?: true
  }

  export type GA_ANKETA_DOGOVORSumAggregateInputType = {
    ADO_ABA_ID?: true
  }

  export type GA_ANKETA_DOGOVORMinAggregateInputType = {
    ADO_ABA_ID?: true
    ADO_NAME1?: true
    ADO_NAME2?: true
    ADO_NAME3?: true
    ADO_PHONE?: true
    ADO_EMAIL?: true
    ADO_DATETIME?: true
    ADO_STATUS?: true
  }

  export type GA_ANKETA_DOGOVORMaxAggregateInputType = {
    ADO_ABA_ID?: true
    ADO_NAME1?: true
    ADO_NAME2?: true
    ADO_NAME3?: true
    ADO_PHONE?: true
    ADO_EMAIL?: true
    ADO_DATETIME?: true
    ADO_STATUS?: true
  }

  export type GA_ANKETA_DOGOVORCountAggregateInputType = {
    ADO_ABA_ID?: true
    ADO_NAME1?: true
    ADO_NAME2?: true
    ADO_NAME3?: true
    ADO_PHONE?: true
    ADO_EMAIL?: true
    ADO_DATETIME?: true
    ADO_STATUS?: true
    _all?: true
  }

  export type GA_ANKETA_DOGOVORAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GA_ANKETA_DOGOVOR to aggregate.
     */
    where?: GA_ANKETA_DOGOVORWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_DOGOVORS to fetch.
     */
    orderBy?: GA_ANKETA_DOGOVOROrderByWithRelationInput | GA_ANKETA_DOGOVOROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GA_ANKETA_DOGOVORWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_DOGOVORS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_DOGOVORS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GA_ANKETA_DOGOVORS
    **/
    _count?: true | GA_ANKETA_DOGOVORCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GA_ANKETA_DOGOVORAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GA_ANKETA_DOGOVORSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GA_ANKETA_DOGOVORMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GA_ANKETA_DOGOVORMaxAggregateInputType
  }

  export type GetGA_ANKETA_DOGOVORAggregateType<T extends GA_ANKETA_DOGOVORAggregateArgs> = {
        [P in keyof T & keyof AggregateGA_ANKETA_DOGOVOR]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGA_ANKETA_DOGOVOR[P]>
      : GetScalarType<T[P], AggregateGA_ANKETA_DOGOVOR[P]>
  }




  export type GA_ANKETA_DOGOVORGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GA_ANKETA_DOGOVORWhereInput
    orderBy?: GA_ANKETA_DOGOVOROrderByWithAggregationInput | GA_ANKETA_DOGOVOROrderByWithAggregationInput[]
    by: GA_ANKETA_DOGOVORScalarFieldEnum[] | GA_ANKETA_DOGOVORScalarFieldEnum
    having?: GA_ANKETA_DOGOVORScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GA_ANKETA_DOGOVORCountAggregateInputType | true
    _avg?: GA_ANKETA_DOGOVORAvgAggregateInputType
    _sum?: GA_ANKETA_DOGOVORSumAggregateInputType
    _min?: GA_ANKETA_DOGOVORMinAggregateInputType
    _max?: GA_ANKETA_DOGOVORMaxAggregateInputType
  }

  export type GA_ANKETA_DOGOVORGroupByOutputType = {
    ADO_ABA_ID: bigint
    ADO_NAME1: string
    ADO_NAME2: string
    ADO_NAME3: string
    ADO_PHONE: string
    ADO_EMAIL: string
    ADO_DATETIME: Date
    ADO_STATUS: boolean
    _count: GA_ANKETA_DOGOVORCountAggregateOutputType | null
    _avg: GA_ANKETA_DOGOVORAvgAggregateOutputType | null
    _sum: GA_ANKETA_DOGOVORSumAggregateOutputType | null
    _min: GA_ANKETA_DOGOVORMinAggregateOutputType | null
    _max: GA_ANKETA_DOGOVORMaxAggregateOutputType | null
  }

  type GetGA_ANKETA_DOGOVORGroupByPayload<T extends GA_ANKETA_DOGOVORGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GA_ANKETA_DOGOVORGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GA_ANKETA_DOGOVORGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GA_ANKETA_DOGOVORGroupByOutputType[P]>
            : GetScalarType<T[P], GA_ANKETA_DOGOVORGroupByOutputType[P]>
        }
      >
    >


  export type GA_ANKETA_DOGOVORSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ADO_ABA_ID?: boolean
    ADO_NAME1?: boolean
    ADO_NAME2?: boolean
    ADO_NAME3?: boolean
    ADO_PHONE?: boolean
    ADO_EMAIL?: boolean
    ADO_DATETIME?: boolean
    ADO_STATUS?: boolean
  }, ExtArgs["result"]["gA_ANKETA_DOGOVOR"]>

  export type GA_ANKETA_DOGOVORSelectScalar = {
    ADO_ABA_ID?: boolean
    ADO_NAME1?: boolean
    ADO_NAME2?: boolean
    ADO_NAME3?: boolean
    ADO_PHONE?: boolean
    ADO_EMAIL?: boolean
    ADO_DATETIME?: boolean
    ADO_STATUS?: boolean
  }


  export type $GA_ANKETA_DOGOVORPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GA_ANKETA_DOGOVOR"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ADO_ABA_ID: bigint
      ADO_NAME1: string
      ADO_NAME2: string
      ADO_NAME3: string
      ADO_PHONE: string
      ADO_EMAIL: string
      ADO_DATETIME: Date
      ADO_STATUS: boolean
    }, ExtArgs["result"]["gA_ANKETA_DOGOVOR"]>
    composites: {}
  }


  type GA_ANKETA_DOGOVORGetPayload<S extends boolean | null | undefined | GA_ANKETA_DOGOVORDefaultArgs> = $Result.GetResult<Prisma.$GA_ANKETA_DOGOVORPayload, S>

  type GA_ANKETA_DOGOVORCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GA_ANKETA_DOGOVORFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GA_ANKETA_DOGOVORCountAggregateInputType | true
    }

  export interface GA_ANKETA_DOGOVORDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GA_ANKETA_DOGOVOR'], meta: { name: 'GA_ANKETA_DOGOVOR' } }
    /**
     * Find zero or one GA_ANKETA_DOGOVOR that matches the filter.
     * @param {GA_ANKETA_DOGOVORFindUniqueArgs} args - Arguments to find a GA_ANKETA_DOGOVOR
     * @example
     * // Get one GA_ANKETA_DOGOVOR
     * const gA_ANKETA_DOGOVOR = await prisma.gA_ANKETA_DOGOVOR.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GA_ANKETA_DOGOVORFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_DOGOVORFindUniqueArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_DOGOVORClient<$Result.GetResult<Prisma.$GA_ANKETA_DOGOVORPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GA_ANKETA_DOGOVOR that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GA_ANKETA_DOGOVORFindUniqueOrThrowArgs} args - Arguments to find a GA_ANKETA_DOGOVOR
     * @example
     * // Get one GA_ANKETA_DOGOVOR
     * const gA_ANKETA_DOGOVOR = await prisma.gA_ANKETA_DOGOVOR.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GA_ANKETA_DOGOVORFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_DOGOVORFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_DOGOVORClient<$Result.GetResult<Prisma.$GA_ANKETA_DOGOVORPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GA_ANKETA_DOGOVOR that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_DOGOVORFindFirstArgs} args - Arguments to find a GA_ANKETA_DOGOVOR
     * @example
     * // Get one GA_ANKETA_DOGOVOR
     * const gA_ANKETA_DOGOVOR = await prisma.gA_ANKETA_DOGOVOR.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GA_ANKETA_DOGOVORFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_DOGOVORFindFirstArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_DOGOVORClient<$Result.GetResult<Prisma.$GA_ANKETA_DOGOVORPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GA_ANKETA_DOGOVOR that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_DOGOVORFindFirstOrThrowArgs} args - Arguments to find a GA_ANKETA_DOGOVOR
     * @example
     * // Get one GA_ANKETA_DOGOVOR
     * const gA_ANKETA_DOGOVOR = await prisma.gA_ANKETA_DOGOVOR.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GA_ANKETA_DOGOVORFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_DOGOVORFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_DOGOVORClient<$Result.GetResult<Prisma.$GA_ANKETA_DOGOVORPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GA_ANKETA_DOGOVORS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_DOGOVORFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GA_ANKETA_DOGOVORS
     * const gA_ANKETA_DOGOVORS = await prisma.gA_ANKETA_DOGOVOR.findMany()
     * 
     * // Get first 10 GA_ANKETA_DOGOVORS
     * const gA_ANKETA_DOGOVORS = await prisma.gA_ANKETA_DOGOVOR.findMany({ take: 10 })
     * 
     * // Only select the `ADO_ABA_ID`
     * const gA_ANKETA_DOGOVORWithADO_ABA_IDOnly = await prisma.gA_ANKETA_DOGOVOR.findMany({ select: { ADO_ABA_ID: true } })
     * 
    **/
    findMany<T extends GA_ANKETA_DOGOVORFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_DOGOVORFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GA_ANKETA_DOGOVORPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GA_ANKETA_DOGOVOR.
     * @param {GA_ANKETA_DOGOVORCreateArgs} args - Arguments to create a GA_ANKETA_DOGOVOR.
     * @example
     * // Create one GA_ANKETA_DOGOVOR
     * const GA_ANKETA_DOGOVOR = await prisma.gA_ANKETA_DOGOVOR.create({
     *   data: {
     *     // ... data to create a GA_ANKETA_DOGOVOR
     *   }
     * })
     * 
    **/
    create<T extends GA_ANKETA_DOGOVORCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_DOGOVORCreateArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_DOGOVORClient<$Result.GetResult<Prisma.$GA_ANKETA_DOGOVORPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GA_ANKETA_DOGOVORS.
     *     @param {GA_ANKETA_DOGOVORCreateManyArgs} args - Arguments to create many GA_ANKETA_DOGOVORS.
     *     @example
     *     // Create many GA_ANKETA_DOGOVORS
     *     const gA_ANKETA_DOGOVOR = await prisma.gA_ANKETA_DOGOVOR.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GA_ANKETA_DOGOVORCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_DOGOVORCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GA_ANKETA_DOGOVOR.
     * @param {GA_ANKETA_DOGOVORDeleteArgs} args - Arguments to delete one GA_ANKETA_DOGOVOR.
     * @example
     * // Delete one GA_ANKETA_DOGOVOR
     * const GA_ANKETA_DOGOVOR = await prisma.gA_ANKETA_DOGOVOR.delete({
     *   where: {
     *     // ... filter to delete one GA_ANKETA_DOGOVOR
     *   }
     * })
     * 
    **/
    delete<T extends GA_ANKETA_DOGOVORDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_DOGOVORDeleteArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_DOGOVORClient<$Result.GetResult<Prisma.$GA_ANKETA_DOGOVORPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GA_ANKETA_DOGOVOR.
     * @param {GA_ANKETA_DOGOVORUpdateArgs} args - Arguments to update one GA_ANKETA_DOGOVOR.
     * @example
     * // Update one GA_ANKETA_DOGOVOR
     * const gA_ANKETA_DOGOVOR = await prisma.gA_ANKETA_DOGOVOR.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GA_ANKETA_DOGOVORUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_DOGOVORUpdateArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_DOGOVORClient<$Result.GetResult<Prisma.$GA_ANKETA_DOGOVORPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GA_ANKETA_DOGOVORS.
     * @param {GA_ANKETA_DOGOVORDeleteManyArgs} args - Arguments to filter GA_ANKETA_DOGOVORS to delete.
     * @example
     * // Delete a few GA_ANKETA_DOGOVORS
     * const { count } = await prisma.gA_ANKETA_DOGOVOR.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GA_ANKETA_DOGOVORDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_DOGOVORDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GA_ANKETA_DOGOVORS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_DOGOVORUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GA_ANKETA_DOGOVORS
     * const gA_ANKETA_DOGOVOR = await prisma.gA_ANKETA_DOGOVOR.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GA_ANKETA_DOGOVORUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_DOGOVORUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GA_ANKETA_DOGOVOR.
     * @param {GA_ANKETA_DOGOVORUpsertArgs} args - Arguments to update or create a GA_ANKETA_DOGOVOR.
     * @example
     * // Update or create a GA_ANKETA_DOGOVOR
     * const gA_ANKETA_DOGOVOR = await prisma.gA_ANKETA_DOGOVOR.upsert({
     *   create: {
     *     // ... data to create a GA_ANKETA_DOGOVOR
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GA_ANKETA_DOGOVOR we want to update
     *   }
     * })
    **/
    upsert<T extends GA_ANKETA_DOGOVORUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_DOGOVORUpsertArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_DOGOVORClient<$Result.GetResult<Prisma.$GA_ANKETA_DOGOVORPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of GA_ANKETA_DOGOVORS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_DOGOVORCountArgs} args - Arguments to filter GA_ANKETA_DOGOVORS to count.
     * @example
     * // Count the number of GA_ANKETA_DOGOVORS
     * const count = await prisma.gA_ANKETA_DOGOVOR.count({
     *   where: {
     *     // ... the filter for the GA_ANKETA_DOGOVORS we want to count
     *   }
     * })
    **/
    count<T extends GA_ANKETA_DOGOVORCountArgs>(
      args?: Subset<T, GA_ANKETA_DOGOVORCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GA_ANKETA_DOGOVORCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GA_ANKETA_DOGOVOR.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_DOGOVORAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GA_ANKETA_DOGOVORAggregateArgs>(args: Subset<T, GA_ANKETA_DOGOVORAggregateArgs>): Prisma.PrismaPromise<GetGA_ANKETA_DOGOVORAggregateType<T>>

    /**
     * Group by GA_ANKETA_DOGOVOR.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_DOGOVORGroupByArgs} args - Group by arguments.
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
      T extends GA_ANKETA_DOGOVORGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GA_ANKETA_DOGOVORGroupByArgs['orderBy'] }
        : { orderBy?: GA_ANKETA_DOGOVORGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GA_ANKETA_DOGOVORGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGA_ANKETA_DOGOVORGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GA_ANKETA_DOGOVOR model
   */
  readonly fields: GA_ANKETA_DOGOVORFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GA_ANKETA_DOGOVOR.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GA_ANKETA_DOGOVORClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


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
   * Fields of the GA_ANKETA_DOGOVOR model
   */ 
  interface GA_ANKETA_DOGOVORFieldRefs {
    readonly ADO_ABA_ID: FieldRef<"GA_ANKETA_DOGOVOR", 'BigInt'>
    readonly ADO_NAME1: FieldRef<"GA_ANKETA_DOGOVOR", 'String'>
    readonly ADO_NAME2: FieldRef<"GA_ANKETA_DOGOVOR", 'String'>
    readonly ADO_NAME3: FieldRef<"GA_ANKETA_DOGOVOR", 'String'>
    readonly ADO_PHONE: FieldRef<"GA_ANKETA_DOGOVOR", 'String'>
    readonly ADO_EMAIL: FieldRef<"GA_ANKETA_DOGOVOR", 'String'>
    readonly ADO_DATETIME: FieldRef<"GA_ANKETA_DOGOVOR", 'DateTime'>
    readonly ADO_STATUS: FieldRef<"GA_ANKETA_DOGOVOR", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * GA_ANKETA_DOGOVOR findUnique
   */
  export type GA_ANKETA_DOGOVORFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_DOGOVOR
     */
    select?: GA_ANKETA_DOGOVORSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_DOGOVOR to fetch.
     */
    where: GA_ANKETA_DOGOVORWhereUniqueInput
  }


  /**
   * GA_ANKETA_DOGOVOR findUniqueOrThrow
   */
  export type GA_ANKETA_DOGOVORFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_DOGOVOR
     */
    select?: GA_ANKETA_DOGOVORSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_DOGOVOR to fetch.
     */
    where: GA_ANKETA_DOGOVORWhereUniqueInput
  }


  /**
   * GA_ANKETA_DOGOVOR findFirst
   */
  export type GA_ANKETA_DOGOVORFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_DOGOVOR
     */
    select?: GA_ANKETA_DOGOVORSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_DOGOVOR to fetch.
     */
    where?: GA_ANKETA_DOGOVORWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_DOGOVORS to fetch.
     */
    orderBy?: GA_ANKETA_DOGOVOROrderByWithRelationInput | GA_ANKETA_DOGOVOROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GA_ANKETA_DOGOVORS.
     */
    cursor?: GA_ANKETA_DOGOVORWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_DOGOVORS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_DOGOVORS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GA_ANKETA_DOGOVORS.
     */
    distinct?: GA_ANKETA_DOGOVORScalarFieldEnum | GA_ANKETA_DOGOVORScalarFieldEnum[]
  }


  /**
   * GA_ANKETA_DOGOVOR findFirstOrThrow
   */
  export type GA_ANKETA_DOGOVORFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_DOGOVOR
     */
    select?: GA_ANKETA_DOGOVORSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_DOGOVOR to fetch.
     */
    where?: GA_ANKETA_DOGOVORWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_DOGOVORS to fetch.
     */
    orderBy?: GA_ANKETA_DOGOVOROrderByWithRelationInput | GA_ANKETA_DOGOVOROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GA_ANKETA_DOGOVORS.
     */
    cursor?: GA_ANKETA_DOGOVORWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_DOGOVORS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_DOGOVORS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GA_ANKETA_DOGOVORS.
     */
    distinct?: GA_ANKETA_DOGOVORScalarFieldEnum | GA_ANKETA_DOGOVORScalarFieldEnum[]
  }


  /**
   * GA_ANKETA_DOGOVOR findMany
   */
  export type GA_ANKETA_DOGOVORFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_DOGOVOR
     */
    select?: GA_ANKETA_DOGOVORSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_DOGOVORS to fetch.
     */
    where?: GA_ANKETA_DOGOVORWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_DOGOVORS to fetch.
     */
    orderBy?: GA_ANKETA_DOGOVOROrderByWithRelationInput | GA_ANKETA_DOGOVOROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GA_ANKETA_DOGOVORS.
     */
    cursor?: GA_ANKETA_DOGOVORWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_DOGOVORS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_DOGOVORS.
     */
    skip?: number
    distinct?: GA_ANKETA_DOGOVORScalarFieldEnum | GA_ANKETA_DOGOVORScalarFieldEnum[]
  }


  /**
   * GA_ANKETA_DOGOVOR create
   */
  export type GA_ANKETA_DOGOVORCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_DOGOVOR
     */
    select?: GA_ANKETA_DOGOVORSelect<ExtArgs> | null
    /**
     * The data needed to create a GA_ANKETA_DOGOVOR.
     */
    data: XOR<GA_ANKETA_DOGOVORCreateInput, GA_ANKETA_DOGOVORUncheckedCreateInput>
  }


  /**
   * GA_ANKETA_DOGOVOR createMany
   */
  export type GA_ANKETA_DOGOVORCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GA_ANKETA_DOGOVORS.
     */
    data: GA_ANKETA_DOGOVORCreateManyInput | GA_ANKETA_DOGOVORCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * GA_ANKETA_DOGOVOR update
   */
  export type GA_ANKETA_DOGOVORUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_DOGOVOR
     */
    select?: GA_ANKETA_DOGOVORSelect<ExtArgs> | null
    /**
     * The data needed to update a GA_ANKETA_DOGOVOR.
     */
    data: XOR<GA_ANKETA_DOGOVORUpdateInput, GA_ANKETA_DOGOVORUncheckedUpdateInput>
    /**
     * Choose, which GA_ANKETA_DOGOVOR to update.
     */
    where: GA_ANKETA_DOGOVORWhereUniqueInput
  }


  /**
   * GA_ANKETA_DOGOVOR updateMany
   */
  export type GA_ANKETA_DOGOVORUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GA_ANKETA_DOGOVORS.
     */
    data: XOR<GA_ANKETA_DOGOVORUpdateManyMutationInput, GA_ANKETA_DOGOVORUncheckedUpdateManyInput>
    /**
     * Filter which GA_ANKETA_DOGOVORS to update
     */
    where?: GA_ANKETA_DOGOVORWhereInput
  }


  /**
   * GA_ANKETA_DOGOVOR upsert
   */
  export type GA_ANKETA_DOGOVORUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_DOGOVOR
     */
    select?: GA_ANKETA_DOGOVORSelect<ExtArgs> | null
    /**
     * The filter to search for the GA_ANKETA_DOGOVOR to update in case it exists.
     */
    where: GA_ANKETA_DOGOVORWhereUniqueInput
    /**
     * In case the GA_ANKETA_DOGOVOR found by the `where` argument doesn't exist, create a new GA_ANKETA_DOGOVOR with this data.
     */
    create: XOR<GA_ANKETA_DOGOVORCreateInput, GA_ANKETA_DOGOVORUncheckedCreateInput>
    /**
     * In case the GA_ANKETA_DOGOVOR was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GA_ANKETA_DOGOVORUpdateInput, GA_ANKETA_DOGOVORUncheckedUpdateInput>
  }


  /**
   * GA_ANKETA_DOGOVOR delete
   */
  export type GA_ANKETA_DOGOVORDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_DOGOVOR
     */
    select?: GA_ANKETA_DOGOVORSelect<ExtArgs> | null
    /**
     * Filter which GA_ANKETA_DOGOVOR to delete.
     */
    where: GA_ANKETA_DOGOVORWhereUniqueInput
  }


  /**
   * GA_ANKETA_DOGOVOR deleteMany
   */
  export type GA_ANKETA_DOGOVORDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GA_ANKETA_DOGOVORS to delete
     */
    where?: GA_ANKETA_DOGOVORWhereInput
  }


  /**
   * GA_ANKETA_DOGOVOR without action
   */
  export type GA_ANKETA_DOGOVORDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_DOGOVOR
     */
    select?: GA_ANKETA_DOGOVORSelect<ExtArgs> | null
  }



  /**
   * Model GA_ANKETA_OBOROT
   */

  export type AggregateGA_ANKETA_OBOROT = {
    _count: GA_ANKETA_OBOROTCountAggregateOutputType | null
    _avg: GA_ANKETA_OBOROTAvgAggregateOutputType | null
    _sum: GA_ANKETA_OBOROTSumAggregateOutputType | null
    _min: GA_ANKETA_OBOROTMinAggregateOutputType | null
    _max: GA_ANKETA_OBOROTMaxAggregateOutputType | null
  }

  export type GA_ANKETA_OBOROTAvgAggregateOutputType = {
    ABO_ABA_ID: number | null
    ABO_OBOROT_ALL: number | null
    ABO_OBOROT_BRANDS_MONTH: number | null
    ABO_OBOROT_AE: number | null
    ABO_OBOROT_ROSSKO: number | null
    ABO_OBOROT_ARKONA: number | null
    ABO_OBOROT_AUTORUS: number | null
    ABO_SCORES_MONTH_PLAN: number | null
    ABO_SCORES_MONTH_FAKT: number | null
    ABO_COUNT_ROSSKO: number | null
    ABO_COUNT_AE: number | null
    ABO_COUNT_ARKONA: number | null
    ABO_COUNT_AUTORUS: number | null
    ABO_OBOROT_BRANDS: number | null
    ABO_OBOROT_BRAND_LOOK1: number | null
    ABO_SCORES: number | null
    ABO_OBOROT_BRAND_LOOK2: number | null
    ABO_OBOROT_BRAND_LOOK2_ROSSKO: number | null
    ABO_OBOROT_BRAND_LOOK2_AE: number | null
    ABO_OBOROT_BRAND_LOOK2_ARKONA: number | null
    ABO_OBOROT_BRAND_LOOK2_AUTORUS: number | null
    ABO_OBOROT_BRANDS_MONTH_ROSSKO: number | null
    ABO_OBOROT_BRANDS_MONTH_AE: number | null
    ABO_OBOROT_BRANDS_MONTH_ARKONA: number | null
    ABO_OBOROT_BRANDS_MONTH_AUTORUS: number | null
    ABO_OBOROT_BRAND1: number | null
    ABO_OBOROT_BRAND2: number | null
    ABO_OBOROT_BRAND3: number | null
    ABO_OBOROT_BRAND4: number | null
    ABO_OBOROT_BRAND5: number | null
    ABO_OBOROT_BRAND6: number | null
    ABO_OBOROT_NEXT: number | null
    ABO_SCORES_MONTH_PLAN_NEXT: number | null
    ABO_ABA_REMZONA_QTY: number | null
    ABO_OBOROT_PARTRA: number | null
    ABO_SCORES_PARTRA: number | null
  }

  export type GA_ANKETA_OBOROTSumAggregateOutputType = {
    ABO_ABA_ID: bigint | null
    ABO_OBOROT_ALL: number | null
    ABO_OBOROT_BRANDS_MONTH: number | null
    ABO_OBOROT_AE: number | null
    ABO_OBOROT_ROSSKO: number | null
    ABO_OBOROT_ARKONA: number | null
    ABO_OBOROT_AUTORUS: number | null
    ABO_SCORES_MONTH_PLAN: number | null
    ABO_SCORES_MONTH_FAKT: number | null
    ABO_COUNT_ROSSKO: number | null
    ABO_COUNT_AE: number | null
    ABO_COUNT_ARKONA: number | null
    ABO_COUNT_AUTORUS: number | null
    ABO_OBOROT_BRANDS: number | null
    ABO_OBOROT_BRAND_LOOK1: number | null
    ABO_SCORES: number | null
    ABO_OBOROT_BRAND_LOOK2: number | null
    ABO_OBOROT_BRAND_LOOK2_ROSSKO: number | null
    ABO_OBOROT_BRAND_LOOK2_AE: number | null
    ABO_OBOROT_BRAND_LOOK2_ARKONA: number | null
    ABO_OBOROT_BRAND_LOOK2_AUTORUS: number | null
    ABO_OBOROT_BRANDS_MONTH_ROSSKO: number | null
    ABO_OBOROT_BRANDS_MONTH_AE: number | null
    ABO_OBOROT_BRANDS_MONTH_ARKONA: number | null
    ABO_OBOROT_BRANDS_MONTH_AUTORUS: number | null
    ABO_OBOROT_BRAND1: number | null
    ABO_OBOROT_BRAND2: number | null
    ABO_OBOROT_BRAND3: number | null
    ABO_OBOROT_BRAND4: number | null
    ABO_OBOROT_BRAND5: number | null
    ABO_OBOROT_BRAND6: number | null
    ABO_OBOROT_NEXT: number | null
    ABO_SCORES_MONTH_PLAN_NEXT: number | null
    ABO_ABA_REMZONA_QTY: number | null
    ABO_OBOROT_PARTRA: number | null
    ABO_SCORES_PARTRA: number | null
  }

  export type GA_ANKETA_OBOROTMinAggregateOutputType = {
    ABO_ABA_ID: bigint | null
    ABO_DATETIME: Date | null
    ABO_OBOROT_ALL: number | null
    ABO_OBOROT_BRANDS_MONTH: number | null
    ABO_OBOROT_AE: number | null
    ABO_OBOROT_ROSSKO: number | null
    ABO_OBOROT_ARKONA: number | null
    ABO_OBOROT_AUTORUS: number | null
    ABO_SCORES_MONTH_PLAN: number | null
    ABO_SCORES_MONTH_FAKT: number | null
    ABO_COUNT_ROSSKO: number | null
    ABO_COUNT_AE: number | null
    ABO_COUNT_ARKONA: number | null
    ABO_COUNT_AUTORUS: number | null
    ABO_OBOROT_BRANDS: number | null
    ABO_OBOROT_BRAND_LOOK1: number | null
    ABO_SCORES: number | null
    ABO_OBOROT_BRAND_LOOK2: number | null
    ABO_OBOROT_BRAND_LOOK2_ROSSKO: number | null
    ABO_OBOROT_BRAND_LOOK2_AE: number | null
    ABO_OBOROT_BRAND_LOOK2_ARKONA: number | null
    ABO_OBOROT_BRAND_LOOK2_AUTORUS: number | null
    ABO_OBOROT_BRANDS_MONTH_ROSSKO: number | null
    ABO_OBOROT_BRANDS_MONTH_AE: number | null
    ABO_OBOROT_BRANDS_MONTH_ARKONA: number | null
    ABO_OBOROT_BRANDS_MONTH_AUTORUS: number | null
    ABO_OBOROT_BRAND1: number | null
    ABO_OBOROT_BRAND2: number | null
    ABO_OBOROT_BRAND3: number | null
    ABO_OBOROT_BRAND4: number | null
    ABO_OBOROT_BRAND5: number | null
    ABO_OBOROT_BRAND6: number | null
    ABO_OBOROT_NEXT: number | null
    ABO_SCORES_MONTH_PLAN_NEXT: number | null
    ABO_ABA_REMZONA_QTY: number | null
    ABO_OBOROT_PARTRA: number | null
    ABO_SCORES_PARTRA: number | null
  }

  export type GA_ANKETA_OBOROTMaxAggregateOutputType = {
    ABO_ABA_ID: bigint | null
    ABO_DATETIME: Date | null
    ABO_OBOROT_ALL: number | null
    ABO_OBOROT_BRANDS_MONTH: number | null
    ABO_OBOROT_AE: number | null
    ABO_OBOROT_ROSSKO: number | null
    ABO_OBOROT_ARKONA: number | null
    ABO_OBOROT_AUTORUS: number | null
    ABO_SCORES_MONTH_PLAN: number | null
    ABO_SCORES_MONTH_FAKT: number | null
    ABO_COUNT_ROSSKO: number | null
    ABO_COUNT_AE: number | null
    ABO_COUNT_ARKONA: number | null
    ABO_COUNT_AUTORUS: number | null
    ABO_OBOROT_BRANDS: number | null
    ABO_OBOROT_BRAND_LOOK1: number | null
    ABO_SCORES: number | null
    ABO_OBOROT_BRAND_LOOK2: number | null
    ABO_OBOROT_BRAND_LOOK2_ROSSKO: number | null
    ABO_OBOROT_BRAND_LOOK2_AE: number | null
    ABO_OBOROT_BRAND_LOOK2_ARKONA: number | null
    ABO_OBOROT_BRAND_LOOK2_AUTORUS: number | null
    ABO_OBOROT_BRANDS_MONTH_ROSSKO: number | null
    ABO_OBOROT_BRANDS_MONTH_AE: number | null
    ABO_OBOROT_BRANDS_MONTH_ARKONA: number | null
    ABO_OBOROT_BRANDS_MONTH_AUTORUS: number | null
    ABO_OBOROT_BRAND1: number | null
    ABO_OBOROT_BRAND2: number | null
    ABO_OBOROT_BRAND3: number | null
    ABO_OBOROT_BRAND4: number | null
    ABO_OBOROT_BRAND5: number | null
    ABO_OBOROT_BRAND6: number | null
    ABO_OBOROT_NEXT: number | null
    ABO_SCORES_MONTH_PLAN_NEXT: number | null
    ABO_ABA_REMZONA_QTY: number | null
    ABO_OBOROT_PARTRA: number | null
    ABO_SCORES_PARTRA: number | null
  }

  export type GA_ANKETA_OBOROTCountAggregateOutputType = {
    ABO_ABA_ID: number
    ABO_DATETIME: number
    ABO_OBOROT_ALL: number
    ABO_OBOROT_BRANDS_MONTH: number
    ABO_OBOROT_AE: number
    ABO_OBOROT_ROSSKO: number
    ABO_OBOROT_ARKONA: number
    ABO_OBOROT_AUTORUS: number
    ABO_SCORES_MONTH_PLAN: number
    ABO_SCORES_MONTH_FAKT: number
    ABO_COUNT_ROSSKO: number
    ABO_COUNT_AE: number
    ABO_COUNT_ARKONA: number
    ABO_COUNT_AUTORUS: number
    ABO_OBOROT_BRANDS: number
    ABO_OBOROT_BRAND_LOOK1: number
    ABO_SCORES: number
    ABO_OBOROT_BRAND_LOOK2: number
    ABO_OBOROT_BRAND_LOOK2_ROSSKO: number
    ABO_OBOROT_BRAND_LOOK2_AE: number
    ABO_OBOROT_BRAND_LOOK2_ARKONA: number
    ABO_OBOROT_BRAND_LOOK2_AUTORUS: number
    ABO_OBOROT_BRANDS_MONTH_ROSSKO: number
    ABO_OBOROT_BRANDS_MONTH_AE: number
    ABO_OBOROT_BRANDS_MONTH_ARKONA: number
    ABO_OBOROT_BRANDS_MONTH_AUTORUS: number
    ABO_OBOROT_BRAND1: number
    ABO_OBOROT_BRAND2: number
    ABO_OBOROT_BRAND3: number
    ABO_OBOROT_BRAND4: number
    ABO_OBOROT_BRAND5: number
    ABO_OBOROT_BRAND6: number
    ABO_OBOROT_NEXT: number
    ABO_SCORES_MONTH_PLAN_NEXT: number
    ABO_ABA_REMZONA_QTY: number
    ABO_OBOROT_PARTRA: number
    ABO_SCORES_PARTRA: number
    _all: number
  }


  export type GA_ANKETA_OBOROTAvgAggregateInputType = {
    ABO_ABA_ID?: true
    ABO_OBOROT_ALL?: true
    ABO_OBOROT_BRANDS_MONTH?: true
    ABO_OBOROT_AE?: true
    ABO_OBOROT_ROSSKO?: true
    ABO_OBOROT_ARKONA?: true
    ABO_OBOROT_AUTORUS?: true
    ABO_SCORES_MONTH_PLAN?: true
    ABO_SCORES_MONTH_FAKT?: true
    ABO_COUNT_ROSSKO?: true
    ABO_COUNT_AE?: true
    ABO_COUNT_ARKONA?: true
    ABO_COUNT_AUTORUS?: true
    ABO_OBOROT_BRANDS?: true
    ABO_OBOROT_BRAND_LOOK1?: true
    ABO_SCORES?: true
    ABO_OBOROT_BRAND_LOOK2?: true
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: true
    ABO_OBOROT_BRAND_LOOK2_AE?: true
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: true
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: true
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: true
    ABO_OBOROT_BRANDS_MONTH_AE?: true
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: true
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: true
    ABO_OBOROT_BRAND1?: true
    ABO_OBOROT_BRAND2?: true
    ABO_OBOROT_BRAND3?: true
    ABO_OBOROT_BRAND4?: true
    ABO_OBOROT_BRAND5?: true
    ABO_OBOROT_BRAND6?: true
    ABO_OBOROT_NEXT?: true
    ABO_SCORES_MONTH_PLAN_NEXT?: true
    ABO_ABA_REMZONA_QTY?: true
    ABO_OBOROT_PARTRA?: true
    ABO_SCORES_PARTRA?: true
  }

  export type GA_ANKETA_OBOROTSumAggregateInputType = {
    ABO_ABA_ID?: true
    ABO_OBOROT_ALL?: true
    ABO_OBOROT_BRANDS_MONTH?: true
    ABO_OBOROT_AE?: true
    ABO_OBOROT_ROSSKO?: true
    ABO_OBOROT_ARKONA?: true
    ABO_OBOROT_AUTORUS?: true
    ABO_SCORES_MONTH_PLAN?: true
    ABO_SCORES_MONTH_FAKT?: true
    ABO_COUNT_ROSSKO?: true
    ABO_COUNT_AE?: true
    ABO_COUNT_ARKONA?: true
    ABO_COUNT_AUTORUS?: true
    ABO_OBOROT_BRANDS?: true
    ABO_OBOROT_BRAND_LOOK1?: true
    ABO_SCORES?: true
    ABO_OBOROT_BRAND_LOOK2?: true
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: true
    ABO_OBOROT_BRAND_LOOK2_AE?: true
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: true
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: true
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: true
    ABO_OBOROT_BRANDS_MONTH_AE?: true
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: true
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: true
    ABO_OBOROT_BRAND1?: true
    ABO_OBOROT_BRAND2?: true
    ABO_OBOROT_BRAND3?: true
    ABO_OBOROT_BRAND4?: true
    ABO_OBOROT_BRAND5?: true
    ABO_OBOROT_BRAND6?: true
    ABO_OBOROT_NEXT?: true
    ABO_SCORES_MONTH_PLAN_NEXT?: true
    ABO_ABA_REMZONA_QTY?: true
    ABO_OBOROT_PARTRA?: true
    ABO_SCORES_PARTRA?: true
  }

  export type GA_ANKETA_OBOROTMinAggregateInputType = {
    ABO_ABA_ID?: true
    ABO_DATETIME?: true
    ABO_OBOROT_ALL?: true
    ABO_OBOROT_BRANDS_MONTH?: true
    ABO_OBOROT_AE?: true
    ABO_OBOROT_ROSSKO?: true
    ABO_OBOROT_ARKONA?: true
    ABO_OBOROT_AUTORUS?: true
    ABO_SCORES_MONTH_PLAN?: true
    ABO_SCORES_MONTH_FAKT?: true
    ABO_COUNT_ROSSKO?: true
    ABO_COUNT_AE?: true
    ABO_COUNT_ARKONA?: true
    ABO_COUNT_AUTORUS?: true
    ABO_OBOROT_BRANDS?: true
    ABO_OBOROT_BRAND_LOOK1?: true
    ABO_SCORES?: true
    ABO_OBOROT_BRAND_LOOK2?: true
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: true
    ABO_OBOROT_BRAND_LOOK2_AE?: true
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: true
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: true
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: true
    ABO_OBOROT_BRANDS_MONTH_AE?: true
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: true
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: true
    ABO_OBOROT_BRAND1?: true
    ABO_OBOROT_BRAND2?: true
    ABO_OBOROT_BRAND3?: true
    ABO_OBOROT_BRAND4?: true
    ABO_OBOROT_BRAND5?: true
    ABO_OBOROT_BRAND6?: true
    ABO_OBOROT_NEXT?: true
    ABO_SCORES_MONTH_PLAN_NEXT?: true
    ABO_ABA_REMZONA_QTY?: true
    ABO_OBOROT_PARTRA?: true
    ABO_SCORES_PARTRA?: true
  }

  export type GA_ANKETA_OBOROTMaxAggregateInputType = {
    ABO_ABA_ID?: true
    ABO_DATETIME?: true
    ABO_OBOROT_ALL?: true
    ABO_OBOROT_BRANDS_MONTH?: true
    ABO_OBOROT_AE?: true
    ABO_OBOROT_ROSSKO?: true
    ABO_OBOROT_ARKONA?: true
    ABO_OBOROT_AUTORUS?: true
    ABO_SCORES_MONTH_PLAN?: true
    ABO_SCORES_MONTH_FAKT?: true
    ABO_COUNT_ROSSKO?: true
    ABO_COUNT_AE?: true
    ABO_COUNT_ARKONA?: true
    ABO_COUNT_AUTORUS?: true
    ABO_OBOROT_BRANDS?: true
    ABO_OBOROT_BRAND_LOOK1?: true
    ABO_SCORES?: true
    ABO_OBOROT_BRAND_LOOK2?: true
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: true
    ABO_OBOROT_BRAND_LOOK2_AE?: true
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: true
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: true
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: true
    ABO_OBOROT_BRANDS_MONTH_AE?: true
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: true
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: true
    ABO_OBOROT_BRAND1?: true
    ABO_OBOROT_BRAND2?: true
    ABO_OBOROT_BRAND3?: true
    ABO_OBOROT_BRAND4?: true
    ABO_OBOROT_BRAND5?: true
    ABO_OBOROT_BRAND6?: true
    ABO_OBOROT_NEXT?: true
    ABO_SCORES_MONTH_PLAN_NEXT?: true
    ABO_ABA_REMZONA_QTY?: true
    ABO_OBOROT_PARTRA?: true
    ABO_SCORES_PARTRA?: true
  }

  export type GA_ANKETA_OBOROTCountAggregateInputType = {
    ABO_ABA_ID?: true
    ABO_DATETIME?: true
    ABO_OBOROT_ALL?: true
    ABO_OBOROT_BRANDS_MONTH?: true
    ABO_OBOROT_AE?: true
    ABO_OBOROT_ROSSKO?: true
    ABO_OBOROT_ARKONA?: true
    ABO_OBOROT_AUTORUS?: true
    ABO_SCORES_MONTH_PLAN?: true
    ABO_SCORES_MONTH_FAKT?: true
    ABO_COUNT_ROSSKO?: true
    ABO_COUNT_AE?: true
    ABO_COUNT_ARKONA?: true
    ABO_COUNT_AUTORUS?: true
    ABO_OBOROT_BRANDS?: true
    ABO_OBOROT_BRAND_LOOK1?: true
    ABO_SCORES?: true
    ABO_OBOROT_BRAND_LOOK2?: true
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: true
    ABO_OBOROT_BRAND_LOOK2_AE?: true
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: true
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: true
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: true
    ABO_OBOROT_BRANDS_MONTH_AE?: true
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: true
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: true
    ABO_OBOROT_BRAND1?: true
    ABO_OBOROT_BRAND2?: true
    ABO_OBOROT_BRAND3?: true
    ABO_OBOROT_BRAND4?: true
    ABO_OBOROT_BRAND5?: true
    ABO_OBOROT_BRAND6?: true
    ABO_OBOROT_NEXT?: true
    ABO_SCORES_MONTH_PLAN_NEXT?: true
    ABO_ABA_REMZONA_QTY?: true
    ABO_OBOROT_PARTRA?: true
    ABO_SCORES_PARTRA?: true
    _all?: true
  }

  export type GA_ANKETA_OBOROTAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GA_ANKETA_OBOROT to aggregate.
     */
    where?: GA_ANKETA_OBOROTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_OBOROTS to fetch.
     */
    orderBy?: GA_ANKETA_OBOROTOrderByWithRelationInput | GA_ANKETA_OBOROTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GA_ANKETA_OBOROTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_OBOROTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_OBOROTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GA_ANKETA_OBOROTS
    **/
    _count?: true | GA_ANKETA_OBOROTCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GA_ANKETA_OBOROTAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GA_ANKETA_OBOROTSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GA_ANKETA_OBOROTMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GA_ANKETA_OBOROTMaxAggregateInputType
  }

  export type GetGA_ANKETA_OBOROTAggregateType<T extends GA_ANKETA_OBOROTAggregateArgs> = {
        [P in keyof T & keyof AggregateGA_ANKETA_OBOROT]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGA_ANKETA_OBOROT[P]>
      : GetScalarType<T[P], AggregateGA_ANKETA_OBOROT[P]>
  }




  export type GA_ANKETA_OBOROTGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GA_ANKETA_OBOROTWhereInput
    orderBy?: GA_ANKETA_OBOROTOrderByWithAggregationInput | GA_ANKETA_OBOROTOrderByWithAggregationInput[]
    by: GA_ANKETA_OBOROTScalarFieldEnum[] | GA_ANKETA_OBOROTScalarFieldEnum
    having?: GA_ANKETA_OBOROTScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GA_ANKETA_OBOROTCountAggregateInputType | true
    _avg?: GA_ANKETA_OBOROTAvgAggregateInputType
    _sum?: GA_ANKETA_OBOROTSumAggregateInputType
    _min?: GA_ANKETA_OBOROTMinAggregateInputType
    _max?: GA_ANKETA_OBOROTMaxAggregateInputType
  }

  export type GA_ANKETA_OBOROTGroupByOutputType = {
    ABO_ABA_ID: bigint
    ABO_DATETIME: Date
    ABO_OBOROT_ALL: number
    ABO_OBOROT_BRANDS_MONTH: number
    ABO_OBOROT_AE: number
    ABO_OBOROT_ROSSKO: number
    ABO_OBOROT_ARKONA: number
    ABO_OBOROT_AUTORUS: number
    ABO_SCORES_MONTH_PLAN: number
    ABO_SCORES_MONTH_FAKT: number
    ABO_COUNT_ROSSKO: number
    ABO_COUNT_AE: number
    ABO_COUNT_ARKONA: number
    ABO_COUNT_AUTORUS: number
    ABO_OBOROT_BRANDS: number
    ABO_OBOROT_BRAND_LOOK1: number
    ABO_SCORES: number
    ABO_OBOROT_BRAND_LOOK2: number
    ABO_OBOROT_BRAND_LOOK2_ROSSKO: number
    ABO_OBOROT_BRAND_LOOK2_AE: number
    ABO_OBOROT_BRAND_LOOK2_ARKONA: number
    ABO_OBOROT_BRAND_LOOK2_AUTORUS: number
    ABO_OBOROT_BRANDS_MONTH_ROSSKO: number
    ABO_OBOROT_BRANDS_MONTH_AE: number
    ABO_OBOROT_BRANDS_MONTH_ARKONA: number
    ABO_OBOROT_BRANDS_MONTH_AUTORUS: number
    ABO_OBOROT_BRAND1: number
    ABO_OBOROT_BRAND2: number
    ABO_OBOROT_BRAND3: number
    ABO_OBOROT_BRAND4: number
    ABO_OBOROT_BRAND5: number
    ABO_OBOROT_BRAND6: number
    ABO_OBOROT_NEXT: number
    ABO_SCORES_MONTH_PLAN_NEXT: number
    ABO_ABA_REMZONA_QTY: number
    ABO_OBOROT_PARTRA: number
    ABO_SCORES_PARTRA: number
    _count: GA_ANKETA_OBOROTCountAggregateOutputType | null
    _avg: GA_ANKETA_OBOROTAvgAggregateOutputType | null
    _sum: GA_ANKETA_OBOROTSumAggregateOutputType | null
    _min: GA_ANKETA_OBOROTMinAggregateOutputType | null
    _max: GA_ANKETA_OBOROTMaxAggregateOutputType | null
  }

  type GetGA_ANKETA_OBOROTGroupByPayload<T extends GA_ANKETA_OBOROTGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GA_ANKETA_OBOROTGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GA_ANKETA_OBOROTGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GA_ANKETA_OBOROTGroupByOutputType[P]>
            : GetScalarType<T[P], GA_ANKETA_OBOROTGroupByOutputType[P]>
        }
      >
    >


  export type GA_ANKETA_OBOROTSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ABO_ABA_ID?: boolean
    ABO_DATETIME?: boolean
    ABO_OBOROT_ALL?: boolean
    ABO_OBOROT_BRANDS_MONTH?: boolean
    ABO_OBOROT_AE?: boolean
    ABO_OBOROT_ROSSKO?: boolean
    ABO_OBOROT_ARKONA?: boolean
    ABO_OBOROT_AUTORUS?: boolean
    ABO_SCORES_MONTH_PLAN?: boolean
    ABO_SCORES_MONTH_FAKT?: boolean
    ABO_COUNT_ROSSKO?: boolean
    ABO_COUNT_AE?: boolean
    ABO_COUNT_ARKONA?: boolean
    ABO_COUNT_AUTORUS?: boolean
    ABO_OBOROT_BRANDS?: boolean
    ABO_OBOROT_BRAND_LOOK1?: boolean
    ABO_SCORES?: boolean
    ABO_OBOROT_BRAND_LOOK2?: boolean
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: boolean
    ABO_OBOROT_BRAND_LOOK2_AE?: boolean
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: boolean
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: boolean
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: boolean
    ABO_OBOROT_BRANDS_MONTH_AE?: boolean
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: boolean
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: boolean
    ABO_OBOROT_BRAND1?: boolean
    ABO_OBOROT_BRAND2?: boolean
    ABO_OBOROT_BRAND3?: boolean
    ABO_OBOROT_BRAND4?: boolean
    ABO_OBOROT_BRAND5?: boolean
    ABO_OBOROT_BRAND6?: boolean
    ABO_OBOROT_NEXT?: boolean
    ABO_SCORES_MONTH_PLAN_NEXT?: boolean
    ABO_ABA_REMZONA_QTY?: boolean
    ABO_OBOROT_PARTRA?: boolean
    ABO_SCORES_PARTRA?: boolean
  }, ExtArgs["result"]["gA_ANKETA_OBOROT"]>

  export type GA_ANKETA_OBOROTSelectScalar = {
    ABO_ABA_ID?: boolean
    ABO_DATETIME?: boolean
    ABO_OBOROT_ALL?: boolean
    ABO_OBOROT_BRANDS_MONTH?: boolean
    ABO_OBOROT_AE?: boolean
    ABO_OBOROT_ROSSKO?: boolean
    ABO_OBOROT_ARKONA?: boolean
    ABO_OBOROT_AUTORUS?: boolean
    ABO_SCORES_MONTH_PLAN?: boolean
    ABO_SCORES_MONTH_FAKT?: boolean
    ABO_COUNT_ROSSKO?: boolean
    ABO_COUNT_AE?: boolean
    ABO_COUNT_ARKONA?: boolean
    ABO_COUNT_AUTORUS?: boolean
    ABO_OBOROT_BRANDS?: boolean
    ABO_OBOROT_BRAND_LOOK1?: boolean
    ABO_SCORES?: boolean
    ABO_OBOROT_BRAND_LOOK2?: boolean
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: boolean
    ABO_OBOROT_BRAND_LOOK2_AE?: boolean
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: boolean
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: boolean
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: boolean
    ABO_OBOROT_BRANDS_MONTH_AE?: boolean
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: boolean
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: boolean
    ABO_OBOROT_BRAND1?: boolean
    ABO_OBOROT_BRAND2?: boolean
    ABO_OBOROT_BRAND3?: boolean
    ABO_OBOROT_BRAND4?: boolean
    ABO_OBOROT_BRAND5?: boolean
    ABO_OBOROT_BRAND6?: boolean
    ABO_OBOROT_NEXT?: boolean
    ABO_SCORES_MONTH_PLAN_NEXT?: boolean
    ABO_ABA_REMZONA_QTY?: boolean
    ABO_OBOROT_PARTRA?: boolean
    ABO_SCORES_PARTRA?: boolean
  }


  export type $GA_ANKETA_OBOROTPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GA_ANKETA_OBOROT"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ABO_ABA_ID: bigint
      ABO_DATETIME: Date
      ABO_OBOROT_ALL: number
      ABO_OBOROT_BRANDS_MONTH: number
      ABO_OBOROT_AE: number
      ABO_OBOROT_ROSSKO: number
      ABO_OBOROT_ARKONA: number
      ABO_OBOROT_AUTORUS: number
      ABO_SCORES_MONTH_PLAN: number
      ABO_SCORES_MONTH_FAKT: number
      ABO_COUNT_ROSSKO: number
      ABO_COUNT_AE: number
      ABO_COUNT_ARKONA: number
      ABO_COUNT_AUTORUS: number
      ABO_OBOROT_BRANDS: number
      ABO_OBOROT_BRAND_LOOK1: number
      ABO_SCORES: number
      ABO_OBOROT_BRAND_LOOK2: number
      ABO_OBOROT_BRAND_LOOK2_ROSSKO: number
      ABO_OBOROT_BRAND_LOOK2_AE: number
      ABO_OBOROT_BRAND_LOOK2_ARKONA: number
      ABO_OBOROT_BRAND_LOOK2_AUTORUS: number
      ABO_OBOROT_BRANDS_MONTH_ROSSKO: number
      ABO_OBOROT_BRANDS_MONTH_AE: number
      ABO_OBOROT_BRANDS_MONTH_ARKONA: number
      ABO_OBOROT_BRANDS_MONTH_AUTORUS: number
      ABO_OBOROT_BRAND1: number
      ABO_OBOROT_BRAND2: number
      ABO_OBOROT_BRAND3: number
      ABO_OBOROT_BRAND4: number
      ABO_OBOROT_BRAND5: number
      ABO_OBOROT_BRAND6: number
      ABO_OBOROT_NEXT: number
      ABO_SCORES_MONTH_PLAN_NEXT: number
      ABO_ABA_REMZONA_QTY: number
      ABO_OBOROT_PARTRA: number
      ABO_SCORES_PARTRA: number
    }, ExtArgs["result"]["gA_ANKETA_OBOROT"]>
    composites: {}
  }


  type GA_ANKETA_OBOROTGetPayload<S extends boolean | null | undefined | GA_ANKETA_OBOROTDefaultArgs> = $Result.GetResult<Prisma.$GA_ANKETA_OBOROTPayload, S>

  type GA_ANKETA_OBOROTCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GA_ANKETA_OBOROTFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GA_ANKETA_OBOROTCountAggregateInputType | true
    }

  export interface GA_ANKETA_OBOROTDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GA_ANKETA_OBOROT'], meta: { name: 'GA_ANKETA_OBOROT' } }
    /**
     * Find zero or one GA_ANKETA_OBOROT that matches the filter.
     * @param {GA_ANKETA_OBOROTFindUniqueArgs} args - Arguments to find a GA_ANKETA_OBOROT
     * @example
     * // Get one GA_ANKETA_OBOROT
     * const gA_ANKETA_OBOROT = await prisma.gA_ANKETA_OBOROT.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GA_ANKETA_OBOROTFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_OBOROTFindUniqueArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_OBOROTClient<$Result.GetResult<Prisma.$GA_ANKETA_OBOROTPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GA_ANKETA_OBOROT that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GA_ANKETA_OBOROTFindUniqueOrThrowArgs} args - Arguments to find a GA_ANKETA_OBOROT
     * @example
     * // Get one GA_ANKETA_OBOROT
     * const gA_ANKETA_OBOROT = await prisma.gA_ANKETA_OBOROT.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GA_ANKETA_OBOROTFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_OBOROTFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_OBOROTClient<$Result.GetResult<Prisma.$GA_ANKETA_OBOROTPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GA_ANKETA_OBOROT that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_OBOROTFindFirstArgs} args - Arguments to find a GA_ANKETA_OBOROT
     * @example
     * // Get one GA_ANKETA_OBOROT
     * const gA_ANKETA_OBOROT = await prisma.gA_ANKETA_OBOROT.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GA_ANKETA_OBOROTFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_OBOROTFindFirstArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_OBOROTClient<$Result.GetResult<Prisma.$GA_ANKETA_OBOROTPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GA_ANKETA_OBOROT that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_OBOROTFindFirstOrThrowArgs} args - Arguments to find a GA_ANKETA_OBOROT
     * @example
     * // Get one GA_ANKETA_OBOROT
     * const gA_ANKETA_OBOROT = await prisma.gA_ANKETA_OBOROT.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GA_ANKETA_OBOROTFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_OBOROTFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_OBOROTClient<$Result.GetResult<Prisma.$GA_ANKETA_OBOROTPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GA_ANKETA_OBOROTS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_OBOROTFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GA_ANKETA_OBOROTS
     * const gA_ANKETA_OBOROTS = await prisma.gA_ANKETA_OBOROT.findMany()
     * 
     * // Get first 10 GA_ANKETA_OBOROTS
     * const gA_ANKETA_OBOROTS = await prisma.gA_ANKETA_OBOROT.findMany({ take: 10 })
     * 
     * // Only select the `ABO_ABA_ID`
     * const gA_ANKETA_OBOROTWithABO_ABA_IDOnly = await prisma.gA_ANKETA_OBOROT.findMany({ select: { ABO_ABA_ID: true } })
     * 
    **/
    findMany<T extends GA_ANKETA_OBOROTFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_OBOROTFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GA_ANKETA_OBOROTPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GA_ANKETA_OBOROT.
     * @param {GA_ANKETA_OBOROTCreateArgs} args - Arguments to create a GA_ANKETA_OBOROT.
     * @example
     * // Create one GA_ANKETA_OBOROT
     * const GA_ANKETA_OBOROT = await prisma.gA_ANKETA_OBOROT.create({
     *   data: {
     *     // ... data to create a GA_ANKETA_OBOROT
     *   }
     * })
     * 
    **/
    create<T extends GA_ANKETA_OBOROTCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_OBOROTCreateArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_OBOROTClient<$Result.GetResult<Prisma.$GA_ANKETA_OBOROTPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GA_ANKETA_OBOROTS.
     *     @param {GA_ANKETA_OBOROTCreateManyArgs} args - Arguments to create many GA_ANKETA_OBOROTS.
     *     @example
     *     // Create many GA_ANKETA_OBOROTS
     *     const gA_ANKETA_OBOROT = await prisma.gA_ANKETA_OBOROT.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GA_ANKETA_OBOROTCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_OBOROTCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GA_ANKETA_OBOROT.
     * @param {GA_ANKETA_OBOROTDeleteArgs} args - Arguments to delete one GA_ANKETA_OBOROT.
     * @example
     * // Delete one GA_ANKETA_OBOROT
     * const GA_ANKETA_OBOROT = await prisma.gA_ANKETA_OBOROT.delete({
     *   where: {
     *     // ... filter to delete one GA_ANKETA_OBOROT
     *   }
     * })
     * 
    **/
    delete<T extends GA_ANKETA_OBOROTDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_OBOROTDeleteArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_OBOROTClient<$Result.GetResult<Prisma.$GA_ANKETA_OBOROTPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GA_ANKETA_OBOROT.
     * @param {GA_ANKETA_OBOROTUpdateArgs} args - Arguments to update one GA_ANKETA_OBOROT.
     * @example
     * // Update one GA_ANKETA_OBOROT
     * const gA_ANKETA_OBOROT = await prisma.gA_ANKETA_OBOROT.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GA_ANKETA_OBOROTUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_OBOROTUpdateArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_OBOROTClient<$Result.GetResult<Prisma.$GA_ANKETA_OBOROTPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GA_ANKETA_OBOROTS.
     * @param {GA_ANKETA_OBOROTDeleteManyArgs} args - Arguments to filter GA_ANKETA_OBOROTS to delete.
     * @example
     * // Delete a few GA_ANKETA_OBOROTS
     * const { count } = await prisma.gA_ANKETA_OBOROT.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GA_ANKETA_OBOROTDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_OBOROTDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GA_ANKETA_OBOROTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_OBOROTUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GA_ANKETA_OBOROTS
     * const gA_ANKETA_OBOROT = await prisma.gA_ANKETA_OBOROT.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GA_ANKETA_OBOROTUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_OBOROTUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GA_ANKETA_OBOROT.
     * @param {GA_ANKETA_OBOROTUpsertArgs} args - Arguments to update or create a GA_ANKETA_OBOROT.
     * @example
     * // Update or create a GA_ANKETA_OBOROT
     * const gA_ANKETA_OBOROT = await prisma.gA_ANKETA_OBOROT.upsert({
     *   create: {
     *     // ... data to create a GA_ANKETA_OBOROT
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GA_ANKETA_OBOROT we want to update
     *   }
     * })
    **/
    upsert<T extends GA_ANKETA_OBOROTUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_OBOROTUpsertArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_OBOROTClient<$Result.GetResult<Prisma.$GA_ANKETA_OBOROTPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of GA_ANKETA_OBOROTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_OBOROTCountArgs} args - Arguments to filter GA_ANKETA_OBOROTS to count.
     * @example
     * // Count the number of GA_ANKETA_OBOROTS
     * const count = await prisma.gA_ANKETA_OBOROT.count({
     *   where: {
     *     // ... the filter for the GA_ANKETA_OBOROTS we want to count
     *   }
     * })
    **/
    count<T extends GA_ANKETA_OBOROTCountArgs>(
      args?: Subset<T, GA_ANKETA_OBOROTCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GA_ANKETA_OBOROTCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GA_ANKETA_OBOROT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_OBOROTAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GA_ANKETA_OBOROTAggregateArgs>(args: Subset<T, GA_ANKETA_OBOROTAggregateArgs>): Prisma.PrismaPromise<GetGA_ANKETA_OBOROTAggregateType<T>>

    /**
     * Group by GA_ANKETA_OBOROT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_OBOROTGroupByArgs} args - Group by arguments.
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
      T extends GA_ANKETA_OBOROTGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GA_ANKETA_OBOROTGroupByArgs['orderBy'] }
        : { orderBy?: GA_ANKETA_OBOROTGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GA_ANKETA_OBOROTGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGA_ANKETA_OBOROTGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GA_ANKETA_OBOROT model
   */
  readonly fields: GA_ANKETA_OBOROTFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GA_ANKETA_OBOROT.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GA_ANKETA_OBOROTClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


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
   * Fields of the GA_ANKETA_OBOROT model
   */ 
  interface GA_ANKETA_OBOROTFieldRefs {
    readonly ABO_ABA_ID: FieldRef<"GA_ANKETA_OBOROT", 'BigInt'>
    readonly ABO_DATETIME: FieldRef<"GA_ANKETA_OBOROT", 'DateTime'>
    readonly ABO_OBOROT_ALL: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
    readonly ABO_OBOROT_BRANDS_MONTH: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
    readonly ABO_OBOROT_AE: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
    readonly ABO_OBOROT_ROSSKO: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
    readonly ABO_OBOROT_ARKONA: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
    readonly ABO_OBOROT_AUTORUS: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
    readonly ABO_SCORES_MONTH_PLAN: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
    readonly ABO_SCORES_MONTH_FAKT: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
    readonly ABO_COUNT_ROSSKO: FieldRef<"GA_ANKETA_OBOROT", 'Int'>
    readonly ABO_COUNT_AE: FieldRef<"GA_ANKETA_OBOROT", 'Int'>
    readonly ABO_COUNT_ARKONA: FieldRef<"GA_ANKETA_OBOROT", 'Int'>
    readonly ABO_COUNT_AUTORUS: FieldRef<"GA_ANKETA_OBOROT", 'Int'>
    readonly ABO_OBOROT_BRANDS: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
    readonly ABO_OBOROT_BRAND_LOOK1: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
    readonly ABO_SCORES: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
    readonly ABO_OBOROT_BRAND_LOOK2: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
    readonly ABO_OBOROT_BRAND_LOOK2_ROSSKO: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
    readonly ABO_OBOROT_BRAND_LOOK2_AE: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
    readonly ABO_OBOROT_BRAND_LOOK2_ARKONA: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
    readonly ABO_OBOROT_BRAND_LOOK2_AUTORUS: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
    readonly ABO_OBOROT_BRANDS_MONTH_ROSSKO: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
    readonly ABO_OBOROT_BRANDS_MONTH_AE: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
    readonly ABO_OBOROT_BRANDS_MONTH_ARKONA: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
    readonly ABO_OBOROT_BRANDS_MONTH_AUTORUS: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
    readonly ABO_OBOROT_BRAND1: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
    readonly ABO_OBOROT_BRAND2: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
    readonly ABO_OBOROT_BRAND3: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
    readonly ABO_OBOROT_BRAND4: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
    readonly ABO_OBOROT_BRAND5: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
    readonly ABO_OBOROT_BRAND6: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
    readonly ABO_OBOROT_NEXT: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
    readonly ABO_SCORES_MONTH_PLAN_NEXT: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
    readonly ABO_ABA_REMZONA_QTY: FieldRef<"GA_ANKETA_OBOROT", 'Int'>
    readonly ABO_OBOROT_PARTRA: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
    readonly ABO_SCORES_PARTRA: FieldRef<"GA_ANKETA_OBOROT", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * GA_ANKETA_OBOROT findUnique
   */
  export type GA_ANKETA_OBOROTFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_OBOROT
     */
    select?: GA_ANKETA_OBOROTSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_OBOROT to fetch.
     */
    where: GA_ANKETA_OBOROTWhereUniqueInput
  }


  /**
   * GA_ANKETA_OBOROT findUniqueOrThrow
   */
  export type GA_ANKETA_OBOROTFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_OBOROT
     */
    select?: GA_ANKETA_OBOROTSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_OBOROT to fetch.
     */
    where: GA_ANKETA_OBOROTWhereUniqueInput
  }


  /**
   * GA_ANKETA_OBOROT findFirst
   */
  export type GA_ANKETA_OBOROTFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_OBOROT
     */
    select?: GA_ANKETA_OBOROTSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_OBOROT to fetch.
     */
    where?: GA_ANKETA_OBOROTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_OBOROTS to fetch.
     */
    orderBy?: GA_ANKETA_OBOROTOrderByWithRelationInput | GA_ANKETA_OBOROTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GA_ANKETA_OBOROTS.
     */
    cursor?: GA_ANKETA_OBOROTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_OBOROTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_OBOROTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GA_ANKETA_OBOROTS.
     */
    distinct?: GA_ANKETA_OBOROTScalarFieldEnum | GA_ANKETA_OBOROTScalarFieldEnum[]
  }


  /**
   * GA_ANKETA_OBOROT findFirstOrThrow
   */
  export type GA_ANKETA_OBOROTFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_OBOROT
     */
    select?: GA_ANKETA_OBOROTSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_OBOROT to fetch.
     */
    where?: GA_ANKETA_OBOROTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_OBOROTS to fetch.
     */
    orderBy?: GA_ANKETA_OBOROTOrderByWithRelationInput | GA_ANKETA_OBOROTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GA_ANKETA_OBOROTS.
     */
    cursor?: GA_ANKETA_OBOROTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_OBOROTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_OBOROTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GA_ANKETA_OBOROTS.
     */
    distinct?: GA_ANKETA_OBOROTScalarFieldEnum | GA_ANKETA_OBOROTScalarFieldEnum[]
  }


  /**
   * GA_ANKETA_OBOROT findMany
   */
  export type GA_ANKETA_OBOROTFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_OBOROT
     */
    select?: GA_ANKETA_OBOROTSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_OBOROTS to fetch.
     */
    where?: GA_ANKETA_OBOROTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_OBOROTS to fetch.
     */
    orderBy?: GA_ANKETA_OBOROTOrderByWithRelationInput | GA_ANKETA_OBOROTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GA_ANKETA_OBOROTS.
     */
    cursor?: GA_ANKETA_OBOROTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_OBOROTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_OBOROTS.
     */
    skip?: number
    distinct?: GA_ANKETA_OBOROTScalarFieldEnum | GA_ANKETA_OBOROTScalarFieldEnum[]
  }


  /**
   * GA_ANKETA_OBOROT create
   */
  export type GA_ANKETA_OBOROTCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_OBOROT
     */
    select?: GA_ANKETA_OBOROTSelect<ExtArgs> | null
    /**
     * The data needed to create a GA_ANKETA_OBOROT.
     */
    data: XOR<GA_ANKETA_OBOROTCreateInput, GA_ANKETA_OBOROTUncheckedCreateInput>
  }


  /**
   * GA_ANKETA_OBOROT createMany
   */
  export type GA_ANKETA_OBOROTCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GA_ANKETA_OBOROTS.
     */
    data: GA_ANKETA_OBOROTCreateManyInput | GA_ANKETA_OBOROTCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * GA_ANKETA_OBOROT update
   */
  export type GA_ANKETA_OBOROTUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_OBOROT
     */
    select?: GA_ANKETA_OBOROTSelect<ExtArgs> | null
    /**
     * The data needed to update a GA_ANKETA_OBOROT.
     */
    data: XOR<GA_ANKETA_OBOROTUpdateInput, GA_ANKETA_OBOROTUncheckedUpdateInput>
    /**
     * Choose, which GA_ANKETA_OBOROT to update.
     */
    where: GA_ANKETA_OBOROTWhereUniqueInput
  }


  /**
   * GA_ANKETA_OBOROT updateMany
   */
  export type GA_ANKETA_OBOROTUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GA_ANKETA_OBOROTS.
     */
    data: XOR<GA_ANKETA_OBOROTUpdateManyMutationInput, GA_ANKETA_OBOROTUncheckedUpdateManyInput>
    /**
     * Filter which GA_ANKETA_OBOROTS to update
     */
    where?: GA_ANKETA_OBOROTWhereInput
  }


  /**
   * GA_ANKETA_OBOROT upsert
   */
  export type GA_ANKETA_OBOROTUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_OBOROT
     */
    select?: GA_ANKETA_OBOROTSelect<ExtArgs> | null
    /**
     * The filter to search for the GA_ANKETA_OBOROT to update in case it exists.
     */
    where: GA_ANKETA_OBOROTWhereUniqueInput
    /**
     * In case the GA_ANKETA_OBOROT found by the `where` argument doesn't exist, create a new GA_ANKETA_OBOROT with this data.
     */
    create: XOR<GA_ANKETA_OBOROTCreateInput, GA_ANKETA_OBOROTUncheckedCreateInput>
    /**
     * In case the GA_ANKETA_OBOROT was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GA_ANKETA_OBOROTUpdateInput, GA_ANKETA_OBOROTUncheckedUpdateInput>
  }


  /**
   * GA_ANKETA_OBOROT delete
   */
  export type GA_ANKETA_OBOROTDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_OBOROT
     */
    select?: GA_ANKETA_OBOROTSelect<ExtArgs> | null
    /**
     * Filter which GA_ANKETA_OBOROT to delete.
     */
    where: GA_ANKETA_OBOROTWhereUniqueInput
  }


  /**
   * GA_ANKETA_OBOROT deleteMany
   */
  export type GA_ANKETA_OBOROTDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GA_ANKETA_OBOROTS to delete
     */
    where?: GA_ANKETA_OBOROTWhereInput
  }


  /**
   * GA_ANKETA_OBOROT without action
   */
  export type GA_ANKETA_OBOROTDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_OBOROT
     */
    select?: GA_ANKETA_OBOROTSelect<ExtArgs> | null
  }



  /**
   * Model GA_WS_USERS
   */

  export type AggregateGA_WS_USERS = {
    _count: GA_WS_USERSCountAggregateOutputType | null
    _avg: GA_WS_USERSAvgAggregateOutputType | null
    _sum: GA_WS_USERSSumAggregateOutputType | null
    _min: GA_WS_USERSMinAggregateOutputType | null
    _max: GA_WS_USERSMaxAggregateOutputType | null
  }

  export type GA_WS_USERSAvgAggregateOutputType = {
    WSU_ID: number | null
    WSU_WSO_ID: number | null
    WSU_ID_IN_DS: number | null
    WSU_PRICE_TYPE: number | null
    WSU_GRP_ID: number | null
    WSU_WS_ID: number | null
  }

  export type GA_WS_USERSSumAggregateOutputType = {
    WSU_ID: bigint | null
    WSU_WSO_ID: number | null
    WSU_ID_IN_DS: number | null
    WSU_PRICE_TYPE: number | null
    WSU_GRP_ID: number | null
    WSU_WS_ID: number | null
  }

  export type GA_WS_USERSMinAggregateOutputType = {
    WSU_ID: bigint | null
    WSU_WSO_ID: number | null
    WSU_EMAIL: string | null
    WSU_NAME: string | null
    WSU_FULL_NAME: string | null
    WSU_PHONE: string | null
    WSU_ADDRESS: string | null
    WSU_PASSWD: string | null
    WSU_ID_IN_DS: number | null
    WSU_INN: string | null
    WSU_PRICE_TYPE: number | null
    WSU_GRP_ID: number | null
    WSU_WS_ID: number | null
    WSU_MOBILE: string | null
    WSU_SHOW_SUP_ALIAS: boolean | null
    WSU_IS_ZS: boolean | null
    WSU_PASSWD_ENC: string | null
    WSU_LOGIN_ENC: string | null
    WSU_DATETIME_LAST_LOGIN: Date | null
    WSU_START_PAGE: string | null
    WSU_SALT: string | null
    WSU_TEMP_TICKET: string | null
    WSU_TEMP_TICKET_DATETIME: Date | null
    WSU_DATETIME_CREATE: Date | null
  }

  export type GA_WS_USERSMaxAggregateOutputType = {
    WSU_ID: bigint | null
    WSU_WSO_ID: number | null
    WSU_EMAIL: string | null
    WSU_NAME: string | null
    WSU_FULL_NAME: string | null
    WSU_PHONE: string | null
    WSU_ADDRESS: string | null
    WSU_PASSWD: string | null
    WSU_ID_IN_DS: number | null
    WSU_INN: string | null
    WSU_PRICE_TYPE: number | null
    WSU_GRP_ID: number | null
    WSU_WS_ID: number | null
    WSU_MOBILE: string | null
    WSU_SHOW_SUP_ALIAS: boolean | null
    WSU_IS_ZS: boolean | null
    WSU_PASSWD_ENC: string | null
    WSU_LOGIN_ENC: string | null
    WSU_DATETIME_LAST_LOGIN: Date | null
    WSU_START_PAGE: string | null
    WSU_SALT: string | null
    WSU_TEMP_TICKET: string | null
    WSU_TEMP_TICKET_DATETIME: Date | null
    WSU_DATETIME_CREATE: Date | null
  }

  export type GA_WS_USERSCountAggregateOutputType = {
    WSU_ID: number
    WSU_WSO_ID: number
    WSU_EMAIL: number
    WSU_NAME: number
    WSU_FULL_NAME: number
    WSU_PHONE: number
    WSU_ADDRESS: number
    WSU_PASSWD: number
    WSU_ID_IN_DS: number
    WSU_INN: number
    WSU_PRICE_TYPE: number
    WSU_GRP_ID: number
    WSU_WS_ID: number
    WSU_MOBILE: number
    WSU_SHOW_SUP_ALIAS: number
    WSU_IS_ZS: number
    WSU_PASSWD_ENC: number
    WSU_LOGIN_ENC: number
    WSU_DATETIME_LAST_LOGIN: number
    WSU_START_PAGE: number
    WSU_SALT: number
    WSU_TEMP_TICKET: number
    WSU_TEMP_TICKET_DATETIME: number
    WSU_DATETIME_CREATE: number
    _all: number
  }


  export type GA_WS_USERSAvgAggregateInputType = {
    WSU_ID?: true
    WSU_WSO_ID?: true
    WSU_ID_IN_DS?: true
    WSU_PRICE_TYPE?: true
    WSU_GRP_ID?: true
    WSU_WS_ID?: true
  }

  export type GA_WS_USERSSumAggregateInputType = {
    WSU_ID?: true
    WSU_WSO_ID?: true
    WSU_ID_IN_DS?: true
    WSU_PRICE_TYPE?: true
    WSU_GRP_ID?: true
    WSU_WS_ID?: true
  }

  export type GA_WS_USERSMinAggregateInputType = {
    WSU_ID?: true
    WSU_WSO_ID?: true
    WSU_EMAIL?: true
    WSU_NAME?: true
    WSU_FULL_NAME?: true
    WSU_PHONE?: true
    WSU_ADDRESS?: true
    WSU_PASSWD?: true
    WSU_ID_IN_DS?: true
    WSU_INN?: true
    WSU_PRICE_TYPE?: true
    WSU_GRP_ID?: true
    WSU_WS_ID?: true
    WSU_MOBILE?: true
    WSU_SHOW_SUP_ALIAS?: true
    WSU_IS_ZS?: true
    WSU_PASSWD_ENC?: true
    WSU_LOGIN_ENC?: true
    WSU_DATETIME_LAST_LOGIN?: true
    WSU_START_PAGE?: true
    WSU_SALT?: true
    WSU_TEMP_TICKET?: true
    WSU_TEMP_TICKET_DATETIME?: true
    WSU_DATETIME_CREATE?: true
  }

  export type GA_WS_USERSMaxAggregateInputType = {
    WSU_ID?: true
    WSU_WSO_ID?: true
    WSU_EMAIL?: true
    WSU_NAME?: true
    WSU_FULL_NAME?: true
    WSU_PHONE?: true
    WSU_ADDRESS?: true
    WSU_PASSWD?: true
    WSU_ID_IN_DS?: true
    WSU_INN?: true
    WSU_PRICE_TYPE?: true
    WSU_GRP_ID?: true
    WSU_WS_ID?: true
    WSU_MOBILE?: true
    WSU_SHOW_SUP_ALIAS?: true
    WSU_IS_ZS?: true
    WSU_PASSWD_ENC?: true
    WSU_LOGIN_ENC?: true
    WSU_DATETIME_LAST_LOGIN?: true
    WSU_START_PAGE?: true
    WSU_SALT?: true
    WSU_TEMP_TICKET?: true
    WSU_TEMP_TICKET_DATETIME?: true
    WSU_DATETIME_CREATE?: true
  }

  export type GA_WS_USERSCountAggregateInputType = {
    WSU_ID?: true
    WSU_WSO_ID?: true
    WSU_EMAIL?: true
    WSU_NAME?: true
    WSU_FULL_NAME?: true
    WSU_PHONE?: true
    WSU_ADDRESS?: true
    WSU_PASSWD?: true
    WSU_ID_IN_DS?: true
    WSU_INN?: true
    WSU_PRICE_TYPE?: true
    WSU_GRP_ID?: true
    WSU_WS_ID?: true
    WSU_MOBILE?: true
    WSU_SHOW_SUP_ALIAS?: true
    WSU_IS_ZS?: true
    WSU_PASSWD_ENC?: true
    WSU_LOGIN_ENC?: true
    WSU_DATETIME_LAST_LOGIN?: true
    WSU_START_PAGE?: true
    WSU_SALT?: true
    WSU_TEMP_TICKET?: true
    WSU_TEMP_TICKET_DATETIME?: true
    WSU_DATETIME_CREATE?: true
    _all?: true
  }

  export type GA_WS_USERSAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GA_WS_USERS to aggregate.
     */
    where?: GA_WS_USERSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_WS_USERS to fetch.
     */
    orderBy?: GA_WS_USERSOrderByWithRelationInput | GA_WS_USERSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GA_WS_USERSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_WS_USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_WS_USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GA_WS_USERS
    **/
    _count?: true | GA_WS_USERSCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GA_WS_USERSAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GA_WS_USERSSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GA_WS_USERSMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GA_WS_USERSMaxAggregateInputType
  }

  export type GetGA_WS_USERSAggregateType<T extends GA_WS_USERSAggregateArgs> = {
        [P in keyof T & keyof AggregateGA_WS_USERS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGA_WS_USERS[P]>
      : GetScalarType<T[P], AggregateGA_WS_USERS[P]>
  }




  export type GA_WS_USERSGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GA_WS_USERSWhereInput
    orderBy?: GA_WS_USERSOrderByWithAggregationInput | GA_WS_USERSOrderByWithAggregationInput[]
    by: GA_WS_USERSScalarFieldEnum[] | GA_WS_USERSScalarFieldEnum
    having?: GA_WS_USERSScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GA_WS_USERSCountAggregateInputType | true
    _avg?: GA_WS_USERSAvgAggregateInputType
    _sum?: GA_WS_USERSSumAggregateInputType
    _min?: GA_WS_USERSMinAggregateInputType
    _max?: GA_WS_USERSMaxAggregateInputType
  }

  export type GA_WS_USERSGroupByOutputType = {
    WSU_ID: bigint
    WSU_WSO_ID: number | null
    WSU_EMAIL: string | null
    WSU_NAME: string | null
    WSU_FULL_NAME: string | null
    WSU_PHONE: string | null
    WSU_ADDRESS: string | null
    WSU_PASSWD: string | null
    WSU_ID_IN_DS: number | null
    WSU_INN: string | null
    WSU_PRICE_TYPE: number | null
    WSU_GRP_ID: number | null
    WSU_WS_ID: number | null
    WSU_MOBILE: string | null
    WSU_SHOW_SUP_ALIAS: boolean | null
    WSU_IS_ZS: boolean | null
    WSU_PASSWD_ENC: string | null
    WSU_LOGIN_ENC: string | null
    WSU_DATETIME_LAST_LOGIN: Date | null
    WSU_START_PAGE: string | null
    WSU_SALT: string | null
    WSU_TEMP_TICKET: string | null
    WSU_TEMP_TICKET_DATETIME: Date | null
    WSU_DATETIME_CREATE: Date | null
    _count: GA_WS_USERSCountAggregateOutputType | null
    _avg: GA_WS_USERSAvgAggregateOutputType | null
    _sum: GA_WS_USERSSumAggregateOutputType | null
    _min: GA_WS_USERSMinAggregateOutputType | null
    _max: GA_WS_USERSMaxAggregateOutputType | null
  }

  type GetGA_WS_USERSGroupByPayload<T extends GA_WS_USERSGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GA_WS_USERSGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GA_WS_USERSGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GA_WS_USERSGroupByOutputType[P]>
            : GetScalarType<T[P], GA_WS_USERSGroupByOutputType[P]>
        }
      >
    >


  export type GA_WS_USERSSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    WSU_ID?: boolean
    WSU_WSO_ID?: boolean
    WSU_EMAIL?: boolean
    WSU_NAME?: boolean
    WSU_FULL_NAME?: boolean
    WSU_PHONE?: boolean
    WSU_ADDRESS?: boolean
    WSU_PASSWD?: boolean
    WSU_ID_IN_DS?: boolean
    WSU_INN?: boolean
    WSU_PRICE_TYPE?: boolean
    WSU_GRP_ID?: boolean
    WSU_WS_ID?: boolean
    WSU_MOBILE?: boolean
    WSU_SHOW_SUP_ALIAS?: boolean
    WSU_IS_ZS?: boolean
    WSU_PASSWD_ENC?: boolean
    WSU_LOGIN_ENC?: boolean
    WSU_DATETIME_LAST_LOGIN?: boolean
    WSU_START_PAGE?: boolean
    WSU_SALT?: boolean
    WSU_TEMP_TICKET?: boolean
    WSU_TEMP_TICKET_DATETIME?: boolean
    WSU_DATETIME_CREATE?: boolean
  }, ExtArgs["result"]["gA_WS_USERS"]>

  export type GA_WS_USERSSelectScalar = {
    WSU_ID?: boolean
    WSU_WSO_ID?: boolean
    WSU_EMAIL?: boolean
    WSU_NAME?: boolean
    WSU_FULL_NAME?: boolean
    WSU_PHONE?: boolean
    WSU_ADDRESS?: boolean
    WSU_PASSWD?: boolean
    WSU_ID_IN_DS?: boolean
    WSU_INN?: boolean
    WSU_PRICE_TYPE?: boolean
    WSU_GRP_ID?: boolean
    WSU_WS_ID?: boolean
    WSU_MOBILE?: boolean
    WSU_SHOW_SUP_ALIAS?: boolean
    WSU_IS_ZS?: boolean
    WSU_PASSWD_ENC?: boolean
    WSU_LOGIN_ENC?: boolean
    WSU_DATETIME_LAST_LOGIN?: boolean
    WSU_START_PAGE?: boolean
    WSU_SALT?: boolean
    WSU_TEMP_TICKET?: boolean
    WSU_TEMP_TICKET_DATETIME?: boolean
    WSU_DATETIME_CREATE?: boolean
  }


  export type $GA_WS_USERSPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GA_WS_USERS"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      WSU_ID: bigint
      WSU_WSO_ID: number | null
      WSU_EMAIL: string | null
      WSU_NAME: string | null
      WSU_FULL_NAME: string | null
      WSU_PHONE: string | null
      WSU_ADDRESS: string | null
      WSU_PASSWD: string | null
      WSU_ID_IN_DS: number | null
      WSU_INN: string | null
      WSU_PRICE_TYPE: number | null
      WSU_GRP_ID: number | null
      WSU_WS_ID: number | null
      WSU_MOBILE: string | null
      WSU_SHOW_SUP_ALIAS: boolean | null
      WSU_IS_ZS: boolean | null
      WSU_PASSWD_ENC: string | null
      WSU_LOGIN_ENC: string | null
      WSU_DATETIME_LAST_LOGIN: Date | null
      WSU_START_PAGE: string | null
      WSU_SALT: string | null
      WSU_TEMP_TICKET: string | null
      WSU_TEMP_TICKET_DATETIME: Date | null
      WSU_DATETIME_CREATE: Date | null
    }, ExtArgs["result"]["gA_WS_USERS"]>
    composites: {}
  }


  type GA_WS_USERSGetPayload<S extends boolean | null | undefined | GA_WS_USERSDefaultArgs> = $Result.GetResult<Prisma.$GA_WS_USERSPayload, S>

  type GA_WS_USERSCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GA_WS_USERSFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GA_WS_USERSCountAggregateInputType | true
    }

  export interface GA_WS_USERSDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GA_WS_USERS'], meta: { name: 'GA_WS_USERS' } }
    /**
     * Find zero or one GA_WS_USERS that matches the filter.
     * @param {GA_WS_USERSFindUniqueArgs} args - Arguments to find a GA_WS_USERS
     * @example
     * // Get one GA_WS_USERS
     * const gA_WS_USERS = await prisma.gA_WS_USERS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GA_WS_USERSFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GA_WS_USERSFindUniqueArgs<ExtArgs>>
    ): Prisma__GA_WS_USERSClient<$Result.GetResult<Prisma.$GA_WS_USERSPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GA_WS_USERS that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GA_WS_USERSFindUniqueOrThrowArgs} args - Arguments to find a GA_WS_USERS
     * @example
     * // Get one GA_WS_USERS
     * const gA_WS_USERS = await prisma.gA_WS_USERS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GA_WS_USERSFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_WS_USERSFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GA_WS_USERSClient<$Result.GetResult<Prisma.$GA_WS_USERSPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GA_WS_USERS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_WS_USERSFindFirstArgs} args - Arguments to find a GA_WS_USERS
     * @example
     * // Get one GA_WS_USERS
     * const gA_WS_USERS = await prisma.gA_WS_USERS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GA_WS_USERSFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_WS_USERSFindFirstArgs<ExtArgs>>
    ): Prisma__GA_WS_USERSClient<$Result.GetResult<Prisma.$GA_WS_USERSPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GA_WS_USERS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_WS_USERSFindFirstOrThrowArgs} args - Arguments to find a GA_WS_USERS
     * @example
     * // Get one GA_WS_USERS
     * const gA_WS_USERS = await prisma.gA_WS_USERS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GA_WS_USERSFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_WS_USERSFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GA_WS_USERSClient<$Result.GetResult<Prisma.$GA_WS_USERSPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GA_WS_USERS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_WS_USERSFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GA_WS_USERS
     * const gA_WS_USERS = await prisma.gA_WS_USERS.findMany()
     * 
     * // Get first 10 GA_WS_USERS
     * const gA_WS_USERS = await prisma.gA_WS_USERS.findMany({ take: 10 })
     * 
     * // Only select the `WSU_ID`
     * const gA_WS_USERSWithWSU_IDOnly = await prisma.gA_WS_USERS.findMany({ select: { WSU_ID: true } })
     * 
    **/
    findMany<T extends GA_WS_USERSFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_WS_USERSFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GA_WS_USERSPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GA_WS_USERS.
     * @param {GA_WS_USERSCreateArgs} args - Arguments to create a GA_WS_USERS.
     * @example
     * // Create one GA_WS_USERS
     * const GA_WS_USERS = await prisma.gA_WS_USERS.create({
     *   data: {
     *     // ... data to create a GA_WS_USERS
     *   }
     * })
     * 
    **/
    create<T extends GA_WS_USERSCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GA_WS_USERSCreateArgs<ExtArgs>>
    ): Prisma__GA_WS_USERSClient<$Result.GetResult<Prisma.$GA_WS_USERSPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GA_WS_USERS.
     *     @param {GA_WS_USERSCreateManyArgs} args - Arguments to create many GA_WS_USERS.
     *     @example
     *     // Create many GA_WS_USERS
     *     const gA_WS_USERS = await prisma.gA_WS_USERS.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GA_WS_USERSCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_WS_USERSCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GA_WS_USERS.
     * @param {GA_WS_USERSDeleteArgs} args - Arguments to delete one GA_WS_USERS.
     * @example
     * // Delete one GA_WS_USERS
     * const GA_WS_USERS = await prisma.gA_WS_USERS.delete({
     *   where: {
     *     // ... filter to delete one GA_WS_USERS
     *   }
     * })
     * 
    **/
    delete<T extends GA_WS_USERSDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GA_WS_USERSDeleteArgs<ExtArgs>>
    ): Prisma__GA_WS_USERSClient<$Result.GetResult<Prisma.$GA_WS_USERSPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GA_WS_USERS.
     * @param {GA_WS_USERSUpdateArgs} args - Arguments to update one GA_WS_USERS.
     * @example
     * // Update one GA_WS_USERS
     * const gA_WS_USERS = await prisma.gA_WS_USERS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GA_WS_USERSUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GA_WS_USERSUpdateArgs<ExtArgs>>
    ): Prisma__GA_WS_USERSClient<$Result.GetResult<Prisma.$GA_WS_USERSPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GA_WS_USERS.
     * @param {GA_WS_USERSDeleteManyArgs} args - Arguments to filter GA_WS_USERS to delete.
     * @example
     * // Delete a few GA_WS_USERS
     * const { count } = await prisma.gA_WS_USERS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GA_WS_USERSDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_WS_USERSDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GA_WS_USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_WS_USERSUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GA_WS_USERS
     * const gA_WS_USERS = await prisma.gA_WS_USERS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GA_WS_USERSUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GA_WS_USERSUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GA_WS_USERS.
     * @param {GA_WS_USERSUpsertArgs} args - Arguments to update or create a GA_WS_USERS.
     * @example
     * // Update or create a GA_WS_USERS
     * const gA_WS_USERS = await prisma.gA_WS_USERS.upsert({
     *   create: {
     *     // ... data to create a GA_WS_USERS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GA_WS_USERS we want to update
     *   }
     * })
    **/
    upsert<T extends GA_WS_USERSUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GA_WS_USERSUpsertArgs<ExtArgs>>
    ): Prisma__GA_WS_USERSClient<$Result.GetResult<Prisma.$GA_WS_USERSPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of GA_WS_USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_WS_USERSCountArgs} args - Arguments to filter GA_WS_USERS to count.
     * @example
     * // Count the number of GA_WS_USERS
     * const count = await prisma.gA_WS_USERS.count({
     *   where: {
     *     // ... the filter for the GA_WS_USERS we want to count
     *   }
     * })
    **/
    count<T extends GA_WS_USERSCountArgs>(
      args?: Subset<T, GA_WS_USERSCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GA_WS_USERSCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GA_WS_USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_WS_USERSAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GA_WS_USERSAggregateArgs>(args: Subset<T, GA_WS_USERSAggregateArgs>): Prisma.PrismaPromise<GetGA_WS_USERSAggregateType<T>>

    /**
     * Group by GA_WS_USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_WS_USERSGroupByArgs} args - Group by arguments.
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
      T extends GA_WS_USERSGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GA_WS_USERSGroupByArgs['orderBy'] }
        : { orderBy?: GA_WS_USERSGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GA_WS_USERSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGA_WS_USERSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GA_WS_USERS model
   */
  readonly fields: GA_WS_USERSFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GA_WS_USERS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GA_WS_USERSClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


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
   * Fields of the GA_WS_USERS model
   */ 
  interface GA_WS_USERSFieldRefs {
    readonly WSU_ID: FieldRef<"GA_WS_USERS", 'BigInt'>
    readonly WSU_WSO_ID: FieldRef<"GA_WS_USERS", 'Int'>
    readonly WSU_EMAIL: FieldRef<"GA_WS_USERS", 'String'>
    readonly WSU_NAME: FieldRef<"GA_WS_USERS", 'String'>
    readonly WSU_FULL_NAME: FieldRef<"GA_WS_USERS", 'String'>
    readonly WSU_PHONE: FieldRef<"GA_WS_USERS", 'String'>
    readonly WSU_ADDRESS: FieldRef<"GA_WS_USERS", 'String'>
    readonly WSU_PASSWD: FieldRef<"GA_WS_USERS", 'String'>
    readonly WSU_ID_IN_DS: FieldRef<"GA_WS_USERS", 'Int'>
    readonly WSU_INN: FieldRef<"GA_WS_USERS", 'String'>
    readonly WSU_PRICE_TYPE: FieldRef<"GA_WS_USERS", 'Int'>
    readonly WSU_GRP_ID: FieldRef<"GA_WS_USERS", 'Int'>
    readonly WSU_WS_ID: FieldRef<"GA_WS_USERS", 'Int'>
    readonly WSU_MOBILE: FieldRef<"GA_WS_USERS", 'String'>
    readonly WSU_SHOW_SUP_ALIAS: FieldRef<"GA_WS_USERS", 'Boolean'>
    readonly WSU_IS_ZS: FieldRef<"GA_WS_USERS", 'Boolean'>
    readonly WSU_PASSWD_ENC: FieldRef<"GA_WS_USERS", 'String'>
    readonly WSU_LOGIN_ENC: FieldRef<"GA_WS_USERS", 'String'>
    readonly WSU_DATETIME_LAST_LOGIN: FieldRef<"GA_WS_USERS", 'DateTime'>
    readonly WSU_START_PAGE: FieldRef<"GA_WS_USERS", 'String'>
    readonly WSU_SALT: FieldRef<"GA_WS_USERS", 'String'>
    readonly WSU_TEMP_TICKET: FieldRef<"GA_WS_USERS", 'String'>
    readonly WSU_TEMP_TICKET_DATETIME: FieldRef<"GA_WS_USERS", 'DateTime'>
    readonly WSU_DATETIME_CREATE: FieldRef<"GA_WS_USERS", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * GA_WS_USERS findUnique
   */
  export type GA_WS_USERSFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_WS_USERS
     */
    select?: GA_WS_USERSSelect<ExtArgs> | null
    /**
     * Filter, which GA_WS_USERS to fetch.
     */
    where: GA_WS_USERSWhereUniqueInput
  }


  /**
   * GA_WS_USERS findUniqueOrThrow
   */
  export type GA_WS_USERSFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_WS_USERS
     */
    select?: GA_WS_USERSSelect<ExtArgs> | null
    /**
     * Filter, which GA_WS_USERS to fetch.
     */
    where: GA_WS_USERSWhereUniqueInput
  }


  /**
   * GA_WS_USERS findFirst
   */
  export type GA_WS_USERSFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_WS_USERS
     */
    select?: GA_WS_USERSSelect<ExtArgs> | null
    /**
     * Filter, which GA_WS_USERS to fetch.
     */
    where?: GA_WS_USERSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_WS_USERS to fetch.
     */
    orderBy?: GA_WS_USERSOrderByWithRelationInput | GA_WS_USERSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GA_WS_USERS.
     */
    cursor?: GA_WS_USERSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_WS_USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_WS_USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GA_WS_USERS.
     */
    distinct?: GA_WS_USERSScalarFieldEnum | GA_WS_USERSScalarFieldEnum[]
  }


  /**
   * GA_WS_USERS findFirstOrThrow
   */
  export type GA_WS_USERSFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_WS_USERS
     */
    select?: GA_WS_USERSSelect<ExtArgs> | null
    /**
     * Filter, which GA_WS_USERS to fetch.
     */
    where?: GA_WS_USERSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_WS_USERS to fetch.
     */
    orderBy?: GA_WS_USERSOrderByWithRelationInput | GA_WS_USERSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GA_WS_USERS.
     */
    cursor?: GA_WS_USERSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_WS_USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_WS_USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GA_WS_USERS.
     */
    distinct?: GA_WS_USERSScalarFieldEnum | GA_WS_USERSScalarFieldEnum[]
  }


  /**
   * GA_WS_USERS findMany
   */
  export type GA_WS_USERSFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_WS_USERS
     */
    select?: GA_WS_USERSSelect<ExtArgs> | null
    /**
     * Filter, which GA_WS_USERS to fetch.
     */
    where?: GA_WS_USERSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_WS_USERS to fetch.
     */
    orderBy?: GA_WS_USERSOrderByWithRelationInput | GA_WS_USERSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GA_WS_USERS.
     */
    cursor?: GA_WS_USERSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_WS_USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_WS_USERS.
     */
    skip?: number
    distinct?: GA_WS_USERSScalarFieldEnum | GA_WS_USERSScalarFieldEnum[]
  }


  /**
   * GA_WS_USERS create
   */
  export type GA_WS_USERSCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_WS_USERS
     */
    select?: GA_WS_USERSSelect<ExtArgs> | null
    /**
     * The data needed to create a GA_WS_USERS.
     */
    data: XOR<GA_WS_USERSCreateInput, GA_WS_USERSUncheckedCreateInput>
  }


  /**
   * GA_WS_USERS createMany
   */
  export type GA_WS_USERSCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GA_WS_USERS.
     */
    data: GA_WS_USERSCreateManyInput | GA_WS_USERSCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * GA_WS_USERS update
   */
  export type GA_WS_USERSUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_WS_USERS
     */
    select?: GA_WS_USERSSelect<ExtArgs> | null
    /**
     * The data needed to update a GA_WS_USERS.
     */
    data: XOR<GA_WS_USERSUpdateInput, GA_WS_USERSUncheckedUpdateInput>
    /**
     * Choose, which GA_WS_USERS to update.
     */
    where: GA_WS_USERSWhereUniqueInput
  }


  /**
   * GA_WS_USERS updateMany
   */
  export type GA_WS_USERSUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GA_WS_USERS.
     */
    data: XOR<GA_WS_USERSUpdateManyMutationInput, GA_WS_USERSUncheckedUpdateManyInput>
    /**
     * Filter which GA_WS_USERS to update
     */
    where?: GA_WS_USERSWhereInput
  }


  /**
   * GA_WS_USERS upsert
   */
  export type GA_WS_USERSUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_WS_USERS
     */
    select?: GA_WS_USERSSelect<ExtArgs> | null
    /**
     * The filter to search for the GA_WS_USERS to update in case it exists.
     */
    where: GA_WS_USERSWhereUniqueInput
    /**
     * In case the GA_WS_USERS found by the `where` argument doesn't exist, create a new GA_WS_USERS with this data.
     */
    create: XOR<GA_WS_USERSCreateInput, GA_WS_USERSUncheckedCreateInput>
    /**
     * In case the GA_WS_USERS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GA_WS_USERSUpdateInput, GA_WS_USERSUncheckedUpdateInput>
  }


  /**
   * GA_WS_USERS delete
   */
  export type GA_WS_USERSDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_WS_USERS
     */
    select?: GA_WS_USERSSelect<ExtArgs> | null
    /**
     * Filter which GA_WS_USERS to delete.
     */
    where: GA_WS_USERSWhereUniqueInput
  }


  /**
   * GA_WS_USERS deleteMany
   */
  export type GA_WS_USERSDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GA_WS_USERS to delete
     */
    where?: GA_WS_USERSWhereInput
  }


  /**
   * GA_WS_USERS without action
   */
  export type GA_WS_USERSDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_WS_USERS
     */
    select?: GA_WS_USERSSelect<ExtArgs> | null
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


  export const GA_ANKETA_ADDRScalarFieldEnum: {
    AAD_ABA_ID: 'AAD_ABA_ID',
    AAD_SHIROTA: 'AAD_SHIROTA',
    AAD_DOLGOTA: 'AAD_DOLGOTA',
    AAD_OBLAST: 'AAD_OBLAST',
    AAD_GOROD: 'AAD_GOROD',
    AAD_ADDR: 'AAD_ADDR'
  };

  export type GA_ANKETA_ADDRScalarFieldEnum = (typeof GA_ANKETA_ADDRScalarFieldEnum)[keyof typeof GA_ANKETA_ADDRScalarFieldEnum]


  export const GA_ANKETA_BASEScalarFieldEnum: {
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

  export type GA_ANKETA_BASEScalarFieldEnum = (typeof GA_ANKETA_BASEScalarFieldEnum)[keyof typeof GA_ANKETA_BASEScalarFieldEnum]


  export const GA_ANKETA_DOGOVORScalarFieldEnum: {
    ADO_ABA_ID: 'ADO_ABA_ID',
    ADO_NAME1: 'ADO_NAME1',
    ADO_NAME2: 'ADO_NAME2',
    ADO_NAME3: 'ADO_NAME3',
    ADO_PHONE: 'ADO_PHONE',
    ADO_EMAIL: 'ADO_EMAIL',
    ADO_DATETIME: 'ADO_DATETIME',
    ADO_STATUS: 'ADO_STATUS'
  };

  export type GA_ANKETA_DOGOVORScalarFieldEnum = (typeof GA_ANKETA_DOGOVORScalarFieldEnum)[keyof typeof GA_ANKETA_DOGOVORScalarFieldEnum]


  export const GA_ANKETA_OBOROTScalarFieldEnum: {
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

  export type GA_ANKETA_OBOROTScalarFieldEnum = (typeof GA_ANKETA_OBOROTScalarFieldEnum)[keyof typeof GA_ANKETA_OBOROTScalarFieldEnum]


  export const GA_WS_USERSScalarFieldEnum: {
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

  export type GA_WS_USERSScalarFieldEnum = (typeof GA_WS_USERSScalarFieldEnum)[keyof typeof GA_WS_USERSScalarFieldEnum]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type GA_ANKETA_ADDRWhereInput = {
    AND?: GA_ANKETA_ADDRWhereInput | GA_ANKETA_ADDRWhereInput[]
    OR?: GA_ANKETA_ADDRWhereInput[]
    NOT?: GA_ANKETA_ADDRWhereInput | GA_ANKETA_ADDRWhereInput[]
    AAD_ABA_ID?: BigIntFilter<"GA_ANKETA_ADDR"> | bigint | number
    AAD_SHIROTA?: StringFilter<"GA_ANKETA_ADDR"> | string
    AAD_DOLGOTA?: StringFilter<"GA_ANKETA_ADDR"> | string
    AAD_OBLAST?: StringFilter<"GA_ANKETA_ADDR"> | string
    AAD_GOROD?: StringFilter<"GA_ANKETA_ADDR"> | string
    AAD_ADDR?: StringFilter<"GA_ANKETA_ADDR"> | string
  }

  export type GA_ANKETA_ADDROrderByWithRelationInput = {
    AAD_ABA_ID?: SortOrder
    AAD_SHIROTA?: SortOrder
    AAD_DOLGOTA?: SortOrder
    AAD_OBLAST?: SortOrder
    AAD_GOROD?: SortOrder
    AAD_ADDR?: SortOrder
  }

  export type GA_ANKETA_ADDRWhereUniqueInput = Prisma.AtLeast<{
    AAD_ABA_ID?: bigint | number
    AND?: GA_ANKETA_ADDRWhereInput | GA_ANKETA_ADDRWhereInput[]
    OR?: GA_ANKETA_ADDRWhereInput[]
    NOT?: GA_ANKETA_ADDRWhereInput | GA_ANKETA_ADDRWhereInput[]
    AAD_SHIROTA?: StringFilter<"GA_ANKETA_ADDR"> | string
    AAD_DOLGOTA?: StringFilter<"GA_ANKETA_ADDR"> | string
    AAD_OBLAST?: StringFilter<"GA_ANKETA_ADDR"> | string
    AAD_GOROD?: StringFilter<"GA_ANKETA_ADDR"> | string
    AAD_ADDR?: StringFilter<"GA_ANKETA_ADDR"> | string
  }, "AAD_ABA_ID">

  export type GA_ANKETA_ADDROrderByWithAggregationInput = {
    AAD_ABA_ID?: SortOrder
    AAD_SHIROTA?: SortOrder
    AAD_DOLGOTA?: SortOrder
    AAD_OBLAST?: SortOrder
    AAD_GOROD?: SortOrder
    AAD_ADDR?: SortOrder
    _count?: GA_ANKETA_ADDRCountOrderByAggregateInput
    _avg?: GA_ANKETA_ADDRAvgOrderByAggregateInput
    _max?: GA_ANKETA_ADDRMaxOrderByAggregateInput
    _min?: GA_ANKETA_ADDRMinOrderByAggregateInput
    _sum?: GA_ANKETA_ADDRSumOrderByAggregateInput
  }

  export type GA_ANKETA_ADDRScalarWhereWithAggregatesInput = {
    AND?: GA_ANKETA_ADDRScalarWhereWithAggregatesInput | GA_ANKETA_ADDRScalarWhereWithAggregatesInput[]
    OR?: GA_ANKETA_ADDRScalarWhereWithAggregatesInput[]
    NOT?: GA_ANKETA_ADDRScalarWhereWithAggregatesInput | GA_ANKETA_ADDRScalarWhereWithAggregatesInput[]
    AAD_ABA_ID?: BigIntWithAggregatesFilter<"GA_ANKETA_ADDR"> | bigint | number
    AAD_SHIROTA?: StringWithAggregatesFilter<"GA_ANKETA_ADDR"> | string
    AAD_DOLGOTA?: StringWithAggregatesFilter<"GA_ANKETA_ADDR"> | string
    AAD_OBLAST?: StringWithAggregatesFilter<"GA_ANKETA_ADDR"> | string
    AAD_GOROD?: StringWithAggregatesFilter<"GA_ANKETA_ADDR"> | string
    AAD_ADDR?: StringWithAggregatesFilter<"GA_ANKETA_ADDR"> | string
  }

  export type GA_ANKETA_BASEWhereInput = {
    AND?: GA_ANKETA_BASEWhereInput | GA_ANKETA_BASEWhereInput[]
    OR?: GA_ANKETA_BASEWhereInput[]
    NOT?: GA_ANKETA_BASEWhereInput | GA_ANKETA_BASEWhereInput[]
    ABA_WSU_ID?: BigIntFilter<"GA_ANKETA_BASE"> | bigint | number
    ABA_STO_NAME?: StringFilter<"GA_ANKETA_BASE"> | string
    ABA_STO_ID1?: StringFilter<"GA_ANKETA_BASE"> | string
    ABA_REMZONA_QTY?: IntFilter<"GA_ANKETA_BASE"> | number
    ABA_ENABLED?: BoolFilter<"GA_ANKETA_BASE"> | boolean
    ABA_PHONE?: StringFilter<"GA_ANKETA_BASE"> | string
    ABA_INN?: StringFilter<"GA_ANKETA_BASE"> | string
    ABA_DATETIME_CREATED?: DateTimeFilter<"GA_ANKETA_BASE"> | Date | string
    ABA_DATETIME_UPDATED?: DateTimeFilter<"GA_ANKETA_BASE"> | Date | string
    ABA_ID?: BigIntFilter<"GA_ANKETA_BASE"> | bigint | number
    ABA_DATETIME?: DateTimeFilter<"GA_ANKETA_BASE"> | Date | string
    ABA_STO_ID2?: StringFilter<"GA_ANKETA_BASE"> | string
    ABA_STO_NAME_FIND?: StringNullableFilter<"GA_ANKETA_BASE"> | string | null
    ABA_DESC?: StringNullableFilter<"GA_ANKETA_BASE"> | string | null
  }

  export type GA_ANKETA_BASEOrderByWithRelationInput = {
    ABA_WSU_ID?: SortOrder
    ABA_STO_NAME?: SortOrder
    ABA_STO_ID1?: SortOrder
    ABA_REMZONA_QTY?: SortOrder
    ABA_ENABLED?: SortOrder
    ABA_PHONE?: SortOrder
    ABA_INN?: SortOrder
    ABA_DATETIME_CREATED?: SortOrder
    ABA_DATETIME_UPDATED?: SortOrder
    ABA_ID?: SortOrder
    ABA_DATETIME?: SortOrder
    ABA_STO_ID2?: SortOrder
    ABA_STO_NAME_FIND?: SortOrderInput | SortOrder
    ABA_DESC?: SortOrderInput | SortOrder
  }

  export type GA_ANKETA_BASEWhereUniqueInput = Prisma.AtLeast<{
    ABA_ID?: bigint | number
    AND?: GA_ANKETA_BASEWhereInput | GA_ANKETA_BASEWhereInput[]
    OR?: GA_ANKETA_BASEWhereInput[]
    NOT?: GA_ANKETA_BASEWhereInput | GA_ANKETA_BASEWhereInput[]
    ABA_WSU_ID?: BigIntFilter<"GA_ANKETA_BASE"> | bigint | number
    ABA_STO_NAME?: StringFilter<"GA_ANKETA_BASE"> | string
    ABA_STO_ID1?: StringFilter<"GA_ANKETA_BASE"> | string
    ABA_REMZONA_QTY?: IntFilter<"GA_ANKETA_BASE"> | number
    ABA_ENABLED?: BoolFilter<"GA_ANKETA_BASE"> | boolean
    ABA_PHONE?: StringFilter<"GA_ANKETA_BASE"> | string
    ABA_INN?: StringFilter<"GA_ANKETA_BASE"> | string
    ABA_DATETIME_CREATED?: DateTimeFilter<"GA_ANKETA_BASE"> | Date | string
    ABA_DATETIME_UPDATED?: DateTimeFilter<"GA_ANKETA_BASE"> | Date | string
    ABA_DATETIME?: DateTimeFilter<"GA_ANKETA_BASE"> | Date | string
    ABA_STO_ID2?: StringFilter<"GA_ANKETA_BASE"> | string
    ABA_STO_NAME_FIND?: StringNullableFilter<"GA_ANKETA_BASE"> | string | null
    ABA_DESC?: StringNullableFilter<"GA_ANKETA_BASE"> | string | null
  }, "ABA_ID">

  export type GA_ANKETA_BASEOrderByWithAggregationInput = {
    ABA_WSU_ID?: SortOrder
    ABA_STO_NAME?: SortOrder
    ABA_STO_ID1?: SortOrder
    ABA_REMZONA_QTY?: SortOrder
    ABA_ENABLED?: SortOrder
    ABA_PHONE?: SortOrder
    ABA_INN?: SortOrder
    ABA_DATETIME_CREATED?: SortOrder
    ABA_DATETIME_UPDATED?: SortOrder
    ABA_ID?: SortOrder
    ABA_DATETIME?: SortOrder
    ABA_STO_ID2?: SortOrder
    ABA_STO_NAME_FIND?: SortOrderInput | SortOrder
    ABA_DESC?: SortOrderInput | SortOrder
    _count?: GA_ANKETA_BASECountOrderByAggregateInput
    _avg?: GA_ANKETA_BASEAvgOrderByAggregateInput
    _max?: GA_ANKETA_BASEMaxOrderByAggregateInput
    _min?: GA_ANKETA_BASEMinOrderByAggregateInput
    _sum?: GA_ANKETA_BASESumOrderByAggregateInput
  }

  export type GA_ANKETA_BASEScalarWhereWithAggregatesInput = {
    AND?: GA_ANKETA_BASEScalarWhereWithAggregatesInput | GA_ANKETA_BASEScalarWhereWithAggregatesInput[]
    OR?: GA_ANKETA_BASEScalarWhereWithAggregatesInput[]
    NOT?: GA_ANKETA_BASEScalarWhereWithAggregatesInput | GA_ANKETA_BASEScalarWhereWithAggregatesInput[]
    ABA_WSU_ID?: BigIntWithAggregatesFilter<"GA_ANKETA_BASE"> | bigint | number
    ABA_STO_NAME?: StringWithAggregatesFilter<"GA_ANKETA_BASE"> | string
    ABA_STO_ID1?: StringWithAggregatesFilter<"GA_ANKETA_BASE"> | string
    ABA_REMZONA_QTY?: IntWithAggregatesFilter<"GA_ANKETA_BASE"> | number
    ABA_ENABLED?: BoolWithAggregatesFilter<"GA_ANKETA_BASE"> | boolean
    ABA_PHONE?: StringWithAggregatesFilter<"GA_ANKETA_BASE"> | string
    ABA_INN?: StringWithAggregatesFilter<"GA_ANKETA_BASE"> | string
    ABA_DATETIME_CREATED?: DateTimeWithAggregatesFilter<"GA_ANKETA_BASE"> | Date | string
    ABA_DATETIME_UPDATED?: DateTimeWithAggregatesFilter<"GA_ANKETA_BASE"> | Date | string
    ABA_ID?: BigIntWithAggregatesFilter<"GA_ANKETA_BASE"> | bigint | number
    ABA_DATETIME?: DateTimeWithAggregatesFilter<"GA_ANKETA_BASE"> | Date | string
    ABA_STO_ID2?: StringWithAggregatesFilter<"GA_ANKETA_BASE"> | string
    ABA_STO_NAME_FIND?: StringNullableWithAggregatesFilter<"GA_ANKETA_BASE"> | string | null
    ABA_DESC?: StringNullableWithAggregatesFilter<"GA_ANKETA_BASE"> | string | null
  }

  export type GA_ANKETA_DOGOVORWhereInput = {
    AND?: GA_ANKETA_DOGOVORWhereInput | GA_ANKETA_DOGOVORWhereInput[]
    OR?: GA_ANKETA_DOGOVORWhereInput[]
    NOT?: GA_ANKETA_DOGOVORWhereInput | GA_ANKETA_DOGOVORWhereInput[]
    ADO_ABA_ID?: BigIntFilter<"GA_ANKETA_DOGOVOR"> | bigint | number
    ADO_NAME1?: StringFilter<"GA_ANKETA_DOGOVOR"> | string
    ADO_NAME2?: StringFilter<"GA_ANKETA_DOGOVOR"> | string
    ADO_NAME3?: StringFilter<"GA_ANKETA_DOGOVOR"> | string
    ADO_PHONE?: StringFilter<"GA_ANKETA_DOGOVOR"> | string
    ADO_EMAIL?: StringFilter<"GA_ANKETA_DOGOVOR"> | string
    ADO_DATETIME?: DateTimeFilter<"GA_ANKETA_DOGOVOR"> | Date | string
    ADO_STATUS?: BoolFilter<"GA_ANKETA_DOGOVOR"> | boolean
  }

  export type GA_ANKETA_DOGOVOROrderByWithRelationInput = {
    ADO_ABA_ID?: SortOrder
    ADO_NAME1?: SortOrder
    ADO_NAME2?: SortOrder
    ADO_NAME3?: SortOrder
    ADO_PHONE?: SortOrder
    ADO_EMAIL?: SortOrder
    ADO_DATETIME?: SortOrder
    ADO_STATUS?: SortOrder
  }

  export type GA_ANKETA_DOGOVORWhereUniqueInput = Prisma.AtLeast<{
    ADO_ABA_ID?: bigint | number
    AND?: GA_ANKETA_DOGOVORWhereInput | GA_ANKETA_DOGOVORWhereInput[]
    OR?: GA_ANKETA_DOGOVORWhereInput[]
    NOT?: GA_ANKETA_DOGOVORWhereInput | GA_ANKETA_DOGOVORWhereInput[]
    ADO_NAME1?: StringFilter<"GA_ANKETA_DOGOVOR"> | string
    ADO_NAME2?: StringFilter<"GA_ANKETA_DOGOVOR"> | string
    ADO_NAME3?: StringFilter<"GA_ANKETA_DOGOVOR"> | string
    ADO_PHONE?: StringFilter<"GA_ANKETA_DOGOVOR"> | string
    ADO_EMAIL?: StringFilter<"GA_ANKETA_DOGOVOR"> | string
    ADO_DATETIME?: DateTimeFilter<"GA_ANKETA_DOGOVOR"> | Date | string
    ADO_STATUS?: BoolFilter<"GA_ANKETA_DOGOVOR"> | boolean
  }, "ADO_ABA_ID">

  export type GA_ANKETA_DOGOVOROrderByWithAggregationInput = {
    ADO_ABA_ID?: SortOrder
    ADO_NAME1?: SortOrder
    ADO_NAME2?: SortOrder
    ADO_NAME3?: SortOrder
    ADO_PHONE?: SortOrder
    ADO_EMAIL?: SortOrder
    ADO_DATETIME?: SortOrder
    ADO_STATUS?: SortOrder
    _count?: GA_ANKETA_DOGOVORCountOrderByAggregateInput
    _avg?: GA_ANKETA_DOGOVORAvgOrderByAggregateInput
    _max?: GA_ANKETA_DOGOVORMaxOrderByAggregateInput
    _min?: GA_ANKETA_DOGOVORMinOrderByAggregateInput
    _sum?: GA_ANKETA_DOGOVORSumOrderByAggregateInput
  }

  export type GA_ANKETA_DOGOVORScalarWhereWithAggregatesInput = {
    AND?: GA_ANKETA_DOGOVORScalarWhereWithAggregatesInput | GA_ANKETA_DOGOVORScalarWhereWithAggregatesInput[]
    OR?: GA_ANKETA_DOGOVORScalarWhereWithAggregatesInput[]
    NOT?: GA_ANKETA_DOGOVORScalarWhereWithAggregatesInput | GA_ANKETA_DOGOVORScalarWhereWithAggregatesInput[]
    ADO_ABA_ID?: BigIntWithAggregatesFilter<"GA_ANKETA_DOGOVOR"> | bigint | number
    ADO_NAME1?: StringWithAggregatesFilter<"GA_ANKETA_DOGOVOR"> | string
    ADO_NAME2?: StringWithAggregatesFilter<"GA_ANKETA_DOGOVOR"> | string
    ADO_NAME3?: StringWithAggregatesFilter<"GA_ANKETA_DOGOVOR"> | string
    ADO_PHONE?: StringWithAggregatesFilter<"GA_ANKETA_DOGOVOR"> | string
    ADO_EMAIL?: StringWithAggregatesFilter<"GA_ANKETA_DOGOVOR"> | string
    ADO_DATETIME?: DateTimeWithAggregatesFilter<"GA_ANKETA_DOGOVOR"> | Date | string
    ADO_STATUS?: BoolWithAggregatesFilter<"GA_ANKETA_DOGOVOR"> | boolean
  }

  export type GA_ANKETA_OBOROTWhereInput = {
    AND?: GA_ANKETA_OBOROTWhereInput | GA_ANKETA_OBOROTWhereInput[]
    OR?: GA_ANKETA_OBOROTWhereInput[]
    NOT?: GA_ANKETA_OBOROTWhereInput | GA_ANKETA_OBOROTWhereInput[]
    ABO_ABA_ID?: BigIntFilter<"GA_ANKETA_OBOROT"> | bigint | number
    ABO_DATETIME?: DateTimeFilter<"GA_ANKETA_OBOROT"> | Date | string
    ABO_OBOROT_ALL?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRANDS_MONTH?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_AE?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_ROSSKO?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_ARKONA?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_AUTORUS?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_SCORES_MONTH_PLAN?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_SCORES_MONTH_FAKT?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_COUNT_ROSSKO?: IntFilter<"GA_ANKETA_OBOROT"> | number
    ABO_COUNT_AE?: IntFilter<"GA_ANKETA_OBOROT"> | number
    ABO_COUNT_ARKONA?: IntFilter<"GA_ANKETA_OBOROT"> | number
    ABO_COUNT_AUTORUS?: IntFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRANDS?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND_LOOK1?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_SCORES?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND_LOOK2?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND_LOOK2_AE?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRANDS_MONTH_AE?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND1?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND2?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND3?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND4?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND5?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND6?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_NEXT?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_SCORES_MONTH_PLAN_NEXT?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_ABA_REMZONA_QTY?: IntFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_PARTRA?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_SCORES_PARTRA?: FloatFilter<"GA_ANKETA_OBOROT"> | number
  }

  export type GA_ANKETA_OBOROTOrderByWithRelationInput = {
    ABO_ABA_ID?: SortOrder
    ABO_DATETIME?: SortOrder
    ABO_OBOROT_ALL?: SortOrder
    ABO_OBOROT_BRANDS_MONTH?: SortOrder
    ABO_OBOROT_AE?: SortOrder
    ABO_OBOROT_ROSSKO?: SortOrder
    ABO_OBOROT_ARKONA?: SortOrder
    ABO_OBOROT_AUTORUS?: SortOrder
    ABO_SCORES_MONTH_PLAN?: SortOrder
    ABO_SCORES_MONTH_FAKT?: SortOrder
    ABO_COUNT_ROSSKO?: SortOrder
    ABO_COUNT_AE?: SortOrder
    ABO_COUNT_ARKONA?: SortOrder
    ABO_COUNT_AUTORUS?: SortOrder
    ABO_OBOROT_BRANDS?: SortOrder
    ABO_OBOROT_BRAND_LOOK1?: SortOrder
    ABO_SCORES?: SortOrder
    ABO_OBOROT_BRAND_LOOK2?: SortOrder
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: SortOrder
    ABO_OBOROT_BRAND_LOOK2_AE?: SortOrder
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: SortOrder
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: SortOrder
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: SortOrder
    ABO_OBOROT_BRANDS_MONTH_AE?: SortOrder
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: SortOrder
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: SortOrder
    ABO_OBOROT_BRAND1?: SortOrder
    ABO_OBOROT_BRAND2?: SortOrder
    ABO_OBOROT_BRAND3?: SortOrder
    ABO_OBOROT_BRAND4?: SortOrder
    ABO_OBOROT_BRAND5?: SortOrder
    ABO_OBOROT_BRAND6?: SortOrder
    ABO_OBOROT_NEXT?: SortOrder
    ABO_SCORES_MONTH_PLAN_NEXT?: SortOrder
    ABO_ABA_REMZONA_QTY?: SortOrder
    ABO_OBOROT_PARTRA?: SortOrder
    ABO_SCORES_PARTRA?: SortOrder
  }

  export type GA_ANKETA_OBOROTWhereUniqueInput = Prisma.AtLeast<{
    ABO_ABA_ID?: bigint | number
    AND?: GA_ANKETA_OBOROTWhereInput | GA_ANKETA_OBOROTWhereInput[]
    OR?: GA_ANKETA_OBOROTWhereInput[]
    NOT?: GA_ANKETA_OBOROTWhereInput | GA_ANKETA_OBOROTWhereInput[]
    ABO_DATETIME?: DateTimeFilter<"GA_ANKETA_OBOROT"> | Date | string
    ABO_OBOROT_ALL?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRANDS_MONTH?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_AE?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_ROSSKO?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_ARKONA?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_AUTORUS?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_SCORES_MONTH_PLAN?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_SCORES_MONTH_FAKT?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_COUNT_ROSSKO?: IntFilter<"GA_ANKETA_OBOROT"> | number
    ABO_COUNT_AE?: IntFilter<"GA_ANKETA_OBOROT"> | number
    ABO_COUNT_ARKONA?: IntFilter<"GA_ANKETA_OBOROT"> | number
    ABO_COUNT_AUTORUS?: IntFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRANDS?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND_LOOK1?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_SCORES?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND_LOOK2?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND_LOOK2_AE?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRANDS_MONTH_AE?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND1?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND2?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND3?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND4?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND5?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND6?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_NEXT?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_SCORES_MONTH_PLAN_NEXT?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_ABA_REMZONA_QTY?: IntFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_PARTRA?: FloatFilter<"GA_ANKETA_OBOROT"> | number
    ABO_SCORES_PARTRA?: FloatFilter<"GA_ANKETA_OBOROT"> | number
  }, "ABO_ABA_ID">

  export type GA_ANKETA_OBOROTOrderByWithAggregationInput = {
    ABO_ABA_ID?: SortOrder
    ABO_DATETIME?: SortOrder
    ABO_OBOROT_ALL?: SortOrder
    ABO_OBOROT_BRANDS_MONTH?: SortOrder
    ABO_OBOROT_AE?: SortOrder
    ABO_OBOROT_ROSSKO?: SortOrder
    ABO_OBOROT_ARKONA?: SortOrder
    ABO_OBOROT_AUTORUS?: SortOrder
    ABO_SCORES_MONTH_PLAN?: SortOrder
    ABO_SCORES_MONTH_FAKT?: SortOrder
    ABO_COUNT_ROSSKO?: SortOrder
    ABO_COUNT_AE?: SortOrder
    ABO_COUNT_ARKONA?: SortOrder
    ABO_COUNT_AUTORUS?: SortOrder
    ABO_OBOROT_BRANDS?: SortOrder
    ABO_OBOROT_BRAND_LOOK1?: SortOrder
    ABO_SCORES?: SortOrder
    ABO_OBOROT_BRAND_LOOK2?: SortOrder
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: SortOrder
    ABO_OBOROT_BRAND_LOOK2_AE?: SortOrder
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: SortOrder
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: SortOrder
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: SortOrder
    ABO_OBOROT_BRANDS_MONTH_AE?: SortOrder
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: SortOrder
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: SortOrder
    ABO_OBOROT_BRAND1?: SortOrder
    ABO_OBOROT_BRAND2?: SortOrder
    ABO_OBOROT_BRAND3?: SortOrder
    ABO_OBOROT_BRAND4?: SortOrder
    ABO_OBOROT_BRAND5?: SortOrder
    ABO_OBOROT_BRAND6?: SortOrder
    ABO_OBOROT_NEXT?: SortOrder
    ABO_SCORES_MONTH_PLAN_NEXT?: SortOrder
    ABO_ABA_REMZONA_QTY?: SortOrder
    ABO_OBOROT_PARTRA?: SortOrder
    ABO_SCORES_PARTRA?: SortOrder
    _count?: GA_ANKETA_OBOROTCountOrderByAggregateInput
    _avg?: GA_ANKETA_OBOROTAvgOrderByAggregateInput
    _max?: GA_ANKETA_OBOROTMaxOrderByAggregateInput
    _min?: GA_ANKETA_OBOROTMinOrderByAggregateInput
    _sum?: GA_ANKETA_OBOROTSumOrderByAggregateInput
  }

  export type GA_ANKETA_OBOROTScalarWhereWithAggregatesInput = {
    AND?: GA_ANKETA_OBOROTScalarWhereWithAggregatesInput | GA_ANKETA_OBOROTScalarWhereWithAggregatesInput[]
    OR?: GA_ANKETA_OBOROTScalarWhereWithAggregatesInput[]
    NOT?: GA_ANKETA_OBOROTScalarWhereWithAggregatesInput | GA_ANKETA_OBOROTScalarWhereWithAggregatesInput[]
    ABO_ABA_ID?: BigIntWithAggregatesFilter<"GA_ANKETA_OBOROT"> | bigint | number
    ABO_DATETIME?: DateTimeWithAggregatesFilter<"GA_ANKETA_OBOROT"> | Date | string
    ABO_OBOROT_ALL?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRANDS_MONTH?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_AE?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_ROSSKO?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_ARKONA?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_AUTORUS?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_SCORES_MONTH_PLAN?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_SCORES_MONTH_FAKT?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_COUNT_ROSSKO?: IntWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_COUNT_AE?: IntWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_COUNT_ARKONA?: IntWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_COUNT_AUTORUS?: IntWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRANDS?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND_LOOK1?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_SCORES?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND_LOOK2?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND_LOOK2_AE?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRANDS_MONTH_AE?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND1?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND2?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND3?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND4?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND5?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_BRAND6?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_NEXT?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_SCORES_MONTH_PLAN_NEXT?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_ABA_REMZONA_QTY?: IntWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_OBOROT_PARTRA?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
    ABO_SCORES_PARTRA?: FloatWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number
  }

  export type GA_WS_USERSWhereInput = {
    AND?: GA_WS_USERSWhereInput | GA_WS_USERSWhereInput[]
    OR?: GA_WS_USERSWhereInput[]
    NOT?: GA_WS_USERSWhereInput | GA_WS_USERSWhereInput[]
    WSU_ID?: BigIntFilter<"GA_WS_USERS"> | bigint | number
    WSU_WSO_ID?: IntNullableFilter<"GA_WS_USERS"> | number | null
    WSU_EMAIL?: StringNullableFilter<"GA_WS_USERS"> | string | null
    WSU_NAME?: StringNullableFilter<"GA_WS_USERS"> | string | null
    WSU_FULL_NAME?: StringNullableFilter<"GA_WS_USERS"> | string | null
    WSU_PHONE?: StringNullableFilter<"GA_WS_USERS"> | string | null
    WSU_ADDRESS?: StringNullableFilter<"GA_WS_USERS"> | string | null
    WSU_PASSWD?: StringNullableFilter<"GA_WS_USERS"> | string | null
    WSU_ID_IN_DS?: IntNullableFilter<"GA_WS_USERS"> | number | null
    WSU_INN?: StringNullableFilter<"GA_WS_USERS"> | string | null
    WSU_PRICE_TYPE?: IntNullableFilter<"GA_WS_USERS"> | number | null
    WSU_GRP_ID?: IntNullableFilter<"GA_WS_USERS"> | number | null
    WSU_WS_ID?: IntNullableFilter<"GA_WS_USERS"> | number | null
    WSU_MOBILE?: StringNullableFilter<"GA_WS_USERS"> | string | null
    WSU_SHOW_SUP_ALIAS?: BoolNullableFilter<"GA_WS_USERS"> | boolean | null
    WSU_IS_ZS?: BoolNullableFilter<"GA_WS_USERS"> | boolean | null
    WSU_PASSWD_ENC?: StringNullableFilter<"GA_WS_USERS"> | string | null
    WSU_LOGIN_ENC?: StringNullableFilter<"GA_WS_USERS"> | string | null
    WSU_DATETIME_LAST_LOGIN?: DateTimeNullableFilter<"GA_WS_USERS"> | Date | string | null
    WSU_START_PAGE?: StringNullableFilter<"GA_WS_USERS"> | string | null
    WSU_SALT?: StringNullableFilter<"GA_WS_USERS"> | string | null
    WSU_TEMP_TICKET?: StringNullableFilter<"GA_WS_USERS"> | string | null
    WSU_TEMP_TICKET_DATETIME?: DateTimeNullableFilter<"GA_WS_USERS"> | Date | string | null
    WSU_DATETIME_CREATE?: DateTimeNullableFilter<"GA_WS_USERS"> | Date | string | null
  }

  export type GA_WS_USERSOrderByWithRelationInput = {
    WSU_ID?: SortOrder
    WSU_WSO_ID?: SortOrderInput | SortOrder
    WSU_EMAIL?: SortOrderInput | SortOrder
    WSU_NAME?: SortOrderInput | SortOrder
    WSU_FULL_NAME?: SortOrderInput | SortOrder
    WSU_PHONE?: SortOrderInput | SortOrder
    WSU_ADDRESS?: SortOrderInput | SortOrder
    WSU_PASSWD?: SortOrderInput | SortOrder
    WSU_ID_IN_DS?: SortOrderInput | SortOrder
    WSU_INN?: SortOrderInput | SortOrder
    WSU_PRICE_TYPE?: SortOrderInput | SortOrder
    WSU_GRP_ID?: SortOrderInput | SortOrder
    WSU_WS_ID?: SortOrderInput | SortOrder
    WSU_MOBILE?: SortOrderInput | SortOrder
    WSU_SHOW_SUP_ALIAS?: SortOrderInput | SortOrder
    WSU_IS_ZS?: SortOrderInput | SortOrder
    WSU_PASSWD_ENC?: SortOrderInput | SortOrder
    WSU_LOGIN_ENC?: SortOrderInput | SortOrder
    WSU_DATETIME_LAST_LOGIN?: SortOrderInput | SortOrder
    WSU_START_PAGE?: SortOrderInput | SortOrder
    WSU_SALT?: SortOrderInput | SortOrder
    WSU_TEMP_TICKET?: SortOrderInput | SortOrder
    WSU_TEMP_TICKET_DATETIME?: SortOrderInput | SortOrder
    WSU_DATETIME_CREATE?: SortOrderInput | SortOrder
  }

  export type GA_WS_USERSWhereUniqueInput = Prisma.AtLeast<{
    WSU_ID?: bigint | number
    AND?: GA_WS_USERSWhereInput | GA_WS_USERSWhereInput[]
    OR?: GA_WS_USERSWhereInput[]
    NOT?: GA_WS_USERSWhereInput | GA_WS_USERSWhereInput[]
    WSU_WSO_ID?: IntNullableFilter<"GA_WS_USERS"> | number | null
    WSU_EMAIL?: StringNullableFilter<"GA_WS_USERS"> | string | null
    WSU_NAME?: StringNullableFilter<"GA_WS_USERS"> | string | null
    WSU_FULL_NAME?: StringNullableFilter<"GA_WS_USERS"> | string | null
    WSU_PHONE?: StringNullableFilter<"GA_WS_USERS"> | string | null
    WSU_ADDRESS?: StringNullableFilter<"GA_WS_USERS"> | string | null
    WSU_PASSWD?: StringNullableFilter<"GA_WS_USERS"> | string | null
    WSU_ID_IN_DS?: IntNullableFilter<"GA_WS_USERS"> | number | null
    WSU_INN?: StringNullableFilter<"GA_WS_USERS"> | string | null
    WSU_PRICE_TYPE?: IntNullableFilter<"GA_WS_USERS"> | number | null
    WSU_GRP_ID?: IntNullableFilter<"GA_WS_USERS"> | number | null
    WSU_WS_ID?: IntNullableFilter<"GA_WS_USERS"> | number | null
    WSU_MOBILE?: StringNullableFilter<"GA_WS_USERS"> | string | null
    WSU_SHOW_SUP_ALIAS?: BoolNullableFilter<"GA_WS_USERS"> | boolean | null
    WSU_IS_ZS?: BoolNullableFilter<"GA_WS_USERS"> | boolean | null
    WSU_PASSWD_ENC?: StringNullableFilter<"GA_WS_USERS"> | string | null
    WSU_LOGIN_ENC?: StringNullableFilter<"GA_WS_USERS"> | string | null
    WSU_DATETIME_LAST_LOGIN?: DateTimeNullableFilter<"GA_WS_USERS"> | Date | string | null
    WSU_START_PAGE?: StringNullableFilter<"GA_WS_USERS"> | string | null
    WSU_SALT?: StringNullableFilter<"GA_WS_USERS"> | string | null
    WSU_TEMP_TICKET?: StringNullableFilter<"GA_WS_USERS"> | string | null
    WSU_TEMP_TICKET_DATETIME?: DateTimeNullableFilter<"GA_WS_USERS"> | Date | string | null
    WSU_DATETIME_CREATE?: DateTimeNullableFilter<"GA_WS_USERS"> | Date | string | null
  }, "WSU_ID">

  export type GA_WS_USERSOrderByWithAggregationInput = {
    WSU_ID?: SortOrder
    WSU_WSO_ID?: SortOrderInput | SortOrder
    WSU_EMAIL?: SortOrderInput | SortOrder
    WSU_NAME?: SortOrderInput | SortOrder
    WSU_FULL_NAME?: SortOrderInput | SortOrder
    WSU_PHONE?: SortOrderInput | SortOrder
    WSU_ADDRESS?: SortOrderInput | SortOrder
    WSU_PASSWD?: SortOrderInput | SortOrder
    WSU_ID_IN_DS?: SortOrderInput | SortOrder
    WSU_INN?: SortOrderInput | SortOrder
    WSU_PRICE_TYPE?: SortOrderInput | SortOrder
    WSU_GRP_ID?: SortOrderInput | SortOrder
    WSU_WS_ID?: SortOrderInput | SortOrder
    WSU_MOBILE?: SortOrderInput | SortOrder
    WSU_SHOW_SUP_ALIAS?: SortOrderInput | SortOrder
    WSU_IS_ZS?: SortOrderInput | SortOrder
    WSU_PASSWD_ENC?: SortOrderInput | SortOrder
    WSU_LOGIN_ENC?: SortOrderInput | SortOrder
    WSU_DATETIME_LAST_LOGIN?: SortOrderInput | SortOrder
    WSU_START_PAGE?: SortOrderInput | SortOrder
    WSU_SALT?: SortOrderInput | SortOrder
    WSU_TEMP_TICKET?: SortOrderInput | SortOrder
    WSU_TEMP_TICKET_DATETIME?: SortOrderInput | SortOrder
    WSU_DATETIME_CREATE?: SortOrderInput | SortOrder
    _count?: GA_WS_USERSCountOrderByAggregateInput
    _avg?: GA_WS_USERSAvgOrderByAggregateInput
    _max?: GA_WS_USERSMaxOrderByAggregateInput
    _min?: GA_WS_USERSMinOrderByAggregateInput
    _sum?: GA_WS_USERSSumOrderByAggregateInput
  }

  export type GA_WS_USERSScalarWhereWithAggregatesInput = {
    AND?: GA_WS_USERSScalarWhereWithAggregatesInput | GA_WS_USERSScalarWhereWithAggregatesInput[]
    OR?: GA_WS_USERSScalarWhereWithAggregatesInput[]
    NOT?: GA_WS_USERSScalarWhereWithAggregatesInput | GA_WS_USERSScalarWhereWithAggregatesInput[]
    WSU_ID?: BigIntWithAggregatesFilter<"GA_WS_USERS"> | bigint | number
    WSU_WSO_ID?: IntNullableWithAggregatesFilter<"GA_WS_USERS"> | number | null
    WSU_EMAIL?: StringNullableWithAggregatesFilter<"GA_WS_USERS"> | string | null
    WSU_NAME?: StringNullableWithAggregatesFilter<"GA_WS_USERS"> | string | null
    WSU_FULL_NAME?: StringNullableWithAggregatesFilter<"GA_WS_USERS"> | string | null
    WSU_PHONE?: StringNullableWithAggregatesFilter<"GA_WS_USERS"> | string | null
    WSU_ADDRESS?: StringNullableWithAggregatesFilter<"GA_WS_USERS"> | string | null
    WSU_PASSWD?: StringNullableWithAggregatesFilter<"GA_WS_USERS"> | string | null
    WSU_ID_IN_DS?: IntNullableWithAggregatesFilter<"GA_WS_USERS"> | number | null
    WSU_INN?: StringNullableWithAggregatesFilter<"GA_WS_USERS"> | string | null
    WSU_PRICE_TYPE?: IntNullableWithAggregatesFilter<"GA_WS_USERS"> | number | null
    WSU_GRP_ID?: IntNullableWithAggregatesFilter<"GA_WS_USERS"> | number | null
    WSU_WS_ID?: IntNullableWithAggregatesFilter<"GA_WS_USERS"> | number | null
    WSU_MOBILE?: StringNullableWithAggregatesFilter<"GA_WS_USERS"> | string | null
    WSU_SHOW_SUP_ALIAS?: BoolNullableWithAggregatesFilter<"GA_WS_USERS"> | boolean | null
    WSU_IS_ZS?: BoolNullableWithAggregatesFilter<"GA_WS_USERS"> | boolean | null
    WSU_PASSWD_ENC?: StringNullableWithAggregatesFilter<"GA_WS_USERS"> | string | null
    WSU_LOGIN_ENC?: StringNullableWithAggregatesFilter<"GA_WS_USERS"> | string | null
    WSU_DATETIME_LAST_LOGIN?: DateTimeNullableWithAggregatesFilter<"GA_WS_USERS"> | Date | string | null
    WSU_START_PAGE?: StringNullableWithAggregatesFilter<"GA_WS_USERS"> | string | null
    WSU_SALT?: StringNullableWithAggregatesFilter<"GA_WS_USERS"> | string | null
    WSU_TEMP_TICKET?: StringNullableWithAggregatesFilter<"GA_WS_USERS"> | string | null
    WSU_TEMP_TICKET_DATETIME?: DateTimeNullableWithAggregatesFilter<"GA_WS_USERS"> | Date | string | null
    WSU_DATETIME_CREATE?: DateTimeNullableWithAggregatesFilter<"GA_WS_USERS"> | Date | string | null
  }

  export type GA_ANKETA_ADDRCreateInput = {
    AAD_ABA_ID: bigint | number
    AAD_SHIROTA: string
    AAD_DOLGOTA: string
    AAD_OBLAST: string
    AAD_GOROD: string
    AAD_ADDR: string
  }

  export type GA_ANKETA_ADDRUncheckedCreateInput = {
    AAD_ABA_ID: bigint | number
    AAD_SHIROTA: string
    AAD_DOLGOTA: string
    AAD_OBLAST: string
    AAD_GOROD: string
    AAD_ADDR: string
  }

  export type GA_ANKETA_ADDRUpdateInput = {
    AAD_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    AAD_SHIROTA?: StringFieldUpdateOperationsInput | string
    AAD_DOLGOTA?: StringFieldUpdateOperationsInput | string
    AAD_OBLAST?: StringFieldUpdateOperationsInput | string
    AAD_GOROD?: StringFieldUpdateOperationsInput | string
    AAD_ADDR?: StringFieldUpdateOperationsInput | string
  }

  export type GA_ANKETA_ADDRUncheckedUpdateInput = {
    AAD_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    AAD_SHIROTA?: StringFieldUpdateOperationsInput | string
    AAD_DOLGOTA?: StringFieldUpdateOperationsInput | string
    AAD_OBLAST?: StringFieldUpdateOperationsInput | string
    AAD_GOROD?: StringFieldUpdateOperationsInput | string
    AAD_ADDR?: StringFieldUpdateOperationsInput | string
  }

  export type GA_ANKETA_ADDRCreateManyInput = {
    AAD_ABA_ID: bigint | number
    AAD_SHIROTA: string
    AAD_DOLGOTA: string
    AAD_OBLAST: string
    AAD_GOROD: string
    AAD_ADDR: string
  }

  export type GA_ANKETA_ADDRUpdateManyMutationInput = {
    AAD_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    AAD_SHIROTA?: StringFieldUpdateOperationsInput | string
    AAD_DOLGOTA?: StringFieldUpdateOperationsInput | string
    AAD_OBLAST?: StringFieldUpdateOperationsInput | string
    AAD_GOROD?: StringFieldUpdateOperationsInput | string
    AAD_ADDR?: StringFieldUpdateOperationsInput | string
  }

  export type GA_ANKETA_ADDRUncheckedUpdateManyInput = {
    AAD_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    AAD_SHIROTA?: StringFieldUpdateOperationsInput | string
    AAD_DOLGOTA?: StringFieldUpdateOperationsInput | string
    AAD_OBLAST?: StringFieldUpdateOperationsInput | string
    AAD_GOROD?: StringFieldUpdateOperationsInput | string
    AAD_ADDR?: StringFieldUpdateOperationsInput | string
  }

  export type GA_ANKETA_BASECreateInput = {
    ABA_WSU_ID?: bigint | number
    ABA_STO_NAME: string
    ABA_STO_ID1: string
    ABA_REMZONA_QTY?: number
    ABA_ENABLED?: boolean
    ABA_PHONE: string
    ABA_INN: string
    ABA_DATETIME_CREATED: Date | string
    ABA_DATETIME_UPDATED: Date | string
    ABA_ID: bigint | number
    ABA_DATETIME: Date | string
    ABA_STO_ID2: string
    ABA_STO_NAME_FIND?: string | null
    ABA_DESC?: string | null
  }

  export type GA_ANKETA_BASEUncheckedCreateInput = {
    ABA_WSU_ID?: bigint | number
    ABA_STO_NAME: string
    ABA_STO_ID1: string
    ABA_REMZONA_QTY?: number
    ABA_ENABLED?: boolean
    ABA_PHONE: string
    ABA_INN: string
    ABA_DATETIME_CREATED: Date | string
    ABA_DATETIME_UPDATED: Date | string
    ABA_ID: bigint | number
    ABA_DATETIME: Date | string
    ABA_STO_ID2: string
    ABA_STO_NAME_FIND?: string | null
    ABA_DESC?: string | null
  }

  export type GA_ANKETA_BASEUpdateInput = {
    ABA_WSU_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ABA_STO_NAME?: StringFieldUpdateOperationsInput | string
    ABA_STO_ID1?: StringFieldUpdateOperationsInput | string
    ABA_REMZONA_QTY?: IntFieldUpdateOperationsInput | number
    ABA_ENABLED?: BoolFieldUpdateOperationsInput | boolean
    ABA_PHONE?: StringFieldUpdateOperationsInput | string
    ABA_INN?: StringFieldUpdateOperationsInput | string
    ABA_DATETIME_CREATED?: DateTimeFieldUpdateOperationsInput | Date | string
    ABA_DATETIME_UPDATED?: DateTimeFieldUpdateOperationsInput | Date | string
    ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ABA_DATETIME?: DateTimeFieldUpdateOperationsInput | Date | string
    ABA_STO_ID2?: StringFieldUpdateOperationsInput | string
    ABA_STO_NAME_FIND?: NullableStringFieldUpdateOperationsInput | string | null
    ABA_DESC?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GA_ANKETA_BASEUncheckedUpdateInput = {
    ABA_WSU_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ABA_STO_NAME?: StringFieldUpdateOperationsInput | string
    ABA_STO_ID1?: StringFieldUpdateOperationsInput | string
    ABA_REMZONA_QTY?: IntFieldUpdateOperationsInput | number
    ABA_ENABLED?: BoolFieldUpdateOperationsInput | boolean
    ABA_PHONE?: StringFieldUpdateOperationsInput | string
    ABA_INN?: StringFieldUpdateOperationsInput | string
    ABA_DATETIME_CREATED?: DateTimeFieldUpdateOperationsInput | Date | string
    ABA_DATETIME_UPDATED?: DateTimeFieldUpdateOperationsInput | Date | string
    ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ABA_DATETIME?: DateTimeFieldUpdateOperationsInput | Date | string
    ABA_STO_ID2?: StringFieldUpdateOperationsInput | string
    ABA_STO_NAME_FIND?: NullableStringFieldUpdateOperationsInput | string | null
    ABA_DESC?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GA_ANKETA_BASECreateManyInput = {
    ABA_WSU_ID?: bigint | number
    ABA_STO_NAME: string
    ABA_STO_ID1: string
    ABA_REMZONA_QTY?: number
    ABA_ENABLED?: boolean
    ABA_PHONE: string
    ABA_INN: string
    ABA_DATETIME_CREATED: Date | string
    ABA_DATETIME_UPDATED: Date | string
    ABA_ID: bigint | number
    ABA_DATETIME: Date | string
    ABA_STO_ID2: string
    ABA_STO_NAME_FIND?: string | null
    ABA_DESC?: string | null
  }

  export type GA_ANKETA_BASEUpdateManyMutationInput = {
    ABA_WSU_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ABA_STO_NAME?: StringFieldUpdateOperationsInput | string
    ABA_STO_ID1?: StringFieldUpdateOperationsInput | string
    ABA_REMZONA_QTY?: IntFieldUpdateOperationsInput | number
    ABA_ENABLED?: BoolFieldUpdateOperationsInput | boolean
    ABA_PHONE?: StringFieldUpdateOperationsInput | string
    ABA_INN?: StringFieldUpdateOperationsInput | string
    ABA_DATETIME_CREATED?: DateTimeFieldUpdateOperationsInput | Date | string
    ABA_DATETIME_UPDATED?: DateTimeFieldUpdateOperationsInput | Date | string
    ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ABA_DATETIME?: DateTimeFieldUpdateOperationsInput | Date | string
    ABA_STO_ID2?: StringFieldUpdateOperationsInput | string
    ABA_STO_NAME_FIND?: NullableStringFieldUpdateOperationsInput | string | null
    ABA_DESC?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GA_ANKETA_BASEUncheckedUpdateManyInput = {
    ABA_WSU_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ABA_STO_NAME?: StringFieldUpdateOperationsInput | string
    ABA_STO_ID1?: StringFieldUpdateOperationsInput | string
    ABA_REMZONA_QTY?: IntFieldUpdateOperationsInput | number
    ABA_ENABLED?: BoolFieldUpdateOperationsInput | boolean
    ABA_PHONE?: StringFieldUpdateOperationsInput | string
    ABA_INN?: StringFieldUpdateOperationsInput | string
    ABA_DATETIME_CREATED?: DateTimeFieldUpdateOperationsInput | Date | string
    ABA_DATETIME_UPDATED?: DateTimeFieldUpdateOperationsInput | Date | string
    ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ABA_DATETIME?: DateTimeFieldUpdateOperationsInput | Date | string
    ABA_STO_ID2?: StringFieldUpdateOperationsInput | string
    ABA_STO_NAME_FIND?: NullableStringFieldUpdateOperationsInput | string | null
    ABA_DESC?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GA_ANKETA_DOGOVORCreateInput = {
    ADO_ABA_ID: bigint | number
    ADO_NAME1: string
    ADO_NAME2: string
    ADO_NAME3: string
    ADO_PHONE: string
    ADO_EMAIL: string
    ADO_DATETIME: Date | string
    ADO_STATUS: boolean
  }

  export type GA_ANKETA_DOGOVORUncheckedCreateInput = {
    ADO_ABA_ID: bigint | number
    ADO_NAME1: string
    ADO_NAME2: string
    ADO_NAME3: string
    ADO_PHONE: string
    ADO_EMAIL: string
    ADO_DATETIME: Date | string
    ADO_STATUS: boolean
  }

  export type GA_ANKETA_DOGOVORUpdateInput = {
    ADO_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ADO_NAME1?: StringFieldUpdateOperationsInput | string
    ADO_NAME2?: StringFieldUpdateOperationsInput | string
    ADO_NAME3?: StringFieldUpdateOperationsInput | string
    ADO_PHONE?: StringFieldUpdateOperationsInput | string
    ADO_EMAIL?: StringFieldUpdateOperationsInput | string
    ADO_DATETIME?: DateTimeFieldUpdateOperationsInput | Date | string
    ADO_STATUS?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GA_ANKETA_DOGOVORUncheckedUpdateInput = {
    ADO_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ADO_NAME1?: StringFieldUpdateOperationsInput | string
    ADO_NAME2?: StringFieldUpdateOperationsInput | string
    ADO_NAME3?: StringFieldUpdateOperationsInput | string
    ADO_PHONE?: StringFieldUpdateOperationsInput | string
    ADO_EMAIL?: StringFieldUpdateOperationsInput | string
    ADO_DATETIME?: DateTimeFieldUpdateOperationsInput | Date | string
    ADO_STATUS?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GA_ANKETA_DOGOVORCreateManyInput = {
    ADO_ABA_ID: bigint | number
    ADO_NAME1: string
    ADO_NAME2: string
    ADO_NAME3: string
    ADO_PHONE: string
    ADO_EMAIL: string
    ADO_DATETIME: Date | string
    ADO_STATUS: boolean
  }

  export type GA_ANKETA_DOGOVORUpdateManyMutationInput = {
    ADO_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ADO_NAME1?: StringFieldUpdateOperationsInput | string
    ADO_NAME2?: StringFieldUpdateOperationsInput | string
    ADO_NAME3?: StringFieldUpdateOperationsInput | string
    ADO_PHONE?: StringFieldUpdateOperationsInput | string
    ADO_EMAIL?: StringFieldUpdateOperationsInput | string
    ADO_DATETIME?: DateTimeFieldUpdateOperationsInput | Date | string
    ADO_STATUS?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GA_ANKETA_DOGOVORUncheckedUpdateManyInput = {
    ADO_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ADO_NAME1?: StringFieldUpdateOperationsInput | string
    ADO_NAME2?: StringFieldUpdateOperationsInput | string
    ADO_NAME3?: StringFieldUpdateOperationsInput | string
    ADO_PHONE?: StringFieldUpdateOperationsInput | string
    ADO_EMAIL?: StringFieldUpdateOperationsInput | string
    ADO_DATETIME?: DateTimeFieldUpdateOperationsInput | Date | string
    ADO_STATUS?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GA_ANKETA_OBOROTCreateInput = {
    ABO_ABA_ID: bigint | number
    ABO_DATETIME: Date | string
    ABO_OBOROT_ALL: number
    ABO_OBOROT_BRANDS_MONTH: number
    ABO_OBOROT_AE: number
    ABO_OBOROT_ROSSKO: number
    ABO_OBOROT_ARKONA: number
    ABO_OBOROT_AUTORUS: number
    ABO_SCORES_MONTH_PLAN: number
    ABO_SCORES_MONTH_FAKT: number
    ABO_COUNT_ROSSKO: number
    ABO_COUNT_AE: number
    ABO_COUNT_ARKONA: number
    ABO_COUNT_AUTORUS: number
    ABO_OBOROT_BRANDS: number
    ABO_OBOROT_BRAND_LOOK1: number
    ABO_SCORES: number
    ABO_OBOROT_BRAND_LOOK2: number
    ABO_OBOROT_BRAND_LOOK2_ROSSKO: number
    ABO_OBOROT_BRAND_LOOK2_AE: number
    ABO_OBOROT_BRAND_LOOK2_ARKONA: number
    ABO_OBOROT_BRAND_LOOK2_AUTORUS: number
    ABO_OBOROT_BRANDS_MONTH_ROSSKO: number
    ABO_OBOROT_BRANDS_MONTH_AE: number
    ABO_OBOROT_BRANDS_MONTH_ARKONA: number
    ABO_OBOROT_BRANDS_MONTH_AUTORUS: number
    ABO_OBOROT_BRAND1?: number
    ABO_OBOROT_BRAND2?: number
    ABO_OBOROT_BRAND3?: number
    ABO_OBOROT_BRAND4?: number
    ABO_OBOROT_BRAND5?: number
    ABO_OBOROT_BRAND6?: number
    ABO_OBOROT_NEXT?: number
    ABO_SCORES_MONTH_PLAN_NEXT?: number
    ABO_ABA_REMZONA_QTY: number
    ABO_OBOROT_PARTRA?: number
    ABO_SCORES_PARTRA?: number
  }

  export type GA_ANKETA_OBOROTUncheckedCreateInput = {
    ABO_ABA_ID: bigint | number
    ABO_DATETIME: Date | string
    ABO_OBOROT_ALL: number
    ABO_OBOROT_BRANDS_MONTH: number
    ABO_OBOROT_AE: number
    ABO_OBOROT_ROSSKO: number
    ABO_OBOROT_ARKONA: number
    ABO_OBOROT_AUTORUS: number
    ABO_SCORES_MONTH_PLAN: number
    ABO_SCORES_MONTH_FAKT: number
    ABO_COUNT_ROSSKO: number
    ABO_COUNT_AE: number
    ABO_COUNT_ARKONA: number
    ABO_COUNT_AUTORUS: number
    ABO_OBOROT_BRANDS: number
    ABO_OBOROT_BRAND_LOOK1: number
    ABO_SCORES: number
    ABO_OBOROT_BRAND_LOOK2: number
    ABO_OBOROT_BRAND_LOOK2_ROSSKO: number
    ABO_OBOROT_BRAND_LOOK2_AE: number
    ABO_OBOROT_BRAND_LOOK2_ARKONA: number
    ABO_OBOROT_BRAND_LOOK2_AUTORUS: number
    ABO_OBOROT_BRANDS_MONTH_ROSSKO: number
    ABO_OBOROT_BRANDS_MONTH_AE: number
    ABO_OBOROT_BRANDS_MONTH_ARKONA: number
    ABO_OBOROT_BRANDS_MONTH_AUTORUS: number
    ABO_OBOROT_BRAND1?: number
    ABO_OBOROT_BRAND2?: number
    ABO_OBOROT_BRAND3?: number
    ABO_OBOROT_BRAND4?: number
    ABO_OBOROT_BRAND5?: number
    ABO_OBOROT_BRAND6?: number
    ABO_OBOROT_NEXT?: number
    ABO_SCORES_MONTH_PLAN_NEXT?: number
    ABO_ABA_REMZONA_QTY: number
    ABO_OBOROT_PARTRA?: number
    ABO_SCORES_PARTRA?: number
  }

  export type GA_ANKETA_OBOROTUpdateInput = {
    ABO_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ABO_DATETIME?: DateTimeFieldUpdateOperationsInput | Date | string
    ABO_OBOROT_ALL?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRANDS_MONTH?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_AE?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_ROSSKO?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_ARKONA?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_AUTORUS?: FloatFieldUpdateOperationsInput | number
    ABO_SCORES_MONTH_PLAN?: FloatFieldUpdateOperationsInput | number
    ABO_SCORES_MONTH_FAKT?: FloatFieldUpdateOperationsInput | number
    ABO_COUNT_ROSSKO?: IntFieldUpdateOperationsInput | number
    ABO_COUNT_AE?: IntFieldUpdateOperationsInput | number
    ABO_COUNT_ARKONA?: IntFieldUpdateOperationsInput | number
    ABO_COUNT_AUTORUS?: IntFieldUpdateOperationsInput | number
    ABO_OBOROT_BRANDS?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND_LOOK1?: FloatFieldUpdateOperationsInput | number
    ABO_SCORES?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND_LOOK2?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND_LOOK2_AE?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRANDS_MONTH_AE?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND1?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND2?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND3?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND4?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND5?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND6?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_NEXT?: FloatFieldUpdateOperationsInput | number
    ABO_SCORES_MONTH_PLAN_NEXT?: FloatFieldUpdateOperationsInput | number
    ABO_ABA_REMZONA_QTY?: IntFieldUpdateOperationsInput | number
    ABO_OBOROT_PARTRA?: FloatFieldUpdateOperationsInput | number
    ABO_SCORES_PARTRA?: FloatFieldUpdateOperationsInput | number
  }

  export type GA_ANKETA_OBOROTUncheckedUpdateInput = {
    ABO_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ABO_DATETIME?: DateTimeFieldUpdateOperationsInput | Date | string
    ABO_OBOROT_ALL?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRANDS_MONTH?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_AE?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_ROSSKO?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_ARKONA?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_AUTORUS?: FloatFieldUpdateOperationsInput | number
    ABO_SCORES_MONTH_PLAN?: FloatFieldUpdateOperationsInput | number
    ABO_SCORES_MONTH_FAKT?: FloatFieldUpdateOperationsInput | number
    ABO_COUNT_ROSSKO?: IntFieldUpdateOperationsInput | number
    ABO_COUNT_AE?: IntFieldUpdateOperationsInput | number
    ABO_COUNT_ARKONA?: IntFieldUpdateOperationsInput | number
    ABO_COUNT_AUTORUS?: IntFieldUpdateOperationsInput | number
    ABO_OBOROT_BRANDS?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND_LOOK1?: FloatFieldUpdateOperationsInput | number
    ABO_SCORES?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND_LOOK2?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND_LOOK2_AE?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRANDS_MONTH_AE?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND1?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND2?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND3?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND4?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND5?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND6?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_NEXT?: FloatFieldUpdateOperationsInput | number
    ABO_SCORES_MONTH_PLAN_NEXT?: FloatFieldUpdateOperationsInput | number
    ABO_ABA_REMZONA_QTY?: IntFieldUpdateOperationsInput | number
    ABO_OBOROT_PARTRA?: FloatFieldUpdateOperationsInput | number
    ABO_SCORES_PARTRA?: FloatFieldUpdateOperationsInput | number
  }

  export type GA_ANKETA_OBOROTCreateManyInput = {
    ABO_ABA_ID: bigint | number
    ABO_DATETIME: Date | string
    ABO_OBOROT_ALL: number
    ABO_OBOROT_BRANDS_MONTH: number
    ABO_OBOROT_AE: number
    ABO_OBOROT_ROSSKO: number
    ABO_OBOROT_ARKONA: number
    ABO_OBOROT_AUTORUS: number
    ABO_SCORES_MONTH_PLAN: number
    ABO_SCORES_MONTH_FAKT: number
    ABO_COUNT_ROSSKO: number
    ABO_COUNT_AE: number
    ABO_COUNT_ARKONA: number
    ABO_COUNT_AUTORUS: number
    ABO_OBOROT_BRANDS: number
    ABO_OBOROT_BRAND_LOOK1: number
    ABO_SCORES: number
    ABO_OBOROT_BRAND_LOOK2: number
    ABO_OBOROT_BRAND_LOOK2_ROSSKO: number
    ABO_OBOROT_BRAND_LOOK2_AE: number
    ABO_OBOROT_BRAND_LOOK2_ARKONA: number
    ABO_OBOROT_BRAND_LOOK2_AUTORUS: number
    ABO_OBOROT_BRANDS_MONTH_ROSSKO: number
    ABO_OBOROT_BRANDS_MONTH_AE: number
    ABO_OBOROT_BRANDS_MONTH_ARKONA: number
    ABO_OBOROT_BRANDS_MONTH_AUTORUS: number
    ABO_OBOROT_BRAND1?: number
    ABO_OBOROT_BRAND2?: number
    ABO_OBOROT_BRAND3?: number
    ABO_OBOROT_BRAND4?: number
    ABO_OBOROT_BRAND5?: number
    ABO_OBOROT_BRAND6?: number
    ABO_OBOROT_NEXT?: number
    ABO_SCORES_MONTH_PLAN_NEXT?: number
    ABO_ABA_REMZONA_QTY: number
    ABO_OBOROT_PARTRA?: number
    ABO_SCORES_PARTRA?: number
  }

  export type GA_ANKETA_OBOROTUpdateManyMutationInput = {
    ABO_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ABO_DATETIME?: DateTimeFieldUpdateOperationsInput | Date | string
    ABO_OBOROT_ALL?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRANDS_MONTH?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_AE?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_ROSSKO?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_ARKONA?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_AUTORUS?: FloatFieldUpdateOperationsInput | number
    ABO_SCORES_MONTH_PLAN?: FloatFieldUpdateOperationsInput | number
    ABO_SCORES_MONTH_FAKT?: FloatFieldUpdateOperationsInput | number
    ABO_COUNT_ROSSKO?: IntFieldUpdateOperationsInput | number
    ABO_COUNT_AE?: IntFieldUpdateOperationsInput | number
    ABO_COUNT_ARKONA?: IntFieldUpdateOperationsInput | number
    ABO_COUNT_AUTORUS?: IntFieldUpdateOperationsInput | number
    ABO_OBOROT_BRANDS?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND_LOOK1?: FloatFieldUpdateOperationsInput | number
    ABO_SCORES?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND_LOOK2?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND_LOOK2_AE?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRANDS_MONTH_AE?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND1?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND2?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND3?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND4?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND5?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND6?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_NEXT?: FloatFieldUpdateOperationsInput | number
    ABO_SCORES_MONTH_PLAN_NEXT?: FloatFieldUpdateOperationsInput | number
    ABO_ABA_REMZONA_QTY?: IntFieldUpdateOperationsInput | number
    ABO_OBOROT_PARTRA?: FloatFieldUpdateOperationsInput | number
    ABO_SCORES_PARTRA?: FloatFieldUpdateOperationsInput | number
  }

  export type GA_ANKETA_OBOROTUncheckedUpdateManyInput = {
    ABO_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ABO_DATETIME?: DateTimeFieldUpdateOperationsInput | Date | string
    ABO_OBOROT_ALL?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRANDS_MONTH?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_AE?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_ROSSKO?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_ARKONA?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_AUTORUS?: FloatFieldUpdateOperationsInput | number
    ABO_SCORES_MONTH_PLAN?: FloatFieldUpdateOperationsInput | number
    ABO_SCORES_MONTH_FAKT?: FloatFieldUpdateOperationsInput | number
    ABO_COUNT_ROSSKO?: IntFieldUpdateOperationsInput | number
    ABO_COUNT_AE?: IntFieldUpdateOperationsInput | number
    ABO_COUNT_ARKONA?: IntFieldUpdateOperationsInput | number
    ABO_COUNT_AUTORUS?: IntFieldUpdateOperationsInput | number
    ABO_OBOROT_BRANDS?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND_LOOK1?: FloatFieldUpdateOperationsInput | number
    ABO_SCORES?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND_LOOK2?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND_LOOK2_AE?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRANDS_MONTH_AE?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND1?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND2?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND3?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND4?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND5?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_BRAND6?: FloatFieldUpdateOperationsInput | number
    ABO_OBOROT_NEXT?: FloatFieldUpdateOperationsInput | number
    ABO_SCORES_MONTH_PLAN_NEXT?: FloatFieldUpdateOperationsInput | number
    ABO_ABA_REMZONA_QTY?: IntFieldUpdateOperationsInput | number
    ABO_OBOROT_PARTRA?: FloatFieldUpdateOperationsInput | number
    ABO_SCORES_PARTRA?: FloatFieldUpdateOperationsInput | number
  }

  export type GA_WS_USERSCreateInput = {
    WSU_ID: bigint | number
    WSU_WSO_ID?: number | null
    WSU_EMAIL?: string | null
    WSU_NAME?: string | null
    WSU_FULL_NAME?: string | null
    WSU_PHONE?: string | null
    WSU_ADDRESS?: string | null
    WSU_PASSWD?: string | null
    WSU_ID_IN_DS?: number | null
    WSU_INN?: string | null
    WSU_PRICE_TYPE?: number | null
    WSU_GRP_ID?: number | null
    WSU_WS_ID?: number | null
    WSU_MOBILE?: string | null
    WSU_SHOW_SUP_ALIAS?: boolean | null
    WSU_IS_ZS?: boolean | null
    WSU_PASSWD_ENC?: string | null
    WSU_LOGIN_ENC?: string | null
    WSU_DATETIME_LAST_LOGIN?: Date | string | null
    WSU_START_PAGE?: string | null
    WSU_SALT?: string | null
    WSU_TEMP_TICKET?: string | null
    WSU_TEMP_TICKET_DATETIME?: Date | string | null
    WSU_DATETIME_CREATE?: Date | string | null
  }

  export type GA_WS_USERSUncheckedCreateInput = {
    WSU_ID: bigint | number
    WSU_WSO_ID?: number | null
    WSU_EMAIL?: string | null
    WSU_NAME?: string | null
    WSU_FULL_NAME?: string | null
    WSU_PHONE?: string | null
    WSU_ADDRESS?: string | null
    WSU_PASSWD?: string | null
    WSU_ID_IN_DS?: number | null
    WSU_INN?: string | null
    WSU_PRICE_TYPE?: number | null
    WSU_GRP_ID?: number | null
    WSU_WS_ID?: number | null
    WSU_MOBILE?: string | null
    WSU_SHOW_SUP_ALIAS?: boolean | null
    WSU_IS_ZS?: boolean | null
    WSU_PASSWD_ENC?: string | null
    WSU_LOGIN_ENC?: string | null
    WSU_DATETIME_LAST_LOGIN?: Date | string | null
    WSU_START_PAGE?: string | null
    WSU_SALT?: string | null
    WSU_TEMP_TICKET?: string | null
    WSU_TEMP_TICKET_DATETIME?: Date | string | null
    WSU_DATETIME_CREATE?: Date | string | null
  }

  export type GA_WS_USERSUpdateInput = {
    WSU_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    WSU_WSO_ID?: NullableIntFieldUpdateOperationsInput | number | null
    WSU_EMAIL?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_FULL_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_PHONE?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_ADDRESS?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_PASSWD?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_ID_IN_DS?: NullableIntFieldUpdateOperationsInput | number | null
    WSU_INN?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_PRICE_TYPE?: NullableIntFieldUpdateOperationsInput | number | null
    WSU_GRP_ID?: NullableIntFieldUpdateOperationsInput | number | null
    WSU_WS_ID?: NullableIntFieldUpdateOperationsInput | number | null
    WSU_MOBILE?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_SHOW_SUP_ALIAS?: NullableBoolFieldUpdateOperationsInput | boolean | null
    WSU_IS_ZS?: NullableBoolFieldUpdateOperationsInput | boolean | null
    WSU_PASSWD_ENC?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_LOGIN_ENC?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_DATETIME_LAST_LOGIN?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    WSU_START_PAGE?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_SALT?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_TEMP_TICKET?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_TEMP_TICKET_DATETIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    WSU_DATETIME_CREATE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GA_WS_USERSUncheckedUpdateInput = {
    WSU_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    WSU_WSO_ID?: NullableIntFieldUpdateOperationsInput | number | null
    WSU_EMAIL?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_FULL_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_PHONE?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_ADDRESS?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_PASSWD?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_ID_IN_DS?: NullableIntFieldUpdateOperationsInput | number | null
    WSU_INN?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_PRICE_TYPE?: NullableIntFieldUpdateOperationsInput | number | null
    WSU_GRP_ID?: NullableIntFieldUpdateOperationsInput | number | null
    WSU_WS_ID?: NullableIntFieldUpdateOperationsInput | number | null
    WSU_MOBILE?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_SHOW_SUP_ALIAS?: NullableBoolFieldUpdateOperationsInput | boolean | null
    WSU_IS_ZS?: NullableBoolFieldUpdateOperationsInput | boolean | null
    WSU_PASSWD_ENC?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_LOGIN_ENC?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_DATETIME_LAST_LOGIN?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    WSU_START_PAGE?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_SALT?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_TEMP_TICKET?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_TEMP_TICKET_DATETIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    WSU_DATETIME_CREATE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GA_WS_USERSCreateManyInput = {
    WSU_ID: bigint | number
    WSU_WSO_ID?: number | null
    WSU_EMAIL?: string | null
    WSU_NAME?: string | null
    WSU_FULL_NAME?: string | null
    WSU_PHONE?: string | null
    WSU_ADDRESS?: string | null
    WSU_PASSWD?: string | null
    WSU_ID_IN_DS?: number | null
    WSU_INN?: string | null
    WSU_PRICE_TYPE?: number | null
    WSU_GRP_ID?: number | null
    WSU_WS_ID?: number | null
    WSU_MOBILE?: string | null
    WSU_SHOW_SUP_ALIAS?: boolean | null
    WSU_IS_ZS?: boolean | null
    WSU_PASSWD_ENC?: string | null
    WSU_LOGIN_ENC?: string | null
    WSU_DATETIME_LAST_LOGIN?: Date | string | null
    WSU_START_PAGE?: string | null
    WSU_SALT?: string | null
    WSU_TEMP_TICKET?: string | null
    WSU_TEMP_TICKET_DATETIME?: Date | string | null
    WSU_DATETIME_CREATE?: Date | string | null
  }

  export type GA_WS_USERSUpdateManyMutationInput = {
    WSU_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    WSU_WSO_ID?: NullableIntFieldUpdateOperationsInput | number | null
    WSU_EMAIL?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_FULL_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_PHONE?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_ADDRESS?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_PASSWD?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_ID_IN_DS?: NullableIntFieldUpdateOperationsInput | number | null
    WSU_INN?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_PRICE_TYPE?: NullableIntFieldUpdateOperationsInput | number | null
    WSU_GRP_ID?: NullableIntFieldUpdateOperationsInput | number | null
    WSU_WS_ID?: NullableIntFieldUpdateOperationsInput | number | null
    WSU_MOBILE?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_SHOW_SUP_ALIAS?: NullableBoolFieldUpdateOperationsInput | boolean | null
    WSU_IS_ZS?: NullableBoolFieldUpdateOperationsInput | boolean | null
    WSU_PASSWD_ENC?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_LOGIN_ENC?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_DATETIME_LAST_LOGIN?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    WSU_START_PAGE?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_SALT?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_TEMP_TICKET?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_TEMP_TICKET_DATETIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    WSU_DATETIME_CREATE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GA_WS_USERSUncheckedUpdateManyInput = {
    WSU_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    WSU_WSO_ID?: NullableIntFieldUpdateOperationsInput | number | null
    WSU_EMAIL?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_FULL_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_PHONE?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_ADDRESS?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_PASSWD?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_ID_IN_DS?: NullableIntFieldUpdateOperationsInput | number | null
    WSU_INN?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_PRICE_TYPE?: NullableIntFieldUpdateOperationsInput | number | null
    WSU_GRP_ID?: NullableIntFieldUpdateOperationsInput | number | null
    WSU_WS_ID?: NullableIntFieldUpdateOperationsInput | number | null
    WSU_MOBILE?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_SHOW_SUP_ALIAS?: NullableBoolFieldUpdateOperationsInput | boolean | null
    WSU_IS_ZS?: NullableBoolFieldUpdateOperationsInput | boolean | null
    WSU_PASSWD_ENC?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_LOGIN_ENC?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_DATETIME_LAST_LOGIN?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    WSU_START_PAGE?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_SALT?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_TEMP_TICKET?: NullableStringFieldUpdateOperationsInput | string | null
    WSU_TEMP_TICKET_DATETIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    WSU_DATETIME_CREATE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type GA_ANKETA_ADDRCountOrderByAggregateInput = {
    AAD_ABA_ID?: SortOrder
    AAD_SHIROTA?: SortOrder
    AAD_DOLGOTA?: SortOrder
    AAD_OBLAST?: SortOrder
    AAD_GOROD?: SortOrder
    AAD_ADDR?: SortOrder
  }

  export type GA_ANKETA_ADDRAvgOrderByAggregateInput = {
    AAD_ABA_ID?: SortOrder
  }

  export type GA_ANKETA_ADDRMaxOrderByAggregateInput = {
    AAD_ABA_ID?: SortOrder
    AAD_SHIROTA?: SortOrder
    AAD_DOLGOTA?: SortOrder
    AAD_OBLAST?: SortOrder
    AAD_GOROD?: SortOrder
    AAD_ADDR?: SortOrder
  }

  export type GA_ANKETA_ADDRMinOrderByAggregateInput = {
    AAD_ABA_ID?: SortOrder
    AAD_SHIROTA?: SortOrder
    AAD_DOLGOTA?: SortOrder
    AAD_OBLAST?: SortOrder
    AAD_GOROD?: SortOrder
    AAD_ADDR?: SortOrder
  }

  export type GA_ANKETA_ADDRSumOrderByAggregateInput = {
    AAD_ABA_ID?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GA_ANKETA_BASECountOrderByAggregateInput = {
    ABA_WSU_ID?: SortOrder
    ABA_STO_NAME?: SortOrder
    ABA_STO_ID1?: SortOrder
    ABA_REMZONA_QTY?: SortOrder
    ABA_ENABLED?: SortOrder
    ABA_PHONE?: SortOrder
    ABA_INN?: SortOrder
    ABA_DATETIME_CREATED?: SortOrder
    ABA_DATETIME_UPDATED?: SortOrder
    ABA_ID?: SortOrder
    ABA_DATETIME?: SortOrder
    ABA_STO_ID2?: SortOrder
    ABA_STO_NAME_FIND?: SortOrder
    ABA_DESC?: SortOrder
  }

  export type GA_ANKETA_BASEAvgOrderByAggregateInput = {
    ABA_WSU_ID?: SortOrder
    ABA_REMZONA_QTY?: SortOrder
    ABA_ID?: SortOrder
  }

  export type GA_ANKETA_BASEMaxOrderByAggregateInput = {
    ABA_WSU_ID?: SortOrder
    ABA_STO_NAME?: SortOrder
    ABA_STO_ID1?: SortOrder
    ABA_REMZONA_QTY?: SortOrder
    ABA_ENABLED?: SortOrder
    ABA_PHONE?: SortOrder
    ABA_INN?: SortOrder
    ABA_DATETIME_CREATED?: SortOrder
    ABA_DATETIME_UPDATED?: SortOrder
    ABA_ID?: SortOrder
    ABA_DATETIME?: SortOrder
    ABA_STO_ID2?: SortOrder
    ABA_STO_NAME_FIND?: SortOrder
    ABA_DESC?: SortOrder
  }

  export type GA_ANKETA_BASEMinOrderByAggregateInput = {
    ABA_WSU_ID?: SortOrder
    ABA_STO_NAME?: SortOrder
    ABA_STO_ID1?: SortOrder
    ABA_REMZONA_QTY?: SortOrder
    ABA_ENABLED?: SortOrder
    ABA_PHONE?: SortOrder
    ABA_INN?: SortOrder
    ABA_DATETIME_CREATED?: SortOrder
    ABA_DATETIME_UPDATED?: SortOrder
    ABA_ID?: SortOrder
    ABA_DATETIME?: SortOrder
    ABA_STO_ID2?: SortOrder
    ABA_STO_NAME_FIND?: SortOrder
    ABA_DESC?: SortOrder
  }

  export type GA_ANKETA_BASESumOrderByAggregateInput = {
    ABA_WSU_ID?: SortOrder
    ABA_REMZONA_QTY?: SortOrder
    ABA_ID?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type GA_ANKETA_DOGOVORCountOrderByAggregateInput = {
    ADO_ABA_ID?: SortOrder
    ADO_NAME1?: SortOrder
    ADO_NAME2?: SortOrder
    ADO_NAME3?: SortOrder
    ADO_PHONE?: SortOrder
    ADO_EMAIL?: SortOrder
    ADO_DATETIME?: SortOrder
    ADO_STATUS?: SortOrder
  }

  export type GA_ANKETA_DOGOVORAvgOrderByAggregateInput = {
    ADO_ABA_ID?: SortOrder
  }

  export type GA_ANKETA_DOGOVORMaxOrderByAggregateInput = {
    ADO_ABA_ID?: SortOrder
    ADO_NAME1?: SortOrder
    ADO_NAME2?: SortOrder
    ADO_NAME3?: SortOrder
    ADO_PHONE?: SortOrder
    ADO_EMAIL?: SortOrder
    ADO_DATETIME?: SortOrder
    ADO_STATUS?: SortOrder
  }

  export type GA_ANKETA_DOGOVORMinOrderByAggregateInput = {
    ADO_ABA_ID?: SortOrder
    ADO_NAME1?: SortOrder
    ADO_NAME2?: SortOrder
    ADO_NAME3?: SortOrder
    ADO_PHONE?: SortOrder
    ADO_EMAIL?: SortOrder
    ADO_DATETIME?: SortOrder
    ADO_STATUS?: SortOrder
  }

  export type GA_ANKETA_DOGOVORSumOrderByAggregateInput = {
    ADO_ABA_ID?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type GA_ANKETA_OBOROTCountOrderByAggregateInput = {
    ABO_ABA_ID?: SortOrder
    ABO_DATETIME?: SortOrder
    ABO_OBOROT_ALL?: SortOrder
    ABO_OBOROT_BRANDS_MONTH?: SortOrder
    ABO_OBOROT_AE?: SortOrder
    ABO_OBOROT_ROSSKO?: SortOrder
    ABO_OBOROT_ARKONA?: SortOrder
    ABO_OBOROT_AUTORUS?: SortOrder
    ABO_SCORES_MONTH_PLAN?: SortOrder
    ABO_SCORES_MONTH_FAKT?: SortOrder
    ABO_COUNT_ROSSKO?: SortOrder
    ABO_COUNT_AE?: SortOrder
    ABO_COUNT_ARKONA?: SortOrder
    ABO_COUNT_AUTORUS?: SortOrder
    ABO_OBOROT_BRANDS?: SortOrder
    ABO_OBOROT_BRAND_LOOK1?: SortOrder
    ABO_SCORES?: SortOrder
    ABO_OBOROT_BRAND_LOOK2?: SortOrder
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: SortOrder
    ABO_OBOROT_BRAND_LOOK2_AE?: SortOrder
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: SortOrder
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: SortOrder
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: SortOrder
    ABO_OBOROT_BRANDS_MONTH_AE?: SortOrder
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: SortOrder
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: SortOrder
    ABO_OBOROT_BRAND1?: SortOrder
    ABO_OBOROT_BRAND2?: SortOrder
    ABO_OBOROT_BRAND3?: SortOrder
    ABO_OBOROT_BRAND4?: SortOrder
    ABO_OBOROT_BRAND5?: SortOrder
    ABO_OBOROT_BRAND6?: SortOrder
    ABO_OBOROT_NEXT?: SortOrder
    ABO_SCORES_MONTH_PLAN_NEXT?: SortOrder
    ABO_ABA_REMZONA_QTY?: SortOrder
    ABO_OBOROT_PARTRA?: SortOrder
    ABO_SCORES_PARTRA?: SortOrder
  }

  export type GA_ANKETA_OBOROTAvgOrderByAggregateInput = {
    ABO_ABA_ID?: SortOrder
    ABO_OBOROT_ALL?: SortOrder
    ABO_OBOROT_BRANDS_MONTH?: SortOrder
    ABO_OBOROT_AE?: SortOrder
    ABO_OBOROT_ROSSKO?: SortOrder
    ABO_OBOROT_ARKONA?: SortOrder
    ABO_OBOROT_AUTORUS?: SortOrder
    ABO_SCORES_MONTH_PLAN?: SortOrder
    ABO_SCORES_MONTH_FAKT?: SortOrder
    ABO_COUNT_ROSSKO?: SortOrder
    ABO_COUNT_AE?: SortOrder
    ABO_COUNT_ARKONA?: SortOrder
    ABO_COUNT_AUTORUS?: SortOrder
    ABO_OBOROT_BRANDS?: SortOrder
    ABO_OBOROT_BRAND_LOOK1?: SortOrder
    ABO_SCORES?: SortOrder
    ABO_OBOROT_BRAND_LOOK2?: SortOrder
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: SortOrder
    ABO_OBOROT_BRAND_LOOK2_AE?: SortOrder
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: SortOrder
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: SortOrder
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: SortOrder
    ABO_OBOROT_BRANDS_MONTH_AE?: SortOrder
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: SortOrder
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: SortOrder
    ABO_OBOROT_BRAND1?: SortOrder
    ABO_OBOROT_BRAND2?: SortOrder
    ABO_OBOROT_BRAND3?: SortOrder
    ABO_OBOROT_BRAND4?: SortOrder
    ABO_OBOROT_BRAND5?: SortOrder
    ABO_OBOROT_BRAND6?: SortOrder
    ABO_OBOROT_NEXT?: SortOrder
    ABO_SCORES_MONTH_PLAN_NEXT?: SortOrder
    ABO_ABA_REMZONA_QTY?: SortOrder
    ABO_OBOROT_PARTRA?: SortOrder
    ABO_SCORES_PARTRA?: SortOrder
  }

  export type GA_ANKETA_OBOROTMaxOrderByAggregateInput = {
    ABO_ABA_ID?: SortOrder
    ABO_DATETIME?: SortOrder
    ABO_OBOROT_ALL?: SortOrder
    ABO_OBOROT_BRANDS_MONTH?: SortOrder
    ABO_OBOROT_AE?: SortOrder
    ABO_OBOROT_ROSSKO?: SortOrder
    ABO_OBOROT_ARKONA?: SortOrder
    ABO_OBOROT_AUTORUS?: SortOrder
    ABO_SCORES_MONTH_PLAN?: SortOrder
    ABO_SCORES_MONTH_FAKT?: SortOrder
    ABO_COUNT_ROSSKO?: SortOrder
    ABO_COUNT_AE?: SortOrder
    ABO_COUNT_ARKONA?: SortOrder
    ABO_COUNT_AUTORUS?: SortOrder
    ABO_OBOROT_BRANDS?: SortOrder
    ABO_OBOROT_BRAND_LOOK1?: SortOrder
    ABO_SCORES?: SortOrder
    ABO_OBOROT_BRAND_LOOK2?: SortOrder
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: SortOrder
    ABO_OBOROT_BRAND_LOOK2_AE?: SortOrder
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: SortOrder
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: SortOrder
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: SortOrder
    ABO_OBOROT_BRANDS_MONTH_AE?: SortOrder
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: SortOrder
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: SortOrder
    ABO_OBOROT_BRAND1?: SortOrder
    ABO_OBOROT_BRAND2?: SortOrder
    ABO_OBOROT_BRAND3?: SortOrder
    ABO_OBOROT_BRAND4?: SortOrder
    ABO_OBOROT_BRAND5?: SortOrder
    ABO_OBOROT_BRAND6?: SortOrder
    ABO_OBOROT_NEXT?: SortOrder
    ABO_SCORES_MONTH_PLAN_NEXT?: SortOrder
    ABO_ABA_REMZONA_QTY?: SortOrder
    ABO_OBOROT_PARTRA?: SortOrder
    ABO_SCORES_PARTRA?: SortOrder
  }

  export type GA_ANKETA_OBOROTMinOrderByAggregateInput = {
    ABO_ABA_ID?: SortOrder
    ABO_DATETIME?: SortOrder
    ABO_OBOROT_ALL?: SortOrder
    ABO_OBOROT_BRANDS_MONTH?: SortOrder
    ABO_OBOROT_AE?: SortOrder
    ABO_OBOROT_ROSSKO?: SortOrder
    ABO_OBOROT_ARKONA?: SortOrder
    ABO_OBOROT_AUTORUS?: SortOrder
    ABO_SCORES_MONTH_PLAN?: SortOrder
    ABO_SCORES_MONTH_FAKT?: SortOrder
    ABO_COUNT_ROSSKO?: SortOrder
    ABO_COUNT_AE?: SortOrder
    ABO_COUNT_ARKONA?: SortOrder
    ABO_COUNT_AUTORUS?: SortOrder
    ABO_OBOROT_BRANDS?: SortOrder
    ABO_OBOROT_BRAND_LOOK1?: SortOrder
    ABO_SCORES?: SortOrder
    ABO_OBOROT_BRAND_LOOK2?: SortOrder
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: SortOrder
    ABO_OBOROT_BRAND_LOOK2_AE?: SortOrder
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: SortOrder
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: SortOrder
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: SortOrder
    ABO_OBOROT_BRANDS_MONTH_AE?: SortOrder
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: SortOrder
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: SortOrder
    ABO_OBOROT_BRAND1?: SortOrder
    ABO_OBOROT_BRAND2?: SortOrder
    ABO_OBOROT_BRAND3?: SortOrder
    ABO_OBOROT_BRAND4?: SortOrder
    ABO_OBOROT_BRAND5?: SortOrder
    ABO_OBOROT_BRAND6?: SortOrder
    ABO_OBOROT_NEXT?: SortOrder
    ABO_SCORES_MONTH_PLAN_NEXT?: SortOrder
    ABO_ABA_REMZONA_QTY?: SortOrder
    ABO_OBOROT_PARTRA?: SortOrder
    ABO_SCORES_PARTRA?: SortOrder
  }

  export type GA_ANKETA_OBOROTSumOrderByAggregateInput = {
    ABO_ABA_ID?: SortOrder
    ABO_OBOROT_ALL?: SortOrder
    ABO_OBOROT_BRANDS_MONTH?: SortOrder
    ABO_OBOROT_AE?: SortOrder
    ABO_OBOROT_ROSSKO?: SortOrder
    ABO_OBOROT_ARKONA?: SortOrder
    ABO_OBOROT_AUTORUS?: SortOrder
    ABO_SCORES_MONTH_PLAN?: SortOrder
    ABO_SCORES_MONTH_FAKT?: SortOrder
    ABO_COUNT_ROSSKO?: SortOrder
    ABO_COUNT_AE?: SortOrder
    ABO_COUNT_ARKONA?: SortOrder
    ABO_COUNT_AUTORUS?: SortOrder
    ABO_OBOROT_BRANDS?: SortOrder
    ABO_OBOROT_BRAND_LOOK1?: SortOrder
    ABO_SCORES?: SortOrder
    ABO_OBOROT_BRAND_LOOK2?: SortOrder
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: SortOrder
    ABO_OBOROT_BRAND_LOOK2_AE?: SortOrder
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: SortOrder
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: SortOrder
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: SortOrder
    ABO_OBOROT_BRANDS_MONTH_AE?: SortOrder
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: SortOrder
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: SortOrder
    ABO_OBOROT_BRAND1?: SortOrder
    ABO_OBOROT_BRAND2?: SortOrder
    ABO_OBOROT_BRAND3?: SortOrder
    ABO_OBOROT_BRAND4?: SortOrder
    ABO_OBOROT_BRAND5?: SortOrder
    ABO_OBOROT_BRAND6?: SortOrder
    ABO_OBOROT_NEXT?: SortOrder
    ABO_SCORES_MONTH_PLAN_NEXT?: SortOrder
    ABO_ABA_REMZONA_QTY?: SortOrder
    ABO_OBOROT_PARTRA?: SortOrder
    ABO_SCORES_PARTRA?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type GA_WS_USERSCountOrderByAggregateInput = {
    WSU_ID?: SortOrder
    WSU_WSO_ID?: SortOrder
    WSU_EMAIL?: SortOrder
    WSU_NAME?: SortOrder
    WSU_FULL_NAME?: SortOrder
    WSU_PHONE?: SortOrder
    WSU_ADDRESS?: SortOrder
    WSU_PASSWD?: SortOrder
    WSU_ID_IN_DS?: SortOrder
    WSU_INN?: SortOrder
    WSU_PRICE_TYPE?: SortOrder
    WSU_GRP_ID?: SortOrder
    WSU_WS_ID?: SortOrder
    WSU_MOBILE?: SortOrder
    WSU_SHOW_SUP_ALIAS?: SortOrder
    WSU_IS_ZS?: SortOrder
    WSU_PASSWD_ENC?: SortOrder
    WSU_LOGIN_ENC?: SortOrder
    WSU_DATETIME_LAST_LOGIN?: SortOrder
    WSU_START_PAGE?: SortOrder
    WSU_SALT?: SortOrder
    WSU_TEMP_TICKET?: SortOrder
    WSU_TEMP_TICKET_DATETIME?: SortOrder
    WSU_DATETIME_CREATE?: SortOrder
  }

  export type GA_WS_USERSAvgOrderByAggregateInput = {
    WSU_ID?: SortOrder
    WSU_WSO_ID?: SortOrder
    WSU_ID_IN_DS?: SortOrder
    WSU_PRICE_TYPE?: SortOrder
    WSU_GRP_ID?: SortOrder
    WSU_WS_ID?: SortOrder
  }

  export type GA_WS_USERSMaxOrderByAggregateInput = {
    WSU_ID?: SortOrder
    WSU_WSO_ID?: SortOrder
    WSU_EMAIL?: SortOrder
    WSU_NAME?: SortOrder
    WSU_FULL_NAME?: SortOrder
    WSU_PHONE?: SortOrder
    WSU_ADDRESS?: SortOrder
    WSU_PASSWD?: SortOrder
    WSU_ID_IN_DS?: SortOrder
    WSU_INN?: SortOrder
    WSU_PRICE_TYPE?: SortOrder
    WSU_GRP_ID?: SortOrder
    WSU_WS_ID?: SortOrder
    WSU_MOBILE?: SortOrder
    WSU_SHOW_SUP_ALIAS?: SortOrder
    WSU_IS_ZS?: SortOrder
    WSU_PASSWD_ENC?: SortOrder
    WSU_LOGIN_ENC?: SortOrder
    WSU_DATETIME_LAST_LOGIN?: SortOrder
    WSU_START_PAGE?: SortOrder
    WSU_SALT?: SortOrder
    WSU_TEMP_TICKET?: SortOrder
    WSU_TEMP_TICKET_DATETIME?: SortOrder
    WSU_DATETIME_CREATE?: SortOrder
  }

  export type GA_WS_USERSMinOrderByAggregateInput = {
    WSU_ID?: SortOrder
    WSU_WSO_ID?: SortOrder
    WSU_EMAIL?: SortOrder
    WSU_NAME?: SortOrder
    WSU_FULL_NAME?: SortOrder
    WSU_PHONE?: SortOrder
    WSU_ADDRESS?: SortOrder
    WSU_PASSWD?: SortOrder
    WSU_ID_IN_DS?: SortOrder
    WSU_INN?: SortOrder
    WSU_PRICE_TYPE?: SortOrder
    WSU_GRP_ID?: SortOrder
    WSU_WS_ID?: SortOrder
    WSU_MOBILE?: SortOrder
    WSU_SHOW_SUP_ALIAS?: SortOrder
    WSU_IS_ZS?: SortOrder
    WSU_PASSWD_ENC?: SortOrder
    WSU_LOGIN_ENC?: SortOrder
    WSU_DATETIME_LAST_LOGIN?: SortOrder
    WSU_START_PAGE?: SortOrder
    WSU_SALT?: SortOrder
    WSU_TEMP_TICKET?: SortOrder
    WSU_TEMP_TICKET_DATETIME?: SortOrder
    WSU_DATETIME_CREATE?: SortOrder
  }

  export type GA_WS_USERSSumOrderByAggregateInput = {
    WSU_ID?: SortOrder
    WSU_WSO_ID?: SortOrder
    WSU_ID_IN_DS?: SortOrder
    WSU_PRICE_TYPE?: SortOrder
    WSU_GRP_ID?: SortOrder
    WSU_WS_ID?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use GA_ANKETA_ADDRDefaultArgs instead
     */
    export type GA_ANKETA_ADDRArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GA_ANKETA_ADDRDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GA_ANKETA_BASEDefaultArgs instead
     */
    export type GA_ANKETA_BASEArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GA_ANKETA_BASEDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GA_ANKETA_DOGOVORDefaultArgs instead
     */
    export type GA_ANKETA_DOGOVORArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GA_ANKETA_DOGOVORDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GA_ANKETA_OBOROTDefaultArgs instead
     */
    export type GA_ANKETA_OBOROTArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GA_ANKETA_OBOROTDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GA_WS_USERSDefaultArgs instead
     */
    export type GA_WS_USERSArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GA_WS_USERSDefaultArgs<ExtArgs>

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