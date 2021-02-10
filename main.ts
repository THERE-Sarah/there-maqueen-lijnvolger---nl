let Left_Detector = 0
let Right_Detector = 0
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
basic.forever(function () {
    Right_Detector = pins.digitalReadPin(DigitalPin.P1)
    Left_Detector = pins.digitalReadPin(DigitalPin.P2)
    if (Left_Detector == 0 && Right_Detector == 0) {
        maqueen.motorStop(maqueen.aMotors.M1)
        maqueen.motorStop(maqueen.aMotors.M2)
    } else if (Left_Detector == 1 && Right_Detector == 0) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 100)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 20)
    } else if (Left_Detector == 0 && Right_Detector == 1) {
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 20)
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 100)
    } else if (Left_Detector == 1 && Right_Detector == 1) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 100)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 100)
    }
})
