(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [22], {
        5826: function(e, n, a) {
            "use strict";
            a.d(n, {
                u: function() {
                    return i
                }
            });
            var t = a(216);

            function i() {
                return {
                    get30thPoints: () => t.I.request({
                        method: "GET",
                        url: "/30th/point"
                    }),
                    charge30thPoints(e) {
                        let {
                            chargeType: n = "RELAY",
                            gameCode: a = ""
                        } = e;
                        return t.I.request({
                            method: "POST",
                            url: "/30th/point",
                            data: {
                                chargeType: n,
                                gameCode: a
                            }
                        })
                    },
                    checkAttend30thGame(e) {
                        let {
                            chargeType: n = "RELAY",
                            gameCode: a = ""
                        } = e;
                        return t.I.request({
                            method: "GET",
                            url: "/30th/check/attend",
                            params: {
                                chargeType: n,
                                gameCode: a
                            }
                        })
                    },
                    getPointHistory: () => t.I.request({
                        method: "GET",
                        url: "/30th/point/history"
                    })
                }
            }
        },
        6477: function(e, n, a) {
            "use strict";
            a.d(n, {
                Z: function() {
                    return d
                }
            });
            var t = a(6063),
                i = a(7965),
                s = a.n(i),
                o = a(4673),
                r = a.n(o),
                c = a(4617);
            let l = r().bind(s());

            function d() {
                let [e, n] = (0, c.useState)(!1);
                return (0, c.useEffect)(() => {
                    let e = () => {
                        window.scrollY > 100 ? n(!0) : n(!1)
                    };
                    return window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
                }, []), e && (0, t.jsx)("button", {
                    className: l("top-button"),
                    onClick: () => {
                        window.scrollTo({
                            top: 0
                        })
                    },
                    children: "Top"
                })
            }
        },
        5022: function(e, n, a) {
            "use strict";
            a.r(n), a.d(n, {
                EventContext: function() {
                    return w
                },
                default: function() {
                    return U
                }
            });
            var t = a(6063),
                i = a(4617),
                s = a(4673),
                o = a.n(s),
                r = a(158),
                c = a(4186),
                l = a.n(c),
                d = a(9745),
                m = a(3962),
                h = a(5826),
                u = a(3569),
                p = a(589),
                _ = a(1774),
                v = a(6477),
                g = a(1586),
                b = a(9015),
                x = a(4393),
                f = a.n(x),
                j = a(4582);
            let N = o().bind(f());
            var M = function(e) {
                    let {
                        onClose: n
                    } = e, [a, s] = (0, i.useState)(!1);
                    return (0, t.jsx)(b.Z, {
                        children: (0, t.jsx)(b.Z.Main, {
                            children: (0, t.jsxs)("div", {
                                className: N("maintenance-bg"),
                                children: [(0, t.jsx)("button", {
                                    className: N("maintenance-close-button"),
                                    onClick: function() {
                                        if (a) {
                                            let e = new Date;
                                            e.setHours(0, 0, 0, 0), e.setDate(e.getDate() + 1), (0, j.setCookie)("coin-maintenance-not-today", "true", {
                                                expires: e
                                            })
                                        }
                                        n()
                                    }
                                }), (0, t.jsx)("a", {
                                    href: "https://notice.nexon.com/Notice/NoticeView?sn=144429",
                                    className: N("maintenance-notice"),
                                    target: "_blank"
                                }), (0, t.jsx)("button", {
                                    className: N("maintenance-not-today-button"),
                                    onClick: function() {
                                        s(e => !e)
                                    },
                                    children: a && (0, t.jsx)("span", {
                                        className: N("maintenance-not-today-check")
                                    })
                                })]
                            })
                        })
                    })
                },
                y = a(218),
                k = a.n(y);
            let C = (0, _.default)(() => a.e(78).then(a.bind(a, 6078)), {
                    loadableGenerated: {
                        webpack: () => [6078]
                    },
                    ssr: !1
                }),
                E = o().bind(l()),
                w = (0, i.createContext)(null),
                I = ["/", "/nexoncash", "/avatar"];
            var U = function(e) {
                var n, a;
                let s = (0, i.useContext)(g.InfaceContext),
                    o = (0, p.usePathname)(),
                    {
                        children: c
                    } = e,
                    l = (0, i.useRef)(null),
                    _ = (0, i.useRef)(null),
                    [b, x] = (0, i.useState)(0),
                    [f, N] = (0, i.useState)(!1);
                (0, i.useEffect)(() => {
                    I.forEach((e, n) => {
                        (e === o || e + "/" === o) && x(n)
                    })
                }, [o]);
                let {
                    data: y,
                    isLoading: U
                } = (0, m.ZP)(() => s.loaded ? "profile" : null, async () => {
                    var e, n, a;
                    return await (null === (a = window) || void 0 === a ? void 0 : null === (n = a.inface) || void 0 === n ? void 0 : null === (e = n.auth) || void 0 === e ? void 0 : e.getProfile())
                }, {
                    revalidateIfStale: !1,
                    revalidateOnFocus: !1,
                    revalidateOnReconnect: !1,
                    shouldRetryOnError: !1
                }), {
                    data: L,
                    isLoading: P,
                    error: T
                } = (0, m.ZP)(() => y ? "get30thPoints" : null, async () => {
                    var e, n;
                    let a = await (0, h.u)().get30thPoints(),
                        t = u.W.map(async e => {
                            var n, a;
                            let t = await (0, h.u)().checkAttend30thGame({
                                gameCode: e.gamecode
                            });
                            return {
                                gamecode: e.gamecode,
                                completed: null == t ? void 0 : null === (a = t.data) || void 0 === a ? void 0 : null === (n = a.data) || void 0 === n ? void 0 : n.completed
                            }
                        }),
                        i = await Promise.all(t);
                    return { ...null !== (n = null == a ? void 0 : null === (e = a.data) || void 0 === e ? void 0 : e.data) && void 0 !== n ? n : {},
                        attends: i
                    }
                }, {
                    revalidateIfStale: !1,
                    revalidateOnFocus: !1,
                    revalidateOnReconnect: !1,
                    shouldRetryOnError: !1
                }), Z = !U && !P, [O, F] = (0, i.useState)({
                    userProfile: y,
                    pointData: L,
                    pointError: T
                });
                (0, i.useEffect)(() => {
                    F({
                        userProfile: y,
                        pointData: L,
                        pointError: T
                    })
                }, [y, L, T]), (0, i.useEffect)(() => {
                    let e = k()().isAfter("2024-06-19 20:00:00"),
                        n = k()().isBefore("2024-06-20 08:00:00");
                    e && n && ("true" === (0, j.getCookie)("coin-maintenance-not-today") ? N(!1) : N(!0))
                }, []), (0, i.useEffect)(() => {
                    let e = document.createElement("div");
                    return e.classList.add("preload-css-images"), document.body.appendChild(e), () => {
                        document.body.removeChild(e)
                    }
                }, []), (0, i.useEffect)(() => {
                    setTimeout(() => {
                        _.current && _.current.classList.add(E("anim-start"))
                    }, 1500)
                }, []), (0, i.useEffect)(() => {
                    if (!Z || !l.current) return;
                    let {
                        innerWidth: e
                    } = window;
                    l.current.src = e < 1280 ? "/30th/common/MO_30TH_BACK.mp4" : "/30th/common/PC_30TH_BACK.mp4", l.current.addEventListener("canplay", () => {
                        var e;
                        null === (e = l.current) || void 0 === e || e.classList.add(E("video-fadein"))
                    })
                }, [Z]);
                let R = (a = null == y ? void 0 : null === (n = y.local_profile_props) || void 0 === n ? void 0 : n.nexon_name) ? (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsxs)("span", {
                        className: E("nexon-name"),
                        children: ["[", a, "]"]
                    }), "님의"]
                }) : "당신의";
                return Z ? (0, t.jsxs)("div", {
                    className: E("event-section"),
                    children: [f && (0, t.jsx)(M, {
                        onClose: () => N(!1)
                    }), (0, t.jsx)("video", {
                        ref: l,
                        className: E("background-video"),
                        autoPlay: !0,
                        muted: !0,
                        loop: !0,
                        playsInline: !0
                    }), (0, t.jsx)("section", {
                        className: E("event-section-header"),
                        children: (0, t.jsxs)("div", {
                            className: E("main-header-section"),
                            children: [(0, t.jsx)("div", {
                                className: E("main-header-icon"),
                                "aria-description": "헤더 아이콘"
                            }), (0, t.jsxs)("div", {
                                className: E("main-header-banners"),
                                children: [(0, t.jsx)(d.Z, {
                                    "data-a2s-web-obj": "Main",
                                    "data-a2s-option-name": "Hcard",
                                    "data-a2s-option-pagecode": "65478",
                                    children: (0, t.jsx)("a", {
                                        href: "https://card.nexon.com/Event/anniversary",
                                        target: "_blank",
                                        className: E("main-header-banner-hyundaicard")
                                    })
                                }), (0, t.jsx)(d.Z, {
                                    "data-a2s-web-obj": "Main",
                                    "data-a2s-option-name": "Nexonplay",
                                    "data-a2s-option-pagecode": "65478",
                                    children: (0, t.jsx)("a", {
                                        href: "https://nexon.link/dsI",
                                        target: "_blank",
                                        className: E("main-header-banner-nexonplay")
                                    })
                                })]
                            }), (0, t.jsxs)("div", {
                                className: E("main-catchphrase"),
                                children: [(0, t.jsx)("div", {
                                    className: E("main-game-card-wrapper"),
                                    children: (0, t.jsx)(C, {
                                        delay: 1e3
                                    })
                                }), (0, t.jsx)("p", {
                                    className: E("call-nexon-user-name"),
                                    children: R
                                }), (0, t.jsx)("div", {
                                    ref: _,
                                    className: E("main-catchphrase-point-image"),
                                    "aria-description": "즐거움이 이어지도록"
                                }), (0, t.jsxs)("div", {
                                    className: E("main-catchphrase-body"),
                                    children: [(0, t.jsx)("p", {
                                        className: E("main-catchphrase-title"),
                                        children: "1년 내내 계속되는 즐거움!"
                                    }), (0, t.jsx)("p", {
                                        className: E("main-catchphrase-description"),
                                        children: "넥슨 30주년을 기념하며 쉼없는 이벤트가 이어집니다."
                                    }), (0, t.jsxs)("p", {
                                        className: E("main-catchphrase-description"),
                                        children: [(0, t.jsx)("span", {
                                            className: E("mobile-block"),
                                            children: "이벤트 페이지를 통해 넥슨과 각 게임이 함께 준비한"
                                        }), " ", (0, t.jsx)("span", {
                                            className: E("mobile-block"),
                                            children: "다채로운 이벤트를 확인해보세요!"
                                        })]
                                    })]
                                }), (0, t.jsx)("div", {
                                    className: E("main-header-event-period"),
                                    "aria-description": "이벤트 일정 2024년 3월 14일부터 2024년 12월 31일 화요일까지"
                                })]
                            })]
                        })
                    }), (0, t.jsxs)("div", {
                        children: [(0, t.jsxs)("ul", {
                            className: E("event-gnb-list"),
                            children: [(0, t.jsx)("li", {
                                className: E("event-gnb-list-item"),
                                children: (0, t.jsx)(d.Z, {
                                    "data-a2s-web-obj": "Main",
                                    "data-a2s-option-name": "Relay",
                                    "data-a2s-option-pagecode": "65478",
                                    children: (0, t.jsx)(r.default, {
                                        href: I[0],
                                        onClick: () => x(0),
                                        children: (0, t.jsx)("span", {
                                            className: E("gnb-tab-relayevent", 0 === b && "on"),
                                            "aria-description": "릴레이 이벤트"
                                        })
                                    })
                                })
                            }), (0, t.jsx)("li", {
                                className: E("event-gnb-list-item"),
                                children: (0, t.jsx)(r.default, {
                                    href: I[2],
                                    onClick: () => x(2),
                                    children: (0, t.jsx)("span", {
                                        className: E("gnb-tab-avatar", 2 === b && "on"),
                                        "aria-description": "추억의 아바타 만들기 이벤트"
                                    })
                                })
                            }), (0, t.jsx)("li", {
                                className: E("event-gnb-list-item"),
                                children: (0, t.jsx)("span", {
                                    className: E("gnb-tab-comingsoon"),
                                    "aria-description": "COMING SOON"
                                })
                            })]
                        }), (0, t.jsx)("section", {
                            className: E("event-body"),
                            children: (0, t.jsx)(w.Provider, {
                                value: O,
                                children: c
                            })
                        })]
                    }), (0, t.jsx)("section", {
                        className: E("event-footer"),
                        children: (0, t.jsx)("div", {
                            className: E("event-footer-container"),
                            children: (0, t.jsxs)("div", {
                                className: E("copyright-container"),
                                children: [(0, t.jsx)("div", {
                                    className: E("nexon-logo")
                                }), (0, t.jsx)("p", {
                                    className: E("copyright"),
                                    children: "\xa9 NEXON Korea Corporation All Rights Reserved."
                                })]
                            })
                        })
                    }), (0, t.jsx)(v.Z, {})]
                }) : (0, t.jsx)(t.Fragment, {})
            }
        },
        3569: function(e, n, a) {
            "use strict";
            a.d(n, {
                W: function() {
                    return t
                }
            });
            let t = [{
                id: "14",
                cardNumber: "14",
                gamecode: "74264",
                name: "사이퍼즈 넥슨 30주년 릴레이 이벤트",
                gtagName: "사이퍼즈",
                description: "사이퍼즈의 즐거움이 이어지도록!\n    넥슨 30주년을 기념하여 트와일라잇에 단체 미션이 등장했다!\n    다 같이 미션 달성하고, 기념 액세서리 보상 받자!",
                requestThumbnailUrl: "/event/game-events/14/thumbnail.png",
                cardImageUrl: "https://rs.nxfs.nexon.com/gameusr/23/12/rcx421105313758.png",
                thumbnailImageUrl: "https://rs.nxfs.nexon.com/gameusr/23/12/w2eu21105314102.png",
                period: "24.07.04(목) 점검 후 ~ 24.08.01(목) 점검 전",
                eventLink: "https://nexon.link/e0e",
                specialItems: [{
                    name: "루시드드림",
                    imageUrl: "/event/game-events/14/items/special-01.png"
                }],
                normalItems: [{
                    name: "루시드드림헤어",
                    imageUrl: "/event/game-events/14/items/normal-01.png"
                }, {
                    name: "전투장비이용권",
                    imageUrl: "/event/game-events/14/items/normal-02.png"
                }]
            }, {
                id: "15",
                cardNumber: "11",
                gamecode: "73737",
                name: "카운터-스트라이크 온라인 넥슨 30주년 릴레이 이벤트",
                gtagName: "카운터-스트라이크 온라인",
                description: "카하! 카스온라인이 시원하게 말아주는 넥슨 30주년 이벤트!\n30주년 기념 특별 한정 아이템부터 특별한 무기를 사용할 수 있는\n프리타임 이벤트까지 알차게 즐겨보세요!",
                requestThumbnailUrl: "/event/game-events/15/thumbnail.png",
                cardImageUrl: "https://rs.nxfs.nexon.com/gameusr/19/7/4y0S29212117284.png",
                thumbnailImageUrl: "https://rs.nxfs.nexon.com/gameusr/19/3/PF9Z25141624118.png",
                period: "24.07.11(목) 11:00 ~ 24.08.01(목) 00:00",
                eventLink: "https://nexon.link/e0a",
                specialItems: [{
                    name: "특별선물상자",
                    imageUrl: "/event/game-events/15/items/special-01.png"
                }],
                normalItems: [{
                    name: "초월해독기상자",
                    imageUrl: "/event/game-events/15/items/normal-01.png"
                }, {
                    name: "클래스해독기상자",
                    imageUrl: "/event/game-events/15/items/normal-02.png"
                }]
            }, {
                id: "16",
                cardNumber: "20",
                gamecode: "1000154",
                name: "무리뉴 감독과 함께하는 FC모바일 넥슨 30주년",
                gtagName: "FC 모바일",
                description: "FC모바일에도 넥슨캐시가?\n신규감독님 넥슨캐시 1만원 획득!\n무리뉴의 스페셜원한 클래스도 만나보세요!",
                requestThumbnailUrl: "/event/game-events/16/thumbnail.png",
                cardImageUrl: "https://rs.nxfs.nexon.com/gameusr/23/9/7x7I22105001801.png",
                thumbnailImageUrl: "https://rs.nxfs.nexon.com/gameusr/23/9/ZOue22105001911.png",
                period: "24.07.18(목) 점검 후 ~ 24.09.04(수) 23:59",
                eventLink: "https://nexon.link/e0b",
                specialItems: [{
                    name: "스페셜찬스",
                    imageUrl: "/event/game-events/16/items/special-01.png"
                }],
                normalItems: [{
                    name: "선수TP패키지",
                    imageUrl: "/event/game-events/16/items/normal-01.png"
                }, {
                    name: "재화패키지",
                    imageUrl: "/event/game-events/16/items/normal-02.png"
                }]
            }]
        },
        7965: function(e) {
            e.exports = {
                "top-button": "TopButton_top-button__4s0dE"
            }
        },
        4393: function(e) {
            e.exports = {
                "maintenance-bg": "CoinMaintenance_maintenance-bg__LLcG_",
                "maintenance-close-button": "CoinMaintenance_maintenance-close-button__QYyMu",
                "maintenance-notice": "CoinMaintenance_maintenance-notice__yj3L0",
                "maintenance-not-today-button": "CoinMaintenance_maintenance-not-today-button__eWnRw",
                "maintenance-not-today-check": "CoinMaintenance_maintenance-not-today-check__Jva39"
            }
        },
        4186: function(e) {
            e.exports = {
                "mobile-block": "Main_mobile-block__FHEwC",
                "event-section": "Main_event-section__v7Wk7",
                "event-section-header": "Main_event-section-header__9sDq7",
                "background-video": "Main_background-video__h_uHT",
                "video-fadein": "Main_video-fadein__tWVEU",
                FadeIn: "Main_FadeIn__J1rQG",
                "nexon-name": "Main_nexon-name__qAk_z",
                "main-game-card-wrapper": "Main_main-game-card-wrapper__J4ZW9",
                "main-header-section": "Main_main-header-section__DJvSn",
                "main-header-icon": "Main_main-header-icon__7X0zQ",
                "main-header-banners": "Main_main-header-banners__k8Qyy",
                "main-header-banner-hyundaicard": "Main_main-header-banner-hyundaicard__4nuEG",
                "main-header-banner-nexonplay": "Main_main-header-banner-nexonplay__ZLE2M",
                "main-catchphrase": "Main_main-catchphrase__ApXeQ",
                "call-nexon-user-name": "Main_call-nexon-user-name__DO7Dc",
                FadeInWithUp: "Main_FadeInWithUp__e_BzM",
                "main-header-event-period": "Main_main-header-event-period__dp_b4",
                "main-catchphrase-body": "Main_main-catchphrase-body__ihtJx",
                "main-catchphrase-point-image": "Main_main-catchphrase-point-image__fYfMm",
                "anim-start": "Main_anim-start__ZG_KG",
                "main-catchphrase-title": "Main_main-catchphrase-title___bTEE",
                "main-catchphrase-description": "Main_main-catchphrase-description__uCt0S",
                "event-period-container": "Main_event-period-container__DDppC",
                "event-badge": "Main_event-badge__a1oCx",
                "event-period": "Main_event-period__Vu_cw",
                "event-gnb-list": "Main_event-gnb-list__Bx4Ix",
                "gnb-tab-relayevent": "Main_gnb-tab-relayevent__R7npF",
                on: "Main_on__LtdzB",
                "gnb-tab-cash": "Main_gnb-tab-cash___XZW_",
                "gnb-tab-avatar": "Main_gnb-tab-avatar__eJEyQ",
                "gnb-tab-comingsoon": "Main_gnb-tab-comingsoon__ZDUjI",
                "event-gnb-list-item": "Main_event-gnb-list-item__1WfOq",
                "event-footer": "Main_event-footer__l0QWD",
                "event-footer-container": "Main_event-footer-container__HiuG9",
                "copyright-container": "Main_copyright-container__osRam",
                copyright: "Main_copyright__QQm9y",
                "nexon-logo": "Main_nexon-logo__0YDKf"
            }
        }
    }
]);