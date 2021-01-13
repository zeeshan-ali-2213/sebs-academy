! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports._vantaEffect = e() : t._vantaEffect = e() }("undefined" != typeof self ? self : this, (function() {
    return function(t) {
        var e = {};

        function i(s) { if (e[s]) return e[s].exports; var o = e[s] = { i: s, l: !1, exports: {} }; return t[s].call(o.exports, o, o.exports, i), o.l = !0, o.exports }
        return i.m = t, i.c = e, i.d = function(t, e, s) { i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s }) }, i.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, i.t = function(t, e) {
            if (1 & e && (t = i(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var s = Object.create(null);
            if (i.r(s), Object.defineProperty(s, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                for (var o in t) i.d(s, o, function(e) { return t[e] }.bind(null, o));
            return s
        }, i.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return i.d(e, "a", e), e }, i.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, i.p = "", i(i.s = 17)
    }({
        0: function(t, e, i) {
            "use strict";

            function s(t, e) { for (let i in e) e.hasOwnProperty(i) && (t[i] = e[i]); return t }

            function o() { return "undefined" != typeof navigator ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 600 : null }
            i.d(e, "c", (function() { return s })), i.d(e, "e", (function() { return o })), i.d(e, "i", (function() { return n })), i.d(e, "h", (function() { return r })), i.d(e, "g", (function() { return h })), i.d(e, "f", (function() { return a })), i.d(e, "a", (function() { return c })), i.d(e, "b", (function() { return u })), i.d(e, "d", (function() { return l })), Number.prototype.clamp = function(t, e) { return Math.min(Math.max(this, t), e) };
            const n = t => t[Math.floor(Math.random() * t.length)];

            function r(t, e) { return null == t && (t = 0), null == e && (e = 1), t + Math.random() * (e - t) }

            function h(t, e) { return null == t && (t = 0), null == e && (e = 1), Math.floor(t + Math.random() * (e - t + 1)) }
            const a = t => document.querySelector(t),
                c = t => "number" == typeof t ? "#" + ("00000" + t.toString(16)).slice(-6) : t,
                u = (t, e = 1) => {
                    const i = c(t),
                        s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),
                        o = s ? { r: parseInt(s[1], 16), g: parseInt(s[2], 16), b: parseInt(s[3], 16) } : null;
                    return "rgba(" + o.r + "," + o.g + "," + o.b + "," + e + ")"
                },
                l = t => .299 * t.r + .587 * t.g + .114 * t.b
        },
        1: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() { return r }));
            var s = i(0);
            const o = "object" == typeof window;
            let n = o && window.THREE || {};
            o && !window.VANTA && (window.VANTA = {});
            const r = o && window.VANTA || {};
            r.register = (t, e) => r[t] = t => new e(t), r.version = "0.5.21";
            const h = function() { return Array.prototype.unshift.call(arguments, "[VANTA]"), console.error.apply(this, arguments) };
            r.VantaBase = class {
                constructor(t = {}) {
                    if (!o) return !1;
                    r.current = this, this.windowMouseMoveWrapper = this.windowMouseMoveWrapper.bind(this), this.windowTouchWrapper = this.windowTouchWrapper.bind(this), this.windowGyroWrapper = this.windowGyroWrapper.bind(this), this.resize = this.resize.bind(this), this.animationLoop = this.animationLoop.bind(this), this.restart = this.restart.bind(this);
                    const e = "function" == typeof this.getDefaultOptions ? this.getDefaultOptions() : this.defaultOptions;
                    if (this.options = Object(s.c)({ mouseControls: !0, touchControls: !0, gyroControls: !1, minHeight: 200, minWidth: 200, scale: 1, scaleMobile: 1 }, e), (t instanceof HTMLElement || "string" == typeof t) && (t = { el: t }), Object(s.c)(this.options, t), this.options.THREE && (n = this.options.THREE), this.el = this.options.el, null == this.el) h('Instance needs "el" param!');
                    else if (!(this.options.el instanceof HTMLElement)) { const t = this.el; if (this.el = Object(s.f)(t), !this.el) return void h("Cannot find element", t) }
                    this.prepareEl(), this.initThree(), this.setSize();
                    try { this.init() } catch (t) { return h("Init error", t), this.renderer && this.renderer.domElement && this.el.removeChild(this.renderer.domElement), void(this.options.backgroundColor && (console.log("[VANTA] Falling back to backgroundColor"), this.el.style.background = Object(s.a)(this.options.backgroundColor))) }
                    this.initMouse(), this.resize(), this.animationLoop();
                    const i = window.addEventListener;
                    i("resize", this.resize), window.requestAnimationFrame(this.resize), this.options.mouseControls && (i("scroll", this.windowMouseMoveWrapper), i("mousemove", this.windowMouseMoveWrapper)), this.options.touchControls && (i("touchstart", this.windowTouchWrapper), i("touchmove", this.windowTouchWrapper)), this.options.gyroControls && i("deviceorientation", this.windowGyroWrapper)
                }
                setOptions(t = {}) { Object(s.c)(this.options, t), this.triggerMouseMove() }
                prepareEl() {
                    let t, e;
                    if ("undefined" != typeof Node && Node.TEXT_NODE)
                        for (t = 0; t < this.el.childNodes.length; t++) {
                            const e = this.el.childNodes[t];
                            if (e.nodeType === Node.TEXT_NODE) {
                                const t = document.createElement("span");
                                t.textContent = e.textContent, e.parentElement.insertBefore(t, e), e.remove()
                            }
                        }
                    for (t = 0; t < this.el.children.length; t++) e = this.el.children[t], "static" === getComputedStyle(e).position && (e.style.position = "relative"), "auto" === getComputedStyle(e).zIndex && (e.style.zIndex = 1);
                    "static" === getComputedStyle(this.el).position && (this.el.style.position = "relative")
                }
                applyCanvasStyles(t, e = {}) { Object(s.c)(t.style, { position: "absolute", zIndex: 0, top: 0, left: 0, background: "" }), Object(s.c)(t.style, e), t.classList.add("vanta-canvas") }
                initThree() { n.WebGLRenderer ? (this.renderer = new n.WebGLRenderer({ alpha: !0, antialias: !0 }), this.el.appendChild(this.renderer.domElement), this.applyCanvasStyles(this.renderer.domElement), isNaN(this.options.backgroundAlpha) && (this.options.backgroundAlpha = 1), this.scene = new n.Scene) : console.warn("[VANTA] No THREE defined on window") }
                getCanvasElement() { return this.renderer ? this.renderer.domElement : this.p5renderer ? this.p5renderer.canvas : void 0 }
                getCanvasRect() { const t = this.getCanvasElement(); return !!t && t.getBoundingClientRect() }
                windowMouseMoveWrapper(t) {
                    const e = this.getCanvasRect();
                    if (!e) return !1;
                    const i = t.clientX - e.left,
                        s = t.clientY - e.top;
                    i >= 0 && s >= 0 && i <= e.width && s <= e.height && (this.mouseX = i, this.mouseY = s, this.options.mouseEase || this.triggerMouseMove(i, s))
                }
                windowTouchWrapper(t) {
                    const e = this.getCanvasRect();
                    if (!e) return !1;
                    if (1 === t.touches.length) {
                        const i = t.touches[0].clientX - e.left,
                            s = t.touches[0].clientY - e.top;
                        i >= 0 && s >= 0 && i <= e.width && s <= e.height && (this.mouseX = i, this.mouseY = s, this.options.mouseEase || this.triggerMouseMove(i, s))
                    }
                }
                windowGyroWrapper(t) {
                    const e = this.getCanvasRect();
                    if (!e) return !1;
                    const i = Math.round(2 * t.alpha) - e.left,
                        s = Math.round(2 * t.beta) - e.top;
                    i >= 0 && s >= 0 && i <= e.width && s <= e.height && (this.mouseX = i, this.mouseY = s, this.options.mouseEase || this.triggerMouseMove(i, s))
                }
                triggerMouseMove(t, e) {
                    void 0 === t && void 0 === e && (this.options.mouseEase ? (t = this.mouseEaseX, e = this.mouseEaseY) : (t = this.mouseX, e = this.mouseY)), this.uniforms && (this.uniforms.iMouse.value.x = t / this.scale, this.uniforms.iMouse.value.y = e / this.scale);
                    const i = t / this.width,
                        s = e / this.height;
                    "function" == typeof this.onMouseMove && this.onMouseMove(i, s)
                }
                setSize() { this.scale || (this.scale = 1), Object(s.e)() && this.options.scaleMobile ? this.scale = this.options.scaleMobile : this.options.scale && (this.scale = this.options.scale), this.width = Math.max(this.el.offsetWidth, this.options.minWidth), this.height = Math.max(this.el.offsetHeight, this.options.minHeight) }
                initMouse() {
                    (!this.mouseX && !this.mouseY || this.mouseX === this.options.minWidth / 2 && this.mouseY === this.options.minHeight / 2) && (this.mouseX = this.width / 2, this.mouseY = this.height / 2, this.triggerMouseMove(this.mouseX, this.mouseY))
                }
                resize() { this.setSize(), this.camera && (this.camera.aspect = this.width / this.height, "function" == typeof this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix()), this.renderer && (this.renderer.setSize(this.width, this.height), this.renderer.setPixelRatio(window.devicePixelRatio / this.scale)), "function" == typeof this.onResize && this.onResize() }
                isOnScreen() {
                    const t = this.el.offsetHeight,
                        e = this.el.getBoundingClientRect(),
                        i = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop,
                        s = e.top + i;
                    return s - window.innerHeight <= i && i <= s + t
                }
                animationLoop() { return this.t || (this.t = 0), this.t += 1, this.t2 || (this.t2 = 0), this.t2 += this.options.speed || 1, this.uniforms && (this.uniforms.iTime.value = .016667 * this.t2), this.options.mouseEase && (this.mouseEaseX = this.mouseEaseX || this.mouseX || 0, this.mouseEaseY = this.mouseEaseY || this.mouseY || 0, Math.abs(this.mouseEaseX - this.mouseX) + Math.abs(this.mouseEaseY - this.mouseY) > .1 && (this.mouseEaseX += .05 * (this.mouseX - this.mouseEaseX), this.mouseEaseY += .05 * (this.mouseY - this.mouseEaseY), this.triggerMouseMove(this.mouseEaseX, this.mouseEaseY))), (this.isOnScreen() || this.options.forceAnimate) && ("function" == typeof this.onUpdate && this.onUpdate(), this.scene && this.camera && (this.renderer.render(this.scene, this.camera), this.renderer.setClearColor(this.options.backgroundColor, this.options.backgroundAlpha)), this.fps && this.fps.update && this.fps.update(), "function" == typeof this.afterRender && this.afterRender()), this.req = window.requestAnimationFrame(this.animationLoop) }
                restart() {
                    if (this.scene)
                        for (; this.scene.children.length;) this.scene.remove(this.scene.children[0]);
                    "function" == typeof this.onRestart && this.onRestart(), this.init()
                }
                init() { "function" == typeof this.onInit && this.onInit() }
                destroy() {
                    "function" == typeof this.onDestroy && this.onDestroy();
                    const t = window.removeEventListener;
                    t("touchstart", this.windowTouchWrapper), t("touchmove", this.windowTouchWrapper), t("scroll", this.windowMouseMoveWrapper), t("mousemove", this.windowMouseMoveWrapper), t("deviceorientation", this.windowGyroWrapper), t("resize", this.resize), window.cancelAnimationFrame(this.req), this.renderer && (this.renderer.domElement && this.el.removeChild(this.renderer.domElement), this.renderer = null, this.scene = null), r.current === this && (r.current = null)
                }
            }, e.b = r.VantaBase
        },
        17: function(t, e, i) {
            "use strict";
            i.r(e);
            var s = i(1),
                o = i(0);
            let n = "object" == typeof window && window.THREE;
            class r extends s.b {
                static initClass() { this.prototype.ww = 100, this.prototype.hh = 80, this.prototype.waveNoise = 4 }
                constructor(t) { n = t.THREE || n, super(t) }
                getMaterial() { const t = { color: this.options.color, shininess: this.options.shininess, flatShading: !0, vertexColors: n.FaceColors, side: n.DoubleSide }; return new n.MeshPhongMaterial(t) }
                onInit() {
                    let t, e;
                    const i = this.getMaterial(),
                        s = new n.Geometry;
                    for (this.gg = [], t = 0; t <= this.ww; t++)
                        for (this.gg[t] = [], e = 0; e <= this.hh; e++) {
                            const i = s.vertices.length,
                                r = new n.Vector3(18 * (t - .5 * this.ww), Object(o.h)(0, this.waveNoise) - 10, 18 * (.5 * this.hh - e));
                            s.vertices.push(r), this.gg[t][e] = i
                        }
                    for (t = 1; t <= this.ww; t++)
                        for (e = 1; e <= this.hh; e++) {
                            let i, r;
                            const h = this.gg[t][e],
                                a = this.gg[t][e - 1],
                                c = this.gg[t - 1][e],
                                u = this.gg[t - 1][e - 1];
                            Object(o.g)(0, 1) ? (i = new n.Face3(u, a, c), r = new n.Face3(a, c, h)) : (i = new n.Face3(u, a, h), r = new n.Face3(u, c, h)), s.faces.push(i, r)
                        }
                    this.plane = new n.Mesh(s, i), this.scene.add(this.plane);
                    const r = new n.AmbientLight(16777215, .9);
                    this.scene.add(r);
                    const h = new n.PointLight(16777215, .9);
                    h.position.set(-100, 250, -100), this.scene.add(h), this.camera = new n.PerspectiveCamera(35, this.width / this.height, 50, 1e4);
                    this.cameraPosition = new n.Vector3(240, 200, 390), this.cameraTarget = new n.Vector3(140, -30, 190), this.camera.position.copy(this.cameraPosition), this.scene.add(this.camera)
                }
                onUpdate() {
                    let t;
                    this.plane.material.color.set(this.options.color), this.plane.material.shininess = this.options.shininess, this.camera.ox = this.cameraPosition.x / this.options.zoom, this.camera.oy = this.cameraPosition.y / this.options.zoom, this.camera.oz = this.cameraPosition.z / this.options.zoom, null != this.controls && this.controls.update();
                    const e = this.camera;
                    Math.abs(e.tx - e.position.x) > .01 && (t = e.tx - e.position.x, e.position.x += .02 * t), Math.abs(e.ty - e.position.y) > .01 && (t = e.ty - e.position.y, e.position.y += .02 * t), Math.abs(e.tz - e.position.z) > .01 && (t = e.tz - e.position.z, e.position.z += .02 * t), e.lookAt(this.cameraTarget);
                    for (let t = 0; t < this.plane.geometry.vertices.length; t++) {
                        const e = this.plane.geometry.vertices[t];
                        if (e.oy) {
                            const t = this.options.waveSpeed,
                                i = Math.sqrt(t) * Math.cos(-e.x - .7 * e.z),
                                s = Math.sin(t * this.t * .02 - t * e.x * .025 + t * e.z * .015 + i),
                                o = Math.pow(s + 1, 2) / 4;
                            e.y = e.oy + o * this.options.waveHeight
                        } else e.oy = e.y
                    }
                    this.plane.geometry.dynamic = !0, this.plane.geometry.computeFaceNormals(), this.plane.geometry.verticesNeedUpdate = !0, this.plane.geometry.normalsNeedUpdate = !0, this.wireframe && (this.wireframe.geometry.fromGeometry(this.plane.geometry), this.wireframe.geometry.computeFaceNormals())
                }
                onMouseMove(t, e) { const i = this.camera; return i.oy || (i.oy = i.position.y, i.ox = i.position.x, i.oz = i.position.z), i.tx = i.ox + 100 * (t - .5) / this.options.zoom, i.ty = i.oy + -100 * (e - .5) / this.options.zoom, i.tz = i.oz + -50 * (t - .5) / this.options.zoom }
            }
            r.prototype.defaultOptions = { color: 21896, shininess: 30, waveHeight: 15, waveSpeed: 1, zoom: 1 }, r.initClass(), e.default = s.a.register("WAVES", r)
        }
    })
}));