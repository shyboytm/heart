import React, { Component } from 'react';

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

class FourtySix extends Component {
  render() {

    const imgFourtySix = require('../../../img/roc-volume-45-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Help%20People%20Help%20You%20by%20%40fromcortes%20http%3A//blog.cortes.us/help-people-help-you"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/help-people-help-you"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/help-people-help-you" />
        <div id="46" className="bg-white br3 ph5-l pv4-l ph4 pv3 shadow-custom">

          <Image imgSrc={imgFourtySix} imgAlt="Help People Help You" />
          <div className="mb5 tc">
            <H size={1}>Help People Help You</H>
            <span className="blue pr3">Volume 46</span>
            <span className="black-50 pr3">Published July 13 2017</span>
          </div>

          <P>Welcome to Volume 46 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <H size={2}>Personal Life</H>

          <LineBreak />

          <P><DropCap>T</DropCap>his past week I parted ways with a company I worked at for 2 years. Although I was not there for a huge amount of time and was not fulfilled with the work I was doing there, but I definitely made some great friends and learned a lot during my time there. To be honest, I was quite disheartened when the day came to start working there.</P>
          <P>I was worried, scared, and unsure of what to do next as I did not have a new position lined up afterwards. This was my first time being in this state of not working at a company and had no idea where to turn to. Of course I spoke to family and close friends. After those conversations I definitely felt better, but still unsure of what to do. I’ve been fortunate enough to not have to ever have a resume or write a cover letter but was in dire need of both now. So, I got to writing and got a resume and a feel for cover letters done by the end of that day.</P>
          <P>Before writing my resume that day, I decided to post on my social networks and some of the Slack groups I was in just in case 1 or 2 people happen to know of some sort of job I could interview for. I did not think anything of it after posting and went to getting paperwork done that I needed for applying.</P>
          <P>After I finished, I went to take a social media break and was overwhelmed by the amount of support I got from friends and colleagues in the community. I had the most retweets I have ever gotten on Twitter, my Slack accounts were flooded with thread replies, and my inbox already had a few folks interested in interviewing me for their team. I was so relieved and overwhelmed that I would be able to get back on my feet, especially during a move across states and having to support myself and my dogs while helping my girlfriend as she works her way through med school.</P>
          <P>The reason I am writing this article is in no way to brag about any numbers or anything like that. On the contrary, I want to show how important people are in our lives. People care about people. Friends, family, and even colleagues want to see you succeed and are there for you in one way or another if you ask for the help. I am usually one to stay quiet when I need help and figure things out on my own. But, this one time that I truly needed the help and asked, I received more support than I imagined, even from people that I have never spoken to. I hope this serves as a reminder to ask for help from others, whether it be for a new job or just some advice, most folks are more than happy to help out. Even better, feel free to reach out to me if you need any help or advice, I’m more than happy to try and help out!</P>
          <P><strong>P.S. I do have a few calls lined up with companies but I haven’t found my new team as of right now yet. If you or anyone/company you know is looking to bring a designer and illustrator that codes onto their team, please pass along my email: <L hrefLink="mailto:hi@cortes.us">hi@cortes.us</L>, thanks!</strong></P>

          <PostEnd />

        </div>
        <Footer />
      </div>
    );
  }
}

export default FourtySix;
