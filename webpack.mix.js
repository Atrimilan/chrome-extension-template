let mix = require('laravel-mix');

mix.setPublicPath('./')
    .sass('assets/sass/default_popup.scss', 'dist/css')
    .js('assets/js/background.js', 'dist/js')
    .js('assets/js/popup.js', 'dist/js').vue()    // Vue version is automatically detected, but you can specify it: ".vue({ version: 3 })"
    .options({
        processCssUrls: false
    });