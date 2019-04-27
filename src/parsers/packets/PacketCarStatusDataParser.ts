import {F1Parser} from '../F1Parser';
import {CarStatusDataParser} from './CarStatusDataParser';
import {PacketHeaderParser} from './PacketHeaderParser';
import {PacketCarStatusData} from './types';

export class PacketCarStatusDataParser extends F1Parser {
  data: PacketCarStatusData;

  constructor(buffer: Buffer) {
    super();
    this.endianess('little')
        .nest('m_header', {type: new PacketHeaderParser()})
        .array(
            'm_carStatusData', {length: 20, type: new CarStatusDataParser()});

    this.data = this.fromBuffer(buffer);
  }
}