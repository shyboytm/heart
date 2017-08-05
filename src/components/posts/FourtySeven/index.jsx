import React, { Component } from 'react';

import Content from '../../Content';
import Header from '../../Header';
import Footer from '../../Footer';

import Blockquote from '../../type-elements/Blockquote';
import DropCap from '../../type-elements/DropCap';
import GalleryThree from '../../post-elements/GalleryThree';
import H from '../../type-elements/H';
import Image from '../../type-elements/Image';
import L from '../../type-elements/L';
import LineBreak from '../../type-elements/LineBreak';
import P from '../../type-elements/P';
import PostEnd from '../../post-elements/PostEnd';
import Social from '../../type-elements/Social';

class FourtySeven extends Component {
  render() {

    const imgFourtySeven = require('../../../img/roc-volume-47-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=5%20Things%20I%20Learned%20Applying%20to%20Jobs%20in%20the%20Tech%20World%20by%20%40fromcortes%20http%3A//blog.cortes.us/5-things-i-learned-applying-to-jobs-in-tech"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/5-things-i-learned-applying-to-jobs-in-tech"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/5-things-i-learned-applying-to-jobs-in-tech" />
        <Content id="47">

          <Image imgSrc={imgFourtySeven} imgAlt="5 Things I Learned Applying to Jobs in the Tech World" />
          <div className="mb5">
            <H size={1}>5 Things I Learned Applying to Jobs in the Tech World</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 47</span>
            <span className="black-50 pr3">Published Aug 3 2017</span>
          </div>

          <P>Welcome to Volume 47 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>As per usual, Aaron and I are still going strong working on our life-tracking app <L hrefLink="https://livtra.co">Livtra</L>. We’re making tons of great progress and are hoping to have a private Alpha ready by the end of next month. Excited to show off all our hard work!</P>
          <H size={2}>Personal Life</H>
          <P>This week I have been taking a much needed mental break for myself as I get settled in to my new apartment and take time to find a new team to be a part of for full-time work. A lot of work on personal projects and working on some small new ideas I have as well as a blog redesign are some of the things I’ve been working on. I’ve also been playing quite a bit of video games like some ROM-hacked Pokémon games during my breaks. Hoping to find a new career opportunity soon to get back into my normal schedule and routine I am used to.</P>

          <LineBreak />

          <P><DropCap>As</DropCap>I mentioned in last week’s newsletter, I parted ways with my recent full-time company and have been actively searching for a new design/dev job the past 2 weeks. I’ve researched and interviewed quite a bit over the last two weeks and wanted to share a few of the things I have learned with you as advice and general observation for applying to similar jobs in tech.</P>

          <div className="pv3">
            <H size={1}>It’s harder than you think</H>
            <P>Of course I never thought finding a new job would be easy. But I was not expecting it to be as difficult as it has turned out to be. As of now, I have applied to ~25 different companies. I’ve been rejected by 4 of the companies, am in talks with 5 of them, had 5 of them not have the correct circumstances for me, and have not heard from the other 11 companies yet. Being patient, understanding, methodical, and persistent is crucial during this time. Pace yourself, stay positive, and take the time you need to find a place that is a great match for you.</P>
          </div>

          <div className="pv3">
            <H size={1}>There are a lot of companies doing great things</H>
            <P>One of my favorite things about this process has been coming across new companies with incredible products, work, and teams. I’ve found a couple companies and people I didn’t know about and have been able to find their craft inspirational in multiple aspects of my work. A few of my favorites are <L hrefLink="http://madebyspeak.com">Speak</L>, <L hrefLink="http://christopherdoyle.co">Christopher Doyle & Co</L>, and <L hrefLink="http://jottacloud.com">Jottacloud</L>. I’m sure you will come across other companies as well in your search!</P>
          </div>

          <div className="pv3">
            <H size={1}>Great remote jobs are scarce</H>
            <P>This came as a surprise to me to be quite honest. More and more we hear about remote job opportunities being added and becoming prevalent, especially in the tech world. Most of the companies I wanted to work at required you to live in NYC or SF mainly, which I find crazy.</P>
            <P>Also, it may just be my personal experience, but while looking for remote opportunities that fit what I was looking for I had trouble finding jobs that I would label as great or even good. The job descriptions for a lot of the opportunities that peaked my interest needed work. The majority came off as if the companies wanted full control over the remote employees schedule and seemed to not trust potential employees coming on to the team.</P>
            <P>I will say a handful of the jobs I did come across were incredible. These postings wanted a trusted member to bring on and improve on existing practices with a positive symbiotic relationship for both the company and employee. Without diving too deep into this subject, I think some companies need to rethink the way they write and present job postings.</P>
          </div>

          <div className="pv3">
            <H size={1}>Diversity is hard to come by (people and skill sets)</H>
            <P>Another large selling point of my job hunt has been finding a diverse set of team members I would be working with that I can learn and grow with. Equal representation of people and skill sets within teams is luckily a sought out improvement in most companies (some even label this on their applications). But, I struggled a bit to find teams that I believe would contribute to my overall goals of learning from others both personally and professionally. I’m hoping this gets much better in the next few years.</P>
          </div>

          <div className="pv3">
            <H size={1}>Personal projects come in handy</H>
            <P>If you know me or my work, you know I’m obsessed with personal projects. I love making things that scratch my own itch in my free time. A pattern I noticed when applying and interviewing with companies was how impressed and supportive they were of me pursuing my own projects. Not only did these projects act as visual portfolio pieces, but they were compliments and examples of my way of thinking and my workflow. During almost every interview I have had, I’ve been able to use a personal project as a verbal case study explaining my approach to them including project goals, problems, and solutions. This experience helped me solidify more of the advantages of working on projects in my free time.</P>
          </div>

          <LineBreak />

          <P>That’s 5 things I have learned during this time of applying to places and trying to find a new job in the tech world. I’d love to know if you found this helpful and/or if you have any questions about the process you would like to see me write about. I feel that this subject is overlooked quite often in this industry, we only focus on the positives. But, I think there is value in speaking about the negatives and how they were overcome. Let me know if you have anything you’d like to ask!</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default FourtySeven;
