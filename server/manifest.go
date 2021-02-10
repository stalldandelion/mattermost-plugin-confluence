// This file is automatically generated. Do not modify it manually.

package main

import (
	"strings"

	"github.com/mattermost/mattermost-server/v5/model"
)

var manifest *model.Manifest

const manifestStr = `
{
  "id": "com.mattermost.confluence",
  "name": "Confluence",
  "description": "Atlassian Confluence plugin for Mattermost.",
  "homepage_url": "https://github.com/mattermost/mattermost-plugin-confluence",
  "support_url": "https://github.com/mattermost/mattermost-plugin-confluence/issues",
  "release_notes_url": "https://github.com/mattermost/mattermost-plugin-confluence/releases/tag/v1.2.0",
  "icon_path": "assets/icon.svg",
  "version": "1.2.0",
  "min_server_version": "5.26.0",
  "server": {
    "executables": {
      "linux-amd64": "server/dist/plugin-linux-amd64",
      "darwin-amd64": "server/dist/plugin-darwin-amd64",
      "windows-amd64": "server/dist/plugin-windows-amd64.exe"
    },
    "executable": ""
  },
  "webapp": {
    "bundle_path": "webapp/dist/main.js"
  },
  "settings_schema": {
    "header": "",
    "footer": "",
    "settings": [
      {
        "key": "Secret",
        "display_name": "Webhook Secret:",
        "type": "generated",
        "help_text": "The secret used to authenticate the webhook to Mattermost.",
        "regenerate_help_text": "Regenerates the secret for the webhook URL endpoint. Regenerating the secret invalidates your existing Confluence integrations.",
        "placeholder": "",
        "default": null
      }
    ]
  }
}
`

func init() {
	manifest = model.ManifestFromJson(strings.NewReader(manifestStr))
}
