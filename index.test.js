const postcss = require('postcss');

const plugin = require('./');

function run(input, output, opts) {
    opts = opts || {};
    return postcss([plugin(opts)]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

it('Should not make any changes if content have no entities', () => {
    return run('a:before{content: "Email: "}',
        'a:before{content: "Email: "}',
        {});
});

it('Should work correct with alone entity', () => {
    return run('a:before{content: "&times;"}',
        'a:before{content: "\\d7"}',
        {});
});


it('Should work correct with multi entities', () => {
    return run('a:before{content: "&checkmark; - &times;"}',
        'a:before{content: "\\2713 - \\d7"}',
        {});
});

