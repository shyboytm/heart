import React, { Component } from 'react';

import Content from '../../Content';
import Header from '../../Header';
import Footer from '../../Footer';

import DropCap from '../../type-elements/DropCap';
import GalleryThree from '../../post-elements/GalleryThree';
import H from '../../type-elements/H';
import Image from '../../type-elements/Image';
import L from '../../type-elements/L';
import LineBreak from '../../type-elements/LineBreak';
import P from '../../type-elements/P';
import PostEnd from '../../post-elements/PostEnd';
import Social from '../../type-elements/Social';

class SixtyEight extends Component {
  render() {

    const imgSixtyEight = require('../../../img/roc-volume-68-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=My%202017%20by%20%40fromcortes%20http%3A//blog.cortes.us/2017"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/2017"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/2017" />
        <Content id="68">

          <Image imgSrc={imgSixtyEight} imgAlt="Here’s a Giant List of Design Inspiration for You to Use" />
          <div className="mb5">
            <H size={1}>My 2017</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 68</span>
            <span className="black-50 pr3">Published Jan 5 2017</span>
          </div>

          <P><DropCap>S</DropCap>ince 2015, I write a post each year reflecting back on my major accomplishments of the year and this week I wanted to share my 2017 with you at 23 years old. I’d recommend doing the same if you have time, it’s a great way to reflect and keep record of major accomplishments in your life and a record of them. It’s a great source for motivation and being your own competition.</P>

          <H size={2}>💪 I Grew Personally and Professionally</H>
          <P>I know this is a broad topic, but wasn’t really sure how to break it smaller. Basically, I learned so much this year. I figured out what’s important for my life and my work and decided to focus on those things. I learned to accept myself and be more open with how weird and nerdy I really am. I learned so much about code, design, and business, plus the way we use and interact with technology. I learned to be more polite and nicer to others. I learned to be supportive and helpful with the goals of others rather than focusing on myself all the time. I learned to enjoy the small things in life. I learned to accept that life shouldn’t be only about work, balance is everything.</P>
          <P>As cliché as it sounds, I learned to be a better person I think. Call it growing up or common sense, but I truly think I’m a happier person now than I was just 12 months ago. I feel this way each year, and yet it never ceases to put a smile on my face when I think back on the year before.</P>

          <H size={2}>💰 Had to Have My First Real Job Hunt</H>
          <P>I’ve been very fortunate in my adult life to never have gone searching for a job until this year. My previous roles in the tech world were through friends and colleagues I had and never even had to interview. This year was different. After leaving Satchel Health, I was in a bit of a scramble while also trying to move from Saint Louis back to Tennessee. When I wasn’t packing, I was looking and asking everywhere I could to find a job that fit what I was looking for.</P>
          <P>I truly learned quite a bit about adulting during this time. While I know my situation wasn’t the hardest comparatively, I did struggle a bit during this time. Figuring out budgeting without an income, explaining to my parents the situation while they thought I should get a PhD, asking for favors and leads from friends, making sacrifices on time and money, etc. It was a testing time for me personally that’s for sure.</P>

          <H size={2}>📦 Moved to Memphis, TN</H>
          <P>To keep my tradition of moving once a year, I moved back to Tennessee this year. All jokes aside, my girlfriend got accepted into a medical program here in town and being the supportive boyfriend that I am, I decided to tag along with her. Although I haven’t gotten accommodated to being here just yet, I do enjoy changing my scenery and getting used to a different lifestyle when I do move.</P>
          <P>I’ve found a couple gems here though which I have loved. Finding and learning about the culture and places in a new city has definitely been a great catalyst for my personality to get me out of my comfort zone. Although, I may be moving again in 2018, but we’ll see what happens!</P>

          <H size={2}>🧐 Started My First “Actual Business"</H>
          <P>I’ve been creating small businesses and side projects my whole career, but this year I decided to pursue my first business that has quite the potential for becoming something profitable.Of course making these projects was never about money, but this is the first time I’m able to create something larger than just a small niche product.</P>
          <P>You may or may not know, but the project I started working on is <L hrefLink="https://livtra.co">Livtra</L>, the hub for your life. As always, there have been some obstacles on getting things 100% ready to launch, but the app is coming along really well and polished. It’s truly unlike anything that exists in terms of the problem we’re solving, and it certainly has been a great challenge to design and develop for. We have a hard deadline for Spring of next year, but I am beyond happy that I took the courage with my pal <L hrefLink="https://twitter.com/aaronraff_">Aaron Raff</L> to work on something of this proportion.</P>

          <H size={2}>🎹 Started Taking Music More Seriously</H>
          <P>Now by no means am I pursuing music fully anytime soon, but a long standing hobby of mine has been creating music. If you didn’t know, I originally went to college to be a Hip-Hop/Rap producer before I switched over to Design my Sophomore year. Ever since then I’ve thought about making music again and this year I really stepped up in pursuing this hobby. As of today of this year I finished 7 different tracks and am currently working on my first EP that I’m hoping to release by February 2018.</P>
          <P>Creating music has been such a wonderful creative outlet for me and has assisted with growing my creative mind outside of my full-time work. Making music has played a part in keeping me fulfilled with what I do for a living to keep myself from being drained while feeling productive.</P>
          <P><strong>P.S.</strong> For those that have asked, I use Ableton 9 with a <L hrefLink="http://amzn.to/2ArOjs2">Korg Nano keyboard</L> mainly and sometimes my old <L hrefLink="http://amzn.to/2E7dyCe">Maschine MK2</L>. Most of the sounds you hear in my music are heavily altered (reversed, chopped, multiple effects) samples of everything from my own voice and life, samples from popular Rap, R&B, and Ambient music, and even sections from random Anime episodes that no one watches. I like to make music that sounds weird and unique, yet calming and thought-inducing.</P>

          <H size={2}>🎨 Started my Design Studio Off Gray</H>
          <P>Although I haven’t officially announced it and I’m not pushing this project currently, I decided to start my own design studio focusing on branding and illustration projects this year. Like I said earlier, I figured out the things I want to focus on in my personal and professional work. I’d like for my full-time to be primarily Product Design and/or code and have Off Gray as my freelance outlet for my love of branding and illustration projects. This was my first effort at making this a reality for myself and am excited to focus on this at some time in the next year to get things going.</P>

          <H size={2}>🚀 Shipped 14 Side Projects</H>
          <ul className="list lh-copy black-60 f4 mv5 pl4-l pl3">
            <li className="mb4 f4-l f5">
              <P><strong>Pokem</strong> - Was a place for me to keep track of Pokémon games I play but for now it is archived. I wish Nintendo would release an API to access game data!</P>
            </li>
            <li className="mb4 f4-l f5">
              <P><L hrefLink="https://github.com/fromcortes/encounter">Encounter Counter</L> - A React counter for tracking shiny Pokémon chains.</P>
            </li>
            <li className="mb4 f4-l f5">
              <P><L hrefLink="https://cortes.us">New Personal Website</L> - This should count for like 5 since I re-did it that many times. Whoops.</P>
            </li>
            <li className="mb4 f4-l f5">
              <P><L hrefLink="https://blog.cortes.us">Native Blog</L></P>
            </li>
            <li className="mb4 f4-l f5">
              <P><L hrefLink="https://livtra.co">Livtra’s Landing Page</L></P>
            </li>
            <li className="mb4 f4-l f5">
              <P><L hrefLink="https://usequarry.com">New Quarry Site</L></P>
            </li>
            <li className="mb4 f4-l f5">
              <P><L hrefLink="https://gamesandgrids.com">Games and Grids Landing Page</L></P>
            </li>
            <li className="mb4 f4-l f5">
              <P><L hrefLink="https://blog.cortes.us">Native Blog V2</L> - Faster, prettier, easier to use. Then I started on a V3 about two weeks after. Whoops again.</P>
            </li>
            <li className="mb4 f4-l f5">
              <P><L hrefLink="https://prompter.cortes.us">Prompter</L> - A tool that creates randomized prompts for artists and illustrators to use.</P>
            </li>
            <li className="mb4 f4-l f5">
              <P><L hrefLink="https://cortes.us">Personal Site News Layout</L> - When I created a newspaper style layout for my personal site.</P>
            </li>
            <li className="mb4 f4-l f5">
              <P><L hrefLink="https://www.cortes.us/tools">Tools Personal Site</L> - I finally shipped a collection of everything I use in my work and personal life. Everything from setup to video games to coffee.</P>
            </li>
            <li className="mb4 f4-l f5">
              <P><L hrefLink="https://www.cortes.us/mentoring">Mentorship Personal Site</L> - After many requests for a mentorship service from me and my own personal views on the value of mentoring, you can now book a 1-on-1 45-minute chat with me.</P>
            </li>
            <li className="mb4 f4-l f5">
              <P><strong>Degrees of Separation</strong> - Along with some friends of mine, I created a small community for some of my close friends to support each other, share things, and keep ourselves accountable in life.</P>
            </li>
            <li className="mb4 f4-l f5">
              <P><L hrefLink="https://www.offgray.co">Off Gray Landing Page</L></P>
            </li>
          </ul>

          <H size={2}>📝 Released 52 Blog Articles</H>
          <P>After starting my blog (that you are currently reading), this is the first full year I have had to post articles. Following what I said I would do, I released a new article every single week this past year. I wrote about everything from design, development, business, personal life, job hunting, product reviews, and even giving away my own resources for others.</P>
          <P>Writing and releasing an article every single week wasn’t an easy task I’ll admit. It has required discipline and sacrifice in multiple parts of my life, but has overall been one of the biggest accomplishments for me this year. Each release on it’s own feels like a small release, but looking back it’s quite a lot of work that I shipped and put out into the world. On top of writing each, I have to create an illustration for the featured image, transfer from Medium to my native React blog, and then publish those at the same time on one day each week. I wish I could see how many words I’ve written over this past year, I’m sure it’s close to 100,000 on just blog posts!</P>
          <P>I appreciate all the support, shares, and kind words from you. I don’t plan to stop writing any time soon and am excited for all the things I’ll be able to write about, document, and share about my personal and professional life. Cheers to another year of writing!</P>

          <H size={2}>⚡️ Made Many New Friends</H>
          <P>This year has also been a big year for people I’ve met. Ever since I was young it was difficult for me to make new friends, I’ve always been pretty introverted and kept to myself both physically and digitally.</P>
          <P>This year, that changed. Between streaming my work (this will be coming back soon if all goes as planned), being more intentional with reaching out to people, trying to find a new job, and being an overall nicer and more polite person, I’ve made a lot of new friends this year. Some of these folks I’d even call best friends. This has really helped me solidify how important the people around you are and their friendship attributes to a good portion of my success this past year. Thanks to all of you, you know who you are!</P>

          <H size={1}>Looking to 2018</H>
          <P>I’m not one for strict planning of my life, let alone New Year’s resolutions. I do however like to at least have a general direction in my life constantly, 2018 being no different.</P>
          <P>I plan to ship a lot of side projects (mainly updates) this year. I have quite the backlog of things I want to build and update, just haven’t been able to do much these past few months due to outside forces. I’ve started and will continue to get back to where I was of shipping things every month and am excited to show what I’ve been working on.</P>
          <P><strong>A list of other plans for this year:</strong></P>
          <ul className="lh-copy black f4 mv5 pl4-l pl3">
            <li className="mb4 f4-l f5">
              <P>Post more personal and meaningful things on social media</P>
            </li>
            <li className="mb4 f4-l f5">
              <P>Support others in their endeavors even more</P>
            </li>
            <li className="mb4 f4-l f5">
              <P>Embrace my inner nerd and doing what makes me happy there</P>
            </li>
            <li className="mb4 f4-l f5">
              <P>Travel more and seeing my family more</P>
            </li>
            <li className="mb4 f4-l f5">
              <P>Ship v1 of Livtra</P>
            </li>
            <li className="mb4 f4-l f5">
              <P>Fix my working situation to where I’m comfortable with it</P>
            </li>
            <li className="mb4 f4-l f5">
              <P>Spend less time on devices</P>
            </li>
            <li className="mb4 f4-l f5">
              <P>Read more books instead of articles</P>
            </li>
            <li className="mb4 f4-l f5">
              <P>Be consistent with music and release a lot of it this year</P>
            </li>
          </ul>

          <P>Thanks for reading all this, and I wish you the best for this new year! 🎉</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default SixtyEight;
