import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import Home from '../app/page';

describe('Landing Page Integration', () => {
  it('renders all main sections', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Header
    expect(screen.getByRole('region', { name: /hero|sección principal/i })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /características|features/i })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /galería|gallery/i })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /recorrido|tour/i })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /ubicación|location/i })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /contacto|contact/i })).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Footer
  });

  it('changes language when clicking the language selector', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    // Cambia a inglés
    const enBtn = screen.getByRole('button', { name: /english|en/i });
    fireEvent.click(enBtn);
    expect(screen.getByText(/house for sale|main features|photo gallery/i)).toBeInTheDocument();
    // Cambia a español
    const esBtn = screen.getByRole('button', { name: /español|es/i });
    fireEvent.click(esBtn);
    expect(screen.getByText(/casa en venta|características principales|galería de fotos/i)).toBeInTheDocument();
  });
}); 