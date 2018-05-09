export type localhost = '127.0.0.1';

export type LmpProxy = {
    iface: localhost | string,
    port: number,
}

export type LmpProxies = Array<LmpProxy>;