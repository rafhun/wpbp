module.exports = {
  editorStyles: {
    files: [{
      src: '<%= config.srcFolders.css %>editor-styles.css',
      dest: '<%= destFolder %>editor-styles.css'
    }]
  },
  fonts: {
    files: [
      {
        expand: true,
        cwd: '<%= config.srcFolders.fonts %>',
        src: ['*'],
        dest: '<%= destFolder %><%= config.buildFolders.fonts %>',
        filter: 'isFile'
      }
    ]
  },
  index: {
    files: [{
      expand: true,
      cwd: '<%= config.srcFolders.php %>',
      src: 'index.php',
      dest: '<%= destFolder %>',
    }]
  },
  languages: {
    files: [{
      expand: true,
      cwd: '<%= config.srcFolders.languages %>',
      src: ['**'],
      dest: '<%= destFolder %><%= config.buildFolders.languages %>'
    }]
  },
  php: {
    files: [
      {
        expand: true,
        cwd: '<%= config.srcFolders.php %>',
        src: ['**'],
        dest: '<%= destFolder %>',
      }
    ]
  }
}
