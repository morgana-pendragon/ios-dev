// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-blue; icon-glyph: magic;
const FM        = FileManager.iCloud();
const HOME      = FM.documentsDirectory();
const Spotify   = importModule('./spotify-api.js')

// new instance of the Pocket client
const app = new Pocket(FM.joinPath(HOME, 'ipadjs'))

async function alert(message) {
    let msg = new Alert()
    msg.message = message
    await msg.present()
}

// if not `code` argument is passed, start the
// authentiation
if (!args.queryParameters['code']) {
    let scope = 'user-read-recently-played'
    let state = 'sriptable-for-iphone'
    app.launchAuthentication(scope, state)
} else {
    // else get the access token
    let token = await app.getAccessToken({
        code: args.queryParameters['code'],
        state: args.queryParameters['state']
    })

    await app.getUser()

    await alert(`${app.user.display_name} authenticated. Access expires on ${app.token.expires_on.toString()}.`) 

}