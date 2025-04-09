import { getRawType, notNull } from './tools'

const isArray = (obj: unknown): obj is unknown[] => getRawType(obj) === 'array'
const isNullOrUndefined = (obj: unknown): boolean => !notNull(obj)

interface Listener extends Function {
  context?: any
  once?: boolean
}

type EventMap = { [key: string]: Listener | Listener[] }

class EventEmitter {
  private static _events: EventMap = {}

  constructor() {}

  private static _addListener(type: string, fn: Listener, context?: any, once?: boolean) {
    if (typeof fn !== 'function') {
      throw new TypeError('fn must be a function')
    }

    fn.context = context
    fn.once = !!once

    const event = EventEmitter._events[type]

    if (isNullOrUndefined(event)) {
      EventEmitter._events[type] = fn
    } else if (typeof event === 'function') {
      EventEmitter._events[type] = [event, fn]
    } else if (isArray(event)) {
      event.push(fn)
    }

    return EventEmitter
  }

  static addListener(type: string, fn: Listener, context?: any) {
    return EventEmitter._addListener(type, fn, context)
  }

  static hasListener(type: string, fn: Listener): boolean {
    const events = EventEmitter._events[type]
    if (isArray(events)) {
      return events.indexOf(fn) > -1
    }
    return typeof events === 'function' && events === fn
  }

  static on(type: string, fn: Listener, context?: any) {
    return EventEmitter.addListener(type, fn, context)
  }

  static once(type: string, fn: Listener, context?: any) {
    return EventEmitter._addListener(type, fn, context, true)
  }

  static emit(type: string, ...args: any[]): boolean {
    if (isNullOrUndefined(type)) {
      throw new Error('emit must receive at least one argument')
    }

    const event = EventEmitter._events[type]

    if (isNullOrUndefined(event)) return false

    if (typeof event === 'function') {
      event.call(event.context || null, ...args)
      if (event.once) {
        EventEmitter.removeListener(type, event)
      }
    } else if (isArray(event)) {
      // Copy array to prevent mutation during iteration
      const listeners = [...event]
      listeners.forEach((e) => {
        e.call(e.context || null, ...args)
        if (e.once) {
          EventEmitter.removeListener(type, e)
        }
      })
    }

    return true
  }

  static removeListener(type: string, fn: Listener) {
    if (isNullOrUndefined(EventEmitter._events)) return EventEmitter
    if (isNullOrUndefined(type)) return EventEmitter

    if (typeof fn !== 'function') {
      throw new Error('fn must be a function')
    }

    const events = EventEmitter._events[type]
    if (!events) {
      return EventEmitter
    }

    if (typeof events === 'function') {
      if (events === fn) {
        delete EventEmitter._events[type]
      }
    } else if (isArray(events)) {
      const index = events.indexOf(fn)
      if (index !== -1) {
        events.splice(index, 1)
        if (events.length === 1) {
          EventEmitter._events[type] = events[0] 
        }
      }
    }

    return EventEmitter
  }
}

export default EventEmitter
