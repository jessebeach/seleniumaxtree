module.exports = {
  load: function () {
    return this.client
      .url('http://localhost:8080/index.html')
      .waitForElementVisible('body', 1000)
      .assert.title('Experiments');
  }
};
