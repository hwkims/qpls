(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [185], {
        3955: function(e, n, t) {
            Promise.resolve().then(t.t.bind(t, 4620, 23)), Promise.resolve().then(t.t.bind(t, 9368, 23)), Promise.resolve().then(t.t.bind(t, 7901, 23)), Promise.resolve().then(t.t.bind(t, 625, 23)), Promise.resolve().then(t.bind(t, 8938)), Promise.resolve().then(t.bind(t, 9754)), Promise.resolve().then(t.bind(t, 1586)), Promise.resolve().then(t.bind(t, 4644)), Promise.resolve().then(t.t.bind(t, 6218, 23))
        },
        9754: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return d
                }
            });
            var o = t(6063),
                r = t(8266),
                i = t(6836),
                s = t.n(i);
            let a = () => navigator.maxTouchPoints > 0,
                c = () => {
                    try {
                        let e = new(s())().getDevice().type;
                        if (/mobile|tablet/.test(e)) return a();
                        return !1
                    } catch (e) {
                        return console.warn(e), !1
                    }
                };

            function u(e, n) {
                return e !== n ? e.parentElement ? u(e.parentElement, n) : null : e
            }

            function d(e) {
                let {
                    gamecode: n = ""
                } = e;
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(r.default, {
                        src: "https://rs.nxfs.nexon.com/common/js/gnb.min.js",
                        onLoad: () => {
                            document.body.classList.remove("nexon-gnb-position"), c() ? (document.body.classList.add("mobile"), document.body.addEventListener("click", e => {
                                function n(e) {
                                    e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation()
                                }
                                window.innerWidth <= 1280 && (u(e.target, document.querySelector("#gnbAllmenu")) && n(e), u(e.target, document.querySelector(".gnbLogo a")) && n(e))
                            }, {
                                capture: !0
                            })) : document.body.classList.add("pc")
                        },
                        "data-gamecode": n,
                        "data-ispublicbanner": "true",
                        "data-showpcbangmenu": "true",
                        "data-minWidth": "360px",
                        "data-loginenv": "live",
                        "data-onlogin": "infaceLoginAPI.gotoSignIn",
                        "data-onlogout": "infaceLoginAPI.gotoSignOut"
                    }), (0, o.jsx)(r.default, {
                        src: "https://ssl.nexon.com/s1/member/nxmember.js"
                    })]
                })
            }
        },
        4644: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                SWRConfigContext: function() {
                    return i
                }
            });
            var o = t(6063),
                r = t(3962);

            function i(e) {
                let {
                    children: n
                } = e;
                return (0, o.jsx)(r.J$, {
                    value: {
                        revalidateIfStale: !1,
                        revalidateOnFocus: !1,
                        revalidateOnReconnect: !1,
                        shouldRetryOnError: !1
                    },
                    children: n
                })
            }
        },
        625: function() {},
        6218: function() {}
    },
    function(e) {
        e.O(0, [47, 836, 202, 492, 810, 851, 744], function() {
            return e(e.s = 3955)
        }), _N_E = e.O()
    }
]);