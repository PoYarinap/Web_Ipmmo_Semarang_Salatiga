module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Web_Ipmmo_Semarang_Salatiga/src/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.0x3dzn~oxb6tn.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/Web_Ipmmo_Semarang_Salatiga/src/app/favicon.ico.mjs { IMAGE => \"[project]/Web_Ipmmo_Semarang_Salatiga/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/src/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Button.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
const Button = ({ variant = 'primary', size = 'md', href, className = '', children, ...props })=>{
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none active:scale-95 disabled:opacity-50';
    const variants = {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md hover:shadow-lg',
        outline: 'border-2 border-primary text-primary hover:bg-primary/5',
        ghost: 'text-primary hover:bg-primary/5'
    };
    const sizes = {
        sm: 'px-4 py-1.5 text-sm',
        md: 'px-6 py-2.5 text-base',
        lg: 'px-8 py-3.5 text-lg'
    };
    const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: combinedStyles,
            children: children
        }, void 0, false, {
            fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Button.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: combinedStyles,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Button.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Button;
}),
"[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Hero.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
;
const Hero = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-screen flex items-center pt-32 pb-20 lg:pb-24 overflow-hidden bg-gradient-to-br from-blue-50 to-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            }, void 0, false, {
                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Hero.tsx",
                lineNumber: 9,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
            }, void 0, false, {
                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Hero.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-custom relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-secondary uppercase bg-secondary/10 rounded-full",
                                    children: "Selamat Datang di IPMMO"
                                }, void 0, false, {
                                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Hero.tsx",
                                    lineNumber: 15,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary mb-6 leading-tight",
                                    children: [
                                        "Membangun Sinergi, ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Hero.tsx",
                                            lineNumber: 19,
                                            columnNumber: 48
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-secondary",
                                            children: "Wujudkan Prestasi."
                                        }, void 0, false, {
                                            fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Hero.tsx",
                                            lineNumber: 20,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Hero.tsx",
                                    lineNumber: 18,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed",
                                    children: "Ikatan Pelajar Mahasiswa Mimika (IPMMO) Korwil Semarang–Salatiga berkomitmen untuk menjadi wadah aspirasi, pengembangan diri, dan pemersatu bagi mahasiswa Mimika di tanah perantauan."
                                }, void 0, false, {
                                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Hero.tsx",
                                    lineNumber: 24,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            size: "lg",
                                            href: "/tentang",
                                            children: "Kenali Kami"
                                        }, void 0, false, {
                                            fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Hero.tsx",
                                            lineNumber: 31,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            size: "lg",
                                            variant: "outline",
                                            href: "/program",
                                            children: "Program Kerja"
                                        }, void 0, false, {
                                            fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Hero.tsx",
                                            lineNumber: 34,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Hero.tsx",
                                    lineNumber: 30,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Hero.tsx",
                            lineNumber: 14,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl fade-in animation-delay-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/ipmmo.jpeg",
                                    alt: "IPMMO Members",
                                    fill: true,
                                    className: "object-cover object-bottom",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Hero.tsx",
                                    lineNumber: 41,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Hero.tsx",
                                    lineNumber: 48,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-6 left-6 right-6 glass-morphism p-6 rounded-2xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex -space-x-2",
                                                children: [
                                                    1,
                                                    2,
                                                    3,
                                                    4
                                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 rounded-full border-2 border-white bg-blue-200 overflow-hidden",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                            src: `https://i.pravatar.cc/100?img=${i + 10}`,
                                                            alt: "Member",
                                                            width: 40,
                                                            height: 40
                                                        }, void 0, false, {
                                                            fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Hero.tsx",
                                                            lineNumber: 58,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, i, false, {
                                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Hero.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Hero.tsx",
                                                lineNumber: 52,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-primary",
                                                        children: "500+ Anggota"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Hero.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-muted-foreground",
                                                        children: "Bergabung bersama kami"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Hero.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Hero.tsx",
                                                lineNumber: 67,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Hero.tsx",
                                        lineNumber: 51,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Hero.tsx",
                                    lineNumber: 50,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Hero.tsx",
                            lineNumber: 40,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Hero.tsx",
                    lineNumber: 13,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Hero.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Hero.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Hero;
}),
"[project]/Web_Ipmmo_Semarang_Salatiga/src/data/dummy.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "activities",
    ()=>activities,
    "gallery",
    ()=>gallery,
    "members",
    ()=>members,
    "navItems",
    ()=>navItems,
    "news",
    ()=>news,
    "programs",
    ()=>programs,
    "stats",
    ()=>stats
]);
const navItems = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Tentang',
        href: '/tentang'
    },
    {
        label: 'Program',
        href: '/program'
    },
    {
        label: 'Kegiatan',
        href: '/kegiatan'
    },
    {
        label: 'Galeri',
        href: '/galeri'
    },
    {
        label: 'Berita',
        href: '/berita'
    },
    {
        label: 'Kontak',
        href: '/kontak'
    }
];
const members = [
    {
        id: '1',
        name: 'Andi Pratama',
        role: 'Ketua Umum',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        period: '2024 - 2025'
    },
    {
        id: '2',
        name: 'Siti Aminah',
        role: 'Sekretaris Umum',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
        period: '2024 - 2025'
    },
    {
        id: '3',
        name: 'Budi Santoso',
        role: 'Bendahara Umum',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
        period: '2024 - 2025'
    },
    {
        id: '4',
        name: 'Rina Wijaya',
        role: 'Kabid Kaderisasi',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
        period: '2024 - 2025'
    }
];
const programs = [
    {
        id: '1',
        title: 'Latihan Kepemimpinan Dasar',
        description: 'Pelatihan dasar bagi anggota baru untuk menumbuhkan jiwa kepemimpinan dan organisatoris.',
        status: 'Selesai'
    },
    {
        id: '2',
        title: 'Bakti Sosial Ramadhan',
        description: 'Kegiatan berbagi sembako dan buka puasa bersama di panti asuhan wilayah Semarang.',
        status: 'Aktif'
    },
    {
        id: '3',
        title: 'IPMMO Goes to School',
        description: 'Sosialisasi pendidikan tinggi dan organisasi ke sekolah-sekolah di daerah asal.',
        status: 'Mendatang'
    }
];
const activities = [
    {
        id: '1',
        title: 'Makrab IPMMO 2024',
        date: '15 Maret 2024',
        location: 'Bandungan, Kabupaten Semarang',
        image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=500&fit=crop',
        description: 'Malam keakraban untuk mempererat tali silaturahmi antar anggota IPMMO Korwil Semarang-Salatiga.'
    },
    {
        id: '2',
        title: 'Diskusi Publik Mahasiswa',
        date: '20 April 2024',
        location: 'Auditorium UKSW, Salatiga',
        image: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=800&h=500&fit=crop',
        description: 'Diskusi mengenai peran mahasiswa dalam pembangunan daerah di era digital.'
    }
];
const news = [
    {
        id: '1',
        slug: 'pelantikan-pengurus-baru-2024',
        title: 'Pelantikan Pengurus Baru IPMMO Periode 2024-2025',
        date: '10 Januari 2024',
        excerpt: 'IPMMO Korwil Semarang-Salatiga resmi melantik jajaran pengurus baru untuk masa bakti satu tahun ke depan.',
        content: 'Pelantikan dilaksanakan dengan khidmat di Aula Balai Kota Semarang. Dihadiri oleh ratusan mahasiswa Mimika dan tamu undangan dari berbagai organisasi mahasiswa daerah lainnya di Jawa Tengah. Ketua Umum terpilih, Andi Pratama, dalam sambutannya menekankan pentingnya sinergi dan kolaborasi antar anggota untuk memajukan IPMMO serta berkontribusi nyata bagi daerah asal Mimika.',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop',
        author: 'Admin',
        category: 'Organisasi'
    },
    {
        id: '2',
        slug: 'prestasi-mahasiswa-ipmmo-nasional',
        title: 'Prestasi Mahasiswa IPMMO di Ajang Nasional',
        date: '5 Februari 2024',
        excerpt: 'Salah satu anggota IPMMO berhasil meraih juara dalam kompetisi debat tingkat nasional.',
        content: 'Selamat kepada perwakilan IPMMO yang telah mengharumkan nama organisasi dan daerah di kancah nasional. Prestasi ini membuktikan bahwa mahasiswa Mimika memiliki potensi besar yang mampu bersaing dengan mahasiswa dari seluruh Indonesia. Kompetisi yang berlangsung selama tiga hari di Jakarta ini menguji kemampuan analitis dan komunikasi para peserta.',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=500&fit=crop',
        author: 'Humas',
        category: 'Prestasi'
    },
    {
        id: '3',
        slug: 'diskusi-publik-peran-mahasiswa',
        title: 'Diskusi Publik: Peran Mahasiswa dalam Pembangunan',
        date: '20 April 2024',
        excerpt: 'IPMMO menyelenggarakan diskusi publik yang dihadiri oleh narasumber ahli dan ratusan mahasiswa.',
        content: 'Kegiatan diskusi publik ini bertujuan untuk membuka wawasan mahasiswa mengenai isu-isu terkini dan bagaimana mahasiswa dapat mengambil peran strategis dalam pembangunan daerah. Acara berjalan interaktif dengan antusiasme peserta yang tinggi dalam sesi tanya jawab.',
        image: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?w=800&h=500&fit=crop',
        author: 'Admin',
        category: 'Kegiatan'
    },
    {
        id: '4',
        slug: 'kerjasama-dengan-pemerintah-daerah',
        title: 'Penandatanganan MoU dengan Pemerintah Daerah',
        date: '12 Mei 2024',
        excerpt: 'Langkah strategis IPMMO dalam menjalin kemitraan resmi dengan Pemerintah Daerah untuk program beasiswa.',
        content: 'Kerja sama ini diharapkan dapat memberikan dampak positif jangka panjang bagi anggota IPMMO, khususnya dalam hal kemudahan akses beasiswa dan fasilitas penunjang pendidikan lainnya. Pemerintah daerah menyambut baik inisiatif dari pengurus IPMMO.',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=800&h=500&fit=crop',
        author: 'Humas',
        category: 'Kerjasama'
    }
];
const gallery = [
    {
        id: '1',
        title: 'Kegiatan A',
        image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&fit=crop',
        category: 'Kegiatan'
    },
    {
        id: '2',
        title: 'Kegiatan B',
        image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&fit=crop',
        category: 'Rapat'
    },
    {
        id: '3',
        title: 'Kegiatan C',
        image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&fit=crop',
        category: 'Sosial'
    },
    {
        id: '4',
        title: 'Kegiatan D',
        image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&fit=crop',
        category: 'Kegiatan'
    },
    {
        id: '5',
        title: 'Kegiatan E',
        image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&fit=crop',
        category: 'Rapat'
    },
    {
        id: '6',
        title: 'Kegiatan F',
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&fit=crop',
        category: 'Sosial'
    }
];
const stats = [
    {
        label: 'Anggota Aktif',
        value: '500+',
        icon: 'users'
    },
    {
        label: 'Program Kerja',
        value: '24',
        icon: 'briefcase'
    },
    {
        label: 'Kegiatan Selesai',
        value: '150+',
        icon: 'calendar'
    },
    {
        label: 'Prestasi',
        value: '12',
        icon: 'award'
    }
];
}),
"[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Stats.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$data$2f$dummy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/src/data/dummy.ts [app-rsc] (ecmascript)");
;
;
const Stats = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-12 bg-primary",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-custom",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 lg:grid-cols-4 gap-8",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$data$2f$dummy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stats"].map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-4xl md:text-5xl font-extrabold mb-2",
                                children: stat.value
                            }, void 0, false, {
                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Stats.tsx",
                                lineNumber: 11,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-blue-200 text-sm md:text-base font-medium uppercase tracking-wider",
                                children: stat.label
                            }, void 0, false, {
                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Stats.tsx",
                                lineNumber: 12,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Stats.tsx",
                        lineNumber: 10,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Stats.tsx",
                lineNumber: 8,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Stats.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Stats.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Stats;
}),
"[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "MemberCard",
    ()=>MemberCard,
    "NewsCard",
    ()=>NewsCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
