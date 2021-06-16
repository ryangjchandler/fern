export default function (Alpine) {
    if (Alpine.hasOwnProperty('persistedStored') && typeof Alpine.persistedStore === 'function') {
        return;
    }

    window.__ferns = {}

    Alpine.persistedStore = function (name, value) {
        let stored = localStorage.getItem(`__fern_${name}`)

        if (! [null, undefined].includes(stored)) {
            const methods = Object.entries(value).reduce((acc, [key, value]) => {
                if (typeof value !== 'function') return acc
                acc[key] = value
                return acc
            }, {})

            value = Object.assign(JSON.parse(stored), methods)
        }

        Alpine.store(name, value)

        window.__ferns[name] = Alpine.effect(() => {
            const json = JSON.stringify(
                Alpine.store(name)
            )

            localStorage.setItem(`__fern_${name}`, json)
        })
    }
}
