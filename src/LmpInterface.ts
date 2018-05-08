import UrlParse from 'url-parse';
import Request, {Response} from 'request';

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

        if (!this.host.protocol) {
            this.host.set('protocol', 'http');
        }
    }

    /**
     * Fetches proxies from the current Luminati Proxy Manager Host.
     *
     * @param callback()
     */
    proxies(callback: (error: any, response: Response, body: any) => void): void {
        this.host.set('endpoint', '/proxies');
        Request.get(this.host.href, callback)
    }
}