
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://localhost:4000/')
})

afterAll(async () => {
    await driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test("Clicking the Draw button displays the div with id = 'choices'", async () => {
    const drawBtn = await driver.findElement(By.id("draw"))
    drawBtn.click()
    const choices = await driver.findElement(By.id("choices"))
    const tagName = await choices.getTagName()
    expect(tagName).toEqual("div")
})

test("Clicking an 'Add to Duo' button displays the div with id = 'player-duo'", async () => {
    const drawBtn = await driver.findElement(By.id("draw"))
    drawBtn.click()
    await driver.sleep(2000)
    const addBtn = await driver.findElement(By.className("bot-btn"))
    addBtn.click()
    const playerDuo = await driver.findElement(By.id("player-duo"))
    const tagName = await playerDuo.getTagName()
    expect(tagName).toEqual("div")
})