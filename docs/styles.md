# Styles

Our styles are compiled with `libsass` then put through PostCSS where they are automatically prefixed and are finally minified through `cssmin`. Before minification we add the banner needed for the WordPress theme to work and save this file to the theme folder. It is not included in the site, but serves as an uncompressed reference and information source for WordPress.

## Fonts and the Font Loader
For using custom webfonts a loader has been implemented that needs some adjustments to work properly. Open the `src/php/inc/font-loader.php` as well as the `src/config/kss/template/index.html` file and make sure to adjust the font family names. You can also add multiple fonts in multiple stages, however you feel is appropriate. Find some examples [here](https://www.zachleat.com/web/comprehensive-webfonts/) and [here](https://www.zachleat.com/web-fonts/demos/foft.html).

## Post-CSS
Some more plugins of the Post-CSS world have been preinstalled to this boilerplate in preparation of a possible move away from Sass and to fully use Post-CSS.

### CSSNext
For starters the useful `cssnext` library has been integrated which offers support for next-gen CSS specifications which means you can write future proof CSS today. As it will be replaced by referencing a browser version list, the replacements will only be printed to the stylesheet as long as they are actually needed.

Also for custom properties (CSS variables) the option of keeping the variable calls around has been chosen. This gives you access to all variables through JS for browsers that already support it today. This added control might be useful, if you want to change/influence appearance using JavaScript.

### Possible Error With Older Versions of `clean-css`
The CSS minifier we use `grunt-contrib-cssmin` has a dependency of `clean-css`. For fresh installs you will not encounter any problems, however if you updated the starter of an older local version, make sure to delete your `node_modules/` folder and run `npm update` to make sure the latest version of `clean-css` is included. Older versions might run into problems with generating source maps coming from `cssnext`. If you get an error of the `cssmin` task, check that you are running at least version 3.4.19 of the `clean-css` module (you will find the version number in `node_modules/clean-css/package.json`).

### Nucleus Styleguide
A styleguide is generated based on `nucleus` with a slightly adapted default layout. You should always generate a styleguide for your project to ease keeping a good view of all the styles. Also it is easier and recommended to run visual regression tests (see below) on the styleguide and on a component level, not on the final page.
