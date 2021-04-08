Presence Discord working with Repl.

Frist you need to go on discord portail developers;
you need to create a Application and get the Application ID.

[img]
<img src="https://data.veny.fr/screen.png" />

after this, you need to go on config.json.

```
{
    "config": {
        "transport": ["ipc", "websocket"],
        "type": 0 (don't change this, if you are using your machine.)
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
            "text": "yes uiiuiui",
            "enabled": true
        },
        "small": {
            "name": "board",
            "text": "moulagaaa",
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

after done this here we go.