(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [397], {
        3397: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                AvatarContext: function() {
                    return Q
                },
                default: function() {
                    return B
                }
            });
            var n = t(6063),
                s = t(9015),
                r = t(4673),
                i = t.n(r),
                o = t(4504),
                l = t.n(o),
                c = t(4617),
                d = t(9745),
                v = t(1003);
            let m = i().bind(l());
            var u = function(e) {
                    let {
                        setPhase: a,
                        setContainerRef: t
                    } = e, {
                        avatar: s,
                        isMute: r,
                        setIsMute: i,
                        onClose: o,
                        a2sObjectName: l
                    } = (0, c.useContext)(Q);
                    return (0, n.jsxs)("div", {
                        ref: t,
                        className: m("container"),
                        children: [(0, n.jsx)(d.Z, {
                            "data-a2s-web-obj": l,
                            "data-a2s-option-name": "Close",
                            "data-a2s-option-pagecode": "65478",
                            children: (0, n.jsx)("button", {
                                className: m("close-button"),
                                onClick: o,
                                children: "close"
                            })
                        }), (0, n.jsxs)("div", {
                            children: [(0, n.jsx)("h1", {
                                className: m("title"),
                                children: "추억의 아바타 만들기"
                            }), (0, n.jsx)(d.Z, {
                                "data-a2s-web-obj": l,
                                "data-a2s-option-name": "Start",
                                "data-a2s-option-pagecode": "65478",
                                children: (0, n.jsx)("button", {
                                    className: m("start-button"),
                                    onClick: () => {
                                        (0, v.k)("event", "avatar_아바타START"), s.baseData.gender ? a(2) : a(1)
                                    },
                                    disabled: !s.loaded,
                                    children: "start"
                                })
                            }), (0, n.jsx)(d.Z, {
                                "data-a2s-web-obj": l,
                                "data-a2s-option-name": "Music",
                                "data-a2s-option-type": r ? "On" : "Off",
                                "data-a2s-option-pagecode": "65478",
                                children: (0, n.jsxs)("button", {
                                    className: m("sound-checker"),
                                    onClick: () => i(e => !e),
                                    children: [(0, n.jsx)("span", {
                                        className: m("sound-checkbox"),
                                        children: !r && (0, n.jsx)("span", {
                                            className: m("sound-check")
                                        })
                                    }), (0, n.jsx)("span", {
                                        className: m("sound-checker-text"),
                                        children: "시작과 함께 음악 재생"
                                    })]
                                })
                            })]
                        }), (0, n.jsx)("div", {
                            className: m("css-preloader")
                        })]
                    })
                },
                _ = t(9214),
                p = t.n(_);
            let w = i().bind(p()),
                h = {
                    female: {
                        type: "avatar",
                        fileUrl: "avatar/female/(female)_01_cmodelf.png",
                        assetKey: "1",
                        gender: "female"
                    },
                    male: {
                        type: "avatar",
                        fileUrl: "avatar/male/(male)_01_cmodelm.png",
                        assetKey: "1",
                        gender: "male"
                    }
                },
                g = {
                    avatar: {},
                    hair: {},
                    bg: {},
                    bgDeco: {},
                    bgDesk: {},
                    effect: {},
                    wing: {},
                    clothes: {},
                    eye: {},
                    ear: {},
                    mouth: {}
                };
            var b = function(e) {
                    let {
                        children: a,
                        setPhase: t,
                        setContainerRef: s
                    } = e, r = (0, c.useContext)(Q), {
                        a2sObjectName: i
                    } = r, o = e => {
                        let a = Object.assign({}, g, {
                            avatar: h[e]
                        });
                        r.setAvatar({ ...r.avatar,
                            baseData: {
                                gender: e
                            },
                            tempSavedAvatar: a,
                            undo: [],
                            redo: [],
                            history: []
                        }), t(2)
                    };
                    return (0, n.jsxs)("div", {
                        ref: s,
                        className: w("container"),
                        children: [a, (0, n.jsxs)("div", {
                            className: w("content-wrapper"),
                            children: [(0, n.jsx)("div", {
                                className: w("description"),
                                children: "아바타의 성별을 선택해 주세요."
                            }), (0, n.jsxs)("ul", {
                                className: w("gender-container"),
                                children: [(0, n.jsxs)("li", {
                                    className: w("gender-item"),
                                    children: [(0, n.jsx)("div", {
                                        className: w("male"),
                                        children: "남자"
                                    }), (0, n.jsx)(d.Z, {
                                        "data-a2s-web-obj": i,
                                        "data-a2s-option-name": "Male",
                                        "data-a2s-option-pagecode": "65478",
                                        children: (0, n.jsx)("button", {
                                            className: w("select-button"),
                                            onClick: () => o("male")
                                        })
                                    })]
                                }), (0, n.jsxs)("li", {
                                    className: w("gender-item"),
                                    children: [(0, n.jsx)("div", {
                                        className: w("female"),
                                        children: "여자"
                                    }), (0, n.jsx)(d.Z, {
                                        "data-a2s-web-obj": i,
                                        "data-a2s-option-name": "Female",
                                        "data-a2s-option-pagecode": "65478",
                                        children: (0, n.jsx)("button", {
                                            className: w("select-button"),
                                            onClick: () => o("female")
                                        })
                                    })]
                                })]
                            })]
                        }), (0, n.jsx)("div", {
                            className: w("css-preloader")
                        })]
                    })
                },
                f = t(2235),
                y = t.n(f),
                x = t(161),
                k = t(500),
                j = t(6409),
                A = t(5145),
                N = t(2729),
                S = t(4202),
                M = t(992);
            let C = i().bind(y());
            var O = function(e) {
                    let {
                        children: a,
                        setPhase: t,
                        setContainerRef: s
                    } = e, r = (0, c.useContext)(Q), {
                        a2sObjectName: i
                    } = r, [o, l] = (0, c.useState)(["avatar"]), [v, m] = (0, c.useState)([]), [u, _] = (0, c.useState)(!0), {
                        isMobile: p
                    } = (0, S.dD)(), w = (0, c.useRef)(null), h = (0, c.useRef)(null), g = (0, c.useRef)(null), b = (0, c.useRef)(null), f = (0, c.useRef)(null), {
                        ref: y,
                        isClicked: O,
                        setIsClicked: D
                    } = (0, S.A8)(), {
                        refs: R,
                        areClicked: J
                    } = (0, S.ZT)({
                        length: 8
                    });
                    async function U() {
                        var e, a, n;
                        if (!Object.keys(r.avatar.tempSavedAvatar).some(e => {
                                var a;
                                return "avatar" !== e && (null === (a = r.avatar.tempSavedAvatar[e]) || void 0 === a ? void 0 : a.fileUrl)
                            })) return A.lp.openMessage({
                            messages: ["아바타를 생성하려면 아이템을 착용해 주세요."]
                        });
                        let s = null === (n = window.inface) || void 0 === n ? void 0 : null === (a = n.auth) || void 0 === a ? void 0 : null === (e = a.isSignedIn) || void 0 === e ? void 0 : e.call(a),
                            o = JSON.stringify(r.avatar.tempSavedAvatar);
                        return s ? await (0, j.J)().saveAvatar({
                            avatarInfo: o
                        }) : (sessionStorage.setItem(N.mb, o), sessionStorage.setItem(N.R0, o)), (0, d.D)(i, {
                            name: "Save",
                            pagecode: "65478"
                        }), t(3)
                    }
                    async function I(e) {
                        let a = JSON.parse(JSON.stringify(e));
                        if (e.avatar.fileUrl !== r.avatar.tempSavedAvatar.avatar.fileUrl) {
                            let t = e.avatar.assetKey,
                                n = Object.keys(e).filter(a => e[a].fileUrl).map(async n => {
                                    let s = e[n];
                                    if (["avatar", "bg", "wing", "effect"].includes(s.type)) return;
                                    let i = await (0, j.J)().getAvatarItem({
                                        type: s.type,
                                        avatarIndex: t,
                                        gender: r.avatar.baseData.gender,
                                        assetKey: s.assetKey
                                    });
                                    a[s.type] = { ...a[s.type],
                                        ...i
                                    }
                                });
                            await Promise.all(n)
                        }
                        Z(a)
                    }

                    function Z(e) {
                        r.avatar.undo.push(JSON.parse(JSON.stringify(r.avatar.tempSavedAvatar))), r.avatar.redo = [], r.setAvatar({ ...r.avatar,
                            tempSavedAvatar: e,
                            undo: r.avatar.undo,
                            redo: r.avatar.redo
                        }), E(e)
                    }

                    function E(e) {
                        Object.keys(e).forEach(a => {
                            let t = e[a];
                            t.fileUrl ? (["bg", "bgDesk", "bgDeco"].includes(a) && (t.depth = N.yg[a].depth), g.current.game.events.emit("change-asset", {
                                key: null != a ? a : t.type,
                                id: t.fileUrl,
                                url: (0, k.xn)(N.Wl, t.fileUrl),
                                depth: t.depth
                            })) : "bg" === a ? (g.current.game.events.emit("remove-asset", {
                                key: a
                            }), g.current.game.events.emit("remove-asset", {
                                key: "bgDeco"
                            }), g.current.game.events.emit("remove-asset", {
                                key: "bgDesk"
                            })) : g.current.game.events.emit("remove-asset", {
                                key: a
                            })
                        })
                    }
                    async function P(e) {
                        return await (0, j.J)().getStoreItems({
                            type: e,
                            gender: r.avatar.baseData.gender
                        })
                    }
                    async function K(e) {
                        let a = e[e.length - 1],
                            t = await P(a);
                        m(null != t ? t : []), l(e)
                    }(0, c.useEffect)(() => {
                        let e = e => {
                            let a = e.target,
                                t = b.current,
                                n = f.current;
                            t && n && t.contains(a) && !n.contains(a) && _(!1)
                        };
                        return window.addEventListener("click", e), () => window.removeEventListener("click", e)
                    }, []), (0, c.useEffect)(() => {
                        g.current && (g.current.game.events.on("load", () => {
                            E(r.avatar.tempSavedAvatar)
                        }), g.current.game.events.emit("is-ready"))
                    }, []), (0, c.useEffect)(() => {
                        h.current && (h.current.scrollTop = 0), w.current && (w.current.scrollTop = 0)
                    }, [o]), (0, c.useEffect)(() => {
                        K(["avatar"])
                    }, []);
                    let L = o[o.length - 1],
                        T = r.avatar.tempSavedAvatar[L];
                    return (0, n.jsxs)("div", {
                        className: C("container"),
                        ref: e => {
                            s(e), b.current = e
                        },
                        children: [(0, n.jsxs)("div", {
                            className: C("make-avatar-container"),
                            children: [a, (0, n.jsxs)("div", {
                                className: C("my-avatar-container"),
                                children: [(0, n.jsxs)("div", {
                                    className: C("my-avatar-wrapper"),
                                    children: [(0, n.jsx)("div", {
                                        className: C("my-avatar"),
                                        children: (0, n.jsx)("div", {
                                            className: C("my-avatar-canvas-container"),
                                            children: (0, n.jsxs)("div", {
                                                ref: y,
                                                className: C("my-avatar-canvas-wrapper"),
                                                children: [(0, n.jsx)(x.Z, {
                                                    ref: g,
                                                    className: C("my-avatar-canvas")
                                                }), (0, n.jsx)("div", {
                                                    className: C("my-avatar-take-off-all-wrapper", p && O && "take-off-hover-on"),
                                                    children: (0, n.jsx)(d.Z, {
                                                        "data-a2s-web-obj": i,
                                                        "data-a2s-option-name": "All_Off",
                                                        "data-a2s-option-pagecode": "65478",
                                                        children: (0, n.jsx)("button", {
                                                            className: C("my-avatar-take-off-all-button"),
                                                            onClick: function() {
                                                                r.avatar.undo.push(JSON.parse(JSON.stringify(r.avatar.tempSavedAvatar))), r.avatar.redo = [], Object.keys(r.avatar.tempSavedAvatar).forEach(e => {
                                                                    "avatar" !== e && (r.avatar.tempSavedAvatar[e] = {})
                                                                }), r.setAvatar({ ...r.avatar,
                                                                    tempSavedAvatar: r.avatar.tempSavedAvatar
                                                                }), g.current.game.events.emit("remove-asset-all-except-avatar");
                                                                let e = JSON.parse(JSON.stringify(r.avatar.tempSavedAvatar));
                                                                Object.keys(e).forEach(a => {
                                                                    "avatar" !== a && (e[a] = {})
                                                                }), r.setAvatar({ ...r.avatar,
                                                                    tempSavedAvatar: e
                                                                }), D(!1)
                                                            }
                                                        })
                                                    })
                                                })]
                                            })
                                        })
                                    }), (0, n.jsxs)("div", {
                                        className: C("my-avatar-controller"),
                                        children: [(0, n.jsx)(d.Z, {
                                            "data-a2s-web-obj": i,
                                            "data-a2s-option-name": "Undo",
                                            "data-a2s-option-pagecode": "65478",
                                            children: (0, n.jsx)("button", {
                                                className: C("my-avatar-undo"),
                                                disabled: r.avatar.undo.length <= 0,
                                                onClick: function() {
                                                    let e = r.avatar.undo.pop();
                                                    r.avatar.redo.push(JSON.parse(JSON.stringify(r.avatar.tempSavedAvatar))), r.setAvatar({ ...r.avatar,
                                                        tempSavedAvatar: e,
                                                        undo: r.avatar.undo,
                                                        redo: r.avatar.redo
                                                    }), E(e)
                                                }
                                            })
                                        }), (0, n.jsx)(d.Z, {
                                            "data-a2s-web-obj": i,
                                            "data-a2s-option-name": "Redo",
                                            "data-a2s-option-pagecode": "65478",
                                            children: (0, n.jsx)("button", {
                                                className: C("my-avatar-redo"),
                                                disabled: r.avatar.redo.length <= 0,
                                                onClick: function() {
                                                    let e = r.avatar.redo.pop();
                                                    r.avatar.undo.push(JSON.parse(JSON.stringify(r.avatar.tempSavedAvatar))), r.setAvatar({ ...r.avatar,
                                                        tempSavedAvatar: e,
                                                        undo: r.avatar.undo,
                                                        redo: r.avatar.redo
                                                    }), E(e)
                                                }
                                            })
                                        })]
                                    })]
                                }), (0, n.jsx)(d.Z, {
                                    "data-a2s-web-obj": i,
                                    "data-a2s-option-name": "Gender_Again",
                                    "data-a2s-option-pagecode": "65478",
                                    children: (0, n.jsx)("button", {
                                        className: C("my-avatar-change-gender"),
                                        onClick: () => t(1)
                                    })
                                }), (0, n.jsx)("div", {
                                    className: C("my-avatar-change-notice")
                                })]
                            }), (0, n.jsx)("div", {
                                className: C("wearing-item-list-wrapper"),
                                children: (0, n.jsx)("ul", {
                                    className: C("wearing-item-list"),
                                    children: Array.from({
                                        length: 8
                                    }).map((e, a) => {
                                        var t;
                                        let s = N.P[a],
                                            o = null === (t = r.avatar.tempSavedAvatar[s]) || void 0 === t ? void 0 : t.store;
                                        return (0, n.jsx)("li", {
                                            ref: e => R.current[a] = e,
                                            className: C("wearing-item-slot", "wearing-item-".concat(s)),
                                            children: o && (0, n.jsxs)("div", {
                                                className: C("wearing-item-image-container"),
                                                children: [(0, n.jsx)(M.default, {
                                                    alt: "착용 아이템 이미지",
                                                    width: "70",
                                                    height: "78",
                                                    className: C("wearing-item-image"),
                                                    src: (0, k.xn)(N.Wl, o.fileUrl)
                                                }), (0, n.jsx)("div", {
                                                    className: C("take-off-item-wrapper", p && J[a] && "take-off-item-hover-on"),
                                                    children: (0, n.jsx)(d.Z, {
                                                        "data-a2s-web-obj": i,
                                                        "data-a2s-option-name": "Wearing",
                                                        "data-a2s-option-type": "Off",
                                                        "data-a2s-option-value": N.JP[s],
                                                        "data-a2s-option-pagecode": "65478",
                                                        children: (0, n.jsx)("button", {
                                                            className: C("take-off-item-button"),
                                                            onClick: () => {
                                                                let e;
                                                                return r.avatar.undo.push(JSON.parse(JSON.stringify(r.avatar.tempSavedAvatar))), r.avatar.redo = [], e = JSON.parse(JSON.stringify(r.avatar.tempSavedAvatar)), void("bg" === s ? (g.current.game.events.emit("remove-asset", {
                                                                    key: s
                                                                }), g.current.game.events.emit("remove-asset", {
                                                                    key: "bgDeco"
                                                                }), g.current.game.events.emit("remove-asset", {
                                                                    key: "bgDesk"
                                                                }), Object.assign(e, {
                                                                    [s]: {},
                                                                    bgDeco: {},
                                                                    bgDesk: {}
                                                                })) : (g.current.game.events.emit("remove-asset", {
                                                                    key: s
                                                                }), Object.assign(e, {
                                                                    [s]: {}
                                                                })), r.setAvatar({ ...r.avatar,
                                                                    tempSavedAvatar: e
                                                                }))
                                                            }
                                                        })
                                                    })
                                                })]
                                            })
                                        }, s)
                                    })
                                })
                            }), (0, n.jsx)(d.Z, {
                                "data-a2s-web-obj": i,
                                "data-a2s-option-name": "Avatar_Creation",
                                "data-a2s-option-pagecode": "65478",
                                children: (0, n.jsx)("button", {
                                    className: C("create-button"),
                                    onClick: U,
                                    children: "아바타 생성하기"
                                })
                            }), (0, n.jsxs)("div", {
                                ref: f,
                                className: C("avatar-item-store", u && "on"),
                                children: [(0, n.jsx)("div", {
                                    className: C("avatar-item-store-tabs"),
                                    children: N.$h.map(e => {
                                        var a, t;
                                        let s = e.assetType,
                                            r = null === (t = e.children) || void 0 === t ? void 0 : null === (a = t[0]) || void 0 === a ? void 0 : a.assetType,
                                            l = [s];
                                        r && l.push(r);
                                        let c = N.JP[s];
                                        return (0, n.jsx)(d.Z, {
                                            "data-a2s-web-obj": i,
                                            "data-a2s-option-name": "Tab",
                                            "data-a2s-option-value": c,
                                            "data-a2s-option-pagecode": "65478",
                                            children: (0, n.jsx)("button", {
                                                className: C("store-tab", "store-tab-".concat(s), o.includes(s) && "on"),
                                                onClick: () => {
                                                    K(l), _(!0)
                                                }
                                            })
                                        }, s)
                                    })
                                }), (0, n.jsxs)("div", {
                                    className: C("avatar-item-store-show-window"),
                                    children: [(0, n.jsx)("div", {
                                        className: C("avatar-item-store-show-window-container"),
                                        children: o.includes("avatar") ? (0, n.jsx)("div", {
                                            className: C("show-window-avatar"),
                                            children: (0, n.jsx)("div", {
                                                className: C("show-window-list-wrapper"),
                                                children: (0, n.jsx)("ul", {
                                                    ref: h,
                                                    className: C("show-window-list", "show-window-avatar-list"),
                                                    children: v.map((e, a) => {
                                                        let t = T.fileUrl === e.fileUrl;
                                                        return (0, n.jsx)("li", {
                                                            className: C("show-window-avatar-inventory", t && "wearing-avatar-inventory"),
                                                            onClick: () => {
                                                                I({ ...r.avatar.tempSavedAvatar,
                                                                    avatar: { ...e,
                                                                        assetKey: a + 1
                                                                    }
                                                                })
                                                            },
                                                            children: (0, n.jsx)(M.default, {
                                                                alt: "아바타 이미지",
                                                                width: "97",
                                                                height: "70",
                                                                className: C("avatar-inventory-image"),
                                                                src: (0, k.xn)(N.Wl, e.fileUrl)
                                                            })
                                                        }, e.fileUrl)
                                                    })
                                                })
                                            })
                                        }) : (0, n.jsxs)("div", {
                                            className: C("show-window-item"),
                                            children: [
                                                ["face", "accessory"].includes(o[0]) && (0, n.jsx)("ul", {
                                                    className: C("show-window-sub-tab-list"),
                                                    children: N.$h.find(e => e.assetType === o[0]).children.map(e => (0, n.jsx)("li", {
                                                        className: C("show-window-sub-tab-list-item"),
                                                        children: (0, n.jsx)(d.Z, {
                                                            "data-a2s-web-obj": i,
                                                            "data-a2s-option-name": "Subtab",
                                                            "data-a2s-option-value": N.JP[e.assetType],
                                                            "data-a2s-option-pagecode": "65478",
                                                            children: (0, n.jsx)("button", {
                                                                className: C("show-window-sub-tab", "show-window-sub-tab-".concat(e.assetType), o.includes(e.assetType) && "on"),
                                                                onClick: () => {
                                                                    K([o[0], e.assetType])
                                                                }
                                                            })
                                                        })
                                                    }, e.assetType))
                                                }), (0, n.jsx)("div", {
                                                    className: C("show-window-list-wrapper"),
                                                    children: (0, n.jsx)("ul", {
                                                        ref: w,
                                                        className: C("show-window-list", "show-window-item-list"),
                                                        children: v.map(e => {
                                                            let a = T.assetKey === e.assetKey;
                                                            return (0, n.jsx)(d.Z, {
                                                                "data-a2s-web-obj": i,
                                                                "data-a2s-option-name": "Items",
                                                                "data-a2s-option-type": "On",
                                                                "data-a2s-option-pagecode": "65478",
                                                                children: (0, n.jsx)("li", {
                                                                    className: C("show-window-item-inventory", a && "wearing-item-inventory"),
                                                                    onClick: async () => {
                                                                        let a = { ...r.avatar.tempSavedAvatar
                                                                        };
                                                                        if ("bg" === L) {
                                                                            let t = {
                                                                                    bg: 0,
                                                                                    bgDeco: 1,
                                                                                    bgDesk: 2
                                                                                },
                                                                                n = Object.keys(t).map(a => (0, j.J)().getAvatarItem({
                                                                                    type: "bg",
                                                                                    avatarIndex: t[a],
                                                                                    gender: r.avatar.baseData.gender,
                                                                                    assetKey: e.assetKey
                                                                                })),
                                                                                [s, i, o] = await Promise.all(n);
                                                                            a = { ...r.avatar.tempSavedAvatar,
                                                                                bg: { ...s,
                                                                                    store: e
                                                                                },
                                                                                bgDeco: i,
                                                                                bgDesk: o
                                                                            }
                                                                        } else if (["effect", "wing"].includes(L)) {
                                                                            let t = await (0, j.J)().getAvatarItem({
                                                                                type: L,
                                                                                avatarIndex: "common",
                                                                                gender: r.avatar.baseData.gender,
                                                                                assetKey: e.assetKey
                                                                            });
                                                                            a = { ...r.avatar.tempSavedAvatar,
                                                                                [L]: { ...t,
                                                                                    store: e
                                                                                }
                                                                            }
                                                                        } else {
                                                                            let t = await (0, j.J)().getAvatarItem({
                                                                                type: L,
                                                                                avatarIndex: r.avatar.tempSavedAvatar.avatar.assetKey,
                                                                                gender: r.avatar.baseData.gender,
                                                                                assetKey: e.assetKey
                                                                            });
                                                                            a = { ...r.avatar.tempSavedAvatar,
                                                                                [L]: { ...t,
                                                                                    store: e
                                                                                }
                                                                            }
                                                                        }
                                                                        Z(a)
                                                                    },
                                                                    children: (0, n.jsx)(M.default, {
                                                                        className: C("item-inventory-image"),
                                                                        width: "70",
                                                                        height: "78",
                                                                        alt: "아이템 이미지",
                                                                        src: (0, k.xn)(N.Wl, e.fileUrl)
                                                                    })
                                                                })
                                                            }, e.fileUrl)
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: C("close-store-window-button-dimmed"),
                                        children: (0, n.jsx)("button", {
                                            className: C("close-store-window-button"),
                                            onClick: () => {
                                                _(!1)
                                            }
                                        })
                                    })]
                                })]
                            })]
                        }), (0, n.jsx)("div", {
                            className: C("css-preloader")
                        })]
                    })
                },
                D = t(8866),
                R = t.n(D),
                J = t(6836),
                U = t(5502),
                I = t(158);
            let Z = i().bind(R());
            var E = function(e) {
                    var a, t, s, r, i, o, l, m;
                    let {
                        children: u,
                        setPhase: _,
                        userProfile: p,
                        setContainerRef: w
                    } = e, h = (0, c.useContext)(Q), {
                        a2sObjectName: g
                    } = h, b = (0, c.useRef)(null), f = (0, c.useRef)(null), {
                        randomContestItems: y
                    } = (0, S.OM)();
                    async function j() {
                        (0, v.k)("event", "avatar_이미지저장"), (0, d.D)(g, {
                            name: "Download",
                            pagecode: "65478"
                        });
                        let e = f.current;
                        e && (["iOS"].includes((0, J.UAParser)().os.name) && await A.lp.openMessage({
                            messages: ["iOS의 경우 이미지는", "파일앱에 다운로드됩니다."]
                        }), e.classList.add(Z("download-button-loading")), b.current.game.events.emit("making-gif"), b.current.game.events.once("response-making-gif", a => {
                            let t = document.createElement("a");
                            t.download = "avatar", t.href = URL.createObjectURL(a), t.dataset.downloadurl = ["application/octet-stream", t.download, t.href].join(":"), t.click(), e.classList.remove(Z("download-button-loading"))
                        }))
                    }
                    return (0, c.useEffect)(() => {
                        b.current.game.events.on("load", () => {
                            ! function() {
                                let e = h.avatar.tempSavedAvatar;
                                Object.keys(e).forEach(a => {
                                    let t = e[a];
                                    t.fileUrl && b.current.game.events.emit("change-asset", {
                                        key: null != a ? a : t.type,
                                        id: t.fileUrl,
                                        url: (0, k.xn)(N.Wl, t.fileUrl),
                                        depth: t.depth
                                    })
                                })
                            }()
                        }), b.current.game.events.emit("is-ready")
                    }, [h.avatar.tempSavedAvatar]), (0, n.jsxs)("div", {
                        ref: w,
                        className: Z("container", !(y && y.length > 0) && "no-contest"),
                        children: [u, (0, n.jsx)("div", {
                            className: Z("scroll-view"),
                            children: (0, n.jsxs)("div", {
                                className: Z("content"),
                                children: [(0, n.jsxs)("h1", {
                                    className: Z("title"),
                                    children: [(null === (s = window.inface) || void 0 === s ? void 0 : null === (t = s.auth) || void 0 === t ? void 0 : null === (a = t.isSignedIn) || void 0 === a ? void 0 : a.call(t)) && (0, n.jsxs)(n.Fragment, {
                                        children: [(0, n.jsx)("strong", {
                                            className: Z("nickname"),
                                            children: null === (m = window.inface) || void 0 === m ? void 0 : null === (l = m.auth) || void 0 === l ? void 0 : null === (o = l.user) || void 0 === o ? void 0 : null === (i = o._profile) || void 0 === i ? void 0 : null === (r = i.local_profile_props) || void 0 === r ? void 0 : r.nexon_name
                                        }), "님의 ", (0, n.jsx)("br", {
                                            className: Z("break-point")
                                        })]
                                    }), "아바타가 생성되었습니다!"]
                                }), (0, n.jsxs)("div", {
                                    className: Z("avatar-container"),
                                    children: [(0, n.jsx)("div", {
                                        className: Z("avatar"),
                                        children: (0, n.jsx)(x.Z, {
                                            ref: b,
                                            className: Z("canvas-container")
                                        })
                                    }), (0, n.jsxs)("div", {
                                        className: Z("circle-button-container"),
                                        children: [(0, n.jsx)("button", {
                                            ref: f,
                                            className: Z("download-button"),
                                            onClick: j,
                                            children: "download"
                                        }), (0, n.jsx)("div", {
                                            className: Z("share-button"),
                                            children: (0, n.jsx)(U.Zh, {
                                                hasButton: !1,
                                                tooltipType: "right",
                                                url: "https://enter.nexon.com/30th/avatar",
                                                a2s: {
                                                    object: g,
                                                    name: "Share_link"
                                                }
                                            })
                                        })]
                                    })]
                                }), (0, n.jsx)(d.Z, {
                                    "data-a2s-web-obj": g,
                                    "data-a2s-option-name": "Contest_Write",
                                    "data-a2s-option-pagecode": "65478",
                                    children: (0, n.jsx)("button", {
                                        className: Z("contest-submit-button"),
                                        onClick: async () => {
                                            var e, a, t;
                                            if (!(null === (t = window.inface) || void 0 === t ? void 0 : null === (a = t.auth) || void 0 === a ? void 0 : null === (e = a.isSignedIn) || void 0 === e ? void 0 : e.call(a))) {
                                                let e = JSON.stringify(h.avatar.tempSavedAvatar);
                                                return sessionStorage.setItem(N.mb, e), sessionStorage.setItem(N.R0, e), await A.lp.openPreSubmitNeedLogin()
                                            }
                                            return (0, d.D)(g, {
                                                name: "Save",
                                                pagecode: "65478"
                                            }), _(4)
                                        },
                                        children: "콘테스트 제출하기"
                                    })
                                }), (0, n.jsx)(d.Z, {
                                    "data-a2s-web-obj": g,
                                    "data-a2s-option-name": "Create_Again",
                                    "data-a2s-option-pagecode": "65478",
                                    children: (0, n.jsx)("button", {
                                        className: Z("remake-button"),
                                        onClick: () => _(2),
                                        children: "아바타 다시 만들기"
                                    })
                                }), y && y.length > 0 && (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)("div", {
                                        className: Z("dotted-line")
                                    }), (0, n.jsx)("div", {
                                        className: Z("contest-text"),
                                        children: "콘테스트에 참여한 다른 코디도 확인해 보세요!"
                                    }), (0, n.jsx)("ul", {
                                        className: Z("contest-image-list"),
                                        children: y.map(e => (0, n.jsx)("li", {
                                            className: Z("contest-image-wrapper"),
                                            children: (0, n.jsx)(M.default, {
                                                alt: "다른 코디",
                                                width: "219",
                                                height: "276",
                                                className: Z("contest-image"),
                                                src: e.thumbnailUrl
                                            })
                                        }, e.contentId))
                                    }), (0, n.jsx)(d.Z, {
                                        "data-a2s-web-obj": g,
                                        "data-a2s-option-name": "Contest_Other",
                                        "data-a2s-option-pagecode": "65478",
                                        children: (0, n.jsx)(I.default, {
                                            className: Z("contest-go-button"),
                                            href: "/avatar-contest",
                                            target: "_blank",
                                            children: "더 많은 콘테스트 참여작 보러가기"
                                        })
                                    })]
                                })]
                            })
                        }), (0, n.jsx)("div", {
                            className: Z("css-preloader")
                        })]
                    })
                },
                P = t(9262),
                K = t.n(P),
                L = t(1280),
                T = t(4582),
                W = t(3773);
            let F = i().bind(K());
            var H = function(e) {
                    var a, t, s, r, i;
                    let {
                        children: o,
                        userProfile: l,
                        setContainerRef: m
                    } = e, u = (0, c.useContext)(Q), {
                        a2sObjectName: _
                    } = u, [p, w] = (0, c.useState)({
                        title: "",
                        description: ""
                    }), [h, g] = (0, c.useState)({
                        url: "",
                        orgFilename: "",
                        fileSize: "",
                        filePath: ""
                    }), b = (0, c.useRef)(null), {
                        local_profile_props: f = {}
                    } = null !== (i = null === (r = window) || void 0 === r ? void 0 : null === (s = r.inface) || void 0 === s ? void 0 : null === (t = s.auth) || void 0 === t ? void 0 : null === (a = t._user) || void 0 === a ? void 0 : a._profile) && void 0 !== i ? i : {}, y = e => {
                        let {
                            name: a,
                            value: t
                        } = e.target;
                        w(e => ({ ...e,
                            [a]: t
                        }))
                    };
                    (0, c.useEffect)(() => {
                        b.current.game.events.on("load", async () => {
                            (function() {
                                let e = u.avatar.tempSavedAvatar;
                                Object.keys(e).forEach(a => {
                                    let t = e[a];
                                    t.fileUrl && b.current.game.events.emit("change-asset", {
                                        key: null != a ? a : t.type,
                                        id: t.fileUrl,
                                        url: (0, k.xn)(N.Wl, t.fileUrl),
                                        depth: t.depth
                                    })
                                })
                            })(), sessionStorage.getItem(N.mb) && (sessionStorage.removeItem(N.mb), await (0, j.J)().saveAvatar({
                                avatarInfo: JSON.stringify(u.avatar.tempSavedAvatar)
                            }))
                        }), b.current.game.events.emit("is-ready")
                    }, [u.avatar.tempSavedAvatar]);
                    let S = () => new Promise((e, a) => {
                            b.current.game.events.emit("making-gif"), b.current.game.events.on("response-making-gif", async a => {
                                let t = new FormData;
                                t.append("file", a, "avatar.gif");
                                let {
                                    url: n,
                                    orgFilename: s,
                                    fileSize: r,
                                    filePath: i
                                } = (await (0, L.V)().uploadImage({
                                    file: t
                                })).data;
                                g({
                                    url: n,
                                    orgFilename: s,
                                    fileSize: r,
                                    filePath: i
                                }), e({
                                    url: n,
                                    orgFilename: s,
                                    fileSize: r,
                                    filePath: i
                                })
                            })
                        }),
                        M = async e => {
                            let {
                                title: a,
                                content: t,
                                avatarFile: n
                            } = e, {
                                url: s,
                                orgFilename: r,
                                fileSize: i,
                                filePath: o
                            } = n;
                            return await (0, j.J)().submitContest({
                                nickName: f.nexon_name,
                                title: a,
                                content: t,
                                url: s,
                                filePath: o,
                                orgFilename: r,
                                fileSize: i
                            })
                        },
                        C = async e => {
                            (0, v.k)("event", "avatar_콘테스트아바타제출");
                            let {
                                target: a
                            } = e;
                            try {
                                a.classList.add(F("contest-submit-button-loading"));
                                let e = (0, T.getCookie)("NPP");
                                if (!l || !e) {
                                    let e = JSON.stringify(u.avatar.tempSavedAvatar);
                                    return sessionStorage.setItem(N.mb, e), sessionStorage.setItem(N.R0, e), (0, d.D)(_, {
                                        name: "Alert",
                                        type: "Non_Login",
                                        pagecode: "65478"
                                    }), await A.lp.openNeedLogin()
                                }
                                let t = p.title.trim(),
                                    s = p.description.trim();
                                if (!t) return (0, d.D)(_, {
                                    name: "Alert",
                                    type: "Title_Null",
                                    pagecode: "65478"
                                }), await A.lp.openMessage({
                                    messages: ["제목을 입력해 주세요."]
                                });
                                if (t.length < 2 || t.length > 30) return (0, d.D)(_, {
                                    name: "Alert",
                                    type: "Title_Number",
                                    pagecode: "65478"
                                }), await A.lp.openMessage({
                                    messages: ["제목은 2자~30자 이내로 입력해 주세요."]
                                });
                                if (!s) return (0, d.D)(_, {
                                    name: "Alert",
                                    type: "Contents_Null",
                                    pagecode: "65478"
                                }), await A.lp.openMessage({
                                    messages: ["내용을 입력해 주세요."]
                                });
                                if (s.length < 5) return (0, d.D)(_, {
                                    name: "Alert",
                                    type: "Contents_5_under",
                                    pagecode: "65478"
                                }), await A.lp.openMessage({
                                    messages: ["내용은 5자 이상 입력해 주세요."]
                                });
                                if (s.length > 400) return (0, d.D)(_, {
                                    name: "Alert",
                                    type: "Contents_400_over",
                                    pagecode: "65478"
                                }), await A.lp.openMessage({
                                    messages: ["내용은 400자 이내로 입력해 주세요."]
                                });
                                let r = l.local_session_user_id,
                                    i = (0, W.W)(),
                                    {
                                        data: o
                                    } = await (0, L.V)().getMyContents({
                                        guid: r,
                                        categoryId: i
                                    });
                                if ((null == o ? void 0 : o.data.length) > 0) {
                                    if ((0, d.D)(_, {
                                            name: "Alert",
                                            type: "Write_Again",
                                            pagecode: "65478"
                                        }), !await A.lp.openConfirmMessage({
                                            content: (0, n.jsxs)("div", {
                                                children: ["이미 이번 달 콘테스트에 참여하셨습니다. ", (0, n.jsx)("br", {}), "참여작을 확인하시겠습니까?"]
                                            })
                                        })) return; {
                                        let {
                                            contentId: e
                                        } = null == o ? void 0 : o.data[0];
                                        return window.location.replace("/30th/avatar-contest/items?detail=".concat(e))
                                    }
                                }
                                if ((0, d.D)(_, {
                                        name: "Alert",
                                        type: "Write",
                                        pagecode: "65478"
                                    }), await A.lp.openNotice()) {
                                    let e = h;
                                    e.filePath || (e = await S(), g(e));
                                    let {
                                        data: a
                                    } = await M({
                                        title: t,
                                        content: s,
                                        avatarFile: e
                                    });
                                    if (2021 === a.code) return (0, d.D)(_, {
                                        name: "Alert",
                                        type: "Contents_Banned",
                                        pagecode: "65478"
                                    }), await A.lp.openMessage({
                                        messages: ["사용할 수 없는 문자가 포함되어 있습니다.", "입력한 내용을 다시 확인해 주세요."]
                                    });
                                    if (0 !== a.code) return (0, d.D)(_, {
                                        name: "Alert",
                                        type: "Error",
                                        pagecode: "65478"
                                    }), await A.lp.openMessage({
                                        messages: ["알 수 없는 오류로 제출에 실패했습니다.", "잠시 후 다시 시도해 주세요."]
                                    });
                                    (0, d.D)(_, {
                                        name: "Alert",
                                        type: "Write_Complete",
                                        pagecode: "65478"
                                    }), await A.lp.openMessage({
                                        messages: ["콘테스트 참여가 완료되었습니다!"]
                                    });
                                    let n = (0, W.W)(),
                                        {
                                            data: i
                                        } = await (0, L.V)().getMyContents({
                                            guid: r,
                                            categoryId: n
                                        }),
                                        {
                                            contentId: o
                                        } = null == i ? void 0 : i.data[0];
                                    return window.location.replace("/30th/avatar-contest/items?detail=".concat(o))
                                }
                            } finally {
                                a.classList.remove(F("contest-submit-button-loading"))
                            }
                        };
                    return (0, n.jsxs)("div", {
                        ref: m,
                        className: F("container"),
                        children: [o, (0, n.jsxs)("div", {
                            className: F("wrapper"),
                            children: [(0, n.jsxs)("div", {
                                className: F("avatar-container"),
                                children: [(0, n.jsx)("div", {
                                    className: F("avatar"),
                                    children: (0, n.jsx)(x.Z, {
                                        ref: b,
                                        className: F("canvas-container")
                                    })
                                }), (0, n.jsxs)("div", {
                                    className: F("post-container"),
                                    children: [(0, n.jsxs)("div", {
                                        className: F("input-container", "nickname"),
                                        children: [(0, n.jsx)("div", {
                                            className: F("input-head"),
                                            children: "닉네임"
                                        }), (0, n.jsx)("input", {
                                            type: "text",
                                            className: F("input-data"),
                                            value: f.nexon_name,
                                            readOnly: !0
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: F("input-container", "codi-title"),
                                        children: [(0, n.jsx)("div", {
                                            className: F("input-head"),
                                            children: "코디 제목"
                                        }), (0, n.jsx)("input", {
                                            type: "text",
                                            name: "title",
                                            className: F("input-data"),
                                            placeholder: "코디 제목을 입력해주세요.",
                                            maxLength: "30",
                                            onChange: y
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: F("input-container", "codi-description"),
                                        children: [(0, n.jsx)("div", {
                                            className: F("input-head"),
                                            children: "코디 설명"
                                        }), (0, n.jsx)("textarea", {
                                            type: "text",
                                            name: "description",
                                            className: F("input-data", "text-area"),
                                            placeholder: "코디 설명을 입력해주세요.",
                                            maxLength: "400",
                                            onChange: y
                                        })]
                                    })]
                                })]
                            }), (0, n.jsxs)("ul", {
                                className: F("announcement-list"),
                                children: [(0, n.jsx)("li", {
                                    className: F("announcement-item"),
                                    children: "아바타 제출 시 넥슨 홈페이지 닉네임과 코디 제목, 코디 설명이 콘테스트 페이지에 노출됩니다."
                                }), (0, n.jsx)("li", {
                                    className: F("announcement-item"),
                                    children: "아바타 제출 후에는 참여작을 수정하거나 삭제할 수 없습니다."
                                }), (0, n.jsx)("li", {
                                    className: F("announcement-item"),
                                    children: "부적절한 닉네임이나 코디 제목, 설명이 확인될 경우 참여작이 삭제될 수 있습니다."
                                }), (0, n.jsx)("li", {
                                    className: F("announcement-item"),
                                    children: "참여작이 삭제된 경우 콘테스트에 재참여할 수 없습니다."
                                })]
                            }), (0, n.jsx)(d.Z, {
                                "data-a2s-web-obj": _,
                                "data-a2s-option-name": "Submit",
                                "data-a2s-option-pagecode": "65478",
                                children: (0, n.jsx)("button", {
                                    className: F("contest-submit-button"),
                                    onClick: C,
                                    children: "콘테스트 제출하기"
                                })
                            })]
                        }), (0, n.jsx)("div", {
                            className: F("css-preloader")
                        })]
                    })
                },
                X = t(5658),
                G = t.n(X);
            let z = i().bind(G());

            function V(e) {
                let {
                    phase: a,
                    goToPrevPhase: t
                } = e, {
                    isMute: s,
                    setIsMute: r,
                    onClose: i,
                    a2sObjectName: o
                } = (0, c.useContext)(Q), l = async () => {
                    (4 !== a || await A.lp.openCloseConfirm()) && i()
                };
                return (0, n.jsxs)("div", {
                    className: z("container"),
                    children: [(0, n.jsx)(d.Z, {
                        "data-a2s-web-obj": o,
                        "data-a2s-option-name": "Prev",
                        "data-a2s-option-pagecode": "65478",
                        children: (0, n.jsx)("button", {
                            className: z("prev-button"),
                            onClick: t,
                            children: "prev"
                        })
                    }), (0, n.jsx)(d.Z, {
                        "data-a2s-web-obj": o,
                        "data-a2s-option-name": "Music",
                        "data-a2s-option-type": s ? "On" : "Off",
                        "data-a2s-option-pagecode": "65478",
                        children: (0, n.jsx)("button", {
                            className: z("sound-button", s && "mute-button"),
                            onClick: () => {
                                r(e => !e)
                            },
                            children: "sound"
                        })
                    }), (0, n.jsx)(d.Z, {
                        "data-a2s-web-obj": o,
                        "data-a2s-option-name": "Close",
                        "data-a2s-option-pagecode": "65478",
                        children: (0, n.jsx)("button", {
                            className: z("close-button"),
                            onClick: l,
                            children: "close"
                        })
                    })]
                })
            }
            let Q = (0, c.createContext)({}),
                Y = {
                    0: "Avatar_Start",
                    1: "Avatar_Gender",
                    2: "Avatar_Create",
                    3: "Avatar_Done",
                    4: "Avatar_Write"
                };

            function B(e) {
                let {
                    onClose: a,
                    tempSavedAvatar: t,
                    userProfile: r
                } = e, [i, o] = (0, c.useState)(0), {
                    setContainerRef: l
                } = (0, S.cS)({
                    resizeDependency: i
                }), [v, m] = (0, c.useState)(null), [_, p] = (0, c.useState)(!1), [w, h] = (0, c.useState)({
                    baseData: {
                        gender: ""
                    },
                    tempSavedAvatar: {},
                    undo: [],
                    redo: [],
                    history: [],
                    loaded: !1
                }), g = (0, c.useCallback)(() => {
                    if (v) return;
                    let e = new Audio("/30th/avatar/maker/01.start.mp3");
                    e.loop = !1, e.play().then(a => {
                        m(e)
                    })
                }, [v]);
                (0, c.useEffect)(() => {
                    (async function() {
                        if (t) {
                            let e = JSON.parse(t);
                            return h(a => ({ ...a,
                                tempSavedAvatar: e,
                                loaded: !0,
                                baseData: {
                                    gender: e.avatar.gender
                                }
                            })), (0, d.D)("Avatar_Done", {
                                name: "Save",
                                pagecode: "65478"
                            }), o(4)
                        }
                        let e = await (0, j.J)().getAvatar();
                        if (e.avatarInfo) {
                            let {
                                avatarInfo: t
                            } = e;
                            try {
                                var a;
                                let e = JSON.parse(t),
                                    n = null == e ? void 0 : null === (a = e.avatar) || void 0 === a ? void 0 : a.gender;
                                h(a => ({ ...a,
                                    tempSavedAvatar: e,
                                    loaded: !0,
                                    baseData: {
                                        gender: n
                                    }
                                }))
                            } catch (e) {}
                        } else h(e => ({ ...e,
                            loaded: !0
                        }))
                    })()
                }, [t]), (0, c.useEffect)(() => {
                    0 !== i && g()
                }, [i, g]), (0, c.useEffect)(() => {
                    if (!v) return;
                    _ ? v.pause() : v.play();
                    let e = () => {
                        v && ("visible" !== document.visibilityState || _ ? v.pause() : v.play())
                    };

                    function a() {
                        v.src = "/30th/avatar/maker/02.looping.mp3", v.loop = !0, v.play()
                    }
                    return v.addEventListener("ended", a), document.addEventListener("visibilitychange", e), () => {
                        document.removeEventListener("visibilitychange", e), v.removeEventListener("ended", a), null == v || v.pause(), null == v || v.remove()
                    }
                }, [_, v]);
                let f = [u, b, O, E, H][i];
                return (0, n.jsx)(s.Z, {
                    children: (0, n.jsx)(s.Z.Main, {
                        children: (0, n.jsx)(Q.Provider, {
                            value: {
                                avatar: w,
                                setAvatar: h,
                                isMute: _,
                                setIsMute: p,
                                onClose: a,
                                a2sObjectName: Y[i]
                            },
                            children: (0, n.jsx)(f, {
                                setContainerRef: l,
                                setPhase: o,
                                userProfile: r,
                                children: (0, n.jsx)(V, {
                                    phase: i,
                                    goToPrevPhase: () => {
                                        0 !== i && o(e => e - 1)
                                    }
                                })
                            })
                        })
                    })
                })
            }
        },
        5658: function(e) {
            e.exports = {
                container: "Header_container__MuGZZ",
                "prev-button": "Header_prev-button__NQVm3",
                "sound-button": "Header_sound-button__QBt84",
                "mute-button": "Header_mute-button__XeuUX",
                "close-button": "Header_close-button__HeufL"
            }
        },
        4504: function(e) {
            e.exports = {
                container: "Main_container__sIvz1",
                title: "Main_title__0v5YM",
                "start-button": "Main_start-button__ZFSMM",
                "sound-checker": "Main_sound-checker__0o2Cd",
                "sound-checkbox": "Main_sound-checkbox__EG0lV",
                "sound-check": "Main_sound-check__tnCZd",
                "sound-checker-text": "Main_sound-checker-text__lg2J0",
                "close-button": "Main_close-button__uRcUV",
                "css-preloader": "Main_css-preloader__JHdn7"
            }
        },
        9214: function(e) {
            e.exports = {
                container: "SelectGender_container__7dfK1",
                "content-wrapper": "SelectGender_content-wrapper__cpN1J",
                description: "SelectGender_description__xIwU3",
                "gender-container": "SelectGender_gender-container__VNWrX",
                "gender-item": "SelectGender_gender-item__u406R",
                male: "SelectGender_male__XAVxH",
                female: "SelectGender_female__OnOik",
                "select-button": "SelectGender_select-button__y86py",
                "css-preloader": "SelectGender_css-preloader__vwXC3"
            }
        },
        2235: function(e) {
            e.exports = {
                container: "MakeAvater_container__F_UAU",
                "make-avatar-container": "MakeAvater_make-avatar-container__eACTB",
                "my-avatar-container": "MakeAvater_my-avatar-container__dZPsA",
                "my-avatar-wrapper": "MakeAvater_my-avatar-wrapper__YhXOJ",
                "my-avatar": "MakeAvater_my-avatar__zt9Z_",
                "my-avatar-canvas-container": "MakeAvater_my-avatar-canvas-container__4uCdE",
                "my-avatar-canvas-wrapper": "MakeAvater_my-avatar-canvas-wrapper__S30E3",
                "my-avatar-take-off-all-wrapper": "MakeAvater_my-avatar-take-off-all-wrapper__iK1gd",
                "take-off-hover-on": "MakeAvater_take-off-hover-on__2UxcK",
                "my-avatar-take-off-all-button": "MakeAvater_my-avatar-take-off-all-button__zNvQg",
                "my-avatar-canvas": "MakeAvater_my-avatar-canvas__YbPzD",
                "my-avatar-controller": "MakeAvater_my-avatar-controller__KAz7m",
                "my-avatar-undo": "MakeAvater_my-avatar-undo__FRNXE",
                "my-avatar-redo": "MakeAvater_my-avatar-redo__NhX5z",
                "my-avatar-change-gender": "MakeAvater_my-avatar-change-gender__jCjWR",
                "my-avatar-change-notice": "MakeAvater_my-avatar-change-notice__Q5DQb",
                "wearing-item-list-wrapper": "MakeAvater_wearing-item-list-wrapper__rzNQc",
                "wearing-item-list": "MakeAvater_wearing-item-list__Y1a48",
                "wearing-item-slot": "MakeAvater_wearing-item-slot__SlFCx",
                "wearing-item-image-container": "MakeAvater_wearing-item-image-container__Mjjh2",
                "take-off-item-wrapper": "MakeAvater_take-off-item-wrapper__MjLTv",
                "take-off-item-hover-on": "MakeAvater_take-off-item-hover-on__RDmlj",
                "wearing-item-image": "MakeAvater_wearing-item-image__iISqu",
                "take-off-item-button": "MakeAvater_take-off-item-button__UFgSo",
                "wearing-item-hair": "MakeAvater_wearing-item-hair__4PVFA",
                "wearing-item-clothes": "MakeAvater_wearing-item-clothes__SPqke",
                "wearing-item-eye": "MakeAvater_wearing-item-eye__BLSjO",
                "wearing-item-ear": "MakeAvater_wearing-item-ear__uKyfD",
                "wearing-item-mouth": "MakeAvater_wearing-item-mouth__kDZiO",
                "wearing-item-bg": "MakeAvater_wearing-item-bg__X73yr",
                "wearing-item-effect": "MakeAvater_wearing-item-effect__cQMJb",
                "wearing-item-wing": "MakeAvater_wearing-item-wing__97mY8",
                "avatar-item-store": "MakeAvater_avatar-item-store__8micx",
                on: "MakeAvater_on__pI5s5",
                "close-store-window-button-dimmed": "MakeAvater_close-store-window-button-dimmed__RkI4H",
                "avatar-item-store-tabs": "MakeAvater_avatar-item-store-tabs__DIsf3",
                "store-tab": "MakeAvater_store-tab__d1COc",
                "store-tab-avatar": "MakeAvater_store-tab-avatar___puKS",
                "store-tab-hair": "MakeAvater_store-tab-hair__J8iE4",
                "store-tab-clothes": "MakeAvater_store-tab-clothes__PI72y",
                "store-tab-face": "MakeAvater_store-tab-face__XoAYC",
                "store-tab-bg": "MakeAvater_store-tab-bg__3UPRv",
                "store-tab-accessory": "MakeAvater_store-tab-accessory__oEeDs",
                "show-window-sub-tab-list": "MakeAvater_show-window-sub-tab-list__1lRtZ",
                "show-window-sub-tab-list-item": "MakeAvater_show-window-sub-tab-list-item__aYITk",
                "show-window-sub-tab": "MakeAvater_show-window-sub-tab__U6_HV",
                "show-window-sub-tab-eye": "MakeAvater_show-window-sub-tab-eye__WVKbq",
                "show-window-sub-tab-ear": "MakeAvater_show-window-sub-tab-ear__JkNcM",
                "show-window-sub-tab-mouth": "MakeAvater_show-window-sub-tab-mouth__n1ykO",
                "show-window-sub-tab-effect": "MakeAvater_show-window-sub-tab-effect__T_Hdr",
                "show-window-sub-tab-wing": "MakeAvater_show-window-sub-tab-wing__0CUBo",
                "show-window-list-wrapper": "MakeAvater_show-window-list-wrapper__zoK7w",
                "show-window-list": "MakeAvater_show-window-list__Y4KKI",
                "avatar-item-store-show-window": "MakeAvater_avatar-item-store-show-window__FqrmU",
                "avatar-item-store-show-window-container": "MakeAvater_avatar-item-store-show-window-container__1j4Eq",
                "close-store-window-button": "MakeAvater_close-store-window-button__hK4lo",
                "show-window-avatar-list": "MakeAvater_show-window-avatar-list__w_FIm",
                "show-window-avatar-inventory": "MakeAvater_show-window-avatar-inventory__ntek9",
                "wearing-avatar-inventory": "MakeAvater_wearing-avatar-inventory__Gt_1q",
                "avatar-inventory-image": "MakeAvater_avatar-inventory-image__rxkbY",
                "show-window-avatar": "MakeAvater_show-window-avatar__PdRLo",
                "show-window-item": "MakeAvater_show-window-item__ruQ6l",
                "show-window-item-list": "MakeAvater_show-window-item-list__y_Lqn",
                "show-window-item-inventory": "MakeAvater_show-window-item-inventory__WePDb",
                "wearing-item-inventory": "MakeAvater_wearing-item-inventory__LfKJb",
                "item-inventory-image": "MakeAvater_item-inventory-image__95XPy",
                "create-button": "MakeAvater_create-button__XVLe8",
                "css-preloader": "MakeAvater_css-preloader__gpIVD"
            }
        },
        8866: function(e) {
            e.exports = {
                container: "Result_container___TlS4",
                "no-contest": "Result_no-contest__Ny1pj",
                "scroll-view": "Result_scroll-view__GgexL",
                content: "Result_content__qAl5j",
                title: "Result_title__FXX1U",
                "break-point": "Result_break-point__o1MtD",
                nickname: "Result_nickname__hr8PC",
                "avatar-container": "Result_avatar-container__Mi8WZ",
                avatar: "Result_avatar__UwKNW",
                "canvas-container": "Result_canvas-container__3dfCz",
                "circle-button-container": "Result_circle-button-container__4TH0U",
                "download-button": "Result_download-button__WJwjy",
                "download-button-loading": "Result_download-button-loading__sBO51",
                spin: "Result_spin__RJJW_",
                "share-button": "Result_share-button__pBX_5",
                "contest-submit-button": "Result_contest-submit-button__pnQnO",
                "remake-button": "Result_remake-button___oh0_",
                "dotted-line": "Result_dotted-line__1_SLi",
                "contest-text": "Result_contest-text__lzzO2",
                "contest-image-list": "Result_contest-image-list__nHHF_",
                "contest-image-wrapper": "Result_contest-image-wrapper__7ILcb",
                "contest-image": "Result_contest-image__hbfgl",
                "contest-go-button": "Result_contest-go-button__AwWFH",
                "css-preloader": "Result_css-preloader__HJJBF"
            }
        },
        9262: function(e) {
            e.exports = {
                container: "Contest_container__rTCnJ",
                wrapper: "Contest_wrapper__hmFsX",
                "avatar-container": "Contest_avatar-container__70NjS",
                avatar: "Contest_avatar__JIhnl",
                "canvas-container": "Contest_canvas-container__9uo7L",
                "post-container": "Contest_post-container__nUI0Y",
                "input-container": "Contest_input-container__2QeNw",
                "input-head": "Contest_input-head__ckYgC",
                "input-data": "Contest_input-data__SpScW",
                "text-area": "Contest_text-area__A_yOH",
                nickname: "Contest_nickname__Jyyh0",
                "codi-title": "Contest_codi-title__oMZNP",
                "codi-description": "Contest_codi-description__hLE3Q",
                "announcement-list": "Contest_announcement-list__ObJ_z",
                "announcement-item": "Contest_announcement-item__yR_QT",
                "contest-submit-button": "Contest_contest-submit-button__tSnFe",
                "contest-submit-button-loading": "Contest_contest-submit-button-loading__mqMvR",
                spin: "Contest_spin___wofK",
                "css-preloader": "Contest_css-preloader__Bau4y"
            }
        }
    }
]);