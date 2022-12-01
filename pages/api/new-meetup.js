import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        const {title, image, address, description} = data;

        const client = await MongoClient.connect('mongodb+srv://Sirakov4444:Sirakov4444@cluster44.2wdmms8.mongodb.net/?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection('meetup');
        const result = await meetupsCollection.insertOne(data);
        console.log(result);

        client.close();
        res.status(201).json({message: 'Meetup Inserted!'});
    }
};

export default handler;