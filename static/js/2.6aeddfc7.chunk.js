/*! For license information please see 2.6aeddfc7.chunk.js.LICENSE.txt */
(this['webpackJsonpreact-gallery-carousel-example'] =
  this['webpackJsonpreact-gallery-carousel-example'] || []).push([
  [2],
  [
    function (e, t, n) {
      'use strict';
      e.exports = n(12);
    },
    function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return H;
      });
      var r = n(0),
        o = n.n(r);
      function l() {
        return (l =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var i = '_2hTXI',
        a = '_2RWmX',
        u = '_5bXm4',
        c = '_32duB',
        s = '_2hqqe',
        f = { rectangle: '_27zc_', pill: '_3TDks', ellipse: '_2rYDo' };
      function d(e, t) {
        return e((t = { exports: {} }), t.exports), t.exports;
      }
      var p = 'function' === typeof Symbol && Symbol.for,
        m = p ? Symbol.for('react.element') : 60103,
        h = p ? Symbol.for('react.portal') : 60106,
        g = p ? Symbol.for('react.fragment') : 60107,
        v = p ? Symbol.for('react.strict_mode') : 60108,
        y = p ? Symbol.for('react.profiler') : 60114,
        b = p ? Symbol.for('react.provider') : 60109,
        w = p ? Symbol.for('react.context') : 60110,
        k = p ? Symbol.for('react.async_mode') : 60111,
        x = p ? Symbol.for('react.concurrent_mode') : 60111,
        E = p ? Symbol.for('react.forward_ref') : 60112,
        T = p ? Symbol.for('react.suspense') : 60113,
        S = p ? Symbol.for('react.suspense_list') : 60120,
        C = p ? Symbol.for('react.memo') : 60115,
        _ = p ? Symbol.for('react.lazy') : 60116,
        P = p ? Symbol.for('react.block') : 60121,
        O = p ? Symbol.for('react.fundamental') : 60117,
        N = p ? Symbol.for('react.responder') : 60118,
        z = p ? Symbol.for('react.scope') : 60119;
      function M(e) {
        if ('object' === typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case m:
              switch ((e = e.type)) {
                case k:
                case x:
                case g:
                case y:
                case v:
                case T:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case w:
                    case E:
                    case _:
                    case C:
                    case b:
                      return e;
                    default:
                      return t;
                  }
              }
            case h:
              return t;
          }
        }
      }
      function F(e) {
        return M(e) === x;
      }
      var R = {
          AsyncMode: k,
          ConcurrentMode: x,
          ContextConsumer: w,
          ContextProvider: b,
          Element: m,
          ForwardRef: E,
          Fragment: g,
          Lazy: _,
          Memo: C,
          Portal: h,
          Profiler: y,
          StrictMode: v,
          Suspense: T,
          isAsyncMode: function (e) {
            return F(e) || M(e) === k;
          },
          isConcurrentMode: F,
          isContextConsumer: function (e) {
            return M(e) === w;
          },
          isContextProvider: function (e) {
            return M(e) === b;
          },
          isElement: function (e) {
            return 'object' === typeof e && null !== e && e.$$typeof === m;
          },
          isForwardRef: function (e) {
            return M(e) === E;
          },
          isFragment: function (e) {
            return M(e) === g;
          },
          isLazy: function (e) {
            return M(e) === _;
          },
          isMemo: function (e) {
            return M(e) === C;
          },
          isPortal: function (e) {
            return M(e) === h;
          },
          isProfiler: function (e) {
            return M(e) === y;
          },
          isStrictMode: function (e) {
            return M(e) === v;
          },
          isSuspense: function (e) {
            return M(e) === T;
          },
          isValidElementType: function (e) {
            return (
              'string' === typeof e ||
              'function' === typeof e ||
              e === g ||
              e === x ||
              e === y ||
              e === v ||
              e === T ||
              e === S ||
              ('object' === typeof e &&
                null !== e &&
                (e.$$typeof === _ ||
                  e.$$typeof === C ||
                  e.$$typeof === b ||
                  e.$$typeof === w ||
                  e.$$typeof === E ||
                  e.$$typeof === O ||
                  e.$$typeof === N ||
                  e.$$typeof === z ||
                  e.$$typeof === P))
            );
          },
          typeOf: M
        },
        I =
          (d(function (e, t) {
            0;
          }),
          d(function (e) {
            e.exports = R;
          }),
          Object.getOwnPropertySymbols),
        D = Object.prototype.hasOwnProperty,
        L = Object.prototype.propertyIsEnumerable;
      function j(e) {
        if (null === e || void 0 === e)
          throw new TypeError(
            'Object.assign cannot be called with null or undefined'
          );
        return Object(e);
      }
      (function () {
        try {
          if (!Object.assign) return !1;
          var e = new String('abc');
          if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var t = {}, n = 0; n < 10; n++)
            t['_' + String.fromCharCode(n)] = n;
          if (
            '0123456789' !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e];
              })
              .join('')
          )
            return !1;
          var r = {};
          return (
            'abcdefghijklmnopqrst'.split('').forEach(function (e) {
              r[e] = e;
            }),
            'abcdefghijklmnopqrst' ===
              Object.keys(Object.assign({}, r)).join('')
          );
        } catch (o) {
          return !1;
        }
      })() && Object.assign;
      var A = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
      function U(e, t, n, r, o) {}
      U.resetWarningCache = function () {
        0;
      };
      Function.call.bind(Object.prototype.hasOwnProperty);
      function $() {}
      function V() {}
      V.resetWarningCache = $;
      var W = d(function (e) {
          e.exports = (function () {
            function e(e, t, n, r, o, l) {
              if (l !== A) {
                var i = new Error(
                  'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                );
                throw ((i.name = 'Invariant Violation'), i);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: V,
              resetWarningCache: $
            };
            return (n.PropTypes = n), n;
          })();
        }),
        B = Object(r.memo)(
          function (e) {
            var t = e.ripple,
              n = t.size,
              r = t.left,
              l = t.top;
            return o.a.createElement('div', {
              className: s,
              style: { width: n, height: n, left: r, top: l }
            });
          },
          function () {
            return !0;
          }
        ),
        Q = function (e) {
          return e.ripples.map(function (e, t) {
            return o.a.createElement(B, { ripple: e, key: t });
          });
        },
        H = function (e) {
          var t = Object(r.useState)([]),
            n = t[0],
            s = t[1],
            d =
              i +
              (e.disabled ? ' ' + a : '') +
              (e.text ? ' ' + u : '') +
              (e.bordered ? ' ' + c : '') +
              (e.shape ? ' ' + f[e.shape] : ''),
            p = e.href ? 'a' : 'button',
            m = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                l = Object.keys(e);
              for (r = 0; r < l.length; r++)
                (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, ['disabled', 'text', 'bordered', 'shape']);
          return o.a.createElement(
            p,
            l(
              {
                onClick: function (t) {
                  if (!e.disabled) {
                    var n = t.currentTarget,
                      r = n.getBoundingClientRect(),
                      o = Math.hypot(r.width, r.height),
                      l = t.clientX - r.left - n.clientLeft,
                      i = t.clientY - r.top - n.clientTop,
                      a = l - o / 2,
                      u = i - o / 2;
                    s(function (e) {
                      return [].concat(e, [{ size: o, left: a, top: u }]);
                    });
                  }
                },
                className: d,
                style: l({}, e.style)
              },
              m
            ),
            e.children,
            o.a.createElement(Q, { ripples: n })
          );
        };
      H.propTypes = {
        disabled: W.bool,
        text: W.bool,
        bordered: W.bool,
        shape: W.oneOf(['rectangle', 'pill', 'ellipse']),
        href: W.string,
        style: W.object,
        children: W.oneOfType([W.arrayOf(W.node), W.node])
      };
    },
    ,
    ,
    function (e, t, n) {
      'use strict';
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      n.d(t, 'a', function () {
        return r;
      });
    },
    function (e, t, n) {
      'use strict';
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var i = n(4);
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function u(e, t) {
        return (u =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function c(e) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function s() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function f(e) {
        return (f =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function d(e, t) {
        return !t || ('object' !== f(t) && 'function' !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      var p = n(0),
        m = n.n(p),
        h = (function (e) {
          !(function (e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && u(e, t);
          })(h, e);
          var t,
            r,
            o,
            f,
            p =
              ((t = h),
              function () {
                var e,
                  n = c(t);
                if (s()) {
                  var r = c(this).constructor;
                  e = Reflect.construct(n, arguments, r);
                } else e = n.apply(this, arguments);
                return d(this, e);
              });
          function h(e) {
            var t;
            return (
              Object(i.a)(this, h),
              ((t = p.call(this, e)).$ = m.a.createRef()),
              (t._ = m.a.createRef()),
              t
            );
          }
          return (
            (r = h),
            (o = [
              {
                key: 'render',
                value: function () {
                  return m.a.createElement(
                    'span',
                    { ref: this.$ },
                    m.a.createElement(
                      'a',
                      l(l({}, this.props), {}, { ref: this._ }),
                      this.props.children
                    )
                  );
                }
              },
              {
                key: 'componentDidMount',
                value: function () {
                  this.paint();
                }
              },
              {
                key: 'getSnapshotBeforeUpdate',
                value: function () {
                  return this.reset(), null;
                }
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.paint();
                }
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.reset();
                }
              },
              {
                key: 'paint',
                value: function () {
                  var e = this,
                    t = this.$.current.appendChild(
                      document.createElement('span')
                    );
                  Promise.resolve()
                    .then(n.bind(null, 16))
                    .then(function (n) {
                      (0, n.render)(t.appendChild(e._.current), function (e) {
                        try {
                          t.parentNode.replaceChild(e, t);
                        } catch (t) {}
                      });
                    });
                }
              },
              {
                key: 'reset',
                value: function () {
                  this.$.current.replaceChild(
                    this._.current,
                    this.$.current.lastChild
                  );
                }
              }
            ]) && a(r.prototype, o),
            f && a(r, f),
            h
          );
        })(p.PureComponent);
      t.a = h;
    },
    ,
    function (e, t, n) {
      'use strict';
      var r = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        l = Object.prototype.propertyIsEnumerable;
      function i(e) {
        if (null === e || void 0 === e)
          throw new TypeError(
            'Object.assign cannot be called with null or undefined'
          );
        return Object(e);
      }
      e.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var e = new String('abc');
          if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var t = {}, n = 0; n < 10; n++)
            t['_' + String.fromCharCode(n)] = n;
          if (
            '0123456789' !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e];
              })
              .join('')
          )
            return !1;
          var r = {};
          return (
            'abcdefghijklmnopqrst'.split('').forEach(function (e) {
              r[e] = e;
            }),
            'abcdefghijklmnopqrst' ===
              Object.keys(Object.assign({}, r)).join('')
          );
        } catch (o) {
          return !1;
        }
      })()
        ? Object.assign
        : function (e, t) {
            for (var n, a, u = i(e), c = 1; c < arguments.length; c++) {
              for (var s in (n = Object(arguments[c])))
                o.call(n, s) && (u[s] = n[s]);
              if (r) {
                a = r(n);
                for (var f = 0; f < a.length; f++)
                  l.call(n, a[f]) && (u[a[f]] = n[a[f]]);
              }
            }
            return u;
          };
    },
    function (e, t, n) {
      'use strict';
      !(function e() {
        if (
          'undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          'function' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        ) {
          0;
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (t) {
            console.error(t);
          }
        }
      })(),
        (e.exports = n(13));
    },
    function (e, t, n) {
      'use strict';
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) {
              var n = [],
                r = !0,
                o = !1,
                l = void 0;
              try {
                for (
                  var i, a = e[Symbol.iterator]();
                  !(r = (i = a.next()).done) &&
                  (n.push(i.value), !t || n.length !== t);
                  r = !0
                );
              } catch (u) {
                (o = !0), (l = u);
              } finally {
                try {
                  r || null == a.return || a.return();
                } finally {
                  if (o) throw l;
                }
              }
              return n;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ('string' === typeof e) return r(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(n)
                  : 'Arguments' === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? r(e, t)
                  : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      n.d(t, 'a', function () {
        return o;
      });
    },
    ,
    ,
    function (e, t, n) {
      'use strict';
      var r = n(7),
        o = 'function' === typeof Symbol && Symbol.for,
        l = o ? Symbol.for('react.element') : 60103,
        i = o ? Symbol.for('react.portal') : 60106,
        a = o ? Symbol.for('react.fragment') : 60107,
        u = o ? Symbol.for('react.strict_mode') : 60108,
        c = o ? Symbol.for('react.profiler') : 60114,
        s = o ? Symbol.for('react.provider') : 60109,
        f = o ? Symbol.for('react.context') : 60110,
        d = o ? Symbol.for('react.forward_ref') : 60112,
        p = o ? Symbol.for('react.suspense') : 60113,
        m = o ? Symbol.for('react.memo') : 60115,
        h = o ? Symbol.for('react.lazy') : 60116,
        g = 'function' === typeof Symbol && Symbol.iterator;
      function v(e) {
        for (
          var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
            n = 1;
          n < arguments.length;
          n++
        )
          t += '&args[]=' + encodeURIComponent(arguments[n]);
        return (
          'Minified React error #' +
          e +
          '; visit ' +
          t +
          ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
      }
      var y = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {}
        },
        b = {};
      function w(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = b),
          (this.updater = n || y);
      }
      function k() {}
      function x(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = b),
          (this.updater = n || y);
      }
      (w.prototype.isReactComponent = {}),
        (w.prototype.setState = function (e, t) {
          if ('object' !== typeof e && 'function' !== typeof e && null != e)
            throw Error(v(85));
          this.updater.enqueueSetState(this, e, t, 'setState');
        }),
        (w.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
        }),
        (k.prototype = w.prototype);
      var E = (x.prototype = new k());
      (E.constructor = x), r(E, w.prototype), (E.isPureReactComponent = !0);
      var T = { current: null },
        S = Object.prototype.hasOwnProperty,
        C = { key: !0, ref: !0, __self: !0, __source: !0 };
      function _(e, t, n) {
        var r,
          o = {},
          i = null,
          a = null;
        if (null != t)
          for (r in (void 0 !== t.ref && (a = t.ref),
          void 0 !== t.key && (i = '' + t.key),
          t))
            S.call(t, r) && !C.hasOwnProperty(r) && (o[r] = t[r]);
        var u = arguments.length - 2;
        if (1 === u) o.children = n;
        else if (1 < u) {
          for (var c = Array(u), s = 0; s < u; s++) c[s] = arguments[s + 2];
          o.children = c;
        }
        if (e && e.defaultProps)
          for (r in (u = e.defaultProps)) void 0 === o[r] && (o[r] = u[r]);
        return {
          $$typeof: l,
          type: e,
          key: i,
          ref: a,
          props: o,
          _owner: T.current
        };
      }
      function P(e) {
        return 'object' === typeof e && null !== e && e.$$typeof === l;
      }
      var O = /\/+/g,
        N = [];
      function z(e, t, n, r) {
        if (N.length) {
          var o = N.pop();
          return (
            (o.result = e),
            (o.keyPrefix = t),
            (o.func = n),
            (o.context = r),
            (o.count = 0),
            o
          );
        }
        return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
      }
      function M(e) {
        (e.result = null),
          (e.keyPrefix = null),
          (e.func = null),
          (e.context = null),
          (e.count = 0),
          10 > N.length && N.push(e);
      }
      function F(e, t, n) {
        return null == e
          ? 0
          : (function e(t, n, r, o) {
              var a = typeof t;
              ('undefined' !== a && 'boolean' !== a) || (t = null);
              var u = !1;
              if (null === t) u = !0;
              else
                switch (a) {
                  case 'string':
                  case 'number':
                    u = !0;
                    break;
                  case 'object':
                    switch (t.$$typeof) {
                      case l:
                      case i:
                        u = !0;
                    }
                }
              if (u) return r(o, t, '' === n ? '.' + R(t, 0) : n), 1;
              if (((u = 0), (n = '' === n ? '.' : n + ':'), Array.isArray(t)))
                for (var c = 0; c < t.length; c++) {
                  var s = n + R((a = t[c]), c);
                  u += e(a, s, r, o);
                }
              else if (
                (null === t || 'object' !== typeof t
                  ? (s = null)
                  : (s =
                      'function' === typeof (s = (g && t[g]) || t['@@iterator'])
                        ? s
                        : null),
                'function' === typeof s)
              )
                for (t = s.call(t), c = 0; !(a = t.next()).done; )
                  u += e((a = a.value), (s = n + R(a, c++)), r, o);
              else if ('object' === a)
                throw (
                  ((r = '' + t),
                  Error(
                    v(
                      31,
                      '[object Object]' === r
                        ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                        : r,
                      ''
                    )
                  ))
                );
              return u;
            })(e, '', t, n);
      }
      function R(e, t) {
        return 'object' === typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { '=': '=0', ':': '=2' };
              return (
                '$' +
                ('' + e).replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })(e.key)
          : t.toString(36);
      }
      function I(e, t) {
        e.func.call(e.context, t, e.count++);
      }
      function D(e, t, n) {
        var r = e.result,
          o = e.keyPrefix;
        (e = e.func.call(e.context, t, e.count++)),
          Array.isArray(e)
            ? L(e, r, n, function (e) {
                return e;
              })
            : null != e &&
              (P(e) &&
                (e = (function (e, t) {
                  return {
                    $$typeof: l,
                    type: e.type,
                    key: t,
                    ref: e.ref,
                    props: e.props,
                    _owner: e._owner
                  };
                })(
                  e,
                  o +
                    (!e.key || (t && t.key === e.key)
                      ? ''
                      : ('' + e.key).replace(O, '$&/') + '/') +
                    n
                )),
              r.push(e));
      }
      function L(e, t, n, r, o) {
        var l = '';
        null != n && (l = ('' + n).replace(O, '$&/') + '/'),
          F(e, D, (t = z(t, l, r, o))),
          M(t);
      }
      var j = { current: null };
      function A() {
        var e = j.current;
        if (null === e) throw Error(v(321));
        return e;
      }
      var U = {
        ReactCurrentDispatcher: j,
        ReactCurrentBatchConfig: { suspense: null },
        ReactCurrentOwner: T,
        IsSomeRendererActing: { current: !1 },
        assign: r
      };
      (t.Children = {
        map: function (e, t, n) {
          if (null == e) return e;
          var r = [];
          return L(e, r, null, t, n), r;
        },
        forEach: function (e, t, n) {
          if (null == e) return e;
          F(e, I, (t = z(null, null, t, n))), M(t);
        },
        count: function (e) {
          return F(
            e,
            function () {
              return null;
            },
            null
          );
        },
        toArray: function (e) {
          var t = [];
          return (
            L(e, t, null, function (e) {
              return e;
            }),
            t
          );
        },
        only: function (e) {
          if (!P(e)) throw Error(v(143));
          return e;
        }
      }),
        (t.Component = w),
        (t.Fragment = a),
        (t.Profiler = c),
        (t.PureComponent = x),
        (t.StrictMode = u),
        (t.Suspense = p),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U),
        (t.cloneElement = function (e, t, n) {
          if (null === e || void 0 === e) throw Error(v(267, e));
          var o = r({}, e.props),
            i = e.key,
            a = e.ref,
            u = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((a = t.ref), (u = T.current)),
              void 0 !== t.key && (i = '' + t.key),
              e.type && e.type.defaultProps)
            )
              var c = e.type.defaultProps;
            for (s in t)
              S.call(t, s) &&
                !C.hasOwnProperty(s) &&
                (o[s] = void 0 === t[s] && void 0 !== c ? c[s] : t[s]);
          }
          var s = arguments.length - 2;
          if (1 === s) o.children = n;
          else if (1 < s) {
            c = Array(s);
            for (var f = 0; f < s; f++) c[f] = arguments[f + 2];
            o.children = c;
          }
          return {
            $$typeof: l,
            type: e.type,
            key: i,
            ref: a,
            props: o,
            _owner: u
          };
        }),
        (t.createContext = function (e, t) {
          return (
            void 0 === t && (t = null),
            ((e = {
              $$typeof: f,
              _calculateChangedBits: t,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null
            }).Provider = { $$typeof: s, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = _),
        (t.createFactory = function (e) {
          var t = _.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: d, render: e };
        }),
        (t.isValidElement = P),
        (t.lazy = function (e) {
          return { $$typeof: h, _ctor: e, _status: -1, _result: null };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: m, type: e, compare: void 0 === t ? null : t };
        }),
        (t.useCallback = function (e, t) {
          return A().useCallback(e, t);
        }),
        (t.useContext = function (e, t) {
          return A().useContext(e, t);
        }),
        (t.useDebugValue = function () {}),
        (t.useEffect = function (e, t) {
          return A().useEffect(e, t);
        }),
        (t.useImperativeHandle = function (e, t, n) {
          return A().useImperativeHandle(e, t, n);
        }),
        (t.useLayoutEffect = function (e, t) {
          return A().useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return A().useMemo(e, t);
        }),
        (t.useReducer = function (e, t, n) {
          return A().useReducer(e, t, n);
        }),
        (t.useRef = function (e) {
          return A().useRef(e);
        }),
        (t.useState = function (e) {
          return A().useState(e);
        }),
        (t.version = '16.14.0');
    },
    function (e, t, n) {
      'use strict';
      var r = n(0),
        o = n(7),
        l = n(14);
      function i(e) {
        for (
          var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
            n = 1;
          n < arguments.length;
          n++
        )
          t += '&args[]=' + encodeURIComponent(arguments[n]);
        return (
          'Minified React error #' +
          e +
          '; visit ' +
          t +
          ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
      }
      if (!r) throw Error(i(227));
      function a(e, t, n, r, o, l, i, a, u) {
        var c = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, c);
        } catch (s) {
          this.onError(s);
        }
      }
      var u = !1,
        c = null,
        s = !1,
        f = null,
        d = {
          onError: function (e) {
            (u = !0), (c = e);
          }
        };
      function p(e, t, n, r, o, l, i, s, f) {
        (u = !1), (c = null), a.apply(d, arguments);
      }
      var m = null,
        h = null,
        g = null;
      function v(e, t, n) {
        var r = e.type || 'unknown-event';
        (e.currentTarget = g(n)),
          (function (e, t, n, r, o, l, a, d, m) {
            if ((p.apply(this, arguments), u)) {
              if (!u) throw Error(i(198));
              var h = c;
              (u = !1), (c = null), s || ((s = !0), (f = h));
            }
          })(r, t, void 0, e),
          (e.currentTarget = null);
      }
      var y = null,
        b = {};
      function w() {
        if (y)
          for (var e in b) {
            var t = b[e],
              n = y.indexOf(e);
            if (!(-1 < n)) throw Error(i(96, e));
            if (!x[n]) {
              if (!t.extractEvents) throw Error(i(97, e));
              for (var r in ((x[n] = t), (n = t.eventTypes))) {
                var o = void 0,
                  l = n[r],
                  a = t,
                  u = r;
                if (E.hasOwnProperty(u)) throw Error(i(99, u));
                E[u] = l;
                var c = l.phasedRegistrationNames;
                if (c) {
                  for (o in c) c.hasOwnProperty(o) && k(c[o], a, u);
                  o = !0;
                } else
                  l.registrationName
                    ? (k(l.registrationName, a, u), (o = !0))
                    : (o = !1);
                if (!o) throw Error(i(98, r, e));
              }
            }
          }
      }
      function k(e, t, n) {
        if (T[e]) throw Error(i(100, e));
        (T[e] = t), (S[e] = t.eventTypes[n].dependencies);
      }
      var x = [],
        E = {},
        T = {},
        S = {};
      function C(e) {
        var t,
          n = !1;
        for (t in e)
          if (e.hasOwnProperty(t)) {
            var r = e[t];
            if (!b.hasOwnProperty(t) || b[t] !== r) {
              if (b[t]) throw Error(i(102, t));
              (b[t] = r), (n = !0);
            }
          }
        n && w();
      }
      var _ = !(
          'undefined' === typeof window ||
          'undefined' === typeof window.document ||
          'undefined' === typeof window.document.createElement
        ),
        P = null,
        O = null,
        N = null;
      function z(e) {
        if ((e = h(e))) {
          if ('function' !== typeof P) throw Error(i(280));
          var t = e.stateNode;
          t && ((t = m(t)), P(e.stateNode, e.type, t));
        }
      }
      function M(e) {
        O ? (N ? N.push(e) : (N = [e])) : (O = e);
      }
      function F() {
        if (O) {
          var e = O,
            t = N;
          if (((N = O = null), z(e), t)) for (e = 0; e < t.length; e++) z(t[e]);
        }
      }
      function R(e, t) {
        return e(t);
      }
      function I(e, t, n, r, o) {
        return e(t, n, r, o);
      }
      function D() {}
      var L = R,
        j = !1,
        A = !1;
      function U() {
        (null === O && null === N) || (D(), F());
      }
      function $(e, t, n) {
        if (A) return e(t, n);
        A = !0;
        try {
          return L(e, t, n);
        } finally {
          (A = !1), U();
        }
      }
      var V = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        W = Object.prototype.hasOwnProperty,
        B = {},
        Q = {};
      function H(e, t, n, r, o, l) {
        (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = r),
          (this.attributeNamespace = o),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t),
          (this.sanitizeURL = l);
      }
      var K = {};
      'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
        .split(' ')
        .forEach(function (e) {
          K[e] = new H(e, 0, !1, e, null, !1);
        }),
        [
          ['acceptCharset', 'accept-charset'],
          ['className', 'class'],
          ['htmlFor', 'for'],
          ['httpEquiv', 'http-equiv']
        ].forEach(function (e) {
          var t = e[0];
          K[t] = new H(t, 1, !1, e[1], null, !1);
        }),
        ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
          function (e) {
            K[e] = new H(e, 2, !1, e.toLowerCase(), null, !1);
          }
        ),
        [
          'autoReverse',
          'externalResourcesRequired',
          'focusable',
          'preserveAlpha'
        ].forEach(function (e) {
          K[e] = new H(e, 2, !1, e, null, !1);
        }),
        'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
          .split(' ')
          .forEach(function (e) {
            K[e] = new H(e, 3, !1, e.toLowerCase(), null, !1);
          }),
        ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
          K[e] = new H(e, 3, !0, e, null, !1);
        }),
        ['capture', 'download'].forEach(function (e) {
          K[e] = new H(e, 4, !1, e, null, !1);
        }),
        ['cols', 'rows', 'size', 'span'].forEach(function (e) {
          K[e] = new H(e, 6, !1, e, null, !1);
        }),
        ['rowSpan', 'start'].forEach(function (e) {
          K[e] = new H(e, 5, !1, e.toLowerCase(), null, !1);
        });
      var q = /[\-:]([a-z])/g;
      function G(e) {
        return e[1].toUpperCase();
      }
      'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
        .split(' ')
        .forEach(function (e) {
          var t = e.replace(q, G);
          K[t] = new H(t, 1, !1, e, null, !1);
        }),
        'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
          .split(' ')
          .forEach(function (e) {
            var t = e.replace(q, G);
            K[t] = new H(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1);
          }),
        ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
          var t = e.replace(q, G);
          K[t] = new H(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1);
        }),
        ['tabIndex', 'crossOrigin'].forEach(function (e) {
          K[e] = new H(e, 1, !1, e.toLowerCase(), null, !1);
        }),
        (K.xlinkHref = new H(
          'xlinkHref',
          1,
          !1,
          'xlink:href',
          'http://www.w3.org/1999/xlink',
          !0
        )),
        ['src', 'href', 'action', 'formAction'].forEach(function (e) {
          K[e] = new H(e, 1, !1, e.toLowerCase(), null, !0);
        });
      var X = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function Y(e, t, n, r) {
        var o = K.hasOwnProperty(t) ? K[t] : null;
        (null !== o
          ? 0 === o.type
          : !r &&
            2 < t.length &&
            ('o' === t[0] || 'O' === t[0]) &&
            ('n' === t[1] || 'N' === t[1])) ||
          ((function (e, t, n, r) {
            if (
              null === t ||
              'undefined' === typeof t ||
              (function (e, t, n, r) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof t) {
                  case 'function':
                  case 'symbol':
                    return !0;
                  case 'boolean':
                    return (
                      !r &&
                      (null !== n
                        ? !n.acceptsBooleans
                        : 'data-' !== (e = e.toLowerCase().slice(0, 5)) &&
                          'aria-' !== e)
                    );
                  default:
                    return !1;
                }
              })(e, t, n, r)
            )
              return !0;
            if (r) return !1;
            if (null !== n)
              switch (n.type) {
                case 3:
                  return !t;
                case 4:
                  return !1 === t;
                case 5:
                  return isNaN(t);
                case 6:
                  return isNaN(t) || 1 > t;
              }
            return !1;
          })(t, n, o, r) && (n = null),
          r || null === o
            ? (function (e) {
                return (
                  !!W.call(Q, e) ||
                  (!W.call(B, e) &&
                    (V.test(e) ? (Q[e] = !0) : ((B[e] = !0), !1)))
                );
              })(t) &&
              (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
            : o.mustUseProperty
            ? (e[o.propertyName] = null === n ? 3 !== o.type && '' : n)
            : ((t = o.attributeName),
              (r = o.attributeNamespace),
              null === n
                ? e.removeAttribute(t)
                : ((n =
                    3 === (o = o.type) || (4 === o && !0 === n) ? '' : '' + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
      }
      X.hasOwnProperty('ReactCurrentDispatcher') ||
        (X.ReactCurrentDispatcher = { current: null }),
        X.hasOwnProperty('ReactCurrentBatchConfig') ||
          (X.ReactCurrentBatchConfig = { suspense: null });
      var J = /^(.*)[\\\/]/,
        Z = 'function' === typeof Symbol && Symbol.for,
        ee = Z ? Symbol.for('react.element') : 60103,
        te = Z ? Symbol.for('react.portal') : 60106,
        ne = Z ? Symbol.for('react.fragment') : 60107,
        re = Z ? Symbol.for('react.strict_mode') : 60108,
        oe = Z ? Symbol.for('react.profiler') : 60114,
        le = Z ? Symbol.for('react.provider') : 60109,
        ie = Z ? Symbol.for('react.context') : 60110,
        ae = Z ? Symbol.for('react.concurrent_mode') : 60111,
        ue = Z ? Symbol.for('react.forward_ref') : 60112,
        ce = Z ? Symbol.for('react.suspense') : 60113,
        se = Z ? Symbol.for('react.suspense_list') : 60120,
        fe = Z ? Symbol.for('react.memo') : 60115,
        de = Z ? Symbol.for('react.lazy') : 60116,
        pe = Z ? Symbol.for('react.block') : 60121,
        me = 'function' === typeof Symbol && Symbol.iterator;
      function he(e) {
        return null === e || 'object' !== typeof e
          ? null
          : 'function' === typeof (e = (me && e[me]) || e['@@iterator'])
          ? e
          : null;
      }
      function ge(e) {
        if (null == e) return null;
        if ('function' === typeof e) return e.displayName || e.name || null;
        if ('string' === typeof e) return e;
        switch (e) {
          case ne:
            return 'Fragment';
          case te:
            return 'Portal';
          case oe:
            return 'Profiler';
          case re:
            return 'StrictMode';
          case ce:
            return 'Suspense';
          case se:
            return 'SuspenseList';
        }
        if ('object' === typeof e)
          switch (e.$$typeof) {
            case ie:
              return 'Context.Consumer';
            case le:
              return 'Context.Provider';
            case ue:
              var t = e.render;
              return (
                (t = t.displayName || t.name || ''),
                e.displayName ||
                  ('' !== t ? 'ForwardRef(' + t + ')' : 'ForwardRef')
              );
            case fe:
              return ge(e.type);
            case pe:
              return ge(e.render);
            case de:
              if ((e = 1 === e._status ? e._result : null)) return ge(e);
          }
        return null;
      }
      function ve(e) {
        var t = '';
        do {
          e: switch (e.tag) {
            case 3:
            case 4:
            case 6:
            case 7:
            case 10:
            case 9:
              var n = '';
              break e;
            default:
              var r = e._debugOwner,
                o = e._debugSource,
                l = ge(e.type);
              (n = null),
                r && (n = ge(r.type)),
                (r = l),
                (l = ''),
                o
                  ? (l =
                      ' (at ' +
                      o.fileName.replace(J, '') +
                      ':' +
                      o.lineNumber +
                      ')')
                  : n && (l = ' (created by ' + n + ')'),
                (n = '\n    in ' + (r || 'Unknown') + l);
          }
          (t += n), (e = e.return);
        } while (e);
        return t;
      }
      function ye(e) {
        switch (typeof e) {
          case 'boolean':
          case 'number':
          case 'object':
          case 'string':
          case 'undefined':
            return e;
          default:
            return '';
        }
      }
      function be(e) {
        var t = e.type;
        return (
          (e = e.nodeName) &&
          'input' === e.toLowerCase() &&
          ('checkbox' === t || 'radio' === t)
        );
      }
      function we(e) {
        e._valueTracker ||
          (e._valueTracker = (function (e) {
            var t = be(e) ? 'checked' : 'value',
              n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
              r = '' + e[t];
            if (
              !e.hasOwnProperty(t) &&
              'undefined' !== typeof n &&
              'function' === typeof n.get &&
              'function' === typeof n.set
            ) {
              var o = n.get,
                l = n.set;
              return (
                Object.defineProperty(e, t, {
                  configurable: !0,
                  get: function () {
                    return o.call(this);
                  },
                  set: function (e) {
                    (r = '' + e), l.call(this, e);
                  }
                }),
                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                {
                  getValue: function () {
                    return r;
                  },
                  setValue: function (e) {
                    r = '' + e;
                  },
                  stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                  }
                }
              );
            }
          })(e));
      }
      function ke(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
          r = '';
        return (
          e && (r = be(e) ? (e.checked ? 'true' : 'false') : e.value),
          (e = r) !== n && (t.setValue(e), !0)
        );
      }
      function xe(e, t) {
        var n = t.checked;
        return o({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != n ? n : e._wrapperState.initialChecked
        });
      }
      function Ee(e, t) {
        var n = null == t.defaultValue ? '' : t.defaultValue,
          r = null != t.checked ? t.checked : t.defaultChecked;
        (n = ye(null != t.value ? t.value : n)),
          (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
              'checkbox' === t.type || 'radio' === t.type
                ? null != t.checked
                : null != t.value
          });
      }
      function Te(e, t) {
        null != (t = t.checked) && Y(e, 'checked', t, !1);
      }
      function Se(e, t) {
        Te(e, t);
        var n = ye(t.value),
          r = t.type;
        if (null != n)
          'number' === r
            ? ((0 === n && '' === e.value) || e.value != n) &&
              (e.value = '' + n)
            : e.value !== '' + n && (e.value = '' + n);
        else if ('submit' === r || 'reset' === r)
          return void e.removeAttribute('value');
        t.hasOwnProperty('value')
          ? _e(e, t.type, n)
          : t.hasOwnProperty('defaultValue') &&
            _e(e, t.type, ye(t.defaultValue)),
          null == t.checked &&
            null != t.defaultChecked &&
            (e.defaultChecked = !!t.defaultChecked);
      }
      function Ce(e, t, n) {
        if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
          var r = t.type;
          if (
            !(
              ('submit' !== r && 'reset' !== r) ||
              (void 0 !== t.value && null !== t.value)
            )
          )
            return;
          (t = '' + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
        }
        '' !== (n = e.name) && (e.name = ''),
          (e.defaultChecked = !!e._wrapperState.initialChecked),
          '' !== n && (e.name = n);
      }
      function _e(e, t, n) {
        ('number' === t && e.ownerDocument.activeElement === e) ||
          (null == n
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
      }
      function Pe(e, t) {
        return (
          (e = o({ children: void 0 }, t)),
          (t = (function (e) {
            var t = '';
            return (
              r.Children.forEach(e, function (e) {
                null != e && (t += e);
              }),
              t
            );
          })(t.children)) && (e.children = t),
          e
        );
      }
      function Oe(e, t, n, r) {
        if (((e = e.options), t)) {
          t = {};
          for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
          for (n = 0; n < e.length; n++)
            (o = t.hasOwnProperty('$' + e[n].value)),
              e[n].selected !== o && (e[n].selected = o),
              o && r && (e[n].defaultSelected = !0);
        } else {
          for (n = '' + ye(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n)
              return (
                (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
              );
            null !== t || e[o].disabled || (t = e[o]);
          }
          null !== t && (t.selected = !0);
        }
      }
      function Ne(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
        return o({}, t, {
          value: void 0,
          defaultValue: void 0,
          children: '' + e._wrapperState.initialValue
        });
      }
      function ze(e, t) {
        var n = t.value;
        if (null == n) {
          if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(i(92));
            if (Array.isArray(n)) {
              if (!(1 >= n.length)) throw Error(i(93));
              n = n[0];
            }
            t = n;
          }
          null == t && (t = ''), (n = t);
        }
        e._wrapperState = { initialValue: ye(n) };
      }
      function Me(e, t) {
        var n = ye(t.value),
          r = ye(t.defaultValue);
        null != n &&
          ((n = '' + n) !== e.value && (e.value = n),
          null == t.defaultValue &&
            e.defaultValue !== n &&
            (e.defaultValue = n)),
          null != r && (e.defaultValue = '' + r);
      }
      function Fe(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue &&
          '' !== t &&
          null !== t &&
          (e.value = t);
      }
      var Re = 'http://www.w3.org/1999/xhtml',
        Ie = 'http://www.w3.org/2000/svg';
      function De(e) {
        switch (e) {
          case 'svg':
            return 'http://www.w3.org/2000/svg';
          case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
          default:
            return 'http://www.w3.org/1999/xhtml';
        }
      }
      function Le(e, t) {
        return null == e || 'http://www.w3.org/1999/xhtml' === e
          ? De(t)
          : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
          ? 'http://www.w3.org/1999/xhtml'
          : e;
      }
      var je,
        Ae = (function (e) {
          return 'undefined' !== typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, o) {
                MSApp.execUnsafeLocalFunction(function () {
                  return e(t, n);
                });
              }
            : e;
        })(function (e, t) {
          if (e.namespaceURI !== Ie || 'innerHTML' in e) e.innerHTML = t;
          else {
            for (
              (je = je || document.createElement('div')).innerHTML =
                '<svg>' + t.valueOf().toString() + '</svg>',
                t = je.firstChild;
              e.firstChild;

            )
              e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
          }
        });
      function Ue(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && 3 === n.nodeType)
            return void (n.nodeValue = t);
        }
        e.textContent = t;
      }
      function $e(e, t) {
        var n = {};
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n['Webkit' + e] = 'webkit' + t),
          (n['Moz' + e] = 'moz' + t),
          n
        );
      }
      var Ve = {
          animationend: $e('Animation', 'AnimationEnd'),
          animationiteration: $e('Animation', 'AnimationIteration'),
          animationstart: $e('Animation', 'AnimationStart'),
          transitionend: $e('Transition', 'TransitionEnd')
        },
        We = {},
        Be = {};
      function Qe(e) {
        if (We[e]) return We[e];
        if (!Ve[e]) return e;
        var t,
          n = Ve[e];
        for (t in n) if (n.hasOwnProperty(t) && t in Be) return (We[e] = n[t]);
        return e;
      }
      _ &&
        ((Be = document.createElement('div').style),
        'AnimationEvent' in window ||
          (delete Ve.animationend.animation,
          delete Ve.animationiteration.animation,
          delete Ve.animationstart.animation),
        'TransitionEvent' in window || delete Ve.transitionend.transition);
      var He = Qe('animationend'),
        Ke = Qe('animationiteration'),
        qe = Qe('animationstart'),
        Ge = Qe('transitionend'),
        Xe = 'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
          ' '
        ),
        Ye = new ('function' === typeof WeakMap ? WeakMap : Map)();
      function Je(e) {
        var t = Ye.get(e);
        return void 0 === t && ((t = new Map()), Ye.set(e, t)), t;
      }
      function Ze(e) {
        var t = e,
          n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do {
            0 !== (1026 & (t = e).effectTag) && (n = t.return), (e = t.return);
          } while (e);
        }
        return 3 === t.tag ? n : null;
      }
      function et(e) {
        if (13 === e.tag) {
          var t = e.memoizedState;
          if (
            (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
            null !== t)
          )
            return t.dehydrated;
        }
        return null;
      }
      function tt(e) {
        if (Ze(e) !== e) throw Error(i(188));
      }
      function nt(e) {
        if (
          !(e = (function (e) {
            var t = e.alternate;
            if (!t) {
              if (null === (t = Ze(e))) throw Error(i(188));
              return t !== e ? null : e;
            }
            for (var n = e, r = t; ; ) {
              var o = n.return;
              if (null === o) break;
              var l = o.alternate;
              if (null === l) {
                if (null !== (r = o.return)) {
                  n = r;
                  continue;
                }
                break;
              }
              if (o.child === l.child) {
                for (l = o.child; l; ) {
                  if (l === n) return tt(o), e;
                  if (l === r) return tt(o), t;
                  l = l.sibling;
                }
                throw Error(i(188));
              }
              if (n.return !== r.return) (n = o), (r = l);
              else {
                for (var a = !1, u = o.child; u; ) {
                  if (u === n) {
                    (a = !0), (n = o), (r = l);
                    break;
                  }
                  if (u === r) {
                    (a = !0), (r = o), (n = l);
                    break;
                  }
                  u = u.sibling;
                }
                if (!a) {
                  for (u = l.child; u; ) {
                    if (u === n) {
                      (a = !0), (n = l), (r = o);
                      break;
                    }
                    if (u === r) {
                      (a = !0), (r = l), (n = o);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!a) throw Error(i(189));
                }
              }
              if (n.alternate !== r) throw Error(i(190));
            }
            if (3 !== n.tag) throw Error(i(188));
            return n.stateNode.current === n ? e : t;
          })(e))
        )
          return null;
        for (var t = e; ; ) {
          if (5 === t.tag || 6 === t.tag) return t;
          if (t.child) (t.child.return = t), (t = t.child);
          else {
            if (t === e) break;
            for (; !t.sibling; ) {
              if (!t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }
        return null;
      }
      function rt(e, t) {
        if (null == t) throw Error(i(30));
        return null == e
          ? t
          : Array.isArray(e)
          ? Array.isArray(t)
            ? (e.push.apply(e, t), e)
            : (e.push(t), e)
          : Array.isArray(t)
          ? [e].concat(t)
          : [e, t];
      }
      function ot(e, t, n) {
        Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
      }
      var lt = null;
      function it(e) {
        if (e) {
          var t = e._dispatchListeners,
            n = e._dispatchInstances;
          if (Array.isArray(t))
            for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
              v(e, t[r], n[r]);
          else t && v(e, t, n);
          (e._dispatchListeners = null),
            (e._dispatchInstances = null),
            e.isPersistent() || e.constructor.release(e);
        }
      }
      function at(e) {
        if ((null !== e && (lt = rt(lt, e)), (e = lt), (lt = null), e)) {
          if ((ot(e, it), lt)) throw Error(i(95));
          if (s) throw ((e = f), (s = !1), (f = null), e);
        }
      }
      function ut(e) {
        return (
          (e = e.target || e.srcElement || window).correspondingUseElement &&
            (e = e.correspondingUseElement),
          3 === e.nodeType ? e.parentNode : e
        );
      }
      function ct(e) {
        if (!_) return !1;
        var t = (e = 'on' + e) in document;
        return (
          t ||
            ((t = document.createElement('div')).setAttribute(e, 'return;'),
            (t = 'function' === typeof t[e])),
          t
        );
      }
      var st = [];
      function ft(e) {
        (e.topLevelType = null),
          (e.nativeEvent = null),
          (e.targetInst = null),
          (e.ancestors.length = 0),
          10 > st.length && st.push(e);
      }
      function dt(e, t, n, r) {
        if (st.length) {
          var o = st.pop();
          return (
            (o.topLevelType = e),
            (o.eventSystemFlags = r),
            (o.nativeEvent = t),
            (o.targetInst = n),
            o
          );
        }
        return {
          topLevelType: e,
          eventSystemFlags: r,
          nativeEvent: t,
          targetInst: n,
          ancestors: []
        };
      }
      function pt(e) {
        var t = e.targetInst,
          n = t;
        do {
          if (!n) {
            e.ancestors.push(n);
            break;
          }
          var r = n;
          if (3 === r.tag) r = r.stateNode.containerInfo;
          else {
            for (; r.return; ) r = r.return;
            r = 3 !== r.tag ? null : r.stateNode.containerInfo;
          }
          if (!r) break;
          (5 !== (t = n.tag) && 6 !== t) || e.ancestors.push(n), (n = _n(r));
        } while (n);
        for (n = 0; n < e.ancestors.length; n++) {
          t = e.ancestors[n];
          var o = ut(e.nativeEvent);
          r = e.topLevelType;
          var l = e.nativeEvent,
            i = e.eventSystemFlags;
          0 === n && (i |= 64);
          for (var a = null, u = 0; u < x.length; u++) {
            var c = x[u];
            c && (c = c.extractEvents(r, t, l, o, i)) && (a = rt(a, c));
          }
          at(a);
        }
      }
      function mt(e, t, n) {
        if (!n.has(e)) {
          switch (e) {
            case 'scroll':
              qt(t, 'scroll', !0);
              break;
            case 'focus':
            case 'blur':
              qt(t, 'focus', !0),
                qt(t, 'blur', !0),
                n.set('blur', null),
                n.set('focus', null);
              break;
            case 'cancel':
            case 'close':
              ct(e) && qt(t, e, !0);
              break;
            case 'invalid':
            case 'submit':
            case 'reset':
              break;
            default:
              -1 === Xe.indexOf(e) && Kt(e, t);
          }
          n.set(e, null);
        }
      }
      var ht,
        gt,
        vt,
        yt = !1,
        bt = [],
        wt = null,
        kt = null,
        xt = null,
        Et = new Map(),
        Tt = new Map(),
        St = [],
        Ct = 'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit'.split(
          ' '
        ),
        _t = 'focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture'.split(
          ' '
        );
      function Pt(e, t, n, r, o) {
        return {
          blockedOn: e,
          topLevelType: t,
          eventSystemFlags: 32 | n,
          nativeEvent: o,
          container: r
        };
      }
      function Ot(e, t) {
        switch (e) {
          case 'focus':
          case 'blur':
            wt = null;
            break;
          case 'dragenter':
          case 'dragleave':
            kt = null;
            break;
          case 'mouseover':
          case 'mouseout':
            xt = null;
            break;
          case 'pointerover':
          case 'pointerout':
            Et.delete(t.pointerId);
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
            Tt.delete(t.pointerId);
        }
      }
      function Nt(e, t, n, r, o, l) {
        return null === e || e.nativeEvent !== l
          ? ((e = Pt(t, n, r, o, l)),
            null !== t && null !== (t = Pn(t)) && gt(t),
            e)
          : ((e.eventSystemFlags |= r), e);
      }
      function zt(e) {
        var t = _n(e.target);
        if (null !== t) {
          var n = Ze(t);
          if (null !== n)
            if (13 === (t = n.tag)) {
              if (null !== (t = et(n)))
                return (
                  (e.blockedOn = t),
                  void l.unstable_runWithPriority(e.priority, function () {
                    vt(n);
                  })
                );
            } else if (3 === t && n.stateNode.hydrate)
              return void (e.blockedOn =
                3 === n.tag ? n.stateNode.containerInfo : null);
        }
        e.blockedOn = null;
      }
      function Mt(e) {
        if (null !== e.blockedOn) return !1;
        var t = Jt(
          e.topLevelType,
          e.eventSystemFlags,
          e.container,
          e.nativeEvent
        );
        if (null !== t) {
          var n = Pn(t);
          return null !== n && gt(n), (e.blockedOn = t), !1;
        }
        return !0;
      }
      function Ft(e, t, n) {
        Mt(e) && n.delete(t);
      }
      function Rt() {
        for (yt = !1; 0 < bt.length; ) {
          var e = bt[0];
          if (null !== e.blockedOn) {
            null !== (e = Pn(e.blockedOn)) && ht(e);
            break;
          }
          var t = Jt(
            e.topLevelType,
            e.eventSystemFlags,
            e.container,
            e.nativeEvent
          );
          null !== t ? (e.blockedOn = t) : bt.shift();
        }
        null !== wt && Mt(wt) && (wt = null),
          null !== kt && Mt(kt) && (kt = null),
          null !== xt && Mt(xt) && (xt = null),
          Et.forEach(Ft),
          Tt.forEach(Ft);
      }
      function It(e, t) {
        e.blockedOn === t &&
          ((e.blockedOn = null),
          yt ||
            ((yt = !0),
            l.unstable_scheduleCallback(l.unstable_NormalPriority, Rt)));
      }
      function Dt(e) {
        function t(t) {
          return It(t, e);
        }
        if (0 < bt.length) {
          It(bt[0], e);
          for (var n = 1; n < bt.length; n++) {
            var r = bt[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
        }
        for (
          null !== wt && It(wt, e),
            null !== kt && It(kt, e),
            null !== xt && It(xt, e),
            Et.forEach(t),
            Tt.forEach(t),
            n = 0;
          n < St.length;
          n++
        )
          (r = St[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < St.length && null === (n = St[0]).blockedOn; )
          zt(n), null === n.blockedOn && St.shift();
      }
      var Lt = {},
        jt = new Map(),
        At = new Map(),
        Ut = [
          'abort',
          'abort',
          He,
          'animationEnd',
          Ke,
          'animationIteration',
          qe,
          'animationStart',
          'canplay',
          'canPlay',
          'canplaythrough',
          'canPlayThrough',
          'durationchange',
          'durationChange',
          'emptied',
          'emptied',
          'encrypted',
          'encrypted',
          'ended',
          'ended',
          'error',
          'error',
          'gotpointercapture',
          'gotPointerCapture',
          'load',
          'load',
          'loadeddata',
          'loadedData',
          'loadedmetadata',
          'loadedMetadata',
          'loadstart',
          'loadStart',
          'lostpointercapture',
          'lostPointerCapture',
          'playing',
          'playing',
          'progress',
          'progress',
          'seeking',
          'seeking',
          'stalled',
          'stalled',
          'suspend',
          'suspend',
          'timeupdate',
          'timeUpdate',
          Ge,
          'transitionEnd',
          'waiting',
          'waiting'
        ];
      function $t(e, t) {
        for (var n = 0; n < e.length; n += 2) {
          var r = e[n],
            o = e[n + 1],
            l = 'on' + (o[0].toUpperCase() + o.slice(1));
          (l = {
            phasedRegistrationNames: { bubbled: l, captured: l + 'Capture' },
            dependencies: [r],
            eventPriority: t
          }),
            At.set(r, t),
            jt.set(r, l),
            (Lt[o] = l);
        }
      }
      $t(
        'blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
          ' '
        ),
        0
      ),
        $t(
          'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
            ' '
          ),
          1
        ),
        $t(Ut, 2);
      for (
        var Vt = 'change selectionchange textInput compositionstart compositionend compositionupdate'.split(
            ' '
          ),
          Wt = 0;
        Wt < Vt.length;
        Wt++
      )
        At.set(Vt[Wt], 0);
      var Bt = l.unstable_UserBlockingPriority,
        Qt = l.unstable_runWithPriority,
        Ht = !0;
      function Kt(e, t) {
        qt(t, e, !1);
      }
      function qt(e, t, n) {
        var r = At.get(t);
        switch (void 0 === r ? 2 : r) {
          case 0:
            r = Gt.bind(null, t, 1, e);
            break;
          case 1:
            r = Xt.bind(null, t, 1, e);
            break;
          default:
            r = Yt.bind(null, t, 1, e);
        }
        n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1);
      }
      function Gt(e, t, n, r) {
        j || D();
        var o = Yt,
          l = j;
        j = !0;
        try {
          I(o, e, t, n, r);
        } finally {
          (j = l) || U();
        }
      }
      function Xt(e, t, n, r) {
        Qt(Bt, Yt.bind(null, e, t, n, r));
      }
      function Yt(e, t, n, r) {
        if (Ht)
          if (0 < bt.length && -1 < Ct.indexOf(e))
            (e = Pt(null, e, t, n, r)), bt.push(e);
          else {
            var o = Jt(e, t, n, r);
            if (null === o) Ot(e, r);
            else if (-1 < Ct.indexOf(e)) (e = Pt(o, e, t, n, r)), bt.push(e);
            else if (
              !(function (e, t, n, r, o) {
                switch (t) {
                  case 'focus':
                    return (wt = Nt(wt, e, t, n, r, o)), !0;
                  case 'dragenter':
                    return (kt = Nt(kt, e, t, n, r, o)), !0;
                  case 'mouseover':
                    return (xt = Nt(xt, e, t, n, r, o)), !0;
                  case 'pointerover':
                    var l = o.pointerId;
                    return Et.set(l, Nt(Et.get(l) || null, e, t, n, r, o)), !0;
                  case 'gotpointercapture':
                    return (
                      (l = o.pointerId),
                      Tt.set(l, Nt(Tt.get(l) || null, e, t, n, r, o)),
                      !0
                    );
                }
                return !1;
              })(o, e, t, n, r)
            ) {
              Ot(e, r), (e = dt(e, r, null, t));
              try {
                $(pt, e);
              } finally {
                ft(e);
              }
            }
          }
      }
      function Jt(e, t, n, r) {
        if (null !== (n = _n((n = ut(r))))) {
          var o = Ze(n);
          if (null === o) n = null;
          else {
            var l = o.tag;
            if (13 === l) {
              if (null !== (n = et(o))) return n;
              n = null;
            } else if (3 === l) {
              if (o.stateNode.hydrate)
                return 3 === o.tag ? o.stateNode.containerInfo : null;
              n = null;
            } else o !== n && (n = null);
          }
        }
        e = dt(e, r, n, t);
        try {
          $(pt, e);
        } finally {
          ft(e);
        }
        return null;
      }
      var Zt = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        },
        en = ['Webkit', 'ms', 'Moz', 'O'];
      function tn(e, t, n) {
        return null == t || 'boolean' === typeof t || '' === t
          ? ''
          : n ||
            'number' !== typeof t ||
            0 === t ||
            (Zt.hasOwnProperty(e) && Zt[e])
          ? ('' + t).trim()
          : t + 'px';
      }
      function nn(e, t) {
        for (var n in ((e = e.style), t))
          if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf('--'),
              o = tn(n, t[n], r);
            'float' === n && (n = 'cssFloat'),
              r ? e.setProperty(n, o) : (e[n] = o);
          }
      }
      Object.keys(Zt).forEach(function (e) {
        en.forEach(function (t) {
          (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Zt[t] = Zt[e]);
        });
      });
      var rn = o(
        { menuitem: !0 },
        {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0
        }
      );
      function on(e, t) {
        if (t) {
          if (
            rn[e] &&
            (null != t.children || null != t.dangerouslySetInnerHTML)
          )
            throw Error(i(137, e, ''));
          if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(i(60));
            if (
              'object' !== typeof t.dangerouslySetInnerHTML ||
              !('__html' in t.dangerouslySetInnerHTML)
            )
              throw Error(i(61));
          }
          if (null != t.style && 'object' !== typeof t.style)
            throw Error(i(62, ''));
        }
      }
      function ln(e, t) {
        if (-1 === e.indexOf('-')) return 'string' === typeof t.is;
        switch (e) {
          case 'annotation-xml':
          case 'color-profile':
          case 'font-face':
          case 'font-face-src':
          case 'font-face-uri':
          case 'font-face-format':
          case 'font-face-name':
          case 'missing-glyph':
            return !1;
          default:
            return !0;
        }
      }
      var an = Re;
      function un(e, t) {
        var n = Je(
          (e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument)
        );
        t = S[t];
        for (var r = 0; r < t.length; r++) mt(t[r], e, n);
      }
      function cn() {}
      function sn(e) {
        if (
          'undefined' ===
          typeof (e =
            e || ('undefined' !== typeof document ? document : void 0))
        )
          return null;
        try {
          return e.activeElement || e.body;
        } catch (t) {
          return e.body;
        }
      }
      function fn(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }
      function dn(e, t) {
        var n,
          r = fn(e);
        for (e = 0; r; ) {
          if (3 === r.nodeType) {
            if (((n = e + r.textContent.length), e <= t && n >= t))
              return { node: r, offset: t - e };
            e = n;
          }
          e: {
            for (; r; ) {
              if (r.nextSibling) {
                r = r.nextSibling;
                break e;
              }
              r = r.parentNode;
            }
            r = void 0;
          }
          r = fn(r);
        }
      }
      function pn() {
        for (var e = window, t = sn(); t instanceof e.HTMLIFrameElement; ) {
          try {
            var n = 'string' === typeof t.contentWindow.location.href;
          } catch (r) {
            n = !1;
          }
          if (!n) break;
          t = sn((e = t.contentWindow).document);
        }
        return t;
      }
      function mn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
          t &&
          (('input' === t &&
            ('text' === e.type ||
              'search' === e.type ||
              'tel' === e.type ||
              'url' === e.type ||
              'password' === e.type)) ||
            'textarea' === t ||
            'true' === e.contentEditable)
        );
      }
      var hn = null,
        gn = null;
      function vn(e, t) {
        switch (e) {
          case 'button':
          case 'input':
          case 'select':
          case 'textarea':
            return !!t.autoFocus;
        }
        return !1;
      }
      function yn(e, t) {
        return (
          'textarea' === e ||
          'option' === e ||
          'noscript' === e ||
          'string' === typeof t.children ||
          'number' === typeof t.children ||
          ('object' === typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
        );
      }
      var bn = 'function' === typeof setTimeout ? setTimeout : void 0,
        wn = 'function' === typeof clearTimeout ? clearTimeout : void 0;
      function kn(e) {
        for (; null != e; e = e.nextSibling) {
          var t = e.nodeType;
          if (1 === t || 3 === t) break;
        }
        return e;
      }
      function xn(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
          if (8 === e.nodeType) {
            var n = e.data;
            if ('$' === n || '$!' === n || '$?' === n) {
              if (0 === t) return e;
              t--;
            } else '/$' === n && t++;
          }
          e = e.previousSibling;
        }
        return null;
      }
      var En = Math.random().toString(36).slice(2),
        Tn = '__reactInternalInstance$' + En,
        Sn = '__reactEventHandlers$' + En,
        Cn = '__reactContainere$' + En;
      function _n(e) {
        var t = e[Tn];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
          if ((t = n[Cn] || n[Tn])) {
            if (
              ((n = t.alternate),
              null !== t.child || (null !== n && null !== n.child))
            )
              for (e = xn(e); null !== e; ) {
                if ((n = e[Tn])) return n;
                e = xn(e);
              }
            return t;
          }
          n = (e = n).parentNode;
        }
        return null;
      }
      function Pn(e) {
        return !(e = e[Tn] || e[Cn]) ||
          (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
          ? null
          : e;
      }
      function On(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(i(33));
      }
      function Nn(e) {
        return e[Sn] || null;
      }
      function zn(e) {
        do {
          e = e.return;
        } while (e && 5 !== e.tag);
        return e || null;
      }
      function Mn(e, t) {
        var n = e.stateNode;
        if (!n) return null;
        var r = m(n);
        if (!r) return null;
        n = r[t];
        e: switch (t) {
          case 'onClick':
          case 'onClickCapture':
          case 'onDoubleClick':
          case 'onDoubleClickCapture':
          case 'onMouseDown':
          case 'onMouseDownCapture':
          case 'onMouseMove':
          case 'onMouseMoveCapture':
          case 'onMouseUp':
          case 'onMouseUpCapture':
          case 'onMouseEnter':
            (r = !r.disabled) ||
              (r = !(
                'button' === (e = e.type) ||
                'input' === e ||
                'select' === e ||
                'textarea' === e
              )),
              (e = !r);
            break e;
          default:
            e = !1;
        }
        if (e) return null;
        if (n && 'function' !== typeof n) throw Error(i(231, t, typeof n));
        return n;
      }
      function Fn(e, t, n) {
        (t = Mn(e, n.dispatchConfig.phasedRegistrationNames[t])) &&
          ((n._dispatchListeners = rt(n._dispatchListeners, t)),
          (n._dispatchInstances = rt(n._dispatchInstances, e)));
      }
      function Rn(e) {
        if (e && e.dispatchConfig.phasedRegistrationNames) {
          for (var t = e._targetInst, n = []; t; ) n.push(t), (t = zn(t));
          for (t = n.length; 0 < t--; ) Fn(n[t], 'captured', e);
          for (t = 0; t < n.length; t++) Fn(n[t], 'bubbled', e);
        }
      }
      function In(e, t, n) {
        e &&
          n &&
          n.dispatchConfig.registrationName &&
          (t = Mn(e, n.dispatchConfig.registrationName)) &&
          ((n._dispatchListeners = rt(n._dispatchListeners, t)),
          (n._dispatchInstances = rt(n._dispatchInstances, e)));
      }
      function Dn(e) {
        e && e.dispatchConfig.registrationName && In(e._targetInst, null, e);
      }
      function Ln(e) {
        ot(e, Rn);
      }
      var jn = null,
        An = null,
        Un = null;
      function $n() {
        if (Un) return Un;
        var e,
          t,
          n = An,
          r = n.length,
          o = 'value' in jn ? jn.value : jn.textContent,
          l = o.length;
        for (e = 0; e < r && n[e] === o[e]; e++);
        var i = r - e;
        for (t = 1; t <= i && n[r - t] === o[l - t]; t++);
        return (Un = o.slice(e, 1 < t ? 1 - t : void 0));
      }
      function Vn() {
        return !0;
      }
      function Wn() {
        return !1;
      }
      function Bn(e, t, n, r) {
        for (var o in ((this.dispatchConfig = e),
        (this._targetInst = t),
        (this.nativeEvent = n),
        (e = this.constructor.Interface)))
          e.hasOwnProperty(o) &&
            ((t = e[o])
              ? (this[o] = t(n))
              : 'target' === o
              ? (this.target = r)
              : (this[o] = n[o]));
        return (
          (this.isDefaultPrevented = (
            null != n.defaultPrevented
              ? n.defaultPrevented
              : !1 === n.returnValue
          )
            ? Vn
            : Wn),
          (this.isPropagationStopped = Wn),
          this
        );
      }
      function Qn(e, t, n, r) {
        if (this.eventPool.length) {
          var o = this.eventPool.pop();
          return this.call(o, e, t, n, r), o;
        }
        return new this(e, t, n, r);
      }
      function Hn(e) {
        if (!(e instanceof this)) throw Error(i(279));
        e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e);
      }
      function Kn(e) {
        (e.eventPool = []), (e.getPooled = Qn), (e.release = Hn);
      }
      o(Bn.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : 'unknown' !== typeof e.returnValue && (e.returnValue = !1),
            (this.isDefaultPrevented = Vn));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : 'unknown' !== typeof e.cancelBubble && (e.cancelBubble = !0),
            (this.isPropagationStopped = Vn));
        },
        persist: function () {
          this.isPersistent = Vn;
        },
        isPersistent: Wn,
        destructor: function () {
          var e,
            t = this.constructor.Interface;
          for (e in t) this[e] = null;
          (this.nativeEvent = this._targetInst = this.dispatchConfig = null),
            (this.isPropagationStopped = this.isDefaultPrevented = Wn),
            (this._dispatchInstances = this._dispatchListeners = null);
        }
      }),
        (Bn.Interface = {
          type: null,
          target: null,
          currentTarget: function () {
            return null;
          },
          eventPhase: null,
          bubbles: null,
          cancelable: null,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: null,
          isTrusted: null
        }),
        (Bn.extend = function (e) {
          function t() {}
          function n() {
            return r.apply(this, arguments);
          }
          var r = this;
          t.prototype = r.prototype;
          var l = new t();
          return (
            o(l, n.prototype),
            (n.prototype = l),
            (n.prototype.constructor = n),
            (n.Interface = o({}, r.Interface, e)),
            (n.extend = r.extend),
            Kn(n),
            n
          );
        }),
        Kn(Bn);
      var qn = Bn.extend({ data: null }),
        Gn = Bn.extend({ data: null }),
        Xn = [9, 13, 27, 32],
        Yn = _ && 'CompositionEvent' in window,
        Jn = null;
      _ && 'documentMode' in document && (Jn = document.documentMode);
      var Zn = _ && 'TextEvent' in window && !Jn,
        er = _ && (!Yn || (Jn && 8 < Jn && 11 >= Jn)),
        tr = String.fromCharCode(32),
        nr = {
          beforeInput: {
            phasedRegistrationNames: {
              bubbled: 'onBeforeInput',
              captured: 'onBeforeInputCapture'
            },
            dependencies: ['compositionend', 'keypress', 'textInput', 'paste']
          },
          compositionEnd: {
            phasedRegistrationNames: {
              bubbled: 'onCompositionEnd',
              captured: 'onCompositionEndCapture'
            },
            dependencies: 'blur compositionend keydown keypress keyup mousedown'.split(
              ' '
            )
          },
          compositionStart: {
            phasedRegistrationNames: {
              bubbled: 'onCompositionStart',
              captured: 'onCompositionStartCapture'
            },
            dependencies: 'blur compositionstart keydown keypress keyup mousedown'.split(
              ' '
            )
          },
          compositionUpdate: {
            phasedRegistrationNames: {
              bubbled: 'onCompositionUpdate',
              captured: 'onCompositionUpdateCapture'
            },
            dependencies: 'blur compositionupdate keydown keypress keyup mousedown'.split(
              ' '
            )
          }
        },
        rr = !1;
      function or(e, t) {
        switch (e) {
          case 'keyup':
            return -1 !== Xn.indexOf(t.keyCode);
          case 'keydown':
            return 229 !== t.keyCode;
          case 'keypress':
          case 'mousedown':
          case 'blur':
            return !0;
          default:
            return !1;
        }
      }
      function lr(e) {
        return 'object' === typeof (e = e.detail) && 'data' in e
          ? e.data
          : null;
      }
      var ir = !1;
      var ar = {
          eventTypes: nr,
          extractEvents: function (e, t, n, r) {
            var o;
            if (Yn)
              e: {
                switch (e) {
                  case 'compositionstart':
                    var l = nr.compositionStart;
                    break e;
                  case 'compositionend':
                    l = nr.compositionEnd;
                    break e;
                  case 'compositionupdate':
                    l = nr.compositionUpdate;
                    break e;
                }
                l = void 0;
              }
            else
              ir
                ? or(e, n) && (l = nr.compositionEnd)
                : 'keydown' === e &&
                  229 === n.keyCode &&
                  (l = nr.compositionStart);
            return (
              l
                ? (er &&
                    'ko' !== n.locale &&
                    (ir || l !== nr.compositionStart
                      ? l === nr.compositionEnd && ir && (o = $n())
                      : ((An = 'value' in (jn = r) ? jn.value : jn.textContent),
                        (ir = !0))),
                  (l = qn.getPooled(l, t, n, r)),
                  o ? (l.data = o) : null !== (o = lr(n)) && (l.data = o),
                  Ln(l),
                  (o = l))
                : (o = null),
              (e = Zn
                ? (function (e, t) {
                    switch (e) {
                      case 'compositionend':
                        return lr(t);
                      case 'keypress':
                        return 32 !== t.which ? null : ((rr = !0), tr);
                      case 'textInput':
                        return (e = t.data) === tr && rr ? null : e;
                      default:
                        return null;
                    }
                  })(e, n)
                : (function (e, t) {
                    if (ir)
                      return 'compositionend' === e || (!Yn && or(e, t))
                        ? ((e = $n()), (Un = An = jn = null), (ir = !1), e)
                        : null;
                    switch (e) {
                      case 'paste':
                        return null;
                      case 'keypress':
                        if (
                          !(t.ctrlKey || t.altKey || t.metaKey) ||
                          (t.ctrlKey && t.altKey)
                        ) {
                          if (t.char && 1 < t.char.length) return t.char;
                          if (t.which) return String.fromCharCode(t.which);
                        }
                        return null;
                      case 'compositionend':
                        return er && 'ko' !== t.locale ? null : t.data;
                      default:
                        return null;
                    }
                  })(e, n))
                ? (((t = Gn.getPooled(nr.beforeInput, t, n, r)).data = e),
                  Ln(t))
                : (t = null),
              null === o ? t : null === t ? o : [o, t]
            );
          }
        },
        ur = {
          color: !0,
          date: !0,
          datetime: !0,
          'datetime-local': !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0
        };
      function cr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return 'input' === t ? !!ur[e.type] : 'textarea' === t;
      }
      var sr = {
        change: {
          phasedRegistrationNames: {
            bubbled: 'onChange',
            captured: 'onChangeCapture'
          },
          dependencies: 'blur change click focus input keydown keyup selectionchange'.split(
            ' '
          )
        }
      };
      function fr(e, t, n) {
        return (
          ((e = Bn.getPooled(sr.change, e, t, n)).type = 'change'),
          M(n),
          Ln(e),
          e
        );
      }
      var dr = null,
        pr = null;
      function mr(e) {
        at(e);
      }
      function hr(e) {
        if (ke(On(e))) return e;
      }
      function gr(e, t) {
        if ('change' === e) return t;
      }
      var vr = !1;
      function yr() {
        dr && (dr.detachEvent('onpropertychange', br), (pr = dr = null));
      }
      function br(e) {
        if ('value' === e.propertyName && hr(pr))
          if (((e = fr(pr, e, ut(e))), j)) at(e);
          else {
            j = !0;
            try {
              R(mr, e);
            } finally {
              (j = !1), U();
            }
          }
      }
      function wr(e, t, n) {
        'focus' === e
          ? (yr(), (pr = n), (dr = t).attachEvent('onpropertychange', br))
          : 'blur' === e && yr();
      }
      function kr(e) {
        if ('selectionchange' === e || 'keyup' === e || 'keydown' === e)
          return hr(pr);
      }
      function xr(e, t) {
        if ('click' === e) return hr(t);
      }
      function Er(e, t) {
        if ('input' === e || 'change' === e) return hr(t);
      }
      _ &&
        (vr =
          ct('input') && (!document.documentMode || 9 < document.documentMode));
      var Tr = {
          eventTypes: sr,
          _isInputEventSupported: vr,
          extractEvents: function (e, t, n, r) {
            var o = t ? On(t) : window,
              l = o.nodeName && o.nodeName.toLowerCase();
            if ('select' === l || ('input' === l && 'file' === o.type))
              var i = gr;
            else if (cr(o))
              if (vr) i = Er;
              else {
                i = kr;
                var a = wr;
              }
            else
              (l = o.nodeName) &&
                'input' === l.toLowerCase() &&
                ('checkbox' === o.type || 'radio' === o.type) &&
                (i = xr);
            if (i && (i = i(e, t))) return fr(i, n, r);
            a && a(e, o, t),
              'blur' === e &&
                (e = o._wrapperState) &&
                e.controlled &&
                'number' === o.type &&
                _e(o, 'number', o.value);
          }
        },
        Sr = Bn.extend({ view: null, detail: null }),
        Cr = {
          Alt: 'altKey',
          Control: 'ctrlKey',
          Meta: 'metaKey',
          Shift: 'shiftKey'
        };
      function _r(e) {
        var t = this.nativeEvent;
        return t.getModifierState
          ? t.getModifierState(e)
          : !!(e = Cr[e]) && !!t[e];
      }
      function Pr() {
        return _r;
      }
      var Or = 0,
        Nr = 0,
        zr = !1,
        Mr = !1,
        Fr = Sr.extend({
          screenX: null,
          screenY: null,
          clientX: null,
          clientY: null,
          pageX: null,
          pageY: null,
          ctrlKey: null,
          shiftKey: null,
          altKey: null,
          metaKey: null,
          getModifierState: Pr,
          button: null,
          buttons: null,
          relatedTarget: function (e) {
            return (
              e.relatedTarget ||
              (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
            );
          },
          movementX: function (e) {
            if ('movementX' in e) return e.movementX;
            var t = Or;
            return (
              (Or = e.screenX),
              zr ? ('mousemove' === e.type ? e.screenX - t : 0) : ((zr = !0), 0)
            );
          },
          movementY: function (e) {
            if ('movementY' in e) return e.movementY;
            var t = Nr;
            return (
              (Nr = e.screenY),
              Mr ? ('mousemove' === e.type ? e.screenY - t : 0) : ((Mr = !0), 0)
            );
          }
        }),
        Rr = Fr.extend({
          pointerId: null,
          width: null,
          height: null,
          pressure: null,
          tangentialPressure: null,
          tiltX: null,
          tiltY: null,
          twist: null,
          pointerType: null,
          isPrimary: null
        }),
        Ir = {
          mouseEnter: {
            registrationName: 'onMouseEnter',
            dependencies: ['mouseout', 'mouseover']
          },
          mouseLeave: {
            registrationName: 'onMouseLeave',
            dependencies: ['mouseout', 'mouseover']
          },
          pointerEnter: {
            registrationName: 'onPointerEnter',
            dependencies: ['pointerout', 'pointerover']
          },
          pointerLeave: {
            registrationName: 'onPointerLeave',
            dependencies: ['pointerout', 'pointerover']
          }
        },
        Dr = {
          eventTypes: Ir,
          extractEvents: function (e, t, n, r, o) {
            var l = 'mouseover' === e || 'pointerover' === e,
              i = 'mouseout' === e || 'pointerout' === e;
            if (
              (l && 0 === (32 & o) && (n.relatedTarget || n.fromElement)) ||
              (!i && !l)
            )
              return null;
            ((l =
              r.window === r
                ? r
                : (l = r.ownerDocument)
                ? l.defaultView || l.parentWindow
                : window),
            i)
              ? ((i = t),
                null !==
                  (t = (t = n.relatedTarget || n.toElement) ? _n(t) : null) &&
                  (t !== Ze(t) || (5 !== t.tag && 6 !== t.tag)) &&
                  (t = null))
              : (i = null);
            if (i === t) return null;
            if ('mouseout' === e || 'mouseover' === e)
              var a = Fr,
                u = Ir.mouseLeave,
                c = Ir.mouseEnter,
                s = 'mouse';
            else
              ('pointerout' !== e && 'pointerover' !== e) ||
                ((a = Rr),
                (u = Ir.pointerLeave),
                (c = Ir.pointerEnter),
                (s = 'pointer'));
            if (
              ((e = null == i ? l : On(i)),
              (l = null == t ? l : On(t)),
              ((u = a.getPooled(u, i, n, r)).type = s + 'leave'),
              (u.target = e),
              (u.relatedTarget = l),
              ((n = a.getPooled(c, t, n, r)).type = s + 'enter'),
              (n.target = l),
              (n.relatedTarget = e),
              (s = t),
              (r = i) && s)
            )
              e: {
                for (c = s, i = 0, e = a = r; e; e = zn(e)) i++;
                for (e = 0, t = c; t; t = zn(t)) e++;
                for (; 0 < i - e; ) (a = zn(a)), i--;
                for (; 0 < e - i; ) (c = zn(c)), e--;
                for (; i--; ) {
                  if (a === c || a === c.alternate) break e;
                  (a = zn(a)), (c = zn(c));
                }
                a = null;
              }
            else a = null;
            for (
              c = a, a = [];
              r && r !== c && (null === (i = r.alternate) || i !== c);

            )
              a.push(r), (r = zn(r));
            for (
              r = [];
              s && s !== c && (null === (i = s.alternate) || i !== c);

            )
              r.push(s), (s = zn(s));
            for (s = 0; s < a.length; s++) In(a[s], 'bubbled', u);
            for (s = r.length; 0 < s--; ) In(r[s], 'captured', n);
            return 0 === (64 & o) ? [u] : [u, n];
          }
        };
      var Lr =
          'function' === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              },
        jr = Object.prototype.hasOwnProperty;
      function Ar(e, t) {
        if (Lr(e, t)) return !0;
        if (
          'object' !== typeof e ||
          null === e ||
          'object' !== typeof t ||
          null === t
        )
          return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++)
          if (!jr.call(t, n[r]) || !Lr(e[n[r]], t[n[r]])) return !1;
        return !0;
      }
      var Ur = _ && 'documentMode' in document && 11 >= document.documentMode,
        $r = {
          select: {
            phasedRegistrationNames: {
              bubbled: 'onSelect',
              captured: 'onSelectCapture'
            },
            dependencies: 'blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange'.split(
              ' '
            )
          }
        },
        Vr = null,
        Wr = null,
        Br = null,
        Qr = !1;
      function Hr(e, t) {
        var n =
          t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
        return Qr || null == Vr || Vr !== sn(n)
          ? null
          : ('selectionStart' in (n = Vr) && mn(n)
              ? (n = { start: n.selectionStart, end: n.selectionEnd })
              : (n = {
                  anchorNode: (n = (
                    (n.ownerDocument && n.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: n.anchorOffset,
                  focusNode: n.focusNode,
                  focusOffset: n.focusOffset
                }),
            Br && Ar(Br, n)
              ? null
              : ((Br = n),
                ((e = Bn.getPooled($r.select, Wr, e, t)).type = 'select'),
                (e.target = Vr),
                Ln(e),
                e));
      }
      var Kr = {
          eventTypes: $r,
          extractEvents: function (e, t, n, r, o, l) {
            if (
              !(l = !(o =
                l ||
                (r.window === r
                  ? r.document
                  : 9 === r.nodeType
                  ? r
                  : r.ownerDocument)))
            ) {
              e: {
                (o = Je(o)), (l = S.onSelect);
                for (var i = 0; i < l.length; i++)
                  if (!o.has(l[i])) {
                    o = !1;
                    break e;
                  }
                o = !0;
              }
              l = !o;
            }
            if (l) return null;
            switch (((o = t ? On(t) : window), e)) {
              case 'focus':
                (cr(o) || 'true' === o.contentEditable) &&
                  ((Vr = o), (Wr = t), (Br = null));
                break;
              case 'blur':
                Br = Wr = Vr = null;
                break;
              case 'mousedown':
                Qr = !0;
                break;
              case 'contextmenu':
              case 'mouseup':
              case 'dragend':
                return (Qr = !1), Hr(n, r);
              case 'selectionchange':
                if (Ur) break;
              case 'keydown':
              case 'keyup':
                return Hr(n, r);
            }
            return null;
          }
        },
        qr = Bn.extend({
          animationName: null,
          elapsedTime: null,
          pseudoElement: null
        }),
        Gr = Bn.extend({
          clipboardData: function (e) {
            return 'clipboardData' in e
              ? e.clipboardData
              : window.clipboardData;
          }
        }),
        Xr = Sr.extend({ relatedTarget: null });
      function Yr(e) {
        var t = e.keyCode;
        return (
          'charCode' in e
            ? 0 === (e = e.charCode) && 13 === t && (e = 13)
            : (e = t),
          10 === e && (e = 13),
          32 <= e || 13 === e ? e : 0
        );
      }
      var Jr = {
          Esc: 'Escape',
          Spacebar: ' ',
          Left: 'ArrowLeft',
          Up: 'ArrowUp',
          Right: 'ArrowRight',
          Down: 'ArrowDown',
          Del: 'Delete',
          Win: 'OS',
          Menu: 'ContextMenu',
          Apps: 'ContextMenu',
          Scroll: 'ScrollLock',
          MozPrintableKey: 'Unidentified'
        },
        Zr = {
          8: 'Backspace',
          9: 'Tab',
          12: 'Clear',
          13: 'Enter',
          16: 'Shift',
          17: 'Control',
          18: 'Alt',
          19: 'Pause',
          20: 'CapsLock',
          27: 'Escape',
          32: ' ',
          33: 'PageUp',
          34: 'PageDown',
          35: 'End',
          36: 'Home',
          37: 'ArrowLeft',
          38: 'ArrowUp',
          39: 'ArrowRight',
          40: 'ArrowDown',
          45: 'Insert',
          46: 'Delete',
          112: 'F1',
          113: 'F2',
          114: 'F3',
          115: 'F4',
          116: 'F5',
          117: 'F6',
          118: 'F7',
          119: 'F8',
          120: 'F9',
          121: 'F10',
          122: 'F11',
          123: 'F12',
          144: 'NumLock',
          145: 'ScrollLock',
          224: 'Meta'
        },
        eo = Sr.extend({
          key: function (e) {
            if (e.key) {
              var t = Jr[e.key] || e.key;
              if ('Unidentified' !== t) return t;
            }
            return 'keypress' === e.type
              ? 13 === (e = Yr(e))
                ? 'Enter'
                : String.fromCharCode(e)
              : 'keydown' === e.type || 'keyup' === e.type
              ? Zr[e.keyCode] || 'Unidentified'
              : '';
          },
          location: null,
          ctrlKey: null,
          shiftKey: null,
          altKey: null,
          metaKey: null,
          repeat: null,
          locale: null,
          getModifierState: Pr,
          charCode: function (e) {
            return 'keypress' === e.type ? Yr(e) : 0;
          },
          keyCode: function (e) {
            return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
          },
          which: function (e) {
            return 'keypress' === e.type
              ? Yr(e)
              : 'keydown' === e.type || 'keyup' === e.type
              ? e.keyCode
              : 0;
          }
        }),
        to = Fr.extend({ dataTransfer: null }),
        no = Sr.extend({
          touches: null,
          targetTouches: null,
          changedTouches: null,
          altKey: null,
          metaKey: null,
          ctrlKey: null,
          shiftKey: null,
          getModifierState: Pr
        }),
        ro = Bn.extend({
          propertyName: null,
          elapsedTime: null,
          pseudoElement: null
        }),
        oo = Fr.extend({
          deltaX: function (e) {
            return 'deltaX' in e
              ? e.deltaX
              : 'wheelDeltaX' in e
              ? -e.wheelDeltaX
              : 0;
          },
          deltaY: function (e) {
            return 'deltaY' in e
              ? e.deltaY
              : 'wheelDeltaY' in e
              ? -e.wheelDeltaY
              : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
          },
          deltaZ: null,
          deltaMode: null
        }),
        lo = {
          eventTypes: Lt,
          extractEvents: function (e, t, n, r) {
            var o = jt.get(e);
            if (!o) return null;
            switch (e) {
              case 'keypress':
                if (0 === Yr(n)) return null;
              case 'keydown':
              case 'keyup':
                e = eo;
                break;
              case 'blur':
              case 'focus':
                e = Xr;
                break;
              case 'click':
                if (2 === n.button) return null;
              case 'auxclick':
              case 'dblclick':
              case 'mousedown':
              case 'mousemove':
              case 'mouseup':
              case 'mouseout':
              case 'mouseover':
              case 'contextmenu':
                e = Fr;
                break;
              case 'drag':
              case 'dragend':
              case 'dragenter':
              case 'dragexit':
              case 'dragleave':
              case 'dragover':
              case 'dragstart':
              case 'drop':
                e = to;
                break;
              case 'touchcancel':
              case 'touchend':
              case 'touchmove':
              case 'touchstart':
                e = no;
                break;
              case He:
              case Ke:
              case qe:
                e = qr;
                break;
              case Ge:
                e = ro;
                break;
              case 'scroll':
                e = Sr;
                break;
              case 'wheel':
                e = oo;
                break;
              case 'copy':
              case 'cut':
              case 'paste':
                e = Gr;
                break;
              case 'gotpointercapture':
              case 'lostpointercapture':
              case 'pointercancel':
              case 'pointerdown':
              case 'pointermove':
              case 'pointerout':
              case 'pointerover':
              case 'pointerup':
                e = Rr;
                break;
              default:
                e = Bn;
            }
            return Ln((t = e.getPooled(o, t, n, r))), t;
          }
        };
      if (y) throw Error(i(101));
      (y = Array.prototype.slice.call(
        'ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin'.split(
          ' '
        )
      )),
        w(),
        (m = Nn),
        (h = Pn),
        (g = On),
        C({
          SimpleEventPlugin: lo,
          EnterLeaveEventPlugin: Dr,
          ChangeEventPlugin: Tr,
          SelectEventPlugin: Kr,
          BeforeInputEventPlugin: ar
        });
      var io = [],
        ao = -1;
      function uo(e) {
        0 > ao || ((e.current = io[ao]), (io[ao] = null), ao--);
      }
      function co(e, t) {
        ao++, (io[ao] = e.current), (e.current = t);
      }
      var so = {},
        fo = { current: so },
        po = { current: !1 },
        mo = so;
      function ho(e, t) {
        var n = e.type.contextTypes;
        if (!n) return so;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
          return r.__reactInternalMemoizedMaskedChildContext;
        var o,
          l = {};
        for (o in n) l[o] = t[o];
        return (
          r &&
            (((e =
              e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = l)),
          l
        );
      }
      function go(e) {
        return null !== (e = e.childContextTypes) && void 0 !== e;
      }
      function vo() {
        uo(po), uo(fo);
      }
      function yo(e, t, n) {
        if (fo.current !== so) throw Error(i(168));
        co(fo, t), co(po, n);
      }
      function bo(e, t, n) {
        var r = e.stateNode;
        if (
          ((e = t.childContextTypes), 'function' !== typeof r.getChildContext)
        )
          return n;
        for (var l in (r = r.getChildContext()))
          if (!(l in e)) throw Error(i(108, ge(t) || 'Unknown', l));
        return o({}, n, {}, r);
      }
      function wo(e) {
        return (
          (e =
            ((e = e.stateNode) &&
              e.__reactInternalMemoizedMergedChildContext) ||
            so),
          (mo = fo.current),
          co(fo, e),
          co(po, po.current),
          !0
        );
      }
      function ko(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(i(169));
        n
          ? ((e = bo(e, t, mo)),
            (r.__reactInternalMemoizedMergedChildContext = e),
            uo(po),
            uo(fo),
            co(fo, e))
          : uo(po),
          co(po, n);
      }
      var xo = l.unstable_runWithPriority,
        Eo = l.unstable_scheduleCallback,
        To = l.unstable_cancelCallback,
        So = l.unstable_requestPaint,
        Co = l.unstable_now,
        _o = l.unstable_getCurrentPriorityLevel,
        Po = l.unstable_ImmediatePriority,
        Oo = l.unstable_UserBlockingPriority,
        No = l.unstable_NormalPriority,
        zo = l.unstable_LowPriority,
        Mo = l.unstable_IdlePriority,
        Fo = {},
        Ro = l.unstable_shouldYield,
        Io = void 0 !== So ? So : function () {},
        Do = null,
        Lo = null,
        jo = !1,
        Ao = Co(),
        Uo =
          1e4 > Ao
            ? Co
            : function () {
                return Co() - Ao;
              };
      function $o() {
        switch (_o()) {
          case Po:
            return 99;
          case Oo:
            return 98;
          case No:
            return 97;
          case zo:
            return 96;
          case Mo:
            return 95;
          default:
            throw Error(i(332));
        }
      }
      function Vo(e) {
        switch (e) {
          case 99:
            return Po;
          case 98:
            return Oo;
          case 97:
            return No;
          case 96:
            return zo;
          case 95:
            return Mo;
          default:
            throw Error(i(332));
        }
      }
      function Wo(e, t) {
        return (e = Vo(e)), xo(e, t);
      }
      function Bo(e, t, n) {
        return (e = Vo(e)), Eo(e, t, n);
      }
      function Qo(e) {
        return null === Do ? ((Do = [e]), (Lo = Eo(Po, Ko))) : Do.push(e), Fo;
      }
      function Ho() {
        if (null !== Lo) {
          var e = Lo;
          (Lo = null), To(e);
        }
        Ko();
      }
      function Ko() {
        if (!jo && null !== Do) {
          jo = !0;
          var e = 0;
          try {
            var t = Do;
            Wo(99, function () {
              for (; e < t.length; e++) {
                var n = t[e];
                do {
                  n = n(!0);
                } while (null !== n);
              }
            }),
              (Do = null);
          } catch (n) {
            throw (null !== Do && (Do = Do.slice(e + 1)), Eo(Po, Ho), n);
          } finally {
            jo = !1;
          }
        }
      }
      function qo(e, t, n) {
        return (
          1073741821 - (1 + (((1073741821 - e + t / 10) / (n /= 10)) | 0)) * n
        );
      }
      function Go(e, t) {
        if (e && e.defaultProps)
          for (var n in ((t = o({}, t)), (e = e.defaultProps)))
            void 0 === t[n] && (t[n] = e[n]);
        return t;
      }
      var Xo = { current: null },
        Yo = null,
        Jo = null,
        Zo = null;
      function el() {
        Zo = Jo = Yo = null;
      }
      function tl(e) {
        var t = Xo.current;
        uo(Xo), (e.type._context._currentValue = t);
      }
      function nl(e, t) {
        for (; null !== e; ) {
          var n = e.alternate;
          if (e.childExpirationTime < t)
            (e.childExpirationTime = t),
              null !== n &&
                n.childExpirationTime < t &&
                (n.childExpirationTime = t);
          else {
            if (!(null !== n && n.childExpirationTime < t)) break;
            n.childExpirationTime = t;
          }
          e = e.return;
        }
      }
      function rl(e, t) {
        (Yo = e),
          (Zo = Jo = null),
          null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (e.expirationTime >= t && (Ni = !0), (e.firstContext = null));
      }
      function ol(e, t) {
        if (Zo !== e && !1 !== t && 0 !== t)
          if (
            (('number' === typeof t && 1073741823 !== t) ||
              ((Zo = e), (t = 1073741823)),
            (t = { context: e, observedBits: t, next: null }),
            null === Jo)
          ) {
            if (null === Yo) throw Error(i(308));
            (Jo = t),
              (Yo.dependencies = {
                expirationTime: 0,
                firstContext: t,
                responders: null
              });
          } else Jo = Jo.next = t;
        return e._currentValue;
      }
      var ll = !1;
      function il(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          baseQueue: null,
          shared: { pending: null },
          effects: null
        };
      }
      function al(e, t) {
        (e = e.updateQueue),
          t.updateQueue === e &&
            (t.updateQueue = {
              baseState: e.baseState,
              baseQueue: e.baseQueue,
              shared: e.shared,
              effects: e.effects
            });
      }
      function ul(e, t) {
        return ((e = {
          expirationTime: e,
          suspenseConfig: t,
          tag: 0,
          payload: null,
          callback: null,
          next: null
        }).next = e);
      }
      function cl(e, t) {
        if (null !== (e = e.updateQueue)) {
          var n = (e = e.shared).pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
      }
      function sl(e, t) {
        var n = e.alternate;
        null !== n && al(n, e),
          null === (n = (e = e.updateQueue).baseQueue)
            ? ((e.baseQueue = t.next = t), (t.next = t))
            : ((t.next = n.next), (n.next = t));
      }
      function fl(e, t, n, r) {
        var l = e.updateQueue;
        ll = !1;
        var i = l.baseQueue,
          a = l.shared.pending;
        if (null !== a) {
          if (null !== i) {
            var u = i.next;
            (i.next = a.next), (a.next = u);
          }
          (i = a),
            (l.shared.pending = null),
            null !== (u = e.alternate) &&
              null !== (u = u.updateQueue) &&
              (u.baseQueue = a);
        }
        if (null !== i) {
          u = i.next;
          var c = l.baseState,
            s = 0,
            f = null,
            d = null,
            p = null;
          if (null !== u)
            for (var m = u; ; ) {
              if ((a = m.expirationTime) < r) {
                var h = {
                  expirationTime: m.expirationTime,
                  suspenseConfig: m.suspenseConfig,
                  tag: m.tag,
                  payload: m.payload,
                  callback: m.callback,
                  next: null
                };
                null === p ? ((d = p = h), (f = c)) : (p = p.next = h),
                  a > s && (s = a);
              } else {
                null !== p &&
                  (p = p.next = {
                    expirationTime: 1073741823,
                    suspenseConfig: m.suspenseConfig,
                    tag: m.tag,
                    payload: m.payload,
                    callback: m.callback,
                    next: null
                  }),
                  lu(a, m.suspenseConfig);
                e: {
                  var g = e,
                    v = m;
                  switch (((a = t), (h = n), v.tag)) {
                    case 1:
                      if ('function' === typeof (g = v.payload)) {
                        c = g.call(h, c, a);
                        break e;
                      }
                      c = g;
                      break e;
                    case 3:
                      g.effectTag = (-4097 & g.effectTag) | 64;
                    case 0:
                      if (
                        null ===
                          (a =
                            'function' === typeof (g = v.payload)
                              ? g.call(h, c, a)
                              : g) ||
                        void 0 === a
                      )
                        break e;
                      c = o({}, c, a);
                      break e;
                    case 2:
                      ll = !0;
                  }
                }
                null !== m.callback &&
                  ((e.effectTag |= 32),
                  null === (a = l.effects) ? (l.effects = [m]) : a.push(m));
              }
              if (null === (m = m.next) || m === u) {
                if (null === (a = l.shared.pending)) break;
                (m = i.next = a.next),
                  (a.next = u),
                  (l.baseQueue = i = a),
                  (l.shared.pending = null);
              }
            }
          null === p ? (f = c) : (p.next = d),
            (l.baseState = f),
            (l.baseQueue = p),
            iu(s),
            (e.expirationTime = s),
            (e.memoizedState = c);
        }
      }
      function dl(e, t, n) {
        if (((e = t.effects), (t.effects = null), null !== e))
          for (t = 0; t < e.length; t++) {
            var r = e[t],
              o = r.callback;
            if (null !== o) {
              if (
                ((r.callback = null), (r = o), (o = n), 'function' !== typeof r)
              )
                throw Error(i(191, r));
              r.call(o);
            }
          }
      }
      var pl = X.ReactCurrentBatchConfig,
        ml = new r.Component().refs;
      function hl(e, t, n, r) {
        (n =
          null === (n = n(r, (t = e.memoizedState))) || void 0 === n
            ? t
            : o({}, t, n)),
          (e.memoizedState = n),
          0 === e.expirationTime && (e.updateQueue.baseState = n);
      }
      var gl = {
        isMounted: function (e) {
          return !!(e = e._reactInternalFiber) && Ze(e) === e;
        },
        enqueueSetState: function (e, t, n) {
          e = e._reactInternalFiber;
          var r = Ha(),
            o = pl.suspense;
          ((o = ul((r = Ka(r, e, o)), o)).payload = t),
            void 0 !== n && null !== n && (o.callback = n),
            cl(e, o),
            qa(e, r);
        },
        enqueueReplaceState: function (e, t, n) {
          e = e._reactInternalFiber;
          var r = Ha(),
            o = pl.suspense;
          ((o = ul((r = Ka(r, e, o)), o)).tag = 1),
            (o.payload = t),
            void 0 !== n && null !== n && (o.callback = n),
            cl(e, o),
            qa(e, r);
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternalFiber;
          var n = Ha(),
            r = pl.suspense;
          ((r = ul((n = Ka(n, e, r)), r)).tag = 2),
            void 0 !== t && null !== t && (r.callback = t),
            cl(e, r),
            qa(e, n);
        }
      };
      function vl(e, t, n, r, o, l, i) {
        return 'function' === typeof (e = e.stateNode).shouldComponentUpdate
          ? e.shouldComponentUpdate(r, l, i)
          : !t.prototype ||
              !t.prototype.isPureReactComponent ||
              !Ar(n, r) ||
              !Ar(o, l);
      }
      function yl(e, t, n) {
        var r = !1,
          o = so,
          l = t.contextType;
        return (
          'object' === typeof l && null !== l
            ? (l = ol(l))
            : ((o = go(t) ? mo : fo.current),
              (l = (r = null !== (r = t.contextTypes) && void 0 !== r)
                ? ho(e, o)
                : so)),
          (t = new t(n, l)),
          (e.memoizedState =
            null !== t.state && void 0 !== t.state ? t.state : null),
          (t.updater = gl),
          (e.stateNode = t),
          (t._reactInternalFiber = e),
          r &&
            (((e =
              e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o),
            (e.__reactInternalMemoizedMaskedChildContext = l)),
          t
        );
      }
      function bl(e, t, n, r) {
        (e = t.state),
          'function' === typeof t.componentWillReceiveProps &&
            t.componentWillReceiveProps(n, r),
          'function' === typeof t.UNSAFE_componentWillReceiveProps &&
            t.UNSAFE_componentWillReceiveProps(n, r),
          t.state !== e && gl.enqueueReplaceState(t, t.state, null);
      }
      function wl(e, t, n, r) {
        var o = e.stateNode;
        (o.props = n), (o.state = e.memoizedState), (o.refs = ml), il(e);
        var l = t.contextType;
        'object' === typeof l && null !== l
          ? (o.context = ol(l))
          : ((l = go(t) ? mo : fo.current), (o.context = ho(e, l))),
          fl(e, n, o, r),
          (o.state = e.memoizedState),
          'function' === typeof (l = t.getDerivedStateFromProps) &&
            (hl(e, t, l, n), (o.state = e.memoizedState)),
          'function' === typeof t.getDerivedStateFromProps ||
            'function' === typeof o.getSnapshotBeforeUpdate ||
            ('function' !== typeof o.UNSAFE_componentWillMount &&
              'function' !== typeof o.componentWillMount) ||
            ((t = o.state),
            'function' === typeof o.componentWillMount &&
              o.componentWillMount(),
            'function' === typeof o.UNSAFE_componentWillMount &&
              o.UNSAFE_componentWillMount(),
            t !== o.state && gl.enqueueReplaceState(o, o.state, null),
            fl(e, n, o, r),
            (o.state = e.memoizedState)),
          'function' === typeof o.componentDidMount && (e.effectTag |= 4);
      }
      var kl = Array.isArray;
      function xl(e, t, n) {
        if (
          null !== (e = n.ref) &&
          'function' !== typeof e &&
          'object' !== typeof e
        ) {
          if (n._owner) {
            if ((n = n._owner)) {
              if (1 !== n.tag) throw Error(i(309));
              var r = n.stateNode;
            }
            if (!r) throw Error(i(147, e));
            var o = '' + e;
            return null !== t &&
              null !== t.ref &&
              'function' === typeof t.ref &&
              t.ref._stringRef === o
              ? t.ref
              : (((t = function (e) {
                  var t = r.refs;
                  t === ml && (t = r.refs = {}),
                    null === e ? delete t[o] : (t[o] = e);
                })._stringRef = o),
                t);
          }
          if ('string' !== typeof e) throw Error(i(284));
          if (!n._owner) throw Error(i(290, e));
        }
        return e;
      }
      function El(e, t) {
        if ('textarea' !== e.type)
          throw Error(
            i(
              31,
              '[object Object]' === Object.prototype.toString.call(t)
                ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                : t,
              ''
            )
          );
      }
      function Tl(e) {
        function t(t, n) {
          if (e) {
            var r = t.lastEffect;
            null !== r
              ? ((r.nextEffect = n), (t.lastEffect = n))
              : (t.firstEffect = t.lastEffect = n),
              (n.nextEffect = null),
              (n.effectTag = 8);
          }
        }
        function n(n, r) {
          if (!e) return null;
          for (; null !== r; ) t(n, r), (r = r.sibling);
          return null;
        }
        function r(e, t) {
          for (e = new Map(); null !== t; )
            null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
              (t = t.sibling);
          return e;
        }
        function o(e, t) {
          return ((e = Cu(e, t)).index = 0), (e.sibling = null), e;
        }
        function l(t, n, r) {
          return (
            (t.index = r),
            e
              ? null !== (r = t.alternate)
                ? (r = r.index) < n
                  ? ((t.effectTag = 2), n)
                  : r
                : ((t.effectTag = 2), n)
              : n
          );
        }
        function a(t) {
          return e && null === t.alternate && (t.effectTag = 2), t;
        }
        function u(e, t, n, r) {
          return null === t || 6 !== t.tag
            ? (((t = Ou(n, e.mode, r)).return = e), t)
            : (((t = o(t, n)).return = e), t);
        }
        function c(e, t, n, r) {
          return null !== t && t.elementType === n.type
            ? (((r = o(t, n.props)).ref = xl(e, t, n)), (r.return = e), r)
            : (((r = _u(n.type, n.key, n.props, null, e.mode, r)).ref = xl(
                e,
                t,
                n
              )),
              (r.return = e),
              r);
        }
        function s(e, t, n, r) {
          return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = Nu(n, e.mode, r)).return = e), t)
            : (((t = o(t, n.children || [])).return = e), t);
        }
        function f(e, t, n, r, l) {
          return null === t || 7 !== t.tag
            ? (((t = Pu(n, e.mode, r, l)).return = e), t)
            : (((t = o(t, n)).return = e), t);
        }
        function d(e, t, n) {
          if ('string' === typeof t || 'number' === typeof t)
            return ((t = Ou('' + t, e.mode, n)).return = e), t;
          if ('object' === typeof t && null !== t) {
            switch (t.$$typeof) {
              case ee:
                return (
                  ((n = _u(t.type, t.key, t.props, null, e.mode, n)).ref = xl(
                    e,
                    null,
                    t
                  )),
                  (n.return = e),
                  n
                );
              case te:
                return ((t = Nu(t, e.mode, n)).return = e), t;
            }
            if (kl(t) || he(t))
              return ((t = Pu(t, e.mode, n, null)).return = e), t;
            El(e, t);
          }
          return null;
        }
        function p(e, t, n, r) {
          var o = null !== t ? t.key : null;
          if ('string' === typeof n || 'number' === typeof n)
            return null !== o ? null : u(e, t, '' + n, r);
          if ('object' === typeof n && null !== n) {
            switch (n.$$typeof) {
              case ee:
                return n.key === o
                  ? n.type === ne
                    ? f(e, t, n.props.children, r, o)
                    : c(e, t, n, r)
                  : null;
              case te:
                return n.key === o ? s(e, t, n, r) : null;
            }
            if (kl(n) || he(n)) return null !== o ? null : f(e, t, n, r, null);
            El(e, n);
          }
          return null;
        }
        function m(e, t, n, r, o) {
          if ('string' === typeof r || 'number' === typeof r)
            return u(t, (e = e.get(n) || null), '' + r, o);
          if ('object' === typeof r && null !== r) {
            switch (r.$$typeof) {
              case ee:
                return (
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r.type === ne
                    ? f(t, e, r.props.children, o, r.key)
                    : c(t, e, r, o)
                );
              case te:
                return s(
                  t,
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r,
                  o
                );
            }
            if (kl(r) || he(r)) return f(t, (e = e.get(n) || null), r, o, null);
            El(t, r);
          }
          return null;
        }
        function h(o, i, a, u) {
          for (
            var c = null, s = null, f = i, h = (i = 0), g = null;
            null !== f && h < a.length;
            h++
          ) {
            f.index > h ? ((g = f), (f = null)) : (g = f.sibling);
            var v = p(o, f, a[h], u);
            if (null === v) {
              null === f && (f = g);
              break;
            }
            e && f && null === v.alternate && t(o, f),
              (i = l(v, i, h)),
              null === s ? (c = v) : (s.sibling = v),
              (s = v),
              (f = g);
          }
          if (h === a.length) return n(o, f), c;
          if (null === f) {
            for (; h < a.length; h++)
              null !== (f = d(o, a[h], u)) &&
                ((i = l(f, i, h)),
                null === s ? (c = f) : (s.sibling = f),
                (s = f));
            return c;
          }
          for (f = r(o, f); h < a.length; h++)
            null !== (g = m(f, o, h, a[h], u)) &&
              (e &&
                null !== g.alternate &&
                f.delete(null === g.key ? h : g.key),
              (i = l(g, i, h)),
              null === s ? (c = g) : (s.sibling = g),
              (s = g));
          return (
            e &&
              f.forEach(function (e) {
                return t(o, e);
              }),
            c
          );
        }
        function g(o, a, u, c) {
          var s = he(u);
          if ('function' !== typeof s) throw Error(i(150));
          if (null == (u = s.call(u))) throw Error(i(151));
          for (
            var f = (s = null), h = a, g = (a = 0), v = null, y = u.next();
            null !== h && !y.done;
            g++, y = u.next()
          ) {
            h.index > g ? ((v = h), (h = null)) : (v = h.sibling);
            var b = p(o, h, y.value, c);
            if (null === b) {
              null === h && (h = v);
              break;
            }
            e && h && null === b.alternate && t(o, h),
              (a = l(b, a, g)),
              null === f ? (s = b) : (f.sibling = b),
              (f = b),
              (h = v);
          }
          if (y.done) return n(o, h), s;
          if (null === h) {
            for (; !y.done; g++, y = u.next())
              null !== (y = d(o, y.value, c)) &&
                ((a = l(y, a, g)),
                null === f ? (s = y) : (f.sibling = y),
                (f = y));
            return s;
          }
          for (h = r(o, h); !y.done; g++, y = u.next())
            null !== (y = m(h, o, g, y.value, c)) &&
              (e &&
                null !== y.alternate &&
                h.delete(null === y.key ? g : y.key),
              (a = l(y, a, g)),
              null === f ? (s = y) : (f.sibling = y),
              (f = y));
          return (
            e &&
              h.forEach(function (e) {
                return t(o, e);
              }),
            s
          );
        }
        return function (e, r, l, u) {
          var c =
            'object' === typeof l &&
            null !== l &&
            l.type === ne &&
            null === l.key;
          c && (l = l.props.children);
          var s = 'object' === typeof l && null !== l;
          if (s)
            switch (l.$$typeof) {
              case ee:
                e: {
                  for (s = l.key, c = r; null !== c; ) {
                    if (c.key === s) {
                      switch (c.tag) {
                        case 7:
                          if (l.type === ne) {
                            n(e, c.sibling),
                              ((r = o(c, l.props.children)).return = e),
                              (e = r);
                            break e;
                          }
                          break;
                        default:
                          if (c.elementType === l.type) {
                            n(e, c.sibling),
                              ((r = o(c, l.props)).ref = xl(e, c, l)),
                              (r.return = e),
                              (e = r);
                            break e;
                          }
                      }
                      n(e, c);
                      break;
                    }
                    t(e, c), (c = c.sibling);
                  }
                  l.type === ne
                    ? (((r = Pu(
                        l.props.children,
                        e.mode,
                        u,
                        l.key
                      )).return = e),
                      (e = r))
                    : (((u = _u(
                        l.type,
                        l.key,
                        l.props,
                        null,
                        e.mode,
                        u
                      )).ref = xl(e, r, l)),
                      (u.return = e),
                      (e = u));
                }
                return a(e);
              case te:
                e: {
                  for (c = l.key; null !== r; ) {
                    if (r.key === c) {
                      if (
                        4 === r.tag &&
                        r.stateNode.containerInfo === l.containerInfo &&
                        r.stateNode.implementation === l.implementation
                      ) {
                        n(e, r.sibling),
                          ((r = o(r, l.children || [])).return = e),
                          (e = r);
                        break e;
                      }
                      n(e, r);
                      break;
                    }
                    t(e, r), (r = r.sibling);
                  }
                  ((r = Nu(l, e.mode, u)).return = e), (e = r);
                }
                return a(e);
            }
          if ('string' === typeof l || 'number' === typeof l)
            return (
              (l = '' + l),
              null !== r && 6 === r.tag
                ? (n(e, r.sibling), ((r = o(r, l)).return = e), (e = r))
                : (n(e, r), ((r = Ou(l, e.mode, u)).return = e), (e = r)),
              a(e)
            );
          if (kl(l)) return h(e, r, l, u);
          if (he(l)) return g(e, r, l, u);
          if ((s && El(e, l), 'undefined' === typeof l && !c))
            switch (e.tag) {
              case 1:
              case 0:
                throw (
                  ((e = e.type),
                  Error(i(152, e.displayName || e.name || 'Component')))
                );
            }
          return n(e, r);
        };
      }
      var Sl = Tl(!0),
        Cl = Tl(!1),
        _l = {},
        Pl = { current: _l },
        Ol = { current: _l },
        Nl = { current: _l };
      function zl(e) {
        if (e === _l) throw Error(i(174));
        return e;
      }
      function Ml(e, t) {
        switch ((co(Nl, t), co(Ol, e), co(Pl, _l), (e = t.nodeType))) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Le(null, '');
            break;
          default:
            t = Le(
              (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
              (e = e.tagName)
            );
        }
        uo(Pl), co(Pl, t);
      }
      function Fl() {
        uo(Pl), uo(Ol), uo(Nl);
      }
      function Rl(e) {
        zl(Nl.current);
        var t = zl(Pl.current),
          n = Le(t, e.type);
        t !== n && (co(Ol, e), co(Pl, n));
      }
      function Il(e) {
        Ol.current === e && (uo(Pl), uo(Ol));
      }
      var Dl = { current: 0 };
      function Ll(e) {
        for (var t = e; null !== t; ) {
          if (13 === t.tag) {
            var n = t.memoizedState;
            if (
              null !== n &&
              (null === (n = n.dehydrated) ||
                '$?' === n.data ||
                '$!' === n.data)
            )
              return t;
          } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 !== (64 & t.effectTag)) return t;
          } else if (null !== t.child) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break;
          for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
        return null;
      }
      function jl(e, t) {
        return { responder: e, props: t };
      }
      var Al = X.ReactCurrentDispatcher,
        Ul = X.ReactCurrentBatchConfig,
        $l = 0,
        Vl = null,
        Wl = null,
        Bl = null,
        Ql = !1;
      function Hl() {
        throw Error(i(321));
      }
      function Kl(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
          if (!Lr(e[n], t[n])) return !1;
        return !0;
      }
      function ql(e, t, n, r, o, l) {
        if (
          (($l = l),
          (Vl = t),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.expirationTime = 0),
          (Al.current = null === e || null === e.memoizedState ? vi : yi),
          (e = n(r, o)),
          t.expirationTime === $l)
        ) {
          l = 0;
          do {
            if (((t.expirationTime = 0), !(25 > l))) throw Error(i(301));
            (l += 1),
              (Bl = Wl = null),
              (t.updateQueue = null),
              (Al.current = bi),
              (e = n(r, o));
          } while (t.expirationTime === $l);
        }
        if (
          ((Al.current = gi),
          (t = null !== Wl && null !== Wl.next),
          ($l = 0),
          (Bl = Wl = Vl = null),
          (Ql = !1),
          t)
        )
          throw Error(i(300));
        return e;
      }
      function Gl() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return (
          null === Bl ? (Vl.memoizedState = Bl = e) : (Bl = Bl.next = e), Bl
        );
      }
      function Xl() {
        if (null === Wl) {
          var e = Vl.alternate;
          e = null !== e ? e.memoizedState : null;
        } else e = Wl.next;
        var t = null === Bl ? Vl.memoizedState : Bl.next;
        if (null !== t) (Bl = t), (Wl = e);
        else {
          if (null === e) throw Error(i(310));
          (e = {
            memoizedState: (Wl = e).memoizedState,
            baseState: Wl.baseState,
            baseQueue: Wl.baseQueue,
            queue: Wl.queue,
            next: null
          }),
            null === Bl ? (Vl.memoizedState = Bl = e) : (Bl = Bl.next = e);
        }
        return Bl;
      }
      function Yl(e, t) {
        return 'function' === typeof t ? t(e) : t;
      }
      function Jl(e) {
        var t = Xl(),
          n = t.queue;
        if (null === n) throw Error(i(311));
        n.lastRenderedReducer = e;
        var r = Wl,
          o = r.baseQueue,
          l = n.pending;
        if (null !== l) {
          if (null !== o) {
            var a = o.next;
            (o.next = l.next), (l.next = a);
          }
          (r.baseQueue = o = l), (n.pending = null);
        }
        if (null !== o) {
          (o = o.next), (r = r.baseState);
          var u = (a = l = null),
            c = o;
          do {
            var s = c.expirationTime;
            if (s < $l) {
              var f = {
                expirationTime: c.expirationTime,
                suspenseConfig: c.suspenseConfig,
                action: c.action,
                eagerReducer: c.eagerReducer,
                eagerState: c.eagerState,
                next: null
              };
              null === u ? ((a = u = f), (l = r)) : (u = u.next = f),
                s > Vl.expirationTime && ((Vl.expirationTime = s), iu(s));
            } else
              null !== u &&
                (u = u.next = {
                  expirationTime: 1073741823,
                  suspenseConfig: c.suspenseConfig,
                  action: c.action,
                  eagerReducer: c.eagerReducer,
                  eagerState: c.eagerState,
                  next: null
                }),
                lu(s, c.suspenseConfig),
                (r = c.eagerReducer === e ? c.eagerState : e(r, c.action));
            c = c.next;
          } while (null !== c && c !== o);
          null === u ? (l = r) : (u.next = a),
            Lr(r, t.memoizedState) || (Ni = !0),
            (t.memoizedState = r),
            (t.baseState = l),
            (t.baseQueue = u),
            (n.lastRenderedState = r);
        }
        return [t.memoizedState, n.dispatch];
      }
      function Zl(e) {
        var t = Xl(),
          n = t.queue;
        if (null === n) throw Error(i(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
          o = n.pending,
          l = t.memoizedState;
        if (null !== o) {
          n.pending = null;
          var a = (o = o.next);
          do {
            (l = e(l, a.action)), (a = a.next);
          } while (a !== o);
          Lr(l, t.memoizedState) || (Ni = !0),
            (t.memoizedState = l),
            null === t.baseQueue && (t.baseState = l),
            (n.lastRenderedState = l);
        }
        return [l, r];
      }
      function ei(e) {
        var t = Gl();
        return (
          'function' === typeof e && (e = e()),
          (t.memoizedState = t.baseState = e),
          (e = (e = t.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: Yl,
            lastRenderedState: e
          }).dispatch = hi.bind(null, Vl, e)),
          [t.memoizedState, e]
        );
      }
      function ti(e, t, n, r) {
        return (
          (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
          null === (t = Vl.updateQueue)
            ? ((t = { lastEffect: null }),
              (Vl.updateQueue = t),
              (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
          e
        );
      }
      function ni() {
        return Xl().memoizedState;
      }
      function ri(e, t, n, r) {
        var o = Gl();
        (Vl.effectTag |= e),
          (o.memoizedState = ti(1 | t, n, void 0, void 0 === r ? null : r));
      }
      function oi(e, t, n, r) {
        var o = Xl();
        r = void 0 === r ? null : r;
        var l = void 0;
        if (null !== Wl) {
          var i = Wl.memoizedState;
          if (((l = i.destroy), null !== r && Kl(r, i.deps)))
            return void ti(t, n, l, r);
        }
        (Vl.effectTag |= e), (o.memoizedState = ti(1 | t, n, l, r));
      }
      function li(e, t) {
        return ri(516, 4, e, t);
      }
      function ii(e, t) {
        return oi(516, 4, e, t);
      }
      function ai(e, t) {
        return oi(4, 2, e, t);
      }
      function ui(e, t) {
        return 'function' === typeof t
          ? ((e = e()),
            t(e),
            function () {
              t(null);
            })
          : null !== t && void 0 !== t
          ? ((e = e()),
            (t.current = e),
            function () {
              t.current = null;
            })
          : void 0;
      }
      function ci(e, t, n) {
        return (
          (n = null !== n && void 0 !== n ? n.concat([e]) : null),
          oi(4, 2, ui.bind(null, t, e), n)
        );
      }
      function si() {}
      function fi(e, t) {
        return (Gl().memoizedState = [e, void 0 === t ? null : t]), e;
      }
      function di(e, t) {
        var n = Xl();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && Kl(t, r[1])
          ? r[0]
          : ((n.memoizedState = [e, t]), e);
      }
      function pi(e, t) {
        var n = Xl();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && Kl(t, r[1])
          ? r[0]
          : ((e = e()), (n.memoizedState = [e, t]), e);
      }
      function mi(e, t, n) {
        var r = $o();
        Wo(98 > r ? 98 : r, function () {
          e(!0);
        }),
          Wo(97 < r ? 97 : r, function () {
            var r = Ul.suspense;
            Ul.suspense = void 0 === t ? null : t;
            try {
              e(!1), n();
            } finally {
              Ul.suspense = r;
            }
          });
      }
      function hi(e, t, n) {
        var r = Ha(),
          o = pl.suspense;
        o = {
          expirationTime: (r = Ka(r, e, o)),
          suspenseConfig: o,
          action: n,
          eagerReducer: null,
          eagerState: null,
          next: null
        };
        var l = t.pending;
        if (
          (null === l ? (o.next = o) : ((o.next = l.next), (l.next = o)),
          (t.pending = o),
          (l = e.alternate),
          e === Vl || (null !== l && l === Vl))
        )
          (Ql = !0), (o.expirationTime = $l), (Vl.expirationTime = $l);
        else {
          if (
            0 === e.expirationTime &&
            (null === l || 0 === l.expirationTime) &&
            null !== (l = t.lastRenderedReducer)
          )
            try {
              var i = t.lastRenderedState,
                a = l(i, n);
              if (((o.eagerReducer = l), (o.eagerState = a), Lr(a, i))) return;
            } catch (u) {}
          qa(e, r);
        }
      }
      var gi = {
          readContext: ol,
          useCallback: Hl,
          useContext: Hl,
          useEffect: Hl,
          useImperativeHandle: Hl,
          useLayoutEffect: Hl,
          useMemo: Hl,
          useReducer: Hl,
          useRef: Hl,
          useState: Hl,
          useDebugValue: Hl,
          useResponder: Hl,
          useDeferredValue: Hl,
          useTransition: Hl
        },
        vi = {
          readContext: ol,
          useCallback: fi,
          useContext: ol,
          useEffect: li,
          useImperativeHandle: function (e, t, n) {
            return (
              (n = null !== n && void 0 !== n ? n.concat([e]) : null),
              ri(4, 2, ui.bind(null, t, e), n)
            );
          },
          useLayoutEffect: function (e, t) {
            return ri(4, 2, e, t);
          },
          useMemo: function (e, t) {
            var n = Gl();
            return (
              (t = void 0 === t ? null : t),
              (e = e()),
              (n.memoizedState = [e, t]),
              e
            );
          },
          useReducer: function (e, t, n) {
            var r = Gl();
            return (
              (t = void 0 !== n ? n(t) : t),
              (r.memoizedState = r.baseState = t),
              (e = (e = r.queue = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
              }).dispatch = hi.bind(null, Vl, e)),
              [r.memoizedState, e]
            );
          },
          useRef: function (e) {
            return (e = { current: e }), (Gl().memoizedState = e);
          },
          useState: ei,
          useDebugValue: si,
          useResponder: jl,
          useDeferredValue: function (e, t) {
            var n = ei(e),
              r = n[0],
              o = n[1];
            return (
              li(
                function () {
                  var n = Ul.suspense;
                  Ul.suspense = void 0 === t ? null : t;
                  try {
                    o(e);
                  } finally {
                    Ul.suspense = n;
                  }
                },
                [e, t]
              ),
              r
            );
          },
          useTransition: function (e) {
            var t = ei(!1),
              n = t[0];
            return (t = t[1]), [fi(mi.bind(null, t, e), [t, e]), n];
          }
        },
        yi = {
          readContext: ol,
          useCallback: di,
          useContext: ol,
          useEffect: ii,
          useImperativeHandle: ci,
          useLayoutEffect: ai,
          useMemo: pi,
          useReducer: Jl,
          useRef: ni,
          useState: function () {
            return Jl(Yl);
          },
          useDebugValue: si,
          useResponder: jl,
          useDeferredValue: function (e, t) {
            var n = Jl(Yl),
              r = n[0],
              o = n[1];
            return (
              ii(
                function () {
                  var n = Ul.suspense;
                  Ul.suspense = void 0 === t ? null : t;
                  try {
                    o(e);
                  } finally {
                    Ul.suspense = n;
                  }
                },
                [e, t]
              ),
              r
            );
          },
          useTransition: function (e) {
            var t = Jl(Yl),
              n = t[0];
            return (t = t[1]), [di(mi.bind(null, t, e), [t, e]), n];
          }
        },
        bi = {
          readContext: ol,
          useCallback: di,
          useContext: ol,
          useEffect: ii,
          useImperativeHandle: ci,
          useLayoutEffect: ai,
          useMemo: pi,
          useReducer: Zl,
          useRef: ni,
          useState: function () {
            return Zl(Yl);
          },
          useDebugValue: si,
          useResponder: jl,
          useDeferredValue: function (e, t) {
            var n = Zl(Yl),
              r = n[0],
              o = n[1];
            return (
              ii(
                function () {
                  var n = Ul.suspense;
                  Ul.suspense = void 0 === t ? null : t;
                  try {
                    o(e);
                  } finally {
                    Ul.suspense = n;
                  }
                },
                [e, t]
              ),
              r
            );
          },
          useTransition: function (e) {
            var t = Zl(Yl),
              n = t[0];
            return (t = t[1]), [di(mi.bind(null, t, e), [t, e]), n];
          }
        },
        wi = null,
        ki = null,
        xi = !1;
      function Ei(e, t) {
        var n = Tu(5, null, null, 0);
        (n.elementType = 'DELETED'),
          (n.type = 'DELETED'),
          (n.stateNode = t),
          (n.return = e),
          (n.effectTag = 8),
          null !== e.lastEffect
            ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
            : (e.firstEffect = e.lastEffect = n);
      }
      function Ti(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return (
              null !==
                (t =
                  1 !== t.nodeType ||
                  n.toLowerCase() !== t.nodeName.toLowerCase()
                    ? null
                    : t) && ((e.stateNode = t), !0)
            );
          case 6:
            return (
              null !==
                (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
              ((e.stateNode = t), !0)
            );
          case 13:
          default:
            return !1;
        }
      }
      function Si(e) {
        if (xi) {
          var t = ki;
          if (t) {
            var n = t;
            if (!Ti(e, t)) {
              if (!(t = kn(n.nextSibling)) || !Ti(e, t))
                return (
                  (e.effectTag = (-1025 & e.effectTag) | 2),
                  (xi = !1),
                  void (wi = e)
                );
              Ei(wi, n);
            }
            (wi = e), (ki = kn(t.firstChild));
          } else (e.effectTag = (-1025 & e.effectTag) | 2), (xi = !1), (wi = e);
        }
      }
      function Ci(e) {
        for (
          e = e.return;
          null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

        )
          e = e.return;
        wi = e;
      }
      function _i(e) {
        if (e !== wi) return !1;
        if (!xi) return Ci(e), (xi = !0), !1;
        var t = e.type;
        if (
          5 !== e.tag ||
          ('head' !== t && 'body' !== t && !yn(t, e.memoizedProps))
        )
          for (t = ki; t; ) Ei(e, t), (t = kn(t.nextSibling));
        if ((Ci(e), 13 === e.tag)) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
            throw Error(i(317));
          e: {
            for (e = e.nextSibling, t = 0; e; ) {
              if (8 === e.nodeType) {
                var n = e.data;
                if ('/$' === n) {
                  if (0 === t) {
                    ki = kn(e.nextSibling);
                    break e;
                  }
                  t--;
                } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
              }
              e = e.nextSibling;
            }
            ki = null;
          }
        } else ki = wi ? kn(e.stateNode.nextSibling) : null;
        return !0;
      }
      function Pi() {
        (ki = wi = null), (xi = !1);
      }
      var Oi = X.ReactCurrentOwner,
        Ni = !1;
      function zi(e, t, n, r) {
        t.child = null === e ? Cl(t, null, n, r) : Sl(t, e.child, n, r);
      }
      function Mi(e, t, n, r, o) {
        n = n.render;
        var l = t.ref;
        return (
          rl(t, o),
          (r = ql(e, t, n, r, l, o)),
          null === e || Ni
            ? ((t.effectTag |= 1), zi(e, t, r, o), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.effectTag &= -517),
              e.expirationTime <= o && (e.expirationTime = 0),
              qi(e, t, o))
        );
      }
      function Fi(e, t, n, r, o, l) {
        if (null === e) {
          var i = n.type;
          return 'function' !== typeof i ||
            Su(i) ||
            void 0 !== i.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = _u(n.type, null, r, null, t.mode, l)).ref = t.ref),
              (e.return = t),
              (t.child = e))
            : ((t.tag = 15), (t.type = i), Ri(e, t, i, r, o, l));
        }
        return (
          (i = e.child),
          o < l &&
          ((o = i.memoizedProps),
          (n = null !== (n = n.compare) ? n : Ar)(o, r) && e.ref === t.ref)
            ? qi(e, t, l)
            : ((t.effectTag |= 1),
              ((e = Cu(i, r)).ref = t.ref),
              (e.return = t),
              (t.child = e))
        );
      }
      function Ri(e, t, n, r, o, l) {
        return null !== e &&
          Ar(e.memoizedProps, r) &&
          e.ref === t.ref &&
          ((Ni = !1), o < l)
          ? ((t.expirationTime = e.expirationTime), qi(e, t, l))
          : Di(e, t, n, r, l);
      }
      function Ii(e, t) {
        var n = t.ref;
        ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
          (t.effectTag |= 128);
      }
      function Di(e, t, n, r, o) {
        var l = go(n) ? mo : fo.current;
        return (
          (l = ho(t, l)),
          rl(t, o),
          (n = ql(e, t, n, r, l, o)),
          null === e || Ni
            ? ((t.effectTag |= 1), zi(e, t, n, o), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.effectTag &= -517),
              e.expirationTime <= o && (e.expirationTime = 0),
              qi(e, t, o))
        );
      }
      function Li(e, t, n, r, o) {
        if (go(n)) {
          var l = !0;
          wo(t);
        } else l = !1;
        if ((rl(t, o), null === t.stateNode))
          null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
            yl(t, n, r),
            wl(t, n, r, o),
            (r = !0);
        else if (null === e) {
          var i = t.stateNode,
            a = t.memoizedProps;
          i.props = a;
          var u = i.context,
            c = n.contextType;
          'object' === typeof c && null !== c
            ? (c = ol(c))
            : (c = ho(t, (c = go(n) ? mo : fo.current)));
          var s = n.getDerivedStateFromProps,
            f =
              'function' === typeof s ||
              'function' === typeof i.getSnapshotBeforeUpdate;
          f ||
            ('function' !== typeof i.UNSAFE_componentWillReceiveProps &&
              'function' !== typeof i.componentWillReceiveProps) ||
            ((a !== r || u !== c) && bl(t, i, r, c)),
            (ll = !1);
          var d = t.memoizedState;
          (i.state = d),
            fl(t, r, i, o),
            (u = t.memoizedState),
            a !== r || d !== u || po.current || ll
              ? ('function' === typeof s &&
                  (hl(t, n, s, r), (u = t.memoizedState)),
                (a = ll || vl(t, n, a, r, d, u, c))
                  ? (f ||
                      ('function' !== typeof i.UNSAFE_componentWillMount &&
                        'function' !== typeof i.componentWillMount) ||
                      ('function' === typeof i.componentWillMount &&
                        i.componentWillMount(),
                      'function' === typeof i.UNSAFE_componentWillMount &&
                        i.UNSAFE_componentWillMount()),
                    'function' === typeof i.componentDidMount &&
                      (t.effectTag |= 4))
                  : ('function' === typeof i.componentDidMount &&
                      (t.effectTag |= 4),
                    (t.memoizedProps = r),
                    (t.memoizedState = u)),
                (i.props = r),
                (i.state = u),
                (i.context = c),
                (r = a))
              : ('function' === typeof i.componentDidMount &&
                  (t.effectTag |= 4),
                (r = !1));
        } else
          (i = t.stateNode),
            al(e, t),
            (a = t.memoizedProps),
            (i.props = t.type === t.elementType ? a : Go(t.type, a)),
            (u = i.context),
            'object' === typeof (c = n.contextType) && null !== c
              ? (c = ol(c))
              : (c = ho(t, (c = go(n) ? mo : fo.current))),
            (f =
              'function' === typeof (s = n.getDerivedStateFromProps) ||
              'function' === typeof i.getSnapshotBeforeUpdate) ||
              ('function' !== typeof i.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof i.componentWillReceiveProps) ||
              ((a !== r || u !== c) && bl(t, i, r, c)),
            (ll = !1),
            (u = t.memoizedState),
            (i.state = u),
            fl(t, r, i, o),
            (d = t.memoizedState),
            a !== r || u !== d || po.current || ll
              ? ('function' === typeof s &&
                  (hl(t, n, s, r), (d = t.memoizedState)),
                (s = ll || vl(t, n, a, r, u, d, c))
                  ? (f ||
                      ('function' !== typeof i.UNSAFE_componentWillUpdate &&
                        'function' !== typeof i.componentWillUpdate) ||
                      ('function' === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, d, c),
                      'function' === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, d, c)),
                    'function' === typeof i.componentDidUpdate &&
                      (t.effectTag |= 4),
                    'function' === typeof i.getSnapshotBeforeUpdate &&
                      (t.effectTag |= 256))
                  : ('function' !== typeof i.componentDidUpdate ||
                      (a === e.memoizedProps && u === e.memoizedState) ||
                      (t.effectTag |= 4),
                    'function' !== typeof i.getSnapshotBeforeUpdate ||
                      (a === e.memoizedProps && u === e.memoizedState) ||
                      (t.effectTag |= 256),
                    (t.memoizedProps = r),
                    (t.memoizedState = d)),
                (i.props = r),
                (i.state = d),
                (i.context = c),
                (r = s))
              : ('function' !== typeof i.componentDidUpdate ||
                  (a === e.memoizedProps && u === e.memoizedState) ||
                  (t.effectTag |= 4),
                'function' !== typeof i.getSnapshotBeforeUpdate ||
                  (a === e.memoizedProps && u === e.memoizedState) ||
                  (t.effectTag |= 256),
                (r = !1));
        return ji(e, t, n, r, l, o);
      }
      function ji(e, t, n, r, o, l) {
        Ii(e, t);
        var i = 0 !== (64 & t.effectTag);
        if (!r && !i) return o && ko(t, n, !1), qi(e, t, l);
        (r = t.stateNode), (Oi.current = t);
        var a =
          i && 'function' !== typeof n.getDerivedStateFromError
            ? null
            : r.render();
        return (
          (t.effectTag |= 1),
          null !== e && i
            ? ((t.child = Sl(t, e.child, null, l)),
              (t.child = Sl(t, null, a, l)))
            : zi(e, t, a, l),
          (t.memoizedState = r.state),
          o && ko(t, n, !0),
          t.child
        );
      }
      function Ai(e) {
        var t = e.stateNode;
        t.pendingContext
          ? yo(0, t.pendingContext, t.pendingContext !== t.context)
          : t.context && yo(0, t.context, !1),
          Ml(e, t.containerInfo);
      }
      var Ui,
        $i,
        Vi,
        Wi = { dehydrated: null, retryTime: 0 };
      function Bi(e, t, n) {
        var r,
          o = t.mode,
          l = t.pendingProps,
          i = Dl.current,
          a = !1;
        if (
          ((r = 0 !== (64 & t.effectTag)) ||
            (r = 0 !== (2 & i) && (null === e || null !== e.memoizedState)),
          r
            ? ((a = !0), (t.effectTag &= -65))
            : (null !== e && null === e.memoizedState) ||
              void 0 === l.fallback ||
              !0 === l.unstable_avoidThisFallback ||
              (i |= 1),
          co(Dl, 1 & i),
          null === e)
        ) {
          if ((void 0 !== l.fallback && Si(t), a)) {
            if (
              ((a = l.fallback),
              ((l = Pu(null, o, 0, null)).return = t),
              0 === (2 & t.mode))
            )
              for (
                e = null !== t.memoizedState ? t.child.child : t.child,
                  l.child = e;
                null !== e;

              )
                (e.return = l), (e = e.sibling);
            return (
              ((n = Pu(a, o, n, null)).return = t),
              (l.sibling = n),
              (t.memoizedState = Wi),
              (t.child = l),
              n
            );
          }
          return (
            (o = l.children),
            (t.memoizedState = null),
            (t.child = Cl(t, null, o, n))
          );
        }
        if (null !== e.memoizedState) {
          if (((o = (e = e.child).sibling), a)) {
            if (
              ((l = l.fallback),
              ((n = Cu(e, e.pendingProps)).return = t),
              0 === (2 & t.mode) &&
                (a = null !== t.memoizedState ? t.child.child : t.child) !==
                  e.child)
            )
              for (n.child = a; null !== a; ) (a.return = n), (a = a.sibling);
            return (
              ((o = Cu(o, l)).return = t),
              (n.sibling = o),
              (n.childExpirationTime = 0),
              (t.memoizedState = Wi),
              (t.child = n),
              o
            );
          }
          return (
            (n = Sl(t, e.child, l.children, n)),
            (t.memoizedState = null),
            (t.child = n)
          );
        }
        if (((e = e.child), a)) {
          if (
            ((a = l.fallback),
            ((l = Pu(null, o, 0, null)).return = t),
            (l.child = e),
            null !== e && (e.return = l),
            0 === (2 & t.mode))
          )
            for (
              e = null !== t.memoizedState ? t.child.child : t.child,
                l.child = e;
              null !== e;

            )
              (e.return = l), (e = e.sibling);
          return (
            ((n = Pu(a, o, n, null)).return = t),
            (l.sibling = n),
            (n.effectTag |= 2),
            (l.childExpirationTime = 0),
            (t.memoizedState = Wi),
            (t.child = l),
            n
          );
        }
        return (t.memoizedState = null), (t.child = Sl(t, e, l.children, n));
      }
      function Qi(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate;
        null !== n && n.expirationTime < t && (n.expirationTime = t),
          nl(e.return, t);
      }
      function Hi(e, t, n, r, o, l) {
        var i = e.memoizedState;
        null === i
          ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailExpiration: 0,
              tailMode: o,
              lastEffect: l
            })
          : ((i.isBackwards = t),
            (i.rendering = null),
            (i.renderingStartTime = 0),
            (i.last = r),
            (i.tail = n),
            (i.tailExpiration = 0),
            (i.tailMode = o),
            (i.lastEffect = l));
      }
      function Ki(e, t, n) {
        var r = t.pendingProps,
          o = r.revealOrder,
          l = r.tail;
        if ((zi(e, t, r.children, n), 0 !== (2 & (r = Dl.current))))
          (r = (1 & r) | 2), (t.effectTag |= 64);
        else {
          if (null !== e && 0 !== (64 & e.effectTag))
            e: for (e = t.child; null !== e; ) {
              if (13 === e.tag) null !== e.memoizedState && Qi(e, n);
              else if (19 === e.tag) Qi(e, n);
              else if (null !== e.child) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break e;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === t) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          r &= 1;
        }
        if ((co(Dl, r), 0 === (2 & t.mode))) t.memoizedState = null;
        else
          switch (o) {
            case 'forwards':
              for (n = t.child, o = null; null !== n; )
                null !== (e = n.alternate) && null === Ll(e) && (o = n),
                  (n = n.sibling);
              null === (n = o)
                ? ((o = t.child), (t.child = null))
                : ((o = n.sibling), (n.sibling = null)),
                Hi(t, !1, o, n, l, t.lastEffect);
              break;
            case 'backwards':
              for (n = null, o = t.child, t.child = null; null !== o; ) {
                if (null !== (e = o.alternate) && null === Ll(e)) {
                  t.child = o;
                  break;
                }
                (e = o.sibling), (o.sibling = n), (n = o), (o = e);
              }
              Hi(t, !0, n, null, l, t.lastEffect);
              break;
            case 'together':
              Hi(t, !1, null, null, void 0, t.lastEffect);
              break;
            default:
              t.memoizedState = null;
          }
        return t.child;
      }
      function qi(e, t, n) {
        null !== e && (t.dependencies = e.dependencies);
        var r = t.expirationTime;
        if ((0 !== r && iu(r), t.childExpirationTime < n)) return null;
        if (null !== e && t.child !== e.child) throw Error(i(153));
        if (null !== t.child) {
          for (
            n = Cu((e = t.child), e.pendingProps), t.child = n, n.return = t;
            null !== e.sibling;

          )
            (e = e.sibling),
              ((n = n.sibling = Cu(e, e.pendingProps)).return = t);
          n.sibling = null;
        }
        return t.child;
      }
      function Gi(e, t) {
        switch (e.tailMode) {
          case 'hidden':
            t = e.tail;
            for (var n = null; null !== t; )
              null !== t.alternate && (n = t), (t = t.sibling);
            null === n ? (e.tail = null) : (n.sibling = null);
            break;
          case 'collapsed':
            n = e.tail;
            for (var r = null; null !== n; )
              null !== n.alternate && (r = n), (n = n.sibling);
            null === r
              ? t || null === e.tail
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
      }
      function Xi(e, t, n) {
        var r = t.pendingProps;
        switch (t.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return null;
          case 1:
            return go(t.type) && vo(), null;
          case 3:
            return (
              Fl(),
              uo(po),
              uo(fo),
              (n = t.stateNode).pendingContext &&
                ((n.context = n.pendingContext), (n.pendingContext = null)),
              (null !== e && null !== e.child) || !_i(t) || (t.effectTag |= 4),
              null
            );
          case 5:
            Il(t), (n = zl(Nl.current));
            var l = t.type;
            if (null !== e && null != t.stateNode)
              $i(e, t, l, r, n), e.ref !== t.ref && (t.effectTag |= 128);
            else {
              if (!r) {
                if (null === t.stateNode) throw Error(i(166));
                return null;
              }
              if (((e = zl(Pl.current)), _i(t))) {
                (r = t.stateNode), (l = t.type);
                var a = t.memoizedProps;
                switch (((r[Tn] = t), (r[Sn] = a), l)) {
                  case 'iframe':
                  case 'object':
                  case 'embed':
                    Kt('load', r);
                    break;
                  case 'video':
                  case 'audio':
                    for (e = 0; e < Xe.length; e++) Kt(Xe[e], r);
                    break;
                  case 'source':
                    Kt('error', r);
                    break;
                  case 'img':
                  case 'image':
                  case 'link':
                    Kt('error', r), Kt('load', r);
                    break;
                  case 'form':
                    Kt('reset', r), Kt('submit', r);
                    break;
                  case 'details':
                    Kt('toggle', r);
                    break;
                  case 'input':
                    Ee(r, a), Kt('invalid', r), un(n, 'onChange');
                    break;
                  case 'select':
                    (r._wrapperState = { wasMultiple: !!a.multiple }),
                      Kt('invalid', r),
                      un(n, 'onChange');
                    break;
                  case 'textarea':
                    ze(r, a), Kt('invalid', r), un(n, 'onChange');
                }
                for (var u in (on(l, a), (e = null), a))
                  if (a.hasOwnProperty(u)) {
                    var c = a[u];
                    'children' === u
                      ? 'string' === typeof c
                        ? r.textContent !== c && (e = ['children', c])
                        : 'number' === typeof c &&
                          r.textContent !== '' + c &&
                          (e = ['children', '' + c])
                      : T.hasOwnProperty(u) && null != c && un(n, u);
                  }
                switch (l) {
                  case 'input':
                    we(r), Ce(r, a, !0);
                    break;
                  case 'textarea':
                    we(r), Fe(r);
                    break;
                  case 'select':
                  case 'option':
                    break;
                  default:
                    'function' === typeof a.onClick && (r.onclick = cn);
                }
                (n = e), (t.updateQueue = n), null !== n && (t.effectTag |= 4);
              } else {
                switch (
                  ((u = 9 === n.nodeType ? n : n.ownerDocument),
                  e === an && (e = De(l)),
                  e === an
                    ? 'script' === l
                      ? (((e = u.createElement('div')).innerHTML =
                          '<script></script>'),
                        (e = e.removeChild(e.firstChild)))
                      : 'string' === typeof r.is
                      ? (e = u.createElement(l, { is: r.is }))
                      : ((e = u.createElement(l)),
                        'select' === l &&
                          ((u = e),
                          r.multiple
                            ? (u.multiple = !0)
                            : r.size && (u.size = r.size)))
                    : (e = u.createElementNS(e, l)),
                  (e[Tn] = t),
                  (e[Sn] = r),
                  Ui(e, t),
                  (t.stateNode = e),
                  (u = ln(l, r)),
                  l)
                ) {
                  case 'iframe':
                  case 'object':
                  case 'embed':
                    Kt('load', e), (c = r);
                    break;
                  case 'video':
                  case 'audio':
                    for (c = 0; c < Xe.length; c++) Kt(Xe[c], e);
                    c = r;
                    break;
                  case 'source':
                    Kt('error', e), (c = r);
                    break;
                  case 'img':
                  case 'image':
                  case 'link':
                    Kt('error', e), Kt('load', e), (c = r);
                    break;
                  case 'form':
                    Kt('reset', e), Kt('submit', e), (c = r);
                    break;
                  case 'details':
                    Kt('toggle', e), (c = r);
                    break;
                  case 'input':
                    Ee(e, r),
                      (c = xe(e, r)),
                      Kt('invalid', e),
                      un(n, 'onChange');
                    break;
                  case 'option':
                    c = Pe(e, r);
                    break;
                  case 'select':
                    (e._wrapperState = { wasMultiple: !!r.multiple }),
                      (c = o({}, r, { value: void 0 })),
                      Kt('invalid', e),
                      un(n, 'onChange');
                    break;
                  case 'textarea':
                    ze(e, r),
                      (c = Ne(e, r)),
                      Kt('invalid', e),
                      un(n, 'onChange');
                    break;
                  default:
                    c = r;
                }
                on(l, c);
                var s = c;
                for (a in s)
                  if (s.hasOwnProperty(a)) {
                    var f = s[a];
                    'style' === a
                      ? nn(e, f)
                      : 'dangerouslySetInnerHTML' === a
                      ? null != (f = f ? f.__html : void 0) && Ae(e, f)
                      : 'children' === a
                      ? 'string' === typeof f
                        ? ('textarea' !== l || '' !== f) && Ue(e, f)
                        : 'number' === typeof f && Ue(e, '' + f)
                      : 'suppressContentEditableWarning' !== a &&
                        'suppressHydrationWarning' !== a &&
                        'autoFocus' !== a &&
                        (T.hasOwnProperty(a)
                          ? null != f && un(n, a)
                          : null != f && Y(e, a, f, u));
                  }
                switch (l) {
                  case 'input':
                    we(e), Ce(e, r, !1);
                    break;
                  case 'textarea':
                    we(e), Fe(e);
                    break;
                  case 'option':
                    null != r.value &&
                      e.setAttribute('value', '' + ye(r.value));
                    break;
                  case 'select':
                    (e.multiple = !!r.multiple),
                      null != (n = r.value)
                        ? Oe(e, !!r.multiple, n, !1)
                        : null != r.defaultValue &&
                          Oe(e, !!r.multiple, r.defaultValue, !0);
                    break;
                  default:
                    'function' === typeof c.onClick && (e.onclick = cn);
                }
                vn(l, r) && (t.effectTag |= 4);
              }
              null !== t.ref && (t.effectTag |= 128);
            }
            return null;
          case 6:
            if (e && null != t.stateNode) Vi(0, t, e.memoizedProps, r);
            else {
              if ('string' !== typeof r && null === t.stateNode)
                throw Error(i(166));
              (n = zl(Nl.current)),
                zl(Pl.current),
                _i(t)
                  ? ((n = t.stateNode),
                    (r = t.memoizedProps),
                    (n[Tn] = t),
                    n.nodeValue !== r && (t.effectTag |= 4))
                  : (((n = (9 === n.nodeType
                      ? n
                      : n.ownerDocument
                    ).createTextNode(r))[Tn] = t),
                    (t.stateNode = n));
            }
            return null;
          case 13:
            return (
              uo(Dl),
              (r = t.memoizedState),
              0 !== (64 & t.effectTag)
                ? ((t.expirationTime = n), t)
                : ((n = null !== r),
                  (r = !1),
                  null === e
                    ? void 0 !== t.memoizedProps.fallback && _i(t)
                    : ((r = null !== (l = e.memoizedState)),
                      n ||
                        null === l ||
                        (null !== (l = e.child.sibling) &&
                          (null !== (a = t.firstEffect)
                            ? ((t.firstEffect = l), (l.nextEffect = a))
                            : ((t.firstEffect = t.lastEffect = l),
                              (l.nextEffect = null)),
                          (l.effectTag = 8)))),
                  n &&
                    !r &&
                    0 !== (2 & t.mode) &&
                    ((null === e &&
                      !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                    0 !== (1 & Dl.current)
                      ? _a === wa && (_a = ka)
                      : ((_a !== wa && _a !== ka) || (_a = xa),
                        0 !== Ma && null !== Ta && (Fu(Ta, Ca), Ru(Ta, Ma)))),
                  (n || r) && (t.effectTag |= 4),
                  null)
            );
          case 4:
            return Fl(), null;
          case 10:
            return tl(t), null;
          case 17:
            return go(t.type) && vo(), null;
          case 19:
            if ((uo(Dl), null === (r = t.memoizedState))) return null;
            if (((l = 0 !== (64 & t.effectTag)), null === (a = r.rendering))) {
              if (l) Gi(r, !1);
              else if (_a !== wa || (null !== e && 0 !== (64 & e.effectTag)))
                for (a = t.child; null !== a; ) {
                  if (null !== (e = Ll(a))) {
                    for (
                      t.effectTag |= 64,
                        Gi(r, !1),
                        null !== (l = e.updateQueue) &&
                          ((t.updateQueue = l), (t.effectTag |= 4)),
                        null === r.lastEffect && (t.firstEffect = null),
                        t.lastEffect = r.lastEffect,
                        r = t.child;
                      null !== r;

                    )
                      (a = n),
                        ((l = r).effectTag &= 2),
                        (l.nextEffect = null),
                        (l.firstEffect = null),
                        (l.lastEffect = null),
                        null === (e = l.alternate)
                          ? ((l.childExpirationTime = 0),
                            (l.expirationTime = a),
                            (l.child = null),
                            (l.memoizedProps = null),
                            (l.memoizedState = null),
                            (l.updateQueue = null),
                            (l.dependencies = null))
                          : ((l.childExpirationTime = e.childExpirationTime),
                            (l.expirationTime = e.expirationTime),
                            (l.child = e.child),
                            (l.memoizedProps = e.memoizedProps),
                            (l.memoizedState = e.memoizedState),
                            (l.updateQueue = e.updateQueue),
                            (a = e.dependencies),
                            (l.dependencies =
                              null === a
                                ? null
                                : {
                                    expirationTime: a.expirationTime,
                                    firstContext: a.firstContext,
                                    responders: a.responders
                                  })),
                        (r = r.sibling);
                    return co(Dl, (1 & Dl.current) | 2), t.child;
                  }
                  a = a.sibling;
                }
            } else {
              if (!l)
                if (null !== (e = Ll(a))) {
                  if (
                    ((t.effectTag |= 64),
                    (l = !0),
                    null !== (n = e.updateQueue) &&
                      ((t.updateQueue = n), (t.effectTag |= 4)),
                    Gi(r, !0),
                    null === r.tail && 'hidden' === r.tailMode && !a.alternate)
                  )
                    return (
                      null !== (t = t.lastEffect = r.lastEffect) &&
                        (t.nextEffect = null),
                      null
                    );
                } else
                  2 * Uo() - r.renderingStartTime > r.tailExpiration &&
                    1 < n &&
                    ((t.effectTag |= 64),
                    (l = !0),
                    Gi(r, !1),
                    (t.expirationTime = t.childExpirationTime = n - 1));
              r.isBackwards
                ? ((a.sibling = t.child), (t.child = a))
                : (null !== (n = r.last) ? (n.sibling = a) : (t.child = a),
                  (r.last = a));
            }
            return null !== r.tail
              ? (0 === r.tailExpiration && (r.tailExpiration = Uo() + 500),
                (n = r.tail),
                (r.rendering = n),
                (r.tail = n.sibling),
                (r.lastEffect = t.lastEffect),
                (r.renderingStartTime = Uo()),
                (n.sibling = null),
                (t = Dl.current),
                co(Dl, l ? (1 & t) | 2 : 1 & t),
                n)
              : null;
        }
        throw Error(i(156, t.tag));
      }
      function Yi(e) {
        switch (e.tag) {
          case 1:
            go(e.type) && vo();
            var t = e.effectTag;
            return 4096 & t ? ((e.effectTag = (-4097 & t) | 64), e) : null;
          case 3:
            if ((Fl(), uo(po), uo(fo), 0 !== (64 & (t = e.effectTag))))
              throw Error(i(285));
            return (e.effectTag = (-4097 & t) | 64), e;
          case 5:
            return Il(e), null;
          case 13:
            return (
              uo(Dl),
              4096 & (t = e.effectTag)
                ? ((e.effectTag = (-4097 & t) | 64), e)
                : null
            );
          case 19:
            return uo(Dl), null;
          case 4:
            return Fl(), null;
          case 10:
            return tl(e), null;
          default:
            return null;
        }
      }
      function Ji(e, t) {
        return { value: e, source: t, stack: ve(t) };
      }
      (Ui = function (e, t) {
        for (var n = t.child; null !== n; ) {
          if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
          else if (4 !== n.tag && null !== n.child) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === t) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === t) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }),
        ($i = function (e, t, n, r, l) {
          var i = e.memoizedProps;
          if (i !== r) {
            var a,
              u,
              c = t.stateNode;
            switch ((zl(Pl.current), (e = null), n)) {
              case 'input':
                (i = xe(c, i)), (r = xe(c, r)), (e = []);
                break;
              case 'option':
                (i = Pe(c, i)), (r = Pe(c, r)), (e = []);
                break;
              case 'select':
                (i = o({}, i, { value: void 0 })),
                  (r = o({}, r, { value: void 0 })),
                  (e = []);
                break;
              case 'textarea':
                (i = Ne(c, i)), (r = Ne(c, r)), (e = []);
                break;
              default:
                'function' !== typeof i.onClick &&
                  'function' === typeof r.onClick &&
                  (c.onclick = cn);
            }
            for (a in (on(n, r), (n = null), i))
              if (!r.hasOwnProperty(a) && i.hasOwnProperty(a) && null != i[a])
                if ('style' === a)
                  for (u in (c = i[a]))
                    c.hasOwnProperty(u) && (n || (n = {}), (n[u] = ''));
                else
                  'dangerouslySetInnerHTML' !== a &&
                    'children' !== a &&
                    'suppressContentEditableWarning' !== a &&
                    'suppressHydrationWarning' !== a &&
                    'autoFocus' !== a &&
                    (T.hasOwnProperty(a)
                      ? e || (e = [])
                      : (e = e || []).push(a, null));
            for (a in r) {
              var s = r[a];
              if (
                ((c = null != i ? i[a] : void 0),
                r.hasOwnProperty(a) && s !== c && (null != s || null != c))
              )
                if ('style' === a)
                  if (c) {
                    for (u in c)
                      !c.hasOwnProperty(u) ||
                        (s && s.hasOwnProperty(u)) ||
                        (n || (n = {}), (n[u] = ''));
                    for (u in s)
                      s.hasOwnProperty(u) &&
                        c[u] !== s[u] &&
                        (n || (n = {}), (n[u] = s[u]));
                  } else n || (e || (e = []), e.push(a, n)), (n = s);
                else
                  'dangerouslySetInnerHTML' === a
                    ? ((s = s ? s.__html : void 0),
                      (c = c ? c.__html : void 0),
                      null != s && c !== s && (e = e || []).push(a, s))
                    : 'children' === a
                    ? c === s ||
                      ('string' !== typeof s && 'number' !== typeof s) ||
                      (e = e || []).push(a, '' + s)
                    : 'suppressContentEditableWarning' !== a &&
                      'suppressHydrationWarning' !== a &&
                      (T.hasOwnProperty(a)
                        ? (null != s && un(l, a), e || c === s || (e = []))
                        : (e = e || []).push(a, s));
            }
            n && (e = e || []).push('style', n),
              (l = e),
              (t.updateQueue = l) && (t.effectTag |= 4);
          }
        }),
        (Vi = function (e, t, n, r) {
          n !== r && (t.effectTag |= 4);
        });
      var Zi = 'function' === typeof WeakSet ? WeakSet : Set;
      function ea(e, t) {
        var n = t.source,
          r = t.stack;
        null === r && null !== n && (r = ve(n)),
          null !== n && ge(n.type),
          (t = t.value),
          null !== e && 1 === e.tag && ge(e.type);
        try {
          console.error(t);
        } catch (o) {
          setTimeout(function () {
            throw o;
          });
        }
      }
      function ta(e) {
        var t = e.ref;
        if (null !== t)
          if ('function' === typeof t)
            try {
              t(null);
            } catch (n) {
              yu(e, n);
            }
          else t.current = null;
      }
      function na(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            return;
          case 1:
            if (256 & t.effectTag && null !== e) {
              var n = e.memoizedProps,
                r = e.memoizedState;
              (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                t.elementType === t.type ? n : Go(t.type, n),
                r
              )),
                (e.__reactInternalSnapshotBeforeUpdate = t);
            }
            return;
          case 3:
          case 5:
          case 6:
          case 4:
          case 17:
            return;
        }
        throw Error(i(163));
      }
      function ra(e, t) {
        if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
          var n = (t = t.next);
          do {
            if ((n.tag & e) === e) {
              var r = n.destroy;
              (n.destroy = void 0), void 0 !== r && r();
            }
            n = n.next;
          } while (n !== t);
        }
      }
      function oa(e, t) {
        if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
          var n = (t = t.next);
          do {
            if ((n.tag & e) === e) {
              var r = n.create;
              n.destroy = r();
            }
            n = n.next;
          } while (n !== t);
        }
      }
      function la(e, t, n) {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            return void oa(3, n);
          case 1:
            if (((e = n.stateNode), 4 & n.effectTag))
              if (null === t) e.componentDidMount();
              else {
                var r =
                  n.elementType === n.type
                    ? t.memoizedProps
                    : Go(n.type, t.memoizedProps);
                e.componentDidUpdate(
                  r,
                  t.memoizedState,
                  e.__reactInternalSnapshotBeforeUpdate
                );
              }
            return void (null !== (t = n.updateQueue) && dl(n, t, e));
          case 3:
            if (null !== (t = n.updateQueue)) {
              if (((e = null), null !== n.child))
                switch (n.child.tag) {
                  case 5:
                    e = n.child.stateNode;
                    break;
                  case 1:
                    e = n.child.stateNode;
                }
              dl(n, t, e);
            }
            return;
          case 5:
            return (
              (e = n.stateNode),
              void (
                null === t &&
                4 & n.effectTag &&
                vn(n.type, n.memoizedProps) &&
                e.focus()
              )
            );
          case 6:
          case 4:
          case 12:
            return;
          case 13:
            return void (
              null === n.memoizedState &&
              ((n = n.alternate),
              null !== n &&
                ((n = n.memoizedState),
                null !== n && ((n = n.dehydrated), null !== n && Dt(n))))
            );
          case 19:
          case 17:
          case 20:
          case 21:
            return;
        }
        throw Error(i(163));
      }
      function ia(e, t, n) {
        switch (('function' === typeof xu && xu(t), t.tag)) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
              var r = e.next;
              Wo(97 < n ? 97 : n, function () {
                var e = r;
                do {
                  var n = e.destroy;
                  if (void 0 !== n) {
                    var o = t;
                    try {
                      n();
                    } catch (l) {
                      yu(o, l);
                    }
                  }
                  e = e.next;
                } while (e !== r);
              });
            }
            break;
          case 1:
            ta(t),
              'function' === typeof (n = t.stateNode).componentWillUnmount &&
                (function (e, t) {
                  try {
                    (t.props = e.memoizedProps),
                      (t.state = e.memoizedState),
                      t.componentWillUnmount();
                  } catch (n) {
                    yu(e, n);
                  }
                })(t, n);
            break;
          case 5:
            ta(t);
            break;
          case 4:
            sa(e, t, n);
        }
      }
      function aa(e) {
        var t = e.alternate;
        (e.return = null),
          (e.child = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.alternate = null),
          (e.firstEffect = null),
          (e.lastEffect = null),
          (e.pendingProps = null),
          (e.memoizedProps = null),
          (e.stateNode = null),
          null !== t && aa(t);
      }
      function ua(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag;
      }
      function ca(e) {
        e: {
          for (var t = e.return; null !== t; ) {
            if (ua(t)) {
              var n = t;
              break e;
            }
            t = t.return;
          }
          throw Error(i(160));
        }
        switch (((t = n.stateNode), n.tag)) {
          case 5:
            var r = !1;
            break;
          case 3:
          case 4:
            (t = t.containerInfo), (r = !0);
            break;
          default:
            throw Error(i(161));
        }
        16 & n.effectTag && (Ue(t, ''), (n.effectTag &= -17));
        e: t: for (n = e; ; ) {
          for (; null === n.sibling; ) {
            if (null === n.return || ua(n.return)) {
              n = null;
              break e;
            }
            n = n.return;
          }
          for (
            n.sibling.return = n.return, n = n.sibling;
            5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

          ) {
            if (2 & n.effectTag) continue t;
            if (null === n.child || 4 === n.tag) continue t;
            (n.child.return = n), (n = n.child);
          }
          if (!(2 & n.effectTag)) {
            n = n.stateNode;
            break e;
          }
        }
        r
          ? (function e(t, n, r) {
              var o = t.tag,
                l = 5 === o || 6 === o;
              if (l)
                (t = l ? t.stateNode : t.stateNode.instance),
                  n
                    ? 8 === r.nodeType
                      ? r.parentNode.insertBefore(t, n)
                      : r.insertBefore(t, n)
                    : (8 === r.nodeType
                        ? (n = r.parentNode).insertBefore(t, r)
                        : (n = r).appendChild(t),
                      (null !== (r = r._reactRootContainer) && void 0 !== r) ||
                        null !== n.onclick ||
                        (n.onclick = cn));
              else if (4 !== o && null !== (t = t.child))
                for (e(t, n, r), t = t.sibling; null !== t; )
                  e(t, n, r), (t = t.sibling);
            })(e, n, t)
          : (function e(t, n, r) {
              var o = t.tag,
                l = 5 === o || 6 === o;
              if (l)
                (t = l ? t.stateNode : t.stateNode.instance),
                  n ? r.insertBefore(t, n) : r.appendChild(t);
              else if (4 !== o && null !== (t = t.child))
                for (e(t, n, r), t = t.sibling; null !== t; )
                  e(t, n, r), (t = t.sibling);
            })(e, n, t);
      }
      function sa(e, t, n) {
        for (var r, o, l = t, a = !1; ; ) {
          if (!a) {
            a = l.return;
            e: for (;;) {
              if (null === a) throw Error(i(160));
              switch (((r = a.stateNode), a.tag)) {
                case 5:
                  o = !1;
                  break e;
                case 3:
                case 4:
                  (r = r.containerInfo), (o = !0);
                  break e;
              }
              a = a.return;
            }
            a = !0;
          }
          if (5 === l.tag || 6 === l.tag) {
            e: for (var u = e, c = l, s = n, f = c; ; )
              if ((ia(u, f, s), null !== f.child && 4 !== f.tag))
                (f.child.return = f), (f = f.child);
              else {
                if (f === c) break e;
                for (; null === f.sibling; ) {
                  if (null === f.return || f.return === c) break e;
                  f = f.return;
                }
                (f.sibling.return = f.return), (f = f.sibling);
              }
            o
              ? ((u = r),
                (c = l.stateNode),
                8 === u.nodeType
                  ? u.parentNode.removeChild(c)
                  : u.removeChild(c))
              : r.removeChild(l.stateNode);
          } else if (4 === l.tag) {
            if (null !== l.child) {
              (r = l.stateNode.containerInfo),
                (o = !0),
                (l.child.return = l),
                (l = l.child);
              continue;
            }
          } else if ((ia(e, l, n), null !== l.child)) {
            (l.child.return = l), (l = l.child);
            continue;
          }
          if (l === t) break;
          for (; null === l.sibling; ) {
            if (null === l.return || l.return === t) return;
            4 === (l = l.return).tag && (a = !1);
          }
          (l.sibling.return = l.return), (l = l.sibling);
        }
      }
      function fa(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            return void ra(3, t);
          case 1:
            return;
          case 5:
            var n = t.stateNode;
            if (null != n) {
              var r = t.memoizedProps,
                o = null !== e ? e.memoizedProps : r;
              e = t.type;
              var l = t.updateQueue;
              if (((t.updateQueue = null), null !== l)) {
                for (
                  n[Sn] = r,
                    'input' === e &&
                      'radio' === r.type &&
                      null != r.name &&
                      Te(n, r),
                    ln(e, o),
                    t = ln(e, r),
                    o = 0;
                  o < l.length;
                  o += 2
                ) {
                  var a = l[o],
                    u = l[o + 1];
                  'style' === a
                    ? nn(n, u)
                    : 'dangerouslySetInnerHTML' === a
                    ? Ae(n, u)
                    : 'children' === a
                    ? Ue(n, u)
                    : Y(n, a, u, t);
                }
                switch (e) {
                  case 'input':
                    Se(n, r);
                    break;
                  case 'textarea':
                    Me(n, r);
                    break;
                  case 'select':
                    (t = n._wrapperState.wasMultiple),
                      (n._wrapperState.wasMultiple = !!r.multiple),
                      null != (e = r.value)
                        ? Oe(n, !!r.multiple, e, !1)
                        : t !== !!r.multiple &&
                          (null != r.defaultValue
                            ? Oe(n, !!r.multiple, r.defaultValue, !0)
                            : Oe(n, !!r.multiple, r.multiple ? [] : '', !1));
                }
              }
            }
            return;
          case 6:
            if (null === t.stateNode) throw Error(i(162));
            return void (t.stateNode.nodeValue = t.memoizedProps);
          case 3:
            return void (
              (t = t.stateNode).hydrate &&
              ((t.hydrate = !1), Dt(t.containerInfo))
            );
          case 12:
            return;
          case 13:
            if (
              ((n = t),
              null === t.memoizedState
                ? (r = !1)
                : ((r = !0), (n = t.child), (Ra = Uo())),
              null !== n)
            )
              e: for (e = n; ; ) {
                if (5 === e.tag)
                  (l = e.stateNode),
                    r
                      ? 'function' === typeof (l = l.style).setProperty
                        ? l.setProperty('display', 'none', 'important')
                        : (l.display = 'none')
                      : ((l = e.stateNode),
                        (o =
                          void 0 !== (o = e.memoizedProps.style) &&
                          null !== o &&
                          o.hasOwnProperty('display')
                            ? o.display
                            : null),
                        (l.style.display = tn('display', o)));
                else if (6 === e.tag)
                  e.stateNode.nodeValue = r ? '' : e.memoizedProps;
                else {
                  if (
                    13 === e.tag &&
                    null !== e.memoizedState &&
                    null === e.memoizedState.dehydrated
                  ) {
                    ((l = e.child.sibling).return = e), (e = l);
                    continue;
                  }
                  if (null !== e.child) {
                    (e.child.return = e), (e = e.child);
                    continue;
                  }
                }
                if (e === n) break;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === n) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            return void da(t);
          case 19:
            return void da(t);
          case 17:
            return;
        }
        throw Error(i(163));
      }
      function da(e) {
        var t = e.updateQueue;
        if (null !== t) {
          e.updateQueue = null;
          var n = e.stateNode;
          null === n && (n = e.stateNode = new Zi()),
            t.forEach(function (t) {
              var r = wu.bind(null, e, t);
              n.has(t) || (n.add(t), t.then(r, r));
            });
        }
      }
      var pa = 'function' === typeof WeakMap ? WeakMap : Map;
      function ma(e, t, n) {
        ((n = ul(n, null)).tag = 3), (n.payload = { element: null });
        var r = t.value;
        return (
          (n.callback = function () {
            Da || ((Da = !0), (La = r)), ea(e, t);
          }),
          n
        );
      }
      function ha(e, t, n) {
        (n = ul(n, null)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ('function' === typeof r) {
          var o = t.value;
          n.payload = function () {
            return ea(e, t), r(o);
          };
        }
        var l = e.stateNode;
        return (
          null !== l &&
            'function' === typeof l.componentDidCatch &&
            (n.callback = function () {
              'function' !== typeof r &&
                (null === ja ? (ja = new Set([this])) : ja.add(this), ea(e, t));
              var n = t.stack;
              this.componentDidCatch(t.value, {
                componentStack: null !== n ? n : ''
              });
            }),
          n
        );
      }
      var ga,
        va = Math.ceil,
        ya = X.ReactCurrentDispatcher,
        ba = X.ReactCurrentOwner,
        wa = 0,
        ka = 3,
        xa = 4,
        Ea = 0,
        Ta = null,
        Sa = null,
        Ca = 0,
        _a = wa,
        Pa = null,
        Oa = 1073741823,
        Na = 1073741823,
        za = null,
        Ma = 0,
        Fa = !1,
        Ra = 0,
        Ia = null,
        Da = !1,
        La = null,
        ja = null,
        Aa = !1,
        Ua = null,
        $a = 90,
        Va = null,
        Wa = 0,
        Ba = null,
        Qa = 0;
      function Ha() {
        return 0 !== (48 & Ea)
          ? 1073741821 - ((Uo() / 10) | 0)
          : 0 !== Qa
          ? Qa
          : (Qa = 1073741821 - ((Uo() / 10) | 0));
      }
      function Ka(e, t, n) {
        if (0 === (2 & (t = t.mode))) return 1073741823;
        var r = $o();
        if (0 === (4 & t)) return 99 === r ? 1073741823 : 1073741822;
        if (0 !== (16 & Ea)) return Ca;
        if (null !== n) e = qo(e, 0 | n.timeoutMs || 5e3, 250);
        else
          switch (r) {
            case 99:
              e = 1073741823;
              break;
            case 98:
              e = qo(e, 150, 100);
              break;
            case 97:
            case 96:
              e = qo(e, 5e3, 250);
              break;
            case 95:
              e = 2;
              break;
            default:
              throw Error(i(326));
          }
        return null !== Ta && e === Ca && --e, e;
      }
      function qa(e, t) {
        if (50 < Wa) throw ((Wa = 0), (Ba = null), Error(i(185)));
        if (null !== (e = Ga(e, t))) {
          var n = $o();
          1073741823 === t
            ? 0 !== (8 & Ea) && 0 === (48 & Ea)
              ? Za(e)
              : (Ya(e), 0 === Ea && Ho())
            : Ya(e),
            0 === (4 & Ea) ||
              (98 !== n && 99 !== n) ||
              (null === Va
                ? (Va = new Map([[e, t]]))
                : (void 0 === (n = Va.get(e)) || n > t) && Va.set(e, t));
        }
      }
      function Ga(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate;
        null !== n && n.expirationTime < t && (n.expirationTime = t);
        var r = e.return,
          o = null;
        if (null === r && 3 === e.tag) o = e.stateNode;
        else
          for (; null !== r; ) {
            if (
              ((n = r.alternate),
              r.childExpirationTime < t && (r.childExpirationTime = t),
              null !== n &&
                n.childExpirationTime < t &&
                (n.childExpirationTime = t),
              null === r.return && 3 === r.tag)
            ) {
              o = r.stateNode;
              break;
            }
            r = r.return;
          }
        return (
          null !== o && (Ta === o && (iu(t), _a === xa && Fu(o, Ca)), Ru(o, t)),
          o
        );
      }
      function Xa(e) {
        var t = e.lastExpiredTime;
        if (0 !== t) return t;
        if (!Mu(e, (t = e.firstPendingTime))) return t;
        var n = e.lastPingedTime;
        return 2 >= (e = n > (e = e.nextKnownPendingLevel) ? n : e) && t !== e
          ? 0
          : e;
      }
      function Ya(e) {
        if (0 !== e.lastExpiredTime)
          (e.callbackExpirationTime = 1073741823),
            (e.callbackPriority = 99),
            (e.callbackNode = Qo(Za.bind(null, e)));
        else {
          var t = Xa(e),
            n = e.callbackNode;
          if (0 === t)
            null !== n &&
              ((e.callbackNode = null),
              (e.callbackExpirationTime = 0),
              (e.callbackPriority = 90));
          else {
            var r = Ha();
            if (
              (1073741823 === t
                ? (r = 99)
                : 1 === t || 2 === t
                ? (r = 95)
                : (r =
                    0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r))
                      ? 99
                      : 250 >= r
                      ? 98
                      : 5250 >= r
                      ? 97
                      : 95),
              null !== n)
            ) {
              var o = e.callbackPriority;
              if (e.callbackExpirationTime === t && o >= r) return;
              n !== Fo && To(n);
            }
            (e.callbackExpirationTime = t),
              (e.callbackPriority = r),
              (t =
                1073741823 === t
                  ? Qo(Za.bind(null, e))
                  : Bo(r, Ja.bind(null, e), {
                      timeout: 10 * (1073741821 - t) - Uo()
                    })),
              (e.callbackNode = t);
          }
        }
      }
      function Ja(e, t) {
        if (((Qa = 0), t)) return Iu(e, (t = Ha())), Ya(e), null;
        var n = Xa(e);
        if (0 !== n) {
          if (((t = e.callbackNode), 0 !== (48 & Ea))) throw Error(i(327));
          if ((hu(), (e === Ta && n === Ca) || nu(e, n), null !== Sa)) {
            var r = Ea;
            Ea |= 16;
            for (var o = ou(); ; )
              try {
                uu();
                break;
              } catch (u) {
                ru(e, u);
              }
            if ((el(), (Ea = r), (ya.current = o), 1 === _a))
              throw ((t = Pa), nu(e, n), Fu(e, n), Ya(e), t);
            if (null === Sa)
              switch (
                ((o = e.finishedWork = e.current.alternate),
                (e.finishedExpirationTime = n),
                (r = _a),
                (Ta = null),
                r)
              ) {
                case wa:
                case 1:
                  throw Error(i(345));
                case 2:
                  Iu(e, 2 < n ? 2 : n);
                  break;
                case ka:
                  if (
                    (Fu(e, n),
                    n === (r = e.lastSuspendedTime) &&
                      (e.nextKnownPendingLevel = fu(o)),
                    1073741823 === Oa && 10 < (o = Ra + 500 - Uo()))
                  ) {
                    if (Fa) {
                      var l = e.lastPingedTime;
                      if (0 === l || l >= n) {
                        (e.lastPingedTime = n), nu(e, n);
                        break;
                      }
                    }
                    if (0 !== (l = Xa(e)) && l !== n) break;
                    if (0 !== r && r !== n) {
                      e.lastPingedTime = r;
                      break;
                    }
                    e.timeoutHandle = bn(du.bind(null, e), o);
                    break;
                  }
                  du(e);
                  break;
                case xa:
                  if (
                    (Fu(e, n),
                    n === (r = e.lastSuspendedTime) &&
                      (e.nextKnownPendingLevel = fu(o)),
                    Fa && (0 === (o = e.lastPingedTime) || o >= n))
                  ) {
                    (e.lastPingedTime = n), nu(e, n);
                    break;
                  }
                  if (0 !== (o = Xa(e)) && o !== n) break;
                  if (0 !== r && r !== n) {
                    e.lastPingedTime = r;
                    break;
                  }
                  if (
                    (1073741823 !== Na
                      ? (r = 10 * (1073741821 - Na) - Uo())
                      : 1073741823 === Oa
                      ? (r = 0)
                      : ((r = 10 * (1073741821 - Oa) - 5e3),
                        0 > (r = (o = Uo()) - r) && (r = 0),
                        (n = 10 * (1073741821 - n) - o) <
                          (r =
                            (120 > r
                              ? 120
                              : 480 > r
                              ? 480
                              : 1080 > r
                              ? 1080
                              : 1920 > r
                              ? 1920
                              : 3e3 > r
                              ? 3e3
                              : 4320 > r
                              ? 4320
                              : 1960 * va(r / 1960)) - r) && (r = n)),
                    10 < r)
                  ) {
                    e.timeoutHandle = bn(du.bind(null, e), r);
                    break;
                  }
                  du(e);
                  break;
                case 5:
                  if (1073741823 !== Oa && null !== za) {
                    l = Oa;
                    var a = za;
                    if (
                      (0 >= (r = 0 | a.busyMinDurationMs)
                        ? (r = 0)
                        : ((o = 0 | a.busyDelayMs),
                          (r =
                            (l =
                              Uo() -
                              (10 * (1073741821 - l) -
                                (0 | a.timeoutMs || 5e3))) <= o
                              ? 0
                              : o + r - l)),
                      10 < r)
                    ) {
                      Fu(e, n), (e.timeoutHandle = bn(du.bind(null, e), r));
                      break;
                    }
                  }
                  du(e);
                  break;
                default:
                  throw Error(i(329));
              }
            if ((Ya(e), e.callbackNode === t)) return Ja.bind(null, e);
          }
        }
        return null;
      }
      function Za(e) {
        var t = e.lastExpiredTime;
        if (((t = 0 !== t ? t : 1073741823), 0 !== (48 & Ea)))
          throw Error(i(327));
        if ((hu(), (e === Ta && t === Ca) || nu(e, t), null !== Sa)) {
          var n = Ea;
          Ea |= 16;
          for (var r = ou(); ; )
            try {
              au();
              break;
            } catch (o) {
              ru(e, o);
            }
          if ((el(), (Ea = n), (ya.current = r), 1 === _a))
            throw ((n = Pa), nu(e, t), Fu(e, t), Ya(e), n);
          if (null !== Sa) throw Error(i(261));
          (e.finishedWork = e.current.alternate),
            (e.finishedExpirationTime = t),
            (Ta = null),
            du(e),
            Ya(e);
        }
        return null;
      }
      function eu(e, t) {
        var n = Ea;
        Ea |= 1;
        try {
          return e(t);
        } finally {
          0 === (Ea = n) && Ho();
        }
      }
      function tu(e, t) {
        var n = Ea;
        (Ea &= -2), (Ea |= 8);
        try {
          return e(t);
        } finally {
          0 === (Ea = n) && Ho();
        }
      }
      function nu(e, t) {
        (e.finishedWork = null), (e.finishedExpirationTime = 0);
        var n = e.timeoutHandle;
        if ((-1 !== n && ((e.timeoutHandle = -1), wn(n)), null !== Sa))
          for (n = Sa.return; null !== n; ) {
            var r = n;
            switch (r.tag) {
              case 1:
                null !== (r = r.type.childContextTypes) && void 0 !== r && vo();
                break;
              case 3:
                Fl(), uo(po), uo(fo);
                break;
              case 5:
                Il(r);
                break;
              case 4:
                Fl();
                break;
              case 13:
              case 19:
                uo(Dl);
                break;
              case 10:
                tl(r);
            }
            n = n.return;
          }
        (Ta = e),
          (Sa = Cu(e.current, null)),
          (Ca = t),
          (_a = wa),
          (Pa = null),
          (Na = Oa = 1073741823),
          (za = null),
          (Ma = 0),
          (Fa = !1);
      }
      function ru(e, t) {
        for (;;) {
          try {
            if ((el(), (Al.current = gi), Ql))
              for (var n = Vl.memoizedState; null !== n; ) {
                var r = n.queue;
                null !== r && (r.pending = null), (n = n.next);
              }
            if (
              (($l = 0),
              (Bl = Wl = Vl = null),
              (Ql = !1),
              null === Sa || null === Sa.return)
            )
              return (_a = 1), (Pa = t), (Sa = null);
            e: {
              var o = e,
                l = Sa.return,
                i = Sa,
                a = t;
              if (
                ((t = Ca),
                (i.effectTag |= 2048),
                (i.firstEffect = i.lastEffect = null),
                null !== a &&
                  'object' === typeof a &&
                  'function' === typeof a.then)
              ) {
                var u = a;
                if (0 === (2 & i.mode)) {
                  var c = i.alternate;
                  c
                    ? ((i.updateQueue = c.updateQueue),
                      (i.memoizedState = c.memoizedState),
                      (i.expirationTime = c.expirationTime))
                    : ((i.updateQueue = null), (i.memoizedState = null));
                }
                var s = 0 !== (1 & Dl.current),
                  f = l;
                do {
                  var d;
                  if ((d = 13 === f.tag)) {
                    var p = f.memoizedState;
                    if (null !== p) d = null !== p.dehydrated;
                    else {
                      var m = f.memoizedProps;
                      d =
                        void 0 !== m.fallback &&
                        (!0 !== m.unstable_avoidThisFallback || !s);
                    }
                  }
                  if (d) {
                    var h = f.updateQueue;
                    if (null === h) {
                      var g = new Set();
                      g.add(u), (f.updateQueue = g);
                    } else h.add(u);
                    if (0 === (2 & f.mode)) {
                      if (
                        ((f.effectTag |= 64),
                        (i.effectTag &= -2981),
                        1 === i.tag)
                      )
                        if (null === i.alternate) i.tag = 17;
                        else {
                          var v = ul(1073741823, null);
                          (v.tag = 2), cl(i, v);
                        }
                      i.expirationTime = 1073741823;
                      break e;
                    }
                    (a = void 0), (i = t);
                    var y = o.pingCache;
                    if (
                      (null === y
                        ? ((y = o.pingCache = new pa()),
                          (a = new Set()),
                          y.set(u, a))
                        : void 0 === (a = y.get(u)) &&
                          ((a = new Set()), y.set(u, a)),
                      !a.has(i))
                    ) {
                      a.add(i);
                      var b = bu.bind(null, o, u, i);
                      u.then(b, b);
                    }
                    (f.effectTag |= 4096), (f.expirationTime = t);
                    break e;
                  }
                  f = f.return;
                } while (null !== f);
                a = Error(
                  (ge(i.type) || 'A React component') +
                    ' suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.' +
                    ve(i)
                );
              }
              5 !== _a && (_a = 2), (a = Ji(a, i)), (f = l);
              do {
                switch (f.tag) {
                  case 3:
                    (u = a),
                      (f.effectTag |= 4096),
                      (f.expirationTime = t),
                      sl(f, ma(f, u, t));
                    break e;
                  case 1:
                    u = a;
                    var w = f.type,
                      k = f.stateNode;
                    if (
                      0 === (64 & f.effectTag) &&
                      ('function' === typeof w.getDerivedStateFromError ||
                        (null !== k &&
                          'function' === typeof k.componentDidCatch &&
                          (null === ja || !ja.has(k))))
                    ) {
                      (f.effectTag |= 4096),
                        (f.expirationTime = t),
                        sl(f, ha(f, u, t));
                      break e;
                    }
                }
                f = f.return;
              } while (null !== f);
            }
            Sa = su(Sa);
          } catch (x) {
            t = x;
            continue;
          }
          break;
        }
      }
      function ou() {
        var e = ya.current;
        return (ya.current = gi), null === e ? gi : e;
      }
      function lu(e, t) {
        e < Oa && 2 < e && (Oa = e),
          null !== t && e < Na && 2 < e && ((Na = e), (za = t));
      }
      function iu(e) {
        e > Ma && (Ma = e);
      }
      function au() {
        for (; null !== Sa; ) Sa = cu(Sa);
      }
      function uu() {
        for (; null !== Sa && !Ro(); ) Sa = cu(Sa);
      }
      function cu(e) {
        var t = ga(e.alternate, e, Ca);
        return (
          (e.memoizedProps = e.pendingProps),
          null === t && (t = su(e)),
          (ba.current = null),
          t
        );
      }
      function su(e) {
        Sa = e;
        do {
          var t = Sa.alternate;
          if (((e = Sa.return), 0 === (2048 & Sa.effectTag))) {
            if (
              ((t = Xi(t, Sa, Ca)), 1 === Ca || 1 !== Sa.childExpirationTime)
            ) {
              for (var n = 0, r = Sa.child; null !== r; ) {
                var o = r.expirationTime,
                  l = r.childExpirationTime;
                o > n && (n = o), l > n && (n = l), (r = r.sibling);
              }
              Sa.childExpirationTime = n;
            }
            if (null !== t) return t;
            null !== e &&
              0 === (2048 & e.effectTag) &&
              (null === e.firstEffect && (e.firstEffect = Sa.firstEffect),
              null !== Sa.lastEffect &&
                (null !== e.lastEffect &&
                  (e.lastEffect.nextEffect = Sa.firstEffect),
                (e.lastEffect = Sa.lastEffect)),
              1 < Sa.effectTag &&
                (null !== e.lastEffect
                  ? (e.lastEffect.nextEffect = Sa)
                  : (e.firstEffect = Sa),
                (e.lastEffect = Sa)));
          } else {
            if (null !== (t = Yi(Sa))) return (t.effectTag &= 2047), t;
            null !== e &&
              ((e.firstEffect = e.lastEffect = null), (e.effectTag |= 2048));
          }
          if (null !== (t = Sa.sibling)) return t;
          Sa = e;
        } while (null !== Sa);
        return _a === wa && (_a = 5), null;
      }
      function fu(e) {
        var t = e.expirationTime;
        return t > (e = e.childExpirationTime) ? t : e;
      }
      function du(e) {
        var t = $o();
        return Wo(99, pu.bind(null, e, t)), null;
      }
      function pu(e, t) {
        do {
          hu();
        } while (null !== Ua);
        if (0 !== (48 & Ea)) throw Error(i(327));
        var n = e.finishedWork,
          r = e.finishedExpirationTime;
        if (null === n) return null;
        if (
          ((e.finishedWork = null),
          (e.finishedExpirationTime = 0),
          n === e.current)
        )
          throw Error(i(177));
        (e.callbackNode = null),
          (e.callbackExpirationTime = 0),
          (e.callbackPriority = 90),
          (e.nextKnownPendingLevel = 0);
        var o = fu(n);
        if (
          ((e.firstPendingTime = o),
          r <= e.lastSuspendedTime
            ? (e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0)
            : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1),
          r <= e.lastPingedTime && (e.lastPingedTime = 0),
          r <= e.lastExpiredTime && (e.lastExpiredTime = 0),
          e === Ta && ((Sa = Ta = null), (Ca = 0)),
          1 < n.effectTag
            ? null !== n.lastEffect
              ? ((n.lastEffect.nextEffect = n), (o = n.firstEffect))
              : (o = n)
            : (o = n.firstEffect),
          null !== o)
        ) {
          var l = Ea;
          (Ea |= 32), (ba.current = null), (hn = Ht);
          var a = pn();
          if (mn(a)) {
            if ('selectionStart' in a)
              var u = { start: a.selectionStart, end: a.selectionEnd };
            else
              e: {
                var c =
                  (u = ((u = a.ownerDocument) && u.defaultView) || window)
                    .getSelection && u.getSelection();
                if (c && 0 !== c.rangeCount) {
                  u = c.anchorNode;
                  var s = c.anchorOffset,
                    f = c.focusNode;
                  c = c.focusOffset;
                  try {
                    u.nodeType, f.nodeType;
                  } catch (C) {
                    u = null;
                    break e;
                  }
                  var d = 0,
                    p = -1,
                    m = -1,
                    h = 0,
                    g = 0,
                    v = a,
                    y = null;
                  t: for (;;) {
                    for (
                      var b;
                      v !== u || (0 !== s && 3 !== v.nodeType) || (p = d + s),
                        v !== f || (0 !== c && 3 !== v.nodeType) || (m = d + c),
                        3 === v.nodeType && (d += v.nodeValue.length),
                        null !== (b = v.firstChild);

                    )
                      (y = v), (v = b);
                    for (;;) {
                      if (v === a) break t;
                      if (
                        (y === u && ++h === s && (p = d),
                        y === f && ++g === c && (m = d),
                        null !== (b = v.nextSibling))
                      )
                        break;
                      y = (v = y).parentNode;
                    }
                    v = b;
                  }
                  u = -1 === p || -1 === m ? null : { start: p, end: m };
                } else u = null;
              }
            u = u || { start: 0, end: 0 };
          } else u = null;
          (gn = {
            activeElementDetached: null,
            focusedElem: a,
            selectionRange: u
          }),
            (Ht = !1),
            (Ia = o);
          do {
            try {
              mu();
            } catch (C) {
              if (null === Ia) throw Error(i(330));
              yu(Ia, C), (Ia = Ia.nextEffect);
            }
          } while (null !== Ia);
          Ia = o;
          do {
            try {
              for (a = e, u = t; null !== Ia; ) {
                var w = Ia.effectTag;
                if ((16 & w && Ue(Ia.stateNode, ''), 128 & w)) {
                  var k = Ia.alternate;
                  if (null !== k) {
                    var x = k.ref;
                    null !== x &&
                      ('function' === typeof x ? x(null) : (x.current = null));
                  }
                }
                switch (1038 & w) {
                  case 2:
                    ca(Ia), (Ia.effectTag &= -3);
                    break;
                  case 6:
                    ca(Ia), (Ia.effectTag &= -3), fa(Ia.alternate, Ia);
                    break;
                  case 1024:
                    Ia.effectTag &= -1025;
                    break;
                  case 1028:
                    (Ia.effectTag &= -1025), fa(Ia.alternate, Ia);
                    break;
                  case 4:
                    fa(Ia.alternate, Ia);
                    break;
                  case 8:
                    sa(a, (s = Ia), u), aa(s);
                }
                Ia = Ia.nextEffect;
              }
            } catch (C) {
              if (null === Ia) throw Error(i(330));
              yu(Ia, C), (Ia = Ia.nextEffect);
            }
          } while (null !== Ia);
          if (
            ((x = gn),
            (k = pn()),
            (w = x.focusedElem),
            (u = x.selectionRange),
            k !== w &&
              w &&
              w.ownerDocument &&
              (function e(t, n) {
                return (
                  !(!t || !n) &&
                  (t === n ||
                    ((!t || 3 !== t.nodeType) &&
                      (n && 3 === n.nodeType
                        ? e(t, n.parentNode)
                        : 'contains' in t
                        ? t.contains(n)
                        : !!t.compareDocumentPosition &&
                          !!(16 & t.compareDocumentPosition(n)))))
                );
              })(w.ownerDocument.documentElement, w))
          ) {
            null !== u &&
              mn(w) &&
              ((k = u.start),
              void 0 === (x = u.end) && (x = k),
              'selectionStart' in w
                ? ((w.selectionStart = k),
                  (w.selectionEnd = Math.min(x, w.value.length)))
                : (x =
                    ((k = w.ownerDocument || document) && k.defaultView) ||
                    window).getSelection &&
                  ((x = x.getSelection()),
                  (s = w.textContent.length),
                  (a = Math.min(u.start, s)),
                  (u = void 0 === u.end ? a : Math.min(u.end, s)),
                  !x.extend && a > u && ((s = u), (u = a), (a = s)),
                  (s = dn(w, a)),
                  (f = dn(w, u)),
                  s &&
                    f &&
                    (1 !== x.rangeCount ||
                      x.anchorNode !== s.node ||
                      x.anchorOffset !== s.offset ||
                      x.focusNode !== f.node ||
                      x.focusOffset !== f.offset) &&
                    ((k = k.createRange()).setStart(s.node, s.offset),
                    x.removeAllRanges(),
                    a > u
                      ? (x.addRange(k), x.extend(f.node, f.offset))
                      : (k.setEnd(f.node, f.offset), x.addRange(k))))),
              (k = []);
            for (x = w; (x = x.parentNode); )
              1 === x.nodeType &&
                k.push({ element: x, left: x.scrollLeft, top: x.scrollTop });
            for (
              'function' === typeof w.focus && w.focus(), w = 0;
              w < k.length;
              w++
            )
              ((x = k[w]).element.scrollLeft = x.left),
                (x.element.scrollTop = x.top);
          }
          (Ht = !!hn), (gn = hn = null), (e.current = n), (Ia = o);
          do {
            try {
              for (w = e; null !== Ia; ) {
                var E = Ia.effectTag;
                if ((36 & E && la(w, Ia.alternate, Ia), 128 & E)) {
                  k = void 0;
                  var T = Ia.ref;
                  if (null !== T) {
                    var S = Ia.stateNode;
                    switch (Ia.tag) {
                      case 5:
                        k = S;
                        break;
                      default:
                        k = S;
                    }
                    'function' === typeof T ? T(k) : (T.current = k);
                  }
                }
                Ia = Ia.nextEffect;
              }
            } catch (C) {
              if (null === Ia) throw Error(i(330));
              yu(Ia, C), (Ia = Ia.nextEffect);
            }
          } while (null !== Ia);
          (Ia = null), Io(), (Ea = l);
        } else e.current = n;
        if (Aa) (Aa = !1), (Ua = e), ($a = t);
        else
          for (Ia = o; null !== Ia; )
            (t = Ia.nextEffect), (Ia.nextEffect = null), (Ia = t);
        if (
          (0 === (t = e.firstPendingTime) && (ja = null),
          1073741823 === t
            ? e === Ba
              ? Wa++
              : ((Wa = 0), (Ba = e))
            : (Wa = 0),
          'function' === typeof ku && ku(n.stateNode, r),
          Ya(e),
          Da)
        )
          throw ((Da = !1), (e = La), (La = null), e);
        return 0 !== (8 & Ea) || Ho(), null;
      }
      function mu() {
        for (; null !== Ia; ) {
          var e = Ia.effectTag;
          0 !== (256 & e) && na(Ia.alternate, Ia),
            0 === (512 & e) ||
              Aa ||
              ((Aa = !0),
              Bo(97, function () {
                return hu(), null;
              })),
            (Ia = Ia.nextEffect);
        }
      }
      function hu() {
        if (90 !== $a) {
          var e = 97 < $a ? 97 : $a;
          return ($a = 90), Wo(e, gu);
        }
      }
      function gu() {
        if (null === Ua) return !1;
        var e = Ua;
        if (((Ua = null), 0 !== (48 & Ea))) throw Error(i(331));
        var t = Ea;
        for (Ea |= 32, e = e.current.firstEffect; null !== e; ) {
          try {
            var n = e;
            if (0 !== (512 & n.effectTag))
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                case 22:
                  ra(5, n), oa(5, n);
              }
          } catch (r) {
            if (null === e) throw Error(i(330));
            yu(e, r);
          }
          (n = e.nextEffect), (e.nextEffect = null), (e = n);
        }
        return (Ea = t), Ho(), !0;
      }
      function vu(e, t, n) {
        cl(e, (t = ma(e, (t = Ji(n, t)), 1073741823))),
          null !== (e = Ga(e, 1073741823)) && Ya(e);
      }
      function yu(e, t) {
        if (3 === e.tag) vu(e, e, t);
        else
          for (var n = e.return; null !== n; ) {
            if (3 === n.tag) {
              vu(n, e, t);
              break;
            }
            if (1 === n.tag) {
              var r = n.stateNode;
              if (
                'function' === typeof n.type.getDerivedStateFromError ||
                ('function' === typeof r.componentDidCatch &&
                  (null === ja || !ja.has(r)))
              ) {
                cl(n, (e = ha(n, (e = Ji(t, e)), 1073741823))),
                  null !== (n = Ga(n, 1073741823)) && Ya(n);
                break;
              }
            }
            n = n.return;
          }
      }
      function bu(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t),
          Ta === e && Ca === n
            ? _a === xa || (_a === ka && 1073741823 === Oa && Uo() - Ra < 500)
              ? nu(e, Ca)
              : (Fa = !0)
            : Mu(e, n) &&
              ((0 !== (t = e.lastPingedTime) && t < n) ||
                ((e.lastPingedTime = n), Ya(e)));
      }
      function wu(e, t) {
        var n = e.stateNode;
        null !== n && n.delete(t),
          0 === (t = 0) && (t = Ka((t = Ha()), e, null)),
          null !== (e = Ga(e, t)) && Ya(e);
      }
      ga = function (e, t, n) {
        var r = t.expirationTime;
        if (null !== e) {
          var o = t.pendingProps;
          if (e.memoizedProps !== o || po.current) Ni = !0;
          else {
            if (r < n) {
              switch (((Ni = !1), t.tag)) {
                case 3:
                  Ai(t), Pi();
                  break;
                case 5:
                  if ((Rl(t), 4 & t.mode && 1 !== n && o.hidden))
                    return (t.expirationTime = t.childExpirationTime = 1), null;
                  break;
                case 1:
                  go(t.type) && wo(t);
                  break;
                case 4:
                  Ml(t, t.stateNode.containerInfo);
                  break;
                case 10:
                  (r = t.memoizedProps.value),
                    (o = t.type._context),
                    co(Xo, o._currentValue),
                    (o._currentValue = r);
                  break;
                case 13:
                  if (null !== t.memoizedState)
                    return 0 !== (r = t.child.childExpirationTime) && r >= n
                      ? Bi(e, t, n)
                      : (co(Dl, 1 & Dl.current),
                        null !== (t = qi(e, t, n)) ? t.sibling : null);
                  co(Dl, 1 & Dl.current);
                  break;
                case 19:
                  if (
                    ((r = t.childExpirationTime >= n), 0 !== (64 & e.effectTag))
                  ) {
                    if (r) return Ki(e, t, n);
                    t.effectTag |= 64;
                  }
                  if (
                    (null !== (o = t.memoizedState) &&
                      ((o.rendering = null), (o.tail = null)),
                    co(Dl, Dl.current),
                    !r)
                  )
                    return null;
              }
              return qi(e, t, n);
            }
            Ni = !1;
          }
        } else Ni = !1;
        switch (((t.expirationTime = 0), t.tag)) {
          case 2:
            if (
              ((r = t.type),
              null !== e &&
                ((e.alternate = null),
                (t.alternate = null),
                (t.effectTag |= 2)),
              (e = t.pendingProps),
              (o = ho(t, fo.current)),
              rl(t, n),
              (o = ql(null, t, r, e, o, n)),
              (t.effectTag |= 1),
              'object' === typeof o &&
                null !== o &&
                'function' === typeof o.render &&
                void 0 === o.$$typeof)
            ) {
              if (
                ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                go(r))
              ) {
                var l = !0;
                wo(t);
              } else l = !1;
              (t.memoizedState =
                null !== o.state && void 0 !== o.state ? o.state : null),
                il(t);
              var a = r.getDerivedStateFromProps;
              'function' === typeof a && hl(t, r, a, e),
                (o.updater = gl),
                (t.stateNode = o),
                (o._reactInternalFiber = t),
                wl(t, r, e, n),
                (t = ji(null, t, r, !0, l, n));
            } else (t.tag = 0), zi(null, t, o, n), (t = t.child);
            return t;
          case 16:
            e: {
              if (
                ((o = t.elementType),
                null !== e &&
                  ((e.alternate = null),
                  (t.alternate = null),
                  (t.effectTag |= 2)),
                (e = t.pendingProps),
                (function (e) {
                  if (-1 === e._status) {
                    e._status = 0;
                    var t = e._ctor;
                    (t = t()),
                      (e._result = t),
                      t.then(
                        function (t) {
                          0 === e._status &&
                            ((t = t.default), (e._status = 1), (e._result = t));
                        },
                        function (t) {
                          0 === e._status && ((e._status = 2), (e._result = t));
                        }
                      );
                  }
                })(o),
                1 !== o._status)
              )
                throw o._result;
              switch (
                ((o = o._result),
                (t.type = o),
                (l = t.tag = (function (e) {
                  if ('function' === typeof e) return Su(e) ? 1 : 0;
                  if (void 0 !== e && null !== e) {
                    if ((e = e.$$typeof) === ue) return 11;
                    if (e === fe) return 14;
                  }
                  return 2;
                })(o)),
                (e = Go(o, e)),
                l)
              ) {
                case 0:
                  t = Di(null, t, o, e, n);
                  break e;
                case 1:
                  t = Li(null, t, o, e, n);
                  break e;
                case 11:
                  t = Mi(null, t, o, e, n);
                  break e;
                case 14:
                  t = Fi(null, t, o, Go(o.type, e), r, n);
                  break e;
              }
              throw Error(i(306, o, ''));
            }
            return t;
          case 0:
            return (
              (r = t.type),
              (o = t.pendingProps),
              Di(e, t, r, (o = t.elementType === r ? o : Go(r, o)), n)
            );
          case 1:
            return (
              (r = t.type),
              (o = t.pendingProps),
              Li(e, t, r, (o = t.elementType === r ? o : Go(r, o)), n)
            );
          case 3:
            if ((Ai(t), (r = t.updateQueue), null === e || null === r))
              throw Error(i(282));
            if (
              ((r = t.pendingProps),
              (o = null !== (o = t.memoizedState) ? o.element : null),
              al(e, t),
              fl(t, r, null, n),
              (r = t.memoizedState.element) === o)
            )
              Pi(), (t = qi(e, t, n));
            else {
              if (
                ((o = t.stateNode.hydrate) &&
                  ((ki = kn(t.stateNode.containerInfo.firstChild)),
                  (wi = t),
                  (o = xi = !0)),
                o)
              )
                for (n = Cl(t, null, r, n), t.child = n; n; )
                  (n.effectTag = (-3 & n.effectTag) | 1024), (n = n.sibling);
              else zi(e, t, r, n), Pi();
              t = t.child;
            }
            return t;
          case 5:
            return (
              Rl(t),
              null === e && Si(t),
              (r = t.type),
              (o = t.pendingProps),
              (l = null !== e ? e.memoizedProps : null),
              (a = o.children),
              yn(r, o)
                ? (a = null)
                : null !== l && yn(r, l) && (t.effectTag |= 16),
              Ii(e, t),
              4 & t.mode && 1 !== n && o.hidden
                ? ((t.expirationTime = t.childExpirationTime = 1), (t = null))
                : (zi(e, t, a, n), (t = t.child)),
              t
            );
          case 6:
            return null === e && Si(t), null;
          case 13:
            return Bi(e, t, n);
          case 4:
            return (
              Ml(t, t.stateNode.containerInfo),
              (r = t.pendingProps),
              null === e ? (t.child = Sl(t, null, r, n)) : zi(e, t, r, n),
              t.child
            );
          case 11:
            return (
              (r = t.type),
              (o = t.pendingProps),
              Mi(e, t, r, (o = t.elementType === r ? o : Go(r, o)), n)
            );
          case 7:
            return zi(e, t, t.pendingProps, n), t.child;
          case 8:
          case 12:
            return zi(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e: {
              (r = t.type._context),
                (o = t.pendingProps),
                (a = t.memoizedProps),
                (l = o.value);
              var u = t.type._context;
              if ((co(Xo, u._currentValue), (u._currentValue = l), null !== a))
                if (
                  ((u = a.value),
                  0 ===
                    (l = Lr(u, l)
                      ? 0
                      : 0 |
                        ('function' === typeof r._calculateChangedBits
                          ? r._calculateChangedBits(u, l)
                          : 1073741823)))
                ) {
                  if (a.children === o.children && !po.current) {
                    t = qi(e, t, n);
                    break e;
                  }
                } else
                  for (null !== (u = t.child) && (u.return = t); null !== u; ) {
                    var c = u.dependencies;
                    if (null !== c) {
                      a = u.child;
                      for (var s = c.firstContext; null !== s; ) {
                        if (s.context === r && 0 !== (s.observedBits & l)) {
                          1 === u.tag &&
                            (((s = ul(n, null)).tag = 2), cl(u, s)),
                            u.expirationTime < n && (u.expirationTime = n),
                            null !== (s = u.alternate) &&
                              s.expirationTime < n &&
                              (s.expirationTime = n),
                            nl(u.return, n),
                            c.expirationTime < n && (c.expirationTime = n);
                          break;
                        }
                        s = s.next;
                      }
                    } else
                      a = 10 === u.tag && u.type === t.type ? null : u.child;
                    if (null !== a) a.return = u;
                    else
                      for (a = u; null !== a; ) {
                        if (a === t) {
                          a = null;
                          break;
                        }
                        if (null !== (u = a.sibling)) {
                          (u.return = a.return), (a = u);
                          break;
                        }
                        a = a.return;
                      }
                    u = a;
                  }
              zi(e, t, o.children, n), (t = t.child);
            }
            return t;
          case 9:
            return (
              (o = t.type),
              (r = (l = t.pendingProps).children),
              rl(t, n),
              (r = r((o = ol(o, l.unstable_observedBits)))),
              (t.effectTag |= 1),
              zi(e, t, r, n),
              t.child
            );
          case 14:
            return (
              (l = Go((o = t.type), t.pendingProps)),
              Fi(e, t, o, (l = Go(o.type, l)), r, n)
            );
          case 15:
            return Ri(e, t, t.type, t.pendingProps, r, n);
          case 17:
            return (
              (r = t.type),
              (o = t.pendingProps),
              (o = t.elementType === r ? o : Go(r, o)),
              null !== e &&
                ((e.alternate = null),
                (t.alternate = null),
                (t.effectTag |= 2)),
              (t.tag = 1),
              go(r) ? ((e = !0), wo(t)) : (e = !1),
              rl(t, n),
              yl(t, r, o),
              wl(t, r, o, n),
              ji(null, t, r, !0, e, n)
            );
          case 19:
            return Ki(e, t, n);
        }
        throw Error(i(156, t.tag));
      };
      var ku = null,
        xu = null;
      function Eu(e, t, n, r) {
        (this.tag = e),
          (this.key = n),
          (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = t),
          (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
          (this.mode = r),
          (this.effectTag = 0),
          (this.lastEffect = this.firstEffect = this.nextEffect = null),
          (this.childExpirationTime = this.expirationTime = 0),
          (this.alternate = null);
      }
      function Tu(e, t, n, r) {
        return new Eu(e, t, n, r);
      }
      function Su(e) {
        return !(!(e = e.prototype) || !e.isReactComponent);
      }
      function Cu(e, t) {
        var n = e.alternate;
        return (
          null === n
            ? (((n = Tu(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.effectTag = 0),
              (n.nextEffect = null),
              (n.firstEffect = null),
              (n.lastEffect = null)),
          (n.childExpirationTime = e.childExpirationTime),
          (n.expirationTime = e.expirationTime),
          (n.child = e.child),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue),
          (t = e.dependencies),
          (n.dependencies =
            null === t
              ? null
              : {
                  expirationTime: t.expirationTime,
                  firstContext: t.firstContext,
                  responders: t.responders
                }),
          (n.sibling = e.sibling),
          (n.index = e.index),
          (n.ref = e.ref),
          n
        );
      }
      function _u(e, t, n, r, o, l) {
        var a = 2;
        if (((r = e), 'function' === typeof e)) Su(e) && (a = 1);
        else if ('string' === typeof e) a = 5;
        else
          e: switch (e) {
            case ne:
              return Pu(n.children, o, l, t);
            case ae:
              (a = 8), (o |= 7);
              break;
            case re:
              (a = 8), (o |= 1);
              break;
            case oe:
              return (
                ((e = Tu(12, n, t, 8 | o)).elementType = oe),
                (e.type = oe),
                (e.expirationTime = l),
                e
              );
            case ce:
              return (
                ((e = Tu(13, n, t, o)).type = ce),
                (e.elementType = ce),
                (e.expirationTime = l),
                e
              );
            case se:
              return (
                ((e = Tu(19, n, t, o)).elementType = se),
                (e.expirationTime = l),
                e
              );
            default:
              if ('object' === typeof e && null !== e)
                switch (e.$$typeof) {
                  case le:
                    a = 10;
                    break e;
                  case ie:
                    a = 9;
                    break e;
                  case ue:
                    a = 11;
                    break e;
                  case fe:
                    a = 14;
                    break e;
                  case de:
                    (a = 16), (r = null);
                    break e;
                  case pe:
                    a = 22;
                    break e;
                }
              throw Error(i(130, null == e ? e : typeof e, ''));
          }
        return (
          ((t = Tu(a, n, t, o)).elementType = e),
          (t.type = r),
          (t.expirationTime = l),
          t
        );
      }
      function Pu(e, t, n, r) {
        return ((e = Tu(7, e, r, t)).expirationTime = n), e;
      }
      function Ou(e, t, n) {
        return ((e = Tu(6, e, null, t)).expirationTime = n), e;
      }
      function Nu(e, t, n) {
        return (
          ((t = Tu(
            4,
            null !== e.children ? e.children : [],
            e.key,
            t
          )).expirationTime = n),
          (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
          }),
          t
        );
      }
      function zu(e, t, n) {
        (this.tag = t),
          (this.current = null),
          (this.containerInfo = e),
          (this.pingCache = this.pendingChildren = null),
          (this.finishedExpirationTime = 0),
          (this.finishedWork = null),
          (this.timeoutHandle = -1),
          (this.pendingContext = this.context = null),
          (this.hydrate = n),
          (this.callbackNode = null),
          (this.callbackPriority = 90),
          (this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0);
      }
      function Mu(e, t) {
        var n = e.firstSuspendedTime;
        return (e = e.lastSuspendedTime), 0 !== n && n >= t && e <= t;
      }
      function Fu(e, t) {
        var n = e.firstSuspendedTime,
          r = e.lastSuspendedTime;
        n < t && (e.firstSuspendedTime = t),
          (r > t || 0 === n) && (e.lastSuspendedTime = t),
          t <= e.lastPingedTime && (e.lastPingedTime = 0),
          t <= e.lastExpiredTime && (e.lastExpiredTime = 0);
      }
      function Ru(e, t) {
        t > e.firstPendingTime && (e.firstPendingTime = t);
        var n = e.firstSuspendedTime;
        0 !== n &&
          (t >= n
            ? (e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0)
            : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1),
          t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t));
      }
      function Iu(e, t) {
        var n = e.lastExpiredTime;
        (0 === n || n > t) && (e.lastExpiredTime = t);
      }
      function Du(e, t, n, r) {
        var o = t.current,
          l = Ha(),
          a = pl.suspense;
        l = Ka(l, o, a);
        e: if (n) {
          t: {
            if (Ze((n = n._reactInternalFiber)) !== n || 1 !== n.tag)
              throw Error(i(170));
            var u = n;
            do {
              switch (u.tag) {
                case 3:
                  u = u.stateNode.context;
                  break t;
                case 1:
                  if (go(u.type)) {
                    u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                    break t;
                  }
              }
              u = u.return;
            } while (null !== u);
            throw Error(i(171));
          }
          if (1 === n.tag) {
            var c = n.type;
            if (go(c)) {
              n = bo(n, c, u);
              break e;
            }
          }
          n = u;
        } else n = so;
        return (
          null === t.context ? (t.context = n) : (t.pendingContext = n),
          ((t = ul(l, a)).payload = { element: e }),
          null !== (r = void 0 === r ? null : r) && (t.callback = r),
          cl(o, t),
          qa(o, l),
          l
        );
      }
      function Lu(e) {
        if (!(e = e.current).child) return null;
        switch (e.child.tag) {
          case 5:
          default:
            return e.child.stateNode;
        }
      }
      function ju(e, t) {
        null !== (e = e.memoizedState) &&
          null !== e.dehydrated &&
          e.retryTime < t &&
          (e.retryTime = t);
      }
      function Au(e, t) {
        ju(e, t), (e = e.alternate) && ju(e, t);
      }
      function Uu(e, t, n) {
        var r = new zu(e, t, (n = null != n && !0 === n.hydrate)),
          o = Tu(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
        (r.current = o),
          (o.stateNode = r),
          il(o),
          (e[Cn] = r.current),
          n &&
            0 !== t &&
            (function (e, t) {
              var n = Je(t);
              Ct.forEach(function (e) {
                mt(e, t, n);
              }),
                _t.forEach(function (e) {
                  mt(e, t, n);
                });
            })(0, 9 === e.nodeType ? e : e.ownerDocument),
          (this._internalRoot = r);
      }
      function $u(e) {
        return !(
          !e ||
          (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType ||
              ' react-mount-point-unstable ' !== e.nodeValue))
        );
      }
      function Vu(e, t, n, r, o) {
        var l = n._reactRootContainer;
        if (l) {
          var i = l._internalRoot;
          if ('function' === typeof o) {
            var a = o;
            o = function () {
              var e = Lu(i);
              a.call(e);
            };
          }
          Du(t, i, e, o);
        } else {
          if (
            ((l = n._reactRootContainer = (function (e, t) {
              if (
                (t ||
                  (t = !(
                    !(t = e
                      ? 9 === e.nodeType
                        ? e.documentElement
                        : e.firstChild
                      : null) ||
                    1 !== t.nodeType ||
                    !t.hasAttribute('data-reactroot')
                  )),
                !t)
              )
                for (var n; (n = e.lastChild); ) e.removeChild(n);
              return new Uu(e, 0, t ? { hydrate: !0 } : void 0);
            })(n, r)),
            (i = l._internalRoot),
            'function' === typeof o)
          ) {
            var u = o;
            o = function () {
              var e = Lu(i);
              u.call(e);
            };
          }
          tu(function () {
            Du(t, i, e, o);
          });
        }
        return Lu(i);
      }
      function Wu(e, t, n) {
        var r =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
          $$typeof: te,
          key: null == r ? null : '' + r,
          children: e,
          containerInfo: t,
          implementation: n
        };
      }
      function Bu(e, t) {
        var n =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!$u(t)) throw Error(i(200));
        return Wu(e, t, null, n);
      }
      (Uu.prototype.render = function (e) {
        Du(e, this._internalRoot, null, null);
      }),
        (Uu.prototype.unmount = function () {
          var e = this._internalRoot,
            t = e.containerInfo;
          Du(null, e, null, function () {
            t[Cn] = null;
          });
        }),
        (ht = function (e) {
          if (13 === e.tag) {
            var t = qo(Ha(), 150, 100);
            qa(e, t), Au(e, t);
          }
        }),
        (gt = function (e) {
          13 === e.tag && (qa(e, 3), Au(e, 3));
        }),
        (vt = function (e) {
          if (13 === e.tag) {
            var t = Ha();
            qa(e, (t = Ka(t, e, null))), Au(e, t);
          }
        }),
        (P = function (e, t, n) {
          switch (t) {
            case 'input':
              if ((Se(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                  n = n.querySelectorAll(
                    'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
                  ),
                    t = 0;
                  t < n.length;
                  t++
                ) {
                  var r = n[t];
                  if (r !== e && r.form === e.form) {
                    var o = Nn(r);
                    if (!o) throw Error(i(90));
                    ke(r), Se(r, o);
                  }
                }
              }
              break;
            case 'textarea':
              Me(e, n);
              break;
            case 'select':
              null != (t = n.value) && Oe(e, !!n.multiple, t, !1);
          }
        }),
        (R = eu),
        (I = function (e, t, n, r, o) {
          var l = Ea;
          Ea |= 4;
          try {
            return Wo(98, e.bind(null, t, n, r, o));
          } finally {
            0 === (Ea = l) && Ho();
          }
        }),
        (D = function () {
          0 === (49 & Ea) &&
            ((function () {
              if (null !== Va) {
                var e = Va;
                (Va = null),
                  e.forEach(function (e, t) {
                    Iu(t, e), Ya(t);
                  }),
                  Ho();
              }
            })(),
            hu());
        }),
        (L = function (e, t) {
          var n = Ea;
          Ea |= 2;
          try {
            return e(t);
          } finally {
            0 === (Ea = n) && Ho();
          }
        });
      var Qu = {
        Events: [
          Pn,
          On,
          Nn,
          C,
          E,
          Ln,
          function (e) {
            ot(e, Dn);
          },
          M,
          F,
          Yt,
          at,
          hu,
          { current: !1 }
        ]
      };
      !(function (e) {
        var t = e.findFiberByHostInstance;
        (function (e) {
          if ('undefined' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
          var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (t.isDisabled || !t.supportsFiber) return !0;
          try {
            var n = t.inject(e);
            (ku = function (e) {
              try {
                t.onCommitFiberRoot(
                  n,
                  e,
                  void 0,
                  64 === (64 & e.current.effectTag)
                );
              } catch (r) {}
            }),
              (xu = function (e) {
                try {
                  t.onCommitFiberUnmount(n, e);
                } catch (r) {}
              });
          } catch (r) {}
        })(
          o({}, e, {
            overrideHookState: null,
            overrideProps: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: X.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = nt(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance: function (e) {
              return t ? t(e) : null;
            },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null
          })
        );
      })({
        findFiberByHostInstance: _n,
        bundleType: 0,
        version: '16.14.0',
        rendererPackageName: 'react-dom'
      }),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qu),
        (t.createPortal = Bu),
        (t.findDOMNode = function (e) {
          if (null == e) return null;
          if (1 === e.nodeType) return e;
          var t = e._reactInternalFiber;
          if (void 0 === t) {
            if ('function' === typeof e.render) throw Error(i(188));
            throw Error(i(268, Object.keys(e)));
          }
          return (e = null === (e = nt(t)) ? null : e.stateNode);
        }),
        (t.flushSync = function (e, t) {
          if (0 !== (48 & Ea)) throw Error(i(187));
          var n = Ea;
          Ea |= 1;
          try {
            return Wo(99, e.bind(null, t));
          } finally {
            (Ea = n), Ho();
          }
        }),
        (t.hydrate = function (e, t, n) {
          if (!$u(t)) throw Error(i(200));
          return Vu(null, e, t, !0, n);
        }),
        (t.render = function (e, t, n) {
          if (!$u(t)) throw Error(i(200));
          return Vu(null, e, t, !1, n);
        }),
        (t.unmountComponentAtNode = function (e) {
          if (!$u(e)) throw Error(i(40));
          return (
            !!e._reactRootContainer &&
            (tu(function () {
              Vu(null, null, e, !1, function () {
                (e._reactRootContainer = null), (e[Cn] = null);
              });
            }),
            !0)
          );
        }),
        (t.unstable_batchedUpdates = eu),
        (t.unstable_createPortal = function (e, t) {
          return Bu(
            e,
            t,
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null
          );
        }),
        (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
          if (!$u(n)) throw Error(i(200));
          if (null == e || void 0 === e._reactInternalFiber) throw Error(i(38));
          return Vu(e, t, n, !1, r);
        }),
        (t.version = '16.14.0');
    },
    function (e, t, n) {
      'use strict';
      e.exports = n(15);
    },
    function (e, t, n) {
      'use strict';
      var r, o, l, i, a;
      if (
        'undefined' === typeof window ||
        'function' !== typeof MessageChannel
      ) {
        var u = null,
          c = null,
          s = function e() {
            if (null !== u)
              try {
                var n = t.unstable_now();
                u(!0, n), (u = null);
              } catch (r) {
                throw (setTimeout(e, 0), r);
              }
          },
          f = Date.now();
        (t.unstable_now = function () {
          return Date.now() - f;
        }),
          (r = function (e) {
            null !== u ? setTimeout(r, 0, e) : ((u = e), setTimeout(s, 0));
          }),
          (o = function (e, t) {
            c = setTimeout(e, t);
          }),
          (l = function () {
            clearTimeout(c);
          }),
          (i = function () {
            return !1;
          }),
          (a = t.unstable_forceFrameRate = function () {});
      } else {
        var d = window.performance,
          p = window.Date,
          m = window.setTimeout,
          h = window.clearTimeout;
        if ('undefined' !== typeof console) {
          var g = window.cancelAnimationFrame;
          'function' !== typeof window.requestAnimationFrame &&
            console.error(
              "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
            ),
            'function' !== typeof g &&
              console.error(
                "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
              );
        }
        if ('object' === typeof d && 'function' === typeof d.now)
          t.unstable_now = function () {
            return d.now();
          };
        else {
          var v = p.now();
          t.unstable_now = function () {
            return p.now() - v;
          };
        }
        var y = !1,
          b = null,
          w = -1,
          k = 5,
          x = 0;
        (i = function () {
          return t.unstable_now() >= x;
        }),
          (a = function () {}),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported'
                )
              : (k = 0 < e ? Math.floor(1e3 / e) : 5);
          });
        var E = new MessageChannel(),
          T = E.port2;
        (E.port1.onmessage = function () {
          if (null !== b) {
            var e = t.unstable_now();
            x = e + k;
            try {
              b(!0, e) ? T.postMessage(null) : ((y = !1), (b = null));
            } catch (n) {
              throw (T.postMessage(null), n);
            }
          } else y = !1;
        }),
          (r = function (e) {
            (b = e), y || ((y = !0), T.postMessage(null));
          }),
          (o = function (e, n) {
            w = m(function () {
              e(t.unstable_now());
            }, n);
          }),
          (l = function () {
            h(w), (w = -1);
          });
      }
      function S(e, t) {
        var n = e.length;
        e.push(t);
        e: for (;;) {
          var r = (n - 1) >>> 1,
            o = e[r];
          if (!(void 0 !== o && 0 < P(o, t))) break e;
          (e[r] = t), (e[n] = o), (n = r);
        }
      }
      function C(e) {
        return void 0 === (e = e[0]) ? null : e;
      }
      function _(e) {
        var t = e[0];
        if (void 0 !== t) {
          var n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, o = e.length; r < o; ) {
              var l = 2 * (r + 1) - 1,
                i = e[l],
                a = l + 1,
                u = e[a];
              if (void 0 !== i && 0 > P(i, n))
                void 0 !== u && 0 > P(u, i)
                  ? ((e[r] = u), (e[a] = n), (r = a))
                  : ((e[r] = i), (e[l] = n), (r = l));
              else {
                if (!(void 0 !== u && 0 > P(u, n))) break e;
                (e[r] = u), (e[a] = n), (r = a);
              }
            }
          }
          return t;
        }
        return null;
      }
      function P(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
      }
      var O = [],
        N = [],
        z = 1,
        M = null,
        F = 3,
        R = !1,
        I = !1,
        D = !1;
      function L(e) {
        for (var t = C(N); null !== t; ) {
          if (null === t.callback) _(N);
          else {
            if (!(t.startTime <= e)) break;
            _(N), (t.sortIndex = t.expirationTime), S(O, t);
          }
          t = C(N);
        }
      }
      function j(e) {
        if (((D = !1), L(e), !I))
          if (null !== C(O)) (I = !0), r(A);
          else {
            var t = C(N);
            null !== t && o(j, t.startTime - e);
          }
      }
      function A(e, n) {
        (I = !1), D && ((D = !1), l()), (R = !0);
        var r = F;
        try {
          for (
            L(n), M = C(O);
            null !== M && (!(M.expirationTime > n) || (e && !i()));

          ) {
            var a = M.callback;
            if (null !== a) {
              (M.callback = null), (F = M.priorityLevel);
              var u = a(M.expirationTime <= n);
              (n = t.unstable_now()),
                'function' === typeof u ? (M.callback = u) : M === C(O) && _(O),
                L(n);
            } else _(O);
            M = C(O);
          }
          if (null !== M) var c = !0;
          else {
            var s = C(N);
            null !== s && o(j, s.startTime - n), (c = !1);
          }
          return c;
        } finally {
          (M = null), (F = r), (R = !1);
        }
      }
      function U(e) {
        switch (e) {
          case 1:
            return -1;
          case 2:
            return 250;
          case 5:
            return 1073741823;
          case 4:
            return 1e4;
          default:
            return 5e3;
        }
      }
      var $ = a;
      (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (t.unstable_continueExecution = function () {
          I || R || ((I = !0), r(A));
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return F;
        }),
        (t.unstable_getFirstCallbackNode = function () {
          return C(O);
        }),
        (t.unstable_next = function (e) {
          switch (F) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = F;
          }
          var n = F;
          F = t;
          try {
            return e();
          } finally {
            F = n;
          }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = $),
        (t.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var n = F;
          F = e;
          try {
            return t();
          } finally {
            F = n;
          }
        }),
        (t.unstable_scheduleCallback = function (e, n, i) {
          var a = t.unstable_now();
          if ('object' === typeof i && null !== i) {
            var u = i.delay;
            (u = 'number' === typeof u && 0 < u ? a + u : a),
              (i = 'number' === typeof i.timeout ? i.timeout : U(e));
          } else (i = U(e)), (u = a);
          return (
            (e = {
              id: z++,
              callback: n,
              priorityLevel: e,
              startTime: u,
              expirationTime: (i = u + i),
              sortIndex: -1
            }),
            u > a
              ? ((e.sortIndex = u),
                S(N, e),
                null === C(O) &&
                  e === C(N) &&
                  (D ? l() : (D = !0), o(j, u - a)))
              : ((e.sortIndex = i), S(O, e), I || R || ((I = !0), r(A))),
            e
          );
        }),
        (t.unstable_shouldYield = function () {
          var e = t.unstable_now();
          L(e);
          var n = C(O);
          return (
            (n !== M &&
              null !== M &&
              null !== n &&
              null !== n.callback &&
              n.startTime <= e &&
              n.expirationTime < M.expirationTime) ||
            i()
          );
        }),
        (t.unstable_wrapCallback = function (e) {
          var t = F;
          return function () {
            var n = F;
            F = t;
            try {
              return e.apply(this, arguments);
            } finally {
              F = n;
            }
          };
        });
    },
    function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'render', function () {
          return _;
        });
      var r = window.document,
        o = window.Math,
        l = window.HTMLElement,
        i = window.XMLHttpRequest,
        a = function (e) {
          return function (t, n, r) {
            var o = e.createElement(t);
            if (null != n)
              for (var l in n) {
                var i = n[l];
                null != i && (null != o[l] ? (o[l] = i) : o.setAttribute(l, i));
              }
            if (null != r)
              for (var a = 0, u = r.length; a < u; a++) {
                var c = r[a];
                o.appendChild('string' === typeof c ? e.createTextNode(c) : c);
              }
            return o;
          };
        },
        u = a(r),
        c = function (e, t) {
          return {}.hasOwnProperty.call(e, t);
        },
        s = function (e) {
          return ('' + e).toLowerCase();
        },
        f = 'github.com',
        d = i && 'prototype' in i && 'withCredentials' in i.prototype,
        p =
          d &&
          l &&
          'attachShadow' in l.prototype &&
          !('prototype' in l.prototype.attachShadow),
        m = function (e, t, n) {
          e.addEventListener
            ? e.addEventListener(t, n, !1)
            : e.attachEvent('on' + t, n);
        },
        h = function (e, t, n) {
          e.removeEventListener
            ? e.removeEventListener(t, n, !1)
            : e.detachEvent('on' + t, n);
        },
        g = {
          light:
            ".btn{color:#24292e;background-color:#eff3f6;border-color:#cfd3d6;border-color:rgba(27,31,35,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23fafbfc'/%3e%3cstop offset='90%25' stop-color='%23eff3f6'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#e9ebef;background-position:0 -0.5em;border-color:#caccd0;border-color:rgba(27,31,35,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f3f4f6'/%3e%3cstop offset='90%25' stop-color='%23e9ebef'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f3f4f6, #e9ebef 90%);background-image:linear-gradient(180deg, #f3f4f6, #e9ebef 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF3F4F6', endColorstr='#FFE8EAEE')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#e9ecef;border-color:#cacdd0;border-color:rgba(27,31,35,.15);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);background-image:none;filter:none}.social-count{color:#24292e;background-color:#fff;border-color:#ddddde;border-color:rgba(27,31,35,.15)}.social-count:focus,.social-count:hover{color:#0366d6}.octicon-heart{color:#ea4aaa}",
          dark:
            ".btn{color:#c9d1d9;background-color:#1a1e23;border-color:#30363d;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2321262d'/%3e%3cstop offset='90%25' stop-color='%231a1e23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #21262d, #1a1e23 90%);background-image:linear-gradient(180deg, #21262d, #1a1e23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF21262D', endColorstr='#FF191D22')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#292e33;background-position:0 -0.5em;border-color:#8b949e;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2330363d'/%3e%3cstop offset='90%25' stop-color='%23292e33'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #30363d, #292e33 90%);background-image:linear-gradient(180deg, #30363d, #292e33 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF30363D', endColorstr='#FF282D32')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#161719;border-color:#8b949e;box-shadow:inset 0 .15em .3em rgba(1,4,9,.15);background-image:none;filter:none}.social-count{color:#c9d1d9;background-color:#21262d;border-color:#30363d}.social-count:focus,.social-count:hover{color:#58a6ff}.octicon-heart{color:#bf4b8a}",
          dark_dimmed:
            ".btn{color:#adbac7;background-color:#30363d;border-color:#444c56;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23373e47'/%3e%3cstop offset='90%25' stop-color='%2330363d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #373e47, #30363d 90%);background-image:linear-gradient(180deg, #373e47, #30363d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF373E47', endColorstr='#FF2F353C')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#3c444d;background-position:0 -0.5em;border-color:#768390;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23444c56'/%3e%3cstop offset='90%25' stop-color='%233c444d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #444c56, #3c444d 90%);background-image:linear-gradient(180deg, #444c56, #3c444d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF444C56', endColorstr='#FF3B434C')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#2e3031;border-color:#768390;box-shadow:inset 0 .15em .3em rgba(28,33,40,.15);background-image:none;filter:none}.social-count{color:#adbac7;background-color:#373e47;border-color:#444c56}.social-count:focus,.social-count:hover{color:#539bf5}.octicon-heart{color:#ae4c82}"
        },
        v = function (e, t) {
          return (
            '@media(prefers-color-scheme:' + e + '){' + g[c(g, t) ? t : e] + '}'
          );
        },
        y = function (e) {
          if (null == e) return g.light;
          if (c(g, e)) return g[e];
          var t = (function (e, t, n, r) {
            null == t && (t = '&'),
              null == n && (n = '='),
              null == r && (r = window.decodeURIComponent);
            for (var o = {}, l = e.split(t), i = 0, a = l.length; i < a; i++) {
              var u = l[i];
              if ('' !== u) {
                var c = u.split(n);
                o[r(c[0])] = null != c[1] ? r(c.slice(1).join(n)) : void 0;
              }
            }
            return o;
          })(e, ';', ':', function (e) {
            return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g, '');
          });
          return (
            g[c(g, t['no-preference']) ? t['no-preference'] : 'light'] +
            v('light', t.light) +
            v('dark', t.dark)
          );
        },
        b = {
          download: {
            heights: {
              16: {
                width: 16,
                path:
                  '<path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path>'
              }
            }
          },
          eye: {
            heights: {
              16: {
                width: 16,
                path:
                  '<path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>'
              }
            }
          },
          heart: {
            heights: {
              16: {
                width: 16,
                path:
                  '<path fill-rule="evenodd" d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"></path>'
              }
            }
          },
          'issue-opened': {
            heights: {
              16: {
                width: 16,
                path:
                  '<path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path>'
              }
            }
          },
          'mark-github': {
            heights: {
              16: {
                width: 16,
                path:
                  '<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>'
              }
            }
          },
          'repo-forked': {
            heights: {
              16: {
                width: 16,
                path:
                  '<path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>'
              }
            }
          },
          'repo-template': {
            heights: {
              16: {
                width: 16,
                path:
                  '<path fill-rule="evenodd" d="M6 .75A.75.75 0 016.75 0h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 .75zm5 0a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V1.5h-.75A.75.75 0 0111 .75zM4.992.662a.75.75 0 01-.636.848c-.436.063-.783.41-.846.846a.75.75 0 01-1.485-.212A2.501 2.501 0 014.144.025a.75.75 0 01.848.637zM2.75 4a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 012.75 4zm10.5 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM2.75 8a.75.75 0 01.75.75v.268A1.72 1.72 0 013.75 9h.5a.75.75 0 010 1.5h-.5a.25.25 0 00-.25.25v.75c0 .28.114.532.3.714a.75.75 0 01-1.05 1.072A2.495 2.495 0 012 11.5V8.75A.75.75 0 012.75 8zm10.5 0a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h1.75v-2h-.75a.75.75 0 010-1.5h.75v-.25a.75.75 0 01.75-.75zM6 9.75A.75.75 0 016.75 9h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 9.75zm-1 2.5v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>'
              }
            }
          },
          star: {
            heights: {
              16: {
                width: 16,
                path:
                  '<path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>'
              }
            }
          }
        },
        w = function (e, t) {
          (e = s(e).replace(/^octicon-/, '')), c(b, e) || (e = 'mark-github');
          var n = t >= 24 && 24 in b[e].heights ? 24 : 16,
            r = b[e].heights[n];
          return (
            '<svg viewBox="0 0 ' +
            r.width +
            ' ' +
            n +
            '" width="' +
            (t * r.width) / n +
            '" height="' +
            t +
            '" class="octicon octicon-' +
            e +
            '" aria-hidden="true">' +
            r.path +
            '</svg>'
          );
        },
        k = {},
        x = function (e, t) {
          var n = k[e] || (k[e] = []);
          if (!(n.push(t) > 1)) {
            var r = (function (e) {
              var t;
              return function () {
                t || ((t = 1), e.apply(this, arguments));
              };
            })(function () {
              for (delete k[e]; (t = n.shift()); ) t.apply(null, arguments);
            });
            if (d) {
              var o = new i();
              m(o, 'abort', r),
                m(o, 'error', r),
                m(o, 'load', function () {
                  var e;
                  try {
                    e = JSON.parse(this.responseText);
                  } catch (t) {
                    return void r(t);
                  }
                  r(200 !== this.status, e);
                }),
                o.open('GET', e),
                o.send();
            } else {
              var l = this || window;
              l._ = function (e) {
                (l._ = null), r(200 !== e.meta.status, e.data);
              };
              var u = a(l.document)('script', {
                  async: !0,
                  src: e + (-1 !== e.indexOf('?') ? '&' : '?') + 'callback=_'
                }),
                c = function () {
                  l._ && l._({ meta: {} });
                };
              m(u, 'load', c),
                m(u, 'error', c),
                u.readyState &&
                  (function (e, t, n) {
                    m(e, 'readystatechange', function r() {
                      if (t.test(e.readyState))
                        return (
                          h(e, 'readystatechange', r), n.apply(this, arguments)
                        );
                    });
                  })(u, /de|m/, c),
                l.document.getElementsByTagName('head')[0].appendChild(u);
            }
          }
        },
        E = function (e, t, n) {
          var r = a(e.ownerDocument),
            o = e.appendChild(r('style', { type: 'text/css' })),
            l =
              'body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;line-height:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:20px;padding:3px 10px;font-size:12px;line-height:20px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor}' +
              y(t['data-color-scheme']);
          o.styleSheet
            ? (o.styleSheet.cssText = l)
            : o.appendChild(e.ownerDocument.createTextNode(l));
          var i = 'large' === s(t['data-size']),
            u = r(
              'a',
              {
                className: 'btn',
                href: t.href,
                rel: 'noopener',
                target: '_blank',
                title: t.title || void 0,
                'aria-label': t['aria-label'] || void 0,
                innerHTML: w(t['data-icon'], i ? 16 : 14)
              },
              [' ', r('span', {}, [t['data-text'] || ''])]
            ),
            c = e.appendChild(
              r('div', { className: 'widget' + (i ? ' widget-lg' : '') }, [u])
            ),
            d = u.hostname.replace(/\.$/, '');
          if (('.' + d).substring(d.length - f.length) !== '.' + f)
            return u.removeAttribute('href'), void n(c);
          var p = (' /' + u.pathname).split(/\/+/);
          if (
            ((((d === f || d === 'gist.' + f) && 'archive' === p[3]) ||
              (d === f &&
                'releases' === p[3] &&
                ('download' === p[4] ||
                  ('latest' === p[4] && 'download' === p[5]))) ||
              d === 'codeload.' + f) &&
              (u.target = '_top'),
            'true' === s(t['data-show-count']) &&
              d === f &&
              'sponsors' !== p[1] &&
              'orgs' !== p[1] &&
              'users' !== p[1] &&
              '-' !== p[1])
          ) {
            var m, h;
            if (!p[2] && p[1]) (h = 'followers'), (m = '?tab=followers');
            else if (!p[3] && p[2])
              (h = 'stargazers_count'), (m = '/stargazers');
            else if (p[4] || 'subscription' !== p[3])
              if (p[4] || 'fork' !== p[3]) {
                if ('issues' !== p[3]) return void n(c);
                (h = 'open_issues_count'), (m = '/issues');
              } else (h = 'forks_count'), (m = '/network/members');
            else (h = 'subscribers_count'), (m = '/watchers');
            var g = p[2] ? '/repos/' + p[1] + '/' + p[2] : '/users/' + p[1];
            x.call(this, 'https://api.github.com' + g, function (e, t) {
              if (!e) {
                var o = t[h];
                c.appendChild(
                  r(
                    'a',
                    {
                      className: 'social-count',
                      href: t.html_url + m,
                      rel: 'noopener',
                      target: '_blank',
                      'aria-label':
                        o +
                        ' ' +
                        h
                          .replace(/_count$/, '')
                          .replace('_', ' ')
                          .slice(0, o < 2 ? -1 : void 0) +
                        ' on GitHub'
                    },
                    [('' + o).replace(/\B(?=(\d{3})+(?!\d))/g, ',')]
                  )
                );
              }
              n(c);
            });
          } else n(c);
        },
        T = window.devicePixelRatio || 1,
        S = function (e) {
          return (
            (T > 1 ? o.ceil((o.round(e * T) / T) * 2) / 2 : o.ceil(e)) || 0
          );
        },
        C = function (e, t) {
          (e.style.width = t[0] + 'px'), (e.style.height = t[1] + 'px');
        },
        _ = function (e, t) {
          if (null != e && null != t)
            if (
              (e.getAttribute &&
                (e = (function (e) {
                  for (
                    var t = {
                        href: e.href,
                        title: e.title,
                        'aria-label': e.getAttribute('aria-label')
                      },
                      n = [
                        'icon',
                        'color-scheme',
                        'text',
                        'size',
                        'show-count'
                      ],
                      r = 0,
                      o = n.length;
                    r < o;
                    r++
                  ) {
                    var l = 'data-' + n[r];
                    t[l] = e.getAttribute(l);
                  }
                  return (
                    null == t['data-text'] &&
                      (t['data-text'] = e.textContent || e.innerText),
                    t
                  );
                })(e)),
              p)
            ) {
              var n = u('span');
              E(n.attachShadow({ mode: 'closed' }), e, function () {
                t(n);
              });
            } else {
              var l = u('iframe', {
                src: 'javascript:0',
                title: e.title || void 0,
                allowtransparency: !0,
                scrolling: 'no',
                frameBorder: 0
              });
              C(l, [0, 0]), (l.style.border = 'none');
              m(l, 'load', function n() {
                var i,
                  a = l.contentWindow;
                try {
                  i = a.document.body;
                } catch (u) {
                  return void r.body.appendChild(l.parentNode.removeChild(l));
                }
                h(l, 'load', n),
                  E.call(a, i, e, function (n) {
                    var r = (function (e) {
                      var t = e.offsetWidth,
                        n = e.offsetHeight;
                      if (e.getBoundingClientRect) {
                        var r = e.getBoundingClientRect();
                        (t = o.max(t, S(r.width))), (n = o.max(n, S(r.height)));
                      }
                      return [t, n];
                    })(n);
                    l.parentNode.removeChild(l),
                      (function (e, t, n) {
                        m(e, t, function r() {
                          return h(e, t, r), n.apply(this, arguments);
                        });
                      })(l, 'load', function () {
                        C(l, r);
                      }),
                      (l.src =
                        'https://unpkg.com/github-buttons@2.15.0/dist/buttons.html#' +
                        (l.name = (function (e, t, n, r) {
                          null == t && (t = '&'),
                            null == n && (n = '='),
                            null == r && (r = window.encodeURIComponent);
                          var o = [];
                          for (var l in e) {
                            var i = e[l];
                            null != i && o.push(r(l) + n + r(i));
                          }
                          return o.join(t);
                        })(e))),
                      t(l);
                  });
              }),
                r.body.appendChild(l);
            }
        };
    },
    function (e, t, n) {}
  ]
]);
//# sourceMappingURL=2.6aeddfc7.chunk.js.map
