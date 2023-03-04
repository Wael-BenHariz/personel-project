import { Condidat } from "./condidat.model";

export class Commentaire {
    idCommentaire : number;
    nomCommentaire : string;
    emailCommentaire : string;
    sujetCommentaire : string;
    condidatCommenter : Condidat
}