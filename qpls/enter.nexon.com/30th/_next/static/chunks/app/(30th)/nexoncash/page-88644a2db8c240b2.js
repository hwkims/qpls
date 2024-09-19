(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [628], {
        5188: function(e, i, t) {
            Promise.resolve().then(t.bind(t, 1042))
        },
        9388: function(e) {
            e.exports = function(e, i) {
                i.prototype.isSameOrAfter = function(e, i) {
                    return this.isSame(e, i) || this.isAfter(e, i)
                }
            }
        },
        4518: function(e, i, t) {
            "use strict";
            t.d(i, {
                a: function() {
                    return s
                }
            });
            var n = t(216);

            function s() {
                return {
                    checkUserCashAcquisition: () => n.I.request({
                        method: "GET",
                        url: "/30th/quiz/check/user"
                    }),
                    checkRemainingDailyCash: () => n.I.request({
                        method: "GET",
                        url: "/30th/quiz/check/limit"
                    }),
                    getQuizWithLogin(e) {
                        let {
                            token: i
                        } = e;
                        return n.I.request({
                            method: "GET",
                            url: "/30th/quiz",
                            headers: {
                                token: i
                            }
                        })
                    },
                    getQuizWithoutLogin: () => n.I.request({
                        method: "GET",
                        url: "/30th/quiz/unlogin"
                    }),
                    checkQuizAnswer(e) {
                        let {
                            answer: i,
                            number: t
                        } = e;
                        return n.I.request({
                            method: "GET",
                            url: "/30th/quiz/answer",
                            params: {
                                answer: i,
                                number: t
                            }
                        })
                    },
                    checkApply: () => n.I.request({
                        method: "GET",
                        url: "/30th/quiz/event/check"
                    }),
                    getCashHistory: () => n.I.request({
                        method: "GET",
                        url: "/30th/quiz/cash"
                    }),
                    applyCashEvent: () => n.I.request({
                        method: "POST",
                        url: "/30th/quiz/event"
                    }),
                    checkRemainingNexonCashPercentage: () => n.I.request({
                        method: "GET",
                        url: "/30th/quiz/cash/percentage"
                    })
                }
            }
        },
        1042: function(e, i, t) {
            "use strict";
            t.r(i), t.d(i, {
                default: function() {
                    return T
                }
            });
            var n = t(6063),
                s = t(4617),
                a = t(1774),
                o = t(4673),
                l = t.n(o),
                r = t(589),
                c = t(5022),
                u = t(7940),
                v = t.n(u),
                d = t(3962),
                h = t(4518);
            let _ = l().bind(v());
            var x = function(e) {
                    let {
                        data: i = {
                            percent: 0
                        }
                    } = (0, d.ZP)("nexoncash-status", async () => {
                        var e, i;
                        let t = await (0, h.a)().checkRemainingNexonCashPercentage();
                        return null !== (i = null == t ? void 0 : null === (e = t.data) || void 0 === e ? void 0 : e.data) && void 0 !== i ? i : {}
                    }, {
                        revalidateIfStale: !1,
                        revalidateOnFocus: !1,
                        revalidateOnReconnect: !1,
                        shouldRetryOnError: !1
                    }), {
                        percent: t = 0
                    } = i;
                    return (0, n.jsxs)("div", {
                        className: _("quiz-topview-cash-status-container"),
                        children: [(0, n.jsx)("div", {
                            className: _("quiz-topview-cash-status-pc"),
                            children: (0, n.jsxs)("svg", {
                                width: "1189",
                                height: "252",
                                viewBox: "0 0 1189 252",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0, n.jsx)("rect", {
                                    x: "5",
                                    y: "5",
                                    width: "1179",
                                    height: "242",
                                    rx: "121",
                                    fill: "#2B63D0"
                                }), (0, n.jsx)("rect", {
                                    x: "5",
                                    y: "5",
                                    width: "1179",
                                    height: "242",
                                    rx: "121",
                                    fill: "url(#paint0_linear_2795_3166)",
                                    fillOpacity: "0.5"
                                }), (0, n.jsx)("rect", {
                                    x: "5",
                                    y: "5",
                                    width: "1179",
                                    height: "242",
                                    rx: "121",
                                    stroke: "#D3D3D3",
                                    strokeWidth: "10"
                                }), (0, n.jsx)("rect", {
                                    x: "121",
                                    y: "172",
                                    width: "7",
                                    height: "33",
                                    rx: "3.5",
                                    fill: "#A0C0FF"
                                }), (0, n.jsx)("rect", {
                                    x: "591",
                                    y: "172",
                                    width: "7",
                                    height: "33",
                                    rx: "3.5",
                                    fill: "#A0C0FF"
                                }), (0, n.jsx)("rect", {
                                    x: "1061",
                                    y: "173",
                                    width: "7",
                                    height: "33",
                                    rx: "3.5",
                                    fill: "#A0C0FF"
                                }), (0, n.jsx)("mask", {
                                    id: "mask0_2795_3166",
                                    style: {
                                        maskType: "alpha"
                                    },
                                    maskUnits: "userSpaceOnUse",
                                    x: "73",
                                    y: "62",
                                    width: "1045",
                                    height: "124",
                                    children: (0, n.jsx)("rect", {
                                        x: "75.5",
                                        y: "64.5",
                                        width: "1040",
                                        height: "119",
                                        rx: "59.5",
                                        fill: "#D9D9D9",
                                        stroke: "white",
                                        strokeWidth: "5"
                                    })
                                }), (0, n.jsxs)("g", {
                                    mask: "url(#mask0_2795_3166)",
                                    children: [(0, n.jsx)("g", {
                                        filter: "url(#filter0_i_2795_3166)",
                                        children: (0, n.jsx)("rect", {
                                            x: "10",
                                            y: "19",
                                            width: "1182",
                                            height: "188",
                                            rx: "70",
                                            fill: "#0A1C6F"
                                        })
                                    }), (0, n.jsx)("rect", {
                                        className: _("transition-width"),
                                        x: "73",
                                        y: "62",
                                        width: 0 === t ? 0 : 60 + t / 100 * 926,
                                        height: "125",
                                        fill: "url(#paint1_linear_2795_3166)"
                                    }), (0, n.jsx)("rect", {
                                        x: "10",
                                        y: "19",
                                        width: "1182",
                                        height: "188",
                                        rx: "70",
                                        fill: "url(#paint2_linear_2795_3166)"
                                    }), (0, n.jsx)("rect", {
                                        x: "10",
                                        y: "19",
                                        width: "1182",
                                        height: "188",
                                        rx: "70",
                                        fill: "url(#paint3_linear_2795_3166)"
                                    }), 0 !== t && (0, n.jsx)("image", {
                                        href: "/30th/quiz/topview/pc/nexon_cash.png",
                                        className: _("transition-width"),
                                        width: "96",
                                        height: "125",
                                        x: 60 + t / 100 * 926 + 20,
                                        y: "62"
                                    }), (0, n.jsx)("rect", {
                                        x: "108",
                                        y: "74",
                                        width: "964",
                                        height: "29",
                                        rx: "14.5",
                                        fill: "white",
                                        fillOpacity: "0.33"
                                    })]
                                }), (0, n.jsx)("rect", {
                                    x: "70.5",
                                    y: "59.5",
                                    width: "1050",
                                    height: "129",
                                    rx: "64.5",
                                    stroke: "#A0C0FF",
                                    strokeWidth: "5"
                                }), (0, n.jsx)("path", {
                                    d: "M1043.19 231.579V229.317H1050.21V223.14H1043.19V220.878H1050.21V216.093H1043.19V213.831H1053.86V231.579H1043.19ZM1056.24 230.129V213.831H1066.92V230.129H1056.24ZM1063.26 227.896V216.064H1059.9V227.896H1063.26ZM1086.32 235.842V230.216H1073.65V227.954H1089.98V235.842H1086.32ZM1086.32 227.403V220.356H1082.96V223.169H1081.54V224.59H1080.15V225.982H1072.26V224.59H1070.84V223.169H1069.45V215.281H1070.84V213.889H1072.26V212.468H1080.15V213.889H1081.54V215.281H1082.96V218.094H1086.32V212.468H1089.98V227.403H1086.32ZM1077.88 223.72V222.328H1079.28V216.151H1077.88V214.73H1074.52V216.151H1073.1V222.328H1074.52V223.72H1077.88Z",
                                    fill: "#FFC700"
                                }), (0, n.jsx)("path", {
                                    d: "M574.523 231.579V213.831H578.177V231.579H574.523ZM581.883 231.579V229.317H588.901V223.14H581.883V213.831H592.555V216.093H585.537V220.878H592.555V231.579H581.883ZM611.962 235.842V230.216H599.289V227.954H615.616V235.842H611.962ZM611.962 227.403V220.356H608.598V223.169H607.177V224.59H605.785V225.982H597.897V224.59H596.476V223.169H595.084V215.281H596.476V213.889H597.897V212.468H605.785V213.889H607.177V215.281H608.598V218.094H611.962V212.468H615.616V227.403H611.962ZM603.523 223.72V222.328H604.915V216.151H603.523V214.73H600.159V216.151H598.738V222.328H600.159V223.72H603.523Z",
                                    fill: "#FFC700"
                                }), (0, n.jsx)("path", {
                                    d: "M119.189 230.129V213.831H129.861V230.129H119.189ZM126.207 227.896V216.064H122.843V227.896H126.207Z",
                                    fill: "white"
                                }), (0, n.jsx)("rect", {
                                    x: "510",
                                    y: "15",
                                    width: "159",
                                    height: "35",
                                    rx: "17.5",
                                    fill: "#113781"
                                }), (0, n.jsx)("path", {
                                    d: "M534.439 41.254V34.998H537.337V39.46H547.388V41.254H534.439ZM543.363 35.665V22.716H546.261V28.305H549.619V30.099H546.261V35.665H543.363ZM531.081 34.561V32.767H532.208V31.64H533.312V30.536H534.439V29.409H535.543V24.51H531.081V22.716H542.926V24.51H538.464V29.409H539.568V30.536H540.695V31.64H541.799V32.767H542.926V34.561H540.005V33.434H538.901V32.33H537.774V31.203H536.233V32.33H535.106V33.434H534.002V34.561H531.081ZM552.83 40.104V39H551.703V37.873H550.599V24.947H551.703V23.82H552.83V22.716H559.086V23.82H560.19V24.947H561.317V28.282H563.985V22.716H566.883V40.104H563.985V34.538H561.317V37.873H560.19V39H559.086V40.104H552.83ZM557.292 38.333V37.206H558.396V25.614H557.292V24.487H554.624V25.614H553.497V37.206H554.624V38.333H557.292ZM563.985 32.744V30.076H561.317V32.744H563.985Z",
                                    fill: "white"
                                }), (0, n.jsx)("path", {
                                    d: "M590.403 41.254V36.792H580.375V34.998H593.301V41.254H590.403ZM585.941 34.561V28.972H581.479V27.178H585.941V22.716H588.839V34.561H585.941ZM590.403 34.561V22.716H593.301V34.561H590.403ZM575.913 33.434V22.716H578.811V31.64H585.504V33.434H575.913ZM595.385 41.254V34.998H598.306V39.46H609.461V41.254H595.385ZM595.385 34.561V32.767H609.461V34.561H595.385ZM595.385 32.33V30.536H596.512V29.409H597.616V28.305H598.743V27.178H599.847V26.074H600.974V22.716H603.872V26.074H604.999V27.178H606.103V28.305H607.23V29.409H608.334V30.536H609.461V32.33H606.54V31.203H605.436V30.099H604.309V28.972H603.205V27.868H601.641V28.972H600.537V30.099H599.41V31.203H598.306V32.33H595.385ZM618.252 40.104V32.307H611.559V30.513H618.252V24.487H611.559V22.716H621.173V40.104H618.252ZM622.714 40.104V22.716H625.635V29.409H627.176V22.716H630.097V40.104H627.176V31.18H625.635V40.104H622.714ZM632.222 40.104V38.333H633.349V37.206H634.453V36.102H635.58V34.975H636.684V22.716H639.582V34.975H640.709V36.102H641.813V37.206H642.94V38.333H644.044V40.104H641.146V39H640.042V37.873H638.915V36.769H637.351V37.873H636.247V39H635.12V40.104H632.222ZM644.504 40.104V22.716H647.402V40.104H644.504Z",
                                    fill: "#FFC000"
                                }), (0, n.jsxs)("defs", {
                                    children: [(0, n.jsxs)("filter", {
                                        id: "filter0_i_2795_3166",
                                        x: "10",
                                        y: "19",
                                        width: "1182",
                                        height: "188",
                                        filterUnits: "userSpaceOnUse",
                                        colorInterpolationFilters: "sRGB",
                                        children: [(0, n.jsx)("feFlood", {
                                            floodOpacity: "0",
                                            result: "BackgroundImageFix"
                                        }), (0, n.jsx)("feBlend", {
                                            mode: "normal",
                                            in: "SourceGraphic",
                                            in2: "BackgroundImageFix",
                                            result: "shape"
                                        }), (0, n.jsx)("feColorMatrix", { in: "SourceAlpha",
                                            type: "matrix",
                                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                            result: "hardAlpha"
                                        }), (0, n.jsx)("feOffset", {}), (0, n.jsx)("feGaussianBlur", {
                                            stdDeviation: "15"
                                        }), (0, n.jsx)("feComposite", {
                                            in2: "hardAlpha",
                                            operator: "arithmetic",
                                            k2: "-1",
                                            k3: "1"
                                        }), (0, n.jsx)("feColorMatrix", {
                                            type: "matrix",
                                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.62 0"
                                        }), (0, n.jsx)("feBlend", {
                                            mode: "normal",
                                            in2: "shape",
                                            result: "effect1_innerShadow_2795_3166"
                                        })]
                                    }), (0, n.jsxs)("linearGradient", {
                                        id: "paint0_linear_2795_3166",
                                        x1: "505",
                                        y1: "10",
                                        x2: "505",
                                        y2: "242",
                                        gradientUnits: "userSpaceOnUse",
                                        children: [(0, n.jsx)("stop", {
                                            offset: "0.435047",
                                            stopOpacity: "0"
                                        }), (0, n.jsx)("stop", {
                                            offset: "1"
                                        })]
                                    }), (0, n.jsxs)("linearGradient", {
                                        id: "paint1_linear_2795_3166",
                                        x1: "401",
                                        y1: "62",
                                        x2: "401",
                                        y2: "187",
                                        gradientUnits: "userSpaceOnUse",
                                        children: [(0, n.jsx)("stop", {
                                            stopColor: "#F2E4A1"
                                        }), (0, n.jsx)("stop", {
                                            offset: "0.145",
                                            stopColor: "#E8C525"
                                        }), (0, n.jsx)("stop", {
                                            offset: "0.351264",
                                            stopColor: "#EABF29"
                                        }), (0, n.jsx)("stop", {
                                            offset: "0.603761",
                                            stopColor: "#EAA834"
                                        }), (0, n.jsx)("stop", {
                                            offset: "0.801875",
                                            stopColor: "#E89A2B"
                                        }), (0, n.jsx)("stop", {
                                            offset: "1",
                                            stopColor: "#EA9C24"
                                        })]
                                    }), (0, n.jsxs)("linearGradient", {
                                        id: "paint2_linear_2795_3166",
                                        x1: "212",
                                        y1: "186.5",
                                        x2: "212",
                                        y2: "64.5",
                                        gradientUnits: "userSpaceOnUse",
                                        children: [(0, n.jsx)("stop", {
                                            stopOpacity: "0.22"
                                        }), (0, n.jsx)("stop", {
                                            offset: "0.43",
                                            stopOpacity: "0"
                                        })]
                                    }), (0, n.jsxs)("linearGradient", {
                                        id: "paint3_linear_2795_3166",
                                        x1: "212",
                                        y1: "186.5",
                                        x2: "212",
                                        y2: "64.5",
                                        gradientUnits: "userSpaceOnUse",
                                        children: [(0, n.jsx)("stop", {
                                            offset: "0.585",
                                            stopColor: "white",
                                            stopOpacity: "0"
                                        }), (0, n.jsx)("stop", {
                                            offset: "1",
                                            stopColor: "white",
                                            stopOpacity: "0.22"
                                        })]
                                    })]
                                })]
                            })
                        }), (0, n.jsxs)("div", {
                            className: _("quiz-topview-cash-status-mo"),
                            children: [(0, n.jsxs)("svg", {
                                width: "94",
                                height: "24",
                                viewBox: "0 0 94 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0, n.jsx)("rect", {
                                    x: "0.622314",
                                    width: "93",
                                    height: "24",
                                    rx: "12",
                                    fill: "#113781"
                                }), (0, n.jsx)("path", {
                                    d: "M13.3243 17.372V13.564H15.0883V16.28H21.2063V17.372H13.3243ZM18.7563 13.97V6.088H20.5203V9.49H22.5643V10.582H20.5203V13.97H18.7563ZM11.2803 13.298V12.206H11.9663V11.52H12.6383V10.848H13.3243V10.162H13.9963V7.18H11.2803V6.088H18.4903V7.18H15.7743V10.162H16.4463V10.848H17.1323V11.52H17.8043V12.206H18.4903V13.298H16.7123V12.612H16.0403V11.94H15.3543V11.254H14.4163V11.94H13.7303V12.612H13.0583V13.298H11.2803ZM24.5188 16.672V16H23.8328V15.314H23.1608V7.446H23.8328V6.76H24.5188V6.088H28.3268V6.76H28.9988V7.446H29.6848V9.476H31.3088V6.088H33.0728V16.672H31.3088V13.284H29.6848V15.314H28.9988V16H28.3268V16.672H24.5188ZM27.2348 15.594V14.908H27.9068V7.852H27.2348V7.166H25.6108V7.852H24.9248V14.908H25.6108V15.594H27.2348ZM31.3088 12.192V10.568H29.6848V12.192H31.3088Z",
                                    fill: "white"
                                }), (0, n.jsx)("path", {
                                    d: "M47.3894 17.372V14.656H41.2854V13.564H49.1534V17.372H47.3894ZM44.6734 13.298V9.896H41.9574V8.804H44.6734V6.088H46.4374V13.298H44.6734ZM47.3894 13.298V6.088H49.1534V13.298H47.3894ZM38.5694 12.612V6.088H40.3334V11.52H44.4074V12.612H38.5694ZM50.4219 17.372V13.564H52.1999V16.28H58.9899V17.372H50.4219ZM50.4219 13.298V12.206H58.9899V13.298H50.4219ZM50.4219 11.94V10.848H51.1079V10.162H51.7799V9.49H52.4659V8.804H53.1379V8.132H53.8239V6.088H55.5879V8.132H56.2739V8.804H56.9459V9.49H57.6319V10.162H58.3039V10.848H58.9899V11.94H57.2119V11.254H56.5399V10.582H55.8539V9.896H55.1819V9.224H54.2299V9.896H53.5579V10.582H52.8719V11.254H52.1999V11.94H50.4219ZM64.3406 16.672V11.926H60.2666V10.834H64.3406V7.166H60.2666V6.088H66.1186V16.672H64.3406ZM67.0566 16.672V6.088H68.8346V10.162H69.7726V6.088H71.5506V16.672H69.7726V11.24H68.8346V16.672H67.0566ZM72.8441 16.672V15.594H73.5301V14.908H74.2021V14.236H74.8881V13.55H75.5601V6.088H77.3241V13.55H78.0101V14.236H78.6821V14.908H79.3681V15.594H80.0401V16.672H78.2761V16H77.6041V15.314H76.9181V14.642H75.9661V15.314H75.2941V16H74.6081V16.672H72.8441ZM80.3201 16.672V6.088H82.0841V16.672H80.3201Z",
                                    fill: "#FFC000"
                                })]
                            }), (0, n.jsxs)("svg", {
                                width: "344",
                                height: "72",
                                viewBox: "0 0 344 72",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0, n.jsx)("rect", {
                                    x: "1",
                                    y: "1",
                                    width: "342",
                                    height: "69.4765",
                                    rx: "34.7382",
                                    fill: "#2B63D0"
                                }), (0, n.jsx)("rect", {
                                    x: "1",
                                    y: "1",
                                    width: "342",
                                    height: "69.4765",
                                    rx: "34.7382",
                                    fill: "url(#paint0_linear_2508_11755)",
                                    fillOpacity: "0.5"
                                }), (0, n.jsx)("rect", {
                                    x: "1",
                                    y: "1",
                                    width: "342",
                                    height: "69.4765",
                                    rx: "34.7382",
                                    stroke: "#D3D3D3",
                                    strokeWidth: "2"
                                }), (0, n.jsx)("rect", {
                                    x: "34",
                                    y: "44",
                                    width: "2.03593",
                                    height: "9.59795",
                                    rx: "1.01796",
                                    fill: "#A0C0FF"
                                }), (0, n.jsx)("rect", {
                                    x: "171.262",
                                    y: "44",
                                    width: "2.03593",
                                    height: "9.59795",
                                    rx: "1.01796",
                                    fill: "#A0C0FF"
                                }), (0, n.jsx)("rect", {
                                    x: "308.262",
                                    y: "44",
                                    width: "2.03593",
                                    height: "9.59795",
                                    rx: "1.01796",
                                    fill: "#A0C0FF"
                                }), (0, n.jsx)("mask", {
                                    id: "mask0_2508_11755",
                                    style: {
                                        maskType: "alpha"
                                    },
                                    maskUnits: "userSpaceOnUse",
                                    x: "20",
                                    y: "12",
                                    width: "305",
                                    height: "37",
                                    children: (0, n.jsx)("rect", {
                                        x: "22.8232",
                                        y: "14.624",
                                        width: "298.935",
                                        height: "31.065",
                                        rx: "15.5325",
                                        fill: "#D9D9D9",
                                        stroke: "white",
                                        strokeWidth: "5"
                                    })
                                }), (0, n.jsxs)("g", {
                                    mask: "url(#mask0_2508_11755)",
                                    children: [(0, n.jsx)("g", {
                                        filter: "url(#filter0_i_2508_11755)",
                                        children: (0, n.jsx)("rect", {
                                            x: "1.99988",
                                            y: "6",
                                            width: "1182",
                                            height: "188",
                                            rx: "70",
                                            fill: "#0A1C6F"
                                        })
                                    }), (0, n.jsx)("rect", {
                                        className: _("transition-width"),
                                        width: 0 === t ? 0 : 17 + t / 100 * 270,
                                        x: "20",
                                        y: "12.124",
                                        height: "36.3559",
                                        fill: "url(#paint1_linear_2508_11755)"
                                    }), (0, n.jsx)("rect", {
                                        x: "1.99988",
                                        y: "-0.382385",
                                        width: "343.781",
                                        height: "54.6792",
                                        rx: "27.3396",
                                        fill: "url(#paint2_linear_2508_11755)"
                                    }), (0, n.jsx)("rect", {
                                        x: "1.99988",
                                        y: "-0.382385",
                                        width: "343.781",
                                        height: "54.6792",
                                        rx: "27.3396",
                                        fill: "url(#paint3_linear_2508_11755)"
                                    }), 0 !== t && (0, n.jsx)("image", {
                                        href: "/30th/quiz/topview/pc/nexon_cash.png",
                                        className: _("transition-width"),
                                        width: "28",
                                        height: "36",
                                        x: 22 + t / 100 * 270,
                                        y: "12"
                                    }), (0, n.jsx)("rect", {
                                        x: "30.5029",
                                        y: "15.6142",
                                        width: "280.376",
                                        height: "8.43456",
                                        rx: "4.21728",
                                        fill: "white",
                                        fillOpacity: "0.33"
                                    })]
                                }), (0, n.jsx)("rect", {
                                    x: "19.8232",
                                    y: "11.624",
                                    width: "304.935",
                                    height: "37.065",
                                    rx: "18.5325",
                                    stroke: "#A0C0FF"
                                }), (0, n.jsx)("path", {
                                    d: "M298.574 65.314V64.222H301.962V61.24H298.574V60.148H301.962V57.838H298.574V56.746H303.726V65.314H298.574ZM304.877 64.614V56.746H310.029V64.614H304.877ZM308.265 63.536V57.824H306.641V63.536H308.265ZM319.397 67.372V64.656H313.279V63.564H321.161V67.372H319.397ZM319.397 63.298V59.896H317.773V61.254H317.087V61.94H316.415V62.612H312.607V61.94H311.921V61.254H311.249V57.446H311.921V56.774H312.607V56.088H316.415V56.774H317.087V57.446H317.773V58.804H319.397V56.088H321.161V63.298H319.397ZM315.323 61.52V60.848H315.995V57.866H315.323V57.18H313.699V57.866H313.013V60.848H313.699V61.52H315.323Z",
                                    fill: "#FFC700"
                                }), (0, n.jsx)("path", {
                                    d: "M162.218 65.314V56.746H163.982V65.314H162.218ZM165.771 65.314V64.222H169.159V61.24H165.771V56.746H170.923V57.838H167.535V60.148H170.923V65.314H165.771ZM180.292 67.372V64.656H174.174V63.564H182.056V67.372H180.292ZM180.292 63.298V59.896H178.668V61.254H177.982V61.94H177.31V62.612H173.502V61.94H172.816V61.254H172.144V57.446H172.816V56.774H173.502V56.088H177.31V56.774H177.982V57.446H178.668V58.804H180.292V56.088H182.056V63.298H180.292ZM176.218 61.52V60.848H176.89V57.866H176.218V57.18H174.594V57.866H173.908V60.848H174.594V61.52H176.218Z",
                                    fill: "#FFC700"
                                }), (0, n.jsx)("path", {
                                    d: "M33.574 64.614V56.746H38.726V64.614H33.574ZM36.962 63.536V57.824H35.338V63.536H36.962Z",
                                    fill: "white"
                                }), (0, n.jsxs)("defs", {
                                    children: [(0, n.jsxs)("filter", {
                                        id: "filter0_i_2508_11755",
                                        x: "1.99988",
                                        y: "6",
                                        width: "1182",
                                        height: "188",
                                        filterUnits: "userSpaceOnUse",
                                        colorInterpolationFilters: "sRGB",
                                        children: [(0, n.jsx)("feFlood", {
                                            floodOpacity: "0",
                                            result: "BackgroundImageFix"
                                        }), (0, n.jsx)("feBlend", {
                                            mode: "normal",
                                            in: "SourceGraphic",
                                            in2: "BackgroundImageFix",
                                            result: "shape"
                                        }), (0, n.jsx)("feColorMatrix", { in: "SourceAlpha",
                                            type: "matrix",
                                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                            result: "hardAlpha"
                                        }), (0, n.jsx)("feOffset", {}), (0, n.jsx)("feGaussianBlur", {
                                            stdDeviation: "15"
                                        }), (0, n.jsx)("feComposite", {
                                            in2: "hardAlpha",
                                            operator: "arithmetic",
                                            k2: "-1",
                                            k3: "1"
                                        }), (0, n.jsx)("feColorMatrix", {
                                            type: "matrix",
                                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.62 0"
                                        }), (0, n.jsx)("feBlend", {
                                            mode: "normal",
                                            in2: "shape",
                                            result: "effect1_innerShadow_2508_11755"
                                        })]
                                    }), (0, n.jsxs)("linearGradient", {
                                        id: "paint0_linear_2508_11755",
                                        x1: "145.969",
                                        y1: "2",
                                        x2: "145.969",
                                        y2: "69.4765",
                                        gradientUnits: "userSpaceOnUse",
                                        children: [(0, n.jsx)("stop", {
                                            offset: "0.435047",
                                            stopOpacity: "0"
                                        }), (0, n.jsx)("stop", {
                                            offset: "1"
                                        })]
                                    }), (0, n.jsxs)("linearGradient", {
                                        id: "paint1_linear_2508_11755",
                                        x1: "115.721",
                                        y1: "12.124",
                                        x2: "115.721",
                                        y2: "48.4799",
                                        gradientUnits: "userSpaceOnUse",
                                        children: [(0, n.jsx)("stop", {
                                            stopColor: "#F2E4A1"
                                        }), (0, n.jsx)("stop", {
                                            offset: "0.145",
                                            stopColor: "#E8C525"
                                        }), (0, n.jsx)("stop", {
                                            offset: "0.351264",
                                            stopColor: "#EABF29"
                                        }), (0, n.jsx)("stop", {
                                            offset: "0.603761",
                                            stopColor: "#EAA834"
                                        }), (0, n.jsx)("stop", {
                                            offset: "0.801875",
                                            stopColor: "#E89A2B"
                                        }), (0, n.jsx)("stop", {
                                            offset: "1",
                                            stopColor: "#EA9C24"
                                        })]
                                    }), (0, n.jsxs)("linearGradient", {
                                        id: "paint2_linear_2508_11755",
                                        x1: "60.7509",
                                        y1: "48.3345",
                                        x2: "60.7509",
                                        y2: "12.8511",
                                        gradientUnits: "userSpaceOnUse",
                                        children: [(0, n.jsx)("stop", {
                                            stopOpacity: "0.22"
                                        }), (0, n.jsx)("stop", {
                                            offset: "0.43",
                                            stopOpacity: "0"
                                        })]
                                    }), (0, n.jsxs)("linearGradient", {
                                        id: "paint3_linear_2508_11755",
                                        x1: "60.7509",
                                        y1: "48.3345",
                                        x2: "60.7509",
                                        y2: "12.8511",
                                        gradientUnits: "userSpaceOnUse",
                                        children: [(0, n.jsx)("stop", {
                                            offset: "0.585",
                                            stopColor: "white",
                                            stopOpacity: "0"
                                        }), (0, n.jsx)("stop", {
                                            offset: "1",
                                            stopColor: "white",
                                            stopOpacity: "0.22"
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                p = t(6824),
                H = t.n(p);
            let V = l().bind(H()),
                m = [{
                    id: "topview",
                    text: "참여 방법"
                }, {
                    id: "first-event",
                    text: "추억의 퀴즈 퀴즈!"
                }, {
                    id: "second-event",
                    text: "넥슨캐시 30만원 당첨!"
                }];

            function f(e) {
                var i;
                let [t, a] = (0, s.useState)(null !== (i = e.currentTab) && void 0 !== i ? i : 0);
                return (0, s.useEffect)(() => {
                    a(e.currentTab)
                }, [e.currentTab]), (0, n.jsx)("div", {
                    className: V("container"),
                    children: (0, n.jsxs)("div", {
                        className: V("floating-menu"),
                        children: [m.map((e, i) => (0, n.jsx)("a", {
                            className: V("anchor", i === t && "on"),
                            href: "#".concat(e.id),
                            children: e.text
                        }, e.id)), (0, n.jsx)(S, {})]
                    })
                })
            }
            var z = t(8174),
                j = t.n(z),
                w = t(5193),
                g = t.n(w),
                q = t(9745);
            let y = l().bind(j()),
                N = "https://enter.nexon.com/30th/nexoncash";

            function S() {
                let [e, i] = (0, s.useState)(!1), t = [{
                    name: "url",
                    onClick: () => {
                        (0, q.D)("Main", {
                            name: "URL",
                            pagecode: "65478"
                        }), g()(N), window.alert("URL이 클립보드에 복사되었습니다.")
                    }
                }, {
                    name: "meta",
                    onClick: () => {
                        (0, q.D)("Main", {
                            name: "F_URL",
                            pagecode: "65478"
                        }), window.open("https://www.facebook.com/sharer.php?u=".concat(N), "_blank")
                    }
                }, {
                    name: "x",
                    onClick: () => {
                        (0, q.D)("Main", {
                            name: "X_URL",
                            pagecode: "65478"
                        }), window.open("https://twitter.com/intent/tweet?url=".concat(N), "_blank")
                    }
                }];
                return (0, n.jsxs)("div", {
                    onMouseEnter: () => i(!0),
                    onMouseLeave: () => i(!1),
                    className: y("container"),
                    children: [(0, n.jsx)("button", {
                        className: y("sharing-button", e && "active"),
                        children: "공유하기"
                    }), e && (0, n.jsx)("ul", {
                        className: y("sns-list"),
                        children: t.map(e => (0, n.jsx)("li", {
                            className: y("icon", "icon-".concat(e.name)),
                            children: (0, n.jsx)("a", {
                                className: y("link"),
                                onClick: e.onClick
                            })
                        }, e.name))
                    })]
                })
            }
            var b = t(3708),
                B = t(5502),
                E = t(218),
                k = t.n(E),
                M = t(9388),
                C = t.n(M),
                Q = t(3665),
                Z = t.n(Q),
                O = t(1108);
            k().extend(C());
            let F = l().bind(Z()),
                A = (0, a.default)(() => Promise.all([t.e(198), t.e(836), t.e(731)]).then(t.bind(t, 7731)), {
                    loadableGenerated: {
                        webpack: () => [7731]
                    },
                    ssr: !1
                });

            function D(e, i) {
                return i && e ? [{
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
                }][e] : {
                    icon: "",
                    accountName: ""
                }
            }

            function I() {
                var e, i;
                (0, r.useRouter)(), (0, r.usePathname)();
                let {
                    userProfile: t,
                    pointData: a
                } = (0, s.useContext)(c.EventContext), o = (0, s.useRef)(null), l = (0, s.useRef)(null), [u, v] = (0, s.useState)(0), d = null == t ? void 0 : null === (e = t.local_profile_props) || void 0 === e ? void 0 : e.tpa_code, _ = null == t ? void 0 : null === (i = t.local_profile_props) || void 0 === i ? void 0 : i.login_id;
                return (0, s.useEffect)(() => {
                    window.addEventListener("scroll", function() {
                        if (!o.current || !l.current) return;
                        let e = l.current.getBoundingClientRect();
                        return window.innerHeight - e.y > 700 ? v(2) : o.current.getBoundingClientRect().y < 100 ? v(1) : v(0)
                    })
                }, []), (0, n.jsxs)("div", {
                    className: F("container"),
                    children: [(0, n.jsx)(f, {
                        currentTab: u
                    }), (0, n.jsxs)("div", {
                        id: "quiz-container",
                        className: F("quiz-container"),
                        children: [(0, n.jsxs)("div", {
                            className: F("quiz-background"),
                            children: [(0, n.jsx)(B.ZW, {
                                id: "topview",
                                children: (0, n.jsxs)("section", {
                                    className: F("quiz-topview"),
                                    children: [(0, n.jsx)("div", {
                                        className: F("sharing-mobile"),
                                        children: (0, n.jsx)(S, {})
                                    }), (0, n.jsx)("div", {
                                        className: F("quiz-topview-title")
                                    }), (0, n.jsx)("div", {
                                        className: F("quiz-topview-subtitle")
                                    }), (0, n.jsxs)("ul", {
                                        className: F("quiz-topview-subtitle-notice"),
                                        children: [(0, n.jsx)("li", {
                                            children: "*넥슨캐시 총 30억 이벤트 퀴즈 풀이는 누구나 참여할 수 있습니다."
                                        }), (0, n.jsx)("li", {
                                            children: "*단, 넥슨캐시 보상은 넥슨ID 명의 당 1회만 지급됩니다."
                                        }), (0, n.jsx)("li", {
                                            children: "*이벤트에 대한 자세한 내용은 유의사항을 확인해주시기 바랍니다."
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: F("quiz-topview-cash-container"),
                                        children: [(0, n.jsx)("div", {
                                            className: F("quiz-topview-left-character")
                                        }), (0, n.jsx)("div", {
                                            className: F("quiz-o-icon")
                                        }), (0, n.jsx)("div", {
                                            className: F("quiz-topview-right-character")
                                        }), (0, n.jsx)("div", {
                                            className: F("quiz-x-icon")
                                        }), (0, n.jsx)(x, {}), (0, n.jsxs)("div", {
                                            className: F("quiz-topview-cash-information"),
                                            children: ["* 잔여 넥슨캐시는 실시간 지급 금액이 반영되지 않으며,", " ", (0, n.jsx)("strong", {
                                                className: F("quiz-topview-how-to-play-strong"),
                                                children: "매일 00시에 갱신"
                                            }), "됩니다."]
                                        })]
                                    }), (0, n.jsxs)("ul", {
                                        className: F("quiz-topview-how-to-play-list"),
                                        children: [(0, n.jsx)("li", {
                                            className: F("quiz-topview-how-to-play-list-item", "quiz-topview-how-to-play-step-one"),
                                            children: (0, n.jsxs)("div", {
                                                className: F("quiz-topview-how-to-play-description"),
                                                children: ["퀴즈퀴즈 ", (0, n.jsx)("strong", {
                                                    className: F("quiz-topview-how-to-play-strong"),
                                                    children: "START 버튼"
                                                }), "을 클릭한다.", (0, n.jsx)("div", {
                                                    className: F("quiz-topview-how-to-play-sub"),
                                                    children: "(본인확인이 완료된 넥슨ID로 로그인 하시면 이벤트 보상을 획득하실 수 있습니다.)"
                                                })]
                                            })
                                        }), (0, n.jsxs)("li", {
                                            className: F("quiz-topview-how-to-play-list-item", "quiz-topview-how-to-play-step-two"),
                                            children: [(0, n.jsx)("div", {
                                                className: F("quiz-topview-how-to-play-description"),
                                                children: "정해진 시간 안에 퀴즈 문제를 푼다."
                                            }), (0, n.jsx)("div", {
                                                className: F("quiz-topview-how-to-play-sub"),
                                                children: "(한 문제 당 18초 제공됩니다.)"
                                            })]
                                        }), (0, n.jsxs)("li", {
                                            className: F("quiz-topview-how-to-play-list-item", "quiz-topview-how-to-play-step-three"),
                                            children: [(0, n.jsxs)("div", {
                                                className: F("quiz-topview-how-to-play-description"),
                                                children: ["3문제의 정답을 모두 맞힐 경우,", (0, n.jsx)("br", {}), "참여한 넥슨ID로 ", (0, n.jsx)("strong", {
                                                    className: F("quiz-topview-how-to-play-strong"),
                                                    children: "넥슨캐시 3천원"
                                                }), " ", "지급!"]
                                            }), (0, n.jsx)("div", {
                                                className: F("quiz-topview-how-to-play-sub"),
                                                children: "(일일 지급 금액 소진 시 보상 지급이 마감됩니다.)"
                                            })]
                                        }), (0, n.jsxs)("li", {
                                            className: F("quiz-topview-how-to-play-list-item", "quiz-topview-how-to-play-step-four"),
                                            children: [(0, n.jsxs)("div", {
                                                className: F("quiz-topview-how-to-play-description"),
                                                children: ["매달 말일,", " ", (0, n.jsx)("strong", {
                                                    className: F("quiz-topview-how-to-play-strong"),
                                                    children: "'넥슨캐시 30만원 당첨' "
                                                }), (0, n.jsx)("span", {
                                                    className: F("pc-block"),
                                                    children: "이벤트 응모하기!"
                                                })]
                                            }), (0, n.jsxs)("div", {
                                                className: F("quiz-topview-how-to-play-sub"),
                                                children: [(0, n.jsx)("span", {
                                                    className: F("pc-block"),
                                                    children: "응모 기간: "
                                                }), (0, n.jsxs)("span", {
                                                    className: F("pc-block", "quiz-topview-how-to-play-description"),
                                                    children: ["4/30(화), 5/31(금), 6/30(일)", (0, n.jsx)("br", {}), "오전 0시 ~ 오후 11시 59분"]
                                                })]
                                            })]
                                        })]
                                    })]
                                })
                            }), (0, n.jsx)(B.ZW, {
                                id: "first-event",
                                children: (0, n.jsxs)("section", {
                                    ref: o,
                                    className: F("quiz-first-event"),
                                    children: [(0, n.jsx)("div", {
                                        className: F("quiz-first-event-title")
                                    }), (0, n.jsx)("div", {
                                        className: F("quiz-first-event-subtitle")
                                    }), (0, n.jsxs)("div", {
                                        className: F("login-container", t && "logged-in"),
                                        children: [t && (0, n.jsx)("div", {
                                            className: F("login-header"),
                                            children: (0, n.jsx)("div", {
                                                className: F("nexon-id")
                                            })
                                        }), !t && (0, n.jsxs)("div", {
                                            className: F("not-login-container"),
                                            children: ["넥슨캐시 획득을 위해", (0, n.jsx)("span", {
                                                style: {
                                                    color: "#fff"
                                                },
                                                children: "\xa0로그인\xa0"
                                            }), " 후 이벤트에 참여해주세요."]
                                        }), t && (0, n.jsxs)("div", {
                                            className: F("auth-information"),
                                            children: [0 !== d && (0, n.jsx)("div", {
                                                className: F("auth-information-icon", D(d, t).icon)
                                            }), 0 === d && (0, n.jsx)(n.Fragment, {
                                                children: _
                                            }), (0, n.jsx)("span", {
                                                className: F("auth-information-name"),
                                                children: D(d, t).accountName
                                            })]
                                        }), (0, n.jsxs)("div", {
                                            className: F("login-buttons"),
                                            children: [!t && (0, n.jsx)(q.Z, {
                                                "data-a2s-web-obj": "Quiz",
                                                "data-a2s-option-name": "Login",
                                                "data-a2s-option-pagecode": "65478",
                                                children: (0, n.jsx)("button", {
                                                    className: F("login-button"),
                                                    onClick: () => {
                                                        var e, i, n;
                                                        (0, O.P)().loginButton(), t || null === (n = window) || void 0 === n || null === (i = n.inface) || void 0 === i || null === (e = i.auth) || void 0 === e || e.gotoSignIn()
                                                    },
                                                    children: (0, n.jsx)("div", {
                                                        className: F("login-button-image")
                                                    })
                                                })
                                            }), t && (0, n.jsx)("button", {
                                                className: F("logout-button"),
                                                onClick: () => {
                                                    var e, i, n;
                                                    t && (null === (n = window) || void 0 === n || null === (i = n.inface) || void 0 === i || null === (e = i.auth) || void 0 === e || e.gotoSignOut())
                                                },
                                                children: (0, n.jsx)("div", {
                                                    className: F("logout-button-image")
                                                })
                                            }), t && (0, n.jsx)(q.Z, {
                                                "data-a2s-web-obj": "Quiz",
                                                "data-a2s-option-name": "History",
                                                "data-a2s-option-pagecode": "65478",
                                                children: (0, n.jsx)("button", {
                                                    className: F("cash-history-button"),
                                                    onClick: async () => {
                                                        if (t) {
                                                            var e;
                                                            let i = await (0, h.a)().getCashHistory();
                                                            return (0, b.F6)({
                                                                cashHistory: null == i ? void 0 : null === (e = i.data) || void 0 === e ? void 0 : e.data
                                                            })
                                                        }
                                                    },
                                                    children: (0, n.jsx)("div", {
                                                        className: F("cash-history-button-image")
                                                    })
                                                })
                                            })]
                                        })]
                                    }), (0, n.jsxs)("ul", {
                                        className: F("quiz-first-event-notice-list"),
                                        children: [(0, n.jsx)("li", {
                                            className: F("quiz-first-event-notice-list-item"),
                                            children: "퀴즈 풀이는 누구나 참여할 수 있지만, 이벤트 보상은 본인확인이 완료된 넥슨ID로만 획득할 수 있습니다."
                                        }), (0, n.jsx)("li", {
                                            className: F("quiz-first-event-notice-list-item"),
                                            children: "퀴즈 3문제를 모두 맞힐 경우, 이벤트 기간 동안 명의 당 1회에 한해 참여한 넥슨ID로 넥슨캐시 3천원이 즉시 지급됩니다."
                                        }), (0, n.jsx)("li", {
                                            className: F("quiz-first-event-notice-list-item"),
                                            children: "퀴즈 시작 시 노출되는 추가 인증(reCAPTCHA)에 성공하고, 이벤트에 참여해야 보상을 획득할 수 있습니다."
                                        }), (0, n.jsxs)("li", {
                                            className: F("quiz-first-event-notice-list-item"),
                                            children: ["일일 넥슨캐시 지급 금액이 모두 소진될 경우, 당일 넥슨캐시 3천원 지급이 마감됩니다.", (0, n.jsx)("br", {}), "(마감 시에도 참여 넥슨ID로 퀴즈 풀이는 진행할 수 있습니다.)"]
                                        }), (0, n.jsx)("li", {
                                            className: F("quiz-first-event-notice-list-item"),
                                            children: "매일 오전 0시에 일일 넥슨캐시 지급 금액이 갱신됩니다."
                                        }), (0, n.jsx)("li", {
                                            className: F("quiz-first-event-notice-list-item"),
                                            children: "퀴즈 풀이 도중 페이지를 벗어날 경우, 정상적으로 참여되지 않을 수 있습니다."
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: F("quiz-first-event-canvas-container"),
                                        children: [(0, n.jsx)(A, {
                                            className: F("quiz-first-event-canvas-frame")
                                        }), (0, n.jsx)("div", {
                                            className: F("quiz-first-event-canvas-background")
                                        })]
                                    })]
                                })
                            })]
                        }), (0, n.jsx)("section", {
                            ref: l,
                            className: F("quiz-second-event"),
                            children: (0, n.jsxs)("div", {
                                className: F("quiz-second-event-background"),
                                children: [(0, n.jsx)(B.ZW, {
                                    id: "second-event",
                                    children: (0, n.jsx)("div", {
                                        className: F("quiz-second-event-icon-event")
                                    })
                                }), (0, n.jsx)("div", {
                                    className: F("quiz-second-event-title")
                                }), (0, n.jsxs)("div", {
                                    className: F("quiz-second-event-buttons"),
                                    children: [(0, n.jsx)("button", {
                                        onClick: async () => {
                                            var e, i, s, a, o, l, r, c, u, v, d, _, x;
                                            if ((0, q.D)("Cash", {
                                                    name: "Enter_The_Event",
                                                    pagecode: "65478"
                                                }), (0, O.P)().event2ApplyBigCashButton(), k()().isSameOrAfter("2024-07-01 00:00:00")) return (0, b.OM)({
                                                content: (0, n.jsx)("div", {
                                                    children: "넥슨캐시 30만원 당첨 이벤트 기간이 종료되었습니다."
                                                })
                                            });
                                            let p = k()(k()().format("YYYY-MM-DD"));
                                            if (!p.isSame("2024-04-30") && !p.isSame("2024-05-31") && !p.isSame("2024-06-30")) return (0, b.OM)({
                                                content: (0, n.jsxs)("div", {
                                                    children: ["지금은 응모 기간이 아닙니다.", (0, n.jsx)("br", {}), "응모 기간에 다시 참여해 주세요!", (0, n.jsx)("br", {}), (0, n.jsx)("br", {}), "응모 기간: 4/30(화), 5/31(금), 6/30(일)", (0, n.jsx)("br", {}), " 오전 0시 ~ 오후 11시 59분"]
                                                })
                                            });
                                            if (!t) return (0, b.OM)({
                                                content: (0, n.jsx)("div", {
                                                    children: "본인확인이 완료된 넥슨ID 로그인 후 30만원 당첨 이벤트 응모가 가능합니다."
                                                }),
                                                buttons: [(0, n.jsx)(b.TX, {
                                                    resolve: null
                                                }, "btn-login")]
                                            });
                                            if ((null === (l = window) || void 0 === l ? void 0 : null === (o = l.inface) || void 0 === o ? void 0 : null === (a = o.auth) || void 0 === a ? void 0 : null === (s = a._user) || void 0 === s ? void 0 : null === (i = s._profile) || void 0 === i ? void 0 : null === (e = i.local_session_props) || void 0 === e ? void 0 : e.main_atl) === 1) return (0, b.OM)({
                                                content: (0, n.jsxs)("div", {
                                                    children: ["현재 로그인 한 넥슨 ID로 이벤트에", (0, n.jsx)("br", {}), "응모하실 수 없습니다.", (0, n.jsx)("br", {}), (0, n.jsx)("br", {}), "본인확인이 완료된 넥슨ID로 퀴즈 3문제 정답 시", (0, n.jsx)("br", {}), "응모할 수 있습니다."]
                                                })
                                            });
                                            async function H(e) {
                                                switch (e) {
                                                    case 0:
                                                        return !0;
                                                    case 2008:
                                                    case 2010:
                                                        return await (0, b.OM)({
                                                            content: (0, n.jsxs)("div", {
                                                                children: ["현재 로그인 한 넥슨 ID로 이벤트에", (0, n.jsx)("br", {}), "응모하실 수 없습니다.", (0, n.jsx)("br", {}), (0, n.jsx)("br", {}), "본인확인이 완료된 넥슨ID로 퀴즈 3문제 정답 시", (0, n.jsx)("br", {}), "응모할 수 있습니다."]
                                                            })
                                                        }), !1;
                                                    case 2009:
                                                    case 2013:
                                                        return await (0, b.OM)({
                                                            content: (0, n.jsxs)("div", {
                                                                children: ["지금은 응모 기간이 아닙니다.", (0, n.jsx)("br", {}), "응모 기간에 다시 참여해 주세요!", (0, n.jsx)("br", {}), (0, n.jsx)("br", {}), "응모 기간: 4/30(화), 5/31(금), 6/30(일)", (0, n.jsx)("br", {}), " 오전 0시 ~ 오후 11시 59분"]
                                                            })
                                                        }), !1;
                                                    case 2011:
                                                        return await (0, b.OM)({
                                                            content: (0, n.jsx)("div", {
                                                                children: "이미 동일 명의 넥슨ID로 이벤트에 응모 하셨습니다."
                                                            })
                                                        }), !1;
                                                    default:
                                                        return await (0, b.OM)({
                                                            content: (0, n.jsx)("div", {
                                                                children: "오류가 발생했습니다. 잠시 후 다시 시도해 주세요."
                                                            })
                                                        }), !1
                                                }
                                            }
                                            let V = await (0, h.a)().checkApply();
                                            if (!await H(null == V ? void 0 : null === (r = V.data) || void 0 === r ? void 0 : r.code)) return;
                                            let {
                                                login_id: m
                                            } = t.local_profile_props, {
                                                confirm: f
                                            } = await (0, b.OM)({
                                                content: (0, n.jsxs)("div", {
                                                    children: [(0, n.jsx)(b.Hk, {
                                                        account: m,
                                                        userProfile: t
                                                    }), "현재 로그인한 넥슨ID로 이벤트에 응모하며", (0, n.jsx)("br", {}), "당첨될 경우 해당 넥슨ID로 넥슨캐시가 지급됩니다.", (0, n.jsx)("br", {}), (0, n.jsx)("br", {}), "넥슨ID 명의 당 응모 일자 별로 1회씩", (0, n.jsx)("br", {}), "응모할 수 있습니다."]
                                                }),
                                                buttons: [(0, n.jsx)(b.Lw, {}, "btn-cancel"), (0, n.jsx)(b.pu, {}, "btn-confirm")]
                                            });
                                            if (f) try {
                                                let e = await (0, h.a)().applyCashEvent(),
                                                    i = null == e ? void 0 : e.data;
                                                if (!await H(i.code)) return;
                                                return (0, q.D)("Cash", {
                                                    name: "Entry_Submitted",
                                                    value: null === (x = window) || void 0 === x ? void 0 : null === (_ = x.inface) || void 0 === _ ? void 0 : null === (d = _.auth) || void 0 === d ? void 0 : null === (v = d._user) || void 0 === v ? void 0 : null === (u = v._profile) || void 0 === u ? void 0 : null === (c = u.local_session_props) || void 0 === c ? void 0 : c.identity_sn,
                                                    pagecode: "65478"
                                                }), (0, O.P)().event3ComplteBigCashButton(), (0, b.OM)({
                                                    content: (0, n.jsx)("div", {
                                                        children: "응모 완료했습니다!"
                                                    })
                                                })
                                            } catch (e) {
                                                return (0, b.OM)({
                                                    content: (0, n.jsx)("div", {
                                                        children: "오류가 발생했습니다. 잠시 후 다시 시도해 주세요."
                                                    })
                                                })
                                            }
                                        },
                                        children: (0, n.jsx)("div", {
                                            className: F("quiz-second-event-apply")
                                        })
                                    }), (0, n.jsx)("button", {
                                        onClick: async () => ((0, q.D)("Cash", {
                                            name: "Winner",
                                            pagecode: "65478"
                                        }), window.open("https://nexon.link/e4q", "_blank")),
                                        children: (0, n.jsx)("div", {
                                            className: F("quiz-second-event-goto-event")
                                        })
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: F("quiz-second-event-nexon-cash")
                                }), (0, n.jsxs)("ul", {
                                    className: F("quiz-second-event-notice-list"),
                                    children: [(0, n.jsx)("li", {
                                        className: F("quiz-second-event-notice-list-item"),
                                        children: "본인확인이 완료된 넥슨ID로 퀴즈 3문제를 맞힐 시, 매달 말일에 1회씩 응모할 수 있습니다."
                                    }), (0, n.jsx)("li", {
                                        className: F("quiz-second-event-notice-list-item"),
                                        children: "본인확인이 완료된 넥슨ID로 명의당 1회만 응모가 가능하며, 이미 응모한 경우 동일 명의의 다른 넥슨ID로 응모할 수 없습니다."
                                    }), (0, n.jsxs)("li", {
                                        className: F("quiz-second-event-notice-list-item"),
                                        children: ["넥슨캐시 30만원은 추첨을 통해 지급되며, 추첨 결과는 (", (0, n.jsx)("a", {
                                            className: F("quiz-second-event-notice-list-link"),
                                            href: "https://notice.nexon.com/Notice/NoticeList",
                                            target: "_blank",
                                            children: "▶넥슨 공지사항"
                                        }), ") 및 넥슨 쪽지를 통해 안내됩니다."]
                                    }), (0, n.jsx)("li", {
                                        className: F("quiz-second-event-notice-list-item"),
                                        children: "4월 최대 1,000명 당첨되며 이벤트 상황에 따라 월별 당첨 인원은 다를 수 있습니다."
                                    }), (0, n.jsx)("li", {
                                        className: F("quiz-second-event-notice-list-item"),
                                        children: "당첨된 넥슨캐시 30만원은 응모한 넥슨ID로 지급됩니다."
                                    }), (0, n.jsx)("li", {
                                        className: F("quiz-second-event-notice-list-item"),
                                        children: "넥슨캐시 30만원은 전체 이벤트 기간 동안 1회에 한해 당첨될 수 있습니다."
                                    }), (0, n.jsx)("li", {
                                        className: F("quiz-second-event-notice-list-item"),
                                        children: "부적절한 방법으로 이벤트에 참여할 경우 추첨에서 제외되거나 당첨이 취소될 수 있습니다."
                                    }), (0, n.jsxs)("li", {
                                        className: F("quiz-second-event-notice-list-item"),
                                        children: ["이벤트 관련 문의는 (", (0, n.jsxs)("a", {
                                            className: F("quiz-second-event-notice-list-link"),
                                            href: "https://cs.nexon.com/HelpBoard/Nexon?gamecode=345&category=74997&direct=direct",
                                            target: "_blank",
                                            children: ["▶게임문의 외 ", ">", " 넥슨 30주년 이벤트 고객센터"]
                                        }), ")를 이용해주시기 바랍니다."]
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: F("quiz-second-event-characters"),
                                    children: [(0, n.jsxs)("div", {
                                        className: F("quiz-second-event-left-character-group"),
                                        children: [(0, n.jsx)("div", {
                                            className: F("quiz-second-event-left-character")
                                        }), (0, n.jsx)("div", {
                                            className: F("quiz-o-icon")
                                        }), (0, n.jsx)("div", {
                                            className: F("quiz-x-icon")
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: F("quiz-second-event-right-character-group"),
                                        children: [(0, n.jsx)("div", {
                                            className: F("quiz-second-event-right-character")
                                        }), (0, n.jsx)("div", {
                                            className: F("quiz-o-icon")
                                        }), (0, n.jsx)("div", {
                                            className: F("quiz-x-icon")
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })]
                })
            }
            var U = t(6413),
                G = t(8266);

            function T() {
                return (0, U.Z)(), (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(G.default, {
                        id: "googleads-cash-page",
                        children: "gtag('event', 'conversion', {'send_to': 'AW-16483351112/BuLoCI_fi6AZEMj077M9'});"
                    }), (0, n.jsx)(G.default, {
                        id: "kakao-cash-page",
                        children: "kakaoPixel('8045587692476711134').pageView('페이지조회_0401');"
                    }), (0, n.jsx)(G.default, {
                        id: "meta-cash-page",
                        children: 'fbq("trackCustom", "페이지조회_0401");'
                    }), (0, n.jsx)(I, {})]
                })
            }
        },
        6413: function(e, i, t) {
            "use strict";
            var n = t(4617),
                s = t(8254);
            i.Z = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    {
                        baseScale: i = 1,
                        changeScale: t = .75,
                        targetViewportWidth: a = 1e3
                    } = e;
                (0, n.useEffect)(() => {
                    let e = !1,
                        n = function() {
                            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            try {
                                let {
                                    forceToBase: s = !1
                                } = n, a = document.querySelector("meta[name=viewport]");
                                if (e) {
                                    e = !1;
                                    return
                                }
                                let o = [() => window.innerWidth < 360, () => {
                                    let {
                                        navigator: e
                                    } = window;
                                    return e.userAgent.includes("SM-F")
                                }].some(e => e());
                                o && (e = !0);
                                let l = o ? t : i,
                                    r = s ? i : l;
                                a.setAttribute("content", "width=device-width, initial-scale=".concat(r, ", maximum-scale=").concat(r, ", minimum-scale=").concat(r, ", user-scalable=no"))
                            } catch (e) {
                                s.Tb(e)
                            }
                        };
                    return n(), window.addEventListener("resize", n), () => {
                        window.removeEventListener("resize", n), n({
                            forceToBase: !0
                        })
                    }
                }, [i, t, a])
            }
        },
        6824: function(e) {
            e.exports = {
                container: "FloatingMenu_container__ak1ok",
                "floating-menu": "FloatingMenu_floating-menu__iwtRW",
                "fixed-menu": "FloatingMenu_fixed-menu__yj7pg",
                anchor: "FloatingMenu_anchor__RqXTj",
                on: "FloatingMenu_on__xB9qJ",
                "sharing-btn": "FloatingMenu_sharing-btn__HoqQW"
            }
        },
        7940: function(e) {
            e.exports = {
                "quiz-topview-cash-status-container": "NexonCashStatus_quiz-topview-cash-status-container__uaB6E",
                "transition-width": "NexonCashStatus_transition-width__O_qk1",
                "quiz-topview-cash-status-pc": "NexonCashStatus_quiz-topview-cash-status-pc__pxmfG",
                "quiz-topview-cash-status-mo": "NexonCashStatus_quiz-topview-cash-status-mo__RuKlk",
                "quiz-topview-coin-icon-container-pc": "NexonCashStatus_quiz-topview-coin-icon-container-pc__V2rbT",
                "quiz-topview-coin-icon-container-mo": "NexonCashStatus_quiz-topview-coin-icon-container-mo__NRKnS",
                "quiz-topview-cash-coin": "NexonCashStatus_quiz-topview-cash-coin__zSuTy"
            }
        },
        8174: function(e) {
            e.exports = {
                container: "SharingButton_container__l7Krh",
                "sharing-button": "SharingButton_sharing-button__fPv_9",
                active: "SharingButton_active__2f7BE",
                "sns-list": "SharingButton_sns-list___h8vT",
                icon: "SharingButton_icon__9RZRn",
                "icon-url": "SharingButton_icon-url__fmGA4",
                "icon-meta": "SharingButton_icon-meta__zTWz2",
                "icon-kakao": "SharingButton_icon-kakao__TxJxf",
                "icon-x": "SharingButton_icon-x__Mj_GZ",
                link: "SharingButton_link__pgFaG"
            }
        },
        3665: function(e) {
            e.exports = {
                hide: "B_QuizSurvivalEvent_hide__L_NeJ",
                "pc-block": "B_QuizSurvivalEvent_pc-block__6S1B0",
                "sharing-mobile": "B_QuizSurvivalEvent_sharing-mobile__KX4nT",
                container: "B_QuizSurvivalEvent_container__mpAbi",
                "quiz-container": "B_QuizSurvivalEvent_quiz-container__mfq_E",
                "quiz-background": "B_QuizSurvivalEvent_quiz-background__ph_eP",
                "quiz-topview": "B_QuizSurvivalEvent_quiz-topview__VTKUF",
                "quiz-topview-title": "B_QuizSurvivalEvent_quiz-topview-title__W2Rm8",
                "quiz-topview-subtitle": "B_QuizSurvivalEvent_quiz-topview-subtitle__i8WbO",
                "quiz-topview-subtitle-notice": "B_QuizSurvivalEvent_quiz-topview-subtitle-notice__YCw6_",
                "quiz-topview-cash-container": "B_QuizSurvivalEvent_quiz-topview-cash-container__a0MgM",
                "quiz-o-icon": "B_QuizSurvivalEvent_quiz-o-icon__otPGS",
                "quiz-x-icon": "B_QuizSurvivalEvent_quiz-x-icon__IcGDe",
                "quiz-topview-left-character": "B_QuizSurvivalEvent_quiz-topview-left-character__68eOs",
                "quiz-topview-right-character": "B_QuizSurvivalEvent_quiz-topview-right-character__YCE84",
                "quiz-topview-cash-information": "B_QuizSurvivalEvent_quiz-topview-cash-information__o5ZwE",
                "quiz-topview-cash-status": "B_QuizSurvivalEvent_quiz-topview-cash-status__tLxUf",
                "quiz-topview-how-to-play-list": "B_QuizSurvivalEvent_quiz-topview-how-to-play-list__8UZPF",
                "quiz-topview-how-to-play-list-item": "B_QuizSurvivalEvent_quiz-topview-how-to-play-list-item__Xm5pI",
                "quiz-topview-how-to-play-description": "B_QuizSurvivalEvent_quiz-topview-how-to-play-description__6cadE",
                "quiz-topview-how-to-play-sub": "B_QuizSurvivalEvent_quiz-topview-how-to-play-sub__inUdy",
                "quiz-topview-how-to-play-strong": "B_QuizSurvivalEvent_quiz-topview-how-to-play-strong__c0_E9",
                "quiz-topview-how-to-play-step-one": "B_QuizSurvivalEvent_quiz-topview-how-to-play-step-one__dKyWA",
                "quiz-topview-how-to-play-step-two": "B_QuizSurvivalEvent_quiz-topview-how-to-play-step-two__hlPVU",
                "quiz-topview-how-to-play-step-three": "B_QuizSurvivalEvent_quiz-topview-how-to-play-step-three__wnwmy",
                "quiz-topview-how-to-play-step-four": "B_QuizSurvivalEvent_quiz-topview-how-to-play-step-four__KCOZL",
                "quiz-first-event": "B_QuizSurvivalEvent_quiz-first-event__6PBwd",
                "quiz-first-event-title": "B_QuizSurvivalEvent_quiz-first-event-title___DOd_",
                "quiz-first-event-subtitle": "B_QuizSurvivalEvent_quiz-first-event-subtitle__0__P1",
                "not-login-container": "B_QuizSurvivalEvent_not-login-container__3hnQU",
                "logged-in": "B_QuizSurvivalEvent_logged-in__tBsal",
                "login-container": "B_QuizSurvivalEvent_login-container__ROk8L",
                "login-header": "B_QuizSurvivalEvent_login-header__QBbeJ",
                "nexon-id": "B_QuizSurvivalEvent_nexon-id__Pp1jS",
                "auth-information": "B_QuizSurvivalEvent_auth-information__AlJSC",
                "auth-information-icon": "B_QuizSurvivalEvent_auth-information-icon__Emwb0",
                facebook: "B_QuizSurvivalEvent_facebook__sclAR",
                google: "B_QuizSurvivalEvent_google__ci9xX",
                naver: "B_QuizSurvivalEvent_naver__xtuBo",
                apple: "B_QuizSurvivalEvent_apple__Knsw6",
                "auth-information-name": "B_QuizSurvivalEvent_auth-information-name__agS_O",
                "login-buttons": "B_QuizSurvivalEvent_login-buttons__MCc6P",
                "login-button-image": "B_QuizSurvivalEvent_login-button-image__OuP92",
                "logout-button": "B_QuizSurvivalEvent_logout-button__773q3",
                "logout-button-image": "B_QuizSurvivalEvent_logout-button-image__70c_e",
                "cash-history-button-image": "B_QuizSurvivalEvent_cash-history-button-image__lizwH",
                "quiz-first-event-notice-list": "B_QuizSurvivalEvent_quiz-first-event-notice-list__cJWGP",
                "quiz-first-event-notice-list-item": "B_QuizSurvivalEvent_quiz-first-event-notice-list-item__nQr8_",
                "quiz-first-event-canvas-container": "B_QuizSurvivalEvent_quiz-first-event-canvas-container__1IPjM",
                "quiz-first-event-canvas-frame": "B_QuizSurvivalEvent_quiz-first-event-canvas-frame__xIitV",
                "quiz-first-event-canvas-background": "B_QuizSurvivalEvent_quiz-first-event-canvas-background__eE_yu",
                "quiz-second-event": "B_QuizSurvivalEvent_quiz-second-event__QS_tS",
                "quiz-second-event-background": "B_QuizSurvivalEvent_quiz-second-event-background__OSrCn",
                "quiz-second-event-icon-event": "B_QuizSurvivalEvent_quiz-second-event-icon-event__WVELg",
                "quiz-second-event-title": "B_QuizSurvivalEvent_quiz-second-event-title__R1gI3",
                "quiz-second-event-buttons": "B_QuizSurvivalEvent_quiz-second-event-buttons__VWmpd",
                "quiz-second-event-apply": "B_QuizSurvivalEvent_quiz-second-event-apply__gqe2M",
                "quiz-second-event-goto-event": "B_QuizSurvivalEvent_quiz-second-event-goto-event__iSP9G",
                "quiz-second-event-nexon-cash": "B_QuizSurvivalEvent_quiz-second-event-nexon-cash__kJnG8",
                "quiz-second-event-notice-list": "B_QuizSurvivalEvent_quiz-second-event-notice-list__jh_KG",
                "quiz-second-event-notice-list-item": "B_QuizSurvivalEvent_quiz-second-event-notice-list-item__4N97l",
                "quiz-second-event-notice-list-link": "B_QuizSurvivalEvent_quiz-second-event-notice-list-link__VnOnx",
                "quiz-second-event-characters": "B_QuizSurvivalEvent_quiz-second-event-characters__HL5fM",
                "quiz-second-event-left-character-group": "B_QuizSurvivalEvent_quiz-second-event-left-character-group___NtKe",
                "quiz-second-event-right-character-group": "B_QuizSurvivalEvent_quiz-second-event-right-character-group__gvJ45",
                "quiz-second-event-left-character": "B_QuizSurvivalEvent_quiz-second-event-left-character__j1Az6",
                "quiz-second-event-right-character": "B_QuizSurvivalEvent_quiz-second-event-right-character__9htw2"
            }
        }
    },
    function(e) {
        e.O(0, [47, 158, 202, 22, 492, 810, 851, 744], function() {
            return e(e.s = 5188)
        }), _N_E = e.O()
    }
]);