const productsList = [
  { name: "Kartondoboz E0 (78x78x82)", price: 45, quantity: "150 db", description: "Kartondoboz E0 Méret: 78x82x82 mm", image: "image/kartondoboz-e0.jpg" },
  { name: "Kartondoboz F0 (140x190x45)", price: 100, quantity: "120 db", description: "Kartondoboz F0 Méret: 140x190x45 mm", image: "image/kartondoboz-f0.jpg" },
  { name: "Kartondoboz G9 (260x400x400)", price: 300, quantity: "150 db", description: "Kartondoboz G9 Méret: 260x400x400 mm", image: "image/doboz.jpg" },
  { name: "Futártasak FB02 (225x325x50)", price: 25, quantity: "400 db", description: "Futártasak FB02 Méret: 225x325x50 mm", image: "image/futartasak.jpg" },
  { name: "Futártasak FB03 (240x350x50)", price: 26, quantity: "110 db", description: "Futártasak FB03 Méret: 240x350x50 mm", image: "image/futartasak.jpg" },
  { name: "Futártasak FB04 (325x425x50)", price: 40, quantity: "30 db", description: "Futártasak FB04 Méret: 325x425x50 mm", image: "image/futartasak.jpg" },
  { name: "Futártasak FB05 (350x450x50)", price: 50, quantity: "280 db", description: "Futártasak FB05 Méret: 350x450x50 mm", image: "image/futartasak.jpg" },
  { name: "Futártasak FB06 (400x500x50)", price: 52, quantity: "250 db", description: "Futártasak FB06 Méret: 400x500x50 mm", image: "image/futartasak.jpg" },
  { name: "Okmánytasak A/5", price: 20, quantity: "700 db", description: "Okmánytasak A/5", image: "image/okmanytasak.jpg" },
  { name: "Okmánytasak A/6", price: 15, quantity: "500 db", description: "Okmánytasak A/6", image: "image/okmanytasak.jpg" },
  { name: "Légpárnás boríték B/12 Barna", price: 35, quantity: "170 db", description: "Barna színű légpárnás boríték Külső méret: 140x225 mm Belső méret: 120x215 mm", image: "image/legparnas-boritek.jpg" },
  { name: "Légpárnás boríték B/12 Fehér", price: 35, quantity: "360 db", description: "Fehér színű légpárnás boríték Külső méret: 140x225 mm Belső méret: 120x215 mm", image: "image/legparnas-boritek-feher.jpg" },
  { name: "Légpárnás boríték C/13 Barna", price: 40, quantity: "200 db", description: "Barna színű légpárnás boríték Külső méret: 170x225 mm Belső méret: 150x215 mm", image: "image/legparnas-boritek.jpg" },
  { name: "Légpárnás boríték C/13 Fehér", price: 40, quantity: "30 db", description: "Fehér színű légpárnás boríték Külső méret: 170x225 mm Belső méret: 150x215 mm", image: "image/legparnas-boritek-feher.jpg" },
  { name: "Légpárnás boríték D/14 Barna", price: 45, quantity: "100 db", description: "Barna színű légpárnás boríték Külső méret: 200x275 mm Belső méret: 180x265 mm", image: "image/legparnas-boritek.jpg" },
  { name: "Légpárnás boríték D/14 Fehér", price: 45, quantity: "130 db", description: "Fehér színű légpárnás boríték Külső méret: 170x225 mm Belső méret: 180x265 mm", image: "image/legparnas-boritek-feher.jpg" },
  { name: "Légpárnás boríték E/15 Barna", price: 50, quantity: "150 db", description: "Barna színű légpárnás boríték Külső méret: 240x275 mm Belső méret: 220x265 mm", image: "image/legparnas-boritek.jpg" },
  { name: "Légpárnás boríték E/15 Fehér", price: 50, quantity: "100 db", description: "Fehér színű légpárnás boríték Külső méret: 240x275 mm Belső méret: 220x265 mm", image: "image/legparnas-boritek-feher.jpg" },
  { name: "Légpárnás boríték F/16 Barna", price: 75, quantity: "150 db", description: "Barna színű légpárnás boríték Külső méret: 240x350 mm Belső méret: 220x340 mm", image: "image/legparnas-boritek.jpg" },
  { name: "Légpárnás boríték F/16 Fehér", price: 75, quantity: "120 db", description: "Fehér színű légpárnás boríték Külső méret: 240x350 mm Belső méret: 220x340 mm", image: "image/legparnas-boritek-feher.jpg" },
  { name: "Légpárnás boríték G/17 Barna", price: 80, quantity: "180 db", description: "Barna színű légpárnás boríték Külső méret: 250x350 mm Belső méret: 230x340 mm", image: "image/legparnas-boritek.jpg" },
  { name: "Légpárnás boríték G/17 Fehér", price: 80, quantity: "85 db", description: "Fehér színű légpárnás boríték Külső méret: 250x350 mm Belső méret: 230x340 mm", image: "image/legparnas-boritek-feher.jpg" },
  { name: "Légpárnás boríték H/18 Barna", price: 90, quantity: "90 db", description: "Barna színű légpárnás boríték Külső méret: 290x370 mm Belső méret: 270x360 mm", image: "image/legparnas-boritek.jpg" },
  { name: "Légpárnás boríték H/18 Fehér", price: 90, quantity: "100 db", description: "Fehér színű légpárnás boríték Külső méret: 290x370 mm Belső méret: 270x360 mm", image: "image/legparnas-boritek-feher.jpg" },
  { name: "Asztali ragasztószalag adagoló", price: 2500, quantity: "1 db", description: "Irodai vagy otthoni használatra is kiváló. Súlyozott (kb. 1 kg)", image: "image/asztali-adagolo.jpg" },
  { name: "Univerzális olló", price: 900, quantity: "4 db", description: "Univerzális olló", image: "image/ollo.jpg" },
  { name: "Tűzőkapocs 24/6 (5000db/doboz)", price: 1000, quantity: "2 doboz", description: "24 mm széles, 6 mm magas tűzőkapocs. Egy dobozban 5000 db található.", image: "image/tuzokapocs.jpg" },
  { name: "Vadászkés", price: 1500, quantity: "2 db", description: "Extol vadászkés, túrakés tokkal. Pengehossz: 110 mm", image: "image/extol-vadaszkes.jpg" },
  { name: "Tesa bandázsszalag 25mm/25m", price: 900, quantity: "7 db", description: "Tesa fekete színű textil szigetelőszalag 25 mm széles, 25 méter hosszú", image: "image/tesa-bandazsszalag.jpg" },
  { name: "Jelölő szalag piros-fehér 48mm/20m", price: 1000, quantity: "18 db", description: "Munkaterületek vagy veszélyes részek megjelölésére használható piros-fehér ragasztószalag", image: "image/jeloloszalag-kicsi.jpg" },
  { name: "Jelölő szalag sárga-fekete 48mm/20m", price: 1000, quantity: "18 db", description: "Munkaterületek vagy veszélyes részek megjelölésére használható sárga-fekete ragasztószalag", image: "image/jeloloszalag-kicsi.jpg" },
  { name: "Simítózáras tasak 120x180/50my", price: 10, quantity: "280 db", description: "Víztiszta önzáró tasak. Mérete: 120x180 mm Anyagvastagság: 50my", image: "image/simitozaras-tasak.jpg" },
  { name: "Simítózáras tasak 180x250/50my", price: 15, quantity: "150 db", description: "Víztiszta önzáró tasak Mérete: 180x250 mm Anyagvastagság: 50my", image: "image/simitozaras-tasak.jpg" },
  { name: "Simítózáras tasak 60x80/50my", price: 5, quantity: "100 db", description: "Víztiszta önzáró tasak Mérete: 60x80 mm Anyagvastagság: 50my", image: "image/simitozaras-tasak.jpg" },
  { name: "PE (polietilén) tasak 150x200", price: 8, quantity: "600 db", description: "Széleskörben használható víztiszta nejlon zacskó. Méret: 150x200 mm", image: "image/polietilen-tasak.jpg" },
  { name: "PE (polietilén) tasak 170x250", price: 9, quantity: "300 db", description: "Széleskörben használható víztiszta nejlon zacskó. Méret: 170x250 mm", image: "image/polietilen-tasak.jpg" },
  { name: "PE (polietilén) tasak 200x300", price: 10, quantity: "200 db", description: "Széleskörben használható víztiszta nejlon zacskó. Méret: 200x300 mm", image: "image/polietilen-tasak.jpg" },
  { name: "PE (polietilén) tasak 220x350", price: 11, quantity: "300 db", description: "Széleskörben használható víztiszta nejlon zacskó. Méret: 220x350 mm", image: "image/polietilen-tasak.jpg" },
  { name: "PE (polietilén) tasak 250x350", price: 11, quantity: "600 db", description: "Széleskörben használható víztiszta nejlon zacskó. Méret: 250x350 mm", image: "image/polietilen-tasak.jpg" },
  { name: "PE (polietilén) tasak 300x300", price: 12, quantity: "300 db", description: "Széleskörben használható víztiszta nejlon zacskó. Méret: 300x300 mm", image: "image/polietilen-tasak.jpg" },
  { name: "PE (polietilén) tasak 300x350", price: 12, quantity: "300 db", description: "Széleskörben használható víztiszta nejlon zacskó. Méret: 300x350 mm", image: "image/polietilen-tasak.jpg" },
  { name: "PE (polietilén) tasak 300x370", price: 13, quantity: "700 db", description: "Széleskörben használható víztiszta nejlon zacskó. Méret: 300x370 mm", image: "image/polietilen-tasak.jpg" },
  { name: "Vákuum tasak Pet/Pe 180x250mm", price: 20, quantity: "840 db", description: "Pet/Pe vákuumtasak, 180 mm széles, 250 mm hosszú.", image: "image/vakuum-tasak.jpg" },
  { name: "Vákuum tasak Pet/Pe 200x280mm", price: 22, quantity: "2390 db", description: "Pet/Pe vákuumtasak, 200 mm széles, 280 mm hosszú.", image: "image/vakuum-tasak.jpg" },
  { name: "Fémpánthüvely 12 mm", price: 6, quantity: "300 db", description: "Fémpánthüvely 12 mm széles. PP, műanyag pántolószalaghoz", image: "image/fempanthuvely.jpg" },
  { name: "Fémpánthüvely 16 mm", price: 8, quantity: "100 db", description: "Fémpánthüvely 16 mm széles. PP, műanyag pántolószalaghoz", image: "image/fempanthuvely.jpg" },
  { name: "Műanyag pántolókapocs 12 mm", price: 10, quantity: "150 db", description: "Műanyag pántolókapocs 12 mm széles műanyag vagy textil pántszalaghoz", image: "image/pantolo-kapocs.jpg" },
  { name: "Műanyag pántolókapocs 16 mm", price: 12, quantity: "500 db", description: "Műanyag pántolókapocs 16 mm széles műanyag vagy textil pántszalaghoz", image: "image/pantolo-kapocs.jpg" },
  { name: "Pántolócsat (foszfátos) textil pántszalaghoz M13", price: 20, quantity: "600 db", description: "Foszfátos pántolókapocs 13 mm széles textil pántszalaghoz", image: "image/pantolocsat.jpg" },
  { name: "Pántolócsat (foszfátos) textil pántszalaghoz M16", price: 25, quantity: "300 db", description: "Foszfátos pántolókapocs 16 mm széles textil pántszalaghoz", image: "image/pantolocsat.jpg" },
  { name: "Pántolócsat (foszfátos) textil pántszalaghoz M19", price: 30, quantity: "800 db", description: "Foszfátos pántolókapocs 19 mm széles textil pántszalaghoz", image: "image/pantolocsat.jpg" },
  { name: "Sztreccsfólia felhordó cséve", price: 2500, quantity: "7 db", description: "Többször használható műanyag cséve. Cséve nélküli sztreccsfólia tekercshez használható", image: "image/muanyag-cseve.jpg" },
  { name: "Légpárnás fólia 0,3m/100m", price: 4000, quantity: "4 db", description: "Légpárnás fólia 30 cm széles, 100 méter hosszú tekercsben", image: "image/legparnas-folia.jpg" },
  { name: "Légpárnás fólia 0,4m/100m", price: 4500, quantity: "3 db", description: "Légpárnás fólia 40 cm széles, 100 méter hosszú tekercsben", image: "image/legparnas-folia.jpg" },
  { name: "Légpárnás fólia 0,5m/100m", price: 5500, quantity: "2 db", description: "Légpárnás fólia 50 cm széles, 100 méter hosszú tekercsben", image: "image/legparnas-folia.jpg" },
  { name: "Kenderzsineg 200g", price: 1000, quantity: "12 db", description: "Kötöző madzag 200 g", image: "image/kenderzsineg-200g.jpg" },
  { name: "Kenderzsineg 500g", price: 1700, quantity: "2 db", description: "Kötöző madzag 500 g", image: "image/kenderzsineg-500g.jpg" },
  { name: "Papír élvédő 35x35x3mm/1m", price: 90, quantity: "70 db", description: "1 méter hosszú papír élvédő, sarokvédő. Méret: 35x35x3 mm ", image: "image/papir-elvedo.jpg" },
  { name: "Talpbetét TPR zselés, női, szabható. Méret: 35-39", price: 800, quantity: "7 pár", description: "TPR zselés talpbetét. Méretre szabható. Méret: 35-39", image: "image/talpbetet.jpg" },
  { name: "Talpbetét TPR zselés, férfi, szabható. Méret: 40-47", price: 800, quantity: "7 pár", description: "TPR zselés talpbetét. Méretre szabható. Méret: 40-47", image: "image/talpbetet.jpg" },
  { name: "Rock Walker AB munkavédelmi bakancs Méret: 39", price: 6000, quantity: "1 pár", description: "Rock munkavédelmi bakancs, acélkaplis, taplemezes. Minősítés: CE, EN, ISO20345:2011, S1P SRC Méret: 39", image: "image/rock.bakancs.jpg" },
  { name: "Rock Walker AB munkavédelmi bakancs Méret: 40", price: 6000, quantity: "1 pár", description: "Rock munkavédelmi bakancs, acélkaplis, taplemezes. Minősítés: CE, EN, ISO20345:2011, S1P SRC Méret: 40", image: "image/rock.bakancs.jpg" },
  { name: "Rock Walker AB munkavédelmi bakancs Méret: 41", price: 6000, quantity: "1 pár", description: "Rock munkavédelmi bakancs, acélkaplis, taplemezes. Minősítés: CE, EN, ISO20345:2011, S1P SRC Méret: 41", image: "image/rock.bakancs.jpg" },
  { name: "Rock Walker AB munkavédelmi bakancs Méret: 42", price: 6000, quantity: "1 pár", description: "Rock munkavédelmi bakancs, acélkaplis, taplemezes. Minősítés: CE, EN, ISO20345:2011, S1P SRC Méret: 42", image: "image/rock.bakancs.jpg" },
  { name: "Rock Walker AB munkavédelmi bakancs Méret: 45", price: 6000, quantity: "1 pár", description: "Rock munkavédelmi bakancs, acélkaplis, taplemezes. Minősítés: CE, EN, ISO20345:2011, S1P SRC Méret: 45", image: "image/rock.bakancs.jpg" },
  { name: "Rock Jazz AB munkavédelmi bakancs Méret: 41", price: 6000, quantity: "1 pár", description: "Rock munkavédelmi bakancs, acélkaplis, taplemezes. Minősítés: CE, EN, ISO20345:2011, S1P SRC Méret: 41", image: "image/jazz-bakancs.jpg" },
  { name: "Rock Jazz AB munkavédelmi bakancs Méret: 42", price: 6000, quantity: "1 pár", description: "Rock munkavédelmi bakancs, acélkaplis, taplemezes. Minősítés: CE, EN, ISO20345:2011, S1P SRC Méret: 42", image: "image/jazz-bakancs.jpg" },
  { name: "Rock Jazz AB munkavédelmi bakancs Méret: 43", price: 6000, quantity: "2 pár", description: "Rock munkavédelmi bakancs, acélkaplis, taplemezes. Minősítés: CE, EN, ISO20345:2011, S1P SRC Méret: 43", image: "image/jazz-bakancs.jpg" },
  { name: "Rock Walker SA munkavédelmi szandál Méret: 41", price: 6000, quantity: "1 pár", description: "Rock munkavédelmi szandál, acélkaplis, taplemezes. Minősítés: CE, EN, ISO20345:2011, S1P SRC Méret: 41", image: "image/munkavedelmi-szandal.jpg" },
  { name: "Rock Walker SA munkavédelmi szandál Méret: 42", price: 6000, quantity: "1 pár", description: "Rock munkavédelmi szandál, acélkaplis, taplemezes. Minősítés: CE, EN, ISO20345:2011, S1P SRC Méret: 42", image: "image/munkavedelmi-szandal.jpg" },
  { name: "Rock Walker SA munkavédelmi szandál Méret: 43", price: 6000, quantity: "1 pár", description: "Rock munkavédelmi szandál, acélkaplis, taplemezes. Minősítés: CE, EN, ISO20345:2011, S1P SRC Méret: 43", image: "image/munkavedelmi-szandal.jpg" },
  { name: "Rock Walker SA munkavédelmi szandál Méret: 44", price: 6000, quantity: "1 pár", description: "Rock munkavédelmi szandál, acélkaplis, taplemezes. Minősítés: CE, EN, ISO20345:2011, S1P SRC Méret: 44", image: "image/munkavedelmi-szandal.jpg" },
  { name: "PVC csizma Szín: Terepmintás Méret: 41", price: 5000, quantity: "1 pár", description: "Terepmintás gumicsizma PVC+Nitril felsőrésszel Méret: 41", image: "image/gumicsizma.jpg" },
  { name: "PVC csizma Szín: Terepmintás Méret: 42", price: 5000, quantity: "1 pár", description: "Terepmintás gumicsizma PVC+Nitril felsőrésszel Méret: 42", image: "image/gumicsizma.jpg" },
  { name: "Baseball sapka, kék", price: 700, quantity: "2 db", description: "Kék színű baseball sapka", image: "image/baseball-sapka-kek.jpg" },
  { name: "Kötött téli sapka, fekete", price: 500, quantity: "5 db", description: "Fekete színű, kötött téli sapka", image: "image/kotott-teli-sapka.jpg" },
  { name: "Kötött téli sapka, kék", price: 500, quantity: "5 db", description: "Kék színű, kötött téli sapka", image: "image/kotott-teli-sapka.jpg" },
  { name: "Kötött téli sapka, narancs", price: 500, quantity: "5 db", description: "Narancs színű, kötött téli sapka", image: "image/kotott-teli-sapka.jpg" },
  { name: "Kötött téli sapka, szürke", price: 500, quantity: "5 db", description: "Szürke színű, kötött téli sapka", image: "image/kotott-teli-sapka.jpg" },
  { name: "PP munkavédelmi sisak, kék", price: 1800, quantity: "2 db", description: "Kék színű PP munkavédelmi fejvédő 6 pontos rögzítővel, homlokpánttal. Felszerelhető fültokkal.", image: "image/munkavedelmi-sisak-kek.jpg" },
  { name: "PP munkavédelmi sisak, piros", price: 1800, quantity: "2 db", description: "Piros színű PP munkavédelmi fejvédő 6 pontos rögzítővel, homlokpánttal. Felszerelhető fültokkal.", image: "image/munkavedelmi-sisak-piros.jpg" },
  { name: "Láthatósági vállpánt, sárga, férfi", price: 1200, quantity: "5 db", description: "Sárga színű láthatósági vállpánt. Férfi méret.", image: "image/lathatosagi-vallpant.jpg" },
  { name: "Láthatósági vállpánt, sárga, női", price: 1200, quantity: "5 db", description: "Sárga színű láthatósági vállpánt. Női méret.", image: "image/lathatosagi-vallpant.jpg" },
  { name: "Láthatósági mellény, narancssárga. Méret: M", price: 1000, quantity: "5 db", description: "Jól láthatósági mellény. Alapanyag: 100% poliészter. Szín: fluoreszcens narancs. Méret: M", image: "image/lathatosagi-melleny-narancs.jpg" },
  { name: "Láthatósági mellény, narancssárga. Méret: L", price: 1000, quantity: "5 db", description: "Jól láthatósági mellény. Alapanyag: 100% poliészter. Szín: fluoreszcens narancs. Méret: L", image: "image/lathatosagi-melleny-narancs.jpg" },
  { name: "Láthatósági mellény, narancssárga. Méret: XL", price: 1000, quantity: "5 db", description: "Jól láthatósági mellény. Alapanyag: 100% poliészter. Szín: fluoreszcens narancs. Méret: XL", image: "image/lathatosagi-melleny-narancs.jpg" },
  { name: "Láthatósági mellény, sárga. Méret: M", price: 1000, quantity: "5 db", description: "Jól láthatósági mellény. Alapanyag: 100% poliészter. Szín: fluoreszcens sárga. Méret: M", image: "image/lathatosagi-melleny-sarga.jpg" },
  { name: "Láthatósági mellény, sárga. Méret: L", price: 1000, quantity: "5 db", description: "Jól láthatósági mellény. Alapanyag: 100% poliészter. Szín: fluoreszcens sárga. Méret: L", image: "image/lathatosagi-melleny-sarga.jpg" },
  { name: "Láthatósági mellény, sárga. Méret: XL", price: 1000, quantity: "5 db", description: "Jól láthatósági mellény. Alapanyag: 100% poliészter. Szín: fluoreszcens sárga. Méret: XL", image: "image/lathatosagi-melleny-sarga.jpg" },
  { name: "Füldugó párban", price: 40, quantity: "130 pár", description: "Narancssárga zajvédelmi füldugó párban", image: "image/fuldugo.jpg" },
  { name: "Höfftech KWTS 1809 2in1 multifunkciós ágvágó", price: 10000, quantity: "1 db", description: "Akkumulátoros, multifunkciós orrfűrész ágvágó adapterrel. 12V, 1.5Ah, Li-ion akkumulátor", image: "image/hofftech-agvago.jpg" },
  { name: "Black and Decker CS36BST akkus csavarbehajtó", price: 10000, quantity: "1 db", description: "Black and Decker CS36BST akkus csavarbehajtó LED lámpával", image: "image/blackanddecker-cs36bst.jpg" },
  { name: "Érintésmentes infravörös lázmérő Berrcom JXB-178", price: 13000, quantity: "2 db", description: "Érintésmentes, infravörös lázmérő 3 különböző üzemmóddal", image: "image/lazmero.jpg" },
  { name: "Takaróponyva 5x7 méter", price: 5000, quantity: "4 db", description: "Takaróponyva 65g/m2. Méret: 5x7 méter", image: "image/takaroponyva.jpg" },

  // { name: "", price: , quantity: "db", description: "", image: "image" },

];