;
const Card = ({ title, description, image, footer, className = '', children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-card text-card-foreground rounded-2xl shadow-lg border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`,
        children: [
            image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-48 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    src: image,
                    alt: title,
                    fill: true,
                    className: "object-cover"
                }, void 0, false, {
                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
                    lineNumber: 18,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold mb-2",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground text-sm mb-4 leading-relaxed",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
                        lineNumber: 28,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            footer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 bg-muted/50 border-t border-border",
                children: footer
            }, void 0, false, {
                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
                lineNumber: 31,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const MemberCard = ({ name, role, image, period })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group flex flex-col items-center p-6 bg-white rounded-2xl shadow-md border border-border hover:shadow-lg transition-all",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-32 h-32 mb-4 overflow-hidden rounded-full border-4 border-primary/10 group-hover:border-primary/30 transition-all",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    src: image,
                    alt: name,
                    fill: true,
                    className: "object-cover"
                }, void 0, false, {
                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-lg font-bold text-center",
                children: name
            }, void 0, false, {
                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-secondary font-semibold text-sm",
                children: role
            }, void 0, false, {
                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground text-xs mt-1",
                children: period
            }, void 0, false, {
                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const NewsCard = ({ title, description, image, category, date, author = 'ADMIN_IPMMO', href = '#' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: "group flex flex-col bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-56 w-full overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: image,
                        alt: title,
                        fill: true,
                        className: "object-cover transition-transform duration-500 group-hover:scale-105"
                    }, void 0, false, {
                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-[#00c8ff] text-white text-xs font-bold px-4 py-2 rounded-r-full uppercase tracking-wider shadow-sm",
                            children: category
                        }, void 0, false, {
                            fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-8 flex flex-col flex-grow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2 text-xs font-bold tracking-widest uppercase mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#00c8ff]",
                                children: date
                            }, void 0, false, {
                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-300",
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-400",
                                children: author
                            }, void 0, false, {
                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-extrabold text-[#0f1525] mb-3 leading-snug group-hover:text-[#00c8ff] transition-colors line-clamp-2",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-3",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mt-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#0f1525] font-extrabold text-sm tracking-widest uppercase",
                                children: "Baca Selengkapnya"
                            }, void 0, false, {
                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#00c8ff] transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5 text-[#0f1525] group-hover:text-white transition-colors",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                    }, void 0, false, {
                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Features.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$components$2f$Card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$data$2f$dummy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/src/data/dummy.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Button.tsx [app-rsc] (ecmascript)");
// Internal link fix
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
const Features = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-padding bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-custom",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row justify-between items-end mb-12 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-secondary font-bold uppercase tracking-widest text-sm mb-3 block",
                                    children: "Program Unggulan"
                                }, void 0, false, {
                                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Features.tsx",
                                    lineNumber: 12,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl font-extrabold text-primary",
                                    children: "Fokus Kami Untuk Kemajuan Bersama"
                                }, void 0, false, {
                                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Features.tsx",
                                    lineNumber: 13,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Features.tsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            variant: "outline",
                            href: "/program",
                            children: "Lihat Semua Program"
                        }, void 0, false, {
                            fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Features.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Features.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$data$2f$dummy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["programs"].map((program)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$components$2f$Card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                            title: program.title,
                            description: program.description,
                            footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `px-3 py-1 rounded-full text-xs font-bold ${program.status === 'Aktif' ? 'bg-green-100 text-green-600' : program.status === 'Selesai' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'}`,
                                        children: program.status
                                    }, void 0, false, {
                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Features.tsx",
                                        lineNumber: 26,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/program#${program.id}`,
                                        className: "text-primary text-sm font-bold hover:underline",
                                        children: "Detail →"
                                    }, void 0, false, {
                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Features.tsx",
                                        lineNumber: 32,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Features.tsx",
                                lineNumber: 25,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, program.id, false, {
                            fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Features.tsx",
                            lineNumber: 20,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Features.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Features.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Features.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
;
const __TURBOPACK__default__export__ = Features;
}),
"[project]/Web_Ipmmo_Semarang_Salatiga/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$sections$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Hero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$sections$2f$Stats$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Stats.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$sections$2f$Features$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/src/sections/Features.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$data$2f$dummy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/src/data/dummy.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$components$2f$Card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/src/components/Button.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$sections$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$sections$2f$Stats$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$sections$2f$Features$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section-padding bg-muted/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-custom",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-secondary font-bold uppercase tracking-widest text-sm mb-3 block",
                                    children: "Warta Organisasi"
                                }, void 0, false, {
                                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/page.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl font-extrabold text-primary mb-4",
                                    children: "Berita Terkini"
                                }, void 0, false, {
                                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/page.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground max-w-2xl mx-auto",
                                    children: "Ikuti perkembangan terbaru mengenai kegiatan, prestasi, dan pengumuman resmi dari IPMMO Korwil Semarang-Salatiga."
                                }, void 0, false, {
                                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/page.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/page.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$data$2f$dummy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["news"].slice(0, 3).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$components$2f$Card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NewsCard"], {
                                    title: item.title,
                                    description: item.excerpt,
                                    image: item.image,
                                    category: item.category,
                                    date: item.date,
                                    href: `/berita/${item.slug}`
                                }, item.id, false, {
                                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/page.tsx",
                                    lineNumber: 28,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/page.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                variant: "outline",
                                size: "lg",
                                href: "/berita",
                                children: "Lihat Semua Berita"
                            }, void 0, false, {
                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/page.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/page.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/page.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-custom relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-r from-primary via-[#1e40af] to-[#0f1525] rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"
                            }, void 0, false, {
                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/page.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 w-64 h-64 bg-[#00c8ff]/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"
                            }, void 0, false, {
                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/page.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight",
                                        children: [
                                            "Siap Menjadi Bagian dari ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                className: "hidden md:block"
                                            }, void 0, false, {
                                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/page.tsx",
                                                lineNumber: 56,
                                                columnNumber: 42
                                            }, this),
                                            " Keluarga Besar IPMMO?"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/page.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-blue-100/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium leading-relaxed",
                                        children: "Mari bergabung dan berkontribusi bersama kami untuk membangun masa depan Mimika yang lebih baik melalui pengembangan potensi mahasiswa."
                                    }, void 0, false, {
                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row justify-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                size: "lg",
                                                href: "/kontak",
                                                className: "bg-[#00c8ff] hover:bg-[#00a3cc] text-[#0f1525] font-bold border-none shadow-lg shadow-[#00c8ff]/30",
                                                children: "Hubungi Kami Sekarang"
                                            }, void 0, false, {
                                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/page.tsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Web_Ipmmo_Semarang_Salatiga$2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                variant: "outline",
                                                size: "lg",
                                                href: "/tentang",
                                                className: "border-white/30 text-white hover:bg-white/10 backdrop-blur-sm",
                                                children: "Pelajari Lebih Lanjut"
                                            }, void 0, false, {
                                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/page.tsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/page.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/page.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/page.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Web_Ipmmo_Semarang_Salatiga/src/app/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/Web_Ipmmo_Semarang_Salatiga/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Web_Ipmmo_Semarang_Salatiga/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0z810v9._.js.map