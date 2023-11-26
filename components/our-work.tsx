"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import './work.css'
import FooterCta from "./footer-cta";
import {useEffect, useState} from 'react'
const OurWork = () => {
  const [isMounted, setIsmounted] = useState(false)

  useEffect(()=> {
    setIsmounted(true)
  },[])
  if (!isMounted) {
    return null
  }
  return (
    <div id="portfolio" className="jsx-734377039">
      <section className="jsx-2410025679 top ">
        <div className="jsx-2410025679 container">
          <div className="jsx-734377039 header">
            <h1 className="jsx-734377039 animated fadeInDown">
              <span className="jsx-734377039">Cool</span> stuff we've built
            </h1>
            <p className="jsx-734377039 fadeInDown">
              We ♥ making ideas come to life.
            </p>
          </div>
        </div>
      </section>
      <section className="jsx-734377039 portfolio">
        <div className="jsx-734377039 container">
          <div className="grid2">
            <div className="grid2-column" style={{ width: "33.3333%" }}>
              <a
                title="Scotch & Soda"
                className="jsx-734377039"
                href="/scotchsoda"
              >
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/gzVlsC5wQrOJGKAUrsK4"
                    alt="Club Soda 3.0 Membership"
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(213, 185, 182)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">
                          Scotch &amp; Soda
                        </div>
                        <div className="jsx-734377039 overlay-subtitle">
                          Club Soda 3.0 Membership
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                title="SoundChain"
                className="jsx-734377039"
                href="/soundchain"
              >
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/XV763hpS6edaQ1wIGNeA"
                    alt="Blockchain powered music streaming platform."
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(203, 182, 213)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">
                          SoundChain
                        </div>
                        <div className="jsx-734377039 overlay-subtitle">
                          Blockchain powered music streaming platform.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a title="Magic Eden" className="jsx-734377039" href="/magiceden">
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/AVkb4JooQvOb3dZQMr3Y"
                    alt="NFT Marketplace"
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(207, 168, 246)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">
                          Magic Eden
                        </div>
                        <div className="jsx-734377039 overlay-subtitle">
                          NFT Marketplace
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                title="BioClarity"
                className="jsx-734377039"
                href="/bioclarity"
              >
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/cGgBYaPyTjSlXzwcw46L"
                    alt="It Puts the Lotion in The Basket"
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(143, 185, 98)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">
                          BioClarity
                        </div>
                        <div className="jsx-734377039 overlay-subtitle">
                          It Puts the Lotion in The Basket
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a title="Point" className="jsx-734377039" href="/point">
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/jt8G7y3tRqOSwQMFlqRH"
                    alt="Keeping your Workout and Dorito Avoidance Game On Point."
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(61, 57, 57)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">Point</div>
                        <div className="jsx-734377039 overlay-subtitle">
                          Keeping your Workout and Dorito Avoidance Game On
                          Point.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a title="EVgo" className="jsx-734377039" href="/evgo">
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/9iLVAqRcRG653zkr5Obh"
                    alt="Electric vehicle charging stations."
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(182, 183, 213)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">EVgo</div>
                        <div className="jsx-734377039 overlay-subtitle">
                          Electric vehicle charging stations.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                title="CPG Data Center Innovators"
                className="jsx-734377039"
                href="/cpg-data-center-innovators"
              >
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/zmnwNUI7STuxkuhehzEg"
                    alt="Halp. Low Battery"
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(124, 103, 138)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">
                          CPG Data Center Innovators
                        </div>
                        <div className="jsx-734377039 overlay-subtitle">
                          Halp. Low Battery
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a title="Pixel War" className="jsx-734377039" href="/pixelwar">
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/6KTlVmtaSZqpqveOooCz"
                    alt="Strategic RPG built on composable NFTs."
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(230, 132, 83)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">
                          Pixel War
                        </div>
                        <div className="jsx-734377039 overlay-subtitle">
                          Strategic RPG built on composable NFTs.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a title="üNiFi" className="jsx-734377039" href="/unifi">
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/j3W4rZHTSYyLvqrfCzHx"
                    alt="10+ cryptocurrency users over a 2-week project"
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(79, 193, 128)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">üNiFi</div>
                        <div className="jsx-734377039 overlay-subtitle">
                          10+ cryptocurrency users over a 2-week project
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a title="Best Apps" className="jsx-734377039" href="/best-apps">
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/QSbPY9R0iFBrdD1ENUAT"
                    alt="Developing a cross-platform, B2B and B2C apparel empire"
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(32, 68, 109)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">
                          Best Apps
                        </div>
                        <div className="jsx-734377039 overlay-subtitle">
                          Developing a cross-platform, B2B and B2C apparel
                          empire
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="grid2-column" style={{ width: "33.3333%" }}>
              <a
                title="Samsung NEXT"
                className="jsx-734377039"
                href="/samsung-next"
              >
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/ax1z8s9QO6BTMnRRFY8w"
                    alt="These are not the droids you're looking for."
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(94, 98, 106)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">
                          Samsung NEXT
                        </div>
                        <div className="jsx-734377039 overlay-subtitle">
                          These are not the droids you're looking for.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                title="Draper Venture Network"
                className="jsx-734377039"
                href="/draper-venture-network"
              >
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/7Ek2zzbxT22UO62x4tRM"
                    alt="One Portal to Rule Them All. One Portal to Find Them."
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(178, 73, 26)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">
                          Draper Venture Network
                        </div>
                        <div className="jsx-734377039 overlay-subtitle">
                          One Portal to Rule Them All. One Portal to Find Them.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                title="Berkshire Hathaway"
                className="jsx-734377039"
                href="/marmon"
              >
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/cTipIy18Qiac4pB5ELnD"
                    alt="Making Sure Avocados Never Go Out of Stock"
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(94, 148, 151)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">
                          Berkshire Hathaway
                        </div>
                        <div className="jsx-734377039 overlay-subtitle">
                          Making Sure Avocados Never Go Out of Stock
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                title="Tiny Habits by BJ Fogg"
                className="jsx-734377039"
                href="/bjfogg"
              >
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/EtpTF9B5R4KEZTn7APdJ"
                    alt="Renowned Stanford Professor of Computer Science and Human Performance."
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(40, 196, 218)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">
                          Tiny Habits by BJ Fogg
                        </div>
                        <div className="jsx-734377039 overlay-subtitle">
                          Renowned Stanford Professor of Computer Science and
                          Human Performance.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                title="Biocentury"
                className="jsx-734377039"
                href="/biocentury"
              >
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/hkw24WF6TDueNgIEoCr4"
                    alt="Making it Easier to Get Drug Content to Users"
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(214, 167, 167)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">
                          Biocentury
                        </div>
                        <div className="jsx-734377039 overlay-subtitle">
                          Making it Easier to Get Drug Content to Users
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a title="Gallant" className="jsx-734377039" href="/gallant">
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/9aNyDjzHTGq6juURy9ys"
                    alt="Freeze Your Dog's Stem Cells Unless You Don't Love Them"
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(80, 227, 194)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">
                          Gallant
                        </div>
                        <div className="jsx-734377039 overlay-subtitle">
                          Freeze Your Dog's Stem Cells Unless You Don't Love
                          Them
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a title="FAWC" className="jsx-734377039" href="/fawc">
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/bCcZzbDtS9IC1OEfm4BB"
                    alt="A collection of 11,111 unique, rare beauties."
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(230, 173, 83)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">FAWC</div>
                        <div className="jsx-734377039 overlay-subtitle">
                          A collection of 11,111 unique, rare beauties.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a title="our.news" className="jsx-734377039" href="/our-news">
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/GVGGbWxARKmqPF5aT4aY"
                    alt="Real Startup. Not FAKE NEWS."
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(172, 83, 75)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">
                          our.news
                        </div>
                        <div className="jsx-734377039 overlay-subtitle">
                          Real Startup. Not FAKE NEWS.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a title="Rare Goods" className="jsx-734377039" href="/raregoods">
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/yJCuQnR5GvEFxQHrutEg"
                    alt="NFT platform designed for major sports teams, universities, and brands."
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(197, 107, 97)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">
                          Rare Goods
                        </div>
                        <div className="jsx-734377039 overlay-subtitle">
                          NFT platform designed for major sports teams,
                          universities, and brands.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a title="nJoy" className="jsx-734377039" href="/njoy">
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/rHgB0yBS6Lg2bWo1OBQN"
                    alt="200+ conversations with retail owners & employees"
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(7, 82, 255)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">nJoy</div>
                        <div className="jsx-734377039 overlay-subtitle">
                          200+ conversations with retail owners &amp; employees
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="grid2-column" style={{ width: "33.3333%" }}>
              <a
                title="Protocol Labs"
                className="jsx-734377039"
                href="/protocol-labs"
              >
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/AwjhiP2GT2Kh1IhB6yMw"
                    alt="It's like Pied Piper without the Rats"
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(74, 74, 74)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">
                          Protocol Labs
                        </div>
                        <div className="jsx-734377039 overlay-subtitle">
                          It's like Pied Piper without the Rats
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a title="One Planet" className="jsx-734377039" href="/oneplanet">
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/ZYXPmBBhQainewP5jY3U"
                    alt="Migrating hundreds of thousands of NFTs to Polygon."
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(86, 106, 165)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">
                          One Planet
                        </div>
                        <div className="jsx-734377039 overlay-subtitle">
                          Migrating hundreds of thousands of NFTs to Polygon.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                title="The Chicagoist"
                className="jsx-734377039"
                href="/the-chicagoist"
              >
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/z62WArPNTjGz3HXdyfOJ"
                    alt="Chance the Rapper bought The Chicagoist and it's gunna be 🔥"
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(95, 107, 178)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">
                          The Chicagoist
                        </div>
                        <div className="jsx-734377039 overlay-subtitle">
                          Chance the Rapper bought The Chicagoist and it's gunna
                          be 🔥
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                title="Resolutions to Rituals"
                className="jsx-734377039"
                href="/resolutions-to-rituals"
              >
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/CwpPbfNlSGStOFAbHv3g"
                    alt="Making Adults Take their Vitamins"
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(20, 43, 111)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">
                          Resolutions to Rituals
                        </div>
                        <div className="jsx-734377039 overlay-subtitle">
                          Making Adults Take their Vitamins
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a title="Mandolin" className="jsx-734377039" href="/mandolin">
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/xCDHEILrQAeCtTxRX2SS"
                    alt="Immersive livestreams with your favorite artists."
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(230, 173, 83)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">
                          Mandolin
                        </div>
                        <div className="jsx-734377039 overlay-subtitle">
                          Immersive livestreams with your favorite artists.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                title="Vessel Health"
                className="jsx-734377039"
                href="/vessel-health"
              >
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/tfM2C9rVSkGOFWCQPWUQ"
                    alt="The Subtle Art of Peeing on a Stick"
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(196, 219, 187)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">
                          Vessel Health
                        </div>
                        <div className="jsx-734377039 overlay-subtitle">
                          The Subtle Art of Peeing on a Stick
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a title="Streamoid" className="jsx-734377039" href="/streamoid">
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/fFHNDn40SYCupQGJImRc"
                    alt="AI that Makes You Like, Really Pretty"
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(80, 179, 199)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">
                          Streamoid
                        </div>
                        <div className="jsx-734377039 overlay-subtitle">
                          AI that Makes You Like, Really Pretty
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a title="WhereTo" className="jsx-734377039" href="/whereto">
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/wE3MzJMJRaVAMN9GOJgw"
                    alt="Helping AI Learn to Travel 😮"
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(74, 94, 111)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">
                          WhereTo
                        </div>
                        <div className="jsx-734377039 overlay-subtitle">
                          Helping AI Learn to Travel 😮
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                title="South China Morning Post"
                className="jsx-734377039"
                href="/scmp"
              >
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/ouxXxAkRaiEbUbPQmuW1"
                    alt="Unique NFT drop that features SCMP's photo journalism."
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(182, 213, 211)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">
                          South China Morning Post
                        </div>
                        <div className="jsx-734377039 overlay-subtitle">
                          Unique NFT drop that features SCMP's photo journalism.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                title="The Publisher Desk"
                className="jsx-734377039"
                href="/the-publisher-desk"
              >
                <div className="jsx-734377039 grid-item animated fadeInUp">
                  <img
                    src="https://media.graphassets.com/Uo95Li4UR2aPA8YXJsbc"
                    alt="The Plot Thickens"
                    className="jsx-734377039"
                  />
                  <div
                    className="jsx-734377039 overlay"
                    style={{ backgroundColor: "rgb(54, 57, 79)" }}
                  >
                    <div className="jsx-734377039 overlay-text">
                      <div className="jsx-734377039 overlay-titles">
                        <div className="jsx-734377039 overlay-title">
                          The Publisher Desk
                        </div>
                        <div className="jsx-734377039 overlay-subtitle">
                          The Plot Thickens
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
     <FooterCta/>
    </div>
  );
};

export default OurWork;
