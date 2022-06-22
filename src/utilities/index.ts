export async function readFile(filepath: string): Promise<string> {
  try {
    const path = new URL(filepath, import.meta.url);
    return await Deno.readTextFile(path);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : `Encoutered an error: ` + error;
    throw new Error(errorMessage);
  }
}

export const randomArrayElement = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)] as T;

export const removeFalsy = <T>(object: T): NonNullable<T> => JSON.parse(JSON.stringify(object));

export const getTimestamp = () => {
  const [timestamp] = new Date().toISOString().split('T');
  return timestamp;
};

export const nonNullable = <T>(value: T): value is NonNullable<T> => value !== null && value !== undefined;

export const dateStringToHuman = (date: string) => {
  const datifiedDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(datifiedDate);
};

export function htmlEscape(html: string) {
  return html.replace(/[&<>'"]/g, (tag) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '\'': '&#39;',
    '"': '&quot;',
  }[tag] || tag));
}
