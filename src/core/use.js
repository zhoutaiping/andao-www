import Vue from 'vue'
// mixins



import Fetch from '@/api/fetch'
import FetchAccount from '@/api/fetch-account'
import FetchApi from '@/api/fetch-api'
import Message from '@/utils/message'
import { installFilter } from '@/utils/filter'

installFilter(Vue)

Vue.prototype.Fetch = Fetch
Vue.prototype.FetchAccount = FetchAccount
Vue.prototype.FetchApi = FetchApi
Vue.prototype.Message = Message

// style
import 'normalize.css/normalize.css'
import '@/styles/index.scss'

// ui
import './antd-ui'

import DatePicker from 'ant-design-vue/lib/date-picker'
import 'ant-design-vue/lib/date-picker/style'

Vue.use(DatePicker)
