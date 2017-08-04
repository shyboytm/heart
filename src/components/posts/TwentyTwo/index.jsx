import React, { Component } from 'react';

import Content from '../../Content';
import Header from '../../Header';
import Footer from '../../Footer';

import Blockquote from '../../type-elements/Blockquote';
import DropCap from '../../type-elements/DropCap';
import H from '../../type-elements/H';
import Image from '../../type-elements/Image';
import L from '../../type-elements/L';
import LineBreak from '../../type-elements/LineBreak';
import P from '../../type-elements/P';
import PostEnd from '../../post-elements/PostEnd';
import Social from '../../type-elements/Social';

class Twenty extends Component {
  render() {

    const imgTwentyTwo = require('../../../img/roc-volume-22-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Guidelines%20to%20Great%20Logo%20Design%20by%20%40fromcortes%20http%3A//blog.cortes.us/guidelines-great-logo-design"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/guidelines-great-logo-design"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/guidelines-great-logo-design" />
        <Content id="22" >

          <Image imgSrc={imgTwentyTwo} imgAlt="Guidelines to Great Logo Design" />
           <div className="mb5 tl measure">
            <H size={1}>Guidelines to Great Logo Design</H>
            <span className="blue pr3">Volume 22</span>
            <span className="black-50">Published Feb 9 2017</span>
          </div>

          <P>Welcome to Volume 22 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>Nothing new for this week. But, now that I’m finished with the freelance project I’ve been working on the past 2 months, I have more time to catch up and finish the projects I’ve put on hold. You can expect updates about the website I’ve been working on to help you learn code soon as well as a new project with someone we may be adding to the team.</P>
          <H size={2}>Personal Life</H>
          <P>This first half of the week I’ve been in Nashville visiting Satchel HQ again, working closely with the team on a product we’re on crunch time for. As much as I enjoy working remote, there is always something so rewarding about seeing the team face-to-face. I had a great time but I just got back to Saint Louis last night, happy to be back home!</P>
          <P>Something I’ve been struggling with that I think I want to write about is taking meaningful and relaxing breaks. I have a tendency to beat myself up about taking breaks and not doing something productive, even though the point of breaks is to help you come back feeling more productive and energized. This is something that comes and goes with me over the years and it’s a hard thing to deal with. But, I’d love to share my thoughts on it with you.</P>
          <P>I’m releasing a new song tomorrow, get excited 🎶</P>

          <LineBreak />

          <P><DropCap>I</DropCap>’ve tried quite a few different areas of design during my career. The area that has always been constant for me is branding. The reason I started design was actually because I needed a logo for something I was making and couldn’t afford to hire someone else at the time. Branding design has always fascinated me; the way you can impact the entire company’s potential success and provide an incredible experience for customers with a system of work you create.</P>
          <P>I am constantly asked about tips I have for those interested in logo design so I wanted to give my 3 best tips in this article for you. I think they’ll be helpful whether you are a beginner or experienced designer.</P>
          <P><em>At some point I’d love to make a guide on branding, but today I’d like to focus on logo design. Branding has multiple levels and factors of impact, hence why I’m breaking this article into a much smaller aspect.</em></P>

          <H size={2}>1. Target Market</H>
          <P>Target market is everything in logo design. Companies need to attract people who can be potential customers, making something that appeals to that market can make or break the entire brand.</P>
          <P>For example, you wouldn’t make the same logo for young boys that you’d make for older women. The aesthetic and the mind set of each consumer is entirely different. You have to consider who this product or service is targeted towards and design accordingly.</P>
          <P>Researching and learning about the people you are designing for will serve as your guide for style, subject, color, and imagery. Ask yourself or ask your client about the proof behind this. If there isn’t proof just yet, I’d say that should be your area of focus first.</P>

          <H size={2}>2. Use Case</H>
          <P>Right under target market in terms of importance is the use case. What this means is where the logo will be used, how it will be used, the sizes it will be used at, etc.</P>
          <P>These days, logos are used everywhere you can imagine; websites, print, mobile apps, billboards, packaging, favicons, you name it. The logo has to be legible and able to communicate the same at .25 inches on a label and at 25 feet high on a billboard. Creating a logo that can work well and still be legible and communicative at all these different sizes can not be overlooked. While working, you have to keep all of these requirements in mind to create a logo with versatility and sustainability. Who knows, maybe the logo will have to work well once VR ads are introduced in the future? Your work has to be ready!</P>

          <H size={2}>3. How it Looks</H>
          <P>Yes, this tip is last for a good reason. The way a logo looks is of course important, making something really cool that you are proud of is awesome. But, keep the previous tips above all else. Your logo can look amazing and have really cool custom lettering, but if it’s not for the correct target market and does not meet use case requirements, is that actually a good logo…?</P>
          <P>I’ll let you decide 😅</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default Twenty;
