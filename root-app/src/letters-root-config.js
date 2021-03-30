import { registerApplication, start } from "single-spa";

registerApplication({
  name: "auth",
  app: () => System.import("http://localhost:4200/main.js"),
  activeWhen: ["/auth"]
});

registerApplication({
  name: "home",
  app: () => System.import("http://localhost:4201/main.js"),
  activeWhen: ["/home"]
});

start({
  urlRerouteOnly: true,
});
