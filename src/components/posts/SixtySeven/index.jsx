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

    const imgSixtySix = require('../../../img/roc-volume-67-cover.png');

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

          <H size={2}>Portfolio and Personal Websites</H>
          <P>Websites of creators and people I admire for their content, their design, or both.</P>
          <ul className="list lh-copy black-60 f4 mv5 pl4-l pl3">
            <li className="mb4 f4-l f5">
              <L hrefLink="http://mrmrs.cc">http://mrmrs.cc</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://julianbialowas.com">http://julianbialowas.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://nicolefenton.com">http://nicolefenton.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://www.fullstopnewparagraph.co.uk">http://www.fullstopnewparagraph.co.uk</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://nerval.ch">http://nerval.ch</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://danielmackeyart.com">http://danielmackeyart.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://helentran.com">http://helentran.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://www.samuel-medvedowsky.com">http://www.samuel-medvedowsky.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://scottdejonge.com">https://scottdejonge.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://ivomynttinen.com">https://ivomynttinen.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://www.vanschneider.com/bio">http://www.vanschneider.com/bio</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://milosz.is">http://milosz.is</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://guglieri.com">https://guglieri.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://sebastien-gabriel.com">http://sebastien-gabriel.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://kylemeyer.com">http://kylemeyer.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://byalicelee.com">http://byalicelee.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://www.yasly.com">http://www.yasly.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://www.richiestewart.com">http://www.richiestewart.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://www.baptisteringot.com">http://www.baptisteringot.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://heckhouse.com">http://heckhouse.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://www.oursroux.com">http://www.oursroux.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://jon.gold">http://jon.gold</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://andrewbaygulov.com">http://andrewbaygulov.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://bowyerjane.co.uk">http://bowyerjane.co.uk</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://kevincantrell.com">http://kevincantrell.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://will.global">http://will.global</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://yondrstudio.com">http://yondrstudio.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://andreaswikstrom.com">http://andreaswikstrom.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://www.areskub.com">http://www.areskub.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://www.galp.in">http://www.galp.in</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://danmall.me">http://danmall.me</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://alesnesetril.com">https://alesnesetril.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://www.jessicakarle.com/about">http://www.jessicakarle.com/about</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://joelcalifa.com">http://joelcalifa.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://eien.tokyo">http://eien.tokyo</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://marcocoppeto.com">http://marcocoppeto.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://www.raoul-gaillard.com">https://www.raoul-gaillard.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://slava.kim">http://slava.kim</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://nazhamid.com">http://nazhamid.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://www.jennyjohannesson.com">http://www.jennyjohannesson.com</L>
            </li>
          </ul>

          <H size={2}>Marketing Websites</H>
          <P>Company websites focused on presenting a product or service to users.</P>
          <ul className="list lh-copy black-60 f4 mv5 pl4-l pl3">
            <li className="mb4 f4-l f5">
              <L hrefLink="https://stripe.com/connect">https://stripe.com/connect</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://mention.com">https://mention.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://www.intercom.com">https://www.intercom.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://www.mapbox.com">https://www.mapbox.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://www.shrugsterapp.com">http://www.shrugsterapp.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://www.ginventory.co">http://www.ginventory.co</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://boka.com">https://boka.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://hello.is">https://hello.is</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://www.hioscar.com">https://www.hioscar.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://sketchmaster.com">http://sketchmaster.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://www.bear-writer.com">http://www.bear-writer.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://www.joinhonor.com">https://www.joinhonor.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://www.reech.com">https://www.reech.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://claralabs.com">https://claralabs.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://vsco.co/store/film/essentials">http://vsco.co/store/film/essentials</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://everchron.com">https://everchron.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://remarkable.com">https://remarkable.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://mustapp.com/en">https://mustapp.com/en</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://www.apple.com/ipad-9.7">https://www.apple.com/ipad-9.7</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://www.mollie.com">https://www.mollie.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://webflow.com">https://webflow.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://mailcube.com">http://mailcube.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://jottacloud.com">https://jottacloud.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://www.goabstract.com">https://www.goabstract.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://shubox.io">https://shubox.io</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://slack.com">https://slack.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://medium.com/membership">https://medium.com/membership</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://chatlio.com">https://chatlio.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://www.apple.com/iphone-x/#face-id">https://www.apple.com/iphone-x/#face-id</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://webflow.com/ix2">https://webflow.com/ix2</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://www.lightrail.com">https://www.lightrail.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://store.google.com">https://store.google.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://www.ff.com">https://www.ff.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://designcode.io">https://designcode.io</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://www.stride.com">https://www.stride.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://numeracy.co">https://numeracy.co</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://headwayapp.co">https://headwayapp.co</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://magnetmod.com/products/magsphere">https://magnetmod.com/products/magsphere</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://simplychocolate.dk">https://simplychocolate.dk</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://flatiron.com">https://flatiron.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://www.indiehackers.com/contribute">https://www.indiehackers.com/contribute</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://letterboxd.com">https://letterboxd.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://plaid.com">https://plaid.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://eephusleague.com">http://eephusleague.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://collectedcoffee.com">https://collectedcoffee.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://famous.co">https://famous.co</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://yeun.github.io/open-color">https://yeun.github.io/open-color</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://segment.com">https://segment.com</L>
            </li>
          </ul>

          <H size={2}>Company Websites</H>
          <P>Teams and about product sites that I enjoy.</P>
          <ul className="list lh-copy black-60 f4 mv5 pl4-l pl3">
            <li className="mb4 f4-l f5">
              <L hrefLink="http://www.wearerifle.com/work.php">http://www.wearerifle.com/work.php</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://theheadsofstate.com">http://theheadsofstate.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://rowanmade.com">http://rowanmade.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://kurppahosk.com">http://kurppahosk.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://vrasa.com">http://vrasa.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://www.olsonkundig.com">http://www.olsonkundig.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://tea.se">http://tea.se</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://www.odopod.com">http://www.odopod.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://studiouna.de">https://studiouna.de</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://braveux.com">https://braveux.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://gretelny.com">http://gretelny.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://commandogroup.no">http://commandogroup.no</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://milkshak.es">https://milkshak.es</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://huncwot.com">http://huncwot.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://thisalso.com">http://thisalso.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://wild.as">https://wild.as</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://fictivekin.com">https://fictivekin.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://bakkenbaeck.com">https://bakkenbaeck.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://zeusjones.com">http://zeusjones.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://accessventures.org">http://accessventures.org</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://www.studiofeixen.ch/about">http://www.studiofeixen.ch/about</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://collectivelyinc.com">http://collectivelyinc.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://1460.unsplash.com">https://1460.unsplash.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://oak.is">https://oak.is</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://purplerockscissors.com">https://purplerockscissors.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://blunt.af">http://blunt.af</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://studiomast.co">http://studiomast.co</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://berdanrealestate.com">http://berdanrealestate.com</L>
            </li>
          </ul>

          <H size={2}>Blog Websites</H>
          <P>Websites that really know how to tell a story and arrange text.</P>
          <ul className="list lh-copy black-60 f4 mv5 pl4-l pl3">
            <li className="mb4 f4-l f5">
              <L hrefLink="http://wayswework.io">http://wayswework.io</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://interfacelovers.com">https://interfacelovers.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://www.wethepeoplestyle.com">https://www.wethepeoplestyle.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://readcereal.com">https://readcereal.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://www.curiousclub.co">http://www.curiousclub.co</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://thegreatdiscontent.com">http://thegreatdiscontent.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://www.technologyreview.com">https://www.technologyreview.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://99u.com">http://99u.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://kinfolk.com">https://kinfolk.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://bitsofco.de">https://bitsofco.de</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://www.mcsweeneys.net">https://www.mcsweeneys.net</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://theoutline.com">https://theoutline.com</L>
            </li>
          </ul>

          <H size={2}>Shop Websites</H>
          <P>Some of my favorite ecommerce and similar sites.</P>
          <ul className="list lh-copy black-60 f4 mv5 pl4-l pl3">
            <li className="mb4 f4-l f5">
              <L hrefLink="https://milknsugar.com">https://milknsugar.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://www.odetothings.com">https://www.odetothings.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://store.leibal.com">https://store.leibal.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://www.hardgraft.com">https://www.hardgraft.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://www.everlane.com">https://www.everlane.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://rodengray.com/collections/herschel-supply-co">https://rodengray.com/collections/herschel-supply-co</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://www.stampd.com">https://www.stampd.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://www.dotgrid.co">https://www.dotgrid.co</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://www.ochsundjunior.swiss">https://www.ochsundjunior.swiss</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://store.moma.org">https://store.moma.org</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://topodesigns.com">https://topodesigns.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://www.suprgood.com">https://www.suprgood.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://goodfuckingdesignadvice.com/products">https://goodfuckingdesignadvice.com/products</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://www.presentandcorrect.com">https://www.presentandcorrect.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="http://eephusleague.com">http://eephusleague.com</L>
            </li>
            <li className="mb4 f4-l f5">
              <L hrefLink="https://www.neuegoods.com/home">https://www.neuegoods.com/home</L>
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
