---
title: The Ember Times - Issue No. 129
author: Chris Ng, Amy Lam, Isaac Lee, the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2019
alias : "blog/2019/12/20-the-ember-times-issue-129.html"
responsive: true
---

<SAYING-HELLO-IN-YOUR-FAVORITE-LANGUAGE> Emberistas! 🐹

<SOME-INTRO-HERE-TO-KEEP-THEM-SUBSCRIBERS-READING>
...
new ember-autofocus-modifier 💡,
3 new RFCs for template helpers 3️⃣,
ember-apollo-client v2 released 🎉,
... 

READMORE

---

## [Section Title in Title Case 🐹](#section-url)

<change section title emoji>
<consider adding some bold to your paragraph>

<add your name to author list, top and bottom>
<add blurb and emoji to "SOME-INTRO-HERE">

---

## [Octane is Here 🎉](https://blog.emberjs.com/2019/12/20/octane-is-here.html)

Ember [3.15](https://blog.emberjs.com/2019/12/20/ember-3-15-released.html) was released this week. In addition to the usual new features, improvements and bug fixes, this release also marks the official release of the Octane edition! Read more about what's new and what's changed in Octane in this summary by [Yehuda Katz (@wycats)](https://github.com/wycats).

---

## [New ember-autofocus-modifier 💡](https://medium.com/qonto-engineering/autofocus-modifier-improving-our-component-apis-fd589b98f4e)

While building an autofocus feature for their components, Qonto engineers were also able to improve their APIs. [Cyrille David (@dcyriller)](https://github.com/dcyriller) and team wanted to add autofocus to several components across two apps. For example, both their one-time-password input and their email input component needed autofocus. Since mixins are no longer recommended in the Ember ecosystem, Cyrille went with modifiers. [And they blogged about their experience here!](https://medium.com/qonto-engineering/autofocus-modifier-improving-our-component-apis-fd589b98f4e)

Modifiers are a new feature in the upcoming Ember Octane edition for **sharing code between components**, similar to directives in Vue or Angular. We revisited [Chris Garrett (@pzuraq)](https://github.com/pzuraq)'s blog [Coming Soon in Ember Octane - Part 4: Modifiers](https://blog.emberjs.com/2019/03/06/coming-soon-in-ember-octane-part-4.html) and the [Octane Guides preview docs: Out-of-Component-Modifications](https://octane-guides-preview.emberjs.com/release/components/template-lifecycle-dom-and-modifiers/#toc_out-of-component-modifications) to learn more!

Qonto wrapped up the code in a small addon, [`ember-autofocus-modifier`](https://github.com/qonto/ember-autofocus-modifier). You can use the code as-is, or copy the [snippet code](https://github.com/qonto/ember-autofocus-modifier/blob/v0.0.1/addon/modifiers/autofocus.js) and experiment with creating your own modifier. 

---

## [3 New RFCs To Add New Template Helpers 3️⃣](https://github.com/emberjs/rfcs/pulls?utf8=%E2%9C%93&q=is%3Aopen+is%3Apr+author%3Acibernox+templates)

[Miguel Camba @cibernox](https://github.com/cibernox) opened a slew of RFCs around adding new built-in operators to Ember templates. The idea comes from functionality provided in [ember-truth-helpers](https://github.com/jmurphyau/ember-truth-helpers) and is a subset of his [other RFC](https://github.com/emberjs/rfcs/pull/388) to add basic helpers to Ember templates.

The three template helper RFCs Miguel proposed are the following:

- [Adding Equality Operators](https://github.com/emberjs/rfcs/pull/560) such as the `{{eq}}` and `{{neq}}` helpers
- [Adding Numeric Comparison Operators](https://github.com/emberjs/rfcs/pull/561), specifically the `{{lt}}` and `{{gt}}` helpers
- [Adding Logical Operators](https://github.com/emberjs/rfcs/pull/562) which are the `{{and}}`, `{{or}}` and `{{not}}` helpers

Help get this off the ground by adding your input to these changes today!

---

## [ember-apollo-client v2 Released 🎉](https://twitter.com/josemarluedke/status/1204908862676975617)

After a year in beta cycle, [ember-apollo-client](https://github.com/ember-graphql/ember-apollo-client/) celebrates a new major release! Version 2 comes with several enhanced features and follows modern practices in Ember and the JavaScript ecosystem. To learn more about v2, please see the [changelog](https://github.com/ember-graphql/ember-apollo-client/releases/tag/v2.0.0).

We extend our thanks to all contributors: [@FabHof](https://github.com/FabHof), [@brunoocasali](https://github.com/brunoocasali), [@buschtoens](https://github.com/buschtoens), [@dmzza](https://github.com/dmzza), [@vsergiu93](https://github.com/vsergiu93), [@lstrzebinczyk](https://github.com/lstrzebinczyk), [@jasonmit](https://github.com/jasonmit), [@coladarci](https://github.com/coladarci), [@jgwhite](https://github.com/jgwhite), [@christophermlne](https://github.com/christophermlne), [@bgentry](https://github.com/bgentry), and [@josemarluedke](https://github.com/josemarluedke).

If you would like to build an Ember + GraphQL app, we encourage you to try out [ember-apollo-client](https://github.com/ember-graphql/ember-apollo-client) today!

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

Chris Ng, Amy Lam, Isaac Lee, the crowd and the Learning Team
