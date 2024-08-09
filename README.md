# howles.dev

The `howles.dev` site is the homepage for Lewis Howles.

This site is built as though it were a UI project, using Vue and Tailwind CSS, and tested using Vitest, Cypress. This lets me utilise the site as information, with links to relevant projects, but also to use it to demonstrate my current best practices.

## Vue

Vue is my framework of choice for Front-end projects. Vue has a strong ecosystem, with best practices for everything from testing to stores, plus you don't have to use JSX, which is always a bonus.

- Vue is a lightweight, fast framework that has a gentle learning curve. Combined with extensive, easy-to-read documentation, it makes onboarding very easy.
- It is regularly updated, and has quickly improved both performance and developer experience.
- The component-based architecture helps to organise code into easily re-usable units. These self-contained units are also more manageable and scalable, and those individual components can easily be replaced.
- Vue's reactivity model is simple to understand, but powerful enough to keep complex apps up to date.
- Vue is scalable, from small-scale projects like this, to large-scale apps that use dozens of API calls.
- Single-file components keeps related concepts together, improving maintainability.

## Tailwind CSS

Tailwind, while sometimes divisive, has been a game-changer for the way I work.

- The utility-first approach works perfectly with frameworks like Vue, making it easy to add and removes styles based on state. It also enables rapid prototyping, often allowing examples to be build as quickly as they can be designed.
- Utility classes allow for greater consistency, giving a defined set of options for things like font size. Pulling configuration into a library also means multiple projects can be set up with the same setup, giving a level of immediate consistency between projects that is hard to replicate with regular CSS.
- Tailwind automatically removes unused CSS, optimising the CSS bundle without any effort from the developer.
- Applying styles directly to the HTML, once you're used to it, allows you to develop much more quickly. It removes the mental effort required to name things, and reduces context switching, meaning fewer delays and distractions.

## Vitest

Vitest is a Jest-compatible, Vite-native testing framework. Being Vite native means it runs much more quickly than Jest, and since switching I have started to enjoy unit testing a lot more.

## Cypress

Using Javascript to write end-to-end testing is a Front-end developer's dream come true. Cypress is regularly updated and improved, and the tooling—particularly the testing UI—is amazing for running through the UI like a user.

It's flexible enough to allow extensive helper methods, which is a personal love of mine, and the ability to easily mock API responses makes it effortless to test edge cases.

The recent ability to test components in isolation gives a level of component testing that is just cumbersome to complete in a unit test framework and gives a level of confidence that is hard to achieve elsewhere.
