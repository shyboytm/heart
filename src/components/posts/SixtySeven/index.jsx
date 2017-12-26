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

class SixtySix extends Component {
  render() {

    const imgSixtySix = require('../../../img/roc-volume-66-cover.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=A%20Global%20Rule%20for%20Your%20Work%20by%20%40fromcortes%20http%3A//blog.cortes.us/a-global-rule-for-your-work"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=http%3A//blog.cortes.us/a-global-rule-for-your-work"
          googleLink="https://plus.google.com/share?url=http%3A//blog.cortes.us/a-global-rule-for-your-work" />
        <Content id="67">

          <Image imgSrc={imgSixtySix} imgAlt="Here’s a Giant List of Design Inspiration for You to Use" />
          <div className="mb5">
            <H size={1}>Here’s a Giant List of Design Inspiration for You to Use</H>
            <span className="f7 pv1 ph2 br-pill bg-purple white b mr3">Volume 67</span>
            <span className="black-50 pr3">Published Dec 27 2017</span>
          </div>

          <P><DropCap>I</DropCap>nspiration is one of the factors constantly driving to push people forward with work. Ever since I started out in the design world I’ve loved being at the forefront of new technology, apps, and websites available to use and view. A good majority of being able to constantly put out new work comes from finding inspiration online to drive that design thinking forward.</P>
          <P>So, today I’d like to share a glimpse of most of the places I have for inspiration at this moment. My personal list is of course always growing but I think this will become a great resource for you to reference when starting a new project or stuck on a current one. Let’s get into this nicely organized list. Enjoy!</P>

          <H size={2}>Collection Websites</H>
          <P>Websites that collect and organize sources for inspiration</P>
          <ul className="list lh-copy black-60 f4 mv5 pl4-l pl3">
            <li className="mb4 f4-l f5">
              <L hrefLink="https://sitesee.co">https://sitesee.co</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://httpster.net">https://httpster.net</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://www.siteinspire.com">https://www.siteinspire.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://ueno.design">https://ueno.design</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://fromcortes.tumblr.com">http://fromcortes.tumblr.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://bpando.org">http://bpando.org</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://www.searchsystem.co">http://www.searchsystem.co</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://www.pinterest.com/fromcortes">https://www.pinterest.com/fromcortes</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://ello.co/discover">https://ello.co/discover</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://www.casestudy.club">https://www.casestudy.club</L>
            </li>
          </ul>

          <PostEnd />

        </Content>
        <Footer />
      </div>
    );
  }
}

export default SixtySix;
