

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { FinalSpaceSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('LocationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FINAL_SPACE_TEST_LIVE=TRUE.
  afterEach(liveDelay('FINAL_SPACE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = FinalSpaceSDK.test()
    const ent = testsdk.Location()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FINAL_SPACE_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'location.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"short":"The unique identifier for the location","type":"`$INTEGER`","index$":0},{"active":true,"format":"uri","name":"img_url","req":false,"short":"URL to the location's image","type":"`$STRING`","index$":1},{"active":true,"name":"inhabitants","req":false,"short":"List of inhabitants of the location","type":"`$ARRAY`","index$":2},{"active":true,"name":"name","req":false,"short":"The name of the location","type":"`$STRING`","index$":3},{"active":true,"name":"notable_residents","req":false,"short":"URLs to notable residents","type":"`$ARRAY`","index$":4},{"active":true,"name":"type","req":false,"short":"The type of location","type":"`$STRING`","index$":5}],"id":{"field":"id","name":"id"},"name":"location","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /location","json":"{\"operationId\":\"getAllLocations\",\"parameters\":[{\"description\":\"Sort order for results\",\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"schema\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"id\":{\"description\":\"The unique identifier for the location\",\"type\":\"integer\"},\"img_url\":{\"description\":\"URL to the location's image\",\"format\":\"uri\",\"type\":\"string\"},\"inhabitants\":{\"description\":\"List of inhabitants of the location\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"name\":{\"description\":\"The name of the location\",\"type\":\"string\"},\"notable_residents\":{\"description\":\"URLs to notable residents\",\"items\":{\"format\":\"uri\",\"type\":\"string\"},\"type\":\"array\"},\"type\":{\"description\":\"The type of location\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/location","segments":[{"lit":"location"}],"select":{"exist":["sort"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /location/{id}","json":"{\"operationId\":\"getLocationById\",\"parameters\":[{\"description\":\"ID of the location to retrieve\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"id\":{\"description\":\"The unique identifier for the location\",\"type\":\"integer\"},\"img_url\":{\"description\":\"URL to the location's image\",\"format\":\"uri\",\"type\":\"string\"},\"inhabitants\":{\"description\":\"List of inhabitants of the location\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"name\":{\"description\":\"The name of the location\",\"type\":\"string\"},\"notable_residents\":{\"description\":\"URLs to notable residents\",\"items\":{\"format\":\"uri\",\"type\":\"string\"},\"type\":\"array\"},\"type\":{\"description\":\"The type of location\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"},\"404\":{\"description\":\"Location not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/location/{id}","segments":[{"lit":"location"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"location","name__orig":"location","Name":"Location","name_":"location","name-":"location","NAME":"LOCATION","index$":3}, {"active":true,"entity":"location","key$":"BasicLocationFlow","kind":"basic","name":"BasicLocationFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"location_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"location_ref01","srcdatavar":"location_ref01_data","suffix":"_dt0"},"match":{"id":"location01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-location_ref01"}}],"index$":1}]}, 'Location')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let location_ref01_data = Object.values(setup.data.existing.location)[0] as any

    // LIST
    const location_ref01_ent = client.Location()
    const location_ref01_match: any = {}

    const location_ref01_list = (await location_ref01_ent.list(location_ref01_match)).map((e: any) => e.data())


    // LOAD
    const location_ref01_match_dt0: any = {}
    location_ref01_match_dt0.id = location_ref01_data.id
    const location_ref01_data_dt0 = (await location_ref01_ent.load(location_ref01_match_dt0)).data()
    assert(location_ref01_data_dt0.id === location_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/location/LocationTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = FinalSpaceSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['location01','location02','location03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FINAL_SPACE_TEST_LOCATION_ENTID': idmap,
    'FINAL_SPACE_TEST_LIVE': 'FALSE',
    'FINAL_SPACE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FINAL_SPACE_TEST_LOCATION_ENTID']

  const live = 'TRUE' === env.FINAL_SPACE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FINAL_SPACE_TEST_LOCATION_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new FinalSpaceSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.FINAL_SPACE_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
