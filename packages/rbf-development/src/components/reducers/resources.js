const initialState = {
  images: {
    name: 'images',
    list: {
      visibleIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      params: {
        sort: null,
        order: null,
        page: 1,
        perPage: 10,
        filter: {}
      },
      selectedIds: [],
      total: 22
    },
    data: {
      1: {
        id: 1,
        source: 'https://picsum.photos/250/190?image=3',
        title: 'Alejandro Escamilla'
      },
      2: {
        id: 2,
        source: 'https://picsum.photos/250/190?image=20',
        title: 'Aleks Dorohovich'
      },
      3: {
        id: 3,
        source: 'https://picsum.photos/250/190?image=27',
        title: 'Yoni Kaplan-Nadel'
      },
      4: {
        id: 4,
        source: 'https://picsum.photos/250/190?image=31',
        title: 'How-Soon Ngu'
      },
      5: {
        id: 5,
        source: 'https://picsum.photos/250/190?image=50',
        title: 'Tyler Wanlass'
      },
      6: {
        id: 6,
        source: 'https://picsum.photos/250/190?image=55',
        title: 'Tyler Wanlass'
      },
      7: {
        id: 7,
        source: 'https://picsum.photos/250/190?image=59',
        title: 'AlejandArt WaveroEscamilla'
      },
      8: {
        id: 8,
        source: 'https://picsum.photos/250/190?image=64',
        title: 'Alexander Shustov'
      },
      9: {
        id: 9,
        source: 'https://picsum.photos/250/190?image=77',
        title: 'May Pamintuan'
      },
      10: {
        id: 10,
        source: 'https://picsum.photos/250/190?image=91',
        title: 'Jennifer Trovato'
      },
      11: {
        id: 11,
        source: 'https://picsum.photos/250/190?image=104',
        title: 'Dyaa Eldin'
      },
      12: {
        id: 12,
        source: 'https://picsum.photos/250/190?image=124',
        title: 'Anton Sulsky'
      },
      13: {
        id: 13,
        source: 'https://picsum.photos/250/190?image=129',
        title: 'Charlie Foster'
      },
      14: {
        id: 14,
        source: 'https://picsum.photos/250/190?image=155',
        title: 'Christopher Sardegna'
      },
      15: {
        id: 15,
        source: 'https://picsum.photos/250/190?image=169',
        title: 'Noel Lopez'
      },
      16: {
        id: 16,
        source: 'https://picsum.photos/250/190?image=183',
        title: 'müllermarc'
      },
      17: {
        id: 17,
        source: 'https://picsum.photos/250/190?image=209',
        title: 'Martin Wessely'
      },
      18: {
        id: 18,
        source: 'https://picsum.photos/250/190?image=217',
        title: 'Tom Butler'
      },
      19: {
        id: 19,
        source: 'https://picsum.photos/250/190?image=244',
        title: 'Yair Hazout'
      },
      20: {
        id: 20,
        source: 'https://picsum.photos/250/190?image=281',
        title: 'Victor Erixon'
      },
      21: {
        id: 21,
        source: 'https://picsum.photos/250/190?image=292',
        title: 'Webvilla'
      },
      22: {
        id: 22,
        source: 'https://picsum.photos/250/190?image=308',
        title: 'Charles L.'
      }
    }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
