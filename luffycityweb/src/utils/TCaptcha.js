!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: { __esModule: undefined } });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e['default'];
            }
          : function () {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 13));
})([
  function (e, t, n) {
    'use strict';
    var r =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              r === undefined && (r = n),
                Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  }
                });
            }
          : function (e, t, n, r) {
              r === undefined && (r = n), (e[r] = t[n]);
            }),
      o =
        (this && this.__exportStar) ||
        function (e, t) {
          for (var n in e) 'default' === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n);
        };
    (t.__esModule = !0), o(n(3), t), o(n(8), t), o(n(1), t), o(n(9), t), o(n(10), t);
  },
  function (e, t, n) {
    'use strict';
    (t.__esModule = !0), (t.addUrlParam = t.getQueryParam = t.getQueryMap = t.getQuery = t.getHref = void 0);
    t.getHref = function () {
      try {
        return location.href;
      } catch (e) {
        try {
          return document.URL;
        } catch (e) {}
      }
      return '';
    };
    t.getQuery = function (e) {
      var t = e ? 1 : 0;
      try {
        return location.search.substr(t);
      } catch (o) {
        try {
          var n = document.URL,
            r = n.indexOf('?');
          if (r >= 0) return n.substr(r + t);
        } catch (o) {}
      }
      return '';
    };
    t.getQueryMap = function () {
      for (var e = {}, n = t.getQuery(!0).split('&'), r = 0; r < n.length; r++) {
        var o = /(.*?)=(.*)/.exec(n[r]);
        o && (e[o[1]] = o[2]);
      }
      return e;
    };
    t.getQueryParam = function (e) {
      return t.getQueryMap()[e];
    };
    var r = function (e, t, n) {
      if (-1 != e.indexOf('?')) {
        var r = new RegExp('(\\?|&' + t + ')=[^&]*');
        e = r.test(e) ? e.replace(r, '$1=' + n) : e + '&' + t + '=' + n;
      } else e = e + '?' + t + '=' + n;
      return e;
    };
    t.addUrlParam = function (e, t) {
      var n;
      for (n in t) 'undefined' != typeof t[n] && (e = r(e, encodeURIComponent(n), encodeURIComponent('' + t[n])));
      return e;
    };
  },
  function (e, t, n) {
    'use strict';
    var r = Object.prototype.hasOwnProperty,
      o = Object.prototype.toString,
      a = Object.defineProperty,
      i = Object.getOwnPropertyDescriptor,
      c = function (e) {
        return 'function' == typeof Array.isArray ? Array.isArray(e) : '[object Array]' === o.call(e);
      },
      u = function (e) {
        if (!e || '[object Object]' !== o.call(e)) return !1;
        var t,
          n = r.call(e, 'constructor'),
          a = e.constructor && e.constructor.prototype && r.call(e.constructor.prototype, 'isPrototypeOf');
        if (e.constructor && !n && !a) return !1;
        for (t in e);
        return void 0 === t || r.call(e, t);
      },
      s = function (e, t) {
        a && '__proto__' === t.name ? a(e, t.name, { enumerable: !0, configurable: !0, value: t.newValue, writable: !0 }) : (e[t.name] = t.newValue);
      },
      l = function (e, t) {
        if ('__proto__' === t) {
          if (!r.call(e, t)) return;
          if (i) return i(e, t).value;
        }
        return e[t];
      };
    e.exports = function p() {
      var e,
        t,
        n,
        r,
        o,
        a,
        i = arguments[0],
        f = 1,
        d = arguments.length,
        _ = !1;
      for ('boolean' == typeof i && ((_ = i), (i = arguments[1] || {}), (f = 2)), (null == i || ('object' != typeof i && 'function' != typeof i)) && (i = {}); f < d; ++f)
        if (null != (e = arguments[f]))
          for (t in e)
            (n = l(i, t)),
              i !== (r = l(e, t)) &&
                (_ && r && (u(r) || (o = c(r)))
                  ? (o ? ((o = !1), (a = n && c(n) ? n : [])) : (a = n && u(n) ? n : {}), s(i, { name: t, newValue: p(_, a, r) }))
                  : void 0 !== r && s(i, { name: t, newValue: r }));
      return i;
    };
  },
  function (e, t, n) {
    'use strict';
    var r =
      (this && this.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
    (t.__esModule = !0),
      (t.addAriaModel =
        t.isTouchEventSupported =
        t.get$EventPosition =
        t.test$TouchEvent =
        t.supportsPassive =
        t.isWindow =
        t.getWindow =
        t.getOffset =
        t.isDarkMode =
        t.shakeEl =
        t.addOnceAnimationClass =
        t.animationEndName =
        t.removeClass =
        t.addClass =
        t.setCss =
        t.getCSS =
        t.supportsCSS =
        t.createGeneralIframe =
          void 0);
    var o = n(0),
      a = r(n(4));
    t.createGeneralIframe = function (e) {
      var t = document.createElement('iframe');
      return (
        (null === e || void 0 === e ? void 0 : e.id) && (t.id = e.id),
        (null === e || void 0 === e ? void 0 : e.className) && (t.className = e.className),
        t.setAttribute('frameborder', '0'),
        t.setAttribute('border', '0'),
        t.setAttribute('marginheight', '0'),
        t.setAttribute('marginwidth', '0'),
        t.setAttribute('scrolling', 'no'),
        t
      );
    };
    t.supportsCSS = function (e, t) {
      var n = document.createElement('div');
      return e in n.style && 'length' !== e && 'parentRule' !== e && ((n.style[e] = t), n.style[e] === t);
    };
    t.getCSS = function (e, t) {
      return e.currentStyle ? e.currentStyle[t] : window.getComputedStyle(e, null)[t];
    };
    t.setCss = function (e, t) {
      if (e && t && o.isObject(t)) {
        for (var n in t)
          try {
            e.style[n] = t[n];
          } catch (r) {}
        return t;
      }
    };
    t.addClass = function (e, t) {
      if (e.classList) e.classList.add(t);
      else {
        var n = e.className,
          r = n + ('' !== n ? ' ' : '') + t;
        e.className = r;
      }
    };
    (t.removeClass = function (e, t) {
      if (e.classList) return e.classList.remove(t);
      var n = ' ' + e.className + ' ',
        r = (n = n.replace(/(\s+)/gi, ' ')).replace(' ' + t + ' ', ' ');
      (r = r.replace(/(^\s+)|(\s+$)/g, '')), (e.className = r);
    }),
      (t.animationEndName = (function () {
        var e,
          t = document.createElement('fake'),
          n = { animation: 'animationend', mozAnimation: 'mozAnimationEnd', webkitAnimation: 'webkitAnimationEnd' };
        for (e in n) if (t.style[e] !== undefined) return n[e];
        return !1;
      })());
    t.addOnceAnimationClass = function (e) {
      var n = e.el,
        r = e.className,
        i = e.callback,
        c = e.duration;
      c || (c = 400), o.isArray(n) || (n = [n]);
      for (var u = 0; u < n.length; u++) {
        var s = n[u];
        t.addClass(s, r);
      }
      var l = function () {
        o.isArray(n) || (n = [n]);
        for (var e = 0; e < n.length; e++) {
          var c = n[e];
          t.removeClass(c, r);
        }
        i(), t.animationEndName && a['default'].remove(n[0], t.animationEndName, l);
      };
      t.animationEndName ? a['default'].add(n[0], t.animationEndName, l) : setTimeout(l, c);
    };
    t.shakeEl = function (e, n) {
      t.addOnceAnimationClass({ el: e, className: 'shake', callback: n });
    };
    function i(e) {
      return c(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow);
    }
    function c(e) {
      return null != e && e == e.window;
    }
    function u(e) {
      return /^touch/.test(e.type);
    }
    (t.isDarkMode = function () {
      var e;
      return null === (e = window.matchMedia) || void 0 === e ? void 0 : e.call(window, '(prefers-color-scheme: dark)').matches;
    }),
      (t.getOffset = function (e) {
        var t,
          n,
          r = { top: 0, left: 0 },
          o = null === e || void 0 === e ? void 0 : e.ownerDocument;
        if (o) {
          (t = o.documentElement), 'undefined' != typeof e.getBoundingClientRect && (r = e.getBoundingClientRect());
          var a = 0,
            c = 0;
          return (n = i(o)) && ((a = (n.pageYOffset || t.scrollTop) - (t.clientTop || 0)), (c = (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0))), { top: r.top + a, left: r.left + c };
        }
      }),
      (t.getWindow = i),
      (t.isWindow = c),
      (t.supportsPassive = (function () {
        var e = !1;
        try {
          var t = Object.defineProperty({}, 'passive', {
            get: function () {
              e = !0;
            }
          });
          window.addEventListener('testPassive', null, t), window.removeEventListener('testPassive', null, t);
        } catch (n) {}
        return e;
      })()),
      (t.test$TouchEvent = u),
      (t.get$EventPosition = function (e) {
        if (u(e)) {
          var t;
          e.originalEvent && (t = e.originalEvent);
          var n = ((null === t || void 0 === t ? void 0 : t.touches) || [])[0];
          return n ? { x: n.clientX, y: n.clientY } : null;
        }
        return { x: e.pageX, y: e.pageY };
      }),
      (t.isTouchEventSupported = function () {
        return 'ontouchstart' in document.createElement('div');
      }),
      (t.addAriaModel = function (e) {
        try {
          e.setAttribute('role', 'dialog'), e.setAttribute('aria-modal', 'true'), e.setAttribute('aria-labelledby', '\u9a8c\u8bc1\u7801');
        } catch (t) {}
      });
  },
  function (e, t, n) {
    'use strict';
    t.__esModule = !0;
    t['default'] = {
      add: function (e, t, n) {
        e && (e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent('on' + t, n) : (e['on' + t] = n));
      },
      remove: function (e, t, n) {
        e && (e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent ? e.detachEvent('on' + t, n) : (e['on' + t] = null));
      }
    };
  },
  function (e, t, n) {
    'use strict';
    function r(e, n, r) {
      return 'terror_' + t.ErrorCode[e] + '_' + n + '_' + Math.floor(new Date().getTime() / 1e3) + (r ? '_' + r : '');
    }
    function o() {
      return '@' + Math.random().toString(36).substr(2);
    }
    (t.__esModule = !0),
      (t.getRandStr = t.getErrorRes = t.getErrorTicket = t.ErrorCode = void 0),
      (t.ErrorCode = {
        ENTRYJS_LOAD_ERROR: 1001,
        CAPTCHA_SHOW_TIMEOUT: 1002,
        FRAMEJS_LOAD_TIMEOUT: 1003,
        FRAMEJS_LOAD_ERROR: 1004,
        FRAMEJS_RUN_ERROR: 1005,
        GET_CAPTCHA_CONFIG_REQUEST_ERROR: 1006,
        PRE_TEMPLATE_LOAD_TIMEOUT: 1007,
        IFRAME_LOAD_TIMEOUT: 1008,
        LIB_JQ_LOAD_ERROR: 1009,
        CAPTCHA_JS_LOAD_ERROR: 1010,
        CAPTCHA_JS_RUN_ERROR: 1011,
        REFRESH_ERROR: 1012,
        VERIFY_ERROR: 1013
      }),
      (t.getErrorTicket = r),
      (t.getErrorRes = function (e, n, a) {
        return { ret: 0, randstr: o(), ticket: r(e, n || '', a), errorCode: t.ErrorCode[e], errorMessage: e.toLowerCase() };
      }),
      (t.getRandStr = o);
  },
  function (e, t, n) {
    'use strict';
    (t.__esModule = !0),
      (t.getScriptUrl = t.getScript = void 0),
      (t.getScript = function r(e, t) {
        var n = 3,
          o = e.src,
          a = e.successCheck,
          i = e.success,
          c = e.error,
          u = e.crossOrigin,
          s = Boolean(e.inHead) ? document.getElementsByTagName('head').item(0) : document.getElementsByTagName('body').item(0),
          l = !1,
          p = document.createElement('script');
        function f(e) {
          if (!l) {
            var t = !1;
            e && 'type' in e && (t = 'load' === e.type),
              'readyState' in this && /^(loaded|complete)$/.test(this.readyState) && (t = !0),
              t && (!a || a() ? (_(), (l = !0), null === i || void 0 === i || i()) : d());
          }
        }
        function d() {
          l || (_(), (l = !0), (t = t || 1) >= n ? null === c || void 0 === c || c() : r({ src: o, successCheck: a, success: i, error: c }, t + 1));
        }
        function _() {
          try {
            s && p && s.removeChild(p);
          } catch (c) {}
        }
        (p.type = 'text/javascript'),
          (p.async = !0),
          (p.src = o),
          u && p.setAttribute('crossorigin', u),
          'onload' in p ? (p.onload = f) : (p.onreadystatechange = f),
          (p.onerror = d),
          null === s || void 0 === s || s.appendChild(p);
      }),
      (t.getScriptUrl = function () {
        try {
          throw new Error('domain');
        } catch (n) {
          var e = null === n || void 0 === n ? void 0 : n.stack;
          if (!e) return;
          var t = ('' + e).match(/(https?:\/\/.*\.js)/);
          return { url: null === t || void 0 === t ? void 0 : t[1], stack: e };
        }
      });
  },
  function (e, t, n) {
    'use strict';
    var r = (function () {
      var e = 1,
        t = /subsid=(\d+)/.exec(location.href);
      t && (e = parseInt(t[1], 10) + 1);
      var n = function (t, n) {
        var r = n || e;
        return (t = /subsid=\d+/.test(t) ? t.replace(/subsid=\d+/g, 'subsid=' + r) : t + '&subsid=' + r), n || e++, t;
      };
      return (
        (n.get = function () {
          return e;
        }),
        (n.bind = function () {
          var t = e++;
          return function (e) {
            return n(e, t);
          };
        }),
        n
      );
    })();
    e.exports = r;
  },
  function (e, t, n) {
    'use strict';
    (t.__esModule = !0), (t.isArray = t.isObject = void 0);
    var r = function (e) {
      return function (t) {
        return Object.prototype.toString.call(t) === '[object ' + e + ']';
      };
    };
    (t.isObject = r('Object')), (t.isArray = r('Array'));
  },
  function (e, t, n) {
    'use strict';
    var r =
      (this && this.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
    (t.__esModule = !0), (t.shrinkArraySizeFromRuisun = t.shrinkArraySize = t.extend = void 0);
    var o = r(n(2));
    (t.extend = Object.assign || o['default']),
      (t.shrinkArraySize = function (e, t, n) {
        var r = e.length;
        if (r <= t) return e;
        var o = [];
        (n = n || {}).keepStart && ((t -= 1), (r -= 1), o.push(e[0])), n.keepLast && ((r -= 1), (t -= 1));
        for (var a = t / r, i = 0, c = 0; c < r; c++) (i += a) >= 1 && (o.push(e[c]), (i -= 1));
        return n.keepLast && o.push(e[e.length - 1]), o;
      }),
      (t.shrinkArraySizeFromRuisun = function (e, t, n) {
        var r = e.length;
        if (r <= t) return e;
        (n = n || {}).keepStart && (r -= 1), n.keepLast && ((r -= 1), (t -= 1));
        for (var o = Math.floor(r / (t - 1)), a = 0, i = []; i.length < t; ) i.push(e[a]), (a += o);
        return n.keepLast && i.push(e[e.length - 1]), i;
      });
  },
  function (e, t, n) {
    'use strict';
    (t.__esModule = !0), (t.isWebWorkerSupport = t.setWebworkerSupportCache = t.getWebworkerSupportCache = void 0);
    var r = 'captcha_webworker_supported';
    (t.getWebworkerSupportCache = function () {
      try {
        return localStorage.getItem(r);
      } catch (e) {}
      return !1;
    }),
      (t.setWebworkerSupportCache = function (e) {
        try {
          localStorage.setItem(r, e);
        } catch (t) {}
      }),
      (t.isWebWorkerSupport = function () {
        var e = self || window;
        try {
          try {
            var t = void 0;
            try {
              t = new e.Blob(['']);
            } catch (a) {
              (t = new (e.BlobBuilder || e.WebKitBlobBuilder || e.MozBlobBuilder || e.MSBlobBuilder)()).append(''), (t = t.getBlob());
            }
            var n = e.URL || e.webkitURL,
              r = n.createObjectURL(t),
              o = new e.Worker(r);
            return n.revokeObjectURL(r), o;
          } catch (a) {
            return new e.Worker('data:application/javascript,'.concat(encodeURIComponent('')));
          }
        } catch (a) {
          return null;
        }
      });
  },
  function (module, exports, __webpack_require__) {
    'use strict';
    var _typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
          };
    'object' !== ('undefined' == typeof JSON ? 'undefined' : _typeof(JSON)) && (JSON = {}),
      (function () {
        var rx_one = /^[\],:{}\s]*$/,
          rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
          rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
          rx_four = /(?:^|:|,)(?:\s*\[)+/g,
          rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
          rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
          gap,
          indent,
          meta,
          rep;
        function f(e) {
          return e < 10 ? '0' + e : e;
        }
        function this_value() {
          return this.valueOf();
        }
        function quote(e) {
          return (
            (rx_escapable.lastIndex = 0),
            rx_escapable.test(e)
              ? '"' +
                e.replace(rx_escapable, function (e) {
                  var t = meta[e];
                  return 'string' == typeof t ? t : '\\u' + ('0000' + e.charCodeAt(0).toString(16)).slice(-4);
                }) +
                '"'
              : '"' + e + '"'
          );
        }
        function str(e, t) {
          var n,
            r,
            o,
            a,
            i,
            c = gap,
            u = t[e];
          switch (
            (u && 'object' === (void 0 === u ? 'undefined' : _typeof(u)) && 'function' == typeof u.toJSON && (u = u.toJSON(e)),
            'function' == typeof rep && (u = rep.call(t, e, u)),
            void 0 === u ? 'undefined' : _typeof(u))
          ) {
            case 'string':
              return quote(u);
            case 'number':
              return isFinite(u) ? String(u) : 'null';
            case 'boolean':
            case 'null':
              return String(u);
            case 'object':
              if (!u) return 'null';
              if (((gap += indent), (i = []), '[object Array]' === Object.prototype.toString.apply(u))) {
                for (a = u.length, n = 0; n < a; n += 1) i[n] = str(n, u) || 'null';
                return (o = 0 === i.length ? '[]' : gap ? '[\n' + gap + i.join(',\n' + gap) + '\n' + c + ']' : '[' + i.join(',') + ']'), (gap = c), o;
              }
              if (rep && 'object' === (void 0 === rep ? 'undefined' : _typeof(rep)))
                for (a = rep.length, n = 0; n < a; n += 1) 'string' == typeof rep[n] && (o = str((r = rep[n]), u)) && i.push(quote(r) + (gap ? ': ' : ':') + o);
              else for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (o = str(r, u)) && i.push(quote(r) + (gap ? ': ' : ':') + o);
              return (o = 0 === i.length ? '{}' : gap ? '{\n' + gap + i.join(',\n' + gap) + '\n' + c + '}' : '{' + i.join(',') + '}'), (gap = c), o;
          }
        }
        'function' != typeof Date.prototype.toJSON &&
          ((Date.prototype.toJSON = function () {
            return isFinite(this.valueOf())
              ? this.getUTCFullYear() + '-' + f(this.getUTCMonth() + 1) + '-' + f(this.getUTCDate()) + 'T' + f(this.getUTCHours()) + ':' + f(this.getUTCMinutes()) + ':' + f(this.getUTCSeconds()) + 'Z'
              : null;
          }),
          (Boolean.prototype.toJSON = this_value),
          (Number.prototype.toJSON = this_value),
          (String.prototype.toJSON = this_value)),
          'function' != typeof JSON.stringify &&
            ((meta = { '\b': '\\b', '\t': '\\t', '\n': '\\n', '\f': '\\f', '\r': '\\r', '"': '\\"', '\\': '\\\\' }),
            (JSON.stringify = function (e, t, n) {
              var r;
              if (((gap = ''), (indent = ''), 'number' == typeof n)) for (r = 0; r < n; r += 1) indent += ' ';
              else 'string' == typeof n && (indent = n);
              if (((rep = t), t && 'function' != typeof t && ('object' !== (void 0 === t ? 'undefined' : _typeof(t)) || 'number' != typeof t.length))) throw new Error('JSON.stringify');
              return str('', { '': e });
            })),
          'function' != typeof JSON.parse &&
            (JSON.parse = function (text, reviver) {
              var j;
              function walk(e, t) {
                var n,
                  r,
                  o = e[t];
                if (o && 'object' === (void 0 === o ? 'undefined' : _typeof(o))) for (n in o) Object.prototype.hasOwnProperty.call(o, n) && ((r = walk(o, n)) !== undefined ? (o[n] = r) : delete o[n]);
                return reviver.call(e, t, o);
              }
              if (
                ((text = String(text)),
                (rx_dangerous.lastIndex = 0),
                rx_dangerous.test(text) &&
                  (text = text.replace(rx_dangerous, function (e) {
                    return '\\u' + ('0000' + e.charCodeAt(0).toString(16)).slice(-4);
                  })),
                rx_one.test(text.replace(rx_two, '@').replace(rx_three, ']').replace(rx_four, '')))
              )
                return (j = eval('(' + text + ')')), 'function' == typeof reviver ? walk({ '': j }, '') : j;
              throw new SyntaxError('JSON.parse');
            });
      })();
  },
  function (e, t, n) {
    'use strict';
    function r(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    var o,
      a,
      i = n(7),
      c = {
        ERROR_TYPE_FRAMEJS_DOWNLOAD_FAIL: 16,
        ERROR_TYPE_JSONP_PREHANDLE: 17,
        ERROR_TYPE_FRAMEJS_CODE_ERROR: 18,
        CALLBACK_NAME: 19,
        IFRAME_CREATE_ERROR: 25,
        IFRAME_POPUP_CREATE_ERROR: 26,
        IFRAME_FULL_CREATE_ERROR: 27,
        OTHER_DOMAIN_MONITOR: 38,
        FRAME_JS_LOAD_TIMEOUT: 40
      },
      u = {
        ERROR_TYPE_FRAMEJS_DOWNLOAD_FAIL: 'ERROR_TYPE_FRAMEJS_DOWNLOAD_FAIL',
        ERROR_TYPE_JSONP_PREHANDLE: 'ERROR_TYPE_JSONP_PREHANDLE',
        ERROR_TYPE_FRAMEJS_CODE_ERROR: 'ERROR_TYPE_FRAMEJS_CODE_ERROR',
        CALLBACK_NAME: 'CALLBACK_NAME'
      },
      s =
        ((o = document.referrer),
        (a = location.href || document.URL),
        (o = o.length > 512 ? o.substr(0, 512) : o),
        (a = a.length > 1024 ? a.substr(0, 1024) : a),
        ['referer=' + encodeURIComponent(o), 'href=' + encodeURIComponent(a)].join('&')),
      l = void 0,
      p = [];
    function f(e, t, n) {
      try {
        if (void 0 === l) return void p.push([e, t, n]);
        if (l) return;
        (n = n || u[e]).length > 1024 && n.substr(0, 1024);
        var r = ['type=' + (e = c[e]), 'appid=' + t, 'reason=' + encodeURIComponent(n)],
          o = 'https://sv.aq.qq.com/cn2/manage/mbtoken/cap_monitor?' + s + '&' + r.join('&');
        new Image().src = i(o);
      } catch (a) {}
    }
    e.exports = {
      type: c,
      send: f,
      perfectStack: function (e) {
        var t = '';
        e &&
          e.stack &&
          (t = e.stack
            .replace(/\n/gi, '')
            .split(/\bat\b/)
            .join('\n')
            .replace(/\?[^:]+/gi, ''));
        try {
          var n = e.toString();
          t.indexOf(n) < 0 && (t = n + '@' + t);
        } catch (r) {}
        return t;
      },
      setGlobalStatus: function (e) {
        if (!(l = e))
          for (var t = 0; t < p.length; t++) {
            var n = p[t];
            f.apply(undefined, r(n));
          }
      }
    };
  },
  function (module, exports, __webpack_require__) {
    'use strict';
    var _typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
          };
    if (!0 === window.__TencentCaptchaExists__) throw new Error('\u8bf7\u52ff\u591a\u6b21\u5f15\u7528\u817e\u8baf\u9a8c\u8bc1\u7801\u7684\u63a5\u5165js');
    window.__TencentCaptchaExists__ = !0;
    var _require = __webpack_require__(5),
      getErrorRes = _require.getErrorRes,
      Executor = __webpack_require__(14),
      _require2 = __webpack_require__(6),
      getScriptUrl = _require2.getScriptUrl,
      _require3 = __webpack_require__(1),
      getHref = _require3.getHref;
    __webpack_require__(11);
    var domReady = __webpack_require__(15),
      btoa = window.btoa || __webpack_require__(16),
      extend = Object.assign || __webpack_require__(2),
      loadFrameJs = __webpack_require__(17),
      eventListener = __webpack_require__(18),
      isIEVar = __webpack_require__(19),
      isElement = __webpack_require__(20),
      getScriptDomain = __webpack_require__(21),
      scriptDomain = getScriptDomain() || '',
      isWechatDevtools = navigator.userAgent && /wechatdevtools/.test(navigator.userAgent),
      isWindows = /windows/i.test(navigator.userAgent),
      isMobile = !isWindows && ('ontouchstart' in window || 'ontouchstart' in document.createElement('div') || isWechatDevtools),
      capDomain = 'https://t.captcha.qq.com';
    capDomain || (capDomain = scriptDomain), (window.AqSCodeCapDomain = capDomain);
    var cdnDomain = 'https://captcha.gtimg.com/1',
      grayscaleFrameJs = '/tcaptcha-frame.346c1088.js',
      capError = __webpack_require__(12),
      capObj = void 0,
      initQueueCount = 0,
      initQueue = [],
      loadErrorTimeout = !1,
      defaultOpt = {
        type: 'popup',
        pos: isIEVar(6) ? 'absolute' : 'fixed',
        lang: 2052,
        showHeader: isMobile,
        needFeedBack: true,
        themeColor: '',
        tcaptchaFlag: !0,
        gettype: 'cap_union_prehandle',
        domain: capDomain,
        htdoc_path: capDomain,
        global: false
      },
      noop = function () {},
      callbackWrap = function (e, t) {
        return function (n) {
          'object' === (void 0 === n ? 'undefined' : _typeof(n)) && (n = extend({ bizState: e.options.bizState, appid: e.options.appid }, n)), t && t(n);
        };
      },
      executor = new Executor(function () {
        if (initQueue.length > 0) {
          for (var e = 0; e < initQueue.length; e++) initQueue[e].instance.show();
          initQueue.length = 0;
        }
      }, 0),
      Captcha = function Captcha($btn, appid, _tcallback_, opts) {
        var bizState = void 0;
        if (isElement($btn))
          if (appid && 'object' === (void 0 === appid ? 'undefined' : _typeof(appid))) (opts = appid), (appid = null), (_tcallback_ = null);
          else {
            if (((appid = appid || $btn.getAttribute('data-appid')), !_tcallback_)) {
              var callbackName = $btn.getAttribute('data-cbfn');
              try {
                _tcallback_ = eval('window.' + callbackName);
              } catch (e) {
                throw new Error('Lost `callback`');
              }
            }
            bizState = $btn.getAttribute('data-biz-state');
          }
        else {
          if ('string' != typeof $btn || 'function' != typeof appid) throw new Error('Arguments error.');
          (opts = _tcallback_), (_tcallback_ = appid), (appid = $btn), ($btn = null);
        }
        (opts = opts || {}), (opts.callback = _tcallback_ || opts.callback), (opts.start = opts.start || noop), (opts.end = opts.end || noop);
        var readyCallback = 'function' == typeof opts.ready ? opts.ready : noop;
        if (
          ((opts.ready = function (e) {
            readyCallback.call(this, e);
          }),
          (opts.appid = appid || opts.appid),
          (opts.bizState = bizState || opts.bizState),
          (opts.fwidth = parseFloat(opts.fwidth) || 0),
          (opts.sdkOpts = opts.sdkOpts || null),
          (opts.ele = $btn),
          (this.options = opts),
          'function' != typeof opts.callback)
        )
          throw new Error('Lost `callback`');
        if (((this.initOpts = extend({}, defaultOpt, opts)), this.langFun(), $btn)) {
          var that = this;
          eventListener.add($btn, 'click', function () {
            that.show();
          });
        }
        this.checkInOwnDomain(appid), capError.setGlobalStatus(!0 === opts.global);
      },
      showTimeout = null;
    Captcha.prototype = {
      show: function () {
        var e = this;
        if (executor.isDone) this.__show__(), null !== showTimeout && (clearTimeout(showTimeout), (showTimeout = null));
        else {
          for (var t = 0; t < initQueue.length; t++) if (initQueue[t].instance === this) return;
          var n = (initQueueCount += 1);
          initQueue.push({ instance: this, index: n }),
            null === showTimeout &&
              (showTimeout = setTimeout(function () {
                showTimeout = null;
                for (var t = 0; t < initQueue.length; t++) {
                  if (initQueue[t].index === n) return initQueue.splice(t, 1), e.initOpts.callback(getErrorRes('CAPTCHA_SHOW_TIMEOUT', e.initOpts.appid));
                }
              }, 1e4));
        }
      },
      __show__: function () {
        var e = this.initOpts;
        if ('undefined' == typeof window.AqSCode)
          return loadErrorTimeout
            ? (capError.send('FRAME_JS_LOAD_TIMEOUT', '', grayscaleFrameJs), e.callback(getErrorRes('FRAMEJS_LOAD_TIMEOUT', e.appid)))
            : (capError.send('ERROR_TYPE_FRAMEJS_DOWNLOAD_FAIL', '', grayscaleFrameJs), e.callback(getErrorRes('FRAMEJS_LOAD_ERROR', e.appid)));
        this.destroy();
        var t = [];
        t.push('aid=' + e.appid),
          t.push('protocol=https'),
          t.push('accver=1'),
          t.push('showtype=' + e.type),
          t.push('ua=' + encodeURIComponent(btoa((navigator.userAgent || '').replace(/[\u00ff-\uffff]+/g, '')))),
          t.push('noheader=' + ('' + e.showHeader == 'false' ? '1' : '0'));
        var n = e.needFeedBack;
        'string' == typeof n && t.push('fbUrl=' + n), t.push('fb=' + (n ? '1' : '0'));
        var r = e.enableDarkMode;
        'force' !== r && (r = r ? '1' : '0');
        var o = e.enableAged;
        t.push('aged=' + ('force' === o ? '1' : '0')),
          t.push('enableAged=' + (o ? '1' : '0')),
          t.push('enableDarkMode=' + r),
          e.sid && t.push('sid=' + e.sid),
          (e.uid = '' + (e.uin || '')),
          t.push('grayscale=1'),
          (e.grayscale = 1),
          isMobile && 'point' !== e.type
            ? (t.push('clientype=1'), (e.clientype = 1), e.forceLang && t.push('lang=' + e.forceLang), (e.params = '?' + t.join('&')))
            : (t.push('clientype=2'),
              (e.clientype = 2),
              e.forceLang && t.push('lang=' + e.forceLang),
              (e.params = '?' + t.join('&')),
              (e.s_type_suffix = '?' + t.join('&')),
              (e.src = capDomain + '/template/placeholder_v2.html' + e.s_type_suffix),
              (e.s_type = capDomain + '/cap_union_prehandle' + e.s_type_suffix),
              (e.slide_src = capDomain + '/template/new_slide_placeholder.html' + e.s_type_suffix)),
          (e.fb = '' + e.needFeedBack == 'false' ? '0' : '1'),
          (e.fbUrl = 'string' == typeof e.needFeedBack && encodeURIComponent(e.needFeedBack)),
          (e.frameJs = grayscaleFrameJs);
        try {
          (capObj = new AqSCode(e)).listen(callbackWrap(this, e.callback), callbackWrap(this, e.ready)),
            (e.top || e.left) && capObj.initPos({ top: e.top || undefined, left: e.left || undefined }),
            capObj.create();
        } catch (a) {
          capError.send('ERROR_TYPE_FRAMEJS_CODE_ERROR', e.appid, 'entry create err: ' + a.message);
        }
      },
      langFun: function () {
        if (this.initOpts.forceLang) {
          var e = { 'zh-cn': '2052', 'zh-hk': '1028', en: '1033' },
            t = this.initOpts.forceLang;
          e[t] ? ((this.initOpts.lang = e[t]), (this.initOpts.forceLang = e[t]), (this.initOpts.forcestyle = 1)) : (this.initOpts.forceLang = '');
        }
      },
      destroy: function () {
        capObj && capObj.destroy && capObj.destroy();
      },
      refresh: function () {
        capObj && capObj.refresh && capObj.refresh();
      },
      getTicket: function () {
        if (capObj && capObj.getTicket) {
          var e = null;
          return (
            callbackWrap(this, function (t) {
              e = t;
            })(capObj.getTicket()),
            e
          );
        }
        return null;
      },
      checkInOwnDomain: function (e) {
        try {
          var t = [/captcha\.qq\.com/, /\.captcha\.qcloud\.com/, /captcha\.myqcloud\.com/, /captcha\.253\.com/, /t-captcha\.gjacky\.com/],
            n = getScriptUrl();
          if (!n) return;
          for (var r = n.stack, o = !1, a = 0; a < t.length; a++) {
            var i = t[a];
            if (r.match(i)) {
              o = !0;
              break;
            }
          }
          o || capError.send('OTHER_DOMAIN_MONITOR', e, getHref() + ' ' + r);
        } catch (c) {}
      }
    };
    var autoBindBtn = function () {
        var e = document.getElementById('TencentCaptcha');
        e && new Captcha(e);
      },
      domReadyCb = function () {
        try {
          autoBindBtn();
        } catch (e) {}
      };
    executor.exec(function (e) {
      var t = !1;
      domReady(function () {
        t || ((t = !0), domReadyCb(), e());
      });
    }),
      executor.exec(function (e) {
        loadFrameJs(
          grayscaleFrameJs,
          cdnDomain,
          capDomain,
          function () {
            return 'undefined' != typeof window.AqSCode;
          },
          function () {
            e();
          },
          function (t) {
            (loadErrorTimeout = !0 === t), e();
          }
        );
      }),
      (window.TencentCaptcha = Captcha);
  },
  function (e, t, n) {
    'use strict';
    var r = function (e, t) {
      (this.i = 0), (this.doneCallback = e), (this.isDone = !1), (this.timeout = t || 0);
      var n = this;
      this.immediateExec = setTimeout(function () {
        n.doneCheck();
      }, 0);
    };
    (r.prototype = {
      doneCheck: function (e, t) {
        try {
          e && e(t);
        } catch (n) {}
        if ((this.i--, this.i <= 0))
          try {
            (this.isDone = !0), this.doneCallback();
          } catch (n) {}
      },
      exec: function (e, t, n) {
        clearTimeout(this.immediateExec);
        var r = !1,
          o = '',
          a = this;
        this.i++, this.i > 0 && (this.isDone = !1);
        try {
          (o = e(function (e) {
            r ||
              ((r = !0),
              setTimeout(function () {
                a.doneCheck(t, e);
              }, 0));
          })) &&
            ((r = !0),
            setTimeout(function () {
              a.doneCheck(t, o);
            }, 0));
        } catch (i) {}
        (n = n || this.timeout || 0) > 0 &&
          setTimeout(function () {
            r || ((r = !0), a.doneCheck(t, ''));
          }, n);
      }
    }),
      (e.exports = r);
  },
  function (e, t, n) {
    e.exports = (function (e) {
      var t,
        n = [],
        r = document,
        o = r.documentElement,
        a = o.doScroll,
        i = (a ? /^loaded|^c/ : /^loaded|c/).test(r.readyState);
      function c(e) {
        for (i = 1; (e = n.shift()); ) e();
      }
      return (
        r.addEventListener &&
          r.addEventListener(
            'DOMContentLoaded',
            (t = function () {
              r.removeEventListener('DOMContentLoaded', t, !1), c();
            }),
            !1
          ),
        a &&
          r.attachEvent(
            'onreadystatechange',
            (t = function () {
              /^c/.test(r.readyState) && (r.detachEvent('onreadystatechange', t), c());
            })
          ),
        (e = a
          ? function (t) {
              self != top
                ? i
                  ? t()
                  : n.push(t)
                : (function () {
                    try {
                      o.doScroll('left');
                    } catch (n) {
                      return setTimeout(function () {
                        e(t);
                      }, 50);
                    }
                    t();
                  })();
            }
          : function (e) {
              i ? e() : n.push(e);
            })
      );
    })();
  },
  function (e, t, n) {
    'use strict';
    var r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
      o = function (e) {
        var t = [0, 2, 1][e.length % 3],
          n = (e.charCodeAt(0) << 16) | ((e.length > 1 ? e.charCodeAt(1) : 0) << 8) | (e.length > 2 ? e.charCodeAt(2) : 0);
        return [r.charAt(n >>> 18), r.charAt((n >>> 12) & 63), t >= 2 ? '=' : r.charAt((n >>> 6) & 63), t >= 1 ? '=' : r.charAt(63 & n)].join('');
      };
    e.exports = function (e) {
      return e.replace(/[\s\S]{1,3}/g, o);
    };
  },
  function (e, t, n) {
    'use strict';
    var r = 2;
    e.exports = function o(e, t, n, a, i, c, u) {
      u = u || 1;
      var s = !1,
        l = document.createElement('script');
      function p(e) {
        s || (((e && 'load' === e.type) || /^(loaded|complete)$/.test(this.readyState)) && (a() ? ((s = !0), i && i()) : f()));
      }
      (l.type = 'text/javascript'), (l.async = !0), (l.src = (u > 1 ? n : t) + e), 'onload' in l ? (l.onload = p) : (l.onreadystatechange = p);
      var f = function (p) {
        s || ((s = !0), document.getElementsByTagName('head').item(0).removeChild(l), u >= r ? c && c(p) : o(e, t, n, a, i, c, u + 1));
      };
      (l.onerror = f),
        document.getElementsByTagName('head').item(0).appendChild(l),
        setTimeout(function () {
          f(!0);
        }, 15e3);
    };
  },
  function (e, t, n) {
    'use strict';
    e.exports = {
      add: function (e, t, n) {
        e && (e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent('on' + t, n) : (e['on' + t] = n));
      },
      remove: function (e, t, n) {
        e && (e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent ? e.detachEvent('on' + t, n) : (e['on' + t] = null));
      }
    };
  },
  function (e, t, n) {
    'use strict';
    e.exports = function (e) {
      var t = document.createElement('b');
      return (t.innerHTML = '\x3c!--[if IE ' + e + ']><i></i><![endif]--\x3e'), t.getElementsByTagName('i') && 1 === t.getElementsByTagName('i').length;
    };
  },
  function (e, t, n) {
    'use strict';
    var r =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
          };
    e.exports = function (e) {
      try {
        return e instanceof HTMLElement;
      } catch (t) {
        return 'object' === (void 0 === e ? 'undefined' : r(e)) && 1 === e.nodeType && 'object' === r(e.style) && 'object' === r(e.ownerDocument);
      }
    };
  },
  function (e, t, n) {
    'use strict';
    var r = n(0).getHref,
      o = function (e) {
        var t = e.split('?');
        if (2 !== t.length) return {};
        for (var n = t[1] && t[1].split('&'), r = {}, o = 0; o < n.length; o++) {
          var a = n[o].split('=');
          a[1] && (r[a[0]] = decodeURIComponent(a[1]));
        }
        return r;
      },
      a = function () {
        for (var e = document.getElementsByTagName('script'), t = 0; t < e.length; t++) {
          var n = e[t];
          if (n.src.match(/captcha\.js/i)) return n;
        }
      };
    e.exports = function () {
      try {
        var e = document.getElementById('CaptchaScript') || a() || '';
        if (!e) return '';
        var t = e.src,
          n = o(t).domain;
        if (n) return n;
        var i = /(https?\:\/\/[0-9a-zA-Z-:\.]+)\//i,
          c = t.match(i) || r().match(i);
        return c ? c[1] : '';
      } catch (u) {
        return '';
      }
    };
  }
]);
