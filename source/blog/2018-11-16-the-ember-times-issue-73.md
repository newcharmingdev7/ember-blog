---
title: The Ember Times - Issue No. 73
author: Melanie Sumner, Chris Ng, Jessica Jordan, Kenneth Larsen, Niels Rasmussen, Ryan Mark, Alon Bukai, Amy Lam
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2018
alias : "blog/2018/11/16-the-ember-times-issue-73.html"
responsive: true
---

Suilad Emberistas! 🐹

<!--alex ignore hooks-->
Last call for your **talk submissions** to **EmberConf 2019** 📣! 
eslint-plugin-ember v6.0.0 is out 🚓! 
Watch all the talks from EmberFest 🎥! 
Try out hot reloading in Ember ️🔥! 
And finally, teaser for Dec**Ember** 😄...

---

## [Your Last Chance to Become a Speaker at EmberConf 2019 🎤](https://emberconf.com/become-a-speaker.html)

Never tried public speaking before, but you're curious to share your thoughts on something interesting you learned recently? Are you already an experienced meetup speaker and looking for the next stage? Have you spoken at conferences before and want to try something new?

No matter what your experience level is, we're looking for you to [**become a speaker at EmberConf 2019**](https://emberconf.com/become-a-speaker.html). The CFP (Call for Proposals) will be open for only another 2 days, so be sure to get your talk proposal in this very weekend **before Sunday, Nov 18, 2018 at 11:59pm MST**.

Out of ideas? Be sure to [check out the Brainstorm CFP](https://emberconf.com/cfp-brainstorm.html) to inspire yourself!
Not feeling ready yet? Be assured, that **you are ready** to tell us your story - we're convinced that you'll succeed! ✨

<div class="blog-row">
  <a class="ember-button" href="https://emberconf.com/become-a-speaker.html">Ok, let me check out the CFP</a>
</div>

---

## [eslint-plugin-ember v6.0.0 is out! 🚓](https://twitter.com/TobiasBieniek/status/1062700572757946368)

[@Turbo87](https://github.com/Turbo87) announced the release of [v6.0.0](https://github.com/ember-cli/eslint-plugin-ember/releases/tag/v6.0.0) of [eslint-plugin-ember](https://github.com/ember-cli/eslint-plugin-ember) which is an [ESLint](https://eslint.org/) plugin that provides set of rules for Ember Applications based on commonly known good practices.

This new release includes several **breaking changes** to the `ember/recommended` configuration such as [no-restricted-resolver-tests](https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/no-restricted-resolver-tests.md) and [no-ember-testing-in-module](https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/no-ember-testing-in-module-scope.md). Check the [release notes](https://github.com/ember-cli/eslint-plugin-ember/releases/tag/v6.0.0) for the full list of breaking changes and enhancements.

Note: If you still use [ESLint 3](https://github.com/ember-cli/eslint-plugin-ember/pull/267) or [Node.js 4](https://github.com/ember-cli/eslint-plugin-ember/pull/255) **this release will not work** for you as this major version change drops support for both of them.

---

## [Videos From EmberFest Are Out! 🎉](https://www.youtube.com/playlist?list=PLN4SpDLOSVkSB9034lDNdP1JoNBGssax9)

The videos from EmberFest are **now available** on [YouTube](https://www.youtube.com/playlist?list=PLN4SpDLOSVkSB9034lDNdP1JoNBGssax9). This means that you can experience all of the great talks even though you weren’t there! (And you know, if you were there you can now re-live it all).

If you don’t know where to start then we highly recommend the [opening keynote by Tom Dale](https://www.youtube.com/watch?v=oRzmDobMZ_Q&t=0s&list=PLN4SpDLOSVkSB9034lDNdP1JoNBGssax9&index=2) and the [closing keynote by Melanie Sumner](https://www.youtube.com/watch?v=xP-kog04lng&list=PLN4SpDLOSVkSB9034lDNdP1JoNBGssax9&index=21).

Tom Dale spoke about what will happen next year when you generate a new Ember app. This involves super exciting things like the **module unification app structure**,  **angle bracket invocation**, **JavaScript classes**, **tracked properties** and much more. All of this is of course delivered with the usual Tom Dale dapperness and humor. Definitely worth a watch.

Melanie Sumner delivered a thoughtful talk about how other peoples' views on something you enjoy - especially when you’re a smaller community - can create uncertainty, and why it shouldn’t. It delivers a few helpful tools and encourages us to **observe**, **analyse** and **think** before responding to critical claims. The talk is a great reminder to consider how we talk to each other and to enjoy doing what we do, no matter what others may think.

If you want to browse through all of the great talks from EmberFest, check out the [YouTube playlist](https://www.youtube.com/watch?v=xP-kog04lng&list=PLN4SpDLOSVkSB9034lDNdP1JoNBGssax9&index=21).

---

## [Hot reloading in Ember 🔃](https://github.com/lifeart/ember-ast-hot-loads)

[ember-ast-hot-load](https://github.com/lifeart/ember-ast-hot-loads) is a new attempt to bring components hot reloading into the Ember ecosystem!

Hot reloading only refreshes the components that were changed without losing the state of the app. For example, if you are four routes deep into your app and save a change to some component, the updated component would appear on the page without full application reload.

ember-ast-hot-load perform handlebars templates hooking using AST transformations, and replaces components invocations from
`{{my-component}}`, to `{{component (hot-load 'my-component')}}`. The `hot-load` helper now knows which component rendered and may call the recompute function, to invoke component redraw after its source code has been updated and compiled.

[Try out ember-ast-hot-load today!](https://github.com/lifeart/ember-ast-hot-loads) 

---

## [DecEmber is almost here! 📆](https://github.com/ember-learn/guides-source/labels/DecEmber)

Are you wondering what to do with all your vacation time in December? We got ya covered! The Core Learning Team is sponsoring DecEmber, a hackathon event specifically targeted at learning team efforts. Look for special issues marked **“DecEmber”** from December 1st-31st. Of course there will be **prizes**, too! Stay tuned for more details...

P.S. You can register for [24 Pull Requests](https://24pullrequests.com/) - giving back little gifts of code for the holidays ❄️ - as well!

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

## [#embertimes](https://emberjs.com/blog/tags/newsletter.html) 📰

Want to write for the Ember Times? Have a suggestion for next week's issue? Join us at [#support-ember-times](https://discordapp.com/channels/480462759797063690/485450546887786506) on the [Ember Community Discord](https://discordapp.com/invite/zT3asNS) or ping us [@embertimes](https://twitter.com/embertimes) on Twitter.

Keep on top of what's been going on in Emberland this week by subscribing to our [e-mail newsletter](https://the-emberjs-times.ongoodbits.com/)! You can also find our posts on the [Ember blog](https://emberjs.com/blog/tags/newsletter.html).

---

That's another wrap! ✨

Be kind,

Melanie Sumner, Chris Ng, Jessica Jordan, Kenneth Larsen, Niels Rasmussen, Ryan Mark, Alon Bukai, Amy Lam and the Learning Team
