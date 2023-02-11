var hr = 0
var mn = 0
var sc = 0
var d = new Date()

setInterval(function () {
  d = new Date()
  hr = d.getHours()
  mn = d.getMinutes()
  sc = d.getSeconds()
}, 1000)
