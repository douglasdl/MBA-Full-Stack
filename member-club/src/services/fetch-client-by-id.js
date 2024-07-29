import { apiConfig } from './api-config';

export async function fetchClientById({ id }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/clients`);
    
    // Check if the response status is OK (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const filteredClient = data.find(client => client.id === id);

    // If no client is found, throw an error
    if (!filteredClient) {
      throw new Error('Client not found');
    }

    return filteredClient;
  } catch (error) {
    console.error(error);
    alert('Não foi possível encontrar clientes com o ID selecionado!');
    throw error; // Rethrow the error to be handled by the calling function
  }
}
