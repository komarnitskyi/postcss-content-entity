const postcss = require('postcss');

const plugin = require('./');

function run(input, output, opts = { }) {
    return postcss([ plugin(opts) ]).process(input)
        .then( result => {
            console.log(result.css);
            console.log(output);
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

it('Should work correct with alone entity', () => {
    return run('a:before{content: "&times;"}', 'a:before{content: "\\d7"}', { });
});

