CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    nombre_usuario VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    tipo VARCHAR(50) NOT NULL
);

-- Datos de prueba
INSERT INTO usuarios (nombre, nombre_usuario, email, password, tipo) VALUES
-- Administradores
('Admin Principal', 'admin', 'admin@example.com', 'admin', 'administrador'),
('Sandra Gómez', 'sandra.admin', 'sandra.admin@example.com', 'sandra123', 'administrador'),

-- Operadores
('Operador General', 'operador', 'operador@example.com', 'operador', 'operador'),
('Carlos Méndez', 'carlos.operador', 'carlos.operador@example.com', 'carlos456', 'operador'),

-- Clientes (incluye "compra:compra")
('Cliente Principal', 'compra', 'compra@example.com', 'compra', 'cliente'),
('Martina López', 'marti.lopez', 'martina.lopez@example.com', 'martina2025', 'cliente'),
('Julián Torres', 'julian.t', 'julian.torres@example.com', 'julianpass', 'cliente'),
('Valentina Pérez', 'valeperez', 'valentina.perez@example.com', 'valepass123', 'cliente'),
('Tomás Rodríguez', 'tomasr', 'tomas.rodriguez@example.com', 'tomasclave', 'cliente'),
('Lucía Fernández', 'luciaf', 'lucia.fernandez@example.com', 'lucia456', 'cliente'),
('Agustín Herrera', 'agusher', 'agustin.herrera@example.com', 'agusclave', 'cliente'),
('Florencia Díaz', 'flord', 'florencia.diaz@example.com', 'flord2025', 'cliente'),
('Camila Morales', 'camim', 'camila.morales@example.com', 'camilapass', 'cliente'),
('Nahuel Rivas', 'nahurivas', 'nahuel.rivas@example.com', 'nahuel123', 'cliente'),
('Sofía Núñez', 'sofian', 'sofia.nunez@example.com', 'sofia456', 'cliente'),
('Facundo Blanco', 'facub', 'facundo.blanco@example.com', 'facupass', 'cliente');

CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    category VARCHAR(50) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    description TEXT NOT NULL,
    image_url VARCHAR(255) NOT NULL
);

INSERT INTO productos (name, price, category, stock, description, image_url) VALUES
-- Harinas y premezclas
('Premezcla Sin TACC - Schär 1kg', 2800.00, 'Harinas', 50, 'Premezcla universal para panificados sin gluten.', 'https://example.com/schar-premezcla.jpg'),
('Harina de arroz Dos Hermanos 1kg', 1900.00, 'Harinas', 40, 'Harina 100% arroz, ideal para repostería sin TACC.', 'https://example.com/harina-arroz.jpg'),
('Harina de maíz Morixe 1kg', 1650.00, 'Harinas', 45, 'Harina de maíz libre de gluten, uso múltiple.', 'https://example.com/harina-maiz.jpg'),
('Premezcla Pureza Panadería 500g', 1550.00, 'Harinas', 35, 'Premezcla especial para hacer panes sin gluten.', 'https://example.com/pureza-pan.jpg'),

-- Galletitas y snacks
('Galletitas Dulces Noglut Vainilla 200g', 1300.00, 'Snacks', 60, 'Galletitas dulces sin gluten sabor vainilla.', 'https://example.com/noglut-vainilla.jpg'),
('Galletas de arroz con chocolate Granix', 1250.00, 'Snacks', 30, 'Galletas de arroz bañadas en chocolate sin TACC.', 'https://example.com/granix-choco.jpg'),
('Chips de Maíz Natur Chips 100g', 980.00, 'Snacks', 25, 'Snacks crocantes de maíz libres de gluten.', 'https://example.com/naturchips.jpg'),
('Bizcochitos de grasa sin TACC Sol Sin Gluten', 1100.00, 'Snacks', 20, 'Bizcochitos clásicos, ahora aptos para celíacos.', 'https://example.com/bizcochos.jpg'),

