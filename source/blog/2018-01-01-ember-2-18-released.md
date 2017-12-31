---
title: Ember 2.18 and 3.0 Beta Released
author: Ricardo Mendes
tags: Releases
---

Today the Ember project is releasing version 2.18.0 of Ember.js, Ember Data,
and Ember CLI.

**After 2.5 years and 18 minor releases, Ember 2.18 marks the end of the project's 2.x series**.
To ensure a smooth upgrade path going into the 3.x series, 2.18 has been
declared an LTS candidate. In six weeks the latest 2.18 build will succeed
Ember 2.16.2 as the latest LTS release. As an LTS it will
receive bugfix support until Ember 3.5 is released.

**Today we also kick off the 3.0 beta cycle for all sub-projects.** Ember 3.0
introduces no new features. Instead, it removes support for deprecated public APIs,
all of which have been deprecated since at least Ember 2.14 (released July 2017).
Extended support for removed Ember.js APIs will be provided via an
optional addon through Ember 3.4.

Additionally Ember 3.0 removes support for Microsoft Internet Explorer 9,
IE 10, and PhantomJS. This includes support for these platforms by Ember.js,
Ember Data, and Ember CLI. For more details about this decision see
[RFC 252](https://github.com/emberjs/rfcs/blob/master/text/0252-browser-support-changes.md)
and the discussion on [RFC PR #252](https://github.com/emberjs/rfcs/pull/252).

We need the help of the Ember community (especially addon authors) to help test
the 3.0 beta builds and transition path for 2.x codebases. If you encounter any
unexpected changes in features not marked as deprecated in 2.18 while testing
Ember 3.0 beta, please open an issue on the appropriate repo.

You can read more about our detailed transition plans through Ember 3.5
in
[The Road to Ember 3.0](https://www.emberjs.com/blog/2017/10/03/the-road-to-ember-3-0.html)
and below.

You can read more about our general release process here:

* [Release Dashboard](http://emberjs.com/builds/)
* [The Ember Release Cycle](http://emberjs.com/blog/2013/09/06/new-ember-release-process.html)
* [The Ember Project](http://emberjs.com/blog/2015/06/16/ember-project-at-2-0.html)
* [Ember LTS Releases](http://emberjs.com/blog/2016/02/25/announcing-embers-first-lts.html)

---

## Ember.js

Ember.js is the core of the Ember framework. It provides routing,
rendering, and dependency injection features.

### Changes in Ember.js 2.18

Ember.js 2.18 is an incremental and backwards compatible release of Ember which
includes minor bugfixes. No new features or public API deprecations are
introduced.

"Intimate API" refers to API surface that maintainers never intended to become
public, but which still has some small use in the wild. 2.18.0 adds an intimate
API deprecation for passing `targetObject` to a component invocation. Support
for this API will be removed in Ember 3.5. See
[PR #14590](https://github.com/emberjs/ember.js/pull/14590) for more details.

For more details on changes in Ember.js 2.18, please review the
[Ember.js 2.18.0 release page](https://github.com/emberjs/ember.js/releases/tag/v2.18.0).

### Upcoming Changes in Ember.js 3.0

Ember.js 3.0 is the first release in the 3.x series. It introduces no new
public API or deprecations. Included are bugfixes and most importantly the removal of
previously deprecated public API from the 2.x cycle. This release drops support
for IE9, IE10, and PhantomJS.

#### Removed APIs in Ember.js 3.0

Some developers might still be relying on some of these removed APIs.
To enable these developers to upgrade piecemeal, we have created the [ember-2-legacy](https://github.com/emberjs/ember-2-legacy) addon.

The `ember-2-legacy` addon will enable developers to selectively opt into continuing to use removed APIs until a time when they can migrate away from them.

Developers should reference the [2.x series deprecation guide](https://www.emberjs.com/deprecations/v2.x/) to see which pieces of public API will be removed in 3.x and how to migrate.

Public APIs to be removed in 3.0 are as follows:

* `didInitAttrs` is removed and can be [replaced with `init`](https://www.emberjs.com/deprecations/v2.x/#toc_ember-component-didinitattrs)
* One form of declaring an `observer` where dependent keys are stated after the callback (they should go before the callback as described in the [API docs](https://emberjs.com/api/ember/2.17/classes/@ember%2Fobject/methods/observer?anchor=observer))
* Enumerable and Array `contains` should be [replaced with `includes`](https://www.emberjs.com/deprecations/v2.x/#toc_enumerable-contains)
* Providing `{{link-to}}` with a param wrapped in a controller
* Specifying `defaultLayout` to a component, rather than [layout](https://www.emberjs.com/deprecations/v2.x/#toc_ember-component-defaultlayout)
* Using `Ember.Handlebars.SafeString` [instead of `Ember.String.htmlSafe`](https://www.emberjs.com/deprecations/v2.x/#toc_use-ember-string-htmlsafe-over-ember-handlebars-safestring)
* `Ember.K` should be replaced with [inline functions](https://www.emberjs.com/deprecations/v2.x/#toc_deprecations-added-in-2-12)

#### Browser Support in Ember.js 3.0

The Ember 3.x series will also drop support for Internet Explorer 9 and 10. Earlier this year, Microsoft [announced end of life](https://www.microsoft.com/en-us/WindowsForBusiness/End-of-IE-support) for these browser versions, ending their own technical and security updates.

For more details on the upcoming changes in Ember.js 3.0, please review the
[Ember.js 3.0.0-beta.1 release page](https://github.com/emberjs/ember.js/releases/tag/v3.0.0-beta.1).

---

## Ember Data

Ember Data is the official data persistence library for Ember.js applications.

### Changes in Ember Data 2.18

Ember.js 2.18 contains no new features. The changes introduced in
Ember Data 2.18 mostly focus on bug fixes and improved documentation.

#### Deprecations in Ember Data 2.18

One new deprecation is introduced in Ember Data 2.18:

* Support for "production-like" values of `EMBER_ENV` [will be removed](https://github.com/emberjs/data/pull/5239).
For example, custom production names like `production-qa` should be replaced with `production`

For more details on changes in Ember Data 2.18, please review the
[Ember Data 2.18.0 release page](https://github.com/emberjs/data/releases/tag/v2.18.0).

### Upcoming changes in Ember Data 3.0

Ember Data 3.0 contains major improvements in the testing blueprints
that are shipped with Ember Data and use by ember-cli when you use
`ember generate` `model`, `adapter`, or `serializer`.  Big thanks to
[@alexander-alvarez](https://github.com/alexander-alvarez) for all his
work on the [QUnit Blueprints Quest
Issue](https://github.com/emberjs/data/issues/5292).

#### Deprecations in Ember Data 3.0

There are no new deprecations in Ember Data 3.0.

For more details on the upcoming changes in Ember Data 3.0, please review the
[Ember Data 3.0.0-beta.1 release page](https://github.com/emberjs/data/releases/tag/v3.0.0-beta.1).

---

## Ember CLI

Ember CLI is the command line interface for managing and packaging Ember.js
applications.

### Upgrading Ember CLI

You may upgrade Ember CLI separately from Ember.js and Ember Data! To upgrade
your projects using `yarn` run:

```
yarn upgrade ember-cli
```

To upgrade your projects using `npm` run:

```
npm install --save-dev ember-cli
```

After running the
upgrade command run `ember init` inside of the project directory to apply the
blueprint changes. You can preview those changes for [applications](https://github.com/ember-cli/ember-new-output/compare/v2.17.0...v2.18.0)
and [addons](https://github.com/ember-cli/ember-addon-output/compare/v2.17.0...v2.18.0).

### Changes in Ember CLI 2.18

Ember CLI 2.18 is an incremental release, featuring bugfixes and improvements.

#### Node 7 removed from CI testing matrix

According to the [Node.js support policy](https://github.com/ember-cli/ember-cli/blob/master/docs/node-support.md) of the Ember CLI project,
Node 7 is removed from the testing matrix.
If you are developing an application using Ember CLI, it is recommended that you upgrade your Node to one of the [active LTS](https://github.com/nodejs/Release) versions to guarantee security updates.

#### Addon dependencies when using npm link

Previously, if you were npm-linking an addon that had itself npm-linked a dependency, Ember CLI would fail to find it. This is now fixed.

#### `crossdomain.xml` from blueprints

`crossdomain.xml` was originally introduced to limit vulnerabilities with using the Flash Player,
by declaring which servers it could connect to outside the one currently hosting it.
Browsers have since disabled Flash for security reasons, rendering the file moot.
Ember CLI 2.18 will no longer generate the file when generating new applications.

#### ESLint default configuration and overriding

* #7443 Use overrides for a single .eslintrc.js. @rwjblue
* #7455 Add eslint-plugin-ember to default linting config. @rwjblue

I guess the biggest user-facing change is the ESLint thing. We now only have a single .eslintrc.js file and that includes eslint-plugin-ember by default.

#### Deprecations in Ember CLI 2.18

Ember CLI 2.18 does not introduce new deprecations

For more details on the changes in Ember CLI 2.18 and detailed upgrade
instructions, please review the [Ember CLI 2.18.0 release page](https://github.com/ember-cli/ember-cli/releases/tag/v2.18.0).

### Upcoming Changes in Ember CLI 3.0

Ember CLI 3.0 will feature a much improved README for the addon blueprint.
The improvements include:

* An automatically generated "Installation" section
* An empty "Usage" section
* A "License" section
* [Setext headings](http://spec.commonmark.org/0.28/#setext-heading) to emphasize sections when in raw text mode.

#### Deprecations in Ember CLI 3.0

Ember CLI 3.0 does not introduce new deprecations.

For more details on the changes in Ember CLI 3.0.0-beta.1 and detailed upgrade
instructions, please review the [Ember CLI 3.0.0-beta.1 release page](https://github.com/ember-cli/ember-cli/releases/tag/v3.0.0-beta.1).

## Thank You!

As a community-driven open-source project with an ambitious scope, each of
these releases serve as a reminder that the Ember project would not have been
possible without your continued support. We are extremely grateful to our
contributors for their efforts.
