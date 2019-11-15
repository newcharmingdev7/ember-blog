---
title: The Ember Times - Issue No. 124
author: Chris Ng, Isaac Lee, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/11/15-the-ember-times-issue-124.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
400 Releases on the Ember.js Repo 🎉,
share your thoughts for RFCs #549 and #554 💬,
learn how to use telemetry helpers to power up your codemods 📡,
release of Octane Super Rentals Tutorial Part 2 🚀,
READMORE

---

## 400 Releases on the Ember.js Repo 🎉

The [ember.js repo](https://github.com/emberjs/ember.js) hit 400 releases on GitHub this week! We’ve had over [770 contributors](https://github.com/emberjs/ember.js/graphs/contributors) between May 2011 to November 2019. A big thank you ❤️ to the numerous efforts of all all these community members!

---

## [Section Title in Title Case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [RFC #549: Ember Dev for Other Platforms 💬](https://github.com/emberjs/rfcs/pull/549)

[Adam Baker (@bakerac4)](https://github.com/bakerac4) has proposed the need to better advertise Ember as a cross-platform solution: Use 1 framework to create web, mobile, *and* desktop apps! The possibility of marketing Ember as cross-platform exists already, thanks to projects like [Corber](http://corber.io/pages/frameworks/ember) and [Glimmer Native](https://github.com/bakerac4/glimmer-native).

How can we market Ember as cross-platform and support developing for other platforms? Be sure to [share your ideas with everyone](https://github.com/emberjs/rfcs/pull/549) today!

---

## [RFC #554: Deprecate `getWithDefault` 💬](https://github.com/emberjs/rfcs/pull/554)

[Chris Ng (@chrisng)](https://github.com/chrisrng) has proposed deprecating support for `getWithDefault`. This method, which has [existed since Ember 1.0](https://api.emberjs.com/ember/1.0/classes/Ember.Object/methods/getWithDefault?anchor=getWithDefault), is intended to help an Ember object return a default value.

The problem with `getWithDefault` lies in its behavior. It returns the default value *only* when the retrieved value of the property is `undefined`. Other falsey values, such as `null` or `''`, don't result in the default value. This behavior may or may not be what you intended.

To help you write code explicitly, TC39 has come up with the [nullish coalescing operator](https://github.com/tc39/proposal-nullish-coalescing), `??`, now in Stage 3 proposal. RFC 554 explains that it'd be better to rely on the native implementation.

What are your thoughts on deprecating `getWithDefault`? We encourage you to [read the RFC and participate](https://github.com/emberjs/rfcs/pull/554) today!

---

## [Creating Runtime Assisted Codemods Using Telemetry Helpers 📡](http://hangaroundtheweb.com/2019/10/creating-runtime-assisted-codemods-using-telemetry-helpers/)

Thanks to [Rajasegar Chandran (@rajasegar)](https://github.com/rajasegar) and [Ryan Mark (@tylerturdenpants)](https://github.com/tylerturdenpants), the [ember-codemods-telemetry-helpers](https://github.com/ember-codemods/ember-codemods-telemetry-helpers) addon features a [detailed readme](https://github.com/ember-codemods/ember-codemods-telemetry-helpers#ember-codemods-telemetry-helpers) and [companion blog post](http://hangaroundtheweb.com/2019/10/creating-runtime-assisted-codemods-using-telemetry-helpers/). 💞

Traditionally, Ember codemods have relied on **static code analysis** to help you (a codemod author) convert files from one version to the next. In contrast, telemetry-powered codemods can **run the app** to help you gather data on components, services, routes, controllers, etc.

To learn more about telemetry helpers, we encourage you to visit [Rajasegar's blog](http://hangaroundtheweb.com/2019/10/creating-runtime-assisted-codemods-using-telemetry-helpers/). You can also check out [ember-native-class-codemod](https://github.com/ember-codemods/ember-native-class-codemod) and [ember-no-implicit-this-codemod](https://github.com/ember-codemods/ember-no-implicit-this-codemod) to learn how codemods use telemetry helpers today!

---

## [Section Title in Title Case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Octane Super Rentals Tutorial Part 2🚀](https://octane-guides-preview.emberjs.com/release/tutorial/10-part-2/)

[Godfrey Chan @chancancode](https://github.com/chancancode) and [Vaidehi Joshi @vaidehijoshi](https://github.com/vaidehijoshi) further expanded the Super Rentals Tutorial for Ember Octane by releasing part 2 of the tutorial!

This **automatically generated** tutorial now [supports decorators](https://github.com/cibernox/ember-cli-yuidoc/pull/52) thanks to [Chris Garrett](https://github.com/pzuraq) who had a fix to replace all `@` symbols within code blocks with a placeholder, processes them, and then switches them back after processing.

If you are looking to contribute check out the [super-rentals-tutorial repo on GitHub](https://github.com/ember-learn/super-rentals-tutorial)!

---

## [Section Title in Title Case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section Title in Title Case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Section Title in Title Case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Contributors' Corner 👏](https://guides.emberjs.com/release/contributing/repositories/)

<p>This week we'd like to thank our siblings for their contributions to Ember and related repositories! 💖</p>

---

## [Got a Question? Ask Readers' Questions! 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

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

Chris Ng, Isaac Lee, the crowd and the Learning Team
