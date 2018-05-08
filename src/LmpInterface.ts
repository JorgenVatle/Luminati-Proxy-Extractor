import UrlParse from 'url-parse';
import Request from 'request';

export default class {

    /**
     * UrlParse URL.
     *
     * @property {URL}
     */
    protected host: any;

    /**
     * LmpInterface constructor
     *
     * @param {string} host
     */
    constructor(host: string) {
        this.host = UrlParse(host, true);
    }

    /**
     * Fetches proxies from the current Luminati Proxy Manager Host.
     *
     * @param callback()
     */
    proxies(callback: () => {}): void {
        this.host.set('endpoint', '/proxies');
        const request = Request.get(this.host, callback())
    }
}