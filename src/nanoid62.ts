import { customAlphabet } from "nanoid";

/**
 * Generate a secure URL-friendly unique ID.
 *
 * @param size Size of the ID. The default size is 22.
 * @returns A random string.
 */
export const nanoid62 = customAlphabet(
	"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
	22,
);
