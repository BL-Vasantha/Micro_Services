module.exports = {
  apps: [
    {
      name: "user-service",

      script: "./src/server.js",

      instances: "max",

      exec_mode: "cluster",

      watch: false,

      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
}