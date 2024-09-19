(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [643], {
        6030: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 9768))
        },
        9768: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n(6063),
                i = n(4673),
                o = n.n(i),
                s = n(3569),
                c = n(9898),
                l = n.n(c),
                r = n(4617),
                d = n(3962),
                _ = n(5826),
                m = n(3708),
                v = n(589),
                p = n(9745),
                g = n(5022),
                u = n(1003),
                h = n(5502),
                x = n(1774);
            let y = o().bind(l()),
                j = (0, x.default)(() => n.e(251).then(n.bind(n, 6251)), {
                    loadableGenerated: {
                        webpack: () => [6251]
                    },
                    ssr: !1
                });
            var b = (0, r.forwardRef)(function(e, t) {
                    var n;
                    (0, v.useRouter)(), (0, v.usePathname)();
                    let {
                        userProfile: i,
                        pointData: o,
                        pointError: c
                    } = (0, r.useContext)(g.EventContext), [l, x] = (0, r.useState)(i), [b, N] = (0, r.useState)(o), R = (0, r.useRef)(null), f = (0, r.useRef)(null);
                    (0, r.useEffect)(() => {
                        x(i)
                    }, [i]), (0, r.useEffect)(() => {
                        N(o)
                    }, [o]), (0, r.useEffect)(() => {
                        f.current && R.current && new IntersectionObserver(e => {
                            let [t] = e;
                            if (t.intersectionRatio > .7) {
                                var n;
                                null === (n = f.current) || void 0 === n || n.classList.add(y("character-animate-on"))
                            }
                        }, {
                            root: null,
                            rootMargin: "0px",
                            threshold: .7
                        }).observe(R.current)
                    }, []);
                    let E = () => {
                            let {
                                kakaoPixel: e,
                                fbq: t,
                                ttq: n
                            } = window;
                            (0, u.k)("event", "event_btn_0314");
                            try {
                                window.gtag_report_conversion = function(e) {
                                    return (0, u.k)("event", "conversion", {
                                        send_to: "AW-16483351112/aZbBCIefppsZEMj077M9",
                                        event_callback: function() {
                                            void 0 !== e && (window.location = e)
                                        }
                                    }), !1
                                }, window.gtag_report_conversion()
                            } catch (e) {}
                            try {
                                e("8045587692476711134").signUp()
                            } catch (e) {}
                            try {
                                t("track", "CompleteRegistration")
                            } catch (e) {}
                            try {
                                n.track("ClickButton")
                            } catch (e) {}
                        },
                        A = e => {
                            let {
                                gtagName: t
                            } = e;
                            (0, u.k)("event", "".concat(t, "_btn_0314"))
                        };
                    return (0, a.jsxs)("section", {
                        ref: t,
                        className: y("relay-event-container"),
                        children: [(0, a.jsxs)("div", {
                            ref: R,
                            className: y("relay-event-banner"),
                            children: [(0, a.jsx)(h.ZW, {
                                id: "relayevent",
                                children: (0, a.jsx)("div", {
                                    className: y("relay-event-title-image")
                                })
                            }), (0, a.jsx)("div", {
                                className: y("relay-event-period-container"),
                                children: (0, a.jsx)("div", {
                                    className: y("relay-event-period"),
                                    "aria-description": "이벤트 일정 2024년 3월 14일 목요일부터 2024년 11월 30일 토요일까지"
                                })
                            }), (0, a.jsx)("div", {
                                className: y("relay-event-paragraph"),
                                "aria-description": "넥슨의 다양한 게임에서 릴레이 이벤트가 진행됩니다."
                            }), (0, a.jsx)("div", {
                                className: y("how-to-play-image"),
                                "aria-description": "how to play"
                            })]
                        }), (0, a.jsxs)("div", {
                            ref: f,
                            className: y("game-characters"),
                            children: [(0, a.jsx)("div", {
                                className: y("game-character-image", "left-game-characters-03")
                            }), (0, a.jsx)("div", {
                                className: y("game-character-image", "left-game-characters-02")
                            }), (0, a.jsx)("div", {
                                className: y("game-character-image", "left-game-characters-01")
                            }), (0, a.jsx)("div", {
                                className: y("game-character-image", "right-game-characters-01")
                            })]
                        }), (0, a.jsx)("div", {
                            className: y("event-coin-giftshop"),
                            children: (0, a.jsxs)("div", {
                                className: y("event-coin-giftshop-wrapper"),
                                children: [(0, a.jsx)("div", {
                                    className: y("event-game-list-title-wrapper"),
                                    children: (0, a.jsx)("strong", {
                                        className: y("event-game-list-title"),
                                        children: (0, a.jsx)("div", {
                                            className: y("event-game-list-title-month-image")
                                        })
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: y("event-game-container"),
                                    children: [(0, a.jsx)("div", {
                                        className: y("event-game-logo-list-pc"),
                                        children: (0, a.jsx)("div", {
                                            className: y("event-game-logo-list-icons")
                                        })
                                    }), (0, a.jsxs)("div", {
                                        className: y("coin-score"),
                                        children: [(0, a.jsxs)("div", {
                                            className: y("coin-score-score-view"),
                                            children: [(0, a.jsx)("div", {
                                                className: y("coin-score-title-container"),
                                                children: (0, a.jsx)("div", {
                                                    className: y("coin-score-reset-remain-time"),
                                                    children: (0, a.jsx)(j, {})
                                                })
                                            }), (0, a.jsxs)("div", {
                                                className: y("coin-view-container"),
                                                children: [(0, a.jsxs)("div", {
                                                    className: y("coin-count-container"),
                                                    children: [(0, a.jsx)("div", {
                                                        className: y("coin-icon-image")
                                                    }), i ? (0, a.jsxs)("div", {
                                                        className: y("coin-count-text"),
                                                        children: [(null == c ? void 0 : c.code) === 202 ? "-" : null !== (n = null == b ? void 0 : b.totalCount) && void 0 !== n ? n : 0, "개"]
                                                    }) : (0, a.jsxs)("div", {
                                                        className: y("coin-count-need-login"),
                                                        children: [(0, a.jsxs)("span", {
                                                            className: y("mobile-block"),
                                                            children: [(0, a.jsx)(p.Z, {
                                                                "data-a2s-web-obj": "CoinShop",
                                                                "data-a2s-option-name": "Login",
                                                                "data-a2s-option-pagecode": "65478",
                                                                children: (0, a.jsx)("button", {
                                                                    onClick: () => {
                                                                        var e, t, n;
                                                                        (0, u.k)("event", "login_btn_0314"), null === (n = window) || void 0 === n || null === (t = n.inface) || void 0 === t || null === (e = t.auth) || void 0 === e || e.gotoSignIn()
                                                                    },
                                                                    className: y("login-link"),
                                                                    children: "로그인"
                                                                })
                                                            }), "이", " "]
                                                        }), "필요합니다."]
                                                    })]
                                                }), (0, a.jsxs)("div", {
                                                    className: y("coin-information"),
                                                    children: [i && (0, a.jsx)(p.Z, {
                                                        "data-a2s-web-obj": "CoinShop",
                                                        "data-a2s-option-name": "CoinHistory",
                                                        "data-a2s-option-pagecode": "65478",
                                                        children: (0, a.jsx)("button", {
                                                            className: y("coin-information-button"),
                                                            onClick: async () => {
                                                                var e;
                                                                if (!i) return window.infaceLoginAPI.gotoSignIn();
                                                                let t = await (0, _.u)().getPointHistory();
                                                                return (0, m.Qy)({
                                                                    history: null == t ? void 0 : null === (e = t.data) || void 0 === e ? void 0 : e.data
                                                                })
                                                            },
                                                            children: (0, a.jsx)("span", {
                                                                className: y("coin-history-button-image"),
                                                                "aria-description": "코인 획득 이력 히스토리 버튼"
                                                            })
                                                        })
                                                    }), (0, a.jsx)(p.Z, {
                                                        "data-a2s-web-obj": "CoinShop",
                                                        "data-a2s-option-name": "Exchange",
                                                        "data-a2s-option-pagecode": "65478",
                                                        children: (0, a.jsx)("button", {
                                                            className: y("coin-information-button"),
                                                            onClick: async () => i ? window.open("".concat("https://shopping.nexon.com/30th", "/purchase")) : window.infaceLoginAPI.gotoSignIn(),
                                                            children: (0, a.jsx)("span", {
                                                                className: y("coin-purchase-history-button-image"),
                                                                "aria-description": "코인 획득 이력 히스토리 버튼"
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })]
                                        }), (0, a.jsx)(p.Z, {
                                            "data-a2s-web-obj": "CoinShop",
                                            "data-a2s-option-name": "CoinShop",
                                            "data-a2s-option-type": "Top",
                                            "data-a2s-option-pagecode": "65478",
                                            children: (0, a.jsx)("a", {
                                                className: y("go-to-giftshop"),
                                                onClick: E,
                                                href: "https://shopping.nexon.com/30th",
                                                target: "_blank"
                                            })
                                        })]
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: y("how-to-check-coupon-button-wrapper"),
                                    children: (0, a.jsx)(p.Z, {
                                        "data-a2s-web-obj": "Relay",
                                        "data-a2s-option-name": "Coupon",
                                        "data-a2s-option-pagecode": "65478",
                                        children: (0, a.jsx)("button", {
                                            className: y("how-to-check-coupon-button"),
                                            onClick: () => (0, m.Ao)(),
                                            children: "쿠폰 확인 방법"
                                        })
                                    })
                                }), (0, a.jsx)("div", {
                                    className: y("coint-status-wrapper"),
                                    children: (0, a.jsx)("div", {
                                        className: y("coin-status-information-image"),
                                        "aria-description": "코인 획득전 획득후 아이콘 표기 방법 소개"
                                    })
                                }), (0, a.jsx)("ul", {
                                    className: y("event-game-list"),
                                    children: s.W.map(e => {
                                        var t, n;
                                        let i = null == b ? void 0 : null === (n = b.attends) || void 0 === n ? void 0 : null === (t = n.find(t => t.gamecode === e.gamecode)) || void 0 === t ? void 0 : t.completed,
                                            o = e.thumbnailImageUrl;
                                        return e.requestThumbnailUrl ? o = new RegExp(/(http(s)?:\/\/).+/).test(e.requestThumbnailUrl) ? 'url("'.concat(e.requestThumbnailUrl, '")') : 'url("/30th'.concat(e.requestThumbnailUrl, '")') : e.cardImageUrl && (o = 'url("'.concat(e.cardImageUrl, '")')), (0, a.jsxs)("li", {
                                            className: y("event-game-list-item"),
                                            children: [(0, a.jsxs)("div", {
                                                className: y("event-game-list-item-contents"),
                                                children: [(0, a.jsx)("div", {
                                                    className: y("event-game-list-item-image"),
                                                    style: {
                                                        backgroundImage: o
                                                    }
                                                }), (0, a.jsxs)("div", {
                                                    className: y("event-game"),
                                                    children: [(0, a.jsx)("div", {
                                                        className: y("event-game-title"),
                                                        children: e.name
                                                    }), (0, a.jsx)("div", {
                                                        className: y("event-game-description"),
                                                        children: e.description
                                                    }), (0, a.jsxs)("div", {
                                                        className: y("event-game-period"),
                                                        children: [(0, a.jsx)("span", {
                                                            className: y("event-game-period-badge"),
                                                            children: "이벤트 기간"
                                                        }), (0, a.jsx)("span", {
                                                            className: y("event-game-period-text"),
                                                            children: e.period
                                                        })]
                                                    })]
                                                })]
                                            }), (0, a.jsxs)("div", {
                                                className: y("event-game-gift-items"),
                                                children: [e.specialItems.map(e => (0, a.jsx)("div", {
                                                    className: y("purchase-coin-item"),
                                                    style: {
                                                        backgroundImage: 'url("/30th'.concat(e.imageUrl, '")')
                                                    }
                                                }, e.name)), e.normalItems.map(e => (0, a.jsx)("div", {
                                                    className: y("purchase-coin-item"),
                                                    style: {
                                                        backgroundImage: 'url("/30th'.concat(e.imageUrl, '")')
                                                    }
                                                }, e.name))]
                                            }), (0, a.jsx)("button", {
                                                className: y("event-game-goto-gift-shop-button", i && "received"),
                                                onClick: async () => {
                                                    var t, n, a, o, s, c;
                                                    if (!l) return (0, p.D)("CoinShop", {
                                                        name: "Try_BeforeCoin",
                                                        pagecode: "65478",
                                                        value: e.name
                                                    }), A({
                                                        gtagName: e.gtagName
                                                    }), (0, m.HO)({
                                                        hrefURL: e.eventLink,
                                                        gameName: e.name
                                                    });
                                                    i || (0, p.D)("Relay", {
                                                        name: "Try_BeforeCoin",
                                                        pagecode: "65478",
                                                        value: e.name
                                                    });
                                                    let r = await (0, _.u)().charge30thPoints({
                                                        chargeType: "RELAY",
                                                        gameCode: e.gamecode
                                                    });
                                                    return [2004, 2005, 2006].includes(null == r ? void 0 : null === (t = r.data) || void 0 === t ? void 0 : t.code) ? (0, m.vd)() : i || (null == r ? void 0 : null === (n = r.data) || void 0 === n ? void 0 : n.code) === 2001 ? ((0, p.D)("Relay", {
                                                        name: "Try_AfterCoin",
                                                        pagecode: "65478",
                                                        value: e.name
                                                    }), setTimeout(() => window.open(e.eventLink, "_blank"))) : (null == r ? void 0 : null === (a = r.data) || void 0 === a ? void 0 : a.code) === 101 ? null === (c = window) || void 0 === c ? void 0 : null === (s = c.location) || void 0 === s ? void 0 : s.reload() : (null == r ? void 0 : null === (o = r.data) || void 0 === o ? void 0 : o.code) === 0 ? ((0, p.D)("Relay", {
                                                        name: "Paid",
                                                        pagecode: "65478",
                                                        value: e.name
                                                    }), await (0, d.JG)("get30thPoints"), (0, m.G6)({
                                                        hrefURL: e.eventLink,
                                                        gameName: e.name
                                                    })) : void 0
                                                },
                                                children: (0, a.jsx)("span", {
                                                    className: y("event-game-goto-gift-shop-image")
                                                })
                                            })]
                                        }, e.gamecode)
                                    })
                                }), (0, a.jsx)(p.Z, {
                                    "data-a2s-web-obj": "Main",
                                    "data-a2s-option-name": "CoinShop",
                                    "data-a2s-option-type": "Bottom",
                                    "data-a2s-option-pagecode": "65478",
                                    children: (0, a.jsx)("a", {
                                        className: y("goto-gift-shop-button"),
                                        onClick: E,
                                        href: "https://shopping.nexon.com/30th",
                                        target: "_blank"
                                    })
                                })]
                            })
                        }), (0, a.jsxs)("div", {
                            className: y("product-description-container"),
                            children: [(0, a.jsx)("div", {
                                className: y("product-description-title")
                            }), (0, a.jsxs)("div", {
                                className: y("product-contents"),
                                children: [(0, a.jsxs)("div", {
                                    className: y("product-item-container"),
                                    children: [(0, a.jsxs)("div", {
                                        className: y("product-item-description-images"),
                                        children: [(0, a.jsx)("div", {
                                            className: y("product-description-image", "product-blue-label-image")
                                        }), (0, a.jsx)("div", {
                                            className: y("product-description-image", "product-green-label-image")
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: y("product-description-contents"),
                                        children: [(0, a.jsx)("strong", {
                                            className: y("product-description-contents-title"),
                                            children: "유저 여러분을 위해 준비한 특별한 선물!"
                                        }), (0, a.jsx)("span", {
                                            className: y("product-description-contents-paragraph"),
                                            children: "릴레이 이벤트에 맞춰 각 게임에서 준비한 특별한 선물을 만나 보세요!"
                                        }), (0, a.jsxs)("span", {
                                            className: y("product-change-by-coin-description"),
                                            children: [(0, a.jsx)("span", {
                                                className: y("product-special-item-text"),
                                                children: "특별 상품 (블루 라벨)"
                                            }), " ", (0, a.jsx)("b", {
                                                className: y("product-coin-point-text"),
                                                children: "6코인"
                                            }), "으로 교환 가능"]
                                        }), (0, a.jsxs)("span", {
                                            className: y("product-change-by-coin-description"),
                                            children: [(0, a.jsx)("span", {
                                                className: y("product-normal-item-text"),
                                                children: "일반 상품 (그린 라벨)"
                                            }), " ", (0, a.jsx)("b", {
                                                className: y("product-coin-point-text"),
                                                children: "2코인"
                                            }), "으로 교환 가능"]
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: y("product-coin-container"),
                                    children: [(0, a.jsx)("div", {
                                        className: y("product-description-image", "product-coin-image")
                                    }), (0, a.jsxs)("div", {
                                        className: y("product-description-contents"),
                                        children: [(0, a.jsx)("strong", {
                                            className: y("product-description-contents-title"),
                                            children: "매달 쏟아지는 추가 상품 획득의 기회!"
                                        }), (0, a.jsx)("span", {
                                            className: y("product-description-contents-paragraph"),
                                            children: "30주년 기프트샵을 통해 게임에서 준비한 선물 외"
                                        }), (0, a.jsx)("span", {
                                            className: y("product-description-contents-paragraph"),
                                            children: "넥슨캐시 등 다양한 상품에 응모해 보세요!"
                                        })]
                                    })]
                                })]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: y("see-u-next"),
                            children: [(0, a.jsx)("div", {
                                className: y("see-u-next-title"),
                                "aria-description": "다음 달 이어질 릴레이 이벤트도 많이 기대해 주세요!"
                            }), (0, a.jsx)("div", {
                                className: y("see-u-next-image"),
                                "aria-description": "캐릭터 이미지"
                            })]
                        }), (0, a.jsxs)("div", {
                            className: y("footer-notice-container"),
                            children: [(0, a.jsx)("div", {
                                className: y("footer-title-note-image"),
                                "aria-description": "확인해 주세요!"
                            }), (0, a.jsx)("strong", {
                                className: y("event-footer-notice-title"),
                                children: "[릴레이 이벤트]"
                            }), (0, a.jsxs)("ul", {
                                className: y("event-footer-notice-list"),
                                children: [(0, a.jsxs)("li", {
                                    children: [(0, a.jsxs)("span", {
                                        className: y("list-disc-item-block"),
                                        children: ["각 이벤트 목록 내 ", "'", "이벤트 바로가기", "'", " 버튼 클릭 시 월 1회에"]
                                    }), " ", (0, a.jsxs)("span", {
                                        className: y("list-disc-item-block"),
                                        children: ["한해 ", "'", "30주년 코인", "'", " 10개를 획득하며, 각 게임별 이벤트"]
                                    }), " ", (0, a.jsxs)("span", {
                                        className: y("list-disc-item-block"),
                                        children: [" ", "일정에 따라 이벤트 안내 페이지 및 공식 홈페이지로 이동합니다."]
                                    })]
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)("span", {
                                        className: y("list-disc-item-block"),
                                        children: "매월 1일 오전 0시, 릴레이 이벤트 대상 게임이 변경됩니다."
                                    })
                                }), (0, a.jsxs)("li", {
                                    children: [(0, a.jsx)("span", {
                                        className: y("list-disc-item-block"),
                                        children: "획득한 30주년 코인은 30주년 기프트샵에서 당월"
                                    }), " ", (0, a.jsx)("span", {
                                        className: y("list-disc-item-block"),
                                        children: "릴레이 이벤트 대상 게임의 아이템 및 응모권으로 교환할 수 있습니다."
                                    })]
                                }), (0, a.jsxs)("li", {
                                    children: [(0, a.jsx)("span", {
                                        className: y("list-disc-item-block"),
                                        children: "매월 1일 오전 0시, 보유한 30주년 코인이 초기화 되며,"
                                    }), " ", (0, a.jsx)("span", {
                                        className: y("list-disc-item-block"),
                                        children: "새로운 릴레이 이벤트에 참여하여 다시 획득할 수 있습니다."
                                    })]
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsxs)("span", {
                                        className: y("list-disc-item-block"),
                                        children: ["30주년 기프트샵은 페이지 내 ", "'", "30주년 기프트샵 바로가기", "'", " 버튼을 클릭하여 접속할 수 있습니다."]
                                    })
                                })]
                            }), (0, a.jsx)("strong", {
                                className: y("event-footer-notice-title"),
                                children: "[기프트샵]"
                            }), (0, a.jsx)(p.Z, {
                                "data-a2s-web-obj": "CoinShop",
                                "data-a2s-option-name": "Notice",
                                "data-a2s-option-pagecode": "65478",
                                children: (0, a.jsx)("button", {
                                    onClick: m.iY,
                                    children: (0, a.jsx)("b", {
                                        className: y("event-footer-notice-alert"),
                                        children: "유의사항"
                                    })
                                })
                            }), (0, a.jsxs)("ul", {
                                className: y("event-footer-notice-list"),
                                children: [(0, a.jsxs)("li", {
                                    children: [(0, a.jsx)("span", {
                                        className: y("list-disc-item-block"),
                                        children: "30주년 기프트샵 오픈 기간:"
                                    }), " 2024년 3월 14일(목) ~ 2024년 11월 30일(토) 오후 11시 59분까지"]
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)("span", {
                                        className: y("list-disc-item-block"),
                                        children: "기프트샵 교환 상품은 릴레이 이벤트에 맞춰 매월 1일 오전 0시 업데이트 됩니다."
                                    })
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)("span", {
                                        className: y("list-disc-item-block"),
                                        children: "매월 1일 오전 0시, 보유한 30주년 코인이 초기화되며 복구되지 않습니다."
                                    })
                                })]
                            })]
                        })]
                    })
                }),
                N = n(6413),
                R = n(8266);

            function f() {
                return (0, N.Z)(), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(R.default, {
                        id: "googleads-relay",
                        children: "gtag('event', 'conversion', {'send_to': 'AW-16483351112/PIbhCJG4qKAZEMj077M9'});"
                    }), (0, a.jsx)(b, {})]
                })
            }
        },
        6413: function(e, t, n) {
            "use strict";
            var a = n(4617),
                i = n(8254);
            t.Z = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        baseScale: t = 1,
                        changeScale: n = .75,
                        targetViewportWidth: o = 1e3
                    } = e;
                (0, a.useEffect)(() => {
                    let e = !1,
                        a = function() {
                            let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            try {
                                let {
                                    forceToBase: i = !1
                                } = a, o = document.querySelector("meta[name=viewport]");
                                if (e) {
                                    e = !1;
                                    return
                                }
                                let s = [() => window.innerWidth < 360, () => {
                                    let {
                                        navigator: e
                                    } = window;
                                    return e.userAgent.includes("SM-F")
                                }].some(e => e());
                                s && (e = !0);
                                let c = s ? n : t,
                                    l = i ? t : c;
                                o.setAttribute("content", "width=device-width, initial-scale=".concat(l, ", maximum-scale=").concat(l, ", minimum-scale=").concat(l, ", user-scalable=no"))
                            } catch (e) {
                                i.Tb(e)
                            }
                        };
                    return a(), window.addEventListener("resize", a), () => {
                        window.removeEventListener("resize", a), a({
                            forceToBase: !0
                        })
                    }
                }, [t, n, o])
            }
        },
        9898: function(e) {
            e.exports = {
                hide: "A_RelayEvent_hide__gNP4A",
                "relay-event-container": "A_RelayEvent_relay-event-container__25tF4",
                "relay-event-banner": "A_RelayEvent_relay-event-banner__gOTfP",
                "how-to-play-image": "A_RelayEvent_how-to-play-image__6Ih0H",
                "relay-event-title-image": "A_RelayEvent_relay-event-title-image__GljGk",
                "event-game-list-title-wrapper": "A_RelayEvent_event-game-list-title-wrapper__YTB5z",
                "relay-event-period-container": "A_RelayEvent_relay-event-period-container__h07RH",
                "relay-event-period": "A_RelayEvent_relay-event-period__Al6bB",
                "relay-event-paragraph": "A_RelayEvent_relay-event-paragraph__FiurR",
                "game-characters": "A_RelayEvent_game-characters__ozsRu",
                "character-animate-on": "A_RelayEvent_character-animate-on__46DGY",
                "game-character-image": "A_RelayEvent_game-character-image__idrEu",
                FadeInWithUp: "A_RelayEvent_FadeInWithUp__p3TMx",
                "left-game-characters-01": "A_RelayEvent_left-game-characters-01__X1ip0",
                "left-game-characters-02": "A_RelayEvent_left-game-characters-02__EEJZz",
                "left-game-characters-03": "A_RelayEvent_left-game-characters-03__Tc6qd",
                "right-game-characters-01": "A_RelayEvent_right-game-characters-01__WMBVN",
                "relay-event-paragraph-title": "A_RelayEvent_relay-event-paragraph-title__uGTuI",
                "relay-event-paragraph-description": "A_RelayEvent_relay-event-paragraph-description__UBe_w",
                "event-coin-giftshop": "A_RelayEvent_event-coin-giftshop__pu1tK",
                "event-coin-giftshop-wrapper": "A_RelayEvent_event-coin-giftshop-wrapper__ALhFs",
                "event-game-list-title": "A_RelayEvent_event-game-list-title__1Jnxj",
                "event-game-list-title-month-image": "A_RelayEvent_event-game-list-title-month-image__2t2tD",
                "event-game-container": "A_RelayEvent_event-game-container__pMrnK",
                "event-game-logo-list-pc": "A_RelayEvent_event-game-logo-list-pc__QiQ2_",
                "event-game-logo-list-icons": "A_RelayEvent_event-game-logo-list-icons__EC6ev",
                "event-game-logo-list-mo": "A_RelayEvent_event-game-logo-list-mo__SHcRU",
                "coin-score": "A_RelayEvent_coin-score__mfouL",
                "coin-score-score-view": "A_RelayEvent_coin-score-score-view__M7v_X",
                "coin-score-title-container": "A_RelayEvent_coin-score-title-container__UHz9S",
                "coin-score-reset-remain-time": "A_RelayEvent_coin-score-reset-remain-time__uDc1H",
                "coin-view-container": "A_RelayEvent_coin-view-container__ZT2y8",
                "coin-count-container": "A_RelayEvent_coin-count-container__bC_Ci",
                "coin-icon-image": "A_RelayEvent_coin-icon-image__RQNbj",
                "coin-count-text": "A_RelayEvent_coin-count-text__jP3Q3",
                "login-link": "A_RelayEvent_login-link__SS2vN",
                "coin-count-need-login": "A_RelayEvent_coin-count-need-login__rOOqg",
                "mobile-block": "A_RelayEvent_mobile-block__7mzaC",
                "coin-information": "A_RelayEvent_coin-information__Mgpgd",
                "coin-information-button": "A_RelayEvent_coin-information-button__FNilu",
                "coin-information-button-name": "A_RelayEvent_coin-information-button-name__bPIeY",
                "coin-information-button-icon": "A_RelayEvent_coin-information-button-icon__TtWET",
                "coin-history-button-image": "A_RelayEvent_coin-history-button-image__WSzYn",
                "coin-purchase-history-button-image": "A_RelayEvent_coin-purchase-history-button-image__epSPT",
                "go-to-giftshop": "A_RelayEvent_go-to-giftshop__SwM_x",
                "how-to-check-coupon-button-wrapper": "A_RelayEvent_how-to-check-coupon-button-wrapper__yhWO7",
                "how-to-check-coupon-button": "A_RelayEvent_how-to-check-coupon-button__aNvRz",
                "coint-status-wrapper": "A_RelayEvent_coint-status-wrapper__meOba",
                "coin-status-information-image": "A_RelayEvent_coin-status-information-image__9bZNs",
                "event-game-list": "A_RelayEvent_event-game-list__CDq1o",
                "event-game-list-item": "A_RelayEvent_event-game-list-item__JBbLb",
                "event-game-list-item-contents": "A_RelayEvent_event-game-list-item-contents__v0o4Y",
                "event-game-list-item-image": "A_RelayEvent_event-game-list-item-image__iIAiq",
                "event-game": "A_RelayEvent_event-game__QLvGC",
                "event-game-title": "A_RelayEvent_event-game-title__6GP1k",
                "event-game-description": "A_RelayEvent_event-game-description__vlgah",
                "event-game-period": "A_RelayEvent_event-game-period__rWg4n",
                "event-game-period-badge": "A_RelayEvent_event-game-period-badge__RAToW",
                "event-game-period-text": "A_RelayEvent_event-game-period-text__8Oqmx",
                "event-game-gift-items": "A_RelayEvent_event-game-gift-items__cNF5K",
                "purchase-coin-item": "A_RelayEvent_purchase-coin-item__KnuWR",
                "event-game-goto-gift-shop-button": "A_RelayEvent_event-game-goto-gift-shop-button__reaFP",
                "event-game-goto-gift-shop-image": "A_RelayEvent_event-game-goto-gift-shop-image__DMre_",
                received: "A_RelayEvent_received__gUrp_",
                "goto-gift-shop-button": "A_RelayEvent_goto-gift-shop-button__Lg9oK",
                "product-description-container": "A_RelayEvent_product-description-container__GGXTj",
                "product-description-title": "A_RelayEvent_product-description-title__E9RFq",
                "product-contents": "A_RelayEvent_product-contents__alThn",
                "product-item-container": "A_RelayEvent_product-item-container__I3bQN",
                "product-coin-container": "A_RelayEvent_product-coin-container__FX9Nb",
                "product-description-image": "A_RelayEvent_product-description-image__Dfkik",
                "product-item-description-images": "A_RelayEvent_product-item-description-images__iw9Zx",
                "product-blue-label-image": "A_RelayEvent_product-blue-label-image__iiMA4",
                "product-green-label-image": "A_RelayEvent_product-green-label-image__nR7OG",
                "product-coin-image": "A_RelayEvent_product-coin-image__FLI_F",
                "product-description-contents": "A_RelayEvent_product-description-contents__DCZBc",
                "product-description-contents-title": "A_RelayEvent_product-description-contents-title__ceb9E",
                "product-description-contents-paragraph": "A_RelayEvent_product-description-contents-paragraph__OPo8c",
                "product-change-by-coin-description": "A_RelayEvent_product-change-by-coin-description__b_RDI",
                "product-special-item-text": "A_RelayEvent_product-special-item-text__Wg7ew",
                "product-normal-item-text": "A_RelayEvent_product-normal-item-text__3DtmC",
                "product-coin-point-text": "A_RelayEvent_product-coin-point-text__TN_MZ",
                "see-u-next": "A_RelayEvent_see-u-next__Q91lb",
                "see-u-next-title": "A_RelayEvent_see-u-next-title__0zQjZ",
                "see-u-next-image": "A_RelayEvent_see-u-next-image__5NNfM",
                "footer-notice-container": "A_RelayEvent_footer-notice-container__PRMVa",
                "footer-title-note-image": "A_RelayEvent_footer-title-note-image__1WWJv",
                "event-footer-notice-title": "A_RelayEvent_event-footer-notice-title___wzgt",
                "event-footer-notice-list": "A_RelayEvent_event-footer-notice-list__SMsn4",
                "event-footer-notice-alert": "A_RelayEvent_event-footer-notice-alert__PY90V",
                "list-disc-item-block": "A_RelayEvent_list-disc-item-block__rNRk7",
                "list-item-block": "A_RelayEvent_list-item-block__ruRlW",
                "kfa-partner": "A_RelayEvent_kfa-partner___F5Qf"
            }
        }
    },
    function(e) {
        e.O(0, [47, 158, 202, 22, 492, 810, 851, 744], function() {
            return e(e.s = 6030)
        }), _N_E = e.O()
    }
]);