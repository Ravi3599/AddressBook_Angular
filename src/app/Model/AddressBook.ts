export class AddressBook{
    name:string;
    address:string;
    city:string;
    state:string;
    zip:number;
    phoneNumber:number;

    constructor(name:string,address:string,city:string,state:string,zip:number,phoneNumber:number){
        this.name=name;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phoneNumber=phoneNumber;

    }
}