-- Panificados
('Pan lactal sin gluten Fargo 360g', 2700.00, 'Panificados', 15, 'Pan lactal blanco libre de gluten.', 'https://example.com/pan-fargo.jpg'),
('Pan de molde Schär sin gluten 250g', 3200.00, 'Panificados', 18, 'Pan de molde de larga duración sin TACC.', 'https://example.com/schar-molde.jpg'),
('Pan de hamburguesa sin gluten Saníssimo', 2600.00, 'Panificados', 22, 'Pan suave ideal para hamburguesas sin TACC.', 'https://example.com/pan-burger.jpg'),

-- Pastas
('Fideos de arroz Lucchetti 500g', 2100.00, 'Pastas', 30, 'Fideos sin TACC elaborados con arroz.', 'https://example.com/fideos-arroz.jpg'),
('Ñoquis sin gluten Fargo 400g', 2500.00, 'Pastas', 20, 'Ñoquis listos para hervir, sin gluten.', 'https://example.com/noquis.jpg'),
('Tallarines sin gluten Schär 250g', 3100.00, 'Pastas', 18, 'Pasta seca sin TACC de excelente textura.', 'https://example.com/schar-tallarines.jpg'),

-- Golosinas y chocolates
('Chocolate Águila sin TACC 100g', 1350.00, 'Golosinas', 28, 'Chocolate negro apto para celíacos.', 'https://example.com/aguila-choco.jpg'),
('Bon o Bon sin TACC 1u', 550.00, 'Golosinas', 100, 'Versión libre de gluten del clásico Bon o Bon.', 'https://example.com/bonobon.jpg'),
('Alfajor de maicena sin TACC Noglut', 950.00, 'Golosinas', 50, 'Clásico alfajor de maicena apto para celíacos.', 'https://example.com/alfajor.jpg'),

-- Congelados
('Pizza sin TACC Mozzarella Schär', 5800.00, 'Congelados', 10, 'Pizza individual libre de gluten con mozzarella.', 'https://example.com/pizza-mozzarella.jpg'),
('Empanadas sin TACC Verdura Fargo 6u', 4900.00, 'Congelados', 12, 'Empanadas sin gluten con relleno vegetal.', 'https://example.com/empanadas.jpg'),

-- Bebidas
('Cerveza sin TACC Ambar 473ml', 2100.00, 'Bebidas', 30, 'Cerveza artesanal sin gluten.', 'https://example.com/cerveza.jpg'),
('Agua saborizada Levité 1.5L', 1000.00, 'Bebidas', 60, 'Agua sin gluten sabor limón.', 'https://example.com/levite.jpg'),
('Jugo Baggio sin TACC Durazno 1L', 1150.00, 'Bebidas', 45, 'Jugo de durazno sin gluten añadido.', 'https://example.com/jugo.jpg'),

-- Cereales y desayuno
('Granola sin gluten Sol Natural 250g', 2900.00, 'Desayuno', 22, 'Granola crocante sin TACC.', 'https://example.com/granola.jpg'),
('Avena sin gluten Gluten Free 400g', 2300.00, 'Desayuno', 35, 'Avena certificada sin TACC.', 'https://example.com/avena.jpg'),
('Cereal de maíz sin TACC Arcor 200g', 1900.00, 'Desayuno', 40, 'Cereal crocante libre de gluten.', 'https://example.com/cereal.jpg'),

-- Salsas y conservas
('Salsa lista sin gluten Natura 340g', 1350.00, 'Conservas', 25, 'Salsa de tomate libre de gluten.', 'https://example.com/salsa.jpg'),
('Mayonesa sin gluten Hellmanns 475g', 1800.00, 'Conservas', 40, 'Mayonesa tradicional sin TACC.', 'https://example.com/mayonesa.jpg'),

-- Productos dulces
('Mermelada Arcor sin TACC Frutilla 454g', 1650.00, 'Dulces', 30, 'Mermelada de frutilla sin gluten.', 'https://example.com/mermelada.jpg'),
('Dulce de leche Ilolay sin TACC 400g', 1900.00, 'Dulces', 28, 'Dulce de leche clásico sin gluten.', 'https://example.com/dulcedeleche.jpg'),
('Turrón sin TACC Arcor 80g', 950.00, 'Dulces', 50, 'Turrón crocante libre de gluten.', 'https://example.com/turron.jpg'),

