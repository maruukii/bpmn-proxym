/** Empty function */
export function noop(): void {}

/**
 * Check if value is not null, undefined
 * @param val - value to check
 * @returns boolean
 */
export function notNull<T>(val: T | undefined | null): val is T {
  return val !== undefined && val !== null
}

/**
 * Get raw type of a value
 * @param value - value to get type of
 * @returns 'string' | 'array' | 'boolean' | 'number' | 'object' | 'function'
 */
export function getRawType(
  value: unknown
): 'string' | 'array' | 'boolean' | 'number' | 'object' | 'function' | 'null' | 'undefined' {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase() as any
}

/**
 * Check if a value is not empty
 * @param val - value to check
 * @returns boolean
 */
export function notEmpty(val: unknown): boolean {
  if (!notNull(val)) {
    return false
  }
  const type = getRawType(val)

  if (type === 'array') {
    return (val as unknown[]).length > 0
  }
  if (type === 'object') {
    return Reflect.ownKeys(val as object).length > 0
  }
  return true
}
