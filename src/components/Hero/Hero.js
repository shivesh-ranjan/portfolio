import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm 𝙎𝙝𝙞𝙫𝙚𝙨𝙝👋 <br />
          Machine Learning & Web Developer
        </SectionTitle>
        <SectionText>
        pursuing Computer Science Engineering with specialisation in AI&ML. I am skilled in Python, C and C++ and currently exploring Data Warehousing technologies. Checkout my profile on LinkedIn.
        </SectionText>
        <Button onClick={() => window.location='https://linkedin.com/in/shivesh-ranjan'}>LinkedIn</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;