(exports.id = 668),
  (exports.ids = [668]),
  (exports.modules = {
    9467: (e, a, i) => {
      "use strict";
      i.r(a), i.d(a, { default: () => Header });
      var s = i(784);
      i(9885);
      var n = i(4341),
        l = i.n(n);
      function Header() {
        let e = new Date();
        return (0, s.jsxs)("header", {
          id: "header",
          className: `${l().flex} ${l()["justify-between"]} ${l()["align-center"]}`,
          children: [
            (0, s.jsxs)("ul", {
              className: l().icons,
              children: [
                s.jsx("li", {
                  children: s.jsx("h1", { children: "Richard Choi" }),
                }),
                s.jsx("li", {
                  children: s.jsx("p", {
                    children: "NJ Frontend Software Engineer",
                  }),
                }),
                s.jsx("li", {
                  id: "copyright",
                  children: (0, s.jsxs)("small", {
                    children: [
                      "Copyright \xa9 ",
                      e.getFullYear(),
                      ". All rights are reserved",
                    ],
                  }),
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: `${l().callToAction} ${l().flex} ${l()["flex-col"]} ${l()["justify-between"]}`,
              children: [
                (0, s.jsxs)("a", {
                  target: "_blank",
                  href: "https://github.com/choir27",
                  className: l().button,
                  children: [
                    "View My GitHub",
                    s.jsx("small", { className: "fa-brands fa-github" }),
                  ],
                }),
                (0, s.jsxs)("a", {
                  target: "_blank",
                  href: "https://www.linkedin.com/in/richard-choir/",
                  className: l().button,
                  children: [
                    "View My LinkedIn",
                    s.jsx("small", { className: "fa-brands fa-linkedin" }),
                  ],
                }),
                (0, s.jsxs)("a", {
                  target: "_blank",
                  href: "https://docs.google.com/document/d/1Gw7hqvLquVzKwg7fD3sfF1NGvoG0dFRzTI5rR-yEPkw/edit?usp=sharing",
                  className: l().button,
                  children: [
                    "View My Resume",
                    s.jsx("small", { className: "fa-solid fa-file-lines" }),
                  ],
                }),
              ],
            }),
            s.jsx("div", {
              className: l().imageContainer,
              children: s.jsx("img", {
                src: "/_next/static/media/profile.e79de8d2.jpg",
                alt: "professional profile picture of myself",
              }),
            }),
          ],
        });
      }
    },
    2841: (e, a, i) => {
      "use strict";
      i.r(a), i.d(a, { default: () => Nav });
      var s = i(784),
        n = i(9715);
      let l = (0, n.Ue)((e) => ({
        menu: !1,
        setMenu: (a) => e(() => ({ menu: a })),
      }));
      var r = i(4341),
        t = i.n(r);
      function Nav() {
        let e = l((e) => e.menu),
          a = l((e) => e.setMenu);
        return (0, s.jsxs)("div", {
          id: "nav",
          className: t().nav,
          children: [
            s.jsx("i", {
              id: "menu",
              className: `${e ? `fa-solid fa-xmark ${t().bars}` : `fa-solid fa-bars ${t().bars}`}`,
              onClick: (i) => {
                e ? a(!1) : a(!0);
              },
            }),
            (0, s.jsxs)("nav", {
              className: e ? "menu" : "hidden",
              children: [
                (0, s.jsxs)("ul", {
                  children: [
                    s.jsx("li", {
                      children: s.jsx("h2", { children: "Menu" }),
                    }),
                    s.jsx("li", {
                      children: s.jsx("a", {
                        className: t().link,
                        href: "/",
                        children: "Home",
                      }),
                    }),
                    s.jsx("li", {
                      children: s.jsx("a", {
                        className: t().link,
                        href: "/aboutMe",
                        children: "About Me",
                      }),
                    }),
                    s.jsx("li", {
                      children: s.jsx("a", {
                        className: t().link,
                        href: "/allProjects",
                        children: "All Projects",
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)("ul", {
                  className: `${t().flex} ${t()["justify-between"]} ${t().social} icons`,
                  children: [
                    s.jsx("li", {
                      children: s.jsx("a", {
                        className: t().link,
                        target: "_blank",
                        href: "https://github.com/choir27",
                        children: s.jsx("small", {
                          className: "fa-brands fa-github",
                          children: s.jsx("span", {
                            className: "hidden",
                            children: "My Github",
                          }),
                        }),
                      }),
                    }),
                    s.jsx("li", {
                      children: s.jsx("a", {
                        className: t().link,
                        target: "_blank",
                        href: "https://www.linkedin.com/in/richard-choir/",
                        children: s.jsx("small", {
                          className: "fa-brands fa-linkedin",
                          children: s.jsx("span", {
                            className: "hidden",
                            children: "My LinkedIn",
                          }),
                        }),
                      }),
                    }),
                    s.jsx("li", {
                      children: s.jsx("a", {
                        className: t().link,
                        target: "_blank",
                        href: "https://docs.google.com/document/d/1Gw7hqvLquVzKwg7fD3sfF1NGvoG0dFRzTI5rR-yEPkw/edit?usp=sharing",
                        children: s.jsx("small", {
                          className: "fa-solid fa-file-lines",
                          children: s.jsx("span", {
                            className: "hidden",
                            children: "My Resume",
                          }),
                        }),
                      }),
                    }),
                    s.jsx("li", {
                      children: s.jsx("a", {
                        className: t().link,
                        target: "_blank",
                        href: "https://twitter.com/choir241",
                        children: s.jsx("small", {
                          className: "fa-brands fa-twitter",
                          children: s.jsx("span", {
                            className: "hidden",
                            children: "Twitter",
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    2306: (e) => {
      e.exports = {
        flex: "main_flex__DzVMV",
        "flex-wrap": "main_flex-wrap__SvCEg",
        "flex-col": "main_flex-col__Ozvnm",
        "justify-center": "main_justify-center__kb7Jf",
        "justify-between": "main_justify-between__boI9I",
        "justify-evenly": "main_justify-evenly__gWLR0",
        "align-center": "main_align-center__VeK_1",
        imageContainer: "main_imageContainer__CPWcp",
        callToAction: "main_callToAction__Rhs0N",
        icons: "main_icons__Ybb3Y",
        social: "main_social__VEj3Y",
        button: "main_button__4zvZW",
        icon: "main_icon__6imUc",
        fit: "main_fit__7fS4U",
        small: "main_small__DLtyZ",
        large: "main_large__5sAjY",
        link: "main_link__XN810",
        bars: "main_bars__fW7_o",
        nav: "main_nav__NZyIU",
      };
    },
    4341: (e) => {
      e.exports = {
        flex: "main_flex__DzVMV",
        "flex-wrap": "main_flex-wrap__SvCEg",
        "flex-col": "main_flex-col__Ozvnm",
        "justify-center": "main_justify-center__kb7Jf",
        "justify-between": "main_justify-between__boI9I",
        "justify-evenly": "main_justify-evenly__gWLR0",
        "align-center": "main_align-center__VeK_1",
        imageContainer: "main_imageContainer__CPWcp",
        callToAction: "main_callToAction__Rhs0N",
        icons: "main_icons__Ybb3Y",
        social: "main_social__VEj3Y",
        button: "main_button__4zvZW",
        icon: "main_icon__6imUc",
        fit: "main_fit__7fS4U",
        small: "main_small__DLtyZ",
        large: "main_large__5sAjY",
        link: "main_link__XN810",
        bars: "main_bars__fW7_o",
        nav: "main_nav__NZyIU",
      };
    },
    66: (e, a, i) => {
      "use strict";
      i.d(a, { ZP: () => c });
      var s = i(5153);
      let n = (0, s.createProxy)(
          String.raw`C:\Users\richa\OneDrive\Documents\Portfolio\components\Header.tsx`,
        ),
        { __esModule: l, $$typeof: r } = n,
        t = n.default,
        c = t;
    },
    9752: (e, a, i) => {
      "use strict";
      i.d(a, { ZP: () => c });
      var s = i(5153);
      let n = (0, s.createProxy)(
          String.raw`C:\Users\richa\OneDrive\Documents\Portfolio\components\Nav.tsx`,
        ),
        { __esModule: l, $$typeof: r } = n,
        t = n.default,
        c = t;
    },
    4606: () => {},
    5475: () => {},
  });
