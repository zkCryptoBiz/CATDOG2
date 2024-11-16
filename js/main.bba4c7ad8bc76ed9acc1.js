function __webpack_require__(moduleId) {
  var cachedModule = __webpack_module_cache__[moduleId];
  return (
    void 0 !== cachedModule ||
      ((cachedModule = __webpack_module_cache__[moduleId] =
        { id: moduleId, loaded: !1, exports: {} }),
      __webpack_modules__[moduleId].call(
        cachedModule.exports,
        cachedModule,
        cachedModule.exports,
        __webpack_require__
      ),
      (cachedModule.loaded = !0)),
    cachedModule.exports
  );
}
var deferred,
  inProgress,
  installedChunks,
  chunkLoadingGlobal,
  __webpack_modules__,
  __webpack_module_cache__,
  webpackJsonpCallback;
(__webpack_modules__ = {
  782: (
    __unused_webpack_module,
    __unused_webpack___webpack_exports__,
    __webpack_require__
  ) => {
    "use strict";
    var react = __webpack_require__(3696),
      client = __webpack_require__(7470),
      index_browser_esm = __webpack_require__(8769),
      types = __webpack_require__(143),
      adapter = __webpack_require__(5767),
      esm_adapter = __webpack_require__(6278),
      lib_esm_adapter = __webpack_require__(8075),
      wallet_adapter_ledger_lib_esm_adapter = __webpack_require__(7084),
      ConnectionProvider = __webpack_require__(4909),
      WalletProvider = __webpack_require__(6640),
      WalletModalProvider = __webpack_require__(6937),
      react_toastify_esm = __webpack_require__(5467);
    const HeroSec = () =>
      react.createElement(
        "div",
        { className: "hero-wrap", id: "about" },
        react.createElement("img", {
          src: "../assets/images/heroMobBg.png",
          className: "whiteBg-mob",
        }),
        react.createElement(
          "div",
          { className: "hero-content" },
          react.createElement(
            "div",
            { className: "mobGr" },
            react.createElement("img", {
              className: "hero-logo",
              src: "../assets/images/mainLogo.png",
            }),
            react.createElement(
              "p",
              { className: "hero-text hoverAnim" },
              "Life of a ",
              react.createElement("span", null, "cat and a dog"),
              " with a unique ",
              react.createElement("span", null, "twist:"),
              " they are literally ",
              react.createElement("span", null, "connected"),
              ".",
              react.createElement("span", null, " Follow"),
              " the development of this ",
              react.createElement("span", null, "story")
            )
          ),
          react.createElement("img", {
            className: "hero-catdog_img",
            src: "../assets/images/heroCatdog.gif",
          })
        )
      );
    __webpack_require__(8716);
    const Roadmap = () => {
        const [mousePos, setMousePos] = (0, react.useState)({ x: -1, y: -1 });
        return (
          (0, react.useEffect)(() => {
            var flesh = document.getElementById("catdogScan");
            const cursor = document.getElementById("cursor");
            flesh.addEventListener("mousemove", (e) => {
              setMousePos({ x: e.offsetX, y: e.layerY }),
                console.log("scroll", e.offsetX, e.layerY),
                (cursor.style.display = "none");
            }),
              flesh.addEventListener("mouseleave", (e) => {
                cursor.style.display = "block";
              });
          }, []),
          react.createElement(
            "div",
            { className: "roadmap-section", id: "roadmap" },
            react.createElement("img", {
              className: "roadmap-bg",
              src: "../assets/images/roadmapBg.png",
            }),
            react.createElement("img", {
              className: "circleAnim",
              src: "../assets/images/circle.png",
            }),
            react.createElement(
              "div",
              { className: "roadmap-body" },
              react.createElement(
                "div",
                { className: "roadmap-title" },
                react.createElement(
                  "div",
                  { className: "roadmap-title_group" },
                  react.createElement(
                    "span",
                    { className: "hoverAnim" },
                    "roadmap"
                  ),
                  react.createElement("img", {
                    className: "",
                    src: "../assets/images/roadmapStar.png",
                  })
                )
              ),
              react.createElement(
                "div",
                { className: "roadmapCatdogWrap" },
                react.createElement(
                  "div",
                  { className: "roadmapCatdogBlock" },
                  react.createElement(
                    "div",
                    { id: "catdogScanWrap", className: "catdogScanWrap" },
                    react.createElement("img", {
                      src: "../assets/images/loop.ico",
                      style: {
                        left: mousePos.x - 38 + "px",
                        top: mousePos.y - 38 + "px",
                      },
                      className: "loop",
                      id: "loop",
                    }),
                    react.createElement(
                      "img",
                      {
                        style: {
                          WebkitMaskPosition: `${mousePos.x - 35}px ${mousePos.y - 35}px`,
                          maskPosition: `${mousePos.x - 35}px ${mousePos.y - 35}px`,
                          // zIndex: 9999,
                          // position: "relative",
                        },
                        className: "catdogScan",
                        id: "catdogScan",
                        src: "./assets/images/catdogSkelet.png",
                      }
                    )
                  ),
                  
                  react.createElement("img", {
                    className: "roadmapBorn",
                    src: "../assets/images/roadmapBorn.png",
                  }),
                  react.createElement("img", {
                    className: "roadmapGrowth",
                    src: "../assets/images/roadmapGrowth.png",
                  }),
                  react.createElement("img", {
                    className: "roadmapNft",
                    src: "../assets/images/roadmapNft.png",
                  }),
                  react.createElement("img", {
                    className: "roadmapCex",
                    src: "../assets/images/roadmapCex.png",
                  }),
                  react.createElement("img", {
                    className: "bornMob",
                    src: "../assets/images/bornMob.png",
                  }),
                  react.createElement("img", {
                    className: "growthMob",
                    src: "../assets/images/growthMob.png",
                  }),
                  react.createElement("img", {
                    className: "nftMob",
                    src: "../assets/images/nftsMob.png",
                  }),
                  react.createElement("img", {
                    className: "cexMob",
                    src: "../assets/images/cexMob.png",
                  })
                )
              )
            )
          )
        );
      },
      HeroEnd = () =>
        react.createElement(
          "div",
          { className: "heroend-section" },
          react.createElement("img", {
            className: "heroend-bg",
            src: "../assets/images/catdogEndBg.png",
          }),
          react.createElement("img", {
            className: "heroend-img",
            src: "../assets/images/catdogEnd.png",
          })
        ),
      Dots = () =>
        react.createElement(
          "div",
          { className: "dots-list" },
          react.createElement("div", { className: "dot" }),
          react.createElement("div", { className: "dot" }),
          react.createElement("div", { className: "dot" })
        ),
      Tokenomics = () =>
        react.createElement(
          "div",
          { className: "tokenomicsBlock", id: "tokenomics" },
          react.createElement("img", {
            className: "tokenomicsBg",
            src: "../assets/images/tokenomicsBg.png",
          }),
          react.createElement(
            "div",
            { className: "tokenomicsBody" },
            react.createElement(
              "div",
              { className: "tokenomicsNoteWrap" },
              react.createElement(
                "div",
                { className: "tokenomicsNote" },
                react.createElement(
                  "div",
                  { className: "tokenomicsNoteHeader hoverAnim" },
                  react.createElement(Dots, null),
                  "tokenomics"
                ),
                react.createElement(
                  "div",
                  { className: "tokenomicsNoteBody" },
                  react.createElement(
                    "div",
                    { className: "tokenomicsItem" },
                    react.createElement(
                      "div",
                      { className: "tokenomicsItemInfo" },
                      react.createElement("img", {
                        src: "../assets/images/okIco.png",
                        className: "okIco",
                      }),
                      react.createElement(
                        "span",
                        { className: "tokenomicsItemInfoTitle hoverAnim" },
                        "0"
                      ),
                      react.createElement(
                        "span",
                        { className: "tokenomicsItemInfoSubtitle" },
                        "taxes"
                      )
                    ),
                    react.createElement("img", {
                      className: "tokenomicsBall",
                      src: "../assets/images/tokenomicsBall.png",
                    })
                  ),
                  react.createElement(
                    "div",
                    { className: "tokenomicsItem" },
                    react.createElement(
                      "div",
                      { className: "tokenomicsItemInfo" },
                      react.createElement("img", {
                        src: "../assets/images/okIco.png",
                        className: "okIco",
                      }),
                      react.createElement(
                        "span",
                        { className: "tokenomicsItemInfoTitle hoverAnim" },
                        "LP"
                      ),
                      react.createElement(
                        "span",
                        { className: "tokenomicsItemInfoSubtitle" },
                        "burned"
                      )
                    ),
                    react.createElement("img", {
                      className: "tokenomicsFish",
                      src: "../assets/images/tokenomicsFish.png",
                    })
                  ),
                  react.createElement(
                    "div",
                    { className: "tokenomicsItem" },
                    react.createElement(
                      "div",
                      { className: "tokenomicsItemInfo" },
                      react.createElement("img", {
                        src: "../assets/images/okIco.png",
                        className: "okIco",
                      }),
                      react.createElement(
                        "span",
                        { className: "tokenomicsItemInfoTitle hoverAnim" },
                        "1B"
                      ),
                      react.createElement(
                        "span",
                        { className: "tokenomicsItemInfoSubtitle" },
                        "supply"
                      )
                    ),
                    react.createElement("img", {
                      className: "tokenomicsMis",
                      src: "../assets/images/tokenomicsMis.png",
                    })
                  )
                )
              )
            ),
            react.createElement(
              "div",
              { className: "tokenomicsCatWrap" },
              react.createElement(
                "div",
                { className: "liqBlock tokenomicsSmallBlock" },
                react.createElement(
                  "span",
                  { className: "tokenomicsSmallOrange hoverAnim" },
                  "100%"
                ),
                react.createElement(
                  "span",
                  { className: "tokenomicsSmallTitle hoverAnim" },
                  "Liquidity"
                )
              ),
              react.createElement("img", {
                className: "tokenomicsCatdog",
                src: "../assets/images/tokenomicsCatdog.png",
              })
            )
          )
        );
    var index_es = __webpack_require__(8004);
    const Comix = () => {
        const book = (0, react.useRef)(),
          [width, setWidth] = (0, react.useState)(600),
          [height, setHeight] = (0, react.useState)(620);
        return (
          (0, react.useEffect)(() => {
            window.innerWidth < 1340 && (setWidth(450), setHeight(470)),
              window.innerWidth < 1020 && (setWidth(350), setHeight(370)),
              window.innerWidth < 790 && (setWidth(280), setHeight(300)),
              window.innerWidth < 640 && (setWidth(220), setHeight(240)),
              window.innerWidth < 480 && (setWidth(150), setHeight(170));
          }, []),
          react.createElement(
            "div",
            { id: "comix", className: "comix-section" },
            react.createElement("img", {
              src: "../assets/images/comixBg.png",
              className: "comix-bg",
            }),
            react.createElement(
              "div",
              { className: "comix-body" },
              react.createElement(
                index_es.A,
                {
                  ref: book,
                  useMouseEvents: !1,
                  drawShadow: !1,
                  className: "book",
                  width: width,
                  height: height,
                },
                react.createElement(
                  "div",
                  { className: "demoPage" },
                  react.createElement(
                    "div",
                    { className: "comixItem" },
                    react.createElement(
                      "div",
                      { className: "comixItemHeader hoverAnim" },
                      "CADOGE comix"
                    ),
                    react.createElement(
                      "div",
                      { className: "comixItemBody comixItemBodyFirst" },
                      react.createElement("img", {
                        className: "comixCatImg",
                        src: "../assets/images/comics3.webp",
                      })
                    )
                  )
                ),
                react.createElement(
                  "div",
                  { className: "demoPage" },
                  react.createElement(
                    "div",
                    { className: "comixItem" },
                    react.createElement(
                      "div",
                      { className: "comixItemHeader hoverAnim" },
                      "ep1",
                      react.createElement("img", {
                        className: "pin",
                        src: "../assets/images/comixItem.png",
                      })
                    ),
                    react.createElement(
                      "div",
                      { className: "comixItemBody comixItemBodySecond" },
                      react.createElement("img", {
                        className: "swiper-next-btn",
                        onClick: () => book.current.pageFlip().flipNext(),
                        src: "../assets/images/swiperNext.png",
                      }),
                      react.createElement("img", {
                        className: "comixCatImg",
                        src: "../assets/images/comics1.webp",
                      })
                    )
                  )
                ),
                react.createElement(
                  "div",
                  { className: "demoPage" },
                  react.createElement(
                    "div",
                    { className: "comixItem" },
                    react.createElement(
                      "div",
                      { className: "comixItemHeader hoverAnim" },
                      "ep2"
                    ),
                    react.createElement(
                      "div",
                      { className: "comixItemBody comixItemBodySecond" },
                      react.createElement("img", {
                        className: "swiper-next-btn arrowLeftPos",
                        onClick: () => book.current.pageFlip().flipPrev(),
                        src: "../assets/images/swiperNext.png",
                      }),
                      react.createElement("img", {
                        className: "comixCatImg",
                        src: "../assets/images/comics2.webp",
                      })
                    )
                  )
                )
              )
            ),
            react.createElement(
              "div",
              { className: "moreBtnWrap" },
              react.createElement(
                "div",
                { className: "moreBtn" },
                "more soon",
                react.createElement("img", {
                  src: "../assets/images/arr.png",
                  className: "moreAr",
                })
              )
            ),
            react.createElement(
              "div",
              { className: "footerTextWrap" },
              react.createElement("img", {
                src: "../assets/images/footerText.png",
                className: "bottom-text",
              })
            )
          )
        );
      },
      Footer = () => {
        var smooth = () => {
          const scrolEl = document.getElementById("container-scroll");
          (document.documentElement.style.scrollBehavior = "smooth"),
            (scrolEl.style.scrollBehavior = "smooth"),
            setTimeout(() => {
              (document.documentElement.style.scrollBehavior = "initial"),
                (scrolEl.style.scrollBehavior = "initial");
            }, 1500);
        };
        return react.createElement(
          "div",
          { className: "footer" },
          react.createElement(
            "div",
            { className: "footer-left" },
            react.createElement(
              "div",
              { className: "footer-links-group" },
              react.createElement(
                "a",
                {
                  href: "https://pump.fun/KGCzq1skrybN1Sxxtv36z6DW2enJieu2oM8k3QSpump",
                },
                react.createElement("span", { className: "footer-buy" }, "buy")
              ),
              react.createElement(
                "a",
                { href: "#about", onClick: smooth, className: "footer-link" },
                "about"
              ),
              react.createElement(
                "a",
                { href: "#roadmap", onClick: smooth, className: "footer-link" },
                "roadmap"
              ),
              react.createElement(
                "a",
                {
                  href: "#tokenomics",
                  onClick: smooth,
                  className: "footer-link",
                },
                "tokenomics"
              ),
              react.createElement(
                "a",
                {
                  href: "https://pump.fun/KGCzq1skrybN1Sxxtv36z6DW2enJieu2oM8k3QSpump",
                  onClick: smooth,
                  className: "footer-link",
                },
                "chart"
              )
            ),
            react.createElement(
              "div",
              { className: "footerLeftText" },
              "Not affiliated with the CADOGE cartoon, rights belong to Nickelodeon."
            )
          ),
          react.createElement(
            "div",
            { className: "footer-socials" },
            react.createElement(
              "div",
              { className: "footer-socials-item" },
              react.createElement(
                "a",
                { href: "https://x.com/cadogesol" },
                react.createElement("img", { src: "../assets/images/soc1.png" })
              )
            ),
            react.createElement(
              "div",
              { className: "footer-socials-item" },
              react.createElement(
                "a",
                { href: "https://t.me/cadogesol" },
                react.createElement("img", { src: "../assets/images/soc2.png" })
              )
            ),
            react.createElement(
              "div",
              { className: "footer-socials-item" },
              react.createElement(
                "a",
                {
                  href: "https://pump.fun/KGCzq1skrybN1Sxxtv36z6DW2enJieu2oM8k3QSpump",
                },
                react.createElement("img", { 
                  src: "../assets/images/soc3.png", 
                  style: {
                    width: "38px", // нова ширина
                    height: "38px" // нова висота
                  }
                })
              )
            )
          ),
          react.createElement(
            "div",
            { className: "footerLeftText footerLeftTextCopy" },
            "2023 © ALL RIGHTS RESERVED"
          )
        );
      };
    var lib = __webpack_require__(8798),
      lib_default = __webpack_require__.n(lib);
    const Header = () => {
        const [active, setActive] = (0, react.useState)(!1),
          [play, setPlay] = (0, react.useState)(!1);
        return react.createElement(
          "div",
          { className: "header", id: "header" },
          react.createElement(lib_default(), {
            src: "../assets/images/catdogMusic.mp3",
            playing: play,
            loop: !0,
          }),
          react.createElement(
            "div",
            { className: "headerMobMenu " + (active && "headerMenuActive") },
            react.createElement(
              "div",
              { className: "header-links headerLinksMob" },
              react.createElement(
                "a",
                {
                  href: "#comix",
                  onClick: () => setActive(!1),
                  className: "header-links__item",
                },
                "Comix"
              ),
              react.createElement(
                "a",
                {
                  href: "#tokenomics",
                  onClick: () => setActive(!1),
                  className: "header-links__item",
                },
                "Tokenomics"
              ),
              react.createElement(
                "a",
                {
                  href: "#roadmap2",
                  onClick: () => {
                    setActive(!1);
                  },
                  className: "header-links__item",
                },
                "Roadmap"
              )
            ),
            react.createElement(
              "div",
              { className: "header-socs headerSocsMob" },
              react.createElement("img", {
                onClick: () => setPlay(!play),
                className: "headerVolumeBtn",
                src: "../assets/images/volumeBtn.png",
              }),
              react.createElement(
                "a",
                {
                  className: "header-socs__item",
                  href: "https://t.me/cadogesol",
                },
                react.createElement("img", {
                  src: "../assets/images/headerTg.png",
                })
              ),
              react.createElement(
                "a",
                {
                  className: "header-socs__item",
                  href: "https://x.com/cadogesol",
                },
                react.createElement("img", {
                  src: "../assets/images/headerTwitter.png",
                })
              )
            )
          ),
          react.createElement(
            "div",
            { className: "header_body" },
            react.createElement(
              "div",
              { className: "headerGroupY" },
              react.createElement("img", {
                className: "headerMobTitle",
                src: "../assets/images/mainLogo.png",
              }),
              react.createElement("img", {
                className: "headerMobTitle",
                src: "../assets/images/headerCoin.png",
              })
            ),
            react.createElement(
              "div",
              { className: "burgerWrap", onClick: () => setActive(!active) },
              react.createElement("img", {
                className: "headerBurger",
                src: "../assets/images/burger.png",
              })
            ),
            react.createElement(
              "div",
              { className: "header-links" },
              react.createElement(
                "a",
                { href: "#comix", className: "header-links__item hoverAnim" },
                "Comix"
              ),
              react.createElement(
                "a",
                {
                  href: "#tokenomics",
                  className: "header-links__item hoverAnim",
                },
                "Tokenomics"
              ),
              react.createElement(
                "a",
                {
                  href: "#roadmap",
                  onClick: () => {
                    {
                      var el = document.getElementById("roadmap");
                      const el2 = document.getElementById("container-scroll");
                      (el2.style.scrollBehavior = "smooth"),
                        window.scrollTo({
                          top: el.scrollTop,
                          left: el.offsetLeft,
                          behavior: "smooth",
                        }),
                        setTimeout(() => {
                          el2.style.scrollBehavior = "auto";
                        }, 200),
                        console.log(el.offsetLeft, el.offsetTop);
                    }
                  },
                  className: "header-links__item hoverAnim",
                },
                "Roadmap"
              )
            ),
            react.createElement(
              "div",
              { className: "header-socs" },
              react.createElement("img", {
                onClick: () => setPlay(!play),
                className: "headerVolumeBtn",
                src: "../assets/images/volumeBtn.png",
              }),
              react.createElement(
                "a",
                { href: "https://t.me/cadogesol" },
                react.createElement("img", {
                  className: "socsImg",
                  src: "../assets/images/headerTg.png",
                  href: "https://t.me/cadogesol",
                })
              ),
              react.createElement(
                "a",
                { href: "https://x.com/cadogesol" },
                react.createElement("img", {
                  className: "socsImg",
                  src: "../assets/images/headerTwitter.png",
                })
              )
            )
          )
        );
      },
      PawsBlock = () => (
        (0, react.useEffect)(() => {}, []),
        react.createElement(
          "div",
          { className: "pawsWrap" },
          react.createElement(
            "div",
            { className: "pawsBlock" },
            react.createElement(
              "div",
              { class: "ajax-loader" },
              react.createElement(
                "div",
                { class: "paw" },
                react.createElement("img", {
                  className: "paw1",
                  src: "../assets/images/paw2.png",
                })
              ),
              react.createElement(
                "div",
                { class: "paw" },
                react.createElement("img", {
                  className: "paw1",
                  src: "../assets/images/paw2.png",
                })
              ),
              react.createElement(
                "div",
                { class: "paw" },
                react.createElement("img", {
                  className: "paw1",
                  src: "../assets/images/paw2.png",
                })
              ),
              react.createElement(
                "div",
                { class: "paw" },
                react.createElement("img", {
                  className: "paw1",
                  src: "../assets/images/paw2.png",
                })
              ),
              react.createElement(
                "div",
                { class: "paw" },
                react.createElement("img", {
                  className: "paw1",
                  src: "../assets/images/paw2.png",
                })
              ),
              react.createElement(
                "div",
                { class: "paw" },
                react.createElement("img", {
                  className: "paw1",
                  src: "../assets/images/paw2.png",
                })
              ),
              react.createElement(
                "div",
                { class: "paw" },
                react.createElement("img", {
                  className: "paw1",
                  src: "../assets/images/paw2.png",
                })
              ),
              react.createElement(
                "div",
                { class: "paw" },
                react.createElement("img", {
                  className: "paw1",
                  src: "../assets/images/paw2.png",
                })
              )
            )
          )
        )
      );
    __webpack_require__(6805);
    new index_browser_esm.Ng(
      "https://long-yolo-pond.solana-mainnet.quiknode.pro/1b007cdcfb9a8240d81321d325ce01c309c3ea83/"
    );
    const Contract = () => {
        return react.createElement(
          "div",
          { className: "contractSec" },
          react.createElement("img", {
            src: "../assets/images/contractBg.png",
            className: "contractBg",
          }),
          react.createElement(
            "div",
            { className: "contractWrap" },
            react.createElement("img", {
              src: "../assets/images/contractArrow.png",
              className: "contractArr",
            }),
            react.createElement(
              "span",
              { className: "contractTitle" },
              "$CADOGE contract"
            ),
            react.createElement(
              "div",
              { className: "contractGroup" },
              react.createElement(
                "span",
                { className: "contractValue" },
                "KGCzq1skrybN1Sxxtv36z6DW2enJieu2oM8k3QSpump"
              )
            )
          )
        );
      },
      Container = () => {
        const containerRef = (0, react.useRef)(null),
          [position, setPosition] = (0, react.useState)({ x: 0, y: 0 }),
          [cursorPath, setCursorPath] = (0, react.useState)(
            "../assets/images/catdogCursor.png"
          );
        return (
          (0, react.useEffect)(() => {
            const container = containerRef.current;
            document.getElementById("header");
            const handleScroll = (event) => {
                container.scrollLeft + container.clientWidth >=
                  container.scrollWidth - 1 &&
                  window.scrollTo({
                    top: container.scrollTop + window.innerHeight,
                    behavior: "smooth",
                  });
              },
              handleWheel =
                (container.scrollLeft + container.clientWidth <=
                  container.scrollWidth - 1 &&
                  (document.documentElement.style.overflow = "hidden"),
                (event) => {
                  event.preventDefault(),
                    (container.scrollLeft += event.deltaY),
                    container.scrollLeft + container.clientWidth <=
                      container.scrollWidth - 1 &&
                      (document.documentElement.style.overflow = "hidden");
                }),
              updatePosition = () => {
                document.documentElement.style.overflow = "auto";
              };
            return (
              container.addEventListener("scroll", handleScroll),
              container.addEventListener("wheel", handleWheel),
              window.addEventListener("scroll", updatePosition),
              () => {
                container.removeEventListener("scroll", handleScroll),
                  window.removeEventListener("mousemove", updatePosition),
                  container.removeEventListener("wheel", handleWheel);
              }
            );
          }, []),
          (0, react.useEffect)(() => {
            if (996 < window.innerWidth) {
              document.getElementById("loop");
              const updatePosition = (e) => {
                  setPosition({ x: e.clientX, y: e.clientY });
                },
                handleScroll = () => {};
              window.addEventListener("mousemove", updatePosition),
                window.addEventListener("scroll", handleScroll),
                window.addEventListener("click", () => {
                  setCursorPath("../assets/images/cursorClick.png"),
                    setTimeout(() => {
                      setCursorPath("../assets/images/catdogCursor.png");
                    }, 100);
                });
            }
            return () => {
              window.removeEventListener("mousemove", updatePosition),
                window.removeEventListener("scroll", handleScroll),
                window.removeEventListener("click", handleScroll);
            };
          }, []),
          react.createElement(
            "div",
            { className: "main-container" },
            react.createElement("img", {
              src: cursorPath,
              id: "cursor",
              style: { left: position.x + 3, top: position.y - 10 },
              className: "cursor",
            }),
            react.createElement(
              "div",
              {
                className: "horizontal-container",
                id: "container-scroll",
                ref: containerRef,
              },
              react.createElement(Header, null),
              react.createElement("img", {
                src: "../assets/images/scrollWhiteBg.png",
                className: "whiteBg",
              }),
              react.createElement(HeroSec, null),
              react.createElement(PawsBlock, null),
              react.createElement(Roadmap, null),
              react.createElement(HeroEnd, null)
            ),
            react.createElement(
              "div",
              { className: "vertical-container" },
              react.createElement(
                "div",
                { className: "heroMob" },
                react.createElement(Header, null),
                react.createElement(HeroSec, null)
              ),
              react.createElement(
                "div",
                { className: "heroMob", id: "roadmap2" },
                react.createElement(Roadmap, null)
              ),
              react.createElement(
                "div",
                { className: "heroMob" },
                react.createElement(HeroEnd, null)
              ),
              react.createElement(Tokenomics, null),
              react.createElement(Contract, null),
              react.createElement(Comix, null),
              react.createElement(Footer, null)
            )
          )
        );
      };
    window.Buffer = window.Buffer || __webpack_require__(8891).Buffer;
    lib = function App() {
      const network = types.B.Mainnet;
      var endpoint = (0, react.useMemo)(
          () => (0, index_browser_esm.Kw)(network),
          [network]
        ),
        wallets = (0, react.useMemo)(
          () => [
            new adapter.c(),
            new esm_adapter.d({ network: network }),
            new lib_esm_adapter.G(),
            new wallet_adapter_ledger_lib_esm_adapter.G(),
          ],
          [network]
        );
      return react.createElement(
        ConnectionProvider.S,
        { endpoint: endpoint },
        react.createElement(
          WalletProvider.r,
          { wallets: wallets },
          react.createElement(
            WalletModalProvider.I,
            null,
            react.createElement(react_toastify_esm.N9, {
              stacked: !0,
              draggable: !0,
              theme: "dark",
            }),
            react.createElement(Container, null)
          )
        )
      );
    };
    client
      .createRoot(document.getElementById("root"))
      .render(react.createElement(lib, null));
  },
  5066: () => {},
}),
  (__webpack_module_cache__ = {}),
  (__webpack_require__.m = __webpack_modules__),
  (deferred = []),
  (__webpack_require__.O = (result, chunkIds, fn, priority) => {
    if (!chunkIds) {
      for (var notFulfilled = 1 / 0, i = 0; i < deferred.length; i++) {
        for (
          var r,
            chunkIds = deferred[i][0],
            fn = deferred[i][1],
            priority = deferred[i][2],
            fulfilled = !0,
            j = 0;
          j < chunkIds.length;
          j++
        )
          (!1 & priority || priority <= notFulfilled) &&
          Object.keys(__webpack_require__.O).every((key) =>
            __webpack_require__.O[key](chunkIds[j])
          )
            ? chunkIds.splice(j--, 1)
            : ((fulfilled = !1),
              priority < notFulfilled && (notFulfilled = priority));
        fulfilled &&
          (deferred.splice(i--, 1), void 0 !== (r = fn())) &&
          (result = r);
      }
      return result;
    }
    priority = priority || 0;
    for (var i = deferred.length; 0 < i && deferred[i - 1][2] > priority; i--)
      deferred[i] = deferred[i - 1];
    deferred[i] = [chunkIds, fn, priority];
  }),
  (__webpack_require__.n = (module) => {
    var getter =
      module && module.__esModule ? () => module.default : () => module;
    return __webpack_require__.d(getter, { a: getter }), getter;
  }),
  (__webpack_require__.d = (exports, definition) => {
    for (var key in definition)
      __webpack_require__.o(definition, key) &&
        !__webpack_require__.o(exports, key) &&
        Object.defineProperty(exports, key, {
          enumerable: !0,
          get: definition[key],
        });
  }),
  (__webpack_require__.f = {}),
  (__webpack_require__.e = (chunkId) =>
    Promise.all(
      Object.keys(__webpack_require__.f).reduce(
        (promises, key) => (
          __webpack_require__.f[key](chunkId, promises), promises
        ),
        []
      )
    )),
  (__webpack_require__.u = (chunkId) =>
    "./js/" +
    chunkId +
    "." +
    {
      22: "5a747c4b98d153947abc",
      394: "8c838b333de961d99d6f",
      409: "11aa9c68e7eb3463d9f9",
      449: "f332e7fd5a858d4770d8",
      544: "5ee1ff222ae8e6e48b59",
      879: "37ea73bc871152399c45",
    }[chunkId] +
    ".js"),
  (__webpack_require__.miniCssF = (chunkId) => {}),
  (__webpack_require__.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })()),
  (__webpack_require__.o = (obj, prop) =>
    Object.prototype.hasOwnProperty.call(obj, prop)),
  (inProgress = {}),
  (__webpack_require__.l = (url, done, key, chunkId) => {
    if (inProgress[url]) inProgress[url].push(done);
    else {
      var script, needAttach;
      if (void 0 !== key)
        for (
          var scripts = document.getElementsByTagName("script"), i = 0;
          i < scripts.length;
          i++
        ) {
          var s = scripts[i];
          if (s.getAttribute("src") == url) {
            script = s;
            break;
          }
        }
      script ||
        ((needAttach = !0),
        ((script = document.createElement("script")).charset = "utf-8"),
        (script.timeout = 120),
        __webpack_require__.nc &&
          script.setAttribute("nonce", __webpack_require__.nc),
        (script.src = url)),
        (inProgress[url] = [done]);
      var key = (prev, event) => {
          (script.onerror = script.onload = null), clearTimeout(timeout);
          var doneFns = inProgress[url];
          if (
            (delete inProgress[url],
            script.parentNode && script.parentNode.removeChild(script),
            doneFns && doneFns.forEach((fn) => fn(event)),
            prev)
          )
            return prev(event);
        },
        timeout = setTimeout(
          key.bind(null, void 0, { type: "timeout", target: script }),
          12e4
        );
      (script.onerror = key.bind(null, script.onerror)),
        (script.onload = key.bind(null, script.onload)),
        needAttach && document.head.appendChild(script);
    }
  }),
  (__webpack_require__.r = (exports) => {
    "undefined" != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" }),
      Object.defineProperty(exports, "__esModule", { value: !0 });
  }),
  (__webpack_require__.nmd = (module) => (
    (module.paths = []), module.children || (module.children = []), module
  )),
  (__webpack_require__.p = "/"),
  (installedChunks = { 792: 0 }),
  (__webpack_require__.f.j = (chunkId, promises) => {
    var promise,
      error,
      installedChunkData = __webpack_require__.o(installedChunks, chunkId)
        ? installedChunks[chunkId]
        : void 0;
    0 !== installedChunkData &&
      (installedChunkData
        ? promises.push(installedChunkData[2])
        : ((promise = new Promise(
            (resolve, reject) =>
              (installedChunkData = installedChunks[chunkId] =
                [resolve, reject])
          )),
          promises.push((installedChunkData[2] = promise)),
          (promises = __webpack_require__.p + __webpack_require__.u(chunkId)),
          (error = new Error()),
          __webpack_require__.l(
            promises,
            (event) => {
              var errorType;
              __webpack_require__.o(installedChunks, chunkId) &&
                (0 !== (installedChunkData = installedChunks[chunkId]) &&
                  (installedChunks[chunkId] = void 0),
                installedChunkData) &&
                ((errorType =
                  event && ("load" === event.type ? "missing" : event.type)),
                (event = event && event.target && event.target.src),
                (error.message =
                  "Loading chunk " +
                  chunkId +
                  " failed.\n(" +
                  errorType +
                  ": " +
                  event +
                  ")"),
                (error.name = "ChunkLoadError"),
                (error.type = errorType),
                (error.request = event),
                installedChunkData[1](error));
            },
            "chunk-" + chunkId,
            chunkId
          )));
  }),
  (__webpack_require__.O.j = (chunkId) => 0 === installedChunks[chunkId]),
  (webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
    var moduleId,
      chunkId,
      result,
      chunkIds = data[0],
      moreModules = data[1],
      runtime = data[2],
      i = 0;
    if (chunkIds.some((id) => 0 !== installedChunks[id])) {
      for (moduleId in moreModules)
        __webpack_require__.o(moreModules, moduleId) &&
          (__webpack_require__.m[moduleId] = moreModules[moduleId]);
      runtime && (result = runtime(__webpack_require__));
    }
    for (
      parentChunkLoadingFunction && parentChunkLoadingFunction(data);
      i < chunkIds.length;
      i++
    )
      (chunkId = chunkIds[i]),
        __webpack_require__.o(installedChunks, chunkId) &&
          installedChunks[chunkId] &&
          installedChunks[chunkId][0](),
        (installedChunks[chunkId] = 0);
    return __webpack_require__.O(result);
  }),
  (chunkLoadingGlobal = self.webpackChunk = self.webpackChunk || []).forEach(
    webpackJsonpCallback.bind(null, 0)
  ),
  (chunkLoadingGlobal.push = webpackJsonpCallback.bind(
    null,
    chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
  )),
  (webpackJsonpCallback = __webpack_require__.O(void 0, [736], () =>
    __webpack_require__(782)
  )),
  __webpack_require__.O(webpackJsonpCallback);
