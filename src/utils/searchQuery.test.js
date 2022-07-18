import { getSearchQuery } from './searchQuery'

describe('Search Query', () => {
  it('should returns a encoded string', () => {
    const params = [
      {
        q: '[[at(document.type, "category")]]'
      },
      {
        lang: 'en-us'
      },
      {
        pageSize: 30
      }
    ]
    const result = getSearchQuery(params)
    const expected = '&q=%5B%5Bat(document.type%2C%20%22category%22)%5D%5D&lang=en-us&pageSize=30'
    expect(result).toBe(expected)
  })
  it('should returns a encoded string with duplicate query key', () => {
    const params = [
      {
        q: '[[at(document.type, "product")]]'
      },
      {
          q: '[[at(document.tags, ["Featured"])]]'
      },
      {
        lang: 'en-us'
      },
      {
        pageSize: 16
      }
    ]
    const result = getSearchQuery(params)
    const expected = '&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&q=%5B%5Bat(document.tags%2C%20%5B%22Featured%22%5D)%5D%5D&lang=en-us&pageSize=16'
    expect(result).toBe(expected)
  })
})
