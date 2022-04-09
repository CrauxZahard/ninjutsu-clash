// this file should be executed at least once to register the path

const server = require("fastify")({ logger: false });

server.register(require("fastify-static"), {
    root: process.cwd()
})

server.get('/home', async (_, reply) => {
    await reply.sendFile("index.html")
    return;
})

server.get('/view/:type', async (request, reply) => {
    await reply.sendFile(`src/view/${request.params.type}_view.html`)
    return;
})

module.exports = () => {
    server.listen(3000, (err, addr) => {
        console.log("server is running on ", addr)
    })
}