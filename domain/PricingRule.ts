class PricingRule {
    private readonly id: string
    private readonly vehicleType: VehicleType

    private flatPrice: number
    private hourlyPrice: number 

    constructor(vehicleType: VehicleType, flatPrice:number, hourlyPrice:number){
        this.id = crypto.randomUUID()
        this.vehicleType = vehicleType
        this.flatPrice = flatPrice
        this.hourlyPrice = hourlyPrice
    }
}