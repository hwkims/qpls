(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [78], {
        6078: function(e, a, t) {
            "use strict";
            t.r(a);
            var n = t(6063),
                r = t(4617),
                m = t(4673),
                c = t.n(m),
                o = t(917),
                s = t.n(o),
                d = t(3569);
            let u = c().bind(s()),
                g = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "29", "30", "33", "35"];
            a.default = function(e) {
                let {
                    className: a,
                    delay: t = 500
                } = e, [m, c] = (0, r.useState)(!1), [o, s] = (0, r.useState)(!1), [l, i] = (0, r.useState)(function() {
                    if (77 >= Math.floor(100 * Math.random())) {
                        let e = Math.floor(Math.random() * d.W.length),
                            a = d.W[e].cardNumber;
                        return g.findIndex(e => e === a)
                    }
                    return Math.floor(Math.random() * g.length)
                }()), [_] = (0, r.useState)("/30th/event/game-cards/apng/game_card".concat(g[l], ".png"));
                return (0, r.useEffect)(() => {
                    let e = null,
                        a = setTimeout(() => {
                            c(!0),
                                function a() {
                                    e = setTimeout(() => {
                                        o || s(!0);
                                        let e = Number(l);
                                        i(e + 1 >= g.length ? 0 : e + 1), a()
                                    }, o ? 5e3 : 7e3)
                                }()
                        }, t);
                    return () => {
                        clearTimeout(a), clearTimeout(e)
                    }
                }, [o, l, t]), (0, n.jsx)("div", {
                    className: u("game-card-component", a),
                    children: m ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: u("game-card-image", !o && "on"),
                            style: {
                                backgroundImage: 'url("'.concat(_, '")')
                            }
                        }), g.map(e => (0, n.jsx)("div", {
                            style: {
                                backgroundImage: 'url("/30th/event/game-cards/png/game_card'.concat(e, '.png")')
                            },
                            className: u("game-card-image", o && e === g[l] && "on"),
                            alt: "넥슨 게임 카드"
                        }, e))]
                    }) : (0, n.jsx)(n.Fragment, {})
                })
            }
        },
        917: function(e) {
            e.exports = {
                "game-card-component": "GameCard_game-card-component__ftFWE",
                "game-card-image": "GameCard_game-card-image__CfVmj",
                on: "GameCard_on__LS_4X",
                showAnimation: "GameCard_showAnimation__iaa2Q"
            }
        }
    }
]);