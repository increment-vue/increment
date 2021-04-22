<template>
<div>
<div>
    
    <img :src="require('assets/img/bg-transportation.jpg')">
    <h1>Transportation System</h1>
    <h2>Starting Price: $7,000</h2>
    <div class="container">
        <a  href="https://calendly.com/incrementtech2020" type="button" class="btn btn-success custom">Inquire Now!</a>

    </div>
    
    
    <p id="text">What can a Software Development Company do with transportation? It can develop a high-quality fleet management system that could store information for public transportation, RFID system, and more. A fleet management system allows businesses to effectively organize and coordinate work vehicles to improve efficiency, reduce costs, and provide compliance with government’s standards and regulations.</p>
    <p id="text1">Increment Technologies can offer a variety of services, such as RFID system, ticketing system, payment, inventory, store passenger information, booking system, scheduling, or even contact tracing. We are capable of developing services based on your qualifications and we believe that this can create opportunities for you to increase your efficiency and reduce cost when it comes to manpower, convenience and effort.</p>
    <br>
    <br>
    <br>   
</div>
</div>
</template>
<script>
export default {
    
}
</script>
<style >
img{
    height: 600px;
    width: 100%;
    
    

}
#text{
    margin-top: 130px;
    margin-left: 115px;
    margin-right: 115px;
    font-size: 16px;
}
#text1{
    margin-top: 30px;
    margin-left: 115px;
    margin-right: 115px;
    font-size: 16px;

}

h1{
    color: white;
    margin-top: 150px;
    position: absolute;
    left: 26%;
    right: 26%;
    top: 98px;
    /* font-family: Open Sans; */
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 68px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
}
h2{
    position: absolute;
    width: 329px;
    height: 34px;
    left: 37%;
    top: 320px;
    /* margin-top: 115px; */
    font-style: normal;
    font-size: 30px;
    line-height: 41px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    color: #FFFFFF;

}
.btn-success {
    color: #fff;
    background-color: #00E68A;
    box-shadow: 0px 5px 10px rgba(255, 255, 255, 0.25);
    border-radius:10px;
    outline: none;
    border: 0px;
}
.btn {
    display: inline-block;
    font-weight: 400;
    margin-top: 180px;
    margin-left: 43%;

}
.container{
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
.custom:hover{
    background-color: #00E68A !important;
}

</style>