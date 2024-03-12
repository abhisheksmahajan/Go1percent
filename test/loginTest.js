

const LoginPage= browser.page.go1PercentPages.loginPage();
describe('Login Functinality',function(){
   
    before(function(){ 

    LoginPage.navigate()
    browser.windowMaximize()                
   // browser.resizeWindow(1400, 1000) 
 
  });
   
    after(async(browser)=>browser.quit());

it(' Verify "Go1Percent" logo, carousel images, carousel caption and the footer message ',function(browser){
    
    LoginPage.expect.element('@logo').to.be.visible
    LoginPage.expect.element('@carouselImg').to.be.visible
    LoginPage.expect.element('@carousalCaption').to.be.visible
    LoginPage.expect.element('@footer').to.be.visible

})
 
it(' Verify that tag line with text "Get 1% Better Everyday" is displayed ',function(browser){
    
    LoginPage.expect.element('@carousalCaption').to.be.visible
    
    
})
it(' Verify that carousel image changes while clicking on carousel button ',function(browser){
    
    LoginPage.clickOnSlider();
    LoginPage.expect.element('@resultImg').to.be.visible
    
    
})
it('Verify that login page heading contains text "Sign in to Go 1%" is displayed',function(browser){
    
    LoginPage.expect.element('@title').to.be.visible
    
    
})
it('Verify that clicking on the Microsoft logo redirects to the Microsoft login page ',function(browser){
    
    LoginPage.clickOnTeams();
    LoginPage.getTitle(function(title) {
        console.log('Title:', title);
      })
    LoginPage.assert.title('Sign in to your account')

    browser.back();

    
    
})
it('Verify that specific text between login options is present on the web page',function(browser){
    
    LoginPage.expect.element('@textBetweenloginOption').text.to.contain('or do it via E-mail');
    
    
    
})
it('Verify clicking on the "Terms of Use" link opens a new page with the terms of use ',function(browser){
    
    LoginPage.clickOnTermsofuse();
    browser.windowHandles(function(result) {
        const originalHandle = result.value[0];
        const handle = result.value[1]; 
        this.switchWindow(handle)
        .assert.urlContains('/terms-of-use');
        this.switchWindow(originalHandle);
    })
})
it('Verify clicking on the "privacy Policy" link opens a new page with the terms of use ',function(browser){
    LoginPage.getTitle(function(title) {
           console.log('Title:', title);
           })
    LoginPage.clickOnPrivacypolicy();
    browser.windowHandles(function(result) {
        const originalHandle = result.value[0];
        const handle = result.value[2]; 
        this.switchWindow(handle)
        .assert.urlContains('/privacy-policy');
        this.switchWindow(originalHandle);
    })
}) 
it('Verify that login fails with invalid credentials and an alert message is displayed',function(browser){
    
    LoginPage.login('abcd@121','abcd@123')
    LoginPage.expect.element('@erromsg').to.be.visible;
    
})
 

it('Verify the forgot Password functionality',function(browser){
    LoginPage.getTitle(function(title) {
        console.log('Title:', title);
        })

            LoginPage.doForgotPassword();
            LoginPage.expect.element('.pf-c-alert__title.kc-feedback-text').to.be.visible
            
            
            
})


it('Verify remember me checkbox is selected during login',function(browser){
    LoginPage.getTitle(function(title) {
        console.log('Title:', title);
        })

    LoginPage.clickonRememberme()
    browser.pause(2000)
   // LoginPage.expect.element('@remaberMeCheckbox').to.be.selected
   LoginPage.expect.element('#rememberMe').to.be.selected.before(100)
    
})
it('Verify successful login with valid credentials',function(browser){
    
    LoginPage.login('testemployee','testemployee')
    LoginPage.assert.urlContains('/my-dashboard');
  
})



})