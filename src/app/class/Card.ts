export class Card {
    
    public id: number;
    public nom: string;
    public prenom: string;
    public adresse: string;
    public mail: string;
    public telephone: string;
    public lienImage: string;
    public bgColor: string;
    public fontColor: string;

    

    constructor( id: number, nom: string, prenom: string, telephone: string, adresse: string, lienImage: string, mail: string, bgColor: string, fontColor: string ) {
        
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.telephone = telephone;
        this.adresse = adresse;
        this.lienImage = lienImage;
        this.mail = mail;
        this.bgColor = bgColor;
        this.fontColor = fontColor;
    }
    getId(): number{
        return this.id;
    }

    getNom(): string {
        return this.nom;
    }

    getPrenom(): string {
        return this.prenom;
    }

    getAdresse(): string {
        return this.adresse;
    }

    getLienImage(): string {
        return this.lienImage;
    }

    getMail(): string{
        return this.mail;
    }

    getTelephone(): string{
        return this.telephone;
    }

    getBgColor(): string{
        return this.bgColor;
    }

    getFontColor(): string{
        return this.fontColor;
    }

}