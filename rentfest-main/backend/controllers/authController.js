const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
  const { nama, telepon, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  const sql = "INSERT INTO users (nama, telepon, email, password) VALUES (?, ?, ?, ?)";
  db.query(sql, [nama, telepon, email, hashedPassword], (err, result) => {
    if (err) {
      console.error('Registrasi Belum Berhasil:', err);
      return res.status(500).json({ message: 'Registrasi Belum Berhasil' });
    }
    return res.status(201).json({ message: 'Registrasi Berhasil' });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error('Gagal Masuk:', err);
      return res.status(500).json({ message: 'Gagal Masuk' });
    }
    if (results.length === 0) {
      return res.status(401).json({ message: 'Email atau password salah' });
    }

    const user = results[0];
    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: 'Email atau password salah' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.status(200).json({ token, message: 'Berhasil Masuk' });
  });
};

exports.getUserData = (req, res) => {
  const userId = req.userId;

  const sql = "SELECT nama, email FROM users WHERE id = ?";
  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error('Gagal mendapatkan data user:', err);
      return res.status(500).json({ message: 'Gagal mendapatkan data user' });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'User tidak ditemukan' });
    }
    return res.status(200).json(results[0]);
  });
};