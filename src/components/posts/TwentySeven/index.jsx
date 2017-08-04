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

class TwentySeven extends Component {
  render() {

    const imgTwentySeven = require('../../../img/roc-volume-27-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=A%20Guide%20to%20a%20Healthy%20Work%20from%20Home%20Lifestyle%20by%20%40fromcortes%20http%3A//blog.cortes.us/guide-healthy-work-from-home-lifestyle"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/guide-healthy-work-from-home-lifestyle"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/guide-healthy-work-from-home-lifestyle" />
        <Content id="27" >

          <Image imgSrc={imgTwentySeven} imgAlt="A Guide to a Healthy Work from Home Lifestyle" />
           <div className="mb5 tl measure">
            <H size={1}>A Guide to a Healthy Work from Home Lifestyle</H>
            <span className="blue pr3">Volume 27</span>
            <span className="black-50">Published Mar 16 2017</span>
          </div>

          <P>Welcome to Volume 27 of The Rate of Change. I hope you’re having an amazing week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before I get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>Still working on my new website, and no updates to sites this week!</P>
          <H size={2}>Personal Life</H>
          <P>I got the Switch on release day and holy cow that system is incredible, that’s where most of my free time has been going lately. The modular hardware mixed with a revamped software really made Nintendo home consoles a thing again for me. I used the Wii U only for Mario Kart and Smash Bros, but I’m ecstatic to play a ton of games on the Switch. The fact that I can take what I’m playing from my couch to anywhere is wonderful and the tablet they created is so much better than the Wii U Game pad. Zelda Breath of the Wild makes the experience ten times better also. I’ve never played a Zelda game and this game is a 12/10 in my book. Really brings me back into RPG and open world games. Not to mention it takes quite some time to beat, which I actually prefer in games.</P>
          <P>I’ve been streaming quite a bit and having a lot of fun being open and transparent while others interact with me in the chat. We’ve been making my new personal site and it’s coming along really well. Be sure to follow the streams and see my schedule here: <L hrefLink="twitch.tv/cortesarts">twitch.tv/cortesarts</L></P>

          <LineBreak />

          <P><DropCap>I'</DropCap>ve been working remote for quite a while now. I am constantly getting asked questions and I do my absolute best to try and answer them whenever I can. This week’s article is another answer for you that I’ve been asked quite a bit. How to establish and maintain a healthy lifestyle as someone that works mainly from home.</P>
          <P>Whether you have a full-time remote job or are a freelancer, you can probably relate to the struggle of establishing a healthy and balanced lifestyle for yourself. Living in close proximity of the same place that you work most of the time can create subconscious tensions that lead to bad habits if you aren’t careful. Not to mention the lack of exercise since your desk is within 10 seconds walking distance. And who has time to make a healthy meal 3 times a day when you have so much  work you need to do?</P>
          <P>I’ve struggled with countless problems like these and more. Over time I have learned and adjusted to better suite my lifestyle and personal preference. But, I believe my findings to be applicable in a general sense to patterns I’ve seen and heard from others that work in a similar environment.</P>

          <H size={2}>1. Habits Through Routine</H>
          <P>One of the most advantageous decisions I have made is creating a routine for myself. Having a routine keeps me on task, gives me a plan every day, and removes excuses from my life. This is especially true when it comes to my health.</P>
          <P>For my personal routine, I wake up at 7am, have a pre-workout snack, and head straight to the gym for ~1 hour each weekday morning. But, the trick is the night before. I make sure my gym clothes and shoes are ready to go, right next to my bed so I can’t make the excuse of not being able to find clean clothes or my gym shoes (more on gyms later).</P>
          <P>I do this for meals as well. Every Saturday afternoon I have my grocery list ready to go and I pick up the groceries I need for that week. I’m only allowed to buy what I have on the list (keeps away junk food) and the contents of that list are planned out before for meals that take the least amount of time for me to make. I don’t like doing meal prep, so this step is important for me (more on diet later as well).</P>
          <P>Another important part of routines are breaks. Intentional planning of breaks is crucial to keeping your mind healthy and avoiding burn out. Analyze how your mind feels; when you are most productive, how many hours you are comfortable working in a row, what days you work best, etc. Plan breaks and work time around these observations to create a balance of work and rest for yourself.</P>

          <H size={2}>2. Work-Life Balance</H>
          <P>While the lines between work and life can get blurred sometimes (deadlines, side project work, weekends, etc), I think an overall consciousness of how much time goes to work and how much goes to life is important. We work the majority of our lives, learning to also enjoy the life we work for is crucial to overall health.</P>
          <P>As a huge fan of video games, this is paramount for me. Video games are a big passion of mine outside of my work and being conscious of balancing time between work, leisure, and life has been an area I’ve needed to adjust and maintain for years now. All 3 parts are special to me in different ways and keeping each in check has helped me stay relaxed while also feeling productive and fulfilled in my life.</P>
          <P>I suggest to always stay aware of where your time is going in life and adjust as needed depending on priorities, needs, and even just what feels right for the time. A Friday night full of video games or a day to spend with family might be exactly what you need to feel rejuvenated for work. Just remember that you do not live to work, you work to live.</P>

          <H size={2}>3. Diet, Exercise, and Stretching</H>
          <P>Ah yes, the primary everlasting struggle for health. Funny enough, even though this is the most important factor to living a long and enjoyable life, it seems to be the most commonly overlooked component of our lives. Think about that one for a second.</P>
          <P>All jokes aside, diet and exercise are elements that I still struggle with sometimes. But, I will say I have found strategies that keep me healthy and fit for someone that spend the majority of their life at home. Through trial and error, I’ve been able to figure out ways to take most of the laziness out of putting effort into diet and exercise.</P>
          <H>Diet</H>
          <P>As I previously mentioned, I don’t like doing meal prep so I go to the grocery store every Saturday knowing what I need to buy. What I buy consists of mainly salad kits, lean meats, sweet potato, spinach, blueberries, bananas, strawberries, almond milk, granola, greek yogurt, whole wheat bread, peanut butter, protein bars, supplements, and a couple snacks. I recommend a Trader Joe’s, Kroger, or Whole Foods for your food depending on what you can afford. I recommend staying away from WalMart (or similar) for groceries (at least for meat and produce).</P>
          <P>Protein bars with supplements are my go-to pre-workout snack. Spinach, blueberries, bananas, almond milk and protein powder makes for healthy homemade protein shakes. Bananas and peanut butter on whole wheat toast with a protein shake is my favorite breakfast option (eggs make me sick usually). Salad kits and lean meats make for quick and easy salads for lunches and dinners. I sometimes also add homemade sweet potato fries to dinners if I’m craving something salty. My favorite healthy dessert is mixing greek yogurt, strawberries, and granola for a homemade protein parfait.</P>
          <H>Exercise and Stretching</H>
          <P>I recommend reading into different exercise routines from reliable sources to find specific workouts that fits your needs, lifestyle, and fitness level. For example, I have a herniated disc and inflammation in my back as well as a sensitive elbow, so I tend to stay away from heavy bench press, squats, and dead lifts. I prefer a lot of stretching and strength-based training with low weight and high reps. This also helps with my lack of running due to my inability to run for long with my lower back issues.</P>
          <P>You may not have easy access to a gym or prefer playing sports instead of being stuck in a gym. Or maybe you love running or swimming more than weight training. That’s all completely fine, the important thing is to try and get around 30 minutes of BPM rise throughout your day. Even going on a walk before or after work goes a long way in improving your overall health and energy. Even exercises at home can be quite effective, no need for a gym.</P>
          <P>One aspect of exercise that I will stress you should implement into your life however is stretching. Sitting at a desk ~8 hours per day is really not great for your body. Your muscles tense up from your head down to your feet and lead to stress on your body mentally and physically. I stretch in the morning at they gym, around lunch time, and also after work and tend to feel much better because of it. I recommend finding time in the mornings and after work as the bare minimum for how much you stretch, you’ll thank me later!</P>

          <H size={2}>4. Posture</H>
          <P>Along with Diet and Exercise, I believe posture is equally as important. Your posture can add or remove stress on your body depending on how you approach. Slouching is a common effect of our body getting comfortable and lazy, resulting in poor posture that is terrible for your neck and back. If you can, I recommend investing a bit of money into gear that will assist you in improving your posture. Here are a few solutions I personally use and recommend:</P>
          <ul className="list lh-copy black-60 f4">
            <li className="black i mb4">Roll up a large towel and place on your lower back in your chair to keep you sitting up straight.</li>
            <li className="black i mb4">A monitor or two positioned high — I use <L hrefLink="http://amzn.to/2mA2jMF">this one</L>.</li>
            <li className="black i mb4">If you can’t afford a monitor, I highly recommend this laptop alternative that I use — <L hrefLink="http://amzn.to/2mA5jZp">the Roost laptop stand</L>.</li>
          </ul>

          <H size={2}>5. Mental Health</H>
          <P>Often overlooked, mental health is a concern I’ve noticed to be common in my life and those in similar lifestyles as myself. I bring this topic up because I tend to get in my head a lot, especially with working from home. Staying home for days at a time with minimal human interaction causes me to get caught up in thoughts and patterns that leave me feeling insecure, frustrated, and uninspired.</P>
          <P>Without going into detail on my personal obstacles, I’d like to advocate being conscious of these thoughts and keeping them in check. Seek out help from friends and family, or even professional help if it does get to that point. There is nothing to be ashamed of, we all face our own demons and it’s completely normal.</P>
          <P>A practice that also may help is meditation. This practice is surprisingly helpful and will only take around 10 minutes a day to complete. I tend to use this when I need to clear my thoughts or handle frustration from my work or life. I suggest using an app like <L hrefLink="https://headspace.com">Headspace</L> and set aside time every day to use it. You can also add extra sessions to your day if needed!</P>

          <H size={2}>6. Apps</H>
          <P>Being someone who is obsessed with and works in technology, I love finding applications that I can use to make my health more tangible and purposeful. If you’re like me, I think these app recommendations will be a pretty awesome addition to your life:</P>
          <ul className="list lh-copy black-60 f4">
            <li className="black mb4"><P><L hrefLink="https://gyrosco.pe">Gyroscope</L> - An overall hub for tracking your life and lifestyle. With everything from workout, meal, water, and sleep tracking to visited place history and productivity levels, with incredible and creative data visualizations. I absolutely love this app and it’s capabilities. Although it takes some effort to upkeep all your data, a good majority of it is seamless. They even have a mobile app and a Chrome extension.</P></li>
            <li className="black mb4"><P><L hrefLink="https://www.myfitnesspal.com">My Fitness Pal</L> - This app lets me track my meals and has great accuracy when it comes to nutritional facts. You can even scan barcodes or use local restaurant menus to get a more accurate read. If you don’t have an smart watch, you can even record workouts in this app. This app feeds data to Apple/Google Health and Gyroscope.</P></li>
            <li className="black mb4"><P><L hrefLink="https://itunes.apple.com/us/app/gulps-track-your-water-intake/id979057304?mt=8">Gulps</L> - An app that tracks your water consumption. The reason I like this app is because you can set up reminders that let you immediately add glasses of water from the notification screen. This app feeds data to Apple/Google Health and Gyroscope.</P></li>
            <li className="black mb4"><P><L hrefLink="https://www.headspace.com">Headspace</L> - As I mentioned, I use this app for meditation. Headspace makes the process intuitive and minimal which I really enjoy.</P></li>
          </ul>

          <H size={2}>In Conclusion</H>
          <P>All in all, I think this is a great overview of a lot of practices I have learned lead to an overall healthier lifestyle as someone that works remotely. If there is something I missed or you think could be improved, I’d love to hear your thoughts! I put a lot of work into this article, I hope you’ll find it helpful and something you can save and share with others!</P>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default TwentySeven;
