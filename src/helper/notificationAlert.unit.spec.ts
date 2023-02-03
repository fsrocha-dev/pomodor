import notificationAlert from "./notificationAlert"
import notifier from 'node-notifier'

jest.mock('node-notifier', () => ({
  notify: jest.fn()
}))

describe(("Helper > notificationAlert"), () => {
  it("should if correct params execute notification system", () => {
    const title = "Awesome title"
    const description = "Awesome description"

    notificationAlert(title, description)

    expect(notifier.notify).toHaveBeenCalledTimes(1)
  })
})