const url = 'https://prod-00.heyday.solvestack.net/graphql';
let solveFetch = fetch(url,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Basic c29sdmUta2V5LWE3MjUxMGMwLTZjODctNDljNS04ZjFmLTE1ZWE3N2FiMjQ2OTpzb2x2ZS1zZWNyZXQtMWMxMzk2ZDctODk4Mi00ZTYwLWJlZjQtZjEzNmIwZjI0ZmI1'
  },
  body: JSON.stringify({
    query: `mutation queue_valid_event {
      queue_event(
        input: {
          event_time: "2020-06-01T10:00:00.000Z"
          session_id: "4c2f8acb-1e22-427e-95f6-aee58dad3ddc"
          type: "custom_askNicely_response"
          payload: "{
          \"email\":"ian@shockmouse.com",
          \"placement\":${body.person.email},
          \"device_os\":\"ios\"}"
        }
      ) {
        id
      }
    }`
  })
).then(res => res.json())

exports.handler = async function(event, context) {
  const body = JSON.parse(event.body);
  try {
    solveFetch();
  } catch(error) {
    console.log(error)
  }
}