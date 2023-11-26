import React from 'react'
import OurTeam from '@/components/our-team';
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Our Team',
};
const Team = () => {
  return (
   <OurTeam/>
  )
}

export default Team