export interface BaseController<T> {

    save(item: T): void;

    findAll(): T[];

    findById(id: string): T;

    //update

    deleteById(id: string): void;
}


