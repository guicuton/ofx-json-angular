const ofx = require('ofx-convertjs');

const json = {id: 1, name: 'json'}
const data = ofx.toOfx(json);

