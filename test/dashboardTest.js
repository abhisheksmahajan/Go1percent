
const LoginPage= browser.page.go1PercentPages.loginPage();
const Dashboardpage= browser.page.go1PercentPages.dashboardpage();
describe('Dashboard Functionality',function(){
    before(function(browser){
        LoginPage.navigate()
        browser.windowMaximize()
    })
it('Verify user should be able to see the all the activities on the My activity',async(browser)=>{
    LoginPage.login('testadmin','testadmin')
    await browser.execute('document.querySelectorAll(".material-icons.user-icon")[1].click();');
    browser.execute('document.querySelector(".d-flex.py-1.mt-1").click();');
    
    Dashboardpage.expect.element('.tab-icon').visible

   
})
// it('Verify appropriate points should be added according to the contribution ',async(browser)=>{
    
    
//      browser.elements('.px-2.feed-points', function(result) {
//        console.log('Number of elements:', result.value.length);
    
//      })
    
//   })
it('Verify that the user can able to see the time the activity was done on all Activity',async(browser)=>{
    browser.elements('css selector' , '.container.right' , function(result){
        const numberOfActivities = result.value.length;
        for(let i=1 ; i<=numberOfActivities ; i++){
            const activityTimeSelector = '.display-time';
            browser.assert.visible(activityTimeSelector);   
    Dashboardpage.expect.element('.tab-icon').visible
        }
    })
    
})
// it('Verify that the user can able to scroll down and see all the activities.',async(browser)=>{
//     LoginPage.login('testadmin','testadmin')
//     await browser.execute('document.querySelectorAll(".material-icons.user-icon")[1].click();');
//     browser.execute('document.querySelector(".d-flex.py-1.mt-1").click();');
//     Dashboardpage.expect.element('.tab-icon').visible
    
// })

})