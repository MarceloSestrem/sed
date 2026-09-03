//% color="#FF5733" icon="\uf1ec" block="SED"
namespace SED {

    // --- ENUMERAÇÕES ---

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
        cm,
        //% block="polegadas"
        inch
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

    // ==========================================
    // SUBCATEGORIA: MATEMÁTICA
    // ==========================================

    /**
     * Arredonda um número para a quantidade desejada de casas decimais
     */
    //% subcategory="Matemática"
    //% blockId=sed_arredondar_casas
    //% block="arredondar %valor para %casas casas decimais"
    //% valor.defl=3.14159
    //% casas.defl=2
    //% weight=100
    export function arredondarCasas(valor: number, casas: number): number {
        let fator = Math.pow(10, Math.max(0, casas));
        return Math.round(valor * fator) / fator;
    }

    /**
     * Multiplica três valores
     */
    //% subcategory="Matemática"
    //% blockId=sed_multiplicar_tres
    //% block="multiplicar %a × %b × %c"
    //% a.defl=1
    //% b.defl=1
    //% c.defl=1
    //% inlineInputMode=inline
    //% weight=90
    export function multiplicarTres(a: number, b: number, c: number): number {
        return a * b * c;
    }

    /**
     * Soma três valores
     */
    //% subcategory="Matemática"
    //% blockId=sed_somar_tres
    //% block="somar %a + %b + %c"
    //% a.defl=0
    //% b.defl=0
    //% c.defl=0
    //% inlineInputMode=inline
    //% weight=80
    export function somarTres(a: number, b: number, c: number): number {
        return a + b + c;
    }

    /**
     * Subtrai três valores em sequência (a - b - c)
     */
    //% subcategory="Matemática"
    //% blockId=sed_subtrair_tres
    //% block="subtrair %a - %b - %c"
    //% a.defl=0
    //% b.defl=0
    //% c.defl=0
    //% inlineInputMode=inline
    //% weight=70
    export function subtrairTres(a: number, b: number, c: number): number {
        return a - b - c;
    }

    //% subcategory="Matemática"
    //% blockId=sed_somar
    //% block="%a + %b"
    //% weight=60
    export function somar(a: number, b: number): number {
        return a + b;
    }

    //% subcategory="Matemática"
    //% blockId=sed_subtrair
    //% block="%a - %b"
    //% weight=59
    export function subtrair(a: number, b: number): number {
        return a - b;
    }

    //% subcategory="Matemática"
    //% blockId=sed_multiplicar
    //% block="%a × %b"
    //% weight=58
    export function multiplicar(a: number, b: number): number {
        return a * b;
    }

    //% subcategory="Matemática"
    //% blockId=sed_dividir
    //% block="%a ÷ %b"
    //% weight=57
    export function dividir(a: number, b: number): number {
        if (b == 0) return 0;
        return a / b;
    }

