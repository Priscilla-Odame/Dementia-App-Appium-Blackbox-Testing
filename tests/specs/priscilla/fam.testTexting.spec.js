describe("Sending message from Companion app to senior member directly : ", () => {
  //SubTest1
  it("should click senior member name", () => {
    const seniorNameBtn = $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.view.View[6]/android.view.View[1]/android.view.View[2]/android.view.View[1]/android.view.View[1]"
    );
    seniorNameBtn.waitForDisplayed({
      timeout: 50000,
    });
    return seniorNameBtn.click();
  });

  //SubTest2
  it("should select textfield and input message", () => {
    const messageTextfield = $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.view.View[2]/android.view.View[2]/android.view.View[1]/android.widget.EditText"
    );
    messageTextfield.waitForDisplayed({ timeout: 50000 });
    messageTextfield.click();
    return messageTextfield.setValue("Test sending message from companion application to senior member directly");
  });

  // //SubTest3
  it("should click send button", () => {
    const sendBtn = $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.view.View[2]/android.view.View[2]/android.view.View[2]/android.view.View[1]/android.widget.Button"
    );
    return sendBtn.click();
    });

  // //SubTest4

  it("should wait for internet to resend message",() => {

    const time = $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[10]/android.view.View/android.view.View[2]"
    );

    time.waitForDisplayed({
      timeout: 500000,
    });
    
  });

  it("should get the time stamp", () => {
    var timeStamp = $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View/android.view.View/android.view.View[4]/android.view.View[last ()]/android.view.View[3]"
      );
    var timeStampValue = timeStamp.getText();
    
    expect(timeStamp).toBePresent();
    console.log("Timestamp: ",timeStampValue);

  })


  it("should take screenshot", () => {
    driver.saveScreenshot("./photos/screenshot.png")
  })


  // //SubTest5
  // it("should click back button", () => {
  //   const backBtn = $(
  //     "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[1]/android.view.View[2]/android.view.View[1]/android.view.View/android.widget.Button"
  //   );
  //   return backBtn.click();
  // });

//   after(() => {
//     browser.pause(50000);
//   });
});
