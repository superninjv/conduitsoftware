module.exports = {
  apps: [
    {
      name: "conduit-software",
      script: "node_modules/.bin/next",
      args: "start -p 3000",
      cwd: "/var/www/conduit-software",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      error_file: "/var/log/pm2/conduit-error.log",
      out_file: "/var/log/pm2/conduit-out.log",
    },
    // Add paragonroyale here if you want PM2 to manage both:
    // {
    //   name: "paragon-royale",
    //   script: "node_modules/.bin/next",
    //   args: "start -p 3001",
    //   cwd: "/var/www/paragon-royale",
    //   env: { NODE_ENV: "production", PORT: 3001 },
    // },
  ],
};
