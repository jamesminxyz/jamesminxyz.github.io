gsap.registerPlugin(ScrollTrigger);let docBody=document.getElementById("body"),anchorTags=document.getElementsByTagName("a"),pageFadeDuration=.4,pageFadeTimeline=gsap.timeline();for(var i=0;i<anchorTags.length;i++)anchorTags[i].classList.contains("no-fade-link")||anchorTags[i].addEventListener("click",function(e){e.preventDefault();let a=this.href;pageFadeTimeline.to("#body",{opacity:0,duration:pageFadeDuration,ease:"none"}),pageFadeTimeline.to("#body",{delay:.1,onComplete:()=>{window.location=a}})});window.onload=function(){gsap.to("#body",{opacity:1,duration:+pageFadeDuration,ease:"none"})},window.onpageshow=function(e){e.persisted&&gsap.to("#body",{opacity:1,duration:0*pageFadeDuration,ease:"none"})};