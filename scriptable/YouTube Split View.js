// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: green; icon-glyph: magic;
let v = document.querySelector('video');
v.addEventListener('webkitpresentationmodechanged', (e)=>e.stopPropagation(), true);

setTimeout(()=>v.webkitSetPresentationMode('picture-in-picture'), 3000);
completion()