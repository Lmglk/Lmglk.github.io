export interface IPerson {
    name: string;
    role: string;
    imageURL: string;
    contacts: {
        phone: string;
        email: string;
        location: string;
    };
}
