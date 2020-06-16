const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/maciek-tomczak/maciek.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)

ghpages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/maciek-tomczak/maciek.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
