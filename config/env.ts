export default {
  local: {
    mongo: '127.0.0.1',
    redis: '127.0.0.1',
  },
  prod: {
    mongo: 'docker-mongo',
    redis: 'docker-redis',
  }
}