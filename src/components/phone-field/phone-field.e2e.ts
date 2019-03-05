import { newE2EPage } from '@stencil/core/testing';

describe('phone-field', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<phone-field></phone-field>');
    const element = await page.find('phone-field');
    expect(element).toHaveClass('hydrated');
  });
});
