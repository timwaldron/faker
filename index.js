const mx = {}

require("fs").readdirSync(__dirname + "/lib/").forEach((file) => {
  try {
    if (file.startsWith("index") || !file.endsWith(".js"))
      return;

    let lib = file.replace(/.js/g, "");
    let req = {[lib]: require("./lib/" + lib)}

    Object.assign(mx, req);
  } catch (exception) {
    console.log("Exception requiring module " + file);
  }
});

module.exports = mx;