/**
 * documentCreateWrapper
 *
 * @param type the element type, 'div', 'p', 'img' etc.
 * @param attributes array of objects. [{'key':'value'}]
 * @param append append any value. usually document.createTextNode() for text.
 *        You can nest this function over and over until you have the desired effect you want.
 *
 * @returns {object}
 */
module.exports = function(type, attributes, append) {
    let doc = document.createElement(type);
    if((attributes !== null && attributes !== undefined) &&
        attributes.length > 0) {
        for (let i = 0; i < attributes.length; i++) {
            let keys = Object.keys(attributes[i]);
            doc.setAttribute(keys[0], attributes[i][keys[0]]);
        }
    }
    if(append !== null && append !== undefined && Array.isArray(append)===true) {
        for(let j=0; j<append.length; j++) {
            if(typeof append[j] === 'string') {
                doc.appendChild(document.createTextNode(append[j]));
            } else {
                doc.appendChild(append[j]);
            }
        }
    } else if(append !== null && append !== undefined && typeof append === 'object') {
        doc.appendChild(append);
    } else if(append !== null && append !== undefined && (typeof append === 'string' || typeof append === 'number')) {
        doc.appendChild(document.createTextNode(append));
    }
    return doc;
};