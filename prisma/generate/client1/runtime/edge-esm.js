var Jl = Object.create
var Po = Object.defineProperty
var Gl = Object.getOwnPropertyDescriptor
var Wl = Object.getOwnPropertyNames
var Hl = Object.getPrototypeOf,
    zl = Object.prototype.hasOwnProperty
var vo = ((e) =>
    typeof require != 'undefined'
        ? require
        : typeof Proxy != 'undefined'
          ? new Proxy(e, {
                get: (t, r) => (typeof require != 'undefined' ? require : t)[r],
            })
          : e)(function (e) {
    if (typeof require != 'undefined') return require.apply(this, arguments)
    throw Error('Dynamic require of "' + e + '" is not supported')
})
var yr = (e, t) => () => (e && (t = e((e = 0))), t)
var ee = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    hr = (e, t) => {
        for (var r in t) Po(e, r, { get: t[r], enumerable: !0 })
    },
    Yl = (e, t, r, n) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
            for (let o of Wl(t))
                !zl.call(e, o) &&
                    o !== r &&
                    Po(e, o, {
                        get: () => t[o],
                        enumerable: !(n = Gl(t, o)) || n.enumerable,
                    })
        return e
    }
var ve = (e, t, r) => (
    (r = e != null ? Jl(Hl(e)) : {}),
    Yl(
        t || !e || !e.__esModule
            ? Po(r, 'default', { value: e, enumerable: !0 })
            : r,
        e
    )
)
function V(e) {
    return () => e
}
function Ve() {
    return h
}
var h,
    p = yr(() => {
        'use strict'
        h = {
            abort: V(void 0),
            addListener: V(Ve()),
            allowedNodeEnvironmentFlags: new Set(),
            arch: 'x64',
            argv: ['/bin/node'],
            argv0: 'node',
            chdir: V(void 0),
            config: {
                target_defaults: {
                    cflags: [],
                    default_configuration: '',
                    defines: [],
                    include_dirs: [],
                    libraries: [],
                },
                variables: {
                    clang: 0,
                    host_arch: 'x64',
                    node_install_npm: !1,
                    node_install_waf: !1,
                    node_prefix: '',
                    node_shared_openssl: !1,
                    node_shared_v8: !1,
                    node_shared_zlib: !1,
                    node_use_dtrace: !1,
                    node_use_etw: !1,
                    node_use_openssl: !1,
                    target_arch: 'x64',
                    v8_no_strict_aliasing: 0,
                    v8_use_snapshot: !1,
                    visibility: '',
                },
            },
            connected: !1,
            cpuUsage: () => ({ user: 0, system: 0 }),
            cwd: () => '/',
            debugPort: 0,
            disconnect: V(void 0),
            constrainedMemory: () => {},
            emit: V(Ve()),
            emitWarning: V(void 0),
            env: {},
            eventNames: () => [],
            execArgv: [],
            execPath: '/',
            exit: V(void 0),
            features: {
                inspector: !1,
                debug: !1,
                uv: !1,
                ipv6: !1,
                tls_alpn: !1,
                tls_sni: !1,
                tls_ocsp: !1,
                tls: !1,
            },
            getMaxListeners: V(0),
            getegid: V(0),
            geteuid: V(0),
            getgid: V(0),
            getgroups: V([]),
            getuid: V(0),
            hasUncaughtExceptionCaptureCallback: V(!1),
            hrtime: V([0, 0]),
            platform: 'linux',
            kill: V(!0),
            listenerCount: V(0),
            listeners: V([]),
            memoryUsage: V({
                arrayBuffers: 0,
                external: 0,
                heapTotal: 0,
                heapUsed: 0,
                rss: 0,
            }),
            nextTick: (e, ...t) => {
                setTimeout(() => {
                    e(...t)
                }, 0)
            },
            off: V(Ve()),
            on: V(Ve()),
            once: V(Ve()),
            openStdin: V({}),
            pid: 0,
            ppid: 0,
            prependListener: V(Ve()),
            prependOnceListener: V(Ve()),
            rawListeners: V([]),
            release: { name: 'node' },
            removeAllListeners: V(Ve()),
            removeListener: V(Ve()),
            resourceUsage: V({
                fsRead: 0,
                fsWrite: 0,
                involuntaryContextSwitches: 0,
                ipcReceived: 0,
                ipcSent: 0,
                majorPageFault: 0,
                maxRSS: 0,
                minorPageFault: 0,
                sharedMemorySize: 0,
                signalsCount: 0,
                swappedOut: 0,
                systemCPUTime: 0,
                unsharedDataSize: 0,
                unsharedStackSize: 0,
                userCPUTime: 0,
                voluntaryContextSwitches: 0,
            }),
            setMaxListeners: V(Ve()),
            setUncaughtExceptionCaptureCallback: V(void 0),
            setegid: V(void 0),
            seteuid: V(void 0),
            setgid: V(void 0),
            setgroups: V(void 0),
            setuid: V(void 0),
            sourceMapsEnabled: !1,
            stderr: { fd: 2 },
            stdin: { fd: 0 },
            stdout: { fd: 1 },
            title: 'node',
            traceDeprecation: !1,
            umask: V(0),
            uptime: V(0),
            version: '',
            versions: {
                http_parser: '',
                node: '',
                v8: '',
                ares: '',
                uv: '',
                zlib: '',
                modules: '',
                openssl: '',
            },
        }
    })
var b,
    f = yr(() => {
        'use strict'
        b = () => {}
        b.prototype = b
    })
var x,
    d = yr(() => {
        'use strict'
        x = class {
            constructor(t) {
                this.value = t
            }
            deref() {
                return this.value
            }
        }
    })
var Es = ee((Kt) => {
    'use strict'
    m()
    p()
    f()
    d()
    var as = (e, t) => () => (
            t || e((t = { exports: {} }).exports, t), t.exports
        ),
        Zl = as((e) => {
            'use strict'
            ;(e.byteLength = u), (e.toByteArray = c), (e.fromByteArray = P)
            var t = [],
                r = [],
                n = typeof Uint8Array < 'u' ? Uint8Array : Array,
                o =
                    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
            for (i = 0, s = o.length; i < s; ++i)
                (t[i] = o[i]), (r[o.charCodeAt(i)] = i)
            var i, s
            ;(r[45] = 62), (r[95] = 63)
            function a(v) {
                var E = v.length
                if (E % 4 > 0)
                    throw new Error(
                        'Invalid string. Length must be a multiple of 4'
                    )
                var T = v.indexOf('=')
                T === -1 && (T = E)
                var M = T === E ? 0 : 4 - (T % 4)
                return [T, M]
            }
            function u(v) {
                var E = a(v),
                    T = E[0],
                    M = E[1]
                return ((T + M) * 3) / 4 - M
            }
            function l(v, E, T) {
                return ((E + T) * 3) / 4 - T
            }
            function c(v) {
                var E,
                    T = a(v),
                    M = T[0],
                    O = T[1],
                    S = new n(l(v, M, O)),
                    R = 0,
                    $ = O > 0 ? M - 4 : M,
                    q
                for (q = 0; q < $; q += 4)
                    (E =
                        (r[v.charCodeAt(q)] << 18) |
                        (r[v.charCodeAt(q + 1)] << 12) |
                        (r[v.charCodeAt(q + 2)] << 6) |
                        r[v.charCodeAt(q + 3)]),
                        (S[R++] = (E >> 16) & 255),
                        (S[R++] = (E >> 8) & 255),
                        (S[R++] = E & 255)
                return (
                    O === 2 &&
                        ((E =
                            (r[v.charCodeAt(q)] << 2) |
                            (r[v.charCodeAt(q + 1)] >> 4)),
                        (S[R++] = E & 255)),
                    O === 1 &&
                        ((E =
                            (r[v.charCodeAt(q)] << 10) |
                            (r[v.charCodeAt(q + 1)] << 4) |
                            (r[v.charCodeAt(q + 2)] >> 2)),
                        (S[R++] = (E >> 8) & 255),
                        (S[R++] = E & 255)),
                    S
                )
            }
            function g(v) {
                return (
                    t[(v >> 18) & 63] +
                    t[(v >> 12) & 63] +
                    t[(v >> 6) & 63] +
                    t[v & 63]
                )
            }
            function y(v, E, T) {
                for (var M, O = [], S = E; S < T; S += 3)
                    (M =
                        ((v[S] << 16) & 16711680) +
                        ((v[S + 1] << 8) & 65280) +
                        (v[S + 2] & 255)),
                        O.push(g(M))
                return O.join('')
            }
            function P(v) {
                for (
                    var E,
                        T = v.length,
                        M = T % 3,
                        O = [],
                        S = 16383,
                        R = 0,
                        $ = T - M;
                    R < $;
                    R += S
                )
                    O.push(y(v, R, R + S > $ ? $ : R + S))
                return (
                    M === 1
                        ? ((E = v[T - 1]),
                          O.push(t[E >> 2] + t[(E << 4) & 63] + '=='))
                        : M === 2 &&
                          ((E = (v[T - 2] << 8) + v[T - 1]),
                          O.push(
                              t[E >> 10] +
                                  t[(E >> 4) & 63] +
                                  t[(E << 2) & 63] +
                                  '='
                          )),
                    O.join('')
                )
            }
        }),
        Xl = as((e) => {
            ;(e.read = function (t, r, n, o, i) {
                var s,
                    a,
                    u = i * 8 - o - 1,
                    l = (1 << u) - 1,
                    c = l >> 1,
                    g = -7,
                    y = n ? i - 1 : 0,
                    P = n ? -1 : 1,
                    v = t[r + y]
                for (
                    y += P, s = v & ((1 << -g) - 1), v >>= -g, g += u;
                    g > 0;
                    s = s * 256 + t[r + y], y += P, g -= 8
                );
                for (
                    a = s & ((1 << -g) - 1), s >>= -g, g += o;
                    g > 0;
                    a = a * 256 + t[r + y], y += P, g -= 8
                );
                if (s === 0) s = 1 - c
                else {
                    if (s === l) return a ? NaN : (v ? -1 : 1) * (1 / 0)
                    ;(a = a + Math.pow(2, o)), (s = s - c)
                }
                return (v ? -1 : 1) * a * Math.pow(2, s - o)
            }),
                (e.write = function (t, r, n, o, i, s) {
                    var a,
                        u,
                        l,
                        c = s * 8 - i - 1,
                        g = (1 << c) - 1,
                        y = g >> 1,
                        P = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                        v = o ? 0 : s - 1,
                        E = o ? 1 : -1,
                        T = r < 0 || (r === 0 && 1 / r < 0) ? 1 : 0
                    for (
                        r = Math.abs(r),
                            isNaN(r) || r === 1 / 0
                                ? ((u = isNaN(r) ? 1 : 0), (a = g))
                                : ((a = Math.floor(Math.log(r) / Math.LN2)),
                                  r * (l = Math.pow(2, -a)) < 1 &&
                                      (a--, (l *= 2)),
                                  a + y >= 1
                                      ? (r += P / l)
                                      : (r += P * Math.pow(2, 1 - y)),
                                  r * l >= 2 && (a++, (l /= 2)),
                                  a + y >= g
                                      ? ((u = 0), (a = g))
                                      : a + y >= 1
                                        ? ((u = (r * l - 1) * Math.pow(2, i)),
                                          (a = a + y))
                                        : ((u =
                                              r *
                                              Math.pow(2, y - 1) *
                                              Math.pow(2, i)),
                                          (a = 0)));
                        i >= 8;
                        t[n + v] = u & 255, v += E, u /= 256, i -= 8
                    );
                    for (
                        a = (a << i) | u, c += i;
                        c > 0;
                        t[n + v] = a & 255, v += E, a /= 256, c -= 8
                    );
                    t[n + v - E] |= T * 128
                })
        }),
        _o = Zl(),
        qt = Xl(),
        ns =
            typeof Symbol == 'function' && typeof Symbol.for == 'function'
                ? Symbol.for('nodejs.util.inspect.custom')
                : null
    Kt.Buffer = _
    Kt.SlowBuffer = ic
    Kt.INSPECT_MAX_BYTES = 50
    var sn = 2147483647
    Kt.kMaxLength = sn
    _.TYPED_ARRAY_SUPPORT = ec()
    !_.TYPED_ARRAY_SUPPORT &&
        typeof console < 'u' &&
        typeof console.error == 'function' &&
        console.error(
            'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
        )
    function ec() {
        try {
            let e = new Uint8Array(1),
                t = {
                    foo: function () {
                        return 42
                    },
                }
            return (
                Object.setPrototypeOf(t, Uint8Array.prototype),
                Object.setPrototypeOf(e, t),
                e.foo() === 42
            )
        } catch (e) {
            return !1
        }
    }
    Object.defineProperty(_.prototype, 'parent', {
        enumerable: !0,
        get: function () {
            if (_.isBuffer(this)) return this.buffer
        },
    })
    Object.defineProperty(_.prototype, 'offset', {
        enumerable: !0,
        get: function () {
            if (_.isBuffer(this)) return this.byteOffset
        },
    })
    function Xe(e) {
        if (e > sn)
            throw new RangeError(
                'The value "' + e + '" is invalid for option "size"'
            )
        let t = new Uint8Array(e)
        return Object.setPrototypeOf(t, _.prototype), t
    }
    function _(e, t, r) {
        if (typeof e == 'number') {
            if (typeof t == 'string')
                throw new TypeError(
                    'The "string" argument must be of type string. Received type number'
                )
            return Co(e)
        }
        return us(e, t, r)
    }
    _.poolSize = 8192
    function us(e, t, r) {
        if (typeof e == 'string') return rc(e, t)
        if (ArrayBuffer.isView(e)) return nc(e)
        if (e == null)
            throw new TypeError(
                'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
                    typeof e
            )
        if (
            Ke(e, ArrayBuffer) ||
            (e && Ke(e.buffer, ArrayBuffer)) ||
            (typeof SharedArrayBuffer < 'u' &&
                (Ke(e, SharedArrayBuffer) ||
                    (e && Ke(e.buffer, SharedArrayBuffer))))
        )
            return cs(e, t, r)
        if (typeof e == 'number')
            throw new TypeError(
                'The "value" argument must not be of type number. Received type number'
            )
        let n = e.valueOf && e.valueOf()
        if (n != null && n !== e) return _.from(n, t, r)
        let o = oc(e)
        if (o) return o
        if (
            typeof Symbol < 'u' &&
            Symbol.toPrimitive != null &&
            typeof e[Symbol.toPrimitive] == 'function'
        )
            return _.from(e[Symbol.toPrimitive]('string'), t, r)
        throw new TypeError(
            'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
                typeof e
        )
    }
    _.from = function (e, t, r) {
        return us(e, t, r)
    }
    Object.setPrototypeOf(_.prototype, Uint8Array.prototype)
    Object.setPrototypeOf(_, Uint8Array)
    function ls(e) {
        if (typeof e != 'number')
            throw new TypeError('"size" argument must be of type number')
        if (e < 0)
            throw new RangeError(
                'The value "' + e + '" is invalid for option "size"'
            )
    }
    function tc(e, t, r) {
        return (
            ls(e),
            e <= 0
                ? Xe(e)
                : t !== void 0
                  ? typeof r == 'string'
                      ? Xe(e).fill(t, r)
                      : Xe(e).fill(t)
                  : Xe(e)
        )
    }
    _.alloc = function (e, t, r) {
        return tc(e, t, r)
    }
    function Co(e) {
        return ls(e), Xe(e < 0 ? 0 : So(e) | 0)
    }
    _.allocUnsafe = function (e) {
        return Co(e)
    }
    _.allocUnsafeSlow = function (e) {
        return Co(e)
    }
    function rc(e, t) {
        if (
            ((typeof t != 'string' || t === '') && (t = 'utf8'),
            !_.isEncoding(t))
        )
            throw new TypeError('Unknown encoding: ' + t)
        let r = ps(e, t) | 0,
            n = Xe(r),
            o = n.write(e, t)
        return o !== r && (n = n.slice(0, o)), n
    }
    function To(e) {
        let t = e.length < 0 ? 0 : So(e.length) | 0,
            r = Xe(t)
        for (let n = 0; n < t; n += 1) r[n] = e[n] & 255
        return r
    }
    function nc(e) {
        if (Ke(e, Uint8Array)) {
            let t = new Uint8Array(e)
            return cs(t.buffer, t.byteOffset, t.byteLength)
        }
        return To(e)
    }
    function cs(e, t, r) {
        if (t < 0 || e.byteLength < t)
            throw new RangeError('"offset" is outside of buffer bounds')
        if (e.byteLength < t + (r || 0))
            throw new RangeError('"length" is outside of buffer bounds')
        let n
        return (
            t === void 0 && r === void 0
                ? (n = new Uint8Array(e))
                : r === void 0
                  ? (n = new Uint8Array(e, t))
                  : (n = new Uint8Array(e, t, r)),
            Object.setPrototypeOf(n, _.prototype),
            n
        )
    }
    function oc(e) {
        if (_.isBuffer(e)) {
            let t = So(e.length) | 0,
                r = Xe(t)
            return r.length === 0 || e.copy(r, 0, 0, t), r
        }
        if (e.length !== void 0)
            return typeof e.length != 'number' || Ro(e.length) ? Xe(0) : To(e)
        if (e.type === 'Buffer' && Array.isArray(e.data)) return To(e.data)
    }
    function So(e) {
        if (e >= sn)
            throw new RangeError(
                'Attempt to allocate Buffer larger than maximum size: 0x' +
                    sn.toString(16) +
                    ' bytes'
            )
        return e | 0
    }
    function ic(e) {
        return +e != e && (e = 0), _.alloc(+e)
    }
    _.isBuffer = function (e) {
        return e != null && e._isBuffer === !0 && e !== _.prototype
    }
    _.compare = function (e, t) {
        if (
            (Ke(e, Uint8Array) && (e = _.from(e, e.offset, e.byteLength)),
            Ke(t, Uint8Array) && (t = _.from(t, t.offset, t.byteLength)),
            !_.isBuffer(e) || !_.isBuffer(t))
        )
            throw new TypeError(
                'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            )
        if (e === t) return 0
        let r = e.length,
            n = t.length
        for (let o = 0, i = Math.min(r, n); o < i; ++o)
            if (e[o] !== t[o]) {
                ;(r = e[o]), (n = t[o])
                break
            }
        return r < n ? -1 : n < r ? 1 : 0
    }
    _.isEncoding = function (e) {
        switch (String(e).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return !0
            default:
                return !1
        }
    }
    _.concat = function (e, t) {
        if (!Array.isArray(e))
            throw new TypeError('"list" argument must be an Array of Buffers')
        if (e.length === 0) return _.alloc(0)
        let r
        if (t === void 0) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length
        let n = _.allocUnsafe(t),
            o = 0
        for (r = 0; r < e.length; ++r) {
            let i = e[r]
            if (Ke(i, Uint8Array))
                o + i.length > n.length
                    ? (_.isBuffer(i) || (i = _.from(i)), i.copy(n, o))
                    : Uint8Array.prototype.set.call(n, i, o)
            else if (_.isBuffer(i)) i.copy(n, o)
            else
                throw new TypeError(
                    '"list" argument must be an Array of Buffers'
                )
            o += i.length
        }
        return n
    }
    function ps(e, t) {
        if (_.isBuffer(e)) return e.length
        if (ArrayBuffer.isView(e) || Ke(e, ArrayBuffer)) return e.byteLength
        if (typeof e != 'string')
            throw new TypeError(
                'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                    typeof e
            )
        let r = e.length,
            n = arguments.length > 2 && arguments[2] === !0
        if (!n && r === 0) return 0
        let o = !1
        for (;;)
            switch (t) {
                case 'ascii':
                case 'latin1':
                case 'binary':
                    return r
                case 'utf8':
                case 'utf-8':
                    return Ao(e).length
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                    return r * 2
                case 'hex':
                    return r >>> 1
                case 'base64':
                    return xs(e).length
                default:
                    if (o) return n ? -1 : Ao(e).length
                    ;(t = ('' + t).toLowerCase()), (o = !0)
            }
    }
    _.byteLength = ps
    function sc(e, t, r) {
        let n = !1
        if (
            ((t === void 0 || t < 0) && (t = 0),
            t > this.length ||
                ((r === void 0 || r > this.length) && (r = this.length),
                r <= 0) ||
                ((r >>>= 0), (t >>>= 0), r <= t))
        )
            return ''
        for (e || (e = 'utf8'); ; )
            switch (e) {
                case 'hex':
                    return yc(this, t, r)
                case 'utf8':
                case 'utf-8':
                    return ds(this, t, r)
                case 'ascii':
                    return mc(this, t, r)
                case 'latin1':
                case 'binary':
                    return gc(this, t, r)
                case 'base64':
                    return fc(this, t, r)
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                    return hc(this, t, r)
                default:
                    if (n) throw new TypeError('Unknown encoding: ' + e)
                    ;(e = (e + '').toLowerCase()), (n = !0)
            }
    }
    _.prototype._isBuffer = !0
    function At(e, t, r) {
        let n = e[t]
        ;(e[t] = e[r]), (e[r] = n)
    }
    _.prototype.swap16 = function () {
        let e = this.length
        if (e % 2 !== 0)
            throw new RangeError('Buffer size must be a multiple of 16-bits')
        for (let t = 0; t < e; t += 2) At(this, t, t + 1)
        return this
    }
    _.prototype.swap32 = function () {
        let e = this.length
        if (e % 4 !== 0)
            throw new RangeError('Buffer size must be a multiple of 32-bits')
        for (let t = 0; t < e; t += 4)
            At(this, t, t + 3), At(this, t + 1, t + 2)
        return this
    }
    _.prototype.swap64 = function () {
        let e = this.length
        if (e % 8 !== 0)
            throw new RangeError('Buffer size must be a multiple of 64-bits')
        for (let t = 0; t < e; t += 8)
            At(this, t, t + 7),
                At(this, t + 1, t + 6),
                At(this, t + 2, t + 5),
                At(this, t + 3, t + 4)
        return this
    }
    _.prototype.toString = function () {
        let e = this.length
        return e === 0
            ? ''
            : arguments.length === 0
              ? ds(this, 0, e)
              : sc.apply(this, arguments)
    }
    _.prototype.toLocaleString = _.prototype.toString
    _.prototype.equals = function (e) {
        if (!_.isBuffer(e)) throw new TypeError('Argument must be a Buffer')
        return this === e ? !0 : _.compare(this, e) === 0
    }
    _.prototype.inspect = function () {
        let e = '',
            t = Kt.INSPECT_MAX_BYTES
        return (
            (e = this.toString('hex', 0, t)
                .replace(/(.{2})/g, '$1 ')
                .trim()),
            this.length > t && (e += ' ... '),
            '<Buffer ' + e + '>'
        )
    }
    ns && (_.prototype[ns] = _.prototype.inspect)
    _.prototype.compare = function (e, t, r, n, o) {
        if (
            (Ke(e, Uint8Array) && (e = _.from(e, e.offset, e.byteLength)),
            !_.isBuffer(e))
        )
            throw new TypeError(
                'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                    typeof e
            )
        if (
            (t === void 0 && (t = 0),
            r === void 0 && (r = e ? e.length : 0),
            n === void 0 && (n = 0),
            o === void 0 && (o = this.length),
            t < 0 || r > e.length || n < 0 || o > this.length)
        )
            throw new RangeError('out of range index')
        if (n >= o && t >= r) return 0
        if (n >= o) return -1
        if (t >= r) return 1
        if (((t >>>= 0), (r >>>= 0), (n >>>= 0), (o >>>= 0), this === e))
            return 0
        let i = o - n,
            s = r - t,
            a = Math.min(i, s),
            u = this.slice(n, o),
            l = e.slice(t, r)
        for (let c = 0; c < a; ++c)
            if (u[c] !== l[c]) {
                ;(i = u[c]), (s = l[c])
                break
            }
        return i < s ? -1 : s < i ? 1 : 0
    }
    function fs(e, t, r, n, o) {
        if (e.length === 0) return -1
        if (
            (typeof r == 'string'
                ? ((n = r), (r = 0))
                : r > 2147483647
                  ? (r = 2147483647)
                  : r < -2147483648 && (r = -2147483648),
            (r = +r),
            Ro(r) && (r = o ? 0 : e.length - 1),
            r < 0 && (r = e.length + r),
            r >= e.length)
        ) {
            if (o) return -1
            r = e.length - 1
        } else if (r < 0)
            if (o) r = 0
            else return -1
        if ((typeof t == 'string' && (t = _.from(t, n)), _.isBuffer(t)))
            return t.length === 0 ? -1 : os(e, t, r, n, o)
        if (typeof t == 'number')
            return (
                (t = t & 255),
                typeof Uint8Array.prototype.indexOf == 'function'
                    ? o
                        ? Uint8Array.prototype.indexOf.call(e, t, r)
                        : Uint8Array.prototype.lastIndexOf.call(e, t, r)
                    : os(e, [t], r, n, o)
            )
        throw new TypeError('val must be string, number or Buffer')
    }
    function os(e, t, r, n, o) {
        let i = 1,
            s = e.length,
            a = t.length
        if (
            n !== void 0 &&
            ((n = String(n).toLowerCase()),
            n === 'ucs2' ||
                n === 'ucs-2' ||
                n === 'utf16le' ||
                n === 'utf-16le')
        ) {
            if (e.length < 2 || t.length < 2) return -1
            ;(i = 2), (s /= 2), (a /= 2), (r /= 2)
        }
        function u(c, g) {
            return i === 1 ? c[g] : c.readUInt16BE(g * i)
        }
        let l
        if (o) {
            let c = -1
            for (l = r; l < s; l++)
                if (u(e, l) === u(t, c === -1 ? 0 : l - c)) {
                    if ((c === -1 && (c = l), l - c + 1 === a)) return c * i
                } else c !== -1 && (l -= l - c), (c = -1)
        } else
            for (r + a > s && (r = s - a), l = r; l >= 0; l--) {
                let c = !0
                for (let g = 0; g < a; g++)
                    if (u(e, l + g) !== u(t, g)) {
                        c = !1
                        break
                    }
                if (c) return l
            }
        return -1
    }
    _.prototype.includes = function (e, t, r) {
        return this.indexOf(e, t, r) !== -1
    }
    _.prototype.indexOf = function (e, t, r) {
        return fs(this, e, t, r, !0)
    }
    _.prototype.lastIndexOf = function (e, t, r) {
        return fs(this, e, t, r, !1)
    }
    function ac(e, t, r, n) {
        r = Number(r) || 0
        let o = e.length - r
        n ? ((n = Number(n)), n > o && (n = o)) : (n = o)
        let i = t.length
        n > i / 2 && (n = i / 2)
        let s
        for (s = 0; s < n; ++s) {
            let a = parseInt(t.substr(s * 2, 2), 16)
            if (Ro(a)) return s
            e[r + s] = a
        }
        return s
    }
    function uc(e, t, r, n) {
        return an(Ao(t, e.length - r), e, r, n)
    }
    function lc(e, t, r, n) {
        return an(Ec(t), e, r, n)
    }
    function cc(e, t, r, n) {
        return an(xs(t), e, r, n)
    }
    function pc(e, t, r, n) {
        return an(Pc(t, e.length - r), e, r, n)
    }
    _.prototype.write = function (e, t, r, n) {
        if (t === void 0) (n = 'utf8'), (r = this.length), (t = 0)
        else if (r === void 0 && typeof t == 'string')
            (n = t), (r = this.length), (t = 0)
        else if (isFinite(t))
            (t = t >>> 0),
                isFinite(r)
                    ? ((r = r >>> 0), n === void 0 && (n = 'utf8'))
                    : ((n = r), (r = void 0))
        else
            throw new Error(
                'Buffer.write(string, encoding, offset[, length]) is no longer supported'
            )
        let o = this.length - t
        if (
            ((r === void 0 || r > o) && (r = o),
            (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
        )
            throw new RangeError('Attempt to write outside buffer bounds')
        n || (n = 'utf8')
        let i = !1
        for (;;)
            switch (n) {
                case 'hex':
                    return ac(this, e, t, r)
                case 'utf8':
                case 'utf-8':
                    return uc(this, e, t, r)
                case 'ascii':
                case 'latin1':
                case 'binary':
                    return lc(this, e, t, r)
                case 'base64':
                    return cc(this, e, t, r)
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                    return pc(this, e, t, r)
                default:
                    if (i) throw new TypeError('Unknown encoding: ' + n)
                    ;(n = ('' + n).toLowerCase()), (i = !0)
            }
    }
    _.prototype.toJSON = function () {
        return {
            type: 'Buffer',
            data: Array.prototype.slice.call(this._arr || this, 0),
        }
    }
    function fc(e, t, r) {
        return t === 0 && r === e.length
            ? _o.fromByteArray(e)
            : _o.fromByteArray(e.slice(t, r))
    }
    function ds(e, t, r) {
        r = Math.min(e.length, r)
        let n = [],
            o = t
        for (; o < r; ) {
            let i = e[o],
                s = null,
                a = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1
            if (o + a <= r) {
                let u, l, c, g
                switch (a) {
                    case 1:
                        i < 128 && (s = i)
                        break
                    case 2:
                        ;(u = e[o + 1]),
                            (u & 192) === 128 &&
                                ((g = ((i & 31) << 6) | (u & 63)),
                                g > 127 && (s = g))
                        break
                    case 3:
                        ;(u = e[o + 1]),
                            (l = e[o + 2]),
                            (u & 192) === 128 &&
                                (l & 192) === 128 &&
                                ((g =
                                    ((i & 15) << 12) |
                                    ((u & 63) << 6) |
                                    (l & 63)),
                                g > 2047 && (g < 55296 || g > 57343) && (s = g))
                        break
                    case 4:
                        ;(u = e[o + 1]),
                            (l = e[o + 2]),
                            (c = e[o + 3]),
                            (u & 192) === 128 &&
                                (l & 192) === 128 &&
                                (c & 192) === 128 &&
                                ((g =
                                    ((i & 15) << 18) |
                                    ((u & 63) << 12) |
                                    ((l & 63) << 6) |
                                    (c & 63)),
                                g > 65535 && g < 1114112 && (s = g))
                }
            }
            s === null
                ? ((s = 65533), (a = 1))
                : s > 65535 &&
                  ((s -= 65536),
                  n.push(((s >>> 10) & 1023) | 55296),
                  (s = 56320 | (s & 1023))),
                n.push(s),
                (o += a)
        }
        return dc(n)
    }
    var is = 4096
    function dc(e) {
        let t = e.length
        if (t <= is) return String.fromCharCode.apply(String, e)
        let r = '',
            n = 0
        for (; n < t; )
            r += String.fromCharCode.apply(String, e.slice(n, (n += is)))
        return r
    }
    function mc(e, t, r) {
        let n = ''
        r = Math.min(e.length, r)
        for (let o = t; o < r; ++o) n += String.fromCharCode(e[o] & 127)
        return n
    }
    function gc(e, t, r) {
        let n = ''
        r = Math.min(e.length, r)
        for (let o = t; o < r; ++o) n += String.fromCharCode(e[o])
        return n
    }
    function yc(e, t, r) {
        let n = e.length
        ;(!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n)
        let o = ''
        for (let i = t; i < r; ++i) o += vc[e[i]]
        return o
    }
    function hc(e, t, r) {
        let n = e.slice(t, r),
            o = ''
        for (let i = 0; i < n.length - 1; i += 2)
            o += String.fromCharCode(n[i] + n[i + 1] * 256)
        return o
    }
    _.prototype.slice = function (e, t) {
        let r = this.length
        ;(e = ~~e),
            (t = t === void 0 ? r : ~~t),
            e < 0 ? ((e += r), e < 0 && (e = 0)) : e > r && (e = r),
            t < 0 ? ((t += r), t < 0 && (t = 0)) : t > r && (t = r),
            t < e && (t = e)
        let n = this.subarray(e, t)
        return Object.setPrototypeOf(n, _.prototype), n
    }
    function se(e, t, r) {
        if (e % 1 !== 0 || e < 0) throw new RangeError('offset is not uint')
        if (e + t > r)
            throw new RangeError('Trying to access beyond buffer length')
    }
    _.prototype.readUintLE = _.prototype.readUIntLE = function (e, t, r) {
        ;(e = e >>> 0), (t = t >>> 0), r || se(e, t, this.length)
        let n = this[e],
            o = 1,
            i = 0
        for (; ++i < t && (o *= 256); ) n += this[e + i] * o
        return n
    }
    _.prototype.readUintBE = _.prototype.readUIntBE = function (e, t, r) {
        ;(e = e >>> 0), (t = t >>> 0), r || se(e, t, this.length)
        let n = this[e + --t],
            o = 1
        for (; t > 0 && (o *= 256); ) n += this[e + --t] * o
        return n
    }
    _.prototype.readUint8 = _.prototype.readUInt8 = function (e, t) {
        return (e = e >>> 0), t || se(e, 1, this.length), this[e]
    }
    _.prototype.readUint16LE = _.prototype.readUInt16LE = function (e, t) {
        return (
            (e = e >>> 0),
            t || se(e, 2, this.length),
            this[e] | (this[e + 1] << 8)
        )
    }
    _.prototype.readUint16BE = _.prototype.readUInt16BE = function (e, t) {
        return (
            (e = e >>> 0),
            t || se(e, 2, this.length),
            (this[e] << 8) | this[e + 1]
        )
    }
    _.prototype.readUint32LE = _.prototype.readUInt32LE = function (e, t) {
        return (
            (e = e >>> 0),
            t || se(e, 4, this.length),
            (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                this[e + 3] * 16777216
        )
    }
    _.prototype.readUint32BE = _.prototype.readUInt32BE = function (e, t) {
        return (
            (e = e >>> 0),
            t || se(e, 4, this.length),
            this[e] * 16777216 +
                ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
        )
    }
    _.prototype.readBigUInt64LE = lt(function (e) {
        ;(e = e >>> 0), Vt(e, 'offset')
        let t = this[e],
            r = this[e + 7]
        ;(t === void 0 || r === void 0) && br(e, this.length - 8)
        let n =
                t +
                this[++e] * 2 ** 8 +
                this[++e] * 2 ** 16 +
                this[++e] * 2 ** 24,
            o =
                this[++e] +
                this[++e] * 2 ** 8 +
                this[++e] * 2 ** 16 +
                r * 2 ** 24
        return BigInt(n) + (BigInt(o) << BigInt(32))
    })
    _.prototype.readBigUInt64BE = lt(function (e) {
        ;(e = e >>> 0), Vt(e, 'offset')
        let t = this[e],
            r = this[e + 7]
        ;(t === void 0 || r === void 0) && br(e, this.length - 8)
        let n =
                t * 2 ** 24 +
                this[++e] * 2 ** 16 +
                this[++e] * 2 ** 8 +
                this[++e],
            o =
                this[++e] * 2 ** 24 +
                this[++e] * 2 ** 16 +
                this[++e] * 2 ** 8 +
                r
        return (BigInt(n) << BigInt(32)) + BigInt(o)
    })
    _.prototype.readIntLE = function (e, t, r) {
        ;(e = e >>> 0), (t = t >>> 0), r || se(e, t, this.length)
        let n = this[e],
            o = 1,
            i = 0
        for (; ++i < t && (o *= 256); ) n += this[e + i] * o
        return (o *= 128), n >= o && (n -= Math.pow(2, 8 * t)), n
    }
    _.prototype.readIntBE = function (e, t, r) {
        ;(e = e >>> 0), (t = t >>> 0), r || se(e, t, this.length)
        let n = t,
            o = 1,
            i = this[e + --n]
        for (; n > 0 && (o *= 256); ) i += this[e + --n] * o
        return (o *= 128), i >= o && (i -= Math.pow(2, 8 * t)), i
    }
    _.prototype.readInt8 = function (e, t) {
        return (
            (e = e >>> 0),
            t || se(e, 1, this.length),
            this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e]
        )
    }
    _.prototype.readInt16LE = function (e, t) {
        ;(e = e >>> 0), t || se(e, 2, this.length)
        let r = this[e] | (this[e + 1] << 8)
        return r & 32768 ? r | 4294901760 : r
    }
    _.prototype.readInt16BE = function (e, t) {
        ;(e = e >>> 0), t || se(e, 2, this.length)
        let r = this[e + 1] | (this[e] << 8)
        return r & 32768 ? r | 4294901760 : r
    }
    _.prototype.readInt32LE = function (e, t) {
        return (
            (e = e >>> 0),
            t || se(e, 4, this.length),
            this[e] |
                (this[e + 1] << 8) |
                (this[e + 2] << 16) |
                (this[e + 3] << 24)
        )
    }
    _.prototype.readInt32BE = function (e, t) {
        return (
            (e = e >>> 0),
            t || se(e, 4, this.length),
            (this[e] << 24) |
                (this[e + 1] << 16) |
                (this[e + 2] << 8) |
                this[e + 3]
        )
    }
    _.prototype.readBigInt64LE = lt(function (e) {
        ;(e = e >>> 0), Vt(e, 'offset')
        let t = this[e],
            r = this[e + 7]
        ;(t === void 0 || r === void 0) && br(e, this.length - 8)
        let n =
            this[e + 4] +
            this[e + 5] * 2 ** 8 +
            this[e + 6] * 2 ** 16 +
            (r << 24)
        return (
            (BigInt(n) << BigInt(32)) +
            BigInt(
                t +
                    this[++e] * 2 ** 8 +
                    this[++e] * 2 ** 16 +
                    this[++e] * 2 ** 24
            )
        )
    })
    _.prototype.readBigInt64BE = lt(function (e) {
        ;(e = e >>> 0), Vt(e, 'offset')
        let t = this[e],
            r = this[e + 7]
        ;(t === void 0 || r === void 0) && br(e, this.length - 8)
        let n = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e]
        return (
            (BigInt(n) << BigInt(32)) +
            BigInt(
                this[++e] * 2 ** 24 +
                    this[++e] * 2 ** 16 +
                    this[++e] * 2 ** 8 +
                    r
            )
        )
    })
    _.prototype.readFloatLE = function (e, t) {
        return (
            (e = e >>> 0),
            t || se(e, 4, this.length),
            qt.read(this, e, !0, 23, 4)
        )
    }
    _.prototype.readFloatBE = function (e, t) {
        return (
            (e = e >>> 0),
            t || se(e, 4, this.length),
            qt.read(this, e, !1, 23, 4)
        )
    }
    _.prototype.readDoubleLE = function (e, t) {
        return (
            (e = e >>> 0),
            t || se(e, 8, this.length),
            qt.read(this, e, !0, 52, 8)
        )
    }
    _.prototype.readDoubleBE = function (e, t) {
        return (
            (e = e >>> 0),
            t || se(e, 8, this.length),
            qt.read(this, e, !1, 52, 8)
        )
    }
    function Ce(e, t, r, n, o, i) {
        if (!_.isBuffer(e))
            throw new TypeError('"buffer" argument must be a Buffer instance')
        if (t > o || t < i)
            throw new RangeError('"value" argument is out of bounds')
        if (r + n > e.length) throw new RangeError('Index out of range')
    }
    _.prototype.writeUintLE = _.prototype.writeUIntLE = function (e, t, r, n) {
        if (((e = +e), (t = t >>> 0), (r = r >>> 0), !n)) {
            let s = Math.pow(2, 8 * r) - 1
            Ce(this, e, t, r, s, 0)
        }
        let o = 1,
            i = 0
        for (this[t] = e & 255; ++i < r && (o *= 256); )
            this[t + i] = (e / o) & 255
        return t + r
    }
    _.prototype.writeUintBE = _.prototype.writeUIntBE = function (e, t, r, n) {
        if (((e = +e), (t = t >>> 0), (r = r >>> 0), !n)) {
            let s = Math.pow(2, 8 * r) - 1
            Ce(this, e, t, r, s, 0)
        }
        let o = r - 1,
            i = 1
        for (this[t + o] = e & 255; --o >= 0 && (i *= 256); )
            this[t + o] = (e / i) & 255
        return t + r
    }
    _.prototype.writeUint8 = _.prototype.writeUInt8 = function (e, t, r) {
        return (
            (e = +e),
            (t = t >>> 0),
            r || Ce(this, e, t, 1, 255, 0),
            (this[t] = e & 255),
            t + 1
        )
    }
    _.prototype.writeUint16LE = _.prototype.writeUInt16LE = function (e, t, r) {
        return (
            (e = +e),
            (t = t >>> 0),
            r || Ce(this, e, t, 2, 65535, 0),
            (this[t] = e & 255),
            (this[t + 1] = e >>> 8),
            t + 2
        )
    }
    _.prototype.writeUint16BE = _.prototype.writeUInt16BE = function (e, t, r) {
        return (
            (e = +e),
            (t = t >>> 0),
            r || Ce(this, e, t, 2, 65535, 0),
            (this[t] = e >>> 8),
            (this[t + 1] = e & 255),
            t + 2
        )
    }
    _.prototype.writeUint32LE = _.prototype.writeUInt32LE = function (e, t, r) {
        return (
            (e = +e),
            (t = t >>> 0),
            r || Ce(this, e, t, 4, 4294967295, 0),
            (this[t + 3] = e >>> 24),
            (this[t + 2] = e >>> 16),
            (this[t + 1] = e >>> 8),
            (this[t] = e & 255),
            t + 4
        )
    }
    _.prototype.writeUint32BE = _.prototype.writeUInt32BE = function (e, t, r) {
        return (
            (e = +e),
            (t = t >>> 0),
            r || Ce(this, e, t, 4, 4294967295, 0),
            (this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = e & 255),
            t + 4
        )
    }
    function ms(e, t, r, n, o) {
        ws(t, n, o, e, r, 7)
        let i = Number(t & BigInt(4294967295))
        ;(e[r++] = i),
            (i = i >> 8),
            (e[r++] = i),
            (i = i >> 8),
            (e[r++] = i),
            (i = i >> 8),
            (e[r++] = i)
        let s = Number((t >> BigInt(32)) & BigInt(4294967295))
        return (
            (e[r++] = s),
            (s = s >> 8),
            (e[r++] = s),
            (s = s >> 8),
            (e[r++] = s),
            (s = s >> 8),
            (e[r++] = s),
            r
        )
    }
    function gs(e, t, r, n, o) {
        ws(t, n, o, e, r, 7)
        let i = Number(t & BigInt(4294967295))
        ;(e[r + 7] = i),
            (i = i >> 8),
            (e[r + 6] = i),
            (i = i >> 8),
            (e[r + 5] = i),
            (i = i >> 8),
            (e[r + 4] = i)
        let s = Number((t >> BigInt(32)) & BigInt(4294967295))
        return (
            (e[r + 3] = s),
            (s = s >> 8),
            (e[r + 2] = s),
            (s = s >> 8),
            (e[r + 1] = s),
            (s = s >> 8),
            (e[r] = s),
            r + 8
        )
    }
    _.prototype.writeBigUInt64LE = lt(function (e, t = 0) {
        return ms(this, e, t, BigInt(0), BigInt('0xffffffffffffffff'))
    })
    _.prototype.writeBigUInt64BE = lt(function (e, t = 0) {
        return gs(this, e, t, BigInt(0), BigInt('0xffffffffffffffff'))
    })
    _.prototype.writeIntLE = function (e, t, r, n) {
        if (((e = +e), (t = t >>> 0), !n)) {
            let a = Math.pow(2, 8 * r - 1)
            Ce(this, e, t, r, a - 1, -a)
        }
        let o = 0,
            i = 1,
            s = 0
        for (this[t] = e & 255; ++o < r && (i *= 256); )
            e < 0 && s === 0 && this[t + o - 1] !== 0 && (s = 1),
                (this[t + o] = (((e / i) >> 0) - s) & 255)
        return t + r
    }
    _.prototype.writeIntBE = function (e, t, r, n) {
        if (((e = +e), (t = t >>> 0), !n)) {
            let a = Math.pow(2, 8 * r - 1)
            Ce(this, e, t, r, a - 1, -a)
        }
        let o = r - 1,
            i = 1,
            s = 0
        for (this[t + o] = e & 255; --o >= 0 && (i *= 256); )
            e < 0 && s === 0 && this[t + o + 1] !== 0 && (s = 1),
                (this[t + o] = (((e / i) >> 0) - s) & 255)
        return t + r
    }
    _.prototype.writeInt8 = function (e, t, r) {
        return (
            (e = +e),
            (t = t >>> 0),
            r || Ce(this, e, t, 1, 127, -128),
            e < 0 && (e = 255 + e + 1),
            (this[t] = e & 255),
            t + 1
        )
    }
    _.prototype.writeInt16LE = function (e, t, r) {
        return (
            (e = +e),
            (t = t >>> 0),
            r || Ce(this, e, t, 2, 32767, -32768),
            (this[t] = e & 255),
            (this[t + 1] = e >>> 8),
            t + 2
        )
    }
    _.prototype.writeInt16BE = function (e, t, r) {
        return (
            (e = +e),
            (t = t >>> 0),
            r || Ce(this, e, t, 2, 32767, -32768),
            (this[t] = e >>> 8),
            (this[t + 1] = e & 255),
            t + 2
        )
    }
    _.prototype.writeInt32LE = function (e, t, r) {
        return (
            (e = +e),
            (t = t >>> 0),
            r || Ce(this, e, t, 4, 2147483647, -2147483648),
            (this[t] = e & 255),
            (this[t + 1] = e >>> 8),
            (this[t + 2] = e >>> 16),
            (this[t + 3] = e >>> 24),
            t + 4
        )
    }
    _.prototype.writeInt32BE = function (e, t, r) {
        return (
            (e = +e),
            (t = t >>> 0),
            r || Ce(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            (this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = e & 255),
            t + 4
        )
    }
    _.prototype.writeBigInt64LE = lt(function (e, t = 0) {
        return ms(
            this,
            e,
            t,
            -BigInt('0x8000000000000000'),
            BigInt('0x7fffffffffffffff')
        )
    })
    _.prototype.writeBigInt64BE = lt(function (e, t = 0) {
        return gs(
            this,
            e,
            t,
            -BigInt('0x8000000000000000'),
            BigInt('0x7fffffffffffffff')
        )
    })
    function ys(e, t, r, n, o, i) {
        if (r + n > e.length) throw new RangeError('Index out of range')
        if (r < 0) throw new RangeError('Index out of range')
    }
    function hs(e, t, r, n, o) {
        return (
            (t = +t),
            (r = r >>> 0),
            o || ys(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
            qt.write(e, t, r, n, 23, 4),
            r + 4
        )
    }
    _.prototype.writeFloatLE = function (e, t, r) {
        return hs(this, e, t, !0, r)
    }
    _.prototype.writeFloatBE = function (e, t, r) {
        return hs(this, e, t, !1, r)
    }
    function bs(e, t, r, n, o) {
        return (
            (t = +t),
            (r = r >>> 0),
            o || ys(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
            qt.write(e, t, r, n, 52, 8),
            r + 8
        )
    }
    _.prototype.writeDoubleLE = function (e, t, r) {
        return bs(this, e, t, !0, r)
    }
    _.prototype.writeDoubleBE = function (e, t, r) {
        return bs(this, e, t, !1, r)
    }
    _.prototype.copy = function (e, t, r, n) {
        if (!_.isBuffer(e)) throw new TypeError('argument should be a Buffer')
        if (
            (r || (r = 0),
            !n && n !== 0 && (n = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            n > 0 && n < r && (n = r),
            n === r || e.length === 0 || this.length === 0)
        )
            return 0
        if (t < 0) throw new RangeError('targetStart out of bounds')
        if (r < 0 || r >= this.length)
            throw new RangeError('Index out of range')
        if (n < 0) throw new RangeError('sourceEnd out of bounds')
        n > this.length && (n = this.length),
            e.length - t < n - r && (n = e.length - t + r)
        let o = n - r
        return (
            this === e && typeof Uint8Array.prototype.copyWithin == 'function'
                ? this.copyWithin(t, r, n)
                : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
            o
        )
    }
    _.prototype.fill = function (e, t, r, n) {
        if (typeof e == 'string') {
            if (
                (typeof t == 'string'
                    ? ((n = t), (t = 0), (r = this.length))
                    : typeof r == 'string' && ((n = r), (r = this.length)),
                n !== void 0 && typeof n != 'string')
            )
                throw new TypeError('encoding must be a string')
            if (typeof n == 'string' && !_.isEncoding(n))
                throw new TypeError('Unknown encoding: ' + n)
            if (e.length === 1) {
                let i = e.charCodeAt(0)
                ;((n === 'utf8' && i < 128) || n === 'latin1') && (e = i)
            }
        } else
            typeof e == 'number'
                ? (e = e & 255)
                : typeof e == 'boolean' && (e = Number(e))
        if (t < 0 || this.length < t || this.length < r)
            throw new RangeError('Out of range index')
        if (r <= t) return this
        ;(t = t >>> 0), (r = r === void 0 ? this.length : r >>> 0), e || (e = 0)
        let o
        if (typeof e == 'number') for (o = t; o < r; ++o) this[o] = e
        else {
            let i = _.isBuffer(e) ? e : _.from(e, n),
                s = i.length
            if (s === 0)
                throw new TypeError(
                    'The value "' + e + '" is invalid for argument "value"'
                )
            for (o = 0; o < r - t; ++o) this[o + t] = i[o % s]
        }
        return this
    }
    var $t = {}
    function Mo(e, t, r) {
        $t[e] = class extends r {
            constructor() {
                super(),
                    Object.defineProperty(this, 'message', {
                        value: t.apply(this, arguments),
                        writable: !0,
                        configurable: !0,
                    }),
                    (this.name = `${this.name} [${e}]`),
                    this.stack,
                    delete this.name
            }
            get code() {
                return e
            }
            set code(n) {
                Object.defineProperty(this, 'code', {
                    configurable: !0,
                    enumerable: !0,
                    value: n,
                    writable: !0,
                })
            }
            toString() {
                return `${this.name} [${e}]: ${this.message}`
            }
        }
    }
    Mo(
        'ERR_BUFFER_OUT_OF_BOUNDS',
        function (e) {
            return e
                ? `${e} is outside of buffer bounds`
                : 'Attempt to access memory outside buffer bounds'
        },
        RangeError
    )
    Mo(
        'ERR_INVALID_ARG_TYPE',
        function (e, t) {
            return `The "${e}" argument must be of type number. Received type ${typeof t}`
        },
        TypeError
    )
    Mo(
        'ERR_OUT_OF_RANGE',
        function (e, t, r) {
            let n = `The value of "${e}" is out of range.`,
                o = r
            return (
                Number.isInteger(r) && Math.abs(r) > 2 ** 32
                    ? (o = ss(String(r)))
                    : typeof r == 'bigint' &&
                      ((o = String(r)),
                      (r > BigInt(2) ** BigInt(32) ||
                          r < -(BigInt(2) ** BigInt(32))) &&
                          (o = ss(o)),
                      (o += 'n')),
                (n += ` It must be ${t}. Received ${o}`),
                n
            )
        },
        RangeError
    )
    function ss(e) {
        let t = '',
            r = e.length,
            n = e[0] === '-' ? 1 : 0
        for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`
        return `${e.slice(0, r)}${t}`
    }
    function bc(e, t, r) {
        Vt(t, 'offset'),
            (e[t] === void 0 || e[t + r] === void 0) &&
                br(t, e.length - (r + 1))
    }
    function ws(e, t, r, n, o, i) {
        if (e > r || e < t) {
            let s = typeof t == 'bigint' ? 'n' : '',
                a
            throw (
                (i > 3
                    ? t === 0 || t === BigInt(0)
                        ? (a = `>= 0${s} and < 2${s} ** ${(i + 1) * 8}${s}`)
                        : (a = `>= -(2${s} ** ${(i + 1) * 8 - 1}${s}) and < 2 ** ${(i + 1) * 8 - 1}${s}`)
                    : (a = `>= ${t}${s} and <= ${r}${s}`),
                new $t.ERR_OUT_OF_RANGE('value', a, e))
            )
        }
        bc(n, o, i)
    }
    function Vt(e, t) {
        if (typeof e != 'number')
            throw new $t.ERR_INVALID_ARG_TYPE(t, 'number', e)
    }
    function br(e, t, r) {
        throw Math.floor(e) !== e
            ? (Vt(e, r),
              new $t.ERR_OUT_OF_RANGE(r || 'offset', 'an integer', e))
            : t < 0
              ? new $t.ERR_BUFFER_OUT_OF_BOUNDS()
              : new $t.ERR_OUT_OF_RANGE(
                    r || 'offset',
                    `>= ${r ? 1 : 0} and <= ${t}`,
                    e
                )
    }
    var wc = /[^+/0-9A-Za-z-_]/g
    function xc(e) {
        if (
            ((e = e.split('=')[0]),
            (e = e.trim().replace(wc, '')),
            e.length < 2)
        )
            return ''
        for (; e.length % 4 !== 0; ) e = e + '='
        return e
    }
    function Ao(e, t) {
        t = t || 1 / 0
        let r,
            n = e.length,
            o = null,
            i = []
        for (let s = 0; s < n; ++s) {
            if (((r = e.charCodeAt(s)), r > 55295 && r < 57344)) {
                if (!o) {
                    if (r > 56319) {
                        ;(t -= 3) > -1 && i.push(239, 191, 189)
                        continue
                    } else if (s + 1 === n) {
                        ;(t -= 3) > -1 && i.push(239, 191, 189)
                        continue
                    }
                    o = r
                    continue
                }
                if (r < 56320) {
                    ;(t -= 3) > -1 && i.push(239, 191, 189), (o = r)
                    continue
                }
                r = (((o - 55296) << 10) | (r - 56320)) + 65536
            } else o && (t -= 3) > -1 && i.push(239, 191, 189)
            if (((o = null), r < 128)) {
                if ((t -= 1) < 0) break
                i.push(r)
            } else if (r < 2048) {
                if ((t -= 2) < 0) break
                i.push((r >> 6) | 192, (r & 63) | 128)
            } else if (r < 65536) {
                if ((t -= 3) < 0) break
                i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (r & 63) | 128)
            } else if (r < 1114112) {
                if ((t -= 4) < 0) break
                i.push(
                    (r >> 18) | 240,
                    ((r >> 12) & 63) | 128,
                    ((r >> 6) & 63) | 128,
                    (r & 63) | 128
                )
            } else throw new Error('Invalid code point')
        }
        return i
    }
    function Ec(e) {
        let t = []
        for (let r = 0; r < e.length; ++r) t.push(e.charCodeAt(r) & 255)
        return t
    }
    function Pc(e, t) {
        let r,
            n,
            o,
            i = []
        for (let s = 0; s < e.length && !((t -= 2) < 0); ++s)
            (r = e.charCodeAt(s)),
                (n = r >> 8),
                (o = r % 256),
                i.push(o),
                i.push(n)
        return i
    }
    function xs(e) {
        return _o.toByteArray(xc(e))
    }
    function an(e, t, r, n) {
        let o
        for (o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o)
            t[o + r] = e[o]
        return o
    }
    function Ke(e, t) {
        return (
            e instanceof t ||
            (e != null &&
                e.constructor != null &&
                e.constructor.name != null &&
                e.constructor.name === t.name)
        )
    }
    function Ro(e) {
        return e !== e
    }
    var vc = (function () {
        let e = '0123456789abcdef',
            t = new Array(256)
        for (let r = 0; r < 16; ++r) {
            let n = r * 16
            for (let o = 0; o < 16; ++o) t[n + o] = e[r] + e[o]
        }
        return t
    })()
    function lt(e) {
        return typeof BigInt > 'u' ? _c : e
    }
    function _c() {
        throw new Error('BigInt not supported')
    }
})
var w,
    m = yr(() => {
        'use strict'
        w = ve(Es())
    })
var $o = ee((K) => {
    'use strict'
    m()
    p()
    f()
    d()
    var te = (e, t) => () => (
            t || e((t = { exports: {} }).exports, t), t.exports
        ),
        ks = te((e, t) => {
            'use strict'
            t.exports = function () {
                if (
                    typeof Symbol != 'function' ||
                    typeof Object.getOwnPropertySymbols != 'function'
                )
                    return !1
                if (typeof Symbol.iterator == 'symbol') return !0
                var r = {},
                    n = Symbol('test'),
                    o = Object(n)
                if (
                    typeof n == 'string' ||
                    Object.prototype.toString.call(n) !== '[object Symbol]' ||
                    Object.prototype.toString.call(o) !== '[object Symbol]'
                )
                    return !1
                var i = 42
                r[n] = i
                for (n in r) return !1
                if (
                    (typeof Object.keys == 'function' &&
                        Object.keys(r).length !== 0) ||
                    (typeof Object.getOwnPropertyNames == 'function' &&
                        Object.getOwnPropertyNames(r).length !== 0)
                )
                    return !1
                var s = Object.getOwnPropertySymbols(r)
                if (
                    s.length !== 1 ||
                    s[0] !== n ||
                    !Object.prototype.propertyIsEnumerable.call(r, n)
                )
                    return !1
                if (typeof Object.getOwnPropertyDescriptor == 'function') {
                    var a = Object.getOwnPropertyDescriptor(r, n)
                    if (a.value !== i || a.enumerable !== !0) return !1
                }
                return !0
            }
        }),
        dn = te((e, t) => {
            'use strict'
            var r = ks()
            t.exports = function () {
                return r() && !!Symbol.toStringTag
            }
        }),
        Tc = te((e, t) => {
            'use strict'
            var r = typeof Symbol < 'u' && Symbol,
                n = ks()
            t.exports = function () {
                return typeof r != 'function' ||
                    typeof Symbol != 'function' ||
                    typeof r('foo') != 'symbol' ||
                    typeof Symbol('bar') != 'symbol'
                    ? !1
                    : n()
            }
        }),
        Ac = te((e, t) => {
            'use strict'
            var r = { foo: {} },
                n = Object
            t.exports = function () {
                return (
                    { __proto__: r }.foo === r.foo &&
                    !({ __proto__: null } instanceof n)
                )
            }
        }),
        Cc = te((e, t) => {
            'use strict'
            var r = 'Function.prototype.bind called on incompatible ',
                n = Object.prototype.toString,
                o = Math.max,
                i = '[object Function]',
                s = function (l, c) {
                    for (var g = [], y = 0; y < l.length; y += 1) g[y] = l[y]
                    for (var P = 0; P < c.length; P += 1) g[P + l.length] = c[P]
                    return g
                },
                a = function (l, c) {
                    for (
                        var g = [], y = c || 0, P = 0;
                        y < l.length;
                        y += 1, P += 1
                    )
                        g[P] = l[y]
                    return g
                },
                u = function (l, c) {
                    for (var g = '', y = 0; y < l.length; y += 1)
                        (g += l[y]), y + 1 < l.length && (g += c)
                    return g
                }
            t.exports = function (l) {
                var c = this
                if (typeof c != 'function' || n.apply(c) !== i)
                    throw new TypeError(r + c)
                for (
                    var g = a(arguments, 1),
                        y,
                        P = function () {
                            if (this instanceof y) {
                                var O = c.apply(this, s(g, arguments))
                                return Object(O) === O ? O : this
                            }
                            return c.apply(l, s(g, arguments))
                        },
                        v = o(0, c.length - g.length),
                        E = [],
                        T = 0;
                    T < v;
                    T++
                )
                    E[T] = '$' + T
                if (
                    ((y = b(
                        'binder',
                        'return function (' +
                            u(E, ',') +
                            '){ return binder.apply(this,arguments); }'
                    )(P)),
                    c.prototype)
                ) {
                    var M = function () {}
                    ;(M.prototype = c.prototype),
                        (y.prototype = new M()),
                        (M.prototype = null)
                }
                return y
            }
        }),
        No = te((e, t) => {
            'use strict'
            var r = Cc()
            t.exports = b.prototype.bind || r
        }),
        Sc = te((e, t) => {
            'use strict'
            var r = No()
            t.exports = r.call(b.call, Object.prototype.hasOwnProperty)
        }),
        Lo = te((e, t) => {
            'use strict'
            var r,
                n = SyntaxError,
                o = b,
                i = TypeError,
                s = function (J) {
                    try {
                        return o(
                            '"use strict"; return (' + J + ').constructor;'
                        )()
                    } catch (Q) {}
                },
                a = Object.getOwnPropertyDescriptor
            if (a)
                try {
                    a({}, '')
                } catch (J) {
                    a = null
                }
            var u = function () {
                    throw new i()
                },
                l = a
                    ? (function () {
                          try {
                              return arguments.callee, u
                          } catch (J) {
                              try {
                                  return a(arguments, 'callee').get
                              } catch (Q) {
                                  return u
                              }
                          }
                      })()
                    : u,
                c = Tc()(),
                g = Ac()(),
                y =
                    Object.getPrototypeOf ||
                    (g
                        ? function (J) {
                              return J.__proto__
                          }
                        : null),
                P = {},
                v = typeof Uint8Array > 'u' || !y ? r : y(Uint8Array),
                E = {
                    '%AggregateError%':
                        typeof AggregateError > 'u' ? r : AggregateError,
                    '%Array%': Array,
                    '%ArrayBuffer%': typeof ArrayBuffer > 'u' ? r : ArrayBuffer,
                    '%ArrayIteratorPrototype%':
                        c && y ? y([][Symbol.iterator]()) : r,
                    '%AsyncFromSyncIteratorPrototype%': r,
                    '%AsyncFunction%': P,
                    '%AsyncGenerator%': P,
                    '%AsyncGeneratorFunction%': P,
                    '%AsyncIteratorPrototype%': P,
                    '%Atomics%': typeof Atomics > 'u' ? r : Atomics,
                    '%BigInt%': typeof BigInt > 'u' ? r : BigInt,
                    '%BigInt64Array%':
                        typeof BigInt64Array > 'u' ? r : BigInt64Array,
                    '%BigUint64Array%':
                        typeof BigUint64Array > 'u' ? r : BigUint64Array,
                    '%Boolean%': Boolean,
                    '%DataView%': typeof DataView > 'u' ? r : DataView,
                    '%Date%': Date,
                    '%decodeURI%': decodeURI,
                    '%decodeURIComponent%': decodeURIComponent,
                    '%encodeURI%': encodeURI,
                    '%encodeURIComponent%': encodeURIComponent,
                    '%Error%': Error,
                    '%eval%': void 0,
                    '%EvalError%': EvalError,
                    '%Float32Array%':
                        typeof Float32Array > 'u' ? r : Float32Array,
                    '%Float64Array%':
                        typeof Float64Array > 'u' ? r : Float64Array,
                    '%FinalizationRegistry%':
                        typeof FinalizationRegistry > 'u'
                            ? r
                            : FinalizationRegistry,
                    '%Function%': o,
                    '%GeneratorFunction%': P,
                    '%Int8Array%': typeof Int8Array > 'u' ? r : Int8Array,
                    '%Int16Array%': typeof Int16Array > 'u' ? r : Int16Array,
                    '%Int32Array%': typeof Int32Array > 'u' ? r : Int32Array,
                    '%isFinite%': isFinite,
                    '%isNaN%': isNaN,
                    '%IteratorPrototype%':
                        c && y ? y(y([][Symbol.iterator]())) : r,
                    '%JSON%': typeof JSON == 'object' ? JSON : r,
                    '%Map%': typeof Map > 'u' ? r : Map,
                    '%MapIteratorPrototype%':
                        typeof Map > 'u' || !c || !y
                            ? r
                            : y(new Map()[Symbol.iterator]()),
                    '%Math%': Math,
                    '%Number%': Number,
                    '%Object%': Object,
                    '%parseFloat%': parseFloat,
                    '%parseInt%': parseInt,
                    '%Promise%': typeof Promise > 'u' ? r : Promise,
                    '%Proxy%': typeof Proxy > 'u' ? r : Proxy,
                    '%RangeError%': RangeError,
                    '%ReferenceError%': ReferenceError,
                    '%Reflect%': typeof Reflect > 'u' ? r : Reflect,
                    '%RegExp%': RegExp,
                    '%Set%': typeof Set > 'u' ? r : Set,
                    '%SetIteratorPrototype%':
                        typeof Set > 'u' || !c || !y
                            ? r
                            : y(new Set()[Symbol.iterator]()),
                    '%SharedArrayBuffer%':
                        typeof SharedArrayBuffer > 'u' ? r : SharedArrayBuffer,
                    '%String%': String,
                    '%StringIteratorPrototype%':
                        c && y ? y(''[Symbol.iterator]()) : r,
                    '%Symbol%': c ? Symbol : r,
                    '%SyntaxError%': n,
                    '%ThrowTypeError%': l,
                    '%TypedArray%': v,
                    '%TypeError%': i,
                    '%Uint8Array%': typeof Uint8Array > 'u' ? r : Uint8Array,
                    '%Uint8ClampedArray%':
                        typeof Uint8ClampedArray > 'u' ? r : Uint8ClampedArray,
                    '%Uint16Array%': typeof Uint16Array > 'u' ? r : Uint16Array,
                    '%Uint32Array%': typeof Uint32Array > 'u' ? r : Uint32Array,
                    '%URIError%': URIError,
                    '%WeakMap%': typeof WeakMap > 'u' ? r : WeakMap,
                    '%WeakRef%': typeof x > 'u' ? r : x,
                    '%WeakSet%': typeof WeakSet > 'u' ? r : WeakSet,
                }
            if (y)
                try {
                    null.error
                } catch (J) {
                    ;(T = y(y(J))), (E['%Error.prototype%'] = T)
                }
            var T,
                M = function J(Q) {
                    var F
                    if (Q === '%AsyncFunction%') F = s('async function () {}')
                    else if (Q === '%GeneratorFunction%')
                        F = s('function* () {}')
                    else if (Q === '%AsyncGeneratorFunction%')
                        F = s('async function* () {}')
                    else if (Q === '%AsyncGenerator%') {
                        var fe = J('%AsyncGeneratorFunction%')
                        fe && (F = fe.prototype)
                    } else if (Q === '%AsyncIteratorPrototype%') {
                        var de = J('%AsyncGenerator%')
                        de && y && (F = y(de.prototype))
                    }
                    return (E[Q] = F), F
                },
                O = {
                    '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
                    '%ArrayPrototype%': ['Array', 'prototype'],
                    '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
                    '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
                    '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
                    '%ArrayProto_values%': ['Array', 'prototype', 'values'],
                    '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
                    '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
                    '%AsyncGeneratorPrototype%': [
                        'AsyncGeneratorFunction',
                        'prototype',
                        'prototype',
                    ],
                    '%BooleanPrototype%': ['Boolean', 'prototype'],
                    '%DataViewPrototype%': ['DataView', 'prototype'],
                    '%DatePrototype%': ['Date', 'prototype'],
                    '%ErrorPrototype%': ['Error', 'prototype'],
                    '%EvalErrorPrototype%': ['EvalError', 'prototype'],
                    '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
                    '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
                    '%FunctionPrototype%': ['Function', 'prototype'],
                    '%Generator%': ['GeneratorFunction', 'prototype'],
                    '%GeneratorPrototype%': [
                        'GeneratorFunction',
                        'prototype',
                        'prototype',
                    ],
                    '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
                    '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
                    '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
                    '%JSONParse%': ['JSON', 'parse'],
                    '%JSONStringify%': ['JSON', 'stringify'],
                    '%MapPrototype%': ['Map', 'prototype'],
                    '%NumberPrototype%': ['Number', 'prototype'],
                    '%ObjectPrototype%': ['Object', 'prototype'],
                    '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
                    '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
                    '%PromisePrototype%': ['Promise', 'prototype'],
                    '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
                    '%Promise_all%': ['Promise', 'all'],
                    '%Promise_reject%': ['Promise', 'reject'],
                    '%Promise_resolve%': ['Promise', 'resolve'],
                    '%RangeErrorPrototype%': ['RangeError', 'prototype'],
                    '%ReferenceErrorPrototype%': [
                        'ReferenceError',
                        'prototype',
                    ],
                    '%RegExpPrototype%': ['RegExp', 'prototype'],
                    '%SetPrototype%': ['Set', 'prototype'],
                    '%SharedArrayBufferPrototype%': [
                        'SharedArrayBuffer',
                        'prototype',
                    ],
                    '%StringPrototype%': ['String', 'prototype'],
                    '%SymbolPrototype%': ['Symbol', 'prototype'],
                    '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
                    '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
                    '%TypeErrorPrototype%': ['TypeError', 'prototype'],
                    '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
                    '%Uint8ClampedArrayPrototype%': [
                        'Uint8ClampedArray',
                        'prototype',
                    ],
                    '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
                    '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
                    '%URIErrorPrototype%': ['URIError', 'prototype'],
                    '%WeakMapPrototype%': ['WeakMap', 'prototype'],
                    '%WeakSetPrototype%': ['WeakSet', 'prototype'],
                },
                S = No(),
                R = Sc(),
                $ = S.call(b.call, Array.prototype.concat),
                q = S.call(b.apply, Array.prototype.splice),
                Ne = S.call(b.call, String.prototype.replace),
                W = S.call(b.call, String.prototype.slice),
                re = S.call(b.call, RegExp.prototype.exec),
                Oe =
                    /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                ne = /\\(\\)?/g,
                Ie = function (J) {
                    var Q = W(J, 0, 1),
                        F = W(J, -1)
                    if (Q === '%' && F !== '%')
                        throw new n(
                            'invalid intrinsic syntax, expected closing `%`'
                        )
                    if (F === '%' && Q !== '%')
                        throw new n(
                            'invalid intrinsic syntax, expected opening `%`'
                        )
                    var fe = []
                    return (
                        Ne(J, Oe, function (de, at, oe, vt) {
                            fe[fe.length] = oe ? Ne(vt, ne, '$1') : at || de
                        }),
                        fe
                    )
                },
                st = function (J, Q) {
                    var F = J,
                        fe
                    if (
                        (R(O, F) && ((fe = O[F]), (F = '%' + fe[0] + '%')),
                        R(E, F))
                    ) {
                        var de = E[F]
                        if ((de === P && (de = M(F)), typeof de > 'u' && !Q))
                            throw new i(
                                'intrinsic ' +
                                    J +
                                    ' exists, but is not available. Please file an issue!'
                            )
                        return { alias: fe, name: F, value: de }
                    }
                    throw new n('intrinsic ' + J + ' does not exist!')
                }
            t.exports = function (J, Q) {
                if (typeof J != 'string' || J.length === 0)
                    throw new i('intrinsic name must be a non-empty string')
                if (arguments.length > 1 && typeof Q != 'boolean')
                    throw new i('"allowMissing" argument must be a boolean')
                if (re(/^%?[^%]*%?$/, J) === null)
                    throw new n(
                        '`%` may not be present anywhere but at the beginning and end of the intrinsic name'
                    )
                var F = Ie(J),
                    fe = F.length > 0 ? F[0] : '',
                    de = st('%' + fe + '%', Q),
                    at = de.name,
                    oe = de.value,
                    vt = !1,
                    ut = de.alias
                ut && ((fe = ut[0]), q(F, $([0, 1], ut)))
                for (var _t = 1, Ze = !0; _t < F.length; _t += 1) {
                    var Pe = F[_t],
                        Tt = W(Pe, 0, 1),
                        jt = W(Pe, -1)
                    if (
                        (Tt === '"' ||
                            Tt === "'" ||
                            Tt === '`' ||
                            jt === '"' ||
                            jt === "'" ||
                            jt === '`') &&
                        Tt !== jt
                    )
                        throw new n(
                            'property names with quotes must have matching quotes'
                        )
                    if (
                        ((Pe === 'constructor' || !Ze) && (vt = !0),
                        (fe += '.' + Pe),
                        (at = '%' + fe + '%'),
                        R(E, at))
                    )
                        oe = E[at]
                    else if (oe != null) {
                        if (!(Pe in oe)) {
                            if (!Q)
                                throw new i(
                                    'base intrinsic for ' +
                                        J +
                                        ' exists, but the property is not available.'
                                )
                            return
                        }
                        if (a && _t + 1 >= F.length) {
                            var Ut = a(oe, Pe)
                            ;(Ze = !!Ut),
                                Ze &&
                                'get' in Ut &&
                                !('originalValue' in Ut.get)
                                    ? (oe = Ut.get)
                                    : (oe = oe[Pe])
                        } else (Ze = R(oe, Pe)), (oe = oe[Pe])
                        Ze && !vt && (E[at] = oe)
                    }
                }
                return oe
            }
        }),
        Mc = te((e, t) => {
            'use strict'
            var r = No(),
                n = Lo(),
                o = n('%Function.prototype.apply%'),
                i = n('%Function.prototype.call%'),
                s = n('%Reflect.apply%', !0) || r.call(i, o),
                a = n('%Object.getOwnPropertyDescriptor%', !0),
                u = n('%Object.defineProperty%', !0),
                l = n('%Math.max%')
            if (u)
                try {
                    u({}, 'a', { value: 1 })
                } catch (g) {
                    u = null
                }
            t.exports = function (g) {
                var y = s(r, i, arguments)
                if (a && u) {
                    var P = a(y, 'length')
                    P.configurable &&
                        u(y, 'length', {
                            value: 1 + l(0, g.length - (arguments.length - 1)),
                        })
                }
                return y
            }
            var c = function () {
                return s(r, o, arguments)
            }
            u ? u(t.exports, 'apply', { value: c }) : (t.exports.apply = c)
        }),
        Bo = te((e, t) => {
            'use strict'
            var r = Lo(),
                n = Mc(),
                o = n(r('String.prototype.indexOf'))
            t.exports = function (i, s) {
                var a = r(i, !!s)
                return typeof a == 'function' && o(i, '.prototype.') > -1
                    ? n(a)
                    : a
            }
        }),
        Rc = te((e, t) => {
            'use strict'
            var r = dn()(),
                n = Bo(),
                o = n('Object.prototype.toString'),
                i = function (u) {
                    return r &&
                        u &&
                        typeof u == 'object' &&
                        Symbol.toStringTag in u
                        ? !1
                        : o(u) === '[object Arguments]'
                },
                s = function (u) {
                    return i(u)
                        ? !0
                        : u !== null &&
                              typeof u == 'object' &&
                              typeof u.length == 'number' &&
                              u.length >= 0 &&
                              o(u) !== '[object Array]' &&
                              o(u.callee) === '[object Function]'
                },
                a = (function () {
                    return i(arguments)
                })()
            ;(i.isLegacyArguments = s), (t.exports = a ? i : s)
        }),
        Oc = te((e, t) => {
            'use strict'
            var r = Object.prototype.toString,
                n = b.prototype.toString,
                o = /^\s*(?:function)?\*/,
                i = dn()(),
                s = Object.getPrototypeOf,
                a = function () {
                    if (!i) return !1
                    try {
                        return b('return function*() {}')()
                    } catch (l) {}
                },
                u
            t.exports = function (l) {
                if (typeof l != 'function') return !1
                if (o.test(n.call(l))) return !0
                if (!i) {
                    var c = r.call(l)
                    return c === '[object GeneratorFunction]'
                }
                if (!s) return !1
                if (typeof u > 'u') {
                    var g = a()
                    u = g ? s(g) : !1
                }
                return s(l) === u
            }
        }),
        Ic = te((e, t) => {
            'use strict'
            var r = b.prototype.toString,
                n =
                    typeof Reflect == 'object' &&
                    Reflect !== null &&
                    Reflect.apply,
                o,
                i
            if (
                typeof n == 'function' &&
                typeof Object.defineProperty == 'function'
            )
                try {
                    ;(o = Object.defineProperty({}, 'length', {
                        get: function () {
                            throw i
                        },
                    })),
                        (i = {}),
                        n(
                            function () {
                                throw 42
                            },
                            null,
                            o
                        )
                } catch (R) {
                    R !== i && (n = null)
                }
            else n = null
            var s = /^\s*class\b/,
                a = function (R) {
                    try {
                        var $ = r.call(R)
                        return s.test($)
                    } catch (q) {
                        return !1
                    }
                },
                u = function (R) {
                    try {
                        return a(R) ? !1 : (r.call(R), !0)
                    } catch ($) {
                        return !1
                    }
                },
                l = Object.prototype.toString,
                c = '[object Object]',
                g = '[object Function]',
                y = '[object GeneratorFunction]',
                P = '[object HTMLAllCollection]',
                v = '[object HTML document.all class]',
                E = '[object HTMLCollection]',
                T = typeof Symbol == 'function' && !!Symbol.toStringTag,
                M = !(0 in [,]),
                O = function () {
                    return !1
                }
            typeof document == 'object' &&
                ((S = document.all),
                l.call(S) === l.call(document.all) &&
                    (O = function (R) {
                        if (
                            (M || !R) &&
                            (typeof R > 'u' || typeof R == 'object')
                        )
                            try {
                                var $ = l.call(R)
                                return (
                                    ($ === P ||
                                        $ === v ||
                                        $ === E ||
                                        $ === c) &&
                                    R('') == null
                                )
                            } catch (q) {}
                        return !1
                    }))
            var S
            t.exports = n
                ? function (R) {
                      if (O(R)) return !0
                      if (
                          !R ||
                          (typeof R != 'function' && typeof R != 'object')
                      )
                          return !1
                      try {
                          n(R, null, o)
                      } catch ($) {
                          if ($ !== i) return !1
                      }
                      return !a(R) && u(R)
                  }
                : function (R) {
                      if (O(R)) return !0
                      if (
                          !R ||
                          (typeof R != 'function' && typeof R != 'object')
                      )
                          return !1
                      if (T) return u(R)
                      if (a(R)) return !1
                      var $ = l.call(R)
                      return $ !== g && $ !== y && !/^\[object HTML/.test($)
                          ? !1
                          : u(R)
                  }
        }),
        Fs = te((e, t) => {
            'use strict'
            var r = Ic(),
                n = Object.prototype.toString,
                o = Object.prototype.hasOwnProperty,
                i = function (l, c, g) {
                    for (var y = 0, P = l.length; y < P; y++)
                        o.call(l, y) &&
                            (g == null ? c(l[y], y, l) : c.call(g, l[y], y, l))
                },
                s = function (l, c, g) {
                    for (var y = 0, P = l.length; y < P; y++)
                        g == null
                            ? c(l.charAt(y), y, l)
                            : c.call(g, l.charAt(y), y, l)
                },
                a = function (l, c, g) {
                    for (var y in l)
                        o.call(l, y) &&
                            (g == null ? c(l[y], y, l) : c.call(g, l[y], y, l))
                },
                u = function (l, c, g) {
                    if (!r(c))
                        throw new TypeError('iterator must be a function')
                    var y
                    arguments.length >= 3 && (y = g),
                        n.call(l) === '[object Array]'
                            ? i(l, c, y)
                            : typeof l == 'string'
                              ? s(l, c, y)
                              : a(l, c, y)
                }
            t.exports = u
        }),
        Ds = te((e, t) => {
            'use strict'
            var r = [
                    'BigInt64Array',
                    'BigUint64Array',
                    'Float32Array',
                    'Float64Array',
                    'Int16Array',
                    'Int32Array',
                    'Int8Array',
                    'Uint16Array',
                    'Uint32Array',
                    'Uint8Array',
                    'Uint8ClampedArray',
                ],
                n = typeof globalThis > 'u' ? global : globalThis
            t.exports = function () {
                for (var o = [], i = 0; i < r.length; i++)
                    typeof n[r[i]] == 'function' && (o[o.length] = r[i])
                return o
            }
        }),
        Ns = te((e, t) => {
            'use strict'
            var r = Lo(),
                n = r('%Object.getOwnPropertyDescriptor%', !0)
            if (n)
                try {
                    n([], 'length')
                } catch (o) {
                    n = null
                }
            t.exports = n
        }),
        Ls = te((e, t) => {
            'use strict'
            var r = Fs(),
                n = Ds(),
                o = Bo(),
                i = o('Object.prototype.toString'),
                s = dn()(),
                a = Ns(),
                u = typeof globalThis > 'u' ? global : globalThis,
                l = n(),
                c =
                    o('Array.prototype.indexOf', !0) ||
                    function (E, T) {
                        for (var M = 0; M < E.length; M += 1)
                            if (E[M] === T) return M
                        return -1
                    },
                g = o('String.prototype.slice'),
                y = {},
                P = Object.getPrototypeOf
            s &&
                a &&
                P &&
                r(l, function (E) {
                    var T = new u[E]()
                    if (Symbol.toStringTag in T) {
                        var M = P(T),
                            O = a(M, Symbol.toStringTag)
                        if (!O) {
                            var S = P(M)
                            O = a(S, Symbol.toStringTag)
                        }
                        y[E] = O.get
                    }
                })
            var v = function (E) {
                var T = !1
                return (
                    r(y, function (M, O) {
                        if (!T)
                            try {
                                T = M.call(E) === O
                            } catch (S) {}
                    }),
                    T
                )
            }
            t.exports = function (E) {
                if (!E || typeof E != 'object') return !1
                if (!s || !(Symbol.toStringTag in E)) {
                    var T = g(i(E), 8, -1)
                    return c(l, T) > -1
                }
                return a ? v(E) : !1
            }
        }),
        kc = te((e, t) => {
            'use strict'
            var r = Fs(),
                n = Ds(),
                o = Bo(),
                i = Ns(),
                s = o('Object.prototype.toString'),
                a = dn()(),
                u = typeof globalThis > 'u' ? global : globalThis,
                l = n(),
                c = o('String.prototype.slice'),
                g = {},
                y = Object.getPrototypeOf
            a &&
                i &&
                y &&
                r(l, function (E) {
                    if (typeof u[E] == 'function') {
                        var T = new u[E]()
                        if (Symbol.toStringTag in T) {
                            var M = y(T),
                                O = i(M, Symbol.toStringTag)
                            if (!O) {
                                var S = y(M)
                                O = i(S, Symbol.toStringTag)
                            }
                            g[E] = O.get
                        }
                    }
                })
            var P = function (E) {
                    var T = !1
                    return (
                        r(g, function (M, O) {
                            if (!T)
                                try {
                                    var S = M.call(E)
                                    S === O && (T = S)
                                } catch (R) {}
                        }),
                        T
                    )
                },
                v = Ls()
            t.exports = function (E) {
                return v(E)
                    ? !a || !(Symbol.toStringTag in E)
                        ? c(s(E), 8, -1)
                        : P(E)
                    : !1
            }
        }),
        Fc = te((e) => {
            'use strict'
            var t = Rc(),
                r = Oc(),
                n = kc(),
                o = Ls()
            function i(C) {
                return C.call.bind(C)
            }
            var s = typeof BigInt < 'u',
                a = typeof Symbol < 'u',
                u = i(Object.prototype.toString),
                l = i(Number.prototype.valueOf),
                c = i(String.prototype.valueOf),
                g = i(Boolean.prototype.valueOf)
            s && (y = i(BigInt.prototype.valueOf))
            var y
            a && (P = i(Symbol.prototype.valueOf))
            var P
            function v(C, Ql) {
                if (typeof C != 'object') return !1
                try {
                    return Ql(C), !0
                } catch (Ay) {
                    return !1
                }
            }
            ;(e.isArgumentsObject = t),
                (e.isGeneratorFunction = r),
                (e.isTypedArray = o)
            function E(C) {
                return (
                    (typeof Promise < 'u' && C instanceof Promise) ||
                    (C !== null &&
                        typeof C == 'object' &&
                        typeof C.then == 'function' &&
                        typeof C.catch == 'function')
                )
            }
            e.isPromise = E
            function T(C) {
                return typeof ArrayBuffer < 'u' && ArrayBuffer.isView
                    ? ArrayBuffer.isView(C)
                    : o(C) || _t(C)
            }
            e.isArrayBufferView = T
            function M(C) {
                return n(C) === 'Uint8Array'
            }
            e.isUint8Array = M
            function O(C) {
                return n(C) === 'Uint8ClampedArray'
            }
            e.isUint8ClampedArray = O
            function S(C) {
                return n(C) === 'Uint16Array'
            }
            e.isUint16Array = S
            function R(C) {
                return n(C) === 'Uint32Array'
            }
            e.isUint32Array = R
            function $(C) {
                return n(C) === 'Int8Array'
            }
            e.isInt8Array = $
            function q(C) {
                return n(C) === 'Int16Array'
            }
            e.isInt16Array = q
            function Ne(C) {
                return n(C) === 'Int32Array'
            }
            e.isInt32Array = Ne
            function W(C) {
                return n(C) === 'Float32Array'
            }
            e.isFloat32Array = W
            function re(C) {
                return n(C) === 'Float64Array'
            }
            e.isFloat64Array = re
            function Oe(C) {
                return n(C) === 'BigInt64Array'
            }
            e.isBigInt64Array = Oe
            function ne(C) {
                return n(C) === 'BigUint64Array'
            }
            e.isBigUint64Array = ne
            function Ie(C) {
                return u(C) === '[object Map]'
            }
            Ie.working = typeof Map < 'u' && Ie(new Map())
            function st(C) {
                return typeof Map > 'u'
                    ? !1
                    : Ie.working
                      ? Ie(C)
                      : C instanceof Map
            }
            e.isMap = st
            function J(C) {
                return u(C) === '[object Set]'
            }
            J.working = typeof Set < 'u' && J(new Set())
            function Q(C) {
                return typeof Set > 'u'
                    ? !1
                    : J.working
                      ? J(C)
                      : C instanceof Set
            }
            e.isSet = Q
            function F(C) {
                return u(C) === '[object WeakMap]'
            }
            F.working = typeof WeakMap < 'u' && F(new WeakMap())
            function fe(C) {
                return typeof WeakMap > 'u'
                    ? !1
                    : F.working
                      ? F(C)
                      : C instanceof WeakMap
            }
            e.isWeakMap = fe
            function de(C) {
                return u(C) === '[object WeakSet]'
            }
            de.working = typeof WeakSet < 'u' && de(new WeakSet())
            function at(C) {
                return de(C)
            }
            e.isWeakSet = at
            function oe(C) {
                return u(C) === '[object ArrayBuffer]'
            }
            oe.working = typeof ArrayBuffer < 'u' && oe(new ArrayBuffer())
            function vt(C) {
                return typeof ArrayBuffer > 'u'
                    ? !1
                    : oe.working
                      ? oe(C)
                      : C instanceof ArrayBuffer
            }
            e.isArrayBuffer = vt
            function ut(C) {
                return u(C) === '[object DataView]'
            }
            ut.working =
                typeof ArrayBuffer < 'u' &&
                typeof DataView < 'u' &&
                ut(new DataView(new ArrayBuffer(1), 0, 1))
            function _t(C) {
                return typeof DataView > 'u'
                    ? !1
                    : ut.working
                      ? ut(C)
                      : C instanceof DataView
            }
            e.isDataView = _t
            var Ze = typeof SharedArrayBuffer < 'u' ? SharedArrayBuffer : void 0
            function Pe(C) {
                return u(C) === '[object SharedArrayBuffer]'
            }
            function Tt(C) {
                return typeof Ze > 'u'
                    ? !1
                    : (typeof Pe.working > 'u' && (Pe.working = Pe(new Ze())),
                      Pe.working ? Pe(C) : C instanceof Ze)
            }
            e.isSharedArrayBuffer = Tt
            function jt(C) {
                return u(C) === '[object AsyncFunction]'
            }
            e.isAsyncFunction = jt
            function Ut(C) {
                return u(C) === '[object Map Iterator]'
            }
            e.isMapIterator = Ut
            function Ul(C) {
                return u(C) === '[object Set Iterator]'
            }
            e.isSetIterator = Ul
            function $l(C) {
                return u(C) === '[object Generator]'
            }
            e.isGeneratorObject = $l
            function ql(C) {
                return u(C) === '[object WebAssembly.Module]'
            }
            e.isWebAssemblyCompiledModule = ql
            function Zi(C) {
                return v(C, l)
            }
            e.isNumberObject = Zi
            function Xi(C) {
                return v(C, c)
            }
            e.isStringObject = Xi
            function es(C) {
                return v(C, g)
            }
            e.isBooleanObject = es
            function ts(C) {
                return s && v(C, y)
            }
            e.isBigIntObject = ts
            function rs(C) {
                return a && v(C, P)
            }
            e.isSymbolObject = rs
            function Vl(C) {
                return Zi(C) || Xi(C) || es(C) || ts(C) || rs(C)
            }
            e.isBoxedPrimitive = Vl
            function Kl(C) {
                return typeof Uint8Array < 'u' && (vt(C) || Tt(C))
            }
            ;(e.isAnyArrayBuffer = Kl),
                ['isProxy', 'isExternal', 'isModuleNamespaceObject'].forEach(
                    function (C) {
                        Object.defineProperty(e, C, {
                            enumerable: !1,
                            value: function () {
                                throw new Error(
                                    C + ' is not supported in userland'
                                )
                            },
                        })
                    }
                )
        }),
        Dc = te((e, t) => {
            t.exports = function (r) {
                return r instanceof w.Buffer
            }
        }),
        Nc = te((e, t) => {
            typeof Object.create == 'function'
                ? (t.exports = function (r, n) {
                      n &&
                          ((r.super_ = n),
                          (r.prototype = Object.create(n.prototype, {
                              constructor: {
                                  value: r,
                                  enumerable: !1,
                                  writable: !0,
                                  configurable: !0,
                              },
                          })))
                  })
                : (t.exports = function (r, n) {
                      if (n) {
                          r.super_ = n
                          var o = function () {}
                          ;(o.prototype = n.prototype),
                              (r.prototype = new o()),
                              (r.prototype.constructor = r)
                      }
                  })
        }),
        Bs =
            Object.getOwnPropertyDescriptors ||
            function (e) {
                for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++)
                    r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n])
                return r
            },
        Lc = /%[sdj%]/g
    K.format = function (e) {
        if (!gn(e)) {
            for (var t = [], r = 0; r < arguments.length; r++)
                t.push(pt(arguments[r]))
            return t.join(' ')
        }
        for (
            var r = 1,
                n = arguments,
                o = n.length,
                i = String(e).replace(Lc, function (u) {
                    if (u === '%%') return '%'
                    if (r >= o) return u
                    switch (u) {
                        case '%s':
                            return String(n[r++])
                        case '%d':
                            return Number(n[r++])
                        case '%j':
                            try {
                                return JSON.stringify(n[r++])
                            } catch (l) {
                                return '[Circular]'
                            }
                        default:
                            return u
                    }
                }),
                s = n[r];
            r < o;
            s = n[++r]
        )
            mn(s) || !Qt(s) ? (i += ' ' + s) : (i += ' ' + pt(s))
        return i
    }
    K.deprecate = function (e, t) {
        if (typeof h < 'u' && h.noDeprecation === !0) return e
        if (typeof h > 'u')
            return function () {
                return K.deprecate(e, t).apply(this, arguments)
            }
        var r = !1
        function n() {
            if (!r) {
                if (h.throwDeprecation) throw new Error(t)
                h.traceDeprecation ? console.trace(t) : console.error(t),
                    (r = !0)
            }
            return e.apply(this, arguments)
        }
        return n
    }
    var un = {},
        js = /^$/
    h.env.NODE_DEBUG &&
        ((ln = h.env.NODE_DEBUG),
        (ln = ln
            .replace(/[|\\{}()[\]^$+?.]/g, '\\$&')
            .replace(/\*/g, '.*')
            .replace(/,/g, '$|^')
            .toUpperCase()),
        (js = new RegExp('^' + ln + '$', 'i')))
    var ln
    K.debuglog = function (e) {
        if (((e = e.toUpperCase()), !un[e]))
            if (js.test(e)) {
                var t = h.pid
                un[e] = function () {
                    var r = K.format.apply(K, arguments)
                    console.error('%s %d: %s', e, t, r)
                }
            } else un[e] = function () {}
        return un[e]
    }
    function pt(e, t) {
        var r = { seen: [], stylize: jc }
        return (
            arguments.length >= 3 && (r.depth = arguments[2]),
            arguments.length >= 4 && (r.colors = arguments[3]),
            jo(t) ? (r.showHidden = t) : t && K._extend(r, t),
            St(r.showHidden) && (r.showHidden = !1),
            St(r.depth) && (r.depth = 2),
            St(r.colors) && (r.colors = !1),
            St(r.customInspect) && (r.customInspect = !0),
            r.colors && (r.stylize = Bc),
            pn(r, e, r.depth)
        )
    }
    K.inspect = pt
    pt.colors = {
        bold: [1, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        white: [37, 39],
        grey: [90, 39],
        black: [30, 39],
        blue: [34, 39],
        cyan: [36, 39],
        green: [32, 39],
        magenta: [35, 39],
        red: [31, 39],
        yellow: [33, 39],
    }
    pt.styles = {
        special: 'cyan',
        number: 'yellow',
        boolean: 'yellow',
        undefined: 'grey',
        null: 'bold',
        string: 'green',
        date: 'magenta',
        regexp: 'red',
    }
    function Bc(e, t) {
        var r = pt.styles[t]
        return r
            ? '\x1B[' +
                  pt.colors[r][0] +
                  'm' +
                  e +
                  '\x1B[' +
                  pt.colors[r][1] +
                  'm'
            : e
    }
    function jc(e, t) {
        return e
    }
    function Uc(e) {
        var t = {}
        return (
            e.forEach(function (r, n) {
                t[r] = !0
            }),
            t
        )
    }
    function pn(e, t, r) {
        if (
            e.customInspect &&
            t &&
            cn(t.inspect) &&
            t.inspect !== K.inspect &&
            !(t.constructor && t.constructor.prototype === t)
        ) {
            var n = t.inspect(r, e)
            return gn(n) || (n = pn(e, n, r)), n
        }
        var o = $c(e, t)
        if (o) return o
        var i = Object.keys(t),
            s = Uc(i)
        if (
            (e.showHidden && (i = Object.getOwnPropertyNames(t)),
            xr(t) &&
                (i.indexOf('message') >= 0 || i.indexOf('description') >= 0))
        )
            return ko(t)
        if (i.length === 0) {
            if (cn(t)) {
                var a = t.name ? ': ' + t.name : ''
                return e.stylize('[Function' + a + ']', 'special')
            }
            if (wr(t))
                return e.stylize(RegExp.prototype.toString.call(t), 'regexp')
            if (fn(t)) return e.stylize(Date.prototype.toString.call(t), 'date')
            if (xr(t)) return ko(t)
        }
        var u = '',
            l = !1,
            c = ['{', '}']
        if ((Us(t) && ((l = !0), (c = ['[', ']'])), cn(t))) {
            var g = t.name ? ': ' + t.name : ''
            u = ' [Function' + g + ']'
        }
        if (
            (wr(t) && (u = ' ' + RegExp.prototype.toString.call(t)),
            fn(t) && (u = ' ' + Date.prototype.toUTCString.call(t)),
            xr(t) && (u = ' ' + ko(t)),
            i.length === 0 && (!l || t.length == 0))
        )
            return c[0] + u + c[1]
        if (r < 0)
            return wr(t)
                ? e.stylize(RegExp.prototype.toString.call(t), 'regexp')
                : e.stylize('[Object]', 'special')
        e.seen.push(t)
        var y
        return (
            l
                ? (y = qc(e, t, r, s, i))
                : (y = i.map(function (P) {
                      return Do(e, t, r, s, P, l)
                  })),
            e.seen.pop(),
            Vc(y, u, c)
        )
    }
    function $c(e, t) {
        if (St(t)) return e.stylize('undefined', 'undefined')
        if (gn(t)) {
            var r =
                "'" +
                JSON.stringify(t)
                    .replace(/^"|"$/g, '')
                    .replace(/'/g, "\\'")
                    .replace(/\\"/g, '"') +
                "'"
            return e.stylize(r, 'string')
        }
        if ($s(t)) return e.stylize('' + t, 'number')
        if (jo(t)) return e.stylize('' + t, 'boolean')
        if (mn(t)) return e.stylize('null', 'null')
    }
    function ko(e) {
        return '[' + Error.prototype.toString.call(e) + ']'
    }
    function qc(e, t, r, n, o) {
        for (var i = [], s = 0, a = t.length; s < a; ++s)
            qs(t, String(s))
                ? i.push(Do(e, t, r, n, String(s), !0))
                : i.push('')
        return (
            o.forEach(function (u) {
                u.match(/^\d+$/) || i.push(Do(e, t, r, n, u, !0))
            }),
            i
        )
    }
    function Do(e, t, r, n, o, i) {
        var s, a, u
        if (
            ((u = Object.getOwnPropertyDescriptor(t, o) || { value: t[o] }),
            u.get
                ? u.set
                    ? (a = e.stylize('[Getter/Setter]', 'special'))
                    : (a = e.stylize('[Getter]', 'special'))
                : u.set && (a = e.stylize('[Setter]', 'special')),
            qs(n, o) || (s = '[' + o + ']'),
            a ||
                (e.seen.indexOf(u.value) < 0
                    ? (mn(r)
                          ? (a = pn(e, u.value, null))
                          : (a = pn(e, u.value, r - 1)),
                      a.indexOf(`
`) > -1 &&
                          (i
                              ? (a = a
                                    .split(
                                        `
`
                                    )
                                    .map(function (l) {
                                        return '  ' + l
                                    })
                                    .join(
                                        `
`
                                    )
                                    .slice(2))
                              : (a =
                                    `
` +
                                    a
                                        .split(
                                            `
`
                                        )
                                        .map(function (l) {
                                            return '   ' + l
                                        }).join(`
`))))
                    : (a = e.stylize('[Circular]', 'special'))),
            St(s))
        ) {
            if (i && o.match(/^\d+$/)) return a
            ;(s = JSON.stringify('' + o)),
                s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
                    ? ((s = s.slice(1, -1)), (s = e.stylize(s, 'name')))
                    : ((s = s
                          .replace(/'/g, "\\'")
                          .replace(/\\"/g, '"')
                          .replace(/(^"|"$)/g, "'")),
                      (s = e.stylize(s, 'string')))
        }
        return s + ': ' + a
    }
    function Vc(e, t, r) {
        var n = 0,
            o = e.reduce(function (i, s) {
                return (
                    n++,
                    s.indexOf(`
`) >= 0 && n++,
                    i + s.replace(/\u001b\[\d\d?m/g, '').length + 1
                )
            }, 0)
        return o > 60
            ? r[0] +
                  (t === ''
                      ? ''
                      : t +
                        `
 `) +
                  ' ' +
                  e.join(`,
  `) +
                  ' ' +
                  r[1]
            : r[0] + t + ' ' + e.join(', ') + ' ' + r[1]
    }
    K.types = Fc()
    function Us(e) {
        return Array.isArray(e)
    }
    K.isArray = Us
    function jo(e) {
        return typeof e == 'boolean'
    }
    K.isBoolean = jo
    function mn(e) {
        return e === null
    }
    K.isNull = mn
    function Kc(e) {
        return e == null
    }
    K.isNullOrUndefined = Kc
    function $s(e) {
        return typeof e == 'number'
    }
    K.isNumber = $s
    function gn(e) {
        return typeof e == 'string'
    }
    K.isString = gn
    function Qc(e) {
        return typeof e == 'symbol'
    }
    K.isSymbol = Qc
    function St(e) {
        return e === void 0
    }
    K.isUndefined = St
    function wr(e) {
        return Qt(e) && Uo(e) === '[object RegExp]'
    }
    K.isRegExp = wr
    K.types.isRegExp = wr
    function Qt(e) {
        return typeof e == 'object' && e !== null
    }
    K.isObject = Qt
    function fn(e) {
        return Qt(e) && Uo(e) === '[object Date]'
    }
    K.isDate = fn
    K.types.isDate = fn
    function xr(e) {
        return Qt(e) && (Uo(e) === '[object Error]' || e instanceof Error)
    }
    K.isError = xr
    K.types.isNativeError = xr
    function cn(e) {
        return typeof e == 'function'
    }
    K.isFunction = cn
    function Jc(e) {
        return (
            e === null ||
            typeof e == 'boolean' ||
            typeof e == 'number' ||
            typeof e == 'string' ||
            typeof e == 'symbol' ||
            typeof e > 'u'
        )
    }
    K.isPrimitive = Jc
    K.isBuffer = Dc()
    function Uo(e) {
        return Object.prototype.toString.call(e)
    }
    function Fo(e) {
        return e < 10 ? '0' + e.toString(10) : e.toString(10)
    }
    var Gc = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ]
    function Wc() {
        var e = new Date(),
            t = [Fo(e.getHours()), Fo(e.getMinutes()), Fo(e.getSeconds())].join(
                ':'
            )
        return [e.getDate(), Gc[e.getMonth()], t].join(' ')
    }
    K.log = function () {
        console.log('%s - %s', Wc(), K.format.apply(K, arguments))
    }
    K.inherits = Nc()
    K._extend = function (e, t) {
        if (!t || !Qt(t)) return e
        for (var r = Object.keys(t), n = r.length; n--; ) e[r[n]] = t[r[n]]
        return e
    }
    function qs(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    var Ct = typeof Symbol < 'u' ? Symbol('util.promisify.custom') : void 0
    K.promisify = function (e) {
        if (typeof e != 'function')
            throw new TypeError(
                'The "original" argument must be of type Function'
            )
        if (Ct && e[Ct]) {
            var t = e[Ct]
            if (typeof t != 'function')
                throw new TypeError(
                    'The "util.promisify.custom" argument must be of type Function'
                )
            return (
                Object.defineProperty(t, Ct, {
                    value: t,
                    enumerable: !1,
                    writable: !1,
                    configurable: !0,
                }),
                t
            )
        }
        function t() {
            for (
                var r,
                    n,
                    o = new Promise(function (a, u) {
                        ;(r = a), (n = u)
                    }),
                    i = [],
                    s = 0;
                s < arguments.length;
                s++
            )
                i.push(arguments[s])
            i.push(function (a, u) {
                a ? n(a) : r(u)
            })
            try {
                e.apply(this, i)
            } catch (a) {
                n(a)
            }
            return o
        }
        return (
            Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
            Ct &&
                Object.defineProperty(t, Ct, {
                    value: t,
                    enumerable: !1,
                    writable: !1,
                    configurable: !0,
                }),
            Object.defineProperties(t, Bs(e))
        )
    }
    K.promisify.custom = Ct
    function Hc(e, t) {
        if (!e) {
            var r = new Error('Promise was rejected with a falsy value')
            ;(r.reason = e), (e = r)
        }
        return t(e)
    }
    function zc(e) {
        if (typeof e != 'function')
            throw new TypeError(
                'The "original" argument must be of type Function'
            )
        function t() {
            for (var r = [], n = 0; n < arguments.length; n++)
                r.push(arguments[n])
            var o = r.pop()
            if (typeof o != 'function')
                throw new TypeError(
                    'The last argument must be of type Function'
                )
            var i = this,
                s = function () {
                    return o.apply(i, arguments)
                }
            e.apply(this, r).then(
                function (a) {
                    h.nextTick(s.bind(null, null, a))
                },
                function (a) {
                    h.nextTick(Hc.bind(null, a, s))
                }
            )
        }
        return (
            Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
            Object.defineProperties(t, Bs(e)),
            t
        )
    }
    K.callbackify = zc
})
var Ks = ee((Yh, Vs) => {
    'use strict'
    m()
    p()
    f()
    d()
    var Jt = 1e3,
        Gt = Jt * 60,
        Wt = Gt * 60,
        Mt = Wt * 24,
        Yc = Mt * 7,
        Zc = Mt * 365.25
    Vs.exports = function (e, t) {
        t = t || {}
        var r = typeof e
        if (r === 'string' && e.length > 0) return Xc(e)
        if (r === 'number' && isFinite(e)) return t.long ? tp(e) : ep(e)
        throw new Error(
            'val is not a non-empty string or a valid number. val=' +
                JSON.stringify(e)
        )
    }
    function Xc(e) {
        if (((e = String(e)), !(e.length > 100))) {
            var t =
                /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                    e
                )
            if (t) {
                var r = parseFloat(t[1]),
                    n = (t[2] || 'ms').toLowerCase()
                switch (n) {
                    case 'years':
                    case 'year':
                    case 'yrs':
                    case 'yr':
                    case 'y':
                        return r * Zc
                    case 'weeks':
                    case 'week':
                    case 'w':
                        return r * Yc
                    case 'days':
                    case 'day':
                    case 'd':
                        return r * Mt
                    case 'hours':
                    case 'hour':
                    case 'hrs':
                    case 'hr':
                    case 'h':
                        return r * Wt
                    case 'minutes':
                    case 'minute':
                    case 'mins':
                    case 'min':
                    case 'm':
                        return r * Gt
                    case 'seconds':
                    case 'second':
                    case 'secs':
                    case 'sec':
                    case 's':
                        return r * Jt
                    case 'milliseconds':
                    case 'millisecond':
                    case 'msecs':
                    case 'msec':
                    case 'ms':
                        return r
                    default:
                        return
                }
            }
        }
    }
    function ep(e) {
        var t = Math.abs(e)
        return t >= Mt
            ? Math.round(e / Mt) + 'd'
            : t >= Wt
              ? Math.round(e / Wt) + 'h'
              : t >= Gt
                ? Math.round(e / Gt) + 'm'
                : t >= Jt
                  ? Math.round(e / Jt) + 's'
                  : e + 'ms'
    }
    function tp(e) {
        var t = Math.abs(e)
        return t >= Mt
            ? yn(e, t, Mt, 'day')
            : t >= Wt
              ? yn(e, t, Wt, 'hour')
              : t >= Gt
                ? yn(e, t, Gt, 'minute')
                : t >= Jt
                  ? yn(e, t, Jt, 'second')
                  : e + ' ms'
    }
    function yn(e, t, r, n) {
        var o = t >= r * 1.5
        return Math.round(e / r) + ' ' + n + (o ? 's' : '')
    }
})
var qo = ee((rb, Qs) => {
    'use strict'
    m()
    p()
    f()
    d()
    function rp(e) {
        ;(r.debug = r),
            (r.default = r),
            (r.coerce = u),
            (r.disable = i),
            (r.enable = o),
            (r.enabled = s),
            (r.humanize = Ks()),
            (r.destroy = l),
            Object.keys(e).forEach((c) => {
                r[c] = e[c]
            }),
            (r.names = []),
            (r.skips = []),
            (r.formatters = {})
        function t(c) {
            let g = 0
            for (let y = 0; y < c.length; y++)
                (g = (g << 5) - g + c.charCodeAt(y)), (g |= 0)
            return r.colors[Math.abs(g) % r.colors.length]
        }
        r.selectColor = t
        function r(c) {
            let g,
                y = null,
                P,
                v
            function E(...T) {
                if (!E.enabled) return
                let M = E,
                    O = Number(new Date()),
                    S = O - (g || O)
                ;(M.diff = S),
                    (M.prev = g),
                    (M.curr = O),
                    (g = O),
                    (T[0] = r.coerce(T[0])),
                    typeof T[0] != 'string' && T.unshift('%O')
                let R = 0
                ;(T[0] = T[0].replace(/%([a-zA-Z%])/g, (q, Ne) => {
                    if (q === '%%') return '%'
                    R++
                    let W = r.formatters[Ne]
                    if (typeof W == 'function') {
                        let re = T[R]
                        ;(q = W.call(M, re)), T.splice(R, 1), R--
                    }
                    return q
                })),
                    r.formatArgs.call(M, T),
                    (M.log || r.log).apply(M, T)
            }
            return (
                (E.namespace = c),
                (E.useColors = r.useColors()),
                (E.color = r.selectColor(c)),
                (E.extend = n),
                (E.destroy = r.destroy),
                Object.defineProperty(E, 'enabled', {
                    enumerable: !0,
                    configurable: !1,
                    get: () =>
                        y !== null
                            ? y
                            : (P !== r.namespaces &&
                                  ((P = r.namespaces), (v = r.enabled(c))),
                              v),
                    set: (T) => {
                        y = T
                    },
                }),
                typeof r.init == 'function' && r.init(E),
                E
            )
        }
        function n(c, g) {
            let y = r(this.namespace + (typeof g == 'undefined' ? ':' : g) + c)
            return (y.log = this.log), y
        }
        function o(c) {
            r.save(c), (r.namespaces = c), (r.names = []), (r.skips = [])
            let g,
                y = (typeof c == 'string' ? c : '').split(/[\s,]+/),
                P = y.length
            for (g = 0; g < P; g++)
                y[g] &&
                    ((c = y[g].replace(/\*/g, '.*?')),
                    c[0] === '-'
                        ? r.skips.push(new RegExp('^' + c.slice(1) + '$'))
                        : r.names.push(new RegExp('^' + c + '$')))
        }
        function i() {
            let c = [
                ...r.names.map(a),
                ...r.skips.map(a).map((g) => '-' + g),
            ].join(',')
            return r.enable(''), c
        }
        function s(c) {
            if (c[c.length - 1] === '*') return !0
            let g, y
            for (g = 0, y = r.skips.length; g < y; g++)
                if (r.skips[g].test(c)) return !1
            for (g = 0, y = r.names.length; g < y; g++)
                if (r.names[g].test(c)) return !0
            return !1
        }
        function a(c) {
            return c
                .toString()
                .substring(2, c.toString().length - 2)
                .replace(/\.\*\?$/, '*')
        }
        function u(c) {
            return c instanceof Error ? c.stack || c.message : c
        }
        function l() {
            console.warn(
                'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
            )
        }
        return r.enable(r.load()), r
    }
    Qs.exports = rp
})
var Js = ee((ke, hn) => {
    'use strict'
    m()
    p()
    f()
    d()
    ke.formatArgs = op
    ke.save = ip
    ke.load = sp
    ke.useColors = np
    ke.storage = ap()
    ke.destroy = (() => {
        let e = !1
        return () => {
            e ||
                ((e = !0),
                console.warn(
                    'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
                ))
        }
    })()
    ke.colors = [
        '#0000CC',
        '#0000FF',
        '#0033CC',
        '#0033FF',
        '#0066CC',
        '#0066FF',
        '#0099CC',
        '#0099FF',
        '#00CC00',
        '#00CC33',
        '#00CC66',
        '#00CC99',
        '#00CCCC',
        '#00CCFF',
        '#3300CC',
        '#3300FF',
        '#3333CC',
        '#3333FF',
        '#3366CC',
        '#3366FF',
        '#3399CC',
        '#3399FF',
        '#33CC00',
        '#33CC33',
        '#33CC66',
        '#33CC99',
        '#33CCCC',
        '#33CCFF',
        '#6600CC',
        '#6600FF',
        '#6633CC',
        '#6633FF',
        '#66CC00',
        '#66CC33',
        '#9900CC',
        '#9900FF',
        '#9933CC',
        '#9933FF',
        '#99CC00',
        '#99CC33',
        '#CC0000',
        '#CC0033',
        '#CC0066',
        '#CC0099',
        '#CC00CC',
        '#CC00FF',
        '#CC3300',
        '#CC3333',
        '#CC3366',
        '#CC3399',
        '#CC33CC',
        '#CC33FF',
        '#CC6600',
        '#CC6633',
        '#CC9900',
        '#CC9933',
        '#CCCC00',
        '#CCCC33',
        '#FF0000',
        '#FF0033',
        '#FF0066',
        '#FF0099',
        '#FF00CC',
        '#FF00FF',
        '#FF3300',
        '#FF3333',
        '#FF3366',
        '#FF3399',
        '#FF33CC',
        '#FF33FF',
        '#FF6600',
        '#FF6633',
        '#FF9900',
        '#FF9933',
        '#FFCC00',
        '#FFCC33',
    ]
    function np() {
        return typeof window != 'undefined' &&
            window.process &&
            (window.process.type === 'renderer' || window.process.__nwjs)
            ? !0
            : typeof navigator != 'undefined' &&
                navigator.userAgent &&
                navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
              ? !1
              : (typeof document != 'undefined' &&
                    document.documentElement &&
                    document.documentElement.style &&
                    document.documentElement.style.WebkitAppearance) ||
                (typeof window != 'undefined' &&
                    window.console &&
                    (window.console.firebug ||
                        (window.console.exception && window.console.table))) ||
                (typeof navigator != 'undefined' &&
                    navigator.userAgent &&
                    navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                    parseInt(RegExp.$1, 10) >= 31) ||
                (typeof navigator != 'undefined' &&
                    navigator.userAgent &&
                    navigator.userAgent
                        .toLowerCase()
                        .match(/applewebkit\/(\d+)/))
    }
    function op(e) {
        if (
            ((e[0] =
                (this.useColors ? '%c' : '') +
                this.namespace +
                (this.useColors ? ' %c' : ' ') +
                e[0] +
                (this.useColors ? '%c ' : ' ') +
                '+' +
                hn.exports.humanize(this.diff)),
            !this.useColors)
        )
            return
        let t = 'color: ' + this.color
        e.splice(1, 0, t, 'color: inherit')
        let r = 0,
            n = 0
        e[0].replace(/%[a-zA-Z%]/g, (o) => {
            o !== '%%' && (r++, o === '%c' && (n = r))
        }),
            e.splice(n, 0, t)
    }
    ke.log = console.debug || console.log || (() => {})
    function ip(e) {
        try {
            e ? ke.storage.setItem('debug', e) : ke.storage.removeItem('debug')
        } catch (t) {}
    }
    function sp() {
        let e
        try {
            e = ke.storage.getItem('debug')
        } catch (t) {}
        return (
            !e && typeof h != 'undefined' && 'env' in h && (e = h.env.DEBUG), e
        )
    }
    function ap() {
        try {
            return localStorage
        } catch (e) {}
    }
    hn.exports = qo()(ke)
    var { formatters: up } = hn.exports
    up.j = function (e) {
        try {
            return JSON.stringify(e)
        } catch (t) {
            return '[UnexpectedJSONParseError]: ' + t.message
        }
    }
})
var Vo = ee((bn) => {
    'use strict'
    m()
    p()
    f()
    d()
    bn.isatty = function () {
        return !1
    }
    function lp() {
        throw new Error('tty.ReadStream is not implemented')
    }
    bn.ReadStream = lp
    function cp() {
        throw new Error('tty.WriteStream is not implemented')
    }
    bn.WriteStream = cp
})
var Gs = ee(() => {
    'use strict'
    m()
    p()
    f()
    d()
})
var Hs = ee((Pb, Ws) => {
    'use strict'
    m()
    p()
    f()
    d()
    Ws.exports = (e, t = h.argv) => {
        let r = e.startsWith('-') ? '' : e.length === 1 ? '-' : '--',
            n = t.indexOf(r + e),
            o = t.indexOf('--')
        return n !== -1 && (o === -1 || n < o)
    }
})
var Zs = ee((Cb, Ys) => {
    'use strict'
    m()
    p()
    f()
    d()
    var pp = Gs(),
        zs = Vo(),
        Le = Hs(),
        { env: ae } = h,
        ft
    Le('no-color') || Le('no-colors') || Le('color=false') || Le('color=never')
        ? (ft = 0)
        : (Le('color') ||
              Le('colors') ||
              Le('color=true') ||
              Le('color=always')) &&
          (ft = 1)
    'FORCE_COLOR' in ae &&
        (ae.FORCE_COLOR === 'true'
            ? (ft = 1)
            : ae.FORCE_COLOR === 'false'
              ? (ft = 0)
              : (ft =
                    ae.FORCE_COLOR.length === 0
                        ? 1
                        : Math.min(parseInt(ae.FORCE_COLOR, 10), 3)))
    function Ko(e) {
        return e === 0
            ? !1
            : { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 }
    }
    function Qo(e, t) {
        if (ft === 0) return 0
        if (Le('color=16m') || Le('color=full') || Le('color=truecolor'))
            return 3
        if (Le('color=256')) return 2
        if (e && !t && ft === void 0) return 0
        let r = ft || 0
        if (ae.TERM === 'dumb') return r
        if (h.platform === 'win32') {
            let n = pp.release().split('.')
            return Number(n[0]) >= 10 && Number(n[2]) >= 10586
                ? Number(n[2]) >= 14931
                    ? 3
                    : 2
                : 1
        }
        if ('CI' in ae)
            return [
                'TRAVIS',
                'CIRCLECI',
                'APPVEYOR',
                'GITLAB_CI',
                'GITHUB_ACTIONS',
                'BUILDKITE',
            ].some((n) => n in ae) || ae.CI_NAME === 'codeship'
                ? 1
                : r
        if ('TEAMCITY_VERSION' in ae)
            return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(ae.TEAMCITY_VERSION)
                ? 1
                : 0
        if (ae.COLORTERM === 'truecolor') return 3
        if ('TERM_PROGRAM' in ae) {
            let n = parseInt((ae.TERM_PROGRAM_VERSION || '').split('.')[0], 10)
            switch (ae.TERM_PROGRAM) {
                case 'iTerm.app':
                    return n >= 3 ? 3 : 2
                case 'Apple_Terminal':
                    return 2
            }
        }
        return /-256(color)?$/i.test(ae.TERM)
            ? 2
            : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
                    ae.TERM
                ) || 'COLORTERM' in ae
              ? 1
              : r
    }
    function fp(e) {
        let t = Qo(e, e && e.isTTY)
        return Ko(t)
    }
    Ys.exports = {
        supportsColor: fp,
        stdout: Ko(Qo(!0, zs.isatty(1))),
        stderr: Ko(Qo(!0, zs.isatty(2))),
    }
})
var ea = ee((me, xn) => {
    'use strict'
    m()
    p()
    f()
    d()
    var dp = Vo(),
        wn = $o()
    me.init = xp
    me.log = hp
    me.formatArgs = gp
    me.save = bp
    me.load = wp
    me.useColors = mp
    me.destroy = wn.deprecate(
        () => {},
        'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
    )
    me.colors = [6, 2, 3, 4, 5, 1]
    try {
        let e = Zs()
        e &&
            (e.stderr || e).level >= 2 &&
            (me.colors = [
                20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57,
                62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99,
                112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164,
                165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185,
                196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208,
                209, 214, 215, 220, 221,
            ])
    } catch (e) {}
    me.inspectOpts = Object.keys(h.env)
        .filter((e) => /^debug_/i.test(e))
        .reduce((e, t) => {
            let r = t
                    .substring(6)
                    .toLowerCase()
                    .replace(/_([a-z])/g, (o, i) => i.toUpperCase()),
                n = h.env[t]
            return (
                /^(yes|on|true|enabled)$/i.test(n)
                    ? (n = !0)
                    : /^(no|off|false|disabled)$/i.test(n)
                      ? (n = !1)
                      : n === 'null'
                        ? (n = null)
                        : (n = Number(n)),
                (e[r] = n),
                e
            )
        }, {})
    function mp() {
        return 'colors' in me.inspectOpts
            ? !!me.inspectOpts.colors
            : dp.isatty(h.stderr.fd)
    }
    function gp(e) {
        let { namespace: t, useColors: r } = this
        if (r) {
            let n = this.color,
                o = '\x1B[3' + (n < 8 ? n : '8;5;' + n),
                i = `  ${o};1m${t} \x1B[0m`
            ;(e[0] =
                i +
                e[0]
                    .split(
                        `
`
                    )
                    .join(
                        `
` + i
                    )),
                e.push(o + 'm+' + xn.exports.humanize(this.diff) + '\x1B[0m')
        } else e[0] = yp() + t + ' ' + e[0]
    }
    function yp() {
        return me.inspectOpts.hideDate ? '' : new Date().toISOString() + ' '
    }
    function hp(...e) {
        return h.stderr.write(
            wn.format(...e) +
                `
`
        )
    }
    function bp(e) {
        e ? (h.env.DEBUG = e) : delete h.env.DEBUG
    }
    function wp() {
        return h.env.DEBUG
    }
    function xp(e) {
        e.inspectOpts = {}
        let t = Object.keys(me.inspectOpts)
        for (let r = 0; r < t.length; r++)
            e.inspectOpts[t[r]] = me.inspectOpts[t[r]]
    }
    xn.exports = qo()(me)
    var { formatters: Xs } = xn.exports
    Xs.o = function (e) {
        return (
            (this.inspectOpts.colors = this.useColors),
            wn
                .inspect(e, this.inspectOpts)
                .split(
                    `
`
                )
                .map((t) => t.trim())
                .join(' ')
        )
    }
    Xs.O = function (e) {
        return (
            (this.inspectOpts.colors = this.useColors),
            wn.inspect(e, this.inspectOpts)
        )
    }
})
var ta = ee((Nb, Jo) => {
    'use strict'
    m()
    p()
    f()
    d()
    typeof h == 'undefined' ||
    h.type === 'renderer' ||
    h.browser === !0 ||
    h.__nwjs
        ? (Jo.exports = Js())
        : (Jo.exports = ea())
})
function _p() {
    return !1
}
var Tp,
    Ap,
    An,
    Wo = yr(() => {
        'use strict'
        m()
        p()
        f()
        d()
        ;(Tp = {}), (Ap = { existsSync: _p, promises: Tp }), (An = Ap)
    })
var zo = ee((L0, fa) => {
    'use strict'
    m()
    p()
    f()
    d()
    function Qe(e) {
        if (typeof e != 'string')
            throw new TypeError(
                'Path must be a string. Received ' + JSON.stringify(e)
            )
    }
    function pa(e, t) {
        for (var r = '', n = 0, o = -1, i = 0, s, a = 0; a <= e.length; ++a) {
            if (a < e.length) s = e.charCodeAt(a)
            else {
                if (s === 47) break
                s = 47
            }
            if (s === 47) {
                if (!(o === a - 1 || i === 1))
                    if (o !== a - 1 && i === 2) {
                        if (
                            r.length < 2 ||
                            n !== 2 ||
                            r.charCodeAt(r.length - 1) !== 46 ||
                            r.charCodeAt(r.length - 2) !== 46
                        ) {
                            if (r.length > 2) {
                                var u = r.lastIndexOf('/')
                                if (u !== r.length - 1) {
                                    u === -1
                                        ? ((r = ''), (n = 0))
                                        : ((r = r.slice(0, u)),
                                          (n =
                                              r.length -
                                              1 -
                                              r.lastIndexOf('/'))),
                                        (o = a),
                                        (i = 0)
                                    continue
                                }
                            } else if (r.length === 2 || r.length === 1) {
                                ;(r = ''), (n = 0), (o = a), (i = 0)
                                continue
                            }
                        }
                        t && (r.length > 0 ? (r += '/..') : (r = '..'), (n = 2))
                    } else
                        r.length > 0
                            ? (r += '/' + e.slice(o + 1, a))
                            : (r = e.slice(o + 1, a)),
                            (n = a - o - 1)
                ;(o = a), (i = 0)
            } else s === 46 && i !== -1 ? ++i : (i = -1)
        }
        return r
    }
    function Cp(e, t) {
        var r = t.dir || t.root,
            n = t.base || (t.name || '') + (t.ext || '')
        return r ? (r === t.root ? r + n : r + e + n) : n
    }
    var Zt = {
        resolve: function () {
            for (
                var e = '', t = !1, r, n = arguments.length - 1;
                n >= -1 && !t;
                n--
            ) {
                var o
                n >= 0
                    ? (o = arguments[n])
                    : (r === void 0 && (r = h.cwd()), (o = r)),
                    Qe(o),
                    o.length !== 0 &&
                        ((e = o + '/' + e), (t = o.charCodeAt(0) === 47))
            }
            return (
                (e = pa(e, !t)),
                t ? (e.length > 0 ? '/' + e : '/') : e.length > 0 ? e : '.'
            )
        },
        normalize: function (e) {
            if ((Qe(e), e.length === 0)) return '.'
            var t = e.charCodeAt(0) === 47,
                r = e.charCodeAt(e.length - 1) === 47
            return (
                (e = pa(e, !t)),
                e.length === 0 && !t && (e = '.'),
                e.length > 0 && r && (e += '/'),
                t ? '/' + e : e
            )
        },
        isAbsolute: function (e) {
            return Qe(e), e.length > 0 && e.charCodeAt(0) === 47
        },
        join: function () {
            if (arguments.length === 0) return '.'
            for (var e, t = 0; t < arguments.length; ++t) {
                var r = arguments[t]
                Qe(r), r.length > 0 && (e === void 0 ? (e = r) : (e += '/' + r))
            }
            return e === void 0 ? '.' : Zt.normalize(e)
        },
        relative: function (e, t) {
            if (
                (Qe(e),
                Qe(t),
                e === t || ((e = Zt.resolve(e)), (t = Zt.resolve(t)), e === t))
            )
                return ''
            for (var r = 1; r < e.length && e.charCodeAt(r) === 47; ++r);
            for (
                var n = e.length, o = n - r, i = 1;
                i < t.length && t.charCodeAt(i) === 47;
                ++i
            );
            for (
                var s = t.length, a = s - i, u = o < a ? o : a, l = -1, c = 0;
                c <= u;
                ++c
            ) {
                if (c === u) {
                    if (a > u) {
                        if (t.charCodeAt(i + c) === 47)
                            return t.slice(i + c + 1)
                        if (c === 0) return t.slice(i + c)
                    } else
                        o > u &&
                            (e.charCodeAt(r + c) === 47
                                ? (l = c)
                                : c === 0 && (l = 0))
                    break
                }
                var g = e.charCodeAt(r + c),
                    y = t.charCodeAt(i + c)
                if (g !== y) break
                g === 47 && (l = c)
            }
            var P = ''
            for (c = r + l + 1; c <= n; ++c)
                (c === n || e.charCodeAt(c) === 47) &&
                    (P.length === 0 ? (P += '..') : (P += '/..'))
            return P.length > 0
                ? P + t.slice(i + l)
                : ((i += l), t.charCodeAt(i) === 47 && ++i, t.slice(i))
        },
        _makeLong: function (e) {
            return e
        },
        dirname: function (e) {
            if ((Qe(e), e.length === 0)) return '.'
            for (
                var t = e.charCodeAt(0),
                    r = t === 47,
                    n = -1,
                    o = !0,
                    i = e.length - 1;
                i >= 1;
                --i
            )
                if (((t = e.charCodeAt(i)), t === 47)) {
                    if (!o) {
                        n = i
                        break
                    }
                } else o = !1
            return n === -1
                ? r
                    ? '/'
                    : '.'
                : r && n === 1
                  ? '//'
                  : e.slice(0, n)
        },
        basename: function (e, t) {
            if (t !== void 0 && typeof t != 'string')
                throw new TypeError('"ext" argument must be a string')
            Qe(e)
            var r = 0,
                n = -1,
                o = !0,
                i
            if (t !== void 0 && t.length > 0 && t.length <= e.length) {
                if (t.length === e.length && t === e) return ''
                var s = t.length - 1,
                    a = -1
                for (i = e.length - 1; i >= 0; --i) {
                    var u = e.charCodeAt(i)
                    if (u === 47) {
                        if (!o) {
                            r = i + 1
                            break
                        }
                    } else
                        a === -1 && ((o = !1), (a = i + 1)),
                            s >= 0 &&
                                (u === t.charCodeAt(s)
                                    ? --s === -1 && (n = i)
                                    : ((s = -1), (n = a)))
                }
                return (
                    r === n ? (n = a) : n === -1 && (n = e.length),
                    e.slice(r, n)
                )
            } else {
                for (i = e.length - 1; i >= 0; --i)
                    if (e.charCodeAt(i) === 47) {
                        if (!o) {
                            r = i + 1
                            break
                        }
                    } else n === -1 && ((o = !1), (n = i + 1))
                return n === -1 ? '' : e.slice(r, n)
            }
        },
        extname: function (e) {
            Qe(e)
            for (
                var t = -1, r = 0, n = -1, o = !0, i = 0, s = e.length - 1;
                s >= 0;
                --s
            ) {
                var a = e.charCodeAt(s)
                if (a === 47) {
                    if (!o) {
                        r = s + 1
                        break
                    }
                    continue
                }
                n === -1 && ((o = !1), (n = s + 1)),
                    a === 46
                        ? t === -1
                            ? (t = s)
                            : i !== 1 && (i = 1)
                        : t !== -1 && (i = -1)
            }
            return t === -1 ||
                n === -1 ||
                i === 0 ||
                (i === 1 && t === n - 1 && t === r + 1)
                ? ''
                : e.slice(t, n)
        },
        format: function (e) {
            if (e === null || typeof e != 'object')
                throw new TypeError(
                    'The "pathObject" argument must be of type Object. Received type ' +
                        typeof e
                )
            return Cp('/', e)
        },
        parse: function (e) {
            Qe(e)
            var t = { root: '', dir: '', base: '', ext: '', name: '' }
            if (e.length === 0) return t
            var r = e.charCodeAt(0),
                n = r === 47,
                o
            n ? ((t.root = '/'), (o = 1)) : (o = 0)
            for (
                var i = -1, s = 0, a = -1, u = !0, l = e.length - 1, c = 0;
                l >= o;
                --l
            ) {
                if (((r = e.charCodeAt(l)), r === 47)) {
                    if (!u) {
                        s = l + 1
                        break
                    }
                    continue
                }
                a === -1 && ((u = !1), (a = l + 1)),
                    r === 46
                        ? i === -1
                            ? (i = l)
                            : c !== 1 && (c = 1)
                        : i !== -1 && (c = -1)
            }
            return (
                i === -1 ||
                a === -1 ||
                c === 0 ||
                (c === 1 && i === a - 1 && i === s + 1)
                    ? a !== -1 &&
                      (s === 0 && n
                          ? (t.base = t.name = e.slice(1, a))
                          : (t.base = t.name = e.slice(s, a)))
                    : (s === 0 && n
                          ? ((t.name = e.slice(1, i)), (t.base = e.slice(1, a)))
                          : ((t.name = e.slice(s, i)),
                            (t.base = e.slice(s, a))),
                      (t.ext = e.slice(i, a))),
                s > 0 ? (t.dir = e.slice(0, s - 1)) : n && (t.dir = '/'),
                t
            )
        },
        sep: '/',
        delimiter: ':',
        win32: null,
        posix: null,
    }
    Zt.posix = Zt
    fa.exports = Zt
})
var ma = ee(() => {
    'use strict'
    m()
    p()
    f()
    d()
})
var ya = ee((sw, ga) => {
    'use strict'
    m()
    p()
    f()
    d()
    ga.exports = (e) => {
        let t = e.match(/^[ \t]*(?=\S)/gm)
        return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0
    }
})
var ba = ee((pw, ha) => {
    'use strict'
    m()
    p()
    f()
    d()
    var Mp = ya()
    ha.exports = (e) => {
        let t = Mp(e)
        if (t === 0) return e
        let r = new RegExp(`^[ \\t]{${t}}`, 'gm')
        return e.replace(r, '')
    }
})
var xa = ee((Ew, Zo) => {
    'use strict'
    m()
    p()
    f()
    d()
    var Rp = Object.prototype.hasOwnProperty,
        _e = '~'
    function vr() {}
    Object.create &&
        ((vr.prototype = Object.create(null)), new vr().__proto__ || (_e = !1))
    function Op(e, t, r) {
        ;(this.fn = e), (this.context = t), (this.once = r || !1)
    }
    function wa(e, t, r, n, o) {
        if (typeof r != 'function')
            throw new TypeError('The listener must be a function')
        var i = new Op(r, n || e, o),
            s = _e ? _e + t : t
        return (
            e._events[s]
                ? e._events[s].fn
                    ? (e._events[s] = [e._events[s], i])
                    : e._events[s].push(i)
                : ((e._events[s] = i), e._eventsCount++),
            e
        )
    }
    function Cn(e, t) {
        --e._eventsCount === 0 ? (e._events = new vr()) : delete e._events[t]
    }
    function we() {
        ;(this._events = new vr()), (this._eventsCount = 0)
    }
    we.prototype.eventNames = function () {
        var e = [],
            t,
            r
        if (this._eventsCount === 0) return e
        for (r in (t = this._events))
            Rp.call(t, r) && e.push(_e ? r.slice(1) : r)
        return Object.getOwnPropertySymbols
            ? e.concat(Object.getOwnPropertySymbols(t))
            : e
    }
    we.prototype.listeners = function (e) {
        var t = _e ? _e + e : e,
            r = this._events[t]
        if (!r) return []
        if (r.fn) return [r.fn]
        for (var n = 0, o = r.length, i = new Array(o); n < o; n++)
            i[n] = r[n].fn
        return i
    }
    we.prototype.listenerCount = function (e) {
        var t = _e ? _e + e : e,
            r = this._events[t]
        return r ? (r.fn ? 1 : r.length) : 0
    }
    we.prototype.emit = function (e, t, r, n, o, i) {
        var s = _e ? _e + e : e
        if (!this._events[s]) return !1
        var a = this._events[s],
            u = arguments.length,
            l,
            c
        if (a.fn) {
            switch ((a.once && this.removeListener(e, a.fn, void 0, !0), u)) {
                case 1:
                    return a.fn.call(a.context), !0
                case 2:
                    return a.fn.call(a.context, t), !0
                case 3:
                    return a.fn.call(a.context, t, r), !0
                case 4:
                    return a.fn.call(a.context, t, r, n), !0
                case 5:
                    return a.fn.call(a.context, t, r, n, o), !0
                case 6:
                    return a.fn.call(a.context, t, r, n, o, i), !0
            }
            for (c = 1, l = new Array(u - 1); c < u; c++)
                l[c - 1] = arguments[c]
            a.fn.apply(a.context, l)
        } else {
            var g = a.length,
                y
            for (c = 0; c < g; c++)
                switch (
                    (a[c].once && this.removeListener(e, a[c].fn, void 0, !0),
                    u)
                ) {
                    case 1:
                        a[c].fn.call(a[c].context)
                        break
                    case 2:
                        a[c].fn.call(a[c].context, t)
                        break
                    case 3:
                        a[c].fn.call(a[c].context, t, r)
                        break
                    case 4:
                        a[c].fn.call(a[c].context, t, r, n)
                        break
                    default:
                        if (!l)
                            for (y = 1, l = new Array(u - 1); y < u; y++)
                                l[y - 1] = arguments[y]
                        a[c].fn.apply(a[c].context, l)
                }
        }
        return !0
    }
    we.prototype.on = function (e, t, r) {
        return wa(this, e, t, r, !1)
    }
    we.prototype.once = function (e, t, r) {
        return wa(this, e, t, r, !0)
    }
    we.prototype.removeListener = function (e, t, r, n) {
        var o = _e ? _e + e : e
        if (!this._events[o]) return this
        if (!t) return Cn(this, o), this
        var i = this._events[o]
        if (i.fn)
            i.fn === t &&
                (!n || i.once) &&
                (!r || i.context === r) &&
                Cn(this, o)
        else {
            for (var s = 0, a = [], u = i.length; s < u; s++)
                (i[s].fn !== t ||
                    (n && !i[s].once) ||
                    (r && i[s].context !== r)) &&
                    a.push(i[s])
            a.length
                ? (this._events[o] = a.length === 1 ? a[0] : a)
                : Cn(this, o)
        }
        return this
    }
    we.prototype.removeAllListeners = function (e) {
        var t
        return (
            e
                ? ((t = _e ? _e + e : e), this._events[t] && Cn(this, t))
                : ((this._events = new vr()), (this._eventsCount = 0)),
            this
        )
    }
    we.prototype.off = we.prototype.removeListener
    we.prototype.addListener = we.prototype.on
    we.prefixed = _e
    we.EventEmitter = we
    typeof Zo < 'u' && (Zo.exports = we)
})
var Pa = ee((Aw, Ea) => {
    'use strict'
    m()
    p()
    f()
    d()
    Ea.exports = (e, t = 1, r) => {
        if (
            ((r = { indent: ' ', includeEmptyLines: !1, ...r }),
            typeof e != 'string')
        )
            throw new TypeError(
                `Expected \`input\` to be a \`string\`, got \`${typeof e}\``
            )
        if (typeof t != 'number')
            throw new TypeError(
                `Expected \`count\` to be a \`number\`, got \`${typeof t}\``
            )
        if (typeof r.indent != 'string')
            throw new TypeError(
                `Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``
            )
        if (t === 0) return e
        let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm
        return e.replace(n, r.indent.repeat(t))
    }
})
var Ta = ee((Nw, _a) => {
    'use strict'
    m()
    p()
    f()
    d()
    _a.exports = ({ onlyFirst: e = !1 } = {}) => {
        let t = [
            '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
            '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))',
        ].join('|')
        return new RegExp(t, e ? void 0 : 'g')
    }
})
var ei = ee(($w, Aa) => {
    'use strict'
    m()
    p()
    f()
    d()
    var Np = Ta()
    Aa.exports = (e) => (typeof e == 'string' ? e.replace(Np(), '') : e)
})
var Ca = ee((rx, Mn) => {
    'use strict'
    m()
    p()
    f()
    d()
    Mn.exports = (e = {}) => {
        let t
        if (e.repoUrl) t = e.repoUrl
        else if (e.user && e.repo) t = `https://github.com/${e.user}/${e.repo}`
        else
            throw new Error(
                'You need to specify either the `repoUrl` option or both the `user` and `repo` options'
            )
        let r = new URL(`${t}/issues/new`),
            n = [
                'body',
                'title',
                'labels',
                'template',
                'milestone',
                'assignee',
                'projects',
            ]
        for (let o of n) {
            let i = e[o]
            if (i !== void 0) {
                if (o === 'labels' || o === 'projects') {
                    if (!Array.isArray(i))
                        throw new TypeError(
                            `The \`${o}\` option should be an array`
                        )
                    i = i.join(',')
                }
                r.searchParams.set(o, i)
            }
        }
        return r.toString()
    }
    Mn.exports.default = Mn.exports
})
var Oa = ee(() => {
    'use strict'
    m()
    p()
    f()
    d()
})
var Vi = ee((Zk, Zu) => {
    'use strict'
    m()
    p()
    f()
    d()
    Zu.exports = (function () {
        function e(t, r, n, o, i) {
            return t < r || n < r
                ? t > n
                    ? n + 1
                    : t + 1
                : o === i
                  ? r
                  : r + 1
        }
        return function (t, r) {
            if (t === r) return 0
            if (t.length > r.length) {
                var n = t
                ;(t = r), (r = n)
            }
            for (
                var o = t.length, i = r.length;
                o > 0 && t.charCodeAt(o - 1) === r.charCodeAt(i - 1);

            )
                o--, i--
            for (var s = 0; s < o && t.charCodeAt(s) === r.charCodeAt(s); ) s++
            if (((o -= s), (i -= s), o === 0 || i < 3)) return i
            var a = 0,
                u,
                l,
                c,
                g,
                y,
                P,
                v,
                E,
                T,
                M,
                O,
                S,
                R = []
            for (u = 0; u < o; u++) R.push(u + 1), R.push(t.charCodeAt(s + u))
            for (var $ = R.length - 1; a < i - 3; )
                for (
                    T = r.charCodeAt(s + (l = a)),
                        M = r.charCodeAt(s + (c = a + 1)),
                        O = r.charCodeAt(s + (g = a + 2)),
                        S = r.charCodeAt(s + (y = a + 3)),
                        P = a += 4,
                        u = 0;
                    u < $;
                    u += 2
                )
                    (v = R[u]),
                        (E = R[u + 1]),
                        (l = e(v, l, c, T, E)),
                        (c = e(l, c, g, M, E)),
                        (g = e(c, g, y, O, E)),
                        (P = e(g, y, P, S, E)),
                        (R[u] = P),
                        (y = g),
                        (g = c),
                        (c = l),
                        (l = v)
            for (; a < i; )
                for (
                    T = r.charCodeAt(s + (l = a)), P = ++a, u = 0;
                    u < $;
                    u += 2
                )
                    (v = R[u]), (R[u] = P = e(v, l, P, T, R[u + 1])), (l = v)
            return P
        }
    })()
})
m()
p()
f()
d()
var _s = {}
hr(_s, { defineExtension: () => Ps, getExtensionContext: () => vs })
m()
p()
f()
d()
m()
p()
f()
d()
function Ps(e) {
    return typeof e == 'function' ? e : (t) => t.$extends(e)
}
m()
p()
f()
d()
function vs(e) {
    return e
}
var As = {}
hr(As, { validator: () => Ts })
m()
p()
f()
d()
m()
p()
f()
d()
function Ts(...e) {
    return (t) => t
}
var Os = {}
hr(Os, {
    Extensions: () => Cs,
    Public: () => Ss,
    Result: () => Ms,
    Utils: () => Rs,
})
m()
p()
f()
d()
var Cs = {}
m()
p()
f()
d()
var Ss = {}
m()
p()
f()
d()
var Ms = {}
m()
p()
f()
d()
var Rs = {}
m()
p()
f()
d()
m()
p()
f()
d()
m()
p()
f()
d()
var ct = (e, t) => {
    let r = {}
    for (let n of e) {
        let o = n[t]
        r[o] = n
    }
    return r
}
function Is(e) {
    return e.substring(0, 1).toLowerCase() + e.substring(1)
}
var Io = class {
    constructor(t) {
        this.document = t
        ;(this.compositeNames = new Set(
            this.datamodel.types.map((r) => r.name)
        )),
            (this.typeAndModelMap = this.buildTypeModelMap()),
            (this.mappingsMap = this.buildMappingsMap()),
            (this.outputTypeMap = this.buildMergedOutputTypeMap()),
            (this.rootFieldMap = this.buildRootFieldMap()),
            (this.inputTypesByName = this.buildInputTypesMap())
    }
    get datamodel() {
        return this.document.datamodel
    }
    get mappings() {
        return this.document.mappings
    }
    get schema() {
        return this.document.schema
    }
    get inputObjectTypes() {
        return this.schema.inputObjectTypes
    }
    get outputObjectTypes() {
        return this.schema.outputObjectTypes
    }
    isComposite(t) {
        return this.compositeNames.has(t)
    }
    getOtherOperationNames() {
        return [
            Object.values(this.mappings.otherOperations.write),
            Object.values(this.mappings.otherOperations.read),
        ].flat()
    }
    hasEnumInNamespace(t, r) {
        var n
        return (
            ((n = this.schema.enumTypes[r]) == null
                ? void 0
                : n.find((o) => o.name === t)) !== void 0
        )
    }
    resolveInputObjectType(t) {
        return this.inputTypesByName.get(Oo(t.type, t.namespace))
    }
    resolveOutputObjectType(t) {
        var r
        if (t.location === 'outputObjectTypes')
            return this.outputObjectTypes[
                (r = t.namespace) != null ? r : 'prisma'
            ].find((n) => n.name === t.type)
    }
    buildModelMap() {
        return ct(this.datamodel.models, 'name')
    }
    buildTypeMap() {
        return ct(this.datamodel.types, 'name')
    }
    buildTypeModelMap() {
        return { ...this.buildTypeMap(), ...this.buildModelMap() }
    }
    buildMappingsMap() {
        return ct(this.mappings.modelOperations, 'model')
    }
    buildMergedOutputTypeMap() {
        return {
            model: ct(this.schema.outputObjectTypes.model, 'name'),
            prisma: ct(this.schema.outputObjectTypes.prisma, 'name'),
        }
    }
    buildRootFieldMap() {
        return {
            ...ct(this.outputTypeMap.prisma.Query.fields, 'name'),
            ...ct(this.outputTypeMap.prisma.Mutation.fields, 'name'),
        }
    }
    buildInputTypesMap() {
        let t = new Map()
        for (let r of this.inputObjectTypes.prisma)
            t.set(Oo(r.name, 'prisma'), r)
        if (!this.inputObjectTypes.model) return t
        for (let r of this.inputObjectTypes.model) t.set(Oo(r.name, 'model'), r)
        return t
    }
}
function Oo(e, t) {
    return t ? `${t}.${e}` : e
}
m()
p()
f()
d()
m()
p()
f()
d()
m()
p()
f()
d()
var je
;((t) => {
    let e
    ;((S) => (
        (S.findUnique = 'findUnique'),
        (S.findUniqueOrThrow = 'findUniqueOrThrow'),
        (S.findFirst = 'findFirst'),
        (S.findFirstOrThrow = 'findFirstOrThrow'),
        (S.findMany = 'findMany'),
        (S.create = 'create'),
        (S.createMany = 'createMany'),
        (S.update = 'update'),
        (S.updateMany = 'updateMany'),
        (S.upsert = 'upsert'),
        (S.delete = 'delete'),
        (S.deleteMany = 'deleteMany'),
        (S.groupBy = 'groupBy'),
        (S.count = 'count'),
        (S.aggregate = 'aggregate'),
        (S.findRaw = 'findRaw'),
        (S.aggregateRaw = 'aggregateRaw')
    ))((e = t.ModelAction || (t.ModelAction = {})))
})(je || (je = {}))
m()
p()
f()
d()
var En = ve(ta()),
    Ep = 100,
    Er = [],
    ra,
    na
typeof h != 'undefined' &&
    typeof ((ra = h.stderr) == null ? void 0 : ra.write) != 'function' &&
    (En.default.log = (na = console.debug) != null ? na : console.log)
function Pp(e) {
    let t = (0, En.default)(e),
        r = Object.assign(
            (...n) => (
                (t.log = r.log),
                n.length !== 0 && Er.push([e, ...n]),
                Er.length > Ep && Er.shift(),
                t('', ...n)
            ),
            t
        )
    return r
}
var oa = Object.assign(Pp, En.default)
function ia(e = 7500) {
    let t = Er.map((r) =>
        r.map((n) => (typeof n == 'string' ? n : JSON.stringify(n))).join(' ')
    ).join(`
`)
    return t.length < e ? t : t.slice(-e)
}
function sa() {
    Er.length = 0
}
var be = oa
m()
p()
f()
d()
var Go,
    aa,
    ua,
    la,
    ca = !0
typeof h != 'undefined' &&
    (({
        FORCE_COLOR: Go,
        NODE_DISABLE_COLORS: aa,
        NO_COLOR: ua,
        TERM: la,
    } = h.env || {}),
    (ca = h.stdout && h.stdout.isTTY))
var vp = {
    enabled:
        !aa &&
        ua == null &&
        la !== 'dumb' &&
        ((Go != null && Go !== '0') || ca),
}
function z(e, t) {
    let r = new RegExp(`\\x1b\\[${t}m`, 'g'),
        n = `\x1B[${e}m`,
        o = `\x1B[${t}m`
    return function (i) {
        return !vp.enabled || i == null
            ? i
            : n + (~('' + i).indexOf(o) ? i.replace(r, o + n) : i) + o
    }
}
var Jb = z(0, 0),
    dt = z(1, 22),
    Pn = z(2, 22),
    Gb = z(3, 23),
    vn = z(4, 24),
    Wb = z(7, 27),
    Hb = z(8, 28),
    zb = z(9, 29),
    Yb = z(30, 39),
    Ht = z(31, 39),
    _n = z(32, 39),
    zt = z(33, 39),
    Yt = z(34, 39),
    Zb = z(35, 39),
    mt = z(36, 39),
    Xb = z(37, 39),
    Tn = z(90, 39),
    e0 = z(90, 39),
    t0 = z(40, 49),
    r0 = z(41, 49),
    n0 = z(42, 49),
    o0 = z(43, 49),
    i0 = z(44, 49),
    s0 = z(45, 49),
    a0 = z(46, 49),
    u0 = z(47, 49)
m()
p()
f()
d()
m()
p()
f()
d()
m()
p()
f()
d()
m()
p()
f()
d()
var Ho = [
    'darwin',
    'darwin-arm64',
    'debian-openssl-1.0.x',
    'debian-openssl-1.1.x',
    'debian-openssl-3.0.x',
    'rhel-openssl-1.0.x',
    'rhel-openssl-1.1.x',
    'rhel-openssl-3.0.x',
    'linux-arm64-openssl-1.1.x',
    'linux-arm64-openssl-1.0.x',
    'linux-arm64-openssl-3.0.x',
    'linux-arm-openssl-1.1.x',
    'linux-arm-openssl-1.0.x',
    'linux-arm-openssl-3.0.x',
    'linux-musl',
    'linux-musl-openssl-3.0.x',
    'linux-musl-arm64-openssl-1.1.x',
    'linux-musl-arm64-openssl-3.0.x',
    'linux-nixos',
    'linux-static-x64',
    'linux-static-arm64',
    'windows',
    'freebsd11',
    'freebsd12',
    'freebsd13',
    'openbsd',
    'netbsd',
    'arm',
]
m()
p()
f()
d()
var da = 'library'
function Rt(e) {
    let t = Sp()
    return (
        t ||
        ((e == null ? void 0 : e.config.engineType) === 'library'
            ? 'library'
            : (e == null ? void 0 : e.config.engineType) === 'binary'
              ? 'binary'
              : (e == null ? void 0 : e.config.engineType) === 'wasm'
                ? 'wasm'
                : da)
    )
}
function Sp() {
    let e = h.env.PRISMA_CLIENT_ENGINE_TYPE
    return e === 'library'
        ? 'library'
        : e === 'binary'
          ? 'binary'
          : e === 'wasm'
            ? 'wasm'
            : void 0
}
m()
p()
f()
d()
var Pr = ve(zo())
function Yo(e) {
    return Pr.default.sep === Pr.default.posix.sep
        ? e
        : e.split(Pr.default.sep).join(Pr.default.posix.sep)
}
var Xt = {}
hr(Xt, {
    error: () => Fp,
    info: () => kp,
    log: () => Ip,
    query: () => Dp,
    should: () => va,
    tags: () => _r,
    warn: () => Xo,
})
m()
p()
f()
d()
var _r = {
        error: Ht('prisma:error'),
        warn: zt('prisma:warn'),
        info: mt('prisma:info'),
        query: Yt('prisma:query'),
    },
    va = { warn: () => !h.env.PRISMA_DISABLE_WARNINGS }
function Ip(...e) {
    console.log(...e)
}
function Xo(e, ...t) {
    va.warn() && console.warn(`${_r.warn} ${e}`, ...t)
}
function kp(e, ...t) {
    console.info(`${_r.info} ${e}`, ...t)
}
function Fp(e, ...t) {
    console.error(`${_r.error} ${e}`, ...t)
}
function Dp(e, ...t) {
    console.log(`${_r.query} ${e}`, ...t)
}
m()
p()
f()
d()
function Sn(e, t) {
    if (!e)
        throw new Error(
            `${t}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`
        )
}
m()
p()
f()
d()
function Ot(e, t) {
    throw new Error(t)
}
m()
p()
f()
d()
function ti(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
}
m()
p()
f()
d()
var ri = (e, t) => e.reduce((r, n) => ((r[t(n)] = n), r), {})
m()
p()
f()
d()
function er(e, t) {
    let r = {}
    for (let n of Object.keys(e)) r[n] = t(e[n], n)
    return r
}
m()
p()
f()
d()
function ni(e, t) {
    if (e.length === 0) return
    let r = e[0]
    for (let n = 1; n < e.length; n++) t(r, e[n]) < 0 && (r = e[n])
    return r
}
m()
p()
f()
d()
function B(e, t) {
    Object.defineProperty(e, 'name', { value: t, configurable: !0 })
}
m()
p()
f()
d()
var Sa = new Set(),
    Rn = (e, t, ...r) => {
        Sa.has(e) || (Sa.add(e), Xo(t, ...r))
    }
m()
p()
f()
d()
var ge = class extends Error {
    constructor(r, { code: n, clientVersion: o, meta: i, batchRequestIdx: s }) {
        super(r)
        ;(this.name = 'PrismaClientKnownRequestError'),
            (this.code = n),
            (this.clientVersion = o),
            (this.meta = i),
            Object.defineProperty(this, 'batchRequestIdx', {
                value: s,
                enumerable: !1,
                writable: !0,
            })
    }
    get [Symbol.toStringTag]() {
        return 'PrismaClientKnownRequestError'
    }
}
B(ge, 'PrismaClientKnownRequestError')
var gt = class extends ge {
    constructor(t, r) {
        super(t, { code: 'P2025', clientVersion: r }),
            (this.name = 'NotFoundError')
    }
}
B(gt, 'NotFoundError')
m()
p()
f()
d()
var Z = class e extends Error {
    constructor(r, n, o) {
        super(r)
        ;(this.name = 'PrismaClientInitializationError'),
            (this.clientVersion = n),
            (this.errorCode = o),
            Error.captureStackTrace(e)
    }
    get [Symbol.toStringTag]() {
        return 'PrismaClientInitializationError'
    }
}
B(Z, 'PrismaClientInitializationError')
m()
p()
f()
d()
var Be = class extends Error {
    constructor(r, n) {
        super(r)
        ;(this.name = 'PrismaClientRustPanicError'), (this.clientVersion = n)
    }
    get [Symbol.toStringTag]() {
        return 'PrismaClientRustPanicError'
    }
}
B(Be, 'PrismaClientRustPanicError')
m()
p()
f()
d()
var ye = class extends Error {
    constructor(r, { clientVersion: n, batchRequestIdx: o }) {
        super(r)
        ;(this.name = 'PrismaClientUnknownRequestError'),
            (this.clientVersion = n),
            Object.defineProperty(this, 'batchRequestIdx', {
                value: o,
                writable: !0,
                enumerable: !1,
            })
    }
    get [Symbol.toStringTag]() {
        return 'PrismaClientUnknownRequestError'
    }
}
B(ye, 'PrismaClientUnknownRequestError')
m()
p()
f()
d()
var Te = class extends Error {
    constructor(r, { clientVersion: n }) {
        super(r)
        this.name = 'PrismaClientValidationError'
        this.clientVersion = n
    }
    get [Symbol.toStringTag]() {
        return 'PrismaClientValidationError'
    }
}
B(Te, 'PrismaClientValidationError')
m()
p()
f()
d()
var Tr = class {
    constructor(t) {
        this._engine = t
    }
    prometheus(t) {
        return this._engine.metrics({ format: 'prometheus', ...t })
    }
    json(t) {
        return this._engine.metrics({ format: 'json', ...t })
    }
}
m()
p()
f()
d()
m()
p()
f()
d()
function Ar(e) {
    let t
    return {
        get() {
            return t || (t = { value: e() }), t.value
        },
    }
}
function Lp(e, t) {
    let r = Ar(() => Bp(t))
    Object.defineProperty(e, 'dmmf', { get: () => r.get() })
}
function Bp(e) {
    return {
        datamodel: {
            models: oi(e.models),
            enums: oi(e.enums),
            types: oi(e.types),
        },
    }
}
function oi(e) {
    return Object.entries(e).map(([t, r]) => ({ name: t, ...r }))
}
m()
p()
f()
d()
var jp = ['$connect', '$disconnect', '$on', '$transaction', '$use', '$extends'],
    Ra = jp
m()
p()
f()
d()
var c1 = [
        'JsonNullValueInput',
        'NullableJsonNullValueInput',
        'JsonNullValueFilter',
    ],
    On = Symbol(),
    ii = new WeakMap(),
    et = class {
        constructor(t) {
            t === On
                ? ii.set(this, `Prisma.${this._getName()}`)
                : ii.set(
                      this,
                      `new Prisma.${this._getNamespace()}.${this._getName()}()`
                  )
        }
        _getName() {
            return this.constructor.name
        }
        toString() {
            return ii.get(this)
        }
    },
    Cr = class extends et {
        _getNamespace() {
            return 'NullTypes'
        }
    },
    Sr = class extends Cr {}
ai(Sr, 'DbNull')
var Mr = class extends Cr {}
ai(Mr, 'JsonNull')
var Rr = class extends Cr {}
ai(Rr, 'AnyNull')
var si = {
    classes: { DbNull: Sr, JsonNull: Mr, AnyNull: Rr },
    instances: {
        DbNull: new Sr(On),
        JsonNull: new Mr(On),
        AnyNull: new Rr(On),
    },
}
function ai(e, t) {
    Object.defineProperty(e, 'name', { value: t, configurable: !0 })
}
m()
p()
f()
d()
m()
p()
f()
d()
m()
p()
f()
d()
m()
p()
f()
d()
function In(e) {
    return {
        ok: !1,
        error: e,
        map() {
            return In(e)
        },
        flatMap() {
            return In(e)
        },
    }
}
var ui = class {
        constructor() {
            this.registeredErrors = []
        }
        consumeError(t) {
            return this.registeredErrors[t]
        }
        registerNewError(t) {
            let r = 0
            for (; this.registeredErrors[r] !== void 0; ) r++
            return (this.registeredErrors[r] = { error: t }), r
        }
    },
    li = (e) => {
        let t = new ui(),
            r = It(t, e.startTransaction.bind(e))
        return {
            errorRegistry: t,
            queryRaw: It(t, e.queryRaw.bind(e)),
            executeRaw: It(t, e.executeRaw.bind(e)),
            provider: e.provider,
            startTransaction: async (...n) =>
                (await r(...n)).map((i) => Up(t, i)),
        }
    },
    Up = (e, t) => ({
        provider: t.provider,
        options: t.options,
        queryRaw: It(e, t.queryRaw.bind(t)),
        executeRaw: It(e, t.executeRaw.bind(t)),
        commit: It(e, t.commit.bind(t)),
        rollback: It(e, t.rollback.bind(t)),
    })
function It(e, t) {
    return async (...r) => {
        try {
            return await t(...r)
        } catch (n) {
            let o = e.registerNewError(n)
            return In({ kind: 'GenericJs', id: o })
        }
    }
}
var S4 = ve(Oa()),
    jl = ve(xa())
Wo()
var on = ve(zo())
m()
p()
f()
d()
var Fe = class e {
    constructor(t, r) {
        if (t.length - 1 !== r.length)
            throw t.length === 0
                ? new TypeError('Expected at least 1 string')
                : new TypeError(
                      `Expected ${t.length} strings to have ${t.length - 1} values`
                  )
        let n = r.reduce(
            (s, a) => s + (a instanceof e ? a.values.length : 1),
            0
        )
        ;(this.values = new Array(n)),
            (this.strings = new Array(n + 1)),
            (this.strings[0] = t[0])
        let o = 0,
            i = 0
        for (; o < r.length; ) {
            let s = r[o++],
                a = t[o]
            if (s instanceof e) {
                this.strings[i] += s.strings[0]
                let u = 0
                for (; u < s.values.length; )
                    (this.values[i++] = s.values[u++]),
                        (this.strings[i] = s.strings[u])
                this.strings[i] += a
            } else (this.values[i++] = s), (this.strings[i] = a)
        }
    }
    get text() {
        let t = this.strings.length,
            r = 1,
            n = this.strings[0]
        for (; r < t; ) n += `$${r}${this.strings[r++]}`
        return n
    }
    get sql() {
        let t = this.strings.length,
            r = 1,
            n = this.strings[0]
        for (; r < t; ) n += `?${this.strings[r++]}`
        return n
    }
    get statement() {
        let t = this.strings.length,
            r = 1,
            n = this.strings[0]
        for (; r < t; ) n += `:${r}${this.strings[r++]}`
        return n
    }
    inspect() {
        return { text: this.text, sql: this.sql, values: this.values }
    }
}
function $p(e, t = ',', r = '', n = '') {
    if (e.length === 0)
        throw new TypeError(
            'Expected `join([])` to be called with an array of multiple elements, but got an empty array'
        )
    return new Fe([r, ...Array(e.length - 1).fill(t), n], e)
}
function Ia(e) {
    return new Fe([e], [])
}
var qp = Ia('')
function ka(e, ...t) {
    return new Fe(e, t)
}
m()
p()
f()
d()
m()
p()
f()
d()
function Or(e) {
    return {
        getKeys() {
            return Object.keys(e)
        },
        getPropertyValue(t) {
            return e[t]
        },
    }
}
m()
p()
f()
d()
function Ae(e, t) {
    return {
        getKeys() {
            return [e]
        },
        getPropertyValue() {
            return t()
        },
    }
}
m()
p()
f()
d()
m()
p()
f()
d()
var Je = class {
    constructor() {
        this._map = new Map()
    }
    get(t) {
        var r
        return (r = this._map.get(t)) == null ? void 0 : r.value
    }
    set(t, r) {
        this._map.set(t, { value: r })
    }
    getOrCreate(t, r) {
        let n = this._map.get(t)
        if (n) return n.value
        let o = r()
        return this.set(t, o), o
    }
}
function kt(e) {
    let t = new Je()
    return {
        getKeys() {
            return e.getKeys()
        },
        getPropertyValue(r) {
            return t.getOrCreate(r, () => e.getPropertyValue(r))
        },
        getPropertyDescriptor(r) {
            var n
            return (n = e.getPropertyDescriptor) == null ? void 0 : n.call(e, r)
        },
    }
}
m()
p()
f()
d()
var Na = ve($o())
m()
p()
f()
d()
var kn = { enumerable: !0, configurable: !0, writable: !0 }
function Fn(e) {
    let t = new Set(e)
    return {
        getOwnPropertyDescriptor: () => kn,
        has: (r, n) => t.has(n),
        set: (r, n, o) => t.add(n) && Reflect.set(r, n, o),
        ownKeys: () => [...t],
    }
}
var Fa = Symbol.for('nodejs.util.inspect.custom')
function Ge(e, t) {
    let r = Vp(t),
        n = new Set(),
        o = new Proxy(e, {
            get(i, s) {
                if (n.has(s)) return i[s]
                let a = r.get(s)
                return a ? a.getPropertyValue(s) : i[s]
            },
            has(i, s) {
                var u, l
                if (n.has(s)) return !0
                let a = r.get(s)
                return a
                    ? (l = (u = a.has) == null ? void 0 : u.call(a, s)) != null
                        ? l
                        : !0
                    : Reflect.has(i, s)
            },
            ownKeys(i) {
                let s = Da(Reflect.ownKeys(i), r),
                    a = Da(Array.from(r.keys()), r)
                return [...new Set([...s, ...a, ...n])]
            },
            set(i, s, a) {
                var l, c
                let u = r.get(s)
                return ((c =
                    (l = u == null ? void 0 : u.getPropertyDescriptor) == null
                        ? void 0
                        : l.call(u, s)) == null
                    ? void 0
                    : c.writable) === !1
                    ? !1
                    : (n.add(s), Reflect.set(i, s, a))
            },
            getOwnPropertyDescriptor(i, s) {
                let a = Reflect.getOwnPropertyDescriptor(i, s)
                if (a && !a.configurable) return a
                let u = r.get(s)
                return u
                    ? u.getPropertyDescriptor
                        ? {
                              ...kn,
                              ...(u == null
                                  ? void 0
                                  : u.getPropertyDescriptor(s)),
                          }
                        : kn
                    : a
            },
            defineProperty(i, s, a) {
                return n.add(s), Reflect.defineProperty(i, s, a)
            },
        })
    return (
        (o[Fa] = function (i, s, a = Na.inspect) {
            let u = { ...this }
            return delete u[Fa], a(u, s)
        }),
        o
    )
}
function Vp(e) {
    let t = new Map()
    for (let r of e) {
        let n = r.getKeys()
        for (let o of n) t.set(o, r)
    }
    return t
}
function Da(e, t) {
    return e.filter((r) => {
        var o, i
        let n = t.get(r)
        return (i =
            (o = n == null ? void 0 : n.has) == null ? void 0 : o.call(n, r)) !=
            null
            ? i
            : !0
    })
}
m()
p()
f()
d()
function Ir(e) {
    return {
        getKeys() {
            return e
        },
        has() {
            return !1
        },
        getPropertyValue() {},
    }
}
m()
p()
f()
d()
m()
p()
f()
d()
var tr = class {
    constructor(t = 0, r) {
        this.context = r
        this.lines = []
        this.currentLine = ''
        this.currentIndent = 0
        this.currentIndent = t
    }
    write(t) {
        return (
            typeof t == 'string' ? (this.currentLine += t) : t.write(this), this
        )
    }
    writeJoined(t, r) {
        let n = r.length - 1
        for (let o = 0; o < r.length; o++)
            this.write(r[o]), o !== n && this.write(t)
        return this
    }
    writeLine(t) {
        return this.write(t).newLine()
    }
    newLine() {
        this.lines.push(this.indentedCurrentLine()),
            (this.currentLine = ''),
            (this.marginSymbol = void 0)
        let t = this.afterNextNewLineCallback
        return (this.afterNextNewLineCallback = void 0), t == null || t(), this
    }
    withIndent(t) {
        return this.indent(), t(this), this.unindent(), this
    }
    afterNextNewline(t) {
        return (this.afterNextNewLineCallback = t), this
    }
    indent() {
        return this.currentIndent++, this
    }
    unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this
    }
    addMarginSymbol(t) {
        return (this.marginSymbol = t), this
    }
    toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`)
    }
    getCurrentLineLength() {
        return this.currentLine.length
    }
    indentedCurrentLine() {
        let t = this.currentLine.padStart(
            this.currentLine.length + 2 * this.currentIndent
        )
        return this.marginSymbol ? this.marginSymbol + t.slice(1) : t
    }
}
m()
p()
f()
d()
m()
p()
f()
d()
function rr(e) {
    return (
        e instanceof Date ||
        Object.prototype.toString.call(e) === '[object Date]'
    )
}
function Dn(e) {
    return e.toString() !== 'Invalid Date'
}
m()
p()
f()
d()
m()
p()
f()
d()
var nr = 9e15,
    wt = 1e9,
    ci = '0123456789abcdef',
    Ln =
        '2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058',
    Bn =
        '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789',
    pi = {
        precision: 20,
        rounding: 4,
        modulo: 1,
        toExpNeg: -7,
        toExpPos: 21,
        minE: -nr,
        maxE: nr,
        crypto: !1,
    },
    Ua,
    tt,
    j = !0,
    Un = '[DecimalError] ',
    bt = Un + 'Invalid argument: ',
    $a = Un + 'Precision limit exceeded',
    qa = Un + 'crypto unavailable',
    Va = '[object Decimal]',
    xe = Math.floor,
    ie = Math.pow,
    Kp = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
    Qp = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
    Jp = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
    Ka = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    $e = 1e7,
    L = 7,
    Gp = 9007199254740991,
    Wp = Ln.length - 1,
    fi = Bn.length - 1,
    A = { toStringTag: Va }
A.absoluteValue = A.abs = function () {
    var e = new this.constructor(this)
    return e.s < 0 && (e.s = 1), D(e)
}
A.ceil = function () {
    return D(new this.constructor(this), this.e + 1, 2)
}
A.clampedTo = A.clamp = function (e, t) {
    var r,
        n = this,
        o = n.constructor
    if (((e = new o(e)), (t = new o(t)), !e.s || !t.s)) return new o(NaN)
    if (e.gt(t)) throw Error(bt + t)
    return (r = n.cmp(e)), r < 0 ? e : n.cmp(t) > 0 ? t : new o(n)
}
A.comparedTo = A.cmp = function (e) {
    var t,
        r,
        n,
        o,
        i = this,
        s = i.d,
        a = (e = new i.constructor(e)).d,
        u = i.s,
        l = e.s
    if (!s || !a)
        return !u || !l
            ? NaN
            : u !== l
              ? u
              : s === a
                ? 0
                : !s ^ (u < 0)
                  ? 1
                  : -1
    if (!s[0] || !a[0]) return s[0] ? u : a[0] ? -l : 0
    if (u !== l) return u
    if (i.e !== e.e) return (i.e > e.e) ^ (u < 0) ? 1 : -1
    for (n = s.length, o = a.length, t = 0, r = n < o ? n : o; t < r; ++t)
        if (s[t] !== a[t]) return (s[t] > a[t]) ^ (u < 0) ? 1 : -1
    return n === o ? 0 : (n > o) ^ (u < 0) ? 1 : -1
}
A.cosine = A.cos = function () {
    var e,
        t,
        r = this,
        n = r.constructor
    return r.d
        ? r.d[0]
            ? ((e = n.precision),
              (t = n.rounding),
              (n.precision = e + Math.max(r.e, r.sd()) + L),
              (n.rounding = 1),
              (r = Hp(n, Ha(n, r))),
              (n.precision = e),
              (n.rounding = t),
              D(tt == 2 || tt == 3 ? r.neg() : r, e, t, !0))
            : new n(1)
        : new n(NaN)
}
A.cubeRoot = A.cbrt = function () {
    var e,
        t,
        r,
        n,
        o,
        i,
        s,
        a,
        u,
        l,
        c = this,
        g = c.constructor
    if (!c.isFinite() || c.isZero()) return new g(c)
    for (
        j = !1,
            i = c.s * ie(c.s * c, 1 / 3),
            !i || Math.abs(i) == 1 / 0
                ? ((r = he(c.d)),
                  (e = c.e),
                  (i = (e - r.length + 1) % 3) &&
                      (r += i == 1 || i == -2 ? '0' : '00'),
                  (i = ie(r, 1 / 3)),
                  (e = xe((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
                  i == 1 / 0
                      ? (r = '5e' + e)
                      : ((r = i.toExponential()),
                        (r = r.slice(0, r.indexOf('e') + 1) + e)),
                  (n = new g(r)),
                  (n.s = c.s))
                : (n = new g(i.toString())),
            s = (e = g.precision) + 3;
        ;

    )
        if (
            ((a = n),
            (u = a.times(a).times(a)),
            (l = u.plus(c)),
            (n = H(l.plus(c).times(a), l.plus(u), s + 2, 1)),
            he(a.d).slice(0, s) === (r = he(n.d)).slice(0, s))
        )
            if (
                ((r = r.slice(s - 3, s + 1)),
                r == '9999' || (!o && r == '4999'))
            ) {
                if (!o && (D(a, e + 1, 0), a.times(a).times(a).eq(c))) {
                    n = a
                    break
                }
                ;(s += 4), (o = 1)
            } else {
                ;(!+r || (!+r.slice(1) && r.charAt(0) == '5')) &&
                    (D(n, e + 1, 1), (t = !n.times(n).times(n).eq(c)))
                break
            }
    return (j = !0), D(n, e, g.rounding, t)
}
A.decimalPlaces = A.dp = function () {
    var e,
        t = this.d,
        r = NaN
    if (t) {
        if (((e = t.length - 1), (r = (e - xe(this.e / L)) * L), (e = t[e]), e))
            for (; e % 10 == 0; e /= 10) r--
        r < 0 && (r = 0)
    }
    return r
}
A.dividedBy = A.div = function (e) {
    return H(this, new this.constructor(e))
}
A.dividedToIntegerBy = A.divToInt = function (e) {
    var t = this,
        r = t.constructor
    return D(H(t, new r(e), 0, 1, 1), r.precision, r.rounding)
}
A.equals = A.eq = function (e) {
    return this.cmp(e) === 0
}
A.floor = function () {
    return D(new this.constructor(this), this.e + 1, 3)
}
A.greaterThan = A.gt = function (e) {
    return this.cmp(e) > 0
}
A.greaterThanOrEqualTo = A.gte = function (e) {
    var t = this.cmp(e)
    return t == 1 || t === 0
}
A.hyperbolicCosine = A.cosh = function () {
    var e,
        t,
        r,
        n,
        o,
        i = this,
        s = i.constructor,
        a = new s(1)
    if (!i.isFinite()) return new s(i.s ? 1 / 0 : NaN)
    if (i.isZero()) return a
    ;(r = s.precision),
        (n = s.rounding),
        (s.precision = r + Math.max(i.e, i.sd()) + 4),
        (s.rounding = 1),
        (o = i.d.length),
        o < 32
            ? ((e = Math.ceil(o / 3)), (t = (1 / qn(4, e)).toString()))
            : ((e = 16), (t = '2.3283064365386962890625e-10')),
        (i = or(s, 1, i.times(t), new s(1), !0))
    for (var u, l = e, c = new s(8); l--; )
        (u = i.times(i)), (i = a.minus(u.times(c.minus(u.times(c)))))
    return D(i, (s.precision = r), (s.rounding = n), !0)
}
A.hyperbolicSine = A.sinh = function () {
    var e,
        t,
        r,
        n,
        o = this,
        i = o.constructor
    if (!o.isFinite() || o.isZero()) return new i(o)
    if (
        ((t = i.precision),
        (r = i.rounding),
        (i.precision = t + Math.max(o.e, o.sd()) + 4),
        (i.rounding = 1),
        (n = o.d.length),
        n < 3)
    )
        o = or(i, 2, o, o, !0)
    else {
        ;(e = 1.4 * Math.sqrt(n)),
            (e = e > 16 ? 16 : e | 0),
            (o = o.times(1 / qn(5, e))),
            (o = or(i, 2, o, o, !0))
        for (var s, a = new i(5), u = new i(16), l = new i(20); e--; )
            (s = o.times(o)), (o = o.times(a.plus(s.times(u.times(s).plus(l)))))
    }
    return (i.precision = t), (i.rounding = r), D(o, t, r, !0)
}
A.hyperbolicTangent = A.tanh = function () {
    var e,
        t,
        r = this,
        n = r.constructor
    return r.isFinite()
        ? r.isZero()
            ? new n(r)
            : ((e = n.precision),
              (t = n.rounding),
              (n.precision = e + 7),
              (n.rounding = 1),
              H(r.sinh(), r.cosh(), (n.precision = e), (n.rounding = t)))
        : new n(r.s)
}
A.inverseCosine = A.acos = function () {
    var e,
        t = this,
        r = t.constructor,
        n = t.abs().cmp(1),
        o = r.precision,
        i = r.rounding
    return n !== -1
        ? n === 0
            ? t.isNeg()
                ? Ue(r, o, i)
                : new r(0)
            : new r(NaN)
        : t.isZero()
          ? Ue(r, o + 4, i).times(0.5)
          : ((r.precision = o + 6),
            (r.rounding = 1),
            (t = t.asin()),
            (e = Ue(r, o + 4, i).times(0.5)),
            (r.precision = o),
            (r.rounding = i),
            e.minus(t))
}
A.inverseHyperbolicCosine = A.acosh = function () {
    var e,
        t,
        r = this,
        n = r.constructor
    return r.lte(1)
        ? new n(r.eq(1) ? 0 : NaN)
        : r.isFinite()
          ? ((e = n.precision),
            (t = n.rounding),
            (n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4),
            (n.rounding = 1),
            (j = !1),
            (r = r.times(r).minus(1).sqrt().plus(r)),
            (j = !0),
            (n.precision = e),
            (n.rounding = t),
            r.ln())
          : new n(r)
}
A.inverseHyperbolicSine = A.asinh = function () {
    var e,
        t,
        r = this,
        n = r.constructor
    return !r.isFinite() || r.isZero()
        ? new n(r)
        : ((e = n.precision),
          (t = n.rounding),
          (n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6),
          (n.rounding = 1),
          (j = !1),
          (r = r.times(r).plus(1).sqrt().plus(r)),
          (j = !0),
          (n.precision = e),
          (n.rounding = t),
          r.ln())
}
A.inverseHyperbolicTangent = A.atanh = function () {
    var e,
        t,
        r,
        n,
        o = this,
        i = o.constructor
    return o.isFinite()
        ? o.e >= 0
            ? new i(o.abs().eq(1) ? o.s / 0 : o.isZero() ? o : NaN)
            : ((e = i.precision),
              (t = i.rounding),
              (n = o.sd()),
              Math.max(n, e) < 2 * -o.e - 1
                  ? D(new i(o), e, t, !0)
                  : ((i.precision = r = n - o.e),
                    (o = H(o.plus(1), new i(1).minus(o), r + e, 1)),
                    (i.precision = e + 4),
                    (i.rounding = 1),
                    (o = o.ln()),
                    (i.precision = e),
                    (i.rounding = t),
                    o.times(0.5)))
        : new i(NaN)
}
A.inverseSine = A.asin = function () {
    var e,
        t,
        r,
        n,
        o = this,
        i = o.constructor
    return o.isZero()
        ? new i(o)
        : ((t = o.abs().cmp(1)),
          (r = i.precision),
          (n = i.rounding),
          t !== -1
              ? t === 0
                  ? ((e = Ue(i, r + 4, n).times(0.5)), (e.s = o.s), e)
                  : new i(NaN)
              : ((i.precision = r + 6),
                (i.rounding = 1),
                (o = o.div(new i(1).minus(o.times(o)).sqrt().plus(1)).atan()),
                (i.precision = r),
                (i.rounding = n),
                o.times(2)))
}
A.inverseTangent = A.atan = function () {
    var e,
        t,
        r,
        n,
        o,
        i,
        s,
        a,
        u,
        l = this,
        c = l.constructor,
        g = c.precision,
        y = c.rounding
    if (l.isFinite()) {
        if (l.isZero()) return new c(l)
        if (l.abs().eq(1) && g + 4 <= fi)
            return (s = Ue(c, g + 4, y).times(0.25)), (s.s = l.s), s
    } else {
        if (!l.s) return new c(NaN)
        if (g + 4 <= fi) return (s = Ue(c, g + 4, y).times(0.5)), (s.s = l.s), s
    }
    for (
        c.precision = a = g + 10,
            c.rounding = 1,
            r = Math.min(28, (a / L + 2) | 0),
            e = r;
        e;
        --e
    )
        l = l.div(l.times(l).plus(1).sqrt().plus(1))
    for (
        j = !1,
            t = Math.ceil(a / L),
            n = 1,
            u = l.times(l),
            s = new c(l),
            o = l;
        e !== -1;

    )
        if (
            ((o = o.times(u)),
            (i = s.minus(o.div((n += 2)))),
            (o = o.times(u)),
            (s = i.plus(o.div((n += 2)))),
            s.d[t] !== void 0)
        )
            for (e = t; s.d[e] === i.d[e] && e--; );
    return (
        r && (s = s.times(2 << (r - 1))),
        (j = !0),
        D(s, (c.precision = g), (c.rounding = y), !0)
    )
}
A.isFinite = function () {
    return !!this.d
}
A.isInteger = A.isInt = function () {
    return !!this.d && xe(this.e / L) > this.d.length - 2
}
A.isNaN = function () {
    return !this.s
}
A.isNegative = A.isNeg = function () {
    return this.s < 0
}
A.isPositive = A.isPos = function () {
    return this.s > 0
}
A.isZero = function () {
    return !!this.d && this.d[0] === 0
}
A.lessThan = A.lt = function (e) {
    return this.cmp(e) < 0
}
A.lessThanOrEqualTo = A.lte = function (e) {
    return this.cmp(e) < 1
}
A.logarithm = A.log = function (e) {
    var t,
        r,
        n,
        o,
        i,
        s,
        a,
        u,
        l = this,
        c = l.constructor,
        g = c.precision,
        y = c.rounding,
        P = 5
    if (e == null) (e = new c(10)), (t = !0)
    else {
        if (((e = new c(e)), (r = e.d), e.s < 0 || !r || !r[0] || e.eq(1)))
            return new c(NaN)
        t = e.eq(10)
    }
    if (((r = l.d), l.s < 0 || !r || !r[0] || l.eq(1)))
        return new c(r && !r[0] ? -1 / 0 : l.s != 1 ? NaN : r ? 0 : 1 / 0)
    if (t)
        if (r.length > 1) i = !0
        else {
            for (o = r[0]; o % 10 === 0; ) o /= 10
            i = o !== 1
        }
    if (
        ((j = !1),
        (a = g + P),
        (s = ht(l, a)),
        (n = t ? jn(c, a + 10) : ht(e, a)),
        (u = H(s, n, a, 1)),
        kr(u.d, (o = g), y))
    )
        do
            if (
                ((a += 10),
                (s = ht(l, a)),
                (n = t ? jn(c, a + 10) : ht(e, a)),
                (u = H(s, n, a, 1)),
                !i)
            ) {
                ;+he(u.d).slice(o + 1, o + 15) + 1 == 1e14 &&
                    (u = D(u, g + 1, 0))
                break
            }
        while (kr(u.d, (o += 10), y))
    return (j = !0), D(u, g, y)
}
A.minus = A.sub = function (e) {
    var t,
        r,
        n,
        o,
        i,
        s,
        a,
        u,
        l,
        c,
        g,
        y,
        P = this,
        v = P.constructor
    if (((e = new v(e)), !P.d || !e.d))
        return (
            !P.s || !e.s
                ? (e = new v(NaN))
                : P.d
                  ? (e.s = -e.s)
                  : (e = new v(e.d || P.s !== e.s ? P : NaN)),
            e
        )
    if (P.s != e.s) return (e.s = -e.s), P.plus(e)
    if (
        ((l = P.d),
        (y = e.d),
        (a = v.precision),
        (u = v.rounding),
        !l[0] || !y[0])
    ) {
        if (y[0]) e.s = -e.s
        else if (l[0]) e = new v(P)
        else return new v(u === 3 ? -0 : 0)
        return j ? D(e, a, u) : e
    }
    if (
        ((r = xe(e.e / L)), (c = xe(P.e / L)), (l = l.slice()), (i = c - r), i)
    ) {
        for (
            g = i < 0,
                g
                    ? ((t = l), (i = -i), (s = y.length))
                    : ((t = y), (r = c), (s = l.length)),
                n = Math.max(Math.ceil(a / L), s) + 2,
                i > n && ((i = n), (t.length = 1)),
                t.reverse(),
                n = i;
            n--;

        )
            t.push(0)
        t.reverse()
    } else {
        for (
            n = l.length, s = y.length, g = n < s, g && (s = n), n = 0;
            n < s;
            n++
        )
            if (l[n] != y[n]) {
                g = l[n] < y[n]
                break
            }
        i = 0
    }
    for (
        g && ((t = l), (l = y), (y = t), (e.s = -e.s)),
            s = l.length,
            n = y.length - s;
        n > 0;
        --n
    )
        l[s++] = 0
    for (n = y.length; n > i; ) {
        if (l[--n] < y[n]) {
            for (o = n; o && l[--o] === 0; ) l[o] = $e - 1
            --l[o], (l[n] += $e)
        }
        l[n] -= y[n]
    }
    for (; l[--s] === 0; ) l.pop()
    for (; l[0] === 0; l.shift()) --r
    return l[0]
        ? ((e.d = l), (e.e = $n(l, r)), j ? D(e, a, u) : e)
        : new v(u === 3 ? -0 : 0)
}
A.modulo = A.mod = function (e) {
    var t,
        r = this,
        n = r.constructor
    return (
        (e = new n(e)),
        !r.d || !e.s || (e.d && !e.d[0])
            ? new n(NaN)
            : !e.d || (r.d && !r.d[0])
              ? D(new n(r), n.precision, n.rounding)
              : ((j = !1),
                n.modulo == 9
                    ? ((t = H(r, e.abs(), 0, 3, 1)), (t.s *= e.s))
                    : (t = H(r, e, 0, n.modulo, 1)),
                (t = t.times(e)),
                (j = !0),
                r.minus(t))
    )
}
A.naturalExponential = A.exp = function () {
    return di(this)
}
A.naturalLogarithm = A.ln = function () {
    return ht(this)
}
A.negated = A.neg = function () {
    var e = new this.constructor(this)
    return (e.s = -e.s), D(e)
}
A.plus = A.add = function (e) {
    var t,
        r,
        n,
        o,
        i,
        s,
        a,
        u,
        l,
        c,
        g = this,
        y = g.constructor
    if (((e = new y(e)), !g.d || !e.d))
        return (
            !g.s || !e.s
                ? (e = new y(NaN))
                : g.d || (e = new y(e.d || g.s === e.s ? g : NaN)),
            e
        )
    if (g.s != e.s) return (e.s = -e.s), g.minus(e)
    if (
        ((l = g.d),
        (c = e.d),
        (a = y.precision),
        (u = y.rounding),
        !l[0] || !c[0])
    )
        return c[0] || (e = new y(g)), j ? D(e, a, u) : e
    if (
        ((i = xe(g.e / L)), (n = xe(e.e / L)), (l = l.slice()), (o = i - n), o)
    ) {
        for (
            o < 0
                ? ((r = l), (o = -o), (s = c.length))
                : ((r = c), (n = i), (s = l.length)),
                i = Math.ceil(a / L),
                s = i > s ? i + 1 : s + 1,
                o > s && ((o = s), (r.length = 1)),
                r.reverse();
            o--;

        )
            r.push(0)
        r.reverse()
    }
    for (
        s = l.length,
            o = c.length,
            s - o < 0 && ((o = s), (r = c), (c = l), (l = r)),
            t = 0;
        o;

    )
        (t = ((l[--o] = l[o] + c[o] + t) / $e) | 0), (l[o] %= $e)
    for (t && (l.unshift(t), ++n), s = l.length; l[--s] == 0; ) l.pop()
    return (e.d = l), (e.e = $n(l, n)), j ? D(e, a, u) : e
}
A.precision = A.sd = function (e) {
    var t,
        r = this
    if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(bt + e)
    return (
        r.d ? ((t = Qa(r.d)), e && r.e + 1 > t && (t = r.e + 1)) : (t = NaN), t
    )
}
A.round = function () {
    var e = this,
        t = e.constructor
    return D(new t(e), e.e + 1, t.rounding)
}
A.sine = A.sin = function () {
    var e,
        t,
        r = this,
        n = r.constructor
    return r.isFinite()
        ? r.isZero()
            ? new n(r)
            : ((e = n.precision),
              (t = n.rounding),
              (n.precision = e + Math.max(r.e, r.sd()) + L),
              (n.rounding = 1),
              (r = Yp(n, Ha(n, r))),
              (n.precision = e),
              (n.rounding = t),
              D(tt > 2 ? r.neg() : r, e, t, !0))
        : new n(NaN)
}
A.squareRoot = A.sqrt = function () {
    var e,
        t,
        r,
        n,
        o,
        i,
        s = this,
        a = s.d,
        u = s.e,
        l = s.s,
        c = s.constructor
    if (l !== 1 || !a || !a[0])
        return new c(!l || (l < 0 && (!a || a[0])) ? NaN : a ? s : 1 / 0)
    for (
        j = !1,
            l = Math.sqrt(+s),
            l == 0 || l == 1 / 0
                ? ((t = he(a)),
                  (t.length + u) % 2 == 0 && (t += '0'),
                  (l = Math.sqrt(t)),
                  (u = xe((u + 1) / 2) - (u < 0 || u % 2)),
                  l == 1 / 0
                      ? (t = '5e' + u)
                      : ((t = l.toExponential()),
                        (t = t.slice(0, t.indexOf('e') + 1) + u)),
                  (n = new c(t)))
                : (n = new c(l.toString())),
            r = (u = c.precision) + 3;
        ;

    )
        if (
            ((i = n),
            (n = i.plus(H(s, i, r + 2, 1)).times(0.5)),
            he(i.d).slice(0, r) === (t = he(n.d)).slice(0, r))
        )
            if (
                ((t = t.slice(r - 3, r + 1)),
                t == '9999' || (!o && t == '4999'))
            ) {
                if (!o && (D(i, u + 1, 0), i.times(i).eq(s))) {
                    n = i
                    break
                }
                ;(r += 4), (o = 1)
            } else {
                ;(!+t || (!+t.slice(1) && t.charAt(0) == '5')) &&
                    (D(n, u + 1, 1), (e = !n.times(n).eq(s)))
                break
            }
    return (j = !0), D(n, u, c.rounding, e)
}
A.tangent = A.tan = function () {
    var e,
        t,
        r = this,
        n = r.constructor
    return r.isFinite()
        ? r.isZero()
            ? new n(r)
            : ((e = n.precision),
              (t = n.rounding),
              (n.precision = e + 10),
              (n.rounding = 1),
              (r = r.sin()),
              (r.s = 1),
              (r = H(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0)),
              (n.precision = e),
              (n.rounding = t),
              D(tt == 2 || tt == 4 ? r.neg() : r, e, t, !0))
        : new n(NaN)
}
A.times = A.mul = function (e) {
    var t,
        r,
        n,
        o,
        i,
        s,
        a,
        u,
        l,
        c = this,
        g = c.constructor,
        y = c.d,
        P = (e = new g(e)).d
    if (((e.s *= c.s), !y || !y[0] || !P || !P[0]))
        return new g(
            !e.s || (y && !y[0] && !P) || (P && !P[0] && !y)
                ? NaN
                : !y || !P
                  ? e.s / 0
                  : e.s * 0
        )
    for (
        r = xe(c.e / L) + xe(e.e / L),
            u = y.length,
            l = P.length,
            u < l && ((i = y), (y = P), (P = i), (s = u), (u = l), (l = s)),
            i = [],
            s = u + l,
            n = s;
        n--;

    )
        i.push(0)
    for (n = l; --n >= 0; ) {
        for (t = 0, o = u + n; o > n; )
            (a = i[o] + P[n] * y[o - n - 1] + t),
                (i[o--] = a % $e | 0),
                (t = (a / $e) | 0)
        i[o] = (i[o] + t) % $e | 0
    }
    for (; !i[--s]; ) i.pop()
    return (
        t ? ++r : i.shift(),
        (e.d = i),
        (e.e = $n(i, r)),
        j ? D(e, g.precision, g.rounding) : e
    )
}
A.toBinary = function (e, t) {
    return gi(this, 2, e, t)
}
A.toDecimalPlaces = A.toDP = function (e, t) {
    var r = this,
        n = r.constructor
    return (
        (r = new n(r)),
        e === void 0
            ? r
            : (Se(e, 0, wt),
              t === void 0 ? (t = n.rounding) : Se(t, 0, 8),
              D(r, e + r.e + 1, t))
    )
}
A.toExponential = function (e, t) {
    var r,
        n = this,
        o = n.constructor
    return (
        e === void 0
            ? (r = We(n, !0))
            : (Se(e, 0, wt),
              t === void 0 ? (t = o.rounding) : Se(t, 0, 8),
              (n = D(new o(n), e + 1, t)),
              (r = We(n, !0, e + 1))),
        n.isNeg() && !n.isZero() ? '-' + r : r
    )
}
A.toFixed = function (e, t) {
    var r,
        n,
        o = this,
        i = o.constructor
    return (
        e === void 0
            ? (r = We(o))
            : (Se(e, 0, wt),
              t === void 0 ? (t = i.rounding) : Se(t, 0, 8),
              (n = D(new i(o), e + o.e + 1, t)),
              (r = We(n, !1, e + n.e + 1))),
        o.isNeg() && !o.isZero() ? '-' + r : r
    )
}
A.toFraction = function (e) {
    var t,
        r,
        n,
        o,
        i,
        s,
        a,
        u,
        l,
        c,
        g,
        y,
        P = this,
        v = P.d,
        E = P.constructor
    if (!v) return new E(P)
    if (
        ((l = r = new E(1)),
        (n = u = new E(0)),
        (t = new E(n)),
        (i = t.e = Qa(v) - P.e - 1),
        (s = i % L),
        (t.d[0] = ie(10, s < 0 ? L + s : s)),
        e == null)
    )
        e = i > 0 ? t : l
    else {
        if (((a = new E(e)), !a.isInt() || a.lt(l))) throw Error(bt + a)
        e = a.gt(t) ? (i > 0 ? t : l) : a
    }
    for (
        j = !1,
            a = new E(he(v)),
            c = E.precision,
            E.precision = i = v.length * L * 2;
        (g = H(a, t, 0, 1, 1)), (o = r.plus(g.times(n))), o.cmp(e) != 1;

    )
        (r = n),
            (n = o),
            (o = l),
            (l = u.plus(g.times(o))),
            (u = o),
            (o = t),
            (t = a.minus(g.times(o))),
            (a = o)
    return (
        (o = H(e.minus(r), n, 0, 1, 1)),
        (u = u.plus(o.times(l))),
        (r = r.plus(o.times(n))),
        (u.s = l.s = P.s),
        (y =
            H(l, n, i, 1)
                .minus(P)
                .abs()
                .cmp(H(u, r, i, 1).minus(P).abs()) < 1
                ? [l, n]
                : [u, r]),
        (E.precision = c),
        (j = !0),
        y
    )
}
A.toHexadecimal = A.toHex = function (e, t) {
    return gi(this, 16, e, t)
}
A.toNearest = function (e, t) {
    var r = this,
        n = r.constructor
    if (((r = new n(r)), e == null)) {
        if (!r.d) return r
        ;(e = new n(1)), (t = n.rounding)
    } else {
        if (
            ((e = new n(e)),
            t === void 0 ? (t = n.rounding) : Se(t, 0, 8),
            !r.d)
        )
            return e.s ? r : e
        if (!e.d) return e.s && (e.s = r.s), e
    }
    return (
        e.d[0]
            ? ((j = !1), (r = H(r, e, 0, t, 1).times(e)), (j = !0), D(r))
            : ((e.s = r.s), (r = e)),
        r
    )
}
A.toNumber = function () {
    return +this
}
A.toOctal = function (e, t) {
    return gi(this, 8, e, t)
}
A.toPower = A.pow = function (e) {
    var t,
        r,
        n,
        o,
        i,
        s,
        a = this,
        u = a.constructor,
        l = +(e = new u(e))
    if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new u(ie(+a, l))
    if (((a = new u(a)), a.eq(1))) return a
    if (((n = u.precision), (i = u.rounding), e.eq(1))) return D(a, n, i)
    if (((t = xe(e.e / L)), t >= e.d.length - 1 && (r = l < 0 ? -l : l) <= Gp))
        return (o = Ja(u, a, r, n)), e.s < 0 ? new u(1).div(o) : D(o, n, i)
    if (((s = a.s), s < 0)) {
        if (t < e.d.length - 1) return new u(NaN)
        if ((e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1))
            return (a.s = s), a
    }
    return (
        (r = ie(+a, l)),
        (t =
            r == 0 || !isFinite(r)
                ? xe(l * (Math.log('0.' + he(a.d)) / Math.LN10 + a.e + 1))
                : new u(r + '').e),
        t > u.maxE + 1 || t < u.minE - 1
            ? new u(t > 0 ? s / 0 : 0)
            : ((j = !1),
              (u.rounding = a.s = 1),
              (r = Math.min(12, (t + '').length)),
              (o = di(e.times(ht(a, n + r)), n)),
              o.d &&
                  ((o = D(o, n + 5, 1)),
                  kr(o.d, n, i) &&
                      ((t = n + 10),
                      (o = D(di(e.times(ht(a, t + r)), t), t + 5, 1)),
                      +he(o.d).slice(n + 1, n + 15) + 1 == 1e14 &&
                          (o = D(o, n + 1, 0)))),
              (o.s = s),
              (j = !0),
              (u.rounding = i),
              D(o, n, i))
    )
}
A.toPrecision = function (e, t) {
    var r,
        n = this,
        o = n.constructor
    return (
        e === void 0
            ? (r = We(n, n.e <= o.toExpNeg || n.e >= o.toExpPos))
            : (Se(e, 1, wt),
              t === void 0 ? (t = o.rounding) : Se(t, 0, 8),
              (n = D(new o(n), e, t)),
              (r = We(n, e <= n.e || n.e <= o.toExpNeg, e))),
        n.isNeg() && !n.isZero() ? '-' + r : r
    )
}
A.toSignificantDigits = A.toSD = function (e, t) {
    var r = this,
        n = r.constructor
    return (
        e === void 0
            ? ((e = n.precision), (t = n.rounding))
            : (Se(e, 1, wt), t === void 0 ? (t = n.rounding) : Se(t, 0, 8)),
        D(new n(r), e, t)
    )
}
A.toString = function () {
    var e = this,
        t = e.constructor,
        r = We(e, e.e <= t.toExpNeg || e.e >= t.toExpPos)
    return e.isNeg() && !e.isZero() ? '-' + r : r
}
A.truncated = A.trunc = function () {
    return D(new this.constructor(this), this.e + 1, 1)
}
A.valueOf = A.toJSON = function () {
    var e = this,
        t = e.constructor,
        r = We(e, e.e <= t.toExpNeg || e.e >= t.toExpPos)
    return e.isNeg() ? '-' + r : r
}
function he(e) {
    var t,
        r,
        n,
        o = e.length - 1,
        i = '',
        s = e[0]
    if (o > 0) {
        for (i += s, t = 1; t < o; t++)
            (n = e[t] + ''), (r = L - n.length), r && (i += yt(r)), (i += n)
        ;(s = e[t]), (n = s + ''), (r = L - n.length), r && (i += yt(r))
    } else if (s === 0) return '0'
    for (; s % 10 === 0; ) s /= 10
    return i + s
}
function Se(e, t, r) {
    if (e !== ~~e || e < t || e > r) throw Error(bt + e)
}
function kr(e, t, r, n) {
    var o, i, s, a
    for (i = e[0]; i >= 10; i /= 10) --t
    return (
        --t < 0
            ? ((t += L), (o = 0))
            : ((o = Math.ceil((t + 1) / L)), (t %= L)),
        (i = ie(10, L - t)),
        (a = e[o] % i | 0),
        n == null
            ? t < 3
                ? (t == 0 ? (a = (a / 100) | 0) : t == 1 && (a = (a / 10) | 0),
                  (s =
                      (r < 4 && a == 99999) ||
                      (r > 3 && a == 49999) ||
                      a == 5e4 ||
                      a == 0))
                : (s =
                      (((r < 4 && a + 1 == i) || (r > 3 && a + 1 == i / 2)) &&
                          ((e[o + 1] / i / 100) | 0) == ie(10, t - 2) - 1) ||
                      ((a == i / 2 || a == 0) &&
                          ((e[o + 1] / i / 100) | 0) == 0))
            : t < 4
              ? (t == 0
                    ? (a = (a / 1e3) | 0)
                    : t == 1
                      ? (a = (a / 100) | 0)
                      : t == 2 && (a = (a / 10) | 0),
                (s = ((n || r < 4) && a == 9999) || (!n && r > 3 && a == 4999)))
              : (s =
                    (((n || r < 4) && a + 1 == i) ||
                        (!n && r > 3 && a + 1 == i / 2)) &&
                    ((e[o + 1] / i / 1e3) | 0) == ie(10, t - 3) - 1),
        s
    )
}
function Nn(e, t, r) {
    for (var n, o = [0], i, s = 0, a = e.length; s < a; ) {
        for (i = o.length; i--; ) o[i] *= t
        for (o[0] += ci.indexOf(e.charAt(s++)), n = 0; n < o.length; n++)
            o[n] > r - 1 &&
                (o[n + 1] === void 0 && (o[n + 1] = 0),
                (o[n + 1] += (o[n] / r) | 0),
                (o[n] %= r))
    }
    return o.reverse()
}
function Hp(e, t) {
    var r, n, o
    if (t.isZero()) return t
    ;(n = t.d.length),
        n < 32
            ? ((r = Math.ceil(n / 3)), (o = (1 / qn(4, r)).toString()))
            : ((r = 16), (o = '2.3283064365386962890625e-10')),
        (e.precision += r),
        (t = or(e, 1, t.times(o), new e(1)))
    for (var i = r; i--; ) {
        var s = t.times(t)
        t = s.times(s).minus(s).times(8).plus(1)
    }
    return (e.precision -= r), t
}
var H = (function () {
    function e(n, o, i) {
        var s,
            a = 0,
            u = n.length
        for (n = n.slice(); u--; )
            (s = n[u] * o + a), (n[u] = s % i | 0), (a = (s / i) | 0)
        return a && n.unshift(a), n
    }
    function t(n, o, i, s) {
        var a, u
        if (i != s) u = i > s ? 1 : -1
        else
            for (a = u = 0; a < i; a++)
                if (n[a] != o[a]) {
                    u = n[a] > o[a] ? 1 : -1
                    break
                }
        return u
    }
    function r(n, o, i, s) {
        for (var a = 0; i--; )
            (n[i] -= a), (a = n[i] < o[i] ? 1 : 0), (n[i] = a * s + n[i] - o[i])
        for (; !n[0] && n.length > 1; ) n.shift()
    }
    return function (n, o, i, s, a, u) {
        var l,
            c,
            g,
            y,
            P,
            v,
            E,
            T,
            M,
            O,
            S,
            R,
            $,
            q,
            Ne,
            W,
            re,
            Oe,
            ne,
            Ie,
            st = n.constructor,
            J = n.s == o.s ? 1 : -1,
            Q = n.d,
            F = o.d
        if (!Q || !Q[0] || !F || !F[0])
            return new st(
                !n.s || !o.s || (Q ? F && Q[0] == F[0] : !F)
                    ? NaN
                    : (Q && Q[0] == 0) || !F
                      ? J * 0
                      : J / 0
            )
        for (
            u
                ? ((P = 1), (c = n.e - o.e))
                : ((u = $e), (P = L), (c = xe(n.e / P) - xe(o.e / P))),
                ne = F.length,
                re = Q.length,
                M = new st(J),
                O = M.d = [],
                g = 0;
            F[g] == (Q[g] || 0);
            g++
        );
        if (
            (F[g] > (Q[g] || 0) && c--,
            i == null
                ? ((q = i = st.precision), (s = st.rounding))
                : a
                  ? (q = i + (n.e - o.e) + 1)
                  : (q = i),
            q < 0)
        )
            O.push(1), (v = !0)
        else {
            if (((q = (q / P + 2) | 0), (g = 0), ne == 1)) {
                for (y = 0, F = F[0], q++; (g < re || y) && q--; g++)
                    (Ne = y * u + (Q[g] || 0)),
                        (O[g] = (Ne / F) | 0),
                        (y = Ne % F | 0)
                v = y || g < re
            } else {
                for (
                    y = (u / (F[0] + 1)) | 0,
                        y > 1 &&
                            ((F = e(F, y, u)),
                            (Q = e(Q, y, u)),
                            (ne = F.length),
                            (re = Q.length)),
                        W = ne,
                        S = Q.slice(0, ne),
                        R = S.length;
                    R < ne;

                )
                    S[R++] = 0
                ;(Ie = F.slice()),
                    Ie.unshift(0),
                    (Oe = F[0]),
                    F[1] >= u / 2 && ++Oe
                do
                    (y = 0),
                        (l = t(F, S, ne, R)),
                        l < 0
                            ? (($ = S[0]),
                              ne != R && ($ = $ * u + (S[1] || 0)),
                              (y = ($ / Oe) | 0),
                              y > 1
                                  ? (y >= u && (y = u - 1),
                                    (E = e(F, y, u)),
                                    (T = E.length),
                                    (R = S.length),
                                    (l = t(E, S, T, R)),
                                    l == 1 &&
                                        (y--, r(E, ne < T ? Ie : F, T, u)))
                                  : (y == 0 && (l = y = 1), (E = F.slice())),
                              (T = E.length),
                              T < R && E.unshift(0),
                              r(S, E, R, u),
                              l == -1 &&
                                  ((R = S.length),
                                  (l = t(F, S, ne, R)),
                                  l < 1 && (y++, r(S, ne < R ? Ie : F, R, u))),
                              (R = S.length))
                            : l === 0 && (y++, (S = [0])),
                        (O[g++] = y),
                        l && S[0]
                            ? (S[R++] = Q[W] || 0)
                            : ((S = [Q[W]]), (R = 1))
                while ((W++ < re || S[0] !== void 0) && q--)
                v = S[0] !== void 0
            }
            O[0] || O.shift()
        }
        if (P == 1) (M.e = c), (Ua = v)
        else {
            for (g = 1, y = O[0]; y >= 10; y /= 10) g++
            ;(M.e = g + c * P - 1), D(M, a ? i + M.e + 1 : i, s, v)
        }
        return M
    }
})()
function D(e, t, r, n) {
    var o,
        i,
        s,
        a,
        u,
        l,
        c,
        g,
        y,
        P = e.constructor
    e: if (t != null) {
        if (((g = e.d), !g)) return e
        for (o = 1, a = g[0]; a >= 10; a /= 10) o++
        if (((i = t - o), i < 0))
            (i += L),
                (s = t),
                (c = g[(y = 0)]),
                (u = (c / ie(10, o - s - 1)) % 10 | 0)
        else if (((y = Math.ceil((i + 1) / L)), (a = g.length), y >= a))
            if (n) {
                for (; a++ <= y; ) g.push(0)
                ;(c = u = 0), (o = 1), (i %= L), (s = i - L + 1)
            } else break e
        else {
            for (c = a = g[y], o = 1; a >= 10; a /= 10) o++
            ;(i %= L),
                (s = i - L + o),
                (u = s < 0 ? 0 : (c / ie(10, o - s - 1)) % 10 | 0)
        }
        if (
            ((n =
                n ||
                t < 0 ||
                g[y + 1] !== void 0 ||
                (s < 0 ? c : c % ie(10, o - s - 1))),
            (l =
                r < 4
                    ? (u || n) && (r == 0 || r == (e.s < 0 ? 3 : 2))
                    : u > 5 ||
                      (u == 5 &&
                          (r == 4 ||
                              n ||
                              (r == 6 &&
                                  (i > 0
                                      ? s > 0
                                          ? c / ie(10, o - s)
                                          : 0
                                      : g[y - 1]) %
                                      10 &
                                      1) ||
                              r == (e.s < 0 ? 8 : 7)))),
            t < 1 || !g[0])
        )
            return (
                (g.length = 0),
                l
                    ? ((t -= e.e + 1),
                      (g[0] = ie(10, (L - (t % L)) % L)),
                      (e.e = -t || 0))
                    : (g[0] = e.e = 0),
                e
            )
        if (
            (i == 0
                ? ((g.length = y), (a = 1), y--)
                : ((g.length = y + 1),
                  (a = ie(10, L - i)),
                  (g[y] =
                      s > 0 ? ((c / ie(10, o - s)) % ie(10, s) | 0) * a : 0)),
            l)
        )
            for (;;)
                if (y == 0) {
                    for (i = 1, s = g[0]; s >= 10; s /= 10) i++
                    for (s = g[0] += a, a = 1; s >= 10; s /= 10) a++
                    i != a && (e.e++, g[0] == $e && (g[0] = 1))
                    break
                } else {
                    if (((g[y] += a), g[y] != $e)) break
                    ;(g[y--] = 0), (a = 1)
                }
        for (i = g.length; g[--i] === 0; ) g.pop()
    }
    return (
        j &&
            (e.e > P.maxE
                ? ((e.d = null), (e.e = NaN))
                : e.e < P.minE && ((e.e = 0), (e.d = [0]))),
        e
    )
}
function We(e, t, r) {
    if (!e.isFinite()) return Wa(e)
    var n,
        o = e.e,
        i = he(e.d),
        s = i.length
    return (
        t
            ? (r && (n = r - s) > 0
                  ? (i = i.charAt(0) + '.' + i.slice(1) + yt(n))
                  : s > 1 && (i = i.charAt(0) + '.' + i.slice(1)),
              (i = i + (e.e < 0 ? 'e' : 'e+') + e.e))
            : o < 0
              ? ((i = '0.' + yt(-o - 1) + i),
                r && (n = r - s) > 0 && (i += yt(n)))
              : o >= s
                ? ((i += yt(o + 1 - s)),
                  r && (n = r - o - 1) > 0 && (i = i + '.' + yt(n)))
                : ((n = o + 1) < s && (i = i.slice(0, n) + '.' + i.slice(n)),
                  r &&
                      (n = r - s) > 0 &&
                      (o + 1 === s && (i += '.'), (i += yt(n)))),
        i
    )
}
function $n(e, t) {
    var r = e[0]
    for (t *= L; r >= 10; r /= 10) t++
    return t
}
function jn(e, t, r) {
    if (t > Wp) throw ((j = !0), r && (e.precision = r), Error($a))
    return D(new e(Ln), t, 1, !0)
}
function Ue(e, t, r) {
    if (t > fi) throw Error($a)
    return D(new e(Bn), t, r, !0)
}
function Qa(e) {
    var t = e.length - 1,
        r = t * L + 1
    if (((t = e[t]), t)) {
        for (; t % 10 == 0; t /= 10) r--
        for (t = e[0]; t >= 10; t /= 10) r++
    }
    return r
}
function yt(e) {
    for (var t = ''; e--; ) t += '0'
    return t
}
function Ja(e, t, r, n) {
    var o,
        i = new e(1),
        s = Math.ceil(n / L + 4)
    for (j = !1; ; ) {
        if (
            (r % 2 && ((i = i.times(t)), Ba(i.d, s) && (o = !0)),
            (r = xe(r / 2)),
            r === 0)
        ) {
            ;(r = i.d.length - 1), o && i.d[r] === 0 && ++i.d[r]
            break
        }
        ;(t = t.times(t)), Ba(t.d, s)
    }
    return (j = !0), i
}
function La(e) {
    return e.d[e.d.length - 1] & 1
}
function Ga(e, t, r) {
    for (var n, o = new e(t[0]), i = 0; ++i < t.length; )
        if (((n = new e(t[i])), n.s)) o[r](n) && (o = n)
        else {
            o = n
            break
        }
    return o
}
function di(e, t) {
    var r,
        n,
        o,
        i,
        s,
        a,
        u,
        l = 0,
        c = 0,
        g = 0,
        y = e.constructor,
        P = y.rounding,
        v = y.precision
    if (!e.d || !e.d[0] || e.e > 17)
        return new y(
            e.d
                ? e.d[0]
                    ? e.s < 0
                        ? 0
                        : 1 / 0
                    : 1
                : e.s
                  ? e.s < 0
                      ? 0
                      : e
                  : NaN
        )
    for (
        t == null ? ((j = !1), (u = v)) : (u = t), a = new y(0.03125);
        e.e > -2;

    )
        (e = e.times(a)), (g += 5)
    for (
        n = ((Math.log(ie(2, g)) / Math.LN10) * 2 + 5) | 0,
            u += n,
            r = i = s = new y(1),
            y.precision = u;
        ;

    ) {
        if (
            ((i = D(i.times(e), u, 1)),
            (r = r.times(++c)),
            (a = s.plus(H(i, r, u, 1))),
            he(a.d).slice(0, u) === he(s.d).slice(0, u))
        ) {
            for (o = g; o--; ) s = D(s.times(s), u, 1)
            if (t == null)
                if (l < 3 && kr(s.d, u - n, P, l))
                    (y.precision = u += 10),
                        (r = i = a = new y(1)),
                        (c = 0),
                        l++
                else return D(s, (y.precision = v), P, (j = !0))
            else return (y.precision = v), s
        }
        s = a
    }
}
function ht(e, t) {
    var r,
        n,
        o,
        i,
        s,
        a,
        u,
        l,
        c,
        g,
        y,
        P = 1,
        v = 10,
        E = e,
        T = E.d,
        M = E.constructor,
        O = M.rounding,
        S = M.precision
    if (E.s < 0 || !T || !T[0] || (!E.e && T[0] == 1 && T.length == 1))
        return new M(T && !T[0] ? -1 / 0 : E.s != 1 ? NaN : T ? 0 : E)
    if (
        (t == null ? ((j = !1), (c = S)) : (c = t),
        (M.precision = c += v),
        (r = he(T)),
        (n = r.charAt(0)),
        Math.abs((i = E.e)) < 15e14)
    ) {
        for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
            (E = E.times(e)), (r = he(E.d)), (n = r.charAt(0)), P++
        ;(i = E.e),
            n > 1
                ? ((E = new M('0.' + r)), i++)
                : (E = new M(n + '.' + r.slice(1)))
    } else
        return (
            (l = jn(M, c + 2, S).times(i + '')),
            (E = ht(new M(n + '.' + r.slice(1)), c - v).plus(l)),
            (M.precision = S),
            t == null ? D(E, S, O, (j = !0)) : E
        )
    for (
        g = E,
            u = s = E = H(E.minus(1), E.plus(1), c, 1),
            y = D(E.times(E), c, 1),
            o = 3;
        ;

    ) {
        if (
            ((s = D(s.times(y), c, 1)),
            (l = u.plus(H(s, new M(o), c, 1))),
            he(l.d).slice(0, c) === he(u.d).slice(0, c))
        )
            if (
                ((u = u.times(2)),
                i !== 0 && (u = u.plus(jn(M, c + 2, S).times(i + ''))),
                (u = H(u, new M(P), c, 1)),
                t == null)
            )
                if (kr(u.d, c - v, O, a))
                    (M.precision = c += v),
                        (l = s = E = H(g.minus(1), g.plus(1), c, 1)),
                        (y = D(E.times(E), c, 1)),
                        (o = a = 1)
                else return D(u, (M.precision = S), O, (j = !0))
            else return (M.precision = S), u
        ;(u = l), (o += 2)
    }
}
function Wa(e) {
    return String((e.s * e.s) / 0)
}
function mi(e, t) {
    var r, n, o
    for (
        (r = t.indexOf('.')) > -1 && (t = t.replace('.', '')),
            (n = t.search(/e/i)) > 0
                ? (r < 0 && (r = n),
                  (r += +t.slice(n + 1)),
                  (t = t.substring(0, n)))
                : r < 0 && (r = t.length),
            n = 0;
        t.charCodeAt(n) === 48;
        n++
    );
    for (o = t.length; t.charCodeAt(o - 1) === 48; --o);
    if (((t = t.slice(n, o)), t)) {
        if (
            ((o -= n),
            (e.e = r = r - n - 1),
            (e.d = []),
            (n = (r + 1) % L),
            r < 0 && (n += L),
            n < o)
        ) {
            for (n && e.d.push(+t.slice(0, n)), o -= L; n < o; )
                e.d.push(+t.slice(n, (n += L)))
            ;(t = t.slice(n)), (n = L - t.length)
        } else n -= o
        for (; n--; ) t += '0'
        e.d.push(+t),
            j &&
                (e.e > e.constructor.maxE
                    ? ((e.d = null), (e.e = NaN))
                    : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])))
    } else (e.e = 0), (e.d = [0])
    return e
}
function zp(e, t) {
    var r, n, o, i, s, a, u, l, c
    if (t.indexOf('_') > -1) {
        if (((t = t.replace(/(\d)_(?=\d)/g, '$1')), Ka.test(t))) return mi(e, t)
    } else if (t === 'Infinity' || t === 'NaN')
        return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e
    if (Qp.test(t)) (r = 16), (t = t.toLowerCase())
    else if (Kp.test(t)) r = 2
    else if (Jp.test(t)) r = 8
    else throw Error(bt + t)
    for (
        i = t.search(/p/i),
            i > 0
                ? ((u = +t.slice(i + 1)), (t = t.substring(2, i)))
                : (t = t.slice(2)),
            i = t.indexOf('.'),
            s = i >= 0,
            n = e.constructor,
            s &&
                ((t = t.replace('.', '')),
                (a = t.length),
                (i = a - i),
                (o = Ja(n, new n(r), i, i * 2))),
            l = Nn(t, r, $e),
            c = l.length - 1,
            i = c;
        l[i] === 0;
        --i
    )
        l.pop()
    return i < 0
        ? new n(e.s * 0)
        : ((e.e = $n(l, c)),
          (e.d = l),
          (j = !1),
          s && (e = H(e, o, a * 4)),
          u && (e = e.times(Math.abs(u) < 54 ? ie(2, u) : Ft.pow(2, u))),
          (j = !0),
          e)
}
function Yp(e, t) {
    var r,
        n = t.d.length
    if (n < 3) return t.isZero() ? t : or(e, 2, t, t)
    ;(r = 1.4 * Math.sqrt(n)),
        (r = r > 16 ? 16 : r | 0),
        (t = t.times(1 / qn(5, r))),
        (t = or(e, 2, t, t))
    for (var o, i = new e(5), s = new e(16), a = new e(20); r--; )
        (o = t.times(t)), (t = t.times(i.plus(o.times(s.times(o).minus(a)))))
    return t
}
function or(e, t, r, n, o) {
    var i,
        s,
        a,
        u,
        l = 1,
        c = e.precision,
        g = Math.ceil(c / L)
    for (j = !1, u = r.times(r), a = new e(n); ; ) {
        if (
            ((s = H(a.times(u), new e(t++ * t++), c, 1)),
            (a = o ? n.plus(s) : n.minus(s)),
            (n = H(s.times(u), new e(t++ * t++), c, 1)),
            (s = a.plus(n)),
            s.d[g] !== void 0)
        ) {
            for (i = g; s.d[i] === a.d[i] && i--; );
            if (i == -1) break
        }
        ;(i = a), (a = n), (n = s), (s = i), l++
    }
    return (j = !0), (s.d.length = g + 1), s
}
function qn(e, t) {
    for (var r = e; --t; ) r *= e
    return r
}
function Ha(e, t) {
    var r,
        n = t.s < 0,
        o = Ue(e, e.precision, 1),
        i = o.times(0.5)
    if (((t = t.abs()), t.lte(i))) return (tt = n ? 4 : 1), t
    if (((r = t.divToInt(o)), r.isZero())) tt = n ? 3 : 2
    else {
        if (((t = t.minus(r.times(o))), t.lte(i)))
            return (tt = La(r) ? (n ? 2 : 3) : n ? 4 : 1), t
        tt = La(r) ? (n ? 1 : 4) : n ? 3 : 2
    }
    return t.minus(o).abs()
}
function gi(e, t, r, n) {
    var o,
        i,
        s,
        a,
        u,
        l,
        c,
        g,
        y,
        P = e.constructor,
        v = r !== void 0
    if (
        (v
            ? (Se(r, 1, wt), n === void 0 ? (n = P.rounding) : Se(n, 0, 8))
            : ((r = P.precision), (n = P.rounding)),
        !e.isFinite())
    )
        c = Wa(e)
    else {
        for (
            c = We(e),
                s = c.indexOf('.'),
                v
                    ? ((o = 2),
                      t == 16 ? (r = r * 4 - 3) : t == 8 && (r = r * 3 - 2))
                    : (o = t),
                s >= 0 &&
                    ((c = c.replace('.', '')),
                    (y = new P(1)),
                    (y.e = c.length - s),
                    (y.d = Nn(We(y), 10, o)),
                    (y.e = y.d.length)),
                g = Nn(c, 10, o),
                i = u = g.length;
            g[--u] == 0;

        )
            g.pop()
        if (!g[0]) c = v ? '0p+0' : '0'
        else {
            if (
                (s < 0
                    ? i--
                    : ((e = new P(e)),
                      (e.d = g),
                      (e.e = i),
                      (e = H(e, y, r, n, 0, o)),
                      (g = e.d),
                      (i = e.e),
                      (l = Ua)),
                (s = g[r]),
                (a = o / 2),
                (l = l || g[r + 1] !== void 0),
                (l =
                    n < 4
                        ? (s !== void 0 || l) &&
                          (n === 0 || n === (e.s < 0 ? 3 : 2))
                        : s > a ||
                          (s === a &&
                              (n === 4 ||
                                  l ||
                                  (n === 6 && g[r - 1] & 1) ||
                                  n === (e.s < 0 ? 8 : 7)))),
                (g.length = r),
                l)
            )
                for (; ++g[--r] > o - 1; ) (g[r] = 0), r || (++i, g.unshift(1))
            for (u = g.length; !g[u - 1]; --u);
            for (s = 0, c = ''; s < u; s++) c += ci.charAt(g[s])
            if (v) {
                if (u > 1)
                    if (t == 16 || t == 8) {
                        for (s = t == 16 ? 4 : 3, --u; u % s; u++) c += '0'
                        for (g = Nn(c, o, t), u = g.length; !g[u - 1]; --u);
                        for (s = 1, c = '1.'; s < u; s++) c += ci.charAt(g[s])
                    } else c = c.charAt(0) + '.' + c.slice(1)
                c = c + (i < 0 ? 'p' : 'p+') + i
            } else if (i < 0) {
                for (; ++i; ) c = '0' + c
                c = '0.' + c
            } else if (++i > u) for (i -= u; i--; ) c += '0'
            else i < u && (c = c.slice(0, i) + '.' + c.slice(i))
        }
        c = (t == 16 ? '0x' : t == 2 ? '0b' : t == 8 ? '0o' : '') + c
    }
    return e.s < 0 ? '-' + c : c
}
function Ba(e, t) {
    if (e.length > t) return (e.length = t), !0
}
function Zp(e) {
    return new this(e).abs()
}
function Xp(e) {
    return new this(e).acos()
}
function ef(e) {
    return new this(e).acosh()
}
function tf(e, t) {
    return new this(e).plus(t)
}
function rf(e) {
    return new this(e).asin()
}
function nf(e) {
    return new this(e).asinh()
}
function of(e) {
    return new this(e).atan()
}
function sf(e) {
    return new this(e).atanh()
}
function af(e, t) {
    ;(e = new this(e)), (t = new this(t))
    var r,
        n = this.precision,
        o = this.rounding,
        i = n + 4
    return (
        !e.s || !t.s
            ? (r = new this(NaN))
            : !e.d && !t.d
              ? ((r = Ue(this, i, 1).times(t.s > 0 ? 0.25 : 0.75)), (r.s = e.s))
              : !t.d || e.isZero()
                ? ((r = t.s < 0 ? Ue(this, n, o) : new this(0)), (r.s = e.s))
                : !e.d || t.isZero()
                  ? ((r = Ue(this, i, 1).times(0.5)), (r.s = e.s))
                  : t.s < 0
                    ? ((this.precision = i),
                      (this.rounding = 1),
                      (r = this.atan(H(e, t, i, 1))),
                      (t = Ue(this, i, 1)),
                      (this.precision = n),
                      (this.rounding = o),
                      (r = e.s < 0 ? r.minus(t) : r.plus(t)))
                    : (r = this.atan(H(e, t, i, 1))),
        r
    )
}
function uf(e) {
    return new this(e).cbrt()
}
function lf(e) {
    return D((e = new this(e)), e.e + 1, 2)
}
function cf(e, t, r) {
    return new this(e).clamp(t, r)
}
function pf(e) {
    if (!e || typeof e != 'object') throw Error(Un + 'Object expected')
    var t,
        r,
        n,
        o = e.defaults === !0,
        i = [
            'precision',
            1,
            wt,
            'rounding',
            0,
            8,
            'toExpNeg',
            -nr,
            0,
            'toExpPos',
            0,
            nr,
            'maxE',
            0,
            nr,
            'minE',
            -nr,
            0,
            'modulo',
            0,
            9,
        ]
    for (t = 0; t < i.length; t += 3)
        if (((r = i[t]), o && (this[r] = pi[r]), (n = e[r]) !== void 0))
            if (xe(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n
            else throw Error(bt + r + ': ' + n)
    if (((r = 'crypto'), o && (this[r] = pi[r]), (n = e[r]) !== void 0))
        if (n === !0 || n === !1 || n === 0 || n === 1)
            if (n)
                if (
                    typeof crypto != 'undefined' &&
                    crypto &&
                    (crypto.getRandomValues || crypto.randomBytes)
                )
                    this[r] = !0
                else throw Error(qa)
            else this[r] = !1
        else throw Error(bt + r + ': ' + n)
    return this
}
function ff(e) {
    return new this(e).cos()
}
function df(e) {
    return new this(e).cosh()
}
function za(e) {
    var t, r, n
    function o(i) {
        var s,
            a,
            u,
            l = this
        if (!(l instanceof o)) return new o(i)
        if (((l.constructor = o), ja(i))) {
            ;(l.s = i.s),
                j
                    ? !i.d || i.e > o.maxE
                        ? ((l.e = NaN), (l.d = null))
                        : i.e < o.minE
                          ? ((l.e = 0), (l.d = [0]))
                          : ((l.e = i.e), (l.d = i.d.slice()))
                    : ((l.e = i.e), (l.d = i.d ? i.d.slice() : i.d))
            return
        }
        if (((u = typeof i), u === 'number')) {
            if (i === 0) {
                ;(l.s = 1 / i < 0 ? -1 : 1), (l.e = 0), (l.d = [0])
                return
            }
            if (
                (i < 0 ? ((i = -i), (l.s = -1)) : (l.s = 1),
                i === ~~i && i < 1e7)
            ) {
                for (s = 0, a = i; a >= 10; a /= 10) s++
                j
                    ? s > o.maxE
                        ? ((l.e = NaN), (l.d = null))
                        : s < o.minE
                          ? ((l.e = 0), (l.d = [0]))
                          : ((l.e = s), (l.d = [i]))
                    : ((l.e = s), (l.d = [i]))
                return
            } else if (i * 0 !== 0) {
                i || (l.s = NaN), (l.e = NaN), (l.d = null)
                return
            }
            return mi(l, i.toString())
        } else if (u !== 'string') throw Error(bt + i)
        return (
            (a = i.charCodeAt(0)) === 45
                ? ((i = i.slice(1)), (l.s = -1))
                : (a === 43 && (i = i.slice(1)), (l.s = 1)),
            Ka.test(i) ? mi(l, i) : zp(l, i)
        )
    }
    if (
        ((o.prototype = A),
        (o.ROUND_UP = 0),
        (o.ROUND_DOWN = 1),
        (o.ROUND_CEIL = 2),
        (o.ROUND_FLOOR = 3),
        (o.ROUND_HALF_UP = 4),
        (o.ROUND_HALF_DOWN = 5),
        (o.ROUND_HALF_EVEN = 6),
        (o.ROUND_HALF_CEIL = 7),
        (o.ROUND_HALF_FLOOR = 8),
        (o.EUCLID = 9),
        (o.config = o.set = pf),
        (o.clone = za),
        (o.isDecimal = ja),
        (o.abs = Zp),
        (o.acos = Xp),
        (o.acosh = ef),
        (o.add = tf),
        (o.asin = rf),
        (o.asinh = nf),
        (o.atan = of),
        (o.atanh = sf),
        (o.atan2 = af),
        (o.cbrt = uf),
        (o.ceil = lf),
        (o.clamp = cf),
        (o.cos = ff),
        (o.cosh = df),
        (o.div = mf),
        (o.exp = gf),
        (o.floor = yf),
        (o.hypot = hf),
        (o.ln = bf),
        (o.log = wf),
        (o.log10 = Ef),
        (o.log2 = xf),
        (o.max = Pf),
        (o.min = vf),
        (o.mod = _f),
        (o.mul = Tf),
        (o.pow = Af),
        (o.random = Cf),
        (o.round = Sf),
        (o.sign = Mf),
        (o.sin = Rf),
        (o.sinh = Of),
        (o.sqrt = If),
        (o.sub = kf),
        (o.sum = Ff),
        (o.tan = Df),
        (o.tanh = Nf),
        (o.trunc = Lf),
        e === void 0 && (e = {}),
        e && e.defaults !== !0)
    )
        for (
            n = [
                'precision',
                'rounding',
                'toExpNeg',
                'toExpPos',
                'maxE',
                'minE',
                'modulo',
                'crypto',
            ],
                t = 0;
            t < n.length;

        )
            e.hasOwnProperty((r = n[t++])) || (e[r] = this[r])
    return o.config(e), o
}
function mf(e, t) {
    return new this(e).div(t)
}
function gf(e) {
    return new this(e).exp()
}
function yf(e) {
    return D((e = new this(e)), e.e + 1, 3)
}
function hf() {
    var e,
        t,
        r = new this(0)
    for (j = !1, e = 0; e < arguments.length; )
        if (((t = new this(arguments[e++])), t.d))
            r.d && (r = r.plus(t.times(t)))
        else {
            if (t.s) return (j = !0), new this(1 / 0)
            r = t
        }
    return (j = !0), r.sqrt()
}
function ja(e) {
    return e instanceof Ft || (e && e.toStringTag === Va) || !1
}
function bf(e) {
    return new this(e).ln()
}
function wf(e, t) {
    return new this(e).log(t)
}
function xf(e) {
    return new this(e).log(2)
}
function Ef(e) {
    return new this(e).log(10)
}
function Pf() {
    return Ga(this, arguments, 'lt')
}
function vf() {
    return Ga(this, arguments, 'gt')
}
function _f(e, t) {
    return new this(e).mod(t)
}
function Tf(e, t) {
    return new this(e).mul(t)
}
function Af(e, t) {
    return new this(e).pow(t)
}
function Cf(e) {
    var t,
        r,
        n,
        o,
        i = 0,
        s = new this(1),
        a = []
    if (
        (e === void 0 ? (e = this.precision) : Se(e, 1, wt),
        (n = Math.ceil(e / L)),
        this.crypto)
    )
        if (crypto.getRandomValues)
            for (t = crypto.getRandomValues(new Uint32Array(n)); i < n; )
                (o = t[i]),
                    o >= 429e7
                        ? (t[i] = crypto.getRandomValues(new Uint32Array(1))[0])
                        : (a[i++] = o % 1e7)
        else if (crypto.randomBytes) {
            for (t = crypto.randomBytes((n *= 4)); i < n; )
                (o =
                    t[i] +
                    (t[i + 1] << 8) +
                    (t[i + 2] << 16) +
                    ((t[i + 3] & 127) << 24)),
                    o >= 214e7
                        ? crypto.randomBytes(4).copy(t, i)
                        : (a.push(o % 1e7), (i += 4))
            i = n / 4
        } else throw Error(qa)
    else for (; i < n; ) a[i++] = (Math.random() * 1e7) | 0
    for (
        n = a[--i],
            e %= L,
            n && e && ((o = ie(10, L - e)), (a[i] = ((n / o) | 0) * o));
        a[i] === 0;
        i--
    )
        a.pop()
    if (i < 0) (r = 0), (a = [0])
    else {
        for (r = -1; a[0] === 0; r -= L) a.shift()
        for (n = 1, o = a[0]; o >= 10; o /= 10) n++
        n < L && (r -= L - n)
    }
    return (s.e = r), (s.d = a), s
}
function Sf(e) {
    return D((e = new this(e)), e.e + 1, this.rounding)
}
function Mf(e) {
    return (e = new this(e)), e.d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN
}
function Rf(e) {
    return new this(e).sin()
}
function Of(e) {
    return new this(e).sinh()
}
function If(e) {
    return new this(e).sqrt()
}
function kf(e, t) {
    return new this(e).sub(t)
}
function Ff() {
    var e = 0,
        t = arguments,
        r = new this(t[e])
    for (j = !1; r.s && ++e < t.length; ) r = r.plus(t[e])
    return (j = !0), D(r, this.precision, this.rounding)
}
function Df(e) {
    return new this(e).tan()
}
function Nf(e) {
    return new this(e).tanh()
}
function Lf(e) {
    return D((e = new this(e)), e.e + 1, 1)
}
A[Symbol.for('nodejs.util.inspect.custom')] = A.toString
A[Symbol.toStringTag] = 'Decimal'
var Ft = (A.constructor = za(pi))
Ln = new Ft(Ln)
Bn = new Ft(Bn)
var rt = Ft
function ir(e) {
    return Ft.isDecimal(e)
        ? !0
        : e !== null &&
              typeof e == 'object' &&
              typeof e.s == 'number' &&
              typeof e.e == 'number' &&
              typeof e.toFixed == 'function' &&
              Array.isArray(e.d)
}
m()
p()
f()
d()
var Fr = class {
    constructor(t, r, n, o, i) {
        ;(this.modelName = t),
            (this.name = r),
            (this.typeName = n),
            (this.isList = o),
            (this.isEnum = i)
    }
    _toGraphQLInputType() {
        let t = this.isList ? 'List' : '',
            r = this.isEnum ? 'Enum' : ''
        return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`
    }
}
function sr(e) {
    return e instanceof Fr
}
m()
p()
f()
d()
m()
p()
f()
d()
var Vn = class {
    constructor(t) {
        this.value = t
    }
    write(t) {
        t.write(this.value)
    }
    markAsError() {
        this.value.markAsError()
    }
}
m()
p()
f()
d()
var Kn = (e) => e,
    Qn = { bold: Kn, red: Kn, green: Kn, dim: Kn, enabled: !1 },
    Ya = { bold: dt, red: Ht, green: _n, dim: Pn, enabled: !0 },
    ar = {
        write(e) {
            e.writeLine(',')
        },
    }
m()
p()
f()
d()
var He = class {
    constructor(t) {
        this.contents = t
        this.isUnderlined = !1
        this.color = (t) => t
    }
    underline() {
        return (this.isUnderlined = !0), this
    }
    setColor(t) {
        return (this.color = t), this
    }
    write(t) {
        let r = t.getCurrentLineLength()
        t.write(this.color(this.contents)),
            this.isUnderlined &&
                t.afterNextNewline(() => {
                    t.write(' '.repeat(r)).writeLine(
                        this.color('~'.repeat(this.contents.length))
                    )
                })
    }
}
m()
p()
f()
d()
var xt = class {
    constructor() {
        this.hasError = !1
    }
    markAsError() {
        return (this.hasError = !0), this
    }
}
var ur = class extends xt {
    constructor() {
        super(...arguments)
        this.items = []
    }
    addItem(r) {
        return this.items.push(new Vn(r)), this
    }
    getField(r) {
        return this.items[r]
    }
    getPrintWidth() {
        return this.items.length === 0
            ? 2
            : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2
    }
    write(r) {
        if (this.items.length === 0) {
            this.writeEmpty(r)
            return
        }
        this.writeWithItems(r)
    }
    writeEmpty(r) {
        let n = new He('[]')
        this.hasError && n.setColor(r.context.colors.red).underline(),
            r.write(n)
    }
    writeWithItems(r) {
        let { colors: n } = r.context
        r
            .writeLine('[')
            .withIndent(() => r.writeJoined(ar, this.items).newLine())
            .write(']'),
            this.hasError &&
                r.afterNextNewline(() => {
                    r.writeLine(n.red('~'.repeat(this.getPrintWidth())))
                })
    }
}
m()
p()
f()
d()
var Za = ': ',
    Jn = class {
        constructor(t, r) {
            this.name = t
            this.value = r
            this.hasError = !1
        }
        markAsError() {
            this.hasError = !0
        }
        getPrintWidth() {
            return this.name.length + this.value.getPrintWidth() + Za.length
        }
        write(t) {
            let r = new He(this.name)
            this.hasError && r.underline().setColor(t.context.colors.red),
                t.write(r).write(Za).write(this.value)
        }
    }
m()
p()
f()
d()
var ue = class e extends xt {
    constructor() {
        super(...arguments)
        this.fields = {}
        this.suggestions = []
    }
    addField(r) {
        this.fields[r.name] = r
    }
    addSuggestion(r) {
        this.suggestions.push(r)
    }
    getField(r) {
        return this.fields[r]
    }
    getDeepField(r) {
        let [n, ...o] = r,
            i = this.getField(n)
        if (!i) return
        let s = i
        for (let a of o) {
            let u
            if (
                (s.value instanceof e
                    ? (u = s.value.getField(a))
                    : s.value instanceof ur &&
                      (u = s.value.getField(Number(a))),
                !u)
            )
                return
            s = u
        }
        return s
    }
    getDeepFieldValue(r) {
        var n
        return r.length === 0
            ? this
            : (n = this.getDeepField(r)) == null
              ? void 0
              : n.value
    }
    hasField(r) {
        return !!this.getField(r)
    }
    removeAllFields() {
        this.fields = {}
    }
    removeField(r) {
        delete this.fields[r]
    }
    getFields() {
        return this.fields
    }
    isEmpty() {
        return Object.keys(this.fields).length === 0
    }
    getFieldValue(r) {
        var n
        return (n = this.getField(r)) == null ? void 0 : n.value
    }
    getDeepSubSelectionValue(r) {
        let n = this
        for (let o of r) {
            if (!(n instanceof e)) return
            let i = n.getSubSelectionValue(o)
            if (!i) return
            n = i
        }
        return n
    }
    getDeepSelectionParent(r) {
        let n = this.getSelectionParent()
        if (!n) return
        let o = n
        for (let i of r) {
            let s = o.value.getFieldValue(i)
            if (!s || !(s instanceof e)) return
            let a = s.getSelectionParent()
            if (!a) return
            o = a
        }
        return o
    }
    getSelectionParent() {
        let r = this.getField('select')
        if ((r == null ? void 0 : r.value) instanceof e)
            return { kind: 'select', value: r.value }
        let n = this.getField('include')
        if ((n == null ? void 0 : n.value) instanceof e)
            return { kind: 'include', value: n.value }
    }
    getSubSelectionValue(r) {
        var n
        return (n = this.getSelectionParent()) == null
            ? void 0
            : n.value.fields[r].value
    }
    getPrintWidth() {
        let r = Object.values(this.fields)
        return r.length == 0
            ? 2
            : Math.max(...r.map((o) => o.getPrintWidth())) + 2
    }
    write(r) {
        let n = Object.values(this.fields)
        if (n.length === 0 && this.suggestions.length === 0) {
            this.writeEmpty(r)
            return
        }
        this.writeWithContents(r, n)
    }
    writeEmpty(r) {
        let n = new He('{}')
        this.hasError && n.setColor(r.context.colors.red).underline(),
            r.write(n)
    }
    writeWithContents(r, n) {
        r.writeLine('{').withIndent(() => {
            r.writeJoined(ar, [...n, ...this.suggestions]).newLine()
        }),
            r.write('}'),
            this.hasError &&
                r.afterNextNewline(() => {
                    r.writeLine(
                        r.context.colors.red('~'.repeat(this.getPrintWidth()))
                    )
                })
    }
}
m()
p()
f()
d()
var le = class extends xt {
    constructor(r) {
        super()
        this.text = r
    }
    getPrintWidth() {
        return this.text.length
    }
    write(r) {
        let n = new He(this.text)
        this.hasError && n.underline().setColor(r.context.colors.red),
            r.write(n)
    }
}
var yi = class {
    constructor(t) {
        this.errorMessages = []
        this.arguments = t
    }
    write(t) {
        t.write(this.arguments)
    }
    addErrorMessage(t) {
        this.errorMessages.push(t)
    }
    renderAllMessages(t) {
        return this.errorMessages.map((r) => r(t)).join(`
`)
    }
}
function Gn(e) {
    return new yi(Xa(e))
}
function Xa(e) {
    let t = new ue()
    for (let [r, n] of Object.entries(e)) {
        let o = new Jn(r, eu(n))
        t.addField(o)
    }
    return t
}
function eu(e) {
    if (typeof e == 'string') return new le(JSON.stringify(e))
    if (typeof e == 'number' || typeof e == 'boolean') return new le(String(e))
    if (typeof e == 'bigint') return new le(`${e}n`)
    if (e === null) return new le('null')
    if (e === void 0) return new le('undefined')
    if (ir(e)) return new le(`new Prisma.Decimal("${e.toFixed()}")`)
    if (e instanceof Uint8Array)
        return w.Buffer.isBuffer(e)
            ? new le(`Buffer.alloc(${e.byteLength})`)
            : new le(`new Uint8Array(${e.byteLength})`)
    if (e instanceof Date) {
        let t = Dn(e) ? e.toISOString() : 'Invalid Date'
        return new le(`new Date("${t}")`)
    }
    return e instanceof et
        ? new le(`Prisma.${e._getName()}`)
        : sr(e)
          ? new le(`prisma.${Is(e.modelName)}.$fields.${e.name}`)
          : Array.isArray(e)
            ? jf(e)
            : typeof e == 'object'
              ? Xa(e)
              : new le(Object.prototype.toString.call(e))
}
function jf(e) {
    let t = new ur()
    for (let r of e) t.addItem(eu(r))
    return t
}
function tu(e) {
    if (e === void 0) return ''
    let t = Gn(e)
    return new tr(0, { colors: Qn }).write(t).toString()
}
m()
p()
f()
d()
m()
p()
f()
d()
m()
p()
f()
d()
m()
p()
f()
d()
m()
p()
f()
d()
var Dr = '<unknown>'
function ru(e) {
    var t = e.split(`
`)
    return t.reduce(function (r, n) {
        var o = qf(n) || Kf(n) || Gf(n) || Yf(n) || Hf(n)
        return o && r.push(o), r
    }, [])
}
var Uf =
        /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    $f = /\((\S*)(?::(\d+))(?::(\d+))\)/
function qf(e) {
    var t = Uf.exec(e)
    if (!t) return null
    var r = t[2] && t[2].indexOf('native') === 0,
        n = t[2] && t[2].indexOf('eval') === 0,
        o = $f.exec(t[2])
    return (
        n && o != null && ((t[2] = o[1]), (t[3] = o[2]), (t[4] = o[3])),
        {
            file: r ? null : t[2],
            methodName: t[1] || Dr,
            arguments: r ? [t[2]] : [],
            lineNumber: t[3] ? +t[3] : null,
            column: t[4] ? +t[4] : null,
        }
    )
}
var Vf =
    /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
function Kf(e) {
    var t = Vf.exec(e)
    return t
        ? {
              file: t[2],
              methodName: t[1] || Dr,
              arguments: [],
              lineNumber: +t[3],
              column: t[4] ? +t[4] : null,
          }
        : null
}
var Qf =
        /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
    Jf = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
function Gf(e) {
    var t = Qf.exec(e)
    if (!t) return null
    var r = t[3] && t[3].indexOf(' > eval') > -1,
        n = Jf.exec(t[3])
    return (
        r && n != null && ((t[3] = n[1]), (t[4] = n[2]), (t[5] = null)),
        {
            file: t[3],
            methodName: t[1] || Dr,
            arguments: t[2] ? t[2].split(',') : [],
            lineNumber: t[4] ? +t[4] : null,
            column: t[5] ? +t[5] : null,
        }
    )
}
var Wf = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i
function Hf(e) {
    var t = Wf.exec(e)
    return t
        ? {
              file: t[3],
              methodName: t[1] || Dr,
              arguments: [],
              lineNumber: +t[4],
              column: t[5] ? +t[5] : null,
          }
        : null
}
var zf =
    /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i
function Yf(e) {
    var t = zf.exec(e)
    return t
        ? {
              file: t[2],
              methodName: t[1] || Dr,
              arguments: [],
              lineNumber: +t[3],
              column: t[4] ? +t[4] : null,
          }
        : null
}
var hi = class {
        getLocation() {
            return null
        }
    },
    bi = class {
        constructor() {
            this._error = new Error()
        }
        getLocation() {
            let t = this._error.stack
            if (!t) return null
            let n = ru(t).find((o) => {
                if (!o.file) return !1
                let i = Yo(o.file)
                return (
                    i !== '<anonymous>' &&
                    !i.includes('@prisma') &&
                    !i.includes('/packages/client/src/runtime/') &&
                    !i.endsWith('/runtime/binary.js') &&
                    !i.endsWith('/runtime/library.js') &&
                    !i.endsWith('/runtime/edge.js') &&
                    !i.endsWith('/runtime/edge-esm.js') &&
                    !i.startsWith('internal/') &&
                    !o.methodName.includes('new ') &&
                    !o.methodName.includes('getCallSite') &&
                    !o.methodName.includes('Proxy.') &&
                    o.methodName.split('.').length < 4
                )
            })
            return !n || !n.file
                ? null
                : {
                      fileName: n.file,
                      lineNumber: n.lineNumber,
                      columnNumber: n.column,
                  }
        }
    }
function Et(e) {
    return e === 'minimal' ? new hi() : new bi()
}
m()
p()
f()
d()
m()
p()
f()
d()
m()
p()
f()
d()
var nu = { _avg: !0, _count: !0, _sum: !0, _min: !0, _max: !0 }
function lr(e = {}) {
    let t = Xf(e)
    return Object.entries(t).reduce(
        (n, [o, i]) => (
            nu[o] !== void 0 ? (n.select[o] = { select: i }) : (n[o] = i), n
        ),
        { select: {} }
    )
}
function Xf(e = {}) {
    return typeof e._count == 'boolean'
        ? { ...e, _count: { _all: e._count } }
        : e
}
function Wn(e = {}) {
    return (t) => (
        typeof e._count == 'boolean' && (t._count = t._count._all), t
    )
}
function ou(e, t) {
    let r = Wn(e)
    return t({ action: 'aggregate', unpacker: r, argsMapper: lr })(e)
}
m()
p()
f()
d()
function ed(e = {}) {
    let { select: t, ...r } = e
    return typeof t == 'object'
        ? lr({ ...r, _count: t })
        : lr({ ...r, _count: { _all: !0 } })
}
function td(e = {}) {
    return typeof e.select == 'object'
        ? (t) => Wn(e)(t)._count
        : (t) => Wn(e)(t)._count._all
}
function iu(e, t) {
    return t({ action: 'count', unpacker: td(e), argsMapper: ed })(e)
}
m()
p()
f()
d()
function rd(e = {}) {
    let t = lr(e)
    if (Array.isArray(t.by))
        for (let r of t.by) typeof r == 'string' && (t.select[r] = !0)
    else typeof t.by == 'string' && (t.select[t.by] = !0)
    return t
}
function nd(e = {}) {
    return (t) => (
        typeof (e == null ? void 0 : e._count) == 'boolean' &&
            t.forEach((r) => {
                r._count = r._count._all
            }),
        t
    )
}
function su(e, t) {
    return t({ action: 'groupBy', unpacker: nd(e), argsMapper: rd })(e)
}
function au(e, t, r) {
    if (t === 'aggregate') return (n) => ou(n, r)
    if (t === 'count') return (n) => iu(n, r)
    if (t === 'groupBy') return (n) => su(n, r)
}
m()
p()
f()
d()
function uu(e, t) {
    let r = t.fields.filter((o) => !o.relationName),
        n = ri(r, (o) => o.name)
    return new Proxy(
        {},
        {
            get(o, i) {
                if (i in o || typeof i == 'symbol') return o[i]
                let s = n[i]
                if (s) return new Fr(e, i, s.type, s.isList, s.kind === 'enum')
            },
            ...Fn(Object.keys(n)),
        }
    )
}
m()
p()
f()
d()
m()
p()
f()
d()
var lu = (e) => (Array.isArray(e) ? e : e.split('.')),
    wi = (e, t) => lu(t).reduce((r, n) => r && r[n], e),
    cu = (e, t, r) =>
        lu(t).reduceRight(
            (n, o, i, s) => Object.assign({}, wi(e, s.slice(0, i)), { [o]: n }),
            r
        )
function od(e, t) {
    return e === void 0 || t === void 0 ? [] : [...t, 'select', e]
}
function id(e, t, r) {
    return t === void 0 ? (e != null ? e : {}) : cu(t, r, e || !0)
}
function xi(e, t, r, n, o, i) {
    let a = e._runtimeDataModel.models[t].fields.reduce(
        (u, l) => ({ ...u, [l.name]: l }),
        {}
    )
    return (u) => {
        let l = Et(e._errorFormat),
            c = od(n, o),
            g = id(u, i, c),
            y = r({ dataPath: c, callsite: l })(g),
            P = sd(e, t)
        return new Proxy(y, {
            get(v, E) {
                if (!P.includes(E)) return v[E]
                let M = [a[E].type, r, E],
                    O = [c, g]
                return xi(e, ...M, ...O)
            },
            ...Fn([...P, ...Object.getOwnPropertyNames(y)]),
        })
    }
}
function sd(e, t) {
    return e._runtimeDataModel.models[t].fields
        .filter((r) => r.kind === 'object')
        .map((r) => r.name)
}
m()
p()
f()
d()
m()
p()
f()
d()
var gu = ve(Pa())
m()
p()
f()
d()
Wo()
m()
p()
f()
d()
m()
p()
f()
d()
m()
p()
f()
d()
var pu = {
    keyword: mt,
    entity: mt,
    value: (e) => dt(Yt(e)),
    punctuation: Yt,
    directive: mt,
    function: mt,
    variable: (e) => dt(Yt(e)),
    string: (e) => dt(_n(e)),
    boolean: zt,
    number: mt,
    comment: Tn,
}
var ad = (e) => e,
    Hn = {},
    ud = 0,
    U = {
        manual: Hn.Prism && Hn.Prism.manual,
        disableWorkerMessageHandler:
            Hn.Prism && Hn.Prism.disableWorkerMessageHandler,
        util: {
            encode: function (e) {
                if (e instanceof qe) {
                    let t = e
                    return new qe(t.type, U.util.encode(t.content), t.alias)
                } else
                    return Array.isArray(e)
                        ? e.map(U.util.encode)
                        : e
                              .replace(/&/g, '&amp;')
                              .replace(/</g, '&lt;')
                              .replace(/\u00a0/g, ' ')
            },
            type: function (e) {
                return Object.prototype.toString.call(e).slice(8, -1)
            },
            objId: function (e) {
                return (
                    e.__id || Object.defineProperty(e, '__id', { value: ++ud }),
                    e.__id
                )
            },
            clone: function e(t, r) {
                let n,
                    o,
                    i = U.util.type(t)
                switch (((r = r || {}), i)) {
                    case 'Object':
                        if (((o = U.util.objId(t)), r[o])) return r[o]
                        ;(n = {}), (r[o] = n)
                        for (let s in t)
                            t.hasOwnProperty(s) && (n[s] = e(t[s], r))
                        return n
                    case 'Array':
                        return (
                            (o = U.util.objId(t)),
                            r[o]
                                ? r[o]
                                : ((n = []),
                                  (r[o] = n),
                                  t.forEach(function (s, a) {
                                      n[a] = e(s, r)
                                  }),
                                  n)
                        )
                    default:
                        return t
                }
            },
        },
        languages: {
            extend: function (e, t) {
                let r = U.util.clone(U.languages[e])
                for (let n in t) r[n] = t[n]
                return r
            },
            insertBefore: function (e, t, r, n) {
                n = n || U.languages
                let o = n[e],
                    i = {}
                for (let a in o)
                    if (o.hasOwnProperty(a)) {
                        if (a == t)
                            for (let u in r)
                                r.hasOwnProperty(u) && (i[u] = r[u])
                        r.hasOwnProperty(a) || (i[a] = o[a])
                    }
                let s = n[e]
                return (
                    (n[e] = i),
                    U.languages.DFS(U.languages, function (a, u) {
                        u === s && a != e && (this[a] = i)
                    }),
                    i
                )
            },
            DFS: function e(t, r, n, o) {
                o = o || {}
                let i = U.util.objId
                for (let s in t)
                    if (t.hasOwnProperty(s)) {
                        r.call(t, s, t[s], n || s)
                        let a = t[s],
                            u = U.util.type(a)
                        u === 'Object' && !o[i(a)]
                            ? ((o[i(a)] = !0), e(a, r, null, o))
                            : u === 'Array' &&
                              !o[i(a)] &&
                              ((o[i(a)] = !0), e(a, r, s, o))
                    }
            },
        },
        plugins: {},
        highlight: function (e, t, r) {
            let n = { code: e, grammar: t, language: r }
            return (
                U.hooks.run('before-tokenize', n),
                (n.tokens = U.tokenize(n.code, n.grammar)),
                U.hooks.run('after-tokenize', n),
                qe.stringify(U.util.encode(n.tokens), n.language)
            )
        },
        matchGrammar: function (e, t, r, n, o, i, s) {
            for (let E in r) {
                if (!r.hasOwnProperty(E) || !r[E]) continue
                if (E == s) return
                let T = r[E]
                T = U.util.type(T) === 'Array' ? T : [T]
                for (let M = 0; M < T.length; ++M) {
                    let O = T[M],
                        S = O.inside,
                        R = !!O.lookbehind,
                        $ = !!O.greedy,
                        q = 0,
                        Ne = O.alias
                    if ($ && !O.pattern.global) {
                        let W = O.pattern.toString().match(/[imuy]*$/)[0]
                        O.pattern = RegExp(O.pattern.source, W + 'g')
                    }
                    O = O.pattern || O
                    for (
                        let W = n, re = o;
                        W < t.length;
                        re += t[W].length, ++W
                    ) {
                        let Oe = t[W]
                        if (t.length > e.length) return
                        if (Oe instanceof qe) continue
                        if ($ && W != t.length - 1) {
                            O.lastIndex = re
                            var g = O.exec(e)
                            if (!g) break
                            var c = g.index + (R ? g[1].length : 0),
                                y = g.index + g[0].length,
                                a = W,
                                u = re
                            for (
                                let F = t.length;
                                a < F &&
                                (u < y || (!t[a].type && !t[a - 1].greedy));
                                ++a
                            )
                                (u += t[a].length), c >= u && (++W, (re = u))
                            if (t[W] instanceof qe) continue
                            ;(l = a - W), (Oe = e.slice(re, u)), (g.index -= re)
                        } else {
                            O.lastIndex = 0
                            var g = O.exec(Oe),
                                l = 1
                        }
                        if (!g) {
                            if (i) break
                            continue
                        }
                        R && (q = g[1] ? g[1].length : 0)
                        var c = g.index + q,
                            g = g[0].slice(q),
                            y = c + g.length,
                            P = Oe.slice(0, c),
                            v = Oe.slice(y)
                        let ne = [W, l]
                        P && (++W, (re += P.length), ne.push(P))
                        let Ie = new qe(E, S ? U.tokenize(g, S) : g, Ne, g, $)
                        if (
                            (ne.push(Ie),
                            v && ne.push(v),
                            Array.prototype.splice.apply(t, ne),
                            l != 1 && U.matchGrammar(e, t, r, W, re, !0, E),
                            i)
                        )
                            break
                    }
                }
            }
        },
        tokenize: function (e, t) {
            let r = [e],
                n = t.rest
            if (n) {
                for (let o in n) t[o] = n[o]
                delete t.rest
            }
            return U.matchGrammar(e, r, t, 0, 0, !1), r
        },
        hooks: {
            all: {},
            add: function (e, t) {
                let r = U.hooks.all
                ;(r[e] = r[e] || []), r[e].push(t)
            },
            run: function (e, t) {
                let r = U.hooks.all[e]
                if (!(!r || !r.length)) for (var n = 0, o; (o = r[n++]); ) o(t)
            },
        },
        Token: qe,
    }
U.languages.clike = {
    comment: [
        { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
        { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
    ],
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0,
    },
    'class-name': {
        pattern:
            /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
        lookbehind: !0,
        inside: { punctuation: /[.\\]/ },
    },
    keyword:
        /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/,
}
U.languages.javascript = U.languages.extend('clike', {
    'class-name': [
        U.languages.clike['class-name'],
        {
            pattern:
                /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
            lookbehind: !0,
        },
    ],
    keyword: [
        { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
        {
            pattern:
                /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: !0,
        },
    ],
    number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
    function:
        /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    operator:
        /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
})
U.languages.javascript['class-name'][0].pattern =
    /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/
U.languages.insertBefore('javascript', 'keyword', {
    regex: {
        pattern:
            /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
        lookbehind: !0,
        greedy: !0,
    },
    'function-variable': {
        pattern:
            /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
        alias: 'function',
    },
    parameter: [
        {
            pattern:
                /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
            lookbehind: !0,
            inside: U.languages.javascript,
        },
        {
            pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
            inside: U.languages.javascript,
        },
        {
            pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
            lookbehind: !0,
            inside: U.languages.javascript,
        },
        {
            pattern:
                /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
            lookbehind: !0,
            inside: U.languages.javascript,
        },
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
})
U.languages.markup && U.languages.markup.tag.addInlined('script', 'javascript')
U.languages.js = U.languages.javascript
U.languages.typescript = U.languages.extend('javascript', {
    keyword:
        /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
    builtin:
        /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
})
U.languages.ts = U.languages.typescript
function qe(e, t, r, n, o) {
    ;(this.type = e),
        (this.content = t),
        (this.alias = r),
        (this.length = (n || '').length | 0),
        (this.greedy = !!o)
}
qe.stringify = function (e, t) {
    return typeof e == 'string'
        ? e
        : Array.isArray(e)
          ? e
                .map(function (r) {
                    return qe.stringify(r, t)
                })
                .join('')
          : ld(e.type)(e.content)
}
function ld(e) {
    return pu[e] || ad
}
function fu(e) {
    return cd(e, U.languages.javascript)
}
function cd(e, t) {
    return U.tokenize(e, t)
        .map((n) => qe.stringify(n))
        .join('')
}
m()
p()
f()
d()
var du = ve(ba())
function mu(e) {
    return (0, du.default)(e)
}
var zn = class e {
    static read(t) {
        let r
        try {
            r = An.readFileSync(t, 'utf-8')
        } catch (n) {
            return null
        }
        return e.fromContent(r)
    }
    static fromContent(t) {
        let r = t.split(/\r?\n/)
        return new e(1, r)
    }
    constructor(t, r) {
        ;(this.firstLineNumber = t), (this.lines = r)
    }
    get lastLineNumber() {
        return this.firstLineNumber + this.lines.length - 1
    }
    mapLineAt(t, r) {
        if (
            t < this.firstLineNumber ||
            t > this.lines.length + this.firstLineNumber
        )
            return this
        let n = t - this.firstLineNumber,
            o = [...this.lines]
        return (o[n] = r(o[n])), new e(this.firstLineNumber, o)
    }
    mapLines(t) {
        return new e(
            this.firstLineNumber,
            this.lines.map((r, n) => t(r, this.firstLineNumber + n))
        )
    }
    lineAt(t) {
        return this.lines[t - this.firstLineNumber]
    }
    prependSymbolAt(t, r) {
        return this.mapLines((n, o) => (o === t ? `${r} ${n}` : `  ${n}`))
    }
    slice(t, r) {
        let n = this.lines.slice(t - 1, r).join(`
`)
        return new e(
            t,
            mu(n).split(`
`)
        )
    }
    highlight() {
        let t = fu(this.toString())
        return new e(
            this.firstLineNumber,
            t.split(`
`)
        )
    }
    toString() {
        return this.lines.join(`
`)
    }
}
var pd = {
        red: Ht,
        gray: Tn,
        dim: Pn,
        bold: dt,
        underline: vn,
        highlightSource: (e) => e.highlight(),
    },
    fd = {
        red: (e) => e,
        gray: (e) => e,
        dim: (e) => e,
        bold: (e) => e,
        underline: (e) => e,
        highlightSource: (e) => e,
    }
function dd(
    {
        callsite: e,
        message: t,
        originalMethod: r,
        isPanic: n,
        callArguments: o,
    },
    i
) {
    var g
    let s = {
        functionName: `prisma.${r}()`,
        message: t,
        isPanic: n != null ? n : !1,
        callArguments: o,
    }
    if (!e || typeof window != 'undefined' || h.env.NODE_ENV === 'production')
        return s
    let a = e.getLocation()
    if (!a || !a.lineNumber || !a.columnNumber) return s
    let u = Math.max(1, a.lineNumber - 3),
        l =
            (g = zn.read(a.fileName)) == null
                ? void 0
                : g.slice(u, a.lineNumber),
        c = l == null ? void 0 : l.lineAt(a.lineNumber)
    if (l && c) {
        let y = gd(c),
            P = md(c)
        if (!P) return s
        ;(s.functionName = `${P.code})`),
            (s.location = a),
            n ||
                (l = l.mapLineAt(a.lineNumber, (E) =>
                    E.slice(0, P.openingBraceIndex)
                )),
            (l = i.highlightSource(l))
        let v = String(l.lastLineNumber).length
        if (
            ((s.contextLines = l
                .mapLines((E, T) => i.gray(String(T).padStart(v)) + ' ' + E)
                .mapLines((E) => i.dim(E))
                .prependSymbolAt(a.lineNumber, i.bold(i.red('\u2192')))),
            o)
        ) {
            let E = y + v + 1
            ;(E += 2), (s.callArguments = (0, gu.default)(o, E).slice(E))
        }
    }
    return s
}
function md(e) {
    let t = Object.keys(je.ModelAction).join('|'),
        n = new RegExp(String.raw`\.(${t})\(`).exec(e)
    if (n) {
        let o = n.index + n[0].length,
            i = e.lastIndexOf(' ', n.index) + 1
        return { code: e.slice(i, o), openingBraceIndex: o }
    }
    return null
}
function gd(e) {
    let t = 0
    for (let r = 0; r < e.length; r++) {
        if (e.charAt(r) !== ' ') return t
        t++
    }
    return t
}
function yd(
    {
        functionName: e,
        location: t,
        message: r,
        isPanic: n,
        contextLines: o,
        callArguments: i,
    },
    s
) {
    let a = [''],
        u = t ? ' in' : ':'
    if (
        (n
            ? (a.push(
                  s.red(
                      `Oops, an unknown error occurred! This is ${s.bold('on us')}, you did nothing wrong.`
                  )
              ),
              a.push(
                  s.red(
                      `It occurred in the ${s.bold(`\`${e}\``)} invocation${u}`
                  )
              ))
            : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${u}`)),
        t && a.push(s.underline(hd(t))),
        o)
    ) {
        a.push('')
        let l = [o.toString()]
        i && (l.push(i), l.push(s.dim(')'))),
            a.push(l.join('')),
            i && a.push('')
    } else a.push(''), i && a.push(i), a.push('')
    return (
        a.push(r),
        a.join(`
`)
    )
}
function hd(e) {
    let t = [e.fileName]
    return (
        e.lineNumber && t.push(String(e.lineNumber)),
        e.columnNumber && t.push(String(e.columnNumber)),
        t.join(':')
    )
}
function cr(e) {
    let t = e.showColors ? pd : fd,
        r = dd(e, t)
    return yd(r, t)
}
function yu(e, t, r, n) {
    return e === je.ModelAction.findFirstOrThrow ||
        e === je.ModelAction.findUniqueOrThrow
        ? bd(t, r, n)
        : n
}
function bd(e, t, r) {
    return async (n) => {
        if ('rejectOnNotFound' in n.args) {
            let i = cr({
                originalMethod: n.clientMethod,
                callsite: n.callsite,
                message: "'rejectOnNotFound' option is not supported",
            })
            throw new Te(i, { clientVersion: t })
        }
        return await r(n).catch((i) => {
            throw i instanceof ge && i.code === 'P2025'
                ? new gt(`No ${e} found`, t)
                : i
        })
    }
}
m()
p()
f()
d()
function ze(e) {
    return e.replace(/^./, (t) => t.toLowerCase())
}
var wd = [
        'findUnique',
        'findUniqueOrThrow',
        'findFirst',
        'findFirstOrThrow',
        'create',
        'update',
        'upsert',
        'delete',
    ],
    xd = ['aggregate', 'count', 'groupBy']
function Ei(e, t) {
    var o
    let r = (o = e._extensions.getAllModelExtensions(t)) != null ? o : {},
        n = [
            Ed(e, t),
            vd(e, t),
            Or(r),
            Ae('name', () => t),
            Ae('$name', () => t),
            Ae('$parent', () => e._appliedParent),
        ]
    return Ge({}, n)
}
function Ed(e, t) {
    let r = ze(t),
        n = Object.keys(je.ModelAction).concat('count')
    return {
        getKeys() {
            return n
        },
        getPropertyValue(o) {
            let i = o,
                s = (u) => e._request(u)
            s = yu(i, t, e._clientVersion, s)
            let a = (u) => (l) => {
                let c = Et(e._errorFormat)
                return e._createPrismaPromise((g) => {
                    let y = {
                        args: l,
                        dataPath: [],
                        action: i,
                        model: t,
                        clientMethod: `${r}.${o}`,
                        jsModelName: r,
                        transaction: g,
                        callsite: c,
                    }
                    return s({ ...y, ...u })
                })
            }
            return wd.includes(i) ? xi(e, t, a) : Pd(o) ? au(e, o, a) : a({})
        },
    }
}
function Pd(e) {
    return xd.includes(e)
}
function vd(e, t) {
    return kt(
        Ae('fields', () => {
            let r = e._runtimeDataModel.models[t]
            return uu(t, r)
        })
    )
}
m()
p()
f()
d()
function hu(e) {
    return e.replace(/^./, (t) => t.toUpperCase())
}
var Pi = Symbol()
function Nr(e) {
    let t = [_d(e), Ae(Pi, () => e), Ae('$parent', () => e._appliedParent)],
        r = e._extensions.getAllClientExtensions()
    return r && t.push(Or(r)), Ge(e, t)
}
function _d(e) {
    let t = Object.keys(e._runtimeDataModel.models),
        r = t.map(ze),
        n = [...new Set(t.concat(r))]
    return kt({
        getKeys() {
            return n
        },
        getPropertyValue(o) {
            let i = hu(o)
            if (e._runtimeDataModel.models[i] !== void 0) return Ei(e, i)
            if (e._runtimeDataModel.models[o] !== void 0) return Ei(e, o)
        },
        getPropertyDescriptor(o) {
            if (!r.includes(o)) return { enumerable: !1 }
        },
    })
}
function Yn(e) {
    return e[Pi] ? e[Pi] : e
}
function bu(e) {
    if (typeof e == 'function') return e(this)
    let t = Yn(this),
        r = Object.create(t, {
            _extensions: { value: this._extensions.append(e) },
            _appliedParent: { value: this, configurable: !0 },
            $use: { value: void 0 },
            $on: { value: void 0 },
        })
    return Nr(r)
}
m()
p()
f()
d()
m()
p()
f()
d()
function wu({ result: e, modelName: t, select: r, extensions: n }) {
    let o = n.getAllComputedFields(t)
    if (!o) return e
    let i = [],
        s = []
    for (let a of Object.values(o)) {
        if (r) {
            if (!r[a.name]) continue
            let u = a.needs.filter((l) => !r[l])
            u.length > 0 && s.push(Ir(u))
        }
        Td(e, a.needs) && i.push(Ad(a, Ge(e, i)))
    }
    return i.length > 0 || s.length > 0 ? Ge(e, [...i, ...s]) : e
}
function Td(e, t) {
    return t.every((r) => ti(e, r))
}
function Ad(e, t) {
    return kt(Ae(e.name, () => e.compute(t)))
}
m()
p()
f()
d()
function Zn({
    visitor: e,
    result: t,
    args: r,
    runtimeDataModel: n,
    modelName: o,
}) {
    var s
    if (Array.isArray(t)) {
        for (let a = 0; a < t.length; a++)
            t[a] = Zn({
                result: t[a],
                args: r,
                modelName: o,
                runtimeDataModel: n,
                visitor: e,
            })
        return t
    }
    let i = (s = e(t, o, r)) != null ? s : t
    return (
        r.include &&
            xu({
                includeOrSelect: r.include,
                result: i,
                parentModelName: o,
                runtimeDataModel: n,
                visitor: e,
            }),
        r.select &&
            xu({
                includeOrSelect: r.select,
                result: i,
                parentModelName: o,
                runtimeDataModel: n,
                visitor: e,
            }),
        i
    )
}
function xu({
    includeOrSelect: e,
    result: t,
    parentModelName: r,
    runtimeDataModel: n,
    visitor: o,
}) {
    for (let [i, s] of Object.entries(e)) {
        if (!s || t[i] == null) continue
        let u = n.models[r].fields.find((c) => c.name === i)
        if (!u || u.kind !== 'object' || !u.relationName) continue
        let l = typeof s == 'object' ? s : {}
        t[i] = Zn({
            visitor: o,
            result: t[i],
            args: l,
            modelName: u.type,
            runtimeDataModel: n,
        })
    }
}
function Eu({
    result: e,
    modelName: t,
    args: r,
    extensions: n,
    runtimeDataModel: o,
}) {
    return n.isEmpty() || e == null || typeof e != 'object' || !o.models[t]
        ? e
        : Zn({
              result: e,
              args: r != null ? r : {},
              modelName: t,
              runtimeDataModel: o,
              visitor: (s, a, u) =>
                  wu({
                      result: s,
                      modelName: ze(a),
                      select: u.select,
                      extensions: n,
                  }),
          })
}
m()
p()
f()
d()
m()
p()
f()
d()
function Pu(e) {
    if (e instanceof Fe) return Cd(e)
    if (Array.isArray(e)) {
        let r = [e[0]]
        for (let n = 1; n < e.length; n++) r[n] = Lr(e[n])
        return r
    }
    let t = {}
    for (let r in e) t[r] = Lr(e[r])
    return t
}
function Cd(e) {
    return new Fe(e.strings, e.values)
}
function Lr(e) {
    if (typeof e != 'object' || e == null || e instanceof et || sr(e)) return e
    if (ir(e)) return new rt(e.toFixed())
    if (rr(e)) return new Date(+e)
    if (ArrayBuffer.isView(e)) return e.slice(0)
    if (Array.isArray(e)) {
        let t = e.length,
            r
        for (r = Array(t); t--; ) r[t] = Lr(e[t])
        return r
    }
    if (typeof e == 'object') {
        let t = {}
        for (let r in e)
            r === '__proto__'
                ? Object.defineProperty(t, r, {
                      value: Lr(e[r]),
                      configurable: !0,
                      enumerable: !0,
                      writable: !0,
                  })
                : (t[r] = Lr(e[r]))
        return t
    }
    Ot(e, 'Unknown value')
}
function _u(e, t, r, n = 0) {
    return e._createPrismaPromise((o) => {
        var s, a
        let i = t.customDataProxyFetch
        return (
            'transaction' in t &&
                o !== void 0 &&
                (((s = t.transaction) == null ? void 0 : s.kind) === 'batch' &&
                    t.transaction.lock.then(),
                (t.transaction = o)),
            n === r.length
                ? e._executeRequest(t)
                : r[n]({
                      model: t.model,
                      operation: t.model ? t.action : t.clientMethod,
                      args: Pu((a = t.args) != null ? a : {}),
                      __internalParams: t,
                      query: (u, l = t) => {
                          let c = l.customDataProxyFetch
                          return (
                              (l.customDataProxyFetch = Su(i, c)),
                              (l.args = u),
                              _u(e, l, r, n + 1)
                          )
                      },
                  })
        )
    })
}
function Tu(e, t) {
    let { jsModelName: r, action: n, clientMethod: o } = t,
        i = r ? n : o
    if (e._extensions.isEmpty()) return e._executeRequest(t)
    let s = e._extensions.getAllQueryCallbacks(r != null ? r : '$none', i)
    return _u(e, t, s)
}
function Au(e) {
    return (t) => {
        let r = { requests: t },
            n = t[0].extensions.getAllBatchQueryCallbacks()
        return n.length ? Cu(r, n, 0, e) : e(r)
    }
}
function Cu(e, t, r, n) {
    if (r === t.length) return n(e)
    let o = e.customDataProxyFetch,
        i = e.requests[0].transaction
    return t[r]({
        args: {
            queries: e.requests.map((s) => ({
                model: s.modelName,
                operation: s.action,
                args: s.args,
            })),
            transaction: i
                ? {
                      isolationLevel:
                          i.kind === 'batch' ? i.isolationLevel : void 0,
                  }
                : void 0,
        },
        __internalParams: e,
        query(s, a = e) {
            let u = a.customDataProxyFetch
            return (a.customDataProxyFetch = Su(o, u)), Cu(a, t, r + 1, n)
        },
    })
}
var vu = (e) => e
function Su(e = vu, t = vu) {
    return (r) => e(t(r))
}
m()
p()
f()
d()
m()
p()
f()
d()
function Ru(e, t, r) {
    let n = ze(r)
    return !t.result || !(t.result.$allModels || t.result[n])
        ? e
        : Sd({
              ...e,
              ...Mu(t.name, e, t.result.$allModels),
              ...Mu(t.name, e, t.result[n]),
          })
}
function Sd(e) {
    let t = new Je(),
        r = (n, o) =>
            t.getOrCreate(n, () =>
                o.has(n)
                    ? [n]
                    : (o.add(n),
                      e[n] ? e[n].needs.flatMap((i) => r(i, o)) : [n])
            )
    return er(e, (n) => ({ ...n, needs: r(n.name, new Set()) }))
}
function Mu(e, t, r) {
    return r
        ? er(r, ({ needs: n, compute: o }, i) => ({
              name: i,
              needs: n ? Object.keys(n).filter((s) => n[s]) : [],
              compute: Md(t, i, o),
          }))
        : {}
}
function Md(e, t, r) {
    var o
    let n = (o = e == null ? void 0 : e[t]) == null ? void 0 : o.compute
    return n ? (i) => r({ ...i, [t]: n(i) }) : r
}
function Ou(e, t) {
    if (!t) return e
    let r = { ...e }
    for (let n of Object.values(t))
        if (e[n.name]) for (let o of n.needs) r[o] = !0
    return r
}
var Xn = class {
        constructor(t, r) {
            this.extension = t
            this.previous = r
            this.computedFieldsCache = new Je()
            this.modelExtensionsCache = new Je()
            this.queryCallbacksCache = new Je()
            this.clientExtensions = Ar(() => {
                var t, r
                return this.extension.client
                    ? {
                          ...((r = this.previous) == null
                              ? void 0
                              : r.getAllClientExtensions()),
                          ...this.extension.client,
                      }
                    : (t = this.previous) == null
                      ? void 0
                      : t.getAllClientExtensions()
            })
            this.batchCallbacks = Ar(() => {
                var n, o, i
                let t =
                        (o =
                            (n = this.previous) == null
                                ? void 0
                                : n.getAllBatchQueryCallbacks()) != null
                            ? o
                            : [],
                    r =
                        (i = this.extension.query) == null
                            ? void 0
                            : i.$__internalBatch
                return r ? t.concat(r) : t
            })
        }
        getAllComputedFields(t) {
            return this.computedFieldsCache.getOrCreate(t, () => {
                var r
                return Ru(
                    (r = this.previous) == null
                        ? void 0
                        : r.getAllComputedFields(t),
                    this.extension,
                    t
                )
            })
        }
        getAllClientExtensions() {
            return this.clientExtensions.get()
        }
        getAllModelExtensions(t) {
            return this.modelExtensionsCache.getOrCreate(t, () => {
                var n, o
                let r = ze(t)
                return !this.extension.model ||
                    !(
                        this.extension.model[r] ||
                        this.extension.model.$allModels
                    )
                    ? (n = this.previous) == null
                        ? void 0
                        : n.getAllModelExtensions(t)
                    : {
                          ...((o = this.previous) == null
                              ? void 0
                              : o.getAllModelExtensions(t)),
                          ...this.extension.model.$allModels,
                          ...this.extension.model[r],
                      }
            })
        }
        getAllQueryCallbacks(t, r) {
            return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
                var s, a
                let n =
                        (a =
                            (s = this.previous) == null
                                ? void 0
                                : s.getAllQueryCallbacks(t, r)) != null
                            ? a
                            : [],
                    o = [],
                    i = this.extension.query
                return !i || !(i[t] || i.$allModels || i[r] || i.$allOperations)
                    ? n
                    : (i[t] !== void 0 &&
                          (i[t][r] !== void 0 && o.push(i[t][r]),
                          i[t].$allOperations !== void 0 &&
                              o.push(i[t].$allOperations)),
                      t !== '$none' &&
                          i.$allModels !== void 0 &&
                          (i.$allModels[r] !== void 0 &&
                              o.push(i.$allModels[r]),
                          i.$allModels.$allOperations !== void 0 &&
                              o.push(i.$allModels.$allOperations)),
                      i[r] !== void 0 && o.push(i[r]),
                      i.$allOperations !== void 0 && o.push(i.$allOperations),
                      n.concat(o))
            })
        }
        getAllBatchQueryCallbacks() {
            return this.batchCallbacks.get()
        }
    },
    eo = class e {
        constructor(t) {
            this.head = t
        }
        static empty() {
            return new e()
        }
        static single(t) {
            return new e(new Xn(t))
        }
        isEmpty() {
            return this.head === void 0
        }
        append(t) {
            return new e(new Xn(t, this.head))
        }
        getAllComputedFields(t) {
            var r
            return (r = this.head) == null ? void 0 : r.getAllComputedFields(t)
        }
        getAllClientExtensions() {
            var t
            return (t = this.head) == null ? void 0 : t.getAllClientExtensions()
        }
        getAllModelExtensions(t) {
            var r
            return (r = this.head) == null ? void 0 : r.getAllModelExtensions(t)
        }
        getAllQueryCallbacks(t, r) {
            var n, o
            return (o =
                (n = this.head) == null
                    ? void 0
                    : n.getAllQueryCallbacks(t, r)) != null
                ? o
                : []
        }
        getAllBatchQueryCallbacks() {
            var t, r
            return (r =
                (t = this.head) == null
                    ? void 0
                    : t.getAllBatchQueryCallbacks()) != null
                ? r
                : []
        }
    }
m()
p()
f()
d()
var Iu = be('prisma:client'),
    ku = { Vercel: 'vercel', 'Netlify CI': 'netlify' }
function Fu({ postinstall: e, ciName: t, clientVersion: r }) {
    if (
        (Iu('checkPlatformCaching:postinstall', e),
        Iu('checkPlatformCaching:ciName', t),
        e === !0 && t && t in ku)
    ) {
        let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${ku[t]}-build`
        throw (console.error(n), new Z(n, r))
    }
}
m()
p()
f()
d()
function Du(e, t) {
    return e
        ? e.datasources
            ? e.datasources
            : e.datasourceUrl
              ? { [t[0]]: { url: e.datasourceUrl } }
              : {}
        : {}
}
m()
p()
f()
d()
m()
p()
f()
d()
m()
p()
f()
d()
function Br({ error: e, user_facing_error: t }, r) {
    return t.error_code
        ? new ge(t.message, {
              code: t.error_code,
              clientVersion: r,
              meta: t.meta,
              batchRequestIdx: t.batch_request_idx,
          })
        : new ye(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx })
}
m()
p()
f()
d()
var pr = class {}
m()
p()
f()
d()
function to(e, t) {
    return {
        batch: e,
        transaction:
            (t == null ? void 0 : t.kind) === 'batch'
                ? { isolationLevel: t.options.isolationLevel }
                : void 0,
    }
}
m()
p()
f()
d()
var vi = ve(ei())
m()
p()
f()
d()
function Nu(e) {
    return e
        ? e
              .replace(/".*"/g, '"X"')
              .replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`)
        : ''
}
m()
p()
f()
d()
function Lu(e) {
    return e
        .split(
            `
`
        )
        .map((t) =>
            t
                .replace(
                    /^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/,
                    ''
                )
                .replace(/\+\d+\s*ms$/, '')
        ).join(`
`)
}
m()
p()
f()
d()
var Rd = ve(ma()),
    Bu = ve(Ca())
function ju({
    title: e,
    user: t = 'prisma',
    repo: r = 'prisma',
    template: n = 'bug_report.yml',
    body: o,
}) {
    return (0, Bu.default)({ user: t, repo: r, template: n, title: e, body: o })
}
function Uu({
    version: e,
    platform: t,
    title: r,
    description: n,
    engineVersion: o,
    database: i,
    query: s,
}) {
    var y, P
    let a = ia(6e3 - ((y = s == null ? void 0 : s.length) != null ? y : 0)),
        u = Lu((0, vi.default)(a)),
        l = n
            ? `# Description
\`\`\`
${n}
\`\`\``
            : '',
        c = (0,
        vi.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${(P = h.version) == null ? void 0 : P.padEnd(19)}| 
| OS              | ${t == null ? void 0 : t.padEnd(19)}|
| Prisma Client   | ${e == null ? void 0 : e.padEnd(19)}|
| Query Engine    | ${o == null ? void 0 : o.padEnd(19)}|
| Database        | ${i == null ? void 0 : i.padEnd(19)}|

${l}

## Logs
\`\`\`
${u}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? Nu(s) : ''}
\`\`\`
`),
        g = ju({ title: r, body: c })
    return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${vn(g)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`
}
m()
p()
f()
d()
m()
p()
f()
d()
m()
p()
f()
d()
var Od = 'Cloudflare-Workers',
    Id = 'node'
function _i() {
    var e, t, r
    return typeof Netlify == 'object'
        ? 'netlify'
        : typeof EdgeRuntime == 'string'
          ? 'edge-light'
          : ((e = globalThis.navigator) == null ? void 0 : e.userAgent) === Od
            ? 'workerd'
            : globalThis.Deno
              ? 'deno'
              : globalThis.__lagon__
                ? 'lagon'
                : ((r =
                        (t = globalThis.process) == null
                            ? void 0
                            : t.release) == null
                        ? void 0
                        : r.name) === Id
                  ? 'node'
                  : globalThis.Bun
                    ? 'bun'
                    : globalThis.fastly
                      ? 'fastly'
                      : 'unknown'
}
function ro({
    inlineDatasources: e,
    overrideDatasources: t,
    env: r,
    clientVersion: n,
}) {
    var u, l
    let o,
        i = Object.keys(e)[0],
        s = (u = e[i]) == null ? void 0 : u.url,
        a = (l = t[i]) == null ? void 0 : l.url
    if (
        (i === void 0
            ? (o = void 0)
            : a
              ? (o = a)
              : s != null && s.value
                ? (o = s.value)
                : s != null && s.fromEnvVar && (o = r[s.fromEnvVar]),
        (s == null ? void 0 : s.fromEnvVar) !== void 0 && o === void 0)
    )
        throw _i() === 'workerd'
            ? new Z(
                  `error: Environment variable not found: ${s.fromEnvVar}.

In Cloudflare module Workers, environment variables are available only in the Worker's \`env\` parameter of \`fetch\`.
To solve this, provide the connection string directly: https://pris.ly/d/cloudflare-datasource-url`,
                  n
              )
            : new Z(
                  `error: Environment variable not found: ${s.fromEnvVar}.`,
                  n
              )
    if (o === void 0)
        throw new Z(
            'error: Missing URL environment variable, value, or override.',
            n
        )
    return o
}
m()
p()
f()
d()
m()
p()
f()
d()
var no = class extends Error {
    constructor(r, n) {
        super(r)
        ;(this.clientVersion = n.clientVersion), (this.cause = n.cause)
    }
    get [Symbol.toStringTag]() {
        return this.name
    }
}
var Me = class extends no {
    constructor(r, n) {
        var o
        super(r, n)
        this.isRetryable = (o = n.isRetryable) != null ? o : !0
    }
}
m()
p()
f()
d()
m()
p()
f()
d()
function G(e, t) {
    return { ...e, isRetryable: t }
}
var fr = class extends Me {
    constructor(r) {
        super('This request must be retried', G(r, !0))
        this.name = 'ForcedRetryError'
        this.code = 'P5001'
    }
}
B(fr, 'ForcedRetryError')
m()
p()
f()
d()
var Dt = class extends Me {
    constructor(r, n) {
        super(r, G(n, !1))
        this.name = 'InvalidDatasourceError'
        this.code = 'P6001'
    }
}
B(Dt, 'InvalidDatasourceError')
m()
p()
f()
d()
var Nt = class extends Me {
    constructor(r, n) {
        super(r, G(n, !1))
        this.name = 'NotImplementedYetError'
        this.code = 'P5004'
    }
}
B(Nt, 'NotImplementedYetError')
m()
p()
f()
d()
m()
p()
f()
d()
var Y = class extends Me {
    constructor(r, n) {
        super(r, n)
        this.response = n.response
        let o = this.response.headers.get('prisma-request-id')
        if (o) {
            let i = `(The request id was: ${o})`
            this.message = this.message + ' ' + i
        }
    }
}
var Lt = class extends Y {
    constructor(r) {
        super('Schema needs to be uploaded', G(r, !0))
        this.name = 'SchemaMissingError'
        this.code = 'P5005'
    }
}
B(Lt, 'SchemaMissingError')
m()
p()
f()
d()
m()
p()
f()
d()
var Ti = 'This request could not be understood by the server',
    jr = class extends Y {
        constructor(r, n, o) {
            super(n || Ti, G(r, !1))
            this.name = 'BadRequestError'
            this.code = 'P5000'
            o && (this.code = o)
        }
    }
B(jr, 'BadRequestError')
m()
p()
f()
d()
var Ur = class extends Y {
    constructor(r, n) {
        super('Engine not started: healthcheck timeout', G(r, !0))
        this.name = 'HealthcheckTimeoutError'
        this.code = 'P5013'
        this.logs = n
    }
}
B(Ur, 'HealthcheckTimeoutError')
m()
p()
f()
d()
var $r = class extends Y {
    constructor(r, n, o) {
        super(n, G(r, !0))
        this.name = 'EngineStartupError'
        this.code = 'P5014'
        this.logs = o
    }
}
B($r, 'EngineStartupError')
m()
p()
f()
d()
var qr = class extends Y {
    constructor(r) {
        super('Engine version is not supported', G(r, !1))
        this.name = 'EngineVersionNotSupportedError'
        this.code = 'P5012'
    }
}
B(qr, 'EngineVersionNotSupportedError')
m()
p()
f()
d()
var Ai = 'Request timed out',
    Vr = class extends Y {
        constructor(r, n = Ai) {
            super(n, G(r, !1))
            this.name = 'GatewayTimeoutError'
            this.code = 'P5009'
        }
    }
B(Vr, 'GatewayTimeoutError')
m()
p()
f()
d()
var kd = 'Interactive transaction error',
    Kr = class extends Y {
        constructor(r, n = kd) {
            super(n, G(r, !1))
            this.name = 'InteractiveTransactionError'
            this.code = 'P5015'
        }
    }
B(Kr, 'InteractiveTransactionError')
m()
p()
f()
d()
var Fd = 'Request parameters are invalid',
    Qr = class extends Y {
        constructor(r, n = Fd) {
            super(n, G(r, !1))
            this.name = 'InvalidRequestError'
            this.code = 'P5011'
        }
    }
B(Qr, 'InvalidRequestError')
m()
p()
f()
d()
var Ci = 'Requested resource does not exist',
    Jr = class extends Y {
        constructor(r, n = Ci) {
            super(n, G(r, !1))
            this.name = 'NotFoundError'
            this.code = 'P5003'
        }
    }
B(Jr, 'NotFoundError')
m()
p()
f()
d()
var Si = 'Unknown server error',
    dr = class extends Y {
        constructor(r, n, o) {
            super(n || Si, G(r, !0))
            this.name = 'ServerError'
            this.code = 'P5006'
            this.logs = o
        }
    }
B(dr, 'ServerError')
m()
p()
f()
d()
var Mi = 'Unauthorized, check your connection string',
    Gr = class extends Y {
        constructor(r, n = Mi) {
            super(n, G(r, !1))
            this.name = 'UnauthorizedError'
            this.code = 'P5007'
        }
    }
B(Gr, 'UnauthorizedError')
m()
p()
f()
d()
var Ri = 'Usage exceeded, retry again later',
    Wr = class extends Y {
        constructor(r, n = Ri) {
            super(n, G(r, !0))
            this.name = 'UsageExceededError'
            this.code = 'P5008'
        }
    }
B(Wr, 'UsageExceededError')
async function Dd(e) {
    let t
    try {
        t = await e.text()
    } catch (r) {
        return { type: 'EmptyError' }
    }
    try {
        let r = JSON.parse(t)
        if (typeof r == 'string')
            switch (r) {
                case 'InternalDataProxyError':
                    return { type: 'DataProxyError', body: r }
                default:
                    return { type: 'UnknownTextError', body: r }
            }
        if (typeof r == 'object' && r !== null) {
            if ('is_panic' in r && 'message' in r && 'error_code' in r)
                return { type: 'QueryEngineError', body: r }
            if (
                'EngineNotStarted' in r ||
                'InteractiveTransactionMisrouted' in r ||
                'InvalidRequestError' in r
            ) {
                let n = Object.values(r)[0].reason
                return typeof n == 'string' &&
                    !['SchemaMissing', 'EngineVersionNotSupported'].includes(n)
                    ? { type: 'UnknownJsonError', body: r }
                    : { type: 'DataProxyError', body: r }
            }
        }
        return { type: 'UnknownJsonError', body: r }
    } catch (r) {
        return t === ''
            ? { type: 'EmptyError' }
            : { type: 'UnknownTextError', body: t }
    }
}
async function Hr(e, t) {
    if (e.ok) return
    let r = { clientVersion: t, response: e },
        n = await Dd(e)
    if (n.type === 'QueryEngineError')
        throw new ge(n.body.message, {
            code: n.body.error_code,
            clientVersion: t,
        })
    if (n.type === 'DataProxyError') {
        if (n.body === 'InternalDataProxyError')
            throw new dr(r, 'Internal Data Proxy error')
        if ('EngineNotStarted' in n.body) {
            if (n.body.EngineNotStarted.reason === 'SchemaMissing')
                return new Lt(r)
            if (n.body.EngineNotStarted.reason === 'EngineVersionNotSupported')
                throw new qr(r)
            if ('EngineStartupError' in n.body.EngineNotStarted.reason) {
                let { msg: o, logs: i } =
                    n.body.EngineNotStarted.reason.EngineStartupError
                throw new $r(r, o, i)
            }
            if ('KnownEngineStartupError' in n.body.EngineNotStarted.reason) {
                let { msg: o, error_code: i } =
                    n.body.EngineNotStarted.reason.KnownEngineStartupError
                throw new Z(o, t, i)
            }
            if ('HealthcheckTimeout' in n.body.EngineNotStarted.reason) {
                let { logs: o } =
                    n.body.EngineNotStarted.reason.HealthcheckTimeout
                throw new Ur(r, o)
            }
        }
        if ('InteractiveTransactionMisrouted' in n.body) {
            let o = {
                IDParseError: 'Could not parse interactive transaction ID',
                NoQueryEngineFoundError:
                    'Could not find Query Engine for the specified host and transaction ID',
                TransactionStartError:
                    'Could not start interactive transaction',
            }
            throw new Kr(r, o[n.body.InteractiveTransactionMisrouted.reason])
        }
        if ('InvalidRequestError' in n.body)
            throw new Qr(r, n.body.InvalidRequestError.reason)
    }
    if (e.status === 401 || e.status === 403) throw new Gr(r, mr(Mi, n))
    if (e.status === 404) return new Jr(r, mr(Ci, n))
    if (e.status === 429) throw new Wr(r, mr(Ri, n))
    if (e.status === 504) throw new Vr(r, mr(Ai, n))
    if (e.status >= 500) throw new dr(r, mr(Si, n))
    if (e.status >= 400) throw new jr(r, mr(Ti, n))
}
function mr(e, t) {
    return t.type === 'EmptyError' ? e : `${e}: ${JSON.stringify(t)}`
}
m()
p()
f()
d()
function $u(e) {
    let t = Math.pow(2, e) * 50,
        r = Math.ceil(Math.random() * t) - Math.ceil(t / 2),
        n = t + r
    return new Promise((o) => setTimeout(() => o(n), n))
}
m()
p()
f()
d()
function qu(e) {
    var r
    if (
        !!(
            (r = e.generator) != null &&
            r.previewFeatures.some((n) => n.toLowerCase().includes('metrics'))
        )
    )
        throw new Z(
            'The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate',
            e.clientVersion
        )
}
m()
p()
f()
d()
var Vu = {
    '@prisma/debug': 'workspace:*',
    '@prisma/engines-version':
        '5.7.1-1.0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5',
    '@prisma/fetch-engine': 'workspace:*',
    '@prisma/get-platform': 'workspace:*',
}
m()
p()
f()
d()
m()
p()
f()
d()
var zr = class extends Me {
    constructor(r, n) {
        super(
            `Cannot fetch data from service:
${r}`,
            G(n, !0)
        )
        this.name = 'RequestError'
        this.code = 'P5010'
    }
}
B(zr, 'RequestError')
async function Bt(e, t, r = (n) => n) {
    var o
    let n = t.clientVersion
    try {
        return typeof fetch == 'function'
            ? await r(fetch)(e, t)
            : await r(Oi)(e, t)
    } catch (i) {
        let s = (o = i.message) != null ? o : 'Unknown error'
        throw new zr(s, { clientVersion: n })
    }
}
function Ld(e) {
    return { ...e.headers, 'Content-Type': 'application/json' }
}
function Bd(e) {
    return { method: e.method, headers: Ld(e) }
}
function jd(e, t) {
    return {
        text: () => Promise.resolve(w.Buffer.concat(e).toString()),
        json: () =>
            Promise.resolve().then(() =>
                JSON.parse(w.Buffer.concat(e).toString())
            ),
        ok: t.statusCode >= 200 && t.statusCode <= 299,
        status: t.statusCode,
        url: t.url,
        headers: new Ii(t.headers),
    }
}
async function Oi(e, t = {}) {
    let r = Ud('https'),
        n = Bd(t),
        o = [],
        { origin: i } = new URL(e)
    return new Promise((s, a) => {
        var l
        let u = r.request(e, n, (c) => {
            let {
                statusCode: g,
                headers: { location: y },
            } = c
            g >= 301 &&
                g <= 399 &&
                y &&
                (y.startsWith('http') === !1
                    ? s(Oi(`${i}${y}`, t))
                    : s(Oi(y, t))),
                c.on('data', (P) => o.push(P)),
                c.on('end', () => s(jd(o, c))),
                c.on('error', a)
        })
        u.on('error', a), u.end((l = t.body) != null ? l : '')
    })
}
var Ud = typeof vo != 'undefined' ? vo : () => {},
    Ii = class {
        constructor(t = {}) {
            this.headers = new Map()
            for (let [r, n] of Object.entries(t))
                if (typeof n == 'string') this.headers.set(r, n)
                else if (Array.isArray(n))
                    for (let o of n) this.headers.set(r, o)
        }
        append(t, r) {
            this.headers.set(t, r)
        }
        delete(t) {
            this.headers.delete(t)
        }
        get(t) {
            var r
            return (r = this.headers.get(t)) != null ? r : null
        }
        has(t) {
            return this.headers.has(t)
        }
        set(t, r) {
            this.headers.set(t, r)
        }
        forEach(t, r) {
            for (let [n, o] of this.headers) t.call(r, o, n, this)
        }
    }
var $d = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/,
    Ku = be('prisma:client:dataproxyEngine')
async function qd(e, t) {
    var s, a, u
    let r = Vu['@prisma/engines-version'],
        n = (s = t.clientVersion) != null ? s : 'unknown'
    if (h.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
        return h.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION
    if (e.includes('accelerate') && n !== '0.0.0' && n !== 'in-memory') return n
    let [o, i] = (a = n == null ? void 0 : n.split('-')) != null ? a : []
    if (i === void 0 && $d.test(o)) return o
    if (i !== void 0 || n === '0.0.0' || n === 'in-memory') {
        if (e.startsWith('localhost') || e.startsWith('127.0.0.1'))
            return '0.0.0'
        let [l] = (u = r.split('-')) != null ? u : [],
            [c, g, y] = l.split('.'),
            P = Vd(`<=${c}.${g}.${y}`),
            v = await Bt(P, { clientVersion: n })
        if (!v.ok)
            throw new Error(
                `Failed to fetch stable Prisma version, unpkg.com status ${v.status} ${v.statusText}, response body: ${(await v.text()) || '<empty body>'}`
            )
        let E = await v.text()
        Ku('length of body fetched from unpkg.com', E.length)
        let T
        try {
            T = JSON.parse(E)
        } catch (M) {
            throw (
                (console.error(
                    'JSON.parse error: body fetched from unpkg.com: ',
                    E
                ),
                M)
            )
        }
        return T.version
    }
    throw new Nt(
        'Only `major.minor.patch` versions are supported by Accelerate.',
        { clientVersion: n }
    )
}
async function Qu(e, t) {
    let r = await qd(e, t)
    return Ku('version', r), r
}
function Vd(e) {
    return encodeURI(`https://unpkg.com/prisma@${e}/package.json`)
}
var Ju = 3,
    ki = be('prisma:client:dataproxyEngine'),
    Fi = class {
        constructor({
            apiKey: t,
            tracingHelper: r,
            logLevel: n,
            logQueries: o,
            engineHash: i,
        }) {
            ;(this.apiKey = t),
                (this.tracingHelper = r),
                (this.logLevel = n),
                (this.logQueries = o),
                (this.engineHash = i)
        }
        build({ traceparent: t, interactiveTransaction: r } = {}) {
            let n = {
                Authorization: `Bearer ${this.apiKey}`,
                'Prisma-Engine-Hash': this.engineHash,
            }
            this.tracingHelper.isEnabled() &&
                (n.traceparent =
                    t != null ? t : this.tracingHelper.getTraceParent()),
                r && (n['X-transaction-id'] = r.id)
            let o = this.buildCaptureSettings()
            return o.length > 0 && (n['X-capture-telemetry'] = o.join(', ')), n
        }
        buildCaptureSettings() {
            let t = []
            return (
                this.tracingHelper.isEnabled() && t.push('tracing'),
                this.logLevel && t.push(this.logLevel),
                this.logQueries && t.push('query'),
                t
            )
        }
    },
    Yr = class extends pr {
        constructor(r) {
            super()
            qu(r),
                (this.config = r),
                (this.env = { ...this.config.env, ...h.env }),
                (this.inlineSchema = r.inlineSchema),
                (this.inlineDatasources = r.inlineDatasources),
                (this.inlineSchemaHash = r.inlineSchemaHash),
                (this.clientVersion = r.clientVersion),
                (this.engineHash = r.engineVersion),
                (this.logEmitter = r.logEmitter),
                (this.tracingHelper = this.config.tracingHelper)
        }
        apiKey() {
            return this.headerBuilder.apiKey
        }
        version() {
            return this.engineHash
        }
        async start() {
            this.startPromise !== void 0 && (await this.startPromise),
                (this.startPromise = (async () => {
                    let [r, n] = this.extractHostAndApiKey()
                    ;(this.host = r),
                        (this.headerBuilder = new Fi({
                            apiKey: n,
                            tracingHelper: this.tracingHelper,
                            logLevel: this.config.logLevel,
                            logQueries: this.config.logQueries,
                            engineHash: this.engineHash,
                        })),
                        (this.remoteClientVersion = await Qu(r, this.config)),
                        ki('host', this.host)
                })()),
                await this.startPromise
        }
        async stop() {}
        propagateResponseExtensions(r) {
            var n, o
            ;(n = r == null ? void 0 : r.logs) != null &&
                n.length &&
                r.logs.forEach((i) => {
                    switch (i.level) {
                        case 'debug':
                        case 'error':
                        case 'trace':
                        case 'warn':
                        case 'info':
                            break
                        case 'query': {
                            let s =
                                typeof i.attributes.query == 'string'
                                    ? i.attributes.query
                                    : ''
                            if (!this.tracingHelper.isEnabled()) {
                                let [a] = s.split('/* traceparent')
                                s = a
                            }
                            this.logEmitter.emit('query', {
                                query: s,
                                timestamp: i.timestamp,
                                duration: i.attributes.duration_ms,
                                params: i.attributes.params,
                                target: i.attributes.target,
                            })
                        }
                    }
                }),
                (o = r == null ? void 0 : r.traces) != null &&
                    o.length &&
                    this.tracingHelper.createEngineSpan({
                        span: !0,
                        spans: r.traces,
                    })
        }
        on(r, n) {
            if (r === 'beforeExit')
                throw new Error(
                    '"beforeExit" hook is not applicable to the remote query engine'
                )
            this.logEmitter.on(r, n)
        }
        async url(r) {
            return (
                await this.start(),
                `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${r}`
            )
        }
        async uploadSchema() {
            let r = { name: 'schemaUpload', internal: !0 }
            return this.tracingHelper.runInChildSpan(r, async () => {
                let n = await Bt(await this.url('schema'), {
                    method: 'PUT',
                    headers: this.headerBuilder.build(),
                    body: this.inlineSchema,
                    clientVersion: this.clientVersion,
                })
                n.ok || ki('schema response status', n.status)
                let o = await Hr(n, this.clientVersion)
                if (o)
                    throw (
                        (this.logEmitter.emit('warn', {
                            message: `Error while uploading schema: ${o.message}`,
                        }),
                        o)
                    )
                this.logEmitter.emit('info', {
                    message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`,
                })
            })
        }
        request(
            r,
            {
                traceparent: n,
                interactiveTransaction: o,
                customDataProxyFetch: i,
            }
        ) {
            return this.requestInternal({
                body: r,
                traceparent: n,
                interactiveTransaction: o,
                customDataProxyFetch: i,
            })
        }
        async requestBatch(
            r,
            { traceparent: n, transaction: o, customDataProxyFetch: i }
        ) {
            let s =
                    (o == null ? void 0 : o.kind) === 'itx'
                        ? o.options
                        : void 0,
                a = to(r, o),
                { batchResult: u, elapsed: l } = await this.requestInternal({
                    body: a,
                    customDataProxyFetch: i,
                    interactiveTransaction: s,
                    traceparent: n,
                })
            return u.map((c) =>
                'errors' in c && c.errors.length > 0
                    ? Br(c.errors[0], this.clientVersion)
                    : { data: c, elapsed: l }
            )
        }
        requestInternal({
            body: r,
            traceparent: n,
            customDataProxyFetch: o,
            interactiveTransaction: i,
        }) {
            return this.withRetry({
                actionGerund: 'querying',
                callback: async ({ logHttpCall: s }) => {
                    let a = i
                        ? `${i.payload.endpoint}/graphql`
                        : await this.url('graphql')
                    s(a)
                    let u = await Bt(
                        a,
                        {
                            method: 'POST',
                            headers: this.headerBuilder.build({
                                traceparent: n,
                                interactiveTransaction: i,
                            }),
                            body: JSON.stringify(r),
                            clientVersion: this.clientVersion,
                        },
                        o
                    )
                    u.ok || ki('graphql response status', u.status),
                        await this.handleError(await Hr(u, this.clientVersion))
                    let l = await u.json(),
                        c = l.extensions
                    if ((c && this.propagateResponseExtensions(c), l.errors))
                        throw l.errors.length === 1
                            ? Br(l.errors[0], this.config.clientVersion)
                            : new ye(l.errors, {
                                  clientVersion: this.config.clientVersion,
                              })
                    return l
                },
            })
        }
        async transaction(r, n, o) {
            let i = {
                start: 'starting',
                commit: 'committing',
                rollback: 'rolling back',
            }
            return this.withRetry({
                actionGerund: `${i[r]} transaction`,
                callback: async ({ logHttpCall: s }) => {
                    var a, u
                    if (r === 'start') {
                        let l = JSON.stringify({
                                max_wait:
                                    (a = o == null ? void 0 : o.maxWait) != null
                                        ? a
                                        : 2e3,
                                timeout:
                                    (u = o == null ? void 0 : o.timeout) != null
                                        ? u
                                        : 5e3,
                                isolation_level:
                                    o == null ? void 0 : o.isolationLevel,
                            }),
                            c = await this.url('transaction/start')
                        s(c)
                        let g = await Bt(c, {
                            method: 'POST',
                            headers: this.headerBuilder.build({
                                traceparent: n.traceparent,
                            }),
                            body: l,
                            clientVersion: this.clientVersion,
                        })
                        await this.handleError(await Hr(g, this.clientVersion))
                        let y = await g.json(),
                            P = y.extensions
                        P && this.propagateResponseExtensions(P)
                        let v = y.id,
                            E = y['data-proxy'].endpoint
                        return { id: v, payload: { endpoint: E } }
                    } else {
                        let l = `${o.payload.endpoint}/${r}`
                        s(l)
                        let c = await Bt(l, {
                            method: 'POST',
                            headers: this.headerBuilder.build({
                                traceparent: n.traceparent,
                            }),
                            clientVersion: this.clientVersion,
                        })
                        await this.handleError(await Hr(c, this.clientVersion))
                        let y = (await c.json()).extensions
                        y && this.propagateResponseExtensions(y)
                        return
                    }
                },
            })
        }
        extractHostAndApiKey() {
            let r = { clientVersion: this.clientVersion },
                n = Object.keys(this.inlineDatasources)[0],
                o = ro({
                    inlineDatasources: this.inlineDatasources,
                    overrideDatasources: this.config.overrideDatasources,
                    clientVersion: this.clientVersion,
                    env: this.env,
                }),
                i
            try {
                i = new URL(o)
            } catch (c) {
                throw new Dt(
                    `Error validating datasource \`${n}\`: the URL must start with the protocol \`prisma://\``,
                    r
                )
            }
            let { protocol: s, host: a, searchParams: u } = i
            if (s !== 'prisma:')
                throw new Dt(
                    `Error validating datasource \`${n}\`: the URL must start with the protocol \`prisma://\``,
                    r
                )
            let l = u.get('api_key')
            if (l === null || l.length < 1)
                throw new Dt(
                    `Error validating datasource \`${n}\`: the URL must contain a valid API key`,
                    r
                )
            return [a, l]
        }
        metrics() {
            throw new Nt('Metrics are not yet supported for Accelerate', {
                clientVersion: this.clientVersion,
            })
        }
        async withRetry(r) {
            var n
            for (let o = 0; ; o++) {
                let i = (s) => {
                    this.logEmitter.emit('info', {
                        message: `Calling ${s} (n=${o})`,
                    })
                }
                try {
                    return await r.callback({ logHttpCall: i })
                } catch (s) {
                    if (!(s instanceof Me) || !s.isRetryable) throw s
                    if (o >= Ju) throw s instanceof fr ? s.cause : s
                    this.logEmitter.emit('warn', {
                        message: `Attempt ${o + 1}/${Ju} failed for ${r.actionGerund}: ${(n = s.message) != null ? n : '(unknown)'}`,
                    })
                    let a = await $u(o)
                    this.logEmitter.emit('warn', {
                        message: `Retrying after ${a}ms`,
                    })
                }
            }
        }
        async handleError(r) {
            if (r instanceof Lt)
                throw (
                    (await this.uploadSchema(),
                    new fr({ clientVersion: this.clientVersion, cause: r }))
                )
            if (r) throw r
        }
    }
m()
p()
f()
d()
m()
p()
f()
d()
function Gu(e) {
    if ((e == null ? void 0 : e.kind) === 'itx') return e.options.id
}
m()
p()
f()
d()
var $i = {}
hr($i, {
    CommonProxy: () => Ni,
    DriverProxy: () => Li,
    JsBaseQueryable: () => Bi,
    QueryEngine: () => Xr,
    TransactionProxy: () => ji,
    __wbg_String_88810dfeb4021902: () => Vm,
    __wbg_buffer_344d9b41efe96da7: () => Hm,
    __wbg_call_53fc3abd42e24ec8: () => im,
    __wbg_call_669127b9d730c650: () => lg,
    __wbg_crypto_58f13aa23ffcb166: () => Zm,
    __wbg_done_bc26bf4ada718266: () => ag,
    __wbg_entries_6d727b73ee02b7ce: () => Eg,
    __wbg_getRandomValues_504510b5564925af: () => Gm,
    __wbg_getTime_ed6ee333b702f8fc: () => mm,
    __wbg_get_2aff440840bb6202: () => Km,
    __wbg_get_4a9aa5157afeb382: () => Om,
    __wbg_get_94990005bd6ca07c: () => Qm,
    __wbg_getwithrefkey_5e6d9547403deab8: () => qm,
    __wbg_globalThis_17eff828815f7d84: () => dg,
    __wbg_global_46f939f6541643c5: () => mg,
    __wbg_instanceof_ArrayBuffer_c7cc317e5c29cc0d: () => xg,
    __wbg_instanceof_Promise_cfbcc42300367513: () => Um,
    __wbg_instanceof_Uint8Array_19e6f142a5e7e1e1: () => wg,
    __wbg_isArray_38525be7442aa21e: () => Tm,
    __wbg_isSafeInteger_c38b0a16d0c7cef7: () => Em,
    __wbg_iterator_7ee1a391d310f8e4: () => Cm,
    __wbg_length_a5587d6cd79ab197: () => bg,
    __wbg_length_cace2e0b3ddc0502: () => Rm,
    __wbg_msCrypto_abcb1295e768d1f2: () => og,
    __wbg_new0_ad75dd38f92424e2: () => dm,
    __wbg_new_08236689f0afb357: () => Im,
    __wbg_new_1b94180eeb48f2a2: () => Dm,
    __wbg_new_c728d68b8b34487e: () => Nm,
    __wbg_new_d8a000788389a31e: () => yg,
    __wbg_new_feb65b865d980ae2: () => tm,
    __wbg_newnoargs_ccdcae30fd002262: () => gg,
    __wbg_newwithbyteoffsetandlength_2dc04d99088b15e3: () => zm,
    __wbg_newwithlength_13b5319ab422dcf6: () => ig,
    __wbg_next_15da6a3df9290720: () => cg,
    __wbg_next_1989a20442400aaa: () => sg,
    __wbg_node_523d7bd03ef69fba: () => tg,
    __wbg_now_4579335d3581594c: () => nm,
    __wbg_now_8ed1a4454e40ecd1: () => ym,
    __wbg_parse_3f0cb48976ca4123: () => fm,
    __wbg_process_5b786e71d465a513: () => Xm,
    __wbg_randomFillSync_a0d98aa11c81fe89: () => Ym,
    __wbg_require_2784e593a4674877: () => rg,
    __wbg_resolve_a3252b2860f0a09e: () => Cg,
    __wbg_self_3fad056edded10bd: () => pg,
    __wbg_setTimeout_631fe61f31fa2fad: () => om,
    __wbg_set_0ac78a2bc07da03c: () => Fm,
    __wbg_set_3355b9f2d3092e3b: () => Lm,
    __wbg_set_841ac57cff3d672b: () => jm,
    __wbg_set_dcfd613a3420f908: () => hg,
    __wbg_set_wasm: () => Ui,
    __wbg_static_accessor_PERFORMANCE_1a325848eb3ce65a: () => gm,
    __wbg_stringify_4039297315a25b00: () => pm,
    __wbg_subarray_6ca5cfa7fbb9abbe: () => Jm,
    __wbg_then_1bbc9edafd859b06: () => Ag,
    __wbg_then_89e1c559530b85cf: () => Tg,
    __wbg_valueOf_ff4b62641803432a: () => $m,
    __wbg_value_0570714ff7d75f35: () => ug,
    __wbg_versions_c2ab80650590b6a2: () => eg,
    __wbg_window_a4f46c98a61d4089: () => fg,
    __wbindgen_bigint_from_i64: () => vm,
    __wbindgen_bigint_from_u64: () => Mm,
    __wbindgen_bigint_get_as_i64: () => Pm,
    __wbindgen_boolean_get: () => bm,
    __wbindgen_cb_drop: () => _g,
    __wbindgen_closure_wrapper7083: () => Sg,
    __wbindgen_debug_string: () => Pg,
    __wbindgen_error_new: () => sm,
    __wbindgen_in: () => Sm,
    __wbindgen_is_bigint: () => wm,
    __wbindgen_is_function: () => ng,
    __wbindgen_is_object: () => Am,
    __wbindgen_is_string: () => Bm,
    __wbindgen_is_undefined: () => cm,
    __wbindgen_jsval_eq: () => _m,
    __wbindgen_jsval_loose_eq: () => hm,
    __wbindgen_memory: () => Wm,
    __wbindgen_number_get: () => xm,
    __wbindgen_number_new: () => km,
    __wbindgen_object_clone_ref: () => lm,
    __wbindgen_object_drop_ref: () => rm,
    __wbindgen_string_get: () => um,
    __wbindgen_string_new: () => am,
    __wbindgen_throw: () => vg,
    debug_panic: () => Xd,
    getBuildTimeInfo: () => Zd,
})
m()
p()
f()
d()
var k
function Ui(e) {
    k = e
}
var nt = new Array(128).fill(void 0)
nt.push(void 0, null, !0, !1)
function I(e) {
    return nt[e]
}
var Zr = nt.length
function Kd(e) {
    e < 132 || ((nt[e] = Zr), (Zr = e))
}
function pe(e) {
    let t = I(e)
    return Kd(e), t
}
var Qd =
        typeof TextDecoder == 'undefined'
            ? (0, module.require)('util').TextDecoder
            : TextDecoder,
    Wu = new Qd('utf-8', { ignoreBOM: !0, fatal: !0 })
Wu.decode()
var oo = null
function uo() {
    return (
        (oo === null || oo.byteLength === 0) &&
            (oo = new Uint8Array(k.memory.buffer)),
        oo
    )
}
function en(e, t) {
    return (e = e >>> 0), Wu.decode(uo().subarray(e, e + t))
}
function N(e) {
    Zr === nt.length && nt.push(nt.length + 1)
    let t = Zr
    return (Zr = nt[t]), (nt[t] = e), t
}
var ce = 0,
    Jd =
        typeof TextEncoder == 'undefined'
            ? (0, module.require)('util').TextEncoder
            : TextEncoder,
    lo = new Jd('utf-8'),
    Gd =
        typeof lo.encodeInto == 'function'
            ? function (e, t) {
                  return lo.encodeInto(e, t)
              }
            : function (e, t) {
                  let r = lo.encode(e)
                  return t.set(r), { read: e.length, written: r.length }
              }
function Ee(e, t, r) {
    if (r === void 0) {
        let a = lo.encode(e),
            u = t(a.length, 1) >>> 0
        return (
            uo()
                .subarray(u, u + a.length)
                .set(a),
            (ce = a.length),
            u
        )
    }
    let n = e.length,
        o = t(n, 1) >>> 0,
        i = uo(),
        s = 0
    for (; s < n; s++) {
        let a = e.charCodeAt(s)
        if (a > 127) break
        i[o + s] = a
    }
    if (s !== n) {
        s !== 0 && (e = e.slice(s)),
            (o = r(o, n, (n = s + e.length * 3), 1) >>> 0)
        let a = uo().subarray(o + s, o + n),
            u = Gd(e, a)
        s += u.written
    }
    return (ce = s), o
}
function ot(e) {
    return e == null
}
var io = null
function De() {
    return (
        (io === null || io.byteLength === 0) &&
            (io = new Int32Array(k.memory.buffer)),
        io
    )
}
var so = null
function Wd() {
    return (
        (so === null || so.byteLength === 0) &&
            (so = new Float64Array(k.memory.buffer)),
        so
    )
}
var ao = null
function Hd() {
    return (
        (ao === null || ao.byteLength === 0) &&
            (ao = new BigInt64Array(k.memory.buffer)),
        ao
    )
}
function Di(e) {
    let t = typeof e
    if (t == 'number' || t == 'boolean' || e == null) return `${e}`
    if (t == 'string') return `"${e}"`
    if (t == 'symbol') {
        let o = e.description
        return o == null ? 'Symbol' : `Symbol(${o})`
    }
    if (t == 'function') {
        let o = e.name
        return typeof o == 'string' && o.length > 0
            ? `Function(${o})`
            : 'Function'
    }
    if (Array.isArray(e)) {
        let o = e.length,
            i = '['
        o > 0 && (i += Di(e[0]))
        for (let s = 1; s < o; s++) i += ', ' + Di(e[s])
        return (i += ']'), i
    }
    let r = /\[object ([^\]]+)\]/.exec(toString.call(e)),
        n
    if (r.length > 1) n = r[1]
    else return toString.call(e)
    if (n == 'Object')
        try {
            return 'Object(' + JSON.stringify(e) + ')'
        } catch (o) {
            return 'Object'
        }
    return e instanceof Error
        ? `${e.name}: ${e.message}
${e.stack}`
        : n
}
function zd(e, t, r, n) {
    let o = { a: e, b: t, cnt: 1, dtor: r },
        i = (...s) => {
            o.cnt++
            let a = o.a
            o.a = 0
            try {
                return n(a, o.b, ...s)
            } finally {
                --o.cnt === 0
                    ? k.__wbindgen_export_2.get(o.dtor)(a, o.b)
                    : (o.a = a)
            }
        }
    return (i.original = o), i
}
function Yd(e, t, r) {
    k.wasm_bindgen__convert__closures__invoke1_mut__hfbda64e850f62b9b(
        e,
        t,
        N(r)
    )
}
function Zd() {
    let e = k.getBuildTimeInfo()
    return pe(e)
}
function Xd(e) {
    try {
        let i = k.__wbindgen_add_to_stack_pointer(-16)
        var t = ot(e) ? 0 : Ee(e, k.__wbindgen_malloc, k.__wbindgen_realloc),
            r = ce
        k.debug_panic(i, t, r)
        var n = De()[i / 4 + 0],
            o = De()[i / 4 + 1]
        if (o) throw pe(n)
    } finally {
        k.__wbindgen_add_to_stack_pointer(16)
    }
}
function Re(e, t) {
    try {
        return e.apply(this, t)
    } catch (r) {
        k.__wbindgen_exn_store(N(r))
    }
}
function em(e, t, r, n) {
    k.wasm_bindgen__convert__closures__invoke2_mut__h2f8c2214595cd992(
        e,
        t,
        N(r),
        N(n)
    )
}
var Ni = class {
        __destroy_into_raw() {
            let t = this.__wbg_ptr
            return (this.__wbg_ptr = 0), t
        }
        free() {
            let t = this.__destroy_into_raw()
            k.__wbg_commonproxy_free(t)
        }
    },
    Li = class {
        __destroy_into_raw() {
            let t = this.__wbg_ptr
            return (this.__wbg_ptr = 0), t
        }
        free() {
            let t = this.__destroy_into_raw()
            k.__wbg_driverproxy_free(t)
        }
    },
    Bi = class {
        __destroy_into_raw() {
            let t = this.__wbg_ptr
            return (this.__wbg_ptr = 0), t
        }
        free() {
            let t = this.__destroy_into_raw()
            k.__wbg_jsbasequeryable_free(t)
        }
        get provider() {
            let t = k.__wbg_get_jsbasequeryable_provider(this.__wbg_ptr)
            return pe(t)
        }
        set provider(t) {
            k.__wbg_set_jsbasequeryable_provider(this.__wbg_ptr, N(t))
        }
    },
    Xr = class {
        __destroy_into_raw() {
            let t = this.__wbg_ptr
            return (this.__wbg_ptr = 0), t
        }
        free() {
            let t = this.__destroy_into_raw()
            k.__wbg_queryengine_free(t)
        }
        constructor(t, r, n) {
            try {
                let a = k.__wbindgen_add_to_stack_pointer(-16)
                k.queryengine_new(a, N(t), N(r), ot(n) ? 0 : N(n))
                var o = De()[a / 4 + 0],
                    i = De()[a / 4 + 1],
                    s = De()[a / 4 + 2]
                if (s) throw pe(i)
                return (this.__wbg_ptr = o >>> 0), this
            } finally {
                k.__wbindgen_add_to_stack_pointer(16)
            }
        }
        connect(t) {
            let r = Ee(t, k.__wbindgen_malloc, k.__wbindgen_realloc),
                n = ce,
                o = k.queryengine_connect(this.__wbg_ptr, r, n)
            return pe(o)
        }
        disconnect(t) {
            let r = Ee(t, k.__wbindgen_malloc, k.__wbindgen_realloc),
                n = ce,
                o = k.queryengine_disconnect(this.__wbg_ptr, r, n)
            return pe(o)
        }
        query(t, r, n) {
            let o = Ee(t, k.__wbindgen_malloc, k.__wbindgen_realloc),
                i = ce,
                s = Ee(r, k.__wbindgen_malloc, k.__wbindgen_realloc),
                a = ce
            var u = ot(n)
                    ? 0
                    : Ee(n, k.__wbindgen_malloc, k.__wbindgen_realloc),
                l = ce
            let c = k.queryengine_query(this.__wbg_ptr, o, i, s, a, u, l)
            return pe(c)
        }
        startTransaction(t, r) {
            let n = Ee(t, k.__wbindgen_malloc, k.__wbindgen_realloc),
                o = ce,
                i = Ee(r, k.__wbindgen_malloc, k.__wbindgen_realloc),
                s = ce,
                a = k.queryengine_startTransaction(this.__wbg_ptr, n, o, i, s)
            return pe(a)
        }
        commitTransaction(t, r) {
            let n = Ee(t, k.__wbindgen_malloc, k.__wbindgen_realloc),
                o = ce,
                i = Ee(r, k.__wbindgen_malloc, k.__wbindgen_realloc),
                s = ce,
                a = k.queryengine_commitTransaction(this.__wbg_ptr, n, o, i, s)
            return pe(a)
        }
        rollbackTransaction(t, r) {
            let n = Ee(t, k.__wbindgen_malloc, k.__wbindgen_realloc),
                o = ce,
                i = Ee(r, k.__wbindgen_malloc, k.__wbindgen_realloc),
                s = ce,
                a = k.queryengine_rollbackTransaction(
                    this.__wbg_ptr,
                    n,
                    o,
                    i,
                    s
                )
            return pe(a)
        }
        metrics(t) {
            let r = Ee(t, k.__wbindgen_malloc, k.__wbindgen_realloc),
                n = ce,
                o = k.queryengine_metrics(this.__wbg_ptr, r, n)
            return pe(o)
        }
    },
    ji = class {
        __destroy_into_raw() {
            let t = this.__wbg_ptr
            return (this.__wbg_ptr = 0), t
        }
        free() {
            let t = this.__destroy_into_raw()
            k.__wbg_transactionproxy_free(t)
        }
    }
function tm(e, t) {
    try {
        var r = { a: e, b: t },
            n = (i, s) => {
                let a = r.a
                r.a = 0
                try {
                    return em(a, r.b, i, s)
                } finally {
                    r.a = a
                }
            }
        let o = new Promise(n)
        return N(o)
    } finally {
        r.a = r.b = 0
    }
}
function rm(e) {
    pe(e)
}
function nm() {
    return Date.now()
}
function om(e, t) {
    return setTimeout(I(e), t >>> 0)
}
function im() {
    return Re(function (e, t, r) {
        let n = I(e).call(I(t), I(r))
        return N(n)
    }, arguments)
}
function sm(e, t) {
    let r = new Error(en(e, t))
    return N(r)
}
function am(e, t) {
    let r = en(e, t)
    return N(r)
}
function um(e, t) {
    let r = I(t),
        n = typeof r == 'string' ? r : void 0
    var o = ot(n) ? 0 : Ee(n, k.__wbindgen_malloc, k.__wbindgen_realloc),
        i = ce
    ;(De()[e / 4 + 1] = i), (De()[e / 4 + 0] = o)
}
function lm(e) {
    let t = I(e)
    return N(t)
}
function cm(e) {
    return I(e) === void 0
}
function pm() {
    return Re(function (e) {
        let t = JSON.stringify(I(e))
        return N(t)
    }, arguments)
}
function fm() {
    return Re(function (e, t) {
        let r = JSON.parse(en(e, t))
        return N(r)
    }, arguments)
}
function dm() {
    return N(new Date())
}
function mm(e) {
    return I(e).getTime()
}
function gm() {
    let e = performance
    return ot(e) ? 0 : N(e)
}
function ym(e) {
    return I(e).now()
}
function hm(e, t) {
    return I(e) == I(t)
}
function bm(e) {
    let t = I(e)
    return typeof t == 'boolean' ? (t ? 1 : 0) : 2
}
function wm(e) {
    return typeof I(e) == 'bigint'
}
function xm(e, t) {
    let r = I(t),
        n = typeof r == 'number' ? r : void 0
    ;(Wd()[e / 8 + 1] = ot(n) ? 0 : n), (De()[e / 4 + 0] = !ot(n))
}
function Em(e) {
    return Number.isSafeInteger(I(e))
}
function Pm(e, t) {
    let r = I(t),
        n = typeof r == 'bigint' ? r : void 0
    ;(Hd()[e / 8 + 1] = ot(n) ? BigInt(0) : n), (De()[e / 4 + 0] = !ot(n))
}
function vm(e) {
    return N(e)
}
function _m(e, t) {
    return I(e) === I(t)
}
function Tm(e) {
    return Array.isArray(I(e))
}
function Am(e) {
    let t = I(e)
    return typeof t == 'object' && t !== null
}
function Cm() {
    return N(Symbol.iterator)
}
function Sm(e, t) {
    return I(e) in I(t)
}
function Mm(e) {
    let t = BigInt.asUintN(64, e)
    return N(t)
}
function Rm(e) {
    return I(e).length
}
function Om(e, t) {
    let r = I(e)[t >>> 0]
    return N(r)
}
function Im() {
    let e = new Array()
    return N(e)
}
function km(e) {
    return N(e)
}
function Fm(e, t, r) {
    I(e)[t >>> 0] = pe(r)
}
function Dm() {
    return N(new Map())
}
function Nm() {
    let e = new Object()
    return N(e)
}
function Lm(e, t, r) {
    let n = I(e).set(I(t), I(r))
    return N(n)
}
function Bm(e) {
    return typeof I(e) == 'string'
}
function jm(e, t, r) {
    I(e)[pe(t)] = pe(r)
}
function Um(e) {
    let t
    try {
        t = I(e) instanceof Promise
    } catch (n) {
        t = !1
    }
    return t
}
function $m(e) {
    return I(e).valueOf()
}
function qm(e, t) {
    let r = I(e)[I(t)]
    return N(r)
}
function Vm(e, t) {
    let r = String(I(t)),
        n = Ee(r, k.__wbindgen_malloc, k.__wbindgen_realloc),
        o = ce
    ;(De()[e / 4 + 1] = o), (De()[e / 4 + 0] = n)
}
function Km() {
    return Re(function (e, t) {
        let r = Reflect.get(I(e), I(t))
        return N(r)
    }, arguments)
}
function Qm() {
    return Re(function (e, t) {
        let r = I(e)[pe(t)]
        return N(r)
    }, arguments)
}
function Jm(e, t, r) {
    let n = I(e).subarray(t >>> 0, r >>> 0)
    return N(n)
}
function Gm() {
    return Re(function (e, t) {
        I(e).getRandomValues(I(t))
    }, arguments)
}
function Wm() {
    let e = k.memory
    return N(e)
}
function Hm(e) {
    let t = I(e).buffer
    return N(t)
}
function zm(e, t, r) {
    let n = new Uint8Array(I(e), t >>> 0, r >>> 0)
    return N(n)
}
function Ym() {
    return Re(function (e, t) {
        I(e).randomFillSync(pe(t))
    }, arguments)
}
function Zm(e) {
    let t = I(e).crypto
    return N(t)
}
function Xm(e) {
    let t = I(e).process
    return N(t)
}
function eg(e) {
    let t = I(e).versions
    return N(t)
}
function tg(e) {
    let t = I(e).node
    return N(t)
}
function rg() {
    return Re(function () {
        let e = module.require
        return N(e)
    }, arguments)
}
function ng(e) {
    return typeof I(e) == 'function'
}
function og(e) {
    let t = I(e).msCrypto
    return N(t)
}
function ig(e) {
    let t = new Uint8Array(e >>> 0)
    return N(t)
}
function sg() {
    return Re(function (e) {
        let t = I(e).next()
        return N(t)
    }, arguments)
}
function ag(e) {
    return I(e).done
}
function ug(e) {
    let t = I(e).value
    return N(t)
}
function lg() {
    return Re(function (e, t) {
        let r = I(e).call(I(t))
        return N(r)
    }, arguments)
}
function cg(e) {
    let t = I(e).next
    return N(t)
}
function pg() {
    return Re(function () {
        let e = self.self
        return N(e)
    }, arguments)
}
function fg() {
    return Re(function () {
        let e = window.window
        return N(e)
    }, arguments)
}
function dg() {
    return Re(function () {
        let e = globalThis.globalThis
        return N(e)
    }, arguments)
}
function mg() {
    return Re(function () {
        let e = global.global
        return N(e)
    }, arguments)
}
function gg(e, t) {
    let r = new b(en(e, t))
    return N(r)
}
function yg(e) {
    let t = new Uint8Array(I(e))
    return N(t)
}
function hg(e, t, r) {
    I(e).set(I(t), r >>> 0)
}
function bg(e) {
    return I(e).length
}
function wg(e) {
    let t
    try {
        t = I(e) instanceof Uint8Array
    } catch (n) {
        t = !1
    }
    return t
}
function xg(e) {
    let t
    try {
        t = I(e) instanceof ArrayBuffer
    } catch (n) {
        t = !1
    }
    return t
}
function Eg(e) {
    let t = Object.entries(I(e))
    return N(t)
}
function Pg(e, t) {
    let r = Di(I(t)),
        n = Ee(r, k.__wbindgen_malloc, k.__wbindgen_realloc),
        o = ce
    ;(De()[e / 4 + 1] = o), (De()[e / 4 + 0] = n)
}
function vg(e, t) {
    throw new Error(en(e, t))
}
function _g(e) {
    let t = pe(e).original
    return t.cnt-- == 1 ? ((t.a = 0), !0) : !1
}
function Tg(e, t) {
    let r = I(e).then(I(t))
    return N(r)
}
function Ag(e, t, r) {
    let n = I(e).then(I(t), I(r))
    return N(n)
}
function Cg(e) {
    let t = Promise.resolve(I(e))
    return N(t)
}
function Sg(e, t, r) {
    let n = zd(e, t, 342, Yd)
    return N(n)
}
var qi,
    Hu = {
        async loadLibrary(e) {
            var o
            let { generator: t, clientVersion: r, adapter: n } = e
            if (
                (t == null
                    ? void 0
                    : t.previewFeatures.includes('driverAdapters')) === void 0
            )
                throw new Z(
                    'The `driverAdapters` preview feature is required with `engineType="wasm"`',
                    r
                )
            if (n === void 0)
                throw new Z(
                    'The `adapter` option for `PrismaClient` is required with `engineType="wasm"`',
                    r
                )
            if (qi === void 0) {
                let i = await ((o = e.getQueryEngineWasmModule) == null
                    ? void 0
                    : o.call(e))
                if (i == null)
                    throw new Z(
                        'The loaded wasm module was unexpectedly `undefined` or `null` once loaded',
                        r
                    )
                ;(qi = new WebAssembly.Instance(i, {
                    './query_engine_bg.js': $i,
                }).exports),
                    Ui(qi)
            }
            return {
                debugPanic() {
                    return Promise.reject('{}')
                },
                dmmf() {
                    return Promise.resolve('{}')
                },
                version() {
                    return { commit: 'unknown', version: 'unknown' }
                },
                QueryEngine: Xr,
            }
        },
    }
var Mg = 'P2036',
    Ye = be('prisma:client:libraryEngine')
function Rg(e) {
    return e.item_type === 'query' && 'query' in e
}
function Og(e) {
    return 'level' in e ? e.level === 'error' && e.message === 'PANIC' : !1
}
var Ek = [...Ho, 'native'],
    zu = 0,
    tn = class extends pr {
        constructor(r, n) {
            var a, u, l
            super()
            let o = Rt(r.generator)
            ;(this.libraryLoader = n != null ? n : Hu),
                (this.config = r),
                (this.libraryStarted = !1),
                (this.logQueries = (a = r.logQueries) != null ? a : !1),
                (this.logLevel = (u = r.logLevel) != null ? u : 'error'),
                (this.logEmitter = r.logEmitter),
                (this.datamodel = atob(r.inlineSchema)),
                r.enableDebugLogs && (this.logLevel = 'debug')
            let i = Object.keys(r.overrideDatasources)[0],
                s = (l = r.overrideDatasources[i]) == null ? void 0 : l.url
            i !== void 0 &&
                s !== void 0 &&
                (this.datasourceOverrides = { [i]: s }),
                (this.libraryInstantiationPromise = this.instantiateLibrary()),
                this.checkForTooManyEngines()
        }
        checkForTooManyEngines() {
            zu === 10 &&
                console.warn(
                    `${zt('warn(prisma-client)')} This is the 10th instance of Prisma Client being started. Make sure this is intentional.`
                )
        }
        async transaction(r, n, o) {
            var u, l, c, g, y
            await this.start()
            let i = JSON.stringify(n),
                s
            if (r === 'start') {
                let P = JSON.stringify({
                    max_wait:
                        (u = o == null ? void 0 : o.maxWait) != null ? u : 2e3,
                    timeout:
                        (l = o == null ? void 0 : o.timeout) != null ? l : 5e3,
                    isolation_level: o == null ? void 0 : o.isolationLevel,
                })
                s = await ((c = this.engine) == null
                    ? void 0
                    : c.startTransaction(P, i))
            } else
                r === 'commit'
                    ? (s = await ((g = this.engine) == null
                          ? void 0
                          : g.commitTransaction(o.id, i)))
                    : r === 'rollback' &&
                      (s = await ((y = this.engine) == null
                          ? void 0
                          : y.rollbackTransaction(o.id, i)))
            let a = this.parseEngineResponse(s)
            if (Ig(a)) {
                let P = this.getExternalAdapterError(a)
                throw P
                    ? P.error
                    : new ge(a.message, {
                          code: a.error_code,
                          clientVersion: this.config.clientVersion,
                          meta: a.meta,
                      })
            }
            return a
        }
        async instantiateLibrary() {
            if ((Ye('internalSetup'), this.libraryInstantiationPromise))
                return this.libraryInstantiationPromise
            ;(this.platform = await this.getPlatform()),
                await this.loadEngine(),
                this.version()
        }
        async getPlatform() {}
        parseEngineResponse(r) {
            if (!r)
                throw new ye('Response from the Engine was empty', {
                    clientVersion: this.config.clientVersion,
                })
            try {
                return JSON.parse(r)
            } catch (n) {
                throw new ye('Unable to JSON.parse response from engine', {
                    clientVersion: this.config.clientVersion,
                })
            }
        }
        async loadEngine() {
            var r, n
            if (!this.engine) {
                this.QueryEngineConstructor ||
                    ((this.library = await this.libraryLoader.loadLibrary(
                        this.config
                    )),
                    (this.QueryEngineConstructor = this.library.QueryEngine))
                try {
                    let o = new x(this),
                        { adapter: i } = this.config
                    i && Ye('Using driver adapter: %O', i),
                        (this.engine = new this.QueryEngineConstructor(
                            {
                                datamodel: this.datamodel,
                                env: h.env,
                                logQueries:
                                    (r = this.config.logQueries) != null
                                        ? r
                                        : !1,
                                ignoreEnvVarErrors: !0,
                                datasourceOverrides:
                                    (n = this.datasourceOverrides) != null
                                        ? n
                                        : {},
                                logLevel: this.logLevel,
                                configDir: this.config.cwd,
                                engineProtocol: 'json',
                            },
                            (s) => {
                                var a
                                ;(a = o.deref()) == null || a.logger(s)
                            },
                            i
                        )),
                        zu++
                } catch (o) {
                    let i = o,
                        s = this.parseInitError(i.message)
                    throw typeof s == 'string'
                        ? i
                        : new Z(
                              s.message,
                              this.config.clientVersion,
                              s.error_code
                          )
                }
            }
        }
        logger(r) {
            var o
            let n = this.parseEngineResponse(r)
            if (n) {
                if ('span' in n) {
                    this.config.tracingHelper.createEngineSpan(n)
                    return
                }
                ;(n.level =
                    (o = n == null ? void 0 : n.level.toLowerCase()) != null
                        ? o
                        : 'unknown'),
                    Rg(n)
                        ? this.logEmitter.emit('query', {
                              timestamp: new Date(),
                              query: n.query,
                              params: n.params,
                              duration: Number(n.duration_ms),
                              target: n.module_path,
                          })
                        : Og(n)
                          ? (this.loggerRustPanic = new Be(
                                this.getErrorMessageWithLink(
                                    `${n.message}: ${n.reason} in ${n.file}:${n.line}:${n.column}`
                                ),
                                this.config.clientVersion
                            ))
                          : this.logEmitter.emit(n.level, {
                                timestamp: new Date(),
                                message: n.message,
                                target: n.module_path,
                            })
            }
        }
        getErrorMessageWithLink(r) {
            var n
            return Uu({
                platform: this.platform,
                title: r,
                version: this.config.clientVersion,
                engineVersion:
                    (n = this.versionInfo) == null ? void 0 : n.commit,
                database: this.config.activeProvider,
                query: this.lastQuery,
            })
        }
        parseInitError(r) {
            try {
                return JSON.parse(r)
            } catch (n) {}
            return r
        }
        parseRequestError(r) {
            try {
                return JSON.parse(r)
            } catch (n) {}
            return r
        }
        on(r, n) {
            if (r === 'beforeExit')
                throw new Error(
                    '"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.'
                )
            this.logEmitter.on(r, n)
        }
        async start() {
            if (
                (await this.libraryInstantiationPromise,
                await this.libraryStoppingPromise,
                this.libraryStartingPromise)
            )
                return (
                    Ye(
                        `library already starting, this.libraryStarted: ${this.libraryStarted}`
                    ),
                    this.libraryStartingPromise
                )
            if (this.libraryStarted) return
            let r = async () => {
                var n
                Ye('library starting')
                try {
                    let o = {
                        traceparent: this.config.tracingHelper.getTraceParent(),
                    }
                    await ((n = this.engine) == null
                        ? void 0
                        : n.connect(JSON.stringify(o))),
                        (this.libraryStarted = !0),
                        Ye('library started')
                } catch (o) {
                    let i = this.parseInitError(o.message)
                    throw typeof i == 'string'
                        ? o
                        : new Z(
                              i.message,
                              this.config.clientVersion,
                              i.error_code
                          )
                } finally {
                    this.libraryStartingPromise = void 0
                }
            }
            return (
                (this.libraryStartingPromise =
                    this.config.tracingHelper.runInChildSpan('connect', r)),
                this.libraryStartingPromise
            )
        }
        async stop() {
            if (
                (await this.libraryStartingPromise,
                await this.executingQueryPromise,
                this.libraryStoppingPromise)
            )
                return (
                    Ye('library is already stopping'),
                    this.libraryStoppingPromise
                )
            if (!this.libraryStarted) return
            let r = async () => {
                var o
                await new Promise((i) => setTimeout(i, 5)),
                    Ye('library stopping')
                let n = {
                    traceparent: this.config.tracingHelper.getTraceParent(),
                }
                await ((o = this.engine) == null
                    ? void 0
                    : o.disconnect(JSON.stringify(n))),
                    (this.libraryStarted = !1),
                    (this.libraryStoppingPromise = void 0),
                    Ye('library stopped')
            }
            return (
                (this.libraryStoppingPromise =
                    this.config.tracingHelper.runInChildSpan('disconnect', r)),
                this.libraryStoppingPromise
            )
        }
        version() {
            var r, n, o
            return (
                (this.versionInfo =
                    (r = this.library) == null ? void 0 : r.version()),
                (o = (n = this.versionInfo) == null ? void 0 : n.version) !=
                null
                    ? o
                    : 'unknown'
            )
        }
        debugPanic(r) {
            var n
            return (n = this.library) == null ? void 0 : n.debugPanic(r)
        }
        async request(r, { traceparent: n, interactiveTransaction: o }) {
            var a, u
            Ye(`sending request, this.libraryStarted: ${this.libraryStarted}`)
            let i = JSON.stringify({ traceparent: n }),
                s = JSON.stringify(r)
            try {
                await this.start(),
                    (this.executingQueryPromise =
                        (a = this.engine) == null
                            ? void 0
                            : a.query(s, i, o == null ? void 0 : o.id)),
                    (this.lastQuery = s)
                let l = this.parseEngineResponse(
                    await this.executingQueryPromise
                )
                if (l.errors)
                    throw l.errors.length === 1
                        ? this.buildQueryError(l.errors[0])
                        : new ye(JSON.stringify(l.errors), {
                              clientVersion: this.config.clientVersion,
                          })
                if (this.loggerRustPanic) throw this.loggerRustPanic
                return { data: l, elapsed: 0 }
            } catch (l) {
                if (l instanceof Z) throw l
                if (
                    l.code === 'GenericFailure' &&
                    (u = l.message) != null &&
                    u.startsWith('PANIC:')
                )
                    throw new Be(
                        this.getErrorMessageWithLink(l.message),
                        this.config.clientVersion
                    )
                let c = this.parseRequestError(l.message)
                throw typeof c == 'string'
                    ? l
                    : new ye(
                          `${c.message}
${c.backtrace}`,
                          { clientVersion: this.config.clientVersion }
                      )
            }
        }
        async requestBatch(r, { transaction: n, traceparent: o }) {
            Ye('requestBatch')
            let i = to(r, n)
            await this.start(),
                (this.lastQuery = JSON.stringify(i)),
                (this.executingQueryPromise = this.engine.query(
                    this.lastQuery,
                    JSON.stringify({ traceparent: o }),
                    Gu(n)
                ))
            let s = await this.executingQueryPromise,
                a = this.parseEngineResponse(s)
            if (a.errors)
                throw a.errors.length === 1
                    ? this.buildQueryError(a.errors[0])
                    : new ye(JSON.stringify(a.errors), {
                          clientVersion: this.config.clientVersion,
                      })
            let { batchResult: u, errors: l } = a
            if (Array.isArray(u))
                return u.map((c) => {
                    var g
                    return c.errors && c.errors.length > 0
                        ? (g = this.loggerRustPanic) != null
                            ? g
                            : this.buildQueryError(c.errors[0])
                        : { data: c, elapsed: 0 }
                })
            throw l && l.length === 1
                ? new Error(l[0].error)
                : new Error(JSON.stringify(a))
        }
        buildQueryError(r) {
            if (r.user_facing_error.is_panic)
                return new Be(
                    this.getErrorMessageWithLink(r.user_facing_error.message),
                    this.config.clientVersion
                )
            let n = this.getExternalAdapterError(r.user_facing_error)
            return n ? n.error : Br(r, this.config.clientVersion)
        }
        getExternalAdapterError(r) {
            var n
            if (r.error_code === Mg && this.config.adapter) {
                let o = (n = r.meta) == null ? void 0 : n.id
                Sn(
                    typeof o == 'number',
                    'Malformed external JS error received from the engine'
                )
                let i = this.config.adapter.errorRegistry.consumeError(o)
                return (
                    Sn(i, 'External error with reported id was not registered'),
                    i
                )
            }
        }
        async metrics(r) {
            await this.start()
            let n = await this.engine.metrics(JSON.stringify(r))
            return r.format === 'prometheus' ? n : this.parseEngineResponse(n)
        }
    }
function Ig(e) {
    return typeof e == 'object' && e !== null && e.error_code !== void 0
}
function Yu(e, t) {
    let r
    try {
        r = ro({
            inlineDatasources: t.inlineDatasources,
            overrideDatasources: t.overrideDatasources,
            env: { ...t.env, ...h.env },
            clientVersion: t.clientVersion,
        })
    } catch (o) {}
    return (
        e.noEngine !== !0 &&
            r != null &&
            r.startsWith('prisma://') &&
            Rn(
                'recommend--no-engine',
                'In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)'
            ),
        Rt(t.generator) === 'wasm' && t.adapter !== void 0
            ? new tn(t)
            : ((r != null && r.startsWith('prisma://')) || e.noEngine,
              new Yr(t))
    )
}
m()
p()
f()
d()
function co({ generator: e }) {
    var t
    return (t = e == null ? void 0 : e.previewFeatures) != null ? t : []
}
m()
p()
f()
d()
m()
p()
f()
d()
m()
p()
f()
d()
var nl = ve(Vi())
m()
p()
f()
d()
function tl(e, t) {
    let r = rl(e),
        n = kg(r),
        o = Dg(n)
    o ? po(o, t) : t.addErrorMessage(() => 'Unknown error')
}
function rl(e) {
    return e.errors.flatMap((t) => (t.kind === 'Union' ? rl(t) : [t]))
}
function kg(e) {
    let t = new Map(),
        r = []
    for (let n of e) {
        if (n.kind !== 'InvalidArgumentType') {
            r.push(n)
            continue
        }
        let o = `${n.selectionPath.join('.')}:${n.argumentPath.join('.')}`,
            i = t.get(o)
        i
            ? t.set(o, {
                  ...n,
                  argument: {
                      ...n.argument,
                      typeNames: Fg(i.argument.typeNames, n.argument.typeNames),
                  },
              })
            : t.set(o, n)
    }
    return r.push(...t.values()), r
}
function Fg(e, t) {
    return [...new Set(e.concat(t))]
}
function Dg(e) {
    return ni(e, (t, r) => {
        let n = Xu(t),
            o = Xu(r)
        return n !== o ? n - o : el(t) - el(r)
    })
}
function Xu(e) {
    let t = 0
    return (
        Array.isArray(e.selectionPath) && (t += e.selectionPath.length),
        Array.isArray(e.argumentPath) && (t += e.argumentPath.length),
        t
    )
}
function el(e) {
    switch (e.kind) {
        case 'InvalidArgumentValue':
        case 'ValueTooLarge':
            return 20
        case 'InvalidArgumentType':
            return 10
        case 'RequiredArgumentMissing':
            return -10
        default:
            return 0
    }
}
m()
p()
f()
d()
var it = class {
    constructor(t, r) {
        this.name = t
        this.value = r
        this.isRequired = !1
    }
    makeRequired() {
        return (this.isRequired = !0), this
    }
    write(t) {
        let {
            colors: { green: r },
        } = t.context
        t.addMarginSymbol(r(this.isRequired ? '+' : '?')),
            t.write(r(this.name)),
            this.isRequired || t.write(r('?')),
            t.write(r(': ')),
            typeof this.value == 'string'
                ? t.write(r(this.value))
                : t.write(this.value)
    }
}
m()
p()
f()
d()
var fo = class {
    constructor() {
        this.fields = []
    }
    addField(t, r) {
        return (
            this.fields.push({
                write(n) {
                    let { green: o, dim: i } = n.context.colors
                    n.write(o(i(`${t}: ${r}`))).addMarginSymbol(o(i('+')))
                },
            }),
            this
        )
    }
    write(t) {
        let {
            colors: { green: r },
        } = t.context
        t.writeLine(r('{'))
            .withIndent(() => {
                t.writeJoined(ar, this.fields).newLine()
            })
            .write(r('}'))
            .addMarginSymbol(r('+'))
    }
}
function po(e, t) {
    switch (e.kind) {
        case 'IncludeAndSelect':
            Ng(e, t)
            break
        case 'IncludeOnScalar':
            Lg(e, t)
            break
        case 'EmptySelection':
            Bg(e, t)
            break
        case 'UnknownSelectionField':
            jg(e, t)
            break
        case 'UnknownArgument':
            Ug(e, t)
            break
        case 'UnknownInputField':
            $g(e, t)
            break
        case 'RequiredArgumentMissing':
            qg(e, t)
            break
        case 'InvalidArgumentType':
            Vg(e, t)
            break
        case 'InvalidArgumentValue':
            Kg(e, t)
            break
        case 'ValueTooLarge':
            Qg(e, t)
            break
        case 'SomeFieldsMissing':
            Jg(e, t)
            break
        case 'TooManyFieldsGiven':
            Gg(e, t)
            break
        case 'Union':
            tl(e, t)
            break
        default:
            throw new Error('not implemented: ' + e.kind)
    }
}
function Ng(e, t) {
    var n, o
    let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)
    r &&
        r instanceof ue &&
        ((n = r.getField('include')) == null || n.markAsError(),
        (o = r.getField('select')) == null || o.markAsError()),
        t.addErrorMessage(
            (i) =>
                `Please ${i.bold('either')} use ${i.green('`include`')} or ${i.green('`select`')}, but ${i.red('not both')} at the same time.`
        )
}
function Lg(e, t) {
    var s, a
    let [r, n] = mo(e.selectionPath),
        o = e.outputType,
        i =
            (s = t.arguments.getDeepSelectionParent(r)) == null
                ? void 0
                : s.value
    if (i && ((a = i.getField(n)) == null || a.markAsError(), o))
        for (let u of o.fields)
            u.isRelation && i.addSuggestion(new it(u.name, 'true'))
    t.addErrorMessage((u) => {
        let l = `Invalid scalar field ${u.red(`\`${n}\``)} for ${u.bold('include')} statement`
        return (
            o ? (l += ` on model ${u.bold(o.name)}. ${rn(u)}`) : (l += '.'),
            (l += `
Note that ${u.bold('include')} statements only accept relation fields.`),
            l
        )
    })
}
function Bg(e, t) {
    var i, s
    let r = e.outputType,
        n =
            (i = t.arguments.getDeepSelectionParent(e.selectionPath)) == null
                ? void 0
                : i.value,
        o = (s = n == null ? void 0 : n.isEmpty()) != null ? s : !1
    n && (n.removeAllFields(), sl(n, r)),
        t.addErrorMessage((a) =>
            o
                ? `The ${a.red('`select`')} statement for type ${a.bold(r.name)} must not be empty. ${rn(a)}`
                : `The ${a.red('`select`')} statement for type ${a.bold(r.name)} needs ${a.bold('at least one truthy value')}.`
        )
}
function jg(e, t) {
    var i
    let [r, n] = mo(e.selectionPath),
        o = t.arguments.getDeepSelectionParent(r)
    o &&
        ((i = o.value.getField(n)) == null || i.markAsError(),
        sl(o.value, e.outputType)),
        t.addErrorMessage((s) => {
            let a = [`Unknown field ${s.red(`\`${n}\``)}`]
            return (
                o && a.push(`for ${s.bold(o.kind)} statement`),
                a.push(`on model ${s.bold(`\`${e.outputType.name}\``)}.`),
                a.push(rn(s)),
                a.join(' ')
            )
        })
}
function Ug(e, t) {
    var o
    let r = e.argumentPath[0],
        n = t.arguments.getDeepSubSelectionValue(e.selectionPath)
    n instanceof ue &&
        ((o = n.getField(r)) == null || o.markAsError(), Wg(n, e.arguments)),
        t.addErrorMessage((i) =>
            ol(
                i,
                r,
                e.arguments.map((s) => s.name)
            )
        )
}
function $g(e, t) {
    var i
    let [r, n] = mo(e.argumentPath),
        o = t.arguments.getDeepSubSelectionValue(e.selectionPath)
    if (o instanceof ue) {
        ;(i = o.getDeepField(e.argumentPath)) == null || i.markAsError()
        let s = o.getDeepFieldValue(r)
        s instanceof ue && al(s, e.inputType)
    }
    t.addErrorMessage((s) =>
        ol(
            s,
            n,
            e.inputType.fields.map((a) => a.name)
        )
    )
}
function ol(e, t, r) {
    let n = [`Unknown argument \`${e.red(t)}\`.`],
        o = zg(t, r)
    return (
        o && n.push(`Did you mean \`${e.green(o)}\`?`),
        r.length > 0 && n.push(rn(e)),
        n.join(' ')
    )
}
function qg(e, t) {
    let r
    t.addErrorMessage((u) =>
        (r == null ? void 0 : r.value) instanceof le && r.value.text === 'null'
            ? `Argument \`${u.green(i)}\` must not be ${u.red('null')}.`
            : `Argument \`${u.green(i)}\` is missing.`
    )
    let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)
    if (!(n instanceof ue)) return
    let [o, i] = mo(e.argumentPath),
        s = new fo(),
        a = n.getDeepFieldValue(o)
    if (a instanceof ue)
        if (
            ((r = a.getField(i)),
            r && a.removeField(i),
            e.inputTypes.length === 1 && e.inputTypes[0].kind === 'object')
        ) {
            for (let u of e.inputTypes[0].fields)
                s.addField(u.name, u.typeNames.join(' | '))
            a.addSuggestion(new it(i, s).makeRequired())
        } else {
            let u = e.inputTypes.map(il).join(' | ')
            a.addSuggestion(new it(i, u).makeRequired())
        }
}
function il(e) {
    return e.kind === 'list' ? `${il(e.elementType)}[]` : e.name
}
function Vg(e, t) {
    var o
    let r = e.argument.name,
        n = t.arguments.getDeepSubSelectionValue(e.selectionPath)
    n instanceof ue &&
        ((o = n.getDeepFieldValue(e.argumentPath)) == null || o.markAsError()),
        t.addErrorMessage((i) => {
            let s = go(
                'or',
                e.argument.typeNames.map((a) => i.green(a))
            )
            return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${s}, provided ${i.red(e.inferredType)}.`
        })
}
function Kg(e, t) {
    var o
    let r = e.argument.name,
        n = t.arguments.getDeepSubSelectionValue(e.selectionPath)
    n instanceof ue &&
        ((o = n.getDeepFieldValue(e.argumentPath)) == null || o.markAsError()),
        t.addErrorMessage((i) => {
            let s = [`Invalid value for argument \`${i.bold(r)}\``]
            if (
                (e.underlyingError && s.push(`: ${e.underlyingError}`),
                s.push('.'),
                e.argument.typeNames.length > 0)
            ) {
                let a = go(
                    'or',
                    e.argument.typeNames.map((u) => i.green(u))
                )
                s.push(` Expected ${a}.`)
            }
            return s.join('')
        })
}
function Qg(e, t) {
    let r = e.argument.name,
        n = t.arguments.getDeepSubSelectionValue(e.selectionPath),
        o
    if (n instanceof ue) {
        let i = n.getDeepField(e.argumentPath),
            s = i == null ? void 0 : i.value
        s == null || s.markAsError(), s instanceof le && (o = s.text)
    }
    t.addErrorMessage((i) => {
        let s = ['Unable to fit value']
        return (
            o && s.push(i.red(o)),
            s.push(`into a 64-bit signed integer for field \`${i.bold(r)}\``),
            s.join(' ')
        )
    })
}
function Jg(e, t) {
    let r = e.argumentPath[e.argumentPath.length - 1],
        n = t.arguments.getDeepSubSelectionValue(e.selectionPath)
    if (n instanceof ue) {
        let o = n.getDeepFieldValue(e.argumentPath)
        o instanceof ue && al(o, e.inputType)
    }
    t.addErrorMessage((o) => {
        let i = [
            `Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`,
        ]
        return (
            e.constraints.minFieldCount === 1
                ? e.constraints.requiredFields
                    ? i.push(
                          `${o.green('at least one of')} ${go(
                              'or',
                              e.constraints.requiredFields.map(
                                  (s) => `\`${o.bold(s)}\``
                              )
                          )} arguments.`
                      )
                    : i.push(`${o.green('at least one')} argument.`)
                : i.push(
                      `${o.green(`at least ${e.constraints.minFieldCount}`)} arguments.`
                  ),
            i.push(rn(o)),
            i.join(' ')
        )
    })
}
function Gg(e, t) {
    let r = e.argumentPath[e.argumentPath.length - 1],
        n = t.arguments.getDeepSubSelectionValue(e.selectionPath),
        o = []
    if (n instanceof ue) {
        let i = n.getDeepFieldValue(e.argumentPath)
        i instanceof ue && (i.markAsError(), (o = Object.keys(i.getFields())))
    }
    t.addErrorMessage((i) => {
        let s = [
            `Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`,
        ]
        return (
            e.constraints.minFieldCount === 1 &&
            e.constraints.maxFieldCount == 1
                ? s.push(`${i.green('exactly one')} argument,`)
                : e.constraints.maxFieldCount == 1
                  ? s.push(`${i.green('at most one')} argument,`)
                  : s.push(
                        `${i.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`
                    ),
            s.push(
                `but you provided ${go(
                    'and',
                    o.map((a) => i.red(a))
                )}. Please choose`
            ),
            e.constraints.maxFieldCount === 1
                ? s.push('one.')
                : s.push(`${e.constraints.maxFieldCount}.`),
            s.join(' ')
        )
    })
}
function sl(e, t) {
    for (let r of t.fields)
        e.hasField(r.name) || e.addSuggestion(new it(r.name, 'true'))
}
function Wg(e, t) {
    for (let r of t)
        e.hasField(r.name) ||
            e.addSuggestion(new it(r.name, r.typeNames.join(' | ')))
}
function al(e, t) {
    if (t.kind === 'object')
        for (let r of t.fields)
            e.hasField(r.name) ||
                e.addSuggestion(new it(r.name, r.typeNames.join(' | ')))
}
function mo(e) {
    let t = [...e],
        r = t.pop()
    if (!r) throw new Error('unexpected empty path')
    return [t, r]
}
function rn({ green: e, enabled: t }) {
    return (
        'Available options are ' +
        (t ? `listed in ${e('green')}` : 'marked with ?') +
        '.'
    )
}
function go(e, t) {
    if (t.length === 1) return t[0]
    let r = [...t],
        n = r.pop()
    return `${r.join(', ')} ${e} ${n}`
}
var Hg = 3
function zg(e, t) {
    let r = 1 / 0,
        n
    for (let o of t) {
        let i = (0, nl.default)(e, o)
        i > Hg || (i < r && ((r = i), (n = o)))
    }
    return n
}
function yo({
    args: e,
    errors: t,
    errorFormat: r,
    callsite: n,
    originalMethod: o,
    clientVersion: i,
}) {
    let s = Gn(e)
    for (let g of t) po(g, s)
    let a = r === 'pretty' ? Ya : Qn,
        u = s.renderAllMessages(a),
        l = new tr(0, { colors: a }).write(s).toString(),
        c = cr({
            message: u,
            callsite: n,
            originalMethod: o,
            showColors: r === 'pretty',
            callArguments: l,
        })
    throw new Te(c, { clientVersion: i })
}
var Yg = {
    findUnique: 'findUnique',
    findUniqueOrThrow: 'findUniqueOrThrow',
    findFirst: 'findFirst',
    findFirstOrThrow: 'findFirstOrThrow',
    findMany: 'findMany',
    count: 'aggregate',
    create: 'createOne',
    createMany: 'createMany',
    update: 'updateOne',
    updateMany: 'updateMany',
    upsert: 'upsertOne',
    delete: 'deleteOne',
    deleteMany: 'deleteMany',
    executeRaw: 'executeRaw',
    queryRaw: 'queryRaw',
    aggregate: 'aggregate',
    groupBy: 'groupBy',
    runCommandRaw: 'runCommandRaw',
    findRaw: 'findRaw',
    aggregateRaw: 'aggregateRaw',
}
function ul({
    modelName: e,
    action: t,
    args: r,
    runtimeDataModel: n,
    extensions: o,
    callsite: i,
    clientMethod: s,
    errorFormat: a,
    clientVersion: u,
}) {
    let l = new Ki({
        runtimeDataModel: n,
        modelName: e,
        action: t,
        rootArgs: r,
        callsite: i,
        extensions: o,
        selectionPath: [],
        argumentPath: [],
        originalMethod: s,
        errorFormat: a,
        clientVersion: u,
    })
    return { modelName: e, action: Yg[t], query: Qi(r, l) }
}
function Qi({ select: e, include: t, ...r } = {}, n) {
    return { arguments: cl(r, n), selection: Zg(e, t, n) }
}
function Zg(e, t, r) {
    return (
        e &&
            t &&
            r.throwValidationError({
                kind: 'IncludeAndSelect',
                selectionPath: r.getSelectionPath(),
            }),
        e ? ty(e, r) : Xg(r, t)
    )
}
function Xg(e, t) {
    let r = {}
    return (
        e.model &&
            !e.isRawAction() &&
            ((r.$composites = !0), (r.$scalars = !0)),
        t && ey(r, t, e),
        r
    )
}
function ey(e, t, r) {
    for (let [n, o] of Object.entries(t)) {
        let i = r.findField(n)
        i &&
            (i == null ? void 0 : i.kind) !== 'object' &&
            r.throwValidationError({
                kind: 'IncludeOnScalar',
                selectionPath: r.getSelectionPath().concat(n),
                outputType: r.getOutputTypeDescription(),
            }),
            o === !0
                ? (e[n] = !0)
                : typeof o == 'object' && (e[n] = Qi(o, r.nestSelection(n)))
    }
}
function ty(e, t) {
    let r = {},
        n = t.getComputedFields(),
        o = Ou(e, n)
    for (let [i, s] of Object.entries(o)) {
        let a = t.findField(i)
        ;(n != null && n[i] && !a) ||
            (s === !0
                ? (r[i] = !0)
                : typeof s == 'object' && (r[i] = Qi(s, t.nestSelection(i))))
    }
    return r
}
function ll(e, t) {
    if (e === null) return null
    if (typeof e == 'string' || typeof e == 'number' || typeof e == 'boolean')
        return e
    if (typeof e == 'bigint') return { $type: 'BigInt', value: String(e) }
    if (rr(e)) {
        if (Dn(e)) return { $type: 'DateTime', value: e.toISOString() }
        t.throwValidationError({
            kind: 'InvalidArgumentValue',
            selectionPath: t.getSelectionPath(),
            argumentPath: t.getArgumentPath(),
            argument: { name: t.getArgumentName(), typeNames: ['Date'] },
            underlyingError: 'Provided Date object is invalid',
        })
    }
    if (sr(e))
        return {
            $type: 'FieldRef',
            value: { _ref: e.name, _container: e.modelName },
        }
    if (Array.isArray(e)) return ry(e, t)
    if (ArrayBuffer.isView(e))
        return { $type: 'Bytes', value: w.Buffer.from(e).toString('base64') }
    if (ny(e)) return e.values
    if (ir(e)) return { $type: 'Decimal', value: e.toFixed() }
    if (e instanceof et) {
        if (e !== si.instances[e._getName()])
            throw new Error('Invalid ObjectEnumValue')
        return { $type: 'Enum', value: e._getName() }
    }
    if (oy(e)) return e.toJSON()
    if (typeof e == 'object') return cl(e, t)
    t.throwValidationError({
        kind: 'InvalidArgumentValue',
        selectionPath: t.getSelectionPath(),
        argumentPath: t.getArgumentPath(),
        argument: { name: t.getArgumentName(), typeNames: [] },
        underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it`,
    })
}
function cl(e, t) {
    if (e.$type) return { $type: 'Json', value: JSON.stringify(e) }
    let r = {}
    for (let n in e) {
        let o = e[n]
        o !== void 0 && (r[n] = ll(o, t.nestArgument(n)))
    }
    return r
}
function ry(e, t) {
    let r = []
    for (let n = 0; n < e.length; n++) {
        let o = t.nestArgument(String(n)),
            i = e[n]
        i === void 0 &&
            t.throwValidationError({
                kind: 'InvalidArgumentValue',
                selectionPath: o.getSelectionPath(),
                argumentPath: o.getArgumentPath(),
                argument: {
                    name: `${t.getArgumentName()}[${n}]`,
                    typeNames: [],
                },
                underlyingError:
                    'Can not use `undefined` value within array. Use `null` or filter out `undefined` values',
            }),
            r.push(ll(i, o))
    }
    return r
}
function ny(e) {
    return (
        typeof e == 'object' && e !== null && e.__prismaRawParameters__ === !0
    )
}
function oy(e) {
    return typeof e == 'object' && e !== null && typeof e.toJSON == 'function'
}
var Ki = class e {
    constructor(t) {
        this.params = t
        this.params.modelName &&
            (this.model =
                this.params.runtimeDataModel.models[this.params.modelName])
    }
    throwValidationError(t) {
        var r
        yo({
            errors: [t],
            originalMethod: this.params.originalMethod,
            args: (r = this.params.rootArgs) != null ? r : {},
            callsite: this.params.callsite,
            errorFormat: this.params.errorFormat,
            clientVersion: this.params.clientVersion,
        })
    }
    getSelectionPath() {
        return this.params.selectionPath
    }
    getArgumentPath() {
        return this.params.argumentPath
    }
    getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1]
    }
    getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.model))
            return {
                name: this.params.modelName,
                fields: this.model.fields.map((t) => ({
                    name: t.name,
                    typeName: 'boolean',
                    isRelation: t.kind === 'object',
                })),
            }
    }
    isRawAction() {
        return [
            'executeRaw',
            'queryRaw',
            'runCommandRaw',
            'findRaw',
            'aggregateRaw',
        ].includes(this.params.action)
    }
    getComputedFields() {
        if (this.params.modelName)
            return this.params.extensions.getAllComputedFields(
                this.params.modelName
            )
    }
    findField(t) {
        var r
        return (r = this.model) == null
            ? void 0
            : r.fields.find((n) => n.name === t)
    }
    nestSelection(t) {
        let r = this.findField(t),
            n = (r == null ? void 0 : r.kind) === 'object' ? r.type : void 0
        return new e({
            ...this.params,
            modelName: n,
            selectionPath: this.params.selectionPath.concat(t),
        })
    }
    nestArgument(t) {
        return new e({
            ...this.params,
            argumentPath: this.params.argumentPath.concat(t),
        })
    }
}
m()
p()
f()
d()
var pl = (e) => ({ command: e })
m()
p()
f()
d()
m()
p()
f()
d()
var fl = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`)
m()
p()
f()
d()
function nn(e) {
    try {
        return dl(e, 'fast')
    } catch (t) {
        return dl(e, 'slow')
    }
}
function dl(e, t) {
    return JSON.stringify(e.map((r) => iy(r, t)))
}
function iy(e, t) {
    return typeof e == 'bigint'
        ? { prisma__type: 'bigint', prisma__value: e.toString() }
        : rr(e)
          ? { prisma__type: 'date', prisma__value: e.toJSON() }
          : rt.isDecimal(e)
            ? { prisma__type: 'decimal', prisma__value: e.toJSON() }
            : w.Buffer.isBuffer(e)
              ? { prisma__type: 'bytes', prisma__value: e.toString('base64') }
              : sy(e) || ArrayBuffer.isView(e)
                ? {
                      prisma__type: 'bytes',
                      prisma__value: w.Buffer.from(e).toString('base64'),
                  }
                : typeof e == 'object' && t === 'slow'
                  ? gl(e)
                  : e
}
function sy(e) {
    return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer
        ? !0
        : typeof e == 'object' && e !== null
          ? e[Symbol.toStringTag] === 'ArrayBuffer' ||
            e[Symbol.toStringTag] === 'SharedArrayBuffer'
          : !1
}
function gl(e) {
    if (typeof e != 'object' || e === null) return e
    if (typeof e.toJSON == 'function') return e.toJSON()
    if (Array.isArray(e)) return e.map(ml)
    let t = {}
    for (let r of Object.keys(e)) t[r] = ml(e[r])
    return t
}
function ml(e) {
    return typeof e == 'bigint' ? e.toString() : gl(e)
}
var ay = /^(\s*alter\s)/i,
    yl = be('prisma:client')
function Ji(e, t, r, n) {
    if (
        !(e !== 'postgresql' && e !== 'cockroachdb') &&
        r.length > 0 &&
        ay.exec(t)
    )
        throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`)
}
var Gi =
        ({ clientMethod: e, activeProvider: t, driverAdapterProvider: r }) =>
        (n) => {
            r !== void 0 && (t = r)
            let o = '',
                i
            if (Array.isArray(n)) {
                let [s, ...a] = n
                ;(o = s),
                    (i = { values: nn(a || []), __prismaRawParameters__: !0 })
            } else
                switch (t) {
                    case 'sqlite':
                    case 'mysql': {
                        ;(o = n.sql),
                            (i = {
                                values: nn(n.values),
                                __prismaRawParameters__: !0,
                            })
                        break
                    }
                    case 'cockroachdb':
                    case 'postgresql':
                    case 'postgres': {
                        ;(o = n.text),
                            (i = {
                                values: nn(n.values),
                                __prismaRawParameters__: !0,
                            })
                        break
                    }
                    case 'sqlserver': {
                        ;(o = fl(n)),
                            (i = {
                                values: nn(n.values),
                                __prismaRawParameters__: !0,
                            })
                        break
                    }
                    default:
                        throw new Error(
                            `The ${t} provider does not support ${e}`
                        )
                }
            return (
                i != null && i.values
                    ? yl(`prisma.${e}(${o}, ${i.values})`)
                    : yl(`prisma.${e}(${o})`),
                { query: o, parameters: i }
            )
        },
    hl = {
        requestArgsToMiddlewareArgs(e) {
            return [e.strings, ...e.values]
        },
        middlewareArgsToRequestArgs(e) {
            let [t, ...r] = e
            return new Fe(t, r)
        },
    },
    bl = {
        requestArgsToMiddlewareArgs(e) {
            return [e]
        },
        middlewareArgsToRequestArgs(e) {
            return e[0]
        },
    }
m()
p()
f()
d()
function Wi(e) {
    return function (r) {
        let n,
            o = (i = e) => {
                try {
                    return i === void 0 ||
                        (i == null ? void 0 : i.kind) === 'itx'
                        ? n != null
                            ? n
                            : (n = wl(r(i)))
                        : wl(r(i))
                } catch (s) {
                    return Promise.reject(s)
                }
            }
        return {
            then(i, s) {
                return o().then(i, s)
            },
            catch(i) {
                return o().catch(i)
            },
            finally(i) {
                return o().finally(i)
            },
            requestTransaction(i) {
                let s = o(i)
                return s.requestTransaction ? s.requestTransaction(i) : s
            },
            [Symbol.toStringTag]: 'PrismaPromise',
        }
    }
}
function wl(e) {
    return typeof e.then == 'function' ? e : Promise.resolve(e)
}
m()
p()
f()
d()
var xl = {
        isEnabled() {
            return !1
        },
        getTraceParent() {
            return '00-10-10-00'
        },
        async createEngineSpan() {},
        getActiveContext() {},
        runInChildSpan(e, t) {
            return t()
        },
    },
    Hi = class {
        isEnabled() {
            return this.getGlobalTracingHelper().isEnabled()
        }
        getTraceParent(t) {
            return this.getGlobalTracingHelper().getTraceParent(t)
        }
        createEngineSpan(t) {
            return this.getGlobalTracingHelper().createEngineSpan(t)
        }
        getActiveContext() {
            return this.getGlobalTracingHelper().getActiveContext()
        }
        runInChildSpan(t, r) {
            return this.getGlobalTracingHelper().runInChildSpan(t, r)
        }
        getGlobalTracingHelper() {
            var t, r
            return (r =
                (t = globalThis.PRISMA_INSTRUMENTATION) == null
                    ? void 0
                    : t.helper) != null
                ? r
                : xl
        }
    }
function El(e) {
    return e.includes('tracing') ? new Hi() : xl
}
m()
p()
f()
d()
function Pl(e, t = () => {}) {
    let r,
        n = new Promise((o) => (r = o))
    return {
        then(o) {
            return --e === 0 && r(t()), o == null ? void 0 : o(n)
        },
    }
}
m()
p()
f()
d()
function vl(e) {
    return typeof e == 'string'
        ? e
        : e.reduce(
              (t, r) => {
                  let n = typeof r == 'string' ? r : r.level
                  return n === 'query'
                      ? t
                      : t && (r === 'info' || t === 'info')
                        ? 'info'
                        : n
              },
              void 0
          )
}
m()
p()
f()
d()
var ho = class {
    constructor() {
        this._middlewares = []
    }
    use(t) {
        this._middlewares.push(t)
    }
    get(t) {
        return this._middlewares[t]
    }
    has(t) {
        return !!this._middlewares[t]
    }
    length() {
        return this._middlewares.length
    }
}
m()
p()
f()
d()
var Tl = ve(ei())
m()
p()
f()
d()
function bo(e) {
    return typeof e.batchRequestIdx == 'number'
}
m()
p()
f()
d()
function wo(e) {
    return e === null
        ? e
        : Array.isArray(e)
          ? e.map(wo)
          : typeof e == 'object'
            ? uy(e)
                ? ly(e)
                : er(e, wo)
            : e
}
function uy(e) {
    return e !== null && typeof e == 'object' && typeof e.$type == 'string'
}
function ly({ $type: e, value: t }) {
    switch (e) {
        case 'BigInt':
            return BigInt(t)
        case 'Bytes':
            return w.Buffer.from(t, 'base64')
        case 'DateTime':
            return new Date(t)
        case 'Decimal':
            return new rt(t)
        case 'Json':
            return JSON.parse(t)
        default:
            Ot(t, 'Unknown tagged value')
    }
}
m()
p()
f()
d()
function _l(e) {
    if (e.action !== 'findUnique' && e.action !== 'findUniqueOrThrow') return
    let t = []
    return (
        e.modelName && t.push(e.modelName),
        e.query.arguments && t.push(zi(e.query.arguments)),
        t.push(zi(e.query.selection)),
        t.join('')
    )
}
function zi(e) {
    return `(${Object.keys(e)
        .sort()
        .map((r) => {
            let n = e[r]
            return typeof n == 'object' && n !== null ? `(${r} ${zi(n)})` : r
        })
        .join(' ')})`
}
m()
p()
f()
d()
var cy = {
    aggregate: !1,
    aggregateRaw: !1,
    createMany: !0,
    createOne: !0,
    deleteMany: !0,
    deleteOne: !0,
    executeRaw: !0,
    findFirst: !1,
    findFirstOrThrow: !1,
    findMany: !1,
    findRaw: !1,
    findUnique: !1,
    findUniqueOrThrow: !1,
    groupBy: !1,
    queryRaw: !1,
    runCommandRaw: !0,
    updateMany: !0,
    updateOne: !0,
    upsertOne: !0,
}
function Yi(e) {
    return cy[e]
}
m()
p()
f()
d()
var xo = class {
    constructor(t) {
        this.options = t
        this.tickActive = !1
        this.batches = {}
    }
    request(t) {
        let r = this.options.batchBy(t)
        return r
            ? (this.batches[r] ||
                  ((this.batches[r] = []),
                  this.tickActive ||
                      ((this.tickActive = !0),
                      h.nextTick(() => {
                          this.dispatchBatches(), (this.tickActive = !1)
                      }))),
              new Promise((n, o) => {
                  this.batches[r].push({ request: t, resolve: n, reject: o })
              }))
            : this.options.singleLoader(t)
    }
    dispatchBatches() {
        for (let t in this.batches) {
            let r = this.batches[t]
            delete this.batches[t],
                r.length === 1
                    ? this.options
                          .singleLoader(r[0].request)
                          .then((n) => {
                              n instanceof Error
                                  ? r[0].reject(n)
                                  : r[0].resolve(n)
                          })
                          .catch((n) => {
                              r[0].reject(n)
                          })
                    : (r.sort((n, o) =>
                          this.options.batchOrder(n.request, o.request)
                      ),
                      this.options
                          .batchLoader(r.map((n) => n.request))
                          .then((n) => {
                              if (n instanceof Error)
                                  for (let o = 0; o < r.length; o++)
                                      r[o].reject(n)
                              else
                                  for (let o = 0; o < r.length; o++) {
                                      let i = n[o]
                                      i instanceof Error
                                          ? r[o].reject(i)
                                          : r[o].resolve(i)
                                  }
                          })
                          .catch((n) => {
                              for (let o = 0; o < r.length; o++) r[o].reject(n)
                          }))
        }
    }
    get [Symbol.toStringTag]() {
        return 'DataLoader'
    }
}
var py = be('prisma:client:request_handler'),
    Eo = class {
        constructor(t, r) {
            ;(this.logEmitter = r),
                (this.client = t),
                (this.dataloader = new xo({
                    batchLoader: Au(
                        async ({ requests: n, customDataProxyFetch: o }) => {
                            let { transaction: i, otelParentCtx: s } = n[0],
                                a = n.map((g) => g.protocolQuery),
                                u =
                                    this.client._tracingHelper.getTraceParent(
                                        s
                                    ),
                                l = n.some((g) => Yi(g.protocolQuery.action))
                            return (
                                await this.client._engine.requestBatch(a, {
                                    traceparent: u,
                                    transaction: fy(i),
                                    containsWrite: l,
                                    customDataProxyFetch: o,
                                })
                            ).map((g, y) => {
                                if (g instanceof Error) return g
                                try {
                                    return this.mapQueryEngineResult(n[y], g)
                                } catch (P) {
                                    return P
                                }
                            })
                        }
                    ),
                    singleLoader: async (n) => {
                        var s
                        let o =
                                ((s = n.transaction) == null
                                    ? void 0
                                    : s.kind) === 'itx'
                                    ? Al(n.transaction)
                                    : void 0,
                            i = await this.client._engine.request(
                                n.protocolQuery,
                                {
                                    traceparent:
                                        this.client._tracingHelper.getTraceParent(),
                                    interactiveTransaction: o,
                                    isWrite: Yi(n.protocolQuery.action),
                                    customDataProxyFetch:
                                        n.customDataProxyFetch,
                                }
                            )
                        return this.mapQueryEngineResult(n, i)
                    },
                    batchBy: (n) => {
                        var o
                        return (o = n.transaction) != null && o.id
                            ? `transaction-${n.transaction.id}`
                            : _l(n.protocolQuery)
                    },
                    batchOrder(n, o) {
                        var i, s
                        return ((i = n.transaction) == null
                            ? void 0
                            : i.kind) === 'batch' &&
                            ((s = o.transaction) == null ? void 0 : s.kind) ===
                                'batch'
                            ? n.transaction.index - o.transaction.index
                            : 0
                    },
                }))
        }
        async request(t) {
            try {
                return await this.dataloader.request(t)
            } catch (r) {
                let {
                    clientMethod: n,
                    callsite: o,
                    transaction: i,
                    args: s,
                    modelName: a,
                } = t
                this.handleAndLogRequestError({
                    error: r,
                    clientMethod: n,
                    callsite: o,
                    transaction: i,
                    args: s,
                    modelName: a,
                })
            }
        }
        mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
            let o = n == null ? void 0 : n.data,
                i = n == null ? void 0 : n.elapsed,
                s = this.unpack(o, t, r)
            return h.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: i } : s
        }
        handleAndLogRequestError(t) {
            try {
                this.handleRequestError(t)
            } catch (r) {
                throw (
                    (this.logEmitter &&
                        this.logEmitter.emit('error', {
                            message: r.message,
                            target: t.clientMethod,
                            timestamp: new Date(),
                        }),
                    r)
                )
            }
        }
        handleRequestError({
            error: t,
            clientMethod: r,
            callsite: n,
            transaction: o,
            args: i,
            modelName: s,
        }) {
            if ((py(t), dy(t, o) || t instanceof gt)) throw t
            if (t instanceof ge && my(t)) {
                let u = Cl(t.meta)
                yo({
                    args: i,
                    errors: [u],
                    callsite: n,
                    errorFormat: this.client._errorFormat,
                    originalMethod: r,
                    clientVersion: this.client._clientVersion,
                })
            }
            let a = t.message
            if (
                (n &&
                    (a = cr({
                        callsite: n,
                        originalMethod: r,
                        isPanic: t.isPanic,
                        showColors: this.client._errorFormat === 'pretty',
                        message: a,
                    })),
                (a = this.sanitizeMessage(a)),
                t.code)
            ) {
                let u = s ? { modelName: s, ...t.meta } : t.meta
                throw new ge(a, {
                    code: t.code,
                    clientVersion: this.client._clientVersion,
                    meta: u,
                    batchRequestIdx: t.batchRequestIdx,
                })
            } else {
                if (t.isPanic) throw new Be(a, this.client._clientVersion)
                if (t instanceof ye)
                    throw new ye(a, {
                        clientVersion: this.client._clientVersion,
                        batchRequestIdx: t.batchRequestIdx,
                    })
                if (t instanceof Z) throw new Z(a, this.client._clientVersion)
                if (t instanceof Be) throw new Be(a, this.client._clientVersion)
            }
            throw ((t.clientVersion = this.client._clientVersion), t)
        }
        sanitizeMessage(t) {
            return this.client._errorFormat &&
                this.client._errorFormat !== 'pretty'
                ? (0, Tl.default)(t)
                : t
        }
        unpack(t, r, n) {
            if (!t || (t.data && (t = t.data), !t)) return t
            let o = Object.values(t)[0],
                i = r.filter((a) => a !== 'select' && a !== 'include'),
                s = wo(wi(o, i))
            return n ? n(s) : s
        }
        get [Symbol.toStringTag]() {
            return 'RequestHandler'
        }
    }
function fy(e) {
    if (e) {
        if (e.kind === 'batch')
            return {
                kind: 'batch',
                options: { isolationLevel: e.isolationLevel },
            }
        if (e.kind === 'itx') return { kind: 'itx', options: Al(e) }
        Ot(e, 'Unknown transaction kind')
    }
}
function Al(e) {
    return { id: e.id, payload: e.payload }
}
function dy(e, t) {
    return (
        bo(e) &&
        (t == null ? void 0 : t.kind) === 'batch' &&
        e.batchRequestIdx !== t.index
    )
}
function my(e) {
    return e.code === 'P2009' || e.code === 'P2012'
}
function Cl(e) {
    if (e.kind === 'Union') return { kind: 'Union', errors: e.errors.map(Cl) }
    if (Array.isArray(e.selectionPath)) {
        let [, ...t] = e.selectionPath
        return { ...e, selectionPath: t }
    }
    return e
}
m()
p()
f()
d()
var Sl = '5.7.1'
var Ml = Sl
m()
p()
f()
d()
function Rl(e) {
    return e.map((t) => {
        let r = {}
        for (let n of Object.keys(t)) r[n] = Ol(t[n])
        return r
    })
}
function Ol({ prisma__type: e, prisma__value: t }) {
    switch (e) {
        case 'bigint':
            return BigInt(t)
        case 'bytes':
            return w.Buffer.from(t, 'base64')
        case 'decimal':
            return new rt(t)
        case 'datetime':
        case 'date':
            return new Date(t)
        case 'time':
            return new Date(`1970-01-01T${t}Z`)
        case 'array':
            return t.map(Ol)
        default:
            return t
    }
}
m()
p()
f()
d()
var Dl = ve(Vi())
m()
p()
f()
d()
var X = class extends Error {
    constructor(t) {
        super(
            t +
                `
Read more at https://pris.ly/d/client-constructor`
        ),
            (this.name = 'PrismaClientConstructorValidationError')
    }
    get [Symbol.toStringTag]() {
        return 'PrismaClientConstructorValidationError'
    }
}
B(X, 'PrismaClientConstructorValidationError')
var Il = [
        'datasources',
        'datasourceUrl',
        'errorFormat',
        'adapter',
        'log',
        '__internal',
    ],
    kl = ['pretty', 'colorless', 'minimal'],
    Fl = ['info', 'query', 'warn', 'error'],
    yy = {
        datasources: (e, { datasourceNames: t }) => {
            if (e) {
                if (typeof e != 'object' || Array.isArray(e))
                    throw new X(
                        `Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`
                    )
                for (let [r, n] of Object.entries(e)) {
                    if (!t.includes(r)) {
                        let o =
                            gr(r, t) ||
                            ` Available datasources: ${t.join(', ')}`
                        throw new X(
                            `Unknown datasource ${r} provided to PrismaClient constructor.${o}`
                        )
                    }
                    if (typeof n != 'object' || Array.isArray(n))
                        throw new X(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`)
                    if (n && typeof n == 'object')
                        for (let [o, i] of Object.entries(n)) {
                            if (o !== 'url')
                                throw new X(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`)
                            if (typeof i != 'string')
                                throw new X(`Invalid value ${JSON.stringify(i)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`)
                        }
                }
            }
        },
        adapter: (e, t) => {
            if (e === null) return
            if (e === void 0)
                throw new X(
                    '"adapter" property must not be undefined, use null to conditionally disable driver adapters.'
                )
            if (!co(t).includes('driverAdapters'))
                throw new X(
                    '"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.'
                )
            if (Rt() === 'binary')
                throw new X(
                    'Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.'
                )
        },
        datasourceUrl: (e) => {
            if (typeof e != 'undefined' && typeof e != 'string')
                throw new X(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`)
        },
        errorFormat: (e) => {
            if (e) {
                if (typeof e != 'string')
                    throw new X(
                        `Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`
                    )
                if (!kl.includes(e)) {
                    let t = gr(e, kl)
                    throw new X(
                        `Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`
                    )
                }
            }
        },
        log: (e) => {
            if (!e) return
            if (!Array.isArray(e))
                throw new X(
                    `Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`
                )
            function t(r) {
                if (typeof r == 'string' && !Fl.includes(r)) {
                    let n = gr(r, Fl)
                    throw new X(
                        `Invalid log level "${r}" provided to PrismaClient constructor.${n}`
                    )
                }
            }
            for (let r of e) {
                t(r)
                let n = {
                    level: t,
                    emit: (o) => {
                        let i = ['stdout', 'event']
                        if (!i.includes(o)) {
                            let s = gr(o, i)
                            throw new X(
                                `Invalid value ${JSON.stringify(o)} for "emit" in logLevel provided to PrismaClient constructor.${s}`
                            )
                        }
                    },
                }
                if (r && typeof r == 'object')
                    for (let [o, i] of Object.entries(r))
                        if (n[o]) n[o](i)
                        else
                            throw new X(
                                `Invalid property ${o} for "log" provided to PrismaClient constructor`
                            )
            }
        },
        __internal: (e) => {
            if (!e) return
            let t = ['debug', 'hooks', 'engine', 'measurePerformance']
            if (typeof e != 'object')
                throw new X(
                    `Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`
                )
            for (let [r] of Object.entries(e))
                if (!t.includes(r)) {
                    let n = gr(r, t)
                    throw new X(
                        `Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`
                    )
                }
        },
    }
function Nl(e, t) {
    for (let [r, n] of Object.entries(e)) {
        if (!Il.includes(r)) {
            let o = gr(r, Il)
            throw new X(
                `Unknown property ${r} provided to PrismaClient constructor.${o}`
            )
        }
        yy[r](n, t)
    }
    if (e.datasourceUrl && e.datasources)
        throw new X(
            'Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them'
        )
}
function gr(e, t) {
    if (t.length === 0 || typeof e != 'string') return ''
    let r = hy(e, t)
    return r ? ` Did you mean "${r}"?` : ''
}
function hy(e, t) {
    if (t.length === 0) return null
    let r = t.map((o) => ({ value: o, distance: (0, Dl.default)(e, o) }))
    r.sort((o, i) => (o.distance < i.distance ? -1 : 1))
    let n = r[0]
    return n.distance < 3 ? n.value : null
}
m()
p()
f()
d()
function Ll(e) {
    return e.length === 0
        ? Promise.resolve([])
        : new Promise((t, r) => {
              let n = new Array(e.length),
                  o = null,
                  i = !1,
                  s = 0,
                  a = () => {
                      i || (s++, s === e.length && ((i = !0), o ? r(o) : t(n)))
                  },
                  u = (l) => {
                      i || ((i = !0), r(l))
                  }
              for (let l = 0; l < e.length; l++)
                  e[l].then(
                      (c) => {
                          ;(n[l] = c), a()
                      },
                      (c) => {
                          if (!bo(c)) {
                              u(c)
                              return
                          }
                          c.batchRequestIdx === l ? u(c) : (o || (o = c), a())
                      }
                  )
          })
}
var Pt = be('prisma:client')
typeof globalThis == 'object' && (globalThis.NODE_CLIENT = !0)
var by = {
        requestArgsToMiddlewareArgs: (e) => e,
        middlewareArgsToRequestArgs: (e) => e,
    },
    wy = Symbol.for('prisma.client.transaction.id'),
    xy = {
        id: 0,
        nextId() {
            return ++this.id
        },
    }
function Ey(e) {
    class t {
        constructor(n) {
            this._middlewares = new ho()
            this._createPrismaPromise = Wi()
            this.$extends = bu
            var u, l, c, g, y, P
            Fu(e), n && Nl(n, e)
            let o = n != null && n.adapter ? li(n.adapter) : void 0,
                i = new jl.EventEmitter().on('error', () => {})
            ;(this._extensions = eo.empty()),
                (this._previewFeatures = co(e)),
                (this._clientVersion = (u = e.clientVersion) != null ? u : Ml),
                (this._activeProvider = e.activeProvider),
                (this._tracingHelper = El(this._previewFeatures))
            let s = {
                    rootEnvPath:
                        e.relativeEnvPaths.rootEnvPath &&
                        on.default.resolve(
                            e.dirname,
                            e.relativeEnvPaths.rootEnvPath
                        ),
                    schemaEnvPath:
                        e.relativeEnvPaths.schemaEnvPath &&
                        on.default.resolve(
                            e.dirname,
                            e.relativeEnvPaths.schemaEnvPath
                        ),
                },
                a = (l = e.injectableEdgeEnv) == null ? void 0 : l.call(e)
            try {
                let v = n != null ? n : {},
                    E = (c = v.__internal) != null ? c : {},
                    T = E.debug === !0
                T && be.enable('prisma:client')
                let M = on.default.resolve(e.dirname, e.relativePath)
                An.existsSync(M) || (M = e.dirname),
                    Pt('dirname', e.dirname),
                    Pt('relativePath', e.relativePath),
                    Pt('cwd', M)
                let O = E.engine || {}
                if (
                    (v.errorFormat
                        ? (this._errorFormat = v.errorFormat)
                        : h.env.NODE_ENV === 'production'
                          ? (this._errorFormat = 'minimal')
                          : h.env.NO_COLOR
                            ? (this._errorFormat = 'colorless')
                            : (this._errorFormat = 'colorless'),
                    (this._runtimeDataModel = e.runtimeDataModel),
                    (this._engineConfig = {
                        cwd: M,
                        dirname: e.dirname,
                        enableDebugLogs: T,
                        allowTriggerPanic: O.allowTriggerPanic,
                        datamodelPath: on.default.join(
                            e.dirname,
                            (g = e.filename) != null ? g : 'schema.prisma'
                        ),
                        prismaPath: (y = O.binaryPath) != null ? y : void 0,
                        engineEndpoint: O.endpoint,
                        generator: e.generator,
                        showColors: this._errorFormat === 'pretty',
                        logLevel: v.log && vl(v.log),
                        logQueries:
                            v.log &&
                            !!(typeof v.log == 'string'
                                ? v.log === 'query'
                                : v.log.find((S) =>
                                      typeof S == 'string'
                                          ? S === 'query'
                                          : S.level === 'query'
                                  )),
                        env:
                            (P = a == null ? void 0 : a.parsed) != null
                                ? P
                                : {},
                        flags: [],
                        getQueryEngineWasmModule: e.getQueryEngineWasmModule,
                        clientVersion: e.clientVersion,
                        engineVersion: e.engineVersion,
                        previewFeatures: this._previewFeatures,
                        activeProvider: e.activeProvider,
                        inlineSchema: e.inlineSchema,
                        overrideDatasources: Du(v, e.datasourceNames),
                        inlineDatasources: e.inlineDatasources,
                        inlineSchemaHash: e.inlineSchemaHash,
                        tracingHelper: this._tracingHelper,
                        logEmitter: i,
                        isBundled: e.isBundled,
                        adapter: o,
                    }),
                    Pt('clientVersion', e.clientVersion),
                    (this._engine = Yu(e, this._engineConfig)),
                    (this._requestHandler = new Eo(this, i)),
                    v.log)
                )
                    for (let S of v.log) {
                        let R =
                            typeof S == 'string'
                                ? S
                                : S.emit === 'stdout'
                                  ? S.level
                                  : null
                        R &&
                            this.$on(R, ($) => {
                                var q
                                Xt.log(
                                    `${(q = Xt.tags[R]) != null ? q : ''}`,
                                    $.message || $.query
                                )
                            })
                    }
                this._metrics = new Tr(this._engine)
            } catch (v) {
                throw ((v.clientVersion = this._clientVersion), v)
            }
            return (this._appliedParent = Nr(this))
        }
        get [Symbol.toStringTag]() {
            return 'PrismaClient'
        }
        $use(n) {
            this._middlewares.use(n)
        }
        $on(n, o) {
            n === 'beforeExit'
                ? this._engine.on('beforeExit', o)
                : this._engine.on(n, (i) => {
                      var a, u, l, c
                      let s = i.fields
                      return o(
                          n === 'query'
                              ? {
                                    timestamp: i.timestamp,
                                    query:
                                        (a = s == null ? void 0 : s.query) !=
                                        null
                                            ? a
                                            : i.query,
                                    params:
                                        (u = s == null ? void 0 : s.params) !=
                                        null
                                            ? u
                                            : i.params,
                                    duration:
                                        (l =
                                            s == null
                                                ? void 0
                                                : s.duration_ms) != null
                                            ? l
                                            : i.duration,
                                    target: i.target,
                                }
                              : {
                                    timestamp: i.timestamp,
                                    message:
                                        (c = s == null ? void 0 : s.message) !=
                                        null
                                            ? c
                                            : i.message,
                                    target: i.target,
                                }
                      )
                  })
        }
        $connect() {
            try {
                return this._engine.start()
            } catch (n) {
                throw ((n.clientVersion = this._clientVersion), n)
            }
        }
        async $disconnect() {
            try {
                await this._engine.stop()
            } catch (n) {
                throw ((n.clientVersion = this._clientVersion), n)
            } finally {
                sa()
            }
        }
        $executeRawInternal(n, o, i, s) {
            var l
            let a = this._activeProvider,
                u =
                    (l = this._engineConfig.adapter) == null
                        ? void 0
                        : l.provider
            return this._request({
                action: 'executeRaw',
                args: i,
                transaction: n,
                clientMethod: o,
                argsMapper: Gi({
                    clientMethod: o,
                    activeProvider: a,
                    driverAdapterProvider: u,
                }),
                callsite: Et(this._errorFormat),
                dataPath: [],
                middlewareArgsMapper: s,
            })
        }
        $executeRaw(n, ...o) {
            return this._createPrismaPromise((i) => {
                if (n.raw !== void 0 || n.sql !== void 0) {
                    let [s, a] = Bl(n, o)
                    return (
                        Ji(
                            this._activeProvider,
                            s.text,
                            s.values,
                            Array.isArray(n)
                                ? 'prisma.$executeRaw`<SQL>`'
                                : 'prisma.$executeRaw(sql`<SQL>`)'
                        ),
                        this.$executeRawInternal(i, '$executeRaw', s, a)
                    )
                }
                throw new Te(
                    "`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n",
                    { clientVersion: this._clientVersion }
                )
            })
        }
        $executeRawUnsafe(n, ...o) {
            return this._createPrismaPromise(
                (i) => (
                    Ji(
                        this._activeProvider,
                        n,
                        o,
                        'prisma.$executeRawUnsafe(<SQL>, [...values])'
                    ),
                    this.$executeRawInternal(i, '$executeRawUnsafe', [n, ...o])
                )
            )
        }
        $runCommandRaw(n) {
            if (e.activeProvider !== 'mongodb')
                throw new Te(
                    `The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`,
                    { clientVersion: this._clientVersion }
                )
            return this._createPrismaPromise((o) =>
                this._request({
                    args: n,
                    clientMethod: '$runCommandRaw',
                    dataPath: [],
                    action: 'runCommandRaw',
                    argsMapper: pl,
                    callsite: Et(this._errorFormat),
                    transaction: o,
                })
            )
        }
        async $queryRawInternal(n, o, i, s) {
            var l
            let a = this._activeProvider,
                u =
                    (l = this._engineConfig.adapter) == null
                        ? void 0
                        : l.provider
            return this._request({
                action: 'queryRaw',
                args: i,
                transaction: n,
                clientMethod: o,
                argsMapper: Gi({
                    clientMethod: o,
                    activeProvider: a,
                    driverAdapterProvider: u,
                }),
                callsite: Et(this._errorFormat),
                dataPath: [],
                middlewareArgsMapper: s,
            }).then(Rl)
        }
        $queryRaw(n, ...o) {
            return this._createPrismaPromise((i) => {
                if (n.raw !== void 0 || n.sql !== void 0)
                    return this.$queryRawInternal(i, '$queryRaw', ...Bl(n, o))
                throw new Te(
                    "`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n",
                    { clientVersion: this._clientVersion }
                )
            })
        }
        $queryRawUnsafe(n, ...o) {
            return this._createPrismaPromise((i) =>
                this.$queryRawInternal(i, '$queryRawUnsafe', [n, ...o])
            )
        }
        _transactionWithArray({ promises: n, options: o }) {
            let i = xy.nextId(),
                s = Pl(n.length),
                a = n.map((u, l) => {
                    var y, P
                    if (
                        (u == null ? void 0 : u[Symbol.toStringTag]) !==
                        'PrismaPromise'
                    )
                        throw new Error(
                            'All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.'
                        )
                    let c = o == null ? void 0 : o.isolationLevel,
                        g = {
                            kind: 'batch',
                            id: i,
                            index: l,
                            isolationLevel: c,
                            lock: s,
                        }
                    return (P =
                        (y = u.requestTransaction) == null
                            ? void 0
                            : y.call(u, g)) != null
                        ? P
                        : u
                })
            return Ll(a)
        }
        async _transactionWithCallback({ callback: n, options: o }) {
            let i = { traceparent: this._tracingHelper.getTraceParent() },
                s = await this._engine.transaction('start', i, o),
                a
            try {
                let u = { kind: 'itx', ...s }
                ;(a = await n(this._createItxClient(u))),
                    await this._engine.transaction('commit', i, s)
            } catch (u) {
                throw (
                    (await this._engine
                        .transaction('rollback', i, s)
                        .catch(() => {}),
                    u)
                )
            }
            return a
        }
        _createItxClient(n) {
            return Nr(
                Ge(Yn(this), [
                    Ae('_appliedParent', () =>
                        this._appliedParent._createItxClient(n)
                    ),
                    Ae('_createPrismaPromise', () => Wi(n)),
                    Ae(wy, () => n.id),
                    Ir(Ra),
                ])
            )
        }
        $transaction(n, o) {
            let i
            typeof n == 'function'
                ? (i = () =>
                      this._transactionWithCallback({
                          callback: n,
                          options: o,
                      }))
                : (i = () =>
                      this._transactionWithArray({ promises: n, options: o }))
            let s = {
                name: 'transaction',
                attributes: { method: '$transaction' },
            }
            return this._tracingHelper.runInChildSpan(s, i)
        }
        _request(n) {
            var l
            n.otelParentCtx = this._tracingHelper.getActiveContext()
            let o = (l = n.middlewareArgsMapper) != null ? l : by,
                i = {
                    args: o.requestArgsToMiddlewareArgs(n.args),
                    dataPath: n.dataPath,
                    runInTransaction: !!n.transaction,
                    action: n.action,
                    model: n.model,
                },
                s = {
                    middleware: {
                        name: 'middleware',
                        middleware: !0,
                        attributes: { method: '$use' },
                        active: !1,
                    },
                    operation: {
                        name: 'operation',
                        attributes: {
                            method: i.action,
                            model: i.model,
                            name: i.model ? `${i.model}.${i.action}` : i.action,
                        },
                    },
                },
                a = -1,
                u = async (c) => {
                    let g = this._middlewares.get(++a)
                    if (g)
                        return this._tracingHelper.runInChildSpan(
                            s.middleware,
                            (M) => g(c, (O) => (M == null || M.end(), u(O)))
                        )
                    let { runInTransaction: y, args: P, ...v } = c,
                        E = { ...n, ...v }
                    P && (E.args = o.middlewareArgsToRequestArgs(P)),
                        n.transaction !== void 0 &&
                            y === !1 &&
                            delete E.transaction
                    let T = await Tu(this, E)
                    return E.model
                        ? Eu({
                              result: T,
                              modelName: E.model,
                              args: E.args,
                              extensions: this._extensions,
                              runtimeDataModel: this._runtimeDataModel,
                          })
                        : T
                }
            return this._tracingHelper.runInChildSpan(s.operation, () => u(i))
        }
        async _executeRequest({
            args: n,
            clientMethod: o,
            dataPath: i,
            callsite: s,
            action: a,
            model: u,
            argsMapper: l,
            transaction: c,
            unpacker: g,
            otelParentCtx: y,
            customDataProxyFetch: P,
        }) {
            try {
                n = l ? l(n) : n
                let v = { name: 'serialize' },
                    E = this._tracingHelper.runInChildSpan(v, () =>
                        ul({
                            modelName: u,
                            runtimeDataModel: this._runtimeDataModel,
                            action: a,
                            args: n,
                            clientMethod: o,
                            callsite: s,
                            extensions: this._extensions,
                            errorFormat: this._errorFormat,
                            clientVersion: this._clientVersion,
                        })
                    )
                return (
                    be.enabled('prisma:client') &&
                        (Pt('Prisma Client call:'),
                        Pt(`prisma.${o}(${tu(n)})`),
                        Pt('Generated request:'),
                        Pt(
                            JSON.stringify(E, null, 2) +
                                `
`
                        )),
                    (c == null ? void 0 : c.kind) === 'batch' && (await c.lock),
                    this._requestHandler.request({
                        protocolQuery: E,
                        modelName: u,
                        action: a,
                        clientMethod: o,
                        dataPath: i,
                        callsite: s,
                        args: n,
                        extensions: this._extensions,
                        transaction: c,
                        unpacker: g,
                        otelParentCtx: y,
                        otelChildCtx: this._tracingHelper.getActiveContext(),
                        customDataProxyFetch: P,
                    })
                )
            } catch (v) {
                throw ((v.clientVersion = this._clientVersion), v)
            }
        }
        get $metrics() {
            if (!this._hasPreviewFlag('metrics'))
                throw new Te(
                    '`metrics` preview feature must be enabled in order to access metrics API',
                    { clientVersion: this._clientVersion }
                )
            return this._metrics
        }
        _hasPreviewFlag(n) {
            var o
            return !!(
                (o = this._engineConfig.previewFeatures) != null &&
                o.includes(n)
            )
        }
    }
    return t
}
function Bl(e, t) {
    return Py(e) ? [new Fe(e, t), hl] : [e, bl]
}
function Py(e) {
    return Array.isArray(e) && Array.isArray(e.raw)
}
m()
p()
f()
d()
var vy = new Set([
    'toJSON',
    '$$typeof',
    'asymmetricMatch',
    Symbol.iterator,
    Symbol.toStringTag,
    Symbol.isConcatSpreadable,
    Symbol.toPrimitive,
])
function _y(e) {
    return new Proxy(e, {
        get(t, r) {
            if (r in t) return t[r]
            if (!vy.has(r))
                throw new TypeError(`Invalid enum value: ${String(r)}`)
        },
    })
}
m()
p()
f()
d()
var export_warnEnvConflicts = void 0
export {
    je as DMMF,
    Io as DMMFClass,
    oa as Debug,
    rt as Decimal,
    _s as Extensions,
    Tr as MetricsClient,
    gt as NotFoundError,
    et as ObjectEnumValue,
    Z as PrismaClientInitializationError,
    ge as PrismaClientKnownRequestError,
    Be as PrismaClientRustPanicError,
    ye as PrismaClientUnknownRequestError,
    Te as PrismaClientValidationError,
    As as Public,
    Fe as Sql,
    Os as Types,
    Lp as defineDmmfProperty,
    _i as detectRuntime,
    qp as empty,
    Ey as getPrismaClient,
    Ra as itxClientDenyList,
    $p as join,
    _y as makeStrictEnum,
    c1 as objectEnumNames,
    si as objectEnumValues,
    Ia as raw,
    ka as sqltag,
    export_warnEnvConflicts as warnEnvConflicts,
    Rn as warnOnce,
}
//# sourceMappingURL=edge-esm.js.map
