// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: brown; icon-glyph: magic;
const notion = "https://notion.so"
const op = Safari.open(notion)

const agent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 11.2; rv:86.0) Gecko/20100101 Firefox/86.0"




function setUserAgent(window, userAgent) {
    // Works on Firefox, Chrome, Opera and IE9+
    if (navigator.__defineGetter__) {
        navigator.__defineGetter__('userAgent', function () {
            return userAgent;
        });
    } else if (Object.defineProperty) {
        Object.defineProperty(navigator, 'userAgent', {
            get: function () {
                return userAgent;
            }
        });
    }
    // Works on Safari
    if (window.navigator.userAgent !== userAgent) {
        var userAgentProp = {
            get: function () {
                return userAgent;
            }
        };
        try {
            Object.defineProperty(window.navigator, 'userAgent', userAgentProp);
        } catch (e) {
            window.navigator = Object.create(navigator, {
                userAgent: userAgentProp
            });
        }
    }
}
setUserAgent(window, agent);
