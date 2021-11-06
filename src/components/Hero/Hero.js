import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
     <LeftSection>
       <SectionTitle main center>
         Welcome To <br/>
         My Personal Portfolio
       </SectionTitle>
       <SectionText>
         I am Krishnkant Pachori and currently I am learning Web Development.
       </SectionText>
       <Button onClick={()=>window.location='https://github.com/Dcode-k' }>Know More</Button>
     </LeftSection>
 </Section>
);

export default Hero;