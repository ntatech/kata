import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async navigateToPage(page:string): Promise<unknown> {
    return browser.get(browser.baseUrl + page);
  }


  async getTitleText(): Promise<string> {
    return element(by.css('app-root .container h2')).getText();
  }


  async getInputBox(): Promise<any> {
    return element(by.css('ng-pristine ng-valid ng-touched'));
  }
  
  
}
