import React from 'react'
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react'

import App from './app'

// API Testing setup
// Can be moved to its own module
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import nodeFetch from 'node-fetch'

import mockUsersResponse from '../services/test-users-response.json'
import mockUserRepoResponse from '../services/test-repos-response.json'

export const handlers = [
  rest.get('https://api.github.com/search/users*', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(mockUsersResponse)
    )
  }),
  rest.get('https://api.github.com/search/repositories*', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(mockUserRepoResponse)
    )
  })
]

const server = setupServer(...handlers)

beforeAll(() => {
  global.fetch = nodeFetch
  server.listen()
})
afterEach(() => server.resetHandlers())
afterAll(() => {
  delete global.fetch
  server.close()
})

describe('App', () => {
  it('should render successfully', async () => {
    render(<App />);
    expect(screen.getByPlaceholderText(/Search/)).toBeTruthy()
  });

  it('should render SearchDropdown with User API data on input', async () => {
    render(<App />)
    const searchBar = screen.getByPlaceholderText(/Search/)
    fireEvent.change(searchBar, {
      target: { value: 'facebook' }
    })
    await waitFor(() => screen.getByTestId('search-dropdown-item-0'))
    const dropdown = screen.getByTestId('search-dropdown-item-0')
    expect(dropdown).toBeTruthy()
  });
  
  it('should render repos from Repo API on user submit', async () => {
    render(<App />)
    const searchBar = screen.getByPlaceholderText(/Search/)
    fireEvent.change(searchBar, {
      target: { value: 'facebook' }
    })
    fireEvent.submit(searchBar)
    await waitFor(() => screen.getByTestId('pagination-table-container'))
    const renderedPaginationTable = screen.getByTestId('pagination-table-container')
    expect(renderedPaginationTable).toBeTruthy()
  });

  it('should call Github Repo API with correct params to order by descending stars', async () => {
    render(<App />)
    const spy = jest.spyOn(global, 'fetch')
    const searchBar = screen.getByPlaceholderText(/Search/)
    fireEvent.change(searchBar, {
      target: { value: 'facebook' }
    })
    fireEvent.submit(searchBar)
    await waitFor(() => screen.getByTestId('pagination-table-container'))
    const renderedPaginationTable = screen.getByTestId('pagination-table-container')
    expect(spy).toHaveBeenNthCalledWith(2, 'https://api.github.com/search/repositories?q=user:facebook&per_page=10&page=1&sort=stars&order=desc')
    spy.mockRestore()
  });

  it('should pass correct props to pagination when page changes', async () => {
    const { container } = render(<App />)
    const searchBar = screen.getByPlaceholderText(/Search/)
    fireEvent.change(searchBar, {
      target: { value: 'facebook' }
    })
    fireEvent.submit(searchBar)
    await waitFor(() => screen.getByTestId('pagination-controls'))
    const renderedPaginationControls = screen.getByTestId('pagination-controls')
    const paginationButtons = renderedPaginationControls.querySelectorAll('ul > li')
    const lastPageButtonPosition = paginationButtons.length - 2;
    const lastPageButton = paginationButtons[lastPageButtonPosition]
    expect(lastPageButton.textContent).toBe('12')
  });
  it.todo('should call Repo API when page changes')
});
