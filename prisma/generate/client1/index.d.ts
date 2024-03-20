
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
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type GA_ANKETA_BASE = $Result.DefaultSelection<Prisma.$GA_ANKETA_BASEPayload>
/**
 * Model GA_ANKETA_BRAND
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type GA_ANKETA_BRAND = $Result.DefaultSelection<Prisma.$GA_ANKETA_BRANDPayload>
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
 * Model GA_ANKETA_SCORES
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type GA_ANKETA_SCORES = $Result.DefaultSelection<Prisma.$GA_ANKETA_SCORESPayload>
/**
 * Model GA_ANKETA_SCORES_HISTORY
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type GA_ANKETA_SCORES_HISTORY = $Result.DefaultSelection<Prisma.$GA_ANKETA_SCORES_HISTORYPayload>
/**
 * Model GA_ANKETA_SOREVNOVANIE
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type GA_ANKETA_SOREVNOVANIE = $Result.DefaultSelection<Prisma.$GA_ANKETA_SOREVNOVANIEPayload>
/**
 * Model GA_ANKETA_SUP
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type GA_ANKETA_SUP = $Result.DefaultSelection<Prisma.$GA_ANKETA_SUPPayload>
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
   * `prisma.gA_ANKETA_BRAND`: Exposes CRUD operations for the **GA_ANKETA_BRAND** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GA_ANKETA_BRANDS
    * const gA_ANKETA_BRANDS = await prisma.gA_ANKETA_BRAND.findMany()
    * ```
    */
  get gA_ANKETA_BRAND(): Prisma.GA_ANKETA_BRANDDelegate<ExtArgs>;

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
   * `prisma.gA_ANKETA_SCORES`: Exposes CRUD operations for the **GA_ANKETA_SCORES** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GA_ANKETA_SCORES
    * const gA_ANKETA_SCORES = await prisma.gA_ANKETA_SCORES.findMany()
    * ```
    */
  get gA_ANKETA_SCORES(): Prisma.GA_ANKETA_SCORESDelegate<ExtArgs>;

  /**
   * `prisma.gA_ANKETA_SCORES_HISTORY`: Exposes CRUD operations for the **GA_ANKETA_SCORES_HISTORY** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GA_ANKETA_SCORES_HISTORIES
    * const gA_ANKETA_SCORES_HISTORIES = await prisma.gA_ANKETA_SCORES_HISTORY.findMany()
    * ```
    */
  get gA_ANKETA_SCORES_HISTORY(): Prisma.GA_ANKETA_SCORES_HISTORYDelegate<ExtArgs>;

  /**
   * `prisma.gA_ANKETA_SOREVNOVANIE`: Exposes CRUD operations for the **GA_ANKETA_SOREVNOVANIE** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GA_ANKETA_SOREVNOVANIES
    * const gA_ANKETA_SOREVNOVANIES = await prisma.gA_ANKETA_SOREVNOVANIE.findMany()
    * ```
    */
  get gA_ANKETA_SOREVNOVANIE(): Prisma.GA_ANKETA_SOREVNOVANIEDelegate<ExtArgs>;

  /**
   * `prisma.gA_ANKETA_SUP`: Exposes CRUD operations for the **GA_ANKETA_SUP** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GA_ANKETA_SUPS
    * const gA_ANKETA_SUPS = await prisma.gA_ANKETA_SUP.findMany()
    * ```
    */
  get gA_ANKETA_SUP(): Prisma.GA_ANKETA_SUPDelegate<ExtArgs>;

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
   * Prisma Client JS version: 5.11.0
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
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
    GA_ANKETA_BRAND: 'GA_ANKETA_BRAND',
    GA_ANKETA_DOGOVOR: 'GA_ANKETA_DOGOVOR',
    GA_ANKETA_OBOROT: 'GA_ANKETA_OBOROT',
    GA_ANKETA_SCORES: 'GA_ANKETA_SCORES',
    GA_ANKETA_SCORES_HISTORY: 'GA_ANKETA_SCORES_HISTORY',
    GA_ANKETA_SOREVNOVANIE: 'GA_ANKETA_SOREVNOVANIE',
    GA_ANKETA_SUP: 'GA_ANKETA_SUP',
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
      modelProps: 'gA_ANKETA_ADDR' | 'gA_ANKETA_BASE' | 'gA_ANKETA_BRAND' | 'gA_ANKETA_DOGOVOR' | 'gA_ANKETA_OBOROT' | 'gA_ANKETA_SCORES' | 'gA_ANKETA_SCORES_HISTORY' | 'gA_ANKETA_SOREVNOVANIE' | 'gA_ANKETA_SUP' | 'gA_WS_USERS'
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
      GA_ANKETA_BRAND: {
        payload: Prisma.$GA_ANKETA_BRANDPayload<ExtArgs>
        fields: Prisma.GA_ANKETA_BRANDFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GA_ANKETA_BRANDFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_BRANDPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GA_ANKETA_BRANDFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_BRANDPayload>
          }
          findFirst: {
            args: Prisma.GA_ANKETA_BRANDFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_BRANDPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GA_ANKETA_BRANDFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_BRANDPayload>
          }
          findMany: {
            args: Prisma.GA_ANKETA_BRANDFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_BRANDPayload>[]
          }
          create: {
            args: Prisma.GA_ANKETA_BRANDCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_BRANDPayload>
          }
          createMany: {
            args: Prisma.GA_ANKETA_BRANDCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GA_ANKETA_BRANDDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_BRANDPayload>
          }
          update: {
            args: Prisma.GA_ANKETA_BRANDUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_BRANDPayload>
          }
          deleteMany: {
            args: Prisma.GA_ANKETA_BRANDDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GA_ANKETA_BRANDUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GA_ANKETA_BRANDUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_BRANDPayload>
          }
          aggregate: {
            args: Prisma.GA_ANKETA_BRANDAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGA_ANKETA_BRAND>
          }
          groupBy: {
            args: Prisma.GA_ANKETA_BRANDGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GA_ANKETA_BRANDGroupByOutputType>[]
          }
          count: {
            args: Prisma.GA_ANKETA_BRANDCountArgs<ExtArgs>,
            result: $Utils.Optional<GA_ANKETA_BRANDCountAggregateOutputType> | number
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
      GA_ANKETA_SCORES: {
        payload: Prisma.$GA_ANKETA_SCORESPayload<ExtArgs>
        fields: Prisma.GA_ANKETA_SCORESFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GA_ANKETA_SCORESFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SCORESPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GA_ANKETA_SCORESFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SCORESPayload>
          }
          findFirst: {
            args: Prisma.GA_ANKETA_SCORESFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SCORESPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GA_ANKETA_SCORESFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SCORESPayload>
          }
          findMany: {
            args: Prisma.GA_ANKETA_SCORESFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SCORESPayload>[]
          }
          create: {
            args: Prisma.GA_ANKETA_SCORESCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SCORESPayload>
          }
          createMany: {
            args: Prisma.GA_ANKETA_SCORESCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GA_ANKETA_SCORESDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SCORESPayload>
          }
          update: {
            args: Prisma.GA_ANKETA_SCORESUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SCORESPayload>
          }
          deleteMany: {
            args: Prisma.GA_ANKETA_SCORESDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GA_ANKETA_SCORESUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GA_ANKETA_SCORESUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SCORESPayload>
          }
          aggregate: {
            args: Prisma.GA_ANKETA_SCORESAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGA_ANKETA_SCORES>
          }
          groupBy: {
            args: Prisma.GA_ANKETA_SCORESGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GA_ANKETA_SCORESGroupByOutputType>[]
          }
          count: {
            args: Prisma.GA_ANKETA_SCORESCountArgs<ExtArgs>,
            result: $Utils.Optional<GA_ANKETA_SCORESCountAggregateOutputType> | number
          }
        }
      }
      GA_ANKETA_SCORES_HISTORY: {
        payload: Prisma.$GA_ANKETA_SCORES_HISTORYPayload<ExtArgs>
        fields: Prisma.GA_ANKETA_SCORES_HISTORYFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GA_ANKETA_SCORES_HISTORYFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SCORES_HISTORYPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GA_ANKETA_SCORES_HISTORYFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SCORES_HISTORYPayload>
          }
          findFirst: {
            args: Prisma.GA_ANKETA_SCORES_HISTORYFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SCORES_HISTORYPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GA_ANKETA_SCORES_HISTORYFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SCORES_HISTORYPayload>
          }
          findMany: {
            args: Prisma.GA_ANKETA_SCORES_HISTORYFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SCORES_HISTORYPayload>[]
          }
          create: {
            args: Prisma.GA_ANKETA_SCORES_HISTORYCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SCORES_HISTORYPayload>
          }
          createMany: {
            args: Prisma.GA_ANKETA_SCORES_HISTORYCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GA_ANKETA_SCORES_HISTORYDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SCORES_HISTORYPayload>
          }
          update: {
            args: Prisma.GA_ANKETA_SCORES_HISTORYUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SCORES_HISTORYPayload>
          }
          deleteMany: {
            args: Prisma.GA_ANKETA_SCORES_HISTORYDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GA_ANKETA_SCORES_HISTORYUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GA_ANKETA_SCORES_HISTORYUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SCORES_HISTORYPayload>
          }
          aggregate: {
            args: Prisma.GA_ANKETA_SCORES_HISTORYAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGA_ANKETA_SCORES_HISTORY>
          }
          groupBy: {
            args: Prisma.GA_ANKETA_SCORES_HISTORYGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GA_ANKETA_SCORES_HISTORYGroupByOutputType>[]
          }
          count: {
            args: Prisma.GA_ANKETA_SCORES_HISTORYCountArgs<ExtArgs>,
            result: $Utils.Optional<GA_ANKETA_SCORES_HISTORYCountAggregateOutputType> | number
          }
        }
      }
      GA_ANKETA_SOREVNOVANIE: {
        payload: Prisma.$GA_ANKETA_SOREVNOVANIEPayload<ExtArgs>
        fields: Prisma.GA_ANKETA_SOREVNOVANIEFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GA_ANKETA_SOREVNOVANIEFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SOREVNOVANIEPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GA_ANKETA_SOREVNOVANIEFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SOREVNOVANIEPayload>
          }
          findFirst: {
            args: Prisma.GA_ANKETA_SOREVNOVANIEFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SOREVNOVANIEPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GA_ANKETA_SOREVNOVANIEFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SOREVNOVANIEPayload>
          }
          findMany: {
            args: Prisma.GA_ANKETA_SOREVNOVANIEFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SOREVNOVANIEPayload>[]
          }
          create: {
            args: Prisma.GA_ANKETA_SOREVNOVANIECreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SOREVNOVANIEPayload>
          }
          createMany: {
            args: Prisma.GA_ANKETA_SOREVNOVANIECreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GA_ANKETA_SOREVNOVANIEDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SOREVNOVANIEPayload>
          }
          update: {
            args: Prisma.GA_ANKETA_SOREVNOVANIEUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SOREVNOVANIEPayload>
          }
          deleteMany: {
            args: Prisma.GA_ANKETA_SOREVNOVANIEDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GA_ANKETA_SOREVNOVANIEUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GA_ANKETA_SOREVNOVANIEUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SOREVNOVANIEPayload>
          }
          aggregate: {
            args: Prisma.GA_ANKETA_SOREVNOVANIEAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGA_ANKETA_SOREVNOVANIE>
          }
          groupBy: {
            args: Prisma.GA_ANKETA_SOREVNOVANIEGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GA_ANKETA_SOREVNOVANIEGroupByOutputType>[]
          }
          count: {
            args: Prisma.GA_ANKETA_SOREVNOVANIECountArgs<ExtArgs>,
            result: $Utils.Optional<GA_ANKETA_SOREVNOVANIECountAggregateOutputType> | number
          }
        }
      }
      GA_ANKETA_SUP: {
        payload: Prisma.$GA_ANKETA_SUPPayload<ExtArgs>
        fields: Prisma.GA_ANKETA_SUPFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GA_ANKETA_SUPFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SUPPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GA_ANKETA_SUPFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SUPPayload>
          }
          findFirst: {
            args: Prisma.GA_ANKETA_SUPFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SUPPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GA_ANKETA_SUPFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SUPPayload>
          }
          findMany: {
            args: Prisma.GA_ANKETA_SUPFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SUPPayload>[]
          }
          create: {
            args: Prisma.GA_ANKETA_SUPCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SUPPayload>
          }
          createMany: {
            args: Prisma.GA_ANKETA_SUPCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GA_ANKETA_SUPDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SUPPayload>
          }
          update: {
            args: Prisma.GA_ANKETA_SUPUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SUPPayload>
          }
          deleteMany: {
            args: Prisma.GA_ANKETA_SUPDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GA_ANKETA_SUPUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GA_ANKETA_SUPUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GA_ANKETA_SUPPayload>
          }
          aggregate: {
            args: Prisma.GA_ANKETA_SUPAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGA_ANKETA_SUP>
          }
          groupBy: {
            args: Prisma.GA_ANKETA_SUPGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GA_ANKETA_SUPGroupByOutputType>[]
          }
          count: {
            args: Prisma.GA_ANKETA_SUPCountArgs<ExtArgs>,
            result: $Utils.Optional<GA_ANKETA_SUPCountAggregateOutputType> | number
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    AAD_POSTCODE: string | null
  }

  export type GA_ANKETA_ADDRMaxAggregateOutputType = {
    AAD_ABA_ID: bigint | null
    AAD_SHIROTA: string | null
    AAD_DOLGOTA: string | null
    AAD_OBLAST: string | null
    AAD_GOROD: string | null
    AAD_ADDR: string | null
    AAD_POSTCODE: string | null
  }

  export type GA_ANKETA_ADDRCountAggregateOutputType = {
    AAD_ABA_ID: number
    AAD_SHIROTA: number
    AAD_DOLGOTA: number
    AAD_OBLAST: number
    AAD_GOROD: number
    AAD_ADDR: number
    AAD_POSTCODE: number
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
    AAD_POSTCODE?: true
  }

  export type GA_ANKETA_ADDRMaxAggregateInputType = {
    AAD_ABA_ID?: true
    AAD_SHIROTA?: true
    AAD_DOLGOTA?: true
    AAD_OBLAST?: true
    AAD_GOROD?: true
    AAD_ADDR?: true
    AAD_POSTCODE?: true
  }

  export type GA_ANKETA_ADDRCountAggregateInputType = {
    AAD_ABA_ID?: true
    AAD_SHIROTA?: true
    AAD_DOLGOTA?: true
    AAD_OBLAST?: true
    AAD_GOROD?: true
    AAD_ADDR?: true
    AAD_POSTCODE?: true
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
    AAD_SHIROTA: string | null
    AAD_DOLGOTA: string | null
    AAD_OBLAST: string | null
    AAD_GOROD: string | null
    AAD_ADDR: string | null
    AAD_POSTCODE: string | null
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
    AAD_POSTCODE?: boolean
  }, ExtArgs["result"]["gA_ANKETA_ADDR"]>

  export type GA_ANKETA_ADDRSelectScalar = {
    AAD_ABA_ID?: boolean
    AAD_SHIROTA?: boolean
    AAD_DOLGOTA?: boolean
    AAD_OBLAST?: boolean
    AAD_GOROD?: boolean
    AAD_ADDR?: boolean
    AAD_POSTCODE?: boolean
  }


  export type $GA_ANKETA_ADDRPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GA_ANKETA_ADDR"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      AAD_ABA_ID: bigint
      AAD_SHIROTA: string | null
      AAD_DOLGOTA: string | null
      AAD_OBLAST: string | null
      AAD_GOROD: string | null
      AAD_ADDR: string | null
      AAD_POSTCODE: string | null
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
    readonly AAD_POSTCODE: FieldRef<"GA_ANKETA_ADDR", 'String'>
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
    ABA_WSU_ID: bigint | null
    ABA_STO_NAME: string | null
    ABA_STO_ID1: string | null
    ABA_REMZONA_QTY: number | null
    ABA_ENABLED: boolean | null
    ABA_PHONE: string | null
    ABA_INN: string | null
    ABA_DATETIME_CREATED: Date | null
    ABA_DATETIME_UPDATED: Date | null
    ABA_ID: bigint
    ABA_DATETIME: Date | null
    ABA_STO_ID2: string | null
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
      ABA_WSU_ID: bigint | null
      ABA_STO_NAME: string | null
      ABA_STO_ID1: string | null
      ABA_REMZONA_QTY: number | null
      ABA_ENABLED: boolean | null
      ABA_PHONE: string | null
      ABA_INN: string | null
      ABA_DATETIME_CREATED: Date | null
      ABA_DATETIME_UPDATED: Date | null
      ABA_ID: bigint
      ABA_DATETIME: Date | null
      ABA_STO_ID2: string | null
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
   * Model GA_ANKETA_BRAND
   */

  export type AggregateGA_ANKETA_BRAND = {
    _count: GA_ANKETA_BRANDCountAggregateOutputType | null
    _avg: GA_ANKETA_BRANDAvgAggregateOutputType | null
    _sum: GA_ANKETA_BRANDSumAggregateOutputType | null
    _min: GA_ANKETA_BRANDMinAggregateOutputType | null
    _max: GA_ANKETA_BRANDMaxAggregateOutputType | null
  }

  export type GA_ANKETA_BRANDAvgAggregateOutputType = {
    ABR_ABA_ID: number | null
  }

  export type GA_ANKETA_BRANDSumAggregateOutputType = {
    ABR_ABA_ID: bigint | null
  }

  export type GA_ANKETA_BRANDMinAggregateOutputType = {
    ABR_ABA_ID: bigint | null
    ABR_STATUS: boolean | null
    ABR_DATETIME: Date | null
    ABR_HALF_STATUS: boolean | null
    ABR_VYVESKA_STATUS: boolean | null
    ABR_KOROB_STATUS: boolean | null
  }

  export type GA_ANKETA_BRANDMaxAggregateOutputType = {
    ABR_ABA_ID: bigint | null
    ABR_STATUS: boolean | null
    ABR_DATETIME: Date | null
    ABR_HALF_STATUS: boolean | null
    ABR_VYVESKA_STATUS: boolean | null
    ABR_KOROB_STATUS: boolean | null
  }

  export type GA_ANKETA_BRANDCountAggregateOutputType = {
    ABR_ABA_ID: number
    ABR_STATUS: number
    ABR_DATETIME: number
    ABR_HALF_STATUS: number
    ABR_VYVESKA_STATUS: number
    ABR_KOROB_STATUS: number
    _all: number
  }


  export type GA_ANKETA_BRANDAvgAggregateInputType = {
    ABR_ABA_ID?: true
  }

  export type GA_ANKETA_BRANDSumAggregateInputType = {
    ABR_ABA_ID?: true
  }

  export type GA_ANKETA_BRANDMinAggregateInputType = {
    ABR_ABA_ID?: true
    ABR_STATUS?: true
    ABR_DATETIME?: true
    ABR_HALF_STATUS?: true
    ABR_VYVESKA_STATUS?: true
    ABR_KOROB_STATUS?: true
  }

  export type GA_ANKETA_BRANDMaxAggregateInputType = {
    ABR_ABA_ID?: true
    ABR_STATUS?: true
    ABR_DATETIME?: true
    ABR_HALF_STATUS?: true
    ABR_VYVESKA_STATUS?: true
    ABR_KOROB_STATUS?: true
  }

  export type GA_ANKETA_BRANDCountAggregateInputType = {
    ABR_ABA_ID?: true
    ABR_STATUS?: true
    ABR_DATETIME?: true
    ABR_HALF_STATUS?: true
    ABR_VYVESKA_STATUS?: true
    ABR_KOROB_STATUS?: true
    _all?: true
  }

  export type GA_ANKETA_BRANDAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GA_ANKETA_BRAND to aggregate.
     */
    where?: GA_ANKETA_BRANDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_BRANDS to fetch.
     */
    orderBy?: GA_ANKETA_BRANDOrderByWithRelationInput | GA_ANKETA_BRANDOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GA_ANKETA_BRANDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_BRANDS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_BRANDS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GA_ANKETA_BRANDS
    **/
    _count?: true | GA_ANKETA_BRANDCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GA_ANKETA_BRANDAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GA_ANKETA_BRANDSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GA_ANKETA_BRANDMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GA_ANKETA_BRANDMaxAggregateInputType
  }

  export type GetGA_ANKETA_BRANDAggregateType<T extends GA_ANKETA_BRANDAggregateArgs> = {
        [P in keyof T & keyof AggregateGA_ANKETA_BRAND]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGA_ANKETA_BRAND[P]>
      : GetScalarType<T[P], AggregateGA_ANKETA_BRAND[P]>
  }




  export type GA_ANKETA_BRANDGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GA_ANKETA_BRANDWhereInput
    orderBy?: GA_ANKETA_BRANDOrderByWithAggregationInput | GA_ANKETA_BRANDOrderByWithAggregationInput[]
    by: GA_ANKETA_BRANDScalarFieldEnum[] | GA_ANKETA_BRANDScalarFieldEnum
    having?: GA_ANKETA_BRANDScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GA_ANKETA_BRANDCountAggregateInputType | true
    _avg?: GA_ANKETA_BRANDAvgAggregateInputType
    _sum?: GA_ANKETA_BRANDSumAggregateInputType
    _min?: GA_ANKETA_BRANDMinAggregateInputType
    _max?: GA_ANKETA_BRANDMaxAggregateInputType
  }

  export type GA_ANKETA_BRANDGroupByOutputType = {
    ABR_ABA_ID: bigint
    ABR_STATUS: boolean | null
    ABR_DATETIME: Date | null
    ABR_HALF_STATUS: boolean | null
    ABR_VYVESKA_STATUS: boolean | null
    ABR_KOROB_STATUS: boolean | null
    _count: GA_ANKETA_BRANDCountAggregateOutputType | null
    _avg: GA_ANKETA_BRANDAvgAggregateOutputType | null
    _sum: GA_ANKETA_BRANDSumAggregateOutputType | null
    _min: GA_ANKETA_BRANDMinAggregateOutputType | null
    _max: GA_ANKETA_BRANDMaxAggregateOutputType | null
  }

  type GetGA_ANKETA_BRANDGroupByPayload<T extends GA_ANKETA_BRANDGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GA_ANKETA_BRANDGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GA_ANKETA_BRANDGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GA_ANKETA_BRANDGroupByOutputType[P]>
            : GetScalarType<T[P], GA_ANKETA_BRANDGroupByOutputType[P]>
        }
      >
    >


  export type GA_ANKETA_BRANDSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ABR_ABA_ID?: boolean
    ABR_STATUS?: boolean
    ABR_DATETIME?: boolean
    ABR_HALF_STATUS?: boolean
    ABR_VYVESKA_STATUS?: boolean
    ABR_KOROB_STATUS?: boolean
  }, ExtArgs["result"]["gA_ANKETA_BRAND"]>

  export type GA_ANKETA_BRANDSelectScalar = {
    ABR_ABA_ID?: boolean
    ABR_STATUS?: boolean
    ABR_DATETIME?: boolean
    ABR_HALF_STATUS?: boolean
    ABR_VYVESKA_STATUS?: boolean
    ABR_KOROB_STATUS?: boolean
  }


  export type $GA_ANKETA_BRANDPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GA_ANKETA_BRAND"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ABR_ABA_ID: bigint
      ABR_STATUS: boolean | null
      ABR_DATETIME: Date | null
      ABR_HALF_STATUS: boolean | null
      ABR_VYVESKA_STATUS: boolean | null
      ABR_KOROB_STATUS: boolean | null
    }, ExtArgs["result"]["gA_ANKETA_BRAND"]>
    composites: {}
  }


  type GA_ANKETA_BRANDGetPayload<S extends boolean | null | undefined | GA_ANKETA_BRANDDefaultArgs> = $Result.GetResult<Prisma.$GA_ANKETA_BRANDPayload, S>

  type GA_ANKETA_BRANDCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GA_ANKETA_BRANDFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GA_ANKETA_BRANDCountAggregateInputType | true
    }

  export interface GA_ANKETA_BRANDDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GA_ANKETA_BRAND'], meta: { name: 'GA_ANKETA_BRAND' } }
    /**
     * Find zero or one GA_ANKETA_BRAND that matches the filter.
     * @param {GA_ANKETA_BRANDFindUniqueArgs} args - Arguments to find a GA_ANKETA_BRAND
     * @example
     * // Get one GA_ANKETA_BRAND
     * const gA_ANKETA_BRAND = await prisma.gA_ANKETA_BRAND.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GA_ANKETA_BRANDFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_BRANDFindUniqueArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_BRANDClient<$Result.GetResult<Prisma.$GA_ANKETA_BRANDPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GA_ANKETA_BRAND that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GA_ANKETA_BRANDFindUniqueOrThrowArgs} args - Arguments to find a GA_ANKETA_BRAND
     * @example
     * // Get one GA_ANKETA_BRAND
     * const gA_ANKETA_BRAND = await prisma.gA_ANKETA_BRAND.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GA_ANKETA_BRANDFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_BRANDFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_BRANDClient<$Result.GetResult<Prisma.$GA_ANKETA_BRANDPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GA_ANKETA_BRAND that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_BRANDFindFirstArgs} args - Arguments to find a GA_ANKETA_BRAND
     * @example
     * // Get one GA_ANKETA_BRAND
     * const gA_ANKETA_BRAND = await prisma.gA_ANKETA_BRAND.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GA_ANKETA_BRANDFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_BRANDFindFirstArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_BRANDClient<$Result.GetResult<Prisma.$GA_ANKETA_BRANDPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GA_ANKETA_BRAND that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_BRANDFindFirstOrThrowArgs} args - Arguments to find a GA_ANKETA_BRAND
     * @example
     * // Get one GA_ANKETA_BRAND
     * const gA_ANKETA_BRAND = await prisma.gA_ANKETA_BRAND.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GA_ANKETA_BRANDFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_BRANDFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_BRANDClient<$Result.GetResult<Prisma.$GA_ANKETA_BRANDPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GA_ANKETA_BRANDS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_BRANDFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GA_ANKETA_BRANDS
     * const gA_ANKETA_BRANDS = await prisma.gA_ANKETA_BRAND.findMany()
     * 
     * // Get first 10 GA_ANKETA_BRANDS
     * const gA_ANKETA_BRANDS = await prisma.gA_ANKETA_BRAND.findMany({ take: 10 })
     * 
     * // Only select the `ABR_ABA_ID`
     * const gA_ANKETA_BRANDWithABR_ABA_IDOnly = await prisma.gA_ANKETA_BRAND.findMany({ select: { ABR_ABA_ID: true } })
     * 
    **/
    findMany<T extends GA_ANKETA_BRANDFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_BRANDFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GA_ANKETA_BRANDPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GA_ANKETA_BRAND.
     * @param {GA_ANKETA_BRANDCreateArgs} args - Arguments to create a GA_ANKETA_BRAND.
     * @example
     * // Create one GA_ANKETA_BRAND
     * const GA_ANKETA_BRAND = await prisma.gA_ANKETA_BRAND.create({
     *   data: {
     *     // ... data to create a GA_ANKETA_BRAND
     *   }
     * })
     * 
    **/
    create<T extends GA_ANKETA_BRANDCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_BRANDCreateArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_BRANDClient<$Result.GetResult<Prisma.$GA_ANKETA_BRANDPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GA_ANKETA_BRANDS.
     *     @param {GA_ANKETA_BRANDCreateManyArgs} args - Arguments to create many GA_ANKETA_BRANDS.
     *     @example
     *     // Create many GA_ANKETA_BRANDS
     *     const gA_ANKETA_BRAND = await prisma.gA_ANKETA_BRAND.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GA_ANKETA_BRANDCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_BRANDCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GA_ANKETA_BRAND.
     * @param {GA_ANKETA_BRANDDeleteArgs} args - Arguments to delete one GA_ANKETA_BRAND.
     * @example
     * // Delete one GA_ANKETA_BRAND
     * const GA_ANKETA_BRAND = await prisma.gA_ANKETA_BRAND.delete({
     *   where: {
     *     // ... filter to delete one GA_ANKETA_BRAND
     *   }
     * })
     * 
    **/
    delete<T extends GA_ANKETA_BRANDDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_BRANDDeleteArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_BRANDClient<$Result.GetResult<Prisma.$GA_ANKETA_BRANDPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GA_ANKETA_BRAND.
     * @param {GA_ANKETA_BRANDUpdateArgs} args - Arguments to update one GA_ANKETA_BRAND.
     * @example
     * // Update one GA_ANKETA_BRAND
     * const gA_ANKETA_BRAND = await prisma.gA_ANKETA_BRAND.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GA_ANKETA_BRANDUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_BRANDUpdateArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_BRANDClient<$Result.GetResult<Prisma.$GA_ANKETA_BRANDPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GA_ANKETA_BRANDS.
     * @param {GA_ANKETA_BRANDDeleteManyArgs} args - Arguments to filter GA_ANKETA_BRANDS to delete.
     * @example
     * // Delete a few GA_ANKETA_BRANDS
     * const { count } = await prisma.gA_ANKETA_BRAND.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GA_ANKETA_BRANDDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_BRANDDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GA_ANKETA_BRANDS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_BRANDUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GA_ANKETA_BRANDS
     * const gA_ANKETA_BRAND = await prisma.gA_ANKETA_BRAND.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GA_ANKETA_BRANDUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_BRANDUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GA_ANKETA_BRAND.
     * @param {GA_ANKETA_BRANDUpsertArgs} args - Arguments to update or create a GA_ANKETA_BRAND.
     * @example
     * // Update or create a GA_ANKETA_BRAND
     * const gA_ANKETA_BRAND = await prisma.gA_ANKETA_BRAND.upsert({
     *   create: {
     *     // ... data to create a GA_ANKETA_BRAND
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GA_ANKETA_BRAND we want to update
     *   }
     * })
    **/
    upsert<T extends GA_ANKETA_BRANDUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_BRANDUpsertArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_BRANDClient<$Result.GetResult<Prisma.$GA_ANKETA_BRANDPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of GA_ANKETA_BRANDS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_BRANDCountArgs} args - Arguments to filter GA_ANKETA_BRANDS to count.
     * @example
     * // Count the number of GA_ANKETA_BRANDS
     * const count = await prisma.gA_ANKETA_BRAND.count({
     *   where: {
     *     // ... the filter for the GA_ANKETA_BRANDS we want to count
     *   }
     * })
    **/
    count<T extends GA_ANKETA_BRANDCountArgs>(
      args?: Subset<T, GA_ANKETA_BRANDCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GA_ANKETA_BRANDCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GA_ANKETA_BRAND.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_BRANDAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GA_ANKETA_BRANDAggregateArgs>(args: Subset<T, GA_ANKETA_BRANDAggregateArgs>): Prisma.PrismaPromise<GetGA_ANKETA_BRANDAggregateType<T>>

    /**
     * Group by GA_ANKETA_BRAND.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_BRANDGroupByArgs} args - Group by arguments.
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
      T extends GA_ANKETA_BRANDGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GA_ANKETA_BRANDGroupByArgs['orderBy'] }
        : { orderBy?: GA_ANKETA_BRANDGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GA_ANKETA_BRANDGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGA_ANKETA_BRANDGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GA_ANKETA_BRAND model
   */
  readonly fields: GA_ANKETA_BRANDFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GA_ANKETA_BRAND.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GA_ANKETA_BRANDClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the GA_ANKETA_BRAND model
   */ 
  interface GA_ANKETA_BRANDFieldRefs {
    readonly ABR_ABA_ID: FieldRef<"GA_ANKETA_BRAND", 'BigInt'>
    readonly ABR_STATUS: FieldRef<"GA_ANKETA_BRAND", 'Boolean'>
    readonly ABR_DATETIME: FieldRef<"GA_ANKETA_BRAND", 'DateTime'>
    readonly ABR_HALF_STATUS: FieldRef<"GA_ANKETA_BRAND", 'Boolean'>
    readonly ABR_VYVESKA_STATUS: FieldRef<"GA_ANKETA_BRAND", 'Boolean'>
    readonly ABR_KOROB_STATUS: FieldRef<"GA_ANKETA_BRAND", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * GA_ANKETA_BRAND findUnique
   */
  export type GA_ANKETA_BRANDFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_BRAND
     */
    select?: GA_ANKETA_BRANDSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_BRAND to fetch.
     */
    where: GA_ANKETA_BRANDWhereUniqueInput
  }


  /**
   * GA_ANKETA_BRAND findUniqueOrThrow
   */
  export type GA_ANKETA_BRANDFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_BRAND
     */
    select?: GA_ANKETA_BRANDSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_BRAND to fetch.
     */
    where: GA_ANKETA_BRANDWhereUniqueInput
  }


  /**
   * GA_ANKETA_BRAND findFirst
   */
  export type GA_ANKETA_BRANDFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_BRAND
     */
    select?: GA_ANKETA_BRANDSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_BRAND to fetch.
     */
    where?: GA_ANKETA_BRANDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_BRANDS to fetch.
     */
    orderBy?: GA_ANKETA_BRANDOrderByWithRelationInput | GA_ANKETA_BRANDOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GA_ANKETA_BRANDS.
     */
    cursor?: GA_ANKETA_BRANDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_BRANDS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_BRANDS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GA_ANKETA_BRANDS.
     */
    distinct?: GA_ANKETA_BRANDScalarFieldEnum | GA_ANKETA_BRANDScalarFieldEnum[]
  }


  /**
   * GA_ANKETA_BRAND findFirstOrThrow
   */
  export type GA_ANKETA_BRANDFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_BRAND
     */
    select?: GA_ANKETA_BRANDSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_BRAND to fetch.
     */
    where?: GA_ANKETA_BRANDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_BRANDS to fetch.
     */
    orderBy?: GA_ANKETA_BRANDOrderByWithRelationInput | GA_ANKETA_BRANDOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GA_ANKETA_BRANDS.
     */
    cursor?: GA_ANKETA_BRANDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_BRANDS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_BRANDS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GA_ANKETA_BRANDS.
     */
    distinct?: GA_ANKETA_BRANDScalarFieldEnum | GA_ANKETA_BRANDScalarFieldEnum[]
  }


  /**
   * GA_ANKETA_BRAND findMany
   */
  export type GA_ANKETA_BRANDFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_BRAND
     */
    select?: GA_ANKETA_BRANDSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_BRANDS to fetch.
     */
    where?: GA_ANKETA_BRANDWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_BRANDS to fetch.
     */
    orderBy?: GA_ANKETA_BRANDOrderByWithRelationInput | GA_ANKETA_BRANDOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GA_ANKETA_BRANDS.
     */
    cursor?: GA_ANKETA_BRANDWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_BRANDS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_BRANDS.
     */
    skip?: number
    distinct?: GA_ANKETA_BRANDScalarFieldEnum | GA_ANKETA_BRANDScalarFieldEnum[]
  }


  /**
   * GA_ANKETA_BRAND create
   */
  export type GA_ANKETA_BRANDCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_BRAND
     */
    select?: GA_ANKETA_BRANDSelect<ExtArgs> | null
    /**
     * The data needed to create a GA_ANKETA_BRAND.
     */
    data: XOR<GA_ANKETA_BRANDCreateInput, GA_ANKETA_BRANDUncheckedCreateInput>
  }


  /**
   * GA_ANKETA_BRAND createMany
   */
  export type GA_ANKETA_BRANDCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GA_ANKETA_BRANDS.
     */
    data: GA_ANKETA_BRANDCreateManyInput | GA_ANKETA_BRANDCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * GA_ANKETA_BRAND update
   */
  export type GA_ANKETA_BRANDUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_BRAND
     */
    select?: GA_ANKETA_BRANDSelect<ExtArgs> | null
    /**
     * The data needed to update a GA_ANKETA_BRAND.
     */
    data: XOR<GA_ANKETA_BRANDUpdateInput, GA_ANKETA_BRANDUncheckedUpdateInput>
    /**
     * Choose, which GA_ANKETA_BRAND to update.
     */
    where: GA_ANKETA_BRANDWhereUniqueInput
  }


  /**
   * GA_ANKETA_BRAND updateMany
   */
  export type GA_ANKETA_BRANDUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GA_ANKETA_BRANDS.
     */
    data: XOR<GA_ANKETA_BRANDUpdateManyMutationInput, GA_ANKETA_BRANDUncheckedUpdateManyInput>
    /**
     * Filter which GA_ANKETA_BRANDS to update
     */
    where?: GA_ANKETA_BRANDWhereInput
  }


  /**
   * GA_ANKETA_BRAND upsert
   */
  export type GA_ANKETA_BRANDUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_BRAND
     */
    select?: GA_ANKETA_BRANDSelect<ExtArgs> | null
    /**
     * The filter to search for the GA_ANKETA_BRAND to update in case it exists.
     */
    where: GA_ANKETA_BRANDWhereUniqueInput
    /**
     * In case the GA_ANKETA_BRAND found by the `where` argument doesn't exist, create a new GA_ANKETA_BRAND with this data.
     */
    create: XOR<GA_ANKETA_BRANDCreateInput, GA_ANKETA_BRANDUncheckedCreateInput>
    /**
     * In case the GA_ANKETA_BRAND was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GA_ANKETA_BRANDUpdateInput, GA_ANKETA_BRANDUncheckedUpdateInput>
  }


  /**
   * GA_ANKETA_BRAND delete
   */
  export type GA_ANKETA_BRANDDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_BRAND
     */
    select?: GA_ANKETA_BRANDSelect<ExtArgs> | null
    /**
     * Filter which GA_ANKETA_BRAND to delete.
     */
    where: GA_ANKETA_BRANDWhereUniqueInput
  }


  /**
   * GA_ANKETA_BRAND deleteMany
   */
  export type GA_ANKETA_BRANDDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GA_ANKETA_BRANDS to delete
     */
    where?: GA_ANKETA_BRANDWhereInput
  }


  /**
   * GA_ANKETA_BRAND without action
   */
  export type GA_ANKETA_BRANDDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_BRAND
     */
    select?: GA_ANKETA_BRANDSelect<ExtArgs> | null
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
    ADO_NAME1: string | null
    ADO_NAME2: string | null
    ADO_NAME3: string | null
    ADO_PHONE: string | null
    ADO_EMAIL: string | null
    ADO_DATETIME: Date | null
    ADO_STATUS: boolean | null
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
      ADO_NAME1: string | null
      ADO_NAME2: string | null
      ADO_NAME3: string | null
      ADO_PHONE: string | null
      ADO_EMAIL: string | null
      ADO_DATETIME: Date | null
      ADO_STATUS: boolean | null
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
   * Model GA_ANKETA_SCORES
   */

  export type AggregateGA_ANKETA_SCORES = {
    _count: GA_ANKETA_SCORESCountAggregateOutputType | null
    _avg: GA_ANKETA_SCORESAvgAggregateOutputType | null
    _sum: GA_ANKETA_SCORESSumAggregateOutputType | null
    _min: GA_ANKETA_SCORESMinAggregateOutputType | null
    _max: GA_ANKETA_SCORESMaxAggregateOutputType | null
  }

  export type GA_ANKETA_SCORESAvgAggregateOutputType = {
    ANS_WSU_ID: number | null
    ANS_SCORES: number | null
  }

  export type GA_ANKETA_SCORESSumAggregateOutputType = {
    ANS_WSU_ID: bigint | null
    ANS_SCORES: number | null
  }

  export type GA_ANKETA_SCORESMinAggregateOutputType = {
    ANS_WSU_ID: bigint | null
    ANS_SCORES: number | null
    ANS_DATETIME: Date | null
    ANS_ISSHOW: boolean | null
  }

  export type GA_ANKETA_SCORESMaxAggregateOutputType = {
    ANS_WSU_ID: bigint | null
    ANS_SCORES: number | null
    ANS_DATETIME: Date | null
    ANS_ISSHOW: boolean | null
  }

  export type GA_ANKETA_SCORESCountAggregateOutputType = {
    ANS_WSU_ID: number
    ANS_SCORES: number
    ANS_DATETIME: number
    ANS_ISSHOW: number
    _all: number
  }


  export type GA_ANKETA_SCORESAvgAggregateInputType = {
    ANS_WSU_ID?: true
    ANS_SCORES?: true
  }

  export type GA_ANKETA_SCORESSumAggregateInputType = {
    ANS_WSU_ID?: true
    ANS_SCORES?: true
  }

  export type GA_ANKETA_SCORESMinAggregateInputType = {
    ANS_WSU_ID?: true
    ANS_SCORES?: true
    ANS_DATETIME?: true
    ANS_ISSHOW?: true
  }

  export type GA_ANKETA_SCORESMaxAggregateInputType = {
    ANS_WSU_ID?: true
    ANS_SCORES?: true
    ANS_DATETIME?: true
    ANS_ISSHOW?: true
  }

  export type GA_ANKETA_SCORESCountAggregateInputType = {
    ANS_WSU_ID?: true
    ANS_SCORES?: true
    ANS_DATETIME?: true
    ANS_ISSHOW?: true
    _all?: true
  }

  export type GA_ANKETA_SCORESAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GA_ANKETA_SCORES to aggregate.
     */
    where?: GA_ANKETA_SCORESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_SCORES to fetch.
     */
    orderBy?: GA_ANKETA_SCORESOrderByWithRelationInput | GA_ANKETA_SCORESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GA_ANKETA_SCORESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_SCORES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_SCORES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GA_ANKETA_SCORES
    **/
    _count?: true | GA_ANKETA_SCORESCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GA_ANKETA_SCORESAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GA_ANKETA_SCORESSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GA_ANKETA_SCORESMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GA_ANKETA_SCORESMaxAggregateInputType
  }

  export type GetGA_ANKETA_SCORESAggregateType<T extends GA_ANKETA_SCORESAggregateArgs> = {
        [P in keyof T & keyof AggregateGA_ANKETA_SCORES]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGA_ANKETA_SCORES[P]>
      : GetScalarType<T[P], AggregateGA_ANKETA_SCORES[P]>
  }




  export type GA_ANKETA_SCORESGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GA_ANKETA_SCORESWhereInput
    orderBy?: GA_ANKETA_SCORESOrderByWithAggregationInput | GA_ANKETA_SCORESOrderByWithAggregationInput[]
    by: GA_ANKETA_SCORESScalarFieldEnum[] | GA_ANKETA_SCORESScalarFieldEnum
    having?: GA_ANKETA_SCORESScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GA_ANKETA_SCORESCountAggregateInputType | true
    _avg?: GA_ANKETA_SCORESAvgAggregateInputType
    _sum?: GA_ANKETA_SCORESSumAggregateInputType
    _min?: GA_ANKETA_SCORESMinAggregateInputType
    _max?: GA_ANKETA_SCORESMaxAggregateInputType
  }

  export type GA_ANKETA_SCORESGroupByOutputType = {
    ANS_WSU_ID: bigint
    ANS_SCORES: number | null
    ANS_DATETIME: Date | null
    ANS_ISSHOW: boolean | null
    _count: GA_ANKETA_SCORESCountAggregateOutputType | null
    _avg: GA_ANKETA_SCORESAvgAggregateOutputType | null
    _sum: GA_ANKETA_SCORESSumAggregateOutputType | null
    _min: GA_ANKETA_SCORESMinAggregateOutputType | null
    _max: GA_ANKETA_SCORESMaxAggregateOutputType | null
  }

  type GetGA_ANKETA_SCORESGroupByPayload<T extends GA_ANKETA_SCORESGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GA_ANKETA_SCORESGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GA_ANKETA_SCORESGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GA_ANKETA_SCORESGroupByOutputType[P]>
            : GetScalarType<T[P], GA_ANKETA_SCORESGroupByOutputType[P]>
        }
      >
    >


  export type GA_ANKETA_SCORESSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ANS_WSU_ID?: boolean
    ANS_SCORES?: boolean
    ANS_DATETIME?: boolean
    ANS_ISSHOW?: boolean
  }, ExtArgs["result"]["gA_ANKETA_SCORES"]>

  export type GA_ANKETA_SCORESSelectScalar = {
    ANS_WSU_ID?: boolean
    ANS_SCORES?: boolean
    ANS_DATETIME?: boolean
    ANS_ISSHOW?: boolean
  }


  export type $GA_ANKETA_SCORESPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GA_ANKETA_SCORES"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ANS_WSU_ID: bigint
      ANS_SCORES: number | null
      ANS_DATETIME: Date | null
      ANS_ISSHOW: boolean | null
    }, ExtArgs["result"]["gA_ANKETA_SCORES"]>
    composites: {}
  }


  type GA_ANKETA_SCORESGetPayload<S extends boolean | null | undefined | GA_ANKETA_SCORESDefaultArgs> = $Result.GetResult<Prisma.$GA_ANKETA_SCORESPayload, S>

  type GA_ANKETA_SCORESCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GA_ANKETA_SCORESFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GA_ANKETA_SCORESCountAggregateInputType | true
    }

  export interface GA_ANKETA_SCORESDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GA_ANKETA_SCORES'], meta: { name: 'GA_ANKETA_SCORES' } }
    /**
     * Find zero or one GA_ANKETA_SCORES that matches the filter.
     * @param {GA_ANKETA_SCORESFindUniqueArgs} args - Arguments to find a GA_ANKETA_SCORES
     * @example
     * // Get one GA_ANKETA_SCORES
     * const gA_ANKETA_SCORES = await prisma.gA_ANKETA_SCORES.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GA_ANKETA_SCORESFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_SCORESFindUniqueArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SCORESClient<$Result.GetResult<Prisma.$GA_ANKETA_SCORESPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GA_ANKETA_SCORES that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GA_ANKETA_SCORESFindUniqueOrThrowArgs} args - Arguments to find a GA_ANKETA_SCORES
     * @example
     * // Get one GA_ANKETA_SCORES
     * const gA_ANKETA_SCORES = await prisma.gA_ANKETA_SCORES.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GA_ANKETA_SCORESFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_SCORESFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SCORESClient<$Result.GetResult<Prisma.$GA_ANKETA_SCORESPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GA_ANKETA_SCORES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_SCORESFindFirstArgs} args - Arguments to find a GA_ANKETA_SCORES
     * @example
     * // Get one GA_ANKETA_SCORES
     * const gA_ANKETA_SCORES = await prisma.gA_ANKETA_SCORES.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GA_ANKETA_SCORESFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_SCORESFindFirstArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SCORESClient<$Result.GetResult<Prisma.$GA_ANKETA_SCORESPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GA_ANKETA_SCORES that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_SCORESFindFirstOrThrowArgs} args - Arguments to find a GA_ANKETA_SCORES
     * @example
     * // Get one GA_ANKETA_SCORES
     * const gA_ANKETA_SCORES = await prisma.gA_ANKETA_SCORES.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GA_ANKETA_SCORESFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_SCORESFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SCORESClient<$Result.GetResult<Prisma.$GA_ANKETA_SCORESPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GA_ANKETA_SCORES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_SCORESFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GA_ANKETA_SCORES
     * const gA_ANKETA_SCORES = await prisma.gA_ANKETA_SCORES.findMany()
     * 
     * // Get first 10 GA_ANKETA_SCORES
     * const gA_ANKETA_SCORES = await prisma.gA_ANKETA_SCORES.findMany({ take: 10 })
     * 
     * // Only select the `ANS_WSU_ID`
     * const gA_ANKETA_SCORESWithANS_WSU_IDOnly = await prisma.gA_ANKETA_SCORES.findMany({ select: { ANS_WSU_ID: true } })
     * 
    **/
    findMany<T extends GA_ANKETA_SCORESFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_SCORESFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GA_ANKETA_SCORESPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GA_ANKETA_SCORES.
     * @param {GA_ANKETA_SCORESCreateArgs} args - Arguments to create a GA_ANKETA_SCORES.
     * @example
     * // Create one GA_ANKETA_SCORES
     * const GA_ANKETA_SCORES = await prisma.gA_ANKETA_SCORES.create({
     *   data: {
     *     // ... data to create a GA_ANKETA_SCORES
     *   }
     * })
     * 
    **/
    create<T extends GA_ANKETA_SCORESCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_SCORESCreateArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SCORESClient<$Result.GetResult<Prisma.$GA_ANKETA_SCORESPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GA_ANKETA_SCORES.
     *     @param {GA_ANKETA_SCORESCreateManyArgs} args - Arguments to create many GA_ANKETA_SCORES.
     *     @example
     *     // Create many GA_ANKETA_SCORES
     *     const gA_ANKETA_SCORES = await prisma.gA_ANKETA_SCORES.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GA_ANKETA_SCORESCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_SCORESCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GA_ANKETA_SCORES.
     * @param {GA_ANKETA_SCORESDeleteArgs} args - Arguments to delete one GA_ANKETA_SCORES.
     * @example
     * // Delete one GA_ANKETA_SCORES
     * const GA_ANKETA_SCORES = await prisma.gA_ANKETA_SCORES.delete({
     *   where: {
     *     // ... filter to delete one GA_ANKETA_SCORES
     *   }
     * })
     * 
    **/
    delete<T extends GA_ANKETA_SCORESDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_SCORESDeleteArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SCORESClient<$Result.GetResult<Prisma.$GA_ANKETA_SCORESPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GA_ANKETA_SCORES.
     * @param {GA_ANKETA_SCORESUpdateArgs} args - Arguments to update one GA_ANKETA_SCORES.
     * @example
     * // Update one GA_ANKETA_SCORES
     * const gA_ANKETA_SCORES = await prisma.gA_ANKETA_SCORES.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GA_ANKETA_SCORESUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_SCORESUpdateArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SCORESClient<$Result.GetResult<Prisma.$GA_ANKETA_SCORESPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GA_ANKETA_SCORES.
     * @param {GA_ANKETA_SCORESDeleteManyArgs} args - Arguments to filter GA_ANKETA_SCORES to delete.
     * @example
     * // Delete a few GA_ANKETA_SCORES
     * const { count } = await prisma.gA_ANKETA_SCORES.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GA_ANKETA_SCORESDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_SCORESDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GA_ANKETA_SCORES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_SCORESUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GA_ANKETA_SCORES
     * const gA_ANKETA_SCORES = await prisma.gA_ANKETA_SCORES.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GA_ANKETA_SCORESUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_SCORESUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GA_ANKETA_SCORES.
     * @param {GA_ANKETA_SCORESUpsertArgs} args - Arguments to update or create a GA_ANKETA_SCORES.
     * @example
     * // Update or create a GA_ANKETA_SCORES
     * const gA_ANKETA_SCORES = await prisma.gA_ANKETA_SCORES.upsert({
     *   create: {
     *     // ... data to create a GA_ANKETA_SCORES
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GA_ANKETA_SCORES we want to update
     *   }
     * })
    **/
    upsert<T extends GA_ANKETA_SCORESUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_SCORESUpsertArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SCORESClient<$Result.GetResult<Prisma.$GA_ANKETA_SCORESPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of GA_ANKETA_SCORES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_SCORESCountArgs} args - Arguments to filter GA_ANKETA_SCORES to count.
     * @example
     * // Count the number of GA_ANKETA_SCORES
     * const count = await prisma.gA_ANKETA_SCORES.count({
     *   where: {
     *     // ... the filter for the GA_ANKETA_SCORES we want to count
     *   }
     * })
    **/
    count<T extends GA_ANKETA_SCORESCountArgs>(
      args?: Subset<T, GA_ANKETA_SCORESCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GA_ANKETA_SCORESCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GA_ANKETA_SCORES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_SCORESAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GA_ANKETA_SCORESAggregateArgs>(args: Subset<T, GA_ANKETA_SCORESAggregateArgs>): Prisma.PrismaPromise<GetGA_ANKETA_SCORESAggregateType<T>>

    /**
     * Group by GA_ANKETA_SCORES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_SCORESGroupByArgs} args - Group by arguments.
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
      T extends GA_ANKETA_SCORESGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GA_ANKETA_SCORESGroupByArgs['orderBy'] }
        : { orderBy?: GA_ANKETA_SCORESGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GA_ANKETA_SCORESGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGA_ANKETA_SCORESGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GA_ANKETA_SCORES model
   */
  readonly fields: GA_ANKETA_SCORESFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GA_ANKETA_SCORES.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GA_ANKETA_SCORESClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the GA_ANKETA_SCORES model
   */ 
  interface GA_ANKETA_SCORESFieldRefs {
    readonly ANS_WSU_ID: FieldRef<"GA_ANKETA_SCORES", 'BigInt'>
    readonly ANS_SCORES: FieldRef<"GA_ANKETA_SCORES", 'Int'>
    readonly ANS_DATETIME: FieldRef<"GA_ANKETA_SCORES", 'DateTime'>
    readonly ANS_ISSHOW: FieldRef<"GA_ANKETA_SCORES", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * GA_ANKETA_SCORES findUnique
   */
  export type GA_ANKETA_SCORESFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SCORES
     */
    select?: GA_ANKETA_SCORESSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_SCORES to fetch.
     */
    where: GA_ANKETA_SCORESWhereUniqueInput
  }


  /**
   * GA_ANKETA_SCORES findUniqueOrThrow
   */
  export type GA_ANKETA_SCORESFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SCORES
     */
    select?: GA_ANKETA_SCORESSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_SCORES to fetch.
     */
    where: GA_ANKETA_SCORESWhereUniqueInput
  }


  /**
   * GA_ANKETA_SCORES findFirst
   */
  export type GA_ANKETA_SCORESFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SCORES
     */
    select?: GA_ANKETA_SCORESSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_SCORES to fetch.
     */
    where?: GA_ANKETA_SCORESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_SCORES to fetch.
     */
    orderBy?: GA_ANKETA_SCORESOrderByWithRelationInput | GA_ANKETA_SCORESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GA_ANKETA_SCORES.
     */
    cursor?: GA_ANKETA_SCORESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_SCORES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_SCORES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GA_ANKETA_SCORES.
     */
    distinct?: GA_ANKETA_SCORESScalarFieldEnum | GA_ANKETA_SCORESScalarFieldEnum[]
  }


  /**
   * GA_ANKETA_SCORES findFirstOrThrow
   */
  export type GA_ANKETA_SCORESFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SCORES
     */
    select?: GA_ANKETA_SCORESSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_SCORES to fetch.
     */
    where?: GA_ANKETA_SCORESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_SCORES to fetch.
     */
    orderBy?: GA_ANKETA_SCORESOrderByWithRelationInput | GA_ANKETA_SCORESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GA_ANKETA_SCORES.
     */
    cursor?: GA_ANKETA_SCORESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_SCORES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_SCORES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GA_ANKETA_SCORES.
     */
    distinct?: GA_ANKETA_SCORESScalarFieldEnum | GA_ANKETA_SCORESScalarFieldEnum[]
  }


  /**
   * GA_ANKETA_SCORES findMany
   */
  export type GA_ANKETA_SCORESFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SCORES
     */
    select?: GA_ANKETA_SCORESSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_SCORES to fetch.
     */
    where?: GA_ANKETA_SCORESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_SCORES to fetch.
     */
    orderBy?: GA_ANKETA_SCORESOrderByWithRelationInput | GA_ANKETA_SCORESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GA_ANKETA_SCORES.
     */
    cursor?: GA_ANKETA_SCORESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_SCORES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_SCORES.
     */
    skip?: number
    distinct?: GA_ANKETA_SCORESScalarFieldEnum | GA_ANKETA_SCORESScalarFieldEnum[]
  }


  /**
   * GA_ANKETA_SCORES create
   */
  export type GA_ANKETA_SCORESCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SCORES
     */
    select?: GA_ANKETA_SCORESSelect<ExtArgs> | null
    /**
     * The data needed to create a GA_ANKETA_SCORES.
     */
    data: XOR<GA_ANKETA_SCORESCreateInput, GA_ANKETA_SCORESUncheckedCreateInput>
  }


  /**
   * GA_ANKETA_SCORES createMany
   */
  export type GA_ANKETA_SCORESCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GA_ANKETA_SCORES.
     */
    data: GA_ANKETA_SCORESCreateManyInput | GA_ANKETA_SCORESCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * GA_ANKETA_SCORES update
   */
  export type GA_ANKETA_SCORESUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SCORES
     */
    select?: GA_ANKETA_SCORESSelect<ExtArgs> | null
    /**
     * The data needed to update a GA_ANKETA_SCORES.
     */
    data: XOR<GA_ANKETA_SCORESUpdateInput, GA_ANKETA_SCORESUncheckedUpdateInput>
    /**
     * Choose, which GA_ANKETA_SCORES to update.
     */
    where: GA_ANKETA_SCORESWhereUniqueInput
  }


  /**
   * GA_ANKETA_SCORES updateMany
   */
  export type GA_ANKETA_SCORESUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GA_ANKETA_SCORES.
     */
    data: XOR<GA_ANKETA_SCORESUpdateManyMutationInput, GA_ANKETA_SCORESUncheckedUpdateManyInput>
    /**
     * Filter which GA_ANKETA_SCORES to update
     */
    where?: GA_ANKETA_SCORESWhereInput
  }


  /**
   * GA_ANKETA_SCORES upsert
   */
  export type GA_ANKETA_SCORESUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SCORES
     */
    select?: GA_ANKETA_SCORESSelect<ExtArgs> | null
    /**
     * The filter to search for the GA_ANKETA_SCORES to update in case it exists.
     */
    where: GA_ANKETA_SCORESWhereUniqueInput
    /**
     * In case the GA_ANKETA_SCORES found by the `where` argument doesn't exist, create a new GA_ANKETA_SCORES with this data.
     */
    create: XOR<GA_ANKETA_SCORESCreateInput, GA_ANKETA_SCORESUncheckedCreateInput>
    /**
     * In case the GA_ANKETA_SCORES was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GA_ANKETA_SCORESUpdateInput, GA_ANKETA_SCORESUncheckedUpdateInput>
  }


  /**
   * GA_ANKETA_SCORES delete
   */
  export type GA_ANKETA_SCORESDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SCORES
     */
    select?: GA_ANKETA_SCORESSelect<ExtArgs> | null
    /**
     * Filter which GA_ANKETA_SCORES to delete.
     */
    where: GA_ANKETA_SCORESWhereUniqueInput
  }


  /**
   * GA_ANKETA_SCORES deleteMany
   */
  export type GA_ANKETA_SCORESDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GA_ANKETA_SCORES to delete
     */
    where?: GA_ANKETA_SCORESWhereInput
  }


  /**
   * GA_ANKETA_SCORES without action
   */
  export type GA_ANKETA_SCORESDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SCORES
     */
    select?: GA_ANKETA_SCORESSelect<ExtArgs> | null
  }



  /**
   * Model GA_ANKETA_SCORES_HISTORY
   */

  export type AggregateGA_ANKETA_SCORES_HISTORY = {
    _count: GA_ANKETA_SCORES_HISTORYCountAggregateOutputType | null
    _avg: GA_ANKETA_SCORES_HISTORYAvgAggregateOutputType | null
    _sum: GA_ANKETA_SCORES_HISTORYSumAggregateOutputType | null
    _min: GA_ANKETA_SCORES_HISTORYMinAggregateOutputType | null
    _max: GA_ANKETA_SCORES_HISTORYMaxAggregateOutputType | null
  }

  export type GA_ANKETA_SCORES_HISTORYAvgAggregateOutputType = {
    ASH_WSU_ID: number | null
    ASH_SCORES: number | null
    ASH_TYPE: number | null
    ASH_SCORES_OLD: number | null
    ASH_IZO_ID: number | null
  }

  export type GA_ANKETA_SCORES_HISTORYSumAggregateOutputType = {
    ASH_WSU_ID: bigint | null
    ASH_SCORES: number | null
    ASH_TYPE: number | null
    ASH_SCORES_OLD: number | null
    ASH_IZO_ID: bigint | null
  }

  export type GA_ANKETA_SCORES_HISTORYMinAggregateOutputType = {
    ASH_WSU_ID: bigint | null
    ASH_SCORES: number | null
    ASH_DATETIME: Date | null
    ASH_DESC: string | null
    ASH_TYPE: number | null
    ASH_SCORES_OLD: number | null
    ASH_EVENT_STATUS: boolean | null
    ASH_DATETIME_UPDATE: Date | null
    ASH_IZO_ID: bigint | null
  }

  export type GA_ANKETA_SCORES_HISTORYMaxAggregateOutputType = {
    ASH_WSU_ID: bigint | null
    ASH_SCORES: number | null
    ASH_DATETIME: Date | null
    ASH_DESC: string | null
    ASH_TYPE: number | null
    ASH_SCORES_OLD: number | null
    ASH_EVENT_STATUS: boolean | null
    ASH_DATETIME_UPDATE: Date | null
    ASH_IZO_ID: bigint | null
  }

  export type GA_ANKETA_SCORES_HISTORYCountAggregateOutputType = {
    ASH_WSU_ID: number
    ASH_SCORES: number
    ASH_DATETIME: number
    ASH_DESC: number
    ASH_TYPE: number
    ASH_SCORES_OLD: number
    ASH_EVENT_STATUS: number
    ASH_DATETIME_UPDATE: number
    ASH_IZO_ID: number
    _all: number
  }


  export type GA_ANKETA_SCORES_HISTORYAvgAggregateInputType = {
    ASH_WSU_ID?: true
    ASH_SCORES?: true
    ASH_TYPE?: true
    ASH_SCORES_OLD?: true
    ASH_IZO_ID?: true
  }

  export type GA_ANKETA_SCORES_HISTORYSumAggregateInputType = {
    ASH_WSU_ID?: true
    ASH_SCORES?: true
    ASH_TYPE?: true
    ASH_SCORES_OLD?: true
    ASH_IZO_ID?: true
  }

  export type GA_ANKETA_SCORES_HISTORYMinAggregateInputType = {
    ASH_WSU_ID?: true
    ASH_SCORES?: true
    ASH_DATETIME?: true
    ASH_DESC?: true
    ASH_TYPE?: true
    ASH_SCORES_OLD?: true
    ASH_EVENT_STATUS?: true
    ASH_DATETIME_UPDATE?: true
    ASH_IZO_ID?: true
  }

  export type GA_ANKETA_SCORES_HISTORYMaxAggregateInputType = {
    ASH_WSU_ID?: true
    ASH_SCORES?: true
    ASH_DATETIME?: true
    ASH_DESC?: true
    ASH_TYPE?: true
    ASH_SCORES_OLD?: true
    ASH_EVENT_STATUS?: true
    ASH_DATETIME_UPDATE?: true
    ASH_IZO_ID?: true
  }

  export type GA_ANKETA_SCORES_HISTORYCountAggregateInputType = {
    ASH_WSU_ID?: true
    ASH_SCORES?: true
    ASH_DATETIME?: true
    ASH_DESC?: true
    ASH_TYPE?: true
    ASH_SCORES_OLD?: true
    ASH_EVENT_STATUS?: true
    ASH_DATETIME_UPDATE?: true
    ASH_IZO_ID?: true
    _all?: true
  }

  export type GA_ANKETA_SCORES_HISTORYAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GA_ANKETA_SCORES_HISTORY to aggregate.
     */
    where?: GA_ANKETA_SCORES_HISTORYWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_SCORES_HISTORIES to fetch.
     */
    orderBy?: GA_ANKETA_SCORES_HISTORYOrderByWithRelationInput | GA_ANKETA_SCORES_HISTORYOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GA_ANKETA_SCORES_HISTORYWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_SCORES_HISTORIES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_SCORES_HISTORIES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GA_ANKETA_SCORES_HISTORIES
    **/
    _count?: true | GA_ANKETA_SCORES_HISTORYCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GA_ANKETA_SCORES_HISTORYAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GA_ANKETA_SCORES_HISTORYSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GA_ANKETA_SCORES_HISTORYMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GA_ANKETA_SCORES_HISTORYMaxAggregateInputType
  }

  export type GetGA_ANKETA_SCORES_HISTORYAggregateType<T extends GA_ANKETA_SCORES_HISTORYAggregateArgs> = {
        [P in keyof T & keyof AggregateGA_ANKETA_SCORES_HISTORY]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGA_ANKETA_SCORES_HISTORY[P]>
      : GetScalarType<T[P], AggregateGA_ANKETA_SCORES_HISTORY[P]>
  }




  export type GA_ANKETA_SCORES_HISTORYGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GA_ANKETA_SCORES_HISTORYWhereInput
    orderBy?: GA_ANKETA_SCORES_HISTORYOrderByWithAggregationInput | GA_ANKETA_SCORES_HISTORYOrderByWithAggregationInput[]
    by: GA_ANKETA_SCORES_HISTORYScalarFieldEnum[] | GA_ANKETA_SCORES_HISTORYScalarFieldEnum
    having?: GA_ANKETA_SCORES_HISTORYScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GA_ANKETA_SCORES_HISTORYCountAggregateInputType | true
    _avg?: GA_ANKETA_SCORES_HISTORYAvgAggregateInputType
    _sum?: GA_ANKETA_SCORES_HISTORYSumAggregateInputType
    _min?: GA_ANKETA_SCORES_HISTORYMinAggregateInputType
    _max?: GA_ANKETA_SCORES_HISTORYMaxAggregateInputType
  }

  export type GA_ANKETA_SCORES_HISTORYGroupByOutputType = {
    ASH_WSU_ID: bigint
    ASH_SCORES: number | null
    ASH_DATETIME: Date | null
    ASH_DESC: string | null
    ASH_TYPE: number | null
    ASH_SCORES_OLD: number | null
    ASH_EVENT_STATUS: boolean | null
    ASH_DATETIME_UPDATE: Date | null
    ASH_IZO_ID: bigint | null
    _count: GA_ANKETA_SCORES_HISTORYCountAggregateOutputType | null
    _avg: GA_ANKETA_SCORES_HISTORYAvgAggregateOutputType | null
    _sum: GA_ANKETA_SCORES_HISTORYSumAggregateOutputType | null
    _min: GA_ANKETA_SCORES_HISTORYMinAggregateOutputType | null
    _max: GA_ANKETA_SCORES_HISTORYMaxAggregateOutputType | null
  }

  type GetGA_ANKETA_SCORES_HISTORYGroupByPayload<T extends GA_ANKETA_SCORES_HISTORYGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GA_ANKETA_SCORES_HISTORYGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GA_ANKETA_SCORES_HISTORYGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GA_ANKETA_SCORES_HISTORYGroupByOutputType[P]>
            : GetScalarType<T[P], GA_ANKETA_SCORES_HISTORYGroupByOutputType[P]>
        }
      >
    >


  export type GA_ANKETA_SCORES_HISTORYSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ASH_WSU_ID?: boolean
    ASH_SCORES?: boolean
    ASH_DATETIME?: boolean
    ASH_DESC?: boolean
    ASH_TYPE?: boolean
    ASH_SCORES_OLD?: boolean
    ASH_EVENT_STATUS?: boolean
    ASH_DATETIME_UPDATE?: boolean
    ASH_IZO_ID?: boolean
  }, ExtArgs["result"]["gA_ANKETA_SCORES_HISTORY"]>

  export type GA_ANKETA_SCORES_HISTORYSelectScalar = {
    ASH_WSU_ID?: boolean
    ASH_SCORES?: boolean
    ASH_DATETIME?: boolean
    ASH_DESC?: boolean
    ASH_TYPE?: boolean
    ASH_SCORES_OLD?: boolean
    ASH_EVENT_STATUS?: boolean
    ASH_DATETIME_UPDATE?: boolean
    ASH_IZO_ID?: boolean
  }


  export type $GA_ANKETA_SCORES_HISTORYPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GA_ANKETA_SCORES_HISTORY"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ASH_WSU_ID: bigint
      ASH_SCORES: number | null
      ASH_DATETIME: Date | null
      ASH_DESC: string | null
      ASH_TYPE: number | null
      ASH_SCORES_OLD: number | null
      ASH_EVENT_STATUS: boolean | null
      ASH_DATETIME_UPDATE: Date | null
      ASH_IZO_ID: bigint | null
    }, ExtArgs["result"]["gA_ANKETA_SCORES_HISTORY"]>
    composites: {}
  }


  type GA_ANKETA_SCORES_HISTORYGetPayload<S extends boolean | null | undefined | GA_ANKETA_SCORES_HISTORYDefaultArgs> = $Result.GetResult<Prisma.$GA_ANKETA_SCORES_HISTORYPayload, S>

  type GA_ANKETA_SCORES_HISTORYCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GA_ANKETA_SCORES_HISTORYFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GA_ANKETA_SCORES_HISTORYCountAggregateInputType | true
    }

  export interface GA_ANKETA_SCORES_HISTORYDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GA_ANKETA_SCORES_HISTORY'], meta: { name: 'GA_ANKETA_SCORES_HISTORY' } }
    /**
     * Find zero or one GA_ANKETA_SCORES_HISTORY that matches the filter.
     * @param {GA_ANKETA_SCORES_HISTORYFindUniqueArgs} args - Arguments to find a GA_ANKETA_SCORES_HISTORY
     * @example
     * // Get one GA_ANKETA_SCORES_HISTORY
     * const gA_ANKETA_SCORES_HISTORY = await prisma.gA_ANKETA_SCORES_HISTORY.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GA_ANKETA_SCORES_HISTORYFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_SCORES_HISTORYFindUniqueArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SCORES_HISTORYClient<$Result.GetResult<Prisma.$GA_ANKETA_SCORES_HISTORYPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GA_ANKETA_SCORES_HISTORY that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GA_ANKETA_SCORES_HISTORYFindUniqueOrThrowArgs} args - Arguments to find a GA_ANKETA_SCORES_HISTORY
     * @example
     * // Get one GA_ANKETA_SCORES_HISTORY
     * const gA_ANKETA_SCORES_HISTORY = await prisma.gA_ANKETA_SCORES_HISTORY.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GA_ANKETA_SCORES_HISTORYFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_SCORES_HISTORYFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SCORES_HISTORYClient<$Result.GetResult<Prisma.$GA_ANKETA_SCORES_HISTORYPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GA_ANKETA_SCORES_HISTORY that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_SCORES_HISTORYFindFirstArgs} args - Arguments to find a GA_ANKETA_SCORES_HISTORY
     * @example
     * // Get one GA_ANKETA_SCORES_HISTORY
     * const gA_ANKETA_SCORES_HISTORY = await prisma.gA_ANKETA_SCORES_HISTORY.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GA_ANKETA_SCORES_HISTORYFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_SCORES_HISTORYFindFirstArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SCORES_HISTORYClient<$Result.GetResult<Prisma.$GA_ANKETA_SCORES_HISTORYPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GA_ANKETA_SCORES_HISTORY that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_SCORES_HISTORYFindFirstOrThrowArgs} args - Arguments to find a GA_ANKETA_SCORES_HISTORY
     * @example
     * // Get one GA_ANKETA_SCORES_HISTORY
     * const gA_ANKETA_SCORES_HISTORY = await prisma.gA_ANKETA_SCORES_HISTORY.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GA_ANKETA_SCORES_HISTORYFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_SCORES_HISTORYFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SCORES_HISTORYClient<$Result.GetResult<Prisma.$GA_ANKETA_SCORES_HISTORYPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GA_ANKETA_SCORES_HISTORIES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_SCORES_HISTORYFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GA_ANKETA_SCORES_HISTORIES
     * const gA_ANKETA_SCORES_HISTORIES = await prisma.gA_ANKETA_SCORES_HISTORY.findMany()
     * 
     * // Get first 10 GA_ANKETA_SCORES_HISTORIES
     * const gA_ANKETA_SCORES_HISTORIES = await prisma.gA_ANKETA_SCORES_HISTORY.findMany({ take: 10 })
     * 
     * // Only select the `ASH_WSU_ID`
     * const gA_ANKETA_SCORES_HISTORYWithASH_WSU_IDOnly = await prisma.gA_ANKETA_SCORES_HISTORY.findMany({ select: { ASH_WSU_ID: true } })
     * 
    **/
    findMany<T extends GA_ANKETA_SCORES_HISTORYFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_SCORES_HISTORYFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GA_ANKETA_SCORES_HISTORYPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GA_ANKETA_SCORES_HISTORY.
     * @param {GA_ANKETA_SCORES_HISTORYCreateArgs} args - Arguments to create a GA_ANKETA_SCORES_HISTORY.
     * @example
     * // Create one GA_ANKETA_SCORES_HISTORY
     * const GA_ANKETA_SCORES_HISTORY = await prisma.gA_ANKETA_SCORES_HISTORY.create({
     *   data: {
     *     // ... data to create a GA_ANKETA_SCORES_HISTORY
     *   }
     * })
     * 
    **/
    create<T extends GA_ANKETA_SCORES_HISTORYCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_SCORES_HISTORYCreateArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SCORES_HISTORYClient<$Result.GetResult<Prisma.$GA_ANKETA_SCORES_HISTORYPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GA_ANKETA_SCORES_HISTORIES.
     *     @param {GA_ANKETA_SCORES_HISTORYCreateManyArgs} args - Arguments to create many GA_ANKETA_SCORES_HISTORIES.
     *     @example
     *     // Create many GA_ANKETA_SCORES_HISTORIES
     *     const gA_ANKETA_SCORES_HISTORY = await prisma.gA_ANKETA_SCORES_HISTORY.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GA_ANKETA_SCORES_HISTORYCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_SCORES_HISTORYCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GA_ANKETA_SCORES_HISTORY.
     * @param {GA_ANKETA_SCORES_HISTORYDeleteArgs} args - Arguments to delete one GA_ANKETA_SCORES_HISTORY.
     * @example
     * // Delete one GA_ANKETA_SCORES_HISTORY
     * const GA_ANKETA_SCORES_HISTORY = await prisma.gA_ANKETA_SCORES_HISTORY.delete({
     *   where: {
     *     // ... filter to delete one GA_ANKETA_SCORES_HISTORY
     *   }
     * })
     * 
    **/
    delete<T extends GA_ANKETA_SCORES_HISTORYDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_SCORES_HISTORYDeleteArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SCORES_HISTORYClient<$Result.GetResult<Prisma.$GA_ANKETA_SCORES_HISTORYPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GA_ANKETA_SCORES_HISTORY.
     * @param {GA_ANKETA_SCORES_HISTORYUpdateArgs} args - Arguments to update one GA_ANKETA_SCORES_HISTORY.
     * @example
     * // Update one GA_ANKETA_SCORES_HISTORY
     * const gA_ANKETA_SCORES_HISTORY = await prisma.gA_ANKETA_SCORES_HISTORY.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GA_ANKETA_SCORES_HISTORYUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_SCORES_HISTORYUpdateArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SCORES_HISTORYClient<$Result.GetResult<Prisma.$GA_ANKETA_SCORES_HISTORYPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GA_ANKETA_SCORES_HISTORIES.
     * @param {GA_ANKETA_SCORES_HISTORYDeleteManyArgs} args - Arguments to filter GA_ANKETA_SCORES_HISTORIES to delete.
     * @example
     * // Delete a few GA_ANKETA_SCORES_HISTORIES
     * const { count } = await prisma.gA_ANKETA_SCORES_HISTORY.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GA_ANKETA_SCORES_HISTORYDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_SCORES_HISTORYDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GA_ANKETA_SCORES_HISTORIES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_SCORES_HISTORYUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GA_ANKETA_SCORES_HISTORIES
     * const gA_ANKETA_SCORES_HISTORY = await prisma.gA_ANKETA_SCORES_HISTORY.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GA_ANKETA_SCORES_HISTORYUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_SCORES_HISTORYUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GA_ANKETA_SCORES_HISTORY.
     * @param {GA_ANKETA_SCORES_HISTORYUpsertArgs} args - Arguments to update or create a GA_ANKETA_SCORES_HISTORY.
     * @example
     * // Update or create a GA_ANKETA_SCORES_HISTORY
     * const gA_ANKETA_SCORES_HISTORY = await prisma.gA_ANKETA_SCORES_HISTORY.upsert({
     *   create: {
     *     // ... data to create a GA_ANKETA_SCORES_HISTORY
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GA_ANKETA_SCORES_HISTORY we want to update
     *   }
     * })
    **/
    upsert<T extends GA_ANKETA_SCORES_HISTORYUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_SCORES_HISTORYUpsertArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SCORES_HISTORYClient<$Result.GetResult<Prisma.$GA_ANKETA_SCORES_HISTORYPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of GA_ANKETA_SCORES_HISTORIES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_SCORES_HISTORYCountArgs} args - Arguments to filter GA_ANKETA_SCORES_HISTORIES to count.
     * @example
     * // Count the number of GA_ANKETA_SCORES_HISTORIES
     * const count = await prisma.gA_ANKETA_SCORES_HISTORY.count({
     *   where: {
     *     // ... the filter for the GA_ANKETA_SCORES_HISTORIES we want to count
     *   }
     * })
    **/
    count<T extends GA_ANKETA_SCORES_HISTORYCountArgs>(
      args?: Subset<T, GA_ANKETA_SCORES_HISTORYCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GA_ANKETA_SCORES_HISTORYCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GA_ANKETA_SCORES_HISTORY.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_SCORES_HISTORYAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GA_ANKETA_SCORES_HISTORYAggregateArgs>(args: Subset<T, GA_ANKETA_SCORES_HISTORYAggregateArgs>): Prisma.PrismaPromise<GetGA_ANKETA_SCORES_HISTORYAggregateType<T>>

    /**
     * Group by GA_ANKETA_SCORES_HISTORY.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_SCORES_HISTORYGroupByArgs} args - Group by arguments.
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
      T extends GA_ANKETA_SCORES_HISTORYGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GA_ANKETA_SCORES_HISTORYGroupByArgs['orderBy'] }
        : { orderBy?: GA_ANKETA_SCORES_HISTORYGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GA_ANKETA_SCORES_HISTORYGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGA_ANKETA_SCORES_HISTORYGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GA_ANKETA_SCORES_HISTORY model
   */
  readonly fields: GA_ANKETA_SCORES_HISTORYFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GA_ANKETA_SCORES_HISTORY.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GA_ANKETA_SCORES_HISTORYClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the GA_ANKETA_SCORES_HISTORY model
   */ 
  interface GA_ANKETA_SCORES_HISTORYFieldRefs {
    readonly ASH_WSU_ID: FieldRef<"GA_ANKETA_SCORES_HISTORY", 'BigInt'>
    readonly ASH_SCORES: FieldRef<"GA_ANKETA_SCORES_HISTORY", 'Int'>
    readonly ASH_DATETIME: FieldRef<"GA_ANKETA_SCORES_HISTORY", 'DateTime'>
    readonly ASH_DESC: FieldRef<"GA_ANKETA_SCORES_HISTORY", 'String'>
    readonly ASH_TYPE: FieldRef<"GA_ANKETA_SCORES_HISTORY", 'Int'>
    readonly ASH_SCORES_OLD: FieldRef<"GA_ANKETA_SCORES_HISTORY", 'Int'>
    readonly ASH_EVENT_STATUS: FieldRef<"GA_ANKETA_SCORES_HISTORY", 'Boolean'>
    readonly ASH_DATETIME_UPDATE: FieldRef<"GA_ANKETA_SCORES_HISTORY", 'DateTime'>
    readonly ASH_IZO_ID: FieldRef<"GA_ANKETA_SCORES_HISTORY", 'BigInt'>
  }
    

  // Custom InputTypes

  /**
   * GA_ANKETA_SCORES_HISTORY findUnique
   */
  export type GA_ANKETA_SCORES_HISTORYFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SCORES_HISTORY
     */
    select?: GA_ANKETA_SCORES_HISTORYSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_SCORES_HISTORY to fetch.
     */
    where: GA_ANKETA_SCORES_HISTORYWhereUniqueInput
  }


  /**
   * GA_ANKETA_SCORES_HISTORY findUniqueOrThrow
   */
  export type GA_ANKETA_SCORES_HISTORYFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SCORES_HISTORY
     */
    select?: GA_ANKETA_SCORES_HISTORYSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_SCORES_HISTORY to fetch.
     */
    where: GA_ANKETA_SCORES_HISTORYWhereUniqueInput
  }


  /**
   * GA_ANKETA_SCORES_HISTORY findFirst
   */
  export type GA_ANKETA_SCORES_HISTORYFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SCORES_HISTORY
     */
    select?: GA_ANKETA_SCORES_HISTORYSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_SCORES_HISTORY to fetch.
     */
    where?: GA_ANKETA_SCORES_HISTORYWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_SCORES_HISTORIES to fetch.
     */
    orderBy?: GA_ANKETA_SCORES_HISTORYOrderByWithRelationInput | GA_ANKETA_SCORES_HISTORYOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GA_ANKETA_SCORES_HISTORIES.
     */
    cursor?: GA_ANKETA_SCORES_HISTORYWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_SCORES_HISTORIES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_SCORES_HISTORIES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GA_ANKETA_SCORES_HISTORIES.
     */
    distinct?: GA_ANKETA_SCORES_HISTORYScalarFieldEnum | GA_ANKETA_SCORES_HISTORYScalarFieldEnum[]
  }


  /**
   * GA_ANKETA_SCORES_HISTORY findFirstOrThrow
   */
  export type GA_ANKETA_SCORES_HISTORYFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SCORES_HISTORY
     */
    select?: GA_ANKETA_SCORES_HISTORYSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_SCORES_HISTORY to fetch.
     */
    where?: GA_ANKETA_SCORES_HISTORYWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_SCORES_HISTORIES to fetch.
     */
    orderBy?: GA_ANKETA_SCORES_HISTORYOrderByWithRelationInput | GA_ANKETA_SCORES_HISTORYOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GA_ANKETA_SCORES_HISTORIES.
     */
    cursor?: GA_ANKETA_SCORES_HISTORYWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_SCORES_HISTORIES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_SCORES_HISTORIES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GA_ANKETA_SCORES_HISTORIES.
     */
    distinct?: GA_ANKETA_SCORES_HISTORYScalarFieldEnum | GA_ANKETA_SCORES_HISTORYScalarFieldEnum[]
  }


  /**
   * GA_ANKETA_SCORES_HISTORY findMany
   */
  export type GA_ANKETA_SCORES_HISTORYFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SCORES_HISTORY
     */
    select?: GA_ANKETA_SCORES_HISTORYSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_SCORES_HISTORIES to fetch.
     */
    where?: GA_ANKETA_SCORES_HISTORYWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_SCORES_HISTORIES to fetch.
     */
    orderBy?: GA_ANKETA_SCORES_HISTORYOrderByWithRelationInput | GA_ANKETA_SCORES_HISTORYOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GA_ANKETA_SCORES_HISTORIES.
     */
    cursor?: GA_ANKETA_SCORES_HISTORYWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_SCORES_HISTORIES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_SCORES_HISTORIES.
     */
    skip?: number
    distinct?: GA_ANKETA_SCORES_HISTORYScalarFieldEnum | GA_ANKETA_SCORES_HISTORYScalarFieldEnum[]
  }


  /**
   * GA_ANKETA_SCORES_HISTORY create
   */
  export type GA_ANKETA_SCORES_HISTORYCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SCORES_HISTORY
     */
    select?: GA_ANKETA_SCORES_HISTORYSelect<ExtArgs> | null
    /**
     * The data needed to create a GA_ANKETA_SCORES_HISTORY.
     */
    data: XOR<GA_ANKETA_SCORES_HISTORYCreateInput, GA_ANKETA_SCORES_HISTORYUncheckedCreateInput>
  }


  /**
   * GA_ANKETA_SCORES_HISTORY createMany
   */
  export type GA_ANKETA_SCORES_HISTORYCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GA_ANKETA_SCORES_HISTORIES.
     */
    data: GA_ANKETA_SCORES_HISTORYCreateManyInput | GA_ANKETA_SCORES_HISTORYCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * GA_ANKETA_SCORES_HISTORY update
   */
  export type GA_ANKETA_SCORES_HISTORYUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SCORES_HISTORY
     */
    select?: GA_ANKETA_SCORES_HISTORYSelect<ExtArgs> | null
    /**
     * The data needed to update a GA_ANKETA_SCORES_HISTORY.
     */
    data: XOR<GA_ANKETA_SCORES_HISTORYUpdateInput, GA_ANKETA_SCORES_HISTORYUncheckedUpdateInput>
    /**
     * Choose, which GA_ANKETA_SCORES_HISTORY to update.
     */
    where: GA_ANKETA_SCORES_HISTORYWhereUniqueInput
  }


  /**
   * GA_ANKETA_SCORES_HISTORY updateMany
   */
  export type GA_ANKETA_SCORES_HISTORYUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GA_ANKETA_SCORES_HISTORIES.
     */
    data: XOR<GA_ANKETA_SCORES_HISTORYUpdateManyMutationInput, GA_ANKETA_SCORES_HISTORYUncheckedUpdateManyInput>
    /**
     * Filter which GA_ANKETA_SCORES_HISTORIES to update
     */
    where?: GA_ANKETA_SCORES_HISTORYWhereInput
  }


  /**
   * GA_ANKETA_SCORES_HISTORY upsert
   */
  export type GA_ANKETA_SCORES_HISTORYUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SCORES_HISTORY
     */
    select?: GA_ANKETA_SCORES_HISTORYSelect<ExtArgs> | null
    /**
     * The filter to search for the GA_ANKETA_SCORES_HISTORY to update in case it exists.
     */
    where: GA_ANKETA_SCORES_HISTORYWhereUniqueInput
    /**
     * In case the GA_ANKETA_SCORES_HISTORY found by the `where` argument doesn't exist, create a new GA_ANKETA_SCORES_HISTORY with this data.
     */
    create: XOR<GA_ANKETA_SCORES_HISTORYCreateInput, GA_ANKETA_SCORES_HISTORYUncheckedCreateInput>
    /**
     * In case the GA_ANKETA_SCORES_HISTORY was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GA_ANKETA_SCORES_HISTORYUpdateInput, GA_ANKETA_SCORES_HISTORYUncheckedUpdateInput>
  }


  /**
   * GA_ANKETA_SCORES_HISTORY delete
   */
  export type GA_ANKETA_SCORES_HISTORYDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SCORES_HISTORY
     */
    select?: GA_ANKETA_SCORES_HISTORYSelect<ExtArgs> | null
    /**
     * Filter which GA_ANKETA_SCORES_HISTORY to delete.
     */
    where: GA_ANKETA_SCORES_HISTORYWhereUniqueInput
  }


  /**
   * GA_ANKETA_SCORES_HISTORY deleteMany
   */
  export type GA_ANKETA_SCORES_HISTORYDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GA_ANKETA_SCORES_HISTORIES to delete
     */
    where?: GA_ANKETA_SCORES_HISTORYWhereInput
  }


  /**
   * GA_ANKETA_SCORES_HISTORY without action
   */
  export type GA_ANKETA_SCORES_HISTORYDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SCORES_HISTORY
     */
    select?: GA_ANKETA_SCORES_HISTORYSelect<ExtArgs> | null
  }



  /**
   * Model GA_ANKETA_SOREVNOVANIE
   */

  export type AggregateGA_ANKETA_SOREVNOVANIE = {
    _count: GA_ANKETA_SOREVNOVANIECountAggregateOutputType | null
    _avg: GA_ANKETA_SOREVNOVANIEAvgAggregateOutputType | null
    _sum: GA_ANKETA_SOREVNOVANIESumAggregateOutputType | null
    _min: GA_ANKETA_SOREVNOVANIEMinAggregateOutputType | null
    _max: GA_ANKETA_SOREVNOVANIEMaxAggregateOutputType | null
  }

  export type GA_ANKETA_SOREVNOVANIEAvgAggregateOutputType = {
    ASR_YEAR: number | null
    ASR_MONTH: number | null
    ASR_WSU_ID: number | null
    ASR_SCORE: number | null
  }

  export type GA_ANKETA_SOREVNOVANIESumAggregateOutputType = {
    ASR_YEAR: number | null
    ASR_MONTH: number | null
    ASR_WSU_ID: bigint | null
    ASR_SCORE: number | null
  }

  export type GA_ANKETA_SOREVNOVANIEMinAggregateOutputType = {
    ASR_YEAR: number | null
    ASR_MONTH: number | null
    ASR_WSU_ID: bigint | null
    ASR_LOGIN: string | null
    ASR_FIO: string | null
    ASR_SCORE: number | null
    ASR_DOLJNOST: string | null
    ASR_RUKOVODITEL: boolean | null
  }

  export type GA_ANKETA_SOREVNOVANIEMaxAggregateOutputType = {
    ASR_YEAR: number | null
    ASR_MONTH: number | null
    ASR_WSU_ID: bigint | null
    ASR_LOGIN: string | null
    ASR_FIO: string | null
    ASR_SCORE: number | null
    ASR_DOLJNOST: string | null
    ASR_RUKOVODITEL: boolean | null
  }

  export type GA_ANKETA_SOREVNOVANIECountAggregateOutputType = {
    ASR_YEAR: number
    ASR_MONTH: number
    ASR_WSU_ID: number
    ASR_LOGIN: number
    ASR_FIO: number
    ASR_SCORE: number
    ASR_DOLJNOST: number
    ASR_RUKOVODITEL: number
    _all: number
  }


  export type GA_ANKETA_SOREVNOVANIEAvgAggregateInputType = {
    ASR_YEAR?: true
    ASR_MONTH?: true
    ASR_WSU_ID?: true
    ASR_SCORE?: true
  }

  export type GA_ANKETA_SOREVNOVANIESumAggregateInputType = {
    ASR_YEAR?: true
    ASR_MONTH?: true
    ASR_WSU_ID?: true
    ASR_SCORE?: true
  }

  export type GA_ANKETA_SOREVNOVANIEMinAggregateInputType = {
    ASR_YEAR?: true
    ASR_MONTH?: true
    ASR_WSU_ID?: true
    ASR_LOGIN?: true
    ASR_FIO?: true
    ASR_SCORE?: true
    ASR_DOLJNOST?: true
    ASR_RUKOVODITEL?: true
  }

  export type GA_ANKETA_SOREVNOVANIEMaxAggregateInputType = {
    ASR_YEAR?: true
    ASR_MONTH?: true
    ASR_WSU_ID?: true
    ASR_LOGIN?: true
    ASR_FIO?: true
    ASR_SCORE?: true
    ASR_DOLJNOST?: true
    ASR_RUKOVODITEL?: true
  }

  export type GA_ANKETA_SOREVNOVANIECountAggregateInputType = {
    ASR_YEAR?: true
    ASR_MONTH?: true
    ASR_WSU_ID?: true
    ASR_LOGIN?: true
    ASR_FIO?: true
    ASR_SCORE?: true
    ASR_DOLJNOST?: true
    ASR_RUKOVODITEL?: true
    _all?: true
  }

  export type GA_ANKETA_SOREVNOVANIEAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GA_ANKETA_SOREVNOVANIE to aggregate.
     */
    where?: GA_ANKETA_SOREVNOVANIEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_SOREVNOVANIES to fetch.
     */
    orderBy?: GA_ANKETA_SOREVNOVANIEOrderByWithRelationInput | GA_ANKETA_SOREVNOVANIEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GA_ANKETA_SOREVNOVANIEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_SOREVNOVANIES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_SOREVNOVANIES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GA_ANKETA_SOREVNOVANIES
    **/
    _count?: true | GA_ANKETA_SOREVNOVANIECountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GA_ANKETA_SOREVNOVANIEAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GA_ANKETA_SOREVNOVANIESumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GA_ANKETA_SOREVNOVANIEMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GA_ANKETA_SOREVNOVANIEMaxAggregateInputType
  }

  export type GetGA_ANKETA_SOREVNOVANIEAggregateType<T extends GA_ANKETA_SOREVNOVANIEAggregateArgs> = {
        [P in keyof T & keyof AggregateGA_ANKETA_SOREVNOVANIE]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGA_ANKETA_SOREVNOVANIE[P]>
      : GetScalarType<T[P], AggregateGA_ANKETA_SOREVNOVANIE[P]>
  }




  export type GA_ANKETA_SOREVNOVANIEGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GA_ANKETA_SOREVNOVANIEWhereInput
    orderBy?: GA_ANKETA_SOREVNOVANIEOrderByWithAggregationInput | GA_ANKETA_SOREVNOVANIEOrderByWithAggregationInput[]
    by: GA_ANKETA_SOREVNOVANIEScalarFieldEnum[] | GA_ANKETA_SOREVNOVANIEScalarFieldEnum
    having?: GA_ANKETA_SOREVNOVANIEScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GA_ANKETA_SOREVNOVANIECountAggregateInputType | true
    _avg?: GA_ANKETA_SOREVNOVANIEAvgAggregateInputType
    _sum?: GA_ANKETA_SOREVNOVANIESumAggregateInputType
    _min?: GA_ANKETA_SOREVNOVANIEMinAggregateInputType
    _max?: GA_ANKETA_SOREVNOVANIEMaxAggregateInputType
  }

  export type GA_ANKETA_SOREVNOVANIEGroupByOutputType = {
    ASR_YEAR: number | null
    ASR_MONTH: number | null
    ASR_WSU_ID: bigint
    ASR_LOGIN: string | null
    ASR_FIO: string | null
    ASR_SCORE: number | null
    ASR_DOLJNOST: string | null
    ASR_RUKOVODITEL: boolean | null
    _count: GA_ANKETA_SOREVNOVANIECountAggregateOutputType | null
    _avg: GA_ANKETA_SOREVNOVANIEAvgAggregateOutputType | null
    _sum: GA_ANKETA_SOREVNOVANIESumAggregateOutputType | null
    _min: GA_ANKETA_SOREVNOVANIEMinAggregateOutputType | null
    _max: GA_ANKETA_SOREVNOVANIEMaxAggregateOutputType | null
  }

  type GetGA_ANKETA_SOREVNOVANIEGroupByPayload<T extends GA_ANKETA_SOREVNOVANIEGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GA_ANKETA_SOREVNOVANIEGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GA_ANKETA_SOREVNOVANIEGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GA_ANKETA_SOREVNOVANIEGroupByOutputType[P]>
            : GetScalarType<T[P], GA_ANKETA_SOREVNOVANIEGroupByOutputType[P]>
        }
      >
    >


  export type GA_ANKETA_SOREVNOVANIESelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ASR_YEAR?: boolean
    ASR_MONTH?: boolean
    ASR_WSU_ID?: boolean
    ASR_LOGIN?: boolean
    ASR_FIO?: boolean
    ASR_SCORE?: boolean
    ASR_DOLJNOST?: boolean
    ASR_RUKOVODITEL?: boolean
  }, ExtArgs["result"]["gA_ANKETA_SOREVNOVANIE"]>

  export type GA_ANKETA_SOREVNOVANIESelectScalar = {
    ASR_YEAR?: boolean
    ASR_MONTH?: boolean
    ASR_WSU_ID?: boolean
    ASR_LOGIN?: boolean
    ASR_FIO?: boolean
    ASR_SCORE?: boolean
    ASR_DOLJNOST?: boolean
    ASR_RUKOVODITEL?: boolean
  }


  export type $GA_ANKETA_SOREVNOVANIEPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GA_ANKETA_SOREVNOVANIE"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ASR_YEAR: number | null
      ASR_MONTH: number | null
      ASR_WSU_ID: bigint
      ASR_LOGIN: string | null
      ASR_FIO: string | null
      ASR_SCORE: number | null
      ASR_DOLJNOST: string | null
      ASR_RUKOVODITEL: boolean | null
    }, ExtArgs["result"]["gA_ANKETA_SOREVNOVANIE"]>
    composites: {}
  }


  type GA_ANKETA_SOREVNOVANIEGetPayload<S extends boolean | null | undefined | GA_ANKETA_SOREVNOVANIEDefaultArgs> = $Result.GetResult<Prisma.$GA_ANKETA_SOREVNOVANIEPayload, S>

  type GA_ANKETA_SOREVNOVANIECountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GA_ANKETA_SOREVNOVANIEFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GA_ANKETA_SOREVNOVANIECountAggregateInputType | true
    }

  export interface GA_ANKETA_SOREVNOVANIEDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GA_ANKETA_SOREVNOVANIE'], meta: { name: 'GA_ANKETA_SOREVNOVANIE' } }
    /**
     * Find zero or one GA_ANKETA_SOREVNOVANIE that matches the filter.
     * @param {GA_ANKETA_SOREVNOVANIEFindUniqueArgs} args - Arguments to find a GA_ANKETA_SOREVNOVANIE
     * @example
     * // Get one GA_ANKETA_SOREVNOVANIE
     * const gA_ANKETA_SOREVNOVANIE = await prisma.gA_ANKETA_SOREVNOVANIE.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GA_ANKETA_SOREVNOVANIEFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_SOREVNOVANIEFindUniqueArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SOREVNOVANIEClient<$Result.GetResult<Prisma.$GA_ANKETA_SOREVNOVANIEPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GA_ANKETA_SOREVNOVANIE that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GA_ANKETA_SOREVNOVANIEFindUniqueOrThrowArgs} args - Arguments to find a GA_ANKETA_SOREVNOVANIE
     * @example
     * // Get one GA_ANKETA_SOREVNOVANIE
     * const gA_ANKETA_SOREVNOVANIE = await prisma.gA_ANKETA_SOREVNOVANIE.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GA_ANKETA_SOREVNOVANIEFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_SOREVNOVANIEFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SOREVNOVANIEClient<$Result.GetResult<Prisma.$GA_ANKETA_SOREVNOVANIEPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GA_ANKETA_SOREVNOVANIE that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_SOREVNOVANIEFindFirstArgs} args - Arguments to find a GA_ANKETA_SOREVNOVANIE
     * @example
     * // Get one GA_ANKETA_SOREVNOVANIE
     * const gA_ANKETA_SOREVNOVANIE = await prisma.gA_ANKETA_SOREVNOVANIE.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GA_ANKETA_SOREVNOVANIEFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_SOREVNOVANIEFindFirstArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SOREVNOVANIEClient<$Result.GetResult<Prisma.$GA_ANKETA_SOREVNOVANIEPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GA_ANKETA_SOREVNOVANIE that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_SOREVNOVANIEFindFirstOrThrowArgs} args - Arguments to find a GA_ANKETA_SOREVNOVANIE
     * @example
     * // Get one GA_ANKETA_SOREVNOVANIE
     * const gA_ANKETA_SOREVNOVANIE = await prisma.gA_ANKETA_SOREVNOVANIE.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GA_ANKETA_SOREVNOVANIEFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_SOREVNOVANIEFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SOREVNOVANIEClient<$Result.GetResult<Prisma.$GA_ANKETA_SOREVNOVANIEPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GA_ANKETA_SOREVNOVANIES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_SOREVNOVANIEFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GA_ANKETA_SOREVNOVANIES
     * const gA_ANKETA_SOREVNOVANIES = await prisma.gA_ANKETA_SOREVNOVANIE.findMany()
     * 
     * // Get first 10 GA_ANKETA_SOREVNOVANIES
     * const gA_ANKETA_SOREVNOVANIES = await prisma.gA_ANKETA_SOREVNOVANIE.findMany({ take: 10 })
     * 
     * // Only select the `ASR_YEAR`
     * const gA_ANKETA_SOREVNOVANIEWithASR_YEAROnly = await prisma.gA_ANKETA_SOREVNOVANIE.findMany({ select: { ASR_YEAR: true } })
     * 
    **/
    findMany<T extends GA_ANKETA_SOREVNOVANIEFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_SOREVNOVANIEFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GA_ANKETA_SOREVNOVANIEPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GA_ANKETA_SOREVNOVANIE.
     * @param {GA_ANKETA_SOREVNOVANIECreateArgs} args - Arguments to create a GA_ANKETA_SOREVNOVANIE.
     * @example
     * // Create one GA_ANKETA_SOREVNOVANIE
     * const GA_ANKETA_SOREVNOVANIE = await prisma.gA_ANKETA_SOREVNOVANIE.create({
     *   data: {
     *     // ... data to create a GA_ANKETA_SOREVNOVANIE
     *   }
     * })
     * 
    **/
    create<T extends GA_ANKETA_SOREVNOVANIECreateArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_SOREVNOVANIECreateArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SOREVNOVANIEClient<$Result.GetResult<Prisma.$GA_ANKETA_SOREVNOVANIEPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GA_ANKETA_SOREVNOVANIES.
     *     @param {GA_ANKETA_SOREVNOVANIECreateManyArgs} args - Arguments to create many GA_ANKETA_SOREVNOVANIES.
     *     @example
     *     // Create many GA_ANKETA_SOREVNOVANIES
     *     const gA_ANKETA_SOREVNOVANIE = await prisma.gA_ANKETA_SOREVNOVANIE.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GA_ANKETA_SOREVNOVANIECreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_SOREVNOVANIECreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GA_ANKETA_SOREVNOVANIE.
     * @param {GA_ANKETA_SOREVNOVANIEDeleteArgs} args - Arguments to delete one GA_ANKETA_SOREVNOVANIE.
     * @example
     * // Delete one GA_ANKETA_SOREVNOVANIE
     * const GA_ANKETA_SOREVNOVANIE = await prisma.gA_ANKETA_SOREVNOVANIE.delete({
     *   where: {
     *     // ... filter to delete one GA_ANKETA_SOREVNOVANIE
     *   }
     * })
     * 
    **/
    delete<T extends GA_ANKETA_SOREVNOVANIEDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_SOREVNOVANIEDeleteArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SOREVNOVANIEClient<$Result.GetResult<Prisma.$GA_ANKETA_SOREVNOVANIEPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GA_ANKETA_SOREVNOVANIE.
     * @param {GA_ANKETA_SOREVNOVANIEUpdateArgs} args - Arguments to update one GA_ANKETA_SOREVNOVANIE.
     * @example
     * // Update one GA_ANKETA_SOREVNOVANIE
     * const gA_ANKETA_SOREVNOVANIE = await prisma.gA_ANKETA_SOREVNOVANIE.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GA_ANKETA_SOREVNOVANIEUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_SOREVNOVANIEUpdateArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SOREVNOVANIEClient<$Result.GetResult<Prisma.$GA_ANKETA_SOREVNOVANIEPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GA_ANKETA_SOREVNOVANIES.
     * @param {GA_ANKETA_SOREVNOVANIEDeleteManyArgs} args - Arguments to filter GA_ANKETA_SOREVNOVANIES to delete.
     * @example
     * // Delete a few GA_ANKETA_SOREVNOVANIES
     * const { count } = await prisma.gA_ANKETA_SOREVNOVANIE.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GA_ANKETA_SOREVNOVANIEDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_SOREVNOVANIEDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GA_ANKETA_SOREVNOVANIES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_SOREVNOVANIEUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GA_ANKETA_SOREVNOVANIES
     * const gA_ANKETA_SOREVNOVANIE = await prisma.gA_ANKETA_SOREVNOVANIE.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GA_ANKETA_SOREVNOVANIEUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_SOREVNOVANIEUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GA_ANKETA_SOREVNOVANIE.
     * @param {GA_ANKETA_SOREVNOVANIEUpsertArgs} args - Arguments to update or create a GA_ANKETA_SOREVNOVANIE.
     * @example
     * // Update or create a GA_ANKETA_SOREVNOVANIE
     * const gA_ANKETA_SOREVNOVANIE = await prisma.gA_ANKETA_SOREVNOVANIE.upsert({
     *   create: {
     *     // ... data to create a GA_ANKETA_SOREVNOVANIE
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GA_ANKETA_SOREVNOVANIE we want to update
     *   }
     * })
    **/
    upsert<T extends GA_ANKETA_SOREVNOVANIEUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_SOREVNOVANIEUpsertArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SOREVNOVANIEClient<$Result.GetResult<Prisma.$GA_ANKETA_SOREVNOVANIEPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of GA_ANKETA_SOREVNOVANIES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_SOREVNOVANIECountArgs} args - Arguments to filter GA_ANKETA_SOREVNOVANIES to count.
     * @example
     * // Count the number of GA_ANKETA_SOREVNOVANIES
     * const count = await prisma.gA_ANKETA_SOREVNOVANIE.count({
     *   where: {
     *     // ... the filter for the GA_ANKETA_SOREVNOVANIES we want to count
     *   }
     * })
    **/
    count<T extends GA_ANKETA_SOREVNOVANIECountArgs>(
      args?: Subset<T, GA_ANKETA_SOREVNOVANIECountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GA_ANKETA_SOREVNOVANIECountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GA_ANKETA_SOREVNOVANIE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_SOREVNOVANIEAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GA_ANKETA_SOREVNOVANIEAggregateArgs>(args: Subset<T, GA_ANKETA_SOREVNOVANIEAggregateArgs>): Prisma.PrismaPromise<GetGA_ANKETA_SOREVNOVANIEAggregateType<T>>

    /**
     * Group by GA_ANKETA_SOREVNOVANIE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_SOREVNOVANIEGroupByArgs} args - Group by arguments.
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
      T extends GA_ANKETA_SOREVNOVANIEGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GA_ANKETA_SOREVNOVANIEGroupByArgs['orderBy'] }
        : { orderBy?: GA_ANKETA_SOREVNOVANIEGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GA_ANKETA_SOREVNOVANIEGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGA_ANKETA_SOREVNOVANIEGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GA_ANKETA_SOREVNOVANIE model
   */
  readonly fields: GA_ANKETA_SOREVNOVANIEFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GA_ANKETA_SOREVNOVANIE.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GA_ANKETA_SOREVNOVANIEClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the GA_ANKETA_SOREVNOVANIE model
   */ 
  interface GA_ANKETA_SOREVNOVANIEFieldRefs {
    readonly ASR_YEAR: FieldRef<"GA_ANKETA_SOREVNOVANIE", 'Int'>
    readonly ASR_MONTH: FieldRef<"GA_ANKETA_SOREVNOVANIE", 'Int'>
    readonly ASR_WSU_ID: FieldRef<"GA_ANKETA_SOREVNOVANIE", 'BigInt'>
    readonly ASR_LOGIN: FieldRef<"GA_ANKETA_SOREVNOVANIE", 'String'>
    readonly ASR_FIO: FieldRef<"GA_ANKETA_SOREVNOVANIE", 'String'>
    readonly ASR_SCORE: FieldRef<"GA_ANKETA_SOREVNOVANIE", 'Int'>
    readonly ASR_DOLJNOST: FieldRef<"GA_ANKETA_SOREVNOVANIE", 'String'>
    readonly ASR_RUKOVODITEL: FieldRef<"GA_ANKETA_SOREVNOVANIE", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * GA_ANKETA_SOREVNOVANIE findUnique
   */
  export type GA_ANKETA_SOREVNOVANIEFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SOREVNOVANIE
     */
    select?: GA_ANKETA_SOREVNOVANIESelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_SOREVNOVANIE to fetch.
     */
    where: GA_ANKETA_SOREVNOVANIEWhereUniqueInput
  }


  /**
   * GA_ANKETA_SOREVNOVANIE findUniqueOrThrow
   */
  export type GA_ANKETA_SOREVNOVANIEFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SOREVNOVANIE
     */
    select?: GA_ANKETA_SOREVNOVANIESelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_SOREVNOVANIE to fetch.
     */
    where: GA_ANKETA_SOREVNOVANIEWhereUniqueInput
  }


  /**
   * GA_ANKETA_SOREVNOVANIE findFirst
   */
  export type GA_ANKETA_SOREVNOVANIEFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SOREVNOVANIE
     */
    select?: GA_ANKETA_SOREVNOVANIESelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_SOREVNOVANIE to fetch.
     */
    where?: GA_ANKETA_SOREVNOVANIEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_SOREVNOVANIES to fetch.
     */
    orderBy?: GA_ANKETA_SOREVNOVANIEOrderByWithRelationInput | GA_ANKETA_SOREVNOVANIEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GA_ANKETA_SOREVNOVANIES.
     */
    cursor?: GA_ANKETA_SOREVNOVANIEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_SOREVNOVANIES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_SOREVNOVANIES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GA_ANKETA_SOREVNOVANIES.
     */
    distinct?: GA_ANKETA_SOREVNOVANIEScalarFieldEnum | GA_ANKETA_SOREVNOVANIEScalarFieldEnum[]
  }


  /**
   * GA_ANKETA_SOREVNOVANIE findFirstOrThrow
   */
  export type GA_ANKETA_SOREVNOVANIEFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SOREVNOVANIE
     */
    select?: GA_ANKETA_SOREVNOVANIESelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_SOREVNOVANIE to fetch.
     */
    where?: GA_ANKETA_SOREVNOVANIEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_SOREVNOVANIES to fetch.
     */
    orderBy?: GA_ANKETA_SOREVNOVANIEOrderByWithRelationInput | GA_ANKETA_SOREVNOVANIEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GA_ANKETA_SOREVNOVANIES.
     */
    cursor?: GA_ANKETA_SOREVNOVANIEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_SOREVNOVANIES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_SOREVNOVANIES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GA_ANKETA_SOREVNOVANIES.
     */
    distinct?: GA_ANKETA_SOREVNOVANIEScalarFieldEnum | GA_ANKETA_SOREVNOVANIEScalarFieldEnum[]
  }


  /**
   * GA_ANKETA_SOREVNOVANIE findMany
   */
  export type GA_ANKETA_SOREVNOVANIEFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SOREVNOVANIE
     */
    select?: GA_ANKETA_SOREVNOVANIESelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_SOREVNOVANIES to fetch.
     */
    where?: GA_ANKETA_SOREVNOVANIEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_SOREVNOVANIES to fetch.
     */
    orderBy?: GA_ANKETA_SOREVNOVANIEOrderByWithRelationInput | GA_ANKETA_SOREVNOVANIEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GA_ANKETA_SOREVNOVANIES.
     */
    cursor?: GA_ANKETA_SOREVNOVANIEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_SOREVNOVANIES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_SOREVNOVANIES.
     */
    skip?: number
    distinct?: GA_ANKETA_SOREVNOVANIEScalarFieldEnum | GA_ANKETA_SOREVNOVANIEScalarFieldEnum[]
  }


  /**
   * GA_ANKETA_SOREVNOVANIE create
   */
  export type GA_ANKETA_SOREVNOVANIECreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SOREVNOVANIE
     */
    select?: GA_ANKETA_SOREVNOVANIESelect<ExtArgs> | null
    /**
     * The data needed to create a GA_ANKETA_SOREVNOVANIE.
     */
    data: XOR<GA_ANKETA_SOREVNOVANIECreateInput, GA_ANKETA_SOREVNOVANIEUncheckedCreateInput>
  }


  /**
   * GA_ANKETA_SOREVNOVANIE createMany
   */
  export type GA_ANKETA_SOREVNOVANIECreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GA_ANKETA_SOREVNOVANIES.
     */
    data: GA_ANKETA_SOREVNOVANIECreateManyInput | GA_ANKETA_SOREVNOVANIECreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * GA_ANKETA_SOREVNOVANIE update
   */
  export type GA_ANKETA_SOREVNOVANIEUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SOREVNOVANIE
     */
    select?: GA_ANKETA_SOREVNOVANIESelect<ExtArgs> | null
    /**
     * The data needed to update a GA_ANKETA_SOREVNOVANIE.
     */
    data: XOR<GA_ANKETA_SOREVNOVANIEUpdateInput, GA_ANKETA_SOREVNOVANIEUncheckedUpdateInput>
    /**
     * Choose, which GA_ANKETA_SOREVNOVANIE to update.
     */
    where: GA_ANKETA_SOREVNOVANIEWhereUniqueInput
  }


  /**
   * GA_ANKETA_SOREVNOVANIE updateMany
   */
  export type GA_ANKETA_SOREVNOVANIEUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GA_ANKETA_SOREVNOVANIES.
     */
    data: XOR<GA_ANKETA_SOREVNOVANIEUpdateManyMutationInput, GA_ANKETA_SOREVNOVANIEUncheckedUpdateManyInput>
    /**
     * Filter which GA_ANKETA_SOREVNOVANIES to update
     */
    where?: GA_ANKETA_SOREVNOVANIEWhereInput
  }


  /**
   * GA_ANKETA_SOREVNOVANIE upsert
   */
  export type GA_ANKETA_SOREVNOVANIEUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SOREVNOVANIE
     */
    select?: GA_ANKETA_SOREVNOVANIESelect<ExtArgs> | null
    /**
     * The filter to search for the GA_ANKETA_SOREVNOVANIE to update in case it exists.
     */
    where: GA_ANKETA_SOREVNOVANIEWhereUniqueInput
    /**
     * In case the GA_ANKETA_SOREVNOVANIE found by the `where` argument doesn't exist, create a new GA_ANKETA_SOREVNOVANIE with this data.
     */
    create: XOR<GA_ANKETA_SOREVNOVANIECreateInput, GA_ANKETA_SOREVNOVANIEUncheckedCreateInput>
    /**
     * In case the GA_ANKETA_SOREVNOVANIE was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GA_ANKETA_SOREVNOVANIEUpdateInput, GA_ANKETA_SOREVNOVANIEUncheckedUpdateInput>
  }


  /**
   * GA_ANKETA_SOREVNOVANIE delete
   */
  export type GA_ANKETA_SOREVNOVANIEDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SOREVNOVANIE
     */
    select?: GA_ANKETA_SOREVNOVANIESelect<ExtArgs> | null
    /**
     * Filter which GA_ANKETA_SOREVNOVANIE to delete.
     */
    where: GA_ANKETA_SOREVNOVANIEWhereUniqueInput
  }


  /**
   * GA_ANKETA_SOREVNOVANIE deleteMany
   */
  export type GA_ANKETA_SOREVNOVANIEDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GA_ANKETA_SOREVNOVANIES to delete
     */
    where?: GA_ANKETA_SOREVNOVANIEWhereInput
  }


  /**
   * GA_ANKETA_SOREVNOVANIE without action
   */
  export type GA_ANKETA_SOREVNOVANIEDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SOREVNOVANIE
     */
    select?: GA_ANKETA_SOREVNOVANIESelect<ExtArgs> | null
  }



  /**
   * Model GA_ANKETA_SUP
   */

  export type AggregateGA_ANKETA_SUP = {
    _count: GA_ANKETA_SUPCountAggregateOutputType | null
    _avg: GA_ANKETA_SUPAvgAggregateOutputType | null
    _sum: GA_ANKETA_SUPSumAggregateOutputType | null
    _min: GA_ANKETA_SUPMinAggregateOutputType | null
    _max: GA_ANKETA_SUPMaxAggregateOutputType | null
  }

  export type GA_ANKETA_SUPAvgAggregateOutputType = {
    ADB_ABA_ID: number | null
  }

  export type GA_ANKETA_SUPSumAggregateOutputType = {
    ADB_ABA_ID: bigint | null
  }

  export type GA_ANKETA_SUPMinAggregateOutputType = {
    ADB_ABA_ID: bigint | null
    ADB_SUP_NAME: string | null
    ADB_MAN_NAME1: string | null
    ADB_MAN_NAME2: string | null
    ADB_MAN_NAME3: string | null
    ADB_SUP_CODE_AE: string | null
    ADB_SUP_CODE_AUTORUS: string | null
    ADB_SUP_CODE_ROSSKO: string | null
    ADB_SUP_CODE_ARKONA: string | null
  }

  export type GA_ANKETA_SUPMaxAggregateOutputType = {
    ADB_ABA_ID: bigint | null
    ADB_SUP_NAME: string | null
    ADB_MAN_NAME1: string | null
    ADB_MAN_NAME2: string | null
    ADB_MAN_NAME3: string | null
    ADB_SUP_CODE_AE: string | null
    ADB_SUP_CODE_AUTORUS: string | null
    ADB_SUP_CODE_ROSSKO: string | null
    ADB_SUP_CODE_ARKONA: string | null
  }

  export type GA_ANKETA_SUPCountAggregateOutputType = {
    ADB_ABA_ID: number
    ADB_SUP_NAME: number
    ADB_MAN_NAME1: number
    ADB_MAN_NAME2: number
    ADB_MAN_NAME3: number
    ADB_SUP_CODE_AE: number
    ADB_SUP_CODE_AUTORUS: number
    ADB_SUP_CODE_ROSSKO: number
    ADB_SUP_CODE_ARKONA: number
    _all: number
  }


  export type GA_ANKETA_SUPAvgAggregateInputType = {
    ADB_ABA_ID?: true
  }

  export type GA_ANKETA_SUPSumAggregateInputType = {
    ADB_ABA_ID?: true
  }

  export type GA_ANKETA_SUPMinAggregateInputType = {
    ADB_ABA_ID?: true
    ADB_SUP_NAME?: true
    ADB_MAN_NAME1?: true
    ADB_MAN_NAME2?: true
    ADB_MAN_NAME3?: true
    ADB_SUP_CODE_AE?: true
    ADB_SUP_CODE_AUTORUS?: true
    ADB_SUP_CODE_ROSSKO?: true
    ADB_SUP_CODE_ARKONA?: true
  }

  export type GA_ANKETA_SUPMaxAggregateInputType = {
    ADB_ABA_ID?: true
    ADB_SUP_NAME?: true
    ADB_MAN_NAME1?: true
    ADB_MAN_NAME2?: true
    ADB_MAN_NAME3?: true
    ADB_SUP_CODE_AE?: true
    ADB_SUP_CODE_AUTORUS?: true
    ADB_SUP_CODE_ROSSKO?: true
    ADB_SUP_CODE_ARKONA?: true
  }

  export type GA_ANKETA_SUPCountAggregateInputType = {
    ADB_ABA_ID?: true
    ADB_SUP_NAME?: true
    ADB_MAN_NAME1?: true
    ADB_MAN_NAME2?: true
    ADB_MAN_NAME3?: true
    ADB_SUP_CODE_AE?: true
    ADB_SUP_CODE_AUTORUS?: true
    ADB_SUP_CODE_ROSSKO?: true
    ADB_SUP_CODE_ARKONA?: true
    _all?: true
  }

  export type GA_ANKETA_SUPAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GA_ANKETA_SUP to aggregate.
     */
    where?: GA_ANKETA_SUPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_SUPS to fetch.
     */
    orderBy?: GA_ANKETA_SUPOrderByWithRelationInput | GA_ANKETA_SUPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GA_ANKETA_SUPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_SUPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_SUPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GA_ANKETA_SUPS
    **/
    _count?: true | GA_ANKETA_SUPCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GA_ANKETA_SUPAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GA_ANKETA_SUPSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GA_ANKETA_SUPMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GA_ANKETA_SUPMaxAggregateInputType
  }

  export type GetGA_ANKETA_SUPAggregateType<T extends GA_ANKETA_SUPAggregateArgs> = {
        [P in keyof T & keyof AggregateGA_ANKETA_SUP]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGA_ANKETA_SUP[P]>
      : GetScalarType<T[P], AggregateGA_ANKETA_SUP[P]>
  }




  export type GA_ANKETA_SUPGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GA_ANKETA_SUPWhereInput
    orderBy?: GA_ANKETA_SUPOrderByWithAggregationInput | GA_ANKETA_SUPOrderByWithAggregationInput[]
    by: GA_ANKETA_SUPScalarFieldEnum[] | GA_ANKETA_SUPScalarFieldEnum
    having?: GA_ANKETA_SUPScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GA_ANKETA_SUPCountAggregateInputType | true
    _avg?: GA_ANKETA_SUPAvgAggregateInputType
    _sum?: GA_ANKETA_SUPSumAggregateInputType
    _min?: GA_ANKETA_SUPMinAggregateInputType
    _max?: GA_ANKETA_SUPMaxAggregateInputType
  }

  export type GA_ANKETA_SUPGroupByOutputType = {
    ADB_ABA_ID: bigint
    ADB_SUP_NAME: string | null
    ADB_MAN_NAME1: string | null
    ADB_MAN_NAME2: string | null
    ADB_MAN_NAME3: string | null
    ADB_SUP_CODE_AE: string | null
    ADB_SUP_CODE_AUTORUS: string | null
    ADB_SUP_CODE_ROSSKO: string | null
    ADB_SUP_CODE_ARKONA: string | null
    _count: GA_ANKETA_SUPCountAggregateOutputType | null
    _avg: GA_ANKETA_SUPAvgAggregateOutputType | null
    _sum: GA_ANKETA_SUPSumAggregateOutputType | null
    _min: GA_ANKETA_SUPMinAggregateOutputType | null
    _max: GA_ANKETA_SUPMaxAggregateOutputType | null
  }

  type GetGA_ANKETA_SUPGroupByPayload<T extends GA_ANKETA_SUPGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GA_ANKETA_SUPGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GA_ANKETA_SUPGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GA_ANKETA_SUPGroupByOutputType[P]>
            : GetScalarType<T[P], GA_ANKETA_SUPGroupByOutputType[P]>
        }
      >
    >


  export type GA_ANKETA_SUPSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ADB_ABA_ID?: boolean
    ADB_SUP_NAME?: boolean
    ADB_MAN_NAME1?: boolean
    ADB_MAN_NAME2?: boolean
    ADB_MAN_NAME3?: boolean
    ADB_SUP_CODE_AE?: boolean
    ADB_SUP_CODE_AUTORUS?: boolean
    ADB_SUP_CODE_ROSSKO?: boolean
    ADB_SUP_CODE_ARKONA?: boolean
  }, ExtArgs["result"]["gA_ANKETA_SUP"]>

  export type GA_ANKETA_SUPSelectScalar = {
    ADB_ABA_ID?: boolean
    ADB_SUP_NAME?: boolean
    ADB_MAN_NAME1?: boolean
    ADB_MAN_NAME2?: boolean
    ADB_MAN_NAME3?: boolean
    ADB_SUP_CODE_AE?: boolean
    ADB_SUP_CODE_AUTORUS?: boolean
    ADB_SUP_CODE_ROSSKO?: boolean
    ADB_SUP_CODE_ARKONA?: boolean
  }


  export type $GA_ANKETA_SUPPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GA_ANKETA_SUP"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ADB_ABA_ID: bigint
      ADB_SUP_NAME: string | null
      ADB_MAN_NAME1: string | null
      ADB_MAN_NAME2: string | null
      ADB_MAN_NAME3: string | null
      ADB_SUP_CODE_AE: string | null
      ADB_SUP_CODE_AUTORUS: string | null
      ADB_SUP_CODE_ROSSKO: string | null
      ADB_SUP_CODE_ARKONA: string | null
    }, ExtArgs["result"]["gA_ANKETA_SUP"]>
    composites: {}
  }


  type GA_ANKETA_SUPGetPayload<S extends boolean | null | undefined | GA_ANKETA_SUPDefaultArgs> = $Result.GetResult<Prisma.$GA_ANKETA_SUPPayload, S>

  type GA_ANKETA_SUPCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GA_ANKETA_SUPFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GA_ANKETA_SUPCountAggregateInputType | true
    }

  export interface GA_ANKETA_SUPDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GA_ANKETA_SUP'], meta: { name: 'GA_ANKETA_SUP' } }
    /**
     * Find zero or one GA_ANKETA_SUP that matches the filter.
     * @param {GA_ANKETA_SUPFindUniqueArgs} args - Arguments to find a GA_ANKETA_SUP
     * @example
     * // Get one GA_ANKETA_SUP
     * const gA_ANKETA_SUP = await prisma.gA_ANKETA_SUP.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GA_ANKETA_SUPFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_SUPFindUniqueArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SUPClient<$Result.GetResult<Prisma.$GA_ANKETA_SUPPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GA_ANKETA_SUP that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GA_ANKETA_SUPFindUniqueOrThrowArgs} args - Arguments to find a GA_ANKETA_SUP
     * @example
     * // Get one GA_ANKETA_SUP
     * const gA_ANKETA_SUP = await prisma.gA_ANKETA_SUP.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GA_ANKETA_SUPFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_SUPFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SUPClient<$Result.GetResult<Prisma.$GA_ANKETA_SUPPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GA_ANKETA_SUP that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_SUPFindFirstArgs} args - Arguments to find a GA_ANKETA_SUP
     * @example
     * // Get one GA_ANKETA_SUP
     * const gA_ANKETA_SUP = await prisma.gA_ANKETA_SUP.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GA_ANKETA_SUPFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_SUPFindFirstArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SUPClient<$Result.GetResult<Prisma.$GA_ANKETA_SUPPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GA_ANKETA_SUP that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_SUPFindFirstOrThrowArgs} args - Arguments to find a GA_ANKETA_SUP
     * @example
     * // Get one GA_ANKETA_SUP
     * const gA_ANKETA_SUP = await prisma.gA_ANKETA_SUP.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GA_ANKETA_SUPFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_SUPFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SUPClient<$Result.GetResult<Prisma.$GA_ANKETA_SUPPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GA_ANKETA_SUPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_SUPFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GA_ANKETA_SUPS
     * const gA_ANKETA_SUPS = await prisma.gA_ANKETA_SUP.findMany()
     * 
     * // Get first 10 GA_ANKETA_SUPS
     * const gA_ANKETA_SUPS = await prisma.gA_ANKETA_SUP.findMany({ take: 10 })
     * 
     * // Only select the `ADB_ABA_ID`
     * const gA_ANKETA_SUPWithADB_ABA_IDOnly = await prisma.gA_ANKETA_SUP.findMany({ select: { ADB_ABA_ID: true } })
     * 
    **/
    findMany<T extends GA_ANKETA_SUPFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_SUPFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GA_ANKETA_SUPPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GA_ANKETA_SUP.
     * @param {GA_ANKETA_SUPCreateArgs} args - Arguments to create a GA_ANKETA_SUP.
     * @example
     * // Create one GA_ANKETA_SUP
     * const GA_ANKETA_SUP = await prisma.gA_ANKETA_SUP.create({
     *   data: {
     *     // ... data to create a GA_ANKETA_SUP
     *   }
     * })
     * 
    **/
    create<T extends GA_ANKETA_SUPCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_SUPCreateArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SUPClient<$Result.GetResult<Prisma.$GA_ANKETA_SUPPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GA_ANKETA_SUPS.
     *     @param {GA_ANKETA_SUPCreateManyArgs} args - Arguments to create many GA_ANKETA_SUPS.
     *     @example
     *     // Create many GA_ANKETA_SUPS
     *     const gA_ANKETA_SUP = await prisma.gA_ANKETA_SUP.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GA_ANKETA_SUPCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_SUPCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GA_ANKETA_SUP.
     * @param {GA_ANKETA_SUPDeleteArgs} args - Arguments to delete one GA_ANKETA_SUP.
     * @example
     * // Delete one GA_ANKETA_SUP
     * const GA_ANKETA_SUP = await prisma.gA_ANKETA_SUP.delete({
     *   where: {
     *     // ... filter to delete one GA_ANKETA_SUP
     *   }
     * })
     * 
    **/
    delete<T extends GA_ANKETA_SUPDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_SUPDeleteArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SUPClient<$Result.GetResult<Prisma.$GA_ANKETA_SUPPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GA_ANKETA_SUP.
     * @param {GA_ANKETA_SUPUpdateArgs} args - Arguments to update one GA_ANKETA_SUP.
     * @example
     * // Update one GA_ANKETA_SUP
     * const gA_ANKETA_SUP = await prisma.gA_ANKETA_SUP.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GA_ANKETA_SUPUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_SUPUpdateArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SUPClient<$Result.GetResult<Prisma.$GA_ANKETA_SUPPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GA_ANKETA_SUPS.
     * @param {GA_ANKETA_SUPDeleteManyArgs} args - Arguments to filter GA_ANKETA_SUPS to delete.
     * @example
     * // Delete a few GA_ANKETA_SUPS
     * const { count } = await prisma.gA_ANKETA_SUP.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GA_ANKETA_SUPDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GA_ANKETA_SUPDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GA_ANKETA_SUPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_SUPUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GA_ANKETA_SUPS
     * const gA_ANKETA_SUP = await prisma.gA_ANKETA_SUP.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GA_ANKETA_SUPUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_SUPUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GA_ANKETA_SUP.
     * @param {GA_ANKETA_SUPUpsertArgs} args - Arguments to update or create a GA_ANKETA_SUP.
     * @example
     * // Update or create a GA_ANKETA_SUP
     * const gA_ANKETA_SUP = await prisma.gA_ANKETA_SUP.upsert({
     *   create: {
     *     // ... data to create a GA_ANKETA_SUP
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GA_ANKETA_SUP we want to update
     *   }
     * })
    **/
    upsert<T extends GA_ANKETA_SUPUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GA_ANKETA_SUPUpsertArgs<ExtArgs>>
    ): Prisma__GA_ANKETA_SUPClient<$Result.GetResult<Prisma.$GA_ANKETA_SUPPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of GA_ANKETA_SUPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_SUPCountArgs} args - Arguments to filter GA_ANKETA_SUPS to count.
     * @example
     * // Count the number of GA_ANKETA_SUPS
     * const count = await prisma.gA_ANKETA_SUP.count({
     *   where: {
     *     // ... the filter for the GA_ANKETA_SUPS we want to count
     *   }
     * })
    **/
    count<T extends GA_ANKETA_SUPCountArgs>(
      args?: Subset<T, GA_ANKETA_SUPCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GA_ANKETA_SUPCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GA_ANKETA_SUP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_SUPAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GA_ANKETA_SUPAggregateArgs>(args: Subset<T, GA_ANKETA_SUPAggregateArgs>): Prisma.PrismaPromise<GetGA_ANKETA_SUPAggregateType<T>>

    /**
     * Group by GA_ANKETA_SUP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GA_ANKETA_SUPGroupByArgs} args - Group by arguments.
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
      T extends GA_ANKETA_SUPGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GA_ANKETA_SUPGroupByArgs['orderBy'] }
        : { orderBy?: GA_ANKETA_SUPGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GA_ANKETA_SUPGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGA_ANKETA_SUPGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GA_ANKETA_SUP model
   */
  readonly fields: GA_ANKETA_SUPFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GA_ANKETA_SUP.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GA_ANKETA_SUPClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the GA_ANKETA_SUP model
   */ 
  interface GA_ANKETA_SUPFieldRefs {
    readonly ADB_ABA_ID: FieldRef<"GA_ANKETA_SUP", 'BigInt'>
    readonly ADB_SUP_NAME: FieldRef<"GA_ANKETA_SUP", 'String'>
    readonly ADB_MAN_NAME1: FieldRef<"GA_ANKETA_SUP", 'String'>
    readonly ADB_MAN_NAME2: FieldRef<"GA_ANKETA_SUP", 'String'>
    readonly ADB_MAN_NAME3: FieldRef<"GA_ANKETA_SUP", 'String'>
    readonly ADB_SUP_CODE_AE: FieldRef<"GA_ANKETA_SUP", 'String'>
    readonly ADB_SUP_CODE_AUTORUS: FieldRef<"GA_ANKETA_SUP", 'String'>
    readonly ADB_SUP_CODE_ROSSKO: FieldRef<"GA_ANKETA_SUP", 'String'>
    readonly ADB_SUP_CODE_ARKONA: FieldRef<"GA_ANKETA_SUP", 'String'>
  }
    

  // Custom InputTypes

  /**
   * GA_ANKETA_SUP findUnique
   */
  export type GA_ANKETA_SUPFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SUP
     */
    select?: GA_ANKETA_SUPSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_SUP to fetch.
     */
    where: GA_ANKETA_SUPWhereUniqueInput
  }


  /**
   * GA_ANKETA_SUP findUniqueOrThrow
   */
  export type GA_ANKETA_SUPFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SUP
     */
    select?: GA_ANKETA_SUPSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_SUP to fetch.
     */
    where: GA_ANKETA_SUPWhereUniqueInput
  }


  /**
   * GA_ANKETA_SUP findFirst
   */
  export type GA_ANKETA_SUPFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SUP
     */
    select?: GA_ANKETA_SUPSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_SUP to fetch.
     */
    where?: GA_ANKETA_SUPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_SUPS to fetch.
     */
    orderBy?: GA_ANKETA_SUPOrderByWithRelationInput | GA_ANKETA_SUPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GA_ANKETA_SUPS.
     */
    cursor?: GA_ANKETA_SUPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_SUPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_SUPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GA_ANKETA_SUPS.
     */
    distinct?: GA_ANKETA_SUPScalarFieldEnum | GA_ANKETA_SUPScalarFieldEnum[]
  }


  /**
   * GA_ANKETA_SUP findFirstOrThrow
   */
  export type GA_ANKETA_SUPFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SUP
     */
    select?: GA_ANKETA_SUPSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_SUP to fetch.
     */
    where?: GA_ANKETA_SUPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_SUPS to fetch.
     */
    orderBy?: GA_ANKETA_SUPOrderByWithRelationInput | GA_ANKETA_SUPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GA_ANKETA_SUPS.
     */
    cursor?: GA_ANKETA_SUPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_SUPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_SUPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GA_ANKETA_SUPS.
     */
    distinct?: GA_ANKETA_SUPScalarFieldEnum | GA_ANKETA_SUPScalarFieldEnum[]
  }


  /**
   * GA_ANKETA_SUP findMany
   */
  export type GA_ANKETA_SUPFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SUP
     */
    select?: GA_ANKETA_SUPSelect<ExtArgs> | null
    /**
     * Filter, which GA_ANKETA_SUPS to fetch.
     */
    where?: GA_ANKETA_SUPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GA_ANKETA_SUPS to fetch.
     */
    orderBy?: GA_ANKETA_SUPOrderByWithRelationInput | GA_ANKETA_SUPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GA_ANKETA_SUPS.
     */
    cursor?: GA_ANKETA_SUPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GA_ANKETA_SUPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GA_ANKETA_SUPS.
     */
    skip?: number
    distinct?: GA_ANKETA_SUPScalarFieldEnum | GA_ANKETA_SUPScalarFieldEnum[]
  }


  /**
   * GA_ANKETA_SUP create
   */
  export type GA_ANKETA_SUPCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SUP
     */
    select?: GA_ANKETA_SUPSelect<ExtArgs> | null
    /**
     * The data needed to create a GA_ANKETA_SUP.
     */
    data: XOR<GA_ANKETA_SUPCreateInput, GA_ANKETA_SUPUncheckedCreateInput>
  }


  /**
   * GA_ANKETA_SUP createMany
   */
  export type GA_ANKETA_SUPCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GA_ANKETA_SUPS.
     */
    data: GA_ANKETA_SUPCreateManyInput | GA_ANKETA_SUPCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * GA_ANKETA_SUP update
   */
  export type GA_ANKETA_SUPUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SUP
     */
    select?: GA_ANKETA_SUPSelect<ExtArgs> | null
    /**
     * The data needed to update a GA_ANKETA_SUP.
     */
    data: XOR<GA_ANKETA_SUPUpdateInput, GA_ANKETA_SUPUncheckedUpdateInput>
    /**
     * Choose, which GA_ANKETA_SUP to update.
     */
    where: GA_ANKETA_SUPWhereUniqueInput
  }


  /**
   * GA_ANKETA_SUP updateMany
   */
  export type GA_ANKETA_SUPUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GA_ANKETA_SUPS.
     */
    data: XOR<GA_ANKETA_SUPUpdateManyMutationInput, GA_ANKETA_SUPUncheckedUpdateManyInput>
    /**
     * Filter which GA_ANKETA_SUPS to update
     */
    where?: GA_ANKETA_SUPWhereInput
  }


  /**
   * GA_ANKETA_SUP upsert
   */
  export type GA_ANKETA_SUPUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SUP
     */
    select?: GA_ANKETA_SUPSelect<ExtArgs> | null
    /**
     * The filter to search for the GA_ANKETA_SUP to update in case it exists.
     */
    where: GA_ANKETA_SUPWhereUniqueInput
    /**
     * In case the GA_ANKETA_SUP found by the `where` argument doesn't exist, create a new GA_ANKETA_SUP with this data.
     */
    create: XOR<GA_ANKETA_SUPCreateInput, GA_ANKETA_SUPUncheckedCreateInput>
    /**
     * In case the GA_ANKETA_SUP was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GA_ANKETA_SUPUpdateInput, GA_ANKETA_SUPUncheckedUpdateInput>
  }


  /**
   * GA_ANKETA_SUP delete
   */
  export type GA_ANKETA_SUPDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SUP
     */
    select?: GA_ANKETA_SUPSelect<ExtArgs> | null
    /**
     * Filter which GA_ANKETA_SUP to delete.
     */
    where: GA_ANKETA_SUPWhereUniqueInput
  }


  /**
   * GA_ANKETA_SUP deleteMany
   */
  export type GA_ANKETA_SUPDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GA_ANKETA_SUPS to delete
     */
    where?: GA_ANKETA_SUPWhereInput
  }


  /**
   * GA_ANKETA_SUP without action
   */
  export type GA_ANKETA_SUPDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GA_ANKETA_SUP
     */
    select?: GA_ANKETA_SUPSelect<ExtArgs> | null
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
    WSU_WSO_ID: number | null
    WSU_ID: number | null
    WSU_ID_IN_DS: number | null
    WSU_PRICE_TYPE: number | null
    WSU_GRP_ID: number | null
    WSU_WS_ID: number | null
  }

  export type GA_WS_USERSSumAggregateOutputType = {
    WSU_WSO_ID: number | null
    WSU_ID: bigint | null
    WSU_ID_IN_DS: number | null
    WSU_PRICE_TYPE: number | null
    WSU_GRP_ID: number | null
    WSU_WS_ID: number | null
  }

  export type GA_WS_USERSMinAggregateOutputType = {
    WSU_WSO_ID: number | null
    WSU_ID: bigint | null
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
    WSU_WSO_ID: number | null
    WSU_ID: bigint | null
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
    WSU_WSO_ID: number
    WSU_ID: number
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
    WSU_WSO_ID?: true
    WSU_ID?: true
    WSU_ID_IN_DS?: true
    WSU_PRICE_TYPE?: true
    WSU_GRP_ID?: true
    WSU_WS_ID?: true
  }

  export type GA_WS_USERSSumAggregateInputType = {
    WSU_WSO_ID?: true
    WSU_ID?: true
    WSU_ID_IN_DS?: true
    WSU_PRICE_TYPE?: true
    WSU_GRP_ID?: true
    WSU_WS_ID?: true
  }

  export type GA_WS_USERSMinAggregateInputType = {
    WSU_WSO_ID?: true
    WSU_ID?: true
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
    WSU_WSO_ID?: true
    WSU_ID?: true
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
    WSU_WSO_ID?: true
    WSU_ID?: true
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
    WSU_WSO_ID: number | null
    WSU_ID: bigint
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
    WSU_WSO_ID?: boolean
    WSU_ID?: boolean
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
    WSU_WSO_ID?: boolean
    WSU_ID?: boolean
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
      WSU_WSO_ID: number | null
      WSU_ID: bigint
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
     * // Only select the `WSU_WSO_ID`
     * const gA_WS_USERSWithWSU_WSO_IDOnly = await prisma.gA_WS_USERS.findMany({ select: { WSU_WSO_ID: true } })
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
    readonly WSU_WSO_ID: FieldRef<"GA_WS_USERS", 'Int'>
    readonly WSU_ID: FieldRef<"GA_WS_USERS", 'BigInt'>
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
    AAD_ADDR: 'AAD_ADDR',
    AAD_POSTCODE: 'AAD_POSTCODE'
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


  export const GA_ANKETA_BRANDScalarFieldEnum: {
    ABR_ABA_ID: 'ABR_ABA_ID',
    ABR_STATUS: 'ABR_STATUS',
    ABR_DATETIME: 'ABR_DATETIME',
    ABR_HALF_STATUS: 'ABR_HALF_STATUS',
    ABR_VYVESKA_STATUS: 'ABR_VYVESKA_STATUS',
    ABR_KOROB_STATUS: 'ABR_KOROB_STATUS'
  };

  export type GA_ANKETA_BRANDScalarFieldEnum = (typeof GA_ANKETA_BRANDScalarFieldEnum)[keyof typeof GA_ANKETA_BRANDScalarFieldEnum]


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


  export const GA_ANKETA_SCORESScalarFieldEnum: {
    ANS_WSU_ID: 'ANS_WSU_ID',
    ANS_SCORES: 'ANS_SCORES',
    ANS_DATETIME: 'ANS_DATETIME',
    ANS_ISSHOW: 'ANS_ISSHOW'
  };

  export type GA_ANKETA_SCORESScalarFieldEnum = (typeof GA_ANKETA_SCORESScalarFieldEnum)[keyof typeof GA_ANKETA_SCORESScalarFieldEnum]


  export const GA_ANKETA_SCORES_HISTORYScalarFieldEnum: {
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

  export type GA_ANKETA_SCORES_HISTORYScalarFieldEnum = (typeof GA_ANKETA_SCORES_HISTORYScalarFieldEnum)[keyof typeof GA_ANKETA_SCORES_HISTORYScalarFieldEnum]


  export const GA_ANKETA_SOREVNOVANIEScalarFieldEnum: {
    ASR_YEAR: 'ASR_YEAR',
    ASR_MONTH: 'ASR_MONTH',
    ASR_WSU_ID: 'ASR_WSU_ID',
    ASR_LOGIN: 'ASR_LOGIN',
    ASR_FIO: 'ASR_FIO',
    ASR_SCORE: 'ASR_SCORE',
    ASR_DOLJNOST: 'ASR_DOLJNOST',
    ASR_RUKOVODITEL: 'ASR_RUKOVODITEL'
  };

  export type GA_ANKETA_SOREVNOVANIEScalarFieldEnum = (typeof GA_ANKETA_SOREVNOVANIEScalarFieldEnum)[keyof typeof GA_ANKETA_SOREVNOVANIEScalarFieldEnum]


  export const GA_ANKETA_SUPScalarFieldEnum: {
    ADB_ABA_ID: 'ADB_ABA_ID',
    ADB_SUP_NAME: 'ADB_SUP_NAME',
    ADB_MAN_NAME1: 'ADB_MAN_NAME1',
    ADB_MAN_NAME2: 'ADB_MAN_NAME2',
    ADB_MAN_NAME3: 'ADB_MAN_NAME3',
    ADB_SUP_CODE_AE: 'ADB_SUP_CODE_AE',
    ADB_SUP_CODE_AUTORUS: 'ADB_SUP_CODE_AUTORUS',
    ADB_SUP_CODE_ROSSKO: 'ADB_SUP_CODE_ROSSKO',
    ADB_SUP_CODE_ARKONA: 'ADB_SUP_CODE_ARKONA'
  };

  export type GA_ANKETA_SUPScalarFieldEnum = (typeof GA_ANKETA_SUPScalarFieldEnum)[keyof typeof GA_ANKETA_SUPScalarFieldEnum]


  export const GA_WS_USERSScalarFieldEnum: {
    WSU_WSO_ID: 'WSU_WSO_ID',
    WSU_ID: 'WSU_ID',
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
    AAD_SHIROTA?: StringNullableFilter<"GA_ANKETA_ADDR"> | string | null
    AAD_DOLGOTA?: StringNullableFilter<"GA_ANKETA_ADDR"> | string | null
    AAD_OBLAST?: StringNullableFilter<"GA_ANKETA_ADDR"> | string | null
    AAD_GOROD?: StringNullableFilter<"GA_ANKETA_ADDR"> | string | null
    AAD_ADDR?: StringNullableFilter<"GA_ANKETA_ADDR"> | string | null
    AAD_POSTCODE?: StringNullableFilter<"GA_ANKETA_ADDR"> | string | null
  }

  export type GA_ANKETA_ADDROrderByWithRelationInput = {
    AAD_ABA_ID?: SortOrder
    AAD_SHIROTA?: SortOrderInput | SortOrder
    AAD_DOLGOTA?: SortOrderInput | SortOrder
    AAD_OBLAST?: SortOrderInput | SortOrder
    AAD_GOROD?: SortOrderInput | SortOrder
    AAD_ADDR?: SortOrderInput | SortOrder
    AAD_POSTCODE?: SortOrderInput | SortOrder
  }

  export type GA_ANKETA_ADDRWhereUniqueInput = Prisma.AtLeast<{
    AAD_ABA_ID?: bigint | number
    AND?: GA_ANKETA_ADDRWhereInput | GA_ANKETA_ADDRWhereInput[]
    OR?: GA_ANKETA_ADDRWhereInput[]
    NOT?: GA_ANKETA_ADDRWhereInput | GA_ANKETA_ADDRWhereInput[]
    AAD_SHIROTA?: StringNullableFilter<"GA_ANKETA_ADDR"> | string | null
    AAD_DOLGOTA?: StringNullableFilter<"GA_ANKETA_ADDR"> | string | null
    AAD_OBLAST?: StringNullableFilter<"GA_ANKETA_ADDR"> | string | null
    AAD_GOROD?: StringNullableFilter<"GA_ANKETA_ADDR"> | string | null
    AAD_ADDR?: StringNullableFilter<"GA_ANKETA_ADDR"> | string | null
    AAD_POSTCODE?: StringNullableFilter<"GA_ANKETA_ADDR"> | string | null
  }, "AAD_ABA_ID">

  export type GA_ANKETA_ADDROrderByWithAggregationInput = {
    AAD_ABA_ID?: SortOrder
    AAD_SHIROTA?: SortOrderInput | SortOrder
    AAD_DOLGOTA?: SortOrderInput | SortOrder
    AAD_OBLAST?: SortOrderInput | SortOrder
    AAD_GOROD?: SortOrderInput | SortOrder
    AAD_ADDR?: SortOrderInput | SortOrder
    AAD_POSTCODE?: SortOrderInput | SortOrder
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
    AAD_SHIROTA?: StringNullableWithAggregatesFilter<"GA_ANKETA_ADDR"> | string | null
    AAD_DOLGOTA?: StringNullableWithAggregatesFilter<"GA_ANKETA_ADDR"> | string | null
    AAD_OBLAST?: StringNullableWithAggregatesFilter<"GA_ANKETA_ADDR"> | string | null
    AAD_GOROD?: StringNullableWithAggregatesFilter<"GA_ANKETA_ADDR"> | string | null
    AAD_ADDR?: StringNullableWithAggregatesFilter<"GA_ANKETA_ADDR"> | string | null
    AAD_POSTCODE?: StringNullableWithAggregatesFilter<"GA_ANKETA_ADDR"> | string | null
  }

  export type GA_ANKETA_BASEWhereInput = {
    AND?: GA_ANKETA_BASEWhereInput | GA_ANKETA_BASEWhereInput[]
    OR?: GA_ANKETA_BASEWhereInput[]
    NOT?: GA_ANKETA_BASEWhereInput | GA_ANKETA_BASEWhereInput[]
    ABA_WSU_ID?: BigIntNullableFilter<"GA_ANKETA_BASE"> | bigint | number | null
    ABA_STO_NAME?: StringNullableFilter<"GA_ANKETA_BASE"> | string | null
    ABA_STO_ID1?: StringNullableFilter<"GA_ANKETA_BASE"> | string | null
    ABA_REMZONA_QTY?: IntNullableFilter<"GA_ANKETA_BASE"> | number | null
    ABA_ENABLED?: BoolNullableFilter<"GA_ANKETA_BASE"> | boolean | null
    ABA_PHONE?: StringNullableFilter<"GA_ANKETA_BASE"> | string | null
    ABA_INN?: StringNullableFilter<"GA_ANKETA_BASE"> | string | null
    ABA_DATETIME_CREATED?: DateTimeNullableFilter<"GA_ANKETA_BASE"> | Date | string | null
    ABA_DATETIME_UPDATED?: DateTimeNullableFilter<"GA_ANKETA_BASE"> | Date | string | null
    ABA_ID?: BigIntFilter<"GA_ANKETA_BASE"> | bigint | number
    ABA_DATETIME?: DateTimeNullableFilter<"GA_ANKETA_BASE"> | Date | string | null
    ABA_STO_ID2?: StringNullableFilter<"GA_ANKETA_BASE"> | string | null
    ABA_STO_NAME_FIND?: StringNullableFilter<"GA_ANKETA_BASE"> | string | null
    ABA_DESC?: StringNullableFilter<"GA_ANKETA_BASE"> | string | null
  }

  export type GA_ANKETA_BASEOrderByWithRelationInput = {
    ABA_WSU_ID?: SortOrderInput | SortOrder
    ABA_STO_NAME?: SortOrderInput | SortOrder
    ABA_STO_ID1?: SortOrderInput | SortOrder
    ABA_REMZONA_QTY?: SortOrderInput | SortOrder
    ABA_ENABLED?: SortOrderInput | SortOrder
    ABA_PHONE?: SortOrderInput | SortOrder
    ABA_INN?: SortOrderInput | SortOrder
    ABA_DATETIME_CREATED?: SortOrderInput | SortOrder
    ABA_DATETIME_UPDATED?: SortOrderInput | SortOrder
    ABA_ID?: SortOrder
    ABA_DATETIME?: SortOrderInput | SortOrder
    ABA_STO_ID2?: SortOrderInput | SortOrder
    ABA_STO_NAME_FIND?: SortOrderInput | SortOrder
    ABA_DESC?: SortOrderInput | SortOrder
  }

  export type GA_ANKETA_BASEWhereUniqueInput = Prisma.AtLeast<{
    ABA_ID?: bigint | number
    AND?: GA_ANKETA_BASEWhereInput | GA_ANKETA_BASEWhereInput[]
    OR?: GA_ANKETA_BASEWhereInput[]
    NOT?: GA_ANKETA_BASEWhereInput | GA_ANKETA_BASEWhereInput[]
    ABA_WSU_ID?: BigIntNullableFilter<"GA_ANKETA_BASE"> | bigint | number | null
    ABA_STO_NAME?: StringNullableFilter<"GA_ANKETA_BASE"> | string | null
    ABA_STO_ID1?: StringNullableFilter<"GA_ANKETA_BASE"> | string | null
    ABA_REMZONA_QTY?: IntNullableFilter<"GA_ANKETA_BASE"> | number | null
    ABA_ENABLED?: BoolNullableFilter<"GA_ANKETA_BASE"> | boolean | null
    ABA_PHONE?: StringNullableFilter<"GA_ANKETA_BASE"> | string | null
    ABA_INN?: StringNullableFilter<"GA_ANKETA_BASE"> | string | null
    ABA_DATETIME_CREATED?: DateTimeNullableFilter<"GA_ANKETA_BASE"> | Date | string | null
    ABA_DATETIME_UPDATED?: DateTimeNullableFilter<"GA_ANKETA_BASE"> | Date | string | null
    ABA_DATETIME?: DateTimeNullableFilter<"GA_ANKETA_BASE"> | Date | string | null
    ABA_STO_ID2?: StringNullableFilter<"GA_ANKETA_BASE"> | string | null
    ABA_STO_NAME_FIND?: StringNullableFilter<"GA_ANKETA_BASE"> | string | null
    ABA_DESC?: StringNullableFilter<"GA_ANKETA_BASE"> | string | null
  }, "ABA_ID">

  export type GA_ANKETA_BASEOrderByWithAggregationInput = {
    ABA_WSU_ID?: SortOrderInput | SortOrder
    ABA_STO_NAME?: SortOrderInput | SortOrder
    ABA_STO_ID1?: SortOrderInput | SortOrder
    ABA_REMZONA_QTY?: SortOrderInput | SortOrder
    ABA_ENABLED?: SortOrderInput | SortOrder
    ABA_PHONE?: SortOrderInput | SortOrder
    ABA_INN?: SortOrderInput | SortOrder
    ABA_DATETIME_CREATED?: SortOrderInput | SortOrder
    ABA_DATETIME_UPDATED?: SortOrderInput | SortOrder
    ABA_ID?: SortOrder
    ABA_DATETIME?: SortOrderInput | SortOrder
    ABA_STO_ID2?: SortOrderInput | SortOrder
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
    ABA_WSU_ID?: BigIntNullableWithAggregatesFilter<"GA_ANKETA_BASE"> | bigint | number | null
    ABA_STO_NAME?: StringNullableWithAggregatesFilter<"GA_ANKETA_BASE"> | string | null
    ABA_STO_ID1?: StringNullableWithAggregatesFilter<"GA_ANKETA_BASE"> | string | null
    ABA_REMZONA_QTY?: IntNullableWithAggregatesFilter<"GA_ANKETA_BASE"> | number | null
    ABA_ENABLED?: BoolNullableWithAggregatesFilter<"GA_ANKETA_BASE"> | boolean | null
    ABA_PHONE?: StringNullableWithAggregatesFilter<"GA_ANKETA_BASE"> | string | null
    ABA_INN?: StringNullableWithAggregatesFilter<"GA_ANKETA_BASE"> | string | null
    ABA_DATETIME_CREATED?: DateTimeNullableWithAggregatesFilter<"GA_ANKETA_BASE"> | Date | string | null
    ABA_DATETIME_UPDATED?: DateTimeNullableWithAggregatesFilter<"GA_ANKETA_BASE"> | Date | string | null
    ABA_ID?: BigIntWithAggregatesFilter<"GA_ANKETA_BASE"> | bigint | number
    ABA_DATETIME?: DateTimeNullableWithAggregatesFilter<"GA_ANKETA_BASE"> | Date | string | null
    ABA_STO_ID2?: StringNullableWithAggregatesFilter<"GA_ANKETA_BASE"> | string | null
    ABA_STO_NAME_FIND?: StringNullableWithAggregatesFilter<"GA_ANKETA_BASE"> | string | null
    ABA_DESC?: StringNullableWithAggregatesFilter<"GA_ANKETA_BASE"> | string | null
  }

  export type GA_ANKETA_BRANDWhereInput = {
    AND?: GA_ANKETA_BRANDWhereInput | GA_ANKETA_BRANDWhereInput[]
    OR?: GA_ANKETA_BRANDWhereInput[]
    NOT?: GA_ANKETA_BRANDWhereInput | GA_ANKETA_BRANDWhereInput[]
    ABR_ABA_ID?: BigIntFilter<"GA_ANKETA_BRAND"> | bigint | number
    ABR_STATUS?: BoolNullableFilter<"GA_ANKETA_BRAND"> | boolean | null
    ABR_DATETIME?: DateTimeNullableFilter<"GA_ANKETA_BRAND"> | Date | string | null
    ABR_HALF_STATUS?: BoolNullableFilter<"GA_ANKETA_BRAND"> | boolean | null
    ABR_VYVESKA_STATUS?: BoolNullableFilter<"GA_ANKETA_BRAND"> | boolean | null
    ABR_KOROB_STATUS?: BoolNullableFilter<"GA_ANKETA_BRAND"> | boolean | null
  }

  export type GA_ANKETA_BRANDOrderByWithRelationInput = {
    ABR_ABA_ID?: SortOrder
    ABR_STATUS?: SortOrderInput | SortOrder
    ABR_DATETIME?: SortOrderInput | SortOrder
    ABR_HALF_STATUS?: SortOrderInput | SortOrder
    ABR_VYVESKA_STATUS?: SortOrderInput | SortOrder
    ABR_KOROB_STATUS?: SortOrderInput | SortOrder
  }

  export type GA_ANKETA_BRANDWhereUniqueInput = Prisma.AtLeast<{
    ABR_ABA_ID?: bigint | number
    AND?: GA_ANKETA_BRANDWhereInput | GA_ANKETA_BRANDWhereInput[]
    OR?: GA_ANKETA_BRANDWhereInput[]
    NOT?: GA_ANKETA_BRANDWhereInput | GA_ANKETA_BRANDWhereInput[]
    ABR_STATUS?: BoolNullableFilter<"GA_ANKETA_BRAND"> | boolean | null
    ABR_DATETIME?: DateTimeNullableFilter<"GA_ANKETA_BRAND"> | Date | string | null
    ABR_HALF_STATUS?: BoolNullableFilter<"GA_ANKETA_BRAND"> | boolean | null
    ABR_VYVESKA_STATUS?: BoolNullableFilter<"GA_ANKETA_BRAND"> | boolean | null
    ABR_KOROB_STATUS?: BoolNullableFilter<"GA_ANKETA_BRAND"> | boolean | null
  }, "ABR_ABA_ID">

  export type GA_ANKETA_BRANDOrderByWithAggregationInput = {
    ABR_ABA_ID?: SortOrder
    ABR_STATUS?: SortOrderInput | SortOrder
    ABR_DATETIME?: SortOrderInput | SortOrder
    ABR_HALF_STATUS?: SortOrderInput | SortOrder
    ABR_VYVESKA_STATUS?: SortOrderInput | SortOrder
    ABR_KOROB_STATUS?: SortOrderInput | SortOrder
    _count?: GA_ANKETA_BRANDCountOrderByAggregateInput
    _avg?: GA_ANKETA_BRANDAvgOrderByAggregateInput
    _max?: GA_ANKETA_BRANDMaxOrderByAggregateInput
    _min?: GA_ANKETA_BRANDMinOrderByAggregateInput
    _sum?: GA_ANKETA_BRANDSumOrderByAggregateInput
  }

  export type GA_ANKETA_BRANDScalarWhereWithAggregatesInput = {
    AND?: GA_ANKETA_BRANDScalarWhereWithAggregatesInput | GA_ANKETA_BRANDScalarWhereWithAggregatesInput[]
    OR?: GA_ANKETA_BRANDScalarWhereWithAggregatesInput[]
    NOT?: GA_ANKETA_BRANDScalarWhereWithAggregatesInput | GA_ANKETA_BRANDScalarWhereWithAggregatesInput[]
    ABR_ABA_ID?: BigIntWithAggregatesFilter<"GA_ANKETA_BRAND"> | bigint | number
    ABR_STATUS?: BoolNullableWithAggregatesFilter<"GA_ANKETA_BRAND"> | boolean | null
    ABR_DATETIME?: DateTimeNullableWithAggregatesFilter<"GA_ANKETA_BRAND"> | Date | string | null
    ABR_HALF_STATUS?: BoolNullableWithAggregatesFilter<"GA_ANKETA_BRAND"> | boolean | null
    ABR_VYVESKA_STATUS?: BoolNullableWithAggregatesFilter<"GA_ANKETA_BRAND"> | boolean | null
    ABR_KOROB_STATUS?: BoolNullableWithAggregatesFilter<"GA_ANKETA_BRAND"> | boolean | null
  }

  export type GA_ANKETA_DOGOVORWhereInput = {
    AND?: GA_ANKETA_DOGOVORWhereInput | GA_ANKETA_DOGOVORWhereInput[]
    OR?: GA_ANKETA_DOGOVORWhereInput[]
    NOT?: GA_ANKETA_DOGOVORWhereInput | GA_ANKETA_DOGOVORWhereInput[]
    ADO_ABA_ID?: BigIntFilter<"GA_ANKETA_DOGOVOR"> | bigint | number
    ADO_NAME1?: StringNullableFilter<"GA_ANKETA_DOGOVOR"> | string | null
    ADO_NAME2?: StringNullableFilter<"GA_ANKETA_DOGOVOR"> | string | null
    ADO_NAME3?: StringNullableFilter<"GA_ANKETA_DOGOVOR"> | string | null
    ADO_PHONE?: StringNullableFilter<"GA_ANKETA_DOGOVOR"> | string | null
    ADO_EMAIL?: StringNullableFilter<"GA_ANKETA_DOGOVOR"> | string | null
    ADO_DATETIME?: DateTimeNullableFilter<"GA_ANKETA_DOGOVOR"> | Date | string | null
    ADO_STATUS?: BoolNullableFilter<"GA_ANKETA_DOGOVOR"> | boolean | null
  }

  export type GA_ANKETA_DOGOVOROrderByWithRelationInput = {
    ADO_ABA_ID?: SortOrder
    ADO_NAME1?: SortOrderInput | SortOrder
    ADO_NAME2?: SortOrderInput | SortOrder
    ADO_NAME3?: SortOrderInput | SortOrder
    ADO_PHONE?: SortOrderInput | SortOrder
    ADO_EMAIL?: SortOrderInput | SortOrder
    ADO_DATETIME?: SortOrderInput | SortOrder
    ADO_STATUS?: SortOrderInput | SortOrder
  }

  export type GA_ANKETA_DOGOVORWhereUniqueInput = Prisma.AtLeast<{
    ADO_ABA_ID?: bigint | number
    AND?: GA_ANKETA_DOGOVORWhereInput | GA_ANKETA_DOGOVORWhereInput[]
    OR?: GA_ANKETA_DOGOVORWhereInput[]
    NOT?: GA_ANKETA_DOGOVORWhereInput | GA_ANKETA_DOGOVORWhereInput[]
    ADO_NAME1?: StringNullableFilter<"GA_ANKETA_DOGOVOR"> | string | null
    ADO_NAME2?: StringNullableFilter<"GA_ANKETA_DOGOVOR"> | string | null
    ADO_NAME3?: StringNullableFilter<"GA_ANKETA_DOGOVOR"> | string | null
    ADO_PHONE?: StringNullableFilter<"GA_ANKETA_DOGOVOR"> | string | null
    ADO_EMAIL?: StringNullableFilter<"GA_ANKETA_DOGOVOR"> | string | null
    ADO_DATETIME?: DateTimeNullableFilter<"GA_ANKETA_DOGOVOR"> | Date | string | null
    ADO_STATUS?: BoolNullableFilter<"GA_ANKETA_DOGOVOR"> | boolean | null
  }, "ADO_ABA_ID">

  export type GA_ANKETA_DOGOVOROrderByWithAggregationInput = {
    ADO_ABA_ID?: SortOrder
    ADO_NAME1?: SortOrderInput | SortOrder
    ADO_NAME2?: SortOrderInput | SortOrder
    ADO_NAME3?: SortOrderInput | SortOrder
    ADO_PHONE?: SortOrderInput | SortOrder
    ADO_EMAIL?: SortOrderInput | SortOrder
    ADO_DATETIME?: SortOrderInput | SortOrder
    ADO_STATUS?: SortOrderInput | SortOrder
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
    ADO_NAME1?: StringNullableWithAggregatesFilter<"GA_ANKETA_DOGOVOR"> | string | null
    ADO_NAME2?: StringNullableWithAggregatesFilter<"GA_ANKETA_DOGOVOR"> | string | null
    ADO_NAME3?: StringNullableWithAggregatesFilter<"GA_ANKETA_DOGOVOR"> | string | null
    ADO_PHONE?: StringNullableWithAggregatesFilter<"GA_ANKETA_DOGOVOR"> | string | null
    ADO_EMAIL?: StringNullableWithAggregatesFilter<"GA_ANKETA_DOGOVOR"> | string | null
    ADO_DATETIME?: DateTimeNullableWithAggregatesFilter<"GA_ANKETA_DOGOVOR"> | Date | string | null
    ADO_STATUS?: BoolNullableWithAggregatesFilter<"GA_ANKETA_DOGOVOR"> | boolean | null
  }

  export type GA_ANKETA_OBOROTWhereInput = {
    AND?: GA_ANKETA_OBOROTWhereInput | GA_ANKETA_OBOROTWhereInput[]
    OR?: GA_ANKETA_OBOROTWhereInput[]
    NOT?: GA_ANKETA_OBOROTWhereInput | GA_ANKETA_OBOROTWhereInput[]
    ABO_ABA_ID?: BigIntFilter<"GA_ANKETA_OBOROT"> | bigint | number
    ABO_DATETIME?: DateTimeNullableFilter<"GA_ANKETA_OBOROT"> | Date | string | null
    ABO_OBOROT_ALL?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRANDS_MONTH?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_AE?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_ROSSKO?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_ARKONA?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_AUTORUS?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_SCORES_MONTH_PLAN?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_SCORES_MONTH_FAKT?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_COUNT_ROSSKO?: IntNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_COUNT_AE?: IntNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_COUNT_ARKONA?: IntNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_COUNT_AUTORUS?: IntNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRANDS?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND_LOOK1?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_SCORES?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND_LOOK2?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND_LOOK2_AE?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRANDS_MONTH_AE?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND1?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND2?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND3?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND4?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND5?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND6?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_NEXT?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_SCORES_MONTH_PLAN_NEXT?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_ABA_REMZONA_QTY?: IntNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_PARTRA?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_SCORES_PARTRA?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
  }

  export type GA_ANKETA_OBOROTOrderByWithRelationInput = {
    ABO_ABA_ID?: SortOrder
    ABO_DATETIME?: SortOrderInput | SortOrder
    ABO_OBOROT_ALL?: SortOrderInput | SortOrder
    ABO_OBOROT_BRANDS_MONTH?: SortOrderInput | SortOrder
    ABO_OBOROT_AE?: SortOrderInput | SortOrder
    ABO_OBOROT_ROSSKO?: SortOrderInput | SortOrder
    ABO_OBOROT_ARKONA?: SortOrderInput | SortOrder
    ABO_OBOROT_AUTORUS?: SortOrderInput | SortOrder
    ABO_SCORES_MONTH_PLAN?: SortOrderInput | SortOrder
    ABO_SCORES_MONTH_FAKT?: SortOrderInput | SortOrder
    ABO_COUNT_ROSSKO?: SortOrderInput | SortOrder
    ABO_COUNT_AE?: SortOrderInput | SortOrder
    ABO_COUNT_ARKONA?: SortOrderInput | SortOrder
    ABO_COUNT_AUTORUS?: SortOrderInput | SortOrder
    ABO_OBOROT_BRANDS?: SortOrderInput | SortOrder
    ABO_OBOROT_BRAND_LOOK1?: SortOrderInput | SortOrder
    ABO_SCORES?: SortOrderInput | SortOrder
    ABO_OBOROT_BRAND_LOOK2?: SortOrderInput | SortOrder
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: SortOrderInput | SortOrder
    ABO_OBOROT_BRAND_LOOK2_AE?: SortOrderInput | SortOrder
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: SortOrderInput | SortOrder
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: SortOrderInput | SortOrder
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: SortOrderInput | SortOrder
    ABO_OBOROT_BRANDS_MONTH_AE?: SortOrderInput | SortOrder
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: SortOrderInput | SortOrder
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: SortOrderInput | SortOrder
    ABO_OBOROT_BRAND1?: SortOrderInput | SortOrder
    ABO_OBOROT_BRAND2?: SortOrderInput | SortOrder
    ABO_OBOROT_BRAND3?: SortOrderInput | SortOrder
    ABO_OBOROT_BRAND4?: SortOrderInput | SortOrder
    ABO_OBOROT_BRAND5?: SortOrderInput | SortOrder
    ABO_OBOROT_BRAND6?: SortOrderInput | SortOrder
    ABO_OBOROT_NEXT?: SortOrderInput | SortOrder
    ABO_SCORES_MONTH_PLAN_NEXT?: SortOrderInput | SortOrder
    ABO_ABA_REMZONA_QTY?: SortOrderInput | SortOrder
    ABO_OBOROT_PARTRA?: SortOrderInput | SortOrder
    ABO_SCORES_PARTRA?: SortOrderInput | SortOrder
  }

  export type GA_ANKETA_OBOROTWhereUniqueInput = Prisma.AtLeast<{
    ABO_ABA_ID?: bigint | number
    AND?: GA_ANKETA_OBOROTWhereInput | GA_ANKETA_OBOROTWhereInput[]
    OR?: GA_ANKETA_OBOROTWhereInput[]
    NOT?: GA_ANKETA_OBOROTWhereInput | GA_ANKETA_OBOROTWhereInput[]
    ABO_DATETIME?: DateTimeNullableFilter<"GA_ANKETA_OBOROT"> | Date | string | null
    ABO_OBOROT_ALL?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRANDS_MONTH?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_AE?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_ROSSKO?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_ARKONA?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_AUTORUS?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_SCORES_MONTH_PLAN?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_SCORES_MONTH_FAKT?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_COUNT_ROSSKO?: IntNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_COUNT_AE?: IntNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_COUNT_ARKONA?: IntNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_COUNT_AUTORUS?: IntNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRANDS?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND_LOOK1?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_SCORES?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND_LOOK2?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND_LOOK2_AE?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRANDS_MONTH_AE?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND1?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND2?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND3?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND4?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND5?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND6?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_NEXT?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_SCORES_MONTH_PLAN_NEXT?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_ABA_REMZONA_QTY?: IntNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_PARTRA?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_SCORES_PARTRA?: FloatNullableFilter<"GA_ANKETA_OBOROT"> | number | null
  }, "ABO_ABA_ID">

  export type GA_ANKETA_OBOROTOrderByWithAggregationInput = {
    ABO_ABA_ID?: SortOrder
    ABO_DATETIME?: SortOrderInput | SortOrder
    ABO_OBOROT_ALL?: SortOrderInput | SortOrder
    ABO_OBOROT_BRANDS_MONTH?: SortOrderInput | SortOrder
    ABO_OBOROT_AE?: SortOrderInput | SortOrder
    ABO_OBOROT_ROSSKO?: SortOrderInput | SortOrder
    ABO_OBOROT_ARKONA?: SortOrderInput | SortOrder
    ABO_OBOROT_AUTORUS?: SortOrderInput | SortOrder
    ABO_SCORES_MONTH_PLAN?: SortOrderInput | SortOrder
    ABO_SCORES_MONTH_FAKT?: SortOrderInput | SortOrder
    ABO_COUNT_ROSSKO?: SortOrderInput | SortOrder
    ABO_COUNT_AE?: SortOrderInput | SortOrder
    ABO_COUNT_ARKONA?: SortOrderInput | SortOrder
    ABO_COUNT_AUTORUS?: SortOrderInput | SortOrder
    ABO_OBOROT_BRANDS?: SortOrderInput | SortOrder
    ABO_OBOROT_BRAND_LOOK1?: SortOrderInput | SortOrder
    ABO_SCORES?: SortOrderInput | SortOrder
    ABO_OBOROT_BRAND_LOOK2?: SortOrderInput | SortOrder
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: SortOrderInput | SortOrder
    ABO_OBOROT_BRAND_LOOK2_AE?: SortOrderInput | SortOrder
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: SortOrderInput | SortOrder
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: SortOrderInput | SortOrder
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: SortOrderInput | SortOrder
    ABO_OBOROT_BRANDS_MONTH_AE?: SortOrderInput | SortOrder
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: SortOrderInput | SortOrder
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: SortOrderInput | SortOrder
    ABO_OBOROT_BRAND1?: SortOrderInput | SortOrder
    ABO_OBOROT_BRAND2?: SortOrderInput | SortOrder
    ABO_OBOROT_BRAND3?: SortOrderInput | SortOrder
    ABO_OBOROT_BRAND4?: SortOrderInput | SortOrder
    ABO_OBOROT_BRAND5?: SortOrderInput | SortOrder
    ABO_OBOROT_BRAND6?: SortOrderInput | SortOrder
    ABO_OBOROT_NEXT?: SortOrderInput | SortOrder
    ABO_SCORES_MONTH_PLAN_NEXT?: SortOrderInput | SortOrder
    ABO_ABA_REMZONA_QTY?: SortOrderInput | SortOrder
    ABO_OBOROT_PARTRA?: SortOrderInput | SortOrder
    ABO_SCORES_PARTRA?: SortOrderInput | SortOrder
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
    ABO_DATETIME?: DateTimeNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | Date | string | null
    ABO_OBOROT_ALL?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRANDS_MONTH?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_AE?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_ROSSKO?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_ARKONA?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_AUTORUS?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_SCORES_MONTH_PLAN?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_SCORES_MONTH_FAKT?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_COUNT_ROSSKO?: IntNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_COUNT_AE?: IntNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_COUNT_ARKONA?: IntNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_COUNT_AUTORUS?: IntNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRANDS?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND_LOOK1?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_SCORES?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND_LOOK2?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND_LOOK2_AE?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRANDS_MONTH_AE?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND1?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND2?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND3?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND4?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND5?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_BRAND6?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_NEXT?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_SCORES_MONTH_PLAN_NEXT?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_ABA_REMZONA_QTY?: IntNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_OBOROT_PARTRA?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
    ABO_SCORES_PARTRA?: FloatNullableWithAggregatesFilter<"GA_ANKETA_OBOROT"> | number | null
  }

  export type GA_ANKETA_SCORESWhereInput = {
    AND?: GA_ANKETA_SCORESWhereInput | GA_ANKETA_SCORESWhereInput[]
    OR?: GA_ANKETA_SCORESWhereInput[]
    NOT?: GA_ANKETA_SCORESWhereInput | GA_ANKETA_SCORESWhereInput[]
    ANS_WSU_ID?: BigIntFilter<"GA_ANKETA_SCORES"> | bigint | number
    ANS_SCORES?: IntNullableFilter<"GA_ANKETA_SCORES"> | number | null
    ANS_DATETIME?: DateTimeNullableFilter<"GA_ANKETA_SCORES"> | Date | string | null
    ANS_ISSHOW?: BoolNullableFilter<"GA_ANKETA_SCORES"> | boolean | null
  }

  export type GA_ANKETA_SCORESOrderByWithRelationInput = {
    ANS_WSU_ID?: SortOrder
    ANS_SCORES?: SortOrderInput | SortOrder
    ANS_DATETIME?: SortOrderInput | SortOrder
    ANS_ISSHOW?: SortOrderInput | SortOrder
  }

  export type GA_ANKETA_SCORESWhereUniqueInput = Prisma.AtLeast<{
    ANS_WSU_ID?: bigint | number
    AND?: GA_ANKETA_SCORESWhereInput | GA_ANKETA_SCORESWhereInput[]
    OR?: GA_ANKETA_SCORESWhereInput[]
    NOT?: GA_ANKETA_SCORESWhereInput | GA_ANKETA_SCORESWhereInput[]
    ANS_SCORES?: IntNullableFilter<"GA_ANKETA_SCORES"> | number | null
    ANS_DATETIME?: DateTimeNullableFilter<"GA_ANKETA_SCORES"> | Date | string | null
    ANS_ISSHOW?: BoolNullableFilter<"GA_ANKETA_SCORES"> | boolean | null
  }, "ANS_WSU_ID">

  export type GA_ANKETA_SCORESOrderByWithAggregationInput = {
    ANS_WSU_ID?: SortOrder
    ANS_SCORES?: SortOrderInput | SortOrder
    ANS_DATETIME?: SortOrderInput | SortOrder
    ANS_ISSHOW?: SortOrderInput | SortOrder
    _count?: GA_ANKETA_SCORESCountOrderByAggregateInput
    _avg?: GA_ANKETA_SCORESAvgOrderByAggregateInput
    _max?: GA_ANKETA_SCORESMaxOrderByAggregateInput
    _min?: GA_ANKETA_SCORESMinOrderByAggregateInput
    _sum?: GA_ANKETA_SCORESSumOrderByAggregateInput
  }

  export type GA_ANKETA_SCORESScalarWhereWithAggregatesInput = {
    AND?: GA_ANKETA_SCORESScalarWhereWithAggregatesInput | GA_ANKETA_SCORESScalarWhereWithAggregatesInput[]
    OR?: GA_ANKETA_SCORESScalarWhereWithAggregatesInput[]
    NOT?: GA_ANKETA_SCORESScalarWhereWithAggregatesInput | GA_ANKETA_SCORESScalarWhereWithAggregatesInput[]
    ANS_WSU_ID?: BigIntWithAggregatesFilter<"GA_ANKETA_SCORES"> | bigint | number
    ANS_SCORES?: IntNullableWithAggregatesFilter<"GA_ANKETA_SCORES"> | number | null
    ANS_DATETIME?: DateTimeNullableWithAggregatesFilter<"GA_ANKETA_SCORES"> | Date | string | null
    ANS_ISSHOW?: BoolNullableWithAggregatesFilter<"GA_ANKETA_SCORES"> | boolean | null
  }

  export type GA_ANKETA_SCORES_HISTORYWhereInput = {
    AND?: GA_ANKETA_SCORES_HISTORYWhereInput | GA_ANKETA_SCORES_HISTORYWhereInput[]
    OR?: GA_ANKETA_SCORES_HISTORYWhereInput[]
    NOT?: GA_ANKETA_SCORES_HISTORYWhereInput | GA_ANKETA_SCORES_HISTORYWhereInput[]
    ASH_WSU_ID?: BigIntFilter<"GA_ANKETA_SCORES_HISTORY"> | bigint | number
    ASH_SCORES?: IntNullableFilter<"GA_ANKETA_SCORES_HISTORY"> | number | null
    ASH_DATETIME?: DateTimeNullableFilter<"GA_ANKETA_SCORES_HISTORY"> | Date | string | null
    ASH_DESC?: StringNullableFilter<"GA_ANKETA_SCORES_HISTORY"> | string | null
    ASH_TYPE?: IntNullableFilter<"GA_ANKETA_SCORES_HISTORY"> | number | null
    ASH_SCORES_OLD?: IntNullableFilter<"GA_ANKETA_SCORES_HISTORY"> | number | null
    ASH_EVENT_STATUS?: BoolNullableFilter<"GA_ANKETA_SCORES_HISTORY"> | boolean | null
    ASH_DATETIME_UPDATE?: DateTimeNullableFilter<"GA_ANKETA_SCORES_HISTORY"> | Date | string | null
    ASH_IZO_ID?: BigIntNullableFilter<"GA_ANKETA_SCORES_HISTORY"> | bigint | number | null
  }

  export type GA_ANKETA_SCORES_HISTORYOrderByWithRelationInput = {
    ASH_WSU_ID?: SortOrder
    ASH_SCORES?: SortOrderInput | SortOrder
    ASH_DATETIME?: SortOrderInput | SortOrder
    ASH_DESC?: SortOrderInput | SortOrder
    ASH_TYPE?: SortOrderInput | SortOrder
    ASH_SCORES_OLD?: SortOrderInput | SortOrder
    ASH_EVENT_STATUS?: SortOrderInput | SortOrder
    ASH_DATETIME_UPDATE?: SortOrderInput | SortOrder
    ASH_IZO_ID?: SortOrderInput | SortOrder
  }

  export type GA_ANKETA_SCORES_HISTORYWhereUniqueInput = Prisma.AtLeast<{
    ASH_WSU_ID?: bigint | number
    AND?: GA_ANKETA_SCORES_HISTORYWhereInput | GA_ANKETA_SCORES_HISTORYWhereInput[]
    OR?: GA_ANKETA_SCORES_HISTORYWhereInput[]
    NOT?: GA_ANKETA_SCORES_HISTORYWhereInput | GA_ANKETA_SCORES_HISTORYWhereInput[]
    ASH_SCORES?: IntNullableFilter<"GA_ANKETA_SCORES_HISTORY"> | number | null
    ASH_DATETIME?: DateTimeNullableFilter<"GA_ANKETA_SCORES_HISTORY"> | Date | string | null
    ASH_DESC?: StringNullableFilter<"GA_ANKETA_SCORES_HISTORY"> | string | null
    ASH_TYPE?: IntNullableFilter<"GA_ANKETA_SCORES_HISTORY"> | number | null
    ASH_SCORES_OLD?: IntNullableFilter<"GA_ANKETA_SCORES_HISTORY"> | number | null
    ASH_EVENT_STATUS?: BoolNullableFilter<"GA_ANKETA_SCORES_HISTORY"> | boolean | null
    ASH_DATETIME_UPDATE?: DateTimeNullableFilter<"GA_ANKETA_SCORES_HISTORY"> | Date | string | null
    ASH_IZO_ID?: BigIntNullableFilter<"GA_ANKETA_SCORES_HISTORY"> | bigint | number | null
  }, "ASH_WSU_ID">

  export type GA_ANKETA_SCORES_HISTORYOrderByWithAggregationInput = {
    ASH_WSU_ID?: SortOrder
    ASH_SCORES?: SortOrderInput | SortOrder
    ASH_DATETIME?: SortOrderInput | SortOrder
    ASH_DESC?: SortOrderInput | SortOrder
    ASH_TYPE?: SortOrderInput | SortOrder
    ASH_SCORES_OLD?: SortOrderInput | SortOrder
    ASH_EVENT_STATUS?: SortOrderInput | SortOrder
    ASH_DATETIME_UPDATE?: SortOrderInput | SortOrder
    ASH_IZO_ID?: SortOrderInput | SortOrder
    _count?: GA_ANKETA_SCORES_HISTORYCountOrderByAggregateInput
    _avg?: GA_ANKETA_SCORES_HISTORYAvgOrderByAggregateInput
    _max?: GA_ANKETA_SCORES_HISTORYMaxOrderByAggregateInput
    _min?: GA_ANKETA_SCORES_HISTORYMinOrderByAggregateInput
    _sum?: GA_ANKETA_SCORES_HISTORYSumOrderByAggregateInput
  }

  export type GA_ANKETA_SCORES_HISTORYScalarWhereWithAggregatesInput = {
    AND?: GA_ANKETA_SCORES_HISTORYScalarWhereWithAggregatesInput | GA_ANKETA_SCORES_HISTORYScalarWhereWithAggregatesInput[]
    OR?: GA_ANKETA_SCORES_HISTORYScalarWhereWithAggregatesInput[]
    NOT?: GA_ANKETA_SCORES_HISTORYScalarWhereWithAggregatesInput | GA_ANKETA_SCORES_HISTORYScalarWhereWithAggregatesInput[]
    ASH_WSU_ID?: BigIntWithAggregatesFilter<"GA_ANKETA_SCORES_HISTORY"> | bigint | number
    ASH_SCORES?: IntNullableWithAggregatesFilter<"GA_ANKETA_SCORES_HISTORY"> | number | null
    ASH_DATETIME?: DateTimeNullableWithAggregatesFilter<"GA_ANKETA_SCORES_HISTORY"> | Date | string | null
    ASH_DESC?: StringNullableWithAggregatesFilter<"GA_ANKETA_SCORES_HISTORY"> | string | null
    ASH_TYPE?: IntNullableWithAggregatesFilter<"GA_ANKETA_SCORES_HISTORY"> | number | null
    ASH_SCORES_OLD?: IntNullableWithAggregatesFilter<"GA_ANKETA_SCORES_HISTORY"> | number | null
    ASH_EVENT_STATUS?: BoolNullableWithAggregatesFilter<"GA_ANKETA_SCORES_HISTORY"> | boolean | null
    ASH_DATETIME_UPDATE?: DateTimeNullableWithAggregatesFilter<"GA_ANKETA_SCORES_HISTORY"> | Date | string | null
    ASH_IZO_ID?: BigIntNullableWithAggregatesFilter<"GA_ANKETA_SCORES_HISTORY"> | bigint | number | null
  }

  export type GA_ANKETA_SOREVNOVANIEWhereInput = {
    AND?: GA_ANKETA_SOREVNOVANIEWhereInput | GA_ANKETA_SOREVNOVANIEWhereInput[]
    OR?: GA_ANKETA_SOREVNOVANIEWhereInput[]
    NOT?: GA_ANKETA_SOREVNOVANIEWhereInput | GA_ANKETA_SOREVNOVANIEWhereInput[]
    ASR_YEAR?: IntNullableFilter<"GA_ANKETA_SOREVNOVANIE"> | number | null
    ASR_MONTH?: IntNullableFilter<"GA_ANKETA_SOREVNOVANIE"> | number | null
    ASR_WSU_ID?: BigIntFilter<"GA_ANKETA_SOREVNOVANIE"> | bigint | number
    ASR_LOGIN?: StringNullableFilter<"GA_ANKETA_SOREVNOVANIE"> | string | null
    ASR_FIO?: StringNullableFilter<"GA_ANKETA_SOREVNOVANIE"> | string | null
    ASR_SCORE?: IntNullableFilter<"GA_ANKETA_SOREVNOVANIE"> | number | null
    ASR_DOLJNOST?: StringNullableFilter<"GA_ANKETA_SOREVNOVANIE"> | string | null
    ASR_RUKOVODITEL?: BoolNullableFilter<"GA_ANKETA_SOREVNOVANIE"> | boolean | null
  }

  export type GA_ANKETA_SOREVNOVANIEOrderByWithRelationInput = {
    ASR_YEAR?: SortOrderInput | SortOrder
    ASR_MONTH?: SortOrderInput | SortOrder
    ASR_WSU_ID?: SortOrder
    ASR_LOGIN?: SortOrderInput | SortOrder
    ASR_FIO?: SortOrderInput | SortOrder
    ASR_SCORE?: SortOrderInput | SortOrder
    ASR_DOLJNOST?: SortOrderInput | SortOrder
    ASR_RUKOVODITEL?: SortOrderInput | SortOrder
  }

  export type GA_ANKETA_SOREVNOVANIEWhereUniqueInput = Prisma.AtLeast<{
    ASR_WSU_ID?: bigint | number
    AND?: GA_ANKETA_SOREVNOVANIEWhereInput | GA_ANKETA_SOREVNOVANIEWhereInput[]
    OR?: GA_ANKETA_SOREVNOVANIEWhereInput[]
    NOT?: GA_ANKETA_SOREVNOVANIEWhereInput | GA_ANKETA_SOREVNOVANIEWhereInput[]
    ASR_YEAR?: IntNullableFilter<"GA_ANKETA_SOREVNOVANIE"> | number | null
    ASR_MONTH?: IntNullableFilter<"GA_ANKETA_SOREVNOVANIE"> | number | null
    ASR_LOGIN?: StringNullableFilter<"GA_ANKETA_SOREVNOVANIE"> | string | null
    ASR_FIO?: StringNullableFilter<"GA_ANKETA_SOREVNOVANIE"> | string | null
    ASR_SCORE?: IntNullableFilter<"GA_ANKETA_SOREVNOVANIE"> | number | null
    ASR_DOLJNOST?: StringNullableFilter<"GA_ANKETA_SOREVNOVANIE"> | string | null
    ASR_RUKOVODITEL?: BoolNullableFilter<"GA_ANKETA_SOREVNOVANIE"> | boolean | null
  }, "ASR_WSU_ID">

  export type GA_ANKETA_SOREVNOVANIEOrderByWithAggregationInput = {
    ASR_YEAR?: SortOrderInput | SortOrder
    ASR_MONTH?: SortOrderInput | SortOrder
    ASR_WSU_ID?: SortOrder
    ASR_LOGIN?: SortOrderInput | SortOrder
    ASR_FIO?: SortOrderInput | SortOrder
    ASR_SCORE?: SortOrderInput | SortOrder
    ASR_DOLJNOST?: SortOrderInput | SortOrder
    ASR_RUKOVODITEL?: SortOrderInput | SortOrder
    _count?: GA_ANKETA_SOREVNOVANIECountOrderByAggregateInput
    _avg?: GA_ANKETA_SOREVNOVANIEAvgOrderByAggregateInput
    _max?: GA_ANKETA_SOREVNOVANIEMaxOrderByAggregateInput
    _min?: GA_ANKETA_SOREVNOVANIEMinOrderByAggregateInput
    _sum?: GA_ANKETA_SOREVNOVANIESumOrderByAggregateInput
  }

  export type GA_ANKETA_SOREVNOVANIEScalarWhereWithAggregatesInput = {
    AND?: GA_ANKETA_SOREVNOVANIEScalarWhereWithAggregatesInput | GA_ANKETA_SOREVNOVANIEScalarWhereWithAggregatesInput[]
    OR?: GA_ANKETA_SOREVNOVANIEScalarWhereWithAggregatesInput[]
    NOT?: GA_ANKETA_SOREVNOVANIEScalarWhereWithAggregatesInput | GA_ANKETA_SOREVNOVANIEScalarWhereWithAggregatesInput[]
    ASR_YEAR?: IntNullableWithAggregatesFilter<"GA_ANKETA_SOREVNOVANIE"> | number | null
    ASR_MONTH?: IntNullableWithAggregatesFilter<"GA_ANKETA_SOREVNOVANIE"> | number | null
    ASR_WSU_ID?: BigIntWithAggregatesFilter<"GA_ANKETA_SOREVNOVANIE"> | bigint | number
    ASR_LOGIN?: StringNullableWithAggregatesFilter<"GA_ANKETA_SOREVNOVANIE"> | string | null
    ASR_FIO?: StringNullableWithAggregatesFilter<"GA_ANKETA_SOREVNOVANIE"> | string | null
    ASR_SCORE?: IntNullableWithAggregatesFilter<"GA_ANKETA_SOREVNOVANIE"> | number | null
    ASR_DOLJNOST?: StringNullableWithAggregatesFilter<"GA_ANKETA_SOREVNOVANIE"> | string | null
    ASR_RUKOVODITEL?: BoolNullableWithAggregatesFilter<"GA_ANKETA_SOREVNOVANIE"> | boolean | null
  }

  export type GA_ANKETA_SUPWhereInput = {
    AND?: GA_ANKETA_SUPWhereInput | GA_ANKETA_SUPWhereInput[]
    OR?: GA_ANKETA_SUPWhereInput[]
    NOT?: GA_ANKETA_SUPWhereInput | GA_ANKETA_SUPWhereInput[]
    ADB_ABA_ID?: BigIntFilter<"GA_ANKETA_SUP"> | bigint | number
    ADB_SUP_NAME?: StringNullableFilter<"GA_ANKETA_SUP"> | string | null
    ADB_MAN_NAME1?: StringNullableFilter<"GA_ANKETA_SUP"> | string | null
    ADB_MAN_NAME2?: StringNullableFilter<"GA_ANKETA_SUP"> | string | null
    ADB_MAN_NAME3?: StringNullableFilter<"GA_ANKETA_SUP"> | string | null
    ADB_SUP_CODE_AE?: StringNullableFilter<"GA_ANKETA_SUP"> | string | null
    ADB_SUP_CODE_AUTORUS?: StringNullableFilter<"GA_ANKETA_SUP"> | string | null
    ADB_SUP_CODE_ROSSKO?: StringNullableFilter<"GA_ANKETA_SUP"> | string | null
    ADB_SUP_CODE_ARKONA?: StringNullableFilter<"GA_ANKETA_SUP"> | string | null
  }

  export type GA_ANKETA_SUPOrderByWithRelationInput = {
    ADB_ABA_ID?: SortOrder
    ADB_SUP_NAME?: SortOrderInput | SortOrder
    ADB_MAN_NAME1?: SortOrderInput | SortOrder
    ADB_MAN_NAME2?: SortOrderInput | SortOrder
    ADB_MAN_NAME3?: SortOrderInput | SortOrder
    ADB_SUP_CODE_AE?: SortOrderInput | SortOrder
    ADB_SUP_CODE_AUTORUS?: SortOrderInput | SortOrder
    ADB_SUP_CODE_ROSSKO?: SortOrderInput | SortOrder
    ADB_SUP_CODE_ARKONA?: SortOrderInput | SortOrder
  }

  export type GA_ANKETA_SUPWhereUniqueInput = Prisma.AtLeast<{
    ADB_ABA_ID?: bigint | number
    AND?: GA_ANKETA_SUPWhereInput | GA_ANKETA_SUPWhereInput[]
    OR?: GA_ANKETA_SUPWhereInput[]
    NOT?: GA_ANKETA_SUPWhereInput | GA_ANKETA_SUPWhereInput[]
    ADB_SUP_NAME?: StringNullableFilter<"GA_ANKETA_SUP"> | string | null
    ADB_MAN_NAME1?: StringNullableFilter<"GA_ANKETA_SUP"> | string | null
    ADB_MAN_NAME2?: StringNullableFilter<"GA_ANKETA_SUP"> | string | null
    ADB_MAN_NAME3?: StringNullableFilter<"GA_ANKETA_SUP"> | string | null
    ADB_SUP_CODE_AE?: StringNullableFilter<"GA_ANKETA_SUP"> | string | null
    ADB_SUP_CODE_AUTORUS?: StringNullableFilter<"GA_ANKETA_SUP"> | string | null
    ADB_SUP_CODE_ROSSKO?: StringNullableFilter<"GA_ANKETA_SUP"> | string | null
    ADB_SUP_CODE_ARKONA?: StringNullableFilter<"GA_ANKETA_SUP"> | string | null
  }, "ADB_ABA_ID">

  export type GA_ANKETA_SUPOrderByWithAggregationInput = {
    ADB_ABA_ID?: SortOrder
    ADB_SUP_NAME?: SortOrderInput | SortOrder
    ADB_MAN_NAME1?: SortOrderInput | SortOrder
    ADB_MAN_NAME2?: SortOrderInput | SortOrder
    ADB_MAN_NAME3?: SortOrderInput | SortOrder
    ADB_SUP_CODE_AE?: SortOrderInput | SortOrder
    ADB_SUP_CODE_AUTORUS?: SortOrderInput | SortOrder
    ADB_SUP_CODE_ROSSKO?: SortOrderInput | SortOrder
    ADB_SUP_CODE_ARKONA?: SortOrderInput | SortOrder
    _count?: GA_ANKETA_SUPCountOrderByAggregateInput
    _avg?: GA_ANKETA_SUPAvgOrderByAggregateInput
    _max?: GA_ANKETA_SUPMaxOrderByAggregateInput
    _min?: GA_ANKETA_SUPMinOrderByAggregateInput
    _sum?: GA_ANKETA_SUPSumOrderByAggregateInput
  }

  export type GA_ANKETA_SUPScalarWhereWithAggregatesInput = {
    AND?: GA_ANKETA_SUPScalarWhereWithAggregatesInput | GA_ANKETA_SUPScalarWhereWithAggregatesInput[]
    OR?: GA_ANKETA_SUPScalarWhereWithAggregatesInput[]
    NOT?: GA_ANKETA_SUPScalarWhereWithAggregatesInput | GA_ANKETA_SUPScalarWhereWithAggregatesInput[]
    ADB_ABA_ID?: BigIntWithAggregatesFilter<"GA_ANKETA_SUP"> | bigint | number
    ADB_SUP_NAME?: StringNullableWithAggregatesFilter<"GA_ANKETA_SUP"> | string | null
    ADB_MAN_NAME1?: StringNullableWithAggregatesFilter<"GA_ANKETA_SUP"> | string | null
    ADB_MAN_NAME2?: StringNullableWithAggregatesFilter<"GA_ANKETA_SUP"> | string | null
    ADB_MAN_NAME3?: StringNullableWithAggregatesFilter<"GA_ANKETA_SUP"> | string | null
    ADB_SUP_CODE_AE?: StringNullableWithAggregatesFilter<"GA_ANKETA_SUP"> | string | null
    ADB_SUP_CODE_AUTORUS?: StringNullableWithAggregatesFilter<"GA_ANKETA_SUP"> | string | null
    ADB_SUP_CODE_ROSSKO?: StringNullableWithAggregatesFilter<"GA_ANKETA_SUP"> | string | null
    ADB_SUP_CODE_ARKONA?: StringNullableWithAggregatesFilter<"GA_ANKETA_SUP"> | string | null
  }

  export type GA_WS_USERSWhereInput = {
    AND?: GA_WS_USERSWhereInput | GA_WS_USERSWhereInput[]
    OR?: GA_WS_USERSWhereInput[]
    NOT?: GA_WS_USERSWhereInput | GA_WS_USERSWhereInput[]
    WSU_WSO_ID?: IntNullableFilter<"GA_WS_USERS"> | number | null
    WSU_ID?: BigIntFilter<"GA_WS_USERS"> | bigint | number
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
    WSU_WSO_ID?: SortOrderInput | SortOrder
    WSU_ID?: SortOrder
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
    WSU_WSO_ID?: SortOrderInput | SortOrder
    WSU_ID?: SortOrder
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
    WSU_WSO_ID?: IntNullableWithAggregatesFilter<"GA_WS_USERS"> | number | null
    WSU_ID?: BigIntWithAggregatesFilter<"GA_WS_USERS"> | bigint | number
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
    AAD_SHIROTA?: string | null
    AAD_DOLGOTA?: string | null
    AAD_OBLAST?: string | null
    AAD_GOROD?: string | null
    AAD_ADDR?: string | null
    AAD_POSTCODE?: string | null
  }

  export type GA_ANKETA_ADDRUncheckedCreateInput = {
    AAD_ABA_ID: bigint | number
    AAD_SHIROTA?: string | null
    AAD_DOLGOTA?: string | null
    AAD_OBLAST?: string | null
    AAD_GOROD?: string | null
    AAD_ADDR?: string | null
    AAD_POSTCODE?: string | null
  }

  export type GA_ANKETA_ADDRUpdateInput = {
    AAD_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    AAD_SHIROTA?: NullableStringFieldUpdateOperationsInput | string | null
    AAD_DOLGOTA?: NullableStringFieldUpdateOperationsInput | string | null
    AAD_OBLAST?: NullableStringFieldUpdateOperationsInput | string | null
    AAD_GOROD?: NullableStringFieldUpdateOperationsInput | string | null
    AAD_ADDR?: NullableStringFieldUpdateOperationsInput | string | null
    AAD_POSTCODE?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GA_ANKETA_ADDRUncheckedUpdateInput = {
    AAD_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    AAD_SHIROTA?: NullableStringFieldUpdateOperationsInput | string | null
    AAD_DOLGOTA?: NullableStringFieldUpdateOperationsInput | string | null
    AAD_OBLAST?: NullableStringFieldUpdateOperationsInput | string | null
    AAD_GOROD?: NullableStringFieldUpdateOperationsInput | string | null
    AAD_ADDR?: NullableStringFieldUpdateOperationsInput | string | null
    AAD_POSTCODE?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GA_ANKETA_ADDRCreateManyInput = {
    AAD_ABA_ID: bigint | number
    AAD_SHIROTA?: string | null
    AAD_DOLGOTA?: string | null
    AAD_OBLAST?: string | null
    AAD_GOROD?: string | null
    AAD_ADDR?: string | null
    AAD_POSTCODE?: string | null
  }

  export type GA_ANKETA_ADDRUpdateManyMutationInput = {
    AAD_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    AAD_SHIROTA?: NullableStringFieldUpdateOperationsInput | string | null
    AAD_DOLGOTA?: NullableStringFieldUpdateOperationsInput | string | null
    AAD_OBLAST?: NullableStringFieldUpdateOperationsInput | string | null
    AAD_GOROD?: NullableStringFieldUpdateOperationsInput | string | null
    AAD_ADDR?: NullableStringFieldUpdateOperationsInput | string | null
    AAD_POSTCODE?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GA_ANKETA_ADDRUncheckedUpdateManyInput = {
    AAD_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    AAD_SHIROTA?: NullableStringFieldUpdateOperationsInput | string | null
    AAD_DOLGOTA?: NullableStringFieldUpdateOperationsInput | string | null
    AAD_OBLAST?: NullableStringFieldUpdateOperationsInput | string | null
    AAD_GOROD?: NullableStringFieldUpdateOperationsInput | string | null
    AAD_ADDR?: NullableStringFieldUpdateOperationsInput | string | null
    AAD_POSTCODE?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GA_ANKETA_BASECreateInput = {
    ABA_WSU_ID?: bigint | number | null
    ABA_STO_NAME?: string | null
    ABA_STO_ID1?: string | null
    ABA_REMZONA_QTY?: number | null
    ABA_ENABLED?: boolean | null
    ABA_PHONE?: string | null
    ABA_INN?: string | null
    ABA_DATETIME_CREATED?: Date | string | null
    ABA_DATETIME_UPDATED?: Date | string | null
    ABA_ID: bigint | number
    ABA_DATETIME?: Date | string | null
    ABA_STO_ID2?: string | null
    ABA_STO_NAME_FIND?: string | null
    ABA_DESC?: string | null
  }

  export type GA_ANKETA_BASEUncheckedCreateInput = {
    ABA_WSU_ID?: bigint | number | null
    ABA_STO_NAME?: string | null
    ABA_STO_ID1?: string | null
    ABA_REMZONA_QTY?: number | null
    ABA_ENABLED?: boolean | null
    ABA_PHONE?: string | null
    ABA_INN?: string | null
    ABA_DATETIME_CREATED?: Date | string | null
    ABA_DATETIME_UPDATED?: Date | string | null
    ABA_ID: bigint | number
    ABA_DATETIME?: Date | string | null
    ABA_STO_ID2?: string | null
    ABA_STO_NAME_FIND?: string | null
    ABA_DESC?: string | null
  }

  export type GA_ANKETA_BASEUpdateInput = {
    ABA_WSU_ID?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ABA_STO_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    ABA_STO_ID1?: NullableStringFieldUpdateOperationsInput | string | null
    ABA_REMZONA_QTY?: NullableIntFieldUpdateOperationsInput | number | null
    ABA_ENABLED?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ABA_PHONE?: NullableStringFieldUpdateOperationsInput | string | null
    ABA_INN?: NullableStringFieldUpdateOperationsInput | string | null
    ABA_DATETIME_CREATED?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ABA_DATETIME_UPDATED?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ABA_DATETIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ABA_STO_ID2?: NullableStringFieldUpdateOperationsInput | string | null
    ABA_STO_NAME_FIND?: NullableStringFieldUpdateOperationsInput | string | null
    ABA_DESC?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GA_ANKETA_BASEUncheckedUpdateInput = {
    ABA_WSU_ID?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ABA_STO_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    ABA_STO_ID1?: NullableStringFieldUpdateOperationsInput | string | null
    ABA_REMZONA_QTY?: NullableIntFieldUpdateOperationsInput | number | null
    ABA_ENABLED?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ABA_PHONE?: NullableStringFieldUpdateOperationsInput | string | null
    ABA_INN?: NullableStringFieldUpdateOperationsInput | string | null
    ABA_DATETIME_CREATED?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ABA_DATETIME_UPDATED?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ABA_DATETIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ABA_STO_ID2?: NullableStringFieldUpdateOperationsInput | string | null
    ABA_STO_NAME_FIND?: NullableStringFieldUpdateOperationsInput | string | null
    ABA_DESC?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GA_ANKETA_BASECreateManyInput = {
    ABA_WSU_ID?: bigint | number | null
    ABA_STO_NAME?: string | null
    ABA_STO_ID1?: string | null
    ABA_REMZONA_QTY?: number | null
    ABA_ENABLED?: boolean | null
    ABA_PHONE?: string | null
    ABA_INN?: string | null
    ABA_DATETIME_CREATED?: Date | string | null
    ABA_DATETIME_UPDATED?: Date | string | null
    ABA_ID: bigint | number
    ABA_DATETIME?: Date | string | null
    ABA_STO_ID2?: string | null
    ABA_STO_NAME_FIND?: string | null
    ABA_DESC?: string | null
  }

  export type GA_ANKETA_BASEUpdateManyMutationInput = {
    ABA_WSU_ID?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ABA_STO_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    ABA_STO_ID1?: NullableStringFieldUpdateOperationsInput | string | null
    ABA_REMZONA_QTY?: NullableIntFieldUpdateOperationsInput | number | null
    ABA_ENABLED?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ABA_PHONE?: NullableStringFieldUpdateOperationsInput | string | null
    ABA_INN?: NullableStringFieldUpdateOperationsInput | string | null
    ABA_DATETIME_CREATED?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ABA_DATETIME_UPDATED?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ABA_DATETIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ABA_STO_ID2?: NullableStringFieldUpdateOperationsInput | string | null
    ABA_STO_NAME_FIND?: NullableStringFieldUpdateOperationsInput | string | null
    ABA_DESC?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GA_ANKETA_BASEUncheckedUpdateManyInput = {
    ABA_WSU_ID?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ABA_STO_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    ABA_STO_ID1?: NullableStringFieldUpdateOperationsInput | string | null
    ABA_REMZONA_QTY?: NullableIntFieldUpdateOperationsInput | number | null
    ABA_ENABLED?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ABA_PHONE?: NullableStringFieldUpdateOperationsInput | string | null
    ABA_INN?: NullableStringFieldUpdateOperationsInput | string | null
    ABA_DATETIME_CREATED?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ABA_DATETIME_UPDATED?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ABA_DATETIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ABA_STO_ID2?: NullableStringFieldUpdateOperationsInput | string | null
    ABA_STO_NAME_FIND?: NullableStringFieldUpdateOperationsInput | string | null
    ABA_DESC?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GA_ANKETA_BRANDCreateInput = {
    ABR_ABA_ID: bigint | number
    ABR_STATUS?: boolean | null
    ABR_DATETIME?: Date | string | null
    ABR_HALF_STATUS?: boolean | null
    ABR_VYVESKA_STATUS?: boolean | null
    ABR_KOROB_STATUS?: boolean | null
  }

  export type GA_ANKETA_BRANDUncheckedCreateInput = {
    ABR_ABA_ID: bigint | number
    ABR_STATUS?: boolean | null
    ABR_DATETIME?: Date | string | null
    ABR_HALF_STATUS?: boolean | null
    ABR_VYVESKA_STATUS?: boolean | null
    ABR_KOROB_STATUS?: boolean | null
  }

  export type GA_ANKETA_BRANDUpdateInput = {
    ABR_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ABR_STATUS?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ABR_DATETIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ABR_HALF_STATUS?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ABR_VYVESKA_STATUS?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ABR_KOROB_STATUS?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type GA_ANKETA_BRANDUncheckedUpdateInput = {
    ABR_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ABR_STATUS?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ABR_DATETIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ABR_HALF_STATUS?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ABR_VYVESKA_STATUS?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ABR_KOROB_STATUS?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type GA_ANKETA_BRANDCreateManyInput = {
    ABR_ABA_ID: bigint | number
    ABR_STATUS?: boolean | null
    ABR_DATETIME?: Date | string | null
    ABR_HALF_STATUS?: boolean | null
    ABR_VYVESKA_STATUS?: boolean | null
    ABR_KOROB_STATUS?: boolean | null
  }

  export type GA_ANKETA_BRANDUpdateManyMutationInput = {
    ABR_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ABR_STATUS?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ABR_DATETIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ABR_HALF_STATUS?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ABR_VYVESKA_STATUS?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ABR_KOROB_STATUS?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type GA_ANKETA_BRANDUncheckedUpdateManyInput = {
    ABR_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ABR_STATUS?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ABR_DATETIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ABR_HALF_STATUS?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ABR_VYVESKA_STATUS?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ABR_KOROB_STATUS?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type GA_ANKETA_DOGOVORCreateInput = {
    ADO_ABA_ID: bigint | number
    ADO_NAME1?: string | null
    ADO_NAME2?: string | null
    ADO_NAME3?: string | null
    ADO_PHONE?: string | null
    ADO_EMAIL?: string | null
    ADO_DATETIME?: Date | string | null
    ADO_STATUS?: boolean | null
  }

  export type GA_ANKETA_DOGOVORUncheckedCreateInput = {
    ADO_ABA_ID: bigint | number
    ADO_NAME1?: string | null
    ADO_NAME2?: string | null
    ADO_NAME3?: string | null
    ADO_PHONE?: string | null
    ADO_EMAIL?: string | null
    ADO_DATETIME?: Date | string | null
    ADO_STATUS?: boolean | null
  }

  export type GA_ANKETA_DOGOVORUpdateInput = {
    ADO_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ADO_NAME1?: NullableStringFieldUpdateOperationsInput | string | null
    ADO_NAME2?: NullableStringFieldUpdateOperationsInput | string | null
    ADO_NAME3?: NullableStringFieldUpdateOperationsInput | string | null
    ADO_PHONE?: NullableStringFieldUpdateOperationsInput | string | null
    ADO_EMAIL?: NullableStringFieldUpdateOperationsInput | string | null
    ADO_DATETIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ADO_STATUS?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type GA_ANKETA_DOGOVORUncheckedUpdateInput = {
    ADO_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ADO_NAME1?: NullableStringFieldUpdateOperationsInput | string | null
    ADO_NAME2?: NullableStringFieldUpdateOperationsInput | string | null
    ADO_NAME3?: NullableStringFieldUpdateOperationsInput | string | null
    ADO_PHONE?: NullableStringFieldUpdateOperationsInput | string | null
    ADO_EMAIL?: NullableStringFieldUpdateOperationsInput | string | null
    ADO_DATETIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ADO_STATUS?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type GA_ANKETA_DOGOVORCreateManyInput = {
    ADO_ABA_ID: bigint | number
    ADO_NAME1?: string | null
    ADO_NAME2?: string | null
    ADO_NAME3?: string | null
    ADO_PHONE?: string | null
    ADO_EMAIL?: string | null
    ADO_DATETIME?: Date | string | null
    ADO_STATUS?: boolean | null
  }

  export type GA_ANKETA_DOGOVORUpdateManyMutationInput = {
    ADO_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ADO_NAME1?: NullableStringFieldUpdateOperationsInput | string | null
    ADO_NAME2?: NullableStringFieldUpdateOperationsInput | string | null
    ADO_NAME3?: NullableStringFieldUpdateOperationsInput | string | null
    ADO_PHONE?: NullableStringFieldUpdateOperationsInput | string | null
    ADO_EMAIL?: NullableStringFieldUpdateOperationsInput | string | null
    ADO_DATETIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ADO_STATUS?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type GA_ANKETA_DOGOVORUncheckedUpdateManyInput = {
    ADO_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ADO_NAME1?: NullableStringFieldUpdateOperationsInput | string | null
    ADO_NAME2?: NullableStringFieldUpdateOperationsInput | string | null
    ADO_NAME3?: NullableStringFieldUpdateOperationsInput | string | null
    ADO_PHONE?: NullableStringFieldUpdateOperationsInput | string | null
    ADO_EMAIL?: NullableStringFieldUpdateOperationsInput | string | null
    ADO_DATETIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ADO_STATUS?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type GA_ANKETA_OBOROTCreateInput = {
    ABO_ABA_ID: bigint | number
    ABO_DATETIME?: Date | string | null
    ABO_OBOROT_ALL?: number | null
    ABO_OBOROT_BRANDS_MONTH?: number | null
    ABO_OBOROT_AE?: number | null
    ABO_OBOROT_ROSSKO?: number | null
    ABO_OBOROT_ARKONA?: number | null
    ABO_OBOROT_AUTORUS?: number | null
    ABO_SCORES_MONTH_PLAN?: number | null
    ABO_SCORES_MONTH_FAKT?: number | null
    ABO_COUNT_ROSSKO?: number | null
    ABO_COUNT_AE?: number | null
    ABO_COUNT_ARKONA?: number | null
    ABO_COUNT_AUTORUS?: number | null
    ABO_OBOROT_BRANDS?: number | null
    ABO_OBOROT_BRAND_LOOK1?: number | null
    ABO_SCORES?: number | null
    ABO_OBOROT_BRAND_LOOK2?: number | null
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: number | null
    ABO_OBOROT_BRAND_LOOK2_AE?: number | null
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: number | null
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: number | null
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: number | null
    ABO_OBOROT_BRANDS_MONTH_AE?: number | null
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: number | null
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: number | null
    ABO_OBOROT_BRAND1?: number | null
    ABO_OBOROT_BRAND2?: number | null
    ABO_OBOROT_BRAND3?: number | null
    ABO_OBOROT_BRAND4?: number | null
    ABO_OBOROT_BRAND5?: number | null
    ABO_OBOROT_BRAND6?: number | null
    ABO_OBOROT_NEXT?: number | null
    ABO_SCORES_MONTH_PLAN_NEXT?: number | null
    ABO_ABA_REMZONA_QTY?: number | null
    ABO_OBOROT_PARTRA?: number | null
    ABO_SCORES_PARTRA?: number | null
  }

  export type GA_ANKETA_OBOROTUncheckedCreateInput = {
    ABO_ABA_ID: bigint | number
    ABO_DATETIME?: Date | string | null
    ABO_OBOROT_ALL?: number | null
    ABO_OBOROT_BRANDS_MONTH?: number | null
    ABO_OBOROT_AE?: number | null
    ABO_OBOROT_ROSSKO?: number | null
    ABO_OBOROT_ARKONA?: number | null
    ABO_OBOROT_AUTORUS?: number | null
    ABO_SCORES_MONTH_PLAN?: number | null
    ABO_SCORES_MONTH_FAKT?: number | null
    ABO_COUNT_ROSSKO?: number | null
    ABO_COUNT_AE?: number | null
    ABO_COUNT_ARKONA?: number | null
    ABO_COUNT_AUTORUS?: number | null
    ABO_OBOROT_BRANDS?: number | null
    ABO_OBOROT_BRAND_LOOK1?: number | null
    ABO_SCORES?: number | null
    ABO_OBOROT_BRAND_LOOK2?: number | null
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: number | null
    ABO_OBOROT_BRAND_LOOK2_AE?: number | null
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: number | null
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: number | null
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: number | null
    ABO_OBOROT_BRANDS_MONTH_AE?: number | null
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: number | null
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: number | null
    ABO_OBOROT_BRAND1?: number | null
    ABO_OBOROT_BRAND2?: number | null
    ABO_OBOROT_BRAND3?: number | null
    ABO_OBOROT_BRAND4?: number | null
    ABO_OBOROT_BRAND5?: number | null
    ABO_OBOROT_BRAND6?: number | null
    ABO_OBOROT_NEXT?: number | null
    ABO_SCORES_MONTH_PLAN_NEXT?: number | null
    ABO_ABA_REMZONA_QTY?: number | null
    ABO_OBOROT_PARTRA?: number | null
    ABO_SCORES_PARTRA?: number | null
  }

  export type GA_ANKETA_OBOROTUpdateInput = {
    ABO_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ABO_DATETIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ABO_OBOROT_ALL?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRANDS_MONTH?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_AE?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_ROSSKO?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_ARKONA?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_AUTORUS?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_SCORES_MONTH_PLAN?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_SCORES_MONTH_FAKT?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_COUNT_ROSSKO?: NullableIntFieldUpdateOperationsInput | number | null
    ABO_COUNT_AE?: NullableIntFieldUpdateOperationsInput | number | null
    ABO_COUNT_ARKONA?: NullableIntFieldUpdateOperationsInput | number | null
    ABO_COUNT_AUTORUS?: NullableIntFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRANDS?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND_LOOK1?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_SCORES?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND_LOOK2?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND_LOOK2_AE?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRANDS_MONTH_AE?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND1?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND2?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND3?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND4?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND5?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND6?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_NEXT?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_SCORES_MONTH_PLAN_NEXT?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_ABA_REMZONA_QTY?: NullableIntFieldUpdateOperationsInput | number | null
    ABO_OBOROT_PARTRA?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_SCORES_PARTRA?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type GA_ANKETA_OBOROTUncheckedUpdateInput = {
    ABO_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ABO_DATETIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ABO_OBOROT_ALL?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRANDS_MONTH?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_AE?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_ROSSKO?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_ARKONA?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_AUTORUS?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_SCORES_MONTH_PLAN?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_SCORES_MONTH_FAKT?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_COUNT_ROSSKO?: NullableIntFieldUpdateOperationsInput | number | null
    ABO_COUNT_AE?: NullableIntFieldUpdateOperationsInput | number | null
    ABO_COUNT_ARKONA?: NullableIntFieldUpdateOperationsInput | number | null
    ABO_COUNT_AUTORUS?: NullableIntFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRANDS?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND_LOOK1?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_SCORES?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND_LOOK2?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND_LOOK2_AE?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRANDS_MONTH_AE?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND1?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND2?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND3?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND4?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND5?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND6?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_NEXT?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_SCORES_MONTH_PLAN_NEXT?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_ABA_REMZONA_QTY?: NullableIntFieldUpdateOperationsInput | number | null
    ABO_OBOROT_PARTRA?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_SCORES_PARTRA?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type GA_ANKETA_OBOROTCreateManyInput = {
    ABO_ABA_ID: bigint | number
    ABO_DATETIME?: Date | string | null
    ABO_OBOROT_ALL?: number | null
    ABO_OBOROT_BRANDS_MONTH?: number | null
    ABO_OBOROT_AE?: number | null
    ABO_OBOROT_ROSSKO?: number | null
    ABO_OBOROT_ARKONA?: number | null
    ABO_OBOROT_AUTORUS?: number | null
    ABO_SCORES_MONTH_PLAN?: number | null
    ABO_SCORES_MONTH_FAKT?: number | null
    ABO_COUNT_ROSSKO?: number | null
    ABO_COUNT_AE?: number | null
    ABO_COUNT_ARKONA?: number | null
    ABO_COUNT_AUTORUS?: number | null
    ABO_OBOROT_BRANDS?: number | null
    ABO_OBOROT_BRAND_LOOK1?: number | null
    ABO_SCORES?: number | null
    ABO_OBOROT_BRAND_LOOK2?: number | null
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: number | null
    ABO_OBOROT_BRAND_LOOK2_AE?: number | null
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: number | null
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: number | null
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: number | null
    ABO_OBOROT_BRANDS_MONTH_AE?: number | null
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: number | null
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: number | null
    ABO_OBOROT_BRAND1?: number | null
    ABO_OBOROT_BRAND2?: number | null
    ABO_OBOROT_BRAND3?: number | null
    ABO_OBOROT_BRAND4?: number | null
    ABO_OBOROT_BRAND5?: number | null
    ABO_OBOROT_BRAND6?: number | null
    ABO_OBOROT_NEXT?: number | null
    ABO_SCORES_MONTH_PLAN_NEXT?: number | null
    ABO_ABA_REMZONA_QTY?: number | null
    ABO_OBOROT_PARTRA?: number | null
    ABO_SCORES_PARTRA?: number | null
  }

  export type GA_ANKETA_OBOROTUpdateManyMutationInput = {
    ABO_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ABO_DATETIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ABO_OBOROT_ALL?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRANDS_MONTH?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_AE?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_ROSSKO?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_ARKONA?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_AUTORUS?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_SCORES_MONTH_PLAN?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_SCORES_MONTH_FAKT?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_COUNT_ROSSKO?: NullableIntFieldUpdateOperationsInput | number | null
    ABO_COUNT_AE?: NullableIntFieldUpdateOperationsInput | number | null
    ABO_COUNT_ARKONA?: NullableIntFieldUpdateOperationsInput | number | null
    ABO_COUNT_AUTORUS?: NullableIntFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRANDS?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND_LOOK1?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_SCORES?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND_LOOK2?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND_LOOK2_AE?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRANDS_MONTH_AE?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND1?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND2?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND3?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND4?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND5?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND6?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_NEXT?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_SCORES_MONTH_PLAN_NEXT?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_ABA_REMZONA_QTY?: NullableIntFieldUpdateOperationsInput | number | null
    ABO_OBOROT_PARTRA?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_SCORES_PARTRA?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type GA_ANKETA_OBOROTUncheckedUpdateManyInput = {
    ABO_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ABO_DATETIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ABO_OBOROT_ALL?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRANDS_MONTH?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_AE?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_ROSSKO?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_ARKONA?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_AUTORUS?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_SCORES_MONTH_PLAN?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_SCORES_MONTH_FAKT?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_COUNT_ROSSKO?: NullableIntFieldUpdateOperationsInput | number | null
    ABO_COUNT_AE?: NullableIntFieldUpdateOperationsInput | number | null
    ABO_COUNT_ARKONA?: NullableIntFieldUpdateOperationsInput | number | null
    ABO_COUNT_AUTORUS?: NullableIntFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRANDS?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND_LOOK1?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_SCORES?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND_LOOK2?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND_LOOK2_ROSSKO?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND_LOOK2_AE?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND_LOOK2_ARKONA?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND_LOOK2_AUTORUS?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRANDS_MONTH_ROSSKO?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRANDS_MONTH_AE?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRANDS_MONTH_ARKONA?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRANDS_MONTH_AUTORUS?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND1?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND2?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND3?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND4?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND5?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_BRAND6?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_OBOROT_NEXT?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_SCORES_MONTH_PLAN_NEXT?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_ABA_REMZONA_QTY?: NullableIntFieldUpdateOperationsInput | number | null
    ABO_OBOROT_PARTRA?: NullableFloatFieldUpdateOperationsInput | number | null
    ABO_SCORES_PARTRA?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type GA_ANKETA_SCORESCreateInput = {
    ANS_WSU_ID: bigint | number
    ANS_SCORES?: number | null
    ANS_DATETIME?: Date | string | null
    ANS_ISSHOW?: boolean | null
  }

  export type GA_ANKETA_SCORESUncheckedCreateInput = {
    ANS_WSU_ID: bigint | number
    ANS_SCORES?: number | null
    ANS_DATETIME?: Date | string | null
    ANS_ISSHOW?: boolean | null
  }

  export type GA_ANKETA_SCORESUpdateInput = {
    ANS_WSU_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ANS_SCORES?: NullableIntFieldUpdateOperationsInput | number | null
    ANS_DATETIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ANS_ISSHOW?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type GA_ANKETA_SCORESUncheckedUpdateInput = {
    ANS_WSU_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ANS_SCORES?: NullableIntFieldUpdateOperationsInput | number | null
    ANS_DATETIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ANS_ISSHOW?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type GA_ANKETA_SCORESCreateManyInput = {
    ANS_WSU_ID: bigint | number
    ANS_SCORES?: number | null
    ANS_DATETIME?: Date | string | null
    ANS_ISSHOW?: boolean | null
  }

  export type GA_ANKETA_SCORESUpdateManyMutationInput = {
    ANS_WSU_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ANS_SCORES?: NullableIntFieldUpdateOperationsInput | number | null
    ANS_DATETIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ANS_ISSHOW?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type GA_ANKETA_SCORESUncheckedUpdateManyInput = {
    ANS_WSU_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ANS_SCORES?: NullableIntFieldUpdateOperationsInput | number | null
    ANS_DATETIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ANS_ISSHOW?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type GA_ANKETA_SCORES_HISTORYCreateInput = {
    ASH_WSU_ID: bigint | number
    ASH_SCORES?: number | null
    ASH_DATETIME?: Date | string | null
    ASH_DESC?: string | null
    ASH_TYPE?: number | null
    ASH_SCORES_OLD?: number | null
    ASH_EVENT_STATUS?: boolean | null
    ASH_DATETIME_UPDATE?: Date | string | null
    ASH_IZO_ID?: bigint | number | null
  }

  export type GA_ANKETA_SCORES_HISTORYUncheckedCreateInput = {
    ASH_WSU_ID: bigint | number
    ASH_SCORES?: number | null
    ASH_DATETIME?: Date | string | null
    ASH_DESC?: string | null
    ASH_TYPE?: number | null
    ASH_SCORES_OLD?: number | null
    ASH_EVENT_STATUS?: boolean | null
    ASH_DATETIME_UPDATE?: Date | string | null
    ASH_IZO_ID?: bigint | number | null
  }

  export type GA_ANKETA_SCORES_HISTORYUpdateInput = {
    ASH_WSU_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ASH_SCORES?: NullableIntFieldUpdateOperationsInput | number | null
    ASH_DATETIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ASH_DESC?: NullableStringFieldUpdateOperationsInput | string | null
    ASH_TYPE?: NullableIntFieldUpdateOperationsInput | number | null
    ASH_SCORES_OLD?: NullableIntFieldUpdateOperationsInput | number | null
    ASH_EVENT_STATUS?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ASH_DATETIME_UPDATE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ASH_IZO_ID?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type GA_ANKETA_SCORES_HISTORYUncheckedUpdateInput = {
    ASH_WSU_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ASH_SCORES?: NullableIntFieldUpdateOperationsInput | number | null
    ASH_DATETIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ASH_DESC?: NullableStringFieldUpdateOperationsInput | string | null
    ASH_TYPE?: NullableIntFieldUpdateOperationsInput | number | null
    ASH_SCORES_OLD?: NullableIntFieldUpdateOperationsInput | number | null
    ASH_EVENT_STATUS?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ASH_DATETIME_UPDATE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ASH_IZO_ID?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type GA_ANKETA_SCORES_HISTORYCreateManyInput = {
    ASH_WSU_ID: bigint | number
    ASH_SCORES?: number | null
    ASH_DATETIME?: Date | string | null
    ASH_DESC?: string | null
    ASH_TYPE?: number | null
    ASH_SCORES_OLD?: number | null
    ASH_EVENT_STATUS?: boolean | null
    ASH_DATETIME_UPDATE?: Date | string | null
    ASH_IZO_ID?: bigint | number | null
  }

  export type GA_ANKETA_SCORES_HISTORYUpdateManyMutationInput = {
    ASH_WSU_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ASH_SCORES?: NullableIntFieldUpdateOperationsInput | number | null
    ASH_DATETIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ASH_DESC?: NullableStringFieldUpdateOperationsInput | string | null
    ASH_TYPE?: NullableIntFieldUpdateOperationsInput | number | null
    ASH_SCORES_OLD?: NullableIntFieldUpdateOperationsInput | number | null
    ASH_EVENT_STATUS?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ASH_DATETIME_UPDATE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ASH_IZO_ID?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type GA_ANKETA_SCORES_HISTORYUncheckedUpdateManyInput = {
    ASH_WSU_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ASH_SCORES?: NullableIntFieldUpdateOperationsInput | number | null
    ASH_DATETIME?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ASH_DESC?: NullableStringFieldUpdateOperationsInput | string | null
    ASH_TYPE?: NullableIntFieldUpdateOperationsInput | number | null
    ASH_SCORES_OLD?: NullableIntFieldUpdateOperationsInput | number | null
    ASH_EVENT_STATUS?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ASH_DATETIME_UPDATE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ASH_IZO_ID?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type GA_ANKETA_SOREVNOVANIECreateInput = {
    ASR_YEAR?: number | null
    ASR_MONTH?: number | null
    ASR_WSU_ID: bigint | number
    ASR_LOGIN?: string | null
    ASR_FIO?: string | null
    ASR_SCORE?: number | null
    ASR_DOLJNOST?: string | null
    ASR_RUKOVODITEL?: boolean | null
  }

  export type GA_ANKETA_SOREVNOVANIEUncheckedCreateInput = {
    ASR_YEAR?: number | null
    ASR_MONTH?: number | null
    ASR_WSU_ID: bigint | number
    ASR_LOGIN?: string | null
    ASR_FIO?: string | null
    ASR_SCORE?: number | null
    ASR_DOLJNOST?: string | null
    ASR_RUKOVODITEL?: boolean | null
  }

  export type GA_ANKETA_SOREVNOVANIEUpdateInput = {
    ASR_YEAR?: NullableIntFieldUpdateOperationsInput | number | null
    ASR_MONTH?: NullableIntFieldUpdateOperationsInput | number | null
    ASR_WSU_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ASR_LOGIN?: NullableStringFieldUpdateOperationsInput | string | null
    ASR_FIO?: NullableStringFieldUpdateOperationsInput | string | null
    ASR_SCORE?: NullableIntFieldUpdateOperationsInput | number | null
    ASR_DOLJNOST?: NullableStringFieldUpdateOperationsInput | string | null
    ASR_RUKOVODITEL?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type GA_ANKETA_SOREVNOVANIEUncheckedUpdateInput = {
    ASR_YEAR?: NullableIntFieldUpdateOperationsInput | number | null
    ASR_MONTH?: NullableIntFieldUpdateOperationsInput | number | null
    ASR_WSU_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ASR_LOGIN?: NullableStringFieldUpdateOperationsInput | string | null
    ASR_FIO?: NullableStringFieldUpdateOperationsInput | string | null
    ASR_SCORE?: NullableIntFieldUpdateOperationsInput | number | null
    ASR_DOLJNOST?: NullableStringFieldUpdateOperationsInput | string | null
    ASR_RUKOVODITEL?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type GA_ANKETA_SOREVNOVANIECreateManyInput = {
    ASR_YEAR?: number | null
    ASR_MONTH?: number | null
    ASR_WSU_ID: bigint | number
    ASR_LOGIN?: string | null
    ASR_FIO?: string | null
    ASR_SCORE?: number | null
    ASR_DOLJNOST?: string | null
    ASR_RUKOVODITEL?: boolean | null
  }

  export type GA_ANKETA_SOREVNOVANIEUpdateManyMutationInput = {
    ASR_YEAR?: NullableIntFieldUpdateOperationsInput | number | null
    ASR_MONTH?: NullableIntFieldUpdateOperationsInput | number | null
    ASR_WSU_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ASR_LOGIN?: NullableStringFieldUpdateOperationsInput | string | null
    ASR_FIO?: NullableStringFieldUpdateOperationsInput | string | null
    ASR_SCORE?: NullableIntFieldUpdateOperationsInput | number | null
    ASR_DOLJNOST?: NullableStringFieldUpdateOperationsInput | string | null
    ASR_RUKOVODITEL?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type GA_ANKETA_SOREVNOVANIEUncheckedUpdateManyInput = {
    ASR_YEAR?: NullableIntFieldUpdateOperationsInput | number | null
    ASR_MONTH?: NullableIntFieldUpdateOperationsInput | number | null
    ASR_WSU_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ASR_LOGIN?: NullableStringFieldUpdateOperationsInput | string | null
    ASR_FIO?: NullableStringFieldUpdateOperationsInput | string | null
    ASR_SCORE?: NullableIntFieldUpdateOperationsInput | number | null
    ASR_DOLJNOST?: NullableStringFieldUpdateOperationsInput | string | null
    ASR_RUKOVODITEL?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type GA_ANKETA_SUPCreateInput = {
    ADB_ABA_ID: bigint | number
    ADB_SUP_NAME?: string | null
    ADB_MAN_NAME1?: string | null
    ADB_MAN_NAME2?: string | null
    ADB_MAN_NAME3?: string | null
    ADB_SUP_CODE_AE?: string | null
    ADB_SUP_CODE_AUTORUS?: string | null
    ADB_SUP_CODE_ROSSKO?: string | null
    ADB_SUP_CODE_ARKONA?: string | null
  }

  export type GA_ANKETA_SUPUncheckedCreateInput = {
    ADB_ABA_ID: bigint | number
    ADB_SUP_NAME?: string | null
    ADB_MAN_NAME1?: string | null
    ADB_MAN_NAME2?: string | null
    ADB_MAN_NAME3?: string | null
    ADB_SUP_CODE_AE?: string | null
    ADB_SUP_CODE_AUTORUS?: string | null
    ADB_SUP_CODE_ROSSKO?: string | null
    ADB_SUP_CODE_ARKONA?: string | null
  }

  export type GA_ANKETA_SUPUpdateInput = {
    ADB_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ADB_SUP_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    ADB_MAN_NAME1?: NullableStringFieldUpdateOperationsInput | string | null
    ADB_MAN_NAME2?: NullableStringFieldUpdateOperationsInput | string | null
    ADB_MAN_NAME3?: NullableStringFieldUpdateOperationsInput | string | null
    ADB_SUP_CODE_AE?: NullableStringFieldUpdateOperationsInput | string | null
    ADB_SUP_CODE_AUTORUS?: NullableStringFieldUpdateOperationsInput | string | null
    ADB_SUP_CODE_ROSSKO?: NullableStringFieldUpdateOperationsInput | string | null
    ADB_SUP_CODE_ARKONA?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GA_ANKETA_SUPUncheckedUpdateInput = {
    ADB_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ADB_SUP_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    ADB_MAN_NAME1?: NullableStringFieldUpdateOperationsInput | string | null
    ADB_MAN_NAME2?: NullableStringFieldUpdateOperationsInput | string | null
    ADB_MAN_NAME3?: NullableStringFieldUpdateOperationsInput | string | null
    ADB_SUP_CODE_AE?: NullableStringFieldUpdateOperationsInput | string | null
    ADB_SUP_CODE_AUTORUS?: NullableStringFieldUpdateOperationsInput | string | null
    ADB_SUP_CODE_ROSSKO?: NullableStringFieldUpdateOperationsInput | string | null
    ADB_SUP_CODE_ARKONA?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GA_ANKETA_SUPCreateManyInput = {
    ADB_ABA_ID: bigint | number
    ADB_SUP_NAME?: string | null
    ADB_MAN_NAME1?: string | null
    ADB_MAN_NAME2?: string | null
    ADB_MAN_NAME3?: string | null
    ADB_SUP_CODE_AE?: string | null
    ADB_SUP_CODE_AUTORUS?: string | null
    ADB_SUP_CODE_ROSSKO?: string | null
    ADB_SUP_CODE_ARKONA?: string | null
  }

  export type GA_ANKETA_SUPUpdateManyMutationInput = {
    ADB_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ADB_SUP_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    ADB_MAN_NAME1?: NullableStringFieldUpdateOperationsInput | string | null
    ADB_MAN_NAME2?: NullableStringFieldUpdateOperationsInput | string | null
    ADB_MAN_NAME3?: NullableStringFieldUpdateOperationsInput | string | null
    ADB_SUP_CODE_AE?: NullableStringFieldUpdateOperationsInput | string | null
    ADB_SUP_CODE_AUTORUS?: NullableStringFieldUpdateOperationsInput | string | null
    ADB_SUP_CODE_ROSSKO?: NullableStringFieldUpdateOperationsInput | string | null
    ADB_SUP_CODE_ARKONA?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GA_ANKETA_SUPUncheckedUpdateManyInput = {
    ADB_ABA_ID?: BigIntFieldUpdateOperationsInput | bigint | number
    ADB_SUP_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    ADB_MAN_NAME1?: NullableStringFieldUpdateOperationsInput | string | null
    ADB_MAN_NAME2?: NullableStringFieldUpdateOperationsInput | string | null
    ADB_MAN_NAME3?: NullableStringFieldUpdateOperationsInput | string | null
    ADB_SUP_CODE_AE?: NullableStringFieldUpdateOperationsInput | string | null
    ADB_SUP_CODE_AUTORUS?: NullableStringFieldUpdateOperationsInput | string | null
    ADB_SUP_CODE_ROSSKO?: NullableStringFieldUpdateOperationsInput | string | null
    ADB_SUP_CODE_ARKONA?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GA_WS_USERSCreateInput = {
    WSU_WSO_ID?: number | null
    WSU_ID: bigint | number
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
    WSU_WSO_ID?: number | null
    WSU_ID: bigint | number
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
    WSU_WSO_ID?: NullableIntFieldUpdateOperationsInput | number | null
    WSU_ID?: BigIntFieldUpdateOperationsInput | bigint | number
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
    WSU_WSO_ID?: NullableIntFieldUpdateOperationsInput | number | null
    WSU_ID?: BigIntFieldUpdateOperationsInput | bigint | number
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
    WSU_WSO_ID?: number | null
    WSU_ID: bigint | number
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
    WSU_WSO_ID?: NullableIntFieldUpdateOperationsInput | number | null
    WSU_ID?: BigIntFieldUpdateOperationsInput | bigint | number
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
    WSU_WSO_ID?: NullableIntFieldUpdateOperationsInput | number | null
    WSU_ID?: BigIntFieldUpdateOperationsInput | bigint | number
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

  export type GA_ANKETA_ADDRCountOrderByAggregateInput = {
    AAD_ABA_ID?: SortOrder
    AAD_SHIROTA?: SortOrder
    AAD_DOLGOTA?: SortOrder
    AAD_OBLAST?: SortOrder
    AAD_GOROD?: SortOrder
    AAD_ADDR?: SortOrder
    AAD_POSTCODE?: SortOrder
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
    AAD_POSTCODE?: SortOrder
  }

  export type GA_ANKETA_ADDRMinOrderByAggregateInput = {
    AAD_ABA_ID?: SortOrder
    AAD_SHIROTA?: SortOrder
    AAD_DOLGOTA?: SortOrder
    AAD_OBLAST?: SortOrder
    AAD_GOROD?: SortOrder
    AAD_ADDR?: SortOrder
    AAD_POSTCODE?: SortOrder
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

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
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

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type GA_ANKETA_BRANDCountOrderByAggregateInput = {
    ABR_ABA_ID?: SortOrder
    ABR_STATUS?: SortOrder
    ABR_DATETIME?: SortOrder
    ABR_HALF_STATUS?: SortOrder
    ABR_VYVESKA_STATUS?: SortOrder
    ABR_KOROB_STATUS?: SortOrder
  }

  export type GA_ANKETA_BRANDAvgOrderByAggregateInput = {
    ABR_ABA_ID?: SortOrder
  }

  export type GA_ANKETA_BRANDMaxOrderByAggregateInput = {
    ABR_ABA_ID?: SortOrder
    ABR_STATUS?: SortOrder
    ABR_DATETIME?: SortOrder
    ABR_HALF_STATUS?: SortOrder
    ABR_VYVESKA_STATUS?: SortOrder
    ABR_KOROB_STATUS?: SortOrder
  }

  export type GA_ANKETA_BRANDMinOrderByAggregateInput = {
    ABR_ABA_ID?: SortOrder
    ABR_STATUS?: SortOrder
    ABR_DATETIME?: SortOrder
    ABR_HALF_STATUS?: SortOrder
    ABR_VYVESKA_STATUS?: SortOrder
    ABR_KOROB_STATUS?: SortOrder
  }

  export type GA_ANKETA_BRANDSumOrderByAggregateInput = {
    ABR_ABA_ID?: SortOrder
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type GA_ANKETA_SCORESCountOrderByAggregateInput = {
    ANS_WSU_ID?: SortOrder
    ANS_SCORES?: SortOrder
    ANS_DATETIME?: SortOrder
    ANS_ISSHOW?: SortOrder
  }

  export type GA_ANKETA_SCORESAvgOrderByAggregateInput = {
    ANS_WSU_ID?: SortOrder
    ANS_SCORES?: SortOrder
  }

  export type GA_ANKETA_SCORESMaxOrderByAggregateInput = {
    ANS_WSU_ID?: SortOrder
    ANS_SCORES?: SortOrder
    ANS_DATETIME?: SortOrder
    ANS_ISSHOW?: SortOrder
  }

  export type GA_ANKETA_SCORESMinOrderByAggregateInput = {
    ANS_WSU_ID?: SortOrder
    ANS_SCORES?: SortOrder
    ANS_DATETIME?: SortOrder
    ANS_ISSHOW?: SortOrder
  }

  export type GA_ANKETA_SCORESSumOrderByAggregateInput = {
    ANS_WSU_ID?: SortOrder
    ANS_SCORES?: SortOrder
  }

  export type GA_ANKETA_SCORES_HISTORYCountOrderByAggregateInput = {
    ASH_WSU_ID?: SortOrder
    ASH_SCORES?: SortOrder
    ASH_DATETIME?: SortOrder
    ASH_DESC?: SortOrder
    ASH_TYPE?: SortOrder
    ASH_SCORES_OLD?: SortOrder
    ASH_EVENT_STATUS?: SortOrder
    ASH_DATETIME_UPDATE?: SortOrder
    ASH_IZO_ID?: SortOrder
  }

  export type GA_ANKETA_SCORES_HISTORYAvgOrderByAggregateInput = {
    ASH_WSU_ID?: SortOrder
    ASH_SCORES?: SortOrder
    ASH_TYPE?: SortOrder
    ASH_SCORES_OLD?: SortOrder
    ASH_IZO_ID?: SortOrder
  }

  export type GA_ANKETA_SCORES_HISTORYMaxOrderByAggregateInput = {
    ASH_WSU_ID?: SortOrder
    ASH_SCORES?: SortOrder
    ASH_DATETIME?: SortOrder
    ASH_DESC?: SortOrder
    ASH_TYPE?: SortOrder
    ASH_SCORES_OLD?: SortOrder
    ASH_EVENT_STATUS?: SortOrder
    ASH_DATETIME_UPDATE?: SortOrder
    ASH_IZO_ID?: SortOrder
  }

  export type GA_ANKETA_SCORES_HISTORYMinOrderByAggregateInput = {
    ASH_WSU_ID?: SortOrder
    ASH_SCORES?: SortOrder
    ASH_DATETIME?: SortOrder
    ASH_DESC?: SortOrder
    ASH_TYPE?: SortOrder
    ASH_SCORES_OLD?: SortOrder
    ASH_EVENT_STATUS?: SortOrder
    ASH_DATETIME_UPDATE?: SortOrder
    ASH_IZO_ID?: SortOrder
  }

  export type GA_ANKETA_SCORES_HISTORYSumOrderByAggregateInput = {
    ASH_WSU_ID?: SortOrder
    ASH_SCORES?: SortOrder
    ASH_TYPE?: SortOrder
    ASH_SCORES_OLD?: SortOrder
    ASH_IZO_ID?: SortOrder
  }

  export type GA_ANKETA_SOREVNOVANIECountOrderByAggregateInput = {
    ASR_YEAR?: SortOrder
    ASR_MONTH?: SortOrder
    ASR_WSU_ID?: SortOrder
    ASR_LOGIN?: SortOrder
    ASR_FIO?: SortOrder
    ASR_SCORE?: SortOrder
    ASR_DOLJNOST?: SortOrder
    ASR_RUKOVODITEL?: SortOrder
  }

  export type GA_ANKETA_SOREVNOVANIEAvgOrderByAggregateInput = {
    ASR_YEAR?: SortOrder
    ASR_MONTH?: SortOrder
    ASR_WSU_ID?: SortOrder
    ASR_SCORE?: SortOrder
  }

  export type GA_ANKETA_SOREVNOVANIEMaxOrderByAggregateInput = {
    ASR_YEAR?: SortOrder
    ASR_MONTH?: SortOrder
    ASR_WSU_ID?: SortOrder
    ASR_LOGIN?: SortOrder
    ASR_FIO?: SortOrder
    ASR_SCORE?: SortOrder
    ASR_DOLJNOST?: SortOrder
    ASR_RUKOVODITEL?: SortOrder
  }

  export type GA_ANKETA_SOREVNOVANIEMinOrderByAggregateInput = {
    ASR_YEAR?: SortOrder
    ASR_MONTH?: SortOrder
    ASR_WSU_ID?: SortOrder
    ASR_LOGIN?: SortOrder
    ASR_FIO?: SortOrder
    ASR_SCORE?: SortOrder
    ASR_DOLJNOST?: SortOrder
    ASR_RUKOVODITEL?: SortOrder
  }

  export type GA_ANKETA_SOREVNOVANIESumOrderByAggregateInput = {
    ASR_YEAR?: SortOrder
    ASR_MONTH?: SortOrder
    ASR_WSU_ID?: SortOrder
    ASR_SCORE?: SortOrder
  }

  export type GA_ANKETA_SUPCountOrderByAggregateInput = {
    ADB_ABA_ID?: SortOrder
    ADB_SUP_NAME?: SortOrder
    ADB_MAN_NAME1?: SortOrder
    ADB_MAN_NAME2?: SortOrder
    ADB_MAN_NAME3?: SortOrder
    ADB_SUP_CODE_AE?: SortOrder
    ADB_SUP_CODE_AUTORUS?: SortOrder
    ADB_SUP_CODE_ROSSKO?: SortOrder
    ADB_SUP_CODE_ARKONA?: SortOrder
  }

  export type GA_ANKETA_SUPAvgOrderByAggregateInput = {
    ADB_ABA_ID?: SortOrder
  }

  export type GA_ANKETA_SUPMaxOrderByAggregateInput = {
    ADB_ABA_ID?: SortOrder
    ADB_SUP_NAME?: SortOrder
    ADB_MAN_NAME1?: SortOrder
    ADB_MAN_NAME2?: SortOrder
    ADB_MAN_NAME3?: SortOrder
    ADB_SUP_CODE_AE?: SortOrder
    ADB_SUP_CODE_AUTORUS?: SortOrder
    ADB_SUP_CODE_ROSSKO?: SortOrder
    ADB_SUP_CODE_ARKONA?: SortOrder
  }

  export type GA_ANKETA_SUPMinOrderByAggregateInput = {
    ADB_ABA_ID?: SortOrder
    ADB_SUP_NAME?: SortOrder
    ADB_MAN_NAME1?: SortOrder
    ADB_MAN_NAME2?: SortOrder
    ADB_MAN_NAME3?: SortOrder
    ADB_SUP_CODE_AE?: SortOrder
    ADB_SUP_CODE_AUTORUS?: SortOrder
    ADB_SUP_CODE_ROSSKO?: SortOrder
    ADB_SUP_CODE_ARKONA?: SortOrder
  }

  export type GA_ANKETA_SUPSumOrderByAggregateInput = {
    ADB_ABA_ID?: SortOrder
  }

  export type GA_WS_USERSCountOrderByAggregateInput = {
    WSU_WSO_ID?: SortOrder
    WSU_ID?: SortOrder
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
    WSU_WSO_ID?: SortOrder
    WSU_ID?: SortOrder
    WSU_ID_IN_DS?: SortOrder
    WSU_PRICE_TYPE?: SortOrder
    WSU_GRP_ID?: SortOrder
    WSU_WS_ID?: SortOrder
  }

  export type GA_WS_USERSMaxOrderByAggregateInput = {
    WSU_WSO_ID?: SortOrder
    WSU_ID?: SortOrder
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
    WSU_WSO_ID?: SortOrder
    WSU_ID?: SortOrder
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
    WSU_WSO_ID?: SortOrder
    WSU_ID?: SortOrder
    WSU_ID_IN_DS?: SortOrder
    WSU_PRICE_TYPE?: SortOrder
    WSU_GRP_ID?: SortOrder
    WSU_WS_ID?: SortOrder
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
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

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
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

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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
     * @deprecated Use GA_ANKETA_BRANDDefaultArgs instead
     */
    export type GA_ANKETA_BRANDArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GA_ANKETA_BRANDDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GA_ANKETA_DOGOVORDefaultArgs instead
     */
    export type GA_ANKETA_DOGOVORArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GA_ANKETA_DOGOVORDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GA_ANKETA_OBOROTDefaultArgs instead
     */
    export type GA_ANKETA_OBOROTArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GA_ANKETA_OBOROTDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GA_ANKETA_SCORESDefaultArgs instead
     */
    export type GA_ANKETA_SCORESArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GA_ANKETA_SCORESDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GA_ANKETA_SCORES_HISTORYDefaultArgs instead
     */
    export type GA_ANKETA_SCORES_HISTORYArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GA_ANKETA_SCORES_HISTORYDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GA_ANKETA_SOREVNOVANIEDefaultArgs instead
     */
    export type GA_ANKETA_SOREVNOVANIEArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GA_ANKETA_SOREVNOVANIEDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GA_ANKETA_SUPDefaultArgs instead
     */
    export type GA_ANKETA_SUPArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GA_ANKETA_SUPDefaultArgs<ExtArgs>
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