"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const F1Parser_1 = require("../F1Parser");
class CarSetupDataParser extends F1Parser_1.F1Parser {
    constructor() {
        super();
        this.uint8('m_frontWing')
            .uint8('m_rearWing')
            .uint8('m_onThrottle')
            .uint8('m_offThrottle')
            .floatle('m_frontCamber')
            .floatle('m_rearCamber')
            .floatle('m_frontToe')
            .floatle('m_rearToe')
            .uint8('m_frontSuspension')
            .uint8('m_rearSuspension')
            .uint8('m_frontAntiRollBar')
            .uint8('m_rearAntiRollBar')
            .uint8('m_frontSuspensionHeight')
            .uint8('m_rearSuspensionHeight')
            .uint8('m_brakePressure')
            .uint8('m_brakeBias')
            .floatle('m_frontTyrePressure')
            .floatle('m_rearTyrePressure')
            .uint8('m_ballast')
            .floatle('m_fuelLoad');
    }
}
exports.CarSetupDataParser = CarSetupDataParser;
//# sourceMappingURL=CarSetupDataParser.js.map