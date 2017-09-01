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

class FiftyOne extends Component {
  render() {

    const imgFiftyOne = require('../../../img/roc-volume-51-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=How%20I%20Learned%20to%20Code%20by%20%40fromcortes%20http%3A//blog.cortes.us/how-i-learned-to-code"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/how-i-learned-to-code"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/how-i-learned-to-code" />
        <Content id="51">

          <Image imgSrc={imgFiftyOne} imgAlt="The Job Search Needs Change" />
          <div className="mb5">
            <H size={1}>The Job Search Needs Change</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 51</span>
            <span className="black-50 pr3">Published Sep 1 2017</span>
          </div>

          <P><DropCap>I</DropCap> just wrapped up my first week at my new job as a designer and developer at <L hrefLink="https://madebyspeak./com">Speak Creative</L> as I’m writing this. I had a fantastic first week and I’m excited to be working there, thanks for asking! But, this article is about the time leading up to me starting at my new gig.</P>
          <P>Before this job, I have been fortunate enough to not have to actively search for a job and therefore didn’t fully comprehend the struggles of finding a position. I got my first design job offer at 19 from a mentor of mine, and my last job was through a professor in college. After leaving my last job, I was in an uncomfortable spot of not knowing where I would be working next. Although I was confident in my work and my abilities, that uncertainty was one of the worst feelings. Luckily I had some money saved and put 100% of my time into finding a new gig.</P>
          <P>I applied to companies both large and small. I applied to companies like InVision, Github, and Twitter as well as smaller (still amazing) companies such as Roger, Help Scout, and Notion. I applied to around 30 places in total, and heard back from ~12 of them. Most of the companies just didn’t have the right circumstances for me or wasn’t right for some of the roles.</P>
          <P>What really bugged me though, were those ~20 other roles I didn’t hear back about. At the very least a turn down would be better than nothing. But why does that seem to be a recurring theme with larger companies? Why do I need a personal reference to be even considered for a role? And how does that justify as a replacement for talent and ability? A personal reference does not equal the amount of hours I have put to be the very best I can be at my job. Knowing someone within a company that you met once at a meet up should not qualify someone as being more trustworthy or better at a job than I am.</P>
          <P>Although I am writing the above statements from a first-person perspective, this applies to anyone. I understand the complications that companies have to find people they can trust, but I am saying there needs to be a solution to level the playing field for everyone. There needs to be a better way to help those that don’t live in any of the tech bubbles regardless of who you know, how you look, what your hobbies are, etc.</P>
          <P>I’m not saying I have the solution, and it doesn’t seem that anyone else does either even with all these job search helpers today. I’m just saying that something needs to change. It took me about a month to find a new job and I’m pretty confident with my work and abilities. I can’t imagine how difficult it can be for others with a different situation or skill level than I have.</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default FiftyOne;
