! function() {
    var e = ["up", "down"],
        t = ["left", "right"],
        n = [6, 8, 11, 15],
        o = [60, 85, 100, 130];

    function a(e, t) {
        for (var n in t) e[n] = t[n]
    }

    function r(e) {
        return e[parseInt(Math.random() * e.length)]
    }
    var i = window.SeaDragon,
        c = window.SeaDragon = {
            add: function() {
                var i = document.createElement("marquee");
                a(i, {
                    direction: r(e),
                    behavior: "alternate",
                    scrollAmount: r(n),
                    scrollDelay: r(o)
                }), a(i.style, {
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    zIndex: 999999,
                    pointerEvents: "none"
                });
                var c = document.createElement("marquee");
                a(c, {
                    behavior: "alternate",
                    direction: r(t),
                    scrollAmount: r(n),
                    scrollDelay: r(o)
                }), a(c.style, {
                    width: "100%"
                }), i.appendChild(c);
                var d = document.createElement("img");
                d.src = "https://i.ibb.co/xSwqLnF/Screenshot-2023-01-13-113447.png", c.appendChild(d);
                var l = document.body;
                l && l.appendChild(i)
            },
            noConflict: function() {
                return window.SeaDragon = i, c
            }
        }
}();
