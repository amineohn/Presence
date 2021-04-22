# Presence Discord working with Repl 🚀 


First, you need to go to discord party developers; you need to create an Application and get the Application ID. 🥳

<img style="border-radius: 10px;" src="https://data.veny.fr/screen.png" />

> After this you need to go on config.json. 🍥

> Don't touch "type" value is set by default 0 = ipc 1 = websocket.
```json
{
    "config": {
        "transport": ["ipc", "websocket"],
        "type": 0
    },
    "user": {
        "descriminator": "⚡ Veny",
        "id": "(you need to edit this by your application id.)",
        "details": "💡 yes",
        "state": "👉 13UP",
        "enabled": true,
        "icon": "💡 "
    },
    "rand": {
        "enabled": false,
        "number": 6,
        "text": [
            "chill with Veny", 
            "chill with 3enii", 
            "chill with r",
            "chill with me",
            "chill with you",
            "chill with her"
        ]
    },
    "image": {
        "large": {
            "name": "board",
            "text": "it work great",
            "enabled": true
        },
        "small": {
            "name": "board",
            "text": "it work",
            "enabled": false
        }
    },
    "buttons": {
        "one": {
            "label": "Website",
            "url": "https://veny.fr",
            "enabled": true
        },
        "two": {
            "label": "Test2",
            "url": "",
            "enabled": false
        }
    }
}
```

> 👍  after done this here we go.