The [Ember App Kit](https://github.com/stefanpenner/ember-app-kit) project has proved to be quite useful. We have learned lots, and it allowed us to iterate quickly while building real ambitious applications.

While its initial incarnation is useful, it has several meta problems:

1. It is not “simple” and appears daunting
2. Because of inline configuration, the API surface area is massive
3. 2 does not allow users to express the “what”, just the “how”. This prevents EAK from doing more of the heavy lifting itself
4. 2 and 3 makes it quite tedious to upgrade

##Rationale for #3

If we want to upgrade or swap in a faster build pipeline it would be a major pain currently. But with #3, in theory, it should be minimal pain.
