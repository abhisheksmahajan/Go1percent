const pageCommands = {
    clickOnSlider() {
      return this.waitForElementVisible('@corousalSlider', 1000)
        .click('@corousalSlider');
     },
     clickOnTeams(){
      return this.waitForElementVisible('@teamsLogo',1000)
      .click('@teamsLogo')
     },
     clickOnTermsofuse(){
      return this.waitForElementVisible('@termstoUse',1000)
      .click('@termstoUse')
     },
     clickOnPrivacypolicy(){
      return this.waitForElementVisible('@privacyPolicy',1000)
      .click('@privacyPolicy')
     },
     doForgotPassword(){
      return this.click('@forgotPassword')
      .waitForElementVisible('@userName',1000)
      .setValue('@userName','abhi@2644')
      .click('#kc-form-buttons > input');
     },
     clickonRememberme(){
      return this.waitForElementVisible('@remaberMeCheckbox',1000)
      .click('@remaberMeCheckbox')
      
     },
     login(username,password){
        return this.setValue('@userName',username)
        .setValue('@password',password)
        .click('@submit')
     }

  };
  
  module.exports = {
    url:'https://nashtechglobal.qa.go1percent.com/',
  
    commands: [
      pageCommands
    ],
  
    elements: {
      erromsg: {
        selector:'#input-error'
      },
  
      logo: {
        selector:'.go1up-logo'
      },
      carouselImg: {
        selector:'#myCarousel > div > div:nth-child(1) >img'
      },
      footer: {
        selector:'.tagsss'
      },
      carousalDescription: {
        selector:'#myCarousel > div > div:nth-child(1) >div>p'
      },
      carousalCaption: {
        selector:'#myCarousel > div > div:nth-child(1) >div>h3'
      },
      teamsLogo: {
        selector:'.kc-social-provider-logo.kc-social-gray.fa-brands.fa-windows'
      },
      corousalSlider: {
        selector:'.carousel-indicators>li:nth-of-type(4)'
      },
      remaberMeCheckbox: {
        selector:'.checkmark'
      },
      forgotPasswordLink: {
        selector:'.forget-pass>span>a'
      },
      title: {
        selector:'#kc-page-title'
      },
      userName:{
        selector:'#username'
      },
      password:{
        selector:'#password'
      },
      submit:{
        selector:'#kc-login'
      },
      resultImg:{
        selector:'#myCarousel > div > div:nth-child(4) >img'
      },
      textBetweenloginOption:{
        selector:'#kc-social-providers>h4'
      },
      termstoUse:{
        selector:'.term-privacy>a:nth-child(1)'      
      },
      privacyPolicy:{
        selector:'.term-privacy>a:nth-child(2)'
      },
      forgotPassword:{
        selector:'.forget-pass'
      }












      
    }
  };
  