{/*import crypto from 'crypto'

function generate_auth_header(business_id, api_secret, api_key) {
  const prefix = 'blvd-admin-v1'
  const timestamp = Math.floor(Date.now() / 1000)

  const payload = `${prefix}${business_id}${timestamp}`
  const raw_key = Buffer.from(api_secret, 'base64')
  const signature = crypto
    .createHmac('sha256', raw_key)
    .update(payload, 'utf8')
    .digest('base64')

  const token = `${signature}${payload}`
  const http_basic_payload = `${api_key}:${token}`
  const http_basic_credentials = Buffer.from(http_basic_payload, 'utf8').toString('base64')

  console.log(http_basic_credentials)
}

generate_auth_header('984d8ec1-2376-488c-9fd4-0a1db765e43f', 'zHPCft3UiQ21xJDLk5+Z7ytG6F9xH6bEXmO101XRGvY=', '2d9fe759-99e3-4c2f-a50c-6a7fa1d3d3bd')

console.log("hi")*/}