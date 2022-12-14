export interface BaseController<T> {

    save(item: T): void;

    findAll(): T[];

    findById(id: string): T;

    updateById(id: string, parameters: Map<string, Object>): T;

    deleteById(id: string): void;

}


