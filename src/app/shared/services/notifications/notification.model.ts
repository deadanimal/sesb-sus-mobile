export class Notification {
    public id: string
    public message: string
    public create: string
    public sent: string
    public read: string
    public receiver: string

    constructor(
        id: string,
        message: string,
        create: string,
        sent: string,
        read: string,
        receiver: string
    ) {
        this.id = id
        this.message = message
        this.create = create
        this.sent = sent
        this.read = read
        this.receiver = receiver
    }
}