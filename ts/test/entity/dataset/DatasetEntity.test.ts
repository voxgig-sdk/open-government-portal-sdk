

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { OpenGovernmentPortalSDK, BaseFeature, stdutil } from '../../..'

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


describe('DatasetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OPEN_GOVERNMENT_PORTAL_TEST_LIVE=TRUE.
  afterEach(liveDelay('OPEN_GOVERNMENT_PORTAL_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OpenGovernmentPortalSDK.test()
    const ent = testsdk.Dataset()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OPEN_GOVERNMENT_PORTAL_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'dataset.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Detailed description of the dataset","t":"`$STRING`","key$":"description","index$":0},"download_url":{"a":true,"fo":"uri","h":"Download Url","n":"download_url","r":false,"sh":"URL to download the dataset","t":"`$STRING`","key$":"download_url","index$":1},"formats":{"a":true,"h":"Formats","n":"formats","r":false,"sh":"Available formats for the dataset","t":"`$ARRAY`","key$":"formats","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the dataset","t":"`$STRING`","key$":"id","index$":3},"jurisdiction":{"a":true,"h":"Jurisdiction","n":"jurisdiction","r":false,"sh":"Jurisdiction level of the dataset","t":"`$STRING`","key$":"jurisdiction","index$":4},"keywords":{"a":true,"h":"Keywords","n":"keywords","r":false,"sh":"Keywords associated with the dataset","t":"`$ARRAY`","key$":"keywords","index$":5},"publisher":{"a":true,"h":"Publisher","n":"publisher","r":false,"sh":"Organization that published the dataset","t":"`$STRING`","key$":"publisher","index$":6},"record_modified":{"a":true,"fo":"date","h":"Record Modified","n":"record_modified","r":false,"sh":"Date when the dataset was last modified","t":"`$STRING`","key$":"record_modified","index$":7},"record_released":{"a":true,"fo":"date","h":"Record Released","n":"record_released","r":false,"sh":"Date when the dataset was first released","t":"`$STRING`","key$":"record_released","index$":8},"resources":{"a":true,"h":"Resources","n":"resources","r":false,"sh":"List of resources associated with the dataset","t":"`$ARRAY`","key$":"resources","index$":9},"title":{"a":true,"h":"Title","n":"title","r":false,"sh":"Title of the dataset","t":"`$STRING`","key$":"title","index$":10}},"id":{"field":"id","name":"id"},"name":"dataset","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /opendata/","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"format","or":"format","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"keyword","or":"keyword","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":10,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"organization","or":"organization","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":5},{"a":true,"ex":"relevance","k":"query","n":"sort","or":"sort","r":false,"t":"`$STRING`","index$":6}]},"k":"http","m":"GET","o":"/opendata/","q":{"exist":["format","keyword","limit","organization","page","q","sort"]},"r":{},"s":[{"lit":"opendata"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /opendata/dataset/{datasetId}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"datasetId","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/opendata/dataset/{datasetId}","q":{"exist":["id"]},"r":{"param":{"datasetId":"id"}},"s":[{"lit":"opendata"},{"lit":"dataset"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"dataset","name__orig":"dataset","Name":"Dataset","name_":"dataset","name-":"dataset","NAME":"DATASET","index$":0}, {"active":true,"entity":"dataset","key$":"BasicDatasetFlow","kind":"basic","name":"BasicDatasetFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"dataset_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"dataset_ref01","srcdatavar":"dataset_ref01_data","suffix":"_dt0"},"m":{"id":"dataset01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-dataset_ref01"}}],"index$":1}]}, 'Dataset', {"GET /opendata/":{"protocol":"http","parameters":[{"name":"q","in":"query","description":"Search query term to filter datasets","required":false,"schema":{"type":"string"},"index$":0},{"name":"sort","in":"query","description":"Sort order for results","required":false,"schema":{"type":"string","enum":["relevance","modified","created","title_asc","title_desc"],"default":"relevance"},"index$":1},{"name":"organization","in":"query","description":"Filter by organization/publisher name","required":false,"schema":{"type":"string"},"index$":2},{"name":"format","in":"query","description":"Filter by dataset format","required":false,"schema":{"type":"string","enum":["JSON","CSV","XLSX","HTML","XML","ZIP","JSONL","PNG","SQL"]},"index$":3},{"name":"keyword","in":"query","description":"Filter by keyword tags","required":false,"schema":{"type":"string"},"index$":4},{"name":"page","in":"query","description":"Page number for pagination","required":false,"schema":{"type":"integer","minimum":1,"default":1},"index$":5},{"name":"limit","in":"query","description":"Number of results per page","required":false,"schema":{"type":"integer","minimum":1,"maximum":100,"default":10},"index$":6}]},"GET /opendata/dataset/{datasetId}":{"protocol":"http","parameters":[{"name":"datasetId","in":"path","description":"Unique identifier of the dataset","required":true,"schema":{"type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let dataset_ref01_data = Object.values(setup.data.existing.dataset)[0] as any

    // LIST
    const dataset_ref01_ent = client.Dataset()
    const dataset_ref01_match: any = {}

    const dataset_ref01_list = (await dataset_ref01_ent.list(dataset_ref01_match)).map((e: any) => e.data())


    // LOAD
    const dataset_ref01_match_dt0: any = {}
    dataset_ref01_match_dt0.id = dataset_ref01_data.id
    const dataset_ref01_data_dt0 = (await dataset_ref01_ent.load(dataset_ref01_match_dt0)).data()
    assert(dataset_ref01_data_dt0.id === dataset_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/dataset/DatasetTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = OpenGovernmentPortalSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['dataset01','dataset02','dataset03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'OPEN_GOVERNMENT_PORTAL_TEST_DATASET_ENTID': idmap,
    'OPEN_GOVERNMENT_PORTAL_TEST_LIVE': 'FALSE',
    'OPEN_GOVERNMENT_PORTAL_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['OPEN_GOVERNMENT_PORTAL_TEST_DATASET_ENTID']

  const live = 'TRUE' === env.OPEN_GOVERNMENT_PORTAL_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['OPEN_GOVERNMENT_PORTAL_TEST_DATASET_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new OpenGovernmentPortalSDK(merge([
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
    explain: 'TRUE' === env.OPEN_GOVERNMENT_PORTAL_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
