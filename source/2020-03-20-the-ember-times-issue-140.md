---
title: The Ember Times - Issue No. 140
author: Chris Ng, Jessica Jordan, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2020
alias : "blog/2020/03/20-the-ember-times-issue-140.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
Read about testing best practices on the Ember Testing Guide 📗,
comment on the co-located test RFC ⛓,
READMORE

---

## [Ember Testing Guide v1 📗](https://twitter.com/PoslinskiNet/status/1239503392386568192)

[Dawid Pośliński (@PoslinskiNet)](https://github.com/PoslinskiNet/) wrote about testing best practices and which addons to use in the newly released [Ember Testing Guide v1](https://selleo.com/ebook/ember). The testing guide goes through why we need tests to begin with. What benefits does testing give us and what gaps are still present.

Following that, the testing guide discusses best practices in how we architect our testing code. It also goes through how to use the right kind of test. Should the test be unit, integration, acceptance, visual regression, or even manual? These principles are the building blocks to constructing effective tests.

Finally the guide goes through all the best addons available today and how to use them in testing your application with examples from [qunit-dom](https://github.com/simplabs/qunit-dom), [ember-test-selectors](https://github.com/simplabs/ember-test-selectors), [ember-cli-timecop](https://github.com/matteodepalo/ember-cli-timecop), [ember-a11y-testing](https://github.com/ember-a11y/ember-a11y-testing), [ember-percy](https://github.com/percy/ember-percy) and many more!

Check it out as a [free eBook](https://selleo.com/ebook/ember), on [GitHub](https://github.com/PoslinskiNet/ember-testing-guide), or as a [PDF](https://selleo.com/uploads/ebooks/ember/ember_testing_guide.pdf)!

---

## [Coupling concerns with co-located tests ⛓](https://github.com/emberjs/rfcs/pull/599)

The conventional file layout of Ember apps has undergone a few changes throughout the years.
Besides the [classic file layout](https://cli.emberjs.com/release/advanced-use/project-layouts/#classiclayout), users have also been able to opt-in to the [pods layout](https://cli.emberjs.com/release/advanced-use/project-layouts/#podslayout) for a while. And while pre-v3.13 Ember users were modifying component templates and `.js` files in two different directories, they recently got the chance to work on [component files side-by-side](https://blog.emberjs.com/2019/09/25/ember-3-13-released.html) after the implementation of the [component template co-location RFC](https://emberjs.github.io/rfcs/0481-component-templates-co-location.html).

Another, [recent RFC](https://github.com/emberjs/rfcs/pull/599) wants to take the principle of co-location even a step further: it proposes that **test files**, e.g. those for rendering tests of a component, should be co-located right next to the respective component class and template files. Beyond that, the proposal suggests a similar co-location pattern for unit tests of related routes and controllers, too - with the [motivation to improve the discoverability of tests](https://github.com/NullVoxPopuli/rfcs/blob/colocated-tests/text/0000-colocated-tests.md#motivation) for application developers.

Ready to learn more about how this could be implemented? Be sure to read the [full proposal](https://github.com/NullVoxPopuli/rfcs/blob/colocated-tests/text/0000-colocated-tests.md) and to leave your thoughts or questions in the [comments below](https://github.com/emberjs/rfcs/pull/599)!

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section title in sentence case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>
<please include link to external article/repo/etc in paragraph / body text, not just header title above>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Contributors' corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/kratiahuja" target="gh-user">@kratiahuja</a>, <a href="https://github.com/bobisjan" target="gh-user">@bobisjan</a>, <a href="https://github.com/nummi" target="gh-user">@nummi</a>, <a href="https://github.com/rwwagner90" target="gh-user">@rwwagner90</a>, <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/Gaurav0" target="gh-user">@Gaurav0</a>, <a href="https://github.com/Aswathprabhu" target="gh-user">@Aswathprabhu</a>, <a href="https://github.com/skaterdav85" target="gh-user">@skaterdav85</a>, <a href="https://github.com/jenweber" target="gh-user">@jenweber</a> and <a href="https://github.com/laurmurclar" target="gh-user">@laurmurclar</a>  for their contributions to Ember and related repositories! 💖</p>

---

## [Got a question? Ask readers' questions! 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>Wondering about something related to Ember, Ember Data, Glimmer, or addons in the Ember ecosystem, but don't know where to ask? Readers’ Questions are just for you!</p>

  <p><strong>Submit your own</strong> short and sweet <strong>question</strong> under <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>
</div>

---

## [#embertimes 📰](https://blog.emberjs.com/tags/newsletter.html)

Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at [#support-ember-times](https://discordapp.com/channels/480462759797063690/485450546887786506) on the [Ember Community Discord](https://discordapp.com/invite/zT3asNS) or ping us [@embertimes](https://twitter.com/embertimes) on Twitter.

Keep on top of what's been going on in Emberland this week by subscribing to our [e-mail newsletter](https://the-emberjs-times.ongoodbits.com/)! You can also find our posts on the [Ember blog](https://emberjs.com/blog/tags/newsletter.html).

---

That's another wrap! ✨

Be kind,

Chris Ng, Jessica Jordan, the crowd and the Learning Team
