export type localhost = '127.0.0.1';

export type LpmProxy = {
    iface: localhost | string,
    port: number,
}

export type LpmProxies = Array<LpmProxy>;