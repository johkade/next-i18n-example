This a repo showcasing the setup of i18n without internationalized routes in next.js

### install it

&rarr; clone and install

### run it

```bash
npm run dev
# or
yarn dev
```

### how it's done

- get the `accept-language` header in `getServerSideProps`
- parse it with [resolve-accept-language](https://github.com/Avansai/resolve-accept-language) to get the locale

### caveats

- [resolve-accept-language](https://github.com/Avansai/resolve-accept-language) only works with full locales (like `de-DE`). However, it can still work, if the country-code is not set by the browser.

### Features:

- [x] use t() with useTranslation-hook
- [x] use t() outside of component
