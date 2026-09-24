

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"fullUrl":{"a":true,"h":"Full Url","n":"fullUrl","r":false,"t":"`$STRING`","key$":"fullUrl","index$":0},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":1},"path":{"a":true,"h":"Path","n":"path","r":false,"t":"`$STRING`","key$":"path","index$":2},"queryParams":{"a":true,"h":"Query Params","n":"queryParams","r":false,"t":"`$ARRAY`","key$":"queryParams","index$":3},"type":{"a":true,"h":"Type","n":"type","r":false,"t":"`$STRING`","key$":"type","index$":4}},"name":"get_endpoint","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"get_endpoint","name__orig":"get_endpoint","Name":"GetEndpoint","name_":"get_endpoint","name-":"get-endpoint","NAME":"GET_ENDPOINT","index$":2}, {"active":true,"entity":"get_endpoint","key$":"BasicGetEndpointFlow","kind":"basic","name":"BasicGetEndpointFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"get_endpoint_ref01"}}],"index$":0}]}, 'GetEndpoint', {"GET /":{"protocol":"http","operationId":"getEndpoints","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"type":{"type":"string","example":"GET","key$":"type"},"name":{"type":"string","example":"All Characters","key$":"name"},"path":{"type":"string","example":"/character","key$":"path"},"fullUrl":{"type":"string","example":"https://finalspaceapi.com/api/v0/character","key$":"fullUrl"},"queryParams":{"type":"array","items":{"type":"object","properties":{"optional":{"type":"boolean"},"name":{"type":"string"},"values":{"type":"array","items":{"type":"string"}}}},"key$":"queryParams"}},"index$":0}}}}}},"parameters":[],"securitySource":"unspecified"}})
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
  
