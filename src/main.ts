import set from './config.json'

const rpc = require('discord-rpc')
const client = new rpc.Client({ transport: set.config.transport[set.config.type] }) // ? 0 = ipc 1 = websocket.
const random = Math.floor(Math.random() * set.rand.number)

client.on(`ready`, () => {
  client.request(`SET_ACTIVITY`, {
    pid: process.pid,
    activity: {
      state: set.user.enabled ? set.user.state : ``,
      details: set.rand.enabled ? `${set.user.icon}` + set.rand.text[random] : set.user.details,
      assets: {
        large_image: set.image.large.enabled ? set.image.large.name : ``,
        large_text: set.image.large.enabled ? set.image.large.text : ``,
        //small_image: set.image.small.enabled ? set.image.small.name : ``
        //small_text: set.image.small.enabled ? set.image.small.text : ``
      },
      buttons: [
        {
          label: set.buttons.one.enabled ? set.buttons.one.label : ``,
          url: set.buttons.one.enabled ? set.buttons.one.url : ``
        },
        // {
        //  label: set.buttons.two.enabled ? set.buttons.two.label : ``,
        //  url: set.buttons.two.enabled ? set.buttons.two.url : ``
        // }
      ]
    }
  })
})
client.login({
  clientId: set.user.id
}).catch(console.error)

console.log(`\n ${set.user.descriminator} \n ${set.user.state} \n ${set.user.details}`)