import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Altere para a URL da sua API

export const scheduleAppointment = async (appointmentData) => {
  try {
    const response = await axios.post(`${API_URL}/agendamentos`, appointmentData);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao agendar a consulta: ' + error.message);
  }
};