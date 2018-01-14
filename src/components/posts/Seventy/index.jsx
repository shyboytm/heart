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

class SixtyNine extends Component {
  render() {

    const imgSixtyNine = require('../../../img/roc-volume-69-cover.png');

    const iPhone7Plus  = require('../../../img/postImgs/iphone7-in-hand.jpg');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=Here%20is%20My%20Illustration%20Process%20by%20%40fromcortes%20http%3A//blog.cortes.us/here-is-my-illustration-process"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/here-is-my-illustration-process"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/here-is-my-illustration-process" />
        <Content id="69">

          <Image imgSrc={imgSixtyNine} imgAlt="How I Take and Edit Photos on My Phone" />
          <div className="mb5">
            <H size={1}>How I Take and Edit Photos on My Phone</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 70</span>
            <span className="black-50 pr3">Published Jan 19 2017</span>
          </div>

          <P><DropCap>P</DropCap>hotography has been one of my favorite hobbies for quite some time. I remember when Instagram first came out and I’d obsess over the filters and ability to share photos instantly with thousands of people. Although it has never been more than a hobby for me, I’ve learned more and more about the art of taking photos over the years.</P>
          <P>Being that photography is just a hobby for me, I’ve never really considered putting much monetary investment into the hobby. While I do have a nice pocket-sized <L hrefLink="http://amzn.to/2xI1pof">Sony α5100 Camera</L> I use from time to time, it’s nothing compared to some of the cameras professional photographers have nowadays. Plus, as technology in our phones gets better and better, using my phone has been a more convenient option when an unexpected photo opportunity comes up.</P>
          <P>After a few years of casually uploading these photos to places like Unsplash and Instagram, I’ve found questions about my photo process and requests come up constantly. I honestly don’t think my photos are anything that great, but I do think there are advantages to being able to improve your process and really step up your photo game with some small improvements. Today I’d love to casually take you along the process I take when taking photos on my iPhone 7 Plus. I’ll be using actual examples of photos I took this past week and explain everything from what apps I use, how I approach composition, how I edit and manage photos on my phone, and maybe even choosing the right photo for the right situation. I hope you will find this helpful and give you places to improve in your own mobile photography.</P>

          <LineBreak />

          <H size={2}>Hardware and Software</H>
          <Image
            imgSrc={iPhone7Plus}
            imgAlt="Black iPhone 7 Plus held in hand with couch in background"
            caption="Photo by Dennis Cortés on Unsplash" />
          <H size={3}><L hrefLink="https://www.apple.com/shop/buy-iphone/iphone-7">iPhone 7 Plus Black 32GB</L> - Starts at $699</H>
          <P>Purchased this baby when it first came out in 2016, I couldn’t resist the Matte Black. The dual camera setup with Portrait Mode has been a real lifesaver in helping my quality of photos. Not as accurate as a DSLR of course, but with the right lighting it’s a game changer.</P>


          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default SixtyNine;
