import fetch from 'node-fetch'

const secretKey = process.env.GATSBY_JSBIN_API_KEY

const basicHeaders = () => ({
  'Content-Type': 'application/json',
  'X-Master-Key': secretKey,
})

export const createBin = async (
  name,
  collectionId,
  content,
  isPrivate = true
) => {
  const headers = {
    ...basicHeaders(),
    ...(isPrivate ? {} : { 'X-Bin-Private': 'false' }),
    'X-Bin-Name': name,
    'X-Collection-Id': collectionId,
  }

  const result = await fetch('https://api.jsonbin.io/v3/b', {
    method: 'post',
    body: JSON.stringify(content),
    headers,
  })
  if (!result.ok) throw new Error('createBin Error: ' + (await result.text()))
  return await result.json()
}

export const readBin = async (id, version = 'latest') => {
  const result = await fetch(`https://api.jsonbin.io/v3/b/${id}/${version}`, {
    headers: basicHeaders(),
  })
  if (!result.ok) throw new Error('readBin Error: ' + (await result.text()))
  return await result.json()
}

export const updateBin = async (id, content, shouldDoVersioning = true) => {
  const headers = {
    ...basicHeaders(),
    'X-Bin-Versioning': shouldDoVersioning ? 'true' : 'false',
  }

  const result = await fetch(`https://api.jsonbin.io/v3/b/${id}`, {
    method: 'put',
    body: JSON.stringify(content),
    headers,
  })
  if (!result.ok) throw new Error('updateBin Error: ' + (await result.text()))
  return await result.json()
}
