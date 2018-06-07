---
title: The Ember.js Times - Issue No. 50
author: the crowd
tags: Recent Posts, Newsletter, Ember.js Times, 2018
alias : "blog/2018/06/08/the-emberjs-times-issue-50.html"
responsive: true
---

Sawubona Emberistas! 🐹

Read either on the [Ember blog](https://www.emberjs.com/blog/2018/06/08/the-emberjs-times-issue-50.html) or in our [e-mail newsletter](https://the-emberjs-times.ongoodbits.com/2018/06/08/issue-50) what has been going on in Emberland this week:
We have a couple of **fresh 🥒 Ember RFCs** (Request for Comments) in for you this week, a status update from the long-awaited
**Package** 📦 feature in Ember CLI 💻, a call-to-action for creative **writers** ✍️ and
last, but not least, a **brand-new Readers' Question** for you 📚:

---

## [Lets Send SendAction Away!](https://github.com/emberjs/rfcs/pull/335)
The time has come. `component#sendAction` has served the Ember community well for years but in a new [RFC by @cibernox](https://github.com/emberjs/rfcs/pull/335) he proposes to deprecate this feature. In the old days, before v1.13, `component#sendAction` was the only way to bubble up actions from components. Since v1.13 we have _closure actions_ which are more intuitive and flexible and they are the current recommended Ember Way™ for doing actions in components.

_Closure actions_ have been the recommended way to do actions in components for almost 3 years. Also `component#sendAction` is not even mentioned in the guides anymore so there is really little reason to keep it around. So look out for a new deprecation near you, coming soon!

If you want to learn more about why _closure actions_ are preferred over `component#sendAction` then you can check out [this blog post from 2016](http://miguelcamba.com/blog/2016/01/24/ember-closure-actions-in-depth).

Read more about this proposal and join the RFC discussion:

<a class="ember-button ember-button--centered" href="https://github.com/emberjs/rfcs/pull/335">Read more</a>

---

## [RFC Deprecating Ember Utils](https://github.com/emberjs/rfcs/pull/334)
A new RFC has been posted on deprecating `Ember.{isEmpty, isBlank, isNone, isPresent}`. The motivation of this is to clean up utils that do not provide much value over writing plain old Javascript. There's already a discussion going on whether this is a good decision or not. You can follow the discussion and read the RFC at the [RFC repository](https://github.com/emberjs/rfcs/pull/334).

---

## [Global Resolver RFC in Final Process](https://github.com/emberjs/rfcs/pull/331)
The RFC to deprecate global resolver is has now entered the final stage. The motivation of this RFC is the fact that we have transitioned to using Ember-CLI. The globals resolver is primarily used for Ember without Ember-CLI.

Read all about the RFC and bring your thoughts for the final process in the [RFC repository](https://github.com/emberjs/rfcs/pull/331).


---

## [Ember CLI Packager: News from the Field 🌾](https://github.com/ember-cli/rfcs/blob/master/active/0051-packaging.md)

We already wrote about the [Packager in Ember CLI recently](https://www.emberjs.com/blog/2018/05/25/the-emberjs-times-issue-48.html#toc_a-href-https-github-com-ember-cli-ember-cli-pull-7826-a-package-out-for-delivery-to-ember-cli-a). But here's another **status update** for this
feature which will make the **build pipeline** of your Ember apps **easier to modify** very soon:
These weeks lots of new improvements and fixes landed ([1](https://github.com/ember-cli/ember-cli/pull/7864), [2](https://github.com/ember-cli/ember-cli/pull/7855), [3](https://github.com/ember-cli/ember-cli/pull/7848), [4](https://github.com/ember-cli/ember-cli/pull/7860)).
According to internal sources, there have already been **successful test runs** using the experimental version of this [Rollup](https://rollupjs.org/guide/en) powered packager 😲 for bundling and tree-shaking
different open-source Ember 🐹 projects.
We'll keep you posted with more news from the field soon!


---

## [SECTION TITLE](#section-url)



---

## [SECTION TITLE](#section-url)



---

## [Got Something to Share?](https://airtable.com/shrDbeo2Y80OPG0kC)
We all love reading the Ember blog. It’s an awesome way to find out what’s happening in the community and to keep up to date on all things Ember. Sometimes though, you may think to yourself, “I’ve got something to say!”. Awesome! Whether your passion is authoring addons or tinkering with broccoli, contributing to the blog is an excellent opportunity to connect with the community. Well getting started could not be any easier! If you want to write a guest blog post for the website, make your way over to [Ember.js Guest Blog Post Invitation](https://airtable.com/shrDbeo2Y80OPG0kC), and fill out the form!


---

## [Contributors' Corner](https://guides.emberjs.com/v3.1.0/contributing/repositories/)

<p>This week we'd like to thank <a href="https://github.com/rwjblue" target="gh-user">@rwjblue</a>, <a href="https://github.com/IzzatN" target="gh-user">@IzzatN</a>, <a href="https://github.com/bekzod" target="gh-user">@bekzod</a>, <a href="https://github.com/savvymas" target="gh-user">@savvymas</a>, <a href="https://github.com/kennethlarsen" target="gh-user">@kennethlarsen</a>, <a href="https://github.com/jeffdaley" target="gh-user">@jeffdaley</a>, <a href="https://github.com/vFederer" target="gh-user">@vFederer</a>, <a href="https://github.com/Turbo87" target="gh-user">@Turbo87</a>, <a href="https://github.com/xg-wang" target="gh-user">@xg-wang</a>, <a href="https://github.com/thoov" target="gh-user">@thoov</a>, <a href="https://github.com/kellyselden" target="gh-user">@kellyselden</a>, <a href="https://github.com/Gaurav0" target="gh-user">@Gaurav0</a>, <a href="https://github.com/chadhietala" target="gh-user">@chadhietala</a>, <a href="https://github.com/izelnakri" target="gh-user">@izelnakri</a>, <a href="https://github.com/dfreeman" target="gh-user">@dfreeman</a>, <a href="https://github.com/mansona" target="gh-user">@mansona</a>, <a href="https://github.com/jfdnc" target="gh-user">@jfdnc</a>, <a href="https://github.com/chaoobject001" target="gh-user">@chaoobject001</a>, <a href="https://github.com/jenweber" target="gh-user">@jenweber</a>, <a href="https://github.com/CodingItWrong" target="gh-user">@CodingItWrong</a>, <a href="https://github.com/pizza" target="gh-user">@pizza</a>, <a href="https://github.com/sbatson5" target="gh-user">@sbatson5</a> and <a href="https://github.com/sivakumar-kailasam" target="gh-user">@sivakumar-kailasam</a> - thank you for all your efforts! ❤️
</span>
</p>

---

## [Got a question? Ask Readers' Questions!🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>...</p>

<p><strong>Submit your own</strong> short and sweet <strong>question</strong> under <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>

</div>

---

That's another wrap!  ✨

Be kind,

the crowd and the Learning Team
