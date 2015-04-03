describe('preference page', function() {

  it('should display the name of the current user on the welcome banner', function() {
    browser.get('/');
    element(by.model('username')).sendKeys('lydex');
    element(by.model('password')).sendKeys('lydex');
    element(by.id('loginBtn')).click();
    expect(element(by.binding('name')).getText()).toBe('lydex');
    expect(element(by.id('welcome')).element(by.tagName('h4')).getText()).toBe('Welcome lydex');
  });

  // it('should redirect to expense manager when expense manager button is clicked');
});