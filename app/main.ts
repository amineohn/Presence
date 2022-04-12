import config from "@modules/config";
import rpc from "discord-rpc";

const client = new rpc.Client({
  transport: "ipc",
});
const random = Math.floor(Math.random() * config.rand.number);
client.on("ready", () => {
  client.setActivity(
    {
      state: config.user.enabled ? config.user.state : "",
      details: config.rand.enabled
        ? `${config.user.icon}` + config.rand.text[random]
        : config.user.details,
      largeImageKey: config.image.large.enabled ? config.image.large.key : "",
      largeImageText: config.image.large.enabled ? config.image.large.text : "",
      smallImageKey: config.image.small.enabled ? config.image.small.key : "",
      smallImageText: config.image.small.enabled ? config.image.small.text : "",
      buttons: [
        {
          label: config.buttons.enabled ? config.buttons.label : "",
          url: config.buttons.enabled ? config.buttons.url : "",
        },
      ],
    },
    process.pid,
  );
});

client
  .login({
    clientId: config.user.id,
  })
  .catch(console.error);

console.log(
  `\n ${config.user.descriminator} \n ${config.user.state} \n ${config.user.details}`,
);
