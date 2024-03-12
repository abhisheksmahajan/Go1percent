const global = browser.globals;
const Dashboardpage = browser.page.go1PercentPages.dashboardpage();
const LoginPage = browser.page.go1PercentPages.loginPage();
describe("Dashboard my dashboard", function () {
  before(function (browser) {
    LoginPage.navigate();
    browser.windowMaximize();
    LoginPage.login(`${global.userName}`, `${global.password}`);
    console.log(`${global.url}`);
  });
  after(function (browser) {
    browser.quit;
  });

  it("Verify user should be able to see Welcome text", async (browser) => {
    Dashboardpage.expect.element("@welcomeText").to.be.visible;
  });
  it("Verify user should be able to see all fields in dashboard page ", async (browser) => {}
  );
  it("Verify user should be able to navigate profile page through Profile picture ", async (browser) => {
    await browser.execute(
      'document.querySelector(".material-symbols-outlined.hex").click();'
    );
    Dashboardpage.assert.urlContains("/my-profile");
    browser.back();
  });
  it("Verify user should be able Search a Nasher", async (browser) => {
    Dashboardpage.searchEmployee("Ankur Thakur")
      .waitForElementVisible(
        "div[class='d-flex flex-column align-items-center'] div h3"
      )
      .expect.element(
        "div[class='d-flex flex-column align-items-center'] div h3"
      )
      .text.to.contain("Ankur Thakur");
    browser.back();
  });
  it("Verify user should be able to Change to French Language from dropdown ", async (browser) => {
    await browser.execute(
      'document.querySelector(".dropdown-list__item:nth-child(2)").click();'
    );
    Dashboardpage.expect
      .element('div[class="dropdown-select"]')
      .text.to.contain("French");
  });
  it("Verify user should be able to Change to English Language from dropdown ", async (browser) => {
    await browser.execute(
      'document.querySelector(".dropdown-list__item:nth-child(1)").click();'
    );
    Dashboardpage.expect
      .element('div[class="dropdown-select"]')
      .text.to.contain("English");
  });
  it("Verify user should be able to Change Application view to Light Mode ", async (browser) => {
    await browser.execute(
      'document.querySelector("ul>li>.nav-link.text-body.font-weight-bold.px-2.mb-1").click();'
    );

    Dashboardpage.expect
      .element("ul>li>.nav-link.text-body.font-weight-bold.px-2.mb-1>i")
      .text.to.contain("dark_mode");
  });

  it("Verify user should be able to Change Application view to Dark Mode", async (browser) => {
    await browser.execute(
      'document.querySelector("ul>li>.nav-link.text-body.font-weight-bold.px-2.mb-1").click();'
    );

    Dashboardpage.expect
      .element("ul>li>.nav-link.text-body.font-weight-bold.px-2.mb-1>i")
      .text.to.contain("light_mode");
  });
  it("Verify user should be able to click see all button for Daily motivation tile", async (browser) => {
    await browser.execute(
      'document.querySelector(".btn.px-3.py-1.all-btn.border-button").click();'
    );
    Dashboardpage.expect.element(".inline.all-cards-pos.col-lg-5.mt-4").to.be
      .visible;
  });

  it("Verify user should be able to see Last Contribution ", async (browser) => {
    Dashboardpage.expect.element(
      ".card.col-lg-5.overall-card-height-new:nth-child(2)"
    ).to.be.visible;
  });
  it("Verify user should be able to see Contribution on Motivation tile", async (browser) => {
    Dashboardpage.expect.element(
      ".feeds.col-lg-12.col-12:nth-child(1)>.d-flex.flex-column.mx-5"
    ).to.be.visible;
  });

  it("Verify user should be able to Like specific Contribution", async (browser) => {
    await browser.execute(
      'document.querySelector(".feeds.col-lg-12.col-12:nth-child(1)>.d-flex.flex-column.mx-5>div>a:nth-child(1)>span:nth-child(1)").click();'
    );
    Dashboardpage.expect
      .element(
        ".feeds.col-lg-12.col-12:nth-child(1)>.d-flex.flex-column.mx-5>div>a:nth-child(1)>span:nth-child(2)"
      )
      .text.to.contain("1");
  });

  it("Verify user should be able to Dislike specific Contribution ", async (browser) => {
    await browser.execute(
      'document.querySelector(".feeds.col-lg-12.col-12:nth-child(1)>.d-flex.flex-column.mx-5>div>a:nth-child(2)>span:nth-child(1)").click();'
    );
    Dashboardpage.expect
      .element(
        ".feeds.col-lg-12.col-12:nth-child(1)>.d-flex.flex-column.mx-5>div>a:nth-child(2)>span:nth-child(2)"
      )
      .text.to.contain("1");
  });
  //   it('Verify user should be able to send a Comment on specific Contribution',async(browser)=>{
  //     await browser.execute('document.querySelector(".feeds.col-lg-12.col-12:nth-child(1)>.d-flex.flex-column.mx-5>div>a:nth-child(3)>span:nth-child(1)").click();');
  //     Dashboardpage
  //     .setValue('[formcontrolname="comment"]', [
  //         "Test Demo",
  //         browser.Keys.ENTER,
  //       ]);

  //       browser.pause(2000)
  //       Dashboardpage.expect.element('div[class="comment-text"]').text.to.contain('Test Demo')
  //   })

  it("Verify use should be able to Share specific Contribution on social media ", async (browser) => {
    await browser.execute(
      'document.querySelector(".feeds.col-lg-12.col-12:nth-child(1)>.d-flex.flex-column.mx-5>div>div:nth-child(4)>button").click();'
    );
    browser.execute(
      'document.querySelector(".sb-wrapper.sb-show-icon.sb-twitter").click()'
    );

    browser.windowHandles(function (result) {
      const originalHandle = result.value[0];
      const handle = result.value[1];
      this.switchWindow(handle).assert.urlContains("/twitter.com/");
      this.switchWindow(originalHandle);
    });
  });

  it("Verify user should be able to navigate Profile page through Settings button ", async (browser) => {
    await browser.execute(
    'document.querySelector("ul[class="navbar-nav justify-content-end"] app-dropdown-wrapper div[class="position-relative"] div[class="pt-2"] li[class="icon nav-item dropdown px-2 d-flex align-items-center justify-content-center"] a[class="nav-link text-body p-0 text-white"] div i[class="material-icons user-icon"]").click();');
    browser.execute('document.querySelector("div[class="d-flex py-1 mt-1"] span").click()')
    .pause()
   });
  it("Verify user should be able to Dislike specific Contribution ", async (browser) => {});
  it("Verify user should be able to Dislike specific Contribution ", async (browser) => {});
  it("Verify user should be able to Dislike specific Contribution ", async (browser) => {});
});
