
submit = () => {
    document.getElementById("popup").style.display = "flex";
}

close = () => {
    document.getElementById('popup').style.display = "none";
}



Email.send({
    Host : "smtp.elasticemail.com",
    Username : "mrfrayman",
    Password : "yjxyg9nn",
    To : 'therealmrfrayman@outlook.com',
    From : "you@isp.com",
    Subject : "New Landing Query",
    Body : "And this is the body"
}).then(
  message => submit()
);