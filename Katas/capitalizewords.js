String.prototype.toJadenCase = function () {
    return this.split(' ')
                .map((item) => 
                (item[0].toUpperCase() + item.slice(1)))
                .join(' ');
    
  };

  const str = "How can mirrors be real if our eyes aren't real"
  console.log(str.toJadenCase());