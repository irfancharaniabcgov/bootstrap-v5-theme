'use strict'

const fs = require('node:fs')
const path = require('node:path')

const rootPath = path.resolve(__dirname, '..')
const rootPackagePath = path.join(rootPath, 'package.json')
const publishMetadataPath = path.join(rootPath, 'package.publish.json')
const distPackagePath = path.join(rootPath, 'dist', 'package.json')

const rootPackage = JSON.parse(fs.readFileSync(rootPackagePath, 'utf8'))
const publishMetadata = JSON.parse(fs.readFileSync(publishMetadataPath, 'utf8'))

if (!rootPackage.version) {
  throw new Error('The root package.json must define a version.')
}

const publishPackage = {
  ...publishMetadata,
  version: rootPackage.version
}

fs.writeFileSync(
  distPackagePath,
  `${JSON.stringify(publishPackage, null, 2)}\n`,
  'utf8'
)
