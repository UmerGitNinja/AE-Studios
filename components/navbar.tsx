"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";



const Navbar = () => {
  return (
    <nav className="jsx-4086112026 navbar undefined">
      <div className="bluebar__wrapper">
        <svg
          width={18}
          height={19}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="hand-pointing point-animation"
        >
          <path
            d="M0 18.26h18v-18H0v18z"
            fill="url(#hand-pointing-right_svg__pattern0)"
          />
          <defs>
            <pattern
              id="hand-pointing-right_svg__pattern0"
              patternContentUnits="objectBoundingBox"
              width={1}
              height={1}
            >
              <use
                xlinkHref="#hand-pointing-right_svg__image0_1304_256"
                transform="scale(.01563)"
              />
            </pattern>
            <image
              id="hand-pointing-right_svg__image0_1304_256"
              width={64}
              height={64}
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
        <p className="bluebar__text">
          <span>
            <a
              className="bluebar-link"
              target="_blank"
              title="We won a Best Paper Award at the 2022 NeurIPS ML Safety Workshop!"
              href="https://ae.studio/blog/large-language-model-misbehavior-is-dangerous"
            >
              We won a Best Paper Award at the 2022 NeurIPS ML Safety Workshop!
            </a>
          </span>
          <a className="jsx-2927143685 bluebar__text calendly-text">
            We can build stuff for you too!
          </a>
        </p>
        <svg
          width={18}
          height={19}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="flip-y hand-pointing point-animation"
        >
          <path
            d="M18 18.26H0v-18h18v18z"
            fill="url(#hand-pointing-left_svg__pattern0)"
          />
          <defs>
            <pattern
              id="hand-pointing-left_svg__pattern0"
              patternContentUnits="objectBoundingBox"
              width={1}
              height={1}
            >
              <use
                xlinkHref="#hand-pointing-left_svg__image0_1304_257"
                transform="scale(.01563)"
              />
            </pattern>
            <image
              id="hand-pointing-left_svg__image0_1304_257"
              width={64}
              height={64}
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
        <button type="button" className="bluebar__close">
          <svg
            width={8}
            height={8}
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7 7M7 1L1 7L7 1Z"
              stroke="white"
              strokeOpacity="0.28"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="jsx-4086112026 container header-container">
        <a title="Home" className="jsx-4086112026 navbar-brand" href="/">
          <img
            src="/img/aestudio-logo-light.svg"
            alt="ae studio"
            className="jsx-4086112026"
          />
        </a>
        <button aria-label="Menu" className="jsx-4086112026 toggle not-active">
          <span className="jsx-4086112026" />
          <span className="jsx-4086112026" />
          <span className="jsx-4086112026" />
        </button>
        <ul className="jsx-4086112026 navigation navigation--bluebar">
          <li className="jsx-4086112026">
            <Link
              title="Our Work"
              className="jsx-4086112026 nav-link first-level"
              href="/Work"
            >
              Our Work
            </Link>
          </li>
          <li className="jsx-4086112026 has-sub">
            <button
              title="Work"
              className="jsx-4086112026 nav-link first-level"
            >
              What we do
            </button>
            <ul
              itemScope
              itemType="http://www.schema.org/SiteNavigationElement"
              className="jsx-4086112026 sub-navigation what-we-do-sub-navigation sub-navigation--bluebar"
            >
              <button
                title="What we do"
                className="jsx-4086112026 nav-link first-level"
              >
                What we do
              </button>
              <div className="jsx-4086112026 category">
                <p className="jsx-4086112026">development</p>
                <li itemProp="name" className="jsx-4086112026">
                  <a
                    title="Software Development"
                    itemProp="url"
                    className="jsx-4086112026 nav-link"
                    href="/product-development"
                  >
                    Software Development
                  </a>
                </li>
                <li itemProp="name" className="jsx-4086112026">
                  <a
                    itemProp="url"
                    title="Blockchain"
                    className="jsx-4086112026 nav-link"
                    href="/blockchain"
                  >
                    Blockchain
                  </a>
                </li>
                <li itemProp="name" className="jsx-4086112026">
                  <a
                    itemProp="url"
                    title="Agile Methodology"
                    className="jsx-4086112026 nav-link"
                    href="/agile-methodology"
                  >
                    Agile Methodology
                  </a>
                </li>
              </div>
              <div className="jsx-4086112026 category">
                <p className="jsx-4086112026">data </p>
                <li itemProp="name" className="jsx-4086112026" />
                <li itemProp="name" className="jsx-4086112026">
                  <a
                    itemProp="url"
                    title="Success Stories"
                    className="jsx-4086112026 nav-link"
                    href="/data-science"
                  >
                    Data Science
                  </a>
                </li>
                <li itemProp="name" className="jsx-4086112026">
                  <a
                    itemProp="url"
                    title="Machine Learning"
                    className="jsx-4086112026 nav-link"
                    href="/machine-learning"
                  >
                    Machine Learning
                  </a>
                </li>
                <li itemProp="name" className="jsx-4086112026">
                  <a
                    itemProp="url"
                    title="Predictive Analytics"
                    className="jsx-4086112026 nav-link"
                    href="/predictive-analytics"
                  >
                    Predictive Analytics
                  </a>
                </li>
                <li itemProp="name" className="jsx-4086112026">
                  <a
                    itemProp="url"
                    title="AI Solutions"
                    className="jsx-4086112026 nav-link"
                    href="/ai-solutions"
                  >
                    AI Solutions
                  </a>
                </li>
                <li itemProp="name" className="jsx-4086112026">
                  <a
                    itemProp="url"
                    title="gen ai"
                    className="jsx-4086112026 nav-link"
                    href="/generative-ai"
                  >
                    gen ai
                  </a>
                </li>
              </div>
              <div className="jsx-4086112026 category">
                <p className="jsx-4086112026">product design</p>
                <li itemProp="name" className="jsx-4086112026">
                  <a
                    itemProp="url"
                    title="Product Design"
                    className="jsx-4086112026 nav-link"
                    href="/product-design"
                  >
                    Product Design
                  </a>
                </li>
                <li itemProp="name" className="jsx-4086112026">
                  <a
                    itemProp="urls"
                    title="User Research"
                    className="jsx-4086112026 nav-link"
                    href="/user-research"
                  >
                    User Research
                  </a>
                </li>
              </div>
              <div className="jsx-4086112026 category">
                <p className="jsx-4086112026">r&amp;d</p>
                <li itemProp="name" className="jsx-4086112026">
                  <a
                    itemProp="url"
                    title="Neurotechnology Consulting"
                    className="jsx-4086112026 nav-link"
                    href="/neurotechnology-consulting"
                  >
                    Neurotechnology Consulting
                  </a>
                </li>
                <li itemProp="name" className="jsx-4086112026">
                  <a
                    itemProp="url"
                    title="Brain-Computer Interfaces"
                    className="jsx-4086112026 nav-link"
                    href="/brain-computer-interface"
                  >
                    Brain-Computer Interfaces
                  </a>
                </li>
                <li itemProp="name" className="jsx-4086112026">
                  <a
                    itemProp="url"
                    title="AE Grants"
                    className="jsx-4086112026 nav-link"
                    href="https://research.ae.studio/"
                  >
                    AE Grants
                  </a>
                </li>
                <li itemProp="name" className="jsx-4086112026">
                  <a
                    itemProp="url"
                    title="AI Alignment"
                    className="jsx-4086112026 nav-link"
                    href="/ai-alignment"
                  >
                    AI Alignment
                  </a>
                </li>
              </div>
              <div className="jsx-4086112026 category">
                <p className="jsx-4086112026">content</p>
                <li itemProp="name" className="jsx-4086112026">
                  <a
                    itemProp="url"
                    title="Parody"
                    className="jsx-4086112026 nav-link"
                    href="/parody"
                  >
                    Parody
                  </a>
                </li>
                <li itemProp="name" className="jsx-4086112026">
                  <a
                    itemProp="url"
                    title="Podcast"
                    className="jsx-4086112026 nav-link"
                    href="/podcast"
                  >
                    Podcast
                  </a>
                </li>
                <li itemProp="name" className="jsx-4086112026">
                  <a
                    title="Essays"
                    href="https://blog.ae.studio/"
                    className="jsx-4086112026 nav-link"
                  >
                    Essays
                  </a>
                </li>
                <li itemProp="name" className="jsx-4086112026">
                  <a
                    title="News"
                    href="/news"
                    className="jsx-4086112026 nav-link"
                  >
                    News
                  </a>
                </li>
              </div>
              <div className="jsx-4086112026 category">
                <p className="jsx-4086112026">incubating</p>
                <li itemProp="name" className="jsx-4086112026">
                  <a
                    href="/skunkworks"
                    rel="noopener noreferrer"
                    itemProp="url"
                    title="Skunkworks"
                    className="jsx-4086112026 nav-link"
                  >
                    Skunkworks
                  </a>
                </li>
                <li itemProp="name" className="jsx-4086112026">
                  <a
                    itemProp="url"
                    title="Same Day Skunkworks"
                    className="jsx-4086112026 nav-link"
                    href="/same-day-skunkworks"
                  >
                    Same Day Skunkworks
                  </a>
                </li>
                <li itemProp="name" className="jsx-4086112026">
                  <a
                    href="https://vc.ae.studio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    itemProp="url"
                    title="Venture Capital"
                    className="jsx-4086112026 nav-link"
                  >
                    Venture Capital
                  </a>
                </li>
              </div>
            </ul>
          </li>
          <li className="jsx-4086112026 has-sub">
            <button
              title="Team"
              className="jsx-4086112026 nav-link first-level"
            >
              Team
            </button>
            <ul
              itemScope
              itemType="http://www.schema.org/SiteNavigationElement"
              className="jsx-4086112026 sub-navigation sub-navigation--bluebar"
            >
              <button title="Team" className="jsx-4086112026 nav-link">
                Team
              </button>
              <li itemProp="name" className="jsx-4086112026">
                <a
                  itemProp="url"
                  title="Our Team"
                  className="jsx-4086112026 nav-link"
                  href="/team"
                >
                  Our Team
                </a>
              </li>
              <li className="jsx-4086112026">
                <a
                  title="Retreats"
                  className="jsx-4086112026 nav-link"
                  href="/retreats"
                >
                  Retreats &amp; Hackathons
                </a>
              </li>
              <li className="jsx-4086112026">
                <a
                  title="Join Us"
                  className="jsx-4086112026 nav-link"
                  href="/join-us"
                >
                  Join Us
                </a>
              </li>
            </ul>
          </li>
          <li className="jsx-4086112026 has-sub">
            <button
              title="learn"
              className="jsx-4086112026 nav-link first-level"
            >
              learn
            </button>
            <ul
              itemScope
              itemType="http://www.schema.org/SiteNavigationElement"
              className="jsx-4086112026 sub-navigation sub-navigation--bluebar"
            >
              <button title="learn" className="jsx-4086112026 nav-link">
                learn
              </button>
              <li itemProp="name" className="jsx-4086112026">
                <a
                  itemProp="url"
                  title="Human Agency"
                  className="jsx-4086112026 nav-link"
                  href="/human-agency"
                >
                  Human Agency
                </a>
              </li>
              <li itemProp="name" className="jsx-4086112026">
                <a
                  itemProp="url"
                  title="Giving Back"
                  className="jsx-4086112026 nav-link"
                  href="/#giving-back"
                >
                  Highly Effective Charities
                </a>
              </li>
              <li className="jsx-4086112026">
                <a
                  title="Essays"
                  href="https://blog.ae.studio/"
                  className="jsx-4086112026 nav-link"
                >
                  Essays
                </a>
              </li>
              <li className="jsx-4086112026">
                <a
                  title="News"
                  href="/news"
                  className="jsx-4086112026 nav-link"
                >
                  News
                </a>
              </li>
            </ul>
          </li>
          <li className="jsx-4086112026 cta">
            <div aria-label="schedule a call" className="jsx-4086112026">
              <span className="jsx-4086112026 headerButtonSchedule">
                Lets Talk!
              </span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
