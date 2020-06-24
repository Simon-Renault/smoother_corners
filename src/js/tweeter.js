
const generateTweeterShareLink = (params) => {
    return`http://twitter.com/share?${ Object.entries(params).map((v) => `&${v[0]}=${ encodeURIComponent(v[1])};`)  }`
}
const openTweeterShareWindow = (params) => {
    window.open(shareURL, '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
}

export {generateTweeterShareLink,openTweeterShareWindow}