const net = require("net");

const server = new net.Server((client) => {
    console.error("connected - " + client.remoteAddress);

    client.pipe(process.stdout);

    client.on("end", () => {
        console.error("end - " + client.remoteAddress);
    });
});

server.listen(9100, () => {
    console.error("Network Printer RAW protocol server started (port: 9100)");
});
