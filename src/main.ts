import set from "./config.json";
import rpc from "discord-rpc";

const client = new rpc.Client({
  transport: "ipc",
});
const random = Math.floor(Math.random() * set.rand.number);

client.on(`ready`, () => {
  client.setActivity(
    {
      state: set.user.enabled ? set.user.state : ``,
      details: set.rand.enabled
        ? `${set.user.icon}` + set.rand.text[random]
        : set.user.details,
      startTimestamp: new Date(),
      endTimestamp: new Date(),
      largeImageKey: set.user.icon,
      largeImageText: set.rand.text[random],
      joinSecret: set.user.joinSecret,
      buttons: [
        {
          label: set.buttons.one.enabled ? set.buttons.one.label : ``,
          url: set.buttons.one.enabled ? set.buttons.one.url : ``,
        },
      ],
    },
    process.pid,
  );
});
client
  .login({
    clientId: set.user.id,
  })
  .catch(console.error);

console.log(
  `\n ${set.user.descriminator} \n ${set.user.state} \n ${set.user.details}`,
);
