export class Event {

    id: number ;
    title: string;
    shortDescription: string;
    longDescription: string;
    createdAt: Date ;
    eventDate: Date;
    important: any;
    image: string;
    category: Category;

}

export class Category{
    id: number;
    name: string;
}
