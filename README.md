# Restaurant Reservation App

Aplikasi reservasi restoran yang memungkinkan pengguna untuk mencari dan memesan tempat di restoran favorit mereka.

## Fitur

- **Pengguna (User)**:
  - Registrasi dan login pengguna
  - Melihat profil pengguna
  - Melakukan reservasi di restoran
  - Melihat dan mengelola reservasi yang ada

- **Admin**:
  - Menambah, mengedit, dan menghapus restoran
  - Melihat daftar reservasi untuk semua restoran

## Teknologi yang Digunakan

- **Backend**:
  - Node.js
  - Express.js
  - PostgreSQL untuk basis data

- **Frontend**:
  - React dengan react-router-dom untuk routing
  - Bootstrap dan react-bootstrap untuk UI komponen dan styling responsif

## Instalasi dan Penggunaan

### Backend

1. Clone repositori ini:

   ```bash
   git clone <link-repositori>
   cd restaurant-reservation-backend

2. Install dependensi:

   npm install

3. Buat file .env dari contoh .env.example dan sesuaikan konfigurasi basis data PostgreSQL Anda.

4. Jalankan migrasi basis data untuk membuat skema tabel:

   npx knex migrate:latest

 ### Frontend

 1. Masuk ke direktori frontend:

    ```bash
    cd restaurant-reservation-frontend

2. Install dependensi:

    npm install
    npm install react-bootstrap bootstrap

3. Jalankan aplikasi frontend:

    npm start

   
