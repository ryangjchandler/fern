> ✨ Help support the maintenance of this package by [sponsoring me](https://github.com/sponsors/ryangjchandler).

# Fern

Persisted global stores for Alpine 3.x.

## Installation

Since Fern directly extends the global `Alpine` object, the recommended installation methods are NPM or a `module` `<script>` tag.

### NPM

Install Fern by running the following command:

```bash
npm install @ryangjchandler/fern
```

Inside of your main script, add the following code:

```js
import Alpine from 'alpinejs'
import Fern from '@ryangjchandler/fern'

Alpine.plugin(Fern)

Alpine.start()
```

### `<script type="module">`

Add the following `<script>` to the `<head>` of your document **before** including Alpine:

```html
<script type="module">
    import Fern from 'https://cdn.jsdelivr.net/npm/@ryangjchandler/alpine-tooltip@0.x.x/dist/module.esm.js'

    document.addEventListener('alpine:initializing', () => {
        window.Alpine.plugin(Fern)
    })
</script>
```

## Usage

Fern adds a new `persistedStore` method to the global `Alpine` object. The method's definition and usage is identical to `Alpine.store()`:

```js
Alpine.plugin(Fern)

Alpine.persistedStore('counter', 0)

Alpine.start()
```

Creating a `persistedStore` will register a normal store with Alpine and keep track of all changes, pushing them back to `localStorage` when updated.

```html
<div x-data>
    <p x-text="$store.counter"></p>
    <button x-on:click="$store.counter++">Increment</button>
</div>
```

If you're using the `<script type="module">` installation method, be sure to make your `persistedStore` calls after registering Fern.

```js
    document.addEventListener('alpine:initializing', () => {
        window.Alpine.plugin(Fern)

        window.Alpine.persistedStore('counter', 0)
    })
```

## Versioning

This projects follow the [Semantic Versioning](https://semver.org/) guidelines.

## License

Copyright (c) 2021 Ryan Chandler and contributors

Licensed under the MIT license, see [LICENSE.md](LICENSE.md) for details.
