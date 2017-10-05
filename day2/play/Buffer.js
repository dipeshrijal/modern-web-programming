let buf =  Buffer.from("Hello", "utf8");

Buffer.alloc(10);

console.log(buf);
console.log(buf.toJSON());
console.log(buf[2]);
console.log(buf.toString());


buf.write("dip");
console.log(buf.toString());