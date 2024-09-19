(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [202], {
        216: function(t, e, n) {
            "use strict";
            n.d(e, {
                I: function() {
                    return s
                },
                V: function() {
                    return r
                }
            });
            var o = n(4582),
                a = n(1960),
                i = n(3708);
            let s = a.Z.create({
                baseURL: "https://public.api.nexon.com/sarah",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            s.interceptors.request.use(t => {
                let e = (0, o.getCookie)("_ifwt") ? "Web ".concat((0, o.getCookie)("_ifwt")) : void 0,
                    n = (0, o.getCookie)("PCID");
                return t.headers = { ...t.headers,
                    authorization: e,
                    PCID: n || void 0
                }, t
            }, async function(t) {
                return await (0, i.vd)(), Promise.reject(t)
            }), s.interceptors.response.use(function(t) {
                try {
                    let {
                        data: e = {}
                    } = t, {
                        code: n
                    } = e;
                    if (202 === n) throw window.alert("게임 코인 서비스 점검 중입니다."), {
                        code: 202,
                        message: "게임 코인 서비스 점검 중입니다."
                    }
                } catch (t) {
                    return Promise.reject(t)
                }
                return t
            }, async function(t) {
                return await (0, i.vd)(), Promise.reject(t)
            });
            let r = a.Z.create({
                baseURL: "https://public.api.nexon.com/retalk-30th-api",
                headers: {
                    "Content-Type": "application/json",
                    "retalk-id": "1949",
                    "x-inface-api-key": "4c3fca53-e30e-5486-9ee3-f1ec8cf9b041"
                }
            });
            r.interceptors.request.use(t => {
                let e = (0, o.getCookie)("NPP");
                return t.headers = { ...t.headers,
                    authorization: e ? "Krpc ".concat(e) : void 0
                }, t
            })
        },
        1280: function(t, e, n) {
            "use strict";
            n.d(e, {
                V: function() {
                    return a
                }
            });
            var o = n(216);

            function a() {
                return {
                    uploadImage(t) {
                        let {
                            file: e
                        } = t;
                        return o.V.request({
                            method: "POST",
                            url: "/common/upload",
                            headers: {
                                "Content-Type": "multipart/form-data"
                            },
                            data: e
                        })
                    },
                    getContents(t) {
                        let {
                            page: e = 1,
                            size: n = 30,
                            feedType: a = "RECENT",
                            sortType: i = "RECENT",
                            lastDays: s = "",
                            keyword: r = "",
                            categoryId: c = "0"
                        } = t;
                        return o.V.request({
                            method: "GET",
                            url: "/",
                            params: {
                                page: e,
                                size: n,
                                feedType: a,
                                sortType: i,
                                lastDays: s,
                                keyword: r,
                                categoryId: c
                            }
                        })
                    },
                    getMyContents(t) {
                        let {
                            guid: e = "",
                            categoryId: n = ""
                        } = t;
                        return o.V.request({
                            method: "GET",
                            url: "/user/contents/MY_FEED",
                            params: {
                                guid: e,
                                categoryId: n
                            }
                        })
                    },
                    getContent(t) {
                        let {
                            contentId: e = ""
                        } = t;
                        return o.V.request({
                            method: "GET",
                            url: "/".concat(e)
                        })
                    },
                    getContentMore(t) {
                        let {
                            size: e = 1,
                            sortType: n = "RECENT",
                            sort: a = "",
                            flag: i = "NEXT",
                            categoryId: s = ""
                        } = t;
                        return o.V.request({
                            method: "GET",
                            url: "/moreList",
                            params: {
                                size: e,
                                sortType: n,
                                sort: a,
                                flag: i,
                                categoryId: s
                            }
                        })
                    },
                    getMyReport(t) {
                        let {
                            contentId: e = ""
                        } = t;
                        return o.V.request({
                            method: "GET",
                            url: "/report/contents/".concat(e)
                        })
                    },
                    reportContent(t) {
                        let {
                            contentId: e = "",
                            reason: n = ""
                        } = t;
                        return o.V.request({
                            method: "POST",
                            url: "/report/contents/".concat(e),
                            data: {
                                reason: n
                            }
                        })
                    },
                    addEmotion(t) {
                        let {
                            contentId: e = ""
                        } = t;
                        return o.V.request({
                            method: "POST",
                            url: "/emotion/".concat(e)
                        })
                    },
                    getComments(t) {
                        let {
                            contentId: e = "",
                            page: n = 1,
                            size: a = 10,
                            sortType: i = "RECENT",
                            subSortType: s = "RECENT"
                        } = t;
                        return o.V.request({
                            method: "GET",
                            url: "/comment/".concat(e),
                            params: {
                                page: n,
                                size: a,
                                sortType: i,
                                subSortType: s
                            }
                        })
                    },
                    makeComment(t) {
                        let {
                            contentId: e = "",
                            content: n = "",
                            nickName: a = ""
                        } = t;
                        return o.V.request({
                            method: "POST",
                            url: "/comment/".concat(e),
                            data: {
                                parentId: 0,
                                content: n,
                                nickName: a
                            }
                        })
                    },
                    editComment(t) {
                        let {
                            contentId: e = "",
                            commentId: n = "",
                            content: a = ""
                        } = t;
                        return o.V.request({
                            method: "PUT",
                            url: "/comment/".concat(e, "/").concat(n),
                            data: {
                                content: a
                            }
                        })
                    },
                    deleteComment(t) {
                        let {
                            contentId: e = "",
                            commentId: n = ""
                        } = t;
                        return o.V.request({
                            method: "DELETE",
                            url: "/comment/".concat(e, "/").concat(n)
                        })
                    },
                    getMyCommentReport(t) {
                        let {
                            commentId: e = ""
                        } = t;
                        return o.V.request({
                            method: "GET",
                            url: "/report/".concat(e)
                        })
                    },
                    reportComment(t) {
                        let {
                            commentId: e = "",
                            reason: n = ""
                        } = t;
                        return o.V.request({
                            method: "POST",
                            url: "/report/".concat(e),
                            data: {
                                reason: n
                            }
                        })
                    }
                }
            }
        },
        9745: function(t, e, n) {
            "use strict";
            n.d(e, {
                D: function() {
                    return i
                }
            });
            var o = n(6063),
                a = n(4617);

            function i() {
                var t, e;
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "click",
                    s = null === (e = window) || void 0 === e ? void 0 : null === (t = e.$h) || void 0 === t ? void 0 : t.a2s;
                if (!s) return setTimeout(() => i(n, o, a), 500);
                if (!n) return;
                let {
                    sendClickLog: r,
                    sendContentsLog: c
                } = s;
                (0, ({
                    click: r,
                    contents: c
                })[a])(n, JSON.stringify(o))
            }
            let s = t => {
                    if (!t) return;
                    let e = t.currentTarget.dataset,
                        n = {
                            name: e.a2sWebObj,
                            type: e.a2sObjectType,
                            option: {}
                        };
                    Object.entries(e).forEach(t => {
                        let [e = "", o = ""] = t;
                        if (e.includes("a2s") && e.includes("a2sOption")) {
                            let t = e.replace("a2sOption", "");
                            n.option[t] = o
                        }
                    }), i(n.name, n.option, n.type)
                },
                r = (0, a.forwardRef)((t, e) => {
                    let {
                        a2sContents: n,
                        capture: i = !0,
                        a2sDelegation: r,
                        children: c,
                        ...l
                    } = t, d = (0, a.useRef)(e);
                    (0, a.useEffect)(() => {
                        let t = d.current;
                        if (!(t instanceof HTMLElement)) return;
                        let e = r ? t.querySelector("[data-a2s-target-name=".concat(r, "]")) : t,
                            o = n ? "load" : "click";
                        return null == e || e.addEventListener(o, s, {
                            capture: i
                        }), () => null == e ? void 0 : e.removeEventListener(o, s)
                    }, [n, i, r, c]);
                    let u = c.type;
                    return (0, o.jsx)(u, {
                        ref: d,
                        ...l,
                        ...c.props
                    })
                });
            r.displayName = "A2S", e.Z = r
        },
        8938: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return p
                }
            });
            var o = n(6063),
                a = n(4673),
                i = n.n(a),
                s = n(8921),
                r = n.n(s),
                c = n(4617),
                l = n(5193),
                d = n.n(l),
                u = n(4202),
                m = n(5145),
                _ = n(9745);
            let h = i().bind(r());

            function p(t) {
                let {
                    url: e,
                    hasButton: n = !0,
                    tooltipType: a = "bottom",
                    a2s: i
                } = t, [s, r] = (0, c.useState)(!1), [l, p] = (0, c.useState)(!1), {
                    isMobile: v
                } = (0, u.dD)();
                (0, c.useEffect)(() => {
                    v && (v && "bottom" !== a ? r(!1) : p(!1))
                }, [v, a]);
                let g = [{
                    name: "url",
                    onClick: async () => {
                        d()(e), await m.lp.openMessage({
                            messages: ["URL이 복사되었습니다."]
                        })
                    },
                    text: "URL 복사",
                    a2sValue: "Link"
                }, {
                    name: "meta",
                    onClick: () => {
                        window.open("https://www.facebook.com/sharer.php?u=".concat(e), "_blank")
                    },
                    text: "페이스북",
                    a2sValue: "Facebook"
                }, {
                    name: "x",
                    onClick: () => {
                        window.open("https://twitter.com/intent/tweet?url=".concat(e), "_blank")
                    },
                    text: "X",
                    a2sValue: "X"
                }];
                return (0, o.jsxs)("div", {
                    onClick: () => {
                        !l && v && "bottom" !== a && p(!0)
                    },
                    onMouseEnter: () => {
                        v && "bottom" !== a || r(!0)
                    },
                    onMouseLeave: () => {
                        v && "bottom" !== a || r(!1)
                    },
                    className: h("container", !n && "fit-button"),
                    children: [n && (0, o.jsx)("button", {
                        className: h("sharing-button", s && "active"),
                        children: "공유하기"
                    }), s && (0, o.jsx)("ul", {
                        className: h("list-tooltip-".concat(a)),
                        children: g.map(t => (0, o.jsx)("li", {
                            className: h("icon", "icon-".concat(t.name)),
                            children: (0, o.jsx)(_.Z, {
                                "data-a2s-web-obj": null == i ? void 0 : i.object,
                                "data-a2s-option-name": null == i ? void 0 : i.name,
                                "data-a2s-option-value": t.a2sValue,
                                "data-a2s-option-pagecode": "65478",
                                children: (0, o.jsx)("a", {
                                    className: h("link"),
                                    onClick: t.onClick
                                })
                            })
                        }, t.name))
                    }), l && (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("div", {
                            className: h("dimmed")
                        }), (0, o.jsxs)("div", {
                            className: h("sns-modal"),
                            children: [(0, o.jsx)("div", {
                                className: h("modal-title"),
                                children: "공유하기"
                            }), (0, o.jsx)("button", {
                                className: h("modal-close-button"),
                                onClick: t => {
                                    t.stopPropagation(), p(!1)
                                },
                                children: "X"
                            }), (0, o.jsx)("ul", {
                                className: h("modal-icon-container"),
                                children: g.map(t => (0, o.jsxs)("li", {
                                    className: h("modal-icon-wrapper"),
                                    children: [(0, o.jsx)(_.Z, {
                                        "data-a2s-web-obj": null == i ? void 0 : i.object,
                                        "data-a2s-option-name": null == i ? void 0 : i.name,
                                        "data-a2s-option-value": t.a2sValue,
                                        "data-a2s-option-pagecode": "65478",
                                        children: (0, o.jsx)("a", {
                                            className: h("icon", "icon-".concat(t.name)),
                                            onClick: t.onClick
                                        })
                                    }), (0, o.jsx)("div", {
                                        className: h("modal-icon-text"),
                                        children: t.text
                                    })]
                                }, t.name))
                            })]
                        })]
                    })]
                })
            }
        },
        5502: function(t, e, n) {
            "use strict";
            n.d(e, {
                ZW: function() {
                    return l
                },
                Zh: function() {
                    return d.default
                }
            });
            var o = n(6063);
            n(4617), n(992);
            var a = n(4673),
                i = n.n(a),
                s = n(7901),
                r = n.n(s);
            let c = i().bind(r());

            function l(t) {
                return (0, o.jsx)("div", {
                    className: c("id-href-container"),
                    ...t,
                    children: t.children
                })
            }
            var d = n(8938)
        },
        9015: function(t, e, n) {
            "use strict";
            var o = n(6063),
                a = n(4617),
                i = n(4673),
                s = n.n(i),
                r = n(8019),
                c = n.n(r);
            let l = s().bind(c()),
                d = () => null,
                u = () => null,
                m = () => null,
                _ = (0, a.forwardRef)((t, e) => {
                    let {
                        children: n,
                        className: i,
                        onClose: s,
                        ...r
                    } = t, _ = (0, a.useRef)(null);
                    (0, a.useEffect)(() => (document.activeElement.blur(), document.body.classList.add("hold-scroll"), () => {
                        0 === document.getElementsByClassName(c().wrapper).length && document.body.classList.remove("hold-scroll")
                    }), []);
                    let h = n && n.length && n.find(t => t.type === d),
                        p = n && n.length && n.find(t => t.type === u),
                        v = n && n.length && n.find(t => t.type === m);
                    return (0, o.jsx)("section", {
                        ref: _,
                        className: l("wrapper"),
                        ...r,
                        onClick: t => {
                            t.target === _.current && "function" == typeof s && s()
                        },
                        children: (0, o.jsxs)("div", {
                            className: l("container", i),
                            children: [!n.length && n.props.children, h && (0, o.jsx)("div", {
                                className: l("header", h.props.className),
                                ...h.props,
                                children: h.props.children
                            }), p && (0, o.jsx)("div", {
                                className: l("main", p.props.className),
                                ...p.props,
                                children: p.props.children
                            }), v && (0, o.jsx)("div", {
                                className: l("footer", v.props.className),
                                ...v.props,
                                children: v.props.children
                            })]
                        })
                    })
                });
            _.displayName = "Modal", _.Header = d, _.Main = u, _.Footer = m, e.Z = _
        },
        6998: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return L
                }
            });
            var o = n(6063),
                a = n(9015),
                i = n(4673),
                s = n.n(i),
                r = n(2032),
                c = n.n(r),
                l = n(6601),
                d = n.n(l),
                u = n(9745);
            let m = s().bind(d());

            function _(t) {
                var e, n, a, i, s, r;
                let {
                    onClose: c,
                    prevNextData: l,
                    setContentId: d,
                    moveContestDetail: _
                } = t, h = null == l ? void 0 : null === (a = l[0]) || void 0 === a ? void 0 : null === (n = a.data) || void 0 === n ? void 0 : null === (e = n.data[0]) || void 0 === e ? void 0 : e.contentId, p = null == l ? void 0 : null === (r = l[1]) || void 0 === r ? void 0 : null === (s = r.data) || void 0 === s ? void 0 : null === (i = s.data[0]) || void 0 === i ? void 0 : i.contentId;
                return (0, o.jsx)("header", {
                    className: m("header"),
                    children: (0, o.jsxs)("div", {
                        className: m("button-wrapper"),
                        children: [(0, o.jsx)(u.Z, {
                            "data-a2s-web-obj": "Contest_View",
                            "data-a2s-option-name": "List",
                            "data-a2s-option-pagecode": "65478",
                            children: (0, o.jsx)("button", {
                                className: m("list-button"),
                                onClick: c,
                                children: "목록으로"
                            })
                        }), (0, o.jsxs)("div", {
                            children: [h && (0, o.jsx)(u.Z, {
                                "data-a2s-web-obj": "Contest_View",
                                "data-a2s-option-name": "Prev",
                                "data-a2s-option-pagecode": "65478",
                                children: (0, o.jsx)("button", {
                                    className: m("prev-button"),
                                    onClick: () => {
                                        _(h)
                                    },
                                    children: "prev"
                                })
                            }), p && (0, o.jsx)(u.Z, {
                                "data-a2s-web-obj": "Contest_View",
                                "data-a2s-option-name": "Next",
                                "data-a2s-option-pagecode": "65478",
                                children: (0, o.jsx)("button", {
                                    className: m("next-button"),
                                    onClick: () => {
                                        _(p)
                                    },
                                    children: "next"
                                })
                            }), (0, o.jsx)(u.Z, {
                                "data-a2s-web-obj": "Contest_View",
                                "data-a2s-option-name": "Cody",
                                "data-a2s-option-type": "Close",
                                "data-a2s-option-pagecode": "65478",
                                children: (0, o.jsx)("button", {
                                    className: m("close-button"),
                                    onClick: c,
                                    children: "close"
                                })
                            })]
                        })]
                    })
                })
            }
            var h = n(1113),
                p = n.n(h);
            let v = s().bind(p());

            function g(t) {
                let {
                    isSignedIn: e,
                    placeholder: n,
                    hasCancelButton: a = !1,
                    onChange: i,
                    onClick: s,
                    onSubmit: r,
                    value: c,
                    onClickCancel: l
                } = t;
                return (0, o.jsxs)("div", {
                    className: v("container"),
                    children: [(0, o.jsx)("textarea", {
                        className: v("textarea"),
                        placeholder: n,
                        onClick: s,
                        onChange: t => {
                            let {
                                value: e
                            } = t.target;
                            i(e)
                        },
                        value: c
                    }), (0, o.jsxs)("div", {
                        className: v("button-container"),
                        children: [a && (0, o.jsx)("button", {
                            className: v("cancel-button"),
                            onClick: l,
                            children: "취소"
                        }), (0, o.jsx)(u.Z, {
                            "data-a2s-web-obj": "Contest_View",
                            "data-a2s-option-name": "Comment",
                            "data-a2s-option-type": "Write",
                            "data-a2s-option-pagecode": "65478",
                            children: (0, o.jsx)("button", {
                                className: v("submit-button"),
                                onClick: r,
                                disabled: !e || c.length < 2,
                                children: "등록"
                            })
                        })]
                    })]
                })
            }
            var f = n(4617),
                x = n(3962),
                b = n(218),
                j = n.n(b),
                C = n(5193),
                w = n.n(C),
                y = n(9167),
                N = n(1280),
                k = n(5145),
                A = n(7561),
                M = n(1586),
                S = n(1356),
                E = n(4202),
                D = n(992);
            let R = s().bind(c());

            function L(t) {
                var e, n;
                let {
                    id: i,
                    onClose: s,
                    moveContestDetail: r,
                    categoryId: c,
                    mutateContestList: l = () => {}
                } = t, d = (0, f.useContext)(M.InfaceContext), {
                    setContainerRef: m
                } = (0, E.cS)({}), {
                    userProfile: h
                } = d, [p, v] = (0, f.useState)(i), [b, C] = (0, f.useState)(""), [L, Z] = (0, f.useState)([]), [P, H] = (0, f.useState)({
                    commentId: null,
                    content: ""
                }), [V, I] = (0, f.useState)(1), B = !!d.userProfile, {
                    data: T,
                    mutate: F
                } = (0, x.ZP)(() => "/content", () => {
                    if (p) return (0, N.V)().getContent({
                        contentId: p
                    })
                }), {
                    data: O,
                    mutate: W
                } = (0, x.ZP)("/comment", () => {
                    if (p) return (0, N.V)().getComments({
                        contentId: p,
                        page: V
                    })
                }), {
                    data: z,
                    mutate: q
                } = (0, x.ZP)("/moreList", () => {
                    if (p) return Promise.all([(0, N.V)().getContentMore({
                        size: 1,
                        flag: "PREV",
                        sort: p,
                        categoryId: c
                    }), (0, N.V)().getContentMore({
                        size: 1,
                        flag: "NEXT",
                        sort: p,
                        categoryId: c
                    })])
                });
                if ((0, f.useEffect)(() => {
                        v(i)
                    }, [i]), (0, f.useEffect)(() => {
                        W(), F(), q()
                    }, [p, W, F, q]), (0, f.useEffect)(() => {
                        W()
                    }, [V, W]), (0, f.useEffect)(() => {
                        if (!(null == O ? void 0 : O.data)) return;
                        let {
                            data: t
                        } = O.data;
                        Z(t)
                    }, [null == O ? void 0 : O.data]), !(null == T ? void 0 : T.data) || !(null == O ? void 0 : O.data)) return;
                let Y = T.data,
                    {
                        pageInfo: G
                    } = O.data,
                    U = Math.ceil(G.totalCount / G.size),
                    Q = Y.guid.toString() === (null == h ? void 0 : null === (n = h.local_session_props) || void 0 === n ? void 0 : null === (e = n.member_sn) || void 0 === e ? void 0 : e.toString()),
                    X = t => {
                        H(e => ({ ...e,
                            content: t
                        }))
                    },
                    J = async () => {
                        if (!B) return await k.lp.openMessage({
                            messages: ["로그인 후 추천할 수 있습니다."]
                        }), window.inface.auth.gotoSignIn();
                        let {
                            userContentEmotion: t
                        } = Y;
                        if (t) return await k.lp.openMessage({
                            messages: ["이미 추천한 코디입니다.", "코디당 1회만 추천할 수 있습니다."]
                        });
                        try {
                            await (0, N.V)().addEmotion({
                                contentId: p
                            }), await k.lp.openMessage({
                                messages: ["".concat(Y.nickName, "님의 코디를 추천하였습니다.")]
                            }), F(), l()
                        } catch (t) {
                            console.error(t)
                        }
                    },
                    K = async () => {
                        var t;
                        if (!B) return await k.lp.openMessage({
                            messages: ["로그인 후 신고할 수 있습니다."]
                        }), window.inface.auth.gotoSignIn();
                        let {
                            data: e
                        } = await (0, N.V)().getMyReport({
                            contentId: p
                        });
                        if (e) return await k.lp.openMessage({
                            messages: ["이미 신고한 코디입니다.", "신고는 코디당 1회만 할 수 있습니다."]
                        });
                        let n = await (0, A.R)({
                            a2s: {
                                object: "Contest_Report",
                                namePrefix: "Avatar",
                                value: "".concat(Y.guid, ",").concat(Y.contentId)
                            }
                        });
                        if (!n) return;
                        let o = await (0, N.V)().reportContent({
                            contentId: p,
                            reason: n
                        });
                        if (null == o ? void 0 : null === (t = o.data) || void 0 === t ? void 0 : t.reason) return await k.lp.openMessage({
                            messages: ["신고가 완료되었습니다."]
                        })
                    },
                    $ = async () => {
                        w()(window.location.href), await k.lp.openMessage({
                            messages: ["URL이 복사되었습니다."]
                        })
                    },
                    tt = async t => {
                        let e = t.trim();
                        return e ? e.length < 2 || e.length > 200 ? (await k.lp.openMessage({
                            messages: ["댓글은 2자~200자 이내로 입력해 주세요."]
                        }), !1) : e : (await k.lp.openMessage({
                            messages: ["댓글 내용을 입력해 주세요."]
                        }), !1)
                    },
                    te = async () => {
                        var t;
                        if (!await tt(b)) return;
                        let e = null == h ? void 0 : null === (t = h.local_profile_props) || void 0 === t ? void 0 : t.nexon_name;
                        try {
                            await (0, N.V)().makeComment({
                                contentId: p,
                                content: b,
                                nickName: e
                            })
                        } catch (e) {
                            let {
                                errorCode: t
                            } = e.response.data;
                            switch (t) {
                                case 10008:
                                    return await k.lp.openMessage({
                                        messages: ["사용할 수 없는 문자가 포함되어 있습니다.", "입력한 내용을 다시 확인해 주세요."]
                                    });
                                case 10001:
                                    return await k.lp.openMessage({
                                        messages: ["도배 방지를 위해 일정 시간 댓글을 작성할 수 없습니다.", " 잠시 후 다시 시도해 주세요."]
                                    });
                                default:
                                    return await k.lp.openMessage({
                                        messages: ["알 수 없는 오류로 댓글 작성에 실패했습니다.", "잠시 후 다시 시도해 주세요."]
                                    })
                            }
                        }
                        C(""), 1 === V ? W() : I(1)
                    },
                    tn = async () => {
                        let {
                            commentId: t,
                            content: e
                        } = P, n = await tt(e);
                        if (n) {
                            try {
                                await (0, N.V)().editComment({
                                    contentId: p,
                                    commentId: t,
                                    content: n
                                })
                            } catch (e) {
                                let {
                                    errorCode: t
                                } = e.response.data;
                                switch (t) {
                                    case 10008:
                                        return await k.lp.openMessage({
                                            messages: ["사용할 수 없는 문자가 포함되어 있습니다.", "입력한 내용을 다시 확인해 주세요."]
                                        });
                                    case 10001:
                                        return await k.lp.openMessage({
                                            messages: ["도배 방지를 위해 일정 시간 댓글을 작성할 수 없습니다.", " 잠시 후 다시 시도해 주세요."]
                                        });
                                    default:
                                        return await k.lp.openMessage({
                                            messages: ["알 수 없는 오류로 댓글 수정에 실패했습니다.", "잠시 후 다시 시도해 주세요."]
                                        })
                                }
                            }
                            W(), H({
                                commentId: null,
                                content: ""
                            })
                        }
                    },
                    to = async t => {
                        let {
                            commentId: e
                        } = t;
                        await k.lp.openConfirmMessage({
                            content: (0, o.jsx)("div", {
                                children: "댓글을 정말로 삭제하시겠습니까?"
                            })
                        }) && (await (0, N.V)().deleteComment({
                            contentId: p,
                            commentId: e
                        }), W())
                    },
                    ta = async t => {
                        var e;
                        let {
                            commentId: n,
                            nexonSn: o
                        } = t;
                        if (!B) return await k.lp.openMessage({
                            messages: ["로그인 후 신고할 수 있습니다."]
                        }), window.inface.auth.gotoSignIn();
                        let {
                            data: a
                        } = await (0, N.V)().getMyCommentReport({
                            commentId: n
                        });
                        if (a) return await k.lp.openMessage({
                            messages: ["이미 신고한 댓글입니다.", "신고는 댓글당 1회만 할 수 있습니다."]
                        });
                        let i = await (0, A.R)({
                            a2s: {
                                object: "Contest_Report",
                                namePrefix: "Comment",
                                value: "".concat(o, ",").concat(n)
                            }
                        });
                        if (!i) return;
                        let s = await (0, N.V)().reportComment({
                            commentId: n,
                            reason: i
                        });
                        if (null == s ? void 0 : null === (e = s.data) || void 0 === e ? void 0 : e.reason) return await k.lp.openMessage({
                            messages: ["신고가 완료되었습니다."]
                        })
                    };
                return (0, o.jsx)(a.Z, {
                    children: (0, o.jsx)(a.Z.Main, {
                        children: (0, o.jsxs)("div", {
                            className: R("container"),
                            ref: m,
                            children: [(0, o.jsx)(_, {
                                onClose: s,
                                prevNextData: z,
                                setContentId: v,
                                moveContestDetail: r
                            }), (0, o.jsxs)("div", {
                                className: R("scroll-view"),
                                children: [(0, o.jsxs)("div", {
                                    className: R("content-container"),
                                    children: [(0, o.jsxs)("div", {
                                        className: R("avatar-profile-container"),
                                        children: [(0, o.jsx)("div", {
                                            className: R("avatar"),
                                            children: (0, o.jsx)(D.default, {
                                                alt: "아바타 이미지",
                                                width: "211",
                                                height: "274",
                                                className: R("avatar-image"),
                                                src: Y.thumbnailUrl
                                            })
                                        }), (0, o.jsxs)("div", {
                                            className: R("avatar-info-container"),
                                            children: [(0, o.jsxs)("div", {
                                                className: R("avatar-info"),
                                                children: [(0, o.jsx)("div", {
                                                    className: R("avatar-info-title"),
                                                    children: "닉네임"
                                                }), (0, o.jsx)("div", {
                                                    className: R("avatar-info-nickname"),
                                                    children: Y.nickName
                                                })]
                                            }), (0, o.jsxs)("div", {
                                                className: R("avatar-info"),
                                                children: [(0, o.jsx)("div", {
                                                    className: R("avatar-info-title"),
                                                    children: "추천 수"
                                                }), (0, o.jsx)("div", {
                                                    className: R("avatar-info-like-count"),
                                                    children: Y.emotionLikeCount
                                                })]
                                            })]
                                        })]
                                    }), (0, o.jsxs)("div", {
                                        className: R("avatar-text-container"),
                                        children: [(0, o.jsxs)("div", {
                                            className: R("avatar-title-container"),
                                            children: [(0, o.jsx)("div", {
                                                className: R("avatar-title"),
                                                children: Y.title
                                            }), (0, o.jsxs)("div", {
                                                className: R("avatar-sub-info"),
                                                children: [(0, o.jsxs)("div", {
                                                    className: R("avatar-submit-time"),
                                                    children: ["제출일시 ", j().unix(Y.createDate).format("YYYY-MM-DD HH:mm:ss")]
                                                }), !Q && (0, o.jsx)(u.Z, {
                                                    "data-a2s-web-obj": "Contest_View",
                                                    "data-a2s-option-name": "Cody",
                                                    "data-a2s-option-type": "Report",
                                                    "data-a2s-option-value": "".concat(Y.guid, ",").concat(Y.contentId),
                                                    "data-a2s-option-pagecode": "65478",
                                                    children: (0, o.jsx)("button", {
                                                        className: R("avatar-report-button"),
                                                        onClick: K,
                                                        children: "신고"
                                                    })
                                                })]
                                            })]
                                        }), (0, o.jsx)("div", {
                                            className: R("avatar-description-container"),
                                            children: Y.content
                                        })]
                                    })]
                                }), (0, o.jsxs)("div", {
                                    className: R("button-container"),
                                    children: [(0, o.jsx)(u.Z, {
                                        "data-a2s-web-obj": "Contest_View",
                                        "data-a2s-option-name": "Cody",
                                        "data-a2s-option-type": "Recommend",
                                        "data-a2s-option-value": Y.contentId,
                                        "data-a2s-option-pagecode": "65478",
                                        children: (0, o.jsx)("button", {
                                            className: R("like-button"),
                                            onClick: J,
                                            children: "추천하기"
                                        })
                                    }), (0, o.jsx)(u.Z, {
                                        "data-a2s-web-obj": "Contest_View",
                                        "data-a2s-option-name": "Cody",
                                        "data-a2s-option-type": "Share",
                                        "data-a2s-option-pagecode": "65478",
                                        children: (0, o.jsx)("button", {
                                            className: R("share-button"),
                                            onClick: $,
                                            children: "share"
                                        })
                                    })]
                                }), (0, o.jsx)("hr", {
                                    className: R("dividing-line")
                                }), (0, o.jsxs)("div", {
                                    className: R("comment-section"),
                                    children: [(0, o.jsxs)("div", {
                                        className: R("total-comment-count"),
                                        children: ["댓글 ", (0, o.jsxs)("strong", {
                                            children: [G.totalCount, "개"]
                                        })]
                                    }), (0, o.jsx)(g, {
                                        isSignedIn: B,
                                        placeholder: B ? "부적절한 댓글은 삭제될 수 있습니다." : "로그인 후 댓글을 작성할 수 있습니다.",
                                        onClick: () => {
                                            if (!B) return window.inface.auth.gotoSignIn()
                                        },
                                        onChange: C,
                                        value: b,
                                        onSubmit: te
                                    }), (0, o.jsx)("div", {
                                        className: R("comment-list-container"),
                                        children: L.map(t => {
                                            var e;
                                            let {
                                                commentId: n,
                                                nexonSn: a,
                                                createDate: i,
                                                modifyDate: s,
                                                deleteYn: r,
                                                releaseCode: c
                                            } = t, l = a === (null == h ? void 0 : null === (e = h.local_session_props) || void 0 === e ? void 0 : e.member_sn), d = "Y" === r, m = "OFF" === c;
                                            return (0, o.jsxs)("div", {
                                                children: [(0, o.jsxs)("div", {
                                                    className: R("comment-container"),
                                                    children: [(0, o.jsxs)("div", {
                                                        className: R("comment-header"),
                                                        children: [(0, o.jsxs)("div", {
                                                            className: R("comment-title"),
                                                            children: [(0, o.jsx)("div", {
                                                                className: R("comment-nickname"),
                                                                children: t.nickName
                                                            }), (0, o.jsxs)("div", {
                                                                className: R("comment-date"),
                                                                children: [j().unix(t.createDate).format("YYYY-MM-DD HH:mm:ss"), " ", i < s && (0, o.jsx)("span", {
                                                                    children: "수정됨"
                                                                })]
                                                            })]
                                                        }), !m && !d && P.commentId !== n && (0, o.jsx)(o.Fragment, {
                                                            children: l ? (0, o.jsxs)("div", {
                                                                className: R("comment-button-container"),
                                                                children: [(0, o.jsx)(u.Z, {
                                                                    "data-a2s-web-obj": "Contest_View",
                                                                    "data-a2s-option-name": "Comment",
                                                                    "data-a2s-option-type": "Delete",
                                                                    "data-a2s-option-pagecode": "65478",
                                                                    children: (0, o.jsx)("button", {
                                                                        className: R("comment-delete-button"),
                                                                        onClick: () => to({
                                                                            commentId: n
                                                                        }),
                                                                        children: "삭제"
                                                                    })
                                                                }), (0, o.jsx)(u.Z, {
                                                                    "data-a2s-web-obj": "Contest_View",
                                                                    "data-a2s-option-name": "Comment",
                                                                    "data-a2s-option-type": "Edit",
                                                                    "data-a2s-option-pagecode": "65478",
                                                                    children: (0, o.jsx)("button", {
                                                                        className: R("comment-edit-button"),
                                                                        onClick: () => H({
                                                                            commentId: n,
                                                                            content: t.content
                                                                        }),
                                                                        children: "편집"
                                                                    })
                                                                })]
                                                            }) : (0, o.jsx)(u.Z, {
                                                                "data-a2s-web-obj": "Contest_View",
                                                                "data-a2s-option-name": "Comment",
                                                                "data-a2s-option-type": "Report",
                                                                "data-a2s-option-value": "".concat(a, ",").concat(n),
                                                                "data-a2s-option-pagecode": "65478",
                                                                children: (0, o.jsx)("button", {
                                                                    className: R("comment-report-button"),
                                                                    onClick: () => ta({
                                                                        commentId: n,
                                                                        nexonSn: a
                                                                    }),
                                                                    children: "신고"
                                                                })
                                                            })
                                                        })]
                                                    }), P.commentId === n ? (0, o.jsx)("div", {
                                                        className: R("comment-edit-input-wrapper"),
                                                        children: (0, o.jsx)(g, {
                                                            isSignedIn: B,
                                                            value: P.content,
                                                            hasCancelButton: !0,
                                                            onClickCancel: () => H({
                                                                commentId: null,
                                                                content: ""
                                                            }),
                                                            onChange: t => X(t),
                                                            onSubmit: tn
                                                        })
                                                    }) : (0, o.jsx)("div", {
                                                        className: R("comment-content"),
                                                        children: d ? "삭제된 댓글입니다." : m ? "노출이 제한된 댓글입니다." : t.content
                                                    })]
                                                }), (0, o.jsx)("hr", {
                                                    className: R("comment-dividing-line")
                                                })]
                                            }, n)
                                        })
                                    }), L.length > 0 && (0, o.jsx)("div", {
                                        className: R("pagination-wrapper"),
                                        children: (0, o.jsx)(y.tl, {
                                            currentPage: V,
                                            totalPage: U,
                                            onClickPage: t => {
                                                I(t)
                                            }
                                        })
                                    })]
                                }), (0, o.jsx)(S.Z, {
                                    className: R("avatar-footer")
                                })]
                            })]
                        })
                    })
                })
            }
        },
        5145: function(t, e, n) {
            "use strict";
            n.d(e, {
                lp: function() {
                    return B
                },
                Wk: function() {
                    return h
                },
                WO: function() {
                    return f
                }
            });
            var o = n(6063),
                a = n(9506),
                i = n(9015),
                s = n(4673),
                r = n.n(s),
                c = n(3267),
                l = n.n(c),
                d = n(1420),
                u = n.n(d),
                m = n(4617);
            let _ = r().bind(u());
            var h = m.forwardRef(function(t, e) {
                    return (0, o.jsx)("button", {
                        ref: e,
                        className: _("cancel-button"),
                        ...t
                    })
                }),
                p = n(8139),
                v = n.n(p);
            let g = r().bind(v());
            var f = m.forwardRef(function(t, e) {
                return (0, o.jsx)("button", {
                    ref: e,
                    className: g("confirm-button"),
                    ...t
                })
            });
            let x = r().bind(l());

            function b(t) {
                let {
                    contentsLineCount: e = 3,
                    content: n,
                    footers: a = [(0, o.jsx)(h, {
                        onClick: () => s(!1)
                    }, "cancel"), (0, o.jsx)(f, {
                        onClick: () => s(!0)
                    }, "confirm")],
                    onClose: s
                } = t;
                return (0, o.jsx)(i.Z, {
                    onClose: () => s(!1),
                    children: (0, o.jsx)(i.Z.Main, {
                        children: (0, o.jsxs)("div", {
                            className: x("system-message"),
                            children: [(0, o.jsx)("button", {
                                className: x("system-message-close"),
                                onClick: () => s(!1),
                                children: (0, o.jsx)("span", {
                                    className: x("system-message-close-image")
                                })
                            }), (0, o.jsx)("div", {
                                className: x("contents-container", "contents-line-".concat(e)),
                                children: n
                            }), (0, o.jsx)("div", {
                                className: x("footer-container"),
                                children: a.map((t, e) => t)
                            })]
                        })
                    })
                })
            }
            var j = n(4963),
                C = n.n(j);
            let w = r().bind(C());
            var y = m.forwardRef(function(t, e) {
                    return (0, o.jsx)("button", {
                        ref: e,
                        className: w("login-button"),
                        ...t
                    })
                }),
                N = n(8219),
                k = n.n(N);
            let A = r().bind(k());
            var M = m.forwardRef(function(t, e) {
                return (0, o.jsx)("button", {
                    ref: e,
                    className: A("without-login-button"),
                    ...t
                })
            });

            function S(t) {
                return (0, o.jsx)(b, { ...t,
                    contentsLineCount: 1,
                    content: (0, o.jsx)("span", {
                        children: "URL이 클립보드에 복사되었습니다."
                    }),
                    footers: [(0, o.jsx)(f, {}, "system-message-confirm")]
                })
            }
            var E = n(9745),
                D = n(1003);

            function R(t) {
                let {
                    onClose: e
                } = t;
                return (0, o.jsx)(b, { ...t,
                    onClose: () => {
                        (0, E.D)("Avatar_Main", {
                            name: "Notice",
                            type: "Close",
                            pagecode: "65478"
                        }), e()
                    },
                    contentsLineCount: 2,
                    content: (0, o.jsxs)("span", {
                        style: {
                            textAlign: "center"
                        },
                        children: [(0, o.jsx)("span", {
                            className: "global-pc-line-breaker global-mobile-line-breaker",
                            children: "잠깐! 로그인을 잊으셨나요?"
                        }), (0, o.jsx)("span", {
                            children: "콘테스트는 로그인 후 참여할 수 있습니다."
                        })]
                    }),
                    footers: [(0, o.jsx)(E.Z, {
                        "data-a2s-web-obj": "Avatar_Main",
                        "data-a2s-option-name": "Notice",
                        "data-a2s-option-type": "Login",
                        "data-a2s-option-pagecode": "65478",
                        children: (0, o.jsx)(y, {
                            onClick: () => {
                                (0, D.k)("event", "avatar_로그인"), window.inface.auth.gotoSignIn()
                            }
                        })
                    }, "system-message-login"), (0, o.jsx)(E.Z, {
                        "data-a2s-web-obj": "Avatar_Main",
                        "data-a2s-option-name": "Notice",
                        "data-a2s-option-type": "Non_login",
                        "data-a2s-option-pagecode": "65478",
                        children: (0, o.jsx)(M, {
                            onClick: () => {
                                console.log("??"), (0, D.k)("event", "avatar_로그인없이아바타만들기"), e(!0)
                            }
                        })
                    }, "system-message-without-login")]
                })
            }
            let L = {
                withoutLogin: ["로그인 상태에서만 아바타를 제출할 수 있습니다.", "다시 시도해 주세요."],
                error: ["알 수 없는 오류로 제출에 실패했습니다.", "잠시 후 다시 시도해 주세요."]
            };

            function Z() {
                var t;
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        onClose: n,
                        message: a = "error",
                        messages: i = [],
                        footers: s
                    } = e,
                    r = i.length <= 0 ? null !== (t = L[a]) && void 0 !== t ? t : L.error : i;
                return (0, o.jsx)(b, { ...e,
                    contentsLineCount: r.length,
                    content: (0, o.jsx)("span", {
                        style: {
                            textAlign: "center"
                        },
                        children: r.map(t => (0, o.jsx)("span", {
                            className: "global-pc-line-breaker global-mobile-line-breaker",
                            children: t
                        }, t))
                    }),
                    footers: [(0, o.jsx)(f, {
                        onClick: n
                    }, "system-message-confirm")]
                })
            }

            function P(t) {
                let {
                    onClose: e
                } = t;
                return (0, o.jsx)(b, { ...t,
                    onClose: () => {
                        (0, E.D)("Avatar_Write", {
                            name: "Alert",
                            type: "Close_Close",
                            pagecode: "65478"
                        }), e()
                    },
                    contentsLineCount: 2,
                    content: (0, o.jsxs)("span", {
                        style: {
                            textAlign: "center"
                        },
                        children: [(0, o.jsx)("span", {
                            className: "global-pc-line-breaker global-mobile-line-breaker",
                            children: "콘테스트에 아바타 제출하기가 완료되지 않았습니다."
                        }), (0, o.jsx)("span", {
                            children: "그래도 창을 닫으시겠습니까?"
                        })]
                    }),
                    footers: [(0, o.jsx)(E.Z, {
                        "data-a2s-web-obj": "Avatar_Write",
                        "data-a2s-option-name": "Alert",
                        "data-a2s-option-type": "Close_Cancel",
                        "data-a2s-option-pagecode": "65478",
                        children: (0, o.jsx)(h, {
                            onClick: () => e(!1)
                        })
                    }, "system-message-cancel"), (0, o.jsx)(E.Z, {
                        "data-a2s-web-obj": "Avatar_Write",
                        "data-a2s-option-name": "Alert",
                        "data-a2s-option-type": "Close_Comfirm",
                        "data-a2s-option-pagecode": "65478",
                        children: (0, o.jsx)(f, {
                            onClick: () => e(!0)
                        }, "system-message-confirm")
                    }, "system-message-confirm")]
                })
            }

            function H(t) {
                let {
                    onClose: e
                } = t;
                return (0, o.jsx)(b, { ...t,
                    onClose: () => {
                        (0, E.D)("Avatar_Done", {
                            name: "Alert",
                            type: "Login_Close",
                            pagecode: "65478"
                        }), e()
                    },
                    contentsLineCount: 2,
                    content: (0, o.jsxs)("span", {
                        style: {
                            textAlign: "center"
                        },
                        children: [(0, o.jsx)("span", {
                            className: "global-pc-line-breaker global-mobile-line-breaker",
                            children: "제출하기는 로그인 후 진행할 수 있습니다."
                        }), (0, o.jsx)("span", {
                            children: "로그인하고 아바타를 제출하시겠습니까?"
                        })]
                    }),
                    footers: [(0, o.jsx)(E.Z, {
                        "data-a2s-web-obj": "Avatar_Done",
                        "data-a2s-option-name": "Alert",
                        "data-a2s-option-type": "Login_Cancel",
                        "data-a2s-option-pagecode": "65478",
                        children: (0, o.jsx)(h, {
                            onClick: () => {
                                t.onClose()
                            }
                        })
                    }, "system-message-cancel"), (0, o.jsx)(E.Z, {
                        "data-a2s-web-obj": "Avatar_Done",
                        "data-a2s-option-name": "Alert",
                        "data-a2s-option-type": "Login_Comfirm",
                        "data-a2s-option-pagecode": "65478",
                        children: (0, o.jsx)(f, {
                            onClick: () => {
                                window.inface.auth.gotoSignIn()
                            }
                        }, "system-message-confirm")
                    }, "system-message-confirm")]
                })
            }

            function V(t) {
                return (0, o.jsx)(b, { ...t,
                    contentsLineCount: 3,
                    content: (0, o.jsxs)("span", {
                        style: {
                            textAlign: "center"
                        },
                        children: [(0, o.jsx)("span", {
                            className: "global-pc-line-breaker global-mobile-line-breaker",
                            children: "베스트 드레서 콘테스트는"
                        }), (0, o.jsx)("span", {
                            className: "global-pc-line-breaker global-mobile-line-breaker",
                            children: "로그인 후 참여할 수 있습니다."
                        }), (0, o.jsx)("span", {
                            className: "global-pc-line-breaker global-mobile-line-breaker",
                            children: "다시 시도해 주세요."
                        })]
                    }),
                    footers: [(0, o.jsx)(f, {
                        onClick: async () => {
                            t.onClose()
                        }
                    }, "system-message-confirm")]
                })
            }

            function I(t) {
                return (0, o.jsx)(b, { ...t,
                    contentsLineCount: 3,
                    content: (0, o.jsxs)("span", {
                        style: {
                            textAlign: "center"
                        },
                        children: [(0, o.jsxs)("span", {
                            className: "global-pc-line-breaker",
                            children: ["콘테스트 아바타는 월 1회에 한해 제출할 수 ", (0, o.jsx)("span", {
                                className: "global-mobile-line-breaker"
                            }), " 있으며,"]
                        }), (0, o.jsxs)("span", {
                            className: "global-pc-line-breaker",
                            children: [" ", "제출 후에는 수정/삭제를 할 수 없습니다.", (0, o.jsx)("span", {
                                className: "global-mobile-line-breaker"
                            })]
                        }), (0, o.jsx)("span", {
                            className: "global-pc-line-breaker",
                            children: "콘테스트에 아바타를 제출하시겠습니까?"
                        })]
                    }),
                    footers: [(0, o.jsx)(h, {
                        onClick: () => {
                            t.onClose(!1)
                        }
                    }, "system-message-cancel"), (0, o.jsx)(f, {
                        onClick: () => {
                            t.onClose(!0)
                        }
                    }, "system-message-confirm")]
                })
            }
            let B = {
                AvatarMakerSystemMessageShareURL: S,
                AvatarMakerSystemMessageEnterMaker: R,
                AvatarMakerSystemMessageError: Z,
                AvatarMakerSystemMessageSubmitContestNeedLogin: V,
                AvatarMakerSystemMessageSubmitContestNotice: I,
                openShareURL: t => (0, a.k)(e => {
                    let {
                        resolve: n
                    } = e;
                    return (0, o.jsx)(S, { ...t,
                        onClose: t => n(t)
                    })
                }),
                openEnterMaker: t => (0, a.k)(e => {
                    let {
                        resolve: n
                    } = e;
                    return (0, o.jsx)(R, { ...t,
                        onClose: t => n(t)
                    })
                }),
                openError: t => (0, a.k)(e => {
                    let {
                        resolve: n
                    } = e;
                    return (0, o.jsx)(Z, { ...t,
                        onClose: t => n(t)
                    })
                }),
                openMessage: t => (0, a.k)(e => {
                    let {
                        resolve: n
                    } = e;
                    return (0, o.jsx)(Z, { ...t,
                        onClose: t => n(t)
                    })
                }),
                openConfirmMessage: t => (0, a.k)(e => {
                    let {
                        resolve: n
                    } = e;
                    return (0, o.jsx)(b, { ...t,
                        onClose: t => n(t)
                    })
                }),
                openNeedLogin: t => (0, a.k)(e => {
                    let {
                        resolve: n
                    } = e;
                    return (0, o.jsx)(V, { ...t,
                        onClose: t => n(t)
                    })
                }),
                openPreSubmitNeedLogin: t => (0, a.k)(e => {
                    let {
                        resolve: n
                    } = e;
                    return (0, o.jsx)(H, { ...t,
                        onClose: t => n(t)
                    })
                }),
                openCloseConfirm: t => (0, a.k)(e => {
                    let {
                        resolve: n
                    } = e;
                    return (0, o.jsx)(P, { ...t,
                        onClose: t => n(t)
                    })
                }),
                openNotice: t => (0, a.k)(e => {
                    let {
                        resolve: n
                    } = e;
                    return (0, o.jsx)(I, { ...t,
                        onClose: t => n(t)
                    })
                })
            }
        },
        7561: function(t, e, n) {
            "use strict";
            n.d(e, {
                R: function() {
                    return p
                }
            });
            var o = n(6063),
                a = n(9015),
                i = n(4673),
                s = n.n(i),
                r = n(9396),
                c = n.n(r),
                l = n(4617),
                d = n(5145),
                u = n(9745);
            let m = s().bind(c());

            function _(t) {
                let {
                    onClose: e,
                    a2s: n
                } = t, [i, s] = (0, l.useState)("");

                function r(t) {
                    let {
                        value: e
                    } = t.target;
                    s(e)
                }

                function c() {
                    e(!1)
                }
                return (0, o.jsx)(a.Z, {
                    onClose: c,
                    children: (0, o.jsx)(a.Z.Main, {
                        children: (0, o.jsxs)("div", {
                            className: m("container"),
                            children: [(0, o.jsx)(u.Z, {
                                "data-a2s-web-obj": null == n ? void 0 : n.object,
                                "data-a2s-option-name": "".concat(null == n ? void 0 : n.namePrefix, "_close"),
                                "data-a2s-option-value": null == n ? void 0 : n.value,
                                "data-a2s-option-pagecode": "65478",
                                children: (0, o.jsx)("button", {
                                    className: m("close-button"),
                                    onClick: c
                                })
                            }), (0, o.jsx)("div", {
                                className: m("title"),
                                children: "신고 사유를 선택해주세요."
                            }), (0, o.jsx)("ul", {
                                className: m("reason-list"),
                                children: ["부적절한 닉네임", "부적절한 내용", "도배/광고/홍보 등", "기타"].map(t => (0, o.jsx)("li", {
                                    className: m("reason-item"),
                                    children: (0, o.jsx)(u.Z, {
                                        "data-a2s-web-obj": null == n ? void 0 : n.object,
                                        "data-a2s-option-name": "".concat(null == n ? void 0 : n.namePrefix, "_reason"),
                                        "data-a2s-option-type": t,
                                        "data-a2s-option-value": null == n ? void 0 : n.value,
                                        "data-a2s-option-pagecode": "65478",
                                        children: (0, o.jsx)("button", {
                                            className: m("reason-button", i === t && "selected"),
                                            value: t,
                                            onClick: r,
                                            children: t
                                        })
                                    })
                                }, t))
                            }), (0, o.jsx)("span", {
                                children: (0, o.jsx)(u.Z, {
                                    "data-a2s-web-obj": null == n ? void 0 : n.object,
                                    "data-a2s-option-name": "".concat(null == n ? void 0 : n.namePrefix, "_cancel"),
                                    "data-a2s-option-value": null == n ? void 0 : n.value,
                                    "data-a2s-option-pagecode": "65478",
                                    children: (0, o.jsx)(d.Wk, {
                                        onClick: c
                                    })
                                })
                            }), (0, o.jsx)("span", {
                                className: m("confirm-button-container"),
                                children: (0, o.jsx)(u.Z, {
                                    "data-a2s-web-obj": null == n ? void 0 : n.object,
                                    "data-a2s-option-name": "".concat(null == n ? void 0 : n.namePrefix, "_confirm"),
                                    "data-a2s-option-value": null == n ? void 0 : n.value,
                                    "data-a2s-option-pagecode": "65478",
                                    children: (0, o.jsx)(d.WO, {
                                        onClick: function() {
                                            if (!i) return d.lp.openMessage({
                                                messages: ["신고 사유를 1개 이상 선택해 주세요."]
                                            });
                                            e(i)
                                        }
                                    })
                                })
                            })]
                        })
                    })
                })
            }
            var h = n(9506);
            async function p(t) {
                return (0, h.k)(e => {
                    let {
                        resolve: n
                    } = e;
                    return (0, o.jsx)(_, { ...t,
                        onClose: t => n(t)
                    })
                }, "avatar-report")
            }
        },
        9506: function(t, e, n) {
            "use strict";
            n.d(e, {
                k: function() {
                    return a
                }
            });
            var o = n(6641);
            async function a() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = function() {
                        let t = document.createElement("div");
                        return document.body.appendChild(t), t
                    }(),
                    n = (0, o.createRoot)(e);
                return new Promise((e, o) => (function(e) {
                    let {
                        resolve: o,
                        reject: a
                    } = e;
                    n.render(t({
                        resolve: o,
                        reject: a
                    }))
                })({
                    resolve: e,
                    reject: o
                })).finally(() => {
                    n.unmount(), document.body.contains(e) && document.body.removeChild(e)
                })
            }
        },
        3708: function(t, e, n) {
            "use strict";
            n.d(e, {
                Hk: function() {
                    return ts
                },
                Lw: function() {
                    return O
                },
                pu: function() {
                    return q
                },
                TX: function() {
                    return Q
                },
                f1: function() {
                    return K
                },
                Ep: function() {
                    return te
                },
                F6: function() {
                    return tm
                },
                Qy: function() {
                    return _
                },
                Ao: function() {
                    return tg
                },
                vd: function() {
                    return x
                },
                HO: function() {
                    return N
                },
                G6: function() {
                    return E
                },
                iY: function() {
                    return P
                },
                OM: function() {
                    return tr
                }
            });
            var o = n(9015),
                a = n(9506),
                i = n(6063),
                s = n(4673),
                r = n.n(s),
                c = n(9554),
                l = n.n(c),
                d = n(9745);
            let u = r().bind(l());
            var m = function(t) {
                var e, n, a;
                let {
                    history: s,
                    onClose: r
                } = t;

                function c() {
                    (0, d.D)("CoinShop", {
                        name: "CoinHistory_Close",
                        pagecode: "65478"
                    }), r()
                }
                let l = (null == s ? void 0 : null === (e = s.chargeHistory) || void 0 === e ? void 0 : e.length) === 0;
                return (0, i.jsx)(o.Z, {
                    onClose: c,
                    children: (0, i.jsx)(o.Z.Main, {
                        children: (0, i.jsxs)("div", {
                            className: u("container"),
                            children: [(0, i.jsx)("div", {
                                className: u("history-bg"),
                                alt: "코인 획득 이력 배경 이미지"
                            }), (0, i.jsx)("button", {
                                className: u("close-button"),
                                onClick: c
                            }), (0, i.jsx)("div", {
                                className: u("history-notice"),
                                children: (0, i.jsx)("span", {
                                    className: u("history-notice-text"),
                                    children: "조회기간 : 매월 1일 ~ 마지막날 23:59:59"
                                })
                            }), (0, i.jsxs)("span", {
                                className: u("coin-point"),
                                children: [null !== (a = null == s ? void 0 : s.totalCoinCount) && void 0 !== a ? a : 0, "개"]
                            }), (0, i.jsx)("span", {
                                className: u("coin-display-description"),
                                children: "이번 달 획득한 코인 수가 표시됩니다."
                            }), (0, i.jsx)("strong", {
                                className: u("coin-history-title"),
                                children: "획득일시"
                            }), l ? (0, i.jsx)("span", {
                                className: u("no-history-text"),
                                children: "획득한 코인이 없습니다. "
                            }) : (0, i.jsx)("ul", {
                                className: u("coin-history-list"),
                                children: null == s ? void 0 : null === (n = s.chargeHistory) || void 0 === n ? void 0 : n.map(t => (0, i.jsx)("li", {
                                    className: u("coin-history-list-item"),
                                    children: t.date
                                }, t.date))
                            })]
                        })
                    })
                })
            };
            async function _(t) {
                return (0, a.k)(e => {
                    let {
                        resolve: n
                    } = e;
                    return (0, i.jsx)(m, { ...t,
                        onClose: t => n(t)
                    })
                }, "coin-history")
            }
            var h = n(9267),
                p = n.n(h),
                v = n(4617);
            let g = r().bind(p());
            var f = function(t) {
                let {
                    onClose: e
                } = t;
                return (0, v.useEffect)(() => {
                    (0, d.D)("Alert", {
                        name: "Fail",
                        pagecode: "65478"
                    })
                }, []), (0, i.jsx)(o.Z, {
                    onClose: e,
                    children: (0, i.jsx)(o.Z.Main, {
                        children: (0, i.jsxs)("div", {
                            className: g("container"),
                            children: [(0, i.jsx)("div", {
                                className: g("failed-alert-bg"),
                                alt: "API 호출 실패 배경 이미지"
                            }), (0, i.jsx)("button", {
                                className: g("close-button"),
                                onClick: e
                            }), (0, i.jsx)("div", {
                                className: g("button-controller"),
                                children: (0, i.jsx)("button", {
                                    className: g("confirm-button"),
                                    children: (0, i.jsx)("span", {
                                        className: g("confirm-button-image"),
                                        onClick: e
                                    })
                                })
                            })]
                        })
                    })
                })
            };
            async function x(t) {
                (0, a.k)(e => {
                    let {
                        resolve: n
                    } = e;
                    return (0, i.jsx)(f, { ...t,
                        onClose: t => n(t)
                    })
                }, "failed-alert")
            }
            var b = n(1418),
                j = n.n(b),
                C = n(1003);
            let w = r().bind(j());
            var y = function(t) {
                let {
                    hrefURL: e,
                    gameName: n,
                    onClose: a
                } = t;
                return (0, i.jsx)(o.Z, {
                    onClose: a,
                    children: (0, i.jsx)(o.Z.Main, {
                        children: (0, i.jsxs)("div", {
                            className: w("login-container"),
                            children: [(0, i.jsx)("div", {
                                className: w("login-image"),
                                src: "/event/modal/login/bg.png",
                                width: 690,
                                height: 356,
                                alt: "로그인을 잊으셨나요 배경 이미지"
                            }), (0, i.jsx)("button", {
                                className: w("login-close-button"),
                                onClick: a
                            }), (0, i.jsxs)("div", {
                                className: w("button-controller"),
                                children: [(0, i.jsx)(d.Z, {
                                    "data-a2s-web-obj": "Relay",
                                    "data-a2s-option-name": "Login",
                                    "data-a2s-option-pagecode": "65478",
                                    "data-a2s-option-value": n,
                                    children: (0, i.jsx)("button", {
                                        className: w("control-button"),
                                        onClick: () => {
                                            var t, e, n;
                                            (0, C.k)("event", "login_btn_0314"), null === (n = window) || void 0 === n || null === (e = n.inface) || void 0 === e || null === (t = e.auth) || void 0 === t || t.gotoSignIn()
                                        },
                                        children: (0, i.jsx)("span", {
                                            className: w("login-button-image"),
                                            alt: "로그인 버튼"
                                        })
                                    })
                                }), (0, i.jsx)(d.Z, {
                                    "data-a2s-web-obj": "Relay",
                                    "data-a2s-option-name": "Game",
                                    "data-a2s-option-pagecode": "65478",
                                    "data-a2s-option-value": n,
                                    children: (0, i.jsx)("a", {
                                        className: w("control-button"),
                                        href: e,
                                        target: "_blank",
                                        children: (0, i.jsx)("span", {
                                            className: w("goto-event-button-image"),
                                            alt: "이벤트 바로가기"
                                        })
                                    })
                                })]
                            }), (0, i.jsxs)("p", {
                                className: w("login-notice"),
                                children: [(0, i.jsx)("span", {
                                    className: w("login-notice-text"),
                                    children: "* 코인 획득 없이 이벤트 페이지로 이동합니다.\xa0"
                                }), (0, i.jsx)("span", {
                                    className: w("login-notice-text"),
                                    children: "(코인 획득 및 획득 현황은 로그인 후 확인 할 수 있습니다.)"
                                })]
                            })]
                        })
                    })
                })
            };
            async function N(t) {
                (0, a.k)(e => {
                    let {
                        resolve: n
                    } = e;
                    return (0, i.jsx)(y, { ...t,
                        onClose: t => n(t)
                    })
                }, "forgot-login")
            }
            var k = n(9648),
                A = n.n(k);
            let M = r().bind(A());
            var S = function(t) {
                let {
                    hrefURL: e = "https://nexon.com",
                    gameName: n,
                    onClose: a
                } = t;

                function s() {
                    window.open(e, "_blank"), a()
                }
                return (0, i.jsx)(o.Z, {
                    onClose: s,
                    children: (0, i.jsx)(o.Z.Main, {
                        children: (0, i.jsxs)("div", {
                            className: M("container"),
                            children: [(0, i.jsx)("div", {
                                className: M("get-coin-bg"),
                                alt: "코인 획득 배경"
                            }), (0, i.jsx)("button", {
                                className: M("close-button"),
                                onClick: s
                            }), (0, i.jsx)("span", {
                                className: M("point-text"),
                                children: "+10"
                            }), (0, i.jsx)("div", {
                                className: M("button-controller"),
                                children: (0, i.jsx)(d.Z, {
                                    "data-a2s-web-obj": "Relay",
                                    "data-a2s-option-name": "Done",
                                    "data-a2s-option-pagecode": "65478",
                                    "data-a2s-option-value": n,
                                    children: (0, i.jsx)("a", {
                                        className: M("confirm-button"),
                                        href: e,
                                        target: "_blank",
                                        children: (0, i.jsx)("span", {
                                            className: M("confirm-button-image"),
                                            onClick: a
                                        })
                                    })
                                })
                            })]
                        })
                    })
                })
            };
            async function E(t) {
                (0, a.k)(e => {
                    let {
                        resolve: n
                    } = e;
                    return (0, i.jsx)(S, { ...t,
                        onClose: t => n(t)
                    })
                }, "get-coin")
            }
            var D = n(1157),
                R = n.n(D);
            let L = r().bind(R());
            var Z = function(t) {
                let {
                    onClose: e
                } = t;

                function n() {
                    (0, d.D)("CoinShop", {
                        name: "Notice_Close",
                        pagecode: "65478"
                    }), e()
                }
                return (0, i.jsx)(o.Z, {
                    onClose: n,
                    children: (0, i.jsx)(o.Z.Main, {
                        children: (0, i.jsxs)("div", {
                            className: L("container"),
                            children: [(0, i.jsx)("button", {
                                className: L("close-button"),
                                onClick: n,
                                children: (0, i.jsx)("span", {
                                    className: L("close-button-image"),
                                    alt: "닫기 버튼"
                                })
                            }), (0, i.jsx)("div", {
                                className: L("notice-title-container"),
                                children: (0, i.jsx)("div", {
                                    className: L("notice-alert-icon"),
                                    alt: "유의사항"
                                })
                            }), (0, i.jsxs)("div", {
                                className: L("notice-container"),
                                children: [(0, i.jsxs)("strong", {
                                    className: L("notice-sub-title"),
                                    children: ["<", "30주년 기프트샵 관련 유의사항", ">"]
                                }), (0, i.jsxs)("ul", {
                                    className: L("notice-list"),
                                    children: [(0, i.jsxs)("li", {
                                        children: [(0, i.jsx)("div", {
                                            children: "매월 1일 오전 0시 기프트샵이 업데이트됩니다."
                                        }), (0, i.jsx)("div", {
                                            children: "기프트샵 업데이트 시, 보유한 30주년 코인 개수가 초기화됩니다."
                                        })]
                                    }), (0, i.jsx)("li", {
                                        children: (0, i.jsx)("div", {
                                            children: "기프트샵 업데이트 시, 당월 릴레이 이벤트 대상 게임의 아이템으로 기프트샵 교환 상품이 변경됩니다."
                                        })
                                    }), (0, i.jsxs)("li", {
                                        children: [(0, i.jsx)("div", {
                                            children: "넥슨 점검 시, 점검 시간 동안 이벤트 페이지 및 쿠폰 사용이 어려울 수 있습니다."
                                        }), (0, i.jsxs)("div", {
                                            children: ["넥슨 정기점검은 (", (0, i.jsxs)("a", {
                                                className: L("notice-link"),
                                                href: "https://notice.nexon.com/Notice/NoticeList",
                                                target: "_blank",
                                                children: ["▶", (0, i.jsx)("span", {
                                                    className: L("notice-link-text"),
                                                    children: "넥슨 공지사항"
                                                })]
                                            }), ")을 통해 안내드리고 있으니 이용에 참고해주시기 바랍니다."]
                                        })]
                                    }), (0, i.jsx)("li", {
                                        children: (0, i.jsx)("div", {
                                            children: "본 이벤트는 회사 사정에 따라 사전 안내 없이 변경될 수 있습니다."
                                        })
                                    }), (0, i.jsx)("li", {
                                        children: (0, i.jsxs)("div", {
                                            children: ["이벤트 관련 문의는 (", (0, i.jsxs)("a", {
                                                className: L("notice-link"),
                                                href: "https://cs.nexon.com/HelpBoard/Nexon?gamecode=345&category=74997&direct=direct",
                                                target: "_blank",
                                                children: ["▶", (0, i.jsxs)("span", {
                                                    className: L("notice-link-text"),
                                                    children: ["게임문의 외 ", ">", " 넥슨 30주년 이벤트 고객센터"]
                                                })]
                                            }), ")를 이용해주시기 바랍니다."]
                                        })
                                    })]
                                }), (0, i.jsxs)("strong", {
                                    className: L("notice-sub-title"),
                                    children: ["<", "상품 교환 관련 유의사항", ">"]
                                }), (0, i.jsxs)("ul", {
                                    className: L("notice-list"),
                                    children: [(0, i.jsx)("li", {
                                        children: (0, i.jsx)("div", {
                                            children: "매월 넥슨ID 당 기프트샵 교환 상품을 각 1회 씩 교환할 수 있습니다."
                                        })
                                    }), (0, i.jsx)("li", {
                                        children: (0, i.jsxs)("div", {
                                            children: ["교환 상품에 대한 자세한 정보는 30주년 기프트샵 ", ">", " 상품 설명을 통해 확인할 수 있습니다."]
                                        })
                                    }), (0, i.jsx)("li", {
                                        children: (0, i.jsxs)("div", {
                                            children: ["교환 상품의 쿠폰 번호 및 유효기간은 넥슨 쇼핑 ", ">", " 30주년 기프트샵 ", ">", " MY ", ">", " 내 쿠폰함에서 확인할 수 있습니다."]
                                        })
                                    }), (0, i.jsx)("li", {
                                        children: (0, i.jsx)("div", {
                                            children: "잘못 교환하거나 사용 기한이 만료된 쿠폰은 교환/철회가 불가능하니 신중히 이용해주세요."
                                        })
                                    })]
                                }), (0, i.jsxs)("strong", {
                                    className: L("notice-sub-title"),
                                    children: ["<", "상품 응모 관련 유의사항", ">"]
                                }), (0, i.jsxs)("ul", {
                                    className: L("notice-list"),
                                    children: [(0, i.jsx)("li", {
                                        children: (0, i.jsx)("div", {
                                            children: "매월 넥슨ID 당 기프트샵 응모 상품을 각 1회씩 응모할 수 있습니다."
                                        })
                                    }), (0, i.jsx)("li", {
                                        children: (0, i.jsxs)("div", {
                                            children: ["30주년 기프트샵에서 ", "'", "넥슨캐시 3만원 또는 착한선물 응모권", "'", " 교환 시, 자동으로 응모됩니다."]
                                        })
                                    }), (0, i.jsx)("li", {
                                        children: (0, i.jsxs)("div", {
                                            children: ["응모 내역은 ", "'", "교환 내역 확인", "'", "을 통해 확인하실 수 있습니다."]
                                        })
                                    }), (0, i.jsxs)("li", {
                                        children: [(0, i.jsxs)("div", {
                                            children: ["추첨 결과는 매월 14일 (", (0, i.jsxs)("a", {
                                                className: L("notice-link"),
                                                href: "https://notice.nexon.com/Notice/NoticeList",
                                                target: "_blank",
                                                children: ["▶", (0, i.jsx)("span", {
                                                    className: L("notice-link-text"),
                                                    children: "넥슨 공지사항"
                                                })]
                                            }), ") 및 넥슨 쪽지를 통해 안내 드리겠습니다."]
                                        }), (0, i.jsx)("div", {
                                            children: "※ 넥슨캐시 당첨 시, 매월 14일 이벤트에 참여하신 넥슨ID로 지급됩니다."
                                        }), (0, i.jsx)("div", {
                                            children: "※ 착한선물 당첨 시, 상품 배송을 위한 수령 동의 및 개인정보 수집이 진행됩니다."
                                        }), (0, i.jsx)("div", {
                                            children: "※ 월별 착한선물 종류에 따라 당첨 시 제세공과금이 발생할 수 있으며, 제세공과금은 회사에서 부담합니다."
                                        })]
                                    }), (0, i.jsxs)("li", {
                                        children: [(0, i.jsx)("div", {
                                            children: "넥슨캐시는 본인확인이 완료된 계정에서만 사용할 수 있습니다."
                                        }), (0, i.jsxs)("div", {
                                            children: ["* 본인확인 방법: 넥슨닷컴 ", ">", " 내정보 ", ">", " 내정보관리 ", ">", " 본인확인"]
                                        })]
                                    }), (0, i.jsx)("li", {
                                        children: (0, i.jsx)("div", {
                                            children: "이벤트 참여 후 넥슨ID를 탈퇴할 경우, 추첨에서 제외되거나 당첨이 취소될 수 있습니다."
                                        })
                                    }), (0, i.jsx)("li", {
                                        children: (0, i.jsx)("div", {
                                            children: "이벤트에 비정상적인 방법으로 참여하거나 운영정책 위반 행위가 확인될 경우 당첨이 취소될 수 있습니다."
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                })
            };
            async function P(t) {
                return (0, a.k)(e => {
                    let {
                        resolve: n
                    } = e;
                    return (0, i.jsx)(Z, { ...t,
                        onClose: t => n(t)
                    })
                }, "notice-message")
            }
            var H = n(1589),
                V = n.n(H);
            let I = r().bind(V());

            function B(t) {
                let {
                    resolve: e,
                    content: n,
                    buttons: a
                } = t, s = () => {
                    e({
                        confirm: !1
                    })
                }, r = v.Children.map(a, t => v.cloneElement(t, {
                    resolve: e,
                    ...t.props
                }));
                return (0, i.jsx)(o.Z, {
                    onClose: s,
                    children: (0, i.jsx)(o.Z.Main, {
                        children: (0, i.jsxs)("div", {
                            className: I("container"),
                            children: [(0, i.jsx)("button", {
                                className: I("close-button"),
                                onClick: s
                            }), (0, i.jsx)("div", {
                                className: I("content"),
                                children: n
                            }), a ? (0, i.jsx)("div", {
                                className: I("button-container"),
                                children: r
                            }) : (0, i.jsx)("div", {
                                className: I("no-button")
                            })]
                        })
                    })
                })
            }
            var T = n(2653),
                F = n.n(T);

            function O(t) {
                let {
                    key: e,
                    resolve: n
                } = t;
                return (0, i.jsx)("button", {
                    className: F().button,
                    onClick: () => {
                        n({
                            confirm: !1
                        })
                    },
                    children: "취소"
                }, e)
            }
            var W = n(8882),
                z = n.n(W);

            function q(t) {
                let {
                    key: e,
                    resolve: n
                } = t;
                return (0, i.jsx)("button", {
                    className: z().button,
                    onClick: () => {
                        n({
                            confirm: !0
                        })
                    },
                    children: "확인"
                }, e)
            }
            var Y = n(1545),
                G = n.n(Y),
                U = n(1108),
                Q = v.forwardRef(function(t, e) {
                    let {
                        key: n,
                        resolve: o,
                        ...a
                    } = t;
                    return (0, i.jsx)("button", {
                        ref: e,
                        ...a,
                        className: G().button,
                        onClick: () => {
                            var t, e, n;
                            return (0, U.P)().loginButton(), null === (n = window) || void 0 === n ? void 0 : null === (e = n.inface) || void 0 === e ? void 0 : null === (t = e.auth) || void 0 === t ? void 0 : t.gotoSignIn()
                        },
                        children: "로그인"
                    }, n)
                }),
                X = n(556),
                J = n.n(X),
                K = v.forwardRef(function(t, e) {
                    let {
                        key: n,
                        resolve: o,
                        ...a
                    } = t;
                    return (0, i.jsx)("button", {
                        ref: e,
                        ...a,
                        className: J().button,
                        onClick: () => {
                            (0, U.P)().quizSolveButton(), o({
                                confirm: !0
                            })
                        },
                        children: "퀴즈풀기"
                    }, n)
                }),
                $ = n(3522),
                tt = n.n($),
                te = v.forwardRef(function(t, e) {
                    let {
                        key: n,
                        resolve: o,
                        ...a
                    } = t;
                    return (0, i.jsx)("button", {
                        ref: e,
                        ...a,
                        className: tt().button,
                        onClick: () => window.open("https://member.nexon.com/verify/realname.aspx", "_self"),
                        children: "본인확인"
                    }, n)
                }),
                tn = n(1831),
                to = n.n(tn);

            function ta(t, e) {
                return e && t ? [{
                    icon: "NEXON",
                    accountName: ""
                }, {
                    icon: "facebook",
                    accountName: "Facebook 계정"
                }, {
                    icon: "google",
                    accountName: "Google 계정"
                }, {
                    icon: "naver",
                    accountName: "Naver 계정"
                }, {
                    icon: "apple",
                    accountName: "Apple 계정"
                }][t] : {
                    icon: "",
                    accountName: ""
                }
            }
            let ti = r().bind(to());

            function ts(t) {
                var e;
                let {
                    account: n,
                    userProfile: o
                } = t, a = null == o ? void 0 : null === (e = o.local_profile_props) || void 0 === e ? void 0 : e.tpa_code;
                return (0, i.jsxs)("div", {
                    className: to().container,
                    children: [(0, i.jsxs)("span", {
                        className: to().title,
                        children: ["현재 로그인한 넥슨 ", (0, i.jsx)("strong", {
                            children: "ID"
                        })]
                    }), (0, i.jsxs)("span", {
                        className: to().account,
                        children: [0 !== a && (0, i.jsx)("span", {
                            className: ti("auth-information-icon", ta(a, o).icon)
                        }), 0 === a && (0, i.jsx)(i.Fragment, {
                            children: n
                        }), (0, i.jsx)("span", {
                            className: ti("auth-information-name"),
                            children: ta(a, o).accountName
                        })]
                    })]
                })
            }
            async function tr(t) {
                return (0, a.k)(e => {
                    let {
                        resolve: n
                    } = e;
                    return (0, i.jsx)(B, { ...t,
                        resolve: n
                    })
                }, "quiz-modal")
            }
            var tc = n(2325),
                tl = n.n(tc);
            let td = r().bind(tl());
            var tu = function(t) {
                var e;
                let {
                    cashHistory: n,
                    onClose: a
                } = t;

                function s() {
                    a()
                }
                let r = (null == n ? void 0 : null === (e = n.cashInfos) || void 0 === e ? void 0 : e.length) === 0;
                return (0, i.jsx)(o.Z, {
                    onClose: s,
                    children: (0, i.jsx)(o.Z.Main, {
                        children: (0, i.jsxs)("div", {
                            className: td("container", r ? "no-history" : "on-history"),
                            children: [(0, i.jsx)("div", {
                                tag: "div",
                                className: td("history-bg"),
                                alt: "캐시 획득 이력 배경 이미지"
                            }), (0, i.jsx)("button", {
                                className: td("close-button"),
                                onClick: s
                            }), (0, i.jsxs)("div", {
                                className: td("history-contents"),
                                children: [(0, i.jsx)("div", {
                                    className: td("cash-history"),
                                    children: r ? (0, i.jsx)("span", {
                                        className: td("no-history-text"),
                                        children: "넥슨캐시 지급 내역이 없습니다."
                                    }) : (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsxs)("div", {
                                            className: td("cash-history-header"),
                                            children: [(0, i.jsx)("div", {
                                                className: td("cash-history-header-name"),
                                                children: "지급 금액"
                                            }), (0, i.jsx)("div", {
                                                className: td("cash-history-header-date"),
                                                children: "지급일"
                                            })]
                                        }), (0, i.jsx)("ul", {
                                            className: td("cash-history-list"),
                                            children: null == n ? void 0 : n.cashInfos.map(t => {
                                                var e;
                                                return (0, i.jsxs)("li", {
                                                    className: td("cash-history-list-item"),
                                                    children: [(0, i.jsx)("div", {
                                                        className: td("cash-history-name"),
                                                        children: null !== (e = ["넥슨캐시 3천원", "넥슨캐시 30만원"][t.cashType]) && void 0 !== e ? e : "-"
                                                    }), (0, i.jsx)("div", {
                                                        className: td("cash-history-date"),
                                                        children: t.date
                                                    })]
                                                }, t.date)
                                            })
                                        })]
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: td("cash-history-cs"),
                                    children: [(0, i.jsx)("span", {
                                        className: td("mobile-block"),
                                        children: "이벤트 관련 문의는 "
                                    }), (0, i.jsxs)("span", {
                                        className: td("mobile-block"),
                                        children: [(0, i.jsxs)("a", {
                                            className: td("cash-history-cs-link"),
                                            href: "https://cs.nexon.com/HelpBoard/Nexon?gamecode=345&category=74997&direct=direct",
                                            children: ["(▶게임문의 외 ", ">", " 넥슨 30주년 이벤트 고객센터)"]
                                        }), "를"]
                                    }), " ", (0, i.jsx)("span", {
                                        className: td("mobile-block"),
                                        children: "이용해주시기 바랍니다."
                                    })]
                                })]
                            })]
                        })
                    })
                })
            };
            async function tm(t) {
                return (0, a.k)(e => {
                    let {
                        resolve: n
                    } = e;
                    return (0, i.jsx)(tu, { ...t,
                        onClose: t => n(t)
                    })
                }, "cash-history")
            }
            var t_ = n(4979),
                th = n.n(t_);
            let tp = r().bind(th());
            var tv = t => {
                let e = (0, v.useRef)(null),
                    {
                        onClose: n
                    } = t;

                function a() {
                    (0, d.D)("Relay", {
                        name: "Coupon_Close",
                        pagecode: "65478"
                    }), n()
                }
                return (0, v.useEffect)(() => {
                    let t = () => {
                        let t = e.current;
                        if (!t) return;
                        let n = t.clientHeight,
                            o = window.innerHeight - 80;
                        o > n || (t.style.transform = "scale(".concat(o / n, ")"))
                    };
                    return window.addEventListener("resize", t), t(), () => window.removeEventListener("resize", t)
                }, []), (0, i.jsx)(o.Z, {
                    onClose: a,
                    children: (0, i.jsx)(o.Z.Main, {
                        children: (0, i.jsxs)("div", {
                            ref: e,
                            className: tp("container"),
                            children: [(0, i.jsx)("div", {
                                className: tp("coupon-verification-bg"),
                                alt: "쿠폰 확인 방법 안내 배경 이미지"
                            }), (0, i.jsx)("button", {
                                className: tp("close-button"),
                                onClick: a
                            }), (0, i.jsxs)("ul", {
                                className: tp("steps"),
                                children: [(0, i.jsx)("li", {
                                    className: tp("step-item", "step-1"),
                                    children: "30주년 기프트샵 바로가기 클릭"
                                }), (0, i.jsx)("li", {
                                    className: tp("step-item", "step-2"),
                                    children: "기프트샵 하단 MY 클릭"
                                }), (0, i.jsxs)("li", {
                                    className: tp("step-item", "step-3"),
                                    children: ["내 쿠폰함 클릭", " ", (0, i.jsx)("a", {
                                        className: tp("coupon-link"),
                                        href: "https://shopping.nexon.com/30th/coupon/usable",
                                        target: "_blank",
                                        children: "[바로가기]"
                                    })]
                                }), (0, i.jsxs)("li", {
                                    className: tp("step-item", "step-4"),
                                    children: ["원하는 아이템 쿠폰 클릭 후", (0, i.jsx)("br", {}), "쿠폰번호 확인하기 클릭"]
                                })]
                            })]
                        })
                    })
                })
            };
            async function tg(t) {
                (0, a.k)(e => {
                    let {
                        resolve: n
                    } = e;
                    return (0, i.jsx)(tv, { ...t,
                        onClose: t => n(t)
                    })
                })
            }(0, n(1774).default)(() => Promise.all([n.e(198), n.e(158), n.e(836), n.e(161), n.e(397), n.e(373)]).then(n.bind(n, 3397)), {
                loadableGenerated: {
                    webpack: () => [3397]
                }
            }), n(6998), n(7561)
        },
        9167: function(t, e, n) {
            "use strict";
            n.d(e, {
                C4: function() {
                    return E
                },
                Nn: function() {
                    return d
                },
                Lt: function() {
                    return N
                },
                Hn: function() {
                    return v
                },
                YT: function() {
                    return P
                },
                tl: function() {
                    return b
                }
            });
            var o = n(6063),
                a = n(4673),
                i = n.n(a),
                s = n(8753),
                r = n.n(s),
                c = n(4617);
            let l = i().bind(r());

            function d(t) {
                let {
                    className: e = ""
                } = t, [n, a] = (0, c.useState)(null);
                return (0, c.useEffect)(() => {
                    a(1 === function(t, e) {
                        let n = Math.ceil(1);
                        return Math.floor(Math.random() * (Math.floor(3) - n) + n)
                    }(0, 0) ? "female" : "male")
                }, []), (0, o.jsx)(o.Fragment, {
                    children: n && (0, o.jsx)("div", {
                        className: l(n, e)
                    })
                })
            }
            var u = n(5182),
                m = n.n(u),
                _ = n(4202),
                h = n(5502);
            let p = i().bind(m());

            function v(t) {
                let {
                    children: e,
                    sharingUrl: n,
                    className: a,
                    sharingA2S: i,
                    mobileFixedTop: s = 80,
                    ...r
                } = t, l = (0, c.useRef)(null), {
                    isMobile: d
                } = (0, _.dD)(), [u, m] = (0, c.useState)(!d);
                return (0, c.useEffect)(() => {
                    var t, e;
                    let n = l.current;
                    if (!n) return;
                    n.style.position = "", n.style.top = "";
                    let o = null == n ? void 0 : null === (t = n.getBoundingClientRect()) || void 0 === t ? void 0 : t.height,
                        a = (null == n ? void 0 : null === (e = n.getBoundingClientRect()) || void 0 === e ? void 0 : e.top) + window.scrollY,
                        i = () => {
                            let t = d ? s : innerHeight / 2 - o / 2;
                            window.scrollY + t > a ? (n.style.position = "fixed", n.style.top = "".concat(t, "px")) : (n.style.position = "", n.style.top = "")
                        };
                    return window.addEventListener("scroll", i), () => window.removeEventListener("scroll", i)
                }, [d]), (0, c.useEffect)(() => {
                    m(!d)
                }, [d]), (0, o.jsxs)("div", {
                    ref: l,
                    className: p("floating-container", !u && "closed", a),
                    ...r,
                    children: [d && (0, o.jsx)("button", {
                        className: p("toggle-button", u && "close-button"),
                        onClick: () => {
                            m(t => !t)
                        }
                    }), (0, o.jsxs)("div", {
                        className: p("floating-menu"),
                        children: [e, (0, o.jsx)(h.Zh, {
                            url: n,
                            hasButton: !0,
                            tooltipType: "left",
                            a2s: i
                        })]
                    })]
                })
            }
            var g = n(2620),
                f = n.n(g);
            let x = i().bind(f());

            function b(t) {
                let {
                    currentPage: e,
                    pageInterval: n = 5,
                    totalPage: a,
                    onClickPage: i
                } = t, s = (0, c.useMemo)(() => {
                    let t = Math.floor((e - 1) / n) * n,
                        o = (Math.floor((e - 1) / n) + 1) * n;
                    return o > a && (o = a), Array.from({
                        length: o - t
                    }, (e, n) => t + 1 + n)
                }, [e, n, a]);
                return (0, o.jsxs)("div", {
                    children: [(0, o.jsx)("button", {
                        className: x("prev-button"),
                        onClick: () => {
                            e <= 1 || i(e - 1)
                        },
                        children: "prev"
                    }), s.map(t => (0, o.jsx)("button", {
                        className: x("page-number", t === e && "active"),
                        onClick: () => i(t),
                        children: t
                    }, t)), (0, o.jsx)("button", {
                        className: x("next-button"),
                        onClick: () => {
                            e >= a || i(e + 1)
                        },
                        children: "next"
                    })]
                })
            }
            var j = n(9801),
                C = n.n(j),
                w = n(9745);
            let y = i().bind(C());
            var N = function(t) {
                    let {
                        className: e,
                        containerElement: n,
                        list: a,
                        name: i,
                        currentValue: s,
                        onClickDropdown: r,
                        a2sObj: l,
                        a2sName: d
                    } = t, u = (0, c.useRef)(null), [m, _] = (0, c.useState)(!1);
                    (0, c.useEffect)(() => {
                        let t = t => {
                            let e = u.current;
                            e && !e.contains(t.target) && _(!1)
                        };
                        return window.addEventListener("click", t), () => window.removeEventListener("click", t)
                    }, []), (0, c.useEffect)(() => {
                        n && (m ? n.classList.add(C().containerOpened) : n.classList.remove(C().containerOpened))
                    }, [n, m]);
                    let h = t => {
                        let {
                            name: e,
                            value: n
                        } = t.target;
                        r({
                            name: e,
                            value: n
                        }), _(!1)
                    };
                    return (0, o.jsxs)("span", {
                        ref: u,
                        children: [(0, o.jsx)("button", {
                            type: "button",
                            name: i,
                            className: y("selected-text", e, m && "opened"),
                            onClick: () => {
                                _(t => !t)
                            },
                            children: a.map(t => t.type === s && t.text)
                        }), (0, o.jsx)("ul", {
                            className: y("custom-select", "direction", m && "show-select"),
                            children: a.map((t, e) => (0, o.jsx)("li", {
                                className: y("custom-select-item"),
                                children: (0, o.jsx)(w.Z, {
                                    "data-a2s-web-obj": l,
                                    "data-a2s-option-name": d,
                                    "data-a2s-option-value": t.a2sValue,
                                    "data-a2s-option-pagecode": "65478",
                                    children: (0, o.jsx)("button", {
                                        className: y("custom-select-button", t.type === s && "key-color"),
                                        type: "button",
                                        name: i,
                                        value: t.type,
                                        "data-direction": "8",
                                        onClick: h,
                                        children: t.text
                                    })
                                })
                            }, e))
                        })]
                    })
                },
                k = n(6338),
                A = n.n(k),
                M = n(992);
            let S = i().bind(A());
            var E = c.forwardRef(function(t, e) {
                    let {
                        type: n,
                        title: a,
                        image: i,
                        nickname: s,
                        like: r,
                        className: c,
                        onClick: l,
                        ...d
                    } = t;
                    return (0, o.jsxs)("div", {
                        ref: e,
                        ...d,
                        className: S("container", n, c, l && "pointer"),
                        onClick: l,
                        children: [(0, o.jsx)("div", {
                            className: S("title"),
                            children: a
                        }), (0, o.jsxs)("div", {
                            className: S("image-container"),
                            children: [(0, o.jsx)("div", {
                                className: S("image-frame")
                            }), i && (0, o.jsx)(M.default, {
                                alt: "아바타",
                                width: "186",
                                height: "241",
                                className: S("contest-image"),
                                src: i
                            })]
                        }), (0, o.jsx)("div", {
                            className: S("nickname"),
                            children: s
                        }), (0, o.jsx)("div", {
                            className: S("like-count"),
                            children: r > 9999 ? "9999+" : r
                        })]
                    })
                }),
                D = n(1372),
                R = n.n(D);
            let L = i().bind(R()),
                Z = {
                    CONTEST: {
                        text: "아직 참여한 코디가 없습니다.",
                        iconClassName: L("no-contents-icon")
                    },
                    SEARCH: {
                        text: "검색된 코디가 없습니다.",
                        iconClassName: L("no-search-contents-icon")
                    }
                };

            function P(t) {
                let {
                    type: e
                } = t;
                return (0, o.jsx)("div", {
                    className: L("no-contents"),
                    children: (0, o.jsxs)("div", {
                        className: L("no-contents-box"),
                        children: [(0, o.jsx)("div", {
                            className: Z[e].iconClassName
                        }), (0, o.jsx)("div", {
                            className: L("notice-txt"),
                            children: Z[e].text
                        })]
                    })
                })
            }
        },
        1356: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return l
                }
            });
            var o = n(6063),
                a = n(4673),
                i = n.n(a),
                s = n(6536),
                r = n.n(s);
            let c = i().bind(r());

            function l(t) {
                let {
                    className: e = ""
                } = t;
                return (0, o.jsx)("div", {
                    className: c("avatar-footer", e),
                    children: (0, o.jsx)("div", {
                        className: c("avatar-footer-container"),
                        children: (0, o.jsxs)("div", {
                            className: c("copyright-container"),
                            children: [(0, o.jsx)("div", {
                                className: c("nexon-logo")
                            }), (0, o.jsx)("small", {
                                className: c("copyright"),
                                children: "\xa9 NEXON Korea Corporation All Rights Reserved."
                            })]
                        })
                    })
                })
            }
        },
        1586: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                InfaceContext: function() {
                    return c
                },
                InfaceContextProvider: function() {
                    return l
                }
            });
            var o = n(6063),
                a = n(4582),
                i = n(4617),
                s = n(8266),
                r = n(8254);
            let c = i.createContext({
                loaded: !1,
                userProfile: null
            });

            function l(t) {
                let {
                    children: e
                } = t, [n, l] = (0, i.useState)({
                    loaded: !1,
                    userProfile: null
                });
                return (0, o.jsxs)(c.Provider, {
                    value: n,
                    children: [(0, o.jsx)(s.default, {
                        src: "https://signin.nexon.com/sdk/inface.js",
                        onLoad: () => {
                            let t = (0, a.getCookie)("NPP"),
                                e = (0, a.getCookie)("_ifwt");
                            if (t && !e) return window.inface.auth.gotoSignIn();
                            window.inface.auth.init({
                                env: "live",
                                platform: "krpc",
                                async callbackOk() {
                                    let t = window.inface.auth.isSignedIn(),
                                        e = null;
                                    if (t) {
                                        var n, o, a;
                                        e = await (null === (a = window) || void 0 === a ? void 0 : null === (o = a.inface) || void 0 === o ? void 0 : null === (n = o.auth) || void 0 === n ? void 0 : n.getProfile())
                                    }
                                    l({
                                        loaded: !0,
                                        userProfile: e
                                    })
                                },
                                callbackFail(t) {
                                    r.Tb(t)
                                }
                            })
                        }
                    }), (0, o.jsx)(s.default, {
                        src: "/30th/insign.js"
                    }), n.loaded && e]
                })
            }
        },
        4202: function(t, e, n) {
            "use strict";
            n.d(e, {
                A8: function() {
                    return p
                },
                ZT: function() {
                    return v
                },
                pG: function() {
                    return f
                },
                dD: function() {
                    return i
                },
                OM: function() {
                    return h
                },
                Z1: function() {
                    return a
                },
                cS: function() {
                    return x
                }
            });
            var o = n(4617);

            function a(t) {
                let {
                    containerID: e
                } = t;
                (0, o.useEffect)(() => {
                    function t() {
                        let t = document.getElementById("google-recaptcha");
                        if (!t) return;
                        let e = t.nextSibling;
                        e && ("NEXTJS-PORTAL" === e.tagName && document.removeChild(e), window.grecaptcha.enterprise.reset())
                    }
                    return window.addEventListener("resize", t), () => window.removeEventListener("resize", t)
                }, []);
                let n = () => {
                        let t = document.createElement("div");
                        t.id = e, t.className = "google-recaptcha", document.body.appendChild(t)
                    },
                    a = () => {
                        let t = document.getElementById(e);
                        window.setTimeout(() => {
                            window.grecaptcha.enterprise.reset(), document.body.removeChild(t)
                        }, 500)
                    };
                return {
                    renderRecaptcha: () => {
                        try {
                            return new Promise((t, o) => {
                                n(), window.grecaptcha.enterprise.render(e, {
                                    sitekey: "6LcwJLspAAAAADmiCxURLNdzh7x-wYtQSapYBVSK",
                                    action: "LOGIN",
                                    size: "normal",
                                    callback: e => {
                                        t(e), a()
                                    },
                                    errorCallback: t => {
                                        o(t), a()
                                    },
                                    expiredCallback: t => {
                                        o(t), a()
                                    }
                                })
                            })
                        } catch (t) {
                            console.log(t)
                        }
                    }
                }
            }

            function i() {
                let [t, e] = (0, o.useState)();
                return (0, o.useEffect)(() => {
                    let t = () => {
                        e(window.innerWidth < 1280)
                    };
                    return t(), window.addEventListener("resize", t), () => window.removeEventListener("resize", t)
                }, []), {
                    isMobile: t
                }
            }
            var s = n(3962),
                r = n(8605),
                c = n.n(r),
                l = function(t) {
                    let {
                        array: e = [],
                        length: n
                    } = t;
                    return e.length <= n ? e : c()(e).sort(() => .5 - Math.random()).slice(0, n)
                },
                d = n(1280),
                u = n(3773),
                m = n(218),
                _ = n.n(m);

            function h() {
                let {
                    data: t,
                    isLoading: e
                } = (0, s.ZP)("contents-list", async () => {
                    var t, e, n;
                    let o = [{
                            feedType: "POPULAR",
                            lastDays: 1 === _()().get("date") ? "0" : "1",
                            size: 3
                        }, {
                            feedType: "POPULAR",
                            lastDays: "7",
                            size: 3
                        }, {
                            feedType: "RECENT",
                            size: 100
                        }].map(t => {
                            let e = (0, u.W)();
                            return (0, d.V)().getContents({ ...t,
                                categoryId: e
                            })
                        }),
                        [a, i, s] = await Promise.all(o);
                    return {
                        daily: null == a ? void 0 : null === (t = a.data) || void 0 === t ? void 0 : t.data,
                        weekly: 7 > _()().get("date") ? [] : null == i ? void 0 : null === (e = i.data) || void 0 === e ? void 0 : e.data,
                        today: l({
                            array: null == s ? void 0 : null === (n = s.data) || void 0 === n ? void 0 : n.data,
                            length: 6
                        })
                    }
                }, {
                    revalidateIfStale: !1,
                    revalidateOnFocus: !1,
                    revalidateOnReconnect: !1,
                    shouldRetryOnError: !1
                });
                return {
                    randomContestItems: (0, o.useMemo)(() => {
                        if (!t) return;
                        let [e] = l({
                            array: Object.values(t).filter(t => t.length >= 3),
                            length: 1
                        });
                        return l({
                            array: e,
                            length: 3
                        })
                    }, [t]),
                    contentsListData: t,
                    isContentsListLoading: e
                }
            }

            function p(t) {
                let [e, n] = (0, o.useState)(!1), a = (0, o.useRef)(null), i = t => {
                    let {
                        target: e
                    } = t;
                    a.current && n(a.current.contains(e))
                };
                return (0, o.useEffect)(() => (document.addEventListener("click", i, !0), () => {
                    document.removeEventListener("click", i, !0)
                }), []), {
                    ref: a,
                    isClicked: e,
                    setIsClicked: n
                }
            }

            function v(t) {
                let {
                    length: e
                } = t, [n, a] = (0, o.useState)(Array(e)), i = (0, o.useRef)([]), s = t => {
                    let {
                        target: e
                    } = t;
                    0 !== i.current.length && i.current.forEach((t, n) => {
                        let o = t.contains(e);
                        a(t => [...t.slice(0, n), o, ...t.slice(n + 1)])
                    })
                };
                return (0, o.useEffect)(() => (document.addEventListener("click", s, !0), () => {
                    document.removeEventListener("click", s, !0)
                }), []), {
                    areClicked: n,
                    refs: i
                }
            }
            var g = n(589);

            function f() {
                let {
                    mutate: t
                } = (0, s.kY)(), e = (0, g.useRouter)(), n = (0, g.usePathname)(), a = (0, g.useSearchParams)(), [i, r] = (0, o.useState)("");
                (0, o.useEffect)(() => {
                    r(a.get("detail") || "")
                }, [a]);
                let c = (0, o.useCallback)(t => {
                    let o = new URLSearchParams(a.toString());
                    return o.set("detail", t), e.push("".concat(n, "?").concat(o.toString()), {
                        scroll: !1
                    })
                }, [n, e, a]);
                return {
                    detailId: i,
                    openContestDetail: (0, o.useCallback)(e => (t("/content", void 0), t("/comment", void 0), t("/moreList", void 0), c(e)), [c, t]),
                    closeContestDetail: (0, o.useCallback)(() => {
                        let t = new URLSearchParams(a.toString());
                        return t.delete("detail"), e.push("".concat(n, "?").concat(t.toString()), {
                            scroll: !1
                        })
                    }, [n, e, a]),
                    moveContestDetail: c
                }
            }

            function x(t) {
                let {
                    resizeDependency: e
                } = t, [n, a] = (0, o.useState)(), {
                    isMobile: s
                } = i();
                return (0, o.useEffect)(() => {
                    let t = () => {
                        if (!n) return;
                        let t = n.clientHeight,
                            e = window.innerHeight;
                        !s && e < t ? n.style.transform = "scale(".concat(e / t, ")") : n.style.transform = ""
                    };
                    return t(), window.addEventListener("resize", t), () => window.removeEventListener("resize", t)
                }, [s, e, n]), {
                    setContainerRef: (0, o.useCallback)(t => {
                        t && a(t)
                    }, [])
                }
            }
        },
        3773: function(t, e, n) {
            "use strict";
            n.d(e, {
                W: function() {
                    return i
                }
            });
            var o = n(218),
                a = n.n(o);

            function i(t) {
                let e = a()().month() + 1;
                return ({
                    6: "66",
                    7: "67",
                    8: "68",
                    9: "69"
                })[t || e]
            }
        },
        1108: function(t, e, n) {
            "use strict";
            n.d(e, {
                P: function() {
                    return a
                }
            });
            var o = n(1003);

            function a() {
                return {
                    loginButton() {
                        window.gtag_report_conversion = function(t) {
                            return (0, o.k)("event", "conversion", {
                                send_to: "AW-16483351112/eko8CN2GhKAZEMj077M9",
                                event_callback: function() {
                                    void 0 !== t && (window.location = t)
                                }
                            }), !1
                        };
                        try {
                            window.gtag_report_conversion()
                        } catch (t) {}
                        try {
                            window.kakaoPixel("8045587692476711134").pageView(), window.kakaoPixel("8045587692476711134").login("로그인_btn_0401")
                        } catch (t) {}
                        try {
                            window.fbq("trackCustom", "로그인_btn_0401")
                        } catch (t) {}(0, o.k)("event", "로그인_btn_0401")
                    },
                    quizStartButton() {
                        window.gtag_report_conversion = function(t) {
                            return (0, o.k)("event", "conversion", {
                                send_to: "AW-16483351112/6pCoCPP5_J8ZEMj077M9",
                                event_callback: function() {
                                    void 0 !== t && (window.location = t)
                                }
                            }), !1
                        };
                        try {
                            window.gtag_report_conversion()
                        } catch (t) {}
                        try {
                            window.kakaoPixel("8045587692476711134").pageView(), window.kakaoPixel("8045587692476711134").participation("퀴즈START_btn_0401")
                        } catch (t) {}
                        try {
                            window.fbq("trackCustom", "퀴즈START_btn_0401")
                        } catch (t) {}(0, o.k)("event", "퀴즈START_btn_0401")
                    },
                    quizSolveButton() {
                        window.gtag_report_conversion = function(t) {
                            return (0, o.k)("event", "conversion", {
                                send_to: "AW-16483351112/hdLqCJGahKAZEMj077M9",
                                event_callback: function() {
                                    void 0 !== t && (window.location = t)
                                }
                            }), !1
                        };
                        try {
                            window.gtag_report_conversion()
                        } catch (t) {}
                        try {
                            window.kakaoPixel("8045587692476711134").pageView(), window.kakaoPixel("8045587692476711134").viewContent("퀴즈풀기_btn_0401")
                        } catch (t) {}
                        try {
                            window.fbq("trackCustom", "퀴즈풀기_btn_0401")
                        } catch (t) {}(0, o.k)("event", "퀴즈풀기_btn_0401")
                    },
                    quizSolveCompleteButton() {
                        window.gtag_report_conversion = function(t) {
                            return (0, o.k)("event", "conversion", {
                                send_to: "AW-16483351112/rSI8CMjO_J8ZEMj077M9",
                                event_callback: function() {
                                    void 0 !== t && (window.location = t)
                                }
                            }), !1
                        };
                        try {
                            window.gtag_report_conversion()
                        } catch (t) {}
                        try {
                            window.kakaoPixel("8045587692476711134").pageView(), window.kakaoPixel("8045587692476711134").viewContent("퀴즈풀기완료_btn_0401")
                        } catch (t) {}
                        try {
                            window.fbq("trackCustom", "퀴즈풀기완료_btn_0401")
                        } catch (t) {}(0, o.k)("event", "퀴즈풀기완료_btn_0401")
                    },
                    event1QuizGiveCashButton() {
                        window.gtag_report_conversion = function(t) {
                            return (0, o.k)("event", "conversion", {
                                send_to: "AW-16483351112/Q6KKCLyhhKAZEMj077M9",
                                event_callback: function() {
                                    void 0 !== t && (window.location = t)
                                }
                            }), !1
                        };
                        try {
                            window.gtag_report_conversion()
                        } catch (t) {}
                        try {
                            window.kakaoPixel("8045587692476711134").pageView(), window.kakaoPixel("8045587692476711134").viewContent("이벤트1캐시지급완료_btn_0401")
                        } catch (t) {}
                        try {
                            window.fbq("trackCustom", "이벤트1캐시지급완료_btn_0401")
                        } catch (t) {}(0, o.k)("event", "이벤트1캐시지급완료_btn_0401")
                    },
                    event2ApplyBigCashButton() {
                        window.gtag_report_conversion = function(t) {
                            return (0, o.k)("event", "conversion", {
                                send_to: "AW-16483351112/a9orCPmI_Z8ZEMj077M9",
                                event_callback: function() {
                                    void 0 !== t && (window.location = t)
                                }
                            }), !1
                        };
                        try {
                            window.gtag_report_conversion()
                        } catch (t) {}
                        try {
                            window.kakaoPixel("8045587692476711134").pageView(), window.kakaoPixel("8045587692476711134").viewContent("이벤트2응모하기_btn_0401")
                        } catch (t) {}
                        try {
                            window.fbq("trackCustom", "이벤트2응모하기_btn_0401")
                        } catch (t) {}(0, o.k)("event", "이벤트2응모하기_btn_0401")
                    },
                    event3ComplteBigCashButton() {
                        window.gtag_report_conversion = function(t) {
                            return (0, o.k)("event", "conversion", {
                                send_to: "AW-16483351112/DgEECJ6Ui6AZEMj077M9",
                                event_callback: function() {
                                    void 0 !== t && (window.location = t)
                                }
                            }), !1
                        };
                        try {
                            window.gtag_report_conversion()
                        } catch (t) {}
                        try {
                            window.kakaoPixel("8045587692476711134").pageView(), window.kakaoPixel("8045587692476711134").viewContent("이벤트2응모완료_btn_0401")
                        } catch (t) {}
                        try {
                            window.fbq("trackCustom", "이벤트2응모완료_btn_0401")
                        } catch (t) {}(0, o.k)("event", "이벤트3응모완료_btn_0401")
                    }
                }
            }
        },
        1003: function(t, e, n) {
            "use strict";

            function o() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                if ("function" == typeof window.gtag) try {
                    window.gtag(...e)
                } catch (t) {}
            }
            n.d(e, {
                k: function() {
                    return o
                }
            })
        },
        7901: function(t) {
            t.exports = {
                "id-href-container": "IDHrefContainer_id-href-container__DThz5"
            }
        },
        8921: function(t) {
            t.exports = {
                container: "SharingButton_container__li0ei",
                "fit-button": "SharingButton_fit-button__SYvJ_",
                "list-tooltip-right": "SharingButton_list-tooltip-right__z6HlK",
                "sharing-button": "SharingButton_sharing-button__dmuOD",
                active: "SharingButton_active__NSifi",
                "list-tooltip-bottom": "SharingButton_list-tooltip-bottom___PXu4",
                "list-tooltip-left": "SharingButton_list-tooltip-left__eo2gU",
                icon: "SharingButton_icon__J_4jv",
                "icon-url": "SharingButton_icon-url__MGaQL",
                "icon-meta": "SharingButton_icon-meta__VBnGs",
                "icon-kakao": "SharingButton_icon-kakao__vRofX",
                "icon-x": "SharingButton_icon-x__6yA3I",
                link: "SharingButton_link__XT22n",
                dimmed: "SharingButton_dimmed___ouyS",
                "sns-modal": "SharingButton_sns-modal__1tj_g",
                "modal-title": "SharingButton_modal-title__8N5m8",
                "modal-close-button": "SharingButton_modal-close-button__grIX0",
                "modal-icon-container": "SharingButton_modal-icon-container__3VIYN",
                "modal-icon-wrapper": "SharingButton_modal-icon-wrapper__KOSxy",
                "modal-icon-text": "SharingButton_modal-icon-text__peMRq"
            }
        },
        8019: function(t) {
            t.exports = {
                wrapper: "Modal_wrapper__d2hU9"
            }
        },
        2032: function(t) {
            t.exports = {
                container: "AvatarContestDetail_container__8Pt8b",
                "scroll-view": "AvatarContestDetail_scroll-view__2LZ1s",
                "content-container": "AvatarContestDetail_content-container__QoCoj",
                "avatar-profile-container": "AvatarContestDetail_avatar-profile-container__XcNye",
                avatar: "AvatarContestDetail_avatar__fSU1F",
                "avatar-image": "AvatarContestDetail_avatar-image__M1c31",
                "avatar-info-container": "AvatarContestDetail_avatar-info-container__h_BCm",
                "avatar-info": "AvatarContestDetail_avatar-info__hfRY4",
                "avatar-info-title": "AvatarContestDetail_avatar-info-title__QpqMc",
                "avatar-info-nickname": "AvatarContestDetail_avatar-info-nickname__H5H6e",
                "avatar-info-like-count": "AvatarContestDetail_avatar-info-like-count__hYais",
                "avatar-text-container": "AvatarContestDetail_avatar-text-container__DeWd5",
                "avatar-title-container": "AvatarContestDetail_avatar-title-container__Wchpw",
                "avatar-title": "AvatarContestDetail_avatar-title__rW07_",
                "avatar-sub-info": "AvatarContestDetail_avatar-sub-info__fkaXt",
                "avatar-submit-time": "AvatarContestDetail_avatar-submit-time__cz2p4",
                "avatar-report-button": "AvatarContestDetail_avatar-report-button__mFM2D",
                "avatar-description-container": "AvatarContestDetail_avatar-description-container__x6dC_",
                "button-container": "AvatarContestDetail_button-container__sJ3oD",
                "like-button": "AvatarContestDetail_like-button__Zhcxw",
                "share-button": "AvatarContestDetail_share-button__URq4k",
                "dividing-line": "AvatarContestDetail_dividing-line__V5G4w",
                "comment-section": "AvatarContestDetail_comment-section__25qe0",
                "total-comment-count": "AvatarContestDetail_total-comment-count__i3zQJ",
                "comment-list-container": "AvatarContestDetail_comment-list-container__t8WOA",
                "comment-container": "AvatarContestDetail_comment-container__xDaUW",
                "comment-header": "AvatarContestDetail_comment-header__jWEsF",
                "comment-title": "AvatarContestDetail_comment-title__8vRkR",
                "comment-nickname": "AvatarContestDetail_comment-nickname__rjRZ7",
                "comment-date": "AvatarContestDetail_comment-date__FUHT5",
                "comment-edit-input-wrapper": "AvatarContestDetail_comment-edit-input-wrapper__j4Ivv",
                "comment-content": "AvatarContestDetail_comment-content__oOFyy",
                "comment-delete-button": "AvatarContestDetail_comment-delete-button__0N2td",
                "comment-edit-button": "AvatarContestDetail_comment-edit-button__QdCWD",
                "comment-report-button": "AvatarContestDetail_comment-report-button__kZEBF",
                "comment-dividing-line": "AvatarContestDetail_comment-dividing-line__s1GO1",
                "avatar-footer": "AvatarContestDetail_avatar-footer__VUp55",
                "pagination-wrapper": "AvatarContestDetail_pagination-wrapper__Z_9XF"
            }
        },
        1113: function(t) {
            t.exports = {
                container: "CommentInput_container__2Hgtk",
                textarea: "CommentInput_textarea__iGIZ9",
                "button-container": "CommentInput_button-container__yum32",
                "cancel-button": "CommentInput_cancel-button__n_ofG",
                "submit-button": "CommentInput_submit-button__cjdQy"
            }
        },
        6601: function(t) {
            t.exports = {
                header: "Header_header__GJKkz",
                "button-wrapper": "Header_button-wrapper__iRWY9",
                "list-button": "Header_list-button__KycCC",
                "prev-button": "Header_prev-button__yz6kR",
                "next-button": "Header_next-button__lAY3Z",
                "close-button": "Header_close-button__h80HC"
            }
        },
        3267: function(t) {
            t.exports = {
                "system-message": "AvatarMakerSystemMessage_system-message__QzQZE",
                "system-message-close": "AvatarMakerSystemMessage_system-message-close__MNJSh",
                "system-message-close-image": "AvatarMakerSystemMessage_system-message-close-image__1S2qA",
                "contents-container": "AvatarMakerSystemMessage_contents-container__K1mO6",
                "contents-line-1": "AvatarMakerSystemMessage_contents-line-1__Pu_mt",
                "contents-line-2": "AvatarMakerSystemMessage_contents-line-2__gomLO",
                "contents-line-3": "AvatarMakerSystemMessage_contents-line-3__nuaZE",
                "footer-container": "AvatarMakerSystemMessage_footer-container__UZlDk"
            }
        },
        1420: function(t) {
            t.exports = {
                "cancel-button": "AvatarMakerSystemMessageCancel_cancel-button__EKqOV"
            }
        },
        8139: function(t) {
            t.exports = {
                "confirm-button": "AvatarMakerSystemMessageConfirm_confirm-button__InnNN"
            }
        },
        4963: function(t) {
            t.exports = {
                "login-button": "AvatarMakerSystemMessageLogin_login-button__yAGh0"
            }
        },
        8219: function(t) {
            t.exports = {
                "without-login-button": "AvatarMakerSystemMessageWithoutLogin_without-login-button__omczp"
            }
        },
        9396: function(t) {
            t.exports = {
                container: "AvatarReport_container__NsA2Q",
                "close-button": "AvatarReport_close-button__mdmec",
                title: "AvatarReport_title__Hh7lX",
                "reason-list": "AvatarReport_reason-list__3fJ8N",
                "reason-item": "AvatarReport_reason-item__Mr0Ie",
                "reason-button": "AvatarReport_reason-button__hMU3Y",
                selected: "AvatarReport_selected__zNIR1",
                "confirm-button-container": "AvatarReport_confirm-button-container__XDJoa"
            }
        },
        2325: function(t) {
            t.exports = {
                container: "CashHistory_container__T_TxR",
                "no-history": "CashHistory_no-history__42B5n",
                "close-button": "CashHistory_close-button__5L9Cc",
                "history-bg": "CashHistory_history-bg__nqnkP",
                "on-history": "CashHistory_on-history__ek_UW",
                "history-contents": "CashHistory_history-contents__hAtrp",
                "cash-history": "CashHistory_cash-history___QuD5",
                "cash-history-header": "CashHistory_cash-history-header__RYtuj",
                "cash-history-header-name": "CashHistory_cash-history-header-name__ctVuk",
                "cash-history-header-date": "CashHistory_cash-history-header-date__2vnzX",
                "cash-history-name": "CashHistory_cash-history-name__Nu5id",
                "cash-history-date": "CashHistory_cash-history-date__YsmK8",
                "cash-history-list": "CashHistory_cash-history-list__gpwBC",
                "cash-history-list-item": "CashHistory_cash-history-list-item__OD0Af",
                "no-history-text": "CashHistory_no-history-text__8qJ0r",
                "cash-history-cs": "CashHistory_cash-history-cs__iLWUH",
                "cash-history-cs-link": "CashHistory_cash-history-cs-link__l7_ZN",
                "mobile-block": "CashHistory_mobile-block__dnc8H"
            }
        },
        9554: function(t) {
            t.exports = {
                container: "CoinHistory_container__qseck",
                "history-bg": "CoinHistory_history-bg__0dxyy",
                "coin-point": "CoinHistory_coin-point___RXhR",
                "history-notice": "CoinHistory_history-notice__x8b4U",
                "history-notice-text": "CoinHistory_history-notice-text__99l_R",
                "coin-display-description": "CoinHistory_coin-display-description__kwdyy",
                "coin-history-title": "CoinHistory_coin-history-title__pp_kS",
                "coin-history-list": "CoinHistory_coin-history-list__ty3HG",
                "coin-history-list-item": "CoinHistory_coin-history-list-item__UXOFT",
                "close-button": "CoinHistory_close-button__FrsM5",
                "no-history-text": "CoinHistory_no-history-text___8gU4"
            }
        },
        4979: function(t) {
            t.exports = {
                container: "CouponVerification_container__hAfyi",
                "coupon-verification-bg": "CouponVerification_coupon-verification-bg__RErJW",
                "close-button": "CouponVerification_close-button__dJFHf",
                steps: "CouponVerification_steps__mi9Bq",
                "step-item": "CouponVerification_step-item__q__zW",
                "step-2": "CouponVerification_step-2__XzA5z",
                "step-3": "CouponVerification_step-3__g9SHb",
                "step-4": "CouponVerification_step-4__YYLjH",
                "coupon-link": "CouponVerification_coupon-link__QMQyy"
            }
        },
        9267: function(t) {
            t.exports = {
                container: "FailedAlert_container__aaaeZ",
                "failed-alert-bg": "FailedAlert_failed-alert-bg__7hH3D",
                "close-button": "FailedAlert_close-button__U_ySN",
                "button-controller": "FailedAlert_button-controller__35OPg",
                "confirm-button": "FailedAlert_confirm-button__4H_50",
                "confirm-button-image": "FailedAlert_confirm-button-image__eZz_u"
            }
        },
        1418: function(t) {
            t.exports = {
                "login-container": "ForgotLogin_login-container__x_NyA",
                "login-image": "ForgotLogin_login-image__EmslB",
                "login-notice": "ForgotLogin_login-notice__K9Y26",
                "login-notice-text": "ForgotLogin_login-notice-text___ZGJp",
                "login-close-button": "ForgotLogin_login-close-button__iEcQb",
                "button-controller": "ForgotLogin_button-controller__7ndCh",
                "control-button": "ForgotLogin_control-button__MiQH8",
                "login-button-image": "ForgotLogin_login-button-image__Ev2E1",
                "goto-event-button-image": "ForgotLogin_goto-event-button-image__pd3DC"
            }
        },
        9648: function(t) {
            t.exports = {
                container: "GetCoin_container__vZvUA",
                "get-coin-bg": "GetCoin_get-coin-bg__uB6wQ",
                "close-button": "GetCoin_close-button__QoTpW",
                "point-text": "GetCoin_point-text__XWxPV",
                "button-controller": "GetCoin_button-controller__6fq9y",
                "confirm-button": "GetCoin_confirm-button__Q_1Wk",
                "confirm-button-image": "GetCoin_confirm-button-image__eCeus"
            }
        },
        1157: function(t) {
            t.exports = {
                container: "NoticeMessages_container__xY9i3",
                "close-button": "NoticeMessages_close-button__y4Ken",
                "close-button-image": "NoticeMessages_close-button-image__oRByA",
                "notice-alert-icon": "NoticeMessages_notice-alert-icon__hBpK3",
                "notice-container": "NoticeMessages_notice-container__hKkzX",
                "notice-title-container": "NoticeMessages_notice-title-container__Ii9fi",
                "notice-sub-title": "NoticeMessages_notice-sub-title__U_ubc",
                "notice-list": "NoticeMessages_notice-list__ZAMVD",
                "notice-link": "NoticeMessages_notice-link__8IE2T",
                "notice-link-text": "NoticeMessages_notice-link-text__KChwO"
            }
        },
        1831: function(t) {
            t.exports = {
                container: "AccountConfirm_container__0lpAB",
                title: "AccountConfirm_title__VCNd0",
                account: "AccountConfirm_account__RiAuE",
                "auth-information-icon": "AccountConfirm_auth-information-icon__EMLvu",
                facebook: "AccountConfirm_facebook__G7l2r",
                google: "AccountConfirm_google__ADhpH",
                naver: "AccountConfirm_naver__b4Ggk",
                apple: "AccountConfirm_apple__DJe2Y"
            }
        },
        1589: function(t) {
            t.exports = {
                container: "QuizModal_container__vf33k",
                "close-button": "QuizModal_close-button___tIs_",
                content: "QuizModal_content__yu2aS",
                "button-container": "QuizModal_button-container__eaQv6",
                "no-button": "QuizModal_no-button__J8EHs"
            }
        },
        2653: function(t) {
            t.exports = {
                button: "CancelButton_button__VGrPz"
            }
        },
        8882: function(t) {
            t.exports = {
                button: "ConfirmButton_button__hMnRk"
            }
        },
        1545: function(t) {
            t.exports = {
                button: "LoginButton_button__DohoR"
            }
        },
        556: function(t) {
            t.exports = {
                button: "StartQuizButton_button__Pu_kC"
            }
        },
        3522: function(t) {
            t.exports = {
                button: "VerifyButton_button__U_k3c"
            }
        },
        6338: function(t) {
            t.exports = {
                container: "AvatarCard_container__ON7v6",
                pointer: "AvatarCard_pointer__Wxa58",
                first: "AvatarCard_first__5LoJC",
                second: "AvatarCard_second__Xgu6U",
                third: "AvatarCard_third__12INn",
                common: "AvatarCard_common__W2ovc",
                title: "AvatarCard_title__YPKoH",
                "image-container": "AvatarCard_image-container__0A5gr",
                "contest-image": "AvatarCard_contest-image__Blx_l",
                nickname: "AvatarCard_nickname__TMVog",
                "like-count": "AvatarCard_like-count__Jwf1i"
            }
        },
        8753: function(t) {
            t.exports = {
                female: "BaseAvatar_female__nNEVS",
                male: "BaseAvatar_male__ggcHa"
            }
        },
        9801: function(t) {
            t.exports = {
                "selected-text": "Dropdown_selected-text__B8Ylp",
                opened: "Dropdown_opened__c4BL5",
                "custom-select": "Dropdown_custom-select__d_ENt",
                "show-select": "Dropdown_show-select__Bdrxu",
                "custom-select-item": "Dropdown_custom-select-item__PBzxu",
                "custom-select-button": "Dropdown_custom-select-button__WtW_P",
                "key-color": "Dropdown_key-color__g7tsZ",
                containerOpened: "Dropdown_containerOpened__Jv_Yh"
            }
        },
        5182: function(t) {
            t.exports = {
                "floating-container": "FloatingMenuWrapper_floating-container__wYG2x",
                closed: "FloatingMenuWrapper_closed__OsdEq",
                "toggle-button": "FloatingMenuWrapper_toggle-button__QTahn",
                "close-button": "FloatingMenuWrapper_close-button__LXi9a",
                "floating-menu": "FloatingMenuWrapper_floating-menu__D67nB",
                "fixed-menu": "FloatingMenuWrapper_fixed-menu__H5Ij_"
            }
        },
        1372: function(t) {
            t.exports = {
                "no-contents": "NoContents_no-contents__OLuXY",
                "no-contents-box": "NoContents_no-contents-box___7GeZ",
                "no-contents-icon": "NoContents_no-contents-icon__ft1bk",
                "no-search-contents-icon": "NoContents_no-search-contents-icon__OI6uA",
                "notice-txt": "NoContents_notice-txt__5Unwo"
            }
        },
        2620: function(t) {
            t.exports = {
                "page-number": "Pagination_page-number__iRX8g",
                active: "Pagination_active__qde8W",
                "prev-button": "Pagination_prev-button__T1bbK",
                "next-button": "Pagination_next-button__LFyIQ"
            }
        },
        6536: function(t) {
            t.exports = {
                "avatar-footer": "AvatarFooter_avatar-footer__Rcb5x",
                "avatar-footer-container": "AvatarFooter_avatar-footer-container__Odszh",
                "copyright-container": "AvatarFooter_copyright-container__7_5YF",
                "nexon-logo": "AvatarFooter_nexon-logo__p_Fuw",
                copyright: "AvatarFooter_copyright__yt3gS"
            }
        }
    }
]);