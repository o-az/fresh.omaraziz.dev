export const randomArrayElement = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)] as T;
