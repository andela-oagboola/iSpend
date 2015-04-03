describe('login page', function() {

  var loginUrl = "";

  beforeEach(function() {
    browser.get('/');
    loginUrl = browser.getCurrentUrl();
  });

  var login = function(username, password) {
    element(by.model('username')).sendKeys(username);
    element(by.model('password')).sendKeys(password);
    element(by.id('loginBtn')).click();
  };

  it('should display empty details message if username or password field is empty and remain on login page', function() {
    login("", "");
    expect(element(by.css('#emptyDetails')).isDisplayed()).toBe(true);
    expect(element(by.css('#wrongDetails')).isDisplayed()).toBe(false);
    expect(browser.getCurrentUrl()).toEqual(loginUrl);
  });

  it('should display invalid details message when username or password is wrong and remain on login page', function() {
    login("jhsdsjahaj", "hgashshsa");
    expect(element(by.css('#wrongDetails')).isDisplayed()).toBe(true);
    expect(element(by.css('#emptyDetails')).isDisplayed()).toBe(false);
    expect(browser.getCurrentUrl()).toEqual(loginUrl);
  });

  it('should redirect user to preference page if user details are correct', function() {
    login('lydex', 'lydex');
    var prefUrl = 'http://localhost:8001/#/users/preference';
    expect(browser.getCurrentUrl()).toEqual(prefUrl);
  });

  // it('should display the logged in user\'s name', function() {
  //   var browserWait = browser.wait(function() {
  //     login('lydex', 'lydex');
  //     return 
  //   });
  // });
});