import { html, fixture, expect } from '@open-wc/testing';

import { DropzoneElement } from '../src/drop-zone';
import '../drop-zone.js';

describe('DropZone', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el: DropzoneElement = await fixture(html` <drop-zone></drop-zone> `);

    expect(el.title).to.equal('Hey there');
  });

});
