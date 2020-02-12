"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const index_1 = require("./index");
const mocks_1 = require("./mocks");
describe('F1TelemetryClient', () => {
    describe('constructor', () => {
        describe('when no port is passed through parameters', () => {
            let f1TelemetryClient;
            beforeAll(() => {
                f1TelemetryClient = new index_1.F1TelemetryClient();
            });
            it('should set default port and should set up client', () => {
                expect(f1TelemetryClient.port).toBe(index_1.DEFAULT_PORT);
            });
            it('should set up client as udp4 client', () => {
                expect(f1TelemetryClient.client).toBeDefined();
                // tslint:disable-next-line:no-any
                expect(f1TelemetryClient.client.type).toBe('udp4');
            });
        });
        describe('when a custom port is passed through parameters', () => {
            let f1TelemetryClient;
            beforeAll(() => {
                f1TelemetryClient = new index_1.F1TelemetryClient({ port: 20778 });
            });
            it('should set custom port and should set up client', () => {
                expect(f1TelemetryClient.port).toBe(20778);
            });
            it('should set up client as udp4 client', () => {
                expect(f1TelemetryClient.client).toBeDefined();
                // tslint:disable-next-line:no-any
                expect(f1TelemetryClient.client.type).toBe('udp4');
            });
        });
    });
    describe('2018 format', () => {
        describe('parsePacketHeader', () => {
            // tslint:disable-next-line:no-any
            let parsedPacketHeader;
            beforeAll(() => {
                const buffer = new Buffer(mocks_1.packetHeaderBuffer2018.data);
                parsedPacketHeader = index_1.F1TelemetryClient.parsePacketHeader(buffer);
            });
            it('should parse buffer and return parsed packet header', () => {
                expect(parsedPacketHeader).toEqual(mocks_1.packetHeaderParsed2018);
            });
        });
        describe('parseMessage', () => {
            let f1TelemetryClient;
            describe('PacketSessionData', () => {
                beforeAll(() => {
                    f1TelemetryClient = new index_1.F1TelemetryClient();
                    spyOn(events_1.EventEmitter.prototype, 'emit');
                    const buffer = new Buffer(mocks_1.packetSessionDataBuffer2018.data);
                    f1TelemetryClient.parseMessage(buffer);
                });
                it('should parse PacketSessionData buffer', () => {
                    expect(events_1.EventEmitter.prototype.emit)
                        .toHaveBeenCalledWith('session', mocks_1.packetSessionDataParsed2018);
                });
            });
            describe('PacketParticipantsData', () => {
                beforeAll(() => {
                    f1TelemetryClient = new index_1.F1TelemetryClient();
                    spyOn(events_1.EventEmitter.prototype, 'emit');
                    const buffer = new Buffer(mocks_1.packetParticipantsDataBuffer2018.data);
                    f1TelemetryClient.parseMessage(buffer);
                });
                it('should parse PacketParticipantsData buffer and emit result', () => {
                    expect(events_1.EventEmitter.prototype.emit)
                        .toHaveBeenCalledWith('participants', mocks_1.packetParticipantsDataParsed2018);
                });
            });
            describe('PacketCarTelemetryData', () => {
                beforeAll(() => {
                    f1TelemetryClient = new index_1.F1TelemetryClient();
                    spyOn(events_1.EventEmitter.prototype, 'emit');
                    const buffer = new Buffer(mocks_1.packetCarTelemetryBuffer2018.data);
                    f1TelemetryClient.parseMessage(buffer);
                });
                it('should parse PacketCarTelemetryData buffer and emit result', () => {
                    expect(events_1.EventEmitter.prototype.emit)
                        .toHaveBeenCalledWith('carTelemetry', mocks_1.packetCarTelemetryParsed2018);
                });
            });
            describe('PacketCarStatusData', () => {
                beforeAll(() => {
                    f1TelemetryClient = new index_1.F1TelemetryClient();
                    spyOn(events_1.EventEmitter.prototype, 'emit');
                    const buffer = new Buffer(mocks_1.packetCarStatusDataBuffer2018.data);
                    f1TelemetryClient.parseMessage(buffer);
                });
                it('should parse PacketCarStatusData buffer and emit result', () => {
                    expect(events_1.EventEmitter.prototype.emit)
                        .toHaveBeenCalledWith('carStatus', mocks_1.packetCarStatusDataParsed2018);
                });
            });
            describe('PacketLapData', () => {
                beforeAll(() => {
                    f1TelemetryClient = new index_1.F1TelemetryClient();
                    spyOn(events_1.EventEmitter.prototype, 'emit');
                    const buffer = new Buffer(mocks_1.packetLapDataBuffer2018.data);
                    f1TelemetryClient.parseMessage(buffer);
                });
                it('should parse PacketLapData buffer and emit result', () => {
                    expect(events_1.EventEmitter.prototype.emit)
                        .toHaveBeenCalledWith('lapData', mocks_1.packetLapDataParsed2018);
                });
            });
            describe('PacketMotionData', () => {
                beforeAll(() => {
                    f1TelemetryClient = new index_1.F1TelemetryClient();
                    spyOn(events_1.EventEmitter.prototype, 'emit');
                    const buffer = new Buffer(mocks_1.packetMotionDataBuffer2018.data);
                    f1TelemetryClient.parseMessage(buffer);
                });
                it('should parse PacketMotionData buffer and emit result', () => {
                    expect(events_1.EventEmitter.prototype.emit)
                        .toHaveBeenCalledWith('motion', mocks_1.packetMotionDataParsed2018);
                });
            });
            describe('PacketCarSetupData', () => {
                beforeAll(() => {
                    f1TelemetryClient = new index_1.F1TelemetryClient();
                    spyOn(events_1.EventEmitter.prototype, 'emit');
                    const buffer = new Buffer(mocks_1.packetCarSetupDataBuffer2018.data);
                    f1TelemetryClient.parseMessage(buffer);
                });
                it('should parse PacketCarSetupData buffer and emit result', () => {
                    expect(events_1.EventEmitter.prototype.emit)
                        .toHaveBeenCalledWith('carSetups', mocks_1.packetCarSetupDataParsed2018);
                });
            });
            describe('PacketEventData', () => {
                beforeAll(() => {
                    f1TelemetryClient = new index_1.F1TelemetryClient();
                    spyOn(events_1.EventEmitter.prototype, 'emit');
                    const buffer = new Buffer(mocks_1.packetEventDataBuffer2018.data);
                    f1TelemetryClient.parseMessage(buffer);
                });
                it('should parse PacketEventData buffer and emit result', () => {
                    expect(events_1.EventEmitter.prototype.emit)
                        .toHaveBeenCalledWith('event', mocks_1.packetEventDataParsed2018);
                });
            });
        });
    });
    describe('2019 format', () => {
        describe('parsePacketHeader', () => {
            // tslint:disable-next-line:no-any
            let parsedPacketHeader;
            beforeAll(() => {
                const buffer = new Buffer(mocks_1.packetHeaderBuffer2019.data);
                parsedPacketHeader = index_1.F1TelemetryClient.parsePacketHeader(buffer);
            });
            it('should parse buffer and return parsed packet header', () => {
                expect(parsedPacketHeader).toEqual(mocks_1.packetHeaderParsed2019);
            });
        });
        describe('parseMessage', () => {
            let f1TelemetryClient;
            describe('PacketSessionData', () => {
                beforeAll(() => {
                    f1TelemetryClient = new index_1.F1TelemetryClient();
                    spyOn(events_1.EventEmitter.prototype, 'emit');
                    const buffer = new Buffer(mocks_1.packetSessionDataBuffer2019.data);
                    f1TelemetryClient.parseMessage(buffer);
                });
                it('should parse PacketSessionData buffer', () => {
                    expect(events_1.EventEmitter.prototype.emit)
                        .toHaveBeenCalledWith('session', mocks_1.packetSessionDataParsed2019);
                });
            });
            describe('PacketParticipantsData', () => {
                beforeAll(() => {
                    f1TelemetryClient = new index_1.F1TelemetryClient();
                    spyOn(events_1.EventEmitter.prototype, 'emit');
                    const buffer = new Buffer(mocks_1.packetParticipantsDataBuffer2019.data);
                    f1TelemetryClient.parseMessage(buffer);
                });
                it('should parse PacketParticipantsData buffer and emit result', () => {
                    expect(events_1.EventEmitter.prototype.emit)
                        .toHaveBeenCalledWith('participants', mocks_1.packetParticipantsDataParsed2019);
                });
            });
            describe('PacketCarTelemetryData', () => {
                beforeAll(() => {
                    f1TelemetryClient = new index_1.F1TelemetryClient();
                    spyOn(events_1.EventEmitter.prototype, 'emit');
                    const buffer = new Buffer(mocks_1.packetCarTelemetryBuffer2019.data);
                    f1TelemetryClient.parseMessage(buffer);
                });
                it('should parse PacketCarTelemetryData buffer and emit result', () => {
                    expect(events_1.EventEmitter.prototype.emit)
                        .toHaveBeenCalledWith('carTelemetry', mocks_1.packetCarTelemetryParsed2019);
                });
            });
            describe('PacketCarStatusData', () => {
                beforeAll(() => {
                    f1TelemetryClient = new index_1.F1TelemetryClient();
                    spyOn(events_1.EventEmitter.prototype, 'emit');
                    const buffer = new Buffer(mocks_1.packetCarStatusDataBuffer2019.data);
                    f1TelemetryClient.parseMessage(buffer);
                });
                it('should parse PacketCarStatusData buffer and emit result', () => {
                    expect(events_1.EventEmitter.prototype.emit)
                        .toHaveBeenCalledWith('carStatus', mocks_1.packetCarStatusDataParsed2019);
                });
            });
            describe('PacketLapData', () => {
                beforeAll(() => {
                    f1TelemetryClient = new index_1.F1TelemetryClient();
                    spyOn(events_1.EventEmitter.prototype, 'emit');
                    const buffer = new Buffer(mocks_1.packetLapDataBuffer2019.data);
                    f1TelemetryClient.parseMessage(buffer);
                });
                it('should parse PacketLapData buffer and emit result', () => {
                    expect(events_1.EventEmitter.prototype.emit)
                        .toHaveBeenCalledWith('lapData', mocks_1.packetLapDataParsed2019);
                });
            });
            describe('PacketMotionData', () => {
                beforeAll(() => {
                    f1TelemetryClient = new index_1.F1TelemetryClient();
                    spyOn(events_1.EventEmitter.prototype, 'emit');
                    const buffer = new Buffer(mocks_1.packetMotionDataBuffer2019.data);
                    f1TelemetryClient.parseMessage(buffer);
                });
                it('should parse PacketMotionData buffer and emit result', () => {
                    expect(events_1.EventEmitter.prototype.emit)
                        .toHaveBeenCalledWith('motion', mocks_1.packetMotionDataParsed2019);
                });
            });
            describe('PacketCarSetupData', () => {
                beforeAll(() => {
                    f1TelemetryClient = new index_1.F1TelemetryClient();
                    spyOn(events_1.EventEmitter.prototype, 'emit');
                    const buffer = new Buffer(mocks_1.packetCarSetupDataBuffer2019.data);
                    f1TelemetryClient.parseMessage(buffer);
                });
                it('should parse PacketCarSetupData buffer and emit result', () => {
                    expect(events_1.EventEmitter.prototype.emit)
                        .toHaveBeenCalledWith('carSetups', mocks_1.packetCarSetupDataParsed2019);
                });
            });
            describe('PacketEventData', () => {
                beforeAll(() => {
                    f1TelemetryClient = new index_1.F1TelemetryClient();
                    spyOn(events_1.EventEmitter.prototype, 'emit');
                    const buffer = new Buffer(mocks_1.packetEventDataBuffer2019.data);
                    f1TelemetryClient.parseMessage(buffer);
                });
                it('should parse PacketEventData buffer and emit result', () => {
                    expect(events_1.EventEmitter.prototype.emit)
                        .toHaveBeenCalledWith('event', mocks_1.packetEventDataParsed2019);
                });
            });
        });
    });
});
//# sourceMappingURL=index.spec.js.map