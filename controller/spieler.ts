import { db } from '../db/mongo.ts';
import SpielerSchema from '../models/spieler.ts';
import { Bson } from '../deps.ts';

const spielerCollection = db.collection<SpielerSchema>('spieler');

const extractSpieler = (spieler: SpielerSchema) => {
    const { _id, bezeichnung, vorname, nachname, alias, geboren, rueckennr, spielposition, 
        verein, mannschaft, spielfuss, nationalitaet  } = spieler;
    return { _id, bezeichnung, vorname, nachname, alias, geboren, rueckennr, spielposition, 
        verein, mannschaft, spielfuss, nationalitaet };
} 

const getSpieler = async ({ response }: { response: any }) => {
    const result: SpielerSchema[] = await spielerCollection.find().toArray();
    const liste = result.map( (spieler) => { return extractSpieler(spieler) });

    response.body = {
        success: true,
        data: liste
    }
};

const getSpielerById = async ({ params, response, }: { params: { id: string }; response: any; }) => {
    
    const result: SpielerSchema = 
        await spielerCollection.findOne({ _id: new Bson.ObjectId(params.id) }) as SpielerSchema;

    if (result) {       
        const spieler = extractSpieler(result)
        response.body = {
            success: true,
            data: spieler ,
        };
    } else {
        response.body = {
            success: false,
            data: "Keinen Spieler gefunden",
        };
    }
};

export { getSpieler, getSpielerById }