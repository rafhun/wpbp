module.exports = {
  options: {
    livereload: true,
    spawn: false
  },
  jsHint: {
    files: ['<%= config.srcFolders.js %>script.js', '<%= config.srcFolders.jsMolecules %>**/*.js', 'grunt/*.js', 'Gruntfile.js'],
    tasks: ['jshint:grunt', 'jshint:src']
  },
  scripts: {
    files: ['<%= config.srcFolders.js %>**/*.js'],
    tasks: ['clean:hashedJs', 'concat', 'uglify', 'cssmin', 'copy:functions', 'hashres', 'kss']
  },
  styles: {
    files: ['<%= config.srcFolders.scss %>**/*.scss'],
    tasks: ['clean:hashedCss', 'sass:main', 'autoprefixer:main', 'cssmin', 'uglify', 'copy:functions', 'hashres', 'kss']
  },
  images: {
    files: ['<%= config.srcFolders.images %>**/*.{png,jpg,gif,svg}'],
    tasks: ['imagemin:imagesTheme']
  },
  grunticon: {
    files: ['<%= config.srcFolders.icons %>*.svg'],
    tasks: ['clean:hashedIcons', 'clean:kssConfig', 'svgmin', 'grunticon', 'copy:header', 'copy:icons', 'copy:kssConfig', 'hashres', 'kss']
  },
  languages: {
    files: ['<%= config.srcFolders.languages %>*.po'],
    tasks: ['translations']
  },
  php: {
    files: ['<%= config.srcFolders.php %>**/*.php'],
    tasks: ['clean:hashes', 'copy:php', 'cssmin', 'uglify', 'hashres', 'kss']
  },
  kss: {
    files: ['<%= config.srcFolders.scss %>readme.md','<%= config.srcFolders.scss %>**/*.{html,hbs}'],
    tasks: ['kss']
  },
  kssConfig: {
    files: ['<%= config.srcFolders.config %>kss/template/**'],
    tasks: ['clean:kssConfig', 'copy:kssConfig', 'hashres', 'kss']
  },
  composer: {
    files: ['composer.json', 'composer.lock'],
    tasks: ['shell:updatePlugins']
  },
  htaccess: {
    files: ['<%= config.srcFolders.config %>.htaccess'],
    tasks: ['copy:htaccess']
  }
}
