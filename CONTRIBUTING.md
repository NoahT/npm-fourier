# Contributions
Contributions in the form of additional unit testing, proposed fast Fourier transform (FFT) implementations, and raised issues are encouraged.
Please respect our project flow by carefully reading the section most relevant to you.

- Bugs
    - [Proposals](#proposing-bugs)
    - [Patches](#patches-for-bugs)
- Features
    - [Proposals](#proposing-new-features)
    - [Additions](#adding-new-features)


## Proposing bugs
Before proposing a new issue, please follow the steps outlined below:

1. Check to see whether the same issue was already raised. Raising a new issue that is already being worked on partitions
everyone's effort into multiple areas, promoting some degree of redundancy and miscommunication. In some instances, a similar
issue may already exist. If possible, provide any information that provides further insight into previous issues, and raise a
separate issue with information that is unique to your problem.
2. Once certain that the bug was not already reported, include an issue with the **bug** label, as well as a **title** and **description** that clearly addresses the problem. The description should include an understanding of what the intended functionality should be, how the bug is hindering this functionality, and any associated code snippets that reproduce the problem. Optionally, a proposed solution may also be included. 


## Patches for bugs
The following steps outline the process that must be undergone in order to ensure your pull request is merged successfully:

1.  Your resolution for the proposed problem must be directly addressed and accepted on the associated issue. This is done in order to
avoid numerous people working on the same issue, when a single person will suffice.
2.  After forking this repository, you should place all of your work under a branch labeled *username-npm-fourier*, where username represents your Github username.
3.  Your pull request, when completed with the necessary unit tests, should be merged into the branch labeled *experimental*. Include a **title** and **description** that clearly addresses the resolution (as well as any unit tests added) of the associated problem. Any pull requests into *master* will be rejected. Pull requests into *master* are only accepted once a new release is ready to be made.
4.  When writing the proposed patch, ensure that appropriate unit tests are written beforehand. This falls back onto the [test-driven development](https://en.wikipedia.org/wiki/Test-driven_development) work cycle, and ensures greater code coverage as well as improving the credibility of any proposed solution.


## Proposing new features
Feature proposals are always welcome. The guidelines listed below should be followed before proposing new features:

1.  Check to see whether a similar feature was already proposed. Just like with proposals for bugs, it is possible that another contributor is already working on developing the same feature. Instances in which there exists a notable degree of distinction between your proposal and another individual's proposal will be handled on a case-by-case basis.
2.  If your intended feature has not yet been worked on, include an issue with the **enhancement** label, as well as a **title** and **description** that clearly addresses the intended feature. The description should include an explanation of what the intended feature should be, as well as how this feature holds significance with respect to this library's initial intentions. Any features that persist beyond this library's purpose will be denied.


## Adding new features
Given the scope of this project, it remains important to obey the guidelines listed below before submitting pull requests for new features:

1.  Your proposed feature must be directly addressed and accepted on the associated issue. This is done in order to avoid numerous people working on the same issue, while also adhering to this library's purpose.
2.  After forking this repository, you should place all of your work under a branch labeled *username-npm-fourier*, where username represents your Github username.
3.  Your pull request, when completed with the necessary unit tests, should be merged into the branch labeled *experimental*. Include a **title** and **description** that clearly addresses the feature (as well as any unit tests added) of the associated problem. Any pull requests into *master* will be rejected. Pull requests into *master* are only accepted once a new release is ready to be made.
4.  Similarly to patches, when writing the proposed feature, ensure that appropriate unit tests are written beforehand. This falls back onto the [test-driven development](https://en.wikipedia.org/wiki/Test-driven_development) work cycle, and ensures a high degree of code coverage is maintained as this project scales with contributions.
