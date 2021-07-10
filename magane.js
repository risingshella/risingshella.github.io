! function() {
    "use strict";

    function t() {}

    function e(t) {
        return t()
    }

    function n() {
        return Object.create(null)
    }

    function i(t) {
        t.forEach(e)
    }

    function r(t) {
        return "function" == typeof t
    }

    function o(t, e) {
        return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t
    }

    function a(t, e, n, i) {
        return t[1] && i ? function(t, e) {
            for (const n in e) t[n] = e[n];
            return t
        }(n.ctx.slice(), t[1](i(e))) : n.ctx
    }
    const s = "undefined" != typeof window;
    let c = s ? () => window.performance.now() : () => Date.now(),
        l = s ? t => requestAnimationFrame(t) : t;
    const d = new Set;

    function u(t) {
        d.forEach(e => {
            e.c(t) || (d.delete(e), e.f())
        }), 0 !== d.size && l(u)
    }

    function f(t, e) {
        t.appendChild(e)
    }

    function p(t, e, n) {
        t.insertBefore(e, n || null)
    }

    function h(t) {
        t.parentNode.removeChild(t)
    }

    function v(t, e) {
        for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e)
    }

    function m(t) {
        return document.createElement(t)
    }

    function g(t) {
        return document.createTextNode(t)
    }

    function b() {
        return g(" ")
    }

    function y() {
        return g("")
    }

    function x(t, e, n, i) {
        return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i)
    }

    function k(t) {
        return function(e) {
            return e.stopPropagation(), t.call(this, e)
        }
    }

    function w(t, e, n) {
        null == n ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
    }

    function E(t, e) {
        e = "" + e, t.data !== e && (t.data = e)
    }

    function S(t, e) {
        (null != e || t.value) && (t.value = e)
    }

    function O(t, e, n, i) {
        t.style.setProperty(e, n, i ? "important" : "")
    }

    function _(t, e, n) {
        t.classList[n ? "add" : "remove"](e)
    }
    class M {
        constructor(t, e = null) {
            this.e = m("div"), this.a = e, this.u(t)
        }
        m(t, e = null) {
            for (let n = 0; n < this.n.length; n += 1) p(t, this.n[n], e);
            this.t = t
        }
        u(t) {
            this.e.innerHTML = t, this.n = Array.from(this.e.childNodes)
        }
        p(t) {
            this.d(), this.u(t), this.m(this.t, this.a)
        }
        d() {
            this.n.forEach(h)
        }
    }
    let A;

    function $(t) {
        A = t
    }

    function C() {
        if (!A) throw new Error("Function called outside component initialization");
        return A
    }

    function L(t) {
        C().$$.on_mount.push(t)
    }

    function z() {
        const t = C();
        return (e, n) => {
            const i = t.$$.callbacks[e];
            if (i) {
                const r = function(t, e) {
                    const n = document.createEvent("CustomEvent");
                    return n.initCustomEvent(t, !1, !1, e), n
                }(e, n);
                i.slice().forEach(e => {
                    e.call(t, r)
                })
            }
        }
    }
    const T = [],
        j = [],
        N = [],
        W = [],
        R = Promise.resolve();
    let I = !1;

    function P(t) {
        N.push(t)
    }

    function D() {
        const t = new Set;
        do {
            for (; T.length;) {
                const t = T.shift();
                $(t), F(t.$$)
            }
            for (; j.length;) j.pop()();
            for (let e = 0; e < N.length; e += 1) {
                const n = N[e];
                t.has(n) || (n(), t.add(n))
            }
            N.length = 0
        } while (T.length);
        for (; W.length;) W.pop()();
        I = !1
    }

    function F(t) {
        if (null !== t.fragment) {
            t.update(), i(t.before_update);
            const e = t.dirty;
            t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(P)
        }
    }
    const B = new Set;
    let V;

    function q() {
        V = {
            r: 0,
            c: [],
            p: V
        }
    }

    function H() {
        V.r || i(V.c), V = V.p
    }

    function U(t, e) {
        t && t.i && (B.delete(t), t.i(e))
    }

    function X(t, e, n, i) {
        if (t && t.o) {
            if (B.has(t)) return;
            B.add(t), V.c.push(() => {
                B.delete(t), i && (n && t.d(1), i())
            }), t.o(e)
        }
    }

    function Y(t, e) {
        t.d(1), e.delete(t.key)
    }

    function G(t) {
        t && t.c()
    }

    function J(t, n, o) {
        const {
            fragment: a,
            on_mount: s,
            on_destroy: c,
            after_update: l
        } = t.$$;
        a && a.m(n, o), P(() => {
            const n = s.map(e).filter(r);
            c ? c.push(...n) : i(n), t.$$.on_mount = []
        }), l.forEach(P)
    }

    function K(t, e) {
        const n = t.$$;
        null !== n.fragment && (i(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = [])
    }

    function Q(t, e) {
        -1 === t.$$.dirty[0] && (T.push(t), I || (I = !0, R.then(D)), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31
    }

    function Z(e, r, o, a, s, c, l = [-1]) {
        const d = A;
        $(e);
        const u = r.props || {},
            f = e.$$ = {
                fragment: null,
                ctx: null,
                props: c,
                update: t,
                not_equal: s,
                bound: n(),
                on_mount: [],
                on_destroy: [],
                before_update: [],
                after_update: [],
                context: new Map(d ? d.$$.context : []),
                callbacks: n(),
                dirty: l
            };
        let p = !1;
        f.ctx = o ? o(e, u, (t, n, i = n) => (f.ctx && s(f.ctx[t], f.ctx[t] = i) && (f.bound[t] && f.bound[t](i), p && Q(e, t)), n)) : [], f.update(), p = !0, i(f.before_update), f.fragment = !!a && a(f.ctx), r.target && (r.hydrate ? f.fragment && f.fragment.l(function(t) {
            return Array.from(t.childNodes)
        }(r.target)) : f.fragment && f.fragment.c(), r.intro && U(e.$$.fragment), J(e, r.target, r.anchor), D()), $(d)
    }
    class tt {
        $destroy() {
            K(this, 1), this.$destroy = t
        }
        $on(t, e) {
            const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
            return n.push(e), () => {
                const t = n.indexOf(e); - 1 !== t && n.splice(t, 1)
            }
        }
        $set() {}
    }

    function et(t, e) {
        void 0 === e && (e = {});
        var n = e.insertAt;
        if (t && "undefined" != typeof document) {
            var i = document.head || document.getElementsByTagName("head")[0],
                r = document.createElement("style");
            r.type = "text/css", "top" === n && i.firstChild ? i.insertBefore(r, i.firstChild) : i.appendChild(r), r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(document.createTextNode(t))
        }
    }
    et("[data-simplebar] {\n  position: relative;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: flex-start;\n  align-items: flex-start;\n}\n\n.simplebar-wrapper {\n  overflow: hidden;\n  width: inherit;\n  height: inherit;\n  max-width: inherit;\n  max-height: inherit;\n}\n\n.simplebar-mask {\n  direction: inherit;\n  position: absolute;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: auto !important;\n  height: auto !important;\n  z-index: 0;\n}\n\n.simplebar-offset {\n  direction: inherit !important;\n  box-sizing: inherit !important;\n  resize: none !important;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  padding: 0;\n  margin: 0;\n  -webkit-overflow-scrolling: touch;\n}\n\n.simplebar-content-wrapper {\n  direction: inherit;\n  box-sizing: border-box !important;\n  position: relative;\n  display: block;\n  height: 100%; /* Required for horizontal native scrollbar to not appear if parent is taller than natural height */\n  width: auto;\n  visibility: visible;\n  max-width: 100%; /* Not required for horizontal scroll to trigger */\n  max-height: 100%; /* Needed for vertical scroll to trigger */\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n\n.simplebar-content-wrapper::-webkit-scrollbar,\n.simplebar-hide-scrollbar::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n\n.simplebar-content:before,\n.simplebar-content:after {\n  content: ' ';\n  display: table;\n}\n\n.simplebar-placeholder {\n  max-height: 100%;\n  max-width: 100%;\n  width: 100%;\n  pointer-events: none;\n}\n\n.simplebar-height-auto-observer-wrapper {\n  box-sizing: inherit !important;\n  height: 100%;\n  width: 100%;\n  max-width: 1px;\n  position: relative;\n  float: left;\n  max-height: 1px;\n  overflow: hidden;\n  z-index: -1;\n  padding: 0;\n  margin: 0;\n  pointer-events: none;\n  flex-grow: inherit;\n  flex-shrink: 0;\n  flex-basis: 0;\n}\n\n.simplebar-height-auto-observer {\n  box-sizing: inherit;\n  display: block;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 1000%;\n  width: 1000%;\n  min-height: 1px;\n  min-width: 1px;\n  overflow: hidden;\n  pointer-events: none;\n  z-index: -1;\n}\n\n.simplebar-track {\n  z-index: 1;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n  overflow: hidden;\n}\n\n[data-simplebar].simplebar-dragging .simplebar-content {\n  pointer-events: none;\n  user-select: none;\n  -webkit-user-select: none;\n}\n\n[data-simplebar].simplebar-dragging .simplebar-track {\n  pointer-events: all;\n}\n\n.simplebar-scrollbar {\n  position: absolute;\n  left: 0;\n  right: 0;\n  min-height: 10px;\n}\n\n.simplebar-scrollbar:before {\n  position: absolute;\n  content: '';\n  background: black;\n  border-radius: 7px;\n  left: 2px;\n  right: 2px;\n  opacity: 0;\n  transition: opacity 0.2s linear;\n}\n\n.simplebar-scrollbar.simplebar-visible:before {\n  /* When hovered, remove all transitions from drag handle */\n  opacity: 0.5;\n  transition: opacity 0s linear;\n}\n\n.simplebar-track.simplebar-vertical {\n  top: 0;\n  width: 11px;\n}\n\n.simplebar-track.simplebar-vertical .simplebar-scrollbar:before {\n  top: 2px;\n  bottom: 2px;\n}\n\n.simplebar-track.simplebar-horizontal {\n  left: 0;\n  height: 11px;\n}\n\n.simplebar-track.simplebar-horizontal .simplebar-scrollbar:before {\n  height: 100%;\n  left: 2px;\n  right: 2px;\n}\n\n.simplebar-track.simplebar-horizontal .simplebar-scrollbar {\n  right: auto;\n  left: 0;\n  top: 2px;\n  height: 7px;\n  min-height: 0;\n  min-width: 10px;\n  width: auto;\n}\n\n/* Rtl support */\n[data-simplebar-direction='rtl'] .simplebar-track.simplebar-vertical {\n  right: auto;\n  left: 0;\n}\n\n.hs-dummy-scrollbar-size {\n  direction: rtl;\n  position: fixed;\n  opacity: 0;\n  visibility: hidden;\n  height: 500px;\n  width: 500px;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n\n.simplebar-hide-scrollbar {\n  position: fixed;\n  left: 0;\n  visibility: hidden;\n  overflow-y: scroll;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n");
    var nt = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function it(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports
    }
    var rt = function(t) {
            return t && t.Math == Math && t
        },
        ot = rt("object" == typeof globalThis && globalThis) || rt("object" == typeof window && window) || rt("object" == typeof self && self) || rt("object" == typeof nt && nt) || Function("return this")(),
        at = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        },
        st = !at((function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        })),
        ct = {}.propertyIsEnumerable,
        lt = Object.getOwnPropertyDescriptor,
        dt = {
            f: lt && !ct.call({
                1: 2
            }, 1) ? function(t) {
                var e = lt(this, t);
                return !!e && e.enumerable
            } : ct
        },
        ut = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        },
        ft = {}.toString,
        pt = function(t) {
            return ft.call(t).slice(8, -1)
        },
        ht = "".split,
        vt = at((function() {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function(t) {
            return "String" == pt(t) ? ht.call(t, "") : Object(t)
        } : Object,
        mt = function(t) {
            if (null == t) throw TypeError("Can't call method on " + t);
            return t
        },
        gt = function(t) {
            return vt(mt(t))
        },
        bt = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        },
        yt = function(t, e) {
            if (!bt(t)) return t;
            var n, i;
            if (e && "function" == typeof(n = t.toString) && !bt(i = n.call(t))) return i;
            if ("function" == typeof(n = t.valueOf) && !bt(i = n.call(t))) return i;
            if (!e && "function" == typeof(n = t.toString) && !bt(i = n.call(t))) return i;
            throw TypeError("Can't convert object to primitive value")
        },
        xt = {}.hasOwnProperty,
        kt = function(t, e) {
            return xt.call(t, e)
        },
        wt = ot.document,
        Et = bt(wt) && bt(wt.createElement),
        St = function(t) {
            return Et ? wt.createElement(t) : {}
        },
        Ot = !st && !at((function() {
            return 7 != Object.defineProperty(St("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })),
        _t = Object.getOwnPropertyDescriptor,
        Mt = {
            f: st ? _t : function(t, e) {
                if (t = gt(t), e = yt(e, !0), Ot) try {
                    return _t(t, e)
                } catch (t) {}
                if (kt(t, e)) return ut(!dt.f.call(t, e), t[e])
            }
        },
        At = function(t) {
            if (!bt(t)) throw TypeError(String(t) + " is not an object");
            return t
        },
        $t = Object.defineProperty,
        Ct = {
            f: st ? $t : function(t, e, n) {
                if (At(t), e = yt(e, !0), At(n), Ot) try {
                    return $t(t, e, n)
                } catch (t) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                return "value" in n && (t[e] = n.value), t
            }
        },
        Lt = st ? function(t, e, n) {
            return Ct.f(t, e, ut(1, n))
        } : function(t, e, n) {
            return t[e] = n, t
        },
        zt = function(t, e) {
            try {
                Lt(ot, t, e)
            } catch (n) {
                ot[t] = e
            }
            return e
        },
        Tt = ot["__core-js_shared__"] || zt("__core-js_shared__", {}),
        jt = Function.toString;
    "function" != typeof Tt.inspectSource && (Tt.inspectSource = function(t) {
        return jt.call(t)
    });
    var Nt, Wt, Rt, It = Tt.inspectSource,
        Pt = ot.WeakMap,
        Dt = "function" == typeof Pt && /native code/.test(It(Pt)),
        Ft = it((function(t) {
            (t.exports = function(t, e) {
                return Tt[t] || (Tt[t] = void 0 !== e ? e : {})
            })("versions", []).push({
                version: "3.6.4",
                mode: "global",
                copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
            })
        })),
        Bt = 0,
        Vt = Math.random(),
        qt = function(t) {
            return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++Bt + Vt).toString(36)
        },
        Ht = Ft("keys"),
        Ut = function(t) {
            return Ht[t] || (Ht[t] = qt(t))
        },
        Xt = {},
        Yt = ot.WeakMap;
    if (Dt) {
        var Gt = new Yt,
            Jt = Gt.get,
            Kt = Gt.has,
            Qt = Gt.set;
        Nt = function(t, e) {
            return Qt.call(Gt, t, e), e
        }, Wt = function(t) {
            return Jt.call(Gt, t) || {}
        }, Rt = function(t) {
            return Kt.call(Gt, t)
        }
    } else {
        var Zt = Ut("state");
        Xt[Zt] = !0, Nt = function(t, e) {
            return Lt(t, Zt, e), e
        }, Wt = function(t) {
            return kt(t, Zt) ? t[Zt] : {}
        }, Rt = function(t) {
            return kt(t, Zt)
        }
    }
    var te = {
            set: Nt,
            get: Wt,
            has: Rt,
            enforce: function(t) {
                return Rt(t) ? Wt(t) : Nt(t, {})
            },
            getterFor: function(t) {
                return function(e) {
                    var n;
                    if (!bt(e) || (n = Wt(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                    return n
                }
            }
        },
        ee = it((function(t) {
            var e = te.get,
                n = te.enforce,
                i = String(String).split("String");
            (t.exports = function(t, e, r, o) {
                var a = !!o && !!o.unsafe,
                    s = !!o && !!o.enumerable,
                    c = !!o && !!o.noTargetGet;
                "function" == typeof r && ("string" != typeof e || kt(r, "name") || Lt(r, "name", e), n(r).source = i.join("string" == typeof e ? e : "")), t !== ot ? (a ? !c && t[e] && (s = !0) : delete t[e], s ? t[e] = r : Lt(t, e, r)) : s ? t[e] = r : zt(e, r)
            })(Function.prototype, "toString", (function() {
                return "function" == typeof this && e(this).source || It(this)
            }))
        })),
        ne = ot,
        ie = function(t) {
            return "function" == typeof t ? t : void 0
        },
        re = function(t, e) {
            return arguments.length < 2 ? ie(ne[t]) || ie(ot[t]) : ne[t] && ne[t][e] || ot[t] && ot[t][e]
        },
        oe = Math.ceil,
        ae = Math.floor,
        se = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? ae : oe)(t)
        },
        ce = Math.min,
        le = function(t) {
            return t > 0 ? ce(se(t), 9007199254740991) : 0
        },
        de = Math.max,
        ue = Math.min,
        fe = function(t) {
            return function(e, n, i) {
                var r, o = gt(e),
                    a = le(o.length),
                    s = function(t, e) {
                        var n = se(t);
                        return n < 0 ? de(n + e, 0) : ue(n, e)
                    }(i, a);
                if (t && n != n) {
                    for (; a > s;)
                        if ((r = o[s++]) != r) return !0
                } else
                    for (; a > s; s++)
                        if ((t || s in o) && o[s] === n) return t || s || 0;
                return !t && -1
            }
        },
        pe = {
            includes: fe(!0),
            indexOf: fe(!1)
        }.indexOf,
        he = function(t, e) {
            var n, i = gt(t),
                r = 0,
                o = [];
            for (n in i) !kt(Xt, n) && kt(i, n) && o.push(n);
            for (; e.length > r;) kt(i, n = e[r++]) && (~pe(o, n) || o.push(n));
            return o
        },
        ve = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        me = ve.concat("length", "prototype"),
        ge = {
            f: Object.getOwnPropertyNames || function(t) {
                return he(t, me)
            }
        },
        be = {
            f: Object.getOwnPropertySymbols
        },
        ye = re("Reflect", "ownKeys") || function(t) {
            var e = ge.f(At(t)),
                n = be.f;
            return n ? e.concat(n(t)) : e
        },
        xe = function(t, e) {
            for (var n = ye(e), i = Ct.f, r = Mt.f, o = 0; o < n.length; o++) {
                var a = n[o];
                kt(t, a) || i(t, a, r(e, a))
            }
        },
        ke = /#|\.prototype\./,
        we = function(t, e) {
            var n = Se[Ee(t)];
            return n == _e || n != Oe && ("function" == typeof e ? at(e) : !!e)
        },
        Ee = we.normalize = function(t) {
            return String(t).replace(ke, ".").toLowerCase()
        },
        Se = we.data = {},
        Oe = we.NATIVE = "N",
        _e = we.POLYFILL = "P",
        Me = we,
        Ae = Mt.f,
        $e = function(t, e) {
            var n, i, r, o, a, s = t.target,
                c = t.global,
                l = t.stat;
            if (n = c ? ot : l ? ot[s] || zt(s, {}) : (ot[s] || {}).prototype)
                for (i in e) {
                    if (o = e[i], r = t.noTargetGet ? (a = Ae(n, i)) && a.value : n[i], !Me(c ? i : s + (l ? "." : "#") + i, t.forced) && void 0 !== r) {
                        if (typeof o == typeof r) continue;
                        xe(o, r)
                    }(t.sham || r && r.sham) && Lt(o, "sham", !0), ee(n, i, o, t)
                }
        },
        Ce = function(t) {
            if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
            return t
        },
        Le = function(t, e, n) {
            if (Ce(t), void 0 === e) return t;
            switch (n) {
                case 0:
                    return function() {
                        return t.call(e)
                    };
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function(n, i) {
                        return t.call(e, n, i)
                    };
                case 3:
                    return function(n, i, r) {
                        return t.call(e, n, i, r)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        },
        ze = function(t) {
            return Object(mt(t))
        },
        Te = Array.isArray || function(t) {
            return "Array" == pt(t)
        },
        je = !!Object.getOwnPropertySymbols && !at((function() {
            return !String(Symbol())
        })),
        Ne = je && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        We = Ft("wks"),
        Re = ot.Symbol,
        Ie = Ne ? Re : Re && Re.withoutSetter || qt,
        Pe = function(t) {
            return kt(We, t) || (je && kt(Re, t) ? We[t] = Re[t] : We[t] = Ie("Symbol." + t)), We[t]
        },
        De = Pe("species"),
        Fe = function(t, e) {
            var n;
            return Te(t) && ("function" != typeof(n = t.constructor) || n !== Array && !Te(n.prototype) ? bt(n) && null === (n = n[De]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === e ? 0 : e)
        },
        Be = [].push,
        Ve = function(t) {
            var e = 1 == t,
                n = 2 == t,
                i = 3 == t,
                r = 4 == t,
                o = 6 == t,
                a = 5 == t || o;
            return function(s, c, l, d) {
                for (var u, f, p = ze(s), h = vt(p), v = Le(c, l, 3), m = le(h.length), g = 0, b = d || Fe, y = e ? b(s, m) : n ? b(s, 0) : void 0; m > g; g++)
                    if ((a || g in h) && (f = v(u = h[g], g, p), t))
                        if (e) y[g] = f;
                        else if (f) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return u;
                    case 6:
                        return g;
                    case 2:
                        Be.call(y, u)
                } else if (r) return !1;
                return o ? -1 : i || r ? r : y
            }
        },
        qe = {
            forEach: Ve(0),
            map: Ve(1),
            filter: Ve(2),
            some: Ve(3),
            every: Ve(4),
            find: Ve(5),
            findIndex: Ve(6)
        },
        He = function(t, e) {
            var n = [][t];
            return !!n && at((function() {
                n.call(null, e || function() {
                    throw 1
                }, 1)
            }))
        },
        Ue = Object.defineProperty,
        Xe = {},
        Ye = function(t) {
            throw t
        },
        Ge = function(t, e) {
            if (kt(Xe, t)) return Xe[t];
            e || (e = {});
            var n = [][t],
                i = !!kt(e, "ACCESSORS") && e.ACCESSORS,
                r = kt(e, 0) ? e[0] : Ye,
                o = kt(e, 1) ? e[1] : void 0;
            return Xe[t] = !!n && !at((function() {
                if (i && !st) return !0;
                var t = {
                    length: -1
                };
                i ? Ue(t, 1, {
                    enumerable: !0,
                    get: Ye
                }) : t[1] = 1, n.call(t, r, o)
            }))
        },
        Je = qe.forEach,
        Ke = He("forEach"),
        Qe = Ge("forEach"),
        Ze = Ke && Qe ? [].forEach : function(t) {
            return Je(this, t, arguments.length > 1 ? arguments[1] : void 0)
        };
    $e({
        target: "Array",
        proto: !0,
        forced: [].forEach != Ze
    }, {
        forEach: Ze
    });
    var tn = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    };
    for (var en in tn) {
        var nn = ot[en],
            rn = nn && nn.prototype;
        if (rn && rn.forEach !== Ze) try {
            Lt(rn, "forEach", Ze)
        } catch (t) {
            rn.forEach = Ze
        }
    }
    var on, an, sn = !("undefined" == typeof window || !window.document || !window.document.createElement),
        cn = re("navigator", "userAgent") || "",
        ln = ot.process,
        dn = ln && ln.versions,
        un = dn && dn.v8;
    un ? an = (on = un.split("."))[0] + on[1] : cn && (!(on = cn.match(/Edge\/(\d+)/)) || on[1] >= 74) && (on = cn.match(/Chrome\/(\d+)/)) && (an = on[1]);
    var fn = an && +an,
        pn = Pe("species"),
        hn = qe.filter,
        vn = function(t) {
            return fn >= 51 || !at((function() {
                var e = [];
                return (e.constructor = {})[pn] = function() {
                    return {
                        foo: 1
                    }
                }, 1 !== e[t](Boolean).foo
            }))
        }("filter"),
        mn = Ge("filter");
    $e({
        target: "Array",
        proto: !0,
        forced: !vn || !mn
    }, {
        filter: function(t) {
            return hn(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var gn, bn = Object.keys || function(t) {
            return he(t, ve)
        },
        yn = st ? Object.defineProperties : function(t, e) {
            At(t);
            for (var n, i = bn(e), r = i.length, o = 0; r > o;) Ct.f(t, n = i[o++], e[n]);
            return t
        },
        xn = re("document", "documentElement"),
        kn = Ut("IE_PROTO"),
        wn = function() {},
        En = function(t) {
            return "<script>" + t + "<\/script>"
        },
        Sn = function() {
            try {
                gn = document.domain && new ActiveXObject("htmlfile")
            } catch (t) {}
            var t, e;
            Sn = gn ? function(t) {
                t.write(En("")), t.close();
                var e = t.parentWindow.Object;
                return t = null, e
            }(gn) : ((e = St("iframe")).style.display = "none", xn.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(En("document.F=Object")), t.close(), t.F);
            for (var n = ve.length; n--;) delete Sn.prototype[ve[n]];
            return Sn()
        };
    Xt[kn] = !0;
    var On = Object.create || function(t, e) {
            var n;
            return null !== t ? (wn.prototype = At(t), n = new wn, wn.prototype = null, n[kn] = t) : n = Sn(), void 0 === e ? n : yn(n, e)
        },
        _n = Pe("unscopables"),
        Mn = Array.prototype;
    null == Mn[_n] && Ct.f(Mn, _n, {
        configurable: !0,
        value: On(null)
    });
    var An, $n, Cn, Ln = function(t) {
            Mn[_n][t] = !0
        },
        zn = {},
        Tn = !at((function() {
            function t() {}
            return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
        })),
        jn = Ut("IE_PROTO"),
        Nn = Object.prototype,
        Wn = Tn ? Object.getPrototypeOf : function(t) {
            return t = ze(t), kt(t, jn) ? t[jn] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? Nn : null
        },
        Rn = Pe("iterator"),
        In = !1;
    [].keys && ("next" in (Cn = [].keys()) ? ($n = Wn(Wn(Cn))) !== Object.prototype && (An = $n) : In = !0), null == An && (An = {}), kt(An, Rn) || Lt(An, Rn, (function() {
        return this
    }));
    var Pn = {
            IteratorPrototype: An,
            BUGGY_SAFARI_ITERATORS: In
        },
        Dn = Ct.f,
        Fn = Pe("toStringTag"),
        Bn = function(t, e, n) {
            t && !kt(t = n ? t : t.prototype, Fn) && Dn(t, Fn, {
                configurable: !0,
                value: e
            })
        },
        Vn = Pn.IteratorPrototype,
        qn = function() {
            return this
        },
        Hn = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var t, e = !1,
                n = {};
            try {
                (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), e = n instanceof Array
            } catch (t) {}
            return function(n, i) {
                return At(n),
                    function(t) {
                        if (!bt(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype")
                    }(i), e ? t.call(n, i) : n.__proto__ = i, n
            }
        }() : void 0),
        Un = Pn.IteratorPrototype,
        Xn = Pn.BUGGY_SAFARI_ITERATORS,
        Yn = Pe("iterator"),
        Gn = function() {
            return this
        },
        Jn = function(t, e, n, i, r, o, a) {
            ! function(t, e, n) {
                var i = e + " Iterator";
                t.prototype = On(Vn, {
                    next: ut(1, n)
                }), Bn(t, i, !1), zn[i] = qn
            }(n, e, i);
            var s, c, l, d = function(t) {
                    if (t === r && v) return v;
                    if (!Xn && t in p) return p[t];
                    switch (t) {
                        case "keys":
                        case "values":
                        case "entries":
                            return function() {
                                return new n(this, t)
                            }
                    }
                    return function() {
                        return new n(this)
                    }
                },
                u = e + " Iterator",
                f = !1,
                p = t.prototype,
                h = p[Yn] || p["@@iterator"] || r && p[r],
                v = !Xn && h || d(r),
                m = "Array" == e && p.entries || h;
            if (m && (s = Wn(m.call(new t)), Un !== Object.prototype && s.next && (Wn(s) !== Un && (Hn ? Hn(s, Un) : "function" != typeof s[Yn] && Lt(s, Yn, Gn)), Bn(s, u, !0))), "values" == r && h && "values" !== h.name && (f = !0, v = function() {
                    return h.call(this)
                }), p[Yn] !== v && Lt(p, Yn, v), zn[e] = v, r)
                if (c = {
                        values: d("values"),
                        keys: o ? v : d("keys"),
                        entries: d("entries")
                    }, a)
                    for (l in c) !Xn && !f && l in p || ee(p, l, c[l]);
                else $e({
                    target: e,
                    proto: !0,
                    forced: Xn || f
                }, c);
            return c
        },
        Kn = te.set,
        Qn = te.getterFor("Array Iterator"),
        Zn = Jn(Array, "Array", (function(t, e) {
            Kn(this, {
                type: "Array Iterator",
                target: gt(t),
                index: 0,
                kind: e
            })
        }), (function() {
            var t = Qn(this),
                e = t.target,
                n = t.kind,
                i = t.index++;
            return !e || i >= e.length ? (t.target = void 0, {
                value: void 0,
                done: !0
            }) : "keys" == n ? {
                value: i,
                done: !1
            } : "values" == n ? {
                value: e[i],
                done: !1
            } : {
                value: [i, e[i]],
                done: !1
            }
        }), "values");
    zn.Arguments = zn.Array, Ln("keys"), Ln("values"), Ln("entries");
    var ti = Object.assign,
        ei = Object.defineProperty,
        ni = !ti || at((function() {
            if (st && 1 !== ti({
                    b: 1
                }, ti(ei({}, "a", {
                    enumerable: !0,
                    get: function() {
                        ei(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b) return !0;
            var t = {},
                e = {},
                n = Symbol();
            return t[n] = 7, "abcdefghijklmnopqrst".split("").forEach((function(t) {
                e[t] = t
            })), 7 != ti({}, t)[n] || "abcdefghijklmnopqrst" != bn(ti({}, e)).join("")
        })) ? function(t, e) {
            for (var n = ze(t), i = arguments.length, r = 1, o = be.f, a = dt.f; i > r;)
                for (var s, c = vt(arguments[r++]), l = o ? bn(c).concat(o(c)) : bn(c), d = l.length, u = 0; d > u;) s = l[u++], st && !a.call(c, s) || (n[s] = c[s]);
            return n
        } : ti;
    $e({
        target: "Object",
        stat: !0,
        forced: Object.assign !== ni
    }, {
        assign: ni
    });
    var ii = {};
    ii[Pe("toStringTag")] = "z";
    var ri = "[object z]" === String(ii),
        oi = Pe("toStringTag"),
        ai = "Arguments" == pt(function() {
            return arguments
        }()),
        si = ri ? pt : function(t) {
            var e, n, i;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
                try {
                    return t[e]
                } catch (t) {}
            }(e = Object(t), oi)) ? n : ai ? pt(e) : "Object" == (i = pt(e)) && "function" == typeof e.callee ? "Arguments" : i
        },
        ci = ri ? {}.toString : function() {
            return "[object " + si(this) + "]"
        };
    ri || ee(Object.prototype, "toString", ci, {
        unsafe: !0
    });
    var li = "\t\n\v\f\r                　\u2028\u2029\ufeff",
        di = "[" + li + "]",
        ui = RegExp("^" + di + di + "*"),
        fi = RegExp(di + di + "*$"),
        pi = function(t) {
            return function(e) {
                var n = String(mt(e));
                return 1 & t && (n = n.replace(ui, "")), 2 & t && (n = n.replace(fi, "")), n
            }
        },
        hi = {
            start: pi(1),
            end: pi(2),
            trim: pi(3)
        }.trim,
        vi = ot.parseInt,
        mi = /^[+-]?0[Xx]/,
        gi = 8 !== vi(li + "08") || 22 !== vi(li + "0x16") ? function(t, e) {
            var n = hi(String(t));
            return vi(n, e >>> 0 || (mi.test(n) ? 16 : 10))
        } : vi;
    $e({
        global: !0,
        forced: parseInt != gi
    }, {
        parseInt: gi
    });
    var bi = function(t) {
            return function(e, n) {
                var i, r, o = String(mt(e)),
                    a = se(n),
                    s = o.length;
                return a < 0 || a >= s ? t ? "" : void 0 : (i = o.charCodeAt(a)) < 55296 || i > 56319 || a + 1 === s || (r = o.charCodeAt(a + 1)) < 56320 || r > 57343 ? t ? o.charAt(a) : i : t ? o.slice(a, a + 2) : r - 56320 + (i - 55296 << 10) + 65536
            }
        },
        yi = {
            codeAt: bi(!1),
            charAt: bi(!0)
        },
        xi = yi.charAt,
        ki = te.set,
        wi = te.getterFor("String Iterator");
    Jn(String, "String", (function(t) {
        ki(this, {
            type: "String Iterator",
            string: String(t),
            index: 0
        })
    }), (function() {
        var t, e = wi(this),
            n = e.string,
            i = e.index;
        return i >= n.length ? {
            value: void 0,
            done: !0
        } : (t = xi(n, i), e.index += t.length, {
            value: t,
            done: !1
        })
    }));
    var Ei = function(t, e, n) {
            for (var i in e) ee(t, i, e[i], n);
            return t
        },
        Si = !at((function() {
            return Object.isExtensible(Object.preventExtensions({}))
        })),
        Oi = it((function(t) {
            var e = Ct.f,
                n = qt("meta"),
                i = 0,
                r = Object.isExtensible || function() {
                    return !0
                },
                o = function(t) {
                    e(t, n, {
                        value: {
                            objectID: "O" + ++i,
                            weakData: {}
                        }
                    })
                },
                a = t.exports = {
                    REQUIRED: !1,
                    fastKey: function(t, e) {
                        if (!bt(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                        if (!kt(t, n)) {
                            if (!r(t)) return "F";
                            if (!e) return "E";
                            o(t)
                        }
                        return t[n].objectID
                    },
                    getWeakData: function(t, e) {
                        if (!kt(t, n)) {
                            if (!r(t)) return !0;
                            if (!e) return !1;
                            o(t)
                        }
                        return t[n].weakData
                    },
                    onFreeze: function(t) {
                        return Si && a.REQUIRED && r(t) && !kt(t, n) && o(t), t
                    }
                };
            Xt[n] = !0
        })),
        _i = (Oi.REQUIRED, Oi.fastKey, Oi.getWeakData, Oi.onFreeze, Pe("iterator")),
        Mi = Array.prototype,
        Ai = Pe("iterator"),
        $i = function(t, e, n, i) {
            try {
                return i ? e(At(n)[0], n[1]) : e(n)
            } catch (e) {
                var r = t.return;
                throw void 0 !== r && At(r.call(t)), e
            }
        },
        Ci = it((function(t) {
            var e = function(t, e) {
                this.stopped = t, this.result = e
            };
            (t.exports = function(t, n, i, r, o) {
                var a, s, c, l, d, u, f, p, h = Le(n, i, r ? 2 : 1);
                if (o) a = t;
                else {
                    if ("function" != typeof(s = function(t) {
                            if (null != t) return t[Ai] || t["@@iterator"] || zn[si(t)]
                        }(t))) throw TypeError("Target is not iterable");
                    if (void 0 !== (p = s) && (zn.Array === p || Mi[_i] === p)) {
                        for (c = 0, l = le(t.length); l > c; c++)
                            if ((d = r ? h(At(f = t[c])[0], f[1]) : h(t[c])) && d instanceof e) return d;
                        return new e(!1)
                    }
                    a = s.call(t)
                }
                for (u = a.next; !(f = u.call(a)).done;)
                    if ("object" == typeof(d = $i(a, h, f.value, r)) && d && d instanceof e) return d;
                return new e(!1)
            }).stop = function(t) {
                return new e(!0, t)
            }
        })),
        Li = function(t, e, n) {
            if (!(t instanceof e)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return t
        },
        zi = Pe("iterator"),
        Ti = !1;
    try {
        var ji = 0,
            Ni = {
                next: function() {
                    return {
                        done: !!ji++
                    }
                },
                return: function() {
                    Ti = !0
                }
            };
        Ni[zi] = function() {
            return this
        }, Array.from(Ni, (function() {
            throw 2
        }))
    } catch (t) {}
    var Wi = function(t, e, n) {
            var i = -1 !== t.indexOf("Map"),
                r = -1 !== t.indexOf("Weak"),
                o = i ? "set" : "add",
                a = ot[t],
                s = a && a.prototype,
                c = a,
                l = {},
                d = function(t) {
                    var e = s[t];
                    ee(s, t, "add" == t ? function(t) {
                        return e.call(this, 0 === t ? 0 : t), this
                    } : "delete" == t ? function(t) {
                        return !(r && !bt(t)) && e.call(this, 0 === t ? 0 : t)
                    } : "get" == t ? function(t) {
                        return r && !bt(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                    } : "has" == t ? function(t) {
                        return !(r && !bt(t)) && e.call(this, 0 === t ? 0 : t)
                    } : function(t, n) {
                        return e.call(this, 0 === t ? 0 : t, n), this
                    })
                };
            if (Me(t, "function" != typeof a || !(r || s.forEach && !at((function() {
                    (new a).entries().next()
                }))))) c = n.getConstructor(e, t, i, o), Oi.REQUIRED = !0;
            else if (Me(t, !0)) {
                var u = new c,
                    f = u[o](r ? {} : -0, 1) != u,
                    p = at((function() {
                        u.has(1)
                    })),
                    h = function(t, e) {
                        if (!e && !Ti) return !1;
                        var n = !1;
                        try {
                            var i = {};
                            i[zi] = function() {
                                return {
                                    next: function() {
                                        return {
                                            done: n = !0
                                        }
                                    }
                                }
                            }, t(i)
                        } catch (t) {}
                        return n
                    }((function(t) {
                        new a(t)
                    })),
                    v = !r && at((function() {
                        for (var t = new a, e = 5; e--;) t[o](e, e);
                        return !t.has(-0)
                    }));
                h || ((c = e((function(e, n) {
                    Li(e, c, t);
                    var r = function(t, e, n) {
                        var i, r;
                        return Hn && "function" == typeof(i = e.constructor) && i !== n && bt(r = i.prototype) && r !== n.prototype && Hn(t, r), t
                    }(new a, e, c);
                    return null != n && Ci(n, r[o], r, i), r
                }))).prototype = s, s.constructor = c), (p || v) && (d("delete"), d("has"), i && d("get")), (v || f) && d(o), r && s.clear && delete s.clear
            }
            return l[t] = c, $e({
                global: !0,
                forced: c != a
            }, l), Bn(c, t), r || n.setStrong(c, t, i), c
        },
        Ri = Oi.getWeakData,
        Ii = te.set,
        Pi = te.getterFor,
        Di = qe.find,
        Fi = qe.findIndex,
        Bi = 0,
        Vi = function(t) {
            return t.frozen || (t.frozen = new qi)
        },
        qi = function() {
            this.entries = []
        },
        Hi = function(t, e) {
            return Di(t.entries, (function(t) {
                return t[0] === e
            }))
        };
    qi.prototype = {
        get: function(t) {
            var e = Hi(this, t);
            if (e) return e[1]
        },
        has: function(t) {
            return !!Hi(this, t)
        },
        set: function(t, e) {
            var n = Hi(this, t);
            n ? n[1] = e : this.entries.push([t, e])
        },
        delete: function(t) {
            var e = Fi(this.entries, (function(e) {
                return e[0] === t
            }));
            return ~e && this.entries.splice(e, 1), !!~e
        }
    };
    var Ui = {
            getConstructor: function(t, e, n, i) {
                var r = t((function(t, o) {
                        Li(t, r, e), Ii(t, {
                            type: e,
                            id: Bi++,
                            frozen: void 0
                        }), null != o && Ci(o, t[i], t, n)
                    })),
                    o = Pi(e),
                    a = function(t, e, n) {
                        var i = o(t),
                            r = Ri(At(e), !0);
                        return !0 === r ? Vi(i).set(e, n) : r[i.id] = n, t
                    };
                return Ei(r.prototype, {
                    delete: function(t) {
                        var e = o(this);
                        if (!bt(t)) return !1;
                        var n = Ri(t);
                        return !0 === n ? Vi(e).delete(t) : n && kt(n, e.id) && delete n[e.id]
                    },
                    has: function(t) {
                        var e = o(this);
                        if (!bt(t)) return !1;
                        var n = Ri(t);
                        return !0 === n ? Vi(e).has(t) : n && kt(n, e.id)
                    }
                }), Ei(r.prototype, n ? {
                    get: function(t) {
                        var e = o(this);
                        if (bt(t)) {
                            var n = Ri(t);
                            return !0 === n ? Vi(e).get(t) : n ? n[e.id] : void 0
                        }
                    },
                    set: function(t, e) {
                        return a(this, t, e)
                    }
                } : {
                    add: function(t) {
                        return a(this, t, !0)
                    }
                }), r
            }
        },
        Xi = (it((function(t) {
            var e, n = te.enforce,
                i = !ot.ActiveXObject && "ActiveXObject" in ot,
                r = Object.isExtensible,
                o = function(t) {
                    return function() {
                        return t(this, arguments.length ? arguments[0] : void 0)
                    }
                },
                a = t.exports = Wi("WeakMap", o, Ui);
            if (Dt && i) {
                e = Ui.getConstructor(o, "WeakMap", !0), Oi.REQUIRED = !0;
                var s = a.prototype,
                    c = s.delete,
                    l = s.has,
                    d = s.get,
                    u = s.set;
                Ei(s, {
                    delete: function(t) {
                        if (bt(t) && !r(t)) {
                            var i = n(this);
                            return i.frozen || (i.frozen = new e), c.call(this, t) || i.frozen.delete(t)
                        }
                        return c.call(this, t)
                    },
                    has: function(t) {
                        if (bt(t) && !r(t)) {
                            var i = n(this);
                            return i.frozen || (i.frozen = new e), l.call(this, t) || i.frozen.has(t)
                        }
                        return l.call(this, t)
                    },
                    get: function(t) {
                        if (bt(t) && !r(t)) {
                            var i = n(this);
                            return i.frozen || (i.frozen = new e), l.call(this, t) ? d.call(this, t) : i.frozen.get(t)
                        }
                        return d.call(this, t)
                    },
                    set: function(t, i) {
                        if (bt(t) && !r(t)) {
                            var o = n(this);
                            o.frozen || (o.frozen = new e), l.call(this, t) ? u.call(this, t, i) : o.frozen.set(t, i)
                        } else u.call(this, t, i);
                        return this
                    }
                })
            }
        })), Pe("iterator")),
        Yi = Pe("toStringTag"),
        Gi = Zn.values;
    for (var Ji in tn) {
        var Ki = ot[Ji],
            Qi = Ki && Ki.prototype;
        if (Qi) {
            if (Qi[Xi] !== Gi) try {
                Lt(Qi, Xi, Gi)
            } catch (t) {
                Qi[Xi] = Gi
            }
            if (Qi[Yi] || Lt(Qi, Yi, Ji), tn[Ji])
                for (var Zi in Zn)
                    if (Qi[Zi] !== Zn[Zi]) try {
                        Lt(Qi, Zi, Zn[Zi])
                    } catch (t) {
                        Qi[Zi] = Zn[Zi]
                    }
        }
    }
    var tr = /^\s+|\s+$/g,
        er = /^[-+]0x[0-9a-f]+$/i,
        nr = /^0b[01]+$/i,
        ir = /^0o[0-7]+$/i,
        rr = parseInt,
        or = "object" == typeof nt && nt && nt.Object === Object && nt,
        ar = "object" == typeof self && self && self.Object === Object && self,
        sr = or || ar || Function("return this")(),
        cr = Object.prototype.toString,
        lr = Math.max,
        dr = Math.min,
        ur = function() {
            return sr.Date.now()
        };

    function fr(t, e, n) {
        var i, r, o, a, s, c, l = 0,
            d = !1,
            u = !1,
            f = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");

        function p(e) {
            var n = i,
                o = r;
            return i = r = void 0, l = e, a = t.apply(o, n)
        }

        function h(t) {
            return l = t, s = setTimeout(m, e), d ? p(t) : a
        }

        function v(t) {
            var n = t - c;
            return void 0 === c || n >= e || n < 0 || u && t - l >= o
        }

        function m() {
            var t = ur();
            if (v(t)) return g(t);
            s = setTimeout(m, function(t) {
                var n = e - (t - c);
                return u ? dr(n, o - (t - l)) : n
            }(t))
        }

        function g(t) {
            return s = void 0, f && i ? p(t) : (i = r = void 0, a)
        }

        function b() {
            var t = ur(),
                n = v(t);
            if (i = arguments, r = this, c = t, n) {
                if (void 0 === s) return h(c);
                if (u) return s = setTimeout(m, e), p(c)
            }
            return void 0 === s && (s = setTimeout(m, e)), a
        }
        return e = hr(e) || 0, pr(n) && (d = !!n.leading, o = (u = "maxWait" in n) ? lr(hr(n.maxWait) || 0, e) : o, f = "trailing" in n ? !!n.trailing : f), b.cancel = function() {
            void 0 !== s && clearTimeout(s), l = 0, i = c = r = s = void 0
        }, b.flush = function() {
            return void 0 === s ? a : g(ur())
        }, b
    }

    function pr(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }

    function hr(t) {
        if ("number" == typeof t) return t;
        if (function(t) {
                return "symbol" == typeof t || function(t) {
                    return !!t && "object" == typeof t
                }(t) && "[object Symbol]" == cr.call(t)
            }(t)) return NaN;
        if (pr(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = pr(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(tr, "");
        var n = nr.test(t);
        return n || ir.test(t) ? rr(t.slice(2), n ? 2 : 8) : er.test(t) ? NaN : +t
    }
    var vr = function(t, e, n) {
            var i = !0,
                r = !0;
            if ("function" != typeof t) throw new TypeError("Expected a function");
            return pr(n) && (i = "leading" in n ? !!n.leading : i, r = "trailing" in n ? !!n.trailing : r), fr(t, e, {
                leading: i,
                maxWait: e,
                trailing: r
            })
        },
        mr = /^\s+|\s+$/g,
        gr = /^[-+]0x[0-9a-f]+$/i,
        br = /^0b[01]+$/i,
        yr = /^0o[0-7]+$/i,
        xr = parseInt,
        kr = "object" == typeof nt && nt && nt.Object === Object && nt,
        wr = "object" == typeof self && self && self.Object === Object && self,
        Er = kr || wr || Function("return this")(),
        Sr = Object.prototype.toString,
        Or = Math.max,
        _r = Math.min,
        Mr = function() {
            return Er.Date.now()
        };

    function Ar(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }

    function $r(t) {
        if ("number" == typeof t) return t;
        if (function(t) {
                return "symbol" == typeof t || function(t) {
                    return !!t && "object" == typeof t
                }(t) && "[object Symbol]" == Sr.call(t)
            }(t)) return NaN;
        if (Ar(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = Ar(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(mr, "");
        var n = br.test(t);
        return n || yr.test(t) ? xr(t.slice(2), n ? 2 : 8) : gr.test(t) ? NaN : +t
    }
    var Cr = function(t, e, n) {
            var i, r, o, a, s, c, l = 0,
                d = !1,
                u = !1,
                f = !0;
            if ("function" != typeof t) throw new TypeError("Expected a function");

            function p(e) {
                var n = i,
                    o = r;
                return i = r = void 0, l = e, a = t.apply(o, n)
            }

            function h(t) {
                return l = t, s = setTimeout(m, e), d ? p(t) : a
            }

            function v(t) {
                var n = t - c;
                return void 0 === c || n >= e || n < 0 || u && t - l >= o
            }

            function m() {
                var t = Mr();
                if (v(t)) return g(t);
                s = setTimeout(m, function(t) {
                    var n = e - (t - c);
                    return u ? _r(n, o - (t - l)) : n
                }(t))
            }

            function g(t) {
                return s = void 0, f && i ? p(t) : (i = r = void 0, a)
            }

            function b() {
                var t = Mr(),
                    n = v(t);
                if (i = arguments, r = this, c = t, n) {
                    if (void 0 === s) return h(c);
                    if (u) return s = setTimeout(m, e), p(c)
                }
                return void 0 === s && (s = setTimeout(m, e)), a
            }
            return e = $r(e) || 0, Ar(n) && (d = !!n.leading, o = (u = "maxWait" in n) ? Or($r(n.maxWait) || 0, e) : o, f = "trailing" in n ? !!n.trailing : f), b.cancel = function() {
                void 0 !== s && clearTimeout(s), l = 0, i = c = r = s = void 0
            }, b.flush = function() {
                return void 0 === s ? a : g(Mr())
            }, b
        },
        Lr = /^\[object .+?Constructor\]$/,
        zr = "object" == typeof nt && nt && nt.Object === Object && nt,
        Tr = "object" == typeof self && self && self.Object === Object && self,
        jr = zr || Tr || Function("return this")();
    var Nr = Array.prototype,
        Wr = Function.prototype,
        Rr = Object.prototype,
        Ir = jr["__core-js_shared__"],
        Pr = function() {
            var t = /[^.]+$/.exec(Ir && Ir.keys && Ir.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }(),
        Dr = Wr.toString,
        Fr = Rr.hasOwnProperty,
        Br = Rr.toString,
        Vr = RegExp("^" + Dr.call(Fr).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        qr = Nr.splice,
        Hr = Zr(jr, "Map"),
        Ur = Zr(Object, "create");

    function Xr(t) {
        var e = -1,
            n = t ? t.length : 0;
        for (this.clear(); ++e < n;) {
            var i = t[e];
            this.set(i[0], i[1])
        }
    }

    function Yr(t) {
        var e = -1,
            n = t ? t.length : 0;
        for (this.clear(); ++e < n;) {
            var i = t[e];
            this.set(i[0], i[1])
        }
    }

    function Gr(t) {
        var e = -1,
            n = t ? t.length : 0;
        for (this.clear(); ++e < n;) {
            var i = t[e];
            this.set(i[0], i[1])
        }
    }

    function Jr(t, e) {
        for (var n, i, r = t.length; r--;)
            if ((n = t[r][0]) === (i = e) || n != n && i != i) return r;
        return -1
    }

    function Kr(t) {
        return !(!eo(t) || (e = t, Pr && Pr in e)) && (function(t) {
            var e = eo(t) ? Br.call(t) : "";
            return "[object Function]" == e || "[object GeneratorFunction]" == e
        }(t) || function(t) {
            var e = !1;
            if (null != t && "function" != typeof t.toString) try {
                e = !!(t + "")
            } catch (t) {}
            return e
        }(t) ? Vr : Lr).test(function(t) {
            if (null != t) {
                try {
                    return Dr.call(t)
                } catch (t) {}
                try {
                    return t + ""
                } catch (t) {}
            }
            return ""
        }(t));
        var e
    }

    function Qr(t, e) {
        var n, i, r = t.__data__;
        return ("string" == (i = typeof(n = e)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== n : null === n) ? r["string" == typeof e ? "string" : "hash"] : r.map
    }

    function Zr(t, e) {
        var n = function(t, e) {
            return null == t ? void 0 : t[e]
        }(t, e);
        return Kr(n) ? n : void 0
    }

    function to(t, e) {
        if ("function" != typeof t || e && "function" != typeof e) throw new TypeError("Expected a function");
        var n = function() {
            var i = arguments,
                r = e ? e.apply(this, i) : i[0],
                o = n.cache;
            if (o.has(r)) return o.get(r);
            var a = t.apply(this, i);
            return n.cache = o.set(r, a), a
        };
        return n.cache = new(to.Cache || Gr), n
    }

    function eo(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }
    Xr.prototype.clear = function() {
        this.__data__ = Ur ? Ur(null) : {}
    }, Xr.prototype.delete = function(t) {
        return this.has(t) && delete this.__data__[t]
    }, Xr.prototype.get = function(t) {
        var e = this.__data__;
        if (Ur) {
            var n = e[t];
            return "__lodash_hash_undefined__" === n ? void 0 : n
        }
        return Fr.call(e, t) ? e[t] : void 0
    }, Xr.prototype.has = function(t) {
        var e = this.__data__;
        return Ur ? void 0 !== e[t] : Fr.call(e, t)
    }, Xr.prototype.set = function(t, e) {
        return this.__data__[t] = Ur && void 0 === e ? "__lodash_hash_undefined__" : e, this
    }, Yr.prototype.clear = function() {
        this.__data__ = []
    }, Yr.prototype.delete = function(t) {
        var e = this.__data__,
            n = Jr(e, t);
        return !(n < 0) && (n == e.length - 1 ? e.pop() : qr.call(e, n, 1), !0)
    }, Yr.prototype.get = function(t) {
        var e = this.__data__,
            n = Jr(e, t);
        return n < 0 ? void 0 : e[n][1]
    }, Yr.prototype.has = function(t) {
        return Jr(this.__data__, t) > -1
    }, Yr.prototype.set = function(t, e) {
        var n = this.__data__,
            i = Jr(n, t);
        return i < 0 ? n.push([t, e]) : n[i][1] = e, this
    }, Gr.prototype.clear = function() {
        this.__data__ = {
            hash: new Xr,
            map: new(Hr || Yr),
            string: new Xr
        }
    }, Gr.prototype.delete = function(t) {
        return Qr(this, t).delete(t)
    }, Gr.prototype.get = function(t) {
        return Qr(this, t).get(t)
    }, Gr.prototype.has = function(t) {
        return Qr(this, t).has(t)
    }, Gr.prototype.set = function(t, e) {
        return Qr(this, t).set(t, e), this
    }, to.Cache = Gr;
    var no = to,
        io = function() {
            if ("undefined" != typeof Map) return Map;

            function t(t, e) {
                var n = -1;
                return t.some((function(t, i) {
                    return t[0] === e && (n = i, !0)
                })), n
            }
            return (function() {
                function e() {
                    this.__entries__ = []
                }
                return Object.defineProperty(e.prototype, "size", {
                    get: function() {
                        return this.__entries__.length
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.get = function(e) {
                    var n = t(this.__entries__, e),
                        i = this.__entries__[n];
                    return i && i[1]
                }, e.prototype.set = function(e, n) {
                    var i = t(this.__entries__, e);
                    ~i ? this.__entries__[i][1] = n : this.__entries__.push([e, n])
                }, e.prototype.delete = function(e) {
                    var n = this.__entries__,
                        i = t(n, e);
                    ~i && n.splice(i, 1)
                }, e.prototype.has = function(e) {
                    return !!~t(this.__entries__, e)
                }, e.prototype.clear = function() {
                    this.__entries__.splice(0)
                }, e.prototype.forEach = function(t, e) {
                    void 0 === e && (e = null);
                    for (var n = 0, i = this.__entries__; n < i.length; n++) {
                        var r = i[n];
                        t.call(e, r[1], r[0])
                    }
                }, e
            }())
        }(),
        ro = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
        oo = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
        ao = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(oo) : function(t) {
            return setTimeout((function() {
                return t(Date.now())
            }), 1e3 / 60)
        };
    var so = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
        co = "undefined" != typeof MutationObserver,
        lo = function() {
            function t() {
                this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(t, e) {
                    var n = !1,
                        i = !1,
                        r = 0;

                    function o() {
                        n && (n = !1, t()), i && s()
                    }

                    function a() {
                        ao(o)
                    }

                    function s() {
                        var t = Date.now();
                        if (n) {
                            if (t - r < 2) return;
                            i = !0
                        } else n = !0, i = !1, setTimeout(a, e);
                        r = t
                    }
                    return s
                }(this.refresh.bind(this), 20)
            }
            return t.prototype.addObserver = function(t) {
                ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
            }, t.prototype.removeObserver = function(t) {
                var e = this.observers_,
                    n = e.indexOf(t);
                ~n && e.splice(n, 1), !e.length && this.connected_ && this.disconnect_()
            }, t.prototype.refresh = function() {
                this.updateObservers_() && this.refresh()
            }, t.prototype.updateObservers_ = function() {
                var t = this.observers_.filter((function(t) {
                    return t.gatherActive(), t.hasActive()
                }));
                return t.forEach((function(t) {
                    return t.broadcastActive()
                })), t.length > 0
            }, t.prototype.connect_ = function() {
                ro && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), co ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
            }, t.prototype.disconnect_ = function() {
                ro && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
            }, t.prototype.onTransitionEnd_ = function(t) {
                var e = t.propertyName,
                    n = void 0 === e ? "" : e;
                so.some((function(t) {
                    return !!~n.indexOf(t)
                })) && this.refresh()
            }, t.getInstance = function() {
                return this.instance_ || (this.instance_ = new t), this.instance_
            }, t.instance_ = null, t
        }(),
        uo = function(t, e) {
            for (var n = 0, i = Object.keys(e); n < i.length; n++) {
                var r = i[n];
                Object.defineProperty(t, r, {
                    value: e[r],
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                })
            }
            return t
        },
        fo = function(t) {
            return t && t.ownerDocument && t.ownerDocument.defaultView || oo
        },
        po = yo(0, 0, 0, 0);

    function ho(t) {
        return parseFloat(t) || 0
    }

    function vo(t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        return e.reduce((function(e, n) {
            return e + ho(t["border-" + n + "-width"])
        }), 0)
    }

    function mo(t) {
        var e = t.clientWidth,
            n = t.clientHeight;
        if (!e && !n) return po;
        var i = fo(t).getComputedStyle(t),
            r = function(t) {
                for (var e = {}, n = 0, i = ["top", "right", "bottom", "left"]; n < i.length; n++) {
                    var r = i[n],
                        o = t["padding-" + r];
                    e[r] = ho(o)
                }
                return e
            }(i),
            o = r.left + r.right,
            a = r.top + r.bottom,
            s = ho(i.width),
            c = ho(i.height);
        if ("border-box" === i.boxSizing && (Math.round(s + o) !== e && (s -= vo(i, "left", "right") + o), Math.round(c + a) !== n && (c -= vo(i, "top", "bottom") + a)), ! function(t) {
                return t === fo(t).document.documentElement
            }(t)) {
            var l = Math.round(s + o) - e,
                d = Math.round(c + a) - n;
            1 !== Math.abs(l) && (s -= l), 1 !== Math.abs(d) && (c -= d)
        }
        return yo(r.left, r.top, s, c)
    }
    var go = "undefined" != typeof SVGGraphicsElement ? function(t) {
        return t instanceof fo(t).SVGGraphicsElement
    } : function(t) {
        return t instanceof fo(t).SVGElement && "function" == typeof t.getBBox
    };

    function bo(t) {
        return ro ? go(t) ? function(t) {
            var e = t.getBBox();
            return yo(0, 0, e.width, e.height)
        }(t) : mo(t) : po
    }

    function yo(t, e, n, i) {
        return {
            x: t,
            y: e,
            width: n,
            height: i
        }
    }
    var xo = function() {
            function t(t) {
                this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = yo(0, 0, 0, 0), this.target = t
            }
            return t.prototype.isActive = function() {
                var t = bo(this.target);
                return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
            }, t.prototype.broadcastRect = function() {
                var t = this.contentRect_;
                return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
            }, t
        }(),
        ko = function(t, e) {
            var n, i, r, o, a, s, c, l = (i = (n = e).x, r = n.y, o = n.width, a = n.height, s = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, c = Object.create(s.prototype), uo(c, {
                x: i,
                y: r,
                width: o,
                height: a,
                top: r,
                right: i + o,
                bottom: a + r,
                left: i
            }), c);
            uo(this, {
                target: t,
                contentRect: l
            })
        },
        wo = function() {
            function t(t, e, n) {
                if (this.activeObservations_ = [], this.observations_ = new io, "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
                this.callback_ = t, this.controller_ = e, this.callbackCtx_ = n
            }
            return t.prototype.observe = function(t) {
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                    if (!(t instanceof fo(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                    var e = this.observations_;
                    e.has(t) || (e.set(t, new xo(t)), this.controller_.addObserver(this), this.controller_.refresh())
                }
            }, t.prototype.unobserve = function(t) {
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                    if (!(t instanceof fo(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                    var e = this.observations_;
                    e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
                }
            }, t.prototype.disconnect = function() {
                this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
            }, t.prototype.gatherActive = function() {
                var t = this;
                this.clearActive(), this.observations_.forEach((function(e) {
                    e.isActive() && t.activeObservations_.push(e)
                }))
            }, t.prototype.broadcastActive = function() {
                if (this.hasActive()) {
                    var t = this.callbackCtx_,
                        e = this.activeObservations_.map((function(t) {
                            return new ko(t.target, t.broadcastRect())
                        }));
                    this.callback_.call(t, e, t), this.clearActive()
                }
            }, t.prototype.clearActive = function() {
                this.activeObservations_.splice(0)
            }, t.prototype.hasActive = function() {
                return this.activeObservations_.length > 0
            }, t
        }(),
        Eo = "undefined" != typeof WeakMap ? new WeakMap : new io,
        So = function t(e) {
            if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            var n = lo.getInstance(),
                i = new wo(e, n, this);
            Eo.set(this, i)
        };
    ["observe", "unobserve", "disconnect"].forEach((function(t) {
        So.prototype[t] = function() {
            var e;
            return (e = Eo.get(this))[t].apply(e, arguments)
        }
    }));
    var Oo = void 0 !== oo.ResizeObserver ? oo.ResizeObserver : So,
        _o = function(t) {
            return function(e, n, i, r) {
                Ce(n);
                var o = ze(e),
                    a = vt(o),
                    s = le(o.length),
                    c = t ? s - 1 : 0,
                    l = t ? -1 : 1;
                if (i < 2)
                    for (;;) {
                        if (c in a) {
                            r = a[c], c += l;
                            break
                        }
                        if (c += l, t ? c < 0 : s <= c) throw TypeError("Reduce of empty array with no initial value")
                    }
                for (; t ? c >= 0 : s > c; c += l) c in a && (r = n(r, a[c], c, o));
                return r
            }
        },
        Mo = {
            left: _o(!1),
            right: _o(!0)
        }.left,
        Ao = He("reduce"),
        $o = Ge("reduce", {
            1: 0
        });
    $e({
        target: "Array",
        proto: !0,
        forced: !Ao || !$o
    }, {
        reduce: function(t) {
            return Mo(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Co = Ct.f,
        Lo = Function.prototype,
        zo = Lo.toString,
        To = /^\s*function ([^ (]*)/;
    !st || "name" in Lo || Co(Lo, "name", {
        configurable: !0,
        get: function() {
            try {
                return zo.call(this).match(To)[1]
            } catch (t) {
                return ""
            }
        }
    });
    var jo = function() {
        var t = At(this),
            e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
    };

    function No(t, e) {
        return RegExp(t, e)
    }
    var Wo, Ro, Io = {
            UNSUPPORTED_Y: at((function() {
                var t = No("a", "y");
                return t.lastIndex = 2, null != t.exec("abcd")
            })),
            BROKEN_CARET: at((function() {
                var t = No("^r", "gy");
                return t.lastIndex = 2, null != t.exec("str")
            }))
        },
        Po = RegExp.prototype.exec,
        Do = String.prototype.replace,
        Fo = Po,
        Bo = (Wo = /a/, Ro = /b*/g, Po.call(Wo, "a"), Po.call(Ro, "a"), 0 !== Wo.lastIndex || 0 !== Ro.lastIndex),
        Vo = Io.UNSUPPORTED_Y || Io.BROKEN_CARET,
        qo = void 0 !== /()??/.exec("")[1];
    (Bo || qo || Vo) && (Fo = function(t) {
        var e, n, i, r, o = this,
            a = Vo && o.sticky,
            s = jo.call(o),
            c = o.source,
            l = 0,
            d = t;
        return a && (-1 === (s = s.replace("y", "")).indexOf("g") && (s += "g"), d = String(t).slice(o.lastIndex), o.lastIndex > 0 && (!o.multiline || o.multiline && "\n" !== t[o.lastIndex - 1]) && (c = "(?: " + c + ")", d = " " + d, l++), n = new RegExp("^(?:" + c + ")", s)), qo && (n = new RegExp("^" + c + "$(?!\\s)", s)), Bo && (e = o.lastIndex), i = Po.call(a ? n : o, d), a ? i ? (i.input = i.input.slice(l), i[0] = i[0].slice(l), i.index = o.lastIndex, o.lastIndex += i[0].length) : o.lastIndex = 0 : Bo && i && (o.lastIndex = o.global ? i.index + i[0].length : e), qo && i && i.length > 1 && Do.call(i[0], n, (function() {
            for (r = 1; r < arguments.length - 2; r++) void 0 === arguments[r] && (i[r] = void 0)
        })), i
    });
    var Ho = Fo;
    $e({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== Ho
    }, {
        exec: Ho
    });
    var Uo = Pe("species"),
        Xo = !at((function() {
            var t = /./;
            return t.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "7" !== "".replace(t, "$<a>")
        })),
        Yo = "$0" === "a".replace(/./, "$0"),
        Go = Pe("replace"),
        Jo = !!/./ [Go] && "" === /./ [Go]("a", "$0"),
        Ko = !at((function() {
            var t = /(?:)/,
                e = t.exec;
            t.exec = function() {
                return e.apply(this, arguments)
            };
            var n = "ab".split(t);
            return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
        })),
        Qo = function(t, e, n, i) {
            var r = Pe(t),
                o = !at((function() {
                    var e = {};
                    return e[r] = function() {
                        return 7
                    }, 7 != "" [t](e)
                })),
                a = o && !at((function() {
                    var e = !1,
                        n = /a/;
                    return "split" === t && ((n = {}).constructor = {}, n.constructor[Uo] = function() {
                        return n
                    }, n.flags = "", n[r] = /./ [r]), n.exec = function() {
                        return e = !0, null
                    }, n[r](""), !e
                }));
            if (!o || !a || "replace" === t && (!Xo || !Yo || Jo) || "split" === t && !Ko) {
                var s = /./ [r],
                    c = n(r, "" [t], (function(t, e, n, i, r) {
                        return e.exec === Ho ? o && !r ? {
                            done: !0,
                            value: s.call(e, n, i)
                        } : {
                            done: !0,
                            value: t.call(n, e, i)
                        } : {
                            done: !1
                        }
                    }), {
                        REPLACE_KEEPS_$0: Yo,
                        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Jo
                    }),
                    l = c[0],
                    d = c[1];
                ee(String.prototype, t, l), ee(RegExp.prototype, r, 2 == e ? function(t, e) {
                    return d.call(t, this, e)
                } : function(t) {
                    return d.call(t, this)
                })
            }
            i && Lt(RegExp.prototype[r], "sham", !0)
        },
        Zo = yi.charAt,
        ta = function(t, e, n) {
            return e + (n ? Zo(t, e).length : 1)
        },
        ea = function(t, e) {
            var n = t.exec;
            if ("function" == typeof n) {
                var i = n.call(t, e);
                if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
                return i
            }
            if ("RegExp" !== pt(t)) throw TypeError("RegExp#exec called on incompatible receiver");
            return Ho.call(t, e)
        };
    Qo("match", 1, (function(t, e, n) {
        return [function(e) {
            var n = mt(this),
                i = null == e ? void 0 : e[t];
            return void 0 !== i ? i.call(e, n) : new RegExp(e)[t](String(n))
        }, function(t) {
            var i = n(e, t, this);
            if (i.done) return i.value;
            var r = At(t),
                o = String(this);
            if (!r.global) return ea(r, o);
            var a = r.unicode;
            r.lastIndex = 0;
            for (var s, c = [], l = 0; null !== (s = ea(r, o));) {
                var d = String(s[0]);
                c[l] = d, "" === d && (r.lastIndex = ta(o, le(r.lastIndex), a)), l++
            }
            return 0 === l ? null : c
        }]
    }));
    var na = Math.max,
        ia = Math.min,
        ra = Math.floor,
        oa = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        aa = /\$([$&'`]|\d\d?)/g;
    Qo("replace", 2, (function(t, e, n, i) {
        var r = i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
            o = i.REPLACE_KEEPS_$0,
            a = r ? "$" : "$0";
        return [function(n, i) {
            var r = mt(this),
                o = null == n ? void 0 : n[t];
            return void 0 !== o ? o.call(n, r, i) : e.call(String(r), n, i)
        }, function(t, i) {
            if (!r && o || "string" == typeof i && -1 === i.indexOf(a)) {
                var c = n(e, t, this, i);
                if (c.done) return c.value
            }
            var l = At(t),
                d = String(this),
                u = "function" == typeof i;
            u || (i = String(i));
            var f = l.global;
            if (f) {
                var p = l.unicode;
                l.lastIndex = 0
            }
            for (var h = [];;) {
                var v = ea(l, d);
                if (null === v) break;
                if (h.push(v), !f) break;
                "" === String(v[0]) && (l.lastIndex = ta(d, le(l.lastIndex), p))
            }
            for (var m, g = "", b = 0, y = 0; y < h.length; y++) {
                v = h[y];
                for (var x = String(v[0]), k = na(ia(se(v.index), d.length), 0), w = [], E = 1; E < v.length; E++) w.push(void 0 === (m = v[E]) ? m : String(m));
                var S = v.groups;
                if (u) {
                    var O = [x].concat(w, k, d);
                    void 0 !== S && O.push(S);
                    var _ = String(i.apply(void 0, O))
                } else _ = s(x, d, k, w, S, i);
                k >= b && (g += d.slice(b, k) + _, b = k + x.length)
            }
            return g + d.slice(b)
        }];

        function s(t, n, i, r, o, a) {
            var s = i + t.length,
                c = r.length,
                l = aa;
            return void 0 !== o && (o = ze(o), l = oa), e.call(a, l, (function(e, a) {
                var l;
                switch (a.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return n.slice(0, i);
                    case "'":
                        return n.slice(s);
                    case "<":
                        l = o[a.slice(1, -1)];
                        break;
                    default:
                        var d = +a;
                        if (0 === d) return e;
                        if (d > c) {
                            var u = ra(d / 10);
                            return 0 === u ? e : u <= c ? void 0 === r[u - 1] ? a.charAt(1) : r[u - 1] + a.charAt(1) : e
                        }
                        l = r[d - 1]
                }
                return void 0 === l ? "" : l
            }))
        }
    }));
    var sa = null,
        ca = null;

    function la() {
        if (null === sa) {
            if ("undefined" == typeof document) return sa = 0;
            var t = document.body,
                e = document.createElement("div");
            e.classList.add("simplebar-hide-scrollbar"), t.appendChild(e);
            var n = e.getBoundingClientRect().right;
            t.removeChild(e), sa = n
        }
        return sa
    }
    sn && window.addEventListener("resize", (function() {
        ca !== window.devicePixelRatio && (ca = window.devicePixelRatio, sa = null)
    }));
    var da = function(t) {
        return Array.prototype.reduce.call(t, (function(t, e) {
            var n = e.name.match(/data-simplebar-(.+)/);
            if (n) {
                var i = n[1].replace(/\W+(.)/g, (function(t, e) {
                    return e.toUpperCase()
                }));
                switch (e.value) {
                    case "true":
                        t[i] = !0;
                        break;
                    case "false":
                        t[i] = !1;
                        break;
                    case void 0:
                        t[i] = !0;
                        break;
                    default:
                        t[i] = e.value
                }
            }
            return t
        }), {})
    };

    function ua(t) {
        return t && t.ownerDocument && t.ownerDocument.defaultView ? t.ownerDocument.defaultView : window
    }

    function fa(t) {
        return t && t.ownerDocument ? t.ownerDocument : document
    }
    var pa = function() {
        function t(e, n) {
            var i = this;
            this.onScroll = function() {
                var t = ua(i.el);
                i.scrollXTicking || (t.requestAnimationFrame(i.scrollX), i.scrollXTicking = !0), i.scrollYTicking || (t.requestAnimationFrame(i.scrollY), i.scrollYTicking = !0)
            }, this.scrollX = function() {
                i.axis.x.isOverflowing && (i.showScrollbar("x"), i.positionScrollbar("x")), i.scrollXTicking = !1
            }, this.scrollY = function() {
                i.axis.y.isOverflowing && (i.showScrollbar("y"), i.positionScrollbar("y")), i.scrollYTicking = !1
            }, this.onMouseEnter = function() {
                i.showScrollbar("x"), i.showScrollbar("y")
            }, this.onMouseMove = function(t) {
                i.mouseX = t.clientX, i.mouseY = t.clientY, (i.axis.x.isOverflowing || i.axis.x.forceVisible) && i.onMouseMoveForAxis("x"), (i.axis.y.isOverflowing || i.axis.y.forceVisible) && i.onMouseMoveForAxis("y")
            }, this.onMouseLeave = function() {
                i.onMouseMove.cancel(), (i.axis.x.isOverflowing || i.axis.x.forceVisible) && i.onMouseLeaveForAxis("x"), (i.axis.y.isOverflowing || i.axis.y.forceVisible) && i.onMouseLeaveForAxis("y"), i.mouseX = -1, i.mouseY = -1
            }, this.onWindowResize = function() {
                i.scrollbarWidth = i.getScrollbarWidth(), i.hideNativeScrollbar()
            }, this.hideScrollbars = function() {
                i.axis.x.track.rect = i.axis.x.track.el.getBoundingClientRect(), i.axis.y.track.rect = i.axis.y.track.el.getBoundingClientRect(), i.isWithinBounds(i.axis.y.track.rect) || (i.axis.y.scrollbar.el.classList.remove(i.classNames.visible), i.axis.y.isVisible = !1), i.isWithinBounds(i.axis.x.track.rect) || (i.axis.x.scrollbar.el.classList.remove(i.classNames.visible), i.axis.x.isVisible = !1)
            }, this.onPointerEvent = function(t) {
                var e, n;
                i.axis.x.track.rect = i.axis.x.track.el.getBoundingClientRect(), i.axis.y.track.rect = i.axis.y.track.el.getBoundingClientRect(), (i.axis.x.isOverflowing || i.axis.x.forceVisible) && (e = i.isWithinBounds(i.axis.x.track.rect)), (i.axis.y.isOverflowing || i.axis.y.forceVisible) && (n = i.isWithinBounds(i.axis.y.track.rect)), (e || n) && (t.preventDefault(), t.stopPropagation(), "mousedown" === t.type && (e && (i.axis.x.scrollbar.rect = i.axis.x.scrollbar.el.getBoundingClientRect(), i.isWithinBounds(i.axis.x.scrollbar.rect) ? i.onDragStart(t, "x") : i.onTrackClick(t, "x")), n && (i.axis.y.scrollbar.rect = i.axis.y.scrollbar.el.getBoundingClientRect(), i.isWithinBounds(i.axis.y.scrollbar.rect) ? i.onDragStart(t, "y") : i.onTrackClick(t, "y"))))
            }, this.drag = function(e) {
                var n = i.axis[i.draggedAxis].track,
                    r = n.rect[i.axis[i.draggedAxis].sizeAttr],
                    o = i.axis[i.draggedAxis].scrollbar,
                    a = i.contentWrapperEl[i.axis[i.draggedAxis].scrollSizeAttr],
                    s = parseInt(i.elStyles[i.axis[i.draggedAxis].sizeAttr], 10);
                e.preventDefault(), e.stopPropagation();
                var c = (("y" === i.draggedAxis ? e.pageY : e.pageX) - n.rect[i.axis[i.draggedAxis].offsetAttr] - i.axis[i.draggedAxis].dragOffset) / (r - o.size) * (a - s);
                "x" === i.draggedAxis && (c = i.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? c - (r + o.size) : c, c = i.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -c : c), i.contentWrapperEl[i.axis[i.draggedAxis].scrollOffsetAttr] = c
            }, this.onEndDrag = function(t) {
                var e = fa(i.el),
                    n = ua(i.el);
                t.preventDefault(), t.stopPropagation(), i.el.classList.remove(i.classNames.dragging), e.removeEventListener("mousemove", i.drag, !0), e.removeEventListener("mouseup", i.onEndDrag, !0), i.removePreventClickId = n.setTimeout((function() {
                    e.removeEventListener("click", i.preventClick, !0), e.removeEventListener("dblclick", i.preventClick, !0), i.removePreventClickId = null
                }))
            }, this.preventClick = function(t) {
                t.preventDefault(), t.stopPropagation()
            }, this.el = e, this.minScrollbarWidth = 20, this.options = Object.assign({}, t.defaultOptions, {}, n), this.classNames = Object.assign({}, t.defaultOptions.classNames, {}, this.options.classNames), this.axis = {
                x: {
                    scrollOffsetAttr: "scrollLeft",
                    sizeAttr: "width",
                    scrollSizeAttr: "scrollWidth",
                    offsetSizeAttr: "offsetWidth",
                    offsetAttr: "left",
                    overflowAttr: "overflowX",
                    dragOffset: 0,
                    isOverflowing: !0,
                    isVisible: !1,
                    forceVisible: !1,
                    track: {},
                    scrollbar: {}
                },
                y: {
                    scrollOffsetAttr: "scrollTop",
                    sizeAttr: "height",
                    scrollSizeAttr: "scrollHeight",
                    offsetSizeAttr: "offsetHeight",
                    offsetAttr: "top",
                    overflowAttr: "overflowY",
                    dragOffset: 0,
                    isOverflowing: !0,
                    isVisible: !1,
                    forceVisible: !1,
                    track: {},
                    scrollbar: {}
                }
            }, this.removePreventClickId = null, t.instances.has(this.el) || (this.recalculate = vr(this.recalculate.bind(this), 64), this.onMouseMove = vr(this.onMouseMove.bind(this), 64), this.hideScrollbars = Cr(this.hideScrollbars.bind(this), this.options.timeout), this.onWindowResize = Cr(this.onWindowResize.bind(this), 64, {
                leading: !0
            }), t.getRtlHelpers = no(t.getRtlHelpers), this.init())
        }
        t.getRtlHelpers = function() {
            var e = document.createElement("div");
            e.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
            var n = e.firstElementChild;
            document.body.appendChild(n);
            var i = n.firstElementChild;
            n.scrollLeft = 0;
            var r = t.getOffset(n),
                o = t.getOffset(i);
            n.scrollLeft = 999;
            var a = t.getOffset(i);
            return {
                isRtlScrollingInverted: r.left !== o.left && o.left - a.left != 0,
                isRtlScrollbarInverted: r.left !== o.left
            }
        }, t.getOffset = function(t) {
            var e = t.getBoundingClientRect(),
                n = fa(t),
                i = ua(t);
            return {
                top: e.top + (i.pageYOffset || n.documentElement.scrollTop),
                left: e.left + (i.pageXOffset || n.documentElement.scrollLeft)
            }
        };
        var e = t.prototype;
        return e.init = function() {
            t.instances.set(this.el, this), sn && (this.initDOM(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners())
        }, e.initDOM = function() {
            var t = this;
            fa(this.el);
            if (Array.prototype.filter.call(this.el.children, (function(e) {
                    return e.classList.contains(t.classNames.wrapper)
                })).length) this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper), this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl), this.offsetEl = this.el.querySelector("." + this.classNames.offset), this.maskEl = this.el.querySelector("." + this.classNames.mask), this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder), this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl), this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal), this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical);
            else {
                for (this.wrapperEl = document.createElement("div"), this.contentWrapperEl = document.createElement("div"), this.offsetEl = document.createElement("div"), this.maskEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.placeholderEl = document.createElement("div"), this.heightAutoObserverWrapperEl = document.createElement("div"), this.heightAutoObserverEl = document.createElement("div"), this.wrapperEl.classList.add(this.classNames.wrapper), this.contentWrapperEl.classList.add(this.classNames.contentWrapper), this.offsetEl.classList.add(this.classNames.offset), this.maskEl.classList.add(this.classNames.mask), this.contentEl.classList.add(this.classNames.contentEl), this.placeholderEl.classList.add(this.classNames.placeholder), this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl); this.el.firstChild;) this.contentEl.appendChild(this.el.firstChild);
                this.contentWrapperEl.appendChild(this.contentEl), this.offsetEl.appendChild(this.contentWrapperEl), this.maskEl.appendChild(this.offsetEl), this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl), this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl), this.wrapperEl.appendChild(this.maskEl), this.wrapperEl.appendChild(this.placeholderEl), this.el.appendChild(this.wrapperEl)
            }
            if (!this.axis.x.track.el || !this.axis.y.track.el) {
                var e = document.createElement("div"),
                    n = document.createElement("div");
                e.classList.add(this.classNames.track), n.classList.add(this.classNames.scrollbar), e.appendChild(n), this.axis.x.track.el = e.cloneNode(!0), this.axis.x.track.el.classList.add(this.classNames.horizontal), this.axis.y.track.el = e.cloneNode(!0), this.axis.y.track.el.classList.add(this.classNames.vertical), this.el.appendChild(this.axis.x.track.el), this.el.appendChild(this.axis.y.track.el)
            }
            this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar), this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar), this.options.autoHide || (this.axis.x.scrollbar.el.classList.add(this.classNames.visible), this.axis.y.scrollbar.el.classList.add(this.classNames.visible)), this.el.setAttribute("data-simplebar", "init")
        }, e.initListeners = function() {
            var t = this,
                e = ua(this.el);
            this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach((function(e) {
                t.el.addEventListener(e, t.onPointerEvent, !0)
            })), ["touchstart", "touchend", "touchmove"].forEach((function(e) {
                t.el.addEventListener(e, t.onPointerEvent, {
                    capture: !0,
                    passive: !0
                })
            })), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl.addEventListener("scroll", this.onScroll), e.addEventListener("resize", this.onWindowResize);
            var n = !1,
                i = e.ResizeObserver || Oo;
            this.resizeObserver = new i((function() {
                n && t.recalculate()
            })), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl), e.requestAnimationFrame((function() {
                n = !0
            })), this.mutationObserver = new e.MutationObserver(this.recalculate), this.mutationObserver.observe(this.contentEl, {
                childList: !0,
                subtree: !0,
                characterData: !0
            })
        }, e.recalculate = function() {
            var t = ua(this.el);
            this.elStyles = t.getComputedStyle(this.el), this.isRtl = "rtl" === this.elStyles.direction;
            var e = this.heightAutoObserverEl.offsetHeight <= 1,
                n = this.heightAutoObserverEl.offsetWidth <= 1,
                i = this.contentEl.offsetWidth,
                r = this.contentWrapperEl.offsetWidth,
                o = this.elStyles.overflowX,
                a = this.elStyles.overflowY;
            this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft, this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
            var s = this.contentEl.scrollHeight,
                c = this.contentEl.scrollWidth;
            this.contentWrapperEl.style.height = e ? "auto" : "100%", this.placeholderEl.style.width = n ? i + "px" : "auto", this.placeholderEl.style.height = s + "px";
            var l = this.contentWrapperEl.offsetHeight;
            this.axis.x.isOverflowing = c > i, this.axis.y.isOverflowing = s > l, this.axis.x.isOverflowing = "hidden" !== o && this.axis.x.isOverflowing, this.axis.y.isOverflowing = "hidden" !== a && this.axis.y.isOverflowing, this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible, this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible, this.hideNativeScrollbar();
            var d = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
                u = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
            this.axis.x.isOverflowing = this.axis.x.isOverflowing && c > r - u, this.axis.y.isOverflowing = this.axis.y.isOverflowing && s > l - d, this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px", this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px", this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y")
        }, e.getScrollbarSize = function(t) {
            if (void 0 === t && (t = "y"), !this.axis[t].isOverflowing) return 0;
            var e, n = this.contentEl[this.axis[t].scrollSizeAttr],
                i = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
                r = i / n;
            return e = Math.max(~~(r * i), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (e = Math.min(e, this.options.scrollbarMaxSize)), e
        }, e.positionScrollbar = function(e) {
            if (void 0 === e && (e = "y"), this.axis[e].isOverflowing) {
                var n = this.contentWrapperEl[this.axis[e].scrollSizeAttr],
                    i = this.axis[e].track.el[this.axis[e].offsetSizeAttr],
                    r = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
                    o = this.axis[e].scrollbar,
                    a = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
                    s = (a = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -a : a) / (n - r),
                    c = ~~((i - o.size) * s);
                c = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? c + (i - o.size) : c, o.el.style.transform = "x" === e ? "translate3d(" + c + "px, 0, 0)" : "translate3d(0, " + c + "px, 0)"
            }
        }, e.toggleTrackVisibility = function(t) {
            void 0 === t && (t = "y");
            var e = this.axis[t].track.el,
                n = this.axis[t].scrollbar.el;
            this.axis[t].isOverflowing || this.axis[t].forceVisible ? (e.style.visibility = "visible", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "scroll") : (e.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "hidden"), this.axis[t].isOverflowing ? n.style.display = "block" : n.style.display = "none"
        }, e.hideNativeScrollbar = function() {
            this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0, this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0
        }, e.onMouseMoveForAxis = function(t) {
            void 0 === t && (t = "y"), this.axis[t].track.rect = this.axis[t].track.el.getBoundingClientRect(), this.axis[t].scrollbar.rect = this.axis[t].scrollbar.el.getBoundingClientRect(), this.isWithinBounds(this.axis[t].scrollbar.rect) ? this.axis[t].scrollbar.el.classList.add(this.classNames.hover) : this.axis[t].scrollbar.el.classList.remove(this.classNames.hover), this.isWithinBounds(this.axis[t].track.rect) ? (this.showScrollbar(t), this.axis[t].track.el.classList.add(this.classNames.hover)) : this.axis[t].track.el.classList.remove(this.classNames.hover)
        }, e.onMouseLeaveForAxis = function(t) {
            void 0 === t && (t = "y"), this.axis[t].track.el.classList.remove(this.classNames.hover), this.axis[t].scrollbar.el.classList.remove(this.classNames.hover)
        }, e.showScrollbar = function(t) {
            void 0 === t && (t = "y");
            var e = this.axis[t].scrollbar.el;
            this.axis[t].isVisible || (e.classList.add(this.classNames.visible), this.axis[t].isVisible = !0), this.options.autoHide && this.hideScrollbars()
        }, e.onDragStart = function(t, e) {
            void 0 === e && (e = "y");
            var n = fa(this.el),
                i = ua(this.el),
                r = this.axis[e].scrollbar,
                o = "y" === e ? t.pageY : t.pageX;
            this.axis[e].dragOffset = o - r.rect[this.axis[e].offsetAttr], this.draggedAxis = e, this.el.classList.add(this.classNames.dragging), n.addEventListener("mousemove", this.drag, !0), n.addEventListener("mouseup", this.onEndDrag, !0), null === this.removePreventClickId ? (n.addEventListener("click", this.preventClick, !0), n.addEventListener("dblclick", this.preventClick, !0)) : (i.clearTimeout(this.removePreventClickId), this.removePreventClickId = null)
        }, e.onTrackClick = function(t, e) {
            var n = this;
            if (void 0 === e && (e = "y"), this.options.clickOnTrack) {
                var i = ua(this.el);
                this.axis[e].scrollbar.rect = this.axis[e].scrollbar.el.getBoundingClientRect();
                var r = this.axis[e].scrollbar.rect[this.axis[e].offsetAttr],
                    o = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
                    a = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
                    s = ("y" === e ? this.mouseY - r : this.mouseX - r) < 0 ? -1 : 1,
                    c = -1 === s ? a - o : a + o;
                ! function t() {
                    var r, o; - 1 === s ? a > c && (a -= 40, n.contentWrapperEl.scrollTo(((r = {})[n.axis[e].offsetAttr] = a, r)), i.requestAnimationFrame(t)) : a < c && (a += 40, n.contentWrapperEl.scrollTo(((o = {})[n.axis[e].offsetAttr] = a, o)), i.requestAnimationFrame(t))
                }()
            }
        }, e.getContentElement = function() {
            return this.contentEl
        }, e.getScrollElement = function() {
            return this.contentWrapperEl
        }, e.getScrollbarWidth = function() {
            try {
                return "none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : la()
            } catch (t) {
                return la()
            }
        }, e.removeListeners = function() {
            var t = this,
                e = ua(this.el);
            this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach((function(e) {
                t.el.removeEventListener(e, t.onPointerEvent, !0)
            })), ["touchstart", "touchend", "touchmove"].forEach((function(e) {
                t.el.removeEventListener(e, t.onPointerEvent, {
                    capture: !0,
                    passive: !0
                })
            })), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onWindowResize), this.mutationObserver.disconnect(), this.resizeObserver.disconnect(), this.recalculate.cancel(), this.onMouseMove.cancel(), this.hideScrollbars.cancel(), this.onWindowResize.cancel()
        }, e.unMount = function() {
            this.removeListeners(), t.instances.delete(this.el)
        }, e.isWithinBounds = function(t) {
            return this.mouseX >= t.left && this.mouseX <= t.left + t.width && this.mouseY >= t.top && this.mouseY <= t.top + t.height
        }, e.findChild = function(t, e) {
            var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
            return Array.prototype.filter.call(t.children, (function(t) {
                return n.call(t, e)
            }))[0]
        }, t
    }();

    function ha(t) {
        let e, n;
        const i = t[15].default,
            r = function(t, e, n, i) {
                if (t) {
                    const r = a(t, e, n, i);
                    return t[0](r)
                }
            }(i, t, t[14], null);
        return {
            c() {
                e = m("div"), r && r.c(), w(e, "style", t[1]), w(e, "class", t[0])
            },
            m(i, o) {
                p(i, e, o), r && r.m(e, null), t[16](e), n = !0
            },
            p(t, [o]) {
                r && r.p && 16384 & o && r.p(a(i, t, t[14], null), function(t, e, n, i) {
                    if (t[2] && i) {
                        const r = t[2](i(n));
                        if ("object" == typeof e.dirty) {
                            const t = [],
                                n = Math.max(e.dirty.length, r.length);
                            for (let i = 0; i < n; i += 1) t[i] = e.dirty[i] | r[i];
                            return t
                        }
                        return e.dirty | r
                    }
                    return e.dirty
                }(i, t[14], o, null)), (!n || 2 & o) && w(e, "style", t[1]), (!n || 1 & o) && w(e, "class", t[0])
            },
            i(t) {
                n || (U(r, t), n = !0)
            },
            o(t) {
                X(r, t), n = !1
            },
            d(n) {
                n && h(e), r && r.d(n), t[16](null)
            }
        }
    }

    function va(t, e, n) {
        let i, {
            class: r
        } = e;
        const o = z();
        let a, s, {
                autoHide: c = !0
            } = e,
            {
                scrollbarMinSize: l = 10
            } = e,
            {
                scrollbarMaxSize: d = 0
            } = e,
            {
                classNames: u = {
                    content: "simplebar-content",
                    scrollContent: "simplebar-scroll-content",
                    scrollbar: "simplebar-scrollbar",
                    track: "simplebar-track"
                }
            } = e,
            {
                forceVisible: f = !1
            } = e,
            {
                direction: p = "ltr"
            } = e,
            {
                timeout: h = 1e3
            } = e,
            {
                clickOnTrack: v = 1e3
            } = e,
            {
                style: m
            } = e;
        L(() => {
            a = new pa(i, {
                autoHide: c,
                scrollbarMinSize: l,
                scrollbarMaxSize: d,
                classNames: u,
                forceVisible: f,
                direction: p,
                timeout: h,
                clickOnTrack: v
            }), a.getScrollElement().addEventListener("scroll", t => {
                const e = t.target.scrollTop;
                e !== s ? (0 === t.target.scrollTop && o("scrollYReachStart"), t.target.scrollTop + t.target.clientHeight === t.target.scrollHeight && o("scrollYReachEnd")) : (0 === t.target.scrollLeft && o("scrollXReachStart"), t.target.scrollLeft + t.target.clientWidth === t.target.scrollWidth && o("scrollXReachEnd")), s = e <= 0 ? 0 : e
            })
        });
        let {
            $$slots: g = {},
            $$scope: b
        } = e;
        return t.$set = t => {
            "class" in t && n(0, r = t.class), "autoHide" in t && n(3, c = t.autoHide), "scrollbarMinSize" in t && n(4, l = t.scrollbarMinSize), "scrollbarMaxSize" in t && n(5, d = t.scrollbarMaxSize), "classNames" in t && n(6, u = t.classNames), "forceVisible" in t && n(7, f = t.forceVisible), "direction" in t && n(8, p = t.direction), "timeout" in t && n(9, h = t.timeout), "clickOnTrack" in t && n(10, v = t.clickOnTrack), "style" in t && n(1, m = t.style), "$$scope" in t && n(14, b = t.$$scope)
        }, [r, m, i, c, l, d, u, f, p, h, v, a, s, o, b, g, function(t) {
            j[t ? "unshift" : "push"](() => {
                n(2, i = t)
            })
        }]
    }
    pa.defaultOptions = {
        autoHide: !0,
        forceVisible: !1,
        clickOnTrack: !0,
        classNames: {
            contentEl: "simplebar-content",
            contentWrapper: "simplebar-content-wrapper",
            offset: "simplebar-offset",
            mask: "simplebar-mask",
            wrapper: "simplebar-wrapper",
            placeholder: "simplebar-placeholder",
            scrollbar: "simplebar-scrollbar",
            track: "simplebar-track",
            heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
            heightAutoObserverEl: "simplebar-height-auto-observer",
            visible: "simplebar-visible",
            horizontal: "simplebar-horizontal",
            vertical: "simplebar-vertical",
            hover: "simplebar-hover",
            dragging: "simplebar-dragging"
        },
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        timeout: 1e3
    }, pa.instances = new WeakMap, pa.initDOMLoadedElements = function() {
        document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.prototype.forEach.call(document.querySelectorAll('[data-simplebar]:not([data-simplebar="init"])'), (function(t) {
            pa.instances.has(t) || new pa(t, da(t.attributes))
        }))
    }, pa.removeObserver = function() {
        this.globalObserver.disconnect()
    }, pa.initHtmlApi = function() {
        this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(pa.handleMutations), this.globalObserver.observe(document, {
            childList: !0,
            subtree: !0
        })), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements))
    }, pa.handleMutations = function(t) {
        t.forEach((function(t) {
            Array.prototype.forEach.call(t.addedNodes, (function(t) {
                1 === t.nodeType && (t.hasAttribute("data-simplebar") ? !pa.instances.has(t) && new pa(t, da(t.attributes)) : Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar]:not([data-simplebar="init"])'), (function(t) {
                    !pa.instances.has(t) && new pa(t, da(t.attributes))
                })))
            })), Array.prototype.forEach.call(t.removedNodes, (function(t) {
                1 === t.nodeType && (t.hasAttribute('[data-simplebar="init"]') ? pa.instances.has(t) && pa.instances.get(t).unMount() : Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar="init"]'), (function(t) {
                    pa.instances.has(t) && pa.instances.get(t).unMount()
                })))
            }))
        }))
    }, pa.getOptions = da, sn && pa.initHtmlApi();
    class ma extends tt {
        constructor(t) {
            super(), Z(this, t, va, ha, o, {
                class: 0,
                autoHide: 3,
                scrollbarMinSize: 4,
                scrollbarMaxSize: 5,
                classNames: 6,
                forceVisible: 7,
                direction: 8,
                timeout: 9,
                clickOnTrack: 10,
                style: 1
            })
        }
    }
    var ga = {
        $: t => "string" == typeof t ? document.querySelector(t) : t,
        extend: (...t) => Object.assign(...t),
        cumulativeOffset(t) {
            let e = 0,
                n = 0;
            do {
                e += t.offsetTop || 0, n += t.offsetLeft || 0, t = t.offsetParent
            } while (t);
            return {
                top: e,
                left: n
            }
        },
        directScroll: t => t && t !== document && t !== document.body,
        scrollTop(t, e) {
            let n = void 0 !== e;
            return this.directScroll(t) ? n ? t.scrollTop = e : t.scrollTop : n ? document.documentElement.scrollTop = document.body.scrollTop = e : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        },
        scrollLeft(t, e) {
            let n = void 0 !== e;
            return this.directScroll(t) ? n ? t.scrollLeft = e : t.scrollLeft : n ? document.documentElement.scrollLeft = document.body.scrollLeft = e : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        }
    };
    const ba = {
            container: "body",
            duration: 500,
            delay: 0,
            offset: 0,
            easing: function(t) {
                return t < .5 ? 4 * t * t * t : .5 * Math.pow(2 * t - 2, 3) + 1
            },
            onStart: t,
            onDone: t,
            onAborting: t,
            scrollX: !1,
            scrollY: !0
        },
        ya = t => {
            let {
                offset: e,
                duration: n,
                delay: i,
                easing: r,
                x: o = 0,
                y: a = 0,
                scrollX: s,
                scrollY: f,
                onStart: p,
                onDone: h,
                container: v,
                onAborting: m,
                element: g
            } = t;
            "function" == typeof e && (e = e());
            var b = ga.cumulativeOffset(v),
                y = g ? ga.cumulativeOffset(g) : {
                    top: a,
                    left: o
                },
                x = ga.scrollLeft(v),
                k = ga.scrollTop(v),
                w = y.left - b.left + e,
                E = y.top - b.top + e,
                S = w - x,
                O = E - k;
            let _ = !0,
                M = !1,
                A = c() + i,
                $ = A + n;

            function C(t) {
                t || (M = !0, p(g, {
                    x: o,
                    y: a
                }))
            }

            function L(t) {
                ! function(t, e, n) {
                    s && ga.scrollLeft(t, n), f && ga.scrollTop(t, e)
                }(v, k + O * t, x + S * t)
            }

            function z() {
                _ = !1
            }
            return function(t) {
                let e;
                0 === d.size && l(u), new Promise(n => {
                    d.add(e = {
                        c: t,
                        f: n
                    })
                })
            }(t => {
                if (!M && t >= A && C(!1), M && t >= $ && (L(1), z(), h(g, {
                        x: o,
                        y: a
                    })), !_) return m(g, {
                    x: o,
                    y: a
                }), !1;
                if (M) {
                    L(0 + 1 * r((t - A) / n))
                }
                return !0
            }), C(i), L(0), z
        },
        xa = t => ya((t => {
            let e = ga.extend({}, ba, t);
            return e.container = ga.$(e.container), e.element = ga.$(e.element), e
        })(t));
    et("/** Magane: global.css **/\n\n[data-simplebar] {\n\tposition: relative;\n\tflex-direction: column;\n\tflex-wrap: wrap;\n\tjustify-content: flex-start;\n\talign-content: flex-start;\n\talign-items: flex-start;\n}\n\n.simplebar-wrapper {\n\toverflow: hidden;\n\twidth: inherit;\n\theight: inherit;\n\tmax-width: inherit;\n\tmax-height: inherit;\n}\n\n.simplebar-mask {\n\tdirection: inherit;\n\tposition: absolute;\n\toverflow: hidden;\n\tpadding: 0;\n\tmargin: 0;\n\tleft: 0;\n\ttop: 0;\n\tbottom: 0;\n\tright: 0;\n\twidth: auto !important;\n\theight: auto !important;\n\tz-index: 0;\n}\n\n.simplebar-offset {\n\tdirection: inherit !important;\n\tbox-sizing: inherit !important;\n\tresize: none !important;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tbottom: 0;\n\tright: 0;\n\tpadding: 0;\n\tmargin: 0;\n\t-webkit-overflow-scrolling: touch;\n}\n\n.simplebar-content-wrapper {\n\tdirection: inherit;\n\tbox-sizing: border-box !important;\n\tposition: relative;\n\tdisplay: block;\n\theight: 100%; /* Required for horizontal native scrollbar to not appear if parent is taller than natural height */\n\twidth: auto;\n\tvisibility: visible;\n\tmax-width: 100%; /* Not required for horizontal scroll to trigger */\n\tmax-height: 100%; /* Needed for vertical scroll to trigger */\n\tscrollbar-width: none;\n\t-ms-overflow-style: none;\n}\n\n.simplebar-content-wrapper::-webkit-scrollbar,\n.simplebar-hide-scrollbar::-webkit-scrollbar {\n\twidth: 0;\n\theight: 0;\n}\n\n.simplebar-content:before,\n.simplebar-content:after {\n\tcontent: ' ';\n\tdisplay: table;\n}\n\n.simplebar-placeholder {\n\tmax-height: 100%;\n\tmax-width: 100%;\n\twidth: 100%;\n\tpointer-events: none;\n}\n\n.simplebar-height-auto-observer-wrapper {\n\tbox-sizing: inherit !important;\n\theight: 100%;\n\twidth: 100%;\n\tmax-width: 1px;\n\tposition: relative;\n\tfloat: left;\n\tmax-height: 1px;\n\toverflow: hidden;\n\tz-index: -1;\n\tpadding: 0;\n\tmargin: 0;\n\tpointer-events: none;\n\tflex-grow: inherit;\n\tflex-shrink: 0;\n\tflex-basis: 0;\n}\n\n.simplebar-height-auto-observer {\n\tbox-sizing: inherit;\n\tdisplay: block;\n\topacity: 0;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\theight: 1000%;\n\twidth: 1000%;\n\tmin-height: 1px;\n\tmin-width: 1px;\n\toverflow: hidden;\n\tpointer-events: none;\n\tz-index: -1;\n}\n\n.simplebar-track {\n\tz-index: 1;\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tpointer-events: none;\n\toverflow: hidden;\n}\n\n[data-simplebar].simplebar-dragging .simplebar-content {\n\tpointer-events: none;\n\tuser-select: none;\n\t-webkit-user-select: none;\n}\n\n[data-simplebar].simplebar-dragging .simplebar-track {\n\tpointer-events: all;\n}\n\n.simplebar-scrollbar {\n\tposition: absolute;\n\tleft: 0;\n\tright: 0;\n\tmin-height: 10px;\n}\n\n.simplebar-scrollbar:before {\n\tposition: absolute;\n\tcontent: '';\n\tbackground: #696080;\n\tborder-radius: 7px;\n\tleft: 2px;\n\tright: 2px;\n\topacity: 0;\n\ttransition: opacity 0.2s linear;\n}\n\n.simplebar-scrollbar.simplebar-visible:before {\n\t/* When hovered, remove all transitions from drag handle */\n\topacity: 0.5;\n\ttransition: opacity 0s linear;\n}\n\n.simplebar-track.simplebar-vertical {\n\ttop: 0;\n\twidth: 11px;\n}\n\n.simplebar-track.simplebar-vertical .simplebar-scrollbar:before {\n\ttop: 2px;\n\tbottom: 2px;\n}\n\n.simplebar-track.simplebar-horizontal {\n\tleft: 0;\n\theight: 11px;\n}\n\n.simplebar-track.simplebar-horizontal .simplebar-scrollbar:before {\n\theight: 100%;\n\tleft: 2px;\n\tright: 2px;\n}\n\n.simplebar-track.simplebar-horizontal .simplebar-scrollbar {\n\tright: auto;\n\tleft: 0;\n\ttop: 2px;\n\theight: 7px;\n\tmin-height: 0;\n\tmin-width: 10px;\n\twidth: auto;\n}\n\n/* Rtl support */\n[data-simplebar-direction='rtl'] .simplebar-track.simplebar-vertical {\n\tright: auto;\n\tleft: 0;\n}\n\n.hs-dummy-scrollbar-size {\n\tdirection: rtl;\n\tposition: fixed;\n\topacity: 0;\n\tvisibility: hidden;\n\theight: 500px;\n\twidth: 500px;\n\toverflow-y: hidden;\n\toverflow-x: scroll;\n}\n\n.simplebar-hide-scrollbar {\n\tposition: fixed;\n\tleft: 0;\n\tvisibility: hidden;\n\toverflow-y: scroll;\n\tscrollbar-width: none;\n\t-ms-overflow-style: none;\n}\n\niframe#localStorageIframe {\n\tdisplay: none;\n}\n");

    function ka(t, e, n) {
        const i = t.slice();
        return i[79] = e[n], i
    }

    function wa(t, e, n) {
        const i = t.slice();
        return i[79] = e[n], i[81] = n, i
    }

    function Ea(t, e, n) {
        const i = t.slice();
        return i[79] = e[n], i[81] = n, i
    }

    function Sa(t, e, n) {
        const i = t.slice();
        return i[86] = e[n], i[81] = n, i
    }

    function Oa(t, e, n) {
        const i = t.slice();
        return i[79] = e[n], i[81] = n, i
    }

    function _a(t, e, n) {
        const i = t.slice();
        return i[86] = e[n], i[81] = n, i
    }

    function Ma(e) {
        let n, i, r, o, a, s, c, l, d, u, v;
        const g = new ma({
            props: {
                class: "stickers",
                style: "",
                $$slots: {
                    default: [Ta]
                },
                $$scope: {
                    ctx: e
                }
            }
        });
        let y = e[18] && e[18].length && function(e) {
            let n, i;
            return {
                c() {
                    n = m("div"), n.innerHTML = '<div class="icon-favorite"></div>', w(n, "class", "pack"), w(n, "title", "Favorites"), i = x(n, "click", e[66])
                },
                m(t, e) {
                    p(t, n, e)
                },
                p: t,
                d(t) {
                    t && h(n), i()
                }
            }
        }(e);
        const k = new ma({
            props: {
                class: "packs",
                style: "",
                $$slots: {
                    default: [Na]
                },
                $$scope: {
                    ctx: e
                }
            }
        });
        let E = e[3] && Wa(e);
        return {
            c() {
                n = m("div"), G(g.$$.fragment), i = b(), r = m("div"), o = m("div"), a = m("div"), s = m("div"), s.innerHTML = '<div class="icon-plus"></div>', c = b(), y && y.c(), l = b(), G(k.$$.fragment), d = b(), E && E.c(), w(s, "class", "pack"), w(s, "title", "Manage subscribed packs"), w(a, "class", "packs-wrapper"), w(o, "class", "packs packs-controls"), w(r, "class", "bottom-toolbar"), w(n, "class", "stickerWindow"), v = x(s, "click", e[65])
            },
            m(t, e) {
                p(t, n, e), J(g, n, null), f(n, i), f(n, r), f(r, o), f(o, a), f(a, s), f(a, c), y && y.m(a, null), f(r, l), J(k, r, null), f(n, d), E && E.m(n, null), u = !0
            },
            p(t, e) {
                const i = {};
                224 & e[0] | 134217728 & e[2] && (i.$$scope = {
                    dirty: e,
                    ctx: t
                }), g.$set(i), t[18] && t[18].length && y.p(t, e);
                const r = {};
                128 & e[0] | 134217728 & e[2] && (r.$$scope = {
                    dirty: e,
                    ctx: t
                }), k.$set(r), t[3] ? E ? (E.p(t, e), U(E, 1)) : (E = Wa(t), E.c(), U(E, 1), E.m(n, null)) : E && (q(), X(E, 1, 1, () => {
                    E = null
                }), H())
            },
            i(t) {
                u || (U(g.$$.fragment, t), U(k.$$.fragment, t), U(E), u = !0)
            },
            o(t) {
                X(g.$$.fragment, t), X(k.$$.fragment, t), X(E), u = !1
            },
            d(t) {
                t && h(n), K(g), y && y.d(), K(k), E && E.d(), v()
            }
        }
    }

    function Aa(t) {
        let e;
        return {
            c() {
                e = m("h3"), e.textContent = "It seems you aren't subscribed to any pack yet. Click the plus symbol on the bottom-left to get started! 🎉", w(e, "class", "getStarted")
            },
            m(t, n) {
                p(t, e, n)
            },
            d(t) {
                t && h(e)
            }
        }
    }

    function $a(t) {
        let e, n, i, r, o, a = t[21](t[5].length) + "",
            s = t[5],
            c = [];
        for (let e = 0; e < s.length; e += 1) c[e] = Ca(_a(t, s, e));
        return {
            c() {
                e = m("div"), n = m("span"), i = g("Favorites"), o = b();
                for (let t = 0; t < c.length; t += 1) c[t].c();
                r = new M(a, null), w(n, "id", "pfavorites"), w(e, "class", "pack")
            },
            m(t, a) {
                p(t, e, a), f(e, n), f(n, i), r.m(n), f(e, o);
                for (let t = 0; t < c.length; t += 1) c[t].m(e, null)
            },
            p(t, n) {
                if (32 & n[0] && a !== (a = t[21](t[5].length) + "") && r.p(a), 720992 & n[0]) {
                    let i;
                    for (s = t[5], i = 0; i < s.length; i += 1) {
                        const r = _a(t, s, i);
                        c[i] ? c[i].p(r, n) : (c[i] = Ca(r), c[i].c(), c[i].m(e, null))
                    }
                    for (; i < c.length; i += 1) c[i].d(1);
                    c.length = s.length
                }
            },
            d(t) {
                t && h(e), v(c, t)
            }
        }
    }

    function Ca(t) {
        let e, n, r, o, a, s, c, l, d;

        function u(...e) {
            return t[61](t[86], ...e)
        }

        function v(...e) {
            return t[62](t[86], ...e)
        }
        return {
            c() {
                e = m("div"), n = m("img"), s = b(), c = m("div"), c.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24"><path fill="grey" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></svg>', l = b(), w(n, "class", "image"), n.src !== (r = `${t[16](t[86].pack,t[86].id)}`) && w(n, "src", r), w(n, "alt", o = t[86].pack + " - " + t[86].id), w(n, "title", a = t[6][t[86].pack].name), w(c, "class", "deleteFavorite"), w(c, "title", "Unfavorite"), w(e, "class", "sticker"), d = [x(n, "click", u), x(c, "click", v)]
            },
            m(t, i) {
                p(t, e, i), f(e, n), f(e, s), f(e, c), f(e, l)
            },
            p(e, i) {
                t = e, 32 & i[0] && n.src !== (r = `${t[16](t[86].pack,t[86].id)}`) && w(n, "src", r), 32 & i[0] && o !== (o = t[86].pack + " - " + t[86].id) && w(n, "alt", o), 96 & i[0] && a !== (a = t[6][t[86].pack].name) && w(n, "title", a)
            },
            d(t) {
                t && h(e), i(d)
            }
        }
    }

    function La(t) {
        let e, n, r, o, a, s, c;

        function l(...e) {
            return t[63](t[79], t[86], ...e)
        }

        function d(...e) {
            return t[64](t[79], t[86], ...e)
        }
        return {
            c() {
                e = m("div"), n = m("img"), a = b(), s = m("div"), s.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24"><path fill="grey" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></svg>', w(n, "class", "image"), n.src !== (r = `${t[16](t[79].id,t[86])}`) && w(n, "src", r), w(n, "alt", o = t[79].id + " - " + t[86]), w(s, "class", "addFavorite"), w(s, "title", "Favorite"), w(e, "class", "sticker"), c = [x(n, "click", l), x(s, "click", d)]
            },
            m(t, i) {
                p(t, e, i), f(e, n), f(e, a), f(e, s)
            },
            p(e, i) {
                t = e, 128 & i[0] && n.src !== (r = `${t[16](t[79].id,t[86])}`) && w(n, "src", r), 128 & i[0] && o !== (o = t[79].id + " - " + t[86]) && w(n, "alt", o)
            },
            d(t) {
                t && h(e), i(c)
            }
        }
    }

    function za(t) {
        let e, n, i, r, o, a, s, c = t[79].name + "",
            l = t[21](t[79].files.length) + "",
            d = t[79].files,
            u = [];
        for (let e = 0; e < d.length; e += 1) u[e] = La(Sa(t, d, e));
        return {
            c() {
                e = m("div"), n = m("span"), i = g(c), a = b();
                for (let t = 0; t < u.length; t += 1) u[t].c();
                s = b(), r = new M(l, null), w(n, "id", o = "p" + t[79].id), w(e, "class", "pack")
            },
            m(t, o) {
                p(t, e, o), f(e, n), f(n, i), r.m(n), f(e, a);
                for (let t = 0; t < u.length; t += 1) u[t].m(e, null);
                f(e, s)
            },
            p(t, a) {
                if (128 & a[0] && c !== (c = t[79].name + "") && E(i, c), 128 & a[0] && l !== (l = t[21](t[79].files.length) + "") && r.p(l), 128 & a[0] && o !== (o = "p" + t[79].id) && w(n, "id", o), 458880 & a[0]) {
                    let n;
                    for (d = t[79].files, n = 0; n < d.length; n += 1) {
                        const i = Sa(t, d, n);
                        u[n] ? u[n].p(i, a) : (u[n] = La(i), u[n].c(), u[n].m(e, s))
                    }
                    for (; n < u.length; n += 1) u[n].d(1);
                    u.length = d.length
                }
            },
            d(t) {
                t && h(e), v(u, t)
            }
        }
    }

    function Ta(t) {
        let e, n, i, r = !t[5] && !t[7] && Aa(),
            o = t[5] && t[5].length && $a(t),
            a = t[7],
            s = [];
        for (let e = 0; e < a.length; e += 1) s[e] = za(Oa(t, a, e));
        return {
            c() {
                r && r.c(), e = b(), o && o.c(), n = b();
                for (let t = 0; t < s.length; t += 1) s[t].c();
                i = y()
            },
            m(t, a) {
                r && r.m(t, a), p(t, e, a), o && o.m(t, a), p(t, n, a);
                for (let e = 0; e < s.length; e += 1) s[e].m(t, a);
                p(t, i, a)
            },
            p(t, c) {
                if (t[5] || t[7] ? r && (r.d(1), r = null) : r || (r = Aa(), r.c(), r.m(e.parentNode, e)), t[5] && t[5].length ? o ? o.p(t, c) : (o = $a(t), o.c(), o.m(n.parentNode, n)) : o && (o.d(1), o = null), 2556032 & c[0]) {
                    let e;
                    for (a = t[7], e = 0; e < a.length; e += 1) {
                        const n = Oa(t, a, e);
                        s[e] ? s[e].p(n, c) : (s[e] = za(n), s[e].c(), s[e].m(i.parentNode, i))
                    }
                    for (; e < s.length; e += 1) s[e].d(1);
                    s.length = a.length
                }
            },
            d(t) {
                r && r.d(t), t && h(e), o && o.d(t), t && h(n), v(s, t), t && h(i)
            }
        }
    }

    function ja(t) {
        let e, n, i;

        function r(...e) {
            return t[67](t[79], ...e)
        }
        return {
            c() {
                e = m("div"), w(e, "class", "pack"), w(e, "title", n = t[79].name), O(e, "background-image", `url(${t[16](t[79].id,t[79].files[0])})`), i = x(e, "click", r)
            },
            m(t, n) {
                p(t, e, n)
            },
            p(i, r) {
                t = i, 128 & r[0] && n !== (n = t[79].name) && w(e, "title", n), 128 & r[0] && O(e, "background-image", `url(${t[16](t[79].id,t[79].files[0])})`)
            },
            d(t) {
                t && h(e), i()
            }
        }
    }

    function Na(t) {
        let e, n = t[7],
            i = [];
        for (let e = 0; e < n.length; e += 1) i[e] = ja(Ea(t, n, e));
        return {
            c() {
                e = m("div");
                for (let t = 0; t < i.length; t += 1) i[t].c();
                w(e, "class", "packs-wrapper")
            },
            m(t, n) {
                p(t, e, n);
                for (let t = 0; t < i.length; t += 1) i[t].m(e, null)
            },
            p(t, r) {
                if (67174528 & r[0]) {
                    let o;
                    for (n = t[7], o = 0; o < n.length; o += 1) {
                        const a = Ea(t, n, o);
                        i[o] ? i[o].p(a, r) : (i[o] = ja(a), i[o].c(), i[o].m(e, null))
                    }
                    for (; o < i.length; o += 1) i[o].d(1);
                    i.length = n.length
                }
            },
            d(t) {
                t && h(e), v(i, t)
            }
        }
    }

    function Wa(t) {
        let e, n, r, o, a, s, c, l, d, u, v, g, y, k, E, S;
        const O = [Pa, Ia, Ra],
            M = [];

        function A(t, e) {
            return 0 === t[4] ? 0 : 1 === t[4] ? 1 : 2 === t[4] ? 2 : -1
        }
        return ~(y = A(t)) && (k = M[y] = O[y](t)), {
            c() {
                e = m("div"), n = m("div"), r = b(), o = m("div"), a = m("div"), s = m("div"), c = m("div"), c.textContent = "Installed", l = b(), d = m("div"), d.textContent = "Packs", u = b(), v = m("div"), v.textContent = "LINE", g = b(), k && k.c(), w(n, "class", "modal-close"), w(c, "class", "tab"), _(c, "is-active", 0 === t[4]), w(d, "class", "tab"), _(d, "is-active", 1 === t[4]), w(v, "class", "tab"), _(v, "is-active", 2 === t[4]), w(s, "class", "tabs"), w(a, "class", "stickersConfig"), w(o, "class", "modal-content"), w(e, "class", "stickersModal"), S = [x(n, "click", t[68]), x(c, "click", t[69]), x(d, "click", t[70]), x(v, "click", t[71])]
            },
            m(t, i) {
                p(t, e, i), f(e, n), f(e, r), f(e, o), f(o, a), f(a, s), f(s, c), f(s, l), f(s, d), f(s, u), f(s, v), f(a, g), ~y && M[y].m(a, null), E = !0
            },
            p(t, e) {
                16 & e[0] && _(c, "is-active", 0 === t[4]), 16 & e[0] && _(d, "is-active", 1 === t[4]), 16 & e[0] && _(v, "is-active", 2 === t[4]);
                let n = y;
                y = A(t), y === n ? ~y && M[y].p(t, e) : (k && (q(), X(M[n], 1, 1, () => {
                    M[n] = null
                }), H()), ~y ? (k = M[y], k || (k = M[y] = O[y](t), k.c()), U(k, 1), k.m(a, null)) : k = null)
            },
            i(t) {
                E || (U(k), E = !0)
            },
            o(t) {
                X(k), E = !1
            },
            d(t) {
                t && h(e), ~y && M[y].d(), i(S)
            }
        }
    }

    function Ra(e) {
        let n, r, o, a, s, c, l;
        return {
            c() {
                n = m("div"), r = m("p"), r.innerHTML = "If you are looking for a sticker pack that is not provided by magane, you can go to the LINE store and pick whatever pack you want and paste the full URL in the box below. <br><br>For example: https://store.line.me/stickershop/product/17573/ja", o = b(), a = m("input"), s = b(), c = m("button"), c.textContent = "Add", w(a, "class", "inputQuery"), w(a, "type", "text"), w(a, "placeholder", "LINE Sticker Pack URL"), w(c, "class", "button is-primary"), w(n, "class", "tabContent line-proxy"), l = [x(a, "input", e[77]), x(c, "click", e[78])]
            },
            m(t, i) {
                p(t, n, i), f(n, r), f(n, o), f(n, a), S(a, e[11]), f(n, s), f(n, c)
            },
            p(t, e) {
                2048 & e[0] && a.value !== t[11] && S(a, t[11])
            },
            i: t,
            o: t,
            d(t) {
                t && h(n), i(l)
            }
        }
    }

    function Ia(t) {
        let e, n, r, o;
        const a = new ma({
            props: {
                class: "tabContent",
                style: "",
                $$slots: {
                    default: [qa]
                },
                $$scope: {
                    ctx: t
                }
            }
        });
        return {
            c() {
                e = m("input"), n = b(), G(a.$$.fragment), w(e, "class", "inputQuery"), w(e, "type", "text"), w(e, "placeholder", "Search"), o = [x(e, "keyup", t[20]), x(e, "input", t[73])]
            },
            m(i, o) {
                p(i, e, o), S(e, t[12]), p(i, n, o), J(a, i, o), r = !0
            },
            p(t, n) {
                4096 & n[0] && e.value !== t[12] && S(e, t[12]);
                const i = {};
                1792 & n[0] | 134217728 & n[2] && (i.$$scope = {
                    dirty: n,
                    ctx: t
                }), a.$set(i)
            },
            i(t) {
                r || (U(a.$$.fragment, t), r = !0)
            },
            o(t) {
                X(a.$$.fragment, t), r = !1
            },
            d(t) {
                t && h(e), t && h(n), K(a, t), i(o)
            }
        }
    }

    function Pa(t) {
        let e;
        const n = new ma({
            props: {
                class: "tabContent",
                style: "",
                $$slots: {
                    default: [Xa]
                },
                $$scope: {
                    ctx: t
                }
            }
        });
        return {
            c() {
                G(n.$$.fragment)
            },
            m(t, i) {
                J(n, t, i), e = !0
            },
            p(t, e) {
                const i = {};
                128 & e[0] | 134217728 & e[2] && (i.$$scope = {
                    dirty: e,
                    ctx: t
                }), n.$set(i)
            },
            i(t) {
                e || (U(n.$$.fragment, t), e = !0)
            },
            o(t) {
                X(n.$$.fragment, t), e = !1
            },
            d(t) {
                K(n, t)
            }
        }
    }

    function Da(t) {
        let e, n;

        function i(...e) {
            return t[75](t[79], ...e)
        }
        return {
            c() {
                e = m("button"), e.textContent = "Add", w(e, "class", "button is-primary"), n = x(e, "click", i)
            },
            m(t, n) {
                p(t, e, n)
            },
            p(e, n) {
                t = e
            },
            d(t) {
                t && h(e), n()
            }
        }
    }

    function Fa(t) {
        let e, n;

        function i(...e) {
            return t[74](t[79], ...e)
        }
        return {
            c() {
                e = m("button"), e.textContent = "Del", w(e, "class", "button is-danger"), n = x(e, "click", i)
            },
            m(t, n) {
                p(t, e, n)
            },
            p(e, n) {
                t = e
            },
            d(t) {
                t && h(e), n()
            }
        }
    }

    function Ba(t) {
        let e, n;

        function i(...e) {
            return t[76](t[79], ...e)
        }
        return {
            c() {
                e = m("button"), w(e, "class", "button deletePack"), n = x(e, "click", i)
            },
            m(t, n) {
                p(t, e, n)
            },
            p(e, n) {
                t = e
            },
            d(t) {
                t && h(e), n()
            }
        }
    }

    function Va(t) {
        let e, n, i, r, o, a, s, c, l, d, u, v, y, x, k, S, _ = t[79].name + "",
            A = t[79].count + "",
            $ = t[22](t[79].id) + "";

        function C(t, e) {
            return (null == x || 768 & e[0]) && (x = !!t[8].includes(t[79].id)), x ? Fa : Da
        }
        let L = C(t, -1),
            z = L(t),
            T = t[10][t[79].id] && Ba(t);
        return {
            c() {
                e = m("div"), n = m("div"), i = b(), r = m("div"), o = m("span"), a = g(_), s = b(), c = m("span"), l = g(A), d = g(" stickers"), v = b(), y = m("div"), z.c(), k = b(), T && T.c(), S = b(), w(n, "class", "preview"), O(n, "background-image", `url(${t[16](t[79].id,t[79].files[0])})`), u = new M($, null), w(r, "class", "info"), w(y, "class", "action"), w(e, "class", "pack")
            },
            m(t, h) {
                p(t, e, h), f(e, n), f(e, i), f(e, r), f(r, o), f(o, a), f(r, s), f(r, c), f(c, l), f(c, d), u.m(c), f(e, v), f(e, y), z.m(y, null), f(y, k), T && T.m(y, null), f(e, S)
            },
            p(t, e) {
                512 & e[0] && O(n, "background-image", `url(${t[16](t[79].id,t[79].files[0])})`), 512 & e[0] && _ !== (_ = t[79].name + "") && E(a, _), 512 & e[0] && A !== (A = t[79].count + "") && E(l, A), 512 & e[0] && $ !== ($ = t[22](t[79].id) + "") && u.p($), L === (L = C(t, e)) && z ? z.p(t, e) : (z.d(1), z = L(t), z && (z.c(), z.m(y, k))), t[10][t[79].id] ? T ? T.p(t, e) : (T = Ba(t), T.c(), T.m(y, null)) : T && (T.d(1), T = null)
            },
            d(t) {
                t && h(e), z.d(), T && T.d()
            }
        }
    }

    function qa(t) {
        let e, n = t[9],
            i = [];
        for (let e = 0; e < n.length; e += 1) i[e] = Va(ka(t, n, e));
        return {
            c() {
                for (let t = 0; t < i.length; t += 1) i[t].c();
                e = y()
            },
            m(t, n) {
                for (let e = 0; e < i.length; e += 1) i[e].m(t, n);
                p(t, e, n)
            },
            p(t, r) {
                if (4310784 & r[0]) {
                    let o;
                    for (n = t[9], o = 0; o < n.length; o += 1) {
                        const a = ka(t, n, o);
                        i[o] ? i[o].p(a, r) : (i[o] = Va(a), i[o].c(), i[o].m(e.parentNode, e))
                    }
                    for (; o < i.length; o += 1) i[o].d(1);
                    i.length = n.length
                }
            },
            d(t) {
                v(i, t), t && h(e)
            }
        }
    }

    function Ha(t) {
        let e, n, r, o, a;
        return {
            c() {
                e = m("div"), n = m("input"), w(n, "class", "inputPackIndex"), w(n, "type", "text"), w(n, "data-pack", r = t[79].id), n.value = o = t[81] + 1, w(e, "class", "index"), a = [x(n, "click", Ja), x(n, "keypress", t[27])]
            },
            m(t, i) {
                p(t, e, i), f(e, n)
            },
            p(t, e) {
                128 & e[0] && r !== (r = t[79].id) && w(n, "data-pack", r), 128 & e[0] && o !== (o = t[81] + 1) && (n.value = o)
            },
            d(t) {
                t && h(e), i(a)
            }
        }
    }

    function Ua(t, e) {
        let n, i, r, o, a, s, c, l, d, u, v, y, k, S, _, A, $, C = e[79].name + "",
            L = e[79].count + "",
            z = e[22](e[79].id) + "",
            T = e[7].length > 1 && Ha(e);

        function j(...t) {
            return e[72](e[79], ...t)
        }
        return {
            key: t,
            first: null,
            c() {
                n = m("div"), T && T.c(), i = b(), r = m("div"), o = b(), a = m("div"), s = m("span"), c = g(C), l = b(), d = m("span"), u = g(L), v = g(" stickers"), k = b(), S = m("div"), _ = m("button"), _.textContent = "Del", A = b(), w(r, "class", "preview"), O(r, "background-image", `url(${e[16](e[79].id,e[79].files[0])})`), y = new M(z, null), w(a, "class", "info"), w(_, "class", "button is-danger"), w(S, "class", "action"), w(n, "class", "pack"), $ = x(_, "click", j), this.first = n
            },
            m(t, e) {
                p(t, n, e), T && T.m(n, null), f(n, i), f(n, r), f(n, o), f(n, a), f(a, s), f(s, c), f(a, l), f(a, d), f(d, u), f(d, v), y.m(d), f(n, k), f(n, S), f(S, _), f(n, A)
            },
            p(t, o) {
                (e = t)[7].length > 1 ? T ? T.p(e, o) : (T = Ha(e), T.c(), T.m(n, i)) : T && (T.d(1), T = null), 128 & o[0] && O(r, "background-image", `url(${e[16](e[79].id,e[79].files[0])})`), 128 & o[0] && C !== (C = e[79].name + "") && E(c, C), 128 & o[0] && L !== (L = e[79].count + "") && E(u, L), 128 & o[0] && z !== (z = e[22](e[79].id) + "") && y.p(z)
            },
            d(t) {
                t && h(n), T && T.d(), $()
            }
        }
    }

    function Xa(t) {
        let e, n = [],
            i = new Map,
            r = t[7];
        const o = t => t[79].id;
        for (let e = 0; e < r.length; e += 1) {
            let a = wa(t, r, e),
                s = o(a);
            i.set(s, n[e] = Ua(s, a))
        }
        return {
            c() {
                for (let t = 0; t < n.length; t += 1) n[t].c();
                e = y()
            },
            m(t, i) {
                for (let e = 0; e < n.length; e += 1) n[e].m(t, i);
                p(t, e, i)
            },
            p(t, r) {
                const a = t[7];
                n = function(t, e, n, i, r, o, a, s, c, l, d, u) {
                    let f = t.length,
                        p = o.length,
                        h = f;
                    const v = {};
                    for (; h--;) v[t[h].key] = h;
                    const m = [],
                        g = new Map,
                        b = new Map;
                    for (h = p; h--;) {
                        const t = u(r, o, h),
                            s = n(t);
                        let c = a.get(s);
                        c ? i && c.p(t, e) : (c = l(s, t), c.c()), g.set(s, m[h] = c), s in v && b.set(s, Math.abs(h - v[s]))
                    }
                    const y = new Set,
                        x = new Set;

                    function k(t) {
                        U(t, 1), t.m(s, d), a.set(t.key, t), d = t.first, p--
                    }
                    for (; f && p;) {
                        const e = m[p - 1],
                            n = t[f - 1],
                            i = e.key,
                            r = n.key;
                        e === n ? (d = e.first, f--, p--) : g.has(r) ? !a.has(i) || y.has(i) ? k(e) : x.has(r) ? f-- : b.get(i) > b.get(r) ? (x.add(i), k(e)) : (y.add(r), f--) : (c(n, a), f--)
                    }
                    for (; f--;) {
                        const e = t[f];
                        g.has(e.key) || c(e, a)
                    }
                    for (; p;) k(m[p - 1]);
                    return m
                }(n, r, o, 1, t, a, i, e.parentNode, Y, Ua, e, wa)
            },
            d(t) {
                for (let e = 0; e < n.length; e += 1) n[e].d(t);
                t && h(e)
            }
        }
    }

    function Ya(t) {
        let e, n, r, o, a, s, c = t[2] && Ma(t);
        return {
            c() {
                var i;
                e = m("main"), n = m("div"), r = m("div"), r.innerHTML = '<img class="channel-textarea-stickers-content" src="https://discordapp.com/assets/a42df564f00ed8bbca652dc9345d3834.svg" alt="Magane menu button">', o = b(), c && c.c(), w(r, "class", "channel-textarea-emoji channel-textarea-stickers"), _(r, "active", t[2]), w(n, "id", "magane"), O(n, "top", `${t[0].top}px`), O(n, "left", `${t[0].left}px`), O(n, "display", t[1] ? "flex" : "none"), s = [x(r, "click", t[59]), x(r, "contextmenu", k((i = t[60], function(t) {
                    return t.preventDefault(), i.call(this, t)
                })))]
            },
            m(t, i) {
                p(t, e, i), f(e, n), f(n, r), f(n, o), c && c.m(n, null), a = !0
            },
            p(t, e) {
                4 & e[0] && _(r, "active", t[2]), t[2] ? c ? (c.p(t, e), U(c, 1)) : (c = Ma(t), c.c(), U(c, 1), c.m(n, null)) : c && (q(), X(c, 1, 1, () => {
                    c = null
                }), H()), (!a || 1 & e[0]) && O(n, "top", `${t[0].top}px`), (!a || 1 & e[0]) && O(n, "left", `${t[0].left}px`), (!a || 2 & e[0]) && O(n, "display", t[1] ? "flex" : "none")
            },
            i(t) {
                a || (U(c), a = !0)
            },
            o(t) {
                X(c), a = !1
            },
            d(t) {
                t && h(e), c && c.d(), i(s)
            }
        }
    }
    et('/** Magane: main.scss **/\ndiv#magane {\n  display: flex;\n  flex-direction: row;\n  height: 44px;\n  position: absolute;\n  z-index: 99; }\n  div#magane button, div#magane input, div#magane select, div#magane label, div#magane span, div#magane p, div#magane a, div#magane li, div#magane ul, div#magane div {\n    font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;\n    color: var(--header-secondary);\n    font-weight: 400;\n    line-height: 1.5;\n    font-size: 16px;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    text-rendering: optimizeLegibility;\n    -webkit-text-size-adjust: 100%;\n    -moz-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n    text-size-adjust: 100%; }\n  div#magane div.channel-textarea-stickers {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    filter: grayscale(100%);\n    transition: all 0.2s ease; }\n    div#magane div.channel-textarea-stickers:hover, div#magane div.channel-textarea-stickers.active {\n      transform: scale(1.15);\n      filter: grayscale(0%); }\n  div#magane img.channel-textarea-stickers-content {\n    width: 22px;\n    height: 22px; }\n  div#magane div.stickerWindow {\n    z-index: 2000;\n    width: 600px;\n    min-height: 200px;\n    right: 270px;\n    bottom: 82px;\n    position: fixed;\n    background: var(--background-secondary);\n    max-height: 600px;\n    overflow: hidden;\n    transition: all 0.2s ease;\n    border-radius: 4px;\n    box-shadow: var(--elevation-stroke), var(--elevation-high); }\n    div#magane div.stickerWindow div.stickers {\n      overflow: auto;\n      height: 550px !important;\n      margin-bottom: 100px;\n      position: relative; }\n      div#magane div.stickerWindow div.stickers h3.getStarted {\n        text-align: center;\n        padding-top: 40%;\n        pointer-events: none; }\n      div#magane div.stickerWindow div.stickers div.pack {\n        float: left;\n        display: flex;\n        flex-flow: wrap;\n        justify-content: center;\n        padding: 25px;\n        width: 100%;\n        box-sizing: border-box; }\n        div#magane div.stickerWindow div.stickers div.pack span {\n          color: var(--header-secondary);\n          width: 100%;\n          cursor: auto;\n          padding-left: 10px;\n          margin: 10px 0px; }\n          div#magane div.stickerWindow div.stickers div.pack span .counts {\n            padding-left: 0; }\n          div#magane div.stickerWindow div.stickers div.pack span .counts span {\n            padding: 0 0.5em; }\n        div#magane div.stickerWindow div.stickers div.pack div.sticker {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          width: 100px;\n          height: 100px;\n          float: left;\n          position: relative; }\n          div#magane div.stickerWindow div.stickers div.pack div.sticker .image {\n            cursor: pointer;\n            max-height: 100%;\n            max-width: 100%; }\n          div#magane div.stickerWindow div.stickers div.pack div.sticker div.addFavorite, div#magane div.stickerWindow div.stickers div.pack div.sticker div.deleteFavorite {\n            width: 20px;\n            height: 20px;\n            position: absolute;\n            right: 0;\n            transition: all 0.2s ease;\n            display: none;\n            z-index: 2; }\n            div#magane div.stickerWindow div.stickers div.pack div.sticker div.addFavorite:hover, div#magane div.stickerWindow div.stickers div.pack div.sticker div.deleteFavorite:hover {\n              transform: scale(1.25); }\n              div#magane div.stickerWindow div.stickers div.pack div.sticker div.addFavorite:hover svg path, div#magane div.stickerWindow div.stickers div.pack div.sticker div.deleteFavorite:hover svg path {\n                transition: all 0.2s ease; }\n          div#magane div.stickerWindow div.stickers div.pack div.sticker div.addFavorite {\n            bottom: 0; }\n            div#magane div.stickerWindow div.stickers div.pack div.sticker div.addFavorite:hover svg path {\n              fill: #2ECC71; }\n          div#magane div.stickerWindow div.stickers div.pack div.sticker div.deleteFavorite {\n            top: 0px;\n            transform: rotateZ(45deg); }\n            div#magane div.stickerWindow div.stickers div.pack div.sticker div.deleteFavorite:hover {\n              transform: scale(1.25) rotateZ(45deg); }\n              div#magane div.stickerWindow div.stickers div.pack div.sticker div.deleteFavorite:hover svg path {\n                fill: #F04747; }\n          div#magane div.stickerWindow div.stickers div.pack div.sticker:hover div.addFavorite,\n          div#magane div.stickerWindow div.stickers div.pack div.sticker:hover div.deleteFavorite {\n            display: block;\n            cursor: pointer; }\n    div#magane div.stickerWindow div.bottom-toolbar {\n      position: absolute;\n      bottom: 0;\n      width: 100%;\n      height: 50px;\n      background: var(--background-tertiary);\n      display: flex; }\n    div#magane div.stickerWindow div.packs {\n      flex: 1 0 auto;\n      overflow: auto hidden; }\n      div#magane div.stickerWindow div.packs.packs-controls {\n        flex-grow: 0; }\n      div#magane div.stickerWindow div.packs div.packs-wrapper {\n        white-space: nowrap;\n        float: left;\n        width: 100%;\n        font-size: 0;\n        /* quick hax to clear whitespace */ }\n      div#magane div.stickerWindow div.packs div.pack {\n        display: inline-block;\n        height: 40px;\n        width: 40px;\n        margin: 5px;\n        cursor: pointer;\n        background-position: center;\n        background-size: contain;\n        background-repeat: no-repeat;\n        transition: all 0.2s ease;\n        filter: grayscale(100%); }\n        div#magane div.stickerWindow div.packs div.pack:hover,\n        div#magane div.stickerWindow div.packs div.pack div.pack.active {\n          transform: scale(1.25);\n          filter: grayscale(0%); }\n        div#magane div.stickerWindow div.packs div.pack > div {\n          background-image: url("/assets/f24711dae4f6d6b28335e866a93e9d9b.png");\n          width: 22px;\n          height: 22px;\n          background-size: 924px 704px;\n          background-repeat: no-repeat;\n          margin-top: 8px;\n          margin-left: 9px; }\n        div#magane div.stickerWindow div.packs div.pack div.icon-favorite {\n          background-position: -462px -132px; }\n        div#magane div.stickerWindow div.packs div.pack div.icon-plus {\n          background-position: -374px -484px;\n          /* make it greenish */\n          filter: hue-rotate(260deg) brightness(3) contrast(4.5); }\n  div#magane .stickersModal {\n    z-index: 2001;\n    bottom: 0;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden; }\n    div#magane .stickersModal.is-active {\n      display: flex; }\n    div#magane .stickersModal .inputQuery {\n      width: calc(100% - 30px);\n      height: 36px;\n      box-sizing: border-box;\n      margin: 0 15px 10px;\n      padding: 5px 12px;\n      border-radius: 3px;\n      border: 1px solid var(--background-secondary);\n      background: var(--background-secondary);\n      color: var(--header-secondary); }\n    div#magane .stickersModal .inputPackIndex {\n      width: 55px;\n      height: 36px;\n      box-sizing: border-box;\n      padding: 5px 12px;\n      border-radius: 3px;\n      border: 1px solid var(--background-secondary);\n      background: var(--background-secondary);\n      color: var(--header-secondary);\n      text-align: center; }\n    div#magane .stickersModal .modal-background {\n      bottom: 0;\n      left: 0;\n      position: absolute;\n      right: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(10, 10, 10, 0.86); }\n    div#magane .stickersModal .modal-content,\n    div#magane .stickersModal .modal-card {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      left: 0;\n      top: 0;\n      background: var(--background-tertiary);\n      overflow: hidden; }\n    div#magane .stickersModal .modal-content .stickersConfig {\n      height: 100%;\n      width: 100%;\n      display: flex;\n      flex-direction: column; }\n      div#magane .stickersModal .modal-content .stickersConfig .tabs {\n        height: 75px;\n        width: 100%;\n        text-align: center;\n        margin-bottom: 10px; }\n        div#magane .stickersModal .modal-content .stickersConfig .tabs .tab {\n          color: var(--header-secondary);\n          display: inline-block;\n          border: none;\n          border-top: 0px transparent;\n          border-left: 0px transparent;\n          border-right: 0px transparent;\n          border-width: 1px;\n          border-style: solid;\n          border-bottom-color: var(--header-secondary);\n          padding: 20px;\n          cursor: pointer; }\n          div#magane .stickersModal .modal-content .stickersConfig .tabs .tab:hover, div#magane .stickersModal .modal-content .stickersConfig .tabs .tab.is-active {\n            border-bottom-color: var(--interactive-active);\n            color: var(--interactive-active); }\n      div#magane .stickersModal .modal-content .stickersConfig div.tabContent {\n        height: 100%;\n        width: 100%;\n        overflow-y: auto; }\n        div#magane .stickersModal .modal-content .stickersConfig div.tabContent.line-proxy {\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center; }\n          div#magane .stickersModal .modal-content .stickersConfig div.tabContent.line-proxy p {\n            padding: 2rem;\n            padding-top: 0;\n            margin-top: -5rem;\n            user-select: text; }\n      div#magane .stickersModal .modal-content .stickersConfig div.pack {\n        height: 75px;\n        width: 600px;\n        /* if not static, its width may flicker due to simplebar */\n        float: left;\n        display: flex;\n        padding: 0 20px;\n        box-sizing: border-box;\n        margin-bottom: 5px; }\n        div#magane .stickersModal .modal-content .stickersConfig div.pack:last-of-type {\n          margin-bottom: 0; }\n        div#magane .stickersModal .modal-content .stickersConfig div.pack div.index,\n        div#magane .stickersModal .modal-content .stickersConfig div.pack div.handle,\n        div#magane .stickersModal .modal-content .stickersConfig div.pack div.preview,\n        div#magane .stickersModal .modal-content .stickersConfig div.pack div.action {\n          flex: 0 0 auto;\n          min-width: 75px;\n          height: 75px; }\n          div#magane .stickersModal .modal-content .stickersConfig div.pack div.index button.deletePack,\n          div#magane .stickersModal .modal-content .stickersConfig div.pack div.handle button.deletePack,\n          div#magane .stickersModal .modal-content .stickersConfig div.pack div.preview button.deletePack,\n          div#magane .stickersModal .modal-content .stickersConfig div.pack div.action button.deletePack {\n            width: 36px;\n            height: 36px; }\n            div#magane .stickersModal .modal-content .stickersConfig div.pack div.index button.deletePack:before, div#magane .stickersModal .modal-content .stickersConfig div.pack div.index button.deletePack:after,\n            div#magane .stickersModal .modal-content .stickersConfig div.pack div.handle button.deletePack:before,\n            div#magane .stickersModal .modal-content .stickersConfig div.pack div.handle button.deletePack:after,\n            div#magane .stickersModal .modal-content .stickersConfig div.pack div.preview button.deletePack:before,\n            div#magane .stickersModal .modal-content .stickersConfig div.pack div.preview button.deletePack:after,\n            div#magane .stickersModal .modal-content .stickersConfig div.pack div.action button.deletePack:before,\n            div#magane .stickersModal .modal-content .stickersConfig div.pack div.action button.deletePack:after {\n              background-color: var(--header-secondary);\n              content: "";\n              display: block;\n              left: 50%;\n              position: absolute;\n              top: 50%;\n              transform: translateX(-50%) translateY(-50%) rotate(45deg);\n              transform-origin: center center; }\n            div#magane .stickersModal .modal-content .stickersConfig div.pack div.index button.deletePack:before,\n            div#magane .stickersModal .modal-content .stickersConfig div.pack div.handle button.deletePack:before,\n            div#magane .stickersModal .modal-content .stickersConfig div.pack div.preview button.deletePack:before,\n            div#magane .stickersModal .modal-content .stickersConfig div.pack div.action button.deletePack:before {\n              height: 2px;\n              width: 50%; }\n            div#magane .stickersModal .modal-content .stickersConfig div.pack div.index button.deletePack:after,\n            div#magane .stickersModal .modal-content .stickersConfig div.pack div.handle button.deletePack:after,\n            div#magane .stickersModal .modal-content .stickersConfig div.pack div.preview button.deletePack:after,\n            div#magane .stickersModal .modal-content .stickersConfig div.pack div.action button.deletePack:after {\n              height: 50%;\n              width: 2px; }\n        div#magane .stickersModal .modal-content .stickersConfig div.pack div.index {\n          padding-top: 20px;\n          text-align: left; }\n        div#magane .stickersModal .modal-content .stickersConfig div.pack div.preview {\n          background-position: center;\n          background-size: contain;\n          background-repeat: no-repeat; }\n        div#magane .stickersModal .modal-content .stickersConfig div.pack div.handle {\n          padding: 20px;\n          cursor: move;\n          padding-top: 30px; }\n          div#magane .stickersModal .modal-content .stickersConfig div.pack div.handle span {\n            background: #555;\n            height: 2px;\n            width: 100%;\n            display: block;\n            margin-bottom: 6px; }\n        div#magane .stickersModal .modal-content .stickersConfig div.pack div.action {\n          padding-top: 20px;\n          text-align: right; }\n        div#magane .stickersModal .modal-content .stickersConfig div.pack div.info {\n          flex: 1 1 auto;\n          padding: 14px; }\n          div#magane .stickersModal .modal-content .stickersConfig div.pack div.info > span {\n            display: block;\n            width: 100%;\n            color: var(--header-secondary); }\n            div#magane .stickersModal .modal-content .stickersConfig div.pack div.info > span:nth-of-type(1) {\n              font-weight: bold;\n              color: var(--header-secondary); }\n            div#magane .stickersModal .modal-content .stickersConfig div.pack div.info > span .appendix span:nth-of-type(1) {\n              padding: 0 0.5em; }\n            div#magane .stickersModal .modal-content .stickersConfig div.pack div.info > span .appendix span:nth-of-type(2) {\n              user-select: text; }\n        div#magane .stickersModal .modal-content .stickersConfig div.pack div.preview img {\n          height: 100%;\n          width: 100%; }\n    div#magane .stickersModal .modal-close {\n      -moz-appearance: none;\n      -webkit-appearance: none;\n      user-select: none;\n      background-color: rgba(10, 10, 10, 0.2);\n      border: none;\n      border-radius: 290486px;\n      cursor: pointer;\n      display: inline-block;\n      flex-grow: 0;\n      flex-shrink: 0;\n      font-size: 0;\n      outline: none;\n      vertical-align: top;\n      background: none;\n      position: absolute;\n      right: 20px;\n      top: 20px;\n      height: 32px;\n      max-height: 32px;\n      max-width: 32px;\n      min-height: 32px;\n      min-width: 32px;\n      width: 32px;\n      z-index: 1; }\n      div#magane .stickersModal .modal-close:before, div#magane .stickersModal .modal-close:after {\n        background-color: var(--header-secondary);\n        content: "";\n        display: block;\n        left: 50%;\n        position: absolute;\n        top: 50%;\n        transform: translateX(-50%) translateY(-50%) rotate(45deg);\n        transform-origin: center center; }\n      div#magane .stickersModal .modal-close:before {\n        height: 2px;\n        width: 50%; }\n      div#magane .stickersModal .modal-close:after {\n        height: 50%;\n        width: 2px; }\n      div#magane .stickersModal .modal-close:hover, div#magane .stickersModal .modal-close:focus {\n        background-color: rgba(10, 10, 10, 0.3); }\n  div#magane .button {\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    align-items: center;\n    border: 1px solid transparent;\n    border-radius: 3px;\n    box-shadow: none;\n    display: inline-flex;\n    font-size: 1rem;\n    padding: calc(0.375em - 1px) 0.75em;\n    position: relative;\n    vertical-align: top;\n    user-select: none;\n    cursor: pointer;\n    justify-content: center;\n    text-align: center;\n    white-space: nowrap;\n    border-color: transparent;\n    color: var(--header-secondary);\n    background-color: var(--background-secondary);\n    width: 62px;\n    /* consistent width */ }\n    div#magane .button.is-danger {\n      color: #ffffff;\n      border-color: rgba(240, 71, 71, 0.3);\n      background: #f04747; }\n    div#magane .button:hover, div#magane .button.is-primary:hover {\n      transform: scale3d(1.1, 1.1, 1.1); }\n');
    const Ga = "div[class^=textArea] div[aria-multiline][contenteditable]",
        Ja = t => t.target.select();

    function Ka(t, e, n) {
        window.magane = {};
        const i = {
            top: 0,
            left: 0
        };
        let r = document.querySelector(Ga),
            o = !0,
            a = null,
            s = "",
            c = !1,
            l = !1,
            d = 0,
            u = [];
        const f = {};
        let p = [],
            h = [],
            v = [],
            m = [];
        const g = {};
        let b = null;
        const y = [{
                selector: "#magane .stickers .simplebar-content-wrapper",
                type: "scrollTop",
                position: 0
            }, {
                selector: "#magane .packs .simplebar-content-wrapper",
                type: "scrollLeft",
                position: 0
            }],
            x = [0, 0];
        let k, w = !1,
            E = !1,
            S = !1,
            O = null,
            _ = null;
        const M = (t, e = "log") => console[e]("%c[Magane]%c", "color: #3a71c1; font-weight: 700", "", t),
            A = (t, e = {}) => "object" == typeof BdApi && "function" == typeof BdApi.showToast ? BdApi.showToast(t, e) : e.nolog ? void 0 : (e.type && ["log", "info", "warn", "error"].includes(e.type) || (e.type = "log"), M(t, e.type)),
            $ = (t, e = {}) => (e.type = "info", A(t, e)),
            z = (t, e = {}) => (e.type = "success", A(t, e)),
            T = (t, e = {}) => (e.type = "error", A(t, e)),
            j = (t, e = {}) => (e.type = "warn", A(t, e)),
            N = () => {
                setTimeout(() => {
                    const t = document.querySelector("[class^=channelTextArea] [class^=buttons]");
                    if (!t) return void(o && n(1, o = !1));
                    o || n(1, o = !0);
                    const e = t.getBoundingClientRect();
                    n(0, i.top = a ? e.top - 21 : e.top, i), n(0, i.left = e.left - 100, i)
                }, 0)
            },
            W = () => {
                let t;
                return new Promise(e => {
                    (t = () => {
                        if (r = document.querySelector(Ga), r) return e();
                        setTimeout(t, 500)
                    })()
                })
            },
            R = async t => {
                for (const e of t) {
                    if (!e.contentRect) return;
                    if (N(), e.contentRect.width || e.contentRect.height) return;
                    k.unobserve(r), await W(), k.observe(r), N()
                }
            }, I = async (t = O.token) => {
                if (O.canCallAPI) return;
                if ("string" != typeof t) throw new Error("Not a token, buddy.");
                t = (t = t.replace(/"/gi, "")).replace(/^Bot\s*/i, "");
                const e = await fetch("https://discordapp.com/api/v7/gateway"),
                    n = await e.json(),
                    i = new WebSocket(`${n.url}/?encoding=json&v6`);
                await new Promise((e, n) => {
                    i.onerror = t => n(t), i.onmessage = r => {
                        try {
                            const n = JSON.parse(r.data);
                            O.canCallAPI = !0, 0 === n.op && "READY" === n.t && i.close(), 10 === n.op && i.send(JSON.stringify({
                                op: 2,
                                d: {
                                    token: t,
                                    properties: {
                                        $browser: "b1nzy is a meme"
                                    },
                                    large_threshold: 50
                                }
                            })), e()
                        } catch (t) {
                            n(t)
                        }
                    }
                })
            }, P = () => {
                const t = document.createElement("iframe");
                t.id = "localStorageIframe", O = document.body.appendChild(t).contentWindow.frames.localStorage
            }, D = (t, e) => {
                O.setItem(t, JSON.stringify(e))
            }, F = async () => {
                const t = await fetch("https://raw.githubusercontent.com/Hiyoriii/lanhhensotichco/main/packs.json"),
                    e = await t.json();
                s = e.baseURL;
                const i = O.getItem("magane.available");
                if (i) try {
                    const t = JSON.parse(i),
                        e = t.filter(t => "object" == typeof t && void 0 !== t.id && /^(startswith|emojis|custom)-/.test(t.id));
                    t.length !== e.length && D("magane.available", e), e.forEach(t => {
                        n(10, g[t.id] = t, g)
                    }), p.push(...e)
                } catch (t) {
                    console.error(t)
                }
                p.push(...e.packs), p = p, n(9, m = p);
                const r = O.getItem("magane.subscribed");
                if (r) try {
                    n(7, h = JSON.parse(r));
                    for (const t of h) v.push(t.id);
                    h.forEach(t => {
                        /^(startswith|emojis|custom)-/.test(t.id) && n(10, g[t.id] = t, g)
                    })
                } catch (t) {
                    console.error(t)
                }
                const o = O.getItem("magane.favorites");
                if (o) try {
                    n(5, u = JSON.parse(o).filter(t => {
                        if (f[t.pack]) return !0;
                        const e = p.findIndex(e => e.id === t.pack);
                        return -1 !== e ? (n(6, f[t.pack] = {
                            name: p[e].name
                        }, f), !0) : void 0
                    }))
                } catch (t) {
                    console.error(t)
                }
            }, B = t => {
                -1 === h.findIndex(e => e.id === t.id) && (n(7, h = [...h, t]), n(8, v = [...v, t.id]), D("magane.subscribed", h), M(`Subscribed to pack > ${t.name}`))
            }, V = t => {
                for (let e = 0; e < h.length; e++)
                    if (h[e].id === t.id) return h.splice(e, 1), v.splice(e, 1), n(7, h), n(8, v), M(`Unsubscribed from pack > ${t.name}`), void D("magane.subscribed", h)
            }, q = (t, e, n) => {
                let i;
                if ("number" == typeof t) i = `${s}${t}/${e}`, n || (i = i.replace(/\.(gif|png)$/i, "_key.$1"));
                else if (t.startsWith("startswith-")) {
                    i = "https://stickershop.line-scdn.net/stickershop/v1/sticker/%id%/android/sticker.png;compress=true".replace(/%id%/g, e.split(".")[0]);
                    let r = n ? "&h=180p" : "&h=100p";
                    g[t].animated && (i = i.replace(/sticker(@2x)?\.png/, "sticker_animation$1.png"), r += "&output=gif"), i = `https://images.weserv.nl/?url=${encodeURIComponent(i)}${r}`
                } else if (t.startsWith("emojis-")) {
                    i = "https://stickershop.line-scdn.net/sticonshop/v1/sticon/%pack%/android/%id%.png".replace(/%pack%/g, t.split("-")[1]).replace(/%id%/g, e.split(".")[0]);
                    const r = n ? "" : "&h=100p";
                    i = `https://images.weserv.nl/?url=${encodeURIComponent(i)}${r}`
                } else if (t.startsWith("custom-")) {
                    i = g[t].template.replace(/%pack%/g, t.split("-")[1]).replace(/%id%/g, e)
                }
                return i
            }, H = async (t, e, n = O.token) => {
                if (S) return j("Sending sticker is still on cooldown…", {
                    timeout: 1e3
                });
                S = !0;
                try {
                    A("Sending…");
                    const i = window.location.href.split("/").slice(-1)[0],
                        r = q(t, e, !0);
                    M(`Fetching sticker from remote: ${r}`);
                    const o = await fetch(r, {
                            cache: "force-cache"
                        }),
                        a = await o.blob();
                    let s = e;
                    "string" == typeof t && (t.startsWith("startswith-") && g[t].animated ? (s = s.replace(/\.png$/i, ".gif"), j("Animated stickers from LINE Store currently cannot be animated!")) : t.startsWith("custom-") && (s = `${Date.now().toString()}.${e.split(".")[1]}`));
                    const c = new FormData;
                    c.append("file", a, s), M("Sending…"), n = (n = n.replace(/"/gi, "")).replace(/^Bot\s*/i, "");
                    const l = await fetch(`https://discordapp.com/api/channels/${i}/messages`, {
                        headers: {
                            Authorization: n
                        },
                        method: "POST",
                        body: c
                    });
                    200 === l.status ? z("Sent!") : 403 === l.status ? T("Permission denied!") : T(`HTTP error ${l.status}!`)
                } catch (t) {
                    console.error(t), T("Unexpected error occurred when sending sticker. Check your console for details.")
                }
                S = !1
            }, U = (t, e) => {
                for (const t of u)
                    if (t.id === e) return T("This sticker is already in your favorites.");
                if (!f[t]) {
                    const e = h.find(e => e.id === t);
                    n(6, f[t] = {
                        name: e && e.name
                    }, f)
                }
                const i = {
                    pack: t,
                    id: e
                };
                n(5, u = [...u, i]), D("magane.favorites", u), M(`Favorited sticker > ${e} of pack ${t}`), z("Favorited!", {
                    nolog: !0
                })
            }, X = (t, e) => {
                let i = !1;
                for (const t of u) t.id === e && (i = !0);
                if (i) {
                    for (let t = 0; t < u.length; t++) u[t].id === e && (u.splice(t, 1), n(5, u));
                    u.some(e => e.pack === t) || delete f[t], D("magane.favorites", u), M(`Unfavorited sticker > ${e} of pack ${t}`), $("Unfavorited!", {
                        nolog: !0
                    })
                }
            }, Y = () => {
                const t = "string" == typeof _ && _.trim().toLowerCase();
                n(9, m = t ? p.filter(e => e.name.toLowerCase().indexOf(t) >= 0 || String(e.id).indexOf(t) >= 0) : p)
            }, G = (t, e) => {
                try {
                    if (!e.count || !e.files.length) throw new Error("Invalid stickers count.");
                    let i = [];
                    const r = O.getItem("magane.available");
                    if (r && (i = JSON.parse(r), i)) {
                        if (i.findIndex(e => e.id === t) >= 0) throw new Error(`Pack with ID ${t} already exist`)
                    }
                    return /^(startswith|emojis|custom)-/.test(t) && n(10, g[t] = e, g), i.unshift(e), D("magane.available", i), p.unshift(e), p = p, Y(), M(`Added a new pack with ID ${t}`), !0
                } catch (t) {
                    throw t
                }
            }, J = async () => {
                let t = !1;
                const e = JSON.parse(O.getItem("magane.favorites")),
                    n = JSON.parse(O.getItem("magane.subscribed"));
                e.forEach(e => {
                    if ("number" == typeof e.pack) return;
                    const n = parseInt(e.pack, 10);
                    isNaN(e.pack) || (e.pack = n, t = !0)
                }), n.forEach(e => {
                    if ("number" == typeof e.id) return;
                    const n = parseInt(e.id, 10);
                    isNaN(e.id) || (e.id = n, t = !0)
                }), t && ($("Found packs/stickers to migrate, migrating now..."), O.setItem("magane.favorites", JSON.stringify(e)), O.setItem("magane.subscribed", JSON.stringify(n)), await F(), z("Migration successful"))
            };
        window.magane.appendPack = (t, e, n, i, r) => {
            if (r) throw new Error("This function expects only 4 parameters. Were you looking for appendCustomPack()?");
            if (e = Number(e), isNaN(e) || !isFinite(e) || e < 0) throw new Error("Invalid first ID.");
            n = Math.max(Math.min(Number(n), 200), 0) || 0;
            const o = `startswith-${e}`,
                a = [];
            for (let t = e; t < e + n; t += 1) a.push(`${t}.png`);
            return G(o, {
                name: t,
                count: n,
                id: o,
                animated: i ? 1 : null,
                files: a
            })
        }, window.magane.appendEmojisPack = (t, e, n, i) => {
            if (i) throw new Error("This function expects only 3 parameters.");
            n = Math.max(Math.min(Number(n), 200), 0) || 0;
            const r = `emojis-${e}`,
                o = [];
            for (let t = 0; t < n; t += 1) o.push(`${String(t+1).padStart(3,"0")}.png`);
            return G(r, {
                name: t,
                count: n,
                id: r,
                files: o
            })
        }, window.magane.appendCustomPack = (t, e, n, i, r) => {
            if (!r) throw new Error("Missing URL template.");
            n = Math.max(Number(n), 0) || 0;
            const o = `custom-${e}`,
                a = [];
            for (let t = 1; t <= n; t += 1) a.push(t + (i ? ".gif" : ".png"));
            return G(o, {
                name: t,
                count: n,
                id: o,
                animated: i ? 1 : null,
                files: a,
                template: r
            })
        }, window.magane.deletePack = t => {
            if (!t && !/^(startswith|emojis|custom)-/.test(t)) throw new Error('Pack ID must start with either "startswith-", "emojis-", or "custom-".');
            const e = O.getItem("magane.available");
            if (e) try {
                const n = JSON.parse(e),
                    i = n.findIndex(e => e.id === t);
                if (-1 === i) throw new Error(`Unable to find pack with ID ${t}`);
                const r = u.filter(e => e.pack === t);
                r.length && r.forEach(e => X(t, e.id));
                const o = h.find(e => e.id === t);
                o && V(o), n.splice(i, 1), D("magane.available", n);
                const a = p.findIndex(e => e.id === t);
                return -1 !== a && (p.splice(a, 1), p = p, Y()), M(`Removed pack with ID ${t} (old index: ${i})`), !0
            } catch (t) {
                throw t
            }
        }, window.magane.searchPacks = t => {
            if (!t) throw new Error("Keyword required");
            t = t.toLowerCase();
            const e = O.getItem("magane.available");
            if (e) try {
                return JSON.parse(e).filter(e => e.name.toLowerCase().indexOf(t) >= 0 || e.id.indexOf(t) >= 0)
            } catch (t) {
                throw t
            }
        };
        L(async () => {
            try {
                M("Mounted on DOM"), P(), await I(), await F(), z("Magane initialized!"), k = new ResizeObserver(R), await W(), k.observe(r), N(), a = document.querySelector("html.platform-win"), J()
            } catch (t) {
                console.error(t), T("Unexpected error occurred when initializing Magane. Check your console for details.")
            }
        });
        const K = t => {
                const e = document.querySelector("#magane .stickerWindow");
                if (e) {
                    const {
                        x: n,
                        y: i,
                        width: r,
                        height: o
                    } = e.getBoundingClientRect();
                    document.querySelector("#magane img").isSameNode(t.target) || t.clientX <= n + r && t.clientX >= n && t.clientY <= i + o && t.clientY >= i || it()
                }
            },
            Q = () => {
                for (let t = 0; t < y.length; t++) {
                    const e = document.querySelector(y[t].selector);
                    e && (e[y[t].type] = y[t].position)
                }
            },
            Z = () => {
                for (let t = 0; t < y.length; t++) {
                    const e = document.querySelector(y[t].selector);
                    e && (y[t].position = e[y[t].type])
                }
            },
            tt = () => {
                const t = document.querySelector("#magane .stickersModal .simplebar-content-wrapper");
                t && (t.scrollTop = x[d])
            },
            et = () => {
                const t = document.querySelector("#magane .stickersModal .simplebar-content-wrapper");
                t && (x[d] = t.scrollTop)
            };
        var nt;
        nt = () => {
            c && (w && (Q(), w = !1), E && (tt(), E = !1))
        }, C().$$.after_update.push(nt);
        const it = () => {
                const t = !c;
                t ? (document.addEventListener("click", K), w = !0, l && (E = !0)) : (document.removeEventListener("click", K), Z(), l && et()), n(2, c = t)
            },
            rt = () => {
                const t = !l;
                t ? E = !0 : et(), n(3, l = t)
            },
            ot = t => {
                et(), n(4, d = t), E = !0
            },
            at = t => {
                xa({
                    element: t,
                    container: document.querySelector("#magane .stickers .simplebar-content-wrapper")
                })
            },
            st = async () => {
                if (b) try {
                    const t = b.match(/^(https?:\/\/store\.line\.me\/((sticker|emoji)shop)\/product\/)?([a-z0-9]+)/);
                    if (!t) return T("Unsupported LINE Store URL or ID.");
                    if ("emoji" === t[3]) {
                        const e = t[4],
                            i = await fetch(`https://magane.moe/api/proxy/emoji/${e}`),
                            r = await i.json();
                        n(11, b = null), window.magane.appendEmojisPack(r.title, r.id, r.len)
                    } else {
                        const e = Number(t[4]);
                        if (isNaN(e) || e < 0) return T("Unsupported LINE Stickers ID.");
                        const i = await fetch(`https://magane.moe/api/proxy/sticker/${e}`),
                            r = await i.json();
                        n(11, b = null), window.magane.appendPack(r.title, r.first, r.len, r.hasAnimation)
                    }
                } catch (t) {
                    console.error(t), T("Unexpected error occurred. Check your console for details.")
                }
            };
        return [i, o, c, l, d, u, f, h, v, m, g, b, _, F, B, V, q, H, U, X, Y, t => `<span class="counts"><span>–</span>${t} sticker${1===t?"":"s"}</span>`, t => {
            if ("number" == typeof t) return t;
            let e = "";
            return t.startsWith("startswith-") ? e = `LINE ${t.replace("startswith-","")}` : t.startsWith("emojis-") ? e = `LINE Emojis ${t.replace("emojis-","")}` : t.startsWith("custom-") && (e = `Custom ${t.replace("custom-","")}`), e ? `<span class="appendix"><span>–</span><span title="ID: ${t}">${e}</span></span>` : t
        }, it, rt, ot, at, t => {
            const e = t.target.value.trim();
            if (13 !== t.keyCode || !e.length) return;
            let i = Number(e);
            if (isNaN(i) || i < 1 || i > h.length) return T(`New position must be ≥ 1 and ≤ ${h.length}!`);
            i--;
            const r = t.target.dataset.pack;
            if (void 0 === r) return;
            const o = h.findIndex(t => t.id === r);
            if (o === i) return;
            const a = h.splice(o, 1);
            v.splice(o, 1), h.splice(i, 0, a[0]), v.splice(i, 0, a[0].id), t.target.blur(), t.target.value = String(o), n(7, h), n(8, v), D("magane.subscribed", h), z(`Moved pack from position ${o+1} to ${i+1}!`)
        }, st, r, a, s, p, y, x, w, E, S, O, k, M, A, $, z, T, j, N, W, R, I, P, D, G, J, K, Q, Z, tt, et, () => it(), () => F(), t => H(t.pack, t.id), t => X(t.pack, t.id), (t, e) => H(t.id, e), (t, e) => U(t.id, e), () => rt(), () => at("#pfavorites"), t => at(`#p${t.id}`), () => rt(), () => ot(0), () => ot(1), () => ot(2), t => V(t), function() {
            _ = this.value, n(12, _)
        }, t => V(t), t => B(t), t => window.magane.deletePack(t.id), function() {
            b = this.value, n(11, b)
        }, () => st()]
    }
    class Qa extends tt {
        constructor(t) {
            super(), Z(this, t, Ka, Ya, o, {}, [-1, -1, -1])
        }
    }
    const Za = () => {
        console.log("[MAGANE] > checkDOM()");
        let t = document.getElementById("maganeContainer");
        if (t) return;
        const e = document.querySelector("[class*=baseLayer] > [class*=container] > [class*=base]");
        e ? (console.log("[MAGANE] > DOM ready, injecting!"), t = document.createElement("div"), t.id = "maganeContainer", e.insertAdjacentElement("afterbegin", t), new Qa({
            target: t
        })) : setTimeout(() => Za(), 500)
    };
    Za()
}();