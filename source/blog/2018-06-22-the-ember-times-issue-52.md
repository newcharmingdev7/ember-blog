---
title: The Ember Times - Issue No. 52
author: the crowd
tags: Recent Posts, Newsletter, Ember.js Times, Ember Times, 2018
alias : "blog/2018/06/22/the-ember-times-issue-52.html"
responsive: true
---

Emberistas שלום! 🐹

Read either on the [Ember blog](https://www.emberjs.com/blog/2018/06/22/the-ember-times-issue-52.html) or in our [e-mail newsletter](https://the-emberjs-times.ongoodbits.com/2018/06/22/the-ember-times-issue-52) what has been going on in Emberland this week.
....

---

## [Native Class Constructor Update 🛠](https://github.com/emberjs/rfcs/pull/337)

There is currently an open RFC proposing to change the behavior of `EmberObject's` constructor.

Native class syntax with EmberObject has almost reached full feature parity, meaning soon Ember will be able to ship native classes.
However, early adopters of native classes have experienced some serious issues due to the current behaviour of the class constructor. The issue is caused by the fact that properties passed to `EmberObject.create` are assigned to the instance in the root class `constructor`. Due to the way that native class fields work, this means that they are assigned _before_ any subclasses' fields are assigned, causing subclass fields to overwrite any value passed to `create`.

The new implementation of the Ember Object would look like the following:

```js
class EmberObject {
  constructor(props) {
    // ..class setup things
  }

  static create(props) {
    let instance = new this(props);

    Object.assign(instance, props);
    instance.init();

    return instance;
  }
}
```

This would assign the properties _after_ all of the class fields for any subclasses have been assigned.

One thing worth mentioning is that EmberObject will likely be deprecated in the near future and that ideally for non-Ember classes (things that aren't Components, Services, etc.) users should drop EmberObject altogether and use native classes only.

:point_right: As always, all comments to this RFC are more than welcome, so let's help out in order to finalize it! :sparkles:


---

## [SECTION TITLE](section url)


---

## [New Tutorial on Accessibility](https://emberjs.com/blog/2018/06/17/ember-accessibility-and-a11y-tools.html)
Ever wondered how to write accessible Ember apps? Jen Weber wrote a [great tutorial](https://emberjs.com/blog/2018/06/17/ember-accessibility-and-a11y-tools.html) explaining all you need to get started. She takes you through setting up `ember-a11y-testing`, a tool made to do automated accessibility testing, adding accessibility checks to rendering tests and how to fix the issues found.

The tutorial ends with a nice section on what to do next. One thing is automated testing but as developers our responsibility is much bigger than that.

---

## [SECTION TITLE](section url)


---

## [SECTION TITLE](section url)


---

## [SECTION TITLE](section url)


---

## [Contributors' Corner](https://guides.emberjs.com/v3.2.0/contributing/repositories/)

<p>This week we'd like to thank ... for their contributions to Ember and related repositories! 💕
</p>

---

## [READERS' QUESTIONS 🤓](https://docs.google.com/forms/d/e/1FAIpQLScqu7Lw_9cIkRtAiXKitgkAo4xX_pV1pdCfMJgIr6Py1V-9Og/viewform)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>...</p>

</div>


<div class="blog-row">
  <p><strong>Submit your own</strong> short and sweet <strong>question</strong> at <a href="https://bit.ly/ask-ember-core" target="rq">bit.ly/ask-ember-core</a>. And don’t worry, there are no silly questions, we appreciate them all - promise! 🤞</p>
</div>

## [The Ember Times is What We Make It 🙌](https://the-emberjs-times.ongoodbits.com/)

The **Ember Times** is a **weekly news editorial** featuring all the new things that are going on in Emberland.
[Subscribe to our e-mail newsletter](https://the-emberjs-times.ongoodbits.com/) to get the next edition **right to your inbox**.
If you ❤️ what you're reading and you feel like a **writer** at heart,
drop by [#topic-embertimes](https://embercommunity.slack.com/messages/C8P6UPWNN/convo/C4TD5JJ7R-1497022015.688894/) on the Ember Community Slack Chat to join the discussion or even **become the co-author** of a future edition!


---


That's another wrap!  ✨

Be kind,

the crowd and the Learning Team
