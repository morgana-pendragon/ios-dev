// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: key;
/*
Script Name: github-api.js
Description: Authenticates to the Github api. It also defines the functions of the API that our app will use 
*/

//FileManager
const fm = FileManager.local();
const dev = fm.bookmarkedPath('dev');
const utils = fm.bookmarkedPath('utils');
const jsonUtil = importModule(utils + '/json-util.js');

function Github(authDir) {
  
  this.authDir = fm.bookmarkedPath('auth')
  this.tokenDir = fm.bookmarkedPath('tokens') //Folders used by Oauth
  
  this.authFile = fm.joinPath(authDir, 'github.json')
  this.tokenFile = fm.joinPath(tokenDir, 'git_token.json') //Files used by Oauth
  
  this.client = jsonUtil.loadFromFile(this.authFile)
  log(`client: ${JSON.stringify(this.client)}`)
  log(`tokenFile: ${this.tokenFile}`)
  
  if (FM.fileExists(this.current_user_file)) {
        this.token = jsonutil.loadFromFile(this.tokenFile)
    } else {
        this.token = {}
    }
    log(`token: ${JSON.stringify(this.token)}`)
    
    this.BASE_URL = 'https://api.github.com'
    this.AUTH_URL = 'https://github.com/login/oauth/authorize?'
    this.TOKEN_URL = 'https://github.com/login/oauth/access_token?'
this.REFRESH_URL = this.TOKEN_URL
}

Github.prototype.authenticationCheck = function() {
  return (!!this.token.access_token)
};

Github.prototype.launchAuthentication = function() {
  
  let auth_url = this.AUTH_URL 
  auth_url += 'client_id=db87ab0a877bf5d05333&'
  auth_url += 'redirect_url=https://my-auth-proxy.herokuapp.com/?arg_format=json&forward_to=shortcuts://run-shortcut?name=Git_OAuth'
console.log('auth_url', auth_url)

Safari.open(auth_url)
};

Github.prototype.retrieveToken = async function() {
 let tokenURL = this.TOKEN_URL
const req = new Request(tokenURL)
req.headers = {
  Accept: application/json
}
req.method = 'POST'

};
Github.prototype.refreshToken = async function() {

    if (!this.isAuthenticated()) {
        throw 'Not yet authenticated.'
    }

    let now = new Date()
    let expiry = new Date(this.token.expires_on)

    log('checking token validity')
    if (now < expiry) {
        log('token is still valid. not refreshing')
        return this.token
    } else {
        log('token expired. refreshing.')
    }

    var req = new Request(this.REFRESH_URL)
    req.headers = {
        'Authorization' : `${this.client.authorization}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    req.method = 'POST'
    let body = `grant_type=refresh_token` +
                `&refresh_token=${encodeURIComponent(this.token.refresh_token)}`

    req.body = body

    this.token =  await req.loadJSON();

    let end_date = new Date();
    end_date.setSeconds(end_date.getSeconds() + this.token.expires_in)

    this.token['expires_on'] = end_date

    jsonutil.writeToFile(this.token, FM.joinPath(this.storage_dir, 'current_user.access_token.json'))

    return this.token

}


Github.prototype.currentUser


module.exports = Github


