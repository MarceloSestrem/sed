//% color="#000080" icon="\uf1ec" block="SED Joinville"
namespace SED {


    // --- ENUMERAÇÕES ---


    export enum Leds {
        ON = 1,
        OFF = 2
    }


    export enum Sensor {
        Esquerdo = 1,
        Centro = 2,
        Direito = 3
    }


    export enum Um_sensor {
        //% block="▮"
        branco = 1,
        //% block="▯"
        preto = 2
    }


    export enum Dois_sensores {
        //% block="▮▮"
        branco_branco = 1,
        //% block="▮▯"
        branco_preto = 2,
        //% block="▯▮"
        preto_branco = 3,
        //% block="▯▯"
        preto_preto = 4
    }


    export enum Tres_sensores {
        //% block="▮▮▮"
        branco_branco_branco = 1,
        //% block="▮▯▮"
        branco_preto_branco = 2,
        //% block="▯▮▮"
        preto_branco_branco = 3,
        //% block="▯▯▮"
        branco_branco_preto = 4,
        //% block="▮▮▯"
        preto_preto_branco = 5,
        //% block="▮▯▯"
        branco_preto_preto = 6,
        //% block="▯▮▯"
        preto_branco_preto = 7,
        //% block="▯▯▯"
        preto_preto_preto = 8
    }


    export enum PingUnit {
        //% block="cm"
        cm,
        //% block="polegadas"
        inch,
        //% block="μs"
        MicroSeconds
    }


    export enum DistanceUnit {
        //% block="cm"
        cm = 58,
        //% block="polegadas"
        inch = 148
    }


    export enum Color {
        //% block="Vermelho"
        Red,
        //% block="Verde"
        Green,
        //% block="Azul"
        Blue,
        //% block="Transparente"
        Clear
    }


    export enum ColorList {
        //% block="Vermelho"
        red,
        //% block="Verde"
        green,
        //% block="Azul"
        blue,
        //% block="Ciano"
        cyan,
        //% block="Magenta"
        magenta,
        //% block="Amarelo"
        yellow,
        //% block="Branco"
        white
    }


    export enum GasList {
        //% block="CO"
        Co,
        //% block="CO2"
        Co2,
        //% block="Fumaça"
        Smoke,
        //% block="Álcool"
        Alcohol
    }


    export enum Servos {
        S1 = 0x01,
        S2 = 0x02,
        S3 = 0x03,
        S4 = 0x04,
        S5 = 0x05,
        S6 = 0x06,
        S7 = 0x07,
        S8 = 0x08
    }


    export enum Motors {
        M1A = 0x1,
        M1B = 0x2,
        M2A = 0x3,
        M2B = 0x4
    }


    export enum Steppers {
        M1 = 0x1,
        M2 = 0x2
    }


    export enum SonarVersion {
        V1 = 0x1,
        V2 = 0x2
    }


    export enum Turns {
        //% blockId="T1B4" block="1/4"
        T1B4 = 90,
        //% blockId="T1B2" block="1/2"
        T1B2 = 180,
        //% blockId="T1B0" block="1"
        T1B0 = 360,
        //% blockId="T2B0" block="2"
        T2B0 = 720,
        //% blockId="T3B0" block="3"
        T3B0 = 1080,
        //% blockId="T4B0" block="4"
        T4B0 = 1440,
        //% blockId="T5B0" block="5"
        T5B0 = 1800
    }


    export enum ValueUnit {
        //% block="mm"
        Millimetros,
        //% block="cm"
        Centimetros
    }


    export enum LcdPosition1602 {
        Pos1 = 1, Pos2 = 2, Pos3 = 3, Pos4 = 4, Pos5 = 5,
        Pos6 = 6, Pos7 = 7, Pos8 = 8, Pos9 = 9, Pos10 = 10,
        Pos11 = 11, Pos12 = 12, Pos13 = 13, Pos14 = 14, Pos15 = 15,
        Pos16 = 16, Pos17 = 17, Pos18 = 18, Pos19 = 19, Pos20 = 20,
        Pos21 = 21, Pos22 = 22, Pos23 = 23, Pos24 = 24, Pos25 = 25,
        Pos26 = 26, Pos27 = 27, Pos28 = 28, Pos29 = 29, Pos30 = 30,
        Pos31 = 31, Pos32 = 32
    }


    export enum LcdPosition2004 {
        Pos1 = 1, Pos2 = 2, Pos3 = 3, Pos4 = 4, Pos5 = 5,
        Pos6 = 6, Pos7 = 7, Pos8 = 8, Pos9 = 9, Pos10 = 10,
        Pos11 = 11, Pos12 = 12, Pos13 = 13, Pos14 = 14, Pos15 = 15,
        Pos16 = 16, Pos17 = 17, Pos18 = 18, Pos19 = 19, Pos20 = 20,
        Pos21 = 21, Pos22 = 22, Pos23 = 23, Pos24 = 24, Pos25 = 25,
        Pos26 = 26, Pos27 = 27, Pos28 = 28, Pos29 = 29, Pos30 = 30,
        Pos31 = 31, Pos32 = 32, Pos33 = 33, Pos34 = 34, Pos35 = 35,
        Pos36 = 36, Pos37 = 37, Pos38 = 38, Pos39 = 39, Pos40 = 40,
        Pos41 = 41, Pos42 = 42, Pos43 = 43, Pos44 = 44, Pos45 = 45,
        Pos46 = 46, Pos47 = 47, Pos48 = 48, Pos49 = 49, Pos50 = 50,
        Pos51 = 51, Pos52 = 52, Pos53 = 53, Pos54 = 54, Pos55 = 55,
        Pos56 = 56, Pos57 = 57, Pos58 = 58, Pos59 = 59, Pos60 = 60,
        Pos61 = 61, Pos62 = 62, Pos63 = 63, Pos64 = 64, Pos65 = 65,
        Pos66 = 66, Pos67 = 67, Pos68 = 68, Pos69 = 69, Pos70 = 70,
        Pos71 = 71, Pos72 = 72, Pos73 = 73, Pos74 = 74, Pos75 = 75,
        Pos76 = 76, Pos77 = 77, Pos78 = 78, Pos79 = 79, Pos80 = 80
    }


    export enum LcdBacklight {
        //% block="desligada"
        Off = 0,
        //% block="ligada"
        On = 8
    }


    export enum TextAlignment {
        //% block="alinhado à esquerda"
        Left,
        //% block="alinhado à direita"
        Right
    }


    export enum TextOption {
        //% block="alinhar à esquerda"
        AlignLeft,
        //% block="alinhar à direita"
        AlignRight,
        //% block="preencher com zeros"
        PadWithZeros
    }


    // --- CONSTANTES INTERNAS E VARIÁVEIS ---


