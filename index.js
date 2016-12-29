const postcss = require('postcss');
const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();
const isHtmlEntity = /&[aA-z]+;/g;

const getHtmlEntityCssCode = function (entity) {
    const char = entities.decode(entity);
    if (char === entity) return entity;
    return `\\${char.charCodeAt(0).toString(16)}`;
};

module.exports = postcss.plugin('postcss-content-entity', function PostCssContentEntity () {
    return function (css) {
        css.walkRules((rule) => {
            rule.walkDecls(({prop, value}) => {
                if (prop === 'content') {
                    value = value.replace(isHtmlEntity, getHtmlEntityCssCode);
                }
            });
        });
    };
});