-- Suplementos y barras
('Barra de cereal sin gluten Arcor Yogurt 23g', 600.00, 'Snacks', 50, 'Barrita sin TACC con yogurt y frutas.', 'https://example.com/barrita.jpg'),
('Barra energética sin TACC Andina 30g', 850.00, 'Snacks', 30, 'Barra sin gluten para deportistas.', 'https://example.com/andina.jpg'),

-- Rebozadores y pan rallado
('Rebozador sin gluten Morixe 500g', 1700.00, 'Rebozadores', 20, 'Rebozador crujiente sin TACC.', 'https://example.com/rebozador.jpg'),
('Pan rallado sin gluten Fargo 300g', 1850.00, 'Rebozadores', 25, 'Pan rallado apto para celíacos.', 'https://example.com/panrallado.jpg'),

-- Otros
('Tortillas de maíz Sin TACC 10u', 2500.00, 'Panificados', 20, 'Tortillas blandas sin gluten.', 'https://example.com/tortillas.jpg'),
('Tostadas sin gluten Schär 150g', 2900.00, 'Panificados', 15, 'Tostadas crocantes sin TACC.', 'https://example.com/tostadas.jpg');

CREATE TABLE IF NOT EXISTS recetas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    difficulty VARCHAR(50) NOT NULL,
    time VARCHAR(50) NOT NULL,
    servings INT NOT NULL,
    category VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS ingredientes_receta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    receta_id INT NOT NULL,
    producto_id INT NOT NULL,
    cantidad_en_receta VARCHAR(50) NOT NULL,
    conversion_note TEXT,
    FOREIGN KEY (receta_id) REFERENCES recetas(id) ON DELETE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES productos(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS instrucciones_receta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    receta_id INT NOT NULL,
    paso_numero INT NOT NULL,
    descripcion TEXT NOT NULL,
    FOREIGN KEY (receta_id) REFERENCES recetas(id) ON DELETE CASCADE
);

INSERT INTO recetas (id, name, difficulty, time, servings, category, price, image_url, description) VALUES 
(1, 'Waffles Sin Gluten', 'Fácil', '30 min', 4, 'Desayuno', 450, '/img/waffles.svg', 'Deliciosos waffles esponjosos sin gluten.'),
(2, 'Panqueques de Maíz', 'Fácil', '25 min', 2, 'Almuerzo', 400, '/img/panqueques.svg', 'Panqueques sin gluten ideales para rellenar.');

INSERT INTO ingredientes_receta (receta_id, producto_id, cantidad_en_receta, conversion_note) VALUES 
(1, 7, '2 tazas', 'Un paquete de 500g contiene aproximadamente 4 tazas'), -- Premezcla Pureza Panadería
(1, 35, '3 unidades', 'Se venden en cartones de 6 unidades'), -- Barra energética sin TACC Andina (esto puede simularse como huevos si no tenés uno específico)
(1, 25, '1½ tazas', 'Un litro contiene aproximadamente 4 tazas'), -- Jugo Baggio (como reemplazo de leche si no hay leche cargada)
(1, 32, '4 cucharadas', 'Un pote de 400g contiene aproximadamente 20 cucharadas'); -- Dulce de leche Ilolay como reemplazo de manteca

INSERT INTO ingredientes_receta (receta_id, producto_id, cantidad_en_receta, conversion_note) VALUES 
(2, 6, '1 taza', 'Un paquete de 1kg contiene aproximadamente 6-7 tazas'), -- Harina de maíz Morixe
(2, 35, '2 unidades', 'Se venden en porciones individuales'), -- Simulación de huevo
(2, 25, '1 taza', 'Un litro contiene 4 tazas'), -- Jugo Baggio como reemplazo de leche
(2, 30, '1 pizca', ''); -- Mayonesa como condimento alternativo

