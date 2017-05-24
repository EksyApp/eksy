
let instance = null;

class PostOffice {

  constructor() {
    if (!instance) {
      this._packets = new Map();
      this._receivers = new Map();
      instance = this;
    }

    return instance;
  }

  register(address, receiver) {
    if (!this._receivers.get(address)) {
      this._receivers.set(address, []);
    }
    this._receivers.get(address).push(receiver);
  }

  getPacket(address) {
    if (!this._packets.get(address)) {
      this._packets.set(address, {});
    }
    return this._packets.get(address);
  }

  setPacket(address, packet) {
    this._packets.set(address, packet);
  }

  sendPacket(address) {
    if (!this._packets.get(address)) {
      this._packets.set(address, {});
    }

    if (!this._receivers.get(address)) {
      this._receivers.set(address, []);
    }

    for (var i = 0; i < this._receivers.get(address).length; i++) {
      let receiver = this._receivers.get(address)[i];

      receiver(this._packets.get(address));

    }

  }

}

export default PostOffice
