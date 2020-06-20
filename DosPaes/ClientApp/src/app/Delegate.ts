export interface Delegate<T> {
    (...args: any[]): T;
  }