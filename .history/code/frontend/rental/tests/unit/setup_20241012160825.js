import { config } from '@vue/test-utils'

// Mock Leaflet
jest.mock('leaflet', () => ({
  map: jest.fn(() => ({
    setView: jest.fn(),
    removeLayer: jest.fn(),
  })),
  tileLayer: jest.fn(() => ({
    addTo: jest.fn(),
  })),
  marker: jest.fn(() => ({
    addTo: jest.fn(),
    bindPopup: jest.fn(),
    on: jest.fn(),
  })),
  icon: jest.fn(),
}))

// Global mocks
config.global.mocks = {
  $router: {
    push: jest.fn(),
  },
}

// Stub components
config.global.stubs = {
  'router-link': true,
}