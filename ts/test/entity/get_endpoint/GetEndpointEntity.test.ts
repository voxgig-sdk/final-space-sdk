

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


describe('GetEndpointEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FINAL_SPACE_TEST_LIVE=TRUE.
  afterEach(liveDelay('FINAL_SPACE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = FinalSpaceSDK.test()
    const ent = testsdk.GetEndpoint()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FINAL_SPACE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'get_endpoint.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"fullUrl","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"path","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"queryParams","req":false,"type":"`$ARRAY`","index$":3},{"active":true,"name":"type","req":false,"type":"`$STRING`","index$":4}],"name":"get_endpoint","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /","json":"{\"operationId\":\"getEndpoints\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"fullUrl\":{\"example\":\"https://finalspaceapi.com/api/v0/character\",\"type\":\"string\"},\"name\":{\"example\":\"All Characters\",\"type\":\"string\"},\"path\":{\"example\":\"/character\",\"type\":\"string\"},\"queryParams\":{\"items\":{\"properties\":{\"name\":{\"type\":\"string\"},\"optional\":{\"type\":\"boolean\"},\"values\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"},\"type\":\"array\"},\"type\":{\"example\":\"GET\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"get_endpoint","name__orig":"get_endpoint","Name":"GetEndpoint","name_":"get_endpoint","name-":"get-endpoint","NAME":"GET_ENDPOINT","index$":2}, {"active":true,"entity":"get_endpoint","key$":"BasicGetEndpointFlow","kind":"basic","name":"BasicGetEndpointFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"get_endpoint_ref01"}}],"index$":0}]}, 'GetEndpoint')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let get_endpoint_ref01_data = Object.values(setup.data.existing.get_endpoint)[0] as any

    // LIST
    const get_endpoint_ref01_ent = client.GetEndpoint()
    const get_endpoint_ref01_match: any = {}

    const get_endpoint_ref01_list = (await get_endpoint_ref01_ent.list(get_endpoint_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/get_endpoint/GetEndpointTestData.json')

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
    ['get_endpoint01','get_endpoint02','get_endpoint03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FINAL_SPACE_TEST_GET_ENDPOINT_ENTID': idmap,
    'FINAL_SPACE_TEST_LIVE': 'FALSE',
    'FINAL_SPACE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FINAL_SPACE_TEST_GET_ENDPOINT_ENTID']

  const live = 'TRUE' === env.FINAL_SPACE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FINAL_SPACE_TEST_GET_ENDPOINT_ENTID']
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
  
