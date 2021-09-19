interface SpielerSchema {
    _id: { $oid: string };
    bezeichnung: string;
    vorname: string;
    nachname: string;
    alias: string;
    geboren: string;
    rueckennr: string;
    spielposition: string;
    verein: string;
    mannschaft: string;
    spielfuss: string;
    nationalitaet: string;
}

export default SpielerSchema;