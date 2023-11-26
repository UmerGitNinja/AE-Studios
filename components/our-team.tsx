"use client";

import React from "react";
import './ourTeam.css'
import Purple from "./purple";
import Friends from "./friends";
import FooterCta from "./footer-cta";
import {useEffect, useState} from 'react'
const OurTeam = () => {
  const [isMounted, setIsmounted] = useState(false)

  useEffect(()=> {
    setIsmounted(true)
  },[])
  if (!isMounted) {
    return null
  }
  return (
    <>
    <section className="jsx-2410025679 top ">
      <div className="jsx-2410025679 container">
        <h1 className="jsx-2536674637 animated fadeInDown title">
          Software is our <span className="jsx-2536674637">labor of love</span>
        </h1>
        <div className="jsx-2536674637 shortTitle">
          <p className="jsx-2429337914 prettify" >
          <p className="jsx-2536674637">
            Our team consists of
            <b className="jsx-2536674637"> scrappy startup founders</b>,
            <b className="jsx-2536674637"> academic PhDs</b>, and
            <b className="jsx-2536674637">
              formally trained technology consultants
            </b>
            . We focus on combining all of our learnings and experiences to
            build the best products for our clients.
          </p>
          </p>
        </div>
        <a
          className="jsx-2927143685 btn btn-link underline-red work team"
        >
          Work with us
        </a>
      </div>
    </section>
    <Purple/>
    <Friends/>
    <FooterCta/>
    </>
  );
};

export default OurTeam;
