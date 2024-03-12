const myActivitycommands = {
  clickOnSettings() {
    return this.waitForElementPresent(
      '.nav-item:nth-child(2)>div[role="button"]>a',
      10000,
    ).click('.nav-item:nth-child(2)>div[role="button"]>a');
  },
  searchEmployee(emp) {
    return this.waitForElementVisible("#Search")
      .setValue("#Search", emp)
      .waitForElementVisible(".text-color.name-text")
      .execute(function () {
        document.querySelector(".text-color.name-text").click();
      });
  },

  // clickOnSettings(){
  //     return this.waitForElementPresent('@profile')
  //     .click('@profile')
  // }
};
module.exports = {
  url: "https://nashtechglobal.qa.go1percent.com/",
  commands: [myActivitycommands],
  elements: {
    setting: {
      selector:
        "//app-headers/div[1]/ul[1]/app-dropdown-wrapper[1]/div[1]/div[1]/li[1]/a[1]/div[1]/i[1]",
      locatorStrategy: "xpath selector",
    },
    profile: {
      selector: ".d-flex.py-1.mt-1",
    },
    Activitypts: {
      selector: ".px-2.feed-points",
    },
    welcomeText: {
      selector: ".font-weight-light.overall-txt-color",
    },
    languagedropdown: {
      selector: 'div[class="dropdown-select"]',
    },
    french: {
      selector: ".dropdown-list__item:nth-child(2)",
    },
    english: {
      selector: ".dropdown-list__item:nth-child(1)",
    },
    modeButton: {
      selector: "ul>li>.nav-link.text-body.font-weight-bold.px-2.mb-1",
    },
    dailymotivComment: {
      selector: ".feeds.col-lg-12.col-12:nth-child(1)>.d-flex.flex-column.mx-5",
    },
    commentBox: {
      selector:
        'input[placeholder="Add your comment here... Press ENTER to submit"]',
    },
  },
};
