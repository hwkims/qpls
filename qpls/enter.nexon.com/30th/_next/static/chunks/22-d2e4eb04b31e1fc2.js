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
                    return L
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
                _ = a(589),
                p = a(1774),
                v = a(6477),
                g = a(1586),
                b = a(9015),
                x = a(4393),
                f = a.n(x),
                j = a(4582);
            let M = o().bind(f());
            var N = function(e) {
                    let {
                        onClose: n
                    } = e, [a, s] = (0, i.useState)(!1);
                    return (0, t.jsx)(b.Z, {
                        children: (0, t.jsx)(b.Z.Main, {
                            children: (0, t.jsxs)("div", {
                                className: M("maintenance-bg"),
                                children: [(0, t.jsx)("button", {
                                    className: M("maintenance-close-button"),
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
                                    className: M("maintenance-notice"),
                                    target: "_blank"
                                }), (0, t.jsx)("button", {
                                    className: M("maintenance-not-today-button"),
                                    onClick: function() {
                                        s(e => !e)
                                    },
                                    children: a && (0, t.jsx)("span", {
                                        className: M("maintenance-not-today-check")
                                    })
                                })]
                            })
                        })
                    })
                },
                y = a(218),
                k = a.n(y);
            let C = (0, p.default)(() => a.e(78).then(a.bind(a, 6078)), {
                    loadableGenerated: {
                        webpack: () => [6078]
                    },
                    ssr: !1
                }),
                E = o().bind(l()),
                w = (0, i.createContext)(null),
                I = ["/", "/nexoncash", "/avatar"];
            var L = function(e) {
                var n, a;
                let s = (0, i.useContext)(g.InfaceContext),
                    o = (0, _.usePathname)(),
                    {
                        children: c
                    } = e,
                    l = (0, i.useRef)(null),
                    p = (0, i.useRef)(null),
                    [b, x] = (0, i.useState)(0),
                    [f, M] = (0, i.useState)(!1);
                (0, i.useEffect)(() => {
                    I.forEach((e, n) => {
                        (e === o || e + "/" === o) && x(n)
                    })
                }, [o]);
                let {
                    data: y,
                    isLoading: L
                } = (0, m.ZP)(() => s.loaded ? "profile" : null, async () => {
                    var e, n, a;
                    return await (null === (a = window) || void 0 === a ? void 0 : null === (n = a.inface) || void 0 === n ? void 0 : null === (e = n.auth) || void 0 === e ? void 0 : e.getProfile())
                }, {
                    revalidateIfStale: !1,
                    revalidateOnFocus: !1,
                    revalidateOnReconnect: !1,
                    shouldRetryOnError: !1
                }), {
                    data: P,
                    isLoading: U,
                    error: G
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
                }), O = !L && !U, [R, T] = (0, i.useState)({
                    userProfile: y,
                    pointData: P,
                    pointError: G
                });
                (0, i.useEffect)(() => {
                    T({
                        userProfile: y,
                        pointData: P,
                        pointError: G
                    })
                }, [y, P, G]), (0, i.useEffect)(() => {
                    let e = k()().isAfter("2024-06-19 20:00:00"),
                        n = k()().isBefore("2024-06-20 08:00:00");
                    e && n && ("true" === (0, j.getCookie)("coin-maintenance-not-today") ? M(!1) : M(!0))
                }, []), (0, i.useEffect)(() => {
                    let e = document.createElement("div");
                    return e.classList.add("preload-css-images"), document.body.appendChild(e), () => {
                        document.body.removeChild(e)
                    }
                }, []), (0, i.useEffect)(() => {
                    setTimeout(() => {
                        p.current && p.current.classList.add(E("anim-start"))
                    }, 1500)
                }, []), (0, i.useEffect)(() => {
                    if (!O || !l.current) return;
                    let {
                        innerWidth: e
                    } = window;
                    l.current.src = e < 1280 ? "/30th/common/MO_30TH_BACK.mp4" : "/30th/common/PC_30TH_BACK.mp4", l.current.addEventListener("canplay", () => {
                        var e;
                        null === (e = l.current) || void 0 === e || e.classList.add(E("video-fadein"))
                    })
                }, [O]);
                let Z = (a = null == y ? void 0 : null === (n = y.local_profile_props) || void 0 === n ? void 0 : n.nexon_name) ? (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsxs)("span", {
                        className: E("nexon-name"),
                        children: ["[", a, "]"]
                    }), "님의"]
                }) : "당신의";
                return O ? (0, t.jsxs)("div", {
                    className: E("event-section"),
                    children: [f && (0, t.jsx)(N, {
                        onClose: () => M(!1)
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
                            }), (0, t.jsx)("div", {
                                className: E("main-header-banners"),
                                children: (0, t.jsx)(d.Z, {
                                    "data-a2s-web-obj": "Main",
                                    "data-a2s-option-name": "Nexonplay",
                                    "data-a2s-option-pagecode": "65478",
                                    children: (0, t.jsx)("a", {
                                        href: "https://nexon.link/dsI",
                                        target: "_blank",
                                        className: E("main-header-banner-nexonplay")
                                    })
                                })
                            }), (0, t.jsxs)("div", {
                                className: E("main-catchphrase"),
                                children: [(0, t.jsx)("div", {
                                    className: E("main-game-card-wrapper"),
                                    children: (0, t.jsx)(C, {
                                        delay: 1e3
                                    })
                                }), (0, t.jsx)("p", {
                                    className: E("call-nexon-user-name"),
                                    children: Z
                                }), (0, t.jsx)("div", {
                                    ref: p,
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
                                value: R,
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
                id: "17",
                cardNumber: "10",
                gamecode: "94227",
                name: "넥슨 IP들과 함께! 서든어택 30주년 릴레이 이벤트",
                gtagName: "서든어택",
                description: "서든어택 30주년 릴레이 이벤트가 종료되었지만\n서든어택 생일이 찾아오는 만큼 많은 관심 부탁드려요",
                requestThumbnailUrl: "/event/game-events/17/thumbnail.jpg",
                cardImageUrl: "https://rs.nxfs.nexon.com/gameusr/19/7/zihY29180233377.png",
                thumbnailImageUrl: "https://rs.nxfs.nexon.com/gameusr/19/7/Ha4X29180233455.png",
                period: "24.08.01(목) 점검 후 ~ 24.08.22(목) 점검 전",
                eventLink: "https://nexon.link/e8P",
                specialItems: [{
                    name: "특별상품",
                    imageUrl: "/event/game-events/17/items/special-01.png"
                }],
                normalItems: [{
                    name: "일반상품1",
                    imageUrl: "/event/game-events/17/items/normal-01.png"
                }, {
                    name: "일반상품2",
                    imageUrl: "/event/game-events/17/items/normal-02.png"
                }]
            }, {
                id: "18",
                cardNumber: "25",
                gamecode: "106638",
                name: "히트2 넥슨 30주년 릴레이 이벤트",
                gtagName: "히트2",
                description: "거대 배찌 보스가 히트2에 등장!\n배찌의 물풍선을 모아 특별한 아이템으로 교환하세요!\n30주년 특별 미션 '배찌 캐트시의 추억' 수집에도 도전합시다!",
                requestThumbnailUrl: "/event/game-events/18/thumbnail.jpg",
                cardImageUrl: "https://rs.nxfs.nexon.com/gameusr/24/1/lGqr10103653269.jpg",
                thumbnailImageUrl: "https://rs.nxfs.nexon.com/gameusr/24/1/60aQ10103653425.jpg",
                period: "24.08.07(수) 점검 후 ~ 24.08.21(수) 점검 전",
                eventLink: "https://nexon.link/e8V",
                specialItems: [{
                    name: "특별상품",
                    imageUrl: "/event/game-events/18/items/special-01.png"
                }],
                normalItems: [{
                    name: "일반상품1",
                    imageUrl: "/event/game-events/18/items/normal-01.png"
                }, {
                    name: "일반상품2",
                    imageUrl: "/event/game-events/18/items/normal-02.png"
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