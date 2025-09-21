import reactLogo from './assets/react.svg'
import './App.css'
import ProductCard from './components/ProductCard';

function App() {
  //Product Data test
  const productData = [
    {
      "name": "Banana Nut Muffins",
      "description": "Moist, fluffy muffins packed with bananas and walnuts for a delightful breakfast or snack. Moist, fluffy muffins packed with bananas and walnuts for a delightful breakfast or snack. Moist, fluffy muffins packed with bananas and walnuts for a delightful breakfast or snack. Moist, fluffy muffins packed with bananas and walnuts for a delightful breakfast or snack.",
      "price": "$4.49",
      "imageUrl": "http://dummyimage.com/250x150.png/5fa2dd/ffffff"
    }, {
      "name": "Vanilla Protein Powder",
      "description": "A high-quality protein powder perfect for smoothies and baking. A high-quality protein powder perfect for smoothies and baking. A high-quality protein powder perfect for smoothies and baking. A high-quality protein powder perfect for smoothies and baking.",
      "price": "$24.99",
      "imageUrl": "http://dummyimage.com/250x150.png/ff4444/ffffff"
    }, {
      "name": "Almond Flour Pancake Mix",
      "description": "Gluten-free pancake mix made with almond flour. Gluten-free pancake mix made with almond flour. Gluten-free pancake mix made with almond flour. Gluten-free pancake mix made with almond flour.",
      "price": "$5.99",
      "imageUrl": "http://dummyimage.com/250x150.png/dddddd/000000"
    }, {
      "name": "Plant-Based Protein Bars",
      "description": "Nutritious protein bars for on-the-go snacking. Nutritious protein bars for on-the-go snacking. Nutritious protein bars for on-the-go snacking. Nutritious protein bars for on-the-go snacking.",
      "price": "$19.99",
      "imageUrl": "http://dummyimage.com/250x150.png/5fa2dd/ffffff"
    }, {
      "name": "Caraway Rye Bread",
      "description": "Artisan bread with caraway seeds for added flavor. Artisan bread with caraway seeds for added flavor. Artisan bread with caraway seeds for added flavor. Artisan bread with caraway seeds for added flavor.",
      "price": "$4.79",
      "imageUrl": "http://dummyimage.com/250x150.png/ff4444/ffffff"
    }, {
      "name": "Essential Oil Roller Bottles",
      "description": "Set of roller bottles for blending and applying essential oils. Set of roller bottles for blending and applying essential oils.  Set of roller bottles for blending and applying essential oils. Set of roller bottles for blending and applying essential oils.",
      "price": "$19.99",
      "imageUrl": "http://dummyimage.com/250x150.png/cc0000/ffffff"
    }, {
      "name": "Frozen Mixed Vegetables",
      "description": "A mix of carrots, peas, and corn, easy to stir-fry. A mix of carrots, peas, and corn, easy to stir-fry. A mix of carrots, peas, and corn, easy to stir-fry. A mix of carrots, peas, and corn, easy to stir-fry.",
      "price": "$1.99",
      "imageUrl": "http://dummyimage.com/250x150.png/dddddd/000000"
    }, {
      "name": "Coconut Rice",
      "description": "Fluffy rice cooked with coconut milk for a tropical twist. Fluffy rice cooked with coconut milk for a tropical twist. Fluffy rice cooked with coconut milk for a tropical twist. Fluffy rice cooked with coconut milk for a tropical twist.",
      "price": "$2.29",
      "imageUrl": "http://dummyimage.com/250x150.png/5fa2dd/ffffff"
    }, {
      "name": "Lightweight Backpacking Tent",
      "description": "Easy-to-set up tent designed for campers and hikers. Easy-to-set up tent designed for campers and hikers. Easy-to-set up tent designed for campers and hikers. Easy-to-set up tent designed for campers and hikers.",
      "price": "$129.99",
      "imageUrl": "http://dummyimage.com/250x150.png/5fa2dd/ffffff"
    }, {
      "name": "Organic Black Rice",
      "description": "Nutty and chewy black rice, high in antioxidants. Nutty and chewy black rice, high in antioxidants. Nutty and chewy black rice, high in antioxidants. Nutty and chewy black rice, high in antioxidants.",
      "price": "$3.59",
      "imageUrl": "http://dummyimage.com/250x150.png/5fa2dd/ffffff"
    }
  ];
  
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="product-grid">
        {productData.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
            />
        ))}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
