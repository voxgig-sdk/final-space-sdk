

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


describe('CharacterEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FINAL_SPACE_TEST_LIVE=TRUE.
  afterEach(liveDelay('FINAL_SPACE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = FinalSpaceSDK.test()
    const ent = testsdk.Character()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FINAL_SPACE_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'character.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"abilities","req":false,"short":"List of abilities the character has","type":"`$ARRAY`","index$":0},{"active":true,"name":"alias","req":false,"short":"Alternative names or aliases","type":"`$ARRAY`","index$":1},{"active":true,"name":"gender","req":false,"short":"The gender of the character","type":"`$STRING`","index$":2},{"active":true,"name":"hair","req":false,"short":"The hair color/type of the character","type":"`$STRING`","index$":3},{"active":true,"name":"id","req":false,"short":"The unique identifier for the character","type":"`$INTEGER`","index$":4},{"active":true,"format":"uri","name":"img_url","req":false,"short":"URL to the character's image","type":"`$STRING`","index$":5},{"active":true,"name":"name","req":false,"short":"The name of the character","type":"`$STRING`","index$":6},{"active":true,"name":"origin","req":false,"short":"The origin of the character","type":"`$STRING`","index$":7},{"active":true,"name":"species","req":false,"short":"The species of the character","type":"`$STRING`","index$":8},{"active":true,"name":"status","req":false,"short":"The status of the character (e.g., Alive, Dead, Unknown)","type":"`$STRING`","index$":9}],"id":{"field":"id","name":"id"},"name":"character","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /character","json":"{\"operationId\":\"getAllCharacters\",\"parameters\":[{\"description\":\"Sort order for results\",\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"schema\":{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"abilities\":{\"description\":\"List of abilities the character has\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"alias\":{\"description\":\"Alternative names or aliases\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"gender\":{\"description\":\"The gender of the character\",\"type\":\"string\"},\"hair\":{\"description\":\"The hair color/type of the character\",\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the character\",\"type\":\"integer\"},\"img_url\":{\"description\":\"URL to the character's image\",\"format\":\"uri\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the character\",\"type\":\"string\"},\"origin\":{\"description\":\"The origin of the character\",\"type\":\"string\"},\"species\":{\"description\":\"The species of the character\",\"type\":\"string\"},\"status\":{\"description\":\"The status of the character (e.g., Alive, Dead, Unknown)\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/character","segments":[{"lit":"character"}],"select":{"exist":["sort"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /character/{id}","json":"{\"operationId\":\"getCharacterById\",\"parameters\":[{\"description\":\"ID of the character to retrieve\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"abilities\":{\"description\":\"List of abilities the character has\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"alias\":{\"description\":\"Alternative names or aliases\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"gender\":{\"description\":\"The gender of the character\",\"type\":\"string\"},\"hair\":{\"description\":\"The hair color/type of the character\",\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the character\",\"type\":\"integer\"},\"img_url\":{\"description\":\"URL to the character's image\",\"format\":\"uri\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the character\",\"type\":\"string\"},\"origin\":{\"description\":\"The origin of the character\",\"type\":\"string\"},\"species\":{\"description\":\"The species of the character\",\"type\":\"string\"},\"status\":{\"description\":\"The status of the character (e.g., Alive, Dead, Unknown)\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"},\"404\":{\"description\":\"Character not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/character/{id}","segments":[{"lit":"character"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"character","name__orig":"character","Name":"Character","name_":"character","name-":"character","NAME":"CHARACTER","index$":0}, {"active":true,"entity":"character","key$":"BasicCharacterFlow","kind":"basic","name":"BasicCharacterFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"character_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"character_ref01","srcdatavar":"character_ref01_data","suffix":"_dt0"},"match":{"id":"character01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-character_ref01"}}],"index$":1}]}, 'Character')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let character_ref01_data = Object.values(setup.data.existing.character)[0] as any

    // LIST
    const character_ref01_ent = client.Character()
    const character_ref01_match: any = {}

    const character_ref01_list = (await character_ref01_ent.list(character_ref01_match)).map((e: any) => e.data())


    // LOAD
    const character_ref01_match_dt0: any = {}
    character_ref01_match_dt0.id = character_ref01_data.id
    const character_ref01_data_dt0 = (await character_ref01_ent.load(character_ref01_match_dt0)).data()
    assert(character_ref01_data_dt0.id === character_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/character/CharacterTestData.json')

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
    ['character01','character02','character03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FINAL_SPACE_TEST_CHARACTER_ENTID': idmap,
    'FINAL_SPACE_TEST_LIVE': 'FALSE',
    'FINAL_SPACE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FINAL_SPACE_TEST_CHARACTER_ENTID']

  const live = 'TRUE' === env.FINAL_SPACE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FINAL_SPACE_TEST_CHARACTER_ENTID']
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
  