    const PCA9685_ADDRESS = 0x40
    const MODE1 = 0x00
    const MODE2 = 0x01
    const SUBADR1 = 0x02
    const SUBADR2 = 0x03
    const SUBADR3 = 0x04
    const PRESCALE = 0xFE
    const LED0_ON_L = 0x06
    const LED0_ON_H = 0x07
    const LED0_OFF_L = 0x08
    const LED0_OFF_H = 0x09
    const ALL_LED_ON_L = 0xFA
    const ALL_LED_ON_H = 0xFB
    const ALL_LED_OFF_L = 0xFC
    const ALL_LED_OFF_H = 0xFD


    const STP_CHA_L = 2047
    const STP_CHA_H = 4095
    const STP_CHB_L = 1
    const STP_CHB_H = 2047
    const STP_CHC_L = 1023
    const STP_CHC_H = 3071
    const STP_CHD_L = 3071
    const STP_CHD_H = 1023


    const HT16K33_ADDRESS = 0x70
    const HT16K33_BLINK_CMD = 0x80
    const HT16K33_BLINK_DISPLAYON = 0x01
    const HT16K33_BLINK_OFF = 0
    const HT16K33_BLINK_2HZ = 1
    const HT16K33_BLINK_1HZ = 2
    const HT16K33_BLINK_HALFHZ = 3
    const HT16K33_CMD_BRIGHTNESS = 0xE0


    let initialized = false
    let initializedMatrix = false
    let matBuf = pins.createBuffer(17);
    let distanceBuf = 0;


    function i2cwrite(addr: number, reg: number, value: number) {
        let buf = pins.createBuffer(2)
        buf[0] = reg
        buf[1] = value
        pins.i2cWriteBuffer(addr, buf)
    }


    function i2ccmd(addr: number, value: number) {
        let buf = pins.createBuffer(1)
        buf[0] = value
        pins.i2cWriteBuffer(addr, buf)
    }


    function i2cread(addr: number, reg: number) {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(addr, NumberFormat.UInt8BE);
        return val;
    }


    function initPCA9685(): void {
        i2cwrite(PCA9685_ADDRESS, MODE1, 0x00)
        setFreq(50);
        for (let idx = 0; idx < 16; idx++) {
            setPwm(idx, 0, 0);
        }
        initialized = true
    }


    function setFreq(freq: number): void {
        let prescaleval = 25000000;
        prescaleval /= 4096;
        prescaleval /= freq;
        prescaleval -= 1;
        let prescale = prescaleval;
        let oldmode = i2cread(PCA9685_ADDRESS, MODE1);
        let newmode = (oldmode & 0x7F) | 0x10;
        i2cwrite(PCA9685_ADDRESS, MODE1, newmode);
        i2cwrite(PCA9685_ADDRESS, PRESCALE, prescale);
        i2cwrite(PCA9685_ADDRESS, MODE1, oldmode);
        control.waitMicros(5000);
        i2cwrite(PCA9685_ADDRESS, MODE1, oldmode | 0xa1);
    }


    function setPwm(channel: number, on: number, off: number): void {
        if (channel < 0 || channel > 15) return;
        let buf = pins.createBuffer(5);
        buf[0] = LED0_ON_L + 4 * channel;
        buf[1] = on & 0xff;
        buf[2] = (on >> 8) & 0xff;
        buf[3] = off & 0xff;
        buf[4] = (off >> 8) & 0xff;
        pins.i2cWriteBuffer(PCA9685_ADDRESS, buf);
    }


    function setStepper(index: number, dir: boolean): void {
        if (index == 1) {
            if (dir) {
                setPwm(0, STP_CHA_L, STP_CHA_H);
                setPwm(2, STP_CHB_L, STP_CHB_H);
                setPwm(1, STP_CHC_L, STP_CHC_H);
                setPwm(3, STP_CHD_L, STP_CHD_H);
            } else {
                setPwm(3, STP_CHA_L, STP_CHA_H);
                setPwm(1, STP_CHB_L, STP_CHB_H);
                setPwm(2, STP_CHC_L, STP_CHC_H);
                setPwm(0, STP_CHD_L, STP_CHD_H);
            }
        } else {
            if (dir) {
                setPwm(4, STP_CHA_L, STP_CHA_H);
                setPwm(6, STP_CHB_L, STP_CHB_H);
                setPwm(5, STP_CHC_L, STP_CHC_H);
                setPwm(7, STP_CHD_L, STP_CHD_H);
            } else {
                setPwm(7, STP_CHA_L, STP_CHA_H);
                setPwm(5, STP_CHB_L, STP_CHB_H);
                setPwm(6, STP_CHC_L, STP_CHC_H);
                setPwm(4, STP_CHD_L, STP_CHD_H);
            }
        }
    }


    function stopMotor(index: number) {
        setPwm((index - 1) * 2, 0, 0);
        setPwm((index - 1) * 2 + 1, 0, 0);
    }


    function matrixInit() {
        i2ccmd(HT16K33_ADDRESS, 0x21);
        i2ccmd(HT16K33_ADDRESS, HT16K33_BLINK_CMD | HT16K33_BLINK_DISPLAYON | (0 << 1));
        i2ccmd(HT16K33_ADDRESS, HT16K33_CMD_BRIGHTNESS | 0xF);
    }


    function matrixShow() {
        matBuf[0] = 0x00;
        pins.i2cWriteBuffer(HT16K33_ADDRESS, matBuf);
    }


    // ==========================================
    // SUBCATEGORIA: MATEMÁTICA
    // ==========================================


    //% subcategory="Matemática"
    //% blockId=sed_arredondar_casas
    //% block="arredondar %valor para %casas casas decimais"
    //% valor.defl=3.14159 casas.defl=2
    //% weight=100 color=#000080
    export function arredondarCasas(valor: number, casas: number): number {
        let fator = Math.pow(10, Math.max(0, casas));
        return Math.round(valor * fator) / fator;
    }


    //% subcategory="Matemática"
    //% blockId=sed_multiplicar_tres
    //% block="multiplicar %a × %b × %c"
    //% a.defl=1 b.defl=1 c.defl=1
    //% inlineInputMode=inline weight=90 color=#000080
    export function multiplicarTres(a: number, b: number, c: number): number {
        return a * b * c;
    }


    //% subcategory="Matemática"
    //% blockId=sed_somar_tres
    //% block="somar %a + %b + %c"
    //% a.defl=0 b.defl=0 c.defl=0
    //% inlineInputMode=inline weight=80 color=#000080
    export function somarTres(a: number, b: number, c: number): number {
        return a + b + c;
    }


    //% subcategory="Matemática"
    //% blockId=sed_subtrair_tres
    //% block="subtrair %a - %b - %c"
    //% a.defl=0 b.defl=0 c.defl=0
    //% inlineInputMode=inline weight=70 color=#000080
    export function subtrairTres(a: number, b: number, c: number): number {
        return a - b - c;
    }


