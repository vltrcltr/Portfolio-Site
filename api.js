
export const ProjectAPI = {
  projects: [
    {
      client: "Zenpond",
      description: '(Zenpond.co) (Current project)',
      images: "",
      number: 10,
      next: 1,
      prev: 9,
      title: "Zenpond.co",
      year: "Work In Progress"
    },
    {
      client: "Shy R.L.",
      description: "(Vital Injury) (Digital EP cover)",
      images: [
        {id: 1, url: require("./Images/shyrl2.jpg")}
      ],
      number: 9,
      next: 10,
      prev: 8,
      title: "Vital Injury",
      year: "2020"
    },
    {
      client: "Cirruswav",
      description: "(A Shape Emerges) (Digital single cover)",
      images: [
        {id: 1, url: require("./Images/cirruswav1.jpg")}
      ],
      number: 8,
      next: 9,
      prev: 7,
      title: "A Shape Emerges",
      year: "2019"
    },
    {
      client: "Cat Casual & The Final Word",
      description: '(The Secret Self) (12" album sleeve)',
      images: [
        {id: 1, url: require("./Images/catcasual1.jpg")},
        {id: 2, url: require("./Images/catcasual2.jpg")},
      ],
      number: 7,
      next: 8,
      prev: 6,
      title: "The Secret Self",
      year: "2019"
    },
    {
      client: "Buddy Crime",
      description: "(Tour poster)",
      images: [
        {id: 1, url: require("./Images/buddycrime1.jpg")},
      ],
      number: 6,
      next: 7,
      prev: 5,
      title: "Buddy Crime",
      year: "2019"
    },
    {
      client: "Memory Gloss",
      description: "(Show poster)",
      images: [
        {id: 1, url: require("./Images/memorygloss1.jpg")},
      ],
      number: 5,
      next: 6,
      prev: 4,
      title: "Memory Gloss",
      year: "2019"
    },
    {
      client: "Shy R.L.",
      description: "(Midnight) (Digital EP cover)",
      images: [
        {id: 1, url: require("./Images/shyrl1.jpg")}
      ],
      number: 4,
      next: 5,
      prev: 3,
      title: "Midnight",
      year: "2019"
    },
    {
      client: "Anwar Sadat",
      description: '(Ersatz Living) (12" album sleeve, A/B vinyl labels) (Cover collab with Beefstrong)',
      images: [
        {id: 1, url: require("./Images/anwarErsatz1.jpg")},
        {id: 2, url: require("./Images/anwarErsatz2.jpg")},
        {id: 3, url: require("./Images/anwarErsatz3.jpg")},
        {id: 4, url: require("./Images/anwarErsatz4.jpg")},
        {id: 5, url: require("./Images/anwarErsatz5.jpg")},
      ],
      number: 3,
      next: 4,
      prev: 2,
      title: "Ersatz Living",
      year: "2016"
    },
    {
      client: "Anwar Sadat",
      description: '(Obedience) (7" screen-printed album sleeve, A/B vinyl labels)',
      images: [
        {id: 1, url: require("./Images/anwarObedience1.jpg")},
        {id: 2, url: require("./Images/anwarObedience2.jpg")},
        {id: 3, url: require("./Images/anwarObedience3.jpg")},
      ],
      number: 2,
      next: 3,
      prev: 1,
      title: "Obedience",
      year: "2014"
    },
    {
      client: "Anwar Sadat",
      description: '(Gold) (12" screen-printed album sleeve and insert)',
      images: [
        {id: 1, url: require("./Images/anwarGold1.jpg")},
        {id: 2, url: require("./Images/anwarGold2.jpg")},
        {id: 3, url: require("./Images/anwarGold3.jpg")}
      ],
      number: 1,
      next: 2,
      prev: 10,
      title: "Gold",
      year: "2012"
    },
  ],
  all: function() {return this.projects},
  get: function(id) {
    const isProject = p => p.number === id
    return this.projects.find(isProject)
  }
}
