class Ticket {
    private readonly id:string
    private readonly vehicleId: string
    private readonly slotId: string
    private readonly entryTime: Date

    private exitTime: Date | null
    private status: TicketStatus

    constructor(vehicleId:string,slotId:string,entryTIme:Date){
        this.id = crypto.randomUUID()
        this.vehicleId = vehicleId
        this.slotId = slotId
        this.entryTime = new Date()
        this.exitTime = null
        this.status = TicketStatus.VALID
    }
}

enum TicketStatus {
    VALID="VALID",
    INVALID="INVALID"
}