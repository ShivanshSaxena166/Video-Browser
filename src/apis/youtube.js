import axios from 'axios'
const KEY='AIzaSyD0XDNOIQ-1U7FkgShfgepKZMXK6c2y3pA'
export default axios.create({
 baseURL: 'https://www.googleapis.com/youtube/v3',
 params:{
     part:'snippet',
     maxResult:10,
     key:KEY


 }

})