﻿/*
jquery.animate-enhanced plugin v1.03
---
http://github.com/benbarnett/jQuery-Animate-Enhanced
http://benbarnett.net
@benpbarnett
*/
(function (e, C, D) {
    function I(a, b, f, c) {
        if ("d" != f && E(a)) {
            var g = J.exec(b), d = "auto" === a.css(f) ? 0 : a.css(f), d = "string" == typeof d ? z(d) : d; "string" == typeof b && z(b); c = !0 === c ? 0 : d; var e = a.is(":hidden"), k = a.translation(); "left" == f && (c = parseInt(d, 10) + k.x); "right" == f && (c = parseInt(d, 10) + k.x); "top" == f && (c = parseInt(d, 10) + k.y); "bottom" == f && (c = parseInt(d, 10) + k.y); g || "show" != b ? g || "hide" != b || (c = 0) : (c = 1, e && a.css({ display: K(a.context.tagName), opacity: 0 })); return g ? (a = parseFloat(g[2]), g[1] && (a = ("-=" === g[1] ? -1 : 1) * a + parseInt(c,
            10)), a) : c
        }
    } function L(a, b, f, c, g, d, h, k) { var l = a.data(t), l = l && !w(l) ? l : e.extend(!0, {}, M), q = g; if (-1 < e.inArray(b, A)) { var r = l.meta, p = z(a.css(b)) || 0, n = b + "_o", q = g - p; r[b] = q; r[n] = "auto" == a.css(b) ? 0 + q : p + q || 0; l.meta = r; h && 0 === q && (q = 0 - r[n], r[b] = q, r[n] = 0) } return a.data(t, N(a, l, b, f, c, q, d, h, k)) } function N(a, b, f, c, g, d, e, k, l) {
        var q = !1; e = !0 === e && !0 === k; b = b || {}; b.original || (b.original = {}, q = !0); b.properties = b.properties || {}; b.secondary = b.secondary || {}; k = b.meta; for (var r = b.original, p = b.properties, t = b.secondary, s = n.length -
        1; 0 <= s; s--) { var m = n[s] + "transition-property", u = n[s] + "transition-duration", v = n[s] + "transition-timing-function"; f = e ? n[s] + "transform" : f; q && (r[m] = a.css(m) || "", r[u] = a.css(u) || "", r[v] = a.css(v) || ""); t[f] = e ? !0 === l || !0 === B && !1 !== l && F ? "translate3d(" + k.left + "px, " + k.top + "px, 0)" : "translate(" + k.left + "px," + k.top + "px)" : d; p[m] = (p[m] ? p[m] + "," : "") + f; p[u] = (p[u] ? p[u] + "," : "") + c + "ms"; p[v] = (p[v] ? p[v] + "," : "") + g } return b
    } function O(a) {
        for (var b in a) if (!("width" != b && "height" != b || "show" != a[b] && "hide" != a[b] && "toggle" != a[b])) return !0;
        return !1
    } function w(a) { for (var b in a) return !1; return !0 } function K(a) { a = a.toUpperCase(); var b = { LI: "list-item", TR: "table-row", TD: "table-cell", TH: "table-cell", CAPTION: "table-caption", COL: "table-column", COLGROUP: "table-column-group", TFOOT: "table-footer-group", THEAD: "table-header-group", TBODY: "table-row-group" }; return "string" == typeof b[a] ? b[a] : "block" } function z(a) { return parseFloat(a.replace(a.match(/\D+$/), "")) } function E(a) { var b = !0; a.each(function (a, c) { return b = b && c.ownerDocument }); return b } function P(a,
    b, f) { if (!E(f)) return !1; var c = -1 < e.inArray(a, Q); "width" != a && "height" != a && "opacity" != a || parseFloat(b) !== parseFloat(f.css(a)) || (c = !1); return c } var Q = "top right bottom left opacity height width".split(" "), A = ["top", "right", "bottom", "left"], n = ["-webkit-", "-moz-", "-o-", ""], R = ["avoidTransforms", "useTranslate3d", "leaveTransforms"], J = /^([+-]=)?([\d+-.]+)(.*)$/, S = /([A-Z])/g, M = { secondary: {}, meta: { top: 0, right: 0, bottom: 0, left: 0 } }, t = "jQe", G = null, x = !1, y = (document.body || document.documentElement).style, H = void 0 !==
    y.WebkitTransition || void 0 !== y.MozTransition || void 0 !== y.OTransition || void 0 !== y.transition, F = "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix, B = F; e.expr && e.expr.filters && (G = e.expr.filters.animated, e.expr.filters.animated = function (a) { return e(a).data("events") && e(a).data("events")["webkitTransitionEnd oTransitionEnd transitionend"] ? !0 : G.call(this, a) }); e.extend({
        toggle3DByDefault: function () { return B = !B }, toggleDisabledByDefault: function () { return x = !x }, setDisabledByDefault: function (a) {
            return x =
            a
        }
    }); e.fn.translation = function () { if (!this[0]) return null; var a = window.getComputedStyle(this[0], null), b = { x: 0, y: 0 }; if (a) for (var e = n.length - 1; 0 <= e; e--) { var c = a.getPropertyValue(n[e] + "transform"); if (c && /matrix/i.test(c)) { a = c.replace(/^matrix\(/i, "").split(/, |\)$/g); b = { x: parseInt(a[4], 10), y: parseInt(a[5], 10) }; break } } return b }; e.fn.animate = function (a, b, f, c) {
        a = a || {}; var g = !("undefined" !== typeof a.bottom || "undefined" !== typeof a.right), d = e.speed(b, f, c), h = this, k = 0, l = function () {
            k--; 0 === k && "function" === typeof d.complete &&
            d.complete.apply(h, arguments)
        }; return !0 === ("undefined" !== typeof a.avoidCSSTransitions ? a.avoidCSSTransitions : x) || !H || w(a) || O(a) || 0 >= d.duration || d.step ? C.apply(this, arguments) : this[!0 === d.queue ? "queue" : "each"](function () {
            var b = e(this), c = e.extend({}, d), f = function (c) {
                var d = b.data(t) || { original: {} }, f = {}; if (2 == c.eventPhase) {
                    if (!0 !== a.leaveTransforms) { for (c = n.length - 1; 0 <= c; c--) f[n[c] + "transform"] = ""; if (g && "undefined" !== typeof d.meta) { c = 0; for (var h; h = A[c]; ++c) f[h] = d.meta[h + "_o"] + "px", e(this).css(h, f[h]) } } b.unbind("webkitTransitionEnd oTransitionEnd transitionend").css(d.original).css(f).data(t,
                    null); "hide" === a.opacity && b.css({ display: "none", opacity: "" }); l.call(this)
                }
            }, h = {
                bounce: "cubic-bezier(0.0, 0.35, .5, 1.3)", linear: "linear", swing: "ease-in-out", easeInQuad: "cubic-bezier(0.550, 0.085, 0.680, 0.530)", easeInCubic: "cubic-bezier(0.550, 0.055, 0.675, 0.190)", easeInQuart: "cubic-bezier(0.895, 0.030, 0.685, 0.220)", easeInQuint: "cubic-bezier(0.755, 0.050, 0.855, 0.060)", easeInSine: "cubic-bezier(0.470, 0.000, 0.745, 0.715)", easeInExpo: "cubic-bezier(0.950, 0.050, 0.795, 0.035)", easeInCirc: "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
                easeInBack: "cubic-bezier(0.600, -0.280, 0.735, 0.045)", easeOutQuad: "cubic-bezier(0.250, 0.460, 0.450, 0.940)", easeOutCubic: "cubic-bezier(0.215, 0.610, 0.355, 1.000)", easeOutQuart: "cubic-bezier(0.165, 0.840, 0.440, 1.000)", easeOutQuint: "cubic-bezier(0.230, 1.000, 0.320, 1.000)", easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)", easeOutExpo: "cubic-bezier(0.190, 1.000, 0.220, 1.000)", easeOutCirc: "cubic-bezier(0.075, 0.820, 0.165, 1.000)", easeOutBack: "cubic-bezier(0.175, 0.885, 0.320, 1.275)", easeInOutQuad: "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
                easeInOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1.000)", easeInOutQuart: "cubic-bezier(0.770, 0.000, 0.175, 1.000)", easeInOutQuint: "cubic-bezier(0.860, 0.000, 0.070, 1.000)", easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)", easeInOutExpo: "cubic-bezier(1.000, 0.000, 0.000, 1.000)", easeInOutCirc: "cubic-bezier(0.785, 0.135, 0.150, 0.860)", easeInOutBack: "cubic-bezier(0.680, -0.550, 0.265, 1.550)"
            }, s = {}, h = h[c.easing || "swing"] ? h[c.easing || "swing"] : c.easing || "swing", m; for (m in a) if (-1 === e.inArray(m,
            R)) { var u = -1 < e.inArray(m, A), v = I(b, a[m], m, u && !0 !== a.avoidTransforms); P(m, v, b) ? L(b, m, c.duration, h, v, u && !0 !== a.avoidTransforms, g, a.useTranslate3d) : s[m] = a[m] } b.unbind("webkitTransitionEnd oTransitionEnd transitionend"); m = b.data(t); if (!m || w(m) || w(m.secondary)) c.queue = !1; else { k++; b.css(m.properties); var x = m.secondary; setTimeout(function () { b.bind("webkitTransitionEnd oTransitionEnd transitionend", f).css(x) }) } w(s) || (k++, C.apply(b, [s, {
                duration: c.duration, easing: e.easing[c.easing] ? c.easing : e.easing.swing ? "swing" :
                "linear", complete: l, queue: c.queue
            }])); return !0
        })
    }; e.fn.animate.defaults = {}; e.fn.stop = function (a, b, f) {
        if (!H) return D.apply(this, [a, b]); a && this.queue([]); this.each(function () {
            var c = e(this), g = c.data(t); if (g && !w(g)) {
                var d, h = {}; if (b) { if (h = g.secondary, !f && void 0 !== typeof g.meta.left_o || void 0 !== typeof g.meta.top_o) for (h.left = void 0 !== typeof g.meta.left_o ? g.meta.left_o : "auto", h.top = void 0 !== typeof g.meta.top_o ? g.meta.top_o : "auto", d = n.length - 1; 0 <= d; d--) h[n[d] + "transform"] = "" } else if (!w(g.secondary)) {
                    var k =
                    window.getComputedStyle(c[0], null); if (k) for (var l in g.secondary) if (g.secondary.hasOwnProperty(l) && (l = l.replace(S, "-$1").toLowerCase(), h[l] = k.getPropertyValue(l), !f && /matrix/i.test(h[l]))) for (d = h[l].replace(/^matrix\(/i, "").split(/, |\)$/g), h.left = parseFloat(d[4]) + parseFloat(c.css("left")) + "px" || "auto", h.top = parseFloat(d[5]) + parseFloat(c.css("top")) + "px" || "auto", d = n.length - 1; 0 <= d; d--) h[n[d] + "transform"] = ""
                } c.unbind("webkitTransitionEnd oTransitionEnd transitionend"); c.css(g.original).css(h).data(t,
                null)
            } else D.apply(c, [a, b])
        }); return this
    }
})(jQuery, jQuery.fn.animate, jQuery.fn.stop);
