---
title: The Ember Times - Issue No. 166
author: Chris Ng, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2021/10/23-the-ember-times-issue-166.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
New RFC to Deprecate transition methods of Controller and Route ✍️,
Read the blog post on React component patterns in Ember ⚛️,
READMORE

---

## [RFC: Deprecate transition methods of Controller and Route ✍️](https://github.com/emberjs/rfcs/pull/674)

[Jeldrik Hanschke (@jelhan)](https://github.com/jelhan) proposed a new RFC to [Deprecate transition methods of Controller and Route](https://github.com/emberjs/rfcs/pull/674) in order to reduce public API exposed related to routing.

The RFC aims to deprecate the methods `transitionTo` and `replaceWith` of the Route object and the methods `transitionToRoute` and `replaceRoute` of the Controller object. The existing methods `transitionTo` and `replaceWith` of the RouterService object should be used instead.

The RFC proposes that the existing methods are today not documented properly so there are likely timing differences between the different routing calls even if from the outside they function the same. Supporting different ways to do the same increases complexity without providing much value and limiting options will make learning the framework easier for new developers.

Read and comment on the [full RFC on GitHub](https://github.com/emberjs/rfcs/pull/674)!

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Blog: React Component Patterns in Ember.js ⚛️](https://www.effective-ember.com/blog/react-component-patterns/)

[Michael Klein (@LevelbossMike)](https://github.com/LevelbossMike) wrote a blog post comparing modern Ember with React. While not expert on React, the blog goes through how [React tackles challenges](https://dev.to/alexi_be3/react-component-patterns-49ho) when implementing SPAs. The blog goes through 3 different component patterns: Compound Component Pattern, Flexible Compound Component Pattern, and Provider Pattern - to see how each one is implemented in React and Ember.

The blog argues that the [Octane Edition](https://emberjs.com/editions/octane/) of Ember provides conventions that help you fall into the pit of success instead of only giving you low-level primitives to solve common challenges in a multitude of ways with different tradeoffs that only seem to be obvious to people that are experts in React.

Read the full blog post where Michael compares each pattern with code samples in the [Effective Ember blog](https://www.effective-ember.com/blog/react-component-patterns/)!

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank our siblings for their contributions to Ember and related repositories! 💖</p>

---

## [Connect with us 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>Wondering about something related to Ember, Ember Data, Glimmer, or addons in the Ember ecosystem, but don't know where to ask? Readers’ Questions are just for you!</p>

  <p><strong>Submit your own</strong> short and sweet <strong>question</strong> under <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>

  <p>Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at <a href="https://discordapp.com/channels/480462759797063690/485450546887786506">#support-ember-times</a> on the <a href="https://discordapp.com/invite/zT3asNS">Ember Community Discord</a> or ping us <a href="https://twitter.com/embertimes">@embertimes</a> on Twitter.</p>

  <p>Keep on top of what's been going on in Emberland this week by subscribing to our <a href="https://the-emberjs-times.ongoodbits.com/">e-mail newsletter</a>! You can also find our posts on the <a href="https://emberjs.com/blog/tags/newsletter.html">Ember blog</a>.</p>
</div>

---

That's another wrap! ✨

Be kind,

Chris Ng, the crowd and the Learning Team
