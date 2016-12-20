const postcss = require('postcss');
const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();
const isHtmlEntity = /&[aA-z]+;/g;

const getHtmlEntityCssCode = function (entity) {
    const char = entities.decode(entity);
    if (char === entity) return entity;
    return '\\' + char.charCodeAt(0).toString(16);
};

module.exports = postcss.plugin('test', function test() {
    return function (css) {
        css.walkRules(function (rule) {
            rule.walkDecls(function (decl) {
                if (decl.prop === 'content') {
                    decl.value = decl.value.replace(isHtmlEntity, (entity) => {
                        return getHtmlEntityCssCode(entity);
                    });
                }
            });
        });
    };
});
