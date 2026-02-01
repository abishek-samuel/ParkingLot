class Reciept {
    private readonly id:string
    private readonly amount:number
    private readonly paymentId:string
    private readonly entryTime:Date
    private readonly exitTime: Date
    private readonly paymentStatus: PaymentStatus

    constructor(amount:number, paymentId:string, entryTime:Date, exitTime:Date, paymentStatus:PaymentStatus){
        this.id = crypto.randomUUID()
        this.amount = amount
        this.paymentId = paymentId
        this.entryTime = entryTime
        this.exitTime = exitTime
        this.paymentStatus = paymentStatus
    }
}