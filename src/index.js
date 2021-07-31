export default function (Alpine) {
    if (Alpine.hasOwnProperty('persistedStored') && typeof Alpine.persistedStore === 'function') {
        return
    }

    window.__ferns = {}

    Alpine.persistedStore = function (name, value, storage = window.localStorage) {
        const stored = storage.getItem(`__fern_${name}`)

        if (![null, undefined].includes(stored)) {
            const storedValue = JSON.parse(stored)

            if (typeof storedValue == 'boolean') value = storedValue
            
            const diff = Object.entries(storedValue).reduce((acc, [key, val]) => {
                if (!storedValue.hasOwnProperty(key) || Object.getOwnPropertyDescriptor(value, key).get) return acc
                acc[key] = val
                return acc
            }, {})

            value = Object.assign(value, diff)

        }

        Alpine.store(name, value)

        window.__ferns[name] = Alpine.effect(() => {
            const json = JSON.stringify(
                Alpine.store(name),
            )

            storage.setItem(`__fern_${name}`, json)
        })
    }
}
