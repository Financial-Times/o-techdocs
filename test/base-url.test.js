/* eslint-env mocha, sinon, proclaim */

import {getBaseUrl} from './../src/js/base-url';
import * as assert from 'proclaim';
import sinon from 'sinon/pkg/sinon';

sinon.assert.expose(assert, {
	includeFail: false,
	prefix: ''
});

describe('base-url', () => {
	let testArea;

	before(() => {
		document.body.innerHTML += '<div id="test-area"></div>';
		testArea = document.getElementById('test-area');
	});

	afterEach(() => {
		testArea.innerHTML = '';
		[...document.head.querySelectorAll('base')].map(base => base.remove());
	});

	describe('getBaseUrl()', () => {

		it('returns the baseURI of the document', () => {
			assert.strictEqual(getBaseUrl(false), document.baseURI);
		});

		describe('when a base element is present (and is set to an absolute URL)', () => {

			beforeEach(() => {
				const base = document.createElement('base');
				base.setAttribute('href', '/foo/bar');
				document.head.appendChild(base);
			});

			it('returns the base element href resolved against the current URL', () => {
				assert.strictEqual(getBaseUrl(false), `${window.location.protocol}//${window.location.host}/foo/bar`);
			});

		});

		describe('when a base element is present (and is set to a relative URL)', () => {

			beforeEach(() => {
				const base = document.createElement('base');
				base.setAttribute('href', 'foo');
				document.head.appendChild(base);
			});

			it('returns the base element href resolved against the current URL', () => {
				assert.strictEqual(getBaseUrl(false), `${window.location.protocol}//${window.location.host}/foo`);
			});

		});

		describe('when a base element is present (and contains hashes)', () => {

			beforeEach(() => {
				const base = document.createElement('base');
				base.setAttribute('href', 'foo#bar#baz');
				document.head.appendChild(base);
			});

			it('returns the base element href resolved against the current URL with hashes removed', () => {
				assert.strictEqual(getBaseUrl(false), `${window.location.protocol}//${window.location.host}/foo`);
			});

		});

	});

});
