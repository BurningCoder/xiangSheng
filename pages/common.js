function sayHello(name) {
  console.log(`Hello ${name} !`)
}
function getName() {
  var appInstance = getApp()
  return appInstance.globalData.userInfo.name;
}

module.exports.sayHello = sayHello
exports.getName = getName