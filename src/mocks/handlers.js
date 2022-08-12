
import { rest } from 'msw'
import { API_BASE_URL } from 'utils/constants'
import getMockResponse from './mockResponses'

export const handlers = [
  rest.get(API_BASE_URL, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        refs: [{
          id: 'foo', 
          ref: 'bar' 
        }] 
      })
    )
  }),

  rest.get(`${API_BASE_URL}/documents/search`, (req, res, ctx) => {
    const page = req.url.searchParams.get('page')
    const querys = req.url.searchParams.getAll('q')
    const response = getMockResponse(querys, page)
    return res(ctx.status(200), ctx.json(response))
  }),
]

