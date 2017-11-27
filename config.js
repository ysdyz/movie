/**
 * Created by y9686 on 2017/2/1.
 */
eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return c.toString(a)
    };
    if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [function(e) {
            return r[e]
        }];
        e = function() {
            return '\\w+'
        };
        c = 1
    };
    while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
} ('3.a("<2> 4 6 = 6 || []; (e() { 4 1 = 3.8(\\"2\\"); 1.9 = \\"//1.h.b/1.c?d\\"; 4 5 = 3.f(\\"2\\")[0]; 5.g.7(1, 5); })(); </2>");', 18, 18, '|hm|script|document|var|s|_hmt|insertBefore|createElement|src|write|com|js|69005bef55af9e85a9c5ba28519dac3b|function|getElementsByTagName|parentNode|baidu'.split('|'), 0, {}))