"use client"

import React from "react";
import FooterCta from "./footer-cta";
import {useEffect, useState} from 'react'
import './product.css'
const ProductDev = () => {
  const [isMounted, setIsmounted] = useState(false)

  useEffect(()=> {
    setIsmounted(true)
  },[])
  if (!isMounted) {
    return null
  }
  return (
    <>
    <div id="generic-page">
      <section className="jsx-2410025679 top ">
        <div className="jsx-2410025679 container">
          <h3 className="animated fadeInDown">Let’s Build something great</h3>
          <h1>Meet your tech team</h1>
          <p className="jsx-2429337914 prettify" />
          <div className="prettify">
            <p>
              We provide{" "}
              <strong>full-service product design &amp; development</strong>. We{" "}
              <strong>act as your CTO</strong> if you need one, or{" "}
              <strong>integrate with your team</strong> to deliver clean code
              that works.
            </p>
            <p />
          </div>
          <p />
          <div>
            <button
              type="submit"
              aria-label="Free Consultation"
              className="jsx-2416336110 gradient-button"
              style={{
                padding: "0.78em 2em 0.65em",
                marginTop: "3rem",
                fontSize: "1.2rem",
              }}
            >
              <span>Let’s Talk!</span>
            </button>
          </div>
        </div>
      </section>
      <div className="jsx-237162092 ">
        <section className="jsx-1617187990 tech">
          <div className="jsx-1617187990 container">
            <h3 className="jsx-1617187990">Technology &amp; Tools</h3>
            <p className="jsx-1617187990">
              We work with various different technologies and strive to pick the
              right tool for the job.
            </p>
            <div className="jsx-1617187990 tech-stack">
              <div className="jsx-1617187990">
                <div className="jsx-1617187990">
                  <a title="JavaScript" className="jsx-1617187990">
                    <img
                      alt="JavaScript"
                      src="https://d2kiq8w3rnav4q.cloudfront.net/images/join-us/tech/javascript.png"
                      className="jsx-1617187990"
                    />
                  </a>
                </div>
              </div>
              <div className="jsx-1617187990">
                <div className="jsx-1617187990">
                  <a title="TypeScript" className="jsx-1617187990">
                    <img
                      alt="TypeScript"
                      src="https://d2kiq8w3rnav4q.cloudfront.net/images/join-us/tech/typescript.png"
                      className="jsx-1617187990"
                    />
                  </a>
                </div>
              </div>
              <div className="jsx-1617187990">
                <div className="jsx-1617187990">
                  <a
                    href="/tech/node"
                    title="Node.js"
                    className="jsx-1617187990"
                  >
                    <img
                      alt="Node.js"
                      src="https://d2kiq8w3rnav4q.cloudfront.net/images/join-us/tech/node.png"
                      className="jsx-1617187990"
                    />
                  </a>
                </div>
              </div>
              <div className="jsx-1617187990">
                <div className="jsx-1617187990">
                  <a
                    href="/tech/react"
                    title="React"
                    className="jsx-1617187990"
                  >
                    <img
                      alt="React"
                      src="https://d2kiq8w3rnav4q.cloudfront.net/images/join-us/tech/react.png"
                      className="jsx-1617187990"
                    />
                  </a>
                </div>
              </div>
              <div className="jsx-1617187990">
                <div className="jsx-1617187990">
                  <a title="Blockchain" className="jsx-1617187990">
                    <img
                      alt="Blockchain"
                      src="/img/join-us/tech/blockchain.png"
                      className="jsx-1617187990"
                    />
                  </a>
                </div>
              </div>
              <div className="jsx-1617187990">
                <div className="jsx-1617187990">
                  <a title="Android" className="jsx-1617187990">
                    <img
                      alt="Android"
                      src="/img/join-us/tech/android.png"
                      className="jsx-1617187990"
                    />
                  </a>
                </div>
              </div>
              <div className="jsx-1617187990">
                <div className="jsx-1617187990">
                  <a title="iOS" className="jsx-1617187990">
                    <img
                      alt="iOS"
                      src="/img/join-us/tech/ios.png"
                      className="jsx-1617187990"
                    />
                  </a>
                </div>
              </div>
              <div className="jsx-1617187990">
                <div className="jsx-1617187990">
                  <a
                    href="/tech/react_native"
                    title="React Native"
                    className="jsx-1617187990"
                  >
                    <img
                      alt="React Native"
                      src="https://d2kiq8w3rnav4q.cloudfront.net/images/join-us/tech/react-native.png"
                      className="jsx-1617187990"
                    />
                  </a>
                </div>
              </div>
              <div className="jsx-1617187990">
                <div className="jsx-1617187990">
                  <a title="Postgres" className="jsx-1617187990">
                    <img
                      alt="Postgres"
                      src="https://d2kiq8w3rnav4q.cloudfront.net/images/join-us/tech/postgres.png"
                      className="jsx-1617187990"
                    />
                  </a>
                </div>
              </div>
              <div className="jsx-1617187990">
                <div className="jsx-1617187990">
                  <a title="GraphQL" className="jsx-1617187990">
                    <img
                      alt="GraphQL"
                      src="/img/join-us/tech/graphql.png"
                      className="jsx-1617187990"
                    />
                  </a>
                </div>
              </div>
              <div className="jsx-1617187990">
                <div className="jsx-1617187990">
                  <a title="VSCode" className="jsx-1617187990">
                    <img
                      alt="VSCode"
                      src="https://d2kiq8w3rnav4q.cloudfront.net/images/join-us/tech/vscode.png"
                      className="jsx-1617187990"
                    />
                  </a>
                </div>
              </div>
              <div className="jsx-1617187990">
                <div className="jsx-1617187990">
                  <a title="Slack" className="jsx-1617187990">
                    <img
                      alt="Slack"
                      src="https://d2kiq8w3rnav4q.cloudfront.net/images/join-us/tech/slack.png"
                      className="jsx-1617187990"
                    />
                  </a>
                </div>
              </div>
              <div className="jsx-1617187990">
                <div className="jsx-1617187990">
                  <a title="Microsoft Teams" className="jsx-1617187990">
                    <img
                      alt="Microsoft Teams"
                      src="/img/join-us/tech/microsoft-teams.png"
                      className="jsx-1617187990"
                    />
                  </a>
                </div>
              </div>
              <div className="jsx-1617187990">
                <div className="jsx-1617187990">
                  <a title="Pivotal Tracker" className="jsx-1617187990">
                    <img
                      alt="Pivotal Tracker"
                      src="https://d2kiq8w3rnav4q.cloudfront.net/images/join-us/tech/pivotal.png"
                      className="jsx-1617187990"
                    />
                  </a>
                </div>
              </div>
              <div className="jsx-1617187990">
                <div className="jsx-1617187990">
                  <a title="Jira" className="jsx-1617187990">
                    <img
                      alt="Jira"
                      src="/img/join-us/tech/jira.png"
                      className="jsx-1617187990"
                    />
                  </a>
                </div>
              </div>
              <div className="jsx-1617187990">
                <div className="jsx-1617187990">
                  <a title="GitHub" className="jsx-1617187990">
                    <img
                      alt="GitHub"
                      src="https://d2kiq8w3rnav4q.cloudfront.net/images/join-us/tech/github.png"
                      className="jsx-1617187990"
                    />
                  </a>
                </div>
              </div>
              <div className="jsx-1617187990">
                <div className="jsx-1617187990">
                  <a title="CircleCI" className="jsx-1617187990">
                    <img
                      alt="CircleCI"
                      src="https://d2kiq8w3rnav4q.cloudfront.net/images/join-us/tech/circle-ci.png"
                      className="jsx-1617187990"
                    />
                  </a>
                </div>
              </div>
              <div className="jsx-1617187990">
                <div className="jsx-1617187990">
                  <a title="Heroku" className="jsx-1617187990">
                    <img
                      alt="Heroku"
                      src="https://d2kiq8w3rnav4q.cloudfront.net/images/join-us/tech/heroku.png"
                      className="jsx-1617187990"
                    />
                  </a>
                </div>
              </div>
              <div className="jsx-1617187990">
                <div className="jsx-1617187990">
                  <a title="AWS" className="jsx-1617187990">
                    <img
                      alt="AWS"
                      src="/img/join-us/tech/aws.png"
                      className="jsx-1617187990"
                    />
                  </a>
                </div>
              </div>
              <div className="jsx-1617187990">
                <div className="jsx-1617187990">
                  <a title="Azure" className="jsx-1617187990">
                    <img
                      alt="Azure"
                      src="/img/join-us/tech/azure.png"
                      className="jsx-1617187990"
                    />
                  </a>
                </div>
              </div>
              <div className="jsx-1617187990">
                <div className="jsx-1617187990">
                  <a title="Figma" className="jsx-1617187990">
                    <img
                      alt="Figma"
                      src="/img/join-us/tech/figma.png"
                      className="jsx-1617187990"
                    />
                  </a>
                </div>
              </div>
              <div className="jsx-1617187990">
                <div className="jsx-1617187990">
                  <a title="Zeplin" className="jsx-1617187990">
                    <img
                      alt="Zeplin"
                      src="https://d2kiq8w3rnav4q.cloudfront.net/images/join-us/tech/zeplin.png"
                      className="jsx-1617187990"
                    />
                  </a>
                </div>
              </div>
              <div className="jsx-1617187990">
                <div className="jsx-1617187990">
                  <a title="Docker" className="jsx-1617187990">
                    <img
                      alt="Docker"
                      src="https://d2kiq8w3rnav4q.cloudfront.net/images/join-us/tech/docker.png"
                      className="jsx-1617187990"
                    />
                  </a>
                </div>
              </div>
              <div className="jsx-1617187990">
                <div className="jsx-1617187990">
                  <a
                    href="/tech/angular"
                    title="Angular"
                    className="jsx-1617187990"
                  >
                    <img
                      alt="Angular"
                      src="https://d2kiq8w3rnav4q.cloudfront.net/images/join-us/tech/angular.png"
                      className="jsx-1617187990"
                    />
                  </a>
                </div>
              </div>
              <div className="jsx-1617187990">
                <div className="jsx-1617187990">
                  <a
                    href="/tech/ionic"
                    title="Ionic"
                    className="jsx-1617187990"
                  >
                    <img
                      alt="Ionic"
                      src="https://d2kiq8w3rnav4q.cloudfront.net/images/join-us/tech/ionic.png"
                      className="jsx-1617187990"
                    />
                  </a>
                </div>
              </div>
              <div className="jsx-1617187990">
                <div className="jsx-1617187990">
                  <a
                    href="/tech/rails"
                    title="Rails"
                    className="jsx-1617187990"
                  >
                    <img
                      alt="Rails"
                      src="https://d2kiq8w3rnav4q.cloudfront.net/images/join-us/tech/rails.png"
                      className="jsx-1617187990"
                    />
                  </a>
                </div>
              </div>
              <div className="jsx-1617187990">
                <div className="jsx-1617187990">
                  <a href="/tech/php" title="PHP" className="jsx-1617187990">
                    <img
                      alt="PHP"
                      src="https://d2kiq8w3rnav4q.cloudfront.net/images/join-us/tech/php.png"
                      className="jsx-1617187990"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="jsx-1707425761 success-cases">
        <div className="jsx-1707425761 container">
          <h2 className="jsx-191571135">Some success stories</h2>
          <div className="jsx-1707425761 success-case">
            <div className="jsx-1707425761 description">
              <img
                src="https://media.graphassets.com/rrcsOSsQM8MA1pCrEMnQ"
                alt="Outcome"
                className="jsx-1707425761 animated pulse"
              />
              <div className="jsx-1707425761 dangerouslySetInnerHTML">
                <p>
                  <strong>Ritual</strong>, a subscription women’s multivitamin
                  brand, wanted to create a new stand-alone site for its New
                  Year’s resolution. The result is a first-of-its-kind blend of
                  retail and meaningful, mindful habit change for consumers.
                  It’s an amazing example of delivering value first, helping
                  potential customers be better versions of themselves. Since
                  Ritual was founded in 2015, they’ve sold 1 million bottles of
                  vitamins and raised over $40M in venture funding.
                </p>
              </div>
              <div className="jsx-1707425761 testimonial">
                <h4 className="jsx-1707425761">What they say about us</h4>
                <p className="jsx-1707425761">
                  I’ve never had such an easy, bug-free public launch before.
                  This really speaks to the quality of the code... We have tons
                  of users already and everything is working perfectly—no
                  alarms, no snags, nothing.
                </p>
                <p className="jsx-1707425761 author">
                  Daniel Archer, Lead Engineer,{" "}
                  <strong className="jsx-1707425761">Ritual</strong>
                </p>
              </div>
            </div>
            <div className="jsx-1707425761 design-outcome">
              <div className="jsx-1707425761 design-title">
                increasing agency for the new year
              </div>
              <img
                src="https://media.graphassets.com/Twc5QDevSWmPzdntFj0F"
                alt="project image"
                className="jsx-1707425761 screenshot-image"
              />
            </div>
          </div>
          <div className="jsx-1707425761 success-case">
            <div className="jsx-1707425761 description">
              <img
                src="https://media.graphassets.com/lvOB61zSVeESHlxX7ISw"
                alt="Outcome"
                className="jsx-1707425761 animated pulse"
              />
              <div className="jsx-1707425761 dangerouslySetInnerHTML">
                <p>
                  We worked closely with <strong>Draper Venture Network</strong>{" "}
                  to build their new public site and an exclusive member portal.
                  The portal allowed over 1000 entrepreneurs and investors to
                  connect in a meaningful way like never before, delivering
                  value to their 24 funds managing over $2 billion in assets
                  across the globe.
                </p>
              </div>
              <div className="jsx-1707425761 testimonial">
                <h4 className="jsx-1707425761">What they say about us</h4>
                <p className="jsx-1707425761">
                  AE was great at taking this 30,000ft. idea we had in our heads
                  and turning it into a tangible product that looks beautiful
                  and works as our users expect. They translated our business
                  goals into actionable user stories and helped us shape the
                  product in smart, startup-y ways as we went. We’re thrilled
                  with the results.
                </p>
                <p className="jsx-1707425761 author">
                  Anna Diaz, Product Manager,{" "}
                  <strong className="jsx-1707425761">
                    Draper Venture Network
                  </strong>
                </p>
              </div>
            </div>
            <div className="jsx-1707425761 design-outcome">
              <div className="jsx-1707425761 design-title">
                Connecting 1000 entrepreneurs and investors
              </div>
              <img
                src="https://media.graphassets.com/uSMXiBbvTP2OpdkVacAI"
                alt="project image"
                className="jsx-1707425761 screenshot-image"
              />
            </div>
          </div>
          <div className="jsx-1707425761 success-case">
            <div className="jsx-1707425761 description">
              <img
                src="https://media.graphassets.com/mzCENcF7RiiAoQrZX6d1"
                alt="a"
                className="jsx-1707425761 animated pulse"
              />
              <div className="jsx-1707425761 dangerouslySetInnerHTML">
                <p>
                  Best Apps is a technology company whose products focus on
                  custom apparel. Their platform allows fans to collaborate with
                  brands, celebrities, athletes and more to create unique
                  wearables. We worked alongside their team to build technology
                  from the ground up, resulting in numerous rounds of funding.{" "}
                </p>
                <p>
                  With more than 320,000 downloads, their main iOS app also
                  allows users to design a shirt from their phone/tablets in the
                  easiest way possible. We also launched major A-list
                  celebrities e-commerce stores featuring customizable merch,
                  racking over 4 millions visits within 3 days and the sale of
                  countless one-of-one products.
                </p>
              </div>
              <div className="jsx-1707425761 testimonial">
                <h4 className="jsx-1707425761">What they say about us</h4>
                <p className="jsx-1707425761">
                  They were very accommodating from the beginning, offering
                  support wherever needed. The project was always well-staffed
                  because of their team’s skill level. In their past few years
                  of growth, they bring in quality talent and maintain
                  professionalism. We’ve had audits and advisors review the
                  code, and everything is top-notch.{" "}
                </p>
                <p className="jsx-1707425761 author">
                  Michael Bowen, President,{" "}
                  <strong className="jsx-1707425761">Best Apps</strong>
                </p>
              </div>
            </div>
            <div className="jsx-1707425761 design-outcome">
              <div className="jsx-1707425761 design-title">
                Developing a cross-platform, B2B and B2C apparel empire
              </div>
              <img
                src="https://media.graphassets.com/oDllUPzvRqGZ3LM7ioEx"
                alt="project image"
                className="jsx-1707425761 screenshot-image"
              />
            </div>
          </div>
          <div className="jsx-1707425761 button-wrapper">
            <a
              href="/work"
              title="See other success stories"
              className="jsx-1707425761 btn btn-link underline-red btn-generic no-margin"
            >
              See some other great stuff we've built
            </a>
          </div>
          <div className="jsx-1707425761">
            <button
              type="submit"
              aria-label="Free Consultation"
              className="jsx-2416336110 gradient-button"
              style={{
                padding: "0.78em 2em 0.65em",
                marginTop: "0.5rem",
                fontSize: "1.2rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <span className="jsx-1707425761">Let’s Talk!</span>
            </button>
          </div>
        </div>
      </section>
      <div className="jsx-237162092 ">
        <section className="jsx-2004302635 partners">
          <div className="jsx-2004302635 container">
            <div className="jsx-2004302635 prettify partner-center">
              <p>
                Our team of software engineers are highly collaborative and make
                your ideas into <strong>products users love</strong>.
              </p>
            </div>
            <div className="jsx-2004302635 partner-logos" />
            <div className="jsx-2004302635 team-members">
              <div className="jsx-3662313165 member">
                <img
                  src="https://media.graphassets.com/wvf9CFBaQ2qKKUPnAkI8"
                  alt="Space"
                  className="jsx-3662313165"
                />
                <h2 className="jsx-3662313165">Space</h2>
                <h3 className="jsx-3662313165">LEAD ARCHITECT</h3>
                <p className="jsx-3662313165">
                  20+ years development experience spending both work &amp; free
                  time developing dynamic, UI rich websites &amp; apps for a
                  wide variety of applications &amp; businesses.{" "}
                </p>
              </div>
              <div className="jsx-3662313165 member">
                <img
                  src="https://media.graphassets.com/QC7O8s9iQO25QeJexrCW"
                  alt="Guilherme"
                  className="jsx-3662313165"
                />
                <h2 className="jsx-3662313165">Guilherme</h2>
                <h3 className="jsx-3662313165">
                  DIRECTOR OF TECHNICAL EXCELLENCE
                </h3>
                <p className="jsx-3662313165">
                  Experienced CTO with 10+ years of experience in several areas
                  including e-commerce, databases, operations and native app
                  development. Expert in JavaScript and its ecosystem (Node.js,
                  Express.js, Angular, React/Redux, GraphQL, Ionic, React
                  Native, and more) and experienced in Ruby on Rails, Python,
                  Django, Swift, Objective-C, Java, Redux, PostgreSQL, MySQL,
                  MongoDB, and more.
                </p>
              </div>
              <div className="jsx-3662313165 member">
                <img
                  src="https://media.graphassets.com/W4jb5BSESKeQSnP4x4Bb"
                  alt="Melanie"
                  className="jsx-3662313165"
                />
                <h2 className="jsx-3662313165">Melanie</h2>
                <h3 className="jsx-3662313165">CHIEF TECHNOLOGY OFFICER</h3>
                <p className="jsx-3662313165">
                  10+ years experience building products and leading teams for
                  early-stage startups and tech companies. Former CTO at To The
                  Tens, co-founder of ELIX, and full stack developer and leader
                  at several LA-based startups. I make impactful products with
                  web technologies &amp; AI and love leading and growing teams.
                  Some of the tools I’ve used: Python, TensorFlow, Keras,
                  Solidity, Node.js, React, React Native, Angular, Ionic, Ruby
                  on Rails, GraphQL, MongoDB, MySQL, PostgreSQL, and more. B.S.
                  from Yale University, focused on statistical analysis of
                  ecological systems.
                </p>
              </div>
            </div>
          </div>
          <div className="jsx-2004302635 button-wrapper">
            <a
              title="Meet the team"
              className="jsx-2004302635 btn btn-link underline-red btn-generic no-margin"
              href="/team"
            >
              Meet some more of the team
            </a>
          </div>
        </section>
      </div>
    </div>
    <FooterCta/>
    </>
  );
};

export default ProductDev;
