
let baseUrl;

/**
 * Get the base URL of the document
 */
export function getBaseUrl(cache = true) {
	if (cache && baseUrl) {
		return baseUrl;
	}
	// We need to get rid of anything after the first hash in the URL,
	// or we'll just keep adding hashes to the end when we navigate
	baseUrl = document.baseURI.split('#').shift();
	return baseUrl;
}
