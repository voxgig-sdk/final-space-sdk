"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "character",
        "accessor": "Character",
        "op": "list",
        "method": "GET",
        "path": "/character",
        "args": [],
        "select": {
            "sort": "v1"
        },
        "headers": [],
        "query": [
            "sort"
        ],
        "auth": null,
        "status": 200,
        "sample": [
            {
                "id": 1,
                "name": "x",
                "status": "x",
                "species": "x",
                "gender": "x",
                "hair": "x",
                "alias": [
                    "x"
                ],
                "origin": "x",
                "abilities": [
                    "x"
                ],
                "img_url": "x"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "character",
        "accessor": "Character",
        "op": "load",
        "method": "GET",
        "path": "/character/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "id": 1,
            "name": "x",
            "status": "x",
            "species": "x",
            "gender": "x",
            "hair": "x",
            "alias": [
                "x"
            ],
            "origin": "x",
            "abilities": [
                "x"
            ],
            "img_url": "x"
        },
        "idField": "id"
    },
    {
        "entity": "episode",
        "accessor": "Episode",
        "op": "list",
        "method": "GET",
        "path": "/episode",
        "args": [],
        "select": {
            "sort": "v1"
        },
        "headers": [],
        "query": [
            "sort"
        ],
        "auth": null,
        "status": 200,
        "sample": [
            {
                "id": 1,
                "name": "x",
                "air_date": "x",
                "director": "x",
                "writer": "x",
                "characters": [
                    "x"
                ],
                "img_url": "x"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "episode",
        "accessor": "Episode",
        "op": "load",
        "method": "GET",
        "path": "/episode/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "id": 1,
            "name": "x",
            "air_date": "x",
            "director": "x",
            "writer": "x",
            "characters": [
                "x"
            ],
            "img_url": "x"
        },
        "idField": "id"
    },
    {
        "entity": "get_endpoint",
        "accessor": "GetEndpoint",
        "op": "list",
        "method": "GET",
        "path": "/",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": [
            {
                "type": "GET",
                "name": "All Characters",
                "path": "/character",
                "fullUrl": "https://finalspaceapi.com/api/v0/character",
                "queryParams": [
                    {
                        "optional": true,
                        "name": "x",
                        "values": [
                            "x"
                        ]
                    }
                ]
            }
        ],
        "idField": "id"
    },
    {
        "entity": "location",
        "accessor": "Location",
        "op": "list",
        "method": "GET",
        "path": "/location",
        "args": [],
        "select": {
            "sort": "v1"
        },
        "headers": [],
        "query": [
            "sort"
        ],
        "auth": null,
        "status": 200,
        "sample": [
            {
                "id": 1,
                "name": "x",
                "type": "x",
                "inhabitants": [
                    "x"
                ],
                "notable_residents": [
                    "x"
                ],
                "img_url": "x"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "location",
        "accessor": "Location",
        "op": "load",
        "method": "GET",
        "path": "/location/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "id": 1,
            "name": "x",
            "type": "x",
            "inhabitants": [
                "x"
            ],
            "notable_residents": [
                "x"
            ],
            "img_url": "x"
        },
        "idField": "id"
    },
    {
        "entity": "quote",
        "accessor": "Quote",
        "op": "list",
        "method": "GET",
        "path": "/quote",
        "args": [],
        "select": {
            "sort": "v1"
        },
        "headers": [],
        "query": [
            "sort"
        ],
        "auth": null,
        "status": 200,
        "sample": [
            {
                "id": 1,
                "quote": "x",
                "by": "x",
                "character": "x",
                "image": "x"
            }
        ],
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map