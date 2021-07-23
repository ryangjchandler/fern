export default function (Alpine) {
    if (Alpine.hasOwnProperty('persistedStored') && typeof Alpine.persistedStore === 'function') {
        return;
    }

    window.__ferns = {}

    Alpine.persistedStore = function (name, value, storage = window.localStorage) {
        let stored = storage.getItem(`__fern_${name}`)

        if (! [null, undefined].includes(stored)) {
            const storedValue = JSON.parse(stored)

            const diff = Object.entries(value).reduce((acc, [key, value]) => {
                if (storedValue.hasOwnProperty(key)) return acc
                acc[key] = value
                return acc
            }, {})

            value = Object.assign(storedValue, diff)
        }

        Alpine.store(name, value)

        window.__ferns[name] = Alpine.effect(() => {
            const json = JSON.stringify(
                Alpine.store(name)
            )

            storage.setItem(`__fern_${name}`, json)
        })
    }
}
