import React from 'react';
import { render } from '@testing-library/react';

import ErrorBoundary from '../components/error-boundary/error-boundary';

const renderProviders = (ui: React.ReactElement) => render(ui, {})

const Child = () => {
  throw new Error()
}

describe('Error Boundary', () => {
  it(`should render error boundary component when there is an error`, () => {
    const { getByText } = renderProviders(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>
    )
    const errorMessage = getByText('Sorry.. there was an error')
    expect(errorMessage).toBeDefined()
  })
})