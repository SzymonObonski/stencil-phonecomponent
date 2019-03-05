import { newE2EPage } from '@stencil/core/testing';
import {COUNTRY_CODES} from '../../utils/country-codes';

describe('country-code', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<country-code></country-code');
    const element = await page.find('country-code');
    expect(element).toHaveClass('hydrated');
  });

  describe('phone code attribute', async () => {
    const page = await newE2EPage();
    await page.setContent('<country-code></country-code>');
    const component = await page.find('country-code');
    const select  = await page.find('country-code >>> select');

    it('set it to fifth number from COUNTRY_CODES array', async () => {

      component.setAttribute('phone-code', COUNTRY_CODES[4].dial_code);
      await page.waitForChanges();
  
      const value = await select.getProperty('value');
  
      expect(value).toEqual( COUNTRY_CODES[4].dial_code);
    });

    it('try to set it to abc and expect select to be empty', async () => {
      component.setAttribute('phone-code', 'abc');
      await page.waitForChanges();
  
      const value = await select.getProperty('value');
  
      expect(value).toBe('');
    });
  });
});
