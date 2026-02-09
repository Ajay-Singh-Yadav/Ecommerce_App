import { render, fireEvent } from '@testing-library/react-native';
import ProductDetailScreen from '../../src/screens/productDetails/components/ProductDetails';
describe('ProductDetailScreen', () => {
  const mockProduct = {
    id: 1,
    title: 'Test Product',
    price: 299,
    description: 'Nice product',
  };
    const mockNavigation = {
    navigate: jest.fn(),
  };


  it('renders product name and price', () => {
    const { getByText } = render(
      <ProductDetailScreen route={{ params: { product: mockProduct } }} />
    );

    expect(getByText('Test Product')).toBeTruthy();
     expect(getByText(/\$299\.00/)).toBeTruthy();
  });

  it('shows Add to Cart button', () => {
    const { getByText } = render(
      <ProductDetailScreen route={{ params: { product: mockProduct } }} />
    );

    expect(getByText(/add to cart/i)).toBeTruthy();
  });

  it('pressing Add to Cart works', () => {
    const { getByText } = render(
      // <ProductDetailScreen route={{ params: { product: mockProduct } }} />
        <ProductDetailScreen
        navigation={mockNavigation}
        route={{ params: { product: mockProduct } }}
      />
    );

    const button = getByText(/add to cart/i);
    fireEvent.press(button);

    // For now just verify test doesn't crash
    // expect(button).toBeTruthy();
     expect(mockNavigation.navigate).toHaveBeenCalledWith(
      expect.anything(), // CHECKOUT
      { product: mockProduct }
    );
  });

  it('increases quantity and updates price when + pressed', () => {
  const { getByText } = render(
    <ProductDetailScreen route={{ params: { product: mockProduct } }} />
  );

  const plusBtn = getByText('+');

  fireEvent.press(plusBtn);

  // Quantity becomes 2
  expect(getByText('2')).toBeTruthy();

  // Price becomes 2 * 299 = 598
  expect(getByText(/\$598\.00/)).toBeTruthy();
});

  it('decreases quantity and updates price when - pressed', () => {
  const { getByText } = render(
    <ProductDetailScreen route={{ params: { product: mockProduct } }} />
  );

  const plusBtn = getByText('+');
  const minusBtn = getByText('-');

 
  fireEvent.press(plusBtn);

  
  fireEvent.press(minusBtn);

  expect(getByText('1')).toBeTruthy();
  expect(getByText(/\$299\.00/)).toBeTruthy();
});

}); 