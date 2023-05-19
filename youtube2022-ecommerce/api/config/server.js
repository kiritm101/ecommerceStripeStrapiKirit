module.exports = ({ env }) => ({
  host: env('HOST', 'localhost'),
  port: env.int('PORT', 1337),
  
  app: {
    keys: env.array('APP_KEYS',['test',"a3819180aa1b7c68cf941adccf7404fee04f97b2273ab913df4a30ce63516cdcfd8b75940b486724cc61f2e5c67dac40dc69b824e235b30ed5a2e83c5c153bce08a9a4299988ac871454e74e3c06383e6ef4743280ff5730338031c1157623414ee2ed155b2b87fb56874ba6e3d33a6468bba74b61b735d503660e0cbd5b421a"]),
  },
});