INSERT INTO instrucciones_receta (receta_id, paso_numero, descripcion) VALUES
(1, 1, 'Precalentar la wafflera y engrasar ligeramente.'),
(1, 2, 'En un bowl grande, mezclar la premezcla sin gluten con una pizca de sal.'),
(1, 3, 'En otro recipiente, batir los huevos hasta que estén espumosos.'),
(1, 4, 'Agregar la leche y el dulce de leche derretido a los huevos, mezclar bien.'),
(1, 5, 'Incorporar los ingredientes húmedos a los secos, mezclar hasta obtener una masa homogénea.'),
(1, 6, 'Verter la masa en la wafflera caliente y cocinar según las instrucciones del fabricante.'),
(1, 7, 'Servir calientes con miel, frutas o jarabe de arce.');

INSERT INTO instrucciones_receta (receta_id, paso_numero, descripcion) VALUES
(2, 1, 'En un bowl, mezclar la harina de maíz con una pizca de sal.'),
(2, 2, 'Agregar los huevos y mezclar bien.'),
(2, 3, 'Añadir el jugo hasta lograr una mezcla suave.'),
(2, 4, 'Calentar una sartén antiadherente a fuego medio.'),
(2, 5, 'Verter un poco de la mezcla y cocinar hasta que aparezcan burbujas.'),
(2, 6, 'Dar vuelta y cocinar 1-2 minutos más.'),
(2, 7, 'Servir con mayonesa o acompañamientos a gusto.');

CREATE TABLE IF NOT EXISTS paquetes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero_orden VARCHAR(20) NOT NULL UNIQUE,
    usuario_id INT NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    direccion_envio TEXT NOT NULL,
    fecha_creacion DATETIME NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS items_paquete (
    id INT AUTO_INCREMENT PRIMARY KEY,
    paquete_id INT NOT NULL,
    producto_id INT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (paquete_id) REFERENCES paquetes(id) ON DELETE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES productos(id) ON DELETE CASCADE
);

INSERT INTO paquetes (numero_orden, usuario_id, total, estado, direccion_envio, fecha_creacion) VALUES
('ORD-001', 13, 680, 'pending', 'Av. Corrientes 1234, CABA', '2024-01-15 10:30:00'),
('ORD-002', 14, 470, 'shipped', 'Calle 45 Nº1200, La Plata, Buenos Aires', '2024-01-20 14:15:00'),
('ORD-003', 15, 510, 'delivered', 'Belgrano 555, Mendoza', '2024-02-01 09:00:00'),
('ORD-004', 16, 830, 'pending', 'Av. Colón 200, Córdoba', '2024-02-10 12:45:00'),
('ORD-005', 17, 660, 'shipped', 'San Martín 890, Rosario', '2024-03-05 17:20:00');

-- Paquete 1 (ORD-001)
INSERT INTO items_paquete (paquete_id, producto_id, cantidad, precio_unitario) VALUES
(1, 20, 2, 250),
(1, 7, 1, 180);

-- Paquete 2 (ORD-002)
INSERT INTO items_paquete (paquete_id, producto_id, cantidad, precio_unitario) VALUES
(2, 15, 1, 220),
(2, 29, 1, 190),
(2, 18, 1, 280);

-- Paquete 3 (ORD-003)
INSERT INTO items_paquete (paquete_id, producto_id, cantidad, precio_unitario) VALUES
(3, 9, 2, 210),
(3, 29, 1, 190);

-- Paquete 4 (ORD-004)
INSERT INTO items_paquete (paquete_id, producto_id, cantidad, precio_unitario) VALUES
(4, 15, 2, 220),
(4, 7, 1, 180),
(4, 18, 1, 280);

-- Paquete 5 (ORD-005)
INSERT INTO items_paquete (paquete_id, producto_id, cantidad, precio_unitario) VALUES
(5, 37, 1, 230),
(5, 20, 1, 250),
(5, 9, 1, 210);
