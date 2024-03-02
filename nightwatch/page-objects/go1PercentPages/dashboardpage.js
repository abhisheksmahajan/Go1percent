const myActivitycommands={
    clickOnSettings(){
        return this.waitForElementPresent('.nav-item:nth-child(2)>div[role="button"]>a',10000)
        .click('.nav-item:nth-child(2)>div[role="button"]>a')
    },
    // clickOnSettings(){
    //     return this.waitForElementPresent('@profile')
    //     .click('@profile')
    // }
    
}
module.exports={
    url:"htt",
    commands:[myActivitycommands],
    elements:{
        setting: {
            selector: '//app-headers/div[1]/ul[1]/app-dropdown-wrapper[1]/div[1]/div[1]/li[1]/a[1]/div[1]/i[1]',
            locatorStrategy: 'xpath selector'
        },
        profile: {
            selector: '.d-flex.py-1.mt-1'
        }
        
        
        


    }
}