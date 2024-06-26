// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Add Items to Cart and Place Order', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  async function waitForWindow(timeout = 2) {
    await driver.sleep(timeout)
    const handlesThen = vars["windowHandles"]
    const handlesNow = await driver.getAllWindowHandles()
    if (handlesNow.length > handlesThen.length) {
      return handlesNow.find(handle => (!handlesThen.includes(handle)))
    }
    throw new Error("New window did not appear before timeout")
  }
  it('Add Items to Cart and Place Order', async function() {
    await driver.get("http://localhost:3000/restaurantdetailpagedesktop")
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    await driver.executeScript("window.scrollTo(0,6.400000095367432)")
    await driver.findElement(By.css(".focus\\3Ascale-300")).click()
    await driver.findElement(By.css(".h-6")).click()
    await driver.findElement(By.css(".bg-orange-600_cc:nth-child(2) > .ml-\\[26px\\]")).click()
    vars["windowHandles"] = await driver.getAllWindowHandles()
    await driver.findElement(By.css(".border-black-1900_1c > span:nth-child(2)")).click()
    vars["win6332"] = await waitForWindow(2000)
    await driver.switchTo().window(vars["win6332"])
  })
})
