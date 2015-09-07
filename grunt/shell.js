module.exports = {
  bower: {
    command: 'bower install'
  },
  bowerUpdate: {
    command: 'bower update'
  },
  addChangelog: {
    command: 'git add CHANGELOG.md && git commit --amend --no-edit && git tag v<%= pkg.version %> -m "Version <%= pkg.version %>" && git push && git push --tags'
  },
  getWPold: {
    command: 'wget https://wordpress.org/latest.tar.gz && tar zxvf latest.tar.gz && mv wordpress <%= config.rootFolder %> && rm latest.tar.gz'
  },
  getWP: {
    command: 'sh getWP.sh <%= config.rootFolder %>'
  },
  getKeys: {
    command: 'sh getKeys.sh keys.php'
  }
}
