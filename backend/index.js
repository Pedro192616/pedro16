const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const pool = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;
const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';

app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: CORS_ORIGIN }));

app.get('/api/health', (req, res) => res.json({ ok: true, time: new Date().toISOString() }));

app.post('/api/agendamentos', async (req, res) => {
  try {
    const { nome, telefone, servico } = req.body;
    if (!nome || !telefone || !servico) {
      return res.status(400).json({ success: false, message: 'Todos os campos são obrigatórios.' });
    }

    const [result] = await pool.execute(
      'INSERT INTO agendamentos (nome, telefone, servico, criado_em) VALUES (?, ?, ?, NOW())',
      [nome.trim(), telefone.trim(), servico.trim()]
    );

    return res.status(201).json({ success: true, id: result.insertId });
  } catch (err) {
    console.error('Erro /api/agendamentos:', err);
    return res.status(500).json({ success: false, message: 'Erro interno no servidor.' });
  }
});

// tratamento básico de rotas não encontradas
app.use((req, res) => res.status(404).json({ success: false, message: 'Rota não encontrada.' }));

// error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ success: false, message: 'Erro interno.' });
});

const server = app.listen(PORT, () => console.log(`API rodando em http://localhost:${PORT}`));

// shutdown gracioso
process.on('SIGINT', () => {
  console.log('Finalizando servidor...');
  server.close(() => process.exit(0));
});
