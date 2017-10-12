/**
 * documentCreateWrapper
 *
 * @param string - type the element type, 'div', 'p', 'img' etc.
 * @param object - attributes array of objects. [{'key':'value'}]
 * @param object - append append any value. usually document.createTextNode() for text.
 *        You can nest this function over and over until you have the desired effect you want.
 *
 * @returns {object}
 */
module.exports = function(type, attributes, append) {

    if (arguments.length === 0) {
        throw 'no arguments present';
    }

    if(typeof type !== 'string') {
        throw 'given dom type is not a string';
    }

    let doc = document.createElement(type);

    if((attributes !== null && attributes !== undefined) && attributes.length > 0) {
        for (let i = 0; i < attributes.length; i++) {
            let keys = Object.keys(attributes[i]);
            if(keys.length > 1) {
                for(let g = 0; g < keys.length; g++) {
                    doc.setAttribute(keys[g], attributes[i][keys[g]]);
                }
            } else {
                doc.setAttribute(keys[0], attributes[i][keys[0]]);
            }
        }
    }

    if(append !== null && append !== undefined && Array.isArray(append)===true) {
        for(let j = 0; j<append.length; j++) {
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