<template>
<div>
<div>
<img class="image" src="../../assets/img/Company-Profile.jpg">
<h1 class="title"><b>Company Profiling</b></h1>
<h3 style="text-align:center;color:white;">Starting Price : $700</h3>
<button id="btn">Inquire Now!</button>
</div>
<div class="body">
<br>
<br>
<p>Company profiling is the very first step towards building your brand and presence to your target market. It allows a quick look into a company, allowing varied groups of people getting a general idea of what the company’s products or services are. One of the solutions to easily execute and build your company profile is through a website.</p>
<br>
<br>
<p>Increment Technologies Inc., masters the field of building websites for a company allowing it to integrate and suggest navigation as well as the contents on what to put specifically for their website. Offering various options, we cater to showcase product or service features, blog posts, portfolio or accomplished projects, call to action, newsletter, and more. We always make sure to hear out our client’s requests by making their vision into reality. 
</p>
</div>
</div>
</template>
<script>
export default{
    data(){
        return{
        }
    }
}
</script>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.image{
    height:350px;
    width:1350px;
}
.body{
    padding:10%;
    margin-top:-50px;
}
.title{
    margin-top:-200px;
    text-align:center;
    color:white;
}
#btn{
    margin-left:45%;
    background-color: #00E68A;
    color:white;
    //background: #00E68A;
    box-shadow: 0px 5px 10px rgba(255, 255, 255, 0.25);
    border-radius: 20px;
    border: none;
    //color: white;
    padding: 10px 20px;
    text-align: center;
    cursor: pointer;
}
</style>