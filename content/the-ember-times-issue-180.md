---
title: The Ember Times - Issue No. 180
authors:
  - tim-foster
  - chris-ng
  - amy-lam
  - anne-greeth-schot-van-herwijnen
date: 2021-05-21T00:00:00.000Z
tags:
  - newsletter
  - '2021'
---

👋 Emberistas! 🐹
  
Ember's 10 year anniversary, Prettier for Handlebars support, Embroider in 3.5 weeks, GAAD pledge, quickstart to authentication, built with Ember: Fleetbase, and new and shiny add-ons ✨

---  

## Happy 10 year anniversary, Ember.js! 🎉

<div>
  <img alt="Ember 10 year anniversary cake" title="Jared Galanis - Contributor to Ember" src="/images/blog/emberjstimes/ember-10-year-anniversary-cake.jpeg" />
</div>

Many thanks to [Natasha Fel](https://twitter.com/NataliFel/status/1393240918258499589) and [Andrey Fel (@andreyfel)](https://github.com/andreyfel) for sharing their photos from [Ember Nizhny Novgorod's Meetup](https://emberjs-nn.timepad.ru/event/1618665/), which featured a celebratory Nizhny Novgorod Tomster cake for Ember's big anniversary! Check out more photos from the meetup [here](https://vk.com/album-183353390_279540779).

---

## [Prettier for Handlebars support 🙌](https://prettier.io/blog/2021/05/09/2.3.0.html#ember--handlebars)

Prettier can now officially format HTML templates with Handlebars (HBS) in the newly released [version 2.3.0](https://prettier.io/blog/2021/05/09/2.3.0.html#ember--handlebars). Thank you to [Cyrille David (@dcyriller)](https://github.com/dcyriller) for pushing this initiative, which started in 2017, through the finish line.

Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and reprinting it with its own rules that take the maximum line length into account, wrapping code when necessary. This removes all bikeshedding on what rules we should have or shouldn’t have and instead provides one standard for everyone to use by default.

In order to keep your project aligned with Prettier’s formatting we can use the Ember Template Lint plugin: [ember-template-lint-plugin-prettier](https://github.com/ember-template-lint/ember-template-lint-plugin-prettier). This plugin defines a _single rule_ that rule will compare your code with Prettier's output.

So try it out today by using the **glimmer parser** for Prettier!  
  
---

## [Embroider: from zero to route splitting in 3.5 weeks 📝](https://dev.to/bendemboski/embroider-from-zero-to-route-splitting-in-3-5-weeks-5abo)

If you have been part of the Ember community for a while now and have read [The Ember Times' last issue](https://blog.emberjs.com/the-ember-times-issue-179#toc_readers-question-what%E2%80%99s-the-current-status-of-the-embroider-project-%F0%9F%A7%B5), you have probably heard about [Embroider](https://github.com/embroider-build/embroider). This project is currently at version 0.41.0 and usable in Ember projects.

[Ben Demboski (@bendemboski)](https://github.com/bendemboski) wrote this [blog](https://dev.to/bendemboski/embroider-from-zero-to-route-splitting-in-3-5-weeks-5abo) about how he implemented Embroider in a commercial, [`ember-electron`](https://ember-electron.js.org) app.

Ben's [blog post](https://dev.to/bendemboski/embroider-from-zero-to-route-splitting-in-3-5-weeks-5abo) explains in detail the app and the process used to make the app use Embroider. All the hard things he ran into, such as ES6 module compliance and third-party add-ons. Luckily, after 3.5 weeks, Ben achieved **tree-shaking** and **code splitting across routes**. So if you want to start taking advantage of what Embroider has to offer, this post is a great place to start.

If you read the blog, start with this project yourself and look for a place to get more help, check out the `#dev-embroider` channel on [Ember.JS Discord](https://discord.gg/emberjs).

---

## [Ember takes the GAAD Pledge 😍](https://blog.emberjs.com/gaad-2021)

[Melanie Sumner (@MelSumner)](https://github.com/MelSumner) authored a blog post in conjuction with this week's [Global Accessibility Awareness Day](https://globalaccessibilityawarenessday.org/) (GAAD) to announce that Ember has taken the GAAD pledge **to make accessibility a core value of our framework**.

Be sure to read the [post](https://blog.emberjs.com/gaad-2021) to learn more about what Ember has done so far in its efforts for “accessibility by default” , what accessibilty-related work is in the pipeline, and how you can get involved if you're interesting in contributing to Ember a11y efforts!

---

## [Ember Simple Auth video 📽](https://www.youtube.com/watch?v=bSWN4_EbTPI)

Are you looking for a friendly, step by step guide to adding authentication to your Ember app? Look no further than the Ember Simple Auth [Quickstart video](https://www.youtube.com/watch?v=bSWN4_EbTPI) published by [Simplabs](https://simplabs.com/). This video provides helpful introduction to this popular authentication/authorization [Ember addon](https://ember-simple-auth.com/). [Marco Otte-Witte (@marcoow)](https://github.com/marcoow) explains this tricky part of app development using the latest Ember Octane syntax.

<!--alex enable simple-->

---
  
## [Built with Ember: Fleetbase 🚀](https://fleetbase.io/)

[Fleetbase](https://fleetbase.io/) is a new logistics platform built with Ember by co-founders [Ronald A. Richardson (@roncodes)](https://github.com/roncodes) and [Shiv Thakker (@shivthakker)](https://github.com/shivthakker). Fleetbase is an API-first logistics platform for developers and businesses. Customers can design, build, customize and control their logistics operations and experience using their APIs and console. Based in Singapore, Fleetbase has a mission to **tech enable** traditional businesses.

Check out Fleetbase on [ProductHunt](https://www.producthunt.com/posts/fleetbase)!

---

## New shiny addons ✨
  
The Ember addon ecosystem is always expanding and we love to keep you up to date with all of them. So here is a summarized list of the latest addons made by the community for the community.

* [ember-bem-helpers](https://github.com/retailnext/ember-bem-helpers): BEM helpers for Ember.js applications
* [ember-breadcrumb-trail](https://github.com/Windvis/ember-breadcrumb-trail): Minimalistic but very flexible breadcrumb management solution for Ember applications.
* [ember-url-hash-polyfill](https://github.com/CrowdStrike/ember-url-hash-polyfill): Support for in/inter page linking / scrolling with hashes in EmberJS
* [ember-cli-custom-properties](https://github.com/onehilltech/ember-cli-custom-properties): Adds support for CSS custom properties (variables) to components
* [ember-statechart-component](https://github.com/NullVoxPopuli/ember-statechart-component): Statecharts as components. No classes. Pure declarative state transitions.
* [ember-command](https://github.com/gossi/ember-command): An implementation of the command design pattern for #emberjs

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/pzuraq" rel="noopener noreferrer" target="_blank">Chris Garrett (@pzuraq)</a>, <a href="https://github.com/bmish" rel="noopener noreferrer" target="_blank">Bryan Mishkin (@bmish)</a>, <a href="https://github.com/lin-ll" rel="noopener noreferrer" target="_blank">Lucy Lin (@lin-ll)</a>, <a href="https://github.com/rwjblue" rel="noopener noreferrer" target="_blank">Robert Jackson (@rwjblue)</a>, <a href="https://github.com/bgantzler" rel="noopener noreferrer" target="_blank">@bgantzler</a>, <a href="https://github.com/amk221" rel="noopener noreferrer" target="_blank">Andrew Kirwin (@amk221)</a>, <a href="https://github.com/fozy81" rel="noopener noreferrer" target="_blank">Tim (@fozy81)</a>, <a href="https://github.com/runnerboy22" rel="noopener noreferrer" target="_blank">Tyler (@runnerboy22)</a>, <a href="https://github.com/thomascchen" rel="noopener noreferrer" target="_blank">Tom Chen (@thomascchen)</a>, <a href="https://github.com/prasannavijayan" rel="noopener noreferrer" target="_blank">_pvy (@prasannavijayan)</a>, <a href="https://github.com/spham92" rel="noopener noreferrer" target="_blank">Steven Pham (@spham92)</a>, <a href="https://github.com/mansona" rel="noopener noreferrer" target="_blank">Chris Manson (@mansona)</a>, <a href="https://github.com/locks" rel="noopener noreferrer" target="_blank">Ricardo Mendes (@locks)</a>, <a href="https://github.com/chrisrng" rel="noopener noreferrer" target="_blank">Chris Ng (@chrisrng)</a>, <a href="https://github.com/jenweber" rel="noopener noreferrer" target="_blank">Jen Weber (@jenweber)</a>, <a href="https://github.com/dmuneras" rel="noopener noreferrer" target="_blank">Daniel Múnera Sánchez (@dmuneras)</a>, <a href="https://github.com/hannakim91" rel="noopener noreferrer" target="_blank">Hanna (she/her) (@hannakim91)</a>, <a href="https://github.com/snewcomer" rel="noopener noreferrer" target="_blank">Scott Newcomer (@snewcomer)</a>, <a href="https://github.com/amyrlam" rel="noopener noreferrer" target="_blank">Amy Lam (@amyrlam)</a>, <a href="https://github.com/rwwagner90" rel="noopener noreferrer" target="_blank">Robert Wagner (@rwwagner90)</a>, <a href="https://github.com/MelSumner" rel="noopener noreferrer" target="_blank">Melanie Sumner (@MelSumner)</a>, <a href="https://github.com/nlfurniss" rel="noopener noreferrer" target="_blank">Nathaniel Furniss (@nlfurniss)</a>, <a href="https://github.com/chiragpat" rel="noopener noreferrer" target="_blank">Chirag Patel (@chiragpat)</a>, <a href="https://github.com/lukemelia" rel="noopener noreferrer" target="_blank">Luke Melia (@lukemelia)</a>, <a href="https://github.com/acorncom" rel="noopener noreferrer" target="_blank">David Baker (@acorncom)</a>, <a href="https://github.com/chancancode" rel="noopener noreferrer" target="_blank">Godfrey Chan (@chancancode)</a>, <a href="https://github.com/ombr" rel="noopener noreferrer" target="_blank">Luc Boissaye (@ombr)</a>, <a href="https://github.com/brendenpalmer" rel="noopener noreferrer" target="_blank">Brenden Palmer (@brendenpalmer)</a>, <a href="https://github.com/ijlee2" rel="noopener noreferrer" target="_blank">Isaac Lee (@ijlee2)</a>, <a href="https://github.com/runspired" rel="noopener noreferrer" target="_blank">Chris Thoburn (@runspired)</a>, <a href="https://github.com/sly7-7" rel="noopener noreferrer" target="_blank">Sylvain MINA (@sly7-7)</a>, <a href="https://github.com/MinThaMie" rel="noopener noreferrer" target="_blank">Anne-Greeth van Herwijnen (@MinThaMie)</a>, <a href="https://github.com/igorT" rel="noopener noreferrer" target="_blank">Igor Terzic (@igorT)</a>, <a href="https://github.com/scalvert" rel="noopener noreferrer" target="_blank">Steve Calvert (@scalvert)</a>, <a href="https://github.com/danielpunkass" rel="noopener noreferrer" target="_blank">Daniel Jalkut (@danielpunkass)</a>, <a href="https://github.com/wise-introvert" rel="noopener noreferrer" target="_blank">Fardeen Panjwani (@wise-introvert)</a>, and <a href="https://github.com/anehx" rel="noopener noreferrer" target="_blank">Jonas Metzener (@anehx)</a> for their contributions to Ember and related repositories! 💖</p>

---

## [Connect with us 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>Wondering about something related to Ember, Ember Data, Glimmer, or addons in the Ember ecosystem, but don't know where to ask? Readers’ Questions are just for you!</p>

  <p><strong>Submit your own</strong> short and sweet <strong>question</strong> under <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>

  <p>Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at <a href="https://discordapp.com/channels/480462759797063690/485450546887786506">#support-ember-times</a> on the <a href="https://discord.gg/emberjs">Ember Community Discord</a> or ping us <a href="https://twitter.com/embertimes">@embertimes</a> on Twitter.</p>

  <p>Keep on top of what's been going on in Emberland this week by subscribing to our <a href="https://embertimes.substack.com/">e-mail newsletter</a>! You can also find our posts on the <a href="https://blog.emberjs.com/tag/newsletter">Ember blog</a>. See you in two weeks!</p>
</div>

---

That's another wrap! ✨

Be kind,

Tim Foster, Chris Ng, Anne-Greeth van Herwijnen, Amy Lam, and the Learning Team
