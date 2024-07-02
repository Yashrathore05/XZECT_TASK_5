/*!
 * Bootstrap v5.3.2 (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, (function() {
    "use strict";
    const t = new Map,
        e = {
            set(e, i, n) {
                t.has(e) || t.set(e, new Map);
                const s = t.get(e);
                s.has(i) || 0 === s.size ? s.set(i, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)
            },
            get: (e, i) => t.has(e) && t.get(e).get(i) || null,
            remove(e, i) {
                if (!t.has(e)) return;
                const n = t.get(e);
                n.delete(i), 0 === n.size && t.delete(e)
            }
        },
        i = "transitionend",
        n = t => (t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, ((t, e) => `#${CSS.escape(e)}`))), t),
        s = t => {
            t.dispatchEvent(new Event(i))
        },
        o = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        r = t => o(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(n(t)) : null,
        a = t => {
            if (!o(t) || 0 === t.getClientRects().length) return !1;
            const e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),
                i = t.closest("details:not([open])");
            if (!i) return e;
            if (i !== t) {
                const e = t.closest("summary");
                if (e && e.parentNode !== i) return !1;
                if (null === e) return !1
            }
            return e
        },
        l = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
        c = t => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? c(t.parentNode) : null
        },
        h = () => {},
        d = t => {
            t.offsetHeight
        },
        u = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null,
        f = [],
        p = () => "rtl" === document.documentElement.dir,
        m = t => {
            var e;
            e = () => {
                const e = u();
                if (e) {
                    const i = t.NAME,
                        n = e.fn[i];
                    e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = n, t.jQueryInterface)
                }
            }, "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", (() => {
                for (const t of f) t()
            })), f.push(e)) : e()
        },
        g = (t, e = [], i = t) => "function" == typeof t ? t(...e) : i,
        _ = (t, e, n = !0) => {
            if (!n) return void g(t);
            const o = (t => {
                if (!t) return 0;
                let {
                    transitionDuration: e,
                    transitionDelay: i
                } = window.getComputedStyle(t);
                const n = Number.parseFloat(e),
                    s = Number.parseFloat(i);
                return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
            })(e) + 5;
            let r = !1;
            const a = ({
                target: n
            }) => {
                n === e && (r = !0, e.removeEventListener(i, a), g(t))
            };
            e.addEventListener(i, a), setTimeout((() => {
                r || s(e)
            }), o)
        },
        b = (t, e, i, n) => {
            const s = t.length;
            let o = t.indexOf(e);
            return -1 === o ? !i && n ? t[s - 1] : t[0] : (o += i ? 1 : -1, n && (o = (o + s) % s), t[Math.max(0, Math.min(o, s - 1))])
        },
        v = /[^.]*(?=\..*)\.|.*/,
        y = /\..*/,
        w = /::\d+$/,
        A = {};
    let E = 1;
    const T = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
        C = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function O(t, e) {
        return e && `${e}::${E++}` || t.uidEvent || E++
    }

    function x(t) {
        const e = O(t);
        return t.uidEvent = e, A[e] = A[e] || {}, A[e]
    }

    function k(t, e, i = null) {
        return Object.values(t).find((t => t.callable === e && t.delegationSelector === i))
    }

    function L(t, e, i) {
        const n = "string" == typeof e,
            s = n ? i : e || i;
        let o = I(t);
        return C.has(o) || (o = t), [n, s, o]
    }

    function S(t, e, i, n, s) {
        if ("string" != typeof e || !t) return;
        let [o, r, a] = L(e, i, n);
        if (e in T) {
            const t = t => function(e) {
                if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
            };
            r = t(r)
        }
        const l = x(t),
            c = l[a] || (l[a] = {}),
            h = k(c, r, o ? i : null);
        if (h) return void(h.oneOff = h.oneOff && s);
        const d = O(r, e.replace(v, "")),
            u = o ? function(t, e, i) {
                return function n(s) {
                    const o = t.querySelectorAll(e);
                    for (let {
                            target: r
                        } = s; r && r !== this; r = r.parentNode)
                        for (const a of o)
                            if (a === r) return P(s, {
                                delegateTarget: r
                            }), n.oneOff && N.off(t, s.type, e, i), i.apply(r, [s])
                }
            }(t, i, r) : function(t, e) {
                return function i(n) {
                    return P(n, {
                        delegateTarget: t
                    }), i.oneOff && N.off(t, n.type, e), e.apply(t, [n])
                }
            }(t, r);
        u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o)
    }

    function D(t, e, i, n, s) {
        const o = k(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent])
    }

    function $(t, e, i, n) {
        const s = e[i] || {};
        for (const [o, r] of Object.entries(s)) o.includes(n) && D(t, e, i, r.callable, r.delegationSelector)
    }

    function I(t) {
        return t = t.replace(y, ""), T[t] || t
    }
    const N = {
        on(t, e, i, n) {
            S(t, e, i, n, !1)
        },
        one(t, e, i, n) {
            S(t, e, i, n, !0)
        },
        off(t, e, i, n) {
            if ("string" != typeof e || !t) return;
            const [s, o, r] = L(e, i, n), a = r !== e, l = x(t), c = l[r] || {}, h = e.startsWith(".");
            if (void 0 === o) {
                if (h)
                    for (const i of Object.keys(l)) $(t, l, i, e.slice(1));
                for (const [i, n] of Object.entries(c)) {
                    const s = i.replace(w, "");
                    a && !e.includes(s) || D(t, l, r, n.callable, n.delegationSelector)
                }
            } else {
                if (!Object.keys(c).length) return;
                D(t, l, r, o, s ? i : null)
            }
        },
        trigger(t, e, i) {
            if ("string" != typeof e || !t) return null;
            const n = u();
            let s = null,
                o = !0,
                r = !0,
                a = !1;
            e !== I(e) && n && (s = n.Event(e, i), n(t).trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
            const l = P(new Event(e, {
                bubbles: o,
                cancelable: !0
            }), i);
            return a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l
        }
    };

    function P(t, e = {}) {
        for (const [i, n] of Object.entries(e)) try {
            t[i] = n
        } catch (e) {
            Object.defineProperty(t, i, {
                configurable: !0,
                get: () => n
            })
        }
        return t
    }

    function M(t) {
        if ("true" === t) return !0;
        if ("false" === t) return !1;
        if (t === Number(t).toString()) return Number(t);
        if ("" === t || "null" === t) return null;
        if ("string" != typeof t) return t;
        try {
            return JSON.parse(decodeURIComponent(t))
        } catch (e) {
            return t
        }
    }

    function j(t) {
        return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`))
    }
    const F = {
        setDataAttribute(t, e, i) {
            t.setAttribute(`data-bs-${j(e)}`, i)
        },
        removeDataAttribute(t, e) {
            t.removeAttribute(`data-bs-${j(e)}`)
        },
        getDataAttributes(t) {
            if (!t) return {};
            const e = {},
                i = Object.keys(t.dataset).filter((t => t.startsWith("bs") && !t.startsWith("bsConfig")));
            for (const n of i) {
                let i = n.replace(/^bs/, "");
                i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = M(t.dataset[n])
            }
            return e
        },
        getDataAttribute: (t, e) => M(t.getAttribute(`data-bs-${j(e)}`))
    };
    class H {
        static get Default() {
            return {}
        }
        static get DefaultType() {
            return {}
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
        }
        _configAfterMerge(t) {
            return t
        }
        _mergeConfigObj(t, e) {
            const i = o(e) ? F.getDataAttribute(e, "config") : {};
            return { ...this.constructor.Default,
                ..."object" == typeof i ? i : {},
                ...o(e) ? F.getDataAttributes(e) : {},
                ..."object" == typeof t ? t : {}
            }
        }
        _typeCheckConfig(t, e = this.constructor.DefaultType) {
            for (const [n, s] of Object.entries(e)) {
                const e = t[n],
                    r = o(e) ? "element" : null == (i = e) ? `${i}` : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(s).test(r)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`)
            }
            var i
        }
    }
    class W extends H {
        constructor(t, i) {
            super(), (t = r(t)) && (this._element = t, this._config = this._getConfig(i), e.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            e.remove(this._element, this.constructor.DATA_KEY), N.off(this._element, this.constructor.EVENT_KEY);
            for (const t of Object.getOwnPropertyNames(this)) this[t] = null
        }
        _queueCallback(t, e, i = !0) {
            _(t, e, i)
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
        }
        static getInstance(t) {
            return e.get(r(t), this.DATA_KEY)
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
        }
        static get VERSION() {
            return "5.3.2"
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }
        static eventName(t) {
            return `${t}${this.EVENT_KEY}`
        }
    }
    const B = t => {
            let e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
                let i = t.getAttribute("href");
                if (!i || !i.includes("#") && !i.startsWith(".")) return null;
                i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? n(i.trim()) : null
            }
            return e
        },
        z = {
            find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
            findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
            children: (t, e) => [].concat(...t.children).filter((t => t.matches(e))),
            parents(t, e) {
                const i = [];
                let n = t.parentNode.closest(e);
                for (; n;) i.push(n), n = n.parentNode.closest(e);
                return i
            },
            prev(t, e) {
                let i = t.previousElementSibling;
                for (; i;) {
                    if (i.matches(e)) return [i];
                    i = i.previousElementSibling
                }
                return []
            },
            next(t, e) {
                let i = t.nextElementSibling;
                for (; i;) {
                    if (i.matches(e)) return [i];
                    i = i.nextElementSibling
                }
                return []
            },
            focusableChildren(t) {
                const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t => `${t}:not([tabindex^="-"])`)).join(",");
                return this.find(e, t).filter((t => !l(t) && a(t)))
            },
            getSelectorFromElement(t) {
                const e = B(t);
                return e && z.findOne(e) ? e : null
            },
            getElementFromSelector(t) {
                const e = B(t);
                return e ? z.findOne(e) : null
            },
            getMultipleElementsFromSelector(t) {
                const e = B(t);
                return e ? z.find(e) : []
            }
        },
        R = (t, e = "hide") => {
            const i = `click.dismiss${t.EVENT_KEY}`,
                n = t.NAME;
            N.on(document, i, `[data-bs-dismiss="${n}"]`, (function(i) {
                if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), l(this)) return;
                const s = z.getElementFromSelector(this) || this.closest(`.${n}`);
                t.getOrCreateInstance(s)[e]()
            }))
        },
        q = ".bs.alert",
        V = `close${q}`,
        K = `closed${q}`;
    class Q extends W {
        static get NAME() {
            return "alert"
        }
        close() {
            if (N.trigger(this._element, V).defaultPrevented) return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback((() => this._destroyElement()), this._element, t)
        }
        _destroyElement() {
            this._element.remove(), N.trigger(this._element, K), this.dispose()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Q.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }
    R(Q, "close"), m(Q);
    const X = '[data-bs-toggle="button"]';
    class Y extends W {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Y.getOrCreateInstance(this);
                "toggle" === t && e[t]()
            }))
        }
    }
    N.on(document, "click.bs.button.data-api", X, (t => {
        t.preventDefault();
        const e = t.target.closest(X);
        Y.getOrCreateInstance(e).toggle()
    })), m(Y);
    const U = ".bs.swipe",
        G = `touchstart${U}`,
        J = `touchmove${U}`,
        Z = `touchend${U}`,
        tt = `pointerdown${U}`,
        et = `pointerup${U}`,
        it = {
            endCallback: null,
            leftCallback: null,
            rightCallback: null
        },
        nt = {
            endCallback: "(function|null)",
            leftCallback: "(function|null)",
            rightCallback: "(function|null)"
        };
    class st extends H {
        constructor(t, e) {
            super(), this._element = t, t && st.isSupported() && (this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents())
        }
        static get Default() {
            return it
        }
        static get DefaultType() {
            return nt
        }
        static get NAME() {
            return "swipe"
        }
        dispose() {
            N.off(this._element, U)
        }
        _start(t) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX
        }
        _end(t) {
            this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), g(this._config.endCallback)
        }
        _move(t) {
            this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX
        }
        _handleSwipe() {
            const t = Math.abs(this._deltaX);
            if (t <= 40) return;
            const e = t / this._deltaX;
            this._deltaX = 0, e && g(e > 0 ? this._config.rightCallback : this._config.leftCallback)
        }
        _initEvents() {
            this._supportPointerEvents ? (N.on(this._element, tt, (t => this._start(t))), N.on(this._element, et, (t => this._end(t))), this._element.classList.add("pointer-event")) : (N.on(this._element, G, (t => this._start(t))), N.on(this._element, J, (t => this._move(t))), N.on(this._element, Z, (t => this._end(t))))
        }
        _eventIsPointerPenTouch(t) {
            return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType)
        }
        static isSupported() {
            return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
        }
    }
    const ot = ".bs.carousel",
        rt = ".data-api",
        at = "next",
        lt = "prev",
        ct = "left",
        ht = "right",
        dt = `slide${ot}`,
        ut = `slid${ot}`,
        ft = `keydown${ot}`,
        pt = `mouseenter${ot}`,
        mt = `mouseleave${ot}`,
        gt = `dragstart${ot}`,
        _t = `load${ot}${rt}`,
        bt = `click${ot}${rt}`,
        vt = "carousel",
        yt = "active",
        wt = ".active",
        At = ".carousel-item",
        Et = wt + At,
        Tt = {
            ArrowLeft: ht,
            ArrowRight: ct
        },
        Ct = {
            interval: 5e3,
            keyboard: !0,
            pause: "hover",
            ride: !1,
            touch: !0,
            wrap: !0
        },
        Ot = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            pause: "(string|boolean)",
            ride: "(boolean|string)",
            touch: "boolean",
            wrap: "boolean"
        };
    class xt extends W {
        constructor(t, e) {
            super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = z.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === vt && this.cycle()
        }
        static get Default() {
            return Ct
        }
        static get DefaultType() {
            return Ot
        }
        static get NAME() {
            return "carousel"
        }
        next() {
            this._slide(at)
        }
        nextWhenVisible() {
            !document.hidden && a(this._element) && this.next()
        }
        prev() {
            this._slide(lt)
        }
        pause() {
            this._isSliding && s(this._element), this._clearInterval()
        }
        cycle() {
            this._clearInterval(), this._updateInterval(), this._interval = setInterval((() => this.nextWhenVisible()), this._config.interval)
        }
        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? N.one(this._element, ut, (() => this.cycle())) : this.cycle())
        }
        to(t) {
            const e = this._getItems();
            if (t > e.length - 1 || t < 0) return;
            if (this._isSliding) return void N.one(this._element, ut, (() => this.to(t)));
            const i = this._getItemIndex(this._getActive());
            if (i === t) return;
            const n = t > i ? at : lt;
            this._slide(n, e[t])
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
        }
        _configAfterMerge(t) {
            return t.defaultInterval = t.interval, t
        }
        _addEventListeners() {
            this._config.keyboard && N.on(this._element, ft, (t => this._keydown(t))), "hover" === this._config.pause && (N.on(this._element, pt, (() => this.pause())), N.on(this._element, mt, (() => this._maybeEnableCycle()))), this._config.touch && st.isSupported() && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            for (const t of z.find(".carousel-item img", this._element)) N.on(t, gt, (t => t.preventDefault()));
            const t = {
                leftCallback: () => this._slide(this._directionToOrder(ct)),
                rightCallback: () => this._slide(this._directionToOrder(ht)),
                endCallback: () => {
                    "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((() => this._maybeEnableCycle()), 500 + this._config.interval))
                }
            };
            this._swipeHelper = new st(this._element, t)
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = Tt[t.key];
            e && (t.preventDefault(), this._slide(this._directionToOrder(e)))
        }
        _getItemIndex(t) {
            return this._getItems().indexOf(t)
        }
        _setActiveIndicatorElement(t) {
            if (!this._indicatorsElement) return;
            const e = z.findOne(wt, this._indicatorsElement);
            e.classList.remove(yt), e.removeAttribute("aria-current");
            const i = z.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
            i && (i.classList.add(yt), i.setAttribute("aria-current", "true"))
        }
        _updateInterval() {
            const t = this._activeElement || this._getActive();
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            this._config.interval = e || this._config.defaultInterval
        }
        _slide(t, e = null) {
            if (this._isSliding) return;
            const i = this._getActive(),
                n = t === at,
                s = e || b(this._getItems(), i, n, this._config.wrap);
            if (s === i) return;
            const o = this._getItemIndex(s),
                r = e => N.trigger(this._element, e, {
                    relatedTarget: s,
                    direction: this._orderToDirection(t),
                    from: this._getItemIndex(i),
                    to: o
                });
            if (r(dt).defaultPrevented) return;
            if (!i || !s) return;
            const a = Boolean(this._interval);
            this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = s;
            const l = n ? "carousel-item-start" : "carousel-item-end",
                c = n ? "carousel-item-next" : "carousel-item-prev";
            s.classList.add(c), d(s), i.classList.add(l), s.classList.add(l), this._queueCallback((() => {
                s.classList.remove(l, c), s.classList.add(yt), i.classList.remove(yt, c, l), this._isSliding = !1, r(ut)
            }), i, this._isAnimated()), a && this.cycle()
        }
        _isAnimated() {
            return this._element.classList.contains("slide")
        }
        _getActive() {
            return z.findOne(Et, this._element)
        }
        _getItems() {
            return z.find(At, this._element)
        }
        _clearInterval() {
            this._interval && (clearInterval(this._interval), this._interval = null)
        }
        _directionToOrder(t) {
            return p() ? t === ct ? lt : at : t === ct ? at : lt
        }
        _orderToDirection(t) {
            return p() ? t === lt ? ct : ht : t === lt ? ht : ct
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = xt.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                        e[t]()
                    }
                } else e.to(t)
            }))
        }
    }
    N.on(document, bt, "[data-bs-slide], [data-bs-slide-to]", (function(t) {
        const e = z.getElementFromSelector(this);
        if (!e || !e.classList.contains(vt)) return;
        t.preventDefault();
        const i = xt.getOrCreateInstance(e),
            n = this.getAttribute("data-bs-slide-to");
        return n ? (i.to(n), void i._maybeEnableCycle()) : "next" === F.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle())
    })), N.on(window, _t, (() => {
        const t = z.find('[data-bs-ride="carousel"]');
        for (const e of t) xt.getOrCreateInstance(e)
    })), m(xt);
    const kt = ".bs.collapse",
        Lt = `show${kt}`,
        St = `shown${kt}`,
        Dt = `hide${kt}`,
        $t = `hidden${kt}`,
        It = `click${kt}.data-api`,
        Nt = "show",
        Pt = "collapse",
        Mt = "collapsing",
        jt = `:scope .${Pt} .${Pt}`,
        Ft = '[data-bs-toggle="collapse"]',
        Ht = {
            parent: null,
            toggle: !0
        },
        Wt = {
            parent: "(null|element)",
            toggle: "boolean"
        };
    class Bt extends W {
        constructor(t, e) {
            super(t, e), this._isTransitioning = !1, this._triggerArray = [];
            const i = z.find(Ft);
            for (const t of i) {
                const e = z.getSelectorFromElement(t),
                    i = z.find(e).filter((t => t === this._element));
                null !== e && i.length && this._triggerArray.push(t)
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
        }
        static get Default() {
            return Ht
        }
        static get DefaultType() {
            return Wt
        }
        static get NAME() {
            return "collapse"
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t = [];
            if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t => t !== this._element)).map((t => Bt.getOrCreateInstance(t, {
                    toggle: !1
                })))), t.length && t[0]._isTransitioning) return;
            if (N.trigger(this._element, Lt).defaultPrevented) return;
            for (const e of t) e.hide();
            const e = this._getDimension();
            this._element.classList.remove(Pt), this._element.classList.add(Mt), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            const i = `scroll${e[0].toUpperCase()+e.slice(1)}`;
            this._queueCallback((() => {
                this._isTransitioning = !1, this._element.classList.remove(Mt), this._element.classList.add(Pt, Nt), this._element.style[e] = "", N.trigger(this._element, St)
            }), this._element, !0), this._element.style[e] = `${this._element[i]}px`
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (N.trigger(this._element, Dt).defaultPrevented) return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, d(this._element), this._element.classList.add(Mt), this._element.classList.remove(Pt, Nt);
            for (const t of this._triggerArray) {
                const e = z.getElementFromSelector(t);
                e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1)
            }
            this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback((() => {
                this._isTransitioning = !1, this._element.classList.remove(Mt), this._element.classList.add(Pt), N.trigger(this._element, $t)
            }), this._element, !0)
        }
        _isShown(t = this._element) {
            return t.classList.contains(Nt)
        }
        _configAfterMerge(t) {
            return t.toggle = Boolean(t.toggle), t.parent = r(t.parent), t
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const t = this._getFirstLevelChildren(Ft);
            for (const e of t) {
                const t = z.getElementFromSelector(e);
                t && this._addAriaAndCollapsedClass([e], this._isShown(t))
            }
        }
        _getFirstLevelChildren(t) {
            const e = z.find(jt, this._config.parent);
            return z.find(t, this._config.parent).filter((t => !e.includes(t)))
        }
        _addAriaAndCollapsedClass(t, e) {
            if (t.length)
                for (const i of t) i.classList.toggle("collapsed", !e), i.setAttribute("aria-expanded", e)
        }
        static jQueryInterface(t) {
            const e = {};
            return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each((function() {
                const i = Bt.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t]()
                }
            }))
        }
    }
    N.on(document, It, Ft, (function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        for (const t of z.getMultipleElementsFromSelector(this)) Bt.getOrCreateInstance(t, {
            toggle: !1
        }).toggle()
    })), m(Bt);
    var zt = "top",
        Rt = "bottom",
        qt = "right",
        Vt = "left",
        Kt = "auto",
        Qt = [zt, Rt, qt, Vt],
        Xt = "start",
        Yt = "end",
        Ut = "clippingParents",
        Gt = "viewport",
        Jt = "popper",
        Zt = "reference",
        te = Qt.reduce((function(t, e) {
            return t.concat([e + "-" + Xt, e + "-" + Yt])
        }), []),
        ee = [].concat(Qt, [Kt]).reduce((function(t, e) {
            return t.concat([e, e + "-" + Xt, e + "-" + Yt])
        }), []),
        ie = "beforeRead",
        ne = "read",
        se = "afterRead",
        oe = "beforeMain",
        re = "main",
        ae = "afterMain",
        le = "beforeWrite",
        ce = "write",
        he = "afterWrite",
        de = [ie, ne, se, oe, re, ae, le, ce, he];

    function ue(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }

    function fe(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }

    function pe(t) {
        return t instanceof fe(t).Element || t instanceof Element
    }

    function me(t) {
        return t instanceof fe(t).HTMLElement || t instanceof HTMLElement
    }

    function ge(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof fe(t).ShadowRoot || t instanceof ShadowRoot)
    }
    const _e = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t) {
            var e = t.state;
            Object.keys(e.elements).forEach((function(t) {
                var i = e.styles[t] || {},
                    n = e.attributes[t] || {},
                    s = e.elements[t];
                me(s) && ue(s) && (Object.assign(s.style, i), Object.keys(n).forEach((function(t) {
                    var e = n[t];
                    !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
                })))
            }))
        },
        effect: function(t) {
            var e = t.state,
                i = {
                    popper: {
                        position: e.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0"
                    },
                    arrow: {
                        position: "absolute"
                    },
                    reference: {}
                };
            return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
                function() {
                    Object.keys(e.elements).forEach((function(t) {
                        var n = e.elements[t],
                            s = e.attributes[t] || {},
                            o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce((function(t, e) {
                                return t[e] = "", t
                            }), {});
                        me(n) && ue(n) && (Object.assign(n.style, o), Object.keys(s).forEach((function(t) {
                            n.removeAttribute(t)
                        })))
                    }))
                }
        },
        requires: ["computeStyles"]
    };

    function be(t) {
        return t.split("-")[0]
    }
    var ve = Math.max,
        ye = Math.min,
        we = Math.round;

    function Ae() {
        var t = navigator.userAgentData;
        return null != t && t.brands && Array.isArray(t.brands) ? t.brands.map((function(t) {
            return t.brand + "/" + t.version
        })).join(" ") : navigator.userAgent
    }

    function Ee() {
        return !/^((?!chrome|android).)*safari/i.test(Ae())
    }

    function Te(t, e, i) {
        void 0 === e && (e = !1), void 0 === i && (i = !1);
        var n = t.getBoundingClientRect(),
            s = 1,
            o = 1;
        e && me(t) && (s = t.offsetWidth > 0 && we(n.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && we(n.height) / t.offsetHeight || 1);
        var r = (pe(t) ? fe(t) : window).visualViewport,
            a = !Ee() && i,
            l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
            c = (n.top + (a && r ? r.offsetTop : 0)) / o,
            h = n.width / s,
            d = n.height / o;
        return {
            width: h,
            height: d,
            top: c,
            right: l + h,
            bottom: c + d,
            left: l,
            x: l,
            y: c
        }
    }

    function Ce(t) {
        var e = Te(t),
            i = t.offsetWidth,
            n = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: n
        }
    }

    function Oe(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && ge(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n)) return !0;
                n = n.parentNode || n.host
            } while (n)
        }
        return !1
    }

    function xe(t) {
        return fe(t).getComputedStyle(t)
    }

    function ke(t) {
        return ["table", "td", "th"].indexOf(ue(t)) >= 0
    }

    function Le(t) {
        return ((pe(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }

    function Se(t) {
        return "html" === ue(t) ? t : t.assignedSlot || t.parentNode || (ge(t) ? t.host : null) || Le(t)
    }

    function De(t) {
        return me(t) && "fixed" !== xe(t).position ? t.offsetParent : null
    }

    function $e(t) {
        for (var e = fe(t), i = De(t); i && ke(i) && "static" === xe(i).position;) i = De(i);
        return i && ("html" === ue(i) || "body" === ue(i) && "static" === xe(i).position) ? e : i || function(t) {
            var e = /firefox/i.test(Ae());
            if (/Trident/i.test(Ae()) && me(t) && "fixed" === xe(t).position) return null;
            var i = Se(t);
            for (ge(i) && (i = i.host); me(i) && ["html", "body"].indexOf(ue(i)) < 0;) {
                var n = xe(i);
                if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
                i = i.parentNode
            }
            return null
        }(t) || e
    }

    function Ie(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }

    function Ne(t, e, i) {
        return ve(t, ye(e, i))
    }

    function Pe(t) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t)
    }

    function Me(t, e) {
        return e.reduce((function(e, i) {
            return e[i] = t, e
        }), {})
    }
    const je = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e, i = t.state,
                n = t.name,
                s = t.options,
                o = i.elements.arrow,
                r = i.modifiersData.popperOffsets,
                a = be(i.placement),
                l = Ie(a),
                c = [Vt, qt].indexOf(a) >= 0 ? "height" : "width";
            if (o && r) {
                var h = function(t, e) {
                        return Pe("number" != typeof(t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                            placement: e.placement
                        })) : t) ? t : Me(t, Qt))
                    }(s.padding, i),
                    d = Ce(o),
                    u = "y" === l ? zt : Vt,
                    f = "y" === l ? Rt : qt,
                    p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
                    m = r[l] - i.rects.reference[l],
                    g = $e(o),
                    _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
                    b = p / 2 - m / 2,
                    v = h[u],
                    y = _ - d[c] - h[f],
                    w = _ / 2 - d[c] / 2 + b,
                    A = Ne(v, w, y),
                    E = l;
                i.modifiersData[n] = ((e = {})[E] = A, e.centerOffset = A - w, e)
            }
        },
        effect: function(t) {
            var e = t.state,
                i = t.options.element,
                n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Oe(e.elements.popper, n) && (e.elements.arrow = n)
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    };

    function Fe(t) {
        return t.split("-")[1]
    }
    var He = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };

    function We(t) {
        var e, i = t.popper,
            n = t.popperRect,
            s = t.placement,
            o = t.variation,
            r = t.offsets,
            a = t.position,
            l = t.gpuAcceleration,
            c = t.adaptive,
            h = t.roundOffsets,
            d = t.isFixed,
            u = r.x,
            f = void 0 === u ? 0 : u,
            p = r.y,
            m = void 0 === p ? 0 : p,
            g = "function" == typeof h ? h({
                x: f,
                y: m
            }) : {
                x: f,
                y: m
            };
        f = g.x, m = g.y;
        var _ = r.hasOwnProperty("x"),
            b = r.hasOwnProperty("y"),
            v = Vt,
            y = zt,
            w = window;
        if (c) {
            var A = $e(i),
                E = "clientHeight",
                T = "clientWidth";
            A === fe(i) && "static" !== xe(A = Le(i)).position && "absolute" === a && (E = "scrollHeight", T = "scrollWidth"), (s === zt || (s === Vt || s === qt) && o === Yt) && (y = Rt, m -= (d && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - n.height, m *= l ? 1 : -1), s !== Vt && (s !== zt && s !== Rt || o !== Yt) || (v = qt, f -= (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) - n.width, f *= l ? 1 : -1)
        }
        var C, O = Object.assign({
                position: a
            }, c && He),
            x = !0 === h ? function(t, e) {
                var i = t.x,
                    n = t.y,
                    s = e.devicePixelRatio || 1;
                return {
                    x: we(i * s) / s || 0,
                    y: we(n * s) / s || 0
                }
            }({
                x: f,
                y: m
            }, fe(i)) : {
                x: f,
                y: m
            };
        return f = x.x, m = x.y, l ? Object.assign({}, O, ((C = {})[y] = b ? "0" : "", C[v] = _ ? "0" : "", C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", C)) : Object.assign({}, O, ((e = {})[y] = b ? m + "px" : "", e[v] = _ ? f + "px" : "", e.transform = "", e))
    }
    const Be = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(t) {
            var e = t.state,
                i = t.options,
                n = i.gpuAcceleration,
                s = void 0 === n || n,
                o = i.adaptive,
                r = void 0 === o || o,
                a = i.roundOffsets,
                l = void 0 === a || a,
                c = {
                    placement: be(e.placement),
                    variation: Fe(e.placement),
                    popper: e.elements.popper,
                    popperRect: e.rects.popper,
                    gpuAcceleration: s,
                    isFixed: "fixed" === e.options.strategy
                };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, We(Object.assign({}, c, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: r,
                roundOffsets: l
            })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, We(Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
            })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-placement": e.placement
            })
        },
        data: {}
    };
    var ze = {
        passive: !0
    };
    const Re = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(t) {
            var e = t.state,
                i = t.instance,
                n = t.options,
                s = n.scroll,
                o = void 0 === s || s,
                r = n.resize,
                a = void 0 === r || r,
                l = fe(e.elements.popper),
                c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return o && c.forEach((function(t) {
                    t.addEventListener("scroll", i.update, ze)
                })), a && l.addEventListener("resize", i.update, ze),
                function() {
                    o && c.forEach((function(t) {
                        t.removeEventListener("scroll", i.update, ze)
                    })), a && l.removeEventListener("resize", i.update, ze)
                }
        },
        data: {}
    };
    var qe = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };

    function Ve(t) {
        return t.replace(/left|right|bottom|top/g, (function(t) {
            return qe[t]
        }))
    }
    var Ke = {
        start: "end",
        end: "start"
    };

    function Qe(t) {
        return t.replace(/start|end/g, (function(t) {
            return Ke[t]
        }))
    }

    function Xe(t) {
        var e = fe(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        }
    }

    function Ye(t) {
        return Te(Le(t)).left + Xe(t).scrollLeft
    }

    function Ue(t) {
        var e = xe(t),
            i = e.overflow,
            n = e.overflowX,
            s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n)
    }

    function Ge(t) {
        return ["html", "body", "#document"].indexOf(ue(t)) >= 0 ? t.ownerDocument.body : me(t) && Ue(t) ? t : Ge(Se(t))
    }

    function Je(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = Ge(t),
            s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
            o = fe(n),
            r = s ? [o].concat(o.visualViewport || [], Ue(n) ? n : []) : n,
            a = e.concat(r);
        return s ? a : a.concat(Je(Se(r)))
    }

    function Ze(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        })
    }

    function ti(t, e, i) {
        return e === Gt ? Ze(function(t, e) {
            var i = fe(t),
                n = Le(t),
                s = i.visualViewport,
                o = n.clientWidth,
                r = n.clientHeight,
                a = 0,
                l = 0;
            if (s) {
                o = s.width, r = s.height;
                var c = Ee();
                (c || !c && "fixed" === e) && (a = s.offsetLeft, l = s.offsetTop)
            }
            return {
                width: o,
                height: r,
                x: a + Ye(t),
                y: l
            }
        }(t, i)) : pe(e) ? function(t, e) {
            var i = Te(t, !1, "fixed" === e);
            return i.top = i.top + t.clientTop, i.left = i.left + t.clientLeft, i.bottom = i.top + t.clientHeight, i.right = i.left + t.clientWidth, i.width = t.clientWidth, i.height = t.clientHeight, i.x = i.left, i.y = i.top, i
        }(e, i) : Ze(function(t) {
            var e, i = Le(t),
                n = Xe(t),
                s = null == (e = t.ownerDocument) ? void 0 : e.body,
                o = ve(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
                r = ve(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
                a = -n.scrollLeft + Ye(t),
                l = -n.scrollTop;
            return "rtl" === xe(s || i).direction && (a += ve(i.clientWidth, s ? s.clientWidth : 0) - o), {
                width: o,
                height: r,
                x: a,
                y: l
            }
        }(Le(t)))
    }

    function ei(t) {
        var e, i = t.reference,
            n = t.element,
            s = t.placement,
            o = s ? be(s) : null,
            r = s ? Fe(s) : null,
            a = i.x + i.width / 2 - n.width / 2,
            l = i.y + i.height / 2 - n.height / 2;
        switch (o) {
            case zt:
                e = {
                    x: a,
                    y: i.y - n.height
                };
                break;
            case Rt:
                e = {
                    x: a,
                    y: i.y + i.height
                };
                break;
            case qt:
                e = {
                    x: i.x + i.width,
                    y: l
                };
                break;
            case Vt:
                e = {
                    x: i.x - n.width,
                    y: l
                };
                break;
            default:
                e = {
                    x: i.x,
                    y: i.y
                }
        }
        var c = o ? Ie(o) : null;
        if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch (r) {
                case Xt:
                    e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                    break;
                case Yt:
                    e[c] = e[c] + (i[h] / 2 - n[h] / 2)
            }
        }
        return e
    }

    function ii(t, e) {
        void 0 === e && (e = {});
        var i = e,
            n = i.placement,
            s = void 0 === n ? t.placement : n,
            o = i.strategy,
            r = void 0 === o ? t.strategy : o,
            a = i.boundary,
            l = void 0 === a ? Ut : a,
            c = i.rootBoundary,
            h = void 0 === c ? Gt : c,
            d = i.elementContext,
            u = void 0 === d ? Jt : d,
            f = i.altBoundary,
            p = void 0 !== f && f,
            m = i.padding,
            g = void 0 === m ? 0 : m,
            _ = Pe("number" != typeof g ? g : Me(g, Qt)),
            b = u === Jt ? Zt : Jt,
            v = t.rects.popper,
            y = t.elements[p ? b : u],
            w = function(t, e, i, n) {
                var s = "clippingParents" === e ? function(t) {
                        var e = Je(Se(t)),
                            i = ["absolute", "fixed"].indexOf(xe(t).position) >= 0 && me(t) ? $e(t) : t;
                        return pe(i) ? e.filter((function(t) {
                            return pe(t) && Oe(t, i) && "body" !== ue(t)
                        })) : []
                    }(t) : [].concat(e),
                    o = [].concat(s, [i]),
                    r = o[0],
                    a = o.reduce((function(e, i) {
                        var s = ti(t, i, n);
                        return e.top = ve(s.top, e.top), e.right = ye(s.right, e.right), e.bottom = ye(s.bottom, e.bottom), e.left = ve(s.left, e.left), e
                    }), ti(t, r, n));
                return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
            }(pe(y) ? y : y.contextElement || Le(t.elements.popper), l, h, r),
            A = Te(t.elements.reference),
            E = ei({
                reference: A,
                element: v,
                strategy: "absolute",
                placement: s
            }),
            T = Ze(Object.assign({}, v, E)),
            C = u === Jt ? T : A,
            O = {
                top: w.top - C.top + _.top,
                bottom: C.bottom - w.bottom + _.bottom,
                left: w.left - C.left + _.left,
                right: C.right - w.right + _.right
            },
            x = t.modifiersData.offset;
        if (u === Jt && x) {
            var k = x[s];
            Object.keys(O).forEach((function(t) {
                var e = [qt, Rt].indexOf(t) >= 0 ? 1 : -1,
                    i = [zt, Rt].indexOf(t) >= 0 ? "y" : "x";
                O[t] += k[i] * e
            }))
        }
        return O
    }

    function ni(t, e) {
        void 0 === e && (e = {});
        var i = e,
            n = i.placement,
            s = i.boundary,
            o = i.rootBoundary,
            r = i.padding,
            a = i.flipVariations,
            l = i.allowedAutoPlacements,
            c = void 0 === l ? ee : l,
            h = Fe(n),
            d = h ? a ? te : te.filter((function(t) {
                return Fe(t) === h
            })) : Qt,
            u = d.filter((function(t) {
                return c.indexOf(t) >= 0
            }));
        0 === u.length && (u = d);
        var f = u.reduce((function(e, i) {
            return e[i] = ii(t, {
                placement: i,
                boundary: s,
                rootBoundary: o,
                padding: r
            })[be(i)], e
        }), {});
        return Object.keys(f).sort((function(t, e) {
            return f[t] - f[e]
        }))
    }
    const si = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state,
                i = t.options,
                n = t.name;
            if (!e.modifiersData[n]._skip) {
                for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = be(g), b = l || (_ !== g && p ? function(t) {
                        if (be(t) === Kt) return [];
                        var e = Ve(t);
                        return [Qe(t), e, Qe(e)]
                    }(g) : [Ve(g)]), v = [g].concat(b).reduce((function(t, i) {
                        return t.concat(be(i) === Kt ? ni(e, {
                            placement: i,
                            boundary: h,
                            rootBoundary: d,
                            padding: c,
                            flipVariations: p,
                            allowedAutoPlacements: m
                        }) : i)
                    }), []), y = e.rects.reference, w = e.rects.popper, A = new Map, E = !0, T = v[0], C = 0; C < v.length; C++) {
                    var O = v[C],
                        x = be(O),
                        k = Fe(O) === Xt,
                        L = [zt, Rt].indexOf(x) >= 0,
                        S = L ? "width" : "height",
                        D = ii(e, {
                            placement: O,
                            boundary: h,
                            rootBoundary: d,
                            altBoundary: u,
                            padding: c
                        }),
                        $ = L ? k ? qt : Vt : k ? Rt : zt;
                    y[S] > w[S] && ($ = Ve($));
                    var I = Ve($),
                        N = [];
                    if (o && N.push(D[x] <= 0), a && N.push(D[$] <= 0, D[I] <= 0), N.every((function(t) {
                            return t
                        }))) {
                        T = O, E = !1;
                        break
                    }
                    A.set(O, N)
                }
                if (E)
                    for (var P = function(t) {
                            var e = v.find((function(e) {
                                var i = A.get(e);
                                if (i) return i.slice(0, t).every((function(t) {
                                    return t
                                }))
                            }));
                            if (e) return T = e, "break"
                        }, M = p ? 3 : 1; M > 0 && "break" !== P(M); M--);
                e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };

    function oi(t, e, i) {
        return void 0 === i && (i = {
            x: 0,
            y: 0
        }), {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
        }
    }

    function ri(t) {
        return [zt, qt, Rt, Vt].some((function(e) {
            return t[e] >= 0
        }))
    }
    const ai = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function(t) {
                var e = t.state,
                    i = t.name,
                    n = e.rects.reference,
                    s = e.rects.popper,
                    o = e.modifiersData.preventOverflow,
                    r = ii(e, {
                        elementContext: "reference"
                    }),
                    a = ii(e, {
                        altBoundary: !0
                    }),
                    l = oi(r, n),
                    c = oi(a, s, o),
                    h = ri(l),
                    d = ri(c);
                e.modifiersData[i] = {
                    referenceClippingOffsets: l,
                    popperEscapeOffsets: c,
                    isReferenceHidden: h,
                    hasPopperEscaped: d
                }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                    "data-popper-reference-hidden": h,
                    "data-popper-escaped": d
                })
            }
        },
        li = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function(t) {
                var e = t.state,
                    i = t.options,
                    n = t.name,
                    s = i.offset,
                    o = void 0 === s ? [0, 0] : s,
                    r = ee.reduce((function(t, i) {
                        return t[i] = function(t, e, i) {
                            var n = be(t),
                                s = [Vt, zt].indexOf(n) >= 0 ? -1 : 1,
                                o = "function" == typeof i ? i(Object.assign({}, e, {
                                    placement: t
                                })) : i,
                                r = o[0],
                                a = o[1];
                            return r = r || 0, a = (a || 0) * s, [Vt, qt].indexOf(n) >= 0 ? {
                                x: a,
                                y: r
                            } : {
                                x: r,
                                y: a
                            }
                        }(i, e.rects, o), t
                    }), {}),
                    a = r[e.placement],
                    l = a.x,
                    c = a.y;
                null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r
            }
        },
        ci = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function(t) {
                var e = t.state,
                    i = t.name;
                e.modifiersData[i] = ei({
                    reference: e.rects.reference,
                    element: e.rects.popper,
                    strategy: "absolute",
                    placement: e.placement
                })
            },
            data: {}
        },
        hi = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function(t) {
                var e = t.state,
                    i = t.options,
                    n = t.name,
                    s = i.mainAxis,
                    o = void 0 === s || s,
                    r = i.altAxis,
                    a = void 0 !== r && r,
                    l = i.boundary,
                    c = i.rootBoundary,
                    h = i.altBoundary,
                    d = i.padding,
                    u = i.tether,
                    f = void 0 === u || u,
                    p = i.tetherOffset,
                    m = void 0 === p ? 0 : p,
                    g = ii(e, {
                        boundary: l,
                        rootBoundary: c,
                        padding: d,
                        altBoundary: h
                    }),
                    _ = be(e.placement),
                    b = Fe(e.placement),
                    v = !b,
                    y = Ie(_),
                    w = "x" === y ? "y" : "x",
                    A = e.modifiersData.popperOffsets,
                    E = e.rects.reference,
                    T = e.rects.popper,
                    C = "function" == typeof m ? m(Object.assign({}, e.rects, {
                        placement: e.placement
                    })) : m,
                    O = "number" == typeof C ? {
                        mainAxis: C,
                        altAxis: C
                    } : Object.assign({
                        mainAxis: 0,
                        altAxis: 0
                    }, C),
                    x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
                    k = {
                        x: 0,
                        y: 0
                    };
                if (A) {
                    if (o) {
                        var L, S = "y" === y ? zt : Vt,
                            D = "y" === y ? Rt : qt,
                            $ = "y" === y ? "height" : "width",
                            I = A[y],
                            N = I + g[S],
                            P = I - g[D],
                            M = f ? -T[$] / 2 : 0,
                            j = b === Xt ? E[$] : T[$],
                            F = b === Xt ? -T[$] : -E[$],
                            H = e.elements.arrow,
                            W = f && H ? Ce(H) : {
                                width: 0,
                                height: 0
                            },
                            B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            },
                            z = B[S],
                            R = B[D],
                            q = Ne(0, E[$], W[$]),
                            V = v ? E[$] / 2 - M - q - z - O.mainAxis : j - q - z - O.mainAxis,
                            K = v ? -E[$] / 2 + M + q + R + O.mainAxis : F + q + R + O.mainAxis,
                            Q = e.elements.arrow && $e(e.elements.arrow),
                            X = Q ? "y" === y ? Q.clientTop || 0 : Q.clientLeft || 0 : 0,
                            Y = null != (L = null == x ? void 0 : x[y]) ? L : 0,
                            U = I + K - Y,
                            G = Ne(f ? ye(N, I + V - Y - X) : N, I, f ? ve(P, U) : P);
                        A[y] = G, k[y] = G - I
                    }
                    if (a) {
                        var J, Z = "x" === y ? zt : Vt,
                            tt = "x" === y ? Rt : qt,
                            et = A[w],
                            it = "y" === w ? "height" : "width",
                            nt = et + g[Z],
                            st = et - g[tt],
                            ot = -1 !== [zt, Vt].indexOf(_),
                            rt = null != (J = null == x ? void 0 : x[w]) ? J : 0,
                            at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis,
                            lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st,
                            ct = f && ot ? function(t, e, i) {
                                var n = Ne(t, e, i);
                                return n > i ? i : n
                            }(at, et, lt) : Ne(f ? at : nt, et, f ? lt : st);
                        A[w] = ct, k[w] = ct - et
                    }
                    e.modifiersData[n] = k
                }
            },
            requiresIfExists: ["offset"]
        };

    function di(t, e, i) {
        void 0 === i && (i = !1);
        var n, s, o = me(e),
            r = me(e) && function(t) {
                var e = t.getBoundingClientRect(),
                    i = we(e.width) / t.offsetWidth || 1,
                    n = we(e.height) / t.offsetHeight || 1;
                return 1 !== i || 1 !== n
            }(e),
            a = Le(e),
            l = Te(t, r, i),
            c = {
                scrollLeft: 0,
                scrollTop: 0
            },
            h = {
                x: 0,
                y: 0
            };
        return (o || !o && !i) && (("body" !== ue(e) || Ue(a)) && (c = (n = e) !== fe(n) && me(n) ? {
            scrollLeft: (s = n).scrollLeft,
            scrollTop: s.scrollTop
        } : Xe(n)), me(e) ? ((h = Te(e, !0)).x += e.clientLeft, h.y += e.clientTop) : a && (h.x = Ye(a))), {
            x: l.left + c.scrollLeft - h.x,
            y: l.top + c.scrollTop - h.y,
            width: l.width,
            height: l.height
        }
    }

    function ui(t) {
        var e = new Map,
            i = new Set,
            n = [];

        function s(t) {
            i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach((function(t) {
                if (!i.has(t)) {
                    var n = e.get(t);
                    n && s(n)
                }
            })), n.push(t)
        }
        return t.forEach((function(t) {
            e.set(t.name, t)
        })), t.forEach((function(t) {
            i.has(t.name) || s(t)
        })), n
    }
    var fi = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };

    function pi() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return !e.some((function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        }))
    }

    function mi(t) {
        void 0 === t && (t = {});
        var e = t,
            i = e.defaultModifiers,
            n = void 0 === i ? [] : i,
            s = e.defaultOptions,
            o = void 0 === s ? fi : s;
        return function(t, e, i) {
            void 0 === i && (i = o);
            var s, r, a = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, fi, o),
                    modifiersData: {},
                    elements: {
                        reference: t,
                        popper: e
                    },
                    attributes: {},
                    styles: {}
                },
                l = [],
                c = !1,
                h = {
                    state: a,
                    setOptions: function(i) {
                        var s = "function" == typeof i ? i(a.options) : i;
                        d(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
                            reference: pe(t) ? Je(t) : t.contextElement ? Je(t.contextElement) : [],
                            popper: Je(e)
                        };
                        var r, c, u = function(t) {
                            var e = ui(t);
                            return de.reduce((function(t, i) {
                                return t.concat(e.filter((function(t) {
                                    return t.phase === i
                                })))
                            }), [])
                        }((r = [].concat(n, a.options.modifiers), c = r.reduce((function(t, e) {
                            var i = t[e.name];
                            return t[e.name] = i ? Object.assign({}, i, e, {
                                options: Object.assign({}, i.options, e.options),
                                data: Object.assign({}, i.data, e.data)
                            }) : e, t
                        }), {}), Object.keys(c).map((function(t) {
                            return c[t]
                        }))));
                        return a.orderedModifiers = u.filter((function(t) {
                            return t.enabled
                        })), a.orderedModifiers.forEach((function(t) {
                            var e = t.name,
                                i = t.options,
                                n = void 0 === i ? {} : i,
                                s = t.effect;
                            if ("function" == typeof s) {
                                var o = s({
                                    state: a,
                                    name: e,
                                    instance: h,
                                    options: n
                                });
                                l.push(o || function() {})
                            }
                        })), h.update()
                    },
                    forceUpdate: function() {
                        if (!c) {
                            var t = a.elements,
                                e = t.reference,
                                i = t.popper;
                            if (pi(e, i)) {
                                a.rects = {
                                    reference: di(e, $e(i), "fixed" === a.options.strategy),
                                    popper: Ce(i)
                                }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function(t) {
                                    return a.modifiersData[t.name] = Object.assign({}, t.data)
                                }));
                                for (var n = 0; n < a.orderedModifiers.length; n++)
                                    if (!0 !== a.reset) {
                                        var s = a.orderedModifiers[n],
                                            o = s.fn,
                                            r = s.options,
                                            l = void 0 === r ? {} : r,
                                            d = s.name;
                                        "function" == typeof o && (a = o({
                                            state: a,
                                            options: l,
                                            name: d,
                                            instance: h
                                        }) || a)
                                    } else a.reset = !1, n = -1
                            }
                        }
                    },
                    update: (s = function() {
                        return new Promise((function(t) {
                            h.forceUpdate(), t(a)
                        }))
                    }, function() {
                        return r || (r = new Promise((function(t) {
                            Promise.resolve().then((function() {
                                r = void 0, t(s())
                            }))
                        }))), r
                    }),
                    destroy: function() {
                        d(), c = !0
                    }
                };
            if (!pi(t, e)) return h;

            function d() {
                l.forEach((function(t) {
                    return t()
                })), l = []
            }
            return h.setOptions(i).then((function(t) {
                !c && i.onFirstUpdate && i.onFirstUpdate(t)
            })), h
        }
    }
    var gi = mi(),
        _i = mi({
            defaultModifiers: [Re, ci, Be, _e]
        }),
        bi = mi({
            defaultModifiers: [Re, ci, Be, _e, li, si, hi, je, ai]
        });
    const vi = Object.freeze(Object.defineProperty({
            __proto__: null,
            afterMain: ae,
            afterRead: se,
            afterWrite: he,
            applyStyles: _e,
            arrow: je,
            auto: Kt,
            basePlacements: Qt,
            beforeMain: oe,
            beforeRead: ie,
            beforeWrite: le,
            bottom: Rt,
            clippingParents: Ut,
            computeStyles: Be,
            createPopper: bi,
            createPopperBase: gi,
            createPopperLite: _i,
            detectOverflow: ii,
            end: Yt,
            eventListeners: Re,
            flip: si,
            hide: ai,
            left: Vt,
            main: re,
            modifierPhases: de,
            offset: li,
            placements: ee,
            popper: Jt,
            popperGenerator: mi,
            popperOffsets: ci,
            preventOverflow: hi,
            read: ne,
            reference: Zt,
            right: qt,
            start: Xt,
            top: zt,
            variationPlacements: te,
            viewport: Gt,
            write: ce
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        yi = "dropdown",
        wi = ".bs.dropdown",
        Ai = ".data-api",
        Ei = "ArrowUp",
        Ti = "ArrowDown",
        Ci = `hide${wi}`,
        Oi = `hidden${wi}`,
        xi = `show${wi}`,
        ki = `shown${wi}`,
        Li = `click${wi}${Ai}`,
        Si = `keydown${wi}${Ai}`,
        Di = `keyup${wi}${Ai}`,
        $i = "show",
        Ii = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        Ni = `${Ii}.${$i}`,
        Pi = ".dropdown-menu",
        Mi = p() ? "top-end" : "top-start",
        ji = p() ? "top-start" : "top-end",
        Fi = p() ? "bottom-end" : "bottom-start",
        Hi = p() ? "bottom-start" : "bottom-end",
        Wi = p() ? "left-start" : "right-start",
        Bi = p() ? "right-start" : "left-start",
        zi = {
            autoClose: !0,
            boundary: "clippingParents",
            display: "dynamic",
            offset: [0, 2],
            popperConfig: null,
            reference: "toggle"
        },
        Ri = {
            autoClose: "(boolean|string)",
            boundary: "(string|element)",
            display: "string",
            offset: "(array|string|function)",
            popperConfig: "(null|object|function)",
            reference: "(string|element|object)"
        };
    class qi extends W {
        constructor(t, e) {
            super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = z.next(this._element, Pi)[0] || z.prev(this._element, Pi)[0] || z.findOne(Pi, this._parent), this._inNavbar = this._detectNavbar()
        }
        static get Default() {
            return zi
        }
        static get DefaultType() {
            return Ri
        }
        static get NAME() {
            return yi
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (l(this._element) || this._isShown()) return;
            const t = {
                relatedTarget: this._element
            };
            if (!N.trigger(this._element, xi, t).defaultPrevented) {
                if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
                    for (const t of [].concat(...document.body.children)) N.on(t, "mouseover", h);
                this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add($i), this._element.classList.add($i), N.trigger(this._element, ki, t)
            }
        }
        hide() {
            if (l(this._element) || !this._isShown()) return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t)
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
        }
        _completeHide(t) {
            if (!N.trigger(this._element, Ci, t).defaultPrevented) {
                if ("ontouchstart" in document.documentElement)
                    for (const t of [].concat(...document.body.children)) N.off(t, "mouseover", h);
                this._popper && this._popper.destroy(), this._menu.classList.remove($i), this._element.classList.remove($i), this._element.setAttribute("aria-expanded", "false"), F.removeDataAttribute(this._menu, "popper"), N.trigger(this._element, Oi, t)
            }
        }
        _getConfig(t) {
            if ("object" == typeof(t = super._getConfig(t)).reference && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${yi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t
        }
        _createPopper() {
            if (void 0 === vi) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let t = this._element;
            "parent" === this._config.reference ? t = this._parent : o(this._config.reference) ? t = r(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
            const e = this._getPopperConfig();
            this._popper = bi(t, this._menu, e)
        }
        _isShown() {
            return this._menu.classList.contains($i)
        }
        _getPlacement() {
            const t = this._parent;
            if (t.classList.contains("dropend")) return Wi;
            if (t.classList.contains("dropstart")) return Bi;
            if (t.classList.contains("dropup-center")) return "top";
            if (t.classList.contains("dropdown-center")) return "bottom";
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? ji : Mi : e ? Hi : Fi
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const {
                offset: t
            } = this._config;
            return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return (this._inNavbar || "static" === this._config.display) && (F.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]), { ...t,
                ...g(this._config.popperConfig, [t])
            }
        }
        _selectMenuItem({
            key: t,
            target: e
        }) {
            const i = z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t => a(t)));
            i.length && b(i, e, t === Ti, !i.includes(e)).focus()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = qi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
        static clearMenus(t) {
            if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
            const e = z.find(Ni);
            for (const i of e) {
                const e = qi.getInstance(i);
                if (!e || !1 === e._config.autoClose) continue;
                const n = t.composedPath(),
                    s = n.includes(e._menu);
                if (n.includes(e._element) || "inside" === e._config.autoClose && !s || "outside" === e._config.autoClose && s) continue;
                if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                const o = {
                    relatedTarget: e._element
                };
                "click" === t.type && (o.clickEvent = t), e._completeHide(o)
            }
        }
        static dataApiKeydownHandler(t) {
            const e = /input|textarea/i.test(t.target.tagName),
                i = "Escape" === t.key,
                n = [Ei, Ti].includes(t.key);
            if (!n && !i) return;
            if (e && !i) return;
            t.preventDefault();
            const s = this.matches(Ii) ? this : z.prev(this, Ii)[0] || z.next(this, Ii)[0] || z.findOne(Ii, t.delegateTarget.parentNode),
                o = qi.getOrCreateInstance(s);
            if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
            o._isShown() && (t.stopPropagation(), o.hide(), s.focus())
        }
    }
    N.on(document, Si, Ii, qi.dataApiKeydownHandler), N.on(document, Si, Pi, qi.dataApiKeydownHandler), N.on(document, Li, qi.clearMenus), N.on(document, Di, qi.clearMenus), N.on(document, Li, Ii, (function(t) {
        t.preventDefault(), qi.getOrCreateInstance(this).toggle()
    })), m(qi);
    const Vi = "backdrop",
        Ki = "show",
        Qi = `mousedown.bs.${Vi}`,
        Xi = {
            className: "modal-backdrop",
            clickCallback: null,
            isAnimated: !1,
            isVisible: !0,
            rootElement: "body"
        },
        Yi = {
            className: "string",
            clickCallback: "(function|null)",
            isAnimated: "boolean",
            isVisible: "boolean",
            rootElement: "(element|string)"
        };
    class Ui extends H {
        constructor(t) {
            super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null
        }
        static get Default() {
            return Xi
        }
        static get DefaultType() {
            return Yi
        }
        static get NAME() {
            return Vi
        }
        show(t) {
            if (!this._config.isVisible) return void g(t);
            this._append();
            const e = this._getElement();
            this._config.isAnimated && d(e), e.classList.add(Ki), this._emulateAnimation((() => {
                g(t)
            }))
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(Ki), this._emulateAnimation((() => {
                this.dispose(), g(t)
            }))) : g(t)
        }
        dispose() {
            this._isAppended && (N.off(this._element, Qi), this._element.remove(), this._isAppended = !1)
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t
            }
            return this._element
        }
        _configAfterMerge(t) {
            return t.rootElement = r(t.rootElement), t
        }
        _append() {
            if (this._isAppended) return;
            const t = this._getElement();
            this._config.rootElement.append(t), N.on(t, Qi, (() => {
                g(this._config.clickCallback)
            })), this._isAppended = !0
        }
        _emulateAnimation(t) {
            _(t, this._getElement(), this._config.isAnimated)
        }
    }
    const Gi = ".bs.focustrap",
        Ji = `focusin${Gi}`,
        Zi = `keydown.tab${Gi}`,
        tn = "backward",
        en = {
            autofocus: !0,
            trapElement: null
        },
        nn = {
            autofocus: "boolean",
            trapElement: "element"
        };
    class sn extends H {
        constructor(t) {
            super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null
        }
        static get Default() {
            return en
        }
        static get DefaultType() {
            return nn
        }
        static get NAME() {
            return "focustrap"
        }
        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(), N.off(document, Gi), N.on(document, Ji, (t => this._handleFocusin(t))), N.on(document, Zi, (t => this._handleKeydown(t))), this._isActive = !0)
        }
        deactivate() {
            this._isActive && (this._isActive = !1, N.off(document, Gi))
        }
        _handleFocusin(t) {
            const {
                trapElement: e
            } = this._config;
            if (t.target === document || t.target === e || e.contains(t.target)) return;
            const i = z.focusableChildren(e);
            0 === i.length ? e.focus() : this._lastTabNavDirection === tn ? i[i.length - 1].focus() : i[0].focus()
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? tn : "forward")
        }
    }
    const on = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        rn = ".sticky-top",
        an = "padding-right",
        ln = "margin-right";
    class cn {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, an, (e => e + t)), this._setElementAttributes(on, an, (e => e + t)), this._setElementAttributes(rn, ln, (e => e - t))
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, an), this._resetElementAttributes(on, an), this._resetElementAttributes(rn, ln)
        }
        isOverflowing() {
            return this.getWidth() > 0
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
        }
        _setElementAttributes(t, e, i) {
            const n = this.getWidth();
            this._applyManipulationCallback(t, (t => {
                if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
                this._saveInitialAttribute(t, e);
                const s = window.getComputedStyle(t).getPropertyValue(e);
                t.style.setProperty(e, `${i(Number.parseFloat(s))}px`)
            }))
        }
        _saveInitialAttribute(t, e) {
            const i = t.style.getPropertyValue(e);
            i && F.setDataAttribute(t, e, i)
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t => {
                const i = F.getDataAttribute(t, e);
                null !== i ? (F.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e)
            }))
        }
        _applyManipulationCallback(t, e) {
            if (o(t)) e(t);
            else
                for (const i of z.find(t, this._element)) e(i)
        }
    }
    const hn = ".bs.modal",
        dn = `hide${hn}`,
        un = `hidePrevented${hn}`,
        fn = `hidden${hn}`,
        pn = `show${hn}`,
        mn = `shown${hn}`,
        gn = `resize${hn}`,
        _n = `click.dismiss${hn}`,
        bn = `mousedown.dismiss${hn}`,
        vn = `keydown.dismiss${hn}`,
        yn = `click${hn}.data-api`,
        wn = "modal-open",
        An = "show",
        En = "modal-static",
        Tn = {
            backdrop: !0,
            focus: !0,
            keyboard: !0
        },
        Cn = {
            backdrop: "(boolean|string)",
            focus: "boolean",
            keyboard: "boolean"
        };
    class On extends W {
        constructor(t, e) {
            super(t, e), this._dialog = z.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new cn, this._addEventListeners()
        }
        static get Default() {
            return Tn
        }
        static get DefaultType() {
            return Cn
        }
        static get NAME() {
            return "modal"
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || this._isTransitioning || N.trigger(this._element, pn, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(wn), this._adjustDialog(), this._backdrop.show((() => this._showElement(t))))
        }
        hide() {
            this._isShown && !this._isTransitioning && (N.trigger(this._element, dn).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(An), this._queueCallback((() => this._hideModal()), this._element, this._isAnimated())))
        }
        dispose() {
            N.off(window, hn), N.off(this._dialog, hn), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new Ui({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new sn({
                trapElement: this._element
            })
        }
        _showElement(t) {
            document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
            const e = z.findOne(".modal-body", this._dialog);
            e && (e.scrollTop = 0), d(this._element), this._element.classList.add(An), this._queueCallback((() => {
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, N.trigger(this._element, mn, {
                    relatedTarget: t
                })
            }), this._dialog, this._isAnimated())
        }
        _addEventListeners() {
            N.on(this._element, vn, (t => {
                "Escape" === t.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition())
            })), N.on(window, gn, (() => {
                this._isShown && !this._isTransitioning && this._adjustDialog()
            })), N.on(this._element, bn, (t => {
                N.one(this._element, _n, (e => {
                    this._element === t.target && this._element === e.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
                }))
            }))
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => {
                document.body.classList.remove(wn), this._resetAdjustments(), this._scrollBar.reset(), N.trigger(this._element, fn)
            }))
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if (N.trigger(this._element, un).defaultPrevented) return;
            const t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._element.style.overflowY;
            "hidden" === e || this._element.classList.contains(En) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(En), this._queueCallback((() => {
                this._element.classList.remove(En), this._queueCallback((() => {
                    this._element.style.overflowY = e
                }), this._dialog)
            }), this._dialog), this._element.focus())
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._scrollBar.getWidth(),
                i = e > 0;
            if (i && !t) {
                const t = p() ? "paddingLeft" : "paddingRight";
                this._element.style[t] = `${e}px`
            }
            if (!i && t) {
                const t = p() ? "paddingRight" : "paddingLeft";
                this._element.style[t] = `${e}px`
            }
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }
        static jQueryInterface(t, e) {
            return this.each((function() {
                const i = On.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t](e)
                }
            }))
        }
    }
    N.on(document, yn, '[data-bs-toggle="modal"]', (function(t) {
        const e = z.getElementFromSelector(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), N.one(e, pn, (t => {
            t.defaultPrevented || N.one(e, fn, (() => {
                a(this) && this.focus()
            }))
        }));
        const i = z.findOne(".modal.show");
        i && On.getInstance(i).hide(), On.getOrCreateInstance(e).toggle(this)
    })), R(On), m(On);
    const xn = ".bs.offcanvas",
        kn = ".data-api",
        Ln = `load${xn}${kn}`,
        Sn = "show",
        Dn = "showing",
        $n = "hiding",
        In = ".offcanvas.show",
        Nn = `show${xn}`,
        Pn = `shown${xn}`,
        Mn = `hide${xn}`,
        jn = `hidePrevented${xn}`,
        Fn = `hidden${xn}`,
        Hn = `resize${xn}`,
        Wn = `click${xn}${kn}`,
        Bn = `keydown.dismiss${xn}`,
        zn = {
            backdrop: !0,
            keyboard: !0,
            scroll: !1
        },
        Rn = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            scroll: "boolean"
        };
    class qn extends W {
        constructor(t, e) {
            super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
        }
        static get Default() {
            return zn
        }
        static get DefaultType() {
            return Rn
        }
        static get NAME() {
            return "offcanvas"
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || N.trigger(this._element, Nn, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new cn).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Dn), this._queueCallback((() => {
                this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(Sn), this._element.classList.remove(Dn), N.trigger(this._element, Pn, {
                    relatedTarget: t
                })
            }), this._element, !0))
        }
        hide() {
            this._isShown && (N.trigger(this._element, Mn).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add($n), this._backdrop.hide(), this._queueCallback((() => {
                this._element.classList.remove(Sn, $n), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new cn).reset(), N.trigger(this._element, Fn)
            }), this._element, !0)))
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }
        _initializeBackDrop() {
            const t = Boolean(this._config.backdrop);
            return new Ui({
                className: "offcanvas-backdrop",
                isVisible: t,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: t ? () => {
                    "static" !== this._config.backdrop ? this.hide() : N.trigger(this._element, jn)
                } : null
            })
        }
        _initializeFocusTrap() {
            return new sn({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            N.on(this._element, Bn, (t => {
                "Escape" === t.key && (this._config.keyboard ? this.hide() : N.trigger(this._element, jn))
            }))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = qn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }
    N.on(document, Wn, '[data-bs-toggle="offcanvas"]', (function(t) {
        const e = z.getElementFromSelector(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this)) return;
        N.one(e, Fn, (() => {
            a(this) && this.focus()
        }));
        const i = z.findOne(In);
        i && i !== e && qn.getInstance(i).hide(), qn.getOrCreateInstance(e).toggle(this)
    })), N.on(window, Ln, (() => {
        for (const t of z.find(In)) qn.getOrCreateInstance(t).show()
    })), N.on(window, Hn, (() => {
        for (const t of z.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(t).position && qn.getOrCreateInstance(t).hide()
    })), R(qn), m(qn);
    const Vn = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        Kn = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        Qn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
        Xn = (t, e) => {
            const i = t.nodeName.toLowerCase();
            return e.includes(i) ? !Kn.has(i) || Boolean(Qn.test(t.nodeValue)) : e.filter((t => t instanceof RegExp)).some((t => t.test(i)))
        },
        Yn = {
            allowList: Vn,
            content: {},
            extraClass: "",
            html: !1,
            sanitize: !0,
            sanitizeFn: null,
            template: "<div></div>"
        },
        Un = {
            allowList: "object",
            content: "object",
            extraClass: "(string|function)",
            html: "boolean",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            template: "string"
        },
        Gn = {
            entry: "(string|element|function|null)",
            selector: "(string|element)"
        };
    class Jn extends H {
        constructor(t) {
            super(), this._config = this._getConfig(t)
        }
        static get Default() {
            return Yn
        }
        static get DefaultType() {
            return Un
        }
        static get NAME() {
            return "TemplateFactory"
        }
        getContent() {
            return Object.values(this._config.content).map((t => this._resolvePossibleFunction(t))).filter(Boolean)
        }
        hasContent() {
            return this.getContent().length > 0
        }
        changeContent(t) {
            return this._checkContent(t), this._config.content = { ...this._config.content,
                ...t
            }, this
        }
        toHtml() {
            const t = document.createElement("div");
            t.innerHTML = this._maybeSanitize(this._config.template);
            for (const [e, i] of Object.entries(this._config.content)) this._setContent(t, i, e);
            const e = t.children[0],
                i = this._resolvePossibleFunction(this._config.extraClass);
            return i && e.classList.add(...i.split(" ")), e
        }
        _typeCheckConfig(t) {
            super._typeCheckConfig(t), this._checkContent(t.content)
        }
        _checkContent(t) {
            for (const [e, i] of Object.entries(t)) super._typeCheckConfig({
                selector: e,
                entry: i
            }, Gn)
        }
        _setContent(t, e, i) {
            const n = z.findOne(i, t);
            n && ((e = this._resolvePossibleFunction(e)) ? o(e) ? this._putElementInTemplate(r(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove())
        }
        _maybeSanitize(t) {
            return this._config.sanitize ? function(t, e, i) {
                if (!t.length) return t;
                if (i && "function" == typeof i) return i(t);
                const n = (new window.DOMParser).parseFromString(t, "text/html"),
                    s = [].concat(...n.body.querySelectorAll("*"));
                for (const t of s) {
                    const i = t.nodeName.toLowerCase();
                    if (!Object.keys(e).includes(i)) {
                        t.remove();
                        continue
                    }
                    const n = [].concat(...t.attributes),
                        s = [].concat(e["*"] || [], e[i] || []);
                    for (const e of n) Xn(e, s) || t.removeAttribute(e.nodeName)
                }
                return n.body.innerHTML
            }(t, this._config.allowList, this._config.sanitizeFn) : t
        }
        _resolvePossibleFunction(t) {
            return g(t, [this])
        }
        _putElementInTemplate(t, e) {
            if (this._config.html) return e.innerHTML = "", void e.append(t);
            e.textContent = t.textContent
        }
    }
    const Zn = new Set(["sanitize", "allowList", "sanitizeFn"]),
        ts = "fade",
        es = "show",
        is = ".modal",
        ns = "hide.bs.modal",
        ss = "hover",
        os = "focus",
        rs = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: p() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: p() ? "right" : "left"
        },
        as = {
            allowList: Vn,
            animation: !0,
            boundary: "clippingParents",
            container: !1,
            customClass: "",
            delay: 0,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            html: !1,
            offset: [0, 6],
            placement: "top",
            popperConfig: null,
            sanitize: !0,
            sanitizeFn: null,
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            title: "",
            trigger: "hover focus"
        },
        ls = {
            allowList: "object",
            animation: "boolean",
            boundary: "(string|element)",
            container: "(string|element|boolean)",
            customClass: "(string|function)",
            delay: "(number|object)",
            fallbackPlacements: "array",
            html: "boolean",
            offset: "(array|string|function)",
            placement: "(string|function)",
            popperConfig: "(null|object|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            selector: "(string|boolean)",
            template: "string",
            title: "(string|element|function)",
            trigger: "string"
        };
    class cs extends W {
        constructor(t, e) {
            if (void 0 === vi) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle()
        }
        static get Default() {
            return as
        }
        static get DefaultType() {
            return ls
        }
        static get NAME() {
            return "tooltip"
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle() {
            this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter())
        }
        dispose() {
            clearTimeout(this._timeout), N.off(this._element.closest(is), ns, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose()
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled) return;
            const t = N.trigger(this._element, this.constructor.eventName("show")),
                e = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (t.defaultPrevented || !e) return;
            this._disposePopper();
            const i = this._getTipElement();
            this._element.setAttribute("aria-describedby", i.getAttribute("id"));
            const {
                container: n
            } = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), N.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i), i.classList.add(es), "ontouchstart" in document.documentElement)
                for (const t of [].concat(...document.body.children)) N.on(t, "mouseover", h);
            this._queueCallback((() => {
                N.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), this._isHovered = !1
            }), this.tip, this._isAnimated())
        }
        hide() {
            if (this._isShown() && !N.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
                if (this._getTipElement().classList.remove(es), "ontouchstart" in document.documentElement)
                    for (const t of [].concat(...document.body.children)) N.off(t, "mouseover", h);
                this._activeTrigger.click = !1, this._activeTrigger[os] = !1, this._activeTrigger[ss] = !1, this._isHovered = null, this._queueCallback((() => {
                    this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), N.trigger(this._element, this.constructor.eventName("hidden")))
                }), this.tip, this._isAnimated())
            }
        }
        update() {
            this._popper && this._popper.update()
        }
        _isWithContent() {
            return Boolean(this._getTitle())
        }
        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip
        }
        _createTipElement(t) {
            const e = this._getTemplateFactory(t).toHtml();
            if (!e) return null;
            e.classList.remove(ts, es), e.classList.add(`bs-${this.constructor.NAME}-auto`);
            const i = (t => {
                do {
                    t += Math.floor(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            })(this.constructor.NAME).toString();
            return e.setAttribute("id", i), this._isAnimated() && e.classList.add(ts), e
        }
        setContent(t) {
            this._newContent = t, this._isShown() && (this._disposePopper(), this.show())
        }
        _getTemplateFactory(t) {
            return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Jn({ ...this._config,
                content: t,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            }), this._templateFactory
        }
        _getContentForTemplate() {
            return {
                ".tooltip-inner": this._getTitle()
            }
        }
        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
        }
        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
        }
        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(ts)
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(es)
        }
        _createPopper(t) {
            const e = g(this._config.placement, [this, t, this._element]),
                i = rs[e.toUpperCase()];
            return bi(this._element, t, this._getPopperConfig(i))
        }
        _getOffset() {
            const {
                offset: t
            } = this._config;
            return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _resolvePossibleFunction(t) {
            return g(t, [this._element])
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "preSetPlacement",
                    enabled: !0,
                    phase: "beforeMain",
                    fn: t => {
                        this._getTipElement().setAttribute("data-popper-placement", t.state.placement)
                    }
                }]
            };
            return { ...e,
                ...g(this._config.popperConfig, [e])
            }
        }
        _setListeners() {
            const t = this._config.trigger.split(" ");
            for (const e of t)
                if ("click" === e) N.on(this._element, this.constructor.eventName("click"), this._config.selector, (t => {
                    this._initializeOnDelegatedTarget(t).toggle()
                }));
                else if ("manual" !== e) {
                const t = e === ss ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                    i = e === ss ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                N.on(this._element, t, this._config.selector, (t => {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusin" === t.type ? os : ss] = !0, e._enter()
                })), N.on(this._element, i, this._config.selector, (t => {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusout" === t.type ? os : ss] = e._element.contains(t.relatedTarget), e._leave()
                }))
            }
            this._hideModalHandler = () => {
                this._element && this.hide()
            }, N.on(this._element.closest(is), ns, this._hideModalHandler)
        }
        _fixTitle() {
            const t = this._element.getAttribute("title");
            t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"))
        }
        _enter() {
            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout((() => {
                this._isHovered && this.show()
            }), this._config.delay.show))
        }
        _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout((() => {
                this._isHovered || this.hide()
            }), this._config.delay.hide))
        }
        _setTimeout(t, e) {
            clearTimeout(this._timeout), this._timeout = setTimeout(t, e)
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0)
        }
        _getConfig(t) {
            const e = F.getDataAttributes(this._element);
            for (const t of Object.keys(e)) Zn.has(t) && delete e[t];
            return t = { ...e,
                ..."object" == typeof t && t ? t : {}
            }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
        }
        _configAfterMerge(t) {
            return t.container = !1 === t.container ? document.body : r(t.container), "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t
        }
        _getDelegateConfig() {
            const t = {};
            for (const [e, i] of Object.entries(this._config)) this.constructor.Default[e] !== i && (t[e] = i);
            return t.selector = !1, t.trigger = "manual", t
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null)
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = cs.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }
    m(cs);
    const hs = { ...cs.Default,
            content: "",
            offset: [0, 8],
            placement: "right",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            trigger: "click"
        },
        ds = { ...cs.DefaultType,
            content: "(null|string|element|function)"
        };
    class us extends cs {
        static get Default() {
            return hs
        }
        static get DefaultType() {
            return ds
        }
        static get NAME() {
            return "popover"
        }
        _isWithContent() {
            return this._getTitle() || this._getContent()
        }
        _getContentForTemplate() {
            return {
                ".popover-header": this._getTitle(),
                ".popover-body": this._getContent()
            }
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = us.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }
    m(us);
    const fs = ".bs.scrollspy",
        ps = `activate${fs}`,
        ms = `click${fs}`,
        gs = `load${fs}.data-api`,
        _s = "active",
        bs = "[href]",
        vs = ".nav-link",
        ys = `${vs}, .nav-item > ${vs}, .list-group-item`,
        ws = {
            offset: null,
            rootMargin: "0px 0px -25%",
            smoothScroll: !1,
            target: null,
            threshold: [.1, .5, 1]
        },
        As = {
            offset: "(number|null)",
            rootMargin: "string",
            smoothScroll: "boolean",
            target: "element",
            threshold: "array"
        };
    class Es extends W {
        constructor(t, e) {
            super(t, e), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            }, this.refresh()
        }
        static get Default() {
            return ws
        }
        static get DefaultType() {
            return As
        }
        static get NAME() {
            return "scrollspy"
        }
        refresh() {
            this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const t of this._observableSections.values()) this._observer.observe(t)
        }
        dispose() {
            this._observer.disconnect(), super.dispose()
        }
        _configAfterMerge(t) {
            return t.target = r(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map((t => Number.parseFloat(t)))), t
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (N.off(this._config.target, ms), N.on(this._config.target, ms, bs, (t => {
                const e = this._observableSections.get(t.target.hash);
                if (e) {
                    t.preventDefault();
                    const i = this._rootElement || window,
                        n = e.offsetTop - this._element.offsetTop;
                    if (i.scrollTo) return void i.scrollTo({
                        top: n,
                        behavior: "smooth"
                    });
                    i.scrollTop = n
                }
            })))
        }
        _getNewObserver() {
            const t = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin
            };
            return new IntersectionObserver((t => this._observerCallback(t)), t)
        }
        _observerCallback(t) {
            const e = t => this._targetLinks.get(`#${t.target.id}`),
                i = t => {
                    this._previousScrollData.visibleEntryTop = t.target.offsetTop, this._process(e(t))
                },
                n = (this._rootElement || document.documentElement).scrollTop,
                s = n >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = n;
            for (const o of t) {
                if (!o.isIntersecting) {
                    this._activeTarget = null, this._clearActiveClass(e(o));
                    continue
                }
                const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (s && t) {
                    if (i(o), !n) return
                } else s || t || i(o)
            }
        }
        _initializeTargetsAndObservables() {
            this._targetLinks = new Map, this._observableSections = new Map;
            const t = z.find(bs, this._config.target);
            for (const e of t) {
                if (!e.hash || l(e)) continue;
                const t = z.findOne(decodeURI(e.hash), this._element);
                a(t) && (this._targetLinks.set(decodeURI(e.hash), e), this._observableSections.set(e.hash, t))
            }
        }
        _process(t) {
            this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(_s), this._activateParents(t), N.trigger(this._element, ps, {
                relatedTarget: t
            }))
        }
        _activateParents(t) {
            if (t.classList.contains("dropdown-item")) z.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(_s);
            else
                for (const e of z.parents(t, ".nav, .list-group"))
                    for (const t of z.prev(e, ys)) t.classList.add(_s)
        }
        _clearActiveClass(t) {
            t.classList.remove(_s);
            const e = z.find(`${bs}.${_s}`, t);
            for (const t of e) t.classList.remove(_s)
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Es.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }
    N.on(window, gs, (() => {
        for (const t of z.find('[data-bs-spy="scroll"]')) Es.getOrCreateInstance(t)
    })), m(Es);
    const Ts = ".bs.tab",
        Cs = `hide${Ts}`,
        Os = `hidden${Ts}`,
        xs = `show${Ts}`,
        ks = `shown${Ts}`,
        Ls = `click${Ts}`,
        Ss = `keydown${Ts}`,
        Ds = `load${Ts}`,
        $s = "ArrowLeft",
        Is = "ArrowRight",
        Ns = "ArrowUp",
        Ps = "ArrowDown",
        Ms = "Home",
        js = "End",
        Fs = "active",
        Hs = "fade",
        Ws = "show",
        Bs = ".dropdown-toggle",
        zs = `:not(${Bs})`,
        Rs = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        qs = `.nav-link${zs}, .list-group-item${zs}, [role="tab"]${zs}, ${Rs}`,
        Vs = `.${Fs}[data-bs-toggle="tab"], .${Fs}[data-bs-toggle="pill"], .${Fs}[data-bs-toggle="list"]`;
    class Ks extends W {
        constructor(t) {
            super(t), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), N.on(this._element, Ss, (t => this._keydown(t))))
        }
        static get NAME() {
            return "tab"
        }
        show() {
            const t = this._element;
            if (this._elemIsActive(t)) return;
            const e = this._getActiveElem(),
                i = e ? N.trigger(e, Cs, {
                    relatedTarget: t
                }) : null;
            N.trigger(t, xs, {
                relatedTarget: e
            }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e))
        }
        _activate(t, e) {
            t && (t.classList.add(Fs), this._activate(z.getElementFromSelector(t)), this._queueCallback((() => {
                "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), N.trigger(t, ks, {
                    relatedTarget: e
                })) : t.classList.add(Ws)
            }), t, t.classList.contains(Hs)))
        }
        _deactivate(t, e) {
            t && (t.classList.remove(Fs), t.blur(), this._deactivate(z.getElementFromSelector(t)), this._queueCallback((() => {
                "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), N.trigger(t, Os, {
                    relatedTarget: e
                })) : t.classList.remove(Ws)
            }), t, t.classList.contains(Hs)))
        }
        _keydown(t) {
            if (![$s, Is, Ns, Ps, Ms, js].includes(t.key)) return;
            t.stopPropagation(), t.preventDefault();
            const e = this._getChildren().filter((t => !l(t)));
            let i;
            if ([Ms, js].includes(t.key)) i = e[t.key === Ms ? 0 : e.length - 1];
            else {
                const n = [Is, Ps].includes(t.key);
                i = b(e, t.target, n, !0)
            }
            i && (i.focus({
                preventScroll: !0
            }), Ks.getOrCreateInstance(i).show())
        }
        _getChildren() {
            return z.find(qs, this._parent)
        }
        _getActiveElem() {
            return this._getChildren().find((t => this._elemIsActive(t))) || null
        }
        _setInitialAttributes(t, e) {
            this._setAttributeIfNotExists(t, "role", "tablist");
            for (const t of e) this._setInitialAttributesOnChild(t)
        }
        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            const e = this._elemIsActive(t),
                i = this._getOuterElement(t);
            t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t)
        }
        _setInitialAttributesOnTargetPanel(t) {
            const e = z.getElementFromSelector(t);
            e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`))
        }
        _toggleDropDown(t, e) {
            const i = this._getOuterElement(t);
            if (!i.classList.contains("dropdown")) return;
            const n = (t, n) => {
                const s = z.findOne(t, i);
                s && s.classList.toggle(n, e)
            };
            n(Bs, Fs), n(".dropdown-menu", Ws), i.setAttribute("aria-expanded", e)
        }
        _setAttributeIfNotExists(t, e, i) {
            t.hasAttribute(e) || t.setAttribute(e, i)
        }
        _elemIsActive(t) {
            return t.classList.contains(Fs)
        }
        _getInnerElement(t) {
            return t.matches(qs) ? t : z.findOne(qs, t)
        }
        _getOuterElement(t) {
            return t.closest(".nav-item, .list-group-item") || t
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Ks.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }
    N.on(document, Ls, Rs, (function(t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this) || Ks.getOrCreateInstance(this).show()
    })), N.on(window, Ds, (() => {
        for (const t of z.find(Vs)) Ks.getOrCreateInstance(t)
    })), m(Ks);
    const Qs = ".bs.toast",
        Xs = `mouseover${Qs}`,
        Ys = `mouseout${Qs}`,
        Us = `focusin${Qs}`,
        Gs = `focusout${Qs}`,
        Js = `hide${Qs}`,
        Zs = `hidden${Qs}`,
        to = `show${Qs}`,
        eo = `shown${Qs}`,
        io = "hide",
        no = "show",
        so = "showing",
        oo = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        ro = {
            animation: !0,
            autohide: !0,
            delay: 5e3
        };
    class ao extends W {
        constructor(t, e) {
            super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
        }
        static get Default() {
            return ro
        }
        static get DefaultType() {
            return oo
        }
        static get NAME() {
            return "toast"
        }
        show() {
            N.trigger(this._element, to).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(io), d(this._element), this._element.classList.add(no, so), this._queueCallback((() => {
                this._element.classList.remove(so), N.trigger(this._element, eo), this._maybeScheduleHide()
            }), this._element, this._config.animation))
        }
        hide() {
            this.isShown() && (N.trigger(this._element, Js).defaultPrevented || (this._element.classList.add(so), this._queueCallback((() => {
                this._element.classList.add(io), this._element.classList.remove(so, no), N.trigger(this._element, Zs)
            }), this._element, this._config.animation)))
        }
        dispose() {
            this._clearTimeout(), this.isShown() && this._element.classList.remove(no), super.dispose()
        }
        isShown() {
            return this._element.classList.contains(no)
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => {
                this.hide()
            }), this._config.delay)))
        }
        _onInteraction(t, e) {
            switch (t.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e
            }
            if (e) return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide()
        }
        _setListeners() {
            N.on(this._element, Xs, (t => this._onInteraction(t, !0))), N.on(this._element, Ys, (t => this._onInteraction(t, !1))), N.on(this._element, Us, (t => this._onInteraction(t, !0))), N.on(this._element, Gs, (t => this._onInteraction(t, !1)))
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = ao.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }
    return R(ao), m(ao), {
        Alert: Q,
        Button: Y,
        Carousel: xt,
        Collapse: Bt,
        Dropdown: qi,
        Modal: On,
        Offcanvas: qn,
        Popover: us,
        ScrollSpy: Es,
        Tab: Ks,
        Toast: ao,
        Tooltip: cs
    }
}));


/*
 *
 * Retina.js
 *
 */
(function(a, b) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = b() : 'function' == typeof define && define.amd ? define(b) : a.retinajs = b()
})(this, function() {
    'use strict';

    function a(a) {
        return Array.prototype.slice.call(a)
    }

    function b(a) {
        var b = parseInt(a, 10);
        return k < b ? k : b
    }

    function c(a) {
        return a.hasAttribute('data-no-resize') || (0 === a.offsetWidth && 0 === a.offsetHeight ? (a.setAttribute('width', a.naturalWidth), a.setAttribute('height', a.naturalHeight)) : (a.setAttribute('width', a.offsetWidth), a.setAttribute('height', a.offsetHeight))), a
    }

    function d(a, b) {
        var d = a.nodeName.toLowerCase(),
            e = document.createElement('img');
        e.addEventListener('load', function() {
            'img' === d ? c(a).setAttribute('src', b) : a.style.backgroundImage = 'url(' + b + ')'
        }), e.setAttribute('src', b), a.setAttribute(o, !0)
    }

    function e(a, c) {
        var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
            f = b(e);
        if (c && 1 < f) {
            var g = c.replace(l, '@' + f + 'x$1');
            d(a, g)
        }
    }

    function f(a, b, c) {
        1 < k && d(a, c)
    }

    function g(b) {
        return b ? 'function' == typeof b.forEach ? b : a(b) : 'undefined' == typeof document ? [] : a(document.querySelectorAll(n))
    }

    function h(a) {
        return a.style.backgroundImage.replace(m, '$2')
    }

    function i(a) {
        g(a).forEach(function(a) {
            if (!a.getAttribute(o)) {
                var b = 'img' === a.nodeName.toLowerCase(),
                    c = b ? a.getAttribute('src') : h(a),
                    d = a.getAttribute('data-rjs'),
                    g = !isNaN(parseInt(d, 10));
                if (null === d) return;
                g ? e(a, c, d) : f(a, c, d)
            }
        })
    }
    var j = 'undefined' != typeof window,
        k = Math.round(j ? window.devicePixelRatio || 1 : 1),
        l = /(\.[A-z]{3,4}\/?(\?.*)?)$/,
        m = /url\(('|")?([^)'"]+)('|")?\)/i,
        n = '[data-rjs]',
        o = 'data-rjs-processed';
    return j && (window.addEventListener('load', function() {
        i()
    }), window.retinajs = i), i
});


/*
 *
 * Appear
 *
 */
! function(e) {
    e.fn.appear = function(a, r) {
        var n = e.extend({
            data: void 0,
            one: !0,
            accX: 0,
            accY: 0
        }, r);
        return this.each(function() {
            var r = e(this);
            if (r.appeared = !1, !a) return void r.trigger("appear", n.data);
            var p = e(window),
                t = function() {
                    if (!r.is(":visible")) return void(r.appeared = !1);
                    var e = p.scrollLeft(),
                        a = p.scrollTop(),
                        t = r.offset(),
                        c = t.left,
                        i = t.top,
                        o = n.accX,
                        f = n.accY,
                        s = r.height(),
                        u = p.height(),
                        d = r.width(),
                        l = p.width();
                    i + s + f >= a && a + u + f >= i && c + d + o >= e && e + l + o >= c ? r.appeared || r.trigger("appear", n.data) : r.appeared = !1
                },
                c = function() {
                    if (r.appeared = !0, n.one) {
                        p.unbind("scroll", t);
                        var c = e.inArray(t, e.fn.appear.checks);
                        c >= 0 && e.fn.appear.checks.splice(c, 1)
                    }
                    a.apply(this, arguments)
                };
            n.one ? r.one("appear", n.data, c) : r.bind("appear", n.data, c), p.scroll(t), e.fn.appear.checks.push(t), t()
        })
    }, e.extend(e.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var a = e.fn.appear.checks.length;
            if (a > 0)
                for (; a--;) e.fn.appear.checks[a]()
        },
        run: function() {
            e.fn.appear.timeout && clearTimeout(e.fn.appear.timeout), e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20)
        }
    }), e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(a, r) {
        var n = e.fn[r];
        n && (e.fn[r] = function() {
            var a = n.apply(this, arguments);
            return e.fn.appear.run(), a
        })
    })
}(jQuery);


/**!
 * MixItUp v3.3.1
 * A high-performance, dependency-free library for animated filtering, sorting and more
 * Build 94e0fbf6-cd0b-4987-b3c0-14b59b67b8a0
 *
 * @copyright Copyright 2014-2018 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://www.kunkalabs.com/mixitup/
 *
 * @license   Commercial use requires a commercial license.
 *            https://www.kunkalabs.com/mixitup/licenses/
 *
 *            Non-commercial use permitted under same terms as CC BY-NC 3.0 license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */
! function(t) {
    "use strict";
    var e = null,
        n = null;
    ! function() {
        var e = ["webkit", "moz", "o", "ms"],
            n = t.document.createElement("div"),
            a = -1;
        for (a = 0; a < e.length && !t.requestAnimationFrame; a++) t.requestAnimationFrame = t[e[a] + "RequestAnimationFrame"];
        "undefined" == typeof n.nextElementSibling && Object.defineProperty(t.Element.prototype, "nextElementSibling", {
                get: function() {
                    for (var t = this.nextSibling; t;) {
                        if (1 === t.nodeType) return t;
                        t = t.nextSibling
                    }
                    return null
                }
            }),
            function(t) {
                t.matches = t.matches || t.machesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector || function(t) {
                    return Array.prototype.indexOf.call(this.parentElement.querySelectorAll(t), this) > -1
                }
            }(t.Element.prototype), Object.keys || (Object.keys = function() {
                var t = Object.prototype.hasOwnProperty,
                    e = !1,
                    n = [],
                    a = -1;
                return e = !{
                        toString: null
                    }.propertyIsEnumerable("toString"), n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], a = n.length,
                    function(i) {
                        var o = [],
                            r = "",
                            s = -1;
                        if ("object" != typeof i && ("function" != typeof i || null === i)) throw new TypeError("Object.keys called on non-object");
                        for (r in i) t.call(i, r) && o.push(r);
                        if (e)
                            for (s = 0; s < a; s++) t.call(i, n[s]) && o.push(n[s]);
                        return o
                    }
            }()), Array.isArray || (Array.isArray = function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }), "function" != typeof Object.create && (Object.create = function(t) {
                var e = function() {};
                return function(n, a) {
                    if (n !== Object(n) && null !== n) throw TypeError("Argument must be an object, or null");
                    e.prototype = n || {};
                    var i = new e;
                    return e.prototype = null, a !== t && Object.defineProperties(i, a), null === n && (i.__proto__ = null), i
                }
            }()), String.prototype.trim || (String.prototype.trim = function() {
                return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }), Array.prototype.indexOf || (Array.prototype.indexOf = function(t) {
                var e, n, a, i;
                if (null === this) throw new TypeError;
                if (a = Object(this), i = a.length >>> 0, 0 === i) return -1;
                if (e = 0, arguments.length > 1 && (e = Number(arguments[1]), e !== e ? e = 0 : 0 !== e && e !== 1 / 0 && e !== -(1 / 0) && (e = (e > 0 || -1) * Math.floor(Math.abs(e)))), e >= i) return -1;
                for (n = e >= 0 ? e : Math.max(i - Math.abs(e), 0); n < i; n++)
                    if (n in a && a[n] === t) return n;
                return -1
            }), Function.prototype.bind || (Function.prototype.bind = function(t) {
                var e, n, a, i;
                if ("function" != typeof this) throw new TypeError;
                return e = Array.prototype.slice.call(arguments, 1), n = this, a = function() {}, i = function() {
                    return n.apply(this instanceof a ? this : t, e.concat(Array.prototype.slice.call(arguments)))
                }, this.prototype && (a.prototype = this.prototype), i.prototype = new a, i
            }), t.Element.prototype.dispatchEvent || (t.Element.prototype.dispatchEvent = function(t) {
                try {
                    return this.fireEvent("on" + t.type, t)
                } catch (e) {}
            })
    }(), e = function(a, i, o) {
        var r = null,
            s = !1,
            l = null,
            c = null,
            u = null,
            f = null,
            h = [],
            d = "",
            m = [],
            g = -1;
        if (u = o || t.document, (s = arguments[3]) && (s = "boolean" == typeof s), "string" == typeof a) m = u.querySelectorAll(a);
        else if (a && "object" == typeof a && n.isElement(a, u)) m = [a];
        else {
            if (!a || "object" != typeof a || !a.length) throw new Error(e.messages.errorFactoryInvalidContainer());
            m = a
        }
        if (m.length < 1) throw new Error(e.messages.errorFactoryContainerNotFound());
        for (g = 0;
            (r = m[g]) && (!(g > 0) || s); g++) r.id ? d = r.id : (d = "MixItUp" + n.randomHex(), r.id = d), e.instances[d] instanceof e.Mixer ? (l = e.instances[d], (!i || i && i.debug && i.debug.showWarnings !== !1) && console.warn(e.messages.warningFactoryPreexistingInstance())) : (l = new e.Mixer, l.attach(r, u, d, i), e.instances[d] = l), c = new e.Facade(l), i && i.debug && i.debug.enable ? h.push(l) : h.push(c);
        return f = s ? new e.Collection(h) : h[0]
    }, e.use = function(t) {
        e.Base.prototype.callActions.call(e, "beforeUse", arguments), "function" == typeof t && "mixitup-extension" === t.TYPE ? "undefined" == typeof e.extensions[t.NAME] && (t(e), e.extensions[t.NAME] = t) : t.fn && t.fn.jquery && (e.libraries.$ = t), e.Base.prototype.callActions.call(e, "afterUse", arguments)
    }, e.instances = {}, e.extensions = {}, e.libraries = {}, n = {
        hasClass: function(t, e) {
            return !!t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"))
        },
        addClass: function(t, e) {
            this.hasClass(t, e) || (t.className += t.className ? " " + e : e)
        },
        removeClass: function(t, e) {
            if (this.hasClass(t, e)) {
                var n = new RegExp("(\\s|^)" + e + "(\\s|$)");
                t.className = t.className.replace(n, " ").trim()
            }
        },
        extend: function(t, e, n, a) {
            var i = [],
                o = "",
                r = -1;
            n = n || !1, a = a || !1;
            try {
                if (Array.isArray(e))
                    for (r = 0; r < e.length; r++) i.push(r);
                else e && (i = Object.keys(e));
                for (r = 0; r < i.length; r++) o = i[r], !n || "object" != typeof e[o] || this.isElement(e[o]) ? t[o] = e[o] : Array.isArray(e[o]) ? (t[o] || (t[o] = []), this.extend(t[o], e[o], n, a)) : (t[o] || (t[o] = {}), this.extend(t[o], e[o], n, a))
            } catch (s) {
                if (!a) throw s;
                this.handleExtendError(s, t)
            }
            return t
        },
        handleExtendError: function(t, n) {
            var a = /property "?(\w*)"?[,:] object/i,
                i = null,
                o = "",
                r = "",
                s = "",
                l = "",
                c = "",
                u = -1,
                f = -1;
            if (t instanceof TypeError && (i = a.exec(t.message))) {
                o = i[1];
                for (c in n) {
                    for (f = 0; f < o.length && o.charAt(f) === c.charAt(f);) f++;
                    f > u && (u = f, l = c)
                }
                throw u > 1 && (s = e.messages.errorConfigInvalidPropertySuggestion({
                    probableMatch: l
                })), r = e.messages.errorConfigInvalidProperty({
                    erroneous: o,
                    suggestion: s
                }), new TypeError(r)
            }
            throw t
        },
        template: function(t) {
            for (var e = /\${([\w]*)}/g, n = {}, a = null; a = e.exec(t);) n[a[1]] = new RegExp("\\${" + a[1] + "}", "g");
            return function(e) {
                var a = "",
                    i = t;
                e = e || {};
                for (a in n) i = i.replace(n[a], "undefined" != typeof e[a] ? e[a] : "");
                return i
            }
        },
        on: function(e, n, a, i) {
            e && (e.addEventListener ? e.addEventListener(n, a, i) : e.attachEvent && (e["e" + n + a] = a, e[n + a] = function() {
                e["e" + n + a](t.event)
            }, e.attachEvent("on" + n, e[n + a])))
        },
        off: function(t, e, n) {
            t && (t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent && (t.detachEvent("on" + e, t[e + n]), t[e + n] = null))
        },
        getCustomEvent: function(e, n, a) {
            var i = null;
            return a = a || t.document, "function" == typeof t.CustomEvent ? i = new t.CustomEvent(e, {
                detail: n,
                bubbles: !0,
                cancelable: !0
            }) : "function" == typeof a.createEvent ? (i = a.createEvent("CustomEvent"), i.initCustomEvent(e, !0, !0, n)) : (i = a.createEventObject(), i.type = e, i.returnValue = !1, i.cancelBubble = !1, i.detail = n), i
        },
        getOriginalEvent: function(t) {
            return t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t
        },
        index: function(t, e) {
            for (var n = 0; null !== (t = t.previousElementSibling);) e && !t.matches(e) || ++n;
            return n
        },
        camelCase: function(t) {
            return t.toLowerCase().replace(/([_-][a-z])/g, function(t) {
                return t.toUpperCase().replace(/[_-]/, "")
            })
        },
        pascalCase: function(t) {
            return (t = this.camelCase(t)).charAt(0).toUpperCase() + t.slice(1)
        },
        dashCase: function(t) {
            return t.replace(/([A-Z])/g, "-$1").replace(/^-/, "").toLowerCase()
        },
        isElement: function(e, n) {
            return n = n || t.document, !!(t.HTMLElement && e instanceof t.HTMLElement) || (!!(n.defaultView && n.defaultView.HTMLElement && e instanceof n.defaultView.HTMLElement) || null !== e && 1 === e.nodeType && "string" == typeof e.nodeName)
        },
        createElement: function(e, n) {
            var a = null,
                i = null;
            for (n = n || t.document, a = n.createDocumentFragment(), i = n.createElement("div"), i.innerHTML = e.trim(); i.firstChild;) a.appendChild(i.firstChild);
            return a
        },
        removeWhitespace: function(t) {
            for (var e; t && "#text" === t.nodeName;) e = t, t = t.previousSibling, e.parentElement && e.parentElement.removeChild(e)
        },
        isEqualArray: function(t, e) {
            var n = t.length;
            if (n !== e.length) return !1;
            for (; n--;)
                if (t[n] !== e[n]) return !1;
            return !0
        },
        deepEquals: function(t, e) {
            var n;
            if ("object" == typeof t && t && "object" == typeof e && e) {
                if (Object.keys(t).length !== Object.keys(e).length) return !1;
                for (n in t)
                    if (!e.hasOwnProperty(n) || !this.deepEquals(t[n], e[n])) return !1
            } else if (t !== e) return !1;
            return !0
        },
        arrayShuffle: function(t) {
            for (var e = t.slice(), n = e.length, a = n, i = -1, o = []; a--;) i = ~~(Math.random() * n), o = e[a], e[a] = e[i], e[i] = o;
            return e
        },
        arrayFromList: function(t) {
            var e, n;
            try {
                return Array.prototype.slice.call(t)
            } catch (a) {
                for (e = [], n = 0; n < t.length; n++) e.push(t[n]);
                return e
            }
        },
        debounce: function(t, e, n) {
            var a;
            return function() {
                var i = this,
                    o = arguments,
                    r = n && !a,
                    s = null;
                s = function() {
                    a = null, n || t.apply(i, o)
                }, clearTimeout(a), a = setTimeout(s, e), r && t.apply(i, o)
            }
        },
        position: function(t) {
            for (var e = 0, n = 0, a = t; t;) e -= t.scrollLeft, n -= t.scrollTop, t === a && (e += t.offsetLeft, n += t.offsetTop, a = t.offsetParent), t = t.parentElement;
            return {
                x: e,
                y: n
            }
        },
        getHypotenuse: function(t, e) {
            var n = t.x - e.x,
                a = t.y - e.y;
            return n = n < 0 ? n * -1 : n, a = a < 0 ? a * -1 : a, Math.sqrt(Math.pow(n, 2) + Math.pow(a, 2))
        },
        getIntersectionRatio: function(t, e) {
            var n = t.width * t.height,
                a = -1,
                i = -1,
                o = -1,
                r = -1;
            return a = Math.max(0, Math.min(t.left + t.width, e.left + e.width) - Math.max(t.left, e.left)), i = Math.max(0, Math.min(t.top + t.height, e.top + e.height) - Math.max(t.top, e.top)), o = i * a, r = o / n
        },
        closestParent: function(e, n, a, i) {
            var o = e.parentNode;
            if (i = i || t.document, a && e.matches(n)) return e;
            for (; o && o != i.body;) {
                if (o.matches && o.matches(n)) return o;
                if (!o.parentNode) return null;
                o = o.parentNode
            }
            return null
        },
        children: function(e, n, a) {
            var i = [],
                o = "";
            return a = a || t.doc, e && (e.id || (o = "Temp" + this.randomHexKey(), e.id = o), i = a.querySelectorAll("#" + e.id + " > " + n), o && e.removeAttribute("id")), i
        },
        clean: function(t) {
            var e = [],
                n = -1;
            for (n = 0; n < t.length; n++) "" !== t[n] && e.push(t[n]);
            return e
        },
        defer: function(n) {
            var a = null,
                i = null,
                o = null;
            return i = new this.Deferred, e.features.has.promises ? i.promise = new Promise(function(t, e) {
                i.resolve = t, i.reject = e
            }) : (o = t.jQuery || n.$) && "function" == typeof o.Deferred ? (a = o.Deferred(), i.promise = a.promise(), i.resolve = a.resolve, i.reject = a.reject) : t.console && console.warn(e.messages.warningNoPromiseImplementation()), i
        },
        all: function(n, a) {
            var i = null;
            return e.features.has.promises ? Promise.all(n) : (i = t.jQuery || a.$) && "function" == typeof i.when ? i.when.apply(i, n).done(function() {
                return arguments
            }) : (t.console && console.warn(e.messages.warningNoPromiseImplementation()), [])
        },
        getPrefix: function(t, e, a) {
            var i = -1,
                o = "";
            if (n.dashCase(e) in t.style) return "";
            for (i = 0; o = a[i]; i++)
                if (o + e in t.style) return o.toLowerCase();
            return "unsupported"
        },
        randomHex: function() {
            return ("00000" + (16777216 * Math.random() << 0).toString(16)).substr(-6).toUpperCase()
        },
        getDocumentState: function(e) {
            return e = "object" == typeof e.body ? e : t.document, {
                scrollTop: t.pageYOffset,
                scrollLeft: t.pageXOffset,
                docHeight: e.documentElement.scrollHeight,
                docWidth: e.documentElement.scrollWidth,
                viewportHeight: e.documentElement.clientHeight,
                viewportWidth: e.documentElement.clientWidth
            }
        },
        bind: function(t, e) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        isVisible: function(e) {
            var n = null;
            return !!e.offsetParent || (n = t.getComputedStyle(e), "fixed" === n.position && "hidden" !== n.visibility && "0" !== n.opacity)
        },
        seal: function(t) {
            "function" == typeof Object.seal && Object.seal(t)
        },
        freeze: function(t) {
            "function" == typeof Object.freeze && Object.freeze(t)
        },
        compareVersions: function(t, e) {
            var n = t.split("."),
                a = e.split("."),
                i = -1,
                o = -1,
                r = -1;
            for (r = 0; r < n.length; r++) {
                if (i = parseInt(n[r].replace(/[^\d.]/g, "")), o = parseInt(a[r].replace(/[^\d.]/g, "") || 0), o < i) return !1;
                if (o > i) return !0
            }
            return !0
        },
        Deferred: function() {
            this.promise = null, this.resolve = null, this.reject = null, this.id = n.randomHex()
        },
        isEmptyObject: function(t) {
            var e = "";
            if ("function" == typeof Object.keys) return 0 === Object.keys(t).length;
            for (e in t)
                if (t.hasOwnProperty(e)) return !1;
            return !0
        },
        getClassname: function(t, e, n) {
            var a = "";
            return a += t.block, a.length && (a += t.delineatorElement), a += t["element" + this.pascalCase(e)], n ? (a.length && (a += t.delineatorModifier), a += n) : a
        },
        getProperty: function(t, e) {
            var n = e.split("."),
                a = null,
                i = "",
                o = 0;
            if (!e) return t;
            for (a = function(t) {
                    return t ? t[i] : null
                }; o < n.length;) i = n[o], t = a(t), o++;
            return "undefined" != typeof t ? t : null
        }
    }, e.h = n, e.Base = function() {}, e.Base.prototype = {
        constructor: e.Base,
        callActions: function(t, e) {
            var a = this,
                i = a.constructor.actions[t],
                o = "";
            if (i && !n.isEmptyObject(i))
                for (o in i) i[o].apply(a, e)
        },
        callFilters: function(t, e, a) {
            var i = this,
                o = i.constructor.filters[t],
                r = e,
                s = "";
            if (!o || n.isEmptyObject(o)) return r;
            a = a || [];
            for (s in o) a = n.arrayFromList(a), a.unshift(r), r = o[s].apply(i, a);
            return r
        }
    }, e.BaseStatic = function() {
        this.actions = {}, this.filters = {}, this.extend = function(t) {
            n.extend(this.prototype, t)
        }, this.registerAction = function(t, e, n) {
            (this.actions[t] = this.actions[t] || {})[e] = n
        }, this.registerFilter = function(t, e, n) {
            (this.filters[t] = this.filters[t] || {})[e] = n
        }
    }, e.Features = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.boxSizingPrefix = "", this.transformPrefix = "", this.transitionPrefix = "", this.boxSizingPrefix = "", this.transformProp = "", this.transformRule = "", this.transitionProp = "", this.perspectiveProp = "", this.perspectiveOriginProp = "", this.has = new e.Has, this.canary = null, this.BOX_SIZING_PROP = "boxSizing", this.TRANSITION_PROP = "transition", this.TRANSFORM_PROP = "transform", this.PERSPECTIVE_PROP = "perspective", this.PERSPECTIVE_ORIGIN_PROP = "perspectiveOrigin", this.VENDORS = ["Webkit", "moz", "O", "ms"], this.TWEENABLE = ["opacity", "width", "height", "marginRight", "marginBottom", "x", "y", "scale", "translateX", "translateY", "translateZ", "rotateX", "rotateY", "rotateZ"], this.callActions("afterConstruct")
    }, e.BaseStatic.call(e.Features), e.Features.prototype = Object.create(e.Base.prototype), n.extend(e.Features.prototype, {
        constructor: e.Features,
        init: function() {
            var t = this;
            t.callActions("beforeInit", arguments), t.canary = document.createElement("div"), t.setPrefixes(), t.runTests(), t.callActions("beforeInit", arguments)
        },
        runTests: function() {
            var e = this;
            e.callActions("beforeRunTests", arguments), e.has.promises = "function" == typeof t.Promise, e.has.transitions = "unsupported" !== e.transitionPrefix, e.callActions("afterRunTests", arguments), n.freeze(e.has)
        },
        setPrefixes: function() {
            var t = this;
            t.callActions("beforeSetPrefixes", arguments), t.transitionPrefix = n.getPrefix(t.canary, "Transition", t.VENDORS), t.transformPrefix = n.getPrefix(t.canary, "Transform", t.VENDORS), t.boxSizingPrefix = n.getPrefix(t.canary, "BoxSizing", t.VENDORS), t.boxSizingProp = t.boxSizingPrefix ? t.boxSizingPrefix + n.pascalCase(t.BOX_SIZING_PROP) : t.BOX_SIZING_PROP, t.transitionProp = t.transitionPrefix ? t.transitionPrefix + n.pascalCase(t.TRANSITION_PROP) : t.TRANSITION_PROP, t.transformProp = t.transformPrefix ? t.transformPrefix + n.pascalCase(t.TRANSFORM_PROP) : t.TRANSFORM_PROP, t.transformRule = t.transformPrefix ? "-" + t.transformPrefix + "-" + t.TRANSFORM_PROP : t.TRANSFORM_PROP, t.perspectiveProp = t.transformPrefix ? t.transformPrefix + n.pascalCase(t.PERSPECTIVE_PROP) : t.PERSPECTIVE_PROP, t.perspectiveOriginProp = t.transformPrefix ? t.transformPrefix + n.pascalCase(t.PERSPECTIVE_ORIGIN_PROP) : t.PERSPECTIVE_ORIGIN_PROP, t.callActions("afterSetPrefixes", arguments)
        }
    }), e.Has = function() {
        this.transitions = !1, this.promises = !1, n.seal(this)
    }, e.features = new e.Features, e.features.init(), e.ConfigAnimation = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.enable = !0, this.effects = "fade scale", this.effectsIn = "", this.effectsOut = "", this.duration = 600, this.easing = "ease", this.applyPerspective = !0, this.perspectiveDistance = "3000px", this.perspectiveOrigin = "50% 50%", this.queue = !0, this.queueLimit = 3, this.animateResizeContainer = !0, this.animateResizeTargets = !1, this.staggerSequence = null, this.reverseOut = !1, this.nudge = !0, this.clampHeight = !0, this.clampWidth = !0, this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.ConfigAnimation), e.ConfigAnimation.prototype = Object.create(e.Base.prototype), e.ConfigAnimation.prototype.constructor = e.ConfigAnimation, e.ConfigBehavior = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.liveSort = !1, this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.ConfigBehavior), e.ConfigBehavior.prototype = Object.create(e.Base.prototype), e.ConfigBehavior.prototype.constructor = e.ConfigBehavior, e.ConfigCallbacks = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.onMixStart = null, this.onMixBusy = null, this.onMixEnd = null, this.onMixFail = null, this.onMixClick = null, this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.ConfigCallbacks), e.ConfigCallbacks.prototype = Object.create(e.Base.prototype), e.ConfigCallbacks.prototype.constructor = e.ConfigCallbacks, e.ConfigControls = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.enable = !0, this.live = !1, this.scope = "global", this.toggleLogic = "or", this.toggleDefault = "all", this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.ConfigControls), e.ConfigControls.prototype = Object.create(e.Base.prototype), e.ConfigControls.prototype.constructor = e.ConfigControls, e.ConfigClassNames = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.block = "mixitup", this.elementContainer = "container", this.elementFilter = "control", this.elementSort = "control", this.elementMultimix = "control", this.elementToggle = "control", this.modifierActive = "active", this.modifierDisabled = "disabled", this.modifierFailed = "failed", this.delineatorElement = "-", this.delineatorModifier = "-", this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.ConfigClassNames), e.ConfigClassNames.prototype = Object.create(e.Base.prototype), e.ConfigClassNames.prototype.constructor = e.ConfigClassNames, e.ConfigData = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.uidKey = "", this.dirtyCheck = !1, this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.ConfigData), e.ConfigData.prototype = Object.create(e.Base.prototype), e.ConfigData.prototype.constructor = e.ConfigData, e.ConfigDebug = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.enable = !1, this.showWarnings = !0, this.fauxAsync = !1, this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.ConfigDebug), e.ConfigDebug.prototype = Object.create(e.Base.prototype), e.ConfigDebug.prototype.constructor = e.ConfigDebug, e.ConfigLayout = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.allowNestedTargets = !0, this.containerClassName = "", this.siblingBefore = null, this.siblingAfter = null, this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.ConfigLayout), e.ConfigLayout.prototype = Object.create(e.Base.prototype), e.ConfigLayout.prototype.constructor = e.ConfigLayout, e.ConfigLoad = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.filter = "all", this.sort = "default:asc", this.dataset = null, this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.ConfigLoad), e.ConfigLoad.prototype = Object.create(e.Base.prototype), e.ConfigLoad.prototype.constructor = e.ConfigLoad, e.ConfigSelectors = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.target = ".mix", this.control = "", this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.ConfigSelectors), e.ConfigSelectors.prototype = Object.create(e.Base.prototype), e.ConfigSelectors.prototype.constructor = e.ConfigSelectors, e.ConfigRender = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.target = null, this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.ConfigRender), e.ConfigRender.prototype = Object.create(e.Base.prototype), e.ConfigRender.prototype.constructor = e.ConfigRender, e.ConfigTemplates = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.ConfigTemplates), e.ConfigTemplates.prototype = Object.create(e.Base.prototype), e.ConfigTemplates.prototype.constructor = e.ConfigTemplates, e.Config = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.animation = new e.ConfigAnimation, this.behavior = new e.ConfigBehavior, this.callbacks = new e.ConfigCallbacks, this.controls = new e.ConfigControls, this.classNames = new e.ConfigClassNames, this.data = new e.ConfigData, this.debug = new e.ConfigDebug, this.layout = new e.ConfigLayout, this.load = new e.ConfigLoad, this.selectors = new e.ConfigSelectors, this.render = new e.ConfigRender, this.templates = new e.ConfigTemplates, this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.Config), e.Config.prototype = Object.create(e.Base.prototype), e.Config.prototype.constructor = e.Config, e.MixerDom = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.document = null, this.body = null, this.container = null, this.parent = null, this.targets = [], this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.MixerDom), e.MixerDom.prototype = Object.create(e.Base.prototype), e.MixerDom.prototype.constructor = e.MixerDom, e.UiClassNames = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.base = "", this.active = "", this.disabled = "", this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.UiClassNames), e.UiClassNames.prototype = Object.create(e.Base.prototype), e.UiClassNames.prototype.constructor = e.UiClassNames, e.CommandDataset = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.dataset = null, this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.CommandDataset), e.CommandDataset.prototype = Object.create(e.Base.prototype), e.CommandDataset.prototype.constructor = e.CommandDataset, e.CommandMultimix = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.filter = null, this.sort = null, this.insert = null, this.remove = null, this.changeLayout = null, this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.CommandMultimix), e.CommandMultimix.prototype = Object.create(e.Base.prototype), e.CommandMultimix.prototype.constructor = e.CommandMultimix, e.CommandFilter = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.selector = "", this.collection = null, this.action = "show", this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.CommandFilter), e.CommandFilter.prototype = Object.create(e.Base.prototype), e.CommandFilter.prototype.constructor = e.CommandFilter, e.CommandSort = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.sortString = "", this.attribute = "", this.order = "asc", this.collection = null, this.next = null, this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.CommandSort), e.CommandSort.prototype = Object.create(e.Base.prototype), e.CommandSort.prototype.constructor = e.CommandSort, e.CommandInsert = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.index = 0, this.collection = [], this.position = "before", this.sibling = null, this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.CommandInsert), e.CommandInsert.prototype = Object.create(e.Base.prototype), e.CommandInsert.prototype.constructor = e.CommandInsert, e.CommandRemove = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.targets = [], this.collection = [], this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.CommandRemove), e.CommandRemove.prototype = Object.create(e.Base.prototype), e.CommandRemove.prototype.constructor = e.CommandRemove, e.CommandChangeLayout = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.containerClassName = "", this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.CommandChangeLayout), e.CommandChangeLayout.prototype = Object.create(e.Base.prototype), e.CommandChangeLayout.prototype.constructor = e.CommandChangeLayout, e.ControlDefinition = function(t, a, i, o) {
        e.Base.call(this), this.callActions("beforeConstruct"), this.type = t, this.selector = a, this.live = i || !1, this.parent = o || "", this.callActions("afterConstruct"), n.freeze(this), n.seal(this)
    }, e.BaseStatic.call(e.ControlDefinition), e.ControlDefinition.prototype = Object.create(e.Base.prototype), e.ControlDefinition.prototype.constructor = e.ControlDefinition, e.controlDefinitions = [], e.controlDefinitions.push(new e.ControlDefinition("multimix", "[data-filter][data-sort]")), e.controlDefinitions.push(new e.ControlDefinition("filter", "[data-filter]")), e.controlDefinitions.push(new e.ControlDefinition("sort", "[data-sort]")), e.controlDefinitions.push(new e.ControlDefinition("toggle", "[data-toggle]")), e.Control = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.el = null, this.selector = "", this.bound = [], this.pending = -1, this.type = "", this.status = "inactive", this.filter = "", this.sort = "", this.canDisable = !1, this.handler = null, this.classNames = new e.UiClassNames, this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.Control), e.Control.prototype = Object.create(e.Base.prototype), n.extend(e.Control.prototype, {
        constructor: e.Control,
        init: function(t, n, a) {
            var i = this;
            if (this.callActions("beforeInit", arguments), i.el = t, i.type = n, i.selector = a, i.selector) i.status = "live";
            else switch (i.canDisable = "boolean" == typeof i.el.disable, i.type) {
                case "filter":
                    i.filter = i.el.getAttribute("data-filter");
                    break;
                case "toggle":
                    i.filter = i.el.getAttribute("data-toggle");
                    break;
                case "sort":
                    i.sort = i.el.getAttribute("data-sort");
                    break;
                case "multimix":
                    i.filter = i.el.getAttribute("data-filter"), i.sort = i.el.getAttribute("data-sort")
            }
            i.bindClick(), e.controls.push(i), this.callActions("afterInit", arguments)
        },
        isBound: function(t) {
            var e = this,
                n = !1;
            return this.callActions("beforeIsBound", arguments), n = e.bound.indexOf(t) > -1, e.callFilters("afterIsBound", n, arguments)
        },
        addBinding: function(t) {
            var e = this;
            this.callActions("beforeAddBinding", arguments), e.isBound() || e.bound.push(t), this.callActions("afterAddBinding", arguments)
        },
        removeBinding: function(t) {
            var n = this,
                a = -1;
            this.callActions("beforeRemoveBinding", arguments), (a = n.bound.indexOf(t)) > -1 && n.bound.splice(a, 1), n.bound.length < 1 && (n.unbindClick(), a = e.controls.indexOf(n), e.controls.splice(a, 1), "active" === n.status && n.renderStatus(n.el, "inactive")), this.callActions("afterRemoveBinding", arguments)
        },
        bindClick: function() {
            var t = this;
            this.callActions("beforeBindClick", arguments), t.handler = function(e) {
                t.handleClick(e)
            }, n.on(t.el, "click", t.handler), this.callActions("afterBindClick", arguments)
        },
        unbindClick: function() {
            var t = this;
            this.callActions("beforeUnbindClick", arguments), n.off(t.el, "click", t.handler), t.handler = null, this.callActions("afterUnbindClick", arguments)
        },
        handleClick: function(t) {
            var a = this,
                i = null,
                o = null,
                r = !1,
                s = void 0,
                l = {},
                c = null,
                u = [],
                f = -1;
            if (this.callActions("beforeHandleClick", arguments), this.pending = 0, o = a.bound[0], i = a.selector ? n.closestParent(t.target, o.config.selectors.control + a.selector, !0, o.dom.document) : a.el, !i) return void a.callActions("afterHandleClick", arguments);
            switch (a.type) {
                case "filter":
                    l.filter = a.filter || i.getAttribute("data-filter");
                    break;
                case "sort":
                    l.sort = a.sort || i.getAttribute("data-sort");
                    break;
                case "multimix":
                    l.filter = a.filter || i.getAttribute("data-filter"), l.sort = a.sort || i.getAttribute("data-sort");
                    break;
                case "toggle":
                    l.filter = a.filter || i.getAttribute("data-toggle"), r = "live" === a.status ? n.hasClass(i, a.classNames.active) : "active" === a.status
            }
            for (f = 0; f < a.bound.length; f++) c = new e.CommandMultimix, n.extend(c, l), u.push(c);
            for (u = a.callFilters("commandsHandleClick", u, arguments), a.pending = a.bound.length, f = 0; o = a.bound[f]; f++) l = u[f], l && (o.lastClicked || (o.lastClicked = i), e.events.fire("mixClick", o.dom.container, {
                state: o.state,
                instance: o,
                originalEvent: t,
                control: o.lastClicked
            }, o.dom.document), "function" == typeof o.config.callbacks.onMixClick && (s = o.config.callbacks.onMixClick.call(o.lastClicked, o.state, t, o), s === !1) || ("toggle" === a.type ? r ? o.toggleOff(l.filter) : o.toggleOn(l.filter) : o.multimix(l)));
            this.callActions("afterHandleClick", arguments)
        },
        update: function(t, n) {
            var a = this,
                i = new e.CommandMultimix;
            a.callActions("beforeUpdate", arguments), a.pending--, a.pending = Math.max(0, a.pending), a.pending > 0 || ("live" === a.status ? a.updateLive(t, n) : (i.sort = a.sort, i.filter = a.filter, a.callFilters("actionsUpdate", i, arguments), a.parseStatusChange(a.el, t, i, n)), a.callActions("afterUpdate", arguments))
        },
        updateLive: function(t, n) {
            var a = this,
                i = null,
                o = null,
                r = null,
                s = -1;
            if (a.callActions("beforeUpdateLive", arguments), a.el) {
                for (i = a.el.querySelectorAll(a.selector), s = 0; r = i[s]; s++) {
                    switch (o = new e.CommandMultimix, a.type) {
                        case "filter":
                            o.filter = r.getAttribute("data-filter");
                            break;
                        case "sort":
                            o.sort = r.getAttribute("data-sort");
                            break;
                        case "multimix":
                            o.filter = r.getAttribute("data-filter"), o.sort = r.getAttribute("data-sort");
                            break;
                        case "toggle":
                            o.filter = r.getAttribute("data-toggle")
                    }
                    o = a.callFilters("actionsUpdateLive", o, arguments), a.parseStatusChange(r, t, o, n)
                }
                a.callActions("afterUpdateLive", arguments)
            }
        },
        parseStatusChange: function(t, e, n, a) {
            var i = this,
                o = "",
                r = "",
                s = -1;
            switch (i.callActions("beforeParseStatusChange", arguments), i.type) {
                case "filter":
                    e.filter === n.filter ? i.renderStatus(t, "active") : i.renderStatus(t, "inactive");
                    break;
                case "multimix":
                    e.sort === n.sort && e.filter === n.filter ? i.renderStatus(t, "active") : i.renderStatus(t, "inactive");
                    break;
                case "sort":
                    e.sort.match(/:asc/g) && (o = e.sort.replace(/:asc/g, "")), e.sort === n.sort || o === n.sort ? i.renderStatus(t, "active") : i.renderStatus(t, "inactive");
                    break;
                case "toggle":
                    for (a.length < 1 && i.renderStatus(t, "inactive"), e.filter === n.filter && i.renderStatus(t, "active"), s = 0; s < a.length; s++) {
                        if (r = a[s], r === n.filter) {
                            i.renderStatus(t, "active");
                            break
                        }
                        i.renderStatus(t, "inactive")
                    }
            }
            i.callActions("afterParseStatusChange", arguments)
        },
        renderStatus: function(t, e) {
            var a = this;
            switch (a.callActions("beforeRenderStatus", arguments), e) {
                case "active":
                    n.addClass(t, a.classNames.active), n.removeClass(t, a.classNames.disabled), a.canDisable && (a.el.disabled = !1);
                    break;
                case "inactive":
                    n.removeClass(t, a.classNames.active), n.removeClass(t, a.classNames.disabled), a.canDisable && (a.el.disabled = !1);
                    break;
                case "disabled":
                    a.canDisable && (a.el.disabled = !0), n.addClass(t, a.classNames.disabled), n.removeClass(t, a.classNames.active)
            }
            "live" !== a.status && (a.status = e), a.callActions("afterRenderStatus", arguments)
        }
    }), e.controls = [], e.StyleData = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.x = 0, this.y = 0, this.top = 0, this.right = 0, this.bottom = 0, this.left = 0, this.width = 0, this.height = 0, this.marginRight = 0, this.marginBottom = 0, this.opacity = 0, this.scale = new e.TransformData, this.translateX = new e.TransformData, this.translateY = new e.TransformData, this.translateZ = new e.TransformData, this.rotateX = new e.TransformData, this.rotateY = new e.TransformData, this.rotateZ = new e.TransformData, this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.StyleData), e.StyleData.prototype = Object.create(e.Base.prototype), e.StyleData.prototype.constructor = e.StyleData, e.TransformData = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.value = 0, this.unit = "", this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.TransformData), e.TransformData.prototype = Object.create(e.Base.prototype), e.TransformData.prototype.constructor = e.TransformData, e.TransformDefaults = function() {
        e.StyleData.apply(this), this.callActions("beforeConstruct"), this.scale.value = .01, this.scale.unit = "", this.translateX.value = 20, this.translateX.unit = "px", this.translateY.value = 20, this.translateY.unit = "px", this.translateZ.value = 20, this.translateZ.unit = "px", this.rotateX.value = 90, this.rotateX.unit = "deg", this.rotateY.value = 90, this.rotateY.unit = "deg", this.rotateX.value = 90, this.rotateX.unit = "deg", this.rotateZ.value = 180, this.rotateZ.unit = "deg", this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.TransformDefaults), e.TransformDefaults.prototype = Object.create(e.StyleData.prototype), e.TransformDefaults.prototype.constructor = e.TransformDefaults, e.transformDefaults = new e.TransformDefaults, e.EventDetail = function() {
        this.state = null, this.futureState = null, this.instance = null, this.originalEvent = null
    }, e.Events = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.mixStart = null, this.mixBusy = null, this.mixEnd = null, this.mixFail = null, this.mixClick = null, this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.Events), e.Events.prototype = Object.create(e.Base.prototype), e.Events.prototype.constructor = e.Events, e.Events.prototype.fire = function(t, a, i, o) {
        var r = this,
            s = null,
            l = new e.EventDetail;
        if (r.callActions("beforeFire", arguments), "undefined" == typeof r[t]) throw new Error('Event type "' + t + '" not found.');
        l.state = new e.State, n.extend(l.state, i.state), i.futureState && (l.futureState = new e.State, n.extend(l.futureState, i.futureState)), l.instance = i.instance, i.originalEvent && (l.originalEvent = i.originalEvent), s = n.getCustomEvent(t, l, o), r.callFilters("eventFire", s, arguments), a.dispatchEvent(s)
    }, e.events = new e.Events, e.QueueItem = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.args = [], this.instruction = null, this.triggerElement = null, this.deferred = null, this.isToggling = !1, this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.QueueItem), e.QueueItem.prototype = Object.create(e.Base.prototype), e.QueueItem.prototype.constructor = e.QueueItem, e.Mixer = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.config = new e.Config, this.id = "", this.isBusy = !1, this.isToggling = !1, this.incPadding = !0, this.controls = [], this.targets = [], this.origOrder = [], this.cache = {}, this.toggleArray = [], this.targetsMoved = 0, this.targetsImmovable = 0, this.targetsBound = 0, this.targetsDone = 0, this.staggerDuration = 0, this.effectsIn = null, this.effectsOut = null, this.transformIn = [], this.transformOut = [], this.queue = [], this.state = null, this.lastOperation = null,
            this.lastClicked = null, this.userCallback = null, this.userDeferred = null, this.dom = new e.MixerDom, this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.Mixer), e.Mixer.prototype = Object.create(e.Base.prototype), n.extend(e.Mixer.prototype, {
        constructor: e.Mixer,
        attach: function(a, i, o, r) {
            var s = this,
                l = null,
                c = -1;
            for (s.callActions("beforeAttach", arguments), s.id = o, r && n.extend(s.config, r, !0, !0), s.sanitizeConfig(), s.cacheDom(a, i), s.config.layout.containerClassName && n.addClass(s.dom.container, s.config.layout.containerClassName), e.features.has.transitions || (s.config.animation.enable = !1), "undefined" == typeof t.console && (s.config.debug.showWarnings = !1), s.config.data.uidKey && (s.config.controls.enable = !1), s.indexTargets(), s.state = s.getInitialState(), c = 0; l = s.lastOperation.toHide[c]; c++) l.hide();
            s.config.controls.enable && (s.initControls(), s.buildToggleArray(null, s.state), s.updateControls({
                filter: s.state.activeFilter,
                sort: s.state.activeSort
            })), s.parseEffects(), s.callActions("afterAttach", arguments)
        },
        sanitizeConfig: function() {
            var t = this;
            t.callActions("beforeSanitizeConfig", arguments), t.config.controls.scope = t.config.controls.scope.toLowerCase().trim(), t.config.controls.toggleLogic = t.config.controls.toggleLogic.toLowerCase().trim(), t.config.controls.toggleDefault = t.config.controls.toggleDefault.toLowerCase().trim(), t.config.animation.effects = t.config.animation.effects.trim(), t.callActions("afterSanitizeConfig", arguments)
        },
        getInitialState: function() {
            var t = this,
                n = new e.State,
                a = new e.Operation;
            if (t.callActions("beforeGetInitialState", arguments), n.activeContainerClassName = t.config.layout.containerClassName, t.config.load.dataset) {
                if (!t.config.data.uidKey || "string" != typeof t.config.data.uidKey) throw new TypeError(e.messages.errorConfigDataUidKeyNotSet());
                a.startDataset = a.newDataset = n.activeDataset = t.config.load.dataset.slice(), a.startContainerClassName = a.newContainerClassName = n.activeContainerClassName, a.show = t.targets.slice(), n = t.callFilters("stateGetInitialState", n, arguments)
            } else n.activeFilter = t.parseFilterArgs([t.config.load.filter]).command, n.activeSort = t.parseSortArgs([t.config.load.sort]).command, n.totalTargets = t.targets.length, n = t.callFilters("stateGetInitialState", n, arguments), n.activeSort.collection || n.activeSort.attribute || "random" === n.activeSort.order || "desc" === n.activeSort.order ? (a.newSort = n.activeSort, t.sortOperation(a), t.printSort(!1, a), t.targets = a.newOrder) : a.startOrder = a.newOrder = t.targets, a.startFilter = a.newFilter = n.activeFilter, a.startSort = a.newSort = n.activeSort, a.startContainerClassName = a.newContainerClassName = n.activeContainerClassName, "all" === a.newFilter.selector ? a.newFilter.selector = t.config.selectors.target : "none" === a.newFilter.selector && (a.newFilter.selector = "");
            return a = t.callFilters("operationGetInitialState", a, [n]), t.lastOperation = a, a.newFilter && t.filterOperation(a), n = t.buildState(a)
        },
        cacheDom: function(t, e) {
            var n = this;
            n.callActions("beforeCacheDom", arguments), n.dom.document = e, n.dom.body = n.dom.document.querySelector("body"), n.dom.container = t, n.dom.parent = t, n.callActions("afterCacheDom", arguments)
        },
        indexTargets: function() {
            var t = this,
                a = null,
                i = null,
                o = null,
                r = -1;
            if (t.callActions("beforeIndexTargets", arguments), t.dom.targets = t.config.layout.allowNestedTargets ? t.dom.container.querySelectorAll(t.config.selectors.target) : n.children(t.dom.container, t.config.selectors.target, t.dom.document), t.dom.targets = n.arrayFromList(t.dom.targets), t.targets = [], (o = t.config.load.dataset) && o.length !== t.dom.targets.length) throw new Error(e.messages.errorDatasetPrerenderedMismatch());
            if (t.dom.targets.length) {
                for (r = 0; i = t.dom.targets[r]; r++) a = new e.Target, a.init(i, t, o ? o[r] : void 0), a.isInDom = !0, t.targets.push(a);
                t.dom.parent = t.dom.targets[0].parentElement === t.dom.container ? t.dom.container : t.dom.targets[0].parentElement
            }
            t.origOrder = t.targets, t.callActions("afterIndexTargets", arguments)
        },
        initControls: function() {
            var t = this,
                n = "",
                a = null,
                i = null,
                o = null,
                r = null,
                s = null,
                l = -1,
                c = -1;
            switch (t.callActions("beforeInitControls", arguments), t.config.controls.scope) {
                case "local":
                    o = t.dom.container;
                    break;
                case "global":
                    o = t.dom.document;
                    break;
                default:
                    throw new Error(e.messages.errorConfigInvalidControlsScope())
            }
            for (l = 0; n = e.controlDefinitions[l]; l++)
                if (t.config.controls.live || n.live) {
                    if (n.parent) {
                        if (r = t.dom[n.parent], !r || r.length < 0) continue;
                        "number" != typeof r.length && (r = [r])
                    } else r = [o];
                    for (c = 0; i = r[c]; c++) s = t.getControl(i, n.type, n.selector), t.controls.push(s)
                } else
                    for (a = o.querySelectorAll(t.config.selectors.control + n.selector), c = 0; i = a[c]; c++) s = t.getControl(i, n.type, ""), s && t.controls.push(s);
            t.callActions("afterInitControls", arguments)
        },
        getControl: function(t, a, i) {
            var o = this,
                r = null,
                s = -1;
            if (o.callActions("beforeGetControl", arguments), !i)
                for (s = 0; r = e.controls[s]; s++) {
                    if (r.el === t && r.isBound(o)) return o.callFilters("controlGetControl", null, arguments);
                    if (r.el === t && r.type === a && r.selector === i) return r.addBinding(o), o.callFilters("controlGetControl", r, arguments)
                }
            return r = new e.Control, r.init(t, a, i), r.classNames.base = n.getClassname(o.config.classNames, a), r.classNames.active = n.getClassname(o.config.classNames, a, o.config.classNames.modifierActive), r.classNames.disabled = n.getClassname(o.config.classNames, a, o.config.classNames.modifierDisabled), r.addBinding(o), o.callFilters("controlGetControl", r, arguments)
        },
        getToggleSelector: function() {
            var t = this,
                e = "or" === t.config.controls.toggleLogic ? ", " : "",
                a = "";
            return t.callActions("beforeGetToggleSelector", arguments), t.toggleArray = n.clean(t.toggleArray), a = t.toggleArray.join(e), "" === a && (a = t.config.controls.toggleDefault), t.callFilters("selectorGetToggleSelector", a, arguments)
        },
        buildToggleArray: function(t, e) {
            var a = this,
                i = "";
            if (a.callActions("beforeBuildToggleArray", arguments), t && t.filter) i = t.filter.selector.replace(/\s/g, "");
            else {
                if (!e) return;
                i = e.activeFilter.selector.replace(/\s/g, "")
            }
            i !== a.config.selectors.target && "all" !== i || (i = ""), "or" === a.config.controls.toggleLogic ? a.toggleArray = i.split(",") : a.toggleArray = a.splitCompoundSelector(i), a.toggleArray = n.clean(a.toggleArray), a.callActions("afterBuildToggleArray", arguments)
        },
        splitCompoundSelector: function(t) {
            var e = t.split(/([\.\[])/g),
                n = [],
                a = "",
                i = -1;
            for ("" === e[0] && e.shift(), i = 0; i < e.length; i++) i % 2 === 0 && (a = ""), a += e[i], i % 2 !== 0 && n.push(a);
            return n
        },
        updateControls: function(t) {
            var a = this,
                i = null,
                o = new e.CommandMultimix,
                r = -1;
            for (a.callActions("beforeUpdateControls", arguments), t.filter ? o.filter = t.filter.selector : o.filter = a.state.activeFilter.selector, t.sort ? o.sort = a.buildSortString(t.sort) : o.sort = a.buildSortString(a.state.activeSort), o.filter === a.config.selectors.target && (o.filter = "all"), "" === o.filter && (o.filter = "none"), n.freeze(o), r = 0; i = a.controls[r]; r++) i.update(o, a.toggleArray);
            a.callActions("afterUpdateControls", arguments)
        },
        buildSortString: function(t) {
            var e = this,
                n = "";
            return n += t.sortString, t.next && (n += " " + e.buildSortString(t.next)), n
        },
        insertTargets: function(t, a) {
            var i = this,
                o = null,
                r = -1,
                s = null,
                l = null,
                c = null,
                u = -1;
            if (i.callActions("beforeInsertTargets", arguments), "undefined" == typeof t.index && (t.index = 0), o = i.getNextSibling(t.index, t.sibling, t.position), s = i.dom.document.createDocumentFragment(), r = o ? n.index(o, i.config.selectors.target) : i.targets.length, t.collection) {
                for (u = 0; c = t.collection[u]; u++) {
                    if (i.dom.targets.indexOf(c) > -1) throw new Error(e.messages.errorInsertPreexistingElement());
                    c.style.display = "none", s.appendChild(c), s.appendChild(i.dom.document.createTextNode(" ")), n.isElement(c, i.dom.document) && c.matches(i.config.selectors.target) && (l = new e.Target, l.init(c, i), l.isInDom = !0, i.targets.splice(r, 0, l), r++)
                }
                i.dom.parent.insertBefore(s, o)
            }
            a.startOrder = i.origOrder = i.targets, i.callActions("afterInsertTargets", arguments)
        },
        getNextSibling: function(t, e, n) {
            var a = this,
                i = null;
            return t = Math.max(t, 0), e && "before" === n ? i = e : e && "after" === n ? i = e.nextElementSibling || null : a.targets.length > 0 && "undefined" != typeof t ? i = t < a.targets.length || !a.targets.length ? a.targets[t].dom.el : a.targets[a.targets.length - 1].dom.el.nextElementSibling : 0 === a.targets.length && a.dom.parent.children.length > 0 && (a.config.layout.siblingAfter ? i = a.config.layout.siblingAfter : a.config.layout.siblingBefore ? i = a.config.layout.siblingBefore.nextElementSibling : a.dom.parent.children[0]), a.callFilters("elementGetNextSibling", i, arguments)
        },
        filterOperation: function(t) {
            var e = this,
                n = !1,
                a = -1,
                i = "",
                o = null,
                r = -1;
            for (e.callActions("beforeFilterOperation", arguments), i = t.newFilter.action, r = 0; o = t.newOrder[r]; r++) n = t.newFilter.collection ? t.newFilter.collection.indexOf(o.dom.el) > -1 : "" !== t.newFilter.selector && o.dom.el.matches(t.newFilter.selector), e.evaluateHideShow(n, o, i, t);
            if (t.toRemove.length)
                for (r = 0; o = t.show[r]; r++) t.toRemove.indexOf(o) > -1 && (t.show.splice(r, 1), (a = t.toShow.indexOf(o)) > -1 && t.toShow.splice(a, 1), t.toHide.push(o), t.hide.push(o), r--);
            t.matching = t.show.slice(), 0 === t.show.length && "" !== t.newFilter.selector && 0 !== e.targets.length && (t.hasFailed = !0), e.callActions("afterFilterOperation", arguments)
        },
        evaluateHideShow: function(t, e, n, a) {
            var i = this,
                o = !1,
                r = Array.prototype.slice.call(arguments, 1);
            o = i.callFilters("testResultEvaluateHideShow", t, r), i.callActions("beforeEvaluateHideShow", arguments), o === !0 && "show" === n || o === !1 && "hide" === n ? (a.show.push(e), !e.isShown && a.toShow.push(e)) : (a.hide.push(e), e.isShown && a.toHide.push(e)), i.callActions("afterEvaluateHideShow", arguments)
        },
        sortOperation: function(t) {
            var a = this,
                i = [],
                o = null,
                r = null,
                s = -1;
            if (a.callActions("beforeSortOperation", arguments), t.startOrder = a.targets, t.newSort.collection) {
                for (i = [], s = 0; r = t.newSort.collection[s]; s++) {
                    if (a.dom.targets.indexOf(r) < 0) throw new Error(e.messages.errorSortNonExistentElement());
                    o = new e.Target, o.init(r, a), o.isInDom = !0, i.push(o)
                }
                t.newOrder = i
            } else "random" === t.newSort.order ? t.newOrder = n.arrayShuffle(t.startOrder) : "" === t.newSort.attribute ? (t.newOrder = a.origOrder.slice(), "desc" === t.newSort.order && t.newOrder.reverse()) : (t.newOrder = t.startOrder.slice(), t.newOrder.sort(function(e, n) {
                return a.compare(e, n, t.newSort)
            }));
            n.isEqualArray(t.newOrder, t.startOrder) && (t.willSort = !1), a.callActions("afterSortOperation", arguments)
        },
        compare: function(t, e, n) {
            var a = this,
                i = n.order,
                o = a.getAttributeValue(t, n.attribute),
                r = a.getAttributeValue(e, n.attribute);
            return isNaN(1 * o) || isNaN(1 * r) ? (o = o.toLowerCase(), r = r.toLowerCase()) : (o = 1 * o, r = 1 * r), o < r ? "asc" === i ? -1 : 1 : o > r ? "asc" === i ? 1 : -1 : o === r && n.next ? a.compare(t, e, n.next) : 0
        },
        getAttributeValue: function(t, n) {
            var a = this,
                i = "";
            return i = t.dom.el.getAttribute("data-" + n), null === i && a.config.debug.showWarnings && console.warn(e.messages.warningInconsistentSortingAttributes({
                attribute: "data-" + n
            })), a.callFilters("valueGetAttributeValue", i || 0, arguments)
        },
        printSort: function(e, a) {
            var i = this,
                o = e ? a.newOrder : a.startOrder,
                r = e ? a.startOrder : a.newOrder,
                s = o.length ? o[o.length - 1].dom.el.nextElementSibling : null,
                l = t.document.createDocumentFragment(),
                c = null,
                u = null,
                f = null,
                h = -1;
            for (i.callActions("beforePrintSort", arguments), h = 0; u = o[h]; h++) f = u.dom.el, "absolute" !== f.style.position && (n.removeWhitespace(f.previousSibling), f.parentElement.removeChild(f));
            for (c = s ? s.previousSibling : i.dom.parent.lastChild, c && "#text" === c.nodeName && n.removeWhitespace(c), h = 0; u = r[h]; h++) f = u.dom.el, n.isElement(l.lastChild) && l.appendChild(t.document.createTextNode(" ")), l.appendChild(f);
            i.dom.parent.firstChild && i.dom.parent.firstChild !== s && l.insertBefore(t.document.createTextNode(" "), l.childNodes[0]), s ? (l.appendChild(t.document.createTextNode(" ")), i.dom.parent.insertBefore(l, s)) : i.dom.parent.appendChild(l), i.callActions("afterPrintSort", arguments)
        },
        parseSortString: function(t, a) {
            var i = this,
                o = t.split(" "),
                r = a,
                s = [],
                l = -1;
            for (l = 0; l < o.length; l++) {
                switch (s = o[l].split(":"), r.sortString = o[l], r.attribute = n.dashCase(s[0]), r.order = s[1] || "asc", r.attribute) {
                    case "default":
                        r.attribute = "";
                        break;
                    case "random":
                        r.attribute = "", r.order = "random"
                }
                if (!r.attribute || "random" === r.order) break;
                l < o.length - 1 && (r.next = new e.CommandSort, n.freeze(r), r = r.next)
            }
            return i.callFilters("commandsParseSort", a, arguments)
        },
        parseEffects: function() {
            var t = this,
                n = "",
                a = t.config.animation.effectsIn || t.config.animation.effects,
                i = t.config.animation.effectsOut || t.config.animation.effects;
            t.callActions("beforeParseEffects", arguments), t.effectsIn = new e.StyleData, t.effectsOut = new e.StyleData, t.transformIn = [], t.transformOut = [], t.effectsIn.opacity = t.effectsOut.opacity = 1, t.parseEffect("fade", a, t.effectsIn, t.transformIn), t.parseEffect("fade", i, t.effectsOut, t.transformOut, !0);
            for (n in e.transformDefaults) e.transformDefaults[n] instanceof e.TransformData && (t.parseEffect(n, a, t.effectsIn, t.transformIn), t.parseEffect(n, i, t.effectsOut, t.transformOut, !0));
            t.parseEffect("stagger", a, t.effectsIn, t.transformIn), t.parseEffect("stagger", i, t.effectsOut, t.transformOut, !0), t.callActions("afterParseEffects", arguments)
        },
        parseEffect: function(t, n, a, i, o) {
            var r = this,
                s = /\(([^)]+)\)/,
                l = -1,
                c = "",
                u = [],
                f = "",
                h = ["%", "px", "em", "rem", "vh", "vw", "deg"],
                d = "",
                m = -1;
            if (r.callActions("beforeParseEffect", arguments), "string" != typeof n) throw new TypeError(e.messages.errorConfigInvalidAnimationEffects());
            if (n.indexOf(t) < 0) return void("stagger" === t && (r.staggerDuration = 0));
            switch (l = n.indexOf(t + "("), l > -1 && (c = n.substring(l), u = s.exec(c), f = u[1]), t) {
                case "fade":
                    a.opacity = f ? parseFloat(f) : 0;
                    break;
                case "stagger":
                    r.staggerDuration = f ? parseFloat(f) : 100;
                    break;
                default:
                    if (o && r.config.animation.reverseOut && "scale" !== t ? a[t].value = (f ? parseFloat(f) : e.transformDefaults[t].value) * -1 : a[t].value = f ? parseFloat(f) : e.transformDefaults[t].value, f) {
                        for (m = 0; d = h[m]; m++)
                            if (f.indexOf(d) > -1) {
                                a[t].unit = d;
                                break
                            }
                    } else a[t].unit = e.transformDefaults[t].unit;
                    i.push(t + "(" + a[t].value + a[t].unit + ")")
            }
            r.callActions("afterParseEffect", arguments)
        },
        buildState: function(t) {
            var n = this,
                a = new e.State,
                i = null,
                o = -1;
            for (n.callActions("beforeBuildState", arguments), o = 0; i = n.targets[o]; o++)(!t.toRemove.length || t.toRemove.indexOf(i) < 0) && a.targets.push(i.dom.el);
            for (o = 0; i = t.matching[o]; o++) a.matching.push(i.dom.el);
            for (o = 0; i = t.show[o]; o++) a.show.push(i.dom.el);
            for (o = 0; i = t.hide[o]; o++)(!t.toRemove.length || t.toRemove.indexOf(i) < 0) && a.hide.push(i.dom.el);
            return a.id = n.id, a.container = n.dom.container, a.activeFilter = t.newFilter, a.activeSort = t.newSort, a.activeDataset = t.newDataset, a.activeContainerClassName = t.newContainerClassName, a.hasFailed = t.hasFailed, a.totalTargets = n.targets.length, a.totalShow = t.show.length, a.totalHide = t.hide.length, a.totalMatching = t.matching.length, a.triggerElement = t.triggerElement, n.callFilters("stateBuildState", a, arguments)
        },
        goMix: function(a, i) {
            var o = this,
                r = null;
            return o.callActions("beforeGoMix", arguments), o.config.animation.duration && o.config.animation.effects && n.isVisible(o.dom.container) || (a = !1), i.toShow.length || i.toHide.length || i.willSort || i.willChangeLayout || (a = !1), i.startState.show.length || i.show.length || (a = !1), e.events.fire("mixStart", o.dom.container, {
                state: i.startState,
                futureState: i.newState,
                instance: o
            }, o.dom.document), "function" == typeof o.config.callbacks.onMixStart && o.config.callbacks.onMixStart.call(o.dom.container, i.startState, i.newState, o), n.removeClass(o.dom.container, n.getClassname(o.config.classNames, "container", o.config.classNames.modifierFailed)), r = o.userDeferred ? o.userDeferred : o.userDeferred = n.defer(e.libraries), o.isBusy = !0, a && e.features.has.transitions ? (t.pageYOffset !== i.docState.scrollTop && t.scrollTo(i.docState.scrollLeft, i.docState.scrollTop), o.config.animation.applyPerspective && (o.dom.parent.style[e.features.perspectiveProp] = o.config.animation.perspectiveDistance, o.dom.parent.style[e.features.perspectiveOriginProp] = o.config.animation.perspectiveOrigin), o.config.animation.animateResizeContainer && i.startHeight !== i.newHeight && i.viewportDeltaY !== i.startHeight - i.newHeight && (o.dom.parent.style.height = i.startHeight + "px"), o.config.animation.animateResizeContainer && i.startWidth !== i.newWidth && i.viewportDeltaX !== i.startWidth - i.newWidth && (o.dom.parent.style.width = i.startWidth + "px"), i.startHeight === i.newHeight && (o.dom.parent.style.height = i.startHeight + "px"), i.startWidth === i.newWidth && (o.dom.parent.style.width = i.startWidth + "px"), i.startHeight === i.newHeight && i.startWidth === i.newWidth && (o.dom.parent.style.overflow = "hidden"), requestAnimationFrame(function() {
                o.moveTargets(i)
            }), o.callFilters("promiseGoMix", r.promise, arguments)) : (o.config.debug.fauxAsync ? setTimeout(function() {
                o.cleanUp(i)
            }, o.config.animation.duration) : o.cleanUp(i), o.callFilters("promiseGoMix", r.promise, arguments))
        },
        getStartMixData: function(n) {
            var a = this,
                i = t.getComputedStyle(a.dom.parent),
                o = a.dom.parent.getBoundingClientRect(),
                r = null,
                s = {},
                l = -1,
                c = i[e.features.boxSizingProp];
            for (a.incPadding = "border-box" === c, a.callActions("beforeGetStartMixData", arguments), l = 0; r = n.show[l]; l++) s = r.getPosData(), n.showPosData[l] = {
                startPosData: s
            };
            for (l = 0; r = n.toHide[l]; l++) s = r.getPosData(), n.toHidePosData[l] = {
                startPosData: s
            };
            n.startX = o.left, n.startY = o.top, n.startHeight = a.incPadding ? o.height : o.height - parseFloat(i.paddingTop) - parseFloat(i.paddingBottom) - parseFloat(i.borderTop) - parseFloat(i.borderBottom), n.startWidth = a.incPadding ? o.width : o.width - parseFloat(i.paddingLeft) - parseFloat(i.paddingRight) - parseFloat(i.borderLeft) - parseFloat(i.borderRight), a.callActions("afterGetStartMixData", arguments)
        },
        setInter: function(t) {
            var e = this,
                a = null,
                i = -1;
            for (e.callActions("beforeSetInter", arguments), e.config.animation.clampHeight && (e.dom.parent.style.height = t.startHeight + "px", e.dom.parent.style.overflow = "hidden"), e.config.animation.clampWidth && (e.dom.parent.style.width = t.startWidth + "px", e.dom.parent.style.overflow = "hidden"), i = 0; a = t.toShow[i]; i++) a.show();
            t.willChangeLayout && (n.removeClass(e.dom.container, t.startContainerClassName), n.addClass(e.dom.container, t.newContainerClassName)), e.callActions("afterSetInter", arguments)
        },
        getInterMixData: function(t) {
            var e = this,
                n = null,
                a = -1;
            for (e.callActions("beforeGetInterMixData", arguments), a = 0; n = t.show[a]; a++) t.showPosData[a].interPosData = n.getPosData();
            for (a = 0; n = t.toHide[a]; a++) t.toHidePosData[a].interPosData = n.getPosData();
            e.callActions("afterGetInterMixData", arguments)
        },
        setFinal: function(t) {
            var e = this,
                n = null,
                a = -1;
            for (e.callActions("beforeSetFinal", arguments), t.willSort && e.printSort(!1, t), a = 0; n = t.toHide[a]; a++) n.hide();
            e.callActions("afterSetFinal", arguments)
        },
        getFinalMixData: function(e) {
            var a = this,
                i = null,
                o = null,
                r = null,
                s = -1;
            for (a.callActions("beforeGetFinalMixData", arguments), s = 0; r = e.show[s]; s++) e.showPosData[s].finalPosData = r.getPosData();
            for (s = 0; r = e.toHide[s]; s++) e.toHidePosData[s].finalPosData = r.getPosData();
            for ((a.config.animation.clampHeight || a.config.animation.clampWidth) && (a.dom.parent.style.height = a.dom.parent.style.width = a.dom.parent.style.overflow = ""), a.incPadding || (i = t.getComputedStyle(a.dom.parent)), o = a.dom.parent.getBoundingClientRect(), e.newX = o.left, e.newY = o.top, e.newHeight = a.incPadding ? o.height : o.height - parseFloat(i.paddingTop) - parseFloat(i.paddingBottom) - parseFloat(i.borderTop) - parseFloat(i.borderBottom), e.newWidth = a.incPadding ? o.width : o.width - parseFloat(i.paddingLeft) - parseFloat(i.paddingRight) - parseFloat(i.borderLeft) - parseFloat(i.borderRight), e.viewportDeltaX = e.docState.viewportWidth - this.dom.document.documentElement.clientWidth, e.viewportDeltaY = e.docState.viewportHeight - this.dom.document.documentElement.clientHeight, e.willSort && a.printSort(!0, e), s = 0; r = e.toShow[s]; s++) r.hide();
            for (s = 0; r = e.toHide[s]; s++) r.show();
            e.willChangeLayout && (n.removeClass(a.dom.container, e.newContainerClassName), n.addClass(a.dom.container, a.config.layout.containerClassName)), a.callActions("afterGetFinalMixData", arguments)
        },
        getTweenData: function(t) {
            var n = this,
                a = null,
                i = null,
                o = Object.getOwnPropertyNames(n.effectsIn),
                r = "",
                s = null,
                l = -1,
                c = -1,
                u = -1,
                f = -1;
            for (n.callActions("beforeGetTweenData", arguments), u = 0; a = t.show[u]; u++)
                for (i = t.showPosData[u], i.posIn = new e.StyleData, i.posOut = new e.StyleData, i.tweenData = new e.StyleData, a.isShown ? (i.posIn.x = i.startPosData.x - i.interPosData.x, i.posIn.y = i.startPosData.y - i.interPosData.y) : i.posIn.x = i.posIn.y = 0, i.posOut.x = i.finalPosData.x - i.interPosData.x, i.posOut.y = i.finalPosData.y - i.interPosData.y, i.posIn.opacity = a.isShown ? 1 : n.effectsIn.opacity, i.posOut.opacity = 1, i.tweenData.opacity = i.posOut.opacity - i.posIn.opacity, a.isShown || n.config.animation.nudge || (i.posIn.x = i.posOut.x, i.posIn.y = i.posOut.y), i.tweenData.x = i.posOut.x - i.posIn.x, i.tweenData.y = i.posOut.y - i.posIn.y, n.config.animation.animateResizeTargets && (i.posIn.width = i.startPosData.width, i.posIn.height = i.startPosData.height, l = (i.startPosData.width || i.finalPosData.width) - i.interPosData.width, i.posIn.marginRight = i.startPosData.marginRight - l, c = (i.startPosData.height || i.finalPosData.height) - i.interPosData.height, i.posIn.marginBottom = i.startPosData.marginBottom - c, i.posOut.width = i.finalPosData.width, i.posOut.height = i.finalPosData.height, l = (i.finalPosData.width || i.startPosData.width) - i.interPosData.width, i.posOut.marginRight = i.finalPosData.marginRight - l, c = (i.finalPosData.height || i.startPosData.height) - i.interPosData.height, i.posOut.marginBottom = i.finalPosData.marginBottom - c, i.tweenData.width = i.posOut.width - i.posIn.width, i.tweenData.height = i.posOut.height - i.posIn.height, i.tweenData.marginRight = i.posOut.marginRight - i.posIn.marginRight, i.tweenData.marginBottom = i.posOut.marginBottom - i.posIn.marginBottom), f = 0; r = o[f]; f++) s = n.effectsIn[r], s instanceof e.TransformData && s.value && (i.posIn[r].value = s.value, i.posOut[r].value = 0, i.tweenData[r].value = i.posOut[r].value - i.posIn[r].value, i.posIn[r].unit = i.posOut[r].unit = i.tweenData[r].unit = s.unit);
            for (u = 0; a = t.toHide[u]; u++)
                for (i = t.toHidePosData[u], i.posIn = new e.StyleData, i.posOut = new e.StyleData, i.tweenData = new e.StyleData, i.posIn.x = a.isShown ? i.startPosData.x - i.interPosData.x : 0, i.posIn.y = a.isShown ? i.startPosData.y - i.interPosData.y : 0, i.posOut.x = n.config.animation.nudge ? 0 : i.posIn.x, i.posOut.y = n.config.animation.nudge ? 0 : i.posIn.y, i.tweenData.x = i.posOut.x - i.posIn.x, i.tweenData.y = i.posOut.y - i.posIn.y, n.config.animation.animateResizeTargets && (i.posIn.width = i.startPosData.width, i.posIn.height = i.startPosData.height, l = i.startPosData.width - i.interPosData.width, i.posIn.marginRight = i.startPosData.marginRight - l, c = i.startPosData.height - i.interPosData.height, i.posIn.marginBottom = i.startPosData.marginBottom - c), i.posIn.opacity = 1, i.posOut.opacity = n.effectsOut.opacity, i.tweenData.opacity = i.posOut.opacity - i.posIn.opacity, f = 0; r = o[f]; f++) s = n.effectsOut[r], s instanceof e.TransformData && s.value && (i.posIn[r].value = 0, i.posOut[r].value = s.value, i.tweenData[r].value = i.posOut[r].value - i.posIn[r].value, i.posIn[r].unit = i.posOut[r].unit = i.tweenData[r].unit = s.unit);
            n.callActions("afterGetTweenData", arguments)
        },
        moveTargets: function(t) {
            var a = this,
                i = null,
                o = null,
                r = null,
                s = "",
                l = !1,
                c = -1,
                u = -1,
                f = a.checkProgress.bind(a);
            for (a.callActions("beforeMoveTargets", arguments), u = 0; i = t.show[u]; u++) o = new e.IMoveData, r = t.showPosData[u], s = i.isShown ? "none" : "show", l = a.willTransition(s, t.hasEffect, r.posIn, r.posOut), l && c++, i.show(), o.posIn = r.posIn, o.posOut = r.posOut, o.statusChange = s, o.staggerIndex = c, o.operation = t, o.callback = l ? f : null, i.move(o);
            for (u = 0; i = t.toHide[u]; u++) r = t.toHidePosData[u], o = new e.IMoveData, s = "hide", l = a.willTransition(s, r.posIn, r.posOut), o.posIn = r.posIn, o.posOut = r.posOut, o.statusChange = s, o.staggerIndex = u, o.operation = t, o.callback = l ? f : null, i.move(o);
            a.config.animation.animateResizeContainer && (a.dom.parent.style[e.features.transitionProp] = "height " + a.config.animation.duration + "ms ease, width " + a.config.animation.duration + "ms ease ", requestAnimationFrame(function() {
                t.startHeight !== t.newHeight && t.viewportDeltaY !== t.startHeight - t.newHeight && (a.dom.parent.style.height = t.newHeight + "px"), t.startWidth !== t.newWidth && t.viewportDeltaX !== t.startWidth - t.newWidth && (a.dom.parent.style.width = t.newWidth + "px")
            })), t.willChangeLayout && (n.removeClass(a.dom.container, a.config.layout.ContainerClassName), n.addClass(a.dom.container, t.newContainerClassName)), a.callActions("afterMoveTargets", arguments)
        },
        hasEffect: function() {
            var t = this,
                e = ["scale", "translateX", "translateY", "translateZ", "rotateX", "rotateY", "rotateZ"],
                n = "",
                a = null,
                i = !1,
                o = -1,
                r = -1;
            if (1 !== t.effectsIn.opacity) return t.callFilters("resultHasEffect", !0, arguments);
            for (r = 0; n = e[r]; r++)
                if (a = t.effectsIn[n], o = "undefined" !== a.value ? a.value : a, 0 !== o) {
                    i = !0;
                    break
                }
            return t.callFilters("resultHasEffect", i, arguments)
        },
        willTransition: function(t, e, a, i) {
            var o = this,
                r = !1;
            return r = !!n.isVisible(o.dom.container) && (!!("none" !== t && e || a.x !== i.x || a.y !== i.y) || !!o.config.animation.animateResizeTargets && (a.width !== i.width || a.height !== i.height || a.marginRight !== i.marginRight || a.marginTop !== i.marginTop)), o.callFilters("resultWillTransition", r, arguments)
        },
        checkProgress: function(t) {
            var e = this;
            e.targetsDone++, e.targetsBound === e.targetsDone && e.cleanUp(t)
        },
        cleanUp: function(t) {
            var a = this,
                i = null,
                o = null,
                r = null,
                s = null,
                l = -1;
            for (a.callActions("beforeCleanUp", arguments), a.targetsMoved = a.targetsImmovable = a.targetsBound = a.targetsDone = 0, l = 0; i = t.show[l]; l++) i.cleanUp(), i.show();
            for (l = 0; i = t.toHide[l]; l++) i.cleanUp(), i.hide();
            if (t.willSort && a.printSort(!1, t), a.dom.parent.style[e.features.transitionProp] = a.dom.parent.style.height = a.dom.parent.style.width = a.dom.parent.style.overflow = a.dom.parent.style[e.features.perspectiveProp] = a.dom.parent.style[e.features.perspectiveOriginProp] = "", t.willChangeLayout && (n.removeClass(a.dom.container, t.startContainerClassName), n.addClass(a.dom.container, t.newContainerClassName)), t.toRemove.length) {
                for (l = 0; i = a.targets[l]; l++) t.toRemove.indexOf(i) > -1 && ((o = i.dom.el.previousSibling) && "#text" === o.nodeName && (r = i.dom.el.nextSibling) && "#text" === r.nodeName && n.removeWhitespace(o), t.willSort || a.dom.parent.removeChild(i.dom.el), a.targets.splice(l, 1), i.isInDom = !1, l--);
                a.origOrder = a.targets
            }
            t.willSort && (a.targets = t.newOrder), a.state = t.newState, a.lastOperation = t, a.dom.targets = a.state.targets, e.events.fire("mixEnd", a.dom.container, {
                state: a.state,
                instance: a
            }, a.dom.document), "function" == typeof a.config.callbacks.onMixEnd && a.config.callbacks.onMixEnd.call(a.dom.container, a.state, a), t.hasFailed && (e.events.fire("mixFail", a.dom.container, {
                state: a.state,
                instance: a
            }, a.dom.document), "function" == typeof a.config.callbacks.onMixFail && a.config.callbacks.onMixFail.call(a.dom.container, a.state, a), n.addClass(a.dom.container, n.getClassname(a.config.classNames, "container", a.config.classNames.modifierFailed))), "function" == typeof a.userCallback && a.userCallback.call(a.dom.container, a.state, a), "function" == typeof a.userDeferred.resolve && a.userDeferred.resolve(a.state), a.userCallback = null, a.userDeferred = null, a.lastClicked = null, a.isToggling = !1, a.isBusy = !1, a.queue.length && (a.callActions("beforeReadQueueCleanUp", arguments), s = a.queue.shift(), a.userDeferred = s.deferred, a.isToggling = s.isToggling, a.lastClicked = s.triggerElement, s.instruction.command instanceof e.CommandMultimix ? a.multimix.apply(a, s.args) : a.dataset.apply(a, s.args)), a.callActions("afterCleanUp", arguments)
        },
        parseMultimixArgs: function(t) {
            var a = this,
                i = new e.UserInstruction,
                o = null,
                r = -1;
            for (i.animate = a.config.animation.enable, i.command = new e.CommandMultimix, r = 0; r < t.length; r++) o = t[r], null !== o && ("object" == typeof o ? n.extend(i.command, o) : "boolean" == typeof o ? i.animate = o : "function" == typeof o && (i.callback = o));
            return !i.command.insert || i.command.insert instanceof e.CommandInsert || (i.command.insert = a.parseInsertArgs([i.command.insert]).command), !i.command.remove || i.command.remove instanceof e.CommandRemove || (i.command.remove = a.parseRemoveArgs([i.command.remove]).command), !i.command.filter || i.command.filter instanceof e.CommandFilter || (i.command.filter = a.parseFilterArgs([i.command.filter]).command), !i.command.sort || i.command.sort instanceof e.CommandSort || (i.command.sort = a.parseSortArgs([i.command.sort]).command), !i.command.changeLayout || i.command.changeLayout instanceof e.CommandChangeLayout || (i.command.changeLayout = a.parseChangeLayoutArgs([i.command.changeLayout]).command), i = a.callFilters("instructionParseMultimixArgs", i, arguments), n.freeze(i), i
        },
        parseFilterArgs: function(t) {
            var a = this,
                i = new e.UserInstruction,
                o = null,
                r = -1;
            for (i.animate = a.config.animation.enable, i.command = new e.CommandFilter, r = 0; r < t.length; r++) o = t[r], "string" == typeof o ? i.command.selector = o : null === o ? i.command.collection = [] : "object" == typeof o && n.isElement(o, a.dom.document) ? i.command.collection = [o] : "object" == typeof o && "undefined" != typeof o.length ? i.command.collection = n.arrayFromList(o) : "object" == typeof o ? n.extend(i.command, o) : "boolean" == typeof o ? i.animate = o : "function" == typeof o && (i.callback = o);
            if (i.command.selector && i.command.collection) throw new Error(e.messages.errorFilterInvalidArguments());
            return i = a.callFilters("instructionParseFilterArgs", i, arguments), n.freeze(i), i
        },
        parseSortArgs: function(t) {
            var a = this,
                i = new e.UserInstruction,
                o = null,
                r = "",
                s = -1;
            for (i.animate = a.config.animation.enable, i.command = new e.CommandSort, s = 0; s < t.length; s++)
                if (o = t[s], null !== o) switch (typeof o) {
                    case "string":
                        r = o;
                        break;
                    case "object":
                        o.length && (i.command.collection = n.arrayFromList(o));
                        break;
                    case "boolean":
                        i.animate = o;
                        break;
                    case "function":
                        i.callback = o
                }
            return r && (i.command = a.parseSortString(r, i.command)), i = a.callFilters("instructionParseSortArgs", i, arguments), n.freeze(i), i
        },
        parseInsertArgs: function(t) {
            var a = this,
                i = new e.UserInstruction,
                o = null,
                r = -1;
            for (i.animate = a.config.animation.enable, i.command = new e.CommandInsert, r = 0; r < t.length; r++) o = t[r], null !== o && ("number" == typeof o ? i.command.index = o : "string" == typeof o && ["before", "after"].indexOf(o) > -1 ? i.command.position = o : "string" == typeof o ? i.command.collection = n.arrayFromList(n.createElement(o).childNodes) : "object" == typeof o && n.isElement(o, a.dom.document) ? i.command.collection.length ? i.command.sibling = o : i.command.collection = [o] : "object" == typeof o && o.length ? i.command.collection.length ? i.command.sibling = o[0] : i.command.collection = o : "object" == typeof o && o.childNodes && o.childNodes.length ? i.command.collection.length ? i.command.sibling = o.childNodes[0] : i.command.collection = n.arrayFromList(o.childNodes) : "object" == typeof o ? n.extend(i.command, o) : "boolean" == typeof o ? i.animate = o : "function" == typeof o && (i.callback = o));
            if (i.command.index && i.command.sibling) throw new Error(e.messages.errorInsertInvalidArguments());
            return !i.command.collection.length && a.config.debug.showWarnings && console.warn(e.messages.warningInsertNoElements()), i = a.callFilters("instructionParseInsertArgs", i, arguments), n.freeze(i), i
        },
        parseRemoveArgs: function(t) {
            var a = this,
                i = new e.UserInstruction,
                o = null,
                r = null,
                s = -1;
            for (i.animate = a.config.animation.enable, i.command = new e.CommandRemove, s = 0; s < t.length; s++)
                if (r = t[s], null !== r) switch (typeof r) {
                    case "number":
                        a.targets[r] && (i.command.targets[0] = a.targets[r]);
                        break;
                    case "string":
                        i.command.collection = n.arrayFromList(a.dom.parent.querySelectorAll(r));
                        break;
                    case "object":
                        r && r.length ? i.command.collection = r : n.isElement(r, a.dom.document) ? i.command.collection = [r] : n.extend(i.command, r);
                        break;
                    case "boolean":
                        i.animate = r;
                        break;
                    case "function":
                        i.callback = r
                }
            if (i.command.collection.length)
                for (s = 0; o = a.targets[s]; s++) i.command.collection.indexOf(o.dom.el) > -1 && i.command.targets.push(o);
            return !i.command.targets.length && a.config.debug.showWarnings && console.warn(e.messages.warningRemoveNoElements()), n.freeze(i), i
        },
        parseDatasetArgs: function(t) {
            var a = this,
                i = new e.UserInstruction,
                o = null,
                r = -1;
            for (i.animate = a.config.animation.enable, i.command = new e.CommandDataset, r = 0; r < t.length; r++)
                if (o = t[r], null !== o) switch (typeof o) {
                    case "object":
                        Array.isArray(o) || "number" == typeof o.length ? i.command.dataset = o : n.extend(i.command, o);
                        break;
                    case "boolean":
                        i.animate = o;
                        break;
                    case "function":
                        i.callback = o
                }
            return n.freeze(i), i
        },
        parseChangeLayoutArgs: function(t) {
            var a = this,
                i = new e.UserInstruction,
                o = null,
                r = -1;
            for (i.animate = a.config.animation.enable, i.command = new e.CommandChangeLayout, r = 0; r < t.length; r++)
                if (o = t[r], null !== o) switch (typeof o) {
                    case "string":
                        i.command.containerClassName = o;
                        break;
                    case "object":
                        n.extend(i.command, o);
                        break;
                    case "boolean":
                        i.animate = o;
                        break;
                    case "function":
                        i.callback = o
                }
            return n.freeze(i), i
        },
        queueMix: function(t) {
            var a = this,
                i = null,
                o = "";
            return a.callActions("beforeQueueMix", arguments), i = n.defer(e.libraries), a.config.animation.queue && a.queue.length < a.config.animation.queueLimit ? (t.deferred = i, a.queue.push(t), a.config.controls.enable && (a.isToggling ? (a.buildToggleArray(t.instruction.command), o = a.getToggleSelector(), a.updateControls({
                    filter: {
                        selector: o
                    }
                })) : a.updateControls(t.instruction.command))) : (a.config.debug.showWarnings && console.warn(e.messages.warningMultimixInstanceQueueFull()), i.resolve(a.state), e.events.fire("mixBusy", a.dom.container, {
                    state: a.state,
                    instance: a
                }, a.dom.document), "function" == typeof a.config.callbacks.onMixBusy && a.config.callbacks.onMixBusy.call(a.dom.container, a.state, a)),
                a.callFilters("promiseQueueMix", i.promise, arguments)
        },
        getDataOperation: function(t) {
            var a = this,
                i = new e.Operation,
                o = [];
            if (i = a.callFilters("operationUnmappedGetDataOperation", i, arguments), a.dom.targets.length && !(o = a.state.activeDataset || []).length) throw new Error(e.messages.errorDatasetNotSet());
            return i.id = n.randomHex(), i.startState = a.state, i.startDataset = o, i.newDataset = t.slice(), a.diffDatasets(i), i.startOrder = a.targets, i.newOrder = i.show, a.config.animation.enable && (a.getStartMixData(i), a.setInter(i), i.docState = n.getDocumentState(a.dom.document), a.getInterMixData(i), a.setFinal(i), a.getFinalMixData(i), a.parseEffects(), i.hasEffect = a.hasEffect(), a.getTweenData(i)), a.targets = i.show.slice(), i.newState = a.buildState(i), Array.prototype.push.apply(a.targets, i.toRemove), i = a.callFilters("operationMappedGetDataOperation", i, arguments)
        },
        diffDatasets: function(t) {
            var a = this,
                i = [],
                o = [],
                r = [],
                s = null,
                l = null,
                c = null,
                u = null,
                f = null,
                h = {},
                d = "",
                m = -1;
            for (a.callActions("beforeDiffDatasets", arguments), m = 0; s = t.newDataset[m]; m++) {
                if ("undefined" == typeof(d = s[a.config.data.uidKey]) || d.toString().length < 1) throw new TypeError(e.messages.errorDatasetInvalidUidKey({
                    uidKey: a.config.data.uidKey
                }));
                if (h[d]) throw new Error(e.messages.errorDatasetDuplicateUid({
                    uid: d
                }));
                h[d] = !0, (l = a.cache[d]) instanceof e.Target ? (a.config.data.dirtyCheck && !n.deepEquals(s, l.data) && (c = l.render(s), l.data = s, c !== l.dom.el && (l.isInDom && (l.unbindEvents(), a.dom.parent.replaceChild(c, l.dom.el)), l.isShown || (c.style.display = "none"), l.dom.el = c, l.isInDom && l.bindEvents())), c = l.dom.el) : (l = new e.Target, l.init(null, a, s), l.hide()), l.isInDom ? (f = l.dom.el.nextElementSibling, o.push(d), u && (u.lastElementChild && u.appendChild(a.dom.document.createTextNode(" ")), a.insertDatasetFrag(u, l.dom.el, r), u = null)) : (u || (u = a.dom.document.createDocumentFragment()), u.lastElementChild && u.appendChild(a.dom.document.createTextNode(" ")), u.appendChild(l.dom.el), l.isInDom = !0, l.unbindEvents(), l.bindEvents(), l.hide(), t.toShow.push(l), r.push(l)), t.show.push(l)
            }
            for (u && (f = f || a.config.layout.siblingAfter, f && u.appendChild(a.dom.document.createTextNode(" ")), a.insertDatasetFrag(u, f, r)), m = 0; s = t.startDataset[m]; m++) d = s[a.config.data.uidKey], l = a.cache[d], t.show.indexOf(l) < 0 ? (t.hide.push(l), t.toHide.push(l), t.toRemove.push(l)) : i.push(d);
            n.isEqualArray(i, o) || (t.willSort = !0), a.callActions("afterDiffDatasets", arguments)
        },
        insertDatasetFrag: function(t, e, a) {
            var i = this,
                o = e ? n.arrayFromList(i.dom.parent.children).indexOf(e) : i.targets.length;
            for (i.dom.parent.insertBefore(t, e); a.length;) i.targets.splice(o, 0, a.shift()), o++
        },
        willSort: function(t, e) {
            var n = this,
                a = !1;
            return a = !!(n.config.behavior.liveSort || "random" === t.order || t.attribute !== e.attribute || t.order !== e.order || t.collection !== e.collection || null === t.next && e.next || t.next && null === e.next) || !(!t.next || !e.next) && n.willSort(t.next, e.next), n.callFilters("resultWillSort", a, arguments)
        },
        show: function() {
            var t = this;
            return t.filter("all")
        },
        hide: function() {
            var t = this;
            return t.filter("none")
        },
        isMixing: function() {
            var t = this;
            return t.isBusy
        },
        filter: function() {
            var t = this,
                e = t.parseFilterArgs(arguments);
            return t.multimix({
                filter: e.command
            }, e.animate, e.callback)
        },
        toggleOn: function() {
            var t = this,
                e = t.parseFilterArgs(arguments),
                n = e.command.selector,
                a = "";
            return t.isToggling = !0, t.toggleArray.indexOf(n) < 0 && t.toggleArray.push(n), a = t.getToggleSelector(), t.multimix({
                filter: a
            }, e.animate, e.callback)
        },
        toggleOff: function() {
            var t = this,
                e = t.parseFilterArgs(arguments),
                n = e.command.selector,
                a = t.toggleArray.indexOf(n),
                i = "";
            return t.isToggling = !0, a > -1 && t.toggleArray.splice(a, 1), i = t.getToggleSelector(), t.multimix({
                filter: i
            }, e.animate, e.callback)
        },
        sort: function() {
            var t = this,
                e = t.parseSortArgs(arguments);
            return t.multimix({
                sort: e.command
            }, e.animate, e.callback)
        },
        changeLayout: function() {
            var t = this,
                e = t.parseChangeLayoutArgs(arguments);
            return t.multimix({
                changeLayout: e.command
            }, e.animate, e.callback)
        },
        dataset: function() {
            var t = this,
                n = t.parseDatasetArgs(arguments),
                a = null,
                i = null,
                o = !1;
            return t.callActions("beforeDataset", arguments), t.isBusy ? (i = new e.QueueItem, i.args = arguments, i.instruction = n, t.queueMix(i)) : (n.callback && (t.userCallback = n.callback), o = n.animate ^ t.config.animation.enable ? n.animate : t.config.animation.enable, a = t.getDataOperation(n.command.dataset), t.goMix(o, a))
        },
        multimix: function() {
            var t = this,
                n = null,
                a = !1,
                i = null,
                o = t.parseMultimixArgs(arguments);
            return t.callActions("beforeMultimix", arguments), t.isBusy ? (i = new e.QueueItem, i.args = arguments, i.instruction = o, i.triggerElement = t.lastClicked, i.isToggling = t.isToggling, t.queueMix(i)) : (n = t.getOperation(o.command), t.config.controls.enable && (o.command.filter && !t.isToggling && (t.toggleArray.length = 0, t.buildToggleArray(n.command)), t.queue.length < 1 && t.updateControls(n.command)), o.callback && (t.userCallback = o.callback), a = o.animate ^ t.config.animation.enable ? o.animate : t.config.animation.enable, t.callFilters("operationMultimix", n, arguments), t.goMix(a, n))
        },
        getOperation: function(t) {
            var a = this,
                i = t.sort,
                o = t.filter,
                r = t.changeLayout,
                s = t.remove,
                l = t.insert,
                c = new e.Operation;
            return c = a.callFilters("operationUnmappedGetOperation", c, arguments), c.id = n.randomHex(), c.command = t, c.startState = a.state, c.triggerElement = a.lastClicked, a.isBusy ? (a.config.debug.showWarnings && console.warn(e.messages.warningGetOperationInstanceBusy()), null) : (l && a.insertTargets(l, c), s && (c.toRemove = s.targets), c.startSort = c.newSort = c.startState.activeSort, c.startOrder = c.newOrder = a.targets, i && (c.startSort = c.startState.activeSort, c.newSort = i, c.willSort = a.willSort(i, c.startState.activeSort), c.willSort && a.sortOperation(c)), c.startFilter = c.startState.activeFilter, o ? c.newFilter = o : c.newFilter = n.extend(new e.CommandFilter, c.startFilter), "all" === c.newFilter.selector ? c.newFilter.selector = a.config.selectors.target : "none" === c.newFilter.selector && (c.newFilter.selector = ""), a.filterOperation(c), c.startContainerClassName = c.startState.activeContainerClassName, r ? (c.newContainerClassName = r.containerClassName, c.newContainerClassName !== c.startContainerClassName && (c.willChangeLayout = !0)) : c.newContainerClassName = c.startContainerClassName, a.config.animation.enable && (a.getStartMixData(c), a.setInter(c), c.docState = n.getDocumentState(a.dom.document), a.getInterMixData(c), a.setFinal(c), a.getFinalMixData(c), a.parseEffects(), c.hasEffect = a.hasEffect(), a.getTweenData(c)), c.willSort && (a.targets = c.newOrder), c.newState = a.buildState(c), a.callFilters("operationMappedGetOperation", c, arguments))
        },
        tween: function(t, e) {
            var n = null,
                a = null,
                i = -1,
                o = -1;
            for (e = Math.min(e, 1), e = Math.max(e, 0), o = 0; n = t.show[o]; o++) a = t.showPosData[o], n.applyTween(a, e);
            for (o = 0; n = t.hide[o]; o++) n.isShown && n.hide(), (i = t.toHide.indexOf(n)) > -1 && (a = t.toHidePosData[i], n.isShown || n.show(), n.applyTween(a, e))
        },
        insert: function() {
            var t = this,
                e = t.parseInsertArgs(arguments);
            return t.multimix({
                insert: e.command
            }, e.animate, e.callback)
        },
        insertBefore: function() {
            var t = this,
                e = t.parseInsertArgs(arguments);
            return t.insert(e.command.collection, "before", e.command.sibling, e.animate, e.callback)
        },
        insertAfter: function() {
            var t = this,
                e = t.parseInsertArgs(arguments);
            return t.insert(e.command.collection, "after", e.command.sibling, e.animate, e.callback)
        },
        prepend: function() {
            var t = this,
                e = t.parseInsertArgs(arguments);
            return t.insert(0, e.command.collection, e.animate, e.callback)
        },
        append: function() {
            var t = this,
                e = t.parseInsertArgs(arguments);
            return t.insert(t.state.totalTargets, e.command.collection, e.animate, e.callback)
        },
        remove: function() {
            var t = this,
                e = t.parseRemoveArgs(arguments);
            return t.multimix({
                remove: e.command
            }, e.animate, e.callback)
        },
        getConfig: function(t) {
            var e = this,
                a = null;
            return a = t ? n.getProperty(e.config, t) : e.config, e.callFilters("valueGetConfig", a, arguments)
        },
        configure: function(t) {
            var e = this;
            e.callActions("beforeConfigure", arguments), n.extend(e.config, t, !0, !0), e.callActions("afterConfigure", arguments)
        },
        getState: function() {
            var t = this,
                a = null;
            return a = new e.State, n.extend(a, t.state), n.freeze(a), t.callFilters("stateGetState", a, arguments)
        },
        forceRefresh: function() {
            var t = this;
            t.indexTargets()
        },
        forceRender: function() {
            var t = this,
                e = null,
                n = null,
                a = "";
            for (a in t.cache) e = t.cache[a], n = e.render(e.data), n !== e.dom.el && (e.isInDom && (e.unbindEvents(), t.dom.parent.replaceChild(n, e.dom.el)), e.isShown || (n.style.display = "none"), e.dom.el = n, e.isInDom && e.bindEvents());
            t.state = t.buildState(t.lastOperation)
        },
        destroy: function(t) {
            var n = this,
                a = null,
                i = null,
                o = 0;
            for (n.callActions("beforeDestroy", arguments), o = 0; a = n.controls[o]; o++) a.removeBinding(n);
            for (o = 0; i = n.targets[o]; o++) t && i.show(), i.unbindEvents();
            n.dom.container.id.match(/^MixItUp/) && n.dom.container.removeAttribute("id"), delete e.instances[n.id], n.callActions("afterDestroy", arguments)
        }
    }), e.IMoveData = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.posIn = null, this.posOut = null, this.operation = null, this.callback = null, this.statusChange = "", this.duration = -1, this.staggerIndex = -1, this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.IMoveData), e.IMoveData.prototype = Object.create(e.Base.prototype), e.IMoveData.prototype.constructor = e.IMoveData, e.TargetDom = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.el = null, this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.TargetDom), e.TargetDom.prototype = Object.create(e.Base.prototype), e.TargetDom.prototype.constructor = e.TargetDom, e.Target = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.id = "", this.sortString = "", this.mixer = null, this.callback = null, this.isShown = !1, this.isBound = !1, this.isExcluded = !1, this.isInDom = !1, this.handler = null, this.operation = null, this.data = null, this.dom = new e.TargetDom, this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.Target), e.Target.prototype = Object.create(e.Base.prototype), n.extend(e.Target.prototype, {
        constructor: e.Target,
        init: function(t, n, a) {
            var i = this,
                o = "";
            if (i.callActions("beforeInit", arguments), i.mixer = n, t || (t = i.render(a)), i.cacheDom(t), i.bindEvents(), "none" !== i.dom.el.style.display && (i.isShown = !0), a && n.config.data.uidKey) {
                if ("undefined" == typeof(o = a[n.config.data.uidKey]) || o.toString().length < 1) throw new TypeError(e.messages.errorDatasetInvalidUidKey({
                    uidKey: n.config.data.uidKey
                }));
                i.id = o, i.data = a, n.cache[o] = i
            }
            i.callActions("afterInit", arguments)
        },
        render: function(t) {
            var a = this,
                i = null,
                o = null,
                r = null,
                s = "";
            if (a.callActions("beforeRender", arguments), i = a.callFilters("renderRender", a.mixer.config.render.target, arguments), "function" != typeof i) throw new TypeError(e.messages.errorDatasetRendererNotSet());
            return s = i(t), s && "object" == typeof s && n.isElement(s) ? o = s : "string" == typeof s && (r = document.createElement("div"), r.innerHTML = s, o = r.firstElementChild), a.callFilters("elRender", o, arguments)
        },
        cacheDom: function(t) {
            var e = this;
            e.callActions("beforeCacheDom", arguments), e.dom.el = t, e.callActions("afterCacheDom", arguments)
        },
        getSortString: function(t) {
            var e = this,
                n = e.dom.el.getAttribute("data-" + t) || "";
            e.callActions("beforeGetSortString", arguments), n = isNaN(1 * n) ? n.toLowerCase() : 1 * n, e.sortString = n, e.callActions("afterGetSortString", arguments)
        },
        show: function() {
            var t = this;
            t.callActions("beforeShow", arguments), t.isShown || (t.dom.el.style.display = "", t.isShown = !0), t.callActions("afterShow", arguments)
        },
        hide: function() {
            var t = this;
            t.callActions("beforeHide", arguments), t.isShown && (t.dom.el.style.display = "none", t.isShown = !1), t.callActions("afterHide", arguments)
        },
        move: function(t) {
            var e = this;
            e.callActions("beforeMove", arguments), e.isExcluded || e.mixer.targetsMoved++, e.applyStylesIn(t), requestAnimationFrame(function() {
                e.applyStylesOut(t)
            }), e.callActions("afterMove", arguments)
        },
        applyTween: function(t, n) {
            var a = this,
                i = "",
                o = null,
                r = t.posIn,
                s = [],
                l = new e.StyleData,
                c = -1;
            for (a.callActions("beforeApplyTween", arguments), l.x = r.x, l.y = r.y, 0 === n ? a.hide() : a.isShown || a.show(), c = 0; i = e.features.TWEENABLE[c]; c++)
                if (o = t.tweenData[i], "x" === i) {
                    if (!o) continue;
                    l.x = r.x + o * n
                } else if ("y" === i) {
                if (!o) continue;
                l.y = r.y + o * n
            } else if (o instanceof e.TransformData) {
                if (!o.value) continue;
                l[i].value = r[i].value + o.value * n, l[i].unit = o.unit, s.push(i + "(" + l[i].value + o.unit + ")")
            } else {
                if (!o) continue;
                l[i] = r[i] + o * n, a.dom.el.style[i] = l[i]
            }(l.x || l.y) && s.unshift("translate(" + l.x + "px, " + l.y + "px)"), s.length && (a.dom.el.style[e.features.transformProp] = s.join(" ")), a.callActions("afterApplyTween", arguments)
        },
        applyStylesIn: function(t) {
            var n = this,
                a = t.posIn,
                i = 1 !== n.mixer.effectsIn.opacity,
                o = [];
            n.callActions("beforeApplyStylesIn", arguments), o.push("translate(" + a.x + "px, " + a.y + "px)"), n.mixer.config.animation.animateResizeTargets && ("show" !== t.statusChange && (n.dom.el.style.width = a.width + "px", n.dom.el.style.height = a.height + "px"), n.dom.el.style.marginRight = a.marginRight + "px", n.dom.el.style.marginBottom = a.marginBottom + "px"), i && (n.dom.el.style.opacity = a.opacity), "show" === t.statusChange && (o = o.concat(n.mixer.transformIn)), n.dom.el.style[e.features.transformProp] = o.join(" "), n.callActions("afterApplyStylesIn", arguments)
        },
        applyStylesOut: function(t) {
            var n = this,
                a = [],
                i = [],
                o = n.mixer.config.animation.animateResizeTargets,
                r = "undefined" != typeof n.mixer.effectsIn.opacity;
            if (n.callActions("beforeApplyStylesOut", arguments), a.push(n.writeTransitionRule(e.features.transformRule, t.staggerIndex)), "none" !== t.statusChange && a.push(n.writeTransitionRule("opacity", t.staggerIndex, t.duration)), o && (a.push(n.writeTransitionRule("width", t.staggerIndex, t.duration)), a.push(n.writeTransitionRule("height", t.staggerIndex, t.duration)), a.push(n.writeTransitionRule("margin", t.staggerIndex, t.duration))), !t.callback) return n.mixer.targetsImmovable++, void(n.mixer.targetsMoved === n.mixer.targetsImmovable && n.mixer.cleanUp(t.operation));
            switch (n.operation = t.operation, n.callback = t.callback, !n.isExcluded && n.mixer.targetsBound++, n.isBound = !0, n.applyTransition(a), o && t.posOut.width > 0 && t.posOut.height > 0 && (n.dom.el.style.width = t.posOut.width + "px", n.dom.el.style.height = t.posOut.height + "px", n.dom.el.style.marginRight = t.posOut.marginRight + "px", n.dom.el.style.marginBottom = t.posOut.marginBottom + "px"), n.mixer.config.animation.nudge || "hide" !== t.statusChange || i.push("translate(" + t.posOut.x + "px, " + t.posOut.y + "px)"), t.statusChange) {
                case "hide":
                    r && (n.dom.el.style.opacity = n.mixer.effectsOut.opacity), i = i.concat(n.mixer.transformOut);
                    break;
                case "show":
                    r && (n.dom.el.style.opacity = 1)
            }(n.mixer.config.animation.nudge || !n.mixer.config.animation.nudge && "hide" !== t.statusChange) && i.push("translate(" + t.posOut.x + "px, " + t.posOut.y + "px)"), n.dom.el.style[e.features.transformProp] = i.join(" "), n.callActions("afterApplyStylesOut", arguments)
        },
        writeTransitionRule: function(t, e, n) {
            var a = this,
                i = a.getDelay(e),
                o = "";
            return o = t + " " + (n > 0 ? n : a.mixer.config.animation.duration) + "ms " + i + "ms " + ("opacity" === t ? "linear" : a.mixer.config.animation.easing), a.callFilters("ruleWriteTransitionRule", o, arguments)
        },
        getDelay: function(t) {
            var e = this,
                n = -1;
            return "function" == typeof e.mixer.config.animation.staggerSequence && (t = e.mixer.config.animation.staggerSequence.call(e, t, e.state)), n = e.mixer.staggerDuration ? t * e.mixer.staggerDuration : 0, e.callFilters("delayGetDelay", n, arguments)
        },
        applyTransition: function(t) {
            var n = this,
                a = t.join(", ");
            n.callActions("beforeApplyTransition", arguments), n.dom.el.style[e.features.transitionProp] = a, n.callActions("afterApplyTransition", arguments)
        },
        handleTransitionEnd: function(t) {
            var e = this,
                n = t.propertyName,
                a = e.mixer.config.animation.animateResizeTargets;
            e.callActions("beforeHandleTransitionEnd", arguments), e.isBound && t.target.matches(e.mixer.config.selectors.target) && (n.indexOf("transform") > -1 || n.indexOf("opacity") > -1 || a && n.indexOf("height") > -1 || a && n.indexOf("width") > -1 || a && n.indexOf("margin") > -1) && (e.callback.call(e, e.operation), e.isBound = !1, e.callback = null, e.operation = null), e.callActions("afterHandleTransitionEnd", arguments)
        },
        eventBus: function(t) {
            var e = this;
            switch (e.callActions("beforeEventBus", arguments), t.type) {
                case "webkitTransitionEnd":
                case "transitionend":
                    e.handleTransitionEnd(t)
            }
            e.callActions("afterEventBus", arguments)
        },
        unbindEvents: function() {
            var t = this;
            t.callActions("beforeUnbindEvents", arguments), n.off(t.dom.el, "webkitTransitionEnd", t.handler), n.off(t.dom.el, "transitionend", t.handler), t.callActions("afterUnbindEvents", arguments)
        },
        bindEvents: function() {
            var t = this,
                a = "";
            t.callActions("beforeBindEvents", arguments), a = "webkit" === e.features.transitionPrefix ? "webkitTransitionEnd" : "transitionend", t.handler = function(e) {
                return t.eventBus(e)
            }, n.on(t.dom.el, a, t.handler), t.callActions("afterBindEvents", arguments)
        },
        getPosData: function(n) {
            var a = this,
                i = {},
                o = null,
                r = new e.StyleData;
            return a.callActions("beforeGetPosData", arguments), r.x = a.dom.el.offsetLeft, r.y = a.dom.el.offsetTop, (a.mixer.config.animation.animateResizeTargets || n) && (o = a.dom.el.getBoundingClientRect(), r.top = o.top, r.right = o.right, r.bottom = o.bottom, r.left = o.left, r.width = o.width, r.height = o.height), a.mixer.config.animation.animateResizeTargets && (i = t.getComputedStyle(a.dom.el), r.marginBottom = parseFloat(i.marginBottom), r.marginRight = parseFloat(i.marginRight)), a.callFilters("posDataGetPosData", r, arguments)
        },
        cleanUp: function() {
            var t = this;
            t.callActions("beforeCleanUp", arguments), t.dom.el.style[e.features.transformProp] = "", t.dom.el.style[e.features.transitionProp] = "", t.dom.el.style.opacity = "", t.mixer.config.animation.animateResizeTargets && (t.dom.el.style.width = "", t.dom.el.style.height = "", t.dom.el.style.marginRight = "", t.dom.el.style.marginBottom = ""), t.callActions("afterCleanUp", arguments)
        }
    }), e.Collection = function(t) {
        var e = null,
            a = -1;
        for (this.callActions("beforeConstruct"), a = 0; e = t[a]; a++) this[a] = e;
        this.length = t.length, this.callActions("afterConstruct"), n.freeze(this)
    }, e.BaseStatic.call(e.Collection), e.Collection.prototype = Object.create(e.Base.prototype), n.extend(e.Collection.prototype, {
        constructor: e.Collection,
        mixitup: function(t) {
            var a = this,
                i = null,
                o = Array.prototype.slice.call(arguments),
                r = [],
                s = -1;
            for (this.callActions("beforeMixitup"), o.shift(), s = 0; i = a[s]; s++) r.push(i[t].apply(i, o));
            return a.callFilters("promiseMixitup", n.all(r, e.libraries), arguments)
        }
    }), e.Operation = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.id = "", this.args = [], this.command = null, this.showPosData = [], this.toHidePosData = [], this.startState = null, this.newState = null, this.docState = null, this.willSort = !1, this.willChangeLayout = !1, this.hasEffect = !1, this.hasFailed = !1, this.triggerElement = null, this.show = [], this.hide = [], this.matching = [], this.toShow = [], this.toHide = [], this.toMove = [], this.toRemove = [], this.startOrder = [], this.newOrder = [], this.startSort = null, this.newSort = null, this.startFilter = null, this.newFilter = null, this.startDataset = null, this.newDataset = null, this.viewportDeltaX = 0, this.viewportDeltaY = 0, this.startX = 0, this.startY = 0, this.startHeight = 0, this.startWidth = 0, this.newX = 0, this.newY = 0, this.newHeight = 0, this.newWidth = 0, this.startContainerClassName = "", this.startDisplay = "", this.newContainerClassName = "", this.newDisplay = "", this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.Operation), e.Operation.prototype = Object.create(e.Base.prototype), e.Operation.prototype.constructor = e.Operation, e.State = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.id = "", this.activeFilter = null, this.activeSort = null, this.activeContainerClassName = "", this.container = null, this.targets = [], this.hide = [], this.show = [], this.matching = [], this.totalTargets = -1, this.totalShow = -1, this.totalHide = -1, this.totalMatching = -1, this.hasFailed = !1, this.triggerElement = null, this.activeDataset = null, this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.State), e.State.prototype = Object.create(e.Base.prototype), e.State.prototype.constructor = e.State, e.UserInstruction = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.command = {}, this.animate = !1, this.callback = null, this.callActions("afterConstruct"), n.seal(this)
    }, e.BaseStatic.call(e.UserInstruction), e.UserInstruction.prototype = Object.create(e.Base.prototype), e.UserInstruction.prototype.constructor = e.UserInstruction, e.Messages = function() {
        e.Base.call(this), this.callActions("beforeConstruct"), this.ERROR_FACTORY_INVALID_CONTAINER = "[MixItUp] An invalid selector or element reference was passed to the mixitup factory function", this.ERROR_FACTORY_CONTAINER_NOT_FOUND = "[MixItUp] The provided selector yielded no container element", this.ERROR_CONFIG_INVALID_ANIMATION_EFFECTS = "[MixItUp] Invalid value for `animation.effects`", this.ERROR_CONFIG_INVALID_CONTROLS_SCOPE = "[MixItUp] Invalid value for `controls.scope`", this.ERROR_CONFIG_INVALID_PROPERTY = '[MixitUp] Invalid configuration object property "${erroneous}"${suggestion}', this.ERROR_CONFIG_INVALID_PROPERTY_SUGGESTION = '. Did you mean "${probableMatch}"?', this.ERROR_CONFIG_DATA_UID_KEY_NOT_SET = "[MixItUp] To use the dataset API, a UID key must be specified using `data.uidKey`", this.ERROR_DATASET_INVALID_UID_KEY = '[MixItUp] The specified UID key "${uidKey}" is not present on one or more dataset items', this.ERROR_DATASET_DUPLICATE_UID = '[MixItUp] The UID "${uid}" was found on two or more dataset items. UIDs must be unique.', this.ERROR_INSERT_INVALID_ARGUMENTS = "[MixItUp] Please provider either an index or a sibling and position to insert, not both", this.ERROR_INSERT_PREEXISTING_ELEMENT = "[MixItUp] An element to be inserted already exists in the container", this.ERROR_FILTER_INVALID_ARGUMENTS = "[MixItUp] Please provide either a selector or collection `.filter()`, not both", this.ERROR_DATASET_NOT_SET = "[MixItUp] To use the dataset API with pre-rendered targets, a starting dataset must be set using `load.dataset`", this.ERROR_DATASET_PRERENDERED_MISMATCH = "[MixItUp] `load.dataset` does not match pre-rendered targets", this.ERROR_DATASET_RENDERER_NOT_SET = "[MixItUp] To insert an element via the dataset API, a target renderer function must be provided to `render.target`", this.ERROR_SORT_NON_EXISTENT_ELEMENT = "[MixItUp] An element to be sorted does not already exist in the container", this.WARNING_FACTORY_PREEXISTING_INSTANCE = "[MixItUp] WARNING: This element already has an active MixItUp instance. The provided configuration object will be ignored. If you wish to perform additional methods on this instance, please create a reference.", this.WARNING_INSERT_NO_ELEMENTS = "[MixItUp] WARNING: No valid elements were passed to `.insert()`", this.WARNING_REMOVE_NO_ELEMENTS = "[MixItUp] WARNING: No valid elements were passed to `.remove()`", this.WARNING_MULTIMIX_INSTANCE_QUEUE_FULL = "[MixItUp] WARNING: An operation was requested but the MixItUp instance was busy. The operation was rejected because the queue is full or queuing is disabled.", this.WARNING_GET_OPERATION_INSTANCE_BUSY = "[MixItUp] WARNING: Operations can be be created while the MixItUp instance is busy.", this.WARNING_NO_PROMISE_IMPLEMENTATION = "[MixItUp] WARNING: No Promise implementations could be found. If you wish to use promises with MixItUp please install an ES6 Promise polyfill.", this.WARNING_INCONSISTENT_SORTING_ATTRIBUTES = '[MixItUp] WARNING: The requested sorting data attribute "${attribute}" was not present on one or more target elements which may product unexpected sort output', this.callActions("afterConstruct"), this.compileTemplates(), n.seal(this)
    }, e.BaseStatic.call(e.Messages), e.Messages.prototype = Object.create(e.Base.prototype), e.Messages.prototype.constructor = e.Messages, e.Messages.prototype.compileTemplates = function() {
        var t = "",
            e = "";
        for (t in this) "string" == typeof(e = this[t]) && (this[n.camelCase(t)] = n.template(e))
    }, e.messages = new e.Messages, e.Facade = function(t) {
        e.Base.call(this), this.callActions("beforeConstruct", arguments), this.configure = t.configure.bind(t), this.show = t.show.bind(t), this.hide = t.hide.bind(t), this.filter = t.filter.bind(t), this.toggleOn = t.toggleOn.bind(t), this.toggleOff = t.toggleOff.bind(t), this.sort = t.sort.bind(t), this.changeLayout = t.changeLayout.bind(t), this.multimix = t.multimix.bind(t), this.dataset = t.dataset.bind(t), this.tween = t.tween.bind(t), this.insert = t.insert.bind(t), this.insertBefore = t.insertBefore.bind(t), this.insertAfter = t.insertAfter.bind(t), this.prepend = t.prepend.bind(t), this.append = t.append.bind(t), this.remove = t.remove.bind(t), this.destroy = t.destroy.bind(t), this.forceRefresh = t.forceRefresh.bind(t), this.forceRender = t.forceRender.bind(t), this.isMixing = t.isMixing.bind(t), this.getOperation = t.getOperation.bind(t), this.getConfig = t.getConfig.bind(t), this.getState = t.getState.bind(t), this.callActions("afterConstruct", arguments), n.freeze(this), n.seal(this)
    }, e.BaseStatic.call(e.Facade), e.Facade.prototype = Object.create(e.Base.prototype), e.Facade.prototype.constructor = e.Facade, "object" == typeof exports && "object" == typeof module ? module.exports = e : "function" == typeof define && define.amd ? define(function() {
        return e
    }) : "undefined" != typeof t.mixitup && "function" == typeof t.mixitup || (t.mixitup = e), e.BaseStatic.call(e.constructor), e.NAME = "mixitup", e.CORE_VERSION = "3.3.1"
}(window);


/*
 *
 * Glightbox
 *
 */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).GLightbox = t()
}(this, (function() {
    "use strict";

    function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(t)
    }

    function t(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function n(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }
    var s = Date.now();

    function l() {
        var e = {},
            t = !0,
            i = 0,
            n = arguments.length;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], i++);
        for (var s = function(i) {
                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t && "[object Object]" === Object.prototype.toString.call(i[n]) ? e[n] = l(!0, e[n], i[n]) : e[n] = i[n])
            }; i < n; i++) {
            var o = arguments[i];
            s(o)
        }
        return e
    }

    function o(e, t) {
        if ((k(e) || e === window || e === document) && (e = [e]), A(e) || L(e) || (e = [e]), 0 != P(e))
            if (A(e) && !L(e))
                for (var i = e.length, n = 0; n < i && !1 !== t.call(e[n], e[n], n, e); n++);
            else if (L(e))
            for (var s in e)
                if (O(e, s) && !1 === t.call(e[s], e[s], s, e)) break
    }

    function r(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            n = e[s] = e[s] || [],
            l = {
                all: n,
                evt: null,
                found: null
            };
        return t && i && P(n) > 0 && o(n, (function(e, n) {
            if (e.eventName == t && e.fn.toString() == i.toString()) return l.found = !0, l.evt = n, !1
        })), l
    }

    function a(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = t.onElement,
            n = t.withCallback,
            s = t.avoidDuplicate,
            l = void 0 === s || s,
            a = t.once,
            h = void 0 !== a && a,
            d = t.useCapture,
            c = void 0 !== d && d,
            u = arguments.length > 2 ? arguments[2] : void 0,
            g = i || [];

        function v(e) {
            T(n) && n.call(u, e, this), h && v.destroy()
        }
        return C(g) && (g = document.querySelectorAll(g)), v.destroy = function() {
            o(g, (function(t) {
                var i = r(t, e, v);
                i.found && i.all.splice(i.evt, 1), t.removeEventListener && t.removeEventListener(e, v, c)
            }))
        }, o(g, (function(t) {
            var i = r(t, e, v);
            (t.addEventListener && l && !i.found || !l) && (t.addEventListener(e, v, c), i.all.push({
                eventName: e,
                fn: v
            }))
        })), v
    }

    function h(e, t) {
        o(t.split(" "), (function(t) {
            return e.classList.add(t)
        }))
    }

    function d(e, t) {
        o(t.split(" "), (function(t) {
            return e.classList.remove(t)
        }))
    }

    function c(e, t) {
        return e.classList.contains(t)
    }

    function u(e, t) {
        for (; e !== document.body;) {
            if (!(e = e.parentElement)) return !1;
            if ("function" == typeof e.matches ? e.matches(t) : e.msMatchesSelector(t)) return e
        }
    }

    function g(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!e || "" === t) return !1;
        if ("none" === t) return T(i) && i(), !1;
        var n = x(),
            s = t.split(" ");
        o(s, (function(t) {
            h(e, "g" + t)
        })), a(n, {
            onElement: e,
            avoidDuplicate: !1,
            once: !0,
            withCallback: function(e, t) {
                o(s, (function(e) {
                    d(t, "g" + e)
                })), T(i) && i()
            }
        })
    }

    function v(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if ("" === t) return e.style.webkitTransform = "", e.style.MozTransform = "", e.style.msTransform = "", e.style.OTransform = "", e.style.transform = "", !1;
        e.style.webkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.OTransform = t, e.style.transform = t
    }

    function f(e) {
        e.style.display = "block"
    }

    function p(e) {
        e.style.display = "none"
    }

    function m(e) {
        var t = document.createDocumentFragment(),
            i = document.createElement("div");
        for (i.innerHTML = e; i.firstChild;) t.appendChild(i.firstChild);
        return t
    }

    function y() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        }
    }

    function x() {
        var e, t = document.createElement("fakeelement"),
            i = {
                animation: "animationend",
                OAnimation: "oAnimationEnd",
                MozAnimation: "animationend",
                WebkitAnimation: "webkitAnimationEnd"
            };
        for (e in i)
            if (void 0 !== t.style[e]) return i[e]
    }

    function b(e, t, i, n) {
        if (e()) t();
        else {
            var s;
            i || (i = 100);
            var l = setInterval((function() {
                e() && (clearInterval(l), s && clearTimeout(s), t())
            }), i);
            n && (s = setTimeout((function() {
                clearInterval(l)
            }), n))
        }
    }

    function S(e, t, i) {
        if (I(e)) console.error("Inject assets error");
        else if (T(t) && (i = t, t = !1), C(t) && t in window) T(i) && i();
        else {
            var n;
            if (-1 !== e.indexOf(".css")) {
                if ((n = document.querySelectorAll('link[href="' + e + '"]')) && n.length > 0) return void(T(i) && i());
                var s = document.getElementsByTagName("head")[0],
                    l = s.querySelectorAll('link[rel="stylesheet"]'),
                    o = document.createElement("link");
                return o.rel = "stylesheet", o.type = "text/css", o.href = e, o.media = "all", l ? s.insertBefore(o, l[0]) : s.appendChild(o), void(T(i) && i())
            }
            if ((n = document.querySelectorAll('script[src="' + e + '"]')) && n.length > 0) {
                if (T(i)) {
                    if (C(t)) return b((function() {
                        return void 0 !== window[t]
                    }), (function() {
                        i()
                    })), !1;
                    i()
                }
            } else {
                var r = document.createElement("script");
                r.type = "text/javascript", r.src = e, r.onload = function() {
                    if (T(i)) {
                        if (C(t)) return b((function() {
                            return void 0 !== window[t]
                        }), (function() {
                            i()
                        })), !1;
                        i()
                    }
                }, document.body.appendChild(r)
            }
        }
    }

    function w() {
        return "navigator" in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)
    }

    function T(e) {
        return "function" == typeof e
    }

    function C(e) {
        return "string" == typeof e
    }

    function k(e) {
        return !(!e || !e.nodeType || 1 != e.nodeType)
    }

    function E(e) {
        return Array.isArray(e)
    }

    function A(e) {
        return e && e.length && isFinite(e.length)
    }

    function L(t) {
        return "object" === e(t) && null != t && !T(t) && !E(t)
    }

    function I(e) {
        return null == e
    }

    function O(e, t) {
        return null !== e && hasOwnProperty.call(e, t)
    }

    function P(e) {
        if (L(e)) {
            if (e.keys) return e.keys().length;
            var t = 0;
            for (var i in e) O(e, i) && t++;
            return t
        }
        return e.length
    }

    function M(e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
    }

    function z() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
            t = document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");
        if (!t.length) return !1;
        if (1 == t.length) return t[0];
        "string" == typeof e && (e = parseInt(e));
        var i = [];
        o(t, (function(e) {
            i.push(e.getAttribute("data-taborder"))
        }));
        var n = Math.max.apply(Math, i.map((function(e) {
                return parseInt(e)
            }))),
            s = e < 0 ? 1 : e + 1;
        s > n && (s = "1");
        var l = i.filter((function(e) {
                return e >= parseInt(s)
            })),
            r = l.sort()[0];
        return document.querySelector('.gbtn[data-taborder="'.concat(r, '"]'))
    }

    function X(e) {
        if (e.events.hasOwnProperty("keyboard")) return !1;
        e.events.keyboard = a("keydown", {
            onElement: window,
            withCallback: function(t, i) {
                var n = (t = t || window.event).keyCode;
                if (9 == n) {
                    var s = document.querySelector(".gbtn.focused");
                    if (!s) {
                        var l = !(!document.activeElement || !document.activeElement.nodeName) && document.activeElement.nodeName.toLocaleLowerCase();
                        if ("input" == l || "textarea" == l || "button" == l) return
                    }
                    t.preventDefault();
                    var o = document.querySelectorAll(".gbtn[data-taborder]");
                    if (!o || o.length <= 0) return;
                    if (!s) {
                        var r = z();
                        return void(r && (r.focus(), h(r, "focused")))
                    }
                    var a = z(s.getAttribute("data-taborder"));
                    d(s, "focused"), a && (a.focus(), h(a, "focused"))
                }
                39 == n && e.nextSlide(), 37 == n && e.prevSlide(), 27 == n && e.close()
            }
        })
    }

    function Y(e) {
        return Math.sqrt(e.x * e.x + e.y * e.y)
    }

    function q(e, t) {
        var i = function(e, t) {
            var i = Y(e) * Y(t);
            if (0 === i) return 0;
            var n = function(e, t) {
                return e.x * t.x + e.y * t.y
            }(e, t) / i;
            return n > 1 && (n = 1), Math.acos(n)
        }(e, t);
        return function(e, t) {
            return e.x * t.y - t.x * e.y
        }(e, t) > 0 && (i *= -1), 180 * i / Math.PI
    }
    var N = function() {
        function e(i) {
            t(this, e), this.handlers = [], this.el = i
        }
        return n(e, [{
            key: "add",
            value: function(e) {
                this.handlers.push(e)
            }
        }, {
            key: "del",
            value: function(e) {
                e || (this.handlers = []);
                for (var t = this.handlers.length; t >= 0; t--) this.handlers[t] === e && this.handlers.splice(t, 1)
            }
        }, {
            key: "dispatch",
            value: function() {
                for (var e = 0, t = this.handlers.length; e < t; e++) {
                    var i = this.handlers[e];
                    "function" == typeof i && i.apply(this.el, arguments)
                }
            }
        }]), e
    }();

    function D(e, t) {
        var i = new N(e);
        return i.add(t), i
    }
    var _ = function() {
        function e(i, n) {
            t(this, e), this.element = "string" == typeof i ? document.querySelector(i) : i, this.start = this.start.bind(this), this.move = this.move.bind(this), this.end = this.end.bind(this), this.cancel = this.cancel.bind(this), this.element.addEventListener("touchstart", this.start, !1), this.element.addEventListener("touchmove", this.move, !1), this.element.addEventListener("touchend", this.end, !1), this.element.addEventListener("touchcancel", this.cancel, !1), this.preV = {
                x: null,
                y: null
            }, this.pinchStartLen = null, this.zoom = 1, this.isDoubleTap = !1;
            var s = function() {};
            this.rotate = D(this.element, n.rotate || s), this.touchStart = D(this.element, n.touchStart || s), this.multipointStart = D(this.element, n.multipointStart || s), this.multipointEnd = D(this.element, n.multipointEnd || s), this.pinch = D(this.element, n.pinch || s), this.swipe = D(this.element, n.swipe || s), this.tap = D(this.element, n.tap || s), this.doubleTap = D(this.element, n.doubleTap || s), this.longTap = D(this.element, n.longTap || s), this.singleTap = D(this.element, n.singleTap || s), this.pressMove = D(this.element, n.pressMove || s), this.twoFingerPressMove = D(this.element, n.twoFingerPressMove || s), this.touchMove = D(this.element, n.touchMove || s), this.touchEnd = D(this.element, n.touchEnd || s), this.touchCancel = D(this.element, n.touchCancel || s), this.translateContainer = this.element, this._cancelAllHandler = this.cancelAll.bind(this), window.addEventListener("scroll", this._cancelAllHandler), this.delta = null, this.last = null, this.now = null, this.tapTimeout = null, this.singleTapTimeout = null, this.longTapTimeout = null, this.swipeTimeout = null, this.x1 = this.x2 = this.y1 = this.y2 = null, this.preTapPosition = {
                x: null,
                y: null
            }
        }
        return n(e, [{
            key: "start",
            value: function(e) {
                if (e.touches) {
                    if (e.target && e.target.nodeName && ["a", "button", "input"].indexOf(e.target.nodeName.toLowerCase()) >= 0) console.log("ignore drag for this touched element", e.target.nodeName.toLowerCase());
                    else {
                        this.now = Date.now(), this.x1 = e.touches[0].pageX, this.y1 = e.touches[0].pageY, this.delta = this.now - (this.last || this.now), this.touchStart.dispatch(e, this.element), null !== this.preTapPosition.x && (this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30, this.isDoubleTap && clearTimeout(this.singleTapTimeout)), this.preTapPosition.x = this.x1, this.preTapPosition.y = this.y1, this.last = this.now;
                        var t = this.preV;
                        if (e.touches.length > 1) {
                            this._cancelLongTap(), this._cancelSingleTap();
                            var i = {
                                x: e.touches[1].pageX - this.x1,
                                y: e.touches[1].pageY - this.y1
                            };
                            t.x = i.x, t.y = i.y, this.pinchStartLen = Y(t), this.multipointStart.dispatch(e, this.element)
                        }
                        this._preventTap = !1, this.longTapTimeout = setTimeout(function() {
                            this.longTap.dispatch(e, this.element), this._preventTap = !0
                        }.bind(this), 750)
                    }
                }
            }
        }, {
            key: "move",
            value: function(e) {
                if (e.touches) {
                    var t = this.preV,
                        i = e.touches.length,
                        n = e.touches[0].pageX,
                        s = e.touches[0].pageY;
                    if (this.isDoubleTap = !1, i > 1) {
                        var l = e.touches[1].pageX,
                            o = e.touches[1].pageY,
                            r = {
                                x: e.touches[1].pageX - n,
                                y: e.touches[1].pageY - s
                            };
                        null !== t.x && (this.pinchStartLen > 0 && (e.zoom = Y(r) / this.pinchStartLen, this.pinch.dispatch(e, this.element)), e.angle = q(r, t), this.rotate.dispatch(e, this.element)), t.x = r.x, t.y = r.y, null !== this.x2 && null !== this.sx2 ? (e.deltaX = (n - this.x2 + l - this.sx2) / 2, e.deltaY = (s - this.y2 + o - this.sy2) / 2) : (e.deltaX = 0, e.deltaY = 0), this.twoFingerPressMove.dispatch(e, this.element), this.sx2 = l, this.sy2 = o
                    } else {
                        if (null !== this.x2) {
                            e.deltaX = n - this.x2, e.deltaY = s - this.y2;
                            var a = Math.abs(this.x1 - this.x2),
                                h = Math.abs(this.y1 - this.y2);
                            (a > 10 || h > 10) && (this._preventTap = !0)
                        } else e.deltaX = 0, e.deltaY = 0;
                        this.pressMove.dispatch(e, this.element)
                    }
                    this.touchMove.dispatch(e, this.element), this._cancelLongTap(), this.x2 = n, this.y2 = s, i > 1 && e.preventDefault()
                }
            }
        }, {
            key: "end",
            value: function(e) {
                if (e.changedTouches) {
                    this._cancelLongTap();
                    var t = this;
                    e.touches.length < 2 && (this.multipointEnd.dispatch(e, this.element), this.sx2 = this.sy2 = null), this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30 ? (e.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = setTimeout((function() {
                        t.swipe.dispatch(e, t.element)
                    }), 0)) : (this.tapTimeout = setTimeout((function() {
                        t._preventTap || t.tap.dispatch(e, t.element), t.isDoubleTap && (t.doubleTap.dispatch(e, t.element), t.isDoubleTap = !1)
                    }), 0), t.isDoubleTap || (t.singleTapTimeout = setTimeout((function() {
                        t.singleTap.dispatch(e, t.element)
                    }), 250))), this.touchEnd.dispatch(e, this.element), this.preV.x = 0, this.preV.y = 0, this.zoom = 1, this.pinchStartLen = null, this.x1 = this.x2 = this.y1 = this.y2 = null
                }
            }
        }, {
            key: "cancelAll",
            value: function() {
                this._preventTap = !0, clearTimeout(this.singleTapTimeout), clearTimeout(this.tapTimeout), clearTimeout(this.longTapTimeout), clearTimeout(this.swipeTimeout)
            }
        }, {
            key: "cancel",
            value: function(e) {
                this.cancelAll(), this.touchCancel.dispatch(e, this.element)
            }
        }, {
            key: "_cancelLongTap",
            value: function() {
                clearTimeout(this.longTapTimeout)
            }
        }, {
            key: "_cancelSingleTap",
            value: function() {
                clearTimeout(this.singleTapTimeout)
            }
        }, {
            key: "_swipeDirection",
            value: function(e, t, i, n) {
                return Math.abs(e - t) >= Math.abs(i - n) ? e - t > 0 ? "Left" : "Right" : i - n > 0 ? "Up" : "Down"
            }
        }, {
            key: "on",
            value: function(e, t) {
                this[e] && this[e].add(t)
            }
        }, {
            key: "off",
            value: function(e, t) {
                this[e] && this[e].del(t)
            }
        }, {
            key: "destroy",
            value: function() {
                return this.singleTapTimeout && clearTimeout(this.singleTapTimeout), this.tapTimeout && clearTimeout(this.tapTimeout), this.longTapTimeout && clearTimeout(this.longTapTimeout), this.swipeTimeout && clearTimeout(this.swipeTimeout), this.element.removeEventListener("touchstart", this.start), this.element.removeEventListener("touchmove", this.move), this.element.removeEventListener("touchend", this.end), this.element.removeEventListener("touchcancel", this.cancel), this.rotate.del(), this.touchStart.del(), this.multipointStart.del(), this.multipointEnd.del(), this.pinch.del(), this.swipe.del(), this.tap.del(), this.doubleTap.del(), this.longTap.del(), this.singleTap.del(), this.pressMove.del(), this.twoFingerPressMove.del(), this.touchMove.del(), this.touchEnd.del(), this.touchCancel.del(), this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null, window.removeEventListener("scroll", this._cancelAllHandler), null
            }
        }]), e
    }();

    function W(e) {
        var t = function() {
                var e, t = document.createElement("fakeelement"),
                    i = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (e in i)
                    if (void 0 !== t.style[e]) return i[e]
            }(),
            i = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            n = c(e, "gslide-media") ? e : e.querySelector(".gslide-media"),
            s = u(n, ".ginner-container"),
            l = e.querySelector(".gslide-description");
        i > 769 && (n = s), h(n, "greset"), v(n, "translate3d(0, 0, 0)"), a(t, {
            onElement: n,
            once: !0,
            withCallback: function(e, t) {
                d(n, "greset")
            }
        }), n.style.opacity = "", l && (l.style.opacity = "")
    }

    function B(e) {
        if (e.events.hasOwnProperty("touch")) return !1;
        var t, i, n, s = y(),
            l = s.width,
            o = s.height,
            r = !1,
            a = null,
            g = null,
            f = null,
            p = !1,
            m = 1,
            x = 1,
            b = !1,
            S = !1,
            w = null,
            T = null,
            C = null,
            k = null,
            E = 0,
            A = 0,
            L = !1,
            I = !1,
            O = {},
            P = {},
            M = 0,
            z = 0,
            X = document.getElementById("glightbox-slider"),
            Y = document.querySelector(".goverlay"),
            q = new _(X, {
                touchStart: function(t) {
                    if (r = !0, (c(t.targetTouches[0].target, "ginner-container") || u(t.targetTouches[0].target, ".gslide-desc") || "a" == t.targetTouches[0].target.nodeName.toLowerCase()) && (r = !1), u(t.targetTouches[0].target, ".gslide-inline") && !c(t.targetTouches[0].target.parentNode, "gslide-inline") && (r = !1), r) {
                        if (P = t.targetTouches[0], O.pageX = t.targetTouches[0].pageX, O.pageY = t.targetTouches[0].pageY, M = t.targetTouches[0].clientX, z = t.targetTouches[0].clientY, a = e.activeSlide, g = a.querySelector(".gslide-media"), n = a.querySelector(".gslide-inline"), f = null, c(g, "gslide-image") && (f = g.querySelector("img")), (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 769 && (g = a.querySelector(".ginner-container")), d(Y, "greset"), t.pageX > 20 && t.pageX < window.innerWidth - 20) return;
                        t.preventDefault()
                    }
                },
                touchMove: function(s) {
                    if (r && (P = s.targetTouches[0], !b && !S)) {
                        if (n && n.offsetHeight > o) {
                            var a = O.pageX - P.pageX;
                            if (Math.abs(a) <= 13) return !1
                        }
                        p = !0;
                        var h, d = s.targetTouches[0].clientX,
                            c = s.targetTouches[0].clientY,
                            u = M - d,
                            m = z - c;
                        if (Math.abs(u) > Math.abs(m) ? (L = !1, I = !0) : (I = !1, L = !0), t = P.pageX - O.pageX, E = 100 * t / l, i = P.pageY - O.pageY, A = 100 * i / o, L && f && (h = 1 - Math.abs(i) / o, Y.style.opacity = h, e.settings.touchFollowAxis && (E = 0)), I && (h = 1 - Math.abs(t) / l, g.style.opacity = h, e.settings.touchFollowAxis && (A = 0)), !f) return v(g, "translate3d(".concat(E, "%, 0, 0)"));
                        v(g, "translate3d(".concat(E, "%, ").concat(A, "%, 0)"))
                    }
                },
                touchEnd: function() {
                    if (r) {
                        if (p = !1, S || b) return C = w, void(k = T);
                        var t = Math.abs(parseInt(A)),
                            i = Math.abs(parseInt(E));
                        if (!(t > 29 && f)) return t < 29 && i < 25 ? (h(Y, "greset"), Y.style.opacity = 1, W(g)) : void 0;
                        e.close()
                    }
                },
                multipointEnd: function() {
                    setTimeout((function() {
                        b = !1
                    }), 50)
                },
                multipointStart: function() {
                    b = !0, m = x || 1
                },
                pinch: function(e) {
                    if (!f || p) return !1;
                    b = !0, f.scaleX = f.scaleY = m * e.zoom;
                    var t = m * e.zoom;
                    if (S = !0, t <= 1) return S = !1, t = 1, k = null, C = null, w = null, T = null, void f.setAttribute("style", "");
                    t > 4.5 && (t = 4.5), f.style.transform = "scale3d(".concat(t, ", ").concat(t, ", 1)"), x = t
                },
                pressMove: function(e) {
                    if (S && !b) {
                        var t = P.pageX - O.pageX,
                            i = P.pageY - O.pageY;
                        C && (t += C), k && (i += k), w = t, T = i;
                        var n = "translate3d(".concat(t, "px, ").concat(i, "px, 0)");
                        x && (n += " scale3d(".concat(x, ", ").concat(x, ", 1)")), v(f, n)
                    }
                },
                swipe: function(t) {
                    if (!S)
                        if (b) b = !1;
                        else {
                            if ("Left" == t.direction) {
                                if (e.index == e.elements.length - 1) return W(g);
                                e.nextSlide()
                            }
                            if ("Right" == t.direction) {
                                if (0 == e.index) return W(g);
                                e.prevSlide()
                            }
                        }
                }
            });
        e.events.touch = q
    }
    var H = function() {
            function e(i, n) {
                var s = this,
                    l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                if (t(this, e), this.img = i, this.slide = n, this.onclose = l, this.img.setZoomEvents) return !1;
                this.active = !1, this.zoomedIn = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.img.addEventListener("mousedown", (function(e) {
                    return s.dragStart(e)
                }), !1), this.img.addEventListener("mouseup", (function(e) {
                    return s.dragEnd(e)
                }), !1), this.img.addEventListener("mousemove", (function(e) {
                    return s.drag(e)
                }), !1), this.img.addEventListener("click", (function(e) {
                    return s.slide.classList.contains("dragging-nav") ? (s.zoomOut(), !1) : s.zoomedIn ? void(s.zoomedIn && !s.dragging && s.zoomOut()) : s.zoomIn()
                }), !1), this.img.setZoomEvents = !0
            }
            return n(e, [{
                key: "zoomIn",
                value: function() {
                    var e = this.widowWidth();
                    if (!(this.zoomedIn || e <= 768)) {
                        var t = this.img;
                        if (t.setAttribute("data-style", t.getAttribute("style")), t.style.maxWidth = t.naturalWidth + "px", t.style.maxHeight = t.naturalHeight + "px", t.naturalWidth > e) {
                            var i = e / 2 - t.naturalWidth / 2;
                            this.setTranslate(this.img.parentNode, i, 0)
                        }
                        this.slide.classList.add("zoomed"), this.zoomedIn = !0
                    }
                }
            }, {
                key: "zoomOut",
                value: function() {
                    this.img.parentNode.setAttribute("style", ""), this.img.setAttribute("style", this.img.getAttribute("data-style")), this.slide.classList.remove("zoomed"), this.zoomedIn = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.onclose && "function" == typeof this.onclose && this.onclose()
                }
            }, {
                key: "dragStart",
                value: function(e) {
                    e.preventDefault(), this.zoomedIn ? ("touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset), e.target === this.img && (this.active = !0, this.img.classList.add("dragging"))) : this.active = !1
                }
            }, {
                key: "dragEnd",
                value: function(e) {
                    var t = this;
                    e.preventDefault(), this.initialX = this.currentX, this.initialY = this.currentY, this.active = !1, setTimeout((function() {
                        t.dragging = !1, t.img.isDragging = !1, t.img.classList.remove("dragging")
                    }), 100)
                }
            }, {
                key: "drag",
                value: function(e) {
                    this.active && (e.preventDefault(), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.img.isDragging = !0, this.dragging = !0, this.setTranslate(this.img, this.currentX, this.currentY))
                }
            }, {
                key: "onMove",
                value: function(e) {
                    if (this.zoomedIn) {
                        var t = e.clientX - this.img.naturalWidth / 2,
                            i = e.clientY - this.img.naturalHeight / 2;
                        this.setTranslate(this.img, t, i)
                    }
                }
            }, {
                key: "setTranslate",
                value: function(e, t, i) {
                    e.style.transform = "translate3d(" + t + "px, " + i + "px, 0)"
                }
            }, {
                key: "widowWidth",
                value: function() {
                    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
                }
            }]), e
        }(),
        V = function() {
            function e() {
                var i = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                t(this, e);
                var s = n.dragEl,
                    l = n.toleranceX,
                    o = void 0 === l ? 40 : l,
                    r = n.toleranceY,
                    a = void 0 === r ? 65 : r,
                    h = n.slide,
                    d = void 0 === h ? null : h,
                    c = n.instance,
                    u = void 0 === c ? null : c;
                this.el = s, this.active = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.direction = null, this.lastDirection = null, this.toleranceX = o, this.toleranceY = a, this.toleranceReached = !1, this.dragContainer = this.el, this.slide = d, this.instance = u, this.el.addEventListener("mousedown", (function(e) {
                    return i.dragStart(e)
                }), !1), this.el.addEventListener("mouseup", (function(e) {
                    return i.dragEnd(e)
                }), !1), this.el.addEventListener("mousemove", (function(e) {
                    return i.drag(e)
                }), !1)
            }
            return n(e, [{
                key: "dragStart",
                value: function(e) {
                    if (this.slide.classList.contains("zoomed")) this.active = !1;
                    else {
                        "touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset);
                        var t = e.target.nodeName.toLowerCase();
                        e.target.classList.contains("nodrag") || u(e.target, ".nodrag") || -1 !== ["input", "select", "textarea", "button", "a"].indexOf(t) ? this.active = !1 : (e.preventDefault(), (e.target === this.el || "img" !== t && u(e.target, ".gslide-inline")) && (this.active = !0, this.el.classList.add("dragging"), this.dragContainer = u(e.target, ".ginner-container")))
                    }
                }
            }, {
                key: "dragEnd",
                value: function(e) {
                    var t = this;
                    e && e.preventDefault(), this.initialX = 0, this.initialY = 0, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.active = !1, this.doSlideChange && (this.instance.preventOutsideClick = !0, "right" == this.doSlideChange && this.instance.prevSlide(), "left" == this.doSlideChange && this.instance.nextSlide()), this.doSlideClose && this.instance.close(), this.toleranceReached || this.setTranslate(this.dragContainer, 0, 0, !0), setTimeout((function() {
                        t.instance.preventOutsideClick = !1, t.toleranceReached = !1, t.lastDirection = null, t.dragging = !1, t.el.isDragging = !1, t.el.classList.remove("dragging"), t.slide.classList.remove("dragging-nav"), t.dragContainer.style.transform = "", t.dragContainer.style.transition = ""
                    }), 100)
                }
            }, {
                key: "drag",
                value: function(e) {
                    if (this.active) {
                        e.preventDefault(), this.slide.classList.add("dragging-nav"), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.el.isDragging = !0, this.dragging = !0, this.doSlideChange = !1, this.doSlideClose = !1;
                        var t = Math.abs(this.currentX),
                            i = Math.abs(this.currentY);
                        if (t > 0 && t >= Math.abs(this.currentY) && (!this.lastDirection || "x" == this.lastDirection)) {
                            this.yOffset = 0, this.lastDirection = "x", this.setTranslate(this.dragContainer, this.currentX, 0);
                            var n = this.shouldChange();
                            if (!this.instance.settings.dragAutoSnap && n && (this.doSlideChange = n), this.instance.settings.dragAutoSnap && n) return this.instance.preventOutsideClick = !0, this.toleranceReached = !0, this.active = !1, this.instance.preventOutsideClick = !0, this.dragEnd(null), "right" == n && this.instance.prevSlide(), void("left" == n && this.instance.nextSlide())
                        }
                        if (this.toleranceY > 0 && i > 0 && i >= t && (!this.lastDirection || "y" == this.lastDirection)) {
                            this.xOffset = 0, this.lastDirection = "y", this.setTranslate(this.dragContainer, 0, this.currentY);
                            var s = this.shouldClose();
                            return !this.instance.settings.dragAutoSnap && s && (this.doSlideClose = !0), void(this.instance.settings.dragAutoSnap && s && this.instance.close())
                        }
                    }
                }
            }, {
                key: "shouldChange",
                value: function() {
                    var e = !1;
                    if (Math.abs(this.currentX) >= this.toleranceX) {
                        var t = this.currentX > 0 ? "right" : "left";
                        ("left" == t && this.slide !== this.slide.parentNode.lastChild || "right" == t && this.slide !== this.slide.parentNode.firstChild) && (e = t)
                    }
                    return e
                }
            }, {
                key: "shouldClose",
                value: function() {
                    var e = !1;
                    return Math.abs(this.currentY) >= this.toleranceY && (e = !0), e
                }
            }, {
                key: "setTranslate",
                value: function(e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    e.style.transition = n ? "all .2s ease" : "", e.style.transform = "translate3d(".concat(t, "px, ").concat(i, "px, 0)")
                }
            }]), e
        }();

    function j(e, t, i, n) {
        var s = e.querySelector(".gslide-media"),
            l = new Image,
            o = "gSlideTitle_" + i,
            r = "gSlideDesc_" + i;
        l.addEventListener("load", (function() {
            T(n) && n()
        }), !1), l.src = t.href, "" != t.sizes && "" != t.srcset && (l.sizes = t.sizes, l.srcset = t.srcset), l.alt = "", I(t.alt) || "" === t.alt || (l.alt = t.alt), "" !== t.title && l.setAttribute("aria-labelledby", o), "" !== t.description && l.setAttribute("aria-describedby", r), t.hasOwnProperty("_hasCustomWidth") && t._hasCustomWidth && (l.style.width = t.width), t.hasOwnProperty("_hasCustomHeight") && t._hasCustomHeight && (l.style.height = t.height), s.insertBefore(l, s.firstChild)
    }

    function F(e, t, i, n) {
        var s = this,
            l = e.querySelector(".ginner-container"),
            o = "gvideo" + i,
            r = e.querySelector(".gslide-media"),
            a = this.getAllPlayers();
        h(l, "gvideo-container"), r.insertBefore(m('<div class="gvideo-wrapper"></div>'), r.firstChild);
        var d = e.querySelector(".gvideo-wrapper");
        S(this.settings.plyr.css, "Plyr");
        var c = t.href,
            u = null == t ? void 0 : t.videoProvider,
            g = !1;
        r.style.maxWidth = t.width, S(this.settings.plyr.js, "Plyr", (function() {
            if (!u && c.match(/vimeo\.com\/([0-9]*)/) && (u = "vimeo"), !u && (c.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || c.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || c.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) && (u = "youtube"), "local" === u || !u) {
                u = "local";
                var l = '<video id="' + o + '" ';
                l += 'style="background:#000; max-width: '.concat(t.width, ';" '), l += 'preload="metadata" ', l += 'x-webkit-airplay="allow" ', l += "playsinline ", l += "controls ", l += 'class="gvideo-local">', l += '<source src="'.concat(c, '">'), g = m(l += "</video>")
            }
            var r = g || m('<div id="'.concat(o, '" data-plyr-provider="').concat(u, '" data-plyr-embed-id="').concat(c, '"></div>'));
            h(d, "".concat(u, "-video gvideo")), d.appendChild(r), d.setAttribute("data-id", o), d.setAttribute("data-index", i);
            var v = O(s.settings.plyr, "config") ? s.settings.plyr.config : {},
                f = new Plyr("#" + o, v);
            f.on("ready", (function(e) {
                a[o] = e.detail.plyr, T(n) && n()
            })), b((function() {
                return e.querySelector("iframe") && "true" == e.querySelector("iframe").dataset.ready
            }), (function() {
                s.resize(e)
            })), f.on("enterfullscreen", R), f.on("exitfullscreen", R)
        }))
    }

    function R(e) {
        var t = u(e.target, ".gslide-media");
        "enterfullscreen" === e.type && h(t, "fullscreen"), "exitfullscreen" === e.type && d(t, "fullscreen")
    }

    function G(e, t, i, n) {
        var s, l = this,
            o = e.querySelector(".gslide-media"),
            r = !(!O(t, "href") || !t.href) && t.href.split("#").pop().trim(),
            d = !(!O(t, "content") || !t.content) && t.content;
        if (d && (C(d) && (s = m('<div class="ginlined-content">'.concat(d, "</div>"))), k(d))) {
            "none" == d.style.display && (d.style.display = "block");
            var c = document.createElement("div");
            c.className = "ginlined-content", c.appendChild(d), s = c
        }
        if (r) {
            var u = document.getElementById(r);
            if (!u) return !1;
            var g = u.cloneNode(!0);
            g.style.height = t.height, g.style.maxWidth = t.width, h(g, "ginlined-content"), s = g
        }
        if (!s) return console.error("Unable to append inline slide content", t), !1;
        o.style.height = t.height, o.style.width = t.width, o.appendChild(s), this.events["inlineclose" + r] = a("click", {
            onElement: o.querySelectorAll(".gtrigger-close"),
            withCallback: function(e) {
                e.preventDefault(), l.close()
            }
        }), T(n) && n()
    }

    function Z(e, t, i, n) {
        var s = e.querySelector(".gslide-media"),
            l = function(e) {
                var t = e.url,
                    i = e.allow,
                    n = e.callback,
                    s = e.appendTo,
                    l = document.createElement("iframe");
                return l.className = "vimeo-video gvideo", l.src = t, l.style.width = "100%", l.style.height = "100%", i && l.setAttribute("allow", i), l.onload = function() {
                    l.onload = null, h(l, "node-ready"), T(n) && n()
                }, s && s.appendChild(l), l
            }({
                url: t.href,
                callback: n
            });
        s.parentNode.style.maxWidth = t.width, s.parentNode.style.height = t.height, s.appendChild(l)
    }
    var U = function() {
            function e() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                t(this, e), this.defaults = {
                    href: "",
                    sizes: "",
                    srcset: "",
                    title: "",
                    type: "",
                    videoProvider: "",
                    description: "",
                    alt: "",
                    descPosition: "bottom",
                    effect: "",
                    width: "",
                    height: "",
                    content: !1,
                    zoomable: !0,
                    draggable: !0
                }, L(i) && (this.defaults = l(this.defaults, i))
            }
            return n(e, [{
                key: "sourceType",
                value: function(e) {
                    var t = e;
                    if (null !== (e = e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/)) return "image";
                    if (e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) return "video";
                    if (e.match(/vimeo\.com\/([0-9]*)/)) return "video";
                    if (null !== e.match(/\.(mp4|ogg|webm|mov)/)) return "video";
                    if (null !== e.match(/\.(mp3|wav|wma|aac|ogg)/)) return "audio";
                    if (e.indexOf("#") > -1 && "" !== t.split("#").pop().trim()) return "inline";
                    return e.indexOf("goajax=true") > -1 ? "ajax" : "external"
                }
            }, {
                key: "parseConfig",
                value: function(e, t) {
                    var i = this,
                        n = l({
                            descPosition: t.descPosition
                        }, this.defaults);
                    if (L(e) && !k(e)) {
                        O(e, "type") || (O(e, "content") && e.content ? e.type = "inline" : O(e, "href") && (e.type = this.sourceType(e.href)));
                        var s = l(n, e);
                        return this.setSize(s, t), s
                    }
                    var r = "",
                        a = e.getAttribute("data-glightbox"),
                        h = e.nodeName.toLowerCase();
                    if ("a" === h && (r = e.href), "img" === h && (r = e.src, n.alt = e.alt), n.href = r, o(n, (function(s, l) {
                            O(t, l) && "width" !== l && (n[l] = t[l]);
                            var o = e.dataset[l];
                            I(o) || (n[l] = i.sanitizeValue(o))
                        })), n.content && (n.type = "inline"), !n.type && r && (n.type = this.sourceType(r)), I(a)) {
                        if (!n.title && "a" == h) {
                            var d = e.title;
                            I(d) || "" === d || (n.title = d)
                        }
                        if (!n.title && "img" == h) {
                            var c = e.alt;
                            I(c) || "" === c || (n.title = c)
                        }
                    } else {
                        var u = [];
                        o(n, (function(e, t) {
                            u.push(";\\s?" + t)
                        })), u = u.join("\\s?:|"), "" !== a.trim() && o(n, (function(e, t) {
                            var s = a,
                                l = new RegExp("s?" + t + "s?:s?(.*?)(" + u + "s?:|$)"),
                                o = s.match(l);
                            if (o && o.length && o[1]) {
                                var r = o[1].trim().replace(/;\s*$/, "");
                                n[t] = i.sanitizeValue(r)
                            }
                        }))
                    }
                    if (n.description && "." === n.description.substring(0, 1)) {
                        var g;
                        try {
                            g = document.querySelector(n.description).innerHTML
                        } catch (e) {
                            if (!(e instanceof DOMException)) throw e
                        }
                        g && (n.description = g)
                    }
                    if (!n.description) {
                        var v = e.querySelector(".glightbox-desc");
                        v && (n.description = v.innerHTML)
                    }
                    return this.setSize(n, t, e), this.slideConfig = n, n
                }
            }, {
                key: "setSize",
                value: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        n = "video" == e.type ? this.checkSize(t.videosWidth) : this.checkSize(t.width),
                        s = this.checkSize(t.height);
                    return e.width = O(e, "width") && "" !== e.width ? this.checkSize(e.width) : n, e.height = O(e, "height") && "" !== e.height ? this.checkSize(e.height) : s, i && "image" == e.type && (e._hasCustomWidth = !!i.dataset.width, e._hasCustomHeight = !!i.dataset.height), e
                }
            }, {
                key: "checkSize",
                value: function(e) {
                    return M(e) ? "".concat(e, "px") : e
                }
            }, {
                key: "sanitizeValue",
                value: function(e) {
                    return "true" !== e && "false" !== e ? e : "true" === e
                }
            }]), e
        }(),
        $ = function() {
            function e(i, n, s) {
                t(this, e), this.element = i, this.instance = n, this.index = s
            }
            return n(e, [{
                key: "setContent",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (c(t, "loaded")) return !1;
                    var n = this.instance.settings,
                        s = this.slideConfig,
                        l = w();
                    T(n.beforeSlideLoad) && n.beforeSlideLoad({
                        index: this.index,
                        slide: t,
                        player: !1
                    });
                    var o = s.type,
                        r = s.descPosition,
                        a = t.querySelector(".gslide-media"),
                        d = t.querySelector(".gslide-title"),
                        u = t.querySelector(".gslide-desc"),
                        g = t.querySelector(".gdesc-inner"),
                        v = i,
                        f = "gSlideTitle_" + this.index,
                        p = "gSlideDesc_" + this.index;
                    if (T(n.afterSlideLoad) && (v = function() {
                            T(i) && i(), n.afterSlideLoad({
                                index: e.index,
                                slide: t,
                                player: e.instance.getSlidePlayerInstance(e.index)
                            })
                        }), "" == s.title && "" == s.description ? g && g.parentNode.parentNode.removeChild(g.parentNode) : (d && "" !== s.title ? (d.id = f, d.innerHTML = s.title) : d.parentNode.removeChild(d), u && "" !== s.description ? (u.id = p, l && n.moreLength > 0 ? (s.smallDescription = this.slideShortDesc(s.description, n.moreLength, n.moreText), u.innerHTML = s.smallDescription, this.descriptionEvents(u, s)) : u.innerHTML = s.description) : u.parentNode.removeChild(u), h(a.parentNode, "desc-".concat(r)), h(g.parentNode, "description-".concat(r))), h(a, "gslide-".concat(o)), h(t, "loaded"), "video" !== o) {
                        if ("external" !== o) return "inline" === o ? (G.apply(this.instance, [t, s, this.index, v]), void(s.draggable && new V({
                            dragEl: t.querySelector(".gslide-inline"),
                            toleranceX: n.dragToleranceX,
                            toleranceY: n.dragToleranceY,
                            slide: t,
                            instance: this.instance
                        }))) : void("image" !== o ? T(v) && v() : j(t, s, this.index, (function() {
                            var i = t.querySelector("img");
                            s.draggable && new V({
                                dragEl: i,
                                toleranceX: n.dragToleranceX,
                                toleranceY: n.dragToleranceY,
                                slide: t,
                                instance: e.instance
                            }), s.zoomable && i.naturalWidth > i.offsetWidth && (h(i, "zoomable"), new H(i, t, (function() {
                                e.instance.resize()
                            }))), T(v) && v()
                        })));
                        Z.apply(this, [t, s, this.index, v])
                    } else F.apply(this.instance, [t, s, this.index, v])
                }
            }, {
                key: "slideShortDesc",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50,
                        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = document.createElement("div");
                    n.innerHTML = e;
                    var s = n.innerText,
                        l = i;
                    if ((e = s.trim()).length <= t) return e;
                    var o = e.substr(0, t - 1);
                    return l ? (n = null, o + '... <a href="#" class="desc-more">' + i + "</a>") : o
                }
            }, {
                key: "descriptionEvents",
                value: function(e, t) {
                    var i = this,
                        n = e.querySelector(".desc-more");
                    if (!n) return !1;
                    a("click", {
                        onElement: n,
                        withCallback: function(e, n) {
                            e.preventDefault();
                            var s = document.body,
                                l = u(n, ".gslide-desc");
                            if (!l) return !1;
                            l.innerHTML = t.description, h(s, "gdesc-open");
                            var o = a("click", {
                                onElement: [s, u(l, ".gslide-description")],
                                withCallback: function(e, n) {
                                    "a" !== e.target.nodeName.toLowerCase() && (d(s, "gdesc-open"), h(s, "gdesc-closed"), l.innerHTML = t.smallDescription, i.descriptionEvents(l, t), setTimeout((function() {
                                        d(s, "gdesc-closed")
                                    }), 400), o.destroy())
                                }
                            })
                        }
                    })
                }
            }, {
                key: "create",
                value: function() {
                    return m(this.instance.settings.slideHTML)
                }
            }, {
                key: "getConfig",
                value: function() {
                    k(this.element) || this.element.hasOwnProperty("draggable") || (this.element.draggable = this.instance.settings.draggable);
                    var e = new U(this.instance.settings.slideExtraAttributes);
                    return this.slideConfig = e.parseConfig(this.element, this.instance.settings), this.slideConfig
                }
            }]), e
        }(),
        J = w(),
        K = null !== w() || void 0 !== document.createTouch || "ontouchstart" in window || "onmsgesturechange" in window || navigator.msMaxTouchPoints,
        Q = document.getElementsByTagName("html")[0],
        ee = {
            selector: ".glightbox",
            elements: null,
            skin: "clean",
            theme: "clean",
            closeButton: !0,
            startAt: null,
            autoplayVideos: !0,
            autofocusVideos: !0,
            descPosition: "bottom",
            width: "900px",
            height: "506px",
            videosWidth: "960px",
            beforeSlideChange: null,
            afterSlideChange: null,
            beforeSlideLoad: null,
            afterSlideLoad: null,
            slideInserted: null,
            slideRemoved: null,
            slideExtraAttributes: null,
            onOpen: null,
            onClose: null,
            loop: !1,
            zoomable: !0,
            draggable: !0,
            dragAutoSnap: !1,
            dragToleranceX: 40,
            dragToleranceY: 65,
            preload: !0,
            oneSlidePerOpen: !1,
            touchNavigation: !0,
            touchFollowAxis: !0,
            keyboardNavigation: !0,
            closeOnOutsideClick: !0,
            plugins: !1,
            plyr: {
                css: "https://cdn.plyr.io/3.6.12/plyr.css",
                js: "https://cdn.plyr.io/3.6.12/plyr.js",
                config: {
                    ratio: "16:9",
                    fullscreen: {
                        enabled: !0,
                        iosNative: !0
                    },
                    youtube: {
                        noCookie: !0,
                        rel: 0,
                        showinfo: 0,
                        iv_load_policy: 3
                    },
                    vimeo: {
                        byline: !1,
                        portrait: !1,
                        title: !1,
                        transparent: !1
                    }
                }
            },
            openEffect: "zoom",
            closeEffect: "zoom",
            slideEffect: "slide",
            moreText: "See more",
            moreLength: 60,
            cssEfects: {
                fade: { in: "fadeIn",
                    out: "fadeOut"
                },
                zoom: { in: "zoomIn",
                    out: "zoomOut"
                },
                slide: { in: "slideInRight",
                    out: "slideOutLeft"
                },
                slideBack: { in: "slideInLeft",
                    out: "slideOutRight"
                },
                none: { in: "none",
                    out: "none"
                }
            },
            svg: {
                close: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
                next: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
                prev: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
            },
            slideHTML: '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
            lightboxHTML: '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>'
        },
        te = function() {
            function e() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                t(this, e), this.customOptions = i, this.settings = l(ee, i), this.effectsClasses = this.getAnimationClasses(), this.videoPlayers = {}, this.apiEvents = [], this.fullElementsList = !1
            }
            return n(e, [{
                key: "init",
                value: function() {
                    var e = this,
                        t = this.getSelector();
                    t && (this.baseEvents = a("click", {
                        onElement: t,
                        withCallback: function(t, i) {
                            t.preventDefault(), e.open(i)
                        }
                    })), this.elements = this.getElements()
                }
            }, {
                key: "open",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (0 === this.elements.length) return !1;
                    this.activeSlide = null, this.prevActiveSlideIndex = null, this.prevActiveSlide = null;
                    var i = M(t) ? t : this.settings.startAt;
                    if (k(e)) {
                        var n = e.getAttribute("data-gallery");
                        n && (this.fullElementsList = this.elements, this.elements = this.getGalleryElements(this.elements, n)), I(i) && (i = this.getElementIndex(e)) < 0 && (i = 0)
                    }
                    M(i) || (i = 0), this.build(), g(this.overlay, "none" === this.settings.openEffect ? "none" : this.settings.cssEfects.fade.in);
                    var s = document.body,
                        l = window.innerWidth - document.documentElement.clientWidth;
                    if (l > 0) {
                        var o = document.createElement("style");
                        o.type = "text/css", o.className = "gcss-styles", o.innerText = ".gscrollbar-fixer {margin-right: ".concat(l, "px}"), document.head.appendChild(o), h(s, "gscrollbar-fixer")
                    }
                    h(s, "glightbox-open"), h(Q, "glightbox-open"), J && (h(document.body, "glightbox-mobile"), this.settings.slideEffect = "slide"), this.showSlide(i, !0), 1 === this.elements.length ? (h(this.prevButton, "glightbox-button-hidden"), h(this.nextButton, "glightbox-button-hidden")) : (d(this.prevButton, "glightbox-button-hidden"), d(this.nextButton, "glightbox-button-hidden")), this.lightboxOpen = !0, this.trigger("open"), T(this.settings.onOpen) && this.settings.onOpen(), K && this.settings.touchNavigation && B(this), this.settings.keyboardNavigation && X(this)
                }
            }, {
                key: "openAt",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.open(null, e)
                }
            }, {
                key: "showSlide",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    f(this.loader), this.index = parseInt(t);
                    var n = this.slidesContainer.querySelector(".current");
                    n && d(n, "current"), this.slideAnimateOut();
                    var s = this.slidesContainer.querySelectorAll(".gslide")[t];
                    if (c(s, "loaded")) this.slideAnimateIn(s, i), p(this.loader);
                    else {
                        f(this.loader);
                        var l = this.elements[t],
                            o = {
                                index: this.index,
                                slide: s,
                                slideNode: s,
                                slideConfig: l.slideConfig,
                                slideIndex: this.index,
                                trigger: l.node,
                                player: null
                            };
                        this.trigger("slide_before_load", o), l.instance.setContent(s, (function() {
                            p(e.loader), e.resize(), e.slideAnimateIn(s, i), e.trigger("slide_after_load", o)
                        }))
                    }
                    this.slideDescription = s.querySelector(".gslide-description"), this.slideDescriptionContained = this.slideDescription && c(this.slideDescription.parentNode, "gslide-media"), this.settings.preload && (this.preloadSlide(t + 1), this.preloadSlide(t - 1)), this.updateNavigationClasses(), this.activeSlide = s
                }
            }, {
                key: "preloadSlide",
                value: function(e) {
                    var t = this;
                    if (e < 0 || e > this.elements.length - 1) return !1;
                    if (I(this.elements[e])) return !1;
                    var i = this.slidesContainer.querySelectorAll(".gslide")[e];
                    if (c(i, "loaded")) return !1;
                    var n = this.elements[e],
                        s = n.type,
                        l = {
                            index: e,
                            slide: i,
                            slideNode: i,
                            slideConfig: n.slideConfig,
                            slideIndex: e,
                            trigger: n.node,
                            player: null
                        };
                    this.trigger("slide_before_load", l), "video" === s || "external" === s ? setTimeout((function() {
                        n.instance.setContent(i, (function() {
                            t.trigger("slide_after_load", l)
                        }))
                    }), 200) : n.instance.setContent(i, (function() {
                        t.trigger("slide_after_load", l)
                    }))
                }
            }, {
                key: "prevSlide",
                value: function() {
                    this.goToSlide(this.index - 1)
                }
            }, {
                key: "nextSlide",
                value: function() {
                    this.goToSlide(this.index + 1)
                }
            }, {
                key: "goToSlide",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (this.prevActiveSlide = this.activeSlide, this.prevActiveSlideIndex = this.index, !this.loop() && (e < 0 || e > this.elements.length - 1)) return !1;
                    e < 0 ? e = this.elements.length - 1 : e >= this.elements.length && (e = 0), this.showSlide(e)
                }
            }, {
                key: "insertSlide",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                    t < 0 && (t = this.elements.length);
                    var i = new $(e, this, t),
                        n = i.getConfig(),
                        s = l({}, n),
                        o = i.create(),
                        r = this.elements.length - 1;
                    s.index = t, s.node = !1, s.instance = i, s.slideConfig = n, this.elements.splice(t, 0, s);
                    var a = null,
                        h = null;
                    if (this.slidesContainer) {
                        if (t > r) this.slidesContainer.appendChild(o);
                        else {
                            var d = this.slidesContainer.querySelectorAll(".gslide")[t];
                            this.slidesContainer.insertBefore(o, d)
                        }(this.settings.preload && 0 == this.index && 0 == t || this.index - 1 == t || this.index + 1 == t) && this.preloadSlide(t), 0 === this.index && 0 === t && (this.index = 1), this.updateNavigationClasses(), a = this.slidesContainer.querySelectorAll(".gslide")[t], h = this.getSlidePlayerInstance(t), s.slideNode = a
                    }
                    this.trigger("slide_inserted", {
                        index: t,
                        slide: a,
                        slideNode: a,
                        slideConfig: n,
                        slideIndex: t,
                        trigger: null,
                        player: h
                    }), T(this.settings.slideInserted) && this.settings.slideInserted({
                        index: t,
                        slide: a,
                        player: h
                    })
                }
            }, {
                key: "removeSlide",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                    if (e < 0 || e > this.elements.length - 1) return !1;
                    var t = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[e];
                    t && (this.getActiveSlideIndex() == e && (e == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()), t.parentNode.removeChild(t)), this.elements.splice(e, 1), this.trigger("slide_removed", e), T(this.settings.slideRemoved) && this.settings.slideRemoved(e)
                }
            }, {
                key: "slideAnimateIn",
                value: function(e, t) {
                    var i = this,
                        n = e.querySelector(".gslide-media"),
                        s = e.querySelector(".gslide-description"),
                        l = {
                            index: this.prevActiveSlideIndex,
                            slide: this.prevActiveSlide,
                            slideNode: this.prevActiveSlide,
                            slideIndex: this.prevActiveSlide,
                            slideConfig: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                            trigger: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                        },
                        o = {
                            index: this.index,
                            slide: this.activeSlide,
                            slideNode: this.activeSlide,
                            slideConfig: this.elements[this.index].slideConfig,
                            slideIndex: this.index,
                            trigger: this.elements[this.index].node,
                            player: this.getSlidePlayerInstance(this.index)
                        };
                    if (n.offsetWidth > 0 && s && (p(s), s.style.display = ""), d(e, this.effectsClasses), t) g(e, this.settings.cssEfects[this.settings.openEffect].in, (function() {
                        i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                            prev: l,
                            current: o
                        }), T(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [l, o])
                    }));
                    else {
                        var r = this.settings.slideEffect,
                            a = "none" !== r ? this.settings.cssEfects[r].in : r;
                        this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (a = this.settings.cssEfects.slideBack.in), g(e, a, (function() {
                            i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                                prev: l,
                                current: o
                            }), T(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [l, o])
                        }))
                    }
                    setTimeout((function() {
                        i.resize(e)
                    }), 100), h(e, "current")
                }
            }, {
                key: "slideAnimateOut",
                value: function() {
                    if (!this.prevActiveSlide) return !1;
                    var e = this.prevActiveSlide;
                    d(e, this.effectsClasses), h(e, "prev");
                    var t = this.settings.slideEffect,
                        i = "none" !== t ? this.settings.cssEfects[t].out : t;
                    this.slidePlayerPause(e), this.trigger("slide_before_change", {
                        prev: {
                            index: this.prevActiveSlideIndex,
                            slide: this.prevActiveSlide,
                            slideNode: this.prevActiveSlide,
                            slideIndex: this.prevActiveSlideIndex,
                            slideConfig: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                            trigger: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                        },
                        current: {
                            index: this.index,
                            slide: this.activeSlide,
                            slideNode: this.activeSlide,
                            slideIndex: this.index,
                            slideConfig: this.elements[this.index].slideConfig,
                            trigger: this.elements[this.index].node,
                            player: this.getSlidePlayerInstance(this.index)
                        }
                    }), T(this.settings.beforeSlideChange) && this.settings.beforeSlideChange.apply(this, [{
                        index: this.prevActiveSlideIndex,
                        slide: this.prevActiveSlide,
                        player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                    }, {
                        index: this.index,
                        slide: this.activeSlide,
                        player: this.getSlidePlayerInstance(this.index)
                    }]), this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (i = this.settings.cssEfects.slideBack.out), g(e, i, (function() {
                        var t = e.querySelector(".ginner-container"),
                            i = e.querySelector(".gslide-media"),
                            n = e.querySelector(".gslide-description");
                        t.style.transform = "", i.style.transform = "", d(i, "greset"), i.style.opacity = "", n && (n.style.opacity = ""), d(e, "prev")
                    }))
                }
            }, {
                key: "getAllPlayers",
                value: function() {
                    return this.videoPlayers
                }
            }, {
                key: "getSlidePlayerInstance",
                value: function(e) {
                    var t = "gvideo" + e,
                        i = this.getAllPlayers();
                    return !(!O(i, t) || !i[t]) && i[t]
                }
            }, {
                key: "stopSlideVideo",
                value: function(e) {
                    if (k(e)) {
                        var t = e.querySelector(".gvideo-wrapper");
                        t && (e = t.getAttribute("data-index"))
                    }
                    console.log("stopSlideVideo is deprecated, use slidePlayerPause");
                    var i = this.getSlidePlayerInstance(e);
                    i && i.playing && i.pause()
                }
            }, {
                key: "slidePlayerPause",
                value: function(e) {
                    if (k(e)) {
                        var t = e.querySelector(".gvideo-wrapper");
                        t && (e = t.getAttribute("data-index"))
                    }
                    var i = this.getSlidePlayerInstance(e);
                    i && i.playing && i.pause()
                }
            }, {
                key: "playSlideVideo",
                value: function(e) {
                    if (k(e)) {
                        var t = e.querySelector(".gvideo-wrapper");
                        t && (e = t.getAttribute("data-index"))
                    }
                    console.log("playSlideVideo is deprecated, use slidePlayerPlay");
                    var i = this.getSlidePlayerInstance(e);
                    i && !i.playing && i.play()
                }
            }, {
                key: "slidePlayerPlay",
                value: function(e) {
                    var t;
                    if (!J || null !== (t = this.settings.plyr.config) && void 0 !== t && t.muted) {
                        if (k(e)) {
                            var i = e.querySelector(".gvideo-wrapper");
                            i && (e = i.getAttribute("data-index"))
                        }
                        var n = this.getSlidePlayerInstance(e);
                        n && !n.playing && (n.play(), this.settings.autofocusVideos && n.elements.container.focus())
                    }
                }
            }, {
                key: "setElements",
                value: function(e) {
                    var t = this;
                    this.settings.elements = !1;
                    var i = [];
                    e && e.length && o(e, (function(e, n) {
                        var s = new $(e, t, n),
                            o = s.getConfig(),
                            r = l({}, o);
                        r.slideConfig = o, r.instance = s, r.index = n, i.push(r)
                    })), this.elements = i, this.lightboxOpen && (this.slidesContainer.innerHTML = "", this.elements.length && (o(this.elements, (function() {
                        var e = m(t.settings.slideHTML);
                        t.slidesContainer.appendChild(e)
                    })), this.showSlide(0, !0)))
                }
            }, {
                key: "getElementIndex",
                value: function(e) {
                    var t = !1;
                    return o(this.elements, (function(i, n) {
                        if (O(i, "node") && i.node == e) return t = n, !0
                    })), t
                }
            }, {
                key: "getElements",
                value: function() {
                    var e = this,
                        t = [];
                    this.elements = this.elements ? this.elements : [], !I(this.settings.elements) && E(this.settings.elements) && this.settings.elements.length && o(this.settings.elements, (function(i, n) {
                        var s = new $(i, e, n),
                            o = s.getConfig(),
                            r = l({}, o);
                        r.node = !1, r.index = n, r.instance = s, r.slideConfig = o, t.push(r)
                    }));
                    var i = !1;
                    return this.getSelector() && (i = document.querySelectorAll(this.getSelector())), i ? (o(i, (function(i, n) {
                        var s = new $(i, e, n),
                            o = s.getConfig(),
                            r = l({}, o);
                        r.node = i, r.index = n, r.instance = s, r.slideConfig = o, r.gallery = i.getAttribute("data-gallery"), t.push(r)
                    })), t) : t
                }
            }, {
                key: "getGalleryElements",
                value: function(e, t) {
                    return e.filter((function(e) {
                        return e.gallery == t
                    }))
                }
            }, {
                key: "getSelector",
                value: function() {
                    return !this.settings.elements && (this.settings.selector && "data-" == this.settings.selector.substring(0, 5) ? "*[".concat(this.settings.selector, "]") : this.settings.selector)
                }
            }, {
                key: "getActiveSlide",
                value: function() {
                    return this.slidesContainer.querySelectorAll(".gslide")[this.index]
                }
            }, {
                key: "getActiveSlideIndex",
                value: function() {
                    return this.index
                }
            }, {
                key: "getAnimationClasses",
                value: function() {
                    var e = [];
                    for (var t in this.settings.cssEfects)
                        if (this.settings.cssEfects.hasOwnProperty(t)) {
                            var i = this.settings.cssEfects[t];
                            e.push("g".concat(i.in)), e.push("g".concat(i.out))
                        }
                    return e.join(" ")
                }
            }, {
                key: "build",
                value: function() {
                    var e = this;
                    if (this.built) return !1;
                    var t = document.body.childNodes,
                        i = [];
                    o(t, (function(e) {
                        e.parentNode == document.body && "#" !== e.nodeName.charAt(0) && e.hasAttribute && !e.hasAttribute("aria-hidden") && (i.push(e), e.setAttribute("aria-hidden", "true"))
                    }));
                    var n = O(this.settings.svg, "next") ? this.settings.svg.next : "",
                        s = O(this.settings.svg, "prev") ? this.settings.svg.prev : "",
                        l = O(this.settings.svg, "close") ? this.settings.svg.close : "",
                        r = this.settings.lightboxHTML;
                    r = m(r = (r = (r = r.replace(/{nextSVG}/g, n)).replace(/{prevSVG}/g, s)).replace(/{closeSVG}/g, l)), document.body.appendChild(r);
                    var d = document.getElementById("glightbox-body");
                    this.modal = d;
                    var g = d.querySelector(".gclose");
                    this.prevButton = d.querySelector(".gprev"), this.nextButton = d.querySelector(".gnext"), this.overlay = d.querySelector(".goverlay"), this.loader = d.querySelector(".gloader"), this.slidesContainer = document.getElementById("glightbox-slider"), this.bodyHiddenChildElms = i, this.events = {}, h(this.modal, "glightbox-" + this.settings.skin), this.settings.closeButton && g && (this.events.close = a("click", {
                        onElement: g,
                        withCallback: function(t, i) {
                            t.preventDefault(), e.close()
                        }
                    })), g && !this.settings.closeButton && g.parentNode.removeChild(g), this.nextButton && (this.events.next = a("click", {
                        onElement: this.nextButton,
                        withCallback: function(t, i) {
                            t.preventDefault(), e.nextSlide()
                        }
                    })), this.prevButton && (this.events.prev = a("click", {
                        onElement: this.prevButton,
                        withCallback: function(t, i) {
                            t.preventDefault(), e.prevSlide()
                        }
                    })), this.settings.closeOnOutsideClick && (this.events.outClose = a("click", {
                        onElement: d,
                        withCallback: function(t, i) {
                            e.preventOutsideClick || c(document.body, "glightbox-mobile") || u(t.target, ".ginner-container") || u(t.target, ".gbtn") || c(t.target, "gnext") || c(t.target, "gprev") || e.close()
                        }
                    })), o(this.elements, (function(t, i) {
                        e.slidesContainer.appendChild(t.instance.create()), t.slideNode = e.slidesContainer.querySelectorAll(".gslide")[i]
                    })), K && h(document.body, "glightbox-touch"), this.events.resize = a("resize", {
                        onElement: window,
                        withCallback: function() {
                            e.resize()
                        }
                    }), this.built = !0
                }
            }, {
                key: "resize",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((e = e || this.activeSlide) && !c(e, "zoomed")) {
                        var t = y(),
                            i = e.querySelector(".gvideo-wrapper"),
                            n = e.querySelector(".gslide-image"),
                            s = this.slideDescription,
                            l = t.width,
                            o = t.height;
                        if (l <= 768 ? h(document.body, "glightbox-mobile") : d(document.body, "glightbox-mobile"), i || n) {
                            var r = !1;
                            if (s && (c(s, "description-bottom") || c(s, "description-top")) && !c(s, "gabsolute") && (r = !0), n)
                                if (l <= 768) n.querySelector("img");
                                else if (r) {
                                var a = s.offsetHeight,
                                    u = n.querySelector("img");
                                u.setAttribute("style", "max-height: calc(100vh - ".concat(a, "px)")), s.setAttribute("style", "max-width: ".concat(u.offsetWidth, "px;"))
                            }
                            if (i) {
                                var g = O(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "";
                                if (!g) {
                                    var v = i.clientWidth,
                                        f = i.clientHeight,
                                        p = v / f;
                                    g = "".concat(v / p, ":").concat(f / p)
                                }
                                var m = g.split(":"),
                                    x = this.settings.videosWidth,
                                    b = this.settings.videosWidth,
                                    S = (b = M(x) || -1 !== x.indexOf("px") ? parseInt(x) : -1 !== x.indexOf("vw") ? l * parseInt(x) / 100 : -1 !== x.indexOf("vh") ? o * parseInt(x) / 100 : -1 !== x.indexOf("%") ? l * parseInt(x) / 100 : parseInt(i.clientWidth)) / (parseInt(m[0]) / parseInt(m[1]));
                                if (S = Math.floor(S), r && (o -= s.offsetHeight), b > l || S > o || o < S && l > b) {
                                    var w = i.offsetWidth,
                                        T = i.offsetHeight,
                                        C = o / T,
                                        k = {
                                            width: w * C,
                                            height: T * C
                                        };
                                    i.parentNode.setAttribute("style", "max-width: ".concat(k.width, "px")), r && s.setAttribute("style", "max-width: ".concat(k.width, "px;"))
                                } else i.parentNode.style.maxWidth = "".concat(x), r && s.setAttribute("style", "max-width: ".concat(x, ";"))
                            }
                        }
                    }
                }
            }, {
                key: "reload",
                value: function() {
                    this.init()
                }
            }, {
                key: "updateNavigationClasses",
                value: function() {
                    var e = this.loop();
                    d(this.nextButton, "disabled"), d(this.prevButton, "disabled"), 0 == this.index && this.elements.length - 1 == 0 ? (h(this.prevButton, "disabled"), h(this.nextButton, "disabled")) : 0 !== this.index || e ? this.index !== this.elements.length - 1 || e || h(this.nextButton, "disabled") : h(this.prevButton, "disabled")
                }
            }, {
                key: "loop",
                value: function() {
                    var e = O(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
                    return e = O(this.settings, "loop") ? this.settings.loop : e, e
                }
            }, {
                key: "close",
                value: function() {
                    var e = this;
                    if (!this.lightboxOpen) {
                        if (this.events) {
                            for (var t in this.events) this.events.hasOwnProperty(t) && this.events[t].destroy();
                            this.events = null
                        }
                        return !1
                    }
                    if (this.closing) return !1;
                    this.closing = !0, this.slidePlayerPause(this.activeSlide), this.fullElementsList && (this.elements = this.fullElementsList), this.bodyHiddenChildElms.length && o(this.bodyHiddenChildElms, (function(e) {
                        e.removeAttribute("aria-hidden")
                    })), h(this.modal, "glightbox-closing"), g(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.out), g(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, (function() {
                        if (e.activeSlide = null, e.prevActiveSlideIndex = null, e.prevActiveSlide = null, e.built = !1, e.events) {
                            for (var t in e.events) e.events.hasOwnProperty(t) && e.events[t].destroy();
                            e.events = null
                        }
                        var i = document.body;
                        d(Q, "glightbox-open"), d(i, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"), e.modal.parentNode.removeChild(e.modal), e.trigger("close"), T(e.settings.onClose) && e.settings.onClose();
                        var n = document.querySelector(".gcss-styles");
                        n && n.parentNode.removeChild(n), e.lightboxOpen = !1, e.closing = null
                    }))
                }
            }, {
                key: "destroy",
                value: function() {
                    this.close(), this.clearAllEvents(), this.baseEvents && this.baseEvents.destroy()
                }
            }, {
                key: "on",
                value: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (!e || !T(t)) throw new TypeError("Event name and callback must be defined");
                    this.apiEvents.push({
                        evt: e,
                        once: i,
                        callback: t
                    })
                }
            }, {
                key: "once",
                value: function(e, t) {
                    this.on(e, t, !0)
                }
            }, {
                key: "trigger",
                value: function(e) {
                    var t = this,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = [];
                    o(this.apiEvents, (function(t, s) {
                        var l = t.evt,
                            o = t.once,
                            r = t.callback;
                        l == e && (r(i), o && n.push(s))
                    })), n.length && o(n, (function(e) {
                        return t.apiEvents.splice(e, 1)
                    }))
                }
            }, {
                key: "clearAllEvents",
                value: function() {
                    this.apiEvents.splice(0, this.apiEvents.length)
                }
            }, {
                key: "version",
                value: function() {
                    return "3.1.0"
                }
            }]), e
        }();
    return function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = new te(e);
        return t.init(), t
    }
}));


/*
 *
 * gmaps.js
 *
 */
"use strict";
! function(e, t) {
    "object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define(["jquery", "googlemaps!"], t) : e.GMaps = t()
}(this, function() {
    var t = function(e, t) {
            var o;
            if (e === t) return e;
            for (o in t) void 0 !== t[o] && (e[o] = t[o]);
            return e
        },
        o = function(e, t) {
            var o, n = Array.prototype.slice.call(arguments, 2),
                r = [],
                i = e.length;
            if (Array.prototype.map && e.map === Array.prototype.map) r = Array.prototype.map.call(e, function(e) {
                var o = n.slice(0);
                return o.splice(0, 0, e), t.apply(this, o)
            });
            else
                for (o = 0; i > o; o++) callback_params = n, callback_params.splice(0, 0, e[o]), r.push(t.apply(this, callback_params));
            return r
        },
        n = function(e) {
            var t, o = [];
            for (t = 0; t < e.length; t++) o = o.concat(e[t]);
            return o
        },
        r = function(e, t) {
            var o = e[0],
                n = e[1];
            return t && (o = e[1], n = e[0]), new google.maps.LatLng(o, n)
        },
        i = function(e, t) {
            var o;
            for (o = 0; o < e.length; o++) e[o] instanceof google.maps.LatLng || (e[o].length > 0 && "object" == typeof e[o][0] ? e[o] = i(e[o], t) : e[o] = r(e[o], t));
            return e
        },
        s = function(e, t) {
            var o, n = e.replace(".", "");
            return o = "jQuery" in this && t ? $("." + n, t)[0] : document.getElementsByClassName(n)[0]
        },
        a = function(e, t) {
            var o, e = e.replace("#", "");
            return o = "jQuery" in window && t ? $("#" + e, t)[0] : document.getElementById(e)
        },
        l = function(e) {
            var t = 0,
                o = 0;
            if (e.getBoundingClientRect) {
                var n = e.getBoundingClientRect(),
                    r = -(window.scrollX ? window.scrollX : window.pageXOffset),
                    i = -(window.scrollY ? window.scrollY : window.pageYOffset);
                return [n.left - r, n.top - i]
            }
            if (e.offsetParent)
                do t += e.offsetLeft, o += e.offsetTop; while (e = e.offsetParent);
            return [t, o]
        },
        p = function(e) {
            var o = document,
                n = function(e) {
                    if ("object" != typeof window.google || !window.google.maps) return "object" == typeof window.console && window.console.error && console.error("Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js."),
                        function() {};
                    if (!this) return new n(e);
                    e.zoom = e.zoom || 15, e.mapType = e.mapType || "roadmap";
                    var r, i = function(e, t) {
                            return void 0 === e ? t : e
                        },
                        p = this,
                        c = ["bounds_changed", "center_changed", "click", "dblclick", "drag", "dragend", "dragstart", "idle", "maptypeid_changed", "projection_changed", "resize", "tilesloaded", "zoom_changed"],
                        g = ["mousemove", "mouseout", "mouseover"],
                        h = ["el", "lat", "lng", "mapType", "width", "height", "markerClusterer", "enableNewStyle"],
                        u = e.el || e.div,
                        d = e.markerClusterer,
                        m = google.maps.MapTypeId[e.mapType.toUpperCase()],
                        f = new google.maps.LatLng(e.lat, e.lng),
                        y = i(e.zoomControl, !0),
                        v = e.zoomControlOpt || {
                            style: "DEFAULT",
                            position: "TOP_LEFT"
                        },
                        w = v.style || "DEFAULT",
                        k = v.position || "TOP_LEFT",
                        L = i(e.panControl, !0),
                        b = i(e.mapTypeControl, !0),
                        _ = i(e.scaleControl, !0),
                        M = i(e.streetViewControl, !0),
                        x = i(x, !0),
                        C = {},
                        O = {
                            zoom: this.zoom,
                            center: f,
                            mapTypeId: m
                        },
                        P = {
                            panControl: L,
                            zoomControl: y,
                            zoomControlOptions: {
                                style: google.maps.ZoomControlStyle[w],
                                position: google.maps.ControlPosition[k]
                            },
                            mapTypeControl: b,
                            scaleControl: _,
                            streetViewControl: M,
                            overviewMapControl: x
                        };
                    if ("string" == typeof e.el || "string" == typeof e.div ? u.indexOf("#") > -1 ? this.el = a(u, e.context) : this.el = s.apply(this, [u, e.context]) : this.el = u, "undefined" == typeof this.el || null === this.el) throw "No element defined.";
                    for (window.context_menu = window.context_menu || {}, window.context_menu[p.el.id] = {}, this.controls = [], this.overlays = [], this.layers = [], this.singleLayers = {}, this.markers = [], this.polylines = [], this.routes = [], this.polygons = [], this.infoWindow = null, this.overlay_el = null, this.zoom = e.zoom, this.registered_events = {}, this.el.style.width = e.width || this.el.scrollWidth || this.el.offsetWidth, this.el.style.height = e.height || this.el.scrollHeight || this.el.offsetHeight, google.maps.visualRefresh = e.enableNewStyle, r = 0; r < h.length; r++) delete e[h[r]];
                    for (1 != e.disableDefaultUI && (O = t(O, P)), C = t(O, e), r = 0; r < c.length; r++) delete C[c[r]];
                    for (r = 0; r < g.length; r++) delete C[g[r]];
                    this.map = new google.maps.Map(this.el, C), d && (this.markerClusterer = d.apply(this, [this.map]));
                    var T = function(e, t) {
                        var o = "",
                            n = window.context_menu[p.el.id][e];
                        for (var r in n)
                            if (n.hasOwnProperty(r)) {
                                var i = n[r];
                                o += '<li><a id="' + e + "_" + r + '" href="#">' + i.title + "</a></li>"
                            }
                        if (a("gmaps_context_menu")) {
                            var s = a("gmaps_context_menu");
                            s.innerHTML = o;
                            var r, c = s.getElementsByTagName("a"),
                                g = c.length;
                            for (r = 0; g > r; r++) {
                                var h = c[r],
                                    u = function(o) {
                                        o.preventDefault(), n[this.id.replace(e + "_", "")].action.apply(p, [t]), p.hideContextMenu()
                                    };
                                google.maps.event.clearListeners(h, "click"), google.maps.event.addDomListenerOnce(h, "click", u, !1)
                            }
                            var d = l.apply(this, [p.el]),
                                m = d[0] + t.pixel.x - 15,
                                f = d[1] + t.pixel.y - 15;
                            s.style.left = m + "px", s.style.top = f + "px"
                        }
                    };
                    this.buildContextMenu = function(e, t) {
                        if ("marker" === e) {
                            t.pixel = {};
                            var o = new google.maps.OverlayView;
                            o.setMap(p.map), o.draw = function() {
                                var n = o.getProjection(),
                                    r = t.marker.getPosition();
                                t.pixel = n.fromLatLngToContainerPixel(r), T(e, t)
                            }
                        } else T(e, t);
                        var n = a("gmaps_context_menu");
                        setTimeout(function() {
                            n.style.display = "block"
                        }, 0)
                    }, this.setContextMenu = function(e) {
                        window.context_menu[p.el.id][e.control] = {};
                        var t, n = o.createElement("ul");
                        for (t in e.options)
                            if (e.options.hasOwnProperty(t)) {
                                var r = e.options[t];
                                window.context_menu[p.el.id][e.control][r.name] = {
                                    title: r.title,
                                    action: r.action
                                }
                            }
                        n.id = "gmaps_context_menu", n.style.display = "none", n.style.position = "absolute", n.style.minWidth = "100px", n.style.background = "white", n.style.listStyle = "none", n.style.padding = "8px", n.style.boxShadow = "2px 2px 6px #ccc", a("gmaps_context_menu") || o.body.appendChild(n);
                        var i = a("gmaps_context_menu");
                        google.maps.event.addDomListener(i, "mouseout", function(e) {
                            e.relatedTarget && this.contains(e.relatedTarget) || window.setTimeout(function() {
                                i.style.display = "none"
                            }, 400)
                        }, !1)
                    }, this.hideContextMenu = function() {
                        var e = a("gmaps_context_menu");
                        e && (e.style.display = "none")
                    };
                    var z = function(t, o) {
                        google.maps.event.addListener(t, o, function(t) {
                            void 0 == t && (t = this), e[o].apply(this, [t]), p.hideContextMenu()
                        })
                    };
                    google.maps.event.addListener(this.map, "zoom_changed", this.hideContextMenu);
                    for (var S = 0; S < c.length; S++) {
                        var W = c[S];
                        W in e && z(this.map, W)
                    }
                    for (var S = 0; S < g.length; S++) {
                        var W = g[S];
                        W in e && z(this.map, W)
                    }
                    google.maps.event.addListener(this.map, "rightclick", function(t) {
                        e.rightclick && e.rightclick.apply(this, [t]), void 0 != window.context_menu[p.el.id].map && p.buildContextMenu("map", t)
                    }), this.refresh = function() {
                        google.maps.event.trigger(this.map, "resize")
                    }, this.fitZoom = function() {
                        var e, t = [],
                            o = this.markers.length;
                        for (e = 0; o > e; e++) "boolean" == typeof this.markers[e].visible && this.markers[e].visible && t.push(this.markers[e].getPosition());
                        this.fitLatLngBounds(t)
                    }, this.fitLatLngBounds = function(e) {
                        var t, o = e.length,
                            n = new google.maps.LatLngBounds;
                        for (t = 0; o > t; t++) n.extend(e[t]);
                        this.map.fitBounds(n)
                    }, this.setCenter = function(e, t, o) {
                        this.map.panTo(new google.maps.LatLng(e, t)), o && o()
                    }, this.getElement = function() {
                        return this.el
                    }, this.zoomIn = function(e) {
                        e = e || 1, this.zoom = this.map.getZoom() + e, this.map.setZoom(this.zoom)
                    }, this.zoomOut = function(e) {
                        e = e || 1, this.zoom = this.map.getZoom() - e, this.map.setZoom(this.zoom)
                    };
                    var R, I = [];
                    for (R in this.map) "function" != typeof this.map[R] || this[R] || I.push(R);
                    for (r = 0; r < I.length; r++) ! function(e, t, o) {
                        e[o] = function() {
                            return t[o].apply(t, arguments)
                        }
                    }(this, this.map, I[r])
                };
            return n
        }(this);
    p.prototype.createControl = function(e) {
        var t = document.createElement("div");
        t.style.cursor = "pointer", e.disableDefaultStyles !== !0 && (t.style.fontFamily = "Roboto, Arial, sans-serif", t.style.fontSize = "11px", t.style.boxShadow = "rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px");
        for (var o in e.style) t.style[o] = e.style[o];
        e.id && (t.id = e.id), e.title && (t.title = e.title), e.classes && (t.className = e.classes), e.content && ("string" == typeof e.content ? t.innerHTML = e.content : e.content instanceof HTMLElement && t.appendChild(e.content)), e.position && (t.position = google.maps.ControlPosition[e.position.toUpperCase()]);
        for (var n in e.events) ! function(t, o) {
            google.maps.event.addDomListener(t, o, function() {
                e.events[o].apply(this, [this])
            })
        }(t, n);
        return t.index = 1, t
    }, p.prototype.addControl = function(e) {
        var t = this.createControl(e);
        return this.controls.push(t), this.map.controls[t.position].push(t), t
    }, p.prototype.removeControl = function(e) {
        var t, o = null;
        for (t = 0; t < this.controls.length; t++) this.controls[t] == e && (o = this.controls[t].position, this.controls.splice(t, 1));
        if (o)
            for (t = 0; t < this.map.controls.length; t++) {
                var n = this.map.controls[e.position];
                if (n.getAt(t) == e) {
                    n.removeAt(t);
                    break
                }
            }
        return e
    }, p.prototype.createMarker = function(e) {
        if (void 0 == e.lat && void 0 == e.lng && void 0 == e.position) throw "No latitude or longitude defined.";
        var o = this,
            n = e.details,
            r = e.fences,
            i = e.outside,
            s = {
                position: new google.maps.LatLng(e.lat, e.lng),
                map: null
            },
            a = t(s, e);
        delete a.lat, delete a.lng, delete a.fences, delete a.outside;
        var l = new google.maps.Marker(a);
        if (l.fences = r, e.infoWindow) {
            l.infoWindow = new google.maps.InfoWindow(e.infoWindow);
            for (var p = ["closeclick", "content_changed", "domready", "position_changed", "zindex_changed"], c = 0; c < p.length; c++) ! function(t, o) {
                e.infoWindow[o] && google.maps.event.addListener(t, o, function(t) {
                    e.infoWindow[o].apply(this, [t])
                })
            }(l.infoWindow, p[c])
        }
        for (var g = ["animation_changed", "clickable_changed", "cursor_changed", "draggable_changed", "flat_changed", "icon_changed", "position_changed", "shadow_changed", "shape_changed", "title_changed", "visible_changed", "zindex_changed"], h = ["dblclick", "drag", "dragend", "dragstart", "mousedown", "mouseout", "mouseover", "mouseup"], c = 0; c < g.length; c++) ! function(t, o) {
            e[o] && google.maps.event.addListener(t, o, function() {
                e[o].apply(this, [this])
            })
        }(l, g[c]);
        for (var c = 0; c < h.length; c++) ! function(t, o, n) {
            e[n] && google.maps.event.addListener(o, n, function(o) {
                o.pixel || (o.pixel = t.getProjection().fromLatLngToPoint(o.latLng)), e[n].apply(this, [o])
            })
        }(this.map, l, h[c]);
        return google.maps.event.addListener(l, "click", function() {
            this.details = n, e.click && e.click.apply(this, [this]), l.infoWindow && (o.hideInfoWindows(), l.infoWindow.open(o.map, l))
        }), google.maps.event.addListener(l, "rightclick", function(t) {
            t.marker = this, e.rightclick && e.rightclick.apply(this, [t]), void 0 != window.context_menu[o.el.id].marker && o.buildContextMenu("marker", t)
        }), l.fences && google.maps.event.addListener(l, "dragend", function() {
            o.checkMarkerGeofence(l, function(e, t) {
                i(e, t)
            })
        }), l
    }, p.prototype.addMarker = function(e) {
        var t;
        if (e.hasOwnProperty("gm_accessors_")) t = e;
        else {
            if (!(e.hasOwnProperty("lat") && e.hasOwnProperty("lng") || e.position)) throw "No latitude or longitude defined.";
            t = this.createMarker(e)
        }
        return t.setMap(this.map), this.markerClusterer && this.markerClusterer.addMarker(t), this.markers.push(t), p.fire("marker_added", t, this), t
    }, p.prototype.addMarkers = function(e) {
        for (var t, o = 0; t = e[o]; o++) this.addMarker(t);
        return this.markers
    }, p.prototype.hideInfoWindows = function() {
        for (var e, t = 0; e = this.markers[t]; t++) e.infoWindow && e.infoWindow.close()
    }, p.prototype.removeMarker = function(e) {
        for (var t = 0; t < this.markers.length; t++)
            if (this.markers[t] === e) {
                this.markers[t].setMap(null), this.markers.splice(t, 1), this.markerClusterer && this.markerClusterer.removeMarker(e), p.fire("marker_removed", e, this);
                break
            }
        return e
    }, p.prototype.removeMarkers = function(e) {
        var t = [];
        if ("undefined" == typeof e) {
            for (var o = 0; o < this.markers.length; o++) {
                var n = this.markers[o];
                n.setMap(null), p.fire("marker_removed", n, this)
            }
            this.markerClusterer && this.markerClusterer.clearMarkers && this.markerClusterer.clearMarkers(), this.markers = t
        } else {
            for (var o = 0; o < e.length; o++) {
                var r = this.markers.indexOf(e[o]);
                if (r > -1) {
                    var n = this.markers[r];
                    n.setMap(null), this.markerClusterer && this.markerClusterer.removeMarker(n), p.fire("marker_removed", n, this)
                }
            }
            for (var o = 0; o < this.markers.length; o++) {
                var n = this.markers[o];
                null != n.getMap() && t.push(n)
            }
            this.markers = t
        }
    }, p.prototype.drawOverlay = function(e) {
        var t = new google.maps.OverlayView,
            o = !0;
        return t.setMap(this.map), null != e.auto_show && (o = e.auto_show), t.onAdd = function() {
            var o = document.createElement("div");
            o.style.borderStyle = "none", o.style.borderWidth = "0px", o.style.position = "absolute", o.style.zIndex = 100, o.innerHTML = e.content, t.el = o, e.layer || (e.layer = "overlayLayer");
            var n = this.getPanes(),
                r = n[e.layer],
                i = ["contextmenu", "DOMMouseScroll", "dblclick", "mousedown"];
            r.appendChild(o);
            for (var s = 0; s < i.length; s++) ! function(e, t) {
                google.maps.event.addDomListener(e, t, function(e) {
                    -1 != navigator.userAgent.toLowerCase().indexOf("msie") && document.all ? (e.cancelBubble = !0, e.returnValue = !1) : e.stopPropagation()
                })
            }(o, i[s]);
            e.click && (n.overlayMouseTarget.appendChild(t.el), google.maps.event.addDomListener(t.el, "click", function() {
                e.click.apply(t, [t])
            })), google.maps.event.trigger(this, "ready")
        }, t.draw = function() {
            var n = this.getProjection(),
                r = n.fromLatLngToDivPixel(new google.maps.LatLng(e.lat, e.lng));
            e.horizontalOffset = e.horizontalOffset || 0, e.verticalOffset = e.verticalOffset || 0;
            var i = t.el,
                s = i.children[0],
                a = s.clientHeight,
                l = s.clientWidth;
            switch (e.verticalAlign) {
                case "top":
                    i.style.top = r.y - a + e.verticalOffset + "px";
                    break;
                default:
                case "middle":
                    i.style.top = r.y - a / 2 + e.verticalOffset + "px";
                    break;
                case "bottom":
                    i.style.top = r.y + e.verticalOffset + "px"
            }
            switch (e.horizontalAlign) {
                case "left":
                    i.style.left = r.x - l + e.horizontalOffset + "px";
                    break;
                default:
                case "center":
                    i.style.left = r.x - l / 2 + e.horizontalOffset + "px";
                    break;
                case "right":
                    i.style.left = r.x + e.horizontalOffset + "px"
            }
            i.style.display = o ? "block" : "none", o || e.show.apply(this, [i])
        }, t.onRemove = function() {
            var o = t.el;
            e.remove ? e.remove.apply(this, [o]) : (t.el.parentNode.removeChild(t.el), t.el = null)
        }, this.overlays.push(t), t
    }, p.prototype.removeOverlay = function(e) {
        for (var t = 0; t < this.overlays.length; t++)
            if (this.overlays[t] === e) {
                this.overlays[t].setMap(null), this.overlays.splice(t, 1);
                break
            }
    }, p.prototype.removeOverlays = function() {
        for (var e, t = 0; e = this.overlays[t]; t++) e.setMap(null);
        this.overlays = []
    }, p.prototype.drawPolyline = function(e) {
        var t = [],
            o = e.path;
        if (o.length)
            if (void 0 === o[0][0]) t = o;
            else
                for (var n, r = 0; n = o[r]; r++) t.push(new google.maps.LatLng(n[0], n[1]));
        var i = {
            map: this.map,
            path: t,
            strokeColor: e.strokeColor,
            strokeOpacity: e.strokeOpacity,
            strokeWeight: e.strokeWeight,
            geodesic: e.geodesic,
            clickable: !0,
            editable: !1,
            visible: !0
        };
        e.hasOwnProperty("clickable") && (i.clickable = e.clickable), e.hasOwnProperty("editable") && (i.editable = e.editable), e.hasOwnProperty("icons") && (i.icons = e.icons), e.hasOwnProperty("zIndex") && (i.zIndex = e.zIndex);
        for (var s = new google.maps.Polyline(i), a = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], l = 0; l < a.length; l++) ! function(t, o) {
            e[o] && google.maps.event.addListener(t, o, function(t) {
                e[o].apply(this, [t])
            })
        }(s, a[l]);
        return this.polylines.push(s), p.fire("polyline_added", s, this), s
    }, p.prototype.removePolyline = function(e) {
        for (var t = 0; t < this.polylines.length; t++)
            if (this.polylines[t] === e) {
                this.polylines[t].setMap(null), this.polylines.splice(t, 1), p.fire("polyline_removed", e, this);
                break
            }
    }, p.prototype.removePolylines = function() {
        for (var e, t = 0; e = this.polylines[t]; t++) e.setMap(null);
        this.polylines = []
    }, p.prototype.drawCircle = function(e) {
        e = t({
            map: this.map,
            center: new google.maps.LatLng(e.lat, e.lng)
        }, e), delete e.lat, delete e.lng;
        for (var o = new google.maps.Circle(e), n = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], r = 0; r < n.length; r++) ! function(t, o) {
            e[o] && google.maps.event.addListener(t, o, function(t) {
                e[o].apply(this, [t])
            })
        }(o, n[r]);
        return this.polygons.push(o), o
    }, p.prototype.drawRectangle = function(e) {
        e = t({
            map: this.map
        }, e);
        var o = new google.maps.LatLngBounds(new google.maps.LatLng(e.bounds[0][0], e.bounds[0][1]), new google.maps.LatLng(e.bounds[1][0], e.bounds[1][1]));
        e.bounds = o;
        for (var n = new google.maps.Rectangle(e), r = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], i = 0; i < r.length; i++) ! function(t, o) {
            e[o] && google.maps.event.addListener(t, o, function(t) {
                e[o].apply(this, [t])
            })
        }(n, r[i]);
        return this.polygons.push(n), n
    }, p.prototype.drawPolygon = function(e) {
        var r = !1;
        e.hasOwnProperty("useGeoJSON") && (r = e.useGeoJSON), delete e.useGeoJSON, e = t({
            map: this.map
        }, e), 0 == r && (e.paths = [e.paths.slice(0)]), e.paths.length > 0 && e.paths[0].length > 0 && (e.paths = n(o(e.paths, i, r)));
        for (var s = new google.maps.Polygon(e), a = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], l = 0; l < a.length; l++) ! function(t, o) {
            e[o] && google.maps.event.addListener(t, o, function(t) {
                e[o].apply(this, [t])
            })
        }(s, a[l]);
        return this.polygons.push(s), p.fire("polygon_added", s, this), s
    }, p.prototype.removePolygon = function(e) {
        for (var t = 0; t < this.polygons.length; t++)
            if (this.polygons[t] === e) {
                this.polygons[t].setMap(null), this.polygons.splice(t, 1), p.fire("polygon_removed", e, this);
                break
            }
    }, p.prototype.removePolygons = function() {
        for (var e, t = 0; e = this.polygons[t]; t++) e.setMap(null);
        this.polygons = []
    }, p.prototype.getFromFusionTables = function(e) {
        var t = e.events;
        delete e.events;
        var o = e,
            n = new google.maps.FusionTablesLayer(o);
        for (var r in t) ! function(e, o) {
            google.maps.event.addListener(e, o, function(e) {
                t[o].apply(this, [e])
            })
        }(n, r);
        return this.layers.push(n), n
    }, p.prototype.loadFromFusionTables = function(e) {
        var t = this.getFromFusionTables(e);
        return t.setMap(this.map), t
    }, p.prototype.getFromKML = function(e) {
        var t = e.url,
            o = e.events;
        delete e.url, delete e.events;
        var n = e,
            r = new google.maps.KmlLayer(t, n);
        for (var i in o) ! function(e, t) {
            google.maps.event.addListener(e, t, function(e) {
                o[t].apply(this, [e])
            })
        }(r, i);
        return this.layers.push(r), r
    }, p.prototype.loadFromKML = function(e) {
        var t = this.getFromKML(e);
        return t.setMap(this.map), t
    }, p.prototype.addLayer = function(e, t) {
        t = t || {};
        var o;
        switch (e) {
            case "weather":
                this.singleLayers.weather = o = new google.maps.weather.WeatherLayer;
                break;
            case "clouds":
                this.singleLayers.clouds = o = new google.maps.weather.CloudLayer;
                break;
            case "traffic":
                this.singleLayers.traffic = o = new google.maps.TrafficLayer;
                break;
            case "transit":
                this.singleLayers.transit = o = new google.maps.TransitLayer;
                break;
            case "bicycling":
                this.singleLayers.bicycling = o = new google.maps.BicyclingLayer;
                break;
            case "panoramio":
                this.singleLayers.panoramio = o = new google.maps.panoramio.PanoramioLayer, o.setTag(t.filter), delete t.filter, t.click && google.maps.event.addListener(o, "click", function(e) {
                    t.click(e), delete t.click
                });
                break;
            case "places":
                if (this.singleLayers.places = o = new google.maps.places.PlacesService(this.map), t.search || t.nearbySearch || t.radarSearch) {
                    var n = {
                        bounds: t.bounds || null,
                        keyword: t.keyword || null,
                        location: t.location || null,
                        name: t.name || null,
                        radius: t.radius || null,
                        rankBy: t.rankBy || null,
                        types: t.types || null
                    };
                    t.radarSearch && o.radarSearch(n, t.radarSearch), t.search && o.search(n, t.search), t.nearbySearch && o.nearbySearch(n, t.nearbySearch)
                }
                if (t.textSearch) {
                    var r = {
                        bounds: t.bounds || null,
                        location: t.location || null,
                        query: t.query || null,
                        radius: t.radius || null
                    };
                    o.textSearch(r, t.textSearch)
                }
        }
        return void 0 !== o ? ("function" == typeof o.setOptions && o.setOptions(t), "function" == typeof o.setMap && o.setMap(this.map), o) : void 0
    }, p.prototype.removeLayer = function(e) {
        if ("string" == typeof e && void 0 !== this.singleLayers[e]) this.singleLayers[e].setMap(null), delete this.singleLayers[e];
        else
            for (var t = 0; t < this.layers.length; t++)
                if (this.layers[t] === e) {
                    this.layers[t].setMap(null), this.layers.splice(t, 1);
                    break
                }
    };
    var c, g;
    return p.prototype.getRoutes = function(e) {
        switch (e.travelMode) {
            case "bicycling":
                c = google.maps.TravelMode.BICYCLING;
                break;
            case "transit":
                c = google.maps.TravelMode.TRANSIT;
                break;
            case "driving":
                c = google.maps.TravelMode.DRIVING;
                break;
            default:
                c = google.maps.TravelMode.WALKING
        }
        g = "imperial" === e.unitSystem ? google.maps.UnitSystem.IMPERIAL : google.maps.UnitSystem.METRIC;
        var o = {
                avoidHighways: !1,
                avoidTolls: !1,
                optimizeWaypoints: !1,
                waypoints: []
            },
            n = t(o, e);
        n.origin = /string/.test(typeof e.origin) ? e.origin : new google.maps.LatLng(e.origin[0], e.origin[1]), n.destination = /string/.test(typeof e.destination) ? e.destination : new google.maps.LatLng(e.destination[0], e.destination[1]), n.travelMode = c, n.unitSystem = g, delete n.callback, delete n.error;
        var r = [],
            i = new google.maps.DirectionsService;
        i.route(n, function(t, o) {
            if (o === google.maps.DirectionsStatus.OK) {
                for (var n in t.routes) t.routes.hasOwnProperty(n) && r.push(t.routes[n]);
                e.callback && e.callback(r, t, o)
            } else e.error && e.error(t, o)
        })
    }, p.prototype.removeRoutes = function() {
        this.routes.length = 0
    }, p.prototype.getElevations = function(e) {
        e = t({
            locations: [],
            path: !1,
            samples: 256
        }, e), e.locations.length > 0 && e.locations[0].length > 0 && (e.locations = n(o([e.locations], i, !1)));
        var r = e.callback;
        delete e.callback;
        var s = new google.maps.ElevationService;
        if (e.path) {
            var a = {
                path: e.locations,
                samples: e.samples
            };
            s.getElevationAlongPath(a, function(e, t) {
                r && "function" == typeof r && r(e, t)
            })
        } else delete e.path, delete e.samples, s.getElevationForLocations(e, function(e, t) {
            r && "function" == typeof r && r(e, t)
        })
    }, p.prototype.cleanRoute = p.prototype.removePolylines, p.prototype.renderRoute = function(e, o) {
        var n, r = "string" == typeof o.panel ? document.getElementById(o.panel.replace("#", "")) : o.panel;
        o.panel = r, o = t({
            map: this.map
        }, o), n = new google.maps.DirectionsRenderer(o), this.getRoutes({
            origin: e.origin,
            destination: e.destination,
            travelMode: e.travelMode,
            waypoints: e.waypoints,
            unitSystem: e.unitSystem,
            error: e.error,
            avoidHighways: e.avoidHighways,
            avoidTolls: e.avoidTolls,
            optimizeWaypoints: e.optimizeWaypoints,
            callback: function(e, t, o) {
                o === google.maps.DirectionsStatus.OK && n.setDirections(t)
            }
        })
    }, p.prototype.drawRoute = function(e) {
        var t = this;
        this.getRoutes({
            origin: e.origin,
            destination: e.destination,
            travelMode: e.travelMode,
            waypoints: e.waypoints,
            unitSystem: e.unitSystem,
            error: e.error,
            avoidHighways: e.avoidHighways,
            avoidTolls: e.avoidTolls,
            optimizeWaypoints: e.optimizeWaypoints,
            callback: function(o) {
                if (o.length > 0) {
                    var n = {
                        path: o[o.length - 1].overview_path,
                        strokeColor: e.strokeColor,
                        strokeOpacity: e.strokeOpacity,
                        strokeWeight: e.strokeWeight
                    };
                    e.hasOwnProperty("icons") && (n.icons = e.icons), t.drawPolyline(n), e.callback && e.callback(o[o.length - 1])
                }
            }
        })
    }, p.prototype.travelRoute = function(e) {
        if (e.origin && e.destination) this.getRoutes({
            origin: e.origin,
            destination: e.destination,
            travelMode: e.travelMode,
            waypoints: e.waypoints,
            unitSystem: e.unitSystem,
            error: e.error,
            callback: function(t) {
                if (t.length > 0 && e.start && e.start(t[t.length - 1]), t.length > 0 && e.step) {
                    var o = t[t.length - 1];
                    if (o.legs.length > 0)
                        for (var n, r = o.legs[0].steps, i = 0; n = r[i]; i++) n.step_number = i, e.step(n, o.legs[0].steps.length - 1)
                }
                t.length > 0 && e.end && e.end(t[t.length - 1])
            }
        });
        else if (e.route && e.route.legs.length > 0)
            for (var t, o = e.route.legs[0].steps, n = 0; t = o[n]; n++) t.step_number = n, e.step(t)
    }, p.prototype.drawSteppedRoute = function(e) {
        var t = this;
        if (e.origin && e.destination) this.getRoutes({
            origin: e.origin,
            destination: e.destination,
            travelMode: e.travelMode,
            waypoints: e.waypoints,
            error: e.error,
            callback: function(o) {
                if (o.length > 0 && e.start && e.start(o[o.length - 1]), o.length > 0 && e.step) {
                    var n = o[o.length - 1];
                    if (n.legs.length > 0)
                        for (var r, i = n.legs[0].steps, s = 0; r = i[s]; s++) {
                            r.step_number = s;
                            var a = {
                                path: r.path,
                                strokeColor: e.strokeColor,
                                strokeOpacity: e.strokeOpacity,
                                strokeWeight: e.strokeWeight
                            };
                            e.hasOwnProperty("icons") && (a.icons = e.icons), t.drawPolyline(a), e.step(r, n.legs[0].steps.length - 1)
                        }
                }
                o.length > 0 && e.end && e.end(o[o.length - 1])
            }
        });
        else if (e.route && e.route.legs.length > 0)
            for (var o, n = e.route.legs[0].steps, r = 0; o = n[r]; r++) {
                o.step_number = r;
                var i = {
                    path: o.path,
                    strokeColor: e.strokeColor,
                    strokeOpacity: e.strokeOpacity,
                    strokeWeight: e.strokeWeight
                };
                e.hasOwnProperty("icons") && (i.icons = e.icons), t.drawPolyline(i), e.step(o)
            }
    }, p.Route = function(e) {
        this.origin = e.origin, this.destination = e.destination, this.waypoints = e.waypoints, this.map = e.map, this.route = e.route, this.step_count = 0, this.steps = this.route.legs[0].steps, this.steps_length = this.steps.length;
        var t = {
            path: new google.maps.MVCArray,
            strokeColor: e.strokeColor,
            strokeOpacity: e.strokeOpacity,
            strokeWeight: e.strokeWeight
        };
        e.hasOwnProperty("icons") && (t.icons = e.icons), this.polyline = this.map.drawPolyline(t).getPath()
    }, p.Route.prototype.getRoute = function(t) {
        var o = this;
        this.map.getRoutes({
            origin: this.origin,
            destination: this.destination,
            travelMode: t.travelMode,
            waypoints: this.waypoints || [],
            error: t.error,
            callback: function() {
                o.route = e[0], t.callback && t.callback.call(o)
            }
        })
    }, p.Route.prototype.back = function() {
        if (this.step_count > 0) {
            this.step_count--;
            var e = this.route.legs[0].steps[this.step_count].path;
            for (var t in e) e.hasOwnProperty(t) && this.polyline.pop()
        }
    }, p.Route.prototype.forward = function() {
        if (this.step_count < this.steps_length) {
            var e = this.route.legs[0].steps[this.step_count].path;
            for (var t in e) e.hasOwnProperty(t) && this.polyline.push(e[t]);
            this.step_count++
        }
    }, p.prototype.checkGeofence = function(e, t, o) {
        return o.containsLatLng(new google.maps.LatLng(e, t))
    }, p.prototype.checkMarkerGeofence = function(e, t) {
        if (e.fences)
            for (var o, n = 0; o = e.fences[n]; n++) {
                var r = e.getPosition();
                this.checkGeofence(r.lat(), r.lng(), o) || t(e, o)
            }
    }, p.prototype.toImage = function(e) {
        var e = e || {},
            t = {};
        if (t.size = e.size || [this.el.clientWidth, this.el.clientHeight], t.lat = this.getCenter().lat(), t.lng = this.getCenter().lng(), this.markers.length > 0) {
            t.markers = [];
            for (var o = 0; o < this.markers.length; o++) t.markers.push({
                lat: this.markers[o].getPosition().lat(),
                lng: this.markers[o].getPosition().lng()
            })
        }
        if (this.polylines.length > 0) {
            var n = this.polylines[0];
            t.polyline = {}, t.polyline.path = google.maps.geometry.encoding.encodePath(n.getPath()), t.polyline.strokeColor = n.strokeColor, t.polyline.strokeOpacity = n.strokeOpacity, t.polyline.strokeWeight = n.strokeWeight
        }
        return p.staticMapURL(t)
    }, p.staticMapURL = function(e) {
        function t(e, t) {
            if ("#" === e[0] && (e = e.replace("#", "0x"), t)) {
                if (t = parseFloat(t), t = Math.min(1, Math.max(t, 0)), 0 === t) return "0x00000000";
                t = (255 * t).toString(16), 1 === t.length && (t += t), e = e.slice(0, 8) + t
            }
            return e
        }
        var o, n = [],
            r = ("file:" === location.protocol ? "http:" : location.protocol) + "//maps.googleapis.com/maps/api/staticmap";
        e.url && (r = e.url, delete e.url), r += "?";
        var i = e.markers;
        delete e.markers, !i && e.marker && (i = [e.marker], delete e.marker);
        var s = e.styles;
        delete e.styles;
        var a = e.polyline;
        if (delete e.polyline, e.center) n.push("center=" + e.center), delete e.center;
        else if (e.address) n.push("center=" + e.address), delete e.address;
        else if (e.lat) n.push(["center=", e.lat, ",", e.lng].join("")), delete e.lat, delete e.lng;
        else if (e.visible) {
            var l = encodeURI(e.visible.join("|"));
            n.push("visible=" + l)
        }
        var p = e.size;
        p ? (p.join && (p = p.join("x")), delete e.size) : p = "630x300", n.push("size=" + p), e.zoom || e.zoom === !1 || (e.zoom = 15);
        var c = e.hasOwnProperty("sensor") ? !!e.sensor : !0;
        delete e.sensor, n.push("sensor=" + c);
        for (var g in e) e.hasOwnProperty(g) && n.push(g + "=" + e[g]);
        if (i)
            for (var h, u, d = 0; o = i[d]; d++) {
                h = [], o.size && "normal" !== o.size ? (h.push("size:" + o.size), delete o.size) : o.icon && (h.push("icon:" + encodeURI(o.icon)), delete o.icon), o.color && (h.push("color:" + o.color.replace("#", "0x")), delete o.color), o.label && (h.push("label:" + o.label[0].toUpperCase()), delete o.label), u = o.address ? o.address : o.lat + "," + o.lng, delete o.address, delete o.lat, delete o.lng;
                for (var g in o) o.hasOwnProperty(g) && h.push(g + ":" + o[g]);
                h.length || 0 === d ? (h.push(u), h = h.join("|"), n.push("markers=" + encodeURI(h))) : (h = n.pop() + encodeURI("|" + u), n.push(h))
            }
        if (s)
            for (var d = 0; d < s.length; d++) {
                var m = [];
                s[d].featureType && m.push("feature:" + s[d].featureType.toLowerCase()), s[d].elementType && m.push("element:" + s[d].elementType.toLowerCase());
                for (var f = 0; f < s[d].stylers.length; f++)
                    for (var y in s[d].stylers[f]) {
                        var v = s[d].stylers[f][y];
                        ("hue" == y || "color" == y) && (v = "0x" + v.substring(1)), m.push(y + ":" + v)
                    }
                var w = m.join("|");
                "" != w && n.push("style=" + w)
            }
        if (a) {
            if (o = a, a = [], o.strokeWeight && a.push("weight:" + parseInt(o.strokeWeight, 10)), o.strokeColor) {
                var k = t(o.strokeColor, o.strokeOpacity);
                a.push("color:" + k)
            }
            if (o.fillColor) {
                var L = t(o.fillColor, o.fillOpacity);
                a.push("fillcolor:" + L)
            }
            var b = o.path;
            if (b.join)
                for (var _, f = 0; _ = b[f]; f++) a.push(_.join(","));
            else a.push("enc:" + b);
            a = a.join("|"), n.push("path=" + encodeURI(a))
        }
        var M = window.devicePixelRatio || 1;
        return n.push("scale=" + M), n = n.join("&"), r + n
    }, p.prototype.addMapType = function(e, t) {
        if (!t.hasOwnProperty("getTileUrl") || "function" != typeof t.getTileUrl) throw "'getTileUrl' function required.";
        t.tileSize = t.tileSize || new google.maps.Size(256, 256);
        var o = new google.maps.ImageMapType(t);
        this.map.mapTypes.set(e, o)
    }, p.prototype.addOverlayMapType = function(e) {
        if (!e.hasOwnProperty("getTile") || "function" != typeof e.getTile) throw "'getTile' function required.";
        var t = e.index;
        delete e.index, this.map.overlayMapTypes.insertAt(t, e)
    }, p.prototype.removeOverlayMapType = function(e) {
        this.map.overlayMapTypes.removeAt(e)
    }, p.prototype.addStyle = function(e) {
        var t = new google.maps.StyledMapType(e.styles, {
            name: e.styledMapName
        });
        this.map.mapTypes.set(e.mapTypeId, t)
    }, p.prototype.setStyle = function(e) {
        this.map.setMapTypeId(e)
    }, p.prototype.createPanorama = function(e) {
        return e.hasOwnProperty("lat") && e.hasOwnProperty("lng") || (e.lat = this.getCenter().lat(), e.lng = this.getCenter().lng()), this.panorama = p.createPanorama(e), this.map.setStreetView(this.panorama), this.panorama
    }, p.createPanorama = function(e) {
        var o = a(e.el, e.context);
        e.position = new google.maps.LatLng(e.lat, e.lng), delete e.el, delete e.context, delete e.lat, delete e.lng;
        for (var n = ["closeclick", "links_changed", "pano_changed", "position_changed", "pov_changed", "resize", "visible_changed"], r = t({
                visible: !0
            }, e), i = 0; i < n.length; i++) delete r[n[i]];
        for (var s = new google.maps.StreetViewPanorama(o, r), i = 0; i < n.length; i++) ! function(t, o) {
            e[o] && google.maps.event.addListener(t, o, function() {
                e[o].apply(this)
            })
        }(s, n[i]);
        return s
    }, p.prototype.on = function(e, t) {
        return p.on(e, this, t)
    }, p.prototype.off = function(e) {
        p.off(e, this)
    }, p.prototype.once = function(e, t) {
        return p.once(e, this, t)
    }, p.custom_events = ["marker_added", "marker_removed", "polyline_added", "polyline_removed", "polygon_added", "polygon_removed", "geolocated", "geolocation_failed"], p.on = function(e, t, o) {
        if (-1 == p.custom_events.indexOf(e)) return t instanceof p && (t = t.map), google.maps.event.addListener(t, e, o);
        var n = {
            handler: o,
            eventName: e
        };
        return t.registered_events[e] = t.registered_events[e] || [], t.registered_events[e].push(n), n
    }, p.off = function(e, t) {
        -1 == p.custom_events.indexOf(e) ? (t instanceof p && (t = t.map), google.maps.event.clearListeners(t, e)) : t.registered_events[e] = []
    }, p.once = function(e, t, o) {
        return -1 == p.custom_events.indexOf(e) ? (t instanceof p && (t = t.map), google.maps.event.addListenerOnce(t, e, o)) : void 0
    }, p.fire = function(e, t, o) {
        if (-1 == p.custom_events.indexOf(e)) google.maps.event.trigger(t, e, Array.prototype.slice.apply(arguments).slice(2));
        else if (e in o.registered_events)
            for (var n = o.registered_events[e], r = 0; r < n.length; r++) ! function(e, t, o) {
                e.apply(t, [o])
            }(n[r].handler, o, t)
    }, p.geolocate = function(e) {
        var t = e.always || e.complete;
        navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(o) {
            e.success(o), t && t()
        }, function(o) {
            e.error(o), t && t()
        }, e.options) : (e.not_supported(), t && t())
    }, p.geocode = function(e) {
        this.geocoder = new google.maps.Geocoder;
        var t = e.callback;
        e.hasOwnProperty("lat") && e.hasOwnProperty("lng") && (e.latLng = new google.maps.LatLng(e.lat, e.lng)), delete e.lat, delete e.lng, delete e.callback, this.geocoder.geocode(e, function(e, o) {
            t(e, o)
        })
    }, "object" == typeof window.google && window.google.maps && (google.maps.Polygon.prototype.getBounds || (google.maps.Polygon.prototype.getBounds = function(e) {
        for (var t, o = new google.maps.LatLngBounds, n = this.getPaths(), r = 0; r < n.getLength(); r++) {
            t = n.getAt(r);
            for (var i = 0; i < t.getLength(); i++) o.extend(t.getAt(i))
        }
        return o
    }), google.maps.Polygon.prototype.containsLatLng || (google.maps.Polygon.prototype.containsLatLng = function(e) {
        var t = this.getBounds();
        if (null !== t && !t.contains(e)) return !1;
        for (var o = !1, n = this.getPaths().getLength(), r = 0; n > r; r++)
            for (var i = this.getPaths().getAt(r), s = i.getLength(), a = s - 1, l = 0; s > l; l++) {
                var p = i.getAt(l),
                    c = i.getAt(a);
                (p.lng() < e.lng() && c.lng() >= e.lng() || c.lng() < e.lng() && p.lng() >= e.lng()) && p.lat() + (e.lng() - p.lng()) / (c.lng() - p.lng()) * (c.lat() - p.lat()) < e.lat() && (o = !o), a = l
            }
        return o
    }), google.maps.Circle.prototype.containsLatLng || (google.maps.Circle.prototype.containsLatLng = function(e) {
        return google.maps.geometry ? google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(), e) <= this.getRadius() : !0
    }), google.maps.Rectangle.prototype.containsLatLng = function(e) {
        return this.getBounds().contains(e)
    }, google.maps.LatLngBounds.prototype.containsLatLng = function(e) {
        return this.contains(e)
    }, google.maps.Marker.prototype.setFences = function(e) {
        this.fences = e
    }, google.maps.Marker.prototype.addFence = function(e) {
        this.fences.push(e)
    }, google.maps.Marker.prototype.getId = function() {
        return this.__gm_id
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
        if (null == this) throw new TypeError;
        var t = Object(this),
            o = t.length >>> 0;
        if (0 === o) return -1;
        var n = 0;
        if (arguments.length > 1 && (n = Number(arguments[1]), n != n ? n = 0 : 0 != n && n != 1 / 0 && n != -(1 / 0) && (n = (n > 0 || -1) * Math.floor(Math.abs(n)))), n >= o) return -1;
        for (var r = n >= 0 ? n : Math.max(o - Math.abs(n), 0); o > r; r++)
            if (r in t && t[r] === e) return r;
        return -1
    }), p
});


/*! Copyright (c) 2016 THE ULTRASOFT (http://theultrasoft.com)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Project: Parallaxie
 * Version: 0.5
 *
 * Requires: jQuery 1.9+
 */

(function($) {

    $.fn.parallaxie = function(options) {

        options = $.extend({
            speed: 0.2,
            repeat: 'no-repeat',
            size: 'cover',
            pos_x: 'center',
            offset: 0,
        }, options);

        this.each(function() {

            var $el = $(this);
            var local_options = $el.data('parallaxie');
            if (typeof local_options !== 'object') local_options = {};
            local_options = $.extend({}, options, local_options);

            var image_url = $el.data('image');
            if (typeof image_url === 'undefined') {
                image_url = $el.css('background-image');
                if (!image_url) return;

                // APPLY DEFAULT CSS
                var pos_y = local_options.offset + ($el.offset().top - $(window).scrollTop()) * (1 - local_options.speed);
                $el.css({
                    'background-image': image_url,
                    'background-size': local_options.size,
                    'background-repeat': local_options.repeat,
                    'background-attachment': 'fixed',
                    'background-position': local_options.pos_x + ' ' + pos_y + 'px',
                });


                // Call by default for the first time on initialization.
                parallax_scroll($el, local_options);

                // Call by whenever the scroll event occurs.
                $(window).scroll(function() {
                    parallax_scroll($el, local_options);
                });

            }
        });

        return this;
    };


    function parallax_scroll($el, local_options) {
        var pos_y = local_options.offset + ($el.offset().top - $(window).scrollTop()) * (1 - local_options.speed);
        $el.data('pos_y', pos_y);
        $el.css('background-position', local_options.pos_x + ' ' + pos_y + 'px');
    }

}(jQuery));


/**-----------------------

 scrollCue.js - ver.2.0.0
 URL : https://prjct-samwest.github.io/scrollCue/

 created by SamWest.
 Copyright (c) 2020 SamWest.
 This plugin is released under the MIT License.

 -----------------------**/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function(a) {
    var b = 0;
    return function() {
        return b < a.length ? {
            done: !1,
            value: a[b++]
        } : {
            done: !0
        }
    }
};
$jscomp.arrayIterator = function(a) {
    return {
        next: $jscomp.arrayIteratorImpl(a)
    }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, e) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = e.value;
    return a
};
$jscomp.getGlobal = function(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var e = a[b];
        if (e && e.Math == Math) return e
    }
    throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function(a, b) {
    var e = $jscomp.propertyToPolyfillSymbol[b];
    if (null == e) return a[b];
    e = a[e];
    return void 0 !== e ? e : a[b]
};
$jscomp.polyfill = function(a, b, e, f) {
    b && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, b, e, f) : $jscomp.polyfillUnisolated(a, b, e, f))
};
$jscomp.polyfillUnisolated = function(a, b, e, f) {
    e = $jscomp.global;
    a = a.split(".");
    for (f = 0; f < a.length - 1; f++) {
        var h = a[f];
        h in e || (e[h] = {});
        e = e[h]
    }
    a = a[a.length - 1];
    f = e[a];
    b = b(f);
    b != f && null != b && $jscomp.defineProperty(e, a, {
        configurable: !0,
        writable: !0,
        value: b
    })
};
$jscomp.polyfillIsolated = function(a, b, e, f) {
    var h = a.split(".");
    a = 1 === h.length;
    f = h[0];
    f = !a && f in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var k = 0; k < h.length - 1; k++) {
        var l = h[k];
        l in f || (f[l] = {});
        f = f[l]
    }
    h = h[h.length - 1];
    e = $jscomp.IS_SYMBOL_NATIVE && "es6" === e ? f[h] : null;
    b = b(e);
    null != b && (a ? $jscomp.defineProperty($jscomp.polyfills, h, {
        configurable: !0,
        writable: !0,
        value: b
    }) : b !== e && ($jscomp.propertyToPolyfillSymbol[h] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(h) : $jscomp.POLYFILL_PREFIX + h, h = $jscomp.propertyToPolyfillSymbol[h],
        $jscomp.defineProperty(f, h, {
            configurable: !0,
            writable: !0,
            value: b
        })))
};
$jscomp.initSymbol = function() {};
$jscomp.polyfill("Symbol", function(a) {
    if (a) return a;
    var b = function(a, b) {
        this.$jscomp$symbol$id_ = a;
        $jscomp.defineProperty(this, "description", {
            configurable: !0,
            writable: !0,
            value: b
        })
    };
    b.prototype.toString = function() {
        return this.$jscomp$symbol$id_
    };
    var e = 0,
        f = function(a) {
            if (this instanceof f) throw new TypeError("Symbol is not a constructor");
            return new b("jscomp_symbol_" + (a || "") + "_" + e++, a)
        };
    return f
}, "es6", "es3");
$jscomp.initSymbolIterator = function() {};
$jscomp.polyfill("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), e = 0; e < b.length; e++) {
            var f = $jscomp.global[b[e]];
            "function" === typeof f && "function" != typeof f.prototype[a] && $jscomp.defineProperty(f.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))
                }
            })
        }
        return a
    }, "es6",
    "es3");
$jscomp.initSymbolAsyncIterator = function() {};
$jscomp.iteratorPrototype = function(a) {
    a = {
        next: a
    };
    a[Symbol.iterator] = function() {
        return this
    };
    return a
};
$jscomp.iteratorFromArray = function(a, b) {
    a instanceof String && (a += "");
    var e = 0,
        f = {
            next: function() {
                if (e < a.length) {
                    var h = e++;
                    return {
                        value: b(h, a[h]),
                        done: !1
                    }
                }
                f.next = function() {
                    return {
                        done: !0,
                        value: void 0
                    }
                };
                return f.next()
            }
        };
    f[Symbol.iterator] = function() {
        return f
    };
    return f
};
$jscomp.polyfill("Array.prototype.keys", function(a) {
    return a ? a : function() {
        return $jscomp.iteratorFromArray(this, function(a) {
            return a
        })
    }
}, "es6", "es3");
var scrollCue = function() {
    var a = {},
        b, e, f = 0,
        h = !0,
        k = !0,
        l = !1,
        n = !1,
        m, p = {
            duration: 600,
            interval: -.7,
            percentage: .75,
            enable: !0,
            docSlider: !1,
            pageChangeReset: !1
        };
    a = {
        setEvents: function(g) {
            var c = function() {
                h && (requestAnimationFrame(function() {
                    h = !0;
                    k && (a.setQuery(), a.runQuery())
                }), h = !1)
            };
            k && !g && window.addEventListener("load", a.runQuery);
            window.addEventListener("scroll", c);
            if (l) {
                g = docSlider.getElements().pages;
                for (var d = 0; d < g.length; d++) g[d].addEventListener("scroll", function(a) {
                    var g = docSlider.getCurrentIndex() +
                        "";
                    a = a.target.getAttribute("data-ds-index");
                    if (g !== a) return !1;
                    docSlider._getWheelEnable() && c()
                })
            }
            window.addEventListener("resize", function() {
                0 < f && clearTimeout(f);
                f = setTimeout(function() {
                    k && (a.searchElements(), a.setQuery(), a.runQuery())
                }, 200)
            })
        },
        setOptions: function(g, c) {
            var d = {};
            if ("undefined" !== typeof g) return Object.keys(g).forEach(function(b) {
                "[object Object]" === Object.prototype.toString.call(g[b]) ? d[b] = a.setOptions(g[b], c[b]) : (d[b] = g[b], "undefined" !== typeof c && "undefined" !== typeof c[b] && (d[b] =
                    c[b]))
            }), d
        },
        searchElements: function() {
            b = [];
            var g = document.querySelectorAll("[data-cues]:not([data-disabled])");
            for (var c = 0; c < g.length; c++) {
                for (var d = g[c], e = 0; e < d.children.length; e++) {
                    var f = d.children[e];
                    a.setAttrPtoC(f, "data-cue", d, "data-cues", "");
                    a.setAttrPtoC(f, "data-duration", d, "data-duration", !1);
                    a.setAttrPtoC(f, "data-interval", d, "data-interval", !1);
                    a.setAttrPtoC(f, "data-sort", d, "data-sort", !1);
                    a.setAttrPtoC(f, "data-addClass", d, "data-addClass", !1);
                    a.setAttrPtoC(f, "data-group", d, "data-group", !1);
                    a.setAttrPtoC(f, "data-delay", d, "data-delay", !1)
                }
                d.setAttribute("data-disabled", "true")
            }
            g = document.querySelectorAll('[data-cue]:not([data-show="true"])');
            for (c = 0; c < g.length; c++) d = g[c], b.push({
                elm: d,
                cue: a.getAttr(d, "data-cue", "fadeIn"),
                duration: Number(a.getAttr(d, "data-duration", m.duration)),
                interval: Number(a.getAttr(d, "data-interval", m.interval)),
                order: a.getOrderNumber(d),
                sort: a.getAttr(d, "data-sort", null),
                addClass: a.getAttr(d, "data-addClass", null),
                group: a.getAttr(d, "data-group", null),
                delay: Number(a.getAttr(d,
                    "data-delay", 0))
            });
            if (l)
                for (g = docSlider.getElements().pages.length, c = 0; c < g; c++)
                    for (d = document.querySelectorAll('[data-ds-index="' + c + '"] [data-cue]:not([data-scpage])'), e = 0; e < d.length; e++) d[e].setAttribute("data-scpage", c)
        },
        sortElements: function() {
            for (var a = arguments[0], c = [].slice.call(arguments).slice(1), d = {
                    $jscomp$loop$prop$i$4: 0
                }; d.$jscomp$loop$prop$i$4 < c.length; d = {
                    $jscomp$loop$prop$i$4: d.$jscomp$loop$prop$i$4
                }, d.$jscomp$loop$prop$i$4++) a.sort(function(a) {
                return function(g, d) {
                    var b = "undefined" ===
                        typeof c[a.$jscomp$loop$prop$i$4][1] ? !0 : c[a.$jscomp$loop$prop$i$4][1],
                        e = c[a.$jscomp$loop$prop$i$4][0];
                    return g[e] > d[e] ? b ? 1 : -1 : g[e] < d[e] ? b ? -1 : 1 : 0
                }
            }(d))
        },
        randElements: function(a) {
            for (var g = a.length - 1; 0 < g; g--) {
                var d = Math.floor(Math.random() * (g + 1)),
                    b = a[g];
                a[g] = a[d];
                a[d] = b
            }
            return a
        },
        setDurationValue: function(a, c, d) {
            if ("undefined" === typeof c) return a;
            c = c.duration;
            a = -1 === (d + "").indexOf(".") ? a + c + d : a + c + c * d;
            return 0 > a ? 0 : a
        },
        getOrderNumber: function(a) {
            return a.hasAttribute("data-order") ? (a = Number(a.getAttribute("data-order")),
                0 <= a ? a : Math.pow(2, 53) - 1 + a) : Math.pow(2, 52) - 1
        },
        setAttrPtoC: function(a, c, d, b, e) {
            d.hasAttribute(b) ? a.hasAttribute(c) || a.setAttribute(c, d.getAttribute(b)) : !1 !== e && a.setAttribute(c, e)
        },
        getAttr: function(a, c, d) {
            return a.hasAttribute(c) ? a.getAttribute(c) : d
        },
        getOffsetTop: function(a) {
            return a.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop)
        },
        setClassNames: function(a, c) {
            if (c) {
                c = c.split(" ");
                for (var d = 0; d < c.length; d++) a.classList.add(c[d])
            }
        },
        setQuery: function() {
            e = {};
            for (var g =
                    0; g < b.length; g++) {
                var c = b[g],
                    d = c.group ? c.group : "$" + a.getOffsetTop(c.elm);
                if (!c.elm.hasAttribute("data-show")) {
                    if (l) {
                        var f = c.elm.getAttribute("data-scpage"),
                            h = docSlider.getCurrentIndex() + "";
                        if (f !== h && null !== f) continue
                    }
                    "undefined" === typeof e[d] && (e[d] = []);
                    e[d].push(c)
                }
            }
        },
        runQuery: function() {
            for (var b = Object.keys(e), c = {}, d = 0; d < b.length; c = {
                    $jscomp$loop$prop$elms$6: c.$jscomp$loop$prop$elms$6,
                    $jscomp$loop$prop$interval$7: c.$jscomp$loop$prop$interval$7
                }, d++)
                if (c.$jscomp$loop$prop$elms$6 = e[b[d]], a.isElementIn(c.$jscomp$loop$prop$elms$6[0].elm)) {
                    "reverse" ===
                    c.$jscomp$loop$prop$elms$6[0].sort ? c.$jscomp$loop$prop$elms$6.reverse() : "random" === c.$jscomp$loop$prop$elms$6[0].sort && a.randElements(c.$jscomp$loop$prop$elms$6);
                    a.sortElements(c.$jscomp$loop$prop$elms$6, ["order"]);
                    for (var f = c.$jscomp$loop$prop$interval$7 = 0; f < c.$jscomp$loop$prop$elms$6.length; f++)(function(c) {
                        return function(b) {
                            c.$jscomp$loop$prop$elms$6[b].elm.setAttribute("data-show", "true");
                            a.setClassNames(c.$jscomp$loop$prop$elms$6[b].elm, c.$jscomp$loop$prop$elms$6[b].addClass);
                            c.$jscomp$loop$prop$interval$7 =
                                a.setDurationValue(c.$jscomp$loop$prop$interval$7, c.$jscomp$loop$prop$elms$6[b - 1], c.$jscomp$loop$prop$elms$6[b].interval);
                            c.$jscomp$loop$prop$elms$6[b].elm.style.animationName = c.$jscomp$loop$prop$elms$6[b].cue;
                            c.$jscomp$loop$prop$elms$6[b].elm.style.animationDuration = c.$jscomp$loop$prop$elms$6[b].duration + "ms";
                            c.$jscomp$loop$prop$elms$6[b].elm.style.animationTimingFunction = "ease";
                            c.$jscomp$loop$prop$elms$6[b].elm.style.animationDelay = c.$jscomp$loop$prop$interval$7 + c.$jscomp$loop$prop$elms$6[b].delay +
                                "ms";
                            c.$jscomp$loop$prop$elms$6[b].elm.style.animationDirection = "normal";
                            c.$jscomp$loop$prop$elms$6[b].elm.style.animationFillMode = "both"
                        }
                    })(c)(f);
                    delete e[b[d]]
                }
        },
        isElementIn: function(b) {
            var c = b.hasAttribute("data-scpage") ? a.isScrollEndWithDocSlider : a.isScrollEnd;
            return window.pageYOffset > a.getOffsetTop(b) - window.innerHeight * m.percentage || c()
        },
        isScrollEnd: function() {
            var a = window.document.documentElement;
            return (window.document.body.scrollTop || a.scrollTop) >= a.scrollHeight - a.clientHeight
        },
        isScrollEndWithDocSlider: function() {
            var a =
                docSlider.getCurrentPage();
            return a.scrollTop >= a.scrollHeight - a.clientHeight
        }
    };
    return {
        init: function(b) {
            m = a.setOptions(p, b);
            k = m.enable;
            l = m.docSlider;
            n = m.pageChangeReset;
            l || (a.setEvents(), a.searchElements(), a.setQuery())
        },
        update: function() {
            k && (a.searchElements(), a.setQuery(), a.runQuery())
        },
        enable: function(a) {
            k = "undefined" === typeof a ? !k : a;
            scrollCue.update()
        },
        _hasDocSlider: function() {
            return l
        },
        _hasPageChangeReset: function() {
            return n
        },
        _initWithDocSlider: function(b) {
            a.setEvents(b);
            a.searchElements();
            a.setQuery()
        },
        _updateWithDocSlider: function() {
            k && (a.setQuery(), a.runQuery())
        },
        _searchElements: function() {
            a.searchElements()
        }
    }
}();


/*! skrollr 0.6.30 (2015-08-12) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
! function(a, b, c) {
    "use strict";

    function d(c) {
        if (e = b.documentElement, f = b.body, T(), ha = this, c = c || {}, ma = c.constants || {}, c.easing)
            for (var d in c.easing) W[d] = c.easing[d];
        ta = c.edgeStrategy || "set", ka = {
            beforerender: c.beforerender,
            render: c.render,
            keyframe: c.keyframe
        }, la = c.forceHeight !== !1, la && (Ka = c.scale || 1), na = c.mobileDeceleration || y, pa = c.smoothScrolling !== !1, qa = c.smoothScrollingDuration || A, ra = {
            targetTop: ha.getScrollTop()
        }, Sa = (c.mobileCheck || function() {
            return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || a.opera)
        })(), Sa ? (ja = b.getElementById(c.skrollrBody || z), ja && ga(), X(), Ea(e, [s, v], [t])) : Ea(e, [s, u], [t]), ha.refresh(), wa(a, "resize orientationchange", function() {
            var a = e.clientWidth,
                b = e.clientHeight;
            (b !== Pa || a !== Oa) && (Pa = b, Oa = a, Qa = !0)
        });
        var g = U();
        return function h() {
            $(), va = g(h)
        }(), ha
    }
    var e, f, g = {
            get: function() {
                return ha
            },
            init: function(a) {
                return ha || new d(a)
            },
            VERSION: "0.6.30"
        },
        h = Object.prototype.hasOwnProperty,
        i = a.Math,
        j = a.getComputedStyle,
        k = "touchstart",
        l = "touchmove",
        m = "touchcancel",
        n = "touchend",
        o = "skrollable",
        p = o + "-before",
        q = o + "-between",
        r = o + "-after",
        s = "skrollr",
        t = "no-" + s,
        u = s + "-desktop",
        v = s + "-mobile",
        w = "linear",
        x = 1e3,
        y = .004,
        z = "skrollr-body",
        A = 200,
        B = "start",
        C = "end",
        D = "center",
        E = "bottom",
        F = "___skrollable_id",
        G = /^(?:input|textarea|button|select)$/i,
        H = /^\s+|\s+$/g,
        I = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
        J = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
        K = /^(@?[a-z\-]+)\[(\w+)\]$/,
        L = /-([a-z0-9_])/g,
        M = function(a, b) {
            return b.toUpperCase()
        },
        N = /[\-+]?[\d]*\.?[\d]+/g,
        O = /\{\?\}/g,
        P = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
        Q = /[a-z\-]+-gradient/g,
        R = "",
        S = "",
        T = function() {
            var a = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
            if (j) {
                var b = j(f, null);
                for (var c in b)
                    if (R = c.match(a) || +c == c && b[c].match(a)) break;
                if (!R) return void(R = S = "");
                R = R[0], "-" === R.slice(0, 1) ? (S = R, R = {
                    "-webkit-": "webkit",
                    "-moz-": "Moz",
                    "-ms-": "ms",
                    "-o-": "O"
                }[R]) : S = "-" + R.toLowerCase() + "-"
            }
        },
        U = function() {
            var b = a.requestAnimationFrame || a[R.toLowerCase() + "RequestAnimationFrame"],
                c = Ha();
            return (Sa || !b) && (b = function(b) {
                var d = Ha() - c,
                    e = i.max(0, 1e3 / 60 - d);
                return a.setTimeout(function() {
                    c = Ha(), b()
                }, e)
            }), b
        },
        V = function() {
            var b = a.cancelAnimationFrame || a[R.toLowerCase() + "CancelAnimationFrame"];
            return (Sa || !b) && (b = function(b) {
                return a.clearTimeout(b)
            }), b
        },
        W = {
            begin: function() {
                return 0
            },
            end: function() {
                return 1
            },
            linear: function(a) {
                return a
            },
            quadratic: function(a) {
                return a * a
            },
            cubic: function(a) {
                return a * a * a
            },
            swing: function(a) {
                return -i.cos(a * i.PI) / 2 + .5
            },
            sqrt: function(a) {
                return i.sqrt(a)
            },
            outCubic: function(a) {
                return i.pow(a - 1, 3) + 1
            },
            bounce: function(a) {
                var b;
                if (.5083 >= a) b = 3;
                else if (.8489 >= a) b = 9;
                else if (.96208 >= a) b = 27;
                else {
                    if (!(.99981 >= a)) return 1;
                    b = 91
                }
                return 1 - i.abs(3 * i.cos(a * b * 1.028) / b)
            }
        };
    d.prototype.refresh = function(a) {
        var d, e, f = !1;
        for (a === c ? (f = !0, ia = [], Ra = 0, a = b.getElementsByTagName("*")) : a.length === c && (a = [a]), d = 0, e = a.length; e > d; d++) {
            var g = a[d],
                h = g,
                i = [],
                j = pa,
                k = ta,
                l = !1;
            if (f && F in g && delete g[F], g.attributes) {
                for (var m = 0, n = g.attributes.length; n > m; m++) {
                    var p = g.attributes[m];
                    if ("data-anchor-target" !== p.name)
                        if ("data-smooth-scrolling" !== p.name)
                            if ("data-edge-strategy" !== p.name)
                                if ("data-emit-events" !== p.name) {
                                    var q = p.name.match(I);
                                    if (null !== q) {
                                        var r = {
                                            props: p.value,
                                            element: g,
                                            eventType: p.name.replace(L, M)
                                        };
                                        i.push(r);
                                        var s = q[1];
                                        s && (r.constant = s.substr(1));
                                        var t = q[2];
                                        /p$/.test(t) ? (r.isPercentage = !0, r.offset = (0 | t.slice(0, -1)) / 100) : r.offset = 0 | t;
                                        var u = q[3],
                                            v = q[4] || u;
                                        u && u !== B && u !== C ? (r.mode = "relative", r.anchors = [u, v]) : (r.mode = "absolute", u === C ? r.isEnd = !0 : r.isPercentage || (r.offset = r.offset * Ka))
                                    }
                                } else l = !0;
                    else k = p.value;
                    else j = "off" !== p.value;
                    else if (h = b.querySelector(p.value), null === h) throw 'Unable to find anchor target "' + p.value + '"'
                }
                if (i.length) {
                    var w, x, y;
                    !f && F in g ? (y = g[F], w = ia[y].styleAttr, x = ia[y].classAttr) : (y = g[F] = Ra++, w = g.style.cssText, x = Da(g)), ia[y] = {
                        element: g,
                        styleAttr: w,
                        classAttr: x,
                        anchorTarget: h,
                        keyFrames: i,
                        smoothScrolling: j,
                        edgeStrategy: k,
                        emitEvents: l,
                        lastFrameIndex: -1
                    }, Ea(g, [o], [])
                }
            }
        }
        for (Aa(), d = 0, e = a.length; e > d; d++) {
            var z = ia[a[d][F]];
            z !== c && (_(z), ba(z))
        }
        return ha
    }, d.prototype.relativeToAbsolute = function(a, b, c) {
        var d = e.clientHeight,
            f = a.getBoundingClientRect(),
            g = f.top,
            h = f.bottom - f.top;
        return b === E ? g -= d : b === D && (g -= d / 2), c === E ? g += h : c === D && (g += h / 2), g += ha.getScrollTop(), g + .5 | 0
    }, d.prototype.animateTo = function(a, b) {
        b = b || {};
        var d = Ha(),
            e = ha.getScrollTop(),
            f = b.duration === c ? x : b.duration;
        return oa = {
            startTop: e,
            topDiff: a - e,
            targetTop: a,
            duration: f,
            startTime: d,
            endTime: d + f,
            easing: W[b.easing || w],
            done: b.done
        }, oa.topDiff || (oa.done && oa.done.call(ha, !1), oa = c), ha
    }, d.prototype.stopAnimateTo = function() {
        oa && oa.done && oa.done.call(ha, !0), oa = c
    }, d.prototype.isAnimatingTo = function() {
        return !!oa
    }, d.prototype.isMobile = function() {
        return Sa
    }, d.prototype.setScrollTop = function(b, c) {
        return sa = c === !0, Sa ? Ta = i.min(i.max(b, 0), Ja) : a.scrollTo(0, b), ha
    }, d.prototype.getScrollTop = function() {
        return Sa ? Ta : a.pageYOffset || e.scrollTop || f.scrollTop || 0
    }, d.prototype.getMaxScrollTop = function() {
        return Ja
    }, d.prototype.on = function(a, b) {
        return ka[a] = b, ha
    }, d.prototype.off = function(a) {
        return delete ka[a], ha
    }, d.prototype.destroy = function() {
        var a = V();
        a(va), ya(), Ea(e, [t], [s, u, v]);
        for (var b = 0, d = ia.length; d > b; b++) fa(ia[b].element);
        e.style.overflow = f.style.overflow = "", e.style.height = f.style.height = "", ja && g.setStyle(ja, "transform", "none"), ha = c, ja = c, ka = c, la = c, Ja = 0, Ka = 1, ma = c, na = c, La = "down", Ma = -1, Oa = 0, Pa = 0, Qa = !1, oa = c, pa = c, qa = c, ra = c, sa = c, Ra = 0, ta = c, Sa = !1, Ta = 0, ua = c
    };
    var X = function() {
            var d, g, h, j, o, p, q, r, s, t, u, v;
            wa(e, [k, l, m, n].join(" "), function(a) {
                var e = a.changedTouches[0];
                for (j = a.target; 3 === j.nodeType;) j = j.parentNode;
                switch (o = e.clientY, p = e.clientX, t = a.timeStamp, G.test(j.tagName) || a.preventDefault(), a.type) {
                    case k:
                        d && d.blur(), ha.stopAnimateTo(), d = j, g = q = o, h = p, s = t;
                        break;
                    case l:
                        G.test(j.tagName) && b.activeElement !== j && a.preventDefault(), r = o - q, v = t - u, ha.setScrollTop(Ta - r, !0), q = o, u = t;
                        break;
                    default:
                    case m:
                    case n:
                        var f = g - o,
                            w = h - p,
                            x = w * w + f * f;
                        if (49 > x) {
                            if (!G.test(d.tagName)) {
                                d.focus();
                                var y = b.createEvent("MouseEvents");
                                y.initMouseEvent("click", !0, !0, a.view, 1, e.screenX, e.screenY, e.clientX, e.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, null), d.dispatchEvent(y)
                            }
                            return
                        }
                        d = c;
                        var z = r / v;
                        z = i.max(i.min(z, 3), -3);
                        var A = i.abs(z / na),
                            B = z * A + .5 * na * A * A,
                            C = ha.getScrollTop() - B,
                            D = 0;
                        C > Ja ? (D = (Ja - C) / B, C = Ja) : 0 > C && (D = -C / B, C = 0), A *= 1 - D, ha.animateTo(C + .5 | 0, {
                            easing: "outCubic",
                            duration: A
                        })
                }
            }), a.scrollTo(0, 0), e.style.overflow = f.style.overflow = "hidden"
        },
        Y = function() {
            var a, b, c, d, f, g, h, j, k, l, m, n = e.clientHeight,
                o = Ba();
            for (j = 0, k = ia.length; k > j; j++)
                for (a = ia[j], b = a.element, c = a.anchorTarget, d = a.keyFrames, f = 0, g = d.length; g > f; f++) h = d[f], l = h.offset, m = o[h.constant] || 0, h.frame = l, h.isPercentage && (l *= n, h.frame = l), "relative" === h.mode && (fa(b), h.frame = ha.relativeToAbsolute(c, h.anchors[0], h.anchors[1]) - l, fa(b, !0)), h.frame += m, la && !h.isEnd && h.frame > Ja && (Ja = h.frame);
            for (Ja = i.max(Ja, Ca()), j = 0, k = ia.length; k > j; j++) {
                for (a = ia[j], d = a.keyFrames, f = 0, g = d.length; g > f; f++) h = d[f], m = o[h.constant] || 0, h.isEnd && (h.frame = Ja - h.offset + m);
                a.keyFrames.sort(Ia)
            }
        },
        Z = function(a, b) {
            for (var c = 0, d = ia.length; d > c; c++) {
                var e, f, i = ia[c],
                    j = i.element,
                    k = i.smoothScrolling ? a : b,
                    l = i.keyFrames,
                    m = l.length,
                    n = l[0],
                    s = l[l.length - 1],
                    t = k < n.frame,
                    u = k > s.frame,
                    v = t ? n : s,
                    w = i.emitEvents,
                    x = i.lastFrameIndex;
                if (t || u) {
                    if (t && -1 === i.edge || u && 1 === i.edge) continue;
                    switch (t ? (Ea(j, [p], [r, q]), w && x > -1 && (za(j, n.eventType, La), i.lastFrameIndex = -1)) : (Ea(j, [r], [p, q]), w && m > x && (za(j, s.eventType, La), i.lastFrameIndex = m)), i.edge = t ? -1 : 1, i.edgeStrategy) {
                        case "reset":
                            fa(j);
                            continue;
                        case "ease":
                            k = v.frame;
                            break;
                        default:
                        case "set":
                            var y = v.props;
                            for (e in y) h.call(y, e) && (f = ea(y[e].value), 0 === e.indexOf("@") ? j.setAttribute(e.substr(1), f) : g.setStyle(j, e, f));
                            continue
                    }
                } else 0 !== i.edge && (Ea(j, [o, q], [p, r]), i.edge = 0);
                for (var z = 0; m - 1 > z; z++)
                    if (k >= l[z].frame && k <= l[z + 1].frame) {
                        var A = l[z],
                            B = l[z + 1];
                        for (e in A.props)
                            if (h.call(A.props, e)) {
                                var C = (k - A.frame) / (B.frame - A.frame);
                                C = A.props[e].easing(C), f = da(A.props[e].value, B.props[e].value, C), f = ea(f), 0 === e.indexOf("@") ? j.setAttribute(e.substr(1), f) : g.setStyle(j, e, f)
                            }
                        w && x !== z && ("down" === La ? za(j, A.eventType, La) : za(j, B.eventType, La), i.lastFrameIndex = z);
                        break
                    }
            }
        },
        $ = function() {
            Qa && (Qa = !1, Aa());
            var a, b, d = ha.getScrollTop(),
                e = Ha();
            if (oa) e >= oa.endTime ? (d = oa.targetTop, a = oa.done, oa = c) : (b = oa.easing((e - oa.startTime) / oa.duration), d = oa.startTop + b * oa.topDiff | 0), ha.setScrollTop(d, !0);
            else if (!sa) {
                var f = ra.targetTop - d;
                f && (ra = {
                    startTop: Ma,
                    topDiff: d - Ma,
                    targetTop: d,
                    startTime: Na,
                    endTime: Na + qa
                }), e <= ra.endTime && (b = W.sqrt((e - ra.startTime) / qa), d = ra.startTop + b * ra.topDiff | 0)
            }
            if (sa || Ma !== d) {
                La = d > Ma ? "down" : Ma > d ? "up" : La, sa = !1;
                var h = {
                        curTop: d,
                        lastTop: Ma,
                        maxTop: Ja,
                        direction: La
                    },
                    i = ka.beforerender && ka.beforerender.call(ha, h);
                i !== !1 && (Z(d, ha.getScrollTop()), Sa && ja && g.setStyle(ja, "transform", "translate(0, " + -Ta + "px) " + ua), Ma = d, ka.render && ka.render.call(ha, h)), a && a.call(ha, !1)
            }
            Na = e
        },
        _ = function(a) {
            for (var b = 0, c = a.keyFrames.length; c > b; b++) {
                for (var d, e, f, g, h = a.keyFrames[b], i = {}; null !== (g = J.exec(h.props));) f = g[1], e = g[2], d = f.match(K), null !== d ? (f = d[1], d = d[2]) : d = w, e = e.indexOf("!") ? aa(e) : [e.slice(1)], i[f] = {
                    value: e,
                    easing: W[d]
                };
                h.props = i
            }
        },
        aa = function(a) {
            var b = [];
            return P.lastIndex = 0, a = a.replace(P, function(a) {
                return a.replace(N, function(a) {
                    return a / 255 * 100 + "%"
                })
            }), S && (Q.lastIndex = 0, a = a.replace(Q, function(a) {
                return S + a
            })), a = a.replace(N, function(a) {
                return b.push(+a), "{?}"
            }), b.unshift(a), b
        },
        ba = function(a) {
            var b, c, d = {};
            for (b = 0, c = a.keyFrames.length; c > b; b++) ca(a.keyFrames[b], d);
            for (d = {}, b = a.keyFrames.length - 1; b >= 0; b--) ca(a.keyFrames[b], d)
        },
        ca = function(a, b) {
            var c;
            for (c in b) h.call(a.props, c) || (a.props[c] = b[c]);
            for (c in a.props) b[c] = a.props[c]
        },
        da = function(a, b, c) {
            var d, e = a.length;
            if (e !== b.length) throw "Can't interpolate between \"" + a[0] + '" and "' + b[0] + '"';
            var f = [a[0]];
            for (d = 1; e > d; d++) f[d] = a[d] + (b[d] - a[d]) * c;
            return f
        },
        ea = function(a) {
            var b = 1;
            return O.lastIndex = 0, a[0].replace(O, function() {
                return a[b++]
            })
        },
        fa = function(a, b) {
            a = [].concat(a);
            for (var c, d, e = 0, f = a.length; f > e; e++) d = a[e], c = ia[d[F]], c && (b ? (d.style.cssText = c.dirtyStyleAttr, Ea(d, c.dirtyClassAttr)) : (c.dirtyStyleAttr = d.style.cssText, c.dirtyClassAttr = Da(d), d.style.cssText = c.styleAttr, Ea(d, c.classAttr)))
        },
        ga = function() {
            ua = "translateZ(0)", g.setStyle(ja, "transform", ua);
            var a = j(ja),
                b = a.getPropertyValue("transform"),
                c = a.getPropertyValue(S + "transform"),
                d = b && "none" !== b || c && "none" !== c;
            d || (ua = "")
        };
    g.setStyle = function(a, b, c) {
        var d = a.style;
        if (b = b.replace(L, M).replace("-", ""), "zIndex" === b) isNaN(c) ? d[b] = c : d[b] = "" + (0 | c);
        else if ("float" === b) d.styleFloat = d.cssFloat = c;
        else try {
            R && (d[R + b.slice(0, 1).toUpperCase() + b.slice(1)] = c), d[b] = c
        } catch (e) {}
    };
    var ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra, sa, ta, ua, va, wa = g.addEvent = function(b, c, d) {
            var e = function(b) {
                return b = b || a.event, b.target || (b.target = b.srcElement), b.preventDefault || (b.preventDefault = function() {
                    b.returnValue = !1, b.defaultPrevented = !0
                }), d.call(this, b)
            };
            c = c.split(" ");
            for (var f, g = 0, h = c.length; h > g; g++) f = c[g], b.addEventListener ? b.addEventListener(f, d, !1) : b.attachEvent("on" + f, e), Ua.push({
                element: b,
                name: f,
                listener: d
            })
        },
        xa = g.removeEvent = function(a, b, c) {
            b = b.split(" ");
            for (var d = 0, e = b.length; e > d; d++) a.removeEventListener ? a.removeEventListener(b[d], c, !1) : a.detachEvent("on" + b[d], c)
        },
        ya = function() {
            for (var a, b = 0, c = Ua.length; c > b; b++) a = Ua[b], xa(a.element, a.name, a.listener);
            Ua = []
        },
        za = function(a, b, c) {
            ka.keyframe && ka.keyframe.call(ha, a, b, c)
        },
        Aa = function() {
            var a = ha.getScrollTop();
            Ja = 0, la && !Sa && (f.style.height = ""), Y(), la && !Sa && (f.style.height = Ja + e.clientHeight + "px"), Sa ? ha.setScrollTop(i.min(ha.getScrollTop(), Ja)) : ha.setScrollTop(a, !0), sa = !0
        },
        Ba = function() {
            var a, b, c = e.clientHeight,
                d = {};
            for (a in ma) b = ma[a], "function" == typeof b ? b = b.call(ha) : /p$/.test(b) && (b = b.slice(0, -1) / 100 * c), d[a] = b;
            return d
        },
        Ca = function() {
            var a, b = 0;
            return ja && (b = i.max(ja.offsetHeight, ja.scrollHeight)), a = i.max(b, f.scrollHeight, f.offsetHeight, e.scrollHeight, e.offsetHeight, e.clientHeight), a - e.clientHeight
        },
        Da = function(b) {
            var c = "className";
            return a.SVGElement && b instanceof a.SVGElement && (b = b[c], c = "baseVal"), b[c]
        },
        Ea = function(b, d, e) {
            var f = "className";
            if (a.SVGElement && b instanceof a.SVGElement && (b = b[f], f = "baseVal"), e === c) return void(b[f] = d);
            for (var g = b[f], h = 0, i = e.length; i > h; h++) g = Ga(g).replace(Ga(e[h]), " ");
            g = Fa(g);
            for (var j = 0, k = d.length; k > j; j++) - 1 === Ga(g).indexOf(Ga(d[j])) && (g += " " + d[j]);
            b[f] = Fa(g)
        },
        Fa = function(a) {
            return a.replace(H, "")
        },
        Ga = function(a) {
            return " " + a + " "
        },
        Ha = Date.now || function() {
            return +new Date
        },
        Ia = function(a, b) {
            return a.frame - b.frame
        },
        Ja = 0,
        Ka = 1,
        La = "down",
        Ma = -1,
        Na = Ha(),
        Oa = 0,
        Pa = 0,
        Qa = !1,
        Ra = 0,
        Sa = !1,
        Ta = 0,
        Ua = [];
    "function" == typeof define && define.amd ? define([], function() {
        return g
    }) : "undefined" != typeof module && module.exports ? module.exports = g : a.skrollr = g
}(window, document);


/**
 * Swiper 11.1.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2024 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: April 9, 2024
 */

var Swiper = function() {
    "use strict";

    function e(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function t(s, a) {
        void 0 === s && (s = {}), void 0 === a && (a = {}), Object.keys(a).forEach((i => {
            void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i])
        }))
    }
    const s = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {}
        }),
        createElement: () => ({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };

    function a() {
        const e = "undefined" != typeof document ? document : {};
        return t(e, s), e
    }
    const i = {
        document: s,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
            getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };

    function r() {
        const e = "undefined" != typeof window ? window : {};
        return t(e, i), e
    }

    function n(e) {
        return void 0 === e && (e = ""), e.trim().split(" ").filter((e => !!e.trim()))
    }

    function l(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
    }

    function o() {
        return Date.now()
    }

    function d(e, t) {
        void 0 === t && (t = "x");
        const s = r();
        let a, i, n;
        const l = function(e) {
            const t = r();
            let s;
            return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
        }(e);
        return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
    }

    function c(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }

    function p() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
            t = ["__proto__", "constructor", "prototype"];
        for (let a = 1; a < arguments.length; a += 1) {
            const i = a < 0 || arguments.length <= a ? void 0 : arguments[a];
            if (null != i && (s = i, !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
                const s = Object.keys(Object(i)).filter((e => t.indexOf(e) < 0));
                for (let t = 0, a = s.length; t < a; t += 1) {
                    const a = s[t],
                        r = Object.getOwnPropertyDescriptor(i, a);
                    void 0 !== r && r.enumerable && (c(e[a]) && c(i[a]) ? i[a].__swiper__ ? e[a] = i[a] : p(e[a], i[a]) : !c(e[a]) && c(i[a]) ? (e[a] = {}, i[a].__swiper__ ? e[a] = i[a] : p(e[a], i[a])) : e[a] = i[a])
                }
            }
        }
        var s;
        return e
    }

    function u(e, t, s) {
        e.style.setProperty(t, s)
    }

    function m(e) {
        let {
            swiper: t,
            targetPosition: s,
            side: a
        } = e;
        const i = r(),
            n = -t.translate;
        let l, o = null;
        const d = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
        const c = s > n ? "next" : "prev",
            p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
            u = () => {
                l = (new Date).getTime(), null === o && (o = l);
                const e = Math.max(Math.min((l - o) / d, 1), 0),
                    r = .5 - Math.cos(e * Math.PI) / 2;
                let c = n + r * (s - n);
                if (p(c, s) && (c = s), t.wrapperEl.scrollTo({
                        [a]: c
                    }), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                    t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                        [a]: c
                    })
                })), void i.cancelAnimationFrame(t.cssModeFrameID);
                t.cssModeFrameID = i.requestAnimationFrame(u)
            };
        u()
    }

    function h(e) {
        return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e
    }

    function f(e, t) {
        return void 0 === t && (t = ""), [...e.children].filter((e => e.matches(t)))
    }

    function g(e) {
        try {
            return void console.warn(e)
        } catch (e) {}
    }

    function v(e, t) {
        void 0 === t && (t = []);
        const s = document.createElement(e);
        return s.classList.add(...Array.isArray(t) ? t : n(t)), s
    }

    function w(e) {
        const t = r(),
            s = a(),
            i = e.getBoundingClientRect(),
            n = s.body,
            l = e.clientTop || n.clientTop || 0,
            o = e.clientLeft || n.clientLeft || 0,
            d = e === t ? t.scrollY : e.scrollTop,
            c = e === t ? t.scrollX : e.scrollLeft;
        return {
            top: i.top + d - l,
            left: i.left + c - o
        }
    }

    function b(e, t) {
        return r().getComputedStyle(e, null).getPropertyValue(t)
    }

    function y(e) {
        let t, s = e;
        if (s) {
            for (t = 0; null !== (s = s.previousSibling);) 1 === s.nodeType && (t += 1);
            return t
        }
    }

    function E(e, t) {
        const s = [];
        let a = e.parentElement;
        for (; a;) t ? a.matches(t) && s.push(a) : s.push(a), a = a.parentElement;
        return s
    }

    function x(e, t) {
        t && e.addEventListener("transitionend", (function s(a) {
            a.target === e && (t.call(e, a), e.removeEventListener("transitionend", s))
        }))
    }

    function S(e, t, s) {
        const a = r();
        return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
    }

    function T(e) {
        return (Array.isArray(e) ? e : [e]).filter((e => !!e))
    }
    let M, C, P;

    function L() {
        return M || (M = function() {
            const e = r(),
                t = a();
            return {
                smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
            }
        }()), M
    }

    function I(e) {
        return void 0 === e && (e = {}), C || (C = function(e) {
            let {
                userAgent: t
            } = void 0 === e ? {} : e;
            const s = L(),
                a = r(),
                i = a.navigator.platform,
                n = t || a.navigator.userAgent,
                l = {
                    ios: !1,
                    android: !1
                },
                o = a.screen.width,
                d = a.screen.height,
                c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let p = n.match(/(iPad).*OS\s([\d_]+)/);
            const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                m = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                h = "Win32" === i;
            let f = "MacIntel" === i;
            return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), f = !1), c && !h && (l.os = "android", l.android = !0), (p || m || u) && (l.os = "ios", l.ios = !0), l
        }(e)), C
    }

    function z() {
        return P || (P = function() {
            const e = r(),
                t = I();
            let s = !1;

            function a() {
                const t = e.navigator.userAgent.toLowerCase();
                return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
            }
            if (a()) {
                const t = String(e.navigator.userAgent);
                if (t.includes("Version/")) {
                    const [e, a] = t.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                    s = e < 16 || 16 === e && a < 2
                }
            }
            const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
                n = a();
            return {
                isSafari: s || n,
                needPerspectiveFix: s,
                need3dFix: n || i && t.ios,
                isWebView: i
            }
        }()), P
    }
    var A = {
        on(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed) return a;
            if ("function" != typeof t) return a;
            const i = s ? "unshift" : "push";
            return e.split(" ").forEach((e => {
                a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t)
            })), a
        },
        once(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed) return a;
            if ("function" != typeof t) return a;

            function i() {
                a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
                for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
                t.apply(a, r)
            }
            return i.__emitterProxy = t, a.on(e, i, s)
        },
        onAny(e, t) {
            const s = this;
            if (!s.eventsListeners || s.destroyed) return s;
            if ("function" != typeof e) return s;
            const a = t ? "unshift" : "push";
            return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s
        },
        offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsAnyListeners) return t;
            const s = t.eventsAnyListeners.indexOf(e);
            return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
        },
        off(e, t) {
            const s = this;
            return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
                void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((a, i) => {
                    (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
                }))
            })), s) : s
        },
        emit() {
            const e = this;
            if (!e.eventsListeners || e.destroyed) return e;
            if (!e.eventsListeners) return e;
            let t, s, a;
            for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
            "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), a = e) : (t = r[0].events, s = r[0].data, a = r[0].context || e), s.unshift(a);
            return (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                    e.apply(a, [t, ...s])
                })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                    e.apply(a, s)
                }))
            })), e
        }
    };
    const $ = (e, t, s) => {
        t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s)
    };
    const k = (e, t) => {
            if (!e || e.destroyed || !e.params) return;
            const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
            if (s) {
                let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
                !t && e.isElement && (s.shadowRoot ? t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
                    s.shadowRoot && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
                }))), t && t.remove()
            }
        },
        O = (e, t) => {
            if (!e.slides[t]) return;
            const s = e.slides[t].querySelector('[loading="lazy"]');
            s && s.removeAttribute("loading")
        },
        D = e => {
            if (!e || e.destroyed || !e.params) return;
            let t = e.params.lazyPreloadPrevNext;
            const s = e.slides.length;
            if (!s || !t || t < 0) return;
            t = Math.min(t, s);
            const a = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                i = e.activeIndex;
            if (e.params.grid && e.params.grid.rows > 1) {
                const s = i,
                    r = [s - t];
                return r.push(...Array.from({
                    length: t
                }).map(((e, t) => s + a + t))), void e.slides.forEach(((t, s) => {
                    r.includes(t.column) && O(e, s)
                }))
            }
            const r = i + a - 1;
            if (e.params.rewind || e.params.loop)
                for (let a = i - t; a <= r + t; a += 1) {
                    const t = (a % s + s) % s;
                    (t < i || t > r) && O(e, t)
                } else
                    for (let a = Math.max(i - t, 0); a <= Math.min(r + t, s - 1); a += 1) a !== i && (a > r || a < i) && O(e, a)
        };
    var G = {
        updateSize: function() {
            const e = this;
            let t, s;
            const a = e.el;
            t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a.clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a.clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(b(a, "padding-left") || 0, 10) - parseInt(b(a, "padding-right") || 0, 10), s = s - parseInt(b(a, "padding-top") || 0, 10) - parseInt(b(a, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s
            }))
        },
        updateSlides: function() {
            const e = this;

            function t(t, s) {
                return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0)
            }
            const s = e.params,
                {
                    wrapperEl: a,
                    slidesEl: i,
                    size: r,
                    rtlTranslate: n,
                    wrongRTL: l
                } = e,
                o = e.virtual && s.virtual.enabled,
                d = o ? e.virtual.slides.length : e.slides.length,
                c = f(i, `.${e.params.slideClass}, swiper-slide`),
                p = o ? e.virtual.slides.length : c.length;
            let m = [];
            const h = [],
                g = [];
            let v = s.slidesOffsetBefore;
            "function" == typeof v && (v = s.slidesOffsetBefore.call(e));
            let w = s.slidesOffsetAfter;
            "function" == typeof w && (w = s.slidesOffsetAfter.call(e));
            const y = e.snapGrid.length,
                E = e.slidesGrid.length;
            let x = s.spaceBetween,
                T = -v,
                M = 0,
                C = 0;
            if (void 0 === r) return;
            "string" == typeof x && x.indexOf("%") >= 0 ? x = parseFloat(x.replace("%", "")) / 100 * r : "string" == typeof x && (x = parseFloat(x)), e.virtualSize = -x, c.forEach((e => {
                n ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
            })), s.centeredSlides && s.cssMode && (u(a, "--swiper-centered-offset-before", ""), u(a, "--swiper-centered-offset-after", ""));
            const P = s.grid && s.grid.rows > 1 && e.grid;
            let L;
            P ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
            const I = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e => void 0 !== s.breakpoints[e].slidesPerView)).length > 0;
            for (let a = 0; a < p; a += 1) {
                let i;
                if (L = 0, c[a] && (i = c[a]), P && e.grid.updateSlide(a, i, c), !c[a] || "none" !== b(i, "display")) {
                    if ("auto" === s.slidesPerView) {
                        I && (c[a].style[e.getDirectionLabel("width")] = "");
                        const r = getComputedStyle(i),
                            n = i.style.transform,
                            l = i.style.webkitTransform;
                        if (n && (i.style.transform = "none"), l && (i.style.webkitTransform = "none"), s.roundLengths) L = e.isHorizontal() ? S(i, "width", !0) : S(i, "height", !0);
                        else {
                            const e = t(r, "width"),
                                s = t(r, "padding-left"),
                                a = t(r, "padding-right"),
                                n = t(r, "margin-left"),
                                l = t(r, "margin-right"),
                                o = r.getPropertyValue("box-sizing");
                            if (o && "border-box" === o) L = e + n + l;
                            else {
                                const {
                                    clientWidth: t,
                                    offsetWidth: r
                                } = i;
                                L = e + s + a + n + l + (r - t)
                            }
                        }
                        n && (i.style.transform = n), l && (i.style.webkitTransform = l), s.roundLengths && (L = Math.floor(L))
                    } else L = (r - (s.slidesPerView - 1) * x) / s.slidesPerView, s.roundLengths && (L = Math.floor(L)), c[a] && (c[a].style[e.getDirectionLabel("width")] = `${L}px`);
                    c[a] && (c[a].swiperSlideSize = L), g.push(L), s.centeredSlides ? (T = T + L / 2 + M / 2 + x, 0 === M && 0 !== a && (T = T - r / 2 - x), 0 === a && (T = T - r / 2 - x), Math.abs(T) < .001 && (T = 0), s.roundLengths && (T = Math.floor(T)), C % s.slidesPerGroup == 0 && m.push(T), h.push(T)) : (s.roundLengths && (T = Math.floor(T)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && m.push(T), h.push(T), T = T + L + x), e.virtualSize += L + x, M = L, C += 1
                }
            }
            if (e.virtualSize = Math.max(e.virtualSize, r) + w, n && l && ("slide" === s.effect || "coverflow" === s.effect) && (a.style.width = `${e.virtualSize+x}px`), s.setWrapperSize && (a.style[e.getDirectionLabel("width")] = `${e.virtualSize+x}px`), P && e.grid.updateWrapperSize(L, m), !s.centeredSlides) {
                const t = [];
                for (let a = 0; a < m.length; a += 1) {
                    let i = m[a];
                    s.roundLengths && (i = Math.floor(i)), m[a] <= e.virtualSize - r && t.push(i)
                }
                m = t, Math.floor(e.virtualSize - r) - Math.floor(m[m.length - 1]) > 1 && m.push(e.virtualSize - r)
            }
            if (o && s.loop) {
                const t = g[0] + x;
                if (s.slidesPerGroup > 1) {
                    const a = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup),
                        i = t * s.slidesPerGroup;
                    for (let e = 0; e < a; e += 1) m.push(m[m.length - 1] + i)
                }
                for (let a = 0; a < e.virtual.slidesBefore + e.virtual.slidesAfter; a += 1) 1 === s.slidesPerGroup && m.push(m[m.length - 1] + t), h.push(h[h.length - 1] + t), e.virtualSize += t
            }
            if (0 === m.length && (m = [0]), 0 !== x) {
                const t = e.isHorizontal() && n ? "marginLeft" : e.getDirectionLabel("marginRight");
                c.filter(((e, t) => !(s.cssMode && !s.loop) || t !== c.length - 1)).forEach((e => {
                    e.style[t] = `${x}px`
                }))
            }
            if (s.centeredSlides && s.centeredSlidesBounds) {
                let e = 0;
                g.forEach((t => {
                    e += t + (x || 0)
                })), e -= x;
                const t = e - r;
                m = m.map((e => e <= 0 ? -v : e > t ? t + w : e))
            }
            if (s.centerInsufficientSlides) {
                let e = 0;
                if (g.forEach((t => {
                        e += t + (x || 0)
                    })), e -= x, e < r) {
                    const t = (r - e) / 2;
                    m.forEach(((e, s) => {
                        m[s] = e - t
                    })), h.forEach(((e, s) => {
                        h[s] = e + t
                    }))
                }
            }
            if (Object.assign(e, {
                    slides: c,
                    snapGrid: m,
                    slidesGrid: h,
                    slidesSizesGrid: g
                }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                u(a, "--swiper-centered-offset-before", -m[0] + "px"), u(a, "--swiper-centered-offset-after", e.size / 2 - g[g.length - 1] / 2 + "px");
                const t = -e.snapGrid[0],
                    s = -e.slidesGrid[0];
                e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
            }
            if (p !== d && e.emit("slidesLengthChange"), m.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== E && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(o || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
                const t = `${s.containerModifierClass}backface-hidden`,
                    a = e.el.classList.contains(t);
                p <= s.maxBackfaceHiddenSlides ? a || e.el.classList.add(t) : a && e.el.classList.remove(t)
            }
        },
        updateAutoHeight: function(e) {
            const t = this,
                s = [],
                a = t.virtual && t.params.virtual.enabled;
            let i, r = 0;
            "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
            const n = e => a ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                if (t.params.centeredSlides)(t.visibleSlides || []).forEach((e => {
                    s.push(e)
                }));
                else
                    for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                        const e = t.activeIndex + i;
                        if (e > t.slides.length && !a) break;
                        s.push(n(e))
                    } else s.push(n(t.activeIndex));
            for (i = 0; i < s.length; i += 1)
                if (void 0 !== s[i]) {
                    const e = s[i].offsetHeight;
                    r = e > r ? e : r
                }(r || 0 === r) && (t.wrapperEl.style.height = `${r}px`)
        },
        updateSlidesOffset: function() {
            const e = this,
                t = e.slides,
                s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
            for (let a = 0; a < t.length; a += 1) t[a].swiperSlideOffset = (e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop) - s - e.cssOverflowAdjustment()
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            const t = this,
                s = t.params,
                {
                    slides: a,
                    rtlTranslate: i,
                    snapGrid: r
                } = t;
            if (0 === a.length) return;
            void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
            let n = -e;
            i && (n = e), a.forEach((e => {
                e.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass)
            })), t.visibleSlidesIndexes = [], t.visibleSlides = [];
            let l = s.spaceBetween;
            "string" == typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : "string" == typeof l && (l = parseFloat(l));
            for (let e = 0; e < a.length; e += 1) {
                const o = a[e];
                let d = o.swiperSlideOffset;
                s.cssMode && s.centeredSlides && (d -= a[0].swiperSlideOffset);
                const c = (n + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l),
                    p = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l),
                    u = -(n - d),
                    m = u + t.slidesSizesGrid[e],
                    h = u >= 0 && u <= t.size - t.slidesSizesGrid[e];
                (u >= 0 && u < t.size - 1 || m > 1 && m <= t.size || u <= 0 && m >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(e), a[e].classList.add(s.slideVisibleClass)), h && a[e].classList.add(s.slideFullyVisibleClass), o.progress = i ? -c : c, o.originalProgress = i ? -p : p
            }
        },
        updateProgress: function(e) {
            const t = this;
            if (void 0 === e) {
                const s = t.rtlTranslate ? -1 : 1;
                e = t && t.translate && t.translate * s || 0
            }
            const s = t.params,
                a = t.maxTranslate() - t.minTranslate();
            let {
                progress: i,
                isBeginning: r,
                isEnd: n,
                progressLoop: l
            } = t;
            const o = r,
                d = n;
            if (0 === a) i = 0, r = !0, n = !0;
            else {
                i = (e - t.minTranslate()) / a;
                const s = Math.abs(e - t.minTranslate()) < 1,
                    l = Math.abs(e - t.maxTranslate()) < 1;
                r = s || i <= 0, n = l || i >= 1, s && (i = 0), l && (i = 1)
            }
            if (s.loop) {
                const s = t.getSlideIndexByData(0),
                    a = t.getSlideIndexByData(t.slides.length - 1),
                    i = t.slidesGrid[s],
                    r = t.slidesGrid[a],
                    n = t.slidesGrid[t.slidesGrid.length - 1],
                    o = Math.abs(e);
                l = o >= i ? (o - i) / n : (o + n - r) / n, l > 1 && (l -= 1)
            }
            Object.assign(t, {
                progress: i,
                progressLoop: l,
                isBeginning: r,
                isEnd: n
            }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !d && t.emit("reachEnd toEdge"), (o && !r || d && !n) && t.emit("fromEdge"), t.emit("progress", i)
        },
        updateSlidesClasses: function() {
            const e = this,
                {
                    slides: t,
                    params: s,
                    slidesEl: a,
                    activeIndex: i
                } = e,
                r = e.virtual && s.virtual.enabled,
                n = e.grid && s.grid && s.grid.rows > 1,
                l = e => f(a, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
            let o, d, c;
            if (r)
                if (s.loop) {
                    let t = i - e.virtual.slidesBefore;
                    t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), o = l(`[data-swiper-slide-index="${t}"]`)
                } else o = l(`[data-swiper-slide-index="${i}"]`);
            else n ? (o = t.filter((e => e.column === i))[0], c = t.filter((e => e.column === i + 1))[0], d = t.filter((e => e.column === i - 1))[0]) : o = t[i];
            o && (n || (c = function(e, t) {
                const s = [];
                for (; e.nextElementSibling;) {
                    const a = e.nextElementSibling;
                    t ? a.matches(t) && s.push(a) : s.push(a), e = a
                }
                return s
            }(o, `.${s.slideClass}, swiper-slide`)[0], s.loop && !c && (c = t[0]), d = function(e, t) {
                const s = [];
                for (; e.previousElementSibling;) {
                    const a = e.previousElementSibling;
                    t ? a.matches(t) && s.push(a) : s.push(a), e = a
                }
                return s
            }(o, `.${s.slideClass}, swiper-slide`)[0], s.loop && 0 === !d && (d = t[t.length - 1]))), t.forEach((e => {
                $(e, e === o, s.slideActiveClass), $(e, e === c, s.slideNextClass), $(e, e === d, s.slidePrevClass)
            })), e.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
            const t = this,
                s = t.rtlTranslate ? t.translate : -t.translate,
                {
                    snapGrid: a,
                    params: i,
                    activeIndex: r,
                    realIndex: n,
                    snapIndex: l
                } = t;
            let o, d = e;
            const c = e => {
                let s = e - t.virtual.slidesBefore;
                return s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), s
            };
            if (void 0 === d && (d = function(e) {
                    const {
                        slidesGrid: t,
                        params: s
                    } = e, a = e.rtlTranslate ? e.translate : -e.translate;
                    let i;
                    for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? a >= t[e] && a < t[e + 1] - (t[e + 1] - t[e]) / 2 ? i = e : a >= t[e] && a < t[e + 1] && (i = e + 1) : a >= t[e] && (i = e);
                    return s.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0), i
                }(t)), a.indexOf(s) >= 0) o = a.indexOf(s);
            else {
                const e = Math.min(i.slidesPerGroupSkip, d);
                o = e + Math.floor((d - e) / i.slidesPerGroup)
            }
            if (o >= a.length && (o = a.length - 1), d === r && !t.params.loop) return void(o !== l && (t.snapIndex = o, t.emit("snapIndexChange")));
            if (d === r && t.params.loop && t.virtual && t.params.virtual.enabled) return void(t.realIndex = c(d));
            const p = t.grid && i.grid && i.grid.rows > 1;
            let u;
            if (t.virtual && i.virtual.enabled && i.loop) u = c(d);
            else if (p) {
                const e = t.slides.filter((e => e.column === d))[0];
                let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)), u = Math.floor(s / i.grid.rows)
            } else if (t.slides[d]) {
                const e = t.slides[d].getAttribute("data-swiper-slide-index");
                u = e ? parseInt(e, 10) : d
            } else u = d;
            Object.assign(t, {
                previousSnapIndex: l,
                snapIndex: o,
                previousRealIndex: n,
                realIndex: u,
                previousIndex: r,
                activeIndex: d
            }), t.initialized && D(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (n !== u && t.emit("realIndexChange"), t.emit("slideChange"))
        },
        updateClickedSlide: function(e, t) {
            const s = this,
                a = s.params;
            let i = e.closest(`.${a.slideClass}, swiper-slide`);
            !i && s.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
                !i && e.matches && e.matches(`.${a.slideClass}, swiper-slide`) && (i = e)
            }));
            let r, n = !1;
            if (i)
                for (let e = 0; e < s.slides.length; e += 1)
                    if (s.slides[e] === i) {
                        n = !0, r = e;
                        break
                    }
            if (!i || !n) return s.clickedSlide = void 0, void(s.clickedIndex = void 0);
            s.clickedSlide = i, s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = r, a.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide()
        }
    };
    var H = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            const {
                params: t,
                rtlTranslate: s,
                translate: a,
                wrapperEl: i
            } = this;
            if (t.virtualTranslate) return s ? -a : a;
            if (t.cssMode) return a;
            let r = d(i, e);
            return r += this.cssOverflowAdjustment(), s && (r = -r), r || 0
        },
        setTranslate: function(e, t) {
            const s = this,
                {
                    rtlTranslate: a,
                    params: i,
                    wrapperEl: r,
                    progress: n
                } = s;
            let l, o = 0,
                d = 0;
            s.isHorizontal() ? o = a ? -e : e : d = e, i.roundLengths && (o = Math.floor(o), d = Math.floor(d)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? o : d, i.cssMode ? r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -o : -d : i.virtualTranslate || (s.isHorizontal() ? o -= s.cssOverflowAdjustment() : d -= s.cssOverflowAdjustment(), r.style.transform = `translate3d(${o}px, ${d}px, 0px)`);
            const c = s.maxTranslate() - s.minTranslate();
            l = 0 === c ? 0 : (e - s.minTranslate()) / c, l !== n && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        },
        translateTo: function(e, t, s, a, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0);
            const r = this,
                {
                    params: n,
                    wrapperEl: l
                } = r;
            if (r.animating && n.preventInteractionOnTransition) return !1;
            const o = r.minTranslate(),
                d = r.maxTranslate();
            let c;
            if (c = a && e > o ? o : a && e < d ? d : e, r.updateProgress(c), n.cssMode) {
                const e = r.isHorizontal();
                if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
                else {
                    if (!r.support.smoothScroll) return m({
                        swiper: r,
                        targetPosition: -c,
                        side: e ? "left" : "top"
                    }), !0;
                    l.scrollTo({
                        [e ? "left" : "top"]: -c,
                        behavior: "smooth"
                    })
                }
                return !0
            }
            return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, r.animating = !1, s && r.emit("transitionEnd"))
            }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0
        }
    };

    function N(e) {
        let {
            swiper: t,
            runCallbacks: s,
            direction: a,
            step: i
        } = e;
        const {
            activeIndex: r,
            previousIndex: n
        } = t;
        let l = a;
        if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit(`transition${i}`), s && r !== n) {
            if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
            t.emit(`slideChangeTransition${i}`), "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
        }
    }
    var X = {
        slideTo: function(e, t, s, a, i) {
            void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
            const r = this;
            let n = e;
            n < 0 && (n = 0);
            const {
                params: l,
                snapGrid: o,
                slidesGrid: d,
                previousIndex: c,
                activeIndex: p,
                rtlTranslate: u,
                wrapperEl: h,
                enabled: f
            } = r;
            if (!f && !a && !i || r.destroyed || r.animating && l.preventInteractionOnTransition) return !1;
            void 0 === t && (t = r.params.speed);
            const g = Math.min(r.params.slidesPerGroupSkip, n);
            let v = g + Math.floor((n - g) / r.params.slidesPerGroup);
            v >= o.length && (v = o.length - 1);
            const w = -o[v];
            if (l.normalizeSlideIndex)
                for (let e = 0; e < d.length; e += 1) {
                    const t = -Math.floor(100 * w),
                        s = Math.floor(100 * d[e]),
                        a = Math.floor(100 * d[e + 1]);
                    void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e)
                }
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext && (u ? w > r.translate && w > r.minTranslate() : w < r.translate && w < r.minTranslate())) return !1;
                if (!r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (p || 0) !== n) return !1
            }
            let b;
            if (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(w), b = n > p ? "next" : n < p ? "prev" : "reset", u && -w === r.translate || !u && w === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(w), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;
            if (l.cssMode) {
                const e = r.isHorizontal(),
                    s = u ? w : -w;
                if (0 === t) {
                    const t = r.virtual && r.params.virtual.enabled;
                    t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                        h[e ? "scrollLeft" : "scrollTop"] = s
                    }))) : h[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => {
                        r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1
                    }))
                } else {
                    if (!r.support.smoothScroll) return m({
                        swiper: r,
                        targetPosition: s,
                        side: e ? "left" : "top"
                    }), !0;
                    h.scrollTo({
                        [e ? "left" : "top"]: s,
                        behavior: "smooth"
                    })
                }
                return !0
            }
            return r.setTransition(t), r.setTranslate(w), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b))
            }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0
        },
        slideToLoop: function(e, t, s, a) {
            if (void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e) {
                e = parseInt(e, 10)
            }
            const i = this;
            if (i.destroyed) return;
            void 0 === t && (t = i.params.speed);
            const r = i.grid && i.params.grid && i.params.grid.rows > 1;
            let n = e;
            if (i.params.loop)
                if (i.virtual && i.params.virtual.enabled) n += i.virtual.slidesBefore;
                else {
                    let e;
                    if (r) {
                        const t = n * i.params.grid.rows;
                        e = i.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0].column
                    } else e = i.getSlideIndexByData(n);
                    const t = r ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length,
                        {
                            centeredSlides: s
                        } = i.params;
                    let l = i.params.slidesPerView;
                    "auto" === l ? l = i.slidesPerViewDynamic() : (l = Math.ceil(parseFloat(i.params.slidesPerView, 10)), s && l % 2 == 0 && (l += 1));
                    let o = t - e < l;
                    if (s && (o = o || e < Math.ceil(l / 2)), a && s && "auto" !== i.params.slidesPerView && !r && (o = !1), o) {
                        const a = s ? e < i.activeIndex ? "prev" : "next" : e - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
                        i.loopFix({
                            direction: a,
                            slideTo: !0,
                            activeSlideIndex: "next" === a ? e + 1 : e - t + 1,
                            slideRealIndex: "next" === a ? i.realIndex : void 0
                        })
                    }
                    if (r) {
                        const e = n * i.params.grid.rows;
                        n = i.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0].column
                    } else n = i.getSlideIndexByData(n)
                }
            return requestAnimationFrame((() => {
                i.slideTo(n, t, s, a)
            })), i
        },
        slideNext: function(e, t, s) {
            void 0 === t && (t = !0);
            const a = this,
                {
                    enabled: i,
                    params: r,
                    animating: n
                } = a;
            if (!i || a.destroyed) return a;
            void 0 === e && (e = a.params.speed);
            let l = r.slidesPerGroup;
            "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
            const o = a.activeIndex < r.slidesPerGroupSkip ? 1 : l,
                d = a.virtual && r.virtual.enabled;
            if (r.loop) {
                if (n && !d && r.loopPreventsSliding) return !1;
                if (a.loopFix({
                        direction: "next"
                    }), a._clientLeft = a.wrapperEl.clientLeft, a.activeIndex === a.slides.length - 1 && r.cssMode) return requestAnimationFrame((() => {
                    a.slideTo(a.activeIndex + o, e, t, s)
                })), !0
            }
            return r.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s)
        },
        slidePrev: function(e, t, s) {
            void 0 === t && (t = !0);
            const a = this,
                {
                    params: i,
                    snapGrid: r,
                    slidesGrid: n,
                    rtlTranslate: l,
                    enabled: o,
                    animating: d
                } = a;
            if (!o || a.destroyed) return a;
            void 0 === e && (e = a.params.speed);
            const c = a.virtual && i.virtual.enabled;
            if (i.loop) {
                if (d && !c && i.loopPreventsSliding) return !1;
                a.loopFix({
                    direction: "prev"
                }), a._clientLeft = a.wrapperEl.clientLeft
            }

            function p(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const u = p(l ? a.translate : -a.translate),
                m = r.map((e => p(e)));
            let h = r[m.indexOf(u) - 1];
            if (void 0 === h && i.cssMode) {
                let e;
                r.forEach(((t, s) => {
                    u >= t && (e = s)
                })), void 0 !== e && (h = r[e > 0 ? e - 1 : e])
            }
            let f = 0;
            if (void 0 !== h && (f = n.indexOf(h), f < 0 && (f = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (f = f - a.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), i.rewind && a.isBeginning) {
                const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
                return a.slideTo(i, e, t, s)
            }
            return i.loop && 0 === a.activeIndex && i.cssMode ? (requestAnimationFrame((() => {
                a.slideTo(f, e, t, s)
            })), !0) : a.slideTo(f, e, t, s)
        },
        slideReset: function(e, t, s) {
            void 0 === t && (t = !0);
            const a = this;
            if (!a.destroyed) return void 0 === e && (e = a.params.speed), a.slideTo(a.activeIndex, e, t, s)
        },
        slideToClosest: function(e, t, s, a) {
            void 0 === t && (t = !0), void 0 === a && (a = .5);
            const i = this;
            if (i.destroyed) return;
            void 0 === e && (e = i.params.speed);
            let r = i.activeIndex;
            const n = Math.min(i.params.slidesPerGroupSkip, r),
                l = n + Math.floor((r - n) / i.params.slidesPerGroup),
                o = i.rtlTranslate ? i.translate : -i.translate;
            if (o >= i.snapGrid[l]) {
                const e = i.snapGrid[l];
                o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup)
            } else {
                const e = i.snapGrid[l - 1];
                o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup)
            }
            return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s)
        },
        slideToClickedSlide: function() {
            const e = this;
            if (e.destroyed) return;
            const {
                params: t,
                slidesEl: s
            } = e, a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let i, r = e.clickedIndex;
            const n = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
            if (t.loop) {
                if (e.animating) return;
                i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = e.getSlideIndex(f(s, `${n}[data-swiper-slide-index="${i}"]`)[0]), l((() => {
                    e.slideTo(r)
                }))) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = e.getSlideIndex(f(s, `${n}[data-swiper-slide-index="${i}"]`)[0]), l((() => {
                    e.slideTo(r)
                }))) : e.slideTo(r)
            } else e.slideTo(r)
        }
    };
    var Y = {
        loopCreate: function(e) {
            const t = this,
                {
                    params: s,
                    slidesEl: a
                } = t;
            if (!s.loop || t.virtual && t.params.virtual.enabled) return;
            const i = () => {
                    f(a, `.${s.slideClass}, swiper-slide`).forEach(((e, t) => {
                        e.setAttribute("data-swiper-slide-index", t)
                    }))
                },
                r = t.grid && s.grid && s.grid.rows > 1,
                n = s.slidesPerGroup * (r ? s.grid.rows : 1),
                l = t.slides.length % n != 0,
                o = r && t.slides.length % s.grid.rows != 0,
                d = e => {
                    for (let a = 0; a < e; a += 1) {
                        const e = t.isElement ? v("swiper-slide", [s.slideBlankClass]) : v("div", [s.slideClass, s.slideBlankClass]);
                        t.slidesEl.append(e)
                    }
                };
            if (l) {
                if (s.loopAddBlankSlides) {
                    d(n - t.slides.length % n), t.recalcSlides(), t.updateSlides()
                } else g("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                i()
            } else if (o) {
                if (s.loopAddBlankSlides) {
                    d(s.grid.rows - t.slides.length % s.grid.rows), t.recalcSlides(), t.updateSlides()
                } else g("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                i()
            } else i();
            t.loopFix({
                slideRealIndex: e,
                direction: s.centeredSlides ? void 0 : "next"
            })
        },
        loopFix: function(e) {
            let {
                slideRealIndex: t,
                slideTo: s = !0,
                direction: a,
                setTranslate: i,
                activeSlideIndex: r,
                byController: n,
                byMousewheel: l
            } = void 0 === e ? {} : e;
            const o = this;
            if (!o.params.loop) return;
            o.emit("beforeLoopFix");
            const {
                slides: d,
                allowSlidePrev: c,
                allowSlideNext: p,
                slidesEl: u,
                params: m
            } = o, {
                centeredSlides: h
            } = m;
            if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && m.virtual.enabled) return s && (m.centeredSlides || 0 !== o.snapIndex ? m.centeredSlides && o.snapIndex < m.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0) : o.slideTo(o.virtual.slides.length, 0, !1, !0)), o.allowSlidePrev = c, o.allowSlideNext = p, void o.emit("loopFix");
            let f = m.slidesPerView;
            "auto" === f ? f = o.slidesPerViewDynamic() : (f = Math.ceil(parseFloat(m.slidesPerView, 10)), h && f % 2 == 0 && (f += 1));
            const v = m.slidesPerGroupAuto ? f : m.slidesPerGroup;
            let w = v;
            w % v != 0 && (w += v - w % v), w += m.loopAdditionalSlides, o.loopedSlides = w;
            const b = o.grid && m.grid && m.grid.rows > 1;
            d.length < f + w ? g("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === m.grid.fill && g("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const y = [],
                E = [];
            let x = o.activeIndex;
            void 0 === r ? r = o.getSlideIndex(d.filter((e => e.classList.contains(m.slideActiveClass)))[0]) : x = r;
            const S = "next" === a || !a,
                T = "prev" === a || !a;
            let M = 0,
                C = 0;
            const P = b ? Math.ceil(d.length / m.grid.rows) : d.length,
                L = (b ? d[r].column : r) + (h && void 0 === i ? -f / 2 + .5 : 0);
            if (L < w) {
                M = Math.max(w - L, v);
                for (let e = 0; e < w - L; e += 1) {
                    const t = e - Math.floor(e / P) * P;
                    if (b) {
                        const e = P - t - 1;
                        for (let t = d.length - 1; t >= 0; t -= 1) d[t].column === e && y.push(t)
                    } else y.push(P - t - 1)
                }
            } else if (L + f > P - w) {
                C = Math.max(L - (P - 2 * w), v);
                for (let e = 0; e < C; e += 1) {
                    const t = e - Math.floor(e / P) * P;
                    b ? d.forEach(((e, s) => {
                        e.column === t && E.push(s)
                    })) : E.push(t)
                }
            }
            if (o.__preventObserver__ = !0, requestAnimationFrame((() => {
                    o.__preventObserver__ = !1
                })), T && y.forEach((e => {
                    d[e].swiperLoopMoveDOM = !0, u.prepend(d[e]), d[e].swiperLoopMoveDOM = !1
                })), S && E.forEach((e => {
                    d[e].swiperLoopMoveDOM = !0, u.append(d[e]), d[e].swiperLoopMoveDOM = !1
                })), o.recalcSlides(), "auto" === m.slidesPerView ? o.updateSlides() : b && (y.length > 0 && T || E.length > 0 && S) && o.slides.forEach(((e, t) => {
                    o.grid.updateSlide(t, e, o.slides)
                })), m.watchSlidesProgress && o.updateSlidesOffset(), s)
                if (y.length > 0 && T) {
                    if (void 0 === t) {
                        const e = o.slidesGrid[x],
                            t = o.slidesGrid[x + M] - e;
                        l ? o.setTranslate(o.translate - t) : (o.slideTo(x + Math.ceil(M), 0, !1, !0), i && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t))
                    } else if (i) {
                        const e = b ? y.length / m.grid.rows : y.length;
                        o.slideTo(o.activeIndex + e, 0, !1, !0), o.touchEventsData.currentTranslate = o.translate
                    }
                } else if (E.length > 0 && S)
                if (void 0 === t) {
                    const e = o.slidesGrid[x],
                        t = o.slidesGrid[x - C] - e;
                    l ? o.setTranslate(o.translate - t) : (o.slideTo(x - C, 0, !1, !0), i && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t))
                } else {
                    const e = b ? E.length / m.grid.rows : E.length;
                    o.slideTo(o.activeIndex - e, 0, !1, !0)
                }
            if (o.allowSlidePrev = c, o.allowSlideNext = p, o.controller && o.controller.control && !n) {
                const e = {
                    slideRealIndex: t,
                    direction: a,
                    setTranslate: i,
                    activeSlideIndex: r,
                    byController: !0
                };
                Array.isArray(o.controller.control) ? o.controller.control.forEach((t => {
                    !t.destroyed && t.params.loop && t.loopFix({ ...e,
                        slideTo: t.params.slidesPerView === m.slidesPerView && s
                    })
                })) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix({ ...e,
                    slideTo: o.controller.control.params.slidesPerView === m.slidesPerView && s
                })
            }
            o.emit("loopFix")
        },
        loopDestroy: function() {
            const e = this,
                {
                    params: t,
                    slidesEl: s
                } = e;
            if (!t.loop || e.virtual && e.params.virtual.enabled) return;
            e.recalcSlides();
            const a = [];
            e.slides.forEach((e => {
                const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                a[t] = e
            })), e.slides.forEach((e => {
                e.removeAttribute("data-swiper-slide-index")
            })), a.forEach((e => {
                s.append(e)
            })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
        }
    };

    function B(e, t, s) {
        const a = r(),
            {
                params: i
            } = e,
            n = i.edgeSwipeDetection,
            l = i.edgeSwipeThreshold;
        return !n || !(s <= l || s >= a.innerWidth - l) || "prevent" === n && (t.preventDefault(), !0)
    }

    function R(e) {
        const t = this,
            s = a();
        let i = e;
        i.originalEvent && (i = i.originalEvent);
        const n = t.touchEventsData;
        if ("pointerdown" === i.type) {
            if (null !== n.pointerId && n.pointerId !== i.pointerId) return;
            n.pointerId = i.pointerId
        } else "touchstart" === i.type && 1 === i.targetTouches.length && (n.touchId = i.targetTouches[0].identifier);
        if ("touchstart" === i.type) return void B(t, i, i.targetTouches[0].pageX);
        const {
            params: l,
            touches: d,
            enabled: c
        } = t;
        if (!c) return;
        if (!l.simulateTouch && "mouse" === i.pointerType) return;
        if (t.animating && l.preventInteractionOnTransition) return;
        !t.animating && l.cssMode && l.loop && t.loopFix();
        let p = i.target;
        if ("wrapper" === l.touchEventsTarget && !t.wrapperEl.contains(p)) return;
        if ("which" in i && 3 === i.which) return;
        if ("button" in i && i.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        const u = !!l.noSwipingClass && "" !== l.noSwipingClass,
            m = i.composedPath ? i.composedPath() : i.path;
        u && i.target && i.target.shadowRoot && m && (p = m[0]);
        const h = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
            f = !(!i.target || !i.target.shadowRoot);
        if (l.noSwiping && (f ? function(e, t) {
                return void 0 === t && (t = this),
                    function t(s) {
                        if (!s || s === a() || s === r()) return null;
                        s.assignedSlot && (s = s.assignedSlot);
                        const i = s.closest(e);
                        return i || s.getRootNode ? i || t(s.getRootNode().host) : null
                    }(t)
            }(h, p) : p.closest(h))) return void(t.allowClick = !0);
        if (l.swipeHandler && !p.closest(l.swipeHandler)) return;
        d.currentX = i.pageX, d.currentY = i.pageY;
        const g = d.currentX,
            v = d.currentY;
        if (!B(t, i, g)) return;
        Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }), d.startX = g, d.startY = v, n.touchStartTime = o(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1);
        let w = !0;
        p.matches(n.focusableElements) && (w = !1, "SELECT" === p.nodeName && (n.isTouched = !1)), s.activeElement && s.activeElement.matches(n.focusableElements) && s.activeElement !== p && s.activeElement.blur();
        const b = w && t.allowTouchMove && l.touchStartPreventDefault;
        !l.touchStartForcePreventDefault && !b || p.isContentEditable || i.preventDefault(), l.freeMode && l.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", i)
    }

    function F(e) {
        const t = a(),
            s = this,
            i = s.touchEventsData,
            {
                params: r,
                touches: n,
                rtlTranslate: l,
                enabled: d
            } = s;
        if (!d) return;
        if (!r.simulateTouch && "mouse" === e.pointerType) return;
        let c, p = e;
        if (p.originalEvent && (p = p.originalEvent), "pointermove" === p.type) {
            if (null !== i.touchId) return;
            if (p.pointerId !== i.pointerId) return
        }
        if ("touchmove" === p.type) {
            if (c = [...p.changedTouches].filter((e => e.identifier === i.touchId))[0], !c || c.identifier !== i.touchId) return
        } else c = p;
        if (!i.isTouched) return void(i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", p));
        const u = c.pageX,
            m = c.pageY;
        if (p.preventedByNestedSwiper) return n.startX = u, void(n.startY = m);
        if (!s.allowTouchMove) return p.target.matches(i.focusableElements) || (s.allowClick = !1), void(i.isTouched && (Object.assign(n, {
            startX: u,
            startY: m,
            currentX: u,
            currentY: m
        }), i.touchStartTime = o()));
        if (r.touchReleaseOnEdges && !r.loop)
            if (s.isVertical()) {
                if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
            } else if (u < n.startX && s.translate <= s.maxTranslate() || u > n.startX && s.translate >= s.minTranslate()) return;
        if (t.activeElement && p.target === t.activeElement && p.target.matches(i.focusableElements)) return i.isMoved = !0, void(s.allowClick = !1);
        i.allowTouchCallbacks && s.emit("touchMove", p), n.previousX = n.currentX, n.previousY = n.currentY, n.currentX = u, n.currentY = m;
        const h = n.currentX - n.startX,
            f = n.currentY - n.startY;
        if (s.params.threshold && Math.sqrt(h ** 2 + f ** 2) < s.params.threshold) return;
        if (void 0 === i.isScrolling) {
            let e;
            s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : h * h + f * f >= 25 && (e = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
        }
        if (i.isScrolling && s.emit("touchMoveOpposite", p), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling || "touchmove" === p.type && i.preventTouchMoveFromPointerMove) return void(i.isTouched = !1);
        if (!i.startMoving) return;
        s.allowClick = !1, !r.cssMode && p.cancelable && p.preventDefault(), r.touchMoveStopPropagation && !r.nested && p.stopPropagation();
        let g = s.isHorizontal() ? h : f,
            v = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
        r.oneWayMovement && (g = Math.abs(g) * (l ? 1 : -1), v = Math.abs(v) * (l ? 1 : -1)), n.diff = g, g *= r.touchRatio, l && (g = -g, v = -v);
        const w = s.touchesDirection;
        s.swipeDirection = g > 0 ? "prev" : "next", s.touchesDirection = v > 0 ? "prev" : "next";
        const b = s.params.loop && !r.cssMode,
            y = "next" === s.touchesDirection && s.allowSlideNext || "prev" === s.touchesDirection && s.allowSlidePrev;
        if (!i.isMoved) {
            if (b && y && s.loopFix({
                    direction: s.swipeDirection
                }), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
                const e = new window.CustomEvent("transitionend", {
                    bubbles: !0,
                    cancelable: !0
                });
                s.wrapperEl.dispatchEvent(e)
            }
            i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", p)
        }
        if ((new Date).getTime(), i.isMoved && i.allowThresholdMove && w !== s.touchesDirection && b && y && Math.abs(g) >= 1) return Object.assign(n, {
            startX: u,
            startY: m,
            currentX: u,
            currentY: m,
            startTranslate: i.currentTranslate
        }), i.loopSwapReset = !0, void(i.startTranslate = i.currentTranslate);
        s.emit("sliderMove", p), i.isMoved = !0, i.currentTranslate = g + i.startTranslate;
        let E = !0,
            x = r.resistanceRatio;
        if (r.touchReleaseOnEdges && (x = 0), g > 0 ? (b && y && i.allowThresholdMove && i.currentTranslate > (r.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] : s.minTranslate()) && s.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0
            }), i.currentTranslate > s.minTranslate() && (E = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + g) ** x))) : g < 0 && (b && y && i.allowThresholdMove && i.currentTranslate < (r.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] : s.maxTranslate()) && s.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex: s.slides.length - ("auto" === r.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
            }), i.currentTranslate < s.maxTranslate() && (E = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - g) ** x))), E && (p.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
            if (!(Math.abs(g) > r.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void(n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
        }
        r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
    }

    function q(e) {
        const t = this,
            s = t.touchEventsData;
        let a, i = e;
        i.originalEvent && (i = i.originalEvent);
        if ("touchend" === i.type || "touchcancel" === i.type) {
            if (a = [...i.changedTouches].filter((e => e.identifier === s.touchId))[0], !a || a.identifier !== s.touchId) return
        } else {
            if (null !== s.touchId) return;
            if (i.pointerId !== s.pointerId) return;
            a = i
        }
        if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type)) {
            if (!(["pointercancel", "contextmenu"].includes(i.type) && (t.browser.isSafari || t.browser.isWebView))) return
        }
        s.pointerId = null, s.touchId = null;
        const {
            params: r,
            touches: n,
            rtlTranslate: d,
            slidesGrid: c,
            enabled: p
        } = t;
        if (!p) return;
        if (!r.simulateTouch && "mouse" === i.pointerType) return;
        if (s.allowTouchCallbacks && t.emit("touchEnd", i), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && r.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
        r.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const u = o(),
            m = u - s.touchStartTime;
        if (t.allowClick) {
            const e = i.path || i.composedPath && i.composedPath();
            t.updateClickedSlide(e && e[0] || i.target, e), t.emit("tap click", i), m < 300 && u - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", i)
        }
        if (s.lastClickTime = o(), l((() => {
                t.destroyed || (t.allowClick = !0)
            })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === n.diff && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
        let h;
        if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = r.followFinger ? d ? t.translate : -t.translate : -s.currentTranslate, r.cssMode) return;
        if (r.freeMode && r.freeMode.enabled) return void t.freeMode.onTouchEnd({
            currentPos: h
        });
        const f = h >= -t.maxTranslate() && !t.params.loop;
        let g = 0,
            v = t.slidesSizesGrid[0];
        for (let e = 0; e < c.length; e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
            const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
            void 0 !== c[e + t] ? (f || h >= c[e] && h < c[e + t]) && (g = e, v = c[e + t] - c[e]) : (f || h >= c[e]) && (g = e, v = c[c.length - 1] - c[c.length - 2])
        }
        let w = null,
            b = null;
        r.rewind && (t.isBeginning ? b = r.virtual && r.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (w = 0));
        const y = (h - c[g]) / v,
            E = g < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
        if (m > r.longSwipesMs) {
            if (!r.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (y >= r.longSwipesRatio ? t.slideTo(r.rewind && t.isEnd ? w : g + E) : t.slideTo(g)), "prev" === t.swipeDirection && (y > 1 - r.longSwipesRatio ? t.slideTo(g + E) : null !== b && y < 0 && Math.abs(y) > r.longSwipesRatio ? t.slideTo(b) : t.slideTo(g))
        } else {
            if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation && (i.target === t.navigation.nextEl || i.target === t.navigation.prevEl) ? i.target === t.navigation.nextEl ? t.slideTo(g + E) : t.slideTo(g) : ("next" === t.swipeDirection && t.slideTo(null !== w ? w : g + E), "prev" === t.swipeDirection && t.slideTo(null !== b ? b : g))
        }
    }

    function V() {
        const e = this,
            {
                params: t,
                el: s
            } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
            allowSlideNext: a,
            allowSlidePrev: i,
            snapGrid: r
        } = e, n = e.virtual && e.params.virtual.enabled;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
        const l = n && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || l ? e.params.loop && !n ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
            e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
        }), 500)), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
    }

    function _(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
    }

    function W() {
        const e = this,
            {
                wrapperEl: t,
                rtlTranslate: s,
                enabled: a
            } = e;
        if (!a) return;
        let i;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
    }

    function j(e) {
        const t = this;
        k(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
    }

    function U() {
        const e = this;
        e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
    }
    const K = (e, t) => {
        const s = a(),
            {
                params: i,
                el: r,
                wrapperEl: n,
                device: l
            } = e,
            o = !!i.nested,
            d = "on" === t ? "addEventListener" : "removeEventListener",
            c = t;
        s[d]("touchstart", e.onDocumentTouchStart, {
            passive: !1,
            capture: o
        }), r[d]("touchstart", e.onTouchStart, {
            passive: !1
        }), r[d]("pointerdown", e.onTouchStart, {
            passive: !1
        }), s[d]("touchmove", e.onTouchMove, {
            passive: !1,
            capture: o
        }), s[d]("pointermove", e.onTouchMove, {
            passive: !1,
            capture: o
        }), s[d]("touchend", e.onTouchEnd, {
            passive: !0
        }), s[d]("pointerup", e.onTouchEnd, {
            passive: !0
        }), s[d]("pointercancel", e.onTouchEnd, {
            passive: !0
        }), s[d]("touchcancel", e.onTouchEnd, {
            passive: !0
        }), s[d]("pointerout", e.onTouchEnd, {
            passive: !0
        }), s[d]("pointerleave", e.onTouchEnd, {
            passive: !0
        }), s[d]("contextmenu", e.onTouchEnd, {
            passive: !0
        }), (i.preventClicks || i.preventClicksPropagation) && r[d]("click", e.onClick, !0), i.cssMode && n[d]("scroll", e.onScroll), i.updateOnWindowResize ? e[c](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", V, !0) : e[c]("observerUpdate", V, !0), r[d]("load", e.onLoad, {
            capture: !0
        })
    };
    const Z = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var Q = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

    function J(e, t) {
        return function(s) {
            void 0 === s && (s = {});
            const a = Object.keys(s)[0],
                i = s[a];
            "object" == typeof i && null !== i ? (!0 === e[a] && (e[a] = {
                enabled: !0
            }), "navigation" === a && e[a] && e[a].enabled && !e[a].prevEl && !e[a].nextEl && (e[a].auto = !0), ["pagination", "scrollbar"].indexOf(a) >= 0 && e[a] && e[a].enabled && !e[a].el && (e[a].auto = !0), a in e && "enabled" in i ? ("object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {
                enabled: !1
            }), p(t, s)) : p(t, s)) : p(t, s)
        }
    }
    const ee = {
            eventsEmitter: A,
            update: G,
            translate: H,
            transition: {
                setTransition: function(e, t) {
                    const s = this;
                    s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`, s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), s.emit("setTransition", e, t)
                },
                transitionStart: function(e, t) {
                    void 0 === e && (e = !0);
                    const s = this,
                        {
                            params: a
                        } = s;
                    a.cssMode || (a.autoHeight && s.updateAutoHeight(), N({
                        swiper: s,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                },
                transitionEnd: function(e, t) {
                    void 0 === e && (e = !0);
                    const s = this,
                        {
                            params: a
                        } = s;
                    s.animating = !1, a.cssMode || (s.setTransition(0), N({
                        swiper: s,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            },
            slide: X,
            loop: Y,
            grabCursor: {
                setGrabCursor: function(e) {
                    const t = this;
                    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                    const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
                        t.__preventObserver__ = !1
                    }))
                },
                unsetGrabCursor: function() {
                    const e = this;
                    e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => {
                        e.__preventObserver__ = !1
                    })))
                }
            },
            events: {
                attachEvents: function() {
                    const e = this,
                        {
                            params: t
                        } = e;
                    e.onTouchStart = R.bind(e), e.onTouchMove = F.bind(e), e.onTouchEnd = q.bind(e), e.onDocumentTouchStart = U.bind(e), t.cssMode && (e.onScroll = W.bind(e)), e.onClick = _.bind(e), e.onLoad = j.bind(e), K(e, "on")
                },
                detachEvents: function() {
                    K(this, "off")
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    const e = this,
                        {
                            realIndex: t,
                            initialized: s,
                            params: a,
                            el: i
                        } = e,
                        r = a.breakpoints;
                    if (!r || r && 0 === Object.keys(r).length) return;
                    const n = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
                    if (!n || e.currentBreakpoint === n) return;
                    const l = (n in r ? r[n] : void 0) || e.originalParams,
                        o = Z(e, a),
                        d = Z(e, l),
                        c = e.params.grabCursor,
                        u = l.grabCursor,
                        m = a.enabled;
                    o && !d ? (i.classList.remove(`${a.containerModifierClass}grid`, `${a.containerModifierClass}grid-column`), e.emitContainerClasses()) : !o && d && (i.classList.add(`${a.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === a.grid.fill) && i.classList.add(`${a.containerModifierClass}grid-column`), e.emitContainerClasses()), c && !u ? e.unsetGrabCursor() : !c && u && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((t => {
                        if (void 0 === l[t]) return;
                        const s = a[t] && a[t].enabled,
                            i = l[t] && l[t].enabled;
                        s && !i && e[t].disable(), !s && i && e[t].enable()
                    }));
                    const h = l.direction && l.direction !== a.direction,
                        f = a.loop && (l.slidesPerView !== a.slidesPerView || h),
                        g = a.loop;
                    h && s && e.changeDirection(), p(e.params, l);
                    const v = e.params.enabled,
                        w = e.params.loop;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), m && !v ? e.disable() : !m && v && e.enable(), e.currentBreakpoint = n, e.emit("_beforeBreakpoint", l), s && (f ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !g && w ? (e.loopCreate(t), e.updateSlides()) : g && !w && e.loopDestroy()), e.emit("breakpoint", l)
                },
                getBreakpoint: function(e, t, s) {
                    if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
                    let a = !1;
                    const i = r(),
                        n = "window" === t ? i.innerHeight : s.clientHeight,
                        l = Object.keys(e).map((e => {
                            if ("string" == typeof e && 0 === e.indexOf("@")) {
                                const t = parseFloat(e.substr(1));
                                return {
                                    value: n * t,
                                    point: e
                                }
                            }
                            return {
                                value: e,
                                point: e
                            }
                        }));
                    l.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let e = 0; e < l.length; e += 1) {
                        const {
                            point: r,
                            value: n
                        } = l[e];
                        "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r)
                    }
                    return a || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    const e = this,
                        {
                            isLocked: t,
                            params: s
                        } = e,
                        {
                            slidesOffsetBefore: a
                        } = s;
                    if (a) {
                        const t = e.slides.length - 1,
                            s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                        e.isLocked = e.size > s
                    } else e.isLocked = 1 === e.snapGrid.length;
                    !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            },
            classes: {
                addClasses: function() {
                    const e = this,
                        {
                            classNames: t,
                            params: s,
                            rtl: a,
                            el: i,
                            device: r
                        } = e,
                        n = function(e, t) {
                            const s = [];
                            return e.forEach((e => {
                                "object" == typeof e ? Object.keys(e).forEach((a => {
                                    e[a] && s.push(t + a)
                                })) : "string" == typeof e && s.push(t + e)
                            })), s
                        }(["initialized", s.direction, {
                            "free-mode": e.params.freeMode && s.freeMode.enabled
                        }, {
                            autoheight: s.autoHeight
                        }, {
                            rtl: a
                        }, {
                            grid: s.grid && s.grid.rows > 1
                        }, {
                            "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                        }, {
                            android: r.android
                        }, {
                            ios: r.ios
                        }, {
                            "css-mode": s.cssMode
                        }, {
                            centered: s.cssMode && s.centeredSlides
                        }, {
                            "watch-progress": s.watchSlidesProgress
                        }], s.containerModifierClass);
                    t.push(...n), i.classList.add(...t), e.emitContainerClasses()
                },
                removeClasses: function() {
                    const {
                        el: e,
                        classNames: t
                    } = this;
                    e.classList.remove(...t), this.emitContainerClasses()
                }
            }
        },
        te = {};
    class se {
        constructor() {
            let e, t;
            for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++) i[r] = arguments[r];
            1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = p({}, t), e && !t.el && (t.el = e);
            const n = a();
            if (t.el && "string" == typeof t.el && n.querySelectorAll(t.el).length > 1) {
                const e = [];
                return n.querySelectorAll(t.el).forEach((s => {
                    const a = p({}, t, {
                        el: s
                    });
                    e.push(new se(a))
                })), e
            }
            const l = this;
            l.__swiper__ = !0, l.support = L(), l.device = I({
                userAgent: t.userAgent
            }), l.browser = z(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
            const o = {};
            l.modules.forEach((e => {
                e({
                    params: t,
                    swiper: l,
                    extendParams: J(t, o),
                    on: l.on.bind(l),
                    once: l.once.bind(l),
                    off: l.off.bind(l),
                    emit: l.emit.bind(l)
                })
            }));
            const d = p({}, Q, o);
            return l.params = p({}, d, te, t), l.originalParams = p({}, l.params), l.passedParams = p({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach((e => {
                l.on(e, l.params.on[e])
            })), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
                enabled: l.params.enabled,
                el: e,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === l.params.direction,
                isVertical: () => "vertical" === l.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                cssOverflowAdjustment() {
                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                },
                allowSlideNext: l.params.allowSlideNext,
                allowSlidePrev: l.params.allowSlidePrev,
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: l.params.focusableElements,
                    lastClickTime: 0,
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    startMoving: void 0,
                    pointerId: null,
                    touchId: null
                },
                allowClick: !0,
                allowTouchMove: l.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }), l.emit("_swiper"), l.params.init && l.init(), l
        }
        getDirectionLabel(e) {
            return this.isHorizontal() ? e : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom"
            }[e]
        }
        getSlideIndex(e) {
            const {
                slidesEl: t,
                params: s
            } = this, a = y(f(t, `.${s.slideClass}, swiper-slide`)[0]);
            return y(e) - a
        }
        getSlideIndexByData(e) {
            return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
        }
        recalcSlides() {
            const {
                slidesEl: e,
                params: t
            } = this;
            this.slides = f(e, `.${t.slideClass}, swiper-slide`)
        }
        enable() {
            const e = this;
            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }
        disable() {
            const e = this;
            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }
        setProgress(e, t) {
            const s = this;
            e = Math.min(Math.max(e, 0), 1);
            const a = s.minTranslate(),
                i = (s.maxTranslate() - a) * e + a;
            s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
        }
        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
            e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
            const t = this;
            return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.forEach((s => {
                const a = e.getSlideClasses(s);
                t.push({
                    slideEl: s,
                    classNames: a
                }), e.emit("_slideClass", s, a)
            })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
            void 0 === e && (e = "current"), void 0 === t && (t = !1);
            const {
                params: s,
                slides: a,
                slidesGrid: i,
                slidesSizesGrid: r,
                size: n,
                activeIndex: l
            } = this;
            let o = 1;
            if ("number" == typeof s.slidesPerView) return s.slidesPerView;
            if (s.centeredSlides) {
                let e, t = a[l] ? Math.ceil(a[l].swiperSlideSize) : 0;
                for (let s = l + 1; s < a.length; s += 1) a[s] && !e && (t += Math.ceil(a[s].swiperSlideSize), o += 1, t > n && (e = !0));
                for (let s = l - 1; s >= 0; s -= 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0))
            } else if ("current" === e)
                for (let e = l + 1; e < a.length; e += 1) {
                    (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1)
                } else
                    for (let e = l - 1; e >= 0; e -= 1) {
                        i[l] - i[e] < n && (o += 1)
                    }
            return o
        }
        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const {
                snapGrid: t,
                params: s
            } = e;

            function a() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
            }
            let i;
            if (s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
                    t.complete && k(e, t)
                })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) a(), s.autoHeight && e.updateAutoHeight();
            else {
                if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
                    const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
                    i = e.slideTo(t.length - 1, 0, !1, !0)
                } else i = e.slideTo(e.activeIndex, 0, !1, !0);
                i || a()
            }
            s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t) {
            void 0 === t && (t = !0);
            const s = this,
                a = s.params.direction;
            return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${a}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((t => {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            })), s.emit("changeDirection"), t && s.update()), s
        }
        changeLanguageDirection(e) {
            const t = this;
            t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }
        mount(e) {
            const t = this;
            if (t.mounted) return !0;
            let s = e || t.params.el;
            if ("string" == typeof s && (s = document.querySelector(s)), !s) return !1;
            s.swiper = t, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
            const a = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
            let i = (() => {
                if (s && s.shadowRoot && s.shadowRoot.querySelector) {
                    return s.shadowRoot.querySelector(a())
                }
                return f(s, a())[0]
            })();
            return !i && t.params.createElements && (i = v("div", t.params.wrapperClass), s.append(i), f(s, `.${t.params.slideClass}`).forEach((e => {
                i.append(e)
            }))), Object.assign(t, {
                el: s,
                wrapperEl: i,
                slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : i,
                hostEl: t.isElement ? s.parentNode.host : s,
                mounted: !0,
                rtl: "rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction")),
                wrongRTL: "-webkit-box" === b(i, "display")
            }), !0
        }
        init(e) {
            const t = this;
            if (t.initialized) return t;
            if (!1 === t.mount(e)) return t;
            t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
            const s = [...t.el.querySelectorAll('[loading="lazy"]')];
            return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach((e => {
                e.complete ? k(t, e) : e.addEventListener("load", (e => {
                    k(t, e.target)
                }))
            })), D(t), t.initialized = !0, D(t), t.emit("init"), t.emit("afterInit"), t
        }
        destroy(e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            const s = this,
                {
                    params: a,
                    el: i,
                    wrapperEl: r,
                    slides: n
                } = s;
            return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttribute("style"), r.removeAttribute("style"), n && n.length && n.forEach((e => {
                e.classList.remove(a.slideVisibleClass, a.slideFullyVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
            }))), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
                s.off(e)
            })), !1 !== e && (s.el.swiper = null, function(e) {
                const t = e;
                Object.keys(t).forEach((e => {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                }))
            }(s)), s.destroyed = !0), null
        }
        static extendDefaults(e) {
            p(te, e)
        }
        static get extendedDefaults() {
            return te
        }
        static get defaults() {
            return Q
        }
        static installModule(e) {
            se.prototype.__modules__ || (se.prototype.__modules__ = []);
            const t = se.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
            return Array.isArray(e) ? (e.forEach((e => se.installModule(e))), se) : (se.installModule(e), se)
        }
    }

    function ae(e, t, s, a) {
        return e.params.createElements && Object.keys(a).forEach((i => {
            if (!s[i] && !0 === s.auto) {
                let r = f(e.el, `.${a[i]}`)[0];
                r || (r = v("div", a[i]), r.className = a[i], e.el.append(r)), s[i] = r, t[i] = r
            }
        })), s
    }

    function ie(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
    }

    function re(e) {
        const t = this,
            {
                params: s,
                slidesEl: a
            } = t;
        s.loop && t.loopDestroy();
        const i = e => {
            if ("string" == typeof e) {
                const t = document.createElement("div");
                t.innerHTML = e, a.append(t.children[0]), t.innerHTML = ""
            } else a.append(e)
        };
        if ("object" == typeof e && "length" in e)
            for (let t = 0; t < e.length; t += 1) e[t] && i(e[t]);
        else i(e);
        t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update()
    }

    function ne(e) {
        const t = this,
            {
                params: s,
                activeIndex: a,
                slidesEl: i
            } = t;
        s.loop && t.loopDestroy();
        let r = a + 1;
        const n = e => {
            if ("string" == typeof e) {
                const t = document.createElement("div");
                t.innerHTML = e, i.prepend(t.children[0]), t.innerHTML = ""
            } else i.prepend(e)
        };
        if ("object" == typeof e && "length" in e) {
            for (let t = 0; t < e.length; t += 1) e[t] && n(e[t]);
            r = a + e.length
        } else n(e);
        t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update(), t.slideTo(r, 0, !1)
    }

    function le(e, t) {
        const s = this,
            {
                params: a,
                activeIndex: i,
                slidesEl: r
            } = s;
        let n = i;
        a.loop && (n -= s.loopedSlides, s.loopDestroy(), s.recalcSlides());
        const l = s.slides.length;
        if (e <= 0) return void s.prependSlide(t);
        if (e >= l) return void s.appendSlide(t);
        let o = n > e ? n + 1 : n;
        const d = [];
        for (let t = l - 1; t >= e; t -= 1) {
            const e = s.slides[t];
            e.remove(), d.unshift(e)
        }
        if ("object" == typeof t && "length" in t) {
            for (let e = 0; e < t.length; e += 1) t[e] && r.append(t[e]);
            o = n > e ? n + t.length : n
        } else r.append(t);
        for (let e = 0; e < d.length; e += 1) r.append(d[e]);
        s.recalcSlides(), a.loop && s.loopCreate(), a.observer && !s.isElement || s.update(), a.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1)
    }

    function oe(e) {
        const t = this,
            {
                params: s,
                activeIndex: a
            } = t;
        let i = a;
        s.loop && (i -= t.loopedSlides, t.loopDestroy());
        let r, n = i;
        if ("object" == typeof e && "length" in e) {
            for (let s = 0; s < e.length; s += 1) r = e[s], t.slides[r] && t.slides[r].remove(), r < n && (n -= 1);
            n = Math.max(n, 0)
        } else r = e, t.slides[r] && t.slides[r].remove(), r < n && (n -= 1), n = Math.max(n, 0);
        t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update(), s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
    }

    function de() {
        const e = this,
            t = [];
        for (let s = 0; s < e.slides.length; s += 1) t.push(s);
        e.removeSlide(t)
    }

    function ce(e) {
        const {
            effect: t,
            swiper: s,
            on: a,
            setTranslate: i,
            setTransition: r,
            overwriteParams: n,
            perspective: l,
            recreateShadows: o,
            getEffectParams: d
        } = e;
        let c;
        a("beforeInit", (() => {
            if (s.params.effect !== t) return;
            s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
            const e = n ? n() : {};
            Object.assign(s.params, e), Object.assign(s.originalParams, e)
        })), a("setTranslate", (() => {
            s.params.effect === t && i()
        })), a("setTransition", ((e, a) => {
            s.params.effect === t && r(a)
        })), a("transitionEnd", (() => {
            if (s.params.effect === t && o) {
                if (!d || !d().slideShadows) return;
                s.slides.forEach((e => {
                    e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e => e.remove()))
                })), o()
            }
        })), a("virtualUpdate", (() => {
            s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame((() => {
                c && s.slides && s.slides.length && (i(), c = !1)
            })))
        }))
    }

    function pe(e, t) {
        const s = h(t);
        return s !== t && (s.style.backfaceVisibility = "hidden", s.style["-webkit-backface-visibility"] = "hidden"), s
    }

    function ue(e) {
        let {
            swiper: t,
            duration: s,
            transformElements: a,
            allSlides: i
        } = e;
        const {
            activeIndex: r
        } = t;
        if (t.params.virtualTranslate && 0 !== s) {
            let e, s = !1;
            e = i ? a : a.filter((e => {
                const s = e.classList.contains("swiper-slide-transform") ? (e => {
                    if (!e.parentElement) return t.slides.filter((t => t.shadowRoot && t.shadowRoot === e.parentNode))[0];
                    return e.parentElement
                })(e) : e;
                return t.getSlideIndex(s) === r
            })), e.forEach((e => {
                x(e, (() => {
                    if (s) return;
                    if (!t || t.destroyed) return;
                    s = !0, t.animating = !1;
                    const e = new window.CustomEvent("transitionend", {
                        bubbles: !0,
                        cancelable: !0
                    });
                    t.wrapperEl.dispatchEvent(e)
                }))
            }))
        }
    }

    function me(e, t, s) {
        const a = `swiper-slide-shadow${s?`-${s}`:""}${e?` swiper-slide-shadow-${e}`:""}`,
            i = h(t);
        let r = i.querySelector(`.${a.split(" ").join(".")}`);
        return r || (r = v("div", a.split(" ")), i.append(r)), r
    }
    Object.keys(ee).forEach((e => {
        Object.keys(ee[e]).forEach((t => {
            se.prototype[t] = ee[e][t]
        }))
    })), se.use([function(e) {
        let {
            swiper: t,
            on: s,
            emit: a
        } = e;
        const i = r();
        let n = null,
            l = null;
        const o = () => {
                t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"))
            },
            d = () => {
                t && !t.destroyed && t.initialized && a("orientationchange")
            };
        s("init", (() => {
            t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e => {
                l = i.requestAnimationFrame((() => {
                    const {
                        width: s,
                        height: a
                    } = t;
                    let i = s,
                        r = a;
                    e.forEach((e => {
                        let {
                            contentBoxSize: s,
                            contentRect: a,
                            target: n
                        } = e;
                        n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize, r = a ? a.height : (s[0] || s).blockSize)
                    })), i === s && r === a || o()
                }))
            })), n.observe(t.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", d))
        })), s("destroy", (() => {
            l && i.cancelAnimationFrame(l), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", d)
        }))
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: i
        } = e;
        const n = [],
            l = r(),
            o = function(e, s) {
                void 0 === s && (s = {});
                const a = new(l.MutationObserver || l.WebkitMutationObserver)((e => {
                    if (t.__preventObserver__) return;
                    if (1 === e.length) return void i("observerUpdate", e[0]);
                    const s = function() {
                        i("observerUpdate", e[0])
                    };
                    l.requestAnimationFrame ? l.requestAnimationFrame(s) : l.setTimeout(s, 0)
                }));
                a.observe(e, {
                    attributes: void 0 === s.attributes || s.attributes,
                    childList: void 0 === s.childList || s.childList,
                    characterData: void 0 === s.characterData || s.characterData
                }), n.push(a)
            };
        s({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }), a("init", (() => {
            if (t.params.observer) {
                if (t.params.observeParents) {
                    const e = E(t.hostEl);
                    for (let t = 0; t < e.length; t += 1) o(e[t])
                }
                o(t.hostEl, {
                    childList: t.params.observeSlideChildren
                }), o(t.wrapperEl, {
                    attributes: !1
                })
            }
        })), a("destroy", (() => {
            n.forEach((e => {
                e.disconnect()
            })), n.splice(0, n.length)
        }))
    }]);
    const he = [function(e) {
        let t, {
            swiper: s,
            extendParams: i,
            on: r,
            emit: n
        } = e;
        i({
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        });
        const l = a();
        s.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: []
        };
        const o = l.createElement("div");

        function d(e, t) {
            const a = s.params.virtual;
            if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
            let i;
            return a.renderSlide ? (i = a.renderSlide.call(s, e, t), "string" == typeof i && (o.innerHTML = i, i = o.children[0])) : i = s.isElement ? v("swiper-slide") : v("div", s.params.slideClass), i.setAttribute("data-swiper-slide-index", t), a.renderSlide || (i.innerHTML = e), a.cache && (s.virtual.cache[t] = i), i
        }

        function c(e, t) {
            const {
                slidesPerView: a,
                slidesPerGroup: i,
                centeredSlides: r,
                loop: l,
                initialSlide: o
            } = s.params;
            if (t && !l && o > 0) return;
            const {
                addSlidesBefore: c,
                addSlidesAfter: p
            } = s.params.virtual, {
                from: u,
                to: m,
                slides: h,
                slidesGrid: g,
                offset: v
            } = s.virtual;
            s.params.cssMode || s.updateActiveIndex();
            const w = s.activeIndex || 0;
            let b, y, E;
            b = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top", r ? (y = Math.floor(a / 2) + i + p, E = Math.floor(a / 2) + i + c) : (y = a + (i - 1) + p, E = (l ? a : i) + c);
            let x = w - E,
                S = w + y;
            l || (x = Math.max(x, 0), S = Math.min(S, h.length - 1));
            let T = (s.slidesGrid[x] || 0) - (s.slidesGrid[0] || 0);

            function M() {
                s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), n("virtualUpdate")
            }
            if (l && w >= E ? (x -= E, r || (T += s.slidesGrid[0])) : l && w < E && (x = -E, r && (T += s.slidesGrid[0])), Object.assign(s.virtual, {
                    from: x,
                    to: S,
                    offset: T,
                    slidesGrid: s.slidesGrid,
                    slidesBefore: E,
                    slidesAfter: y
                }), u === x && m === S && !e) return s.slidesGrid !== g && T !== v && s.slides.forEach((e => {
                e.style[b] = T - Math.abs(s.cssOverflowAdjustment()) + "px"
            })), s.updateProgress(), void n("virtualUpdate");
            if (s.params.virtual.renderExternal) return s.params.virtual.renderExternal.call(s, {
                offset: T,
                from: x,
                to: S,
                slides: function() {
                    const e = [];
                    for (let t = x; t <= S; t += 1) e.push(h[t]);
                    return e
                }()
            }), void(s.params.virtual.renderExternalUpdate ? M() : n("virtualUpdate"));
            const C = [],
                P = [],
                L = e => {
                    let t = e;
                    return e < 0 ? t = h.length + e : t >= h.length && (t -= h.length), t
                };
            if (e) s.slides.filter((e => e.matches(`.${s.params.slideClass}, swiper-slide`))).forEach((e => {
                e.remove()
            }));
            else
                for (let e = u; e <= m; e += 1)
                    if (e < x || e > S) {
                        const t = L(e);
                        s.slides.filter((e => e.matches(`.${s.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`))).forEach((e => {
                            e.remove()
                        }))
                    } const I = l ? -h.length : 0,
                z = l ? 2 * h.length : h.length;
            for (let t = I; t < z; t += 1)
                if (t >= x && t <= S) {
                    const s = L(t);
                    void 0 === m || e ? P.push(s) : (t > m && P.push(s), t < u && C.push(s))
                }
            if (P.forEach((e => {
                    s.slidesEl.append(d(h[e], e))
                })), l)
                for (let e = C.length - 1; e >= 0; e -= 1) {
                    const t = C[e];
                    s.slidesEl.prepend(d(h[t], t))
                } else C.sort(((e, t) => t - e)), C.forEach((e => {
                    s.slidesEl.prepend(d(h[e], e))
                }));
            f(s.slidesEl, ".swiper-slide, swiper-slide").forEach((e => {
                e.style[b] = T - Math.abs(s.cssOverflowAdjustment()) + "px"
            })), M()
        }
        r("beforeInit", (() => {
            if (!s.params.virtual.enabled) return;
            let e;
            if (void 0 === s.passedParams.virtual.slides) {
                const t = [...s.slidesEl.children].filter((e => e.matches(`.${s.params.slideClass}, swiper-slide`)));
                t && t.length && (s.virtual.slides = [...t], e = !0, t.forEach(((e, t) => {
                    e.setAttribute("data-swiper-slide-index", t), s.virtual.cache[t] = e, e.remove()
                })))
            }
            e || (s.virtual.slides = s.params.virtual.slides), s.classNames.push(`${s.params.containerModifierClass}virtual`), s.params.watchSlidesProgress = !0, s.originalParams.watchSlidesProgress = !0, c(!1, !0)
        })), r("setTranslate", (() => {
            s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t), t = setTimeout((() => {
                c()
            }), 100)) : c())
        })), r("init update resize", (() => {
            s.params.virtual.enabled && s.params.cssMode && u(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`)
        })), Object.assign(s.virtual, {
            appendSlide: function(e) {
                if ("object" == typeof e && "length" in e)
                    for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.push(e[t]);
                else s.virtual.slides.push(e);
                c(!0)
            },
            prependSlide: function(e) {
                const t = s.activeIndex;
                let a = t + 1,
                    i = 1;
                if (Array.isArray(e)) {
                    for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.unshift(e[t]);
                    a = t + e.length, i = e.length
                } else s.virtual.slides.unshift(e);
                if (s.params.virtual.cache) {
                    const e = s.virtual.cache,
                        t = {};
                    Object.keys(e).forEach((s => {
                        const a = e[s],
                            r = a.getAttribute("data-swiper-slide-index");
                        r && a.setAttribute("data-swiper-slide-index", parseInt(r, 10) + i), t[parseInt(s, 10) + i] = a
                    })), s.virtual.cache = t
                }
                c(!0), s.slideTo(a, 0)
            },
            removeSlide: function(e) {
                if (null == e) return;
                let t = s.activeIndex;
                if (Array.isArray(e))
                    for (let a = e.length - 1; a >= 0; a -= 1) s.params.virtual.cache && (delete s.virtual.cache[e[a]], Object.keys(s.virtual.cache).forEach((t => {
                        t > e && (s.virtual.cache[t - 1] = s.virtual.cache[t], s.virtual.cache[t - 1].setAttribute("data-swiper-slide-index", t - 1), delete s.virtual.cache[t])
                    }))), s.virtual.slides.splice(e[a], 1), e[a] < t && (t -= 1), t = Math.max(t, 0);
                else s.params.virtual.cache && (delete s.virtual.cache[e], Object.keys(s.virtual.cache).forEach((t => {
                    t > e && (s.virtual.cache[t - 1] = s.virtual.cache[t], s.virtual.cache[t - 1].setAttribute("data-swiper-slide-index", t - 1), delete s.virtual.cache[t])
                }))), s.virtual.slides.splice(e, 1), e < t && (t -= 1), t = Math.max(t, 0);
                c(!0), s.slideTo(t, 0)
            },
            removeAllSlides: function() {
                s.virtual.slides = [], s.params.virtual.cache && (s.virtual.cache = {}), c(!0), s.slideTo(0, 0)
            },
            update: c
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: i,
            emit: n
        } = e;
        const l = a(),
            o = r();

        function d(e) {
            if (!t.enabled) return;
            const {
                rtlTranslate: s
            } = t;
            let a = e;
            a.originalEvent && (a = a.originalEvent);
            const i = a.keyCode || a.charCode,
                r = t.params.keyboard.pageUpDown,
                d = r && 33 === i,
                c = r && 34 === i,
                p = 37 === i,
                u = 39 === i,
                m = 38 === i,
                h = 40 === i;
            if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && h || c)) return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && m || d)) return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
                if (t.params.keyboard.onlyInViewport && (d || c || p || u || m || h)) {
                    let e = !1;
                    if (E(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 && 0 === E(t.el, `.${t.params.slideActiveClass}`).length) return;
                    const a = t.el,
                        i = a.clientWidth,
                        r = a.clientHeight,
                        n = o.innerWidth,
                        l = o.innerHeight,
                        d = w(a);
                    s && (d.left -= a.scrollLeft);
                    const c = [
                        [d.left, d.top],
                        [d.left + i, d.top],
                        [d.left, d.top + r],
                        [d.left + i, d.top + r]
                    ];
                    for (let t = 0; t < c.length; t += 1) {
                        const s = c[t];
                        if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                            if (0 === s[0] && 0 === s[1]) continue;
                            e = !0
                        }
                    }
                    if (!e) return
                }
                t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((c || u) && !s || (d || p) && s) && t.slideNext(), ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || m || h) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (c || h) && t.slideNext(), (d || m) && t.slidePrev()), n("keyPress", i)
            }
        }

        function c() {
            t.keyboard.enabled || (l.addEventListener("keydown", d), t.keyboard.enabled = !0)
        }

        function p() {
            t.keyboard.enabled && (l.removeEventListener("keydown", d), t.keyboard.enabled = !1)
        }
        t.keyboard = {
            enabled: !1
        }, s({
            keyboard: {
                enabled: !1,
                onlyInViewport: !0,
                pageUpDown: !0
            }
        }), i("init", (() => {
            t.params.keyboard.enabled && c()
        })), i("destroy", (() => {
            t.keyboard.enabled && p()
        })), Object.assign(t.keyboard, {
            enable: c,
            disable: p
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: i
        } = e;
        const n = r();
        let d;
        s({
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null,
                noMousewheelClass: "swiper-no-mousewheel"
            }
        }), t.mousewheel = {
            enabled: !1
        };
        let c, p = o();
        const u = [];

        function m() {
            t.enabled && (t.mouseEntered = !0)
        }

        function h() {
            t.enabled && (t.mouseEntered = !1)
        }

        function f(e) {
            return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && (!(t.params.mousewheel.thresholdTime && o() - p < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && o() - p < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), i("scroll", e.raw)), p = (new n.Date).getTime(), !1)))
        }

        function g(e) {
            let s = e,
                a = !0;
            if (!t.enabled) return;
            if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`)) return;
            const r = t.params.mousewheel;
            t.params.cssMode && s.preventDefault();
            let n = t.el;
            "container" !== t.params.mousewheel.eventsTarget && (n = document.querySelector(t.params.mousewheel.eventsTarget));
            const p = n && n.contains(s.target);
            if (!t.mouseEntered && !p && !r.releaseOnEdges) return !0;
            s.originalEvent && (s = s.originalEvent);
            let m = 0;
            const h = t.rtlTranslate ? -1 : 1,
                g = function(e) {
                    let t = 0,
                        s = 0,
                        a = 0,
                        i = 0;
                    return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: s,
                        pixelX: a,
                        pixelY: i
                    }
                }(s);
            if (r.forceToAxis)
                if (t.isHorizontal()) {
                    if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
                    m = -g.pixelX * h
                } else {
                    if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
                    m = -g.pixelY
                }
            else m = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * h : -g.pixelY;
            if (0 === m) return !0;
            r.invert && (m = -m);
            let v = t.getTranslate() + m * r.sensitivity;
            if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()), a && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
                const e = {
                        time: o(),
                        delta: Math.abs(m),
                        direction: Math.sign(m)
                    },
                    a = c && e.time < c.time + 500 && e.delta <= c.delta && e.direction === c.direction;
                if (!a) {
                    c = void 0;
                    let n = t.getTranslate() + m * r.sensitivity;
                    const o = t.isBeginning,
                        p = t.isEnd;
                    if (n >= t.minTranslate() && (n = t.minTranslate()), n <= t.maxTranslate() && (n = t.maxTranslate()), t.setTransition(0), t.setTranslate(n), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!o && t.isBeginning || !p && t.isEnd) && t.updateSlidesClasses(), t.params.loop && t.loopFix({
                            direction: e.direction < 0 ? "next" : "prev",
                            byMousewheel: !0
                        }), t.params.freeMode.sticky) {
                        clearTimeout(d), d = void 0, u.length >= 15 && u.shift();
                        const s = u.length ? u[u.length - 1] : void 0,
                            a = u[0];
                        if (u.push(e), s && (e.delta > s.delta || e.direction !== s.direction)) u.splice(0);
                        else if (u.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
                            const s = m > 0 ? .8 : .2;
                            c = e, u.splice(0), d = l((() => {
                                t.slideToClosest(t.params.speed, !0, void 0, s)
                            }), 0)
                        }
                        d || (d = l((() => {
                            c = e, u.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5)
                        }), 500))
                    }
                    if (a || i("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), r.releaseOnEdges && (n === t.minTranslate() || n === t.maxTranslate())) return !0
                }
            } else {
                const s = {
                    time: o(),
                    delta: Math.abs(m),
                    direction: Math.sign(m),
                    raw: e
                };
                u.length >= 2 && u.shift();
                const a = u.length ? u[u.length - 1] : void 0;
                if (u.push(s), a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && f(s) : f(s), function(e) {
                        const s = t.params.mousewheel;
                        if (e.direction < 0) {
                            if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0
                        } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
                        return !1
                    }(s)) return !0
            }
            return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1
        }

        function v(e) {
            let s = t.el;
            "container" !== t.params.mousewheel.eventsTarget && (s = document.querySelector(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", m), s[e]("mouseleave", h), s[e]("wheel", g)
        }

        function w() {
            return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", g), !0) : !t.mousewheel.enabled && (v("addEventListener"), t.mousewheel.enabled = !0, !0)
        }

        function b() {
            return t.params.cssMode ? (t.wrapperEl.addEventListener(event, g), !0) : !!t.mousewheel.enabled && (v("removeEventListener"), t.mousewheel.enabled = !1, !0)
        }
        a("init", (() => {
            !t.params.mousewheel.enabled && t.params.cssMode && b(), t.params.mousewheel.enabled && w()
        })), a("destroy", (() => {
            t.params.cssMode && w(), t.mousewheel.enabled && b()
        })), Object.assign(t.mousewheel, {
            enable: w,
            disable: b
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: i
        } = e;

        function r(e) {
            let s;
            return e && "string" == typeof e && t.isElement && (s = t.el.querySelector(e), s) ? s : (e && ("string" == typeof e && (s = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && s && s.length > 1 && 1 === t.el.querySelectorAll(e).length ? s = t.el.querySelector(e) : s && 1 === s.length && (s = s[0])), e && !s ? e : s)
        }

        function n(e, s) {
            const a = t.params.navigation;
            (e = T(e)).forEach((e => {
                e && (e.classList[s ? "add" : "remove"](...a.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = s), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](a.lockClass))
            }))
        }

        function l() {
            const {
                nextEl: e,
                prevEl: s
            } = t.navigation;
            if (t.params.loop) return n(s, !1), void n(e, !1);
            n(s, t.isBeginning && !t.params.rewind), n(e, t.isEnd && !t.params.rewind)
        }

        function o(e) {
            e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev"))
        }

        function d(e) {
            e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext"))
        }

        function c() {
            const e = t.params.navigation;
            if (t.params.navigation = ae(t, t.originalParams.navigation, t.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }), !e.nextEl && !e.prevEl) return;
            let s = r(e.nextEl),
                a = r(e.prevEl);
            Object.assign(t.navigation, {
                nextEl: s,
                prevEl: a
            }), s = T(s), a = T(a);
            const i = (s, a) => {
                s && s.addEventListener("click", "next" === a ? d : o), !t.enabled && s && s.classList.add(...e.lockClass.split(" "))
            };
            s.forEach((e => i(e, "next"))), a.forEach((e => i(e, "prev")))
        }

        function p() {
            let {
                nextEl: e,
                prevEl: s
            } = t.navigation;
            e = T(e), s = T(s);
            const a = (e, s) => {
                e.removeEventListener("click", "next" === s ? d : o), e.classList.remove(...t.params.navigation.disabledClass.split(" "))
            };
            e.forEach((e => a(e, "next"))), s.forEach((e => a(e, "prev")))
        }
        s({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled"
            }
        }), t.navigation = {
            nextEl: null,
            prevEl: null
        }, a("init", (() => {
            !1 === t.params.navigation.enabled ? u() : (c(), l())
        })), a("toEdge fromEdge lock unlock", (() => {
            l()
        })), a("destroy", (() => {
            p()
        })), a("enable disable", (() => {
            let {
                nextEl: e,
                prevEl: s
            } = t.navigation;
            e = T(e), s = T(s), t.enabled ? l() : [...e, ...s].filter((e => !!e)).forEach((e => e.classList.add(t.params.navigation.lockClass)))
        })), a("click", ((e, s) => {
            let {
                nextEl: a,
                prevEl: r
            } = t.navigation;
            a = T(a), r = T(r);
            const n = s.target;
            if (t.params.navigation.hideOnClick && !r.includes(n) && !a.includes(n)) {
                if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n))) return;
                let e;
                a.length ? e = a[0].classList.contains(t.params.navigation.hiddenClass) : r.length && (e = r[0].classList.contains(t.params.navigation.hiddenClass)), i(!0 === e ? "navigationShow" : "navigationHide"), [...a, ...r].filter((e => !!e)).forEach((e => e.classList.toggle(t.params.navigation.hiddenClass)))
            }
        }));
        const u = () => {
            t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), p()
        };
        Object.assign(t.navigation, {
            enable: () => {
                t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), c(), l()
            },
            disable: u,
            update: l,
            init: c,
            destroy: p
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: i
        } = e;
        const r = "swiper-pagination";
        let n;
        s({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
                bulletClass: `${r}-bullet`,
                bulletActiveClass: `${r}-bullet-active`,
                modifierClass: `${r}-`,
                currentClass: `${r}-current`,
                totalClass: `${r}-total`,
                hiddenClass: `${r}-hidden`,
                progressbarFillClass: `${r}-progressbar-fill`,
                progressbarOppositeClass: `${r}-progressbar-opposite`,
                clickableClass: `${r}-clickable`,
                lockClass: `${r}-lock`,
                horizontalClass: `${r}-horizontal`,
                verticalClass: `${r}-vertical`,
                paginationDisabledClass: `${r}-disabled`
            }
        }), t.pagination = {
            el: null,
            bullets: []
        };
        let l = 0;

        function o() {
            return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length
        }

        function d(e, s) {
            const {
                bulletActiveClass: a
            } = t.params.pagination;
            e && (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${a}-${s}`), (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${a}-${s}-${s}`))
        }

        function c(e) {
            const s = e.target.closest(ie(t.params.pagination.bulletClass));
            if (!s) return;
            e.preventDefault();
            const a = y(s) * t.params.slidesPerGroup;
            if (t.params.loop) {
                if (t.realIndex === a) return;
                t.slideToLoop(a)
            } else t.slideTo(a)
        }

        function p() {
            const e = t.rtl,
                s = t.params.pagination;
            if (o()) return;
            let a, r, c = t.pagination.el;
            c = T(c);
            const p = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                u = t.params.loop ? Math.ceil(p / t.params.slidesPerGroup) : t.snapGrid.length;
            if (t.params.loop ? (r = t.previousRealIndex || 0, a = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (a = t.snapIndex, r = t.previousSnapIndex) : (r = t.previousIndex || 0, a = t.activeIndex || 0), "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                const i = t.pagination.bullets;
                let o, p, u;
                if (s.dynamicBullets && (n = S(i[0], t.isHorizontal() ? "width" : "height", !0), c.forEach((e => {
                        e.style[t.isHorizontal() ? "width" : "height"] = n * (s.dynamicMainBullets + 4) + "px"
                    })), s.dynamicMainBullets > 1 && void 0 !== r && (l += a - (r || 0), l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)), o = Math.max(a - l, 0), p = o + (Math.min(i.length, s.dynamicMainBullets) - 1), u = (p + o) / 2), i.forEach((e => {
                        const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`))].map((e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
                        e.classList.remove(...t)
                    })), c.length > 1) i.forEach((e => {
                    const i = y(e);
                    i === a ? e.classList.add(...s.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), s.dynamicBullets && (i >= o && i <= p && e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")), i === o && d(e, "prev"), i === p && d(e, "next"))
                }));
                else {
                    const e = i[a];
                    if (e && e.classList.add(...s.bulletActiveClass.split(" ")), t.isElement && i.forEach(((e, t) => {
                            e.setAttribute("part", t === a ? "bullet-active" : "bullet")
                        })), s.dynamicBullets) {
                        const e = i[o],
                            t = i[p];
                        for (let e = o; e <= p; e += 1) i[e] && i[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
                        d(e, "prev"), d(t, "next")
                    }
                }
                if (s.dynamicBullets) {
                    const a = Math.min(i.length, s.dynamicMainBullets + 4),
                        r = (n * a - n) / 2 - u * n,
                        l = e ? "right" : "left";
                    i.forEach((e => {
                        e.style[t.isHorizontal() ? l : "top"] = `${r}px`
                    }))
                }
            }
            c.forEach(((e, r) => {
                if ("fraction" === s.type && (e.querySelectorAll(ie(s.currentClass)).forEach((e => {
                        e.textContent = s.formatFractionCurrent(a + 1)
                    })), e.querySelectorAll(ie(s.totalClass)).forEach((e => {
                        e.textContent = s.formatFractionTotal(u)
                    }))), "progressbar" === s.type) {
                    let i;
                    i = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                    const r = (a + 1) / u;
                    let n = 1,
                        l = 1;
                    "horizontal" === i ? n = r : l = r, e.querySelectorAll(ie(s.progressbarFillClass)).forEach((e => {
                        e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${l})`, e.style.transitionDuration = `${t.params.speed}ms`
                    }))
                }
                "custom" === s.type && s.renderCustom ? (e.innerHTML = s.renderCustom(t, a + 1, u), 0 === r && i("paginationRender", e)) : (0 === r && i("paginationRender", e), i("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](s.lockClass)
            }))
        }

        function u() {
            const e = t.params.pagination;
            if (o()) return;
            const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
            let a = t.pagination.el;
            a = T(a);
            let r = "";
            if ("bullets" === e.type) {
                let a = t.params.loop ? Math.ceil(s / t.params.slidesPerGroup) : t.snapGrid.length;
                t.params.freeMode && t.params.freeMode.enabled && a > s && (a = s);
                for (let s = 0; s < a; s += 1) e.renderBullet ? r += e.renderBullet.call(t, s, e.bulletClass) : r += `<${e.bulletElement} ${t.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
            }
            "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), t.pagination.bullets = [], a.forEach((s => {
                "custom" !== e.type && (s.innerHTML = r || ""), "bullets" === e.type && t.pagination.bullets.push(...s.querySelectorAll(ie(e.bulletClass)))
            })), "custom" !== e.type && i("paginationRender", a[0])
        }

        function m() {
            t.params.pagination = ae(t, t.originalParams.pagination, t.params.pagination, {
                el: "swiper-pagination"
            });
            const e = t.params.pagination;
            if (!e.el) return;
            let s;
            "string" == typeof e.el && t.isElement && (s = t.el.querySelector(e.el)), s || "string" != typeof e.el || (s = [...document.querySelectorAll(e.el)]), s || (s = e.el), s && 0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(s) && s.length > 1 && (s = [...t.el.querySelectorAll(e.el)], s.length > 1 && (s = s.filter((e => E(e, ".swiper")[0] === t.el))[0])), Array.isArray(s) && 1 === s.length && (s = s[0]), Object.assign(t.pagination, {
                el: s
            }), s = T(s), s.forEach((s => {
                "bullets" === e.type && e.clickable && s.classList.add(...(e.clickableClass || "").split(" ")), s.classList.add(e.modifierClass + e.type), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.classList.add(`${e.modifierClass}${e.type}-dynamic`), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.classList.add(e.progressbarOppositeClass), e.clickable && s.addEventListener("click", c), t.enabled || s.classList.add(e.lockClass)
            })))
        }

        function h() {
            const e = t.params.pagination;
            if (o()) return;
            let s = t.pagination.el;
            s && (s = T(s), s.forEach((s => {
                s.classList.remove(e.hiddenClass), s.classList.remove(e.modifierClass + e.type), s.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (s.classList.remove(...(e.clickableClass || "").split(" ")), s.removeEventListener("click", c))
            }))), t.pagination.bullets && t.pagination.bullets.forEach((t => t.classList.remove(...e.bulletActiveClass.split(" "))))
        }
        a("changeDirection", (() => {
            if (!t.pagination || !t.pagination.el) return;
            const e = t.params.pagination;
            let {
                el: s
            } = t.pagination;
            s = T(s), s.forEach((s => {
                s.classList.remove(e.horizontalClass, e.verticalClass), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
            }))
        })), a("init", (() => {
            !1 === t.params.pagination.enabled ? f() : (m(), u(), p())
        })), a("activeIndexChange", (() => {
            void 0 === t.snapIndex && p()
        })), a("snapIndexChange", (() => {
            p()
        })), a("snapGridLengthChange", (() => {
            u(), p()
        })), a("destroy", (() => {
            h()
        })), a("enable disable", (() => {
            let {
                el: e
            } = t.pagination;
            e && (e = T(e), e.forEach((e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass))))
        })), a("lock unlock", (() => {
            p()
        })), a("click", ((e, s) => {
            const a = s.target,
                r = T(t.pagination.el);
            if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !a.classList.contains(t.params.pagination.bulletClass)) {
                if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl)) return;
                const e = r[0].classList.contains(t.params.pagination.hiddenClass);
                i(!0 === e ? "paginationShow" : "paginationHide"), r.forEach((e => e.classList.toggle(t.params.pagination.hiddenClass)))
            }
        }));
        const f = () => {
            t.el.classList.add(t.params.pagination.paginationDisabledClass);
            let {
                el: e
            } = t.pagination;
            e && (e = T(e), e.forEach((e => e.classList.add(t.params.pagination.paginationDisabledClass)))), h()
        };
        Object.assign(t.pagination, {
            enable: () => {
                t.el.classList.remove(t.params.pagination.paginationDisabledClass);
                let {
                    el: e
                } = t.pagination;
                e && (e = T(e), e.forEach((e => e.classList.remove(t.params.pagination.paginationDisabledClass)))), m(), u(), p()
            },
            disable: f,
            render: u,
            update: p,
            init: m,
            destroy: h
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: i,
            emit: r
        } = e;
        const o = a();
        let d, c, p, u, m = !1,
            h = null,
            f = null;

        function g() {
            if (!t.params.scrollbar.el || !t.scrollbar.el) return;
            const {
                scrollbar: e,
                rtlTranslate: s
            } = t, {
                dragEl: a,
                el: i
            } = e, r = t.params.scrollbar, n = t.params.loop ? t.progressLoop : t.progress;
            let l = c,
                o = (p - c) * n;
            s ? (o = -o, o > 0 ? (l = c - o, o = 0) : -o + c > p && (l = p + o)) : o < 0 ? (l = c + o, o = 0) : o + c > p && (l = p - o), t.isHorizontal() ? (a.style.transform = `translate3d(${o}px, 0, 0)`, a.style.width = `${l}px`) : (a.style.transform = `translate3d(0px, ${o}px, 0)`, a.style.height = `${l}px`), r.hide && (clearTimeout(h), i.style.opacity = 1, h = setTimeout((() => {
                i.style.opacity = 0, i.style.transitionDuration = "400ms"
            }), 1e3))
        }

        function b() {
            if (!t.params.scrollbar.el || !t.scrollbar.el) return;
            const {
                scrollbar: e
            } = t, {
                dragEl: s,
                el: a
            } = e;
            s.style.width = "", s.style.height = "", p = t.isHorizontal() ? a.offsetWidth : a.offsetHeight, u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), c = "auto" === t.params.scrollbar.dragSize ? p * u : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s.style.width = `${c}px` : s.style.height = `${c}px`, a.style.display = u >= 1 ? "none" : "", t.params.scrollbar.hide && (a.style.opacity = 0), t.params.watchOverflow && t.enabled && e.el.classList[t.isLocked ? "add" : "remove"](t.params.scrollbar.lockClass)
        }

        function y(e) {
            return t.isHorizontal() ? e.clientX : e.clientY
        }

        function E(e) {
            const {
                scrollbar: s,
                rtlTranslate: a
            } = t, {
                el: i
            } = s;
            let r;
            r = (y(e) - w(i)[t.isHorizontal() ? "left" : "top"] - (null !== d ? d : c / 2)) / (p - c), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r);
            const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
            t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses()
        }

        function x(e) {
            const s = t.params.scrollbar,
                {
                    scrollbar: a,
                    wrapperEl: i
                } = t,
                {
                    el: n,
                    dragEl: l
                } = a;
            m = !0, d = e.target === l ? y(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.style.transitionDuration = "100ms", l.style.transitionDuration = "100ms", E(e), clearTimeout(f), n.style.transitionDuration = "0ms", s.hide && (n.style.opacity = 1), t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "none"), r("scrollbarDragStart", e)
        }

        function S(e) {
            const {
                scrollbar: s,
                wrapperEl: a
            } = t, {
                el: i,
                dragEl: n
            } = s;
            m && (e.preventDefault && e.cancelable ? e.preventDefault() : e.returnValue = !1, E(e), a.style.transitionDuration = "0ms", i.style.transitionDuration = "0ms", n.style.transitionDuration = "0ms", r("scrollbarDragMove", e))
        }

        function M(e) {
            const s = t.params.scrollbar,
                {
                    scrollbar: a,
                    wrapperEl: i
                } = t,
                {
                    el: n
                } = a;
            m && (m = !1, t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "", i.style.transitionDuration = ""), s.hide && (clearTimeout(f), f = l((() => {
                n.style.opacity = 0, n.style.transitionDuration = "400ms"
            }), 1e3)), r("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest())
        }

        function C(e) {
            const {
                scrollbar: s,
                params: a
            } = t, i = s.el;
            if (!i) return;
            const r = i,
                n = !!a.passiveListeners && {
                    passive: !1,
                    capture: !1
                },
                l = !!a.passiveListeners && {
                    passive: !0,
                    capture: !1
                };
            if (!r) return;
            const d = "on" === e ? "addEventListener" : "removeEventListener";
            r[d]("pointerdown", x, n), o[d]("pointermove", S, n), o[d]("pointerup", M, l)
        }

        function P() {
            const {
                scrollbar: e,
                el: s
            } = t;
            t.params.scrollbar = ae(t, t.originalParams.scrollbar, t.params.scrollbar, {
                el: "swiper-scrollbar"
            });
            const a = t.params.scrollbar;
            if (!a.el) return;
            let i, r;
            if ("string" == typeof a.el && t.isElement && (i = t.el.querySelector(a.el)), i || "string" != typeof a.el) i || (i = a.el);
            else if (i = o.querySelectorAll(a.el), !i.length) return;
            t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.querySelectorAll(a.el).length && (i = s.querySelector(a.el)), i.length > 0 && (i = i[0]), i.classList.add(t.isHorizontal() ? a.horizontalClass : a.verticalClass), i && (r = i.querySelector(ie(t.params.scrollbar.dragClass)), r || (r = v("div", t.params.scrollbar.dragClass), i.append(r))), Object.assign(e, {
                el: i,
                dragEl: r
            }), a.draggable && t.params.scrollbar.el && t.scrollbar.el && C("on"), i && i.classList[t.enabled ? "remove" : "add"](...n(t.params.scrollbar.lockClass))
        }

        function L() {
            const e = t.params.scrollbar,
                s = t.scrollbar.el;
            s && s.classList.remove(...n(t.isHorizontal() ? e.horizontalClass : e.verticalClass)), t.params.scrollbar.el && t.scrollbar.el && C("off")
        }
        s({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag",
                scrollbarDisabledClass: "swiper-scrollbar-disabled",
                horizontalClass: "swiper-scrollbar-horizontal",
                verticalClass: "swiper-scrollbar-vertical"
            }
        }), t.scrollbar = {
            el: null,
            dragEl: null
        }, i("changeDirection", (() => {
            if (!t.scrollbar || !t.scrollbar.el) return;
            const e = t.params.scrollbar;
            let {
                el: s
            } = t.scrollbar;
            s = T(s), s.forEach((s => {
                s.classList.remove(e.horizontalClass, e.verticalClass), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
            }))
        })), i("init", (() => {
            !1 === t.params.scrollbar.enabled ? I() : (P(), b(), g())
        })), i("update resize observerUpdate lock unlock changeDirection", (() => {
            b()
        })), i("setTranslate", (() => {
            g()
        })), i("setTransition", ((e, s) => {
            ! function(e) {
                t.params.scrollbar.el && t.scrollbar.el && (t.scrollbar.dragEl.style.transitionDuration = `${e}ms`)
            }(s)
        })), i("enable disable", (() => {
            const {
                el: e
            } = t.scrollbar;
            e && e.classList[t.enabled ? "remove" : "add"](...n(t.params.scrollbar.lockClass))
        })), i("destroy", (() => {
            L()
        }));
        const I = () => {
            t.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)), t.scrollbar.el && t.scrollbar.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)), L()
        };
        Object.assign(t.scrollbar, {
            enable: () => {
                t.el.classList.remove(...n(t.params.scrollbar.scrollbarDisabledClass)), t.scrollbar.el && t.scrollbar.el.classList.remove(...n(t.params.scrollbar.scrollbarDisabledClass)), P(), b(), g()
            },
            disable: I,
            updateSize: b,
            setTranslate: g,
            init: P,
            destroy: L
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            parallax: {
                enabled: !1
            }
        });
        const i = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
            r = (e, s) => {
                const {
                    rtl: a
                } = t, i = a ? -1 : 1, r = e.getAttribute("data-swiper-parallax") || "0";
                let n = e.getAttribute("data-swiper-parallax-x"),
                    l = e.getAttribute("data-swiper-parallax-y");
                const o = e.getAttribute("data-swiper-parallax-scale"),
                    d = e.getAttribute("data-swiper-parallax-opacity"),
                    c = e.getAttribute("data-swiper-parallax-rotate");
                if (n || l ? (n = n || "0", l = l || "0") : t.isHorizontal() ? (n = r, l = "0") : (l = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * s * i + "%" : n * s * i + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s + "%" : l * s + "px", null != d) {
                    const t = d - (d - 1) * (1 - Math.abs(s));
                    e.style.opacity = t
                }
                let p = `translate3d(${n}, ${l}, 0px)`;
                if (null != o) {
                    p += ` scale(${o-(o-1)*(1-Math.abs(s))})`
                }
                if (c && null != c) {
                    p += ` rotate(${c*s*-1}deg)`
                }
                e.style.transform = p
            },
            n = () => {
                const {
                    el: e,
                    slides: s,
                    progress: a,
                    snapGrid: n,
                    isElement: l
                } = t, o = f(e, i);
                t.isElement && o.push(...f(t.hostEl, i)), o.forEach((e => {
                    r(e, a)
                })), s.forEach(((e, s) => {
                    let l = e.progress;
                    t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (l += Math.ceil(s / 2) - a * (n.length - 1)), l = Math.min(Math.max(l, -1), 1), e.querySelectorAll(`${i}, [data-swiper-parallax-rotate]`).forEach((e => {
                        r(e, l)
                    }))
                }))
            };
        a("beforeInit", (() => {
            t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0)
        })), a("init", (() => {
            t.params.parallax.enabled && n()
        })), a("setTranslate", (() => {
            t.params.parallax.enabled && n()
        })), a("setTransition", ((e, s) => {
            t.params.parallax.enabled && function(e) {
                void 0 === e && (e = t.params.speed);
                const {
                    el: s,
                    hostEl: a
                } = t, r = [...s.querySelectorAll(i)];
                t.isElement && r.push(...a.querySelectorAll(i)), r.forEach((t => {
                    let s = parseInt(t.getAttribute("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (s = 0), t.style.transitionDuration = `${s}ms`
                }))
            }(s)
        }))
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: i
        } = e;
        const n = r();
        s({
            zoom: {
                enabled: !1,
                limitToOriginalSize: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        }), t.zoom = {
            enabled: !1
        };
        let l, o, c = 1,
            p = !1;
        const u = [],
            m = {
                originX: 0,
                originY: 0,
                slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                imageEl: void 0,
                imageWrapEl: void 0,
                maxRatio: 3
            },
            h = {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {}
            },
            g = {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0
            };
        let v, b = 1;

        function y() {
            if (u.length < 2) return 1;
            const e = u[0].pageX,
                t = u[0].pageY,
                s = u[1].pageX,
                a = u[1].pageY;
            return Math.sqrt((s - e) ** 2 + (a - t) ** 2)
        }

        function x() {
            const e = t.params.zoom,
                s = m.imageWrapEl.getAttribute("data-swiper-zoom") || e.maxRatio;
            if (e.limitToOriginalSize && m.imageEl && m.imageEl.naturalWidth) {
                const e = m.imageEl.naturalWidth / m.imageEl.offsetWidth;
                return Math.min(e, s)
            }
            return s
        }

        function S(e) {
            const s = t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
            return !!e.target.matches(s) || t.slides.filter((t => t.contains(e.target))).length > 0
        }

        function T(e) {
            if ("mouse" === e.pointerType && u.splice(0, u.length), !S(e)) return;
            const s = t.params.zoom;
            if (l = !1, o = !1, u.push(e), !(u.length < 2)) {
                if (l = !0, m.scaleStart = y(), !m.slideEl) {
                    m.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`), m.slideEl || (m.slideEl = t.slides[t.activeIndex]);
                    let a = m.slideEl.querySelector(`.${s.containerClass}`);
                    if (a && (a = a.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m.imageEl = a, m.imageWrapEl = a ? E(m.imageEl, `.${s.containerClass}`)[0] : void 0, !m.imageWrapEl) return void(m.imageEl = void 0);
                    m.maxRatio = x()
                }
                if (m.imageEl) {
                    const [e, t] = function() {
                        if (u.length < 2) return {
                            x: null,
                            y: null
                        };
                        const e = m.imageEl.getBoundingClientRect();
                        return [(u[0].pageX + (u[1].pageX - u[0].pageX) / 2 - e.x - n.scrollX) / c, (u[0].pageY + (u[1].pageY - u[0].pageY) / 2 - e.y - n.scrollY) / c]
                    }();
                    m.originX = e, m.originY = t, m.imageEl.style.transitionDuration = "0ms"
                }
                p = !0
            }
        }

        function M(e) {
            if (!S(e)) return;
            const s = t.params.zoom,
                a = t.zoom,
                i = u.findIndex((t => t.pointerId === e.pointerId));
            i >= 0 && (u[i] = e), u.length < 2 || (o = !0, m.scaleMove = y(), m.imageEl && (a.scale = m.scaleMove / m.scaleStart * c, a.scale > m.maxRatio && (a.scale = m.maxRatio - 1 + (a.scale - m.maxRatio + 1) ** .5), a.scale < s.minRatio && (a.scale = s.minRatio + 1 - (s.minRatio - a.scale + 1) ** .5), m.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`))
        }

        function C(e) {
            if (!S(e)) return;
            if ("mouse" === e.pointerType && "pointerout" === e.type) return;
            const s = t.params.zoom,
                a = t.zoom,
                i = u.findIndex((t => t.pointerId === e.pointerId));
            i >= 0 && u.splice(i, 1), l && o && (l = !1, o = !1, m.imageEl && (a.scale = Math.max(Math.min(a.scale, m.maxRatio), s.minRatio), m.imageEl.style.transitionDuration = `${t.params.speed}ms`, m.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`, c = a.scale, p = !1, a.scale > 1 && m.slideEl ? m.slideEl.classList.add(`${s.zoomedSlideClass}`) : a.scale <= 1 && m.slideEl && m.slideEl.classList.remove(`${s.zoomedSlideClass}`), 1 === a.scale && (m.originX = 0, m.originY = 0, m.slideEl = void 0)))
        }

        function P() {
            t.touchEventsData.preventTouchMoveFromPointerMove = !1
        }

        function L(e) {
            if (!S(e) || ! function(e) {
                    const s = `.${t.params.zoom.containerClass}`;
                    return !!e.target.matches(s) || [...t.hostEl.querySelectorAll(s)].filter((t => t.contains(e.target))).length > 0
                }(e)) return;
            const s = t.zoom;
            if (!m.imageEl) return;
            if (!h.isTouched || !m.slideEl) return;
            h.isMoved || (h.width = m.imageEl.offsetWidth || m.imageEl.clientWidth, h.height = m.imageEl.offsetHeight || m.imageEl.clientHeight, h.startX = d(m.imageWrapEl, "x") || 0, h.startY = d(m.imageWrapEl, "y") || 0, m.slideWidth = m.slideEl.offsetWidth, m.slideHeight = m.slideEl.offsetHeight, m.imageWrapEl.style.transitionDuration = "0ms");
            const a = h.width * s.scale,
                i = h.height * s.scale;
            if (a < m.slideWidth && i < m.slideHeight) return void P();
            h.minX = Math.min(m.slideWidth / 2 - a / 2, 0), h.maxX = -h.minX, h.minY = Math.min(m.slideHeight / 2 - i / 2, 0), h.maxY = -h.minY, h.touchesCurrent.x = u.length > 0 ? u[0].pageX : e.pageX, h.touchesCurrent.y = u.length > 0 ? u[0].pageY : e.pageY;
            if (Math.max(Math.abs(h.touchesCurrent.x - h.touchesStart.x), Math.abs(h.touchesCurrent.y - h.touchesStart.y)) > 5 && (t.allowClick = !1), !h.isMoved && !p) {
                if (t.isHorizontal() && (Math.floor(h.minX) === Math.floor(h.startX) && h.touchesCurrent.x < h.touchesStart.x || Math.floor(h.maxX) === Math.floor(h.startX) && h.touchesCurrent.x > h.touchesStart.x)) return h.isTouched = !1, void P();
                if (!t.isHorizontal() && (Math.floor(h.minY) === Math.floor(h.startY) && h.touchesCurrent.y < h.touchesStart.y || Math.floor(h.maxY) === Math.floor(h.startY) && h.touchesCurrent.y > h.touchesStart.y)) return h.isTouched = !1, void P()
            }
            e.cancelable && e.preventDefault(), e.stopPropagation(), clearTimeout(v), t.touchEventsData.preventTouchMoveFromPointerMove = !0, v = setTimeout((() => {
                P()
            })), h.isMoved = !0;
            const r = (s.scale - c) / (m.maxRatio - t.params.zoom.minRatio),
                {
                    originX: n,
                    originY: l
                } = m;
            h.currentX = h.touchesCurrent.x - h.touchesStart.x + h.startX + r * (h.width - 2 * n), h.currentY = h.touchesCurrent.y - h.touchesStart.y + h.startY + r * (h.height - 2 * l), h.currentX < h.minX && (h.currentX = h.minX + 1 - (h.minX - h.currentX + 1) ** .8), h.currentX > h.maxX && (h.currentX = h.maxX - 1 + (h.currentX - h.maxX + 1) ** .8), h.currentY < h.minY && (h.currentY = h.minY + 1 - (h.minY - h.currentY + 1) ** .8), h.currentY > h.maxY && (h.currentY = h.maxY - 1 + (h.currentY - h.maxY + 1) ** .8), g.prevPositionX || (g.prevPositionX = h.touchesCurrent.x), g.prevPositionY || (g.prevPositionY = h.touchesCurrent.y), g.prevTime || (g.prevTime = Date.now()), g.x = (h.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2, g.y = (h.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2, Math.abs(h.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0), Math.abs(h.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0), g.prevPositionX = h.touchesCurrent.x, g.prevPositionY = h.touchesCurrent.y, g.prevTime = Date.now(), m.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`
        }

        function I() {
            const e = t.zoom;
            m.slideEl && t.activeIndex !== t.slides.indexOf(m.slideEl) && (m.imageEl && (m.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), m.imageWrapEl && (m.imageWrapEl.style.transform = "translate3d(0,0,0)"), m.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`), e.scale = 1, c = 1, m.slideEl = void 0, m.imageEl = void 0, m.imageWrapEl = void 0, m.originX = 0, m.originY = 0)
        }

        function z(e) {
            const s = t.zoom,
                a = t.params.zoom;
            if (!m.slideEl) {
                e && e.target && (m.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`)), m.slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.slideEl = f(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : m.slideEl = t.slides[t.activeIndex]);
                let s = m.slideEl.querySelector(`.${a.containerClass}`);
                s && (s = s.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m.imageEl = s, m.imageWrapEl = s ? E(m.imageEl, `.${a.containerClass}`)[0] : void 0
            }
            if (!m.imageEl || !m.imageWrapEl) return;
            let i, r, l, o, d, p, u, g, v, b, y, S, T, M, C, P, L, I;
            t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), m.slideEl.classList.add(`${a.zoomedSlideClass}`), void 0 === h.touchesStart.x && e ? (i = e.pageX, r = e.pageY) : (i = h.touchesStart.x, r = h.touchesStart.y);
            const z = "number" == typeof e ? e : null;
            1 === c && z && (i = void 0, r = void 0);
            const A = x();
            s.scale = z || A, c = z || A, !e || 1 === c && z ? (u = 0, g = 0) : (L = m.slideEl.offsetWidth, I = m.slideEl.offsetHeight, l = w(m.slideEl).left + n.scrollX, o = w(m.slideEl).top + n.scrollY, d = l + L / 2 - i, p = o + I / 2 - r, v = m.imageEl.offsetWidth || m.imageEl.clientWidth, b = m.imageEl.offsetHeight || m.imageEl.clientHeight, y = v * s.scale, S = b * s.scale, T = Math.min(L / 2 - y / 2, 0), M = Math.min(I / 2 - S / 2, 0), C = -T, P = -M, u = d * s.scale, g = p * s.scale, u < T && (u = T), u > C && (u = C), g < M && (g = M), g > P && (g = P)), z && 1 === s.scale && (m.originX = 0, m.originY = 0), m.imageWrapEl.style.transitionDuration = "300ms", m.imageWrapEl.style.transform = `translate3d(${u}px, ${g}px,0)`, m.imageEl.style.transitionDuration = "300ms", m.imageEl.style.transform = `translate3d(0,0,0) scale(${s.scale})`
        }

        function A() {
            const e = t.zoom,
                s = t.params.zoom;
            if (!m.slideEl) {
                t.params.virtual && t.params.virtual.enabled && t.virtual ? m.slideEl = f(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : m.slideEl = t.slides[t.activeIndex];
                let e = m.slideEl.querySelector(`.${s.containerClass}`);
                e && (e = e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m.imageEl = e, m.imageWrapEl = e ? E(m.imageEl, `.${s.containerClass}`)[0] : void 0
            }
            m.imageEl && m.imageWrapEl && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, c = 1, m.imageWrapEl.style.transitionDuration = "300ms", m.imageWrapEl.style.transform = "translate3d(0,0,0)", m.imageEl.style.transitionDuration = "300ms", m.imageEl.style.transform = "translate3d(0,0,0) scale(1)", m.slideEl.classList.remove(`${s.zoomedSlideClass}`), m.slideEl = void 0, m.originX = 0, m.originY = 0)
        }

        function $(e) {
            const s = t.zoom;
            s.scale && 1 !== s.scale ? A() : z(e)
        }

        function k() {
            return {
                passiveListener: !!t.params.passiveListeners && {
                    passive: !0,
                    capture: !1
                },
                activeListenerWithCapture: !t.params.passiveListeners || {
                    passive: !1,
                    capture: !0
                }
            }
        }

        function O() {
            const e = t.zoom;
            if (e.enabled) return;
            e.enabled = !0;
            const {
                passiveListener: s,
                activeListenerWithCapture: a
            } = k();
            t.wrapperEl.addEventListener("pointerdown", T, s), t.wrapperEl.addEventListener("pointermove", M, a), ["pointerup", "pointercancel", "pointerout"].forEach((e => {
                t.wrapperEl.addEventListener(e, C, s)
            })), t.wrapperEl.addEventListener("pointermove", L, a)
        }

        function D() {
            const e = t.zoom;
            if (!e.enabled) return;
            e.enabled = !1;
            const {
                passiveListener: s,
                activeListenerWithCapture: a
            } = k();
            t.wrapperEl.removeEventListener("pointerdown", T, s), t.wrapperEl.removeEventListener("pointermove", M, a), ["pointerup", "pointercancel", "pointerout"].forEach((e => {
                t.wrapperEl.removeEventListener(e, C, s)
            })), t.wrapperEl.removeEventListener("pointermove", L, a)
        }
        Object.defineProperty(t.zoom, "scale", {
            get: () => b,
            set(e) {
                if (b !== e) {
                    const t = m.imageEl,
                        s = m.slideEl;
                    i("zoomChange", e, t, s)
                }
                b = e
            }
        }), a("init", (() => {
            t.params.zoom.enabled && O()
        })), a("destroy", (() => {
            D()
        })), a("touchStart", ((e, s) => {
            t.zoom.enabled && function(e) {
                const s = t.device;
                if (!m.imageEl) return;
                if (h.isTouched) return;
                s.android && e.cancelable && e.preventDefault(), h.isTouched = !0;
                const a = u.length > 0 ? u[0] : e;
                h.touchesStart.x = a.pageX, h.touchesStart.y = a.pageY
            }(s)
        })), a("touchEnd", ((e, s) => {
            t.zoom.enabled && function() {
                const e = t.zoom;
                if (!m.imageEl) return;
                if (!h.isTouched || !h.isMoved) return h.isTouched = !1, void(h.isMoved = !1);
                h.isTouched = !1, h.isMoved = !1;
                let s = 300,
                    a = 300;
                const i = g.x * s,
                    r = h.currentX + i,
                    n = g.y * a,
                    l = h.currentY + n;
                0 !== g.x && (s = Math.abs((r - h.currentX) / g.x)), 0 !== g.y && (a = Math.abs((l - h.currentY) / g.y));
                const o = Math.max(s, a);
                h.currentX = r, h.currentY = l;
                const d = h.width * e.scale,
                    c = h.height * e.scale;
                h.minX = Math.min(m.slideWidth / 2 - d / 2, 0), h.maxX = -h.minX, h.minY = Math.min(m.slideHeight / 2 - c / 2, 0), h.maxY = -h.minY, h.currentX = Math.max(Math.min(h.currentX, h.maxX), h.minX), h.currentY = Math.max(Math.min(h.currentY, h.maxY), h.minY), m.imageWrapEl.style.transitionDuration = `${o}ms`, m.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`
            }()
        })), a("doubleTap", ((e, s) => {
            !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && $(s)
        })), a("transitionEnd", (() => {
            t.zoom.enabled && t.params.zoom.enabled && I()
        })), a("slideChange", (() => {
            t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && I()
        })), Object.assign(t.zoom, {
            enable: O,
            disable: D,
            in: z,
            out: A,
            toggle: $
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;

        function i(e, t) {
            const s = function() {
                let e, t, s;
                return (a, i) => {
                    for (t = -1, e = a.length; e - t > 1;) s = e + t >> 1, a[s] <= i ? t = s : e = s;
                    return e
                }
            }();
            let a, i;
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                return e ? (i = s(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0
            }, this
        }

        function r() {
            t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
        }
        s({
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        }), t.controller = {
            control: void 0
        }, a("beforeInit", (() => {
            if ("undefined" != typeof window && ("string" == typeof t.params.controller.control || t.params.controller.control instanceof HTMLElement)) {
                const e = document.querySelector(t.params.controller.control);
                if (e && e.swiper) t.controller.control = e.swiper;
                else if (e) {
                    const s = a => {
                        t.controller.control = a.detail[0], t.update(), e.removeEventListener("init", s)
                    };
                    e.addEventListener("init", s)
                }
            } else t.controller.control = t.params.controller.control
        })), a("update", (() => {
            r()
        })), a("resize", (() => {
            r()
        })), a("observerUpdate", (() => {
            r()
        })), a("setTranslate", ((e, s, a) => {
            t.controller.control && !t.controller.control.destroyed && t.controller.setTranslate(s, a)
        })), a("setTransition", ((e, s, a) => {
            t.controller.control && !t.controller.control.destroyed && t.controller.setTransition(s, a)
        })), Object.assign(t.controller, {
            setTranslate: function(e, s) {
                const a = t.controller.control;
                let r, n;
                const l = t.constructor;

                function o(e) {
                    if (e.destroyed) return;
                    const s = t.rtlTranslate ? -t.translate : t.translate;
                    "slide" === t.params.controller.by && (! function(e) {
                        t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid)
                    }(e), n = -t.controller.spline.interpolate(-s)), n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), !Number.isNaN(r) && Number.isFinite(r) || (r = 1), n = (s - t.minTranslate()) * r + e.minTranslate()), t.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, t), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                if (Array.isArray(a))
                    for (let e = 0; e < a.length; e += 1) a[e] !== s && a[e] instanceof l && o(a[e]);
                else a instanceof l && s !== a && o(a)
            },
            setTransition: function(e, s) {
                const a = t.constructor,
                    i = t.controller.control;
                let r;

                function n(s) {
                    s.destroyed || (s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && l((() => {
                        s.updateAutoHeight()
                    })), x(s.wrapperEl, (() => {
                        i && s.transitionEnd()
                    }))))
                }
                if (Array.isArray(i))
                    for (r = 0; r < i.length; r += 1) i[r] !== s && i[r] instanceof a && n(i[r]);
                else i instanceof a && s !== i && n(i)
            }
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: i
        } = e;
        s({
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group",
                id: null
            }
        }), t.a11y = {
            clicked: !1
        };
        let r, n, l = null,
            o = (new Date).getTime();

        function d(e) {
            const t = l;
            0 !== t.length && (t.innerHTML = "", t.innerHTML = e)
        }

        function c(e) {
            (e = T(e)).forEach((e => {
                e.setAttribute("tabIndex", "0")
            }))
        }

        function p(e) {
            (e = T(e)).forEach((e => {
                e.setAttribute("tabIndex", "-1")
            }))
        }

        function u(e, t) {
            (e = T(e)).forEach((e => {
                e.setAttribute("role", t)
            }))
        }

        function m(e, t) {
            (e = T(e)).forEach((e => {
                e.setAttribute("aria-roledescription", t)
            }))
        }

        function h(e, t) {
            (e = T(e)).forEach((e => {
                e.setAttribute("aria-label", t)
            }))
        }

        function f(e) {
            (e = T(e)).forEach((e => {
                e.setAttribute("aria-disabled", !0)
            }))
        }

        function g(e) {
            (e = T(e)).forEach((e => {
                e.setAttribute("aria-disabled", !1)
            }))
        }

        function w(e) {
            if (13 !== e.keyCode && 32 !== e.keyCode) return;
            const s = t.params.a11y,
                a = e.target;
            if (!t.pagination || !t.pagination.el || a !== t.pagination.el && !t.pagination.el.contains(e.target) || e.target.matches(ie(t.params.pagination.bulletClass))) {
                if (t.navigation && t.navigation.prevEl && t.navigation.nextEl) {
                    const e = T(t.navigation.prevEl);
                    T(t.navigation.nextEl).includes(a) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? d(s.lastSlideMessage) : d(s.nextSlideMessage)), e.includes(a) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? d(s.firstSlideMessage) : d(s.prevSlideMessage))
                }
                t.pagination && a.matches(ie(t.params.pagination.bulletClass)) && a.click()
            }
        }

        function b() {
            return t.pagination && t.pagination.bullets && t.pagination.bullets.length
        }

        function E() {
            return b() && t.params.pagination.clickable
        }
        const x = (e, t, s) => {
                c(e), "BUTTON" !== e.tagName && (u(e, "button"), e.addEventListener("keydown", w)), h(e, s),
                    function(e, t) {
                        (e = T(e)).forEach((e => {
                            e.setAttribute("aria-controls", t)
                        }))
                    }(e, t)
            },
            S = e => {
                n && n !== e.target && !n.contains(e.target) && (r = !0), t.a11y.clicked = !0
            },
            M = () => {
                r = !1, requestAnimationFrame((() => {
                    requestAnimationFrame((() => {
                        t.destroyed || (t.a11y.clicked = !1)
                    }))
                }))
            },
            C = e => {
                o = (new Date).getTime()
            },
            P = e => {
                if (t.a11y.clicked) return;
                if ((new Date).getTime() - o < 100) return;
                const s = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
                if (!s || !t.slides.includes(s)) return;
                n = s;
                const a = t.slides.indexOf(s) === t.activeIndex,
                    i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
                a || i || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, requestAnimationFrame((() => {
                    r || (t.slideTo(t.slides.indexOf(s), 0), r = !1)
                })))
            },
            L = () => {
                const e = t.params.a11y;
                e.itemRoleDescriptionMessage && m(t.slides, e.itemRoleDescriptionMessage), e.slideRole && u(t.slides, e.slideRole);
                const s = t.slides.length;
                e.slideLabelMessage && t.slides.forEach(((a, i) => {
                    const r = t.params.loop ? parseInt(a.getAttribute("data-swiper-slide-index"), 10) : i;
                    h(a, e.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, s))
                }))
            },
            I = () => {
                const e = t.params.a11y;
                t.el.append(l);
                const s = t.el;
                e.containerRoleDescriptionMessage && m(s, e.containerRoleDescriptionMessage), e.containerMessage && h(s, e.containerMessage);
                const i = t.wrapperEl,
                    r = e.id || i.getAttribute("id") || `swiper-wrapper-${n=16,void 0===n&&(n=16),"x".repeat(n).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;
                var n;
                const o = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
                var d;
                d = r, T(i).forEach((e => {
                        e.setAttribute("id", d)
                    })),
                    function(e, t) {
                        (e = T(e)).forEach((e => {
                            e.setAttribute("aria-live", t)
                        }))
                    }(i, o), L();
                let {
                    nextEl: c,
                    prevEl: p
                } = t.navigation ? t.navigation : {};
                if (c = T(c), p = T(p), c && c.forEach((t => x(t, r, e.nextSlideMessage))), p && p.forEach((t => x(t, r, e.prevSlideMessage))), E()) {
                    T(t.pagination.el).forEach((e => {
                        e.addEventListener("keydown", w)
                    }))
                }
                a().addEventListener("visibilitychange", C), t.el.addEventListener("focus", P, !0), t.el.addEventListener("focus", P, !0), t.el.addEventListener("pointerdown", S, !0), t.el.addEventListener("pointerup", M, !0)
            };
        i("beforeInit", (() => {
            l = v("span", t.params.a11y.notificationClass), l.setAttribute("aria-live", "assertive"), l.setAttribute("aria-atomic", "true")
        })), i("afterInit", (() => {
            t.params.a11y.enabled && I()
        })), i("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
            t.params.a11y.enabled && L()
        })), i("fromEdge toEdge afterInit lock unlock", (() => {
            t.params.a11y.enabled && function() {
                if (t.params.loop || t.params.rewind || !t.navigation) return;
                const {
                    nextEl: e,
                    prevEl: s
                } = t.navigation;
                s && (t.isBeginning ? (f(s), p(s)) : (g(s), c(s))), e && (t.isEnd ? (f(e), p(e)) : (g(e), c(e)))
            }()
        })), i("paginationUpdate", (() => {
            t.params.a11y.enabled && function() {
                const e = t.params.a11y;
                b() && t.pagination.bullets.forEach((s => {
                    t.params.pagination.clickable && (c(s), t.params.pagination.renderBullet || (u(s, "button"), h(s, e.paginationBulletMessage.replace(/\{\{index\}\}/, y(s) + 1)))), s.matches(ie(t.params.pagination.bulletActiveClass)) ? s.setAttribute("aria-current", "true") : s.removeAttribute("aria-current")
                }))
            }()
        })), i("destroy", (() => {
            t.params.a11y.enabled && function() {
                l && l.remove();
                let {
                    nextEl: e,
                    prevEl: s
                } = t.navigation ? t.navigation : {};
                e = T(e), s = T(s), e && e.forEach((e => e.removeEventListener("keydown", w))), s && s.forEach((e => e.removeEventListener("keydown", w))), E() && T(t.pagination.el).forEach((e => {
                    e.removeEventListener("keydown", w)
                }));
                a().removeEventListener("visibilitychange", C), t.el.removeEventListener("focus", P, !0), t.el.removeEventListener("pointerdown", S, !0), t.el.removeEventListener("pointerup", M, !0)
            }()
        }))
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            history: {
                enabled: !1,
                root: "",
                replaceState: !1,
                key: "slides",
                keepQuery: !1
            }
        });
        let i = !1,
            n = {};
        const l = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
            o = e => {
                const t = r();
                let s;
                s = e ? new URL(e) : t.location;
                const a = s.pathname.slice(1).split("/").filter((e => "" !== e)),
                    i = a.length;
                return {
                    key: a[i - 2],
                    value: a[i - 1]
                }
            },
            d = (e, s) => {
                const a = r();
                if (!i || !t.params.history.enabled) return;
                let n;
                n = t.params.url ? new URL(t.params.url) : a.location;
                const o = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${s}"]`) : t.slides[s];
                let d = l(o.getAttribute("data-history"));
                if (t.params.history.root.length > 0) {
                    let s = t.params.history.root;
                    "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), d = `${s}/${e?`${e}/`:""}${d}`
                } else n.pathname.includes(e) || (d = `${e?`${e}/`:""}${d}`);
                t.params.history.keepQuery && (d += n.search);
                const c = a.history.state;
                c && c.value === d || (t.params.history.replaceState ? a.history.replaceState({
                    value: d
                }, null, d) : a.history.pushState({
                    value: d
                }, null, d))
            },
            c = (e, s, a) => {
                if (s)
                    for (let i = 0, r = t.slides.length; i < r; i += 1) {
                        const r = t.slides[i];
                        if (l(r.getAttribute("data-history")) === s) {
                            const s = t.getSlideIndex(r);
                            t.slideTo(s, e, a)
                        }
                    } else t.slideTo(0, e, a)
            },
            p = () => {
                n = o(t.params.url), c(t.params.speed, n.value, !1)
            };
        a("init", (() => {
            t.params.history.enabled && (() => {
                const e = r();
                if (t.params.history) {
                    if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void(t.params.hashNavigation.enabled = !0);
                    i = !0, n = o(t.params.url), n.key || n.value ? (c(0, n.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", p)) : t.params.history.replaceState || e.addEventListener("popstate", p)
                }
            })()
        })), a("destroy", (() => {
            t.params.history.enabled && (() => {
                const e = r();
                t.params.history.replaceState || e.removeEventListener("popstate", p)
            })()
        })), a("transitionEnd _freeModeNoMomentumRelease", (() => {
            i && d(t.params.history.key, t.activeIndex)
        })), a("slideChange", (() => {
            i && t.params.cssMode && d(t.params.history.key, t.activeIndex)
        }))
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            emit: i,
            on: n
        } = e, l = !1;
        const o = a(),
            d = r();
        s({
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1,
                getSlideIndex(e, s) {
                    if (t.virtual && t.params.virtual.enabled) {
                        const e = t.slides.filter((e => e.getAttribute("data-hash") === s))[0];
                        if (!e) return 0;
                        return parseInt(e.getAttribute("data-swiper-slide-index"), 10)
                    }
                    return t.getSlideIndex(f(t.slidesEl, `.${t.params.slideClass}[data-hash="${s}"], swiper-slide[data-hash="${s}"]`)[0])
                }
            }
        });
        const c = () => {
                i("hashChange");
                const e = o.location.hash.replace("#", ""),
                    s = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex];
                if (e !== (s ? s.getAttribute("data-hash") : "")) {
                    const s = t.params.hashNavigation.getSlideIndex(t, e);
                    if (void 0 === s || Number.isNaN(s)) return;
                    t.slideTo(s)
                }
            },
            p = () => {
                if (!l || !t.params.hashNavigation.enabled) return;
                const e = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex],
                    s = e ? e.getAttribute("data-hash") || e.getAttribute("data-history") : "";
                t.params.hashNavigation.replaceState && d.history && d.history.replaceState ? (d.history.replaceState(null, null, `#${s}` || ""), i("hashSet")) : (o.location.hash = s || "", i("hashSet"))
            };
        n("init", (() => {
            t.params.hashNavigation.enabled && (() => {
                if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
                l = !0;
                const e = o.location.hash.replace("#", "");
                if (e) {
                    const s = 0,
                        a = t.params.hashNavigation.getSlideIndex(t, e);
                    t.slideTo(a || 0, s, t.params.runCallbacksOnInit, !0)
                }
                t.params.hashNavigation.watchState && d.addEventListener("hashchange", c)
            })()
        })), n("destroy", (() => {
            t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d.removeEventListener("hashchange", c)
        })), n("transitionEnd _freeModeNoMomentumRelease", (() => {
            l && p()
        })), n("slideChange", (() => {
            l && t.params.cssMode && p()
        }))
    }, function(e) {
        let t, s, {
            swiper: i,
            extendParams: r,
            on: n,
            emit: l,
            params: o
        } = e;
        i.autoplay = {
            running: !1,
            paused: !1,
            timeLeft: 0
        }, r({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !1,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        });
        let d, c, p, u, m, h, f, g, v = o && o.autoplay ? o.autoplay.delay : 3e3,
            w = o && o.autoplay ? o.autoplay.delay : 3e3,
            b = (new Date).getTime();

        function y(e) {
            i && !i.destroyed && i.wrapperEl && e.target === i.wrapperEl && (i.wrapperEl.removeEventListener("transitionend", y), g || C())
        }
        const E = () => {
                if (i.destroyed || !i.autoplay.running) return;
                i.autoplay.paused ? c = !0 : c && (w = d, c = !1);
                const e = i.autoplay.paused ? d : b + w - (new Date).getTime();
                i.autoplay.timeLeft = e, l("autoplayTimeLeft", e, e / v), s = requestAnimationFrame((() => {
                    E()
                }))
            },
            x = e => {
                if (i.destroyed || !i.autoplay.running) return;
                cancelAnimationFrame(s), E();
                let a = void 0 === e ? i.params.autoplay.delay : e;
                v = i.params.autoplay.delay, w = i.params.autoplay.delay;
                const r = (() => {
                    let e;
                    if (e = i.virtual && i.params.virtual.enabled ? i.slides.filter((e => e.classList.contains("swiper-slide-active")))[0] : i.slides[i.activeIndex], !e) return;
                    return parseInt(e.getAttribute("data-swiper-autoplay"), 10)
                })();
                !Number.isNaN(r) && r > 0 && void 0 === e && (a = r, v = r, w = r), d = a;
                const n = i.params.speed,
                    o = () => {
                        i && !i.destroyed && (i.params.autoplay.reverseDirection ? !i.isBeginning || i.params.loop || i.params.rewind ? (i.slidePrev(n, !0, !0), l("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(i.slides.length - 1, n, !0, !0), l("autoplay")) : !i.isEnd || i.params.loop || i.params.rewind ? (i.slideNext(n, !0, !0), l("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(0, n, !0, !0), l("autoplay")), i.params.cssMode && (b = (new Date).getTime(), requestAnimationFrame((() => {
                            x()
                        }))))
                    };
                return a > 0 ? (clearTimeout(t), t = setTimeout((() => {
                    o()
                }), a)) : requestAnimationFrame((() => {
                    o()
                })), a
            },
            S = () => {
                b = (new Date).getTime(), i.autoplay.running = !0, x(), l("autoplayStart")
            },
            T = () => {
                i.autoplay.running = !1, clearTimeout(t), cancelAnimationFrame(s), l("autoplayStop")
            },
            M = (e, s) => {
                if (i.destroyed || !i.autoplay.running) return;
                clearTimeout(t), e || (f = !0);
                const a = () => {
                    l("autoplayPause"), i.params.autoplay.waitForTransition ? i.wrapperEl.addEventListener("transitionend", y) : C()
                };
                if (i.autoplay.paused = !0, s) return h && (d = i.params.autoplay.delay), h = !1, void a();
                const r = d || i.params.autoplay.delay;
                d = r - ((new Date).getTime() - b), i.isEnd && d < 0 && !i.params.loop || (d < 0 && (d = 0), a())
            },
            C = () => {
                i.isEnd && d < 0 && !i.params.loop || i.destroyed || !i.autoplay.running || (b = (new Date).getTime(), f ? (f = !1, x(d)) : x(), i.autoplay.paused = !1, l("autoplayResume"))
            },
            P = () => {
                if (i.destroyed || !i.autoplay.running) return;
                const e = a();
                "hidden" === e.visibilityState && (f = !0, M(!0)), "visible" === e.visibilityState && C()
            },
            L = e => {
                "mouse" === e.pointerType && (f = !0, g = !0, i.animating || i.autoplay.paused || M(!0))
            },
            I = e => {
                "mouse" === e.pointerType && (g = !1, i.autoplay.paused && C())
            };
        n("init", (() => {
            i.params.autoplay.enabled && (i.params.autoplay.pauseOnMouseEnter && (i.el.addEventListener("pointerenter", L), i.el.addEventListener("pointerleave", I)), a().addEventListener("visibilitychange", P), S())
        })), n("destroy", (() => {
            i.el.removeEventListener("pointerenter", L), i.el.removeEventListener("pointerleave", I), a().removeEventListener("visibilitychange", P), i.autoplay.running && T()
        })), n("_freeModeStaticRelease", (() => {
            (u || f) && C()
        })), n("_freeModeNoMomentumRelease", (() => {
            i.params.autoplay.disableOnInteraction ? T() : M(!0, !0)
        })), n("beforeTransitionStart", ((e, t, s) => {
            !i.destroyed && i.autoplay.running && (s || !i.params.autoplay.disableOnInteraction ? M(!0, !0) : T())
        })), n("sliderFirstMove", (() => {
            !i.destroyed && i.autoplay.running && (i.params.autoplay.disableOnInteraction ? T() : (p = !0, u = !1, f = !1, m = setTimeout((() => {
                f = !0, u = !0, M(!0)
            }), 200)))
        })), n("touchEnd", (() => {
            if (!i.destroyed && i.autoplay.running && p) {
                if (clearTimeout(m), clearTimeout(t), i.params.autoplay.disableOnInteraction) return u = !1, void(p = !1);
                u && i.params.cssMode && C(), u = !1, p = !1
            }
        })), n("slideChange", (() => {
            !i.destroyed && i.autoplay.running && (h = !0)
        })), Object.assign(i.autoplay, {
            start: S,
            stop: T,
            pause: M,
            resume: C
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: i
        } = e;
        s({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let r = !1,
            n = !1;

        function l() {
            const e = t.thumbs.swiper;
            if (!e || e.destroyed) return;
            const s = e.clickedIndex,
                a = e.clickedSlide;
            if (a && a.classList.contains(t.params.thumbs.slideThumbActiveClass)) return;
            if (null == s) return;
            let i;
            i = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : s, t.params.loop ? t.slideToLoop(i) : t.slideTo(i)
        }

        function o() {
            const {
                thumbs: e
            } = t.params;
            if (r) return !1;
            r = !0;
            const s = t.constructor;
            if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), Object.assign(t.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), t.thumbs.swiper.update();
            else if (c(e.swiper)) {
                const a = Object.assign({}, e.swiper);
                Object.assign(a, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), t.thumbs.swiper = new s(a), n = !0
            }
            return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", l), !0
        }

        function d(e) {
            const s = t.thumbs.swiper;
            if (!s || s.destroyed) return;
            const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
            let i = 1;
            const r = t.params.thumbs.slideThumbActiveClass;
            if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (i = 1), i = Math.floor(i), s.slides.forEach((e => e.classList.remove(r))), s.params.loop || s.params.virtual && s.params.virtual.enabled)
                for (let e = 0; e < i; e += 1) f(s.slidesEl, `[data-swiper-slide-index="${t.realIndex+e}"]`).forEach((e => {
                    e.classList.add(r)
                }));
            else
                for (let e = 0; e < i; e += 1) s.slides[t.realIndex + e] && s.slides[t.realIndex + e].classList.add(r);
            const n = t.params.thumbs.autoScrollOffset,
                l = n && !s.params.loop;
            if (t.realIndex !== s.realIndex || l) {
                const i = s.activeIndex;
                let r, o;
                if (s.params.loop) {
                    const e = s.slides.filter((e => e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`))[0];
                    r = s.slides.indexOf(e), o = t.activeIndex > t.previousIndex ? "next" : "prev"
                } else r = t.realIndex, o = r > t.previousIndex ? "next" : "prev";
                l && (r += "next" === o ? n : -1 * n), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(r) < 0 && (s.params.centeredSlides ? r = r > i ? r - Math.floor(a / 2) + 1 : r + Math.floor(a / 2) - 1 : r > i && s.params.slidesPerGroup, s.slideTo(r, e ? 0 : void 0))
            }
        }
        t.thumbs = {
            swiper: null
        }, i("beforeInit", (() => {
            const {
                thumbs: e
            } = t.params;
            if (e && e.swiper)
                if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
                    const s = a(),
                        i = () => {
                            const a = "string" == typeof e.swiper ? s.querySelector(e.swiper) : e.swiper;
                            if (a && a.swiper) e.swiper = a.swiper, o(), d(!0);
                            else if (a) {
                                const s = i => {
                                    e.swiper = i.detail[0], a.removeEventListener("init", s), o(), d(!0), e.swiper.update(), t.update()
                                };
                                a.addEventListener("init", s)
                            }
                            return a
                        },
                        r = () => {
                            if (t.destroyed) return;
                            i() || requestAnimationFrame(r)
                        };
                    requestAnimationFrame(r)
                } else o(), d(!0)
        })), i("slideChange update resize observerUpdate", (() => {
            d()
        })), i("setTransition", ((e, s) => {
            const a = t.thumbs.swiper;
            a && !a.destroyed && a.setTransition(s)
        })), i("beforeDestroy", (() => {
            const e = t.thumbs.swiper;
            e && !e.destroyed && n && e.destroy()
        })), Object.assign(t.thumbs, {
            init: o,
            update: d
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            emit: a,
            once: i
        } = e;
        s({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }), Object.assign(t, {
            freeMode: {
                onTouchStart: function() {
                    if (t.params.cssMode) return;
                    const e = t.getTranslate();
                    t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
                        currentPos: t.rtl ? t.translate : -t.translate
                    })
                },
                onTouchMove: function() {
                    if (t.params.cssMode) return;
                    const {
                        touchEventsData: e,
                        touches: s
                    } = t;
                    0 === e.velocities.length && e.velocities.push({
                        position: s[t.isHorizontal() ? "startX" : "startY"],
                        time: e.touchStartTime
                    }), e.velocities.push({
                        position: s[t.isHorizontal() ? "currentX" : "currentY"],
                        time: o()
                    })
                },
                onTouchEnd: function(e) {
                    let {
                        currentPos: s
                    } = e;
                    if (t.params.cssMode) return;
                    const {
                        params: r,
                        wrapperEl: n,
                        rtlTranslate: l,
                        snapGrid: d,
                        touchEventsData: c
                    } = t, p = o() - c.touchStartTime;
                    if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
                    else if (s > -t.maxTranslate()) t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1);
                    else {
                        if (r.freeMode.momentum) {
                            if (c.velocities.length > 1) {
                                const e = c.velocities.pop(),
                                    s = c.velocities.pop(),
                                    a = e.position - s.position,
                                    i = e.time - s.time;
                                t.velocity = a / i, t.velocity /= 2, Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (i > 150 || o() - e.time > 300) && (t.velocity = 0)
                            } else t.velocity = 0;
                            t.velocity *= r.freeMode.momentumVelocityRatio, c.velocities.length = 0;
                            let e = 1e3 * r.freeMode.momentumRatio;
                            const s = t.velocity * e;
                            let p = t.translate + s;
                            l && (p = -p);
                            let u, m = !1;
                            const h = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                            let f;
                            if (p < t.maxTranslate()) r.freeMode.momentumBounce ? (p + t.maxTranslate() < -h && (p = t.maxTranslate() - h), u = t.maxTranslate(), m = !0, c.allowMomentumBounce = !0) : p = t.maxTranslate(), r.loop && r.centeredSlides && (f = !0);
                            else if (p > t.minTranslate()) r.freeMode.momentumBounce ? (p - t.minTranslate() > h && (p = t.minTranslate() + h), u = t.minTranslate(), m = !0, c.allowMomentumBounce = !0) : p = t.minTranslate(), r.loop && r.centeredSlides && (f = !0);
                            else if (r.freeMode.sticky) {
                                let e;
                                for (let t = 0; t < d.length; t += 1)
                                    if (d[t] > -p) {
                                        e = t;
                                        break
                                    }
                                p = Math.abs(d[e] - p) < Math.abs(d[e - 1] - p) || "next" === t.swipeDirection ? d[e] : d[e - 1], p = -p
                            }
                            if (f && i("transitionEnd", (() => {
                                    t.loopFix()
                                })), 0 !== t.velocity) {
                                if (e = l ? Math.abs((-p - t.translate) / t.velocity) : Math.abs((p - t.translate) / t.velocity), r.freeMode.sticky) {
                                    const s = Math.abs((l ? -p : p) - t.translate),
                                        a = t.slidesSizesGrid[t.activeIndex];
                                    e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed
                                }
                            } else if (r.freeMode.sticky) return void t.slideToClosest();
                            r.freeMode.momentumBounce && m ? (t.updateProgress(u), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating = !0, x(n, (() => {
                                t && !t.destroyed && c.allowMomentumBounce && (a("momentumBounce"), t.setTransition(r.speed), setTimeout((() => {
                                    t.setTranslate(u), x(n, (() => {
                                        t && !t.destroyed && t.transitionEnd()
                                    }))
                                }), 0))
                            }))) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(p), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, x(n, (() => {
                                t && !t.destroyed && t.transitionEnd()
                            })))) : t.updateProgress(p), t.updateActiveIndex(), t.updateSlidesClasses()
                        } else {
                            if (r.freeMode.sticky) return void t.slideToClosest();
                            r.freeMode && a("_freeModeNoMomentumRelease")
                        }(!r.freeMode.momentum || p >= r.longSwipesMs) && (a("_freeModeStaticRelease"), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                    }
                }
            }
        })
    }, function(e) {
        let t, s, a, i, {
            swiper: r,
            extendParams: n,
            on: l
        } = e;
        n({
            grid: {
                rows: 1,
                fill: "column"
            }
        });
        const o = () => {
            let e = r.params.spaceBetween;
            return "string" == typeof e && e.indexOf("%") >= 0 ? e = parseFloat(e.replace("%", "")) / 100 * r.size : "string" == typeof e && (e = parseFloat(e)), e
        };
        l("init", (() => {
            i = r.params.grid && r.params.grid.rows > 1
        })), l("update", (() => {
            const {
                params: e,
                el: t
            } = r, s = e.grid && e.grid.rows > 1;
            i && !s ? (t.classList.remove(`${e.containerModifierClass}grid`, `${e.containerModifierClass}grid-column`), a = 1, r.emitContainerClasses()) : !i && s && (t.classList.add(`${e.containerModifierClass}grid`), "column" === e.grid.fill && t.classList.add(`${e.containerModifierClass}grid-column`), r.emitContainerClasses()), i = s
        })), r.grid = {
            initSlides: e => {
                const {
                    slidesPerView: i
                } = r.params, {
                    rows: n,
                    fill: l
                } = r.params.grid, o = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : e.length;
                a = Math.floor(o / n), t = Math.floor(o / n) === o / n ? o : Math.ceil(o / n) * n, "auto" !== i && "row" === l && (t = Math.max(t, i * n)), s = t / n
            },
            unsetSlides: () => {
                r.slides && r.slides.forEach((e => {
                    e.swiperSlideGridSet && (e.style.height = "", e.style[r.getDirectionLabel("margin-top")] = "")
                }))
            },
            updateSlide: (e, i, n) => {
                const {
                    slidesPerGroup: l
                } = r.params, d = o(), {
                    rows: c,
                    fill: p
                } = r.params.grid, u = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : n.length;
                let m, h, f;
                if ("row" === p && l > 1) {
                    const s = Math.floor(e / (l * c)),
                        a = e - c * l * s,
                        r = 0 === s ? l : Math.min(Math.ceil((u - s * c * l) / c), l);
                    f = Math.floor(a / r), h = a - f * r + s * l, m = h + f * t / c, i.style.order = m
                } else "column" === p ? (h = Math.floor(e / c), f = e - h * c, (h > a || h === a && f === c - 1) && (f += 1, f >= c && (f = 0, h += 1))) : (f = Math.floor(e / s), h = e - f * s);
                i.row = f, i.column = h, i.style.height = `calc((100% - ${(c-1)*d}px) / ${c})`, i.style[r.getDirectionLabel("margin-top")] = 0 !== f ? d && `${d}px` : "", i.swiperSlideGridSet = !0
            },
            updateWrapperSize: (e, s) => {
                const {
                    centeredSlides: a,
                    roundLengths: i
                } = r.params, n = o(), {
                    rows: l
                } = r.params.grid;
                if (r.virtualSize = (e + n) * t, r.virtualSize = Math.ceil(r.virtualSize / l) - n, r.params.cssMode || (r.wrapperEl.style[r.getDirectionLabel("width")] = `${r.virtualSize+n}px`), a) {
                    const e = [];
                    for (let t = 0; t < s.length; t += 1) {
                        let a = s[t];
                        i && (a = Math.floor(a)), s[t] < r.virtualSize + s[0] && e.push(a)
                    }
                    s.splice(0, s.length), s.push(...e)
                }
            }
        }
    }, function(e) {
        let {
            swiper: t
        } = e;
        Object.assign(t, {
            appendSlide: re.bind(t),
            prependSlide: ne.bind(t),
            addSlide: le.bind(t),
            removeSlide: oe.bind(t),
            removeAllSlides: de.bind(t)
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            fadeEffect: {
                crossFade: !1
            }
        }), ce({
            effect: "fade",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    slides: e
                } = t;
                t.params.fadeEffect;
                for (let s = 0; s < e.length; s += 1) {
                    const e = t.slides[s];
                    let a = -e.swiperSlideOffset;
                    t.params.virtualTranslate || (a -= t.translate);
                    let i = 0;
                    t.isHorizontal() || (i = a, a = 0);
                    const r = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e.progress), 0) : 1 + Math.min(Math.max(e.progress, -1), 0),
                        n = pe(0, e);
                    n.style.opacity = r, n.style.transform = `translate3d(${a}px, ${i}px, 0px)`
                }
            },
            setTransition: e => {
                const s = t.slides.map((e => h(e)));
                s.forEach((t => {
                    t.style.transitionDuration = `${e}ms`
                })), ue({
                    swiper: t,
                    duration: e,
                    transformElements: s,
                    allSlides: !0
                })
            },
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        });
        const i = (e, t, s) => {
            let a = s ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
                i = s ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
            a || (a = v("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "left" : "top")).split(" ")), e.append(a)), i || (i = v("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "right" : "bottom")).split(" ")), e.append(i)), a && (a.style.opacity = Math.max(-t, 0)), i && (i.style.opacity = Math.max(t, 0))
        };
        ce({
            effect: "cube",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    el: e,
                    wrapperEl: s,
                    slides: a,
                    width: r,
                    height: n,
                    rtlTranslate: l,
                    size: o,
                    browser: d
                } = t, c = t.params.cubeEffect, p = t.isHorizontal(), u = t.virtual && t.params.virtual.enabled;
                let m, h = 0;
                c.shadow && (p ? (m = t.wrapperEl.querySelector(".swiper-cube-shadow"), m || (m = v("div", "swiper-cube-shadow"), t.wrapperEl.append(m)), m.style.height = `${r}px`) : (m = e.querySelector(".swiper-cube-shadow"), m || (m = v("div", "swiper-cube-shadow"), e.append(m))));
                for (let e = 0; e < a.length; e += 1) {
                    const s = a[e];
                    let r = e;
                    u && (r = parseInt(s.getAttribute("data-swiper-slide-index"), 10));
                    let n = 90 * r,
                        d = Math.floor(n / 360);
                    l && (n = -n, d = Math.floor(-n / 360));
                    const m = Math.max(Math.min(s.progress, 1), -1);
                    let f = 0,
                        g = 0,
                        v = 0;
                    r % 4 == 0 ? (f = 4 * -d * o, v = 0) : (r - 1) % 4 == 0 ? (f = 0, v = 4 * -d * o) : (r - 2) % 4 == 0 ? (f = o + 4 * d * o, v = o) : (r - 3) % 4 == 0 && (f = -o, v = 3 * o + 4 * o * d), l && (f = -f), p || (g = f, f = 0);
                    const w = `rotateX(${p?0:-n}deg) rotateY(${p?n:0}deg) translate3d(${f}px, ${g}px, ${v}px)`;
                    m <= 1 && m > -1 && (h = 90 * r + 90 * m, l && (h = 90 * -r - 90 * m), t.browser && t.browser.need3dFix && Math.abs(h) / 90 % 2 == 1 && (h += .001)), s.style.transform = w, c.slideShadows && i(s, m, p)
                }
                if (s.style.transformOrigin = `50% 50% -${o/2}px`, s.style["-webkit-transform-origin"] = `50% 50% -${o/2}px`, c.shadow)
                    if (p) m.style.transform = `translate3d(0px, ${r/2+c.shadowOffset}px, ${-r/2}px) rotateX(89.99deg) rotateZ(0deg) scale(${c.shadowScale})`;
                    else {
                        const e = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                            t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                            s = c.shadowScale,
                            a = c.shadowScale / t,
                            i = c.shadowOffset;
                        m.style.transform = `scale3d(${s}, 1, ${a}) translate3d(0px, ${n/2+i}px, ${-n/2/a}px) rotateX(-89.99deg)`
                    }
                const f = (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -o / 2 : 0;
                s.style.transform = `translate3d(0px,0,${f}px) rotateX(${t.isHorizontal()?0:h}deg) rotateY(${t.isHorizontal()?-h:0}deg)`, s.style.setProperty("--swiper-cube-translate-z", `${f}px`)
            },
            setTransition: e => {
                const {
                    el: s,
                    slides: a
                } = t;
                if (a.forEach((t => {
                        t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
                            t.style.transitionDuration = `${e}ms`
                        }))
                    })), t.params.cubeEffect.shadow && !t.isHorizontal()) {
                    const t = s.querySelector(".swiper-cube-shadow");
                    t && (t.style.transitionDuration = `${e}ms`)
                }
            },
            recreateShadows: () => {
                const e = t.isHorizontal();
                t.slides.forEach((t => {
                    const s = Math.max(Math.min(t.progress, 1), -1);
                    i(t, s, e)
                }))
            },
            getEffectParams: () => t.params.cubeEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        });
        const i = (e, s) => {
            let a = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
                i = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
            a || (a = me("flip", e, t.isHorizontal() ? "left" : "top")), i || (i = me("flip", e, t.isHorizontal() ? "right" : "bottom")), a && (a.style.opacity = Math.max(-s, 0)), i && (i.style.opacity = Math.max(s, 0))
        };
        ce({
            effect: "flip",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    slides: e,
                    rtlTranslate: s
                } = t, a = t.params.flipEffect;
                for (let r = 0; r < e.length; r += 1) {
                    const n = e[r];
                    let l = n.progress;
                    t.params.flipEffect.limitRotation && (l = Math.max(Math.min(n.progress, 1), -1));
                    const o = n.swiperSlideOffset;
                    let d = -180 * l,
                        c = 0,
                        p = t.params.cssMode ? -o - t.translate : -o,
                        u = 0;
                    t.isHorizontal() ? s && (d = -d) : (u = p, p = 0, c = -d, d = 0), t.browser && t.browser.need3dFix && (Math.abs(d) / 90 % 2 == 1 && (d += .001), Math.abs(c) / 90 % 2 == 1 && (c += .001)), n.style.zIndex = -Math.abs(Math.round(l)) + e.length, a.slideShadows && i(n, l);
                    const m = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
                    pe(0, n).style.transform = m
                }
            },
            setTransition: e => {
                const s = t.slides.map((e => h(e)));
                s.forEach((t => {
                    t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
                        t.style.transitionDuration = `${e}ms`
                    }))
                })), ue({
                    swiper: t,
                    duration: e,
                    transformElements: s
                })
            },
            recreateShadows: () => {
                t.params.flipEffect, t.slides.forEach((e => {
                    let s = e.progress;
                    t.params.flipEffect.limitRotation && (s = Math.max(Math.min(e.progress, 1), -1)), i(e, s)
                }))
            },
            getEffectParams: () => t.params.flipEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0
            }
        }), ce({
            effect: "coverflow",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    width: e,
                    height: s,
                    slides: a,
                    slidesSizesGrid: i
                } = t, r = t.params.coverflowEffect, n = t.isHorizontal(), l = t.translate, o = n ? e / 2 - l : s / 2 - l, d = n ? r.rotate : -r.rotate, c = r.depth;
                for (let e = 0, s = a.length; e < s; e += 1) {
                    const s = a[e],
                        l = i[e],
                        p = (o - s.swiperSlideOffset - l / 2) / l,
                        u = "function" == typeof r.modifier ? r.modifier(p) : p * r.modifier;
                    let m = n ? d * u : 0,
                        h = n ? 0 : d * u,
                        f = -c * Math.abs(u),
                        g = r.stretch;
                    "string" == typeof g && -1 !== g.indexOf("%") && (g = parseFloat(r.stretch) / 100 * l);
                    let v = n ? 0 : g * u,
                        w = n ? g * u : 0,
                        b = 1 - (1 - r.scale) * Math.abs(u);
                    Math.abs(w) < .001 && (w = 0), Math.abs(v) < .001 && (v = 0), Math.abs(f) < .001 && (f = 0), Math.abs(m) < .001 && (m = 0), Math.abs(h) < .001 && (h = 0), Math.abs(b) < .001 && (b = 0), t.browser && t.browser.need3dFix && (Math.abs(m) / 90 % 2 == 1 && (m += .001), Math.abs(h) / 90 % 2 == 1 && (h += .001));
                    const y = `translate3d(${w}px,${v}px,${f}px)  rotateX(${h}deg) rotateY(${m}deg) scale(${b})`;
                    if (pe(0, s).style.transform = y, s.style.zIndex = 1 - Math.abs(Math.round(u)), r.slideShadows) {
                        let e = n ? s.querySelector(".swiper-slide-shadow-left") : s.querySelector(".swiper-slide-shadow-top"),
                            t = n ? s.querySelector(".swiper-slide-shadow-right") : s.querySelector(".swiper-slide-shadow-bottom");
                        e || (e = me("coverflow", s, n ? "left" : "top")), t || (t = me("coverflow", s, n ? "right" : "bottom")), e && (e.style.opacity = u > 0 ? u : 0), t && (t.style.opacity = -u > 0 ? -u : 0)
                    }
                }
            },
            setTransition: e => {
                t.slides.map((e => h(e))).forEach((t => {
                    t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
                        t.style.transitionDuration = `${e}ms`
                    }))
                }))
            },
            perspective: () => !0,
            overwriteParams: () => ({
                watchSlidesProgress: !0
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            creativeEffect: {
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                },
                next: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                }
            }
        });
        const i = e => "string" == typeof e ? e : `${e}px`;
        ce({
            effect: "creative",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    slides: e,
                    wrapperEl: s,
                    slidesSizesGrid: a
                } = t, r = t.params.creativeEffect, {
                    progressMultiplier: n
                } = r, l = t.params.centeredSlides;
                if (l) {
                    const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
                    s.style.transform = `translateX(calc(50% - ${e}px))`
                }
                for (let s = 0; s < e.length; s += 1) {
                    const a = e[s],
                        o = a.progress,
                        d = Math.min(Math.max(a.progress, -r.limitProgress), r.limitProgress);
                    let c = d;
                    l || (c = Math.min(Math.max(a.originalProgress, -r.limitProgress), r.limitProgress));
                    const p = a.swiperSlideOffset,
                        u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
                        m = [0, 0, 0];
                    let h = !1;
                    t.isHorizontal() || (u[1] = u[0], u[0] = 0);
                    let f = {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        scale: 1,
                        opacity: 1
                    };
                    d < 0 ? (f = r.next, h = !0) : d > 0 && (f = r.prev, h = !0), u.forEach(((e, t) => {
                        u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d*n)}))`
                    })), m.forEach(((e, s) => {
                        let a = f.rotate[s] * Math.abs(d * n);
                        t.browser && t.browser.need3dFix && Math.abs(a) / 90 % 2 == 1 && (a += .001), m[s] = a
                    })), a.style.zIndex = -Math.abs(Math.round(o)) + e.length;
                    const g = u.join(", "),
                        v = `rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`,
                        w = c < 0 ? `scale(${1+(1-f.scale)*c*n})` : `scale(${1-(1-f.scale)*c*n})`,
                        b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n,
                        y = `translate3d(${g}) ${v} ${w}`;
                    if (h && f.shadow || !h) {
                        let e = a.querySelector(".swiper-slide-shadow");
                        if (!e && f.shadow && (e = me("creative", a)), e) {
                            const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                            e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                        }
                    }
                    const E = pe(0, a);
                    E.style.transform = y, E.style.opacity = b, f.origin && (E.style.transformOrigin = f.origin)
                }
            },
            setTransition: e => {
                const s = t.slides.map((e => h(e)));
                s.forEach((t => {
                    t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach((t => {
                        t.style.transitionDuration = `${e}ms`
                    }))
                })), ue({
                    swiper: t,
                    duration: e,
                    transformElements: s,
                    allSlides: !0
                })
            },
            perspective: () => t.params.creativeEffect.perspective,
            overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            cardsEffect: {
                slideShadows: !0,
                rotate: !0,
                perSlideRotate: 2,
                perSlideOffset: 8
            }
        }), ce({
            effect: "cards",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    slides: e,
                    activeIndex: s,
                    rtlTranslate: a
                } = t, i = t.params.cardsEffect, {
                    startTranslate: r,
                    isTouched: n
                } = t.touchEventsData, l = a ? -t.translate : t.translate;
                for (let o = 0; o < e.length; o += 1) {
                    const d = e[o],
                        c = d.progress,
                        p = Math.min(Math.max(c, -4), 4);
                    let u = d.swiperSlideOffset;
                    t.params.centeredSlides && !t.params.cssMode && (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (u -= e[0].swiperSlideOffset);
                    let m = t.params.cssMode ? -u - t.translate : -u,
                        h = 0;
                    const f = -100 * Math.abs(p);
                    let g = 1,
                        v = -i.perSlideRotate * p,
                        w = i.perSlideOffset - .75 * Math.abs(p);
                    const b = t.virtual && t.params.virtual.enabled ? t.virtual.from + o : o,
                        y = (b === s || b === s - 1) && p > 0 && p < 1 && (n || t.params.cssMode) && l < r,
                        E = (b === s || b === s + 1) && p < 0 && p > -1 && (n || t.params.cssMode) && l > r;
                    if (y || E) {
                        const e = (1 - Math.abs((Math.abs(p) - .5) / .5)) ** .5;
                        v += -28 * p * e, g += -.5 * e, w += 96 * e, h = -25 * e * Math.abs(p) + "%"
                    }
                    if (m = p < 0 ? `calc(${m}px ${a?"-":"+"} (${w*Math.abs(p)}%))` : p > 0 ? `calc(${m}px ${a?"-":"+"} (-${w*Math.abs(p)}%))` : `${m}px`, !t.isHorizontal()) {
                        const e = h;
                        h = m, m = e
                    }
                    const x = p < 0 ? "" + (1 + (1 - g) * p) : "" + (1 - (1 - g) * p),
                        S = `\n        translate3d(${m}, ${h}, ${f}px)\n        rotateZ(${i.rotate?a?-v:v:0}deg)\n        scale(${x})\n      `;
                    if (i.slideShadows) {
                        let e = d.querySelector(".swiper-slide-shadow");
                        e || (e = me("cards", d)), e && (e.style.opacity = Math.min(Math.max((Math.abs(p) - .5) / .5, 0), 1))
                    }
                    d.style.zIndex = -Math.abs(Math.round(c)) + e.length;
                    pe(0, d).style.transform = S
                }
            },
            setTransition: e => {
                const s = t.slides.map((e => h(e)));
                s.forEach((t => {
                    t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach((t => {
                        t.style.transitionDuration = `${e}ms`
                    }))
                })), ue({
                    swiper: t,
                    duration: e,
                    transformElements: s
                })
            },
            perspective: () => !0,
            overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }];
    return se.use(he), se
}();