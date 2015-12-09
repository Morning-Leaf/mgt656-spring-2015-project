'use strict';

/**
 * An Array of all the events
 */
var allEvents = [
  {
    id: 0,
    title: 'SOM House Party',
    // Note that JavaScript months are zero-indexed,
    // so, month zero is January. This is Jan 17th
    // 2013 at 4:30pm local time.
    date:   new Date(2016, 0, 17, 16, 30, 0),
    image: 'http://i.imgur.com/pXjrQ.gif',
    location: 'Kyle \'s house',
    attending: ['kyle.jensen@yale.edu', 'kim.kardashian@yale.edu']
  },
  {
    id: 1,
    title: 'BBQ party for hackers and nerds',
    date:   new Date(2015, 8, 1, 19, 0, 0),
    image: 'http://i.imgur.com/7pe2k.gif',
    location: 'Miles\' house',
    attending: ['kyle.jensen@yale.edu', 'kim.kardashian@yale.edu']
  },
  {
    id: 2,
    title: 'BBQ for managers',
    date:   new Date(2015, 9, 20, 18, 0, 0),
    image: 'http://i.imgur.com/CJLrRqh.gif',
    location: 'Barry Nalebuff\'s house',
    attending: ['kim.kardashian@yale.edu'],
  },
  {
    id: 4,
    title: 'Cooking lessons for the busy business student',
    date:   new Date(2014, 8, 2, 19, 0, 0),
    image: 'http://i.imgur.com/02KT9.gif',
    location: 'Yale Farm',
    attending: ['homer.simpson@yale.edu'],
  },
  
  {
    id: 5,
    title: 'SOM Winter Gala',
    // Note that JavaScript months are zero-indexed,
    // so, month zero is January. This is Jan 17th
    // 2013 at 4:30pm local time.
    date:   new Date(2015, 11, 12, 21, 30, 0),
    image: 'http://i.giphy.com/D4Fz28ly00bEA.gif',
    location: 'SOM Evans Hall',
    attending: ['allSOM@yale.edu', 'DavidGuetta@yale.edu', 'QuiqueElReggaetonero@yale.edu']
  },
  {
    id: 6,
    title: 'Star Wars 7 Movie Day',
    // Note that JavaScript months are zero-indexed,
    // so, month zero is January. This is Jan 17th
    // 2013 at 4:30pm local time.
    date:   new Date(2015, 11, 18, 22, 30, 0),
    image: 'http://i.giphy.com/5xaOcLOqNmWHaLeB14I.gif',
    location: 'Bow Tie Cinemas New Haven',
    attending: ['allSOM@yale.edu', 'LukeSkywalker@yale.edu', 'BB2@yale.edu', 'StarWarGeek@yale.edu']
  },
  {
    id: 7,
    title: 'Ski & Snowboard Trip to Killington',
    // Note that JavaScript months are zero-indexed,
    // so, month zero is January. This is Jan 17th
    // 2013 at 4:30pm local time.
    date:   new Date(2016, 1, 5, 18, 0, 0),
    image: 'http://i.giphy.com/A91TdERr01DY4.gif',
    location: 'The Beast - Killington Resort',
    attending: ['allSOM@yale.edu', 'SkiSOMClub@yale.edu', 'FirstLearners@yale.edu', 'XGameFans@yale.edu']
  },
  {
    id: 8,
    title: 'Dress Like Santa Winter Party',
    // Note that JavaScript months are zero-indexed,
    // so, month zero is January. This is Jan 17th
    // 2013 at 4:30pm local time.
    date:   new Date(2016, 0, 30, 22, 0, 0),
    image: 'http://i.giphy.com/AnvO1xKaa18mQ.gif',
    location: 'GPSCY',
    attending: ['Santa@yale.edu', 'Neto@yale.edu', 'ElBerenjeno@yale.edu']
  },
  {
    id: 9,
    title: 'SOM Soccer Welcome Game',
    // Note that JavaScript months are zero-indexed,
    // so, month zero is January. This is Jan 17th
    // 2013 at 4:30pm local time.
    date:   new Date(2016, 1, 31, 9, 0, 0),
    image: 'http://i.giphy.com/dKdtyye7l5f44.gif',
    location: 'The Green',
    attending: ['Romo@yale.edu', 'Ramon@yale.edu', 'Carlos@yale.edu']
  }
];


/**
 * Returns the first event that has a particular id.
 */
function getById (id) {
  for (var i = allEvents.length - 1; i >= 0; i--) {
    if (id === allEvents[i].id){
      return allEvents[i];
    }
  }
  return null;
}

module.exports = exports = {
  all: allEvents,
  getById: getById
};