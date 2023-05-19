module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST','localhost'),
      port: env.int('DATABASE_PORT',3306),
      database: env('DATABASE_NAME','store'),
      user: env('DATABASE_USERNAME','root'),
      password: env('DATABASE_PASSWORD','password'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
