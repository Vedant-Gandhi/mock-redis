const cache = new Map()

export function add(key, value) {
    cache.set(key, value)
}

export function remove(key) {
    return cache.delete(key)
}

export function get(key) {
    return cache.get(key)
}

export function clear() {
    cache.clear()
}
