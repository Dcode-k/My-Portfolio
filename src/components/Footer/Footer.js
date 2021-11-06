import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
     <LinkColumn>
    <LinkTitle>
     Call
     </LinkTitle>
     <LinkItem href="mob:+91-9758428260">9758428260</LinkItem>
   </LinkColumn>
   <LinkColumn>
    <LinkTitle>
     Email
     </LinkTitle>
     <LinkItem href="mailto:krishnkantpachori50@gmail.com">krishnkantpachori50@gmail.com</LinkItem>
   </LinkColumn>
     </LinkList>
     <SocialIconsContainer>
       <CompanyContainer>
         Thanks For Visiting
       </CompanyContainer>
       <SocialContainer>
       <SocialIcons href="http://github.com">
     <AiFillGithub size="3rem"/>
   </SocialIcons>
   <SocialIcons href="http://linkedin.com">
     <AiFillLinkedin size="3rem"/>
   </SocialIcons>
   <SocialIcons href="http://instagram.com">
     <AiFillInstagram size="3rem"/>
   </SocialIcons>
       </SocialContainer>
      
     </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
