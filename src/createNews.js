// Importa o modelo de Notícia
import News from './artigo/Artigos.js';

// Função para criar e salvar uma nova notícia
async function createNews() {
  try {
    // Criando uma nova instância de Notícia
    const novaNoticia = new News({
      title: 'Novo avanço na tecnologia de inteligência artificial',
      content: 'Uma nova descoberta revolucionária na área de inteligência artificial promete transformar o mundo digital.',
      author: 'John Doe'
    });
    
    // Salvando a nova notícia no banco de dados
    const noticiaSalva = await novaNoticia.save();
    console.log('Notícia salva com sucesso:', noticiaSalva);
  } catch (error) {
    console.error('Erro ao salvar a notícia:', error);
  }
}

export default createNews;
