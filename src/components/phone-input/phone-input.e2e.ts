import { newE2EPage } from '@stencil/core/testing';

describe('phone-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<phone-input></phone-input>');
    const element = await page.find('phone-input');
    expect(element).toHaveClass('hydrated');
  });

  describe('phone number attribute', async () => {
    const page = await newE2EPage();
    await page.setContent('<phone-input></phone-input>');
    const component = await page.find('phone-input');
    const input  = await page.find('phone-input >>> input');

    it('set it to 1234 number', async () => {

      component.setAttribute('phone-number', '1234');
      await page.waitForChanges();
  
      const value = await input.getProperty('value');
  
      expect(value).toEqual(`1234`);
    });
    
    it('try to set it to abc and expect input to be empty', async () => {
      component.setAttribute('phone-number', 'abc');
      await page.waitForChanges();
  
      const value = await input.getProperty('value');
  
      expect(value).toBe('');
    });
  });
});
