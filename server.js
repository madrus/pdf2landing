/*eslint-env node, es6 */
/* jshint undef: true, unused: true, esversion: 6 */
/* globals require, console, __dirname */
(function () {
    'use strict';

    const hapi = require('hapi');
    const good = require('good');
    const path = require('path');

    const server = new hapi.Server();
    server.connection({
        host: 'localhost',
        port: 7777,
        routes: {
            files: {
                relativeTo: path.join(__dirname, '')
            }
        }
    });

    server.register(require('inert'), (err) => {

        if (err) {
            throw err; // something bad happened loading the plugin
        }

        server.route({
            method: 'GET',
            path: '/{path*}',
            handler: {
                directory: {
                    path: "./",
                    listing: false,
                    index: ['index.html']
                }
            }
        });
    });

    server.register({
        register: good,
        options: {
            reporters: {
                console: [{
                    module: 'good-squeeze',
                    name: 'Squeeze',
                    args: [{
                        response: '*',
                        log: '*'
                    }]
                }, {
                        module: 'good-console'
                    }, 'stdout']
            }
        }
    }, (err) => {

        if (err) {
            throw err; // something bad happened loading the plugin
        }

        server.start((err) => {
            if (err) {
                throw err;
            }

            console.log(`Started at: ${server.info.uri}`);
        });
    });
} ());
