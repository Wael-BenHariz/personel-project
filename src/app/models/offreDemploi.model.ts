import { Categorie } from "./categorie.model";
import { Entreprise } from "./entreprise.model";

export class OffreEmploi {
    idOffre : number;
    titreOffre : string;
    descriptionOffre : string;
    offreEmploi : string;
    adresseOffre : string;
    salaireOffre : string;
    niveauEtudeOffre : string;
    experienceOffre : string;
    typeDeContratOffre : string;
    exigenceOffre : string;
    entreprise : Entreprise ;
    categorie : Categorie
}