# Craft Demo: Notifications

This repository is the starting point for your craft demo for [OfColor](https://www.ofcolor.com). A craft demo is a hypothetical challenge designed to resemble very closely the sort of problem you will tackle in this role.

We expect this problem to take experienced developers familiar with TypeScript and React about 1–2 hours to complete. Nobody has unlimited time to work on interview projects and we don't expect you to complete all of the requirements and extra challenges. We may ask you how you _would_ have addressed any part of the specification, however, so it's good to be familiar with the whole thing.

Generally, **we prefer higher code quality over a greater number of features**.

## Get Started

Make sure you have [Node 16](https://nodejs.org) and NPM installed. Then, clone the repository and install dependencies.

```bash
$ git clone https://github.com/WeAreOfColor/craft-demo-notifications.git
$ cd craft-demo-notifications
$ npm install
```

To run the dev server with hot reloading of scripts and styles, run:

```bash
$ npm run dev
```

## Your Challenge

Our esteemed colleagues in Product have asked us to implement **Notification** features in our React app's UI.

These UI Notifications appear in the bottom right corner of the viewport, each as a separate card which is clearly distinct from the underlying UI. More than one notification can be shown at a time; newer notifications display on top of older ones. The behavior of the app when there are more notifications than can fit on the screen is unspecified.

Data-wise, UI notifications are simple: They display a simple string.

UI Notifications have two types: Info and Error. They look similar, except that Error notifications have red text.

By default, UI notifications disappear after 3500ms. But optionally, the user of the notifications system can post a notification that requires a user interaction (clicking on the card) to dismiss.

### Core Requirements

1. Design UI for the notifications feature. There are no visual designs. (You're not being evaluated on the artistic quality of the design, but rather on good UI judgement and product sense.) Your implementation should function on mobile- and desktop-sized viewports.
2. Implement a service that displays notifications on the screen. Design it so that it can fulfill the above specification of the Notification UI.
3. Update the included React app in line with the instructions on the 2 pages:
   - clicking the "Notify" triggers a basic notification which disappears
   - clicking the "Trigger Error" triggers an error notification which must be explicitly dismissed
   - Navigating between the pages maintains the notifications in the same state

### Stretch requirements

These are extra questions to consider and potentially address. Complete the core tasks before tackling any of these. These are just suggestions; you can also implement your own ideas to extend the basic requirements.

1. How might the user experience be made more useful with the addition of some visual polish or pizzazz?
2. What are the accessibility implications of this feature? What features of the web platform would make this feature function better for, e.g., screen readers?
3. What sort of documentation would help other developers reuse the code that you've written?
4. How can you use automated tests to prove the correctness of your implementation?
