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
    const plug = await client.getDevice({ host: "172.16.3.13" });
    const status = await plug.getSysInfo();
    const timeout = 1;
    
    console.log(new Date());

    // if the plug is on, turn it off for 5 seconds and then turn it back on
    if (status.relay_state) {
      console.log("Outlet is on, cycling power");
      await plug.setPowerState(false);
      console.log(`Waiting ${timeout} seconds`);
      await timer(timeout);
      console.log("Turning it back on");
      await plug.setPowerState(true);
    } else {
      console.log("Outlet is off. Doing nothing");
    }
  } catch (e) {
    console.log(">> ERROR >>", e);
  }
}

run();