//-----Product card creation

  function displayProducts(productsToShow) {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';
  
    productsToShow.forEach((product, index) => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
  
      const productImg = document.createElement('img');
      productImg.src = product.image;
      productImg.alt = product.name;
      productImg.style.width = '200px';
      productImg.style.height = '200px';
      
      if (index === 0) {
        productImg.loading = 'eager';
      } else {
        productImg.loading = 'lazy';
      }

      const productNameContainer = document.createElement('div');
      productNameContainer.classList.add('product-name');

      const productName = document.createElement('h2');
      productName.textContent = product.name;

      productNameContainer.appendChild(productName);

  
      const productPrice = document.createElement('h3');
      productPrice.textContent = `Ár: ${product.price} Ft`;
  
      const productDesc = document.createElement('p');
      productDesc.classList.add('product-desc');
      productDesc.textContent = product.description;

      const productQuantity = document.createElement('p');
      productQuantity.classList.add('product-quantity');
      productQuantity.textContent = product.quantity;
  
      productCard.appendChild(productImg);
      productCard.appendChild(productNameContainer);
      productCard.appendChild(productPrice);
      productCard.appendChild(productDesc);
      productCard.appendChild(productQuantity);
  
      productGrid.appendChild(productCard);
    });
  }

  //-----Meta tag generation

  function generateMetaTags() {
    productsList.forEach(function (product) {
        var metaTitle = document.createElement('meta');
        metaTitle.setAttribute('property', 'og:title');
        metaTitle.setAttribute('content', product.name);
        document.head.appendChild(metaTitle);

        var metaDescription = document.createElement('meta');
        metaDescription.setAttribute('property', 'og:description');
        metaDescription.setAttribute('content', product.description);
        document.head.appendChild(metaDescription);

        var metaImage = document.createElement('meta');
        metaImage.setAttribute('property', 'og:image');
        metaImage.setAttribute('content', product.image);
        document.head.appendChild(metaImage);
    });
  }

  //-----Search bar

  function searchProduct() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
  
    const filteredProducts = productsList.filter(product =>
      product.name.toLowerCase().includes(searchTerm)
    );
  
    if (filteredProducts.length === 0) {
      document.getElementById('noProductFound').style.display = 'block';
    } else {
      document.getElementById('noProductFound').style.display = 'none';
    }
  
    displayProducts(filteredProducts);
  }

  //-----Reload homepage

  const logo = document.getElementById('logo');

  logo.addEventListener('click', function() {
      window.location.reload();
  });

  //-----Scroll to top

  document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopButton = document.getElementById("scroll-to-top");

    // Show/hide the button based on scroll position
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.classList.add("show");
        } else {
            scrollToTopButton.classList.remove("show");
        }
    };

    // Scroll to top when the button is clicked
    scrollToTopButton.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
  });
  
  displayProducts(productsList); // Termékek megjelenítése az oldal betöltésekor

  generateMetaTags(); // Meta tag generation