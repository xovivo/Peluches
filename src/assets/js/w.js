(function (e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var i = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    return n.m = e, n.c = t, n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(o, i, function (t) {
                return e[t]
            }.bind(null, i));
        return o
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
})([function (e, t) {
    try {
        ! function () {
            var e = !1,
                t = 0,
                n = !1,
                o = {
                    cs: "https://d10lpsik1i8c69.cloudfront.net/js/clickstream.js?v=c8a2188",
                    csLegacy: "https://d10lpsik1i8c69.cloudfront.net/js/clickstream.legacy.js?v=c8a2188",
                    beta: "https://storage.googleapis.com/lucky-orange-public/js/clickstream.js",
                    heatmap: "https://d10lpsik1i8c69.cloudfront.net/heatmap/production/bootstrap.js",
                    heatmapBeta: "https://storage.googleapis.com/lucky-orange-public/heatmap/beta/bootstrap.js"
                },
                i = {
                    cs: 'sha512-oBN0fsb+J1bsUWJpVspy8ax4vTthCwFZGKzAb39XKPw1g3z6vxtnE12Em2NnQ8HGxpTye+URbOdIH61F6xQ4wQ==',
                    csLegacy: 'sha512-MJgDKalPokJVI6cbYoryGABiWoMDRlILu+OCYP4x6g4vkE7gebEGOq/c7uzhguRu7AGZ28igewk4tVN2FVnCKw=='
                },
                r = "https://settings.luckyorange.net",
                a = o.cs;
            if (window.opener) {
                window.addEventListener("message", function (e) {
                    var t, n, o, i = e.origin || e.originalEvent.origin,
                        r = (t = i, (n = window.document.createElement("a")).href = t, n);
                    if (r && (o = r.hostname) && ((o = o.toLowerCase()).indexOf("luckyorange.com") > -1 || o.indexOf("livestatserver.com") > -1)) {
                        var a = e.data;
                        "LO::APPID" === a.type && d(a.appid)
                    }
                }), t = setTimeout(d, 2500);
                window.opener.postMessage({
                    type: "LO::APPID"
                }, "*")
            } else d();

            function c(e, t) {
                const n = ((r = document.createElement("iframe")).id = "lo-cs-frame", r.src = "about:blank", r.setAttribute("aria-hidden", "true"), r.setAttribute("title", "Lucky Orange"), r.style.cssText = "display: none !important;", document.body.appendChild(r), r);
                var r;
                const c = n.contentWindow.localStorage;
                n.contentWindow.__lo_settings = t;
                var d = !1;
                "cs" === e && t.addons && t.addons.beta && (a = o.beta, d = !0);
                var s = o[e + "Legacy"],
                    l = !1;
                !s || "noModule" in document.createElement("script") || (a = s, l = !0);
                var u = c ? c.getItem("lo::dbg_url") : null;
                if (u && (a = u), "cs" === e && !u && t.dont_track && 1 === t.dont_track) return !1;
                var f = l ? i[e + "Legacy"] : i[e];
                ! function e(t, n, o) {
                    o = o || {};
                    try {
                        if (!t) return;
                        let i = null,
                            r = null;
                        i = o.frame ? o.frame.contentDocument : document, (r = i.createElement("script")).async = !0, r.charset = "utf-8", r.type = "text/javascript", r.src = t, r.crossOrigin = "anonymous", o.integrity && (r.integrity = o.integrity), r.onload = r.onreadystatechange = function (e, t) {
                            (t || !r.readyState || /loaded|complete/.test(r.readyState)) && (r.onload = r.onreadystatechange = null, "function" == typeof n && n())
                        }, r.onerror = function (e) {
                            "function" == typeof n && n(e)
                        };
                        let a = i.head || i.getElementsByTagName("head")[0] || i.documentElement;
                        a.appendChild(r), o.frame && o.frame.addEventListener("load", function () {
                            let i = o.frame.contentDocument.querySelector("script");
                            i || e(t, n, o)
                        })
                    } catch (e) {}
                }(a, function (t) {
                    window.__lo_csr_added = !1, u && !t && console.log("[LO] w.js: Loaded app", e, "from path", u)
                }, {
                    frame: "cs" === e && n,
                    integrity: !f || u || d ? null : f
                })
            }

            function d(i) {
                if (e) return !1;
                i = window.localStorage.getItem("lo::dbg_appId") || i || "cs", clearTimeout(t), e = !0, i && o.hasOwnProperty(i) && (a = o[i]);
                try {
                    window.top && "LO_Heatmap" in window.top && (n = !0)
                } catch (e) {}
                n || window.__lo_csr_added || document.querySelector("iframe#lo-cs-frame") || (window.__lo_csr_added = !0, function (e) {
                    if (window.__lo_settings) return e(window.__lo_settings);
                    var t = r + "?u=" + encodeURIComponent(window.document.location.href),
                        n = function () {
                            var e = null;
                            (window.__lo_site_id || window.__wtw_lucky_site_id) && (e = window.__lo_site_id || window.__wtw_lucky_site_id);
                            window.Ecwid && (e = window.Ecwid.getAppPublicConfig("lucky-orange"));
                            try {
                                window.localStorage.getItem("lo::dbg_site_id") && (e = window.localStorage.getItem("lo::dbg_site_id"))
                            } catch (e) {}
                            return e || null
                        }();
                    n && (t += "&s=" + n);
                    !n && window.Shopify && (t += "&d=" + encodeURIComponent(window.Shopify.shop));
                    window.lo_use_ip_lookups && (t += "&i=1");
                    ! function (e, t) {
                        try {
                            if (window.fetch && "function" == typeof window.fetch && window.Promise) window.fetch(e, {
                                credentials: "include"
                            }).then(function (e) {
                                return e.json()
                            }).then(function (e) {
                                t && t(e)
                            }).catch(function (e) {});
                            else if (window.XMLHttpRequest) {
                                var n = new window.XMLHttpRequest;
                                if ("withCredentials" in n) n.open("GET", e, 1), n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.onreadystatechange = function () {
                                    n.readyState > 3 && n.responseText && t && t(JSON.parse(n.responseText), n)
                                }, n.withCredentials = !0, n.send();
                                else if (window.XDomainRequest) {
                                    var o = new window.XDomainRequest;
                                    o.open("GET", e), o.send(), o.onload = function () {
                                        t(JSON.parse(o.responseText), o)
                                    }
                                }
                            }
                        } catch (e) {}
                    }(t, e)
                }(function (e) {
                    "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", function () {
                        c(i, e)
                    }) : c(i, e)
                }))
            }
        }()
    } catch (e) {}
}]);