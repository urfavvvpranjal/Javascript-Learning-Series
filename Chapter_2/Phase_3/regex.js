let form = document.querySelector("form");

form.addEventListener("submit",(evt)=>{
    evt.preventDefault();
    const regex = /^(?!.*\.\.)([A-Za-z0-9._%+-]+)@([A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+)$/;

    let ans = regex.test("p@ .a");
    console.log(ans);
});