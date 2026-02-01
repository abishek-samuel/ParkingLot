class ParkingSlot {
    private readonly id: string
    private readonly vehicleType: VehicleType
    
    private vehicleId: string | null

    constructor(vehicleType:VehicleType){
        this.id = crypto.randomUUID()
        this.vehicleId = null
        this.vehicleType = vehicleType
    }
}