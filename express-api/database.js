import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export default class MongoAtlas {
  constructor(databaseName) {
    this.atlasUrl = process.env.ATLAS_URL;
    this.credentials = process.env.ATLAS_CREDENTIALS;
    this.databaseName = databaseName;
    this.connectionString = `mongodb+srv://${this.credentials}@${this.atlasUrl + this.dbName}?retryWrites=true&w=majority`;
  }
  connect() {
    mongoose.Promise = global.Promise;
    mongoose.connect(this.connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to Mongo Atlas');
  }
}

