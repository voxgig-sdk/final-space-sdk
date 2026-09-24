

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


describe('EpisodeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FINAL_SPACE_TEST_LIVE=TRUE.
  afterEach(liveDelay('FINAL_SPACE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = FinalSpaceSDK.test()
    const ent = testsdk.Episode()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FINAL_SPACE_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'episode.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"air_date":{"a":true,"h":"Air Date","n":"air_date","r":false,"sh":"The air date of the episode","t":"`$STRING`","key$":"air_date","index$":0},"characters":{"a":true,"h":"Characters","n":"characters","r":false,"sh":"URLs to characters appearing in this episode","t":"`$ARRAY`","key$":"characters","index$":1},"director":{"a":true,"h":"Director","n":"director","r":false,"sh":"The director of the episode","t":"`$STRING`","key$":"director","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The unique identifier for the episode","t":"`$INTEGER`","key$":"id","index$":3},"img_url":{"a":true,"fo":"uri","h":"Img Url","n":"img_url","r":false,"sh":"URL to the episode's image","t":"`$STRING`","key$":"img_url","index$":4},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The name of the episode","t":"`$STRING`","key$":"name","index$":5},"writer":{"a":true,"h":"Writer","n":"writer","r":false,"sh":"The writer of the episode","t":"`$STRING`","key$":"writer","index$":6}},"id":{"field":"id","name":"id"},"name":"episode","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /episode","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"sort","or":"sort","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/episode","q":{"exist":["sort"]},"r":{},"s":[{"lit":"episode"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /episode/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/episode/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"episode"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"episode","name__orig":"episode","Name":"Episode","name_":"episode","name-":"episode","NAME":"EPISODE","index$":1}, {"active":true,"entity":"episode","key$":"BasicEpisodeFlow","kind":"basic","name":"BasicEpisodeFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"episode_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"episode_ref01","srcdatavar":"episode_ref01_data","suffix":"_dt0"},"m":{"id":"episode01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-episode_ref01"}}],"index$":1}]}, 'Episode', {"GET /episode":{"protocol":"http","operationId":"getAllEpisodes","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"id":{"type":"integer","description":"The unique identifier for the episode","key$":"id"},"name":{"type":"string","description":"The name of the episode","key$":"name"},"air_date":{"type":"string","description":"The air date of the episode","key$":"air_date"},"director":{"type":"string","description":"The director of the episode","key$":"director"},"writer":{"type":"string","description":"The writer of the episode","key$":"writer"},"characters":{"type":"array","items":{"type":"string","format":"uri"},"description":"URLs to characters appearing in this episode","key$":"characters"},"img_url":{"type":"string","format":"uri","description":"URL to the episode's image","key$":"img_url"}},"x-ref":"#/components/schemas/Episode","index$":0}}}}}},"parameters":[{"name":"sort","in":"query","description":"Sort order for results","required":false,"schema":{"type":"string","enum":["asc","desc"]},"index$":0}],"securitySource":"unspecified"},"GET /episode/{id}":{"protocol":"http","operationId":"getEpisodeById","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"id":{"type":"integer","description":"The unique identifier for the episode","key$":"id"},"name":{"type":"string","description":"The name of the episode","key$":"name"},"air_date":{"type":"string","description":"The air date of the episode","key$":"air_date"},"director":{"type":"string","description":"The director of the episode","key$":"director"},"writer":{"type":"string","description":"The writer of the episode","key$":"writer"},"characters":{"type":"array","items":{"type":"string","format":"uri"},"description":"URLs to characters appearing in this episode","key$":"characters"},"img_url":{"type":"string","format":"uri","description":"URL to the episode's image","key$":"img_url"}},"x-ref":"#/components/schemas/Episode","index$":0}}}},"404":{"description":"Episode not found"}},"parameters":[{"name":"id","in":"path","description":"ID of the episode to retrieve","required":true,"schema":{"type":"integer"},"index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let episode_ref01_data = Object.values(setup.data.existing.episode)[0] as any

    // LIST
    const episode_ref01_ent = client.Episode()
    const episode_ref01_match: any = {}

    const episode_ref01_list = (await episode_ref01_ent.list(episode_ref01_match)).map((e: any) => e.data())


    // LOAD
    const episode_ref01_match_dt0: any = {}
    episode_ref01_match_dt0.id = episode_ref01_data.id
    const episode_ref01_data_dt0 = (await episode_ref01_ent.load(episode_ref01_match_dt0)).data()
    assert(episode_ref01_data_dt0.id === episode_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/episode/EpisodeTestData.json')

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
    ['episode01','episode02','episode03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FINAL_SPACE_TEST_EPISODE_ENTID': idmap,
    'FINAL_SPACE_TEST_LIVE': 'FALSE',
    'FINAL_SPACE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FINAL_SPACE_TEST_EPISODE_ENTID']

  const live = 'TRUE' === env.FINAL_SPACE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FINAL_SPACE_TEST_EPISODE_ENTID']
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
  
