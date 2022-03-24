import {
  faFacebookSquare, faTwitterSquare, faInstagramSquare, faLinkedin, faYoutubeSquare
} from '@fortawesome/free-brands-svg-icons'
import {
  faPhoneSquare,
  faEnvelopeSquare,
  faMapMarked
} from "@fortawesome/free-solid-svg-icons";
import Jquery from 'jquery'
export default {
  APP_NAME: 'INCREMENT TECHNOLOGIES INC.',
  APP_TAGLINE: 'WE WANT YOU TO SUCCEED!',
  APP_EMAIL: 'incrementtech2020@gmail.com',
  APP_COPYRIGHT: 'INCREMENT TECHNOLOGIES 2022. All Rights Reserved. ',
  APP_DEVELOPER: 'Increment Technologies',
  APP_DEVELOPER_URL: 'https://incrementtechnologies.com',
  APP_PHONE_NUMBER: '(032) 436-1622',
  address: 'Unit 1201, Meridian Bldg. Golam Drive, Pope John Paull II Ave., Mabolo, Cebu City, Cebu, Philippines',
  api: 'https://mezzohotel.com/img/',
  host: 'https://mezzohotel.com/',
  booking_link: 'https://mezzohotel.com/managebooking.php',
  socialMedia: {
    facebook: 'https://www.facebook.com/incrementtechnologies'
  },

  footer1_contents: [{
    name: 'ABOUT US',
    description: 'Increment Technologies is a team of highly motivated technopreneurs. We do projects with a focus on quality and customer satisfaction. Our experience over the years let us create worthy online products.',
    subMenu: [{
      title: null,
      icon: null,
      url: null,
    }],
  },
  {
    name: 'CONTACT US',
    description: null,
    subMenu: [{
      title: '+63-032-436-1622',
      icon: faPhoneSquare,
      url: null,
      payload: 'tel:'
    },
    {
      title: 'incrementtech2020@gmail.com',
      icon: faEnvelopeSquare,
      url: 'incrementtech2020@gmail.com',
      payload: 'mailto:'
    }],
  }],
  footer2_contents: [{
    name: 'INFORMATION',
    title: 'Stories',
    icon: null,
    url: '/stories',
  },
  {
    title: 'Careers',
    icon: null,
    url: '/careers',
  },
  {
    title: 'Our Team',
    icon: null,
    url: '/team',
  },
  {
    title: 'Technologies',
    icon: null,
    url: '/technologies',
  },
  {
    title: 'Our Projects',
    icon: null,
    url: '/our-projects',
  },
  {
    title: 'Case Studies',
    icon: null,
    url: '/case-studies',
  },
  {
    title: 'Send Request',
    icon: null,
    url: '/send-request',
  }],
  footer3_contents: [{
    name: 'FOLLOW US',
    description: null,
    subMenu: [{
      title: null,
      icon: faFacebookSquare,
      url: 'https://www.facebook.com/incrementtechnologies',
    },
    {
      title: null,
      icon: faTwitterSquare,
      url: 'https://twitter.com/incrementtechn1',
    },
    {
      title: null,
      icon: faInstagramSquare,
      url: 'https://www.instagram.com/incrementtechph',
    },
    {
      title: null,
      icon: faLinkedin,
      url: 'https://www.linkedin.com/company/incrementtechnologies',
    },
    {
      title: null,
      icon: faYoutubeSquare,
      url: 'https://www.youtube.com/channel/UCHrXkUkrKD--S7W2e5b4LsA',
    }],
  },
  {
    name: 'LOCATION',
    description: 'Unit 1201, Meridian Bldg. Golam Drive, Pope John Paull II Ave., Mabolo, Cebu City, Cebu, Philippines',
    icon: faMapMarked,
    url: 'https://www.google.com/maps/place/The+Meridian/@10.3239246,123.9095656,19z/data=!3m1!4b1!4m5!3m4!1s0x33a999b33c3e8073:0x6e53cbaa3015872d!8m2!3d10.3239233!4d123.9101128',
    subMenu: [{
      title: null,
      icon: null,
      url: null,
    }],
  }
  ],

  delay: 15000,
  menus: [],
  packages: null,
  testimonials: [],
  rooms: [],
  restaurants: [],
  faq: [],
  gallery: [],
  addOns: [],
  announcements: [],
  blogs: [],
  activeMenu: '#top-view',
  load: {
    rooms: false,
    inquire: false,
    restaurants: false,
    testimonials: false,
    gallery: false,
    faq: false,
    footer: false
  },
  setLoad(div) {
    switch (div) {
      case '#faq':
        this.load.faq = true
        this.load.gallery = true
        this.load.testimonials = true
        this.load.restaurants = true
        this.load.inquire = true
        this.load.rooms = true
        break
      case '#gallery':
        this.load.gallery = true
        this.load.testimonials = true
        this.load.restaurants = true
        this.load.inquire = true
        this.load.rooms = true
        break
      case '#testimonials':
        this.load.testimonials = true
        this.load.restaurants = true
        this.load.inquire = true
        this.load.rooms = true
        break
      case '#restaurants':
        this.load.restaurants = true
        this.load.inquire = true
        this.load.rooms = true
        break
      case '#packages':
        this.load.inquire = true
        this.load.rooms = true
        break
      case '#rooms':
        this.load.rooms = true
        break
    }
  },
  getBlog() {
    this.blogs = []
    Jquery.get('https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/11/public/values?alt=json', response => {
      let entries = response.feed.entry
      for (var i = 0; i < entries.length; i += 7) {
        if (i > 6) {
          let object = {
            type: entries[i].content.$t,
            title: entries[i + 1].content.$t,
            image: entries[i].content.$t === 'internal_video' ? entries[i + 2].content.$t : this.host + 'img/' + entries[i + 2].content.$t,
            date: entries[i + 3].content.$t,
            author: entries[i + 4].content.$t,
            introduction: entries[i + 5].content.$t,
            content: entries[i + 6].content.$t,
          }
          this.blogs.push(object)
        }
      }
    })
  },
  getBasic() {
    Jquery.get('https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/3/public/values?alt=json', response => {
      let entries = response.feed.entry
      for (var i = 0; i < entries.length; i += 2) {
        if (i > 1) {
          switch (entries[i].content.$t) {
            case 'app_name':
              this.APP_NAME = entries[i + 1].content.$t
              break
            case 'app_tagline':
              this.APP_TAGLINE = entries[i + 1].content.$t
              break
            case 'app_email':
              this.APP_EMAIL = entries[i + 1].content.$t
              break
            case 'app_phone_number':
              this.APP_PHONE_NUMBER = entries[i + 1].content.$t
              break
            case 'address':
              this.address = entries[i + 1].content.$t
              break
            case 'app_header_background': {
              let image = entries[i + 1].content.$t
              let tempImages = image !== null ? image.split(',') : null
              let imagesArray = tempImages.map((item) => {
                return {
                  url: this.host + 'img/' + item
                }
              })
              this.APP_HEADER_BACKGROUND = imagesArray
              break
            }
            case 'app_header_mobile_background': {
              let image = entries[i + 1].content.$t
              let tempImages = image !== null ? image.split(',') : null
              let imagesArray = tempImages.map((item) => {
                return {
                  url: this.host + 'img/' + item
                }
              })
              this.APP_HEADER_MOBILE_BACKGROUND = imagesArray
              break
            }
          }
        }
      }
    })
  }
}