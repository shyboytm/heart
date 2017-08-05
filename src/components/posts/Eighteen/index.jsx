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

class Eighteen extends Component {
  render() {

    const imgEighteen = require('../../../img/roc-volume-18-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Tips%20for%20Working%20Remote%20Part%202%20http%3A//blog.cortes.us/tips-for-working-remote-two%20via%20%40fromcortes"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/tips-for-working-remote-two"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/tips-for-working-remote-two" />
        <Content id="18" >

          <Image imgSrc={imgEighteen} imgAlt="Tips for Working Remote (Part 2)" />
           <div className="mb5 tl">
            <H size={1}>Tips for Working Remote (Part 2)</H>
            <span className="blue pr3">Volume 18</span>
            <span className="black-50">Published Jan 12 2017</span>
          </div>

          <P>Welcome to Volume 18 of The Rate of Change. I hope you’re having an amazing week! As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before we get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>No updates for Quarry this week, been a bit too busy with freelance work and getting accustomed to helping out the team at Design Inc. in my spare time. Drew has been working on learning code so we can work on building better, more useful things for you to use. More updates soon!</P>
          <H size={2}>Personal Life</H>
          <P>I’ve had my head down working on developing a native version of this blog in React for you to browse and enjoy with a better reading experience than here on Medium. Once it’s done I’ll let you know, but don’t worry, I’ll be posting them to Medium as well still so you can choose your reading experience.</P>
          <P>Happy to say that next week I will be heading to Orange County in CA! Excited to visit for the first time and enjoy a little break with some warm weather. Let me know if there is anything specific I should check out there!</P>

          <LineBreak />

          <P><DropCap>I</DropCap>’ve been working remote for quite a while now. Whenever I tell people I work remote, they are always curious about how I can get stuff done and my recommended practices. If you work remote/work from home or are wanting to, this article is for you. This is part 2 of the series, so make sure you have read <L>part 1</L> before continuing. Enjoy!</P>

          <H>6. Add Variety to Your Work Environment</H>
          <P>Limiting yourself to one work environment day in and day out is a quick way to limit your creativity. A lack of stimulating visual senses can put a dent on your work quality and productivity and I’ve had to learn how to deal with this the hard way.</P>
          <P>My advice to you is to change your workspace as often as you are comfortable with. This doesn’t have to be anything too extreme or expensive either. Work from a coffee shop a couple days a week. Work outside in the afternoons if you can. Change the location of your desk every other week. Put up a new print in your workspace, or even remove a couple things from your workspace (Do you really need all those pens?).</P>
          <P>Personally, I’ve even found moving where I am sitting within my apartment is helpful. If I’m sick of being at my desk, I’ll sit at the dining table for a few hours. When I’m writing, I like to sit in a lounge chair in my living room. When I’m working on a personal project, sometimes I’ll even sit on the couch and have Netflix on in the background.</P>

          <H>7. Be Conscious of Your Health</H>
          <P>Let me preface this by saying this is very important. Working and living in the same place can lead to much less activity in your day-to-day routine. Your health is the most important aspect of your life; your health is what allows you to carry out other important parts of your life.</P>
          <P>Make sure you are getting some source of activity every day. Whether it be a midday walk, hitting the gym before or after work, pushups every hour, etc. Just please be sure to get some activity mixed into your life.</P>
          <P>Just as important as activity is what you eat. Find easy, healthy recipes to have on hand that you can make for all meals. You can even figure out a day for meal prep on the weekend and not have to worry about cooking throughout the week. Plus, you won’t be tempted to grab fast food or delivery to save yourself time.</P>
          <P>Lastly, make sure you are getting enough rest and sleep. Staying up late because you know you don’t have much of a commute is a common mistake. Be sure to set an alarm for when you need to start getting ready for bed and don’t ignore it. Rest is crucial as well, work and rest time have a tendency to overlap sometimes. When it’s time to be done for the day, make sure you are done for the day. Wrap up those last few changes and send that last email with a little bit of time left over to transition to home life, work is over!</P>

          <H>8. Listen to Great Music</H>
          <P>I’ve found that having music you really enjoy and can jam out to a huge help to my productivity. Music helps you really get focused and provides a boost of energy towards what you are doing. This is of course subjective, but I find having music without (or minimal amount) words during work that requires a lot of thought to be helpful. Once you’re back to less thought-intensive work, feel free to bring out other type of music.</P>

          <H>9. Have Dedicated Email Time</H>
          <P>Do not be a servant to your email. As a remote/work-from-home person, it’s easy to think you need to be immediately responsive to email. But, this isn’t the case. Constantly being interrupted by emails is a sure way to cut your productivity and finish days feeling like you haven’t done much. Set yourself a strict time for checking emails before getting into intensive work, and after finishing that work, with ample amount of time to be done at the correct time with the work day.</P>

          <H>10. Have a Detailed Plan for Your Typical Day</H>
          <P>Not every day is going to be the exact same of course, but having a guide for each day is a great way to keep you on task. This isn’t a steadfast rulebook for each of your days, but I find it better to have something to reference and adapt it a little (if needed) for each day, depending on what happens. Then, you aren’t guessing what you should be doing and keep yourself on track throughout the day.</P>
          <P>A great example is Jessica Hische’s ultra schedule. She wrote <L hrefLink="http://jessicahische.is/thinkingthoughtsonscheduling">this post</L> about keeping a strict schedule. It was very inspiring to me since I have a hard time staying focused sometimes. This keeps you accountable. She has an example of her schedule <L hrefLink="http://jessicahische.is/images/ultraschedule.jpg">here</L>, I recommend you making a new calendar for this so you can toggle it on and off as needed.</P>

          <div className="tc">
            <H size={2}>Want a Part 3? Let me know if this was helpful!</H>
          </div>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default Eighteen;
