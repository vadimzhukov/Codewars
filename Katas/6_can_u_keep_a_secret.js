function createSecretHolder(secret) {
  let obj = {
    a: secret,
    getSecret() {
      return this.a;
    },
    setSecret(val) {
      this.a = val;
    }
  };
  return obj;
}

obj = createSecretHolder(5);

obj2 = createSecretHolder(8);

console.log(obj.getSecret());
console.log(obj.secret);

console.log(obj.setSecret(2));
console.log(obj.getSecret());

console.log(obj2.secret); 
console.log(obj2.setSecret(66));
console.log(obj2.getSecret());