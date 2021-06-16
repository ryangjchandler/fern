import Fern from '../src/index'

document.addEventListener('alpine:initializing', () => {
    Fern(window.Alpine)
})
