(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[521], {
    70650: function(e, t, a) {
        "use strict";
        a.r(t);
        var s = a(85893)
          , o = a(4942)
          , n = a(67294)
          , i = a(94184)
          , r = a.n(i)
          , l = a(14874)
          , h = a(958)
          , c = a.n(h);
        function d(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t && (s = s.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, s)
            }
            return a
        }
        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? d(Object(a), !0).forEach((function(t) {
                    (0,
                    o.Z)(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : d(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        var p = [{
            src: "/components/about/first.png",
            style: {
                height: 922,
                zIndex: 1,
                bottom: 32
            }
        }, {
            src: "/components/about/second.png",
            style: {
                height: 1357,
                zIndex: 1,
                bottom: 64
            }
        }, {
            src: "/components/about/third.png",
            style: {
                height: 876,
                zIndex: 1,
                bottom: 200
            }
        }, {
            src: "/components/about/fourth.png",
            style: {
                height: 1071,
                marginBottom: 100,
                zIndex: 1
            }
        }]
          , m = function() {
            return (0,
            s.jsx)("div", {
                className: c().background,
                children: (0,
                s.jsx)(l.W2, {
                    fluid: !0,
                    className: "overflow-hidden",
                    children: p.map((function(e, t) {
                        var a = e.src
                          , o = e.style;
                        return (0,
                        s.jsx)("div", {
                            className: c().background__container,
                            style: o,
                            children: (0,
                            s.jsx)(l.Ee, {
                                src: a,
                                layout: "fill",
                                loading: "eager",
                                priority: 0 === t
                            })
                        }, a)
                    }
                    ))
                })
            })
        }
          , w = function() {
            return (0,
            s.jsx)("div", {
                className: r()(c().tape, c().tape__upperLeft),
                children: (0,
                s.jsx)(l.Ee, {
                    src: "/components/about/tapeUpperLeft.png",
                    layout: "fixed",
                    width: 95,
                    height: 95
                })
            })
        }
          , f = function() {
            return (0,
            s.jsx)("div", {
                className: r()(c().tape, c().tape__upperRight),
                children: (0,
                s.jsx)(l.Ee, {
                    src: "/components/about/tapeUpperRight.png",
                    layout: "fixed",
                    width: 131,
                    height: 155
                })
            })
        }
          , y = function() {
            return (0,
            s.jsx)("div", {
                className: r()(c().tape, c().tape__lowerLeft),
                children: (0,
                s.jsx)(l.Ee, {
                    src: "/components/about/tapeLowerLeft.png",
                    layout: "fixed",
                    width: 205,
                    height: 195
                })
            })
        }
          , b = function() {
            return (0,
            s.jsx)("div", {
                className: r()(c().tape, c().tape__lowerRight),
                children: (0,
                s.jsx)(l.Ee, {
                    src: "/components/about/tapeLowerRight.png",
                    layout: "fixed",
                    width: 114,
                    height: 126
                })
            })
        }
          , _ = function() {
            return (0,
            s.jsx)("div", {
                className: r()(c().tape, c().tape__lowerRightLarge),
                children: (0,
                s.jsx)(l.Ee, {
                    src: "/components/about/tapeLowerRightLarge.png",
                    layout: "fixed",
                    width: 202,
                    height: 202
                })
            })
        }
          , g = function() {
            return (0,
            s.jsx)("div", {
                className: r()(c().tape, c().tape__xLowerLeft),
                children: (0,
                s.jsx)(l.Ee, {
                    src: "/components/about/tapeXConnector.png",
                    layout: "fixed",
                    width: 119,
                    height: 120
                })
            })
        }
          , x = function() {
            return (0,
            s.jsx)("div", {
                className: r()(c().tape, c().tape__xLowerRight),
                children: (0,
                s.jsx)(l.Ee, {
                    src: "/components/about/tapeXConnector.png",
                    layout: "fixed",
                    width: 119,
                    height: 120
                })
            })
        }
          , v = function() {
            return (0,
            s.jsx)("div", {
                className: r()(c().tape, c().tape__xTopLeft),
                children: (0,
                s.jsx)(l.Ee, {
                    src: "/components/about/tapeXConnector.png",
                    layout: "fixed",
                    width: 95,
                    height: 96
                })
            })
        }
          , j = function() {
            return (0,
            s.jsx)("div", {
                className: r()(c().tape, c().tape__middle),
                children: (0,
                s.jsx)(l.Ee, {
                    src: "/components/about/tapeMiddleConnector.png",
                    layout: "fixed",
                    width: 177,
                    height: 69
                })
            })
        }
          , k = function() {
            return (0,
            s.jsx)("div", {
                className: r()(c().tape, c().tape__middleLeft),
                children: (0,
                s.jsx)(l.Ee, {
                    src: "/components/about/tapeMiddleConnector.png",
                    layout: "fixed",
                    width: 177,
                    height: 69
                })
            })
        }
          , N = function() {
            return (0,
            s.jsxs)(l.W2, {
                fluid: !0,
                className: c().intro,
                children: [(0,
                s.jsx)(l.X2, {
                    children: (0,
                    s.jsx)(l.JX, {
                        md: 12,
                        children: (0,
                        s.jsx)("header", {
                            className: c().header,
                            children: (0,
                            s.jsxs)("h1", {
                                className: c().header__title,
                                children: ["Welcome to the Owners Club ", (0,
                                s.jsx)("div", {
                                    className: c().topLine
                                }), (0,
                                s.jsx)("div", {
                                    className: c().box
                                })]
                            })
                        })
                    })
                }), (0,
                s.jsx)(l.X2, {
                    children: (0,
                    s.jsx)(l.JX, {
                        md: 12,
                        xl: 6,
                        children: (0,
                        s.jsxs)(l.X2, {
                            className: c().cards__container,
                            children: [(0,
                            s.jsx)(l.JX, {
                                children: (0,
                                s.jsxs)("div", {
                                    className: r()(c().card, c().first),
                                    children: ["This is YOUR moment. The moment you have been preparing for your entire life, even if you didn\u2019t know it. From those hair-pulling games yelling at the TV for benching the star running back, to many late nights convincing your friends this is finally your team\u2019s year. A dozen messages going back-and-forth over a WR trade in your college fantasy football league, to endless hours building DFS lineups locking in your play of the week. All you were after was a good sweat, the thrill of victory! You may not have known it, but this is the moment you have been training for.", (0,
                                    s.jsx)(f, {}), (0,
                                    s.jsx)(g, {})]
                                })
                            }), (0,
                            s.jsx)(l.JX, {
                                children: (0,
                                s.jsxs)("div", {
                                    className: r()(c().card, c().second),
                                    children: ["The Owners Club (TOC) is an exclusive society built by and for fantasy sports lovers. It is a place to congregate, a place to collect, and a place to compete. It is the future of sports gaming through true ownership of NFTs. TOC provides you the opportunity for a lifetime of virtual and real-world experiences that can be earned by simply owning NFTs. Our users will have chances to win tickets to games, attend TOC watch parties, receive signed sports memorabilia from professional athletes, and receive airdrops of valuable NFTs simply by owning NFTs and competing in our free contests. That\u2019s right - our members will have weekly opportunities to compete for their share in over a million dollars in cash prizes. This is the next generation of fantasy sports.", (0,
                                    s.jsx)(b, {})]
                                })
                            })]
                        })
                    })
                })]
            })
        }
          , T = function() {
            return (0,
            s.jsx)(l.Fz, {
                children: (0,
                s.jsxs)(l.W2, {
                    fluid: !0,
                    className: c().inspiration,
                    children: [(0,
                    s.jsx)(l.X2, {
                        children: (0,
                        s.jsx)(l.JX, {
                            md: 12,
                            children: (0,
                            s.jsx)("header", {
                                className: c().header,
                                children: (0,
                                s.jsxs)("h2", {
                                    className: c().header__title,
                                    children: ["Inspiration behind the owners club", (0,
                                    s.jsx)("div", {
                                        className: c().box
                                    }), (0,
                                    s.jsx)("div", {
                                        className: c().bottomLine,
                                        children: (0,
                                        s.jsx)(l.Ee, {
                                            src: "/components/about/underline.svg",
                                            layout: "fixed",
                                            width: 280,
                                            height: 8
                                        })
                                    })]
                                })
                            })
                        })
                    }), (0,
                    s.jsxs)(l.X2, {
                        className: c().cards__container,
                        children: [(0,
                        s.jsx)(l.JX, {
                            md: 12,
                            xl: 6,
                            children: (0,
                            s.jsxs)("div", {
                                className: c().card,
                                children: ["The Owners Club was founded by a team of prolific daily fantasy sports players with a passion for NFTs. However, we realized that both the current fantasy sports offerings and NFT projects have their limitations. Daily fantasy sports is dominated by professionals making hundreds of lineups with sophisticated models and spreadsheets. It lacks the ability to speculate on a player or a team across an entire season. It is the same game being played for the last decade with minimal innovation. And it is missing the community and camaraderie that got many of us first into playing fantasy sports. And NFT projects appear to mostly be built around speculative value with minimal utility. People love when the prices go up, but many projects are unable to unlock true utility via their NFTs.", (0,
                                s.jsx)(y, {}), (0,
                                s.jsx)(j, {})]
                            })
                        }), (0,
                        s.jsx)(l.JX, {
                            md: 12,
                            xl: 6,
                            children: (0,
                            s.jsxs)("div", {
                                className: c().card,
                                children: ["We set out to create a game that solves all that \u2013 and more. TOC is a community that can come together around a new way to play fantasy sports. Games that the most casual users can finish atop the leaderboard, while still including strategic elements that will benefit those with superior sports knowledge. Innovative games that haven\u2019t been solved, allowing everyone to get creative with their own strategies. A format that mitigates the impact of those pesky injuries. True ownership of the NFTs and a secondary marketplace encourages season-long speculation and the ability to profit off being correct before others. And the opportunity to bring people together in cities across the country to attend NFL games or for a select few at the LIVE FINAL in Miami with a chance to compete for the BIG money!", (0,
                                s.jsx)(f, {})]
                            })
                        })]
                    })]
                })
            })
        }
          , O = function() {
            return (0,
            s.jsx)(l.Fz, {
                children: (0,
                s.jsxs)(l.W2, {
                    fluid: !0,
                    className: c().owners,
                    children: [(0,
                    s.jsx)(l.X2, {
                        children: (0,
                        s.jsx)(l.JX, {
                            md: 12,
                            children: (0,
                            s.jsx)("header", {
                                className: c().header,
                                children: (0,
                                s.jsxs)("h2", {
                                    className: c().header__title,
                                    children: ["Owners Wallet", (0,
                                    s.jsx)("div", {
                                        className: c().box
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: c().shadows,
                                        children: [(0,
                                        s.jsx)("div", {
                                            className: c().shadow,
                                            children: (0,
                                            s.jsx)(l.Ee, {
                                                src: "/components/about/wallet.svg",
                                                layout: "fixed",
                                                width: 166,
                                                height: 21
                                            })
                                        }), (0,
                                        s.jsx)("div", {
                                            className: c().shadow,
                                            children: (0,
                                            s.jsx)(l.Ee, {
                                                src: "/components/about/wallet.svg",
                                                layout: "fixed",
                                                width: 166,
                                                height: 21
                                            })
                                        }), (0,
                                        s.jsx)("div", {
                                            className: c().shadow,
                                            children: (0,
                                            s.jsx)(l.Ee, {
                                                src: "/components/about/wallet.svg",
                                                layout: "fixed",
                                                width: 166,
                                                height: 21
                                            })
                                        }), (0,
                                        s.jsx)("div", {
                                            className: c().shadow,
                                            children: (0,
                                            s.jsx)(l.Ee, {
                                                src: "/components/about/wallet.svg",
                                                layout: "fixed",
                                                width: 166,
                                                height: 21
                                            })
                                        }), (0,
                                        s.jsx)("div", {
                                            className: c().shadow,
                                            children: (0,
                                            s.jsx)(l.Ee, {
                                                src: "/components/about/wallet.svg",
                                                layout: "fixed",
                                                width: 166,
                                                height: 21
                                            })
                                        })]
                                    })]
                                })
                            })
                        })
                    }), (0,
                    s.jsx)(l.X2, {
                        children: (0,
                        s.jsx)(l.JX, {
                            md: {
                                span: 12,
                                order: 1,
                                offset: 0
                            },
                            xl: {
                                span: 5,
                                order: 1,
                                offset: 5
                            },
                            children: (0,
                            s.jsx)("div", {
                                className: c().card__container,
                                children: (0,
                                s.jsxs)("div", {
                                    className: c().card,
                                    children: ["The Owners Wallet is our way of giving back to the community that is so important to this Club\u2019s success. Through the Owners Wallet, we\u2019ll be sharing a portion of the revenue from the project with each of the NFT owners. Those funds will be distributed to Owners through various methods such as in-person game watching parties, VIP trips to the Live Final for non-participants, NFT airdrops, floor sweeps, ETH and other giveaways, donations as voted on by the community, etc. For any type of drawing or airdrop, your chances of winning will be based on how many cards (all years, not just the present year) you own.", (0,
                                    s.jsx)(k, {}), (0,
                                    s.jsx)(_, {})]
                                })
                            })
                        })
                    })]
                })
            })
        }
          , A = function() {
            return (0,
            s.jsx)(l.Fz, {
                children: (0,
                s.jsxs)(l.W2, {
                    fluid: !0,
                    className: c().tournaments,
                    children: [(0,
                    s.jsx)(l.X2, {
                        children: (0,
                        s.jsx)(l.JX, {
                            md: 12,
                            children: (0,
                            s.jsx)("header", {
                                className: c().header,
                                children: (0,
                                s.jsxs)("h2", {
                                    className: c().header__title,
                                    children: ["Weekly Tournaments", (0,
                                    s.jsx)("div", {
                                        className: c().box
                                    }), (0,
                                    s.jsx)("div", {
                                        className: c().bottomLine
                                    })]
                                })
                            })
                        })
                    }), (0,
                    s.jsx)(l.X2, {
                        className: c().cards__container,
                        children: (0,
                        s.jsx)(l.JX, {
                            md: 12,
                            xl: 6,
                            children: (0,
                            s.jsxs)(l.X2, {
                                children: [(0,
                                s.jsxs)(l.JX, {
                                    md: 6,
                                    xl: 6,
                                    children: [(0,
                                    s.jsx)("div", {
                                        className: c().card__header,
                                        children: (0,
                                        s.jsx)(l.Ee, {
                                            src: "/components/about/mainEvent.png",
                                            layout: "responsive",
                                            width: 311,
                                            height: 38
                                        })
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: c().card,
                                        children: ["This is the premier weekly tournament. Play a five-card team, one card at each position. Finish near the top and get paid out. Finish first for the week and you qualify for a trip to Miami to compete in the Week 17 LIVE Final!", (0,
                                        s.jsx)(v, {}), (0,
                                        s.jsx)(x, {})]
                                    })]
                                }), (0,
                                s.jsxs)(l.JX, {
                                    md: 6,
                                    xl: 6,
                                    children: [(0,
                                    s.jsx)("div", {
                                        className: c().card__header,
                                        children: (0,
                                        s.jsx)(l.Ee, {
                                            src: "/components/about/sideHustle.png",
                                            layout: "responsive",
                                            width: 325,
                                            height: 38
                                        })
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: c().card,
                                        children: ["Have a few cards left over? Maybe you want to test the waters before grabbing an entire team? Join the Side Hustle where you compete with just two cards (of two different positions) for cash prizes.", (0,
                                        s.jsx)(f, {})]
                                    })]
                                })]
                            })
                        })
                    }), (0,
                    s.jsx)(l.X2, {
                        className: c().finals__wrap,
                        children: (0,
                        s.jsxs)(l.JX, {
                            md: 12,
                            xl: 7,
                            children: [(0,
                            s.jsx)("p", {
                                className: c().finals__details,
                                children: "And at the end of the season we\u2019ll be hosting the Week 17 Online Finals, paying out the largest prize pools of the entire season! Finish in the top 10% at least once during the regular season and qualify for that tournament\u2019s Online Final. Finish top 10% in both tournaments at least once and qualify for both Online Finals."
                            }), (0,
                            s.jsx)("div", {
                                className: c().vertical
                            }), (0,
                            s.jsx)("div", {
                                className: c().horizontal
                            })]
                        })
                    })]
                })
            })
        }
          , F = function() {
            return (0,
            s.jsx)(l.Fz, {
                children: (0,
                s.jsxs)(l.W2, {
                    fluid: !0,
                    className: c().ownership,
                    children: [(0,
                    s.jsx)(l.X2, {
                        children: (0,
                        s.jsx)(l.JX, {
                            md: 12,
                            children: (0,
                            s.jsxs)("header", {
                                className: c().header,
                                children: [(0,
                                s.jsx)(l.Et, {
                                    tablet: !0,
                                    children: (0,
                                    s.jsx)("h2", {
                                        className: c().header__title,
                                        children: "What does becoming an owner get you?"
                                    })
                                }), (0,
                                s.jsx)(l.Et, {
                                    desktop: !0,
                                    strict: !0,
                                    children: (0,
                                    s.jsxs)("h2", {
                                        className: c().header__title,
                                        children: ["What does becoming an", " ", (0,
                                        s.jsxs)("span", {
                                            className: c().owner,
                                            children: ["owner", " ", (0,
                                            s.jsxs)("div", {
                                                className: c().shadows,
                                                children: [(0,
                                                s.jsx)("div", {
                                                    className: c().shadow,
                                                    children: (0,
                                                    s.jsx)(l.Ee, {
                                                        src: "/components/about/owner.png",
                                                        layout: "fixed",
                                                        width: 153,
                                                        height: 29
                                                    })
                                                }), (0,
                                                s.jsx)("div", {
                                                    className: c().shadow,
                                                    children: (0,
                                                    s.jsx)(l.Ee, {
                                                        src: "/components/about/owner.png",
                                                        layout: "fixed",
                                                        width: 153,
                                                        height: 29
                                                    })
                                                }), (0,
                                                s.jsx)("div", {
                                                    className: c().shadow,
                                                    children: (0,
                                                    s.jsx)(l.Ee, {
                                                        src: "/components/about/owner.png",
                                                        layout: "fixed",
                                                        width: 153,
                                                        height: 29
                                                    })
                                                })]
                                            })]
                                        }), " ", "get you?", (0,
                                        s.jsx)("div", {
                                            className: c().box
                                        })]
                                    })
                                })]
                            })
                        })
                    }), (0,
                    s.jsxs)(l.X2, {
                        children: [(0,
                        s.jsxs)(l.JX, {
                            md: 12,
                            lg: 6,
                            xl: 4,
                            className: c().block,
                            children: [(0,
                            s.jsx)("h5", {
                                className: c().block__title,
                                children: "Free Entry to Tournaments"
                            }), (0,
                            s.jsx)("p", {
                                className: c().block__help,
                                children: "Two tournaments to choose from: the Main Event and the Side Hustle. Simply owning your NFTs gets you access into these free contests with real prize money."
                            })]
                        }), (0,
                        s.jsxs)(l.JX, {
                            md: 12,
                            lg: 6,
                            xl: 4,
                            className: c().block,
                            children: [(0,
                            s.jsx)("h5", {
                                className: c().block__title,
                                children: "Exclusive Community Access"
                            }), (0,
                            s.jsx)("p", {
                                className: c().block__help,
                                children: "Join a community of fantasy sports lovers where you can hang out with others and show off your sports knowledge. We\u2019ll also have some of the sharpest fantasy sports analysts in the business in this community giving out free advice."
                            })]
                        }), (0,
                        s.jsxs)(l.JX, {
                            md: 12,
                            lg: 6,
                            xl: 4,
                            className: c().block,
                            children: [(0,
                            s.jsx)("h5", {
                                className: c().block__title,
                                children: "Virtual and In-Person Events"
                            }), (0,
                            s.jsx)("p", {
                                className: c().block__help,
                                children: "Meet-up with like minded fans in your area to watch the games, often even with game tickets or community grants to pay for your food and drink."
                            })]
                        }), (0,
                        s.jsxs)(l.JX, {
                            md: 12,
                            lg: 6,
                            xl: 4,
                            className: c().block,
                            children: [(0,
                            s.jsx)("h5", {
                                className: c().block__title,
                                children: "Airdrops and Giveaways"
                            }), (0,
                            s.jsx)("p", {
                                className: c().block__help,
                                children: "The more TOC cards you own, the more airdrops you\u2019ll receive and better your chances at winning giveaways. We already have lined up NFTs, signed memorabilia, merch and swag bags, straight cash, game tickets, and more!"
                            })]
                        }), (0,
                        s.jsxs)(l.JX, {
                            md: 12,
                            lg: 6,
                            xl: 4,
                            className: c().block,
                            children: [(0,
                            s.jsx)("h5", {
                                className: c().block__title,
                                children: "Speculative Opportunities"
                            }), (0,
                            s.jsx)("p", {
                                className: c().block__help,
                                children: "Think you can predict what\u2019s going to happen before others? Collect those cards before they increase in demand and spike in value."
                            })]
                        }), (0,
                        s.jsxs)(l.JX, {
                            md: 12,
                            lg: 6,
                            xl: 4,
                            className: c().block,
                            children: [(0,
                            s.jsx)("h5", {
                                className: c().block__title,
                                children: "Merchandise & Brand Partnerships"
                            }), (0,
                            s.jsx)("p", {
                                className: c().block__help,
                                children: "Show off to your friends that you\u2019re an owner with our straight fire merch. And let us use our relationships and brand partnerships to give you the type of perks an owner deserves."
                            })]
                        })]
                    })]
                })
            })
        }
          , E = function() {
            return (0,
            s.jsx)(l.Fz, {
                children: (0,
                s.jsx)(l.W2, {
                    fluid: !0,
                    className: c().promises,
                    children: (0,
                    s.jsx)(l.X2, {
                        className: c().payouts,
                        children: (0,
                        s.jsxs)(l.JX, {
                            md: 12,
                            xl: 6,
                            children: [(0,
                            s.jsx)("header", {
                                className: c().header,
                                children: (0,
                                s.jsxs)("h2", {
                                    className: c().header__title,
                                    children: ["Payout Triggers", (0,
                                    s.jsx)("div", {
                                        className: c().box
                                    }), (0,
                                    s.jsx)("div", {
                                        className: c().arrow,
                                        children: (0,
                                        s.jsx)(l.Ee, {
                                            src: "/components/about/lowerRightArrow.svg",
                                            layout: "fixed",
                                            width: 24,
                                            height: 24
                                        })
                                    })]
                                })
                            }), (0,
                            s.jsx)("p", {
                                className: c().promises__info,
                                children: "The following tournament payouts and perks are unlocked based off percent of initial NFTs available sold:"
                            }), (0,
                            s.jsxs)("div", {
                                className: c().card,
                                children: ["25%: $100,000. Unlock early adopter airdrop giveaways. ", (0,
                                s.jsx)("br", {}), "50%: $250,000. Unlock the LIVE Final in Miami. ", (0,
                                s.jsx)("br", {}), "75%: $500,000. Unlock the Owners Wallet with $50,000 ", (0,
                                s.jsx)("br", {}), "100% $1,000,000", (0,
                                s.jsx)(w, {}), (0,
                                s.jsx)(b, {})]
                            })]
                        })
                    })
                })
            })
        }
          , C = [{
            id: 1,
            header: "What is The Owners Club?",
            details: "The Owners Club (TOC) is an exclusive society built by and for fantasy sports lovers. It is a place to congregate, a place to collect, and a place to compete. It is the next generation of sports gaming through true ownership of NFTs. TOC provides you the opportunity for a lifetime of virtual and real-world experiences that can be earned by simply owning NFTs. You can create a team through collecting NFTs and be rewarded with fantasy points for the professional team and position of their NFTs. Each week, Owners can enter their NFTs into two free-to-enter contests which pay out real cash prizes. In addition to entering fantasy contests every week, Owners are able to invest in the long-term future of specific teams or players by buying and selling cards on the secondary market. In addition to being able to enter fantasy contests, Owners will receive additional benefits during the season through The Owners Wallet."
        }, {
            id: 2,
            header: "How do I get into The Owners Club?",
            details: "There are two primary ways to get into The Owners Club: pack drops and purchasing cards on the secondary market. The initial TOC pack drop will allow Owners to purchase packs, which will contain 5 total cards: one random team card for each position you need to submit a lineup in the Main Event. Drops will also allow Owners to purchase individual cards, which are entirely randomized among team and position. The second way to get into The Owners Club is to purchase cards on our internal marketplace, which will allow users to obtain the specific card they want to complete the perfect team. Every week, additional cards will be released via pack drops, giving Owners the opportunity to continue to improve their team throughout the season."
        }, {
            id: 3,
            header: "How do The Owners Club cards score fantasy points?",
            details: "Each card for The Owners Club will be printed with a team and a position group - at least, everything except the Jokers which we\u2019ll get to in a minute! The five positions are quarterback, running back, wide receiver, tight end, and defense/special teams. The cards will score fantasy points based on that professional team\u2019s position group performance in their game that week.  This means that all players who are designated as that position on each team\u2019s performance will count - which means that when that 3rd string RB vultures a touchdown, you still get those fantasy points!  One of the best parts of The Owners Club is that each card will have value regardless of what injuries inevitably occur, since each card is associated with a position group and not a specific player.  So whether the team is playing the star QB or the newly-signed third stringer, you\u2019ll get the fantasy points they score that week."
        }, {
            id: 4,
            header: "So what about the Jokers?!",
            details: "Jokers are extremely valuable cards in The Owners Club, and as such are extremely rare. This first season there will only ever be at most 400 jokers, 80 at each position. Each Joker card is assigned to a position, and each Joker allows the Owner to select which team they want to play for that position that week. For example: in Week 1, an owner may use a QB Joker card to play Green Bay quarterbacks, and then in Week 2 they can use that Joker card to play the Kansas City quarterbacks. Jokers will be randomly distributed in both packs and individual cards, but be warned - these are rare! For all tournaments, only one Joker card can be played per lineup."
        }, {
            id: 11,
            header: "You said WHAT?!?! - you can play teams when you already know what happened?",
            details: "That\u2019s right - one of the innovative aspects of our tournaments is that the slate lock times will often be after one or a couple games have already finished! For Weeks 1 thru 11, the slate will lock at 1pm Eastern time on Sunday, which means that Thursday Night Football, as well as London games, will have already happened but will still be eligible to be played if you own that card. If you play a card from a team that already played, you will still receive however many points that position for that team scored. We know this will create a ton of intrigue and excitement for those games and cards on the secondary market, and we\u2019re really excited to see how this plays out. Starting Week 12 with the Thanksgiving slate and then rolling into the Saturday slates, we may start to re-evaluate the start time to capture more of the games but we\u2019ll be sure to socialize that broadly to all users."
        }, {
            id: 5,
            header: "How does the Main Event work?",
            details: "Every week, you\u2019ll select one of the cards that you own from each position to create your five-card lineup. You can have acquired that card either through a pack drop or the secondary market, but as long as you own it, you can submit it in your lineup. You will be able to submit up to three lineups in the Main Event each week, but they will all require distinct cards to play - so you will need at least 3 cards of each position in order to submit three lineups. And while you can only play one Joker in each lineup, you can play one in each of your three lineups. Oh also - did we mention that some games will have already finished by the Main Event lock time, but you can still play those teams?"
        }, {
            id: 6,
            header: "What is the prize pool for the Main Event?",
            details: "The full prize pool will depend on how many of The Owners Club NFTs sell during the initial sale. The more cards sold, the more money that goes into the prize pools! If we sell out the initial NFTs, the prize pools will get up to $40k a week, with $150k in prizes for the final week of the season: the LIVE and Online Finals! For all other weeks from week 1 - week 16, the prize pool will remain the same. For those playing this out in their head, and let\u2019s face it, if you\u2019ve read this far you\u2019re almost certainly analyzing it all - that means that there will be less people competing in Week 1 for the same prize pool as the weeks later in the season. So you\u2019re definitely going to want to be in early. It also increases your chances of being in the Top 10% of each contest, which will qualify you for the end of the year online final."
        }, {
            id: 7,
            header: "Are there any other games besides the Main Event?",
            details: "Well yes - thanks for asking! In addition to the Main Event, there will be a Side Hustle each week! To compete in the Side Hustle you only have to submit two cards from two distinct positions - although importantly, not any of the cards that are used in a Main Event lineup, or another Side Hustle lineup. So whether you have a few cards left over that you want to put to good use, or you want to start your collection off smaller and build to a full Main Event lineup, the Side Hustle is a great way to stay in the game. The scoring here is simple - highest two-card fantasy point total takes home the top prize, and the top 10% qualify for the Online Final! The prize pool here can get up to $10,000 a week and $50,000 for the Online Final."
        }, {
            id: 8,
            header: "How will the in-season pack drops work?",
            details: "Every week, we will drop a specified number of packs and individual cards similar to our initial pack drop. This will give new users who weren\u2019t able to get in on the initial drop the opportunity to purchase a full-team, as well as give current owners the opportunity to buy additional full teams or try to improve a specific position - but individual cards positions AND teams will be random, so make sure you bring your lucky rabbit foot!"
        }, {
            id: 9,
            header: "What is the secondary marketplace for The Owners Club?",
            details: "All of The Owners Club NFTs will be able to be bought and sold on our internal marketplace.  Each team and position card will be listed individually, giving users the opportunity to buy and sell the specific card they want to use in that week's tournament. So whether you hit gold during a Thursday night game, or you just KNOW that the Jacksonville WRs will be great by week 6, buying and selling on OpenSea will allow you to build the team you want if you don\u2019t get them in the pack drops."
        }, {
            id: 10,
            header: "What happens after the season is over? Can I use these cards again next season?",
            details: "The Owners Club cards will only be able to be played in the 2021 - 2022 season, but the cards will still have value! Once you\u2019re in The Owners Club, your cards provide you access to more than just the games. We are committed to ensure your cards maintain value beyond the season and to do this, we have a number of mechanisms planned to ensure this happens. We are evaluating different ways for cards to continue to provide utility to owners even once they can no longer be used in the contests. Some potential benefits include offseason raffles for sports memorabilia and tickets to other sporting events, early access to other TOC sports, trade-in opportunities, new games, floor buys, etc.  Stay tuned for more details on how we\u2019ll continue to deliver utility to Owners in the offseason and gearing up for next year."
        }, {
            id: 12,
            header: "Will TOC cards retain value after this season?",
            details: "Yes, we are committed to do this. We have a number of mechanisms planned to ensure this happens. While these cards will only be good for the 2021 season, they represent your membership to The Owners Club and the more cards you continue to hold, the more benefits you receive well beyond the season. We do not want to tip our hand too much but trust us, they will be worth holding. Some potential benefits include offseason raffles for sports memorabilia or tickets to other sporting events, early access to other TOC sports, trade-in opportunities, new games, floor buys, etc."
        }, {
            id: 13,
            header: "Why can't I log-in to the OTM website when I have created a username and password?",
            details: "At this time, if you created an account on The Owners Club website prior to creating an account on the Own the Moment website, it will not automatically link. You will need to go in and create an account on the OTM website as well. If you create an account on the OTM website prior to the TOC sign-up, it will automatically link.  We are working to resolve this in the coming weeks so that creating an account on either site will work on both sites."
        }, {
            id: 14,
            header: "What is OTM Balance?",
            details: 'The "OTM Balance" is a USDC backed virtual balance or digital wallet that will exist for any users who win money from a tournament. Users who perform our KYC process and get verified will be eligible to withdraw. From there users can choose bank wires or payment in USDC. In the future, the OTM balance will be useable in our hosted marketplace as well as other OTM products.'
        }, {
            id: 15,
            header: 'Do I have to have money in my "OTM Balance" to purchase packs',
            details: "No!  The OTM Wallet will be how we pay out prizes to winners, and can be used to pay for products or services on OTM's website in the future.  However, you don't need to add any balance to your OTM Wallet in order to buy TOC cards or packs!"
        }]
          , W = function(e) {
            var t = e.id
              , a = e.header
              , n = e.details
              , i = e.expanded
              , h = e.setExpanded
              , d = t === i;
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsxs)(l.EA.header, {
                    className: r()(c().accordion__header, (0,
                    o.Z)({}, c().expanded, d)),
                    initial: !1,
                    animate: {
                        backgroundColor: d ? "#fff" : "#000"
                    },
                    onClick: function() {
                        return h(!d && t)
                    },
                    children: [(0,
                    s.jsx)("div", {
                        className: c().dot
                    }), " ", a]
                }), (0,
                s.jsx)(l.M_, {
                    initial: !1,
                    children: d && (0,
                    s.jsx)(l.EA.section, {
                        className: c().accordion__body,
                        initial: "collapsed",
                        animate: "open",
                        exit: "collapsed",
                        variants: {
                            open: {
                                opacity: 1,
                                height: "auto"
                            },
                            collapsed: {
                                opacity: 0,
                                height: 0
                            }
                        },
                        transition: {
                            duration: .3
                        },
                        children: n
                    }, "content")
                })]
            })
        }
          , L = function() {
            var e = (0,
            n.useState)(1)
              , t = e[0]
              , a = e[1];
            return (0,
            s.jsxs)(l.W2, {
                fluid: !0,
                className: c().faq,
                children: [(0,
                s.jsx)(l.X2, {
                    children: (0,
                    s.jsx)(l.JX, {
                        md: 12,
                        children: (0,
                        s.jsx)("header", {
                            className: c().header,
                            children: (0,
                            s.jsx)("h2", {
                                className: c().header__title,
                                children: "FAQs"
                            })
                        })
                    })
                }), (0,
                s.jsx)(l.X2, {
                    children: (0,
                    s.jsx)(l.JX, {
                        md: 12,
                        xl: {
                            span: 10,
                            offset: 1,
                            order: 1
                        },
                        children: (0,
                        s.jsx)("div", {
                            className: c().faq__accordion,
                            children: C.map((function(e) {
                                return (0,
                                s.jsx)(W, u(u({}, e), {}, {
                                    expanded: t,
                                    setExpanded: a
                                }), e.id)
                            }
                            ))
                        })
                    })
                })]
            })
        };
        t.default = function() {
            return (0,
            s.jsxs)(l.Ar, {
                title: "About The Owners Club",
                description: "The Owners Club was founded by a team of prolific daily fantasy sports players with a passion for NFTs. However, we realized that both the current fantasy sports offerings and NFT projects have their limitations.",
                children: [(0,
                s.jsx)(m, {}), (0,
                s.jsxs)(l.W2, {
                    style: {
                        zIndex: 2,
                        marginBottom: "5rem",
                        overflowX: "hidden"
                    },
                    children: [(0,
                    s.jsx)(N, {}), (0,
                    s.jsx)(T, {}), (0,
                    s.jsx)(O, {}), (0,
                    s.jsx)(A, {}), (0,
                    s.jsx)(F, {}), (0,
                    s.jsx)(E, {}), (0,
                    s.jsx)(L, {})]
                })]
            })
        }
    },
    95706: function(e, t, a) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/about", function() {
            return a(70650)
        }
        ])
    },
    958: function(e) {
        e.exports = {
            background: "About_background__SLNrd",
            background__container: "About_background__container__2srRI",
            card: "About_card__3zbyK",
            header: "About_header__1xzge",
            header__title: "About_header__title__1njvE",
            tape: "About_tape__3fnBH",
            tape__upperRight: "About_tape__upperRight__2sVUk",
            tape__upperLeft: "About_tape__upperLeft__2loId",
            tape__lowerRight: "About_tape__lowerRight__1AIJo",
            tape__lowerRightLarge: "About_tape__lowerRightLarge__2kdSV",
            tape__lowerLeft: "About_tape__lowerLeft__1fcs5",
            tape__xTopLeft: "About_tape__xTopLeft__20Q1f",
            tape__xLowerLeft: "About_tape__xLowerLeft__2O92T",
            tape__xLowerRight: "About_tape__xLowerRight__2ZqOa",
            tape__middle: "About_tape__middle__2qWfI",
            tape__middleLeft: "About_tape__middleLeft__15c9T",
            intro: "About_intro__YIenH",
            topLine: "About_topLine__UH2g1",
            box: "About_box__EgAcR",
            cards__container: "About_cards__container__2F9-5",
            first: "About_first__KmdXC",
            second: "About_second__1GqAe",
            inspiration: "About_inspiration__1t4vh",
            bottomLine: "About_bottomLine__1V96I",
            owners: "About_owners__2syFj",
            shadows: "About_shadows__2R5Fu",
            shadow: "About_shadow__1va1o",
            card__container: "About_card__container__1YOxL",
            tournaments: "About_tournaments__2F4Jx",
            card__header: "About_card__header__3wrDA",
            finals__wrap: "About_finals__wrap__SUUDB",
            finals__details: "About_finals__details__3r8_4",
            vertical: "About_vertical__kqPfu",
            horizontal: "About_horizontal__1cN59",
            ownership: "About_ownership__2sC7U",
            owner: "About_owner__3AMNy",
            block: "About_block__1kot-",
            block__title: "About_block__title__3sUdk",
            block__help: "About_block__help__4FyDV",
            promises: "About_promises__3ss3U",
            payouts: "About_payouts__cnyTx",
            arrow: "About_arrow__SgW2p",
            promises__info: "About_promises__info__1UKFr",
            faq: "About_faq__IgCFc",
            faq__accordion: "About_faq__accordion__1bnZ3",
            accordion__header: "About_accordion__header__2bTUF",
            dot: "About_dot__243qD",
            expanded: "About_expanded__UNxru",
            accordion__body: "About_accordion__body__149Fp"
        }
    }
}, function(e) {
    e.O(0, [774, 888, 179], (function() {
        return t = 95706,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);
//# sourceMappingURL=about-39c23808ad83e479551e.js.map
