function togglequestion(mainelement){const element=mainelement.parentNode.parentNode
    if(!mainelement.parentNode.lastElementChild.style.height){closefaqelement(mainelement.parentNode.lastElementChild)
    return}
    var delay=false
    element.childNodes.forEach(node=>{if(node.tagName!=="DIV")return
    if(node.lastElementChild.style.height!=="0px"){closefaqelement(node.lastElementChild)
    delay=true}})
    if(delay){setTimeout(()=>{openfaqelement(mainelement.parentNode.lastElementChild)},400)}else{openfaqelement(mainelement.parentNode.lastElementChild)}}
    function openfaqelement(element){element.parentNode.firstElementChild.classList.add("selected")
    function getHeight(){element.style.display="block"
    var height=element.scrollHeight+"px"
    element.style.display="none"
    return height}
    const height=getHeight()
    element.style.display=""
    element.style.height=height
    setTimeout(()=>{if(element.style.height!==height)return
    element.style.height=""},400)}
    function closefaqelement(element){element.parentNode.firstElementChild.classList.remove("selected")
    element.style.height=`${element.scrollHeight}px`
    setTimeout(()=>{element.style.height="0"},1)}
    function sendmessage(){const message=document.getElementById("message").value
    const subject=document.getElementById("subject").value
    const email=document.getElementById("email").value
    const username=document.getElementById("username").value
    if(!message||!subject||!email||!username)return alert("Please fill all fields in order to send your message")
    fetch("/api/contact",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({message,subject,email,username})}).then(res=>res.json()).then(body=>{if(body.success){if(window.ttq)window.ttq.track("SubmitForm")
    if(window.fbq)window.fbq("track","Contact")
    alert(`Successfully sent message!`)
    document.getElementById("message").value=""
    document.getElementById("subject").value=""
    document.getElementById("email").value=""
    document.getElementById("username").value=""}else{alert(`Error: ${body.message}`)}}).catch(err=>{alert(`Error: ${err.message}`)})}
    function signup(){const email=document.getElementById("signupemail").value
    const phone=document.getElementById("signupphone").value
    if(!email)return alert("Please enter a email address in order to sign up!")
    fetch("/api/signupmailinglist",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({email,phone})}).then(res=>res.json()).then(body=>{if(body.success){if(window.ttq)window.ttq.track("SubmitForm")
    if(window.fbq)window.fbq("trackCustom","SignupMailingList")
    alert(`Successfully signed up to our mailing list!`)
    closesubscribepopup()
    document.getElementById("subscribebutton").onclick=()=>null
    document.getElementById("subscribebutton").style.cursor="not-allowed"}else{alert(`Error: ${body.message}`)}}).catch(err=>alert(`Error: ${err.message}`))}
    function subscribepopup(){const element=document.getElementById("subscribepopupwindow")
    const bg=document.getElementById("subscribepopupbg")
    element.classList.remove("hidden")
    bg.classList.remove("hidden")}
    function closesubscribepopup(){const element=document.getElementById("subscribepopupwindow")
    const bg=document.getElementById("subscribepopupbg")
    element.classList.add("hidden")
    bg.classList.add("hidden")}
    window.addEventListener("scroll",()=>{document.querySelector("header").classList.toggle("scrolling",window.scrollY>100)})