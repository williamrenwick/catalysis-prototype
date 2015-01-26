var g, aa = aa || {},
    l = this;

function ba(a) {
    a = a.split(".");
    for (var b = l, c; c = a.shift();)
        if (null != b[c]) b = b[c];
        else return null;
    return b
}

function ca() {}

function da(a) {
    var b = typeof a;
    if ("object" == b)
        if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
}

function m(a) {
    return "array" == da(a)
}

function ea(a) {
    var b = da(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}

function n(a) {
    return "string" == typeof a
}

function fa(a) {
    return "function" == da(a)
}

function ha(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}

function ja(a) {
    return a[ka] || (a[ka] = ++la)
}
var ka = "closure_uid_" + (1E9 * Math.random() >>> 0),
    la = 0;

function ma(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function na(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}

function q(a, b, c) {
    q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ma : na;
    return q.apply(null, arguments)
}

function oa(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
    }
}
var pa = Date.now || function() {
    return +new Date
};

function r(a, b) {
    var c = a.split("."),
        d = l;
    c[0] in d || !d.execScript || d.execScript("var " + c[0]);
    for (var e; c.length && (e = c.shift());) c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
}

function t(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.i = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.be = function(a, c, f) {
        return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
    }
};

function qa(a, b) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
    return d + c.join("%s")
}

function ra(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}

