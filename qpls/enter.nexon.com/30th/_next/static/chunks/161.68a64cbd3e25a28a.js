(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [161], {
        2886: function(e) {
            e.exports = function(e) {
                function t(s) {
                    if (i[s]) return i[s].exports;
                    var r = i[s] = {
                        exports: {},
                        id: s,
                        loaded: !1
                    };
                    return e[s].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
                }
                var i = {};
                return t.m = e, t.c = i, t.p = "", t(0)
            }([function(e, t, i) {
                var s, r, n = function(e, t) {
                        function i() {
                            this.constructor = e
                        }
                        for (var s in t) a.call(t, s) && (e[s] = t[s]);
                        return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
                    },
                    a = {}.hasOwnProperty,
                    o = [].indexOf || function(e) {
                        for (var t = 0, i = this.length; t < i; t++)
                            if (t in this && this[t] === e) return t;
                        return -1
                    };
                s = i(1).EventEmitter, i(2), r = function(e) {
                    var t, i;

                    function s(e) {
                        var i, s, r;
                        for (s in this.running = !1, this.options = {}, this.frames = [], this.groups = new Map, this.freeWorkers = [], this.activeWorkers = [], this.setOptions(e), t) r = t[s], null == (i = this.options)[s] && (i[s] = r)
                    }
                    return n(s, e), t = {
                        workerScript: "gif.worker.js",
                        workers: 2,
                        repeat: 0,
                        background: "#fff",
                        quality: 10,
                        width: null,
                        height: null,
                        transparent: null,
                        debug: !1
                    }, i = {
                        delay: 500,
                        copy: !1
                    }, s.prototype.setOption = function(e, t) {
                        if (this.options[e] = t, null != this._canvas && ("width" === e || "height" === e)) return this._canvas[e] = t
                    }, s.prototype.setOptions = function(e) {
                        var t, i, s;
                        for (t in i = [], e) a.call(e, t) && (s = e[t], i.push(this.setOption(t, s)));
                        return i
                    }, s.prototype.addFrame = function(e, t) {
                        var s, r, n;
                        for (n in null == t && (t = {}), (s = {}).transparent = this.options.transparent, i) s[n] = t[n] || i[n];
                        if (null == this.options.width && this.setOption("width", e.width), null == this.options.height && this.setOption("height", e.height), "undefined" != typeof ImageData && null !== ImageData && e instanceof ImageData) s.data = e.data;
                        else if ("undefined" != typeof CanvasRenderingContext2D && null !== CanvasRenderingContext2D && e instanceof CanvasRenderingContext2D || "undefined" != typeof WebGLRenderingContext && null !== WebGLRenderingContext && e instanceof WebGLRenderingContext) t.copy ? s.data = this.getContextData(e) : s.context = e;
                        else {
                            if (null == e.childNodes) throw Error("Invalid image");
                            t.copy ? s.data = this.getImageData(e) : s.image = e
                        }
                        return (r = this.frames.length) > 0 && s.data && (this.groups.has(s.data) ? this.groups.get(s.data).push(r) : this.groups.set(s.data, [r])), this.frames.push(s)
                    }, s.prototype.render = function() {
                        var e, t;
                        if (this.running) throw Error("Already running");
                        if (null == this.options.width || null == this.options.height) throw Error("Width and height must be set prior to rendering");
                        if (this.running = !0, this.nextFrame = 0, this.finishedFrames = 0, this.imageParts = (function() {
                                var e, t, i;
                                for (i = [], e = 0, t = this.frames.length; 0 <= t ? e < t : e > t; 0 <= t ? ++e : --e) i.push(null);
                                return i
                            }).call(this), t = this.spawnWorkers(), !0 === this.options.globalPalette) this.renderNextFrame();
                        else
                            for (e = 0; 0 <= t ? e < t : e > t; 0 <= t ? ++e : --e) this.renderNextFrame();
                        return this.emit("start"), this.emit("progress", 0)
                    }, s.prototype.abort = function() {
                        for (var e; null != (e = this.activeWorkers.shift());) this.log("killing active worker"), e.terminate();
                        return this.running = !1, this.emit("abort")
                    }, s.prototype.spawnWorkers = function() {
                        var e, t, i, s;
                        return e = Math.min(this.options.workers, this.frames.length), (function() {
                            i = [];
                            for (var s = t = this.freeWorkers.length; t <= e ? s < e : s > e; t <= e ? s++ : s--) i.push(s);
                            return i
                        }).apply(this).forEach((s = this, function(e) {
                            var t;
                            return s.log("spawning worker " + e), (t = new Worker(s.options.workerScript)).onmessage = function(e) {
                                return s.activeWorkers.splice(s.activeWorkers.indexOf(t), 1), s.freeWorkers.push(t), s.frameFinished(e.data, !1)
                            }, s.freeWorkers.push(t)
                        })), e
                    }, s.prototype.frameFinished = function(e, t) {
                        var i, s, r, n;
                        if (this.finishedFrames++, t ? (i = this.frames.indexOf(e), s = this.groups.get(e.data)[0], this.log("frame " + (i + 1) + " is duplicate of " + s + " - " + this.activeWorkers.length + " active"), this.imageParts[i] = {
                                indexOfFirstInGroup: s
                            }) : (this.log("frame " + (e.index + 1) + " finished - " + this.activeWorkers.length + " active"), this.emit("progress", this.finishedFrames / this.frames.length), this.imageParts[e.index] = e), !0 === this.options.globalPalette && !t && (this.options.globalPalette = e.globalPalette, this.log("global palette analyzed"), this.frames.length > 2))
                            for (r = 1, n = this.freeWorkers.length; 1 <= n ? r < n : r > n; 1 <= n ? ++r : --r) this.renderNextFrame();
                        return o.call(this.imageParts, null) >= 0 ? this.renderNextFrame() : this.finishRendering()
                    }, s.prototype.finishRendering = function() {
                        var e, t, i, s, r, n, a, o, h, l, u, f, p, c, g, d, m, v, y, k;
                        for (m = this.imageParts, r = n = 0, l = m.length; n < l; r = ++n)(t = m[r]).indexOfFirstInGroup && (this.imageParts[r] = this.imageParts[t.indexOfFirstInGroup]);
                        for (h = 0, v = this.imageParts, a = 0, u = v.length; a < u; a++) h += ((t = v[a]).data.length - 1) * t.pageSize + t.cursor;
                        for (h += t.pageSize - t.cursor, this.log("rendering finished - filesize " + Math.round(h / 1e3) + "kb"), e = new Uint8Array(h), g = 0, y = this.imageParts, o = 0, f = y.length; o < f; o++)
                            for (k = (t = y[o]).data, i = c = 0, p = k.length; c < p; i = ++c) d = k[i], e.set(d, g), g += i === t.data.length - 1 ? t.cursor : t.pageSize;
                        return s = new Blob([e], {
                            type: "image/gif"
                        }), this.emit("finished", s, e)
                    }, s.prototype.renderNextFrame = function() {
                        var e, t, i, s, r;
                        if (0 === this.freeWorkers.length) throw Error("No free workers");
                        if (!(this.nextFrame >= this.frames.length)) return e = this.frames[this.nextFrame++], (t = this.frames.indexOf(e)) > 0 && this.groups.has(e.data) && this.groups.get(e.data)[0] !== t ? void setTimeout((r = this, function() {
                            return r.frameFinished(e, !0)
                        }), 0) : (s = this.freeWorkers.shift(), i = this.getTask(e), this.log("starting frame " + (i.index + 1) + " of " + this.frames.length), this.activeWorkers.push(s), s.postMessage(i))
                    }, s.prototype.getContextData = function(e) {
                        return e.getImageData(0, 0, this.options.width, this.options.height).data
                    }, s.prototype.getImageData = function(e) {
                        var t;
                        return null == this._canvas && (this._canvas = document.createElement("canvas"), this._canvas.width = this.options.width, this._canvas.height = this.options.height), (t = this._canvas.getContext("2d")).setFill = this.options.background, t.fillRect(0, 0, this.options.width, this.options.height), t.drawImage(e, 0, 0), this.getContextData(t)
                    }, s.prototype.getTask = function(e) {
                        var t, i;
                        if (i = {
                                index: t = this.frames.indexOf(e),
                                last: t === this.frames.length - 1,
                                delay: e.delay,
                                transparent: e.transparent,
                                width: this.options.width,
                                height: this.options.height,
                                quality: this.options.quality,
                                dither: this.options.dither,
                                globalPalette: this.options.globalPalette,
                                repeat: this.options.repeat,
                                canTransfer: !0
                            }, null != e.data) i.data = e.data;
                        else if (null != e.context) i.data = this.getContextData(e.context);
                        else {
                            if (null == e.image) throw Error("Invalid frame");
                            i.data = this.getImageData(e.image)
                        }
                        return i
                    }, s.prototype.log = function(e) {
                        if (this.options.debug) return console.log(e)
                    }, s
                }(s), e.exports = r
            }, function(e, t) {
                function i() {
                    this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
                }

                function s(e) {
                    return "function" == typeof e
                }

                function r(e) {
                    return "object" == typeof e && null !== e
                }
                e.exports = i, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._maxListeners = void 0, i.defaultMaxListeners = 10, i.prototype.setMaxListeners = function(e) {
                    if ("number" != typeof e || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
                    return this._maxListeners = e, this
                }, i.prototype.emit = function(e) {
                    var t, i, n, a, o, h;
                    if (this._events || (this._events = {}), "error" === e && (!this._events.error || r(this._events.error) && !this._events.error.length)) {
                        if (t = arguments[1], t instanceof Error) throw t;
                        var l = Error('Uncaught, unspecified "error" event. (' + t + ")");
                        throw l.context = t, l
                    }
                    if (void 0 === (i = this._events[e])) return !1;
                    if (s(i)) switch (arguments.length) {
                        case 1:
                            i.call(this);
                            break;
                        case 2:
                            i.call(this, arguments[1]);
                            break;
                        case 3:
                            i.call(this, arguments[1], arguments[2]);
                            break;
                        default:
                            a = Array.prototype.slice.call(arguments, 1), i.apply(this, a)
                    } else if (r(i))
                        for (a = Array.prototype.slice.call(arguments, 1), n = (h = i.slice()).length, o = 0; o < n; o++) h[o].apply(this, a);
                    return !0
                }, i.prototype.addListener = function(e, t) {
                    var n;
                    if (!s(t)) throw TypeError("listener must be a function");
                    return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, s(t.listener) ? t.listener : t), this._events[e] ? r(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, r(this._events[e]) && !this._events[e].warned && (n = void 0 === this._maxListeners ? i.defaultMaxListeners : this._maxListeners) && n > 0 && this._events[e].length > n && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this
                }, i.prototype.on = i.prototype.addListener, i.prototype.once = function(e, t) {
                    function i() {
                        this.removeListener(e, i), r || (r = !0, t.apply(this, arguments))
                    }
                    if (!s(t)) throw TypeError("listener must be a function");
                    var r = !1;
                    return i.listener = t, this.on(e, i), this
                }, i.prototype.removeListener = function(e, t) {
                    var i, n, a, o;
                    if (!s(t)) throw TypeError("listener must be a function");
                    if (!this._events || !this._events[e]) return this;
                    if (a = (i = this._events[e]).length, n = -1, i === t || s(i.listener) && i.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
                    else if (r(i)) {
                        for (o = a; o-- > 0;)
                            if (i[o] === t || i[o].listener && i[o].listener === t) {
                                n = o;
                                break
                            }
                        if (n < 0) return this;
                        1 === i.length ? (i.length = 0, delete this._events[e]) : i.splice(n, 1), this._events.removeListener && this.emit("removeListener", e, t)
                    }
                    return this
                }, i.prototype.removeAllListeners = function(e) {
                    var t, i;
                    if (!this._events) return this;
                    if (!this._events.removeListener) return 0 == arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
                    if (0 == arguments.length) {
                        for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                        return this.removeAllListeners("removeListener"), this._events = {}, this
                    }
                    if (s(i = this._events[e])) this.removeListener(e, i);
                    else if (i)
                        for (; i.length;) this.removeListener(e, i[i.length - 1]);
                    return delete this._events[e], this
                }, i.prototype.listeners = function(e) {
                    return this._events && this._events[e] ? s(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
                }, i.prototype.listenerCount = function(e) {
                    if (this._events) {
                        var t = this._events[e];
                        if (s(t)) return 1;
                        if (t) return t.length
                    }
                    return 0
                }, i.listenerCount = function(e, t) {
                    return e.listenerCount(t)
                }
            }, function(e, t) {
                var i, s, r, n, a;
                a = navigator.userAgent.toLowerCase(), n = navigator.platform.toLowerCase(), r = "ie" === (i = a.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/) || [null, "unknown", 0])[1] && document.documentMode, (s = {
                    name: "version" === i[1] ? i[3] : i[1],
                    version: r || parseFloat("opera" === i[1] && i[4] ? i[4] : i[2]),
                    platform: {
                        name: a.match(/ip(?:ad|od|hone)/) ? "ios" : (a.match(/(?:webos|android)/) || n.match(/mac|win|linux/) || ["other"])[0]
                    }
                })[s.name] = !0, s[s.name + parseInt(s.version, 10)] = !0, s.platform[s.platform.name] = !0, e.exports = s
            }])
        },
        161: function(e, t, i) {
            "use strict";
            i.d(t, {
                Z: function() {
                    return y
                }
            });
            var s = i(6063),
                r = i(7516),
                n = i(2886),
                a = i.n(n),
                o = i(2729);
            let h = {
                    workers: 2,
                    quality: 0,
                    workerScript: "/30th/gif/gif.worker.js",
                    repeat: 0,
                    width: 154,
                    height: 200,
                    dither: "FloydSteinberg"
                },
                l = {
                    key: "bg",
                    id: "defaultBg",
                    url: "/30th/avatar/maker/c.make-avatar/defaultBg.png"
                },
                u = {
                    key: "bgDesk",
                    id: "defaultBgDesk",
                    url: "/30th/avatar/maker/c.make-avatar/defaultBgDesk.png"
                };
            class f extends r.Scene {
                create() {
                    this.matter.world.update30Hz(), this.changeAsset(u), this.changeAsset(l), this.game.events.on("making-gif", () => {
                        this.setAllFirstFrame(), this.isMakingGIF = !0, this.gifMaxFrames = Math.max(...Object.keys(o.yg).filter(e => !!this[e]).map(e => Object.keys(this[e].texture.frames).length - 1))
                    }), this.game.events.on("change-asset", e => {
                        this.changeAsset(e)
                    }), this.game.events.on("remove-asset", e => {
                        this.removeAsset(e)
                    }), this.game.events.on("remove-asset-all-except-avatar", () => {
                        this.removeAssetAllExceptAvatar()
                    }), this.game.events.emit("load"), this.game.events.on("is-ready", () => {
                        this.game.events.emit("load")
                    })
                }
                update(e, t) {
                    this.isMakingGIF && (1 === this.gifMaxFrames && (this.GIF.addFrame(this.game.canvas.getContext("2d"), {
                        copy: !0,
                        delay: 1,
                        dispose: 1
                    }), this.completeMakingGIF = !0), Object.keys(o.yg).map(e => {
                        var t, i;
                        if (!this[e]) return;
                        let s = 0 !== this.frameTimer && this[e] && this["before" + e] === (null === (t = this[e]) || void 0 === t ? void 0 : t.anims.currentFrame.index);
                        return this["before" + e] = null === (i = this[e]) || void 0 === i ? void 0 : i.anims.currentFrame.index, s
                    }).filter(e => void 0 !== e).some(e => !e) && (this.frameTimer++, this.GIF.addFrame(this.game.canvas.getContext("2d"), {
                        copy: !0,
                        delay: 1,
                        dispose: 1
                    }), this.frameTimer > this.gifMaxFrames && (this.completeMakingGIF = !0))), this.completeMakingGIF && (this.completeMakingGIF = !1, this.isMakingGIF = !1, this.frameTimer = 0, this.GIF.on("finished", e => {
                        this.game.events.emit("response-making-gif", e), this.initGIF()
                    }), this.GIF.render())
                }
                initGIF() {
                    this.GIF = new(a())(h)
                }
                setAllFirstFrame() {
                    Object.keys(o.yg).forEach(e => {
                        var t, i;
                        this[e] && (null === (i = this[e]) || void 0 === i || null === (t = i.anims) || void 0 === t || t.restart())
                    })
                }
                changeAsset() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            key: "",
                            id: "",
                            url: "",
                            config: {},
                            depth: void 0
                        },
                        {
                            key: t,
                            url: i,
                            id: s,
                            config: n = {},
                            depth: a
                        } = e,
                        h = Object.assign(n, {
                            frameWidth: 154,
                            frameHeight: 200
                        });
                    this.load.spritesheet(s, i, h).once(r.Loader.Events.COMPLETE, () => {
                        if (!this.game.textures.list[s] || !o.yg[t].depth) return;
                        let e = this.anims.generateFrameNumbers(s);
                        this.anims.exists(s) || this.anims.create({
                            key: s,
                            frames: e,
                            frameRate: 8,
                            repeat: -1
                        }), this[t] ? this[t].setTexture(s).setDepth(null != a ? a : o.yg[t].depth).play(s).setName(s) : this[t] = this.add.sprite(154, 200, s).play(s).setOrigin(1).setDepth(null != a ? a : o.yg[t].depth).setName(s)
                    }).start()
                }
                removeAsset() {
                    var e, t;
                    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            key: ""
                        },
                        {
                            key: s
                        } = i;
                    ["defaultBgDesk", "defaultBg"].includes(null === (e = this[s]) || void 0 === e ? void 0 : e.name) || (null === (t = this[s]) || void 0 === t || t.destroy(), this[s] = null, "bgDesk" === s ? this.changeAsset(u) : "bg" === s && this.changeAsset(l))
                }
                removeAssetAllExceptAvatar() {
                    Object.keys(o.yg).forEach(e => {
                        var t;
                        "avatar" !== e && (["defaultBgDesk", "defaultBg"].includes(null === (t = this[e]) || void 0 === t ? void 0 : t.name) || this.removeAsset({
                            key: e
                        }))
                    })
                }
                constructor() {
                    super("QplayAvatarMaker"), this.isMakingGIF = !1, this.gifMaxFrames = 0, this.completeMakingGIF = !1, this.frameTimer = 0, this.beforeBGIndex = null, this.GIF = null, this.initGIF()
                }
            }
            var p = i(5876),
                c = i.n(p),
                g = i(4617);
            let d = {
                    type: r.AUTO,
                    width: 154,
                    height: 200,
                    backgroundColor: "00FFFFFF",
                    render: {
                        transparent: !0
                    },
                    input: {
                        mouse: {
                            preventDefaultWheel: !1
                        },
                        touch: {
                            capture: !1
                        },
                        windowEvents: !1
                    },
                    scene: [],
                    banner: !1,
                    audio: {
                        noAudio: !0
                    },
                    physics: {
                        default: "matter",
                        matter: {
                            debug: !1
                        }
                    }
                },
                m = e => new r.Game({ ...d,
                    ...e
                }),
                v = {};
            var y = (0, g.forwardRef)(function(e, t) {
                let {
                    config: i = v,
                    className: r = ""
                } = e, n = (0, g.useRef)(null), a = (0, g.useRef)(null), o = (0, g.useRef)(null);
                return (0, g.useLayoutEffect)(() => {
                    if (null === n.current && o.current) {
                        let e = document.createElement("canvas");
                        a.current = e, o.current.append(e), n.current = m({
                            type: Phaser.CANVAS,
                            parent: o.current,
                            canvas: a.current,
                            scene: [f],
                            ...i
                        }), "function" == typeof t ? t({
                            game: n.current,
                            scene: null
                        }) : t && (t.current = {
                            game: n.current,
                            scene: null
                        })
                    }
                    return () => {
                        try {
                            n.current && (n.current.destroy(!0), null !== n.current && (n.current = null))
                        } catch (e) {}
                    }
                }, [i, t]), (0, s.jsx)("div", {
                    ref: o,
                    className: c()(r)
                })
            })
        },
        5876: function(e, t) {
            var i;
            /*!
            	Copyright (c) 2018 Jed Watson.
            	Licensed under the MIT License (MIT), see
            	http://jedwatson.github.io/classnames
            */
            ! function() {
                "use strict";
                var s = {}.hasOwnProperty;

                function r() {
                    for (var e = "", t = 0; t < arguments.length; t++) {
                        var i = arguments[t];
                        i && (e = n(e, function(e) {
                            if ("string" == typeof e || "number" == typeof e) return e;
                            if ("object" != typeof e) return "";
                            if (Array.isArray(e)) return r.apply(null, e);
                            if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                            var t = "";
                            for (var i in e) s.call(e, i) && e[i] && (t = n(t, i));
                            return t
                        }(i)))
                    }
                    return e
                }

                function n(e, t) {
                    return t ? e ? e + " " + t : e + t : e
                }
                e.exports ? (r.default = r, e.exports = r) : void 0 !== (i = (function() {
                    return r
                }).apply(t, [])) && (e.exports = i)
            }()
        }
    }
]);