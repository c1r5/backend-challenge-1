
type CacheValue = {
  value: any,
  expires_at: number
}

export default class Cache {
  private store = new Map()
  private ttl: number

  constructor(ttl = 60) {
    this.ttl = ttl * 1000
  }

  set(key: string, value: any) {
    this.store.set(key, { value, expire_at: Date.now() + this.ttl })
  }

  get(key: string) {
    const entry: CacheValue | undefined = this.store.get(key)
    if (!entry || entry.expires_at < Date.now()) {
      this.store.delete(key)
      return null
    }

    return entry.value
  }


  has(key: string) {
    return this.get(key) != null
  }
}