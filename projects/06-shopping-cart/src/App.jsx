import { useFilters } from './hooks/useFilters'
import { products as initialProducts } from './mocks/products.json';
import { Products } from './components/Products';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { IS_DEVELOPMENT } from './config.js'
import { Cart } from './components/Cart';
import { CartProvider } from './context/cart';

function App() {
  
  const { filterProducts } = useFilters()
 
  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <Header/>
      <Cart />
      <Products products={ filteredProducts }/>
      {IS_DEVELOPMENT && <Footer />}
      <Footer/>
    </CartProvider>
  )
}

export default App
