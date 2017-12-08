import React, { Component } from 'react';

import Content from '../../Content';
import Header from '../../Header';
import Footer from '../../Footer';

import DropCap from '../../type-elements/DropCap';
import H from '../../type-elements/H';
import Image from '../../type-elements/Image';
import L from '../../type-elements/L';
import LineBreak from '../../type-elements/LineBreak';
import P from '../../type-elements/P';
import PostEnd from '../../post-elements/PostEnd';
import Social from '../../type-elements/Social';

class SixtyFour extends Component {
  render() {

    const imgSixtyFour = require('../../../img/roc-volume-64-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Questions%20to%20Ask%20Employers%20Hiring%20Remotely%20by%20%40fromcortes%20http%3A//blog.cortes.us/questions-to-ask-employers-hiring-remotely"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/questions-to-ask-employers-hiring-remotely"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/questions-to-ask-employers-hiring-remotely" />
        <Content id="64">

          <Image imgSrc={imgSixtyFour} imgAlt="Questions to Ask Employers Hiring Remotely" />
          <div className="mb5">
            <H size={1}>Questions to Ask Employers Hiring Remotely</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 64</span>
            <span className="black-50 pr3">Published Dec 1 2017</span>
          </div>

          <P><DropCap>A</DropCap>pplying for remote positions is an undeniably difficult task. Sure, technology nowadays is amazing and empowers us to work remotely just fine, but what about deciding where and who you’re going to work with?</P>
          <P>As someone who spent weeks looking for my next remote role in a company, I can speak first hand to the challenges here. I was fine with introducing myself and talking about what I do and what I was looking for. I will say though, it can feel difficult to not only get who you are across to the interviewer, but really learn everything about a company’s fit just over the internet in 30 minutes.</P>
          <P>During the time I have been interviewing, I’ve spent a lot of effort refining and adding to a list of questions I like to ask interviewers. I’d like to share that with you in hopes that it will help you better define what you are looking for and finding out crucial information with the 30 minutes you typically have. Some of these are more general hiring questions but most focus on the remote search. I’m sure there are others to add to the list, but here goes!</P>

          <LineBreak />

          <P><strong>Is the company hiring because of growth or to fill a spot that was left?</strong> You want to make sure the company is hiring for a good reason. If they are hiring to fill a spot, follow up with figuring out why they left and this should give you a good coverage of signs to look for.</P>
          <P><strong>Does the company have company meetings or retreats where everyone is onsite?</strong> This part is important to me personally. I love working remote, but meeting people in person and hanging out with them creates a whole new level of understanding in my opinion. 1 or 2 times a year is standard in my experience.</P>
          <P><strong>How often can team members come and work out of the office if they are remote?</strong>  This goes hand in hand with the previous question. Being at the office really helps build relationships for remote folks and gives you a way to become better informed on the day-to-day of the company. This varies for me, some companies require you travel to the office a few times a year while others can leave it completely up to you.</P>
          <P><strong>Who will I be working with and how many people are in the position’s team? How many of them are remote?</strong> If applicable, find out who you will be working with most often and the general personality of those team members. Although you can’t get a full report of them without actually working with them, it’s good to get a general feel for your potential teammates and their experience.</P>
          <P><strong>What is the expected schedule for availability online with such a large amount of the team remote?</strong> Most of the time, remote companies have team members spread across many different time zones with different expectations set here. For example, I live in the CST time zone. If the company is based in a PST location, do I need to start later to match their time? Or do I work on the normal schedule within my time zone instead? These are usually varied policies and it’s a good idea to take these into account.</P>
          <P><strong>Do you allow flex time?</strong> This could also fall under unlimited PTO, but it’s better to be specific just in case. Flex time allows you to take hours off during the day in case something comes up, you need to run an errand, etc. This has been helpful for me in the past when I need run a quick errand, not feeling well, or even take my dogs to the vet.</P>
          <P><strong>How many employees are there as of now? How does the diversity look there? Are there any statistics you have on this?</strong> This is extremely important to me. Working with people with different backgrounds, beliefs, ideas, and experience leads to better and more thought through work. Luckily most companies taking this into consideration and will have perspectives they can talk to. Remote companies have this easier usually because of where they can hire from but again, I believe these are important to ask.</P>
          <P><strong>What do you like best working there and what keeps you there?</strong> I like to ask this question regardless of the role being remote or not, but I’ve found asking this question very helpful. This really lets you speak to the interviewer on a more personal level and get to know why they decided to join that company. If they have been there for a while, even better! You can tap into what makes the company worth staying at for longer periods of time.</P>
          <P><strong>How are meetings organized and how often are they held?</strong> As a remote employee, meetings are important. Depending on your role, they can be a great asset to your day, or sometimes be a detriment  to your focus time. Learning how often the company holds meetings and how they are organized is a great place to gauge and balance your decision.</P>
          <P><strong>What type of support or learning encouragement does the company offer?</strong> It’s imperative to never stop learning in your field and it’s very helpful to have a company that supports you in this. Does the company offer support for helping employees learn and grow personally. Is there a budget for courses and books? Does the company provide any help for going to conferences?</P>

          <LineBreak />

          <P>That’s all for this article, these are all the ones I think are most important to ask employers when looking for remote rolls. I’m sure there are others to add that are helpful, so let me know if there are others you suggest!</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default SixtyFour;
