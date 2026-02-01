class Vehicle {
    private readonly id: string
    private readonly license: string
    private readonly vehicleType: VehicleType

    constructor(license:string,vehicleType:VehicleType){
        this.id = crypto.randomUUID()
        this.license = license
        this.vehicleType = vehicleType
    }
}

enum VehicleType {
    BIKE="BIKE",
    CAR="CAR",
    TRUCK="TRUCK"
}