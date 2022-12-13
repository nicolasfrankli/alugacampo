export interface BaseRepository<T> {
    
    save(futsalCourt: T): void;

    findAll(): T[];

    findById(id: string): T;

    deleteById(id: string): void;

    // update(parameters: T): T;

}
