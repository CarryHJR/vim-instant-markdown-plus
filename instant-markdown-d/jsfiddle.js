/*
 * jsfiddle.js
 * Copyright (C) 2020 carry <carry@CarrHJRs-MBP.local>
 *
 * Distributed under terms of the MIT license.
 */

/*
 * img-resize.js
 * Copyright (C) 2020 carry <carry@CarrHJRs-MBP.local>
 *
 * Distributed under terms of the MIT license.
 */


module.exports = function jsfiddle_plugin(md, options) {
    var defaultRender = md.renderer.rules.image
    var vimeoRE = /jsfiddle.net/;

    md.renderer.rules.image = function (tokens, idx, options, env, self) {
        var token = tokens[idx],
            aIndex = token.attrIndex('src');
        if (vimeoRE.test(token.attrs[aIndex][1])) {

            var src = token.attrs[aIndex][1];
            console.log(src);

            return `<iframe width="100%" height="300" src="` + src + `" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>`
        }
        return defaultRender(tokens, idx, options, env, self);
    };
};



