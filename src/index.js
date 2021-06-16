export default function (Alpine) {
    if (Alpine.hasOwnProperty('persistedStores') && typeof Alpine.persistedStores === 'function') {
        return;
    }

    Alpine.persistedStores = function () {
        console.log('test')
    }
}