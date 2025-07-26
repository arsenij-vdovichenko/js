//існуе 6 значень які призводяться тру фолс
console.log(Boolean(""));
console.log(Boolean(false));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(null));

//існуе три логічних оператори 
//логічні і syntax && якщо всі значення призводяться до тру то повертає значення якщо зустріло фолс то на нему і зупиняється
console.log(1 && 5 && null && "b" && 7);


//логічний оператор або || якщо в умові є хоч одне тру то його і повертає якщо в умові все призводиться до фолс то повертає останій фолс
console.log(0||false||NaN);
//логічний оператор НЕ ! перетворює в булеве значення на протележне
console.log(!undefined);
console.log(!undefined||NaN||null&&"coca cola");
//          true        false true
console.log(!"cat"||"hippo"&&undefined&&null );
//          false  true    false
console.log(!true&&"animal"||null||NaN&&!false);





