// import { MongoMemoryServer } from 'mongodb-memory-server';
// import mongoose from 'mongoose';
// import { app } from '../app';

// let mongo: any;
// beforeAll(async () => {
//   mongo = new MongoMemoryServer();
//   const mongoUri = await mongo.getUri();
//
//   // await mongoose.connect(mongoUri, {
//   //   useNewUrlParser: true,
//   //   useInifiedTopology: true
//   // });
// });
//
// beforeEach(async () => {
//   const collections = await mongoose.connection.db.collection();
//
//   for (let collection of collections) {
//     await collection.deleyMany({});
//   }
// });
//
// afterAll(async () => {
//   await mongo.stop();
//   await mongoose.connection.close();
// })


