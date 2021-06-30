CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  price INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  image_url VARCHAR,
  colour TEXT,
  description TEXT
);