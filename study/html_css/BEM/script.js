var test = document.getElementById("toast");
console.log(test);

// toast function
function toast({ title = "", message = "", type = "info", duration = 3000 }) {}

toast({
  title: "success",
  message: "teat ne nha",
  type: "success",
  duration: 3000,
});
