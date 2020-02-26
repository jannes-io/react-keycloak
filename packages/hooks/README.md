![React Keycloak](/art/react-keycloak-logo.png?raw=true "React Keycloak Logo")

# React Keycloak <!-- omit in toc -->

> React bindings for [Keycloak](https://www.keycloak.org/)

[![NPM (scoped)](https://img.shields.io/npm/v/@react-keycloak/web?label=npm%20%7C%20web)](https://www.npmjs.com/package/@react-keycloak/web)

[![License](https://img.shields.io/github/license/panz3r/react-keycloak.svg)](https://github.com/panz3r/react-keycloak/blob/master/LICENSE.md)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![Contributors](https://img.shields.io/badge/contributors-2-orange.svg)](#contributors)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Dependencies](https://img.shields.io/david/panz3r/react-keycloak.svg)](https://github.com/panz3r/react-keycloak)
[![Build Status](https://travis-ci.com/panz3r/react-keycloak.svg?branch=master)](https://travis-ci.com/panz3r/react-keycloak)
[![Coverage Status](https://coveralls.io/repos/github/panz3r/react-keycloak/badge.svg?branch=master)](https://coveralls.io/github/panz3r/react-keycloak?branch=master)
[![Github Issues](https://img.shields.io/github/issues/panz3r/react-keycloak.svg)](https://github.com/panz3r/react-keycloak/issues)

----

## Table of Contents <!-- omit in toc -->
- [Install](#install)
- [Hooks](#hooks)
  - [useAttribute](#useattribute)
  - [useRoles](#useroles)
- [Contributors](#contributors)

----

## Install

React Keycloak requires:

- React **16.8** or later
- `keycloak-js` **8.0.1** or later

```
yarn add @react-keycloak/hooks
```

or

```
npm install --save @react-keycloak/hooks
```

## Hooks

### useAttribute

```js
import React from 'react'
import { useAttribute } from '@react-keycloak/hooks'

const Greeting = () => {
  const name = useAttribute('given_name')

  return <p>{name !== undefined ? `Welcome back, ${name}!` : 'Not logged in.'}</p>
}
```

### useRoles

Single-client example:
```js
import React from 'react'
import { useRoles } from '@react-keycloak/hooks'

const SecureComponent = () => {
  const roles = useRoles('my-client-id')

  return <p>{roles.includes('admin')
    ? 'Secret message'
    : 'You are not allowed to see this message!'
  }</p>
}
```

Multi-client example:
```js
import React from 'react'
import { useRoles } from '@react-keycloak/hooks'

const SecureComponent = () => {
  const roles = useRoles()

  return <p>{roles['my-client-id'].includes('admin')
    ? 'Secret message'
    : 'You are not allowed to see this message!'
  }</p>
}
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://panz3r.dev"><img src="https://avatars3.githubusercontent.com/u/1754457?v=4" width="100px;" alt=""/><br /><sub><b>Mattia Panzeri</b></sub></a><br /><a href="#ideas-panz3r" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/panz3r/react-keycloak/commits?author=panz3r" title="Code">💻</a> <a href="https://github.com/panz3r/react-keycloak/commits?author=panz3r" title="Documentation">📖</a> <a href="https://github.com/panz3r/react-keycloak/issues?q=author%3Apanz3r" title="Bug reports">🐛</a> <a href="#maintenance-panz3r" title="Maintenance">🚧</a> <a href="#platform-panz3r" title="Packaging/porting to new platform">📦</a> <a href="#question-panz3r" title="Answering Questions">💬</a> <a href="https://github.com/panz3r/react-keycloak/pulls?q=is%3Apr+reviewed-by%3Apanz3r" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/panz3r/react-keycloak/commits?author=panz3r" title="Tests">⚠️</a> <a href="#example-panz3r" title="Examples">💡</a></td>
    <td align="center"><a href="https://ac-systems.be/"><img src="https://avatars0.githubusercontent.com/u/9079379?v=4" width="100px;" alt=""/><br /><sub><b>JannesD</b></sub></a><br /><a href="https://github.com/panz3r/react-keycloak/issues?q=author%3Ajannes-io" title="Bug reports">🐛</a> <a href="https://github.com/panz3r/react-keycloak/commits?author=jannes-io" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

---

If you found this project to be helpful, please consider buying me a coffee.

[![buy me a coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoff.ee/4f18nT0Nk)
