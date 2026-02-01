class Payment {
    private readonly id: string
    private readonly ticketId: string
    private readonly amount: number
    private readonly paymentType: PaymentType

    private status: PaymentStatus

    constructor(ticketId:string, amount:number, paymentType:PaymentType){
        this.id = crypto.randomUUID()
        this.ticketId = ticketId
        this.amount = amount
        this.paymentType = paymentType
        this.status = PaymentStatus.CREATED
    }
}

enum PaymentType {
    STRIPE = "STRIPE",
    RAZORPAY = "RAZORPAY"
}

enum PaymentStatus {
    CREATED = "CREATED",
    PENDING = "PENDING",
    SUCCESS = "SUCCESS",
    FAILED = "FAILED"
}