---
title: The Ember.js Times - Issue No. 46
author: all the people
tags: Recent Posts, Newsletter, Ember.js Times
alias : "blog/2018/05/11/the-emberjs-times-issue-46.html"
responsive: true
---

හෙලෝ Emberistas!

Intro Text....

---

## [EMBER THINGS 🐹](#your-url-here)

---

## [Deprecate globals resolver RFC](https://github.com/emberjs/rfcs/pull/331)
Gaurav Munjal has submitted an RFC to finally deprecate the globals resolver and related API. The globals resolver is primarily a holdover from when people used Ember without Ember-CLI and looks like this:

```
// app.js
var App = Ember.Application.create();

App.Router.map(function() {
  this.route('about');
});

App.AboutRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
```

```
// index.html
<script type="text/x-handlebars" data-template-name="index">
  <ul>
    {{#each model as |item|}}
      <li>{{item}}</li>
    {{/each}}
  </ul>
</script>
```

Using Ember-CLI instead has been recommended for years, but anyone still using this API should
read the RFC and comment on why they might still need it.

---

## [EMBER CLI THINGS](#your-url-here)


---

## [Get involved with the new Ember guides](https://emberguides.stonecircle.io/release/)
The Learning Team has been working on a new and improved version of the Guides app. It's now made with Ember.js and is more shiny than ever. The Guides app is almost ready for a proper release, but before we do so, we would love for you to [try it out](https://emberguides.stonecircle.io/release/). If you find any issues then please [report them](https://github.com/ember-learn/guides-app/issues).

Or if you feel in a particulary good mood, look through existing issues in the [Guides app](https://github.com/ember-learn/guides-app/issues) or the [Guides source](https://github.com/ember-learn/guides-source/issues) and start contributing to the new guides.

---

## [Moar #EmberJS2018 blog posts!](https://emberjs.com/blog/2018/05/02/ember-2018-roadmap-call-for-posts.html)

We've already seen a lot of thoughtful blog posts from the Ember team's [call for community blog posts](https://emberjs.com/blog/2018/05/02/ember-2018-roadmap-call-for-posts.html). But we're hoping for more! Have something to say?

Write a blog post to propose goals and direction for Ember in the remainder of 2018. The content of these posts will help the core team to draft their first Roadmap RFC.

Write your **blog post** by **May 30th**. Tweet a link to the post with the hashtag **#EmberJS2018**. Topic ideas could include: ideas for community programs, framework features, documentation improvements, ecosystem needs, or tooling enhancements.

---

## [SOMETHING ELSE HERE](#your-url-here)


---


## [Contributors' Corner](https://guides.emberjs.com/v3.1.0/contributing/repositories/)

TBD

---

## [READERS QUESTIONS](#hopefully-getting-one-in-this-week)

<div class="blog-row">
  <img class="float-right small transparent padded" alt="Office Hours Tomster Mascot" title="Readers' Questions" src="/images/tomsters/officehours.png" />

  <p>Some legit questions...</p>
</div>


---

That's another wrap!  ✨

Be kind,

all the people
