const { Client } = require("tplink-smarthome-api");

function timer(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, sec * 1000);
  });
}

async function run() {
  try {
    const client = new Client();
    const plug = await client.getDevice({ host: "172.16.3.27" });
    const status = await plug.getSysInfo();

    // if the plug is on, turn it off for 5 seconds and then turn it back on
    if (status.relay_state) {
      console.log("Outlet is on, doing nothing");
    } else {
      await plug.setPowerState(true);
      console.log("Turning it back on");
    }
  } catch (e) {
    console.log(">> ERROR >>", e);
  }
}

run();
