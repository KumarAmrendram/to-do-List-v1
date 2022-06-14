// we can either use module.exports or simply exports

exports.getDate = function () {

  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return today.toLocaleDateString("en-US", options);
};

exports.getDay = function() {

  let today = new Date();

  let options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);
}
