import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import HeroSection from './index';

describe('HeroSection', () => {
  it('renders the main title and CTA buttons', () => {
    render(
      <Provider store={store}>
        <HeroSection />
      </Provider>
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /contactar|contact/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ver detalles|view details/i })).toBeInTheDocument();
  });

  it('calls scrollIntoView when clicking the details button', () => {
    render(
      <Provider store={store}>
        <HeroSection />
      </Provider>
    );
    const scrollSpy = jest.spyOn(window.HTMLElement.prototype, 'scrollIntoView').mockImplementation(() => {});
    const detailsBtn = screen.getByRole('button', { name: /ver detalles|view details/i });
    fireEvent.click(detailsBtn);
    expect(scrollSpy).toHaveBeenCalled();
    scrollSpy.mockRestore();
  });
}); 