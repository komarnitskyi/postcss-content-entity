const postcss = require('postcss');
const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();
const isHtmlEntity = /&[aA-z]+;/g;

const getHtmlEntityCssCode = (entity) => {
    const char = entities.decode(entity);
    if (char === entity) return entity;
    return '\\' + char.charCodeAt(0).toString(16);
};

const postcssContentEntity = () => {
    return function (css) {
        css.walkRules((rule) => {
            rule.walkDecls((decl) => {

                if (decl.prop === 'content') {
                    decl.value = decl.value.replace(isHtmlEntity, (entity) => {
                        return getHtmlEntityCssCode(entity);
                    });
                }

            });
        });
    };
};

module.exports = postcss.plugin('postcss-content-entity', postcssContentEntity);
