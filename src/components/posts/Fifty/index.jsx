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

class Fifty extends Component {
  render() {

    const imgFifty = require('../../../img/roc-volume-49-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=How%20I%20Learned%20to%20Code%20by%20%40fromcortes%20http%3A//blog.cortes.us/how-i-learned-to-code"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/how-i-learned-to-code"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/how-i-learned-to-code" />
        <Content id="50">

          <Image imgSrc={imgFifty} imgAlt="How I Learned to Code and How You Can Too" />
          <div className="mb5">
            <H size={1}>How I Learned to Code and How You Can Too</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 50</span>
            <span className="black-50 pr3">Published Aug 23 2017</span>
          </div>

          <P><DropCap>W</DropCap>ith these articles, I enjoy answering questions that I see come up often from friends and acquaintances. While looking for my next job opportunity, I’ve been ramping up my work and releases of new and updated projects. I’ve also been working a lot on a major project called Livtra. During this time I have had people ask everything from what languages I code certain projects in, if I use a CMS for projects, and mainly questions about how I learned code on my own. So, this week I wanted to give the short version of how I learned to code.</P>

          <H size={2}>My Story</H>
          <P>As someone that studied traditional graphic design in college, I was never pushed to the more technical side of creating projects. Towards the end of college, I had many ideas for projects but had no way of building them myself. I tried different CMS’s that in turn ended up increasing project restraints. I always felt inhibited with the tools available but was intimidated about learning code since I thought you had to be some kind of mathematician to learn what I wanted to know about code.</P>
          <P>Luckily the college I attended had a basic web design course that went over the very basic parts of how websites were made. I took the course my Junior year and we used Dreamweaver for simplicity purposes. Me being me, I wasn’t happy with my ability to code the school project ideas I had in my head. I watched a few videos on HTML/CSS and was able to improve a bit. I really enjoyed learning a bit of code but unfortunately did not keep learning after the semester was over and put coding on hold while I finished up college.</P>
          <P>Fast forward to 2016 after I graduated college, I worked as a designer at a local startup. As much as I love design, at the time I felt like I could contribute more and started to learn a little bit about the process from engineers on the team. Although the web application work we were doing was over my head at the time, learning how to code our marketing website was a catalyst for starting to learn HTML/CSS. I decided to try a free trial at Treehouse and fell in love.</P>
          <P>I discovered a whole other layer to creating that was unknown to me until now. Taking problem solving and images in my head and creating them in design tools was one thing. But actually bringing my work to life in a web browser that was accessible to anyone with an internet connection blew my mind. Finally, I could make and share the ideas I had with others. Taking  the visual aspects of design and creating something tangible and interactive in code felt like some sort of super power to me. I was obsessed. I spent the next year obsessively learning HTML, CSS and JavaScript. Over time I learned about tools like React, Redux, Tachyons, and even Jekyll.</P>
          <P>Today, after a year of learning and working my butt off, I have launched 16 projects with 3 more in the works. At the time of writing this, I have made 1,679 commits over the last year with who knows how many hours of work and progress. I can’t get enough of learning and using code and design together in my personal work and full-time work.</P>
          <P>I’m not saying any of this to brag. I’m saying this because, like anything else, learning code takes time and dedication to learn. I truly believe anyone can learn to code if they put in the time and effort and develop a passion for development. Not to mention there are so many different types and aspects of development, finding an aspect that interests you is very much possible. It is all about finding something you love and staying determined to make that dream a reality.</P>

          <H size={2}>How Can You Learn</H>
          <P>Enough about me, how can you learn code? While I don’t have all the answers for every aspect of code, I’m going to list resources that I use/have used to learn code that I recommend. Hope this helps!</P>
          <L hrefLink="https://medium.com/the-rate-of-change/how-i-learned-to-code-and-how-you-can-too-18a57eca728c">Read the rest on Medium</L>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default Fifty;
