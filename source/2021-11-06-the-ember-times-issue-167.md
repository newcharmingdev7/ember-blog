---
title: The Ember Times - Issue No. 167
author: Ava Wroten, Chris Ng, the crowd
tags: Recent Posts, Newsletter, A11y, Accessibility, Ember.js Times, Ember Times, 2020
alias : "blog/2020/11/06-the-ember-times-issue-167.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹
New Release and APIs for ember-a11y-testing 🎉,
New Octane ready release of the a11y focused ember-select-light 🎉,
<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>

READMORE

---

## [Release 4.0.0 of ember-a11y-testing 🎉](https://github.com/ember-a11y/ember-a11y-testing/releases/tag/v4.0.0)

[Steve Calvert (@scalvert)](https://github.com/scalvert) released 4.0.0 of [ember-a11y-testing](https://github.com/ember-a11y/ember-a11y-testing) which included changes to the API to make it hands off in terms of running accessibility audits. The `ember-a11y-testing` library is a wrapper around [Deque Labs'](https://github.com/dequelabs) [axe-core](https://github.com/dequelabs/axe-core) accessibility testing engine. It integrates into your testing environment using either a one-time setup, or in individual tests using an `a11yAudit()` test helper.

With the new 4.0.0 release, you can do audit of your code using the regular test helper APIs by importing the [`setupGlobalA11yHooks` function](https://github.com/ember-a11y/ember-a11y-testing#setupglobala11yhooks-usage) and invoking it in `tests/test-helper.js`. The `setupGlobalA11yHooks` function lets you write your own strategy on when to invoke the audit using the `shouldAudit` argument so you can run it all the time, for all the configured helpers, every n tests, for specific modules or test names, by route, etc.

Read more about the new changes to [ember-a11y-testing on GitHub](https://github.com/ember-a11y/ember-a11y-testing#setupglobala11yhooks-usage)!

---

## [Release 2.0.x of ember-select-light 🎉](https://github.com/ember-a11y/ember-select-light/releases/tag/v2.0.0)

[Ava Wroten (@hergaiety)](https://www.wroten.me/) released 2.0.0 of [ember-select-light](https://github.com/ember-a11y/ember-select-light/). You will find that the addon has moved to the [ember-a11y org](https://github.com/ember-a11y) (join us on [discord in #dev-ember-a11y](https://discord.gg/xBzFBMYv)) and is **Octane ready**.

**ember-select-light is a simple and accessible `<select>` dropdown component** ✨. With a simple API you can pass in a flat or nested array of options, or yield out to your template code that handles options. The component pairs nicely with the latest [ember-component-patterns for Select Elements](https://emberjs-1.gitbook.io/ember-component-patterns/form-components/select-element).

The 2.0.0 release drops support for older versions of Node and Ember. At minimum, Node v10 LTS and Ember.js v3.16 LTS are suggested. It also introduces some breaking syntax changes (see the [upgrade guide](https://github.com/ember-a11y/ember-select-light/blob/main/UPGRADE.md)). Lastly, documentation has been updated.

Read more about the new changes to [ember-select-light on GitHub](https://github.com/ember-a11y/ember-select-light/releases/tag/v2.0.0)!

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

Ava Wroten, Chris Ng, the crowd and the Learning Team
