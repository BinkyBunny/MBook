// Service for sending and receiving data from the hospital endpoint

// Importing the Api.js for HTTP

import Api from '@/services/Api.js'

// Making it exportable

export default {
  search (userdata) {
    return Api().post('/search', userdata)
  },
  hospital (userdata) {
    return Api().post('/hospital', userdata)
  }
}
