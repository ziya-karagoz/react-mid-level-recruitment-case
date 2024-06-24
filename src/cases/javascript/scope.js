// Bu kod çalıştırıldığında konsola ne yazılır? Neden?

function scopeTest() {
    var x = 1;
    if (true) {
      var x = 2;
      console.log(x);
    }
    console.log(x);
  }

scopeTest();