function sa(a) {
    if (!ta.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(ua, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(va, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(wa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(xa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(ya, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(za, "&#0;"));
    return a
}
var ua = /&/g,
    va = /</g,
    wa = />/g,
    xa = /"/g,
    ya = /'/g,
    za = /\x00/g,
    ta = /[\x00&<>"']/;

function Aa(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
}

function Ba(a) {
    return String(a).replace(/\-([a-z])/g, function(a, c) {
        return c.toUpperCase()
    })
}

function Ca(a) {
    return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
}

function Da(a) {
    var b = n(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
    return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
        return b + e.toUpperCase()
    })
};
var Ea;
a: {
    var Fa = l.navigator;
    if (Fa) {
        var Ga = Fa.userAgent;
        if (Ga) {
            Ea = Ga;
            break a
        }
    }
    Ea = ""
}

function Ha(a) {
    return -1 != Ea.indexOf(a)
};
var Ka;

function La(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, La);
    else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
}
t(La, Error);
La.prototype.name = "CustomError";

function Ma(a, b) {
    b.unshift(a);
    La.call(this, qa.apply(null, b));
    b.shift()
}
t(Ma, La);
Ma.prototype.name = "AssertionError";

function Na(a, b) {
    throw new Ma("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}

function Oa(a, b, c) {
    if ("boolean" != typeof a) {
        var d = [da(a), a],
            e = "Assertion failed";
        b ? (e += ": " + b, d = Array.prototype.slice.call(arguments, 2)) : e += ": Expected boolean but got %s: %s.";
        throw new Ma("" + e, d || []);
    }
};
var w = Array.prototype,
    Pa = w.indexOf ? function(a, b, c) {
        return w.indexOf.call(a, b, c)
    } : function(a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (n(a)) return n(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    },
    x = w.forEach ? function(a, b, c) {
        w.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = n(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    },
    Qa = w.filter ? function(a, b, c) {
        return w.filter.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = [], f = 0, h = n(a) ?
                a.split("") : a, k = 0; k < d; k++)
            if (k in h) {
                var s = h[k];
                b.call(c, s, k, a) && (e[f++] = s)
            }
        return e
    },
    Ra = w.map ? function(a, b, c) {
        return w.map.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = Array(d), f = n(a) ? a.split("") : a, h = 0; h < d; h++) h in f && (e[h] = b.call(c, f[h], h, a));
        return e
    };

function Sa(a) {
    var b;
    a: {
        b = Ta;
        for (var c = a.length, d = n(a) ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) {
                b = e;
                break a
            }
        b = -1
    }
    return 0 > b ? null : n(a) ? a.charAt(b) : a[b]
}

function z(a, b) {
    return 0 <= Pa(a, b)
}

function Ua(a, b) {
    var c = Pa(a, b),
        d;
    (d = 0 <= c) && w.splice.call(a, c, 1);
    return d
}

function Va(a) {
    return w.concat.apply(w, arguments)
}

function Wa(a) {
    return w.concat.apply(w, arguments)
}

function Xa(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c
    }
    return []
}

function Ya(a, b, c) {
    return 2 >= arguments.length ? w.slice.call(a, b) : w.slice.call(a, b, c)
}

function Za(a) {
    for (var b = {}, c = 0, d = 0; d < a.length;) {
        var e = a[d++],
            f = ha(e) ? "o" + ja(e) : (typeof e).charAt(0) + e;
        Object.prototype.hasOwnProperty.call(b, f) || (b[f] = !0, a[c++] = e)
    }
    a.length = c
};
var $a = Ha("Opera") || Ha("OPR"),
    A = Ha("Trident") || Ha("MSIE"),
    ab = Ha("Gecko") && -1 == Ea.toLowerCase().indexOf("webkit") && !(Ha("Trident") || Ha("MSIE")),
    B = -1 != Ea.toLowerCase().indexOf("webkit"),
    bb = Ea,
    cb = !!bb && -1 != bb.indexOf("iPad");

function db() {
    var a = l.document;
    return a ? a.documentMode : void 0
}
var eb = function() {
        var a = "",
            b;
        if ($a && l.opera) return a = l.opera.version, fa(a) ? a() : a;
        ab ? b = /rv\:([^\);]+)(\)|;)/ : A ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : B && (b = /WebKit\/(\S+)/);
        b && (a = (a = b.exec(Ea)) ? a[1] : "");
        return A && (b = db(), b > parseFloat(a)) ? String(b) : a
    }(),
    fb = {};

function C(a) {
    var b;
    if (!(b = fb[a])) {
        b = 0;
        for (var c = ra(String(eb)).split("."), d = ra(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
            var h = c[f] || "",
                k = d[f] || "",
                s = RegExp("(\\d*)(\\D*)", "g"),
                u = RegExp("(\\d*)(\\D*)", "g");
            do {
                var y = s.exec(h) || ["", "", ""],
                    D = u.exec(k) || ["", "", ""];
                if (0 == y[0].length && 0 == D[0].length) break;
                b = Aa(0 == y[1].length ? 0 : parseInt(y[1], 10), 0 == D[1].length ? 0 : parseInt(D[1], 10)) || Aa(0 == y[2].length, 0 == D[2].length) || Aa(y[2], D[2])
            } while (0 == b)
        }
        b = fb[a] = 0 <= b
    }
    return b
}
var gb = l.document,
    lb = gb && A ? db() || ("CSS1Compat" == gb.compatMode ? parseInt(eb, 10) : 5) : void 0;
var mb = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

function nb(a) {
    if (ob) {
        ob = !1;
        var b = l.location;
        if (b) {
            var c = b.href;
            if (c && (c = (c = nb(c)[3] || null) && decodeURIComponent(c)) && c != b.hostname) throw ob = !0, Error();
        }
    }
    return a.match(mb)
}
var ob = B;

function pb(a, b) {
    for (var c in a) b.call(void 0, a[c], c, a)
}

function qb(a) {
    var b = [],
        c = 0,
        d;
    for (d in a) b[c++] = a[d];
    return b
}

function rb(a) {
    var b = [],
        c = 0,
        d;
    for (d in a) b[c++] = d;
    return b
}

function sb() {
    var a = tb,
        b;
    for (b in a) return !1;
    return !0
}
var ub = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function vb(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < ub.length; f++) c = ub[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
}

function wb(a) {
    var b = arguments.length;
    if (1 == b && m(arguments[0])) return wb.apply(null, arguments[0]);
    for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
    return c
};

function xb() {
    return !0
};
var yb = "StopIteration" in l ? l.StopIteration : Error("StopIteration");

function zb() {}
zb.prototype.next = function() {
    throw yb;
};
zb.prototype.Jb = function() {
    return this
};

function Ab(a) {
    if (a instanceof zb) return a;
    if ("function" == typeof a.Jb) return a.Jb(!1);
    if (ea(a)) {
        var b = 0,
            c = new zb;
        c.next = function() {
            for (;;) {
                if (b >= a.length) throw yb;
                if (b in a) return a[b++];
                b++
            }
        };
        return c
    }
    throw Error("Not implemented");
}

function Bb(a) {
    var b = Cb;
    if (ea(b)) try {
        x(b, a, void 0)
    } catch (c) {
        if (c !== yb) throw c;
    } else {
        b = Ab(b);
        try {
            for (;;) a.call(void 0, b.next(), void 0, b)
        } catch (d) {
            if (d !== yb) throw d;
        }
    }
};

function Db(a, b) {
    this.F = {};
    this.c = [];
    this.Eb = this.f = 0;
    var c = arguments.length;
    if (1 < c) {
        if (c % 2) throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else if (a) {
        a instanceof Db ? (c = a.T(), d = a.M()) : (c = rb(a), d = qb(a));
        for (var e = 0; e < c.length; e++) this.set(c[e], d[e])
    }
}
g = Db.prototype;
g.M = function() {
    Eb(this);
    for (var a = [], b = 0; b < this.c.length; b++) a.push(this.F[this.c[b]]);
    return a
};
g.T = function() {
    Eb(this);
    return this.c.concat()
};
g.Fa = function(a) {
    return Fb(this.F, a)
};
g.remove = function(a) {
    return Fb(this.F, a) ? (delete this.F[a], this.f--, this.Eb++, this.c.length > 2 * this.f && Eb(this), !0) : !1
};

function Eb(a) {
    if (a.f != a.c.length) {
        for (var b = 0, c = 0; b < a.c.length;) {
            var d = a.c[b];
            Fb(a.F, d) && (a.c[c++] = d);
            b++
        }
        a.c.length = c
    }
    if (a.f != a.c.length) {
        for (var e = {}, c = b = 0; b < a.c.length;) d = a.c[b], Fb(e, d) || (a.c[c++] = d, e[d] = 1), b++;
        a.c.length = c
    }
}
g.get = function(a, b) {
    return Fb(this.F, a) ? this.F[a] : b
};
g.set = function(a, b) {
    Fb(this.F, a) || (this.f++, this.c.push(a), this.Eb++);
    this.F[a] = b
};
g.forEach = function(a, b) {
    for (var c = this.T(), d = 0; d < c.length; d++) {
        var e = c[d],
            f = this.get(e);
        a.call(b, f, e, this)
    }
};
g.A = function() {
    return new Db(this)
};
g.Jb = function(a) {
    Eb(this);
    var b = 0,
        c = this.c,
        d = this.F,
        e = this.Eb,
        f = this,
        h = new zb;
    h.next = function() {
        for (;;) {
            if (e != f.Eb) throw Error("The map has changed since the iterator was created");
            if (b >= c.length) throw yb;
            var h = c[b++];
            return a ? h : d[h]
        }
    };
    return h
};

function Fb(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};

function Gb(a) {
    if ("function" == typeof a.M) return a.M();
    if (n(a)) return a.split("");
    if (ea(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    }
    return qb(a)
}

function Hb(a, b) {
    if ("function" == typeof a.forEach) a.forEach(b, void 0);
    else if (ea(a) || n(a)) x(a, b, void 0);
    else {
        var c;
        if ("function" == typeof a.T) c = a.T();
        else if ("function" != typeof a.M)
            if (ea(a) || n(a)) {
                c = [];
                for (var d = a.length, e = 0; e < d; e++) c.push(e)
            } else c = rb(a);
        else c = void 0;
        for (var d = Gb(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
    }
};

function Ib(a, b) {
    var c;
    if (a instanceof Ib) this.p = void 0 !== b ? b : a.p, Jb(this, a.Aa), c = a.Db, E(this), this.Db = c, c = a.$, E(this), this.$ = c, Kb(this, a.ub), c = a.ta, E(this), this.ta = c, Lb(this, a.ja.A()), c = a.Ha, E(this), this.Ha = c;
    else if (a && (c = nb(String(a)))) {
        this.p = !!b;
        Jb(this, c[1] || "", !0);
        var d = c[2] || "";
        E(this);
        this.Db = d ? decodeURIComponent(d) : "";
        d = c[3] || "";
        E(this);
        this.$ = d ? decodeURIComponent(d) : "";
        Kb(this, c[4]);
        d = c[5] || "";
        E(this);
        this.ta = d ? decodeURIComponent(d) : "";
        Lb(this, c[6] || "", !0);
        c = c[7] || "";
        E(this);
        this.Ha = c ?
            decodeURIComponent(c) : ""
    } else this.p = !!b, this.ja = new Mb(null, 0, this.p)
}
g = Ib.prototype;
g.Aa = "";
g.Db = "";
g.$ = "";
g.ub = null;
g.ta = "";
g.Ha = "";
g.Jd = !1;
g.p = !1;
g.toString = function() {
    var a = [],
        b = this.Aa;
    b && a.push(Nb(b, Ob), ":");
    if (b = this.$) {
        a.push("//");
        var c = this.Db;
        c && a.push(Nb(c, Ob), "@");
        a.push(encodeURIComponent(String(b)));
        b = this.ub;
        null != b && a.push(":", String(b))
    }
    if (b = this.ta) this.$ && "/" != b.charAt(0) && a.push("/"), a.push(Nb(b, "/" == b.charAt(0) ? Pb : Qb));
    (b = this.ja.toString()) && a.push("?", b);
    (b = this.Ha) && a.push("#", Nb(b, Rb));
    return a.join("")
};
g.A = function() {
    return new Ib(this)
};

function Jb(a, b, c) {
    E(a);
    a.Aa = c ? b ? decodeURIComponent(b) : "" : b;
    a.Aa && (a.Aa = a.Aa.replace(/:$/, ""))
}

function Kb(a, b) {
    E(a);
    if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
        a.ub = b
    } else a.ub = null
}

function Lb(a, b, c) {
    E(a);
    b instanceof Mb ? (a.ja = b, a.ja.pc(a.p)) : (c || (b = Nb(b, Sb)), a.ja = new Mb(b, 0, a.p))
}

function E(a) {
    if (a.Jd) throw Error("Tried to modify a read-only Uri");
}
g.pc = function(a) {
    this.p = a;
    this.ja && this.ja.pc(a);
    return this
};

function Wb(a) {
    return a instanceof Ib ? a.A() : new Ib(a, void 0)
}

function Nb(a, b) {
    return n(a) ? encodeURI(a).replace(b, Xb) : null
}

function Xb(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Ob = /[#\/\?@]/g,
    Qb = /[\#\?:]/g,
    Pb = /[\#\?]/g,
    Sb = /[\#\?@]/g,
    Rb = /#/g;

function Mb(a, b, c) {
    this.n = a || null;
    this.p = !!c
}

function Yb(a) {
    if (!a.d && (a.d = new Db, a.f = 0, a.n))
        for (var b = a.n.split("&"), c = 0; c < b.length; c++) {
            var d = b[c].indexOf("="),
                e = null,
                f = null;
            0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
            e = decodeURIComponent(e.replace(/\+/g, " "));
            e = Zb(a, e);
            a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
        }
}
g = Mb.prototype;
g.d = null;
g.f = null;
g.add = function(a, b) {
    Yb(this);
    this.n = null;
    a = Zb(this, a);
    var c = this.d.get(a);
    c || this.d.set(a, c = []);
    c.push(b);
    this.f++;
    return this
};
g.remove = function(a) {
    Yb(this);
    a = Zb(this, a);
    return this.d.Fa(a) ? (this.n = null, this.f -= this.d.get(a).length, this.d.remove(a)) : !1
};
g.Fa = function(a) {
    Yb(this);
    a = Zb(this, a);
    return this.d.Fa(a)
};
g.T = function() {
    Yb(this);
    for (var a = this.d.M(), b = this.d.T(), c = [], d = 0; d < b.length; d++)
        for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c
};
g.M = function(a) {
    Yb(this);
    var b = [];
    if (n(a)) this.Fa(a) && (b = Va(b, this.d.get(Zb(this, a))));
    else {
        a = this.d.M();
        for (var c = 0; c < a.length; c++) b = Va(b, a[c])
    }
    return b
};
g.set = function(a, b) {
    Yb(this);
    this.n = null;
    a = Zb(this, a);
    this.Fa(a) && (this.f -= this.d.get(a).length);
    this.d.set(a, [b]);
    this.f++;
    return this
};
g.get = function(a, b) {
    var c = a ? this.M(a) : [];
    return 0 < c.length ? String(c[0]) : b
};
g.toString = function() {
    if (this.n) return this.n;
    if (!this.d) return "";
    for (var a = [], b = this.d.T(), c = 0; c < b.length; c++)
        for (var d = b[c], e = encodeURIComponent(String(d)), d = this.M(d), f = 0; f < d.length; f++) {
            var h = e;
            "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
            a.push(h)
        }
    return this.n = a.join("&")
};
g.A = function() {
    var a = new Mb;
    a.n = this.n;
    this.d && (a.d = this.d.A(), a.f = this.f);
    return a
};

function Zb(a, b) {
    var c = String(b);
    a.p && (c = c.toLowerCase());
    return c
}
g.pc = function(a) {
    a && !this.p && (Yb(this), this.n = null, this.d.forEach(function(a, c) {
        var d = c.toLowerCase();
        c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.n = null, this.d.set(Zb(this, d), Xa(a)), this.f += a.length))
    }, this));
    this.p = a
};
var $b = "closure_listenable_" + (1E6 * Math.random() | 0);

function ac(a) {
    return !(!a || !a[$b])
}
var bc = 0;

function cc(a, b, c, d, e) {
    this.fa = a;
    this.vb = null;
    this.src = b;
    this.type = c;
    this.Wa = !!d;
    this.hb = e;
    this.key = ++bc;
    this.ya = this.Va = !1
}

function dc(a) {
    a.ya = !0;
    a.fa = null;
    a.vb = null;
    a.src = null;
    a.hb = null
};

function ec(a) {
    this.src = a;
    this.j = {};
    this.Pa = 0
}
ec.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.j[f];
    a || (a = this.j[f] = [], this.Pa++);
    var h = fc(a, b, d, e); - 1 < h ? (b = a[h], c || (b.Va = !1)) : (b = new cc(b, this.src, f, !!d, e), b.Va = c, a.push(b));
    return b
};
ec.prototype.remove = function(a, b, c, d) {
    a = a.toString();
    if (!(a in this.j)) return !1;
    var e = this.j[a];
    b = fc(e, b, c, d);
    return -1 < b ? (dc(e[b]), w.splice.call(e, b, 1), 0 == e.length && (delete this.j[a], this.Pa--), !0) : !1
};

function gc(a, b) {
    var c = b.type;
    if (!(c in a.j)) return !1;
    var d = Ua(a.j[c], b);
    d && (dc(b), 0 == a.j[c].length && (delete a.j[c], a.Pa--));
    return d
}
ec.prototype.wb = function(a) {
    a = a && a.toString();
    var b = 0,
        c;
    for (c in this.j)
        if (!a || c == a) {
            for (var d = this.j[c], e = 0; e < d.length; e++) ++b, dc(d[e]);
            delete this.j[c];
            this.Pa--
        }
    return b
};
ec.prototype.Ia = function(a, b, c, d) {
    a = this.j[a.toString()];
    var e = -1;
    a && (e = fc(a, b, c, d));
    return -1 < e ? a[e] : null
};

function fc(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.ya && f.fa == b && f.Wa == !!c && f.hb == d) return e
    }
    return -1
};
var hc = !A || A && 9 <= lb,
    ic = A && !C("9");
!B || C("528");
ab && C("1.9b") || A && C("8") || $a && C("9.5") || B && C("528");
ab && !C("8") || A && C("9");

function F() {
    0 != jc && (kc[ja(this)] = this)
}
var jc = 0,
    kc = {};
F.prototype.Qb = !1;
F.prototype.Ga = function() {
    if (!this.Qb && (this.Qb = !0, this.b(), 0 != jc)) {
        var a = ja(this);
        delete kc[a]
    }
};
F.prototype.b = function() {
    if (this.Xc)
        for (; this.Xc.length;) this.Xc.shift()()
};

function G(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.wa = !1;
    this.ed = !0
}
G.prototype.b = function() {};
G.prototype.Ga = function() {};
G.prototype.preventDefault = function() {
    this.defaultPrevented = !0;
    this.ed = !1
};

function lc(a) {
    lc[" "](a);
    return a
}
lc[" "] = ca;

function mc(a, b) {
    G.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.Ec = this.state = null;
    if (a) {
        var c = this.type = a.type;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (ab) {
                var e;
                a: {
                    try {
                        lc(d.nodeName);
                        e = !0;
                        break a
                    } catch (f) {}
                    e = !1
                }
                e || (d = null)
            }
        } else "mouseover" ==
            c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
        this.relatedTarget = d;
        this.offsetX = B || void 0 !== a.offsetX ? a.offsetX : a.layerX;
        this.offsetY = B || void 0 !== a.offsetY ? a.offsetY : a.layerY;
        this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey =
            a.metaKey;
        this.state = a.state;
        this.Ec = a;
        a.defaultPrevented && this.preventDefault()
    }
}
t(mc, G);
mc.prototype.preventDefault = function() {
    mc.i.preventDefault.call(this);
    var a = this.Ec;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, ic) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
};
mc.prototype.b = function() {};
var nc = "closure_lm_" + (1E6 * Math.random() | 0),
    oc = {},
    pc = 0;

function H(a, b, c, d, e) {
    if (m(b)) {
        for (var f = 0; f < b.length; f++) H(a, b[f], c, d, e);
        return null
    }
    c = qc(c);
    return ac(a) ? a.V(b, c, d, e) : rc(a, b, c, !1, d, e)
}

function rc(a, b, c, d, e, f) {
    if (!b) throw Error("Invalid event type");
    var h = !!e,
        k = sc(a);
    k || (a[nc] = k = new ec(a));
    c = k.add(b, c, d, e, f);
    if (c.vb) return c;
    d = tc();
    c.vb = d;
    d.src = a;
    d.fa = c;
    a.addEventListener ? a.addEventListener(b.toString(), d, h) : a.attachEvent(uc(b.toString()), d);
    pc++;
    return c
}

function tc() {
    var a = vc,
        b = hc ? function(c) {
            return a.call(b.src, b.fa, c)
        } : function(c) {
            c = a.call(b.src, b.fa, c);
            if (!c) return c
        };
    return b
}

function wc(a, b, c, d, e) {
    if (m(b)) {
        for (var f = 0; f < b.length; f++) wc(a, b[f], c, d, e);
        return null
    }
    c = qc(c);
    return ac(a) ? a.Uc(b, c, d, e) : rc(a, b, c, !0, d, e)
}

function xc(a, b, c, d, e) {
    if (m(b))
        for (var f = 0; f < b.length; f++) xc(a, b[f], c, d, e);
    else c = qc(c), ac(a) ? a.sc(b, c, d, e) : a && (a = sc(a)) && (b = a.Ia(b, c, !!d, e)) && yc(b)
}

function yc(a) {
    if ("number" == typeof a || !a || a.ya) return !1;
    var b = a.src;
    if (ac(b)) return gc(b.L, a);
    var c = a.type,
        d = a.vb;
    b.removeEventListener ? b.removeEventListener(c, d, a.Wa) : b.detachEvent && b.detachEvent(uc(c), d);
    pc--;
    (c = sc(b)) ? (gc(c, a), 0 == c.Pa && (c.src = null, b[nc] = null)) : dc(a);
    return !0
}

function uc(a) {
    return a in oc ? oc[a] : oc[a] = "on" + a
}

function zc(a, b, c, d) {
    var e = 1;
    if (a = sc(a))
        if (b = a.j[b.toString()])
            for (b = b.concat(), a = 0; a < b.length; a++) {
                var f = b[a];
                f && f.Wa == c && !f.ya && (e &= !1 !== Ac(f, d))
            }
        return Boolean(e)
}

function Ac(a, b) {
    var c = a.fa,
        d = a.hb || a.src;
    a.Va && yc(a);
    return c.call(d, b)
}

function vc(a, b) {
    if (a.ya) return !0;
    if (!hc) {
        var c = b || ba("window.event"),
            d = new mc(c, this),
            e = !0;
        if (!(0 > c.keyCode || void 0 != c.returnValue)) {
            a: {
                var f = !1;
                if (0 == c.keyCode) try {
                    c.keyCode = -1;
                    break a
                } catch (h) {
                    f = !0
                }
                if (f || void 0 == c.returnValue) c.returnValue = !0
            }
            c = [];
            for (f = d.currentTarget; f; f = f.parentNode) c.push(f);
            for (var f = a.type, k = c.length - 1; !d.wa && 0 <= k; k--) d.currentTarget = c[k],
            e &= zc(c[k], f, !0, d);
            for (k = 0; !d.wa && k < c.length; k++) d.currentTarget = c[k],
            e &= zc(c[k], f, !1, d)
        }
        return e
    }
    return Ac(a, new mc(b, this))
}

function sc(a) {
    a = a[nc];
    return a instanceof ec ? a : null
}
var Dc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

function qc(a) {
    return fa(a) ? a : a[Dc] || (a[Dc] = function(b) {
        return a.handleEvent(b)
    })
};

function Ec(a) {
    F.call(this);
    this.ra = a;
    this.c = {}
}
t(Ec, F);
var Fc = [];
g = Ec.prototype;
g.V = function(a, b, c, d) {
    m(b) || (b && (Fc[0] = b.toString()), b = Fc);
    for (var e = 0; e < b.length; e++) {
        var f = H(a, b[e], c || this.handleEvent, d || !1, this.ra || this);
        if (!f) break;
        this.c[f.key] = f
    }
    return this
};
g.Uc = function(a, b, c, d) {
    return Gc(this, a, b, c, d)
};

function Gc(a, b, c, d, e, f) {
    if (m(c))
        for (var h = 0; h < c.length; h++) Gc(a, b, c[h], d, e, f);
    else {
        b = wc(b, c, d || a.handleEvent, e, f || a.ra || a);
        if (!b) return a;
        a.c[b.key] = b
    }
    return a
}
g.sc = function(a, b, c, d, e) {
    if (m(b))
        for (var f = 0; f < b.length; f++) this.sc(a, b[f], c, d, e);
    else c = c || this.handleEvent, e = e || this.ra || this, c = qc(c), d = !!d, b = ac(a) ? a.Ia(b, c, d, e) : a ? (a = sc(a)) ? a.Ia(b, c, d, e) : null : null, b && (yc(b), delete this.c[b.key]);
    return this
};
g.wb = function() {
    pb(this.c, yc);
    this.c = {}
};
g.b = function() {
    Ec.i.b.call(this);
    this.wb()
};
g.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
};

function Hc(a, b) {
    return a.dataset ? b in a.dataset ? a.dataset[b] : null : a.getAttribute("data-" + Ca(b))
}

function Ic(a) {
    return a.dataset ? "url" in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + Ca("url")) : !!a.getAttribute("data-" + Ca("url"))
};

function I() {
    F.call(this);
    this.L = new ec(this);
    this.od = this
}
t(I, F);
I.prototype[$b] = !0;
g = I.prototype;
g.tb = null;
g.qc = function(a) {
    this.tb = a
};
g.addEventListener = function(a, b, c, d) {
    H(this, a, b, c, d)
};
g.removeEventListener = function(a, b, c, d) {
    xc(this, a, b, c, d)
};
g.dispatchEvent = function(a) {
    var b, c = this.tb;
    if (c)
        for (b = []; c; c = c.tb) b.push(c);
    var c = this.od,
        d = a.type || a;
    if (n(a)) a = new G(a, c);
    else if (a instanceof G) a.target = a.target || c;
    else {
        var e = a;
        a = new G(d, c);
        vb(a, e)
    }
    var e = !0,
        f;
    if (b)
        for (var h = b.length - 1; !a.wa && 0 <= h; h--) f = a.currentTarget = b[h], e = Jc(f, d, !0, a) && e;
    a.wa || (f = a.currentTarget = c, e = Jc(f, d, !0, a) && e, a.wa || (e = Jc(f, d, !1, a) && e));
    if (b)
        for (h = 0; !a.wa && h < b.length; h++) f = a.currentTarget = b[h], e = Jc(f, d, !1, a) && e;
    return e
};
g.b = function() {
    I.i.b.call(this);
    this.L && this.L.wb(void 0);
    this.tb = null
};
g.V = function(a, b, c, d) {
    return this.L.add(String(a), b, !1, c, d)
};
g.Uc = function(a, b, c, d) {
    return this.L.add(String(a), b, !0, c, d)
};
g.sc = function(a, b, c, d) {
    return this.L.remove(String(a), b, c, d)
};

function Jc(a, b, c, d) {
    b = a.L.j[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
        var h = b[f];
        if (h && !h.ya && h.Wa == c) {
            var k = h.fa,
                s = h.hb || h.src;
            h.Va && gc(a.L, h);
            e = !1 !== k.call(s, d) && e
        }
    }
    return e && !1 != d.ed
}
g.Ia = function(a, b, c, d) {
    return this.L.Ia(String(a), b, c, d)
};

function Kc(a, b, c) {
    if (fa(a)) c && (a = q(a, c));
    else if (a && "function" == typeof a.handleEvent) a = q(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < b ? -1 : l.setTimeout(a, b || 0)
};

function Lc(a, b, c) {
    F.call(this);
    this.dc = a;
    this.Id = b || 0;
    this.ra = c;
    this.qd = q(this.vd, this)
}
t(Lc, F);
g = Lc.prototype;
g.U = 0;
g.b = function() {
    Lc.i.b.call(this);
    this.stop();
    delete this.dc;
    delete this.ra
};
g.start = function(a) {
    this.stop();
    this.U = Kc(this.qd, void 0 !== a ? a : this.Id)
};
g.stop = function() {
    this.ac() && l.clearTimeout(this.U);
    this.U = 0
};
g.ac = function() {
    return 0 != this.U
};
g.vd = function() {
    this.U = 0;
    this.dc && this.dc.call(this.ra)
};
var tb = {},
    Mc = null;

function Nc(a) {
    a = ja(a);
    delete tb[a];
    sb() && Mc && Mc.stop()
}

function Oc() {
    Mc || (Mc = new Lc(function() {
        Pc()
    }, 20));
    var a = Mc;
    a.ac() || a.start()
}

function Pc() {
    var a = pa();
    pb(tb, function(b) {
        Qc(b, a)
    });
    sb() || Oc()
};

function Rc() {
    I.call(this);
    this.I = Sc;
    this.Dc = this.startTime = null
}
t(Rc, I);
var Sc = 0;
Rc.prototype.C = function(a) {
    this.dispatchEvent(a)
};

function Tc(a, b, c, d) {
    Rc.call(this);
    if (!m(a) || !m(b)) throw Error("Start and end parameters must be arrays");
    if (a.length != b.length) throw Error("Start and end points must be the same length");
    this.Na = a;
    this.xd = b;
    this.duration = c;
    this.uc = d;
    this.coords = []
}
t(Tc, Rc);
g = Tc.prototype;
g.progress = 0;
g.play = function(a) {
    if (a || this.I == Sc) this.progress = 0, this.coords = this.Na;
    else if (1 == this.I) return !1;
    Nc(this);
    this.startTime = a = pa(); - 1 == this.I && (this.startTime -= this.duration * this.progress);
    this.Dc = this.startTime + this.duration;
    this.progress || this.C("begin");
    this.C("play"); - 1 == this.I && this.C("resume");
    this.I = 1;
    var b = ja(this);
    b in tb || (tb[b] = this);
    Oc();
    Qc(this, a);
    return !0
};
g.stop = function(a) {
    Nc(this);
    this.I = Sc;
    a && (this.progress = 1);
    Uc(this, this.progress);
    this.C("stop");
    this.C("end")
};
g.b = function() {
    this.I == Sc || this.stop(!1);
    this.C("destroy");
    Tc.i.b.call(this)
};

function Qc(a, b) {
    a.progress = (b - a.startTime) / (a.Dc - a.startTime);
    1 <= a.progress && (a.progress = 1);
    Uc(a, a.progress);
    1 == a.progress ? (a.I = Sc, Nc(a), a.C("finish"), a.C("end")) : 1 == a.I && a.C("animate")
}

function Uc(a, b) {
    fa(a.uc) && (b = a.uc(b));
    a.coords = Array(a.Na.length);
    for (var c = 0; c < a.Na.length; c++) a.coords[c] = (a.xd[c] - a.Na[c]) * b + a.Na[c]
}
g.C = function(a) {
    this.dispatchEvent(new Vc(a, this))
};

function Vc(a, b) {
    G.call(this, a);
    this.coords = b.coords;
    this.x = b.coords[0];
    this.y = b.coords[1];
    this.z = b.coords[2];
    this.duration = b.duration;
    this.progress = b.progress;
    this.state = b.I
}
t(Vc, G);

function Wc(a) {
    a = a.className;
    return n(a) && a.match(/\S+/g) || []
}

function Xc(a, b) {
    for (var c = Wc(a), d = Ya(arguments, 1), e = c.length + d.length, f = c, h = 0; h < d.length; h++) z(f, d[h]) || f.push(d[h]);
    a.className = c.join(" ");
    return c.length == e
};

function J(a, b) {
    this.width = a;
    this.height = b
}
J.prototype.A = function() {
    return new J(this.width, this.height)
};
J.prototype.toString = function() {
    return "(" + this.width + " x " + this.height + ")"
};
J.prototype.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
J.prototype.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
var Yc = !A || A && 9 <= lb,
    Zc = !ab && !A || A && A && 9 <= lb || ab && C("1.9.1");
A && C("9");
var $c = A || $a || B;

function K(a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0
}
K.prototype.A = function() {
    return new K(this.x, this.y)
};
K.prototype.toString = function() {
    return "(" + this.x + ", " + this.y + ")"
};
K.prototype.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
K.prototype.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};

function N(a) {
    return a ? new ad(bd(a)) : Ka || (Ka = new ad)
}

function cd(a, b) {
    return n(b) ? a.getElementById(b) : b
}

function O(a, b) {
    var c = b || document;
    return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : dd("*", a, b)
}

function P(a, b) {
    var c = b || document,
        d = null;
    return (d = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : dd("*", a, b)[0]) || null
}

function dd(a, b, c) {
    var d = document;
    c = c || d;
    a = a && "*" != a ? a.toUpperCase() : "";
    if (c.querySelectorAll && c.querySelector && (a || b)) return c.querySelectorAll(a + (b ? "." + b : ""));
    if (b && c.getElementsByClassName) {
        c = c.getElementsByClassName(b);
        if (a) {
            for (var d = {}, e = 0, f = 0, h; h = c[f]; f++) a == h.nodeName && (d[e++] = h);
            d.length = e;
            return d
        }
        return c
    }
    c = c.getElementsByTagName(a || "*");
    if (b) {
        d = {};
        for (f = e = 0; h = c[f]; f++) a = h.className, "function" == typeof a.split && z(a.split(/\s+/), b) && (d[e++] = h);
        d.length = e;
        return d
    }
    return c
}

function ed(a, b) {
    pb(b, function(b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in fd ? a.setAttribute(fd[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
    })
}
var fd = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
};

function gd(a) {
    a = a.document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return new J(a.clientWidth, a.clientHeight)
}

function hd(a) {
    var b = B || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
    a = a.parentWindow || a.defaultView;
    return A && C("10") && a.pageYOffset != b.scrollTop ? new K(b.scrollLeft, b.scrollTop) : new K(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
}

function id(a, b, c) {
    return jd(document, arguments)
}

function jd(a, b) {
    var c = b[0],
        d = b[1];
    if (!Yc && d && (d.name || d.type)) {
        c = ["<", c];
        d.name && c.push(' name="', sa(d.name), '"');
        if (d.type) {
            c.push(' type="', sa(d.type), '"');
            var e = {};
            vb(e, d);
            delete e.type;
            d = e
        }
        c.push(">");
        c = c.join("")
    }
    c = a.createElement(c);
    d && (n(d) ? c.className = d : m(d) ? Xc.apply(null, [c].concat(d)) : ed(c, d));
    2 < b.length && kd(a, c, b);
    return c
}

function kd(a, b, c) {
    function d(c) {
        c && b.appendChild(n(c) ? a.createTextNode(c) : c)
    }
    for (var e = 2; e < c.length; e++) {
        var f = c[e];
        !ea(f) || ha(f) && 0 < f.nodeType ? d(f) : x(ld(f) ? Xa(f) : f, d)
    }
}

function md(a) {
    a && a.parentNode && a.parentNode.removeChild(a)
}

function nd(a) {
    var b;
    if ($c && !(A && C("9") && !C("10") && l.SVGElement && a instanceof l.SVGElement) && (b = a.parentElement)) return b;
    b = a.parentNode;
    return ha(b) && 1 == b.nodeType ? b : null
}

function bd(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}

function ld(a) {
    if (a && "number" == typeof a.length) {
        if (ha(a)) return "function" == typeof a.item || "string" == typeof a.item;
        if (fa(a)) return "function" == typeof a.item
    }
    return !1
}

function od(a, b, c) {
    if (!b && !c) return null;
    var d = b ? b.toUpperCase() : null;
    return pd(a, function(a) {
        var b;
        if (b = !d || a.nodeName == d)(b = !c) || (b = z(Wc(a), c));
        return b
    }, !0)
}

function pd(a, b, c) {
    c || (a = a.parentNode);
    for (c = 0; a;) {
        if (b(a)) return a;
        a = a.parentNode;
        c++
    }
    return null
}

function ad(a) {
    this.t = a || l.document || document
}
g = ad.prototype;
g.D = N;
g.u = function(a) {
    return cd(this.t, a)
};
g.ab = function(a, b, c) {
    return jd(this.t, arguments)
};
g.createElement = function(a) {
    return this.t.createElement(a)
};
g.createTextNode = function(a) {
    return this.t.createTextNode(String(a))
};

function qd(a) {
    return "CSS1Compat" == a.t.compatMode
}

function rd(a) {
    a = a.t;
    return a.parentWindow || a.defaultView
}
g.appendChild = function(a, b) {
    a.appendChild(b)
};
g.Jc = function(a) {
    return Zc && void 0 != a.children ? a.children : Qa(a.childNodes, function(a) {
        return 1 == a.nodeType
    })
};
g.contains = function(a, b) {
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a
};

function sd(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
}
g = sd.prototype;
g.A = function() {
    return new sd(this.top, this.right, this.bottom, this.left)
};
g.toString = function() {
    return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
};
g.contains = function(a) {
    return this && a ? a instanceof sd ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
g.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
g.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};

function td(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
}
g = td.prototype;
g.A = function() {
    return new td(this.left, this.top, this.width, this.height)
};
g.toString = function() {
    return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
};
g.contains = function(a) {
    return a instanceof td ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
g.floor = function() {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
g.round = function() {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};

function Q(a, b, c) {
    n(b) ? ud(a, c, b) : pb(b, oa(ud, a))
}

function ud(a, b, c) {
    a: if (c = Ba(c), void 0 === a.style[c]) {
        var d = (B ? "Webkit" : ab ? "Moz" : A ? "ms" : $a ? "O" : null) + Da(c);
        if (void 0 !== a.style[d]) {
            c = d;
            break a
        }
    }c && (a.style[c] = b)
}

function R(a, b) {
    var c = bd(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
}

function vd(a, b) {
    return R(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}

function wd(a) {
    a = a ? bd(a) : document;
    return !A || A && 9 <= lb || qd(N(a)) ? a.documentElement : a.body
}

function xd(a) {
    var b;
    try {
        b = a.getBoundingClientRect()
    } catch (c) {
        return {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }
    }
    A && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}

function yd(a) {
    if (A && !(A && 8 <= lb)) return a.offsetParent;
    var b = bd(a),
        c = vd(a, "position"),
        d = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)
        if (c = vd(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
    return null
}

function zd(a) {
    var b, c = bd(a),
        d = vd(a, "position"),
        e = ab && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
        f = new K(0, 0),
        h = wd(c);
    if (a == h) return f;
    if (a.getBoundingClientRect) b = xd(a), a = N(c), a = hd(a.t), f.x = b.left + a.x, f.y = b.top + a.y;
    else if (c.getBoxObjectFor && !e) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(h), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY;
    else {
        b = a;
        do {
            f.x += b.offsetLeft;
            f.y += b.offsetTop;
            b != a && (f.x += b.clientLeft || 0, f.y += b.clientTop ||
                0);
            if (B && "fixed" == vd(b, "position")) {
                f.x += c.body.scrollLeft;
                f.y += c.body.scrollTop;
                break
            }
            b = b.offsetParent
        } while (b && b != a);
        if ($a || B && "absolute" == d) f.y -= c.body.offsetTop;
        for (b = a;
            (b = yd(b)) && b != c.body && b != h;) f.x -= b.scrollLeft, $a && "TR" == b.tagName || (f.y -= b.scrollTop)
    }
    return f
}

function Ad(a, b, c) {
    if (b instanceof J) c = b.height, b = b.width;
    else if (void 0 == c) throw Error("missing height argument");
    a.style.width = Bd(b);
    a.style.height = Bd(c)
}

function Bd(a) {
    "number" == typeof a && (a = Math.round(a) + "px");
    return a
}

function S(a) {
    var b = Cd;
    if ("none" != vd(a, "display")) return b(a);
    var c = a.style,
        d = c.display,
        e = c.visibility,
        f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a
}

function Cd(a) {
    var b = a.offsetWidth,
        c = a.offsetHeight,
        d = B && !b && !c;
    return (void 0 === b || d) && a.getBoundingClientRect ? (a = xd(a), new J(a.right - a.left, a.bottom - a.top)) : new J(b, c)
}

function Dd(a) {
    var b = zd(a);
    a = S(a);
    return new td(b.x, b.y, a.width, a.height)
}

function Ed(a, b, c, d) {
    if (/^\d+px?$/.test(b)) return parseInt(b, 10);
    var e = a.style[c],
        f = a.runtimeStyle[c];
    a.runtimeStyle[c] = a.currentStyle[c];
    a.style[c] = b;
    b = a.style[d];
    a.style[c] = e;
    a.runtimeStyle[c] = f;
    return b
}

function Fd(a, b) {
    var c = a.currentStyle ? a.currentStyle[b] : null;
    return c ? Ed(a, c, "left", "pixelLeft") : 0
}
var Gd = {
    thin: 2,
    medium: 4,
    thick: 6
};

function Hd(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
    var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
    return c in Gd ? Gd[c] : Ed(a, c, "left", "pixelLeft")
};
var U;
U = function(a, b, c) {
    H(a, "click", function(a) {
        a.preventDefault()
    });
    return (new Hammer(a)).on("tap", q(b, c))
};

function Id(a) {
    var b, c = null;
    return function() {
        var d = this,
            e = arguments;
        clearTimeout(c);
        c = setTimeout(function() {
            c = null;
            b = a.apply(d, e)
        }, 200);
        return b
    }
}
var Jd = !Modernizr.touch,
    Kd = !1,
    Ld = [];

function Md(a) {
    Ld.push(a);
    Kd || (Kd = !0, wc(document, "mousemove", function() {
        Jd = !0;
        Kd = !1;
        if (0 < Ld.length)
            for (var a = 0, c; c = Ld[a]; a++) c()
    }))
}
var Nd = window.isScrolling = !1;

function Od(a) {
    a = a || "hoverable";
    if (Jd) {
        V(document.body, a);
        var b = Id(function() {
            Nd = window.isScrolling = !1;
            V(document.body, a)
        });
        H(window, "scroll", function() {
            Nd || (Nd = window.isScrolling = !0, W(document.body, a));
            b()
        })
    } else Md(function() {
        Od(a)
    })
}
var Pd = window.isTouchMoving = !1;

function ae() {
    var a = Id(function() {
        Pd = window.isTouchMoving = !1
    });
    H(window, "touchmove", function() {
        Pd || (Pd = window.isTouchMoving = !0);
        a()
    })
}

function be(a) {
    x(a, function(a) {
        a = a.lastChild;
        var c;
        a && 3 == a.nodeType && (c = a.nodeValue.trim(), a.nodeValue = c.replace(/\s+([^\s]+\s*)$/g, "\u00a0$1"))
    })
};

function ce(a) {
    return 1 - Math.pow(1 - a, 3)
};

function de() {
    I.call(this);
    this.lc = 600;
    this.Vd = 1;
    this.ld = !0;
    this.Wd = ce;
    this.mc = new K(0, 0);
    this.Ob = hd(document);
    this.na = new N;
    this.pa = new Ec(this)
}
t(de, I);

function ee(a) {
    Oa(!1, "setHashUpdate expects a boolean argument.");
    a.ld = !1
}

function fe(a, b) {
    a.mc = b
}
de.prototype.scrollTo = function(a, b) {
    this.Ob = hd(document);
    var c = b || this.mc;
    a = new K(c.x + a.x, c.y + a.y);
    c = new Tc([this.Ob.x, this.Ob.y], [a.x, a.y], this.Vd * this.lc, this.Wd);
    this.pa.V(c, ["begin", "finish", "animate"], this.Cd);
    c.play()
};
de.prototype.Cd = function(a) {
    switch (a.type) {
        case "begin":
            this.dispatchEvent("b");
            break;
        case "finish":
            window.scrollTo(a.x, a.y);
            this.dispatchEvent("a");
            a.Ga();
            break;
        case "animate":
            window.scrollTo(a.x, a.y)
    }
};

function ge(a, b) {
    var c = dd("a", "gweb-smoothscroll-control", b || null);
    if (c)
        for (var d = 0, e; e = c[d]; d++) {
            var f;
            he(e.href) ? (f = e.href.match(/(#)(.*)/)[2], f = cd(document, f)) : Ic(e) && (f = Hc(e, "url"), f = cd(document, f));
            f && U(e, a.Bd, a)
        }
}
de.prototype.Bd = function(a) {
    a.preventDefault();
    a = a.target;
    var b = od(a, "A", "gweb-smoothscroll-control");
    b && (a = b);
    var c, d;
    he(a.href) ? (c = a.href.match(/(#)(.*)/)[2], d = cd(document, c)) : Ic(a) && (c = Hc(a, "url"), d = cd(document, c));
    ie(d, !0);
    a = zd(d);
    this.scrollTo(a, void 0);
    this.ld && (window.location.hash = c);
    ie(d, !1)
};

function ie(a, b) {
    var c = a.id.match("_temp");
    b != c && (a.id = b ? a.id + "_temp" : a.id.replace("_temp", ""))
}

function he(a) {
    a = Wb(a);
    var b = a.$ + a.ta,
        c = Wb(window.location.hostname + window.location.pathname);
    return b == c.$ + c.ta ? !!a.Ha : !1
};

function je(a) {
    G.call(this, "navigate");
    this.Ba = a
}
t(je, G);

function ke(a, b) {
    I.call(this);
    this.r = a || window;
    this.Bb = b || null;
    H(this.r, "popstate", this.Ma, !1, this);
    H(this.r, "hashchange", this.Ma, !1, this)
}
t(ke, I);
g = ke.prototype;
g.Rb = !1;
g.Qa = !0;
g.ha = "/";

function le(a) {
    if (a.Qa) {
        a = a.r.location.href;
        var b = a.indexOf("#");
        return 0 > b ? "" : a.substring(b + 1)
    }
    return a.Bb ? a.Bb.ie(a.ha, a.r.location) : a.r.location.pathname.substr(a.ha.length)
}

function me(a) {
    var b = ne;
    a != le(b) && (b.r.history.pushState(null, b.r.document.title || "", b.Qa ? "#" + a : b.Bb ? b.Bb.ce(a, b.ha, b.r.location) : b.ha + a + b.r.location.search), b.dispatchEvent(new je(a)))
}
g.b = function() {
    xc(this.r, "popstate", this.Ma, !1, this);
    this.Qa && xc(this.r, "hashchange", this.Ma, !1, this)
};
g.Ma = function() {
    this.Rb && this.dispatchEvent(new je(le(this)))
};
/*
 Portions of this code are from the Dojo Toolkit, received by
 The Closure Library Authors under the BSD license. All other code is
 Copyright 2005-2009 The Closure Library Authors. All Rights Reserved.

The "New" BSD License:

Copyright (c) 2005-2009, The Dojo Foundation
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

 Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
 Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.
 Neither the name of the Dojo Foundation nor the names of its contributors
    may be used to endorse or promote products derived from this software
    without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
var X = function() {
    function a(a, c) {
        if (!a) return [];
        if (a.constructor == Array) return a;
        if (!n(a)) return [a];
        if (n(c) && (c = cd(document, c), !c)) return [];
        c = c || document;
        var e = c.ownerDocument || c.documentElement;
        Ia = c.contentType && "application/xml" == c.contentType || $a && (c.doctype || "[object XMLDocument]" == e.toString()) || !!e && (A ? e.xml : c.xmlVersion || e.xmlVersion);
        return (e = d(a)(c)) && e.pb ? e : b(e)
    }

    function b(a) {
        if (a && a.pb) return a;
        var b = [];
        if (!a || !a.length) return b;
        a[0] && b.push(a[0]);
        if (2 > a.length) return b;
        T++;
        if (A && Ia) {
            var c =
                T + "";
            a[0].setAttribute("_zipIdx", c);
            for (var d = 1, e; e = a[d]; d++) a[d].getAttribute("_zipIdx") != c && b.push(e), e.setAttribute("_zipIdx", c)
        } else if (A && a.td) try {
            for (d = 1; e = a[d]; d++) Tb(e) && b.push(e)
        } catch (f) {} else
            for (a[0] && (a[0]._zipIdx = T), d = 1; e = a[d]; d++) a[d]._zipIdx != T && b.push(e), e._zipIdx = T;
        return b
    }

    function c(a, b) {
        if (!b) return 1;
        var c = Kf(a);
        return b[c] ? 0 : b[c] = 1
    }

    function d(a, b) {
        if (Rd) {
            var c = Sd[a];
            if (c && !b) return c
        }
        if (c = Td[a]) return c;
        var c = a.charAt(0),
            f = -1 == a.indexOf(" ");
        0 <= a.indexOf("#") && f && (b = !0);
        if (!Rd ||
            b || -1 != ">~+".indexOf(c) || A && -1 != a.indexOf(":") || Ud && 0 <= a.indexOf(".") || -1 != a.indexOf(":contains") || -1 != a.indexOf("|=")) {
            var h = a.split(/\s*,\s*/);
            return Td[a] = 2 > h.length ? e(a) : function(a) {
                for (var b = 0, c = [], d; d = h[b++];) c = c.concat(e(d)(a));
                return c
            }
        }
        var k = 0 <= ">~+".indexOf(a.charAt(a.length - 1)) ? a + " *" : a;
        return Sd[a] = function(b) {
            try {
                if (9 != b.nodeType && !f) throw "";
                var c = b.querySelectorAll(k);
                A ? c.td = !0 : c.pb = !0;
                return c
            } catch (e) {
                return d(a, !0)(b)
            }
        }
    }

    function e(a) {
        var b = Vd(ra(a));
        if (1 == b.length) {
            var c = f(b[0]);
            return function(a) {
                if (a = c(a, [])) a.pb = !0;
                return a
            }
        }
        return function(a) {
            a = ib(a);
            for (var c, d, e = b.length, Qd, h, Bc = 0; Bc < e; Bc++) {
                h = [];
                c = b[Bc];
                d = a.length - 1;
                0 < d && (Qd = {}, h.pb = !0);
                d = f(c);
                for (var k = 0; c = a[k]; k++) d(c, h, Qd);
                if (!h.length) break;
                a = h
            }
            return h
        }
    }

    function f(a) {
        var b = Wd[a.xa];
        if (b) return b;
        var c = a.Qc,
            c = c ? c.rb : "",
            d = u(a, {
                oa: 1
            }),
            e = "*" == a.tag,
            f = document.getElementsByClassName;
        if (c) f = {
            oa: 1
        }, e && (f.tag = 1), d = u(a, f), "+" == c ? b = s(d) : "~" == c ? b = k(d) : ">" == c && (b = h(d));
        else if (a.id) d = !a.Vc && e ? xb : u(a, {
            oa: 1,
            id: 1
        }), b = function(b,
            c) {
            var e = N(b).u(a.id),
                f;
            if ((f = e && d(e)) && !(f = 9 == b.nodeType)) {
                for (f = e.parentNode; f && f != b;) f = f.parentNode;
                f = !!f
            }
            if (f) return ib(e, c)
        };
        else if (f && /\{\s*\[native code\]\s*\}/.test(String(f)) && a.K.length && !Ud) var d = u(a, {
                oa: 1,
                K: 1,
                id: 1
            }),
            Lf = a.K.join(" "),
            b = function(a, b) {
                for (var c = ib(0, b), e, f = 0, hb = a.getElementsByClassName(Lf); e = hb[f++];) d(e, a) && c.push(e);
                return c
            };
        else e || a.Vc ? (d = u(a, {
                oa: 1,
                tag: 1,
                id: 1
            }), b = function(b, c) {
                for (var e = ib(0, c), f, hb = 0, h = b.getElementsByTagName(a.Ub()); f = h[hb++];) d(f, b) && e.push(f);
                return e
            }) :
            b = function(b, c) {
                for (var d = ib(0, c), e, f = 0, hb = b.getElementsByTagName(a.Ub()); e = hb[f++];) d.push(e);
                return d
            };
        return Wd[a.xa] = b
    }

    function h(a) {
        a = a || xb;
        return function(b, d, e) {
            for (var f = 0, h = b[Xd]; b = h[f++];) jb(b) && (!e || c(b, e)) && a(b, f) && d.push(b);
            return d
        }
    }

    function k(a) {
        return function(b, d, e) {
            for (b = b[kb]; b;) {
                if (jb(b)) {
                    if (e && !c(b, e)) break;
                    a(b) && d.push(b)
                }
                b = b[kb]
            }
            return d
        }
    }

    function s(a) {
        return function(b, d, e) {
            for (; b = b[kb];)
                if (!Ub || Tb(b)) {
                    e && !c(b, e) || !a(b) || d.push(b);
                    break
                }
            return d
        }
    }

    function u(a, b) {
        if (!a) return xb;
        b = b || {};
        var c = null;
        b.oa || (c = ia(c, Tb));
        b.tag || "*" != a.tag && (c = ia(c, function(b) {
            return b && b.tagName == a.Ub()
        }));
        b.K || x(a.K, function(a, b) {
            var d = new RegExp("(?:^|\\s)" + a + "(?:\\s|$)");
            c = ia(c, function(a) {
                return d.test(a.className)
            });
            c.count = b
        });
        b.ia || x(a.ia, function(a) {
            var b = a.name;
            Cc[b] && (c = ia(c, Cc[b](b, a.value)))
        });
        b.Ta || x(a.Ta, function(a) {
            var b, d = a.Kb;
            a.type && Yd[a.type] ? b = Yd[a.type](d, a.ec) : d.length && (b = Mf(d));
            b && (c = ia(c, b))
        });
        b.id || a.id && (c = ia(c, function(b) {
            return !!b && b.id == a.id
        }));
        c || "default" in b ||
            (c = xb);
        return c
    }

    function y(a) {
        return Vb(a) % 2
    }

    function D(a) {
        return !(Vb(a) % 2)
    }

    function Vb(a) {
        var b = a.parentNode,
            c = 0,
            d = b[Xd],
            e = a._i || -1,
            f = b._l || -1;
        if (!d) return -1;
        d = d.length;
        if (f == d && 0 <= e && 0 <= f) return e;
        b._l = d;
        e = -1;
        for (b = b.firstElementChild || b.firstChild; b; b = b[kb]) jb(b) && (b._i = ++c, a === b && (e = c));
        return e
    }

    function Zd(a) {
        for (; a = a[kb];)
            if (jb(a)) return !1;
        return !0
    }

    function $d(a) {
        for (; a = a[Nf];)
            if (jb(a)) return !1;
        return !0
    }

    function Ja(a, b) {
        return a ? "class" == b ? a.className || "" : "for" == b ? a.htmlFor || "" : "style" == b ? a.style.cssText ||
            "" : (Ia ? a.getAttribute(b) : a.getAttribute(b, 2)) || "" : ""
    }

    function Tb(a) {
        return 1 == a.nodeType
    }

    function ia(a, b) {
        return a ? b ? function() {
            return a.apply(window, arguments) && b.apply(window, arguments)
        } : a : b
    }

    function Vd(a) {
        function b() {
            0 <= u && (p.id = c(u, v).replace(/\\/g, ""), u = -1);
            if (0 <= y) {
                var a = y == v ? null : c(y, v);
                0 > ">~+".indexOf(a) ? p.tag = a : p.rb = a;
                y = -1
            }
            0 <= s && (p.K.push(c(s + 1, v).replace(/\\/g, "")), s = -1)
        }

        function c(b, d) {
            return ra(a.slice(b, d))
        }
        a = 0 <= ">~+".indexOf(a.slice(-1)) ? a + " * " : a + " ";
        for (var d = [], e = -1, f = -1, h = -1, k = -1, s = -1, u = -1, y = -1, D = "", L = "", T, v = 0, ia = a.length, p = null, M = null; D = L, L = a.charAt(v), v < ia; v++) "\\" != D && (p || (T = v, p = {
                xa: null,
                ia: [],
                Ta: [],
                K: [],
                tag: null,
                rb: null,
                id: null,
                Ub: function() {
                    return Ia ? this.Rd : this.tag
                }
            }, y = v), 0 <= e ? "]" == L ? (M.Kb ? M.ec = c(h || e + 1, v) : M.Kb = c(e + 1, v), !(e = M.ec) || '"' != e.charAt(0) && "'" != e.charAt(0) || (M.ec = e.slice(1, -1)), p.Ta.push(M), M = null, e = h = -1) : "=" == L && (h = 0 <= "|~^$*".indexOf(D) ? D : "", M.type = h + L, M.Kb = c(e + 1, v - h.length), h = v + 1) : 0 <= f ? ")" == L && (0 <= k && (M.value = c(f + 1, v)), k = f = -1) : "#" == L ? (b(), u = v + 1) : "." ==
            L ? (b(), s = v) : ":" == L ? (b(), k = v) : "[" == L ? (b(), e = v, M = {}) : "(" == L ? (0 <= k && (M = {
                name: c(k + 1, v),
                value: null
            }, p.ia.push(M)), f = v) : " " == L && D != L && (b(), 0 <= k && p.ia.push({
                name: c(k + 1, v)
            }), p.Vc = p.ia.length || p.Ta.length || p.K.length, p.ge = p.xa = c(T, v), p.Rd = p.tag = p.rb ? null : p.tag || "*", p.tag && (p.tag = p.tag.toUpperCase()), d.length && d[d.length - 1].rb && (p.Qc = d.pop(), p.xa = p.Qc.xa + " " + p.xa), d.push(p), p = null));
        return d
    }

    function ib(a, b) {
        var c = b || [];
        a && c.push(a);
        return c
    }
    var Ud = B && "BackCompat" == document.compatMode,
        Xd = document.firstChild.children ?
        "children" : "childNodes",
        Ia = !1,
        Yd = {
            "*=": function(a, b) {
                return function(c) {
                    return 0 <= Ja(c, a).indexOf(b)
                }
            },
            "^=": function(a, b) {
                return function(c) {
                    return 0 == Ja(c, a).indexOf(b)
                }
            },
            "$=": function(a, b) {
                return function(c) {
                    c = " " + Ja(c, a);
                    return c.lastIndexOf(b) == c.length - b.length
                }
            },
            "~=": function(a, b) {
                var c = " " + b + " ";
                return function(b) {
                    return 0 <= (" " + Ja(b, a) + " ").indexOf(c)
                }
            },
            "|=": function(a, b) {
                b = " " + b;
                return function(c) {
                    c = " " + Ja(c, a);
                    return c == b || 0 == c.indexOf(b + "-")
                }
            },
            "=": function(a, b) {
                return function(c) {
                    return Ja(c,
                        a) == b
                }
            }
        },
        Ub = "undefined" == typeof document.firstChild.nextElementSibling,
        kb = Ub ? "nextSibling" : "nextElementSibling",
        Nf = Ub ? "previousSibling" : "previousElementSibling",
        jb = Ub ? Tb : xb,
        Cc = {
            checked: function() {
                return function(a) {
                    return a.checked || a.attributes.checked
                }
            },
            "first-child": function() {
                return $d
            },
            "last-child": function() {
                return Zd
            },
            "only-child": function() {
                return function(a) {
                    return $d(a) && Zd(a) ? !0 : !1
                }
            },
            empty: function() {
                return function(a) {
                    var b = a.childNodes;
                    for (a = a.childNodes.length - 1; 0 <= a; a--) {
                        var c = b[a].nodeType;
                        if (1 === c || 3 == c) return !1
                    }
                    return !0
                }
            },
            contains: function(a, b) {
                var c = b.charAt(0);
                if ('"' == c || "'" == c) b = b.slice(1, -1);
                return function(a) {
                    return 0 <= a.innerHTML.indexOf(b)
                }
            },
            not: function(a, b) {
                var c = Vd(b)[0],
                    d = {
                        oa: 1
                    };
                "*" != c.tag && (d.tag = 1);
                c.K.length || (d.K = 1);
                var e = u(c, d);
                return function(a) {
                    return !e(a)
                }
            },
            "nth-child": function(a, b) {
                if ("odd" == b) return y;
                if ("even" == b) return D;
                if (-1 != b.indexOf("n")) {
                    var c = b.split("n", 2),
                        d = c[0] ? "-" == c[0] ? -1 : parseInt(c[0], 10) : 1,
                        e = c[1] ? parseInt(c[1], 10) : 0,
                        f = 0,
                        h = -1;
                    0 < d ? 0 > e ? e = e % d && d + e %
                        d : 0 < e && (e >= d && (f = e - e % d), e %= d) : 0 > d && (d *= -1, 0 < e && (h = e, e %= d));
                    if (0 < d) return function(a) {
                        a = Vb(a);
                        return a >= f && (0 > h || a <= h) && a % d == e
                    };
                    b = e
                }
                var k = parseInt(b, 10);
                return function(a) {
                    return Vb(a) == k
                }
            }
        },
        Mf = A ? function(a) {
            var b = a.toLowerCase();
            "class" == b && (a = "className");
            return function(c) {
                return Ia ? c.getAttribute(a) : c[a] || c[b]
            }
        } : function(a) {
            return function(b) {
                return b && b.getAttribute && b.hasAttribute(a)
            }
        },
        Wd = {},
        Td = {},
        Sd = {},
        Rd = !!document.querySelectorAll && (!B || C("526")),
        T = 0,
        Kf = A ? function(a) {
            return Ia ? a.getAttribute("_uid") ||
                a.setAttribute("_uid", ++T) || T : a.uniqueID
        } : function(a) {
            return a._uid || (a._uid = ++T)
        };
    a.ia = Cc;
    return a
}();
r("goog.dom.query", X);
r("goog.dom.query.pseudos", X.ia);
var ne, oe;

function pe(a) {
    F.call(this);
    if (void 0 != a.previousElementSibling) a = a.previousElementSibling;
    else
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
    this.fc = a;
    this.ga = Hc(this.fc, "navName");
    this.Mb = P(qe);
    this.Sa = nd(this.fc);
    this.ib = P(re);
    this.Ua = document.body;
    this.cc = !1;
    this.jd = [];
    this.rd = [];
    Cb.set(this.ga, this)
}
t(pe, F);
var qe = "toggle-nav-closed",
    re = "header-site",
    Cb = new Db;
pe.prototype.b = function() {
    Cb.remove(this.ga);
    this.Sa = this.Mb = this.fc = null;
    x(this.jd, unlistenFunc);
    this.jd.length = 0;
    this.rd.length = 0;
    pe.i.b.call(this)
};
pe.prototype.resize = function() {
    this.cc && (z(se.getActiveBreakpoints(), "fullNav") ? te(this) : (this.Sa.style.width = window.innerWidth + "px", this.Sa.style.height = window.innerHeight + "px", this.Ua.style.width = window.innerWidth + "px", this.Ua.style.height = window.innerHeight + "px"))
};

function te(a) {
    W(a.ib, "is-active");
    var b = {
        width: "",
        height: "",
        overflow: ""
    };
    Q(a.Sa, b);
    Q(a.Ua, b);
    a.cc = !1
}
pe.prototype.toggle = function() {
    if (!Y(this.ib, "is-active")) {
        V(this.ib, "is-active");
        var a = {
            width: window.innerWidth + "px",
            height: window.innerHeight + "px",
            overflow: "hidden"
        };
        Q(this.Sa, a);
        Q(this.Ua, a);
        this.cc = !0
    }
};
pe.prototype.sd = function() {
    Y(this.ib, "is-active") && te(this)
};

function ue() {
    var a = O("js-mobilenav");
    x(a, function(a) {
        new pe(a)
    });
    a = O("js-mobilenav-toggle");
    x(a, function(a) {
        var c = Hc(a, "targetNav");
        c && (c = Cb.get(c), U(a, c.toggle, c))
    });
    a = O("js-mobilenav-toggle-close");
    x(a, function(a) {
        var c = Hc(a, "targetNav");
        c && (c = Cb.get(c), U(a, c.sd, c))
    })
}

function ve() {
    Bb(function(a) {
        a.resize()
    })
};

function we(a) {
    if (a.classList) return a.classList;
    a = a.className;
    return n(a) && a.match(/\S+/g) || []
}

function Y(a, b) {
    return a.classList ? a.classList.contains(b) : z(we(a), b)
}

function V(a, b) {
    a.classList ? a.classList.add(b) : Y(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
}

function W(a, b) {
    a.classList ? a.classList.remove(b) : Y(a, b) && (a.className = Qa(we(a), function(a) {
        return a != b
    }).join(" "))
}

function xe(a) {
    Y(a, "filter-active") ? W(a, "filter-active") : V(a, "filter-active")
};

function ye(a, b) {
    this.O = a;
    this.g = b;
    this.Nb = P(ze, this.O);
    this.v()
}
r("gfe.CaseStudyPreview", ye);
var ze = "copy";
ye.prototype.v = function() {
    !this.g.ea && Modernizr.history && U(this.O, this.g.oc, this);
    Ae.on("resize", q(this.e, this));
    this.e()
};
ye.prototype.e = function() {
    this.ka()
};
ye.prototype.ka = function() {
    var a = P("case-study-preview-image", this.O);
    Ad(a, this.g.ma, this.g.ma);
    this.O.style.height = Bd(this.g.ma)
};

function Be(a, b) {
    this.pa = new Ec(this);
    this.m = a;
    this.g = b;
    this.images = P(Ce, this.m);
    this.text = P(De, this.m);
    this.controls = P(Ee, this.m);
    this.Mb = P(Fe, this.m);
    this.Sd = O(Ge, this.images);
    this.Hd = O(He, this.text);
    this.Ld = O(Ge, this.text);
    this.Wc = this.bd = this.Rc = !1;
    this.za = [];
    this.v()
}
r("gfe.CaseStudyDetail", Be);
var Ce = "case-study-images",
    De = "case-study-text",
    Ee = "case-study-controls",
    Fe = "case-study-close",
    Ge = "js-responsive-case-study-image",
    He = "case-study-inline";
Be.prototype.v = function() {
    !this.g.ea && Modernizr.history && (U(this.Mb, this.g.oc, this), this.pa.V(window, "keydown", this.Vb))
};
Be.prototype.Vb = function(a) {
    27 === a.keyCode && this.g.oc()
};

function Z(a, b, c) {
    this.B = a;
    this.ad = b;
    this.pd = c;
    Ae.on("resize", q(this.e, this));
    this.e()
}
r("gfe.ColumnParallax", Z);
Z.prototype.on = function() {
    cb || (Ie.on("scroll", this.hc, this), this.e())
};
r("gfe.ColumnParallax.on", Z.on);
Z.prototype.off = function() {
    Ie.off("scroll", this.hc, this)
};
r("gfe.ColumnParallax.off", Z.off);
Z.prototype.e = function() {
    this.ka();
    this.hc();
    this.B.style.height = Bd(this.Ca)
};
Z.prototype.ka = function() {
    var a = S(this.B).height,
        b = S(this.ad).height;
    this.Ca = S(this.pd).height;
    this.md = gd(window).height;
    this.Cc = this.Ca - b;
    this.rc = zd(this.B).y;
    this.ud = (b > this.Ca ? this.Ca : a) - this.md
};
Z.prototype.hc = function() {
    var a = hd(document).y,
        b = Math.floor((a - this.rc) / this.ud * this.Cc);
    a < this.rc ? b = 0 : a - this.rc > this.Ca - this.md && (b = this.Cc);
    TweenLite.set(this.ad, {
        y: b
    })
};

function Je() {
    this.s = new Db;
    this.Ib = P(Ke);
    this.cd = O(Le, this.Da);
    this.Bc = O(Me, this.Da);
    this.va = P(Ne, this.Da);
    this.o = P(Oe);
    this.ea = Y(document.body, Pe);
    this.W = this.l = null;
    this.N = !1;
    this.v()
}
r("gfe.CaseStudyUI", Je);
var Ke = "js-case-study-ui",
    Le = "case-study-preview",
    Ne = "case-study-previews",
    Me = "case-study-detail",
    Pe = "page-case-study-detail";
g = Je.prototype;
g.v = function() {
    se.on("breakpoint", q(this.J, this));
    this.J();
    Ae.on("resize", q(this.e, this));
    this.e();
    Modernizr.history && (this.yb = new de, this.yb.lc = 500, ee(this.yb), ge(this.yb, this.Ib), fe(this.yb, new K(0, -this.Ja)));
    this.ea ? (this.W = new Be(this.Bc[0], this), x(this.cd, function(a) {
        new ye(a, this)
    }, this), Qe(this, this.W), (new Z(this.W.m, this.W.images, this.W.text)).on()) : x(this.Bc, function(a, b) {
        this.s.set(a.id, {
            detail: new Be(a, this),
            H: new ye(this.cd[b], this),
            mb: !1
        })
    }, this)
};
g.ka = function() {
    this.Ib && (this.yc = S(this.Ib).width, this.ma = this.N ? this.yc : (this.yc - 5) / 2)
};

function Qe(a, b) {
    b.Rc || (x(b.Hd, function(a) {
        b.za.push(Re(a))
    }, a), b.Rc = !0);
    a.N ? b.Wc || (x(b.Ld, function(a) {
        b.za.push(Re(a))
    }, a), b.Wc = !0) : b.bd || (x(b.Sd, function(a) {
        b.za.push(Re(a))
    }, a), b.bd = !0);
    x(b.za, function(a) {
        ResponsiveImage.update(a)
    })
}

function Re(a) {
    a = ResponsiveImage.createFromElement(a);
    Se(a);
    return a
}

function Se(a) {
    var b = a.knownDimensions[1] / a.knownDimensions[0],
        c = S(a.element).width;
    a.element.style.height = Bd(c * b)
}
g.oc = function(a) {
    Modernizr.history && (a ? (a.preventDefault(), a = "A" === a.target.nodeName ? a.target : od(a.target, null, Le), a = a.href.split("/").pop()) : a = "", "" == a || "/" == a ? me("/") : me("/stories/" + a))
};
g.e = function() {
    var a;
    this.ka();
    if (this.ea && this.W || this.l) a = this.ea ? this.W : this.s.get(this.l).detail, a.za && x(a.za, function(a) {
        Se(a)
    }, this), a.images.style.width = Bd(this.ma);
    this.Ja = S(this.o).height + (this.N ? 16 : 24)
};
g.J = function(a) {
    var b = se.getActiveBreakpoints(),
        c = null;
    if (this.ea || this.l) c = this.ea ? this.W : this.s.get(this.l).detail;
    "undefined" === typeof a ? z(b, "mobile") && (this.N = !0) : a[0] && "mobile" === a[0] && ("enter" === a[1] ? this.N = !0 : "exit" === a[1] && (this.N = !1), null !== c && Qe(this, c))
};
g.vc = function(a) {
    null !== this.l && this.Pb();
    this.l = a;
    a = this.s.get(a);
    a.mb = !0;
    V(a.H.O, "active");
    Te(this)
};
r("gfe.CaseStudyUI.activateCaseStudy", Je.vc);
Je.prototype.Pb = function() {
    if (this.l) {
        var a = this.s.get(this.l);
        a.mb = !1;
        W(a.H.O, "active");
        W(this.va, "-two-up");
        a = this.s.get(this.l).detail;
        this.l = null;
        a.Ya && a.Ya.off();
        Q(a.m, {
            display: "none"
        });
        TweenMax.set(a.text, {
            opacity: 0,
            y: "60px"
        });
        TweenMax.set(a.images, {
            y: 0
        });
        TweenMax.set(a.controls, {
            opacity: 0
        });
        Ue(this);
        a = Dd(P("header-page"));
        a = a.top + a.height - this.Ja;
        a < hd(document).y && window.scrollTo(0, a)
    }
};
r("gfe.CaseStudyUI.deactivateCaseStudy", Je.Pb);

function Te(a) {
    a.N ? (Ve(a), V(a.va, "-two-up")) : (TweenMax.to(a.va, .8, {
        marginLeft: 0,
        ease: Expo.easeOut
    }), a.s.forEach(function(a) {
        TweenMax.to(a.H.O, .4, {
            width: a.mb ? this.ma : 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            ease: Expo.easeOut,
            onComplete: q(function() {
                a.mb && (V(this.va, "-two-up"), Ve(this), Ue(this))
            }, this)
        });
        TweenMax.set(a.H.Nb, {
            opacity: 0
        })
    }, a))
}

function Ue(a) {
    a.N ? (a.va.removeAttribute("style"), a.s.forEach(function(a) {
        a.H.O.removeAttribute("style");
        a.H.Nb.removeAttribute("style");
        a.H.ka()
    }, a)) : (TweenMax.set(a.va, {
        marginLeft: "-5px"
    }), a.s.forEach(function(a) {
        TweenMax.set(a.H.O, {
            width: 1 / 3 * 100 + "%",
            borderWidth: "5px"
        });
        TweenMax.set(a.H.Nb, {
            opacity: 1,
            y: 0
        });
        a.H.ka()
    }, a))
}

function Ve(a) {
    var b = a.s.get(a.l).detail;
    Q(b.m, {
        display: "block"
    });
    b.images.style.width = Bd(a.ma);
    Qe(a, b);
    TweenMax.to(b.text, .8, {
        opacity: 1,
        y: 0,
        ease: Expo.easeOut,
        onComplete: q(a.Gd, a)
    });
    TweenMax.to(b.controls, .5, {
        opacity: 1,
        delay: .6,
        ease: Expo.easeOut
    })
}
Je.prototype.Gd = function() {
    if (!this.N) {
        var a = this.s.get(this.l).detail;
        a.Ya || (a.Ya = new Z(a.m, a.images, a.text));
        a.Ya.on()
    }
};

function We() {
    this.Da = new Je;
    this.v()
}
r("gfe.pages.Index", We);
We.prototype.v = function() {
    this.$b()
};
We.prototype.$b = function() {
    Modernizr.history && (H(ne, "navigate", this.gc, !1, this), ne.ha = "")
};
We.prototype.gc = function(a) {
    "" === a.Ba || "/" === a.Ba ? this.Da.Pb() : (a = a.Ba.split("/").pop(), this.Da.vc(a))
};
wb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
wb("action", "cite", "data", "formaction", "href", "manifest", "poster", "src");
wb("link", "script", "style");
sa("".ee ? "".he : "");
var Xe = {
        je: !0
    },
    Ye = {
        ke: !0
    };

function Ze(a, b) {
    var c;
    c = b || $e;
    var d = '<div class="program-detail-content"><div class="row"><img class="program-detail-image js-responsive-image" data-src="/media/images/startup-community/banner_image/' + af(c.content.pk) + "." + (c.content.img_type ? af(c.content.img_type) : "jpg") + '" data-breakpoints="320,768,1024,1200" alt=""><div class="desc -push-1-6 -width-2-3"><h2>' + af(c.content.name) + "</h2><p>",
        e;
    (e = c.content.desc) && e.$a === Ye ? (Na("Tainted SanitizedContentKind.TEXT for |noAutoescape: `%s`", [e.content]), e = "zSoyz") : e = String(e);
    c = d + e + "</p>" + ("" != c.content.url_1 ? '<a class="button -reverse" href="' + af(c.content.url_1) + '" target="_blank">' + (c.content.cta_1 ? af(c.content.cta_1) : "Visit " + af(c.content.name)) + "</a>" : "") + ("" != c.content.url_2 ? '<br><a class="button -reverse" href="' + af(c.content.url_2) + '" target="_blank">' + ("" != c.content.cta_2 ? af(c.content.cta_2) : "Visit " + af(c.content.name)) + "</a>" : "") + "</div></div></div>";
    a.innerHTML = bf(c)
}

function bf(a) {
    if (!ha(a)) return String(a);
    Na("Soy template output is unsafe for use as HTML: " + a);
    return "zSoyz"
}
var $e = {};
A && C(8);

function af(a) {
    return a && a.$a && a.$a === Xe ? a.content : String(a).replace(cf, df)
}
var ef = {
    "\x00": "&#0;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "<": "&lt;",
    ">": "&gt;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\x0B": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    "-": "&#45;",
    "/": "&#47;",
    "=": "&#61;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;"
};

function df(a) {
    return ef[a]
}
var cf = /[\x00\x22\x26\x27\x3c\x3e]/g;

function ff(a) {
    a = String(a);
    if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
        return eval("(" + a + ")")
    } catch (b) {}
    throw Error("Invalid JSON string: " + a);
};

function gf() {}
gf.prototype.xc = null;

function hf(a) {
    var b;
    (b = a.xc) || (b = {}, jf(a) && (b[0] = !0, b[1] = !0), b = a.xc = b);
    return b
};
var kf;

function lf() {}
t(lf, gf);

function mf(a) {
    return (a = jf(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}

function jf(a) {
    if (!a.Pc && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
            var d = b[c];
            try {
                return new ActiveXObject(d), a.Pc = d
            } catch (e) {}
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    return a.Pc
}
kf = new lf;

function nf(a) {
    var b;
    b || (b = of(a || arguments.callee.caller, []));
    return b
}

function of(a, b) {
    var c = [];
    if (z(b, a)) c.push("[...circular reference...]");
    else if (a && 50 > b.length) {
        c.push(pf(a) + "(");
        for (var d = a.arguments, e = 0; d && e < d.length; e++) {
            0 < e && c.push(", ");
            var f;
            f = d[e];
            switch (typeof f) {
                case "object":
                    f = f ? "object" : "null";
                    break;
                case "string":
                    break;
                case "number":
                    f = String(f);
                    break;
                case "boolean":
                    f = f ? "true" : "false";
                    break;
                case "function":
                    f = (f = pf(f)) ? f : "[fn]";
                    break;
                default:
                    f = typeof f
            }
            40 < f.length && (f = f.substr(0, 40) + "...");
            c.push(f)
        }
        b.push(a);
        c.push(")\n");
        try {
            c.push(of(a.caller, b))
        } catch (h) {
            c.push("[exception trying to get caller]\n")
        }
    } else a ?
        c.push("[...long stack...]") : c.push("[end]");
    return c.join("")
}

function pf(a) {
    if (qf[a]) return qf[a];
    a = String(a);
    if (!qf[a]) {
        var b = /function ([^\(]+)/.exec(a);
        qf[a] = b ? b[1] : "[Anonymous]"
    }
    return qf[a]
}
var qf = {};

function rf(a, b, c, d, e) {
    this.reset(a, b, c, d, e)
}
rf.prototype.Gc = null;
rf.prototype.Fc = null;
var sf = 0;
rf.prototype.reset = function(a, b, c, d, e) {
    "number" == typeof e || sf++;
    d || pa();
    this.La = a;
    this.Md = b;
    delete this.Gc;
    delete this.Fc
};
rf.prototype.gd = function(a) {
    this.La = a
};

function tf(a) {
    this.ga = a;
    this.Lc = this.R = this.La = this.G = null
}

function uf(a, b) {
    this.name = a;
    this.value = b
}
uf.prototype.toString = function() {
    return this.name
};
var vf = new uf("SEVERE", 1E3),
    wf = new uf("CONFIG", 700),
    xf = new uf("FINE", 500);
g = tf.prototype;
g.getParent = function() {
    return this.G
};
g.Jc = function() {
    this.R || (this.R = {});
    return this.R
};
g.gd = function(a) {
    this.La = a
};

function yf(a) {
    if (a.La) return a.La;
    if (a.G) return yf(a.G);
    Na("Root logger has no level set.");
    return null
}
g.log = function(a, b, c) {
    if (a.value >= yf(this).value)
        for (fa(b) && (b = b()), a = this.Kc(a, b, c, tf.prototype.log), b = "log:" + a.Md, l.console && (l.console.timeStamp ? l.console.timeStamp(b) : l.console.markTimeline && l.console.markTimeline(b)), l.msWriteProfilerMark && l.msWriteProfilerMark(b), b = this; b;) {
            c = b;
            var d = a;
            if (c.Lc)
                for (var e = 0, f = void 0; f = c.Lc[e]; e++) f(d);
            b = b.getParent()
        }
};
g.Kc = function(a, b, c, d) {
    a = new rf(a, String(b), this.ga);
    if (c) {
        a.Gc = c;
        var e;
        d = d || tf.prototype.Kc;
        try {
            var f;
            var h = ba("window.location.href");
            if (n(c)) f = {
                message: c,
                name: "Unknown error",
                lineNumber: "Not available",
                fileName: h,
                stack: "Not available"
            };
            else {
                var k, s;
                b = !1;
                try {
                    k = c.lineNumber || c.fe || "Not available"
                } catch (u) {
                    k = "Not available", b = !0
                }
                try {
                    s = c.fileName || c.filename || c.sourceURL || l.$googDebugFname || h
                } catch (y) {
                    s = "Not available", b = !0
                }
                f = !b && c.lineNumber && c.fileName && c.stack && c.message && c.name ? c : {
                    message: c.message ||
                        "Not available",
                    name: c.name || "UnknownError",
                    lineNumber: k,
                    fileName: s,
                    stack: c.stack || "Not available"
                }
            }
            e = "Message: " + sa(f.message) + '\nUrl: <a href="view-source:' + f.fileName + '" target="_new">' + f.fileName + "</a>\nLine: " + f.lineNumber + "\n\nBrowser stack:\n" + sa(f.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + sa(nf(d) + "-> ")
        } catch (D) {
            e = "Exception trying to expose exception! You win, we lose. " + D
        }
        a.Fc = e
    }
    return a
};
var zf = {},
    Af = null;

function Bf(a) {
    Af || (Af = new tf(""), zf[""] = Af, Af.gd(wf));
    var b;
    if (!(b = zf[a])) {
        b = new tf(a);
        var c = a.lastIndexOf("."),
            d = a.substr(c + 1),
            c = Bf(a.substr(0, c));
        c.Jc()[d] = b;
        b.G = c;
        zf[a] = b
    }
    return b
};

function $(a, b) {
    a && a.log(xf, b, void 0)
};

function Cf(a) {
    I.call(this);
    this.headers = new Db;
    this.Hb = a || null;
    this.Q = !1;
    this.Fb = this.a = null;
    this.Ka = this.Tc = this.nb = "";
    this.ba = this.Zb = this.jb = this.Sb = !1;
    this.Oa = 0;
    this.Ab = null;
    this.dd = Df;
    this.Cb = this.ae = !1
}
t(Cf, I);
var Df = "",
    Ef = Cf.prototype,
    Ff = Bf("goog.net.XhrIo");
Ef.w = Ff;
var Gf = /^https?$/i,
    Hf = ["POST", "PUT"];
g = Cf.prototype;
g.send = function(a, b, c, d) {
    if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.nb + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.nb = a;
    this.Ka = "";
    this.Tc = b;
    this.Sb = !1;
    this.Q = !0;
    this.a = this.Hb ? mf(this.Hb) : mf(kf);
    this.Fb = this.Hb ? hf(this.Hb) : hf(kf);
    this.a.onreadystatechange = q(this.Yc, this);
    try {
        $(this.w, If(this, "Opening Xhr")), this.Zb = !0, this.a.open(b, String(a), !0), this.Zb = !1
    } catch (e) {
        $(this.w, If(this, "Error opening Xhr: " + e.message));
        Jf(this, e);
        return
    }
    a = c || "";
    var f = this.headers.A();
    d && Hb(d, function(a, b) {
        f.set(b, a)
    });
    d = Sa(f.T());
    c = l.FormData && a instanceof l.FormData;
    !z(Hf, b) || d || c || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    f.forEach(function(a, b) {
        this.a.setRequestHeader(b, a)
    }, this);
    this.dd && (this.a.responseType = this.dd);
    "withCredentials" in this.a && (this.a.withCredentials = this.ae);
    try {
        Of(this), 0 < this.Oa && (this.Cb = Pf(this.a), $(this.w, If(this, "Will abort after " + this.Oa + "ms if incomplete, xhr2 " + this.Cb)), this.Cb ? (this.a.timeout = this.Oa, this.a.ontimeout =
            q(this.hd, this)) : this.Ab = Kc(this.hd, this.Oa, this)), $(this.w, If(this, "Sending request")), this.jb = !0, this.a.send(a), this.jb = !1
    } catch (h) {
        $(this.w, If(this, "Send error: " + h.message)), Jf(this, h)
    }
};

function Pf(a) {
    return A && C(9) && "number" == typeof a.timeout && void 0 !== a.ontimeout
}

function Ta(a) {
    return "content-type" == a.toLowerCase()
}
g.hd = function() {
    "undefined" != typeof aa && this.a && (this.Ka = "Timed out after " + this.Oa + "ms, aborting", $(this.w, If(this, this.Ka)), this.dispatchEvent("timeout"), this.abort(8))
};

function Jf(a, b) {
    a.Q = !1;
    a.a && (a.ba = !0, a.a.abort(), a.ba = !1);
    a.Ka = b;
    Qf(a);
    Rf(a)
}

function Qf(a) {
    a.Sb || (a.Sb = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
g.abort = function() {
    this.a && this.Q && ($(this.w, If(this, "Aborting")), this.Q = !1, this.ba = !0, this.a.abort(), this.ba = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Rf(this))
};
g.b = function() {
    this.a && (this.Q && (this.Q = !1, this.ba = !0, this.a.abort(), this.ba = !1), Rf(this, !0));
    Cf.i.b.call(this)
};
g.Yc = function() {
    this.Qb || (this.Zb || this.jb || this.ba ? Sf(this) : this.Pd())
};
g.Pd = function() {
    Sf(this)
};

function Sf(a) {
    if (a.Q && "undefined" != typeof aa)
        if (a.Fb[1] && 4 == Tf(a) && 2 == Uf(a)) $(a.w, If(a, "Local request error detected and ignored"));
        else if (a.jb && 4 == Tf(a)) Kc(a.Yc, 0, a);
    else if (a.dispatchEvent("readystatechange"), 4 == Tf(a)) {
        $(a.w, If(a, "Request complete"));
        a.Q = !1;
        try {
            if (Vf(a)) a.dispatchEvent("complete"), a.dispatchEvent("success");
            else {
                var b;
                try {
                    b = 2 < Tf(a) ? a.a.statusText : ""
                } catch (c) {
                    $(a.w, "Can not get status: " + c.message), b = ""
                }
                a.Ka = b + " [" + Uf(a) + "]";
                Qf(a)
            }
        } finally {
            Rf(a)
        }
    }
}

function Rf(a, b) {
    if (a.a) {
        Of(a);
        var c = a.a,
            d = a.Fb[0] ? ca : null;
        a.a = null;
        a.Fb = null;
        b || a.dispatchEvent("ready");
        try {
            c.onreadystatechange = d
        } catch (e) {
            (c = a.w) && c.log(vf, "Problem encountered resetting onreadystatechange: " + e.message, void 0)
        }
    }
}

function Of(a) {
    a.a && a.Cb && (a.a.ontimeout = null);
    "number" == typeof a.Ab && (l.clearTimeout(a.Ab), a.Ab = null)
}
g.ac = function() {
    return !!this.a
};

function Vf(a) {
    var b = Uf(a),
        c;
    a: switch (b) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
            c = !0;
            break a;
        default:
            c = !1
    }
    if (!c) {
        if (b = 0 === b) a = nb(String(a.nb))[1] || null, !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1)), b = !Gf.test(a ? a.toLowerCase() : "");
        c = b
    }
    return c
}

function Tf(a) {
    return a.a ? a.a.readyState : 0
}

function Uf(a) {
    try {
        return 2 < Tf(a) ? a.a.status : -1
    } catch (b) {
        return -1
    }
}

function If(a, b) {
    return b + " [" + a.Tc + " " + a.nb + " " + Uf(a) + "]"
};

function Wf(a, b, c) {
    F.call(this);
    this.zb = a;
    this.Yb = b;
    this.g = c;
    this.Yd = .9;
    b = Hc(this.zb, "tabTarget");
    c = q(function() {
        this.g.setActive(this.Yb)
    }, this);
    b && (this.P = X("[data-tab-name=" + b + "]")[0], Xf(this), this.Od = U(a, c, this));
    (a = O("js-delay", this.P)) && a.length && (this.g.Dd = !0, this.cb = [].slice.call(a), this.Ac = this.cb.slice(0), this.Ac.reverse())
}
t(Wf, F);
Wf.prototype.b = function() {
    this.g = this.zb = null;
    this.Od();
    Wf.i.b.call(this)
};

function Xf(a) {
    W(a.zb, "tab-is-active");
    W(a.P, "tab-is-active");
    TweenMax.set(a.P, {
        autoAlpha: 0
    })
}
Wf.prototype.show = function(a) {
    Yf(this.g, S(this.P).height);
    V(this.zb, "tab-is-active");
    V(this.P, "tab-is-active");
    var b;
    b = "undefined" === typeof a || !1 === a;
    this.cb || b ? (TweenLite.set(this.P, {
        autoAlpha: 1,
        x: 0
    }), this.cb && !b && (a = this.Yb < a, b = .1, Y(this.g.B, "js-delay-fast") && (b = .05), Y(this.g.B, "js-delay-slow") && (b = .25), Zf(this, a, b))) : (TweenLite.set(this.P, {
        autoAlpha: 1
    }), TweenLite.fromTo(this.P, this.Yd, {
        x: a > this.Yb ? -50 : 50
    }, {
        x: 0,
        ease: Expo.easeOut
    }));
    a = O("js-tab-lazy-load", this.Z);
    x(a, function(a) {
        a.src || (a.src = Hc(a,
            "src"))
    })
};

function Zf(a, b, c) {
    a = b ? a.Ac : a.cb;
    TweenLite.to(a, 0, {
        x: b ? -100 : 100,
        opacity: 0
    });
    x(a, function(a) {
        TweenMax.to(a, .1, {
            opacity: 1,
            delay: i * c + .05
        }, c);
        TweenMax.to(a, .6, {
            x: 0,
            delay: i * c,
            ease: Expo.easeOut
        })
    })
}

function $f(a) {
    F.call(this);
    this.B = a;
    this.ga = Hc(this.B, "tabName");
    this.Z = P("js-tab-content-container", this.B);
    this.Dd = !1;
    ag(this);
    this.e = q(this.Ud, this);
    Ae.on("resize", this.e);
    bg.set(this.ga, this)
}
t($f, F);
var bg = new Db;
$f.prototype.b = function() {
    bg.remove(this.ga);
    this.Z = this.B = null;
    se.off("breakpoint", this.J);
    Ae.off("resize", this.e);
    x(this.k, function(a) {
        a.Ga()
    });
    this.k = null;
    $f.i.b.call(this)
};

function ag(a) {
    var b = O("js-activate-tab", a.B);
    a.k = Ra(b, function(a, b) {
        return new Wf(a, b, this)
    }, a);
    a.setActive(0)
}
$f.prototype.setActive = function(a) {
    a !== this.la && ("undefined" !== typeof this.la && this.k[this.la] && Xf(this.k[this.la]), "undefined" !== typeof a && this.k[a] && this.k[a].show(this.le && this.la), this.la = a)
};

function Yf(a, b) {
    a.Z.style.height = b + "px"
}
$f.prototype.Ud = function() {
    Yf(this, S(this.k[this.la].P).height)
};

function cg() {
    var a = O("js-tabs");
    x(a, function(a) {
        new $f(a)
    })
};

function dg() {}
dg.Ad = function() {
    return dg.Sc ? dg.Sc : dg.Sc = new dg
};
dg.prototype.Nd = 0;

function eg(a) {
    I.call(this);
    this.na = a || N()
}
t(eg, I);
g = eg.prototype;
g.Fd = dg.Ad();
g.U = null;
g.ca = !1;
g.S = null;
g.G = null;
g.R = null;
g.Xa = null;
g.nd = !1;
g.u = function() {
    return this.S
};
g.getParent = function() {
    return this.G
};
g.qc = function(a) {
    if (this.G && this.G != a) throw Error("Method not supported");
    eg.i.qc.call(this, a)
};
g.D = function() {
    return this.na
};
g.ab = function() {
    this.S = this.na.createElement("div")
};
g.bb = function(a) {
    this.S = a
};
g.fb = function() {
    this.ca = !0;
    fg(this, function(a) {
        !a.ca && a.u() && a.fb()
    })
};

function gg(a) {
    fg(a, function(a) {
        a.ca && gg(a)
    });
    a.aa && a.aa.wb();
    a.ca = !1
}
g.b = function() {
    this.ca && gg(this);
    this.aa && (this.aa.Ga(), delete this.aa);
    fg(this, function(a) {
        a.Ga()
    });
    !this.nd && this.S && md(this.S);
    this.G = this.S = this.Xa = this.R = null;
    eg.i.b.call(this)
};

function fg(a, b) {
    a.R && x(a.R, b, void 0)
}
g.removeChild = function(a, b) {
    if (a) {
        var c = n(a) ? a : a.U || (a.U = ":" + (a.Fd.Nd++).toString(36)),
            d;
        this.Xa && c ? (d = this.Xa, d = (c in d ? d[c] : void 0) || null) : d = null;
        a = d;
        if (c && a) {
            d = this.Xa;
            c in d && delete d[c];
            Ua(this.R, a);
            b && (gg(a), a.S && md(a.S));
            c = a;
            if (null == c) throw Error("Unable to set parent component");
            c.G = null;
            eg.i.qc.call(c, null)
        }
    }
    if (!a) throw Error("Child is not in parent component");
    return a
};

function hg(a, b) {
    var c = a ? N(a) : b;
    eg.call(this, c);
    (c = a) || (c = this.D().t.body);
    this.jc = c;
    this.sb = {};
    this.Ra = 0;
    this.sa = this.Ea = this.Za = null;
    this.$c = 0;
    this.q = null;
    this.nc = !0;
    this.qa = this.ua = !1
}
t(hg, eg);
var ig = ["position", "top", "left", "width", "cssFloat"],
    jg = "position top left display cssFloat marginTop marginLeft marginRight marginBottom".split(" ");
g = hg.prototype;
g.ab = function() {
    hg.i.ab.call(this);
    this.bb(this.u())
};
g.bb = function(a) {
    hg.i.bb.call(this, a);
    V(a, "goog-scrollfloater")
};
g.fb = function() {
    hg.i.fb.call(this);
    this.q || (this.q = this.D().ab("div", {
        style: "visibility:hidden"
    }));
    this.update();
    kg(this, this.nc);
    var a = rd(this.D());
    this.aa || (this.aa = new Ec(this));
    this.aa.V(a, "scroll", this.Wb).V(a, "resize", this.update)
};
g.update = function() {
    this.ca && (lg(this), this.Za && (this.Ea = Dd(this.Za)), this.sa = Dd(this.u()), this.$c = zd(this.u()).y, this.Wb())
};
g.b = function() {
    hg.i.b.call(this);
    this.q = null
};

function kg(a, b) {
    if (a.nc = b) {
        if (mg(a)) {
            var c = a.D(),
                c = wd(c.t);
            "none" == c.currentStyle.backgroundImage && (c.style.backgroundImage = "https:" == rd(a.D()).location.protocol ? "url(https:///)" : "url(about:blank)", c.style.backgroundAttachment = "fixed")
        }
        a.Wb()
    } else lg(a)
}
g.Wb = function() {
    if (this.nc) {
        var a = this.D(),
            a = hd(a.t).y;
        if (this.sa.top - a >= this.Ra) lg(this);
        else {
            var b = this.sa.height + this.Ra;
            if (this.Za && a > this.Ea.top + this.Ea.height - b) this.qa && !lg(this) || this.ua || !this.dispatchEvent("pin") || (a = this.u(), ng(this), a.style.position = "relative", a.style.top = this.Ea.height - this.sa.height - this.sa.top + this.Ea.top + "px", this.ua = !0);
            else {
                var c = this.D(),
                    c = gd(rd(c) || window).height;
                mg(this) || b < c ? og(this, 0) : this.sa.height + this.$c > c + a ? lg(this) : og(this, 1)
            }
        }
    }
};

function og(a, b) {
    var c = 0 == b;
    if ((!a.ua || lg(a)) && !a.qa && a.dispatchEvent("float")) {
        var d = a.u();
        a.D();
        var e = zd(d).x,
            f;
        var h = bd(d);
        if ((f = A && d.currentStyle) && qd(N(h)) && "auto" != f.width && "auto" != f.height && !f.boxSizing) h = Ed(d, f.width, "width", "pixelWidth"), f = Ed(d, f.height, "height", "pixelHeight"), f = new J(h, f);
        else {
            f = new J(d.offsetWidth, d.offsetHeight);
            if (A) var h = Fd(d, "paddingLeft"),
                k = Fd(d, "paddingRight"),
                s = Fd(d, "paddingTop"),
                u = Fd(d, "paddingBottom"),
                h = new sd(s, k, u, h);
            else h = R(d, "paddingLeft"), k = R(d, "paddingRight"),
                s = R(d, "paddingTop"), u = R(d, "paddingBottom"), h = new sd(parseFloat(s), parseFloat(k), parseFloat(u), parseFloat(h));
            if (!A || A && 9 <= lb) k = R(d, "borderLeftWidth"), s = R(d, "borderRightWidth"), u = R(d, "borderTopWidth"), y = R(d, "borderBottomWidth"), k = new sd(parseFloat(u), parseFloat(s), parseFloat(y), parseFloat(k));
            else var k = Hd(d, "borderLeft"),
                s = Hd(d, "borderRight"),
                u = Hd(d, "borderTop"),
                y = Hd(d, "borderBottom"),
                k = new sd(u, s, y, k);
            f = new J(f.width - k.left - h.left - h.right - k.right, f.height - k.top - h.top - h.bottom - k.bottom)
        }
        f = f.width;
        ng(a);
        Ad(a.q, d.offsetWidth, d.offsetHeight);
        Q(d, {
            left: e + "px",
            width: f + "px",
            cssFloat: "none"
        });
        d.parentNode == a.jc ? d.parentNode.insertBefore(a.q, d) : (d.parentNode.replaceChild(a.q, d), a.jc.appendChild(d));
        mg(a) ? (d.style.position = "absolute", d.style.setExpression("top", 'document.compatMode=="CSS1Compat"?documentElement.scrollTop:document.body.scrollTop')) : (d.style.position = "fixed", c ? (d.style.top = a.Ra + "px", d.style.bottom = "auto") : (d.style.top = "auto", d.style.bottom = 0));
        a.qa = !0
    }
}

function lg(a) {
    if (!a.qa && !a.ua || !a.dispatchEvent("dock")) return !1;
    var b = a.u();
    a.qa && (pg(a), mg(a) && b.style.removeExpression("top"), a.q.parentNode == a.jc ? a.q.parentNode.removeChild(a.q) : a.q.parentNode.replaceChild(b, a.q));
    a.ua && pg(a);
    a.qa = a.ua = !1;
    return !0
}

function ng(a) {
    var b = a.u();
    a.sb = {};
    x(ig, function(a) {
        this.sb[a] = b.style[a]
    }, a);
    x(jg, function(a) {
        this.q.style[a] = b.style[a] || (b.currentStyle ? b.currentStyle[a] : null) || R(b, a)
    }, a)
}

function pg(a) {
    var b = a.u(),
        c;
    for (c in a.sb) b.style[c] = a.sb[c]
}

function mg(a) {
    return A && !(C("7") && qd(a.D()))
};

function qg(a) {
    this.Tb = new I;
    this.wd = P(a || rg);
    this.Lb = document.body;
    this.Z = P(sg);
    this.zc = dd("li", "", this.Z);
    this.Qd = O(tg);
    this.Zc = O(ug);
    this.Mc = this.bc = !1;
    this.Y = [];
    this.X = {
        ob: [],
        qb: []
    };
    this.kb = !1;
    0 < this.Qd.length && vg(this);
    se.on("breakpoint", q(this.J, this));
    this.J()
}
var rg = "filter-container",
    tg = "filter-options-list",
    ug = "filter",
    sg = "filter-content",
    wg = "." + tg + " a";
qg.prototype.J = function(a) {
    var b = se.getActiveBreakpoints();
    "undefined" === typeof a ? z(b, "mobile") && xg(this) : a[0] && "mobile" === a[0] && ("enter" === a[1] ? xg(this) : "exit" === a[1] && (this.bc = !1, W(this.wd, "active-mobile-menu")))
};

function vg(a) {
    var b = X(wg);
    x(b, function(a) {
        U(a, this.$d, this)
    }, a)
}

function xg(a) {
    a.bc = !0;
    a.Mc || (a.Mc = !0, a.zd = X(".filter-options h3"), a.yd = P("filter-apply"), x(a.zd, function(a) {
        U(a, this.Zd, this)
    }, a), U(a.yd, a.wc, a))
}
qg.prototype.Zd = function(a) {
    a = nd(a.target);
    this.kb && yg(this);
    Y(a, "active-mobile-filter") ? (this.kb = !1, W(this.Lb, "active-mobile-menu"), W(a, "active-mobile-filter")) : (this.kb = !0, x(this.Zc, function(a) {
        W(a, "active-mobile-filter")
    }), V(this.Lb, "active-mobile-menu"), V(a, "active-mobile-filter"));
    this.Tb.dispatchEvent("applyfilter")
};
qg.prototype.$d = function(a) {
    a.preventDefault();
    a = a.target;
    "A" !== a.nodeName && (a = nd(a));
    var b = a.href.split("#")[1];
    Y(a, "filter-active") ? (Ua(this.Y, b), this.X.qb.push(a)) : (this.Y.push(b), this.X.ob.push(a));
    this.bc || this.wc();
    xe(a)
};
qg.prototype.wc = function() {
    this.X.ob = [];
    this.X.qb = [];
    var a = [];
    if (0 === this.Y.length) a = this.zc;
    else var a = Qa(this.Y, function(a) {
            return 0 <= a.indexOf("help-")
        }),
        b = Qa(this.Y, function(a) {
            return 0 <= a.indexOf("loc-")
        }),
        c = X("." + a.join(", ."), this.Z),
        d = X("." + b.join(", ."), this.Z),
        a = Va(zg(c, b), zg(d, a));
    Za(a);
    x(this.zc, function(a) {
        Q(a, {
            display: "none"
        })
    });
    x(a, function(a) {
        Q(a, {
            display: "block"
        })
    });
    x(this.Zc, function(a) {
        W(a, "active-mobile-filter")
    });
    W(this.Lb, "active-mobile-menu");
    this.kb = !1;
    Ag.prototype.tc.call();
    this.Tb.dispatchEvent("applyfilter")
};

function zg(a, b) {
    var c = [];
    x(a, function(a) {
        0 === b.length ? c.push(a) : x(b, function(b) {
            Y(a, b) && c.push(a)
        })
    });
    return c
}

function yg(a) {
    x(a.X.ob, function(a) {
        xe(a);
        Ua(this.Y, a.href.split("#")[1])
    }, a);
    x(a.X.qb, function(a) {
        V(a, "filter-active");
        this.Y.push(a.href.split("#")[1])
    }, a);
    a.X.ob = [];
    a.X.qb = []
};

function Bg() {
    this.Gb = new Cf;
    this.pa = new Ec(this);
    this.Td = new qg;
    this.k = P(Cg);
    this.gb = P(Dg);
    S(this.gb);
    this.Hc = P(Eg);
    this.m = P(Fg);
    this.eb = P(Gg);
    this.Xb = Dd(P(Hg));
    this.o = P(Ig);
    this.Nc = S(this.o).height;
    this.da = Y(document.body, Jg);
    this.kc = !1;
    this.Ic = 0;
    var a = this.h = new hg;
    a.Za = this.gb;
    a.update();
    a = this.h;
    a.Ra = Kg ? 60 : 94;
    a.update();
    var a = this.h,
        b = this.Hc;
    if (a.ca) throw Error("Component already rendered");
    if (b) {
        a.nd = !0;
        var c = bd(b);
        a.na && a.na.t == c || (a.na = N(b));
        a.bb(b);
        a.fb()
    } else throw Error("Invalid element to decorate");
    kg(this.h, Lg(this));
    this.v()
}
r("gfe.pages.Communities", Bg);
var Cg = "tabs-container",
    Dg = "filter-container",
    Eg = "filter-options",
    Fg = "detail-container",
    Gg = "program-detail-header",
    Hg = "header-page",
    Jg = "page-communities-detail",
    Ig = "header-site";
g = Bg.prototype;
g.v = function() {
    Mg(this);
    Ng(this);
    cg();
    Ae.on("resize", q(this.e, this));
    this.e();
    this.$b();
    this.pa.V(window, "keydown", this.Vb, this);
    this.pa.V(this.Td.Tb, "applyfilter", q(this.h.update, this.h));
    this.h.update()
};
g.e = function() {
    this.Xb = Dd(P(Hg));
    if (!this.da) {
        var a = this.h;
        a.Ra = Kg ? 60 : 94;
        a.update();
        kg(this.h, Lg(this));
        this.h.update()
    }
};

function Lg(a) {
    var b = gd(window).height,
        c = S(a.Hc).height;
    return b + 50 > c + (Kg ? 60 : 94) && !a.da
}
g.$b = function() {
    Modernizr.history && (H(ne, "navigate", this.gc, !1, this), ne.ha = "/startup-communities")
};
g.gc = function(a) {
    this.kc && ("" === a.Ba || "/" === a.Ba ? this.Oc() : this.da || (a = a.Ba.split("/").pop(), Og(this, a), this.da = !0, this.Ic = hd(document).y, this.Nc = S(this.o).height, window.scrollTo(0, this.Xb.top + this.Xb.height - this.Nc + 3), TweenMax.to(this.k, .6, {
        height: 0,
        opacity: 0,
        y: -100,
        ease: Expo.easeOut,
        onComplete: q(this.kd, this)
    }), Q(this.eb, "display", "block"), TweenMax.to(this.eb, .6, {
        opacity: 1,
        ease: Expo.easeOut
    }), Q(this.gb, "display", "none"), Q(this.m, "display", "block"), kg(this.h, !1)))
};

function Ng(a) {
    if (!a.da) {
        var b = O("js-responsive-filter-image");
        a = Ra(b, function(a) {
            a = ResponsiveImage.createFromElement(a);
            a.on("load", q(this.Kd, this));
            return a
        }, a);
        oe = Wa(oe, a)
    }
}
g.Kd = function() {
    this.h && this.h.update()
};
g.Vb = function(a) {
    27 === a.keyCode && this.fd()
};

function Mg(a) {
    if (Modernizr.history) {
        var b = X(".filter-content a"),
            c = X(".list-featured-programs a"),
            d = P("link-return"),
            b = Va(Xa(b), Xa(c));
        x(b, function(a) {
            U(a, this.fd, this)
        }, a);
        U(d, a.Oc, a);
        H(a.Gb, "complete", q(function() {
            if (Vf(this.Gb)) {
                var a;
                a = this.Gb;
                a = a.a ? ff(a.a.responseText) : void 0;
                this.data = a;
                this.kc = !0
            }
        }, a));
        a.Gb.send("/data/partners.json")
    }
}
g.fd = function(a) {
    a ? (a.preventDefault(), a = "A" === a.target.nodeName ? a.target : pd(a.target, function(a) {
        return "A" === a.nodeName && Y(a, "preview")
    }), a = a.href.replace(/\/$/, "").split("/").pop()) : a = "";
    this.kc ? me("/" + a) : window.location.href = "/startup-communities/" + a
};

function Og(a, b) {
    Ze(a.m, {
        content: a.data[b],
        id: b
    });
    var c = P("program-detail-image"),
        d = ResponsiveImage.createFromElement(c);
    oe.push(d);
    setTimeout(function() {
        ResponsiveImage.update(d)
    }, 20)
}
g.Oc = function() {
    Q(this.k, "visibility", "visible");
    TweenMax.to(this.k, .6, {
        height: "auto",
        opacity: 1,
        y: 0,
        ease: Expo.easeOut,
        onComplete: q(this.kd, this)
    });
    TweenMax.to(this.eb, .3, {
        opacity: 0,
        ease: Expo.easeOut
    });
    Q(this.eb, "display", "none");
    Q(this.gb, "display", "block");
    Q(this.m, "display", "none");
    window.scrollTo(0, this.Ic);
    document.title = "Startup Communities - Google for Entrepreneurs";
    this.da = !1;
    me("");
    Ng(this);
    kg(this.h, !0);
    setTimeout(q(this.h.update, this.h), 100)
};
g.kd = function() {
    this.da ? Q(this.k, "visibility", "hidden") : Q(this.k, "visibility", "visible")
};

function Ag(a) {
    this.ic = a;
    this.lb = !1;
    this.v()
}
r("gfe.SetUp", Ag);
var se = new BreakpointController({
    breakpoints: {
        mobile: {
            max: 767
        },
        tablet: {
            min: 768,
            max: 1043
        },
        fullFeatured: {
            min: 768
        },
        fullNav: {
            min: 880
        },
        desktop: {
            min: 1044
        }
    }
});
r("gfe.BC", se);
var Ie = new ScrollController({
    debounceMs: 0
});
r("gfe.SC", Ie);
var Ae = new ResizeController;
r("gfe.RC", Ae);
r("gfe.responsiveImages", oe);
var Oe = "header-site",
    Kg = !1;
g = Ag.prototype;
g.v = function() {
    Od();
    ae();
    var a = document.documentElement;
    Modernizr.mq("only all") || V(a, "no-mq");
    Pg(this);
    Qg("h1,h2,h3,h4,h5,h6,.tooltip");
    this.o = P(Oe);
    se.on("breakpoint", q(this.J, this));
    this.J();
    Ae.on("resize", q(this.e, this));
    this.e();
    ue();
    var a = P("header-wrapper"),
        b = id("div", {
            id: "nav-tick",
            style: "bottom: " + (this.Ja + 1) + "px"
        });
    a.appendChild(b);
    a = new ElementVisibleController(b);
    a.on("enter", this.Ed, this);
    a.on("exit", this.Xd, this);
    Modernizr.history && (a = ne = new ke, !1 != a.Qa && (xc(a.r, "hashchange", a.Ma, !1,
        a), a.Qa = !1), ne.ha = "", a = ne, !0 != a.Rb && (a.Rb = !0, a.dispatchEvent(new je(le(a)))));
    a = P("header-jump");
    this.xb = new de;
    this.xb.lc = 500;
    ee(this.xb);
    this.xb.mc = new K(0, -this.Ja);
    ge(this.xb, a);
    a = {
        communities: Bg,
        index: We
    };
    "undefined" !== typeof this.ic && a[this.ic] && (this.page = new a[this.ic])
};
g.J = function() {
    var a = se.getActiveBreakpoints();
    Kg = z(a, "mobile");
    this.tc()
};
g.e = function() {
    ve();
    this.Ja = S(this.o).height + (Kg ? 16 : 24)
};

function Pg(a) {
    var b = O("js-responsive-image");
    oe = Ra(b, function(a) {
        return ResponsiveImage.createFromElement(a)
    });
    a.tc()
}
g.tc = function() {
    x(oe, function(a) {
        ResponsiveImage.checkVisibility(a);
        ResponsiveImage.update(a)
    })
};
g.Xd = function() {
    this.lb || (this.lb = !0, V(this.o, "-fixed"), TweenMax.set(this.o, {
        y: -100
    }), TweenMax.to(this.o, .3, {
        y: 0,
        ease: Expo.easeOut
    }))
};
g.Ed = function() {
    this.lb && (this.lb = !1, TweenMax.to(this.o, .3, {
        y: -100,
        ease: Expo.easeOut,
        onComplete: q(function() {
            W(this.o, "-fixed");
            TweenMax.set(this.o, {
                y: 0
            })
        }, this)
    }))
};

function Qg(a, b) {
    var c = Qa(X(a || "h1,h2,h3,h4,h5,h6,p"), function(a) {
        return !Y(a, b || "allow-orphan")
    });
    be(c)
}
r("gfe.avoidOrphans", Qg);