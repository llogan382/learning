let wr = (msg='--------') => console.log(`${msg}\n`);

// function basicRecursion(max, current) {
//   if (current > max) return;
//   wr(current);
//   basicRecursion(max, current+1);
// }

// basicRecursion(5,1);
// wr();
// wr();

function fibonacci(n) {
    if(n <= 2) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

for (var i = 1; i <= 20; i++) {
  wr(`${i}. ${fibonacci(i)}`);
}