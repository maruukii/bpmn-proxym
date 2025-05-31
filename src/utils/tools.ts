import type { Location } from "react-router-dom";

export const formatTimestamp = (timestamp: number, language?: string) => {
  const date = new Date(timestamp);
  const timeZone = "Africa/Tunis";

  try {
    // Validate and normalize locale
    const locale = Intl.getCanonicalLocales(language || 'en_US')[0];

    return new Intl.DateTimeFormat(locale, {
      dateStyle: "long",
      timeStyle: "short",
      timeZone,
    }).format(date);
  } catch (error) {
    console.warn(`Invalid locale '${language}' - falling back to 'en-US'`, error);

    // Fallback with default locale
    return new Intl.DateTimeFormat('en-US', {
      dateStyle: "long",
      timeStyle: "short",
      timeZone,
    }).format(date);
  }
};
export const dateTimestamp = (timestamp: number, language?: string) => {
  const date = new Date(timestamp);
  const timeZone = "Africa/Tunis";

  try {
    // Validate and normalize locale
    const locale = Intl.getCanonicalLocales(language || "en_US")[0];

    return new Intl.DateTimeFormat(locale, {
      dateStyle: "long", // Only date, no time
      timeZone,
    }).format(date);
  } catch (error) {
    console.warn(`Invalid locale '${language}' - falling back to 'en-US'`, error);

    // Fallback with default locale
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "long", // Only date, no time
      timeZone,
    }).format(date);
  }
};
export function generateFlowableId(): string {
  // Generate a UUID using crypto API
  const uuid = crypto.randomUUID?.() || 
    "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (crypto.getRandomValues(new Uint8Array(1))[0] % 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });

  return `sid-${uuid.toUpperCase()}`;
}
export const isActive = (location:Location ,path: string) => {
    return location?.pathname?.toLowerCase()?.includes(path.toLowerCase());
  };
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
