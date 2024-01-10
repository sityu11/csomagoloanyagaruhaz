const products = [
    
    { name: "Kartondoboz E0 (78x78x82)", price: 45, quantity: "150 db", description: "Kartondoboz E0 Mérete: 78x82x82 mm", image: "image/kartondoboz-e0.jpg" },
    { name: "Kartondoboz F0 (140x190x45)", price: 100, quantity: "120 db", description: "Kartondoboz F0 Mérete: 140x190x45 mm", image: "image/kartondoboz-f0.jpg" },
    { name: "Kartondoboz F1 (140x190x60)", price: 120, quantity: "50 db", description: "Kartondoboz F1 Mérete: 140x190x60 mm", image: "image/kartondoboz-f0.jpg" },
    { name: "Kartondoboz G9 (260x400x400)", price: 300, quantity: "150 db", description: "Kartondoboz G9 260x400x400 mm", image: "image/doboz.jpg" },
    
    { name: "Futártasak FB02 (225x325x50)", price: 25, quantity: "440 db", description: "Futártasak FB02 Mérete: 225x325x50 mm", image: "image/futartasak.jpg" },
    { name: "Futártasak FB03 (240x350x50)", price: 26, quantity: "110 db", description: "Futártasak FB03 Mérete: 240x350x50 mm", image: "image/futartasak.jpg" },
    { name: "Futártasak FB04 (325x425x50)", price: 40, quantity: "30 db", description: "Futártasak FB04 Mérete: 325x425x50 mm", image: "image/futartasak.jpg" },
    { name: "Futártasak FB05 (350x450x50)", price: 50, quantity: "280 db", description: "Futártasak FB05 Mérete: 350x450x50 mm", image: "image/futartasak.jpg" },
    { name: "Futártasak FB06 (400x500x50)", price: 52, quantity: "250 db", description: "Futártasak FB06 Mérete: 400x500x50 mm", image: "image/futartasak.jpg" },
    { name: "Okmánytasak A/5", price: 20, quantity: "700 db", description: "Okmánytasak A/5", image: "image/okmanytasak.jpg" },
    { name: "Okmánytasak A/6", price: 15, quantity: "500 db", description: "Okmánytasak A/6", image: "image/okmanytasak.jpg" },
    { name: "Légpárnás boríték B/12 Barna", price: 35, quantity: "170 db", description: "Barna színű légpárnás boríték Külső méret: 140x225 mm Belső méret: 120x215 mm", image: "image/legparnas-boritek.jpg" },
    { name: "Légpárnás boríték B/12 Fehér", price: 35, quantity: "360 db", description: "Fehér színű légpárnás boríték Külső méret: 140x225 mm Belső méret: 120x215 mm", image: "image/legparnas-boritek-feher.jpg" },
    { name: "Légpárnás boríték C/13 Barna", price: 40, quantity: "200 db", description: "Barna színű légpárnás boríték Külső méret: 170x225 mm Belső méret: 150x215 mm", image: "image/legparnas-boritek.jpg" },
    { name: "Légpárnás boríték C/13 Fehér", price: 40, quantity: "30 db", description: "Fehér színű légpárnás boríték Külső méret: 170x225 mm Belső méret: 150x215 mm", image: "image/legparnas-boritek-feher.jpg" },
    { name: "Légpárnás boríték D/14 Barna", price: 45, quantity: "100 db", description: "Barna színű légpárnás boríték Külső méret: 200x275 mm Belső méret: 180x265 mm", image: "image/legparnas-boritek.jpg" },
    { name: "Légpárnás boríték D/14 Fehér", price: 45, quantity: "130 db", description: "Fehér színű légpárnás boríték Külső méret: 170x225 mm Belső méret: 150x215 mm", image: "image/legparnas-boritek-feher.jpg" },

    // { name: "", price: , quantity: "db", description: "", image: "image" },

    { name: "Rock munkavédelmi bakancs több méretben", price: 7000, quantity: "7 pár", description: "Rock munkavédelmi bakancs, acélkaplis, taplemezes. Minősítés: CE, EN, ISO200345:2011, S1P SRC", image: "image/rock.bakancs.jpg" },
  ];
  
  function displayProducts(productsToShow) {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';
  
    productsToShow.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
  
      const productImg = document.createElement('img');
      productImg.src = product.image;
      productImg.alt = product.name;
      productImg.style.width = '200px';
      productImg.style.height = '200px';
  
      const productName = document.createElement('div');
      productName.classList.add('product-name');
      productName.textContent = product.name;
  
      const productPrice = document.createElement('h3');
      productPrice.textContent = `Ár: ${product.price} Ft`;
  
      const productDesc = document.createElement('p');
      productDesc.classList.add('product-desc');
      productDesc.textContent = product.description;

      const productQuantity = document.createElement('p');
      productQuantity.classList.add('product-quantity');
      productQuantity.textContent = product.quantity;
  
      productCard.appendChild(productImg);
      productCard.appendChild(productName);
      productCard.appendChild(productPrice);
      productCard.appendChild(productDesc);
      productCard.appendChild(productQuantity);
  
      productGrid.appendChild(productCard);
    });
  }
  
  function searchProduct() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
  
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm)
    );
  
    if (filteredProducts.length === 0) {
      document.getElementById('noProductFound').style.display = 'block';
    } else {
      document.getElementById('noProductFound').style.display = 'none';
    }
  
    displayProducts(filteredProducts);
  }

  const logo = document.getElementById('logo');

  logo.addEventListener('click', function() {
      window.location.reload();
  });

  
  displayProducts(products); // Termékek megjelenítése az oldal betöltésekor