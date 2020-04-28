const presetThemes = [
    {
        id: 0,
        theme: 'Aubergine',
        image: 'images/aubergine.png',
        themeColor: [
          "#3F0E40",
          "#350d36",
          "#1164A3",
          "#FFFFFF",
          "#350D36",
          "#FFFFFF",
          "#2BAC76",
          "#CD2553",
          "#350d36",
          "#FFFFFF"
        ],
    },
    {
        id: 1,
        theme: 'Ochin',
        image: 'images/ocean.png',
        themeColor: [
          '#303E4D',
          '#2C3849',
          '#6698C8',
          '#FFFFFF',
          '#4A5664',
          '#FFFFFF',
          '#94E864',
          '#78AF8F',
          '#2C3849',
          '#FFFFFF'
        ],
    },
    {
      id: 2,
      theme: 'Monument',
      image: 'images/monument.png',
      themeColor: [
        '#0D7E83',
        '#076570',
        '#F79F66',
        '#FFFFFF',
        '#D37C71',
        '#FFFFFF',
        '#F79F66',
        '#F15340',
        '#076570',
        '#FFFFFF'
      ],
    },
    {
        id: 3,
        theme: 'Work Hard',
        image: 'images/workhard.png',
        themeColor: [
          '#4D5250',
          '#444A47',
          '#D39B46',
          '#FFFFFF',
          '#434745',
          '#FFFFFF',
          '#99D04A',
          '#DB6668',
          '#444A47',
          '#FFFFFF'
        ],
    },
    {
      id: 4,
      theme: 'Aubergine Classic',
      image: 'images/aubergine_classic.png',
      themeColor: [
        '#4D394B',
        '#3E313C',
        '#4C9689',
        '#FFFFFF',
        '#3E313C',
        '#FFFFFF',
        '#38978D',
        '#EB4D5C',
        '#3E313C',
        '#FFFFFF'
      ],
    },
    {
      id: 5,
      theme: 'Eggplant',
      image: 'images/eggplant.png',
      themeColor: [
        '#FBFAF7',
        '#DCEEE4',
        '#4A154B',
        '#FBFAF7',
        '#DCEEE4',
        '#4A154B',
        '#2BAC76',
        '#BD3855',
        '#4A154B',
        '#FFFFFF'
      ]
    },
    {
      id: 6,
      theme: 'Hoth',
      image: 'images/hoth.png',
      themeColor: [
        '#F8F8FA',
        '#F8F8FA',
        '#2D9EE0',
        '#FFFFFF',
        '#FFFFFF',
        '#383F45',
        '#60D156',
        '#DC5960',
        '#F8F8FA',
        '#383F45'
      ],
    },
    {
      id: 7,
      theme: 'Mondrian',
      image: 'images/mondrian.png',
      themeColor: [
        '#FFFFFF',
        '#FFC806',
        '#000000',
        '#FFFFFF',
        '#FFC806',
        '#000000',
        '#000000',
        '#FD0B00',
        '#1F57E7',
        '#FFFFFF'
      ]
    },
    {
      id: 8,
      theme: 'Ultraviolet',
      image: 'images/ultraviolet.png',
      themeColor: [
        '#F5F5F5',
        '#F0F0F0',
        '#6715EB',
        '#FFFFFF',
        '#E8E8E8',
        '#1A1A1A',
        '#6715EB',
        '#CD2553',
        '#6715EB',
        '#FFFFFF'
      ]
    },
    {
      id: 9,
      theme: 'Mood Indigo',
      image: 'images/moodindigo.png',
      themeColor: [
        '#F8F8FA',
        '#E0E7FF',
        '#001A5E',
        '#F8F8FA',
        '#E0E7FF',
        '#001A5E',
        '#2153FF',
        '#2153FF',
        '#001A5E',
        '#FFFFFF'
      ]
    },
    {
      id: 10,
      theme: 'CMYK',
      image: 'images/CMYK.png',
      themeColor: [
        '#F2F4F7',
        '#FFE600',
        '#35C2FF',
        '#FFFFFF',
        '#FFE600',
        '#151834',
        '#35C2FF',
        '#E71FA3',
        '#E71FA3',
        '#FFFFFF'
      ]
    },
    {
      id: 11,
      theme: 'Nocturne',
      image: 'images/nocturne.png',
      themeColor: [
        '#1A1D21',
        '#000000',
        '#0576B9',
        '#FFFFFF',
        '#000000',
        '#FFFFFF',
        '#39E500',
        '#CC4400',
        '#000000',
        '#FFFFFF'
      ],
    },
    {
      id: 12,
      theme: 'Haberdashery',
      image: 'images/haberdashery.png',
      themeColor: [
        '#073642',
        '#002B36',
        '#7D6005',
        '#FDF6E3',
        '#002B36',
        '#FDF6E3',
        '#55D44E',
        '#DC322F',
        '#002B36',
        '#FDF6E3'
      ]
    },
    {
      id: 13,
      theme: 'Expensive',
      image: 'images/expensive.png',
      themeColor: [
        '#1A1D21',
        '#232527',
        '#3E4232',
        '#C9C49C',
        '#232527',
        '#C9C49C',
        '#C9C49C',
        '#3E4233',
        '#C9C49C',
        '#1A1D21'
      ]
    },
    {
      id: 14,
      theme: 'Terminal',
      image: 'images/terminal.png',
      themeColor: [
        '#1A1D21',
        '#1A2B23',
        '#4EE077',
        '#1A1D21',
        '#1A2B23',
        '#4EE077',
        '#4EE077',
        '#1C913D',
        '#1A2B23',
        '#4EE077'
      ]
    },
    {
      id: 15,
      theme: 'Sweet Treat',
      image: 'images/sweettreat.png',
      themeColor: [
        '#FFEEED',
        '#FFC2C0',
        '#FFC2C0',
        '#4A154B',
        '#FFFFFF',
        '#4A154B',
        '#FFA95A',
        '#37BD8D',
        '#FFC2C0',
        '#4A154B'
      ]
    },
    {
      id: 16,
      theme: 'Banana',
      image: 'images/banana.png',
      themeColor: [
        '#FFEB84',
        '#FFF8D4',
        '#FFC806',
        '#591035',
        '#FFF8D4',
        '#591035',
        '#4C6DC2',
        '#DD4147',
        '#FFC806',
        '#591035'
      ]
    },
    {
      id: 17,
      theme: 'Choco Mint',
      image: 'images/chocolate.png',
      themeColor: [
        '#544538',
        '#42362B',
        '#5DB09D',
        '#FFFFFF',
        '#4A3C30',
        '#FFFFFF',
        '#FFFFFF',
        '#5DB09D',
        '#42362B',
        '#FFFFFF'
      ],
    },
    {
      id: 18,
      theme: 'Discotheque',
      image: 'images/discotheque.png',
      themeColor: [
        '#6A1B1B',
        '#6A1B1B',
        '#D94422',
        '#FDF6E3',
        '#461412',
        '#FFD476',
        '#D67739',
        '#D94422',
        '#461412',
        '#FDF6E3'
      ]
    },
    {
      id: 19,
      theme: 'Tritanopia',
      image: 'images/brinjal.png',
      themeColor: [
        '#4F2F4C',
        '#452842',
        '#8C5888',
        '#FFFFFF',
        '#1C0B1A',
        '#FFFFFF',
        '#00FFB7',
        '#DE4C0D',
        '#452842',
        '#FFFFFF"'
      ],
  },
  {
      id: 20,
      theme: 'Protanopia & Deuteranopia',
      image: 'images/solanum.png',
      themeColor: [
        '#4F2F4C',
        '#452842',
        '#8C5888',
        '#FFFFFF',
        '#1C0B1A',
        '#FFFFFF',
        '#D0FF00',
        '#889100',
        '#452842',
        '#FFFFFF'
      ],
  },
]

export default presetThemes;