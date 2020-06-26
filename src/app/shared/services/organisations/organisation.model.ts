export class Organisation {
    public id: string
    public name: string
    public active: string

    constructor(
        id: string,
        name: string,
        active: string
    ) {
        this.id = id
        this.name = name
        this.active = active
    }
}