    //% subcategory="Matemática"
    //% blockId=sed_somar block="%a + %b"
    //% weight=60 color=#000080
    export function somar(a: number, b: number): number {
        return a + b;
    }


    //% subcategory="Matemática"
    //% blockId=sed_subtrair block="%a - %b"
    //% weight=59 color=#000080
    export function subtrair(a: number, b: number): number {
        return a - b;
    }


    //% subcategory="Matemática"
    //% blockId=sed_multiplicar block="%a × %b"
    //% weight=58 color=#000080
    export function multiplicar(a: number, b: number): number {
        return a * b;
    }


    //% subcategory="Matemática"
    //% blockId=sed_dividir block="%a ÷ %b"
    //% weight=57 color=#000080
    export function dividir(a: number, b: number): number {
        if (b == 0) return 0;
        return a / b;
    }


    //% subcategory="Matemática"
    //% blockId=sed_mapear
    //% inlineInputMode=inline
    //% block="mapear valor %val de [ %fromLow , %fromHigh ] para [ %toLow , %toHigh ]"
    //% weight=56 color=#000080
    export function mapear(val: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number {
        return Math.map(val, fromLow, fromHigh, toLow, toHigh);
    }


    // ==========================================
    // SUBCATEGORIA: MOTORES
    // ==========================================
    /**
        * Execute one motor at the same time
        * @param motor First Motor; eg: M1A, M1B, M2A, M2B
        * @param speed [-255-255] speed of motor; eg: 150, -150
       */


    //% subcategory="Motores"
    //% blockId=robotbit_motor_run block="Motor|%index|velocidade %speed"
    //% group="Motores" weight=59 color=#000080
    //% speed.min=-255 speed.max=255
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function MotorRun(index: Motors, speed: number): void {
        if (!initialized) {
            initPCA9685()
        }
        speed = speed * 16;
        if (speed >= 4096) speed = 4095;
        if (speed <= -4096) speed = -4095;
        if (index > 4 || index <= 0) return;
        let pp = (index - 1) * 2;
        let pn = (index - 1) * 2 + 1;
        if (speed >= 0) {
            setPwm(pp, 0, speed);
            setPwm(pn, 0, 0);
        } else {
            setPwm(pp, 0, 0);
            setPwm(pn, 0, -speed);
        }
    }
    /**
       * Execute two motors at the same time
       * @param motor First Motor; eg: M1A, M1B
       * @param speed1 [-255-255] speed of motor; eg: 150, -150
       * @param motor Second Motor; eg: M2A, M2B
       * @param speed2 [-255-255] speed of motor; eg: 150, -150
      */


    //% subcategory="Motores"
    //% blockId=robotbit_motor_dual block="Motores|%motor1|velocidade %speed1|%motor2|velocidade %speed2"
    //% group="Motores" weight=58 color=#000080
    //% speed1.min=-255 speed1.max=255
    //% speed2.min=-255 speed2.max=255
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function MotorRunDual(motor1: Motors, speed1: number, motor2: Motors, speed2: number): void {
        MotorRun(motor1, speed1);
        MotorRun(motor2, speed2);
    }
    /**
     * Execute motores únicos com atraso
     * @param index Motor Index; eg: M1A, M1B, M2A, M2B
     * @param speed [-255-255] speed of motor; eg: 150, -150
     * @param delay seconde delay to stop; eg: 1
    */
    //% subcategory="Motores"
    //% blockId=robotbit_motor_dual_DELAY block="Motores com delay |%motor1|velocidade %speed1|%motor2|velocidade %speed2 espera(em seg.) %delay"
    //% group="Motores" weight=62 color=#000080
    //% speed1.min=-255 speed1.max=255
    //% speed2.min=-255 speed2.max=255
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=5
    export function MotorRunDualDELAY(motor1: Motors, speed1: number, motor2: Motors, speed2: number, delay: number): void {
        MotorRun(motor1, speed1);
        MotorRun(motor2, speed2);
        basic.pause(delay * 1000);
        MotorRun(motor1, 0);
        MotorRun(motor2, 0);
    }
    /**
       * Execute two motors at the same time
       * @param motor First Motor; eg: M1A, M1B
       * @param speed1 [-255-255] speed of motor; eg: 150, -150
       * @param motor Second Motor; eg: M2A, M2B
       * @param speed2 [-255-255] speed of motor; eg: 150, -150
      */


    //% subcategory="Motores"
    //% blockId=robotbit_motor_rundelay block="Motor|%index|velocidade %speed|espera %delay|s"
    //% group="Motores" weight=57 color=#000080
    //% speed.min=-255 speed.max=255
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function MotorRunDelay(index: Motors, speed: number, delay: number): void {
        MotorRun(index, speed);
        basic.pause(delay * 1000);
        MotorRun(index, 0);
    }

    //% subcategory="Motores"
    //% blockId=robotbit_stop block="Parar Motor|%index|"
    //% group="Motores" weight=56 color=#000080
    export function MotorStop(index: Motors): void {
        MotorRun(index, 0);
    }


    //% subcategory="Motores"
    //% blockId=robotbit_stop_all block="Parando todos os motores"
    //% group="Motores" weight=55 color=#000080
    //% blockGap=50
    export function MotorStopAll(): void {
        if (!initialized) {
            initPCA9685();
        }
        for (let idx = 1; idx <= 4; idx++) {
            stopMotor(idx);
        }
    }


    // ==========================================
    // SUBCATEGORIA: ULTRASSÔNICO
    // ==========================================


    const MICROBIT_LABCODE_ULTRASONIC_OBJECT_DETECTED_ID = 798;
    const MAX_ULTRASONIC_TRAVEL_TIME = 300 * DistanceUnit.cm;
    const ULTRASONIC_MEASUREMENTS = 3;


    interface UltrasonicRoundTrip {
        ts: number;
        rtt: number;
    }


    interface UltrasonicDevice {
        trig: DigitalPin | undefined;
        roundTrips: UltrasonicRoundTrip[];
        medianRoundTrip: number;
        travelTimeObservers: number[];
    }


    let ultrasonicState: UltrasonicDevice;


    /**    
   * @param trig trig pin selection enumeration, eg:DigitalPin.P12
           * @param echo echo pin selection enumeration, eg:DigitalPin.P13
           * @param unit unit of distance, eg: DistanceUnit.CM
           */



    //% subcategory="Ultrassônico"
    //% blockId=sed_ping 
    //% inlineInputMode=inline
    //% block="(HC-SR04) ultrassom pino |trig %trig|echo %echo|unidade %unit"
    //% color=#000080
    export function ping(trig: DigitalPin, echo: DigitalPin, unit: PingUnit, maxCmDistance = 500): number {
        pins.setPull(trig, PinPullMode.PullNone);
        pins.digitalWritePin(trig, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trig, 0);


        const d = pins.pulseIn(echo, PulseValue.High, maxCmDistance * 58);


        switch (unit) {
            case PingUnit.cm: return Math.idiv(d, 58);
            case PingUnit.inch: return Math.idiv(d, 148);
            default: return d;
        }
    }
    /** 
   * @param trig trig pin selection enumeration, eg:DigitalPin.P12
           * @param echo echo pin selection enumeration, eg:DigitalPin.P13
           * @param unit unit of distance, eg: DistanceUnit.CM
           */


    //% subcategory="Ultrassônico"
    //% group="Ultrassônico versão compacta"
    //% blockId="labcode_ultrasonico_conectado"
    //% block="Sensor Ultrassônico pino TRIG %trig pino ECHO %echo %unit"
    //% weight=94 color=#000080
    export function readUltrassonic(trig: DigitalPin, echo: DigitalPin): number {
        let data;
        pins.digitalWritePin(trig, 1);
        basic.pause(1);
        pins.digitalWritePin(trig, 0);
        if (pins.digitalReadPin(echo) == 0) {
            pins.digitalWritePin(trig, 0);
            pins.digitalWritePin(trig, 1);
            basic.pause(20);
            pins.digitalWritePin(trig, 0);
            data = pins.pulseIn(echo, PulseValue.High, 500 * 58);
        } else {
            pins.digitalWritePin(trig, 1);
            pins.digitalWritePin(trig, 0);
            basic.pause(20);
            pins.digitalWritePin(trig, 0);
            data = pins.pulseIn(echo, PulseValue.High, 500 * 58);
        }
        data = data / 59;
        if (data <= 0) return 0;
        if (data > 500) return 500;
        return Math.round(data);
    }


    //% subcategory="Ultrassônico"
    //% group="Ultrassônico"
    //% blockId="labcode_ultrasonico_connectado"
    //% block="Sensor de distancia ultrassônica | Trig em %trig | e Echo em %echo"
    //% trig.fieldEditor="gridpicker" trig.fieldOptions.columns=4 trig.fieldOptions.tooltips="false"
    //% echo.fieldEditor="gridpicker" echo.fieldOptions.columns=4 echo.fieldOptions.tooltips="false"
    //% weight=80 color=#000080
    export function connectUltrasonicDistanceSensor(trig: DigitalPin, echo: DigitalPin): void {
        if (ultrasonicState && ultrasonicState.trig) return;


        if (!ultrasonicState) {
            ultrasonicState = {
                trig: trig,
                roundTrips: [{ ts: 0, rtt: MAX_ULTRASONIC_TRAVEL_TIME }],
                medianRoundTrip: MAX_ULTRASONIC_TRAVEL_TIME,
                travelTimeObservers: [],
            };
        } else {
            ultrasonicState.trig = trig;
        }


        pins.onPulsed(echo, PulseValue.High, () => {
            if (
                pins.pulseDuration() < MAX_ULTRASONIC_TRAVEL_TIME &&
                ultrasonicState.roundTrips.length <= ULTRASONIC_MEASUREMENTS
            ) {
                ultrasonicState.roundTrips.push({
                    ts: input.runningTime(),
                    rtt: pins.pulseDuration(),
                });
            }
        });


        control.inBackground(measureInBackground);
    }
    /**
        * Faça algo quando um objeto for detectado pela primeira vez dentro de um intervalo especificado.
        * @param distance distance to object, eg: 20
        * @param unit unit of distance, eg: DistanceUnit.CM
        * @param handler body code to run when the event is raised
        */


    //% subcategory="Ultrassônico"
    //% group="Ultrassônico"
    //% blockId=labcode_ultrasonic_on_object_detected
    //% block="Objeto detectado a | %distance | %unit"
    //% weight=69 color=#000080
    export function onUltrasonicObjectDetected(distance: number, unit: DistanceUnit, handler: () => void) {
        if (distance <= 0) return;


        if (!ultrasonicState) {
            ultrasonicState = {
                trig: undefined,
                roundTrips: [{ ts: 0, rtt: MAX_ULTRASONIC_TRAVEL_TIME }],
                medianRoundTrip: MAX_ULTRASONIC_TRAVEL_TIME,
                travelTimeObservers: [],
            };
        }


        const travelTimeThreshold = Math.imul(distance, unit);
        ultrasonicState.travelTimeObservers.push(travelTimeThreshold);


        control.onEvent(
            MICROBIT_LABCODE_ULTRASONIC_OBJECT_DETECTED_ID,
            travelTimeThreshold,
            () => {
                handler();
            }
        );
    }
    /**
        * Faça algo quando um objeto for detectado pela primeira vez dentro de um intervalo especificado.
        * @param distance distance to object, eg: 20
        * @param unit unit of distance, eg: DistanceUnit.CM
        * @param handler body code to run when the event is raised
        */


    //% subcategory="Ultrassônico"
    //% group="Ultrassônico"
    //% blockId="labcode_ultrasonic_distance"
    //% block="A distância é %unit"
    //% weight=60 color=#000080
    export function getUltrasonicDistance(unit: DistanceUnit): number {
        if (!ultrasonicState) return -1;
        basic.pause(0);
        return Math.idiv(ultrasonicState.medianRoundTrip, unit);
    }


    //% subcategory="Ultrassônico"
    //% group="Ultrassônico"
    //% blockId="labcode_ultrasonic_less_than"
    //% block="A distância é menor que | %distance | %unit"
    //% weight=50 color=#000080
    export function isUltrasonicDistanceLessThan(distance: number, unit: DistanceUnit): boolean {
        if (!ultrasonicState) return false;
        basic.pause(0);
        return Math.idiv(ultrasonicState.medianRoundTrip, unit) < distance;
    }


    function triggerPulse() {
        pins.setPull(ultrasonicState.trig, PinPullMode.PullNone);
        pins.digitalWritePin(ultrasonicState.trig, 0);
        control.waitMicros(2);


        pins.digitalWritePin(ultrasonicState.trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(ultrasonicState.trig, 0);
    }


    function getMedianRRT(roundTrips: UltrasonicRoundTrip[]) {
        const roundTripTimes = roundTrips.map((urt) => urt.rtt);
        return median(roundTripTimes);
    }


    function median(values: number[]) {
        values.sort((a, b) => a - b);
        return values[(values.length - 1) >> 1];
    }


    function measureInBackground() {
        const trips = ultrasonicState.roundTrips;
        const TIME_BETWEEN_PULSE_MS = 145;


        while (true) {
            const now = input.runningTime();


            if (trips[trips.length - 1].ts < now - TIME_BETWEEN_PULSE_MS - 10) {
                ultrasonicState.roundTrips.push({
                    ts: now,
                    rtt: MAX_ULTRASONIC_TRAVEL_TIME,
                });
            }


            while (trips.length > ULTRASONIC_MEASUREMENTS) {
                trips.shift();
            }


            ultrasonicState.medianRoundTrip = getMedianRRT(ultrasonicState.roundTrips);


            for (let i = 0; i < ultrasonicState.travelTimeObservers.length; i++) {
                const threshold = ultrasonicState.travelTimeObservers[i];
                if (threshold > 0 && ultrasonicState.medianRoundTrip <= threshold) {
                    control.raiseEvent(
                        MICROBIT_LABCODE_ULTRASONIC_OBJECT_DETECTED_ID,
                        threshold
                    );
                    ultrasonicState.travelTimeObservers[i] = -threshold;
                } else if (
                    threshold < 0 &&
                    ultrasonicState.medianRoundTrip > -threshold
                ) {
                    ultrasonicState.travelTimeObservers[i] = -threshold;
                }
            }


            triggerPulse();
            basic.pause(TIME_BETWEEN_PULSE_MS);
        }
    }


    // ==========================================
    // SUBCATEGORIA: SEGUIDOR DE LINHA
    // ==========================================


    //% subcategory="Seguidor de Linha"
    //% blockId=sed_line_finder 
    //% block="pino |%pin| seguidor de linha detecta preto. Inverter ação |$reverseAction|"
    //% reverseAction.shadow="toggleOnOff" color=#000080
    export function lineFinder(pin: DigitalPin, reverseAction?: boolean): boolean {
        if (reverseAction) {
            return pins.digitalReadPin(pin) == 0;
        } else {
            return pins.digitalReadPin(pin) == 1;
        }
    }


    //% subcategory="Seguidor de Linha"
    //% block="sensor Digital de Linha |%Sensor| pino |%pin|"
    //% group="Sensores de linha" color=#000080
    export function detectline(sensor: Sensor, pin: DigitalPin): number {
        if (sensor == Sensor.Esquerdo || sensor == Sensor.Centro || sensor == Sensor.Direito) {
            return pins.digitalReadPin(pin);
        } else {
            return -1;
        }
    }


    //% subcategory="Seguidor de Linha"
    //% block="Sensor Analógico de Linha |%Sensor| pino |%pin|"
    //% group="Sensores de linha" color=#000080
    export function detecetlinha(sensor: Sensor, pin: AnalogPin): number {
        if (sensor == Sensor.Esquerdo || sensor == Sensor.Centro || sensor == Sensor.Direito) {
            return pins.analogReadPin(pin);
        } else {
            return -1;
        }
    }


    //% subcategory="Seguidor de Linha"
    //% blockId="umsensor" block="Detecção do sensor de linha Digital (p1) %Umsensor"
    //% group="Sensores de linha V.2( pinos: P0,  P1 e ou  P2 Cores: Branco: ▮ e Preto: ▯)" color=#000080
    export function readUm(um: Um_sensor): boolean {
        if (um == Um_sensor.branco) {
            return pins.digitalReadPin(DigitalPin.P1) == 0;
        } else if (um == Um_sensor.preto) {
            return pins.digitalReadPin(DigitalPin.P1) == 1;
        }
        return true;
    }


    //% subcategory="Seguidor de Linha"
    //% blockId="doissensores" block="Detecção dos sensores(P1 e P2) de linha Digital %Doissensores"
    //% group="Sensores de linha V.2( pinos: P0,  P1 e ou  P2 Cores: Branco: ▮ e Preto: ▯)" color=#000080
    export function readDois(dois: Dois_sensores): boolean {
        let p1 = pins.digitalReadPin(DigitalPin.P1);
        let p2 = pins.digitalReadPin(DigitalPin.P2);


        if (dois == Dois_sensores.branco_branco) return p1 == 0 && p2 == 0;
        if (dois == Dois_sensores.branco_preto) return p1 == 0 && p2 == 1;
        if (dois == Dois_sensores.preto_branco) return p1 == 1 && p2 == 0;
        if (dois == Dois_sensores.preto_preto) return p1 == 1 && p2 == 1;
        return true;
    }


    //% subcategory="Seguidor de Linha"
    //% blockId="tresssensores" block="Detecção dos sensores de linha Digital %Tressensores"
    //% group="Sensores de linha V.2( pinos: P0,  P1 e ou  P2 Cores: Branco: ▮ e Preto: ▯)" color=#000080
    export function readtres(tres: Tres_sensores): boolean {
        let p0 = pins.digitalReadPin(DigitalPin.P0);
        let p1 = pins.digitalReadPin(DigitalPin.P1);
        let p2 = pins.digitalReadPin(DigitalPin.P2);


        if (tres == Tres_sensores.branco_branco_branco) return p0 == 0 && p1 == 0 && p2 == 0;
        if (tres == Tres_sensores.branco_branco_preto) return p0 == 0 && p1 == 0 && p2 == 1;
        if (tres == Tres_sensores.branco_preto_branco) return p0 == 0 && p1 == 1 && p2 == 0;
        if (tres == Tres_sensores.preto_branco_branco) return p0 == 1 && p1 == 0 && p2 == 0;
        if (tres == Tres_sensores.preto_preto_branco) return p0 == 1 && p1 == 1 && p2 == 0;
        if (tres == Tres_sensores.branco_preto_preto) return p0 == 0 && p1 == 1 && p2 == 1;
        if (tres == Tres_sensores.preto_branco_preto) return p0 == 1 && p1 == 0 && p2 == 1;
        if (tres == Tres_sensores.preto_preto_preto) return p0 == 1 && p1 == 1 && p2 == 1;
        return true;
    }


    //% subcategory="Seguidor de Linha"
    //% blockId="umasensor" block="Detecção do sensor de linha Analógica (P1) %Umsensor | Média = %m"
    //% group="Sensores de linha V.2( pinos: P0,  P1 e ou  P2 Cores: Branco: ▮ e Preto: ▯)"
    //% m.min=0 m.max=1023 color=#000080
    export function readUma(uma: Um_sensor, m: number): boolean {
        let p1 = pins.analogReadPin(AnalogPin.P1);
        if (uma == Um_sensor.branco) return p1 < m;
        if (uma == Um_sensor.preto) return p1 > m;
        return true;
    }


    //% subcategory="Seguidor de Linha"
    //% blockId="doissensoresa" block="Detecção dos sensores(P1 e P2) de linha Analógica %Doissensores | Média = %m"
    //% group="Sensores de linha V.2( pinos: P0,  P1 e ou  P2 Cores: Branco: ▮ e Preto: ▯)"
    //% m.min=0 m.max=1023 color=#000080
    export function readDoisa(doisa: Dois_sensores, m: number): boolean {
        let p1 = pins.analogReadPin(AnalogPin.P1);
        let p2 = pins.analogReadPin(AnalogPin.P2);


        if (doisa == Dois_sensores.branco_branco) return p1 < m && p2 < m;
        if (doisa == Dois_sensores.branco_preto) return p1 < m && p2 > m;
        if (doisa == Dois_sensores.preto_branco) return p1 > m && p2 < m;
        if (doisa == Dois_sensores.preto_preto) return p1 > m && p2 > m;
        return true;
    }


    //% subcategory="Seguidor de Linha"
    //% blockId="tresssensoresa" block="Detecção dos sensores de linha Analógica %Tressensores| Média = %m"
    //% group="Sensores de linha V.2( pinos: P0,  P1 e ou  P2 Cores: Branco: ▮ e Preto: ▯)"
    //% m.min=0 m.max=1023 color=#000080
    export function readtresa(tresa: Tres_sensores, m: number): boolean {
        let p0 = pins.analogReadPin(AnalogPin.P0);
        let p1 = pins.analogReadPin(AnalogPin.P1);
        let p2 = pins.analogReadPin(AnalogPin.P2);


        if (tresa == Tres_sensores.branco_branco_branco) return p0 < m && p1 < m && p2 < m;
        if (tresa == Tres_sensores.branco_branco_preto) return p0 < m && p1 < m && p2 > m;
        if (tresa == Tres_sensores.branco_preto_branco) return p0 < m && p1 > m && p2 < m;
        if (tresa == Tres_sensores.preto_branco_branco) return p0 > m && p1 < m && p2 < m;
        if (tresa == Tres_sensores.preto_preto_branco) return p0 > m && p1 > m && p2 < m;
        if (tresa == Tres_sensores.branco_preto_preto) return p0 < m && p1 > m && p2 > m;
        if (tresa == Tres_sensores.preto_branco_preto) return p0 > m && p1 < m && p2 > m;
        if (tresa == Tres_sensores.preto_preto_preto) return p0 > m && p1 > m && p2 > m;
        return true;
    }


    //% subcategory="Seguidor de Linha"
    //% blockId="doissensoresam" block="Detecção dos sensores(P1 e P2) de linha Analógica %Doissensores | Média 1 = %m1| Média 2 = %m2"
    //% group="Sensores de linha V.2( pinos: P0,  P1 e ou  P2 Cores: Branco: ▮ e Preto: ▯)"
    //% m1.min=0 m1.max=1023 m2.min=0 m2.max=1023 color=#000080
    export function readDoisam(doisa: Dois_sensores, m1: number, m2: number): boolean {
        let p1 = pins.analogReadPin(AnalogPin.P1);
        let p2 = pins.analogReadPin(AnalogPin.P2);


        if (doisa == Dois_sensores.branco_branco) return p1 < m1 && p2 < m2;
        if (doisa == Dois_sensores.branco_preto) return p1 < m1 && p2 > m2;
        if (doisa == Dois_sensores.preto_branco) return p1 > m1 && p2 < m2;
        if (doisa == Dois_sensores.preto_preto) return p1 > m1 && p2 > m2;
        return true;
    }


    // ==========================================
    // SUBCATEGORIA: SENSORES DIGITAIS
    // ==========================================


    //% subcategory="Sensores Digitais"
    //% blockId=sed_collision 
    //% block="sensor de colisão pino |%pin| ativado"
    //% color=#000080
    export function collisionButton(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 0;
    }


    //% subcategory="Sensores Digitais"
    //% blockId=sed_water 
    //% block="sensor de água pino |%pin| detecta água"
    //% color=#000080
    export function waterSensor(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 1;
    }


    //% subcategory="Sensores Digitais"
    //% blockId=sed_magnetic 
    //% block="chave magnética pino |%pin| ativada"
    //% color=#000080
    export function magneticSwitch(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 0;
    }


    //% subcategory="Sensores Digitais"
    //% blockId=sed_hall 
    //% block="sensor hall pino |%pin| ativado"
    //% color=#000080
    export function hallSensor(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 0;
    }


    //% subcategory="Sensores Digitais"
    //% blockId=sed_crash 
    //% block="sensor de impacto |%pin| pressionado"
    //% color=#000080
    export function crashButton(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 0;
    }


    //% subcategory="Sensores Digitais"
    //% blockId=sed_flame 
    //% block="sensor de chama pino |%pin| detecta fogo"
    //% color=#000080
    export function flameSensor(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 0;
    }


    //% subcategory="Sensores Digitais"
    //% blockId=sed_touch 
    //% block="sensor de toque pino |%pin| tocado"
    //% color=#000080
    export function touchSensor(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 1;
    }


    //% subcategory="Sensores Digitais"
    //% blockId=sed_vibration 
    //% block="sensor de vibração pino |%pin| detecta vibração"
    //% color=#000080
    export function vibrationSensor(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 1;
    }


    //% subcategory="Sensores Digitais"
    //% blockId=sed_pir 
    //% block="sensor PIR pino |%pin| detecta movimento"
    //% color=#000080
    export function pirSensor(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 1;
    }


    // ==========================================
    // SUBCATEGORIA: SENSORES ANALÓGICOS
    // ==========================================


    //% subcategory="Sensores Analógicos"
    //% blockId=sed_raindrop 
    //% block="valor do sensor de chuva (0~100) no pino %raindroppin. Intervalo (leitura) min|%vmin| máx|%vmax|"
    //% vmin.defl=0 vmax.defl=1023
    //% color=#000080
    export function raindropSensor(raindroppin: AnalogPin, vmin: number = 0, vmax: number = 1023): number {
        let value = pins.analogReadPin(raindroppin);
        let rain = Math.map(value, vmin, vmax, 0, 100);
        return Math.round(rain);
    }


    //% subcategory="Sensores Analógicos"
    //% blockId=sed_capacitivesoilhumidity 
    //% block="valor da umidade do solo (0~100) no pino %capacitivesoilhumiditypin. Intervalo (leitura) min|%vmin| máx|%vmax|"
    //% vmin.defl=200 vmax.defl=1023
    //% color=#000080
    export function capacitiveSoilHumiditySensor(capacitivesoilhumiditypin: AnalogPin, vmin: number = 200, vmax: number = 1023): number {
        let value2 = pins.analogReadPin(capacitivesoilhumiditypin);
        let humidity = Math.map(value2, vmin, vmax, 100, 0);
        return Math.round(humidity);
    }


    //% subcategory="Sensores Analógicos"
    //% blockId=sed_soilhumidity 
    //% block="valor da umidade do solo (0~100) no pino %soilhumiditypin"
    //% color=#000080
    export function soilHumiditySensor(soilhumiditypin: AnalogPin): number {
        let value3 = pins.analogReadPin(soilhumiditypin);
        let humidity2 = Math.map(value3, 0, 1000, 0, 100);
        return Math.round(humidity2);
    }


    //% subcategory="Sensores Analógicos"
    //% blockId=sed_lightintensity 
    //% block="valor da intensidade de luz (0~100) no pino %lightintensitypin"
    //% color=#000080
    export function lightIntensitySensor(lightintensitypin: AnalogPin): number {
        let value4 = pins.analogReadPin(lightintensitypin);
        let light = Math.map(value4, 0, 750, 0, 100);
        return Math.round(light);
    }


    //% subcategory="Sensores Analógicos"
    //% blockId=sed_uvlevel 
    //% block="sensor UV (0~15) no pino %uvlevelpin"
    //% color=#000080
    export function uvLevelSensor(uvlevelpin: AnalogPin): number {
        let value5 = pins.analogReadPin(uvlevelpin);
        let uv = Math.map(value5, 0, 1023, 0, 15);
        return Math.round(uv);
    }


    //% subcategory="Sensores Analógicos"
    //% blockId=sed_temperature 
    //% block="valor da temperatura (Celsius) no pino %temperaturepin"
    //% color=#000080
    export function temperatureSensor(temperaturepin: AnalogPin): number {
        let B = 4275;
        let value6 = pins.analogReadPin(temperaturepin);
        let R = 1023 / value6 - 1.0;
        R = 100000 * R;
        let temperature = 1.0 / (Math.log(R / 100000) / B + 1 / 298.15) - 273.15;
        return Math.round(temperature);
    }


    //% subcategory="Sensores Analógicos"
    //% blockId=sed_gas 
    //% block="sensor de gás %sensor no pino %gaspin valor de concentração"
    //% color=#000080
    export function gasSensor(sensor: GasList, gaspin: AnalogPin): number {
        let value7 = pins.analogReadPin(gaspin);
        let gas = Math.map(value7, 0, 1023, 0, 100);
        return Math.round(gas);
    }


    //% subcategory="Sensores Analógicos"
    //% blockId=sed_noise 
    //% block="valor do ruído (dB) no pino %noisepin (0~100)"
    //% color=#000080
    export function noiseSensor(noisepin: AnalogPin): number {
        let value8 = pins.analogReadPin(noisepin);
        let noise = Math.map(value8, 0, 1023, 0, 100);
        return Math.round(noise);
    }


    // ==========================================
    // SUBCATEGORIA: COR E GESTOS (I2C)
    // ==========================================


    //% subcategory="Cor e Gestos"
    //% blockId=sed_colorsensor 
    //% block="sensor de cor detectou %Color"
    //% color=#000080
    export function colorSensor(Color: Color): boolean {
        return false;
    }


    //% subcategory="Cor e Gestos"
    //% blockId=sed_apds9960_hue 
    //% block="APDS9960 obter matiz da cor HUE (0~360)"
    //% color=#000080
    export function getHue(): number {
        return 0;
    }


    //% subcategory="Cor e Gestos"
    //% blockId=sed_apds9960_check_color 
    //% block="sensor de cor APDS9960 detecta %color"
    //% color=#000080
    export function checkColor(color: ColorList): boolean {
        let hue = getHue();
        switch (color) {
            case ColorList.red:
                return (hue >= 330 || hue < 20);
            case ColorList.yellow:
                return (hue >= 20 && hue < 75);
            case ColorList.green:
                return (hue >= 75 && hue < 165);
            case ColorList.cyan:
                return (hue >= 165 && hue < 210);
            case ColorList.blue:
                return (hue >= 210 && hue < 270);
            case ColorList.magenta:
                return (hue >= 270 && hue < 330);
            case ColorList.white:
                return true;
            default:
                return false;
        }
    }


    // ==========================================
    // SUBCATEGORIA: LCD DISPLAY
    // ==========================================


    const enum Lcd { Command = 0, Data = 1 }


    interface LcdState {
        i2cAddress: uint8;
        backlight: LcdBacklight;
        characters: Buffer;
        rows: uint8;
        columns: uint8;
        lineNeedsUpdate: uint8;
        refreshIntervalId: number;
    }


    let lcdState: LcdState = undefined;


    function connect(): boolean {
        if (0 != pins.i2cReadNumber(39, NumberFormat.Int8LE, false)) {
            connectLcd(39);
        } else if (0 != pins.i2cReadNumber(63, NumberFormat.Int8LE, false)) {
            connectLcd(63);
        }
        return !!lcdState;
    }


    function write4bits(value: number) {
        if (!lcdState && !connect()) return;
        pins.i2cWriteNumber(lcdState.i2cAddress, value, NumberFormat.Int8LE);
        pins.i2cWriteNumber(lcdState.i2cAddress, value | 0x04, NumberFormat.Int8LE);
        control.waitMicros(1);
        pins.i2cWriteNumber(lcdState.i2cAddress, value & (0xff ^ 0x04), NumberFormat.Int8LE);
        control.waitMicros(50);
    }


    function send(RS_bit: number, payload: number) {
        if (!lcdState) return;
        const highnib = payload & 0xf0;
        write4bits(highnib | lcdState.backlight | RS_bit);
        const lownib = (payload << 4) & 0xf0;
        write4bits(lownib | lcdState.backlight | RS_bit);
    }


    function sendCommand(command: number) { send(Lcd.Command, command); }
    function sendData(data: number) { send(Lcd.Data, data); }


    function setCursor(line: number, column: number) {
        const offsets = [0x00, 0x40, 0x14, 0x54];
        sendCommand(0x80 | (offsets[line] + column));
    }


    function updateCharacterBuffer(
        text: string,
        offset: number,
        length: number,
        columns: number,
        rows: number,
        alignment: TextAlignment,
        pad: string
    ): void {
        if (!lcdState && !connect()) return;


        if (!lcdState.refreshIntervalId) {
            lcdState.refreshIntervalId = control.setInterval(refreshDisplay, 500, control.IntervalMode.Timeout);
        }


        if (lcdState.columns === 0) {
            lcdState.columns = columns;
            lcdState.rows = rows;
            lcdState.characters = pins.createBuffer(lcdState.rows * lcdState.columns);


            const whitespace = "x".charCodeAt(0);
            for (let pos = 0; pos < lcdState.rows * lcdState.columns; pos++) {
                lcdState.characters[pos] = whitespace;
            }
            updateCharacterBuffer("", 0, lcdState.columns * lcdState.rows, lcdState.columns, lcdState.rows, TextAlignment.Left, " ");
        }


        if (columns !== lcdState.columns || rows !== lcdState.rows) return;


        const fillCharacter = pad.length > 0 ? pad.charCodeAt(0) : " ".charCodeAt(0);
        let endPosition = offset + length;
        if (endPosition > lcdState.columns * lcdState.rows) {
            endPosition = lcdState.columns * lcdState.rows;
        }
        let lcdPos = offset;


        if (alignment == TextAlignment.Right) {
            while (lcdPos < endPosition - text.length) {
                if (lcdState.characters[lcdPos] != fillCharacter) {
                    lcdState.characters[lcdPos] = fillCharacter;
                    lcdState.lineNeedsUpdate |= (1 << Math.idiv(lcdPos, lcdState.columns));
                }
                lcdPos++;
            }
        }


        let textPosition = 0;
        while (lcdPos < endPosition && textPosition < text.length) {
            if (lcdState.characters[lcdPos] != text.charCodeAt(textPosition)) {
                lcdState.characters[lcdPos] = text.charCodeAt(textPosition);
                lcdState.lineNeedsUpdate |= (1 << Math.idiv(lcdPos, lcdState.columns));
            }
            lcdPos++;
            textPosition++;
        }


        while (lcdPos < endPosition) {
            if (lcdState.characters[lcdPos] != fillCharacter) {
                lcdState.characters[lcdPos] = fillCharacter;
                lcdState.lineNeedsUpdate |= (1 << Math.idiv(lcdPos, lcdState.columns));
            }
            lcdPos++;
        }
    }


    function sendLine(line: number): void {
        setCursor(line, 0);
        for (let position = lcdState.columns * line; position < lcdState.columns * (line + 1); position++) {
            sendData(lcdState.characters[position]);
        }
    }


    function refreshDisplay() {
        if (!lcdState) return;
        lcdState.refreshIntervalId = undefined;
        for (let i = 0; i < lcdState.rows; i++) {
            if (lcdState.lineNeedsUpdate & (1 << i)) {
                lcdState.lineNeedsUpdate &= ~(1 << i);
                sendLine(i);
            }
        }
    }


    function toAlignment(option?: TextOption): TextAlignment {
        return (option === TextOption.AlignRight || option === TextOption.PadWithZeros) ? TextAlignment.Right : TextAlignment.Left;
    }


    function toPad(option?: TextOption): string {
        return option === TextOption.PadWithZeros ? "0" : " ";
    }


    //% subcategory="LCD"
    //% blockId="sed_lcd_show_string_on_1602"
    //% block="LCD1602 exibir %text | na posição %startPosition=sed_lcd_position_1602 com tamanho %length || e %option"
    //% text.shadowOptions.toString=true 
    //% length.min=1 length.max=32 length.fieldOptions.precision=1
    //% expandableArgumentMode="toggle"
    //% inlineInputMode="inline"
    //% weight=90 color=#000080
    export function showStringOnLcd1602(text: string, startPosition: number, length: number, option?: TextOption): void {
        updateCharacterBuffer(text, startPosition - 1, length, 16, 2, toAlignment(option), toPad(option));
    }


    //% subcategory="LCD"
    //% blockId="sed_lcd_clear_1602" block="LCD1602 limpar tela"
    //% weight=89 color=#000080
    export function clearLcd1602(): void {
        showStringOnLcd1602("", 1, 32);
    }


    //% subcategory="LCD"
    //% blockId="sed_lcd_show_string_on_2004"
    //% block="LCD2004 exibir %text | na posição %startPosition=sed_lcd_position_2004 com tamanho %length || e %option"
    //% text.shadowOptions.toString=true
    //% length.min=1 length.max=80 length.fieldOptions.precision=1
    //% expandableArgumentMode="toggle"
    //% inlineInputMode="inline"
    //% weight=80 color=#000080
    export function showStringOnLcd2004(text: string, startPosition: number, length: number, option?: TextOption): void {
        updateCharacterBuffer(text, startPosition - 1, length, 20, 4, toAlignment(option), toPad(option));
    }


    //% subcategory="LCD"
    //% blockId="sed_lcd_clear_2004" block="LCD2004 limpar tela"
    //% weight=79 color=#000080
    export function clearLcd2004(): void {
        showStringOnLcd2004("", 1, 80);
    }


    //% subcategory="LCD"
    //% blockId=sed_lcd_position_1602
    //% block="%pos"
    //% pos.fieldEditor="gridpicker"
    //% pos.fieldOptions.columns=16
    //% blockHidden=true color=#000080
    export function position1602(pos: LcdPosition1602): number {
        return pos;
    }


    //% subcategory="LCD"
    //% blockId=sed_lcd_position_2004
    //% block="%pos"
    //% pos.fieldEditor="gridpicker"
    //% pos.fieldOptions.columns=20
    //% blockHidden=true color=#000080
    export function position2004(pos: LcdPosition2004): number {
        return pos;
    }


    //% subcategory="LCD"
    //% blockId="sed_lcd_backlight" block="alternar luz de fundo do LCD %backlight"
    //% backlight.fieldEditor="gridpicker"
    //% backlight.fieldOptions.columns=2
    //% weight=79 color=#000080
    export function setLcdBacklight(backlight: LcdBacklight): void {
        if (!lcdState && !connect()) return;
        lcdState.backlight = backlight;
        send(Lcd.Command, 0);
    }


    //% subcategory="LCD"
    //% blockId="sed_lcd_set_address" block="conectar LCD no endereço I2C %i2cAddress"
    //% i2cAddress.min=0 i2cAddress.max=127
    //% weight=70 color=#000080
    export function connectLcd(i2cAddress: number): void {
        if (lcdState && lcdState.i2cAddress == i2cAddress) return;
        if (0 === pins.i2cReadNumber(i2cAddress, NumberFormat.Int8LE, false)) return;


        if (lcdState && lcdState.refreshIntervalId) {
            control.clearInterval(lcdState.refreshIntervalId, control.IntervalMode.Timeout);
            lcdState.refreshIntervalId = undefined;
        }


        lcdState = {
            i2cAddress: i2cAddress,
            backlight: LcdBacklight.On,
            columns: 0,
            rows: 0,
            characters: undefined,
            lineNeedsUpdate: 0,
            refreshIntervalId: undefined,
        };


        basic.pause(50);
        pins.i2cWriteNumber(lcdState.i2cAddress, lcdState.backlight, NumberFormat.Int8LE);
        basic.pause(50);


        write4bits(0x30);
        control.waitMicros(4100);
        write4bits(0x30);
        control.waitMicros(4100);
        write4bits(0x30);
        control.waitMicros(4100);
        write4bits(0x20);
        control.waitMicros(1000);


        send(Lcd.Command, 0x20 | 0x00 | 0x08 | 0x00);
        control.waitMicros(1000);
        send(Lcd.Command, 0x08 | 0x04 | 0x00 | 0x00);
        control.waitMicros(1000);
        send(Lcd.Command, 0x04 | 0x02 | 0x00);
        control.waitMicros(1000);
    }


    //% subcategory="LCD"
    //% blockId="sed_lcd_is_connected" block="LCD está conectado"
    //% weight=69 color=#000080
    export function isLcdConnected(): boolean {
        return !!lcdState || connect();
    }
}