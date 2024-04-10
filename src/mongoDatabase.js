import mongoose from 'mongoose';

async function connectDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Conexão com o MongoDB estabelecida');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    // Verifica se estamos no ambiente Node.js antes de chamar process.exit(1)
    if (typeof process !== 'undefined' && process.exit) {
      process.exit(1);
    }
  }
}

export default connectDB;
