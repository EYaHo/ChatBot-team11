require('dotenv').config();

const { RTMClient } = require('@slack/rtm-api');

const fs = require('fs');

let token;
try {
  token = fs.readFileSync(`${__dirname}/token`).toString('utf-8');
} catch (err) {
  console.error(err);
}
console.log(token);

let channel;
try {
  channel = fs.readFileSync(`${__dirname}/channelID`).toString('utf-8');
} catch (err) {
  console.error(err);
}
console.log(channel);

const rtm = new RTMClient(token);

(async () => {
  await rtm.start().catch(console.error);
})();

const assert = require('assert');
const greeting = require('./greeting');
const randomNumber = require('./randomNumber');

let num;
const numArr = [false, false, false];

for (let i = 0; i < 10; i += 1) {
  num = randomNumber();
  console.log(num);

  if (num === 1) {
    numArr[0] = true;
  }
  if (num === 2) {
    numArr[1] = true;
  }
  if (num === 3) {
    numArr[2] = true;
  }
}

describe('feature1 test - random', async () => {
  it('Test 1 - randomNumber should return 1', (done) => {
    assert.equal(numArr[0], true);
    console.log(numArr[0]);
    done();
  });
  it('Test 2 - randomNumber should return 2', (done) => {
    assert.equal(numArr[1], true);
    console.log(numArr[1]);
    done();
  });
  it('Test 3 - randomNumber should return 3', (done) => {
    assert.equal(numArr[1], true);
    console.log(numArr[1]);
    done();
  });
});

let greet;
const greetArr = [false, false, false];

for (let i = 0; i < 10; i += 1) {
  greet = greeting(rtm, channel);
  console.log(greet);

  if (greet === '안녕하세요.') {
    greetArr[0] = true;
  }
  if (greet === '반갑습니다.') {
    greetArr[1] = true;
  }
  if (greet === '환영합니다.') {
    greetArr[2] = true;
  }
}

describe('feature1 test - greet', async () => {
  it('Test 1 - greeting should return 안녕하세요.', (done) => {
    assert.equal(greetArr[0], true);
    console.log(greetArr[0]);
    done();
  });
  it('Test 2 - greeting should return 반갑습니다.', (done) => {
    assert.equal(greetArr[1], true);
    console.log(greetArr[1]);
    done();
  });
  it('Test 3 - greeting should return 환영합니다.', (done) => {
    assert.equal(greetArr[2], true);
    console.log(greetArr[2]);
    done();
  });
});
