import { customAlphabet } from "nanoid";

/**
 * Generate secure URL-friendly unique ID.
 *
 * By default, the ID will have 22 symbols to have a collision probability
 * similar to UUID v4.
 *
 * @param size Size of the ID. The default size is 22.
 * @returns A random string.
 */
export const nanoid62 = customAlphabet(
	"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
	22,
);
