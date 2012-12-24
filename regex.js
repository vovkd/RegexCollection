var
	/**
	 * Email Pattern
	 * Validating email is only 100% sure by attempting to send an email
	 * This pattern will catch the most common errors
	 *
	 * @type {RegExp}
	 */
	EMAIL = /^(?!.*([.])\1)[^.][^@]+[^.]@[^\s@]+$/,
	/**
	 * Canadian Postal Code Pattern
	 * Validating canadian postal code
	 *
	 * @type {RegExp}
	 */
	POSTAL_CODE = /^[a-ceghj-nprstvxy]\d[a-ceghj-nprstv-z](\s)?\d[a-ceghj-nprstv-z]\d/i;