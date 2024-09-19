"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [723], {
        1067: function(e, t, i) {
            function s(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
            }

            function r(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach(i => {
                    void 0 === e[i] ? e[i] = t[i] : s(t[i]) && s(e[i]) && Object.keys(t[i]).length > 0 && r(e[i], t[i])
                })
            }
            i.d(t, {
                a: function() {
                    return o
                },
                g: function() {
                    return n
                }
            });
            let l = {
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

            function n() {
                let e = "undefined" != typeof document ? document : {};
                return r(e, l), e
            }
            let a = {
                document: l,
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

            function o() {
                let e = "undefined" != typeof window ? window : {};
                return r(e, a), e
            }
        },
        88: function(e, t, i) {
            i.d(t, {
                a: function() {
                    return w
                },
                c: function() {
                    return h
                },
                d: function() {
                    return n
                },
                e: function() {
                    return u
                },
                f: function() {
                    return S
                },
                h: function() {
                    return g
                },
                j: function() {
                    return a
                },
                m: function() {
                    return b
                },
                n: function() {
                    return l
                },
                o: function() {
                    return v
                },
                p: function() {
                    return m
                },
                q: function() {
                    return f
                },
                r: function() {
                    return c
                },
                s: function() {
                    return d
                },
                t: function() {
                    return p
                },
                u: function() {
                    return function e() {
                        let t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                            i = ["__proto__", "constructor", "prototype"];
                        for (let s = 1; s < arguments.length; s += 1) {
                            let r = s < 0 || arguments.length <= s ? void 0 : arguments[s];
                            if (null != r && ("undefined" != typeof window && void 0 !== window.HTMLElement ? !(r instanceof HTMLElement) : !r || 1 !== r.nodeType && 11 !== r.nodeType)) {
                                let s = Object.keys(Object(r)).filter(e => 0 > i.indexOf(e));
                                for (let i = 0, l = s.length; i < l; i += 1) {
                                    let l = s[i],
                                        n = Object.getOwnPropertyDescriptor(r, l);
                                    void 0 !== n && n.enumerable && (o(t[l]) && o(r[l]) ? r[l].__swiper__ ? t[l] = r[l] : e(t[l], r[l]) : !o(t[l]) && o(r[l]) ? (t[l] = {}, r[l].__swiper__ ? t[l] = r[l] : e(t[l], r[l])) : t[l] = r[l])
                                }
                            }
                        }
                        return t
                    }
                },
                v: function() {
                    return r
                }
            });
            var s = i(1067);

            function r(e) {
                Object.keys(e).forEach(t => {
                    try {
                        e[t] = null
                    } catch (e) {}
                    try {
                        delete e[t]
                    } catch (e) {}
                })
            }

            function l(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            }

            function n() {
                return Date.now()
            }

            function a(e, t) {
                let i, r, l;
                void 0 === t && (t = "x");
                let n = (0, s.a)(),
                    a = function(e) {
                        let t;
                        let i = (0, s.a)();
                        return i.getComputedStyle && (t = i.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t
                    }(e);
                return n.WebKitCSSMatrix ? ((r = a.transform || a.webkitTransform).split(",").length > 6 && (r = r.split(", ").map(e => e.replace(",", ".")).join(", ")), l = new n.WebKitCSSMatrix("none" === r ? "" : r)) : i = (l = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (r = n.WebKitCSSMatrix ? l.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (r = n.WebKitCSSMatrix ? l.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), r || 0
            }

            function o(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function d(e, t, i) {
                e.style.setProperty(t, i)
            }

            function c(e) {
                let t, {
                        swiper: i,
                        targetPosition: r,
                        side: l
                    } = e,
                    n = (0, s.a)(),
                    a = -i.translate,
                    o = null,
                    d = i.params.speed;
                i.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(i.cssModeFrameID);
                let c = r > a ? "next" : "prev",
                    u = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
                    p = () => {
                        t = new Date().getTime(), null === o && (o = t);
                        let e = a + (.5 - Math.cos(Math.max(Math.min((t - o) / d, 1), 0) * Math.PI) / 2) * (r - a);
                        if (u(e, r) && (e = r), i.wrapperEl.scrollTo({
                                [l]: e
                            }), u(e, r)) {
                            i.wrapperEl.style.overflow = "hidden", i.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                                i.wrapperEl.style.overflow = "", i.wrapperEl.scrollTo({
                                    [l]: e
                                })
                            }), n.cancelAnimationFrame(i.cssModeFrameID);
                            return
                        }
                        i.cssModeFrameID = n.requestAnimationFrame(p)
                    };
                p()
            }

            function u(e, t) {
                return void 0 === t && (t = ""), [...e.children].filter(e => e.matches(t))
            }

            function p(e) {
                try {
                    console.warn(e);
                    return
                } catch (e) {}
            }

            function h(e, t) {
                var i;
                void 0 === t && (t = []);
                let s = document.createElement(e);
                return s.classList.add(...Array.isArray(t) ? t : (void 0 === (i = t) && (i = ""), i.trim().split(" ").filter(e => !!e.trim()))), s
            }

            function f(e, t) {
                let i = [];
                for (; e.previousElementSibling;) {
                    let s = e.previousElementSibling;
                    t ? s.matches(t) && i.push(s) : i.push(s), e = s
                }
                return i
            }

            function m(e, t) {
                let i = [];
                for (; e.nextElementSibling;) {
                    let s = e.nextElementSibling;
                    t ? s.matches(t) && i.push(s) : i.push(s), e = s
                }
                return i
            }

            function v(e, t) {
                return (0, s.a)().getComputedStyle(e, null).getPropertyValue(t)
            }

            function g(e) {
                let t, i = e;
                if (i) {
                    for (t = 0; null !== (i = i.previousSibling);) 1 === i.nodeType && (t += 1);
                    return t
                }
            }

            function w(e, t) {
                let i = [],
                    s = e.parentElement;
                for (; s;) t ? s.matches(t) && i.push(s) : i.push(s), s = s.parentElement;
                return i
            }

            function S(e, t, i) {
                let r = (0, s.a)();
                return i ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
            }

            function b(e) {
                return (Array.isArray(e) ? e : [e]).filter(e => !!e)
            }
        },
        3723: function(e, t, i) {
            let s, r, l;
            i.d(t, {
                tq: function() {
                    return W
                },
                o5: function() {
                    return q
                }
            });
            var n = i(4617),
                a = i(1067),
                o = i(88);

            function d() {
                return s || (s = function() {
                    let e = (0, a.a)(),
                        t = (0, a.g)();
                    return {
                        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                    }
                }()), s
            }

            function c(e) {
                return void 0 === e && (e = {}), r || (r = function(e) {
                    let {
                        userAgent: t
                    } = void 0 === e ? {} : e, i = d(), s = (0, a.a)(), r = s.navigator.platform, l = t || s.navigator.userAgent, n = {
                        ios: !1,
                        android: !1
                    }, o = s.screen.width, c = s.screen.height, u = l.match(/(Android);?[\s\/]+([\d.]+)?/), p = l.match(/(iPad).*OS\s([\d_]+)/), h = l.match(/(iPod)(.*OS\s([\d_]+))?/), f = !p && l.match(/(iPhone\sOS|iOS)\s([\d_]+)/), m = "MacIntel" === r;
                    return !p && m && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${c}`) >= 0 && ((p = l.match(/(Version)\/([\d.]+)/)) || (p = [0, 1, "13_0_0"]), m = !1), u && "Win32" !== r && (n.os = "android", n.android = !0), (p || f || h) && (n.os = "ios", n.ios = !0), n
                }(e)), r
            }
            let u = (e, t, i) => {
                    t && !e.classList.contains(i) ? e.classList.add(i) : !t && e.classList.contains(i) && e.classList.remove(i)
                },
                p = (e, t, i) => {
                    t && !e.classList.contains(i) ? e.classList.add(i) : !t && e.classList.contains(i) && e.classList.remove(i)
                },
                h = (e, t) => {
                    if (!e || e.destroyed || !e.params) return;
                    let i = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
                    if (i) {
                        let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
                        !t && e.isElement && (i.shadowRoot ? t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
                            i.shadowRoot && (t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)) && t.remove()
                        })), t && t.remove()
                    }
                },
                f = (e, t) => {
                    if (!e.slides[t]) return;
                    let i = e.slides[t].querySelector('[loading="lazy"]');
                    i && i.removeAttribute("loading")
                },
                m = e => {
                    if (!e || e.destroyed || !e.params) return;
                    let t = e.params.lazyPreloadPrevNext,
                        i = e.slides.length;
                    if (!i || !t || t < 0) return;
                    t = Math.min(t, i);
                    let s = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                        r = e.activeIndex;
                    if (e.params.grid && e.params.grid.rows > 1) {
                        let i = [r - t];
                        i.push(...Array.from({
                            length: t
                        }).map((e, t) => r + s + t)), e.slides.forEach((t, s) => {
                            i.includes(t.column) && f(e, s)
                        });
                        return
                    }
                    let l = r + s - 1;
                    if (e.params.rewind || e.params.loop)
                        for (let s = r - t; s <= l + t; s += 1) {
                            let t = (s % i + i) % i;
                            (t < r || t > l) && f(e, t)
                        } else
                            for (let s = Math.max(r - t, 0); s <= Math.min(l + t, i - 1); s += 1) s !== r && (s > l || s < r) && f(e, s)
                };

            function v(e) {
                let {
                    swiper: t,
                    runCallbacks: i,
                    direction: s,
                    step: r
                } = e, {
                    activeIndex: l,
                    previousIndex: n
                } = t, a = s;
                if (a || (a = l > n ? "next" : l < n ? "prev" : "reset"), t.emit(`transition${r}`), i && l !== n) {
                    if ("reset" === a) {
                        t.emit(`slideResetTransition${r}`);
                        return
                    }
                    t.emit(`slideChangeTransition${r}`), "next" === a ? t.emit(`slideNextTransition${r}`) : t.emit(`slidePrevTransition${r}`)
                }
            }

            function g(e, t, i) {
                let s = (0, a.a)(),
                    {
                        params: r
                    } = e,
                    l = r.edgeSwipeDetection,
                    n = r.edgeSwipeThreshold;
                return !l || !(i <= n) && !(i >= s.innerWidth - n) || "prevent" === l && (t.preventDefault(), !0)
            }

            function w(e) {
                let t = (0, a.g)(),
                    i = e;
                i.originalEvent && (i = i.originalEvent);
                let s = this.touchEventsData;
                if ("pointerdown" === i.type) {
                    if (null !== s.pointerId && s.pointerId !== i.pointerId) return;
                    s.pointerId = i.pointerId
                } else "touchstart" === i.type && 1 === i.targetTouches.length && (s.touchId = i.targetTouches[0].identifier);
                if ("touchstart" === i.type) {
                    g(this, i, i.targetTouches[0].pageX);
                    return
                }
                let {
                    params: r,
                    touches: l,
                    enabled: n
                } = this;
                if (!n || !r.simulateTouch && "mouse" === i.pointerType || this.animating && r.preventInteractionOnTransition) return;
                !this.animating && r.cssMode && r.loop && this.loopFix();
                let d = i.target;
                if ("wrapper" === r.touchEventsTarget && !this.wrapperEl.contains(d) || "which" in i && 3 === i.which || "button" in i && i.button > 0 || s.isTouched && s.isMoved) return;
                let c = !!r.noSwipingClass && "" !== r.noSwipingClass,
                    u = i.composedPath ? i.composedPath() : i.path;
                c && i.target && i.target.shadowRoot && u && (d = u[0]);
                let p = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
                    h = !!(i.target && i.target.shadowRoot);
                if (r.noSwiping && (h ? function(e, t) {
                        return void 0 === t && (t = this),
                            function t(i) {
                                if (!i || i === (0, a.g)() || i === (0, a.a)()) return null;
                                i.assignedSlot && (i = i.assignedSlot);
                                let s = i.closest(e);
                                return s || i.getRootNode ? s || t(i.getRootNode().host) : null
                            }(t)
                    }(p, d) : d.closest(p))) {
                    this.allowClick = !0;
                    return
                }
                if (r.swipeHandler && !d.closest(r.swipeHandler)) return;
                l.currentX = i.pageX, l.currentY = i.pageY;
                let f = l.currentX,
                    m = l.currentY;
                if (!g(this, i, f)) return;
                Object.assign(s, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }), l.startX = f, l.startY = m, s.touchStartTime = (0, o.d)(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (s.allowThresholdMove = !1);
                let v = !0;
                d.matches(s.focusableElements) && (v = !1, "SELECT" === d.nodeName && (s.isTouched = !1)), t.activeElement && t.activeElement.matches(s.focusableElements) && t.activeElement !== d && t.activeElement.blur();
                let w = v && this.allowTouchMove && r.touchStartPreventDefault;
                (r.touchStartForcePreventDefault || w) && !d.isContentEditable && i.preventDefault(), r.freeMode && r.freeMode.enabled && this.freeMode && this.animating && !r.cssMode && this.freeMode.onTouchStart(), this.emit("touchStart", i)
            }

            function S(e) {
                let t, i;
                let s = (0, a.g)(),
                    r = this.touchEventsData,
                    {
                        params: l,
                        touches: n,
                        rtlTranslate: d,
                        enabled: c
                    } = this;
                if (!c || !l.simulateTouch && "mouse" === e.pointerType) return;
                let u = e;
                if (u.originalEvent && (u = u.originalEvent), "pointermove" === u.type && (null !== r.touchId || u.pointerId !== r.pointerId)) return;
                if ("touchmove" === u.type) {
                    if (!(t = [...u.changedTouches].filter(e => e.identifier === r.touchId)[0]) || t.identifier !== r.touchId) return
                } else t = u;
                if (!r.isTouched) {
                    r.startMoving && r.isScrolling && this.emit("touchMoveOpposite", u);
                    return
                }
                let p = t.pageX,
                    h = t.pageY;
                if (u.preventedByNestedSwiper) {
                    n.startX = p, n.startY = h;
                    return
                }
                if (!this.allowTouchMove) {
                    u.target.matches(r.focusableElements) || (this.allowClick = !1), r.isTouched && (Object.assign(n, {
                        startX: p,
                        startY: h,
                        currentX: p,
                        currentY: h
                    }), r.touchStartTime = (0, o.d)());
                    return
                }
                if (l.touchReleaseOnEdges && !l.loop) {
                    if (this.isVertical()) {
                        if (h < n.startY && this.translate <= this.maxTranslate() || h > n.startY && this.translate >= this.minTranslate()) {
                            r.isTouched = !1, r.isMoved = !1;
                            return
                        }
                    } else if (p < n.startX && this.translate <= this.maxTranslate() || p > n.startX && this.translate >= this.minTranslate()) return
                }
                if (s.activeElement && u.target === s.activeElement && u.target.matches(r.focusableElements)) {
                    r.isMoved = !0, this.allowClick = !1;
                    return
                }
                r.allowTouchCallbacks && this.emit("touchMove", u), n.previousX = n.currentX, n.previousY = n.currentY, n.currentX = p, n.currentY = h;
                let f = n.currentX - n.startX,
                    m = n.currentY - n.startY;
                if (this.params.threshold && Math.sqrt(f ** 2 + m ** 2) < this.params.threshold) return;
                if (void 0 === r.isScrolling) {
                    let e;
                    this.isHorizontal() && n.currentY === n.startY || this.isVertical() && n.currentX === n.startX ? r.isScrolling = !1 : f * f + m * m >= 25 && (e = 180 * Math.atan2(Math.abs(m), Math.abs(f)) / Math.PI, r.isScrolling = this.isHorizontal() ? e > l.touchAngle : 90 - e > l.touchAngle)
                }
                if (r.isScrolling && this.emit("touchMoveOpposite", u), void 0 === r.startMoving && (n.currentX !== n.startX || n.currentY !== n.startY) && (r.startMoving = !0), r.isScrolling || "touchmove" === u.type && r.preventTouchMoveFromPointerMove) {
                    r.isTouched = !1;
                    return
                }
                if (!r.startMoving) return;
                this.allowClick = !1, !l.cssMode && u.cancelable && u.preventDefault(), l.touchMoveStopPropagation && !l.nested && u.stopPropagation();
                let v = this.isHorizontal() ? f : m,
                    g = this.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
                l.oneWayMovement && (v = Math.abs(v) * (d ? 1 : -1), g = Math.abs(g) * (d ? 1 : -1)), n.diff = v, v *= l.touchRatio, d && (v = -v, g = -g);
                let w = this.touchesDirection;
                this.swipeDirection = v > 0 ? "prev" : "next", this.touchesDirection = g > 0 ? "prev" : "next";
                let S = this.params.loop && !l.cssMode,
                    b = "next" === this.touchesDirection && this.allowSlideNext || "prev" === this.touchesDirection && this.allowSlidePrev;
                if (!r.isMoved) {
                    if (S && b && this.loopFix({
                            direction: this.swipeDirection
                        }), r.startTranslate = this.getTranslate(), this.setTransition(0), this.animating) {
                        let e = new window.CustomEvent("transitionend", {
                            bubbles: !0,
                            cancelable: !0,
                            detail: {
                                bySwiperTouchMove: !0
                            }
                        });
                        this.wrapperEl.dispatchEvent(e)
                    }
                    r.allowMomentumBounce = !1, l.grabCursor && (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) && this.setGrabCursor(!0), this.emit("sliderFirstMove", u)
                }
                if (new Date().getTime(), r.isMoved && r.allowThresholdMove && w !== this.touchesDirection && S && b && Math.abs(v) >= 1) {
                    Object.assign(n, {
                        startX: p,
                        startY: h,
                        currentX: p,
                        currentY: h,
                        startTranslate: r.currentTranslate
                    }), r.loopSwapReset = !0, r.startTranslate = r.currentTranslate;
                    return
                }
                this.emit("sliderMove", u), r.isMoved = !0, r.currentTranslate = v + r.startTranslate;
                let T = !0,
                    y = l.resistanceRatio;
                if (l.touchReleaseOnEdges && (y = 0), v > 0 ? (S && b && !i && r.allowThresholdMove && r.currentTranslate > (l.centeredSlides ? this.minTranslate() - this.slidesSizesGrid[this.activeIndex + 1] : this.minTranslate()) && this.loopFix({
                        direction: "prev",
                        setTranslate: !0,
                        activeSlideIndex: 0
                    }), r.currentTranslate > this.minTranslate() && (T = !1, l.resistance && (r.currentTranslate = this.minTranslate() - 1 + (-this.minTranslate() + r.startTranslate + v) ** y))) : v < 0 && (S && b && !i && r.allowThresholdMove && r.currentTranslate < (l.centeredSlides ? this.maxTranslate() + this.slidesSizesGrid[this.slidesSizesGrid.length - 1] : this.maxTranslate()) && this.loopFix({
                        direction: "next",
                        setTranslate: !0,
                        activeSlideIndex: this.slides.length - ("auto" === l.slidesPerView ? this.slidesPerViewDynamic() : Math.ceil(parseFloat(l.slidesPerView, 10)))
                    }), r.currentTranslate < this.maxTranslate() && (T = !1, l.resistance && (r.currentTranslate = this.maxTranslate() + 1 - (this.maxTranslate() - r.startTranslate - v) ** y))), T && (u.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), this.allowSlidePrev || this.allowSlideNext || (r.currentTranslate = r.startTranslate), l.threshold > 0) {
                    if (Math.abs(v) > l.threshold || r.allowThresholdMove) {
                        if (!r.allowThresholdMove) {
                            r.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, r.currentTranslate = r.startTranslate, n.diff = this.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY;
                            return
                        }
                    } else {
                        r.currentTranslate = r.startTranslate;
                        return
                    }
                }
                l.followFinger && !l.cssMode && ((l.freeMode && l.freeMode.enabled && this.freeMode || l.watchSlidesProgress) && (this.updateActiveIndex(), this.updateSlidesClasses()), l.freeMode && l.freeMode.enabled && this.freeMode && this.freeMode.onTouchMove(), this.updateProgress(r.currentTranslate), this.setTranslate(r.currentTranslate))
            }

            function b(e) {
                let t, i;
                let s = this,
                    r = s.touchEventsData,
                    l = e;
                if (l.originalEvent && (l = l.originalEvent), "touchend" === l.type || "touchcancel" === l.type) {
                    if (!(t = [...l.changedTouches].filter(e => e.identifier === r.touchId)[0]) || t.identifier !== r.touchId) return
                } else {
                    if (null !== r.touchId || l.pointerId !== r.pointerId) return;
                    t = l
                }
                if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(l.type) && !(["pointercancel", "contextmenu"].includes(l.type) && (s.browser.isSafari || s.browser.isWebView))) return;
                r.pointerId = null, r.touchId = null;
                let {
                    params: n,
                    touches: a,
                    rtlTranslate: d,
                    slidesGrid: c,
                    enabled: u
                } = s;
                if (!u || !n.simulateTouch && "mouse" === l.pointerType) return;
                if (r.allowTouchCallbacks && s.emit("touchEnd", l), r.allowTouchCallbacks = !1, !r.isTouched) {
                    r.isMoved && n.grabCursor && s.setGrabCursor(!1), r.isMoved = !1, r.startMoving = !1;
                    return
                }
                n.grabCursor && r.isMoved && r.isTouched && (!0 === s.allowSlideNext || !0 === s.allowSlidePrev) && s.setGrabCursor(!1);
                let p = (0, o.d)(),
                    h = p - r.touchStartTime;
                if (s.allowClick) {
                    let e = l.path || l.composedPath && l.composedPath();
                    s.updateClickedSlide(e && e[0] || l.target, e), s.emit("tap click", l), h < 300 && p - r.lastClickTime < 300 && s.emit("doubleTap doubleClick", l)
                }
                if (r.lastClickTime = (0, o.d)(), (0, o.n)(() => {
                        s.destroyed || (s.allowClick = !0)
                    }), !r.isTouched || !r.isMoved || !s.swipeDirection || 0 === a.diff && !r.loopSwapReset || r.currentTranslate === r.startTranslate && !r.loopSwapReset) {
                    r.isTouched = !1, r.isMoved = !1, r.startMoving = !1;
                    return
                }
                if (r.isTouched = !1, r.isMoved = !1, r.startMoving = !1, i = n.followFinger ? d ? s.translate : -s.translate : -r.currentTranslate, n.cssMode) return;
                if (n.freeMode && n.freeMode.enabled) {
                    s.freeMode.onTouchEnd({
                        currentPos: i
                    });
                    return
                }
                let f = i >= -s.maxTranslate() && !s.params.loop,
                    m = 0,
                    v = s.slidesSizesGrid[0];
                for (let e = 0; e < c.length; e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
                    let t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                    void 0 !== c[e + t] ? (f || i >= c[e] && i < c[e + t]) && (m = e, v = c[e + t] - c[e]) : (f || i >= c[e]) && (m = e, v = c[c.length - 1] - c[c.length - 2])
                }
                let g = null,
                    w = null;
                n.rewind && (s.isBeginning ? w = n.virtual && n.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1 : s.isEnd && (g = 0));
                let S = (i - c[m]) / v,
                    b = m < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                if (h > n.longSwipesMs) {
                    if (!n.longSwipes) {
                        s.slideTo(s.activeIndex);
                        return
                    }
                    "next" === s.swipeDirection && (S >= n.longSwipesRatio ? s.slideTo(n.rewind && s.isEnd ? g : m + b) : s.slideTo(m)), "prev" === s.swipeDirection && (S > 1 - n.longSwipesRatio ? s.slideTo(m + b) : null !== w && S < 0 && Math.abs(S) > n.longSwipesRatio ? s.slideTo(w) : s.slideTo(m))
                } else {
                    if (!n.shortSwipes) {
                        s.slideTo(s.activeIndex);
                        return
                    }
                    s.navigation && (l.target === s.navigation.nextEl || l.target === s.navigation.prevEl) ? l.target === s.navigation.nextEl ? s.slideTo(m + b) : s.slideTo(m) : ("next" === s.swipeDirection && s.slideTo(null !== g ? g : m + b), "prev" === s.swipeDirection && s.slideTo(null !== w ? w : m))
                }
            }

            function T() {
                let e = this,
                    {
                        params: t,
                        el: i
                    } = e;
                if (i && 0 === i.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                let {
                    allowSlideNext: s,
                    allowSlidePrev: r,
                    snapGrid: l
                } = e, n = e.virtual && e.params.virtual.enabled;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
                let a = n && t.loop;
                "auto" !== t.slidesPerView && !(t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || a ? e.params.loop && !n ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
                    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
                }, 500)), e.allowSlidePrev = r, e.allowSlideNext = s, e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow()
            }

            function y(e) {
                this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }

            function E() {
                let {
                    wrapperEl: e,
                    rtlTranslate: t,
                    enabled: i
                } = this;
                if (!i) return;
                this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = -e.scrollLeft : this.translate = -e.scrollTop, 0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
                let s = this.maxTranslate() - this.minTranslate();
                (0 === s ? 0 : (this.translate - this.minTranslate()) / s) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1)
            }

            function x(e) {
                h(this, e.target), !this.params.cssMode && ("auto" === this.params.slidesPerView || this.params.autoHeight) && this.update()
            }

            function M() {
                !this.documentTouchHandlerProceeded && (this.documentTouchHandlerProceeded = !0, this.params.touchReleaseOnEdges && (this.el.style.touchAction = "auto"))
            }
            let C = (e, t) => {
                    let i = (0, a.g)(),
                        {
                            params: s,
                            el: r,
                            wrapperEl: l,
                            device: n
                        } = e,
                        o = !!s.nested,
                        d = "on" === t ? "addEventListener" : "removeEventListener";
                    i[d]("touchstart", e.onDocumentTouchStart, {
                        passive: !1,
                        capture: o
                    }), r[d]("touchstart", e.onTouchStart, {
                        passive: !1
                    }), r[d]("pointerdown", e.onTouchStart, {
                        passive: !1
                    }), i[d]("touchmove", e.onTouchMove, {
                        passive: !1,
                        capture: o
                    }), i[d]("pointermove", e.onTouchMove, {
                        passive: !1,
                        capture: o
                    }), i[d]("touchend", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("pointerup", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("pointercancel", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("touchcancel", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("pointerout", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("pointerleave", e.onTouchEnd, {
                        passive: !0
                    }), i[d]("contextmenu", e.onTouchEnd, {
                        passive: !0
                    }), (s.preventClicks || s.preventClicksPropagation) && r[d]("click", e.onClick, !0), s.cssMode && l[d]("scroll", e.onScroll), s.updateOnWindowResize ? e[t](n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", T, !0) : e[t]("observerUpdate", T, !0), r[d]("load", e.onLoad, {
                        capture: !0
                    })
                },
                P = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var O = {
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
            let k = {
                    eventsEmitter: {
                        on(e, t, i) {
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;
                            let r = i ? "unshift" : "push";
                            return e.split(" ").forEach(e => {
                                s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][r](t)
                            }), s
                        },
                        once(e, t, i) {
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;

                            function r() {
                                s.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
                                for (var i = arguments.length, l = Array(i), n = 0; n < i; n++) l[n] = arguments[n];
                                t.apply(s, l)
                            }
                            return r.__emitterProxy = t, s.on(e, r, i)
                        },
                        onAny(e, t) {
                            return !this.eventsListeners || this.destroyed || "function" != typeof e || 0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e), this
                        },
                        offAny(e) {
                            if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners) return this;
                            let t = this.eventsAnyListeners.indexOf(e);
                            return t >= 0 && this.eventsAnyListeners.splice(t, 1), this
                        },
                        off(e, t) {
                            let i = this;
                            return i.eventsListeners && !i.destroyed && i.eventsListeners && e.split(" ").forEach(e => {
                                void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((s, r) => {
                                    (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(r, 1)
                                })
                            }), i
                        },
                        emit() {
                            let e, t, i;
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || !s.eventsListeners) return s;
                            for (var r = arguments.length, l = Array(r), n = 0; n < r; n++) l[n] = arguments[n];
                            return "string" == typeof l[0] || Array.isArray(l[0]) ? (e = l[0], t = l.slice(1, l.length), i = s) : (e = l[0].events, t = l[0].data, i = l[0].context || s), t.unshift(i), (Array.isArray(e) ? e : e.split(" ")).forEach(e => {
                                s.eventsAnyListeners && s.eventsAnyListeners.length && s.eventsAnyListeners.forEach(s => {
                                    s.apply(i, [e, ...t])
                                }), s.eventsListeners && s.eventsListeners[e] && s.eventsListeners[e].forEach(e => {
                                    e.apply(i, t)
                                })
                            }), s
                        }
                    },
                    update: {
                        updateSize: function() {
                            let e, t;
                            let i = this.el;
                            e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i.clientWidth, t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i.clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt((0, o.o)(i, "padding-left") || 0, 10) - parseInt((0, o.o)(i, "padding-right") || 0, 10), t = t - parseInt((0, o.o)(i, "padding-top") || 0, 10) - parseInt((0, o.o)(i, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(this, {
                                width: e,
                                height: t,
                                size: this.isHorizontal() ? e : t
                            }))
                        },
                        updateSlides: function() {
                            let e;
                            let t = this;

                            function i(e, i) {
                                return parseFloat(e.getPropertyValue(t.getDirectionLabel(i)) || 0)
                            }
                            let s = t.params,
                                {
                                    wrapperEl: r,
                                    slidesEl: l,
                                    size: n,
                                    rtlTranslate: a,
                                    wrongRTL: d
                                } = t,
                                c = t.virtual && s.virtual.enabled,
                                u = c ? t.virtual.slides.length : t.slides.length,
                                p = (0, o.e)(l, `.${t.params.slideClass}, swiper-slide`),
                                h = c ? t.virtual.slides.length : p.length,
                                f = [],
                                m = [],
                                v = [],
                                g = s.slidesOffsetBefore;
                            "function" == typeof g && (g = s.slidesOffsetBefore.call(t));
                            let w = s.slidesOffsetAfter;
                            "function" == typeof w && (w = s.slidesOffsetAfter.call(t));
                            let S = t.snapGrid.length,
                                b = t.slidesGrid.length,
                                T = s.spaceBetween,
                                y = -g,
                                E = 0,
                                x = 0;
                            if (void 0 === n) return;
                            "string" == typeof T && T.indexOf("%") >= 0 ? T = parseFloat(T.replace("%", "")) / 100 * n : "string" == typeof T && (T = parseFloat(T)), t.virtualSize = -T, p.forEach(e => {
                                a ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                            }), s.centeredSlides && s.cssMode && ((0, o.s)(r, "--swiper-centered-offset-before", ""), (0, o.s)(r, "--swiper-centered-offset-after", ""));
                            let M = s.grid && s.grid.rows > 1 && t.grid;
                            M ? t.grid.initSlides(p) : t.grid && t.grid.unsetSlides();
                            let C = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter(e => void 0 !== s.breakpoints[e].slidesPerView).length > 0;
                            for (let r = 0; r < h; r += 1) {
                                let l;
                                if (e = 0, p[r] && (l = p[r]), M && t.grid.updateSlide(r, l, p), !p[r] || "none" !== (0, o.o)(l, "display")) {
                                    if ("auto" === s.slidesPerView) {
                                        C && (p[r].style[t.getDirectionLabel("width")] = "");
                                        let n = getComputedStyle(l),
                                            a = l.style.transform,
                                            d = l.style.webkitTransform;
                                        if (a && (l.style.transform = "none"), d && (l.style.webkitTransform = "none"), s.roundLengths) e = t.isHorizontal() ? (0, o.f)(l, "width", !0) : (0, o.f)(l, "height", !0);
                                        else {
                                            let t = i(n, "width"),
                                                s = i(n, "padding-left"),
                                                r = i(n, "padding-right"),
                                                a = i(n, "margin-left"),
                                                o = i(n, "margin-right"),
                                                d = n.getPropertyValue("box-sizing");
                                            if (d && "border-box" === d) e = t + a + o;
                                            else {
                                                let {
                                                    clientWidth: i,
                                                    offsetWidth: n
                                                } = l;
                                                e = t + s + r + a + o + (n - i)
                                            }
                                        }
                                        a && (l.style.transform = a), d && (l.style.webkitTransform = d), s.roundLengths && (e = Math.floor(e))
                                    } else e = (n - (s.slidesPerView - 1) * T) / s.slidesPerView, s.roundLengths && (e = Math.floor(e)), p[r] && (p[r].style[t.getDirectionLabel("width")] = `${e}px`);
                                    p[r] && (p[r].swiperSlideSize = e), v.push(e), s.centeredSlides ? (y = y + e / 2 + E / 2 + T, 0 === E && 0 !== r && (y = y - n / 2 - T), 0 === r && (y = y - n / 2 - T), .001 > Math.abs(y) && (y = 0), s.roundLengths && (y = Math.floor(y)), x % s.slidesPerGroup == 0 && f.push(y), m.push(y)) : (s.roundLengths && (y = Math.floor(y)), (x - Math.min(t.params.slidesPerGroupSkip, x)) % t.params.slidesPerGroup == 0 && f.push(y), m.push(y), y = y + e + T), t.virtualSize += e + T, E = e, x += 1
                                }
                            }
                            if (t.virtualSize = Math.max(t.virtualSize, n) + w, a && d && ("slide" === s.effect || "coverflow" === s.effect) && (r.style.width = `${t.virtualSize+T}px`), s.setWrapperSize && (r.style[t.getDirectionLabel("width")] = `${t.virtualSize+T}px`), M && t.grid.updateWrapperSize(e, f), !s.centeredSlides) {
                                let e = [];
                                for (let i = 0; i < f.length; i += 1) {
                                    let r = f[i];
                                    s.roundLengths && (r = Math.floor(r)), f[i] <= t.virtualSize - n && e.push(r)
                                }
                                f = e, Math.floor(t.virtualSize - n) - Math.floor(f[f.length - 1]) > 1 && f.push(t.virtualSize - n)
                            }
                            if (c && s.loop) {
                                let e = v[0] + T;
                                if (s.slidesPerGroup > 1) {
                                    let i = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / s.slidesPerGroup),
                                        r = e * s.slidesPerGroup;
                                    for (let e = 0; e < i; e += 1) f.push(f[f.length - 1] + r)
                                }
                                for (let i = 0; i < t.virtual.slidesBefore + t.virtual.slidesAfter; i += 1) 1 === s.slidesPerGroup && f.push(f[f.length - 1] + e), m.push(m[m.length - 1] + e), t.virtualSize += e
                            }
                            if (0 === f.length && (f = [0]), 0 !== T) {
                                let e = t.isHorizontal() && a ? "marginLeft" : t.getDirectionLabel("marginRight");
                                p.filter((e, t) => !s.cssMode || !!s.loop || t !== p.length - 1).forEach(t => {
                                    t.style[e] = `${T}px`
                                })
                            }
                            if (s.centeredSlides && s.centeredSlidesBounds) {
                                let e = 0;
                                v.forEach(t => {
                                    e += t + (T || 0)
                                });
                                let t = (e -= T) - n;
                                f = f.map(e => e <= 0 ? -g : e > t ? t + w : e)
                            }
                            if (s.centerInsufficientSlides) {
                                let e = 0;
                                v.forEach(t => {
                                    e += t + (T || 0)
                                }), e -= T;
                                let t = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
                                if (e + t < n) {
                                    let i = (n - e - t) / 2;
                                    f.forEach((e, t) => {
                                        f[t] = e - i
                                    }), m.forEach((e, t) => {
                                        m[t] = e + i
                                    })
                                }
                            }
                            if (Object.assign(t, {
                                    slides: p,
                                    snapGrid: f,
                                    slidesGrid: m,
                                    slidesSizesGrid: v
                                }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                                (0, o.s)(r, "--swiper-centered-offset-before", `${-f[0]}px`), (0, o.s)(r, "--swiper-centered-offset-after", `${t.size/2-v[v.length-1]/2}px`);
                                let e = -t.snapGrid[0],
                                    i = -t.slidesGrid[0];
                                t.snapGrid = t.snapGrid.map(t => t + e), t.slidesGrid = t.slidesGrid.map(e => e + i)
                            }
                            if (h !== u && t.emit("slidesLengthChange"), f.length !== S && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), m.length !== b && t.emit("slidesGridLengthChange"), s.watchSlidesProgress && t.updateSlidesOffset(), t.emit("slidesUpdated"), !c && !s.cssMode && ("slide" === s.effect || "fade" === s.effect)) {
                                let e = `${s.containerModifierClass}backface-hidden`,
                                    i = t.el.classList.contains(e);
                                h <= s.maxBackfaceHiddenSlides ? i || t.el.classList.add(e) : i && t.el.classList.remove(e)
                            }
                        },
                        updateAutoHeight: function(e) {
                            let t;
                            let i = this,
                                s = [],
                                r = i.virtual && i.params.virtual.enabled,
                                l = 0;
                            "number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed);
                            let n = e => r ? i.slides[i.getSlideIndexByData(e)] : i.slides[e];
                            if ("auto" !== i.params.slidesPerView && i.params.slidesPerView > 1) {
                                if (i.params.centeredSlides)(i.visibleSlides || []).forEach(e => {
                                    s.push(e)
                                });
                                else
                                    for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                                        let e = i.activeIndex + t;
                                        if (e > i.slides.length && !r) break;
                                        s.push(n(e))
                                    }
                            } else s.push(n(i.activeIndex));
                            for (t = 0; t < s.length; t += 1)
                                if (void 0 !== s[t]) {
                                    let e = s[t].offsetHeight;
                                    l = e > l ? e : l
                                }(l || 0 === l) && (i.wrapperEl.style.height = `${l}px`)
                        },
                        updateSlidesOffset: function() {
                            let e = this.slides,
                                t = this.isElement ? this.isHorizontal() ? this.wrapperEl.offsetLeft : this.wrapperEl.offsetTop : 0;
                            for (let i = 0; i < e.length; i += 1) e[i].swiperSlideOffset = (this.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - this.cssOverflowAdjustment()
                        },
                        updateSlidesProgress: function(e) {
                            void 0 === e && (e = this && this.translate || 0);
                            let t = this.params,
                                {
                                    slides: i,
                                    rtlTranslate: s,
                                    snapGrid: r
                                } = this;
                            if (0 === i.length) return;
                            void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                            let l = -e;
                            s && (l = e), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                            let n = t.spaceBetween;
                            "string" == typeof n && n.indexOf("%") >= 0 ? n = parseFloat(n.replace("%", "")) / 100 * this.size : "string" == typeof n && (n = parseFloat(n));
                            for (let e = 0; e < i.length; e += 1) {
                                let a = i[e],
                                    o = a.swiperSlideOffset;
                                t.cssMode && t.centeredSlides && (o -= i[0].swiperSlideOffset);
                                let d = (l + (t.centeredSlides ? this.minTranslate() : 0) - o) / (a.swiperSlideSize + n),
                                    c = (l - r[0] + (t.centeredSlides ? this.minTranslate() : 0) - o) / (a.swiperSlideSize + n),
                                    p = -(l - o),
                                    h = p + this.slidesSizesGrid[e],
                                    f = p >= 0 && p <= this.size - this.slidesSizesGrid[e],
                                    m = p >= 0 && p < this.size - 1 || h > 1 && h <= this.size || p <= 0 && h >= this.size;
                                m && (this.visibleSlides.push(a), this.visibleSlidesIndexes.push(e)), u(a, m, t.slideVisibleClass), u(a, f, t.slideFullyVisibleClass), a.progress = s ? -d : d, a.originalProgress = s ? -c : c
                            }
                        },
                        updateProgress: function(e) {
                            if (void 0 === e) {
                                let t = this.rtlTranslate ? -1 : 1;
                                e = this && this.translate && this.translate * t || 0
                            }
                            let t = this.params,
                                i = this.maxTranslate() - this.minTranslate(),
                                {
                                    progress: s,
                                    isBeginning: r,
                                    isEnd: l,
                                    progressLoop: n
                                } = this,
                                a = r,
                                o = l;
                            if (0 === i) s = 0, r = !0, l = !0;
                            else {
                                s = (e - this.minTranslate()) / i;
                                let t = 1 > Math.abs(e - this.minTranslate()),
                                    n = 1 > Math.abs(e - this.maxTranslate());
                                r = t || s <= 0, l = n || s >= 1, t && (s = 0), n && (s = 1)
                            }
                            if (t.loop) {
                                let t = this.getSlideIndexByData(0),
                                    i = this.getSlideIndexByData(this.slides.length - 1),
                                    s = this.slidesGrid[t],
                                    r = this.slidesGrid[i],
                                    l = this.slidesGrid[this.slidesGrid.length - 1],
                                    a = Math.abs(e);
                                (n = a >= s ? (a - s) / l : (a + l - r) / l) > 1 && (n -= 1)
                            }
                            Object.assign(this, {
                                progress: s,
                                progressLoop: n,
                                isBeginning: r,
                                isEnd: l
                            }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && this.updateSlidesProgress(e), r && !a && this.emit("reachBeginning toEdge"), l && !o && this.emit("reachEnd toEdge"), (a && !r || o && !l) && this.emit("fromEdge"), this.emit("progress", s)
                        },
                        updateSlidesClasses: function() {
                            let e, t, i;
                            let {
                                slides: s,
                                params: r,
                                slidesEl: l,
                                activeIndex: n
                            } = this, a = this.virtual && r.virtual.enabled, d = this.grid && r.grid && r.grid.rows > 1, c = e => (0, o.e)(l, `.${r.slideClass}${e}, swiper-slide${e}`)[0];
                            if (a) {
                                if (r.loop) {
                                    let t = n - this.virtual.slidesBefore;
                                    t < 0 && (t = this.virtual.slides.length + t), t >= this.virtual.slides.length && (t -= this.virtual.slides.length), e = c(`[data-swiper-slide-index="${t}"]`)
                                } else e = c(`[data-swiper-slide-index="${n}"]`)
                            } else d ? (e = s.filter(e => e.column === n)[0], i = s.filter(e => e.column === n + 1)[0], t = s.filter(e => e.column === n - 1)[0]) : e = s[n];
                            e && !d && (i = (0, o.p)(e, `.${r.slideClass}, swiper-slide`)[0], r.loop && !i && (i = s[0]), t = (0, o.q)(e, `.${r.slideClass}, swiper-slide`)[0], r.loop), s.forEach(s => {
                                p(s, s === e, r.slideActiveClass), p(s, s === i, r.slideNextClass), p(s, s === t, r.slidePrevClass)
                            }), this.emitSlidesClasses()
                        },
                        updateActiveIndex: function(e) {
                            let t, i;
                            let s = this,
                                r = s.rtlTranslate ? s.translate : -s.translate,
                                {
                                    snapGrid: l,
                                    params: n,
                                    activeIndex: a,
                                    realIndex: o,
                                    snapIndex: d
                                } = s,
                                c = e,
                                u = e => {
                                    let t = e - s.virtual.slidesBefore;
                                    return t < 0 && (t = s.virtual.slides.length + t), t >= s.virtual.slides.length && (t -= s.virtual.slides.length), t
                                };
                            if (void 0 === c && (c = function(e) {
                                    let t;
                                    let {
                                        slidesGrid: i,
                                        params: s
                                    } = e, r = e.rtlTranslate ? e.translate : -e.translate;
                                    for (let e = 0; e < i.length; e += 1) void 0 !== i[e + 1] ? r >= i[e] && r < i[e + 1] - (i[e + 1] - i[e]) / 2 ? t = e : r >= i[e] && r < i[e + 1] && (t = e + 1) : r >= i[e] && (t = e);
                                    return s.normalizeSlideIndex && (t < 0 || void 0 === t) && (t = 0), t
                                }(s)), l.indexOf(r) >= 0) t = l.indexOf(r);
                            else {
                                let e = Math.min(n.slidesPerGroupSkip, c);
                                t = e + Math.floor((c - e) / n.slidesPerGroup)
                            }
                            if (t >= l.length && (t = l.length - 1), c === a && !s.params.loop) {
                                t !== d && (s.snapIndex = t, s.emit("snapIndexChange"));
                                return
                            }
                            if (c === a && s.params.loop && s.virtual && s.params.virtual.enabled) {
                                s.realIndex = u(c);
                                return
                            }
                            let p = s.grid && n.grid && n.grid.rows > 1;
                            if (s.virtual && n.virtual.enabled && n.loop) i = u(c);
                            else if (p) {
                                let e = s.slides.filter(e => e.column === c)[0],
                                    t = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                                Number.isNaN(t) && (t = Math.max(s.slides.indexOf(e), 0)), i = Math.floor(t / n.grid.rows)
                            } else if (s.slides[c]) {
                                let e = s.slides[c].getAttribute("data-swiper-slide-index");
                                i = e ? parseInt(e, 10) : c
                            } else i = c;
                            Object.assign(s, {
                                previousSnapIndex: d,
                                snapIndex: t,
                                previousRealIndex: o,
                                realIndex: i,
                                previousIndex: a,
                                activeIndex: c
                            }), s.initialized && m(s), s.emit("activeIndexChange"), s.emit("snapIndexChange"), (s.initialized || s.params.runCallbacksOnInit) && (o !== i && s.emit("realIndexChange"), s.emit("slideChange"))
                        },
                        updateClickedSlide: function(e, t) {
                            let i;
                            let s = this.params,
                                r = e.closest(`.${s.slideClass}, swiper-slide`);
                            !r && this.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(e => {
                                !r && e.matches && e.matches(`.${s.slideClass}, swiper-slide`) && (r = e)
                            });
                            let l = !1;
                            if (r) {
                                for (let e = 0; e < this.slides.length; e += 1)
                                    if (this.slides[e] === r) {
                                        l = !0, i = e;
                                        break
                                    }
                            }
                            if (r && l) this.clickedSlide = r, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : this.clickedIndex = i;
                            else {
                                this.clickedSlide = void 0, this.clickedIndex = void 0;
                                return
                            }
                            s.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
                        }
                    },
                    translate: {
                        getTranslate: function(e) {
                            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                            let {
                                params: t,
                                rtlTranslate: i,
                                translate: s,
                                wrapperEl: r
                            } = this;
                            if (t.virtualTranslate) return i ? -s : s;
                            if (t.cssMode) return s;
                            let l = (0, o.j)(r, e);
                            return l += this.cssOverflowAdjustment(), i && (l = -l), l || 0
                        },
                        setTranslate: function(e, t) {
                            let {
                                rtlTranslate: i,
                                params: s,
                                wrapperEl: r,
                                progress: l
                            } = this, n = 0, a = 0;
                            this.isHorizontal() ? n = i ? -e : e : a = e, s.roundLengths && (n = Math.floor(n), a = Math.floor(a)), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? n : a, s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -n : -a : s.virtualTranslate || (this.isHorizontal() ? n -= this.cssOverflowAdjustment() : a -= this.cssOverflowAdjustment(), r.style.transform = `translate3d(${n}px, ${a}px, 0px)`);
                            let o = this.maxTranslate() - this.minTranslate();
                            (0 === o ? 0 : (e - this.minTranslate()) / o) !== l && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
                        },
                        minTranslate: function() {
                            return -this.snapGrid[0]
                        },
                        maxTranslate: function() {
                            return -this.snapGrid[this.snapGrid.length - 1]
                        },
                        translateTo: function(e, t, i, s, r) {
                            let l;
                            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
                            let n = this,
                                {
                                    params: a,
                                    wrapperEl: d
                                } = n;
                            if (n.animating && a.preventInteractionOnTransition) return !1;
                            let c = n.minTranslate(),
                                u = n.maxTranslate();
                            if (l = s && e > c ? c : s && e < u ? u : e, n.updateProgress(l), a.cssMode) {
                                let e = n.isHorizontal();
                                if (0 === t) d[e ? "scrollLeft" : "scrollTop"] = -l;
                                else {
                                    if (!n.support.smoothScroll) return (0, o.r)({
                                        swiper: n,
                                        targetPosition: -l,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    d.scrollTo({
                                        [e ? "left" : "top"]: -l,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return 0 === t ? (n.setTransition(0), n.setTranslate(l), i && (n.emit("beforeTransitionStart", t, r), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(l), i && (n.emit("beforeTransitionStart", t, r), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
                                n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, n.animating = !1, i && n.emit("transitionEnd"))
                            }), n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))), !0
                        }
                    },
                    transition: {
                        setTransition: function(e, t) {
                            this.params.cssMode || (this.wrapperEl.style.transitionDuration = `${e}ms`, this.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), this.emit("setTransition", e, t)
                        },
                        transitionStart: function(e, t) {
                            void 0 === e && (e = !0);
                            let {
                                params: i
                            } = this;
                            i.cssMode || (i.autoHeight && this.updateAutoHeight(), v({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e, t) {
                            void 0 === e && (e = !0);
                            let {
                                params: i
                            } = this;
                            this.animating = !1, i.cssMode || (this.setTransition(0), v({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: {
                        slideTo: function(e, t, i, s, r) {
                            let l;
                            void 0 === e && (e = 0), void 0 === i && (i = !0), "string" == typeof e && (e = parseInt(e, 10));
                            let n = this,
                                a = e;
                            a < 0 && (a = 0);
                            let {
                                params: d,
                                snapGrid: c,
                                slidesGrid: u,
                                previousIndex: p,
                                activeIndex: h,
                                rtlTranslate: f,
                                wrapperEl: m,
                                enabled: v
                            } = n;
                            if (!v && !s && !r || n.destroyed || n.animating && d.preventInteractionOnTransition) return !1;
                            void 0 === t && (t = n.params.speed);
                            let g = Math.min(n.params.slidesPerGroupSkip, a),
                                w = g + Math.floor((a - g) / n.params.slidesPerGroup);
                            w >= c.length && (w = c.length - 1);
                            let S = -c[w];
                            if (d.normalizeSlideIndex)
                                for (let e = 0; e < u.length; e += 1) {
                                    let t = -Math.floor(100 * S),
                                        i = Math.floor(100 * u[e]),
                                        s = Math.floor(100 * u[e + 1]);
                                    void 0 !== u[e + 1] ? t >= i && t < s - (s - i) / 2 ? a = e : t >= i && t < s && (a = e + 1) : t >= i && (a = e)
                                }
                            if (n.initialized && a !== h && (!n.allowSlideNext && (f ? S > n.translate && S > n.minTranslate() : S < n.translate && S < n.minTranslate()) || !n.allowSlidePrev && S > n.translate && S > n.maxTranslate() && (h || 0) !== a)) return !1;
                            if (a !== (p || 0) && i && n.emit("beforeSlideChangeStart"), n.updateProgress(S), l = a > h ? "next" : a < h ? "prev" : "reset", f && -S === n.translate || !f && S === n.translate) return n.updateActiveIndex(a), d.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== d.effect && n.setTranslate(S), "reset" !== l && (n.transitionStart(i, l), n.transitionEnd(i, l)), !1;
                            if (d.cssMode) {
                                let e = n.isHorizontal(),
                                    i = f ? S : -S;
                                if (0 === t) {
                                    let t = n.virtual && n.params.virtual.enabled;
                                    t && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), t && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                                        m[e ? "scrollLeft" : "scrollTop"] = i
                                    })) : m[e ? "scrollLeft" : "scrollTop"] = i, t && requestAnimationFrame(() => {
                                        n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = !1
                                    })
                                } else {
                                    if (!n.support.smoothScroll) return (0, o.r)({
                                        swiper: n,
                                        targetPosition: i,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    m.scrollTo({
                                        [e ? "left" : "top"]: i,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return n.setTransition(t), n.setTranslate(S), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, s), n.transitionStart(i, l), 0 === t ? n.transitionEnd(i, l) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(e) {
                                n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(i, l))
                            }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)), !0
                        },
                        slideToLoop: function(e, t, i, s) {
                            void 0 === e && (e = 0), void 0 === i && (i = !0), "string" == typeof e && (e = parseInt(e, 10));
                            let r = this;
                            if (r.destroyed) return;
                            void 0 === t && (t = r.params.speed);
                            let l = r.grid && r.params.grid && r.params.grid.rows > 1,
                                n = e;
                            if (r.params.loop) {
                                if (r.virtual && r.params.virtual.enabled) n += r.virtual.slidesBefore;
                                else {
                                    let e;
                                    if (l) {
                                        let t = n * r.params.grid.rows;
                                        e = r.slides.filter(e => 1 * e.getAttribute("data-swiper-slide-index") === t)[0].column
                                    } else e = r.getSlideIndexByData(n);
                                    let t = l ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length,
                                        {
                                            centeredSlides: i
                                        } = r.params,
                                        a = r.params.slidesPerView;
                                    "auto" === a ? a = r.slidesPerViewDynamic() : (a = Math.ceil(parseFloat(r.params.slidesPerView, 10)), i && a % 2 == 0 && (a += 1));
                                    let o = t - e < a;
                                    if (i && (o = o || e < Math.ceil(a / 2)), s && i && "auto" !== r.params.slidesPerView && !l && (o = !1), o) {
                                        let s = i ? e < r.activeIndex ? "prev" : "next" : e - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
                                        r.loopFix({
                                            direction: s,
                                            slideTo: !0,
                                            activeSlideIndex: "next" === s ? e + 1 : e - t + 1,
                                            slideRealIndex: "next" === s ? r.realIndex : void 0
                                        })
                                    }
                                    if (l) {
                                        let e = n * r.params.grid.rows;
                                        n = r.slides.filter(t => 1 * t.getAttribute("data-swiper-slide-index") === e)[0].column
                                    } else n = r.getSlideIndexByData(n)
                                }
                            }
                            return requestAnimationFrame(() => {
                                r.slideTo(n, t, i, s)
                            }), r
                        },
                        slideNext: function(e, t, i) {
                            void 0 === t && (t = !0);
                            let s = this,
                                {
                                    enabled: r,
                                    params: l,
                                    animating: n
                                } = s;
                            if (!r || s.destroyed) return s;
                            void 0 === e && (e = s.params.speed);
                            let a = l.slidesPerGroup;
                            "auto" === l.slidesPerView && 1 === l.slidesPerGroup && l.slidesPerGroupAuto && (a = Math.max(s.slidesPerViewDynamic("current", !0), 1));
                            let o = s.activeIndex < l.slidesPerGroupSkip ? 1 : a,
                                d = s.virtual && l.virtual.enabled;
                            if (l.loop) {
                                if (n && !d && l.loopPreventsSliding) return !1;
                                if (s.loopFix({
                                        direction: "next"
                                    }), s._clientLeft = s.wrapperEl.clientLeft, s.activeIndex === s.slides.length - 1 && l.cssMode) return requestAnimationFrame(() => {
                                    s.slideTo(s.activeIndex + o, e, t, i)
                                }), !0
                            }
                            return l.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + o, e, t, i)
                        },
                        slidePrev: function(e, t, i) {
                            void 0 === t && (t = !0);
                            let s = this,
                                {
                                    params: r,
                                    snapGrid: l,
                                    slidesGrid: n,
                                    rtlTranslate: a,
                                    enabled: o,
                                    animating: d
                                } = s;
                            if (!o || s.destroyed) return s;
                            void 0 === e && (e = s.params.speed);
                            let c = s.virtual && r.virtual.enabled;
                            if (r.loop) {
                                if (d && !c && r.loopPreventsSliding) return !1;
                                s.loopFix({
                                    direction: "prev"
                                }), s._clientLeft = s.wrapperEl.clientLeft
                            }

                            function u(e) {
                                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                            }
                            let p = u(a ? s.translate : -s.translate),
                                h = l.map(e => u(e)),
                                f = l[h.indexOf(p) - 1];
                            if (void 0 === f && r.cssMode) {
                                let e;
                                l.forEach((t, i) => {
                                    p >= t && (e = i)
                                }), void 0 !== e && (f = l[e > 0 ? e - 1 : e])
                            }
                            let m = 0;
                            if (void 0 !== f && ((m = n.indexOf(f)) < 0 && (m = s.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (m = Math.max(m = m - s.slidesPerViewDynamic("previous", !0) + 1, 0))), r.rewind && s.isBeginning) {
                                let r = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
                                return s.slideTo(r, e, t, i)
                            }
                            return r.loop && 0 === s.activeIndex && r.cssMode ? (requestAnimationFrame(() => {
                                s.slideTo(m, e, t, i)
                            }), !0) : s.slideTo(m, e, t, i)
                        },
                        slideReset: function(e, t, i) {
                            if (void 0 === t && (t = !0), !this.destroyed) return void 0 === e && (e = this.params.speed), this.slideTo(this.activeIndex, e, t, i)
                        },
                        slideToClosest: function(e, t, i, s) {
                            if (void 0 === t && (t = !0), void 0 === s && (s = .5), this.destroyed) return;
                            void 0 === e && (e = this.params.speed);
                            let r = this.activeIndex,
                                l = Math.min(this.params.slidesPerGroupSkip, r),
                                n = l + Math.floor((r - l) / this.params.slidesPerGroup),
                                a = this.rtlTranslate ? this.translate : -this.translate;
                            if (a >= this.snapGrid[n]) {
                                let e = this.snapGrid[n];
                                a - e > (this.snapGrid[n + 1] - e) * s && (r += this.params.slidesPerGroup)
                            } else {
                                let e = this.snapGrid[n - 1];
                                a - e <= (this.snapGrid[n] - e) * s && (r -= this.params.slidesPerGroup)
                            }
                            return r = Math.min(r = Math.max(r, 0), this.slidesGrid.length - 1), this.slideTo(r, e, t, i)
                        },
                        slideToClickedSlide: function() {
                            let e;
                            let t = this;
                            if (t.destroyed) return;
                            let {
                                params: i,
                                slidesEl: s
                            } = t, r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, l = t.clickedIndex, n = t.isElement ? "swiper-slide" : `.${i.slideClass}`;
                            if (i.loop) {
                                if (t.animating) return;
                                e = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), i.centeredSlides ? l < t.loopedSlides - r / 2 || l > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), l = t.getSlideIndex((0, o.e)(s, `${n}[data-swiper-slide-index="${e}"]`)[0]), (0, o.n)(() => {
                                    t.slideTo(l)
                                })) : t.slideTo(l) : l > t.slides.length - r ? (t.loopFix(), l = t.getSlideIndex((0, o.e)(s, `${n}[data-swiper-slide-index="${e}"]`)[0]), (0, o.n)(() => {
                                    t.slideTo(l)
                                })) : t.slideTo(l)
                            } else t.slideTo(l)
                        }
                    },
                    loop: {
                        loopCreate: function(e) {
                            let t = this,
                                {
                                    params: i,
                                    slidesEl: s
                                } = t;
                            if (!i.loop || t.virtual && t.params.virtual.enabled) return;
                            let r = t.grid && i.grid && i.grid.rows > 1,
                                l = i.slidesPerGroup * (r ? i.grid.rows : 1),
                                n = t.slides.length % l != 0,
                                a = r && t.slides.length % i.grid.rows != 0,
                                d = e => {
                                    for (let s = 0; s < e; s += 1) {
                                        let e = t.isElement ? (0, o.c)("swiper-slide", [i.slideBlankClass]) : (0, o.c)("div", [i.slideClass, i.slideBlankClass]);
                                        t.slidesEl.append(e)
                                    }
                                };
                            n ? i.loopAddBlankSlides ? (d(l - t.slides.length % l), t.recalcSlides(), t.updateSlides()) : (0, o.t)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)") : a && (i.loopAddBlankSlides ? (d(i.grid.rows - t.slides.length % i.grid.rows), t.recalcSlides(), t.updateSlides()) : (0, o.t)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)")), (0, o.e)(s, `.${i.slideClass}, swiper-slide`).forEach((e, t) => {
                                e.setAttribute("data-swiper-slide-index", t)
                            }), t.loopFix({
                                slideRealIndex: e,
                                direction: i.centeredSlides ? void 0 : "next"
                            })
                        },
                        loopFix: function(e) {
                            let {
                                slideRealIndex: t,
                                slideTo: i = !0,
                                direction: s,
                                setTranslate: r,
                                activeSlideIndex: l,
                                byController: n,
                                byMousewheel: a
                            } = void 0 === e ? {} : e, d = this;
                            if (!d.params.loop) return;
                            d.emit("beforeLoopFix");
                            let {
                                slides: c,
                                allowSlidePrev: u,
                                allowSlideNext: p,
                                slidesEl: h,
                                params: f
                            } = d, {
                                centeredSlides: m
                            } = f;
                            if (d.allowSlidePrev = !0, d.allowSlideNext = !0, d.virtual && f.virtual.enabled) {
                                i && (f.centeredSlides || 0 !== d.snapIndex ? f.centeredSlides && d.snapIndex < f.slidesPerView ? d.slideTo(d.virtual.slides.length + d.snapIndex, 0, !1, !0) : d.snapIndex === d.snapGrid.length - 1 && d.slideTo(d.virtual.slidesBefore, 0, !1, !0) : d.slideTo(d.virtual.slides.length, 0, !1, !0)), d.allowSlidePrev = u, d.allowSlideNext = p, d.emit("loopFix");
                                return
                            }
                            let v = f.slidesPerView;
                            "auto" === v ? v = d.slidesPerViewDynamic() : (v = Math.ceil(parseFloat(f.slidesPerView, 10)), m && v % 2 == 0 && (v += 1));
                            let g = f.slidesPerGroupAuto ? v : f.slidesPerGroup,
                                w = g;
                            w % g != 0 && (w += g - w % g), w += f.loopAdditionalSlides, d.loopedSlides = w;
                            let S = d.grid && f.grid && f.grid.rows > 1;
                            c.length < v + w ? (0, o.t)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : S && "row" === f.grid.fill && (0, o.t)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
                            let b = [],
                                T = [],
                                y = d.activeIndex;
                            void 0 === l ? l = d.getSlideIndex(c.filter(e => e.classList.contains(f.slideActiveClass))[0]) : y = l;
                            let E = "next" === s || !s,
                                x = "prev" === s || !s,
                                M = 0,
                                C = 0,
                                P = S ? Math.ceil(c.length / f.grid.rows) : c.length,
                                O = (S ? c[l].column : l) + (m && void 0 === r ? -v / 2 + .5 : 0);
                            if (O < w) {
                                M = Math.max(w - O, g);
                                for (let e = 0; e < w - O; e += 1) {
                                    let t = e - Math.floor(e / P) * P;
                                    if (S) {
                                        let e = P - t - 1;
                                        for (let t = c.length - 1; t >= 0; t -= 1) c[t].column === e && b.push(t)
                                    } else b.push(P - t - 1)
                                }
                            } else if (O + v > P - w) {
                                C = Math.max(O - (P - 2 * w), g);
                                for (let e = 0; e < C; e += 1) {
                                    let t = e - Math.floor(e / P) * P;
                                    S ? c.forEach((e, i) => {
                                        e.column === t && T.push(i)
                                    }) : T.push(t)
                                }
                            }
                            if (d.__preventObserver__ = !0, requestAnimationFrame(() => {
                                    d.__preventObserver__ = !1
                                }), x && b.forEach(e => {
                                    c[e].swiperLoopMoveDOM = !0, h.prepend(c[e]), c[e].swiperLoopMoveDOM = !1
                                }), E && T.forEach(e => {
                                    c[e].swiperLoopMoveDOM = !0, h.append(c[e]), c[e].swiperLoopMoveDOM = !1
                                }), d.recalcSlides(), "auto" === f.slidesPerView ? d.updateSlides() : S && (b.length > 0 && x || T.length > 0 && E) && d.slides.forEach((e, t) => {
                                    d.grid.updateSlide(t, e, d.slides)
                                }), f.watchSlidesProgress && d.updateSlidesOffset(), i) {
                                if (b.length > 0 && x) {
                                    if (void 0 === t) {
                                        let e = d.slidesGrid[y],
                                            t = d.slidesGrid[y + M] - e;
                                        a ? d.setTranslate(d.translate - t) : (d.slideTo(y + Math.ceil(M), 0, !1, !0), r && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t))
                                    } else if (r) {
                                        let e = S ? b.length / f.grid.rows : b.length;
                                        d.slideTo(d.activeIndex + e, 0, !1, !0), d.touchEventsData.currentTranslate = d.translate
                                    }
                                } else if (T.length > 0 && E) {
                                    if (void 0 === t) {
                                        let e = d.slidesGrid[y],
                                            t = d.slidesGrid[y - C] - e;
                                        a ? d.setTranslate(d.translate - t) : (d.slideTo(y - C, 0, !1, !0), r && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - t, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - t))
                                    } else {
                                        let e = S ? T.length / f.grid.rows : T.length;
                                        d.slideTo(d.activeIndex - e, 0, !1, !0)
                                    }
                                }
                            }
                            if (d.allowSlidePrev = u, d.allowSlideNext = p, d.controller && d.controller.control && !n) {
                                let e = {
                                    slideRealIndex: t,
                                    direction: s,
                                    setTranslate: r,
                                    activeSlideIndex: l,
                                    byController: !0
                                };
                                Array.isArray(d.controller.control) ? d.controller.control.forEach(t => {
                                    !t.destroyed && t.params.loop && t.loopFix({ ...e,
                                        slideTo: t.params.slidesPerView === f.slidesPerView && i
                                    })
                                }) : d.controller.control instanceof d.constructor && d.controller.control.params.loop && d.controller.control.loopFix({ ...e,
                                    slideTo: d.controller.control.params.slidesPerView === f.slidesPerView && i
                                })
                            }
                            d.emit("loopFix")
                        },
                        loopDestroy: function() {
                            let {
                                params: e,
                                slidesEl: t
                            } = this;
                            if (!e.loop || this.virtual && this.params.virtual.enabled) return;
                            this.recalcSlides();
                            let i = [];
                            this.slides.forEach(e => {
                                i[void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex] = e
                            }), this.slides.forEach(e => {
                                e.removeAttribute("data-swiper-slide-index")
                            }), i.forEach(e => {
                                t.append(e)
                            }), this.recalcSlides(), this.slideTo(this.realIndex, 0)
                        }
                    },
                    grabCursor: {
                        setGrabCursor: function(e) {
                            let t = this;
                            if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                            let i = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                            t.isElement && (t.__preventObserver__ = !0), i.style.cursor = "move", i.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
                                t.__preventObserver__ = !1
                            })
                        },
                        unsetGrabCursor: function() {
                            let e = this;
                            e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
                                e.__preventObserver__ = !1
                            }))
                        }
                    },
                    events: {
                        attachEvents: function() {
                            let {
                                params: e
                            } = this;
                            this.onTouchStart = w.bind(this), this.onTouchMove = S.bind(this), this.onTouchEnd = b.bind(this), this.onDocumentTouchStart = M.bind(this), e.cssMode && (this.onScroll = E.bind(this)), this.onClick = y.bind(this), this.onLoad = x.bind(this), C(this, "on")
                        },
                        detachEvents: function() {
                            C(this, "off")
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            let e = this,
                                {
                                    realIndex: t,
                                    initialized: i,
                                    params: s,
                                    el: r
                                } = e,
                                l = s.breakpoints;
                            if (!l || l && 0 === Object.keys(l).length) return;
                            let n = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
                            if (!n || e.currentBreakpoint === n) return;
                            let a = (n in l ? l[n] : void 0) || e.originalParams,
                                d = P(e, s),
                                c = P(e, a),
                                u = e.params.grabCursor,
                                p = a.grabCursor,
                                h = s.enabled;
                            d && !c ? (r.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (r.classList.add(`${s.containerModifierClass}grid`), (a.grid.fill && "column" === a.grid.fill || !a.grid.fill && "column" === s.grid.fill) && r.classList.add(`${s.containerModifierClass}grid-column`), e.emitContainerClasses()), u && !p ? e.unsetGrabCursor() : !u && p && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach(t => {
                                if (void 0 === a[t]) return;
                                let i = s[t] && s[t].enabled,
                                    r = a[t] && a[t].enabled;
                                i && !r && e[t].disable(), !i && r && e[t].enable()
                            });
                            let f = a.direction && a.direction !== s.direction,
                                m = s.loop && (a.slidesPerView !== s.slidesPerView || f),
                                v = s.loop;
                            f && i && e.changeDirection(), (0, o.u)(e.params, a);
                            let g = e.params.enabled,
                                w = e.params.loop;
                            Object.assign(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), h && !g ? e.disable() : !h && g && e.enable(), e.currentBreakpoint = n, e.emit("_beforeBreakpoint", a), i && (m ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !v && w ? (e.loopCreate(t), e.updateSlides()) : v && !w && e.loopDestroy()), e.emit("breakpoint", a)
                        },
                        getBreakpoint: function(e, t, i) {
                            if (void 0 === t && (t = "window"), !e || "container" === t && !i) return;
                            let s = !1,
                                r = (0, a.a)(),
                                l = "window" === t ? r.innerHeight : i.clientHeight,
                                n = Object.keys(e).map(e => "string" == typeof e && 0 === e.indexOf("@") ? {
                                    value: l * parseFloat(e.substr(1)),
                                    point: e
                                } : {
                                    value: e,
                                    point: e
                                });
                            n.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                            for (let e = 0; e < n.length; e += 1) {
                                let {
                                    point: l,
                                    value: a
                                } = n[e];
                                "window" === t ? r.matchMedia(`(min-width: ${a}px)`).matches && (s = l) : a <= i.clientWidth && (s = l)
                            }
                            return s || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            let {
                                isLocked: e,
                                params: t
                            } = this, {
                                slidesOffsetBefore: i
                            } = t;
                            if (i) {
                                let e = this.slides.length - 1,
                                    t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * i;
                                this.isLocked = this.size > t
                            } else this.isLocked = 1 === this.snapGrid.length;
                            !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked), !0 === t.allowSlidePrev && (this.allowSlidePrev = !this.isLocked), e && e !== this.isLocked && (this.isEnd = !1), e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: {
                        addClasses: function() {
                            let {
                                classNames: e,
                                params: t,
                                rtl: i,
                                el: s,
                                device: r
                            } = this, l = function(e, t) {
                                let i = [];
                                return e.forEach(e => {
                                    "object" == typeof e ? Object.keys(e).forEach(s => {
                                        e[s] && i.push(t + s)
                                    }) : "string" == typeof e && i.push(t + e)
                                }), i
                            }(["initialized", t.direction, {
                                "free-mode": this.params.freeMode && t.freeMode.enabled
                            }, {
                                autoheight: t.autoHeight
                            }, {
                                rtl: i
                            }, {
                                grid: t.grid && t.grid.rows > 1
                            }, {
                                "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill
                            }, {
                                android: r.android
                            }, {
                                ios: r.ios
                            }, {
                                "css-mode": t.cssMode
                            }, {
                                centered: t.cssMode && t.centeredSlides
                            }, {
                                "watch-progress": t.watchSlidesProgress
                            }], t.containerModifierClass);
                            e.push(...l), s.classList.add(...e), this.emitContainerClasses()
                        },
                        removeClasses: function() {
                            let {
                                el: e,
                                classNames: t
                            } = this;
                            e.classList.remove(...t), this.emitContainerClasses()
                        }
                    }
                },
                _ = {};
            class L {
                constructor() {
                    let e, t;
                    for (var i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
                    1 === s.length && s[0].constructor && "Object" === Object.prototype.toString.call(s[0]).slice(8, -1) ? t = s[0] : [e, t] = s, t || (t = {}), t = (0, o.u)({}, t), e && !t.el && (t.el = e);
                    let n = (0, a.g)();
                    if (t.el && "string" == typeof t.el && n.querySelectorAll(t.el).length > 1) {
                        let e = [];
                        return n.querySelectorAll(t.el).forEach(i => {
                            let s = (0, o.u)({}, t, {
                                el: i
                            });
                            e.push(new L(s))
                        }), e
                    }
                    let u = this;
                    u.__swiper__ = !0, u.support = d(), u.device = c({
                        userAgent: t.userAgent
                    }), u.browser = (l || (l = function() {
                        let e = (0, a.a)(),
                            t = c(),
                            i = !1;

                        function s() {
                            let t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android")
                        }
                        if (s()) {
                            let t = String(e.navigator.userAgent);
                            if (t.includes("Version/")) {
                                let [e, s] = t.split("Version/")[1].split(" ")[0].split(".").map(e => Number(e));
                                i = e < 16 || 16 === e && s < 2
                            }
                        }
                        let r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
                            l = s(),
                            n = l || r && t.ios;
                        return {
                            isSafari: i || l,
                            needPerspectiveFix: i,
                            need3dFix: n,
                            isWebView: r
                        }
                    }()), l), u.eventsListeners = {}, u.eventsAnyListeners = [], u.modules = [...u.__modules__], t.modules && Array.isArray(t.modules) && u.modules.push(...t.modules);
                    let p = {};
                    u.modules.forEach(e => {
                        var i;
                        e({
                            params: t,
                            swiper: u,
                            extendParams: (i = t, function(e) {
                                void 0 === e && (e = {});
                                let t = Object.keys(e)[0],
                                    s = e[t];
                                if ("object" != typeof s || null === s || (!0 === i[t] && (i[t] = {
                                        enabled: !0
                                    }), "navigation" === t && i[t] && i[t].enabled && !i[t].prevEl && !i[t].nextEl && (i[t].auto = !0), ["pagination", "scrollbar"].indexOf(t) >= 0 && i[t] && i[t].enabled && !i[t].el && (i[t].auto = !0), !(t in i && "enabled" in s))) {
                                    (0, o.u)(p, e);
                                    return
                                }
                                "object" != typeof i[t] || "enabled" in i[t] || (i[t].enabled = !0), i[t] || (i[t] = {
                                    enabled: !1
                                }), (0, o.u)(p, e)
                            }),
                            on: u.on.bind(u),
                            once: u.once.bind(u),
                            off: u.off.bind(u),
                            emit: u.emit.bind(u)
                        })
                    });
                    let h = (0, o.u)({}, O, p);
                    return u.params = (0, o.u)({}, h, _, t), u.originalParams = (0, o.u)({}, u.params), u.passedParams = (0, o.u)({}, t), u.params && u.params.on && Object.keys(u.params.on).forEach(e => {
                        u.on(e, u.params.on[e])
                    }), u.params && u.params.onAny && u.onAny(u.params.onAny), Object.assign(u, {
                        enabled: u.params.enabled,
                        el: e,
                        classNames: [],
                        slides: [],
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === u.params.direction,
                        isVertical: () => "vertical" === u.params.direction,
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
                            return 8388608 * Math.trunc(this.translate / 8388608)
                        },
                        allowSlideNext: u.params.allowSlideNext,
                        allowSlidePrev: u.params.allowSlidePrev,
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: u.params.focusableElements,
                            lastClickTime: 0,
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            startMoving: void 0,
                            pointerId: null,
                            touchId: null
                        },
                        allowClick: !0,
                        allowTouchMove: u.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), u.emit("_swiper"), u.params.init && u.init(), u
                }
                getDirectionLabel(e) {
                    return this.isHorizontal() ? e : ({
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    })[e]
                }
                getSlideIndex(e) {
                    let {
                        slidesEl: t,
                        params: i
                    } = this, s = (0, o.e)(t, `.${i.slideClass}, swiper-slide`), r = (0, o.h)(s[0]);
                    return (0, o.h)(e) - r
                }
                getSlideIndexByData(e) {
                    return this.getSlideIndex(this.slides.filter(t => 1 * t.getAttribute("data-swiper-slide-index") === e)[0])
                }
                recalcSlides() {
                    let {
                        slidesEl: e,
                        params: t
                    } = this;
                    this.slides = (0, o.e)(e, `.${t.slideClass}, swiper-slide`)
                }
                enable() {
                    this.enabled || (this.enabled = !0, this.params.grabCursor && this.setGrabCursor(), this.emit("enable"))
                }
                disable() {
                    this.enabled && (this.enabled = !1, this.params.grabCursor && this.unsetGrabCursor(), this.emit("disable"))
                }
                setProgress(e, t) {
                    e = Math.min(Math.max(e, 0), 1);
                    let i = this.minTranslate(),
                        s = (this.maxTranslate() - i) * e + i;
                    this.translateTo(s, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
                }
                emitContainerClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    let t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
                }
                emitSlidesClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = [];
                    e.slides.forEach(i => {
                        let s = e.getSlideClasses(i);
                        t.push({
                            slideEl: i,
                            classNames: s
                        }), e.emit("_slideClass", i, s)
                    }), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e, t) {
                    void 0 === e && (e = "current"), void 0 === t && (t = !1);
                    let {
                        params: i,
                        slides: s,
                        slidesGrid: r,
                        slidesSizesGrid: l,
                        size: n,
                        activeIndex: a
                    } = this, o = 1;
                    if ("number" == typeof i.slidesPerView) return i.slidesPerView;
                    if (i.centeredSlides) {
                        let e, t = s[a] ? Math.ceil(s[a].swiperSlideSize) : 0;
                        for (let i = a + 1; i < s.length; i += 1) s[i] && !e && (t += Math.ceil(s[i].swiperSlideSize), o += 1, t > n && (e = !0));
                        for (let i = a - 1; i >= 0; i -= 1) s[i] && !e && (t += s[i].swiperSlideSize, o += 1, t > n && (e = !0))
                    } else if ("current" === e)
                        for (let e = a + 1; e < s.length; e += 1)(t ? r[e] + l[e] - r[a] < n : r[e] - r[a] < n) && (o += 1);
                    else
                        for (let e = a - 1; e >= 0; e -= 1) r[a] - r[e] < n && (o += 1);
                    return o
                }
                update() {
                    let e;
                    let t = this;
                    if (!t || t.destroyed) return;
                    let {
                        snapGrid: i,
                        params: s
                    } = t;

                    function r() {
                        let e = Math.min(Math.max(t.rtlTranslate ? -1 * t.translate : t.translate, t.maxTranslate()), t.minTranslate());
                        t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses()
                    }
                    if (s.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach(e => {
                            e.complete && h(t, e)
                        }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) r(), s.autoHeight && t.updateAutoHeight();
                    else {
                        if (("auto" === s.slidesPerView || s.slidesPerView > 1) && t.isEnd && !s.centeredSlides) {
                            let i = t.virtual && s.virtual.enabled ? t.virtual.slides : t.slides;
                            e = t.slideTo(i.length - 1, 0, !1, !0)
                        } else e = t.slideTo(t.activeIndex, 0, !1, !0);
                        e || r()
                    }
                    s.watchOverflow && i !== t.snapGrid && t.checkOverflow(), t.emit("update")
                }
                changeDirection(e, t) {
                    void 0 === t && (t = !0);
                    let i = this.params.direction;
                    return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.el.classList.remove(`${this.params.containerModifierClass}${i}`), this.el.classList.add(`${this.params.containerModifierClass}${e}`), this.emitContainerClasses(), this.params.direction = e, this.slides.forEach(t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    }), this.emit("changeDirection"), t && this.update()), this
                }
                changeLanguageDirection(e) {
                    (!this.rtl || "rtl" !== e) && (this.rtl || "ltr" !== e) && (this.rtl = "rtl" === e, this.rtlTranslate = "horizontal" === this.params.direction && this.rtl, this.rtl ? (this.el.classList.add(`${this.params.containerModifierClass}rtl`), this.el.dir = "rtl") : (this.el.classList.remove(`${this.params.containerModifierClass}rtl`), this.el.dir = "ltr"), this.update())
                }
                mount(e) {
                    let t = this;
                    if (t.mounted) return !0;
                    let i = e || t.params.el;
                    if ("string" == typeof i && (i = document.querySelector(i)), !i) return !1;
                    i.swiper = t, i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
                    let s = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,
                        r = i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(s()) : (0, o.e)(i, s())[0];
                    return !r && t.params.createElements && (r = (0, o.c)("div", t.params.wrapperClass), i.append(r), (0, o.e)(i, `.${t.params.slideClass}`).forEach(e => {
                        r.append(e)
                    })), Object.assign(t, {
                        el: i,
                        wrapperEl: r,
                        slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : r,
                        hostEl: t.isElement ? i.parentNode.host : i,
                        mounted: !0,
                        rtl: "rtl" === i.dir.toLowerCase() || "rtl" === (0, o.o)(i, "direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === i.dir.toLowerCase() || "rtl" === (0, o.o)(i, "direction")),
                        wrongRTL: "-webkit-box" === (0, o.o)(r, "display")
                    }), !0
                }
                init(e) {
                    let t = this;
                    if (t.initialized || !1 === t.mount(e)) return t;
                    t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
                    let i = [...t.el.querySelectorAll('[loading="lazy"]')];
                    return t.isElement && i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), i.forEach(e => {
                        e.complete ? h(t, e) : e.addEventListener("load", e => {
                            h(t, e.target)
                        })
                    }), m(t), t.initialized = !0, m(t), t.emit("init"), t.emit("afterInit"), t
                }
                destroy(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    let i = this,
                        {
                            params: s,
                            el: r,
                            wrapperEl: l,
                            slides: n
                        } = i;
                    return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), r.removeAttribute("style"), l.removeAttribute("style"), n && n.length && n.forEach(e => {
                        e.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                    })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(e => {
                        i.off(e)
                    }), !1 !== e && (i.el.swiper = null, (0, o.v)(i)), i.destroyed = !0), null
                }
                static extendDefaults(e) {
                    (0, o.u)(_, e)
                }
                static get extendedDefaults() {
                    return _
                }
                static get defaults() {
                    return O
                }
                static installModule(e) {
                    L.prototype.__modules__ || (L.prototype.__modules__ = []);
                    let t = L.prototype.__modules__;
                    "function" == typeof e && 0 > t.indexOf(e) && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? e.forEach(e => L.installModule(e)) : L.installModule(e), L
                }
            }
            Object.keys(k).forEach(e => {
                Object.keys(k[e]).forEach(t => {
                    L.prototype[t] = k[e][t]
                })
            }), L.use([function(e) {
                let {
                    swiper: t,
                    on: i,
                    emit: s
                } = e, r = (0, a.a)(), l = null, n = null, o = () => {
                    t && !t.destroyed && t.initialized && (s("beforeResize"), s("resize"))
                }, d = () => {
                    t && !t.destroyed && t.initialized && (l = new ResizeObserver(e => {
                        n = r.requestAnimationFrame(() => {
                            let {
                                width: i,
                                height: s
                            } = t, r = i, l = s;
                            e.forEach(e => {
                                let {
                                    contentBoxSize: i,
                                    contentRect: s,
                                    target: n
                                } = e;
                                n && n !== t.el || (r = s ? s.width : (i[0] || i).inlineSize, l = s ? s.height : (i[0] || i).blockSize)
                            }), (r !== i || l !== s) && o()
                        })
                    })).observe(t.el)
                }, c = () => {
                    n && r.cancelAnimationFrame(n), l && l.unobserve && t.el && (l.unobserve(t.el), l = null)
                }, u = () => {
                    t && !t.destroyed && t.initialized && s("orientationchange")
                };
                i("init", () => {
                    if (t.params.resizeObserver && void 0 !== r.ResizeObserver) {
                        d();
                        return
                    }
                    r.addEventListener("resize", o), r.addEventListener("orientationchange", u)
                }), i("destroy", () => {
                    c(), r.removeEventListener("resize", o), r.removeEventListener("orientationchange", u)
                })
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: i,
                    on: s,
                    emit: r
                } = e, l = [], n = (0, a.a)(), d = function(e, i) {
                    void 0 === i && (i = {});
                    let s = new(n.MutationObserver || n.WebkitMutationObserver)(e => {
                        if (t.__preventObserver__) return;
                        if (1 === e.length) {
                            r("observerUpdate", e[0]);
                            return
                        }
                        let i = function() {
                            r("observerUpdate", e[0])
                        };
                        n.requestAnimationFrame ? n.requestAnimationFrame(i) : n.setTimeout(i, 0)
                    });
                    s.observe(e, {
                        attributes: void 0 === i.attributes || i.attributes,
                        childList: void 0 === i.childList || i.childList,
                        characterData: void 0 === i.characterData || i.characterData
                    }), l.push(s)
                };
                i({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), s("init", () => {
                    if (t.params.observer) {
                        if (t.params.observeParents) {
                            let e = (0, o.a)(t.hostEl);
                            for (let t = 0; t < e.length; t += 1) d(e[t])
                        }
                        d(t.hostEl, {
                            childList: t.params.observeSlideChildren
                        }), d(t.wrapperEl, {
                            attributes: !1
                        })
                    }
                }), s("destroy", () => {
                    l.forEach(e => {
                        e.disconnect()
                    }), l.splice(0, l.length)
                })
            }]);
            let I = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

            function A(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
            }

            function z(e, t) {
                let i = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter(e => 0 > i.indexOf(e)).forEach(i => {
                    void 0 === e[i] ? e[i] = t[i] : A(t[i]) && A(e[i]) && Object.keys(t[i]).length > 0 ? t[i].__swiper__ ? e[i] = t[i] : z(e[i], t[i]) : e[i] = t[i]
                })
            }

            function D(e) {
                return void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
            }

            function G(e) {
                return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
            }

            function N(e) {
                return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
            }

            function V(e) {
                void 0 === e && (e = "");
                let t = e.split(" ").map(e => e.trim()).filter(e => !!e),
                    i = [];
                return t.forEach(e => {
                    0 > i.indexOf(e) && i.push(e)
                }), i.join(" ")
            }
            let j = e => {
                e && !e.destroyed && e.params.virtual && (!e.params.virtual || e.params.virtual.enabled) && (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
            };

            function $() {
                return ($ = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function B(e) {
                return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
            }

            function F(e, t) {
                return "undefined" == typeof window ? (0, n.useEffect)(e, t) : (0, n.useLayoutEffect)(e, t)
            }
            let R = (0, n.createContext)(null),
                H = (0, n.createContext)(null),
                W = (0, n.forwardRef)(function(e, t) {
                    var i;
                    let {
                        className: s,
                        tag: r = "div",
                        wrapperTag: l = "div",
                        children: a,
                        onSwiper: o,
                        ...d
                    } = void 0 === e ? {} : e, c = !1, [u, p] = (0, n.useState)("swiper"), [h, f] = (0, n.useState)(null), [m, v] = (0, n.useState)(!1), g = (0, n.useRef)(!1), w = (0, n.useRef)(null), S = (0, n.useRef)(null), b = (0, n.useRef)(null), T = (0, n.useRef)(null), y = (0, n.useRef)(null), E = (0, n.useRef)(null), x = (0, n.useRef)(null), M = (0, n.useRef)(null), {
                        params: C,
                        passedParams: P,
                        rest: k,
                        events: _
                    } = function(e, t) {
                        void 0 === e && (e = {}), void 0 === t && (t = !0);
                        let i = {
                                on: {}
                            },
                            s = {},
                            r = {};
                        z(i, O), i._emitClasses = !0, i.init = !1;
                        let l = {},
                            n = I.map(e => e.replace(/_/, ""));
                        return Object.keys(Object.assign({}, e)).forEach(a => {
                            void 0 !== e[a] && (n.indexOf(a) >= 0 ? A(e[a]) ? (i[a] = {}, r[a] = {}, z(i[a], e[a]), z(r[a], e[a])) : (i[a] = e[a], r[a] = e[a]) : 0 === a.search(/on[A-Z]/) && "function" == typeof e[a] ? t ? s[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : i.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : l[a] = e[a])
                        }), ["navigation", "pagination", "scrollbar"].forEach(e => {
                            !0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e]
                        }), {
                            params: i,
                            passedParams: r,
                            rest: l,
                            events: s
                        }
                    }(d), {
                        slides: R,
                        slots: W
                    } = function(e) {
                        let t = [],
                            i = {
                                "container-start": [],
                                "container-end": [],
                                "wrapper-start": [],
                                "wrapper-end": []
                            };
                        return n.Children.toArray(e).forEach(e => {
                            if (B(e)) t.push(e);
                            else if (e.props && e.props.slot && i[e.props.slot]) i[e.props.slot].push(e);
                            else if (e.props && e.props.children) {
                                let s = function e(t) {
                                    let i = [];
                                    return n.Children.toArray(t).forEach(t => {
                                        B(t) ? i.push(t) : t.props && t.props.children && e(t.props.children).forEach(e => i.push(e))
                                    }), i
                                }(e.props.children);
                                s.length > 0 ? s.forEach(e => t.push(e)) : i["container-end"].push(e)
                            } else i["container-end"].push(e)
                        }), {
                            slides: t,
                            slots: i
                        }
                    }(a), q = () => {
                        v(!m)
                    };
                    Object.assign(C.on, {
                        _containerClasses(e, t) {
                            p(t)
                        }
                    });
                    let Y = () => {
                        Object.assign(C.on, _), c = !0;
                        let e = { ...C
                        };
                        if (delete e.wrapperClass, S.current = new L(e), S.current.virtual && S.current.params.virtual.enabled) {
                            S.current.virtual.slides = R;
                            let e = {
                                cache: !1,
                                slides: R,
                                renderExternal: f,
                                renderExternalUpdate: !1
                            };
                            z(S.current.params.virtual, e), z(S.current.originalParams.virtual, e)
                        }
                    };
                    w.current || Y(), S.current && S.current.on("_beforeBreakpoint", q);
                    let X = () => {
                            !c && _ && S.current && Object.keys(_).forEach(e => {
                                S.current.on(e, _[e])
                            })
                        },
                        U = () => {
                            _ && S.current && Object.keys(_).forEach(e => {
                                S.current.off(e, _[e])
                            })
                        };
                    return (0, n.useEffect)(() => () => {
                        S.current && S.current.off("_beforeBreakpoint", q)
                    }), (0, n.useEffect)(() => {
                        !g.current && S.current && (S.current.emitSlidesClasses(), g.current = !0)
                    }), F(() => {
                        if (t && (t.current = w.current), w.current) return S.current.destroyed && Y(),
                            function(e, t) {
                                let {
                                    el: i,
                                    nextEl: s,
                                    prevEl: r,
                                    paginationEl: l,
                                    scrollbarEl: n,
                                    swiper: a
                                } = e;
                                D(t) && s && r && (a.params.navigation.nextEl = s, a.originalParams.navigation.nextEl = s, a.params.navigation.prevEl = r, a.originalParams.navigation.prevEl = r), G(t) && l && (a.params.pagination.el = l, a.originalParams.pagination.el = l), N(t) && n && (a.params.scrollbar.el = n, a.originalParams.scrollbar.el = n), a.init(i)
                            }({
                                el: w.current,
                                nextEl: y.current,
                                prevEl: E.current,
                                paginationEl: x.current,
                                scrollbarEl: M.current,
                                swiper: S.current
                            }, C), o && !S.current.destroyed && o(S.current), () => {
                                S.current && !S.current.destroyed && S.current.destroy(!0, !1)
                            }
                    }, []), F(() => {
                        X();
                        let e = function(e, t, i, s, r) {
                            let l = [];
                            if (!t) return l;
                            let n = e => {
                                0 > l.indexOf(e) && l.push(e)
                            };
                            if (i && s) {
                                let e = s.map(r),
                                    t = i.map(r);
                                e.join("") !== t.join("") && n("children"), s.length !== i.length && n("children")
                            }
                            return I.filter(e => "_" === e[0]).map(e => e.replace(/_/, "")).forEach(i => {
                                if (i in e && i in t) {
                                    if (A(e[i]) && A(t[i])) {
                                        let s = Object.keys(e[i]),
                                            r = Object.keys(t[i]);
                                        s.length !== r.length ? n(i) : (s.forEach(s => {
                                            e[i][s] !== t[i][s] && n(i)
                                        }), r.forEach(s => {
                                            e[i][s] !== t[i][s] && n(i)
                                        }))
                                    } else e[i] !== t[i] && n(i)
                                }
                            }), l
                        }(P, b.current, R, T.current, e => e.key);
                        return b.current = P, T.current = R, e.length && S.current && !S.current.destroyed && function(e) {
                            let t, i, s, r, l, n, a, o, {
                                    swiper: d,
                                    slides: c,
                                    passedParams: u,
                                    changedParams: p,
                                    nextEl: h,
                                    prevEl: f,
                                    scrollbarEl: m,
                                    paginationEl: v
                                } = e,
                                g = p.filter(e => "children" !== e && "direction" !== e && "wrapperClass" !== e),
                                {
                                    params: w,
                                    pagination: S,
                                    navigation: b,
                                    scrollbar: T,
                                    virtual: y,
                                    thumbs: E
                                } = d;
                            p.includes("thumbs") && u.thumbs && u.thumbs.swiper && w.thumbs && !w.thumbs.swiper && (t = !0), p.includes("controller") && u.controller && u.controller.control && w.controller && !w.controller.control && (i = !0), p.includes("pagination") && u.pagination && (u.pagination.el || v) && (w.pagination || !1 === w.pagination) && S && !S.el && (s = !0), p.includes("scrollbar") && u.scrollbar && (u.scrollbar.el || m) && (w.scrollbar || !1 === w.scrollbar) && T && !T.el && (r = !0), p.includes("navigation") && u.navigation && (u.navigation.prevEl || f) && (u.navigation.nextEl || h) && (w.navigation || !1 === w.navigation) && b && !b.prevEl && !b.nextEl && (l = !0);
                            let x = e => {
                                d[e] && (d[e].destroy(), "navigation" === e ? (d.isElement && (d[e].prevEl.remove(), d[e].nextEl.remove()), w[e].prevEl = void 0, w[e].nextEl = void 0, d[e].prevEl = void 0, d[e].nextEl = void 0) : (d.isElement && d[e].el.remove(), w[e].el = void 0, d[e].el = void 0))
                            };
                            p.includes("loop") && d.isElement && (w.loop && !u.loop ? n = !0 : !w.loop && u.loop ? a = !0 : o = !0), g.forEach(e => {
                                if (A(w[e]) && A(u[e])) Object.assign(w[e], u[e]), ("navigation" === e || "pagination" === e || "scrollbar" === e) && "enabled" in u[e] && !u[e].enabled && x(e);
                                else {
                                    let t = u[e];
                                    (!0 === t || !1 === t) && ("navigation" === e || "pagination" === e || "scrollbar" === e) ? !1 === t && x(e): w[e] = u[e]
                                }
                            }), g.includes("controller") && !i && d.controller && d.controller.control && w.controller && w.controller.control && (d.controller.control = w.controller.control), p.includes("children") && c && y && w.virtual.enabled ? (y.slides = c, y.update(!0)) : p.includes("virtual") && y && w.virtual.enabled && (c && (y.slides = c), y.update(!0)), p.includes("children") && c && w.loop && (o = !0), t && E.init() && E.update(!0), i && (d.controller.control = w.controller.control), s && (d.isElement && (!v || "string" == typeof v) && ((v = document.createElement("div")).classList.add("swiper-pagination"), v.part.add("pagination"), d.el.appendChild(v)), v && (w.pagination.el = v), S.init(), S.render(), S.update()), r && (d.isElement && (!m || "string" == typeof m) && ((m = document.createElement("div")).classList.add("swiper-scrollbar"), m.part.add("scrollbar"), d.el.appendChild(m)), m && (w.scrollbar.el = m), T.init(), T.updateSize(), T.setTranslate()), l && (d.isElement && (h && "string" != typeof h || ((h = document.createElement("div")).classList.add("swiper-button-next"), h.innerHTML = d.hostEl.constructor.nextButtonSvg, h.part.add("button-next"), d.el.appendChild(h)), f && "string" != typeof f || ((f = document.createElement("div")).classList.add("swiper-button-prev"), f.innerHTML = d.hostEl.constructor.prevButtonSvg, f.part.add("button-prev"), d.el.appendChild(f))), h && (w.navigation.nextEl = h), f && (w.navigation.prevEl = f), b.init(), b.update()), p.includes("allowSlideNext") && (d.allowSlideNext = u.allowSlideNext), p.includes("allowSlidePrev") && (d.allowSlidePrev = u.allowSlidePrev), p.includes("direction") && d.changeDirection(u.direction, !1), (n || o) && d.loopDestroy(), (a || o) && d.loopCreate(), d.update()
                        }({
                            swiper: S.current,
                            slides: R,
                            passedParams: P,
                            changedParams: e,
                            nextEl: y.current,
                            prevEl: E.current,
                            scrollbarEl: M.current,
                            paginationEl: x.current
                        }), () => {
                            U()
                        }
                    }), F(() => {
                        j(S.current)
                    }, [h]), n.createElement(r, $({
                        ref: w,
                        className: V(`${u}${s?` ${s}`:""}`)
                    }, k), n.createElement(H.Provider, {
                        value: S.current
                    }, W["container-start"], n.createElement(l, {
                        className: (void 0 === (i = C.wrapperClass) && (i = ""), i) ? i.includes("swiper-wrapper") ? i : `swiper-wrapper ${i}` : "swiper-wrapper"
                    }, W["wrapper-start"], C.virtual ? function(e, t, i) {
                        if (!i) return null;
                        let s = e => {
                                let i = e;
                                return e < 0 ? i = t.length + e : i >= t.length && (i -= t.length), i
                            },
                            r = e.isHorizontal() ? {
                                [e.rtlTranslate ? "right" : "left"]: `${i.offset}px`
                            } : {
                                top: `${i.offset}px`
                            },
                            {
                                from: l,
                                to: a
                            } = i,
                            o = e.params.loop ? -t.length : 0,
                            d = e.params.loop ? 2 * t.length : t.length,
                            c = [];
                        for (let e = o; e < d; e += 1) e >= l && e <= a && c.push(t[s(e)]);
                        return c.map((t, i) => n.cloneElement(t, {
                            swiper: e,
                            style: r,
                            key: t.props.virtualIndex || t.key || `slide-${i}`
                        }))
                    }(S.current, R, h) : R.map((e, t) => n.cloneElement(e, {
                        swiper: S.current,
                        swiperSlideIndex: t
                    })), W["wrapper-end"]), D(C) && n.createElement(n.Fragment, null, n.createElement("div", {
                        ref: E,
                        className: "swiper-button-prev"
                    }), n.createElement("div", {
                        ref: y,
                        className: "swiper-button-next"
                    })), N(C) && n.createElement("div", {
                        ref: M,
                        className: "swiper-scrollbar"
                    }), G(C) && n.createElement("div", {
                        ref: x,
                        className: "swiper-pagination"
                    }), W["container-end"]))
                });
            W.displayName = "Swiper";
            let q = (0, n.forwardRef)(function(e, t) {
                let {
                    tag: i = "div",
                    children: s,
                    className: r = "",
                    swiper: l,
                    zoom: a,
                    lazy: o,
                    virtualIndex: d,
                    swiperSlideIndex: c,
                    ...u
                } = void 0 === e ? {} : e, p = (0, n.useRef)(null), [h, f] = (0, n.useState)("swiper-slide"), [m, v] = (0, n.useState)(!1);

                function g(e, t, i) {
                    t === p.current && f(i)
                }
                F(() => {
                    if (void 0 !== c && (p.current.swiperSlideIndex = c), t && (t.current = p.current), p.current && l) {
                        if (l.destroyed) {
                            "swiper-slide" !== h && f("swiper-slide");
                            return
                        }
                        return l.on("_slideClass", g), () => {
                            l && l.off("_slideClass", g)
                        }
                    }
                }), F(() => {
                    l && p.current && !l.destroyed && f(l.getSlideClasses(p.current))
                }, [l]);
                let w = {
                        isActive: h.indexOf("swiper-slide-active") >= 0,
                        isVisible: h.indexOf("swiper-slide-visible") >= 0,
                        isPrev: h.indexOf("swiper-slide-prev") >= 0,
                        isNext: h.indexOf("swiper-slide-next") >= 0
                    },
                    S = () => "function" == typeof s ? s(w) : s;
                return n.createElement(i, $({
                    ref: p,
                    className: V(`${h}${r?` ${r}`:""}`),
                    "data-swiper-slide-index": d,
                    onLoad: () => {
                        v(!0)
                    }
                }, u), a && n.createElement(R.Provider, {
                    value: w
                }, n.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" == typeof a ? a : void 0
                }, S(), o && !m && n.createElement("div", {
                    className: "swiper-lazy-preloader"
                }))), !a && n.createElement(R.Provider, {
                    value: w
                }, S(), o && !m && n.createElement("div", {
                    className: "swiper-lazy-preloader"
                })))
            });
            q.displayName = "SwiperSlide"
        }
    }
]);