    //% subcategory="Matemática"
    //% blockId=sed_mapear
    //% block="mapear valor %val de [ %fromLow , %fromHigh ] para [ %toLow , %toHigh ]"
    //% weight=56
    export function mapear(val: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number {
        return Math.map(val, fromLow, fromHigh, toLow, toHigh);
    }

    // ==========================================
    // SUBCATEGORIA: SENSORES ULTRASSÔNICOS
    // ==========================================

    //% subcategory="Ultrassônico"
    //% blockId=sed_ultrasonic_distance 
    //% block="medidor de distância ultrassônico pino |%name| distância em %Unit"
    //% color=#000080
    export function Ultrasonic(name: DigitalPin, Unit: DistanceUnit): number {
        let duration = 0;
        let RangeInCentimeters = 0;

        pins.digitalWritePin(name, 0);
        control.waitMicros(2);
        pins.digitalWritePin(name, 1);
        control.waitMicros(10);
        pins.digitalWritePin(name, 0);

        duration = pins.pulseIn(name, PulseValue.High, 50000);
        RangeInCentimeters = duration / 29 / 2;

        if (Unit == DistanceUnit.cm)
            return Math.round(RangeInCentimeters);
        else
            return Math.round(RangeInCentimeters / 2.54);
    }

    //% subcategory="Ultrassônico"
    //% blockId=sed_ultrasonic_v2_distance 
    //% block="(v2) medidor de distância ultrassônico pino |%name| distância em %Unit"
    //% color=#000080
    export function UltrasonicV2(name: DigitalPin, Unit: DistanceUnit): number {
        let duration2 = 0;
        let RangeInCentimeters2 = 0;

        pins.digitalWritePin(name, 0);
        control.waitMicros(2);
        pins.digitalWritePin(name, 1);
        control.waitMicros(10);
        pins.digitalWritePin(name, 0);

        duration2 = pins.pulseIn(name, PulseValue.High, 25000);
        RangeInCentimeters2 = duration2 * 153 / 29 / 2 / 100;

        if (Unit == DistanceUnit.cm)
            return Math.round(RangeInCentimeters2);
        else
            return Math.round(RangeInCentimeters2 / 2.54);
    }

    //% subcategory="Ultrassônico"
    //% blockId=sed_ping 
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

    // ==========================================
    // SUBCATEGORIA: SENSORES DIGITAIS
    // ==========================================

    //% subcategory="Sensores Digitais"
    //% blockId=sed_line_finder 
    //% block="pino |%pin| seguidor de linha detecta preto. Inverter ação |$reverseAction|"
    //% reverseAction.shadow="toggleOnOff"
    //% color=#000080
    export function lineFinder(pin: DigitalPin, reverseAction?: boolean): boolean {
        if (reverseAction) {
            return pins.digitalReadPin(pin) == 0;
        } else {
            return pins.digitalReadPin(pin) == 1;
        }
    }

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
    //% weight=90
    //% color=#000080 
    export function showStringOnLcd1602(text: string, startPosition: number, length: number, option?: TextOption): void {
        updateCharacterBuffer(text, startPosition - 1, length, 16, 2, toAlignment(option), toPad(option));
    }

    //% subcategory="LCD"
    //% blockId="sed_lcd_clear_1602" block="LCD1602 limpar tela"
    //% weight=89
    //% color=#000080 
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
    //% weight=80
    //% color=#000080 
    export function showStringOnLcd2004(text: string, startPosition: number, length: number, option?: TextOption): void {
        updateCharacterBuffer(text, startPosition - 1, length, 20, 4, toAlignment(option), toPad(option));
    }

    //% subcategory="LCD"
    //% blockId="sed_lcd_clear_2004" block="LCD2004 limpar tela"
    //% weight=79
    //% color=#000080 
    export function clearLcd2004(): void {
        showStringOnLcd2004("", 1, 80);
    }

    //% subcategory="LCD"
    //% blockId=sed_lcd_position_1602
    //% block="%pos"
    //% pos.fieldEditor="gridpicker"
    //% pos.fieldOptions.columns=16
    //% blockHidden=true
    //% color=#000080 
    export function position1602(pos: LcdPosition1602): number {
        return pos;
    }

    //% subcategory="LCD"
    //% blockId=sed_lcd_position_2004
    //% block="%pos"
    //% pos.fieldEditor="gridpicker"
    //% pos.fieldOptions.columns=20
    //% blockHidden=true
    //% color=#000080 
    export function position2004(pos: LcdPosition2004): number {
        return pos;
    }

    //% subcategory="LCD"
    //% blockId="sed_lcd_backlight" block="alternar luz de fundo do LCD %backlight"
    //% backlight.fieldEditor="gridpicker"
    //% backlight.fieldOptions.columns=2
    //% weight=79
    //% color=#000080 
    export function setLcdBacklight(backlight: LcdBacklight): void {
        if (!lcdState && !connect()) return;
        lcdState.backlight = backlight;
        send(Lcd.Command, 0);
    }

    //% subcategory="LCD"
    //% blockId="sed_lcd_set_address" block="conectar LCD no endereço I2C %i2cAddress"
    //% i2cAddress.min=0 i2cAddress.max=127
    //% weight=70
    //% color=#000080 
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
    //% weight=69
    //% color=#000080 
    export function isLcdConnected(): boolean {
        return !!lcdState || connect();
    }
}