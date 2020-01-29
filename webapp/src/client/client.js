import request from 'superagent';
import Cookies from 'js-cookie';

import Constants from '../constants';

/**
 *  Add web utilities for interacting with servers here
 */
export default class Client {
    constructor() {
        const url = new URL(window.location.href);
        this.baseUrl = `${url.protocol}//${url.host}`;
        this.pluginUrl = `${this.baseUrl}/plugins/${Constants.PLUGIN_NAME}/api/v1`;
        this.apiUrl = `${this.baseUrl}/api/v1`;
    }

    saveChannelSubscription = (channelSubscription) => {
        const url = `${this.pluginUrl}/subscription`;
        return this.doPost(url, channelSubscription);
    };

    editChannelSubscription = (channelSubscription) => {
        const url = `${this.pluginUrl}/subscription`;
        return this.doPut(url, channelSubscription);
    };

    doGet = async (url, headers = {}) => {
        headers['X-Requested-With'] = 'XMLHttpRequest';

        const response = await request.
            get(url).
            set(headers).
            type('application/json').
            accept('application/json');

        return response.body;
    };

    doPost = async (url, body, headers = {}) => {
        headers['X-Requested-With'] = 'XMLHttpRequest';
        headers['X-CSRF-Token'] = Cookies.get(Constants.MATTERMOST_CSRF_COOKIE);

        const response = await request.
            post(url).
            send(body).
            set(headers).
            type('application/json').
            accept('application/json');

        return response.body;
    };

    doPut = async (url, body, headers = {}) => {
        headers['X-Requested-With'] = 'XMLHttpRequest';
        headers['X-CSRF-Token'] = Cookies.get(Constants.MATTERMOST_CSRF_COOKIE);

        const response = await request.
            put(url).
            send(body).
            set(headers).
            type('application/json').
            accept('application/json');

        return response.body;
    }
}
