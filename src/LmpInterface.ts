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
     * @param {number} port
     */
    constructor(host: string, port: number) {
        this.host = UrlParse(host, true);

        this.host.set('port', port);

        if (!this.host.protocol) {
            this.host.set('protocol', 'http');
        }
    }

    /**
     * Sets the current host path to the given API endpoint.
     *
     * @param {string} endpoint
     */
    protected setEndpoint(endpoint: string): void {
        this.host.set('pathname', `/api/${endpoint}`);
    }

    /**
     * Fetches proxies from the current Luminati Proxy Manager Host.
     *
     * @param {boolean} onlyRunning
     * @param callback()
     */
    public proxies(onlyRunning: boolean, callback: (error: any, response: Response, body: any) => void): void {
        this.setEndpoint('/proxies');

        if (onlyRunning) {
            this.setEndpoint('/proxies_running');
        }

        Request.get(this.host.href, callback)
    }
}