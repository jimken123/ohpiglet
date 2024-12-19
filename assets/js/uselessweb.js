function uselessWebButton(button) {
  var initialClick = false
  var randomRange = 6

  let sitelistName = 'sitelist-mar-19'

  var sitesList = [
    'https://sliding.toys/mystic-square/8-puzzle/daily/',
    'https://longdogechallenge.com/',
    'https://maze.toys/mazes/mini/daily/',
    'https://optical.toys',
    'https://paint.toys/calligram/',
    'https://puginarug.com',
    'https://memory.toys/classic/easy/',
    'https://alwaysjudgeabookbyitscover.com',
    'https://clicking.toys/flip-grid/neat-nine/3-holes/',
    'http://www.staggeringbeauty.com/',
    'http://burymewithmymoney.com/',
    'https://toms.toys',
    'https://memory.toys/monkey-challenge/easy/',
    'https://memory.toys',
  ]

  var sites = null

  // Prepares and binds the button
  var init = function () {
    button.onclick = onButtonClick

    // Initial set sites
    sites = sitesList.slice()

    if (localStorage[sitelistName]) {
      // They have storage, filter out any not in the base list, that could be spam now
      var currentSites = JSON.parse(localStorage[sitelistName])
      var filteredSites = currentSites.filter(
        (site) => sitesList.indexOf(site) !== -1,
      )
      if (filteredSites.length > 0) {
        sites = filteredSites
      }
    }
  }

  // Selects and removes the next website from the list
  var selectWebsite = function () {
    var site, range, index

    range = randomRange > sites.length ? sites.length : randomRange
    index = Math.floor(Math.random() * range)

    site = sites[index]
    sites.splice(index, 1)

    return site
  }

  var openSite = function (url) {
    window.open(url)
  }

  var onButtonClick = function () {
    if (window.gtag) {
      gtag('event', 'click', { event_category: 'button' })
    }

    if (initialClick === false) {
      // Change text from "TO A"
      document.getElementById('joint').innerHTML = 'TO ANOTHER'
      initialClick = true
    }

    var url = selectWebsite()
    openSite(url)

    // User has visited ALL the sites... refresh the list.
    if (sites.length == 0) {
      sites = sitesList.slice()
    }

    localStorage[sitelistName] = JSON.stringify(sites)
  }

  init()
}

var uselessWebButton = new uselessWebButton(document.getElementById('button'))      
