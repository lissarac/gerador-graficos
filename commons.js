const getCSS = (variavel)=>{
    const bodyStyle = getComputedStyle(document.body)
    return bodyStyle.getPropertyValue(variavel)
}
const tickConfig = {
    family:getCSS ('--font'),
    size:16,
    color: getCSS('--primary-color')
}
export{ getCSS,tickConfig}
